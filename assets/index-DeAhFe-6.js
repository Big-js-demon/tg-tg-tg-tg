(function() {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        s(o);
    new MutationObserver(o => {
        for (const c of o)
            if (c.type === "childList")
                for (const f of c.addedNodes)
                    f.tagName === "LINK" && f.rel === "modulepreload" && s(f)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function r(o) {
        const c = {};
        return o.integrity && (c.integrity = o.integrity),
        o.referrerPolicy && (c.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials" ? c.credentials = "include" : o.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function s(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const c = r(o);
        fetch(o.href, c)
    }
}
)();
var Pc = {
    exports: {}
}
  , Pr = {};
var ng;
function OS() {
    if (ng)
        return Pr;
    ng = 1;
    var t = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.fragment");
    function r(s, o, c) {
        var f = null;
        if (c !== void 0 && (f = "" + c),
        o.key !== void 0 && (f = "" + o.key),
        "key" in o) {
            c = {};
            for (var h in o)
                h !== "key" && (c[h] = o[h])
        } else
            c = o;
        return o = c.ref,
        {
            $$typeof: t,
            type: s,
            key: f,
            ref: o !== void 0 ? o : null,
            props: c
        }
    }
    return Pr.Fragment = a,
    Pr.jsx = r,
    Pr.jsxs = r,
    Pr
}
var ag;
function MS() {
    return ag || (ag = 1,
    Pc.exports = OS()),
    Pc.exports
}
var x = MS()
  , Yc = {
    exports: {}
}
  , le = {};
var ig;
function jS() {
    if (ig)
        return le;
    ig = 1;
    var t = Symbol.for("react.transitional.element")
      , a = Symbol.for("react.portal")
      , r = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , c = Symbol.for("react.consumer")
      , f = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , p = Symbol.for("react.suspense")
      , m = Symbol.for("react.memo")
      , y = Symbol.for("react.lazy")
      , v = Symbol.for("react.activity")
      , S = Symbol.iterator;
    function T(_) {
        return _ === null || typeof _ != "object" ? null : (_ = S && _[S] || _["@@iterator"],
        typeof _ == "function" ? _ : null)
    }
    var M = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , D = Object.assign
      , N = {};
    function V(_, P, K) {
        this.props = _,
        this.context = P,
        this.refs = N,
        this.updater = K || M
    }
    V.prototype.isReactComponent = {},
    V.prototype.setState = function(_, P) {
        if (typeof _ != "object" && typeof _ != "function" && _ != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, _, P, "setState")
    }
    ,
    V.prototype.forceUpdate = function(_) {
        this.updater.enqueueForceUpdate(this, _, "forceUpdate")
    }
    ;
    function R() {}
    R.prototype = V.prototype;
    function U(_, P, K) {
        this.props = _,
        this.context = P,
        this.refs = N,
        this.updater = K || M
    }
    var Y = U.prototype = new R;
    Y.constructor = U,
    D(Y, V.prototype),
    Y.isPureReactComponent = !0;
    var $ = Array.isArray;
    function I() {}
    var X = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , F = Object.prototype.hasOwnProperty;
    function Q(_, P, K) {
        var W = K.ref;
        return {
            $$typeof: t,
            type: _,
            key: P,
            ref: W !== void 0 ? W : null,
            props: K
        }
    }
    function se(_, P) {
        return Q(_.type, P, _.props)
    }
    function _e(_) {
        return typeof _ == "object" && _ !== null && _.$$typeof === t
    }
    function Oe(_) {
        var P = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + _.replace(/[=:]/g, function(K) {
            return P[K]
        })
    }
    var ft = /\/+/g;
    function dt(_, P) {
        return typeof _ == "object" && _ !== null && _.key != null ? Oe("" + _.key) : P.toString(36)
    }
    function bt(_) {
        switch (_.status) {
        case "fulfilled":
            return _.value;
        case "rejected":
            throw _.reason;
        default:
            switch (typeof _.status == "string" ? _.then(I, I) : (_.status = "pending",
            _.then(function(P) {
                _.status === "pending" && (_.status = "fulfilled",
                _.value = P)
            }, function(P) {
                _.status === "pending" && (_.status = "rejected",
                _.reason = P)
            })),
            _.status) {
            case "fulfilled":
                return _.value;
            case "rejected":
                throw _.reason
            }
        }
        throw _
    }
    function k(_, P, K, W, oe) {
        var fe = typeof _;
        (fe === "undefined" || fe === "boolean") && (_ = null);
        var Te = !1;
        if (_ === null)
            Te = !0;
        else
            switch (fe) {
            case "bigint":
            case "string":
            case "number":
                Te = !0;
                break;
            case "object":
                switch (_.$$typeof) {
                case t:
                case a:
                    Te = !0;
                    break;
                case y:
                    return Te = _._init,
                    k(Te(_._payload), P, K, W, oe)
                }
            }
        if (Te)
            return oe = oe(_),
            Te = W === "" ? "." + dt(_, 0) : W,
            $(oe) ? (K = "",
            Te != null && (K = Te.replace(ft, "$&/") + "/"),
            k(oe, P, K, "", function(Fi) {
                return Fi
            })) : oe != null && (_e(oe) && (oe = se(oe, K + (oe.key == null || _ && _.key === oe.key ? "" : ("" + oe.key).replace(ft, "$&/") + "/") + Te)),
            P.push(oe)),
            1;
        Te = 0;
        var pt = W === "" ? "." : W + ":";
        if ($(_))
            for (var Pe = 0; Pe < _.length; Pe++)
                W = _[Pe],
                fe = pt + dt(W, Pe),
                Te += k(W, P, K, fe, oe);
        else if (Pe = T(_),
        typeof Pe == "function")
            for (_ = Pe.call(_),
            Pe = 0; !(W = _.next()).done; )
                W = W.value,
                fe = pt + dt(W, Pe++),
                Te += k(W, P, K, fe, oe);
        else if (fe === "object") {
            if (typeof _.then == "function")
                return k(bt(_), P, K, W, oe);
            throw P = String(_),
            Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(_).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.")
        }
        return Te
    }
    function G(_, P, K) {
        if (_ == null)
            return _;
        var W = []
          , oe = 0;
        return k(_, W, "", "", function(fe) {
            return P.call(K, fe, oe++)
        }),
        W
    }
    function ee(_) {
        if (_._status === -1) {
            var P = _._result;
            P = P(),
            P.then(function(K) {
                (_._status === 0 || _._status === -1) && (_._status = 1,
                _._result = K)
            }, function(K) {
                (_._status === 0 || _._status === -1) && (_._status = 2,
                _._result = K)
            }),
            _._status === -1 && (_._status = 0,
            _._result = P)
        }
        if (_._status === 1)
            return _._result.default;
        throw _._result
    }
    var me = typeof reportError == "function" ? reportError : function(_) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var P = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof _ == "object" && _ !== null && typeof _.message == "string" ? String(_.message) : String(_),
                error: _
            });
            if (!window.dispatchEvent(P))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", _);
            return
        }
        console.error(_)
    }
      , ve = {
        map: G,
        forEach: function(_, P, K) {
            G(_, function() {
                P.apply(this, arguments)
            }, K)
        },
        count: function(_) {
            var P = 0;
            return G(_, function() {
                P++
            }),
            P
        },
        toArray: function(_) {
            return G(_, function(P) {
                return P
            }) || []
        },
        only: function(_) {
            if (!_e(_))
                throw Error("React.Children.only expected to receive a single React element child.");
            return _
        }
    };
    return le.Activity = v,
    le.Children = ve,
    le.Component = V,
    le.Fragment = r,
    le.Profiler = o,
    le.PureComponent = U,
    le.StrictMode = s,
    le.Suspense = p,
    le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = X,
    le.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(_) {
            return X.H.useMemoCache(_)
        }
    },
    le.cache = function(_) {
        return function() {
            return _.apply(null, arguments)
        }
    }
    ,
    le.cacheSignal = function() {
        return null
    }
    ,
    le.cloneElement = function(_, P, K) {
        if (_ == null)
            throw Error("The argument must be a React element, but you passed " + _ + ".");
        var W = D({}, _.props)
          , oe = _.key;
        if (P != null)
            for (fe in P.key !== void 0 && (oe = "" + P.key),
            P)
                !F.call(P, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && P.ref === void 0 || (W[fe] = P[fe]);
        var fe = arguments.length - 2;
        if (fe === 1)
            W.children = K;
        else if (1 < fe) {
            for (var Te = Array(fe), pt = 0; pt < fe; pt++)
                Te[pt] = arguments[pt + 2];
            W.children = Te
        }
        return Q(_.type, oe, W)
    }
    ,
    le.createContext = function(_) {
        return _ = {
            $$typeof: f,
            _currentValue: _,
            _currentValue2: _,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        _.Provider = _,
        _.Consumer = {
            $$typeof: c,
            _context: _
        },
        _
    }
    ,
    le.createElement = function(_, P, K) {
        var W, oe = {}, fe = null;
        if (P != null)
            for (W in P.key !== void 0 && (fe = "" + P.key),
            P)
                F.call(P, W) && W !== "key" && W !== "__self" && W !== "__source" && (oe[W] = P[W]);
        var Te = arguments.length - 2;
        if (Te === 1)
            oe.children = K;
        else if (1 < Te) {
            for (var pt = Array(Te), Pe = 0; Pe < Te; Pe++)
                pt[Pe] = arguments[Pe + 2];
            oe.children = pt
        }
        if (_ && _.defaultProps)
            for (W in Te = _.defaultProps,
            Te)
                oe[W] === void 0 && (oe[W] = Te[W]);
        return Q(_, fe, oe)
    }
    ,
    le.createRef = function() {
        return {
            current: null
        }
    }
    ,
    le.forwardRef = function(_) {
        return {
            $$typeof: h,
            render: _
        }
    }
    ,
    le.isValidElement = _e,
    le.lazy = function(_) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: _
            },
            _init: ee
        }
    }
    ,
    le.memo = function(_, P) {
        return {
            $$typeof: m,
            type: _,
            compare: P === void 0 ? null : P
        }
    }
    ,
    le.startTransition = function(_) {
        var P = X.T
          , K = {};
        X.T = K;
        try {
            var W = _()
              , oe = X.S;
            oe !== null && oe(K, W),
            typeof W == "object" && W !== null && typeof W.then == "function" && W.then(I, me)
        } catch (fe) {
            me(fe)
        } finally {
            P !== null && K.types !== null && (P.types = K.types),
            X.T = P
        }
    }
    ,
    le.unstable_useCacheRefresh = function() {
        return X.H.useCacheRefresh()
    }
    ,
    le.use = function(_) {
        return X.H.use(_)
    }
    ,
    le.useActionState = function(_, P, K) {
        return X.H.useActionState(_, P, K)
    }
    ,
    le.useCallback = function(_, P) {
        return X.H.useCallback(_, P)
    }
    ,
    le.useContext = function(_) {
        return X.H.useContext(_)
    }
    ,
    le.useDebugValue = function() {}
    ,
    le.useDeferredValue = function(_, P) {
        return X.H.useDeferredValue(_, P)
    }
    ,
    le.useEffect = function(_, P) {
        return X.H.useEffect(_, P)
    }
    ,
    le.useEffectEvent = function(_) {
        return X.H.useEffectEvent(_)
    }
    ,
    le.useId = function() {
        return X.H.useId()
    }
    ,
    le.useImperativeHandle = function(_, P, K) {
        return X.H.useImperativeHandle(_, P, K)
    }
    ,
    le.useInsertionEffect = function(_, P) {
        return X.H.useInsertionEffect(_, P)
    }
    ,
    le.useLayoutEffect = function(_, P) {
        return X.H.useLayoutEffect(_, P)
    }
    ,
    le.useMemo = function(_, P) {
        return X.H.useMemo(_, P)
    }
    ,
    le.useOptimistic = function(_, P) {
        return X.H.useOptimistic(_, P)
    }
    ,
    le.useReducer = function(_, P, K) {
        return X.H.useReducer(_, P, K)
    }
    ,
    le.useRef = function(_) {
        return X.H.useRef(_)
    }
    ,
    le.useState = function(_) {
        return X.H.useState(_)
    }
    ,
    le.useSyncExternalStore = function(_, P, K) {
        return X.H.useSyncExternalStore(_, P, K)
    }
    ,
    le.useTransition = function() {
        return X.H.useTransition()
    }
    ,
    le.version = "19.2.0",
    le
}
var rg;
function td() {
    return rg || (rg = 1,
    Yc.exports = jS()),
    Yc.exports
}
var A = td()
  , Gc = {
    exports: {}
}
  , Yr = {}
  , $c = {
    exports: {}
}
  , Xc = {};
var sg;
function NS() {
    return sg || (sg = 1,
    (function(t) {
        function a(k, G) {
            var ee = k.length;
            k.push(G);
            e: for (; 0 < ee; ) {
                var me = ee - 1 >>> 1
                  , ve = k[me];
                if (0 < o(ve, G))
                    k[me] = G,
                    k[ee] = ve,
                    ee = me;
                else
                    break e
            }
        }
        function r(k) {
            return k.length === 0 ? null : k[0]
        }
        function s(k) {
            if (k.length === 0)
                return null;
            var G = k[0]
              , ee = k.pop();
            if (ee !== G) {
                k[0] = ee;
                e: for (var me = 0, ve = k.length, _ = ve >>> 1; me < _; ) {
                    var P = 2 * (me + 1) - 1
                      , K = k[P]
                      , W = P + 1
                      , oe = k[W];
                    if (0 > o(K, ee))
                        W < ve && 0 > o(oe, K) ? (k[me] = oe,
                        k[W] = ee,
                        me = W) : (k[me] = K,
                        k[P] = ee,
                        me = P);
                    else if (W < ve && 0 > o(oe, ee))
                        k[me] = oe,
                        k[W] = ee,
                        me = W;
                    else
                        break e
                }
            }
            return G
        }
        function o(k, G) {
            var ee = k.sortIndex - G.sortIndex;
            return ee !== 0 ? ee : k.id - G.id
        }
        if (t.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            t.unstable_now = function() {
                return c.now()
            }
        } else {
            var f = Date
              , h = f.now();
            t.unstable_now = function() {
                return f.now() - h
            }
        }
        var p = []
          , m = []
          , y = 1
          , v = null
          , S = 3
          , T = !1
          , M = !1
          , D = !1
          , N = !1
          , V = typeof setTimeout == "function" ? setTimeout : null
          , R = typeof clearTimeout == "function" ? clearTimeout : null
          , U = typeof setImmediate < "u" ? setImmediate : null;
        function Y(k) {
            for (var G = r(m); G !== null; ) {
                if (G.callback === null)
                    s(m);
                else if (G.startTime <= k)
                    s(m),
                    G.sortIndex = G.expirationTime,
                    a(p, G);
                else
                    break;
                G = r(m)
            }
        }
        function $(k) {
            if (D = !1,
            Y(k),
            !M)
                if (r(p) !== null)
                    M = !0,
                    I || (I = !0,
                    Oe());
                else {
                    var G = r(m);
                    G !== null && bt($, G.startTime - k)
                }
        }
        var I = !1
          , X = -1
          , F = 5
          , Q = -1;
        function se() {
            return N ? !0 : !(t.unstable_now() - Q < F)
        }
        function _e() {
            if (N = !1,
            I) {
                var k = t.unstable_now();
                Q = k;
                var G = !0;
                try {
                    e: {
                        M = !1,
                        D && (D = !1,
                        R(X),
                        X = -1),
                        T = !0;
                        var ee = S;
                        try {
                            t: {
                                for (Y(k),
                                v = r(p); v !== null && !(v.expirationTime > k && se()); ) {
                                    var me = v.callback;
                                    if (typeof me == "function") {
                                        v.callback = null,
                                        S = v.priorityLevel;
                                        var ve = me(v.expirationTime <= k);
                                        if (k = t.unstable_now(),
                                        typeof ve == "function") {
                                            v.callback = ve,
                                            Y(k),
                                            G = !0;
                                            break t
                                        }
                                        v === r(p) && s(p),
                                        Y(k)
                                    } else
                                        s(p);
                                    v = r(p)
                                }
                                if (v !== null)
                                    G = !0;
                                else {
                                    var _ = r(m);
                                    _ !== null && bt($, _.startTime - k),
                                    G = !1
                                }
                            }
                            break e
                        } finally {
                            v = null,
                            S = ee,
                            T = !1
                        }
                        G = void 0
                    }
                } finally {
                    G ? Oe() : I = !1
                }
            }
        }
        var Oe;
        if (typeof U == "function")
            Oe = function() {
                U(_e)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ft = new MessageChannel
              , dt = ft.port2;
            ft.port1.onmessage = _e,
            Oe = function() {
                dt.postMessage(null)
            }
        } else
            Oe = function() {
                V(_e, 0)
            }
            ;
        function bt(k, G) {
            X = V(function() {
                k(t.unstable_now())
            }, G)
        }
        t.unstable_IdlePriority = 5,
        t.unstable_ImmediatePriority = 1,
        t.unstable_LowPriority = 4,
        t.unstable_NormalPriority = 3,
        t.unstable_Profiling = null,
        t.unstable_UserBlockingPriority = 2,
        t.unstable_cancelCallback = function(k) {
            k.callback = null
        }
        ,
        t.unstable_forceFrameRate = function(k) {
            0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < k ? Math.floor(1e3 / k) : 5
        }
        ,
        t.unstable_getCurrentPriorityLevel = function() {
            return S
        }
        ,
        t.unstable_next = function(k) {
            switch (S) {
            case 1:
            case 2:
            case 3:
                var G = 3;
                break;
            default:
                G = S
            }
            var ee = S;
            S = G;
            try {
                return k()
            } finally {
                S = ee
            }
        }
        ,
        t.unstable_requestPaint = function() {
            N = !0
        }
        ,
        t.unstable_runWithPriority = function(k, G) {
            switch (k) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                k = 3
            }
            var ee = S;
            S = k;
            try {
                return G()
            } finally {
                S = ee
            }
        }
        ,
        t.unstable_scheduleCallback = function(k, G, ee) {
            var me = t.unstable_now();
            switch (typeof ee == "object" && ee !== null ? (ee = ee.delay,
            ee = typeof ee == "number" && 0 < ee ? me + ee : me) : ee = me,
            k) {
            case 1:
                var ve = -1;
                break;
            case 2:
                ve = 250;
                break;
            case 5:
                ve = 1073741823;
                break;
            case 4:
                ve = 1e4;
                break;
            default:
                ve = 5e3
            }
            return ve = ee + ve,
            k = {
                id: y++,
                callback: G,
                priorityLevel: k,
                startTime: ee,
                expirationTime: ve,
                sortIndex: -1
            },
            ee > me ? (k.sortIndex = ee,
            a(m, k),
            r(p) === null && k === r(m) && (D ? (R(X),
            X = -1) : D = !0,
            bt($, ee - me))) : (k.sortIndex = ve,
            a(p, k),
            M || T || (M = !0,
            I || (I = !0,
            Oe()))),
            k
        }
        ,
        t.unstable_shouldYield = se,
        t.unstable_wrapCallback = function(k) {
            var G = S;
            return function() {
                var ee = S;
                S = G;
                try {
                    return k.apply(this, arguments)
                } finally {
                    S = ee
                }
            }
        }
    }
    )(Xc)),
    Xc
}
var lg;
function US() {
    return lg || (lg = 1,
    $c.exports = NS()),
    $c.exports
}
var Kc = {
    exports: {}
}
  , ht = {};
var og;
function LS() {
    if (og)
        return ht;
    og = 1;
    var t = td();
    function a(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                m += "&args[]=" + encodeURIComponent(arguments[y])
        }
        return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function r() {}
    var s = {
        d: {
            f: r,
            r: function() {
                throw Error(a(522))
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r
        },
        p: 0,
        findDOMNode: null
    }
      , o = Symbol.for("react.portal");
    function c(p, m, y) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: o,
            key: v == null ? null : "" + v,
            children: p,
            containerInfo: m,
            implementation: y
        }
    }
    var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(p, m) {
        if (p === "font")
            return "";
        if (typeof m == "string")
            return m === "use-credentials" ? m : ""
    }
    return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s,
    ht.createPortal = function(p, m) {
        var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            throw Error(a(299));
        return c(p, m, null, y)
    }
    ,
    ht.flushSync = function(p) {
        var m = f.T
          , y = s.p;
        try {
            if (f.T = null,
            s.p = 2,
            p)
                return p()
        } finally {
            f.T = m,
            s.p = y,
            s.d.f()
        }
    }
    ,
    ht.preconnect = function(p, m) {
        typeof p == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        s.d.C(p, m))
    }
    ,
    ht.prefetchDNS = function(p) {
        typeof p == "string" && s.d.D(p)
    }
    ,
    ht.preinit = function(p, m) {
        if (typeof p == "string" && m && typeof m.as == "string") {
            var y = m.as
              , v = h(y, m.crossOrigin)
              , S = typeof m.integrity == "string" ? m.integrity : void 0
              , T = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
            y === "style" ? s.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: T
            }) : y === "script" && s.d.X(p, {
                crossOrigin: v,
                integrity: S,
                fetchPriority: T,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
        }
    }
    ,
    ht.preinitModule = function(p, m) {
        if (typeof p == "string")
            if (typeof m == "object" && m !== null) {
                if (m.as == null || m.as === "script") {
                    var y = h(m.as, m.crossOrigin);
                    s.d.M(p, {
                        crossOrigin: y,
                        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                        nonce: typeof m.nonce == "string" ? m.nonce : void 0
                    })
                }
            } else
                m == null && s.d.M(p)
    }
    ,
    ht.preload = function(p, m) {
        if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
            var y = m.as
              , v = h(y, m.crossOrigin);
            s.d.L(p, y, {
                crossOrigin: v,
                integrity: typeof m.integrity == "string" ? m.integrity : void 0,
                nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                type: typeof m.type == "string" ? m.type : void 0,
                fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
                referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
                imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
                imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                media: typeof m.media == "string" ? m.media : void 0
            })
        }
    }
    ,
    ht.preloadModule = function(p, m) {
        if (typeof p == "string")
            if (m) {
                var y = h(m.as, m.crossOrigin);
                s.d.m(p, {
                    as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
                    crossOrigin: y,
                    integrity: typeof m.integrity == "string" ? m.integrity : void 0
                })
            } else
                s.d.m(p)
    }
    ,
    ht.requestFormReset = function(p) {
        s.d.r(p)
    }
    ,
    ht.unstable_batchedUpdates = function(p, m) {
        return p(m)
    }
    ,
    ht.useFormState = function(p, m, y) {
        return f.H.useFormState(p, m, y)
    }
    ,
    ht.useFormStatus = function() {
        return f.H.useHostTransitionStatus()
    }
    ,
    ht.version = "19.2.0",
    ht
}
var ug;
function VS() {
    if (ug)
        return Kc.exports;
    ug = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (a) {
                console.error(a)
            }
    }
    return t(),
    Kc.exports = LS(),
    Kc.exports
}
var cg;
function BS() {
    if (cg)
        return Yr;
    cg = 1;
    var t = US()
      , a = td()
      , r = VS();
    function s(e) {
        var n = "https://react.dev/errors/" + e;
        if (1 < arguments.length) {
            n += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                n += "&args[]=" + encodeURIComponent(arguments[i])
        }
        return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function o(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function c(e) {
        var n = e
          , i = e;
        if (e.alternate)
            for (; n.return; )
                n = n.return;
        else {
            e = n;
            do
                n = e,
                (n.flags & 4098) !== 0 && (i = n.return),
                e = n.return;
            while (e)
        }
        return n.tag === 3 ? i : null
    }
    function f(e) {
        if (e.tag === 13) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate,
            e !== null && (n = e.memoizedState)),
            n !== null)
                return n.dehydrated
        }
        return null
    }
    function h(e) {
        if (e.tag === 31) {
            var n = e.memoizedState;
            if (n === null && (e = e.alternate,
            e !== null && (n = e.memoizedState)),
            n !== null)
                return n.dehydrated
        }
        return null
    }
    function p(e) {
        if (c(e) !== e)
            throw Error(s(188))
    }
    function m(e) {
        var n = e.alternate;
        if (!n) {
            if (n = c(e),
            n === null)
                throw Error(s(188));
            return n !== e ? null : e
        }
        for (var i = e, l = n; ; ) {
            var u = i.return;
            if (u === null)
                break;
            var d = u.alternate;
            if (d === null) {
                if (l = u.return,
                l !== null) {
                    i = l;
                    continue
                }
                break
            }
            if (u.child === d.child) {
                for (d = u.child; d; ) {
                    if (d === i)
                        return p(u),
                        e;
                    if (d === l)
                        return p(u),
                        n;
                    d = d.sibling
                }
                throw Error(s(188))
            }
            if (i.return !== l.return)
                i = u,
                l = d;
            else {
                for (var g = !1, b = u.child; b; ) {
                    if (b === i) {
                        g = !0,
                        i = u,
                        l = d;
                        break
                    }
                    if (b === l) {
                        g = !0,
                        l = u,
                        i = d;
                        break
                    }
                    b = b.sibling
                }
                if (!g) {
                    for (b = d.child; b; ) {
                        if (b === i) {
                            g = !0,
                            i = d,
                            l = u;
                            break
                        }
                        if (b === l) {
                            g = !0,
                            l = d,
                            i = u;
                            break
                        }
                        b = b.sibling
                    }
                    if (!g)
                        throw Error(s(189))
                }
            }
            if (i.alternate !== l)
                throw Error(s(190))
        }
        if (i.tag !== 3)
            throw Error(s(188));
        return i.stateNode.current === i ? e : n
    }
    function y(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return e;
        for (e = e.child; e !== null; ) {
            if (n = y(e),
            n !== null)
                return n;
            e = e.sibling
        }
        return null
    }
    var v = Object.assign
      , S = Symbol.for("react.element")
      , T = Symbol.for("react.transitional.element")
      , M = Symbol.for("react.portal")
      , D = Symbol.for("react.fragment")
      , N = Symbol.for("react.strict_mode")
      , V = Symbol.for("react.profiler")
      , R = Symbol.for("react.consumer")
      , U = Symbol.for("react.context")
      , Y = Symbol.for("react.forward_ref")
      , $ = Symbol.for("react.suspense")
      , I = Symbol.for("react.suspense_list")
      , X = Symbol.for("react.memo")
      , F = Symbol.for("react.lazy")
      , Q = Symbol.for("react.activity")
      , se = Symbol.for("react.memo_cache_sentinel")
      , _e = Symbol.iterator;
    function Oe(e) {
        return e === null || typeof e != "object" ? null : (e = _e && e[_e] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var ft = Symbol.for("react.client.reference");
    function dt(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.$$typeof === ft ? null : e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case D:
            return "Fragment";
        case V:
            return "Profiler";
        case N:
            return "StrictMode";
        case $:
            return "Suspense";
        case I:
            return "SuspenseList";
        case Q:
            return "Activity"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case M:
                return "Portal";
            case U:
                return e.displayName || "Context";
            case R:
                return (e._context.displayName || "Context") + ".Consumer";
            case Y:
                var n = e.render;
                return e = e.displayName,
                e || (e = n.displayName || n.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case X:
                return n = e.displayName || null,
                n !== null ? n : dt(e.type) || "Memo";
            case F:
                n = e._payload,
                e = e._init;
                try {
                    return dt(e(n))
                } catch {}
            }
        return null
    }
    var bt = Array.isArray
      , k = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , G = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , ee = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , me = []
      , ve = -1;
    function _(e) {
        return {
            current: e
        }
    }
    function P(e) {
        0 > ve || (e.current = me[ve],
        me[ve] = null,
        ve--)
    }
    function K(e, n) {
        ve++,
        me[ve] = e.current,
        e.current = n
    }
    var W = _(null)
      , oe = _(null)
      , fe = _(null)
      , Te = _(null);
    function pt(e, n) {
        switch (K(fe, n),
        K(oe, e),
        K(W, null),
        n.nodeType) {
        case 9:
        case 11:
            e = (e = n.documentElement) && (e = e.namespaceURI) ? w0(e) : 0;
            break;
        default:
            if (e = n.tagName,
            n = n.namespaceURI)
                n = w0(n),
                e = _0(n, e);
            else
                switch (e) {
                case "svg":
                    e = 1;
                    break;
                case "math":
                    e = 2;
                    break;
                default:
                    e = 0
                }
        }
        P(W),
        K(W, e)
    }
    function Pe() {
        P(W),
        P(oe),
        P(fe)
    }
    function Fi(e) {
        e.memoizedState !== null && K(Te, e);
        var n = W.current
          , i = _0(n, e.type);
        n !== i && (K(oe, e),
        K(W, i))
    }
    function xs(e) {
        oe.current === e && (P(W),
        P(oe)),
        Te.current === e && (P(Te),
        kr._currentValue = ee)
    }
    var wo, th;
    function va(e) {
        if (wo === void 0)
            try {
                throw Error()
            } catch (i) {
                var n = i.stack.trim().match(/\n( *(at )?)/);
                wo = n && n[1] || "",
                th = -1 < i.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < i.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + wo + e + th
    }
    var _o = !1;
    function zo(e, n) {
        if (!e || _o)
            return "";
        _o = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var l = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (n) {
                            var H = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(H.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(H, [])
                                } catch (L) {
                                    var j = L
                                }
                                Reflect.construct(e, [], H)
                            } else {
                                try {
                                    H.call()
                                } catch (L) {
                                    j = L
                                }
                                e.call(H.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (L) {
                                j = L
                            }
                            (H = e()) && typeof H.catch == "function" && H.catch(function() {})
                        }
                    } catch (L) {
                        if (L && j && typeof L.stack == "string")
                            return [L.stack, j.stack]
                    }
                    return [null, null]
                }
            };
            l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var d = l.DetermineComponentFrameRoot()
              , g = d[0]
              , b = d[1];
            if (g && b) {
                var E = g.split(`
`)
                  , O = b.split(`
`);
                for (u = l = 0; l < E.length && !E[l].includes("DetermineComponentFrameRoot"); )
                    l++;
                for (; u < O.length && !O[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (l === E.length || u === O.length)
                    for (l = E.length - 1,
                    u = O.length - 1; 1 <= l && 0 <= u && E[l] !== O[u]; )
                        u--;
                for (; 1 <= l && 0 <= u; l--,
                u--)
                    if (E[l] !== O[u]) {
                        if (l !== 1 || u !== 1)
                            do
                                if (l--,
                                u--,
                                0 > u || E[l] !== O[u]) {
                                    var B = `
` + E[l].replace(" at new ", " at ");
                                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)),
                                    B
                                }
                            while (1 <= l && 0 <= u);
                        break
                    }
            }
        } finally {
            _o = !1,
            Error.prepareStackTrace = i
        }
        return (i = e ? e.displayName || e.name : "") ? va(i) : ""
    }
    function o2(e, n) {
        switch (e.tag) {
        case 26:
        case 27:
        case 5:
            return va(e.type);
        case 16:
            return va("Lazy");
        case 13:
            return e.child !== n && n !== null ? va("Suspense Fallback") : va("Suspense");
        case 19:
            return va("SuspenseList");
        case 0:
        case 15:
            return zo(e.type, !1);
        case 11:
            return zo(e.type.render, !1);
        case 1:
            return zo(e.type, !0);
        case 31:
            return va("Activity");
        default:
            return ""
        }
    }
    function nh(e) {
        try {
            var n = ""
              , i = null;
            do
                n += o2(e, i),
                i = e,
                e = e.return;
            while (e);
            return n
        } catch (l) {
            return `
Error generating stack: ` + l.message + `
` + l.stack
        }
    }
    var Do = Object.prototype.hasOwnProperty
      , Co = t.unstable_scheduleCallback
      , Ro = t.unstable_cancelCallback
      , u2 = t.unstable_shouldYield
      , c2 = t.unstable_requestPaint
      , Ct = t.unstable_now
      , f2 = t.unstable_getCurrentPriorityLevel
      , ah = t.unstable_ImmediatePriority
      , ih = t.unstable_UserBlockingPriority
      , Ss = t.unstable_NormalPriority
      , d2 = t.unstable_LowPriority
      , rh = t.unstable_IdlePriority
      , h2 = t.log
      , m2 = t.unstable_setDisableYieldValue
      , Ji = null
      , Rt = null;
    function Zn(e) {
        if (typeof h2 == "function" && m2(e),
        Rt && typeof Rt.setStrictMode == "function")
            try {
                Rt.setStrictMode(Ji, e)
            } catch {}
    }
    var Ot = Math.clz32 ? Math.clz32 : y2
      , p2 = Math.log
      , g2 = Math.LN2;
    function y2(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (p2(e) / g2 | 0) | 0
    }
    var Ts = 256
      , As = 262144
      , Es = 4194304;
    function ba(e) {
        var n = e & 42;
        if (n !== 0)
            return n;
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return e & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return e
        }
    }
    function ws(e, n, i) {
        var l = e.pendingLanes;
        if (l === 0)
            return 0;
        var u = 0
          , d = e.suspendedLanes
          , g = e.pingedLanes;
        e = e.warmLanes;
        var b = l & 134217727;
        return b !== 0 ? (l = b & ~d,
        l !== 0 ? u = ba(l) : (g &= b,
        g !== 0 ? u = ba(g) : i || (i = b & ~e,
        i !== 0 && (u = ba(i))))) : (b = l & ~d,
        b !== 0 ? u = ba(b) : g !== 0 ? u = ba(g) : i || (i = l & ~e,
        i !== 0 && (u = ba(i)))),
        u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u,
        i = n & -n,
        d >= i || d === 32 && (i & 4194048) !== 0) ? n : u
    }
    function Ii(e, n) {
        return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0
    }
    function v2(e, n) {
        switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return n + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return n + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function sh() {
        var e = Es;
        return Es <<= 1,
        (Es & 62914560) === 0 && (Es = 4194304),
        e
    }
    function Oo(e) {
        for (var n = [], i = 0; 31 > i; i++)
            n.push(e);
        return n
    }
    function Wi(e, n) {
        e.pendingLanes |= n,
        n !== 268435456 && (e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0)
    }
    function b2(e, n, i, l, u, d) {
        var g = e.pendingLanes;
        e.pendingLanes = i,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.warmLanes = 0,
        e.expiredLanes &= i,
        e.entangledLanes &= i,
        e.errorRecoveryDisabledLanes &= i,
        e.shellSuspendCounter = 0;
        var b = e.entanglements
          , E = e.expirationTimes
          , O = e.hiddenUpdates;
        for (i = g & ~i; 0 < i; ) {
            var B = 31 - Ot(i)
              , H = 1 << B;
            b[B] = 0,
            E[B] = -1;
            var j = O[B];
            if (j !== null)
                for (O[B] = null,
                B = 0; B < j.length; B++) {
                    var L = j[B];
                    L !== null && (L.lane &= -536870913)
                }
            i &= ~H
        }
        l !== 0 && lh(e, l, 0),
        d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(g & ~n))
    }
    function lh(e, n, i) {
        e.pendingLanes |= n,
        e.suspendedLanes &= ~n;
        var l = 31 - Ot(n);
        e.entangledLanes |= n,
        e.entanglements[l] = e.entanglements[l] | 1073741824 | i & 261930
    }
    function oh(e, n) {
        var i = e.entangledLanes |= n;
        for (e = e.entanglements; i; ) {
            var l = 31 - Ot(i)
              , u = 1 << l;
            u & n | e[l] & n && (e[l] |= n),
            i &= ~u
        }
    }
    function uh(e, n) {
        var i = n & -n;
        return i = (i & 42) !== 0 ? 1 : Mo(i),
        (i & (e.suspendedLanes | n)) !== 0 ? 0 : i
    }
    function Mo(e) {
        switch (e) {
        case 2:
            e = 1;
            break;
        case 8:
            e = 4;
            break;
        case 32:
            e = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            e = 128;
            break;
        case 268435456:
            e = 134217728;
            break;
        default:
            e = 0
        }
        return e
    }
    function jo(e) {
        return e &= -e,
        2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function ch() {
        var e = G.p;
        return e !== 0 ? e : (e = window.event,
        e === void 0 ? 32 : Q0(e.type))
    }
    function fh(e, n) {
        var i = G.p;
        try {
            return G.p = e,
            n()
        } finally {
            G.p = i
        }
    }
    var Hn = Math.random().toString(36).slice(2)
      , it = "__reactFiber$" + Hn
      , xt = "__reactProps$" + Hn
      , $a = "__reactContainer$" + Hn
      , No = "__reactEvents$" + Hn
      , x2 = "__reactListeners$" + Hn
      , S2 = "__reactHandles$" + Hn
      , dh = "__reactResources$" + Hn
      , er = "__reactMarker$" + Hn;
    function Uo(e) {
        delete e[it],
        delete e[xt],
        delete e[No],
        delete e[x2],
        delete e[S2]
    }
    function Xa(e) {
        var n = e[it];
        if (n)
            return n;
        for (var i = e.parentNode; i; ) {
            if (n = i[$a] || i[it]) {
                if (i = n.alternate,
                n.child !== null || i !== null && i.child !== null)
                    for (e = j0(e); e !== null; ) {
                        if (i = e[it])
                            return i;
                        e = j0(e)
                    }
                return n
            }
            e = i,
            i = e.parentNode
        }
        return null
    }
    function Ka(e) {
        if (e = e[it] || e[$a]) {
            var n = e.tag;
            if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
                return e
        }
        return null
    }
    function tr(e) {
        var n = e.tag;
        if (n === 5 || n === 26 || n === 27 || n === 6)
            return e.stateNode;
        throw Error(s(33))
    }
    function Qa(e) {
        var n = e[dh];
        return n || (n = e[dh] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        n
    }
    function nt(e) {
        e[er] = !0
    }
    var hh = new Set
      , mh = {};
    function xa(e, n) {
        Fa(e, n),
        Fa(e + "Capture", n)
    }
    function Fa(e, n) {
        for (mh[e] = n,
        e = 0; e < n.length; e++)
            hh.add(n[e])
    }
    var T2 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ph = {}
      , gh = {};
    function A2(e) {
        return Do.call(gh, e) ? !0 : Do.call(ph, e) ? !1 : T2.test(e) ? gh[e] = !0 : (ph[e] = !0,
        !1)
    }
    function _s(e, n, i) {
        if (A2(n))
            if (i === null)
                e.removeAttribute(n);
            else {
                switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                    e.removeAttribute(n);
                    return;
                case "boolean":
                    var l = n.toLowerCase().slice(0, 5);
                    if (l !== "data-" && l !== "aria-") {
                        e.removeAttribute(n);
                        return
                    }
                }
                e.setAttribute(n, "" + i)
            }
    }
    function zs(e, n, i) {
        if (i === null)
            e.removeAttribute(n);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(n);
                return
            }
            e.setAttribute(n, "" + i)
        }
    }
    function yn(e, n, i, l) {
        if (l === null)
            e.removeAttribute(i);
        else {
            switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                e.removeAttribute(i);
                return
            }
            e.setAttributeNS(n, i, "" + l)
        }
    }
    function kt(e) {
        switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function yh(e) {
        var n = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
    }
    function E2(e, n, i) {
        var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
        if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
            var u = l.get
              , d = l.set;
            return Object.defineProperty(e, n, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(g) {
                    i = "" + g,
                    d.call(this, g)
                }
            }),
            Object.defineProperty(e, n, {
                enumerable: l.enumerable
            }),
            {
                getValue: function() {
                    return i
                },
                setValue: function(g) {
                    i = "" + g
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[n]
                }
            }
        }
    }
    function Lo(e) {
        if (!e._valueTracker) {
            var n = yh(e) ? "checked" : "value";
            e._valueTracker = E2(e, n, "" + e[n])
        }
    }
    function vh(e) {
        if (!e)
            return !1;
        var n = e._valueTracker;
        if (!n)
            return !0;
        var i = n.getValue()
          , l = "";
        return e && (l = yh(e) ? e.checked ? "true" : "false" : e.value),
        e = l,
        e !== i ? (n.setValue(e),
        !0) : !1
    }
    function Ds(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    var w2 = /[\n"\\]/g;
    function Zt(e) {
        return e.replace(w2, function(n) {
            return "\\" + n.charCodeAt(0).toString(16) + " "
        })
    }
    function Vo(e, n, i, l, u, d, g, b) {
        e.name = "",
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"),
        n != null ? g === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + kt(n)) : e.value !== "" + kt(n) && (e.value = "" + kt(n)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"),
        n != null ? Bo(e, g, kt(n)) : i != null ? Bo(e, g, kt(i)) : l != null && e.removeAttribute("value"),
        u == null && d != null && (e.defaultChecked = !!d),
        u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"),
        b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? e.name = "" + kt(b) : e.removeAttribute("name")
    }
    function bh(e, n, i, l, u, d, g, b) {
        if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d),
        n != null || i != null) {
            if (!(d !== "submit" && d !== "reset" || n != null)) {
                Lo(e);
                return
            }
            i = i != null ? "" + kt(i) : "",
            n = n != null ? "" + kt(n) : i,
            b || n === e.value || (e.value = n),
            e.defaultValue = n
        }
        l = l ?? u,
        l = typeof l != "function" && typeof l != "symbol" && !!l,
        e.checked = b ? e.checked : !!l,
        e.defaultChecked = !!l,
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g),
        Lo(e)
    }
    function Bo(e, n, i) {
        n === "number" && Ds(e.ownerDocument) === e || e.defaultValue === "" + i || (e.defaultValue = "" + i)
    }
    function Ja(e, n, i, l) {
        if (e = e.options,
        n) {
            n = {};
            for (var u = 0; u < i.length; u++)
                n["$" + i[u]] = !0;
            for (i = 0; i < e.length; i++)
                u = n.hasOwnProperty("$" + e[i].value),
                e[i].selected !== u && (e[i].selected = u),
                u && l && (e[i].defaultSelected = !0)
        } else {
            for (i = "" + kt(i),
            n = null,
            u = 0; u < e.length; u++) {
                if (e[u].value === i) {
                    e[u].selected = !0,
                    l && (e[u].defaultSelected = !0);
                    return
                }
                n !== null || e[u].disabled || (n = e[u])
            }
            n !== null && (n.selected = !0)
        }
    }
    function xh(e, n, i) {
        if (n != null && (n = "" + kt(n),
        n !== e.value && (e.value = n),
        i == null)) {
            e.defaultValue !== n && (e.defaultValue = n);
            return
        }
        e.defaultValue = i != null ? "" + kt(i) : ""
    }
    function Sh(e, n, i, l) {
        if (n == null) {
            if (l != null) {
                if (i != null)
                    throw Error(s(92));
                if (bt(l)) {
                    if (1 < l.length)
                        throw Error(s(93));
                    l = l[0]
                }
                i = l
            }
            i == null && (i = ""),
            n = i
        }
        i = kt(n),
        e.defaultValue = i,
        l = e.textContent,
        l === i && l !== "" && l !== null && (e.value = l),
        Lo(e)
    }
    function Ia(e, n) {
        if (n) {
            var i = e.firstChild;
            if (i && i === e.lastChild && i.nodeType === 3) {
                i.nodeValue = n;
                return
            }
        }
        e.textContent = n
    }
    var _2 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Th(e, n, i) {
        var l = n.indexOf("--") === 0;
        i == null || typeof i == "boolean" || i === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, i) : typeof i != "number" || i === 0 || _2.has(n) ? n === "float" ? e.cssFloat = i : e[n] = ("" + i).trim() : e[n] = i + "px"
    }
    function Ah(e, n, i) {
        if (n != null && typeof n != "object")
            throw Error(s(62));
        if (e = e.style,
        i != null) {
            for (var l in i)
                !i.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
            for (var u in n)
                l = n[u],
                n.hasOwnProperty(u) && i[u] !== l && Th(e, u, l)
        } else
            for (var d in n)
                n.hasOwnProperty(d) && Th(e, d, n[d])
    }
    function ko(e) {
        if (e.indexOf("-") === -1)
            return !1;
        switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var z2 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , D2 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Cs(e) {
        return D2.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
    }
    function vn() {}
    var Zo = null;
    function Ho(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Wa = null
      , ei = null;
    function Eh(e) {
        var n = Ka(e);
        if (n && (e = n.stateNode)) {
            var i = e[xt] || null;
            e: switch (e = n.stateNode,
            n.type) {
            case "input":
                if (Vo(e, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name),
                n = i.name,
                i.type === "radio" && n != null) {
                    for (i = e; i.parentNode; )
                        i = i.parentNode;
                    for (i = i.querySelectorAll('input[name="' + Zt("" + n) + '"][type="radio"]'),
                    n = 0; n < i.length; n++) {
                        var l = i[n];
                        if (l !== e && l.form === e.form) {
                            var u = l[xt] || null;
                            if (!u)
                                throw Error(s(90));
                            Vo(l, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (n = 0; n < i.length; n++)
                        l = i[n],
                        l.form === e.form && vh(l)
                }
                break e;
            case "textarea":
                xh(e, i.value, i.defaultValue);
                break e;
            case "select":
                n = i.value,
                n != null && Ja(e, !!i.multiple, n, !1)
            }
        }
    }
    var qo = !1;
    function wh(e, n, i) {
        if (qo)
            return e(n, i);
        qo = !0;
        try {
            var l = e(n);
            return l
        } finally {
            if (qo = !1,
            (Wa !== null || ei !== null) && (gl(),
            Wa && (n = Wa,
            e = ei,
            ei = Wa = null,
            Eh(n),
            e)))
                for (n = 0; n < e.length; n++)
                    Eh(e[n])
        }
    }
    function nr(e, n) {
        var i = e.stateNode;
        if (i === null)
            return null;
        var l = i[xt] || null;
        if (l === null)
            return null;
        i = l[n];
        e: switch (n) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (l = !l.disabled) || (e = e.type,
            l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !l;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (i && typeof i != "function")
            throw Error(s(231, n, typeof i));
        return i
    }
    var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Po = !1;
    if (bn)
        try {
            var ar = {};
            Object.defineProperty(ar, "passive", {
                get: function() {
                    Po = !0
                }
            }),
            window.addEventListener("test", ar, ar),
            window.removeEventListener("test", ar, ar)
        } catch {
            Po = !1
        }
    var qn = null
      , Yo = null
      , Rs = null;
    function _h() {
        if (Rs)
            return Rs;
        var e, n = Yo, i = n.length, l, u = "value" in qn ? qn.value : qn.textContent, d = u.length;
        for (e = 0; e < i && n[e] === u[e]; e++)
            ;
        var g = i - e;
        for (l = 1; l <= g && n[i - l] === u[d - l]; l++)
            ;
        return Rs = u.slice(e, 1 < l ? 1 - l : void 0)
    }
    function Os(e) {
        var n = e.keyCode;
        return "charCode" in e ? (e = e.charCode,
        e === 0 && n === 13 && (e = 13)) : e = n,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function Ms() {
        return !0
    }
    function zh() {
        return !1
    }
    function St(e) {
        function n(i, l, u, d, g) {
            this._reactName = i,
            this._targetInst = u,
            this.type = l,
            this.nativeEvent = d,
            this.target = g,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (i = e[b],
                this[b] = i ? i(d) : d[b]);
            return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ms : zh,
            this.isPropagationStopped = zh,
            this
        }
        return v(n.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var i = this.nativeEvent;
                i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1),
                this.isDefaultPrevented = Ms)
            },
            stopPropagation: function() {
                var i = this.nativeEvent;
                i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
                this.isPropagationStopped = Ms)
            },
            persist: function() {},
            isPersistent: Ms
        }),
        n
    }
    var Sa = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, js = St(Sa), ir = v({}, Sa, {
        view: 0,
        detail: 0
    }), C2 = St(ir), Go, $o, rr, Ns = v({}, ir, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ko,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (Go = e.screenX - rr.screenX,
            $o = e.screenY - rr.screenY) : $o = Go = 0,
            rr = e),
            Go)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : $o
        }
    }), Dh = St(Ns), R2 = v({}, Ns, {
        dataTransfer: 0
    }), O2 = St(R2), M2 = v({}, ir, {
        relatedTarget: 0
    }), Xo = St(M2), j2 = v({}, Sa, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), N2 = St(j2), U2 = v({}, Sa, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }), L2 = St(U2), V2 = v({}, Sa, {
        data: 0
    }), Ch = St(V2), B2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, k2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, Z2 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function H2(e) {
        var n = this.nativeEvent;
        return n.getModifierState ? n.getModifierState(e) : (e = Z2[e]) ? !!n[e] : !1
    }
    function Ko() {
        return H2
    }
    var q2 = v({}, ir, {
        key: function(e) {
            if (e.key) {
                var n = B2[e.key] || e.key;
                if (n !== "Unidentified")
                    return n
            }
            return e.type === "keypress" ? (e = Os(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? k2[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ko,
        charCode: function(e) {
            return e.type === "keypress" ? Os(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Os(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , P2 = St(q2)
      , Y2 = v({}, Ns, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Rh = St(Y2)
      , G2 = v({}, ir, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ko
    })
      , $2 = St(G2)
      , X2 = v({}, Sa, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , K2 = St(X2)
      , Q2 = v({}, Ns, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , F2 = St(Q2)
      , J2 = v({}, Sa, {
        newState: 0,
        oldState: 0
    })
      , I2 = St(J2)
      , W2 = [9, 13, 27, 32]
      , Qo = bn && "CompositionEvent" in window
      , sr = null;
    bn && "documentMode" in document && (sr = document.documentMode);
    var ex = bn && "TextEvent" in window && !sr
      , Oh = bn && (!Qo || sr && 8 < sr && 11 >= sr)
      , Mh = " "
      , jh = !1;
    function Nh(e, n) {
        switch (e) {
        case "keyup":
            return W2.indexOf(n.keyCode) !== -1;
        case "keydown":
            return n.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Uh(e) {
        return e = e.detail,
        typeof e == "object" && "data" in e ? e.data : null
    }
    var ti = !1;
    function tx(e, n) {
        switch (e) {
        case "compositionend":
            return Uh(n);
        case "keypress":
            return n.which !== 32 ? null : (jh = !0,
            Mh);
        case "textInput":
            return e = n.data,
            e === Mh && jh ? null : e;
        default:
            return null
        }
    }
    function nx(e, n) {
        if (ti)
            return e === "compositionend" || !Qo && Nh(e, n) ? (e = _h(),
            Rs = Yo = qn = null,
            ti = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                if (n.char && 1 < n.char.length)
                    return n.char;
                if (n.which)
                    return String.fromCharCode(n.which)
            }
            return null;
        case "compositionend":
            return Oh && n.locale !== "ko" ? null : n.data;
        default:
            return null
        }
    }
    var ax = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Lh(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n === "input" ? !!ax[e.type] : n === "textarea"
    }
    function Vh(e, n, i, l) {
        Wa ? ei ? ei.push(l) : ei = [l] : Wa = l,
        n = Al(n, "onChange"),
        0 < n.length && (i = new js("onChange","change",null,i,l),
        e.push({
            event: i,
            listeners: n
        }))
    }
    var lr = null
      , or = null;
    function ix(e) {
        b0(e, 0)
    }
    function Us(e) {
        var n = tr(e);
        if (vh(n))
            return e
    }
    function Bh(e, n) {
        if (e === "change")
            return n
    }
    var kh = !1;
    if (bn) {
        var Fo;
        if (bn) {
            var Jo = "oninput" in document;
            if (!Jo) {
                var Zh = document.createElement("div");
                Zh.setAttribute("oninput", "return;"),
                Jo = typeof Zh.oninput == "function"
            }
            Fo = Jo
        } else
            Fo = !1;
        kh = Fo && (!document.documentMode || 9 < document.documentMode)
    }
    function Hh() {
        lr && (lr.detachEvent("onpropertychange", qh),
        or = lr = null)
    }
    function qh(e) {
        if (e.propertyName === "value" && Us(or)) {
            var n = [];
            Vh(n, or, e, Ho(e)),
            wh(ix, n)
        }
    }
    function rx(e, n, i) {
        e === "focusin" ? (Hh(),
        lr = n,
        or = i,
        lr.attachEvent("onpropertychange", qh)) : e === "focusout" && Hh()
    }
    function sx(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return Us(or)
    }
    function lx(e, n) {
        if (e === "click")
            return Us(n)
    }
    function ox(e, n) {
        if (e === "input" || e === "change")
            return Us(n)
    }
    function ux(e, n) {
        return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
    }
    var Mt = typeof Object.is == "function" ? Object.is : ux;
    function ur(e, n) {
        if (Mt(e, n))
            return !0;
        if (typeof e != "object" || e === null || typeof n != "object" || n === null)
            return !1;
        var i = Object.keys(e)
          , l = Object.keys(n);
        if (i.length !== l.length)
            return !1;
        for (l = 0; l < i.length; l++) {
            var u = i[l];
            if (!Do.call(n, u) || !Mt(e[u], n[u]))
                return !1
        }
        return !0
    }
    function Ph(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function Yh(e, n) {
        var i = Ph(e);
        e = 0;
        for (var l; i; ) {
            if (i.nodeType === 3) {
                if (l = e + i.textContent.length,
                e <= n && l >= n)
                    return {
                        node: i,
                        offset: n - e
                    };
                e = l
            }
            e: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break e
                    }
                    i = i.parentNode
                }
                i = void 0
            }
            i = Ph(i)
        }
    }
    function Gh(e, n) {
        return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Gh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1
    }
    function $h(e) {
        e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
        for (var n = Ds(e.document); n instanceof e.HTMLIFrameElement; ) {
            try {
                var i = typeof n.contentWindow.location.href == "string"
            } catch {
                i = !1
            }
            if (i)
                e = n.contentWindow;
            else
                break;
            n = Ds(e.document)
        }
        return n
    }
    function Io(e) {
        var n = e && e.nodeName && e.nodeName.toLowerCase();
        return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
    }
    var cx = bn && "documentMode" in document && 11 >= document.documentMode
      , ni = null
      , Wo = null
      , cr = null
      , eu = !1;
    function Xh(e, n, i) {
        var l = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
        eu || ni == null || ni !== Ds(l) || (l = ni,
        "selectionStart" in l && Io(l) ? l = {
            start: l.selectionStart,
            end: l.selectionEnd
        } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(),
        l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset
        }),
        cr && ur(cr, l) || (cr = l,
        l = Al(Wo, "onSelect"),
        0 < l.length && (n = new js("onSelect","select",null,n,i),
        e.push({
            event: n,
            listeners: l
        }),
        n.target = ni)))
    }
    function Ta(e, n) {
        var i = {};
        return i[e.toLowerCase()] = n.toLowerCase(),
        i["Webkit" + e] = "webkit" + n,
        i["Moz" + e] = "moz" + n,
        i
    }
    var ai = {
        animationend: Ta("Animation", "AnimationEnd"),
        animationiteration: Ta("Animation", "AnimationIteration"),
        animationstart: Ta("Animation", "AnimationStart"),
        transitionrun: Ta("Transition", "TransitionRun"),
        transitionstart: Ta("Transition", "TransitionStart"),
        transitioncancel: Ta("Transition", "TransitionCancel"),
        transitionend: Ta("Transition", "TransitionEnd")
    }
      , tu = {}
      , Kh = {};
    bn && (Kh = document.createElement("div").style,
    "AnimationEvent" in window || (delete ai.animationend.animation,
    delete ai.animationiteration.animation,
    delete ai.animationstart.animation),
    "TransitionEvent" in window || delete ai.transitionend.transition);
    function Aa(e) {
        if (tu[e])
            return tu[e];
        if (!ai[e])
            return e;
        var n = ai[e], i;
        for (i in n)
            if (n.hasOwnProperty(i) && i in Kh)
                return tu[e] = n[i];
        return e
    }
    var Qh = Aa("animationend")
      , Fh = Aa("animationiteration")
      , Jh = Aa("animationstart")
      , fx = Aa("transitionrun")
      , dx = Aa("transitionstart")
      , hx = Aa("transitioncancel")
      , Ih = Aa("transitionend")
      , Wh = new Map
      , nu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    nu.push("scrollEnd");
    function nn(e, n) {
        Wh.set(e, n),
        xa(n, [e])
    }
    var Ls = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var n = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(n))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", e);
            return
        }
        console.error(e)
    }
      , Ht = []
      , ii = 0
      , au = 0;
    function Vs() {
        for (var e = ii, n = au = ii = 0; n < e; ) {
            var i = Ht[n];
            Ht[n++] = null;
            var l = Ht[n];
            Ht[n++] = null;
            var u = Ht[n];
            Ht[n++] = null;
            var d = Ht[n];
            if (Ht[n++] = null,
            l !== null && u !== null) {
                var g = l.pending;
                g === null ? u.next = u : (u.next = g.next,
                g.next = u),
                l.pending = u
            }
            d !== 0 && em(i, u, d)
        }
    }
    function Bs(e, n, i, l) {
        Ht[ii++] = e,
        Ht[ii++] = n,
        Ht[ii++] = i,
        Ht[ii++] = l,
        au |= l,
        e.lanes |= l,
        e = e.alternate,
        e !== null && (e.lanes |= l)
    }
    function iu(e, n, i, l) {
        return Bs(e, n, i, l),
        ks(e)
    }
    function Ea(e, n) {
        return Bs(e, null, null, n),
        ks(e)
    }
    function em(e, n, i) {
        e.lanes |= i;
        var l = e.alternate;
        l !== null && (l.lanes |= i);
        for (var u = !1, d = e.return; d !== null; )
            d.childLanes |= i,
            l = d.alternate,
            l !== null && (l.childLanes |= i),
            d.tag === 22 && (e = d.stateNode,
            e === null || e._visibility & 1 || (u = !0)),
            e = d,
            d = d.return;
        return e.tag === 3 ? (d = e.stateNode,
        u && n !== null && (u = 31 - Ot(i),
        e = d.hiddenUpdates,
        l = e[u],
        l === null ? e[u] = [n] : l.push(n),
        n.lane = i | 536870912),
        d) : null
    }
    function ks(e) {
        if (50 < Mr)
            throw Mr = 0,
            hc = null,
            Error(s(185));
        for (var n = e.return; n !== null; )
            e = n,
            n = e.return;
        return e.tag === 3 ? e.stateNode : null
    }
    var ri = {};
    function mx(e, n, i, l) {
        this.tag = e,
        this.key = i,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = n,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = l,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function jt(e, n, i, l) {
        return new mx(e,n,i,l)
    }
    function ru(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function xn(e, n) {
        var i = e.alternate;
        return i === null ? (i = jt(e.tag, n, e.key, e.mode),
        i.elementType = e.elementType,
        i.type = e.type,
        i.stateNode = e.stateNode,
        i.alternate = e,
        e.alternate = i) : (i.pendingProps = n,
        i.type = e.type,
        i.flags = 0,
        i.subtreeFlags = 0,
        i.deletions = null),
        i.flags = e.flags & 65011712,
        i.childLanes = e.childLanes,
        i.lanes = e.lanes,
        i.child = e.child,
        i.memoizedProps = e.memoizedProps,
        i.memoizedState = e.memoizedState,
        i.updateQueue = e.updateQueue,
        n = e.dependencies,
        i.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        },
        i.sibling = e.sibling,
        i.index = e.index,
        i.ref = e.ref,
        i.refCleanup = e.refCleanup,
        i
    }
    function tm(e, n) {
        e.flags &= 65011714;
        var i = e.alternate;
        return i === null ? (e.childLanes = 0,
        e.lanes = n,
        e.child = null,
        e.subtreeFlags = 0,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.updateQueue = null,
        e.dependencies = null,
        e.stateNode = null) : (e.childLanes = i.childLanes,
        e.lanes = i.lanes,
        e.child = i.child,
        e.subtreeFlags = 0,
        e.deletions = null,
        e.memoizedProps = i.memoizedProps,
        e.memoizedState = i.memoizedState,
        e.updateQueue = i.updateQueue,
        e.type = i.type,
        n = i.dependencies,
        e.dependencies = n === null ? null : {
            lanes: n.lanes,
            firstContext: n.firstContext
        }),
        e
    }
    function Zs(e, n, i, l, u, d) {
        var g = 0;
        if (l = e,
        typeof e == "function")
            ru(e) && (g = 1);
        else if (typeof e == "string")
            g = bS(e, i, W.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
        else
            e: switch (e) {
            case Q:
                return e = jt(31, i, n, u),
                e.elementType = Q,
                e.lanes = d,
                e;
            case D:
                return wa(i.children, u, d, n);
            case N:
                g = 8,
                u |= 24;
                break;
            case V:
                return e = jt(12, i, n, u | 2),
                e.elementType = V,
                e.lanes = d,
                e;
            case $:
                return e = jt(13, i, n, u),
                e.elementType = $,
                e.lanes = d,
                e;
            case I:
                return e = jt(19, i, n, u),
                e.elementType = I,
                e.lanes = d,
                e;
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case U:
                        g = 10;
                        break e;
                    case R:
                        g = 9;
                        break e;
                    case Y:
                        g = 11;
                        break e;
                    case X:
                        g = 14;
                        break e;
                    case F:
                        g = 16,
                        l = null;
                        break e
                    }
                g = 29,
                i = Error(s(130, e === null ? "null" : typeof e, "")),
                l = null
            }
        return n = jt(g, i, n, u),
        n.elementType = e,
        n.type = l,
        n.lanes = d,
        n
    }
    function wa(e, n, i, l) {
        return e = jt(7, e, l, n),
        e.lanes = i,
        e
    }
    function su(e, n, i) {
        return e = jt(6, e, null, n),
        e.lanes = i,
        e
    }
    function nm(e) {
        var n = jt(18, null, null, 0);
        return n.stateNode = e,
        n
    }
    function lu(e, n, i) {
        return n = jt(4, e.children !== null ? e.children : [], e.key, n),
        n.lanes = i,
        n.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        n
    }
    var am = new WeakMap;
    function qt(e, n) {
        if (typeof e == "object" && e !== null) {
            var i = am.get(e);
            return i !== void 0 ? i : (n = {
                value: e,
                source: n,
                stack: nh(n)
            },
            am.set(e, n),
            n)
        }
        return {
            value: e,
            source: n,
            stack: nh(n)
        }
    }
    var si = []
      , li = 0
      , Hs = null
      , fr = 0
      , Pt = []
      , Yt = 0
      , Pn = null
      , un = 1
      , cn = "";
    function Sn(e, n) {
        si[li++] = fr,
        si[li++] = Hs,
        Hs = e,
        fr = n
    }
    function im(e, n, i) {
        Pt[Yt++] = un,
        Pt[Yt++] = cn,
        Pt[Yt++] = Pn,
        Pn = e;
        var l = un;
        e = cn;
        var u = 32 - Ot(l) - 1;
        l &= ~(1 << u),
        i += 1;
        var d = 32 - Ot(n) + u;
        if (30 < d) {
            var g = u - u % 5;
            d = (l & (1 << g) - 1).toString(32),
            l >>= g,
            u -= g,
            un = 1 << 32 - Ot(n) + u | i << u | l,
            cn = d + e
        } else
            un = 1 << d | i << u | l,
            cn = e
    }
    function ou(e) {
        e.return !== null && (Sn(e, 1),
        im(e, 1, 0))
    }
    function uu(e) {
        for (; e === Hs; )
            Hs = si[--li],
            si[li] = null,
            fr = si[--li],
            si[li] = null;
        for (; e === Pn; )
            Pn = Pt[--Yt],
            Pt[Yt] = null,
            cn = Pt[--Yt],
            Pt[Yt] = null,
            un = Pt[--Yt],
            Pt[Yt] = null
    }
    function rm(e, n) {
        Pt[Yt++] = un,
        Pt[Yt++] = cn,
        Pt[Yt++] = Pn,
        un = n.id,
        cn = n.overflow,
        Pn = e
    }
    var rt = null
      , Me = null
      , ye = !1
      , Yn = null
      , Gt = !1
      , cu = Error(s(519));
    function Gn(e) {
        var n = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw dr(qt(n, e)),
        cu
    }
    function sm(e) {
        var n = e.stateNode
          , i = e.type
          , l = e.memoizedProps;
        switch (n[it] = e,
        n[xt] = l,
        i) {
        case "dialog":
            he("cancel", n),
            he("close", n);
            break;
        case "iframe":
        case "object":
        case "embed":
            he("load", n);
            break;
        case "video":
        case "audio":
            for (i = 0; i < Nr.length; i++)
                he(Nr[i], n);
            break;
        case "source":
            he("error", n);
            break;
        case "img":
        case "image":
        case "link":
            he("error", n),
            he("load", n);
            break;
        case "details":
            he("toggle", n);
            break;
        case "input":
            he("invalid", n),
            bh(n, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0);
            break;
        case "select":
            he("invalid", n);
            break;
        case "textarea":
            he("invalid", n),
            Sh(n, l.value, l.defaultValue, l.children)
        }
        i = l.children,
        typeof i != "string" && typeof i != "number" && typeof i != "bigint" || n.textContent === "" + i || l.suppressHydrationWarning === !0 || A0(n.textContent, i) ? (l.popover != null && (he("beforetoggle", n),
        he("toggle", n)),
        l.onScroll != null && he("scroll", n),
        l.onScrollEnd != null && he("scrollend", n),
        l.onClick != null && (n.onclick = vn),
        n = !0) : n = !1,
        n || Gn(e, !0)
    }
    function lm(e) {
        for (rt = e.return; rt; )
            switch (rt.tag) {
            case 5:
            case 31:
            case 13:
                Gt = !1;
                return;
            case 27:
            case 3:
                Gt = !0;
                return;
            default:
                rt = rt.return
            }
    }
    function oi(e) {
        if (e !== rt)
            return !1;
        if (!ye)
            return lm(e),
            ye = !0,
            !1;
        var n = e.tag, i;
        if ((i = n !== 3 && n !== 27) && ((i = n === 5) && (i = e.type,
        i = !(i !== "form" && i !== "button") || Dc(e.type, e.memoizedProps)),
        i = !i),
        i && Me && Gn(e),
        lm(e),
        n === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(s(317));
            Me = M0(e)
        } else if (n === 31) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(s(317));
            Me = M0(e)
        } else
            n === 27 ? (n = Me,
            ra(e.type) ? (e = jc,
            jc = null,
            Me = e) : Me = n) : Me = rt ? Xt(e.stateNode.nextSibling) : null;
        return !0
    }
    function _a() {
        Me = rt = null,
        ye = !1
    }
    function fu() {
        var e = Yn;
        return e !== null && (wt === null ? wt = e : wt.push.apply(wt, e),
        Yn = null),
        e
    }
    function dr(e) {
        Yn === null ? Yn = [e] : Yn.push(e)
    }
    var du = _(null)
      , za = null
      , Tn = null;
    function $n(e, n, i) {
        K(du, n._currentValue),
        n._currentValue = i
    }
    function An(e) {
        e._currentValue = du.current,
        P(du)
    }
    function hu(e, n, i) {
        for (; e !== null; ) {
            var l = e.alternate;
            if ((e.childLanes & n) !== n ? (e.childLanes |= n,
            l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
            e === i)
                break;
            e = e.return
        }
    }
    function mu(e, n, i, l) {
        var u = e.child;
        for (u !== null && (u.return = e); u !== null; ) {
            var d = u.dependencies;
            if (d !== null) {
                var g = u.child;
                d = d.firstContext;
                e: for (; d !== null; ) {
                    var b = d;
                    d = u;
                    for (var E = 0; E < n.length; E++)
                        if (b.context === n[E]) {
                            d.lanes |= i,
                            b = d.alternate,
                            b !== null && (b.lanes |= i),
                            hu(d.return, i, e),
                            l || (g = null);
                            break e
                        }
                    d = b.next
                }
            } else if (u.tag === 18) {
                if (g = u.return,
                g === null)
                    throw Error(s(341));
                g.lanes |= i,
                d = g.alternate,
                d !== null && (d.lanes |= i),
                hu(g, i, e),
                g = null
            } else
                g = u.child;
            if (g !== null)
                g.return = u;
            else
                for (g = u; g !== null; ) {
                    if (g === e) {
                        g = null;
                        break
                    }
                    if (u = g.sibling,
                    u !== null) {
                        u.return = g.return,
                        g = u;
                        break
                    }
                    g = g.return
                }
            u = g
        }
    }
    function ui(e, n, i, l) {
        e = null;
        for (var u = n, d = !1; u !== null; ) {
            if (!d) {
                if ((u.flags & 524288) !== 0)
                    d = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var g = u.alternate;
                if (g === null)
                    throw Error(s(387));
                if (g = g.memoizedProps,
                g !== null) {
                    var b = u.type;
                    Mt(u.pendingProps.value, g.value) || (e !== null ? e.push(b) : e = [b])
                }
            } else if (u === Te.current) {
                if (g = u.alternate,
                g === null)
                    throw Error(s(387));
                g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(kr) : e = [kr])
            }
            u = u.return
        }
        e !== null && mu(n, e, i, l),
        n.flags |= 262144
    }
    function qs(e) {
        for (e = e.firstContext; e !== null; ) {
            if (!Mt(e.context._currentValue, e.memoizedValue))
                return !0;
            e = e.next
        }
        return !1
    }
    function Da(e) {
        za = e,
        Tn = null,
        e = e.dependencies,
        e !== null && (e.firstContext = null)
    }
    function st(e) {
        return om(za, e)
    }
    function Ps(e, n) {
        return za === null && Da(e),
        om(e, n)
    }
    function om(e, n) {
        var i = n._currentValue;
        if (n = {
            context: n,
            memoizedValue: i,
            next: null
        },
        Tn === null) {
            if (e === null)
                throw Error(s(308));
            Tn = n,
            e.dependencies = {
                lanes: 0,
                firstContext: n
            },
            e.flags |= 524288
        } else
            Tn = Tn.next = n;
        return i
    }
    var px = typeof AbortController < "u" ? AbortController : function() {
        var e = []
          , n = this.signal = {
            aborted: !1,
            addEventListener: function(i, l) {
                e.push(l)
            }
        };
        this.abort = function() {
            n.aborted = !0,
            e.forEach(function(i) {
                return i()
            })
        }
    }
      , gx = t.unstable_scheduleCallback
      , yx = t.unstable_NormalPriority
      , Xe = {
        $$typeof: U,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function pu() {
        return {
            controller: new px,
            data: new Map,
            refCount: 0
        }
    }
    function hr(e) {
        e.refCount--,
        e.refCount === 0 && gx(yx, function() {
            e.controller.abort()
        })
    }
    var mr = null
      , gu = 0
      , ci = 0
      , fi = null;
    function vx(e, n) {
        if (mr === null) {
            var i = mr = [];
            gu = 0,
            ci = bc(),
            fi = {
                status: "pending",
                value: void 0,
                then: function(l) {
                    i.push(l)
                }
            }
        }
        return gu++,
        n.then(um, um),
        n
    }
    function um() {
        if (--gu === 0 && mr !== null) {
            fi !== null && (fi.status = "fulfilled");
            var e = mr;
            mr = null,
            ci = 0,
            fi = null;
            for (var n = 0; n < e.length; n++)
                (0,
                e[n])()
        }
    }
    function bx(e, n) {
        var i = []
          , l = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                i.push(u)
            }
        };
        return e.then(function() {
            l.status = "fulfilled",
            l.value = n;
            for (var u = 0; u < i.length; u++)
                (0,
                i[u])(n)
        }, function(u) {
            for (l.status = "rejected",
            l.reason = u,
            u = 0; u < i.length; u++)
                (0,
                i[u])(void 0)
        }),
        l
    }
    var cm = k.S;
    k.S = function(e, n) {
        Xp = Ct(),
        typeof n == "object" && n !== null && typeof n.then == "function" && vx(e, n),
        cm !== null && cm(e, n)
    }
    ;
    var Ca = _(null);
    function yu() {
        var e = Ca.current;
        return e !== null ? e : Re.pooledCache
    }
    function Ys(e, n) {
        n === null ? K(Ca, Ca.current) : K(Ca, n.pool)
    }
    function fm() {
        var e = yu();
        return e === null ? null : {
            parent: Xe._currentValue,
            pool: e
        }
    }
    var di = Error(s(460))
      , vu = Error(s(474))
      , Gs = Error(s(542))
      , $s = {
        then: function() {}
    };
    function dm(e) {
        return e = e.status,
        e === "fulfilled" || e === "rejected"
    }
    function hm(e, n, i) {
        switch (i = e[i],
        i === void 0 ? e.push(n) : i !== n && (n.then(vn, vn),
        n = i),
        n.status) {
        case "fulfilled":
            return n.value;
        case "rejected":
            throw e = n.reason,
            pm(e),
            e;
        default:
            if (typeof n.status == "string")
                n.then(vn, vn);
            else {
                if (e = Re,
                e !== null && 100 < e.shellSuspendCounter)
                    throw Error(s(482));
                e = n,
                e.status = "pending",
                e.then(function(l) {
                    if (n.status === "pending") {
                        var u = n;
                        u.status = "fulfilled",
                        u.value = l
                    }
                }, function(l) {
                    if (n.status === "pending") {
                        var u = n;
                        u.status = "rejected",
                        u.reason = l
                    }
                })
            }
            switch (n.status) {
            case "fulfilled":
                return n.value;
            case "rejected":
                throw e = n.reason,
                pm(e),
                e
            }
            throw Oa = n,
            di
        }
    }
    function Ra(e) {
        try {
            var n = e._init;
            return n(e._payload)
        } catch (i) {
            throw i !== null && typeof i == "object" && typeof i.then == "function" ? (Oa = i,
            di) : i
        }
    }
    var Oa = null;
    function mm() {
        if (Oa === null)
            throw Error(s(459));
        var e = Oa;
        return Oa = null,
        e
    }
    function pm(e) {
        if (e === di || e === Gs)
            throw Error(s(483))
    }
    var hi = null
      , pr = 0;
    function Xs(e) {
        var n = pr;
        return pr += 1,
        hi === null && (hi = []),
        hm(hi, e, n)
    }
    function gr(e, n) {
        n = n.props.ref,
        e.ref = n !== void 0 ? n : null
    }
    function Ks(e, n) {
        throw n.$$typeof === S ? Error(s(525)) : (e = Object.prototype.toString.call(n),
        Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e)))
    }
    function gm(e) {
        function n(z, w) {
            if (e) {
                var C = z.deletions;
                C === null ? (z.deletions = [w],
                z.flags |= 16) : C.push(w)
            }
        }
        function i(z, w) {
            if (!e)
                return null;
            for (; w !== null; )
                n(z, w),
                w = w.sibling;
            return null
        }
        function l(z) {
            for (var w = new Map; z !== null; )
                z.key !== null ? w.set(z.key, z) : w.set(z.index, z),
                z = z.sibling;
            return w
        }
        function u(z, w) {
            return z = xn(z, w),
            z.index = 0,
            z.sibling = null,
            z
        }
        function d(z, w, C) {
            return z.index = C,
            e ? (C = z.alternate,
            C !== null ? (C = C.index,
            C < w ? (z.flags |= 67108866,
            w) : C) : (z.flags |= 67108866,
            w)) : (z.flags |= 1048576,
            w)
        }
        function g(z) {
            return e && z.alternate === null && (z.flags |= 67108866),
            z
        }
        function b(z, w, C, Z) {
            return w === null || w.tag !== 6 ? (w = su(C, z.mode, Z),
            w.return = z,
            w) : (w = u(w, C),
            w.return = z,
            w)
        }
        function E(z, w, C, Z) {
            var ne = C.type;
            return ne === D ? B(z, w, C.props.children, Z, C.key) : w !== null && (w.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === F && Ra(ne) === w.type) ? (w = u(w, C.props),
            gr(w, C),
            w.return = z,
            w) : (w = Zs(C.type, C.key, C.props, null, z.mode, Z),
            gr(w, C),
            w.return = z,
            w)
        }
        function O(z, w, C, Z) {
            return w === null || w.tag !== 4 || w.stateNode.containerInfo !== C.containerInfo || w.stateNode.implementation !== C.implementation ? (w = lu(C, z.mode, Z),
            w.return = z,
            w) : (w = u(w, C.children || []),
            w.return = z,
            w)
        }
        function B(z, w, C, Z, ne) {
            return w === null || w.tag !== 7 ? (w = wa(C, z.mode, Z, ne),
            w.return = z,
            w) : (w = u(w, C),
            w.return = z,
            w)
        }
        function H(z, w, C) {
            if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
                return w = su("" + w, z.mode, C),
                w.return = z,
                w;
            if (typeof w == "object" && w !== null) {
                switch (w.$$typeof) {
                case T:
                    return C = Zs(w.type, w.key, w.props, null, z.mode, C),
                    gr(C, w),
                    C.return = z,
                    C;
                case M:
                    return w = lu(w, z.mode, C),
                    w.return = z,
                    w;
                case F:
                    return w = Ra(w),
                    H(z, w, C)
                }
                if (bt(w) || Oe(w))
                    return w = wa(w, z.mode, C, null),
                    w.return = z,
                    w;
                if (typeof w.then == "function")
                    return H(z, Xs(w), C);
                if (w.$$typeof === U)
                    return H(z, Ps(z, w), C);
                Ks(z, w)
            }
            return null
        }
        function j(z, w, C, Z) {
            var ne = w !== null ? w.key : null;
            if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
                return ne !== null ? null : b(z, w, "" + C, Z);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case T:
                    return C.key === ne ? E(z, w, C, Z) : null;
                case M:
                    return C.key === ne ? O(z, w, C, Z) : null;
                case F:
                    return C = Ra(C),
                    j(z, w, C, Z)
                }
                if (bt(C) || Oe(C))
                    return ne !== null ? null : B(z, w, C, Z, null);
                if (typeof C.then == "function")
                    return j(z, w, Xs(C), Z);
                if (C.$$typeof === U)
                    return j(z, w, Ps(z, C), Z);
                Ks(z, C)
            }
            return null
        }
        function L(z, w, C, Z, ne) {
            if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
                return z = z.get(C) || null,
                b(w, z, "" + Z, ne);
            if (typeof Z == "object" && Z !== null) {
                switch (Z.$$typeof) {
                case T:
                    return z = z.get(Z.key === null ? C : Z.key) || null,
                    E(w, z, Z, ne);
                case M:
                    return z = z.get(Z.key === null ? C : Z.key) || null,
                    O(w, z, Z, ne);
                case F:
                    return Z = Ra(Z),
                    L(z, w, C, Z, ne)
                }
                if (bt(Z) || Oe(Z))
                    return z = z.get(C) || null,
                    B(w, z, Z, ne, null);
                if (typeof Z.then == "function")
                    return L(z, w, C, Xs(Z), ne);
                if (Z.$$typeof === U)
                    return L(z, w, C, Ps(w, Z), ne);
                Ks(w, Z)
            }
            return null
        }
        function J(z, w, C, Z) {
            for (var ne = null, be = null, te = w, ce = w = 0, ge = null; te !== null && ce < C.length; ce++) {
                te.index > ce ? (ge = te,
                te = null) : ge = te.sibling;
                var xe = j(z, te, C[ce], Z);
                if (xe === null) {
                    te === null && (te = ge);
                    break
                }
                e && te && xe.alternate === null && n(z, te),
                w = d(xe, w, ce),
                be === null ? ne = xe : be.sibling = xe,
                be = xe,
                te = ge
            }
            if (ce === C.length)
                return i(z, te),
                ye && Sn(z, ce),
                ne;
            if (te === null) {
                for (; ce < C.length; ce++)
                    te = H(z, C[ce], Z),
                    te !== null && (w = d(te, w, ce),
                    be === null ? ne = te : be.sibling = te,
                    be = te);
                return ye && Sn(z, ce),
                ne
            }
            for (te = l(te); ce < C.length; ce++)
                ge = L(te, z, ce, C[ce], Z),
                ge !== null && (e && ge.alternate !== null && te.delete(ge.key === null ? ce : ge.key),
                w = d(ge, w, ce),
                be === null ? ne = ge : be.sibling = ge,
                be = ge);
            return e && te.forEach(function(ca) {
                return n(z, ca)
            }),
            ye && Sn(z, ce),
            ne
        }
        function ie(z, w, C, Z) {
            if (C == null)
                throw Error(s(151));
            for (var ne = null, be = null, te = w, ce = w = 0, ge = null, xe = C.next(); te !== null && !xe.done; ce++,
            xe = C.next()) {
                te.index > ce ? (ge = te,
                te = null) : ge = te.sibling;
                var ca = j(z, te, xe.value, Z);
                if (ca === null) {
                    te === null && (te = ge);
                    break
                }
                e && te && ca.alternate === null && n(z, te),
                w = d(ca, w, ce),
                be === null ? ne = ca : be.sibling = ca,
                be = ca,
                te = ge
            }
            if (xe.done)
                return i(z, te),
                ye && Sn(z, ce),
                ne;
            if (te === null) {
                for (; !xe.done; ce++,
                xe = C.next())
                    xe = H(z, xe.value, Z),
                    xe !== null && (w = d(xe, w, ce),
                    be === null ? ne = xe : be.sibling = xe,
                    be = xe);
                return ye && Sn(z, ce),
                ne
            }
            for (te = l(te); !xe.done; ce++,
            xe = C.next())
                xe = L(te, z, ce, xe.value, Z),
                xe !== null && (e && xe.alternate !== null && te.delete(xe.key === null ? ce : xe.key),
                w = d(xe, w, ce),
                be === null ? ne = xe : be.sibling = xe,
                be = xe);
            return e && te.forEach(function(RS) {
                return n(z, RS)
            }),
            ye && Sn(z, ce),
            ne
        }
        function Ce(z, w, C, Z) {
            if (typeof C == "object" && C !== null && C.type === D && C.key === null && (C = C.props.children),
            typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                case T:
                    e: {
                        for (var ne = C.key; w !== null; ) {
                            if (w.key === ne) {
                                if (ne = C.type,
                                ne === D) {
                                    if (w.tag === 7) {
                                        i(z, w.sibling),
                                        Z = u(w, C.props.children),
                                        Z.return = z,
                                        z = Z;
                                        break e
                                    }
                                } else if (w.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === F && Ra(ne) === w.type) {
                                    i(z, w.sibling),
                                    Z = u(w, C.props),
                                    gr(Z, C),
                                    Z.return = z,
                                    z = Z;
                                    break e
                                }
                                i(z, w);
                                break
                            } else
                                n(z, w);
                            w = w.sibling
                        }
                        C.type === D ? (Z = wa(C.props.children, z.mode, Z, C.key),
                        Z.return = z,
                        z = Z) : (Z = Zs(C.type, C.key, C.props, null, z.mode, Z),
                        gr(Z, C),
                        Z.return = z,
                        z = Z)
                    }
                    return g(z);
                case M:
                    e: {
                        for (ne = C.key; w !== null; ) {
                            if (w.key === ne)
                                if (w.tag === 4 && w.stateNode.containerInfo === C.containerInfo && w.stateNode.implementation === C.implementation) {
                                    i(z, w.sibling),
                                    Z = u(w, C.children || []),
                                    Z.return = z,
                                    z = Z;
                                    break e
                                } else {
                                    i(z, w);
                                    break
                                }
                            else
                                n(z, w);
                            w = w.sibling
                        }
                        Z = lu(C, z.mode, Z),
                        Z.return = z,
                        z = Z
                    }
                    return g(z);
                case F:
                    return C = Ra(C),
                    Ce(z, w, C, Z)
                }
                if (bt(C))
                    return J(z, w, C, Z);
                if (Oe(C)) {
                    if (ne = Oe(C),
                    typeof ne != "function")
                        throw Error(s(150));
                    return C = ne.call(C),
                    ie(z, w, C, Z)
                }
                if (typeof C.then == "function")
                    return Ce(z, w, Xs(C), Z);
                if (C.$$typeof === U)
                    return Ce(z, w, Ps(z, C), Z);
                Ks(z, C)
            }
            return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C,
            w !== null && w.tag === 6 ? (i(z, w.sibling),
            Z = u(w, C),
            Z.return = z,
            z = Z) : (i(z, w),
            Z = su(C, z.mode, Z),
            Z.return = z,
            z = Z),
            g(z)) : i(z, w)
        }
        return function(z, w, C, Z) {
            try {
                pr = 0;
                var ne = Ce(z, w, C, Z);
                return hi = null,
                ne
            } catch (te) {
                if (te === di || te === Gs)
                    throw te;
                var be = jt(29, te, null, z.mode);
                return be.lanes = Z,
                be.return = z,
                be
            } finally {}
        }
    }
    var Ma = gm(!0)
      , ym = gm(!1)
      , Xn = !1;
    function bu(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function xu(e, n) {
        e = e.updateQueue,
        n.updateQueue === e && (n.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null
        })
    }
    function Kn(e) {
        return {
            lane: e,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Qn(e, n, i) {
        var l = e.updateQueue;
        if (l === null)
            return null;
        if (l = l.shared,
        (Se & 2) !== 0) {
            var u = l.pending;
            return u === null ? n.next = n : (n.next = u.next,
            u.next = n),
            l.pending = n,
            n = ks(e),
            em(e, null, i),
            n
        }
        return Bs(e, l, n, i),
        ks(e)
    }
    function yr(e, n, i) {
        if (n = n.updateQueue,
        n !== null && (n = n.shared,
        (i & 4194048) !== 0)) {
            var l = n.lanes;
            l &= e.pendingLanes,
            i |= l,
            n.lanes = i,
            oh(e, i)
        }
    }
    function Su(e, n) {
        var i = e.updateQueue
          , l = e.alternate;
        if (l !== null && (l = l.updateQueue,
        i === l)) {
            var u = null
              , d = null;
            if (i = i.firstBaseUpdate,
            i !== null) {
                do {
                    var g = {
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    };
                    d === null ? u = d = g : d = d.next = g,
                    i = i.next
                } while (i !== null);
                d === null ? u = d = n : d = d.next = n
            } else
                u = d = n;
            i = {
                baseState: l.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: d,
                shared: l.shared,
                callbacks: l.callbacks
            },
            e.updateQueue = i;
            return
        }
        e = i.lastBaseUpdate,
        e === null ? i.firstBaseUpdate = n : e.next = n,
        i.lastBaseUpdate = n
    }
    var Tu = !1;
    function vr() {
        if (Tu) {
            var e = fi;
            if (e !== null)
                throw e
        }
    }
    function br(e, n, i, l) {
        Tu = !1;
        var u = e.updateQueue;
        Xn = !1;
        var d = u.firstBaseUpdate
          , g = u.lastBaseUpdate
          , b = u.shared.pending;
        if (b !== null) {
            u.shared.pending = null;
            var E = b
              , O = E.next;
            E.next = null,
            g === null ? d = O : g.next = O,
            g = E;
            var B = e.alternate;
            B !== null && (B = B.updateQueue,
            b = B.lastBaseUpdate,
            b !== g && (b === null ? B.firstBaseUpdate = O : b.next = O,
            B.lastBaseUpdate = E))
        }
        if (d !== null) {
            var H = u.baseState;
            g = 0,
            B = O = E = null,
            b = d;
            do {
                var j = b.lane & -536870913
                  , L = j !== b.lane;
                if (L ? (pe & j) === j : (l & j) === j) {
                    j !== 0 && j === ci && (Tu = !0),
                    B !== null && (B = B.next = {
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: null,
                        next: null
                    });
                    e: {
                        var J = e
                          , ie = b;
                        j = n;
                        var Ce = i;
                        switch (ie.tag) {
                        case 1:
                            if (J = ie.payload,
                            typeof J == "function") {
                                H = J.call(Ce, H, j);
                                break e
                            }
                            H = J;
                            break e;
                        case 3:
                            J.flags = J.flags & -65537 | 128;
                        case 0:
                            if (J = ie.payload,
                            j = typeof J == "function" ? J.call(Ce, H, j) : J,
                            j == null)
                                break e;
                            H = v({}, H, j);
                            break e;
                        case 2:
                            Xn = !0
                        }
                    }
                    j = b.callback,
                    j !== null && (e.flags |= 64,
                    L && (e.flags |= 8192),
                    L = u.callbacks,
                    L === null ? u.callbacks = [j] : L.push(j))
                } else
                    L = {
                        lane: j,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    B === null ? (O = B = L,
                    E = H) : B = B.next = L,
                    g |= j;
                if (b = b.next,
                b === null) {
                    if (b = u.shared.pending,
                    b === null)
                        break;
                    L = b,
                    b = L.next,
                    L.next = null,
                    u.lastBaseUpdate = L,
                    u.shared.pending = null
                }
            } while (!0);
            B === null && (E = H),
            u.baseState = E,
            u.firstBaseUpdate = O,
            u.lastBaseUpdate = B,
            d === null && (u.shared.lanes = 0),
            ea |= g,
            e.lanes = g,
            e.memoizedState = H
        }
    }
    function vm(e, n) {
        if (typeof e != "function")
            throw Error(s(191, e));
        e.call(n)
    }
    function bm(e, n) {
        var i = e.callbacks;
        if (i !== null)
            for (e.callbacks = null,
            e = 0; e < i.length; e++)
                vm(i[e], n)
    }
    var mi = _(null)
      , Qs = _(0);
    function xm(e, n) {
        e = Mn,
        K(Qs, e),
        K(mi, n),
        Mn = e | n.baseLanes
    }
    function Au() {
        K(Qs, Mn),
        K(mi, mi.current)
    }
    function Eu() {
        Mn = Qs.current,
        P(mi),
        P(Qs)
    }
    var Nt = _(null)
      , $t = null;
    function Fn(e) {
        var n = e.alternate;
        K(Ye, Ye.current & 1),
        K(Nt, e),
        $t === null && (n === null || mi.current !== null || n.memoizedState !== null) && ($t = e)
    }
    function wu(e) {
        K(Ye, Ye.current),
        K(Nt, e),
        $t === null && ($t = e)
    }
    function Sm(e) {
        e.tag === 22 ? (K(Ye, Ye.current),
        K(Nt, e),
        $t === null && ($t = e)) : Jn()
    }
    function Jn() {
        K(Ye, Ye.current),
        K(Nt, Nt.current)
    }
    function Ut(e) {
        P(Nt),
        $t === e && ($t = null),
        P(Ye)
    }
    var Ye = _(0);
    function Fs(e) {
        for (var n = e; n !== null; ) {
            if (n.tag === 13) {
                var i = n.memoizedState;
                if (i !== null && (i = i.dehydrated,
                i === null || Oc(i) || Mc(i)))
                    return n
            } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
                if ((n.flags & 128) !== 0)
                    return n
            } else if (n.child !== null) {
                n.child.return = n,
                n = n.child;
                continue
            }
            if (n === e)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e)
                    return null;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
        return null
    }
    var En = 0
      , ue = null
      , ze = null
      , Ke = null
      , Js = !1
      , pi = !1
      , ja = !1
      , Is = 0
      , xr = 0
      , gi = null
      , xx = 0;
    function Ze() {
        throw Error(s(321))
    }
    function _u(e, n) {
        if (n === null)
            return !1;
        for (var i = 0; i < n.length && i < e.length; i++)
            if (!Mt(e[i], n[i]))
                return !1;
        return !0
    }
    function zu(e, n, i, l, u, d) {
        return En = d,
        ue = n,
        n.memoizedState = null,
        n.updateQueue = null,
        n.lanes = 0,
        k.H = e === null || e.memoizedState === null ? ip : qu,
        ja = !1,
        d = i(l, u),
        ja = !1,
        pi && (d = Am(n, i, l, u)),
        Tm(e),
        d
    }
    function Tm(e) {
        k.H = Ar;
        var n = ze !== null && ze.next !== null;
        if (En = 0,
        Ke = ze = ue = null,
        Js = !1,
        xr = 0,
        gi = null,
        n)
            throw Error(s(300));
        e === null || Qe || (e = e.dependencies,
        e !== null && qs(e) && (Qe = !0))
    }
    function Am(e, n, i, l) {
        ue = e;
        var u = 0;
        do {
            if (pi && (gi = null),
            xr = 0,
            pi = !1,
            25 <= u)
                throw Error(s(301));
            if (u += 1,
            Ke = ze = null,
            e.updateQueue != null) {
                var d = e.updateQueue;
                d.lastEffect = null,
                d.events = null,
                d.stores = null,
                d.memoCache != null && (d.memoCache.index = 0)
            }
            k.H = rp,
            d = n(i, l)
        } while (pi);
        return d
    }
    function Sx() {
        var e = k.H
          , n = e.useState()[0];
        return n = typeof n.then == "function" ? Sr(n) : n,
        e = e.useState()[0],
        (ze !== null ? ze.memoizedState : null) !== e && (ue.flags |= 1024),
        n
    }
    function Du() {
        var e = Is !== 0;
        return Is = 0,
        e
    }
    function Cu(e, n, i) {
        n.updateQueue = e.updateQueue,
        n.flags &= -2053,
        e.lanes &= ~i
    }
    function Ru(e) {
        if (Js) {
            for (e = e.memoizedState; e !== null; ) {
                var n = e.queue;
                n !== null && (n.pending = null),
                e = e.next
            }
            Js = !1
        }
        En = 0,
        Ke = ze = ue = null,
        pi = !1,
        xr = Is = 0,
        gi = null
    }
    function gt() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Ke === null ? ue.memoizedState = Ke = e : Ke = Ke.next = e,
        Ke
    }
    function Ge() {
        if (ze === null) {
            var e = ue.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = ze.next;
        var n = Ke === null ? ue.memoizedState : Ke.next;
        if (n !== null)
            Ke = n,
            ze = e;
        else {
            if (e === null)
                throw ue.alternate === null ? Error(s(467)) : Error(s(310));
            ze = e,
            e = {
                memoizedState: ze.memoizedState,
                baseState: ze.baseState,
                baseQueue: ze.baseQueue,
                queue: ze.queue,
                next: null
            },
            Ke === null ? ue.memoizedState = Ke = e : Ke = Ke.next = e
        }
        return Ke
    }
    function Ws() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Sr(e) {
        var n = xr;
        return xr += 1,
        gi === null && (gi = []),
        e = hm(gi, e, n),
        n = ue,
        (Ke === null ? n.memoizedState : Ke.next) === null && (n = n.alternate,
        k.H = n === null || n.memoizedState === null ? ip : qu),
        e
    }
    function el(e) {
        if (e !== null && typeof e == "object") {
            if (typeof e.then == "function")
                return Sr(e);
            if (e.$$typeof === U)
                return st(e)
        }
        throw Error(s(438, String(e)))
    }
    function Ou(e) {
        var n = null
          , i = ue.updateQueue;
        if (i !== null && (n = i.memoCache),
        n == null) {
            var l = ue.alternate;
            l !== null && (l = l.updateQueue,
            l !== null && (l = l.memoCache,
            l != null && (n = {
                data: l.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (n == null && (n = {
            data: [],
            index: 0
        }),
        i === null && (i = Ws(),
        ue.updateQueue = i),
        i.memoCache = n,
        i = n.data[n.index],
        i === void 0)
            for (i = n.data[n.index] = Array(e),
            l = 0; l < e; l++)
                i[l] = se;
        return n.index++,
        i
    }
    function wn(e, n) {
        return typeof n == "function" ? n(e) : n
    }
    function tl(e) {
        var n = Ge();
        return Mu(n, ze, e)
    }
    function Mu(e, n, i) {
        var l = e.queue;
        if (l === null)
            throw Error(s(311));
        l.lastRenderedReducer = i;
        var u = e.baseQueue
          , d = l.pending;
        if (d !== null) {
            if (u !== null) {
                var g = u.next;
                u.next = d.next,
                d.next = g
            }
            n.baseQueue = u = d,
            l.pending = null
        }
        if (d = e.baseState,
        u === null)
            e.memoizedState = d;
        else {
            n = u.next;
            var b = g = null
              , E = null
              , O = n
              , B = !1;
            do {
                var H = O.lane & -536870913;
                if (H !== O.lane ? (pe & H) === H : (En & H) === H) {
                    var j = O.revertLane;
                    if (j === 0)
                        E !== null && (E = E.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        }),
                        H === ci && (B = !0);
                    else if ((En & j) === j) {
                        O = O.next,
                        j === ci && (B = !0);
                        continue
                    } else
                        H = {
                            lane: 0,
                            revertLane: O.revertLane,
                            gesture: null,
                            action: O.action,
                            hasEagerState: O.hasEagerState,
                            eagerState: O.eagerState,
                            next: null
                        },
                        E === null ? (b = E = H,
                        g = d) : E = E.next = H,
                        ue.lanes |= j,
                        ea |= j;
                    H = O.action,
                    ja && i(d, H),
                    d = O.hasEagerState ? O.eagerState : i(d, H)
                } else
                    j = {
                        lane: H,
                        revertLane: O.revertLane,
                        gesture: O.gesture,
                        action: O.action,
                        hasEagerState: O.hasEagerState,
                        eagerState: O.eagerState,
                        next: null
                    },
                    E === null ? (b = E = j,
                    g = d) : E = E.next = j,
                    ue.lanes |= H,
                    ea |= H;
                O = O.next
            } while (O !== null && O !== n);
            if (E === null ? g = d : E.next = b,
            !Mt(d, e.memoizedState) && (Qe = !0,
            B && (i = fi,
            i !== null)))
                throw i;
            e.memoizedState = d,
            e.baseState = g,
            e.baseQueue = E,
            l.lastRenderedState = d
        }
        return u === null && (l.lanes = 0),
        [e.memoizedState, l.dispatch]
    }
    function ju(e) {
        var n = Ge()
          , i = n.queue;
        if (i === null)
            throw Error(s(311));
        i.lastRenderedReducer = e;
        var l = i.dispatch
          , u = i.pending
          , d = n.memoizedState;
        if (u !== null) {
            i.pending = null;
            var g = u = u.next;
            do
                d = e(d, g.action),
                g = g.next;
            while (g !== u);
            Mt(d, n.memoizedState) || (Qe = !0),
            n.memoizedState = d,
            n.baseQueue === null && (n.baseState = d),
            i.lastRenderedState = d
        }
        return [d, l]
    }
    function Em(e, n, i) {
        var l = ue
          , u = Ge()
          , d = ye;
        if (d) {
            if (i === void 0)
                throw Error(s(407));
            i = i()
        } else
            i = n();
        var g = !Mt((ze || u).memoizedState, i);
        if (g && (u.memoizedState = i,
        Qe = !0),
        u = u.queue,
        Lu(zm.bind(null, l, u, e), [e]),
        u.getSnapshot !== n || g || Ke !== null && Ke.memoizedState.tag & 1) {
            if (l.flags |= 2048,
            yi(9, {
                destroy: void 0
            }, _m.bind(null, l, u, i, n), null),
            Re === null)
                throw Error(s(349));
            d || (En & 127) !== 0 || wm(l, n, i)
        }
        return i
    }
    function wm(e, n, i) {
        e.flags |= 16384,
        e = {
            getSnapshot: n,
            value: i
        },
        n = ue.updateQueue,
        n === null ? (n = Ws(),
        ue.updateQueue = n,
        n.stores = [e]) : (i = n.stores,
        i === null ? n.stores = [e] : i.push(e))
    }
    function _m(e, n, i, l) {
        n.value = i,
        n.getSnapshot = l,
        Dm(n) && Cm(e)
    }
    function zm(e, n, i) {
        return i(function() {
            Dm(n) && Cm(e)
        })
    }
    function Dm(e) {
        var n = e.getSnapshot;
        e = e.value;
        try {
            var i = n();
            return !Mt(e, i)
        } catch {
            return !0
        }
    }
    function Cm(e) {
        var n = Ea(e, 2);
        n !== null && _t(n, e, 2)
    }
    function Nu(e) {
        var n = gt();
        if (typeof e == "function") {
            var i = e;
            if (e = i(),
            ja) {
                Zn(!0);
                try {
                    i()
                } finally {
                    Zn(!1)
                }
            }
        }
        return n.memoizedState = n.baseState = e,
        n.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: wn,
            lastRenderedState: e
        },
        n
    }
    function Rm(e, n, i, l) {
        return e.baseState = i,
        Mu(e, ze, typeof l == "function" ? l : wn)
    }
    function Tx(e, n, i, l, u) {
        if (il(e))
            throw Error(s(485));
        if (e = n.action,
        e !== null) {
            var d = {
                payload: u,
                action: e,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(g) {
                    d.listeners.push(g)
                }
            };
            k.T !== null ? i(!0) : d.isTransition = !1,
            l(d),
            i = n.pending,
            i === null ? (d.next = n.pending = d,
            Om(n, d)) : (d.next = i.next,
            n.pending = i.next = d)
        }
    }
    function Om(e, n) {
        var i = n.action
          , l = n.payload
          , u = e.state;
        if (n.isTransition) {
            var d = k.T
              , g = {};
            k.T = g;
            try {
                var b = i(u, l)
                  , E = k.S;
                E !== null && E(g, b),
                Mm(e, n, b)
            } catch (O) {
                Uu(e, n, O)
            } finally {
                d !== null && g.types !== null && (d.types = g.types),
                k.T = d
            }
        } else
            try {
                d = i(u, l),
                Mm(e, n, d)
            } catch (O) {
                Uu(e, n, O)
            }
    }
    function Mm(e, n, i) {
        i !== null && typeof i == "object" && typeof i.then == "function" ? i.then(function(l) {
            jm(e, n, l)
        }, function(l) {
            return Uu(e, n, l)
        }) : jm(e, n, i)
    }
    function jm(e, n, i) {
        n.status = "fulfilled",
        n.value = i,
        Nm(n),
        e.state = i,
        n = e.pending,
        n !== null && (i = n.next,
        i === n ? e.pending = null : (i = i.next,
        n.next = i,
        Om(e, i)))
    }
    function Uu(e, n, i) {
        var l = e.pending;
        if (e.pending = null,
        l !== null) {
            l = l.next;
            do
                n.status = "rejected",
                n.reason = i,
                Nm(n),
                n = n.next;
            while (n !== l)
        }
        e.action = null
    }
    function Nm(e) {
        e = e.listeners;
        for (var n = 0; n < e.length; n++)
            (0,
            e[n])()
    }
    function Um(e, n) {
        return n
    }
    function Lm(e, n) {
        if (ye) {
            var i = Re.formState;
            if (i !== null) {
                e: {
                    var l = ue;
                    if (ye) {
                        if (Me) {
                            t: {
                                for (var u = Me, d = Gt; u.nodeType !== 8; ) {
                                    if (!d) {
                                        u = null;
                                        break t
                                    }
                                    if (u = Xt(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                d = u.data,
                                u = d === "F!" || d === "F" ? u : null
                            }
                            if (u) {
                                Me = Xt(u.nextSibling),
                                l = u.data === "F!";
                                break e
                            }
                        }
                        Gn(l)
                    }
                    l = !1
                }
                l && (n = i[0])
            }
        }
        return i = gt(),
        i.memoizedState = i.baseState = n,
        l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Um,
            lastRenderedState: n
        },
        i.queue = l,
        i = tp.bind(null, ue, l),
        l.dispatch = i,
        l = Nu(!1),
        d = Hu.bind(null, ue, !1, l.queue),
        l = gt(),
        u = {
            state: n,
            dispatch: null,
            action: e,
            pending: null
        },
        l.queue = u,
        i = Tx.bind(null, ue, u, d, i),
        u.dispatch = i,
        l.memoizedState = e,
        [n, i, !1]
    }
    function Vm(e) {
        var n = Ge();
        return Bm(n, ze, e)
    }
    function Bm(e, n, i) {
        if (n = Mu(e, n, Um)[0],
        e = tl(wn)[0],
        typeof n == "object" && n !== null && typeof n.then == "function")
            try {
                var l = Sr(n)
            } catch (g) {
                throw g === di ? Gs : g
            }
        else
            l = n;
        n = Ge();
        var u = n.queue
          , d = u.dispatch;
        return i !== n.memoizedState && (ue.flags |= 2048,
        yi(9, {
            destroy: void 0
        }, Ax.bind(null, u, i), null)),
        [l, d, e]
    }
    function Ax(e, n) {
        e.action = n
    }
    function km(e) {
        var n = Ge()
          , i = ze;
        if (i !== null)
            return Bm(n, i, e);
        Ge(),
        n = n.memoizedState,
        i = Ge();
        var l = i.queue.dispatch;
        return i.memoizedState = e,
        [n, l, !1]
    }
    function yi(e, n, i, l) {
        return e = {
            tag: e,
            create: i,
            deps: l,
            inst: n,
            next: null
        },
        n = ue.updateQueue,
        n === null && (n = Ws(),
        ue.updateQueue = n),
        i = n.lastEffect,
        i === null ? n.lastEffect = e.next = e : (l = i.next,
        i.next = e,
        e.next = l,
        n.lastEffect = e),
        e
    }
    function Zm() {
        return Ge().memoizedState
    }
    function nl(e, n, i, l) {
        var u = gt();
        ue.flags |= e,
        u.memoizedState = yi(1 | n, {
            destroy: void 0
        }, i, l === void 0 ? null : l)
    }
    function al(e, n, i, l) {
        var u = Ge();
        l = l === void 0 ? null : l;
        var d = u.memoizedState.inst;
        ze !== null && l !== null && _u(l, ze.memoizedState.deps) ? u.memoizedState = yi(n, d, i, l) : (ue.flags |= e,
        u.memoizedState = yi(1 | n, d, i, l))
    }
    function Hm(e, n) {
        nl(8390656, 8, e, n)
    }
    function Lu(e, n) {
        al(2048, 8, e, n)
    }
    function Ex(e) {
        ue.flags |= 4;
        var n = ue.updateQueue;
        if (n === null)
            n = Ws(),
            ue.updateQueue = n,
            n.events = [e];
        else {
            var i = n.events;
            i === null ? n.events = [e] : i.push(e)
        }
    }
    function qm(e) {
        var n = Ge().memoizedState;
        return Ex({
            ref: n,
            nextImpl: e
        }),
        function() {
            if ((Se & 2) !== 0)
                throw Error(s(440));
            return n.impl.apply(void 0, arguments)
        }
    }
    function Pm(e, n) {
        return al(4, 2, e, n)
    }
    function Ym(e, n) {
        return al(4, 4, e, n)
    }
    function Gm(e, n) {
        if (typeof n == "function") {
            e = e();
            var i = n(e);
            return function() {
                typeof i == "function" ? i() : n(null)
            }
        }
        if (n != null)
            return e = e(),
            n.current = e,
            function() {
                n.current = null
            }
    }
    function $m(e, n, i) {
        i = i != null ? i.concat([e]) : null,
        al(4, 4, Gm.bind(null, n, e), i)
    }
    function Vu() {}
    function Xm(e, n) {
        var i = Ge();
        n = n === void 0 ? null : n;
        var l = i.memoizedState;
        return n !== null && _u(n, l[1]) ? l[0] : (i.memoizedState = [e, n],
        e)
    }
    function Km(e, n) {
        var i = Ge();
        n = n === void 0 ? null : n;
        var l = i.memoizedState;
        if (n !== null && _u(n, l[1]))
            return l[0];
        if (l = e(),
        ja) {
            Zn(!0);
            try {
                e()
            } finally {
                Zn(!1)
            }
        }
        return i.memoizedState = [l, n],
        l
    }
    function Bu(e, n, i) {
        return i === void 0 || (En & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = i,
        e = Qp(),
        ue.lanes |= e,
        ea |= e,
        i)
    }
    function Qm(e, n, i, l) {
        return Mt(i, n) ? i : mi.current !== null ? (e = Bu(e, i, l),
        Mt(e, n) || (Qe = !0),
        e) : (En & 42) === 0 || (En & 1073741824) !== 0 && (pe & 261930) === 0 ? (Qe = !0,
        e.memoizedState = i) : (e = Qp(),
        ue.lanes |= e,
        ea |= e,
        n)
    }
    function Fm(e, n, i, l, u) {
        var d = G.p;
        G.p = d !== 0 && 8 > d ? d : 8;
        var g = k.T
          , b = {};
        k.T = b,
        Hu(e, !1, n, i);
        try {
            var E = u()
              , O = k.S;
            if (O !== null && O(b, E),
            E !== null && typeof E == "object" && typeof E.then == "function") {
                var B = bx(E, l);
                Tr(e, n, B, Bt(e))
            } else
                Tr(e, n, l, Bt(e))
        } catch (H) {
            Tr(e, n, {
                then: function() {},
                status: "rejected",
                reason: H
            }, Bt())
        } finally {
            G.p = d,
            g !== null && b.types !== null && (g.types = b.types),
            k.T = g
        }
    }
    function wx() {}
    function ku(e, n, i, l) {
        if (e.tag !== 5)
            throw Error(s(476));
        var u = Jm(e).queue;
        Fm(e, u, n, ee, i === null ? wx : function() {
            return Im(e),
            i(l)
        }
        )
    }
    function Jm(e) {
        var n = e.memoizedState;
        if (n !== null)
            return n;
        n = {
            memoizedState: ee,
            baseState: ee,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: wn,
                lastRenderedState: ee
            },
            next: null
        };
        var i = {};
        return n.next = {
            memoizedState: i,
            baseState: i,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: wn,
                lastRenderedState: i
            },
            next: null
        },
        e.memoizedState = n,
        e = e.alternate,
        e !== null && (e.memoizedState = n),
        n
    }
    function Im(e) {
        var n = Jm(e);
        n.next === null && (n = e.alternate.memoizedState),
        Tr(e, n.next.queue, {}, Bt())
    }
    function Zu() {
        return st(kr)
    }
    function Wm() {
        return Ge().memoizedState
    }
    function ep() {
        return Ge().memoizedState
    }
    function _x(e) {
        for (var n = e.return; n !== null; ) {
            switch (n.tag) {
            case 24:
            case 3:
                var i = Bt();
                e = Kn(i);
                var l = Qn(n, e, i);
                l !== null && (_t(l, n, i),
                yr(l, n, i)),
                n = {
                    cache: pu()
                },
                e.payload = n;
                return
            }
            n = n.return
        }
    }
    function zx(e, n, i) {
        var l = Bt();
        i = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        il(e) ? np(n, i) : (i = iu(e, n, i, l),
        i !== null && (_t(i, e, l),
        ap(i, n, l)))
    }
    function tp(e, n, i) {
        var l = Bt();
        Tr(e, n, i, l)
    }
    function Tr(e, n, i, l) {
        var u = {
            lane: l,
            revertLane: 0,
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (il(e))
            np(n, u);
        else {
            var d = e.alternate;
            if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer,
            d !== null))
                try {
                    var g = n.lastRenderedState
                      , b = d(g, i);
                    if (u.hasEagerState = !0,
                    u.eagerState = b,
                    Mt(b, g))
                        return Bs(e, n, u, 0),
                        Re === null && Vs(),
                        !1
                } catch {} finally {}
            if (i = iu(e, n, u, l),
            i !== null)
                return _t(i, e, l),
                ap(i, n, l),
                !0
        }
        return !1
    }
    function Hu(e, n, i, l) {
        if (l = {
            lane: 2,
            revertLane: bc(),
            gesture: null,
            action: l,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        il(e)) {
            if (n)
                throw Error(s(479))
        } else
            n = iu(e, i, l, 2),
            n !== null && _t(n, e, 2)
    }
    function il(e) {
        var n = e.alternate;
        return e === ue || n !== null && n === ue
    }
    function np(e, n) {
        pi = Js = !0;
        var i = e.pending;
        i === null ? n.next = n : (n.next = i.next,
        i.next = n),
        e.pending = n
    }
    function ap(e, n, i) {
        if ((i & 4194048) !== 0) {
            var l = n.lanes;
            l &= e.pendingLanes,
            i |= l,
            n.lanes = i,
            oh(e, i)
        }
    }
    var Ar = {
        readContext: st,
        use: el,
        useCallback: Ze,
        useContext: Ze,
        useEffect: Ze,
        useImperativeHandle: Ze,
        useLayoutEffect: Ze,
        useInsertionEffect: Ze,
        useMemo: Ze,
        useReducer: Ze,
        useRef: Ze,
        useState: Ze,
        useDebugValue: Ze,
        useDeferredValue: Ze,
        useTransition: Ze,
        useSyncExternalStore: Ze,
        useId: Ze,
        useHostTransitionStatus: Ze,
        useFormState: Ze,
        useActionState: Ze,
        useOptimistic: Ze,
        useMemoCache: Ze,
        useCacheRefresh: Ze
    };
    Ar.useEffectEvent = Ze;
    var ip = {
        readContext: st,
        use: el,
        useCallback: function(e, n) {
            return gt().memoizedState = [e, n === void 0 ? null : n],
            e
        },
        useContext: st,
        useEffect: Hm,
        useImperativeHandle: function(e, n, i) {
            i = i != null ? i.concat([e]) : null,
            nl(4194308, 4, Gm.bind(null, n, e), i)
        },
        useLayoutEffect: function(e, n) {
            return nl(4194308, 4, e, n)
        },
        useInsertionEffect: function(e, n) {
            nl(4, 2, e, n)
        },
        useMemo: function(e, n) {
            var i = gt();
            n = n === void 0 ? null : n;
            var l = e();
            if (ja) {
                Zn(!0);
                try {
                    e()
                } finally {
                    Zn(!1)
                }
            }
            return i.memoizedState = [l, n],
            l
        },
        useReducer: function(e, n, i) {
            var l = gt();
            if (i !== void 0) {
                var u = i(n);
                if (ja) {
                    Zn(!0);
                    try {
                        i(n)
                    } finally {
                        Zn(!1)
                    }
                }
            } else
                u = n;
            return l.memoizedState = l.baseState = u,
            e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: u
            },
            l.queue = e,
            e = e.dispatch = zx.bind(null, ue, e),
            [l.memoizedState, e]
        },
        useRef: function(e) {
            var n = gt();
            return e = {
                current: e
            },
            n.memoizedState = e
        },
        useState: function(e) {
            e = Nu(e);
            var n = e.queue
              , i = tp.bind(null, ue, n);
            return n.dispatch = i,
            [e.memoizedState, i]
        },
        useDebugValue: Vu,
        useDeferredValue: function(e, n) {
            var i = gt();
            return Bu(i, e, n)
        },
        useTransition: function() {
            var e = Nu(!1);
            return e = Fm.bind(null, ue, e.queue, !0, !1),
            gt().memoizedState = e,
            [!1, e]
        },
        useSyncExternalStore: function(e, n, i) {
            var l = ue
              , u = gt();
            if (ye) {
                if (i === void 0)
                    throw Error(s(407));
                i = i()
            } else {
                if (i = n(),
                Re === null)
                    throw Error(s(349));
                (pe & 127) !== 0 || wm(l, n, i)
            }
            u.memoizedState = i;
            var d = {
                value: i,
                getSnapshot: n
            };
            return u.queue = d,
            Hm(zm.bind(null, l, d, e), [e]),
            l.flags |= 2048,
            yi(9, {
                destroy: void 0
            }, _m.bind(null, l, d, i, n), null),
            i
        },
        useId: function() {
            var e = gt()
              , n = Re.identifierPrefix;
            if (ye) {
                var i = cn
                  , l = un;
                i = (l & ~(1 << 32 - Ot(l) - 1)).toString(32) + i,
                n = "_" + n + "R_" + i,
                i = Is++,
                0 < i && (n += "H" + i.toString(32)),
                n += "_"
            } else
                i = xx++,
                n = "_" + n + "r_" + i.toString(32) + "_";
            return e.memoizedState = n
        },
        useHostTransitionStatus: Zu,
        useFormState: Lm,
        useActionState: Lm,
        useOptimistic: function(e) {
            var n = gt();
            n.memoizedState = n.baseState = e;
            var i = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return n.queue = i,
            n = Hu.bind(null, ue, !0, i),
            i.dispatch = n,
            [e, n]
        },
        useMemoCache: Ou,
        useCacheRefresh: function() {
            return gt().memoizedState = _x.bind(null, ue)
        },
        useEffectEvent: function(e) {
            var n = gt()
              , i = {
                impl: e
            };
            return n.memoizedState = i,
            function() {
                if ((Se & 2) !== 0)
                    throw Error(s(440));
                return i.impl.apply(void 0, arguments)
            }
        }
    }
      , qu = {
        readContext: st,
        use: el,
        useCallback: Xm,
        useContext: st,
        useEffect: Lu,
        useImperativeHandle: $m,
        useInsertionEffect: Pm,
        useLayoutEffect: Ym,
        useMemo: Km,
        useReducer: tl,
        useRef: Zm,
        useState: function() {
            return tl(wn)
        },
        useDebugValue: Vu,
        useDeferredValue: function(e, n) {
            var i = Ge();
            return Qm(i, ze.memoizedState, e, n)
        },
        useTransition: function() {
            var e = tl(wn)[0]
              , n = Ge().memoizedState;
            return [typeof e == "boolean" ? e : Sr(e), n]
        },
        useSyncExternalStore: Em,
        useId: Wm,
        useHostTransitionStatus: Zu,
        useFormState: Vm,
        useActionState: Vm,
        useOptimistic: function(e, n) {
            var i = Ge();
            return Rm(i, ze, e, n)
        },
        useMemoCache: Ou,
        useCacheRefresh: ep
    };
    qu.useEffectEvent = qm;
    var rp = {
        readContext: st,
        use: el,
        useCallback: Xm,
        useContext: st,
        useEffect: Lu,
        useImperativeHandle: $m,
        useInsertionEffect: Pm,
        useLayoutEffect: Ym,
        useMemo: Km,
        useReducer: ju,
        useRef: Zm,
        useState: function() {
            return ju(wn)
        },
        useDebugValue: Vu,
        useDeferredValue: function(e, n) {
            var i = Ge();
            return ze === null ? Bu(i, e, n) : Qm(i, ze.memoizedState, e, n)
        },
        useTransition: function() {
            var e = ju(wn)[0]
              , n = Ge().memoizedState;
            return [typeof e == "boolean" ? e : Sr(e), n]
        },
        useSyncExternalStore: Em,
        useId: Wm,
        useHostTransitionStatus: Zu,
        useFormState: km,
        useActionState: km,
        useOptimistic: function(e, n) {
            var i = Ge();
            return ze !== null ? Rm(i, ze, e, n) : (i.baseState = e,
            [e, i.queue.dispatch])
        },
        useMemoCache: Ou,
        useCacheRefresh: ep
    };
    rp.useEffectEvent = qm;
    function Pu(e, n, i, l) {
        n = e.memoizedState,
        i = i(l, n),
        i = i == null ? n : v({}, n, i),
        e.memoizedState = i,
        e.lanes === 0 && (e.updateQueue.baseState = i)
    }
    var Yu = {
        enqueueSetState: function(e, n, i) {
            e = e._reactInternals;
            var l = Bt()
              , u = Kn(l);
            u.payload = n,
            i != null && (u.callback = i),
            n = Qn(e, u, l),
            n !== null && (_t(n, e, l),
            yr(n, e, l))
        },
        enqueueReplaceState: function(e, n, i) {
            e = e._reactInternals;
            var l = Bt()
              , u = Kn(l);
            u.tag = 1,
            u.payload = n,
            i != null && (u.callback = i),
            n = Qn(e, u, l),
            n !== null && (_t(n, e, l),
            yr(n, e, l))
        },
        enqueueForceUpdate: function(e, n) {
            e = e._reactInternals;
            var i = Bt()
              , l = Kn(i);
            l.tag = 2,
            n != null && (l.callback = n),
            n = Qn(e, l, i),
            n !== null && (_t(n, e, i),
            yr(n, e, i))
        }
    };
    function sp(e, n, i, l, u, d, g) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, g) : n.prototype && n.prototype.isPureReactComponent ? !ur(i, l) || !ur(u, d) : !0
    }
    function lp(e, n, i, l) {
        e = n.state,
        typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(i, l),
        typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(i, l),
        n.state !== e && Yu.enqueueReplaceState(n, n.state, null)
    }
    function Na(e, n) {
        var i = n;
        if ("ref" in n) {
            i = {};
            for (var l in n)
                l !== "ref" && (i[l] = n[l])
        }
        if (e = e.defaultProps) {
            i === n && (i = v({}, i));
            for (var u in e)
                i[u] === void 0 && (i[u] = e[u])
        }
        return i
    }
    function op(e) {
        Ls(e)
    }
    function up(e) {
        console.error(e)
    }
    function cp(e) {
        Ls(e)
    }
    function rl(e, n) {
        try {
            var i = e.onUncaughtError;
            i(n.value, {
                componentStack: n.stack
            })
        } catch (l) {
            setTimeout(function() {
                throw l
            })
        }
    }
    function fp(e, n, i) {
        try {
            var l = e.onCaughtError;
            l(i.value, {
                componentStack: i.stack,
                errorBoundary: n.tag === 1 ? n.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function Gu(e, n, i) {
        return i = Kn(i),
        i.tag = 3,
        i.payload = {
            element: null
        },
        i.callback = function() {
            rl(e, n)
        }
        ,
        i
    }
    function dp(e) {
        return e = Kn(e),
        e.tag = 3,
        e
    }
    function hp(e, n, i, l) {
        var u = i.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var d = l.value;
            e.payload = function() {
                return u(d)
            }
            ,
            e.callback = function() {
                fp(n, i, l)
            }
        }
        var g = i.stateNode;
        g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
            fp(n, i, l),
            typeof u != "function" && (ta === null ? ta = new Set([this]) : ta.add(this));
            var b = l.stack;
            this.componentDidCatch(l.value, {
                componentStack: b !== null ? b : ""
            })
        }
        )
    }
    function Dx(e, n, i, l, u) {
        if (i.flags |= 32768,
        l !== null && typeof l == "object" && typeof l.then == "function") {
            if (n = i.alternate,
            n !== null && ui(n, i, u, !0),
            i = Nt.current,
            i !== null) {
                switch (i.tag) {
                case 31:
                case 13:
                    return $t === null ? yl() : i.alternate === null && He === 0 && (He = 3),
                    i.flags &= -257,
                    i.flags |= 65536,
                    i.lanes = u,
                    l === $s ? i.flags |= 16384 : (n = i.updateQueue,
                    n === null ? i.updateQueue = new Set([l]) : n.add(l),
                    gc(e, l, u)),
                    !1;
                case 22:
                    return i.flags |= 65536,
                    l === $s ? i.flags |= 16384 : (n = i.updateQueue,
                    n === null ? (n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l])
                    },
                    i.updateQueue = n) : (i = n.retryQueue,
                    i === null ? n.retryQueue = new Set([l]) : i.add(l)),
                    gc(e, l, u)),
                    !1
                }
                throw Error(s(435, i.tag))
            }
            return gc(e, l, u),
            yl(),
            !1
        }
        if (ye)
            return n = Nt.current,
            n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            n.flags |= 65536,
            n.lanes = u,
            l !== cu && (e = Error(s(422), {
                cause: l
            }),
            dr(qt(e, i)))) : (l !== cu && (n = Error(s(423), {
                cause: l
            }),
            dr(qt(n, i))),
            e = e.current.alternate,
            e.flags |= 65536,
            u &= -u,
            e.lanes |= u,
            l = qt(l, i),
            u = Gu(e.stateNode, l, u),
            Su(e, u),
            He !== 4 && (He = 2)),
            !1;
        var d = Error(s(520), {
            cause: l
        });
        if (d = qt(d, i),
        Or === null ? Or = [d] : Or.push(d),
        He !== 4 && (He = 2),
        n === null)
            return !0;
        l = qt(l, i),
        i = n;
        do {
            switch (i.tag) {
            case 3:
                return i.flags |= 65536,
                e = u & -u,
                i.lanes |= e,
                e = Gu(i.stateNode, l, e),
                Su(i, e),
                !1;
            case 1:
                if (n = i.type,
                d = i.stateNode,
                (i.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ta === null || !ta.has(d))))
                    return i.flags |= 65536,
                    u &= -u,
                    i.lanes |= u,
                    u = dp(u),
                    hp(u, e, i, l),
                    Su(i, u),
                    !1
            }
            i = i.return
        } while (i !== null);
        return !1
    }
    var $u = Error(s(461))
      , Qe = !1;
    function lt(e, n, i, l) {
        n.child = e === null ? ym(n, null, i, l) : Ma(n, e.child, i, l)
    }
    function mp(e, n, i, l, u) {
        i = i.render;
        var d = n.ref;
        if ("ref" in l) {
            var g = {};
            for (var b in l)
                b !== "ref" && (g[b] = l[b])
        } else
            g = l;
        return Da(n),
        l = zu(e, n, i, g, d, u),
        b = Du(),
        e !== null && !Qe ? (Cu(e, n, u),
        _n(e, n, u)) : (ye && b && ou(n),
        n.flags |= 1,
        lt(e, n, l, u),
        n.child)
    }
    function pp(e, n, i, l, u) {
        if (e === null) {
            var d = i.type;
            return typeof d == "function" && !ru(d) && d.defaultProps === void 0 && i.compare === null ? (n.tag = 15,
            n.type = d,
            gp(e, n, d, l, u)) : (e = Zs(i.type, null, l, n, n.mode, u),
            e.ref = n.ref,
            e.return = n,
            n.child = e)
        }
        if (d = e.child,
        !ec(e, u)) {
            var g = d.memoizedProps;
            if (i = i.compare,
            i = i !== null ? i : ur,
            i(g, l) && e.ref === n.ref)
                return _n(e, n, u)
        }
        return n.flags |= 1,
        e = xn(d, l),
        e.ref = n.ref,
        e.return = n,
        n.child = e
    }
    function gp(e, n, i, l, u) {
        if (e !== null) {
            var d = e.memoizedProps;
            if (ur(d, l) && e.ref === n.ref)
                if (Qe = !1,
                n.pendingProps = l = d,
                ec(e, u))
                    (e.flags & 131072) !== 0 && (Qe = !0);
                else
                    return n.lanes = e.lanes,
                    _n(e, n, u)
        }
        return Xu(e, n, i, l, u)
    }
    function yp(e, n, i, l) {
        var u = l.children
          , d = e !== null ? e.memoizedState : null;
        if (e === null && n.stateNode === null && (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        l.mode === "hidden") {
            if ((n.flags & 128) !== 0) {
                if (d = d !== null ? d.baseLanes | i : i,
                e !== null) {
                    for (l = n.child = e.child,
                    u = 0; l !== null; )
                        u = u | l.lanes | l.childLanes,
                        l = l.sibling;
                    l = u & ~d
                } else
                    l = 0,
                    n.child = null;
                return vp(e, n, d, i, l)
            }
            if ((i & 536870912) !== 0)
                n.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                e !== null && Ys(n, d !== null ? d.cachePool : null),
                d !== null ? xm(n, d) : Au(),
                Sm(n);
            else
                return l = n.lanes = 536870912,
                vp(e, n, d !== null ? d.baseLanes | i : i, i, l)
        } else
            d !== null ? (Ys(n, d.cachePool),
            xm(n, d),
            Jn(),
            n.memoizedState = null) : (e !== null && Ys(n, null),
            Au(),
            Jn());
        return lt(e, n, u, i),
        n.child
    }
    function Er(e, n) {
        return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        n.sibling
    }
    function vp(e, n, i, l, u) {
        var d = yu();
        return d = d === null ? null : {
            parent: Xe._currentValue,
            pool: d
        },
        n.memoizedState = {
            baseLanes: i,
            cachePool: d
        },
        e !== null && Ys(n, null),
        Au(),
        Sm(n),
        e !== null && ui(e, n, l, !0),
        n.childLanes = u,
        null
    }
    function sl(e, n) {
        return n = ol({
            mode: n.mode,
            children: n.children
        }, e.mode),
        n.ref = e.ref,
        e.child = n,
        n.return = e,
        n
    }
    function bp(e, n, i) {
        return Ma(n, e.child, null, i),
        e = sl(n, n.pendingProps),
        e.flags |= 2,
        Ut(n),
        n.memoizedState = null,
        e
    }
    function Cx(e, n, i) {
        var l = n.pendingProps
          , u = (n.flags & 128) !== 0;
        if (n.flags &= -129,
        e === null) {
            if (ye) {
                if (l.mode === "hidden")
                    return e = sl(n, l),
                    n.lanes = 536870912,
                    Er(null, e);
                if (wu(n),
                (e = Me) ? (e = O0(e, Gt),
                e = e !== null && e.data === "&" ? e : null,
                e !== null && (n.memoizedState = {
                    dehydrated: e,
                    treeContext: Pn !== null ? {
                        id: un,
                        overflow: cn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                i = nm(e),
                i.return = n,
                n.child = i,
                rt = n,
                Me = null)) : e = null,
                e === null)
                    throw Gn(n);
                return n.lanes = 536870912,
                null
            }
            return sl(n, l)
        }
        var d = e.memoizedState;
        if (d !== null) {
            var g = d.dehydrated;
            if (wu(n),
            u)
                if (n.flags & 256)
                    n.flags &= -257,
                    n = bp(e, n, i);
                else if (n.memoizedState !== null)
                    n.child = e.child,
                    n.flags |= 128,
                    n = null;
                else
                    throw Error(s(558));
            else if (Qe || ui(e, n, i, !1),
            u = (i & e.childLanes) !== 0,
            Qe || u) {
                if (l = Re,
                l !== null && (g = uh(l, i),
                g !== 0 && g !== d.retryLane))
                    throw d.retryLane = g,
                    Ea(e, g),
                    _t(l, e, g),
                    $u;
                yl(),
                n = bp(e, n, i)
            } else
                e = d.treeContext,
                Me = Xt(g.nextSibling),
                rt = n,
                ye = !0,
                Yn = null,
                Gt = !1,
                e !== null && rm(n, e),
                n = sl(n, l),
                n.flags |= 4096;
            return n
        }
        return e = xn(e.child, {
            mode: l.mode,
            children: l.children
        }),
        e.ref = n.ref,
        n.child = e,
        e.return = n,
        e
    }
    function ll(e, n) {
        var i = n.ref;
        if (i === null)
            e !== null && e.ref !== null && (n.flags |= 4194816);
        else {
            if (typeof i != "function" && typeof i != "object")
                throw Error(s(284));
            (e === null || e.ref !== i) && (n.flags |= 4194816)
        }
    }
    function Xu(e, n, i, l, u) {
        return Da(n),
        i = zu(e, n, i, l, void 0, u),
        l = Du(),
        e !== null && !Qe ? (Cu(e, n, u),
        _n(e, n, u)) : (ye && l && ou(n),
        n.flags |= 1,
        lt(e, n, i, u),
        n.child)
    }
    function xp(e, n, i, l, u, d) {
        return Da(n),
        n.updateQueue = null,
        i = Am(n, l, i, u),
        Tm(e),
        l = Du(),
        e !== null && !Qe ? (Cu(e, n, d),
        _n(e, n, d)) : (ye && l && ou(n),
        n.flags |= 1,
        lt(e, n, i, d),
        n.child)
    }
    function Sp(e, n, i, l, u) {
        if (Da(n),
        n.stateNode === null) {
            var d = ri
              , g = i.contextType;
            typeof g == "object" && g !== null && (d = st(g)),
            d = new i(l,d),
            n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null,
            d.updater = Yu,
            n.stateNode = d,
            d._reactInternals = n,
            d = n.stateNode,
            d.props = l,
            d.state = n.memoizedState,
            d.refs = {},
            bu(n),
            g = i.contextType,
            d.context = typeof g == "object" && g !== null ? st(g) : ri,
            d.state = n.memoizedState,
            g = i.getDerivedStateFromProps,
            typeof g == "function" && (Pu(n, i, g, l),
            d.state = n.memoizedState),
            typeof i.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (g = d.state,
            typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(),
            g !== d.state && Yu.enqueueReplaceState(d, d.state, null),
            br(n, l, d, u),
            vr(),
            d.state = n.memoizedState),
            typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            l = !0
        } else if (e === null) {
            d = n.stateNode;
            var b = n.memoizedProps
              , E = Na(i, b);
            d.props = E;
            var O = d.context
              , B = i.contextType;
            g = ri,
            typeof B == "object" && B !== null && (g = st(B));
            var H = i.getDerivedStateFromProps;
            B = typeof H == "function" || typeof d.getSnapshotBeforeUpdate == "function",
            b = n.pendingProps !== b,
            B || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (b || O !== g) && lp(n, d, l, g),
            Xn = !1;
            var j = n.memoizedState;
            d.state = j,
            br(n, l, d, u),
            vr(),
            O = n.memoizedState,
            b || j !== O || Xn ? (typeof H == "function" && (Pu(n, i, H, l),
            O = n.memoizedState),
            (E = Xn || sp(n, i, E, l, j, O, g)) ? (B || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(),
            typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()),
            typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            n.memoizedProps = l,
            n.memoizedState = O),
            d.props = l,
            d.state = O,
            d.context = g,
            l = E) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308),
            l = !1)
        } else {
            d = n.stateNode,
            xu(e, n),
            g = n.memoizedProps,
            B = Na(i, g),
            d.props = B,
            H = n.pendingProps,
            j = d.context,
            O = i.contextType,
            E = ri,
            typeof O == "object" && O !== null && (E = st(O)),
            b = i.getDerivedStateFromProps,
            (O = typeof b == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (g !== H || j !== E) && lp(n, d, l, E),
            Xn = !1,
            j = n.memoizedState,
            d.state = j,
            br(n, l, d, u),
            vr();
            var L = n.memoizedState;
            g !== H || j !== L || Xn || e !== null && e.dependencies !== null && qs(e.dependencies) ? (typeof b == "function" && (Pu(n, i, b, l),
            L = n.memoizedState),
            (B = Xn || sp(n, i, B, l, j, L, E) || e !== null && e.dependencies !== null && qs(e.dependencies)) ? (O || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, L, E),
            typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(l, L, E)),
            typeof d.componentDidUpdate == "function" && (n.flags |= 4),
            typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && j === e.memoizedState || (n.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && j === e.memoizedState || (n.flags |= 1024),
            n.memoizedProps = l,
            n.memoizedState = L),
            d.props = l,
            d.state = L,
            d.context = E,
            l = B) : (typeof d.componentDidUpdate != "function" || g === e.memoizedProps && j === e.memoizedState || (n.flags |= 4),
            typeof d.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && j === e.memoizedState || (n.flags |= 1024),
            l = !1)
        }
        return d = l,
        ll(e, n),
        l = (n.flags & 128) !== 0,
        d || l ? (d = n.stateNode,
        i = l && typeof i.getDerivedStateFromError != "function" ? null : d.render(),
        n.flags |= 1,
        e !== null && l ? (n.child = Ma(n, e.child, null, u),
        n.child = Ma(n, null, i, u)) : lt(e, n, i, u),
        n.memoizedState = d.state,
        e = n.child) : e = _n(e, n, u),
        e
    }
    function Tp(e, n, i, l) {
        return _a(),
        n.flags |= 256,
        lt(e, n, i, l),
        n.child
    }
    var Ku = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function Qu(e) {
        return {
            baseLanes: e,
            cachePool: fm()
        }
    }
    function Fu(e, n, i) {
        return e = e !== null ? e.childLanes & ~i : 0,
        n && (e |= Vt),
        e
    }
    function Ap(e, n, i) {
        var l = n.pendingProps, u = !1, d = (n.flags & 128) !== 0, g;
        if ((g = d) || (g = e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0),
        g && (u = !0,
        n.flags &= -129),
        g = (n.flags & 32) !== 0,
        n.flags &= -33,
        e === null) {
            if (ye) {
                if (u ? Fn(n) : Jn(),
                (e = Me) ? (e = O0(e, Gt),
                e = e !== null && e.data !== "&" ? e : null,
                e !== null && (n.memoizedState = {
                    dehydrated: e,
                    treeContext: Pn !== null ? {
                        id: un,
                        overflow: cn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                i = nm(e),
                i.return = n,
                n.child = i,
                rt = n,
                Me = null)) : e = null,
                e === null)
                    throw Gn(n);
                return Mc(e) ? n.lanes = 32 : n.lanes = 536870912,
                null
            }
            var b = l.children;
            return l = l.fallback,
            u ? (Jn(),
            u = n.mode,
            b = ol({
                mode: "hidden",
                children: b
            }, u),
            l = wa(l, u, i, null),
            b.return = n,
            l.return = n,
            b.sibling = l,
            n.child = b,
            l = n.child,
            l.memoizedState = Qu(i),
            l.childLanes = Fu(e, g, i),
            n.memoizedState = Ku,
            Er(null, l)) : (Fn(n),
            Ju(n, b))
        }
        var E = e.memoizedState;
        if (E !== null && (b = E.dehydrated,
        b !== null)) {
            if (d)
                n.flags & 256 ? (Fn(n),
                n.flags &= -257,
                n = Iu(e, n, i)) : n.memoizedState !== null ? (Jn(),
                n.child = e.child,
                n.flags |= 128,
                n = null) : (Jn(),
                b = l.fallback,
                u = n.mode,
                l = ol({
                    mode: "visible",
                    children: l.children
                }, u),
                b = wa(b, u, i, null),
                b.flags |= 2,
                l.return = n,
                b.return = n,
                l.sibling = b,
                n.child = l,
                Ma(n, e.child, null, i),
                l = n.child,
                l.memoizedState = Qu(i),
                l.childLanes = Fu(e, g, i),
                n.memoizedState = Ku,
                n = Er(null, l));
            else if (Fn(n),
            Mc(b)) {
                if (g = b.nextSibling && b.nextSibling.dataset,
                g)
                    var O = g.dgst;
                g = O,
                l = Error(s(419)),
                l.stack = "",
                l.digest = g,
                dr({
                    value: l,
                    source: null,
                    stack: null
                }),
                n = Iu(e, n, i)
            } else if (Qe || ui(e, n, i, !1),
            g = (i & e.childLanes) !== 0,
            Qe || g) {
                if (g = Re,
                g !== null && (l = uh(g, i),
                l !== 0 && l !== E.retryLane))
                    throw E.retryLane = l,
                    Ea(e, l),
                    _t(g, e, l),
                    $u;
                Oc(b) || yl(),
                n = Iu(e, n, i)
            } else
                Oc(b) ? (n.flags |= 192,
                n.child = e.child,
                n = null) : (e = E.treeContext,
                Me = Xt(b.nextSibling),
                rt = n,
                ye = !0,
                Yn = null,
                Gt = !1,
                e !== null && rm(n, e),
                n = Ju(n, l.children),
                n.flags |= 4096);
            return n
        }
        return u ? (Jn(),
        b = l.fallback,
        u = n.mode,
        E = e.child,
        O = E.sibling,
        l = xn(E, {
            mode: "hidden",
            children: l.children
        }),
        l.subtreeFlags = E.subtreeFlags & 65011712,
        O !== null ? b = xn(O, b) : (b = wa(b, u, i, null),
        b.flags |= 2),
        b.return = n,
        l.return = n,
        l.sibling = b,
        n.child = l,
        Er(null, l),
        l = n.child,
        b = e.child.memoizedState,
        b === null ? b = Qu(i) : (u = b.cachePool,
        u !== null ? (E = Xe._currentValue,
        u = u.parent !== E ? {
            parent: E,
            pool: E
        } : u) : u = fm(),
        b = {
            baseLanes: b.baseLanes | i,
            cachePool: u
        }),
        l.memoizedState = b,
        l.childLanes = Fu(e, g, i),
        n.memoizedState = Ku,
        Er(e.child, l)) : (Fn(n),
        i = e.child,
        e = i.sibling,
        i = xn(i, {
            mode: "visible",
            children: l.children
        }),
        i.return = n,
        i.sibling = null,
        e !== null && (g = n.deletions,
        g === null ? (n.deletions = [e],
        n.flags |= 16) : g.push(e)),
        n.child = i,
        n.memoizedState = null,
        i)
    }
    function Ju(e, n) {
        return n = ol({
            mode: "visible",
            children: n
        }, e.mode),
        n.return = e,
        e.child = n
    }
    function ol(e, n) {
        return e = jt(22, e, null, n),
        e.lanes = 0,
        e
    }
    function Iu(e, n, i) {
        return Ma(n, e.child, null, i),
        e = Ju(n, n.pendingProps.children),
        e.flags |= 2,
        n.memoizedState = null,
        e
    }
    function Ep(e, n, i) {
        e.lanes |= n;
        var l = e.alternate;
        l !== null && (l.lanes |= n),
        hu(e.return, n, i)
    }
    function Wu(e, n, i, l, u, d) {
        var g = e.memoizedState;
        g === null ? e.memoizedState = {
            isBackwards: n,
            rendering: null,
            renderingStartTime: 0,
            last: l,
            tail: i,
            tailMode: u,
            treeForkCount: d
        } : (g.isBackwards = n,
        g.rendering = null,
        g.renderingStartTime = 0,
        g.last = l,
        g.tail = i,
        g.tailMode = u,
        g.treeForkCount = d)
    }
    function wp(e, n, i) {
        var l = n.pendingProps
          , u = l.revealOrder
          , d = l.tail;
        l = l.children;
        var g = Ye.current
          , b = (g & 2) !== 0;
        if (b ? (g = g & 1 | 2,
        n.flags |= 128) : g &= 1,
        K(Ye, g),
        lt(e, n, l, i),
        l = ye ? fr : 0,
        !b && e !== null && (e.flags & 128) !== 0)
            e: for (e = n.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Ep(e, i, n);
                else if (e.tag === 19)
                    Ep(e, i, n);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === n)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === n)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        switch (u) {
        case "forwards":
            for (i = n.child,
            u = null; i !== null; )
                e = i.alternate,
                e !== null && Fs(e) === null && (u = i),
                i = i.sibling;
            i = u,
            i === null ? (u = n.child,
            n.child = null) : (u = i.sibling,
            i.sibling = null),
            Wu(n, !1, u, i, d, l);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (i = null,
            u = n.child,
            n.child = null; u !== null; ) {
                if (e = u.alternate,
                e !== null && Fs(e) === null) {
                    n.child = u;
                    break
                }
                e = u.sibling,
                u.sibling = i,
                i = u,
                u = e
            }
            Wu(n, !0, i, null, d, l);
            break;
        case "together":
            Wu(n, !1, null, null, void 0, l);
            break;
        default:
            n.memoizedState = null
        }
        return n.child
    }
    function _n(e, n, i) {
        if (e !== null && (n.dependencies = e.dependencies),
        ea |= n.lanes,
        (i & n.childLanes) === 0)
            if (e !== null) {
                if (ui(e, n, i, !1),
                (i & n.childLanes) === 0)
                    return null
            } else
                return null;
        if (e !== null && n.child !== e.child)
            throw Error(s(153));
        if (n.child !== null) {
            for (e = n.child,
            i = xn(e, e.pendingProps),
            n.child = i,
            i.return = n; e.sibling !== null; )
                e = e.sibling,
                i = i.sibling = xn(e, e.pendingProps),
                i.return = n;
            i.sibling = null
        }
        return n.child
    }
    function ec(e, n) {
        return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies,
        !!(e !== null && qs(e)))
    }
    function Rx(e, n, i) {
        switch (n.tag) {
        case 3:
            pt(n, n.stateNode.containerInfo),
            $n(n, Xe, e.memoizedState.cache),
            _a();
            break;
        case 27:
        case 5:
            Fi(n);
            break;
        case 4:
            pt(n, n.stateNode.containerInfo);
            break;
        case 10:
            $n(n, n.type, n.memoizedProps.value);
            break;
        case 31:
            if (n.memoizedState !== null)
                return n.flags |= 128,
                wu(n),
                null;
            break;
        case 13:
            var l = n.memoizedState;
            if (l !== null)
                return l.dehydrated !== null ? (Fn(n),
                n.flags |= 128,
                null) : (i & n.child.childLanes) !== 0 ? Ap(e, n, i) : (Fn(n),
                e = _n(e, n, i),
                e !== null ? e.sibling : null);
            Fn(n);
            break;
        case 19:
            var u = (e.flags & 128) !== 0;
            if (l = (i & n.childLanes) !== 0,
            l || (ui(e, n, i, !1),
            l = (i & n.childLanes) !== 0),
            u) {
                if (l)
                    return wp(e, n, i);
                n.flags |= 128
            }
            if (u = n.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            K(Ye, Ye.current),
            l)
                break;
            return null;
        case 22:
            return n.lanes = 0,
            yp(e, n, i, n.pendingProps);
        case 24:
            $n(n, Xe, e.memoizedState.cache)
        }
        return _n(e, n, i)
    }
    function _p(e, n, i) {
        if (e !== null)
            if (e.memoizedProps !== n.pendingProps)
                Qe = !0;
            else {
                if (!ec(e, i) && (n.flags & 128) === 0)
                    return Qe = !1,
                    Rx(e, n, i);
                Qe = (e.flags & 131072) !== 0
            }
        else
            Qe = !1,
            ye && (n.flags & 1048576) !== 0 && im(n, fr, n.index);
        switch (n.lanes = 0,
        n.tag) {
        case 16:
            e: {
                var l = n.pendingProps;
                if (e = Ra(n.elementType),
                n.type = e,
                typeof e == "function")
                    ru(e) ? (l = Na(e, l),
                    n.tag = 1,
                    n = Sp(null, n, e, l, i)) : (n.tag = 0,
                    n = Xu(null, n, e, l, i));
                else {
                    if (e != null) {
                        var u = e.$$typeof;
                        if (u === Y) {
                            n.tag = 11,
                            n = mp(null, n, e, l, i);
                            break e
                        } else if (u === X) {
                            n.tag = 14,
                            n = pp(null, n, e, l, i);
                            break e
                        }
                    }
                    throw n = dt(e) || e,
                    Error(s(306, n, ""))
                }
            }
            return n;
        case 0:
            return Xu(e, n, n.type, n.pendingProps, i);
        case 1:
            return l = n.type,
            u = Na(l, n.pendingProps),
            Sp(e, n, l, u, i);
        case 3:
            e: {
                if (pt(n, n.stateNode.containerInfo),
                e === null)
                    throw Error(s(387));
                l = n.pendingProps;
                var d = n.memoizedState;
                u = d.element,
                xu(e, n),
                br(n, l, null, i);
                var g = n.memoizedState;
                if (l = g.cache,
                $n(n, Xe, l),
                l !== d.cache && mu(n, [Xe], i, !0),
                vr(),
                l = g.element,
                d.isDehydrated)
                    if (d = {
                        element: l,
                        isDehydrated: !1,
                        cache: g.cache
                    },
                    n.updateQueue.baseState = d,
                    n.memoizedState = d,
                    n.flags & 256) {
                        n = Tp(e, n, l, i);
                        break e
                    } else if (l !== u) {
                        u = qt(Error(s(424)), n),
                        dr(u),
                        n = Tp(e, n, l, i);
                        break e
                    } else {
                        switch (e = n.stateNode.containerInfo,
                        e.nodeType) {
                        case 9:
                            e = e.body;
                            break;
                        default:
                            e = e.nodeName === "HTML" ? e.ownerDocument.body : e
                        }
                        for (Me = Xt(e.firstChild),
                        rt = n,
                        ye = !0,
                        Yn = null,
                        Gt = !0,
                        i = ym(n, null, l, i),
                        n.child = i; i; )
                            i.flags = i.flags & -3 | 4096,
                            i = i.sibling
                    }
                else {
                    if (_a(),
                    l === u) {
                        n = _n(e, n, i);
                        break e
                    }
                    lt(e, n, l, i)
                }
                n = n.child
            }
            return n;
        case 26:
            return ll(e, n),
            e === null ? (i = V0(n.type, null, n.pendingProps, null)) ? n.memoizedState = i : ye || (i = n.type,
            e = n.pendingProps,
            l = El(fe.current).createElement(i),
            l[it] = n,
            l[xt] = e,
            ot(l, i, e),
            nt(l),
            n.stateNode = l) : n.memoizedState = V0(n.type, e.memoizedProps, n.pendingProps, e.memoizedState),
            null;
        case 27:
            return Fi(n),
            e === null && ye && (l = n.stateNode = N0(n.type, n.pendingProps, fe.current),
            rt = n,
            Gt = !0,
            u = Me,
            ra(n.type) ? (jc = u,
            Me = Xt(l.firstChild)) : Me = u),
            lt(e, n, n.pendingProps.children, i),
            ll(e, n),
            e === null && (n.flags |= 4194304),
            n.child;
        case 5:
            return e === null && ye && ((u = l = Me) && (l = sS(l, n.type, n.pendingProps, Gt),
            l !== null ? (n.stateNode = l,
            rt = n,
            Me = Xt(l.firstChild),
            Gt = !1,
            u = !0) : u = !1),
            u || Gn(n)),
            Fi(n),
            u = n.type,
            d = n.pendingProps,
            g = e !== null ? e.memoizedProps : null,
            l = d.children,
            Dc(u, d) ? l = null : g !== null && Dc(u, g) && (n.flags |= 32),
            n.memoizedState !== null && (u = zu(e, n, Sx, null, null, i),
            kr._currentValue = u),
            ll(e, n),
            lt(e, n, l, i),
            n.child;
        case 6:
            return e === null && ye && ((e = i = Me) && (i = lS(i, n.pendingProps, Gt),
            i !== null ? (n.stateNode = i,
            rt = n,
            Me = null,
            e = !0) : e = !1),
            e || Gn(n)),
            null;
        case 13:
            return Ap(e, n, i);
        case 4:
            return pt(n, n.stateNode.containerInfo),
            l = n.pendingProps,
            e === null ? n.child = Ma(n, null, l, i) : lt(e, n, l, i),
            n.child;
        case 11:
            return mp(e, n, n.type, n.pendingProps, i);
        case 7:
            return lt(e, n, n.pendingProps, i),
            n.child;
        case 8:
            return lt(e, n, n.pendingProps.children, i),
            n.child;
        case 12:
            return lt(e, n, n.pendingProps.children, i),
            n.child;
        case 10:
            return l = n.pendingProps,
            $n(n, n.type, l.value),
            lt(e, n, l.children, i),
            n.child;
        case 9:
            return u = n.type._context,
            l = n.pendingProps.children,
            Da(n),
            u = st(u),
            l = l(u),
            n.flags |= 1,
            lt(e, n, l, i),
            n.child;
        case 14:
            return pp(e, n, n.type, n.pendingProps, i);
        case 15:
            return gp(e, n, n.type, n.pendingProps, i);
        case 19:
            return wp(e, n, i);
        case 31:
            return Cx(e, n, i);
        case 22:
            return yp(e, n, i, n.pendingProps);
        case 24:
            return Da(n),
            l = st(Xe),
            e === null ? (u = yu(),
            u === null && (u = Re,
            d = pu(),
            u.pooledCache = d,
            d.refCount++,
            d !== null && (u.pooledCacheLanes |= i),
            u = d),
            n.memoizedState = {
                parent: l,
                cache: u
            },
            bu(n),
            $n(n, Xe, u)) : ((e.lanes & i) !== 0 && (xu(e, n),
            br(n, null, null, i),
            vr()),
            u = e.memoizedState,
            d = n.memoizedState,
            u.parent !== l ? (u = {
                parent: l,
                cache: l
            },
            n.memoizedState = u,
            n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u),
            $n(n, Xe, l)) : (l = d.cache,
            $n(n, Xe, l),
            l !== u.cache && mu(n, [Xe], i, !0))),
            lt(e, n, n.pendingProps.children, i),
            n.child;
        case 29:
            throw n.pendingProps
        }
        throw Error(s(156, n.tag))
    }
    function zn(e) {
        e.flags |= 4
    }
    function tc(e, n, i, l, u) {
        if ((n = (e.mode & 32) !== 0) && (n = !1),
        n) {
            if (e.flags |= 16777216,
            (u & 335544128) === u)
                if (e.stateNode.complete)
                    e.flags |= 8192;
                else if (Wp())
                    e.flags |= 8192;
                else
                    throw Oa = $s,
                    vu
        } else
            e.flags &= -16777217
    }
    function zp(e, n) {
        if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
            e.flags &= -16777217;
        else if (e.flags |= 16777216,
        !q0(n))
            if (Wp())
                e.flags |= 8192;
            else
                throw Oa = $s,
                vu
    }
    function ul(e, n) {
        n !== null && (e.flags |= 4),
        e.flags & 16384 && (n = e.tag !== 22 ? sh() : 536870912,
        e.lanes |= n,
        Si |= n)
    }
    function wr(e, n) {
        if (!ye)
            switch (e.tailMode) {
            case "hidden":
                n = e.tail;
                for (var i = null; n !== null; )
                    n.alternate !== null && (i = n),
                    n = n.sibling;
                i === null ? e.tail = null : i.sibling = null;
                break;
            case "collapsed":
                i = e.tail;
                for (var l = null; i !== null; )
                    i.alternate !== null && (l = i),
                    i = i.sibling;
                l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
            }
    }
    function je(e) {
        var n = e.alternate !== null && e.alternate.child === e.child
          , i = 0
          , l = 0;
        if (n)
            for (var u = e.child; u !== null; )
                i |= u.lanes | u.childLanes,
                l |= u.subtreeFlags & 65011712,
                l |= u.flags & 65011712,
                u.return = e,
                u = u.sibling;
        else
            for (u = e.child; u !== null; )
                i |= u.lanes | u.childLanes,
                l |= u.subtreeFlags,
                l |= u.flags,
                u.return = e,
                u = u.sibling;
        return e.subtreeFlags |= l,
        e.childLanes = i,
        n
    }
    function Ox(e, n, i) {
        var l = n.pendingProps;
        switch (uu(n),
        n.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return je(n),
            null;
        case 1:
            return je(n),
            null;
        case 3:
            return i = n.stateNode,
            l = null,
            e !== null && (l = e.memoizedState.cache),
            n.memoizedState.cache !== l && (n.flags |= 2048),
            An(Xe),
            Pe(),
            i.pendingContext && (i.context = i.pendingContext,
            i.pendingContext = null),
            (e === null || e.child === null) && (oi(n) ? zn(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
            fu())),
            je(n),
            null;
        case 26:
            var u = n.type
              , d = n.memoizedState;
            return e === null ? (zn(n),
            d !== null ? (je(n),
            zp(n, d)) : (je(n),
            tc(n, u, null, l, i))) : d ? d !== e.memoizedState ? (zn(n),
            je(n),
            zp(n, d)) : (je(n),
            n.flags &= -16777217) : (e = e.memoizedProps,
            e !== l && zn(n),
            je(n),
            tc(n, u, e, l, i)),
            null;
        case 27:
            if (xs(n),
            i = fe.current,
            u = n.type,
            e !== null && n.stateNode != null)
                e.memoizedProps !== l && zn(n);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(s(166));
                    return je(n),
                    null
                }
                e = W.current,
                oi(n) ? sm(n) : (e = N0(u, l, i),
                n.stateNode = e,
                zn(n))
            }
            return je(n),
            null;
        case 5:
            if (xs(n),
            u = n.type,
            e !== null && n.stateNode != null)
                e.memoizedProps !== l && zn(n);
            else {
                if (!l) {
                    if (n.stateNode === null)
                        throw Error(s(166));
                    return je(n),
                    null
                }
                if (d = W.current,
                oi(n))
                    sm(n);
                else {
                    var g = El(fe.current);
                    switch (d) {
                    case 1:
                        d = g.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        d = g.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            d = g.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            d = g.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            d = g.createElement("div"),
                            d.innerHTML = "<script><\/script>",
                            d = d.removeChild(d.firstChild);
                            break;
                        case "select":
                            d = typeof l.is == "string" ? g.createElement("select", {
                                is: l.is
                            }) : g.createElement("select"),
                            l.multiple ? d.multiple = !0 : l.size && (d.size = l.size);
                            break;
                        default:
                            d = typeof l.is == "string" ? g.createElement(u, {
                                is: l.is
                            }) : g.createElement(u)
                        }
                    }
                    d[it] = n,
                    d[xt] = l;
                    e: for (g = n.child; g !== null; ) {
                        if (g.tag === 5 || g.tag === 6)
                            d.appendChild(g.stateNode);
                        else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                            g.child.return = g,
                            g = g.child;
                            continue
                        }
                        if (g === n)
                            break e;
                        for (; g.sibling === null; ) {
                            if (g.return === null || g.return === n)
                                break e;
                            g = g.return
                        }
                        g.sibling.return = g.return,
                        g = g.sibling
                    }
                    n.stateNode = d;
                    e: switch (ot(d, u, l),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break e;
                    case "img":
                        l = !0;
                        break e;
                    default:
                        l = !1
                    }
                    l && zn(n)
                }
            }
            return je(n),
            tc(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, i),
            null;
        case 6:
            if (e && n.stateNode != null)
                e.memoizedProps !== l && zn(n);
            else {
                if (typeof l != "string" && n.stateNode === null)
                    throw Error(s(166));
                if (e = fe.current,
                oi(n)) {
                    if (e = n.stateNode,
                    i = n.memoizedProps,
                    l = null,
                    u = rt,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            l = u.memoizedProps
                        }
                    e[it] = n,
                    e = !!(e.nodeValue === i || l !== null && l.suppressHydrationWarning === !0 || A0(e.nodeValue, i)),
                    e || Gn(n, !0)
                } else
                    e = El(e).createTextNode(l),
                    e[it] = n,
                    n.stateNode = e
            }
            return je(n),
            null;
        case 31:
            if (i = n.memoizedState,
            e === null || e.memoizedState !== null) {
                if (l = oi(n),
                i !== null) {
                    if (e === null) {
                        if (!l)
                            throw Error(s(318));
                        if (e = n.memoizedState,
                        e = e !== null ? e.dehydrated : null,
                        !e)
                            throw Error(s(557));
                        e[it] = n
                    } else
                        _a(),
                        (n.flags & 128) === 0 && (n.memoizedState = null),
                        n.flags |= 4;
                    je(n),
                    e = !1
                } else
                    i = fu(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
                    e = !0;
                if (!e)
                    return n.flags & 256 ? (Ut(n),
                    n) : (Ut(n),
                    null);
                if ((n.flags & 128) !== 0)
                    throw Error(s(558))
            }
            return je(n),
            null;
        case 13:
            if (l = n.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (u = oi(n),
                l !== null && l.dehydrated !== null) {
                    if (e === null) {
                        if (!u)
                            throw Error(s(318));
                        if (u = n.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(s(317));
                        u[it] = n
                    } else
                        _a(),
                        (n.flags & 128) === 0 && (n.memoizedState = null),
                        n.flags |= 4;
                    je(n),
                    u = !1
                } else
                    u = fu(),
                    e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return n.flags & 256 ? (Ut(n),
                    n) : (Ut(n),
                    null)
            }
            return Ut(n),
            (n.flags & 128) !== 0 ? (n.lanes = i,
            n) : (i = l !== null,
            e = e !== null && e.memoizedState !== null,
            i && (l = n.child,
            u = null,
            l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool),
            d = null,
            l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool),
            d !== u && (l.flags |= 2048)),
            i !== e && i && (n.child.flags |= 8192),
            ul(n, n.updateQueue),
            je(n),
            null);
        case 4:
            return Pe(),
            e === null && Ac(n.stateNode.containerInfo),
            je(n),
            null;
        case 10:
            return An(n.type),
            je(n),
            null;
        case 19:
            if (P(Ye),
            l = n.memoizedState,
            l === null)
                return je(n),
                null;
            if (u = (n.flags & 128) !== 0,
            d = l.rendering,
            d === null)
                if (u)
                    wr(l, !1);
                else {
                    if (He !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = n.child; e !== null; ) {
                            if (d = Fs(e),
                            d !== null) {
                                for (n.flags |= 128,
                                wr(l, !1),
                                e = d.updateQueue,
                                n.updateQueue = e,
                                ul(n, e),
                                n.subtreeFlags = 0,
                                e = i,
                                i = n.child; i !== null; )
                                    tm(i, e),
                                    i = i.sibling;
                                return K(Ye, Ye.current & 1 | 2),
                                ye && Sn(n, l.treeForkCount),
                                n.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null && Ct() > ml && (n.flags |= 128,
                    u = !0,
                    wr(l, !1),
                    n.lanes = 4194304)
                }
            else {
                if (!u)
                    if (e = Fs(d),
                    e !== null) {
                        if (n.flags |= 128,
                        u = !0,
                        e = e.updateQueue,
                        n.updateQueue = e,
                        ul(n, e),
                        wr(l, !0),
                        l.tail === null && l.tailMode === "hidden" && !d.alternate && !ye)
                            return je(n),
                            null
                    } else
                        2 * Ct() - l.renderingStartTime > ml && i !== 536870912 && (n.flags |= 128,
                        u = !0,
                        wr(l, !1),
                        n.lanes = 4194304);
                l.isBackwards ? (d.sibling = n.child,
                n.child = d) : (e = l.last,
                e !== null ? e.sibling = d : n.child = d,
                l.last = d)
            }
            return l.tail !== null ? (e = l.tail,
            l.rendering = e,
            l.tail = e.sibling,
            l.renderingStartTime = Ct(),
            e.sibling = null,
            i = Ye.current,
            K(Ye, u ? i & 1 | 2 : i & 1),
            ye && Sn(n, l.treeForkCount),
            e) : (je(n),
            null);
        case 22:
        case 23:
            return Ut(n),
            Eu(),
            l = n.memoizedState !== null,
            e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192),
            l ? (i & 536870912) !== 0 && (n.flags & 128) === 0 && (je(n),
            n.subtreeFlags & 6 && (n.flags |= 8192)) : je(n),
            i = n.updateQueue,
            i !== null && ul(n, i.retryQueue),
            i = null,
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
            l = null,
            n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool),
            l !== i && (n.flags |= 2048),
            e !== null && P(Ca),
            null;
        case 24:
            return i = null,
            e !== null && (i = e.memoizedState.cache),
            n.memoizedState.cache !== i && (n.flags |= 2048),
            An(Xe),
            je(n),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(s(156, n.tag))
    }
    function Mx(e, n) {
        switch (uu(n),
        n.tag) {
        case 1:
            return e = n.flags,
            e & 65536 ? (n.flags = e & -65537 | 128,
            n) : null;
        case 3:
            return An(Xe),
            Pe(),
            e = n.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128,
            n) : null;
        case 26:
        case 27:
        case 5:
            return xs(n),
            null;
        case 31:
            if (n.memoizedState !== null) {
                if (Ut(n),
                n.alternate === null)
                    throw Error(s(340));
                _a()
            }
            return e = n.flags,
            e & 65536 ? (n.flags = e & -65537 | 128,
            n) : null;
        case 13:
            if (Ut(n),
            e = n.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (n.alternate === null)
                    throw Error(s(340));
                _a()
            }
            return e = n.flags,
            e & 65536 ? (n.flags = e & -65537 | 128,
            n) : null;
        case 19:
            return P(Ye),
            null;
        case 4:
            return Pe(),
            null;
        case 10:
            return An(n.type),
            null;
        case 22:
        case 23:
            return Ut(n),
            Eu(),
            e !== null && P(Ca),
            e = n.flags,
            e & 65536 ? (n.flags = e & -65537 | 128,
            n) : null;
        case 24:
            return An(Xe),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Dp(e, n) {
        switch (uu(n),
        n.tag) {
        case 3:
            An(Xe),
            Pe();
            break;
        case 26:
        case 27:
        case 5:
            xs(n);
            break;
        case 4:
            Pe();
            break;
        case 31:
            n.memoizedState !== null && Ut(n);
            break;
        case 13:
            Ut(n);
            break;
        case 19:
            P(Ye);
            break;
        case 10:
            An(n.type);
            break;
        case 22:
        case 23:
            Ut(n),
            Eu(),
            e !== null && P(Ca);
            break;
        case 24:
            An(Xe)
        }
    }
    function _r(e, n) {
        try {
            var i = n.updateQueue
              , l = i !== null ? i.lastEffect : null;
            if (l !== null) {
                var u = l.next;
                i = u;
                do {
                    if ((i.tag & e) === e) {
                        l = void 0;
                        var d = i.create
                          , g = i.inst;
                        l = d(),
                        g.destroy = l
                    }
                    i = i.next
                } while (i !== u)
            }
        } catch (b) {
            Ee(n, n.return, b)
        }
    }
    function In(e, n, i) {
        try {
            var l = n.updateQueue
              , u = l !== null ? l.lastEffect : null;
            if (u !== null) {
                var d = u.next;
                l = d;
                do {
                    if ((l.tag & e) === e) {
                        var g = l.inst
                          , b = g.destroy;
                        if (b !== void 0) {
                            g.destroy = void 0,
                            u = n;
                            var E = i
                              , O = b;
                            try {
                                O()
                            } catch (B) {
                                Ee(u, E, B)
                            }
                        }
                    }
                    l = l.next
                } while (l !== d)
            }
        } catch (B) {
            Ee(n, n.return, B)
        }
    }
    function Cp(e) {
        var n = e.updateQueue;
        if (n !== null) {
            var i = e.stateNode;
            try {
                bm(n, i)
            } catch (l) {
                Ee(e, e.return, l)
            }
        }
    }
    function Rp(e, n, i) {
        i.props = Na(e.type, e.memoizedProps),
        i.state = e.memoizedState;
        try {
            i.componentWillUnmount()
        } catch (l) {
            Ee(e, n, l)
        }
    }
    function zr(e, n) {
        try {
            var i = e.ref;
            if (i !== null) {
                switch (e.tag) {
                case 26:
                case 27:
                case 5:
                    var l = e.stateNode;
                    break;
                case 30:
                    l = e.stateNode;
                    break;
                default:
                    l = e.stateNode
                }
                typeof i == "function" ? e.refCleanup = i(l) : i.current = l
            }
        } catch (u) {
            Ee(e, n, u)
        }
    }
    function fn(e, n) {
        var i = e.ref
          , l = e.refCleanup;
        if (i !== null)
            if (typeof l == "function")
                try {
                    l()
                } catch (u) {
                    Ee(e, n, u)
                } finally {
                    e.refCleanup = null,
                    e = e.alternate,
                    e != null && (e.refCleanup = null)
                }
            else if (typeof i == "function")
                try {
                    i(null)
                } catch (u) {
                    Ee(e, n, u)
                }
            else
                i.current = null
    }
    function Op(e) {
        var n = e.type
          , i = e.memoizedProps
          , l = e.stateNode;
        try {
            e: switch (n) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                i.autoFocus && l.focus();
                break e;
            case "img":
                i.src ? l.src = i.src : i.srcSet && (l.srcset = i.srcSet)
            }
        } catch (u) {
            Ee(e, e.return, u)
        }
    }
    function nc(e, n, i) {
        try {
            var l = e.stateNode;
            eS(l, e.type, i, n),
            l[xt] = n
        } catch (u) {
            Ee(e, e.return, u)
        }
    }
    function Mp(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && ra(e.type) || e.tag === 4
    }
    function ac(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Mp(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.tag === 27 && ra(e.type) || e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function ic(e, n, i) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            n ? (i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i).insertBefore(e, n) : (n = i.nodeType === 9 ? i.body : i.nodeName === "HTML" ? i.ownerDocument.body : i,
            n.appendChild(e),
            i = i._reactRootContainer,
            i != null || n.onclick !== null || (n.onclick = vn));
        else if (l !== 4 && (l === 27 && ra(e.type) && (i = e.stateNode,
        n = null),
        e = e.child,
        e !== null))
            for (ic(e, n, i),
            e = e.sibling; e !== null; )
                ic(e, n, i),
                e = e.sibling
    }
    function cl(e, n, i) {
        var l = e.tag;
        if (l === 5 || l === 6)
            e = e.stateNode,
            n ? i.insertBefore(e, n) : i.appendChild(e);
        else if (l !== 4 && (l === 27 && ra(e.type) && (i = e.stateNode),
        e = e.child,
        e !== null))
            for (cl(e, n, i),
            e = e.sibling; e !== null; )
                cl(e, n, i),
                e = e.sibling
    }
    function jp(e) {
        var n = e.stateNode
          , i = e.memoizedProps;
        try {
            for (var l = e.type, u = n.attributes; u.length; )
                n.removeAttributeNode(u[0]);
            ot(n, l, i),
            n[it] = e,
            n[xt] = i
        } catch (d) {
            Ee(e, e.return, d)
        }
    }
    var Dn = !1
      , Fe = !1
      , rc = !1
      , Np = typeof WeakSet == "function" ? WeakSet : Set
      , at = null;
    function jx(e, n) {
        if (e = e.containerInfo,
        _c = Ol,
        e = $h(e),
        Io(e)) {
            if ("selectionStart" in e)
                var i = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    i = (i = e.ownerDocument) && i.defaultView || window;
                    var l = i.getSelection && i.getSelection();
                    if (l && l.rangeCount !== 0) {
                        i = l.anchorNode;
                        var u = l.anchorOffset
                          , d = l.focusNode;
                        l = l.focusOffset;
                        try {
                            i.nodeType,
                            d.nodeType
                        } catch {
                            i = null;
                            break e
                        }
                        var g = 0
                          , b = -1
                          , E = -1
                          , O = 0
                          , B = 0
                          , H = e
                          , j = null;
                        t: for (; ; ) {
                            for (var L; H !== i || u !== 0 && H.nodeType !== 3 || (b = g + u),
                            H !== d || l !== 0 && H.nodeType !== 3 || (E = g + l),
                            H.nodeType === 3 && (g += H.nodeValue.length),
                            (L = H.firstChild) !== null; )
                                j = H,
                                H = L;
                            for (; ; ) {
                                if (H === e)
                                    break t;
                                if (j === i && ++O === u && (b = g),
                                j === d && ++B === l && (E = g),
                                (L = H.nextSibling) !== null)
                                    break;
                                H = j,
                                j = H.parentNode
                            }
                            H = L
                        }
                        i = b === -1 || E === -1 ? null : {
                            start: b,
                            end: E
                        }
                    } else
                        i = null
                }
            i = i || {
                start: 0,
                end: 0
            }
        } else
            i = null;
        for (zc = {
            focusedElem: e,
            selectionRange: i
        },
        Ol = !1,
        at = n; at !== null; )
            if (n = at,
            e = n.child,
            (n.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = n,
                at = e;
            else
                for (; at !== null; ) {
                    switch (n = at,
                    d = n.alternate,
                    e = n.flags,
                    n.tag) {
                    case 0:
                        if ((e & 4) !== 0 && (e = n.updateQueue,
                        e = e !== null ? e.events : null,
                        e !== null))
                            for (i = 0; i < e.length; i++)
                                u = e[i],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && d !== null) {
                            e = void 0,
                            i = n,
                            u = d.memoizedProps,
                            d = d.memoizedState,
                            l = i.stateNode;
                            try {
                                var J = Na(i.type, u);
                                e = l.getSnapshotBeforeUpdate(J, d),
                                l.__reactInternalSnapshotBeforeUpdate = e
                            } catch (ie) {
                                Ee(i, i.return, ie)
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = n.stateNode.containerInfo,
                            i = e.nodeType,
                            i === 9)
                                Rc(e);
                            else if (i === 1)
                                switch (e.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Rc(e);
                                    break;
                                default:
                                    e.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0)
                            throw Error(s(163))
                    }
                    if (e = n.sibling,
                    e !== null) {
                        e.return = n.return,
                        at = e;
                        break
                    }
                    at = n.return
                }
    }
    function Up(e, n, i) {
        var l = i.flags;
        switch (i.tag) {
        case 0:
        case 11:
        case 15:
            Rn(e, i),
            l & 4 && _r(5, i);
            break;
        case 1:
            if (Rn(e, i),
            l & 4)
                if (e = i.stateNode,
                n === null)
                    try {
                        e.componentDidMount()
                    } catch (g) {
                        Ee(i, i.return, g)
                    }
                else {
                    var u = Na(i.type, n.memoizedProps);
                    n = n.memoizedState;
                    try {
                        e.componentDidUpdate(u, n, e.__reactInternalSnapshotBeforeUpdate)
                    } catch (g) {
                        Ee(i, i.return, g)
                    }
                }
            l & 64 && Cp(i),
            l & 512 && zr(i, i.return);
            break;
        case 3:
            if (Rn(e, i),
            l & 64 && (e = i.updateQueue,
            e !== null)) {
                if (n = null,
                i.child !== null)
                    switch (i.child.tag) {
                    case 27:
                    case 5:
                        n = i.child.stateNode;
                        break;
                    case 1:
                        n = i.child.stateNode
                    }
                try {
                    bm(e, n)
                } catch (g) {
                    Ee(i, i.return, g)
                }
            }
            break;
        case 27:
            n === null && l & 4 && jp(i);
        case 26:
        case 5:
            Rn(e, i),
            n === null && l & 4 && Op(i),
            l & 512 && zr(i, i.return);
            break;
        case 12:
            Rn(e, i);
            break;
        case 31:
            Rn(e, i),
            l & 4 && Bp(e, i);
            break;
        case 13:
            Rn(e, i),
            l & 4 && kp(e, i),
            l & 64 && (e = i.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null && (i = qx.bind(null, i),
            oS(e, i))));
            break;
        case 22:
            if (l = i.memoizedState !== null || Dn,
            !l) {
                n = n !== null && n.memoizedState !== null || Fe,
                u = Dn;
                var d = Fe;
                Dn = l,
                (Fe = n) && !d ? On(e, i, (i.subtreeFlags & 8772) !== 0) : Rn(e, i),
                Dn = u,
                Fe = d
            }
            break;
        case 30:
            break;
        default:
            Rn(e, i)
        }
    }
    function Lp(e) {
        var n = e.alternate;
        n !== null && (e.alternate = null,
        Lp(n)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (n = e.stateNode,
        n !== null && Uo(n)),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    var Ne = null
      , Tt = !1;
    function Cn(e, n, i) {
        for (i = i.child; i !== null; )
            Vp(e, n, i),
            i = i.sibling
    }
    function Vp(e, n, i) {
        if (Rt && typeof Rt.onCommitFiberUnmount == "function")
            try {
                Rt.onCommitFiberUnmount(Ji, i)
            } catch {}
        switch (i.tag) {
        case 26:
            Fe || fn(i, n),
            Cn(e, n, i),
            i.memoizedState ? i.memoizedState.count-- : i.stateNode && (i = i.stateNode,
            i.parentNode.removeChild(i));
            break;
        case 27:
            Fe || fn(i, n);
            var l = Ne
              , u = Tt;
            ra(i.type) && (Ne = i.stateNode,
            Tt = !1),
            Cn(e, n, i),
            Lr(i.stateNode),
            Ne = l,
            Tt = u;
            break;
        case 5:
            Fe || fn(i, n);
        case 6:
            if (l = Ne,
            u = Tt,
            Ne = null,
            Cn(e, n, i),
            Ne = l,
            Tt = u,
            Ne !== null)
                if (Tt)
                    try {
                        (Ne.nodeType === 9 ? Ne.body : Ne.nodeName === "HTML" ? Ne.ownerDocument.body : Ne).removeChild(i.stateNode)
                    } catch (d) {
                        Ee(i, n, d)
                    }
                else
                    try {
                        Ne.removeChild(i.stateNode)
                    } catch (d) {
                        Ee(i, n, d)
                    }
            break;
        case 18:
            Ne !== null && (Tt ? (e = Ne,
            C0(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, i.stateNode),
            Ci(e)) : C0(Ne, i.stateNode));
            break;
        case 4:
            l = Ne,
            u = Tt,
            Ne = i.stateNode.containerInfo,
            Tt = !0,
            Cn(e, n, i),
            Ne = l,
            Tt = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            In(2, i, n),
            Fe || In(4, i, n),
            Cn(e, n, i);
            break;
        case 1:
            Fe || (fn(i, n),
            l = i.stateNode,
            typeof l.componentWillUnmount == "function" && Rp(i, n, l)),
            Cn(e, n, i);
            break;
        case 21:
            Cn(e, n, i);
            break;
        case 22:
            Fe = (l = Fe) || i.memoizedState !== null,
            Cn(e, n, i),
            Fe = l;
            break;
        default:
            Cn(e, n, i)
        }
    }
    function Bp(e, n) {
        if (n.memoizedState === null && (e = n.alternate,
        e !== null && (e = e.memoizedState,
        e !== null))) {
            e = e.dehydrated;
            try {
                Ci(e)
            } catch (i) {
                Ee(n, n.return, i)
            }
        }
    }
    function kp(e, n) {
        if (n.memoizedState === null && (e = n.alternate,
        e !== null && (e = e.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null))))
            try {
                Ci(e)
            } catch (i) {
                Ee(n, n.return, i)
            }
    }
    function Nx(e) {
        switch (e.tag) {
        case 31:
        case 13:
        case 19:
            var n = e.stateNode;
            return n === null && (n = e.stateNode = new Np),
            n;
        case 22:
            return e = e.stateNode,
            n = e._retryCache,
            n === null && (n = e._retryCache = new Np),
            n;
        default:
            throw Error(s(435, e.tag))
        }
    }
    function fl(e, n) {
        var i = Nx(e);
        n.forEach(function(l) {
            if (!i.has(l)) {
                i.add(l);
                var u = Px.bind(null, e, l);
                l.then(u, u)
            }
        })
    }
    function At(e, n) {
        var i = n.deletions;
        if (i !== null)
            for (var l = 0; l < i.length; l++) {
                var u = i[l]
                  , d = e
                  , g = n
                  , b = g;
                e: for (; b !== null; ) {
                    switch (b.tag) {
                    case 27:
                        if (ra(b.type)) {
                            Ne = b.stateNode,
                            Tt = !1;
                            break e
                        }
                        break;
                    case 5:
                        Ne = b.stateNode,
                        Tt = !1;
                        break e;
                    case 3:
                    case 4:
                        Ne = b.stateNode.containerInfo,
                        Tt = !0;
                        break e
                    }
                    b = b.return
                }
                if (Ne === null)
                    throw Error(s(160));
                Vp(d, g, u),
                Ne = null,
                Tt = !1,
                d = u.alternate,
                d !== null && (d.return = null),
                u.return = null
            }
        if (n.subtreeFlags & 13886)
            for (n = n.child; n !== null; )
                Zp(n, e),
                n = n.sibling
    }
    var an = null;
    function Zp(e, n) {
        var i = e.alternate
          , l = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            At(n, e),
            Et(e),
            l & 4 && (In(3, e, e.return),
            _r(3, e),
            In(5, e, e.return));
            break;
        case 1:
            At(n, e),
            Et(e),
            l & 512 && (Fe || i === null || fn(i, i.return)),
            l & 64 && Dn && (e = e.updateQueue,
            e !== null && (l = e.callbacks,
            l !== null && (i = e.shared.hiddenCallbacks,
            e.shared.hiddenCallbacks = i === null ? l : i.concat(l))));
            break;
        case 26:
            var u = an;
            if (At(n, e),
            Et(e),
            l & 512 && (Fe || i === null || fn(i, i.return)),
            l & 4) {
                var d = i !== null ? i.memoizedState : null;
                if (l = e.memoizedState,
                i === null)
                    if (l === null)
                        if (e.stateNode === null) {
                            e: {
                                l = e.type,
                                i = e.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (l) {
                                case "title":
                                    d = u.getElementsByTagName("title")[0],
                                    (!d || d[er] || d[it] || d.namespaceURI === "http://www.w3.org/2000/svg" || d.hasAttribute("itemprop")) && (d = u.createElement(l),
                                    u.head.insertBefore(d, u.querySelector("head > title"))),
                                    ot(d, l, i),
                                    d[it] = e,
                                    nt(d),
                                    l = d;
                                    break e;
                                case "link":
                                    var g = Z0("link", "href", u).get(l + (i.href || ""));
                                    if (g) {
                                        for (var b = 0; b < g.length; b++)
                                            if (d = g[b],
                                            d.getAttribute("href") === (i.href == null || i.href === "" ? null : i.href) && d.getAttribute("rel") === (i.rel == null ? null : i.rel) && d.getAttribute("title") === (i.title == null ? null : i.title) && d.getAttribute("crossorigin") === (i.crossOrigin == null ? null : i.crossOrigin)) {
                                                g.splice(b, 1);
                                                break t
                                            }
                                    }
                                    d = u.createElement(l),
                                    ot(d, l, i),
                                    u.head.appendChild(d);
                                    break;
                                case "meta":
                                    if (g = Z0("meta", "content", u).get(l + (i.content || ""))) {
                                        for (b = 0; b < g.length; b++)
                                            if (d = g[b],
                                            d.getAttribute("content") === (i.content == null ? null : "" + i.content) && d.getAttribute("name") === (i.name == null ? null : i.name) && d.getAttribute("property") === (i.property == null ? null : i.property) && d.getAttribute("http-equiv") === (i.httpEquiv == null ? null : i.httpEquiv) && d.getAttribute("charset") === (i.charSet == null ? null : i.charSet)) {
                                                g.splice(b, 1);
                                                break t
                                            }
                                    }
                                    d = u.createElement(l),
                                    ot(d, l, i),
                                    u.head.appendChild(d);
                                    break;
                                default:
                                    throw Error(s(468, l))
                                }
                                d[it] = e,
                                nt(d),
                                l = d
                            }
                            e.stateNode = l
                        } else
                            H0(u, e.type, e.stateNode);
                    else
                        e.stateNode = k0(u, l, e.memoizedProps);
                else
                    d !== l ? (d === null ? i.stateNode !== null && (i = i.stateNode,
                    i.parentNode.removeChild(i)) : d.count--,
                    l === null ? H0(u, e.type, e.stateNode) : k0(u, l, e.memoizedProps)) : l === null && e.stateNode !== null && nc(e, e.memoizedProps, i.memoizedProps)
            }
            break;
        case 27:
            At(n, e),
            Et(e),
            l & 512 && (Fe || i === null || fn(i, i.return)),
            i !== null && l & 4 && nc(e, e.memoizedProps, i.memoizedProps);
            break;
        case 5:
            if (At(n, e),
            Et(e),
            l & 512 && (Fe || i === null || fn(i, i.return)),
            e.flags & 32) {
                u = e.stateNode;
                try {
                    Ia(u, "")
                } catch (J) {
                    Ee(e, e.return, J)
                }
            }
            l & 4 && e.stateNode != null && (u = e.memoizedProps,
            nc(e, u, i !== null ? i.memoizedProps : u)),
            l & 1024 && (rc = !0);
            break;
        case 6:
            if (At(n, e),
            Et(e),
            l & 4) {
                if (e.stateNode === null)
                    throw Error(s(162));
                l = e.memoizedProps,
                i = e.stateNode;
                try {
                    i.nodeValue = l
                } catch (J) {
                    Ee(e, e.return, J)
                }
            }
            break;
        case 3:
            if (zl = null,
            u = an,
            an = wl(n.containerInfo),
            At(n, e),
            an = u,
            Et(e),
            l & 4 && i !== null && i.memoizedState.isDehydrated)
                try {
                    Ci(n.containerInfo)
                } catch (J) {
                    Ee(e, e.return, J)
                }
            rc && (rc = !1,
            Hp(e));
            break;
        case 4:
            l = an,
            an = wl(e.stateNode.containerInfo),
            At(n, e),
            Et(e),
            an = l;
            break;
        case 12:
            At(n, e),
            Et(e);
            break;
        case 31:
            At(n, e),
            Et(e),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            fl(e, l)));
            break;
        case 13:
            At(n, e),
            Et(e),
            e.child.flags & 8192 && e.memoizedState !== null != (i !== null && i.memoizedState !== null) && (hl = Ct()),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            fl(e, l)));
            break;
        case 22:
            u = e.memoizedState !== null;
            var E = i !== null && i.memoizedState !== null
              , O = Dn
              , B = Fe;
            if (Dn = O || u,
            Fe = B || E,
            At(n, e),
            Fe = B,
            Dn = O,
            Et(e),
            l & 8192)
                e: for (n = e.stateNode,
                n._visibility = u ? n._visibility & -2 : n._visibility | 1,
                u && (i === null || E || Dn || Fe || Ua(e)),
                i = null,
                n = e; ; ) {
                    if (n.tag === 5 || n.tag === 26) {
                        if (i === null) {
                            E = i = n;
                            try {
                                if (d = E.stateNode,
                                u)
                                    g = d.style,
                                    typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                                else {
                                    b = E.stateNode;
                                    var H = E.memoizedProps.style
                                      , j = H != null && H.hasOwnProperty("display") ? H.display : null;
                                    b.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim()
                                }
                            } catch (J) {
                                Ee(E, E.return, J)
                            }
                        }
                    } else if (n.tag === 6) {
                        if (i === null) {
                            E = n;
                            try {
                                E.stateNode.nodeValue = u ? "" : E.memoizedProps
                            } catch (J) {
                                Ee(E, E.return, J)
                            }
                        }
                    } else if (n.tag === 18) {
                        if (i === null) {
                            E = n;
                            try {
                                var L = E.stateNode;
                                u ? R0(L, !0) : R0(E.stateNode, !1)
                            } catch (J) {
                                Ee(E, E.return, J)
                            }
                        }
                    } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
                        n.child.return = n,
                        n = n.child;
                        continue
                    }
                    if (n === e)
                        break e;
                    for (; n.sibling === null; ) {
                        if (n.return === null || n.return === e)
                            break e;
                        i === n && (i = null),
                        n = n.return
                    }
                    i === n && (i = null),
                    n.sibling.return = n.return,
                    n = n.sibling
                }
            l & 4 && (l = e.updateQueue,
            l !== null && (i = l.retryQueue,
            i !== null && (l.retryQueue = null,
            fl(e, i))));
            break;
        case 19:
            At(n, e),
            Et(e),
            l & 4 && (l = e.updateQueue,
            l !== null && (e.updateQueue = null,
            fl(e, l)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            At(n, e),
            Et(e)
        }
    }
    function Et(e) {
        var n = e.flags;
        if (n & 2) {
            try {
                for (var i, l = e.return; l !== null; ) {
                    if (Mp(l)) {
                        i = l;
                        break
                    }
                    l = l.return
                }
                if (i == null)
                    throw Error(s(160));
                switch (i.tag) {
                case 27:
                    var u = i.stateNode
                      , d = ac(e);
                    cl(e, d, u);
                    break;
                case 5:
                    var g = i.stateNode;
                    i.flags & 32 && (Ia(g, ""),
                    i.flags &= -33);
                    var b = ac(e);
                    cl(e, b, g);
                    break;
                case 3:
                case 4:
                    var E = i.stateNode.containerInfo
                      , O = ac(e);
                    ic(e, O, E);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (B) {
                Ee(e, e.return, B)
            }
            e.flags &= -3
        }
        n & 4096 && (e.flags &= -4097)
    }
    function Hp(e) {
        if (e.subtreeFlags & 1024)
            for (e = e.child; e !== null; ) {
                var n = e;
                Hp(n),
                n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
                e = e.sibling
            }
    }
    function Rn(e, n) {
        if (n.subtreeFlags & 8772)
            for (n = n.child; n !== null; )
                Up(e, n.alternate, n),
                n = n.sibling
    }
    function Ua(e) {
        for (e = e.child; e !== null; ) {
            var n = e;
            switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                In(4, n, n.return),
                Ua(n);
                break;
            case 1:
                fn(n, n.return);
                var i = n.stateNode;
                typeof i.componentWillUnmount == "function" && Rp(n, n.return, i),
                Ua(n);
                break;
            case 27:
                Lr(n.stateNode);
            case 26:
            case 5:
                fn(n, n.return),
                Ua(n);
                break;
            case 22:
                n.memoizedState === null && Ua(n);
                break;
            case 30:
                Ua(n);
                break;
            default:
                Ua(n)
            }
            e = e.sibling
        }
    }
    function On(e, n, i) {
        for (i = i && (n.subtreeFlags & 8772) !== 0,
        n = n.child; n !== null; ) {
            var l = n.alternate
              , u = e
              , d = n
              , g = d.flags;
            switch (d.tag) {
            case 0:
            case 11:
            case 15:
                On(u, d, i),
                _r(4, d);
                break;
            case 1:
                if (On(u, d, i),
                l = d,
                u = l.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (O) {
                        Ee(l, l.return, O)
                    }
                if (l = d,
                u = l.updateQueue,
                u !== null) {
                    var b = l.stateNode;
                    try {
                        var E = u.shared.hiddenCallbacks;
                        if (E !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < E.length; u++)
                                vm(E[u], b)
                    } catch (O) {
                        Ee(l, l.return, O)
                    }
                }
                i && g & 64 && Cp(d),
                zr(d, d.return);
                break;
            case 27:
                jp(d);
            case 26:
            case 5:
                On(u, d, i),
                i && l === null && g & 4 && Op(d),
                zr(d, d.return);
                break;
            case 12:
                On(u, d, i);
                break;
            case 31:
                On(u, d, i),
                i && g & 4 && Bp(u, d);
                break;
            case 13:
                On(u, d, i),
                i && g & 4 && kp(u, d);
                break;
            case 22:
                d.memoizedState === null && On(u, d, i),
                zr(d, d.return);
                break;
            case 30:
                break;
            default:
                On(u, d, i)
            }
            n = n.sibling
        }
    }
    function sc(e, n) {
        var i = null;
        e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
        e = null,
        n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool),
        e !== i && (e != null && e.refCount++,
        i != null && hr(i))
    }
    function lc(e, n) {
        e = null,
        n.alternate !== null && (e = n.alternate.memoizedState.cache),
        n = n.memoizedState.cache,
        n !== e && (n.refCount++,
        e != null && hr(e))
    }
    function rn(e, n, i, l) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null; )
                qp(e, n, i, l),
                n = n.sibling
    }
    function qp(e, n, i, l) {
        var u = n.flags;
        switch (n.tag) {
        case 0:
        case 11:
        case 15:
            rn(e, n, i, l),
            u & 2048 && _r(9, n);
            break;
        case 1:
            rn(e, n, i, l);
            break;
        case 3:
            rn(e, n, i, l),
            u & 2048 && (e = null,
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            n = n.memoizedState.cache,
            n !== e && (n.refCount++,
            e != null && hr(e)));
            break;
        case 12:
            if (u & 2048) {
                rn(e, n, i, l),
                e = n.stateNode;
                try {
                    var d = n.memoizedProps
                      , g = d.id
                      , b = d.onPostCommit;
                    typeof b == "function" && b(g, n.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                } catch (E) {
                    Ee(n, n.return, E)
                }
            } else
                rn(e, n, i, l);
            break;
        case 31:
            rn(e, n, i, l);
            break;
        case 13:
            rn(e, n, i, l);
            break;
        case 23:
            break;
        case 22:
            d = n.stateNode,
            g = n.alternate,
            n.memoizedState !== null ? d._visibility & 2 ? rn(e, n, i, l) : Dr(e, n) : d._visibility & 2 ? rn(e, n, i, l) : (d._visibility |= 2,
            vi(e, n, i, l, (n.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && sc(g, n);
            break;
        case 24:
            rn(e, n, i, l),
            u & 2048 && lc(n.alternate, n);
            break;
        default:
            rn(e, n, i, l)
        }
    }
    function vi(e, n, i, l, u) {
        for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1),
        n = n.child; n !== null; ) {
            var d = e
              , g = n
              , b = i
              , E = l
              , O = g.flags;
            switch (g.tag) {
            case 0:
            case 11:
            case 15:
                vi(d, g, b, E, u),
                _r(8, g);
                break;
            case 23:
                break;
            case 22:
                var B = g.stateNode;
                g.memoizedState !== null ? B._visibility & 2 ? vi(d, g, b, E, u) : Dr(d, g) : (B._visibility |= 2,
                vi(d, g, b, E, u)),
                u && O & 2048 && sc(g.alternate, g);
                break;
            case 24:
                vi(d, g, b, E, u),
                u && O & 2048 && lc(g.alternate, g);
                break;
            default:
                vi(d, g, b, E, u)
            }
            n = n.sibling
        }
    }
    function Dr(e, n) {
        if (n.subtreeFlags & 10256)
            for (n = n.child; n !== null; ) {
                var i = e
                  , l = n
                  , u = l.flags;
                switch (l.tag) {
                case 22:
                    Dr(i, l),
                    u & 2048 && sc(l.alternate, l);
                    break;
                case 24:
                    Dr(i, l),
                    u & 2048 && lc(l.alternate, l);
                    break;
                default:
                    Dr(i, l)
                }
                n = n.sibling
            }
    }
    var Cr = 8192;
    function bi(e, n, i) {
        if (e.subtreeFlags & Cr)
            for (e = e.child; e !== null; )
                Pp(e, n, i),
                e = e.sibling
    }
    function Pp(e, n, i) {
        switch (e.tag) {
        case 26:
            bi(e, n, i),
            e.flags & Cr && e.memoizedState !== null && xS(i, an, e.memoizedState, e.memoizedProps);
            break;
        case 5:
            bi(e, n, i);
            break;
        case 3:
        case 4:
            var l = an;
            an = wl(e.stateNode.containerInfo),
            bi(e, n, i),
            an = l;
            break;
        case 22:
            e.memoizedState === null && (l = e.alternate,
            l !== null && l.memoizedState !== null ? (l = Cr,
            Cr = 16777216,
            bi(e, n, i),
            Cr = l) : bi(e, n, i));
            break;
        default:
            bi(e, n, i)
        }
    }
    function Yp(e) {
        var n = e.alternate;
        if (n !== null && (e = n.child,
        e !== null)) {
            n.child = null;
            do
                n = e.sibling,
                e.sibling = null,
                e = n;
            while (e !== null)
        }
    }
    function Rr(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (n !== null)
                for (var i = 0; i < n.length; i++) {
                    var l = n[i];
                    at = l,
                    $p(l, e)
                }
            Yp(e)
        }
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                Gp(e),
                e = e.sibling
    }
    function Gp(e) {
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Rr(e),
            e.flags & 2048 && In(9, e, e.return);
            break;
        case 3:
            Rr(e);
            break;
        case 12:
            Rr(e);
            break;
        case 22:
            var n = e.stateNode;
            e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3,
            dl(e)) : Rr(e);
            break;
        default:
            Rr(e)
        }
    }
    function dl(e) {
        var n = e.deletions;
        if ((e.flags & 16) !== 0) {
            if (n !== null)
                for (var i = 0; i < n.length; i++) {
                    var l = n[i];
                    at = l,
                    $p(l, e)
                }
            Yp(e)
        }
        for (e = e.child; e !== null; ) {
            switch (n = e,
            n.tag) {
            case 0:
            case 11:
            case 15:
                In(8, n, n.return),
                dl(n);
                break;
            case 22:
                i = n.stateNode,
                i._visibility & 2 && (i._visibility &= -3,
                dl(n));
                break;
            default:
                dl(n)
            }
            e = e.sibling
        }
    }
    function $p(e, n) {
        for (; at !== null; ) {
            var i = at;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                In(8, i, n);
                break;
            case 23:
            case 22:
                if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
                    var l = i.memoizedState.cachePool.pool;
                    l != null && l.refCount++
                }
                break;
            case 24:
                hr(i.memoizedState.cache)
            }
            if (l = i.child,
            l !== null)
                l.return = i,
                at = l;
            else
                e: for (i = e; at !== null; ) {
                    l = at;
                    var u = l.sibling
                      , d = l.return;
                    if (Lp(l),
                    l === i) {
                        at = null;
                        break e
                    }
                    if (u !== null) {
                        u.return = d,
                        at = u;
                        break e
                    }
                    at = d
                }
        }
    }
    var Ux = {
        getCacheForType: function(e) {
            var n = st(Xe)
              , i = n.data.get(e);
            return i === void 0 && (i = e(),
            n.data.set(e, i)),
            i
        },
        cacheSignal: function() {
            return st(Xe).controller.signal
        }
    }
      , Lx = typeof WeakMap == "function" ? WeakMap : Map
      , Se = 0
      , Re = null
      , de = null
      , pe = 0
      , Ae = 0
      , Lt = null
      , Wn = !1
      , xi = !1
      , oc = !1
      , Mn = 0
      , He = 0
      , ea = 0
      , La = 0
      , uc = 0
      , Vt = 0
      , Si = 0
      , Or = null
      , wt = null
      , cc = !1
      , hl = 0
      , Xp = 0
      , ml = 1 / 0
      , pl = null
      , ta = null
      , et = 0
      , na = null
      , Ti = null
      , jn = 0
      , fc = 0
      , dc = null
      , Kp = null
      , Mr = 0
      , hc = null;
    function Bt() {
        return (Se & 2) !== 0 && pe !== 0 ? pe & -pe : k.T !== null ? bc() : ch()
    }
    function Qp() {
        if (Vt === 0)
            if ((pe & 536870912) === 0 || ye) {
                var e = As;
                As <<= 1,
                (As & 3932160) === 0 && (As = 262144),
                Vt = e
            } else
                Vt = 536870912;
        return e = Nt.current,
        e !== null && (e.flags |= 32),
        Vt
    }
    function _t(e, n, i) {
        (e === Re && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null) && (Ai(e, 0),
        aa(e, pe, Vt, !1)),
        Wi(e, i),
        ((Se & 2) === 0 || e !== Re) && (e === Re && ((Se & 2) === 0 && (La |= i),
        He === 4 && aa(e, pe, Vt, !1)),
        dn(e))
    }
    function Fp(e, n, i) {
        if ((Se & 6) !== 0)
            throw Error(s(327));
        var l = !i && (n & 127) === 0 && (n & e.expiredLanes) === 0 || Ii(e, n)
          , u = l ? kx(e, n) : pc(e, n, !0)
          , d = l;
        do {
            if (u === 0) {
                xi && !l && aa(e, n, 0, !1);
                break
            } else {
                if (i = e.current.alternate,
                d && !Vx(i)) {
                    u = pc(e, n, !1),
                    d = !1;
                    continue
                }
                if (u === 2) {
                    if (d = n,
                    e.errorRecoveryDisabledLanes & d)
                        var g = 0;
                    else
                        g = e.pendingLanes & -536870913,
                        g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
                    if (g !== 0) {
                        n = g;
                        e: {
                            var b = e;
                            u = Or;
                            var E = b.current.memoizedState.isDehydrated;
                            if (E && (Ai(b, g).flags |= 256),
                            g = pc(b, g, !1),
                            g !== 2) {
                                if (oc && !E) {
                                    b.errorRecoveryDisabledLanes |= d,
                                    La |= d,
                                    u = 4;
                                    break e
                                }
                                d = wt,
                                wt = u,
                                d !== null && (wt === null ? wt = d : wt.push.apply(wt, d))
                            }
                            u = g
                        }
                        if (d = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    Ai(e, 0),
                    aa(e, n, 0, !0);
                    break
                }
                e: {
                    switch (l = e,
                    d = u,
                    d) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 4:
                        if ((n & 4194048) !== n)
                            break;
                    case 6:
                        aa(l, n, Vt, !Wn);
                        break e;
                    case 2:
                        wt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(s(329))
                    }
                    if ((n & 62914560) === n && (u = hl + 300 - Ct(),
                    10 < u)) {
                        if (aa(l, n, Vt, !Wn),
                        ws(l, 0, !0) !== 0)
                            break e;
                        jn = n,
                        l.timeoutHandle = z0(Jp.bind(null, l, i, wt, pl, cc, n, Vt, La, Si, Wn, d, "Throttled", -0, 0), u);
                        break e
                    }
                    Jp(l, i, wt, pl, cc, n, Vt, La, Si, Wn, d, null, -0, 0)
                }
            }
            break
        } while (!0);
        dn(e)
    }
    function Jp(e, n, i, l, u, d, g, b, E, O, B, H, j, L) {
        if (e.timeoutHandle = -1,
        H = n.subtreeFlags,
        H & 8192 || (H & 16785408) === 16785408) {
            H = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: vn
            },
            Pp(n, d, H);
            var J = (d & 62914560) === d ? hl - Ct() : (d & 4194048) === d ? Xp - Ct() : 0;
            if (J = SS(H, J),
            J !== null) {
                jn = d,
                e.cancelPendingCommit = J(r0.bind(null, e, n, d, i, l, u, g, b, E, B, H, null, j, L)),
                aa(e, d, g, !O);
                return
            }
        }
        r0(e, n, d, i, l, u, g, b, E)
    }
    function Vx(e) {
        for (var n = e; ; ) {
            var i = n.tag;
            if ((i === 0 || i === 11 || i === 15) && n.flags & 16384 && (i = n.updateQueue,
            i !== null && (i = i.stores,
            i !== null)))
                for (var l = 0; l < i.length; l++) {
                    var u = i[l]
                      , d = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Mt(d(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (i = n.child,
            n.subtreeFlags & 16384 && i !== null)
                i.return = n,
                n = i;
            else {
                if (n === e)
                    break;
                for (; n.sibling === null; ) {
                    if (n.return === null || n.return === e)
                        return !0;
                    n = n.return
                }
                n.sibling.return = n.return,
                n = n.sibling
            }
        }
        return !0
    }
    function aa(e, n, i, l) {
        n &= ~uc,
        n &= ~La,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        l && (e.warmLanes |= n),
        l = e.expirationTimes;
        for (var u = n; 0 < u; ) {
            var d = 31 - Ot(u)
              , g = 1 << d;
            l[d] = -1,
            u &= ~g
        }
        i !== 0 && lh(e, i, n)
    }
    function gl() {
        return (Se & 6) === 0 ? (jr(0),
        !1) : !0
    }
    function mc() {
        if (de !== null) {
            if (Ae === 0)
                var e = de.return;
            else
                e = de,
                Tn = za = null,
                Ru(e),
                hi = null,
                pr = 0,
                e = de;
            for (; e !== null; )
                Dp(e.alternate, e),
                e = e.return;
            de = null
        }
    }
    function Ai(e, n) {
        var i = e.timeoutHandle;
        i !== -1 && (e.timeoutHandle = -1,
        aS(i)),
        i = e.cancelPendingCommit,
        i !== null && (e.cancelPendingCommit = null,
        i()),
        jn = 0,
        mc(),
        Re = e,
        de = i = xn(e.current, null),
        pe = n,
        Ae = 0,
        Lt = null,
        Wn = !1,
        xi = Ii(e, n),
        oc = !1,
        Si = Vt = uc = La = ea = He = 0,
        wt = Or = null,
        cc = !1,
        (n & 8) !== 0 && (n |= n & 32);
        var l = e.entangledLanes;
        if (l !== 0)
            for (e = e.entanglements,
            l &= n; 0 < l; ) {
                var u = 31 - Ot(l)
                  , d = 1 << u;
                n |= e[u],
                l &= ~d
            }
        return Mn = n,
        Vs(),
        i
    }
    function Ip(e, n) {
        ue = null,
        k.H = Ar,
        n === di || n === Gs ? (n = mm(),
        Ae = 3) : n === vu ? (n = mm(),
        Ae = 4) : Ae = n === $u ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1,
        Lt = n,
        de === null && (He = 1,
        rl(e, qt(n, e.current)))
    }
    function Wp() {
        var e = Nt.current;
        return e === null ? !0 : (pe & 4194048) === pe ? $t === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === $t : !1
    }
    function e0() {
        var e = k.H;
        return k.H = Ar,
        e === null ? Ar : e
    }
    function t0() {
        var e = k.A;
        return k.A = Ux,
        e
    }
    function yl() {
        He = 4,
        Wn || (pe & 4194048) !== pe && Nt.current !== null || (xi = !0),
        (ea & 134217727) === 0 && (La & 134217727) === 0 || Re === null || aa(Re, pe, Vt, !1)
    }
    function pc(e, n, i) {
        var l = Se;
        Se |= 2;
        var u = e0()
          , d = t0();
        (Re !== e || pe !== n) && (pl = null,
        Ai(e, n)),
        n = !1;
        var g = He;
        e: do
            try {
                if (Ae !== 0 && de !== null) {
                    var b = de
                      , E = Lt;
                    switch (Ae) {
                    case 8:
                        mc(),
                        g = 6;
                        break e;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Nt.current === null && (n = !0);
                        var O = Ae;
                        if (Ae = 0,
                        Lt = null,
                        Ei(e, b, E, O),
                        i && xi) {
                            g = 0;
                            break e
                        }
                        break;
                    default:
                        O = Ae,
                        Ae = 0,
                        Lt = null,
                        Ei(e, b, E, O)
                    }
                }
                Bx(),
                g = He;
                break
            } catch (B) {
                Ip(e, B)
            }
        while (!0);
        return n && e.shellSuspendCounter++,
        Tn = za = null,
        Se = l,
        k.H = u,
        k.A = d,
        de === null && (Re = null,
        pe = 0,
        Vs()),
        g
    }
    function Bx() {
        for (; de !== null; )
            n0(de)
    }
    function kx(e, n) {
        var i = Se;
        Se |= 2;
        var l = e0()
          , u = t0();
        Re !== e || pe !== n ? (pl = null,
        ml = Ct() + 500,
        Ai(e, n)) : xi = Ii(e, n);
        e: do
            try {
                if (Ae !== 0 && de !== null) {
                    n = de;
                    var d = Lt;
                    t: switch (Ae) {
                    case 1:
                        Ae = 0,
                        Lt = null,
                        Ei(e, n, d, 1);
                        break;
                    case 2:
                    case 9:
                        if (dm(d)) {
                            Ae = 0,
                            Lt = null,
                            a0(n);
                            break
                        }
                        n = function() {
                            Ae !== 2 && Ae !== 9 || Re !== e || (Ae = 7),
                            dn(e)
                        }
                        ,
                        d.then(n, n);
                        break e;
                    case 3:
                        Ae = 7;
                        break e;
                    case 4:
                        Ae = 5;
                        break e;
                    case 7:
                        dm(d) ? (Ae = 0,
                        Lt = null,
                        a0(n)) : (Ae = 0,
                        Lt = null,
                        Ei(e, n, d, 7));
                        break;
                    case 5:
                        var g = null;
                        switch (de.tag) {
                        case 26:
                            g = de.memoizedState;
                        case 5:
                        case 27:
                            var b = de;
                            if (g ? q0(g) : b.stateNode.complete) {
                                Ae = 0,
                                Lt = null;
                                var E = b.sibling;
                                if (E !== null)
                                    de = E;
                                else {
                                    var O = b.return;
                                    O !== null ? (de = O,
                                    vl(O)) : de = null
                                }
                                break t
                            }
                        }
                        Ae = 0,
                        Lt = null,
                        Ei(e, n, d, 5);
                        break;
                    case 6:
                        Ae = 0,
                        Lt = null,
                        Ei(e, n, d, 6);
                        break;
                    case 8:
                        mc(),
                        He = 6;
                        break e;
                    default:
                        throw Error(s(462))
                    }
                }
                Zx();
                break
            } catch (B) {
                Ip(e, B)
            }
        while (!0);
        return Tn = za = null,
        k.H = l,
        k.A = u,
        Se = i,
        de !== null ? 0 : (Re = null,
        pe = 0,
        Vs(),
        He)
    }
    function Zx() {
        for (; de !== null && !u2(); )
            n0(de)
    }
    function n0(e) {
        var n = _p(e.alternate, e, Mn);
        e.memoizedProps = e.pendingProps,
        n === null ? vl(e) : de = n
    }
    function a0(e) {
        var n = e
          , i = n.alternate;
        switch (n.tag) {
        case 15:
        case 0:
            n = xp(i, n, n.pendingProps, n.type, void 0, pe);
            break;
        case 11:
            n = xp(i, n, n.pendingProps, n.type.render, n.ref, pe);
            break;
        case 5:
            Ru(n);
        default:
            Dp(i, n),
            n = de = tm(n, Mn),
            n = _p(i, n, Mn)
        }
        e.memoizedProps = e.pendingProps,
        n === null ? vl(e) : de = n
    }
    function Ei(e, n, i, l) {
        Tn = za = null,
        Ru(n),
        hi = null,
        pr = 0;
        var u = n.return;
        try {
            if (Dx(e, u, n, i, pe)) {
                He = 1,
                rl(e, qt(i, e.current)),
                de = null;
                return
            }
        } catch (d) {
            if (u !== null)
                throw de = u,
                d;
            He = 1,
            rl(e, qt(i, e.current)),
            de = null;
            return
        }
        n.flags & 32768 ? (ye || l === 1 ? e = !0 : xi || (pe & 536870912) !== 0 ? e = !1 : (Wn = e = !0,
        (l === 2 || l === 9 || l === 3 || l === 6) && (l = Nt.current,
        l !== null && l.tag === 13 && (l.flags |= 16384))),
        i0(n, e)) : vl(n)
    }
    function vl(e) {
        var n = e;
        do {
            if ((n.flags & 32768) !== 0) {
                i0(n, Wn);
                return
            }
            e = n.return;
            var i = Ox(n.alternate, n, Mn);
            if (i !== null) {
                de = i;
                return
            }
            if (n = n.sibling,
            n !== null) {
                de = n;
                return
            }
            de = n = e
        } while (n !== null);
        He === 0 && (He = 5)
    }
    function i0(e, n) {
        do {
            var i = Mx(e.alternate, e);
            if (i !== null) {
                i.flags &= 32767,
                de = i;
                return
            }
            if (i = e.return,
            i !== null && (i.flags |= 32768,
            i.subtreeFlags = 0,
            i.deletions = null),
            !n && (e = e.sibling,
            e !== null)) {
                de = e;
                return
            }
            de = e = i
        } while (e !== null);
        He = 6,
        de = null
    }
    function r0(e, n, i, l, u, d, g, b, E) {
        e.cancelPendingCommit = null;
        do
            bl();
        while (et !== 0);
        if ((Se & 6) !== 0)
            throw Error(s(327));
        if (n !== null) {
            if (n === e.current)
                throw Error(s(177));
            if (d = n.lanes | n.childLanes,
            d |= au,
            b2(e, i, d, g, b, E),
            e === Re && (de = Re = null,
            pe = 0),
            Ti = n,
            na = e,
            jn = i,
            fc = d,
            dc = u,
            Kp = l,
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null,
            e.callbackPriority = 0,
            Yx(Ss, function() {
                return c0(),
                null
            })) : (e.callbackNode = null,
            e.callbackPriority = 0),
            l = (n.flags & 13878) !== 0,
            (n.subtreeFlags & 13878) !== 0 || l) {
                l = k.T,
                k.T = null,
                u = G.p,
                G.p = 2,
                g = Se,
                Se |= 4;
                try {
                    jx(e, n, i)
                } finally {
                    Se = g,
                    G.p = u,
                    k.T = l
                }
            }
            et = 1,
            s0(),
            l0(),
            o0()
        }
    }
    function s0() {
        if (et === 1) {
            et = 0;
            var e = na
              , n = Ti
              , i = (n.flags & 13878) !== 0;
            if ((n.subtreeFlags & 13878) !== 0 || i) {
                i = k.T,
                k.T = null;
                var l = G.p;
                G.p = 2;
                var u = Se;
                Se |= 4;
                try {
                    Zp(n, e);
                    var d = zc
                      , g = $h(e.containerInfo)
                      , b = d.focusedElem
                      , E = d.selectionRange;
                    if (g !== b && b && b.ownerDocument && Gh(b.ownerDocument.documentElement, b)) {
                        if (E !== null && Io(b)) {
                            var O = E.start
                              , B = E.end;
                            if (B === void 0 && (B = O),
                            "selectionStart" in b)
                                b.selectionStart = O,
                                b.selectionEnd = Math.min(B, b.value.length);
                            else {
                                var H = b.ownerDocument || document
                                  , j = H && H.defaultView || window;
                                if (j.getSelection) {
                                    var L = j.getSelection()
                                      , J = b.textContent.length
                                      , ie = Math.min(E.start, J)
                                      , Ce = E.end === void 0 ? ie : Math.min(E.end, J);
                                    !L.extend && ie > Ce && (g = Ce,
                                    Ce = ie,
                                    ie = g);
                                    var z = Yh(b, ie)
                                      , w = Yh(b, Ce);
                                    if (z && w && (L.rangeCount !== 1 || L.anchorNode !== z.node || L.anchorOffset !== z.offset || L.focusNode !== w.node || L.focusOffset !== w.offset)) {
                                        var C = H.createRange();
                                        C.setStart(z.node, z.offset),
                                        L.removeAllRanges(),
                                        ie > Ce ? (L.addRange(C),
                                        L.extend(w.node, w.offset)) : (C.setEnd(w.node, w.offset),
                                        L.addRange(C))
                                    }
                                }
                            }
                        }
                        for (H = [],
                        L = b; L = L.parentNode; )
                            L.nodeType === 1 && H.push({
                                element: L,
                                left: L.scrollLeft,
                                top: L.scrollTop
                            });
                        for (typeof b.focus == "function" && b.focus(),
                        b = 0; b < H.length; b++) {
                            var Z = H[b];
                            Z.element.scrollLeft = Z.left,
                            Z.element.scrollTop = Z.top
                        }
                    }
                    Ol = !!_c,
                    zc = _c = null
                } finally {
                    Se = u,
                    G.p = l,
                    k.T = i
                }
            }
            e.current = n,
            et = 2
        }
    }
    function l0() {
        if (et === 2) {
            et = 0;
            var e = na
              , n = Ti
              , i = (n.flags & 8772) !== 0;
            if ((n.subtreeFlags & 8772) !== 0 || i) {
                i = k.T,
                k.T = null;
                var l = G.p;
                G.p = 2;
                var u = Se;
                Se |= 4;
                try {
                    Up(e, n.alternate, n)
                } finally {
                    Se = u,
                    G.p = l,
                    k.T = i
                }
            }
            et = 3
        }
    }
    function o0() {
        if (et === 4 || et === 3) {
            et = 0,
            c2();
            var e = na
              , n = Ti
              , i = jn
              , l = Kp;
            (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? et = 5 : (et = 0,
            Ti = na = null,
            u0(e, e.pendingLanes));
            var u = e.pendingLanes;
            if (u === 0 && (ta = null),
            jo(i),
            n = n.stateNode,
            Rt && typeof Rt.onCommitFiberRoot == "function")
                try {
                    Rt.onCommitFiberRoot(Ji, n, void 0, (n.current.flags & 128) === 128)
                } catch {}
            if (l !== null) {
                n = k.T,
                u = G.p,
                G.p = 2,
                k.T = null;
                try {
                    for (var d = e.onRecoverableError, g = 0; g < l.length; g++) {
                        var b = l[g];
                        d(b.value, {
                            componentStack: b.stack
                        })
                    }
                } finally {
                    k.T = n,
                    G.p = u
                }
            }
            (jn & 3) !== 0 && bl(),
            dn(e),
            u = e.pendingLanes,
            (i & 261930) !== 0 && (u & 42) !== 0 ? e === hc ? Mr++ : (Mr = 0,
            hc = e) : Mr = 0,
            jr(0)
        }
    }
    function u0(e, n) {
        (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache,
        n != null && (e.pooledCache = null,
        hr(n)))
    }
    function bl() {
        return s0(),
        l0(),
        o0(),
        c0()
    }
    function c0() {
        if (et !== 5)
            return !1;
        var e = na
          , n = fc;
        fc = 0;
        var i = jo(jn)
          , l = k.T
          , u = G.p;
        try {
            G.p = 32 > i ? 32 : i,
            k.T = null,
            i = dc,
            dc = null;
            var d = na
              , g = jn;
            if (et = 0,
            Ti = na = null,
            jn = 0,
            (Se & 6) !== 0)
                throw Error(s(331));
            var b = Se;
            if (Se |= 4,
            Gp(d.current),
            qp(d, d.current, g, i),
            Se = b,
            jr(0, !1),
            Rt && typeof Rt.onPostCommitFiberRoot == "function")
                try {
                    Rt.onPostCommitFiberRoot(Ji, d)
                } catch {}
            return !0
        } finally {
            G.p = u,
            k.T = l,
            u0(e, n)
        }
    }
    function f0(e, n, i) {
        n = qt(i, n),
        n = Gu(e.stateNode, n, 2),
        e = Qn(e, n, 2),
        e !== null && (Wi(e, 2),
        dn(e))
    }
    function Ee(e, n, i) {
        if (e.tag === 3)
            f0(e, e, i);
        else
            for (; n !== null; ) {
                if (n.tag === 3) {
                    f0(n, e, i);
                    break
                } else if (n.tag === 1) {
                    var l = n.stateNode;
                    if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ta === null || !ta.has(l))) {
                        e = qt(i, e),
                        i = dp(2),
                        l = Qn(n, i, 2),
                        l !== null && (hp(i, l, n, e),
                        Wi(l, 2),
                        dn(l));
                        break
                    }
                }
                n = n.return
            }
    }
    function gc(e, n, i) {
        var l = e.pingCache;
        if (l === null) {
            l = e.pingCache = new Lx;
            var u = new Set;
            l.set(n, u)
        } else
            u = l.get(n),
            u === void 0 && (u = new Set,
            l.set(n, u));
        u.has(i) || (oc = !0,
        u.add(i),
        e = Hx.bind(null, e, n, i),
        n.then(e, e))
    }
    function Hx(e, n, i) {
        var l = e.pingCache;
        l !== null && l.delete(n),
        e.pingedLanes |= e.suspendedLanes & i,
        e.warmLanes &= ~i,
        Re === e && (pe & i) === i && (He === 4 || He === 3 && (pe & 62914560) === pe && 300 > Ct() - hl ? (Se & 2) === 0 && Ai(e, 0) : uc |= i,
        Si === pe && (Si = 0)),
        dn(e)
    }
    function d0(e, n) {
        n === 0 && (n = sh()),
        e = Ea(e, n),
        e !== null && (Wi(e, n),
        dn(e))
    }
    function qx(e) {
        var n = e.memoizedState
          , i = 0;
        n !== null && (i = n.retryLane),
        d0(e, i)
    }
    function Px(e, n) {
        var i = 0;
        switch (e.tag) {
        case 31:
        case 13:
            var l = e.stateNode
              , u = e.memoizedState;
            u !== null && (i = u.retryLane);
            break;
        case 19:
            l = e.stateNode;
            break;
        case 22:
            l = e.stateNode._retryCache;
            break;
        default:
            throw Error(s(314))
        }
        l !== null && l.delete(n),
        d0(e, i)
    }
    function Yx(e, n) {
        return Co(e, n)
    }
    var xl = null
      , wi = null
      , yc = !1
      , Sl = !1
      , vc = !1
      , ia = 0;
    function dn(e) {
        e !== wi && e.next === null && (wi === null ? xl = wi = e : wi = wi.next = e),
        Sl = !0,
        yc || (yc = !0,
        $x())
    }
    function jr(e, n) {
        if (!vc && Sl) {
            vc = !0;
            do
                for (var i = !1, l = xl; l !== null; ) {
                    if (e !== 0) {
                        var u = l.pendingLanes;
                        if (u === 0)
                            var d = 0;
                        else {
                            var g = l.suspendedLanes
                              , b = l.pingedLanes;
                            d = (1 << 31 - Ot(42 | e) + 1) - 1,
                            d &= u & ~(g & ~b),
                            d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0
                        }
                        d !== 0 && (i = !0,
                        g0(l, d))
                    } else
                        d = pe,
                        d = ws(l, l === Re ? d : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
                        (d & 3) === 0 || Ii(l, d) || (i = !0,
                        g0(l, d));
                    l = l.next
                }
            while (i);
            vc = !1
        }
    }
    function Gx() {
        h0()
    }
    function h0() {
        Sl = yc = !1;
        var e = 0;
        ia !== 0 && nS() && (e = ia);
        for (var n = Ct(), i = null, l = xl; l !== null; ) {
            var u = l.next
              , d = m0(l, n);
            d === 0 ? (l.next = null,
            i === null ? xl = u : i.next = u,
            u === null && (wi = i)) : (i = l,
            (e !== 0 || (d & 3) !== 0) && (Sl = !0)),
            l = u
        }
        et !== 0 && et !== 5 || jr(e),
        ia !== 0 && (ia = 0)
    }
    function m0(e, n) {
        for (var i = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
            var g = 31 - Ot(d)
              , b = 1 << g
              , E = u[g];
            E === -1 ? ((b & i) === 0 || (b & l) !== 0) && (u[g] = v2(b, n)) : E <= n && (e.expiredLanes |= b),
            d &= ~b
        }
        if (n = Re,
        i = pe,
        i = ws(e, e === n ? i : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l = e.callbackNode,
        i === 0 || e === n && (Ae === 2 || Ae === 9) || e.cancelPendingCommit !== null)
            return l !== null && l !== null && Ro(l),
            e.callbackNode = null,
            e.callbackPriority = 0;
        if ((i & 3) === 0 || Ii(e, i)) {
            if (n = i & -i,
            n === e.callbackPriority)
                return n;
            switch (l !== null && Ro(l),
            jo(i)) {
            case 2:
            case 8:
                i = ih;
                break;
            case 32:
                i = Ss;
                break;
            case 268435456:
                i = rh;
                break;
            default:
                i = Ss
            }
            return l = p0.bind(null, e),
            i = Co(i, l),
            e.callbackPriority = n,
            e.callbackNode = i,
            n
        }
        return l !== null && l !== null && Ro(l),
        e.callbackPriority = 2,
        e.callbackNode = null,
        2
    }
    function p0(e, n) {
        if (et !== 0 && et !== 5)
            return e.callbackNode = null,
            e.callbackPriority = 0,
            null;
        var i = e.callbackNode;
        if (bl() && e.callbackNode !== i)
            return null;
        var l = pe;
        return l = ws(e, e === Re ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1),
        l === 0 ? null : (Fp(e, l, n),
        m0(e, Ct()),
        e.callbackNode != null && e.callbackNode === i ? p0.bind(null, e) : null)
    }
    function g0(e, n) {
        if (bl())
            return null;
        Fp(e, n, !0)
    }
    function $x() {
        iS(function() {
            (Se & 6) !== 0 ? Co(ah, Gx) : h0()
        })
    }
    function bc() {
        if (ia === 0) {
            var e = ci;
            e === 0 && (e = Ts,
            Ts <<= 1,
            (Ts & 261888) === 0 && (Ts = 256)),
            ia = e
        }
        return ia
    }
    function y0(e) {
        return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Cs("" + e)
    }
    function v0(e, n) {
        var i = n.ownerDocument.createElement("input");
        return i.name = n.name,
        i.value = n.value,
        e.id && i.setAttribute("form", e.id),
        n.parentNode.insertBefore(i, n),
        e = new FormData(e),
        i.parentNode.removeChild(i),
        e
    }
    function Xx(e, n, i, l, u) {
        if (n === "submit" && i && i.stateNode === u) {
            var d = y0((u[xt] || null).action)
              , g = l.submitter;
            g && (n = (n = g[xt] || null) ? y0(n.formAction) : g.getAttribute("formAction"),
            n !== null && (d = n,
            g = null));
            var b = new js("action","action",null,l,u);
            e.push({
                event: b,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (l.defaultPrevented) {
                            if (ia !== 0) {
                                var E = g ? v0(u, g) : new FormData(u);
                                ku(i, {
                                    pending: !0,
                                    data: E,
                                    method: u.method,
                                    action: d
                                }, null, E)
                            }
                        } else
                            typeof d == "function" && (b.preventDefault(),
                            E = g ? v0(u, g) : new FormData(u),
                            ku(i, {
                                pending: !0,
                                data: E,
                                method: u.method,
                                action: d
                            }, d, E))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var xc = 0; xc < nu.length; xc++) {
        var Sc = nu[xc]
          , Kx = Sc.toLowerCase()
          , Qx = Sc[0].toUpperCase() + Sc.slice(1);
        nn(Kx, "on" + Qx)
    }
    nn(Qh, "onAnimationEnd"),
    nn(Fh, "onAnimationIteration"),
    nn(Jh, "onAnimationStart"),
    nn("dblclick", "onDoubleClick"),
    nn("focusin", "onFocus"),
    nn("focusout", "onBlur"),
    nn(fx, "onTransitionRun"),
    nn(dx, "onTransitionStart"),
    nn(hx, "onTransitionCancel"),
    nn(Ih, "onTransitionEnd"),
    Fa("onMouseEnter", ["mouseout", "mouseover"]),
    Fa("onMouseLeave", ["mouseout", "mouseover"]),
    Fa("onPointerEnter", ["pointerout", "pointerover"]),
    Fa("onPointerLeave", ["pointerout", "pointerover"]),
    xa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    xa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    xa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    xa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    xa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    xa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Fx = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nr));
    function b0(e, n) {
        n = (n & 4) !== 0;
        for (var i = 0; i < e.length; i++) {
            var l = e[i]
              , u = l.event;
            l = l.listeners;
            e: {
                var d = void 0;
                if (n)
                    for (var g = l.length - 1; 0 <= g; g--) {
                        var b = l[g]
                          , E = b.instance
                          , O = b.currentTarget;
                        if (b = b.listener,
                        E !== d && u.isPropagationStopped())
                            break e;
                        d = b,
                        u.currentTarget = O;
                        try {
                            d(u)
                        } catch (B) {
                            Ls(B)
                        }
                        u.currentTarget = null,
                        d = E
                    }
                else
                    for (g = 0; g < l.length; g++) {
                        if (b = l[g],
                        E = b.instance,
                        O = b.currentTarget,
                        b = b.listener,
                        E !== d && u.isPropagationStopped())
                            break e;
                        d = b,
                        u.currentTarget = O;
                        try {
                            d(u)
                        } catch (B) {
                            Ls(B)
                        }
                        u.currentTarget = null,
                        d = E
                    }
            }
        }
    }
    function he(e, n) {
        var i = n[No];
        i === void 0 && (i = n[No] = new Set);
        var l = e + "__bubble";
        i.has(l) || (x0(n, e, 2, !1),
        i.add(l))
    }
    function Tc(e, n, i) {
        var l = 0;
        n && (l |= 4),
        x0(i, e, l, n)
    }
    var Tl = "_reactListening" + Math.random().toString(36).slice(2);
    function Ac(e) {
        if (!e[Tl]) {
            e[Tl] = !0,
            hh.forEach(function(i) {
                i !== "selectionchange" && (Fx.has(i) || Tc(i, !1, e),
                Tc(i, !0, e))
            });
            var n = e.nodeType === 9 ? e : e.ownerDocument;
            n === null || n[Tl] || (n[Tl] = !0,
            Tc("selectionchange", !1, n))
        }
    }
    function x0(e, n, i, l) {
        switch (Q0(n)) {
        case 2:
            var u = ES;
            break;
        case 8:
            u = wS;
            break;
        default:
            u = Bc
        }
        i = u.bind(null, n, i, e),
        u = void 0,
        !Po || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0),
        l ? u !== void 0 ? e.addEventListener(n, i, {
            capture: !0,
            passive: u
        }) : e.addEventListener(n, i, !0) : u !== void 0 ? e.addEventListener(n, i, {
            passive: u
        }) : e.addEventListener(n, i, !1)
    }
    function Ec(e, n, i, l, u) {
        var d = l;
        if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
            e: for (; ; ) {
                if (l === null)
                    return;
                var g = l.tag;
                if (g === 3 || g === 4) {
                    var b = l.stateNode.containerInfo;
                    if (b === u)
                        break;
                    if (g === 4)
                        for (g = l.return; g !== null; ) {
                            var E = g.tag;
                            if ((E === 3 || E === 4) && g.stateNode.containerInfo === u)
                                return;
                            g = g.return
                        }
                    for (; b !== null; ) {
                        if (g = Xa(b),
                        g === null)
                            return;
                        if (E = g.tag,
                        E === 5 || E === 6 || E === 26 || E === 27) {
                            l = d = g;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                l = l.return
            }
        wh(function() {
            var O = d
              , B = Ho(i)
              , H = [];
            e: {
                var j = Wh.get(e);
                if (j !== void 0) {
                    var L = js
                      , J = e;
                    switch (e) {
                    case "keypress":
                        if (Os(i) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        L = P2;
                        break;
                    case "focusin":
                        J = "focus",
                        L = Xo;
                        break;
                    case "focusout":
                        J = "blur",
                        L = Xo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        L = Xo;
                        break;
                    case "click":
                        if (i.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        L = Dh;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        L = O2;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        L = $2;
                        break;
                    case Qh:
                    case Fh:
                    case Jh:
                        L = N2;
                        break;
                    case Ih:
                        L = K2;
                        break;
                    case "scroll":
                    case "scrollend":
                        L = C2;
                        break;
                    case "wheel":
                        L = F2;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        L = L2;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        L = Rh;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        L = I2
                    }
                    var ie = (n & 4) !== 0
                      , Ce = !ie && (e === "scroll" || e === "scrollend")
                      , z = ie ? j !== null ? j + "Capture" : null : j;
                    ie = [];
                    for (var w = O, C; w !== null; ) {
                        var Z = w;
                        if (C = Z.stateNode,
                        Z = Z.tag,
                        Z !== 5 && Z !== 26 && Z !== 27 || C === null || z === null || (Z = nr(w, z),
                        Z != null && ie.push(Ur(w, Z, C))),
                        Ce)
                            break;
                        w = w.return
                    }
                    0 < ie.length && (j = new L(j,J,null,i,B),
                    H.push({
                        event: j,
                        listeners: ie
                    }))
                }
            }
            if ((n & 7) === 0) {
                e: {
                    if (j = e === "mouseover" || e === "pointerover",
                    L = e === "mouseout" || e === "pointerout",
                    j && i !== Zo && (J = i.relatedTarget || i.fromElement) && (Xa(J) || J[$a]))
                        break e;
                    if ((L || j) && (j = B.window === B ? B : (j = B.ownerDocument) ? j.defaultView || j.parentWindow : window,
                    L ? (J = i.relatedTarget || i.toElement,
                    L = O,
                    J = J ? Xa(J) : null,
                    J !== null && (Ce = c(J),
                    ie = J.tag,
                    J !== Ce || ie !== 5 && ie !== 27 && ie !== 6) && (J = null)) : (L = null,
                    J = O),
                    L !== J)) {
                        if (ie = Dh,
                        Z = "onMouseLeave",
                        z = "onMouseEnter",
                        w = "mouse",
                        (e === "pointerout" || e === "pointerover") && (ie = Rh,
                        Z = "onPointerLeave",
                        z = "onPointerEnter",
                        w = "pointer"),
                        Ce = L == null ? j : tr(L),
                        C = J == null ? j : tr(J),
                        j = new ie(Z,w + "leave",L,i,B),
                        j.target = Ce,
                        j.relatedTarget = C,
                        Z = null,
                        Xa(B) === O && (ie = new ie(z,w + "enter",J,i,B),
                        ie.target = C,
                        ie.relatedTarget = Ce,
                        Z = ie),
                        Ce = Z,
                        L && J)
                            t: {
                                for (ie = Jx,
                                z = L,
                                w = J,
                                C = 0,
                                Z = z; Z; Z = ie(Z))
                                    C++;
                                Z = 0;
                                for (var ne = w; ne; ne = ie(ne))
                                    Z++;
                                for (; 0 < C - Z; )
                                    z = ie(z),
                                    C--;
                                for (; 0 < Z - C; )
                                    w = ie(w),
                                    Z--;
                                for (; C--; ) {
                                    if (z === w || w !== null && z === w.alternate) {
                                        ie = z;
                                        break t
                                    }
                                    z = ie(z),
                                    w = ie(w)
                                }
                                ie = null
                            }
                        else
                            ie = null;
                        L !== null && S0(H, j, L, ie, !1),
                        J !== null && Ce !== null && S0(H, Ce, J, ie, !0)
                    }
                }
                e: {
                    if (j = O ? tr(O) : window,
                    L = j.nodeName && j.nodeName.toLowerCase(),
                    L === "select" || L === "input" && j.type === "file")
                        var be = Bh;
                    else if (Lh(j))
                        if (kh)
                            be = ox;
                        else {
                            be = sx;
                            var te = rx
                        }
                    else
                        L = j.nodeName,
                        !L || L.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? O && ko(O.elementType) && (be = Bh) : be = lx;
                    if (be && (be = be(e, O))) {
                        Vh(H, be, i, B);
                        break e
                    }
                    te && te(e, j, O),
                    e === "focusout" && O && j.type === "number" && O.memoizedProps.value != null && Bo(j, "number", j.value)
                }
                switch (te = O ? tr(O) : window,
                e) {
                case "focusin":
                    (Lh(te) || te.contentEditable === "true") && (ni = te,
                    Wo = O,
                    cr = null);
                    break;
                case "focusout":
                    cr = Wo = ni = null;
                    break;
                case "mousedown":
                    eu = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    eu = !1,
                    Xh(H, i, B);
                    break;
                case "selectionchange":
                    if (cx)
                        break;
                case "keydown":
                case "keyup":
                    Xh(H, i, B)
                }
                var ce;
                if (Qo)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ge = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ge = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ge = "onCompositionUpdate";
                            break e
                        }
                        ge = void 0
                    }
                else
                    ti ? Nh(e, i) && (ge = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ge = "onCompositionStart");
                ge && (Oh && i.locale !== "ko" && (ti || ge !== "onCompositionStart" ? ge === "onCompositionEnd" && ti && (ce = _h()) : (qn = B,
                Yo = "value" in qn ? qn.value : qn.textContent,
                ti = !0)),
                te = Al(O, ge),
                0 < te.length && (ge = new Ch(ge,e,null,i,B),
                H.push({
                    event: ge,
                    listeners: te
                }),
                ce ? ge.data = ce : (ce = Uh(i),
                ce !== null && (ge.data = ce)))),
                (ce = ex ? tx(e, i) : nx(e, i)) && (ge = Al(O, "onBeforeInput"),
                0 < ge.length && (te = new Ch("onBeforeInput","beforeinput",null,i,B),
                H.push({
                    event: te,
                    listeners: ge
                }),
                te.data = ce)),
                Xx(H, e, O, i, B)
            }
            b0(H, n)
        })
    }
    function Ur(e, n, i) {
        return {
            instance: e,
            listener: n,
            currentTarget: i
        }
    }
    function Al(e, n) {
        for (var i = n + "Capture", l = []; e !== null; ) {
            var u = e
              , d = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || d === null || (u = nr(e, i),
            u != null && l.unshift(Ur(e, u, d)),
            u = nr(e, n),
            u != null && l.push(Ur(e, u, d))),
            e.tag === 3)
                return l;
            e = e.return
        }
        return []
    }
    function Jx(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null
    }
    function S0(e, n, i, l, u) {
        for (var d = n._reactName, g = []; i !== null && i !== l; ) {
            var b = i
              , E = b.alternate
              , O = b.stateNode;
            if (b = b.tag,
            E !== null && E === l)
                break;
            b !== 5 && b !== 26 && b !== 27 || O === null || (E = O,
            u ? (O = nr(i, d),
            O != null && g.unshift(Ur(i, O, E))) : u || (O = nr(i, d),
            O != null && g.push(Ur(i, O, E)))),
            i = i.return
        }
        g.length !== 0 && e.push({
            event: n,
            listeners: g
        })
    }
    var Ix = /\r\n?/g
      , Wx = /\u0000|\uFFFD/g;
    function T0(e) {
        return (typeof e == "string" ? e : "" + e).replace(Ix, `
`).replace(Wx, "")
    }
    function A0(e, n) {
        return n = T0(n),
        T0(e) === n
    }
    function De(e, n, i, l, u, d) {
        switch (i) {
        case "children":
            typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Ia(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Ia(e, "" + l);
            break;
        case "className":
            zs(e, "class", l);
            break;
        case "tabIndex":
            zs(e, "tabindex", l);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            zs(e, i, l);
            break;
        case "style":
            Ah(e, l, d);
            break;
        case "data":
            if (n !== "object") {
                zs(e, "data", l);
                break
            }
        case "src":
        case "href":
            if (l === "" && (n !== "a" || i !== "href")) {
                e.removeAttribute(i);
                break
            }
            if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(i);
                break
            }
            l = Cs("" + l),
            e.setAttribute(i, l);
            break;
        case "action":
        case "formAction":
            if (typeof l == "function") {
                e.setAttribute(i, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof d == "function" && (i === "formAction" ? (n !== "input" && De(e, n, "name", u.name, u, null),
                De(e, n, "formEncType", u.formEncType, u, null),
                De(e, n, "formMethod", u.formMethod, u, null),
                De(e, n, "formTarget", u.formTarget, u, null)) : (De(e, n, "encType", u.encType, u, null),
                De(e, n, "method", u.method, u, null),
                De(e, n, "target", u.target, u, null)));
            if (l == null || typeof l == "symbol" || typeof l == "boolean") {
                e.removeAttribute(i);
                break
            }
            l = Cs("" + l),
            e.setAttribute(i, l);
            break;
        case "onClick":
            l != null && (e.onclick = vn);
            break;
        case "onScroll":
            l != null && he("scroll", e);
            break;
        case "onScrollEnd":
            l != null && he("scrollend", e);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(s(61));
                if (i = l.__html,
                i != null) {
                    if (u.children != null)
                        throw Error(s(60));
                    e.innerHTML = i
                }
            }
            break;
        case "multiple":
            e.multiple = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "muted":
            e.muted = l && typeof l != "function" && typeof l != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
                e.removeAttribute("xlink:href");
                break
            }
            i = Cs("" + l),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, "" + l) : e.removeAttribute(i);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, "") : e.removeAttribute(i);
            break;
        case "capture":
        case "download":
            l === !0 ? e.setAttribute(i, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(i, l) : e.removeAttribute(i);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(i, l) : e.removeAttribute(i);
            break;
        case "rowSpan":
        case "start":
            l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(i) : e.setAttribute(i, l);
            break;
        case "popover":
            he("beforetoggle", e),
            he("toggle", e),
            _s(e, "popover", l);
            break;
        case "xlinkActuate":
            yn(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
            break;
        case "xlinkArcrole":
            yn(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
            break;
        case "xlinkRole":
            yn(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
            break;
        case "xlinkShow":
            yn(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
            break;
        case "xlinkTitle":
            yn(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
            break;
        case "xlinkType":
            yn(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
            break;
        case "xmlBase":
            yn(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
            break;
        case "xmlLang":
            yn(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
            break;
        case "xmlSpace":
            yn(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
            break;
        case "is":
            _s(e, "is", l);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N") && (i = z2.get(i) || i,
            _s(e, i, l))
        }
    }
    function wc(e, n, i, l, u, d) {
        switch (i) {
        case "style":
            Ah(e, l, d);
            break;
        case "dangerouslySetInnerHTML":
            if (l != null) {
                if (typeof l != "object" || !("__html" in l))
                    throw Error(s(61));
                if (i = l.__html,
                i != null) {
                    if (u.children != null)
                        throw Error(s(60));
                    e.innerHTML = i
                }
            }
            break;
        case "children":
            typeof l == "string" ? Ia(e, l) : (typeof l == "number" || typeof l == "bigint") && Ia(e, "" + l);
            break;
        case "onScroll":
            l != null && he("scroll", e);
            break;
        case "onScrollEnd":
            l != null && he("scrollend", e);
            break;
        case "onClick":
            l != null && (e.onclick = vn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!mh.hasOwnProperty(i))
                e: {
                    if (i[0] === "o" && i[1] === "n" && (u = i.endsWith("Capture"),
                    n = i.slice(2, u ? i.length - 7 : void 0),
                    d = e[xt] || null,
                    d = d != null ? d[i] : null,
                    typeof d == "function" && e.removeEventListener(n, d, u),
                    typeof l == "function")) {
                        typeof d != "function" && d !== null && (i in e ? e[i] = null : e.hasAttribute(i) && e.removeAttribute(i)),
                        e.addEventListener(n, l, u);
                        break e
                    }
                    i in e ? e[i] = l : l === !0 ? e.setAttribute(i, "") : _s(e, i, l)
                }
        }
    }
    function ot(e, n, i) {
        switch (n) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            he("error", e),
            he("load", e);
            var l = !1, u = !1, d;
            for (d in i)
                if (i.hasOwnProperty(d)) {
                    var g = i[d];
                    if (g != null)
                        switch (d) {
                        case "src":
                            l = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, n));
                        default:
                            De(e, n, d, g, i, null)
                        }
                }
            u && De(e, n, "srcSet", i.srcSet, i, null),
            l && De(e, n, "src", i.src, i, null);
            return;
        case "input":
            he("invalid", e);
            var b = d = g = u = null
              , E = null
              , O = null;
            for (l in i)
                if (i.hasOwnProperty(l)) {
                    var B = i[l];
                    if (B != null)
                        switch (l) {
                        case "name":
                            u = B;
                            break;
                        case "type":
                            g = B;
                            break;
                        case "checked":
                            E = B;
                            break;
                        case "defaultChecked":
                            O = B;
                            break;
                        case "value":
                            d = B;
                            break;
                        case "defaultValue":
                            b = B;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (B != null)
                                throw Error(s(137, n));
                            break;
                        default:
                            De(e, n, l, B, i, null)
                        }
                }
            bh(e, d, b, E, O, g, u, !1);
            return;
        case "select":
            he("invalid", e),
            l = g = d = null;
            for (u in i)
                if (i.hasOwnProperty(u) && (b = i[u],
                b != null))
                    switch (u) {
                    case "value":
                        d = b;
                        break;
                    case "defaultValue":
                        g = b;
                        break;
                    case "multiple":
                        l = b;
                    default:
                        De(e, n, u, b, i, null)
                    }
            n = d,
            i = g,
            e.multiple = !!l,
            n != null ? Ja(e, !!l, n, !1) : i != null && Ja(e, !!l, i, !0);
            return;
        case "textarea":
            he("invalid", e),
            d = u = l = null;
            for (g in i)
                if (i.hasOwnProperty(g) && (b = i[g],
                b != null))
                    switch (g) {
                    case "value":
                        l = b;
                        break;
                    case "defaultValue":
                        u = b;
                        break;
                    case "children":
                        d = b;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(s(91));
                        break;
                    default:
                        De(e, n, g, b, i, null)
                    }
            Sh(e, l, u, d);
            return;
        case "option":
            for (E in i)
                if (i.hasOwnProperty(E) && (l = i[E],
                l != null))
                    switch (E) {
                    case "selected":
                        e.selected = l && typeof l != "function" && typeof l != "symbol";
                        break;
                    default:
                        De(e, n, E, l, i, null)
                    }
            return;
        case "dialog":
            he("beforetoggle", e),
            he("toggle", e),
            he("cancel", e),
            he("close", e);
            break;
        case "iframe":
        case "object":
            he("load", e);
            break;
        case "video":
        case "audio":
            for (l = 0; l < Nr.length; l++)
                he(Nr[l], e);
            break;
        case "image":
            he("error", e),
            he("load", e);
            break;
        case "details":
            he("toggle", e);
            break;
        case "embed":
        case "source":
        case "link":
            he("error", e),
            he("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (O in i)
                if (i.hasOwnProperty(O) && (l = i[O],
                l != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(137, n));
                    default:
                        De(e, n, O, l, i, null)
                    }
            return;
        default:
            if (ko(n)) {
                for (B in i)
                    i.hasOwnProperty(B) && (l = i[B],
                    l !== void 0 && wc(e, n, B, l, i, void 0));
                return
            }
        }
        for (b in i)
            i.hasOwnProperty(b) && (l = i[b],
            l != null && De(e, n, b, l, i, null))
    }
    function eS(e, n, i, l) {
        switch (n) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , d = null
              , g = null
              , b = null
              , E = null
              , O = null
              , B = null;
            for (L in i) {
                var H = i[L];
                if (i.hasOwnProperty(L) && H != null)
                    switch (L) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        E = H;
                    default:
                        l.hasOwnProperty(L) || De(e, n, L, null, l, H)
                    }
            }
            for (var j in l) {
                var L = l[j];
                if (H = i[j],
                l.hasOwnProperty(j) && (L != null || H != null))
                    switch (j) {
                    case "type":
                        d = L;
                        break;
                    case "name":
                        u = L;
                        break;
                    case "checked":
                        O = L;
                        break;
                    case "defaultChecked":
                        B = L;
                        break;
                    case "value":
                        g = L;
                        break;
                    case "defaultValue":
                        b = L;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (L != null)
                            throw Error(s(137, n));
                        break;
                    default:
                        L !== H && De(e, n, j, L, l, H)
                    }
            }
            Vo(e, g, b, E, O, B, d, u);
            return;
        case "select":
            L = g = b = j = null;
            for (d in i)
                if (E = i[d],
                i.hasOwnProperty(d) && E != null)
                    switch (d) {
                    case "value":
                        break;
                    case "multiple":
                        L = E;
                    default:
                        l.hasOwnProperty(d) || De(e, n, d, null, l, E)
                    }
            for (u in l)
                if (d = l[u],
                E = i[u],
                l.hasOwnProperty(u) && (d != null || E != null))
                    switch (u) {
                    case "value":
                        j = d;
                        break;
                    case "defaultValue":
                        b = d;
                        break;
                    case "multiple":
                        g = d;
                    default:
                        d !== E && De(e, n, u, d, l, E)
                    }
            n = b,
            i = g,
            l = L,
            j != null ? Ja(e, !!i, j, !1) : !!l != !!i && (n != null ? Ja(e, !!i, n, !0) : Ja(e, !!i, i ? [] : "", !1));
            return;
        case "textarea":
            L = j = null;
            for (b in i)
                if (u = i[b],
                i.hasOwnProperty(b) && u != null && !l.hasOwnProperty(b))
                    switch (b) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        De(e, n, b, null, l, u)
                    }
            for (g in l)
                if (u = l[g],
                d = i[g],
                l.hasOwnProperty(g) && (u != null || d != null))
                    switch (g) {
                    case "value":
                        j = u;
                        break;
                    case "defaultValue":
                        L = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(s(91));
                        break;
                    default:
                        u !== d && De(e, n, g, u, l, d)
                    }
            xh(e, j, L);
            return;
        case "option":
            for (var J in i)
                if (j = i[J],
                i.hasOwnProperty(J) && j != null && !l.hasOwnProperty(J))
                    switch (J) {
                    case "selected":
                        e.selected = !1;
                        break;
                    default:
                        De(e, n, J, null, l, j)
                    }
            for (E in l)
                if (j = l[E],
                L = i[E],
                l.hasOwnProperty(E) && j !== L && (j != null || L != null))
                    switch (E) {
                    case "selected":
                        e.selected = j && typeof j != "function" && typeof j != "symbol";
                        break;
                    default:
                        De(e, n, E, j, l, L)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var ie in i)
                j = i[ie],
                i.hasOwnProperty(ie) && j != null && !l.hasOwnProperty(ie) && De(e, n, ie, null, l, j);
            for (O in l)
                if (j = l[O],
                L = i[O],
                l.hasOwnProperty(O) && j !== L && (j != null || L != null))
                    switch (O) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (j != null)
                            throw Error(s(137, n));
                        break;
                    default:
                        De(e, n, O, j, l, L)
                    }
            return;
        default:
            if (ko(n)) {
                for (var Ce in i)
                    j = i[Ce],
                    i.hasOwnProperty(Ce) && j !== void 0 && !l.hasOwnProperty(Ce) && wc(e, n, Ce, void 0, l, j);
                for (B in l)
                    j = l[B],
                    L = i[B],
                    !l.hasOwnProperty(B) || j === L || j === void 0 && L === void 0 || wc(e, n, B, j, l, L);
                return
            }
        }
        for (var z in i)
            j = i[z],
            i.hasOwnProperty(z) && j != null && !l.hasOwnProperty(z) && De(e, n, z, null, l, j);
        for (H in l)
            j = l[H],
            L = i[H],
            !l.hasOwnProperty(H) || j === L || j == null && L == null || De(e, n, H, j, l, L)
    }
    function E0(e) {
        switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function tS() {
        if (typeof performance.getEntriesByType == "function") {
            for (var e = 0, n = 0, i = performance.getEntriesByType("resource"), l = 0; l < i.length; l++) {
                var u = i[l]
                  , d = u.transferSize
                  , g = u.initiatorType
                  , b = u.duration;
                if (d && b && E0(g)) {
                    for (g = 0,
                    b = u.responseEnd,
                    l += 1; l < i.length; l++) {
                        var E = i[l]
                          , O = E.startTime;
                        if (O > b)
                            break;
                        var B = E.transferSize
                          , H = E.initiatorType;
                        B && E0(H) && (E = E.responseEnd,
                        g += B * (E < b ? 1 : (b - O) / (E - O)))
                    }
                    if (--l,
                    n += 8 * (d + g) / (u.duration / 1e3),
                    e++,
                    10 < e)
                        break
                }
            }
            if (0 < e)
                return n / e / 1e6
        }
        return navigator.connection && (e = navigator.connection.downlink,
        typeof e == "number") ? e : 5
    }
    var _c = null
      , zc = null;
    function El(e) {
        return e.nodeType === 9 ? e : e.ownerDocument
    }
    function w0(e) {
        switch (e) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function _0(e, n) {
        if (e === 0)
            switch (n) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return e === 1 && n === "foreignObject" ? 0 : e
    }
    function Dc(e, n) {
        return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
    }
    var Cc = null;
    function nS() {
        var e = window.event;
        return e && e.type === "popstate" ? e === Cc ? !1 : (Cc = e,
        !0) : (Cc = null,
        !1)
    }
    var z0 = typeof setTimeout == "function" ? setTimeout : void 0
      , aS = typeof clearTimeout == "function" ? clearTimeout : void 0
      , D0 = typeof Promise == "function" ? Promise : void 0
      , iS = typeof queueMicrotask == "function" ? queueMicrotask : typeof D0 < "u" ? function(e) {
        return D0.resolve(null).then(e).catch(rS)
    }
    : z0;
    function rS(e) {
        setTimeout(function() {
            throw e
        })
    }
    function ra(e) {
        return e === "head"
    }
    function C0(e, n) {
        var i = n
          , l = 0;
        do {
            var u = i.nextSibling;
            if (e.removeChild(i),
            u && u.nodeType === 8)
                if (i = u.data,
                i === "/$" || i === "/&") {
                    if (l === 0) {
                        e.removeChild(u),
                        Ci(n);
                        return
                    }
                    l--
                } else if (i === "$" || i === "$?" || i === "$~" || i === "$!" || i === "&")
                    l++;
                else if (i === "html")
                    Lr(e.ownerDocument.documentElement);
                else if (i === "head") {
                    i = e.ownerDocument.head,
                    Lr(i);
                    for (var d = i.firstChild; d; ) {
                        var g = d.nextSibling
                          , b = d.nodeName;
                        d[er] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && d.rel.toLowerCase() === "stylesheet" || i.removeChild(d),
                        d = g
                    }
                } else
                    i === "body" && Lr(e.ownerDocument.body);
            i = u
        } while (i);
        Ci(n)
    }
    function R0(e, n) {
        var i = e;
        e = 0;
        do {
            var l = i.nextSibling;
            if (i.nodeType === 1 ? n ? (i._stashedDisplay = i.style.display,
            i.style.display = "none") : (i.style.display = i._stashedDisplay || "",
            i.getAttribute("style") === "" && i.removeAttribute("style")) : i.nodeType === 3 && (n ? (i._stashedText = i.nodeValue,
            i.nodeValue = "") : i.nodeValue = i._stashedText || ""),
            l && l.nodeType === 8)
                if (i = l.data,
                i === "/$") {
                    if (e === 0)
                        break;
                    e--
                } else
                    i !== "$" && i !== "$?" && i !== "$~" && i !== "$!" || e++;
            i = l
        } while (i)
    }
    function Rc(e) {
        var n = e.firstChild;
        for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
            var i = n;
            switch (n = n.nextSibling,
            i.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Rc(i),
                Uo(i);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (i.rel.toLowerCase() === "stylesheet")
                    continue
            }
            e.removeChild(i)
        }
    }
    function sS(e, n, i, l) {
        for (; e.nodeType === 1; ) {
            var u = i;
            if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
                if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                    break
            } else if (l) {
                if (!e[er])
                    switch (n) {
                    case "meta":
                        if (!e.hasAttribute("itemprop"))
                            break;
                        return e;
                    case "link":
                        if (d = e.getAttribute("rel"),
                        d === "stylesheet" && e.hasAttribute("data-precedence"))
                            break;
                        if (d !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return e;
                    case "style":
                        if (e.hasAttribute("data-precedence"))
                            break;
                        return e;
                    case "script":
                        if (d = e.getAttribute("src"),
                        (d !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                            break;
                        return e;
                    default:
                        return e
                    }
            } else if (n === "input" && e.type === "hidden") {
                var d = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && e.getAttribute("name") === d)
                    return e
            } else
                return e;
            if (e = Xt(e.nextSibling),
            e === null)
                break
        }
        return null
    }
    function lS(e, n, i) {
        if (n === "")
            return null;
        for (; e.nodeType !== 3; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !i || (e = Xt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function O0(e, n) {
        for (; e.nodeType !== 8; )
            if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Xt(e.nextSibling),
            e === null))
                return null;
        return e
    }
    function Oc(e) {
        return e.data === "$?" || e.data === "$~"
    }
    function Mc(e) {
        return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading"
    }
    function oS(e, n) {
        var i = e.ownerDocument;
        if (e.data === "$~")
            e._reactRetry = n;
        else if (e.data !== "$?" || i.readyState !== "loading")
            n();
        else {
            var l = function() {
                n(),
                i.removeEventListener("DOMContentLoaded", l)
            };
            i.addEventListener("DOMContentLoaded", l),
            e._reactRetry = l
        }
    }
    function Xt(e) {
        for (; e != null; e = e.nextSibling) {
            var n = e.nodeType;
            if (n === 1 || n === 3)
                break;
            if (n === 8) {
                if (n = e.data,
                n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
                    break;
                if (n === "/$" || n === "/&")
                    return null
            }
        }
        return e
    }
    var jc = null;
    function M0(e) {
        e = e.nextSibling;
        for (var n = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "/$" || i === "/&") {
                    if (n === 0)
                        return Xt(e.nextSibling);
                    n--
                } else
                    i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&" || n++
            }
            e = e.nextSibling
        }
        return null
    }
    function j0(e) {
        e = e.previousSibling;
        for (var n = 0; e; ) {
            if (e.nodeType === 8) {
                var i = e.data;
                if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
                    if (n === 0)
                        return e;
                    n--
                } else
                    i !== "/$" && i !== "/&" || n++
            }
            e = e.previousSibling
        }
        return null
    }
    function N0(e, n, i) {
        switch (n = El(i),
        e) {
        case "html":
            if (e = n.documentElement,
            !e)
                throw Error(s(452));
            return e;
        case "head":
            if (e = n.head,
            !e)
                throw Error(s(453));
            return e;
        case "body":
            if (e = n.body,
            !e)
                throw Error(s(454));
            return e;
        default:
            throw Error(s(451))
        }
    }
    function Lr(e) {
        for (var n = e.attributes; n.length; )
            e.removeAttributeNode(n[0]);
        Uo(e)
    }
    var Kt = new Map
      , U0 = new Set;
    function wl(e) {
        return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument
    }
    var Nn = G.d;
    G.d = {
        f: uS,
        r: cS,
        D: fS,
        C: dS,
        L: hS,
        m: mS,
        X: gS,
        S: pS,
        M: yS
    };
    function uS() {
        var e = Nn.f()
          , n = gl();
        return e || n
    }
    function cS(e) {
        var n = Ka(e);
        n !== null && n.tag === 5 && n.type === "form" ? Im(n) : Nn.r(e)
    }
    var _i = typeof document > "u" ? null : document;
    function L0(e, n, i) {
        var l = _i;
        if (l && typeof n == "string" && n) {
            var u = Zt(n);
            u = 'link[rel="' + e + '"][href="' + u + '"]',
            typeof i == "string" && (u += '[crossorigin="' + i + '"]'),
            U0.has(u) || (U0.add(u),
            e = {
                rel: e,
                crossOrigin: i,
                href: n
            },
            l.querySelector(u) === null && (n = l.createElement("link"),
            ot(n, "link", e),
            nt(n),
            l.head.appendChild(n)))
        }
    }
    function fS(e) {
        Nn.D(e),
        L0("dns-prefetch", e, null)
    }
    function dS(e, n) {
        Nn.C(e, n),
        L0("preconnect", e, n)
    }
    function hS(e, n, i) {
        Nn.L(e, n, i);
        var l = _i;
        if (l && e && n) {
            var u = 'link[rel="preload"][as="' + Zt(n) + '"]';
            n === "image" && i && i.imageSrcSet ? (u += '[imagesrcset="' + Zt(i.imageSrcSet) + '"]',
            typeof i.imageSizes == "string" && (u += '[imagesizes="' + Zt(i.imageSizes) + '"]')) : u += '[href="' + Zt(e) + '"]';
            var d = u;
            switch (n) {
            case "style":
                d = zi(e);
                break;
            case "script":
                d = Di(e)
            }
            Kt.has(d) || (e = v({
                rel: "preload",
                href: n === "image" && i && i.imageSrcSet ? void 0 : e,
                as: n
            }, i),
            Kt.set(d, e),
            l.querySelector(u) !== null || n === "style" && l.querySelector(Vr(d)) || n === "script" && l.querySelector(Br(d)) || (n = l.createElement("link"),
            ot(n, "link", e),
            nt(n),
            l.head.appendChild(n)))
        }
    }
    function mS(e, n) {
        Nn.m(e, n);
        var i = _i;
        if (i && e) {
            var l = n && typeof n.as == "string" ? n.as : "script"
              , u = 'link[rel="modulepreload"][as="' + Zt(l) + '"][href="' + Zt(e) + '"]'
              , d = u;
            switch (l) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                d = Di(e)
            }
            if (!Kt.has(d) && (e = v({
                rel: "modulepreload",
                href: e
            }, n),
            Kt.set(d, e),
            i.querySelector(u) === null)) {
                switch (l) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (i.querySelector(Br(d)))
                        return
                }
                l = i.createElement("link"),
                ot(l, "link", e),
                nt(l),
                i.head.appendChild(l)
            }
        }
    }
    function pS(e, n, i) {
        Nn.S(e, n, i);
        var l = _i;
        if (l && e) {
            var u = Qa(l).hoistableStyles
              , d = zi(e);
            n = n || "default";
            var g = u.get(d);
            if (!g) {
                var b = {
                    loading: 0,
                    preload: null
                };
                if (g = l.querySelector(Vr(d)))
                    b.loading = 5;
                else {
                    e = v({
                        rel: "stylesheet",
                        href: e,
                        "data-precedence": n
                    }, i),
                    (i = Kt.get(d)) && Nc(e, i);
                    var E = g = l.createElement("link");
                    nt(E),
                    ot(E, "link", e),
                    E._p = new Promise(function(O, B) {
                        E.onload = O,
                        E.onerror = B
                    }
                    ),
                    E.addEventListener("load", function() {
                        b.loading |= 1
                    }),
                    E.addEventListener("error", function() {
                        b.loading |= 2
                    }),
                    b.loading |= 4,
                    _l(g, n, l)
                }
                g = {
                    type: "stylesheet",
                    instance: g,
                    count: 1,
                    state: b
                },
                u.set(d, g)
            }
        }
    }
    function gS(e, n) {
        Nn.X(e, n);
        var i = _i;
        if (i && e) {
            var l = Qa(i).hoistableScripts
              , u = Di(e)
              , d = l.get(u);
            d || (d = i.querySelector(Br(u)),
            d || (e = v({
                src: e,
                async: !0
            }, n),
            (n = Kt.get(u)) && Uc(e, n),
            d = i.createElement("script"),
            nt(d),
            ot(d, "link", e),
            i.head.appendChild(d)),
            d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            },
            l.set(u, d))
        }
    }
    function yS(e, n) {
        Nn.M(e, n);
        var i = _i;
        if (i && e) {
            var l = Qa(i).hoistableScripts
              , u = Di(e)
              , d = l.get(u);
            d || (d = i.querySelector(Br(u)),
            d || (e = v({
                src: e,
                async: !0,
                type: "module"
            }, n),
            (n = Kt.get(u)) && Uc(e, n),
            d = i.createElement("script"),
            nt(d),
            ot(d, "link", e),
            i.head.appendChild(d)),
            d = {
                type: "script",
                instance: d,
                count: 1,
                state: null
            },
            l.set(u, d))
        }
    }
    function V0(e, n, i, l) {
        var u = (u = fe.current) ? wl(u) : null;
        if (!u)
            throw Error(s(446));
        switch (e) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof i.precedence == "string" && typeof i.href == "string" ? (n = zi(i.href),
            i = Qa(u).hoistableStyles,
            l = i.get(n),
            l || (l = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            i.set(n, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (i.rel === "stylesheet" && typeof i.href == "string" && typeof i.precedence == "string") {
                e = zi(i.href);
                var d = Qa(u).hoistableStyles
                  , g = d.get(e);
                if (g || (u = u.ownerDocument || u,
                g = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                d.set(e, g),
                (d = u.querySelector(Vr(e))) && !d._p && (g.instance = d,
                g.state.loading = 5),
                Kt.has(e) || (i = {
                    rel: "preload",
                    as: "style",
                    href: i.href,
                    crossOrigin: i.crossOrigin,
                    integrity: i.integrity,
                    media: i.media,
                    hrefLang: i.hrefLang,
                    referrerPolicy: i.referrerPolicy
                },
                Kt.set(e, i),
                d || vS(u, e, i, g.state))),
                n && l === null)
                    throw Error(s(528, ""));
                return g
            }
            if (n && l !== null)
                throw Error(s(529, ""));
            return null;
        case "script":
            return n = i.async,
            i = i.src,
            typeof i == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Di(i),
            i = Qa(u).hoistableScripts,
            l = i.get(n),
            l || (l = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            i.set(n, l)),
            l) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(s(444, e))
        }
    }
    function zi(e) {
        return 'href="' + Zt(e) + '"'
    }
    function Vr(e) {
        return 'link[rel="stylesheet"][' + e + "]"
    }
    function B0(e) {
        return v({}, e, {
            "data-precedence": e.precedence,
            precedence: null
        })
    }
    function vS(e, n, i, l) {
        e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"),
        l.preload = n,
        n.addEventListener("load", function() {
            return l.loading |= 1
        }),
        n.addEventListener("error", function() {
            return l.loading |= 2
        }),
        ot(n, "link", i),
        nt(n),
        e.head.appendChild(n))
    }
    function Di(e) {
        return '[src="' + Zt(e) + '"]'
    }
    function Br(e) {
        return "script[async]" + e
    }
    function k0(e, n, i) {
        if (n.count++,
        n.instance === null)
            switch (n.type) {
            case "style":
                var l = e.querySelector('style[data-href~="' + Zt(i.href) + '"]');
                if (l)
                    return n.instance = l,
                    nt(l),
                    l;
                var u = v({}, i, {
                    "data-href": i.href,
                    "data-precedence": i.precedence,
                    href: null,
                    precedence: null
                });
                return l = (e.ownerDocument || e).createElement("style"),
                nt(l),
                ot(l, "style", u),
                _l(l, i.precedence, e),
                n.instance = l;
            case "stylesheet":
                u = zi(i.href);
                var d = e.querySelector(Vr(u));
                if (d)
                    return n.state.loading |= 4,
                    n.instance = d,
                    nt(d),
                    d;
                l = B0(i),
                (u = Kt.get(u)) && Nc(l, u),
                d = (e.ownerDocument || e).createElement("link"),
                nt(d);
                var g = d;
                return g._p = new Promise(function(b, E) {
                    g.onload = b,
                    g.onerror = E
                }
                ),
                ot(d, "link", l),
                n.state.loading |= 4,
                _l(d, i.precedence, e),
                n.instance = d;
            case "script":
                return d = Di(i.src),
                (u = e.querySelector(Br(d))) ? (n.instance = u,
                nt(u),
                u) : (l = i,
                (u = Kt.get(d)) && (l = v({}, i),
                Uc(l, u)),
                e = e.ownerDocument || e,
                u = e.createElement("script"),
                nt(u),
                ot(u, "link", l),
                e.head.appendChild(u),
                n.instance = u);
            case "void":
                return null;
            default:
                throw Error(s(443, n.type))
            }
        else
            n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance,
            n.state.loading |= 4,
            _l(l, i.precedence, e));
        return n.instance
    }
    function _l(e, n, i) {
        for (var l = i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = l.length ? l[l.length - 1] : null, d = u, g = 0; g < l.length; g++) {
            var b = l[g];
            if (b.dataset.precedence === n)
                d = b;
            else if (d !== u)
                break
        }
        d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = i.nodeType === 9 ? i.head : i,
        n.insertBefore(e, n.firstChild))
    }
    function Nc(e, n) {
        e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
        e.title == null && (e.title = n.title)
    }
    function Uc(e, n) {
        e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
        e.integrity == null && (e.integrity = n.integrity)
    }
    var zl = null;
    function Z0(e, n, i) {
        if (zl === null) {
            var l = new Map
              , u = zl = new Map;
            u.set(i, l)
        } else
            u = zl,
            l = u.get(i),
            l || (l = new Map,
            u.set(i, l));
        if (l.has(e))
            return l;
        for (l.set(e, null),
        i = i.getElementsByTagName(e),
        u = 0; u < i.length; u++) {
            var d = i[u];
            if (!(d[er] || d[it] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
                var g = d.getAttribute(n) || "";
                g = e + g;
                var b = l.get(g);
                b ? b.push(d) : l.set(g, [d])
            }
        }
        return l
    }
    function H0(e, n, i) {
        e = e.ownerDocument || e,
        e.head.insertBefore(i, n === "title" ? e.querySelector("head > title") : null)
    }
    function bS(e, n, i) {
        if (i === 1 || n.itemProp != null)
            return !1;
        switch (e) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
                break;
            return !0;
        case "link":
            if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
                break;
            switch (n.rel) {
            case "stylesheet":
                return e = n.disabled,
                typeof n.precedence == "string" && e == null;
            default:
                return !0
            }
        case "script":
            if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
                return !0
        }
        return !1
    }
    function q0(e) {
        return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
    }
    function xS(e, n, i, l) {
        if (i.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (i.state.loading & 4) === 0) {
            if (i.instance === null) {
                var u = zi(l.href)
                  , d = n.querySelector(Vr(u));
                if (d) {
                    n = d._p,
                    n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++,
                    e = Dl.bind(e),
                    n.then(e, e)),
                    i.state.loading |= 4,
                    i.instance = d,
                    nt(d);
                    return
                }
                d = n.ownerDocument || n,
                l = B0(l),
                (u = Kt.get(u)) && Nc(l, u),
                d = d.createElement("link"),
                nt(d);
                var g = d;
                g._p = new Promise(function(b, E) {
                    g.onload = b,
                    g.onerror = E
                }
                ),
                ot(d, "link", l),
                i.instance = d
            }
            e.stylesheets === null && (e.stylesheets = new Map),
            e.stylesheets.set(i, n),
            (n = i.state.preload) && (i.state.loading & 3) === 0 && (e.count++,
            i = Dl.bind(e),
            n.addEventListener("load", i),
            n.addEventListener("error", i))
        }
    }
    var Lc = 0;
    function SS(e, n) {
        return e.stylesheets && e.count === 0 && Rl(e, e.stylesheets),
        0 < e.count || 0 < e.imgCount ? function(i) {
            var l = setTimeout(function() {
                if (e.stylesheets && Rl(e, e.stylesheets),
                e.unsuspend) {
                    var d = e.unsuspend;
                    e.unsuspend = null,
                    d()
                }
            }, 6e4 + n);
            0 < e.imgBytes && Lc === 0 && (Lc = 62500 * tS());
            var u = setTimeout(function() {
                if (e.waitingForImages = !1,
                e.count === 0 && (e.stylesheets && Rl(e, e.stylesheets),
                e.unsuspend)) {
                    var d = e.unsuspend;
                    e.unsuspend = null,
                    d()
                }
            }, (e.imgBytes > Lc ? 50 : 800) + n);
            return e.unsuspend = i,
            function() {
                e.unsuspend = null,
                clearTimeout(l),
                clearTimeout(u)
            }
        }
        : null
    }
    function Dl() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Rl(this, this.stylesheets);
            else if (this.unsuspend) {
                var e = this.unsuspend;
                this.unsuspend = null,
                e()
            }
        }
    }
    var Cl = null;
    function Rl(e, n) {
        e.stylesheets = null,
        e.unsuspend !== null && (e.count++,
        Cl = new Map,
        n.forEach(TS, e),
        Cl = null,
        Dl.call(e))
    }
    function TS(e, n) {
        if (!(n.state.loading & 4)) {
            var i = Cl.get(e);
            if (i)
                var l = i.get(null);
            else {
                i = new Map,
                Cl.set(e, i);
                for (var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), d = 0; d < u.length; d++) {
                    var g = u[d];
                    (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (i.set(g.dataset.precedence, g),
                    l = g)
                }
                l && i.set(null, l)
            }
            u = n.instance,
            g = u.getAttribute("data-precedence"),
            d = i.get(g) || l,
            d === l && i.set(null, u),
            i.set(g, u),
            this.count++,
            l = Dl.bind(this),
            u.addEventListener("load", l),
            u.addEventListener("error", l),
            d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
            e.insertBefore(u, e.firstChild)),
            n.state.loading |= 4
        }
    }
    var kr = {
        $$typeof: U,
        Provider: null,
        Consumer: null,
        _currentValue: ee,
        _currentValue2: ee,
        _threadCount: 0
    };
    function AS(e, n, i, l, u, d, g, b, E) {
        this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = Oo(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = Oo(0),
        this.hiddenUpdates = Oo(null),
        this.identifierPrefix = l,
        this.onUncaughtError = u,
        this.onCaughtError = d,
        this.onRecoverableError = g,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = E,
        this.incompleteTransitions = new Map
    }
    function P0(e, n, i, l, u, d, g, b, E, O, B, H) {
        return e = new AS(e,n,i,g,E,O,B,H,b),
        n = 1,
        d === !0 && (n |= 24),
        d = jt(3, null, null, n),
        e.current = d,
        d.stateNode = e,
        n = pu(),
        n.refCount++,
        e.pooledCache = n,
        n.refCount++,
        d.memoizedState = {
            element: l,
            isDehydrated: i,
            cache: n
        },
        bu(d),
        e
    }
    function Y0(e) {
        return e ? (e = ri,
        e) : ri
    }
    function G0(e, n, i, l, u, d) {
        u = Y0(u),
        l.context === null ? l.context = u : l.pendingContext = u,
        l = Kn(n),
        l.payload = {
            element: i
        },
        d = d === void 0 ? null : d,
        d !== null && (l.callback = d),
        i = Qn(e, l, n),
        i !== null && (_t(i, e, n),
        yr(i, e, n))
    }
    function $0(e, n) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var i = e.retryLane;
            e.retryLane = i !== 0 && i < n ? i : n
        }
    }
    function Vc(e, n) {
        $0(e, n),
        (e = e.alternate) && $0(e, n)
    }
    function X0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var n = Ea(e, 67108864);
            n !== null && _t(n, e, 67108864),
            Vc(e, 67108864)
        }
    }
    function K0(e) {
        if (e.tag === 13 || e.tag === 31) {
            var n = Bt();
            n = Mo(n);
            var i = Ea(e, n);
            i !== null && _t(i, e, n),
            Vc(e, n)
        }
    }
    var Ol = !0;
    function ES(e, n, i, l) {
        var u = k.T;
        k.T = null;
        var d = G.p;
        try {
            G.p = 2,
            Bc(e, n, i, l)
        } finally {
            G.p = d,
            k.T = u
        }
    }
    function wS(e, n, i, l) {
        var u = k.T;
        k.T = null;
        var d = G.p;
        try {
            G.p = 8,
            Bc(e, n, i, l)
        } finally {
            G.p = d,
            k.T = u
        }
    }
    function Bc(e, n, i, l) {
        if (Ol) {
            var u = kc(l);
            if (u === null)
                Ec(e, n, l, Ml, i),
                F0(e, l);
            else if (zS(u, e, n, i, l))
                l.stopPropagation();
            else if (F0(e, l),
            n & 4 && -1 < _S.indexOf(e)) {
                for (; u !== null; ) {
                    var d = Ka(u);
                    if (d !== null)
                        switch (d.tag) {
                        case 3:
                            if (d = d.stateNode,
                            d.current.memoizedState.isDehydrated) {
                                var g = ba(d.pendingLanes);
                                if (g !== 0) {
                                    var b = d;
                                    for (b.pendingLanes |= 2,
                                    b.entangledLanes |= 2; g; ) {
                                        var E = 1 << 31 - Ot(g);
                                        b.entanglements[1] |= E,
                                        g &= ~E
                                    }
                                    dn(d),
                                    (Se & 6) === 0 && (ml = Ct() + 500,
                                    jr(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            b = Ea(d, 2),
                            b !== null && _t(b, d, 2),
                            gl(),
                            Vc(d, 2)
                        }
                    if (d = kc(l),
                    d === null && Ec(e, n, l, Ml, i),
                    d === u)
                        break;
                    u = d
                }
                u !== null && l.stopPropagation()
            } else
                Ec(e, n, l, null, i)
        }
    }
    function kc(e) {
        return e = Ho(e),
        Zc(e)
    }
    var Ml = null;
    function Zc(e) {
        if (Ml = null,
        e = Xa(e),
        e !== null) {
            var n = c(e);
            if (n === null)
                e = null;
            else {
                var i = n.tag;
                if (i === 13) {
                    if (e = f(n),
                    e !== null)
                        return e;
                    e = null
                } else if (i === 31) {
                    if (e = h(n),
                    e !== null)
                        return e;
                    e = null
                } else if (i === 3) {
                    if (n.stateNode.current.memoizedState.isDehydrated)
                        return n.tag === 3 ? n.stateNode.containerInfo : null;
                    e = null
                } else
                    n !== e && (e = null)
            }
        }
        return Ml = e,
        null
    }
    function Q0(e) {
        switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (f2()) {
            case ah:
                return 2;
            case ih:
                return 8;
            case Ss:
            case d2:
                return 32;
            case rh:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Hc = !1
      , sa = null
      , la = null
      , oa = null
      , Zr = new Map
      , Hr = new Map
      , ua = []
      , _S = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function F0(e, n) {
        switch (e) {
        case "focusin":
        case "focusout":
            sa = null;
            break;
        case "dragenter":
        case "dragleave":
            la = null;
            break;
        case "mouseover":
        case "mouseout":
            oa = null;
            break;
        case "pointerover":
        case "pointerout":
            Zr.delete(n.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Hr.delete(n.pointerId)
        }
    }
    function qr(e, n, i, l, u, d) {
        return e === null || e.nativeEvent !== d ? (e = {
            blockedOn: n,
            domEventName: i,
            eventSystemFlags: l,
            nativeEvent: d,
            targetContainers: [u]
        },
        n !== null && (n = Ka(n),
        n !== null && X0(n)),
        e) : (e.eventSystemFlags |= l,
        n = e.targetContainers,
        u !== null && n.indexOf(u) === -1 && n.push(u),
        e)
    }
    function zS(e, n, i, l, u) {
        switch (n) {
        case "focusin":
            return sa = qr(sa, e, n, i, l, u),
            !0;
        case "dragenter":
            return la = qr(la, e, n, i, l, u),
            !0;
        case "mouseover":
            return oa = qr(oa, e, n, i, l, u),
            !0;
        case "pointerover":
            var d = u.pointerId;
            return Zr.set(d, qr(Zr.get(d) || null, e, n, i, l, u)),
            !0;
        case "gotpointercapture":
            return d = u.pointerId,
            Hr.set(d, qr(Hr.get(d) || null, e, n, i, l, u)),
            !0
        }
        return !1
    }
    function J0(e) {
        var n = Xa(e.target);
        if (n !== null) {
            var i = c(n);
            if (i !== null) {
                if (n = i.tag,
                n === 13) {
                    if (n = f(i),
                    n !== null) {
                        e.blockedOn = n,
                        fh(e.priority, function() {
                            K0(i)
                        });
                        return
                    }
                } else if (n === 31) {
                    if (n = h(i),
                    n !== null) {
                        e.blockedOn = n,
                        fh(e.priority, function() {
                            K0(i)
                        });
                        return
                    }
                } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function jl(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var n = e.targetContainers; 0 < n.length; ) {
            var i = kc(e.nativeEvent);
            if (i === null) {
                i = e.nativeEvent;
                var l = new i.constructor(i.type,i);
                Zo = l,
                i.target.dispatchEvent(l),
                Zo = null
            } else
                return n = Ka(i),
                n !== null && X0(n),
                e.blockedOn = i,
                !1;
            n.shift()
        }
        return !0
    }
    function I0(e, n, i) {
        jl(e) && i.delete(n)
    }
    function DS() {
        Hc = !1,
        sa !== null && jl(sa) && (sa = null),
        la !== null && jl(la) && (la = null),
        oa !== null && jl(oa) && (oa = null),
        Zr.forEach(I0),
        Hr.forEach(I0)
    }
    function Nl(e, n) {
        e.blockedOn === n && (e.blockedOn = null,
        Hc || (Hc = !0,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, DS)))
    }
    var Ul = null;
    function W0(e) {
        Ul !== e && (Ul = e,
        t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
            Ul === e && (Ul = null);
            for (var n = 0; n < e.length; n += 3) {
                var i = e[n]
                  , l = e[n + 1]
                  , u = e[n + 2];
                if (typeof l != "function") {
                    if (Zc(l || i) === null)
                        continue;
                    break
                }
                var d = Ka(i);
                d !== null && (e.splice(n, 3),
                n -= 3,
                ku(d, {
                    pending: !0,
                    data: u,
                    method: i.method,
                    action: l
                }, l, u))
            }
        }))
    }
    function Ci(e) {
        function n(E) {
            return Nl(E, e)
        }
        sa !== null && Nl(sa, e),
        la !== null && Nl(la, e),
        oa !== null && Nl(oa, e),
        Zr.forEach(n),
        Hr.forEach(n);
        for (var i = 0; i < ua.length; i++) {
            var l = ua[i];
            l.blockedOn === e && (l.blockedOn = null)
        }
        for (; 0 < ua.length && (i = ua[0],
        i.blockedOn === null); )
            J0(i),
            i.blockedOn === null && ua.shift();
        if (i = (e.ownerDocument || e).$$reactFormReplay,
        i != null)
            for (l = 0; l < i.length; l += 3) {
                var u = i[l]
                  , d = i[l + 1]
                  , g = u[xt] || null;
                if (typeof d == "function")
                    g || W0(i);
                else if (g) {
                    var b = null;
                    if (d && d.hasAttribute("formAction")) {
                        if (u = d,
                        g = d[xt] || null)
                            b = g.formAction;
                        else if (Zc(u) !== null)
                            continue
                    } else
                        b = g.action;
                    typeof b == "function" ? i[l + 1] = b : (i.splice(l, 3),
                    l -= 3),
                    W0(i)
                }
            }
    }
    function eg() {
        function e(d) {
            d.canIntercept && d.info === "react-transition" && d.intercept({
                handler: function() {
                    return new Promise(function(g) {
                        return u = g
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function n() {
            u !== null && (u(),
            u = null),
            l || setTimeout(i, 20)
        }
        function i() {
            if (!l && !navigation.transition) {
                var d = navigation.currentEntry;
                d && d.url != null && navigation.navigate(d.url, {
                    state: d.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var l = !1
              , u = null;
            return navigation.addEventListener("navigate", e),
            navigation.addEventListener("navigatesuccess", n),
            navigation.addEventListener("navigateerror", n),
            setTimeout(i, 100),
            function() {
                l = !0,
                navigation.removeEventListener("navigate", e),
                navigation.removeEventListener("navigatesuccess", n),
                navigation.removeEventListener("navigateerror", n),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function qc(e) {
        this._internalRoot = e
    }
    Ll.prototype.render = qc.prototype.render = function(e) {
        var n = this._internalRoot;
        if (n === null)
            throw Error(s(409));
        var i = n.current
          , l = Bt();
        G0(i, l, e, n, null, null)
    }
    ,
    Ll.prototype.unmount = qc.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var n = e.containerInfo;
            G0(e.current, 2, null, e, null, null),
            gl(),
            n[$a] = null
        }
    }
    ;
    function Ll(e) {
        this._internalRoot = e
    }
    Ll.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var n = ch();
            e = {
                blockedOn: null,
                target: e,
                priority: n
            };
            for (var i = 0; i < ua.length && n !== 0 && n < ua[i].priority; i++)
                ;
            ua.splice(i, 0, e),
            i === 0 && J0(e)
        }
    }
    ;
    var tg = a.version;
    if (tg !== "19.2.0")
        throw Error(s(527, tg, "19.2.0"));
    G.findDOMNode = function(e) {
        var n = e._reactInternals;
        if (n === void 0)
            throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","),
            Error(s(268, e)));
        return e = m(n),
        e = e !== null ? y(e) : null,
        e = e === null ? null : e.stateNode,
        e
    }
    ;
    var CS = {
        bundleType: 0,
        version: "19.2.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: k,
        reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Vl.isDisabled && Vl.supportsFiber)
            try {
                Ji = Vl.inject(CS),
                Rt = Vl
            } catch {}
    }
    return Yr.createRoot = function(e, n) {
        if (!o(e))
            throw Error(s(299));
        var i = !1
          , l = ""
          , u = op
          , d = up
          , g = cp;
        return n != null && (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
        n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
        n.onCaughtError !== void 0 && (d = n.onCaughtError),
        n.onRecoverableError !== void 0 && (g = n.onRecoverableError)),
        n = P0(e, 1, !1, null, null, i, l, null, u, d, g, eg),
        e[$a] = n.current,
        Ac(e),
        new qc(n)
    }
    ,
    Yr.hydrateRoot = function(e, n, i) {
        if (!o(e))
            throw Error(s(299));
        var l = !1
          , u = ""
          , d = op
          , g = up
          , b = cp
          , E = null;
        return i != null && (i.unstable_strictMode === !0 && (l = !0),
        i.identifierPrefix !== void 0 && (u = i.identifierPrefix),
        i.onUncaughtError !== void 0 && (d = i.onUncaughtError),
        i.onCaughtError !== void 0 && (g = i.onCaughtError),
        i.onRecoverableError !== void 0 && (b = i.onRecoverableError),
        i.formState !== void 0 && (E = i.formState)),
        n = P0(e, 1, !0, n, i ?? null, l, u, E, d, g, b, eg),
        n.context = Y0(null),
        i = n.current,
        l = Bt(),
        l = Mo(l),
        u = Kn(l),
        u.callback = null,
        Qn(i, u, l),
        i = l,
        n.current.lanes = i,
        Wi(n, i),
        dn(n),
        e[$a] = n.current,
        Ac(e),
        new Ll(n)
    }
    ,
    Yr.version = "19.2.0",
    Yr
}
var fg;
function kS() {
    if (fg)
        return Gc.exports;
    fg = 1;
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (a) {
                console.error(a)
            }
    }
    return t(),
    Gc.exports = BS(),
    Gc.exports
}
var ZS = kS();
var dg = "popstate";
function HS(t={}) {
    function a(s, o) {
        let {pathname: c, search: f, hash: h} = s.location;
        return gf("", {
            pathname: c,
            search: f,
            hash: h
        }, o.state && o.state.usr || null, o.state && o.state.key || "default")
    }
    function r(s, o) {
        return typeof o == "string" ? o : ts(o)
    }
    return PS(a, r, null, t)
}
function Be(t, a) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(a)
}
function Wt(t, a) {
    if (!t) {
        typeof console < "u" && console.warn(a);
        try {
            throw new Error(a)
        } catch {}
    }
}
function qS() {
    return Math.random().toString(36).substring(2, 10)
}
function hg(t, a) {
    return {
        usr: t.state,
        key: t.key,
        idx: a
    }
}
function gf(t, a, r=null, s) {
    return {
        pathname: typeof t == "string" ? t : t.pathname,
        search: "",
        hash: "",
        ...typeof a == "string" ? Yi(a) : a,
        state: r,
        key: a && a.key || s || qS()
    }
}
function ts({pathname: t="/", search: a="", hash: r=""}) {
    return a && a !== "?" && (t += a.charAt(0) === "?" ? a : "?" + a),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function Yi(t) {
    let a = {};
    if (t) {
        let r = t.indexOf("#");
        r >= 0 && (a.hash = t.substring(r),
        t = t.substring(0, r));
        let s = t.indexOf("?");
        s >= 0 && (a.search = t.substring(s),
        t = t.substring(0, s)),
        t && (a.pathname = t)
    }
    return a
}
function PS(t, a, r, s={}) {
    let {window: o=document.defaultView, v5Compat: c=!1} = s
      , f = o.history
      , h = "POP"
      , p = null
      , m = y();
    m == null && (m = 0,
    f.replaceState({
        ...f.state,
        idx: m
    }, ""));
    function y() {
        return (f.state || {
            idx: null
        }).idx
    }
    function v() {
        h = "POP";
        let N = y()
          , V = N == null ? null : N - m;
        m = N,
        p && p({
            action: h,
            location: D.location,
            delta: V
        })
    }
    function S(N, V) {
        h = "PUSH";
        let R = gf(D.location, N, V);
        m = y() + 1;
        let U = hg(R, m)
          , Y = D.createHref(R);
        try {
            f.pushState(U, "", Y)
        } catch ($) {
            if ($ instanceof DOMException && $.name === "DataCloneError")
                throw $;
            o.location.assign(Y)
        }
        c && p && p({
            action: h,
            location: D.location,
            delta: 1
        })
    }
    function T(N, V) {
        h = "REPLACE";
        let R = gf(D.location, N, V);
        m = y();
        let U = hg(R, m)
          , Y = D.createHref(R);
        f.replaceState(U, "", Y),
        c && p && p({
            action: h,
            location: D.location,
            delta: 0
        })
    }
    function M(N) {
        return YS(N)
    }
    let D = {
        get action() {
            return h
        },
        get location() {
            return t(o, f)
        },
        listen(N) {
            if (p)
                throw new Error("A history only accepts one active listener");
            return o.addEventListener(dg, v),
            p = N,
            () => {
                o.removeEventListener(dg, v),
                p = null
            }
        },
        createHref(N) {
            return a(o, N)
        },
        createURL: M,
        encodeLocation(N) {
            let V = M(N);
            return {
                pathname: V.pathname,
                search: V.search,
                hash: V.hash
            }
        },
        push: S,
        replace: T,
        go(N) {
            return f.go(N)
        }
    };
    return D
}
function YS(t, a=!1) {
    let r = "http://localhost";
    typeof window < "u" && (r = window.location.origin !== "null" ? window.location.origin : window.location.href),
    Be(r, "No window.location.(origin|href) available to create URL");
    let s = typeof t == "string" ? t : ts(t);
    return s = s.replace(/ $/, "%20"),
    !a && s.startsWith("//") && (s = r + s),
    new URL(s,r)
}
function _v(t, a, r="/") {
    return GS(t, a, r, !1)
}
function GS(t, a, r, s) {
    let o = typeof a == "string" ? Yi(a) : a
      , c = Ln(o.pathname || "/", r);
    if (c == null)
        return null;
    let f = zv(t);
    $S(f);
    let h = null;
    for (let p = 0; h == null && p < f.length; ++p) {
        let m = aT(c);
        h = tT(f[p], m, s)
    }
    return h
}
function zv(t, a=[], r=[], s="", o=!1) {
    let c = (f, h, p=o, m) => {
        let y = {
            relativePath: m === void 0 ? f.path || "" : m,
            caseSensitive: f.caseSensitive === !0,
            childrenIndex: h,
            route: f
        };
        if (y.relativePath.startsWith("/")) {
            if (!y.relativePath.startsWith(s) && p)
                return;
            Be(y.relativePath.startsWith(s), `Absolute route path "${y.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),
            y.relativePath = y.relativePath.slice(s.length)
        }
        let v = Un([s, y.relativePath])
          , S = r.concat(y);
        f.children && f.children.length > 0 && (Be(f.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${v}".`),
        zv(f.children, a, S, v, p)),
        !(f.path == null && !f.index) && a.push({
            path: v,
            score: WS(v, f.index),
            routesMeta: S
        })
    }
    ;
    return t.forEach( (f, h) => {
        if (f.path === "" || !f.path?.includes("?"))
            c(f, h);
        else
            for (let p of Dv(f.path))
                c(f, h, !0, p)
    }
    ),
    a
}
function Dv(t) {
    let a = t.split("/");
    if (a.length === 0)
        return [];
    let[r,...s] = a
      , o = r.endsWith("?")
      , c = r.replace(/\?$/, "");
    if (s.length === 0)
        return o ? [c, ""] : [c];
    let f = Dv(s.join("/"))
      , h = [];
    return h.push(...f.map(p => p === "" ? c : [c, p].join("/"))),
    o && h.push(...f),
    h.map(p => t.startsWith("/") && p === "" ? "/" : p)
}
function $S(t) {
    t.sort( (a, r) => a.score !== r.score ? r.score - a.score : eT(a.routesMeta.map(s => s.childrenIndex), r.routesMeta.map(s => s.childrenIndex)))
}
var XS = /^:[\w-]+$/
  , KS = 3
  , QS = 2
  , FS = 1
  , JS = 10
  , IS = -2
  , mg = t => t === "*";
function WS(t, a) {
    let r = t.split("/")
      , s = r.length;
    return r.some(mg) && (s += IS),
    a && (s += QS),
    r.filter(o => !mg(o)).reduce( (o, c) => o + (XS.test(c) ? KS : c === "" ? FS : JS), s)
}
function eT(t, a) {
    return t.length === a.length && t.slice(0, -1).every( (s, o) => s === a[o]) ? t[t.length - 1] - a[a.length - 1] : 0
}
function tT(t, a, r=!1) {
    let {routesMeta: s} = t
      , o = {}
      , c = "/"
      , f = [];
    for (let h = 0; h < s.length; ++h) {
        let p = s[h]
          , m = h === s.length - 1
          , y = c === "/" ? a : a.slice(c.length) || "/"
          , v = to({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: m
        }, y)
          , S = p.route;
        if (!v && m && r && !s[s.length - 1].route.index && (v = to({
            path: p.relativePath,
            caseSensitive: p.caseSensitive,
            end: !1
        }, y)),
        !v)
            return null;
        Object.assign(o, v.params),
        f.push({
            params: o,
            pathname: Un([c, v.pathname]),
            pathnameBase: lT(Un([c, v.pathnameBase])),
            route: S
        }),
        v.pathnameBase !== "/" && (c = Un([c, v.pathnameBase]))
    }
    return f
}
function to(t, a) {
    typeof t == "string" && (t = {
        path: t,
        caseSensitive: !1,
        end: !0
    });
    let[r,s] = nT(t.path, t.caseSensitive, t.end)
      , o = a.match(r);
    if (!o)
        return null;
    let c = o[0]
      , f = c.replace(/(.)\/+$/, "$1")
      , h = o.slice(1);
    return {
        params: s.reduce( (m, {paramName: y, isOptional: v}, S) => {
            if (y === "*") {
                let M = h[S] || "";
                f = c.slice(0, c.length - M.length).replace(/(.)\/+$/, "$1")
            }
            const T = h[S];
            return v && !T ? m[y] = void 0 : m[y] = (T || "").replace(/%2F/g, "/"),
            m
        }
        , {}),
        pathname: c,
        pathnameBase: f,
        pattern: t
    }
}
function nT(t, a=!1, r=!0) {
    Wt(t === "*" || !t.endsWith("*") || t.endsWith("/*"), `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, "/*")}".`);
    let s = []
      , o = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, h, p) => (s.push({
        paramName: h,
        isOptional: p != null
    }),
    p ? "/?([^\\/]+)?" : "/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
    return t.endsWith("*") ? (s.push({
        paramName: "*"
    }),
    o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : t !== "" && t !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o,a ? void 0 : "i"), s]
}
function aT(t) {
    try {
        return t.split("/").map(a => decodeURIComponent(a).replace(/\//g, "%2F")).join("/")
    } catch (a) {
        return Wt(!1, `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),
        t
    }
}
function Ln(t, a) {
    if (a === "/")
        return t;
    if (!t.toLowerCase().startsWith(a.toLowerCase()))
        return null;
    let r = a.endsWith("/") ? a.length - 1 : a.length
      , s = t.charAt(r);
    return s && s !== "/" ? null : t.slice(r) || "/"
}
var Cv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , iT = t => Cv.test(t);
function rT(t, a="/") {
    let {pathname: r, search: s="", hash: o=""} = typeof t == "string" ? Yi(t) : t, c;
    if (r)
        if (iT(r))
            c = r;
        else {
            if (r.includes("//")) {
                let f = r;
                r = r.replace(/\/\/+/g, "/"),
                Wt(!1, `Pathnames cannot have embedded double slashes - normalizing ${f} -> ${r}`)
            }
            r.startsWith("/") ? c = pg(r.substring(1), "/") : c = pg(r, a)
        }
    else
        c = a;
    return {
        pathname: c,
        search: oT(s),
        hash: uT(o)
    }
}
function pg(t, a) {
    let r = a.replace(/\/+$/, "").split("/");
    return t.split("/").forEach(o => {
        o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o)
    }
    ),
    r.length > 1 ? r.join("/") : "/"
}
function Qc(t, a, r, s) {
    return `Cannot include a '${t}' character in a manually specified \`to.${a}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function sT(t) {
    return t.filter( (a, r) => r === 0 || a.route.path && a.route.path.length > 0)
}
function Rv(t) {
    let a = sT(t);
    return a.map( (r, s) => s === a.length - 1 ? r.pathname : r.pathnameBase)
}
function Ov(t, a, r, s=!1) {
    let o;
    typeof t == "string" ? o = Yi(t) : (o = {
        ...t
    },
    Be(!o.pathname || !o.pathname.includes("?"), Qc("?", "pathname", "search", o)),
    Be(!o.pathname || !o.pathname.includes("#"), Qc("#", "pathname", "hash", o)),
    Be(!o.search || !o.search.includes("#"), Qc("#", "search", "hash", o)));
    let c = t === "" || o.pathname === "", f = c ? "/" : o.pathname, h;
    if (f == null)
        h = r;
    else {
        let v = a.length - 1;
        if (!s && f.startsWith("..")) {
            let S = f.split("/");
            for (; S[0] === ".."; )
                S.shift(),
                v -= 1;
            o.pathname = S.join("/")
        }
        h = v >= 0 ? a[v] : "/"
    }
    let p = rT(o, h)
      , m = f && f !== "/" && f.endsWith("/")
      , y = (c || f === ".") && r.endsWith("/");
    return !p.pathname.endsWith("/") && (m || y) && (p.pathname += "/"),
    p
}
var Un = t => t.join("/").replace(/\/\/+/g, "/")
  , lT = t => t.replace(/\/+$/, "").replace(/^\/*/, "/")
  , oT = t => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t
  , uT = t => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t
  , cT = class {
    constructor(t, a, r, s=!1) {
        this.status = t,
        this.statusText = a || "",
        this.internal = s,
        r instanceof Error ? (this.data = r.toString(),
        this.error = r) : this.data = r
    }
}
;
function fT(t) {
    return t != null && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.internal == "boolean" && "data" in t
}
function dT(t) {
    return t.map(a => a.route.path).filter(Boolean).join("/").replace(/\/\/*/g, "/") || "/"
}
var Mv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function jv(t, a) {
    let r = t;
    if (typeof r != "string" || !Cv.test(r))
        return {
            absoluteURL: void 0,
            isExternal: !1,
            to: r
        };
    let s = r
      , o = !1;
    if (Mv)
        try {
            let c = new URL(window.location.href)
              , f = r.startsWith("//") ? new URL(c.protocol + r) : new URL(r)
              , h = Ln(f.pathname, a);
            f.origin === c.origin && h != null ? r = h + f.search + f.hash : o = !0
        } catch {
            Wt(!1, `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
        }
    return {
        absoluteURL: s,
        isExternal: o,
        to: r
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Nv = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Nv);
var hT = ["GET", ...Nv];
new Set(hT);
var Gi = A.createContext(null);
Gi.displayName = "DataRouter";
var mo = A.createContext(null);
mo.displayName = "DataRouterState";
var mT = A.createContext(!1)
  , Uv = A.createContext({
    isTransitioning: !1
});
Uv.displayName = "ViewTransition";
var pT = A.createContext(new Map);
pT.displayName = "Fetchers";
var gT = A.createContext(null);
gT.displayName = "Await";
var en = A.createContext(null);
en.displayName = "Navigation";
var fs = A.createContext(null);
fs.displayName = "Location";
var kn = A.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
});
kn.displayName = "Route";
var nd = A.createContext(null);
nd.displayName = "RouteError";
var Lv = "REACT_ROUTER_ERROR"
  , yT = "REDIRECT"
  , vT = "ROUTE_ERROR_RESPONSE";
function bT(t) {
    if (t.startsWith(`${Lv}:${yT}:{`))
        try {
            let a = JSON.parse(t.slice(28));
            if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string" && typeof a.location == "string" && typeof a.reloadDocument == "boolean" && typeof a.replace == "boolean")
                return a
        } catch {}
}
function xT(t) {
    if (t.startsWith(`${Lv}:${vT}:{`))
        try {
            let a = JSON.parse(t.slice(40));
            if (typeof a == "object" && a && typeof a.status == "number" && typeof a.statusText == "string")
                return new cT(a.status,a.statusText,a.data)
        } catch {}
}
function ST(t, {relative: a}={}) {
    Be(ds(), "useHref() may be used only in the context of a <Router> component.");
    let {basename: r, navigator: s} = A.useContext(en)
      , {hash: o, pathname: c, search: f} = ms(t, {
        relative: a
    })
      , h = c;
    return r !== "/" && (h = c === "/" ? r : Un([r, c])),
    s.createHref({
        pathname: h,
        search: f,
        hash: o
    })
}
function ds() {
    return A.useContext(fs) != null
}
function gn() {
    return Be(ds(), "useLocation() may be used only in the context of a <Router> component."),
    A.useContext(fs).location
}
var Vv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Bv(t) {
    A.useContext(en).static || A.useLayoutEffect(t)
}
function hs() {
    let {isDataRoute: t} = A.useContext(kn);
    return t ? NT() : TT()
}
function TT() {
    Be(ds(), "useNavigate() may be used only in the context of a <Router> component.");
    let t = A.useContext(Gi)
      , {basename: a, navigator: r} = A.useContext(en)
      , {matches: s} = A.useContext(kn)
      , {pathname: o} = gn()
      , c = JSON.stringify(Rv(s))
      , f = A.useRef(!1);
    return Bv( () => {
        f.current = !0
    }
    ),
    A.useCallback( (p, m={}) => {
        if (Wt(f.current, Vv),
        !f.current)
            return;
        if (typeof p == "number") {
            r.go(p);
            return
        }
        let y = Ov(p, JSON.parse(c), o, m.relative === "path");
        t == null && a !== "/" && (y.pathname = y.pathname === "/" ? a : Un([a, y.pathname])),
        (m.replace ? r.replace : r.push)(y, m.state, m)
    }
    , [a, r, c, o, t])
}
A.createContext(null);
function ms(t, {relative: a}={}) {
    let {matches: r} = A.useContext(kn)
      , {pathname: s} = gn()
      , o = JSON.stringify(Rv(r));
    return A.useMemo( () => Ov(t, JSON.parse(o), s, a === "path"), [t, o, s, a])
}
function AT(t, a) {
    return kv(t, a)
}
function kv(t, a, r, s, o) {
    Be(ds(), "useRoutes() may be used only in the context of a <Router> component.");
    let {navigator: c} = A.useContext(en)
      , {matches: f} = A.useContext(kn)
      , h = f[f.length - 1]
      , p = h ? h.params : {}
      , m = h ? h.pathname : "/"
      , y = h ? h.pathnameBase : "/"
      , v = h && h.route;
    {
        let R = v && v.path || "";
        Hv(m, !v || R.endsWith("*") || R.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R === "/" ? "*" : `${R}/*`}">.`)
    }
    let S = gn(), T;
    if (a) {
        let R = typeof a == "string" ? Yi(a) : a;
        Be(y === "/" || R.pathname?.startsWith(y), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${R.pathname}" was given in the \`location\` prop.`),
        T = R
    } else
        T = S;
    let M = T.pathname || "/"
      , D = M;
    if (y !== "/") {
        let R = y.replace(/^\//, "").split("/");
        D = "/" + M.replace(/^\//, "").split("/").slice(R.length).join("/")
    }
    let N = _v(t, {
        pathname: D
    });
    Wt(v || N != null, `No routes matched location "${T.pathname}${T.search}${T.hash}" `),
    Wt(N == null || N[N.length - 1].route.element !== void 0 || N[N.length - 1].route.Component !== void 0 || N[N.length - 1].route.lazy !== void 0, `Matched leaf route at location "${T.pathname}${T.search}${T.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
    let V = DT(N && N.map(R => Object.assign({}, R, {
        params: Object.assign({}, p, R.params),
        pathname: Un([y, c.encodeLocation ? c.encodeLocation(R.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathname]),
        pathnameBase: R.pathnameBase === "/" ? y : Un([y, c.encodeLocation ? c.encodeLocation(R.pathnameBase.replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : R.pathnameBase])
    })), f, r, s, o);
    return a && V ? A.createElement(fs.Provider, {
        value: {
            location: {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
                ...T
            },
            navigationType: "POP"
        }
    }, V) : V
}
function ET() {
    let t = jT()
      , a = fT(t) ? `${t.status} ${t.statusText}` : t instanceof Error ? t.message : JSON.stringify(t)
      , r = t instanceof Error ? t.stack : null
      , s = "rgba(200,200,200, 0.5)"
      , o = {
        padding: "0.5rem",
        backgroundColor: s
    }
      , c = {
        padding: "2px 4px",
        backgroundColor: s
    }
      , f = null;
    return console.error("Error handled by React Router default ErrorBoundary:", t),
    f = A.createElement(A.Fragment, null, A.createElement("p", null, "💿 Hey developer 👋"), A.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", A.createElement("code", {
        style: c
    }, "ErrorBoundary"), " or", " ", A.createElement("code", {
        style: c
    }, "errorElement"), " prop on your route.")),
    A.createElement(A.Fragment, null, A.createElement("h2", null, "Unexpected Application Error!"), A.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, a), r ? A.createElement("pre", {
        style: o
    }, r) : null, f)
}
var wT = A.createElement(ET, null)
  , Zv = class extends A.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, a) {
        return a.location !== t.location || a.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : a.error,
            location: a.location,
            revalidation: t.revalidation || a.revalidation
        }
    }
    componentDidCatch(t, a) {
        this.props.onError ? this.props.onError(t, a) : console.error("React Router caught the following error during render", t)
    }
    render() {
        let t = this.state.error;
        if (this.context && typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
            const r = xT(t.digest);
            r && (t = r)
        }
        let a = t !== void 0 ? A.createElement(kn.Provider, {
            value: this.props.routeContext
        }, A.createElement(nd.Provider, {
            value: t,
            children: this.props.component
        })) : this.props.children;
        return this.context ? A.createElement(_T, {
            error: t
        }, a) : a
    }
}
;
Zv.contextType = mT;
var Fc = new WeakMap;
function _T({children: t, error: a}) {
    let {basename: r} = A.useContext(en);
    if (typeof a == "object" && a && "digest" in a && typeof a.digest == "string") {
        let s = bT(a.digest);
        if (s) {
            let o = Fc.get(a);
            if (o)
                throw o;
            let c = jv(s.location, r);
            if (Mv && !Fc.get(a))
                if (c.isExternal || s.reloadDocument)
                    window.location.href = c.absoluteURL || c.to;
                else {
                    const f = Promise.resolve().then( () => window.__reactRouterDataRouter.navigate(c.to, {
                        replace: s.replace
                    }));
                    throw Fc.set(a, f),
                    f
                }
            return A.createElement("meta", {
                httpEquiv: "refresh",
                content: `0;url=${c.absoluteURL || c.to}`
            })
        }
    }
    return t
}
function zT({routeContext: t, match: a, children: r}) {
    let s = A.useContext(Gi);
    return s && s.static && s.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (s.staticContext._deepestRenderedBoundaryId = a.route.id),
    A.createElement(kn.Provider, {
        value: t
    }, r)
}
function DT(t, a=[], r=null, s=null, o=null) {
    if (t == null) {
        if (!r)
            return null;
        if (r.errors)
            t = r.matches;
        else if (a.length === 0 && !r.initialized && r.matches.length > 0)
            t = r.matches;
        else
            return null
    }
    let c = t
      , f = r?.errors;
    if (f != null) {
        let y = c.findIndex(v => v.route.id && f?.[v.route.id] !== void 0);
        Be(y >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),
        c = c.slice(0, Math.min(c.length, y + 1))
    }
    let h = !1
      , p = -1;
    if (r)
        for (let y = 0; y < c.length; y++) {
            let v = c[y];
            if ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (p = y),
            v.route.id) {
                let {loaderData: S, errors: T} = r
                  , M = v.route.loader && !S.hasOwnProperty(v.route.id) && (!T || T[v.route.id] === void 0);
                if (v.route.lazy || M) {
                    h = !0,
                    p >= 0 ? c = c.slice(0, p + 1) : c = [c[0]];
                    break
                }
            }
        }
    let m = r && s ? (y, v) => {
        s(y, {
            location: r.location,
            params: r.matches?.[0]?.params ?? {},
            unstable_pattern: dT(r.matches),
            errorInfo: v
        })
    }
    : void 0;
    return c.reduceRight( (y, v, S) => {
        let T, M = !1, D = null, N = null;
        r && (T = f && v.route.id ? f[v.route.id] : void 0,
        D = v.route.errorElement || wT,
        h && (p < 0 && S === 0 ? (Hv("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"),
        M = !0,
        N = null) : p === S && (M = !0,
        N = v.route.hydrateFallbackElement || null)));
        let V = a.concat(c.slice(0, S + 1))
          , R = () => {
            let U;
            return T ? U = D : M ? U = N : v.route.Component ? U = A.createElement(v.route.Component, null) : v.route.element ? U = v.route.element : U = y,
            A.createElement(zT, {
                match: v,
                routeContext: {
                    outlet: y,
                    matches: V,
                    isDataRoute: r != null
                },
                children: U
            })
        }
        ;
        return r && (v.route.ErrorBoundary || v.route.errorElement || S === 0) ? A.createElement(Zv, {
            location: r.location,
            revalidation: r.revalidation,
            component: D,
            error: T,
            children: R(),
            routeContext: {
                outlet: null,
                matches: V,
                isDataRoute: !0
            },
            onError: m
        }) : R()
    }
    , null)
}
function ad(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function CT(t) {
    let a = A.useContext(Gi);
    return Be(a, ad(t)),
    a
}
function RT(t) {
    let a = A.useContext(mo);
    return Be(a, ad(t)),
    a
}
function OT(t) {
    let a = A.useContext(kn);
    return Be(a, ad(t)),
    a
}
function id(t) {
    let a = OT(t)
      , r = a.matches[a.matches.length - 1];
    return Be(r.route.id, `${t} can only be used on routes that contain a unique "id"`),
    r.route.id
}
function MT() {
    return id("useRouteId")
}
function jT() {
    let t = A.useContext(nd)
      , a = RT("useRouteError")
      , r = id("useRouteError");
    return t !== void 0 ? t : a.errors?.[r]
}
function NT() {
    let {router: t} = CT("useNavigate")
      , a = id("useNavigate")
      , r = A.useRef(!1);
    return Bv( () => {
        r.current = !0
    }
    ),
    A.useCallback(async (o, c={}) => {
        Wt(r.current, Vv),
        r.current && (typeof o == "number" ? await t.navigate(o) : await t.navigate(o, {
            fromRouteId: a,
            ...c
        }))
    }
    , [t, a])
}
var gg = {};
function Hv(t, a, r) {
    !a && !gg[t] && (gg[t] = !0,
    Wt(!1, r))
}
A.memo(UT);
function UT({routes: t, future: a, state: r, onError: s}) {
    return kv(t, void 0, r, s, a)
}
function Mi(t) {
    Be(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
}
function LT({basename: t="/", children: a=null, location: r, navigationType: s="POP", navigator: o, static: c=!1, unstable_useTransitions: f}) {
    Be(!ds(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
    let h = t.replace(/^\/*/, "/")
      , p = A.useMemo( () => ({
        basename: h,
        navigator: o,
        static: c,
        unstable_useTransitions: f,
        future: {}
    }), [h, o, c, f]);
    typeof r == "string" && (r = Yi(r));
    let {pathname: m="/", search: y="", hash: v="", state: S=null, key: T="default"} = r
      , M = A.useMemo( () => {
        let D = Ln(m, h);
        return D == null ? null : {
            location: {
                pathname: D,
                search: y,
                hash: v,
                state: S,
                key: T
            },
            navigationType: s
        }
    }
    , [h, m, y, v, S, T, s]);
    return Wt(M != null, `<Router basename="${h}"> is not able to match the URL "${m}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),
    M == null ? null : A.createElement(en.Provider, {
        value: p
    }, A.createElement(fs.Provider, {
        children: a,
        value: M
    }))
}
function VT({children: t, location: a}) {
    return AT(yf(t), a)
}
function yf(t, a=[]) {
    let r = [];
    return A.Children.forEach(t, (s, o) => {
        if (!A.isValidElement(s))
            return;
        let c = [...a, o];
        if (s.type === A.Fragment) {
            r.push.apply(r, yf(s.props.children, c));
            return
        }
        Be(s.type === Mi, `[${typeof s.type == "string" ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),
        Be(!s.props.index || !s.props.children, "An index route cannot have child routes.");
        let f = {
            id: s.props.id || c.join("-"),
            caseSensitive: s.props.caseSensitive,
            element: s.props.element,
            Component: s.props.Component,
            index: s.props.index,
            path: s.props.path,
            middleware: s.props.middleware,
            loader: s.props.loader,
            action: s.props.action,
            hydrateFallbackElement: s.props.hydrateFallbackElement,
            HydrateFallback: s.props.HydrateFallback,
            errorElement: s.props.errorElement,
            ErrorBoundary: s.props.ErrorBoundary,
            hasErrorBoundary: s.props.hasErrorBoundary === !0 || s.props.ErrorBoundary != null || s.props.errorElement != null,
            shouldRevalidate: s.props.shouldRevalidate,
            handle: s.props.handle,
            lazy: s.props.lazy
        };
        s.props.children && (f.children = yf(s.props.children, c)),
        r.push(f)
    }
    ),
    r
}
var Kl = "get"
  , Ql = "application/x-www-form-urlencoded";
function po(t) {
    return typeof HTMLElement < "u" && t instanceof HTMLElement
}
function BT(t) {
    return po(t) && t.tagName.toLowerCase() === "button"
}
function kT(t) {
    return po(t) && t.tagName.toLowerCase() === "form"
}
function ZT(t) {
    return po(t) && t.tagName.toLowerCase() === "input"
}
function HT(t) {
    return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
}
function qT(t, a) {
    return t.button === 0 && (!a || a === "_self") && !HT(t)
}
function vf(t="") {
    return new URLSearchParams(typeof t == "string" || Array.isArray(t) || t instanceof URLSearchParams ? t : Object.keys(t).reduce( (a, r) => {
        let s = t[r];
        return a.concat(Array.isArray(s) ? s.map(o => [r, o]) : [[r, s]])
    }
    , []))
}
function PT(t, a) {
    let r = vf(t);
    return a && a.forEach( (s, o) => {
        r.has(o) || a.getAll(o).forEach(c => {
            r.append(o, c)
        }
        )
    }
    ),
    r
}
var Bl = null;
function YT() {
    if (Bl === null)
        try {
            new FormData(document.createElement("form"),0),
            Bl = !1
        } catch {
            Bl = !0
        }
    return Bl
}
var GT = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Jc(t) {
    return t != null && !GT.has(t) ? (Wt(!1, `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ql}"`),
    null) : t
}
function $T(t, a) {
    let r, s, o, c, f;
    if (kT(t)) {
        let h = t.getAttribute("action");
        s = h ? Ln(h, a) : null,
        r = t.getAttribute("method") || Kl,
        o = Jc(t.getAttribute("enctype")) || Ql,
        c = new FormData(t)
    } else if (BT(t) || ZT(t) && (t.type === "submit" || t.type === "image")) {
        let h = t.form;
        if (h == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let p = t.getAttribute("formaction") || h.getAttribute("action");
        if (s = p ? Ln(p, a) : null,
        r = t.getAttribute("formmethod") || h.getAttribute("method") || Kl,
        o = Jc(t.getAttribute("formenctype")) || Jc(h.getAttribute("enctype")) || Ql,
        c = new FormData(h,t),
        !YT()) {
            let {name: m, type: y, value: v} = t;
            if (y === "image") {
                let S = m ? `${m}.` : "";
                c.append(`${S}x`, "0"),
                c.append(`${S}y`, "0")
            } else
                m && c.append(m, v)
        }
    } else {
        if (po(t))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = Kl,
        s = null,
        o = Ql,
        f = t
    }
    return c && o === "text/plain" && (f = c,
    c = void 0),
    {
        action: s,
        method: r.toLowerCase(),
        encType: o,
        formData: c,
        body: f
    }
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function rd(t, a) {
    if (t === !1 || t === null || typeof t > "u")
        throw new Error(a)
}
function XT(t, a, r, s) {
    let o = typeof t == "string" ? new URL(t,typeof window > "u" ? "server://singlefetch/" : window.location.origin) : t;
    return r ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${s}` : o.pathname = `${o.pathname}.${s}` : o.pathname === "/" ? o.pathname = `_root.${s}` : a && Ln(o.pathname, a) === "/" ? o.pathname = `${a.replace(/\/$/, "")}/_root.${s}` : o.pathname = `${o.pathname.replace(/\/$/, "")}.${s}`,
    o
}
async function KT(t, a) {
    if (t.id in a)
        return a[t.id];
    try {
        let r = await import(t.module);
        return a[t.id] = r,
        r
    } catch (r) {
        return console.error(`Error loading route module \`${t.module}\`, reloading page...`),
        console.error(r),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
function QT(t) {
    return t == null ? !1 : t.href == null ? t.rel === "preload" && typeof t.imageSrcSet == "string" && typeof t.imageSizes == "string" : typeof t.rel == "string" && typeof t.href == "string"
}
async function FT(t, a, r) {
    let s = await Promise.all(t.map(async o => {
        let c = a.routes[o.route.id];
        if (c) {
            let f = await KT(c, r);
            return f.links ? f.links() : []
        }
        return []
    }
    ));
    return e3(s.flat(1).filter(QT).filter(o => o.rel === "stylesheet" || o.rel === "preload").map(o => o.rel === "stylesheet" ? {
        ...o,
        rel: "prefetch",
        as: "style"
    } : {
        ...o,
        rel: "prefetch"
    }))
}
function yg(t, a, r, s, o, c) {
    let f = (p, m) => r[m] ? p.route.id !== r[m].route.id : !0
      , h = (p, m) => r[m].pathname !== p.pathname || r[m].route.path?.endsWith("*") && r[m].params["*"] !== p.params["*"];
    return c === "assets" ? a.filter( (p, m) => f(p, m) || h(p, m)) : c === "data" ? a.filter( (p, m) => {
        let y = s.routes[p.route.id];
        if (!y || !y.hasLoader)
            return !1;
        if (f(p, m) || h(p, m))
            return !0;
        if (p.route.shouldRevalidate) {
            let v = p.route.shouldRevalidate({
                currentUrl: new URL(o.pathname + o.search + o.hash,window.origin),
                currentParams: r[0]?.params || {},
                nextUrl: new URL(t,window.origin),
                nextParams: p.params,
                defaultShouldRevalidate: !0
            });
            if (typeof v == "boolean")
                return v
        }
        return !0
    }
    ) : []
}
function JT(t, a, {includeHydrateFallback: r}={}) {
    return IT(t.map(s => {
        let o = a.routes[s.route.id];
        if (!o)
            return [];
        let c = [o.module];
        return o.clientActionModule && (c = c.concat(o.clientActionModule)),
        o.clientLoaderModule && (c = c.concat(o.clientLoaderModule)),
        r && o.hydrateFallbackModule && (c = c.concat(o.hydrateFallbackModule)),
        o.imports && (c = c.concat(o.imports)),
        c
    }
    ).flat(1))
}
function IT(t) {
    return [...new Set(t)]
}
function WT(t) {
    let a = {}
      , r = Object.keys(t).sort();
    for (let s of r)
        a[s] = t[s];
    return a
}
function e3(t, a) {
    let r = new Set;
    return new Set(a),
    t.reduce( (s, o) => {
        let c = JSON.stringify(WT(o));
        return r.has(c) || (r.add(c),
        s.push({
            key: c,
            link: o
        })),
        s
    }
    , [])
}
function qv() {
    let t = A.useContext(Gi);
    return rd(t, "You must render this element inside a <DataRouterContext.Provider> element"),
    t
}
function t3() {
    let t = A.useContext(mo);
    return rd(t, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    t
}
var sd = A.createContext(void 0);
sd.displayName = "FrameworkContext";
function Pv() {
    let t = A.useContext(sd);
    return rd(t, "You must render this element inside a <HydratedRouter> element"),
    t
}
function n3(t, a) {
    let r = A.useContext(sd)
      , [s,o] = A.useState(!1)
      , [c,f] = A.useState(!1)
      , {onFocus: h, onBlur: p, onMouseEnter: m, onMouseLeave: y, onTouchStart: v} = a
      , S = A.useRef(null);
    A.useEffect( () => {
        if (t === "render" && f(!0),
        t === "viewport") {
            let D = V => {
                V.forEach(R => {
                    f(R.isIntersecting)
                }
                )
            }
              , N = new IntersectionObserver(D,{
                threshold: .5
            });
            return S.current && N.observe(S.current),
            () => {
                N.disconnect()
            }
        }
    }
    , [t]),
    A.useEffect( () => {
        if (s) {
            let D = setTimeout( () => {
                f(!0)
            }
            , 100);
            return () => {
                clearTimeout(D)
            }
        }
    }
    , [s]);
    let T = () => {
        o(!0)
    }
      , M = () => {
        o(!1),
        f(!1)
    }
    ;
    return r ? t !== "intent" ? [c, S, {}] : [c, S, {
        onFocus: Gr(h, T),
        onBlur: Gr(p, M),
        onMouseEnter: Gr(m, T),
        onMouseLeave: Gr(y, M),
        onTouchStart: Gr(v, T)
    }] : [!1, S, {}]
}
function Gr(t, a) {
    return r => {
        t && t(r),
        r.defaultPrevented || a(r)
    }
}
function a3({page: t, ...a}) {
    let {router: r} = qv()
      , s = A.useMemo( () => _v(r.routes, t, r.basename), [r.routes, t, r.basename]);
    return s ? A.createElement(r3, {
        page: t,
        matches: s,
        ...a
    }) : null
}
function i3(t) {
    let {manifest: a, routeModules: r} = Pv()
      , [s,o] = A.useState([]);
    return A.useEffect( () => {
        let c = !1;
        return FT(t, a, r).then(f => {
            c || o(f)
        }
        ),
        () => {
            c = !0
        }
    }
    , [t, a, r]),
    s
}
function r3({page: t, matches: a, ...r}) {
    let s = gn()
      , {future: o, manifest: c, routeModules: f} = Pv()
      , {basename: h} = qv()
      , {loaderData: p, matches: m} = t3()
      , y = A.useMemo( () => yg(t, a, m, c, s, "data"), [t, a, m, c, s])
      , v = A.useMemo( () => yg(t, a, m, c, s, "assets"), [t, a, m, c, s])
      , S = A.useMemo( () => {
        if (t === s.pathname + s.search + s.hash)
            return [];
        let D = new Set
          , N = !1;
        if (a.forEach(R => {
            let U = c.routes[R.route.id];
            !U || !U.hasLoader || (!y.some(Y => Y.route.id === R.route.id) && R.route.id in p && f[R.route.id]?.shouldRevalidate || U.hasClientLoader ? N = !0 : D.add(R.route.id))
        }
        ),
        D.size === 0)
            return [];
        let V = XT(t, h, o.unstable_trailingSlashAwareDataRequests, "data");
        return N && D.size > 0 && V.searchParams.set("_routes", a.filter(R => D.has(R.route.id)).map(R => R.route.id).join(",")),
        [V.pathname + V.search]
    }
    , [h, o.unstable_trailingSlashAwareDataRequests, p, s, c, y, a, t, f])
      , T = A.useMemo( () => JT(v, c), [v, c])
      , M = i3(v);
    return A.createElement(A.Fragment, null, S.map(D => A.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...r
    })), T.map(D => A.createElement("link", {
        key: D,
        rel: "modulepreload",
        href: D,
        ...r
    })), M.map( ({key: D, link: N}) => A.createElement("link", {
        key: D,
        nonce: r.nonce,
        ...N
    })))
}
function s3(...t) {
    return a => {
        t.forEach(r => {
            typeof r == "function" ? r(a) : r != null && (r.current = a)
        }
        )
    }
}
var l3 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
    l3 && (window.__reactRouterVersion = "7.12.0")
} catch {}
function o3({basename: t, children: a, unstable_useTransitions: r, window: s}) {
    let o = A.useRef();
    o.current == null && (o.current = HS({
        window: s,
        v5Compat: !0
    }));
    let c = o.current
      , [f,h] = A.useState({
        action: c.action,
        location: c.location
    })
      , p = A.useCallback(m => {
        r === !1 ? h(m) : A.startTransition( () => h(m))
    }
    , [r]);
    return A.useLayoutEffect( () => c.listen(p), [c, p]),
    A.createElement(LT, {
        basename: t,
        children: a,
        location: f.location,
        navigationType: f.action,
        navigator: c,
        unstable_useTransitions: r
    })
}
var Yv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Gv = A.forwardRef(function({onClick: a, discover: r="render", prefetch: s="none", relative: o, reloadDocument: c, replace: f, state: h, target: p, to: m, preventScrollReset: y, viewTransition: v, unstable_defaultShouldRevalidate: S, ...T}, M) {
    let {basename: D, unstable_useTransitions: N} = A.useContext(en)
      , V = typeof m == "string" && Yv.test(m)
      , R = jv(m, D);
    m = R.to;
    let U = ST(m, {
        relative: o
    })
      , [Y,$,I] = n3(s, T)
      , X = d3(m, {
        replace: f,
        state: h,
        target: p,
        preventScrollReset: y,
        relative: o,
        viewTransition: v,
        unstable_defaultShouldRevalidate: S,
        unstable_useTransitions: N
    });
    function F(se) {
        a && a(se),
        se.defaultPrevented || X(se)
    }
    let Q = A.createElement("a", {
        ...T,
        ...I,
        href: R.absoluteURL || U,
        onClick: R.isExternal || c ? a : F,
        ref: s3(M, $),
        target: p,
        "data-discover": !V && r === "render" ? "true" : void 0
    });
    return Y && !V ? A.createElement(A.Fragment, null, Q, A.createElement(a3, {
        page: U
    })) : Q
});
Gv.displayName = "Link";
var u3 = A.forwardRef(function({"aria-current": a="page", caseSensitive: r=!1, className: s="", end: o=!1, style: c, to: f, viewTransition: h, children: p, ...m}, y) {
    let v = ms(f, {
        relative: m.relative
    })
      , S = gn()
      , T = A.useContext(mo)
      , {navigator: M, basename: D} = A.useContext(en)
      , N = T != null && v3(v) && h === !0
      , V = M.encodeLocation ? M.encodeLocation(v).pathname : v.pathname
      , R = S.pathname
      , U = T && T.navigation && T.navigation.location ? T.navigation.location.pathname : null;
    r || (R = R.toLowerCase(),
    U = U ? U.toLowerCase() : null,
    V = V.toLowerCase()),
    U && D && (U = Ln(U, D) || U);
    const Y = V !== "/" && V.endsWith("/") ? V.length - 1 : V.length;
    let $ = R === V || !o && R.startsWith(V) && R.charAt(Y) === "/", I = U != null && (U === V || !o && U.startsWith(V) && U.charAt(V.length) === "/"), X = {
        isActive: $,
        isPending: I,
        isTransitioning: N
    }, F = $ ? a : void 0, Q;
    typeof s == "function" ? Q = s(X) : Q = [s, $ ? "active" : null, I ? "pending" : null, N ? "transitioning" : null].filter(Boolean).join(" ");
    let se = typeof c == "function" ? c(X) : c;
    return A.createElement(Gv, {
        ...m,
        "aria-current": F,
        className: Q,
        ref: y,
        style: se,
        to: f,
        viewTransition: h
    }, typeof p == "function" ? p(X) : p)
});
u3.displayName = "NavLink";
var c3 = A.forwardRef( ({discover: t="render", fetcherKey: a, navigate: r, reloadDocument: s, replace: o, state: c, method: f=Kl, action: h, onSubmit: p, relative: m, preventScrollReset: y, viewTransition: v, unstable_defaultShouldRevalidate: S, ...T}, M) => {
    let {unstable_useTransitions: D} = A.useContext(en)
      , N = g3()
      , V = y3(h, {
        relative: m
    })
      , R = f.toLowerCase() === "get" ? "get" : "post"
      , U = typeof h == "string" && Yv.test(h)
      , Y = $ => {
        if (p && p($),
        $.defaultPrevented)
            return;
        $.preventDefault();
        let I = $.nativeEvent.submitter
          , X = I?.getAttribute("formmethod") || f
          , F = () => N(I || $.currentTarget, {
            fetcherKey: a,
            method: X,
            navigate: r,
            replace: o,
            state: c,
            relative: m,
            preventScrollReset: y,
            viewTransition: v,
            unstable_defaultShouldRevalidate: S
        });
        D && r !== !1 ? A.startTransition( () => F()) : F()
    }
    ;
    return A.createElement("form", {
        ref: M,
        method: R,
        action: V,
        onSubmit: s ? p : Y,
        ...T,
        "data-discover": !U && t === "render" ? "true" : void 0
    })
}
);
c3.displayName = "Form";
function f3(t) {
    return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function $v(t) {
    let a = A.useContext(Gi);
    return Be(a, f3(t)),
    a
}
function d3(t, {target: a, replace: r, state: s, preventScrollReset: o, relative: c, viewTransition: f, unstable_defaultShouldRevalidate: h, unstable_useTransitions: p}={}) {
    let m = hs()
      , y = gn()
      , v = ms(t, {
        relative: c
    });
    return A.useCallback(S => {
        if (qT(S, a)) {
            S.preventDefault();
            let T = r !== void 0 ? r : ts(y) === ts(v)
              , M = () => m(t, {
                replace: T,
                state: s,
                preventScrollReset: o,
                relative: c,
                viewTransition: f,
                unstable_defaultShouldRevalidate: h
            });
            p ? A.startTransition( () => M()) : M()
        }
    }
    , [y, m, v, r, s, a, t, o, c, f, h, p])
}
function h3(t) {
    Wt(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
    let a = A.useRef(vf(t))
      , r = A.useRef(!1)
      , s = gn()
      , o = A.useMemo( () => PT(s.search, r.current ? null : a.current), [s.search])
      , c = hs()
      , f = A.useCallback( (h, p) => {
        const m = vf(typeof h == "function" ? h(new URLSearchParams(o)) : h);
        r.current = !0,
        c("?" + m, p)
    }
    , [c, o]);
    return [o, f]
}
var m3 = 0
  , p3 = () => `__${String(++m3)}__`;
function g3() {
    let {router: t} = $v("useSubmit")
      , {basename: a} = A.useContext(en)
      , r = MT()
      , s = t.fetch
      , o = t.navigate;
    return A.useCallback(async (c, f={}) => {
        let {action: h, method: p, encType: m, formData: y, body: v} = $T(c, a);
        if (f.navigate === !1) {
            let S = f.fetcherKey || p3();
            await s(S, r, f.action || h, {
                unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                preventScrollReset: f.preventScrollReset,
                formData: y,
                body: v,
                formMethod: f.method || p,
                formEncType: f.encType || m,
                flushSync: f.flushSync
            })
        } else
            await o(f.action || h, {
                unstable_defaultShouldRevalidate: f.unstable_defaultShouldRevalidate,
                preventScrollReset: f.preventScrollReset,
                formData: y,
                body: v,
                formMethod: f.method || p,
                formEncType: f.encType || m,
                replace: f.replace,
                state: f.state,
                fromRouteId: r,
                flushSync: f.flushSync,
                viewTransition: f.viewTransition
            })
    }
    , [s, o, a, r])
}
function y3(t, {relative: a}={}) {
    let {basename: r} = A.useContext(en)
      , s = A.useContext(kn);
    Be(s, "useFormAction must be used inside a RouteContext");
    let[o] = s.matches.slice(-1)
      , c = {
        ...ms(t || ".", {
            relative: a
        })
    }
      , f = gn();
    if (t == null) {
        c.search = f.search;
        let h = new URLSearchParams(c.search)
          , p = h.getAll("index");
        if (p.some(y => y === "")) {
            h.delete("index"),
            p.filter(v => v).forEach(v => h.append("index", v));
            let y = h.toString();
            c.search = y ? `?${y}` : ""
        }
    }
    return (!t || t === ".") && o.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"),
    r !== "/" && (c.pathname = c.pathname === "/" ? r : Un([r, c.pathname])),
    ts(c)
}
function v3(t, {relative: a}={}) {
    let r = A.useContext(Uv);
    Be(r != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
    let {basename: s} = $v("useViewTransitionState")
      , o = ms(t, {
        relative: a
    });
    if (!r.isTransitioning)
        return !1;
    let c = Ln(r.currentLocation.pathname, s) || r.currentLocation.pathname
      , f = Ln(r.nextLocation.pathname, s) || r.nextLocation.pathname;
    return to(o.pathname, f) != null || to(o.pathname, c) != null
}
const ld = () => typeof window < "u" && window.Telegram?.WebApp ? window.Telegram.WebApp : null
  , od = () => {
    const t = ld();
    if (t?.HapticFeedback) {
        t.HapticFeedback.impactOccurred("light");
        return
    }
    navigator.vibrate && navigator.vibrate(10)
}
  , b3 = () => {
    const t = ld();
    if (t?.HapticFeedback) {
        t.HapticFeedback.notificationOccurred("success");
        return
    }
    navigator.vibrate && navigator.vibrate([10, 50, 10])
}
  , x3 = () => {
    const t = ld();
    if (t?.HapticFeedback) {
        t.HapticFeedback.notificationOccurred("error");
        return
    }
    navigator.vibrate && navigator.vibrate([30, 50, 30])
}
  , S3 = ({label: t, iconActive: a, iconInactive: r, onClick: s, active: o}) => {
    const c = f => {
        od(),
        s?.(f)
    }
    ;
    return x.jsxs("button", {
        onClick: c,
        className: `
        motion-btn flex flex-col items-center justify-center flex-1 px-2 py-4 rounded-[999px] text-navbar-text z-10 transition-colors duration-200
        ${o ? "text-white" : "text-gray-light"}
      `,
        children: [x.jsx("div", {
            className: "flex items-center justify-center h-7 w-7",
            children: o ? a : r
        }), x.jsx("span", {
            className: "leading-none",
            children: t
        })]
    })
}
;
var vg;
function bf() {
    return bf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    bf.apply(null, arguments)
}
var bg = function(a) {
    return A.createElement("svg", bf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 27,
        fill: "none"
    }, a), vg || (vg = A.createElement("path", {
        fill: "#FEFEFE",
        stroke: "#fff",
        d: "m12.486 2.57.076.001c.37.003.726.017 1.085.118l.073.02A5.3 5.3 0 0 1 16.096 4.1q.084.084.171.163c.097.092.18.191.261.298l.032.042a6.1 6.1 0 0 1 1.048 2.085c.22.754.26 1.63.14 2.409l-.01.073c-.17 1.083-.61 2.198-1.364 2.964-.05.046-.05.046-.041.127l.04.017c1.089.47 2.088 1.058 2.993 1.869l.193.17.063.056.105.092q.05.043.097.09v.052l.042.02c.067.04.112.088.166.146l.064.069.065.072.065.07q.185.2.355.414l.064.08q.588.739 1.051 1.576l.097.173c.243.437.435.892.619 1.362l.027.067c.472 1.2 1.031 3.132.58 4.415q-.043.107-.094.211l-.036.076a2.09 2.09 0 0 1-1.16 1.04c-.287.09-.571.101-.869.1h-1.068l-.695.001H13.66l-5.177.002H4.384c-.715.002-1.311-.05-1.87-.586l-.057-.055a2.22 2.22 0 0 1-.612-1.46v-.267c.01-1.352.385-2.743.912-3.959l.072-.17a9.6 9.6 0 0 1 1.279-2.197q.195-.255.402-.5l.092-.113c.111-.14.228-.27.348-.4l.058-.064c.122-.13.244-.25.379-.364q.081-.07.158-.148a8.7 8.7 0 0 1 1.681-1.245l.063-.037a11 11 0 0 1 1.16-.59c.186-.085.186-.085.242-.085v-.08h-.049a2 2 0 0 1-.097-.125l-.06-.08-.03-.043q-.076-.098-.154-.195a4 4 0 0 1-.342-.532l-.05-.09a6 6 0 0 1-.658-1.993l-.01-.06c-.219-1.368.142-2.889.876-4.016a4 4 0 0 1 .462-.603q.062-.066.117-.14c.205-.255.45-.467.703-.665l.079-.063a4.7 4.7 0 0 1 1.337-.728l.06-.02.198-.063.059-.018a4.6 4.6 0 0 1 1.354-.176Zm-2.472 2.756a3 3 0 0 1-.14.129c-.676.623-1.01 1.661-1.085 2.587-.07 1.026.303 2.064.913 2.838.61.76 1.479 1.281 2.413 1.37a3.68 3.68 0 0 0 2.86-1.014q.108-.105.21-.215l.057-.06c.634-.717.979-1.754.969-2.738a6 6 0 0 0-.03-.451 4.1 4.1 0 0 0-.874-2.103l-.057-.072a3 3 0 0 0-.455-.456l-.077-.064a3.49 3.49 0 0 0-4.704.249Zm.196 8.382-.09.024c-.64.183-1.26.44-1.848.771l-.131.072a7.4 7.4 0 0 0-1.208.85l-.068.057q-.194.166-.375.349l-.163.156a6 6 0 0 0-.347.357 4 4 0 0 0-.318.388q-.066.089-.14.173c-.148.178-.27.379-.395.576l-.033.052a11 11 0 0 0-.455.792l-.026.048c-.472.894-.762 1.895-.927 2.905l-.012.072c-.04.243-.067.482-.07.73l-.001.061a.53.53 0 0 0 .124.372l.042.037.042.039c.094.069.18.093.292.093h.244l.502.001H5.99l2.284.002h3.05q1.195 0 2.392.002h3.043l2.277.002h1.748c.174-.001.337-.026.47-.157.178-.22.149-.476.133-.753-.139-1.558-.716-3.113-1.563-4.377l-.03-.044q-.195-.289-.41-.562l-.03-.041a6.2 6.2 0 0 0-.913-.991 3 3 0 0 1-.16-.15c-.768-.741-1.74-1.275-2.705-1.64l-.074-.028a8 8 0 0 0-.79-.261l-.06-.017a1 1 0 0 0-.646.036 4 4 0 0 1-.593.16c-.82.16-1.794.118-2.574-.21-.213-.064-.42-.005-.63.053Z"
    })))
}, xg, Sg, Tg;
function xf() {
    return xf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    xf.apply(null, arguments)
}
var Ag = function(a) {
    return A.createElement("svg", xf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 21,
        fill: "none"
    }, a), xg || (xg = A.createElement("path", {
        fill: "#fff",
        d: "m8.47 1.627 13.099-.055v8.87l-7.214.031v1.597h7.27c.866 0 1.571-.706 1.571-1.572V1.572C23.196.705 22.491 0 21.625 0H8.47c-.867 0-1.572.705-1.572 1.572v2.793h1.59zM24.048 12.446h-9.693v1.859h8.861c.743 0 1.345-.602 1.345-1.345a.513.513 0 0 0-.513-.514"
    })), Sg || (Sg = A.createElement("path", {
        fill: "#fff",
        d: "M11.443 5.586H5.729c-.933 0-1.691.759-1.691 1.691V9.63h.927c.247 0 .48.051.7.132V7.277c0-.035.028-.064.064-.064h5.714c.036 0 .064.029.064.064v7.932H7v2.3h4.443c.933 0 1.692-.76 1.692-1.692v-8.54c0-.932-.76-1.691-1.692-1.691M8.586 16.765a.53.53 0 0 1-.468-.293.5.5 0 0 1-.063-.239.532.532 0 0 1 1.063 0 .5.5 0 0 1-.064.239.53.53 0 0 1-.468.293"
    })), Tg || (Tg = A.createElement("path", {
        fill: "#fff",
        d: "M4.965 10.646H1.019A1.02 1.02 0 0 0 0 11.665v7.475a1.02 1.02 0 0 0 1.019 1.018h3.946a1.02 1.02 0 0 0 1.018-1.018v-7.475a1.02 1.02 0 0 0-1.018-1.019m-3.745 1.22h3.543v6.462H1.22zm1.772 7.797a.43.43 0 0 1-.288-.115.42.42 0 0 1-.143-.315.43.43 0 1 1 .86 0 .43.43 0 0 1-.141.315.43.43 0 0 1-.288.115"
    })))
}, Eg;
function Sf() {
    return Sf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Sf.apply(null, arguments)
}
var wg = function(a) {
    return A.createElement("svg", Sf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 25,
        height: 25,
        fill: "none"
    }, a), Eg || (Eg = A.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M9.375 17.708h6.25m-6.25-4.166h6.25m-6.25-4.167h1.042m3.125-6.25h-5c-1.167 0-1.75 0-2.196.227-.392.2-.71.519-.91.91-.228.446-.228 1.03-.228 2.196v12.084c0 1.166 0 1.75.228 2.195.2.393.518.711.91.91.446.228 1.03.228 2.196.228h7.917c1.166 0 1.75 0 2.195-.227.392-.2.711-.518.91-.91.228-.446.228-1.03.228-2.196V9.375m-6.25-6.25 6.25 6.25m-6.25-6.25v4.583c0 .584 0 .875.113 1.098.1.196.26.356.456.455.222.114.514.114 1.098.114h4.583"
    })))
}, _g;
function Tf() {
    return Tf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Tf.apply(null, arguments)
}
var zg = function(a) {
    return A.createElement("svg", Tf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 22,
        height: 22,
        fill: "none"
    }, a), _g || (_g = A.createElement("path", {
        stroke: "#F3F3F3",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 3,
        d: "M19.25 4.583c0 1.52-3.694 2.75-8.25 2.75s-8.25-1.23-8.25-2.75m16.5 0c0-1.518-3.694-2.75-8.25-2.75s-8.25 1.232-8.25 2.75m16.5 0v12.834c0 1.521-3.667 2.75-8.25 2.75s-8.25-1.229-8.25-2.75V4.583M19.25 11c0 1.522-3.667 2.75-8.25 2.75S2.75 12.522 2.75 11"
    })))
};
function T3() {
    const t = gn()
      , a = hs()
      , [r] = h3()
      , s = A.useRef(null)
      , [o,c] = A.useState({
        left: 0,
        width: 0
    })
      , [f,h] = A.useState(!1)
      , p = [{
        label: "Сервера",
        iconActive: x.jsx(zg, {}),
        iconInactive: x.jsx(zg, {}),
        path: "/servers"
    }, {
        label: "Устройства",
        iconActive: x.jsx(Ag, {}),
        iconInactive: x.jsx(Ag, {}),
        path: "/devices"
    }, {
        label: "Профиль",
        iconActive: x.jsx(bg, {}),
        iconInactive: x.jsx(bg, {}),
        path: "/"
    }, {
        label: "Инструкция",
        iconActive: x.jsx(wg, {}),
        iconInactive: x.jsx(wg, {}),
        path: "/instruction"
    }]
      , m = y => y.path === "/" ? t.pathname === "/" || t.pathname.startsWith("/folder") : t.pathname === y.path;
    return A.useEffect( () => {
        const y = s.current;
        if (!y)
            return;
        const v = p.findIndex(M => m(M));
        if (v === -1)
            return;
        const T = y.querySelectorAll("button")[v];
        T && c({
            left: T.offsetLeft,
            width: T.offsetWidth
        })
    }
    , [t.pathname]),
    A.useEffect( () => {
        h(!0);
        const y = setTimeout( () => h(!1), 180);
        return () => clearTimeout(y)
    }
    , [t.pathname]),
    x.jsx("div", {
        className: "fixed left-4 right-4 z-50",
        style: {
            bottom: "calc(1rem + var(--safe-area-inset-bottom))"
        },
        children: x.jsxs("nav", {
            ref: s,
            className: `
         motion-fade-up relative flex rounded-[5rem] shadow-md bg-black/10 backdrop-blur-sm border border-white/20 h-20 px-2 transition-transform duration-200 ${f ? "scale-[1.02]" : "scale-100"}`,
            children: [x.jsx("div", {
                className: "absolute top-2 bottom-2 bg-white/24 border border-white/45 rounded-[5rem] transition-all duration-300 z-0",
                style: {
                    left: o.left,
                    width: o.width
                }
            }), p.map(y => x.jsx(S3, {
                label: y.label,
                iconActive: y.iconActive,
                iconInactive: y.iconInactive,
                active: m(y),
                onClick: () => a(`${y.path}?${r.toString()}`)
            }, y.path))]
        })
    })
}
const ud = A.createContext({});
function cd(t) {
    const a = A.useRef(null);
    return a.current === null && (a.current = t()),
    a.current
}
const fd = typeof window < "u"
  , Xv = fd ? A.useLayoutEffect : A.useEffect
  , go = A.createContext(null);
function dd(t, a) {
    t.indexOf(a) === -1 && t.push(a)
}
function hd(t, a) {
    const r = t.indexOf(a);
    r > -1 && t.splice(r, 1)
}
const Vn = (t, a, r) => r > a ? a : r < t ? t : r;
let md = () => {}
;
const Bn = {}
  , Kv = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
function Qv(t) {
    return typeof t == "object" && t !== null
}
const Fv = t => /^0[^.\s]+$/u.test(t);
function pd(t) {
    let a;
    return () => (a === void 0 && (a = t()),
    a)
}
const It = t => t
  , A3 = (t, a) => r => a(t(r))
  , ps = (...t) => t.reduce(A3)
  , ns = (t, a, r) => {
    const s = a - t;
    return s === 0 ? 1 : (r - t) / s
}
;
class gd {
    constructor() {
        this.subscriptions = []
    }
    add(a) {
        return dd(this.subscriptions, a),
        () => hd(this.subscriptions, a)
    }
    notify(a, r, s) {
        const o = this.subscriptions.length;
        if (o)
            if (o === 1)
                this.subscriptions[0](a, r, s);
            else
                for (let c = 0; c < o; c++) {
                    const f = this.subscriptions[c];
                    f && f(a, r, s)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const hn = t => t * 1e3
  , Jt = t => t / 1e3;
function Jv(t, a) {
    return a ? t * (1e3 / a) : 0
}
const Iv = (t, a, r) => (((1 - 3 * r + 3 * a) * t + (3 * r - 6 * a)) * t + 3 * a) * t
  , E3 = 1e-7
  , w3 = 12;
function _3(t, a, r, s, o) {
    let c, f, h = 0;
    do
        f = a + (r - a) / 2,
        c = Iv(f, s, o) - t,
        c > 0 ? r = f : a = f;
    while (Math.abs(c) > E3 && ++h < w3);
    return f
}
function gs(t, a, r, s) {
    if (t === a && r === s)
        return It;
    const o = c => _3(c, 0, 1, t, r);
    return c => c === 0 || c === 1 ? c : Iv(o(c), a, s)
}
const Wv = t => a => a <= .5 ? t(2 * a) / 2 : (2 - t(2 * (1 - a))) / 2
  , e1 = t => a => 1 - t(1 - a)
  , t1 = gs(.33, 1.53, .69, .99)
  , yd = e1(t1)
  , n1 = Wv(yd)
  , a1 = t => (t *= 2) < 1 ? .5 * yd(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
  , vd = t => 1 - Math.sin(Math.acos(t))
  , i1 = e1(vd)
  , r1 = Wv(vd)
  , z3 = gs(.42, 0, 1, 1)
  , D3 = gs(0, 0, .58, 1)
  , s1 = gs(.42, 0, .58, 1)
  , C3 = t => Array.isArray(t) && typeof t[0] != "number"
  , l1 = t => Array.isArray(t) && typeof t[0] == "number"
  , R3 = {
    linear: It,
    easeIn: z3,
    easeInOut: s1,
    easeOut: D3,
    circIn: vd,
    circInOut: r1,
    circOut: i1,
    backIn: yd,
    backInOut: n1,
    backOut: t1,
    anticipate: a1
}
  , O3 = t => typeof t == "string"
  , Dg = t => {
    if (l1(t)) {
        md(t.length === 4);
        const [a,r,s,o] = t;
        return gs(a, r, s, o)
    } else if (O3(t))
        return R3[t];
    return t
}
  , kl = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function M3(t, a) {
    let r = new Set
      , s = new Set
      , o = !1
      , c = !1;
    const f = new WeakSet;
    let h = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function p(y) {
        f.has(y) && (m.schedule(y),
        t()),
        y(h)
    }
    const m = {
        schedule: (y, v=!1, S=!1) => {
            const M = S && o ? r : s;
            return v && f.add(y),
            M.has(y) || M.add(y),
            y
        }
        ,
        cancel: y => {
            s.delete(y),
            f.delete(y)
        }
        ,
        process: y => {
            if (h = y,
            o) {
                c = !0;
                return
            }
            o = !0,
            [r,s] = [s, r],
            r.forEach(p),
            r.clear(),
            o = !1,
            c && (c = !1,
            m.process(y))
        }
    };
    return m
}
const j3 = 40;
function o1(t, a) {
    let r = !1
      , s = !0;
    const o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , c = () => r = !0
      , f = kl.reduce( (U, Y) => (U[Y] = M3(c),
    U), {})
      , {setup: h, read: p, resolveKeyframes: m, preUpdate: y, update: v, preRender: S, render: T, postRender: M} = f
      , D = () => {
        const U = Bn.useManualTiming ? o.timestamp : performance.now();
        r = !1,
        Bn.useManualTiming || (o.delta = s ? 1e3 / 60 : Math.max(Math.min(U - o.timestamp, j3), 1)),
        o.timestamp = U,
        o.isProcessing = !0,
        h.process(o),
        p.process(o),
        m.process(o),
        y.process(o),
        v.process(o),
        S.process(o),
        T.process(o),
        M.process(o),
        o.isProcessing = !1,
        r && a && (s = !1,
        t(D))
    }
      , N = () => {
        r = !0,
        s = !0,
        o.isProcessing || t(D)
    }
    ;
    return {
        schedule: kl.reduce( (U, Y) => {
            const $ = f[Y];
            return U[Y] = (I, X=!1, F=!1) => (r || N(),
            $.schedule(I, X, F)),
            U
        }
        , {}),
        cancel: U => {
            for (let Y = 0; Y < kl.length; Y++)
                f[kl[Y]].cancel(U)
        }
        ,
        state: o,
        steps: f
    }
}
const {schedule: Ue, cancel: ha, state: ut, steps: Ic} = o1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : It, !0);
let Fl;
function N3() {
    Fl = void 0
}
const zt = {
    now: () => (Fl === void 0 && zt.set(ut.isProcessing || Bn.useManualTiming ? ut.timestamp : performance.now()),
    Fl),
    set: t => {
        Fl = t,
        queueMicrotask(N3)
    }
}
  , u1 = t => a => typeof a == "string" && a.startsWith(t)
  , bd = u1("--")
  , U3 = u1("var(--")
  , xd = t => U3(t) ? L3.test(t.split("/*")[0].trim()) : !1
  , L3 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , $i = {
    test: t => typeof t == "number",
    parse: parseFloat,
    transform: t => t
}
  , as = {
    ...$i,
    transform: t => Vn(0, 1, t)
}
  , Zl = {
    ...$i,
    default: 1
}
  , Fr = t => Math.round(t * 1e5) / 1e5
  , Sd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function V3(t) {
    return t == null
}
const B3 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Td = (t, a) => r => !!(typeof r == "string" && B3.test(r) && r.startsWith(t) || a && !V3(r) && Object.prototype.hasOwnProperty.call(r, a))
  , c1 = (t, a, r) => s => {
    if (typeof s != "string")
        return s;
    const [o,c,f,h] = s.match(Sd);
    return {
        [t]: parseFloat(o),
        [a]: parseFloat(c),
        [r]: parseFloat(f),
        alpha: h !== void 0 ? parseFloat(h) : 1
    }
}
  , k3 = t => Vn(0, 255, t)
  , Wc = {
    ...$i,
    transform: t => Math.round(k3(t))
}
  , ka = {
    test: Td("rgb", "red"),
    parse: c1("red", "green", "blue"),
    transform: ({red: t, green: a, blue: r, alpha: s=1}) => "rgba(" + Wc.transform(t) + ", " + Wc.transform(a) + ", " + Wc.transform(r) + ", " + Fr(as.transform(s)) + ")"
};
function Z3(t) {
    let a = ""
      , r = ""
      , s = ""
      , o = "";
    return t.length > 5 ? (a = t.substring(1, 3),
    r = t.substring(3, 5),
    s = t.substring(5, 7),
    o = t.substring(7, 9)) : (a = t.substring(1, 2),
    r = t.substring(2, 3),
    s = t.substring(3, 4),
    o = t.substring(4, 5),
    a += a,
    r += r,
    s += s,
    o += o),
    {
        red: parseInt(a, 16),
        green: parseInt(r, 16),
        blue: parseInt(s, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const Af = {
    test: Td("#"),
    parse: Z3,
    transform: ka.transform
}
  , ys = t => ({
    test: a => typeof a == "string" && a.endsWith(t) && a.split(" ").length === 1,
    parse: parseFloat,
    transform: a => `${a}${t}`
})
  , fa = ys("deg")
  , mn = ys("%")
  , re = ys("px")
  , H3 = ys("vh")
  , q3 = ys("vw")
  , Cg = {
    ...mn,
    parse: t => mn.parse(t) / 100,
    transform: t => mn.transform(t * 100)
}
  , ji = {
    test: Td("hsl", "hue"),
    parse: c1("hue", "saturation", "lightness"),
    transform: ({hue: t, saturation: a, lightness: r, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + mn.transform(Fr(a)) + ", " + mn.transform(Fr(r)) + ", " + Fr(as.transform(s)) + ")"
}
  , Je = {
    test: t => ka.test(t) || Af.test(t) || ji.test(t),
    parse: t => ka.test(t) ? ka.parse(t) : ji.test(t) ? ji.parse(t) : Af.parse(t),
    transform: t => typeof t == "string" ? t : t.hasOwnProperty("red") ? ka.transform(t) : ji.transform(t),
    getAnimatableNone: t => {
        const a = Je.parse(t);
        return a.alpha = 0,
        Je.transform(a)
    }
}
  , P3 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Y3(t) {
    return isNaN(t) && typeof t == "string" && (t.match(Sd)?.length || 0) + (t.match(P3)?.length || 0) > 0
}
const f1 = "number"
  , d1 = "color"
  , G3 = "var"
  , $3 = "var("
  , Rg = "${}"
  , X3 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function is(t) {
    const a = t.toString()
      , r = []
      , s = {
        color: [],
        number: [],
        var: []
    }
      , o = [];
    let c = 0;
    const h = a.replace(X3, p => (Je.test(p) ? (s.color.push(c),
    o.push(d1),
    r.push(Je.parse(p))) : p.startsWith($3) ? (s.var.push(c),
    o.push(G3),
    r.push(p)) : (s.number.push(c),
    o.push(f1),
    r.push(parseFloat(p))),
    ++c,
    Rg)).split(Rg);
    return {
        values: r,
        split: h,
        indexes: s,
        types: o
    }
}
function h1(t) {
    return is(t).values
}
function m1(t) {
    const {split: a, types: r} = is(t)
      , s = a.length;
    return o => {
        let c = "";
        for (let f = 0; f < s; f++)
            if (c += a[f],
            o[f] !== void 0) {
                const h = r[f];
                h === f1 ? c += Fr(o[f]) : h === d1 ? c += Je.transform(o[f]) : c += o[f]
            }
        return c
    }
}
const K3 = t => typeof t == "number" ? 0 : Je.test(t) ? Je.getAnimatableNone(t) : t;
function Q3(t) {
    const a = h1(t);
    return m1(t)(a.map(K3))
}
const ma = {
    test: Y3,
    parse: h1,
    createTransformer: m1,
    getAnimatableNone: Q3
};
function ef(t, a, r) {
    return r < 0 && (r += 1),
    r > 1 && (r -= 1),
    r < 1 / 6 ? t + (a - t) * 6 * r : r < 1 / 2 ? a : r < 2 / 3 ? t + (a - t) * (2 / 3 - r) * 6 : t
}
function F3({hue: t, saturation: a, lightness: r, alpha: s}) {
    t /= 360,
    a /= 100,
    r /= 100;
    let o = 0
      , c = 0
      , f = 0;
    if (!a)
        o = c = f = r;
    else {
        const h = r < .5 ? r * (1 + a) : r + a - r * a
          , p = 2 * r - h;
        o = ef(p, h, t + 1 / 3),
        c = ef(p, h, t),
        f = ef(p, h, t - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(c * 255),
        blue: Math.round(f * 255),
        alpha: s
    }
}
function no(t, a) {
    return r => r > 0 ? a : t
}
const Ve = (t, a, r) => t + (a - t) * r
  , tf = (t, a, r) => {
    const s = t * t
      , o = r * (a * a - s) + s;
    return o < 0 ? 0 : Math.sqrt(o)
}
  , J3 = [Af, ka, ji]
  , I3 = t => J3.find(a => a.test(t));
function Og(t) {
    const a = I3(t);
    if (!a)
        return !1;
    let r = a.parse(t);
    return a === ji && (r = F3(r)),
    r
}
const Mg = (t, a) => {
    const r = Og(t)
      , s = Og(a);
    if (!r || !s)
        return no(t, a);
    const o = {
        ...r
    };
    return c => (o.red = tf(r.red, s.red, c),
    o.green = tf(r.green, s.green, c),
    o.blue = tf(r.blue, s.blue, c),
    o.alpha = Ve(r.alpha, s.alpha, c),
    ka.transform(o))
}
  , Ef = new Set(["none", "hidden"]);
function W3(t, a) {
    return Ef.has(t) ? r => r <= 0 ? t : a : r => r >= 1 ? a : t
}
function e4(t, a) {
    return r => Ve(t, a, r)
}
function Ad(t) {
    return typeof t == "number" ? e4 : typeof t == "string" ? xd(t) ? no : Je.test(t) ? Mg : a4 : Array.isArray(t) ? p1 : typeof t == "object" ? Je.test(t) ? Mg : t4 : no
}
function p1(t, a) {
    const r = [...t]
      , s = r.length
      , o = t.map( (c, f) => Ad(c)(c, a[f]));
    return c => {
        for (let f = 0; f < s; f++)
            r[f] = o[f](c);
        return r
    }
}
function t4(t, a) {
    const r = {
        ...t,
        ...a
    }
      , s = {};
    for (const o in r)
        t[o] !== void 0 && a[o] !== void 0 && (s[o] = Ad(t[o])(t[o], a[o]));
    return o => {
        for (const c in s)
            r[c] = s[c](o);
        return r
    }
}
function n4(t, a) {
    const r = []
      , s = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let o = 0; o < a.values.length; o++) {
        const c = a.types[o]
          , f = t.indexes[c][s[c]]
          , h = t.values[f] ?? 0;
        r[o] = h,
        s[c]++
    }
    return r
}
const a4 = (t, a) => {
    const r = ma.createTransformer(a)
      , s = is(t)
      , o = is(a);
    return s.indexes.var.length === o.indexes.var.length && s.indexes.color.length === o.indexes.color.length && s.indexes.number.length >= o.indexes.number.length ? Ef.has(t) && !o.values.length || Ef.has(a) && !s.values.length ? W3(t, a) : ps(p1(n4(s, o), o.values), r) : no(t, a)
}
;
function g1(t, a, r) {
    return typeof t == "number" && typeof a == "number" && typeof r == "number" ? Ve(t, a, r) : Ad(t)(t, a)
}
const i4 = t => {
    const a = ({timestamp: r}) => t(r);
    return {
        start: (r=!0) => Ue.update(a, r),
        stop: () => ha(a),
        now: () => ut.isProcessing ? ut.timestamp : zt.now()
    }
}
  , y1 = (t, a, r=10) => {
    let s = "";
    const o = Math.max(Math.round(a / r), 2);
    for (let c = 0; c < o; c++)
        s += Math.round(t(c / (o - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${s.substring(0, s.length - 2)})`
}
  , ao = 2e4;
function Ed(t) {
    let a = 0;
    const r = 50;
    let s = t.next(a);
    for (; !s.done && a < ao; )
        a += r,
        s = t.next(a);
    return a >= ao ? 1 / 0 : a
}
function r4(t, a=100, r) {
    const s = r({
        ...t,
        keyframes: [0, a]
    })
      , o = Math.min(Ed(s), ao);
    return {
        type: "keyframes",
        ease: c => s.next(o * c).value / a,
        duration: Jt(o)
    }
}
const s4 = 5;
function v1(t, a, r) {
    const s = Math.max(a - s4, 0);
    return Jv(r - t(s), a - s)
}
const qe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , nf = .001;
function l4({duration: t=qe.duration, bounce: a=qe.bounce, velocity: r=qe.velocity, mass: s=qe.mass}) {
    let o, c, f = 1 - a;
    f = Vn(qe.minDamping, qe.maxDamping, f),
    t = Vn(qe.minDuration, qe.maxDuration, Jt(t)),
    f < 1 ? (o = m => {
        const y = m * f
          , v = y * t
          , S = y - r
          , T = wf(m, f)
          , M = Math.exp(-v);
        return nf - S / T * M
    }
    ,
    c = m => {
        const v = m * f * t
          , S = v * r + r
          , T = Math.pow(f, 2) * Math.pow(m, 2) * t
          , M = Math.exp(-v)
          , D = wf(Math.pow(m, 2), f);
        return (-o(m) + nf > 0 ? -1 : 1) * ((S - T) * M) / D
    }
    ) : (o = m => {
        const y = Math.exp(-m * t)
          , v = (m - r) * t + 1;
        return -nf + y * v
    }
    ,
    c = m => {
        const y = Math.exp(-m * t)
          , v = (r - m) * (t * t);
        return y * v
    }
    );
    const h = 5 / t
      , p = u4(o, c, h);
    if (t = hn(t),
    isNaN(p))
        return {
            stiffness: qe.stiffness,
            damping: qe.damping,
            duration: t
        };
    {
        const m = Math.pow(p, 2) * s;
        return {
            stiffness: m,
            damping: f * 2 * Math.sqrt(s * m),
            duration: t
        }
    }
}
const o4 = 12;
function u4(t, a, r) {
    let s = r;
    for (let o = 1; o < o4; o++)
        s = s - t(s) / a(s);
    return s
}
function wf(t, a) {
    return t * Math.sqrt(1 - a * a)
}
const c4 = ["duration", "bounce"]
  , f4 = ["stiffness", "damping", "mass"];
function jg(t, a) {
    return a.some(r => t[r] !== void 0)
}
function d4(t) {
    let a = {
        velocity: qe.velocity,
        stiffness: qe.stiffness,
        damping: qe.damping,
        mass: qe.mass,
        isResolvedFromDuration: !1,
        ...t
    };
    if (!jg(t, f4) && jg(t, c4))
        if (t.visualDuration) {
            const r = t.visualDuration
              , s = 2 * Math.PI / (r * 1.2)
              , o = s * s
              , c = 2 * Vn(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(o);
            a = {
                ...a,
                mass: qe.mass,
                stiffness: o,
                damping: c
            }
        } else {
            const r = l4(t);
            a = {
                ...a,
                ...r,
                mass: qe.mass
            },
            a.isResolvedFromDuration = !0
        }
    return a
}
function io(t=qe.visualDuration, a=qe.bounce) {
    const r = typeof t != "object" ? {
        visualDuration: t,
        keyframes: [0, 1],
        bounce: a
    } : t;
    let {restSpeed: s, restDelta: o} = r;
    const c = r.keyframes[0]
      , f = r.keyframes[r.keyframes.length - 1]
      , h = {
        done: !1,
        value: c
    }
      , {stiffness: p, damping: m, mass: y, duration: v, velocity: S, isResolvedFromDuration: T} = d4({
        ...r,
        velocity: -Jt(r.velocity || 0)
    })
      , M = S || 0
      , D = m / (2 * Math.sqrt(p * y))
      , N = f - c
      , V = Jt(Math.sqrt(p / y))
      , R = Math.abs(N) < 5;
    s || (s = R ? qe.restSpeed.granular : qe.restSpeed.default),
    o || (o = R ? qe.restDelta.granular : qe.restDelta.default);
    let U;
    if (D < 1) {
        const $ = wf(V, D);
        U = I => {
            const X = Math.exp(-D * V * I);
            return f - X * ((M + D * V * N) / $ * Math.sin($ * I) + N * Math.cos($ * I))
        }
    } else if (D === 1)
        U = $ => f - Math.exp(-V * $) * (N + (M + V * N) * $);
    else {
        const $ = V * Math.sqrt(D * D - 1);
        U = I => {
            const X = Math.exp(-D * V * I)
              , F = Math.min($ * I, 300);
            return f - X * ((M + D * V * N) * Math.sinh(F) + $ * N * Math.cosh(F)) / $
        }
    }
    const Y = {
        calculatedDuration: T && v || null,
        next: $ => {
            const I = U($);
            if (T)
                h.done = $ >= v;
            else {
                let X = $ === 0 ? M : 0;
                D < 1 && (X = $ === 0 ? hn(M) : v1(U, $, I));
                const F = Math.abs(X) <= s
                  , Q = Math.abs(f - I) <= o;
                h.done = F && Q
            }
            return h.value = h.done ? f : I,
            h
        }
        ,
        toString: () => {
            const $ = Math.min(Ed(Y), ao)
              , I = y1(X => Y.next($ * X).value, $, 30);
            return $ + "ms " + I
        }
        ,
        toTransition: () => {}
    };
    return Y
}
io.applyToOptions = t => {
    const a = r4(t, 100, io);
    return t.ease = a.ease,
    t.duration = hn(a.duration),
    t.type = "keyframes",
    t
}
;
function _f({keyframes: t, velocity: a=0, power: r=.8, timeConstant: s=325, bounceDamping: o=10, bounceStiffness: c=500, modifyTarget: f, min: h, max: p, restDelta: m=.5, restSpeed: y}) {
    const v = t[0]
      , S = {
        done: !1,
        value: v
    }
      , T = F => h !== void 0 && F < h || p !== void 0 && F > p
      , M = F => h === void 0 ? p : p === void 0 || Math.abs(h - F) < Math.abs(p - F) ? h : p;
    let D = r * a;
    const N = v + D
      , V = f === void 0 ? N : f(N);
    V !== N && (D = V - v);
    const R = F => -D * Math.exp(-F / s)
      , U = F => V + R(F)
      , Y = F => {
        const Q = R(F)
          , se = U(F);
        S.done = Math.abs(Q) <= m,
        S.value = S.done ? V : se
    }
    ;
    let $, I;
    const X = F => {
        T(S.value) && ($ = F,
        I = io({
            keyframes: [S.value, M(S.value)],
            velocity: v1(U, F, S.value),
            damping: o,
            stiffness: c,
            restDelta: m,
            restSpeed: y
        }))
    }
    ;
    return X(0),
    {
        calculatedDuration: null,
        next: F => {
            let Q = !1;
            return !I && $ === void 0 && (Q = !0,
            Y(F),
            X(F)),
            $ !== void 0 && F >= $ ? I.next(F - $) : (!Q && Y(F),
            S)
        }
    }
}
function h4(t, a, r) {
    const s = []
      , o = r || Bn.mix || g1
      , c = t.length - 1;
    for (let f = 0; f < c; f++) {
        let h = o(t[f], t[f + 1]);
        if (a) {
            const p = Array.isArray(a) ? a[f] || It : a;
            h = ps(p, h)
        }
        s.push(h)
    }
    return s
}
function m4(t, a, {clamp: r=!0, ease: s, mixer: o}={}) {
    const c = t.length;
    if (md(c === a.length),
    c === 1)
        return () => a[0];
    if (c === 2 && a[0] === a[1])
        return () => a[1];
    const f = t[0] === t[1];
    t[0] > t[c - 1] && (t = [...t].reverse(),
    a = [...a].reverse());
    const h = h4(a, s, o)
      , p = h.length
      , m = y => {
        if (f && y < t[0])
            return a[0];
        let v = 0;
        if (p > 1)
            for (; v < t.length - 2 && !(y < t[v + 1]); v++)
                ;
        const S = ns(t[v], t[v + 1], y);
        return h[v](S)
    }
    ;
    return r ? y => m(Vn(t[0], t[c - 1], y)) : m
}
function p4(t, a) {
    const r = t[t.length - 1];
    for (let s = 1; s <= a; s++) {
        const o = ns(0, a, s);
        t.push(Ve(r, 1, o))
    }
}
function g4(t) {
    const a = [0];
    return p4(a, t.length - 1),
    a
}
function y4(t, a) {
    return t.map(r => r * a)
}
function v4(t, a) {
    return t.map( () => a || s1).splice(0, t.length - 1)
}
function Jr({duration: t=300, keyframes: a, times: r, ease: s="easeInOut"}) {
    const o = C3(s) ? s.map(Dg) : Dg(s)
      , c = {
        done: !1,
        value: a[0]
    }
      , f = y4(r && r.length === a.length ? r : g4(a), t)
      , h = m4(f, a, {
        ease: Array.isArray(o) ? o : v4(a, o)
    });
    return {
        calculatedDuration: t,
        next: p => (c.value = h(p),
        c.done = p >= t,
        c)
    }
}
const b4 = t => t !== null;
function wd(t, {repeat: a, repeatType: r="loop"}, s, o=1) {
    const c = t.filter(b4)
      , h = o < 0 || a && r !== "loop" && a % 2 === 1 ? 0 : c.length - 1;
    return !h || s === void 0 ? c[h] : s
}
const x4 = {
    decay: _f,
    inertia: _f,
    tween: Jr,
    keyframes: Jr,
    spring: io
};
function b1(t) {
    typeof t.type == "string" && (t.type = x4[t.type])
}
class _d {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(a => {
            this.resolve = a
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(a, r) {
        return this.finished.then(a, r)
    }
}
const S4 = t => t / 100;
class zd extends _d {
    constructor(a) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            const {motionValue: r} = this.options;
            r && r.updatedAt !== zt.now() && this.tick(zt.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
        }
        ,
        this.options = a,
        this.initAnimation(),
        this.play(),
        a.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: a} = this;
        b1(a);
        const {type: r=Jr, repeat: s=0, repeatDelay: o=0, repeatType: c, velocity: f=0} = a;
        let {keyframes: h} = a;
        const p = r || Jr;
        p !== Jr && typeof h[0] != "number" && (this.mixKeyframes = ps(S4, g1(h[0], h[1])),
        h = [0, 100]);
        const m = p({
            ...a,
            keyframes: h
        });
        c === "mirror" && (this.mirroredGenerator = p({
            ...a,
            keyframes: [...h].reverse(),
            velocity: -f
        })),
        m.calculatedDuration === null && (m.calculatedDuration = Ed(m));
        const {calculatedDuration: y} = m;
        this.calculatedDuration = y,
        this.resolvedDuration = y + o,
        this.totalDuration = this.resolvedDuration * (s + 1) - o,
        this.generator = m
    }
    updateTime(a) {
        const r = Math.round(a - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = r
    }
    tick(a, r=!1) {
        const {generator: s, totalDuration: o, mixKeyframes: c, mirroredGenerator: f, resolvedDuration: h, calculatedDuration: p} = this;
        if (this.startTime === null)
            return s.next(0);
        const {delay: m=0, keyframes: y, repeat: v, repeatType: S, repeatDelay: T, type: M, onUpdate: D, finalKeyframe: N} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, a) : this.speed < 0 && (this.startTime = Math.min(a - o / this.speed, this.startTime)),
        r ? this.currentTime = a : this.updateTime(a);
        const V = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
          , R = this.playbackSpeed >= 0 ? V < 0 : V > o;
        this.currentTime = Math.max(V, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = o);
        let U = this.currentTime
          , Y = s;
        if (v) {
            const F = Math.min(this.currentTime, o) / h;
            let Q = Math.floor(F)
              , se = F % 1;
            !se && F >= 1 && (se = 1),
            se === 1 && Q--,
            Q = Math.min(Q, v + 1),
            !!(Q % 2) && (S === "reverse" ? (se = 1 - se,
            T && (se -= T / h)) : S === "mirror" && (Y = f)),
            U = Vn(0, 1, se) * h
        }
        const $ = R ? {
            done: !1,
            value: y[0]
        } : Y.next(U);
        c && ($.value = c($.value));
        let {done: I} = $;
        !R && p !== null && (I = this.playbackSpeed >= 0 ? this.currentTime >= o : this.currentTime <= 0);
        const X = this.holdTime === null && (this.state === "finished" || this.state === "running" && I);
        return X && M !== _f && ($.value = wd(y, this.options, N, this.speed)),
        D && D($.value),
        X && this.finish(),
        $
    }
    then(a, r) {
        return this.finished.then(a, r)
    }
    get duration() {
        return Jt(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: a=0} = this.options || {};
        return this.duration + Jt(a)
    }
    get time() {
        return Jt(this.currentTime)
    }
    set time(a) {
        a = hn(a),
        this.currentTime = a,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = a : this.driver && (this.startTime = this.driver.now() - a / this.playbackSpeed),
        this.driver?.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(a) {
        this.updateTime(zt.now());
        const r = this.playbackSpeed !== a;
        this.playbackSpeed = a,
        r && (this.time = Jt(this.currentTime))
    }
    play() {
        if (this.isStopped)
            return;
        const {driver: a=i4, startTime: r} = this.options;
        this.driver || (this.driver = a(o => this.tick(o))),
        this.options.onPlay?.();
        const s = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = s) : this.holdTime !== null ? this.startTime = s - this.holdTime : this.startTime || (this.startTime = r ?? s),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(zt.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        this.options.onComplete?.()
    }
    cancel() {
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        this.options.onCancel?.()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(a) {
        return this.startTime = 0,
        this.tick(a, !0)
    }
    attachTimeline(a) {
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        this.driver?.stop(),
        a.observe(this)
    }
}
function T4(t) {
    for (let a = 1; a < t.length; a++)
        t[a] ?? (t[a] = t[a - 1])
}
const Za = t => t * 180 / Math.PI
  , zf = t => {
    const a = Za(Math.atan2(t[1], t[0]));
    return Df(a)
}
  , A4 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
    rotate: zf,
    rotateZ: zf,
    skewX: t => Za(Math.atan(t[1])),
    skewY: t => Za(Math.atan(t[2])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
}
  , Df = t => (t = t % 360,
t < 0 && (t += 360),
t)
  , Ng = zf
  , Ug = t => Math.sqrt(t[0] * t[0] + t[1] * t[1])
  , Lg = t => Math.sqrt(t[4] * t[4] + t[5] * t[5])
  , E4 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Ug,
    scaleY: Lg,
    scale: t => (Ug(t) + Lg(t)) / 2,
    rotateX: t => Df(Za(Math.atan2(t[6], t[5]))),
    rotateY: t => Df(Za(Math.atan2(-t[2], t[0]))),
    rotateZ: Ng,
    rotate: Ng,
    skewX: t => Za(Math.atan(t[4])),
    skewY: t => Za(Math.atan(t[1])),
    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
};
function Cf(t) {
    return t.includes("scale") ? 1 : 0
}
function Rf(t, a) {
    if (!t || t === "none")
        return Cf(a);
    const r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let s, o;
    if (r)
        s = E4,
        o = r;
    else {
        const h = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        s = A4,
        o = h
    }
    if (!o)
        return Cf(a);
    const c = s[a]
      , f = o[1].split(",").map(_4);
    return typeof c == "function" ? c(f) : f[c]
}
const w4 = (t, a) => {
    const {transform: r="none"} = getComputedStyle(t);
    return Rf(r, a)
}
;
function _4(t) {
    return parseFloat(t.trim())
}
const Xi = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Ki = new Set(Xi)
  , Vg = t => t === $i || t === re
  , z4 = new Set(["x", "y", "z"])
  , D4 = Xi.filter(t => !z4.has(t));
function C4(t) {
    const a = [];
    return D4.forEach(r => {
        const s = t.getValue(r);
        s !== void 0 && (a.push([r, s.get()]),
        s.set(r.startsWith("scale") ? 1 : 0))
    }
    ),
    a
}
const Ha = {
    width: ({x: t}, {paddingLeft: a="0", paddingRight: r="0"}) => t.max - t.min - parseFloat(a) - parseFloat(r),
    height: ({y: t}, {paddingTop: a="0", paddingBottom: r="0"}) => t.max - t.min - parseFloat(a) - parseFloat(r),
    top: (t, {top: a}) => parseFloat(a),
    left: (t, {left: a}) => parseFloat(a),
    bottom: ({y: t}, {top: a}) => parseFloat(a) + (t.max - t.min),
    right: ({x: t}, {left: a}) => parseFloat(a) + (t.max - t.min),
    x: (t, {transform: a}) => Rf(a, "x"),
    y: (t, {transform: a}) => Rf(a, "y")
};
Ha.translateX = Ha.x;
Ha.translateY = Ha.y;
const qa = new Set;
let Of = !1
  , Mf = !1
  , jf = !1;
function x1() {
    if (Mf) {
        const t = Array.from(qa).filter(s => s.needsMeasurement)
          , a = new Set(t.map(s => s.element))
          , r = new Map;
        a.forEach(s => {
            const o = C4(s);
            o.length && (r.set(s, o),
            s.render())
        }
        ),
        t.forEach(s => s.measureInitialState()),
        a.forEach(s => {
            s.render();
            const o = r.get(s);
            o && o.forEach( ([c,f]) => {
                s.getValue(c)?.set(f)
            }
            )
        }
        ),
        t.forEach(s => s.measureEndState()),
        t.forEach(s => {
            s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY)
        }
        )
    }
    Mf = !1,
    Of = !1,
    qa.forEach(t => t.complete(jf)),
    qa.clear()
}
function S1() {
    qa.forEach(t => {
        t.readKeyframes(),
        t.needsMeasurement && (Mf = !0)
    }
    )
}
function R4() {
    jf = !0,
    S1(),
    x1(),
    jf = !1
}
class Dd {
    constructor(a, r, s, o, c, f=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...a],
        this.onComplete = r,
        this.name = s,
        this.motionValue = o,
        this.element = c,
        this.isAsync = f
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (qa.add(this),
        Of || (Of = !0,
        Ue.read(S1),
        Ue.resolveKeyframes(x1))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: a, name: r, element: s, motionValue: o} = this;
        if (a[0] === null) {
            const c = o?.get()
              , f = a[a.length - 1];
            if (c !== void 0)
                a[0] = c;
            else if (s && r) {
                const h = s.readValue(r, f);
                h != null && (a[0] = h)
            }
            a[0] === void 0 && (a[0] = f),
            o && c === void 0 && o.set(a[0])
        }
        T4(a)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(a=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, a),
        qa.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (qa.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const O4 = t => t.startsWith("--");
function M4(t, a, r) {
    O4(a) ? t.style.setProperty(a, r) : t.style[a] = r
}
const j4 = pd( () => window.ScrollTimeline !== void 0)
  , N4 = {};
function U4(t, a) {
    const r = pd(t);
    return () => N4[a] ?? r()
}
const T1 = U4( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Kr = ([t,a,r,s]) => `cubic-bezier(${t}, ${a}, ${r}, ${s})`
  , Bg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Kr([0, .65, .55, 1]),
    circOut: Kr([.55, 0, 1, .45]),
    backIn: Kr([.31, .01, .66, -.59]),
    backOut: Kr([.33, 1.53, .69, .99])
};
function A1(t, a) {
    if (t)
        return typeof t == "function" ? T1() ? y1(t, a) : "ease-out" : l1(t) ? Kr(t) : Array.isArray(t) ? t.map(r => A1(r, a) || Bg.easeOut) : Bg[t]
}
function L4(t, a, r, {delay: s=0, duration: o=300, repeat: c=0, repeatType: f="loop", ease: h="easeOut", times: p}={}, m=void 0) {
    const y = {
        [a]: r
    };
    p && (y.offset = p);
    const v = A1(h, o);
    Array.isArray(v) && (y.easing = v);
    const S = {
        delay: s,
        duration: o,
        easing: Array.isArray(v) ? "linear" : v,
        fill: "both",
        iterations: c + 1,
        direction: f === "reverse" ? "alternate" : "normal"
    };
    return m && (S.pseudoElement = m),
    t.animate(y, S)
}
function E1(t) {
    return typeof t == "function" && "applyToOptions" in t
}
function V4({type: t, ...a}) {
    return E1(t) && T1() ? t.applyToOptions(a) : (a.duration ?? (a.duration = 300),
    a.ease ?? (a.ease = "easeOut"),
    a)
}
class B4 extends _d {
    constructor(a) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        !a)
            return;
        const {element: r, name: s, keyframes: o, pseudoElement: c, allowFlatten: f=!1, finalKeyframe: h, onComplete: p} = a;
        this.isPseudoElement = !!c,
        this.allowFlatten = f,
        this.options = a,
        md(typeof a.type != "string");
        const m = V4(a);
        this.animation = L4(r, s, o, m, c),
        m.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !c) {
                const y = wd(o, this.options, h, this.speed);
                this.updateMotionValue ? this.updateMotionValue(y) : M4(r, s, y),
                this.animation.cancel()
            }
            p?.(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.finish?.()
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: a} = this;
        a === "idle" || a === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        this.isPseudoElement || this.animation.commitStyles?.()
    }
    get duration() {
        const a = this.animation.effect?.getComputedTiming?.().duration || 0;
        return Jt(Number(a))
    }
    get iterationDuration() {
        const {delay: a=0} = this.options || {};
        return this.duration + Jt(a)
    }
    get time() {
        return Jt(Number(this.animation.currentTime) || 0)
    }
    set time(a) {
        this.finishedTime = null,
        this.animation.currentTime = hn(a)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(a) {
        a < 0 && (this.finishedTime = null),
        this.animation.playbackRate = a
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return Number(this.animation.startTime)
    }
    set startTime(a) {
        this.animation.startTime = a
    }
    attachTimeline({timeline: a, observe: r}) {
        return this.allowFlatten && this.animation.effect?.updateTiming({
            easing: "linear"
        }),
        this.animation.onfinish = null,
        a && j4() ? (this.animation.timeline = a,
        It) : r(this)
    }
}
const w1 = {
    anticipate: a1,
    backInOut: n1,
    circInOut: r1
};
function k4(t) {
    return t in w1
}
function Z4(t) {
    typeof t.ease == "string" && k4(t.ease) && (t.ease = w1[t.ease])
}
const kg = 10;
class H4 extends B4 {
    constructor(a) {
        Z4(a),
        b1(a),
        super(a),
        a.startTime && (this.startTime = a.startTime),
        this.options = a
    }
    updateMotionValue(a) {
        const {motionValue: r, onUpdate: s, onComplete: o, element: c, ...f} = this.options;
        if (!r)
            return;
        if (a !== void 0) {
            r.set(a);
            return
        }
        const h = new zd({
            ...f,
            autoplay: !1
        })
          , p = hn(this.finishedTime ?? this.time);
        r.setWithVelocity(h.sample(p - kg).value, h.sample(p).value, kg),
        h.stop()
    }
}
const Zg = (t, a) => a === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (ma.test(t) || t === "0") && !t.startsWith("url("));
function q4(t) {
    const a = t[0];
    if (t.length === 1)
        return !0;
    for (let r = 0; r < t.length; r++)
        if (t[r] !== a)
            return !0
}
function P4(t, a, r, s) {
    const o = t[0];
    if (o === null)
        return !1;
    if (a === "display" || a === "visibility")
        return !0;
    const c = t[t.length - 1]
      , f = Zg(o, a)
      , h = Zg(c, a);
    return !f || !h ? !1 : q4(t) || (r === "spring" || E1(r)) && s
}
function Nf(t) {
    t.duration = 0,
    t.type = "keyframes"
}
const Y4 = new Set(["opacity", "clipPath", "filter", "transform"])
  , G4 = pd( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function $4(t) {
    const {motionValue: a, name: r, repeatDelay: s, repeatType: o, damping: c, type: f} = t;
    if (!(a?.owner?.current instanceof HTMLElement))
        return !1;
    const {onUpdate: p, transformTemplate: m} = a.owner.getProps();
    return G4() && r && Y4.has(r) && (r !== "transform" || !m) && !p && !s && o !== "mirror" && c !== 0 && f !== "inertia"
}
const X4 = 40;
class K4 extends _d {
    constructor({autoplay: a=!0, delay: r=0, type: s="keyframes", repeat: o=0, repeatDelay: c=0, repeatType: f="loop", keyframes: h, name: p, motionValue: m, element: y, ...v}) {
        super(),
        this.stop = () => {
            this._animation && (this._animation.stop(),
            this.stopTimeline?.()),
            this.keyframeResolver?.cancel()
        }
        ,
        this.createdAt = zt.now();
        const S = {
            autoplay: a,
            delay: r,
            type: s,
            repeat: o,
            repeatDelay: c,
            repeatType: f,
            name: p,
            motionValue: m,
            element: y,
            ...v
        }
          , T = y?.KeyframeResolver || Dd;
        this.keyframeResolver = new T(h, (M, D, N) => this.onKeyframesResolved(M, D, S, !N),p,m,y),
        this.keyframeResolver?.scheduleResolve()
    }
    onKeyframesResolved(a, r, s, o) {
        this.keyframeResolver = void 0;
        const {name: c, type: f, velocity: h, delay: p, isHandoff: m, onUpdate: y} = s;
        this.resolvedAt = zt.now(),
        P4(a, c, f, h) || ((Bn.instantAnimations || !p) && y?.(wd(a, s, r)),
        a[0] = a[a.length - 1],
        Nf(s),
        s.repeat = 0);
        const S = {
            startTime: o ? this.resolvedAt ? this.resolvedAt - this.createdAt > X4 ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: r,
            ...s,
            keyframes: a
        }
          , T = !m && $4(S) ? new H4({
            ...S,
            element: S.motionValue.owner.current
        }) : new zd(S);
        T.finished.then( () => this.notifyFinished()).catch(It),
        this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = T
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(a, r) {
        return this.finished.finally(a).then( () => {}
        )
    }
    get animation() {
        return this._animation || (this.keyframeResolver?.resume(),
        R4()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(a) {
        this.animation.time = a
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(a) {
        this.animation.speed = a
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(a) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(a) : this.pendingTimeline = a,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        this._animation && this.animation.cancel(),
        this.keyframeResolver?.cancel()
    }
}
const Q4 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function F4(t) {
    const a = Q4.exec(t);
    if (!a)
        return [, ];
    const [,r,s,o] = a;
    return [`--${r ?? s}`, o]
}
function _1(t, a, r=1) {
    const [s,o] = F4(t);
    if (!s)
        return;
    const c = window.getComputedStyle(a).getPropertyValue(s);
    if (c) {
        const f = c.trim();
        return Kv(f) ? parseFloat(f) : f
    }
    return xd(o) ? _1(o, a, r + 1) : o
}
function Cd(t, a) {
    return t?.[a] ?? t?.default ?? t
}
const z1 = new Set(["width", "height", "top", "left", "right", "bottom", ...Xi])
  , J4 = {
    test: t => t === "auto",
    parse: t => t
}
  , D1 = t => a => a.test(t)
  , C1 = [$i, re, mn, fa, q3, H3, J4]
  , Hg = t => C1.find(D1(t));
function I4(t) {
    return typeof t == "number" ? t === 0 : t !== null ? t === "none" || t === "0" || Fv(t) : !0
}
const W4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function eA(t) {
    const [a,r] = t.slice(0, -1).split("(");
    if (a === "drop-shadow")
        return t;
    const [s] = r.match(Sd) || [];
    if (!s)
        return t;
    const o = r.replace(s, "");
    let c = W4.has(a) ? 1 : 0;
    return s !== r && (c *= 100),
    a + "(" + c + o + ")"
}
const tA = /\b([a-z-]*)\(.*?\)/gu
  , Uf = {
    ...ma,
    getAnimatableNone: t => {
        const a = t.match(tA);
        return a ? a.map(eA).join(" ") : t
    }
}
  , qg = {
    ...$i,
    transform: Math.round
}
  , nA = {
    rotate: fa,
    rotateX: fa,
    rotateY: fa,
    rotateZ: fa,
    scale: Zl,
    scaleX: Zl,
    scaleY: Zl,
    scaleZ: Zl,
    skew: fa,
    skewX: fa,
    skewY: fa,
    distance: re,
    translateX: re,
    translateY: re,
    translateZ: re,
    x: re,
    y: re,
    z: re,
    perspective: re,
    transformPerspective: re,
    opacity: as,
    originX: Cg,
    originY: Cg,
    originZ: re
}
  , Rd = {
    borderWidth: re,
    borderTopWidth: re,
    borderRightWidth: re,
    borderBottomWidth: re,
    borderLeftWidth: re,
    borderRadius: re,
    radius: re,
    borderTopLeftRadius: re,
    borderTopRightRadius: re,
    borderBottomRightRadius: re,
    borderBottomLeftRadius: re,
    width: re,
    maxWidth: re,
    height: re,
    maxHeight: re,
    top: re,
    right: re,
    bottom: re,
    left: re,
    padding: re,
    paddingTop: re,
    paddingRight: re,
    paddingBottom: re,
    paddingLeft: re,
    margin: re,
    marginTop: re,
    marginRight: re,
    marginBottom: re,
    marginLeft: re,
    backgroundPositionX: re,
    backgroundPositionY: re,
    ...nA,
    zIndex: qg,
    fillOpacity: as,
    strokeOpacity: as,
    numOctaves: qg
}
  , aA = {
    ...Rd,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: Uf,
    WebkitFilter: Uf
}
  , R1 = t => aA[t];
function O1(t, a) {
    let r = R1(t);
    return r !== Uf && (r = ma),
    r.getAnimatableNone ? r.getAnimatableNone(a) : void 0
}
const iA = new Set(["auto", "none", "0"]);
function rA(t, a, r) {
    let s = 0, o;
    for (; s < t.length && !o; ) {
        const c = t[s];
        typeof c == "string" && !iA.has(c) && is(c).values.length && (o = t[s]),
        s++
    }
    if (o && r)
        for (const c of a)
            t[c] = O1(r, o)
}
class sA extends Dd {
    constructor(a, r, s, o, c) {
        super(a, r, s, o, c, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: a, element: r, name: s} = this;
        if (!r || !r.current)
            return;
        super.readKeyframes();
        for (let p = 0; p < a.length; p++) {
            let m = a[p];
            if (typeof m == "string" && (m = m.trim(),
            xd(m))) {
                const y = _1(m, r.current);
                y !== void 0 && (a[p] = y),
                p === a.length - 1 && (this.finalKeyframe = m)
            }
        }
        if (this.resolveNoneKeyframes(),
        !z1.has(s) || a.length !== 2)
            return;
        const [o,c] = a
          , f = Hg(o)
          , h = Hg(c);
        if (f !== h)
            if (Vg(f) && Vg(h))
                for (let p = 0; p < a.length; p++) {
                    const m = a[p];
                    typeof m == "string" && (a[p] = parseFloat(m))
                }
            else
                Ha[s] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: a, name: r} = this
          , s = [];
        for (let o = 0; o < a.length; o++)
            (a[o] === null || I4(a[o])) && s.push(o);
        s.length && rA(a, s, r)
    }
    measureInitialState() {
        const {element: a, unresolvedKeyframes: r, name: s} = this;
        if (!a || !a.current)
            return;
        s === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Ha[s](a.measureViewportBox(), window.getComputedStyle(a.current)),
        r[0] = this.measuredOrigin;
        const o = r[r.length - 1];
        o !== void 0 && a.getValue(s, o).jump(o, !1)
    }
    measureEndState() {
        const {element: a, name: r, unresolvedKeyframes: s} = this;
        if (!a || !a.current)
            return;
        const o = a.getValue(r);
        o && o.jump(this.measuredOrigin, !1);
        const c = s.length - 1
          , f = s[c];
        s[c] = Ha[r](a.measureViewportBox(), window.getComputedStyle(a.current)),
        f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
        this.removedTransforms?.length && this.removedTransforms.forEach( ([h,p]) => {
            a.getValue(h).set(p)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
function lA(t, a, r) {
    if (t instanceof EventTarget)
        return [t];
    if (typeof t == "string") {
        let s = document;
        const o = r?.[t] ?? s.querySelectorAll(t);
        return o ? Array.from(o) : []
    }
    return Array.from(t)
}
const M1 = (t, a) => a && typeof t == "number" ? a.transform(t) : t;
function j1(t) {
    return Qv(t) && "offsetHeight" in t
}
const Pg = 30
  , oA = t => !isNaN(parseFloat(t));
class uA {
    constructor(a, r={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = s => {
            const o = zt.now();
            if (this.updatedAt !== o && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(s),
            this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
                for (const c of this.dependents)
                    c.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(a),
        this.owner = r.owner
    }
    setCurrent(a) {
        this.current = a,
        this.updatedAt = zt.now(),
        this.canTrackVelocity === null && a !== void 0 && (this.canTrackVelocity = oA(this.current))
    }
    setPrevFrameValue(a=this.current) {
        this.prevFrameValue = a,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(a) {
        return this.on("change", a)
    }
    on(a, r) {
        this.events[a] || (this.events[a] = new gd);
        const s = this.events[a].add(r);
        return a === "change" ? () => {
            s(),
            Ue.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : s
    }
    clearListeners() {
        for (const a in this.events)
            this.events[a].clear()
    }
    attach(a, r) {
        this.passiveEffect = a,
        this.stopPassiveEffect = r
    }
    set(a) {
        this.passiveEffect ? this.passiveEffect(a, this.updateAndNotify) : this.updateAndNotify(a)
    }
    setWithVelocity(a, r, s) {
        this.set(r),
        this.prev = void 0,
        this.prevFrameValue = a,
        this.prevUpdatedAt = this.updatedAt - s
    }
    jump(a, r=!0) {
        this.updateAndNotify(a),
        this.prev = a,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        r && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        this.events.change?.notify(this.current)
    }
    addDependent(a) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(a)
    }
    removeDependent(a) {
        this.dependents && this.dependents.delete(a)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const a = zt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || a - this.updatedAt > Pg)
            return 0;
        const r = Math.min(this.updatedAt - this.prevUpdatedAt, Pg);
        return Jv(parseFloat(this.current) - parseFloat(this.prevFrameValue), r)
    }
    start(a) {
        return this.stop(),
        new Promise(r => {
            this.hasAnimated = !0,
            this.animation = a(r),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.dependents?.clear(),
        this.events.destroy?.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function qi(t, a) {
    return new uA(t,a)
}
const {schedule: Od} = o1(queueMicrotask, !1)
  , sn = {
    x: !1,
    y: !1
};
function N1() {
    return sn.x || sn.y
}
function cA(t) {
    return t === "x" || t === "y" ? sn[t] ? null : (sn[t] = !0,
    () => {
        sn[t] = !1
    }
    ) : sn.x || sn.y ? null : (sn.x = sn.y = !0,
    () => {
        sn.x = sn.y = !1
    }
    )
}
function U1(t, a) {
    const r = lA(t)
      , s = new AbortController
      , o = {
        passive: !0,
        ...a,
        signal: s.signal
    };
    return [r, o, () => s.abort()]
}
function Yg(t) {
    return !(t.pointerType === "touch" || N1())
}
function fA(t, a, r={}) {
    const [s,o,c] = U1(t, r)
      , f = h => {
        if (!Yg(h))
            return;
        const {target: p} = h
          , m = a(p, h);
        if (typeof m != "function" || !p)
            return;
        const y = v => {
            Yg(v) && (m(v),
            p.removeEventListener("pointerleave", y))
        }
        ;
        p.addEventListener("pointerleave", y, o)
    }
    ;
    return s.forEach(h => {
        h.addEventListener("pointerenter", f, o)
    }
    ),
    c
}
const L1 = (t, a) => a ? t === a ? !0 : L1(t, a.parentElement) : !1
  , Md = t => t.pointerType === "mouse" ? typeof t.button != "number" || t.button <= 0 : t.isPrimary !== !1
  , dA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function hA(t) {
    return dA.has(t.tagName) || t.tabIndex !== -1
}
const Jl = new WeakSet;
function Gg(t) {
    return a => {
        a.key === "Enter" && t(a)
    }
}
function af(t, a) {
    t.dispatchEvent(new PointerEvent("pointer" + a,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const mA = (t, a) => {
    const r = t.currentTarget;
    if (!r)
        return;
    const s = Gg( () => {
        if (Jl.has(r))
            return;
        af(r, "down");
        const o = Gg( () => {
            af(r, "up")
        }
        )
          , c = () => af(r, "cancel");
        r.addEventListener("keyup", o, a),
        r.addEventListener("blur", c, a)
    }
    );
    r.addEventListener("keydown", s, a),
    r.addEventListener("blur", () => r.removeEventListener("keydown", s), a)
}
;
function $g(t) {
    return Md(t) && !N1()
}
function pA(t, a, r={}) {
    const [s,o,c] = U1(t, r)
      , f = h => {
        const p = h.currentTarget;
        if (!$g(h))
            return;
        Jl.add(p);
        const m = a(p, h)
          , y = (T, M) => {
            window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", S),
            Jl.has(p) && Jl.delete(p),
            $g(T) && typeof m == "function" && m(T, {
                success: M
            })
        }
          , v = T => {
            y(T, p === window || p === document || r.useGlobalTarget || L1(p, T.target))
        }
          , S = T => {
            y(T, !1)
        }
        ;
        window.addEventListener("pointerup", v, o),
        window.addEventListener("pointercancel", S, o)
    }
    ;
    return s.forEach(h => {
        (r.useGlobalTarget ? window : h).addEventListener("pointerdown", f, o),
        j1(h) && (h.addEventListener("focus", m => mA(m, o)),
        !hA(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
    }
    ),
    c
}
function V1(t) {
    return Qv(t) && "ownerSVGElement" in t
}
function gA(t) {
    return V1(t) && t.tagName === "svg"
}
const mt = t => !!(t && t.getVelocity)
  , yA = [...C1, Je, ma]
  , vA = t => yA.find(D1(t))
  , jd = A.createContext({
    transformPagePoint: t => t,
    isStatic: !1,
    reducedMotion: "never"
});
function Xg(t, a) {
    if (typeof t == "function")
        return t(a);
    t != null && (t.current = a)
}
function bA(...t) {
    return a => {
        let r = !1;
        const s = t.map(o => {
            const c = Xg(o, a);
            return !r && typeof c == "function" && (r = !0),
            c
        }
        );
        if (r)
            return () => {
                for (let o = 0; o < s.length; o++) {
                    const c = s[o];
                    typeof c == "function" ? c() : Xg(t[o], null)
                }
            }
    }
}
function xA(...t) {
    return A.useCallback(bA(...t), t)
}
class SA extends A.Component {
    getSnapshotBeforeUpdate(a) {
        const r = this.props.childRef.current;
        if (r && a.isPresent && !this.props.isPresent) {
            const s = r.offsetParent
              , o = j1(s) && s.offsetWidth || 0
              , c = this.props.sizeRef.current;
            c.height = r.offsetHeight || 0,
            c.width = r.offsetWidth || 0,
            c.top = r.offsetTop,
            c.left = r.offsetLeft,
            c.right = o - c.width - c.left
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function TA({children: t, isPresent: a, anchorX: r, root: s}) {
    const o = A.useId()
      , c = A.useRef(null)
      , f = A.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0
    })
      , {nonce: h} = A.useContext(jd)
      , p = xA(c, t?.ref);
    return A.useInsertionEffect( () => {
        const {width: m, height: y, top: v, left: S, right: T} = f.current;
        if (a || !c.current || !m || !y)
            return;
        const M = r === "left" ? `left: ${S}` : `right: ${T}`;
        c.current.dataset.motionPopId = o;
        const D = document.createElement("style");
        h && (D.nonce = h);
        const N = s ?? document.head;
        return N.appendChild(D),
        D.sheet && D.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${y}px !important;
            ${M}px !important;
            top: ${v}px !important;
          }
        `),
        () => {
            N.contains(D) && N.removeChild(D)
        }
    }
    , [a]),
    x.jsx(SA, {
        isPresent: a,
        childRef: c,
        sizeRef: f,
        children: A.cloneElement(t, {
            ref: p
        })
    })
}
const AA = ({children: t, initial: a, isPresent: r, onExitComplete: s, custom: o, presenceAffectsLayout: c, mode: f, anchorX: h, root: p}) => {
    const m = cd(EA)
      , y = A.useId();
    let v = !0
      , S = A.useMemo( () => (v = !1,
    {
        id: y,
        initial: a,
        isPresent: r,
        custom: o,
        onExitComplete: T => {
            m.set(T, !0);
            for (const M of m.values())
                if (!M)
                    return;
            s && s()
        }
        ,
        register: T => (m.set(T, !1),
        () => m.delete(T))
    }), [r, m, s]);
    return c && v && (S = {
        ...S
    }),
    A.useMemo( () => {
        m.forEach( (T, M) => m.set(M, !1))
    }
    , [r]),
    A.useEffect( () => {
        !r && !m.size && s && s()
    }
    , [r]),
    f === "popLayout" && (t = x.jsx(TA, {
        isPresent: r,
        anchorX: h,
        root: p,
        children: t
    })),
    x.jsx(go.Provider, {
        value: S,
        children: t
    })
}
;
function EA() {
    return new Map
}
function B1(t=!0) {
    const a = A.useContext(go);
    if (a === null)
        return [!0, null];
    const {isPresent: r, onExitComplete: s, register: o} = a
      , c = A.useId();
    A.useEffect( () => {
        if (t)
            return o(c)
    }
    , [t]);
    const f = A.useCallback( () => t && s && s(c), [c, s, t]);
    return !r && s ? [!1, f] : [!0]
}
const Hl = t => t.key || "";
function Kg(t) {
    const a = [];
    return A.Children.forEach(t, r => {
        A.isValidElement(r) && a.push(r)
    }
    ),
    a
}
const k1 = ({children: t, custom: a, initial: r=!0, onExitComplete: s, presenceAffectsLayout: o=!0, mode: c="sync", propagate: f=!1, anchorX: h="left", root: p}) => {
    const [m,y] = B1(f)
      , v = A.useMemo( () => Kg(t), [t])
      , S = f && !m ? [] : v.map(Hl)
      , T = A.useRef(!0)
      , M = A.useRef(v)
      , D = cd( () => new Map)
      , [N,V] = A.useState(v)
      , [R,U] = A.useState(v);
    Xv( () => {
        T.current = !1,
        M.current = v;
        for (let I = 0; I < R.length; I++) {
            const X = Hl(R[I]);
            S.includes(X) ? D.delete(X) : D.get(X) !== !0 && D.set(X, !1)
        }
    }
    , [R, S.length, S.join("-")]);
    const Y = [];
    if (v !== N) {
        let I = [...v];
        for (let X = 0; X < R.length; X++) {
            const F = R[X]
              , Q = Hl(F);
            S.includes(Q) || (I.splice(X, 0, F),
            Y.push(F))
        }
        return c === "wait" && Y.length && (I = Y),
        U(Kg(I)),
        V(v),
        null
    }
    const {forceRender: $} = A.useContext(ud);
    return x.jsx(x.Fragment, {
        children: R.map(I => {
            const X = Hl(I)
              , F = f && !m ? !1 : v === R || S.includes(X)
              , Q = () => {
                if (D.has(X))
                    D.set(X, !0);
                else
                    return;
                let se = !0;
                D.forEach(_e => {
                    _e || (se = !1)
                }
                ),
                se && ($?.(),
                U(M.current),
                f && y?.(),
                s && s())
            }
            ;
            return x.jsx(AA, {
                isPresent: F,
                initial: !T.current || r ? void 0 : !1,
                custom: a,
                presenceAffectsLayout: o,
                mode: c,
                root: p,
                onExitComplete: F ? void 0 : Q,
                anchorX: h,
                children: I
            }, X)
        }
        )
    })
}
  , Z1 = A.createContext({
    strict: !1
})
  , Qg = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Pi = {};
for (const t in Qg)
    Pi[t] = {
        isEnabled: a => Qg[t].some(r => !!a[r])
    };
function wA(t) {
    for (const a in t)
        Pi[a] = {
            ...Pi[a],
            ...t[a]
        }
}
const _A = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function ro(t) {
    return t.startsWith("while") || t.startsWith("drag") && t !== "draggable" || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || _A.has(t)
}
let H1 = t => !ro(t);
function zA(t) {
    typeof t == "function" && (H1 = a => a.startsWith("on") ? !ro(a) : t(a))
}
try {
    zA(require("@emotion/is-prop-valid").default)
} catch {}
function DA(t, a, r) {
    const s = {};
    for (const o in t)
        o === "values" && typeof t.values == "object" || (H1(o) || r === !0 && ro(o) || !a && !ro(o) || t.draggable && o.startsWith("onDrag")) && (s[o] = t[o]);
    return s
}
const yo = A.createContext({});
function vo(t) {
    return t !== null && typeof t == "object" && typeof t.start == "function"
}
function rs(t) {
    return typeof t == "string" || Array.isArray(t)
}
const Nd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Ud = ["initial", ...Nd];
function bo(t) {
    return vo(t.animate) || Ud.some(a => rs(t[a]))
}
function q1(t) {
    return !!(bo(t) || t.variants)
}
function CA(t, a) {
    if (bo(t)) {
        const {initial: r, animate: s} = t;
        return {
            initial: r === !1 || rs(r) ? r : void 0,
            animate: rs(s) ? s : void 0
        }
    }
    return t.inherit !== !1 ? a : {}
}
function RA(t) {
    const {initial: a, animate: r} = CA(t, A.useContext(yo));
    return A.useMemo( () => ({
        initial: a,
        animate: r
    }), [Fg(a), Fg(r)])
}
function Fg(t) {
    return Array.isArray(t) ? t.join(" ") : t
}
const ss = {};
function OA(t) {
    for (const a in t)
        ss[a] = t[a],
        bd(a) && (ss[a].isCSSVariable = !0)
}
function P1(t, {layout: a, layoutId: r}) {
    return Ki.has(t) || t.startsWith("origin") || (a || r !== void 0) && (!!ss[t] || t === "opacity")
}
const MA = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , jA = Xi.length;
function NA(t, a, r) {
    let s = ""
      , o = !0;
    for (let c = 0; c < jA; c++) {
        const f = Xi[c]
          , h = t[f];
        if (h === void 0)
            continue;
        let p = !0;
        if (typeof h == "number" ? p = h === (f.startsWith("scale") ? 1 : 0) : p = parseFloat(h) === 0,
        !p || r) {
            const m = M1(h, Rd[f]);
            if (!p) {
                o = !1;
                const y = MA[f] || f;
                s += `${y}(${m}) `
            }
            r && (a[f] = m)
        }
    }
    return s = s.trim(),
    r ? s = r(a, o ? "" : s) : o && (s = "none"),
    s
}
function Ld(t, a, r) {
    const {style: s, vars: o, transformOrigin: c} = t;
    let f = !1
      , h = !1;
    for (const p in a) {
        const m = a[p];
        if (Ki.has(p)) {
            f = !0;
            continue
        } else if (bd(p)) {
            o[p] = m;
            continue
        } else {
            const y = M1(m, Rd[p]);
            p.startsWith("origin") ? (h = !0,
            c[p] = y) : s[p] = y
        }
    }
    if (a.transform || (f || r ? s.transform = NA(a, t.transform, r) : s.transform && (s.transform = "none")),
    h) {
        const {originX: p="50%", originY: m="50%", originZ: y=0} = c;
        s.transformOrigin = `${p} ${m} ${y}`
    }
}
const Vd = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function Y1(t, a, r) {
    for (const s in a)
        !mt(a[s]) && !P1(s, r) && (t[s] = a[s])
}
function UA({transformTemplate: t}, a) {
    return A.useMemo( () => {
        const r = Vd();
        return Ld(r, a, t),
        Object.assign({}, r.vars, r.style)
    }
    , [a])
}
function LA(t, a) {
    const r = t.style || {}
      , s = {};
    return Y1(s, r, t),
    Object.assign(s, UA(t, a)),
    s
}
function VA(t, a) {
    const r = {}
      , s = LA(t, a);
    return t.drag && t.dragListener !== !1 && (r.draggable = !1,
    s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none",
    s.touchAction = t.drag === !0 ? "none" : `pan-${t.drag === "x" ? "y" : "x"}`),
    t.tabIndex === void 0 && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0),
    r.style = s,
    r
}
const BA = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , kA = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function ZA(t, a, r=1, s=0, o=!0) {
    t.pathLength = 1;
    const c = o ? BA : kA;
    t[c.offset] = re.transform(-s);
    const f = re.transform(a)
      , h = re.transform(r);
    t[c.array] = `${f} ${h}`
}
function G1(t, {attrX: a, attrY: r, attrScale: s, pathLength: o, pathSpacing: c=1, pathOffset: f=0, ...h}, p, m, y) {
    if (Ld(t, h, m),
    p) {
        t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
        return
    }
    t.attrs = t.style,
    t.style = {};
    const {attrs: v, style: S} = t;
    v.transform && (S.transform = v.transform,
    delete v.transform),
    (S.transform || v.transformOrigin) && (S.transformOrigin = v.transformOrigin ?? "50% 50%",
    delete v.transformOrigin),
    S.transform && (S.transformBox = y?.transformBox ?? "fill-box",
    delete v.transformBox),
    a !== void 0 && (v.x = a),
    r !== void 0 && (v.y = r),
    s !== void 0 && (v.scale = s),
    o !== void 0 && ZA(v, o, c, f, !1)
}
const $1 = () => ({
    ...Vd(),
    attrs: {}
})
  , X1 = t => typeof t == "string" && t.toLowerCase() === "svg";
function HA(t, a, r, s) {
    const o = A.useMemo( () => {
        const c = $1();
        return G1(c, a, X1(s), t.transformTemplate, t.style),
        {
            ...c.attrs,
            style: {
                ...c.style
            }
        }
    }
    , [a]);
    if (t.style) {
        const c = {};
        Y1(c, t.style, t),
        o.style = {
            ...c,
            ...o.style
        }
    }
    return o
}
const qA = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Bd(t) {
    return typeof t != "string" || t.includes("-") ? !1 : !!(qA.indexOf(t) > -1 || /[A-Z]/u.test(t))
}
function PA(t, a, r, {latestValues: s}, o, c=!1) {
    const h = (Bd(t) ? HA : VA)(a, s, o, t)
      , p = DA(a, typeof t == "string", c)
      , m = t !== A.Fragment ? {
        ...p,
        ...h,
        ref: r
    } : {}
      , {children: y} = a
      , v = A.useMemo( () => mt(y) ? y.get() : y, [y]);
    return A.createElement(t, {
        ...m,
        children: v
    })
}
function Jg(t) {
    const a = [{}, {}];
    return t?.values.forEach( (r, s) => {
        a[0][s] = r.get(),
        a[1][s] = r.getVelocity()
    }
    ),
    a
}
function kd(t, a, r, s) {
    if (typeof a == "function") {
        const [o,c] = Jg(s);
        a = a(r !== void 0 ? r : t.custom, o, c)
    }
    if (typeof a == "string" && (a = t.variants && t.variants[a]),
    typeof a == "function") {
        const [o,c] = Jg(s);
        a = a(r !== void 0 ? r : t.custom, o, c)
    }
    return a
}
function Il(t) {
    return mt(t) ? t.get() : t
}
function YA({scrapeMotionValuesFromProps: t, createRenderState: a}, r, s, o) {
    return {
        latestValues: GA(r, s, o, t),
        renderState: a()
    }
}
function GA(t, a, r, s) {
    const o = {}
      , c = s(t, {});
    for (const S in c)
        o[S] = Il(c[S]);
    let {initial: f, animate: h} = t;
    const p = bo(t)
      , m = q1(t);
    a && m && !p && t.inherit !== !1 && (f === void 0 && (f = a.initial),
    h === void 0 && (h = a.animate));
    let y = r ? r.initial === !1 : !1;
    y = y || f === !1;
    const v = y ? h : f;
    if (v && typeof v != "boolean" && !vo(v)) {
        const S = Array.isArray(v) ? v : [v];
        for (let T = 0; T < S.length; T++) {
            const M = kd(t, S[T]);
            if (M) {
                const {transitionEnd: D, transition: N, ...V} = M;
                for (const R in V) {
                    let U = V[R];
                    if (Array.isArray(U)) {
                        const Y = y ? U.length - 1 : 0;
                        U = U[Y]
                    }
                    U !== null && (o[R] = U)
                }
                for (const R in D)
                    o[R] = D[R]
            }
        }
    }
    return o
}
const K1 = t => (a, r) => {
    const s = A.useContext(yo)
      , o = A.useContext(go)
      , c = () => YA(t, a, s, o);
    return r ? c() : cd(c)
}
;
function Zd(t, a, r) {
    const {style: s} = t
      , o = {};
    for (const c in s)
        (mt(s[c]) || a.style && mt(a.style[c]) || P1(c, t) || r?.getValue(c)?.liveStyle !== void 0) && (o[c] = s[c]);
    return o
}
const $A = K1({
    scrapeMotionValuesFromProps: Zd,
    createRenderState: Vd
});
function Q1(t, a, r) {
    const s = Zd(t, a, r);
    for (const o in t)
        if (mt(t[o]) || mt(a[o])) {
            const c = Xi.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
            s[c] = t[o]
        }
    return s
}
const XA = K1({
    scrapeMotionValuesFromProps: Q1,
    createRenderState: $1
})
  , KA = Symbol.for("motionComponentSymbol");
function Ni(t) {
    return t && typeof t == "object" && Object.prototype.hasOwnProperty.call(t, "current")
}
function QA(t, a, r) {
    return A.useCallback(s => {
        s && t.onMount && t.onMount(s),
        a && (s ? a.mount(s) : a.unmount()),
        r && (typeof r == "function" ? r(s) : Ni(r) && (r.current = s))
    }
    , [a])
}
const Hd = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , FA = "framerAppearId"
  , F1 = "data-" + Hd(FA)
  , J1 = A.createContext({});
function JA(t, a, r, s, o) {
    const {visualElement: c} = A.useContext(yo)
      , f = A.useContext(Z1)
      , h = A.useContext(go)
      , p = A.useContext(jd).reducedMotion
      , m = A.useRef(null);
    s = s || f.renderer,
    !m.current && s && (m.current = s(t, {
        visualState: a,
        parent: c,
        props: r,
        presenceContext: h,
        blockInitialAnimation: h ? h.initial === !1 : !1,
        reducedMotionConfig: p
    }));
    const y = m.current
      , v = A.useContext(J1);
    y && !y.projection && o && (y.type === "html" || y.type === "svg") && IA(m.current, r, o, v);
    const S = A.useRef(!1);
    A.useInsertionEffect( () => {
        y && S.current && y.update(r, h)
    }
    );
    const T = r[F1]
      , M = A.useRef(!!T && !window.MotionHandoffIsComplete?.(T) && window.MotionHasOptimisedAnimation?.(T));
    return Xv( () => {
        y && (S.current = !0,
        window.MotionIsMounted = !0,
        y.updateFeatures(),
        y.scheduleRenderMicrotask(),
        M.current && y.animationState && y.animationState.animateChanges())
    }
    ),
    A.useEffect( () => {
        y && (!M.current && y.animationState && y.animationState.animateChanges(),
        M.current && (queueMicrotask( () => {
            window.MotionHandoffMarkAsComplete?.(T)
        }
        ),
        M.current = !1),
        y.enteringChildren = void 0)
    }
    ),
    y
}
function IA(t, a, r, s) {
    const {layoutId: o, layout: c, drag: f, dragConstraints: h, layoutScroll: p, layoutRoot: m, layoutCrossfade: y} = a;
    t.projection = new r(t.latestValues,a["data-framer-portal-id"] ? void 0 : I1(t.parent)),
    t.projection.setOptions({
        layoutId: o,
        layout: c,
        alwaysMeasureLayout: !!f || h && Ni(h),
        visualElement: t,
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: s,
        crossfade: y,
        layoutScroll: p,
        layoutRoot: m
    })
}
function I1(t) {
    if (t)
        return t.options.allowProjection !== !1 ? t.projection : I1(t.parent)
}
function rf(t, {forwardMotionProps: a=!1}={}, r, s) {
    r && wA(r);
    const o = Bd(t) ? XA : $A;
    function c(h, p) {
        let m;
        const y = {
            ...A.useContext(jd),
            ...h,
            layoutId: WA(h)
        }
          , {isStatic: v} = y
          , S = RA(h)
          , T = o(h, v);
        if (!v && fd) {
            eE();
            const M = tE(y);
            m = M.MeasureLayout,
            S.visualElement = JA(t, T, y, s, M.ProjectionNode)
        }
        return x.jsxs(yo.Provider, {
            value: S,
            children: [m && S.visualElement ? x.jsx(m, {
                visualElement: S.visualElement,
                ...y
            }) : null, PA(t, h, QA(T, S.visualElement, p), T, v, a)]
        })
    }
    c.displayName = `motion.${typeof t == "string" ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
    const f = A.forwardRef(c);
    return f[KA] = t,
    f
}
function WA({layoutId: t}) {
    const a = A.useContext(ud).id;
    return a && t !== void 0 ? a + "-" + t : t
}
function eE(t, a) {
    A.useContext(Z1).strict
}
function tE(t) {
    const {drag: a, layout: r} = Pi;
    if (!a && !r)
        return {};
    const s = {
        ...a,
        ...r
    };
    return {
        MeasureLayout: a?.isEnabled(t) || r?.isEnabled(t) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode
    }
}
function nE(t, a) {
    if (typeof Proxy > "u")
        return rf;
    const r = new Map
      , s = (c, f) => rf(c, f, t, a)
      , o = (c, f) => s(c, f);
    return new Proxy(o,{
        get: (c, f) => f === "create" ? s : (r.has(f) || r.set(f, rf(f, void 0, t, a)),
        r.get(f))
    })
}
function W1({top: t, left: a, right: r, bottom: s}) {
    return {
        x: {
            min: a,
            max: r
        },
        y: {
            min: t,
            max: s
        }
    }
}
function aE({x: t, y: a}) {
    return {
        top: a.min,
        right: t.max,
        bottom: a.max,
        left: t.min
    }
}
function iE(t, a) {
    if (!a)
        return t;
    const r = a({
        x: t.left,
        y: t.top
    })
      , s = a({
        x: t.right,
        y: t.bottom
    });
    return {
        top: r.y,
        left: r.x,
        bottom: s.y,
        right: s.x
    }
}
function sf(t) {
    return t === void 0 || t === 1
}
function Lf({scale: t, scaleX: a, scaleY: r}) {
    return !sf(t) || !sf(a) || !sf(r)
}
function Ba(t) {
    return Lf(t) || eb(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
}
function eb(t) {
    return Ig(t.x) || Ig(t.y)
}
function Ig(t) {
    return t && t !== "0%"
}
function so(t, a, r) {
    const s = t - r
      , o = a * s;
    return r + o
}
function Wg(t, a, r, s, o) {
    return o !== void 0 && (t = so(t, o, s)),
    so(t, r, s) + a
}
function Vf(t, a=0, r=1, s, o) {
    t.min = Wg(t.min, a, r, s, o),
    t.max = Wg(t.max, a, r, s, o)
}
function tb(t, {x: a, y: r}) {
    Vf(t.x, a.translate, a.scale, a.originPoint),
    Vf(t.y, r.translate, r.scale, r.originPoint)
}
const ey = .999999999999
  , ty = 1.0000000000001;
function rE(t, a, r, s=!1) {
    const o = r.length;
    if (!o)
        return;
    a.x = a.y = 1;
    let c, f;
    for (let h = 0; h < o; h++) {
        c = r[h],
        f = c.projectionDelta;
        const {visualElement: p} = c.options;
        p && p.props.style && p.props.style.display === "contents" || (s && c.options.layoutScroll && c.scroll && c !== c.root && Li(t, {
            x: -c.scroll.offset.x,
            y: -c.scroll.offset.y
        }),
        f && (a.x *= f.x.scale,
        a.y *= f.y.scale,
        tb(t, f)),
        s && Ba(c.latestValues) && Li(t, c.latestValues))
    }
    a.x < ty && a.x > ey && (a.x = 1),
    a.y < ty && a.y > ey && (a.y = 1)
}
function Ui(t, a) {
    t.min = t.min + a,
    t.max = t.max + a
}
function ny(t, a, r, s, o=.5) {
    const c = Ve(t.min, t.max, o);
    Vf(t, a, r, c, s)
}
function Li(t, a) {
    ny(t.x, a.x, a.scaleX, a.scale, a.originX),
    ny(t.y, a.y, a.scaleY, a.scale, a.originY)
}
function nb(t, a) {
    return W1(iE(t.getBoundingClientRect(), a))
}
function sE(t, a, r) {
    const s = nb(t, r)
      , {scroll: o} = a;
    return o && (Ui(s.x, o.offset.x),
    Ui(s.y, o.offset.y)),
    s
}
const ay = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Vi = () => ({
    x: ay(),
    y: ay()
})
  , iy = () => ({
    min: 0,
    max: 0
})
  , $e = () => ({
    x: iy(),
    y: iy()
})
  , lo = {
    current: null
}
  , qd = {
    current: !1
};
function ab() {
    if (qd.current = !0,
    !!fd)
        if (window.matchMedia) {
            const t = window.matchMedia("(prefers-reduced-motion)")
              , a = () => lo.current = t.matches;
            t.addEventListener("change", a),
            a()
        } else
            lo.current = !1
}
const lE = new WeakMap;
function oE(t, a, r) {
    for (const s in a) {
        const o = a[s]
          , c = r[s];
        if (mt(o))
            t.addValue(s, o);
        else if (mt(c))
            t.addValue(s, qi(o, {
                owner: t
            }));
        else if (c !== o)
            if (t.hasValue(s)) {
                const f = t.getValue(s);
                f.liveStyle === !0 ? f.jump(o) : f.hasAnimated || f.set(o)
            } else {
                const f = t.getStaticValue(s);
                t.addValue(s, qi(f !== void 0 ? f : o, {
                    owner: t
                }))
            }
    }
    for (const s in r)
        a[s] === void 0 && t.removeValue(s);
    return a
}
const ry = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class uE {
    scrapeMotionValuesFromProps(a, r, s) {
        return {}
    }
    constructor({parent: a, props: r, presenceContext: s, reducedMotionConfig: o, blockInitialAnimation: c, visualState: f}, h={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = Dd,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const S = zt.now();
            this.renderScheduledAt < S && (this.renderScheduledAt = S,
            Ue.render(this.render, !1, !0))
        }
        ;
        const {latestValues: p, renderState: m} = f;
        this.latestValues = p,
        this.baseTarget = {
            ...p
        },
        this.initialValues = r.initial ? {
            ...p
        } : {},
        this.renderState = m,
        this.parent = a,
        this.props = r,
        this.presenceContext = s,
        this.depth = a ? a.depth + 1 : 0,
        this.reducedMotionConfig = o,
        this.options = h,
        this.blockInitialAnimation = !!c,
        this.isControllingVariants = bo(r),
        this.isVariantNode = q1(r),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(a && a.current);
        const {willChange: y, ...v} = this.scrapeMotionValuesFromProps(r, {}, this);
        for (const S in v) {
            const T = v[S];
            p[S] !== void 0 && mt(T) && T.set(p[S])
        }
    }
    mount(a) {
        this.current = a,
        lE.set(a, this),
        this.projection && !this.projection.instance && this.projection.mount(a),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (r, s) => this.bindToMotionValue(s, r)),
        qd.current || ab(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : lo.current,
        this.parent?.addChild(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        this.projection && this.projection.unmount(),
        ha(this.notifyUpdate),
        ha(this.render),
        this.valueSubscriptions.forEach(a => a()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent?.removeChild(this);
        for (const a in this.events)
            this.events[a].clear();
        for (const a in this.features) {
            const r = this.features[a];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(a) {
        this.children.add(a),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(a)
    }
    removeChild(a) {
        this.children.delete(a),
        this.enteringChildren && this.enteringChildren.delete(a)
    }
    bindToMotionValue(a, r) {
        this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
        const s = Ki.has(a);
        s && this.onBindTransform && this.onBindTransform();
        const o = r.on("change", f => {
            this.latestValues[a] = f,
            this.props.onUpdate && Ue.preRender(this.notifyUpdate),
            s && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let c;
        window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, a, r)),
        this.valueSubscriptions.set(a, () => {
            o(),
            c && c(),
            r.owner && r.stop()
        }
        )
    }
    sortNodePosition(a) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== a.type ? 0 : this.sortInstanceNodePosition(this.current, a.current)
    }
    updateFeatures() {
        let a = "animation";
        for (a in Pi) {
            const r = Pi[a];
            if (!r)
                continue;
            const {isEnabled: s, Feature: o} = r;
            if (!this.features[a] && o && s(this.props) && (this.features[a] = new o(this)),
            this.features[a]) {
                const c = this.features[a];
                c.isMounted ? c.update() : (c.mount(),
                c.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $e()
    }
    getStaticValue(a) {
        return this.latestValues[a]
    }
    setStaticValue(a, r) {
        this.latestValues[a] = r
    }
    update(a, r) {
        (a.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = a,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = r;
        for (let s = 0; s < ry.length; s++) {
            const o = ry[s];
            this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](),
            delete this.propEventSubscriptions[o]);
            const c = "on" + o
              , f = a[c];
            f && (this.propEventSubscriptions[o] = this.on(o, f))
        }
        this.prevMotionValues = oE(this, this.scrapeMotionValuesFromProps(a, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(a) {
        const r = this.getClosestVariantNode();
        if (r)
            return r.variantChildren && r.variantChildren.add(a),
            () => r.variantChildren.delete(a)
    }
    addValue(a, r) {
        const s = this.values.get(a);
        r !== s && (s && this.removeValue(a),
        this.bindToMotionValue(a, r),
        this.values.set(a, r),
        this.latestValues[a] = r.get())
    }
    removeValue(a) {
        this.values.delete(a);
        const r = this.valueSubscriptions.get(a);
        r && (r(),
        this.valueSubscriptions.delete(a)),
        delete this.latestValues[a],
        this.removeValueFromRenderState(a, this.renderState)
    }
    hasValue(a) {
        return this.values.has(a)
    }
    getValue(a, r) {
        if (this.props.values && this.props.values[a])
            return this.props.values[a];
        let s = this.values.get(a);
        return s === void 0 && r !== void 0 && (s = qi(r === null ? void 0 : r, {
            owner: this
        }),
        this.addValue(a, s)),
        s
    }
    readValue(a, r) {
        let s = this.latestValues[a] !== void 0 || !this.current ? this.latestValues[a] : this.getBaseTargetFromProps(this.props, a) ?? this.readValueFromInstance(this.current, a, this.options);
        return s != null && (typeof s == "string" && (Kv(s) || Fv(s)) ? s = parseFloat(s) : !vA(s) && ma.test(r) && (s = O1(a, r)),
        this.setBaseTarget(a, mt(s) ? s.get() : s)),
        mt(s) ? s.get() : s
    }
    setBaseTarget(a, r) {
        this.baseTarget[a] = r
    }
    getBaseTarget(a) {
        const {initial: r} = this.props;
        let s;
        if (typeof r == "string" || typeof r == "object") {
            const c = kd(this.props, r, this.presenceContext?.custom);
            c && (s = c[a])
        }
        if (r && s !== void 0)
            return s;
        const o = this.getBaseTargetFromProps(this.props, a);
        return o !== void 0 && !mt(o) ? o : this.initialValues[a] !== void 0 && s === void 0 ? void 0 : this.baseTarget[a]
    }
    on(a, r) {
        return this.events[a] || (this.events[a] = new gd),
        this.events[a].add(r)
    }
    notify(a, ...r) {
        this.events[a] && this.events[a].notify(...r)
    }
    scheduleRenderMicrotask() {
        Od.render(this.render)
    }
}
class ib extends uE {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = sA
    }
    sortInstanceNodePosition(a, r) {
        return a.compareDocumentPosition(r) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(a, r) {
        return a.style ? a.style[r] : void 0
    }
    removeValueFromRenderState(a, {vars: r, style: s}) {
        delete r[a],
        delete s[a]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: a} = this.props;
        mt(a) && (this.childSubscription = a.on("change", r => {
            this.current && (this.current.textContent = `${r}`)
        }
        ))
    }
}
function rb(t, {style: a, vars: r}, s, o) {
    const c = t.style;
    let f;
    for (f in a)
        c[f] = a[f];
    o?.applyProjectionStyles(c, s);
    for (f in r)
        c.setProperty(f, r[f])
}
function cE(t) {
    return window.getComputedStyle(t)
}
class fE extends ib {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = rb
    }
    readValueFromInstance(a, r) {
        if (Ki.has(r))
            return this.projection?.isProjecting ? Cf(r) : w4(a, r);
        {
            const s = cE(a)
              , o = (bd(r) ? s.getPropertyValue(r) : s[r]) || 0;
            return typeof o == "string" ? o.trim() : o
        }
    }
    measureInstanceViewportBox(a, {transformPagePoint: r}) {
        return nb(a, r)
    }
    build(a, r, s) {
        Ld(a, r, s.transformTemplate)
    }
    scrapeMotionValuesFromProps(a, r, s) {
        return Zd(a, r, s)
    }
}
const sb = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function dE(t, a, r, s) {
    rb(t, a, void 0, s);
    for (const o in a.attrs)
        t.setAttribute(sb.has(o) ? o : Hd(o), a.attrs[o])
}
class hE extends ib {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = $e
    }
    getBaseTargetFromProps(a, r) {
        return a[r]
    }
    readValueFromInstance(a, r) {
        if (Ki.has(r)) {
            const s = R1(r);
            return s && s.default || 0
        }
        return r = sb.has(r) ? r : Hd(r),
        a.getAttribute(r)
    }
    scrapeMotionValuesFromProps(a, r, s) {
        return Q1(a, r, s)
    }
    build(a, r, s) {
        G1(a, r, this.isSVGTag, s.transformTemplate, s.style)
    }
    renderInstance(a, r, s, o) {
        dE(a, r, s, o)
    }
    mount(a) {
        this.isSVGTag = X1(a.tagName),
        super.mount(a)
    }
}
const mE = (t, a) => Bd(t) ? new hE(a) : new fE(a,{
    allowProjection: t !== A.Fragment
});
function ki(t, a, r) {
    const s = t.getProps();
    return kd(s, a, r !== void 0 ? r : s.custom, t)
}
const Bf = t => Array.isArray(t);
function pE(t, a, r) {
    t.hasValue(a) ? t.getValue(a).set(r) : t.addValue(a, qi(r))
}
function gE(t) {
    return Bf(t) ? t[t.length - 1] || 0 : t
}
function yE(t, a) {
    const r = ki(t, a);
    let {transitionEnd: s={}, transition: o={}, ...c} = r || {};
    c = {
        ...c,
        ...s
    };
    for (const f in c) {
        const h = gE(c[f]);
        pE(t, f, h)
    }
}
function vE(t) {
    return !!(mt(t) && t.add)
}
function kf(t, a) {
    const r = t.getValue("willChange");
    if (vE(r))
        return r.add(a);
    if (!r && Bn.WillChange) {
        const s = new Bn.WillChange("auto");
        t.addValue("willChange", s),
        s.add(a)
    }
}
function lb(t) {
    return t.props[F1]
}
const bE = t => t !== null;
function xE(t, {repeat: a, repeatType: r="loop"}, s) {
    const o = t.filter(bE)
      , c = a && r !== "loop" && a % 2 === 1 ? 0 : o.length - 1;
    return o[c]
}
const SE = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , TE = t => ({
    type: "spring",
    stiffness: 550,
    damping: t === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , AE = {
    type: "keyframes",
    duration: .8
}
  , EE = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , wE = (t, {keyframes: a}) => a.length > 2 ? AE : Ki.has(t) ? t.startsWith("scale") ? TE(a[1]) : SE : EE;
function _E({when: t, delay: a, delayChildren: r, staggerChildren: s, staggerDirection: o, repeat: c, repeatType: f, repeatDelay: h, from: p, elapsed: m, ...y}) {
    return !!Object.keys(y).length
}
const Pd = (t, a, r, s={}, o, c) => f => {
    const h = Cd(s, t) || {}
      , p = h.delay || s.delay || 0;
    let {elapsed: m=0} = s;
    m = m - hn(p);
    const y = {
        keyframes: Array.isArray(r) ? r : [null, r],
        ease: "easeOut",
        velocity: a.getVelocity(),
        ...h,
        delay: -m,
        onUpdate: S => {
            a.set(S),
            h.onUpdate && h.onUpdate(S)
        }
        ,
        onComplete: () => {
            f(),
            h.onComplete && h.onComplete()
        }
        ,
        name: t,
        motionValue: a,
        element: c ? void 0 : o
    };
    _E(h) || Object.assign(y, wE(t, y)),
    y.duration && (y.duration = hn(y.duration)),
    y.repeatDelay && (y.repeatDelay = hn(y.repeatDelay)),
    y.from !== void 0 && (y.keyframes[0] = y.from);
    let v = !1;
    if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && (Nf(y),
    y.delay === 0 && (v = !0)),
    (Bn.instantAnimations || Bn.skipAnimations) && (v = !0,
    Nf(y),
    y.delay = 0),
    y.allowFlatten = !h.type && !h.ease,
    v && !c && a.get() !== void 0) {
        const S = xE(y.keyframes, h);
        if (S !== void 0) {
            Ue.update( () => {
                y.onUpdate(S),
                y.onComplete()
            }
            );
            return
        }
    }
    return h.isSync ? new zd(y) : new K4(y)
}
;
function zE({protectedKeys: t, needsAnimating: a}, r) {
    const s = t.hasOwnProperty(r) && a[r] !== !0;
    return a[r] = !1,
    s
}
function ob(t, a, {delay: r=0, transitionOverride: s, type: o}={}) {
    let {transition: c=t.getDefaultTransition(), transitionEnd: f, ...h} = a;
    s && (c = s);
    const p = []
      , m = o && t.animationState && t.animationState.getState()[o];
    for (const y in h) {
        const v = t.getValue(y, t.latestValues[y] ?? null)
          , S = h[y];
        if (S === void 0 || m && zE(m, y))
            continue;
        const T = {
            delay: r,
            ...Cd(c || {}, y)
        }
          , M = v.get();
        if (M !== void 0 && !v.isAnimating && !Array.isArray(S) && S === M && !T.velocity)
            continue;
        let D = !1;
        if (window.MotionHandoffAnimation) {
            const V = lb(t);
            if (V) {
                const R = window.MotionHandoffAnimation(V, y, Ue);
                R !== null && (T.startTime = R,
                D = !0)
            }
        }
        kf(t, y),
        v.start(Pd(y, v, S, t.shouldReduceMotion && z1.has(y) ? {
            type: !1
        } : T, t, D));
        const N = v.animation;
        N && p.push(N)
    }
    return f && Promise.all(p).then( () => {
        Ue.update( () => {
            f && yE(t, f)
        }
        )
    }
    ),
    p
}
function ub(t, a, r, s=0, o=1) {
    const c = Array.from(t).sort( (m, y) => m.sortNodePosition(y)).indexOf(a)
      , f = t.size
      , h = (f - 1) * s;
    return typeof r == "function" ? r(c, f) : o === 1 ? c * s : h - c * s
}
function Zf(t, a, r={}) {
    const s = ki(t, a, r.type === "exit" ? t.presenceContext?.custom : void 0);
    let {transition: o=t.getDefaultTransition() || {}} = s || {};
    r.transitionOverride && (o = r.transitionOverride);
    const c = s ? () => Promise.all(ob(t, s, r)) : () => Promise.resolve()
      , f = t.variantChildren && t.variantChildren.size ? (p=0) => {
        const {delayChildren: m=0, staggerChildren: y, staggerDirection: v} = o;
        return DE(t, a, p, m, y, v, r)
    }
    : () => Promise.resolve()
      , {when: h} = o;
    if (h) {
        const [p,m] = h === "beforeChildren" ? [c, f] : [f, c];
        return p().then( () => m())
    } else
        return Promise.all([c(), f(r.delay)])
}
function DE(t, a, r=0, s=0, o=0, c=1, f) {
    const h = [];
    for (const p of t.variantChildren)
        p.notify("AnimationStart", a),
        h.push(Zf(p, a, {
            ...f,
            delay: r + (typeof s == "function" ? 0 : s) + ub(t.variantChildren, p, s, o, c)
        }).then( () => p.notify("AnimationComplete", a)));
    return Promise.all(h)
}
function CE(t, a, r={}) {
    t.notify("AnimationStart", a);
    let s;
    if (Array.isArray(a)) {
        const o = a.map(c => Zf(t, c, r));
        s = Promise.all(o)
    } else if (typeof a == "string")
        s = Zf(t, a, r);
    else {
        const o = typeof a == "function" ? ki(t, a, r.custom) : a;
        s = Promise.all(ob(t, o, r))
    }
    return s.then( () => {
        t.notify("AnimationComplete", a)
    }
    )
}
function cb(t, a) {
    if (!Array.isArray(a))
        return !1;
    const r = a.length;
    if (r !== t.length)
        return !1;
    for (let s = 0; s < r; s++)
        if (a[s] !== t[s])
            return !1;
    return !0
}
const RE = Ud.length;
function fb(t) {
    if (!t)
        return;
    if (!t.isControllingVariants) {
        const r = t.parent ? fb(t.parent) || {} : {};
        return t.props.initial !== void 0 && (r.initial = t.props.initial),
        r
    }
    const a = {};
    for (let r = 0; r < RE; r++) {
        const s = Ud[r]
          , o = t.props[s];
        (rs(o) || o === !1) && (a[s] = o)
    }
    return a
}
const OE = [...Nd].reverse()
  , ME = Nd.length;
function jE(t) {
    return a => Promise.all(a.map( ({animation: r, options: s}) => CE(t, r, s)))
}
function NE(t) {
    let a = jE(t)
      , r = sy()
      , s = !0;
    const o = p => (m, y) => {
        const v = ki(t, y, p === "exit" ? t.presenceContext?.custom : void 0);
        if (v) {
            const {transition: S, transitionEnd: T, ...M} = v;
            m = {
                ...m,
                ...M,
                ...T
            }
        }
        return m
    }
    ;
    function c(p) {
        a = p(t)
    }
    function f(p) {
        const {props: m} = t
          , y = fb(t.parent) || {}
          , v = []
          , S = new Set;
        let T = {}
          , M = 1 / 0;
        for (let N = 0; N < ME; N++) {
            const V = OE[N]
              , R = r[V]
              , U = m[V] !== void 0 ? m[V] : y[V]
              , Y = rs(U)
              , $ = V === p ? R.isActive : null;
            $ === !1 && (M = N);
            let I = U === y[V] && U !== m[V] && Y;
            if (I && s && t.manuallyAnimateOnMount && (I = !1),
            R.protectedKeys = {
                ...T
            },
            !R.isActive && $ === null || !U && !R.prevProp || vo(U) || typeof U == "boolean")
                continue;
            const X = UE(R.prevProp, U);
            let F = X || V === p && R.isActive && !I && Y || N > M && Y
              , Q = !1;
            const se = Array.isArray(U) ? U : [U];
            let _e = se.reduce(o(V), {});
            $ === !1 && (_e = {});
            const {prevResolvedValues: Oe={}} = R
              , ft = {
                ...Oe,
                ..._e
            }
              , dt = G => {
                F = !0,
                S.has(G) && (Q = !0,
                S.delete(G)),
                R.needsAnimating[G] = !0;
                const ee = t.getValue(G);
                ee && (ee.liveStyle = !1)
            }
            ;
            for (const G in ft) {
                const ee = _e[G]
                  , me = Oe[G];
                if (T.hasOwnProperty(G))
                    continue;
                let ve = !1;
                Bf(ee) && Bf(me) ? ve = !cb(ee, me) : ve = ee !== me,
                ve ? ee != null ? dt(G) : S.add(G) : ee !== void 0 && S.has(G) ? dt(G) : R.protectedKeys[G] = !0
            }
            R.prevProp = U,
            R.prevResolvedValues = _e,
            R.isActive && (T = {
                ...T,
                ..._e
            }),
            s && t.blockInitialAnimation && (F = !1);
            const bt = I && X;
            F && (!bt || Q) && v.push(...se.map(G => {
                const ee = {
                    type: V
                };
                if (typeof G == "string" && s && !bt && t.manuallyAnimateOnMount && t.parent) {
                    const {parent: me} = t
                      , ve = ki(me, G);
                    if (me.enteringChildren && ve) {
                        const {delayChildren: _} = ve.transition || {};
                        ee.delay = ub(me.enteringChildren, t, _)
                    }
                }
                return {
                    animation: G,
                    options: ee
                }
            }
            ))
        }
        if (S.size) {
            const N = {};
            if (typeof m.initial != "boolean") {
                const V = ki(t, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                V && V.transition && (N.transition = V.transition)
            }
            S.forEach(V => {
                const R = t.getBaseTarget(V)
                  , U = t.getValue(V);
                U && (U.liveStyle = !0),
                N[V] = R ?? null
            }
            ),
            v.push({
                animation: N
            })
        }
        let D = !!v.length;
        return s && (m.initial === !1 || m.initial === m.animate) && !t.manuallyAnimateOnMount && (D = !1),
        s = !1,
        D ? a(v) : Promise.resolve()
    }
    function h(p, m) {
        if (r[p].isActive === m)
            return Promise.resolve();
        t.variantChildren?.forEach(v => v.animationState?.setActive(p, m)),
        r[p].isActive = m;
        const y = f(p);
        for (const v in r)
            r[v].protectedKeys = {};
        return y
    }
    return {
        animateChanges: f,
        setActive: h,
        setAnimateFunction: c,
        getState: () => r,
        reset: () => {
            r = sy()
        }
    }
}
function UE(t, a) {
    return typeof a == "string" ? a !== t : Array.isArray(a) ? !cb(a, t) : !1
}
function Va(t=!1) {
    return {
        isActive: t,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function sy() {
    return {
        animate: Va(!0),
        whileInView: Va(),
        whileHover: Va(),
        whileTap: Va(),
        whileDrag: Va(),
        whileFocus: Va(),
        exit: Va()
    }
}
class pa {
    constructor(a) {
        this.isMounted = !1,
        this.node = a
    }
    update() {}
}
class LE extends pa {
    constructor(a) {
        super(a),
        a.animationState || (a.animationState = NE(a))
    }
    updateAnimationControlsSubscription() {
        const {animate: a} = this.node.getProps();
        vo(a) && (this.unmountControls = a.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: a} = this.node.getProps()
          , {animate: r} = this.node.prevProps || {};
        a !== r && this.updateAnimationControlsSubscription()
    }
    unmount() {
        this.node.animationState.reset(),
        this.unmountControls?.()
    }
}
let VE = 0;
class BE extends pa {
    constructor() {
        super(...arguments),
        this.id = VE++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: a, onExitComplete: r} = this.node.presenceContext
          , {isPresent: s} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || a === s)
            return;
        const o = this.node.animationState.setActive("exit", !a);
        r && !a && o.then( () => {
            r(this.id)
        }
        )
    }
    mount() {
        const {register: a, onExitComplete: r} = this.node.presenceContext || {};
        r && r(this.id),
        a && (this.unmount = a(this.id))
    }
    unmount() {}
}
const kE = {
    animation: {
        Feature: LE
    },
    exit: {
        Feature: BE
    }
};
function ls(t, a, r, s={
    passive: !0
}) {
    return t.addEventListener(a, r, s),
    () => t.removeEventListener(a, r)
}
function vs(t) {
    return {
        point: {
            x: t.pageX,
            y: t.pageY
        }
    }
}
const ZE = t => a => Md(a) && t(a, vs(a));
function Ir(t, a, r, s) {
    return ls(t, a, ZE(r), s)
}
const db = 1e-4
  , HE = 1 - db
  , qE = 1 + db
  , hb = .01
  , PE = 0 - hb
  , YE = 0 + hb;
function vt(t) {
    return t.max - t.min
}
function GE(t, a, r) {
    return Math.abs(t - a) <= r
}
function ly(t, a, r, s=.5) {
    t.origin = s,
    t.originPoint = Ve(a.min, a.max, t.origin),
    t.scale = vt(r) / vt(a),
    t.translate = Ve(r.min, r.max, t.origin) - t.originPoint,
    (t.scale >= HE && t.scale <= qE || isNaN(t.scale)) && (t.scale = 1),
    (t.translate >= PE && t.translate <= YE || isNaN(t.translate)) && (t.translate = 0)
}
function Wr(t, a, r, s) {
    ly(t.x, a.x, r.x, s ? s.originX : void 0),
    ly(t.y, a.y, r.y, s ? s.originY : void 0)
}
function oy(t, a, r) {
    t.min = r.min + a.min,
    t.max = t.min + vt(a)
}
function $E(t, a, r) {
    oy(t.x, a.x, r.x),
    oy(t.y, a.y, r.y)
}
function uy(t, a, r) {
    t.min = a.min - r.min,
    t.max = t.min + vt(a)
}
function es(t, a, r) {
    uy(t.x, a.x, r.x),
    uy(t.y, a.y, r.y)
}
function Ft(t) {
    return [t("x"), t("y")]
}
const mb = ({current: t}) => t ? t.ownerDocument.defaultView : null
  , cy = (t, a) => Math.abs(t - a);
function XE(t, a) {
    const r = cy(t.x, a.x)
      , s = cy(t.y, a.y);
    return Math.sqrt(r ** 2 + s ** 2)
}
class pb {
    constructor(a, r, {transformPagePoint: s, contextWindow: o=window, dragSnapToOrigin: c=!1, distanceThreshold: f=3}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const S = of(this.lastMoveEventInfo, this.history)
              , T = this.startEvent !== null
              , M = XE(S.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!T && !M)
                return;
            const {point: D} = S
              , {timestamp: N} = ut;
            this.history.push({
                ...D,
                timestamp: N
            });
            const {onStart: V, onMove: R} = this.handlers;
            T || (V && V(this.lastMoveEvent, S),
            this.startEvent = this.lastMoveEvent),
            R && R(this.lastMoveEvent, S)
        }
        ,
        this.handlePointerMove = (S, T) => {
            this.lastMoveEvent = S,
            this.lastMoveEventInfo = lf(T, this.transformPagePoint),
            Ue.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (S, T) => {
            this.end();
            const {onEnd: M, onSessionEnd: D, resumeAnimation: N} = this.handlers;
            if (this.dragSnapToOrigin && N && N(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const V = of(S.type === "pointercancel" ? this.lastMoveEventInfo : lf(T, this.transformPagePoint), this.history);
            this.startEvent && M && M(S, V),
            D && D(S, V)
        }
        ,
        !Md(a))
            return;
        this.dragSnapToOrigin = c,
        this.handlers = r,
        this.transformPagePoint = s,
        this.distanceThreshold = f,
        this.contextWindow = o || window;
        const h = vs(a)
          , p = lf(h, this.transformPagePoint)
          , {point: m} = p
          , {timestamp: y} = ut;
        this.history = [{
            ...m,
            timestamp: y
        }];
        const {onSessionStart: v} = r;
        v && v(a, of(p, this.history)),
        this.removeListeners = ps(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(a) {
        this.handlers = a
    }
    end() {
        this.removeListeners && this.removeListeners(),
        ha(this.updatePoint)
    }
}
function lf(t, a) {
    return a ? {
        point: a(t.point)
    } : t
}
function fy(t, a) {
    return {
        x: t.x - a.x,
        y: t.y - a.y
    }
}
function of({point: t}, a) {
    return {
        point: t,
        delta: fy(t, gb(a)),
        offset: fy(t, KE(a)),
        velocity: QE(a, .1)
    }
}
function KE(t) {
    return t[0]
}
function gb(t) {
    return t[t.length - 1]
}
function QE(t, a) {
    if (t.length < 2)
        return {
            x: 0,
            y: 0
        };
    let r = t.length - 1
      , s = null;
    const o = gb(t);
    for (; r >= 0 && (s = t[r],
    !(o.timestamp - s.timestamp > hn(a))); )
        r--;
    if (!s)
        return {
            x: 0,
            y: 0
        };
    const c = Jt(o.timestamp - s.timestamp);
    if (c === 0)
        return {
            x: 0,
            y: 0
        };
    const f = {
        x: (o.x - s.x) / c,
        y: (o.y - s.y) / c
    };
    return f.x === 1 / 0 && (f.x = 0),
    f.y === 1 / 0 && (f.y = 0),
    f
}
function FE(t, {min: a, max: r}, s) {
    return a !== void 0 && t < a ? t = s ? Ve(a, t, s.min) : Math.max(t, a) : r !== void 0 && t > r && (t = s ? Ve(r, t, s.max) : Math.min(t, r)),
    t
}
function dy(t, a, r) {
    return {
        min: a !== void 0 ? t.min + a : void 0,
        max: r !== void 0 ? t.max + r - (t.max - t.min) : void 0
    }
}
function JE(t, {top: a, left: r, bottom: s, right: o}) {
    return {
        x: dy(t.x, r, o),
        y: dy(t.y, a, s)
    }
}
function hy(t, a) {
    let r = a.min - t.min
      , s = a.max - t.max;
    return a.max - a.min < t.max - t.min && ([r,s] = [s, r]),
    {
        min: r,
        max: s
    }
}
function IE(t, a) {
    return {
        x: hy(t.x, a.x),
        y: hy(t.y, a.y)
    }
}
function WE(t, a) {
    let r = .5;
    const s = vt(t)
      , o = vt(a);
    return o > s ? r = ns(a.min, a.max - s, t.min) : s > o && (r = ns(t.min, t.max - o, a.min)),
    Vn(0, 1, r)
}
function e5(t, a) {
    const r = {};
    return a.min !== void 0 && (r.min = a.min - t.min),
    a.max !== void 0 && (r.max = a.max - t.min),
    r
}
const Hf = .35;
function t5(t=Hf) {
    return t === !1 ? t = 0 : t === !0 && (t = Hf),
    {
        x: my(t, "left", "right"),
        y: my(t, "top", "bottom")
    }
}
function my(t, a, r) {
    return {
        min: py(t, a),
        max: py(t, r)
    }
}
function py(t, a) {
    return typeof t == "number" ? t : t[a] || 0
}
const n5 = new WeakMap;
class a5 {
    constructor(a) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = $e(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = a
    }
    start(a, {snapToCursor: r=!1, distanceThreshold: s}={}) {
        const {presenceContext: o} = this.visualElement;
        if (o && o.isPresent === !1)
            return;
        const c = v => {
            const {dragSnapToOrigin: S} = this.getProps();
            S ? this.pauseAnimation() : this.stopAnimation(),
            r && this.snapToCursor(vs(v).point)
        }
          , f = (v, S) => {
            const {drag: T, dragPropagation: M, onDragStart: D} = this.getProps();
            if (T && !M && (this.openDragLock && this.openDragLock(),
            this.openDragLock = cA(T),
            !this.openDragLock))
                return;
            this.latestPointerEvent = v,
            this.latestPanInfo = S,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Ft(V => {
                let R = this.getAxisMotionValue(V).get() || 0;
                if (mn.test(R)) {
                    const {projection: U} = this.visualElement;
                    if (U && U.layout) {
                        const Y = U.layout.layoutBox[V];
                        Y && (R = vt(Y) * (parseFloat(R) / 100))
                    }
                }
                this.originPoint[V] = R
            }
            ),
            D && Ue.postRender( () => D(v, S)),
            kf(this.visualElement, "transform");
            const {animationState: N} = this.visualElement;
            N && N.setActive("whileDrag", !0)
        }
          , h = (v, S) => {
            this.latestPointerEvent = v,
            this.latestPanInfo = S;
            const {dragPropagation: T, dragDirectionLock: M, onDirectionLock: D, onDrag: N} = this.getProps();
            if (!T && !this.openDragLock)
                return;
            const {offset: V} = S;
            if (M && this.currentDirection === null) {
                this.currentDirection = i5(V),
                this.currentDirection !== null && D && D(this.currentDirection);
                return
            }
            this.updateAxis("x", S.point, V),
            this.updateAxis("y", S.point, V),
            this.visualElement.render(),
            N && N(v, S)
        }
          , p = (v, S) => {
            this.latestPointerEvent = v,
            this.latestPanInfo = S,
            this.stop(v, S),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , m = () => Ft(v => this.getAnimationState(v) === "paused" && this.getAxisMotionValue(v).animation?.play())
          , {dragSnapToOrigin: y} = this.getProps();
        this.panSession = new pb(a,{
            onSessionStart: c,
            onStart: f,
            onMove: h,
            onSessionEnd: p,
            resumeAnimation: m
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: y,
            distanceThreshold: s,
            contextWindow: mb(this.visualElement)
        })
    }
    stop(a, r) {
        const s = a || this.latestPointerEvent
          , o = r || this.latestPanInfo
          , c = this.isDragging;
        if (this.cancel(),
        !c || !o || !s)
            return;
        const {velocity: f} = o;
        this.startAnimation(f);
        const {onDragEnd: h} = this.getProps();
        h && Ue.postRender( () => h(s, o))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: a, animationState: r} = this.visualElement;
        a && (a.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: s} = this.getProps();
        !s && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        r && r.setActive("whileDrag", !1)
    }
    updateAxis(a, r, s) {
        const {drag: o} = this.getProps();
        if (!s || !ql(a, o, this.currentDirection))
            return;
        const c = this.getAxisMotionValue(a);
        let f = this.originPoint[a] + s[a];
        this.constraints && this.constraints[a] && (f = FE(f, this.constraints[a], this.elastic[a])),
        c.set(f)
    }
    resolveConstraints() {
        const {dragConstraints: a, dragElastic: r} = this.getProps()
          , s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
          , o = this.constraints;
        a && Ni(a) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : a && s ? this.constraints = JE(s.layoutBox, a) : this.constraints = !1,
        this.elastic = t5(r),
        o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Ft(c => {
            this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = e5(s.layoutBox[c], this.constraints[c]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: a, onMeasureDragConstraints: r} = this.getProps();
        if (!a || !Ni(a))
            return !1;
        const s = a.current
          , {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const c = sE(s, o.root, this.visualElement.getTransformPagePoint());
        let f = IE(o.layout.layoutBox, c);
        if (r) {
            const h = r(aE(f));
            this.hasMutatedConstraints = !!h,
            h && (f = W1(h))
        }
        return f
    }
    startAnimation(a) {
        const {drag: r, dragMomentum: s, dragElastic: o, dragTransition: c, dragSnapToOrigin: f, onDragTransitionEnd: h} = this.getProps()
          , p = this.constraints || {}
          , m = Ft(y => {
            if (!ql(y, r, this.currentDirection))
                return;
            let v = p && p[y] || {};
            f && (v = {
                min: 0,
                max: 0
            });
            const S = o ? 200 : 1e6
              , T = o ? 40 : 1e7
              , M = {
                type: "inertia",
                velocity: s ? a[y] : 0,
                bounceStiffness: S,
                bounceDamping: T,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...c,
                ...v
            };
            return this.startAxisValueAnimation(y, M)
        }
        );
        return Promise.all(m).then(h)
    }
    startAxisValueAnimation(a, r) {
        const s = this.getAxisMotionValue(a);
        return kf(this.visualElement, a),
        s.start(Pd(a, s, 0, r, this.visualElement, !1))
    }
    stopAnimation() {
        Ft(a => this.getAxisMotionValue(a).stop())
    }
    pauseAnimation() {
        Ft(a => this.getAxisMotionValue(a).animation?.pause())
    }
    getAnimationState(a) {
        return this.getAxisMotionValue(a).animation?.state
    }
    getAxisMotionValue(a) {
        const r = `_drag${a.toUpperCase()}`
          , s = this.visualElement.getProps()
          , o = s[r];
        return o || this.visualElement.getValue(a, (s.initial ? s.initial[a] : void 0) || 0)
    }
    snapToCursor(a) {
        Ft(r => {
            const {drag: s} = this.getProps();
            if (!ql(r, s, this.currentDirection))
                return;
            const {projection: o} = this.visualElement
              , c = this.getAxisMotionValue(r);
            if (o && o.layout) {
                const {min: f, max: h} = o.layout.layoutBox[r];
                c.set(a[r] - Ve(f, h, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: a, dragConstraints: r} = this.getProps()
          , {projection: s} = this.visualElement;
        if (!Ni(r) || !s || !this.constraints)
            return;
        this.stopAnimation();
        const o = {
            x: 0,
            y: 0
        };
        Ft(f => {
            const h = this.getAxisMotionValue(f);
            if (h && this.constraints !== !1) {
                const p = h.get();
                o[f] = WE({
                    min: p,
                    max: p
                }, this.constraints[f])
            }
        }
        );
        const {transformTemplate: c} = this.visualElement.getProps();
        this.visualElement.current.style.transform = c ? c({}, "") : "none",
        s.root && s.root.updateScroll(),
        s.updateLayout(),
        this.resolveConstraints(),
        Ft(f => {
            if (!ql(f, a, null))
                return;
            const h = this.getAxisMotionValue(f)
              , {min: p, max: m} = this.constraints[f];
            h.set(Ve(p, m, o[f]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        n5.set(this.visualElement, this);
        const a = this.visualElement.current
          , r = Ir(a, "pointerdown", p => {
            const {drag: m, dragListener: y=!0} = this.getProps();
            m && y && this.start(p)
        }
        )
          , s = () => {
            const {dragConstraints: p} = this.getProps();
            Ni(p) && p.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: o} = this.visualElement
          , c = o.addEventListener("measure", s);
        o && !o.layout && (o.root && o.root.updateScroll(),
        o.updateLayout()),
        Ue.read(s);
        const f = ls(window, "resize", () => this.scalePositionWithinConstraints())
          , h = o.addEventListener("didUpdate", ( ({delta: p, hasLayoutChanged: m}) => {
            this.isDragging && m && (Ft(y => {
                const v = this.getAxisMotionValue(y);
                v && (this.originPoint[y] += p[y].translate,
                v.set(v.get() + p[y].translate))
            }
            ),
            this.visualElement.render())
        }
        ));
        return () => {
            f(),
            r(),
            c(),
            h && h()
        }
    }
    getProps() {
        const a = this.visualElement.getProps()
          , {drag: r=!1, dragDirectionLock: s=!1, dragPropagation: o=!1, dragConstraints: c=!1, dragElastic: f=Hf, dragMomentum: h=!0} = a;
        return {
            ...a,
            drag: r,
            dragDirectionLock: s,
            dragPropagation: o,
            dragConstraints: c,
            dragElastic: f,
            dragMomentum: h
        }
    }
}
function ql(t, a, r) {
    return (a === !0 || a === t) && (r === null || r === t)
}
function i5(t, a=10) {
    let r = null;
    return Math.abs(t.y) > a ? r = "y" : Math.abs(t.x) > a && (r = "x"),
    r
}
class r5 extends pa {
    constructor(a) {
        super(a),
        this.removeGroupControls = It,
        this.removeListeners = It,
        this.controls = new a5(a)
    }
    mount() {
        const {dragControls: a} = this.node.getProps();
        a && (this.removeGroupControls = a.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || It
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const gy = t => (a, r) => {
    t && Ue.postRender( () => t(a, r))
}
;
class s5 extends pa {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = It
    }
    onPointerDown(a) {
        this.session = new pb(a,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: mb(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: a, onPanStart: r, onPan: s, onPanEnd: o} = this.node.getProps();
        return {
            onSessionStart: gy(a),
            onStart: gy(r),
            onMove: s,
            onEnd: (c, f) => {
                delete this.session,
                o && Ue.postRender( () => o(c, f))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ir(this.node.current, "pointerdown", a => this.onPointerDown(a))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const Wl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function yy(t, a) {
    return a.max === a.min ? 0 : t / (a.max - a.min) * 100
}
const $r = {
    correct: (t, a) => {
        if (!a.target)
            return t;
        if (typeof t == "string")
            if (re.test(t))
                t = parseFloat(t);
            else
                return t;
        const r = yy(t, a.target.x)
          , s = yy(t, a.target.y);
        return `${r}% ${s}%`
    }
}
  , l5 = {
    correct: (t, {treeScale: a, projectionDelta: r}) => {
        const s = t
          , o = ma.parse(t);
        if (o.length > 5)
            return s;
        const c = ma.createTransformer(t)
          , f = typeof o[0] != "number" ? 1 : 0
          , h = r.x.scale * a.x
          , p = r.y.scale * a.y;
        o[0 + f] /= h,
        o[1 + f] /= p;
        const m = Ve(h, p, .5);
        return typeof o[2 + f] == "number" && (o[2 + f] /= m),
        typeof o[3 + f] == "number" && (o[3 + f] /= m),
        c(o)
    }
};
let uf = !1;
class o5 extends A.Component {
    componentDidMount() {
        const {visualElement: a, layoutGroup: r, switchLayoutGroup: s, layoutId: o} = this.props
          , {projection: c} = a;
        OA(u5),
        c && (r.group && r.group.add(c),
        s && s.register && o && s.register(c),
        uf && c.root.didUpdate(),
        c.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        c.setOptions({
            ...c.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Wl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(a) {
        const {layoutDependency: r, visualElement: s, drag: o, isPresent: c} = this.props
          , {projection: f} = s;
        return f && (f.isPresent = c,
        uf = !0,
        o || a.layoutDependency !== r || r === void 0 || a.isPresent !== c ? f.willUpdate() : this.safeToRemove(),
        a.isPresent !== c && (c ? f.promote() : f.relegate() || Ue.postRender( () => {
            const h = f.getStack();
            (!h || !h.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: a} = this.props.visualElement;
        a && (a.root.didUpdate(),
        Od.postRender( () => {
            !a.currentAnimation && a.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: a, layoutGroup: r, switchLayoutGroup: s} = this.props
          , {projection: o} = a;
        uf = !0,
        o && (o.scheduleCheckAfterUnmount(),
        r && r.group && r.group.remove(o),
        s && s.deregister && s.deregister(o))
    }
    safeToRemove() {
        const {safeToRemove: a} = this.props;
        a && a()
    }
    render() {
        return null
    }
}
function yb(t) {
    const [a,r] = B1()
      , s = A.useContext(ud);
    return x.jsx(o5, {
        ...t,
        layoutGroup: s,
        switchLayoutGroup: A.useContext(J1),
        isPresent: a,
        safeToRemove: r
    })
}
const u5 = {
    borderRadius: {
        ...$r,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: $r,
    borderTopRightRadius: $r,
    borderBottomLeftRadius: $r,
    borderBottomRightRadius: $r,
    boxShadow: l5
};
function c5(t, a, r) {
    const s = mt(t) ? t : qi(t);
    return s.start(Pd("", s, a, r)),
    s.animation
}
const f5 = (t, a) => t.depth - a.depth;
class d5 {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(a) {
        dd(this.children, a),
        this.isDirty = !0
    }
    remove(a) {
        hd(this.children, a),
        this.isDirty = !0
    }
    forEach(a) {
        this.isDirty && this.children.sort(f5),
        this.isDirty = !1,
        this.children.forEach(a)
    }
}
function h5(t, a) {
    const r = zt.now()
      , s = ({timestamp: o}) => {
        const c = o - r;
        c >= a && (ha(s),
        t(c - a))
    }
    ;
    return Ue.setup(s, !0),
    () => ha(s)
}
const vb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , m5 = vb.length
  , vy = t => typeof t == "string" ? parseFloat(t) : t
  , by = t => typeof t == "number" || re.test(t);
function p5(t, a, r, s, o, c) {
    o ? (t.opacity = Ve(0, r.opacity ?? 1, g5(s)),
    t.opacityExit = Ve(a.opacity ?? 1, 0, y5(s))) : c && (t.opacity = Ve(a.opacity ?? 1, r.opacity ?? 1, s));
    for (let f = 0; f < m5; f++) {
        const h = `border${vb[f]}Radius`;
        let p = xy(a, h)
          , m = xy(r, h);
        if (p === void 0 && m === void 0)
            continue;
        p || (p = 0),
        m || (m = 0),
        p === 0 || m === 0 || by(p) === by(m) ? (t[h] = Math.max(Ve(vy(p), vy(m), s), 0),
        (mn.test(m) || mn.test(p)) && (t[h] += "%")) : t[h] = m
    }
    (a.rotate || r.rotate) && (t.rotate = Ve(a.rotate || 0, r.rotate || 0, s))
}
function xy(t, a) {
    return t[a] !== void 0 ? t[a] : t.borderRadius
}
const g5 = bb(0, .5, i1)
  , y5 = bb(.5, .95, It);
function bb(t, a, r) {
    return s => s < t ? 0 : s > a ? 1 : r(ns(t, a, s))
}
function Sy(t, a) {
    t.min = a.min,
    t.max = a.max
}
function Qt(t, a) {
    Sy(t.x, a.x),
    Sy(t.y, a.y)
}
function Ty(t, a) {
    t.translate = a.translate,
    t.scale = a.scale,
    t.originPoint = a.originPoint,
    t.origin = a.origin
}
function Ay(t, a, r, s, o) {
    return t -= a,
    t = so(t, 1 / r, s),
    o !== void 0 && (t = so(t, 1 / o, s)),
    t
}
function v5(t, a=0, r=1, s=.5, o, c=t, f=t) {
    if (mn.test(a) && (a = parseFloat(a),
    a = Ve(f.min, f.max, a / 100) - f.min),
    typeof a != "number")
        return;
    let h = Ve(c.min, c.max, s);
    t === c && (h -= a),
    t.min = Ay(t.min, a, r, h, o),
    t.max = Ay(t.max, a, r, h, o)
}
function Ey(t, a, [r,s,o], c, f) {
    v5(t, a[r], a[s], a[o], a.scale, c, f)
}
const b5 = ["x", "scaleX", "originX"]
  , x5 = ["y", "scaleY", "originY"];
function wy(t, a, r, s) {
    Ey(t.x, a, b5, r ? r.x : void 0, s ? s.x : void 0),
    Ey(t.y, a, x5, r ? r.y : void 0, s ? s.y : void 0)
}
function _y(t) {
    return t.translate === 0 && t.scale === 1
}
function xb(t) {
    return _y(t.x) && _y(t.y)
}
function zy(t, a) {
    return t.min === a.min && t.max === a.max
}
function S5(t, a) {
    return zy(t.x, a.x) && zy(t.y, a.y)
}
function Dy(t, a) {
    return Math.round(t.min) === Math.round(a.min) && Math.round(t.max) === Math.round(a.max)
}
function Sb(t, a) {
    return Dy(t.x, a.x) && Dy(t.y, a.y)
}
function Cy(t) {
    return vt(t.x) / vt(t.y)
}
function Ry(t, a) {
    return t.translate === a.translate && t.scale === a.scale && t.originPoint === a.originPoint
}
class T5 {
    constructor() {
        this.members = []
    }
    add(a) {
        dd(this.members, a),
        a.scheduleRender()
    }
    remove(a) {
        if (hd(this.members, a),
        a === this.prevLead && (this.prevLead = void 0),
        a === this.lead) {
            const r = this.members[this.members.length - 1];
            r && this.promote(r)
        }
    }
    relegate(a) {
        const r = this.members.findIndex(o => a === o);
        if (r === 0)
            return !1;
        let s;
        for (let o = r; o >= 0; o--) {
            const c = this.members[o];
            if (c.isPresent !== !1) {
                s = c;
                break
            }
        }
        return s ? (this.promote(s),
        !0) : !1
    }
    promote(a, r) {
        const s = this.lead;
        if (a !== s && (this.prevLead = s,
        this.lead = a,
        a.show(),
        s)) {
            s.instance && s.scheduleRender(),
            a.scheduleRender(),
            a.resumeFrom = s,
            r && (a.resumeFrom.preserveOpacity = !0),
            s.snapshot && (a.snapshot = s.snapshot,
            a.snapshot.latestValues = s.animationValues || s.latestValues),
            a.root && a.root.isUpdating && (a.isLayoutDirty = !0);
            const {crossfade: o} = a.options;
            o === !1 && s.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(a => {
            const {options: r, resumingFrom: s} = a;
            r.onExitComplete && r.onExitComplete(),
            s && s.options.onExitComplete && s.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(a => {
            a.instance && a.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function A5(t, a, r) {
    let s = "";
    const o = t.x.translate / a.x
      , c = t.y.translate / a.y
      , f = r?.z || 0;
    if ((o || c || f) && (s = `translate3d(${o}px, ${c}px, ${f}px) `),
    (a.x !== 1 || a.y !== 1) && (s += `scale(${1 / a.x}, ${1 / a.y}) `),
    r) {
        const {transformPerspective: m, rotate: y, rotateX: v, rotateY: S, skewX: T, skewY: M} = r;
        m && (s = `perspective(${m}px) ${s}`),
        y && (s += `rotate(${y}deg) `),
        v && (s += `rotateX(${v}deg) `),
        S && (s += `rotateY(${S}deg) `),
        T && (s += `skewX(${T}deg) `),
        M && (s += `skewY(${M}deg) `)
    }
    const h = t.x.scale * a.x
      , p = t.y.scale * a.y;
    return (h !== 1 || p !== 1) && (s += `scale(${h}, ${p})`),
    s || "none"
}
const cf = ["", "X", "Y", "Z"]
  , E5 = 1e3;
let w5 = 0;
function ff(t, a, r, s) {
    const {latestValues: o} = a;
    o[t] && (r[t] = o[t],
    a.setStaticValue(t, 0),
    s && (s[t] = 0))
}
function Tb(t) {
    if (t.hasCheckedOptimisedAppear = !0,
    t.root === t)
        return;
    const {visualElement: a} = t.options;
    if (!a)
        return;
    const r = lb(a);
    if (window.MotionHasOptimisedAnimation(r, "transform")) {
        const {layout: o, layoutId: c} = t.options;
        window.MotionCancelOptimisedAnimation(r, "transform", Ue, !(o || c))
    }
    const {parent: s} = t;
    s && !s.hasCheckedOptimisedAppear && Tb(s)
}
function Ab({attachResizeListener: t, defaultParent: a, measureScroll: r, checkIsScrollRoot: s, resetTransform: o}) {
    return class {
        constructor(f={}, h=a?.()) {
            this.id = w5++,
            this.animationId = 0,
            this.animationCommitId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(D5),
                this.nodes.forEach(M5),
                this.nodes.forEach(j5),
                this.nodes.forEach(C5)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = f,
            this.root = h ? h.root || h : this,
            this.path = h ? [...h.path, h] : [],
            this.parent = h,
            this.depth = h ? h.depth + 1 : 0;
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new d5)
        }
        addEventListener(f, h) {
            return this.eventHandlers.has(f) || this.eventHandlers.set(f, new gd),
            this.eventHandlers.get(f).add(h)
        }
        notifyListeners(f, ...h) {
            const p = this.eventHandlers.get(f);
            p && p.notify(...h)
        }
        hasListeners(f) {
            return this.eventHandlers.has(f)
        }
        mount(f) {
            if (this.instance)
                return;
            this.isSVG = V1(f) && !gA(f),
            this.instance = f;
            const {layoutId: h, layout: p, visualElement: m} = this.options;
            if (m && !m.current && m.mount(f),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
            t) {
                let y, v = 0;
                const S = () => this.root.updateBlockedByResize = !1;
                Ue.read( () => {
                    v = window.innerWidth
                }
                ),
                t(f, () => {
                    const T = window.innerWidth;
                    T !== v && (v = T,
                    this.root.updateBlockedByResize = !0,
                    y && y(),
                    y = h5(S, 250),
                    Wl.hasAnimatedSinceResize && (Wl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(jy)))
                }
                )
            }
            h && this.root.registerSharedNode(h, this),
            this.options.animate !== !1 && m && (h || p) && this.addEventListener("didUpdate", ({delta: y, hasLayoutChanged: v, hasRelativeLayoutChanged: S, layout: T}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const M = this.options.transition || m.getDefaultTransition() || B5
                  , {onLayoutAnimationStart: D, onLayoutAnimationComplete: N} = m.getProps()
                  , V = !this.targetLayout || !Sb(this.targetLayout, T)
                  , R = !v && S;
                if (this.options.layoutRoot || this.resumeFrom || R || v && (V || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const U = {
                        ...Cd(M, "layout"),
                        onPlay: D,
                        onComplete: N
                    };
                    (m.shouldReduceMotion || this.options.layoutRoot) && (U.delay = 0,
                    U.type = !1),
                    this.startAnimation(U),
                    this.setAnimationOrigin(y, R)
                } else
                    v || jy(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = T
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const f = this.getStack();
            f && f.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            this.eventHandlers.clear(),
            ha(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(N5),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: f} = this.options;
            return f && f.getProps().transformTemplate
        }
        willUpdate(f=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Tb(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                v.shouldResetTransform = !0,
                v.updateScroll("snapshot"),
                v.options.layoutRoot && v.willUpdate(!1)
            }
            const {layoutId: h, layout: p} = this.options;
            if (h === void 0 && !p)
                return;
            const m = this.getTransformTemplate();
            this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            f && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Oy);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(My);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(O5),
            this.nodes.forEach(_5),
            this.nodes.forEach(z5)) : this.nodes.forEach(My),
            this.clearAllSnapshots();
            const h = zt.now();
            ut.delta = Vn(0, 1e3 / 60, h - ut.timestamp),
            ut.timestamp = h,
            ut.isProcessing = !0,
            Ic.update.process(ut),
            Ic.preRender.process(ut),
            Ic.render.process(ut),
            ut.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            Od.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(R5),
            this.sharedNodes.forEach(U5)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            Ue.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            Ue.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !vt(this.snapshot.measuredBox.x) && !vt(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const f = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = $e(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: h} = this.options;
            h && h.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0)
        }
        updateScroll(f="measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (h = !1),
            h && this.instance) {
                const p = s(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: f,
                    isRoot: p,
                    offset: r(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p
                }
            }
        }
        resetTransform() {
            if (!o)
                return;
            const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , h = this.projectionDelta && !xb(this.projectionDelta)
              , p = this.getTransformTemplate()
              , m = p ? p(this.latestValues, "") : void 0
              , y = m !== this.prevTransformTemplateValue;
            f && this.instance && (h || Ba(this.latestValues) || y) && (o(this.instance, m),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(f=!0) {
            const h = this.measurePageBox();
            let p = this.removeElementScroll(h);
            return f && (p = this.removeTransform(p)),
            k5(p),
            {
                animationId: this.root.animationId,
                measuredBox: h,
                layoutBox: p,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: f} = this.options;
            if (!f)
                return $e();
            const h = f.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(Z5))) {
                const {scroll: m} = this.root;
                m && (Ui(h.x, m.offset.x),
                Ui(h.y, m.offset.y))
            }
            return h
        }
        removeElementScroll(f) {
            const h = $e();
            if (Qt(h, f),
            this.scroll?.wasRoot)
                return h;
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p]
                  , {scroll: y, options: v} = m;
                m !== this.root && y && v.layoutScroll && (y.wasRoot && Qt(h, f),
                Ui(h.x, y.offset.x),
                Ui(h.y, y.offset.y))
            }
            return h
        }
        applyTransform(f, h=!1) {
            const p = $e();
            Qt(p, f);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !h && y.options.layoutScroll && y.scroll && y !== y.root && Li(p, {
                    x: -y.scroll.offset.x,
                    y: -y.scroll.offset.y
                }),
                Ba(y.latestValues) && Li(p, y.latestValues)
            }
            return Ba(this.latestValues) && Li(p, this.latestValues),
            p
        }
        removeTransform(f) {
            const h = $e();
            Qt(h, f);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !Ba(m.latestValues))
                    continue;
                Lf(m.latestValues) && m.updateSnapshot();
                const y = $e()
                  , v = m.measurePageBox();
                Qt(y, v),
                wy(h, m.latestValues, m.snapshot ? m.snapshot.layoutBox : void 0, y)
            }
            return Ba(this.latestValues) && wy(h, this.latestValues),
            h
        }
        setTargetDelta(f) {
            this.targetDelta = f,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(f) {
            this.options = {
                ...this.options,
                ...f,
                crossfade: f.crossfade !== void 0 ? f.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ut.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(f=!1) {
            const h = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
            const p = !!this.resumingFrom || this !== h;
            if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: y, layoutId: v} = this.options;
            if (!(!this.layout || !(y || v))) {
                if (this.resolvedRelativeTargetAt = ut.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const S = this.getClosestProjectingParent();
                    S && S.layout && this.animationProgress !== 1 ? (this.relativeParent = S,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = $e(),
                    this.relativeTargetOrigin = $e(),
                    es(this.relativeTargetOrigin, this.layout.layoutBox, S.layout.layoutBox),
                    Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $e(),
                this.targetWithTransforms = $e()),
                this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                $E(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Qt(this.target, this.layout.layoutBox),
                tb(this.target, this.targetDelta)) : Qt(this.target, this.layout.layoutBox),
                this.attemptToResolveRelativeTarget)) {
                    this.attemptToResolveRelativeTarget = !1;
                    const S = this.getClosestProjectingParent();
                    S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? (this.relativeParent = S,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = $e(),
                    this.relativeTargetOrigin = $e(),
                    es(this.relativeTargetOrigin, this.target, S.target),
                    Qt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Lf(this.parent.latestValues) || eb(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            const f = this.getLead()
              , h = !!this.resumingFrom || this !== f;
            let p = !0;
            if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
            h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
            this.resolvedRelativeTargetAt === ut.timestamp && (p = !1),
            p)
                return;
            const {layout: m, layoutId: y} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(m || y))
                return;
            Qt(this.layoutCorrected, this.layout.layoutBox);
            const v = this.treeScale.x
              , S = this.treeScale.y;
            rE(this.layoutCorrected, this.treeScale, this.path, h),
            f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox,
            f.targetWithTransforms = $e());
            const {target: T} = f;
            if (!T) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ty(this.prevProjectionDelta.x, this.projectionDelta.x),
            Ty(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Wr(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
            (this.treeScale.x !== v || this.treeScale.y !== S || !Ry(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ry(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", T))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(f=!0) {
            if (this.options.visualElement?.scheduleRender(),
            f) {
                const h = this.getStack();
                h && h.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Vi(),
            this.projectionDelta = Vi(),
            this.projectionDeltaWithTransform = Vi()
        }
        setAnimationOrigin(f, h=!1) {
            const p = this.snapshot
              , m = p ? p.latestValues : {}
              , y = {
                ...this.latestValues
            }
              , v = Vi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !h;
            const S = $e()
              , T = p ? p.source : void 0
              , M = this.layout ? this.layout.source : void 0
              , D = T !== M
              , N = this.getStack()
              , V = !N || N.members.length <= 1
              , R = !!(D && !V && this.options.crossfade === !0 && !this.path.some(V5));
            this.animationProgress = 0;
            let U;
            this.mixTargetDelta = Y => {
                const $ = Y / 1e3;
                Ny(v.x, f.x, $),
                Ny(v.y, f.y, $),
                this.setTargetDelta(v),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (es(S, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                L5(this.relativeTarget, this.relativeTargetOrigin, S, $),
                U && S5(this.relativeTarget, U) && (this.isProjectionDirty = !1),
                U || (U = $e()),
                Qt(U, this.relativeTarget)),
                D && (this.animationValues = y,
                p5(y, m, this.latestValues, $, R, V)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = $
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(f) {
            this.notifyListeners("animationStart"),
            this.currentAnimation?.stop(),
            this.resumingFrom?.currentAnimation?.stop(),
            this.pendingAnimation && (ha(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = Ue.update( () => {
                Wl.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = qi(0)),
                this.currentAnimation = c5(this.motionValue, [0, 1e3], {
                    ...f,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: h => {
                        this.mixTargetDelta(h),
                        f.onUpdate && f.onUpdate(h)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
                        f.onComplete && f.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const f = this.getStack();
            f && f.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(E5),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const f = this.getLead();
            let {targetWithTransforms: h, target: p, layout: m, latestValues: y} = f;
            if (!(!h || !p || !m)) {
                if (this !== f && this.layout && m && Eb(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
                    p = this.target || $e();
                    const v = vt(this.layout.layoutBox.x);
                    p.x.min = f.target.x.min,
                    p.x.max = p.x.min + v;
                    const S = vt(this.layout.layoutBox.y);
                    p.y.min = f.target.y.min,
                    p.y.max = p.y.min + S
                }
                Qt(h, p),
                Li(h, y),
                Wr(this.projectionDeltaWithTransform, this.layoutCorrected, h, y)
            }
        }
        registerSharedNode(f, h) {
            this.sharedNodes.has(f) || this.sharedNodes.set(f, new T5),
            this.sharedNodes.get(f).add(h);
            const m = h.options.initialPromotionConfig;
            h.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
            })
        }
        isLead() {
            const f = this.getStack();
            return f ? f.lead === this : !0
        }
        getLead() {
            const {layoutId: f} = this.options;
            return f ? this.getStack()?.lead || this : this
        }
        getPrevLead() {
            const {layoutId: f} = this.options;
            return f ? this.getStack()?.prevLead : void 0
        }
        getStack() {
            const {layoutId: f} = this.options;
            if (f)
                return this.root.sharedNodes.get(f)
        }
        promote({needsReset: f, transition: h, preserveFollowOpacity: p}={}) {
            const m = this.getStack();
            m && m.promote(this, p),
            f && (this.projectionDelta = void 0,
            this.needsReset = !0),
            h && this.setOptions({
                transition: h
            })
        }
        relegate() {
            const f = this.getStack();
            return f ? f.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: f} = this.options;
            if (!f)
                return;
            let h = !1;
            const {latestValues: p} = f;
            if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0),
            !h)
                return;
            const m = {};
            p.z && ff("z", f, m, this.animationValues);
            for (let y = 0; y < cf.length; y++)
                ff(`rotate${cf[y]}`, f, m, this.animationValues),
                ff(`skew${cf[y]}`, f, m, this.animationValues);
            f.render();
            for (const y in m)
                f.setStaticValue(y, m[y]),
                this.animationValues && (this.animationValues[y] = m[y]);
            f.scheduleRender()
        }
        applyProjectionStyles(f, h) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                f.visibility = "hidden";
                return
            }
            const p = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                f.visibility = "",
                f.opacity = "",
                f.pointerEvents = Il(h?.pointerEvents) || "",
                f.transform = p ? p(this.latestValues, "") : "none";
                return
            }
            const m = this.getLead();
            if (!this.projectionDelta || !this.layout || !m.target) {
                this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                f.pointerEvents = Il(h?.pointerEvents) || ""),
                this.hasProjected && !Ba(this.latestValues) && (f.transform = p ? p({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            f.visibility = "";
            const y = m.animationValues || m.latestValues;
            this.applyTransformsToTarget();
            let v = A5(this.projectionDeltaWithTransform, this.treeScale, y);
            p && (v = p(y, v)),
            f.transform = v;
            const {x: S, y: T} = this.projectionDelta;
            f.transformOrigin = `${S.origin * 100}% ${T.origin * 100}% 0`,
            m.animationValues ? f.opacity = m === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : f.opacity = m === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
            for (const M in ss) {
                if (y[M] === void 0)
                    continue;
                const {correct: D, applyTo: N, isCSSVariable: V} = ss[M]
                  , R = v === "none" ? y[M] : D(y[M], m);
                if (N) {
                    const U = N.length;
                    for (let Y = 0; Y < U; Y++)
                        f[N[Y]] = R
                } else
                    V ? this.options.visualElement.renderState.vars[M] = R : f[M] = R
            }
            this.options.layoutId && (f.pointerEvents = m === this ? Il(h?.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(f => f.currentAnimation?.stop()),
            this.root.nodes.forEach(Oy),
            this.root.sharedNodes.clear()
        }
    }
}
function _5(t) {
    t.updateLayout()
}
function z5(t) {
    const a = t.resumeFrom?.snapshot || t.snapshot;
    if (t.isLead() && t.layout && a && t.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: s} = t.layout
          , {animationType: o} = t.options
          , c = a.source !== t.layout.source;
        o === "size" ? Ft(y => {
            const v = c ? a.measuredBox[y] : a.layoutBox[y]
              , S = vt(v);
            v.min = r[y].min,
            v.max = v.min + S
        }
        ) : Eb(o, a.layoutBox, r) && Ft(y => {
            const v = c ? a.measuredBox[y] : a.layoutBox[y]
              , S = vt(r[y]);
            v.max = v.min + S,
            t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0,
            t.relativeTarget[y].max = t.relativeTarget[y].min + S)
        }
        );
        const f = Vi();
        Wr(f, r, a.layoutBox);
        const h = Vi();
        c ? Wr(h, t.applyTransform(s, !0), a.measuredBox) : Wr(h, r, a.layoutBox);
        const p = !xb(f);
        let m = !1;
        if (!t.resumeFrom) {
            const y = t.getClosestProjectingParent();
            if (y && !y.resumeFrom) {
                const {snapshot: v, layout: S} = y;
                if (v && S) {
                    const T = $e();
                    es(T, a.layoutBox, v.layoutBox);
                    const M = $e();
                    es(M, r, S.layoutBox),
                    Sb(T, M) || (m = !0),
                    y.options.layoutRoot && (t.relativeTarget = M,
                    t.relativeTargetOrigin = T,
                    t.relativeParent = y)
                }
            }
        }
        t.notifyListeners("didUpdate", {
            layout: r,
            snapshot: a,
            delta: h,
            layoutDelta: f,
            hasLayoutChanged: p,
            hasRelativeLayoutChanged: m
        })
    } else if (t.isLead()) {
        const {onExitComplete: r} = t.options;
        r && r()
    }
    t.options.transition = void 0
}
function D5(t) {
    t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty),
    t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)),
    t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
}
function C5(t) {
    t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
}
function R5(t) {
    t.clearSnapshot()
}
function Oy(t) {
    t.clearMeasurements()
}
function My(t) {
    t.isLayoutDirty = !1
}
function O5(t) {
    const {visualElement: a} = t.options;
    a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
    t.resetTransform()
}
function jy(t) {
    t.finishAnimation(),
    t.targetDelta = t.relativeTarget = t.target = void 0,
    t.isProjectionDirty = !0
}
function M5(t) {
    t.resolveTargetDelta()
}
function j5(t) {
    t.calcProjection()
}
function N5(t) {
    t.resetSkewAndRotation()
}
function U5(t) {
    t.removeLeadSnapshot()
}
function Ny(t, a, r) {
    t.translate = Ve(a.translate, 0, r),
    t.scale = Ve(a.scale, 1, r),
    t.origin = a.origin,
    t.originPoint = a.originPoint
}
function Uy(t, a, r, s) {
    t.min = Ve(a.min, r.min, s),
    t.max = Ve(a.max, r.max, s)
}
function L5(t, a, r, s) {
    Uy(t.x, a.x, r.x, s),
    Uy(t.y, a.y, r.y, s)
}
function V5(t) {
    return t.animationValues && t.animationValues.opacityExit !== void 0
}
const B5 = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Ly = t => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t)
  , Vy = Ly("applewebkit/") && !Ly("chrome/") ? Math.round : It;
function By(t) {
    t.min = Vy(t.min),
    t.max = Vy(t.max)
}
function k5(t) {
    By(t.x),
    By(t.y)
}
function Eb(t, a, r) {
    return t === "position" || t === "preserve-aspect" && !GE(Cy(a), Cy(r), .2)
}
function Z5(t) {
    return t !== t.root && t.scroll?.wasRoot
}
const H5 = Ab({
    attachResizeListener: (t, a) => ls(t, "resize", a),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , df = {
    current: void 0
}
  , wb = Ab({
    measureScroll: t => ({
        x: t.scrollLeft,
        y: t.scrollTop
    }),
    defaultParent: () => {
        if (!df.current) {
            const t = new H5({});
            t.mount(window),
            t.setOptions({
                layoutScroll: !0
            }),
            df.current = t
        }
        return df.current
    }
    ,
    resetTransform: (t, a) => {
        t.style.transform = a !== void 0 ? a : "none"
    }
    ,
    checkIsScrollRoot: t => window.getComputedStyle(t).position === "fixed"
})
  , q5 = {
    pan: {
        Feature: s5
    },
    drag: {
        Feature: r5,
        ProjectionNode: wb,
        MeasureLayout: yb
    }
};
function ky(t, a, r) {
    const {props: s} = t;
    t.animationState && s.whileHover && t.animationState.setActive("whileHover", r === "Start");
    const o = "onHover" + r
      , c = s[o];
    c && Ue.postRender( () => c(a, vs(a)))
}
class P5 extends pa {
    mount() {
        const {current: a} = this.node;
        a && (this.unmount = fA(a, (r, s) => (ky(this.node, s, "Start"),
        o => ky(this.node, o, "End"))))
    }
    unmount() {}
}
class Y5 extends pa {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let a = !1;
        try {
            a = this.node.current.matches(":focus-visible")
        } catch {
            a = !0
        }
        !a || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = ps(ls(this.node.current, "focus", () => this.onFocus()), ls(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Zy(t, a, r) {
    const {props: s} = t;
    if (t.current instanceof HTMLButtonElement && t.current.disabled)
        return;
    t.animationState && s.whileTap && t.animationState.setActive("whileTap", r === "Start");
    const o = "onTap" + (r === "End" ? "" : r)
      , c = s[o];
    c && Ue.postRender( () => c(a, vs(a)))
}
class G5 extends pa {
    mount() {
        const {current: a} = this.node;
        a && (this.unmount = pA(a, (r, s) => (Zy(this.node, s, "Start"),
        (o, {success: c}) => Zy(this.node, o, c ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const qf = new WeakMap
  , hf = new WeakMap
  , $5 = t => {
    const a = qf.get(t.target);
    a && a(t)
}
  , X5 = t => {
    t.forEach($5)
}
;
function K5({root: t, ...a}) {
    const r = t || document;
    hf.has(r) || hf.set(r, {});
    const s = hf.get(r)
      , o = JSON.stringify(a);
    return s[o] || (s[o] = new IntersectionObserver(X5,{
        root: t,
        ...a
    })),
    s[o]
}
function Q5(t, a, r) {
    const s = K5(a);
    return qf.set(t, r),
    s.observe(t),
    () => {
        qf.delete(t),
        s.unobserve(t)
    }
}
const F5 = {
    some: 0,
    all: 1
};
class J5 extends pa {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: a={}} = this.node.getProps()
          , {root: r, margin: s, amount: o="some", once: c} = a
          , f = {
            root: r ? r.current : void 0,
            rootMargin: s,
            threshold: typeof o == "number" ? o : F5[o]
        }
          , h = p => {
            const {isIntersecting: m} = p;
            if (this.isInView === m || (this.isInView = m,
            c && !m && this.hasEnteredView))
                return;
            m && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", m);
            const {onViewportEnter: y, onViewportLeave: v} = this.node.getProps()
              , S = m ? y : v;
            S && S(p)
        }
        ;
        return Q5(this.node.current, f, h)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: a, prevProps: r} = this.node;
        ["amount", "margin", "root"].some(I5(a, r)) && this.startObserver()
    }
    unmount() {}
}
function I5({viewport: t={}}, {viewport: a={}}={}) {
    return r => t[r] !== a[r]
}
const W5 = {
    inView: {
        Feature: J5
    },
    tap: {
        Feature: G5
    },
    focus: {
        Feature: Y5
    },
    hover: {
        Feature: P5
    }
}
  , ew = {
    layout: {
        ProjectionNode: wb,
        MeasureLayout: yb
    }
}
  , tw = {
    ...kE,
    ...W5,
    ...q5,
    ...ew
}
  , pn = nE(tw, mE);
function nw() {
    !qd.current && ab();
    const [t] = A.useState(lo.current);
    return t
}
const Yd = ({children: t}) => x.jsx("div", {
    className: "surface-card block-appear flex flex-col px-5 py-4 rounded-[18px]",
    children: t
});
const aw = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , iw = t => t.replace(/^([A-Z])|[\s-_]+(\w)/g, (a, r, s) => s ? s.toUpperCase() : r.toLowerCase())
  , Hy = t => {
    const a = iw(t);
    return a.charAt(0).toUpperCase() + a.slice(1)
}
  , _b = (...t) => t.filter( (a, r, s) => !!a && a.trim() !== "" && s.indexOf(a) === r).join(" ").trim()
  , rw = t => {
    for (const a in t)
        if (a.startsWith("aria-") || a === "role" || a === "title")
            return !0
}
;
var sw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
const lw = A.forwardRef( ({color: t="currentColor", size: a=24, strokeWidth: r=2, absoluteStrokeWidth: s, className: o="", children: c, iconNode: f, ...h}, p) => A.createElement("svg", {
    ref: p,
    ...sw,
    width: a,
    height: a,
    stroke: t,
    strokeWidth: s ? Number(r) * 24 / Number(a) : r,
    className: _b("lucide", o),
    ...!c && !rw(h) && {
        "aria-hidden": "true"
    },
    ...h
}, [...f.map( ([m,y]) => A.createElement(m, y)), ...Array.isArray(c) ? c : [c]]));
const ow = (t, a) => {
    const r = A.forwardRef( ({className: s, ...o}, c) => A.createElement(lw, {
        ref: c,
        iconNode: a,
        className: _b(`lucide-${aw(Hy(t))}`, `lucide-${t}`, s),
        ...o
    }));
    return r.displayName = Hy(t),
    r
}
;
const uw = [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]
  , cw = ow("chevron-right", uw)
  , qy = ({subType: t="none", day: a=0, date: r="-", isActive: s=!0}) => {
    const o = m => {
        if (!s || m === 0)
            return "-";
        const y = m % 10
          , v = m % 100;
        return v >= 11 && v <= 14 ? `${m} дней` : y === 1 ? `${m} день` : y >= 2 && y <= 4 ? `${m} дня` : `${m} дней`
    }
      , c = m => {
        if (!m || m === "none")
            return "none";
        const y = m.toLowerCase();
        return y.includes("premium") ? "premium" : y.includes("trial") ? "trial" : y.includes("base") ? "base" : y
    }
      , f = m => {
        if (!s || !m || m === "none")
            return "Не активна";
        const y = m.toLowerCase();
        return y.includes("premium") ? "Плюс" : y.includes("trial") ? "Пробная" : y.includes("base") ? "Стандарт" : m.charAt(0).toUpperCase() + m.slice(1)
    }
      , h = c(t)
      , p = m => {
        if (!s)
            return "#FFFFFF";
        switch (m) {
        case "premium":
        case "trial":
            return "#EAC555";
        case "base":
            return "#187DE2";
        default:
            return "#FFFFFF"
        }
    }
    ;
    return x.jsx("section", {
        children: x.jsx(Yd, {
            children: x.jsxs("div", {
                className: "flex flex-col gap-[7px]",
                children: [x.jsxs("h3", {
                    className: "text-profile-title",
                    children: ["Подписка:", " ", x.jsx("span", {
                        className: "font-semibold inline-flex items-center gap-1",
                        style: {
                            color: p(h)
                        },
                        children: f(t)
                    })]
                }), x.jsxs("h3", {
                    className: "text-profile-title",
                    children: ["Осталось: ", x.jsx("strong", {
                        children: o(a)
                    })]
                }), x.jsxs("h3", {
                    className: "text-profile-title",
                    children: ["Дата окончания: ", x.jsx("strong", {
                        children: s && r ? r : "-"
                    })]
                })]
            })
        })
    })
}
;
var Py, Yy;
function Pf() {
    return Pf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Pf.apply(null, arguments)
}
var fw = function(a) {
    return A.createElement("svg", Pf({
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: 22,
        height: 22,
        fill: "none"
    }, a), Py || (Py = A.createElement("path", {
        fill: "url(#copy_svg__a)",
        d: "M0 0h21.744v21.744H0z"
    })), Yy || (Yy = A.createElement("defs", null, A.createElement("pattern", {
        id: "copy_svg__a",
        width: 1,
        height: 1,
        patternContentUnits: "objectBoundingBox"
    }, A.createElement("use", {
        xlinkHref: "#copy_svg__b",
        transform: "scale(.01)"
    })), A.createElement("image", {
        xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABfhJREFUeF7tnUmIH0UUxr/PhbihCMYFcYUEFFwiojFqEnALrkiMYox6UTwGEdSgh4gal5s5eNNDRMUFERcIorgFFwxEcAERxYOIMQke3HB99gs1Q8+k/zN5Vr3u+uOrU5ipqvfV9+vqqu6evCKiVOUAq1ITYhBAKrsIAkgAqcyByuTEDAkglTlQmZyYIQGkMgcqkxMzJICMdkBEjgWwGMBRAA4DMKcCv34AsBXAJwA2kfzbU9PgM0RE9gCwCsCtAE71HGyBvncAeBrA/SS/L9DfLl0MCkRETkwDPNljcI59/gLgLpKPlI4xGBARuQjAMwAOKj2oHvt7HMAtJP8qFXMQICKyAMC7APYvNZAB+1lPcnWp+L0DERGdEZ8BOLLUICroZxXJJ0voGALIAwDuLCG+oj6+AzCP5K+5mnoFIiIHA/gWwH65witsv5rk+lxdfQPR7e0TuaIrba/PKOfmausbiN5nV+aKrrS9PjDObRb4H3P0uQERkb1J/tkW12x13wewMEdw5W0XkPw4R6MLEBE5G8BDJM+ZBuQbAMfkCK687aUkX83RWBSIiOzZvH/SXdRtAHaQPHQaEH0vNDdHcOVtryb5XI7GYkBE5ID05H1xErQtgNjRlASyAcD1LQkBxM6jzJ8BicglAF6ZFj+ADAjkNQAXBBAMv4aIyCHpA45+12iXmCFDzBARORPABx2xA8hAQK4E8EIA2elAFbesFQCeDSAB5D/cENybxAxxt9gWIIDY/HKvHUDcLbYFCCA2v9xrBxB3i20BAojNL/faAcTdYluAAGLzy712AHG32BYggNj8cq8dQNwttgUIIDa/3GsHEHeLbQECiM0v99oBxN1iW4AAYvPLvXYAcbfYFiCA2Pxyrx1A3C22BQggNr/cawcQd4ttAQKIzS/32gHE3WJbgABi88u9dgBxt9gWIIDY/HKvHUDcLbYFCCA2v9xrBxB3i20BAojNL/faAcTdYluAAGLzy712AHG32BYggNj8cq8dQNwttgUYOyCakHhKQhrbeKuvvYLk8zkqs3OdiIjlf+F+3iSoOSFHcOVtl5J8O0djCSBXAehKSbSd5JRUTCLyepMe9rwcwZW3nU/yyxyNJYBcBuClDhGaXHgOyX8mficiDwK4I0dwxW01DfnhuUmVSwBZAuCtEUapQF03dhYROQvAexWbmiNtA8kbczrQtiWAHAfg6xFCFpL8sAVEE9RoTsKTcoVX2H4xSc3WnVVKAFGTf25yLO7boWQtyXvaPx+RWytrEBU0fpnk5SV0ZANJt6I3m9vW0g5BW0ieNv3nIjI9+1yJsQzVxzYAZ5DUBJ/ZpRSQuwHcO0LNIpKaHnayNIv7PgDeALAoewTDdvB7syZeSPKdUjJKAZkH4IsRa1JnxucE5bExTqy8vTl1Z3lJGEUW9daCrQvalDy9ravmBpK7pBgXEb0gbm7qrQVwRKmrzLkf3cbrLVcPdNEk/EVLkRmS1pGuRJgTYn8DsITkR13qRUTPEbkWwBVpLdKUszUVTSOubxn0eespkvpvl1ISiPa1aYZ1Qa+mZST1cK0ZSzpjRM8X6dq5zda85O91Nuhz1Fbvw8AmRBcDkmbJKQA2A9hrhCs/6QFgzc6r68m+pJFj21dRIAnKGgDrZnBEAOgb0TUkvxpb55yEewDRB0VNiqnrwUzlj5Sr8cXmxISNJPXks/99KQ4kzRK9929Mh0TujskKR0/e0XVG79mTLyR3p7Fznc0kH3aOMdm9C5AERY810myluvsa16IPfqeT/LSvAbgBSVB0cb8PwO0lXmT2ZUorjq5z+smgt+IKZGIUIqIfpR5t9vDzextZfiDdeFzT/p6T3+XsPfQCJM0WPWj4pjRbjp5d2qA1dKOxkqQ+0PZaegPSmi16G1sG4LrmQfJ8AJrMv5ai33XWkdR3bIOU3oG0R5lOitY/etBDio8HoOccHti8Odajk/oqut3WV+db0vHc+pw0WBkUyGCjrjhwAKkMTgAJIJU5UJmcmCEBpDIHKpMTMySAVOZAZXJihgSQyhyoTM6/COXjg75IGLUAAAAASUVORK5CYII=",
        id: "copy_svg__b",
        width: 100,
        height: 100,
        preserveAspectRatio: "none"
    }))))
};
const dw = ({keyValue: t}) => {
    const [a,r] = A.useState(!1)
      , s = () => {
        t && navigator.clipboard.writeText(t).then( () => {
            b3(),
            r(!0),
            setTimeout( () => r(!1), 2e3)
        }
        ).catch(o => {
            x3()
        }
        )
    }
    ;
    return x.jsxs("button", {
        onClick: s,
        className: `motion-fade-up motion-btn flex items-center px-6 py-4 gap-2 ml-auto mr-auto bg-block border border-white/55
         rounded-[999px] text-white/85 text-button-title font-regular shadow-[0_10px_20px_rgba(0,0,0,0.24)]`,
        children: [x.jsx(fw, {}), x.jsx("span", {
            className: "leading-none",
            children: a ? "Скопировано" : "Скопировать ключ"
        })]
    })
}
  , os = ({onClick: t, title: a, className: r=""}) => {
    const s = o => {
        od(),
        t?.(o)
    }
    ;
    return x.jsx("button", {
        onClick: s,
        className: `motion-fade-up motion-btn flex items-center px-6 py-4 gap-4 ml-auto mr-auto bg-button rounded-[999px] text-white/85 text-button-title font-regular shadow-[0_10px_24px_rgba(24,125,226,0.28)] ${r}`,
        children: x.jsx("span", {
            className: "leading-none",
            children: a
        })
    })
}
;
function q(t, a, r) {
    function s(h, p) {
        if (h._zod || Object.defineProperty(h, "_zod", {
            value: {
                def: p,
                constr: f,
                traits: new Set
            },
            enumerable: !1
        }),
        h._zod.traits.has(t))
            return;
        h._zod.traits.add(t),
        a(h, p);
        const m = f.prototype
          , y = Object.keys(m);
        for (let v = 0; v < y.length; v++) {
            const S = y[v];
            S in h || (h[S] = m[S].bind(h))
        }
    }
    const o = r?.Parent ?? Object;
    class c extends o {
    }
    Object.defineProperty(c, "name", {
        value: t
    });
    function f(h) {
        var p;
        const m = r?.Parent ? new c : this;
        s(m, h),
        (p = m._zod).deferred ?? (p.deferred = []);
        for (const y of m._zod.deferred)
            y();
        return m
    }
    return Object.defineProperty(f, "init", {
        value: s
    }),
    Object.defineProperty(f, Symbol.hasInstance, {
        value: h => r?.Parent && h instanceof r.Parent ? !0 : h?._zod?.traits?.has(t)
    }),
    Object.defineProperty(f, "name", {
        value: t
    }),
    f
}
class Zi extends Error {
    constructor() {
        super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")
    }
}
class zb extends Error {
    constructor(a) {
        super(`Encountered unidirectional transform during encode: ${a}`),
        this.name = "ZodEncodeError"
    }
}
const Db = {};
function Pa(t) {
    return Db
}
function Cb(t) {
    const a = Object.values(t).filter(s => typeof s == "number");
    return Object.entries(t).filter( ([s,o]) => a.indexOf(+s) === -1).map( ([s,o]) => o)
}
function Yf(t, a) {
    return typeof a == "bigint" ? a.toString() : a
}
function Gd(t) {
    return {
        get value() {
            {
                const a = t();
                return Object.defineProperty(this, "value", {
                    value: a
                }),
                a
            }
        }
    }
}
function $d(t) {
    return t == null
}
function Xd(t) {
    const a = t.startsWith("^") ? 1 : 0
      , r = t.endsWith("$") ? t.length - 1 : t.length;
    return t.slice(a, r)
}
function hw(t, a) {
    const r = (t.toString().split(".")[1] || "").length
      , s = a.toString();
    let o = (s.split(".")[1] || "").length;
    if (o === 0 && /\d?e-\d?/.test(s)) {
        const p = s.match(/\d?e-(\d?)/);
        p?.[1] && (o = Number.parseInt(p[1]))
    }
    const c = r > o ? r : o
      , f = Number.parseInt(t.toFixed(c).replace(".", ""))
      , h = Number.parseInt(a.toFixed(c).replace(".", ""));
    return f % h / 10 ** c
}
const Gy = Symbol("evaluating");
function we(t, a, r) {
    let s;
    Object.defineProperty(t, a, {
        get() {
            if (s !== Gy)
                return s === void 0 && (s = Gy,
                s = r()),
                s
        },
        set(o) {
            Object.defineProperty(t, a, {
                value: o
            })
        },
        configurable: !0
    })
}
function Ga(t, a, r) {
    Object.defineProperty(t, a, {
        value: r,
        writable: !0,
        enumerable: !0,
        configurable: !0
    })
}
function ga(...t) {
    const a = {};
    for (const r of t) {
        const s = Object.getOwnPropertyDescriptors(r);
        Object.assign(a, s)
    }
    return Object.defineProperties({}, a)
}
function $y(t) {
    return JSON.stringify(t)
}
function mw(t) {
    return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "")
}
const Rb = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {}
;
function oo(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t)
}
const pw = Gd( () => {
    if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
        return !1;
    try {
        const t = Function;
        return new t(""),
        !0
    } catch {
        return !1
    }
}
);
function us(t) {
    if (oo(t) === !1)
        return !1;
    const a = t.constructor;
    if (a === void 0 || typeof a != "function")
        return !0;
    const r = a.prototype;
    return !(oo(r) === !1 || Object.prototype.hasOwnProperty.call(r, "isPrototypeOf") === !1)
}
function Ob(t) {
    return us(t) ? {
        ...t
    } : Array.isArray(t) ? [...t] : t
}
const gw = new Set(["string", "number", "symbol"]);
function xo(t) {
    return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
function ya(t, a, r) {
    const s = new t._zod.constr(a ?? t._zod.def);
    return (!a || r?.parent) && (s._zod.parent = t),
    s
}
function ae(t) {
    const a = t;
    if (!a)
        return {};
    if (typeof a == "string")
        return {
            error: () => a
        };
    if (a?.message !== void 0) {
        if (a?.error !== void 0)
            throw new Error("Cannot specify both `message` and `error` params");
        a.error = a.message
    }
    return delete a.message,
    typeof a.error == "string" ? {
        ...a,
        error: () => a.error
    } : a
}
function yw(t) {
    return Object.keys(t).filter(a => t[a]._zod.optin === "optional" && t[a]._zod.optout === "optional")
}
const vw = {
    safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
    int32: [-2147483648, 2147483647],
    uint32: [0, 4294967295],
    float32: [-34028234663852886e22, 34028234663852886e22],
    float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function bw(t, a) {
    const r = t._zod.def
      , s = r.checks;
    if (s && s.length > 0)
        throw new Error(".pick() cannot be used on object schemas containing refinements");
    const c = ga(t._zod.def, {
        get shape() {
            const f = {};
            for (const h in a) {
                if (!(h in r.shape))
                    throw new Error(`Unrecognized key: "${h}"`);
                a[h] && (f[h] = r.shape[h])
            }
            return Ga(this, "shape", f),
            f
        },
        checks: []
    });
    return ya(t, c)
}
function xw(t, a) {
    const r = t._zod.def
      , s = r.checks;
    if (s && s.length > 0)
        throw new Error(".omit() cannot be used on object schemas containing refinements");
    const c = ga(t._zod.def, {
        get shape() {
            const f = {
                ...t._zod.def.shape
            };
            for (const h in a) {
                if (!(h in r.shape))
                    throw new Error(`Unrecognized key: "${h}"`);
                a[h] && delete f[h]
            }
            return Ga(this, "shape", f),
            f
        },
        checks: []
    });
    return ya(t, c)
}
function Sw(t, a) {
    if (!us(a))
        throw new Error("Invalid input to extend: expected a plain object");
    const r = t._zod.def.checks;
    if (r && r.length > 0) {
        const c = t._zod.def.shape;
        for (const f in a)
            if (Object.getOwnPropertyDescriptor(c, f) !== void 0)
                throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")
    }
    const o = ga(t._zod.def, {
        get shape() {
            const c = {
                ...t._zod.def.shape,
                ...a
            };
            return Ga(this, "shape", c),
            c
        }
    });
    return ya(t, o)
}
function Tw(t, a) {
    if (!us(a))
        throw new Error("Invalid input to safeExtend: expected a plain object");
    const r = ga(t._zod.def, {
        get shape() {
            const s = {
                ...t._zod.def.shape,
                ...a
            };
            return Ga(this, "shape", s),
            s
        }
    });
    return ya(t, r)
}
function Aw(t, a) {
    const r = ga(t._zod.def, {
        get shape() {
            const s = {
                ...t._zod.def.shape,
                ...a._zod.def.shape
            };
            return Ga(this, "shape", s),
            s
        },
        get catchall() {
            return a._zod.def.catchall
        },
        checks: []
    });
    return ya(t, r)
}
function Ew(t, a, r) {
    const o = a._zod.def.checks;
    if (o && o.length > 0)
        throw new Error(".partial() cannot be used on object schemas containing refinements");
    const f = ga(a._zod.def, {
        get shape() {
            const h = a._zod.def.shape
              , p = {
                ...h
            };
            if (r)
                for (const m in r) {
                    if (!(m in h))
                        throw new Error(`Unrecognized key: "${m}"`);
                    r[m] && (p[m] = t ? new t({
                        type: "optional",
                        innerType: h[m]
                    }) : h[m])
                }
            else
                for (const m in h)
                    p[m] = t ? new t({
                        type: "optional",
                        innerType: h[m]
                    }) : h[m];
            return Ga(this, "shape", p),
            p
        },
        checks: []
    });
    return ya(a, f)
}
function ww(t, a, r) {
    const s = ga(a._zod.def, {
        get shape() {
            const o = a._zod.def.shape
              , c = {
                ...o
            };
            if (r)
                for (const f in r) {
                    if (!(f in c))
                        throw new Error(`Unrecognized key: "${f}"`);
                    r[f] && (c[f] = new t({
                        type: "nonoptional",
                        innerType: o[f]
                    }))
                }
            else
                for (const f in o)
                    c[f] = new t({
                        type: "nonoptional",
                        innerType: o[f]
                    });
            return Ga(this, "shape", c),
            c
        }
    });
    return ya(a, s)
}
function Bi(t, a=0) {
    if (t.aborted === !0)
        return !0;
    for (let r = a; r < t.issues.length; r++)
        if (t.issues[r]?.continue !== !0)
            return !0;
    return !1
}
function Mb(t, a) {
    return a.map(r => {
        var s;
        return (s = r).path ?? (s.path = []),
        r.path.unshift(t),
        r
    }
    )
}
function Pl(t) {
    return typeof t == "string" ? t : t?.message
}
function Ya(t, a, r) {
    const s = {
        ...t,
        path: t.path ?? []
    };
    if (!t.message) {
        const o = Pl(t.inst?._zod.def?.error?.(t)) ?? Pl(a?.error?.(t)) ?? Pl(r.customError?.(t)) ?? Pl(r.localeError?.(t)) ?? "Invalid input";
        s.message = o
    }
    return delete s.inst,
    delete s.continue,
    a?.reportInput || delete s.input,
    s
}
function Kd(t) {
    return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown"
}
function cs(...t) {
    const [a,r,s] = t;
    return typeof a == "string" ? {
        message: a,
        code: "custom",
        input: r,
        inst: s
    } : {
        ...a
    }
}
const jb = (t, a) => {
    t.name = "$ZodError",
    Object.defineProperty(t, "_zod", {
        value: t._zod,
        enumerable: !1
    }),
    Object.defineProperty(t, "issues", {
        value: a,
        enumerable: !1
    }),
    t.message = JSON.stringify(a, Yf, 2),
    Object.defineProperty(t, "toString", {
        value: () => t.message,
        enumerable: !1
    })
}
  , Nb = q("$ZodError", jb)
  , Ub = q("$ZodError", jb, {
    Parent: Error
});
function _w(t, a=r => r.message) {
    const r = {}
      , s = [];
    for (const o of t.issues)
        o.path.length > 0 ? (r[o.path[0]] = r[o.path[0]] || [],
        r[o.path[0]].push(a(o))) : s.push(a(o));
    return {
        formErrors: s,
        fieldErrors: r
    }
}
function zw(t, a=r => r.message) {
    const r = {
        _errors: []
    }
      , s = o => {
        for (const c of o.issues)
            if (c.code === "invalid_union" && c.errors.length)
                c.errors.map(f => s({
                    issues: f
                }));
            else if (c.code === "invalid_key")
                s({
                    issues: c.issues
                });
            else if (c.code === "invalid_element")
                s({
                    issues: c.issues
                });
            else if (c.path.length === 0)
                r._errors.push(a(c));
            else {
                let f = r
                  , h = 0;
                for (; h < c.path.length; ) {
                    const p = c.path[h];
                    h === c.path.length - 1 ? (f[p] = f[p] || {
                        _errors: []
                    },
                    f[p]._errors.push(a(c))) : f[p] = f[p] || {
                        _errors: []
                    },
                    f = f[p],
                    h++
                }
            }
    }
    ;
    return s(t),
    r
}
const Qd = t => (a, r, s, o) => {
    const c = s ? Object.assign(s, {
        async: !1
    }) : {
        async: !1
    }
      , f = a._zod.run({
        value: r,
        issues: []
    }, c);
    if (f instanceof Promise)
        throw new Zi;
    if (f.issues.length) {
        const h = new (o?.Err ?? t)(f.issues.map(p => Ya(p, c, Pa())));
        throw Rb(h, o?.callee),
        h
    }
    return f.value
}
  , Fd = t => async (a, r, s, o) => {
    const c = s ? Object.assign(s, {
        async: !0
    }) : {
        async: !0
    };
    let f = a._zod.run({
        value: r,
        issues: []
    }, c);
    if (f instanceof Promise && (f = await f),
    f.issues.length) {
        const h = new (o?.Err ?? t)(f.issues.map(p => Ya(p, c, Pa())));
        throw Rb(h, o?.callee),
        h
    }
    return f.value
}
  , So = t => (a, r, s) => {
    const o = s ? {
        ...s,
        async: !1
    } : {
        async: !1
    }
      , c = a._zod.run({
        value: r,
        issues: []
    }, o);
    if (c instanceof Promise)
        throw new Zi;
    return c.issues.length ? {
        success: !1,
        error: new (t ?? Nb)(c.issues.map(f => Ya(f, o, Pa())))
    } : {
        success: !0,
        data: c.value
    }
}
  , Dw = So(Ub)
  , To = t => async (a, r, s) => {
    const o = s ? Object.assign(s, {
        async: !0
    }) : {
        async: !0
    };
    let c = a._zod.run({
        value: r,
        issues: []
    }, o);
    return c instanceof Promise && (c = await c),
    c.issues.length ? {
        success: !1,
        error: new t(c.issues.map(f => Ya(f, o, Pa())))
    } : {
        success: !0,
        data: c.value
    }
}
  , Cw = To(Ub)
  , Rw = t => (a, r, s) => {
    const o = s ? Object.assign(s, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return Qd(t)(a, r, o)
}
  , Ow = t => (a, r, s) => Qd(t)(a, r, s)
  , Mw = t => async (a, r, s) => {
    const o = s ? Object.assign(s, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return Fd(t)(a, r, o)
}
  , jw = t => async (a, r, s) => Fd(t)(a, r, s)
  , Nw = t => (a, r, s) => {
    const o = s ? Object.assign(s, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return So(t)(a, r, o)
}
  , Uw = t => (a, r, s) => So(t)(a, r, s)
  , Lw = t => async (a, r, s) => {
    const o = s ? Object.assign(s, {
        direction: "backward"
    }) : {
        direction: "backward"
    };
    return To(t)(a, r, o)
}
  , Vw = t => async (a, r, s) => To(t)(a, r, s)
  , Bw = /^[cC][^\s-]{8,}$/
  , kw = /^[0-9a-z]+$/
  , Zw = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/
  , Hw = /^[0-9a-vA-V]{20}$/
  , qw = /^[A-Za-z0-9]{27}$/
  , Pw = /^[a-zA-Z0-9_-]{21}$/
  , Yw = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/
  , Gw = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/
  , Xy = t => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/
  , $w = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/
  , Xw = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Kw() {
    return new RegExp(Xw,"u")
}
const Qw = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , Fw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/
  , Jw = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/
  , Iw = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , Ww = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/
  , Lb = /^[A-Za-z0-9_-]*$/
  , e6 = /^\+[1-9]\d{6,14}$/
  , Vb = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))"
  , t6 = new RegExp(`^${Vb}$`);
function Bb(t) {
    const a = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof t.precision == "number" ? t.precision === -1 ? `${a}` : t.precision === 0 ? `${a}:[0-5]\\d` : `${a}:[0-5]\\d\\.\\d{${t.precision}}` : `${a}(?::[0-5]\\d(?:\\.\\d+)?)?`
}
function n6(t) {
    return new RegExp(`^${Bb(t)}$`)
}
function a6(t) {
    const a = Bb({
        precision: t.precision
    })
      , r = ["Z"];
    t.local && r.push(""),
    t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const s = `${a}(?:${r.join("|")})`;
    return new RegExp(`^${Vb}T(?:${s})$`)
}
const i6 = t => {
    const a = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${a}$`)
}
  , r6 = /^-?\d+$/
  , s6 = /^-?\d+(?:\.\d+)?$/
  , l6 = /^[^A-Z]*$/
  , o6 = /^[^a-z]*$/
  , Dt = q("$ZodCheck", (t, a) => {
    var r;
    t._zod ?? (t._zod = {}),
    t._zod.def = a,
    (r = t._zod).onattach ?? (r.onattach = [])
}
)
  , kb = {
    number: "number",
    bigint: "bigint",
    object: "date"
}
  , Zb = q("$ZodCheckLessThan", (t, a) => {
    Dt.init(t, a);
    const r = kb[typeof a.value];
    t._zod.onattach.push(s => {
        const o = s._zod.bag
          , c = (a.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        a.value < c && (a.inclusive ? o.maximum = a.value : o.exclusiveMaximum = a.value)
    }
    ),
    t._zod.check = s => {
        (a.inclusive ? s.value <= a.value : s.value < a.value) || s.issues.push({
            origin: r,
            code: "too_big",
            maximum: typeof a.value == "object" ? a.value.getTime() : a.value,
            input: s.value,
            inclusive: a.inclusive,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , Hb = q("$ZodCheckGreaterThan", (t, a) => {
    Dt.init(t, a);
    const r = kb[typeof a.value];
    t._zod.onattach.push(s => {
        const o = s._zod.bag
          , c = (a.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        a.value > c && (a.inclusive ? o.minimum = a.value : o.exclusiveMinimum = a.value)
    }
    ),
    t._zod.check = s => {
        (a.inclusive ? s.value >= a.value : s.value > a.value) || s.issues.push({
            origin: r,
            code: "too_small",
            minimum: typeof a.value == "object" ? a.value.getTime() : a.value,
            input: s.value,
            inclusive: a.inclusive,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , u6 = q("$ZodCheckMultipleOf", (t, a) => {
    Dt.init(t, a),
    t._zod.onattach.push(r => {
        var s;
        (s = r._zod.bag).multipleOf ?? (s.multipleOf = a.value)
    }
    ),
    t._zod.check = r => {
        if (typeof r.value != typeof a.value)
            throw new Error("Cannot mix number and bigint in multiple_of check.");
        (typeof r.value == "bigint" ? r.value % a.value === BigInt(0) : hw(r.value, a.value) === 0) || r.issues.push({
            origin: typeof r.value,
            code: "not_multiple_of",
            divisor: a.value,
            input: r.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , c6 = q("$ZodCheckNumberFormat", (t, a) => {
    Dt.init(t, a),
    a.format = a.format || "float64";
    const r = a.format?.includes("int")
      , s = r ? "int" : "number"
      , [o,c] = vw[a.format];
    t._zod.onattach.push(f => {
        const h = f._zod.bag;
        h.format = a.format,
        h.minimum = o,
        h.maximum = c,
        r && (h.pattern = r6)
    }
    ),
    t._zod.check = f => {
        const h = f.value;
        if (r) {
            if (!Number.isInteger(h)) {
                f.issues.push({
                    expected: s,
                    format: a.format,
                    code: "invalid_type",
                    continue: !1,
                    input: h,
                    inst: t
                });
                return
            }
            if (!Number.isSafeInteger(h)) {
                h > 0 ? f.issues.push({
                    input: h,
                    code: "too_big",
                    maximum: Number.MAX_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: s,
                    inclusive: !0,
                    continue: !a.abort
                }) : f.issues.push({
                    input: h,
                    code: "too_small",
                    minimum: Number.MIN_SAFE_INTEGER,
                    note: "Integers must be within the safe integer range.",
                    inst: t,
                    origin: s,
                    inclusive: !0,
                    continue: !a.abort
                });
                return
            }
        }
        h < o && f.issues.push({
            origin: "number",
            input: h,
            code: "too_small",
            minimum: o,
            inclusive: !0,
            inst: t,
            continue: !a.abort
        }),
        h > c && f.issues.push({
            origin: "number",
            input: h,
            code: "too_big",
            maximum: c,
            inclusive: !0,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , f6 = q("$ZodCheckMaxLength", (t, a) => {
    var r;
    Dt.init(t, a),
    (r = t._zod.def).when ?? (r.when = s => {
        const o = s.value;
        return !$d(o) && o.length !== void 0
    }
    ),
    t._zod.onattach.push(s => {
        const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        a.maximum < o && (s._zod.bag.maximum = a.maximum)
    }
    ),
    t._zod.check = s => {
        const o = s.value;
        if (o.length <= a.maximum)
            return;
        const f = Kd(o);
        s.issues.push({
            origin: f,
            code: "too_big",
            maximum: a.maximum,
            inclusive: !0,
            input: o,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , d6 = q("$ZodCheckMinLength", (t, a) => {
    var r;
    Dt.init(t, a),
    (r = t._zod.def).when ?? (r.when = s => {
        const o = s.value;
        return !$d(o) && o.length !== void 0
    }
    ),
    t._zod.onattach.push(s => {
        const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        a.minimum > o && (s._zod.bag.minimum = a.minimum)
    }
    ),
    t._zod.check = s => {
        const o = s.value;
        if (o.length >= a.minimum)
            return;
        const f = Kd(o);
        s.issues.push({
            origin: f,
            code: "too_small",
            minimum: a.minimum,
            inclusive: !0,
            input: o,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , h6 = q("$ZodCheckLengthEquals", (t, a) => {
    var r;
    Dt.init(t, a),
    (r = t._zod.def).when ?? (r.when = s => {
        const o = s.value;
        return !$d(o) && o.length !== void 0
    }
    ),
    t._zod.onattach.push(s => {
        const o = s._zod.bag;
        o.minimum = a.length,
        o.maximum = a.length,
        o.length = a.length
    }
    ),
    t._zod.check = s => {
        const o = s.value
          , c = o.length;
        if (c === a.length)
            return;
        const f = Kd(o)
          , h = c > a.length;
        s.issues.push({
            origin: f,
            ...h ? {
                code: "too_big",
                maximum: a.length
            } : {
                code: "too_small",
                minimum: a.length
            },
            inclusive: !0,
            exact: !0,
            input: s.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , Ao = q("$ZodCheckStringFormat", (t, a) => {
    var r, s;
    Dt.init(t, a),
    t._zod.onattach.push(o => {
        const c = o._zod.bag;
        c.format = a.format,
        a.pattern && (c.patterns ?? (c.patterns = new Set),
        c.patterns.add(a.pattern))
    }
    ),
    a.pattern ? (r = t._zod).check ?? (r.check = o => {
        a.pattern.lastIndex = 0,
        !a.pattern.test(o.value) && o.issues.push({
            origin: "string",
            code: "invalid_format",
            format: a.format,
            input: o.value,
            ...a.pattern ? {
                pattern: a.pattern.toString()
            } : {},
            inst: t,
            continue: !a.abort
        })
    }
    ) : (s = t._zod).check ?? (s.check = () => {}
    )
}
)
  , m6 = q("$ZodCheckRegex", (t, a) => {
    Ao.init(t, a),
    t._zod.check = r => {
        a.pattern.lastIndex = 0,
        !a.pattern.test(r.value) && r.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "regex",
            input: r.value,
            pattern: a.pattern.toString(),
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , p6 = q("$ZodCheckLowerCase", (t, a) => {
    a.pattern ?? (a.pattern = l6),
    Ao.init(t, a)
}
)
  , g6 = q("$ZodCheckUpperCase", (t, a) => {
    a.pattern ?? (a.pattern = o6),
    Ao.init(t, a)
}
)
  , y6 = q("$ZodCheckIncludes", (t, a) => {
    Dt.init(t, a);
    const r = xo(a.includes)
      , s = new RegExp(typeof a.position == "number" ? `^.{${a.position}}${r}` : r);
    a.pattern = s,
    t._zod.onattach.push(o => {
        const c = o._zod.bag;
        c.patterns ?? (c.patterns = new Set),
        c.patterns.add(s)
    }
    ),
    t._zod.check = o => {
        o.value.includes(a.includes, a.position) || o.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "includes",
            includes: a.includes,
            input: o.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , v6 = q("$ZodCheckStartsWith", (t, a) => {
    Dt.init(t, a);
    const r = new RegExp(`^${xo(a.prefix)}.*`);
    a.pattern ?? (a.pattern = r),
    t._zod.onattach.push(s => {
        const o = s._zod.bag;
        o.patterns ?? (o.patterns = new Set),
        o.patterns.add(r)
    }
    ),
    t._zod.check = s => {
        s.value.startsWith(a.prefix) || s.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "starts_with",
            prefix: a.prefix,
            input: s.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , b6 = q("$ZodCheckEndsWith", (t, a) => {
    Dt.init(t, a);
    const r = new RegExp(`.*${xo(a.suffix)}$`);
    a.pattern ?? (a.pattern = r),
    t._zod.onattach.push(s => {
        const o = s._zod.bag;
        o.patterns ?? (o.patterns = new Set),
        o.patterns.add(r)
    }
    ),
    t._zod.check = s => {
        s.value.endsWith(a.suffix) || s.issues.push({
            origin: "string",
            code: "invalid_format",
            format: "ends_with",
            suffix: a.suffix,
            input: s.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , x6 = q("$ZodCheckOverwrite", (t, a) => {
    Dt.init(t, a),
    t._zod.check = r => {
        r.value = a.tx(r.value)
    }
}
);
class S6 {
    constructor(a=[]) {
        this.content = [],
        this.indent = 0,
        this && (this.args = a)
    }
    indented(a) {
        this.indent += 1,
        a(this),
        this.indent -= 1
    }
    write(a) {
        if (typeof a == "function") {
            a(this, {
                execution: "sync"
            }),
            a(this, {
                execution: "async"
            });
            return
        }
        const s = a.split(`
`).filter(f => f)
          , o = Math.min(...s.map(f => f.length - f.trimStart().length))
          , c = s.map(f => f.slice(o)).map(f => " ".repeat(this.indent * 2) + f);
        for (const f of c)
            this.content.push(f)
    }
    compile() {
        const a = Function
          , r = this?.args
          , o = [...(this?.content ?? [""]).map(c => `  ${c}`)];
        return new a(...r,o.join(`
`))
    }
}
const T6 = {
    major: 4,
    minor: 3,
    patch: 5
}
  , Ie = q("$ZodType", (t, a) => {
    var r;
    t ?? (t = {}),
    t._zod.def = a,
    t._zod.bag = t._zod.bag || {},
    t._zod.version = T6;
    const s = [...t._zod.def.checks ?? []];
    t._zod.traits.has("$ZodCheck") && s.unshift(t);
    for (const o of s)
        for (const c of o._zod.onattach)
            c(t);
    if (s.length === 0)
        (r = t._zod).deferred ?? (r.deferred = []),
        t._zod.deferred?.push( () => {
            t._zod.run = t._zod.parse
        }
        );
    else {
        const o = (f, h, p) => {
            let m = Bi(f), y;
            for (const v of h) {
                if (v._zod.def.when) {
                    if (!v._zod.def.when(f))
                        continue
                } else if (m)
                    continue;
                const S = f.issues.length
                  , T = v._zod.check(f);
                if (T instanceof Promise && p?.async === !1)
                    throw new Zi;
                if (y || T instanceof Promise)
                    y = (y ?? Promise.resolve()).then(async () => {
                        await T,
                        f.issues.length !== S && (m || (m = Bi(f, S)))
                    }
                    );
                else {
                    if (f.issues.length === S)
                        continue;
                    m || (m = Bi(f, S))
                }
            }
            return y ? y.then( () => f) : f
        }
          , c = (f, h, p) => {
            if (Bi(f))
                return f.aborted = !0,
                f;
            const m = o(h, s, p);
            if (m instanceof Promise) {
                if (p.async === !1)
                    throw new Zi;
                return m.then(y => t._zod.parse(y, p))
            }
            return t._zod.parse(m, p)
        }
        ;
        t._zod.run = (f, h) => {
            if (h.skipChecks)
                return t._zod.parse(f, h);
            if (h.direction === "backward") {
                const m = t._zod.parse({
                    value: f.value,
                    issues: []
                }, {
                    ...h,
                    skipChecks: !0
                });
                return m instanceof Promise ? m.then(y => c(y, f, h)) : c(m, f, h)
            }
            const p = t._zod.parse(f, h);
            if (p instanceof Promise) {
                if (h.async === !1)
                    throw new Zi;
                return p.then(m => o(m, s, h))
            }
            return o(p, s, h)
        }
    }
    we(t, "~standard", () => ({
        validate: o => {
            try {
                const c = Dw(t, o);
                return c.success ? {
                    value: c.data
                } : {
                    issues: c.error?.issues
                }
            } catch {
                return Cw(t, o).then(f => f.success ? {
                    value: f.data
                } : {
                    issues: f.error?.issues
                })
            }
        }
        ,
        vendor: "zod",
        version: 1
    }))
}
)
  , Jd = q("$ZodString", (t, a) => {
    Ie.init(t, a),
    t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? i6(t._zod.bag),
    t._zod.parse = (r, s) => {
        if (a.coerce)
            try {
                r.value = String(r.value)
            } catch {}
        return typeof r.value == "string" || r.issues.push({
            expected: "string",
            code: "invalid_type",
            input: r.value,
            inst: t
        }),
        r
    }
}
)
  , Le = q("$ZodStringFormat", (t, a) => {
    Ao.init(t, a),
    Jd.init(t, a)
}
)
  , A6 = q("$ZodGUID", (t, a) => {
    a.pattern ?? (a.pattern = Gw),
    Le.init(t, a)
}
)
  , E6 = q("$ZodUUID", (t, a) => {
    if (a.version) {
        const s = {
            v1: 1,
            v2: 2,
            v3: 3,
            v4: 4,
            v5: 5,
            v6: 6,
            v7: 7,
            v8: 8
        }[a.version];
        if (s === void 0)
            throw new Error(`Invalid UUID version: "${a.version}"`);
        a.pattern ?? (a.pattern = Xy(s))
    } else
        a.pattern ?? (a.pattern = Xy());
    Le.init(t, a)
}
)
  , w6 = q("$ZodEmail", (t, a) => {
    a.pattern ?? (a.pattern = $w),
    Le.init(t, a)
}
)
  , _6 = q("$ZodURL", (t, a) => {
    Le.init(t, a),
    t._zod.check = r => {
        try {
            const s = r.value.trim()
              , o = new URL(s);
            a.hostname && (a.hostname.lastIndex = 0,
            a.hostname.test(o.hostname) || r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: a.hostname.source,
                input: r.value,
                inst: t,
                continue: !a.abort
            })),
            a.protocol && (a.protocol.lastIndex = 0,
            a.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || r.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: a.protocol.source,
                input: r.value,
                inst: t,
                continue: !a.abort
            })),
            a.normalize ? r.value = o.href : r.value = s;
            return
        } catch {
            r.issues.push({
                code: "invalid_format",
                format: "url",
                input: r.value,
                inst: t,
                continue: !a.abort
            })
        }
    }
}
)
  , z6 = q("$ZodEmoji", (t, a) => {
    a.pattern ?? (a.pattern = Kw()),
    Le.init(t, a)
}
)
  , D6 = q("$ZodNanoID", (t, a) => {
    a.pattern ?? (a.pattern = Pw),
    Le.init(t, a)
}
)
  , C6 = q("$ZodCUID", (t, a) => {
    a.pattern ?? (a.pattern = Bw),
    Le.init(t, a)
}
)
  , R6 = q("$ZodCUID2", (t, a) => {
    a.pattern ?? (a.pattern = kw),
    Le.init(t, a)
}
)
  , O6 = q("$ZodULID", (t, a) => {
    a.pattern ?? (a.pattern = Zw),
    Le.init(t, a)
}
)
  , M6 = q("$ZodXID", (t, a) => {
    a.pattern ?? (a.pattern = Hw),
    Le.init(t, a)
}
)
  , j6 = q("$ZodKSUID", (t, a) => {
    a.pattern ?? (a.pattern = qw),
    Le.init(t, a)
}
)
  , N6 = q("$ZodISODateTime", (t, a) => {
    a.pattern ?? (a.pattern = a6(a)),
    Le.init(t, a)
}
)
  , U6 = q("$ZodISODate", (t, a) => {
    a.pattern ?? (a.pattern = t6),
    Le.init(t, a)
}
)
  , L6 = q("$ZodISOTime", (t, a) => {
    a.pattern ?? (a.pattern = n6(a)),
    Le.init(t, a)
}
)
  , V6 = q("$ZodISODuration", (t, a) => {
    a.pattern ?? (a.pattern = Yw),
    Le.init(t, a)
}
)
  , B6 = q("$ZodIPv4", (t, a) => {
    a.pattern ?? (a.pattern = Qw),
    Le.init(t, a),
    t._zod.bag.format = "ipv4"
}
)
  , k6 = q("$ZodIPv6", (t, a) => {
    a.pattern ?? (a.pattern = Fw),
    Le.init(t, a),
    t._zod.bag.format = "ipv6",
    t._zod.check = r => {
        try {
            new URL(`http://[${r.value}]`)
        } catch {
            r.issues.push({
                code: "invalid_format",
                format: "ipv6",
                input: r.value,
                inst: t,
                continue: !a.abort
            })
        }
    }
}
)
  , Z6 = q("$ZodCIDRv4", (t, a) => {
    a.pattern ?? (a.pattern = Jw),
    Le.init(t, a)
}
)
  , H6 = q("$ZodCIDRv6", (t, a) => {
    a.pattern ?? (a.pattern = Iw),
    Le.init(t, a),
    t._zod.check = r => {
        const s = r.value.split("/");
        try {
            if (s.length !== 2)
                throw new Error;
            const [o,c] = s;
            if (!c)
                throw new Error;
            const f = Number(c);
            if (`${f}` !== c)
                throw new Error;
            if (f < 0 || f > 128)
                throw new Error;
            new URL(`http://[${o}]`)
        } catch {
            r.issues.push({
                code: "invalid_format",
                format: "cidrv6",
                input: r.value,
                inst: t,
                continue: !a.abort
            })
        }
    }
}
);
function qb(t) {
    if (t === "")
        return !0;
    if (t.length % 4 !== 0)
        return !1;
    try {
        return atob(t),
        !0
    } catch {
        return !1
    }
}
const q6 = q("$ZodBase64", (t, a) => {
    a.pattern ?? (a.pattern = Ww),
    Le.init(t, a),
    t._zod.bag.contentEncoding = "base64",
    t._zod.check = r => {
        qb(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64",
            input: r.value,
            inst: t,
            continue: !a.abort
        })
    }
}
);
function P6(t) {
    if (!Lb.test(t))
        return !1;
    const a = t.replace(/[-_]/g, s => s === "-" ? "+" : "/")
      , r = a.padEnd(Math.ceil(a.length / 4) * 4, "=");
    return qb(r)
}
const Y6 = q("$ZodBase64URL", (t, a) => {
    a.pattern ?? (a.pattern = Lb),
    Le.init(t, a),
    t._zod.bag.contentEncoding = "base64url",
    t._zod.check = r => {
        P6(r.value) || r.issues.push({
            code: "invalid_format",
            format: "base64url",
            input: r.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , G6 = q("$ZodE164", (t, a) => {
    a.pattern ?? (a.pattern = e6),
    Le.init(t, a)
}
);
function $6(t, a=null) {
    try {
        const r = t.split(".");
        if (r.length !== 3)
            return !1;
        const [s] = r;
        if (!s)
            return !1;
        const o = JSON.parse(atob(s));
        return !("typ" in o && o?.typ !== "JWT" || !o.alg || a && (!("alg" in o) || o.alg !== a))
    } catch {
        return !1
    }
}
const X6 = q("$ZodJWT", (t, a) => {
    Le.init(t, a),
    t._zod.check = r => {
        $6(r.value, a.alg) || r.issues.push({
            code: "invalid_format",
            format: "jwt",
            input: r.value,
            inst: t,
            continue: !a.abort
        })
    }
}
)
  , Pb = q("$ZodNumber", (t, a) => {
    Ie.init(t, a),
    t._zod.pattern = t._zod.bag.pattern ?? s6,
    t._zod.parse = (r, s) => {
        if (a.coerce)
            try {
                r.value = Number(r.value)
            } catch {}
        const o = r.value;
        if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
            return r;
        const c = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
        return r.issues.push({
            expected: "number",
            code: "invalid_type",
            input: o,
            inst: t,
            ...c ? {
                received: c
            } : {}
        }),
        r
    }
}
)
  , K6 = q("$ZodNumberFormat", (t, a) => {
    c6.init(t, a),
    Pb.init(t, a)
}
)
  , Q6 = q("$ZodUnknown", (t, a) => {
    Ie.init(t, a),
    t._zod.parse = r => r
}
)
  , F6 = q("$ZodNever", (t, a) => {
    Ie.init(t, a),
    t._zod.parse = (r, s) => (r.issues.push({
        expected: "never",
        code: "invalid_type",
        input: r.value,
        inst: t
    }),
    r)
}
);
function Ky(t, a, r) {
    t.issues.length && a.issues.push(...Mb(r, t.issues)),
    a.value[r] = t.value
}
const J6 = q("$ZodArray", (t, a) => {
    Ie.init(t, a),
    t._zod.parse = (r, s) => {
        const o = r.value;
        if (!Array.isArray(o))
            return r.issues.push({
                expected: "array",
                code: "invalid_type",
                input: o,
                inst: t
            }),
            r;
        r.value = Array(o.length);
        const c = [];
        for (let f = 0; f < o.length; f++) {
            const h = o[f]
              , p = a.element._zod.run({
                value: h,
                issues: []
            }, s);
            p instanceof Promise ? c.push(p.then(m => Ky(m, r, f))) : Ky(p, r, f)
        }
        return c.length ? Promise.all(c).then( () => r) : r
    }
}
);
function uo(t, a, r, s, o) {
    if (t.issues.length) {
        if (o && !(r in s))
            return;
        a.issues.push(...Mb(r, t.issues))
    }
    t.value === void 0 ? r in s && (a.value[r] = void 0) : a.value[r] = t.value
}
function Yb(t) {
    const a = Object.keys(t.shape);
    for (const s of a)
        if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
            throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
    const r = yw(t.shape);
    return {
        ...t,
        keys: a,
        keySet: new Set(a),
        numKeys: a.length,
        optionalKeys: new Set(r)
    }
}
function Gb(t, a, r, s, o, c) {
    const f = []
      , h = o.keySet
      , p = o.catchall._zod
      , m = p.def.type
      , y = p.optout === "optional";
    for (const v in a) {
        if (h.has(v))
            continue;
        if (m === "never") {
            f.push(v);
            continue
        }
        const S = p.run({
            value: a[v],
            issues: []
        }, s);
        S instanceof Promise ? t.push(S.then(T => uo(T, r, v, a, y))) : uo(S, r, v, a, y)
    }
    return f.length && r.issues.push({
        code: "unrecognized_keys",
        keys: f,
        input: a,
        inst: c
    }),
    t.length ? Promise.all(t).then( () => r) : r
}
const I6 = q("$ZodObject", (t, a) => {
    if (Ie.init(t, a),
    !Object.getOwnPropertyDescriptor(a, "shape")?.get) {
        const h = a.shape;
        Object.defineProperty(a, "shape", {
            get: () => {
                const p = {
                    ...h
                };
                return Object.defineProperty(a, "shape", {
                    value: p
                }),
                p
            }
        })
    }
    const s = Gd( () => Yb(a));
    we(t._zod, "propValues", () => {
        const h = a.shape
          , p = {};
        for (const m in h) {
            const y = h[m]._zod;
            if (y.values) {
                p[m] ?? (p[m] = new Set);
                for (const v of y.values)
                    p[m].add(v)
            }
        }
        return p
    }
    );
    const o = oo
      , c = a.catchall;
    let f;
    t._zod.parse = (h, p) => {
        f ?? (f = s.value);
        const m = h.value;
        if (!o(m))
            return h.issues.push({
                expected: "object",
                code: "invalid_type",
                input: m,
                inst: t
            }),
            h;
        h.value = {};
        const y = []
          , v = f.shape;
        for (const S of f.keys) {
            const T = v[S]
              , M = T._zod.optout === "optional"
              , D = T._zod.run({
                value: m[S],
                issues: []
            }, p);
            D instanceof Promise ? y.push(D.then(N => uo(N, h, S, m, M))) : uo(D, h, S, m, M)
        }
        return c ? Gb(y, m, h, p, s.value, t) : y.length ? Promise.all(y).then( () => h) : h
    }
}
)
  , W6 = q("$ZodObjectJIT", (t, a) => {
    I6.init(t, a);
    const r = t._zod.parse
      , s = Gd( () => Yb(a))
      , o = S => {
        const T = new S6(["shape", "payload", "ctx"])
          , M = s.value
          , D = U => {
            const Y = $y(U);
            return `shape[${Y}]._zod.run({ value: input[${Y}], issues: [] }, ctx)`
        }
        ;
        T.write("const input = payload.value;");
        const N = Object.create(null);
        let V = 0;
        for (const U of M.keys)
            N[U] = `key_${V++}`;
        T.write("const newResult = {};");
        for (const U of M.keys) {
            const Y = N[U]
              , $ = $y(U)
              , X = S[U]?._zod?.optout === "optional";
            T.write(`const ${Y} = ${D(U)};`),
            X ? T.write(`
        if (${Y}.issues.length) {
          if (${$} in input) {
            payload.issues = payload.issues.concat(${Y}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${$}, ...iss.path] : [${$}]
            })));
          }
        }
        
        if (${Y}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${Y}.value;
        }
        
      `) : T.write(`
        if (${Y}.issues.length) {
          payload.issues = payload.issues.concat(${Y}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${$}, ...iss.path] : [${$}]
          })));
        }
        
        if (${Y}.value === undefined) {
          if (${$} in input) {
            newResult[${$}] = undefined;
          }
        } else {
          newResult[${$}] = ${Y}.value;
        }
        
      `)
        }
        T.write("payload.value = newResult;"),
        T.write("return payload;");
        const R = T.compile();
        return (U, Y) => R(S, U, Y)
    }
    ;
    let c;
    const f = oo
      , h = !Db.jitless
      , m = h && pw.value
      , y = a.catchall;
    let v;
    t._zod.parse = (S, T) => {
        v ?? (v = s.value);
        const M = S.value;
        return f(M) ? h && m && T?.async === !1 && T.jitless !== !0 ? (c || (c = o(a.shape)),
        S = c(S, T),
        y ? Gb([], M, S, T, v, t) : S) : r(S, T) : (S.issues.push({
            expected: "object",
            code: "invalid_type",
            input: M,
            inst: t
        }),
        S)
    }
}
);
function Qy(t, a, r, s) {
    for (const c of t)
        if (c.issues.length === 0)
            return a.value = c.value,
            a;
    const o = t.filter(c => !Bi(c));
    return o.length === 1 ? (a.value = o[0].value,
    o[0]) : (a.issues.push({
        code: "invalid_union",
        input: a.value,
        inst: r,
        errors: t.map(c => c.issues.map(f => Ya(f, s, Pa())))
    }),
    a)
}
const e_ = q("$ZodUnion", (t, a) => {
    Ie.init(t, a),
    we(t._zod, "optin", () => a.options.some(o => o._zod.optin === "optional") ? "optional" : void 0),
    we(t._zod, "optout", () => a.options.some(o => o._zod.optout === "optional") ? "optional" : void 0),
    we(t._zod, "values", () => {
        if (a.options.every(o => o._zod.values))
            return new Set(a.options.flatMap(o => Array.from(o._zod.values)))
    }
    ),
    we(t._zod, "pattern", () => {
        if (a.options.every(o => o._zod.pattern)) {
            const o = a.options.map(c => c._zod.pattern);
            return new RegExp(`^(${o.map(c => Xd(c.source)).join("|")})$`)
        }
    }
    );
    const r = a.options.length === 1
      , s = a.options[0]._zod.run;
    t._zod.parse = (o, c) => {
        if (r)
            return s(o, c);
        let f = !1;
        const h = [];
        for (const p of a.options) {
            const m = p._zod.run({
                value: o.value,
                issues: []
            }, c);
            if (m instanceof Promise)
                h.push(m),
                f = !0;
            else {
                if (m.issues.length === 0)
                    return m;
                h.push(m)
            }
        }
        return f ? Promise.all(h).then(p => Qy(p, o, t, c)) : Qy(h, o, t, c)
    }
}
)
  , t_ = q("$ZodIntersection", (t, a) => {
    Ie.init(t, a),
    t._zod.parse = (r, s) => {
        const o = r.value
          , c = a.left._zod.run({
            value: o,
            issues: []
        }, s)
          , f = a.right._zod.run({
            value: o,
            issues: []
        }, s);
        return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then( ([p,m]) => Fy(r, p, m)) : Fy(r, c, f)
    }
}
);
function Gf(t, a) {
    if (t === a)
        return {
            valid: !0,
            data: t
        };
    if (t instanceof Date && a instanceof Date && +t == +a)
        return {
            valid: !0,
            data: t
        };
    if (us(t) && us(a)) {
        const r = Object.keys(a)
          , s = Object.keys(t).filter(c => r.indexOf(c) !== -1)
          , o = {
            ...t,
            ...a
        };
        for (const c of s) {
            const f = Gf(t[c], a[c]);
            if (!f.valid)
                return {
                    valid: !1,
                    mergeErrorPath: [c, ...f.mergeErrorPath]
                };
            o[c] = f.data
        }
        return {
            valid: !0,
            data: o
        }
    }
    if (Array.isArray(t) && Array.isArray(a)) {
        if (t.length !== a.length)
            return {
                valid: !1,
                mergeErrorPath: []
            };
        const r = [];
        for (let s = 0; s < t.length; s++) {
            const o = t[s]
              , c = a[s]
              , f = Gf(o, c);
            if (!f.valid)
                return {
                    valid: !1,
                    mergeErrorPath: [s, ...f.mergeErrorPath]
                };
            r.push(f.data)
        }
        return {
            valid: !0,
            data: r
        }
    }
    return {
        valid: !1,
        mergeErrorPath: []
    }
}
function Fy(t, a, r) {
    const s = new Map;
    let o;
    for (const h of a.issues)
        if (h.code === "unrecognized_keys") {
            o ?? (o = h);
            for (const p of h.keys)
                s.has(p) || s.set(p, {}),
                s.get(p).l = !0
        } else
            t.issues.push(h);
    for (const h of r.issues)
        if (h.code === "unrecognized_keys")
            for (const p of h.keys)
                s.has(p) || s.set(p, {}),
                s.get(p).r = !0;
        else
            t.issues.push(h);
    const c = [...s].filter( ([,h]) => h.l && h.r).map( ([h]) => h);
    if (c.length && o && t.issues.push({
        ...o,
        keys: c
    }),
    Bi(t))
        return t;
    const f = Gf(a.value, r.value);
    if (!f.valid)
        throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(f.mergeErrorPath)}`);
    return t.value = f.data,
    t
}
const n_ = q("$ZodEnum", (t, a) => {
    Ie.init(t, a);
    const r = Cb(a.entries)
      , s = new Set(r);
    t._zod.values = s,
    t._zod.pattern = new RegExp(`^(${r.filter(o => gw.has(typeof o)).map(o => typeof o == "string" ? xo(o) : o.toString()).join("|")})$`),
    t._zod.parse = (o, c) => {
        const f = o.value;
        return s.has(f) || o.issues.push({
            code: "invalid_value",
            values: r,
            input: f,
            inst: t
        }),
        o
    }
}
)
  , a_ = q("$ZodTransform", (t, a) => {
    Ie.init(t, a),
    t._zod.parse = (r, s) => {
        if (s.direction === "backward")
            throw new zb(t.constructor.name);
        const o = a.transform(r.value, r);
        if (s.async)
            return (o instanceof Promise ? o : Promise.resolve(o)).then(f => (r.value = f,
            r));
        if (o instanceof Promise)
            throw new Zi;
        return r.value = o,
        r
    }
}
);
function Jy(t, a) {
    return t.issues.length && a === void 0 ? {
        issues: [],
        value: void 0
    } : t
}
const $b = q("$ZodOptional", (t, a) => {
    Ie.init(t, a),
    t._zod.optin = "optional",
    t._zod.optout = "optional",
    we(t._zod, "values", () => a.innerType._zod.values ? new Set([...a.innerType._zod.values, void 0]) : void 0),
    we(t._zod, "pattern", () => {
        const r = a.innerType._zod.pattern;
        return r ? new RegExp(`^(${Xd(r.source)})?$`) : void 0
    }
    ),
    t._zod.parse = (r, s) => {
        if (a.innerType._zod.optin === "optional") {
            const o = a.innerType._zod.run(r, s);
            return o instanceof Promise ? o.then(c => Jy(c, r.value)) : Jy(o, r.value)
        }
        return r.value === void 0 ? r : a.innerType._zod.run(r, s)
    }
}
)
  , i_ = q("$ZodExactOptional", (t, a) => {
    $b.init(t, a),
    we(t._zod, "values", () => a.innerType._zod.values),
    we(t._zod, "pattern", () => a.innerType._zod.pattern),
    t._zod.parse = (r, s) => a.innerType._zod.run(r, s)
}
)
  , r_ = q("$ZodNullable", (t, a) => {
    Ie.init(t, a),
    we(t._zod, "optin", () => a.innerType._zod.optin),
    we(t._zod, "optout", () => a.innerType._zod.optout),
    we(t._zod, "pattern", () => {
        const r = a.innerType._zod.pattern;
        return r ? new RegExp(`^(${Xd(r.source)}|null)$`) : void 0
    }
    ),
    we(t._zod, "values", () => a.innerType._zod.values ? new Set([...a.innerType._zod.values, null]) : void 0),
    t._zod.parse = (r, s) => r.value === null ? r : a.innerType._zod.run(r, s)
}
)
  , s_ = q("$ZodDefault", (t, a) => {
    Ie.init(t, a),
    t._zod.optin = "optional",
    we(t._zod, "values", () => a.innerType._zod.values),
    t._zod.parse = (r, s) => {
        if (s.direction === "backward")
            return a.innerType._zod.run(r, s);
        if (r.value === void 0)
            return r.value = a.defaultValue,
            r;
        const o = a.innerType._zod.run(r, s);
        return o instanceof Promise ? o.then(c => Iy(c, a)) : Iy(o, a)
    }
}
);
function Iy(t, a) {
    return t.value === void 0 && (t.value = a.defaultValue),
    t
}
const l_ = q("$ZodPrefault", (t, a) => {
    Ie.init(t, a),
    t._zod.optin = "optional",
    we(t._zod, "values", () => a.innerType._zod.values),
    t._zod.parse = (r, s) => (s.direction === "backward" || r.value === void 0 && (r.value = a.defaultValue),
    a.innerType._zod.run(r, s))
}
)
  , o_ = q("$ZodNonOptional", (t, a) => {
    Ie.init(t, a),
    we(t._zod, "values", () => {
        const r = a.innerType._zod.values;
        return r ? new Set([...r].filter(s => s !== void 0)) : void 0
    }
    ),
    t._zod.parse = (r, s) => {
        const o = a.innerType._zod.run(r, s);
        return o instanceof Promise ? o.then(c => Wy(c, t)) : Wy(o, t)
    }
}
);
function Wy(t, a) {
    return !t.issues.length && t.value === void 0 && t.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: t.value,
        inst: a
    }),
    t
}
const u_ = q("$ZodCatch", (t, a) => {
    Ie.init(t, a),
    we(t._zod, "optin", () => a.innerType._zod.optin),
    we(t._zod, "optout", () => a.innerType._zod.optout),
    we(t._zod, "values", () => a.innerType._zod.values),
    t._zod.parse = (r, s) => {
        if (s.direction === "backward")
            return a.innerType._zod.run(r, s);
        const o = a.innerType._zod.run(r, s);
        return o instanceof Promise ? o.then(c => (r.value = c.value,
        c.issues.length && (r.value = a.catchValue({
            ...r,
            error: {
                issues: c.issues.map(f => Ya(f, s, Pa()))
            },
            input: r.value
        }),
        r.issues = []),
        r)) : (r.value = o.value,
        o.issues.length && (r.value = a.catchValue({
            ...r,
            error: {
                issues: o.issues.map(c => Ya(c, s, Pa()))
            },
            input: r.value
        }),
        r.issues = []),
        r)
    }
}
)
  , c_ = q("$ZodPipe", (t, a) => {
    Ie.init(t, a),
    we(t._zod, "values", () => a.in._zod.values),
    we(t._zod, "optin", () => a.in._zod.optin),
    we(t._zod, "optout", () => a.out._zod.optout),
    we(t._zod, "propValues", () => a.in._zod.propValues),
    t._zod.parse = (r, s) => {
        if (s.direction === "backward") {
            const c = a.out._zod.run(r, s);
            return c instanceof Promise ? c.then(f => Yl(f, a.in, s)) : Yl(c, a.in, s)
        }
        const o = a.in._zod.run(r, s);
        return o instanceof Promise ? o.then(c => Yl(c, a.out, s)) : Yl(o, a.out, s)
    }
}
);
function Yl(t, a, r) {
    return t.issues.length ? (t.aborted = !0,
    t) : a._zod.run({
        value: t.value,
        issues: t.issues
    }, r)
}
const f_ = q("$ZodReadonly", (t, a) => {
    Ie.init(t, a),
    we(t._zod, "propValues", () => a.innerType._zod.propValues),
    we(t._zod, "values", () => a.innerType._zod.values),
    we(t._zod, "optin", () => a.innerType?._zod?.optin),
    we(t._zod, "optout", () => a.innerType?._zod?.optout),
    t._zod.parse = (r, s) => {
        if (s.direction === "backward")
            return a.innerType._zod.run(r, s);
        const o = a.innerType._zod.run(r, s);
        return o instanceof Promise ? o.then(ev) : ev(o)
    }
}
);
function ev(t) {
    return t.value = Object.freeze(t.value),
    t
}
const d_ = q("$ZodCustom", (t, a) => {
    Dt.init(t, a),
    Ie.init(t, a),
    t._zod.parse = (r, s) => r,
    t._zod.check = r => {
        const s = r.value
          , o = a.fn(s);
        if (o instanceof Promise)
            return o.then(c => tv(c, r, s, t));
        tv(o, r, s, t)
    }
}
);
function tv(t, a, r, s) {
    if (!t) {
        const o = {
            code: "custom",
            input: r,
            inst: s,
            path: [...s._zod.def.path ?? []],
            continue: !s._zod.def.abort
        };
        s._zod.def.params && (o.params = s._zod.def.params),
        a.issues.push(cs(o))
    }
}
var nv;
class h_ {
    constructor() {
        this._map = new WeakMap,
        this._idmap = new Map
    }
    add(a, ...r) {
        const s = r[0];
        return this._map.set(a, s),
        s && typeof s == "object" && "id" in s && this._idmap.set(s.id, a),
        this
    }
    clear() {
        return this._map = new WeakMap,
        this._idmap = new Map,
        this
    }
    remove(a) {
        const r = this._map.get(a);
        return r && typeof r == "object" && "id" in r && this._idmap.delete(r.id),
        this._map.delete(a),
        this
    }
    get(a) {
        const r = a._zod.parent;
        if (r) {
            const s = {
                ...this.get(r) ?? {}
            };
            delete s.id;
            const o = {
                ...s,
                ...this._map.get(a)
            };
            return Object.keys(o).length ? o : void 0
        }
        return this._map.get(a)
    }
    has(a) {
        return this._map.has(a)
    }
}
function m_() {
    return new h_
}
(nv = globalThis).__zod_globalRegistry ?? (nv.__zod_globalRegistry = m_());
const Qr = globalThis.__zod_globalRegistry;
function p_(t, a) {
    return new t({
        type: "string",
        ...ae(a)
    })
}
function g_(t, a) {
    return new t({
        type: "string",
        format: "email",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function av(t, a) {
    return new t({
        type: "string",
        format: "guid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function y_(t, a) {
    return new t({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function v_(t, a) {
    return new t({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v4",
        ...ae(a)
    })
}
function b_(t, a) {
    return new t({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v6",
        ...ae(a)
    })
}
function x_(t, a) {
    return new t({
        type: "string",
        format: "uuid",
        check: "string_format",
        abort: !1,
        version: "v7",
        ...ae(a)
    })
}
function S_(t, a) {
    return new t({
        type: "string",
        format: "url",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function T_(t, a) {
    return new t({
        type: "string",
        format: "emoji",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function A_(t, a) {
    return new t({
        type: "string",
        format: "nanoid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function E_(t, a) {
    return new t({
        type: "string",
        format: "cuid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function w_(t, a) {
    return new t({
        type: "string",
        format: "cuid2",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function __(t, a) {
    return new t({
        type: "string",
        format: "ulid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function z_(t, a) {
    return new t({
        type: "string",
        format: "xid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function D_(t, a) {
    return new t({
        type: "string",
        format: "ksuid",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function C_(t, a) {
    return new t({
        type: "string",
        format: "ipv4",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function R_(t, a) {
    return new t({
        type: "string",
        format: "ipv6",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function O_(t, a) {
    return new t({
        type: "string",
        format: "cidrv4",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function M_(t, a) {
    return new t({
        type: "string",
        format: "cidrv6",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function j_(t, a) {
    return new t({
        type: "string",
        format: "base64",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function N_(t, a) {
    return new t({
        type: "string",
        format: "base64url",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function U_(t, a) {
    return new t({
        type: "string",
        format: "e164",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function L_(t, a) {
    return new t({
        type: "string",
        format: "jwt",
        check: "string_format",
        abort: !1,
        ...ae(a)
    })
}
function V_(t, a) {
    return new t({
        type: "string",
        format: "datetime",
        check: "string_format",
        offset: !1,
        local: !1,
        precision: null,
        ...ae(a)
    })
}
function B_(t, a) {
    return new t({
        type: "string",
        format: "date",
        check: "string_format",
        ...ae(a)
    })
}
function k_(t, a) {
    return new t({
        type: "string",
        format: "time",
        check: "string_format",
        precision: null,
        ...ae(a)
    })
}
function Z_(t, a) {
    return new t({
        type: "string",
        format: "duration",
        check: "string_format",
        ...ae(a)
    })
}
function H_(t, a) {
    return new t({
        type: "number",
        checks: [],
        ...ae(a)
    })
}
function q_(t, a) {
    return new t({
        type: "number",
        check: "number_format",
        abort: !1,
        format: "safeint",
        ...ae(a)
    })
}
function P_(t) {
    return new t({
        type: "unknown"
    })
}
function Y_(t, a) {
    return new t({
        type: "never",
        ...ae(a)
    })
}
function iv(t, a) {
    return new Zb({
        check: "less_than",
        ...ae(a),
        value: t,
        inclusive: !1
    })
}
function mf(t, a) {
    return new Zb({
        check: "less_than",
        ...ae(a),
        value: t,
        inclusive: !0
    })
}
function rv(t, a) {
    return new Hb({
        check: "greater_than",
        ...ae(a),
        value: t,
        inclusive: !1
    })
}
function pf(t, a) {
    return new Hb({
        check: "greater_than",
        ...ae(a),
        value: t,
        inclusive: !0
    })
}
function sv(t, a) {
    return new u6({
        check: "multiple_of",
        ...ae(a),
        value: t
    })
}
function Xb(t, a) {
    return new f6({
        check: "max_length",
        ...ae(a),
        maximum: t
    })
}
function co(t, a) {
    return new d6({
        check: "min_length",
        ...ae(a),
        minimum: t
    })
}
function Kb(t, a) {
    return new h6({
        check: "length_equals",
        ...ae(a),
        length: t
    })
}
function G_(t, a) {
    return new m6({
        check: "string_format",
        format: "regex",
        ...ae(a),
        pattern: t
    })
}
function $_(t) {
    return new p6({
        check: "string_format",
        format: "lowercase",
        ...ae(t)
    })
}
function X_(t) {
    return new g6({
        check: "string_format",
        format: "uppercase",
        ...ae(t)
    })
}
function K_(t, a) {
    return new y6({
        check: "string_format",
        format: "includes",
        ...ae(a),
        includes: t
    })
}
function Q_(t, a) {
    return new v6({
        check: "string_format",
        format: "starts_with",
        ...ae(a),
        prefix: t
    })
}
function F_(t, a) {
    return new b6({
        check: "string_format",
        format: "ends_with",
        ...ae(a),
        suffix: t
    })
}
function Qi(t) {
    return new x6({
        check: "overwrite",
        tx: t
    })
}
function J_(t) {
    return Qi(a => a.normalize(t))
}
function I_() {
    return Qi(t => t.trim())
}
function W_() {
    return Qi(t => t.toLowerCase())
}
function ez() {
    return Qi(t => t.toUpperCase())
}
function tz() {
    return Qi(t => mw(t))
}
function nz(t, a, r) {
    return new t({
        type: "array",
        element: a,
        ...ae(r)
    })
}
function az(t, a, r) {
    return new t({
        type: "custom",
        check: "custom",
        fn: a,
        ...ae(r)
    })
}
function iz(t) {
    const a = rz(r => (r.addIssue = s => {
        if (typeof s == "string")
            r.issues.push(cs(s, r.value, a._zod.def));
        else {
            const o = s;
            o.fatal && (o.continue = !1),
            o.code ?? (o.code = "custom"),
            o.input ?? (o.input = r.value),
            o.inst ?? (o.inst = a),
            o.continue ?? (o.continue = !a._zod.def.abort),
            r.issues.push(cs(o))
        }
    }
    ,
    t(r.value, r)));
    return a
}
function rz(t, a) {
    const r = new Dt({
        check: "custom",
        ...ae(a)
    });
    return r._zod.check = t,
    r
}
function Qb(t) {
    let a = t?.target ?? "draft-2020-12";
    return a === "draft-4" && (a = "draft-04"),
    a === "draft-7" && (a = "draft-07"),
    {
        processors: t.processors ?? {},
        metadataRegistry: t?.metadata ?? Qr,
        target: a,
        unrepresentable: t?.unrepresentable ?? "throw",
        override: t?.override ?? ( () => {}
        ),
        io: t?.io ?? "output",
        counter: 0,
        seen: new Map,
        cycles: t?.cycles ?? "ref",
        reused: t?.reused ?? "inline",
        external: t?.external ?? void 0
    }
}
function ct(t, a, r={
    path: [],
    schemaPath: []
}) {
    var s;
    const o = t._zod.def
      , c = a.seen.get(t);
    if (c)
        return c.count++,
        r.schemaPath.includes(t) && (c.cycle = r.path),
        c.schema;
    const f = {
        schema: {},
        count: 1,
        cycle: void 0,
        path: r.path
    };
    a.seen.set(t, f);
    const h = t._zod.toJSONSchema?.();
    if (h)
        f.schema = h;
    else {
        const y = {
            ...r,
            schemaPath: [...r.schemaPath, t],
            path: r.path
        };
        if (t._zod.processJSONSchema)
            t._zod.processJSONSchema(a, f.schema, y);
        else {
            const S = f.schema
              , T = a.processors[o.type];
            if (!T)
                throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
            T(t, a, S, y)
        }
        const v = t._zod.parent;
        v && (f.ref || (f.ref = v),
        ct(v, a, y),
        a.seen.get(v).isParent = !0)
    }
    const p = a.metadataRegistry.get(t);
    return p && Object.assign(f.schema, p),
    a.io === "input" && yt(t) && (delete f.schema.examples,
    delete f.schema.default),
    a.io === "input" && f.schema._prefault && ((s = f.schema).default ?? (s.default = f.schema._prefault)),
    delete f.schema._prefault,
    a.seen.get(t).schema
}
function Fb(t, a) {
    const r = t.seen.get(a);
    if (!r)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
    const s = new Map;
    for (const f of t.seen.entries()) {
        const h = t.metadataRegistry.get(f[0])?.id;
        if (h) {
            const p = s.get(h);
            if (p && p !== f[0])
                throw new Error(`Duplicate schema id "${h}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
            s.set(h, f[0])
        }
    }
    const o = f => {
        const h = t.target === "draft-2020-12" ? "$defs" : "definitions";
        if (t.external) {
            const v = t.external.registry.get(f[0])?.id
              , S = t.external.uri ?? (M => M);
            if (v)
                return {
                    ref: S(v)
                };
            const T = f[1].defId ?? f[1].schema.id ?? `schema${t.counter++}`;
            return f[1].defId = T,
            {
                defId: T,
                ref: `${S("__shared")}#/${h}/${T}`
            }
        }
        if (f[1] === r)
            return {
                ref: "#"
            };
        const m = `#/${h}/`
          , y = f[1].schema.id ?? `__schema${t.counter++}`;
        return {
            defId: y,
            ref: m + y
        }
    }
      , c = f => {
        if (f[1].schema.$ref)
            return;
        const h = f[1]
          , {ref: p, defId: m} = o(f);
        h.def = {
            ...h.schema
        },
        m && (h.defId = m);
        const y = h.schema;
        for (const v in y)
            delete y[v];
        y.$ref = p
    }
    ;
    if (t.cycles === "throw")
        for (const f of t.seen.entries()) {
            const h = f[1];
            if (h.cycle)
                throw new Error(`Cycle detected: #/${h.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)
        }
    for (const f of t.seen.entries()) {
        const h = f[1];
        if (a === f[0]) {
            c(f);
            continue
        }
        if (t.external) {
            const m = t.external.registry.get(f[0])?.id;
            if (a !== f[0] && m) {
                c(f);
                continue
            }
        }
        if (t.metadataRegistry.get(f[0])?.id) {
            c(f);
            continue
        }
        if (h.cycle) {
            c(f);
            continue
        }
        if (h.count > 1 && t.reused === "ref") {
            c(f);
            continue
        }
    }
}
function Jb(t, a) {
    const r = t.seen.get(a);
    if (!r)
        throw new Error("Unprocessed schema. This is a bug in Zod.");
    const s = f => {
        const h = t.seen.get(f);
        if (h.ref === null)
            return;
        const p = h.def ?? h.schema
          , m = {
            ...p
        }
          , y = h.ref;
        if (h.ref = null,
        y) {
            s(y);
            const S = t.seen.get(y)
              , T = S.schema;
            if (T.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (p.allOf = p.allOf ?? [],
            p.allOf.push(T)) : Object.assign(p, T),
            Object.assign(p, m),
            f._zod.parent === y)
                for (const D in p)
                    D === "$ref" || D === "allOf" || D in m || delete p[D];
            if (T.$ref)
                for (const D in p)
                    D === "$ref" || D === "allOf" || D in S.def && JSON.stringify(p[D]) === JSON.stringify(S.def[D]) && delete p[D]
        }
        const v = f._zod.parent;
        if (v && v !== y) {
            s(v);
            const S = t.seen.get(v);
            if (S?.schema.$ref && (p.$ref = S.schema.$ref,
            S.def))
                for (const T in p)
                    T === "$ref" || T === "allOf" || T in S.def && JSON.stringify(p[T]) === JSON.stringify(S.def[T]) && delete p[T]
        }
        t.override({
            zodSchema: f,
            jsonSchema: p,
            path: h.path ?? []
        })
    }
    ;
    for (const f of [...t.seen.entries()].reverse())
        s(f[0]);
    const o = {};
    if (t.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : t.target,
    t.external?.uri) {
        const f = t.external.registry.get(a)?.id;
        if (!f)
            throw new Error("Schema is missing an `id` property");
        o.$id = t.external.uri(f)
    }
    Object.assign(o, r.def ?? r.schema);
    const c = t.external?.defs ?? {};
    for (const f of t.seen.entries()) {
        const h = f[1];
        h.def && h.defId && (c[h.defId] = h.def)
    }
    t.external || Object.keys(c).length > 0 && (t.target === "draft-2020-12" ? o.$defs = c : o.definitions = c);
    try {
        const f = JSON.parse(JSON.stringify(o));
        return Object.defineProperty(f, "~standard", {
            value: {
                ...a["~standard"],
                jsonSchema: {
                    input: fo(a, "input", t.processors),
                    output: fo(a, "output", t.processors)
                }
            },
            enumerable: !1,
            writable: !1
        }),
        f
    } catch {
        throw new Error("Error converting schema to JSON.")
    }
}
function yt(t, a) {
    const r = a ?? {
        seen: new Set
    };
    if (r.seen.has(t))
        return !1;
    r.seen.add(t);
    const s = t._zod.def;
    if (s.type === "transform")
        return !0;
    if (s.type === "array")
        return yt(s.element, r);
    if (s.type === "set")
        return yt(s.valueType, r);
    if (s.type === "lazy")
        return yt(s.getter(), r);
    if (s.type === "promise" || s.type === "optional" || s.type === "nonoptional" || s.type === "nullable" || s.type === "readonly" || s.type === "default" || s.type === "prefault")
        return yt(s.innerType, r);
    if (s.type === "intersection")
        return yt(s.left, r) || yt(s.right, r);
    if (s.type === "record" || s.type === "map")
        return yt(s.keyType, r) || yt(s.valueType, r);
    if (s.type === "pipe")
        return yt(s.in, r) || yt(s.out, r);
    if (s.type === "object") {
        for (const o in s.shape)
            if (yt(s.shape[o], r))
                return !0;
        return !1
    }
    if (s.type === "union") {
        for (const o of s.options)
            if (yt(o, r))
                return !0;
        return !1
    }
    if (s.type === "tuple") {
        for (const o of s.items)
            if (yt(o, r))
                return !0;
        return !!(s.rest && yt(s.rest, r))
    }
    return !1
}
const sz = (t, a={}) => r => {
    const s = Qb({
        ...r,
        processors: a
    });
    return ct(t, s),
    Fb(s, t),
    Jb(s, t)
}
  , fo = (t, a, r={}) => s => {
    const {libraryOptions: o, target: c} = s ?? {}
      , f = Qb({
        ...o ?? {},
        target: c,
        io: a,
        processors: r
    });
    return ct(t, f),
    Fb(f, t),
    Jb(f, t)
}
  , lz = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
}
  , oz = (t, a, r, s) => {
    const o = r;
    o.type = "string";
    const {minimum: c, maximum: f, format: h, patterns: p, contentEncoding: m} = t._zod.bag;
    if (typeof c == "number" && (o.minLength = c),
    typeof f == "number" && (o.maxLength = f),
    h && (o.format = lz[h] ?? h,
    o.format === "" && delete o.format,
    h === "time" && delete o.format),
    m && (o.contentEncoding = m),
    p && p.size > 0) {
        const y = [...p];
        y.length === 1 ? o.pattern = y[0].source : y.length > 1 && (o.allOf = [...y.map(v => ({
            ...a.target === "draft-07" || a.target === "draft-04" || a.target === "openapi-3.0" ? {
                type: "string"
            } : {},
            pattern: v.source
        }))])
    }
}
  , uz = (t, a, r, s) => {
    const o = r
      , {minimum: c, maximum: f, format: h, multipleOf: p, exclusiveMaximum: m, exclusiveMinimum: y} = t._zod.bag;
    typeof h == "string" && h.includes("int") ? o.type = "integer" : o.type = "number",
    typeof y == "number" && (a.target === "draft-04" || a.target === "openapi-3.0" ? (o.minimum = y,
    o.exclusiveMinimum = !0) : o.exclusiveMinimum = y),
    typeof c == "number" && (o.minimum = c,
    typeof y == "number" && a.target !== "draft-04" && (y >= c ? delete o.minimum : delete o.exclusiveMinimum)),
    typeof m == "number" && (a.target === "draft-04" || a.target === "openapi-3.0" ? (o.maximum = m,
    o.exclusiveMaximum = !0) : o.exclusiveMaximum = m),
    typeof f == "number" && (o.maximum = f,
    typeof m == "number" && a.target !== "draft-04" && (m <= f ? delete o.maximum : delete o.exclusiveMaximum)),
    typeof p == "number" && (o.multipleOf = p)
}
  , cz = (t, a, r, s) => {
    r.not = {}
}
  , fz = (t, a, r, s) => {}
  , dz = (t, a, r, s) => {
    const o = t._zod.def
      , c = Cb(o.entries);
    c.every(f => typeof f == "number") && (r.type = "number"),
    c.every(f => typeof f == "string") && (r.type = "string"),
    r.enum = c
}
  , hz = (t, a, r, s) => {
    if (a.unrepresentable === "throw")
        throw new Error("Custom types cannot be represented in JSON Schema")
}
  , mz = (t, a, r, s) => {
    if (a.unrepresentable === "throw")
        throw new Error("Transforms cannot be represented in JSON Schema")
}
  , pz = (t, a, r, s) => {
    const o = r
      , c = t._zod.def
      , {minimum: f, maximum: h} = t._zod.bag;
    typeof f == "number" && (o.minItems = f),
    typeof h == "number" && (o.maxItems = h),
    o.type = "array",
    o.items = ct(c.element, a, {
        ...s,
        path: [...s.path, "items"]
    })
}
  , gz = (t, a, r, s) => {
    const o = r
      , c = t._zod.def;
    o.type = "object",
    o.properties = {};
    const f = c.shape;
    for (const m in f)
        o.properties[m] = ct(f[m], a, {
            ...s,
            path: [...s.path, "properties", m]
        });
    const h = new Set(Object.keys(f))
      , p = new Set([...h].filter(m => {
        const y = c.shape[m]._zod;
        return a.io === "input" ? y.optin === void 0 : y.optout === void 0
    }
    ));
    p.size > 0 && (o.required = Array.from(p)),
    c.catchall?._zod.def.type === "never" ? o.additionalProperties = !1 : c.catchall ? c.catchall && (o.additionalProperties = ct(c.catchall, a, {
        ...s,
        path: [...s.path, "additionalProperties"]
    })) : a.io === "output" && (o.additionalProperties = !1)
}
  , yz = (t, a, r, s) => {
    const o = t._zod.def
      , c = o.inclusive === !1
      , f = o.options.map( (h, p) => ct(h, a, {
        ...s,
        path: [...s.path, c ? "oneOf" : "anyOf", p]
    }));
    c ? r.oneOf = f : r.anyOf = f
}
  , vz = (t, a, r, s) => {
    const o = t._zod.def
      , c = ct(o.left, a, {
        ...s,
        path: [...s.path, "allOf", 0]
    })
      , f = ct(o.right, a, {
        ...s,
        path: [...s.path, "allOf", 1]
    })
      , h = m => "allOf" in m && Object.keys(m).length === 1
      , p = [...h(c) ? c.allOf : [c], ...h(f) ? f.allOf : [f]];
    r.allOf = p
}
  , bz = (t, a, r, s) => {
    const o = t._zod.def
      , c = ct(o.innerType, a, s)
      , f = a.seen.get(t);
    a.target === "openapi-3.0" ? (f.ref = o.innerType,
    r.nullable = !0) : r.anyOf = [c, {
        type: "null"
    }]
}
  , xz = (t, a, r, s) => {
    const o = t._zod.def;
    ct(o.innerType, a, s);
    const c = a.seen.get(t);
    c.ref = o.innerType
}
  , Sz = (t, a, r, s) => {
    const o = t._zod.def;
    ct(o.innerType, a, s);
    const c = a.seen.get(t);
    c.ref = o.innerType,
    r.default = JSON.parse(JSON.stringify(o.defaultValue))
}
  , Tz = (t, a, r, s) => {
    const o = t._zod.def;
    ct(o.innerType, a, s);
    const c = a.seen.get(t);
    c.ref = o.innerType,
    a.io === "input" && (r._prefault = JSON.parse(JSON.stringify(o.defaultValue)))
}
  , Az = (t, a, r, s) => {
    const o = t._zod.def;
    ct(o.innerType, a, s);
    const c = a.seen.get(t);
    c.ref = o.innerType;
    let f;
    try {
        f = o.catchValue(void 0)
    } catch {
        throw new Error("Dynamic catch values are not supported in JSON Schema")
    }
    r.default = f
}
  , Ez = (t, a, r, s) => {
    const o = t._zod.def
      , c = a.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
    ct(c, a, s);
    const f = a.seen.get(t);
    f.ref = c
}
  , wz = (t, a, r, s) => {
    const o = t._zod.def;
    ct(o.innerType, a, s);
    const c = a.seen.get(t);
    c.ref = o.innerType,
    r.readOnly = !0
}
  , Ib = (t, a, r, s) => {
    const o = t._zod.def;
    ct(o.innerType, a, s);
    const c = a.seen.get(t);
    c.ref = o.innerType
}
  , _z = q("ZodISODateTime", (t, a) => {
    N6.init(t, a),
    ke.init(t, a)
}
);
function zz(t) {
    return V_(_z, t)
}
const Dz = q("ZodISODate", (t, a) => {
    U6.init(t, a),
    ke.init(t, a)
}
);
function Cz(t) {
    return B_(Dz, t)
}
const Rz = q("ZodISOTime", (t, a) => {
    L6.init(t, a),
    ke.init(t, a)
}
);
function Oz(t) {
    return k_(Rz, t)
}
const Mz = q("ZodISODuration", (t, a) => {
    V6.init(t, a),
    ke.init(t, a)
}
);
function jz(t) {
    return Z_(Mz, t)
}
const Nz = (t, a) => {
    Nb.init(t, a),
    t.name = "ZodError",
    Object.defineProperties(t, {
        format: {
            value: r => zw(t, r)
        },
        flatten: {
            value: r => _w(t, r)
        },
        addIssue: {
            value: r => {
                t.issues.push(r),
                t.message = JSON.stringify(t.issues, Yf, 2)
            }
        },
        addIssues: {
            value: r => {
                t.issues.push(...r),
                t.message = JSON.stringify(t.issues, Yf, 2)
            }
        },
        isEmpty: {
            get() {
                return t.issues.length === 0
            }
        }
    })
}
  , tn = q("ZodError", Nz, {
    Parent: Error
})
  , Uz = Qd(tn)
  , Lz = Fd(tn)
  , Vz = So(tn)
  , Bz = To(tn)
  , kz = Rw(tn)
  , Zz = Ow(tn)
  , Hz = Mw(tn)
  , qz = jw(tn)
  , Pz = Nw(tn)
  , Yz = Uw(tn)
  , Gz = Lw(tn)
  , $z = Vw(tn)
  , We = q("ZodType", (t, a) => (Ie.init(t, a),
Object.assign(t["~standard"], {
    jsonSchema: {
        input: fo(t, "input"),
        output: fo(t, "output")
    }
}),
t.toJSONSchema = sz(t, {}),
t.def = a,
t.type = a.type,
Object.defineProperty(t, "_def", {
    value: a
}),
t.check = (...r) => t.clone(ga(a, {
    checks: [...a.checks ?? [], ...r.map(s => typeof s == "function" ? {
        _zod: {
            check: s,
            def: {
                check: "custom"
            },
            onattach: []
        }
    } : s)]
}), {
    parent: !0
}),
t.with = t.check,
t.clone = (r, s) => ya(t, r, s),
t.brand = () => t,
t.register = ( (r, s) => (r.add(t, s),
t)),
t.parse = (r, s) => Uz(t, r, s, {
    callee: t.parse
}),
t.safeParse = (r, s) => Vz(t, r, s),
t.parseAsync = async (r, s) => Lz(t, r, s, {
    callee: t.parseAsync
}),
t.safeParseAsync = async (r, s) => Bz(t, r, s),
t.spa = t.safeParseAsync,
t.encode = (r, s) => kz(t, r, s),
t.decode = (r, s) => Zz(t, r, s),
t.encodeAsync = async (r, s) => Hz(t, r, s),
t.decodeAsync = async (r, s) => qz(t, r, s),
t.safeEncode = (r, s) => Pz(t, r, s),
t.safeDecode = (r, s) => Yz(t, r, s),
t.safeEncodeAsync = async (r, s) => Gz(t, r, s),
t.safeDecodeAsync = async (r, s) => $z(t, r, s),
t.refine = (r, s) => t.check(BD(r, s)),
t.superRefine = r => t.check(kD(r)),
t.overwrite = r => t.check(Qi(r)),
t.optional = () => cv(t),
t.exactOptional = () => wD(t),
t.nullable = () => fv(t),
t.nullish = () => cv(fv(t)),
t.nonoptional = r => OD(t, r),
t.array = () => gD(t),
t.or = r => Hi([t, r]),
t.and = r => xD(t, r),
t.transform = r => dv(t, AD(r)),
t.default = r => DD(t, r),
t.prefault = r => RD(t, r),
t.catch = r => jD(t, r),
t.pipe = r => dv(t, r),
t.readonly = () => LD(t),
t.describe = r => {
    const s = t.clone();
    return Qr.add(s, {
        description: r
    }),
    s
}
,
Object.defineProperty(t, "description", {
    get() {
        return Qr.get(t)?.description
    },
    configurable: !0
}),
t.meta = (...r) => {
    if (r.length === 0)
        return Qr.get(t);
    const s = t.clone();
    return Qr.add(s, r[0]),
    s
}
,
t.isOptional = () => t.safeParse(void 0).success,
t.isNullable = () => t.safeParse(null).success,
t.apply = r => r(t),
t))
  , Wb = q("_ZodString", (t, a) => {
    Jd.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (s, o, c) => oz(t, s, o);
    const r = t._zod.bag;
    t.format = r.format ?? null,
    t.minLength = r.minimum ?? null,
    t.maxLength = r.maximum ?? null,
    t.regex = (...s) => t.check(G_(...s)),
    t.includes = (...s) => t.check(K_(...s)),
    t.startsWith = (...s) => t.check(Q_(...s)),
    t.endsWith = (...s) => t.check(F_(...s)),
    t.min = (...s) => t.check(co(...s)),
    t.max = (...s) => t.check(Xb(...s)),
    t.length = (...s) => t.check(Kb(...s)),
    t.nonempty = (...s) => t.check(co(1, ...s)),
    t.lowercase = s => t.check($_(s)),
    t.uppercase = s => t.check(X_(s)),
    t.trim = () => t.check(I_()),
    t.normalize = (...s) => t.check(J_(...s)),
    t.toLowerCase = () => t.check(W_()),
    t.toUpperCase = () => t.check(ez()),
    t.slugify = () => t.check(tz())
}
)
  , Xz = q("ZodString", (t, a) => {
    Jd.init(t, a),
    Wb.init(t, a),
    t.email = r => t.check(g_(Kz, r)),
    t.url = r => t.check(S_(Qz, r)),
    t.jwt = r => t.check(L_(cD, r)),
    t.emoji = r => t.check(T_(Fz, r)),
    t.guid = r => t.check(av(lv, r)),
    t.uuid = r => t.check(y_(Gl, r)),
    t.uuidv4 = r => t.check(v_(Gl, r)),
    t.uuidv6 = r => t.check(b_(Gl, r)),
    t.uuidv7 = r => t.check(x_(Gl, r)),
    t.nanoid = r => t.check(A_(Jz, r)),
    t.guid = r => t.check(av(lv, r)),
    t.cuid = r => t.check(E_(Iz, r)),
    t.cuid2 = r => t.check(w_(Wz, r)),
    t.ulid = r => t.check(__(eD, r)),
    t.base64 = r => t.check(j_(lD, r)),
    t.base64url = r => t.check(N_(oD, r)),
    t.xid = r => t.check(z_(tD, r)),
    t.ksuid = r => t.check(D_(nD, r)),
    t.ipv4 = r => t.check(C_(aD, r)),
    t.ipv6 = r => t.check(R_(iD, r)),
    t.cidrv4 = r => t.check(O_(rD, r)),
    t.cidrv6 = r => t.check(M_(sD, r)),
    t.e164 = r => t.check(U_(uD, r)),
    t.datetime = r => t.check(zz(r)),
    t.date = r => t.check(Cz(r)),
    t.time = r => t.check(Oz(r)),
    t.duration = r => t.check(jz(r))
}
);
function tt(t) {
    return p_(Xz, t)
}
const ke = q("ZodStringFormat", (t, a) => {
    Le.init(t, a),
    Wb.init(t, a)
}
)
  , Kz = q("ZodEmail", (t, a) => {
    w6.init(t, a),
    ke.init(t, a)
}
)
  , lv = q("ZodGUID", (t, a) => {
    A6.init(t, a),
    ke.init(t, a)
}
)
  , Gl = q("ZodUUID", (t, a) => {
    E6.init(t, a),
    ke.init(t, a)
}
)
  , Qz = q("ZodURL", (t, a) => {
    _6.init(t, a),
    ke.init(t, a)
}
)
  , Fz = q("ZodEmoji", (t, a) => {
    z6.init(t, a),
    ke.init(t, a)
}
)
  , Jz = q("ZodNanoID", (t, a) => {
    D6.init(t, a),
    ke.init(t, a)
}
)
  , Iz = q("ZodCUID", (t, a) => {
    C6.init(t, a),
    ke.init(t, a)
}
)
  , Wz = q("ZodCUID2", (t, a) => {
    R6.init(t, a),
    ke.init(t, a)
}
)
  , eD = q("ZodULID", (t, a) => {
    O6.init(t, a),
    ke.init(t, a)
}
)
  , tD = q("ZodXID", (t, a) => {
    M6.init(t, a),
    ke.init(t, a)
}
)
  , nD = q("ZodKSUID", (t, a) => {
    j6.init(t, a),
    ke.init(t, a)
}
)
  , aD = q("ZodIPv4", (t, a) => {
    B6.init(t, a),
    ke.init(t, a)
}
)
  , iD = q("ZodIPv6", (t, a) => {
    k6.init(t, a),
    ke.init(t, a)
}
)
  , rD = q("ZodCIDRv4", (t, a) => {
    Z6.init(t, a),
    ke.init(t, a)
}
)
  , sD = q("ZodCIDRv6", (t, a) => {
    H6.init(t, a),
    ke.init(t, a)
}
)
  , lD = q("ZodBase64", (t, a) => {
    q6.init(t, a),
    ke.init(t, a)
}
)
  , oD = q("ZodBase64URL", (t, a) => {
    Y6.init(t, a),
    ke.init(t, a)
}
)
  , uD = q("ZodE164", (t, a) => {
    G6.init(t, a),
    ke.init(t, a)
}
)
  , cD = q("ZodJWT", (t, a) => {
    X6.init(t, a),
    ke.init(t, a)
}
)
  , e2 = q("ZodNumber", (t, a) => {
    Pb.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (s, o, c) => uz(t, s, o),
    t.gt = (s, o) => t.check(rv(s, o)),
    t.gte = (s, o) => t.check(pf(s, o)),
    t.min = (s, o) => t.check(pf(s, o)),
    t.lt = (s, o) => t.check(iv(s, o)),
    t.lte = (s, o) => t.check(mf(s, o)),
    t.max = (s, o) => t.check(mf(s, o)),
    t.int = s => t.check(ov(s)),
    t.safe = s => t.check(ov(s)),
    t.positive = s => t.check(rv(0, s)),
    t.nonnegative = s => t.check(pf(0, s)),
    t.negative = s => t.check(iv(0, s)),
    t.nonpositive = s => t.check(mf(0, s)),
    t.multipleOf = (s, o) => t.check(sv(s, o)),
    t.step = (s, o) => t.check(sv(s, o)),
    t.finite = () => t;
    const r = t._zod.bag;
    t.minValue = Math.max(r.minimum ?? Number.NEGATIVE_INFINITY, r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null,
    t.maxValue = Math.min(r.maximum ?? Number.POSITIVE_INFINITY, r.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null,
    t.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? .5),
    t.isFinite = !0,
    t.format = r.format ?? null
}
);
function da(t) {
    return H_(e2, t)
}
const fD = q("ZodNumberFormat", (t, a) => {
    K6.init(t, a),
    e2.init(t, a)
}
);
function ov(t) {
    return q_(fD, t)
}
const dD = q("ZodUnknown", (t, a) => {
    Q6.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => fz()
}
);
function uv() {
    return P_(dD)
}
const hD = q("ZodNever", (t, a) => {
    F6.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => cz(t, r, s)
}
);
function mD(t) {
    return Y_(hD, t)
}
const pD = q("ZodArray", (t, a) => {
    J6.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => pz(t, r, s, o),
    t.element = a.element,
    t.min = (r, s) => t.check(co(r, s)),
    t.nonempty = r => t.check(co(1, r)),
    t.max = (r, s) => t.check(Xb(r, s)),
    t.length = (r, s) => t.check(Kb(r, s)),
    t.unwrap = () => t.element
}
);
function gD(t, a) {
    return nz(pD, t, a)
}
const yD = q("ZodObject", (t, a) => {
    W6.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => gz(t, r, s, o),
    we(t, "shape", () => a.shape),
    t.keyof = () => SD(Object.keys(t._zod.def.shape)),
    t.catchall = r => t.clone({
        ...t._zod.def,
        catchall: r
    }),
    t.passthrough = () => t.clone({
        ...t._zod.def,
        catchall: uv()
    }),
    t.loose = () => t.clone({
        ...t._zod.def,
        catchall: uv()
    }),
    t.strict = () => t.clone({
        ...t._zod.def,
        catchall: mD()
    }),
    t.strip = () => t.clone({
        ...t._zod.def,
        catchall: void 0
    }),
    t.extend = r => Sw(t, r),
    t.safeExtend = r => Tw(t, r),
    t.merge = r => Aw(t, r),
    t.pick = r => bw(t, r),
    t.omit = r => xw(t, r),
    t.partial = (...r) => Ew(t2, t, r[0]),
    t.required = (...r) => ww(n2, t, r[0])
}
);
function Eo(t, a) {
    const r = {
        type: "object",
        shape: t ?? {},
        ...ae(a)
    };
    return new yD(r)
}
const vD = q("ZodUnion", (t, a) => {
    e_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => yz(t, r, s, o),
    t.options = a.options
}
);
function Hi(t, a) {
    return new vD({
        type: "union",
        options: t,
        ...ae(a)
    })
}
const bD = q("ZodIntersection", (t, a) => {
    t_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => vz(t, r, s, o)
}
);
function xD(t, a) {
    return new bD({
        type: "intersection",
        left: t,
        right: a
    })
}
const $f = q("ZodEnum", (t, a) => {
    n_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (s, o, c) => dz(t, s, o),
    t.enum = a.entries,
    t.options = Object.values(a.entries);
    const r = new Set(Object.keys(a.entries));
    t.extract = (s, o) => {
        const c = {};
        for (const f of s)
            if (r.has(f))
                c[f] = a.entries[f];
            else
                throw new Error(`Key ${f} not found in enum`);
        return new $f({
            ...a,
            checks: [],
            ...ae(o),
            entries: c
        })
    }
    ,
    t.exclude = (s, o) => {
        const c = {
            ...a.entries
        };
        for (const f of s)
            if (r.has(f))
                delete c[f];
            else
                throw new Error(`Key ${f} not found in enum`);
        return new $f({
            ...a,
            checks: [],
            ...ae(o),
            entries: c
        })
    }
}
);
function SD(t, a) {
    const r = Array.isArray(t) ? Object.fromEntries(t.map(s => [s, s])) : t;
    return new $f({
        type: "enum",
        entries: r,
        ...ae(a)
    })
}
const TD = q("ZodTransform", (t, a) => {
    a_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => mz(t, r),
    t._zod.parse = (r, s) => {
        if (s.direction === "backward")
            throw new zb(t.constructor.name);
        r.addIssue = c => {
            if (typeof c == "string")
                r.issues.push(cs(c, r.value, a));
            else {
                const f = c;
                f.fatal && (f.continue = !1),
                f.code ?? (f.code = "custom"),
                f.input ?? (f.input = r.value),
                f.inst ?? (f.inst = t),
                r.issues.push(cs(f))
            }
        }
        ;
        const o = a.transform(r.value, r);
        return o instanceof Promise ? o.then(c => (r.value = c,
        r)) : (r.value = o,
        r)
    }
}
);
function AD(t) {
    return new TD({
        type: "transform",
        transform: t
    })
}
const t2 = q("ZodOptional", (t, a) => {
    $b.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => Ib(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType
}
);
function cv(t) {
    return new t2({
        type: "optional",
        innerType: t
    })
}
const ED = q("ZodExactOptional", (t, a) => {
    i_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => Ib(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType
}
);
function wD(t) {
    return new ED({
        type: "optional",
        innerType: t
    })
}
const _D = q("ZodNullable", (t, a) => {
    r_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => bz(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType
}
);
function fv(t) {
    return new _D({
        type: "nullable",
        innerType: t
    })
}
const zD = q("ZodDefault", (t, a) => {
    s_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => Sz(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType,
    t.removeDefault = t.unwrap
}
);
function DD(t, a) {
    return new zD({
        type: "default",
        innerType: t,
        get defaultValue() {
            return typeof a == "function" ? a() : Ob(a)
        }
    })
}
const CD = q("ZodPrefault", (t, a) => {
    l_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => Tz(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType
}
);
function RD(t, a) {
    return new CD({
        type: "prefault",
        innerType: t,
        get defaultValue() {
            return typeof a == "function" ? a() : Ob(a)
        }
    })
}
const n2 = q("ZodNonOptional", (t, a) => {
    o_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => xz(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType
}
);
function OD(t, a) {
    return new n2({
        type: "nonoptional",
        innerType: t,
        ...ae(a)
    })
}
const MD = q("ZodCatch", (t, a) => {
    u_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => Az(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType,
    t.removeCatch = t.unwrap
}
);
function jD(t, a) {
    return new MD({
        type: "catch",
        innerType: t,
        catchValue: typeof a == "function" ? a : () => a
    })
}
const ND = q("ZodPipe", (t, a) => {
    c_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => Ez(t, r, s, o),
    t.in = a.in,
    t.out = a.out
}
);
function dv(t, a) {
    return new ND({
        type: "pipe",
        in: t,
        out: a
    })
}
const UD = q("ZodReadonly", (t, a) => {
    f_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => wz(t, r, s, o),
    t.unwrap = () => t._zod.def.innerType
}
);
function LD(t) {
    return new UD({
        type: "readonly",
        innerType: t
    })
}
const VD = q("ZodCustom", (t, a) => {
    d_.init(t, a),
    We.init(t, a),
    t._zod.processJSONSchema = (r, s, o) => hz(t, r)
}
);
function BD(t, a={}) {
    return az(VD, t, a)
}
function kD(t) {
    return iz(t)
}
const ZD = () => !1
  , Id = ZD()
  , eo = (...t) => {
    Id && console.log(...t)
}
  , Wd = (...t) => {
    Id && console.error(...t)
}
  , ho = (...t) => {
    Id && console.warn(...t)
}
  , HD = Eo({
    subscription_plan: tt().optional().nullable(),
    subscription_end_date: da().int().positive().optional().nullable(),
    subscription_access_url: tt().url().optional().nullable(),
    traffic_used_gb: da().min(0).optional().nullable(),
    traffic_total_gb: da().min(0).optional().nullable()
}).passthrough()
  , qD = Eo({
    id: Hi([tt(), da()]).optional(),
    name: tt().optional(),
    city: tt().optional(),
    country: tt().optional(),
    ping_ms: Hi([da(), tt()]).optional(),
    ping: Hi([da(), tt()]).optional(),
    status: tt().optional()
}).passthrough()
  , PD = Eo({
    id: Hi([tt(), da()]).optional(),
    user_telegram_id: Hi([tt(), da()]).optional(),
    hwid: tt().nullable().optional(),
    model: tt().optional(),
    platform: tt().optional(),
    user_agent: tt().optional(),
    connection_time: tt().optional(),
    created_at: tt().optional(),
    updated_at: tt().optional()
}).passthrough()
  , YD = Eo({
    token: tt().min(1)
})
  , GD = t => {
    if (!t || typeof t != "string")
        return !1;
    try {
        const a = new URL(t);
        return ["http:", "https:", "vless:", "vmess:", "trojan:", "ss:"].includes(a.protocol)
    } catch {
        const a = t.match(/^([a-z]+):/i);
        if (a) {
            const r = a[1].toLowerCase() + ":";
            return ["http:", "https:", "vless:", "vmess:", "trojan:", "ss:"].includes(r)
        }
        return !1
    }
}
  , $D = t => {
    try {
        return HD.parse(t)
    } catch {
        return null
    }
}
  , XD = t => {
    try {
        if (!Array.isArray(t))
            return ho("validateServers: данные не являются массивом", t),
            [];
        const a = [];
        for (let r = 0; r < t.length; r++)
            try {
                const s = qD.parse(t[r]);
                a.push(s)
            } catch (s) {
                ho(`validateServers: пропущен элемент ${r} из-за ошибки валидации:`, s, t[r])
            }
        return a
    } catch (a) {
        return Wd("validateServers: ошибка валидации:", a, t),
        []
    }
}
  , KD = t => {
    try {
        if (!Array.isArray(t))
            return ho("validateDevices: данные не являются массивом", t),
            [];
        const a = [];
        for (let r = 0; r < t.length; r++)
            try {
                const s = PD.parse(t[r]);
                a.push(s)
            } catch (s) {
                ho(`validateDevices: пропущен элемент ${r} из-за ошибки валидации:`, s, t[r])
            }
        return a
    } catch (a) {
        return Wd("validateDevices: ошибка валидации:", a, t),
        []
    }
}
  , QD = t => {
    try {
        return YD.parse(t)
    } catch {
        return null
    }
}
  , FD = "https://api.miniapp.bravavless.ru/api/v1"
  , Xf = "auth_token"
  , JD = t => t.replace(/\/+$/, "")
  , Ri = t => {
    const a = JD(FD)
      , r = t.startsWith("/") ? t : `/${t}`;
    return a.endsWith("/api/v1") || a.endsWith("/api/v1/") ? `${a}${r}` : `${a}/api/v1${r}`
}
;
class on extends Error {
    constructor(a="Session expired") {
        super(a),
        this.name = "SessionExpiredError"
    }
}
class a2 extends Error {
    constructor(a="Rate limit exceeded", r=null) {
        super(a),
        this.name = "RateLimitError",
        this.retryAfterSec = r
    }
}
const i2 = () => localStorage.getItem(Xf)
  , Oi = t => {
    t ? localStorage.setItem(Xf, t) : localStorage.removeItem(Xf)
}
  , $l = () => {
    const t = i2()
      , a = {
        "Content-Type": "application/json"
    };
    return t && (a.Authorization = `Bearer ${t}`),
    a
}
  , ln = {
    authenticate: async t => {
        if (!t || typeof t != "string")
            throw new Error("initData is required and must be a string");
        const a = Ri("/authenticate")
          , s = await fetch(a, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain"
            },
            body: t
        });
        if (!s.ok) {
            const f = await s.text();
            throw s.status === 401 || s.status === 403 ? new on("Authentication failed") : new Error(`Failed to authenticate: ${s.status} ${f}`)
        }
        const o = await s.json()
          , c = QD(o);
        if (!c || !c.token)
            throw new Error("Token not received from server or validation failed");
        return Oi(c.token),
        c.token
    }
    ,
    getProfile: async () => {
        const t = Ri("/profile")
          , a = await fetch(t, {
            headers: $l()
        });
        if (a.status === 404)
            return null;
        if (a.status === 401 || a.status === 403)
            throw Oi(null),
            new on("Session expired");
        if (!a.ok)
            throw new Error("Failed to fetch profile");
        const r = await a.json();
        return $D(r)
    }
    ,
    getStandartTraffic: async () => {
        const t = Ri("/profile/traffic/standart")
          , a = i2();
        console.log("[TMP][getStandartTraffic] start", {
            url: t,
            hasToken: !!a,
            tokenPrefix: a ? a.slice(0, 12) : null
        });
        const r = await fetch(t, {
            headers: $l()
        });
        if (console.log("[TMP][getStandartTraffic] response", {
            status: r.status,
            ok: r.ok,
            url: r.url
        }),
        r.status === 401 || r.status === 403)
            throw Oi(null),
            new on("Session expired");
        if (r.status === 404)
            return null;
        if (!r.ok)
            throw new Error(`Failed to fetch standart traffic: ${r.status}`);
        const s = await r.json();
        console.log("[TMP][getStandartTraffic] payload", s);
        const o = s?.standart_used_gb
          , c = typeof o == "number" ? o : Number(o);
        return console.log("[TMP][getStandartTraffic] parsed", {
            rawValue: o,
            value: c,
            isFinite: Number.isFinite(c)
        }),
        Number.isFinite(c) ? c : null
    }
    ,
    getServers: async () => {
        const t = Ri("/public/servers/statuses")
          , a = await fetch(t, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!a.ok)
            throw new Error(`Failed to fetch server statuses: ${a.status}`);
        const r = await a.json();
        eo("getServers: РїРѕР»СѓС‡РµРЅС‹ РґР°РЅРЅС‹Рµ РѕС‚ СЃРµСЂРІРµСЂР°:", r);
        let s = r;
        r && typeof r == "object" && !Array.isArray(r) && (s = r.servers || r.data || r.items || r.results || [],
        eo("getServers: РёР·РІР»РµС‡РµРЅ РјР°СЃСЃРёРІ РёР· РѕР±СЉРµРєС‚Р°:", s));
        const o = XD(s);
        return eo("getServers: РІР°Р»РёРґРёСЂРѕРІР°РЅРЅС‹Рµ СЃРµСЂРІРµСЂС‹:", o),
        o.length === 0 && s.length > 0 && Wd("getServers: РІСЃРµ СЃРµСЂРІРµСЂС‹ Р±С‹Р»Рё РѕС‚С„РёР»СЊС‚СЂРѕРІР°РЅС‹ РІР°Р»РёРґР°С†РёРµР№. РСЃС…РѕРґРЅС‹Рµ РґР°РЅРЅС‹Рµ:", s),
        o
    }
    ,
    getDevices: async () => {
        const t = Ri("/profile/devices")
          , a = await fetch(t, {
            headers: $l()
        });
        if (a.status === 401 || a.status === 403)
            throw Oi(null),
            new on("Session expired");
        if (!a.ok)
            throw new Error(`Failed to fetch devices: ${a.status}`);
        const r = await a.json();
        let s = r;
        return r && typeof r == "object" && !Array.isArray(r) && (s = r.devices || r.data || r.items || r.results || []),
        KD(s)
    }
    ,
    deleteDevice: async t => {
        if (t == null || t === "")
            throw new Error("deviceId is required");
        const a = Ri(`/profile/devices/${encodeURIComponent(t)}`)
          , r = await fetch(a, {
            method: "DELETE",
            headers: $l()
        });
        if (r.status === 401 || r.status === 403)
            throw Oi(null),
            new on("Session expired");
        if (r.status === 429) {
            const s = r.headers.get("Retry-After");
            let o = null;
            if (s) {
                const h = Number.parseInt(s, 10);
                if (Number.isFinite(h))
                    o = h;
                else {
                    const p = Date.parse(s);
                    Number.isNaN(p) || (o = Math.max(0, Math.round((p - Date.now()) / 1e3)))
                }
            }
            let c = null;
            const f = r.headers.get("content-type") || "";
            try {
                if (f.includes("application/json")) {
                    const h = await r.json();
                    if (c = h?.detail || h?.message || h?.error || null,
                    o === null) {
                        const p = h?.retry_after ?? h?.retryAfter ?? h?.retry_after_seconds ?? null
                          , m = Number.parseInt(p, 10);
                        Number.isFinite(m) && (o = m)
                    }
                } else {
                    const h = await r.text();
                    c = h ? h.trim() : null
                }
            } catch {}
            throw new a2(c || "Rate limit exceeded",o)
        }
        if (!r.ok)
            throw new Error(`Failed to delete device: ${r.status}`)
    }
    ,
    clearToken: () => {
        Oi(null)
    }
}
  , r2 = A.createContext()
  , hv = () => {
    if (!window.Telegram?.WebApp)
        return !1;
    const t = window.Telegram.WebApp;
    return !!(t.initDataUnsafe?.user?.id || typeof t.initData == "string" && t.initData.length > 0 || t.version || t.platform && t.platform !== "unknown" || typeof t.ready == "function")
}
  , bs = () => {
    const t = A.useContext(r2);
    if (!t)
        throw new Error("useData must be used within a DataProvider");
    return t
}
  , ID = ({children: t}) => {
    const [a,r] = A.useState(null)
      , [s,o] = A.useState([])
      , [c,f] = A.useState(!1)
      , [h,p] = A.useState(!1)
      , [m,y] = A.useState(!0)
      , [v,S] = A.useState(null)
      , [T,M] = A.useState(!1)
      , D = A.useCallback(async (R= () => !1) => {
        try {
            R() || p(!0),
            console.log("[TMP][DataContext] patchStandartTrafficLazy: start");
            const U = await ln.getStandartTraffic();
            if (console.log("[TMP][DataContext] patchStandartTrafficLazy: done", {
                standartUsedGb: U,
                disposed: R()
            }),
            R() || U === null)
                return;
            r(Y => Y && {
                ...Y,
                standart_used_gb: U
            })
        } catch (U) {
            console.warn("Failed to load standard traffic:", U)
        } finally {
            R() || p(!1)
        }
    }
    , [])
      , N = A.useCallback(async () => {
        try {
            f(!0);
            const R = await ln.getServers();
            o(R || [])
        } catch {
            o([])
        } finally {
            f(!1)
        }
    }
    , []);
    A.useEffect( () => {
        let R = !1;
        const U = () => {
            const se = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? !1 ? "reduced" : "normal";
            document.documentElement.setAttribute("data-motion-profile", se)
        }
          , Y = () => {
            const Q = window.Telegram?.WebApp;
            if (!Q)
                return;
            Q.ready();
            const se = () => {
                const ft = Q.safeAreaInsets || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                };
                let dt = 0;
                Q.platform === "ios" && (dt = 71),
                Q.platform === "android" && (dt = 48),
                document.documentElement.style.setProperty("--safe-area-inset-top", `${ft.top}px`),
                document.documentElement.style.setProperty("--safe-area-inset-bottom", `${ft.bottom}px`),
                document.documentElement.style.setProperty("--safe-area-inset-left", `${ft.left}px`),
                document.documentElement.style.setProperty("--safe-area-inset-right", `${ft.right}px`),
                document.documentElement.style.setProperty("--telegram-header-height", `${dt}px`)
            }
            ;
            se();
            const _e = Q.platform === "android" || Q.platform === "ios"
              , Oe = ["tdesktop", "web", "macos", "windows"].includes(Q.platform);
            _e && !Oe && (typeof Q.requestFullscreen == "function" ? Q.requestFullscreen() : typeof Q.expand == "function" && Q.expand(),
            setTimeout(se, 50),
            setTimeout(se, 150),
            setTimeout(se, 300)),
            Q.onEvent && Q.onEvent("viewportChanged", se)
        }
          , $ = async (Q=15, se=200) => {
            for (let _e = 0; _e < Q; _e++) {
                const Oe = window.Telegram?.WebApp;
                if (Oe && typeof Oe.initData == "string" && Oe.initData.length > 0)
                    return Oe.initData;
                await new Promise(ft => setTimeout(ft, se))
            }
            throw new Error("Telegram WebApp initData not available after waiting")
        }
          , I = async () => {
            let Q = null;
            for (let se = 0; se < 3; se++)
                try {
                    const _e = await $();
                    await ln.authenticate(_e);
                    return
                } catch (_e) {
                    Q = _e,
                    se < 2 && await new Promise(Oe => setTimeout(Oe, 500))
                }
            throw Q || new Error("Authentication failed")
        }
          , X = async () => {
            try {
                const Q = await ln.getProfile();
                R || (r(Q),
                Q && D( () => R))
            } catch (Q) {
                if (Q instanceof on)
                    throw Q;
                R || r(null)
            }
        }
        ;
        return (async () => {
            try {
                U(),
                Y();
                let Q = hv();
                if (!Q && window.Telegram?.WebApp && (await new Promise(se => setTimeout(se, 500)),
                Q = hv()),
                R)
                    return;
                if (M(Q),
                !Q) {
                    S("NOT_TELEGRAM");
                    return
                }
                await I(),
                await X(),
                S(null)
            } catch (Q) {
                Q instanceof on ? S("SESSION_EXPIRED") : S("Failed to load data")
            } finally {
                R || y(!1)
            }
        }
        )(),
        () => {
            R = !0
        }
    }
    , []),
    A.useEffect( () => {
        if (v !== "SESSION_EXPIRED" || !window.Telegram?.WebApp)
            return;
        const R = setTimeout(async () => {
            try {
                y(!0);
                const U = window.Telegram.WebApp;
                if (typeof U.initData != "string" || U.initData.length === 0)
                    throw new Error("initData is empty or invalid");
                await ln.authenticate(U.initData);
                let Y = null;
                try {
                    Y = await ln.getProfile()
                } catch {
                    Y = null
                }
                r(Y),
                Y && D( () => !1),
                S(null)
            } catch {
                S("SESSION_EXPIRED")
            } finally {
                y(!1)
            }
        }
        , 500);
        return () => clearTimeout(R)
    }
    , [v]);
    const V = async () => {
        try {
            S(null),
            y(!0);
            const R = window.Telegram?.WebApp;
            if (!R || typeof R.initData != "string" || R.initData.length === 0)
                throw new Error("Telegram WebApp initData not available");
            await ln.authenticate(R.initData);
            let U = null;
            try {
                U = await ln.getProfile()
            } catch {
                U = null
            }
            r(U),
            U && D( () => !1),
            S(null)
        } catch (R) {
            R instanceof on ? S("SESSION_EXPIRED") : S("Failed to load data")
        } finally {
            y(!1)
        }
    }
    ;
    return x.jsx(r2.Provider, {
        value: {
            profile: a,
            servers: s,
            serversLoading: c,
            loading: m,
            error: v,
            isTelegram: T,
            standardTrafficLoading: h,
            retryAuth: V,
            refreshServers: N
        },
        children: t
    })
}
  , WD = ({used: t=0, total: a=0}) => {
    const r = Math.max(a, 0)
      , s = r === 0
      , o = s ? 0 : Math.min(t / r * 100, 100)
      , c = 100 - o;
    return x.jsxs("div", {
        className: "w-full flex items-center gap-4",
        children: [x.jsxs("span", {
            className: "text-white text-traffic whitespace-nowrap",
            children: [Number(t).toFixed(1), " GB"]
        }), x.jsxs("div", {
            className: "flex-1 h-1 bg-white/10 rounded-full flex",
            children: [x.jsx("div", {
                className: "bg-[#0984FF] shadow-[0_0_4px_#187DE2] h-full",
                style: {
                    width: `${o}%`
                }
            }), x.jsx("div", {
                className: "bg-[#747474] h-full",
                style: {
                    width: `${c}%`
                }
            })]
        }), x.jsx("span", {
            className: "text-white text-traffic whitespace-nowrap",
            children: s ? "∞" : `${r.toFixed(1)} GB`
        })]
    })
}
  , s2 = ({profile: t, hide: a=!1}) => {
    const r = t?.lte_used_gb ?? 0
      , s = t?.lte_total_gb ?? 0;
    let o = "сомнительно";
    if (t?.subscription_start_date && t?.subscription_end_date) {
        const c = new Date(t.subscription_start_date * 1e3)
          , f = new Date(t.subscription_end_date * 1e3)
          , h = new Date
          , p = 30
          , m = h - c
          , y = Math.floor(m / (1e3 * 60 * 60 * 24))
          , v = Math.floor(y / p)
          , S = new Date(c.getTime() + (v + 1) * p * 24 * 60 * 60 * 1e3)
          , T = S < f ? S : f
          , M = D => String(D).padStart(2, "0");
        o = `${M(T.getDate())}.${M(T.getMonth() + 1)}.${T.getFullYear()}`
    }
    return x.jsx("section", {
        children: x.jsx(Yd, {
            children: x.jsxs("div", {
                className: "flex flex-col gap-2",
                children: [x.jsx("div", {
                    className: "flex flex-col",
                    children: x.jsx("h1", {
                        className: "text-title-main text-center",
                        children: "LTE ключи"
                    })
                }), x.jsx(WD, {
                    used: r,
                    total: s
                }), !a && x.jsxs("p", {
                    className: "text-description text-center text-white mt-2",
                    children: ["Использованный трафик обнулится ", x.jsx("br", {}), x.jsx("strong", {
                        className: "font-semibold",
                        children: o
                    })]
                })]
            })
        })
    })
}
  , e8 = ({used: t, loading: a=!1}) => x.jsxs("div", {
    className: "surface-card flex w-fit px-4 items-center text-center py-1 text-traffic-title rounded-[18px] gap-1.5",
    children: [a ? x.jsxs("span", {
        className: "flex items-center gap-2 font-medium text-white/90",
        "aria-live": "polite",
        children: [x.jsx("span", {
            className: "h-4 w-4 animate-spin rounded-full border-2 border-white/25 border-t-[#187DE2]",
            "aria-hidden": "true"
        }), "Загрузка..."]
    }) : x.jsxs("span", {
        className: "font-medium",
        children: [Number(t ?? 0).toFixed(1), " GB"]
    }), " ", "/", x.jsx("span", {
        className: "text-[#187DE2] text-[1.9rem] mb-0.5 leading-none flex items-center",
        children: "∞"
    })]
})
  , eh = ({usedGb: t, loading: a=!1}) => x.jsx("div", {
    children: x.jsx(Yd, {
        children: x.jsxs("div", {
            className: "flex flex-col justify-center",
            children: [x.jsx("h1", {
                className: "text-title-main text-center",
                children: "Стандартные ключи"
            }), x.jsx("div", {
                className: "flex flex-col mt-[17px] items-center",
                children: x.jsx(e8, {
                    used: t,
                    loading: a
                })
            })]
        })
    })
})
  , t8 = ({profile: t, standardTrafficLoading: a=!1}) => {
    const r = t?.standart_used_gb
      , s = () => {
        window.Telegram?.WebApp ? window.Telegram.WebApp.openTelegramLink("https://t.me/bravavless_bot?start=buy") : window.open("https://t.me/bravavless_bot?start=buy", "_blank")
    }
    ;
    return x.jsx(x.Fragment, {
        children: x.jsx("div", {
            className: "flex flex-col gap-[19px]",
            children: x.jsx("div", {
                className: "flex flex-col",
                children: x.jsxs("div", {
                    className: "flex flex-col gap-[19px]",
                    children: [x.jsx(eh, {
                        usedGb: r,
                        loading: a
                    }), x.jsx(s2, {
                        profile: t,
                        hide: !0
                    }), x.jsx(os, {
                        onClick: s,
                        title: "Оформить подписку"
                    })]
                })
            })
        })
    })
}
  , n8 = ({profile: t, standardTrafficLoading: a=!1}) => {
    const r = t?.standart_used_gb;
    return x.jsx(x.Fragment, {
        children: x.jsx("div", {
            className: "flex flex-col gap-5",
            children: x.jsx("div", {
                className: "flex flex-col",
                children: x.jsx("div", {
                    className: "flex flex-col gap-5",
                    children: x.jsx(eh, {
                        usedGb: r,
                        loading: a
                    })
                })
            })
        })
    })
}
  , a8 = ({profile: t, standardTrafficLoading: a=!1}) => {
    const r = t?.standart_used_gb
      , s = () => {
        window.Telegram?.WebApp ? window.Telegram.WebApp.openTelegramLink("https://t.me/bravavless_bot?start=buy") : window.open("https://t.me/bravavless_bot?start=buy", "_blank")
    }
    ;
    return x.jsx(x.Fragment, {
        children: x.jsx("div", {
            className: "flex flex-col gap-[19px]",
            children: x.jsx("div", {
                className: "flex flex-col",
                children: x.jsxs("div", {
                    className: "flex flex-col gap-[19px]",
                    children: [x.jsx(eh, {
                        usedGb: r,
                        loading: a
                    }), x.jsx(s2, {
                        profile: t,
                        hide: !1
                    }), x.jsx(os, {
                        onClick: s,
                        title: "Купить GB"
                    })]
                })
            })
        })
    })
}
  , i8 = () => {
    const t = hs()
      , {profile: a, loading: r, error: s, standardTrafficLoading: o} = bs();
    if (r)
        return x.jsx("div", {
            className: "text-center text-white mt-10 animate-pulse",
            children: "Загрузка данных..."
        });
    if (s && s !== "NOT_TELEGRAM" && s !== "SESSION_EXPIRED")
        return x.jsx("div", {
            className: "text-center text-red-500 mt-10",
            children: s
        });
    const c = a?.subscription_end_date ? Math.max(0, Math.ceil((a.subscription_end_date * 1e3 - Date.now()) / (1e3 * 60 * 60 * 24))) : 0
      , f = a?.subscription_end_date ? new Date(a.subscription_end_date * 1e3).toLocaleDateString("ru-RU") : ""
      , h = a?.subscription_plan && c > 0
      , p = () => {
        window.Telegram?.WebApp ? window.Telegram.WebApp.openTelegramLink("https://t.me/bravavless_bot?start=buy") : window.open("https://t.me/bravavless_bot?start=buy", "_blank")
    }
      , y = (S => {
        if (!S)
            return "none";
        const T = S.toLowerCase();
        return T.includes("premium") ? "premium" : T.includes("trial") ? "trial" : T.includes("base") ? "base" : "none"
    }
    )(a?.subscription_plan)
      , v = () => {
        const S = "https://redirect.miniapp.bravavless.ru/api/v1/r";
        if (!a?.subscription_access_url) {
            alert("Приложение не установлено, воспользуйтесь инструкцией"),
            t("/instruction");
            return
        }
        if (!GD(a.subscription_access_url)) {
            alert("Некорректный URL приложения. Обратитесь в поддержку.");
            return
        }
        const T = encodeURIComponent(a.subscription_access_url)
          , M = `${S}/open?url=${T}`;
        window.Telegram?.WebApp ? window.Telegram.WebApp.openLink(M, {
            try_instant_view: !1
        }) : window.location.href = M
    }
    ;
    return h ? x.jsxs("div", {
        className: "flex flex-col",
        children: [x.jsx("h1", {
            className: "motion-text text-title-hero font-semibold uppercase text-center mt-10 mb-[23px]",
            children: "ПОДПИСКА"
        }), x.jsx(qy, {
            subType: a?.subscription_plan || "trial",
            day: c,
            date: f
        }), x.jsxs("div", {
            children: [x.jsxs("div", {
                className: "flex flex-col gap-5 mt-5",
                children: [x.jsx(dw, {
                    keyValue: a?.subscription_access_url || ""
                }), x.jsx(os, {
                    onClick: v,
                    title: "Перейти в приложение"
                })]
            }), x.jsx("p", {
                className: "motion-text text-description text-center leading-snug text-white mt-5",
                children: "Если у вас еще не установлено приложение, прочитайте инструкцию"
            })]
        }), x.jsx("h1", {
            className: "motion-text text-title-hero font-semibold uppercase text-center mt-10 mb-[23px]",
            children: "Трафик"
        }), y === "trial" && x.jsx(t8, {
            profile: a,
            standardTrafficLoading: o,
            daysRemaining: c,
            formattedDate: f
        }), y === "premium" && x.jsx(a8, {
            profile: a,
            standardTrafficLoading: o,
            daysRemaining: c,
            formattedDate: f
        }), y === "base" && x.jsx(n8, {
            profile: a,
            standardTrafficLoading: o,
            daysRemaining: c,
            formattedDate: f
        })]
    }) : x.jsxs("div", {
        className: "flex flex-col",
        children: [x.jsx("h1", {
            className: "motion-text text-title-hero uppercase text-center mt-10 mb-[23px]",
            children: "МОЯ ПОДПИСКА"
        }), x.jsx("div", {
            className: "flex flex-col gap-5",
            children: x.jsx(qy, {
                subType: "none",
                day: 0,
                date: "-",
                isActive: !1
            })
        }), x.jsx("div", {
            className: "flex flex-col gap-5 mt-5",
            children: x.jsx(os, {
                onClick: p,
                title: "Оформить подписку"
            })
        }), x.jsx("p", {
            className: "motion-text text-description text-center leading-snug text-white mt-5",
            children: "Либо пробный период, если вы еще его не активировали"
        })]
    })
}
  , r8 = ({city: t, country: a, ping: r, delayMs: s=0}) => {
    const o = r < 1 || r > 998
      , c = h => o ? "#D63A3A" : h <= 500 ? "#44BD34" : h <= 990 ? "#E6802E" : "#D63A3A"
      , f = h => o ? "Timeout" : `${h} ms`;
    return x.jsxs("div", {
        className: "surface-card block-appear flex w-full px-4 py-2 rounded-[18px]",
        style: {
            animationDelay: `${s}ms`
        },
        children: [x.jsxs("div", {
            className: "flex flex-col flex-1 gap-0",
            children: [x.jsx("span", {
                className: "text-title-main",
                children: t
            }), x.jsx("span", {
                className: "text-description text-city -mt-1",
                children: a
            })]
        }), x.jsx("span", {
            className: "text-ping mt-auto mb-auto px-3 py-1 min-w-19 text-center rounded-3xl text-white font-medium",
            style: {
                backgroundColor: c(r)
            },
            children: f(r)
        })]
    })
}
  , s8 = () => {
    const {servers: t, serversLoading: a, loading: r, error: s, refreshServers: o} = bs();
    return A.useEffect( () => {
        (!t || t.length === 0) && o()
    }
    , [t?.length, o]),
    eo("ServersPage: servers =", t, "loading =", r, "serversLoading =", a, "error =", s),
    r ? x.jsx("div", {
        className: "text-center text-white mt-10 animate-pulse",
        children: "Загрузка..."
    }) : a ? x.jsx("div", {
        className: "text-center text-white mt-10 animate-pulse",
        children: "Обновляем статусы серверов..."
    }) : s && s !== "NOT_TELEGRAM" ? x.jsx("div", {
        className: "text-center text-red-500 mt-10",
        children: s
    }) : x.jsxs("div", {
        className: "flex flex-col",
        children: [x.jsx("h1", {
            className: "motion-text text-title-hero font-semibold uppercase text-center mt-[40px] mb-[23px]",
            children: "СТАТУСЫ СЕРВЕРОВ"
        }), x.jsx("div", {
            className: "flex flex-col gap-[15px]",
            children: t && t.length > 0 ? t.map( (c, f) => x.jsx(r8, {
                city: c.city || c.name || "Неизвестно",
                country: c.country || "",
                ping: c.ping_ms || c.ping || 999,
                delayMs: Math.min(f * 45, 540)
            }, c.id || f)) : x.jsx("div", {
                className: "motion-text text-center text-white/70 mt-10",
                children: "Серверы временно недоступны"
            })
        }), x.jsx("p", {
            className: "motion-text text-description text-center leading-snug text-white mt-5",
            children: "Следите за постами в нашем канале, чтобы не пропускать новости об апдейтах и тех. работах"
        }), x.jsx("div", {
            className: "flex mt-5",
            children: x.jsx(os, {
                onClick: () => window.location.href = "https://t.me/bravavless",
                title: "Перейти в канал"
            })
        })]
    })
}
  , Xr = ({icon: t, title: a, children: r, delayMs: s=0}) => {
    const [o,c] = A.useState(!1);
    return x.jsxs("div", {
        className: "surface-card block-appear rounded-[18px] overflow-hidden",
        style: {
            animationDelay: `${s}ms`
        },
        children: [x.jsxs("button", {
            onClick: () => {
                od(),
                c(!o)
            }
            ,
            className: "motion-btn w-full flex items-center gap-3 px-5 py-4 rounded-[999px]",
            children: [t && x.jsx(t, {
                className: "text-white"
            }), x.jsx("span", {
                className: " text-white text-title-hero leading-snug text-left  font-medium",
                children: a
            }), x.jsx("div", {
                className: "ml-auto",
                children: x.jsx(pn.div, {
                    animate: {
                        rotate: o ? 90 : 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 380,
                        damping: 28
                    },
                    children: x.jsx(cw, {
                        className: "w-5 h-5 text-white"
                    })
                })
            })]
        }), x.jsx(k1, {
            initial: !1,
            children: o && x.jsx(pn.div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "auto",
                    opacity: 1
                },
                exit: {
                    height: 0,
                    opacity: 0
                },
                transition: {
                    duration: .32,
                    ease: [.2, .75, .2, 1]
                },
                children: x.jsx(pn.div, {
                    initial: {
                        y: -6,
                        opacity: .6
                    },
                    animate: {
                        y: 0,
                        opacity: 1
                    },
                    exit: {
                        y: -4,
                        opacity: 0
                    },
                    transition: {
                        duration: .22,
                        ease: "easeOut"
                    },
                    className: "px-5 pb-4 text-white/90 text-instruction",
                    children: r
                })
            })
        })]
    })
}
;
var mv;
function Kf() {
    return Kf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Kf.apply(null, arguments)
}
var pv = function(a) {
    return A.createElement("svg", Kf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 21,
        height: 23,
        fill: "none"
    }, a), mv || (mv = A.createElement("path", {
        fill: "#fff",
        d: "M19.214 20.124C18.14 21.55 17 22.94 15.267 22.964c-1.735.035-2.291-.909-4.259-.909-1.98 0-2.588.886-4.232.944-1.695.057-2.977-1.518-4.064-2.91C.5 17.25-1.196 12.017 1.082 8.498 2.206 6.75 4.225 5.646 6.413 5.612c1.656-.023 3.235 1 4.258 1 1.01 0 2.925-1.23 4.931-1.046.841.034 3.197.299 4.711 2.276-.116.07-2.808 1.472-2.783 4.382.04 3.473 3.43 4.634 3.469 4.645-.039.08-.544 1.656-1.786 3.255m-7.39-18.4C12.769.77 14.334.047 15.629 0c.168 1.345-.44 2.702-1.346 3.668-.893.978-2.369 1.737-3.818 1.633-.194-1.322.53-2.702 1.359-3.576"
    })))
}, gv;
function Qf() {
    return Qf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Qf.apply(null, arguments)
}
var l8 = function(a) {
    return A.createElement("svg", Qf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none"
    }, a), gv || (gv = A.createElement("path", {
        fill: "#fff",
        d: "M1.684 7.774q-.703 0-1.194.433Q0 8.639 0 9.245v6.202q0 .62.49 1.053t1.194.433 1.185-.433.483-1.053V9.245q0-.606-.49-1.038a1.72 1.72 0 0 0-1.178-.433M15.221 2.207l1.161-1.89Q16.497.13 16.3.03q-.211-.087-.327.086L14.797 2.02a9 9 0 0 0-3.286-.607 9 9 0 0 0-3.286.607L7.047.115Q6.93-.058 6.72.03q-.196.101-.082.288L7.8 2.207Q6.033 3 4.987 4.42 3.94 5.84 3.94 7.529h15.123q0-1.687-1.046-3.108Q16.97 3 15.22 2.207M8.51 4.954a.66.66 0 0 1-.45.167.63.63 0 0 1-.441-.167.52.52 0 0 1-.18-.396q0-.23.18-.397a.63.63 0 0 1 .441-.165q.261 0 .45.165a.513.513 0 0 1 0 .793m6.89 0a.63.63 0 0 1-.44.167.66.66 0 0 1-.45-.167.51.51 0 0 1 0-.793.66.66 0 0 1 .45-.165q.26 0 .44.165.18.166.18.397a.52.52 0 0 1-.18.396M4.005 17.654q0 .663.523 1.125.524.46 1.276.461h1.21l.016 3.274q0 .621.49 1.053.49.433 1.178.433.702 0 1.193-.433.49-.433.49-1.053V19.24h2.256v3.274q0 .621.49 1.053.491.433 1.194.433.704 0 1.194-.433t.49-1.053V19.24h1.226q.735 0 1.26-.461.522-.461.522-1.125V8.048H4.005zM21.336 7.774q-.687 0-1.177.425-.49.426-.49 1.046v6.202q0 .62.49 1.053.491.432 1.177.433.703 0 1.193-.433t.49-1.053V9.245q0-.62-.49-1.046-.49-.425-1.193-.425"
    })))
}, yv;
function Ff() {
    return Ff = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Ff.apply(null, arguments)
}
var o8 = function(a) {
    return A.createElement("svg", Ff({
        xmlns: "http://www.w3.org/2000/svg",
        width: 28,
        height: 24,
        fill: "none"
    }, a), yv || (yv = A.createElement("path", {
        fill: "#fff",
        d: "m0 3.395 11.175-1.33.005 9.424-11.17.055zm11.17 9.18.008 9.431-11.17-1.342V12.51zM12.524 1.89 27.343 0v11.369l-14.817.102zm14.821 10.772-.003 11.317-14.818-1.828-.02-9.51z"
    })))
}, vv, bv, xv, Sv;
function Jf() {
    return Jf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Jf.apply(null, arguments)
}
var u8 = function(a) {
    return A.createElement("svg", Jf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        fill: "none",
        viewBox: "15 25 73 52"
    }, a), vv || (vv = A.createElement("path", {
        fill: "#fff",
        d: "M20.653 72.389h-1.41c-1.122 0-2-.729-2-1.66 0-.802.634-1.629 1.223-2.057l2.606-1.891h-.828c-1.654 0-3-1.28-3-2.854V30.462c0-1.572 1.346-2.851 3-2.851h63c1.654 0 3 1.279 3 2.851v33.466c0 1.572-1.346 2.852-3 2.852h-.829l2.605 1.891c.589.423 1.225 1.247 1.225 2.055 0 .931-.879 1.659-2 1.659h-1.41c-.781 0-1.793-.346-2.407-.821l-6.214-4.787H58.415l-.912.846c-.398.37-1.101.628-1.709.628h-8.103c-.607 0-1.309-.257-1.707-.625l-.913-.847H29.274l-6.219 4.792c-.618.473-1.628.818-2.402.818m-.409-43.778c-1.103 0-2 .831-2 1.851v33.465c0 1.022.897 1.854 2 1.854h2.369a.5.5 0 0 1 .294.905l-3.853 2.795c-.446.325-.81.885-.81 1.248 0 .364.449.66 1 .66h1.41c.558 0 1.346-.269 1.792-.612l6.354-4.896a.5.5 0 0 1 .305-.104h16.163c.126 0 .248.048.34.134l1.056.979c.214.197.675.358 1.028.358h8.103c.359 0 .812-.158 1.029-.36l1.056-.979a.5.5 0 0 1 .34-.134h16.165c.11 0 .218.036.305.104l6.351 4.892c.437.339 1.241.613 1.796.613h1.41c.552 0 1-.296 1-.659 0-.365-.363-.924-.811-1.244l-3.854-2.797a.502.502 0 0 1 .294-.905h2.369c1.103 0 2-.831 2-1.852V30.462c0-1.021-.897-1.851-2-1.851z"
    })), bv || (bv = A.createElement("circle", {
        cx: 49.228,
        cy: 39.216,
        r: .527,
        fill: "#fff"
    })), xv || (xv = A.createElement("circle", {
        cx: 54.258,
        cy: 39.216,
        r: .527,
        fill: "#fff"
    })), Sv || (Sv = A.createElement("path", {
        fill: "#fff",
        d: "M80.744 30.587h-58c-.74 0-1.342.539-1.342 1.203v30.812c0 .662.602 1.201 1.342 1.201h58c.738 0 1.341-.539 1.341-1.201V31.79c0-.664-.603-1.204-1.341-1.203m-35.393 5.589a.305.305 0 0 1 .529-.303l1.077 1.883c1.199-1.171 2.899-1.902 4.785-1.902 1.884 0 3.583.729 4.779 1.899l1.076-1.88a.304.304 0 1 1 .528.303l-1.171 2.047a5.74 5.74 0 0 1 1.363 3.692H45.165c0-1.388.506-2.668 1.358-3.689zm-1.203 8.717v6.573h-.004c-.059.704-.695 1.261-1.475 1.261s-1.417-.557-1.475-1.261h-.004v-6.573h.002q-.003-.038-.002-.075c0-.753.662-1.363 1.479-1.363s1.479.61 1.479 1.363l-.002.075zm14.243 7.646a.2.2 0 0 1-.017.076c.011.064.017.133.017.199 0 .677-.533 1.236-1.229 1.345v.021h-.575v4.049h-.005c-.06.705-.698 1.262-1.478 1.262-.778 0-1.416-.557-1.474-1.262h-.005V54.18h-3.767v4.049h-.005c-.057.705-.696 1.26-1.474 1.26-.78 0-1.417-.555-1.475-1.26h-.005V54.18h-.581v-.021c-.698-.112-1.228-.669-1.228-1.344q0-.101.016-.199a.2.2 0 0 1-.016-.076v-9.812c0-.103.084-.188.188-.188h12.923c.104 0 .188.084.188.188h.002zm3.909-1.076h-.005c-.061.704-.695 1.26-1.477 1.26-.779 0-1.418-.556-1.475-1.26h-.005V44.89h.003l-.003-.076c0-.752.662-1.362 1.479-1.362.816 0 1.479.61 1.479 1.362v.076h.004z"
    })))
};
const Xl = ({href: t, children: a}) => x.jsx("a", {
    href: t,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "mt-3 mb-4 inline-flex items-center justify-center px-4 py-2 bg-button text-white rounded-[999px] text-button-title hover:opacity-90 transition-opacity",
    children: a
})
  , c8 = () => x.jsxs("div", {
    className: "flex flex-col",
    children: [x.jsx("h1", {
        className: "text-title-hero font-semibold uppercase text-center mt-[40px] mb-[23px]",
        children: "ИНСТРУКЦИЯ"
    }), x.jsxs("div", {
        className: "flex flex-col gap-[15px]",
        children: [x.jsx(Xr, {
            icon: pv,
            title: "IOS",
            delayMs: 0,
            children: x.jsxs("div", {
                className: "flex flex-col gap-2 text-white/80",
                children: [x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "1."
                    }), " Установите приложение Incy из AppStore"]
                }), x.jsx(Xl, {
                    href: "https://apps.apple.com/ru/app/incy/id6756943388",
                    children: "Скачать Incy"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "2."
                    }), " Скопируйте ваш ключ из раздела подписки"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "3."
                    }), " Откройте приложение и нажмите на кнопку «Вставить» в правом нижнем углу экрана"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "4."
                    }), " Выберите желаемую локацию сервера и нажмите на кнопку включения в центре экрана, чтобы подключиться к VPN"]
                })]
            })
        }), x.jsx(Xr, {
            icon: l8,
            title: "Android",
            delayMs: 60,
            children: x.jsxs("div", {
                className: "flex flex-col gap-2 text-white/80",
                children: [x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "1."
                    }), " Установите приложение Incy из GooglePlay"]
                }), x.jsx(Xl, {
                    href: "https://play.google.com/store/apps/details?id=llc.itdev.incy",
                    children: "Скачать Incy"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "2."
                    }), " Скопируйте ваш ключ из раздела подписки"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "3."
                    }), " Откройте приложение и нажмите на кнопку «Вставить» в правом нижнем углу экрана"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "4."
                    }), " Выберите желаемую локацию сервера и нажмите на кнопку включения в центре экрана, чтобы подключиться к VPN"]
                })]
            })
        }), x.jsx(Xr, {
            icon: o8,
            title: "Windows",
            delayMs: 120,
            children: x.jsxs("div", {
                className: "flex flex-col gap-2 text-white/80",
                children: [x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "1."
                    }), " Установите приложение Hiddify"]
                }), x.jsx(Xl, {
                    href: "https://hiddify.com/",
                    children: "Скачать Hiddify"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "2."
                    }), " Щелкните правой кнопкой мыши по иконке приложения и выберите пункт «Запуск от имени администратора»"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "3."
                    }), " Выберите регион: Для России — «Россия», для других стран — «Другой»"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "4."
                    }), " Скопируйте ваш ключ из раздела подписки"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "5."
                    }), " На главной странице программы нажмите «Новый профиль» и выберите «Добавить профиль из буфера обмена»"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "6."
                    }), " Нажмите на кнопку подключения по центру и выберите желаемую локацию сервера"]
                })]
            })
        }), x.jsx(Xr, {
            icon: pv,
            title: "MacOS",
            delayMs: 180,
            children: x.jsxs("div", {
                className: "flex flex-col gap-2 text-white/80",
                children: [x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "1."
                    }), " Установите приложение Incy из AppStore"]
                }), x.jsx(Xl, {
                    href: "https://apps.apple.com/ru/app/incy/id6756943388",
                    children: "Скачать Incy"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "2."
                    }), " Скопируйте ваш ключ из раздела подписки"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "3."
                    }), " Откройте приложение и нажмите на кнопку «Вставить» в правом нижнем углу экрана"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "4."
                    }), " Выберите желаемую локацию сервера и нажмите на кнопку включения, чтобы подключиться к VPN"]
                })]
            })
        }), x.jsx(Xr, {
            icon: u8,
            title: "Android TV",
            delayMs: 240,
            children: x.jsxs("div", {
                className: "flex flex-col gap-2 text-white/80",
                children: [x.jsx("div", {
                    className: "font-semibold text-white mb-2",
                    children: "Подготовка:"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "1."
                    }), " Установите приложение v2RayTun на телевизор"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "2."
                    }), " Установите приложение LocalSend на телевизор"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "3."
                    }), " Установите приложение LocalSend на ваш телефон (iOS/Android)"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "4."
                    }), " Подключите телевизор и телефон к одной Wi-Fi сети"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "5."
                    }), " Отключите VPN на телефоне (если включен)"]
                }), x.jsx("div", {
                    className: "font-semibold text-white mt-4 mb-2",
                    children: "Передача ключа:"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "6."
                    }), " Скопируйте ваш ключ из раздела подписки на телефоне"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "7."
                    }), " Откройте LocalSend на телефоне и телевизоре"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "8."
                    }), " На телефоне нажмите «Отправить» → «Сообщение» и вставьте скопированный ключ"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "9."
                    }), " Выберите ваш телевизор из списка устройств и отправьте ключ"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "10."
                    }), " На телевизоре примите входящее сообщение и скопируйте полученный ключ"]
                }), x.jsx("div", {
                    className: "font-semibold text-white mt-4 mb-2",
                    children: "Настройка VPN:"
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "11."
                    }), " Откройте v2RayTun на телевизоре"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "12."
                    }), " Нажмите на значок « + » для добавления конфигурации"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "13."
                    }), " Выберите «Добавить из буфера обмена»"]
                }), x.jsxs("div", {
                    children: [x.jsx("strong", {
                        children: "14."
                    }), " Выберите желаемую локацию сервера и нажмите на кнопку включения, чтобы подключиться к VPN"]
                })]
            })
        })]
    })]
});
function f8({devicesCount: t, limit: a=7}) {
    return x.jsxs("section", {
        className: "flex flex-col items-center",
        children: [x.jsx("h1", {
            className: "motion-text text-xl font-semibold mt-[40px] mb-[23px]",
            children: "УСТРОЙСТВА"
        }), x.jsxs("div", {
            className: "surface-card block-appear w-full min-h-[7rem] rounded-[18px] px-3 py-4 flex flex-col items-center justify-center gap-[17px]",
            children: [x.jsx("h2", {
                className: "motion-text text-[18px] leading-none font-medium whitespace-nowrap",
                children: "Количество устройств"
            }), x.jsx("div", {
                className: "self-center w-[86.97px] h-[35px] rounded-[18px] bg-white/10 flex items-center justify-center",
                children: x.jsxs("span", {
                    className: "text-[18px] leading-[1] font-medium -translate-y-[1px]",
                    children: [t, " / ", a]
                })
            })]
        })]
    })
}
var Tv, Av;
function If() {
    return If = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    If.apply(null, arguments)
}
var d8 = function(a) {
    return A.createElement("svg", If({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none"
    }, a), Tv || (Tv = A.createElement("g", {
        fill: "#fff",
        fillOpacity: .6,
        clipPath: "url(#trash_svg__a)"
    }, A.createElement("path", {
        d: "M18.75 3.125h-5.687a3.125 3.125 0 0 0-6.126 0H1.25a.625.625 0 0 0 0 1.25h17.5a.625.625 0 1 0 0-1.25M10 1.875a1.875 1.875 0 0 1 1.762 1.25H8.238A1.875 1.875 0 0 1 10 1.875m6.488 3.8a.625.625 0 0 0-.682.131.62.62 0 0 0-.181.444.625.625 0 1 0 1.25 0 .66.66 0 0 0-.181-.444.6.6 0 0 0-.206-.13m-.238 2.45a.625.625 0 0 0-.625.625v1.875a.624.624 0 1 0 1.25 0V8.75a.625.625 0 0 0-.625-.625m0 4.375a.625.625 0 0 0-.625.625V17.5a.624.624 0 0 1-.625.625H5a.625.625 0 0 1-.625-.625V6.25a.625.625 0 0 0-1.25 0V17.5A1.875 1.875 0 0 0 5 19.375h10a1.875 1.875 0 0 0 1.875-1.875v-4.375a.624.624 0 0 0-.625-.625"
    }), A.createElement("path", {
        d: "M7.5 15V6.875a.625.625 0 0 0-1.25 0V15a.625.625 0 1 0 1.25 0m3.125 0V6.875a.625.625 0 1 0-1.25 0V15a.625.625 0 1 0 1.25 0m3.125 0V6.875a.625.625 0 1 0-1.25 0V15a.624.624 0 1 0 1.25 0"
    }))), Av || (Av = A.createElement("defs", null, A.createElement("clipPath", {
        id: "trash_svg__a"
    }, A.createElement("path", {
        fill: "#fff",
        d: "M0 0h20v20H0z"
    })))))
};
function h8({device: t, os: a, build: r, date: s, onDelete: o, deleting: c=!1, delayMs: f=0}) {
    return x.jsx("div", {
        className: "surface-card block-appear p-[0.875rem] rounded-[18px] w-full",
        style: {
            animationDelay: `${f}ms`
        },
        children: x.jsxs("div", {
            className: "flex flex-col gap-[12px]",
            children: [x.jsxs("div", {
                className: "flex justify-between items-center",
                children: [x.jsx("h2", {
                    className: "text-[0.938rem] font-semibold",
                    children: t
                }), x.jsx("button", {
                    className: `motion-btn bg-gray-500/40 rounded-[10px] p-[0.313rem] ${c ? "opacity-60 cursor-not-allowed" : ""}`,
                    disabled: c,
                    onClick: o,
                    title: c ? "Удаляем..." : "Удалить устройство",
                    type: "button",
                    children: x.jsx(d8, {
                        className: "w-5 h-5 text-gray-400"
                    })
                })]
            }), x.jsxs("p", {
                className: "text-[0.813rem] font-normal text-white/65",
                children: [a, " - ", r]
            }), x.jsx("p", {
                className: "text-[0.688rem] font-normal text-white/65",
                children: s
            })]
        })
    })
}
const m8 = t => {
    if (!t)
        return "Дата подключения неизвестна";
    const a = new Date(t);
    return Number.isNaN(a.getTime()) ? "Дата подключения неизвестна" : `Добавлено ${a.toLocaleString("ru-RU", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    })}`
}
  , p8 = ({devices: t=[], loading: a=!1, onDelete: r, deletingDeviceId: s=null}) => a ? x.jsx("p", {
    className: "text-center text-white/70 mt-6",
    children: "Загрузка устройств..."
}) : t.length === 0 ? x.jsx("p", {
    className: "text-center text-white/70 mt-6",
    children: "Устройства пока не найдены"
}) : x.jsx("div", {
    className: "max-w-md mx-auto mt-[23px] flex flex-col gap-[15px]",
    children: t.map( (o, c) => {
        const f = o.id != null ? `id-${o.id}` : `fallback-${o.hwid || "no-hwid"}-${o.connection_time || "no-date"}-${c}`
          , h = s !== null && String(s) === String(o.id);
        return x.jsx(h8, {
            device: o.model || o.platform || "Неизвестное устройство",
            os: o.platform || "Unknown OS",
            build: o.user_agent || "Клиент не определен",
            date: m8(o.connection_time),
            deleting: h,
            delayMs: Math.min(c * 45, 540),
            onDelete: () => r?.(o)
        }, f)
    }
    )
});
function g8({devices: t, loading: a, onDelete: r, deletingDeviceId: s}) {
    return x.jsxs("section", {
        className: "mt-[23px]",
        children: [x.jsx("h2", {
            className: "motion-text text-xl font-semibold text-center",
            children: "СПИСОК УСТРОЙСТВ"
        }), x.jsx("div", {
            children: x.jsx(p8, {
                devices: t,
                loading: a,
                onDelete: r,
                deletingDeviceId: s
            })
        })]
    })
}
function y8({message: t, durationMs: a=3500, variant: r="error"}) {
    const [s,o] = A.useState(!1)
      , [c,f] = A.useState(null);
    if (A.useEffect( () => {
        if (!t) {
            o(!1);
            return
        }
        f(t),
        o(!0);
        const m = setTimeout( () => {
            o(!1)
        }
        , a)
          , y = setTimeout( () => {
            f(null)
        }
        , a + 350);
        return () => {
            clearTimeout(m),
            clearTimeout(y)
        }
    }
    , [t, a]),
    !c)
        return null;
    const h = r === "success"
      , p = h ? "translate-y-3 opacity-0" : "-translate-y-3 opacity-0";
    return x.jsx("div", {
        className: "fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2",
        style: {
            top: "calc(3.5rem + var(--safe-area-inset-top) + var(--telegram-header-height))"
        },
        children: x.jsx("div", {
            className: [h ? "rounded-2xl border border-emerald-300/70 bg-emerald-500/25 px-4 py-3 text-center text-sm text-emerald-50 shadow-[0_10px_30px_rgba(20,184,120,0.28)] backdrop-blur-md" : "rounded-2xl border border-red-400/70 bg-red-500/20 px-4 py-3 text-center text-sm text-red-100 shadow-[0_10px_30px_rgba(220,38,38,0.22)] backdrop-blur-md", "transition-all duration-320 ease-out will-change-transform will-change-opacity", s ? "translate-y-0 opacity-100" : p].join(" "),
            children: c
        })
    })
}
function v8() {
    const {loading: t, error: a, isTelegram: r, profile: s} = bs()
      , [o,c] = A.useState([])
      , [f,h] = A.useState(!1)
      , [p,m] = A.useState({
        message: null,
        variant: "error"
    })
      , [y,v] = A.useState(null)
      , S = 3500
      , T = D => {
        if (!Number.isFinite(D))
            return null;
        const N = Math.max(0, Math.round(D))
          , V = Math.floor(N / 86400)
          , R = Math.floor(N % 86400 / 3600)
          , U = Math.floor(N % 3600 / 60)
          , Y = [];
        return V > 0 && Y.push(`${V} д`),
        R > 0 && Y.push(`${R} ч`),
        (U > 0 || Y.length === 0) && Y.push(`${U} мин`),
        Y.join(" ")
    }
    ;
    A.useEffect( () => {
        !t && !a && r && (async () => {
            try {
                h(!0),
                m({
                    message: null,
                    variant: "error"
                });
                const N = await ln.getDevices();
                c(N || [])
            } catch (N) {
                if (N instanceof on) {
                    m({
                        message: "Сессия устарела, обновите Mini App",
                        variant: "error"
                    });
                    return
                }
                m({
                    message: "Не удалось загрузить устройства",
                    variant: "error"
                })
            } finally {
                h(!1)
            }
        }
        )()
    }
    , [t, a, r]);
    const M = async D => {
        if (!D?.id) {
            m({
                message: "Не удалось удалить устройство: отсутствует id",
                variant: "error"
            });
            return
        }
        try {
            v(D.id),
            m({
                message: null,
                variant: "error"
            }),
            await ln.deleteDevice(D.id);
            const N = String(D.id);
            c(V => V.filter(R => !(String(R.id) === N || D.hwid && R.hwid && R.hwid === D.hwid)));
            try {
                const V = await ln.getDevices();
                c(V || [])
            } catch (V) {
                if (V instanceof on) {
                    m({
                        message: "Сессия устарела, обновите Mini App",
                        variant: "error"
                    });
                    return
                }
            }
            m({
                message: "Устройство было успешно удалено, удалите подписку из приложения",
                variant: "success"
            })
        } catch (N) {
            if (N instanceof on) {
                m({
                    message: "Сессия устарела, обновите Mini App",
                    variant: "error"
                });
                return
            }
            if (N instanceof a2) {
                const V = T(N.retryAfterSec)
                  , R = V ? `Удалять устройства можно не чаще 1 раза в сутки. Повторите через ${V}.` : "Удалять устройства можно не чаще 1 раза в сутки.";
                m({
                    message: R,
                    variant: "error"
                });
                return
            }
            m({
                message: "Не удалось удалить устройство",
                variant: "error"
            })
        } finally {
            v(null)
        }
    }
    ;
    return x.jsxs(x.Fragment, {
        children: [x.jsx(y8, {
            message: p.message,
            variant: p.variant,
            durationMs: S
        }), x.jsx(f8, {
            devicesCount: o.length,
            limit: 7 + (s?.extra_device_slots ?? 0)
        }), x.jsx(g8, {
            devices: o,
            loading: f,
            onDelete: M,
            deletingDeviceId: y
        }), x.jsx("p", {
            className: "motion-text text-center mt-5 text-[0.938rem] font-normal text-[#ECECEC]",
            children: "Новые устройства добавляются автоматически при первом подключении"
        })]
    })
}
function b8() {
    const t = gn()
      , a = nw();
    return x.jsx(k1, {
        mode: "wait",
        initial: !1,
        children: x.jsx(pn.div, {
            initial: a ? {
                opacity: 1,
                y: 0
            } : {
                opacity: 0,
                y: 8
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: a ? {
                opacity: 1,
                y: 0
            } : {
                opacity: 0,
                y: -6
            },
            transition: a ? {
                duration: 0
            } : {
                duration: .2,
                ease: [.2, .75, .2, 1]
            },
            children: x.jsxs(VT, {
                location: t,
                children: [x.jsx(Mi, {
                    path: "/",
                    element: x.jsx(i8, {})
                }), x.jsx(Mi, {
                    path: "/servers",
                    element: x.jsx(s8, {})
                }), x.jsx(Mi, {
                    path: "/instruction",
                    element: x.jsx(c8, {})
                }), x.jsx(Mi, {
                    path: "/devices",
                    element: x.jsx(v8, {})
                }), x.jsx(Mi, {
                    path: "*",
                    element: x.jsx("div", {
                        className: "p-6 text-center text-red-500 text-xl",
                        children: "�������� �� �������"
                    })
                })]
            })
        }, t.pathname)
    })
}
var Ev, wv;
function Wf() {
    return Wf = Object.assign ? Object.assign.bind() : function(t) {
        for (var a = 1; a < arguments.length; a++) {
            var r = arguments[a];
            for (var s in r)
                ({}).hasOwnProperty.call(r, s) && (t[s] = r[s])
        }
        return t
    }
    ,
    Wf.apply(null, arguments)
}
var x8 = function(a) {
    return A.createElement("svg", Wf({
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: 15,
        height: 15,
        fill: "none"
    }, a), Ev || (Ev = A.createElement("path", {
        fill: "url(#support_svg__a)",
        d: "M0 0h14.216v14.216H0z"
    })), wv || (wv = A.createElement("defs", null, A.createElement("pattern", {
        id: "support_svg__a",
        width: 1,
        height: 1,
        patternContentUnits: "objectBoundingBox"
    }, A.createElement("use", {
        xlinkHref: "#support_svg__b",
        transform: "scale(.01)"
    })), A.createElement("image", {
        xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAC5xJREFUeF7tXQnwdtUcfh5bsq8NSqWkkKWytIkWFFGjRNMnopppKl9NliE7laXBV4NBxRjRiGnIkpDQhkIy2QplZ4ylRLbHff5zbnN6v/f/v+e959zl7Xt/M+98y73nnN/5Pfdsv+0QCxqVBDgqbhbMYAHIyD6CBSALQNpJQNKDAWwDYDMADwm/jQDcE8CdAawP4B4ABOBAkp9s19KwpUY7QiRtAuDZAHYKPws/lf4zr6CMChBJDwTwfAAHAHgikLXGzSUoowBE0hYAjgJweJh+UkdC03v/BXAwyY81vTiW54MCIsnrwckA9s0cDU3y/DuAv4bfLwFcA+AnAL4N4HKS/2qqoK/ngwAiyQvwK8PPC/KQ9E8AlwL4lH8kfzckM70DIukRAM4G4D/HRv8DcG61W3snya8PwVyvgEh6AYD3AbjrEJ2dsc2LABxD8ooZy2W93hsgkl5XrRNvzOK2/8IeMR8AcBzJm/povnNAJLmNtwN4WR8d6qiNqwE8j+QPOqr/lmr7AOREAK/quiM91P83APuQvLDLtjoFRNIhAM7osgM91+0d2X4kP99Vu50BImlnABcAuGNXzA9Ur880TyF5eRftdwKIpLsDuDIoALvge+g6fVbZposzS1eAnAbgJUNLreP2zwewJ0lrl4tRcUAkWTvrPfy6QIeT/GDJjnYBiMEwKOsC/RHAFiStJytCRQGRtB+AuTQMZUjzBJKvySh/q6KlAbks2DFK8TcP9dwAYCOSPqdkUzFAJG0ftKbZTM1hBUeRfE8JvksC8hEAVh6ui3QVyUeX6HgRQCTZpvH74GRQgq95rOPhJH+Uy3gpQGzxOyeXmTkvfzxJ6+2yqBQgHwLwoixO5r/whSR3ze1GKUB+DmDTXGbmvPw/ANwr1z6fDUhwYLt+xMK0YWl15eBwbA9m4+1JfjNHFiUA2T/YyHP46KqsR+5zbYYNH87FAOwB2RUdRtJ6vNZUApAxmmat8LMd5liSPrgtkaStAJwHwF6RXdDJJF+eU3EJQM6yeTOHicJlvxOcE74xrd7gHflZANsWbtfVnUvS7q+tqQQgnjOf0JqDcgV/COAtAM4iaeeEZUnS3QD4ZH1wueaXarqC5ONy6iwByM8GNETZVdRTkFXg/jpXBGJSUJIOBPBe745yhBiVvY5k1m6zBCA3DuBnZXdQrxGnk/TfW5OkBwSvmFUF3FlvIpnlc1YCkKIWsxUk+30Anvs/Y5/cWUdDE2LBsOaT9i5N7670nGSWTLMKmzFJXQHyi2B59Fb1PJL+d+ck6akAXlG1vUebxm4rgPhg6RFwVRWk413SJSR/00YgpcpIsvb2UAf+ALhfar3zBIi9UK6rdF7+0v1n/buG5F9SO9z3e5LuBOAZqcrTuQEkl9G+gZiyI6unZu/kPh58fq8saU93m72tIbcRQP7s0ULSpupOaAFIolglOWZxp1zlYVNzC0CaJBSeSzqD5IsTX2/92gKQRNFJejxJxyQukSQv9I4d2XCiCvv+Omzho34+q31kAUg6IOuTtBGqBsQagqbY+e9VQaV7k/x1YjOLRT1VUCvsupqq+G51sLXhKinSdzFCmsS5zPMZNRTJflsLQPoB5DKSO6Q0lQWIpM1DEH5jW/N+DsmYslz0BpJOjNNIrQEJwZxW/KUhn6kFbexJzy/MOGUh9YPMAcTa0C+lyiGVodT6hn5vjIDYSmdtaE223Nl6+BwANvrEdD3JrhwLBsFmjIBYXf6oSBpPJ3m+pNsDeJLdbwDsBcDKuKNJfmEQyXXU6BgBsaIttkVvOLQNoyPZT612jID8u/LyuEPE7Xqph58+BddVW2ME5E8A7hN1eAOSjrlbJ2iMgNjU6qSUNe1P0jmn1gkaIyDvDk7MNQCXeDEv7Q0yVnRnBKSXg+F2To83IbC3krwtJJpp/A5mBOTSage6Y2OluSZcSd7K7jnRkDOyOR2T3SpvUVenMDNP78wIyJEk7SHZSK1P6q455Na1evney7T0q6B6TrYHNHI8khdmAMRr7Q6pO9AsQAIo1mV9EYATzkyj1SRPGYkci7EhKcVAZTCeNcv5LBuQAMqWAJwbd5qL/9UkH1lMEiOpKJhw3z/FamhfZzv82YR7WurIqLtVBJAAyu0qW7KjqewI4OBHO5jV5PxSXxuJLFuxIWnTae6sk1NXrhK1GCBxLyU5S/Wp0f85ZsMumXNJkvyx+at3luxbZSmdF0B8Y4EX8to13/bkjUk6ucDckSTvJL2j/G1wWvDa4E2NE0LH2UpvJLncWprU705GSGD29DB91YwUCaxP6lXhlyQ5DOKZodqbnZGb5BpJ9jqJ41OuJfnQnOa7BMRhbnGIsJ2rNyfpqKe5oWCmdp54T1s1rSJ5piSbF+KEmBeTdK7J1tQZIGGUTOq79iX56dbcDlBQ0hoAL42a9rS7SaWRuLnyjJ9MgXsqyfjdmTnuGhDvuDx11eTIpzEEiCYJSpLjQhw+EYepLSUsCwv9tRMZLOwU97mkypd5qWtA1gtm3QdF7TtxpA+So6dqB/X6isk3RIza4XozxzVKskX0E9EzL+42QdiVtDV1CkiYthwe9raIw4tI2sQ7apJ0lxBUFEdPnUlylSSPGLuJxgv4mirw6JjcTvUBiLfADlmL/ZJ2I/nVXOa7LC/JGRmsJK3Ju6utfDi0J3wFlrN2x8+8YcnW2XUOSBgl7liccuICkrvnCFSSp0NfkXRQlXhz6ymh2Z5C7IXuBAH+spN3d5LuX9X703ADXM3mKSRXSzoBwKsneD+R5PE5/anL9gWI1xAvgPFtOk9ue2mKJIcAePF8TKIQfIOOI5+SYhklWVV+RFS39VP2sPF1G5PZH74FYOcKEPsYZFMvgIRR4nXE60lNDgLdbpYvN9TjkeHzTSoYdXv2stylyaIpyYpQrw+xA4fjQjxqJrM0OOW4wfDHVoT6BMQuQ76M674R58le4XUZSd7n+2zQhg5qurFtGaPbtLa8Xuxe6eh+3IaR5cr0Bkj4ur0LeVfEjH27tpzFW6U6HY8h2Y0PvAeUHBm9riHR122VvLP2+Lq8mmwzOCz1K5Pk/FfO5jME+RxyEoA3l1ozJjvR6wgJo8S5tZxjqya7mnoe9sLbSAMB4o/AW12fNZylrjPqHZAAik/qT4t65S3mtiS9m1mRKlV4X+nMvVDbYcPnJWccLZJKvKl/QwHi255t8Il1RE61FHvTT+Vd0tGVx2RbG/1ai7okm59tdIp58fZ46xIHvSYABp+yagamWBX96FCSsTJyrf6EA6FHyWNn7Oxa296Qx8RT5aQvwCFVIrIPz1h/kdcHGSFh2nLbzn21d9QTqyd2bVpPwsHQ00nsyrqSQCz0veK8JCECzAmgXzhRcElfVUS6LSoZDJAAig9b3kLG8d524vYBzncHLkvh6/buzKoTn6Ind15WnXha9Kl7LdVJpT5/E4DXTjTgw+qOfV0iOa1zgwISQHHSSN87a/t0TXaw86HLlrriJMl6JyfMjOkPTuZJ0pbNwWhwQAIovtTefl0xPxaQp5klh4ISFKYpKwcn/Y89Ve5BcvC7s0YBSADlyOA6FPPkaecIkr6bJIskWf3vevaZqMhKQYdSeD0bnEYDSADluGr7+Y4pTuA+SDpLdau7zoMbj70MN54Chh0WYsvfoKCMCpAAiq+9cJadyRtCfROane9sl0iK1AqZRr1e2Dtkknz6dl74UZmTRwdIAGW3kEZvgymCtNPdl4M9xOuLQ7GtpLRa3ppkG6vsAG63Vh/6ppHL+E5bq9lHRaMEJIDiLbFvGsjKpT5F2mfb0phqrOobrdECEkAxf74b0Tujh2UKx3Es9jhMzj6R2V6r4qMGpO6RJFvv7KxtXZc9VlL5tibZADjrxDlN1sJWEixcKLVjhZttX50k21K8xjhmz2ZcrzNeO5zG1ad8exZ6bbDu6iu5ueHbc9qu5NwB0q6b81NqAcjIsFoAsgBkZBIYGTv/B7lU4JLejOFmAAAAAElFTkSuQmCC",
        id: "support_svg__b",
        width: 100,
        height: 100,
        preserveAspectRatio: "none"
    }))))
};
const S8 = ({onClick: t}) => x.jsxs("button", {
    onClick: t,
    className: "motion-fade-up motion-btn flex items-center h-7 px-2 gap-1 ml-auto bg-block border border-white/60 rounded-[999px] text-support text-white text-sm",
    children: [x.jsx(x8, {}), x.jsx("span", {
        className: "leading-none",
        children: "Тех поддержка"
    })]
})
  , l2 = () => x.jsxs("header", {
    className: "motion-fade-down flex items-center justify-between mb-[-5px]",
    children: [x.jsxs("div", {
        className: "relative flex items-center gap-1",
        children: [x.jsx("img", {
            src: "/image-Photoroom%20(2).png",
            alt: "BravaVLESS logo",
            className: "w-6 h-6 object-contain"
        }), x.jsxs("h1", {
            className: "motion-text text-white font-semibold text-[23px] leading-none font-['Exo_2']",
            children: ["Brava", x.jsx("span", {
                className: "text-brand font-semibold",
                children: "VLESS"
            })]
        })]
    }), x.jsx(S8, {
        onClick: () => window.location.href = "https://t.me/bravasupport_bot"
    })]
})
  , ed = () => x.jsxs("div", {
    className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[linear-gradient(170deg,#020714_0%,#061226_35%,#0A1F3F_65%,#0D305C_100%)]",
    children: [x.jsx("div", {
        className: "absolute top-0 left-0 w-64 h-64 bg-blue-400/10 rounded-full blur-[70px]"
    }), x.jsx("div", {
        className: "absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-[75px]"
    }), x.jsxs("div", {
        className: "relative z-10 flex flex-col items-center",
        children: [x.jsx("div", {
            className: "relative",
            children: x.jsx(pn.div, {
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 1,
                    repeat: 1 / 0,
                    ease: "linear"
                },
                className: "w-12 h-12 border-4 border-white/10 border-t-brand rounded-full will-change-transform"
            })
        }), x.jsxs(pn.div, {
            initial: {
                opacity: 0,
                y: 10
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: .2
            },
            className: "mt-8 flex flex-col items-center gap-2",
            children: [x.jsxs("h1", {
                className: "text-3xl font-['Exo_2'] font-semibold text-white tracking-wider drop-shadow-lg",
                children: ["Brava", x.jsx("span", {
                    className: "text-brand font-semibold",
                    children: "VLESS"
                })]
            }), x.jsx(pn.div, {
                animate: {
                    opacity: [.5, 1, .5]
                },
                transition: {
                    duration: 1.5,
                    repeat: 1 / 0
                },
                className: "text-sm font-medium text-white/80",
                children: "Полет через туннель..."
            })]
        })]
    })]
})
  , T8 = () => {
    const t = () => {
        window.open("https://t.me/bravavless_bot", "_blank")
    }
    ;
    return x.jsxs("div", {
        className: "fixed inset-0 z-50 flex flex-col bg-[linear-gradient(170deg,#020714_0%,#061226_35%,#0A1F3F_65%,#0D305C_100%)] px-7 py-6",
        children: [x.jsx(l2, {}), x.jsx("div", {
            className: "absolute top-0 left-0 w-64 h-64 bg-sky-400/10 rounded-full blur-[80px]"
        }), x.jsx("div", {
            className: "absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-[90px]"
        }), x.jsx(pn.h1, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                delay: .2,
                duration: .5
            },
            className: "relative z-10 text-title-hero uppercase text-center mt-[30px] mb-[38px]",
            children: "УПС... ПОХОЖЕ НЕ ТУДА..."
        }), x.jsxs("div", {
            className: "relative z-10 flex flex-col items-center pt-50 px-6 text-center",
            children: [x.jsxs(pn.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: .4,
                    duration: .5
                },
                className: "flex flex-col items-center gap-4",
                children: [x.jsx("p", {
                    className: "text-lg font-medium text-white/90",
                    children: "Похоже вы зашли через браузер"
                }), x.jsx("p", {
                    className: "text-sm text-white/70 max-w-xs",
                    children: 'Чтобы открыть приложение, зайдите через бота, нажав на кнопку "Подписка"'
                })]
            }), x.jsx(pn.button, {
                initial: {
                    opacity: 0,
                    scale: .9
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: .6,
                    duration: .5
                },
                whileHover: {
                    scale: 1.02
                },
                whileTap: {
                    scale: .98
                },
                onClick: t,
                className: "mt-10 px-12 py-4 bg-sky-500 hover:bg-sky-500/90 text-white font-semibold text-lg rounded-[999px] shadow-lg shadow-sky-900/30 transition-colors",
                children: "Перейти в бота"
            })]
        })]
    })
}
  , A8 = () => {
    const {retryAuth: t, loading: a} = bs()
      , [r,s] = A.useState(!1)
      , [o,c] = A.useState(!1);
    A.useEffect( () => {
        const m = setTimeout(async () => {
            if (t && !r) {
                s(!0);
                try {
                    await t(),
                    c(!1)
                } catch (y) {
                    setTimeout( () => {
                        y && y.message && !y.message.includes("not available") && c(!0)
                    }
                    , 3e3)
                } finally {
                    s(!1)
                }
            }
        }
        , 1e3);
        return () => clearTimeout(m)
    }
    , [t]);
    const f = async () => {
        if (!r) {
            s(!0),
            c(!1);
            try {
                t ? await t() : window.location.reload()
            } catch {
                c(!0)
            } finally {
                s(!1)
            }
        }
    }
      , h = () => {
        window.Telegram?.WebApp ? window.Telegram.WebApp.openTelegramLink("https://t.me/bravavless_bot/?startapp") : window.location.href = "https://t.me/bravavless_bot/?startapp"
    }
    ;
    return r || a ? x.jsx(ed, {}) : o ? x.jsx("div", {
        className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[linear-gradient(170deg,#020714_0%,#061226_35%,#0A1F3F_65%,#0D305C_100%)] px-6",
        style: {
            paddingTop: "calc(1.5rem + var(--safe-area-inset-top) + var(--telegram-header-height))",
            paddingBottom: "calc(8.75rem + var(--safe-area-inset-bottom))",
            paddingLeft: "calc(1.75rem + var(--safe-area-inset-left))",
            paddingRight: "calc(1.75rem + var(--safe-area-inset-right))"
        },
        children: x.jsxs("div", {
            className: "flex flex-col items-center text-center max-w-sm",
            children: [x.jsx("p", {
                className: "text-lg font-medium text-white/90 mb-4",
                children: "Не удалось авторизоваться"
            }), x.jsxs("div", {
                className: "flex flex-col gap-3 w-full",
                children: [x.jsx("button", {
                    onClick: f,
                    className: "px-6 py-3 bg-brand hover:bg-brand/90 text-white font-medium rounded-[999px] transition-colors",
                    children: "Попробовать снова"
                }), x.jsx("button", {
                    onClick: h,
                    className: "px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-[999px] transition-colors",
                    children: "Открыть заново"
                })]
            })]
        })
    }) : x.jsx(ed, {})
}
  , E8 = ({children: t}) => {
    const [a,r] = A.useState(!1);
    return A.useEffect( () => {
        const s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768 && window.innerHeight <= 1024
          , o = T => (T.preventDefault(),
        T.stopPropagation(),
        !1)
          , c = T => {
            if (!s && (T.keyCode === 123 || T.ctrlKey && T.shiftKey && T.keyCode === 73 || T.ctrlKey && T.shiftKey && T.keyCode === 74 || T.ctrlKey && T.keyCode === 85 || T.ctrlKey && T.shiftKey && T.keyCode === 67 || T.ctrlKey && T.shiftKey && T.keyCode === 75 || T.ctrlKey && T.shiftKey && T.keyCode === 69))
                return T.preventDefault(),
                T.stopPropagation(),
                !1
        }
          , f = T => (T.preventDefault(),
        T.stopPropagation(),
        !1)
          , h = T => (T.preventDefault(),
        T.stopPropagation(),
        !1);
        let p = null
          , m = null
          , y = null
          , v = window.innerWidth
          , S = window.innerHeight;
        if (!s) {
            y = () => {
                const D = window.innerWidth
                  , N = window.innerHeight
                  , V = Math.abs(D - v)
                  , R = Math.abs(N - S);
                (V > 100 || R > 100) && r(!0),
                v = D,
                S = N
            }
            ;
            const T = () => {
                const D = {
                    open: !1
                }
                  , N = 160;
                return setInterval( () => {
                    window.outerHeight - window.innerHeight > N || window.outerWidth - window.innerWidth > N ? D.open || (D.open = !0,
                    r(!0)) : D.open && (D.open = !1,
                    r(!1))
                }
                , 500)
            }
            ;
            let M = new Image;
            Object.defineProperty(M, "id", {
                get: function() {
                    return r(!0),
                    ""
                }
            }),
            p = setInterval( () => {
                y && y()
            }
            , 1e3),
            window.addEventListener("resize", y),
            m = T()
        }
        return document.addEventListener("contextmenu", o),
        document.addEventListener("keydown", c),
        document.addEventListener("selectstart", f),
        document.addEventListener("dragstart", h),
        document.body.style.userSelect = "none",
        document.body.style.webkitUserSelect = "none",
        document.body.style.mozUserSelect = "none",
        document.body.style.msUserSelect = "none",
        () => {
            p && clearInterval(p),
            m && clearInterval(m),
            document.removeEventListener("contextmenu", o),
            document.removeEventListener("keydown", c),
            document.removeEventListener("selectstart", f),
            document.removeEventListener("dragstart", h),
            !s && y && window.removeEventListener("resize", y),
            document.body.style.userSelect = "",
            document.body.style.webkitUserSelect = "",
            document.body.style.mozUserSelect = "",
            document.body.style.msUserSelect = ""
        }
    }
    , []),
    x.jsxs(x.Fragment, {
        children: [a && x.jsx("div", {
            className: "fixed inset-0 z-[9999] flex items-center justify-center bg-[linear-gradient(170deg,#020714_0%,#061226_35%,#0A1F3F_65%,#0D305C_100%)] pointer-events-auto",
            children: x.jsxs("div", {
                className: "text-center px-8",
                children: [x.jsx("div", {
                    className: "mb-6",
                    children: x.jsx("svg", {
                        className: "mx-auto w-24 h-24 text-red-500",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: x.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        })
                    })
                }), x.jsx("h1", {
                    className: "text-3xl font-bold text-white mb-4",
                    children: "Закройте DevTools"
                }), x.jsx("p", {
                    className: "text-lg text-gray-300 mb-2",
                    children: "Инструменты разработчика обнаружены"
                }), x.jsx("p", {
                    className: "text-sm text-gray-400",
                    children: "Пожалуйста, закройте DevTools для продолжения работы"
                })]
            })
        }), x.jsx("div", {
            style: {
                pointerEvents: a ? "none" : "auto"
            },
            children: t
        })]
    })
}
;
function w8() {
    const {loading: t, isTelegram: a, error: r} = bs()
      , [s,o] = A.useState(!0);
    hs(),
    A.useEffect( () => {
        const f = setTimeout( () => {
            t || o(!1)
        }
        , 2e3);
        return () => clearTimeout(f)
    }
    , [t]),
    A.useEffect( () => {
        !t && !s && o(!1)
    }
    , [t, s]);
    const c = s || t;
    return !a && r === "NOT_TELEGRAM" ? x.jsx(T8, {}) : r === "SESSION_EXPIRED" ? x.jsx(A8, {}) : x.jsxs(x.Fragment, {
        children: [c && x.jsx(ed, {}), x.jsxs("div", {
            className: "flex flex-col pb-35 w-full min-h-screen bg-[linear-gradient(170deg,#020714_0%,#061226_35%,#0A1F3F_65%,#0D305C_100%)] px-7",
            style: {
                paddingTop: "calc(1.5rem + var(--safe-area-inset-top) + var(--telegram-header-height))",
                paddingBottom: "calc(8.75rem + var(--safe-area-inset-bottom))",
                paddingLeft: "calc(1.75rem + var(--safe-area-inset-left))",
                paddingRight: "calc(1.75rem + var(--safe-area-inset-right))"
            },
            children: [x.jsx(l2, {}), x.jsx(b8, {}), !c && x.jsx(T3, {})]
        })]
    })
}
function _8() {
    return x.jsx(E8, {
        children: x.jsx(ID, {
            children: x.jsx(w8, {})
        })
    })
}
ZS.createRoot(document.getElementById("root")).render(x.jsx(A.StrictMode, {
    children: x.jsx(o3, {
        children: x.jsx(_8, {})
    })
}));
