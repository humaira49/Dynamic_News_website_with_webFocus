/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var t_ = Object.create;
  var un = Object.defineProperty;
  var r_ = Object.getOwnPropertyDescriptor;
  var n_ = Object.getOwnPropertyNames;
  var i_ = Object.getPrototypeOf,
    o_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ge = (e, t) => {
      for (var r in t) un(e, r, { get: t[r], enumerable: !0 });
    },
    Ms = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of n_(t))
          !o_.call(e, i) &&
            i !== r &&
            un(e, i, {
              get: () => t[i],
              enumerable: !(n = r_(t, i)) || n.enumerable,
            });
      return e;
    };
  var fe = (e, t, r) => (
      (r = e != null ? t_(i_(e)) : {}),
      Ms(
        t || !e || !e.__esModule
          ? un(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    nt = (e) => Ms(un({}, "__esModule", { value: !0 }), e);
  var Ni = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(f, T) {
        var O = new m.Bare();
        return O.init(f, T);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (T) {
          return "-" + T.toLowerCase();
        });
      }
      function n(f) {
        var T = parseInt(f.slice(1), 16),
          O = (T >> 16) & 255,
          P = (T >> 8) & 255,
          x = 255 & T;
        return [O, P, x];
      }
      function i(f, T, O) {
        return (
          "#" + ((1 << 24) | (f << 16) | (T << 8) | O).toString(16).slice(1)
        );
      }
      function o() {}
      function a(f, T) {
        d("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T);
      }
      function s(f, T, O) {
        d("Units do not match [" + f + "]: " + T + ", " + O);
      }
      function u(f, T, O) {
        if ((T !== void 0 && (O = T), f === void 0)) return O;
        var P = O;
        return (
          Xe.test(f) || !De.test(f)
            ? (P = parseInt(f, 10))
            : De.test(f) && (P = 1e3 * parseFloat(f)),
          0 > P && (P = 0),
          P === P ? P : O
        );
      }
      function d(f) {
        oe.debug && window && window.console.warn(f);
      }
      function h(f) {
        for (var T = -1, O = f ? f.length : 0, P = []; ++T < O; ) {
          var x = f[T];
          x && P.push(x);
        }
        return P;
      }
      var l = (function (f, T, O) {
          function P(ae) {
            return typeof ae == "object";
          }
          function x(ae) {
            return typeof ae == "function";
          }
          function q() {}
          function re(ae, ge) {
            function K() {
              var Re = new se();
              return x(Re.init) && Re.init.apply(Re, arguments), Re;
            }
            function se() {}
            ge === O && ((ge = ae), (ae = Object)), (K.Bare = se);
            var ue,
              _e = (q[f] = ae[f]),
              rt = (se[f] = K[f] = new q());
            return (
              (rt.constructor = K),
              (K.mixin = function (Re) {
                return (se[f] = K[f] = re(K, Re)[f]), K;
              }),
              (K.open = function (Re) {
                if (
                  ((ue = {}),
                  x(Re) ? (ue = Re.call(K, rt, _e, K, ae)) : P(Re) && (ue = Re),
                  P(ue))
                )
                  for (var Er in ue) T.call(ue, Er) && (rt[Er] = ue[Er]);
                return x(rt.init) || (rt.init = ae), K;
              }),
              K.open(ge)
            );
          }
          return re;
        })("prototype", {}.hasOwnProperty),
        E = {
          ease: [
            "ease",
            function (f, T, O, P) {
              var x = (f /= P) * f,
                q = x * f;
              return (
                T +
                O * (-2.75 * q * x + 11 * x * x + -15.5 * q + 8 * x + 0.25 * f)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (f, T, O, P) {
              var x = (f /= P) * f,
                q = x * f;
              return T + O * (-1 * q * x + 3 * x * x + -3 * q + 2 * x);
            },
          ],
          "ease-out": [
            "ease-out",
            function (f, T, O, P) {
              var x = (f /= P) * f,
                q = x * f;
              return (
                T +
                O * (0.3 * q * x + -1.6 * x * x + 2.2 * q + -1.8 * x + 1.9 * f)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (f, T, O, P) {
              var x = (f /= P) * f,
                q = x * f;
              return T + O * (2 * q * x + -5 * x * x + 2 * q + 2 * x);
            },
          ],
          linear: [
            "linear",
            function (f, T, O, P) {
              return (O * f) / P + T;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (f, T, O, P) {
              return O * (f /= P) * f + T;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (f, T, O, P) {
              return -O * (f /= P) * (f - 2) + T;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (f, T, O, P) {
              return (f /= P / 2) < 1
                ? (O / 2) * f * f + T
                : (-O / 2) * (--f * (f - 2) - 1) + T;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (f, T, O, P) {
              return O * (f /= P) * f * f + T;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (f, T, O, P) {
              return O * ((f = f / P - 1) * f * f + 1) + T;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (f, T, O, P) {
              return (f /= P / 2) < 1
                ? (O / 2) * f * f * f + T
                : (O / 2) * ((f -= 2) * f * f + 2) + T;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (f, T, O, P) {
              return O * (f /= P) * f * f * f + T;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (f, T, O, P) {
              return -O * ((f = f / P - 1) * f * f * f - 1) + T;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (f, T, O, P) {
              return (f /= P / 2) < 1
                ? (O / 2) * f * f * f * f + T
                : (-O / 2) * ((f -= 2) * f * f * f - 2) + T;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (f, T, O, P) {
              return O * (f /= P) * f * f * f * f + T;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (f, T, O, P) {
              return O * ((f = f / P - 1) * f * f * f * f + 1) + T;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (f, T, O, P) {
              return (f /= P / 2) < 1
                ? (O / 2) * f * f * f * f * f + T
                : (O / 2) * ((f -= 2) * f * f * f * f + 2) + T;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (f, T, O, P) {
              return -O * Math.cos((f / P) * (Math.PI / 2)) + O + T;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (f, T, O, P) {
              return O * Math.sin((f / P) * (Math.PI / 2)) + T;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (f, T, O, P) {
              return (-O / 2) * (Math.cos((Math.PI * f) / P) - 1) + T;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (f, T, O, P) {
              return f === 0 ? T : O * Math.pow(2, 10 * (f / P - 1)) + T;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (f, T, O, P) {
              return f === P
                ? T + O
                : O * (-Math.pow(2, (-10 * f) / P) + 1) + T;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (f, T, O, P) {
              return f === 0
                ? T
                : f === P
                ? T + O
                : (f /= P / 2) < 1
                ? (O / 2) * Math.pow(2, 10 * (f - 1)) + T
                : (O / 2) * (-Math.pow(2, -10 * --f) + 2) + T;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (f, T, O, P) {
              return -O * (Math.sqrt(1 - (f /= P) * f) - 1) + T;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (f, T, O, P) {
              return O * Math.sqrt(1 - (f = f / P - 1) * f) + T;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (f, T, O, P) {
              return (f /= P / 2) < 1
                ? (-O / 2) * (Math.sqrt(1 - f * f) - 1) + T
                : (O / 2) * (Math.sqrt(1 - (f -= 2) * f) + 1) + T;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (f, T, O, P, x) {
              return (
                x === void 0 && (x = 1.70158),
                O * (f /= P) * f * ((x + 1) * f - x) + T
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (f, T, O, P, x) {
              return (
                x === void 0 && (x = 1.70158),
                O * ((f = f / P - 1) * f * ((x + 1) * f + x) + 1) + T
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (f, T, O, P, x) {
              return (
                x === void 0 && (x = 1.70158),
                (f /= P / 2) < 1
                  ? (O / 2) * f * f * (((x *= 1.525) + 1) * f - x) + T
                  : (O / 2) *
                      ((f -= 2) * f * (((x *= 1.525) + 1) * f + x) + 2) +
                    T
              );
            },
          ],
        },
        v = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        g = document,
        _ = window,
        A = "bkwld-tram",
        w = /[\-\.0-9]/g,
        N = /[A-Z]/,
        R = "number",
        M = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        D = /(em|cm|mm|in|pt|pc|px|%)$/,
        j = /(deg|rad|turn)$/,
        z = "unitless",
        $ = /(all|none) 0s ease 0s/,
        te = /^(width|height)$/,
        X = " ",
        S = g.createElement("a"),
        y = ["Webkit", "Moz", "O", "ms"],
        L = ["-webkit-", "-moz-", "-o-", "-ms-"],
        G = function (f) {
          if (f in S.style) return { dom: f, css: f };
          var T,
            O,
            P = "",
            x = f.split("-");
          for (T = 0; T < x.length; T++)
            P += x[T].charAt(0).toUpperCase() + x[T].slice(1);
          for (T = 0; T < y.length; T++)
            if (((O = y[T] + P), O in S.style))
              return { dom: O, css: L[T] + f };
        },
        V = (t.support = {
          bind: Function.prototype.bind,
          transform: G("transform"),
          transition: G("transition"),
          backface: G("backface-visibility"),
          timing: G("transition-timing-function"),
        });
      if (V.transition) {
        var J = V.timing.dom;
        if (((S.style[J] = E["ease-in-back"][0]), !S.style[J]))
          for (var ne in v) E[ne][0] = v[ne];
      }
      var U = (t.frame = (function () {
          var f =
            _.requestAnimationFrame ||
            _.webkitRequestAnimationFrame ||
            _.mozRequestAnimationFrame ||
            _.oRequestAnimationFrame ||
            _.msRequestAnimationFrame;
          return f && V.bind
            ? f.bind(_)
            : function (T) {
                _.setTimeout(T, 16);
              };
        })()),
        H = (t.now = (function () {
          var f = _.performance,
            T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return T && V.bind
            ? T.bind(f)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        Z = l(function (f) {
          function T(ie, ce) {
            var Ee = h(("" + ie).split(X)),
              pe = Ee[0];
            ce = ce || {};
            var Le = Y[pe];
            if (!Le) return d("Unsupported property: " + pe);
            if (!ce.weak || !this.props[pe]) {
              var je = Le[0],
                Fe = this.props[pe];
              return (
                Fe || (Fe = this.props[pe] = new je.Bare()),
                Fe.init(this.$el, Ee, Le, ce),
                Fe
              );
            }
          }
          function O(ie, ce, Ee) {
            if (ie) {
              var pe = typeof ie;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                pe == "number" && ce)
              )
                return (
                  (this.timer = new Q({
                    duration: ie,
                    context: this,
                    complete: q,
                  })),
                  void (this.active = !0)
                );
              if (pe == "string" && ce) {
                switch (ie) {
                  case "hide":
                    K.call(this);
                    break;
                  case "stop":
                    re.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    T.call(this, ie, Ee && Ee[1]);
                }
                return q.call(this);
              }
              if (pe == "function") return void ie.call(this, this);
              if (pe == "object") {
                var Le = 0;
                rt.call(
                  this,
                  ie,
                  function (Ie, e_) {
                    Ie.span > Le && (Le = Ie.span), Ie.stop(), Ie.animate(e_);
                  },
                  function (Ie) {
                    "wait" in Ie && (Le = u(Ie.wait, 0));
                  }
                ),
                  _e.call(this),
                  Le > 0 &&
                    ((this.timer = new Q({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = q));
                var je = this,
                  Fe = !1,
                  sn = {};
                U(function () {
                  rt.call(je, ie, function (Ie) {
                    Ie.active && ((Fe = !0), (sn[Ie.name] = Ie.nextStyle));
                  }),
                    Fe && je.$el.css(sn);
                });
              }
            }
          }
          function P(ie) {
            (ie = u(ie, 0)),
              this.active
                ? this.queue.push({ options: ie })
                : ((this.timer = new Q({
                    duration: ie,
                    context: this,
                    complete: q,
                  })),
                  (this.active = !0));
          }
          function x(ie) {
            return this.active
              ? (this.queue.push({ options: ie, args: arguments }),
                void (this.timer.complete = q))
              : d(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function q() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var ie = this.queue.shift();
              O.call(this, ie.options, !0, ie.args);
            }
          }
          function re(ie) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof ie == "string"
              ? ((ce = {}), (ce[ie] = 1))
              : (ce = typeof ie == "object" && ie != null ? ie : this.props),
              rt.call(this, ce, Re),
              _e.call(this);
          }
          function ae(ie) {
            re.call(this, ie), rt.call(this, ie, Er, Zb);
          }
          function ge(ie) {
            typeof ie != "string" && (ie = "block"),
              (this.el.style.display = ie);
          }
          function K() {
            re.call(this), (this.el.style.display = "none");
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            re.call(this),
              e.removeData(this.el, A),
              (this.$el = this.el = null);
          }
          function _e() {
            var ie,
              ce,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (ie in this.props)
              (ce = this.props[ie]), ce.active && Ee.push(ce.string);
            (Ee = Ee.join(",")),
              this.style !== Ee &&
                ((this.style = Ee), (this.el.style[V.transition.dom] = Ee));
          }
          function rt(ie, ce, Ee) {
            var pe,
              Le,
              je,
              Fe,
              sn = ce !== Re,
              Ie = {};
            for (pe in ie)
              (je = ie[pe]),
                pe in de
                  ? (Ie.transform || (Ie.transform = {}),
                    (Ie.transform[pe] = je))
                  : (N.test(pe) && (pe = r(pe)),
                    pe in Y ? (Ie[pe] = je) : (Fe || (Fe = {}), (Fe[pe] = je)));
            for (pe in Ie) {
              if (((je = Ie[pe]), (Le = this.props[pe]), !Le)) {
                if (!sn) continue;
                Le = T.call(this, pe);
              }
              ce.call(this, Le, je);
            }
            Ee && Fe && Ee.call(this, Fe);
          }
          function Re(ie) {
            ie.stop();
          }
          function Er(ie, ce) {
            ie.set(ce);
          }
          function Zb(ie) {
            this.$el.css(ie);
          }
          function Be(ie, ce) {
            f[ie] = function () {
              return this.children
                ? Jb.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function Jb(ie, ce) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) ie.apply(this.children[Ee], ce);
            return this;
          }
          (f.init = function (ie) {
            if (
              ((this.$el = e(ie)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = B(this.el, "transition");
              ce && !$.test(ce) && (this.upstream = ce);
            }
            V.backface &&
              oe.hideBackface &&
              b(this.el, V.backface.css, "hidden");
          }),
            Be("add", T),
            Be("start", O),
            Be("wait", P),
            Be("then", x),
            Be("next", q),
            Be("stop", re),
            Be("set", ae),
            Be("show", ge),
            Be("hide", K),
            Be("redraw", se),
            Be("destroy", ue);
        }),
        m = l(Z, function (f) {
          function T(O, P) {
            var x = e.data(O, A) || e.data(O, A, new Z.Bare());
            return x.el || x.init(O), P ? x.start(P) : x;
          }
          f.init = function (O, P) {
            var x = e(O);
            if (!x.length) return this;
            if (x.length === 1) return T(x[0], P);
            var q = [];
            return (
              x.each(function (re, ae) {
                q.push(T(ae, P));
              }),
              (this.children = q),
              this
            );
          };
        }),
        I = l(function (f) {
          function T() {
            var q = this.get();
            this.update("auto");
            var re = this.get();
            return this.update(q), re;
          }
          function O(q, re, ae) {
            return re !== void 0 && (ae = re), q in E ? q : ae;
          }
          function P(q) {
            var re = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(q);
            return (re ? i(re[1], re[2], re[3]) : q).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var x = { duration: 500, ease: "ease", delay: 0 };
          (f.init = function (q, re, ae, ge) {
            (this.$el = q), (this.el = q[0]);
            var K = re[0];
            ae[2] && (K = ae[2]),
              ee[K] && (K = ee[K]),
              (this.name = K),
              (this.type = ae[1]),
              (this.duration = u(re[1], this.duration, x.duration)),
              (this.ease = O(re[2], this.ease, x.ease)),
              (this.delay = u(re[3], this.delay, x.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = te.test(this.name)),
              (this.unit = ge.unit || this.unit || oe.defaultUnit),
              (this.angle = ge.angle || this.angle || oe.defaultAngle),
              oe.fallback || ge.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    X +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? X + E[this.ease][0] : "") +
                    (this.delay ? X + this.delay + "ms" : "")));
          }),
            (f.set = function (q) {
              (q = this.convert(q, this.type)), this.update(q), this.redraw();
            }),
            (f.transition = function (q) {
              (this.active = !0),
                (q = this.convert(q, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  q == "auto" && (q = T.call(this))),
                (this.nextStyle = q);
            }),
            (f.fallback = function (q) {
              var re =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (q = this.convert(q, this.type)),
                this.auto &&
                  (re == "auto" && (re = this.convert(this.get(), this.type)),
                  q == "auto" && (q = T.call(this))),
                (this.tween = new C({
                  from: re,
                  to: q,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (f.get = function () {
              return B(this.el, this.name);
            }),
            (f.update = function (q) {
              b(this.el, this.name, q);
            }),
            (f.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                b(this.el, this.name, this.get()));
              var q = this.tween;
              q && q.context && q.destroy();
            }),
            (f.convert = function (q, re) {
              if (q == "auto" && this.auto) return q;
              var ae,
                ge = typeof q == "number",
                K = typeof q == "string";
              switch (re) {
                case R:
                  if (ge) return q;
                  if (K && q.replace(w, "") === "") return +q;
                  ae = "number(unitless)";
                  break;
                case M:
                  if (K) {
                    if (q === "" && this.original) return this.original;
                    if (re.test(q))
                      return q.charAt(0) == "#" && q.length == 7 ? q : P(q);
                  }
                  ae = "hex or rgb string";
                  break;
                case F:
                  if (ge) return q + this.unit;
                  if (K && re.test(q)) return q;
                  ae = "number(px) or string(unit)";
                  break;
                case D:
                  if (ge) return q + this.unit;
                  if (K && re.test(q)) return q;
                  ae = "number(px) or string(unit or %)";
                  break;
                case j:
                  if (ge) return q + this.angle;
                  if (K && re.test(q)) return q;
                  ae = "number(deg) or string(angle)";
                  break;
                case z:
                  if (ge || (K && D.test(q))) return q;
                  ae = "number(unitless) or string(unit or %)";
              }
              return a(ae, q), q;
            }),
            (f.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = l(I, function (f, T) {
          f.init = function () {
            T.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), M));
          };
        }),
        k = l(I, function (f, T) {
          (f.init = function () {
            T.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (f.get = function () {
              return this.$el[this.name]();
            }),
            (f.update = function (O) {
              this.$el[this.name](O);
            });
        }),
        W = l(I, function (f, T) {
          function O(P, x) {
            var q, re, ae, ge, K;
            for (q in P)
              (ge = de[q]),
                (ae = ge[0]),
                (re = ge[1] || q),
                (K = this.convert(P[q], ae)),
                x.call(this, re, K, ae);
          }
          (f.init = function () {
            T.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                de.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  b(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (f.set = function (P) {
              O.call(this, P, function (x, q) {
                this.current[x] = q;
              }),
                b(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (f.transition = function (P) {
              var x = this.values(P);
              this.tween = new le({
                current: this.current,
                values: x,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var q,
                re = {};
              for (q in this.current) re[q] = q in x ? x[q] : this.current[q];
              (this.active = !0), (this.nextStyle = this.style(re));
            }),
            (f.fallback = function (P) {
              var x = this.values(P);
              this.tween = new le({
                current: this.current,
                values: x,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (f.update = function () {
              b(this.el, this.name, this.style(this.current));
            }),
            (f.style = function (P) {
              var x,
                q = "";
              for (x in P) q += x + "(" + P[x] + ") ";
              return q;
            }),
            (f.values = function (P) {
              var x,
                q = {};
              return (
                O.call(this, P, function (re, ae, ge) {
                  (q[re] = ae),
                    this.current[re] === void 0 &&
                      ((x = 0),
                      ~re.indexOf("scale") && (x = 1),
                      (this.current[re] = this.convert(x, ge)));
                }),
                q
              );
            });
        }),
        C = l(function (f) {
          function T(K) {
            ae.push(K) === 1 && U(O);
          }
          function O() {
            var K,
              se,
              ue,
              _e = ae.length;
            if (_e)
              for (U(O), se = H(), K = _e; K--; )
                (ue = ae[K]), ue && ue.render(se);
          }
          function P(K) {
            var se,
              ue = e.inArray(K, ae);
            ue >= 0 &&
              ((se = ae.slice(ue + 1)),
              (ae.length = ue),
              se.length && (ae = ae.concat(se)));
          }
          function x(K) {
            return Math.round(K * ge) / ge;
          }
          function q(K, se, ue) {
            return i(
              K[0] + ue * (se[0] - K[0]),
              K[1] + ue * (se[1] - K[1]),
              K[2] + ue * (se[2] - K[2])
            );
          }
          var re = { ease: E.ease[1], from: 0, to: 1 };
          (f.init = function (K) {
            (this.duration = K.duration || 0), (this.delay = K.delay || 0);
            var se = K.ease || re.ease;
            E[se] && (se = E[se][1]),
              typeof se != "function" && (se = re.ease),
              (this.ease = se),
              (this.update = K.update || o),
              (this.complete = K.complete || o),
              (this.context = K.context || this),
              (this.name = K.name);
            var ue = K.from,
              _e = K.to;
            ue === void 0 && (ue = re.from),
              _e === void 0 && (_e = re.to),
              (this.unit = K.unit || ""),
              typeof ue == "number" && typeof _e == "number"
                ? ((this.begin = ue), (this.change = _e - ue))
                : this.format(_e, ue),
              (this.value = this.begin + this.unit),
              (this.start = H()),
              K.autoplay !== !1 && this.play();
          }),
            (f.play = function () {
              this.active ||
                (this.start || (this.start = H()), (this.active = !0), T(this));
            }),
            (f.stop = function () {
              this.active && ((this.active = !1), P(this));
            }),
            (f.render = function (K) {
              var se,
                ue = K - this.start;
              if (this.delay) {
                if (ue <= this.delay) return;
                ue -= this.delay;
              }
              if (ue < this.duration) {
                var _e = this.ease(ue, 0, 1, this.duration);
                return (
                  (se = this.startRGB
                    ? q(this.startRGB, this.endRGB, _e)
                    : x(this.begin + _e * this.change)),
                  (this.value = se + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (se = this.endHex || this.begin + this.change),
                (this.value = se + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (f.format = function (K, se) {
              if (((se += ""), (K += ""), K.charAt(0) == "#"))
                return (
                  (this.startRGB = n(se)),
                  (this.endRGB = n(K)),
                  (this.endHex = K),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ue = se.replace(w, ""),
                  _e = K.replace(w, "");
                ue !== _e && s("tween", se, K), (this.unit = ue);
              }
              (se = parseFloat(se)),
                (K = parseFloat(K)),
                (this.begin = this.value = se),
                (this.change = K - se);
            }),
            (f.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ae = [],
            ge = 1e3;
        }),
        Q = l(C, function (f) {
          (f.init = function (T) {
            (this.duration = T.duration || 0),
              (this.complete = T.complete || o),
              (this.context = T.context),
              this.play();
          }),
            (f.render = function (T) {
              var O = T - this.start;
              O < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        le = l(C, function (f, T) {
          (f.init = function (O) {
            (this.context = O.context),
              (this.update = O.update),
              (this.tweens = []),
              (this.current = O.current);
            var P, x;
            for (P in O.values)
              (x = O.values[P]),
                this.current[P] !== x &&
                  this.tweens.push(
                    new C({
                      name: P,
                      from: this.current[P],
                      to: x,
                      duration: O.duration,
                      delay: O.delay,
                      ease: O.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (f.render = function (O) {
              var P,
                x,
                q = this.tweens.length,
                re = !1;
              for (P = q; P--; )
                (x = this.tweens[P]),
                  x.context &&
                    (x.render(O), (this.current[x.name] = x.value), (re = !0));
              return re
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (f.destroy = function () {
              if ((T.destroy.call(this), this.tweens)) {
                var O,
                  P = this.tweens.length;
                for (O = P; O--; ) this.tweens[O].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !V.transition,
          agentTests: [],
        });
      (t.fallback = function (f) {
        if (!V.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + f + ")");
        var T = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = T.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (f) {
          return new C(f);
        }),
        (t.delay = function (f, T, O) {
          return new Q({ complete: T, duration: f, context: O });
        }),
        (e.fn.tram = function (f) {
          return t.call(null, this, f);
        });
      var b = e.style,
        B = e.css,
        ee = { transform: V.transform && V.transform.css },
        Y = {
          color: [p, M],
          background: [p, M, "background-color"],
          "outline-color": [p, M],
          "border-color": [p, M],
          "border-top-color": [p, M],
          "border-right-color": [p, M],
          "border-bottom-color": [p, M],
          "border-left-color": [p, M],
          "border-width": [I, F],
          "border-top-width": [I, F],
          "border-right-width": [I, F],
          "border-bottom-width": [I, F],
          "border-left-width": [I, F],
          "border-spacing": [I, F],
          "letter-spacing": [I, F],
          margin: [I, F],
          "margin-top": [I, F],
          "margin-right": [I, F],
          "margin-bottom": [I, F],
          "margin-left": [I, F],
          padding: [I, F],
          "padding-top": [I, F],
          "padding-right": [I, F],
          "padding-bottom": [I, F],
          "padding-left": [I, F],
          "outline-width": [I, F],
          opacity: [I, R],
          top: [I, D],
          right: [I, D],
          bottom: [I, D],
          left: [I, D],
          "font-size": [I, D],
          "text-indent": [I, D],
          "word-spacing": [I, D],
          width: [I, D],
          "min-width": [I, D],
          "max-width": [I, D],
          height: [I, D],
          "min-height": [I, D],
          "max-height": [I, D],
          "line-height": [I, z],
          "scroll-top": [k, R, "scrollTop"],
          "scroll-left": [k, R, "scrollLeft"],
        },
        de = {};
      V.transform &&
        ((Y.transform = [W]),
        (de = {
          x: [D, "translateX"],
          y: [D, "translateY"],
          rotate: [j],
          rotateX: [j],
          rotateY: [j],
          scale: [R],
          scaleX: [R],
          scaleY: [R],
          skew: [j],
          skewX: [j],
          skewY: [j],
        })),
        V.transform &&
          V.backface &&
          ((de.z = [D, "translateZ"]),
          (de.rotateZ = [j]),
          (de.scaleZ = [R]),
          (de.perspective = [F]));
      var Xe = /ms/,
        De = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Ds = c((Zk, qs) => {
    "use strict";
    var a_ = window.$,
      s_ = Ni() && a_.tram;
    qs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        d = n.hasOwnProperty,
        h = r.forEach,
        l = r.map,
        E = r.reduce,
        v = r.reduceRight,
        g = r.filter,
        _ = r.every,
        A = r.some,
        w = r.indexOf,
        N = r.lastIndexOf,
        R = Array.isArray,
        M = Object.keys,
        F = i.bind,
        D =
          (e.each =
          e.forEach =
            function (y, L, G) {
              if (y == null) return y;
              if (h && y.forEach === h) y.forEach(L, G);
              else if (y.length === +y.length) {
                for (var V = 0, J = y.length; V < J; V++)
                  if (L.call(G, y[V], V, y) === t) return;
              } else
                for (var ne = e.keys(y), V = 0, J = ne.length; V < J; V++)
                  if (L.call(G, y[ne[V]], ne[V], y) === t) return;
              return y;
            });
      (e.map = e.collect =
        function (y, L, G) {
          var V = [];
          return y == null
            ? V
            : l && y.map === l
            ? y.map(L, G)
            : (D(y, function (J, ne, U) {
                V.push(L.call(G, J, ne, U));
              }),
              V);
        }),
        (e.find = e.detect =
          function (y, L, G) {
            var V;
            return (
              j(y, function (J, ne, U) {
                if (L.call(G, J, ne, U)) return (V = J), !0;
              }),
              V
            );
          }),
        (e.filter = e.select =
          function (y, L, G) {
            var V = [];
            return y == null
              ? V
              : g && y.filter === g
              ? y.filter(L, G)
              : (D(y, function (J, ne, U) {
                  L.call(G, J, ne, U) && V.push(J);
                }),
                V);
          });
      var j =
        (e.some =
        e.any =
          function (y, L, G) {
            L || (L = e.identity);
            var V = !1;
            return y == null
              ? V
              : A && y.some === A
              ? y.some(L, G)
              : (D(y, function (J, ne, U) {
                  if (V || (V = L.call(G, J, ne, U))) return t;
                }),
                !!V);
          });
      (e.contains = e.include =
        function (y, L) {
          return y == null
            ? !1
            : w && y.indexOf === w
            ? y.indexOf(L) != -1
            : j(y, function (G) {
                return G === L;
              });
        }),
        (e.delay = function (y, L) {
          var G = a.call(arguments, 2);
          return setTimeout(function () {
            return y.apply(null, G);
          }, L);
        }),
        (e.defer = function (y) {
          return e.delay.apply(e, [y, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (y) {
          var L, G, V;
          return function () {
            L ||
              ((L = !0),
              (G = arguments),
              (V = this),
              s_.frame(function () {
                (L = !1), y.apply(V, G);
              }));
          };
        }),
        (e.debounce = function (y, L, G) {
          var V,
            J,
            ne,
            U,
            H,
            Z = function () {
              var m = e.now() - U;
              m < L
                ? (V = setTimeout(Z, L - m))
                : ((V = null), G || ((H = y.apply(ne, J)), (ne = J = null)));
            };
          return function () {
            (ne = this), (J = arguments), (U = e.now());
            var m = G && !V;
            return (
              V || (V = setTimeout(Z, L)),
              m && ((H = y.apply(ne, J)), (ne = J = null)),
              H
            );
          };
        }),
        (e.defaults = function (y) {
          if (!e.isObject(y)) return y;
          for (var L = 1, G = arguments.length; L < G; L++) {
            var V = arguments[L];
            for (var J in V) y[J] === void 0 && (y[J] = V[J]);
          }
          return y;
        }),
        (e.keys = function (y) {
          if (!e.isObject(y)) return [];
          if (M) return M(y);
          var L = [];
          for (var G in y) e.has(y, G) && L.push(G);
          return L;
        }),
        (e.has = function (y, L) {
          return d.call(y, L);
        }),
        (e.isObject = function (y) {
          return y === Object(y);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var z = /(.)^/,
        $ = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        te = /\\|'|\r|\n|\u2028|\u2029/g,
        X = function (y) {
          return "\\" + $[y];
        },
        S = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (y, L, G) {
          !L && G && (L = G), (L = e.defaults({}, L, e.templateSettings));
          var V = RegExp(
              [
                (L.escape || z).source,
                (L.interpolate || z).source,
                (L.evaluate || z).source,
              ].join("|") + "|$",
              "g"
            ),
            J = 0,
            ne = "__p+='";
          y.replace(V, function (m, I, p, k, W) {
            return (
              (ne += y.slice(J, W).replace(te, X)),
              (J = W + m.length),
              I
                ? (ne +=
                    `'+
((__t=(` +
                    I +
                    `))==null?'':_.escape(__t))+
'`)
                : p
                ? (ne +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':__t)+
'`)
                : k &&
                  (ne +=
                    `';
` +
                    k +
                    `
__p+='`),
              m
            );
          }),
            (ne += `';
`);
          var U = L.variable;
          if (U) {
            if (!S.test(U))
              throw new Error("variable is not a bare identifier: " + U);
          } else
            (ne =
              `with(obj||{}){
` +
              ne +
              `}
`),
              (U = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            ne +
            `return __p;
`;
          var H;
          try {
            H = new Function(L.variable || "obj", "_", ne);
          } catch (m) {
            throw ((m.source = ne), m);
          }
          var Z = function (m) {
            return H.call(this, m, e);
          };
          return (
            (Z.source =
              "function(" +
              U +
              `){
` +
              ne +
              "}"),
            Z
          );
        }),
        e
      );
    })();
  });
  var Ne = c((Jk, Xs) => {
    "use strict";
    var ve = {},
      kt = {},
      Ht = [],
      Mi = window.Webflow || [],
      Et = window.jQuery,
      Ke = Et(window),
      u_ = Et(document),
      it = Et.isFunction,
      ze = (ve._ = Ds()),
      Gs = (ve.tram = Ni() && Et.tram),
      ln = !1,
      qi = !1;
    Gs.config.hideBackface = !1;
    Gs.config.keepInherited = !0;
    ve.define = function (e, t, r) {
      kt[e] && Vs(kt[e]);
      var n = (kt[e] = t(Et, ze, r) || {});
      return Us(n), n;
    };
    ve.require = function (e) {
      return kt[e];
    };
    function Us(e) {
      ve.env() &&
        (it(e.design) && Ke.on("__wf_design", e.design),
        it(e.preview) && Ke.on("__wf_preview", e.preview)),
        it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && c_(e);
    }
    function c_(e) {
      if (ln) {
        e.ready();
        return;
      }
      ze.contains(Ht, e.ready) || Ht.push(e.ready);
    }
    function Vs(e) {
      it(e.design) && Ke.off("__wf_design", e.design),
        it(e.preview) && Ke.off("__wf_preview", e.preview),
        it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && it(e.ready) && l_(e);
    }
    function l_(e) {
      Ht = ze.filter(Ht, function (t) {
        return t !== e.ready;
      });
    }
    ve.push = function (e) {
      if (ln) {
        it(e) && e();
        return;
      }
      Mi.push(e);
    };
    ve.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var cn = navigator.userAgent.toLowerCase(),
      ks = (ve.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      f_ = (ve.env.chrome =
        /chrome/.test(cn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(cn.match(/chrome\/(\d+)\./)[1], 10)),
      d_ = (ve.env.ios = /(ipod|iphone|ipad)/.test(cn));
    ve.env.safari = /safari/.test(cn) && !f_ && !d_;
    var Pi;
    ks &&
      u_.on("touchstart mousedown", function (e) {
        Pi = e.target;
      });
    ve.validClick = ks
      ? function (e) {
          return e === Pi || Et.contains(e, Pi);
        }
      : function () {
          return !0;
        };
    var Hs = "resize.webflow orientationchange.webflow load.webflow",
      p_ = "scroll.webflow " + Hs;
    ve.resize = Di(Ke, Hs);
    ve.scroll = Di(Ke, p_);
    ve.redraw = Di();
    function Di(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ve.location = function (e) {
      window.location = e;
    };
    ve.env() && (ve.location = function () {});
    ve.ready = function () {
      (ln = !0), qi ? v_() : ze.each(Ht, Fs), ze.each(Mi, Fs), ve.resize.up();
    };
    function Fs(e) {
      it(e) && e();
    }
    function v_() {
      (qi = !1), ze.each(kt, Us);
    }
    var Ct;
    ve.load = function (e) {
      Ct.then(e);
    };
    function Ws() {
      Ct && (Ct.reject(), Ke.off("load", Ct.resolve)),
        (Ct = new Et.Deferred()),
        Ke.on("load", Ct.resolve);
    }
    ve.destroy = function (e) {
      (e = e || {}),
        (qi = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (ln = e.domready),
        ze.each(kt, Vs),
        ve.resize.off(),
        ve.scroll.off(),
        ve.redraw.off(),
        (Ht = []),
        (Mi = []),
        Ct.state() === "pending" && Ws();
    };
    Et(ve.ready);
    Ws();
    Xs.exports = window.Webflow = ve;
  });
  var zs = c((eH, js) => {
    "use strict";
    var Bs = Ne();
    Bs.define(
      "brand",
      (js.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          d;
        t.ready = function () {
          var v = n.attr("data-wf-status"),
            g = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(g) && a.hostname !== g && (v = !0),
            v &&
              !s &&
              ((d = d || l()),
              E(),
              setTimeout(E, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var v =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(d).attr("style", v ? "display: none !important;" : "");
        }
        function l() {
          var v = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            g = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return v.append(g, _), v[0];
        }
        function E() {
          var v = i.children(o),
            g = v.length && v.get(0) === d,
            _ = Bs.env("editor");
          if (g) {
            _ && v.remove();
            return;
          }
          v.length && v.remove(), _ || i.append(d);
        }
        return t;
      })
    );
  });
  var Ys = c((tH, Ks) => {
    "use strict";
    var Fi = Ne();
    Fi.define(
      "edit",
      (Ks.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (Fi.env("test") || Fi.env("frame")) && !r.fixture && !g_())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          d = r.load || E,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? d()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            d()
          : i.on(s, l).triggerHandler(s);
        function l() {
          u || (/\?edit/.test(a.hash) && d());
        }
        function E() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, l),
            N(function (M) {
              e.ajax({
                url: w("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: v(M),
              });
            });
        }
        function v(M) {
          return function (F) {
            if (!F) {
              console.error("Could not load editor data");
              return;
            }
            (F.thirdPartyCookiesSupported = M),
              g(A(F.bugReporterScriptPath), function () {
                g(A(F.scriptPath), function () {
                  window.WebflowEditor(F);
                });
              });
          };
        }
        function g(M, F) {
          e.ajax({ type: "GET", url: M, dataType: "script", cache: !0 }).then(
            F,
            _
          );
        }
        function _(M, F, D) {
          throw (console.error("Could not load editor script: " + F), D);
        }
        function A(M) {
          return M.indexOf("//") >= 0
            ? M
            : w("https://editor-api.webflow.com" + M);
        }
        function w(M) {
          return M.replace(/([^:])\/\//g, "$1/");
        }
        function N(M) {
          var F = window.document.createElement("iframe");
          (F.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (F.style.display = "none"),
            (F.sandbox = "allow-scripts allow-same-origin");
          var D = function (j) {
            j.data === "WF_third_party_cookies_unsupported"
              ? (R(F, D), M(!1))
              : j.data === "WF_third_party_cookies_supported" &&
                (R(F, D), M(!0));
          };
          (F.onerror = function () {
            R(F, D), M(!1);
          }),
            window.addEventListener("message", D, !1),
            window.document.body.appendChild(F);
        }
        function R(M, F) {
          window.removeEventListener("message", F, !1), M.remove();
        }
        return n;
      })
    );
    function g_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Qs = c((rH, $s) => {
    "use strict";
    var h_ = Ne();
    h_.define(
      "focus-visible",
      ($s.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(R) {
            return !!(
              R &&
              R !== document &&
              R.nodeName !== "HTML" &&
              R.nodeName !== "BODY" &&
              "classList" in R &&
              "contains" in R.classList
            );
          }
          function u(R) {
            var M = R.type,
              F = R.tagName;
            return !!(
              (F === "INPUT" && a[M] && !R.readOnly) ||
              (F === "TEXTAREA" && !R.readOnly) ||
              R.isContentEditable
            );
          }
          function d(R) {
            R.getAttribute("data-wf-focus-visible") ||
              R.setAttribute("data-wf-focus-visible", "true");
          }
          function h(R) {
            R.getAttribute("data-wf-focus-visible") &&
              R.removeAttribute("data-wf-focus-visible");
          }
          function l(R) {
            R.metaKey ||
              R.altKey ||
              R.ctrlKey ||
              (s(r.activeElement) && d(r.activeElement), (n = !0));
          }
          function E() {
            n = !1;
          }
          function v(R) {
            s(R.target) && (n || u(R.target)) && d(R.target);
          }
          function g(R) {
            s(R.target) &&
              R.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              h(R.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), A());
          }
          function A() {
            document.addEventListener("mousemove", N),
              document.addEventListener("mousedown", N),
              document.addEventListener("mouseup", N),
              document.addEventListener("pointermove", N),
              document.addEventListener("pointerdown", N),
              document.addEventListener("pointerup", N),
              document.addEventListener("touchmove", N),
              document.addEventListener("touchstart", N),
              document.addEventListener("touchend", N);
          }
          function w() {
            document.removeEventListener("mousemove", N),
              document.removeEventListener("mousedown", N),
              document.removeEventListener("mouseup", N),
              document.removeEventListener("pointermove", N),
              document.removeEventListener("pointerdown", N),
              document.removeEventListener("pointerup", N),
              document.removeEventListener("touchmove", N),
              document.removeEventListener("touchstart", N),
              document.removeEventListener("touchend", N);
          }
          function N(R) {
            (R.target.nodeName && R.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), w());
          }
          document.addEventListener("keydown", l, !0),
            document.addEventListener("mousedown", E, !0),
            document.addEventListener("pointerdown", E, !0),
            document.addEventListener("touchstart", E, !0),
            document.addEventListener("visibilitychange", _, !0),
            A(),
            r.addEventListener("focus", v, !0),
            r.addEventListener("blur", g, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var eu = c((nH, Js) => {
    "use strict";
    var Zs = Ne();
    Zs.define(
      "focus",
      (Js.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            Zs.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var nu = c((iH, ru) => {
    "use strict";
    var Gi = window.jQuery,
      ot = {},
      fn = [],
      tu = ".w-ix",
      dn = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Gi(t).triggerHandler(ot.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Gi(t).triggerHandler(ot.types.OUTRO));
        },
      };
    ot.triggers = {};
    ot.types = { INTRO: "w-ix-intro" + tu, OUTRO: "w-ix-outro" + tu };
    ot.init = function () {
      for (var e = fn.length, t = 0; t < e; t++) {
        var r = fn[t];
        r[0](0, r[1]);
      }
      (fn = []), Gi.extend(ot.triggers, dn);
    };
    ot.async = function () {
      for (var e in dn) {
        var t = dn[e];
        dn.hasOwnProperty(e) &&
          (ot.triggers[e] = function (r, n) {
            fn.push([t, n]);
          });
      }
    };
    ot.async();
    ru.exports = ot;
  });
  var br = c((oH, au) => {
    "use strict";
    var Ui = nu();
    function iu(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var m_ = window.jQuery,
      pn = {},
      ou = ".w-ix",
      y_ = {
        reset: function (e, t) {
          Ui.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Ui.triggers.intro(e, t), iu(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Ui.triggers.outro(e, t), iu(t, "COMPONENT_INACTIVE");
        },
      };
    pn.triggers = {};
    pn.types = { INTRO: "w-ix-intro" + ou, OUTRO: "w-ix-outro" + ou };
    m_.extend(pn.triggers, y_);
    au.exports = pn;
  });
  var su = c((aH, dt) => {
    function Vi(e) {
      return (
        (dt.exports = Vi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Vi(e)
      );
    }
    (dt.exports = Vi),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var vn = c((sH, _r) => {
    var E_ = su().default;
    function uu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (uu = function (i) {
        return i ? r : t;
      })(e);
    }
    function b_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (E_(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = uu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (_r.exports = b_),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var cu = c((uH, Ir) => {
    function __(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Ir.exports = __),
      (Ir.exports.__esModule = !0),
      (Ir.exports.default = Ir.exports);
  });
  var ye = c((cH, lu) => {
    var gn = function (e) {
      return e && e.Math == Math && e;
    };
    lu.exports =
      gn(typeof globalThis == "object" && globalThis) ||
      gn(typeof window == "object" && window) ||
      gn(typeof self == "object" && self) ||
      gn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Wt = c((lH, fu) => {
    fu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Rt = c((fH, du) => {
    var I_ = Wt();
    du.exports = !I_(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var hn = c((dH, pu) => {
    var Tr = Function.prototype.call;
    pu.exports = Tr.bind
      ? Tr.bind(Tr)
      : function () {
          return Tr.apply(Tr, arguments);
        };
  });
  var mu = c((hu) => {
    "use strict";
    var vu = {}.propertyIsEnumerable,
      gu = Object.getOwnPropertyDescriptor,
      T_ = gu && !vu.call({ 1: 2 }, 1);
    hu.f = T_
      ? function (t) {
          var r = gu(this, t);
          return !!r && r.enumerable;
        }
      : vu;
  });
  var ki = c((vH, yu) => {
    yu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((gH, bu) => {
    var Eu = Function.prototype,
      Hi = Eu.bind,
      Wi = Eu.call,
      w_ = Hi && Hi.bind(Wi);
    bu.exports = Hi
      ? function (e) {
          return e && w_(Wi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Wi.apply(e, arguments);
            }
          );
        };
  });
  var Tu = c((hH, Iu) => {
    var _u = Ye(),
      x_ = _u({}.toString),
      O_ = _u("".slice);
    Iu.exports = function (e) {
      return O_(x_(e), 8, -1);
    };
  });
  var xu = c((mH, wu) => {
    var A_ = ye(),
      S_ = Ye(),
      C_ = Wt(),
      R_ = Tu(),
      Xi = A_.Object,
      L_ = S_("".split);
    wu.exports = C_(function () {
      return !Xi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return R_(e) == "String" ? L_(e, "") : Xi(e);
        }
      : Xi;
  });
  var Bi = c((yH, Ou) => {
    var N_ = ye(),
      P_ = N_.TypeError;
    Ou.exports = function (e) {
      if (e == null) throw P_("Can't call method on " + e);
      return e;
    };
  });
  var wr = c((EH, Au) => {
    var M_ = xu(),
      q_ = Bi();
    Au.exports = function (e) {
      return M_(q_(e));
    };
  });
  var at = c((bH, Su) => {
    Su.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Xt = c((_H, Cu) => {
    var D_ = at();
    Cu.exports = function (e) {
      return typeof e == "object" ? e !== null : D_(e);
    };
  });
  var xr = c((IH, Ru) => {
    var ji = ye(),
      F_ = at(),
      G_ = function (e) {
        return F_(e) ? e : void 0;
      };
    Ru.exports = function (e, t) {
      return arguments.length < 2 ? G_(ji[e]) : ji[e] && ji[e][t];
    };
  });
  var Nu = c((TH, Lu) => {
    var U_ = Ye();
    Lu.exports = U_({}.isPrototypeOf);
  });
  var Mu = c((wH, Pu) => {
    var V_ = xr();
    Pu.exports = V_("navigator", "userAgent") || "";
  });
  var ku = c((xH, Vu) => {
    var Uu = ye(),
      zi = Mu(),
      qu = Uu.process,
      Du = Uu.Deno,
      Fu = (qu && qu.versions) || (Du && Du.version),
      Gu = Fu && Fu.v8,
      $e,
      mn;
    Gu &&
      (($e = Gu.split(".")),
      (mn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !mn &&
      zi &&
      (($e = zi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = zi.match(/Chrome\/(\d+)/)), $e && (mn = +$e[1])));
    Vu.exports = mn;
  });
  var Ki = c((OH, Wu) => {
    var Hu = ku(),
      k_ = Wt();
    Wu.exports =
      !!Object.getOwnPropertySymbols &&
      !k_(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Hu && Hu < 41)
        );
      });
  });
  var Yi = c((AH, Xu) => {
    var H_ = Ki();
    Xu.exports = H_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var $i = c((SH, Bu) => {
    var W_ = ye(),
      X_ = xr(),
      B_ = at(),
      j_ = Nu(),
      z_ = Yi(),
      K_ = W_.Object;
    Bu.exports = z_
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = X_("Symbol");
          return B_(t) && j_(t.prototype, K_(e));
        };
  });
  var zu = c((CH, ju) => {
    var Y_ = ye(),
      $_ = Y_.String;
    ju.exports = function (e) {
      try {
        return $_(e);
      } catch {
        return "Object";
      }
    };
  });
  var Yu = c((RH, Ku) => {
    var Q_ = ye(),
      Z_ = at(),
      J_ = zu(),
      eI = Q_.TypeError;
    Ku.exports = function (e) {
      if (Z_(e)) return e;
      throw eI(J_(e) + " is not a function");
    };
  });
  var Qu = c((LH, $u) => {
    var tI = Yu();
    $u.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : tI(r);
    };
  });
  var Ju = c((NH, Zu) => {
    var rI = ye(),
      Qi = hn(),
      Zi = at(),
      Ji = Xt(),
      nI = rI.TypeError;
    Zu.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Zi((r = e.toString)) && !Ji((n = Qi(r, e)))) ||
        (Zi((r = e.valueOf)) && !Ji((n = Qi(r, e)))) ||
        (t !== "string" && Zi((r = e.toString)) && !Ji((n = Qi(r, e))))
      )
        return n;
      throw nI("Can't convert object to primitive value");
    };
  });
  var tc = c((PH, ec) => {
    ec.exports = !1;
  });
  var yn = c((MH, nc) => {
    var rc = ye(),
      iI = Object.defineProperty;
    nc.exports = function (e, t) {
      try {
        iI(rc, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        rc[e] = t;
      }
      return t;
    };
  });
  var En = c((qH, oc) => {
    var oI = ye(),
      aI = yn(),
      ic = "__core-js_shared__",
      sI = oI[ic] || aI(ic, {});
    oc.exports = sI;
  });
  var eo = c((DH, sc) => {
    var uI = tc(),
      ac = En();
    (sc.exports = function (e, t) {
      return ac[e] || (ac[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: uI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var cc = c((FH, uc) => {
    var cI = ye(),
      lI = Bi(),
      fI = cI.Object;
    uc.exports = function (e) {
      return fI(lI(e));
    };
  });
  var bt = c((GH, lc) => {
    var dI = Ye(),
      pI = cc(),
      vI = dI({}.hasOwnProperty);
    lc.exports =
      Object.hasOwn ||
      function (t, r) {
        return vI(pI(t), r);
      };
  });
  var to = c((UH, fc) => {
    var gI = Ye(),
      hI = 0,
      mI = Math.random(),
      yI = gI((1).toString);
    fc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + yI(++hI + mI, 36);
    };
  });
  var ro = c((VH, hc) => {
    var EI = ye(),
      bI = eo(),
      dc = bt(),
      _I = to(),
      pc = Ki(),
      gc = Yi(),
      Bt = bI("wks"),
      Lt = EI.Symbol,
      vc = Lt && Lt.for,
      II = gc ? Lt : (Lt && Lt.withoutSetter) || _I;
    hc.exports = function (e) {
      if (!dc(Bt, e) || !(pc || typeof Bt[e] == "string")) {
        var t = "Symbol." + e;
        pc && dc(Lt, e)
          ? (Bt[e] = Lt[e])
          : gc && vc
          ? (Bt[e] = vc(t))
          : (Bt[e] = II(t));
      }
      return Bt[e];
    };
  });
  var bc = c((kH, Ec) => {
    var TI = ye(),
      wI = hn(),
      mc = Xt(),
      yc = $i(),
      xI = Qu(),
      OI = Ju(),
      AI = ro(),
      SI = TI.TypeError,
      CI = AI("toPrimitive");
    Ec.exports = function (e, t) {
      if (!mc(e) || yc(e)) return e;
      var r = xI(e, CI),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = wI(r, e, t)), !mc(n) || yc(n))
        )
          return n;
        throw SI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), OI(e, t);
    };
  });
  var no = c((HH, _c) => {
    var RI = bc(),
      LI = $i();
    _c.exports = function (e) {
      var t = RI(e, "string");
      return LI(t) ? t : t + "";
    };
  });
  var oo = c((WH, Tc) => {
    var NI = ye(),
      Ic = Xt(),
      io = NI.document,
      PI = Ic(io) && Ic(io.createElement);
    Tc.exports = function (e) {
      return PI ? io.createElement(e) : {};
    };
  });
  var ao = c((XH, wc) => {
    var MI = Rt(),
      qI = Wt(),
      DI = oo();
    wc.exports =
      !MI &&
      !qI(function () {
        return (
          Object.defineProperty(DI("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var so = c((Oc) => {
    var FI = Rt(),
      GI = hn(),
      UI = mu(),
      VI = ki(),
      kI = wr(),
      HI = no(),
      WI = bt(),
      XI = ao(),
      xc = Object.getOwnPropertyDescriptor;
    Oc.f = FI
      ? xc
      : function (t, r) {
          if (((t = kI(t)), (r = HI(r)), XI))
            try {
              return xc(t, r);
            } catch {}
          if (WI(t, r)) return VI(!GI(UI.f, t, r), t[r]);
        };
  });
  var Or = c((jH, Sc) => {
    var Ac = ye(),
      BI = Xt(),
      jI = Ac.String,
      zI = Ac.TypeError;
    Sc.exports = function (e) {
      if (BI(e)) return e;
      throw zI(jI(e) + " is not an object");
    };
  });
  var Ar = c((Lc) => {
    var KI = ye(),
      YI = Rt(),
      $I = ao(),
      Cc = Or(),
      QI = no(),
      ZI = KI.TypeError,
      Rc = Object.defineProperty;
    Lc.f = YI
      ? Rc
      : function (t, r, n) {
          if ((Cc(t), (r = QI(r)), Cc(n), $I))
            try {
              return Rc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw ZI("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var bn = c((KH, Nc) => {
    var JI = Rt(),
      eT = Ar(),
      tT = ki();
    Nc.exports = JI
      ? function (e, t, r) {
          return eT.f(e, t, tT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var co = c((YH, Pc) => {
    var rT = Ye(),
      nT = at(),
      uo = En(),
      iT = rT(Function.toString);
    nT(uo.inspectSource) ||
      (uo.inspectSource = function (e) {
        return iT(e);
      });
    Pc.exports = uo.inspectSource;
  });
  var Dc = c(($H, qc) => {
    var oT = ye(),
      aT = at(),
      sT = co(),
      Mc = oT.WeakMap;
    qc.exports = aT(Mc) && /native code/.test(sT(Mc));
  });
  var lo = c((QH, Gc) => {
    var uT = eo(),
      cT = to(),
      Fc = uT("keys");
    Gc.exports = function (e) {
      return Fc[e] || (Fc[e] = cT(e));
    };
  });
  var _n = c((ZH, Uc) => {
    Uc.exports = {};
  });
  var Bc = c((JH, Xc) => {
    var lT = Dc(),
      Wc = ye(),
      fo = Ye(),
      fT = Xt(),
      dT = bn(),
      po = bt(),
      vo = En(),
      pT = lo(),
      vT = _n(),
      Vc = "Object already initialized",
      ho = Wc.TypeError,
      gT = Wc.WeakMap,
      In,
      Sr,
      Tn,
      hT = function (e) {
        return Tn(e) ? Sr(e) : In(e, {});
      },
      mT = function (e) {
        return function (t) {
          var r;
          if (!fT(t) || (r = Sr(t)).type !== e)
            throw ho("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    lT || vo.state
      ? ((_t = vo.state || (vo.state = new gT())),
        (kc = fo(_t.get)),
        (go = fo(_t.has)),
        (Hc = fo(_t.set)),
        (In = function (e, t) {
          if (go(_t, e)) throw new ho(Vc);
          return (t.facade = e), Hc(_t, e, t), t;
        }),
        (Sr = function (e) {
          return kc(_t, e) || {};
        }),
        (Tn = function (e) {
          return go(_t, e);
        }))
      : ((Nt = pT("state")),
        (vT[Nt] = !0),
        (In = function (e, t) {
          if (po(e, Nt)) throw new ho(Vc);
          return (t.facade = e), dT(e, Nt, t), t;
        }),
        (Sr = function (e) {
          return po(e, Nt) ? e[Nt] : {};
        }),
        (Tn = function (e) {
          return po(e, Nt);
        }));
    var _t, kc, go, Hc, Nt;
    Xc.exports = { set: In, get: Sr, has: Tn, enforce: hT, getterFor: mT };
  });
  var Kc = c((eW, zc) => {
    var mo = Rt(),
      yT = bt(),
      jc = Function.prototype,
      ET = mo && Object.getOwnPropertyDescriptor,
      yo = yT(jc, "name"),
      bT = yo && function () {}.name === "something",
      _T = yo && (!mo || (mo && ET(jc, "name").configurable));
    zc.exports = { EXISTS: yo, PROPER: bT, CONFIGURABLE: _T };
  });
  var Jc = c((tW, Zc) => {
    var IT = ye(),
      Yc = at(),
      TT = bt(),
      $c = bn(),
      wT = yn(),
      xT = co(),
      Qc = Bc(),
      OT = Kc().CONFIGURABLE,
      AT = Qc.get,
      ST = Qc.enforce,
      CT = String(String).split("String");
    (Zc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Yc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!TT(r, "name") || (OT && r.name !== s)) && $c(r, "name", s),
          (u = ST(r)),
          u.source || (u.source = CT.join(typeof s == "string" ? s : ""))),
        e === IT)
      ) {
        o ? (e[t] = r) : wT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : $c(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Yc(this) && AT(this).source) || xT(this);
    });
  });
  var Eo = c((rW, el) => {
    var RT = Math.ceil,
      LT = Math.floor;
    el.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? LT : RT)(t);
    };
  });
  var rl = c((nW, tl) => {
    var NT = Eo(),
      PT = Math.max,
      MT = Math.min;
    tl.exports = function (e, t) {
      var r = NT(e);
      return r < 0 ? PT(r + t, 0) : MT(r, t);
    };
  });
  var il = c((iW, nl) => {
    var qT = Eo(),
      DT = Math.min;
    nl.exports = function (e) {
      return e > 0 ? DT(qT(e), 9007199254740991) : 0;
    };
  });
  var al = c((oW, ol) => {
    var FT = il();
    ol.exports = function (e) {
      return FT(e.length);
    };
  });
  var bo = c((aW, ul) => {
    var GT = wr(),
      UT = rl(),
      VT = al(),
      sl = function (e) {
        return function (t, r, n) {
          var i = GT(t),
            o = VT(i),
            a = UT(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    ul.exports = { includes: sl(!0), indexOf: sl(!1) };
  });
  var Io = c((sW, ll) => {
    var kT = Ye(),
      _o = bt(),
      HT = wr(),
      WT = bo().indexOf,
      XT = _n(),
      cl = kT([].push);
    ll.exports = function (e, t) {
      var r = HT(e),
        n = 0,
        i = [],
        o;
      for (o in r) !_o(XT, o) && _o(r, o) && cl(i, o);
      for (; t.length > n; ) _o(r, (o = t[n++])) && (~WT(i, o) || cl(i, o));
      return i;
    };
  });
  var wn = c((uW, fl) => {
    fl.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var pl = c((dl) => {
    var BT = Io(),
      jT = wn(),
      zT = jT.concat("length", "prototype");
    dl.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return BT(t, zT);
      };
  });
  var gl = c((vl) => {
    vl.f = Object.getOwnPropertySymbols;
  });
  var ml = c((fW, hl) => {
    var KT = xr(),
      YT = Ye(),
      $T = pl(),
      QT = gl(),
      ZT = Or(),
      JT = YT([].concat);
    hl.exports =
      KT("Reflect", "ownKeys") ||
      function (t) {
        var r = $T.f(ZT(t)),
          n = QT.f;
        return n ? JT(r, n(t)) : r;
      };
  });
  var El = c((dW, yl) => {
    var ew = bt(),
      tw = ml(),
      rw = so(),
      nw = Ar();
    yl.exports = function (e, t) {
      for (var r = tw(t), n = nw.f, i = rw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ew(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var _l = c((pW, bl) => {
    var iw = Wt(),
      ow = at(),
      aw = /#|\.prototype\./,
      Cr = function (e, t) {
        var r = uw[sw(e)];
        return r == lw ? !0 : r == cw ? !1 : ow(t) ? iw(t) : !!t;
      },
      sw = (Cr.normalize = function (e) {
        return String(e).replace(aw, ".").toLowerCase();
      }),
      uw = (Cr.data = {}),
      cw = (Cr.NATIVE = "N"),
      lw = (Cr.POLYFILL = "P");
    bl.exports = Cr;
  });
  var Tl = c((vW, Il) => {
    var To = ye(),
      fw = so().f,
      dw = bn(),
      pw = Jc(),
      vw = yn(),
      gw = El(),
      hw = _l();
    Il.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        d,
        h;
      if (
        (n
          ? (a = To)
          : i
          ? (a = To[r] || vw(r, {}))
          : (a = (To[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((d = t[s]),
            e.noTargetGet ? ((h = fw(a, s)), (u = h && h.value)) : (u = a[s]),
            (o = hw(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof d == typeof u) continue;
            gw(d, u);
          }
          (e.sham || (u && u.sham)) && dw(d, "sham", !0), pw(a, s, d, e);
        }
    };
  });
  var xl = c((gW, wl) => {
    var mw = Io(),
      yw = wn();
    wl.exports =
      Object.keys ||
      function (t) {
        return mw(t, yw);
      };
  });
  var Al = c((hW, Ol) => {
    var Ew = Rt(),
      bw = Ar(),
      _w = Or(),
      Iw = wr(),
      Tw = xl();
    Ol.exports = Ew
      ? Object.defineProperties
      : function (t, r) {
          _w(t);
          for (var n = Iw(r), i = Tw(r), o = i.length, a = 0, s; o > a; )
            bw.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Cl = c((mW, Sl) => {
    var ww = xr();
    Sl.exports = ww("document", "documentElement");
  });
  var Fl = c((yW, Dl) => {
    var xw = Or(),
      Ow = Al(),
      Rl = wn(),
      Aw = _n(),
      Sw = Cl(),
      Cw = oo(),
      Rw = lo(),
      Ll = ">",
      Nl = "<",
      xo = "prototype",
      Oo = "script",
      Ml = Rw("IE_PROTO"),
      wo = function () {},
      ql = function (e) {
        return Nl + Oo + Ll + e + Nl + "/" + Oo + Ll;
      },
      Pl = function (e) {
        e.write(ql("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      Lw = function () {
        var e = Cw("iframe"),
          t = "java" + Oo + ":",
          r;
        return (
          (e.style.display = "none"),
          Sw.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(ql("document.F=Object")),
          r.close(),
          r.F
        );
      },
      xn,
      On = function () {
        try {
          xn = new ActiveXObject("htmlfile");
        } catch {}
        On =
          typeof document < "u"
            ? document.domain && xn
              ? Pl(xn)
              : Lw()
            : Pl(xn);
        for (var e = Rl.length; e--; ) delete On[xo][Rl[e]];
        return On();
      };
    Aw[Ml] = !0;
    Dl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((wo[xo] = xw(t)), (n = new wo()), (wo[xo] = null), (n[Ml] = t))
            : (n = On()),
          r === void 0 ? n : Ow(n, r)
        );
      };
  });
  var Ul = c((EW, Gl) => {
    var Nw = ro(),
      Pw = Fl(),
      Mw = Ar(),
      Ao = Nw("unscopables"),
      So = Array.prototype;
    So[Ao] == null && Mw.f(So, Ao, { configurable: !0, value: Pw(null) });
    Gl.exports = function (e) {
      So[Ao][e] = !0;
    };
  });
  var Vl = c(() => {
    "use strict";
    var qw = Tl(),
      Dw = bo().includes,
      Fw = Ul();
    qw(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return Dw(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    Fw("includes");
  });
  var Hl = c((IW, kl) => {
    var Gw = ye(),
      Uw = Ye();
    kl.exports = function (e, t) {
      return Uw(Gw[e].prototype[t]);
    };
  });
  var Xl = c((TW, Wl) => {
    Vl();
    var Vw = Hl();
    Wl.exports = Vw("Array", "includes");
  });
  var jl = c((wW, Bl) => {
    var kw = Xl();
    Bl.exports = kw;
  });
  var Kl = c((xW, zl) => {
    var Hw = jl();
    zl.exports = Hw;
  });
  var Co = c((OW, Yl) => {
    var Ww =
      typeof global == "object" && global && global.Object === Object && global;
    Yl.exports = Ww;
  });
  var Qe = c((AW, $l) => {
    var Xw = Co(),
      Bw = typeof self == "object" && self && self.Object === Object && self,
      jw = Xw || Bw || Function("return this")();
    $l.exports = jw;
  });
  var jt = c((SW, Ql) => {
    var zw = Qe(),
      Kw = zw.Symbol;
    Ql.exports = Kw;
  });
  var tf = c((CW, ef) => {
    var Zl = jt(),
      Jl = Object.prototype,
      Yw = Jl.hasOwnProperty,
      $w = Jl.toString,
      Rr = Zl ? Zl.toStringTag : void 0;
    function Qw(e) {
      var t = Yw.call(e, Rr),
        r = e[Rr];
      try {
        e[Rr] = void 0;
        var n = !0;
      } catch {}
      var i = $w.call(e);
      return n && (t ? (e[Rr] = r) : delete e[Rr]), i;
    }
    ef.exports = Qw;
  });
  var nf = c((RW, rf) => {
    var Zw = Object.prototype,
      Jw = Zw.toString;
    function ex(e) {
      return Jw.call(e);
    }
    rf.exports = ex;
  });
  var It = c((LW, sf) => {
    var of = jt(),
      tx = tf(),
      rx = nf(),
      nx = "[object Null]",
      ix = "[object Undefined]",
      af = of ? of.toStringTag : void 0;
    function ox(e) {
      return e == null
        ? e === void 0
          ? ix
          : nx
        : af && af in Object(e)
        ? tx(e)
        : rx(e);
    }
    sf.exports = ox;
  });
  var Ro = c((NW, uf) => {
    function ax(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    uf.exports = ax;
  });
  var Lo = c((PW, cf) => {
    var sx = Ro(),
      ux = sx(Object.getPrototypeOf, Object);
    cf.exports = ux;
  });
  var pt = c((MW, lf) => {
    function cx(e) {
      return e != null && typeof e == "object";
    }
    lf.exports = cx;
  });
  var No = c((qW, df) => {
    var lx = It(),
      fx = Lo(),
      dx = pt(),
      px = "[object Object]",
      vx = Function.prototype,
      gx = Object.prototype,
      ff = vx.toString,
      hx = gx.hasOwnProperty,
      mx = ff.call(Object);
    function yx(e) {
      if (!dx(e) || lx(e) != px) return !1;
      var t = fx(e);
      if (t === null) return !0;
      var r = hx.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && ff.call(r) == mx;
    }
    df.exports = yx;
  });
  var pf = c((Po) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    Po.default = Ex;
    function Ex(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var vf = c((qo, Mo) => {
    "use strict";
    Object.defineProperty(qo, "__esModule", { value: !0 });
    var bx = pf(),
      _x = Ix(bx);
    function Ix(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var zt;
    typeof self < "u"
      ? (zt = self)
      : typeof window < "u"
      ? (zt = window)
      : typeof global < "u"
      ? (zt = global)
      : typeof Mo < "u"
      ? (zt = Mo)
      : (zt = Function("return this")());
    var Tx = (0, _x.default)(zt);
    qo.default = Tx;
  });
  var Do = c((Lr) => {
    "use strict";
    Lr.__esModule = !0;
    Lr.ActionTypes = void 0;
    Lr.default = yf;
    var wx = No(),
      xx = mf(wx),
      Ox = vf(),
      gf = mf(Ox);
    function mf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var hf = (Lr.ActionTypes = { INIT: "@@redux/INIT" });
    function yf(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(yf)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function d() {
        s === a && (s = a.slice());
      }
      function h() {
        return o;
      }
      function l(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var A = !0;
        return (
          d(),
          s.push(_),
          function () {
            if (A) {
              (A = !1), d();
              var N = s.indexOf(_);
              s.splice(N, 1);
            }
          }
        );
      }
      function E(_) {
        if (!(0, xx.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, _));
        } finally {
          u = !1;
        }
        for (var A = (a = s), w = 0; w < A.length; w++) A[w]();
        return _;
      }
      function v(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), E({ type: hf.INIT });
      }
      function g() {
        var _,
          A = l;
        return (
          (_ = {
            subscribe: function (N) {
              if (typeof N != "object")
                throw new TypeError("Expected the observer to be an object.");
              function R() {
                N.next && N.next(h());
              }
              R();
              var M = A(R);
              return { unsubscribe: M };
            },
          }),
          (_[gf.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        E({ type: hf.INIT }),
        (n = { dispatch: E, subscribe: l, getState: h, replaceReducer: v }),
        (n[gf.default] = g),
        n
      );
    }
  });
  var Go = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = Ax;
    function Ax(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var _f = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = Nx;
    var Ef = Do(),
      Sx = No(),
      UW = bf(Sx),
      Cx = Go(),
      VW = bf(Cx);
    function bf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Rx(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function Lx(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: Ef.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                Ef.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function Nx(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        Lx(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var d =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var l;
        for (var E = !1, v = {}, g = 0; g < o.length; g++) {
          var _ = o[g],
            A = r[_],
            w = d[_],
            N = A(w, h);
          if (typeof N > "u") {
            var R = Rx(_, h);
            throw new Error(R);
          }
          (v[_] = N), (E = E || N !== w);
        }
        return E ? v : d;
      };
    }
  });
  var Tf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    Vo.default = Px;
    function If(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Px(e, t) {
      if (typeof e == "function") return If(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = If(a, t));
      }
      return n;
    }
  });
  var Ho = c((ko) => {
    "use strict";
    ko.__esModule = !0;
    ko.default = Mx;
    function Mx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var wf = c((Wo) => {
    "use strict";
    Wo.__esModule = !0;
    var qx =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Wo.default = Ux;
    var Dx = Ho(),
      Fx = Gx(Dx);
    function Gx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ux() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            d = [],
            h = {
              getState: s.getState,
              dispatch: function (E) {
                return u(E);
              },
            };
          return (
            (d = t.map(function (l) {
              return l(h);
            })),
            (u = Fx.default.apply(void 0, d)(s.dispatch)),
            qx({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Xo = c((He) => {
    "use strict";
    He.__esModule = !0;
    He.compose =
      He.applyMiddleware =
      He.bindActionCreators =
      He.combineReducers =
      He.createStore =
        void 0;
    var Vx = Do(),
      kx = Kt(Vx),
      Hx = _f(),
      Wx = Kt(Hx),
      Xx = Tf(),
      Bx = Kt(Xx),
      jx = wf(),
      zx = Kt(jx),
      Kx = Ho(),
      Yx = Kt(Kx),
      $x = Go(),
      BW = Kt($x);
    function Kt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    He.createStore = kx.default;
    He.combineReducers = Wx.default;
    He.bindActionCreators = Bx.default;
    He.applyMiddleware = zx.default;
    He.compose = Yx.default;
  });
  var Ze,
    Bo,
    st,
    Qx,
    Zx,
    jo,
    Jx,
    xf = me(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (Bo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (st = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Qx = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Zx = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (jo = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (Jx = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var We,
    eO,
    zo = me(() => {
      "use strict";
      (We = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (eO = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var tO,
    Of = me(() => {
      "use strict";
      tO = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    Ko,
    Af = me(() => {
      "use strict";
      zo();
      ({
        TRANSFORM_MOVE: rO,
        TRANSFORM_SCALE: nO,
        TRANSFORM_ROTATE: iO,
        TRANSFORM_SKEW: oO,
        STYLE_SIZE: aO,
        STYLE_FILTER: sO,
        STYLE_FONT_VARIATION: uO,
      } = We),
        (Ko = {
          [rO]: !0,
          [nO]: !0,
          [iO]: !0,
          [oO]: !0,
          [aO]: !0,
          [sO]: !0,
          [uO]: !0,
        });
    });
  var Te = {};
  Ge(Te, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => xO,
    IX2_ANIMATION_FRAME_CHANGED: () => EO,
    IX2_CLEAR_REQUESTED: () => hO,
    IX2_ELEMENT_STATE_CHANGED: () => wO,
    IX2_EVENT_LISTENER_ADDED: () => mO,
    IX2_EVENT_STATE_CHANGED: () => yO,
    IX2_INSTANCE_ADDED: () => _O,
    IX2_INSTANCE_REMOVED: () => TO,
    IX2_INSTANCE_STARTED: () => IO,
    IX2_MEDIA_QUERIES_DEFINED: () => AO,
    IX2_PARAMETER_CHANGED: () => bO,
    IX2_PLAYBACK_REQUESTED: () => vO,
    IX2_PREVIEW_REQUESTED: () => pO,
    IX2_RAW_DATA_IMPORTED: () => cO,
    IX2_SESSION_INITIALIZED: () => lO,
    IX2_SESSION_STARTED: () => fO,
    IX2_SESSION_STOPPED: () => dO,
    IX2_STOP_REQUESTED: () => gO,
    IX2_TEST_FRAME_RENDERED: () => SO,
    IX2_VIEWPORT_WIDTH_CHANGED: () => OO,
  });
  var cO,
    lO,
    fO,
    dO,
    pO,
    vO,
    gO,
    hO,
    mO,
    yO,
    EO,
    bO,
    _O,
    IO,
    TO,
    wO,
    xO,
    OO,
    AO,
    SO,
    Sf = me(() => {
      "use strict";
      (cO = "IX2_RAW_DATA_IMPORTED"),
        (lO = "IX2_SESSION_INITIALIZED"),
        (fO = "IX2_SESSION_STARTED"),
        (dO = "IX2_SESSION_STOPPED"),
        (pO = "IX2_PREVIEW_REQUESTED"),
        (vO = "IX2_PLAYBACK_REQUESTED"),
        (gO = "IX2_STOP_REQUESTED"),
        (hO = "IX2_CLEAR_REQUESTED"),
        (mO = "IX2_EVENT_LISTENER_ADDED"),
        (yO = "IX2_EVENT_STATE_CHANGED"),
        (EO = "IX2_ANIMATION_FRAME_CHANGED"),
        (bO = "IX2_PARAMETER_CHANGED"),
        (_O = "IX2_INSTANCE_ADDED"),
        (IO = "IX2_INSTANCE_STARTED"),
        (TO = "IX2_INSTANCE_REMOVED"),
        (wO = "IX2_ELEMENT_STATE_CHANGED"),
        (xO = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (OO = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (AO = "IX2_MEDIA_QUERIES_DEFINED"),
        (SO = "IX2_TEST_FRAME_RENDERED");
    });
  var Ce = {};
  Ge(Ce, {
    ABSTRACT_NODE: () => OA,
    AUTO: () => gA,
    BACKGROUND: () => cA,
    BACKGROUND_COLOR: () => uA,
    BAR_DELIMITER: () => yA,
    BORDER_COLOR: () => lA,
    BOUNDARY_SELECTOR: () => PO,
    CHILDREN: () => EA,
    COLON_DELIMITER: () => mA,
    COLOR: () => fA,
    COMMA_DELIMITER: () => hA,
    CONFIG_UNIT: () => kO,
    CONFIG_VALUE: () => FO,
    CONFIG_X_UNIT: () => GO,
    CONFIG_X_VALUE: () => MO,
    CONFIG_Y_UNIT: () => UO,
    CONFIG_Y_VALUE: () => qO,
    CONFIG_Z_UNIT: () => VO,
    CONFIG_Z_VALUE: () => DO,
    DISPLAY: () => dA,
    FILTER: () => iA,
    FLEX: () => pA,
    FONT_VARIATION_SETTINGS: () => oA,
    HEIGHT: () => sA,
    HTML_ELEMENT: () => wA,
    IMMEDIATE_CHILDREN: () => bA,
    IX2_ID_DELIMITER: () => CO,
    OPACITY: () => nA,
    PARENT: () => IA,
    PLAIN_OBJECT: () => xA,
    PRESERVE_3D: () => TA,
    RENDER_GENERAL: () => SA,
    RENDER_PLUGIN: () => RA,
    RENDER_STYLE: () => CA,
    RENDER_TRANSFORM: () => AA,
    ROTATE_X: () => QO,
    ROTATE_Y: () => ZO,
    ROTATE_Z: () => JO,
    SCALE_3D: () => $O,
    SCALE_X: () => zO,
    SCALE_Y: () => KO,
    SCALE_Z: () => YO,
    SIBLINGS: () => _A,
    SKEW: () => eA,
    SKEW_X: () => tA,
    SKEW_Y: () => rA,
    TRANSFORM: () => HO,
    TRANSLATE_3D: () => jO,
    TRANSLATE_X: () => WO,
    TRANSLATE_Y: () => XO,
    TRANSLATE_Z: () => BO,
    WF_PAGE: () => RO,
    WIDTH: () => aA,
    WILL_CHANGE: () => vA,
    W_MOD_IX: () => NO,
    W_MOD_JS: () => LO,
  });
  var CO,
    RO,
    LO,
    NO,
    PO,
    MO,
    qO,
    DO,
    FO,
    GO,
    UO,
    VO,
    kO,
    HO,
    WO,
    XO,
    BO,
    jO,
    zO,
    KO,
    YO,
    $O,
    QO,
    ZO,
    JO,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    gA,
    hA,
    mA,
    yA,
    EA,
    bA,
    _A,
    IA,
    TA,
    wA,
    xA,
    OA,
    AA,
    SA,
    CA,
    RA,
    Cf = me(() => {
      "use strict";
      (CO = "|"),
        (RO = "data-wf-page"),
        (LO = "w-mod-js"),
        (NO = "w-mod-ix"),
        (PO = ".w-dyn-item"),
        (MO = "xValue"),
        (qO = "yValue"),
        (DO = "zValue"),
        (FO = "value"),
        (GO = "xUnit"),
        (UO = "yUnit"),
        (VO = "zUnit"),
        (kO = "unit"),
        (HO = "transform"),
        (WO = "translateX"),
        (XO = "translateY"),
        (BO = "translateZ"),
        (jO = "translate3d"),
        (zO = "scaleX"),
        (KO = "scaleY"),
        (YO = "scaleZ"),
        ($O = "scale3d"),
        (QO = "rotateX"),
        (ZO = "rotateY"),
        (JO = "rotateZ"),
        (eA = "skew"),
        (tA = "skewX"),
        (rA = "skewY"),
        (nA = "opacity"),
        (iA = "filter"),
        (oA = "font-variation-settings"),
        (aA = "width"),
        (sA = "height"),
        (uA = "backgroundColor"),
        (cA = "background"),
        (lA = "borderColor"),
        (fA = "color"),
        (dA = "display"),
        (pA = "flex"),
        (vA = "willChange"),
        (gA = "AUTO"),
        (hA = ","),
        (mA = ":"),
        (yA = "|"),
        (EA = "CHILDREN"),
        (bA = "IMMEDIATE_CHILDREN"),
        (_A = "SIBLINGS"),
        (IA = "PARENT"),
        (TA = "preserve-3d"),
        (wA = "HTML_ELEMENT"),
        (xA = "PLAIN_OBJECT"),
        (OA = "ABSTRACT_NODE"),
        (AA = "RENDER_TRANSFORM"),
        (SA = "RENDER_GENERAL"),
        (CA = "RENDER_STYLE"),
        (RA = "RENDER_PLUGIN");
    });
  var Rf = {};
  Ge(Rf, {
    ActionAppliesTo: () => eO,
    ActionTypeConsts: () => We,
    EventAppliesTo: () => Bo,
    EventBasedOn: () => st,
    EventContinuousMouseAxes: () => Qx,
    EventLimitAffectedElements: () => Zx,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Te,
    IX2EngineConstants: () => Ce,
    InteractionTypeConsts: () => tO,
    QuickEffectDirectionConsts: () => Jx,
    QuickEffectIds: () => jo,
    ReducedMotionTypes: () => Ko,
  });
  var Ue = me(() => {
    "use strict";
    xf();
    zo();
    Of();
    Af();
    Sf();
    Cf();
  });
  var LA,
    Lf,
    Nf = me(() => {
      "use strict";
      Ue();
      ({ IX2_RAW_DATA_IMPORTED: LA } = Te),
        (Lf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case LA:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Yt = c((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    var NA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    be.clone = Sn;
    be.addLast = qf;
    be.addFirst = Df;
    be.removeLast = Ff;
    be.removeFirst = Gf;
    be.insert = Uf;
    be.removeAt = Vf;
    be.replaceAt = kf;
    be.getIn = Cn;
    be.set = Rn;
    be.setIn = Ln;
    be.update = Wf;
    be.updateIn = Xf;
    be.merge = Bf;
    be.mergeDeep = jf;
    be.mergeIn = zf;
    be.omit = Kf;
    be.addDefaults = Yf;
    var Pf = "INVALID_ARGS";
    function Mf(e) {
      throw new Error(e);
    }
    function Yo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var PA = {}.hasOwnProperty;
    function Sn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ve(e, t, r) {
      var n = r;
      n == null && Mf(Pf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var d = a[u];
        if (d != null) {
          var h = Yo(d);
          if (h.length)
            for (var l = 0; l <= h.length; l++) {
              var E = h[l];
              if (!(e && n[E] !== void 0)) {
                var v = d[E];
                t && An(n[E]) && An(v) && (v = Ve(e, t, n[E], v)),
                  !(v === void 0 || v === n[E]) &&
                    (i || ((i = !0), (n = Sn(n))), (n[E] = v));
              }
            }
        }
      }
      return n;
    }
    function An(e) {
      var t = typeof e > "u" ? "undefined" : NA(e);
      return e != null && (t === "object" || t === "function");
    }
    function qf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Df(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Ff(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Gf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Uf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Vf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function kf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function Cn(e, t) {
      if ((!Array.isArray(t) && Mf(Pf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function Rn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = Sn(i);
      return (o[t] = r), o;
    }
    function Hf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Hf(a, t, r, n + 1);
      }
      return Rn(e, o, i);
    }
    function Ln(e, t, r) {
      return t.length ? Hf(e, t, r, 0) : r;
    }
    function Wf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Rn(e, t, i);
    }
    function Xf(e, t, r) {
      var n = Cn(e, t),
        i = r(n);
      return Ln(e, t, i);
    }
    function Bf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ve(!1, !1, e, t, r, n, i, o);
    }
    function jf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ve(!1, !0, e, t, r, n, i, o);
    }
    function zf(e, t, r, n, i, o, a) {
      var s = Cn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          d = arguments.length,
          h = Array(d > 7 ? d - 7 : 0),
          l = 7;
        l < d;
        l++
      )
        h[l - 7] = arguments[l];
      return (
        h.length
          ? (u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, i, o, a].concat(h)))
          : (u = Ve(!1, !1, s, r, n, i, o, a)),
        Ln(e, t, u)
      );
    }
    function Kf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (PA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = Yo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Yf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ve(!0, !1, e, t, r, n, i, o);
    }
    var MA = {
      clone: Sn,
      addLast: qf,
      addFirst: Df,
      removeLast: Ff,
      removeFirst: Gf,
      insert: Uf,
      removeAt: Vf,
      replaceAt: kf,
      getIn: Cn,
      set: Rn,
      setIn: Ln,
      update: Wf,
      updateIn: Xf,
      merge: Bf,
      mergeDeep: jf,
      mergeIn: zf,
      omit: Kf,
      addDefaults: Yf,
    };
    be.default = MA;
  });
  var Qf,
    qA,
    DA,
    FA,
    GA,
    UA,
    $f,
    Zf,
    Jf = me(() => {
      "use strict";
      Ue();
      (Qf = fe(Yt())),
        ({
          IX2_PREVIEW_REQUESTED: qA,
          IX2_PLAYBACK_REQUESTED: DA,
          IX2_STOP_REQUESTED: FA,
          IX2_CLEAR_REQUESTED: GA,
        } = Te),
        (UA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        ($f = Object.create(null, {
          [qA]: { value: "preview" },
          [DA]: { value: "playback" },
          [FA]: { value: "stop" },
          [GA]: { value: "clear" },
        })),
        (Zf = (e = UA, t) => {
          if (t.type in $f) {
            let r = [$f[t.type]];
            return (0, Qf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Pe,
    VA,
    kA,
    HA,
    WA,
    XA,
    BA,
    jA,
    zA,
    KA,
    YA,
    ed,
    $A,
    td,
    rd = me(() => {
      "use strict";
      Ue();
      (Pe = fe(Yt())),
        ({
          IX2_SESSION_INITIALIZED: VA,
          IX2_SESSION_STARTED: kA,
          IX2_TEST_FRAME_RENDERED: HA,
          IX2_SESSION_STOPPED: WA,
          IX2_EVENT_LISTENER_ADDED: XA,
          IX2_EVENT_STATE_CHANGED: BA,
          IX2_ANIMATION_FRAME_CHANGED: jA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: zA,
          IX2_VIEWPORT_WIDTH_CHANGED: KA,
          IX2_MEDIA_QUERIES_DEFINED: YA,
        } = Te),
        (ed = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        ($A = 20),
        (td = (e = ed, t) => {
          switch (t.type) {
            case VA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Pe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case kA:
              return (0, Pe.set)(e, "active", !0);
            case HA: {
              let {
                payload: { step: r = $A },
              } = t;
              return (0, Pe.set)(e, "tick", e.tick + r);
            }
            case WA:
              return ed;
            case jA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Pe.set)(e, "tick", r);
            }
            case XA: {
              let r = (0, Pe.addLast)(e.eventListeners, t.payload);
              return (0, Pe.set)(e, "eventListeners", r);
            }
            case BA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Pe.setIn)(e, ["eventState", r], n);
            }
            case zA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Pe.setIn)(e, ["playbackState", r], n);
            }
            case KA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: d } = n[a];
                if (r >= u && r <= d) {
                  o = s;
                  break;
                }
              }
              return (0, Pe.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case YA:
              return (0, Pe.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var id = c((cX, nd) => {
    function QA() {
      (this.__data__ = []), (this.size = 0);
    }
    nd.exports = QA;
  });
  var Nn = c((lX, od) => {
    function ZA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    od.exports = ZA;
  });
  var Nr = c((fX, ad) => {
    var JA = Nn();
    function eS(e, t) {
      for (var r = e.length; r--; ) if (JA(e[r][0], t)) return r;
      return -1;
    }
    ad.exports = eS;
  });
  var ud = c((dX, sd) => {
    var tS = Nr(),
      rS = Array.prototype,
      nS = rS.splice;
    function iS(e) {
      var t = this.__data__,
        r = tS(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : nS.call(t, r, 1), --this.size, !0;
    }
    sd.exports = iS;
  });
  var ld = c((pX, cd) => {
    var oS = Nr();
    function aS(e) {
      var t = this.__data__,
        r = oS(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    cd.exports = aS;
  });
  var dd = c((vX, fd) => {
    var sS = Nr();
    function uS(e) {
      return sS(this.__data__, e) > -1;
    }
    fd.exports = uS;
  });
  var vd = c((gX, pd) => {
    var cS = Nr();
    function lS(e, t) {
      var r = this.__data__,
        n = cS(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    pd.exports = lS;
  });
  var Pr = c((hX, gd) => {
    var fS = id(),
      dS = ud(),
      pS = ld(),
      vS = dd(),
      gS = vd();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = fS;
    $t.prototype.delete = dS;
    $t.prototype.get = pS;
    $t.prototype.has = vS;
    $t.prototype.set = gS;
    gd.exports = $t;
  });
  var md = c((mX, hd) => {
    var hS = Pr();
    function mS() {
      (this.__data__ = new hS()), (this.size = 0);
    }
    hd.exports = mS;
  });
  var Ed = c((yX, yd) => {
    function yS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    yd.exports = yS;
  });
  var _d = c((EX, bd) => {
    function ES(e) {
      return this.__data__.get(e);
    }
    bd.exports = ES;
  });
  var Td = c((bX, Id) => {
    function bS(e) {
      return this.__data__.has(e);
    }
    Id.exports = bS;
  });
  var ut = c((_X, wd) => {
    function _S(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    wd.exports = _S;
  });
  var $o = c((IX, xd) => {
    var IS = It(),
      TS = ut(),
      wS = "[object AsyncFunction]",
      xS = "[object Function]",
      OS = "[object GeneratorFunction]",
      AS = "[object Proxy]";
    function SS(e) {
      if (!TS(e)) return !1;
      var t = IS(e);
      return t == xS || t == OS || t == wS || t == AS;
    }
    xd.exports = SS;
  });
  var Ad = c((TX, Od) => {
    var CS = Qe(),
      RS = CS["__core-js_shared__"];
    Od.exports = RS;
  });
  var Rd = c((wX, Cd) => {
    var Qo = Ad(),
      Sd = (function () {
        var e = /[^.]+$/.exec((Qo && Qo.keys && Qo.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function LS(e) {
      return !!Sd && Sd in e;
    }
    Cd.exports = LS;
  });
  var Zo = c((xX, Ld) => {
    var NS = Function.prototype,
      PS = NS.toString;
    function MS(e) {
      if (e != null) {
        try {
          return PS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Ld.exports = MS;
  });
  var Pd = c((OX, Nd) => {
    var qS = $o(),
      DS = Rd(),
      FS = ut(),
      GS = Zo(),
      US = /[\\^$.*+?()[\]{}|]/g,
      VS = /^\[object .+?Constructor\]$/,
      kS = Function.prototype,
      HS = Object.prototype,
      WS = kS.toString,
      XS = HS.hasOwnProperty,
      BS = RegExp(
        "^" +
          WS.call(XS)
            .replace(US, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function jS(e) {
      if (!FS(e) || DS(e)) return !1;
      var t = qS(e) ? BS : VS;
      return t.test(GS(e));
    }
    Nd.exports = jS;
  });
  var qd = c((AX, Md) => {
    function zS(e, t) {
      return e?.[t];
    }
    Md.exports = zS;
  });
  var Tt = c((SX, Dd) => {
    var KS = Pd(),
      YS = qd();
    function $S(e, t) {
      var r = YS(e, t);
      return KS(r) ? r : void 0;
    }
    Dd.exports = $S;
  });
  var Pn = c((CX, Fd) => {
    var QS = Tt(),
      ZS = Qe(),
      JS = QS(ZS, "Map");
    Fd.exports = JS;
  });
  var Mr = c((RX, Gd) => {
    var e0 = Tt(),
      t0 = e0(Object, "create");
    Gd.exports = t0;
  });
  var kd = c((LX, Vd) => {
    var Ud = Mr();
    function r0() {
      (this.__data__ = Ud ? Ud(null) : {}), (this.size = 0);
    }
    Vd.exports = r0;
  });
  var Wd = c((NX, Hd) => {
    function n0(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Hd.exports = n0;
  });
  var Bd = c((PX, Xd) => {
    var i0 = Mr(),
      o0 = "__lodash_hash_undefined__",
      a0 = Object.prototype,
      s0 = a0.hasOwnProperty;
    function u0(e) {
      var t = this.__data__;
      if (i0) {
        var r = t[e];
        return r === o0 ? void 0 : r;
      }
      return s0.call(t, e) ? t[e] : void 0;
    }
    Xd.exports = u0;
  });
  var zd = c((MX, jd) => {
    var c0 = Mr(),
      l0 = Object.prototype,
      f0 = l0.hasOwnProperty;
    function d0(e) {
      var t = this.__data__;
      return c0 ? t[e] !== void 0 : f0.call(t, e);
    }
    jd.exports = d0;
  });
  var Yd = c((qX, Kd) => {
    var p0 = Mr(),
      v0 = "__lodash_hash_undefined__";
    function g0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = p0 && t === void 0 ? v0 : t),
        this
      );
    }
    Kd.exports = g0;
  });
  var Qd = c((DX, $d) => {
    var h0 = kd(),
      m0 = Wd(),
      y0 = Bd(),
      E0 = zd(),
      b0 = Yd();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = h0;
    Qt.prototype.delete = m0;
    Qt.prototype.get = y0;
    Qt.prototype.has = E0;
    Qt.prototype.set = b0;
    $d.exports = Qt;
  });
  var ep = c((FX, Jd) => {
    var Zd = Qd(),
      _0 = Pr(),
      I0 = Pn();
    function T0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Zd(),
          map: new (I0 || _0)(),
          string: new Zd(),
        });
    }
    Jd.exports = T0;
  });
  var rp = c((GX, tp) => {
    function w0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    tp.exports = w0;
  });
  var qr = c((UX, np) => {
    var x0 = rp();
    function O0(e, t) {
      var r = e.__data__;
      return x0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    np.exports = O0;
  });
  var op = c((VX, ip) => {
    var A0 = qr();
    function S0(e) {
      var t = A0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    ip.exports = S0;
  });
  var sp = c((kX, ap) => {
    var C0 = qr();
    function R0(e) {
      return C0(this, e).get(e);
    }
    ap.exports = R0;
  });
  var cp = c((HX, up) => {
    var L0 = qr();
    function N0(e) {
      return L0(this, e).has(e);
    }
    up.exports = N0;
  });
  var fp = c((WX, lp) => {
    var P0 = qr();
    function M0(e, t) {
      var r = P0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    lp.exports = M0;
  });
  var Mn = c((XX, dp) => {
    var q0 = ep(),
      D0 = op(),
      F0 = sp(),
      G0 = cp(),
      U0 = fp();
    function Zt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Zt.prototype.clear = q0;
    Zt.prototype.delete = D0;
    Zt.prototype.get = F0;
    Zt.prototype.has = G0;
    Zt.prototype.set = U0;
    dp.exports = Zt;
  });
  var vp = c((BX, pp) => {
    var V0 = Pr(),
      k0 = Pn(),
      H0 = Mn(),
      W0 = 200;
    function X0(e, t) {
      var r = this.__data__;
      if (r instanceof V0) {
        var n = r.__data__;
        if (!k0 || n.length < W0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new H0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    pp.exports = X0;
  });
  var Jo = c((jX, gp) => {
    var B0 = Pr(),
      j0 = md(),
      z0 = Ed(),
      K0 = _d(),
      Y0 = Td(),
      $0 = vp();
    function Jt(e) {
      var t = (this.__data__ = new B0(e));
      this.size = t.size;
    }
    Jt.prototype.clear = j0;
    Jt.prototype.delete = z0;
    Jt.prototype.get = K0;
    Jt.prototype.has = Y0;
    Jt.prototype.set = $0;
    gp.exports = Jt;
  });
  var mp = c((zX, hp) => {
    var Q0 = "__lodash_hash_undefined__";
    function Z0(e) {
      return this.__data__.set(e, Q0), this;
    }
    hp.exports = Z0;
  });
  var Ep = c((KX, yp) => {
    function J0(e) {
      return this.__data__.has(e);
    }
    yp.exports = J0;
  });
  var _p = c((YX, bp) => {
    var eC = Mn(),
      tC = mp(),
      rC = Ep();
    function qn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new eC(); ++t < r; ) this.add(e[t]);
    }
    qn.prototype.add = qn.prototype.push = tC;
    qn.prototype.has = rC;
    bp.exports = qn;
  });
  var Tp = c(($X, Ip) => {
    function nC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    Ip.exports = nC;
  });
  var xp = c((QX, wp) => {
    function iC(e, t) {
      return e.has(t);
    }
    wp.exports = iC;
  });
  var ea = c((ZX, Op) => {
    var oC = _p(),
      aC = Tp(),
      sC = xp(),
      uC = 1,
      cC = 2;
    function lC(e, t, r, n, i, o) {
      var a = r & uC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var d = o.get(e),
        h = o.get(t);
      if (d && h) return d == t && h == e;
      var l = -1,
        E = !0,
        v = r & cC ? new oC() : void 0;
      for (o.set(e, t), o.set(t, e); ++l < s; ) {
        var g = e[l],
          _ = t[l];
        if (n) var A = a ? n(_, g, l, t, e, o) : n(g, _, l, e, t, o);
        if (A !== void 0) {
          if (A) continue;
          E = !1;
          break;
        }
        if (v) {
          if (
            !aC(t, function (w, N) {
              if (!sC(v, N) && (g === w || i(g, w, r, n, o))) return v.push(N);
            })
          ) {
            E = !1;
            break;
          }
        } else if (!(g === _ || i(g, _, r, n, o))) {
          E = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), E;
    }
    Op.exports = lC;
  });
  var Sp = c((JX, Ap) => {
    var fC = Qe(),
      dC = fC.Uint8Array;
    Ap.exports = dC;
  });
  var Rp = c((eB, Cp) => {
    function pC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Cp.exports = pC;
  });
  var Np = c((tB, Lp) => {
    function vC(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Lp.exports = vC;
  });
  var Fp = c((rB, Dp) => {
    var Pp = jt(),
      Mp = Sp(),
      gC = Nn(),
      hC = ea(),
      mC = Rp(),
      yC = Np(),
      EC = 1,
      bC = 2,
      _C = "[object Boolean]",
      IC = "[object Date]",
      TC = "[object Error]",
      wC = "[object Map]",
      xC = "[object Number]",
      OC = "[object RegExp]",
      AC = "[object Set]",
      SC = "[object String]",
      CC = "[object Symbol]",
      RC = "[object ArrayBuffer]",
      LC = "[object DataView]",
      qp = Pp ? Pp.prototype : void 0,
      ta = qp ? qp.valueOf : void 0;
    function NC(e, t, r, n, i, o, a) {
      switch (r) {
        case LC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case RC:
          return !(e.byteLength != t.byteLength || !o(new Mp(e), new Mp(t)));
        case _C:
        case IC:
        case xC:
          return gC(+e, +t);
        case TC:
          return e.name == t.name && e.message == t.message;
        case OC:
        case SC:
          return e == t + "";
        case wC:
          var s = mC;
        case AC:
          var u = n & EC;
          if ((s || (s = yC), e.size != t.size && !u)) return !1;
          var d = a.get(e);
          if (d) return d == t;
          (n |= bC), a.set(e, t);
          var h = hC(s(e), s(t), n, i, o, a);
          return a.delete(e), h;
        case CC:
          if (ta) return ta.call(e) == ta.call(t);
      }
      return !1;
    }
    Dp.exports = NC;
  });
  var Dn = c((nB, Gp) => {
    function PC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Gp.exports = PC;
  });
  var xe = c((iB, Up) => {
    var MC = Array.isArray;
    Up.exports = MC;
  });
  var ra = c((oB, Vp) => {
    var qC = Dn(),
      DC = xe();
    function FC(e, t, r) {
      var n = t(e);
      return DC(e) ? n : qC(n, r(e));
    }
    Vp.exports = FC;
  });
  var Hp = c((aB, kp) => {
    function GC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    kp.exports = GC;
  });
  var na = c((sB, Wp) => {
    function UC() {
      return [];
    }
    Wp.exports = UC;
  });
  var ia = c((uB, Bp) => {
    var VC = Hp(),
      kC = na(),
      HC = Object.prototype,
      WC = HC.propertyIsEnumerable,
      Xp = Object.getOwnPropertySymbols,
      XC = Xp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                VC(Xp(e), function (t) {
                  return WC.call(e, t);
                }));
          }
        : kC;
    Bp.exports = XC;
  });
  var zp = c((cB, jp) => {
    function BC(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    jp.exports = BC;
  });
  var Yp = c((lB, Kp) => {
    var jC = It(),
      zC = pt(),
      KC = "[object Arguments]";
    function YC(e) {
      return zC(e) && jC(e) == KC;
    }
    Kp.exports = YC;
  });
  var Dr = c((fB, Zp) => {
    var $p = Yp(),
      $C = pt(),
      Qp = Object.prototype,
      QC = Qp.hasOwnProperty,
      ZC = Qp.propertyIsEnumerable,
      JC = $p(
        (function () {
          return arguments;
        })()
      )
        ? $p
        : function (e) {
            return $C(e) && QC.call(e, "callee") && !ZC.call(e, "callee");
          };
    Zp.exports = JC;
  });
  var ev = c((dB, Jp) => {
    function eR() {
      return !1;
    }
    Jp.exports = eR;
  });
  var Fn = c((Fr, er) => {
    var tR = Qe(),
      rR = ev(),
      nv = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      tv = nv && typeof er == "object" && er && !er.nodeType && er,
      nR = tv && tv.exports === nv,
      rv = nR ? tR.Buffer : void 0,
      iR = rv ? rv.isBuffer : void 0,
      oR = iR || rR;
    er.exports = oR;
  });
  var Gn = c((pB, iv) => {
    var aR = 9007199254740991,
      sR = /^(?:0|[1-9]\d*)$/;
    function uR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? aR),
        !!t &&
          (r == "number" || (r != "symbol" && sR.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    iv.exports = uR;
  });
  var Un = c((vB, ov) => {
    var cR = 9007199254740991;
    function lR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cR;
    }
    ov.exports = lR;
  });
  var sv = c((gB, av) => {
    var fR = It(),
      dR = Un(),
      pR = pt(),
      vR = "[object Arguments]",
      gR = "[object Array]",
      hR = "[object Boolean]",
      mR = "[object Date]",
      yR = "[object Error]",
      ER = "[object Function]",
      bR = "[object Map]",
      _R = "[object Number]",
      IR = "[object Object]",
      TR = "[object RegExp]",
      wR = "[object Set]",
      xR = "[object String]",
      OR = "[object WeakMap]",
      AR = "[object ArrayBuffer]",
      SR = "[object DataView]",
      CR = "[object Float32Array]",
      RR = "[object Float64Array]",
      LR = "[object Int8Array]",
      NR = "[object Int16Array]",
      PR = "[object Int32Array]",
      MR = "[object Uint8Array]",
      qR = "[object Uint8ClampedArray]",
      DR = "[object Uint16Array]",
      FR = "[object Uint32Array]",
      he = {};
    he[CR] =
      he[RR] =
      he[LR] =
      he[NR] =
      he[PR] =
      he[MR] =
      he[qR] =
      he[DR] =
      he[FR] =
        !0;
    he[vR] =
      he[gR] =
      he[AR] =
      he[hR] =
      he[SR] =
      he[mR] =
      he[yR] =
      he[ER] =
      he[bR] =
      he[_R] =
      he[IR] =
      he[TR] =
      he[wR] =
      he[xR] =
      he[OR] =
        !1;
    function GR(e) {
      return pR(e) && dR(e.length) && !!he[fR(e)];
    }
    av.exports = GR;
  });
  var cv = c((hB, uv) => {
    function UR(e) {
      return function (t) {
        return e(t);
      };
    }
    uv.exports = UR;
  });
  var fv = c((Gr, tr) => {
    var VR = Co(),
      lv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
      Ur = lv && typeof tr == "object" && tr && !tr.nodeType && tr,
      kR = Ur && Ur.exports === lv,
      oa = kR && VR.process,
      HR = (function () {
        try {
          var e = Ur && Ur.require && Ur.require("util").types;
          return e || (oa && oa.binding && oa.binding("util"));
        } catch {}
      })();
    tr.exports = HR;
  });
  var Vn = c((mB, vv) => {
    var WR = sv(),
      XR = cv(),
      dv = fv(),
      pv = dv && dv.isTypedArray,
      BR = pv ? XR(pv) : WR;
    vv.exports = BR;
  });
  var aa = c((yB, gv) => {
    var jR = zp(),
      zR = Dr(),
      KR = xe(),
      YR = Fn(),
      $R = Gn(),
      QR = Vn(),
      ZR = Object.prototype,
      JR = ZR.hasOwnProperty;
    function eL(e, t) {
      var r = KR(e),
        n = !r && zR(e),
        i = !r && !n && YR(e),
        o = !r && !n && !i && QR(e),
        a = r || n || i || o,
        s = a ? jR(e.length, String) : [],
        u = s.length;
      for (var d in e)
        (t || JR.call(e, d)) &&
          !(
            a &&
            (d == "length" ||
              (i && (d == "offset" || d == "parent")) ||
              (o &&
                (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
              $R(d, u))
          ) &&
          s.push(d);
      return s;
    }
    gv.exports = eL;
  });
  var kn = c((EB, hv) => {
    var tL = Object.prototype;
    function rL(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || tL;
      return e === r;
    }
    hv.exports = rL;
  });
  var yv = c((bB, mv) => {
    var nL = Ro(),
      iL = nL(Object.keys, Object);
    mv.exports = iL;
  });
  var Hn = c((_B, Ev) => {
    var oL = kn(),
      aL = yv(),
      sL = Object.prototype,
      uL = sL.hasOwnProperty;
    function cL(e) {
      if (!oL(e)) return aL(e);
      var t = [];
      for (var r in Object(e)) uL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    Ev.exports = cL;
  });
  var Pt = c((IB, bv) => {
    var lL = $o(),
      fL = Un();
    function dL(e) {
      return e != null && fL(e.length) && !lL(e);
    }
    bv.exports = dL;
  });
  var Vr = c((TB, _v) => {
    var pL = aa(),
      vL = Hn(),
      gL = Pt();
    function hL(e) {
      return gL(e) ? pL(e) : vL(e);
    }
    _v.exports = hL;
  });
  var Tv = c((wB, Iv) => {
    var mL = ra(),
      yL = ia(),
      EL = Vr();
    function bL(e) {
      return mL(e, EL, yL);
    }
    Iv.exports = bL;
  });
  var Ov = c((xB, xv) => {
    var wv = Tv(),
      _L = 1,
      IL = Object.prototype,
      TL = IL.hasOwnProperty;
    function wL(e, t, r, n, i, o) {
      var a = r & _L,
        s = wv(e),
        u = s.length,
        d = wv(t),
        h = d.length;
      if (u != h && !a) return !1;
      for (var l = u; l--; ) {
        var E = s[l];
        if (!(a ? E in t : TL.call(t, E))) return !1;
      }
      var v = o.get(e),
        g = o.get(t);
      if (v && g) return v == t && g == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var A = a; ++l < u; ) {
        E = s[l];
        var w = e[E],
          N = t[E];
        if (n) var R = a ? n(N, w, E, t, e, o) : n(w, N, E, e, t, o);
        if (!(R === void 0 ? w === N || i(w, N, r, n, o) : R)) {
          _ = !1;
          break;
        }
        A || (A = E == "constructor");
      }
      if (_ && !A) {
        var M = e.constructor,
          F = t.constructor;
        M != F &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof M == "function" &&
            M instanceof M &&
            typeof F == "function" &&
            F instanceof F
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    xv.exports = wL;
  });
  var Sv = c((OB, Av) => {
    var xL = Tt(),
      OL = Qe(),
      AL = xL(OL, "DataView");
    Av.exports = AL;
  });
  var Rv = c((AB, Cv) => {
    var SL = Tt(),
      CL = Qe(),
      RL = SL(CL, "Promise");
    Cv.exports = RL;
  });
  var Nv = c((SB, Lv) => {
    var LL = Tt(),
      NL = Qe(),
      PL = LL(NL, "Set");
    Lv.exports = PL;
  });
  var sa = c((CB, Pv) => {
    var ML = Tt(),
      qL = Qe(),
      DL = ML(qL, "WeakMap");
    Pv.exports = DL;
  });
  var Wn = c((RB, Vv) => {
    var ua = Sv(),
      ca = Pn(),
      la = Rv(),
      fa = Nv(),
      da = sa(),
      Uv = It(),
      rr = Zo(),
      Mv = "[object Map]",
      FL = "[object Object]",
      qv = "[object Promise]",
      Dv = "[object Set]",
      Fv = "[object WeakMap]",
      Gv = "[object DataView]",
      GL = rr(ua),
      UL = rr(ca),
      VL = rr(la),
      kL = rr(fa),
      HL = rr(da),
      Mt = Uv;
    ((ua && Mt(new ua(new ArrayBuffer(1))) != Gv) ||
      (ca && Mt(new ca()) != Mv) ||
      (la && Mt(la.resolve()) != qv) ||
      (fa && Mt(new fa()) != Dv) ||
      (da && Mt(new da()) != Fv)) &&
      (Mt = function (e) {
        var t = Uv(e),
          r = t == FL ? e.constructor : void 0,
          n = r ? rr(r) : "";
        if (n)
          switch (n) {
            case GL:
              return Gv;
            case UL:
              return Mv;
            case VL:
              return qv;
            case kL:
              return Dv;
            case HL:
              return Fv;
          }
        return t;
      });
    Vv.exports = Mt;
  });
  var Kv = c((LB, zv) => {
    var pa = Jo(),
      WL = ea(),
      XL = Fp(),
      BL = Ov(),
      kv = Wn(),
      Hv = xe(),
      Wv = Fn(),
      jL = Vn(),
      zL = 1,
      Xv = "[object Arguments]",
      Bv = "[object Array]",
      Xn = "[object Object]",
      KL = Object.prototype,
      jv = KL.hasOwnProperty;
    function YL(e, t, r, n, i, o) {
      var a = Hv(e),
        s = Hv(t),
        u = a ? Bv : kv(e),
        d = s ? Bv : kv(t);
      (u = u == Xv ? Xn : u), (d = d == Xv ? Xn : d);
      var h = u == Xn,
        l = d == Xn,
        E = u == d;
      if (E && Wv(e)) {
        if (!Wv(t)) return !1;
        (a = !0), (h = !1);
      }
      if (E && !h)
        return (
          o || (o = new pa()),
          a || jL(e) ? WL(e, t, r, n, i, o) : XL(e, t, u, r, n, i, o)
        );
      if (!(r & zL)) {
        var v = h && jv.call(e, "__wrapped__"),
          g = l && jv.call(t, "__wrapped__");
        if (v || g) {
          var _ = v ? e.value() : e,
            A = g ? t.value() : t;
          return o || (o = new pa()), i(_, A, r, n, o);
        }
      }
      return E ? (o || (o = new pa()), BL(e, t, r, n, i, o)) : !1;
    }
    zv.exports = YL;
  });
  var va = c((NB, Qv) => {
    var $L = Kv(),
      Yv = pt();
    function $v(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Yv(e) && !Yv(t))
        ? e !== e && t !== t
        : $L(e, t, r, n, $v, i);
    }
    Qv.exports = $v;
  });
  var Jv = c((PB, Zv) => {
    var QL = Jo(),
      ZL = va(),
      JL = 1,
      eN = 2;
    function tN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          d = e[u],
          h = s[1];
        if (a && s[2]) {
          if (d === void 0 && !(u in e)) return !1;
        } else {
          var l = new QL();
          if (n) var E = n(d, h, u, e, t, l);
          if (!(E === void 0 ? ZL(h, d, JL | eN, n, l) : E)) return !1;
        }
      }
      return !0;
    }
    Zv.exports = tN;
  });
  var ga = c((MB, eg) => {
    var rN = ut();
    function nN(e) {
      return e === e && !rN(e);
    }
    eg.exports = nN;
  });
  var rg = c((qB, tg) => {
    var iN = ga(),
      oN = Vr();
    function aN(e) {
      for (var t = oN(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, iN(i)];
      }
      return t;
    }
    tg.exports = aN;
  });
  var ha = c((DB, ng) => {
    function sN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    ng.exports = sN;
  });
  var og = c((FB, ig) => {
    var uN = Jv(),
      cN = rg(),
      lN = ha();
    function fN(e) {
      var t = cN(e);
      return t.length == 1 && t[0][2]
        ? lN(t[0][0], t[0][1])
        : function (r) {
            return r === e || uN(r, e, t);
          };
    }
    ig.exports = fN;
  });
  var kr = c((GB, ag) => {
    var dN = It(),
      pN = pt(),
      vN = "[object Symbol]";
    function gN(e) {
      return typeof e == "symbol" || (pN(e) && dN(e) == vN);
    }
    ag.exports = gN;
  });
  var Bn = c((UB, sg) => {
    var hN = xe(),
      mN = kr(),
      yN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      EN = /^\w*$/;
    function bN(e, t) {
      if (hN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        mN(e)
        ? !0
        : EN.test(e) || !yN.test(e) || (t != null && e in Object(t));
    }
    sg.exports = bN;
  });
  var lg = c((VB, cg) => {
    var ug = Mn(),
      _N = "Expected a function";
    function ma(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(_N);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ma.Cache || ug)()), r;
    }
    ma.Cache = ug;
    cg.exports = ma;
  });
  var dg = c((kB, fg) => {
    var IN = lg(),
      TN = 500;
    function wN(e) {
      var t = IN(e, function (n) {
          return r.size === TN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    fg.exports = wN;
  });
  var vg = c((HB, pg) => {
    var xN = dg(),
      ON =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      AN = /\\(\\)?/g,
      SN = xN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(ON, function (r, n, i, o) {
            t.push(i ? o.replace(AN, "$1") : n || r);
          }),
          t
        );
      });
    pg.exports = SN;
  });
  var ya = c((WB, gg) => {
    function CN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    gg.exports = CN;
  });
  var _g = c((XB, bg) => {
    var hg = jt(),
      RN = ya(),
      LN = xe(),
      NN = kr(),
      PN = 1 / 0,
      mg = hg ? hg.prototype : void 0,
      yg = mg ? mg.toString : void 0;
    function Eg(e) {
      if (typeof e == "string") return e;
      if (LN(e)) return RN(e, Eg) + "";
      if (NN(e)) return yg ? yg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -PN ? "-0" : t;
    }
    bg.exports = Eg;
  });
  var Tg = c((BB, Ig) => {
    var MN = _g();
    function qN(e) {
      return e == null ? "" : MN(e);
    }
    Ig.exports = qN;
  });
  var Hr = c((jB, wg) => {
    var DN = xe(),
      FN = Bn(),
      GN = vg(),
      UN = Tg();
    function VN(e, t) {
      return DN(e) ? e : FN(e, t) ? [e] : GN(UN(e));
    }
    wg.exports = VN;
  });
  var nr = c((zB, xg) => {
    var kN = kr(),
      HN = 1 / 0;
    function WN(e) {
      if (typeof e == "string" || kN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -HN ? "-0" : t;
    }
    xg.exports = WN;
  });
  var jn = c((KB, Og) => {
    var XN = Hr(),
      BN = nr();
    function jN(e, t) {
      t = XN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[BN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Og.exports = jN;
  });
  var zn = c((YB, Ag) => {
    var zN = jn();
    function KN(e, t, r) {
      var n = e == null ? void 0 : zN(e, t);
      return n === void 0 ? r : n;
    }
    Ag.exports = KN;
  });
  var Cg = c(($B, Sg) => {
    function YN(e, t) {
      return e != null && t in Object(e);
    }
    Sg.exports = YN;
  });
  var Lg = c((QB, Rg) => {
    var $N = Hr(),
      QN = Dr(),
      ZN = xe(),
      JN = Gn(),
      eP = Un(),
      tP = nr();
    function rP(e, t, r) {
      t = $N(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = tP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && eP(i) && JN(a, i) && (ZN(e) || QN(e)));
    }
    Rg.exports = rP;
  });
  var Pg = c((ZB, Ng) => {
    var nP = Cg(),
      iP = Lg();
    function oP(e, t) {
      return e != null && iP(e, t, nP);
    }
    Ng.exports = oP;
  });
  var qg = c((JB, Mg) => {
    var aP = va(),
      sP = zn(),
      uP = Pg(),
      cP = Bn(),
      lP = ga(),
      fP = ha(),
      dP = nr(),
      pP = 1,
      vP = 2;
    function gP(e, t) {
      return cP(e) && lP(t)
        ? fP(dP(e), t)
        : function (r) {
            var n = sP(r, e);
            return n === void 0 && n === t ? uP(r, e) : aP(t, n, pP | vP);
          };
    }
    Mg.exports = gP;
  });
  var Kn = c((e5, Dg) => {
    function hP(e) {
      return e;
    }
    Dg.exports = hP;
  });
  var Ea = c((t5, Fg) => {
    function mP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Fg.exports = mP;
  });
  var Ug = c((r5, Gg) => {
    var yP = jn();
    function EP(e) {
      return function (t) {
        return yP(t, e);
      };
    }
    Gg.exports = EP;
  });
  var kg = c((n5, Vg) => {
    var bP = Ea(),
      _P = Ug(),
      IP = Bn(),
      TP = nr();
    function wP(e) {
      return IP(e) ? bP(TP(e)) : _P(e);
    }
    Vg.exports = wP;
  });
  var wt = c((i5, Hg) => {
    var xP = og(),
      OP = qg(),
      AP = Kn(),
      SP = xe(),
      CP = kg();
    function RP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? AP
        : typeof e == "object"
        ? SP(e)
          ? OP(e[0], e[1])
          : xP(e)
        : CP(e);
    }
    Hg.exports = RP;
  });
  var ba = c((o5, Wg) => {
    var LP = wt(),
      NP = Pt(),
      PP = Vr();
    function MP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!NP(t)) {
          var o = LP(r, 3);
          (t = PP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Wg.exports = MP;
  });
  var _a = c((a5, Xg) => {
    function qP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Xg.exports = qP;
  });
  var jg = c((s5, Bg) => {
    var DP = /\s/;
    function FP(e) {
      for (var t = e.length; t-- && DP.test(e.charAt(t)); );
      return t;
    }
    Bg.exports = FP;
  });
  var Kg = c((u5, zg) => {
    var GP = jg(),
      UP = /^\s+/;
    function VP(e) {
      return e && e.slice(0, GP(e) + 1).replace(UP, "");
    }
    zg.exports = VP;
  });
  var Yn = c((c5, Qg) => {
    var kP = Kg(),
      Yg = ut(),
      HP = kr(),
      $g = 0 / 0,
      WP = /^[-+]0x[0-9a-f]+$/i,
      XP = /^0b[01]+$/i,
      BP = /^0o[0-7]+$/i,
      jP = parseInt;
    function zP(e) {
      if (typeof e == "number") return e;
      if (HP(e)) return $g;
      if (Yg(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Yg(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = kP(e);
      var r = XP.test(e);
      return r || BP.test(e) ? jP(e.slice(2), r ? 2 : 8) : WP.test(e) ? $g : +e;
    }
    Qg.exports = zP;
  });
  var eh = c((l5, Jg) => {
    var KP = Yn(),
      Zg = 1 / 0,
      YP = 17976931348623157e292;
    function $P(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = KP(e)), e === Zg || e === -Zg)) {
        var t = e < 0 ? -1 : 1;
        return t * YP;
      }
      return e === e ? e : 0;
    }
    Jg.exports = $P;
  });
  var Ia = c((f5, th) => {
    var QP = eh();
    function ZP(e) {
      var t = QP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    th.exports = ZP;
  });
  var nh = c((d5, rh) => {
    var JP = _a(),
      eM = wt(),
      tM = Ia(),
      rM = Math.max;
    function nM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : tM(r);
      return i < 0 && (i = rM(n + i, 0)), JP(e, eM(t, 3), i);
    }
    rh.exports = nM;
  });
  var Ta = c((p5, ih) => {
    var iM = ba(),
      oM = nh(),
      aM = iM(oM);
    ih.exports = aM;
  });
  var sh = {};
  Ge(sh, {
    ELEMENT_MATCHES: () => sM,
    FLEX_PREFIXED: () => wa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => xt,
    TRANSFORM_STYLE_PREFIXED: () => Qn,
    withBrowser: () => $n,
  });
  var ah,
    Je,
    $n,
    sM,
    wa,
    xt,
    oh,
    Qn,
    Zn = me(() => {
      "use strict";
      (ah = fe(Ta())),
        (Je = typeof window < "u"),
        ($n = (e, t) => (Je ? e() : t)),
        (sM = $n(() =>
          (0, ah.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (wa = $n(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (xt = $n(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (oh = xt.split("transform")[0]),
        (Qn = oh ? oh + "TransformStyle" : "transformStyle");
    });
  var xa = c((v5, dh) => {
    var uM = 4,
      cM = 0.001,
      lM = 1e-7,
      fM = 10,
      Wr = 11,
      Jn = 1 / (Wr - 1),
      dM = typeof Float32Array == "function";
    function uh(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ch(e, t) {
      return 3 * t - 6 * e;
    }
    function lh(e) {
      return 3 * e;
    }
    function ei(e, t, r) {
      return ((uh(t, r) * e + ch(t, r)) * e + lh(t)) * e;
    }
    function fh(e, t, r) {
      return 3 * uh(t, r) * e * e + 2 * ch(t, r) * e + lh(t);
    }
    function pM(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = ei(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > lM && ++s < fM);
      return a;
    }
    function vM(e, t, r, n) {
      for (var i = 0; i < uM; ++i) {
        var o = fh(t, r, n);
        if (o === 0) return t;
        var a = ei(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    dh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = dM ? new Float32Array(Wr) : new Array(Wr);
      if (t !== r || n !== i)
        for (var a = 0; a < Wr; ++a) o[a] = ei(a * Jn, t, n);
      function s(u) {
        for (var d = 0, h = 1, l = Wr - 1; h !== l && o[h] <= u; ++h) d += Jn;
        --h;
        var E = (u - o[h]) / (o[h + 1] - o[h]),
          v = d + E * Jn,
          g = fh(v, t, n);
        return g >= cM ? vM(u, v, t, n) : g === 0 ? v : pM(u, d, d + Jn, t, n);
      }
      return function (d) {
        return t === r && n === i
          ? d
          : d === 0
          ? 0
          : d === 1
          ? 1
          : ei(s(d), r, i);
      };
    };
  });
  var Br = {};
  Ge(Br, {
    bounce: () => $M,
    bouncePast: () => QM,
    ease: () => gM,
    easeIn: () => hM,
    easeInOut: () => yM,
    easeOut: () => mM,
    inBack: () => kM,
    inCirc: () => FM,
    inCubic: () => IM,
    inElastic: () => XM,
    inExpo: () => MM,
    inOutBack: () => WM,
    inOutCirc: () => UM,
    inOutCubic: () => wM,
    inOutElastic: () => jM,
    inOutExpo: () => DM,
    inOutQuad: () => _M,
    inOutQuart: () => AM,
    inOutQuint: () => RM,
    inOutSine: () => PM,
    inQuad: () => EM,
    inQuart: () => xM,
    inQuint: () => SM,
    inSine: () => LM,
    outBack: () => HM,
    outBounce: () => VM,
    outCirc: () => GM,
    outCubic: () => TM,
    outElastic: () => BM,
    outExpo: () => qM,
    outQuad: () => bM,
    outQuart: () => OM,
    outQuint: () => CM,
    outSine: () => NM,
    swingFrom: () => KM,
    swingFromTo: () => zM,
    swingTo: () => YM,
  });
  function EM(e) {
    return Math.pow(e, 2);
  }
  function bM(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function _M(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function IM(e) {
    return Math.pow(e, 3);
  }
  function TM(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function wM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function xM(e) {
    return Math.pow(e, 4);
  }
  function OM(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function AM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function SM(e) {
    return Math.pow(e, 5);
  }
  function CM(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function RM(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function LM(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function NM(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function PM(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function MM(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function qM(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function DM(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function FM(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function GM(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function UM(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function VM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function kM(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function HM(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function WM(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function XM(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function BM(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function jM(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function zM(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function KM(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function YM(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $M(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function QM(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Xr,
    vt,
    gM,
    hM,
    mM,
    yM,
    Oa = me(() => {
      "use strict";
      (Xr = fe(xa())),
        (vt = 1.70158),
        (gM = (0, Xr.default)(0.25, 0.1, 0.25, 1)),
        (hM = (0, Xr.default)(0.42, 0, 1, 1)),
        (mM = (0, Xr.default)(0, 0, 0.58, 1)),
        (yM = (0, Xr.default)(0.42, 0, 0.58, 1));
    });
  var vh = {};
  Ge(vh, {
    applyEasing: () => JM,
    createBezierEasing: () => ZM,
    optimizeFloat: () => jr,
  });
  function jr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function ZM(e) {
    return (0, ph.default)(...e);
  }
  function JM(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : jr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Br[e] ? Br[e](t) : t);
  }
  var ph,
    Aa = me(() => {
      "use strict";
      Oa();
      ph = fe(xa());
    });
  var mh = {};
  Ge(mh, {
    createElementState: () => hh,
    ixElements: () => pq,
    mergeActionState: () => Sa,
  });
  function hh(e, t, r, n, i) {
    let o =
      r === eq ? (0, ir.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, ir.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Sa(e, t, r, n, i) {
    let o = gq(i);
    return (0, ir.mergeIn)(e, [t, dq, r], n, o);
  }
  function gq(e) {
    let { config: t } = e;
    return vq.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var ir,
    h5,
    eq,
    m5,
    tq,
    rq,
    nq,
    iq,
    oq,
    aq,
    sq,
    uq,
    cq,
    lq,
    fq,
    gh,
    dq,
    pq,
    vq,
    yh = me(() => {
      "use strict";
      ir = fe(Yt());
      Ue();
      ({
        HTML_ELEMENT: h5,
        PLAIN_OBJECT: eq,
        ABSTRACT_NODE: m5,
        CONFIG_X_VALUE: tq,
        CONFIG_Y_VALUE: rq,
        CONFIG_Z_VALUE: nq,
        CONFIG_VALUE: iq,
        CONFIG_X_UNIT: oq,
        CONFIG_Y_UNIT: aq,
        CONFIG_Z_UNIT: sq,
        CONFIG_UNIT: uq,
      } = Ce),
        ({
          IX2_SESSION_STOPPED: cq,
          IX2_INSTANCE_ADDED: lq,
          IX2_ELEMENT_STATE_CHANGED: fq,
        } = Te),
        (gh = {}),
        (dq = "refState"),
        (pq = (e = gh, t = {}) => {
          switch (t.type) {
            case cq:
              return gh;
            case lq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, ir.getIn)(u, [r, n]) !== n && (u = hh(u, n, a, r, o)),
                Sa(u, r, s, i, o)
              );
            }
            case fq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Sa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      vq = [
        [tq, oq],
        [rq, aq],
        [nq, sq],
        [iq, uq],
      ];
    });
  var Eh = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.renderPlugin =
      Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    var hq = (e) => e.value;
    Oe.getPluginConfig = hq;
    var mq = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = mq;
    var yq = (e) => e || { value: 0 };
    Oe.getPluginOrigin = yq;
    var Eq = (e) => ({ value: e.value });
    Oe.getPluginDestination = Eq;
    var bq = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = bq;
    var _q = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = _q;
    var Iq = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = Iq;
  });
  var _h = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var Tq = (e) => document.querySelector(`[data-w-id="${e}"]`),
      wq = () => window.Webflow.require("spline"),
      xq = (e, t) => e.filter((r) => !t.includes(r)),
      Oq = (e, t) => e.value[t];
    Ae.getPluginConfig = Oq;
    var Aq = () => null;
    Ae.getPluginDuration = Aq;
    var bh = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      Sq = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = xq(n, o);
          return a.length ? a.reduce((u, d) => ((u[d] = bh[d]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = bh[a]), o), {});
      };
    Ae.getPluginOrigin = Sq;
    var Cq = (e) => e.value;
    Ae.getPluginDestination = Cq;
    var Rq = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? Tq(i) : null;
    };
    Ae.createPluginInstance = Rq;
    var Lq = (e, t, r) => {
      let n = wq(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: d } = t;
          d.positionX != null && (u.position.x = d.positionX),
            d.positionY != null && (u.position.y = d.positionY),
            d.positionZ != null && (u.position.z = d.positionZ),
            d.rotationX != null && (u.rotation.x = d.rotationX),
            d.rotationY != null && (u.rotation.y = d.rotationY),
            d.rotationZ != null && (u.rotation.z = d.rotationZ),
            d.scaleX != null && (u.scale.x = d.scaleX),
            d.scaleY != null && (u.scale.y = d.scaleY),
            d.scaleZ != null && (u.scale.z = d.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = Lq;
    var Nq = () => null;
    Ae.clearPlugin = Nq;
  });
  var Th = c((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
        void 0;
    we.normalizeColor = Ih;
    we.renderPlugin = void 0;
    function Ih(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let h = (1 - Math.abs(2 * d - 1)) * u,
          l = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = d - h / 2,
          v,
          g,
          _;
        s >= 0 && s < 60
          ? ((v = h), (g = l), (_ = 0))
          : s >= 60 && s < 120
          ? ((v = l), (g = h), (_ = 0))
          : s >= 120 && s < 180
          ? ((v = 0), (g = h), (_ = l))
          : s >= 180 && s < 240
          ? ((v = 0), (g = l), (_ = h))
          : s >= 240 && s < 300
          ? ((v = l), (g = 0), (_ = h))
          : ((v = h), (g = 0), (_ = l)),
          (t = Math.round((v + E) * 255)),
          (r = Math.round((g + E) * 255)),
          (n = Math.round((_ + E) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          d = parseFloat(a[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * d - 1)) * u,
          l = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          E = d - h / 2,
          v,
          g,
          _;
        s >= 0 && s < 60
          ? ((v = h), (g = l), (_ = 0))
          : s >= 60 && s < 120
          ? ((v = l), (g = h), (_ = 0))
          : s >= 120 && s < 180
          ? ((v = 0), (g = h), (_ = l))
          : s >= 180 && s < 240
          ? ((v = 0), (g = l), (_ = h))
          : s >= 240 && s < 300
          ? ((v = l), (g = 0), (_ = h))
          : ((v = h), (g = 0), (_ = l)),
          (t = Math.round((v + E) * 255)),
          (r = Math.round((g + E) * 255)),
          (n = Math.round((_ + E) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var Pq = (e, t) => e.value[t];
    we.getPluginConfig = Pq;
    var Mq = () => null;
    we.getPluginDuration = Mq;
    var qq = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return Ih(i);
    };
    we.getPluginOrigin = qq;
    var Dq = (e) => e.value;
    we.getPluginDestination = Dq;
    var Fq = () => null;
    we.createPluginInstance = Fq;
    var Gq = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: d, alpha: h } = o,
        l;
      a != null && (l = a + i),
        s != null &&
          d != null &&
          u != null &&
          h != null &&
          (l = `rgba(${s}, ${u}, ${d}, ${h})`),
        l != null && document.documentElement.style.setProperty(n, l);
    };
    we.renderPlugin = Gq;
    var Uq = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    we.clearPlugin = Uq;
  });
  var wh = c((ti) => {
    "use strict";
    var Ra = vn().default;
    Object.defineProperty(ti, "__esModule", { value: !0 });
    ti.pluginMethodMap = void 0;
    var Ca = (Ue(), nt(Rf)),
      Vq = Ra(Eh()),
      kq = Ra(_h()),
      Hq = Ra(Th()),
      _5 = (ti.pluginMethodMap = new Map([
        [Ca.ActionTypeConsts.PLUGIN_LOTTIE, { ...Vq }],
        [Ca.ActionTypeConsts.PLUGIN_SPLINE, { ...kq }],
        [Ca.ActionTypeConsts.PLUGIN_VARIABLE, { ...Hq }],
      ]));
  });
  var xh = {};
  Ge(xh, {
    clearPlugin: () => Da,
    createPluginInstance: () => Xq,
    getPluginConfig: () => Na,
    getPluginDestination: () => Ma,
    getPluginDuration: () => Wq,
    getPluginOrigin: () => Pa,
    isPluginType: () => qt,
    renderPlugin: () => qa,
  });
  function qt(e) {
    return La.pluginMethodMap.has(e);
  }
  var La,
    Dt,
    Na,
    Pa,
    Wq,
    Ma,
    Xq,
    qa,
    Da,
    Fa = me(() => {
      "use strict";
      Zn();
      La = fe(wh());
      (Dt = (e) => (t) => {
        if (!Je) return () => null;
        let r = La.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Na = Dt("getPluginConfig")),
        (Pa = Dt("getPluginOrigin")),
        (Wq = Dt("getPluginDuration")),
        (Ma = Dt("getPluginDestination")),
        (Xq = Dt("createPluginInstance")),
        (qa = Dt("renderPlugin")),
        (Da = Dt("clearPlugin"));
    });
  var Ah = c((w5, Oh) => {
    function Bq(e, t) {
      return e == null || e !== e ? t : e;
    }
    Oh.exports = Bq;
  });
  var Ch = c((x5, Sh) => {
    function jq(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Sh.exports = jq;
  });
  var Lh = c((O5, Rh) => {
    function zq(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Rh.exports = zq;
  });
  var Ph = c((A5, Nh) => {
    var Kq = Lh(),
      Yq = Kq();
    Nh.exports = Yq;
  });
  var Ga = c((S5, Mh) => {
    var $q = Ph(),
      Qq = Vr();
    function Zq(e, t) {
      return e && $q(e, t, Qq);
    }
    Mh.exports = Zq;
  });
  var Dh = c((C5, qh) => {
    var Jq = Pt();
    function e1(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!Jq(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    qh.exports = e1;
  });
  var Ua = c((R5, Fh) => {
    var t1 = Ga(),
      r1 = Dh(),
      n1 = r1(t1);
    Fh.exports = n1;
  });
  var Uh = c((L5, Gh) => {
    function i1(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Gh.exports = i1;
  });
  var kh = c((N5, Vh) => {
    var o1 = Ch(),
      a1 = Ua(),
      s1 = wt(),
      u1 = Uh(),
      c1 = xe();
    function l1(e, t, r) {
      var n = c1(e) ? o1 : u1,
        i = arguments.length < 3;
      return n(e, s1(t, 4), r, i, a1);
    }
    Vh.exports = l1;
  });
  var Wh = c((P5, Hh) => {
    var f1 = _a(),
      d1 = wt(),
      p1 = Ia(),
      v1 = Math.max,
      g1 = Math.min;
    function h1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = p1(r)), (i = r < 0 ? v1(n + i, 0) : g1(i, n - 1))),
        f1(e, d1(t, 3), i, !0)
      );
    }
    Hh.exports = h1;
  });
  var Bh = c((M5, Xh) => {
    var m1 = ba(),
      y1 = Wh(),
      E1 = m1(y1);
    Xh.exports = E1;
  });
  function jh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function _1(e, t) {
    if (jh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!b1.call(t, r[i]) || !jh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var b1,
    Va,
    zh = me(() => {
      "use strict";
      b1 = Object.prototype.hasOwnProperty;
      Va = _1;
    });
  var lm = {};
  Ge(lm, {
    cleanupHTMLElement: () => yD,
    clearAllStyles: () => mD,
    clearObjectCache: () => G1,
    getActionListProgress: () => bD,
    getAffectedElements: () => Ba,
    getComputedStyle: () => j1,
    getDestinationValues: () => J1,
    getElementId: () => H1,
    getInstanceId: () => V1,
    getInstanceOrigin: () => Y1,
    getItemConfigByKey: () => Z1,
    getMaxDurationItemIndex: () => cm,
    getNamespacedParameterId: () => TD,
    getRenderType: () => am,
    getStyleProp: () => eD,
    mediaQueriesEqual: () => xD,
    observeStore: () => B1,
    reduceListToGroup: () => _D,
    reifyState: () => W1,
    renderHTMLElement: () => tD,
    shallowEqual: () => Va,
    shouldAllowMediaQuery: () => wD,
    shouldNamespaceEventParameter: () => ID,
    stringifyTarget: () => OD,
  });
  function G1() {
    ri.clear();
  }
  function V1() {
    return "i" + U1++;
  }
  function H1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + k1++;
  }
  function W1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ai.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function B1({ store: e, select: t, onChange: r, comparator: n = X1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let d = t(i());
      if (d == null) {
        a();
        return;
      }
      n(d, s) || ((s = d), r(s, e));
    }
    return a;
  }
  function $h(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Ba({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (S, y) =>
          S.concat(
            Ba({
              config: { target: y },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: d,
        getSiblingElements: h,
        matchSelector: l,
        elementContains: E,
        isSiblingNode: v,
      } = i,
      { target: g } = e;
    if (!g) return [];
    let {
      id: _,
      objectId: A,
      selector: w,
      selectorGuids: N,
      appliesTo: R,
      useEventTarget: M,
    } = $h(g);
    if (A) return [ri.has(A) ? ri.get(A) : ri.set(A, {}).get(A)];
    if (R === Bo.PAGE) {
      let S = a(_);
      return S ? [S] : [];
    }
    let D = (t?.action?.config?.affectedElements ?? {})[_ || w] || {},
      j = !!(D.id || D.selector),
      z,
      $,
      te,
      X = t && s($h(t.target));
    if (
      (j
        ? ((z = D.limitAffectedElements), ($ = X), (te = s(D)))
        : ($ = te = s({ id: _, selector: w, selectorGuids: N })),
      t && M)
    ) {
      let S = r && (te || M === !0) ? [r] : u(X);
      if (te) {
        if (M === q1) return u(te).filter((y) => S.some((L) => E(y, L)));
        if (M === Kh) return u(te).filter((y) => S.some((L) => E(L, y)));
        if (M === Yh) return u(te).filter((y) => S.some((L) => v(L, y)));
      }
      return S;
    }
    return $ == null || te == null
      ? []
      : Je && n
      ? u(te).filter((S) => n.contains(S))
      : z === Kh
      ? u($, te)
      : z === M1
      ? d(u($)).filter(l(te))
      : z === Yh
      ? h(u($)).filter(l(te))
      : u(te);
  }
  function j1({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case cr:
      case lr:
      case fr:
      case dr:
      case ui:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function Y1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (qt(a)) return Pa(a)(t[a], n);
    switch (n.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r:
        return t[n.actionTypeId] || ja[n.actionTypeId];
      case Qr:
        return z1(t[n.actionTypeId], n.config.filters);
      case Zr:
        return K1(t[n.actionTypeId], n.config.fontVariations);
      case nm:
        return { value: (0, gt.default)(parseFloat(o(e, ii)), 1) };
      case cr: {
        let s = o(e, ct),
          u = o(e, lt),
          d,
          h;
        return (
          n.config.widthUnit === Ot
            ? (d = Qh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (d = (0, gt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === Ot
            ? (h = Qh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, gt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: d, heightValue: h }
        );
      }
      case lr:
      case fr:
      case dr:
        return vD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case ui:
        return { value: (0, gt.default)(o(e, oi), r.display) };
      case F1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function J1({ element: e, actionItem: t, elementApi: r }) {
    if (qt(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case ar:
      case sr:
      case ur:
      case $r: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case cr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: d } = t.config;
        if (!Je) return { widthValue: u, heightValue: d };
        if (a === Ot) {
          let h = n(e, ct);
          i(e, ct, ""), (u = o(e, "offsetWidth")), i(e, ct, h);
        }
        if (s === Ot) {
          let h = n(e, lt);
          i(e, lt, ""), (d = o(e, "offsetHeight")), i(e, lt, h);
        }
        return { widthValue: u, heightValue: d };
      }
      case lr:
      case fr:
      case dr: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Qr:
        return t.config.filters.reduce($1, {});
      case Zr:
        return t.config.fontVariations.reduce(Q1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function am(e) {
    if (/^TRANSFORM_/.test(e)) return tm;
    if (/^STYLE_/.test(e)) return Wa;
    if (/^GENERAL_/.test(e)) return Ha;
    if (/^PLUGIN_/.test(e)) return rm;
  }
  function eD(e, t) {
    return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function tD(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case tm:
        return aD(e, t, r, i, a);
      case Wa:
        return gD(e, t, r, i, o, a);
      case Ha:
        return hD(e, i, a);
      case rm: {
        let { actionTypeId: d } = i;
        if (qt(d)) return qa(d)(u, t, i);
      }
    }
  }
  function aD(e, t, r, n, i) {
    let o = oD
        .map((s) => {
          let u = ja[s],
            {
              xValue: d = u.xValue,
              yValue: h = u.yValue,
              zValue: l = u.zValue,
              xUnit: E = "",
              yUnit: v = "",
              zUnit: g = "",
            } = t[s] || {};
          switch (s) {
            case ar:
              return `${w1}(${d}${E}, ${h}${v}, ${l}${g})`;
            case sr:
              return `${x1}(${d}${E}, ${h}${v}, ${l}${g})`;
            case ur:
              return `${O1}(${d}${E}) ${A1}(${h}${v}) ${S1}(${l}${g})`;
            case $r:
              return `${C1}(${d}${E}, ${h}${v})`;
            default:
              return "";
          }
        })
        .join(" "),
      { setStyle: a } = i;
    Ft(e, xt, i), a(e, xt, o), cD(n, r) && a(e, Qn, R1);
  }
  function sD(e, t, r, n) {
    let i = (0, ai.default)(t, (a, s, u) => `${a} ${u}(${s}${iD(u, r)})`, ""),
      { setStyle: o } = n;
    Ft(e, zr, n), o(e, zr, i);
  }
  function uD(e, t, r, n) {
    let i = (0, ai.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ft(e, Kr, n), o(e, Kr, i);
  }
  function cD({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === ar && n !== void 0) ||
      (e === sr && n !== void 0) ||
      (e === ur && (t !== void 0 || r !== void 0))
    );
  }
  function pD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function vD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Xa[t],
      o = n(e, i),
      a = fD.test(o) ? o : r[i],
      s = pD(dD, a).split(Yr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1),
    };
  }
  function gD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case cr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: d, heightValue: h } = r;
        d !== void 0 && (s === Ot && (s = "px"), Ft(e, ct, o), a(e, ct, d + s)),
          h !== void 0 &&
            (u === Ot && (u = "px"), Ft(e, lt, o), a(e, lt, h + u));
        break;
      }
      case Qr: {
        sD(e, r, n.config, o);
        break;
      }
      case Zr: {
        uD(e, r, n.config, o);
        break;
      }
      case lr:
      case fr:
      case dr: {
        let s = Xa[n.actionTypeId],
          u = Math.round(r.rValue),
          d = Math.round(r.gValue),
          h = Math.round(r.bValue),
          l = r.aValue;
        Ft(e, s, o),
          a(e, s, l >= 1 ? `rgb(${u},${d},${h})` : `rgba(${u},${d},${h},${l})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Ft(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function hD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case ui: {
        let { value: i } = t.config;
        i === L1 && Je ? n(e, oi, wa) : n(e, oi, i);
        return;
      }
    }
  }
  function Ft(e, t, r) {
    if (!Je) return;
    let n = om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    if (!a) {
      o(e, or, n);
      return;
    }
    let s = a.split(Yr).map(im);
    s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr));
  }
  function sm(e, t, r) {
    if (!Je) return;
    let n = om[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, or);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        or,
        a
          .split(Yr)
          .map(im)
          .filter((s) => s !== n)
          .join(Yr)
      );
  }
  function mD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        d = i[u];
      d && Zh({ actionList: d, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Zh({ actionList: i[o], elementApi: t });
      });
  }
  function Zh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        Jh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            Jh({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function Jh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      qt(o)
        ? (s = (u) => Da(o)(u, i))
        : (s = um({ effect: ED, actionTypeId: o, elementApi: r })),
        Ba({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function yD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === cr) {
      let { config: a } = t;
      a.widthUnit === Ot && n(e, ct, ""), a.heightUnit === Ot && n(e, lt, "");
    }
    i(e, or) && um({ effect: sm, actionTypeId: o, elementApi: r })(e);
  }
  function ED(e, t, r) {
    let { setStyle: n } = r;
    sm(e, t, r), n(e, t, ""), t === xt && n(e, Qn, "");
  }
  function cm(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function bD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, d) => {
        if (n && d === 0) return;
        let { actionItems: h } = u,
          l = h[cm(h)],
          { config: E, actionTypeId: v } = l;
        i.id === l.id && (s = a + o);
        let g = am(v) === Ha ? 0 : E.duration;
        a += E.delay + g;
      }),
      a > 0 ? jr(s / a) : 0
    );
  }
  function _D({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, si.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: d }) => d.some(a));
        }),
      (0, si.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function ID(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === st.ELEMENT)
    );
  }
  function TD(e, t) {
    return e + D1 + t;
  }
  function wD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function xD(e, t) {
    return Va(e && e.sort(), t && t.sort());
  }
  function OD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + ka + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + ka + r + ka + n;
  }
  var gt,
    ai,
    ni,
    si,
    I1,
    T1,
    w1,
    x1,
    O1,
    A1,
    S1,
    C1,
    R1,
    L1,
    ii,
    zr,
    Kr,
    ct,
    lt,
    em,
    N1,
    P1,
    Kh,
    M1,
    Yh,
    q1,
    oi,
    or,
    Ot,
    Yr,
    D1,
    ka,
    tm,
    Ha,
    Wa,
    rm,
    ar,
    sr,
    ur,
    $r,
    nm,
    Qr,
    Zr,
    cr,
    lr,
    fr,
    dr,
    ui,
    F1,
    im,
    Xa,
    om,
    ri,
    U1,
    k1,
    X1,
    Qh,
    z1,
    K1,
    $1,
    Q1,
    Z1,
    ja,
    rD,
    nD,
    iD,
    oD,
    lD,
    fD,
    dD,
    um,
    fm = me(() => {
      "use strict";
      (gt = fe(Ah())), (ai = fe(kh())), (ni = fe(Bh())), (si = fe(Yt()));
      Ue();
      zh();
      Aa();
      Fa();
      Zn();
      ({
        BACKGROUND: I1,
        TRANSFORM: T1,
        TRANSLATE_3D: w1,
        SCALE_3D: x1,
        ROTATE_X: O1,
        ROTATE_Y: A1,
        ROTATE_Z: S1,
        SKEW: C1,
        PRESERVE_3D: R1,
        FLEX: L1,
        OPACITY: ii,
        FILTER: zr,
        FONT_VARIATION_SETTINGS: Kr,
        WIDTH: ct,
        HEIGHT: lt,
        BACKGROUND_COLOR: em,
        BORDER_COLOR: N1,
        COLOR: P1,
        CHILDREN: Kh,
        IMMEDIATE_CHILDREN: M1,
        SIBLINGS: Yh,
        PARENT: q1,
        DISPLAY: oi,
        WILL_CHANGE: or,
        AUTO: Ot,
        COMMA_DELIMITER: Yr,
        COLON_DELIMITER: D1,
        BAR_DELIMITER: ka,
        RENDER_TRANSFORM: tm,
        RENDER_GENERAL: Ha,
        RENDER_STYLE: Wa,
        RENDER_PLUGIN: rm,
      } = Ce),
        ({
          TRANSFORM_MOVE: ar,
          TRANSFORM_SCALE: sr,
          TRANSFORM_ROTATE: ur,
          TRANSFORM_SKEW: $r,
          STYLE_OPACITY: nm,
          STYLE_FILTER: Qr,
          STYLE_FONT_VARIATION: Zr,
          STYLE_SIZE: cr,
          STYLE_BACKGROUND_COLOR: lr,
          STYLE_BORDER: fr,
          STYLE_TEXT_COLOR: dr,
          GENERAL_DISPLAY: ui,
          OBJECT_VALUE: F1,
        } = We),
        (im = (e) => e.trim()),
        (Xa = Object.freeze({ [lr]: em, [fr]: N1, [dr]: P1 })),
        (om = Object.freeze({
          [xt]: T1,
          [em]: I1,
          [ii]: ii,
          [zr]: zr,
          [ct]: ct,
          [lt]: lt,
          [Kr]: Kr,
        })),
        (ri = new Map());
      U1 = 1;
      k1 = 1;
      X1 = (e, t) => e === t;
      (Qh = /px/),
        (z1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = rD[n.type]), r),
            e || {}
          )),
        (K1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = nD[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      ($1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (Q1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (Z1 = (e, t, r) => {
          if (qt(e)) return Na(e)(r, t);
          switch (e) {
            case Qr: {
              let n = (0, ni.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case Zr: {
              let n = (0, ni.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (ja = {
        [ar]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [sr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [ur]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [$r]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (rD = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (nD = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (iD = (e, t) => {
          let r = (0, ni.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (oD = Object.keys(ja));
      (lD = "\\(([^)]+)\\)"), (fD = /^rgb/), (dD = RegExp(`rgba?${lD}`));
      um =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case ar:
            case sr:
            case ur:
            case $r:
              e(n, xt, r);
              break;
            case Qr:
              e(n, zr, r);
              break;
            case Zr:
              e(n, Kr, r);
              break;
            case nm:
              e(n, ii, r);
              break;
            case cr:
              e(n, ct, r), e(n, lt, r);
              break;
            case lr:
            case fr:
            case dr:
              e(n, Xa[t], r);
              break;
            case ui:
              e(n, oi, r);
              break;
          }
        };
    });
  var Gt = c((Me) => {
    "use strict";
    var pr = vn().default;
    Object.defineProperty(Me, "__esModule", { value: !0 });
    Me.IX2VanillaUtils =
      Me.IX2VanillaPlugins =
      Me.IX2ElementsReducer =
      Me.IX2Easings =
      Me.IX2EasingUtils =
      Me.IX2BrowserSupport =
        void 0;
    var AD = pr((Zn(), nt(sh)));
    Me.IX2BrowserSupport = AD;
    var SD = pr((Oa(), nt(Br)));
    Me.IX2Easings = SD;
    var CD = pr((Aa(), nt(vh)));
    Me.IX2EasingUtils = CD;
    var RD = pr((yh(), nt(mh)));
    Me.IX2ElementsReducer = RD;
    var LD = pr((Fa(), nt(xh)));
    Me.IX2VanillaPlugins = LD;
    var ND = pr((fm(), nt(lm)));
    Me.IX2VanillaUtils = ND;
  });
  var li,
    ht,
    PD,
    MD,
    qD,
    DD,
    FD,
    GD,
    ci,
    dm,
    UD,
    VD,
    za,
    kD,
    HD,
    WD,
    XD,
    pm,
    vm = me(() => {
      "use strict";
      Ue();
      (li = fe(Gt())),
        (ht = fe(Yt())),
        ({
          IX2_RAW_DATA_IMPORTED: PD,
          IX2_SESSION_STOPPED: MD,
          IX2_INSTANCE_ADDED: qD,
          IX2_INSTANCE_STARTED: DD,
          IX2_INSTANCE_REMOVED: FD,
          IX2_ANIMATION_FRAME_CHANGED: GD,
        } = Te),
        ({
          optimizeFloat: ci,
          applyEasing: dm,
          createBezierEasing: UD,
        } = li.IX2EasingUtils),
        ({ RENDER_GENERAL: VD } = Ce),
        ({
          getItemConfigByKey: za,
          getRenderType: kD,
          getStyleProp: HD,
        } = li.IX2VanillaUtils),
        (WD = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: d,
              skipMotion: h,
              skipToValue: l,
            } = e,
            { parameters: E } = t.payload,
            v = Math.max(1 - a, 0.01),
            g = E[n];
          g == null && ((v = 1), (g = s));
          let _ = Math.max(g, 0) || 0,
            A = ci(_ - r),
            w = h ? l : ci(r + A * v),
            N = w * 100;
          if (w === r && e.current) return e;
          let R, M, F, D;
          for (let z = 0, { length: $ } = i; z < $; z++) {
            let { keyframe: te, actionItems: X } = i[z];
            if ((z === 0 && (R = X[0]), N >= te)) {
              R = X[0];
              let S = i[z + 1],
                y = S && N !== te;
              (M = y ? S.actionItems[0] : null),
                y && ((F = te / 100), (D = (S.keyframe - te) / 100));
            }
          }
          let j = {};
          if (R && !M)
            for (let z = 0, { length: $ } = o; z < $; z++) {
              let te = o[z];
              j[te] = za(u, te, R.config);
            }
          else if (R && M && F !== void 0 && D !== void 0) {
            let z = (w - F) / D,
              $ = R.config.easing,
              te = dm($, z, d);
            for (let X = 0, { length: S } = o; X < S; X++) {
              let y = o[X],
                L = za(u, y, R.config),
                J = (za(u, y, M.config) - L) * te + L;
              j[y] = J;
            }
          }
          return (0, ht.merge)(e, { position: w, current: j });
        }),
        (XD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: d,
              destinationKeys: h,
              pluginDuration: l,
              instanceDelay: E,
              customEasingFn: v,
              skipMotion: g,
            } = e,
            _ = u.config.easing,
            { duration: A, delay: w } = u.config;
          l != null && (A = l),
            (w = E ?? w),
            a === VD ? (A = 0) : (o || g) && (A = w = 0);
          let { now: N } = t.payload;
          if (r && n) {
            let R = N - (i + w);
            if (s) {
              let z = N - i,
                $ = A + w,
                te = ci(Math.min(Math.max(0, z / $), 1));
              e = (0, ht.set)(e, "verboseTimeElapsed", $ * te);
            }
            if (R < 0) return e;
            let M = ci(Math.min(Math.max(0, R / A), 1)),
              F = dm(_, M, v),
              D = {},
              j = null;
            return (
              h.length &&
                (j = h.reduce((z, $) => {
                  let te = d[$],
                    X = parseFloat(n[$]) || 0,
                    y = (parseFloat(te) - X) * F + X;
                  return (z[$] = y), z;
                }, {})),
              (D.current = j),
              (D.position = M),
              M === 1 && ((D.active = !1), (D.complete = !0)),
              (0, ht.merge)(e, D)
            );
          }
          return e;
        }),
        (pm = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case PD:
              return t.payload.ixInstances || Object.freeze({});
            case MD:
              return Object.freeze({});
            case qD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: d,
                  isCarrier: h,
                  origin: l,
                  destination: E,
                  immediate: v,
                  verbose: g,
                  continuous: _,
                  parameterId: A,
                  actionGroups: w,
                  smoothing: N,
                  restingValue: R,
                  pluginInstance: M,
                  pluginDuration: F,
                  instanceDelay: D,
                  skipMotion: j,
                  skipToValue: z,
                } = t.payload,
                { actionTypeId: $ } = i,
                te = kD($),
                X = HD(te, $),
                S = Object.keys(E).filter(
                  (L) => E[L] != null && typeof E[L] != "string"
                ),
                { easing: y } = i.config;
              return (0, ht.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: l,
                destination: E,
                destinationKeys: S,
                immediate: v,
                verbose: g,
                current: null,
                actionItem: i,
                actionTypeId: $,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: d,
                renderType: te,
                isCarrier: h,
                styleProp: X,
                continuous: _,
                parameterId: A,
                actionGroups: w,
                smoothing: N,
                restingValue: R,
                pluginInstance: M,
                pluginDuration: F,
                instanceDelay: D,
                skipMotion: j,
                skipToValue: z,
                customEasingFn:
                  Array.isArray(y) && y.length === 4 ? UD(y) : void 0,
              });
            }
            case DD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ht.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case FD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case GD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? WD : XD;
                r = (0, ht.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var BD,
    jD,
    zD,
    gm,
    hm = me(() => {
      "use strict";
      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: BD,
        IX2_SESSION_STOPPED: jD,
        IX2_PARAMETER_CHANGED: zD,
      } = Te),
        (gm = (e = {}, t) => {
          switch (t.type) {
            case BD:
              return t.payload.ixParameters || {};
            case jD:
              return {};
            case zD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var Em = {};
  Ge(Em, { default: () => YD });
  var mm,
    ym,
    KD,
    YD,
    bm = me(() => {
      "use strict";
      mm = fe(Xo());
      Nf();
      Jf();
      rd();
      ym = fe(Gt());
      vm();
      hm();
      ({ ixElements: KD } = ym.IX2ElementsReducer),
        (YD = (0, mm.combineReducers)({
          ixData: Lf,
          ixRequest: Zf,
          ixSession: td,
          ixElements: KD,
          ixInstances: pm,
          ixParameters: gm,
        }));
    });
  var Im = c((Q5, _m) => {
    var $D = It(),
      QD = xe(),
      ZD = pt(),
      JD = "[object String]";
    function eF(e) {
      return typeof e == "string" || (!QD(e) && ZD(e) && $D(e) == JD);
    }
    _m.exports = eF;
  });
  var wm = c((Z5, Tm) => {
    var tF = Ea(),
      rF = tF("length");
    Tm.exports = rF;
  });
  var Om = c((J5, xm) => {
    var nF = "\\ud800-\\udfff",
      iF = "\\u0300-\\u036f",
      oF = "\\ufe20-\\ufe2f",
      aF = "\\u20d0-\\u20ff",
      sF = iF + oF + aF,
      uF = "\\ufe0e\\ufe0f",
      cF = "\\u200d",
      lF = RegExp("[" + cF + nF + sF + uF + "]");
    function fF(e) {
      return lF.test(e);
    }
    xm.exports = fF;
  });
  var qm = c((ej, Mm) => {
    var Sm = "\\ud800-\\udfff",
      dF = "\\u0300-\\u036f",
      pF = "\\ufe20-\\ufe2f",
      vF = "\\u20d0-\\u20ff",
      gF = dF + pF + vF,
      hF = "\\ufe0e\\ufe0f",
      mF = "[" + Sm + "]",
      Ka = "[" + gF + "]",
      Ya = "\\ud83c[\\udffb-\\udfff]",
      yF = "(?:" + Ka + "|" + Ya + ")",
      Cm = "[^" + Sm + "]",
      Rm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Lm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      EF = "\\u200d",
      Nm = yF + "?",
      Pm = "[" + hF + "]?",
      bF = "(?:" + EF + "(?:" + [Cm, Rm, Lm].join("|") + ")" + Pm + Nm + ")*",
      _F = Pm + Nm + bF,
      IF = "(?:" + [Cm + Ka + "?", Ka, Rm, Lm, mF].join("|") + ")",
      Am = RegExp(Ya + "(?=" + Ya + ")|" + IF + _F, "g");
    function TF(e) {
      for (var t = (Am.lastIndex = 0); Am.test(e); ) ++t;
      return t;
    }
    Mm.exports = TF;
  });
  var Fm = c((tj, Dm) => {
    var wF = wm(),
      xF = Om(),
      OF = qm();
    function AF(e) {
      return xF(e) ? OF(e) : wF(e);
    }
    Dm.exports = AF;
  });
  var Um = c((rj, Gm) => {
    var SF = Hn(),
      CF = Wn(),
      RF = Pt(),
      LF = Im(),
      NF = Fm(),
      PF = "[object Map]",
      MF = "[object Set]";
    function qF(e) {
      if (e == null) return 0;
      if (RF(e)) return LF(e) ? NF(e) : e.length;
      var t = CF(e);
      return t == PF || t == MF ? e.size : SF(e).length;
    }
    Gm.exports = qF;
  });
  var km = c((nj, Vm) => {
    var DF = "Expected a function";
    function FF(e) {
      if (typeof e != "function") throw new TypeError(DF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Vm.exports = FF;
  });
  var $a = c((ij, Hm) => {
    var GF = Tt(),
      UF = (function () {
        try {
          var e = GF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Hm.exports = UF;
  });
  var Qa = c((oj, Xm) => {
    var Wm = $a();
    function VF(e, t, r) {
      t == "__proto__" && Wm
        ? Wm(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Xm.exports = VF;
  });
  var jm = c((aj, Bm) => {
    var kF = Qa(),
      HF = Nn(),
      WF = Object.prototype,
      XF = WF.hasOwnProperty;
    function BF(e, t, r) {
      var n = e[t];
      (!(XF.call(e, t) && HF(n, r)) || (r === void 0 && !(t in e))) &&
        kF(e, t, r);
    }
    Bm.exports = BF;
  });
  var Ym = c((sj, Km) => {
    var jF = jm(),
      zF = Hr(),
      KF = Gn(),
      zm = ut(),
      YF = nr();
    function $F(e, t, r, n) {
      if (!zm(e)) return e;
      t = zF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = YF(t[i]),
          d = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var h = s[u];
          (d = n ? n(h, u, s) : void 0),
            d === void 0 && (d = zm(h) ? h : KF(t[i + 1]) ? [] : {});
        }
        jF(s, u, d), (s = s[u]);
      }
      return e;
    }
    Km.exports = $F;
  });
  var Qm = c((uj, $m) => {
    var QF = jn(),
      ZF = Ym(),
      JF = Hr();
    function e2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = QF(e, a);
        r(s, a) && ZF(o, JF(a, e), s);
      }
      return o;
    }
    $m.exports = e2;
  });
  var Jm = c((cj, Zm) => {
    var t2 = Dn(),
      r2 = Lo(),
      n2 = ia(),
      i2 = na(),
      o2 = Object.getOwnPropertySymbols,
      a2 = o2
        ? function (e) {
            for (var t = []; e; ) t2(t, n2(e)), (e = r2(e));
            return t;
          }
        : i2;
    Zm.exports = a2;
  });
  var ty = c((lj, ey) => {
    function s2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    ey.exports = s2;
  });
  var ny = c((fj, ry) => {
    var u2 = ut(),
      c2 = kn(),
      l2 = ty(),
      f2 = Object.prototype,
      d2 = f2.hasOwnProperty;
    function p2(e) {
      if (!u2(e)) return l2(e);
      var t = c2(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !d2.call(e, n))) || r.push(n);
      return r;
    }
    ry.exports = p2;
  });
  var oy = c((dj, iy) => {
    var v2 = aa(),
      g2 = ny(),
      h2 = Pt();
    function m2(e) {
      return h2(e) ? v2(e, !0) : g2(e);
    }
    iy.exports = m2;
  });
  var sy = c((pj, ay) => {
    var y2 = ra(),
      E2 = Jm(),
      b2 = oy();
    function _2(e) {
      return y2(e, b2, E2);
    }
    ay.exports = _2;
  });
  var cy = c((vj, uy) => {
    var I2 = ya(),
      T2 = wt(),
      w2 = Qm(),
      x2 = sy();
    function O2(e, t) {
      if (e == null) return {};
      var r = I2(x2(e), function (n) {
        return [n];
      });
      return (
        (t = T2(t)),
        w2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    uy.exports = O2;
  });
  var fy = c((gj, ly) => {
    var A2 = wt(),
      S2 = km(),
      C2 = cy();
    function R2(e, t) {
      return C2(e, S2(A2(t)));
    }
    ly.exports = R2;
  });
  var py = c((hj, dy) => {
    var L2 = Hn(),
      N2 = Wn(),
      P2 = Dr(),
      M2 = xe(),
      q2 = Pt(),
      D2 = Fn(),
      F2 = kn(),
      G2 = Vn(),
      U2 = "[object Map]",
      V2 = "[object Set]",
      k2 = Object.prototype,
      H2 = k2.hasOwnProperty;
    function W2(e) {
      if (e == null) return !0;
      if (
        q2(e) &&
        (M2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          D2(e) ||
          G2(e) ||
          P2(e))
      )
        return !e.length;
      var t = N2(e);
      if (t == U2 || t == V2) return !e.size;
      if (F2(e)) return !L2(e).length;
      for (var r in e) if (H2.call(e, r)) return !1;
      return !0;
    }
    dy.exports = W2;
  });
  var gy = c((mj, vy) => {
    var X2 = Qa(),
      B2 = Ga(),
      j2 = wt();
    function z2(e, t) {
      var r = {};
      return (
        (t = j2(t, 3)),
        B2(e, function (n, i, o) {
          X2(r, i, t(n, i, o));
        }),
        r
      );
    }
    vy.exports = z2;
  });
  var my = c((yj, hy) => {
    function K2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    hy.exports = K2;
  });
  var Ey = c((Ej, yy) => {
    var Y2 = Kn();
    function $2(e) {
      return typeof e == "function" ? e : Y2;
    }
    yy.exports = $2;
  });
  var _y = c((bj, by) => {
    var Q2 = my(),
      Z2 = Ua(),
      J2 = Ey(),
      eG = xe();
    function tG(e, t) {
      var r = eG(e) ? Q2 : Z2;
      return r(e, J2(t));
    }
    by.exports = tG;
  });
  var Ty = c((_j, Iy) => {
    var rG = Qe(),
      nG = function () {
        return rG.Date.now();
      };
    Iy.exports = nG;
  });
  var Oy = c((Ij, xy) => {
    var iG = ut(),
      Za = Ty(),
      wy = Yn(),
      oG = "Expected a function",
      aG = Math.max,
      sG = Math.min;
    function uG(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        d = 0,
        h = !1,
        l = !1,
        E = !0;
      if (typeof e != "function") throw new TypeError(oG);
      (t = wy(t) || 0),
        iG(r) &&
          ((h = !!r.leading),
          (l = "maxWait" in r),
          (o = l ? aG(wy(r.maxWait) || 0, t) : o),
          (E = "trailing" in r ? !!r.trailing : E));
      function v(D) {
        var j = n,
          z = i;
        return (n = i = void 0), (d = D), (a = e.apply(z, j)), a;
      }
      function g(D) {
        return (d = D), (s = setTimeout(w, t)), h ? v(D) : a;
      }
      function _(D) {
        var j = D - u,
          z = D - d,
          $ = t - j;
        return l ? sG($, o - z) : $;
      }
      function A(D) {
        var j = D - u,
          z = D - d;
        return u === void 0 || j >= t || j < 0 || (l && z >= o);
      }
      function w() {
        var D = Za();
        if (A(D)) return N(D);
        s = setTimeout(w, _(D));
      }
      function N(D) {
        return (s = void 0), E && n ? v(D) : ((n = i = void 0), a);
      }
      function R() {
        s !== void 0 && clearTimeout(s), (d = 0), (n = u = i = s = void 0);
      }
      function M() {
        return s === void 0 ? a : N(Za());
      }
      function F() {
        var D = Za(),
          j = A(D);
        if (((n = arguments), (i = this), (u = D), j)) {
          if (s === void 0) return g(u);
          if (l) return clearTimeout(s), (s = setTimeout(w, t)), v(u);
        }
        return s === void 0 && (s = setTimeout(w, t)), a;
      }
      return (F.cancel = R), (F.flush = M), F;
    }
    xy.exports = uG;
  });
  var Sy = c((Tj, Ay) => {
    var cG = Oy(),
      lG = ut(),
      fG = "Expected a function";
    function dG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(fG);
      return (
        lG(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        cG(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    Ay.exports = dG;
  });
  var Ry = {};
  Ge(Ry, {
    actionListPlaybackChanged: () => gr,
    animationFrameChanged: () => di,
    clearRequested: () => FG,
    elementStateChanged: () => as,
    eventListenerAdded: () => fi,
    eventStateChanged: () => ns,
    instanceAdded: () => is,
    instanceRemoved: () => os,
    instanceStarted: () => pi,
    mediaQueriesDefined: () => us,
    parameterChanged: () => vr,
    playbackRequested: () => qG,
    previewRequested: () => MG,
    rawDataImported: () => Ja,
    sessionInitialized: () => es,
    sessionStarted: () => ts,
    sessionStopped: () => rs,
    stopRequested: () => DG,
    testFrameRendered: () => GG,
    viewportWidthChanged: () => ss,
  });
  var Cy,
    pG,
    vG,
    gG,
    hG,
    mG,
    yG,
    EG,
    bG,
    _G,
    IG,
    TG,
    wG,
    xG,
    OG,
    AG,
    SG,
    CG,
    RG,
    LG,
    NG,
    PG,
    Ja,
    es,
    ts,
    rs,
    MG,
    qG,
    DG,
    FG,
    fi,
    GG,
    ns,
    di,
    vr,
    is,
    pi,
    os,
    as,
    gr,
    ss,
    us,
    vi = me(() => {
      "use strict";
      Ue();
      (Cy = fe(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: pG,
          IX2_SESSION_INITIALIZED: vG,
          IX2_SESSION_STARTED: gG,
          IX2_SESSION_STOPPED: hG,
          IX2_PREVIEW_REQUESTED: mG,
          IX2_PLAYBACK_REQUESTED: yG,
          IX2_STOP_REQUESTED: EG,
          IX2_CLEAR_REQUESTED: bG,
          IX2_EVENT_LISTENER_ADDED: _G,
          IX2_TEST_FRAME_RENDERED: IG,
          IX2_EVENT_STATE_CHANGED: TG,
          IX2_ANIMATION_FRAME_CHANGED: wG,
          IX2_PARAMETER_CHANGED: xG,
          IX2_INSTANCE_ADDED: OG,
          IX2_INSTANCE_STARTED: AG,
          IX2_INSTANCE_REMOVED: SG,
          IX2_ELEMENT_STATE_CHANGED: CG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: RG,
          IX2_VIEWPORT_WIDTH_CHANGED: LG,
          IX2_MEDIA_QUERIES_DEFINED: NG,
        } = Te),
        ({ reifyState: PG } = Cy.IX2VanillaUtils),
        (Ja = (e) => ({ type: pG, payload: { ...PG(e) } })),
        (es = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: vG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (ts = () => ({ type: gG })),
        (rs = () => ({ type: hG })),
        (MG = ({ rawData: e, defer: t }) => ({
          type: mG,
          payload: { defer: t, rawData: e },
        })),
        (qG = ({
          actionTypeId: e = We.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: yG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (DG = (e) => ({ type: EG, payload: { actionListId: e } })),
        (FG = () => ({ type: bG })),
        (fi = (e, t) => ({
          type: _G,
          payload: { target: e, listenerParams: t },
        })),
        (GG = (e = 1) => ({ type: IG, payload: { step: e } })),
        (ns = (e, t) => ({ type: TG, payload: { stateKey: e, newState: t } })),
        (di = (e, t) => ({ type: wG, payload: { now: e, parameters: t } })),
        (vr = (e, t) => ({ type: xG, payload: { key: e, value: t } })),
        (is = (e) => ({ type: OG, payload: { ...e } })),
        (pi = (e, t) => ({ type: AG, payload: { instanceId: e, time: t } })),
        (os = (e) => ({ type: SG, payload: { instanceId: e } })),
        (as = (e, t, r, n) => ({
          type: CG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (gr = ({ actionListId: e, isPlaying: t }) => ({
          type: RG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (ss = ({ width: e, mediaQueries: t }) => ({
          type: LG,
          payload: { width: e, mediaQueries: t },
        })),
        (us = () => ({ type: NG }));
    });
  var qe = {};
  Ge(qe, {
    elementContains: () => fs,
    getChildElements: () => KG,
    getClosestElement: () => Jr,
    getProperty: () => WG,
    getQuerySelector: () => ls,
    getRefType: () => ds,
    getSiblingElements: () => YG,
    getStyle: () => HG,
    getValidDocument: () => BG,
    isSiblingNode: () => zG,
    matchSelector: () => XG,
    queryDocument: () => jG,
    setStyle: () => kG,
  });
  function kG(e, t, r) {
    e.style[t] = r;
  }
  function HG(e, t) {
    return e.style[t];
  }
  function WG(e, t) {
    return e[t];
  }
  function XG(e) {
    return (t) => t[cs](e);
  }
  function ls({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Ly) !== -1) {
        let n = e.split(Ly),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Py)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function BG(e) {
    return e == null || e === document.documentElement.getAttribute(Py)
      ? document
      : null;
  }
  function jG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function fs(e, t) {
    return e.contains(t);
  }
  function zG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function KG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function YG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function ds(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? UG
        : VG
      : null;
  }
  var Ny,
    cs,
    Ly,
    UG,
    VG,
    Py,
    Jr,
    My = me(() => {
      "use strict";
      Ny = fe(Gt());
      Ue();
      ({ ELEMENT_MATCHES: cs } = Ny.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Ly,
          HTML_ELEMENT: UG,
          PLAIN_OBJECT: VG,
          WF_PAGE: Py,
        } = Ce);
      Jr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[cs] && r[cs](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ps = c((Oj, Dy) => {
    var $G = ut(),
      qy = Object.create,
      QG = (function () {
        function e() {}
        return function (t) {
          if (!$G(t)) return {};
          if (qy) return qy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Dy.exports = QG;
  });
  var gi = c((Aj, Fy) => {
    function ZG() {}
    Fy.exports = ZG;
  });
  var mi = c((Sj, Gy) => {
    var JG = ps(),
      eU = gi();
    function hi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    hi.prototype = JG(eU.prototype);
    hi.prototype.constructor = hi;
    Gy.exports = hi;
  });
  var Hy = c((Cj, ky) => {
    var Uy = jt(),
      tU = Dr(),
      rU = xe(),
      Vy = Uy ? Uy.isConcatSpreadable : void 0;
    function nU(e) {
      return rU(e) || tU(e) || !!(Vy && e && e[Vy]);
    }
    ky.exports = nU;
  });
  var By = c((Rj, Xy) => {
    var iU = Dn(),
      oU = Hy();
    function Wy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = oU), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Wy(s, t - 1, r, n, i)
            : iU(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Xy.exports = Wy;
  });
  var zy = c((Lj, jy) => {
    var aU = By();
    function sU(e) {
      var t = e == null ? 0 : e.length;
      return t ? aU(e, 1) : [];
    }
    jy.exports = sU;
  });
  var Yy = c((Nj, Ky) => {
    function uU(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Ky.exports = uU;
  });
  var Zy = c((Pj, Qy) => {
    var cU = Yy(),
      $y = Math.max;
    function lU(e, t, r) {
      return (
        (t = $y(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = $y(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), cU(e, this, s);
        }
      );
    }
    Qy.exports = lU;
  });
  var eE = c((Mj, Jy) => {
    function fU(e) {
      return function () {
        return e;
      };
    }
    Jy.exports = fU;
  });
  var nE = c((qj, rE) => {
    var dU = eE(),
      tE = $a(),
      pU = Kn(),
      vU = tE
        ? function (e, t) {
            return tE(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: dU(t),
              writable: !0,
            });
          }
        : pU;
    rE.exports = vU;
  });
  var oE = c((Dj, iE) => {
    var gU = 800,
      hU = 16,
      mU = Date.now;
    function yU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = mU(),
          i = hU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= gU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    iE.exports = yU;
  });
  var sE = c((Fj, aE) => {
    var EU = nE(),
      bU = oE(),
      _U = bU(EU);
    aE.exports = _U;
  });
  var cE = c((Gj, uE) => {
    var IU = zy(),
      TU = Zy(),
      wU = sE();
    function xU(e) {
      return wU(TU(e, void 0, IU), e + "");
    }
    uE.exports = xU;
  });
  var dE = c((Uj, fE) => {
    var lE = sa(),
      OU = lE && new lE();
    fE.exports = OU;
  });
  var vE = c((Vj, pE) => {
    function AU() {}
    pE.exports = AU;
  });
  var vs = c((kj, hE) => {
    var gE = dE(),
      SU = vE(),
      CU = gE
        ? function (e) {
            return gE.get(e);
          }
        : SU;
    hE.exports = CU;
  });
  var yE = c((Hj, mE) => {
    var RU = {};
    mE.exports = RU;
  });
  var gs = c((Wj, bE) => {
    var EE = yE(),
      LU = Object.prototype,
      NU = LU.hasOwnProperty;
    function PU(e) {
      for (
        var t = e.name + "", r = EE[t], n = NU.call(EE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    bE.exports = PU;
  });
  var Ei = c((Xj, _E) => {
    var MU = ps(),
      qU = gi(),
      DU = 4294967295;
    function yi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = DU),
        (this.__views__ = []);
    }
    yi.prototype = MU(qU.prototype);
    yi.prototype.constructor = yi;
    _E.exports = yi;
  });
  var TE = c((Bj, IE) => {
    function FU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    IE.exports = FU;
  });
  var xE = c((jj, wE) => {
    var GU = Ei(),
      UU = mi(),
      VU = TE();
    function kU(e) {
      if (e instanceof GU) return e.clone();
      var t = new UU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = VU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    wE.exports = kU;
  });
  var SE = c((zj, AE) => {
    var HU = Ei(),
      OE = mi(),
      WU = gi(),
      XU = xe(),
      BU = pt(),
      jU = xE(),
      zU = Object.prototype,
      KU = zU.hasOwnProperty;
    function bi(e) {
      if (BU(e) && !XU(e) && !(e instanceof HU)) {
        if (e instanceof OE) return e;
        if (KU.call(e, "__wrapped__")) return jU(e);
      }
      return new OE(e);
    }
    bi.prototype = WU.prototype;
    bi.prototype.constructor = bi;
    AE.exports = bi;
  });
  var RE = c((Kj, CE) => {
    var YU = Ei(),
      $U = vs(),
      QU = gs(),
      ZU = SE();
    function JU(e) {
      var t = QU(e),
        r = ZU[t];
      if (typeof r != "function" || !(t in YU.prototype)) return !1;
      if (e === r) return !0;
      var n = $U(r);
      return !!n && e === n[0];
    }
    CE.exports = JU;
  });
  var ME = c((Yj, PE) => {
    var LE = mi(),
      eV = cE(),
      tV = vs(),
      hs = gs(),
      rV = xe(),
      NE = RE(),
      nV = "Expected a function",
      iV = 8,
      oV = 32,
      aV = 128,
      sV = 256;
    function uV(e) {
      return eV(function (t) {
        var r = t.length,
          n = r,
          i = LE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(nV);
          if (i && !a && hs(o) == "wrapper") var a = new LE([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = hs(o),
            u = s == "wrapper" ? tV(o) : void 0;
          u &&
          NE(u[0]) &&
          u[1] == (aV | iV | oV | sV) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[hs(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && NE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var d = arguments,
            h = d[0];
          if (a && d.length == 1 && rV(h)) return a.plant(h).value();
          for (var l = 0, E = r ? t[l].apply(this, d) : h; ++l < r; )
            E = t[l].call(this, E);
          return E;
        };
      });
    }
    PE.exports = uV;
  });
  var DE = c(($j, qE) => {
    var cV = ME(),
      lV = cV();
    qE.exports = lV;
  });
  var GE = c((Qj, FE) => {
    function fV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    FE.exports = fV;
  });
  var VE = c((Zj, UE) => {
    var dV = GE(),
      ms = Yn();
    function pV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = ms(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = ms(t)), (t = t === t ? t : 0)),
        dV(ms(e), t, r)
      );
    }
    UE.exports = pV;
  });
  var YE,
    $E,
    QE,
    ZE,
    vV,
    gV,
    hV,
    mV,
    yV,
    EV,
    bV,
    _V,
    IV,
    TV,
    wV,
    xV,
    OV,
    AV,
    SV,
    JE,
    eb,
    CV,
    RV,
    LV,
    tb,
    NV,
    PV,
    rb,
    MV,
    ys,
    nb,
    kE,
    HE,
    ib,
    tn,
    qV,
    ft,
    ob,
    DV,
    ke,
    et,
    rn,
    ab,
    Es,
    WE,
    bs,
    FV,
    en,
    GV,
    UV,
    VV,
    sb,
    XE,
    kV,
    BE,
    HV,
    WV,
    XV,
    jE,
    _i,
    Ii,
    zE,
    KE,
    ub,
    cb = me(() => {
      "use strict";
      (YE = fe(DE())), ($E = fe(zn())), (QE = fe(VE()));
      Ue();
      _s();
      vi();
      (ZE = fe(Gt())),
        ({
          MOUSE_CLICK: vV,
          MOUSE_SECOND_CLICK: gV,
          MOUSE_DOWN: hV,
          MOUSE_UP: mV,
          MOUSE_OVER: yV,
          MOUSE_OUT: EV,
          DROPDOWN_CLOSE: bV,
          DROPDOWN_OPEN: _V,
          SLIDER_ACTIVE: IV,
          SLIDER_INACTIVE: TV,
          TAB_ACTIVE: wV,
          TAB_INACTIVE: xV,
          NAVBAR_CLOSE: OV,
          NAVBAR_OPEN: AV,
          MOUSE_MOVE: SV,
          PAGE_SCROLL_DOWN: JE,
          SCROLL_INTO_VIEW: eb,
          SCROLL_OUT_OF_VIEW: CV,
          PAGE_SCROLL_UP: RV,
          SCROLLING_IN_VIEW: LV,
          PAGE_FINISH: tb,
          ECOMMERCE_CART_CLOSE: NV,
          ECOMMERCE_CART_OPEN: PV,
          PAGE_START: rb,
          PAGE_SCROLL: MV,
        } = Ze),
        (ys = "COMPONENT_ACTIVE"),
        (nb = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: kE } = Ce),
        ({ getNamespacedParameterId: HE } = ZE.IX2VanillaUtils),
        (ib = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (tn = ib(({ element: e, nativeEvent: t }) => e === t.target)),
        (qV = ib(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (ft = (0, YE.default)([tn, qV])),
        (ob = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !FV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (DV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!ob(e, n);
        }),
        (ke = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            d = ob(e, u);
          return (
            d &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + kE + n.split(kE)[1],
                actionListId: (0, $E.default)(d, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            nn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (rn = { handler: et(ft, ke) }),
        (ab = { ...rn, types: [ys, nb].join(" ") }),
        (Es = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (WE = "mouseover mouseout"),
        (bs = { types: Es }),
        (FV = { PAGE_START: rb, PAGE_FINISH: tb }),
        (en = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, QE.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (GV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (UV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (VV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = en(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return GV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (sb = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [ys, nb].indexOf(n) !== -1 ? n === ys : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (XE = (e) => (t, r) => {
          let n = { elementHovered: UV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (kV = (e) => (t, r) => {
          let n = { ...r, elementVisible: VV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (BE =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = en(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: d } = a,
              h = d === "PX",
              l = i - o,
              E = Number((n / l).toFixed(2));
            if (r && r.percentTop === E) return r;
            let v = (h ? u : (o * (u || 0)) / 100) / l,
              g,
              _,
              A = 0;
            r &&
              ((g = E > r.percentTop),
              (_ = r.scrollingDown !== g),
              (A = _ ? E : r.anchorTop));
            let w = s === JE ? E >= A + v : E <= A - v,
              N = {
                ...r,
                percentTop: E,
                inBounds: w,
                anchorTop: A,
                scrollingDown: g,
              };
            return (r && w && (_ || N.inBounds !== r.inBounds) && e(t, N)) || N;
          }),
        (HV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (WV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (XV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (jE =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (_i = (e = !0) => ({
          ...ab,
          handler: et(
            e ? ft : tn,
            sb((t, r) => (r.isActive ? rn.handler(t, r) : r))
          ),
        })),
        (Ii = (e = !0) => ({
          ...ab,
          handler: et(
            e ? ft : tn,
            sb((t, r) => (r.isActive ? r : rn.handler(t, r)))
          ),
        })),
        (zE = {
          ...bs,
          handler: kV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === eb) === r
              ? (ke(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (KE = 0.05),
        (ub = {
          [IV]: _i(),
          [TV]: Ii(),
          [_V]: _i(),
          [bV]: Ii(),
          [AV]: _i(!1),
          [OV]: Ii(!1),
          [wV]: _i(),
          [xV]: Ii(),
          [PV]: { types: "ecommerce-cart-open", handler: et(ft, ke) },
          [NV]: { types: "ecommerce-cart-close", handler: et(ft, ke) },
          [vV]: {
            types: "click",
            handler: et(
              ft,
              jE((e, { clickCount: t }) => {
                DV(e) ? t === 1 && ke(e) : ke(e);
              })
            ),
          },
          [gV]: {
            types: "click",
            handler: et(
              ft,
              jE((e, { clickCount: t }) => {
                t === 2 && ke(e);
              })
            ),
          },
          [hV]: { ...rn, types: "mousedown" },
          [mV]: { ...rn, types: "mouseup" },
          [yV]: {
            types: WE,
            handler: et(
              ft,
              XE((e, t) => {
                t.elementHovered && ke(e);
              })
            ),
          },
          [EV]: {
            types: WE,
            handler: et(
              ft,
              XE((e, t) => {
                t.elementHovered || ke(e);
              })
            ),
          },
          [SV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: d,
                  restingState: h = 0,
                } = r,
                {
                  clientX: l = o.clientX,
                  clientY: E = o.clientY,
                  pageX: v = o.pageX,
                  pageY: g = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                A = n.type === "mouseout",
                w = h / 100,
                N = u,
                R = !1;
              switch (a) {
                case st.VIEWPORT: {
                  w = _
                    ? Math.min(l, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                }
                case st.PAGE: {
                  let {
                    scrollLeft: M,
                    scrollTop: F,
                    scrollWidth: D,
                    scrollHeight: j,
                  } = en();
                  w = _ ? Math.min(M + v, D) / D : Math.min(F + g, j) / j;
                  break;
                }
                case st.ELEMENT:
                default: {
                  N = HE(i, u);
                  let M = n.type.indexOf("mouse") === 0;
                  if (M && ft({ element: t, nativeEvent: n }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    { left: D, top: j, width: z, height: $ } = F;
                  if (!M && !HV({ left: l, top: E }, F)) break;
                  (R = !0), (w = _ ? (l - D) / z : (E - j) / $);
                  break;
                }
              }
              return (
                A && (w > 1 - KE || w < KE) && (w = Math.round(w)),
                (a !== st.ELEMENT || R || R !== o.elementHovered) &&
                  ((w = d ? 1 - w : w), e.dispatch(vr(N, w))),
                {
                  elementHovered: R,
                  clientX: l,
                  clientY: E,
                  pageX: v,
                  pageY: g,
                }
              );
            },
          },
          [MV]: {
            types: Es,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = en(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(vr(r, s));
            },
          },
          [LV]: {
            types: Es,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: d,
                } = en(),
                {
                  basedOn: h,
                  selectedAxis: l,
                  continuousParameterGroupId: E,
                  startsEntering: v,
                  startsExiting: g,
                  addEndOffset: _,
                  addStartOffset: A,
                  addOffsetValue: w = 0,
                  endOffsetValue: N = 0,
                } = r,
                R = l === "X_AXIS";
              if (h === st.VIEWPORT) {
                let M = R ? o / s : a / u;
                return (
                  M !== i.scrollPercent && t.dispatch(vr(E, M)),
                  { scrollPercent: M }
                );
              } else {
                let M = HE(n, E),
                  F = e.getBoundingClientRect(),
                  D = (A ? w : 0) / 100,
                  j = (_ ? N : 0) / 100;
                (D = v ? D : 1 - D), (j = g ? j : 1 - j);
                let z = F.top + Math.min(F.height * D, d),
                  te = F.top + F.height * j - z,
                  X = Math.min(d + te, u),
                  y = Math.min(Math.max(0, d - z), X) / X;
                return (
                  y !== i.scrollPercent && t.dispatch(vr(M, y)),
                  { scrollPercent: y }
                );
              }
            },
          },
          [eb]: zE,
          [CV]: zE,
          [JE]: {
            ...bs,
            handler: BE((e, t) => {
              t.scrollingDown && ke(e);
            }),
          },
          [RV]: {
            ...bs,
            handler: BE((e, t) => {
              t.scrollingDown || ke(e);
            }),
          },
          [tb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(tn, WV(ke)),
          },
          [rb]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(tn, XV(ke)),
          },
        });
    });
  var Ob = {};
  Ge(Ob, {
    observeRequests: () => lk,
    startActionGroup: () => nn,
    startEngine: () => Si,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => Tb,
    stopEngine: () => Ci,
  });
  function lk(e) {
    Ut({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: pk }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: vk }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: gk }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: hk });
  }
  function fk(e) {
    Ut({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        Ci(e),
          Eb({ store: e, elementApi: qe }),
          Si({ store: e, allowEvents: !0 }),
          bb();
      },
    });
  }
  function dk(e, t) {
    let r = Ut({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function pk({ rawData: e, defer: t }, r) {
    let n = () => {
      Si({ store: r, rawData: e, allowEvents: !0 }), bb();
    };
    t ? setTimeout(n, 0) : n();
  }
  function bb() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function vk(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: d = !0,
      } = e,
      { rawData: h } = e;
    if (n && i && h && s) {
      let l = h.actionLists[n];
      l && (h = JV({ actionList: l, actionItemId: i, rawData: h }));
    }
    if (
      (Si({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === We.GENERAL_START_ACTION) || Is(r))
    ) {
      hr({ store: t, actionListId: n }),
        Ib({ store: t, actionListId: n, eventId: o });
      let l = nn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: d,
      });
      d && l && t.dispatch(gr({ actionListId: n, isPlaying: !s }));
    }
  }
  function gk({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : Tb({ store: t }), Ci(t);
  }
  function hk(e, t) {
    Ci(t), Eb({ store: t, elementApi: qe });
  }
  function Si({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch(Ja(t)),
      i.active ||
        (e.dispatch(
          es({
            hasBoundaryNodes: !!document.querySelector(wi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (Ik(e), mk(), e.getState().ixSession.hasDefinedMediaQueries && fk(e)),
        e.dispatch(ts()),
        yk(e, n));
  }
  function mk() {
    let { documentElement: e } = document;
    e.className.indexOf(lb) === -1 && (e.className += ` ${lb}`);
  }
  function yk(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(di(n, o)), t ? dk(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ci(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(Ek), nk(), e.dispatch(rs());
    }
  }
  function Ek({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function bk({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: d, ixSession: h } = e.getState(),
      { events: l } = d,
      E = l[n],
      { eventTypeId: v } = E,
      g = {},
      _ = {},
      A = [],
      { continuousActionGroups: w } = a,
      { id: N } = a;
    ek(v, i) && (N = tk(t, N));
    let R = h.hasBoundaryNodes && r ? Jr(r, wi) : null;
    w.forEach((M) => {
      let { keyframe: F, actionItems: D } = M;
      D.forEach((j) => {
        let { actionTypeId: z } = j,
          { target: $ } = j.config;
        if (!$) return;
        let te = $.boundaryMode ? R : null,
          X = ik($) + Ts + z;
        if (((_[X] = _k(_[X], F, j)), !g[X])) {
          g[X] = !0;
          let { config: S } = j;
          xi({
            config: S,
            event: E,
            eventTarget: r,
            elementRoot: te,
            elementApi: qe,
          }).forEach((y) => {
            A.push({ element: y, key: X });
          });
        }
      });
    }),
      A.forEach(({ element: M, key: F }) => {
        let D = _[F],
          j = (0, mt.default)(D, "[0].actionItems[0]", {}),
          { actionTypeId: z } = j,
          $ = Ai(z) ? xs(z)(M, j) : null,
          te = ws({ element: M, actionItem: j, elementApi: qe }, $);
        Os({
          store: e,
          element: M,
          eventId: n,
          actionListId: o,
          actionItem: j,
          destination: te,
          continuous: !0,
          parameterId: N,
          actionGroups: D,
          smoothing: s,
          restingValue: u,
          pluginInstance: $,
        });
      });
  }
  function _k(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function Ik(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    _b(e),
      (0, mr.default)(r, (i, o) => {
        let a = ub[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        Sk({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && wk(e);
  }
  function wk(e) {
    let t = () => {
      _b(e);
    };
    Tk.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(fi(window, [r, t]));
    }),
      t();
  }
  function _b(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(ss({ width: n, mediaQueries: i }));
    }
  }
  function Sk({ logic: e, store: t, events: r }) {
    Ck(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = xk(r, Ak);
    if (!(0, pb.default)(s)) return;
    (0, mr.default)(s, (l, E) => {
      let v = r[E],
        { action: g, id: _, mediaQueries: A = o.mediaQueryKeys } = v,
        { actionListId: w } = g.config;
      ok(A, o.mediaQueryKeys) || t.dispatch(us()),
        g.actionTypeId === We.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(v.config) ? v.config : [v.config]).forEach((R) => {
            let { continuousParameterGroupId: M } = R,
              F = (0, mt.default)(a, `${w}.continuousParameterGroups`, []),
              D = (0, db.default)(F, ({ id: $ }) => $ === M),
              j = (R.smoothing || 0) / 100,
              z = (R.restingState || 0) / 100;
            D &&
              l.forEach(($, te) => {
                let X = _ + Ts + te;
                bk({
                  store: t,
                  eventStateKey: X,
                  eventTarget: $,
                  eventId: _,
                  eventConfig: R,
                  actionListId: w,
                  parameterGroup: D,
                  smoothing: j,
                  restingValue: z,
                });
              });
          }),
        (g.actionTypeId === We.GENERAL_START_ACTION || Is(g.actionTypeId)) &&
          Ib({ store: t, actionListId: w, eventId: _ });
    });
    let u = (l) => {
        let { ixSession: E } = t.getState();
        Ok(s, (v, g, _) => {
          let A = r[g],
            w = E.eventState[_],
            { action: N, mediaQueries: R = o.mediaQueryKeys } = A;
          if (!Oi(R, E.mediaQueryKey)) return;
          let M = (F = {}) => {
            let D = i(
              {
                store: t,
                element: v,
                event: A,
                eventConfig: F,
                nativeEvent: l,
                eventStateKey: _,
              },
              w
            );
            ak(D, w) || t.dispatch(ns(_, D));
          };
          N.actionTypeId === We.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(A.config) ? A.config : [A.config]).forEach(M)
            : M();
        });
      },
      d = (0, mb.default)(u, ck),
      h = ({ target: l = document, types: E, throttle: v }) => {
        E.split(" ")
          .filter(Boolean)
          .forEach((g) => {
            let _ = v ? d : u;
            l.addEventListener(g, _), t.dispatch(fi(l, [g, _]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function Ck(e) {
    if (!uk) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ls(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function Ib({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let d = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, mt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Oi(h, i.mediaQueryKey)) return;
      d.forEach((l) => {
        let { config: E, actionTypeId: v } = l,
          g =
            E?.target?.useEventTarget === !0 && E?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : E,
          _ = xi({ config: g, event: s, elementApi: qe }),
          A = Ai(v);
        _.forEach((w) => {
          let N = A ? xs(v)(w, l) : null;
          Os({
            destination: ws({ element: w, actionItem: l, elementApi: qe }, N),
            immediate: !0,
            store: e,
            element: w,
            eventId: r,
            actionItem: l,
            actionListId: t,
            pluginInstance: N,
          });
        });
      });
    }
  }
  function Tb({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, mr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        As(r, e), i && e.dispatch(gr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Jr(r, wi) : null;
    (0, mr.default)(o, (u) => {
      let d = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && h) {
        if (s && d && !fs(s, u.element)) return;
        As(u, e),
          u.verbose && e.dispatch(gr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function nn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: d } = e.getState(),
      { events: h } = u,
      l = h[t] || {},
      { mediaQueries: E = u.mediaQueryKeys } = l,
      v = (0, mt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: g, useFirstGroupAsInitialState: _ } = v;
    if (!g || !g.length) return !1;
    o >= g.length && (0, mt.default)(l, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let w =
        (o === 0 || (o === 1 && _)) && Is(l.action?.actionTypeId)
          ? l.config.delay
          : void 0,
      N = (0, mt.default)(g, [o, "actionItems"], []);
    if (!N.length || !Oi(E, d.mediaQueryKey)) return !1;
    let R = d.hasBoundaryNodes && r ? Jr(r, wi) : null,
      M = $V(N),
      F = !1;
    return (
      N.forEach((D, j) => {
        let { config: z, actionTypeId: $ } = D,
          te = Ai($),
          { target: X } = z;
        if (!X) return;
        let S = X.boundaryMode ? R : null;
        xi({
          config: z,
          event: l,
          eventTarget: r,
          elementRoot: S,
          elementApi: qe,
        }).forEach((L, G) => {
          let V = te ? xs($)(L, D) : null,
            J = te ? sk($)(L, D) : null;
          F = !0;
          let ne = M === j && G === 0,
            U = QV({ element: L, actionItem: D }),
            H = ws({ element: L, actionItem: D, elementApi: qe }, V);
          Os({
            store: e,
            element: L,
            actionItem: D,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: ne,
            computedStyle: U,
            destination: H,
            immediate: a,
            verbose: s,
            pluginInstance: V,
            pluginDuration: J,
            instanceDelay: w,
          });
        });
      }),
      F
    );
  }
  function Os(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: d,
        eventId: h,
      } = n,
      l = !u,
      E = KV(),
      { ixElements: v, ixSession: g, ixData: _ } = t.getState(),
      A = zV(v, i),
      { refState: w } = v[A] || {},
      N = ds(i),
      R = g.reducedMotion && Ko[o.actionTypeId],
      M;
    if (R && u)
      switch (_.events[h]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          M = d;
          break;
        default:
          M = 0.5;
          break;
      }
    let F = ZV(i, w, r, o, qe, s);
    if (
      (t.dispatch(
        is({
          instanceId: E,
          elementId: A,
          origin: F,
          refType: N,
          skipMotion: R,
          skipToValue: M,
          ...n,
        })
      ),
      wb(document.body, "ix2-animation-started", E),
      a)
    ) {
      Rk(t, E);
      return;
    }
    Ut({ store: t, select: ({ ixInstances: D }) => D[E], onChange: xb }),
      l && t.dispatch(pi(E, g.tick));
  }
  function As(e, t) {
    wb(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === yb && rk(o, n, qe), t.dispatch(os(e.id));
  }
  function wb(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function Rk(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
    let { ixInstances: n } = e.getState();
    xb(n[t], e);
  }
  function xb(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: d,
        groupIndex: h,
        eventId: l,
        eventTarget: E,
        eventStateKey: v,
        actionListId: g,
        isCarrier: _,
        styleProp: A,
        verbose: w,
        pluginInstance: N,
      } = e,
      { ixData: R, ixSession: M } = t.getState(),
      { events: F } = R,
      D = F[l] || {},
      { mediaQueries: j = R.mediaQueryKeys } = D;
    if (Oi(j, M.mediaQueryKey) && (n || r || i)) {
      if (d || (u === jV && i)) {
        t.dispatch(as(o, s, d, a));
        let { ixElements: z } = t.getState(),
          { ref: $, refType: te, refState: X } = z[o] || {},
          S = X && X[s];
        (te === yb || Ai(s)) && YV($, X, S, l, a, A, qe, u, N);
      }
      if (i) {
        if (_) {
          let z = nn({
            store: t,
            eventId: l,
            eventTarget: E,
            eventStateKey: v,
            actionListId: g,
            groupIndex: h + 1,
            verbose: w,
          });
          w && !z && t.dispatch(gr({ actionListId: g, isPlaying: !1 }));
        }
        As(e, t);
      }
    }
  }
  var db,
    mt,
    pb,
    vb,
    gb,
    hb,
    mr,
    mb,
    Ti,
    BV,
    Is,
    Ts,
    wi,
    yb,
    jV,
    lb,
    xi,
    zV,
    ws,
    Ut,
    KV,
    YV,
    Eb,
    $V,
    QV,
    ZV,
    JV,
    ek,
    tk,
    Oi,
    rk,
    nk,
    ik,
    ok,
    ak,
    Ai,
    xs,
    sk,
    fb,
    uk,
    ck,
    Tk,
    xk,
    Ok,
    Ak,
    _s = me(() => {
      "use strict";
      (db = fe(Ta())),
        (mt = fe(zn())),
        (pb = fe(Um())),
        (vb = fe(fy())),
        (gb = fe(py())),
        (hb = fe(gy())),
        (mr = fe(_y())),
        (mb = fe(Sy()));
      Ue();
      Ti = fe(Gt());
      vi();
      My();
      cb();
      (BV = Object.keys(jo)),
        (Is = (e) => BV.includes(e)),
        ({
          COLON_DELIMITER: Ts,
          BOUNDARY_SELECTOR: wi,
          HTML_ELEMENT: yb,
          RENDER_GENERAL: jV,
          W_MOD_IX: lb,
        } = Ce),
        ({
          getAffectedElements: xi,
          getElementId: zV,
          getDestinationValues: ws,
          observeStore: Ut,
          getInstanceId: KV,
          renderHTMLElement: YV,
          clearAllStyles: Eb,
          getMaxDurationItemIndex: $V,
          getComputedStyle: QV,
          getInstanceOrigin: ZV,
          reduceListToGroup: JV,
          shouldNamespaceEventParameter: ek,
          getNamespacedParameterId: tk,
          shouldAllowMediaQuery: Oi,
          cleanupHTMLElement: rk,
          clearObjectCache: nk,
          stringifyTarget: ik,
          mediaQueriesEqual: ok,
          shallowEqual: ak,
        } = Ti.IX2VanillaUtils),
        ({
          isPluginType: Ai,
          createPluginInstance: xs,
          getPluginDuration: sk,
        } = Ti.IX2VanillaPlugins),
        (fb = navigator.userAgent),
        (uk = fb.match(/iPad/i) || fb.match(/iPhone/)),
        (ck = 12);
      Tk = ["resize", "orientationchange"];
      (xk = (e, t) => (0, vb.default)((0, hb.default)(e, t), gb.default)),
        (Ok = (e, t) => {
          (0, mr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + Ts + o;
              t(i, n, a);
            });
          });
        }),
        (Ak = (e) => {
          let t = { target: e.target, targets: e.targets };
          return xi({ config: t, elementApi: qe });
        });
    });
  var Sb = c((yt) => {
    "use strict";
    var Lk = vn().default,
      Nk = cu().default;
    Object.defineProperty(yt, "__esModule", { value: !0 });
    yt.actions = void 0;
    yt.destroy = Ab;
    yt.init = Fk;
    yt.setEnv = Dk;
    yt.store = void 0;
    Kl();
    var Pk = Xo(),
      Mk = Nk((bm(), nt(Em))),
      Ss = (_s(), nt(Ob)),
      qk = Lk((vi(), nt(Ry)));
    yt.actions = qk;
    var Cs = (yt.store = (0, Pk.createStore)(Mk.default));
    function Dk(e) {
      e() && (0, Ss.observeRequests)(Cs);
    }
    function Fk(e) {
      Ab(), (0, Ss.startEngine)({ store: Cs, rawData: e, allowEvents: !0 });
    }
    function Ab() {
      (0, Ss.stopEngine)(Cs);
    }
  });
  var Nb = c((sz, Lb) => {
    "use strict";
    var Cb = Ne(),
      Rb = Sb();
    Rb.setEnv(Cb.env);
    Cb.define(
      "ix2",
      (Lb.exports = function () {
        return Rb;
      })
    );
  });
  var Mb = c((uz, Pb) => {
    "use strict";
    var yr = Ne();
    yr.define(
      "links",
      (Pb.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          d = /index\.(html|php)$/,
          h = /\/$/,
          l,
          E;
        r.ready = r.design = r.preview = v;
        function v() {
          (i = o && yr.env("design")),
            (E = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(_),
            (l = []);
          for (var w = document.links, N = 0; N < w.length; ++N) g(w[N]);
          l.length && (yr.scroll.on(_), _());
        }
        function g(w) {
          if (!w.getAttribute("hreflang")) {
            var N =
              (i && w.getAttribute("href-disabled")) || w.getAttribute("href");
            if (((s.href = N), !(N.indexOf(":") >= 0))) {
              var R = e(w);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var M = e(s.hash);
                M.length && l.push({ link: R, sec: M, active: !1 });
                return;
              }
              if (!(N === "#" || N === "")) {
                var F =
                  s.href === a.href || N === E || (d.test(N) && h.test(E));
                A(R, u, F);
              }
            }
          }
        }
        function _() {
          var w = n.scrollTop(),
            N = n.height();
          t.each(l, function (R) {
            if (!R.link.attr("hreflang")) {
              var M = R.link,
                F = R.sec,
                D = F.offset().top,
                j = F.outerHeight(),
                z = N * 0.5,
                $ = F.is(":visible") && D + j - z >= w && D + z <= w + N;
              R.active !== $ && ((R.active = $), A(M, u, $));
            }
          });
        }
        function A(w, N, R) {
          var M = w.hasClass(N);
          (R && M) || (!R && !M) || (R ? w.addClass(N) : w.removeClass(N));
        }
        return r;
      })
    );
  });
  var Db = c((cz, qb) => {
    "use strict";
    var Ri = Ne();
    Ri.define(
      "scroll",
      (qb.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = g() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (S) {
              window.setTimeout(S, 15);
            },
          u = Ri.env("editor") ? ".w-editor-body" : "body",
          d =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          l = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          v = document.createElement("style");
        v.appendChild(document.createTextNode(E));
        function g() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function A(S) {
          return _.test(S.hash) && S.host + S.pathname === r.host + r.pathname;
        }
        let w =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function N() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            w.matches
          );
        }
        function R(S, y) {
          var L;
          switch (y) {
            case "add":
              (L = S.attr("tabindex")),
                L
                  ? S.attr("data-wf-tabindex-swap", L)
                  : S.attr("tabindex", "-1");
              break;
            case "remove":
              (L = S.attr("data-wf-tabindex-swap")),
                L
                  ? (S.attr("tabindex", L),
                    S.removeAttr("data-wf-tabindex-swap"))
                  : S.removeAttr("tabindex");
              break;
          }
          S.toggleClass("wf-force-outline-none", y === "add");
        }
        function M(S) {
          var y = S.currentTarget;
          if (
            !(
              Ri.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(y.className))
            )
          ) {
            var L = A(y) ? y.hash : "";
            if (L !== "") {
              var G = e(L);
              G.length &&
                (S && (S.preventDefault(), S.stopPropagation()),
                F(L, S),
                window.setTimeout(
                  function () {
                    D(G, function () {
                      R(G, "add"),
                        G.get(0).focus({ preventScroll: !0 }),
                        R(G, "remove");
                    });
                  },
                  S ? 0 : 300
                ));
            }
          }
        }
        function F(S) {
          if (
            r.hash !== S &&
            n &&
            n.pushState &&
            !(Ri.env.chrome && r.protocol === "file:")
          ) {
            var y = n.state && n.state.hash;
            y !== S && n.pushState({ hash: S }, "", S);
          }
        }
        function D(S, y) {
          var L = i.scrollTop(),
            G = j(S);
          if (L !== G) {
            var V = z(S, L, G),
              J = Date.now(),
              ne = function () {
                var U = Date.now() - J;
                window.scroll(0, $(L, G, U, V)),
                  U <= V ? s(ne) : typeof y == "function" && y();
              };
            s(ne);
          }
        }
        function j(S) {
          var y = e(d),
            L = y.css("position") === "fixed" ? y.outerHeight() : 0,
            G = S.offset().top - L;
          if (S.data("scroll") === "mid") {
            var V = i.height() - L,
              J = S.outerHeight();
            J < V && (G -= Math.round((V - J) / 2));
          }
          return G;
        }
        function z(S, y, L) {
          if (N()) return 0;
          var G = 1;
          return (
            a.add(S).each(function (V, J) {
              var ne = parseFloat(J.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (G = ne);
            }),
            (472.143 * Math.log(Math.abs(y - L) + 125) - 2e3) * G
          );
        }
        function $(S, y, L, G) {
          return L > G ? y : S + (y - S) * te(L / G);
        }
        function te(S) {
          return S < 0.5
            ? 4 * S * S * S
            : (S - 1) * (2 * S - 2) * (2 * S - 2) + 1;
        }
        function X() {
          var { WF_CLICK_EMPTY: S, WF_CLICK_SCROLL: y } = t;
          o.on(y, l, M),
            o.on(S, h, function (L) {
              L.preventDefault();
            }),
            document.head.insertBefore(v, document.head.firstChild);
        }
        return { ready: X };
      })
    );
  });
  var Gb = c((lz, Fb) => {
    "use strict";
    var Gk = Ne();
    Gk.define(
      "touch",
      (Fb.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            d,
            h;
          o.addEventListener("touchstart", l, !1),
            o.addEventListener("touchmove", E, !1),
            o.addEventListener("touchend", v, !1),
            o.addEventListener("touchcancel", g, !1),
            o.addEventListener("mousedown", l, !1),
            o.addEventListener("mousemove", E, !1),
            o.addEventListener("mouseup", v, !1),
            o.addEventListener("mouseout", g, !1);
          function l(A) {
            var w = A.touches;
            (w && w.length > 1) ||
              ((a = !0),
              w ? ((s = !0), (d = w[0].clientX)) : (d = A.clientX),
              (h = d));
          }
          function E(A) {
            if (a) {
              if (s && A.type === "mousemove") {
                A.preventDefault(), A.stopPropagation();
                return;
              }
              var w = A.touches,
                N = w ? w[0].clientX : A.clientX,
                R = N - h;
              (h = N),
                Math.abs(R) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", A, { direction: R > 0 ? "right" : "left" }), g());
            }
          }
          function v(A) {
            if (a && ((a = !1), s && A.type === "mouseup")) {
              A.preventDefault(), A.stopPropagation(), (s = !1);
              return;
            }
          }
          function g() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", l, !1),
              o.removeEventListener("touchmove", E, !1),
              o.removeEventListener("touchend", v, !1),
              o.removeEventListener("touchcancel", g, !1),
              o.removeEventListener("mousedown", l, !1),
              o.removeEventListener("mousemove", E, !1),
              o.removeEventListener("mouseup", v, !1),
              o.removeEventListener("mouseout", g, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var kb = c((fz, Vb) => {
    "use strict";
    var Vt = Ne(),
      Uk = br(),
      tt = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      Ub = !0,
      Vk = /^#[a-zA-Z0-9\-_]+$/;
    Vt.define(
      "dropdown",
      (Vb.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = Vt.env(),
          o = !1,
          a,
          s = Vt.env.touch,
          u = ".w-dropdown",
          d = "w--open",
          h = Uk.triggers,
          l = 900,
          E = "focusout" + u,
          v = "keydown" + u,
          g = "mouseenter" + u,
          _ = "mousemove" + u,
          A = "mouseleave" + u,
          w = (s ? "click" : "mouseup") + u,
          N = "w-close" + u,
          R = "setting" + u,
          M = e(document),
          F;
        (n.ready = D),
          (n.design = function () {
            o && y(), (o = !1), D();
          }),
          (n.preview = function () {
            (o = !0), D();
          });
        function D() {
          (a = i && Vt.env("design")), (F = M.find(u)), F.each(j);
        }
        function j(p, k) {
          var W = e(k),
            C = e.data(k, u);
          C ||
            (C = e.data(k, u, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = V(C)),
            (C.mouseLeave = ne(C)),
            (C.mouseUpOutside = G(C)),
            (C.mouseMoveOutside = U(C)),
            z(C);
          var Q = C.toggle.attr("id"),
            le = C.list.attr("id");
          Q || (Q = "w-dropdown-toggle-" + p),
            le || (le = "w-dropdown-list-" + p),
            C.toggle.attr("id", Q),
            C.toggle.attr("aria-controls", le),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
              (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", le),
            C.list.attr("aria-labelledby", Q),
            C.links.each(function (b, B) {
              B.hasAttribute("tabindex") || B.setAttribute("tabindex", "0"),
                Vk.test(B.hash) && B.addEventListener("click", S.bind(null, C));
            }),
            C.el.off(u),
            C.toggle.off(u),
            C.nav && C.nav.off(u);
          var oe = te(C, Ub);
          a && C.el.on(R, $(C)),
            a ||
              (i && ((C.hovering = !1), S(C)),
              C.config.hover && C.toggle.on(g, J(C)),
              C.el.on(N, oe),
              C.el.on(v, H(C)),
              C.el.on(E, I(C)),
              C.toggle.on(w, oe),
              C.toggle.on(v, m(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(N, oe));
        }
        function z(p) {
          var k = Number(p.el.css("z-index"));
          (p.manageZ = k === l || k === l + 1),
            (p.config = {
              hover: p.el.attr("data-hover") === "true" && !s,
              delay: p.el.attr("data-delay"),
            });
        }
        function $(p) {
          return function (k, W) {
            (W = W || {}),
              z(p),
              W.open === !0 && X(p, !0),
              W.open === !1 && S(p, { immediate: !0 });
          };
        }
        function te(p, k) {
          return r(function (W) {
            if (p.open || (W && W.type === "w-close"))
              return S(p, { forceClose: k });
            X(p);
          });
        }
        function X(p) {
          if (!p.open) {
            L(p),
              (p.open = !0),
              p.list.addClass(d),
              p.toggle.addClass(d),
              p.toggle.attr("aria-expanded", "true"),
              h.intro(0, p.el[0]),
              Vt.redraw.up(),
              p.manageZ && p.el.css("z-index", l + 1);
            var k = Vt.env("editor");
            a || M.on(w, p.mouseUpOutside),
              p.hovering && !k && p.el.on(A, p.mouseLeave),
              p.hovering && k && M.on(_, p.mouseMoveOutside),
              window.clearTimeout(p.delayId);
          }
        }
        function S(p, { immediate: k, forceClose: W } = {}) {
          if (p.open && !(p.config.hover && p.hovering && !W)) {
            p.toggle.attr("aria-expanded", "false"), (p.open = !1);
            var C = p.config;
            if (
              (h.outro(0, p.el[0]),
              M.off(w, p.mouseUpOutside),
              M.off(_, p.mouseMoveOutside),
              p.el.off(A, p.mouseLeave),
              window.clearTimeout(p.delayId),
              !C.delay || k)
            )
              return p.complete();
            p.delayId = window.setTimeout(p.complete, C.delay);
          }
        }
        function y() {
          M.find(u).each(function (p, k) {
            e(k).triggerHandler(N);
          });
        }
        function L(p) {
          var k = p.el[0];
          F.each(function (W, C) {
            var Q = e(C);
            Q.is(k) || Q.has(k).length || Q.triggerHandler(N);
          });
        }
        function G(p) {
          return (
            p.mouseUpOutside && M.off(w, p.mouseUpOutside),
            r(function (k) {
              if (p.open) {
                var W = e(k.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(p.el[0], W.parents(u)) === -1,
                    Q = Vt.env("editor");
                  if (C) {
                    if (Q) {
                      var le =
                          W.parents().length === 1 &&
                          W.parents("svg").length === 1,
                        oe = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (le || oe) return;
                    }
                    S(p);
                  }
                }
              }
            })
          );
        }
        function V(p) {
          return function () {
            p.list.removeClass(d),
              p.toggle.removeClass(d),
              p.manageZ && p.el.css("z-index", "");
          };
        }
        function J(p) {
          return function () {
            (p.hovering = !0), X(p);
          };
        }
        function ne(p) {
          return function () {
            (p.hovering = !1), p.links.is(":focus") || S(p);
          };
        }
        function U(p) {
          return r(function (k) {
            if (p.open) {
              var W = e(k.target),
                C = e.inArray(p.el[0], W.parents(u)) === -1;
              if (C) {
                var Q = W.parents(".w-editor-bem-EditorHoverControls").length,
                  le = W.parents(".w-editor-bem-RTToolbar").length,
                  oe = e(".w-editor-bem-EditorOverlay"),
                  b =
                    oe.find(".w-editor-edit-outline").length ||
                    oe.find(".w-editor-bem-RTToolbar").length;
                if (Q || le || b) return;
                (p.hovering = !1), S(p);
              }
            }
          });
        }
        function H(p) {
          return function (k) {
            if (!(a || !p.open))
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                k.keyCode)
              ) {
                case tt.HOME:
                  return p.open
                    ? ((p.selectedIdx = 0), Z(p), k.preventDefault())
                    : void 0;
                case tt.END:
                  return p.open
                    ? ((p.selectedIdx = p.links.length - 1),
                      Z(p),
                      k.preventDefault())
                    : void 0;
                case tt.ESCAPE:
                  return S(p), p.toggle.focus(), k.stopPropagation();
                case tt.ARROW_RIGHT:
                case tt.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    Z(p),
                    k.preventDefault()
                  );
                case tt.ARROW_LEFT:
                case tt.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    Z(p),
                    k.preventDefault()
                  );
              }
          };
        }
        function Z(p) {
          p.links[p.selectedIdx] && p.links[p.selectedIdx].focus();
        }
        function m(p) {
          var k = te(p, Ub);
          return function (W) {
            if (!a) {
              if (!p.open)
                switch (W.keyCode) {
                  case tt.ARROW_UP:
                  case tt.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case tt.SPACE:
                case tt.ENTER:
                  return k(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function I(p) {
          return r(function (k) {
            var { relatedTarget: W, target: C } = k,
              Q = p.el[0],
              le = Q.contains(W) || Q.contains(C);
            return le || S(p), k.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var Hb = c((Rs) => {
    "use strict";
    Object.defineProperty(Rs, "__esModule", { value: !0 });
    Rs.default = kk;
    function kk(e, t, r, n, i, o, a, s, u, d, h, l, E) {
      return function (v) {
        e(v);
        var g = v.form,
          _ = {
            name: g.attr("data-name") || g.attr("name") || "Untitled Form",
            pageId: g.attr("data-wf-page-id") || "",
            elementId: g.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              g.html()
            ),
            trackingCookies: n(),
          };
        let A = g.attr("data-wf-flow");
        A && (_.wfFlow = A), i(v);
        var w = o(g, _.fields);
        if (w) return a(w);
        if (((_.fileUploads = s(g)), u(v), !d)) {
          h(v);
          return;
        }
        l.ajax({
          url: E,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (N) {
            N && N.code === 200 && (v.success = !0), h(v);
          })
          .fail(function () {
            h(v);
          });
      };
    }
  });
  var Xb = c((pz, Wb) => {
    "use strict";
    var Li = Ne();
    Li.define(
      "forms",
      (Wb.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          d = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          l = window.alert,
          E = Li.env(),
          v,
          g,
          _,
          A = /list-manage[1-9]?.com/i,
          w = t.debounce(function () {
            l(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              N(), !E && !v && M();
            };
        function N() {
          (u = e("html").attr("data-wf-site")),
            (g = "https://webflow.com/api/v1/form/" + u),
            a &&
              g.indexOf("https://webflow.com") >= 0 &&
              (g = g.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (_ = `${g}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(R);
        }
        function R(U, H) {
          var Z = e(H),
            m = e.data(H, s);
          m || (m = e.data(H, s, { form: Z })), F(m);
          var I = Z.closest("div.w-form");
          (m.done = I.find("> .w-form-done")),
            (m.fail = I.find("> .w-form-fail")),
            (m.fileUploads = I.find(".w-file-upload")),
            m.fileUploads.each(function (W) {
              V(W, m);
            });
          var p =
            m.form.attr("aria-label") || m.form.attr("data-name") || "Form";
          m.done.attr("aria-label") || m.form.attr("aria-label", p),
            m.done.attr("tabindex", "-1"),
            m.done.attr("role", "region"),
            m.done.attr("aria-label") ||
              m.done.attr("aria-label", p + " success"),
            m.fail.attr("tabindex", "-1"),
            m.fail.attr("role", "region"),
            m.fail.attr("aria-label") ||
              m.fail.attr("aria-label", p + " failure");
          var k = (m.action = Z.attr("action"));
          if (
            ((m.handler = null),
            (m.redirect = Z.attr("data-redirect")),
            A.test(k))
          ) {
            m.handler = y;
            return;
          }
          if (!k) {
            if (u) {
              m.handler = (() => {
                let W = Hb().default;
                return W(F, o, Li, te, G, j, l, z, D, u, L, e, g);
              })();
              return;
            }
            w();
          }
        }
        function M() {
          (v = !0),
            n.on("submit", s + " form", function (W) {
              var C = e.data(this, s);
              C.handler && ((C.evt = W), C.handler(C));
            });
          let U = ".w-checkbox-input",
            H = ".w-radio-input",
            Z = "w--redirected-checked",
            m = "w--redirected-focus",
            I = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            k = [
              ["checkbox", U],
              ["radio", H],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + U + ")",
            (W) => {
              e(W.target).siblings(U).toggleClass(Z);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${U})`).map((Q, le) =>
                e(le).siblings(H).removeClass(Z)
              );
              let C = e(W.target);
              C.hasClass("w-radio-input") || C.siblings(H).addClass(Z);
            }),
            k.forEach(([W, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${W}"]:not(` + C + ")",
                (Q) => {
                  e(Q.target).siblings(C).addClass(m),
                    e(Q.target).filter(p).siblings(C).addClass(I);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${W}"]:not(` + C + ")",
                  (Q) => {
                    e(Q.target).siblings(C).removeClass(`${m} ${I}`);
                  }
                );
            });
        }
        function F(U) {
          var H = (U.btn = U.form.find(':input[type="submit"]'));
          (U.wait = U.btn.attr("data-wait") || null),
            (U.success = !1),
            H.prop("disabled", !1),
            U.label && H.val(U.label);
        }
        function D(U) {
          var H = U.btn,
            Z = U.wait;
          H.prop("disabled", !0), Z && ((U.label = H.val()), H.val(Z));
        }
        function j(U, H) {
          var Z = null;
          return (
            (H = H || {}),
            U.find(':input:not([type="submit"]):not([type="file"])').each(
              function (m, I) {
                var p = e(I),
                  k = p.attr("type"),
                  W =
                    p.attr("data-name") || p.attr("name") || "Field " + (m + 1),
                  C = p.val();
                if (k === "checkbox") C = p.is(":checked");
                else if (k === "radio") {
                  if (H[W] === null || typeof H[W] == "string") return;
                  C =
                    U.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (H[W] = C),
                  (Z = Z || X(p, k, W, C));
              }
            ),
            Z
          );
        }
        function z(U) {
          var H = {};
          return (
            U.find(':input[type="file"]').each(function (Z, m) {
              var I = e(m),
                p = I.attr("data-name") || I.attr("name") || "File " + (Z + 1),
                k = I.attr("data-value");
              typeof k == "string" && (k = e.trim(k)), (H[p] = k);
            }),
            H
          );
        }
        let $ = { _mkto_trk: "marketo" };
        function te() {
          return document.cookie.split("; ").reduce(function (H, Z) {
            let m = Z.split("="),
              I = m[0];
            if (I in $) {
              let p = $[I],
                k = m.slice(1).join("=");
              H[p] = k;
            }
            return H;
          }, {});
        }
        function X(U, H, Z, m) {
          var I = null;
          return (
            H === "password"
              ? (I = "Passwords cannot be submitted.")
              : U.attr("required")
              ? m
                ? d.test(U.attr("type")) &&
                  (h.test(m) ||
                    (I = "Please enter a valid email address for: " + Z))
                : (I = "Please fill out the required field: " + Z)
              : Z === "g-recaptcha-response" &&
                !m &&
                (I = "Please confirm you\u2019re not a robot."),
            I
          );
        }
        function S(U) {
          G(U), L(U);
        }
        function y(U) {
          F(U);
          var H = U.form,
            Z = {};
          if (/^https/.test(o.href) && !/^https/.test(U.action)) {
            H.attr("method", "post");
            return;
          }
          G(U);
          var m = j(H, Z);
          if (m) return l(m);
          D(U);
          var I;
          t.each(Z, function (C, Q) {
            d.test(Q) && (Z.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(Q) && (I = C),
              /^(first[ _-]?name)$/i.test(Q) && (Z.FNAME = C),
              /^(last[ _-]?name)$/i.test(Q) && (Z.LNAME = C);
          }),
            I &&
              !Z.FNAME &&
              ((I = I.split(" ")),
              (Z.FNAME = I[0]),
              (Z.LNAME = Z.LNAME || I[1]));
          var p = U.action.replace("/post?", "/post-json?") + "&c=?",
            k = p.indexOf("u=") + 2;
          k = p.substring(k, p.indexOf("&", k));
          var W = p.indexOf("id=") + 3;
          (W = p.substring(W, p.indexOf("&", W))),
            (Z["b_" + k + "_" + W] = ""),
            e
              .ajax({ url: p, data: Z, dataType: "jsonp" })
              .done(function (C) {
                (U.success = C.result === "success" || /already/.test(C.msg)),
                  U.success || console.info("MailChimp error: " + C.msg),
                  L(U);
              })
              .fail(function () {
                L(U);
              });
        }
        function L(U) {
          var H = U.form,
            Z = U.redirect,
            m = U.success;
          if (m && Z) {
            Li.location(Z);
            return;
          }
          U.done.toggle(m),
            U.fail.toggle(!m),
            m ? U.done.focus() : U.fail.focus(),
            H.toggle(!m),
            F(U);
        }
        function G(U) {
          U.evt && U.evt.preventDefault(), (U.evt = null);
        }
        function V(U, H) {
          if (!H.fileUploads || !H.fileUploads[U]) return;
          var Z,
            m = e(H.fileUploads[U]),
            I = m.find("> .w-file-upload-default"),
            p = m.find("> .w-file-upload-uploading"),
            k = m.find("> .w-file-upload-success"),
            W = m.find("> .w-file-upload-error"),
            C = I.find(".w-file-upload-input"),
            Q = I.find(".w-file-upload-label"),
            le = Q.children(),
            oe = W.find(".w-file-upload-error-msg"),
            b = k.find(".w-file-upload-file"),
            B = k.find(".w-file-remove-link"),
            ee = b.find(".w-file-upload-file-name"),
            Y = oe.attr("data-w-size-error"),
            de = oe.attr("data-w-type-error"),
            Xe = oe.attr("data-w-generic-error");
          if (
            (E ||
              Q.on("click keydown", function (x) {
                (x.type === "keydown" && x.which !== 13 && x.which !== 32) ||
                  (x.preventDefault(), C.click());
              }),
            Q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            E)
          )
            C.on("click", function (x) {
              x.preventDefault();
            }),
              Q.on("click", function (x) {
                x.preventDefault();
              }),
              le.on("click", function (x) {
                x.preventDefault();
              });
          else {
            B.on("click keydown", function (x) {
              if (x.type === "keydown") {
                if (x.which !== 13 && x.which !== 32) return;
                x.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                ee.html(""),
                I.toggle(!0),
                k.toggle(!1),
                Q.focus();
            }),
              C.on("change", function (x) {
                (Z = x.target && x.target.files && x.target.files[0]),
                  Z &&
                    (I.toggle(!1),
                    W.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    ee.text(Z.name),
                    P() || D(H),
                    (H.fileUploads[U].uploading = !0),
                    J(Z, T));
              });
            var De = Q.outerHeight();
            C.height(De), C.width(1);
          }
          function f(x) {
            var q = x.responseJSON && x.responseJSON.msg,
              re = Xe;
            typeof q == "string" && q.indexOf("InvalidFileTypeError") === 0
              ? (re = de)
              : typeof q == "string" &&
                q.indexOf("MaxFileSizeError") === 0 &&
                (re = Y),
              oe.text(re),
              C.removeAttr("data-value"),
              C.val(""),
              p.toggle(!1),
              I.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (H.fileUploads[U].uploading = !1),
              P() || F(H);
          }
          function T(x, q) {
            if (x) return f(x);
            var re = q.fileName,
              ae = q.postData,
              ge = q.fileId,
              K = q.s3Url;
            C.attr("data-value", ge), ne(K, ae, Z, re, O);
          }
          function O(x) {
            if (x) return f(x);
            p.toggle(!1),
              k.css("display", "inline-block"),
              k.focus(),
              (H.fileUploads[U].uploading = !1),
              P() || F(H);
          }
          function P() {
            var x = (H.fileUploads && H.fileUploads.toArray()) || [];
            return x.some(function (q) {
              return q.uploading;
            });
          }
        }
        function J(U, H) {
          var Z = new URLSearchParams({ name: U.name, size: U.size });
          e.ajax({ type: "GET", url: `${_}?${Z}`, crossDomain: !0 })
            .done(function (m) {
              H(null, m);
            })
            .fail(function (m) {
              H(m);
            });
        }
        function ne(U, H, Z, m, I) {
          var p = new FormData();
          for (var k in H) p.append(k, H[k]);
          p.append("file", Z, m),
            e
              .ajax({
                type: "POST",
                url: U,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                I(null);
              })
              .fail(function (W) {
                I(W);
              });
        }
        return r;
      })
    );
  });
  var zb = c((vz, jb) => {
    "use strict";
    var Ls = Ne(),
      Bb = "w-condition-invisible",
      Hk = "." + Bb;
    function Wk(e) {
      return e.filter(function (t) {
        return !an(t);
      });
    }
    function an(e) {
      return !!(e.$el && e.$el.closest(Hk).length);
    }
    function Ns(e, t) {
      for (var r = e; r >= 0; r--) if (!an(t[r])) return r;
      return -1;
    }
    function Ps(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!an(t[r])) return r;
      return -1;
    }
    function Xk(e, t) {
      return Ns(e - 1, t) === -1;
    }
    function Bk(e, t) {
      return Ps(e + 1, t) === -1;
    }
    function on(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function jk(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        u = /(^|\s+)/g,
        d = [],
        h,
        l,
        E,
        v = [];
      function g(m, I) {
        return (
          (d = o(m) ? m : [m]),
          l || g.build(),
          Wk(d).length > 1 &&
            ((l.items = l.empty),
            d.forEach(function (p, k) {
              var W = H("thumbnail"),
                C = H("item")
                  .prop("tabIndex", 0)
                  .attr("aria-controls", "w-lightbox-view")
                  .attr("role", "tab")
                  .append(W);
              on(C, `show item ${k + 1} of ${d.length}`),
                an(p) && C.addClass(Bb),
                (l.items = l.items.add(C)),
                te(p.thumbnailUrl || p.url, function (Q) {
                  Q.prop("width") > Q.prop("height")
                    ? V(Q, "wide")
                    : V(Q, "tall"),
                    W.append(V(Q, "thumbnail-image"));
                });
            }),
            l.strip.empty().append(l.items),
            V(l.content, "group")),
          i(J(l.lightbox, "hide").trigger("focus"))
            .add("opacity .3s")
            .start({ opacity: 1 }),
          V(l.html, "noscroll"),
          g.show(I || 0)
        );
      }
      (g.build = function () {
        return (
          g.destroy(),
          (l = { html: r(t.documentElement), empty: r() }),
          (l.arrowLeft = H("control left inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (l.arrowRight = H("control right inactive")
            .attr("role", "button")
            .attr("aria-hidden", !0)
            .attr("aria-controls", "w-lightbox-view")),
          (l.close = H("control close").attr("role", "button")),
          on(l.arrowLeft, "previous image"),
          on(l.arrowRight, "next image"),
          on(l.close, "close lightbox"),
          (l.spinner = H("spinner")
            .attr("role", "progressbar")
            .attr("aria-live", "polite")
            .attr("aria-hidden", !1)
            .attr("aria-busy", !0)
            .attr("aria-valuemin", 0)
            .attr("aria-valuemax", 100)
            .attr("aria-valuenow", 0)
            .attr("aria-valuetext", "Loading image")),
          (l.strip = H("strip").attr("role", "tablist")),
          (E = new y(l.spinner, L("hide"))),
          (l.content = H("content").append(
            l.spinner,
            l.arrowLeft,
            l.arrowRight,
            l.close
          )),
          (l.container = H("container").append(l.content, l.strip)),
          (l.lightbox = H("backdrop hide").append(l.container)),
          l.strip.on("click", G("item"), R),
          l.content
            .on("swipe", M)
            .on("click", G("left"), A)
            .on("click", G("right"), w)
            .on("click", G("close"), N)
            .on("click", G("image, caption"), w),
          l.container.on("click", G("view"), N).on("dragstart", G("img"), D),
          l.lightbox.on("keydown", j).on("focusin", F),
          r(n).append(l.lightbox),
          g
        );
      }),
        (g.destroy = function () {
          l && (J(l.html, "noscroll"), l.lightbox.remove(), (l = void 0));
        }),
        (g.show = function (m) {
          if (m !== h) {
            var I = d[m];
            if (!I) return g.hide();
            if (an(I)) {
              if (m < h) {
                var p = Ns(m - 1, d);
                m = p > -1 ? p : m;
              } else {
                var k = Ps(m + 1, d);
                m = k > -1 ? k : m;
              }
              I = d[m];
            }
            var W = h;
            (h = m),
              l.spinner
                .attr("aria-hidden", !1)
                .attr("aria-busy", !0)
                .attr("aria-valuenow", 0)
                .attr("aria-valuetext", "Loading image"),
              E.show();
            var C = (I.html && Z(I.width, I.height)) || I.url;
            return (
              te(C, function (Q) {
                if (m !== h) return;
                var le = H("figure", "figure").append(V(Q, "image")),
                  oe = H("frame").append(le),
                  b = H("view")
                    .prop("tabIndex", 0)
                    .attr("id", "w-lightbox-view")
                    .append(oe),
                  B,
                  ee;
                I.html &&
                  ((B = r(I.html)),
                  (ee = B.is("iframe")),
                  ee && B.on("load", Y),
                  le.append(V(B, "embed"))),
                  I.caption &&
                    le.append(H("caption", "figcaption").text(I.caption)),
                  l.spinner.before(b),
                  ee || Y();
                function Y() {
                  if (
                    (l.spinner
                      .attr("aria-hidden", !0)
                      .attr("aria-busy", !1)
                      .attr("aria-valuenow", 100)
                      .attr("aria-valuetext", "Loaded image"),
                    E.hide(),
                    m !== h)
                  ) {
                    b.remove();
                    return;
                  }
                  let de = Xk(m, d);
                  ne(l.arrowLeft, "inactive", de),
                    U(l.arrowLeft, de),
                    de && l.arrowLeft.is(":focus") && l.arrowRight.focus();
                  let Xe = Bk(m, d);
                  if (
                    (ne(l.arrowRight, "inactive", Xe),
                    U(l.arrowRight, Xe),
                    Xe && l.arrowRight.is(":focus") && l.arrowLeft.focus(),
                    l.view
                      ? (i(l.view)
                          .add("opacity .3s")
                          .start({ opacity: 0 })
                          .then(X(l.view)),
                        i(b)
                          .add("opacity .3s")
                          .add("transform .3s")
                          .set({ x: m > W ? "80px" : "-80px" })
                          .start({ opacity: 1, x: 0 }))
                      : b.css("opacity", 1),
                    (l.view = b),
                    l.view.prop("tabIndex", 0),
                    l.items)
                  ) {
                    J(l.items, "active"), l.items.removeAttr("aria-selected");
                    var De = l.items.eq(m);
                    V(De, "active"), De.attr("aria-selected", !0), S(De);
                  }
                }
              }),
              l.close.prop("tabIndex", 0),
              r(":focus").addClass("active-lightbox"),
              v.length === 0 &&
                (r("body")
                  .children()
                  .each(function () {
                    r(this).hasClass("w-lightbox-backdrop") ||
                      r(this).is("script") ||
                      (v.push({
                        node: r(this),
                        hidden: r(this).attr("aria-hidden"),
                        tabIndex: r(this).attr("tabIndex"),
                      }),
                      r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
                  }),
                l.close.focus()),
              g
            );
          }
        }),
        (g.hide = function () {
          return (
            i(l.lightbox).add("opacity .3s").start({ opacity: 0 }).then($), g
          );
        }),
        (g.prev = function () {
          var m = Ns(h - 1, d);
          m > -1 && g.show(m);
        }),
        (g.next = function () {
          var m = Ps(h + 1, d);
          m > -1 && g.show(m);
        });
      function _(m) {
        return function (I) {
          this === I.target && (I.stopPropagation(), I.preventDefault(), m());
        };
      }
      var A = _(g.prev),
        w = _(g.next),
        N = _(g.hide),
        R = function (m) {
          var I = r(this).index();
          m.preventDefault(), g.show(I);
        },
        M = function (m, I) {
          m.preventDefault(),
            I.direction === "left"
              ? g.next()
              : I.direction === "right" && g.prev();
        },
        F = function () {
          this.focus();
        };
      function D(m) {
        m.preventDefault();
      }
      function j(m) {
        var I = m.keyCode;
        I === 27 || z(I, "close")
          ? g.hide()
          : I === 37 || z(I, "left")
          ? g.prev()
          : I === 39 || z(I, "right")
          ? g.next()
          : z(I, "item") && r(":focus").click();
      }
      function z(m, I) {
        if (m !== 13 && m !== 32) return !1;
        var p = r(":focus").attr("class"),
          k = L(I).trim();
        return p.includes(k);
      }
      function $() {
        l &&
          (l.strip.scrollLeft(0).empty(),
          J(l.html, "noscroll"),
          V(l.lightbox, "hide"),
          l.view && l.view.remove(),
          J(l.content, "group"),
          V(l.arrowLeft, "inactive"),
          V(l.arrowRight, "inactive"),
          (h = l.view = void 0),
          v.forEach(function (m) {
            var I = m.node;
            I &&
              (m.hidden
                ? I.attr("aria-hidden", m.hidden)
                : I.removeAttr("aria-hidden"),
              m.tabIndex
                ? I.attr("tabIndex", m.tabIndex)
                : I.removeAttr("tabIndex"));
          }),
          (v = []),
          r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function te(m, I) {
        var p = H("img", "img");
        return (
          p.one("load", function () {
            I(p);
          }),
          p.attr("src", m),
          p
        );
      }
      function X(m) {
        return function () {
          m.remove();
        };
      }
      function S(m) {
        var I = m.get(0),
          p = l.strip.get(0),
          k = I.offsetLeft,
          W = I.clientWidth,
          C = p.scrollLeft,
          Q = p.clientWidth,
          le = p.scrollWidth - Q,
          oe;
        k < C
          ? (oe = Math.max(0, k + W - Q))
          : k + W > Q + C && (oe = Math.min(k, le)),
          oe != null &&
            i(l.strip).add("scroll-left 500ms").start({ "scroll-left": oe });
      }
      function y(m, I, p) {
        (this.$element = m),
          (this.className = I),
          (this.delay = p || 200),
          this.hide();
      }
      (y.prototype.show = function () {
        var m = this;
        m.timeoutId ||
          (m.timeoutId = setTimeout(function () {
            m.$element.removeClass(m.className), delete m.timeoutId;
          }, m.delay));
      }),
        (y.prototype.hide = function () {
          var m = this;
          if (m.timeoutId) {
            clearTimeout(m.timeoutId), delete m.timeoutId;
            return;
          }
          m.$element.addClass(m.className);
        });
      function L(m, I) {
        return m.replace(u, (I ? " ." : " ") + s);
      }
      function G(m) {
        return L(m, !0);
      }
      function V(m, I) {
        return m.addClass(L(I));
      }
      function J(m, I) {
        return m.removeClass(L(I));
      }
      function ne(m, I, p) {
        return m.toggleClass(L(I), p);
      }
      function U(m, I) {
        return m.attr("aria-hidden", I).attr("tabIndex", I ? -1 : 0);
      }
      function H(m, I) {
        return V(r(t.createElement(I || "div")), m);
      }
      function Z(m, I) {
        var p =
          '<svg xmlns="http://www.w3.org/2000/svg" width="' +
          m +
          '" height="' +
          I +
          '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(p);
      }
      return (
        (function () {
          var m = e.navigator.userAgent,
            I = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
            p = m.match(I),
            k = m.indexOf("Android ") > -1 && m.indexOf("Chrome") === -1;
          if (!k && (!p || p[2] > 7)) return;
          var W = t.createElement("style");
          t.head.appendChild(W), e.addEventListener("resize", C, !0);
          function C() {
            var Q = e.innerHeight,
              le = e.innerWidth,
              oe =
                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                Q +
                "px}.w-lightbox-view {width:" +
                le +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.86 * Q +
                "px}.w-lightbox-image {max-width:" +
                le +
                "px;max-height:" +
                Q +
                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                0.86 * Q +
                "px}.w-lightbox-strip {padding: 0 " +
                0.01 * Q +
                "px}.w-lightbox-item {width:" +
                0.1 * Q +
                "px;padding:" +
                0.02 * Q +
                "px " +
                0.01 * Q +
                "px}.w-lightbox-thumbnail {height:" +
                0.1 * Q +
                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                0.96 * Q +
                "px}.w-lightbox-content {margin-top:" +
                0.02 * Q +
                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                0.84 * Q +
                "px}.w-lightbox-image {max-width:" +
                0.96 * le +
                "px;max-height:" +
                0.96 * Q +
                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                0.823 * le +
                "px;max-height:" +
                0.84 * Q +
                "px}}";
            W.textContent = oe;
          }
          C();
        })(),
        g
      );
    }
    Ls.define(
      "lightbox",
      (jb.exports = function (e) {
        var t = {},
          r = Ls.env(),
          n = jk(window, document, e, r ? "#lightbox-mountpoint" : "body"),
          i = e(document),
          o,
          a,
          s = ".w-lightbox",
          u;
        t.ready = t.design = t.preview = d;
        function d() {
          (a = r && Ls.env("design")),
            n.destroy(),
            (u = {}),
            (o = i.find(s)),
            o.webflowLightBox(),
            o.each(function () {
              on(e(this), "open lightbox"),
                e(this).attr("aria-haspopup", "dialog");
            });
        }
        jQuery.fn.extend({
          webflowLightBox: function () {
            var v = this;
            e.each(v, function (g, _) {
              var A = e.data(_, s);
              A ||
                (A = e.data(_, s, {
                  el: e(_),
                  mode: "images",
                  images: [],
                  embed: "",
                })),
                A.el.off(s),
                h(A),
                a
                  ? A.el.on("setting" + s, h.bind(null, A))
                  : A.el.on("click" + s, l(A)).on("click" + s, function (w) {
                      w.preventDefault();
                    });
            });
          },
        });
        function h(v) {
          var g = v.el.children(".w-json").html(),
            _,
            A;
          if (!g) {
            v.items = [];
            return;
          }
          try {
            g = JSON.parse(g);
          } catch (w) {
            console.error("Malformed lightbox JSON configuration.", w);
          }
          E(g),
            g.items.forEach(function (w) {
              w.$el = v.el;
            }),
            (_ = g.group),
            _
              ? ((A = u[_]),
                A || (A = u[_] = []),
                (v.items = A),
                g.items.length &&
                  ((v.index = A.length), A.push.apply(A, g.items)))
              : ((v.items = g.items), (v.index = 0));
        }
        function l(v) {
          return function () {
            v.items.length && n(v.items, v.index || 0);
          };
        }
        function E(v) {
          v.images &&
            (v.images.forEach(function (g) {
              g.type = "image";
            }),
            (v.items = v.images)),
            v.embed && ((v.embed.type = "video"), (v.items = [v.embed])),
            v.groupId && (v.group = v.groupId);
        }
        return t;
      })
    );
  });
  var Yb = c((gz, Kb) => {
    "use strict";
    var At = Ne(),
      zk = br(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    At.define(
      "navbar",
      (Kb.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          d,
          h,
          l = At.env(),
          E = '<div class="w-nav-overlay" data-wf-ignore />',
          v = ".w-nav",
          g = "w--open",
          _ = "w--nav-dropdown-open",
          A = "w--nav-dropdown-toggle-open",
          w = "w--nav-dropdown-list-open",
          N = "w--nav-link-open",
          R = zk.triggers,
          M = e();
        (r.ready = r.design = r.preview = F),
          (r.destroy = function () {
            (M = e()), D(), u && u.length && u.each(te);
          });
        function F() {
          (d = l && At.env("design")),
            (h = At.env("editor")),
            (s = e(document.body)),
            (u = o.find(v)),
            u.length && (u.each($), D(), j());
        }
        function D() {
          At.resize.off(z);
        }
        function j() {
          At.resize.on(z);
        }
        function z() {
          u.each(I);
        }
        function $(b, B) {
          var ee = e(B),
            Y = e.data(B, v);
          Y ||
            (Y = e.data(B, v, {
              open: !1,
              el: ee,
              config: {},
              selectedIdx: -1,
            })),
            (Y.menu = ee.find(".w-nav-menu")),
            (Y.links = Y.menu.find(".w-nav-link")),
            (Y.dropdowns = Y.menu.find(".w-dropdown")),
            (Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle")),
            (Y.dropdownList = Y.menu.find(".w-dropdown-list")),
            (Y.button = ee.find(".w-nav-button")),
            (Y.container = ee.find(".w-container")),
            (Y.overlayContainerId = "w-nav-overlay-" + b),
            (Y.outside = Z(Y));
          var de = ee.find(".w-nav-brand");
          de &&
            de.attr("href") === "/" &&
            de.attr("aria-label") == null &&
            de.attr("aria-label", "home"),
            Y.button.attr("style", "-webkit-user-select: text;"),
            Y.button.attr("aria-label") == null &&
              Y.button.attr("aria-label", "menu"),
            Y.button.attr("role", "button"),
            Y.button.attr("tabindex", "0"),
            Y.button.attr("aria-controls", Y.overlayContainerId),
            Y.button.attr("aria-haspopup", "menu"),
            Y.button.attr("aria-expanded", "false"),
            Y.el.off(v),
            Y.button.off(v),
            Y.menu.off(v),
            y(Y),
            d
              ? (X(Y), Y.el.on("setting" + v, L(Y)))
              : (S(Y),
                Y.button.on("click" + v, U(Y)),
                Y.menu.on("click" + v, "a", H(Y)),
                Y.button.on("keydown" + v, G(Y)),
                Y.el.on("keydown" + v, V(Y))),
            I(b, B);
        }
        function te(b, B) {
          var ee = e.data(B, v);
          ee && (X(ee), e.removeData(B, v));
        }
        function X(b) {
          b.overlay && (oe(b, !0), b.overlay.remove(), (b.overlay = null));
        }
        function S(b) {
          b.overlay ||
            ((b.overlay = e(E).appendTo(b.el)),
            b.overlay.attr("id", b.overlayContainerId),
            (b.parent = b.menu.parent()),
            oe(b, !0));
        }
        function y(b) {
          var B = {},
            ee = b.config || {},
            Y = (B.animation = b.el.attr("data-animation") || "default");
          (B.animOver = /^over/.test(Y)),
            (B.animDirect = /left$/.test(Y) ? -1 : 1),
            ee.animation !== Y && b.open && t.defer(ne, b),
            (B.easing = b.el.attr("data-easing") || "ease"),
            (B.easing2 = b.el.attr("data-easing2") || "ease");
          var de = b.el.attr("data-duration");
          (B.duration = de != null ? Number(de) : 400),
            (B.docHeight = b.el.attr("data-doc-height")),
            (b.config = B);
        }
        function L(b) {
          return function (B, ee) {
            ee = ee || {};
            var Y = i.width();
            y(b),
              ee.open === !0 && Q(b, !0),
              ee.open === !1 && oe(b, !0),
              b.open &&
                t.defer(function () {
                  Y !== i.width() && ne(b);
                });
          };
        }
        function G(b) {
          return function (B) {
            switch (B.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return U(b)(), B.preventDefault(), B.stopPropagation();
              case Se.ESCAPE:
                return oe(b), B.preventDefault(), B.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return b.open
                  ? (B.keyCode === Se.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    J(b),
                    B.preventDefault(),
                    B.stopPropagation())
                  : (B.preventDefault(), B.stopPropagation());
            }
          };
        }
        function V(b) {
          return function (B) {
            if (b.open)
              switch (
                ((b.selectedIdx = b.links.index(document.activeElement)),
                B.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    B.keyCode === Se.END
                      ? (b.selectedIdx = b.links.length - 1)
                      : (b.selectedIdx = 0),
                    J(b),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(b),
                    b.button.focus(),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (b.selectedIdx = Math.max(-1, b.selectedIdx - 1)),
                    J(b),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (b.selectedIdx = Math.min(
                      b.links.length - 1,
                      b.selectedIdx + 1
                    )),
                    J(b),
                    B.preventDefault(),
                    B.stopPropagation()
                  );
              }
          };
        }
        function J(b) {
          if (b.links[b.selectedIdx]) {
            var B = b.links[b.selectedIdx];
            B.focus(), H(B);
          }
        }
        function ne(b) {
          b.open && (oe(b, !0), Q(b, !0));
        }
        function U(b) {
          return a(function () {
            b.open ? oe(b) : Q(b);
          });
        }
        function H(b) {
          return function (B) {
            var ee = e(this),
              Y = ee.attr("href");
            if (!At.validClick(B.currentTarget)) {
              B.preventDefault();
              return;
            }
            Y && Y.indexOf("#") === 0 && b.open && oe(b);
          };
        }
        function Z(b) {
          return (
            b.outside && o.off("click" + v, b.outside),
            function (B) {
              var ee = e(B.target);
              (h && ee.closest(".w-editor-bem-EditorOverlay").length) ||
                m(b, ee);
            }
          );
        }
        var m = a(function (b, B) {
          if (b.open) {
            var ee = B.closest(".w-nav-menu");
            b.menu.is(ee) || oe(b);
          }
        });
        function I(b, B) {
          var ee = e.data(B, v),
            Y = (ee.collapsed = ee.button.css("display") !== "none");
          if ((ee.open && !Y && !d && oe(ee, !0), ee.container.length)) {
            var de = k(ee);
            ee.links.each(de), ee.dropdowns.each(de);
          }
          ee.open && le(ee);
        }
        var p = "max-width";
        function k(b) {
          var B = b.container.css(p);
          return (
            B === "none" && (B = ""),
            function (ee, Y) {
              (Y = e(Y)), Y.css(p, ""), Y.css(p) === "none" && Y.css(p, B);
            }
          );
        }
        function W(b, B) {
          B.setAttribute("data-nav-menu-open", "");
        }
        function C(b, B) {
          B.removeAttribute("data-nav-menu-open");
        }
        function Q(b, B) {
          if (b.open) return;
          (b.open = !0),
            b.menu.each(W),
            b.links.addClass(N),
            b.dropdowns.addClass(_),
            b.dropdownToggle.addClass(A),
            b.dropdownList.addClass(w),
            b.button.addClass(g);
          var ee = b.config,
            Y = ee.animation;
          (Y === "none" || !n.support.transform || ee.duration <= 0) &&
            (B = !0);
          var de = le(b),
            Xe = b.menu.outerHeight(!0),
            De = b.menu.outerWidth(!0),
            f = b.el.height(),
            T = b.el[0];
          if (
            (I(0, T),
            R.intro(0, T),
            At.redraw.up(),
            d || o.on("click" + v, b.outside),
            B)
          ) {
            x();
            return;
          }
          var O = "transform " + ee.duration + "ms " + ee.easing;
          if (
            (b.overlay &&
              ((M = b.menu.prev()), b.overlay.show().append(b.menu)),
            ee.animOver)
          ) {
            n(b.menu)
              .add(O)
              .set({ x: ee.animDirect * De, height: de })
              .start({ x: 0 })
              .then(x),
              b.overlay && b.overlay.width(De);
            return;
          }
          var P = f + Xe;
          n(b.menu).add(O).set({ y: -P }).start({ y: 0 }).then(x);
          function x() {
            b.button.attr("aria-expanded", "true");
          }
        }
        function le(b) {
          var B = b.config,
            ee = B.docHeight ? o.height() : s.height();
          return (
            B.animOver
              ? b.menu.height(ee)
              : b.el.css("position") !== "fixed" &&
                (ee -= b.el.outerHeight(!0)),
            b.overlay && b.overlay.height(ee),
            ee
          );
        }
        function oe(b, B) {
          if (!b.open) return;
          (b.open = !1), b.button.removeClass(g);
          var ee = b.config;
          if (
            ((ee.animation === "none" ||
              !n.support.transform ||
              ee.duration <= 0) &&
              (B = !0),
            R.outro(0, b.el[0]),
            o.off("click" + v, b.outside),
            B)
          ) {
            n(b.menu).stop(), T();
            return;
          }
          var Y = "transform " + ee.duration + "ms " + ee.easing2,
            de = b.menu.outerHeight(!0),
            Xe = b.menu.outerWidth(!0),
            De = b.el.height();
          if (ee.animOver) {
            n(b.menu)
              .add(Y)
              .start({ x: Xe * ee.animDirect })
              .then(T);
            return;
          }
          var f = De + de;
          n(b.menu).add(Y).start({ y: -f }).then(T);
          function T() {
            b.menu.height(""),
              n(b.menu).set({ x: 0, y: 0 }),
              b.menu.each(C),
              b.links.removeClass(N),
              b.dropdowns.removeClass(_),
              b.dropdownToggle.removeClass(A),
              b.dropdownList.removeClass(w),
              b.overlay &&
                b.overlay.children().length &&
                (M.length ? b.menu.insertAfter(M) : b.menu.prependTo(b.parent),
                b.overlay.attr("style", "").hide()),
              b.el.triggerHandler("w-close"),
              b.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var Qb = c((hz, $b) => {
    "use strict";
    var St = Ne(),
      Kk = br();
    St.define(
      "tabs",
      ($b.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = St.env,
          s = a.safari,
          u = a(),
          d = "data-w-tab",
          h = "data-w-pane",
          l = ".w-tabs",
          E = "w--current",
          v = "w--tab-active",
          g = Kk.triggers,
          _ = !1;
        (t.ready = t.design = t.preview = A),
          (t.redraw = function () {
            (_ = !0), A(), (_ = !1);
          }),
          (t.destroy = function () {
            (i = n.find(l)), i.length && (i.each(R), w());
          });
        function A() {
          (o = u && St.env("design")),
            (i = n.find(l)),
            i.length &&
              (i.each(M), St.env("preview") && !_ && i.each(R), w(), N());
        }
        function w() {
          St.redraw.off(t.redraw);
        }
        function N() {
          St.redraw.on(t.redraw);
        }
        function R(X, S) {
          var y = e.data(S, l);
          y &&
            (y.links && y.links.each(g.reset),
            y.panes && y.panes.each(g.reset));
        }
        function M(X, S) {
          var y = l.substr(1) + "-" + X,
            L = e(S),
            G = e.data(S, l);
          if (
            (G || (G = e.data(S, l, { el: L, config: {} })),
            (G.current = null),
            (G.tabIdentifier = y + "-" + d),
            (G.paneIdentifier = y + "-" + h),
            (G.menu = L.children(".w-tab-menu")),
            (G.links = G.menu.children(".w-tab-link")),
            (G.content = L.children(".w-tab-content")),
            (G.panes = G.content.children(".w-tab-pane")),
            G.el.off(l),
            G.links.off(l),
            G.menu.attr("role", "tablist"),
            G.links.attr("tabindex", "-1"),
            F(G),
            !o)
          ) {
            G.links.on("click" + l, j(G)), G.links.on("keydown" + l, z(G));
            var V = G.links.filter("." + E),
              J = V.attr(d);
            J && $(G, { tab: J, immediate: !0 });
          }
        }
        function F(X) {
          var S = {};
          S.easing = X.el.attr("data-easing") || "ease";
          var y = parseInt(X.el.attr("data-duration-in"), 10);
          y = S.intro = y === y ? y : 0;
          var L = parseInt(X.el.attr("data-duration-out"), 10);
          (L = S.outro = L === L ? L : 0),
            (S.immediate = !y && !L),
            (X.config = S);
        }
        function D(X) {
          var S = X.current;
          return Array.prototype.findIndex.call(
            X.links,
            (y) => y.getAttribute(d) === S,
            null
          );
        }
        function j(X) {
          return function (S) {
            S.preventDefault();
            var y = S.currentTarget.getAttribute(d);
            y && $(X, { tab: y });
          };
        }
        function z(X) {
          return function (S) {
            var y = D(X),
              L = S.key,
              G = {
                ArrowLeft: y - 1,
                ArrowUp: y - 1,
                ArrowRight: y + 1,
                ArrowDown: y + 1,
                End: X.links.length - 1,
                Home: 0,
              };
            if (L in G) {
              S.preventDefault();
              var V = G[L];
              V === -1 && (V = X.links.length - 1),
                V === X.links.length && (V = 0);
              var J = X.links[V],
                ne = J.getAttribute(d);
              ne && $(X, { tab: ne });
            }
          };
        }
        function $(X, S) {
          S = S || {};
          var y = X.config,
            L = y.easing,
            G = S.tab;
          if (G !== X.current) {
            X.current = G;
            var V;
            X.links.each(function (I, p) {
              var k = e(p);
              if (S.immediate || y.immediate) {
                var W = X.panes[I];
                p.id || (p.id = X.tabIdentifier + "-" + I),
                  W.id || (W.id = X.paneIdentifier + "-" + I),
                  (p.href = "#" + W.id),
                  p.setAttribute("role", "tab"),
                  p.setAttribute("aria-controls", W.id),
                  p.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", p.id);
              }
              p.getAttribute(d) === G
                ? ((V = p),
                  k
                    .addClass(E)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(g.intro))
                : k.hasClass(E) &&
                  k
                    .removeClass(E)
                    .attr({ tabindex: "-1", "aria-selected": "false" })
                    .each(g.outro);
            });
            var J = [],
              ne = [];
            X.panes.each(function (I, p) {
              var k = e(p);
              p.getAttribute(d) === G ? J.push(p) : k.hasClass(v) && ne.push(p);
            });
            var U = e(J),
              H = e(ne);
            if (S.immediate || y.immediate) {
              U.addClass(v).each(g.intro),
                H.removeClass(v),
                _ || St.redraw.up();
              return;
            } else {
              var Z = window.scrollX,
                m = window.scrollY;
              V.focus(), window.scrollTo(Z, m);
            }
            H.length && y.outro
              ? (H.each(g.outro),
                r(H)
                  .add("opacity " + y.outro + "ms " + L, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => te(y, H, U)))
              : te(y, H, U);
          }
        }
        function te(X, S, y) {
          if (
            (S.removeClass(v).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
            y.addClass(v).each(g.intro),
            St.redraw.up(),
            !X.intro)
          )
            return r(y).set({ opacity: 1 });
          r(y)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + X.intro + "ms " + X.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  zs();
  Ys();
  Qs();
  eu();
  br();
  Nb();
  Mb();
  Db();
  Gb();
  kb();
  Xb();
  zb();
  Yb();
  Qb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "7ead33a9-179f-a32e-a4f7-638b7de09767",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "7ead33a9-179f-a32e-a4f7-638b7de09767",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1648940841429,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "6249dc37190a93d407e772ed|2dd64d2f-0042-1ed5-5782-945bed50f122",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "6249dc37190a93d407e772ed|2dd64d2f-0042-1ed5-5782-945bed50f122",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649974634254,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-3",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "2dd64d2f-0042-1ed5-5782-945bed50f122",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "2dd64d2f-0042-1ed5-5782-945bed50f122",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1649981569668,
    },
    "e-24": {
      id: "e-24",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-32" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a75",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a75",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1616629989650,
    },
    "e-26": {
      id: "e-26",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-63" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a61",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a61",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1616630152943,
    },
    "e-28": {
      id: "e-28",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-38" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7acf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7acf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1616630588631,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-51",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1583104697944,
    },
    "e-50": {
      id: "e-50",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-27" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a82",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a82",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1616629919317,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-45",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1583104697944,
    },
    "e-52": {
      id: "e-52",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-29" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a81",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a81",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1616629873415,
    },
    "e-62": {
      id: "e-62",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_BIG_EFFECT",
        instant: false,
        config: { actionListId: "growBigIn", autoStopEventId: "e-89" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b38",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b38",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1616630652891,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-74" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a9e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a9e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1616630568351,
    },
    "e-68": {
      id: "e-68",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-60" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".lp-heading-2",
        originalId:
          "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a72",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".lp-heading-2",
          originalId:
            "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a72",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1616630194419,
    },
    "e-69": {
      id: "e-69",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SHRINK_BIG_EFFECT",
        instant: false,
        config: { actionListId: "shrinkBigIn", autoStopEventId: "e-47" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b45",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7b45",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1616630772972,
    },
    "e-76": {
      id: "e-76",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-48" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a85",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7a85",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1616629948429,
    },
    "e-84": {
      id: "e-84",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-53" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7adc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ee4c9972-16c4-8149-c35c-d7bafe0f7adc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1616630319562,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-104" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|dc5eb2d0-c916-50a0-bcb9-5be2b9ffd0af",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|dc5eb2d0-c916-50a0-bcb9-5be2b9ffd0af",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1650150091287,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-106" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|da5547ba-e56e-2a73-b27c-9dd4e5f6c92f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|da5547ba-e56e-2a73-b27c-9dd4e5f6c92f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1650150091847,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-108" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|2af339ac-7e43-c870-238f-d1ef16e56e8a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|2af339ac-7e43-c870-238f-d1ef16e56e8a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1650150092226,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInTop", autoStopEventId: "e-110" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|56d38b1b-a077-c253-75af-e46366692ff9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|56d38b1b-a077-c253-75af-e46366692ff9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "TOP",
        effectIn: true,
      },
      createdOn: 1650150092679,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|a76f3147-af25-c4c7-9aac-fb8f34b1b65e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|a76f3147-af25-c4c7-9aac-fb8f34b1b65e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650150759994,
    },
    "e-112": {
      id: "e-112",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-111",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|a76f3147-af25-c4c7-9aac-fb8f34b1b65e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|a76f3147-af25-c4c7-9aac-fb8f34b1b65e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650150759994,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|4ffc2f50-2d73-c956-c521-c69fb156edd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|4ffc2f50-2d73-c956-c521-c69fb156edd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650150760868,
    },
    "e-114": {
      id: "e-114",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_SECOND_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-113",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|4ffc2f50-2d73-c956-c521-c69fb156edd7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|4ffc2f50-2d73-c956-c521-c69fb156edd7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1650150760868,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-116" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|cf6a6b3c-a040-4961-4f7a-e2d1e1456f3d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|cf6a6b3c-a040-4961-4f7a-e2d1e1456f3d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650151678941,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-118" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|b0ddea70-76b5-4e41-b738-5f5fa60fc44d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|b0ddea70-76b5-4e41-b738-5f5fa60fc44d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650151679527,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-120" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|73432290-4076-dc22-74c4-6cd99eccc694",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|73432290-4076-dc22-74c4-6cd99eccc694",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650151680152,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-122" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|4638684c-b1ee-6203-f851-b85e3937bb5b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|4638684c-b1ee-6203-f851-b85e3937bb5b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650151680741,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-124" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|d556d42c-96b5-f01c-36c3-206c3efdb221",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|d556d42c-96b5-f01c-36c3-206c3efdb221",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650151682319,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-126" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|f4a05d74-c87d-4889-15be-7ba415304c20",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|f4a05d74-c87d-4889-15be-7ba415304c20",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1650199056847,
    },
    "e-127": {
      id: "e-127",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-128" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|41bbf88c-d9da-570b-a300-67f37ec5ba55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|41bbf88c-d9da-570b-a300-67f37ec5ba55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1650199067243,
    },
    "e-129": {
      id: "e-129",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInLeft", autoStopEventId: "e-130" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|46054d88-a41c-bb51-c489-37b6bacc4239",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|46054d88-a41c-bb51-c489-37b6bacc4239",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: "LEFT",
        effectIn: true,
      },
      createdOn: 1650199080426,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-132" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|003b4277-7c3e-15f0-345a-685c0624a64b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|003b4277-7c3e-15f0-345a-685c0624a64b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650199401683,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-134" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|9e390750-aa68-42b5-c42b-d9f1d5a0cc55",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|9e390750-aa68-42b5-c42b-d9f1d5a0cc55",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650199430670,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-136" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|55325ecc-a433-4ce2-5e3c-af0ed2418ef6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|55325ecc-a433-4ce2-5e3c-af0ed2418ef6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650199437876,
    },
    "e-137": {
      id: "e-137",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-138" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|f669cbbf-555a-5dbd-df6e-d35982654dab",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|f669cbbf-555a-5dbd-df6e-d35982654dab",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650199537332,
    },
    "e-139": {
      id: "e-139",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-140" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|5bebf031-b8c2-1aa2-ee39-5afc619491c9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|5bebf031-b8c2-1aa2-ee39-5afc619491c9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650199984328,
    },
    "e-141": {
      id: "e-141",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GROW_EFFECT",
        instant: false,
        config: { actionListId: "growIn", autoStopEventId: "e-142" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|ef7859c7-1e8b-3453-f6b4-037e6d04bcc6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|ef7859c7-1e8b-3453-f6b4-037e6d04bcc6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650199984928,
    },
    "e-143": {
      id: "e-143",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-144" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|268257ee-2d67-916c-b04c-609f9cae92f1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|268257ee-2d67-916c-b04c-609f9cae92f1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 30,
        scrollOffsetUnit: "%",
        delay: 500,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650200176729,
    },
    "e-145": {
      id: "e-145",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-146" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "625b42eed5da03daaef4121b|8d9e5d17-1cf5-be7a-6cb2-204c31caa6e6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "625b42eed5da03daaef4121b|8d9e5d17-1cf5-be7a-6cb2-204c31caa6e6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: 0,
        direction: null,
        effectIn: true,
      },
      createdOn: 1650202397200,
    },
  },
  actionLists: {
    "a-2": {
      id: "a-2",
      title: "Email Popup SHOW",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: "none",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "easeIn",
                duration: 500,
                target: {
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1640906980168,
    },
    "a-3": {
      id: "a-3",
      title: "Email Popup HIDE",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-3-n",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-3-n-3",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".email-signup-popup-section",
                  selectorGuids: ["58739b4e-b7d2-ffea-495e-0ae1c816eb04"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1640906707822,
    },
    "a-4": {
      id: "a-4",
      title: "FAQ question 1st click",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                value: "none",
              },
            },
            {
              id: "a-4-n-2",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-4-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                value: 0,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-5",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                heightValue: 100,
                widthUnit: "PX",
                heightUnit: "AUTO",
                locked: false,
              },
            },
            {
              id: "a-4-n-6",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16ba"],
                },
                zValue: 90,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-4-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 400,
                easing: "",
                duration: 400,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1583104711108,
    },
    "a-5": {
      id: "a-5",
      title: "FAQ question 2nd click",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".faq-arrow",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16ba"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "DEG",
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-5-n-3",
              actionTypeId: "STYLE_SIZE",
              config: {
                delay: 200,
                easing: "ease",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                heightValue: 0,
                widthUnit: "PX",
                heightUnit: "PX",
                locked: false,
              },
            },
            {
              id: "a-5-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 500,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".answer-block",
                  selectorGuids: ["ba06a207-014b-df2a-8fc7-a7ccb96a16c6"],
                },
                value: "none",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1583104711108,
    },
    slideInLeft: {
      id: "slideInLeft",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: -100,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInTop: {
      id: "slideInTop",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: -100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growBigIn: {
      id: "growBigIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    shrinkBigIn: {
      id: "shrinkBigIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                duration: 0,
                delay: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 4,
                yValue: 4,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    growIn: {
      id: "growIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0.7500000000000001,
                yValue: 0.7500000000000001,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 1,
                yValue: 1,
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
