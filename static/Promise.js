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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 13:
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14), __webpack_require__(0)))

/***/ }),

/***/ 14:
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


/***/ })

/******/ });