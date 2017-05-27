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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by yanxlg on 2017/5/26 0026.
 * 立即执行动画
 */
var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || function (callback) {
    setTimeout(function () {
        callback.call(undefined);
    }, 6000 / 100);
};
var transition = function transition(callback) {
    setTimeout(function () {
        requestAnimationFrame(callback);
    }, 0);
};

var transitionEnd = function () {
    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
    };
    for (var name in transEndEventNames) {
        if (typeof document.body.style[name] === "string") {
            return transEndEventNames[name];
        }
    }
}();

exports.requestAnimationFrame = requestAnimationFrame;
exports.transition = transition;
exports.transitionEnd = transitionEnd;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var require;

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Created by Promise on 2017/5/22 0022.
 */
!function (t) {
    if (t.Promise) return;
    t.Promise = function () {
        "use strict";

        function t(t) {
            return "function" == typeof t || "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && null !== t;
        }

        function e(t) {
            return "function" == typeof t;
        }

        function n(t) {
            I = t;
        }

        function r(t) {
            J = t;
        }

        function o() {
            return function () {
                return process.nextTick(a);
            };
        }

        function i() {
            return "undefined" != typeof H ? function () {
                H(a);
            } : c();
        }

        function s() {
            var t = 0,
                e = new V(a),
                n = document.createTextNode("");
            return e.observe(n, { characterData: !0 }), function () {
                n.data = t = ++t % 2;
            };
        }

        function u() {
            var t = new MessageChannel();
            return t.port1.onmessage = a, function () {
                return t.port2.postMessage(0);
            };
        }

        function c() {
            var t = setTimeout;
            return function () {
                return t(a, 1);
            };
        }

        function a() {
            for (var t = 0; t < G; t += 2) {
                var e = $[t],
                    n = $[t + 1];
                e(n), $[t] = void 0, $[t + 1] = void 0;
            }
            G = 0;
        }

        function f() {
            try {
                var t = require,
                    e = t("vertx");
                return H = e.runOnLoop || e.runOnContext, i();
            } catch (n) {
                return c();
            }
        }

        function l(t, e) {
            var n = arguments,
                r = this,
                o = new this.constructor(p);
            void 0 === o[et] && k(o);
            var i = r._state;
            return i ? !function () {
                var t = n[i - 1];
                J(function () {
                    return x(i, o, t, r._result);
                });
            }() : E(r, o, t, e), o;
        }

        function h(t) {
            var e = this;
            if (t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.constructor === e) return t;
            var n = new e(p);
            return g(n, t), n;
        }

        function p() {}

        function v() {
            return new TypeError("You cannot resolve a promise with itself");
        }

        function d() {
            return new TypeError("A promises callback cannot return that same promise.");
        }

        function _(t) {
            try {
                return t.then;
            } catch (e) {
                return it.error = e, it;
            }
        }

        function y(t, e, n, r) {
            try {
                t.call(e, n, r);
            } catch (o) {
                return o;
            }
        }

        function m(t, e, n) {
            J(function (t) {
                var r = !1,
                    o = y(n, e, function (n) {
                    r || (r = !0, e !== n ? g(t, n) : S(t, n));
                }, function (e) {
                    r || (r = !0, j(t, e));
                }, "Settle: " + (t._label || " unknown promise"));
                !r && o && (r = !0, j(t, o));
            }, t);
        }

        function b(t, e) {
            e._state === rt ? S(t, e._result) : e._state === ot ? j(t, e._result) : E(e, void 0, function (e) {
                return g(t, e);
            }, function (e) {
                return j(t, e);
            });
        }

        function w(t, n, r) {
            n.constructor === t.constructor && r === l && n.constructor.resolve === h ? b(t, n) : r === it ? (j(t, it.error), it.error = null) : void 0 === r ? S(t, n) : e(r) ? m(t, n, r) : S(t, n);
        }

        function g(e, n) {
            e === n ? j(e, v()) : t(n) ? w(e, n, _(n)) : S(e, n);
        }

        function A(t) {
            t._onerror && t._onerror(t._result), T(t);
        }

        function S(t, e) {
            t._state === nt && (t._result = e, t._state = rt, 0 !== t._subscribers.length && J(T, t));
        }

        function j(t, e) {
            t._state === nt && (t._state = ot, t._result = e, J(A, t));
        }

        function E(t, e, n, r) {
            var o = t._subscribers,
                i = o.length;
            t._onerror = null, o[i] = e, o[i + rt] = n, o[i + ot] = r, 0 === i && t._state && J(T, t);
        }

        function T(t) {
            var e = t._subscribers,
                n = t._state;
            if (0 !== e.length) {
                for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) {
                    r = e[s], o = e[s + n], r ? x(n, r, o, i) : o(i);
                }t._subscribers.length = 0;
            }
        }

        function M() {
            this.error = null;
        }

        function P(t, e) {
            try {
                return t(e);
            } catch (n) {
                return st.error = n, st;
            }
        }

        function x(t, n, r, o) {
            var i = e(r),
                s = void 0,
                u = void 0,
                c = void 0,
                a = void 0;
            if (i) {
                if (s = P(r, o), s === st ? (a = !0, u = s.error, s.error = null) : c = !0, n === s) return void j(n, d());
            } else s = o, c = !0;
            n._state !== nt || (i && c ? g(n, s) : a ? j(n, u) : t === rt ? S(n, s) : t === ot && j(n, s));
        }

        function C(t, e) {
            try {
                e(function (e) {
                    g(t, e);
                }, function (e) {
                    j(t, e);
                });
            } catch (n) {
                j(t, n);
            }
        }

        function O() {
            return ut++;
        }

        function k(t) {
            t[et] = ut++, t._state = void 0, t._result = void 0, t._subscribers = [];
        }

        function Y(t, e) {
            this._instanceConstructor = t, this.promise = new t(p), this.promise[et] || k(this.promise), B(e) ? (this._input = e, this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? S(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(), 0 === this._remaining && S(this.promise, this._result))) : j(this.promise, q());
        }

        function q() {
            return new Error("Array Methods must be provided an Array");
        }

        function F(t) {
            return new Y(this, t).promise;
        }

        function D(t) {
            var e = this;
            return new e(B(t) ? function (n, r) {
                for (var o = t.length, i = 0; i < o; i++) {
                    e.resolve(t[i]).then(n, r);
                }
            } : function (t, e) {
                return e(new TypeError("You must pass an array to race."));
            });
        }

        function K(t) {
            var e = this,
                n = new e(p);
            return j(n, t), n;
        }

        function L() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }

        function N() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }

        function U(t) {
            this[et] = O(), this._result = this._state = void 0, this._subscribers = [], p !== t && ("function" != typeof t && L(), this instanceof U ? C(this, t) : N());
        }

        function W() {
            var t = void 0;
            if ("undefined" != typeof global) t = global;else if ("undefined" != typeof self) t = self;else try {
                t = Function("return this")();
            } catch (e) {
                throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var n = t.Promise;
            if (n) {
                var r = null;
                try {
                    r = Object.prototype.toString.call(n.resolve());
                } catch (e) {}
                if ("[object Promise]" === r && !n.cast) return;
            }
            t.Promise = U;
        }

        var z = void 0;
        z = Array.isArray ? Array.isArray : function (t) {
            return "[object Array]" === Object.prototype.toString.call(t);
        };
        var B = z,
            G = 0,
            H = void 0,
            I = void 0,
            J = function J(t, e) {
            $[G] = t, $[G + 1] = e, G += 2, 2 === G && (I ? I(a) : tt());
        },
            Q = "undefined" != typeof window ? window : void 0,
            R = Q || {},
            V = R.MutationObserver || R.WebKitMutationObserver,
            X = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
            Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
            $ = new Array(1e3),
            tt = void 0;
        tt = X ? o() : V ? s() : Z ? u() : void 0 === Q && "function" == "function" ? f() : c();
        var et = Math.random().toString(36).substring(16),
            nt = void 0,
            rt = 1,
            ot = 2,
            it = new M(),
            st = new M(),
            ut = 0;
        return Y.prototype._enumerate = function () {
            for (var t = this.length, e = this._input, n = 0; this._state === nt && n < t; n++) {
                this._eachEntry(e[n], n);
            }
        }, Y.prototype._eachEntry = function (t, e) {
            var n = this._instanceConstructor,
                r = n.resolve;
            if (r === h) {
                var o = _(t);
                if (o === l && t._state !== nt) this._settledAt(t._state, e, t._result);else if ("function" != typeof o) this._remaining--, this._result[e] = t;else if (n === U) {
                    var i = new n(p);
                    w(i, t, o), this._willSettleAt(i, e);
                } else this._willSettleAt(new n(function (e) {
                    return e(t);
                }), e);
            } else this._willSettleAt(r(t), e);
        }, Y.prototype._settledAt = function (t, e, n) {
            var r = this.promise;
            r._state === nt && (this._remaining--, t === ot ? j(r, n) : this._result[e] = n), 0 === this._remaining && S(r, this._result);
        }, Y.prototype._willSettleAt = function (t, e) {
            var n = this;
            E(t, void 0, function (t) {
                return n._settledAt(rt, e, t);
            }, function (t) {
                return n._settledAt(ot, e, t);
            });
        }, U.all = F, U.race = D, U.resolve = h, U.reject = K, U._setScheduler = n, U._setAsap = r, U._asap = J, U.prototype = {
            constructor: U,
            then: l,
            "catch": function _catch(t) {
                return this.then(null, t);
            }
        }, U.polyfill = W, U.Promise = U, U;
    }();
}(typeof self !== 'undefined' ? self : undefined);
var Promise = typeof self !== 'undefined' ? self.Promise : undefined.Promise;
exports.default = Promise;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3), __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*! art-template@runtime | https://github.com/aui/art-template */

var detectNode = __webpack_require__(6);
var runtime = Object.create(detectNode ? global : window);

// 将目标转成字符
var toString = function toString(value) {
    if (typeof value !== 'string') {
        if (value === undefined || value === null) {
            value = '';
        } else if (typeof value === 'function') {
            value = toString(value.call(value));
        } else {
            value = JSON.stringify(value);
        }
    }

    return value;
};

// 编码 HTML 内容
var ESCAPE_REG = /["&'<>]/;
var xmlEscape = function xmlEscape(content) {
    var html = '' + content;
    var regexResult = ESCAPE_REG.exec(html);
    if (!regexResult) {
        return content;
    }

    var result = '';
    var i = void 0,
        lastIndex = void 0,
        char = void 0;
    for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {

        switch (html.charCodeAt(i)) {
            case 34:
                char = '&#34;';
                break;
            case 38:
                char = '&#38;';
                break;
            case 39:
                char = '&#39;';
                break;
            case 60:
                char = '&#60;';
                break;
            case 62:
                char = '&#62;';
                break;
            default:
                continue;
        }

        if (lastIndex !== i) {
            result += html.substring(lastIndex, i);
        }

        lastIndex = i + 1;
        result += char;
    }

    if (lastIndex !== i) {
        return result + html.substring(lastIndex, i);
    } else {
        return result;
    }
};

/**
 * 编码模板输出的内容
 * @param  {any}        content
 * @return {string}
 */
var escape = function escape(content) {
    return xmlEscape(toString(content));
};

/**
 * 迭代器，支持数组与对象
 * @param {array|Object} data 
 * @param {function}     callback 
 */
var each = function each(data, callback) {
    if (Array.isArray(data)) {
        for (var i = 0, len = data.length; i < len; i++) {
            callback(data[i], i, data);
        }
    } else {
        for (var _i in data) {
            callback(data[_i], _i);
        }
    }
};

runtime.$each = each;
runtime.$escape = escape;

module.exports = runtime;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(4);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = false;

// Only Node.JS has a process variable that is of [[Class]] process
try {
 module.exports = Object.prototype.toString.call(global.process) === '[object process]' 
} catch(e) {}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/5/26 0026.
 * id 生成序列
 */
var lastUuidAmend = 0;

var IDGenerator = function () {
    function IDGenerator() {
        _classCallCheck(this, IDGenerator);
    }

    _createClass(IDGenerator, null, [{
        key: "uuid",
        value: function uuid() {
            return new Date().getTime() * 1000 + lastUuidAmend++ % 1000;
        }
    }]);

    return IDGenerator;
}();

exports.default = IDGenerator;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var $imports = __webpack_require__(5);
module.exports = function ($data) {
    'use strict';
    $data = $data || {};
    var $$out = '', $escape = $imports.$escape, id = $data.id, size = $data.size, width = $data.width, height = $data.height, showHeader = $data.showHeader, moveable = $data.moveable, icon = $data.icon, title = $data.title, content = $data.content, showFooter = $data.showFooter, footerBtn = $data.footerBtn, $each = $imports.$each, btn = $data.btn, i = $data.i, backdrop = $data.backdrop;
    $$out += '<div class="modal fade" data-dialog-id="';
    $$out += $escape(id);
    $$out += '">\r\n    <div class="dialog ';
    $$out += $escape(size);
    $$out += '" style="width:';
    $$out += $escape(width ? width + 'px' : 'auto');
    $$out += ';height:';
    $$out += $escape(height ? height + 'px' : 'auto');
    $$out += ';">\r\n        ';
    if (showHeader) {
        $$out += '\r\n            <div class="dialog-header ';
        $$out += $escape(moveable ? 'dialog-moveable' : '');
        $$out += '">\r\n                ';
        if (icon) {
            $$out += '\r\n                    <div class="dialog-icon ';
            $$out += $escape(icon);
            $$out += '"></div>\r\n                ';
        }
        $$out += '\r\n                <div class="dialog-title">\r\n                    ';
        $$out += $escape(title);
        $$out += '\r\n                </div>\r\n                <div class="dialog-close icon-close"></div>\r\n            </div>\r\n        ';
    }
    $$out += '\r\n        <div class="dialog-content">\r\n            ';
    $$out += content;
    $$out += '\r\n        </div>\r\n        ';
    if (showFooter) {
        $$out += '\r\n            <div class="dialog-footer">\r\n                ';
        if (!footerBtn) {
            $$out += '\r\n                    <button data-operation="cancel" class="btn">取消</button>\r\n                    <button data-operation="ok" class="btn btn-primary">确定</button>\r\n                ';
        } else {
            $$out += '\r\n                    ';
            $each(footerBtn, function (btn, i) {
                $$out += '\r\n                        <button data-operation="cusBtn';
                $$out += $escape(i);
                $$out += '" class="btn ';
                $$out += $escape(btn.themeCss);
                $$out += '">';
                $$out += $escape(btn.text);
                $$out += '</button>\r\n                    ';
            });
            $$out += '\r\n                ';
        }
        $$out += '\r\n            </div>\r\n        ';
    }
    $$out += '\r\n    </div>\r\n</div>\r\n';
    if (backdrop) {
        $$out += '\r\n    <div class="modal-backdrop fade" data-for="dialog_id_';
        $$out += $escape(id);
        $$out += '"></div>\r\n';
    }
    return $$out;
};

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yanxlg on 2017/5/18 0018.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * fit 位置   高度调整为最佳高度，不是居中，可以控制为居中
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *  dialog 叠加显示   需要控制z-index
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * params
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      size  大小 默认为lg  sm  full
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      width  宽度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      height 高度
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      title 标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      showHeader 通过该字段来控制是否显示标题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      icon 对话框标题图标    主题图标
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      position 位置   fit or center                   js控制   参数设置位置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      backdrop  遮罩背景
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      modal  模态非模态
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      keyboard esc关闭对话框 默认为true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      moveable  是否可拖动  默认为false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      content 内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      showFooter 是否显示底部
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *      footerBtn  Array[{text:"",themeCss:""}]  底部按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Promise 多次回调问题
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _dialog = __webpack_require__(12);

var _dialog2 = _interopRequireDefault(_dialog);

var _cfIdGenerator = __webpack_require__(8);

var _cfIdGenerator2 = _interopRequireDefault(_cfIdGenerator);

var _cfTransition = __webpack_require__(1);

var _cfDrag = __webpack_require__(17);

var _cfDrag2 = _interopRequireDefault(_cfDrag);

var _Promise = __webpack_require__(2);

var _Promise2 = _interopRequireDefault(_Promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DIALOG_DEFAULT_OPTION = {
    size: "normal",
    width: "",
    height: "",
    title: "",
    showHeader: true,
    icon: "",
    position: "fit",
    backdrop: true,
    modal: false,
    keyboard: true,
    moveable: true,
    content: "<p>这是Dialog默认内容，需要使用其他内容来替换</p>",
    showFooter: true,
    footerBtn: null
};

var Dialog = function () {
    function Dialog(options, resolve, reject) {
        _classCallCheck(this, Dialog);

        options = options || {};
        this.size = options.size || DIALOG_DEFAULT_OPTION.size;
        this.width = options.width || DIALOG_DEFAULT_OPTION.width;
        this.height = options.height || DIALOG_DEFAULT_OPTION.height;
        this.title = options.title || DIALOG_DEFAULT_OPTION.title;
        this.showHeader = options.showHeader || DIALOG_DEFAULT_OPTION.showHeader;
        this.icon = options.icon || DIALOG_DEFAULT_OPTION.icon;
        this.position = options.position || DIALOG_DEFAULT_OPTION.position;
        this.backdrop = options.backdrop || DIALOG_DEFAULT_OPTION.backdrop;
        this.modal = options.modal || DIALOG_DEFAULT_OPTION.modal;
        this.keyboard = options.keyboard || DIALOG_DEFAULT_OPTION.keyboard;
        this.moveable = options.moveable || DIALOG_DEFAULT_OPTION.moveable;
        this.content = options.content || DIALOG_DEFAULT_OPTION.content;
        this.showFooter = options.content || DIALOG_DEFAULT_OPTION.showFooter;
        this.footerBtn = options.content || DIALOG_DEFAULT_OPTION.footerBtn;
        this.resolve = resolve;
        this.reject = reject;
        this.id = _cfIdGenerator2.default.uuid();
        this.create().show();
    }

    _createClass(Dialog, [{
        key: 'create',
        value: function create() {
            var _this = this;
            this._element = $((0, _dialog2.default)({
                size: this.size,
                width: this.width,
                height: this.height,
                title: this.title,
                showHeader: this.showHeader,
                icon: this.icon,
                position: this.position,
                backdrop: this.backdrop,
                content: this.content,
                showFooter: this.showFooter,
                footerBtn: this.footerBtn,
                moveable: this.moveable,
                id: this.id
            }));
            if (!this.modal) {
                this._element[0].onclick = function (event) {
                    var target = event.srcElement || event.target;
                    if (target.className.search(/modal/gi) >= 0) {
                        //关闭当前dialog
                        _this.close();
                    }
                };
            }
            if (this.keyboard) {
                //键盘esc按键关闭
                $(window).on("keydown." + this.id, function (e) {
                    var code = e.keyCode || e.which;
                    if (code === 27) {
                        _this.close();
                    }
                });
            }
            this.initMove();
            this.initEvent();
            return this;
        }
    }, {
        key: 'initPos',
        value: function initPos() {
            //position设置
            var _h = $(this._element[0]).find(".dialog").outerHeight();
            var win_h = window.screen.availHeight;
            var half = Math.max(0, (win_h - _h) / 2),
                top = void 0;
            switch (this.position) {
                case "fit":
                    //中间偏上
                    top = half * 2 / 3;
                    break;
                case "center":
                    top = half;
                    break;
                case "top":
                    top = 4;
                    break;
                case "bottom":
                    top = win_h - _h - 4;
                    break;
                case parseInt(this.position):
                    //数字
                    top = parseInt(this.position);
                    break;
                default:
                    top = half * 2 / 3;
                    break;
            }
            $(this._element[0]).find(".dialog").css({
                "margin-top": top + "px"
            });
        }
    }, {
        key: 'initMove',
        value: function initMove() {
            if (this.moveable) {
                this.dragInstance = new _cfDrag2.default($(this._element[0]).find(".dialog")[0], {
                    container: $(this._element[0]),
                    handle: '.dialog-header',
                    before: function before() {
                        $(this._element[0]).find(".dialog").css('position', 'absolute');
                    },
                    finish: function finish(e) {}
                });
            }
        }
    }, {
        key: 'initEvent',
        value: function initEvent() {
            var _this = this;
            $(this._element[0]).on("click", "[data-operation]", function () {
                var operation = $(this).attr("data-operation");
                if (operation === "cancel") _this.close();
                _this.resolve("operation_" + operation);
            });
        }
    }, {
        key: 'show',
        value: function show() {
            var _this = this;
            $("body").append(this._element);
            this.initPos();
            (0, _cfTransition.transition)(function () {
                _this._element.addClass("in");
            });
            return this;
        }
    }, {
        key: 'close',
        value: function close() {
            var _this = this;
            (0, _cfTransition.transition)(function () {
                _this.resolve("closeStart");
                _this._element.removeClass("in").on(_cfTransition.transitionEnd, function () {
                    _this._element.remove();
                    $(window).off("keydown." + _this.id);
                    if (_this.dragInstance) {
                        _this.dragInstance.destroy();
                    }
                    _this.resolve("closeEnd");
                });
            });
        }
    }]);

    return Dialog;
}();

var dialog = function dialog(options) {
    return new _Promise2.default(function (resolve, reject) {
        new Dialog(options, resolve, reject);
    });
};

dialog({
    width: "200",
    title: "测试",
    modal: false
}).then(function (type) {
    alert(type);
});

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by yanxlg on 2017/5/27 0027.
 * drag 拖动
 */

var DRAG_DEFAULT = {
    container: 'body',
    move: true
};
var idIncrementer = 0;

var Drag = function () {
    function Drag(element, options) {
        _classCallCheck(this, Drag);

        this.options = {
            container: options.container || DRAG_DEFAULT.container,
            move: options.move || DRAG_DEFAULT.move
        };
        this.id = idIncrementer++;
        this.$ = $(element);
        this.init();
    }

    _createClass(Drag, [{
        key: 'init',
        value: function init() {
            var _this = this;

            var that = this,
                $root = that.$,
                BEFORE = 'before',
                DRAG = 'drag',
                FINISH = 'finish',
                eventSuffix = '.' + that.id,
                mouseDownEvent = 'mousedown' + eventSuffix,
                mouseUpEvent = 'mouseup' + eventSuffix,
                mouseMoveEvent = 'mousemove' + eventSuffix,
                setting = that.options,
                selector = setting.selector,
                handle = setting.handle,
                $ele = $root,
                startPos = void 0,
                cPos = void 0,
                startOffset = void 0,
                mousePos = void 0,
                moved = void 0;

            var mouseMove = function mouseMove(event) {
                var mX = event.pageX,
                    mY = event.pageY;
                moved = true;
                var dragPos = {
                    left: mX - startOffset.x,
                    top: mY - startOffset.y,
                    position: "absolute",
                    "margin-top": 0
                };
                $ele.removeClass('drag-ready').addClass('dragging');
                if (setting.move) {
                    $ele.css(dragPos);
                }
                setting[DRAG] && setting[DRAG]({
                    event: event,
                    element: $ele,
                    startOffset: startOffset,
                    pos: dragPos,
                    offset: {
                        x: mX - startPos.x,
                        y: mY - startPos.y
                    },
                    smallOffset: {
                        x: mX - mousePos.x,
                        y: mY - mousePos.y
                    }
                });
                mousePos.x = mX;
                mousePos.y = mY;
                if (setting.stopPropagation) {
                    event.stopPropagation();
                }
            };

            var mouseUp = function mouseUp(event) {
                $(document).off(eventSuffix);
                if (!moved) {
                    $ele.removeClass('drag-ready');
                    return;
                }
                var endPos = {
                    left: event.pageX - startOffset.x,
                    top: event.pageY - startOffset.y
                };
                $ele.removeClass('drag-ready dragging');
                if (setting.move) {
                    $ele.css(endPos);
                }
                setting[FINISH] && setting[FINISH]({
                    event: event,
                    element: $ele,
                    startOffset: startOffset,
                    pos: endPos,
                    offset: {
                        x: event.pageX - startPos.x,
                        y: event.pageY - startPos.y
                    },
                    smallOffset: {
                        x: event.pageX - mousePos.x,
                        y: event.pageY - mousePos.y
                    }
                });
                event.preventDefault();
                if (setting.stopPropagation) {
                    event.stopPropagation();
                }
            };

            var mouseDown = function mouseDown(event) {
                var $mouseDownEle = $(_this);
                if (selector) {
                    $ele = handle ? $mouseDownEle.closest(selector) : $mouseDownEle;
                }
                if (setting[BEFORE]) {
                    var isSure = setting[BEFORE]({
                        event: event,
                        element: $ele
                    });
                    if (isSure === false) return;
                }

                var $container = $(setting.container),
                    pos = $ele.offset();
                cPos = $container.offset();
                startPos = {
                    x: event.pageX,
                    y: event.pageY
                };
                startOffset = {
                    x: event.pageX - pos.left + cPos.left,
                    y: event.pageY - pos.top + cPos.top
                };
                mousePos = $.extend({}, startPos);
                moved = false;

                $ele.addClass('drag-ready');
                event.preventDefault();

                if (setting.stopPropagation) {
                    event.stopPropagation();
                }

                $(document).on(mouseMoveEvent, mouseMove).on(mouseUpEvent, mouseUp);
            };

            if (handle) {
                $root.on(mouseDownEvent, handle, mouseDown);
            } else if (selector) {
                $root.on(mouseDownEvent, selector, mouseDown);
            } else {
                $root.on(mouseDownEvent, mouseDown);
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            var eventSuffix = '.' + this.id;
            this.$.off(eventSuffix);
            $(document).off(eventSuffix);
        }
    }]);

    return Drag;
}();

exports.default = Drag;

/***/ })
/******/ ]);