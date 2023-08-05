window.NREUM || (NREUM = {});
NREUM.init = {
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: false },
  ajax: { deny_list: ["bam.nr-data.net"] },
};

NREUM.loader_config = {
  accountID: "4009682",
  trustKey: "4009682",
  agentID: "1134358470",
  licenseKey: "NRJS-3c8478ffe7d0404e4af",
  applicationID: "1134358470",
};
NREUM.info = {
  beacon: "bam.nr-data.net",
  errorBeacon: "bam.nr-data.net",
  licenseKey: "NRJS-3c8478ffe7d0404e4af",
  applicationID: "1134358470",
  sa: 1,
}; /*! For license information please see nr-loader-spa-1.237.1.min.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    t,
    r = {
      5763: (e, t, r) => {
        r.d(t, {
          P_: () => f,
          Mt: () => g,
          C5: () => s,
          DL: () => v,
          OP: () => T,
          lF: () => j,
          Yu: () => y,
          Dg: () => h,
          CX: () => c,
          GE: () => b,
          sU: () => _,
        });
        var n = r(8632),
          i = r(9567);
        const o = {
            beacon: n.ce.beacon,
            errorBeacon: n.ce.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0,
          },
          a = {};
        function s(e) {
          if (!e)
            throw new Error("All info objects require an agent identifier!");
          if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
          return a[e];
        }
        function c(e, t) {
          if (!e)
            throw new Error("All info objects require an agent identifier!");
          (a[e] = (0, i.D)(t, o)), (0, n.Qy)(e, a[e], "info");
        }
        var d = r(7056);
        const u = () => {
            const e = {
              blockSelector: "[data-nr-block]",
              maskInputOptions: { password: !0 },
            };
            return {
              allow_bfcache: !0,
              privacy: { cookies_enabled: !0 },
              ajax: {
                deny_list: void 0,
                block_internal: !0,
                enabled: !0,
                harvestTimeSeconds: 10,
              },
              distributed_tracing: {
                enabled: void 0,
                exclude_newrelic_header: void 0,
                cors_use_newrelic_header: void 0,
                cors_use_tracecontext_headers: void 0,
                allowed_origins: void 0,
              },
              session: { domain: void 0, expiresMs: d.oD, inactiveMs: d.Hb },
              ssl: void 0,
              obfuscate: void 0,
              jserrors: { enabled: !0, harvestTimeSeconds: 10 },
              metrics: { enabled: !0 },
              page_action: { enabled: !0, harvestTimeSeconds: 30 },
              page_view_event: { enabled: !0 },
              page_view_timing: {
                enabled: !0,
                harvestTimeSeconds: 30,
                long_task: !1,
              },
              session_trace: { enabled: !0, harvestTimeSeconds: 10 },
              harvest: { tooManyRequestsDelay: 60 },
              session_replay: {
                enabled: !1,
                harvestTimeSeconds: 60,
                sampleRate: 0.1,
                errorSampleRate: 0.1,
                maskTextSelector: "*",
                maskAllInputs: !0,
                get blockClass() {
                  return "nr-block";
                },
                get ignoreClass() {
                  return "nr-ignore";
                },
                get maskTextClass() {
                  return "nr-mask";
                },
                get blockSelector() {
                  return e.blockSelector;
                },
                set blockSelector(t) {
                  e.blockSelector += ",".concat(t);
                },
                get maskInputOptions() {
                  return e.maskInputOptions;
                },
                set maskInputOptions(t) {
                  e.maskInputOptions = { ...t, password: !0 };
                },
              },
              spa: { enabled: !0, harvestTimeSeconds: 10 },
            };
          },
          l = {};
        function f(e) {
          if (!e)
            throw new Error(
              "All configuration objects require an agent identifier!"
            );
          if (!l[e])
            throw new Error("Configuration for ".concat(e, " was never set"));
          return l[e];
        }
        function h(e, t) {
          if (!e)
            throw new Error(
              "All configuration objects require an agent identifier!"
            );
          (l[e] = (0, i.D)(t, u())), (0, n.Qy)(e, l[e], "config");
        }
        function g(e, t) {
          if (!e)
            throw new Error(
              "All configuration objects require an agent identifier!"
            );
          var r = f(e);
          if (r) {
            for (var n = t.split("."), i = 0; i < n.length - 1; i++)
              if ("object" != typeof (r = r[n[i]])) return;
            r = r[n[n.length - 1]];
          }
          return r;
        }
        const p = {
            accountID: void 0,
            trustKey: void 0,
            agentID: void 0,
            licenseKey: void 0,
            applicationID: void 0,
            xpid: void 0,
          },
          m = {};
        function v(e) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!"
            );
          if (!m[e])
            throw new Error("LoaderConfig for ".concat(e, " was never set"));
          return m[e];
        }
        function b(e, t) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!"
            );
          (m[e] = (0, i.D)(t, p)), (0, n.Qy)(e, m[e], "loader_config");
        }
        const y = (0, n.mF)().o;
        var w = r(385),
          x = r(6818);
        const A = {
            buildEnv: x.Re,
            bytesSent: {},
            queryBytesSent: {},
            customTransaction: void 0,
            disabled: !1,
            distMethod: x.gF,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            offset: Math.floor(
              w._A?.performance?.timeOrigin ||
                w._A?.performance?.timing?.navigationStart ||
                Date.now()
            ),
            onerror: void 0,
            origin: "" + w._A.location,
            ptid: void 0,
            releaseIds: {},
            session: void 0,
            xhrWrappable:
              "function" ==
              typeof w._A.XMLHttpRequest?.prototype?.addEventListener,
            version: x.q4,
            denyList: void 0,
          },
          E = {};
        function T(e) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!");
          if (!E[e])
            throw new Error("Runtime for ".concat(e, " was never set"));
          return E[e];
        }
        function _(e, t) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!");
          (E[e] = (0, i.D)(t, A)), (0, n.Qy)(e, E[e], "runtime");
        }
        function j(e) {
          return (function (e) {
            try {
              const t = s(e);
              return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
            } catch (e) {
              return !1;
            }
          })(e);
        }
      },
      9567: (e, t, r) => {
        r.d(t, { D: () => i });
        var n = r(50);
        function i(e, t) {
          try {
            if (!e || "object" != typeof e)
              return (0, n.Z)(
                "Setting a Configurable requires an object as input"
              );
            if (!t || "object" != typeof t)
              return (0, n.Z)(
                "Setting a Configurable requires a model to set its initial properties"
              );
            const r = Object.create(
                Object.getPrototypeOf(t),
                Object.getOwnPropertyDescriptors(t)
              ),
              o = 0 === Object.keys(r).length ? e : r;
            for (let a in o)
              if (void 0 !== e[a])
                try {
                  "object" == typeof e[a] && "object" == typeof t[a]
                    ? (r[a] = i(e[a], t[a]))
                    : (r[a] = e[a]);
                } catch (e) {
                  (0, n.Z)(
                    "An error occurred while setting a property of a Configurable",
                    e
                  );
                }
            return r;
          } catch (e) {
            (0, n.Z)("An error occured while setting a Configurable", e);
          }
        }
      },
      6818: (e, t, r) => {
        r.d(t, { Re: () => i, gF: () => o, q4: () => n });
        const n = "1.237.1",
          i = "PROD",
          o = "CDN";
      },
      385: (e, t, r) => {
        r.d(t, {
          FN: () => a,
          IF: () => d,
          Nk: () => l,
          Tt: () => s,
          _A: () => o,
          il: () => n,
          pL: () => c,
          v6: () => i,
          w1: () => u,
        });
        const n = "undefined" != typeof window && !!window.document,
          i =
            "undefined" != typeof WorkerGlobalScope &&
            (("undefined" != typeof self &&
              self instanceof WorkerGlobalScope &&
              self.navigator instanceof WorkerNavigator) ||
              ("undefined" != typeof globalThis &&
                globalThis instanceof WorkerGlobalScope &&
                globalThis.navigator instanceof WorkerNavigator)),
          o = n
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              (("undefined" != typeof self &&
                self instanceof WorkerGlobalScope &&
                self) ||
                ("undefined" != typeof globalThis &&
                  globalThis instanceof WorkerGlobalScope &&
                  globalThis)),
          a = "" + o?.location,
          s = /iPad|iPhone|iPod/.test(navigator.userAgent),
          c = s && "undefined" == typeof SharedWorker,
          d = (() => {
            const e = navigator.userAgent.match(/Firefox[/\s](\d+\.\d+)/);
            return Array.isArray(e) && e.length >= 2 ? +e[1] : 0;
          })(),
          u = Boolean(n && window.document.documentMode),
          l = !!navigator.sendBeacon;
      },
      1117: (e, t, r) => {
        r.d(t, { w: () => o });
        var n = r(50);
        const i = { agentIdentifier: "", ee: void 0 };
        class o {
          constructor(e) {
            try {
              if ("object" != typeof e)
                return (0, n.Z)("shared context requires an object as input");
              (this.sharedContext = {}),
                Object.assign(this.sharedContext, i),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  Object.keys(i).includes(t) && (this.sharedContext[t] = r);
                });
            } catch (e) {
              (0, n.Z)("An error occured while setting SharedContext", e);
            }
          }
        }
      },
      8e3: (e, t, r) => {
        r.d(t, { L: () => u, R: () => c });
        var n = r(2177),
          i = r(1284),
          o = r(4322),
          a = r(3325);
        const s = {};
        function c(e, t) {
          const r = { staged: !1, priority: a.p[t] || 0 };
          d(e), s[e].get(t) || s[e].set(t, r);
        }
        function d(e) {
          e && (s[e] || (s[e] = new Map()));
        }
        function u() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "feature";
          if ((d(e), !e || !s[e].get(t))) return a(t);
          s[e].get(t).staged = !0;
          const r = [...s[e]];
          function a(t) {
            const r = e ? n.ee.get(e) : n.ee,
              a = o.X.handlers;
            if (r.backlog && a) {
              var s = r.backlog[t],
                c = a[t];
              if (c) {
                for (var d = 0; s && d < s.length; ++d) l(s[d], c);
                (0, i.D)(c, function (e, t) {
                  (0, i.D)(t, function (t, r) {
                    r[0].on(e, r[1]);
                  });
                });
              }
              delete a[t], (r.backlog[t] = null), r.emit("drain-" + t, []);
            }
          }
          r.every((e) => {
            let [t, r] = e;
            return r.staged;
          }) &&
            (r.sort((e, t) => e[1].priority - t[1].priority),
            r.forEach((e) => {
              let [t] = e;
              a(t);
            }));
        }
        function l(e, t) {
          var r = e[1];
          (0, i.D)(t[r], function (t, r) {
            var n = e[0];
            if (r[0] === n) {
              var i = r[1],
                o = e[3],
                a = e[2];
              i.apply(o, a);
            }
          });
        }
      },
      2177: (e, t, r) => {
        r.d(t, { c: () => l, ee: () => d });
        var n = r(8632),
          i = r(2210),
          o = r(1284),
          a = r(5763),
          s = "nr@context";
        let c = (0, n.fP)();
        var d;
        function u() {}
        function l(e) {
          return (0, i.X)(e, s, f);
        }
        function f() {
          return new u();
        }
        function h() {
          (d.aborted = !0), (d.backlog = {});
        }
        c.ee
          ? (d = c.ee)
          : ((d = (function e(t, r) {
              var n = {},
                c = {},
                l = {},
                g = !1;
              try {
                g = 16 === r.length && (0, a.OP)(r).isolatedBacklog;
              } catch (e) {}
              var p = {
                on: b,
                addEventListener: b,
                removeEventListener: y,
                emit: v,
                get: x,
                listeners: w,
                context: m,
                buffer: A,
                abort: h,
                aborted: !1,
                isBuffering: E,
                debugId: r,
                backlog: g
                  ? {}
                  : t && "object" == typeof t.backlog
                  ? t.backlog
                  : {},
              };
              return p;
              function m(e) {
                return e && e instanceof u ? e : e ? (0, i.X)(e, s, f) : f();
              }
              function v(e, r, n, i, o) {
                if ((!1 !== o && (o = !0), !d.aborted || i)) {
                  t && o && t.emit(e, r, n);
                  for (var a = m(n), s = w(e), u = s.length, l = 0; l < u; l++)
                    s[l].apply(a, r);
                  var f = T()[c[e]];
                  return f && f.push([p, e, r, a]), a;
                }
              }
              function b(e, t) {
                n[e] = w(e).concat(t);
              }
              function y(e, t) {
                var r = n[e];
                if (r)
                  for (var i = 0; i < r.length; i++)
                    r[i] === t && r.splice(i, 1);
              }
              function w(e) {
                return n[e] || [];
              }
              function x(t) {
                return (l[t] = l[t] || e(p, t));
              }
              function A(e, t) {
                var r = T();
                p.aborted ||
                  (0, o.D)(e, function (e, n) {
                    (t = t || "feature"), (c[n] = t), t in r || (r[t] = []);
                  });
              }
              function E(e) {
                return !!T()[c[e]];
              }
              function T() {
                return p.backlog;
              }
            })(void 0, "globalEE")),
            (c.ee = d));
      },
      5546: (e, t, r) => {
        r.d(t, { E: () => n, p: () => i });
        var n = r(2177).ee.get("handle");
        function i(e, t, r, i, o) {
          o
            ? (o.buffer([e], i), o.emit(e, t, r))
            : (n.buffer([e], i), n.emit(e, t, r));
        }
      },
      4322: (e, t, r) => {
        r.d(t, { X: () => o });
        var n = r(5546);
        o.on = a;
        var i = (o.handlers = {});
        function o(e, t, r, o) {
          a(o || n.E, i, e, t, r);
        }
        function a(e, t, r, i, o) {
          o || (o = "feature"), e || (e = n.E);
          var a = (t[o] = t[o] || {});
          (a[r] = a[r] || []).push([e, i]);
        }
      },
      3239: (e, t, r) => {
        r.d(t, { bP: () => s, iz: () => c, m$: () => a });
        var n = r(385);
        let i = !1,
          o = !1;
        try {
          const e = {
            get passive() {
              return (i = !0), !1;
            },
            get signal() {
              return (o = !0), !1;
            },
          };
          n._A.addEventListener("test", null, e),
            n._A.removeEventListener("test", null, e);
        } catch (e) {}
        function a(e, t) {
          return i || o ? { capture: !!e, passive: i, signal: t } : !!e;
        }
        function s(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          window.addEventListener(e, t, a(r, n));
        }
        function c(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          document.addEventListener(e, t, a(r, n));
        }
      },
      4402: (e, t, r) => {
        r.d(t, { Ht: () => d, M: () => c, Rl: () => a, ky: () => s });
        var n = r(385);
        const i = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        function o(e, t) {
          return e ? 15 & e[t] : (16 * Math.random()) | 0;
        }
        function a() {
          const e = n._A?.crypto || n._A?.msCrypto;
          let t,
            r = 0;
          return (
            e &&
              e.getRandomValues &&
              (t = e.getRandomValues(new Uint8Array(31))),
            i
              .split("")
              .map((e) =>
                "x" === e
                  ? o(t, ++r).toString(16)
                  : "y" === e
                  ? ((3 & o()) | 8).toString(16)
                  : e
              )
              .join("")
          );
        }
        function s(e) {
          const t = n._A?.crypto || n._A?.msCrypto;
          let r,
            i = 0;
          t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(31)));
          const a = [];
          for (var s = 0; s < e; s++) a.push(o(r, ++i).toString(16));
          return a.join("");
        }
        function c() {
          return s(16);
        }
        function d() {
          return s(32);
        }
      },
      7056: (e, t, r) => {
        r.d(t, { Bq: () => n, Hb: () => o, oD: () => i });
        const n = "NRBA",
          i = 144e5,
          o = 18e5;
      },
      7894: (e, t, r) => {
        function n() {
          return Math.round(performance.now());
        }
        r.d(t, { z: () => n });
      },
      7243: (e, t, r) => {
        r.d(t, { e: () => o });
        var n = r(385),
          i = {};
        function o(e) {
          if (e in i) return i[e];
          if (0 === (e || "").indexOf("data:")) return { protocol: "data" };
          let t;
          var r = n._A?.location,
            o = {};
          if (n.il) (t = document.createElement("a")), (t.href = e);
          else
            try {
              t = new URL(e, r.href);
            } catch (e) {
              return o;
            }
          o.port = t.port;
          var a = t.href.split("://");
          !o.port &&
            a[1] &&
            (o.port = a[1].split("/")[0].split("@").pop().split(":")[1]),
            (o.port && "0" !== o.port) ||
              (o.port = "https" === a[0] ? "443" : "80"),
            (o.hostname = t.hostname || r.hostname),
            (o.pathname = t.pathname),
            (o.protocol = a[0]),
            "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
          var s =
              !t.protocol || ":" === t.protocol || t.protocol === r.protocol,
            c = t.hostname === r.hostname && t.port === r.port;
          return (
            (o.sameOrigin = s && (!t.hostname || c)),
            "/" === o.pathname && (i[e] = o),
            o
          );
        }
      },
      50: (e, t, r) => {
        function n(e, t) {
          "function" == typeof console.warn &&
            (console.warn("New Relic: ".concat(e)), t && console.warn(t));
        }
        r.d(t, { Z: () => n });
      },
      2587: (e, t, r) => {
        r.d(t, { N: () => c, T: () => d });
        var n = r(2177),
          i = r(5546),
          o = r(8e3),
          a = r(3325);
        const s = {
          stn: [a.D.sessionTrace],
          err: [a.D.jserrors, a.D.metrics],
          ins: [a.D.pageAction],
          spa: [a.D.spa],
          sr: [a.D.sessionReplay, a.D.sessionTrace],
        };
        function c(e, t) {
          const r = n.ee.get(t);
          e &&
            "object" == typeof e &&
            (Object.entries(e).forEach((e) => {
              let [t, n] = e;
              void 0 === d[t] &&
                (s[t]
                  ? s[t].forEach((e) => {
                      n
                        ? (0, i.p)("feat-" + t, [], void 0, e, r)
                        : (0, i.p)("block-" + t, [], void 0, e, r),
                        (0, i.p)("rumresp-" + t, [Boolean(n)], void 0, e, r);
                    })
                  : n && (0, i.p)("feat-" + t, [], void 0, void 0, r),
                (d[t] = Boolean(n)));
            }),
            Object.keys(s).forEach((e) => {
              void 0 === d[e] &&
                (s[e]?.forEach((t) =>
                  (0, i.p)("rumresp-" + e, [!1], void 0, t, r)
                ),
                (d[e] = !1));
            }),
            (0, o.L)(t, a.D.pageViewEvent));
        }
        const d = {};
      },
      2210: (e, t, r) => {
        r.d(t, { X: () => i });
        var n = Object.prototype.hasOwnProperty;
        function i(e, t, r) {
          if (n.call(e, t)) return e[t];
          var i = r();
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.defineProperty(e, t, {
                  value: i,
                  writable: !0,
                  enumerable: !1,
                }),
                i
              );
            } catch (e) {}
          return (e[t] = i), i;
        }
      },
      1284: (e, t, r) => {
        r.d(t, { D: () => n });
        const n = (e, t) =>
          Object.entries(e || {}).map((e) => {
            let [r, n] = e;
            return t(r, n);
          });
      },
      4351: (e, t, r) => {
        r.d(t, { P: () => o });
        var n = r(2177);
        const i = () => {
          const e = new WeakSet();
          return (t, r) => {
            if ("object" == typeof r && null !== r) {
              if (e.has(r)) return;
              e.add(r);
            }
            return r;
          };
        };
        function o(e) {
          try {
            return JSON.stringify(e, i());
          } catch (e) {
            try {
              n.ee.emit("internal-error", [e]);
            } catch (e) {}
          }
        }
      },
      3960: (e, t, r) => {
        r.d(t, { K: () => a, b: () => o });
        var n = r(3239);
        function i() {
          return (
            "undefined" == typeof document || "complete" === document.readyState
          );
        }
        function o(e, t) {
          if (i()) return e();
          (0, n.bP)("load", e, t);
        }
        function a(e) {
          if (i()) return e();
          (0, n.iz)("DOMContentLoaded", e);
        }
      },
      8632: (e, t, r) => {
        r.d(t, {
          EZ: () => d,
          Qy: () => c,
          ce: () => o,
          fP: () => a,
          gG: () => u,
          mF: () => s,
        });
        var n = r(7894),
          i = r(385);
        const o = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" };
        function a() {
          return (
            i._A.NREUM || (i._A.NREUM = {}),
            void 0 === i._A.newrelic && (i._A.newrelic = i._A.NREUM),
            i._A.NREUM
          );
        }
        function s() {
          let e = a();
          return (
            e.o ||
              (e.o = {
                ST: i._A.setTimeout,
                SI: i._A.setImmediate,
                CT: i._A.clearTimeout,
                XHR: i._A.XMLHttpRequest,
                REQ: i._A.Request,
                EV: i._A.Event,
                PR: i._A.Promise,
                MO: i._A.MutationObserver,
                FETCH: i._A.fetch,
              }),
            e
          );
        }
        function c(e, t, r) {
          let i = a();
          const o = i.initializedAgents || {},
            s = o[e] || {};
          return (
            Object.keys(s).length ||
              (s.initializedAt = { ms: (0, n.z)(), date: new Date() }),
            (i.initializedAgents = { ...o, [e]: { ...s, [r]: t } }),
            i
          );
        }
        function d(e, t) {
          a()[e] = t;
        }
        function u() {
          return (
            (function () {
              let e = a();
              const t = e.info || {};
              e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t };
            })(),
            (function () {
              let e = a();
              const t = e.init || {};
              e.init = { ...t };
            })(),
            s(),
            (function () {
              let e = a();
              const t = e.loader_config || {};
              e.loader_config = { ...t };
            })(),
            a()
          );
        }
      },
      7956: (e, t, r) => {
        r.d(t, { N: () => i });
        var n = r(3239);
        function i(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            i = arguments.length > 3 ? arguments[3] : void 0;
          return void (0, n.iz)(
            "visibilitychange",
            function () {
              if (t) return void ("hidden" == document.visibilityState && e());
              e(document.visibilityState);
            },
            r,
            i
          );
        }
      },
      1214: (e, t, r) => {
        r.d(t, {
          em: () => v,
          u5: () => D,
          QU: () => S,
          _L: () => I,
          Gm: () => z,
          Lg: () => M,
          BV: () => X,
          Kf: () => K,
        });
        var n = r(2177);
        const i = "nr@original";
        var o = Object.prototype.hasOwnProperty,
          a = !1;
        function s(e, t) {
          return (
            e || (e = n.ee),
            (r.inPlace = function (e, t, n, i, o) {
              n || (n = "");
              var a,
                s,
                c,
                d = "-" === n.charAt(0);
              for (c = 0; c < t.length; c++)
                u((a = e[(s = t[c])])) || (e[s] = r(a, d ? s + n : n, i, s, o));
            }),
            (r.flag = i),
            r
          );
          function r(t, r, n, a, s) {
            return u(t)
              ? t
              : (r || (r = ""),
                (nrWrapper[i] = t),
                d(t, nrWrapper, e),
                nrWrapper);
            function nrWrapper() {
              var i, d, u, l;
              try {
                (d = this),
                  (i = [...arguments]),
                  (u = "function" == typeof n ? n(i, d) : n || {});
              } catch (t) {
                c([t, "", [i, d, a], u], e);
              }
              o(r + "start", [i, d, a], u, s);
              try {
                return (l = t.apply(d, i));
              } catch (e) {
                throw (o(r + "err", [i, d, e], u, s), e);
              } finally {
                o(r + "end", [i, d, l], u, s);
              }
            }
          }
          function o(r, n, i, o) {
            if (!a || t) {
              var s = a;
              a = !0;
              try {
                e.emit(r, n, i, t, o);
              } catch (t) {
                c([t, r, n, i], e);
              }
              a = s;
            }
          }
        }
        function c(e, t) {
          t || (t = n.ee);
          try {
            t.emit("internal-error", e);
          } catch (e) {}
        }
        function d(e, t, r) {
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.keys(e).forEach(function (r) {
                  Object.defineProperty(t, r, {
                    get: function () {
                      return e[r];
                    },
                    set: function (t) {
                      return (e[r] = t), t;
                    },
                  });
                }),
                t
              );
            } catch (e) {
              c([e], r);
            }
          for (var n in e) o.call(e, n) && (t[n] = e[n]);
          return t;
        }
        function u(e) {
          return !(e && e instanceof Function && e.apply && !e[i]);
        }
        var l = r(2210),
          f = r(385);
        const h = {},
          g = XMLHttpRequest,
          p = "addEventListener",
          m = "removeEventListener";
        function v(e) {
          var t = (function (e) {
            return (e || n.ee).get("events");
          })(e);
          if (h[t.debugId]++) return t;
          h[t.debugId] = 1;
          var r = s(t, !0);
          function i(e) {
            r.inPlace(e, [p, m], "-", o);
          }
          function o(e, t) {
            return e[1];
          }
          return (
            "getPrototypeOf" in Object &&
              (f.il && b(document, i), b(f._A, i), b(g.prototype, i)),
            t.on(p + "-start", function (e, t) {
              var n = e[1];
              if (
                null !== n &&
                ("function" == typeof n || "object" == typeof n)
              ) {
                var i = (0, l.X)(n, "nr@wrapped", function () {
                  var e = {
                    object: function () {
                      if ("function" != typeof n.handleEvent) return;
                      return n.handleEvent.apply(n, arguments);
                    },
                    function: n,
                  }[typeof n];
                  return e ? r(e, "fn-", null, e.name || "anonymous") : n;
                });
                this.wrapped = e[1] = i;
              }
            }),
            t.on(m + "-start", function (e) {
              e[1] = this.wrapped || e[1];
            }),
            t
          );
        }
        function b(e, t) {
          let r = e;
          for (
            ;
            "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, p);

          )
            r = Object.getPrototypeOf(r);
          for (
            var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
            o < n;
            o++
          )
            i[o - 2] = arguments[o];
          r && t(r, ...i);
        }
        var y = "fetch-",
          w = y + "body-",
          x = ["arrayBuffer", "blob", "json", "text", "formData"],
          A = f._A.Request,
          E = f._A.Response,
          T = "prototype",
          _ = "nr@context";
        const j = {};
        function D(e) {
          const t = (function (e) {
            return (e || n.ee).get("fetch");
          })(e);
          if (!(A && E && f._A.fetch)) return t;
          if (j[t.debugId]++) return t;
          function r(e, r, n) {
            var i = e[r];
            "function" == typeof i &&
              (e[r] = function () {
                var e,
                  r = [...arguments],
                  o = {};
                t.emit(n + "before-start", [r], o),
                  o[_] && o[_].dt && (e = o[_].dt);
                var a = i.apply(this, r);
                return (
                  t.emit(n + "start", [r, e], a),
                  a.then(
                    function (e) {
                      return t.emit(n + "end", [null, e], a), e;
                    },
                    function (e) {
                      throw (t.emit(n + "end", [e], a), e);
                    }
                  )
                );
              });
          }
          return (
            (j[t.debugId] = 1),
            x.forEach((e) => {
              r(A[T], e, w), r(E[T], e, w);
            }),
            r(f._A, "fetch", y),
            t.on(y + "end", function (e, r) {
              var n = this;
              if (r) {
                var i = r.headers.get("content-length");
                null !== i && (n.rxSize = i), t.emit(y + "done", [null, r], n);
              } else t.emit(y + "done", [e], n);
            }),
            t
          );
        }
        const C = {},
          N = ["pushState", "replaceState"];
        function S(e) {
          const t = (function (e) {
            return (e || n.ee).get("history");
          })(e);
          return (
            !f.il ||
              C[t.debugId]++ ||
              ((C[t.debugId] = 1), s(t).inPlace(window.history, N, "-")),
            t
          );
        }
        var O = r(3239);
        const P = {},
          R = ["appendChild", "insertBefore", "replaceChild"];
        function I(e) {
          const t = (function (e) {
            return (e || n.ee).get("jsonp");
          })(e);
          if (!f.il || P[t.debugId]) return t;
          P[t.debugId] = !0;
          var r = s(t),
            i = /[?&](?:callback|cb)=([^&#]+)/,
            o = /(.*)\.([^.]+)/,
            a = /^(\w+)(\.|$)(.*)$/;
          function c(e, t) {
            if (!e) return t;
            const r = e.match(a),
              n = r[1];
            return c(r[3], t[n]);
          }
          return (
            r.inPlace(Node.prototype, R, "dom-"),
            t.on("dom-start", function (e) {
              !(function (e) {
                if (
                  !e ||
                  "string" != typeof e.nodeName ||
                  "script" !== e.nodeName.toLowerCase()
                )
                  return;
                if ("function" != typeof e.addEventListener) return;
                var n = ((a = e.src), (s = a.match(i)), s ? s[1] : null);
                var a, s;
                if (!n) return;
                var d = (function (e) {
                  var t = e.match(o);
                  if (t && t.length >= 3)
                    return { key: t[2], parent: c(t[1], window) };
                  return { key: e, parent: window };
                })(n);
                if ("function" != typeof d.parent[d.key]) return;
                var u = {};
                function l() {
                  t.emit("jsonp-end", [], u),
                    e.removeEventListener("load", l, (0, O.m$)(!1)),
                    e.removeEventListener("error", f, (0, O.m$)(!1));
                }
                function f() {
                  t.emit("jsonp-error", [], u),
                    t.emit("jsonp-end", [], u),
                    e.removeEventListener("load", l, (0, O.m$)(!1)),
                    e.removeEventListener("error", f, (0, O.m$)(!1));
                }
                r.inPlace(d.parent, [d.key], "cb-", u),
                  e.addEventListener("load", l, (0, O.m$)(!1)),
                  e.addEventListener("error", f, (0, O.m$)(!1)),
                  t.emit("new-jsonp", [e.src], u);
              })(e[0]);
            }),
            t
          );
        }
        var k = r(5763);
        const H = {};
        function z(e) {
          const t = (function (e) {
            return (e || n.ee).get("mutation");
          })(e);
          if (!f.il || H[t.debugId]) return t;
          H[t.debugId] = !0;
          var r = s(t),
            i = k.Yu.MO;
          return (
            i &&
              ((window.MutationObserver = function (e) {
                return this instanceof i
                  ? new i(r(e, "fn-"))
                  : i.apply(this, arguments);
              }),
              (MutationObserver.prototype = i.prototype)),
            t
          );
        }
        const L = {};
        function M(e) {
          const t = (function (e) {
            return (e || n.ee).get("promise");
          })(e);
          if (L[t.debugId]) return t;
          L[t.debugId] = !0;
          var r = n.c,
            o = s(t),
            a = k.Yu.PR;
          return (
            a &&
              (function () {
                function e(r) {
                  var n = t.context(),
                    i = o(r, "executor-", n, null, !1);
                  const s = Reflect.construct(a, [i], e);
                  return (
                    (t.context(s).getCtx = function () {
                      return n;
                    }),
                    s
                  );
                }
                (f._A.Promise = e),
                  Object.defineProperty(e, "name", { value: "Promise" }),
                  (e.toString = function () {
                    return a.toString();
                  }),
                  Object.setPrototypeOf(e, a),
                  ["all", "race"].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      let i = !1;
                      [...(e || [])].forEach((e) => {
                        this.resolve(e).then(a("all" === r), a(!1));
                      });
                      const o = n.apply(this, arguments);
                      return o;
                      function a(e) {
                        return function () {
                          t.emit("propagate", [null, !i], o, !1, !1),
                            (i = i || !e);
                        };
                      }
                    };
                  }),
                  ["resolve", "reject"].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      const r = n.apply(this, arguments);
                      return (
                        e !== r && t.emit("propagate", [e, !0], r, !1, !1), r
                      );
                    };
                  }),
                  (e.prototype = a.prototype);
                const n = a.prototype.then;
                (a.prototype.then = function () {
                  var e = this,
                    i = r(e);
                  i.promise = e;
                  for (
                    var a = arguments.length, s = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    s[c] = arguments[c];
                  (s[0] = o(s[0], "cb-", i, null, !1)),
                    (s[1] = o(s[1], "cb-", i, null, !1));
                  const d = n.apply(this, s);
                  return (
                    (i.nextPromise = d),
                    t.emit("propagate", [e, !0], d, !1, !1),
                    d
                  );
                }),
                  (a.prototype.then[i] = n),
                  t.on("executor-start", function (e) {
                    (e[0] = o(e[0], "resolve-", this, null, !1)),
                      (e[1] = o(e[1], "resolve-", this, null, !1));
                  }),
                  t.on("executor-err", function (e, t, r) {
                    e[1](r);
                  }),
                  t.on("cb-end", function (e, r, n) {
                    t.emit("propagate", [n, !0], this.nextPromise, !1, !1);
                  }),
                  t.on("propagate", function (e, r, n) {
                    (this.getCtx && !r) ||
                      (this.getCtx = function () {
                        if (e instanceof Promise) var r = t.context(e);
                        return r && r.getCtx ? r.getCtx() : this;
                      });
                  });
              })(),
            t
          );
        }
        const B = {},
          F = "setTimeout",
          U = "setInterval",
          q = "clearTimeout",
          Z = "-start",
          G = "-",
          V = [F, "setImmediate", U, q, "clearImmediate"];
        function X(e) {
          const t = (function (e) {
            return (e || n.ee).get("timer");
          })(e);
          if (B[t.debugId]++) return t;
          B[t.debugId] = 1;
          var r = s(t);
          return (
            r.inPlace(f._A, V.slice(0, 2), F + G),
            r.inPlace(f._A, V.slice(2, 3), U + G),
            r.inPlace(f._A, V.slice(3), q + G),
            t.on(U + Z, function (e, t, n) {
              e[0] = r(e[0], "fn-", null, n);
            }),
            t.on(F + Z, function (e, t, n) {
              (this.method = n),
                (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]),
                (e[0] = r(e[0], "fn-", this, n));
            }),
            t
          );
        }
        var W = r(50);
        const Y = {},
          Q = ["open", "send"];
        function K(e) {
          var t = e || n.ee;
          const r = (function (e) {
            return (e || n.ee).get("xhr");
          })(t);
          if (Y[r.debugId]++) return r;
          (Y[r.debugId] = 1), v(t);
          var i = s(r),
            o = k.Yu.XHR,
            a = k.Yu.MO,
            c = k.Yu.PR,
            d = k.Yu.SI,
            u = "readystatechange",
            l = [
              "onload",
              "onerror",
              "onabort",
              "onloadstart",
              "onloadend",
              "onprogress",
              "ontimeout",
            ],
            h = [],
            g = f._A.XMLHttpRequest.listeners,
            p = (f._A.XMLHttpRequest = function (e) {
              var t = new o(e);
              function n() {
                try {
                  r.emit("new-xhr", [t], t),
                    t.addEventListener(u, b, (0, O.m$)(!1));
                } catch (e) {
                  (0, W.Z)("An error occured while intercepting XHR", e);
                  try {
                    r.emit("internal-error", [e]);
                  } catch (e) {}
                }
              }
              return (
                (this.listeners = g ? [...g, n] : [n]),
                this.listeners.forEach((e) => e()),
                t
              );
            });
          function m(e, t) {
            i.inPlace(t, ["onreadystatechange"], "fn-", E);
          }
          function b() {
            var e = this,
              t = r.context(e);
            e.readyState > 3 &&
              !t.resolved &&
              ((t.resolved = !0), r.emit("xhr-resolved", [], e)),
              i.inPlace(e, l, "fn-", E);
          }
          if (
            ((function (e, t) {
              for (var r in e) t[r] = e[r];
            })(o, p),
            (p.prototype = o.prototype),
            i.inPlace(p.prototype, Q, "-xhr-", E),
            r.on("send-xhr-start", function (e, t) {
              m(e, t),
                (function (e) {
                  h.push(e),
                    a && (y ? y.then(A) : d ? d(A) : ((w = -w), (x.data = w)));
                })(t);
            }),
            r.on("open-xhr-start", m),
            a)
          ) {
            var y = c && c.resolve();
            if (!d && !c) {
              var w = 1,
                x = document.createTextNode(w);
              new a(A).observe(x, { characterData: !0 });
            }
          } else
            t.on("fn-end", function (e) {
              (e[0] && e[0].type === u) || A();
            });
          function A() {
            for (var e = 0; e < h.length; e++) m(0, h[e]);
            h.length && (h = []);
          }
          function E(e, t) {
            return t;
          }
          return r;
        }
      },
      7825: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(3325).D.ajax;
      },
      6660: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(3325).D.jserrors;
      },
      3081: (e, t, r) => {
        r.d(t, {
          gF: () => o,
          mY: () => i,
          t9: () => n,
          vz: () => s,
          xS: () => a,
        });
        const n = r(3325).D.metrics,
          i = "sm",
          o = "cm",
          a = "storeSupportabilityMetrics",
          s = "storeEventMetrics";
      },
      4649: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(3325).D.pageAction;
      },
      7633: (e, t, r) => {
        r.d(t, { Dz: () => i, OJ: () => a, qw: () => o, t9: () => n });
        const n = r(3325).D.pageViewEvent,
          i = "firstbyte",
          o = "domcontent",
          a = "windowload";
      },
      9251: (e, t, r) => {
        r.d(t, { t: () => n });
        const n = r(3325).D.pageViewTiming;
      },
      3614: (e, t, r) => {
        r.d(t, {
          BST_RESOURCE: () => i,
          END: () => s,
          FEATURE_NAME: () => n,
          FN_END: () => d,
          FN_START: () => c,
          PUSH_STATE: () => u,
          RESOURCE: () => o,
          START: () => a,
        });
        const n = r(3325).D.sessionTrace,
          i = "bstResource",
          o = "resource",
          a = "-start",
          s = "-end",
          c = "fn" + a,
          d = "fn" + s,
          u = "pushState";
      },
      7836: (e, t, r) => {
        r.d(t, {
          BODY: () => A,
          CB_END: () => E,
          CB_START: () => d,
          END: () => x,
          FEATURE_NAME: () => i,
          FETCH: () => _,
          FETCH_BODY: () => v,
          FETCH_DONE: () => m,
          FETCH_START: () => p,
          FN_END: () => c,
          FN_START: () => s,
          INTERACTION: () => f,
          INTERACTION_API: () => u,
          INTERACTION_EVENTS: () => o,
          JSONP_END: () => b,
          JSONP_NODE: () => g,
          JS_TIME: () => T,
          MAX_TIMER_BUDGET: () => a,
          REMAINING: () => l,
          SPA_NODE: () => h,
          START: () => w,
          originalSetTimeout: () => y,
        });
        var n = r(5763);
        const i = r(3325).D.spa,
          o = ["click", "submit", "keypress", "keydown", "keyup", "change"],
          a = 999,
          s = "fn-start",
          c = "fn-end",
          d = "cb-start",
          u = "api-ixn-",
          l = "remaining",
          f = "interaction",
          h = "spaNode",
          g = "jsonpNode",
          p = "fetch-start",
          m = "fetch-done",
          v = "fetch-body-",
          b = "jsonp-end",
          y = n.Yu.ST,
          w = "-start",
          x = "-end",
          A = "-body",
          E = "cb" + x,
          T = "jsTime",
          _ = "fetch";
      },
      5938: (e, t, r) => {
        r.d(t, { W: () => o });
        var n = r(5763),
          i = r(2177);
        class o {
          constructor(e, t, r) {
            (this.agentIdentifier = e),
              (this.aggregator = t),
              (this.ee = i.ee.get(
                e,
                (0, n.OP)(this.agentIdentifier).isolatedBacklog
              )),
              (this.featureName = r),
              (this.blocked = !1);
          }
        }
      },
      9144: (e, t, r) => {
        r.d(t, { j: () => m });
        var n = r(3325),
          i = r(5763),
          o = r(5546),
          a = r(2177),
          s = r(7894),
          c = r(8e3),
          d = r(3960),
          u = r(385),
          l = r(50),
          f = r(3081),
          h = r(8632);
        function g() {
          const e = (0, h.gG)();
          [
            "setErrorHandler",
            "finished",
            "addToTrace",
            "inlineHit",
            "addRelease",
            "addPageAction",
            "setCurrentRouteName",
            "setPageViewName",
            "setCustomAttribute",
            "interaction",
            "noticeError",
            "setUserId",
          ].forEach((t) => {
            e[t] = function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return (function (t) {
                for (
                  var r = arguments.length,
                    n = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  n[i - 1] = arguments[i];
                let o = [];
                return (
                  Object.values(e.initializedAgents).forEach((e) => {
                    e.exposed && e.api[t] && o.push(e.api[t](...n));
                  }),
                  o.length > 1 ? o : o[0]
                );
              })(t, ...n);
            };
          });
        }
        var p = r(2587);
        function m(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            m = arguments.length > 2 ? arguments[2] : void 0,
            v = arguments.length > 3 ? arguments[3] : void 0,
            {
              init: b,
              info: y,
              loader_config: w,
              runtime: x = { loaderType: m },
              exposed: A = !0,
            } = t;
          const E = (0, h.gG)();
          y || ((b = E.init), (y = E.info), (w = E.loader_config)),
            (0, i.Dg)(e, b || {}),
            (0, i.GE)(e, w || {}),
            (y.jsAttributes ??= {}),
            u.v6 && (y.jsAttributes.isWorker = !0),
            (0, i.CX)(e, y);
          const T = (0, i.P_)(e);
          (x.denyList = [
            ...(T.ajax?.deny_list || []),
            ...(T.ajax?.block_internal ? [y.beacon, y.errorBeacon] : []),
          ]),
            (0, i.sU)(e, x),
            g();
          const _ = (function (e, t) {
            t || (0, c.R)(e, "api");
            const h = {};
            var g = a.ee.get(e),
              p = g.get("tracer"),
              m = "api-",
              v = m + "ixn-";
            function b(t, r, n, o) {
              const a = (0, i.C5)(e);
              return (
                null === r
                  ? delete a.jsAttributes[t]
                  : (0, i.CX)(e, {
                      ...a,
                      jsAttributes: { ...a.jsAttributes, [t]: r },
                    }),
                x(m, n, !0, o || null === r ? "session" : void 0)(t, r)
              );
            }
            function y() {}
            [
              "setErrorHandler",
              "finished",
              "addToTrace",
              "inlineHit",
              "addRelease",
            ].forEach((e) => (h[e] = x(m, e, !0, "api"))),
              (h.addPageAction = x(m, "addPageAction", !0, n.D.pageAction)),
              (h.setCurrentRouteName = x(m, "routeName", !0, n.D.spa)),
              (h.setPageViewName = function (t, r) {
                if ("string" == typeof t)
                  return (
                    "/" !== t.charAt(0) && (t = "/" + t),
                    ((0, i.OP)(e).customTransaction =
                      (r || "http://custom.transaction") + t),
                    x(m, "setPageViewName", !0)()
                  );
              }),
              (h.setCustomAttribute = function (e, t) {
                let r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                if ("string" == typeof e) {
                  if (["string", "number"].includes(typeof t) || null === t)
                    return b(e, t, "setCustomAttribute", r);
                  (0, l.Z)(
                    "Failed to execute setCustomAttribute.\nNon-null value must be a string or number type, but a type of <".concat(
                      typeof t,
                      "> was provided."
                    )
                  );
                } else
                  (0, l.Z)(
                    "Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(
                      typeof e,
                      "> was provided."
                    )
                  );
              }),
              (h.setUserId = function (e) {
                if ("string" == typeof e || null === e)
                  return b("enduser.id", e, "setUserId", !0);
                (0, l.Z)(
                  "Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(
                    typeof e,
                    "> was provided."
                  )
                );
              }),
              (h.interaction = function () {
                return new y().get();
              });
            var w = (y.prototype = {
              createTracer: function (e, t) {
                var r = {},
                  i = this,
                  a = "function" == typeof t;
                return (
                  (0, o.p)(v + "tracer", [(0, s.z)(), e, r], i, n.D.spa, g),
                  function () {
                    if (
                      (p.emit(
                        (a ? "" : "no-") + "fn-start",
                        [(0, s.z)(), i, a],
                        r
                      ),
                      a)
                    )
                      try {
                        return t.apply(this, arguments);
                      } catch (e) {
                        throw (p.emit("fn-err", [arguments, this, e], r), e);
                      } finally {
                        p.emit("fn-end", [(0, s.z)()], r);
                      }
                  }
                );
              },
            });
            function x(e, t, r, i) {
              return function () {
                return (
                  (0, o.p)(
                    f.xS,
                    ["API/" + t + "/called"],
                    void 0,
                    n.D.metrics,
                    g
                  ),
                  i &&
                    (0, o.p)(
                      e + t,
                      [(0, s.z)(), ...arguments],
                      r ? null : this,
                      i,
                      g
                    ),
                  r ? void 0 : this
                );
              };
            }
            function A() {
              r.e(439)
                .then(r.bind(r, 7438))
                .then((t) => {
                  let { setAPI: r } = t;
                  r(e), (0, c.L)(e, "api");
                })
                .catch(() => (0, l.Z)("Downloading runtime APIs failed..."));
            }
            return (
              [
                "actionText",
                "setName",
                "setAttribute",
                "save",
                "ignore",
                "onEnd",
                "getContext",
                "end",
                "get",
              ].forEach((e) => {
                w[e] = x(v, e, void 0, n.D.spa);
              }),
              (h.noticeError = function (e, t) {
                "string" == typeof e && (e = new Error(e)),
                  (0, o.p)(
                    f.xS,
                    ["API/noticeError/called"],
                    void 0,
                    n.D.metrics,
                    g
                  ),
                  (0, o.p)(
                    "err",
                    [e, (0, s.z)(), !1, t],
                    void 0,
                    n.D.jserrors,
                    g
                  );
              }),
              u.il ? (0, d.b)(() => A(), !0) : A(),
              h
            );
          })(e, v);
          return (
            (0, h.Qy)(e, _, "api"),
            (0, h.Qy)(e, A, "exposed"),
            (0, h.EZ)("activatedFeatures", p.T),
            _
          );
        }
      },
      3325: (e, t, r) => {
        r.d(t, { D: () => n, p: () => i });
        const n = {
            ajax: "ajax",
            jserrors: "jserrors",
            metrics: "metrics",
            pageAction: "page_action",
            pageViewEvent: "page_view_event",
            pageViewTiming: "page_view_timing",
            sessionReplay: "session_replay",
            sessionTrace: "session_trace",
            spa: "spa",
          },
          i = {
            [n.pageViewEvent]: 1,
            [n.pageViewTiming]: 2,
            [n.metrics]: 3,
            [n.jserrors]: 4,
            [n.ajax]: 5,
            [n.sessionTrace]: 6,
            [n.pageAction]: 7,
            [n.spa]: 8,
            [n.sessionReplay]: 9,
          };
      },
    },
    n = {};
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e](o, o.exports, i), o.exports;
  }
  (i.m = r),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      (({
        78: "page_action-aggregate",
        147: "metrics-aggregate",
        193: "session_trace-aggregate",
        242: "session-manager",
        317: "jserrors-aggregate",
        348: "page_view_timing-aggregate",
        412: "lazy-feature-loader",
        439: "async-api",
        538: "recorder",
        590: "session_replay-aggregate",
        675: "compressor",
        786: "page_view_event-aggregate",
        873: "spa-aggregate",
        898: "ajax-aggregate",
      }[e] || e) +
      "." +
      {
        78: "467f8594",
        147: "b86cefcf",
        193: "ac30a1f3",
        242: "d080e4cc",
        317: "319b8300",
        348: "7b2a53ee",
        412: "c1052c27",
        439: "e9f77430",
        538: "9c5c1546",
        590: "8b420469",
        646: "9e7a6b8d",
        675: "9614fd62",
        786: "4988d952",
        860: "95a91211",
        873: "550eec7b",
        898: "d95c640e",
      }[e] +
      "-1.237.1.min.js")),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "NRBA:"),
    (i.l = (r, n, o, a) => {
      if (e[r]) e[r].push(n);
      else {
        var s, c;
        if (void 0 !== o)
          for (
            var d = document.getElementsByTagName("script"), u = 0;
            u < d.length;
            u++
          ) {
            var l = d[u];
            if (
              l.getAttribute("src") == r ||
              l.getAttribute("data-webpack") == t + o
            ) {
              s = l;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          s.setAttribute("data-webpack", t + o),
          (s.src = r)),
          (e[r] = [n]);
        var f = (t, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = e[r];
            if (
              (delete e[r],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = f.bind(null, s.onerror)),
          (s.onload = f.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.j = 635),
    (i.p = "https://js-agent.newrelic.com/"),
    (() => {
      var e = { 635: 0, 249: 0 };
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var o = new Promise((r, i) => (n = e[t] = [r, i]));
            r.push((n[2] = o));
            var a = i.p + i.u(t),
              s = new Error();
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = a),
                    n[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var n,
            o,
            [a, s, c] = r,
            d = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
            if (c) c(i);
          }
          for (t && t(r); d < a.length; d++)
            (o = a[d]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (window.webpackChunkNRBA = window.webpackChunkNRBA || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = {};
  (() => {
    i.r(o);
    var e = i(50);
    class t {
      addPageAction(t, r) {
        (0, e.Z)(
          "Call to agent api addPageAction failed. The session trace feature is not currently initialized."
        );
      }
      setPageViewName(t, r) {
        (0, e.Z)(
          "Call to agent api setPageViewName failed. The page view feature is not currently initialized."
        );
      }
      setCustomAttribute(t, r, n) {
        (0, e.Z)(
          "Call to agent api setCustomAttribute failed. The js errors feature is not currently initialized."
        );
      }
      noticeError(t, r) {
        (0, e.Z)(
          "Call to agent api noticeError failed. The js errors feature is not currently initialized."
        );
      }
      setUserId(t) {
        (0, e.Z)(
          "Call to agent api setUserId failed. The js errors feature is not currently initialized."
        );
      }
      setErrorHandler(t) {
        (0, e.Z)(
          "Call to agent api setErrorHandler failed. The js errors feature is not currently initialized."
        );
      }
      finished(t) {
        (0, e.Z)(
          "Call to agent api finished failed. The page action feature is not currently initialized."
        );
      }
      addRelease(t, r) {
        (0, e.Z)(
          "Call to agent api addRelease failed. The agent is not currently initialized."
        );
      }
    }
    var r = i(3325),
      n = i(5763);
    const a = Object.values(r.D);
    function s(e) {
      const t = {};
      return (
        a.forEach((r) => {
          t[r] = (function (e, t) {
            return !1 !== (0, n.Mt)(t, "".concat(e, ".enabled"));
          })(r, e);
        }),
        t
      );
    }
    var c = i(9144);
    var d = i(5546),
      u = i(385),
      l = i(8e3),
      f = i(5938),
      h = i(3960);
    class g extends f.W {
      constructor(e, t, r) {
        let n =
          !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        super(e, t, r),
          (this.auto = n),
          this.abortHandler,
          this.featAggregate,
          this.onAggregateImported,
          n && (0, l.R)(e, r);
      }
      importAggregator() {
        let t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if (this.featAggregate || !this.auto) return;
        const r =
          u.il &&
          !0 === (0, n.Mt)(this.agentIdentifier, "privacy.cookies_enabled");
        let o;
        this.onAggregateImported = new Promise((e) => {
          o = e;
        });
        const a = async () => {
          let n;
          try {
            if (r) {
              const { setupAgentSession: e } = await Promise.all([
                i.e(860),
                i.e(242),
              ]).then(i.bind(i, 3228));
              n = e(this.agentIdentifier);
            }
          } catch (t) {
            (0, e.Z)(
              "A problem occurred when starting up session manager. This page will not start or extend any session.",
              t
            );
          }
          try {
            if (!this.shouldImportAgg(this.featureName, n))
              return (
                (0, l.L)(this.agentIdentifier, this.featureName), void o(!1)
              );
            const { lazyFeatureLoader: e } = await i
                .e(412)
                .then(i.bind(i, 8582)),
              { Aggregate: r } = await e(this.featureName, "aggregate");
            (this.featAggregate = new r(
              this.agentIdentifier,
              this.aggregator,
              t
            )),
              o(!0);
          } catch (t) {
            (0, e.Z)(
              "Downloading and initializing ".concat(
                this.featureName,
                " failed..."
              ),
              t
            ),
              this.abortHandler?.(),
              o(!1);
          }
        };
        u.il ? (0, h.b)(() => a(), !0) : a();
      }
      shouldImportAgg(e, t) {
        return (
          e !== r.D.sessionReplay ||
          (!!n.Yu.MO &&
            !1 !== (0, n.Mt)(this.agentIdentifier, "session_trace.enabled") &&
            (!!t?.isNew || !!t?.state.sessionReplay))
        );
      }
    }
    var p = i(7633),
      m = i(7894);
    class v extends g {
      static featureName = p.t9;
      constructor(e, t) {
        let i =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (
          (super(e, t, p.t9, i),
          ("undefined" == typeof PerformanceNavigationTiming || u.Tt) &&
            "undefined" != typeof PerformanceTiming)
        ) {
          const t = (0, n.OP)(e);
          (t[p.Dz] = Math.max(Date.now() - t.offset, 0)),
            (0, h.K)(() => (t[p.qw] = Math.max((0, m.z)() - t[p.Dz], 0))),
            (0, h.b)(() => {
              const e = (0, m.z)();
              (t[p.OJ] = Math.max(e - t[p.Dz], 0)),
                (0, d.p)(
                  "timing",
                  ["load", e],
                  void 0,
                  r.D.pageViewTiming,
                  this.ee
                );
            });
        }
        this.importAggregator();
      }
    }
    var b = i(1117),
      y = i(1284);
    class w extends b.w {
      constructor(e) {
        super(e), (this.aggregatedData = {});
      }
      store(e, t, r, n, i) {
        var o = this.getBucket(e, t, r, i);
        return (
          (o.metrics = (function (e, t) {
            t || (t = { count: 0 });
            return (
              (t.count += 1),
              (0, y.D)(e, function (e, r) {
                t[e] = x(r, t[e]);
              }),
              t
            );
          })(n, o.metrics)),
          o
        );
      }
      merge(e, t, r, n, i) {
        var o = this.getBucket(e, t, n, i);
        if (o.metrics) {
          var a = o.metrics;
          (a.count += r.count),
            (0, y.D)(r, function (e, t) {
              if ("count" !== e) {
                var n = a[e],
                  i = r[e];
                i && !i.c
                  ? (a[e] = x(i.t, n))
                  : (a[e] = (function (e, t) {
                      if (!t) return e;
                      t.c || (t = A(t.t));
                      return (
                        (t.min = Math.min(e.min, t.min)),
                        (t.max = Math.max(e.max, t.max)),
                        (t.t += e.t),
                        (t.sos += e.sos),
                        (t.c += e.c),
                        t
                      );
                    })(i, a[e]));
              }
            });
        } else o.metrics = r;
      }
      storeMetric(e, t, r, n) {
        var i = this.getBucket(e, t, r);
        return (i.stats = x(n, i.stats)), i;
      }
      getBucket(e, t, r, n) {
        this.aggregatedData[e] || (this.aggregatedData[e] = {});
        var i = this.aggregatedData[e][t];
        return (
          i ||
            ((i = this.aggregatedData[e][t] = { params: r || {} }),
            n && (i.custom = n)),
          i
        );
      }
      get(e, t) {
        return t
          ? this.aggregatedData[e] && this.aggregatedData[e][t]
          : this.aggregatedData[e];
      }
      take(e) {
        for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++)
          (t[(r = e[i])] = E(this.aggregatedData[r])),
            t[r].length && (n = !0),
            delete this.aggregatedData[r];
        return n ? t : null;
      }
    }
    function x(e, t) {
      return null == e
        ? (function (e) {
            e ? e.c++ : (e = { c: 1 });
            return e;
          })(t)
        : t
        ? (t.c || (t = A(t.t)),
          (t.c += 1),
          (t.t += e),
          (t.sos += e * e),
          e > t.max && (t.max = e),
          e < t.min && (t.min = e),
          t)
        : { t: e };
    }
    function A(e) {
      return { t: e, min: e, max: e, sos: e * e, c: 1 };
    }
    function E(e) {
      return "object" != typeof e ? [] : (0, y.D)(e, T);
    }
    function T(e, t) {
      return t;
    }
    var _ = i(8632),
      j = i(4402),
      D = i(4351);
    var C = i(7956),
      N = i(3239),
      S = i(9251);
    class O extends g {
      static featureName = S.t;
      constructor(e, t) {
        let r =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, S.t, r),
          u.il &&
            (((0, n.OP)(e).initHidden = Boolean(
              "hidden" === document.visibilityState
            )),
            (0, C.N)(
              () => (0, d.p)("docHidden", [(0, m.z)()], void 0, S.t, this.ee),
              !0
            ),
            (0, N.bP)("pagehide", () =>
              (0, d.p)("winPagehide", [(0, m.z)()], void 0, S.t, this.ee)
            ),
            this.importAggregator());
      }
    }
    var P = i(3081);
    class R extends g {
      static featureName = P.t9;
      constructor(e, t) {
        let r =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, P.t9, r), this.importAggregator();
      }
    }
    var I = i(6660);
    class k {
      constructor(e, t, r, n) {
        (this.name = "UncaughtError"),
          (this.message = e),
          (this.sourceURL = t),
          (this.line = r),
          (this.column = n);
      }
    }
    class H extends g {
      static featureName = I.t;
      #e = new Set();
      constructor(e, t) {
        let n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, I.t, n);
        try {
          this.removeOnAbort = new AbortController();
        } catch (e) {}
        this.ee.on("fn-err", (e, t, n) => {
          this.abortHandler &&
            !this.#e.has(n) &&
            (this.#e.add(n),
            (0, d.p)(
              "err",
              [this.#t(n), (0, m.z)()],
              void 0,
              r.D.jserrors,
              this.ee
            ));
        }),
          this.ee.on("internal-error", (e) => {
            this.abortHandler &&
              (0, d.p)(
                "ierr",
                [this.#t(e), (0, m.z)(), !0],
                void 0,
                r.D.jserrors,
                this.ee
              );
          }),
          u._A.addEventListener(
            "unhandledrejection",
            (e) => {
              this.abortHandler &&
                (0, d.p)(
                  "err",
                  [
                    this.#r(e),
                    (0, m.z)(),
                    !1,
                    { unhandledPromiseRejection: 1 },
                  ],
                  void 0,
                  r.D.jserrors,
                  this.ee
                );
            },
            (0, N.m$)(!1, this.removeOnAbort?.signal)
          ),
          u._A.addEventListener(
            "error",
            (e) => {
              this.abortHandler &&
                (this.#e.has(e.error)
                  ? this.#e.delete(e.error)
                  : (0, d.p)(
                      "err",
                      [this.#n(e), (0, m.z)()],
                      void 0,
                      r.D.jserrors,
                      this.ee
                    ));
            },
            (0, N.m$)(!1, this.removeOnAbort?.signal)
          ),
          (this.abortHandler = this.#i),
          this.importAggregator();
      }
      #i() {
        this.removeOnAbort?.abort(),
          this.#e.clear(),
          (this.abortHandler = void 0);
      }
      #t(e) {
        return e instanceof Error
          ? e
          : void 0 !== e?.message
          ? new k(
              e.message,
              e.filename || e.sourceURL,
              e.lineno || e.line,
              e.colno || e.col
            )
          : new k("string" == typeof e ? e : (0, D.P)(e));
      }
      #r(e) {
        let t = "Unhandled Promise Rejection: ";
        if (e?.reason instanceof Error)
          try {
            return (e.reason.message = t + e.reason.message), e.reason;
          } catch (t) {
            return e.reason;
          }
        if (void 0 === e.reason) return new k(t);
        const r = this.#t(e.reason);
        return (r.message = t + r.message), r;
      }
      #n(e) {
        return e.error instanceof Error
          ? e.error
          : new k(e.message, e.filename, e.lineno, e.colno);
      }
    }
    var z = i(2210);
    let L = 1;
    const M = "nr@id";
    function B(e) {
      const t = typeof e;
      return !e || ("object" !== t && "function" !== t)
        ? -1
        : e === u._A
        ? 0
        : (0, z.X)(e, M, function () {
            return L++;
          });
    }
    function F(e) {
      if ("string" == typeof e && e.length) return e.length;
      if ("object" == typeof e) {
        if (
          "undefined" != typeof ArrayBuffer &&
          e instanceof ArrayBuffer &&
          e.byteLength
        )
          return e.byteLength;
        if ("undefined" != typeof Blob && e instanceof Blob && e.size)
          return e.size;
        if (!("undefined" != typeof FormData && e instanceof FormData))
          try {
            return (0, D.P)(e).length;
          } catch (e) {
            return;
          }
      }
    }
    var U = i(1214),
      q = i(7243);
    class Z {
      constructor(e) {
        (this.agentIdentifier = e),
          (this.generateTracePayload = this.generateTracePayload.bind(this)),
          (this.shouldGenerateTrace = this.shouldGenerateTrace.bind(this));
      }
      generateTracePayload(e) {
        if (!this.shouldGenerateTrace(e)) return null;
        var t = (0, n.DL)(this.agentIdentifier);
        if (!t) return null;
        var r = (t.accountID || "").toString() || null,
          i = (t.agentID || "").toString() || null,
          o = (t.trustKey || "").toString() || null;
        if (!r || !i) return null;
        var a = (0, j.M)(),
          s = (0, j.Ht)(),
          c = Date.now(),
          d = { spanId: a, traceId: s, timestamp: c };
        return (
          (e.sameOrigin ||
            (this.isAllowedOrigin(e) &&
              this.useTraceContextHeadersForCors())) &&
            ((d.traceContextParentHeader =
              this.generateTraceContextParentHeader(a, s)),
            (d.traceContextStateHeader = this.generateTraceContextStateHeader(
              a,
              c,
              r,
              i,
              o
            ))),
          ((e.sameOrigin && !this.excludeNewrelicHeader()) ||
            (!e.sameOrigin &&
              this.isAllowedOrigin(e) &&
              this.useNewrelicHeaderForCors())) &&
            (d.newrelicHeader = this.generateTraceHeader(a, s, c, r, i, o)),
          d
        );
      }
      generateTraceContextParentHeader(e, t) {
        return "00-" + t + "-" + e + "-01";
      }
      generateTraceContextStateHeader(e, t, r, n, i) {
        return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t;
      }
      generateTraceHeader(e, t, r, n, i, o) {
        if (!("function" == typeof u._A?.btoa)) return null;
        var a = {
          v: [0, 1],
          d: { ty: "Browser", ac: n, ap: i, id: e, tr: t, ti: r },
        };
        return o && n !== o && (a.d.tk = o), btoa((0, D.P)(a));
      }
      shouldGenerateTrace(e) {
        return this.isDtEnabled() && this.isAllowedOrigin(e);
      }
      isAllowedOrigin(e) {
        var t = !1,
          r = {};
        if (
          ((0, n.Mt)(this.agentIdentifier, "distributed_tracing") &&
            (r = (0, n.P_)(this.agentIdentifier).distributed_tracing),
          e.sameOrigin)
        )
          t = !0;
        else if (r.allowed_origins instanceof Array)
          for (var i = 0; i < r.allowed_origins.length; i++) {
            var o = (0, q.e)(r.allowed_origins[i]);
            if (
              e.hostname === o.hostname &&
              e.protocol === o.protocol &&
              e.port === o.port
            ) {
              t = !0;
              break;
            }
          }
        return t;
      }
      isDtEnabled() {
        var e = (0, n.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.enabled;
      }
      excludeNewrelicHeader() {
        var e = (0, n.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.exclude_newrelic_header;
      }
      useNewrelicHeaderForCors() {
        var e = (0, n.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !1 !== e.cors_use_newrelic_header;
      }
      useTraceContextHeadersForCors() {
        var e = (0, n.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.cors_use_tracecontext_headers;
      }
    }
    var G = i(7825),
      V = ["load", "error", "abort", "timeout"],
      X = V.length,
      W = n.Yu.REQ,
      Y = u._A.XMLHttpRequest;
    class Q extends g {
      static featureName = G.t;
      constructor(e, t) {
        let i =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, G.t, i),
          (0, n.OP)(e).xhrWrappable &&
            ((this.dt = new Z(e)),
            (this.handler = (e, t, r, n) => (0, d.p)(e, t, r, n, this.ee)),
            (0, U.u5)(this.ee),
            (0, U.Kf)(this.ee),
            (function (e, t, i, o) {
              function a(e) {
                var t = this;
                (t.totalCbs = 0),
                  (t.called = 0),
                  (t.cbTime = 0),
                  (t.end = E),
                  (t.ended = !1),
                  (t.xhrGuids = {}),
                  (t.lastSize = null),
                  (t.loadCaptureCalled = !1),
                  (t.params = this.params || {}),
                  (t.metrics = this.metrics || {}),
                  e.addEventListener(
                    "load",
                    function (r) {
                      _(t, e);
                    },
                    (0, N.m$)(!1)
                  ),
                  u.IF ||
                    e.addEventListener(
                      "progress",
                      function (e) {
                        t.lastSize = e.loaded;
                      },
                      (0, N.m$)(!1)
                    );
              }
              function s(e) {
                (this.params = { method: e[0] }),
                  T(this, e[1]),
                  (this.metrics = {});
              }
              function c(t, r) {
                var i = (0, n.DL)(e);
                i.xpid &&
                  this.sameOrigin &&
                  r.setRequestHeader("X-NewRelic-ID", i.xpid);
                var a = o.generateTracePayload(this.parsedOrigin);
                if (a) {
                  var s = !1;
                  a.newrelicHeader &&
                    (r.setRequestHeader("newrelic", a.newrelicHeader),
                    (s = !0)),
                    a.traceContextParentHeader &&
                      (r.setRequestHeader(
                        "traceparent",
                        a.traceContextParentHeader
                      ),
                      a.traceContextStateHeader &&
                        r.setRequestHeader(
                          "tracestate",
                          a.traceContextStateHeader
                        ),
                      (s = !0)),
                    s && (this.dt = a);
                }
              }
              function d(e, r) {
                var n = this.metrics,
                  i = e[0],
                  o = this;
                if (n && i) {
                  var a = F(i);
                  a && (n.txSize = a);
                }
                (this.startTime = (0, m.z)()),
                  (this.listener = function (e) {
                    try {
                      "abort" !== e.type ||
                        o.loadCaptureCalled ||
                        (o.params.aborted = !0),
                        ("load" !== e.type ||
                          (o.called === o.totalCbs &&
                            (o.onloadCalled || "function" != typeof r.onload) &&
                            "function" == typeof o.end)) &&
                          o.end(r);
                    } catch (e) {
                      try {
                        t.emit("internal-error", [e]);
                      } catch (e) {}
                    }
                  });
                for (var s = 0; s < X; s++)
                  r.addEventListener(V[s], this.listener, (0, N.m$)(!1));
              }
              function l(e, t, r) {
                (this.cbTime += e),
                  t ? (this.onloadCalled = !0) : (this.called += 1),
                  this.called !== this.totalCbs ||
                    (!this.onloadCalled && "function" == typeof r.onload) ||
                    "function" != typeof this.end ||
                    this.end(r);
              }
              function f(e, t) {
                var r = "" + B(e) + !!t;
                this.xhrGuids &&
                  !this.xhrGuids[r] &&
                  ((this.xhrGuids[r] = !0), (this.totalCbs += 1));
              }
              function h(e, t) {
                var r = "" + B(e) + !!t;
                this.xhrGuids &&
                  this.xhrGuids[r] &&
                  (delete this.xhrGuids[r], (this.totalCbs -= 1));
              }
              function g() {
                this.endTime = (0, m.z)();
              }
              function p(e, r) {
                r instanceof Y &&
                  "load" === e[0] &&
                  t.emit("xhr-load-added", [e[1], e[2]], r);
              }
              function v(e, r) {
                r instanceof Y &&
                  "load" === e[0] &&
                  t.emit("xhr-load-removed", [e[1], e[2]], r);
              }
              function b(e, t, r) {
                t instanceof Y &&
                  ("onload" === r && (this.onload = !0),
                  ("load" === (e[0] && e[0].type) || this.onload) &&
                    (this.xhrCbStart = (0, m.z)()));
              }
              function y(e, r) {
                this.xhrCbStart &&
                  t.emit(
                    "xhr-cb-time",
                    [(0, m.z)() - this.xhrCbStart, this.onload, r],
                    r
                  );
              }
              function w(e) {
                var t,
                  r = e[1] || {};
                "string" == typeof e[0]
                  ? (t = e[0])
                  : e[0] && e[0].url
                  ? (t = e[0].url)
                  : u._A?.URL && e[0] && e[0] instanceof URL && (t = e[0].href),
                  t &&
                    ((this.parsedOrigin = (0, q.e)(t)),
                    (this.sameOrigin = this.parsedOrigin.sameOrigin));
                var n = o.generateTracePayload(this.parsedOrigin);
                if (n && (n.newrelicHeader || n.traceContextParentHeader))
                  if (
                    "string" == typeof e[0] ||
                    (u._A?.URL && e[0] && e[0] instanceof URL)
                  ) {
                    var i = {};
                    for (var a in r) i[a] = r[a];
                    (i.headers = new Headers(r.headers || {})),
                      s(i.headers, n) && (this.dt = n),
                      e.length > 1 ? (e[1] = i) : e.push(i);
                  } else
                    e[0] && e[0].headers && s(e[0].headers, n) && (this.dt = n);
                function s(e, t) {
                  var r = !1;
                  return (
                    t.newrelicHeader &&
                      (e.set("newrelic", t.newrelicHeader), (r = !0)),
                    t.traceContextParentHeader &&
                      (e.set("traceparent", t.traceContextParentHeader),
                      t.traceContextStateHeader &&
                        e.set("tracestate", t.traceContextStateHeader),
                      (r = !0)),
                    r
                  );
                }
              }
              function x(e, t) {
                (this.params = {}),
                  (this.metrics = {}),
                  (this.startTime = (0, m.z)()),
                  (this.dt = t),
                  e.length >= 1 && (this.target = e[0]),
                  e.length >= 2 && (this.opts = e[1]);
                var r,
                  n = this.opts || {},
                  i = this.target;
                "string" == typeof i
                  ? (r = i)
                  : "object" == typeof i && i instanceof W
                  ? (r = i.url)
                  : u._A?.URL &&
                    "object" == typeof i &&
                    i instanceof URL &&
                    (r = i.href),
                  T(this, r);
                var o = (
                  "" + ((i && i instanceof W && i.method) || n.method || "GET")
                ).toUpperCase();
                (this.params.method = o), (this.txSize = F(n.body) || 0);
              }
              function A(e, t) {
                var n;
                (this.endTime = (0, m.z)()),
                  this.params || (this.params = {}),
                  (this.params.status = t ? t.status : 0),
                  "string" == typeof this.rxSize &&
                    this.rxSize.length > 0 &&
                    (n = +this.rxSize);
                var o = {
                  txSize: this.txSize,
                  rxSize: n,
                  duration: (0, m.z)() - this.startTime,
                };
                i(
                  "xhr",
                  [this.params, o, this.startTime, this.endTime, "fetch"],
                  this,
                  r.D.ajax
                );
              }
              function E(e) {
                var t = this.params,
                  n = this.metrics;
                if (!this.ended) {
                  this.ended = !0;
                  for (var o = 0; o < X; o++)
                    e.removeEventListener(V[o], this.listener, !1);
                  t.aborted ||
                    ((n.duration = (0, m.z)() - this.startTime),
                    this.loadCaptureCalled || 4 !== e.readyState
                      ? null == t.status && (t.status = 0)
                      : _(this, e),
                    (n.cbTime = this.cbTime),
                    i(
                      "xhr",
                      [t, n, this.startTime, this.endTime, "xhr"],
                      this,
                      r.D.ajax
                    ));
                }
              }
              function T(e, t) {
                var r = (0, q.e)(t),
                  n = e.params;
                (n.hostname = r.hostname),
                  (n.port = r.port),
                  (n.protocol = r.protocol),
                  (n.host = r.hostname + ":" + r.port),
                  (n.pathname = r.pathname),
                  (e.parsedOrigin = r),
                  (e.sameOrigin = r.sameOrigin);
              }
              function _(e, t) {
                e.params.status = t.status;
                var r = (function (e, t) {
                  var r = e.responseType;
                  return "json" === r && null !== t
                    ? t
                    : "arraybuffer" === r || "blob" === r || "json" === r
                    ? F(e.response)
                    : "text" === r || "" === r || void 0 === r
                    ? F(e.responseText)
                    : void 0;
                })(t, e.lastSize);
                if ((r && (e.metrics.rxSize = r), e.sameOrigin)) {
                  var n = t.getResponseHeader("X-NewRelic-App-Data");
                  n && (e.params.cat = n.split(", ").pop());
                }
                e.loadCaptureCalled = !0;
              }
              t.on("new-xhr", a),
                t.on("open-xhr-start", s),
                t.on("open-xhr-end", c),
                t.on("send-xhr-start", d),
                t.on("xhr-cb-time", l),
                t.on("xhr-load-added", f),
                t.on("xhr-load-removed", h),
                t.on("xhr-resolved", g),
                t.on("addEventListener-end", p),
                t.on("removeEventListener-end", v),
                t.on("fn-end", y),
                t.on("fetch-before-start", w),
                t.on("fetch-start", x),
                t.on("fn-start", b),
                t.on("fetch-done", A);
            })(e, this.ee, this.handler, this.dt),
            this.importAggregator());
      }
    }
    var K = i(3614);
    const {
      BST_RESOURCE: J,
      RESOURCE: ee,
      START: te,
      END: re,
      FEATURE_NAME: ne,
      FN_END: ie,
      FN_START: oe,
      PUSH_STATE: ae,
    } = K;
    var se = i(7836);
    const {
      FEATURE_NAME: ce,
      START: de,
      END: ue,
      BODY: le,
      CB_END: fe,
      JS_TIME: he,
      FETCH: ge,
      FN_START: pe,
      CB_START: me,
      FN_END: ve,
    } = se;
    var be = i(4649);
    class ye extends g {
      static featureName = be.t;
      constructor(e, t) {
        let r =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, be.t, r), this.importAggregator();
      }
    }
    new (class extends t {
      constructor(t) {
        let r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : (0, j.ky)(16);
        super(),
          u._A
            ? ((this.agentIdentifier = r),
              (this.sharedAggregator = new w({
                agentIdentifier: this.agentIdentifier,
              })),
              (this.features = {}),
              (this.desiredFeatures = new Set(t.features || [])),
              this.desiredFeatures.add(v),
              Object.assign(
                this,
                (0, c.j)(this.agentIdentifier, t, t.loaderType || "agent")
              ),
              this.start())
            : (0, e.Z)(
                "Failed to initial the agent. Could not determine the runtime environment."
              );
      }
      get config() {
        return {
          info: (0, n.C5)(this.agentIdentifier),
          init: (0, n.P_)(this.agentIdentifier),
          loader_config: (0, n.DL)(this.agentIdentifier),
          runtime: (0, n.OP)(this.agentIdentifier),
        };
      }
      start() {
        const t = "features";
        try {
          const n = s(this.agentIdentifier),
            i = [...this.desiredFeatures];
          i.sort((e, t) => r.p[e.featureName] - r.p[t.featureName]),
            i.forEach((t) => {
              if (n[t.featureName] || t.featureName === r.D.pageViewEvent) {
                const i = (function (e) {
                  switch (e) {
                    case r.D.ajax:
                      return [r.D.jserrors];
                    case r.D.sessionTrace:
                      return [r.D.ajax, r.D.pageViewEvent];
                    case r.D.sessionReplay:
                      return [r.D.sessionTrace];
                    case r.D.pageViewTiming:
                      return [r.D.pageViewEvent];
                    default:
                      return [];
                  }
                })(t.featureName);
                i.every((e) => n[e]) ||
                  (0, e.Z)(
                    ""
                      .concat(
                        t.featureName,
                        " is enabled but one or more dependent features has been disabled ("
                      )
                      .concat(
                        (0, D.P)(i),
                        "). This may cause unintended consequences or missing data..."
                      )
                  ),
                  (this.features[t.featureName] = new t(
                    this.agentIdentifier,
                    this.sharedAggregator
                  ));
              }
            }),
            (0, _.Qy)(this.agentIdentifier, this.features, t);
        } catch (r) {
          (0, e.Z)(
            "Failed to initialize all enabled instrument classes (agent aborted) -",
            r
          );
          for (const e in this.features) this.features[e].abortHandler?.();
          const n = (0, _.fP)();
          return (
            delete n.initializedAgents[this.agentIdentifier]?.api,
            delete n.initializedAgents[this.agentIdentifier]?.[t],
            delete this.sharedAggregator,
            n.ee?.abort(),
            delete n.ee?.get(this.agentIdentifier),
            !1
          );
        }
      }
      addToTrace(t) {
        (0, e.Z)(
          "Call to agent api addToTrace failed. The page action feature is not currently initialized."
        );
      }
      setCurrentRouteName(t) {
        (0, e.Z)(
          "Call to agent api setCurrentRouteName failed. The spa feature is not currently initialized."
        );
      }
      interaction() {
        (0, e.Z)(
          "Call to agent api interaction failed. The spa feature is not currently initialized."
        );
      }
    })({
      features: [
        Q,
        v,
        O,
        class extends g {
          static featureName = ne;
          constructor(e, t) {
            if (
              (super(
                e,
                t,
                ne,
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
              ),
              !u.il)
            )
              return;
            const n = this.ee;
            let i;
            (0, U.QU)(n),
              (this.eventsEE = (0, U.em)(n)),
              this.eventsEE.on(oe, function (e, t) {
                this.bstStart = (0, m.z)();
              }),
              this.eventsEE.on(ie, function (e, t) {
                (0,
                d.p)("bst", [e[0], t, this.bstStart, (0, m.z)()], void 0, r.D.sessionTrace, n);
              }),
              n.on(ae + te, function (e) {
                (this.time = (0, m.z)()),
                  (this.startPath = location.pathname + location.hash);
              }),
              n.on(ae + re, function (e) {
                (0,
                d.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, r.D.sessionTrace, n);
              });
            try {
              (i = new PerformanceObserver((e) => {
                const t = e.getEntries();
                (0, d.p)(J, [t], void 0, r.D.sessionTrace, n);
              })),
                i.observe({ type: ee, buffered: !0 });
            } catch (e) {}
            this.importAggregator({ resourceObserver: i });
          }
        },
        R,
        ye,
        H,
        class extends g {
          static featureName = ce;
          constructor(e, t) {
            if (
              (super(
                e,
                t,
                ce,
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                  arguments[2]
              ),
              !u.il)
            )
              return;
            if (!(0, n.OP)(e).xhrWrappable) return;
            try {
              this.removeOnAbort = new AbortController();
            } catch (e) {}
            let r,
              i = 0;
            const o = this.ee.get("tracer"),
              a = (0, U._L)(this.ee),
              s = (0, U.Lg)(this.ee),
              c = (0, U.BV)(this.ee),
              d = (0, U.Kf)(this.ee),
              l = this.ee.get("events"),
              f = (0, U.u5)(this.ee),
              h = (0, U.QU)(this.ee),
              g = (0, U.Gm)(this.ee);
            function p(e, t) {
              h.emit("newURL", ["" + window.location, t]);
            }
            function v() {
              i++, (r = window.location.hash), (this[pe] = (0, m.z)());
            }
            function b() {
              i--, window.location.hash !== r && p(0, !0);
              var e = (0, m.z)();
              (this[he] = ~~this[he] + e - this[pe]), (this[ve] = e);
            }
            function y(e, t) {
              e.on(t, function () {
                this[t] = (0, m.z)();
              });
            }
            this.ee.on(pe, v),
              s.on(me, v),
              a.on(me, v),
              this.ee.on(ve, b),
              s.on(fe, b),
              a.on(fe, b),
              this.ee.buffer([pe, ve, "xhr-resolved"], this.featureName),
              l.buffer([pe], this.featureName),
              c.buffer(
                ["setTimeout" + ue, "clearTimeout" + de, pe],
                this.featureName
              ),
              d.buffer([pe, "new-xhr", "send-xhr" + de], this.featureName),
              f.buffer(
                [ge + de, ge + "-done", ge + le + de, ge + le + ue],
                this.featureName
              ),
              h.buffer(["newURL"], this.featureName),
              g.buffer([pe], this.featureName),
              s.buffer(
                ["propagate", me, fe, "executor-err", "resolve" + de],
                this.featureName
              ),
              o.buffer([pe, "no-" + pe], this.featureName),
              a.buffer(
                ["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"],
                this.featureName
              ),
              y(f, ge + de),
              y(f, ge + "-done"),
              y(a, "new-jsonp"),
              y(a, "jsonp-end"),
              y(a, "cb-start"),
              h.on("pushState-end", p),
              h.on("replaceState-end", p),
              window.addEventListener(
                "hashchange",
                p,
                (0, N.m$)(!0, this.removeOnAbort?.signal)
              ),
              window.addEventListener(
                "load",
                p,
                (0, N.m$)(!0, this.removeOnAbort?.signal)
              ),
              window.addEventListener(
                "popstate",
                function () {
                  p(0, i > 1);
                },
                (0, N.m$)(!0, this.removeOnAbort?.signal)
              ),
              (this.abortHandler = this.#i),
              this.importAggregator();
          }
          #i() {
            this.removeOnAbort?.abort(), (this.abortHandler = void 0);
          }
        },
      ],
      loaderType: "spa",
    });
  })(),
    (window.NRBA = o);
})();
