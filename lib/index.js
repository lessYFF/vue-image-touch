!(function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e(require('vue')))
        : 'function' == typeof define && define.amd
        ? define(['vue'], e)
        : ((t = t || self).imageTouch = e(t.Vue))
})(this, function(t) {
    'use strict'
    t = t && t.hasOwnProperty('default') ? t.default : t
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var e = function(t, n) {
        return (e =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function(t, e) {
                    t.__proto__ = e
                }) ||
            function(t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
            })(t, n)
    }
    function n(t, e, n, i) {
        var o,
            s = arguments.length,
            r = s < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, i)
        else
            for (var a = t.length - 1; a >= 0; a--)
                (o = t[a]) && (r = (s < 3 ? o(r) : s > 3 ? o(e, n, r) : o(e, n)) || r)
        return s > 3 && r && Object.defineProperty(e, n, r), r
    }
    'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
        ? global
        : 'undefined' != typeof self && self
    function i(t, e) {
        return t((e = { exports: {} }), e.exports), e.exports
    }
    var o = i(function(t) {
            /*! Hammer.JS - v2.0.7 - 2016-04-22
             * http://hammerjs.github.io/
             *
             * Copyright (c) 2016 Jorik Tangelder;
             * Licensed under the MIT license */
            !(function(e, n, i, o) {
                var s,
                    r = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
                    a = n.createElement('div'),
                    c = 'function',
                    h = Math.round,
                    u = Math.abs,
                    p = Date.now
                function l(t, e, n) {
                    return setTimeout(y(t, n), e)
                }
                function d(t, e, n) {
                    return !!Array.isArray(t) && (f(t, n[e], n), !0)
                }
                function f(t, e, n) {
                    var i
                    if (t)
                        if (t.forEach) t.forEach(e, n)
                        else if (t.length !== o) for (i = 0; i < t.length; ) e.call(n, t[i], i, t), i++
                        else for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
                }
                function v(t, n, i) {
                    var o = 'DEPRECATED METHOD: ' + n + '\n' + i + ' AT \n'
                    return function() {
                        var n = new Error('get-stack-trace'),
                            i =
                                n && n.stack
                                    ? n.stack
                                          .replace(/^[^\(]+?[\n$]/gm, '')
                                          .replace(/^\s+at\s+/gm, '')
                                          .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                                    : 'Unknown Stack Trace',
                            s = e.console && (e.console.warn || e.console.log)
                        return s && s.call(e.console, o, i), t.apply(this, arguments)
                    }
                }
                s =
                    'function' != typeof Object.assign
                        ? function(t) {
                              if (t === o || null === t)
                                  throw new TypeError('Cannot convert undefined or null to object')
                              for (var e = Object(t), n = 1; n < arguments.length; n++) {
                                  var i = arguments[n]
                                  if (i !== o && null !== i) for (var s in i) i.hasOwnProperty(s) && (e[s] = i[s])
                              }
                              return e
                          }
                        : Object.assign
                var m = v(
                        function(t, e, n) {
                            for (var i = Object.keys(e), s = 0; s < i.length; )
                                (!n || (n && t[i[s]] === o)) && (t[i[s]] = e[i[s]]), s++
                            return t
                        },
                        'extend',
                        'Use `assign`.'
                    ),
                    g = v(
                        function(t, e) {
                            return m(t, e, !0)
                        },
                        'merge',
                        'Use `assign`.'
                    )
                function A(t, e, n) {
                    var i,
                        o = e.prototype
                    ;((i = t.prototype = Object.create(o)).constructor = t), (i._super = o), n && s(i, n)
                }
                function y(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function b(t, e) {
                    return typeof t == c ? t.apply((e && e[0]) || o, e) : t
                }
                function _(t, e) {
                    return t === o ? e : t
                }
                function C(t, e, n) {
                    f(x(e), function(e) {
                        t.addEventListener(e, n, !1)
                    })
                }
                function w(t, e, n) {
                    f(x(e), function(e) {
                        t.removeEventListener(e, n, !1)
                    })
                }
                function T(t, e) {
                    for (; t; ) {
                        if (t == e) return !0
                        t = t.parentNode
                    }
                    return !1
                }
                function E(t, e) {
                    return t.indexOf(e) > -1
                }
                function x(t) {
                    return t.trim().split(/\s+/g)
                }
                function I(t, e, n) {
                    if (t.indexOf && !n) return t.indexOf(e)
                    for (var i = 0; i < t.length; ) {
                        if ((n && t[i][n] == e) || (!n && t[i] === e)) return i
                        i++
                    }
                    return -1
                }
                function O(t) {
                    return Array.prototype.slice.call(t, 0)
                }
                function S(t, e, n) {
                    for (var i = [], o = [], s = 0; s < t.length; ) {
                        var r = e ? t[s][e] : t[s]
                        I(o, r) < 0 && i.push(t[s]), (o[s] = r), s++
                    }
                    return (
                        n &&
                            (i = e
                                ? i.sort(function(t, n) {
                                      return t[e] > n[e]
                                  })
                                : i.sort()),
                        i
                    )
                }
                function W(t, e) {
                    for (var n, i, s = e[0].toUpperCase() + e.slice(1), a = 0; a < r.length; ) {
                        if ((i = (n = r[a]) ? n + s : e) in t) return i
                        a++
                    }
                    return o
                }
                var z = 1
                function P(t) {
                    var n = t.ownerDocument || t
                    return n.defaultView || n.parentWindow || e
                }
                var R = 'ontouchstart' in e,
                    M = W(e, 'PointerEvent') !== o,
                    L = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    j = 25,
                    D = 1,
                    k = 2,
                    N = 4,
                    B = 8,
                    X = 1,
                    Y = 2,
                    F = 4,
                    $ = 8,
                    U = 16,
                    V = Y | F,
                    q = $ | U,
                    H = V | q,
                    G = ['x', 'y'],
                    K = ['clientX', 'clientY']
                function Z(t, e) {
                    var n = this
                    ;(this.manager = t),
                        (this.callback = e),
                        (this.element = t.element),
                        (this.target = t.options.inputTarget),
                        (this.domHandler = function(e) {
                            b(t.options.enable, [t]) && n.handler(e)
                        }),
                        this.init()
                }
                function Q(t, e, n) {
                    var i = n.pointers.length,
                        s = n.changedPointers.length,
                        r = e & D && i - s == 0,
                        a = e & (N | B) && i - s == 0
                    ;(n.isFirst = !!r),
                        (n.isFinal = !!a),
                        r && (t.session = {}),
                        (n.eventType = e),
                        (function(t, e) {
                            var n = t.session,
                                i = e.pointers,
                                s = i.length
                            n.firstInput || (n.firstInput = J(e))
                            s > 1 && !n.firstMultiple ? (n.firstMultiple = J(e)) : 1 === s && (n.firstMultiple = !1)
                            var r = n.firstInput,
                                a = n.firstMultiple,
                                c = a ? a.center : r.center,
                                h = (e.center = tt(i))
                            ;(e.timeStamp = p()),
                                (e.deltaTime = e.timeStamp - r.timeStamp),
                                (e.angle = ot(c, h)),
                                (e.distance = it(c, h)),
                                (function(t, e) {
                                    var n = e.center,
                                        i = t.offsetDelta || {},
                                        o = t.prevDelta || {},
                                        s = t.prevInput || {}
                                    ;(e.eventType !== D && s.eventType !== N) ||
                                        ((o = t.prevDelta = { x: s.deltaX || 0, y: s.deltaY || 0 }),
                                        (i = t.offsetDelta = { x: n.x, y: n.y }))
                                    ;(e.deltaX = o.x + (n.x - i.x)), (e.deltaY = o.y + (n.y - i.y))
                                })(n, e),
                                (e.offsetDirection = nt(e.deltaX, e.deltaY))
                            var l = et(e.deltaTime, e.deltaX, e.deltaY)
                            ;(e.overallVelocityX = l.x),
                                (e.overallVelocityY = l.y),
                                (e.overallVelocity = u(l.x) > u(l.y) ? l.x : l.y),
                                (e.scale = a ? ((d = a.pointers), (f = i), it(f[0], f[1], K) / it(d[0], d[1], K)) : 1),
                                (e.rotation = a
                                    ? (function(t, e) {
                                          return ot(e[1], e[0], K) + ot(t[1], t[0], K)
                                      })(a.pointers, i)
                                    : 0),
                                (e.maxPointers = n.prevInput
                                    ? e.pointers.length > n.prevInput.maxPointers
                                        ? e.pointers.length
                                        : n.prevInput.maxPointers
                                    : e.pointers.length),
                                (function(t, e) {
                                    var n,
                                        i,
                                        s,
                                        r,
                                        a = t.lastInterval || e,
                                        c = e.timeStamp - a.timeStamp
                                    if (e.eventType != B && (c > j || a.velocity === o)) {
                                        var h = e.deltaX - a.deltaX,
                                            p = e.deltaY - a.deltaY,
                                            l = et(c, h, p)
                                        ;(i = l.x),
                                            (s = l.y),
                                            (n = u(l.x) > u(l.y) ? l.x : l.y),
                                            (r = nt(h, p)),
                                            (t.lastInterval = e)
                                    } else (n = a.velocity), (i = a.velocityX), (s = a.velocityY), (r = a.direction)
                                    ;(e.velocity = n), (e.velocityX = i), (e.velocityY = s), (e.direction = r)
                                })(n, e)
                            var d, f
                            var v = t.element
                            T(e.srcEvent.target, v) && (v = e.srcEvent.target)
                            e.target = v
                        })(t, n),
                        t.emit('hammer.input', n),
                        t.recognize(n),
                        (t.session.prevInput = n)
                }
                function J(t) {
                    for (var e = [], n = 0; n < t.pointers.length; )
                        (e[n] = { clientX: h(t.pointers[n].clientX), clientY: h(t.pointers[n].clientY) }), n++
                    return { timeStamp: p(), pointers: e, center: tt(e), deltaX: t.deltaX, deltaY: t.deltaY }
                }
                function tt(t) {
                    var e = t.length
                    if (1 === e) return { x: h(t[0].clientX), y: h(t[0].clientY) }
                    for (var n = 0, i = 0, o = 0; o < e; ) (n += t[o].clientX), (i += t[o].clientY), o++
                    return { x: h(n / e), y: h(i / e) }
                }
                function et(t, e, n) {
                    return { x: e / t || 0, y: n / t || 0 }
                }
                function nt(t, e) {
                    return t === e ? X : u(t) >= u(e) ? (t < 0 ? Y : F) : e < 0 ? $ : U
                }
                function it(t, e, n) {
                    n || (n = G)
                    var i = e[n[0]] - t[n[0]],
                        o = e[n[1]] - t[n[1]]
                    return Math.sqrt(i * i + o * o)
                }
                function ot(t, e, n) {
                    n || (n = G)
                    var i = e[n[0]] - t[n[0]],
                        o = e[n[1]] - t[n[1]]
                    return (180 * Math.atan2(o, i)) / Math.PI
                }
                Z.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && C(this.element, this.evEl, this.domHandler),
                            this.evTarget && C(this.target, this.evTarget, this.domHandler),
                            this.evWin && C(P(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && w(this.element, this.evEl, this.domHandler),
                            this.evTarget && w(this.target, this.evTarget, this.domHandler),
                            this.evWin && w(P(this.element), this.evWin, this.domHandler)
                    },
                }
                var st = { mousedown: D, mousemove: k, mouseup: N },
                    rt = 'mousedown',
                    at = 'mousemove mouseup'
                function ct() {
                    ;(this.evEl = rt), (this.evWin = at), (this.pressed = !1), Z.apply(this, arguments)
                }
                A(ct, Z, {
                    handler: function(t) {
                        var e = st[t.type]
                        e & D && 0 === t.button && (this.pressed = !0),
                            e & k && 1 !== t.which && (e = N),
                            this.pressed &&
                                (e & N && (this.pressed = !1),
                                this.callback(this.manager, e, {
                                    pointers: [t],
                                    changedPointers: [t],
                                    pointerType: 'mouse',
                                    srcEvent: t,
                                }))
                    },
                })
                var ht = { pointerdown: D, pointermove: k, pointerup: N, pointercancel: B, pointerout: B },
                    ut = { 2: 'touch', 3: 'pen', 4: 'mouse', 5: 'kinect' },
                    pt = 'pointerdown',
                    lt = 'pointermove pointerup pointercancel'
                function dt() {
                    ;(this.evEl = pt),
                        (this.evWin = lt),
                        Z.apply(this, arguments),
                        (this.store = this.manager.session.pointerEvents = [])
                }
                e.MSPointerEvent &&
                    !e.PointerEvent &&
                    ((pt = 'MSPointerDown'), (lt = 'MSPointerMove MSPointerUp MSPointerCancel')),
                    A(dt, Z, {
                        handler: function(t) {
                            var e = this.store,
                                n = !1,
                                i = t.type.toLowerCase().replace('ms', ''),
                                o = ht[i],
                                s = ut[t.pointerType] || t.pointerType,
                                r = 'touch' == s,
                                a = I(e, t.pointerId, 'pointerId')
                            o & D && (0 === t.button || r)
                                ? a < 0 && (e.push(t), (a = e.length - 1))
                                : o & (N | B) && (n = !0),
                                a < 0 ||
                                    ((e[a] = t),
                                    this.callback(this.manager, o, {
                                        pointers: e,
                                        changedPointers: [t],
                                        pointerType: s,
                                        srcEvent: t,
                                    }),
                                    n && e.splice(a, 1))
                        },
                    })
                var ft = { touchstart: D, touchmove: k, touchend: N, touchcancel: B },
                    vt = 'touchstart',
                    mt = 'touchstart touchmove touchend touchcancel'
                function gt() {
                    ;(this.evTarget = vt), (this.evWin = mt), (this.started = !1), Z.apply(this, arguments)
                }
                function At(t, e) {
                    var n = O(t.touches),
                        i = O(t.changedTouches)
                    return e & (N | B) && (n = S(n.concat(i), 'identifier', !0)), [n, i]
                }
                A(gt, Z, {
                    handler: function(t) {
                        var e = ft[t.type]
                        if ((e === D && (this.started = !0), this.started)) {
                            var n = At.call(this, t, e)
                            e & (N | B) && n[0].length - n[1].length == 0 && (this.started = !1),
                                this.callback(this.manager, e, {
                                    pointers: n[0],
                                    changedPointers: n[1],
                                    pointerType: 'touch',
                                    srcEvent: t,
                                })
                        }
                    },
                })
                var yt = { touchstart: D, touchmove: k, touchend: N, touchcancel: B },
                    bt = 'touchstart touchmove touchend touchcancel'
                function _t() {
                    ;(this.evTarget = bt), (this.targetIds = {}), Z.apply(this, arguments)
                }
                function Ct(t, e) {
                    var n = O(t.touches),
                        i = this.targetIds
                    if (e & (D | k) && 1 === n.length) return (i[n[0].identifier] = !0), [n, n]
                    var o,
                        s,
                        r = O(t.changedTouches),
                        a = [],
                        c = this.target
                    if (
                        ((s = n.filter(function(t) {
                            return T(t.target, c)
                        })),
                        e === D)
                    )
                        for (o = 0; o < s.length; ) (i[s[o].identifier] = !0), o++
                    for (o = 0; o < r.length; )
                        i[r[o].identifier] && a.push(r[o]), e & (N | B) && delete i[r[o].identifier], o++
                    return a.length ? [S(s.concat(a), 'identifier', !0), a] : void 0
                }
                A(_t, Z, {
                    handler: function(t) {
                        var e = yt[t.type],
                            n = Ct.call(this, t, e)
                        n &&
                            this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: 'touch',
                                srcEvent: t,
                            })
                    },
                })
                var wt = 2500,
                    Tt = 25
                function Et() {
                    Z.apply(this, arguments)
                    var t = y(this.handler, this)
                    ;(this.touch = new _t(this.manager, t)),
                        (this.mouse = new ct(this.manager, t)),
                        (this.primaryTouch = null),
                        (this.lastTouches = [])
                }
                function xt(t, e) {
                    t & D
                        ? ((this.primaryTouch = e.changedPointers[0].identifier), It.call(this, e))
                        : t & (N | B) && It.call(this, e)
                }
                function It(t) {
                    var e = t.changedPointers[0]
                    if (e.identifier === this.primaryTouch) {
                        var n = { x: e.clientX, y: e.clientY }
                        this.lastTouches.push(n)
                        var i = this.lastTouches
                        setTimeout(function() {
                            var t = i.indexOf(n)
                            t > -1 && i.splice(t, 1)
                        }, wt)
                    }
                }
                function Ot(t) {
                    for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var o = this.lastTouches[i],
                            s = Math.abs(e - o.x),
                            r = Math.abs(n - o.y)
                        if (s <= Tt && r <= Tt) return !0
                    }
                    return !1
                }
                A(Et, Z, {
                    handler: function(t, e, n) {
                        var i = 'touch' == n.pointerType,
                            o = 'mouse' == n.pointerType
                        if (!(o && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if (i) xt.call(this, e, n)
                            else if (o && Ot.call(this, n)) return
                            this.callback(t, e, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    },
                })
                var St = W(a.style, 'touchAction'),
                    Wt = St !== o,
                    zt = 'auto',
                    Pt = 'manipulation',
                    Rt = 'none',
                    Mt = 'pan-x',
                    Lt = 'pan-y',
                    jt = (function() {
                        if (!Wt) return !1
                        var t = {},
                            n = e.CSS && e.CSS.supports
                        return (
                            ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(i) {
                                t[i] = !n || e.CSS.supports('touch-action', i)
                            }),
                            t
                        )
                    })()
                function Dt(t, e) {
                    ;(this.manager = t), this.set(e)
                }
                Dt.prototype = {
                    set: function(t) {
                        'compute' == t && (t = this.compute()),
                            Wt && this.manager.element.style && jt[t] && (this.manager.element.style[St] = t),
                            (this.actions = t.toLowerCase().trim())
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = []
                        return (
                            f(this.manager.recognizers, function(e) {
                                b(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                            }),
                            (function(t) {
                                if (E(t, Rt)) return Rt
                                var e = E(t, Mt),
                                    n = E(t, Lt)
                                if (e && n) return Rt
                                if (e || n) return e ? Mt : Lt
                                if (E(t, Pt)) return Pt
                                return zt
                            })(t.join(' '))
                        )
                    },
                    preventDefaults: function(t) {
                        var e = t.srcEvent,
                            n = t.offsetDirection
                        if (this.manager.session.prevented) e.preventDefault()
                        else {
                            var i = this.actions,
                                o = E(i, Rt) && !jt[Rt],
                                s = E(i, Lt) && !jt[Lt],
                                r = E(i, Mt) && !jt[Mt]
                            if (o) {
                                var a = 1 === t.pointers.length,
                                    c = t.distance < 2,
                                    h = t.deltaTime < 250
                                if (a && c && h) return
                            }
                            if (!r || !s) return o || (s && n & V) || (r && n & q) ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        ;(this.manager.session.prevented = !0), t.preventDefault()
                    },
                }
                var kt = 1,
                    Nt = 2,
                    Bt = 4,
                    Xt = 8,
                    Yt = Xt,
                    Ft = 16
                function $t(t) {
                    ;(this.options = s({}, this.defaults, t || {})),
                        (this.id = z++),
                        (this.manager = null),
                        (this.options.enable = _(this.options.enable, !0)),
                        (this.state = kt),
                        (this.simultaneous = {}),
                        (this.requireFail = [])
                }
                function Ut(t) {
                    return t & Ft ? 'cancel' : t & Xt ? 'end' : t & Bt ? 'move' : t & Nt ? 'start' : ''
                }
                function Vt(t) {
                    return t == U ? 'down' : t == $ ? 'up' : t == Y ? 'left' : t == F ? 'right' : ''
                }
                function qt(t, e) {
                    var n = e.manager
                    return n ? n.get(t) : t
                }
                function Ht() {
                    $t.apply(this, arguments)
                }
                function Gt() {
                    Ht.apply(this, arguments), (this.pX = null), (this.pY = null)
                }
                function Kt() {
                    Ht.apply(this, arguments)
                }
                function Zt() {
                    $t.apply(this, arguments), (this._timer = null), (this._input = null)
                }
                function Qt() {
                    Ht.apply(this, arguments)
                }
                function Jt() {
                    Ht.apply(this, arguments)
                }
                function te() {
                    $t.apply(this, arguments),
                        (this.pTime = !1),
                        (this.pCenter = !1),
                        (this._timer = null),
                        (this._input = null),
                        (this.count = 0)
                }
                function ee(t, e) {
                    return ((e = e || {}).recognizers = _(e.recognizers, ee.defaults.preset)), new ne(t, e)
                }
                ;($t.prototype = {
                    defaults: {},
                    set: function(t) {
                        return s(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (d(t, 'recognizeWith', this)) return this
                        var e = this.simultaneous
                        return e[(t = qt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return d(t, 'dropRecognizeWith', this)
                            ? this
                            : ((t = qt(t, this)), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function(t) {
                        if (d(t, 'requireFailure', this)) return this
                        var e = this.requireFail
                        return -1 === I(e, (t = qt(t, this))) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (d(t, 'dropRequireFailure', this)) return this
                        t = qt(t, this)
                        var e = I(this.requireFail, t)
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        var e = this,
                            n = this.state
                        function i(n) {
                            e.manager.emit(n, t)
                        }
                        n < Xt && i(e.options.event + Ut(n)),
                            i(e.options.event),
                            t.additionalEvent && i(t.additionalEvent),
                            n >= Xt && i(e.options.event + Ut(n))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit()) return this.emit(t)
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length; ) {
                            if (!(this.requireFail[t].state & (32 | kt))) return !1
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = s({}, t)
                        if (!b(this.options.enable, [this, e])) return this.reset(), void (this.state = 32)
                        this.state & (Yt | Ft | 32) && (this.state = kt),
                            (this.state = this.process(e)),
                            this.state & (Nt | Bt | Xt | Ft) && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {},
                }),
                    A(Ht, $t, {
                        defaults: { pointers: 1 },
                        attrTest: function(t) {
                            var e = this.options.pointers
                            return 0 === e || t.pointers.length === e
                        },
                        process: function(t) {
                            var e = this.state,
                                n = t.eventType,
                                i = e & (Nt | Bt),
                                o = this.attrTest(t)
                            return i && (n & B || !o) ? e | Ft : i || o ? (n & N ? e | Xt : e & Nt ? e | Bt : Nt) : 32
                        },
                    }),
                    A(Gt, Ht, {
                        defaults: { event: 'pan', threshold: 10, pointers: 1, direction: H },
                        getTouchAction: function() {
                            var t = this.options.direction,
                                e = []
                            return t & V && e.push(Lt), t & q && e.push(Mt), e
                        },
                        directionTest: function(t) {
                            var e = this.options,
                                n = !0,
                                i = t.distance,
                                o = t.direction,
                                s = t.deltaX,
                                r = t.deltaY
                            return (
                                o & e.direction ||
                                    (e.direction & V
                                        ? ((o = 0 === s ? X : s < 0 ? Y : F),
                                          (n = s != this.pX),
                                          (i = Math.abs(t.deltaX)))
                                        : ((o = 0 === r ? X : r < 0 ? $ : U),
                                          (n = r != this.pY),
                                          (i = Math.abs(t.deltaY)))),
                                (t.direction = o),
                                n && i > e.threshold && o & e.direction
                            )
                        },
                        attrTest: function(t) {
                            return (
                                Ht.prototype.attrTest.call(this, t) &&
                                (this.state & Nt || (!(this.state & Nt) && this.directionTest(t)))
                            )
                        },
                        emit: function(t) {
                            ;(this.pX = t.deltaX), (this.pY = t.deltaY)
                            var e = Vt(t.direction)
                            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                        },
                    }),
                    A(Kt, Ht, {
                        defaults: { event: 'pinch', threshold: 0, pointers: 2 },
                        getTouchAction: function() {
                            return [Rt]
                        },
                        attrTest: function(t) {
                            return (
                                this._super.attrTest.call(this, t) &&
                                (Math.abs(t.scale - 1) > this.options.threshold || this.state & Nt)
                            )
                        },
                        emit: function(t) {
                            if (1 !== t.scale) {
                                var e = t.scale < 1 ? 'in' : 'out'
                                t.additionalEvent = this.options.event + e
                            }
                            this._super.emit.call(this, t)
                        },
                    }),
                    A(Zt, $t, {
                        defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
                        getTouchAction: function() {
                            return [zt]
                        },
                        process: function(t) {
                            var e = this.options,
                                n = t.pointers.length === e.pointers,
                                i = t.distance < e.threshold,
                                o = t.deltaTime > e.time
                            if (((this._input = t), !i || !n || (t.eventType & (N | B) && !o))) this.reset()
                            else if (t.eventType & D)
                                this.reset(),
                                    (this._timer = l(
                                        function() {
                                            ;(this.state = Yt), this.tryEmit()
                                        },
                                        e.time,
                                        this
                                    ))
                            else if (t.eventType & N) return Yt
                            return 32
                        },
                        reset: function() {
                            clearTimeout(this._timer)
                        },
                        emit: function(t) {
                            this.state === Yt &&
                                (t && t.eventType & N
                                    ? this.manager.emit(this.options.event + 'up', t)
                                    : ((this._input.timeStamp = p()),
                                      this.manager.emit(this.options.event, this._input)))
                        },
                    }),
                    A(Qt, Ht, {
                        defaults: { event: 'rotate', threshold: 0, pointers: 2 },
                        getTouchAction: function() {
                            return [Rt]
                        },
                        attrTest: function(t) {
                            return (
                                this._super.attrTest.call(this, t) &&
                                (Math.abs(t.rotation) > this.options.threshold || this.state & Nt)
                            )
                        },
                    }),
                    A(Jt, Ht, {
                        defaults: { event: 'swipe', threshold: 10, velocity: 0.3, direction: V | q, pointers: 1 },
                        getTouchAction: function() {
                            return Gt.prototype.getTouchAction.call(this)
                        },
                        attrTest: function(t) {
                            var e,
                                n = this.options.direction
                            return (
                                n & (V | q)
                                    ? (e = t.overallVelocity)
                                    : n & V
                                    ? (e = t.overallVelocityX)
                                    : n & q && (e = t.overallVelocityY),
                                this._super.attrTest.call(this, t) &&
                                    n & t.offsetDirection &&
                                    t.distance > this.options.threshold &&
                                    t.maxPointers == this.options.pointers &&
                                    u(e) > this.options.velocity &&
                                    t.eventType & N
                            )
                        },
                        emit: function(t) {
                            var e = Vt(t.offsetDirection)
                            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                        },
                    }),
                    A(te, $t, {
                        defaults: {
                            event: 'tap',
                            pointers: 1,
                            taps: 1,
                            interval: 300,
                            time: 250,
                            threshold: 9,
                            posThreshold: 10,
                        },
                        getTouchAction: function() {
                            return [Pt]
                        },
                        process: function(t) {
                            var e = this.options,
                                n = t.pointers.length === e.pointers,
                                i = t.distance < e.threshold,
                                o = t.deltaTime < e.time
                            if ((this.reset(), t.eventType & D && 0 === this.count)) return this.failTimeout()
                            if (i && o && n) {
                                if (t.eventType != N) return this.failTimeout()
                                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                    r = !this.pCenter || it(this.pCenter, t.center) < e.posThreshold
                                if (
                                    ((this.pTime = t.timeStamp),
                                    (this.pCenter = t.center),
                                    r && s ? (this.count += 1) : (this.count = 1),
                                    (this._input = t),
                                    0 === this.count % e.taps)
                                )
                                    return this.hasRequireFailures()
                                        ? ((this._timer = l(
                                              function() {
                                                  ;(this.state = Yt), this.tryEmit()
                                              },
                                              e.interval,
                                              this
                                          )),
                                          Nt)
                                        : Yt
                            }
                            return 32
                        },
                        failTimeout: function() {
                            return (
                                (this._timer = l(
                                    function() {
                                        this.state = 32
                                    },
                                    this.options.interval,
                                    this
                                )),
                                32
                            )
                        },
                        reset: function() {
                            clearTimeout(this._timer)
                        },
                        emit: function() {
                            this.state == Yt &&
                                ((this._input.tapCount = this.count),
                                this.manager.emit(this.options.event, this._input))
                        },
                    }),
                    (ee.VERSION = '2.0.7'),
                    (ee.defaults = {
                        domEvents: !1,
                        touchAction: 'compute',
                        enable: !0,
                        inputTarget: null,
                        inputClass: null,
                        preset: [
                            [Qt, { enable: !1 }],
                            [Kt, { enable: !1 }, ['rotate']],
                            [Jt, { direction: V }],
                            [Gt, { direction: V }, ['swipe']],
                            [te],
                            [te, { event: 'doubletap', taps: 2 }, ['tap']],
                            [Zt],
                        ],
                        cssProps: {
                            userSelect: 'none',
                            touchSelect: 'none',
                            touchCallout: 'none',
                            contentZooming: 'none',
                            userDrag: 'none',
                            tapHighlightColor: 'rgba(0,0,0,0)',
                        },
                    })
                function ne(t, e) {
                    var n
                    ;(this.options = s({}, ee.defaults, e || {})),
                        (this.options.inputTarget = this.options.inputTarget || t),
                        (this.handlers = {}),
                        (this.session = {}),
                        (this.recognizers = []),
                        (this.oldCssProps = {}),
                        (this.element = t),
                        (this.input = new ((n = this).options.inputClass || (M ? dt : L ? _t : R ? Et : ct))(n, Q)),
                        (this.touchAction = new Dt(this, this.options.touchAction)),
                        ie(this, !0),
                        f(
                            this.options.recognizers,
                            function(t) {
                                var e = this.add(new t[0](t[1]))
                                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                            },
                            this
                        )
                }
                function ie(t, e) {
                    var n,
                        i = t.element
                    i.style &&
                        (f(t.options.cssProps, function(o, s) {
                            ;(n = W(i.style, s)),
                                e
                                    ? ((t.oldCssProps[n] = i.style[n]), (i.style[n] = o))
                                    : (i.style[n] = t.oldCssProps[n] || '')
                        }),
                        e || (t.oldCssProps = {}))
                }
                ;(ne.prototype = {
                    set: function(t) {
                        return (
                            s(this.options, t),
                            t.touchAction && this.touchAction.update(),
                            t.inputTarget &&
                                (this.input.destroy(), (this.input.target = t.inputTarget), this.input.init()),
                            this
                        )
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session
                        if (!e.stopped) {
                            var n
                            this.touchAction.preventDefaults(t)
                            var i = this.recognizers,
                                o = e.curRecognizer
                            ;(!o || (o && o.state & Yt)) && (o = e.curRecognizer = null)
                            for (var s = 0; s < i.length; )
                                (n = i[s]),
                                    2 === e.stopped || (o && n != o && !n.canRecognizeWith(o))
                                        ? n.reset()
                                        : n.recognize(t),
                                    !o && n.state & (Nt | Bt | Xt) && (o = e.curRecognizer = n),
                                    s++
                        }
                    },
                    get: function(t) {
                        if (t instanceof $t) return t
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t) return e[n]
                        return null
                    },
                    add: function(t) {
                        if (d(t, 'add', this)) return this
                        var e = this.get(t.options.event)
                        return (
                            e && this.remove(e),
                            this.recognizers.push(t),
                            (t.manager = this),
                            this.touchAction.update(),
                            t
                        )
                    },
                    remove: function(t) {
                        if (d(t, 'remove', this)) return this
                        if ((t = this.get(t))) {
                            var e = this.recognizers,
                                n = I(e, t)
                            ;-1 !== n && (e.splice(n, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (t !== o && e !== o) {
                            var n = this.handlers
                            return (
                                f(x(t), function(t) {
                                    ;(n[t] = n[t] || []), n[t].push(e)
                                }),
                                this
                            )
                        }
                    },
                    off: function(t, e) {
                        if (t !== o) {
                            var n = this.handlers
                            return (
                                f(x(t), function(t) {
                                    e ? n[t] && n[t].splice(I(n[t], e), 1) : delete n[t]
                                }),
                                this
                            )
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents &&
                            (function(t, e) {
                                var i = n.createEvent('Event')
                                i.initEvent(t, !0, !0), (i.gesture = e), e.target.dispatchEvent(i)
                            })(t, e)
                        var i = this.handlers[t] && this.handlers[t].slice()
                        if (i && i.length) {
                            ;(e.type = t),
                                (e.preventDefault = function() {
                                    e.srcEvent.preventDefault()
                                })
                            for (var o = 0; o < i.length; ) i[o](e), o++
                        }
                    },
                    destroy: function() {
                        this.element && ie(this, !1),
                            (this.handlers = {}),
                            (this.session = {}),
                            this.input.destroy(),
                            (this.element = null)
                    },
                }),
                    s(ee, {
                        INPUT_START: D,
                        INPUT_MOVE: k,
                        INPUT_END: N,
                        INPUT_CANCEL: B,
                        STATE_POSSIBLE: kt,
                        STATE_BEGAN: Nt,
                        STATE_CHANGED: Bt,
                        STATE_ENDED: Xt,
                        STATE_RECOGNIZED: Yt,
                        STATE_CANCELLED: Ft,
                        STATE_FAILED: 32,
                        DIRECTION_NONE: X,
                        DIRECTION_LEFT: Y,
                        DIRECTION_RIGHT: F,
                        DIRECTION_UP: $,
                        DIRECTION_DOWN: U,
                        DIRECTION_HORIZONTAL: V,
                        DIRECTION_VERTICAL: q,
                        DIRECTION_ALL: H,
                        Manager: ne,
                        Input: Z,
                        TouchAction: Dt,
                        TouchInput: _t,
                        MouseInput: ct,
                        PointerEventInput: dt,
                        TouchMouseInput: Et,
                        SingleTouchInput: gt,
                        Recognizer: $t,
                        AttrRecognizer: Ht,
                        Tap: te,
                        Pan: Gt,
                        Swipe: Jt,
                        Pinch: Kt,
                        Rotate: Qt,
                        Press: Zt,
                        on: C,
                        off: w,
                        each: f,
                        merge: g,
                        extend: m,
                        assign: s,
                        inherit: A,
                        bindFn: y,
                        prefixed: W,
                    }),
                    ((void 0 !== e ? e : 'undefined' != typeof self ? self : {}).Hammer = ee),
                    'function' == typeof o && o.amd
                        ? o(function() {
                              return ee
                          })
                        : t.exports
                        ? (t.exports = ee)
                        : (e.Hammer = ee)
            })(window, document)
        }),
        s = i(function(t, e) {
            !(function(e) {
                function n(t) {
                    for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1]
                    for (var i = 0; i < e.length; i++)
                        for (var o = e[i], s = Object.keys(o), r = 0; r < s.length; r++) {
                            var a = s[r]
                            t[a] = o[a]
                        }
                    return t
                }
                function i() {
                    return {
                        type: Object,
                        default: function() {
                            return {}
                        },
                    }
                }
                e = 'default' in e ? e.default : e
                var o = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all'],
                    s = {},
                    r = {},
                    a = [
                        'pan',
                        'panstart',
                        'panmove',
                        'panend',
                        'pancancel',
                        'panleft',
                        'panright',
                        'panup',
                        'pandown',
                        'pinch',
                        'pinchstart',
                        'pinchmove',
                        'pinchend',
                        'pinchcancel',
                        'pinchin',
                        'pinchout',
                        'press',
                        'pressup',
                        'rotate',
                        'rotatestart',
                        'rotatemove',
                        'rotateend',
                        'rotatecancel',
                        'swipe',
                        'swipeleft',
                        'swiperight',
                        'swipeup',
                        'swipedown',
                        'tap',
                    ],
                    c = {
                        pan: 'pan',
                        panstart: 'pan',
                        panmove: 'pan',
                        panend: 'pan',
                        pancancel: 'pan',
                        panleft: 'pan',
                        panright: 'pan',
                        panup: 'pan',
                        pandown: 'pan',
                        pinch: 'pinch',
                        pinchstart: 'pinch',
                        pinchmove: 'pinch',
                        pinchend: 'pinch',
                        pinchcancel: 'pinch',
                        pinchin: 'pinch',
                        pinchout: 'pinch',
                        press: 'press',
                        pressup: 'press',
                        rotate: 'rotate',
                        rotatestart: 'rotate',
                        rotatemove: 'rotate',
                        rotateend: 'rotate',
                        rotatecancel: 'rotate',
                        swipe: 'swipe',
                        swipeleft: 'swipe',
                        swiperight: 'swipe',
                        swipeup: 'swipe',
                        swipedown: 'swipe',
                        tap: 'tap',
                    },
                    h = {
                        props: {
                            options: i(),
                            tapOptions: i(),
                            panOptions: i(),
                            pinchOptions: i(),
                            pressOptions: i(),
                            rotateOptions: i(),
                            swipeOptions: i(),
                            tag: { type: String, default: 'div' },
                            enabled: { default: !0, type: [Boolean, Object] },
                        },
                        mounted: function() {
                            this.$isServer ||
                                ((this.hammer = new e.Manager(this.$el, this.options)),
                                (this.recognizers = {}),
                                this.setupBuiltinRecognizers(),
                                this.setupCustomRecognizers(),
                                this.updateEnabled(this.enabled))
                        },
                        destroyed: function() {
                            this.$isServer || this.hammer.destroy()
                        },
                        watch: {
                            enabled: {
                                deep: !0,
                                handler: function() {
                                    for (var t, e = [], n = arguments.length; n--; ) e[n] = arguments[n]
                                    ;(t = this).updateEnabled.apply(t, e)
                                },
                            },
                        },
                        methods: {
                            setupBuiltinRecognizers: function() {
                                for (var t = 0; t < a.length; t++) {
                                    var e = a[t]
                                    if (this._events[e]) {
                                        var i = c[e],
                                            o = n({}, s[i] || {}, this[i + 'Options'])
                                        this.addRecognizer(i, o), this.addEvent(e)
                                    }
                                }
                            },
                            setupCustomRecognizers: function() {
                                for (var t = Object.keys(r), e = 0; e < t.length; e++) {
                                    var i = t[e]
                                    if (this._events[i]) {
                                        var o = n({}, r[i], this[i + 'Options'] || {})
                                        this.addRecognizer(i, o, { mainGesture: o.type }), this.addEvent(i)
                                    }
                                }
                            },
                            addRecognizer: function(t, n, i) {
                                void 0 === i && (i = {})
                                var s,
                                    r = i.mainGesture
                                if (!this.recognizers[t]) {
                                    var a = new e[((s = r || t), s.charAt(0).toUpperCase() + s.slice(1))](
                                        (function(t) {
                                            var n = t.direction
                                            if ('string' == typeof n) {
                                                var i = 'DIRECTION_' + n.toUpperCase()
                                                o.indexOf(n) > -1 && e.hasOwnProperty(i)
                                                    ? (t.direction = e[i])
                                                    : console.warn('[vue-touch] invalid direction: ' + n)
                                            }
                                            return t
                                        })(n)
                                    )
                                    ;(this.recognizers[t] = a),
                                        this.hammer.add(a),
                                        a.recognizeWith(this.hammer.recognizers)
                                }
                            },
                            addEvent: function(t) {
                                var e = this
                                this.hammer.on(t, function(n) {
                                    return e.$emit(t, n)
                                })
                            },
                            updateEnabled: function(t, e) {
                                if (!0 === t) this.enableAll()
                                else if (!1 === t) this.disableAll()
                                else if ('object' == typeof t)
                                    for (var n = Object.keys(t), i = 0; i < n.length; i++) {
                                        var o = n[i]
                                        this.recognizers[o] && (t[o] ? this.enable(o) : this.disable(o))
                                    }
                            },
                            enable: function(t) {
                                var e = this.recognizers[t]
                                e.options.enable || e.set({ enable: !0 })
                            },
                            disable: function(t) {
                                var e = this.recognizers[t]
                                e.options.enable && e.set({ enable: !1 })
                            },
                            toggle: function(t) {
                                var e = this.recognizers[t]
                                e && (e.options.enable ? this.disable(t) : this.enable(t))
                            },
                            enableAll: function(t) {
                                this.toggleAll({ enable: !0 })
                            },
                            disableAll: function(t) {
                                this.toggleAll({ enable: !1 })
                            },
                            toggleAll: function(t) {
                                for (var e = t.enable, n = Object.keys(this.recognizers), i = 0; i < n.length; i++) {
                                    var o = this.recognizers[n[i]]
                                    o.options.enable !== e && o.set({ enable: e })
                                }
                            },
                            isEnabled: function(t) {
                                return this.recognizers[t] && this.recognizers[t].options.enable
                            },
                        },
                        render: function(t) {
                            return t(this.tag, {}, this.$slots.default)
                        },
                    },
                    u = !1,
                    p = { config: s, customEvents: r }
                ;(p.install = function(t, e) {
                    void 0 === e && (e = {})
                    var i = e.name || 'v-touch'
                    t.component(i, n(h, { name: i })), (u = !0)
                }.bind(p)),
                    (p.registerCustomEvent = function(t, e) {
                        void 0 === e && (e = {}),
                            u
                                ? console.warn(
                                      "\n      [vue-touch]: Custom Event '" +
                                          t +
                                          "' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "
                                  )
                                : ((e.event = t),
                                  (r[t] = e),
                                  (h.props[t + 'Options'] = {
                                      type: Object,
                                      default: function() {
                                          return {}
                                      },
                                  }))
                    }.bind(p)),
                    (p.component = h),
                    (t.exports = p)
            })(o)
        }),
        r = 'undefined' != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
    function a(t, e, n) {
        ;(n ? Reflect.getOwnMetadataKeys(e, n) : Reflect.getOwnMetadataKeys(e)).forEach(function(i) {
            var o = n ? Reflect.getOwnMetadata(i, e, n) : Reflect.getOwnMetadata(i, e)
            n ? Reflect.defineMetadata(i, o, t, n) : Reflect.defineMetadata(i, o, t)
        })
    }
    var c = { __proto__: [] } instanceof Array
    function h(t) {
        'undefined' != typeof console && console.warn('[vue-class-component] ' + t)
    }
    var u = [
        'data',
        'beforeCreate',
        'created',
        'beforeMount',
        'mounted',
        'beforeDestroy',
        'destroyed',
        'beforeUpdate',
        'updated',
        'activated',
        'deactivated',
        'render',
        'errorCaptured',
        'serverPrefetch',
    ]
    function p(e, n) {
        void 0 === n && (n = {}), (n.name = n.name || e._componentTag || e.name)
        var i = e.prototype
        Object.getOwnPropertyNames(i).forEach(function(t) {
            if ('constructor' !== t)
                if (u.indexOf(t) > -1) n[t] = i[t]
                else {
                    var e = Object.getOwnPropertyDescriptor(i, t)
                    void 0 !== e.value
                        ? 'function' == typeof e.value
                            ? ((n.methods || (n.methods = {}))[t] = e.value)
                            : (n.mixins || (n.mixins = [])).push({
                                  data: function() {
                                      var n
                                      return ((n = {})[t] = e.value), n
                                  },
                              })
                        : (e.get || e.set) && ((n.computed || (n.computed = {}))[t] = { get: e.get, set: e.set })
                }
        }),
            (n.mixins || (n.mixins = [])).push({
                data: function() {
                    return (function(e, n) {
                        var i = n.prototype._init
                        n.prototype._init = function() {
                            var t = this,
                                n = Object.getOwnPropertyNames(e)
                            if (e.$options.props) for (var i in e.$options.props) e.hasOwnProperty(i) || n.push(i)
                            n.forEach(function(n) {
                                '_' !== n.charAt(0) &&
                                    Object.defineProperty(t, n, {
                                        get: function() {
                                            return e[n]
                                        },
                                        set: function(t) {
                                            e[n] = t
                                        },
                                        configurable: !0,
                                    })
                            })
                        }
                        var o = new n()
                        n.prototype._init = i
                        var s = {}
                        return (
                            Object.keys(o).forEach(function(t) {
                                void 0 !== o[t] && (s[t] = o[t])
                            }),
                            'production' !== process.env.NODE_ENV &&
                                !(n.prototype instanceof t) &&
                                Object.keys(s).length > 0 &&
                                h(
                                    'Component class must inherit Vue or its descendant class when class property is used.'
                                ),
                            s
                        )
                    })(this, e)
                },
            })
        var o = e.__decorators__
        o &&
            (o.forEach(function(t) {
                return t(n)
            }),
            delete e.__decorators__)
        var s,
            p,
            f = Object.getPrototypeOf(e.prototype),
            v = f instanceof t ? f.constructor : t,
            m = v.extend(n)
        return (
            (function(t, e, n) {
                Object.getOwnPropertyNames(e).forEach(function(i) {
                    if (!d[i]) {
                        var o = Object.getOwnPropertyDescriptor(t, i)
                        if (!o || o.configurable) {
                            var s,
                                r,
                                a = Object.getOwnPropertyDescriptor(e, i)
                            if (!c) {
                                if ('cid' === i) return
                                var u = Object.getOwnPropertyDescriptor(n, i)
                                if (
                                    ((s = a.value),
                                    (r = typeof s),
                                    null != s && ('object' === r || 'function' === r) && u && u.value === a.value)
                                )
                                    return
                            }
                            'production' !== process.env.NODE_ENV &&
                                l.indexOf(i) >= 0 &&
                                h(
                                    "Static property name '" +
                                        i +
                                        "' declared on class '" +
                                        e.name +
                                        "' conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property."
                                ),
                                Object.defineProperty(t, i, a)
                        }
                    }
                })
            })(m, e, v),
            r &&
                (a((s = m), (p = e)),
                Object.getOwnPropertyNames(p.prototype).forEach(function(t) {
                    a(s.prototype, p.prototype, t)
                }),
                Object.getOwnPropertyNames(p).forEach(function(t) {
                    a(s, p, t)
                })),
            m
        )
    }
    var l = [
            'cid',
            'super',
            'options',
            'superOptions',
            'extendOptions',
            'sealedOptions',
            'component',
            'directive',
            'filter',
        ],
        d = { prototype: !0, arguments: !0, callee: !0, caller: !0 }
    function f(t) {
        return 'function' == typeof t
            ? p(t)
            : function(e) {
                  return p(e, t)
              }
    }
    f.registerHooks = function(t) {
        u.push.apply(u, t)
    }
    var v = 'undefined' != typeof Reflect && void 0 !== Reflect.getMetadata
    function m(t) {
        return (
            void 0 === t && (t = {}),
            function(e, n) {
                var i
                !(function(t, e, n) {
                    v &&
                        (Array.isArray(t) ||
                            'function' == typeof t ||
                            void 0 !== t.type ||
                            (t.type = Reflect.getMetadata('design:type', e, n)))
                })(t, e, n),
                    ((i = function(e, n) {
                        ;(e.props || (e.props = {}))[n] = t
                    }),
                    function(t, e, n) {
                        var o = 'function' == typeof t ? t : t.constructor
                        o.__decorators__ || (o.__decorators__ = []),
                            'number' != typeof n && (n = void 0),
                            o.__decorators__.push(function(t) {
                                return i(t, e, n)
                            })
                    })(e, n)
            }
        )
    }
    t.use(s, { name: 'v-touch' })
    var g = (function(t) {
        function i() {
            var e = (null !== t && t.apply(this, arguments)) || this
            return (e.isShow = !1), (e.activedSub = 0), (e.touchWrapLeft = 0), (e.pinList = []), e
        }
        return (
            (function(t, n) {
                function i() {
                    this.constructor = t
                }
                e(t, n), (t.prototype = null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()))
            })(i, t),
            Object.defineProperty(i.prototype, 'pageWidth', {
                get: function() {
                    var t = window.innerWidth
                    return (
                        t ||
                            (t =
                                'CSS1Compat' === document.compatMode
                                    ? document.documentElement.clientWidth
                                    : document.body.clientWidth),
                        t + 16
                    )
                },
                enumerable: !0,
                configurable: !0,
            }),
            Object.defineProperty(i.prototype, 'touchWrapWidth', {
                get: function() {
                    return this.pageWidth * this.imageList.length
                },
                enumerable: !0,
                configurable: !0,
            }),
            (i.prototype.hidden = function() {
                this.isShow = !1
            }),
            (i.prototype.show = function(t) {
                ;(this.isShow = !0), this.reset()
            }),
            (i.prototype.swipeLeft = function() {
                var t = this.imageList.length - 1
                ;(this.activedSub = this.activedSub === t ? t : ++this.activedSub),
                    (this.touchWrapLeft = -this.pageWidth * this.activedSub)
            }),
            (i.prototype.swipeRight = function() {
                ;(this.activedSub = this.activedSub ? --this.activedSub : 0),
                    (this.touchWrapLeft = -this.pageWidth * this.activedSub)
            }),
            (i.prototype.pinchMove = function(t) {
                this.$set(this.pinList, this.activedSub, t.scale.toFixed(2))
            }),
            (i.prototype.pinchEnd = function(t) {
                var e = t.scale,
                    n = e < 1 ? 1 : e.toFixed(2)
                this.$set(this.pinList, this.activedSub, n)
            }),
            (i.prototype.panMove = function(t) {
                var e = t.additionalEvent,
                    n = t.distance,
                    i = t.velocity
                Math.abs(i) > 0.3 ||
                    ('panleft' === e
                        ? (this.touchWrapLeft = -(this.pageWidth * this.activedSub + Math.abs(n)))
                        : 'panright' === e && (this.touchWrapLeft = -(this.pageWidth * this.activedSub - Math.abs(n))))
            }),
            (i.prototype.panEnd = function(t) {
                var e = t.deltaX,
                    n = t.distance,
                    i = t.velocity
                this.pageWidth / 2 < Math.abs(n) && Math.abs(i) < 0.3
                    ? e < 0
                        ? this.swipeLeft()
                        : this.swipeRight()
                    : (this.touchWrapLeft = -this.pageWidth * this.activedSub)
            }),
            (i.prototype.reset = function() {
                ;(this.pinList = []),
                    (this.activedSub = this.activedIndex),
                    (this.touchWrapLeft = -this.pageWidth * this.activedIndex)
            }),
            n([m()], i.prototype, 'imageList', void 0),
            n([m({ default: !0 })], i.prototype, 'isShowBar', void 0),
            n([m({ default: 0 })], i.prototype, 'activedIndex', void 0),
            n([m({ default: '#000' })], i.prototype, 'bgColor', void 0),
            n([m({ default: 'left .3s ease' })], i.prototype, 'transition', void 0),
            (i = n([f], i))
        )
    })(t)
    var A,
        y = function(t, e, n, i, o, s, r, a, c, h) {
            'boolean' != typeof r && ((c = a), (a = r), (r = !1))
            var u,
                p = 'function' == typeof n ? n.options : n
            if (
                (t &&
                    t.render &&
                    ((p.render = t.render),
                    (p.staticRenderFns = t.staticRenderFns),
                    (p._compiled = !0),
                    o && (p.functional = !0)),
                i && (p._scopeId = i),
                s
                    ? ((u = function(t) {
                          ;(t =
                              t ||
                              (this.$vnode && this.$vnode.ssrContext) ||
                              (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                              'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                              (t = __VUE_SSR_CONTEXT__),
                              e && e.call(this, c(t)),
                              t && t._registeredComponents && t._registeredComponents.add(s)
                      }),
                      (p._ssrRegister = u))
                    : e &&
                      (u = r
                          ? function() {
                                e.call(this, h(this.$root.$options.shadowRoot))
                            }
                          : function(t) {
                                e.call(this, a(t))
                            }),
                u)
            )
                if (p.functional) {
                    var l = p.render
                    p.render = function(t, e) {
                        return u.call(e), l(t, e)
                    }
                } else {
                    var d = p.beforeCreate
                    p.beforeCreate = d ? [].concat(d, u) : [u]
                }
            return n
        },
        b = 'undefined' != typeof navigator && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())
    var _ = {}
    var C = function(t) {
        return function(t, e) {
            return (function(t, e) {
                var n = b ? e.media || 'default' : t,
                    i = _[n] || (_[n] = { ids: new Set(), styles: [] })
                if (!i.ids.has(t)) {
                    i.ids.add(t)
                    var o = e.source
                    if (
                        (e.map &&
                            ((o += '\n/*# sourceURL=' + e.map.sources[0] + ' */'),
                            (o +=
                                '\n/*# sourceMappingURL=data:application/json;base64,' +
                                btoa(unescape(encodeURIComponent(JSON.stringify(e.map)))) +
                                ' */')),
                        i.element ||
                            ((i.element = document.createElement('style')),
                            (i.element.type = 'text/css'),
                            e.media && i.element.setAttribute('media', e.media),
                            void 0 === A && (A = document.head || document.getElementsByTagName('head')[0]),
                            A.appendChild(i.element)),
                        'styleSheet' in i.element)
                    )
                        i.styles.push(o), (i.element.styleSheet.cssText = i.styles.filter(Boolean).join('\n'))
                    else {
                        var s = i.ids.size - 1,
                            r = document.createTextNode(o),
                            a = i.element.childNodes
                        a[s] && i.element.removeChild(a[s]),
                            a.length ? i.element.insertBefore(r, a[s]) : i.element.appendChild(r)
                    }
                }
            })(t, e)
        }
    }
    const w = g
    var T = function() {
        var t = this,
            e = t.$createElement,
            n = t._self._c || e
        return t.isShow
            ? n(
                  'v-touch',
                  {
                      on: {
                          panend: t.panEnd,
                          panmove: t.panMove,
                          pinchend: t.pinchEnd,
                          pinchmove: t.pinchMove,
                          swipeleft: t.swipeLeft,
                          swiperight: t.swipeRight,
                      },
                  },
                  [
                      n(
                          'div',
                          {
                              staticClass: 'image-touch',
                              class: [t.isShow ? 'zoomIn' : 'zoomOut'],
                              on: {
                                  click: function(e) {
                                      return e.stopPropagation(), t.hidden(e)
                                  },
                              },
                          },
                          [
                              n('div', { staticClass: 'image-touch-hd' }, [
                                  n('div', {
                                      staticClass: 'image-touch-hd__mask',
                                      style: { 'background-color': t.bgColor },
                                      on: {
                                          touchmove: function(t) {
                                              t.preventDefault(), t.stopPropagation()
                                          },
                                      },
                                  }),
                              ]),
                              t._v(' '),
                              n(
                                  'div',
                                  {
                                      staticClass: 'image-touch_bd',
                                      style: {
                                          transition: t.transition,
                                          width: t.touchWrapWidth + 'px',
                                          left: t.touchWrapLeft + 'px',
                                      },
                                  },
                                  t._l(t.imageList, function(e, i) {
                                      return n(
                                          'div',
                                          { staticClass: 'image-touch_bd__wrap', style: { width: t.pageWidth + 'px' } },
                                          [
                                              n('img', {
                                                  staticClass: 'image-touch_bd__img',
                                                  style: { transform: 'scale(' + (t.pinList[i] || 1) + ')' },
                                                  attrs: { src: e, alt: 'touch image' },
                                              }),
                                          ]
                                      )
                                  }),
                                  0
                              ),
                              t._v(' '),
                              t.isShowBar
                                  ? n(
                                        'div',
                                        { staticClass: 'image-touch_ft' },
                                        t._l(t.imageList, function(e, i) {
                                            return n('span', {
                                                staticClass: 'image-touch_ft__sub',
                                                class: { 'image-touch_ft__sub-actived': i === t.activedSub },
                                            })
                                        }),
                                        0
                                    )
                                  : t._e(),
                          ]
                      ),
                  ]
              )
            : t._e()
    }
    T._withStripped = !0
    var E = y(
        { render: T, staticRenderFns: [] },
        function(t) {
            t &&
                t('data-v-00c3c8e9_0', {
                    source:
                        '\n.image-touch[data-v-00c3c8e9] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform-origin: center;\n}\n.image-touch-hd__mask[data-v-00c3c8e9] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    z-index: 1000;\n    background-color: #000;\n}\n.image-touch_bd[data-v-00c3c8e9] {\n    position: fixed;\n    top: 50%;\n    z-index: 1001;\n    display: flex;\n    flex-flow: row nowrap;\n    justify-content: flex-start;\n    background-color: #000;\n    transform: translateY(-50%);\n    transition: left .3s ease;\n}\n.image-touch_bd__wrap[data-v-00c3c8e9] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    height: 80vh;\n    overflow: hidden;\n    margin-right: 10px;\n}\n.image-touch_ft[data-v-00c3c8e9] {\n    position: fixed;\n    bottom: 15px;\n    z-index: 1001;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n.image-touch_ft__sub[data-v-00c3c8e9] {\n    width: 8px;\n    height: 4px;\n    border-radius: 8px;\n    margin-right: 6px;\n    background-color: rgba(255, 255, 255, .3);\n}\n.image-touch_ft__sub.image-touch_ft__sub-actived[data-v-00c3c8e9] {\n    width: 12px;\n    background-color: rgba(255, 255, 255, 1);\n}\n.zoomIn[data-v-00c3c8e9] {\n    animation: zoomIn-data-v-00c3c8e9 .2s ease-in;\n}\n.zoomOut[data-v-00c3c8e9] {\n    animation: zoomOut-data-v-00c3c8e9 .2s ease-out;\n}\n@keyframes zoomIn-data-v-00c3c8e9 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes zoomOut-data-v-00c3c8e9 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n',
                    map: {
                        version: 3,
                        sources: ['/Users/yanfanfeng/workspace/npm/packages/vue-image-touch/src/image-touch.vue'],
                        names: [],
                        mappings:
                            ';AAgKA;IACA,kBAAA;IACA,MAAA;IACA,OAAA;IACA,WAAA;IACA,YAAA;IACA,wBAAA;AACA;AACA;IACA,eAAA;IACA,MAAA;IACA,OAAA;IACA,SAAA;IACA,QAAA;IACA,aAAA;IACA,sBAAA;AACA;AACA;IACA,eAAA;IACA,QAAA;IACA,aAAA;IACA,aAAA;IACA,qBAAA;IACA,2BAAA;IACA,sBAAA;IACA,2BAAA;IACA,yBAAA;AACA;AACA;IACA,oBAAA;IACA,mBAAA;IACA,uBAAA;IACA,YAAA;IACA,gBAAA;IACA,kBAAA;AACA;AAEA;IACA,eAAA;IACA,YAAA;IACA,aAAA;IACA,oBAAA;IACA,uBAAA;IACA,mBAAA;IACA,WAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;IACA,kBAAA;IACA,iBAAA;IACA,yCAAA;AACA;AAEA;IACA,WAAA;IACA,wCAAA;AACA;AAEA;IACA,6CAAA;AACA;AAEA;IACA,+CAAA;AACA;AAEA;AACA;IACA,UAAA;IACA,iCAAA;AACA;AAEA;IACA,UAAA;AACA;AACA;AACA;AACA;IACA,UAAA;AACA;AAEA;IACA,UAAA;AACA;AACA',
                        file: 'image-touch.vue',
                        sourcesContent: [
                            '\x3c!-- 移动端弹层图片交互：滑动／拖动／缩放 --\x3e\n<template>\n    <v-touch v-if="isShow"\n        @panend = "panEnd"\n        @panmove = "panMove"\n        @pinchend = "pinchEnd"\n        @pinchmove = "pinchMove"\n        @swipeleft="swipeLeft"\n        @swiperight="swipeRight">\n        <div class="image-touch"\n            :class="[isShow ? \'zoomIn\' : \'zoomOut\']"\n            @click.stop="hidden">\n            \x3c!-- 蒙层展示 --\x3e\n            <div class="image-touch-hd">\n                <div class="image-touch-hd__mask"\n                    :style="{\'background-color\': bgColor }"\n                    @touchmove.prevent.stop />\n            </div>\n            \x3c!-- 图片展示 --\x3e\n            <div class="image-touch_bd"\n                :style="{\n                    transition,\n                    width: `${touchWrapWidth}px`,\n                    left: `${touchWrapLeft}px`,\n                }">\n                <div class="image-touch_bd__wrap"\n                    :style="{ width: `${pageWidth}px`}"\n                    v-for="(item, index) of imageList">\n                    <img class="image-touch_bd__img"\n                        :style="{ transform: `scale(${ pinList[index] || 1})` }"\n                        :src="item" alt="touch image"/>\n                </div>\n            </div>\n            \x3c!-- 进度展示 --\x3e\n            <div class="image-touch_ft" v-if="isShowBar">\n                <span class="image-touch_ft__sub"\n                    :class="{\'image-touch_ft__sub-actived\': index === activedSub }"\n                    v-for="(item,index) of imageList">\n                </span>\n            </div>\n        </div>\n    </v-touch>\n</template>\n\n<script lang=\'ts\'>\nimport vueTouch from \'vue-touch\';\nimport { Vue, Component, Prop } from \'vue-property-decorator\';\n\nVue.use(vueTouch, { name: \'v-touch\' });\n@Component\nexport default class ImageTouch extends Vue {\n    @Prop() // 图片数据源\n    public imageList: Array<any>;\n\n    @Prop({ // 是否显示进度条\n        default: true,\n    })\n    public isShowBar: boolean;\n\n    @Prop({ // 选中目标\n        default: 0,\n    })\n    public activedIndex: number;\n\n    @Prop({ // 图片弹层背景\n        default: \'#000\',\n    })\n    public bgColor: string;\n\n    @Prop({ // 过渡动画\n        default: \'left .3s ease\',\n    })\n    public transition: string;\n\n    isShow: boolean = false;\n    activedSub: number = 0;\n    touchWrapLeft: number = 0;\n    pinList: Array<number> = [];\n\n    get pageWidth() {     // 页面宽度\n        let _pageWidth = window.innerWidth;\n\n        if (!_pageWidth ) {  //兼容性问题\n            if (document.compatMode === \'CSS1Compat\') {\n                _pageWidth = document.documentElement.clientWidth;  //适合移动版IE\n            } else {\n                _pageWidth = document.body.clientWidth;   //混杂模式下的IE\n            }\n        }\n\n        return _pageWidth + 16;\n    }\n\n    get touchWrapWidth() {    // 预览左偏移距离\n        return (this.pageWidth * this.imageList.length);\n    }\n\n    hidden() {  // 关闭预览\n        this.isShow = false;\n    }\n\n    show(args) { // 打开预览\n        this.isShow = true;\n        this.reset();\n    }\n\n    swipeLeft() { // 左滑\n        const max = this.imageList.length - 1;\n\n        this.activedSub = this.activedSub === max ? max : ++this.activedSub;\n        this.touchWrapLeft = - (this.pageWidth * this.activedSub);\n    }\n\n    swipeRight() { // 右滑\n        this.activedSub = !this.activedSub ? 0 : --this.activedSub;\n        this.touchWrapLeft = - (this.pageWidth * this.activedSub);\n    }\n\n    pinchMove(e) { // 缩小/放大执行\n        this.$set(this.pinList, this.activedSub, e.scale.toFixed(2));\n    }\n\n    pinchEnd(e) { // 缩小/放大停止\n        const { scale } = e;\n        const _scale = scale < 1 ? 1 : scale.toFixed(2);\n\n        this.$set(this.pinList, this.activedSub, _scale);\n    }\n\n    panMove(e) { // 左右拖动\n        const { additionalEvent, distance, velocity } = e;\n        if (Math.abs(velocity) > 0.3) return;\n\n        if (additionalEvent === \'panleft\') {\n            this.touchWrapLeft = - (this.pageWidth * this.activedSub + Math.abs(distance));\n        } else if (additionalEvent === \'panright\') {\n            this.touchWrapLeft = - (this.pageWidth * this.activedSub - Math.abs(distance));\n        }\n    }\n\n    panEnd(e) {  // 拖动结束归位或者滑动至下一个\n        const { deltaX, distance, velocity } = e;\n        const isSwipe = this.pageWidth/2 < Math.abs(distance) && Math.abs(velocity) < 0.3;\n\n        if (isSwipe) {\n            deltaX < 0 ? this.swipeLeft() : this.swipeRight();\n        } else {\n            this.touchWrapLeft = - (this.pageWidth * this.activedSub);\n        }\n    }\n\n    reset() { // 重置图片位置、进度和尺寸\n        this.pinList = [];\n        this.activedSub = this.activedIndex;\n        this.touchWrapLeft = - (this.pageWidth * this.activedIndex);\n    }\n}\n</script>\n\n<style scoped>\n    .image-touch {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        transform-origin: center;\n    }\n    .image-touch-hd__mask {\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        z-index: 1000;\n        background-color: #000;\n    }\n    .image-touch_bd {\n        position: fixed;\n        top: 50%;\n        z-index: 1001;\n        display: flex;\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n        background-color: #000;\n        transform: translateY(-50%);\n        transition: left .3s ease;\n    }\n    .image-touch_bd__wrap {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: 80vh;\n        overflow: hidden;\n        margin-right: 10px;\n    }\n\n    .image-touch_ft {\n        position: fixed;\n        bottom: 15px;\n        z-index: 1001;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n    }\n    .image-touch_ft__sub {\n        width: 8px;\n        height: 4px;\n        border-radius: 8px;\n        margin-right: 6px;\n        background-color: rgba(255, 255, 255, .3);\n    }\n\n    .image-touch_ft__sub.image-touch_ft__sub-actived {\n        width: 12px;\n        background-color: rgba(255, 255, 255, 1);\n    }\n\n    .zoomIn {\n        animation: zoomIn .2s ease-in;\n    }\n\n    .zoomOut {\n        animation: zoomOut .2s ease-out;\n    }\n\n    @keyframes zoomIn {\n      from {\n        opacity: 0;\n        transform: scale3d(0.2, 0.2, 0.2);\n      }\n\n      to {\n        opacity: 1;\n      }\n    }\n    @keyframes zoomOut {\n      from {\n        opacity: 1;\n      }\n\n      to {\n        opacity: 0;\n      }\n    }\n</style>\n',
                        ],
                    },
                    media: void 0,
                })
        },
        w,
        'data-v-00c3c8e9',
        !1,
        void 0,
        C,
        void 0
    )
    return {
        install: function(t, e) {
            var n,
                i = t.extend(E)
            t.prototype.$imageTouch = function(t) {
                var e
                return (
                    n || ((e = (n = new i()).$mount().$el), document.body.appendChild(e)),
                    'object' == typeof t && Object.assign(n, t),
                    n.show()
                )
            }
        },
    }
})
