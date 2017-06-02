/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Require Promise
 * Created by yanxlg on 2017/5/22 0022.
 * 本地存储，包括持久与临时
 * 不同页面存在不同的空间，接入存储时间控制，在get与set的时候会检查存储时间来清理一次
 * location.href 替换成 location.pathname
 * storage事件在当前页面不会广播，调整为当前页面也能接收到广播
 */
var store = localStorage;
var session = sessionStorage;

var encode = function encode(text) {
    return encodeURI(encodeURIComponent(encodeURI(text)));
};

var decode = function decode(text) {
    return decodeURI(decodeURIComponent(decodeURI(text)));
};
/****
 * 保存体构造器
 */

var Data = function Data(val, time) {
    _classCallCheck(this, Data);

    return JSON.stringify({
        _val: val,
        _create: new Date().getTime() / 1000,
        _save: time ? time : -1
    });
};

var Key = function Key(key) {
    _classCallCheck(this, Key);

    return JSON.stringify({
        _key: key,
        _url: location.pathname
    });
};

var Store = function () {
    function Store() {
        _classCallCheck(this, Store);
    }

    _createClass(Store, null, [{
        key: "set",
        value: function set(key, val, time) {
            //检查是否过去，页面单实例处理
            //通过url来区别不容的页面
            //time 保存时间，以s为单位
            var $key = encode(new Key(key));
            var $val = encode(new Data(val, time));
            store.setItem($key, $val);
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this = this;

            //获取当前页面的值
            var $key = encode(new Key(key));
            var $data = store.getItem($key);
            return !$data ? function () {
                return null;
            } : function () {
                $data = decode($data);
                $data = JSON.parse($data);
                if (_this.isOverduce($data)) {
                    store.removeItem($key);
                    return null;
                } else {
                    return $data._val;
                }
            };
        }
    }, {
        key: "isOverduce",
        value: function isOverduce(val) {
            var _save = val._save;
            return _save === -1 ? false : function () {
                var _create = val._create;
                return new Date().getTime() / 1000 - _create >= _save;
            };
        }
    }, {
        key: "remove",
        value: function remove(key) {
            var $key = encode(new Key(key));
            store.removeItem($key);
        }
    }, {
        key: "clear",
        value: function clear(page) {
            //清空当前页面的数据
            !page && (page = location.pathname);
            this.iterator().then(function (key, val, $page, $key) {
                if ($page === page) {
                    store.removeItem($key);
                }
            });
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            //清空所有数据
            store.clear();
        }
    }, {
        key: "length",
        value: function length() {
            return store.length;
        }
    }, {
        key: "enabled",
        value: function enabled() {
            return !!store;
        }
    }, {
        key: "iterator",
        value: function iterator() {
            //遍历取的时候也需要判断是否过去
            var $this = this;
            return new Promise(function (resolve) {
                for (var i = 0, len = store.length; i < len; i++) {
                    var $key = store.key(i);
                    var $keyObj = JSON.parse($key);
                    var $value = store.getItem($key);
                    var $valObj = JSON.parse($value);
                    if ($this.isOverduce($valObj)) {
                        store.removeItem($key);
                    } else {
                        resolve($this, $keyObj._key, $valObj._val, $keyObj._url, $key);
                        // callback.call($this,$keyObj._key,$valObj._val,$keyObj._url,$key);
                    }
                }
            });
        }
    }]);

    return Store;
}();

var Session = function () {
    function Session() {
        _classCallCheck(this, Session);
    }

    _createClass(Session, null, [{
        key: "set",
        value: function set(key, val, time) {
            //检查是否过去，页面单实例处理
            //通过url来区别不容的页面
            //time 保存时间，以s为单位
            var $key = encode(new Key(key));
            var $val = encode(new Data(val, time));
            session.setItem($key, $val);
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this2 = this;

            //获取当前页面的值
            var $key = encode(new Key(key));
            var $data = session.getItem($key);
            return !$data ? function () {
                return null;
            } : function () {
                $data = decode($data);
                $data = JSON.parse($data);
                if (_this2.isOverduce($data)) {
                    session.removeItem($key);
                    return null;
                } else {
                    return $data._val;
                }
            };
        }
    }, {
        key: "isOverduce",
        value: function isOverduce(val) {
            var _save = val._save;
            return _save === -1 ? false : function () {
                var _create = val._create;
                return new Date().getTime() / 1000 - _create >= _save;
            };
        }
    }, {
        key: "remove",
        value: function remove(key) {
            var $key = encode(new Key(key));
            session.removeItem($key);
        }
    }, {
        key: "clear",
        value: function clear(page) {
            //清空当前页面的数据
            !page && (page = location.pathname);
            this.iterator(function (key, val, $page, $key) {
                if ($page === page) {
                    session.removeItem($key);
                }
            });
        }
    }, {
        key: "clearAll",
        value: function clearAll() {
            //清空所有数据
            session.clear();
        }
    }, {
        key: "length",
        value: function length() {
            return session.length;
        }
    }, {
        key: "enabled",
        value: function enabled() {
            return !!session;
        }
    }, {
        key: "iterator",
        value: function iterator(callback) {
            //遍历取的时候也需要判断是否过去
            var $this = this;
            callback && function () {
                for (var i = 0, len = session.length; i < len; i++) {
                    var $key = session.key(i);
                    var $keyObj = JSON.parse(decode($key));
                    var $value = session.getItem($key);
                    var $valObj = JSON.parse(decode($value));
                    if ($this.isOverduce($valObj)) {
                        session.removeItem($key);
                    } else {
                        callback.call($this, $keyObj._key, $valObj._val, $keyObj._url, $key);
                    }
                }
            }();
        }
    }]);

    return Session;
}();

exports.store = Store;
exports.session = Session;
exports.encode = encode;
exports.decode = decode;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Require Promise
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/5/22 0022.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 广播事件，不同页面之间进行数据传递，本质是storage的事件，修复当前界面接收问题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _store = __webpack_require__(14);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addEvent = window.addEventListener || window.attachEvent;

var Broadcast = function () {
    function Broadcast() {
        _classCallCheck(this, Broadcast);
    }

    _createClass(Broadcast, null, [{
        key: "sendEvent",
        value: function sendEvent(eventName, eventData) {
            //当前页面不会触发，值相同不会触发  fix
            _store.store.set(eventName, eventData);
            this.dispatch(eventName, eventData); //当前页面触发
        }
    }, {
        key: "registerEvent",
        value: function registerEvent() {
            //当前页面中需要实现监听
            var p = new Promise(function () {
                addEvent("storage", function (ev) {
                    var $key = JSON.parse((0, _store.decode)(ev.key))._key;
                    var $val = JSON.parse((0, _store.decode)(ev.newValue))._val;
                    resolve($key, $val);
                });
            });
            this.promiseArr = this.promiseArr || [];
            this.promiseArr.push(p);
            return p;
        }
    }, {
        key: "dispatch",
        value: function dispatch(eventName, eventData) {
            //处理方法
            if (this.promiseArr) {
                this.promiseArr.forEach(function (promise) {
                    promise.resolve(eventName, eventData);
                });
            }
        }
    }]);

    return Broadcast;
}();

exports.default = Broadcast;

/***/ })

/******/ });