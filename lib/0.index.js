;(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [
        ,
        ,
        function(t, e, i) {
            var n = i(11)
            'string' == typeof n && (n = [[t.i, n, '']]), n.locals && (t.exports = n.locals)
            ;(0, i(14).default)('e9f46124', n, !1, {})
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function(t, e, i) {
            'use strict'
            var n = i(2)
            i.n(n).a
        },
        function(t, e, i) {
            ;(t.exports = i(12)(!1)).push([
                t.i,
                '.image-touch[data-v-b26b12f8] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center;\n}\n.image-touch-hd__mask[data-v-b26b12f8] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: #000;\n}\n.image-touch_bd[data-v-b26b12f8] {\n  position: fixed;\n  top: 50%;\n  z-index: 1001;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-start;\n  background-color: #000;\n  transform: translateY(-50%);\n  transition: left 0.3s ease;\n}\n.image-touch_bd__wrap[data-v-b26b12f8] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 80vh;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.image-touch_ft[data-v-b26b12f8] {\n  position: fixed;\n  bottom: 15px;\n  z-index: 1001;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n.image-touch_ft__sub[data-v-b26b12f8] {\n  width: 8px;\n  height: 4px;\n  border-radius: 8px;\n  margin-right: 6px;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.image-touch_ft__sub.image-touch_ft__sub-actived[data-v-b26b12f8] {\n  width: 12px;\n  background-color: #ffffff;\n}\n.zoomIn[data-v-b26b12f8] {\n  animation: zoomIn-data-v-b26b12f8 0.2s ease-in;\n}\n.zoomOut[data-v-b26b12f8] {\n  animation: zoomOut-data-v-b26b12f8 0.2s ease-out;\n}\n@keyframes zoomIn-data-v-b26b12f8 {\nfrom {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes zoomOut-data-v-b26b12f8 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n',
                '',
            ])
        },
        ,
        function(t, e, i) {
            'use strict'
            i.r(e)
            var n = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e
                return t.isShow
                    ? i(
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
                              i(
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
                                      i('div', { staticClass: 'image-touch-hd' }, [
                                          i('div', {
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
                                      i(
                                          'div',
                                          {
                                              staticClass: 'image-touch_bd',
                                              style: {
                                                  transition: t.transition,
                                                  width: t.touchWrapWidth + 'px',
                                                  left: t.touchWrapLeft + 'px',
                                              },
                                          },
                                          t._l(t.imageList, function(e, n) {
                                              return i(
                                                  'div',
                                                  {
                                                      staticClass: 'image-touch_bd__wrap',
                                                      style: { width: t.pageWidth + 'px' },
                                                  },
                                                  [
                                                      i('img', {
                                                          staticClass: 'image-touch_bd__img',
                                                          style: { transform: 'scale(' + (t.pinList[n] || 1) + ')' },
                                                          attrs: { src: e, alt: 'touch image' },
                                                      }),
                                                  ]
                                              )
                                          }),
                                          0
                                      ),
                                      t._v(' '),
                                      t.isShowBar
                                          ? i(
                                                'div',
                                                { staticClass: 'image-touch_ft' },
                                                t._l(t.imageList, function(e, n) {
                                                    return i('span', {
                                                        staticClass: 'image-touch_ft__sub',
                                                        class: { 'image-touch_ft__sub-actived': n === t.activedSub },
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
            n._withStripped = !0
            var o,
                a = i(4),
                s = i.n(a),
                c = i(0),
                r =
                    ((o = function(t, e) {
                        return (o =
                            Object.setPrototypeOf ||
                            ({ __proto__: [] } instanceof Array &&
                                function(t, e) {
                                    t.__proto__ = e
                                }) ||
                            function(t, e) {
                                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                            })(t, e)
                    }),
                    function(t, e) {
                        function i() {
                            this.constructor = t
                        }
                        o(t, e), (t.prototype = null === e ? Object.create(e) : ((i.prototype = e.prototype), new i()))
                    }),
                p = function(t, e, i, n) {
                    var o,
                        a = arguments.length,
                        s = a < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, i)) : n
                    if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
                        s = Reflect.decorate(t, e, i, n)
                    else
                        for (var c = t.length - 1; c >= 0; c--)
                            (o = t[c]) && (s = (a < 3 ? o(s) : a > 3 ? o(e, i, s) : o(e, i)) || s)
                    return a > 3 && s && Object.defineProperty(e, i, s), s
                }
            c.c.use(s.a, { name: 'v-touch' })
            var h = (function(t) {
                    function e() {
                        var e = (null !== t && t.apply(this, arguments)) || this
                        return (e.isShow = !1), (e.activedSub = 0), (e.touchWrapLeft = 0), (e.pinList = []), e
                    }
                    return (
                        r(e, t),
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
                                i = e < 1 ? 1 : e.toFixed(2)
                            this.$set(this.pinList, this.activedSub, i)
                        }),
                        (e.prototype.panMove = function(t) {
                            var e = t.additionalEvent,
                                i = t.distance,
                                n = t.velocity
                            Math.abs(n) > 0.3 ||
                                ('panleft' === e
                                    ? (this.touchWrapLeft = -(this.pageWidth * this.activedSub + Math.abs(i)))
                                    : 'panright' === e &&
                                      (this.touchWrapLeft = -(this.pageWidth * this.activedSub - Math.abs(i))))
                        }),
                        (e.prototype.panEnd = function(t) {
                            var e = t.deltaX,
                                i = t.distance,
                                n = t.velocity
                            this.pageWidth / 2 < Math.abs(i) && Math.abs(n) < 0.3
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
                        p([Object(c.b)()], e.prototype, 'imageList', void 0),
                        p([Object(c.b)({ default: !0 })], e.prototype, 'isShowBar', void 0),
                        p([Object(c.b)({ default: 0 })], e.prototype, 'activedIndex', void 0),
                        p([Object(c.b)({ default: '#000' })], e.prototype, 'bgColor', void 0),
                        p([Object(c.b)({ default: 'left .3s ease' })], e.prototype, 'transition', void 0),
                        (e = p([c.a], e))
                    )
                })(c.c),
                u = (i(10), i(5)),
                d = Object(u.a)(h, n, [], !1, null, 'b26b12f8', null)
            d.options.__file = 'src/image-touch.vue'
            var f = d.exports,
                l = {
                    install: function(t) {
                        var e,
                            i = t.extend(f)
                        t.prototype.$imageTouch = function(t) {
                            var n
                            return (
                                e || ((n = (e = new i()).$mount().$el), document.body.appendChild(n)),
                                'object' == typeof t && Object.assign(e, t),
                                e.show()
                            )
                        }
                    },
                }
            e.default = l
        },
    ],
    [[13, 1, 2]],
])
