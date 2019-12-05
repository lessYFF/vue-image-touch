!(function(t, e) {
    if ('object' == typeof exports && 'object' == typeof module) module.exports = e(require('vue'))
    else if ('function' == typeof define && define.amd) define(['vue'], e)
    else {
        var n = 'object' == typeof exports ? e(require('vue')) : e(t.vue)
        for (var i in n) ('object' == typeof exports ? exports : t)[i] = n[i]
    }
})(window, function(t) {
    return (function(t) {
        var e = {}
        function n(i) {
            if (e[i]) return e[i].exports
            var r = (e[i] = { i: i, l: !1, exports: {} })
            return t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function(t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i })
            }),
            (n.r = function(t) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                    Object.defineProperty(t, '__esModule', { value: !0 })
            }),
            (n.t = function(t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t
                if (4 & e && 'object' == typeof t && t && t.__esModule) return t
                var i = Object.create(null)
                if (
                    (n.r(i),
                    Object.defineProperty(i, 'default', { enumerable: !0, value: t }),
                    2 & e && 'string' != typeof t)
                )
                    for (var r in t)
                        n.d(
                            i,
                            r,
                            function(e) {
                                return t[e]
                            }.bind(null, r)
                        )
                return i
            }),
            (n.n = function(t) {
                var e =
                    t && t.__esModule
                        ? function() {
                              return t.default
                          }
                        : function() {
                              return t
                          }
                return n.d(e, 'a', e), e
            }),
            (n.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (n.p = ''),
            n((n.s = 7))
        )
    })([
        function(e, n) {
            e.exports = t
        },
        function(t, e, n) {
            var i = n(5)
            'string' == typeof i && (i = [[t.i, i, '']]), i.locals && (t.exports = i.locals)
            ;(0, n(8).default)('e9f46124', i, !1, {})
        },
        function(t, e, n) {
            !(function(e) {
                'use strict'
                function n(t) {
                    for (var e = [], n = arguments.length - 1; n-- > 0; ) e[n] = arguments[n + 1]
                    for (var i = 0; i < e.length; i++)
                        for (var r = e[i], o = Object.keys(r), s = 0; s < o.length; s++) {
                            var a = o[s]
                            t[a] = r[a]
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
                var r = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all'],
                    o = {},
                    s = {},
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
                    u = {
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
                                            r = n({}, o[i] || {}, this[i + 'Options'])
                                        this.addRecognizer(i, r), this.addEvent(e)
                                    }
                                }
                            },
                            setupCustomRecognizers: function() {
                                for (var t = Object.keys(s), e = 0; e < t.length; e++) {
                                    var i = t[e]
                                    if (this._events[i]) {
                                        var r = n({}, s[i], this[i + 'Options'] || {})
                                        this.addRecognizer(i, r, { mainGesture: r.type }), this.addEvent(i)
                                    }
                                }
                            },
                            addRecognizer: function(t, n, i) {
                                void 0 === i && (i = {})
                                var o,
                                    s = i.mainGesture
                                if (!this.recognizers[t]) {
                                    var a = new e[((o = s || t), o.charAt(0).toUpperCase() + o.slice(1))](
                                        (function(t) {
                                            var n = t.direction
                                            if ('string' == typeof n) {
                                                var i = 'DIRECTION_' + n.toUpperCase()
                                                r.indexOf(n) > -1 && e.hasOwnProperty(i)
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
                                        var r = n[i]
                                        this.recognizers[r] && (t[r] ? this.enable(r) : this.disable(r))
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
                                    var r = this.recognizers[n[i]]
                                    r.options.enable !== e && r.set({ enable: e })
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
                    h = !1,
                    p = { config: o, customEvents: s }
                ;(p.install = function(t, e) {
                    void 0 === e && (e = {})
                    var i = e.name || 'v-touch'
                    t.component(i, n(u, { name: i })), (h = !0)
                }.bind(p)),
                    (p.registerCustomEvent = function(t, e) {
                        void 0 === e && (e = {}),
                            h
                                ? console.warn(
                                      "\n      [vue-touch]: Custom Event '" +
                                          t +
                                          "' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "
                                  )
                                : ((e.event = t),
                                  (s[t] = e),
                                  (u.props[t + 'Options'] = {
                                      type: Object,
                                      default: function() {
                                          return {}
                                      },
                                  }))
                    }.bind(p)),
                    (p.component = u),
                    (t.exports = p)
            })(n(3))
        },
        function(t, e, n) {
            var i
            /*! Hammer.JS - v2.0.7 - 2016-04-22
             * http://hammerjs.github.io/
             *
             * Copyright (c) 2016 Jorik Tangelder;
             * Licensed under the MIT license */ !(function(r, o, s, a) {
                'use strict'
                var c,
                    u = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'],
                    h = o.createElement('div'),
                    p = 'function',
                    l = Math.round,
                    f = Math.abs,
                    d = Date.now
                function v(t, e, n) {
                    return setTimeout(w(t, n), e)
                }
                function g(t, e, n) {
                    return !!Array.isArray(t) && (m(t, n[e], n), !0)
                }
                function m(t, e, n) {
                    var i
                    if (t)
                        if (t.forEach) t.forEach(e, n)
                        else if (t.length !== a) for (i = 0; i < t.length; ) e.call(n, t[i], i, t), i++
                        else for (i in t) t.hasOwnProperty(i) && e.call(n, t[i], i, t)
                }
                function y(t, e, n) {
                    var i = 'DEPRECATED METHOD: ' + e + '\n' + n + ' AT \n'
                    return function() {
                        var e = new Error('get-stack-trace'),
                            n =
                                e && e.stack
                                    ? e.stack
                                          .replace(/^[^\(]+?[\n$]/gm, '')
                                          .replace(/^\s+at\s+/gm, '')
                                          .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@')
                                    : 'Unknown Stack Trace',
                            o = r.console && (r.console.warn || r.console.log)
                        return o && o.call(r.console, i, n), t.apply(this, arguments)
                    }
                }
                c =
                    'function' != typeof Object.assign
                        ? function(t) {
                              if (t === a || null === t)
                                  throw new TypeError('Cannot convert undefined or null to object')
                              for (var e = Object(t), n = 1; n < arguments.length; n++) {
                                  var i = arguments[n]
                                  if (i !== a && null !== i) for (var r in i) i.hasOwnProperty(r) && (e[r] = i[r])
                              }
                              return e
                          }
                        : Object.assign
                var b = y(
                        function(t, e, n) {
                            for (var i = Object.keys(e), r = 0; r < i.length; )
                                (!n || (n && t[i[r]] === a)) && (t[i[r]] = e[i[r]]), r++
                            return t
                        },
                        'extend',
                        'Use `assign`.'
                    ),
                    _ = y(
                        function(t, e) {
                            return b(t, e, !0)
                        },
                        'merge',
                        'Use `assign`.'
                    )
                function T(t, e, n) {
                    var i,
                        r = e.prototype
                    ;((i = t.prototype = Object.create(r)).constructor = t), (i._super = r), n && c(i, n)
                }
                function w(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function E(t, e) {
                    return typeof t == p ? t.apply((e && e[0]) || a, e) : t
                }
                function O(t, e) {
                    return t === a ? e : t
                }
                function x(t, e, n) {
                    m(P(e), function(e) {
                        t.addEventListener(e, n, !1)
                    })
                }
                function S(t, e, n) {
                    m(P(e), function(e) {
                        t.removeEventListener(e, n, !1)
                    })
                }
                function C(t, e) {
                    for (; t; ) {
                        if (t == e) return !0
                        t = t.parentNode
                    }
                    return !1
                }
                function R(t, e) {
                    return t.indexOf(e) > -1
                }
                function P(t) {
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
                function j(t) {
                    return Array.prototype.slice.call(t, 0)
                }
                function A(t, e, n) {
                    for (var i = [], r = [], o = 0; o < t.length; ) {
                        var s = e ? t[o][e] : t[o]
                        I(r, s) < 0 && i.push(t[o]), (r[o] = s), o++
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
                function M(t, e) {
                    for (var n, i, r = e[0].toUpperCase() + e.slice(1), o = 0; o < u.length; ) {
                        if ((i = (n = u[o]) ? n + r : e) in t) return i
                        o++
                    }
                    return a
                }
                var z = 1
                function D(t) {
                    var e = t.ownerDocument || t
                    return e.defaultView || e.parentWindow || r
                }
                var W = 'ontouchstart' in r,
                    N = M(r, 'PointerEvent') !== a,
                    L = W && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    k = 25,
                    X = 1,
                    Y = 2,
                    U = 4,
                    F = 8,
                    $ = 1,
                    q = 2,
                    H = 4,
                    B = 8,
                    V = 16,
                    G = q | H,
                    K = B | V,
                    Z = G | K,
                    J = ['x', 'y'],
                    Q = ['clientX', 'clientY']
                function tt(t, e) {
                    var n = this
                    ;(this.manager = t),
                        (this.callback = e),
                        (this.element = t.element),
                        (this.target = t.options.inputTarget),
                        (this.domHandler = function(e) {
                            E(t.options.enable, [t]) && n.handler(e)
                        }),
                        this.init()
                }
                function et(t, e, n) {
                    var i = n.pointers.length,
                        r = n.changedPointers.length,
                        o = e & X && i - r == 0,
                        s = e & (U | F) && i - r == 0
                    ;(n.isFirst = !!o),
                        (n.isFinal = !!s),
                        o && (t.session = {}),
                        (n.eventType = e),
                        (function(t, e) {
                            var n = t.session,
                                i = e.pointers,
                                r = i.length
                            n.firstInput || (n.firstInput = nt(e))
                            r > 1 && !n.firstMultiple ? (n.firstMultiple = nt(e)) : 1 === r && (n.firstMultiple = !1)
                            var o = n.firstInput,
                                s = n.firstMultiple,
                                c = s ? s.center : o.center,
                                u = (e.center = it(i))
                            ;(e.timeStamp = d()),
                                (e.deltaTime = e.timeStamp - o.timeStamp),
                                (e.angle = at(c, u)),
                                (e.distance = st(c, u)),
                                (function(t, e) {
                                    var n = e.center,
                                        i = t.offsetDelta || {},
                                        r = t.prevDelta || {},
                                        o = t.prevInput || {}
                                    ;(e.eventType !== X && o.eventType !== U) ||
                                        ((r = t.prevDelta = { x: o.deltaX || 0, y: o.deltaY || 0 }),
                                        (i = t.offsetDelta = { x: n.x, y: n.y }))
                                    ;(e.deltaX = r.x + (n.x - i.x)), (e.deltaY = r.y + (n.y - i.y))
                                })(n, e),
                                (e.offsetDirection = ot(e.deltaX, e.deltaY))
                            var h = rt(e.deltaTime, e.deltaX, e.deltaY)
                            ;(e.overallVelocityX = h.x),
                                (e.overallVelocityY = h.y),
                                (e.overallVelocity = f(h.x) > f(h.y) ? h.x : h.y),
                                (e.scale = s ? ((p = s.pointers), (l = i), st(l[0], l[1], Q) / st(p[0], p[1], Q)) : 1),
                                (e.rotation = s
                                    ? (function(t, e) {
                                          return at(e[1], e[0], Q) + at(t[1], t[0], Q)
                                      })(s.pointers, i)
                                    : 0),
                                (e.maxPointers = n.prevInput
                                    ? e.pointers.length > n.prevInput.maxPointers
                                        ? e.pointers.length
                                        : n.prevInput.maxPointers
                                    : e.pointers.length),
                                (function(t, e) {
                                    var n,
                                        i,
                                        r,
                                        o,
                                        s = t.lastInterval || e,
                                        c = e.timeStamp - s.timeStamp
                                    if (e.eventType != F && (c > k || s.velocity === a)) {
                                        var u = e.deltaX - s.deltaX,
                                            h = e.deltaY - s.deltaY,
                                            p = rt(c, u, h)
                                        ;(i = p.x),
                                            (r = p.y),
                                            (n = f(p.x) > f(p.y) ? p.x : p.y),
                                            (o = ot(u, h)),
                                            (t.lastInterval = e)
                                    } else (n = s.velocity), (i = s.velocityX), (r = s.velocityY), (o = s.direction)
                                    ;(e.velocity = n), (e.velocityX = i), (e.velocityY = r), (e.direction = o)
                                })(n, e)
                            var p, l
                            var v = t.element
                            C(e.srcEvent.target, v) && (v = e.srcEvent.target)
                            e.target = v
                        })(t, n),
                        t.emit('hammer.input', n),
                        t.recognize(n),
                        (t.session.prevInput = n)
                }
                function nt(t) {
                    for (var e = [], n = 0; n < t.pointers.length; )
                        (e[n] = { clientX: l(t.pointers[n].clientX), clientY: l(t.pointers[n].clientY) }), n++
                    return { timeStamp: d(), pointers: e, center: it(e), deltaX: t.deltaX, deltaY: t.deltaY }
                }
                function it(t) {
                    var e = t.length
                    if (1 === e) return { x: l(t[0].clientX), y: l(t[0].clientY) }
                    for (var n = 0, i = 0, r = 0; r < e; ) (n += t[r].clientX), (i += t[r].clientY), r++
                    return { x: l(n / e), y: l(i / e) }
                }
                function rt(t, e, n) {
                    return { x: e / t || 0, y: n / t || 0 }
                }
                function ot(t, e) {
                    return t === e ? $ : f(t) >= f(e) ? (t < 0 ? q : H) : e < 0 ? B : V
                }
                function st(t, e, n) {
                    n || (n = J)
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]]
                    return Math.sqrt(i * i + r * r)
                }
                function at(t, e, n) {
                    n || (n = J)
                    var i = e[n[0]] - t[n[0]],
                        r = e[n[1]] - t[n[1]]
                    return (180 * Math.atan2(r, i)) / Math.PI
                }
                tt.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && x(this.element, this.evEl, this.domHandler),
                            this.evTarget && x(this.target, this.evTarget, this.domHandler),
                            this.evWin && x(D(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && S(this.element, this.evEl, this.domHandler),
                            this.evTarget && S(this.target, this.evTarget, this.domHandler),
                            this.evWin && S(D(this.element), this.evWin, this.domHandler)
                    },
                }
                var ct = { mousedown: X, mousemove: Y, mouseup: U },
                    ut = 'mousedown',
                    ht = 'mousemove mouseup'
                function pt() {
                    ;(this.evEl = ut), (this.evWin = ht), (this.pressed = !1), tt.apply(this, arguments)
                }
                T(pt, tt, {
                    handler: function(t) {
                        var e = ct[t.type]
                        e & X && 0 === t.button && (this.pressed = !0),
                            e & Y && 1 !== t.which && (e = U),
                            this.pressed &&
                                (e & U && (this.pressed = !1),
                                this.callback(this.manager, e, {
                                    pointers: [t],
                                    changedPointers: [t],
                                    pointerType: 'mouse',
                                    srcEvent: t,
                                }))
                    },
                })
                var lt = { pointerdown: X, pointermove: Y, pointerup: U, pointercancel: F, pointerout: F },
                    ft = { 2: 'touch', 3: 'pen', 4: 'mouse', 5: 'kinect' },
                    dt = 'pointerdown',
                    vt = 'pointermove pointerup pointercancel'
                function gt() {
                    ;(this.evEl = dt),
                        (this.evWin = vt),
                        tt.apply(this, arguments),
                        (this.store = this.manager.session.pointerEvents = [])
                }
                r.MSPointerEvent &&
                    !r.PointerEvent &&
                    ((dt = 'MSPointerDown'), (vt = 'MSPointerMove MSPointerUp MSPointerCancel')),
                    T(gt, tt, {
                        handler: function(t) {
                            var e = this.store,
                                n = !1,
                                i = t.type.toLowerCase().replace('ms', ''),
                                r = lt[i],
                                o = ft[t.pointerType] || t.pointerType,
                                s = 'touch' == o,
                                a = I(e, t.pointerId, 'pointerId')
                            r & X && (0 === t.button || s)
                                ? a < 0 && (e.push(t), (a = e.length - 1))
                                : r & (U | F) && (n = !0),
                                a < 0 ||
                                    ((e[a] = t),
                                    this.callback(this.manager, r, {
                                        pointers: e,
                                        changedPointers: [t],
                                        pointerType: o,
                                        srcEvent: t,
                                    }),
                                    n && e.splice(a, 1))
                        },
                    })
                var mt = { touchstart: X, touchmove: Y, touchend: U, touchcancel: F },
                    yt = 'touchstart',
                    bt = 'touchstart touchmove touchend touchcancel'
                function _t() {
                    ;(this.evTarget = yt), (this.evWin = bt), (this.started = !1), tt.apply(this, arguments)
                }
                function Tt(t, e) {
                    var n = j(t.touches),
                        i = j(t.changedTouches)
                    return e & (U | F) && (n = A(n.concat(i), 'identifier', !0)), [n, i]
                }
                T(_t, tt, {
                    handler: function(t) {
                        var e = mt[t.type]
                        if ((e === X && (this.started = !0), this.started)) {
                            var n = Tt.call(this, t, e)
                            e & (U | F) && n[0].length - n[1].length == 0 && (this.started = !1),
                                this.callback(this.manager, e, {
                                    pointers: n[0],
                                    changedPointers: n[1],
                                    pointerType: 'touch',
                                    srcEvent: t,
                                })
                        }
                    },
                })
                var wt = { touchstart: X, touchmove: Y, touchend: U, touchcancel: F },
                    Et = 'touchstart touchmove touchend touchcancel'
                function Ot() {
                    ;(this.evTarget = Et), (this.targetIds = {}), tt.apply(this, arguments)
                }
                function xt(t, e) {
                    var n = j(t.touches),
                        i = this.targetIds
                    if (e & (X | Y) && 1 === n.length) return (i[n[0].identifier] = !0), [n, n]
                    var r,
                        o,
                        s = j(t.changedTouches),
                        a = [],
                        c = this.target
                    if (
                        ((o = n.filter(function(t) {
                            return C(t.target, c)
                        })),
                        e === X)
                    )
                        for (r = 0; r < o.length; ) (i[o[r].identifier] = !0), r++
                    for (r = 0; r < s.length; )
                        i[s[r].identifier] && a.push(s[r]), e & (U | F) && delete i[s[r].identifier], r++
                    return a.length ? [A(o.concat(a), 'identifier', !0), a] : void 0
                }
                T(Ot, tt, {
                    handler: function(t) {
                        var e = wt[t.type],
                            n = xt.call(this, t, e)
                        n &&
                            this.callback(this.manager, e, {
                                pointers: n[0],
                                changedPointers: n[1],
                                pointerType: 'touch',
                                srcEvent: t,
                            })
                    },
                })
                var St = 2500,
                    Ct = 25
                function Rt() {
                    tt.apply(this, arguments)
                    var t = w(this.handler, this)
                    ;(this.touch = new Ot(this.manager, t)),
                        (this.mouse = new pt(this.manager, t)),
                        (this.primaryTouch = null),
                        (this.lastTouches = [])
                }
                function Pt(t, e) {
                    t & X
                        ? ((this.primaryTouch = e.changedPointers[0].identifier), It.call(this, e))
                        : t & (U | F) && It.call(this, e)
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
                        }, St)
                    }
                }
                function jt(t) {
                    for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var r = this.lastTouches[i],
                            o = Math.abs(e - r.x),
                            s = Math.abs(n - r.y)
                        if (o <= Ct && s <= Ct) return !0
                    }
                    return !1
                }
                T(Rt, tt, {
                    handler: function(t, e, n) {
                        var i = 'touch' == n.pointerType,
                            r = 'mouse' == n.pointerType
                        if (!(r && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                            if (i) Pt.call(this, e, n)
                            else if (r && jt.call(this, n)) return
                            this.callback(t, e, n)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    },
                })
                var At = M(h.style, 'touchAction'),
                    Mt = At !== a,
                    zt = 'auto',
                    Dt = 'manipulation',
                    Wt = 'none',
                    Nt = 'pan-x',
                    Lt = 'pan-y',
                    kt = (function() {
                        if (!Mt) return !1
                        var t = {},
                            e = r.CSS && r.CSS.supports
                        return (
                            ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(n) {
                                t[n] = !e || r.CSS.supports('touch-action', n)
                            }),
                            t
                        )
                    })()
                function Xt(t, e) {
                    ;(this.manager = t), this.set(e)
                }
                Xt.prototype = {
                    set: function(t) {
                        'compute' == t && (t = this.compute()),
                            Mt && this.manager.element.style && kt[t] && (this.manager.element.style[At] = t),
                            (this.actions = t.toLowerCase().trim())
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = []
                        return (
                            m(this.manager.recognizers, function(e) {
                                E(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                            }),
                            (function(t) {
                                if (R(t, Wt)) return Wt
                                var e = R(t, Nt),
                                    n = R(t, Lt)
                                if (e && n) return Wt
                                if (e || n) return e ? Nt : Lt
                                if (R(t, Dt)) return Dt
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
                                r = R(i, Wt) && !kt[Wt],
                                o = R(i, Lt) && !kt[Lt],
                                s = R(i, Nt) && !kt[Nt]
                            if (r) {
                                var a = 1 === t.pointers.length,
                                    c = t.distance < 2,
                                    u = t.deltaTime < 250
                                if (a && c && u) return
                            }
                            if (!s || !o) return r || (o && n & G) || (s && n & K) ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        ;(this.manager.session.prevented = !0), t.preventDefault()
                    },
                }
                var Yt = 1,
                    Ut = 2,
                    Ft = 4,
                    $t = 8,
                    qt = $t,
                    Ht = 16
                function Bt(t) {
                    ;(this.options = c({}, this.defaults, t || {})),
                        (this.id = z++),
                        (this.manager = null),
                        (this.options.enable = O(this.options.enable, !0)),
                        (this.state = Yt),
                        (this.simultaneous = {}),
                        (this.requireFail = [])
                }
                function Vt(t) {
                    return t & Ht ? 'cancel' : t & $t ? 'end' : t & Ft ? 'move' : t & Ut ? 'start' : ''
                }
                function Gt(t) {
                    return t == V ? 'down' : t == B ? 'up' : t == q ? 'left' : t == H ? 'right' : ''
                }
                function Kt(t, e) {
                    var n = e.manager
                    return n ? n.get(t) : t
                }
                function Zt() {
                    Bt.apply(this, arguments)
                }
                function Jt() {
                    Zt.apply(this, arguments), (this.pX = null), (this.pY = null)
                }
                function Qt() {
                    Zt.apply(this, arguments)
                }
                function te() {
                    Bt.apply(this, arguments), (this._timer = null), (this._input = null)
                }
                function ee() {
                    Zt.apply(this, arguments)
                }
                function ne() {
                    Zt.apply(this, arguments)
                }
                function ie() {
                    Bt.apply(this, arguments),
                        (this.pTime = !1),
                        (this.pCenter = !1),
                        (this._timer = null),
                        (this._input = null),
                        (this.count = 0)
                }
                function re(t, e) {
                    return ((e = e || {}).recognizers = O(e.recognizers, re.defaults.preset)), new oe(t, e)
                }
                ;(Bt.prototype = {
                    defaults: {},
                    set: function(t) {
                        return c(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (g(t, 'recognizeWith', this)) return this
                        var e = this.simultaneous
                        return e[(t = Kt(t, this)).id] || ((e[t.id] = t), t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return g(t, 'dropRecognizeWith', this)
                            ? this
                            : ((t = Kt(t, this)), delete this.simultaneous[t.id], this)
                    },
                    requireFailure: function(t) {
                        if (g(t, 'requireFailure', this)) return this
                        var e = this.requireFail
                        return -1 === I(e, (t = Kt(t, this))) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (g(t, 'dropRequireFailure', this)) return this
                        t = Kt(t, this)
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
                        n < $t && i(e.options.event + Vt(n)),
                            i(e.options.event),
                            t.additionalEvent && i(t.additionalEvent),
                            n >= $t && i(e.options.event + Vt(n))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit()) return this.emit(t)
                        this.state = 32
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length; ) {
                            if (!(this.requireFail[t].state & (32 | Yt))) return !1
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = c({}, t)
                        if (!E(this.options.enable, [this, e])) return this.reset(), void (this.state = 32)
                        this.state & (qt | Ht | 32) && (this.state = Yt),
                            (this.state = this.process(e)),
                            this.state & (Ut | Ft | $t | Ht) && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {},
                }),
                    T(Zt, Bt, {
                        defaults: { pointers: 1 },
                        attrTest: function(t) {
                            var e = this.options.pointers
                            return 0 === e || t.pointers.length === e
                        },
                        process: function(t) {
                            var e = this.state,
                                n = t.eventType,
                                i = e & (Ut | Ft),
                                r = this.attrTest(t)
                            return i && (n & F || !r) ? e | Ht : i || r ? (n & U ? e | $t : e & Ut ? e | Ft : Ut) : 32
                        },
                    }),
                    T(Jt, Zt, {
                        defaults: { event: 'pan', threshold: 10, pointers: 1, direction: Z },
                        getTouchAction: function() {
                            var t = this.options.direction,
                                e = []
                            return t & G && e.push(Lt), t & K && e.push(Nt), e
                        },
                        directionTest: function(t) {
                            var e = this.options,
                                n = !0,
                                i = t.distance,
                                r = t.direction,
                                o = t.deltaX,
                                s = t.deltaY
                            return (
                                r & e.direction ||
                                    (e.direction & G
                                        ? ((r = 0 === o ? $ : o < 0 ? q : H),
                                          (n = o != this.pX),
                                          (i = Math.abs(t.deltaX)))
                                        : ((r = 0 === s ? $ : s < 0 ? B : V),
                                          (n = s != this.pY),
                                          (i = Math.abs(t.deltaY)))),
                                (t.direction = r),
                                n && i > e.threshold && r & e.direction
                            )
                        },
                        attrTest: function(t) {
                            return (
                                Zt.prototype.attrTest.call(this, t) &&
                                (this.state & Ut || (!(this.state & Ut) && this.directionTest(t)))
                            )
                        },
                        emit: function(t) {
                            ;(this.pX = t.deltaX), (this.pY = t.deltaY)
                            var e = Gt(t.direction)
                            e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                        },
                    }),
                    T(Qt, Zt, {
                        defaults: { event: 'pinch', threshold: 0, pointers: 2 },
                        getTouchAction: function() {
                            return [Wt]
                        },
                        attrTest: function(t) {
                            return (
                                this._super.attrTest.call(this, t) &&
                                (Math.abs(t.scale - 1) > this.options.threshold || this.state & Ut)
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
                    T(te, Bt, {
                        defaults: { event: 'press', pointers: 1, time: 251, threshold: 9 },
                        getTouchAction: function() {
                            return [zt]
                        },
                        process: function(t) {
                            var e = this.options,
                                n = t.pointers.length === e.pointers,
                                i = t.distance < e.threshold,
                                r = t.deltaTime > e.time
                            if (((this._input = t), !i || !n || (t.eventType & (U | F) && !r))) this.reset()
                            else if (t.eventType & X)
                                this.reset(),
                                    (this._timer = v(
                                        function() {
                                            ;(this.state = qt), this.tryEmit()
                                        },
                                        e.time,
                                        this
                                    ))
                            else if (t.eventType & U) return qt
                            return 32
                        },
                        reset: function() {
                            clearTimeout(this._timer)
                        },
                        emit: function(t) {
                            this.state === qt &&
                                (t && t.eventType & U
                                    ? this.manager.emit(this.options.event + 'up', t)
                                    : ((this._input.timeStamp = d()),
                                      this.manager.emit(this.options.event, this._input)))
                        },
                    }),
                    T(ee, Zt, {
                        defaults: { event: 'rotate', threshold: 0, pointers: 2 },
                        getTouchAction: function() {
                            return [Wt]
                        },
                        attrTest: function(t) {
                            return (
                                this._super.attrTest.call(this, t) &&
                                (Math.abs(t.rotation) > this.options.threshold || this.state & Ut)
                            )
                        },
                    }),
                    T(ne, Zt, {
                        defaults: { event: 'swipe', threshold: 10, velocity: 0.3, direction: G | K, pointers: 1 },
                        getTouchAction: function() {
                            return Jt.prototype.getTouchAction.call(this)
                        },
                        attrTest: function(t) {
                            var e,
                                n = this.options.direction
                            return (
                                n & (G | K)
                                    ? (e = t.overallVelocity)
                                    : n & G
                                    ? (e = t.overallVelocityX)
                                    : n & K && (e = t.overallVelocityY),
                                this._super.attrTest.call(this, t) &&
                                    n & t.offsetDirection &&
                                    t.distance > this.options.threshold &&
                                    t.maxPointers == this.options.pointers &&
                                    f(e) > this.options.velocity &&
                                    t.eventType & U
                            )
                        },
                        emit: function(t) {
                            var e = Gt(t.offsetDirection)
                            e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                        },
                    }),
                    T(ie, Bt, {
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
                            return [Dt]
                        },
                        process: function(t) {
                            var e = this.options,
                                n = t.pointers.length === e.pointers,
                                i = t.distance < e.threshold,
                                r = t.deltaTime < e.time
                            if ((this.reset(), t.eventType & X && 0 === this.count)) return this.failTimeout()
                            if (i && r && n) {
                                if (t.eventType != U) return this.failTimeout()
                                var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                    s = !this.pCenter || st(this.pCenter, t.center) < e.posThreshold
                                if (
                                    ((this.pTime = t.timeStamp),
                                    (this.pCenter = t.center),
                                    s && o ? (this.count += 1) : (this.count = 1),
                                    (this._input = t),
                                    0 === this.count % e.taps)
                                )
                                    return this.hasRequireFailures()
                                        ? ((this._timer = v(
                                              function() {
                                                  ;(this.state = qt), this.tryEmit()
                                              },
                                              e.interval,
                                              this
                                          )),
                                          Ut)
                                        : qt
                            }
                            return 32
                        },
                        failTimeout: function() {
                            return (
                                (this._timer = v(
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
                            this.state == qt &&
                                ((this._input.tapCount = this.count),
                                this.manager.emit(this.options.event, this._input))
                        },
                    }),
                    (re.VERSION = '2.0.7'),
                    (re.defaults = {
                        domEvents: !1,
                        touchAction: 'compute',
                        enable: !0,
                        inputTarget: null,
                        inputClass: null,
                        preset: [
                            [ee, { enable: !1 }],
                            [Qt, { enable: !1 }, ['rotate']],
                            [ne, { direction: G }],
                            [Jt, { direction: G }, ['swipe']],
                            [ie],
                            [ie, { event: 'doubletap', taps: 2 }, ['tap']],
                            [te],
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
                function oe(t, e) {
                    var n
                    ;(this.options = c({}, re.defaults, e || {})),
                        (this.options.inputTarget = this.options.inputTarget || t),
                        (this.handlers = {}),
                        (this.session = {}),
                        (this.recognizers = []),
                        (this.oldCssProps = {}),
                        (this.element = t),
                        (this.input = new ((n = this).options.inputClass || (N ? gt : L ? Ot : W ? Rt : pt))(n, et)),
                        (this.touchAction = new Xt(this, this.options.touchAction)),
                        se(this, !0),
                        m(
                            this.options.recognizers,
                            function(t) {
                                var e = this.add(new t[0](t[1]))
                                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                            },
                            this
                        )
                }
                function se(t, e) {
                    var n,
                        i = t.element
                    i.style &&
                        (m(t.options.cssProps, function(r, o) {
                            ;(n = M(i.style, o)),
                                e
                                    ? ((t.oldCssProps[n] = i.style[n]), (i.style[n] = r))
                                    : (i.style[n] = t.oldCssProps[n] || '')
                        }),
                        e || (t.oldCssProps = {}))
                }
                ;(oe.prototype = {
                    set: function(t) {
                        return (
                            c(this.options, t),
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
                                r = e.curRecognizer
                            ;(!r || (r && r.state & qt)) && (r = e.curRecognizer = null)
                            for (var o = 0; o < i.length; )
                                (n = i[o]),
                                    2 === e.stopped || (r && n != r && !n.canRecognizeWith(r))
                                        ? n.reset()
                                        : n.recognize(t),
                                    !r && n.state & (Ut | Ft | $t) && (r = e.curRecognizer = n),
                                    o++
                        }
                    },
                    get: function(t) {
                        if (t instanceof Bt) return t
                        for (var e = this.recognizers, n = 0; n < e.length; n++)
                            if (e[n].options.event == t) return e[n]
                        return null
                    },
                    add: function(t) {
                        if (g(t, 'add', this)) return this
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
                        if (g(t, 'remove', this)) return this
                        if ((t = this.get(t))) {
                            var e = this.recognizers,
                                n = I(e, t)
                            ;-1 !== n && (e.splice(n, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (t !== a && e !== a) {
                            var n = this.handlers
                            return (
                                m(P(t), function(t) {
                                    ;(n[t] = n[t] || []), n[t].push(e)
                                }),
                                this
                            )
                        }
                    },
                    off: function(t, e) {
                        if (t !== a) {
                            var n = this.handlers
                            return (
                                m(P(t), function(t) {
                                    e ? n[t] && n[t].splice(I(n[t], e), 1) : delete n[t]
                                }),
                                this
                            )
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents &&
                            (function(t, e) {
                                var n = o.createEvent('Event')
                                n.initEvent(t, !0, !0), (n.gesture = e), e.target.dispatchEvent(n)
                            })(t, e)
                        var n = this.handlers[t] && this.handlers[t].slice()
                        if (n && n.length) {
                            ;(e.type = t),
                                (e.preventDefault = function() {
                                    e.srcEvent.preventDefault()
                                })
                            for (var i = 0; i < n.length; ) n[i](e), i++
                        }
                    },
                    destroy: function() {
                        this.element && se(this, !1),
                            (this.handlers = {}),
                            (this.session = {}),
                            this.input.destroy(),
                            (this.element = null)
                    },
                }),
                    c(re, {
                        INPUT_START: X,
                        INPUT_MOVE: Y,
                        INPUT_END: U,
                        INPUT_CANCEL: F,
                        STATE_POSSIBLE: Yt,
                        STATE_BEGAN: Ut,
                        STATE_CHANGED: Ft,
                        STATE_ENDED: $t,
                        STATE_RECOGNIZED: qt,
                        STATE_CANCELLED: Ht,
                        STATE_FAILED: 32,
                        DIRECTION_NONE: $,
                        DIRECTION_LEFT: q,
                        DIRECTION_RIGHT: H,
                        DIRECTION_UP: B,
                        DIRECTION_DOWN: V,
                        DIRECTION_HORIZONTAL: G,
                        DIRECTION_VERTICAL: K,
                        DIRECTION_ALL: Z,
                        Manager: oe,
                        Input: tt,
                        TouchAction: Xt,
                        TouchInput: Ot,
                        MouseInput: pt,
                        PointerEventInput: gt,
                        TouchMouseInput: Rt,
                        SingleTouchInput: _t,
                        Recognizer: Bt,
                        AttrRecognizer: Zt,
                        Tap: ie,
                        Pan: Jt,
                        Swipe: ne,
                        Pinch: Qt,
                        Rotate: ee,
                        Press: te,
                        on: x,
                        off: S,
                        each: m,
                        merge: _,
                        extend: b,
                        assign: c,
                        inherit: T,
                        bindFn: w,
                        prefixed: M,
                    }),
                    ((void 0 !== r ? r : 'undefined' != typeof self ? self : {}).Hammer = re),
                    (i = function() {
                        return re
                    }.call(e, n, e, t)) === a || (t.exports = i)
            })(window, document)
        },
        function(t, e, n) {
            'use strict'
            var i = n(1)
            n.n(i).a
        },
        function(t, e, n) {
            ;(t.exports = n(6)(!1)).push([
                t.i,
                '.image-touch[data-v-b26b12f8] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center;\n}\n.image-touch-hd__mask[data-v-b26b12f8] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: #000;\n}\n.image-touch_bd[data-v-b26b12f8] {\n  position: fixed;\n  top: 50%;\n  z-index: 1001;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  background-color: #000;\n  transform: translateY(-50%);\n  transition: left 0.3s ease;\n}\n.image-touch_bd__wrap[data-v-b26b12f8] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.image-touch_bd__img[data-v-b26b12f8] {\n  max-width: 100%;\n}\n.image-touch_ft[data-v-b26b12f8] {\n  position: fixed;\n  bottom: 15px;\n  z-index: 1001;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.image-touch_ft__sub[data-v-b26b12f8] {\n  width: 8px;\n  height: 4px;\n  border-radius: 8px;\n  margin-right: 6px;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.image-touch_ft__sub.image-touch_ft__sub-actived[data-v-b26b12f8] {\n  width: 12px;\n  background-color: #ffffff;\n}\n.zoomIn[data-v-b26b12f8] {\n  animation: zoomIn-data-v-b26b12f8 0.2s ease-in;\n}\n.zoomOut[data-v-b26b12f8] {\n  animation: zoomOut-data-v-b26b12f8 0.2s ease-out;\n}\n@keyframes zoomIn-data-v-b26b12f8 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes zoomOut-data-v-b26b12f8 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n',
                '',
            ])
        },
        function(t, e, n) {
            'use strict'
            t.exports = function(t) {
                var e = []
                return (
                    (e.toString = function() {
                        return this.map(function(e) {
                            var n = (function(t, e) {
                                var n = t[1] || '',
                                    i = t[3]
                                if (!i) return n
                                if (e && 'function' == typeof btoa) {
                                    var r =
                                            ((s = i),
                                            (a = btoa(unescape(encodeURIComponent(JSON.stringify(s))))),
                                            (c = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                                                a
                                            )),
                                            '/*# '.concat(c, ' */')),
                                        o = i.sources.map(function(t) {
                                            return '/*# sourceURL='.concat(i.sourceRoot).concat(t, ' */')
                                        })
                                    return [n]
                                        .concat(o)
                                        .concat([r])
                                        .join('\n')
                                }
                                var s, a, c
                                return [n].join('\n')
                            })(e, t)
                            return e[2] ? '@media '.concat(e[2], '{').concat(n, '}') : n
                        }).join('')
                    }),
                    (e.i = function(t, n) {
                        'string' == typeof t && (t = [[null, t, '']])
                        for (var i = {}, r = 0; r < this.length; r++) {
                            var o = this[r][0]
                            null != o && (i[o] = !0)
                        }
                        for (var s = 0; s < t.length; s++) {
                            var a = t[s]
                            ;(null != a[0] && i[a[0]]) ||
                                (n && !a[2] ? (a[2] = n) : n && (a[2] = '('.concat(a[2], ') and (').concat(n, ')')),
                                e.push(a))
                        }
                    }),
                    e
                )
            }
        },
        function(t, e, n) {
            'use strict'
            n.r(e)
            var i = function() {
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
                                                  {
                                                      staticClass: 'image-touch_bd__wrap',
                                                      style: { width: t.pageWidth + 'px' },
                                                  },
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
            i._withStripped = !0
            var r = n(2),
                o = n.n(r),
                s = n(0),
                a = n.n(s),
                c = 'undefined' != typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys
            function u(t, e, n) {
                ;(n ? Reflect.getOwnMetadataKeys(e, n) : Reflect.getOwnMetadataKeys(e)).forEach(function(i) {
                    var r = n ? Reflect.getOwnMetadata(i, e, n) : Reflect.getOwnMetadata(i, e)
                    n ? Reflect.defineMetadata(i, r, t, n) : Reflect.defineMetadata(i, r, t)
                })
            }
            var h = { __proto__: [] } instanceof Array
            function p(t) {
                return function(e, n, i) {
                    var r = 'function' == typeof e ? e : e.constructor
                    r.__decorators__ || (r.__decorators__ = []),
                        'number' != typeof i && (i = void 0),
                        r.__decorators__.push(function(e) {
                            return t(e, n, i)
                        })
                }
            }
            var l = [
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
            function f(t, e) {
                void 0 === e && (e = {}), (e.name = e.name || t._componentTag || t.name)
                var n = t.prototype
                Object.getOwnPropertyNames(n).forEach(function(t) {
                    if ('constructor' !== t)
                        if (l.indexOf(t) > -1) e[t] = n[t]
                        else {
                            var i = Object.getOwnPropertyDescriptor(n, t)
                            void 0 !== i.value
                                ? 'function' == typeof i.value
                                    ? ((e.methods || (e.methods = {}))[t] = i.value)
                                    : (e.mixins || (e.mixins = [])).push({
                                          data: function() {
                                              var e
                                              return ((e = {})[t] = i.value), e
                                          },
                                      })
                                : (i.get || i.set) &&
                                  ((e.computed || (e.computed = {}))[t] = { get: i.get, set: i.set })
                        }
                }),
                    (e.mixins || (e.mixins = [])).push({
                        data: function() {
                            return (function(t, e) {
                                var n = e.prototype._init
                                e.prototype._init = function() {
                                    var e = this,
                                        n = Object.getOwnPropertyNames(t)
                                    if (t.$options.props)
                                        for (var i in t.$options.props) t.hasOwnProperty(i) || n.push(i)
                                    n.forEach(function(n) {
                                        '_' !== n.charAt(0) &&
                                            Object.defineProperty(e, n, {
                                                get: function() {
                                                    return t[n]
                                                },
                                                set: function(e) {
                                                    t[n] = e
                                                },
                                                configurable: !0,
                                            })
                                    })
                                }
                                var i = new e()
                                e.prototype._init = n
                                var r = {}
                                return (
                                    Object.keys(i).forEach(function(t) {
                                        void 0 !== i[t] && (r[t] = i[t])
                                    }),
                                    r
                                )
                            })(this, t)
                        },
                    })
                var i = t.__decorators__
                i &&
                    (i.forEach(function(t) {
                        return t(e)
                    }),
                    delete t.__decorators__)
                var r,
                    o,
                    s = Object.getPrototypeOf(t.prototype),
                    p = s instanceof a.a ? s.constructor : a.a,
                    f = p.extend(e)
                return (
                    (function(t, e, n) {
                        Object.getOwnPropertyNames(e).forEach(function(i) {
                            if (!d[i]) {
                                var r = Object.getOwnPropertyDescriptor(t, i)
                                if (!r || r.configurable) {
                                    var o,
                                        s,
                                        a = Object.getOwnPropertyDescriptor(e, i)
                                    if (!h) {
                                        if ('cid' === i) return
                                        var c = Object.getOwnPropertyDescriptor(n, i)
                                        if (
                                            ((o = a.value),
                                            (s = typeof o),
                                            null != o &&
                                                ('object' === s || 'function' === s) &&
                                                c &&
                                                c.value === a.value)
                                        )
                                            return
                                    }
                                    0, Object.defineProperty(t, i, a)
                                }
                            }
                        })
                    })(f, t, p),
                    c &&
                        (u((r = f), (o = t)),
                        Object.getOwnPropertyNames(o.prototype).forEach(function(t) {
                            u(r.prototype, o.prototype, t)
                        }),
                        Object.getOwnPropertyNames(o).forEach(function(t) {
                            u(r, o, t)
                        })),
                    f
                )
            }
            var d = { prototype: !0, arguments: !0, callee: !0, caller: !0 }
            function v(t) {
                return 'function' == typeof t
                    ? f(t)
                    : function(e) {
                          return f(e, t)
                      }
            }
            v.registerHooks = function(t) {
                l.push.apply(l, t)
            }
            var g = v
            var m = 'undefined' != typeof Reflect && void 0 !== Reflect.getMetadata
            function y(t, e, n) {
                m &&
                    (Array.isArray(t) ||
                        'function' == typeof t ||
                        void 0 !== t.type ||
                        (t.type = Reflect.getMetadata('design:type', e, n)))
            }
            function b(t) {
                return (
                    void 0 === t && (t = {}),
                    function(e, n) {
                        y(t, e, n),
                            p(function(e, n) {
                                ;(e.props || (e.props = {}))[n] = t
                            })(e, n)
                    }
                )
            }
            var _,
                T =
                    ((_ = function(t, e) {
                        return (_ =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e
                                }) ||
                            function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                            })(t, e)
                    }),
                    function(t, e) {
                        function n() {
                            this.constructor = t
                        }
                        _(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()))
                    }),
                w = function(t, e, n, i) {
                    var r,
                        o = arguments.length,
                        s = o < 3 ? e : null === i ? (i = Object.getOwnPropertyDescriptor(e, n)) : i
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                        s = Reflect.decorate(t, e, n, i)
                    else
                        for (var a = t.length - 1; a >= 0; a--)
                            (r = t[a]) && (s = (o < 3 ? r(s) : o > 3 ? r(e, n, s) : r(e, n)) || s)
                    return o > 3 && s && Object.defineProperty(e, n, s), s
                }
            a.a.use(o.a, { name: 'v-touch' })
            var E = (function(t) {
                function e() {
                    var e = (null !== t && t.apply(this, arguments)) || this
                    return (e.isShow = !1), (e.activedSub = 0), (e.touchWrapLeft = 0), (e.pinList = []), e
                }
                return (
                    T(e, t),
                    Object.defineProperty(e.prototype, 'pageWidth', {
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
                    Object.defineProperty(e.prototype, 'touchWrapWidth', {
                        get: function() {
                            return this.pageWidth * this.imageList.length
                        },
                        enumerable: !0,
                        configurable: !0,
                    }),
                    (e.prototype.hidden = function() {
                        this.isShow = !1
                    }),
                    (e.prototype.show = function(t) {
                        ;(this.isShow = !0), this.reset()
                    }),
                    (e.prototype.swipeLeft = function() {
                        var t = this.imageList.length - 1
                        ;(this.activedSub = this.activedSub === t ? t : ++this.activedSub),
                            (this.touchWrapLeft = -this.pageWidth * this.activedSub)
                    }),
                    (e.prototype.swipeRight = function() {
                        ;(this.activedSub = this.activedSub ? --this.activedSub : 0),
                            (this.touchWrapLeft = -this.pageWidth * this.activedSub)
                    }),
                    (e.prototype.pinchMove = function(t) {
                        this.$set(this.pinList, this.activedSub, t.scale.toFixed(2))
                    }),
                    (e.prototype.pinchEnd = function(t) {
                        var e = t.scale,
                            n = e < 1 ? 1 : e.toFixed(2)
                        this.$set(this.pinList, this.activedSub, n)
                    }),
                    (e.prototype.panMove = function(t) {
                        var e = t.additionalEvent,
                            n = t.distance,
                            i = t.velocity
                        Math.abs(i) > 0.3 ||
                            ('panleft' === e
                                ? (this.touchWrapLeft = -(this.pageWidth * this.activedSub + Math.abs(n)))
                                : 'panright' === e &&
                                  (this.touchWrapLeft = -(this.pageWidth * this.activedSub - Math.abs(n))))
                    }),
                    (e.prototype.panEnd = function(t) {
                        var e = t.deltaX,
                            n = t.distance,
                            i = t.velocity
                        this.pageWidth / 2 < Math.abs(n) && Math.abs(i) < 0.3
                            ? e < 0
                                ? this.swipeLeft()
                                : this.swipeRight()
                            : (this.touchWrapLeft = -this.pageWidth * this.activedSub)
                    }),
                    (e.prototype.reset = function() {
                        ;(this.pinList = []),
                            (this.activedSub = this.activedIndex),
                            (this.touchWrapLeft = -this.pageWidth * this.activedIndex)
                    }),
                    w([b()], e.prototype, 'imageList', void 0),
                    w([b({ default: !0 })], e.prototype, 'isShowBar', void 0),
                    w([b({ default: 0 })], e.prototype, 'activedIndex', void 0),
                    w([b({ default: '#000' })], e.prototype, 'bgColor', void 0),
                    w([b({ default: 'left .3s ease' })], e.prototype, 'transition', void 0),
                    (e = w([g], e))
                )
            })(a.a)
            n(4)
            var O = (function(t, e, n, i, r, o, s, a) {
                var c,
                    u = 'function' == typeof t ? t.options : t
                if (
                    (e && ((u.render = e), (u.staticRenderFns = n), (u._compiled = !0)),
                    i && (u.functional = !0),
                    o && (u._scopeId = 'data-v-' + o),
                    s
                        ? ((c = function(t) {
                              ;(t =
                                  t ||
                                  (this.$vnode && this.$vnode.ssrContext) ||
                                  (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                                  'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                                  (t = __VUE_SSR_CONTEXT__),
                                  r && r.call(this, t),
                                  t && t._registeredComponents && t._registeredComponents.add(s)
                          }),
                          (u._ssrRegister = c))
                        : r &&
                          (c = a
                              ? function() {
                                    r.call(this, this.$root.$options.shadowRoot)
                                }
                              : r),
                    c)
                )
                    if (u.functional) {
                        u._injectStyles = c
                        var h = u.render
                        u.render = function(t, e) {
                            return c.call(e), h(t, e)
                        }
                    } else {
                        var p = u.beforeCreate
                        u.beforeCreate = p ? [].concat(p, c) : [c]
                    }
                return { exports: t, options: u }
            })(E, i, [], !1, null, 'b26b12f8', null)
            O.options.__file = 'src/image-touch.vue'
            var x = O.exports,
                S = {
                    install: function(t) {
                        var e,
                            n = t.extend(x)
                        t.prototype.$imageTouch = function(t) {
                            var i
                            return (
                                e || ((i = (e = new n()).$mount().$el), document.body.appendChild(i)),
                                'object' == typeof t && Object.assign(e, t),
                                e.show()
                            )
                        }
                    },
                }
            e.default = S
        },
        function(t, e, n) {
            'use strict'
            function i(t, e) {
                for (var n = [], i = {}, r = 0; r < e.length; r++) {
                    var o = e[r],
                        s = o[0],
                        a = { id: t + ':' + r, css: o[1], media: o[2], sourceMap: o[3] }
                    i[s] ? i[s].parts.push(a) : n.push((i[s] = { id: s, parts: [a] }))
                }
                return n
            }
            n.r(e),
                n.d(e, 'default', function() {
                    return d
                })
            var r = 'undefined' != typeof document
            if ('undefined' != typeof DEBUG && DEBUG && !r)
                throw new Error(
                    "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
                )
            var o = {},
                s = r && (document.head || document.getElementsByTagName('head')[0]),
                a = null,
                c = 0,
                u = !1,
                h = function() {},
                p = null,
                l = 'data-vue-ssr-id',
                f = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
            function d(t, e, n, r) {
                ;(u = n), (p = r || {})
                var s = i(t, e)
                return (
                    v(s),
                    function(e) {
                        for (var n = [], r = 0; r < s.length; r++) {
                            var a = s[r]
                            ;(c = o[a.id]).refs--, n.push(c)
                        }
                        e ? v((s = i(t, e))) : (s = [])
                        for (r = 0; r < n.length; r++) {
                            var c
                            if (0 === (c = n[r]).refs) {
                                for (var u = 0; u < c.parts.length; u++) c.parts[u]()
                                delete o[c.id]
                            }
                        }
                    }
                )
            }
            function v(t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                        i = o[n.id]
                    if (i) {
                        i.refs++
                        for (var r = 0; r < i.parts.length; r++) i.parts[r](n.parts[r])
                        for (; r < n.parts.length; r++) i.parts.push(m(n.parts[r]))
                        i.parts.length > n.parts.length && (i.parts.length = n.parts.length)
                    } else {
                        var s = []
                        for (r = 0; r < n.parts.length; r++) s.push(m(n.parts[r]))
                        o[n.id] = { id: n.id, refs: 1, parts: s }
                    }
                }
            }
            function g() {
                var t = document.createElement('style')
                return (t.type = 'text/css'), s.appendChild(t), t
            }
            function m(t) {
                var e,
                    n,
                    i = document.querySelector('style[' + l + '~="' + t.id + '"]')
                if (i) {
                    if (u) return h
                    i.parentNode.removeChild(i)
                }
                if (f) {
                    var r = c++
                    ;(i = a || (a = g())), (e = _.bind(null, i, r, !1)), (n = _.bind(null, i, r, !0))
                } else
                    (i = g()),
                        (e = T.bind(null, i)),
                        (n = function() {
                            i.parentNode.removeChild(i)
                        })
                return (
                    e(t),
                    function(i) {
                        if (i) {
                            if (i.css === t.css && i.media === t.media && i.sourceMap === t.sourceMap) return
                            e((t = i))
                        } else n()
                    }
                )
            }
            var y,
                b =
                    ((y = []),
                    function(t, e) {
                        return (y[t] = e), y.filter(Boolean).join('\n')
                    })
            function _(t, e, n, i) {
                var r = n ? '' : i.css
                if (t.styleSheet) t.styleSheet.cssText = b(e, r)
                else {
                    var o = document.createTextNode(r),
                        s = t.childNodes
                    s[e] && t.removeChild(s[e]), s.length ? t.insertBefore(o, s[e]) : t.appendChild(o)
                }
            }
            function T(t, e) {
                var n = e.css,
                    i = e.media,
                    r = e.sourceMap
                if (
                    (i && t.setAttribute('media', i),
                    p.ssrId && t.setAttribute(l, e.id),
                    r &&
                        ((n += '\n/*# sourceURL=' + r.sources[0] + ' */'),
                        (n +=
                            '\n/*# sourceMappingURL=data:application/json;base64,' +
                            btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                            ' */')),
                    t.styleSheet)
                )
                    t.styleSheet.cssText = n
                else {
                    for (; t.firstChild; ) t.removeChild(t.firstChild)
                    t.appendChild(document.createTextNode(n))
                }
            }
        },
    ]).default
})
//# sourceMappingURL=index.js.map
