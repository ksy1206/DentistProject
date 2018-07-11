! function(e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}([function(e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var i = r(32),
        o = n(i),
        a = r(58),
        s = n(a),
        u = r(87),
        h = n(u);
    s["default"].render(o["default"].createElement(h["default"], null), document.getElementById("react-app"))
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n, i, o, a, s) {
        if (!e) {
            var u;
            if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var h = [r, n, i, o, a, s],
                    c = 0;
                u = new Error(t.replace(/%s/g, function() {
                    return h[c++]
                })), u.name = "Invariant Violation"
            }
            throw u.framesToPop = 1, u
        }
    }
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(9),
        i = n;
    e.exports = i
}, function(e, t) {
    "use strict";

    function r(e, t) {
        if (null == e) throw new TypeError("Object.assign target cannot be null or undefined");
        for (var r = Object(e), n = Object.prototype.hasOwnProperty, i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            if (null != o) {
                var a = Object(o);
                for (var s in a) n.call(a, s) && (r[s] = a[s])
            }
        }
        return r
    }
    e.exports = r
}, function(e, t) {
    "use strict";
    var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
        n = {
            canUseDOM: r,
            canUseWorkers: "undefined" != typeof Worker,
            canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
            canUseViewport: r && !!window.screen,
            isInWorker: !r
        };
    e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        for (var r = Math.min(e.length, t.length), n = 0; r > n; n++)
            if (e.charAt(n) !== t.charAt(n)) return n;
        return e.length === t.length ? -1 : r
    }

    function i(e) {
        return e ? e.nodeType === z ? e.documentElement : e.firstChild : null
    }

    function o(e) {
        var t = i(e);
        return t && Z.getID(t)
    }

    function a(e) {
        var t = s(e);
        if (t)
            if (V.hasOwnProperty(t)) {
                var r = V[t];
                r !== e && (l(r, t) ? U(!1) : void 0, V[t] = e)
            } else V[t] = e;
        return t
    }

    function s(e) {
        return e && e.getAttribute && e.getAttribute(B) || ""
    }

    function u(e, t) {
        var r = s(e);
        r !== t && delete V[r], e.setAttribute(B, t), V[t] = e
    }

    function h(e) {
        return V.hasOwnProperty(e) && l(V[e], e) || (V[e] = Z.findReactNodeByID(e)), V[e]
    }

    function c(e) {
        var t = C.get(e)._rootNodeID;
        return E.isNullComponentID(t) ? null : (V.hasOwnProperty(t) && l(V[t], t) || (V[t] = Z.findReactNodeByID(t)), V[t])
    }

    function l(e, t) {
        if (e) {
            s(e) !== t ? U(!1) : void 0;
            var r = Z.findReactContainerForID(t);
            if (r && k(r, e)) return !0
        }
        return !1
    }

    function p(e) {
        delete V[e]
    }

    function d(e) {
        var t = V[e];
        return t && l(t, e) ? void(Y = t) : !1
    }

    function f(e) {
        Y = null, S.traverseAncestors(e, d);
        var t = Y;
        return Y = null, t
    }

    function m(e, t, r, n, i, o) {
        w.useCreateElement && (o = R({}, o), r.nodeType === z ? o[j] = r : o[j] = r.ownerDocument);
        var a = P.mountComponent(e, t, n, o);
        e._renderedComponent._topLevelWrapper = e, Z._mountImageIntoNode(a, r, i, n)
    }

    function v(e, t, r, n, i) {
        var o = D.ReactReconcileTransaction.getPooled(n);
        o.perform(m, null, e, t, r, o, n, i), D.ReactReconcileTransaction.release(o)
    }

    function g(e, t) {
        for (P.unmountComponent(e), t.nodeType === z && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
    }

    function y(e) {
        var t = o(e);
        return t ? t !== S.getReactRootIDFromNodeID(t) : !1
    }

    function x(e) {
        for (; e && e.parentNode !== e; e = e.parentNode)
            if (1 === e.nodeType) {
                var t = s(e);
                if (t) {
                    var r, n = S.getReactRootIDFromNodeID(t),
                        i = e;
                    do
                        if (r = s(i), i = i.parentNode, null == i) return null; while (r !== n);
                    if (i === X[n]) return e
                }
            }
        return null
    }
    var b = r(16),
        M = r(24),
        w = (r(11), r(66)),
        _ = r(6),
        E = r(73),
        S = r(17),
        C = r(21),
        T = r(76),
        A = r(7),
        P = r(14),
        L = r(39),
        D = r(8),
        R = r(3),
        O = r(18),
        k = r(53),
        N = r(46),
        U = r(1),
        I = r(31),
        F = r(49),
        B = (r(51), r(2), b.ID_ATTRIBUTE_NAME),
        V = {},
        G = 1,
        z = 9,
        H = 11,
        j = "__ReactMount_ownerDocument$" + Math.random().toString(36).slice(2),
        W = {},
        X = {},
        q = [],
        Y = null,
        K = function() {};
    K.prototype.isReactComponent = {}, K.prototype.render = function() {
        return this.props
    };
    var Z = {
        TopLevelWrapper: K,
        _instancesByReactRootID: W,
        scrollMonitor: function(e, t) {
            t()
        },
        _updateRootComponent: function(e, t, r, n) {
            return Z.scrollMonitor(r, function() {
                L.enqueueElementInternal(e, t), n && L.enqueueCallbackInternal(e, n)
            }), e
        },
        _registerComponent: function(e, t) {
            !t || t.nodeType !== G && t.nodeType !== z && t.nodeType !== H ? U(!1) : void 0, M.ensureScrollValueMonitoring();
            var r = Z.registerContainer(t);
            return W[r] = e, r
        },
        _renderNewRootComponent: function(e, t, r, n) {
            var i = N(e, null),
                o = Z._registerComponent(i, t);
            return D.batchedUpdates(v, i, o, t, r, n), i
        },
        renderSubtreeIntoContainer: function(e, t, r, n) {
            return null == e || null == e._reactInternalInstance ? U(!1) : void 0, Z._renderSubtreeIntoContainer(e, t, r, n)
        },
        _renderSubtreeIntoContainer: function(e, t, r, n) {
            _.isValidElement(t) ? void 0 : U(!1);
            var a = new _(K, null, null, null, null, null, t),
                u = W[o(r)];
            if (u) {
                var h = u._currentElement,
                    c = h.props;
                if (F(c, t)) {
                    var l = u._renderedComponent.getPublicInstance(),
                        p = n && function() {
                            n.call(l)
                        };
                    return Z._updateRootComponent(u, a, r, p), l
                }
                Z.unmountComponentAtNode(r)
            }
            var d = i(r),
                f = d && !!s(d),
                m = y(r),
                v = f && !u && !m,
                g = Z._renderNewRootComponent(a, r, v, null != e ? e._reactInternalInstance._processChildContext(e._reactInternalInstance._context) : O)._renderedComponent.getPublicInstance();
            return n && n.call(g), g
        },
        render: function(e, t, r) {
            return Z._renderSubtreeIntoContainer(null, e, t, r)
        },
        registerContainer: function(e) {
            var t = o(e);
            return t && (t = S.getReactRootIDFromNodeID(t)), t || (t = S.createReactRootID()), X[t] = e, t
        },
        unmountComponentAtNode: function(e) {
            !e || e.nodeType !== G && e.nodeType !== z && e.nodeType !== H ? U(!1) : void 0;
            var t = o(e),
                r = W[t];
            if (!r) {
                var n = (y(e), s(e));
                return n && n === S.getReactRootIDFromNodeID(n), !1
            }
            return D.batchedUpdates(g, r, e), delete W[t], delete X[t], !0
        },
        findReactContainerForID: function(e) {
            var t = S.getReactRootIDFromNodeID(e),
                r = X[t];
            return r
        },
        findReactNodeByID: function(e) {
            var t = Z.findReactContainerForID(e);
            return Z.findComponentRoot(t, e)
        },
        getFirstReactDOM: function(e) {
            return x(e)
        },
        findComponentRoot: function(e, t) {
            var r = q,
                n = 0,
                i = f(t) || e;
            for (r[0] = i.firstChild, r.length = 1; n < r.length;) {
                for (var o, a = r[n++]; a;) {
                    var s = Z.getID(a);
                    s ? t === s ? o = a : S.isAncestorIDOf(s, t) && (r.length = n = 0, r.push(a.firstChild)) : r.push(a.firstChild), a = a.nextSibling
                }
                if (o) return r.length = 0, o
            }
            r.length = 0, U(!1)
        },
        _mountImageIntoNode: function(e, t, r, o) {
            if (!t || t.nodeType !== G && t.nodeType !== z && t.nodeType !== H ? U(!1) : void 0, r) {
                var a = i(t);
                if (T.canReuseMarkup(e, a)) return;
                var s = a.getAttribute(T.CHECKSUM_ATTR_NAME);
                a.removeAttribute(T.CHECKSUM_ATTR_NAME);
                var u = a.outerHTML;
                a.setAttribute(T.CHECKSUM_ATTR_NAME, s);
                var h = e,
                    c = n(h, u);
                " (client) " + h.substring(c - 20, c + 20) + "\n (server) " + u.substring(c - 20, c + 20), t.nodeType === z ? U(!1) : void 0
            }
            if (t.nodeType === z ? U(!1) : void 0, o.useCreateElement) {
                for (; t.lastChild;) t.removeChild(t.lastChild);
                t.appendChild(e)
            } else I(t, e)
        },
        ownerDocumentContextKey: j,
        getReactRootID: o,
        getID: a,
        setID: u,
        getNode: h,
        getNodeFromInstance: c,
        isValid: l,
        purgeID: p
    };
    A.measureMethods(Z, "ReactMount", {
        _renderNewRootComponent: "_renderNewRootComponent",
        _mountImageIntoNode: "_mountImageIntoNode"
    }), e.exports = Z
}, function(e, t, r) {
    "use strict";
    var n = r(11),
        i = r(3),
        o = (r(29), "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103),
        a = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        },
        s = function(e, t, r, n, i, a, s) {
            var u = {
                $$typeof: o,
                type: e,
                key: t,
                ref: r,
                props: s,
                _owner: a
            };
            return u
        };
    s.createElement = function(e, t, r) {
        var i, o = {},
            u = null,
            h = null,
            c = null,
            l = null;
        if (null != t) {
            h = void 0 === t.ref ? null : t.ref, u = void 0 === t.key ? null : "" + t.key, c = void 0 === t.__self ? null : t.__self, l = void 0 === t.__source ? null : t.__source;
            for (i in t) t.hasOwnProperty(i) && !a.hasOwnProperty(i) && (o[i] = t[i])
        }
        var p = arguments.length - 2;
        if (1 === p) o.children = r;
        else if (p > 1) {
            for (var d = Array(p), f = 0; p > f; f++) d[f] = arguments[f + 2];
            o.children = d
        }
        if (e && e.defaultProps) {
            var m = e.defaultProps;
            for (i in m) "undefined" == typeof o[i] && (o[i] = m[i])
        }
        return s(e, u, h, c, l, n.current, o)
    }, s.createFactory = function(e) {
        var t = s.createElement.bind(null, e);
        return t.type = e, t
    }, s.cloneAndReplaceKey = function(e, t) {
        var r = s(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return r
    }, s.cloneAndReplaceProps = function(e, t) {
        var r = s(e.type, e.key, e.ref, e._self, e._source, e._owner, t);
        return r
    }, s.cloneElement = function(e, t, r) {
        var o, u = i({}, e.props),
            h = e.key,
            c = e.ref,
            l = e._self,
            p = e._source,
            d = e._owner;
        if (null != t) {
            void 0 !== t.ref && (c = t.ref, d = n.current), void 0 !== t.key && (h = "" + t.key);
            for (o in t) t.hasOwnProperty(o) && !a.hasOwnProperty(o) && (u[o] = t[o])
        }
        var f = arguments.length - 2;
        if (1 === f) u.children = r;
        else if (f > 1) {
            for (var m = Array(f), v = 0; f > v; v++) m[v] = arguments[v + 2];
            u.children = m
        }
        return s(e.type, h, c, l, p, d, u)
    }, s.isValidElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }, e.exports = s
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        return r
    }
    var i = {
        enableMeasure: !1,
        storedMeasure: n,
        measureMethods: function(e, t, r) {},
        measure: function(e, t, r) {
            return r
        },
        injection: {
            injectMeasure: function(e) {
                i.storedMeasure = e
            }
        }
    };
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n() {
        C.ReactReconcileTransaction && b ? void 0 : v(!1)
    }

    function i() {
        this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = c.getPooled(), this.reconcileTransaction = C.ReactReconcileTransaction.getPooled(!1)
    }

    function o(e, t, r, i, o, a) {
        n(), b.batchedUpdates(e, t, r, i, o, a)
    }

    function a(e, t) {
        return e._mountOrder - t._mountOrder
    }

    function s(e) {
        var t = e.dirtyComponentsLength;
        t !== g.length ? v(!1) : void 0, g.sort(a);
        for (var r = 0; t > r; r++) {
            var n = g[r],
                i = n._pendingCallbacks;
            if (n._pendingCallbacks = null, d.performUpdateIfNecessary(n, e.reconcileTransaction), i)
                for (var o = 0; o < i.length; o++) e.callbackQueue.enqueue(i[o], n.getPublicInstance())
        }
    }

    function u(e) {
        return n(), b.isBatchingUpdates ? void g.push(e) : void b.batchedUpdates(u, e)
    }

    function h(e, t) {
        b.isBatchingUpdates ? void 0 : v(!1), y.enqueue(e, t), x = !0
    }
    var c = r(33),
        l = r(13),
        p = r(7),
        d = r(14),
        f = r(28),
        m = r(3),
        v = r(1),
        g = [],
        y = c.getPooled(),
        x = !1,
        b = null,
        M = {
            initialize: function() {
                this.dirtyComponentsLength = g.length
            },
            close: function() {
                this.dirtyComponentsLength !== g.length ? (g.splice(0, this.dirtyComponentsLength), E()) : g.length = 0
            }
        },
        w = {
            initialize: function() {
                this.callbackQueue.reset()
            },
            close: function() {
                this.callbackQueue.notifyAll()
            }
        },
        _ = [M, w];
    m(i.prototype, f.Mixin, {
        getTransactionWrappers: function() {
            return _
        },
        destructor: function() {
            this.dirtyComponentsLength = null, c.release(this.callbackQueue), this.callbackQueue = null, C.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
        },
        perform: function(e, t, r) {
            return f.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, r)
        }
    }), l.addPoolingTo(i);
    var E = function() {
        for (; g.length || x;) {
            if (g.length) {
                var e = i.getPooled();
                e.perform(s, null, e), i.release(e)
            }
            if (x) {
                x = !1;
                var t = y;
                y = c.getPooled(), t.notifyAll(), c.release(t)
            }
        }
    };
    E = p.measure("ReactUpdates", "flushBatchedUpdates", E);
    var S = {
            injectReconcileTransaction: function(e) {
                e ? void 0 : v(!1), C.ReactReconcileTransaction = e
            },
            injectBatchingStrategy: function(e) {
                e ? void 0 : v(!1), "function" != typeof e.batchedUpdates ? v(!1) : void 0, "boolean" != typeof e.isBatchingUpdates ? v(!1) : void 0, b = e
            }
        },
        C = {
            ReactReconcileTransaction: null,
            batchedUpdates: o,
            enqueueUpdate: u,
            flushBatchedUpdates: E,
            injection: S,
            asap: h
        };
    e.exports = C
}, function(e, t) {
    "use strict";

    function r(e) {
        return function() {
            return e
        }
    }

    function n() {}
    n.thatReturns = r, n.thatReturnsFalse = r(!1), n.thatReturnsTrue = r(!0), n.thatReturnsNull = r(null), n.thatReturnsThis = function() {
        return this
    }, n.thatReturnsArgument = function(e) {
        return e
    }, e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(23),
        i = n({
            bubbled: null,
            captured: null
        }),
        o = n({
            topAbort: null,
            topBlur: null,
            topCanPlay: null,
            topCanPlayThrough: null,
            topChange: null,
            topClick: null,
            topCompositionEnd: null,
            topCompositionStart: null,
            topCompositionUpdate: null,
            topContextMenu: null,
            topCopy: null,
            topCut: null,
            topDoubleClick: null,
            topDrag: null,
            topDragEnd: null,
            topDragEnter: null,
            topDragExit: null,
            topDragLeave: null,
            topDragOver: null,
            topDragStart: null,
            topDrop: null,
            topDurationChange: null,
            topEmptied: null,
            topEncrypted: null,
            topEnded: null,
            topError: null,
            topFocus: null,
            topInput: null,
            topKeyDown: null,
            topKeyPress: null,
            topKeyUp: null,
            topLoad: null,
            topLoadedData: null,
            topLoadedMetadata: null,
            topLoadStart: null,
            topMouseDown: null,
            topMouseMove: null,
            topMouseOut: null,
            topMouseOver: null,
            topMouseUp: null,
            topPaste: null,
            topPause: null,
            topPlay: null,
            topPlaying: null,
            topProgress: null,
            topRateChange: null,
            topReset: null,
            topScroll: null,
            topSeeked: null,
            topSeeking: null,
            topSelectionChange: null,
            topStalled: null,
            topSubmit: null,
            topSuspend: null,
            topTextInput: null,
            topTimeUpdate: null,
            topTouchCancel: null,
            topTouchEnd: null,
            topTouchMove: null,
            topTouchStart: null,
            topVolumeChange: null,
            topWaiting: null,
            topWheel: null
        }),
        a = {
            topLevelTypes: o,
            PropagationPhases: i
        };
    e.exports = a
}, function(e, t) {
    "use strict";
    var r = {
        current: null
    };
    e.exports = r
}, function(e, t) {
    "use strict";
    var r = function(e) {
        var t;
        for (t in e)
            if (e.hasOwnProperty(t)) return t;
        return null
    };
    e.exports = r
}, function(e, t, r) {
    "use strict";
    var n = r(1),
        i = function(e) {
            var t = this;
            if (t.instancePool.length) {
                var r = t.instancePool.pop();
                return t.call(r, e), r
            }
            return new t(e)
        },
        o = function(e, t) {
            var r = this;
            if (r.instancePool.length) {
                var n = r.instancePool.pop();
                return r.call(n, e, t), n
            }
            return new r(e, t)
        },
        a = function(e, t, r) {
            var n = this;
            if (n.instancePool.length) {
                var i = n.instancePool.pop();
                return n.call(i, e, t, r), i
            }
            return new n(e, t, r)
        },
        s = function(e, t, r, n) {
            var i = this;
            if (i.instancePool.length) {
                var o = i.instancePool.pop();
                return i.call(o, e, t, r, n), o
            }
            return new i(e, t, r, n)
        },
        u = function(e, t, r, n, i) {
            var o = this;
            if (o.instancePool.length) {
                var a = o.instancePool.pop();
                return o.call(a, e, t, r, n, i), a
            }
            return new o(e, t, r, n, i)
        },
        h = function(e) {
            var t = this;
            e instanceof t ? void 0 : n(!1), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
        },
        c = 10,
        l = i,
        p = function(e, t) {
            var r = e;
            return r.instancePool = [], r.getPooled = t || l, r.poolSize || (r.poolSize = c), r.release = h, r
        },
        d = {
            addPoolingTo: p,
            oneArgumentPooler: i,
            twoArgumentPooler: o,
            threeArgumentPooler: a,
            fourArgumentPooler: s,
            fiveArgumentPooler: u
        };
    e.exports = d
}, function(e, t, r) {
    "use strict";

    function n() {
        i.attachRefs(this, this._currentElement)
    }
    var i = r(139),
        o = {
            mountComponent: function(e, t, r, i) {
                var o = e.mountComponent(t, r, i);
                return e._currentElement && null != e._currentElement.ref && r.getReactMountReady().enqueue(n, e), o
            },
            unmountComponent: function(e) {
                i.detachRefs(e, e._currentElement), e.unmountComponent()
            },
            receiveComponent: function(e, t, r, o) {
                var a = e._currentElement;
                if (t !== a || o !== e._context) {
                    var s = i.shouldUpdateRefs(a, t);
                    s && i.detachRefs(e, a), e.receiveComponent(t, r, o), s && e._currentElement && null != e._currentElement.ref && r.getReactMountReady().enqueue(n, e)
                }
            },
            performUpdateIfNecessary: function(e, t) {
                e.performUpdateIfNecessary(t)
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        this.dispatchConfig = e, this.dispatchMarker = t, this.nativeEvent = r;
        var i = this.constructor.Interface;
        for (var o in i)
            if (i.hasOwnProperty(o)) {
                var s = i[o];
                s ? this[o] = s(r) : "target" === o ? this.target = n : this[o] = r[o]
            }
        var u = null != r.defaultPrevented ? r.defaultPrevented : r.returnValue === !1;
        u ? this.isDefaultPrevented = a.thatReturnsTrue : this.isDefaultPrevented = a.thatReturnsFalse, this.isPropagationStopped = a.thatReturnsFalse
    }
    var i = r(13),
        o = r(3),
        a = r(9),
        s = (r(2), {
            type: null,
            target: null,
            currentTarget: a.thatReturnsNull,
            eventPhase: null,
            bubbles: null,
            cancelable: null,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: null,
            isTrusted: null
        });
    o(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = a.thatReturnsTrue)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, this.isPropagationStopped = a.thatReturnsTrue)
        },
        persist: function() {
            this.isPersistent = a.thatReturnsTrue
        },
        isPersistent: a.thatReturnsFalse,
        destructor: function() {
            var e = this.constructor.Interface;
            for (var t in e) this[t] = null;
            this.dispatchConfig = null, this.dispatchMarker = null, this.nativeEvent = null
        }
    }), n.Interface = s, n.augmentClass = function(e, t) {
        var r = this,
            n = Object.create(r.prototype);
        o(n, e.prototype), e.prototype = n, e.prototype.constructor = e, e.Interface = o({}, r.Interface, t), e.augmentClass = r.augmentClass, i.addPoolingTo(e, i.fourArgumentPooler)
    }, i.addPoolingTo(n, i.fourArgumentPooler), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        return (e & t) === t
    }
    var i = r(1),
        o = {
            MUST_USE_ATTRIBUTE: 1,
            MUST_USE_PROPERTY: 2,
            HAS_SIDE_EFFECTS: 4,
            HAS_BOOLEAN_VALUE: 8,
            HAS_NUMERIC_VALUE: 16,
            HAS_POSITIVE_NUMERIC_VALUE: 48,
            HAS_OVERLOADED_BOOLEAN_VALUE: 64,
            injectDOMPropertyConfig: function(e) {
                var t = o,
                    r = e.Properties || {},
                    a = e.DOMAttributeNamespaces || {},
                    u = e.DOMAttributeNames || {},
                    h = e.DOMPropertyNames || {},
                    c = e.DOMMutationMethods || {};
                e.isCustomAttribute && s._isCustomAttributeFunctions.push(e.isCustomAttribute);
                for (var l in r) {
                    s.properties.hasOwnProperty(l) ? i(!1) : void 0;
                    var p = l.toLowerCase(),
                        d = r[l],
                        f = {
                            attributeName: p,
                            attributeNamespace: null,
                            propertyName: l,
                            mutationMethod: null,
                            mustUseAttribute: n(d, t.MUST_USE_ATTRIBUTE),
                            mustUseProperty: n(d, t.MUST_USE_PROPERTY),
                            hasSideEffects: n(d, t.HAS_SIDE_EFFECTS),
                            hasBooleanValue: n(d, t.HAS_BOOLEAN_VALUE),
                            hasNumericValue: n(d, t.HAS_NUMERIC_VALUE),
                            hasPositiveNumericValue: n(d, t.HAS_POSITIVE_NUMERIC_VALUE),
                            hasOverloadedBooleanValue: n(d, t.HAS_OVERLOADED_BOOLEAN_VALUE)
                        };
                    if (f.mustUseAttribute && f.mustUseProperty ? i(!1) : void 0, !f.mustUseProperty && f.hasSideEffects ? i(!1) : void 0, f.hasBooleanValue + f.hasNumericValue + f.hasOverloadedBooleanValue <= 1 ? void 0 : i(!1), u.hasOwnProperty(l)) {
                        var m = u[l];
                        f.attributeName = m
                    }
                    a.hasOwnProperty(l) && (f.attributeNamespace = a[l]), h.hasOwnProperty(l) && (f.propertyName = h[l]), c.hasOwnProperty(l) && (f.mutationMethod = c[l]), s.properties[l] = f
                }
            }
        },
        a = {},
        s = {
            ID_ATTRIBUTE_NAME: "data-reactid",
            properties: {},
            getPossibleStandardName: null,
            _isCustomAttributeFunctions: [],
            isCustomAttribute: function(e) {
                for (var t = 0; t < s._isCustomAttributeFunctions.length; t++) {
                    var r = s._isCustomAttributeFunctions[t];
                    if (r(e)) return !0
                }
                return !1
            },
            getDefaultValueForProperty: function(e, t) {
                var r, n = a[e];
                return n || (a[e] = n = {}), t in n || (r = document.createElement(e), n[t] = r[t]), n[t]
            },
            injection: o
        };
    e.exports = s
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return d + e.toString(36)
    }

    function i(e, t) {
        return e.charAt(t) === d || t === e.length
    }

    function o(e) {
        return "" === e || e.charAt(0) === d && e.charAt(e.length - 1) !== d
    }

    function a(e, t) {
        return 0 === t.indexOf(e) && i(t, e.length)
    }

    function s(e) {
        return e ? e.substr(0, e.lastIndexOf(d)) : ""
    }

    function u(e, t) {
        if (o(e) && o(t) ? void 0 : p(!1), a(e, t) ? void 0 : p(!1), e === t) return e;
        var r, n = e.length + f;
        for (r = n; r < t.length && !i(t, r); r++);
        return t.substr(0, r)
    }

    function h(e, t) {
        var r = Math.min(e.length, t.length);
        if (0 === r) return "";
        for (var n = 0, a = 0; r >= a; a++)
            if (i(e, a) && i(t, a)) n = a;
            else if (e.charAt(a) !== t.charAt(a)) break;
        var s = e.substr(0, n);
        return o(s) ? void 0 : p(!1), s
    }

    function c(e, t, r, n, i, o) {
        e = e || "", t = t || "", e === t ? p(!1) : void 0;
        var h = a(t, e);
        h || a(e, t) ? void 0 : p(!1);
        for (var c = 0, l = h ? s : u, d = e;; d = l(d, t)) {
            var f;
            if (i && d === e || o && d === t || (f = r(d, h, n)), f === !1 || d === t) break;
            c++ < m ? void 0 : p(!1)
        }
    }
    var l = r(81),
        p = r(1),
        d = ".",
        f = d.length,
        m = 1e4,
        v = {
            createReactRootID: function() {
                return n(l.createReactRootIndex())
            },
            createReactID: function(e, t) {
                return e + t
            },
            getReactRootIDFromNodeID: function(e) {
                if (e && e.charAt(0) === d && e.length > 1) {
                    var t = e.indexOf(d, 1);
                    return t > -1 ? e.substr(0, t) : e
                }
                return null
            },
            traverseEnterLeave: function(e, t, r, n, i) {
                var o = h(e, t);
                o !== e && c(e, o, r, n, !1, !0), o !== t && c(o, t, r, i, !0, !1)
            },
            traverseTwoPhase: function(e, t, r) {
                e && (c("", e, t, r, !0, !1), c(e, "", t, r, !1, !0))
            },
            traverseTwoPhaseSkipTarget: function(e, t, r) {
                e && (c("", e, t, r, !0, !0), c(e, "", t, r, !0, !0))
            },
            traverseAncestors: function(e, t, r) {
                c("", e, t, r, !0, !1)
            },
            getFirstCommonAncestorID: h,
            _getNextDescendantID: u,
            isAncestorIDOf: a,
            SEPARATOR: d
        };
    e.exports = v
}, function(e, t, r) {
    "use strict";
    var n = {};
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(61),
        i = r(117),
        o = r(74),
        a = r(83),
        s = r(84),
        u = r(1),
        h = (r(2), {}),
        c = null,
        l = function(e, t) {
            e && (i.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
        },
        p = function(e) {
            return l(e, !0)
        },
        d = function(e) {
            return l(e, !1)
        },
        f = null,
        m = {
            injection: {
                injectMount: i.injection.injectMount,
                injectInstanceHandle: function(e) {
                    f = e
                },
                getInstanceHandle: function() {
                    return f
                },
                injectEventPluginOrder: n.injectEventPluginOrder,
                injectEventPluginsByName: n.injectEventPluginsByName
            },
            eventNameDispatchConfigs: n.eventNameDispatchConfigs,
            registrationNameModules: n.registrationNameModules,
            putListener: function(e, t, r) {
                "function" != typeof r ? u(!1) : void 0;
                var i = h[t] || (h[t] = {});
                i[e] = r;
                var o = n.registrationNameModules[t];
                o && o.didPutListener && o.didPutListener(e, t, r)
            },
            getListener: function(e, t) {
                var r = h[t];
                return r && r[e]
            },
            deleteListener: function(e, t) {
                var r = n.registrationNameModules[t];
                r && r.willDeleteListener && r.willDeleteListener(e, t);
                var i = h[t];
                i && delete i[e]
            },
            deleteAllListeners: function(e) {
                for (var t in h)
                    if (h[t][e]) {
                        var r = n.registrationNameModules[t];
                        r && r.willDeleteListener && r.willDeleteListener(e, t), delete h[t][e]
                    }
            },
            extractEvents: function(e, t, r, i, o) {
                for (var s, u = n.plugins, h = 0; h < u.length; h++) {
                    var c = u[h];
                    if (c) {
                        var l = c.extractEvents(e, t, r, i, o);
                        l && (s = a(s, l))
                    }
                }
                return s
            },
            enqueueEvents: function(e) {
                e && (c = a(c, e))
            },
            processEventQueue: function(e) {
                var t = c;
                c = null, e ? s(t, p) : s(t, d), c ? u(!1) : void 0, o.rethrowCaughtError()
            },
            __purge: function() {
                h = {}
            },
            __getListenerBank: function() {
                return h
            }
        };
    e.exports = m
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        var n = t.dispatchConfig.phasedRegistrationNames[r];
        return y(e, n)
    }

    function i(e, t, r) {
        var i = t ? g.bubbled : g.captured,
            o = n(e, r, i);
        o && (r._dispatchListeners = m(r._dispatchListeners, o), r._dispatchIDs = m(r._dispatchIDs, e))
    }

    function o(e) {
        e && e.dispatchConfig.phasedRegistrationNames && f.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker, i, e)
    }

    function a(e) {
        e && e.dispatchConfig.phasedRegistrationNames && f.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(e.dispatchMarker, i, e)
    }

    function s(e, t, r) {
        if (r && r.dispatchConfig.registrationName) {
            var n = r.dispatchConfig.registrationName,
                i = y(e, n);
            i && (r._dispatchListeners = m(r._dispatchListeners, i), r._dispatchIDs = m(r._dispatchIDs, e))
        }
    }

    function u(e) {
        e && e.dispatchConfig.registrationName && s(e.dispatchMarker, null, e)
    }

    function h(e) {
        v(e, o)
    }

    function c(e) {
        v(e, a)
    }

    function l(e, t, r, n) {
        f.injection.getInstanceHandle().traverseEnterLeave(r, n, s, e, t)
    }

    function p(e) {
        v(e, u)
    }
    var d = r(10),
        f = r(19),
        m = (r(2), r(83)),
        v = r(84),
        g = d.PropagationPhases,
        y = f.getListener,
        x = {
            accumulateTwoPhaseDispatches: h,
            accumulateTwoPhaseDispatchesSkipTarget: c,
            accumulateDirectDispatches: p,
            accumulateEnterLeaveDispatches: l
        };
    e.exports = x
}, function(e, t) {
    "use strict";
    var r = {
        remove: function(e) {
            e._reactInternalInstance = void 0
        },
        get: function(e) {
            return e._reactInternalInstance
        },
        has: function(e) {
            return void 0 !== e._reactInternalInstance
        },
        set: function(e, t) {
            e._reactInternalInstance = t
        }
    };
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(15),
        o = r(44),
        a = {
            view: function(e) {
                if (e.view) return e.view;
                var t = o(e);
                if (null != t && t.window === t) return t;
                var r = t.ownerDocument;
                return r ? r.defaultView || r.parentWindow : window
            },
            detail: function(e) {
                return e.detail || 0
            }
        };
    i.augmentClass(n, a), e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(1),
        i = function(e) {
            var t, r = {};
            e instanceof Object && !Array.isArray(e) ? void 0 : n(!1);
            for (t in e) e.hasOwnProperty(t) && (r[t] = t);
            return r
        };
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return Object.prototype.hasOwnProperty.call(e, v) || (e[v] = f++, p[e[v]] = {}), p[e[v]]
    }
    var i = r(10),
        o = r(19),
        a = r(61),
        s = r(132),
        u = r(7),
        h = r(82),
        c = r(3),
        l = r(47),
        p = {},
        d = !1,
        f = 0,
        m = {
            topAbort: "abort",
            topBlur: "blur",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topChange: "change",
            topClick: "click",
            topCompositionEnd: "compositionend",
            topCompositionStart: "compositionstart",
            topCompositionUpdate: "compositionupdate",
            topContextMenu: "contextmenu",
            topCopy: "copy",
            topCut: "cut",
            topDoubleClick: "dblclick",
            topDrag: "drag",
            topDragEnd: "dragend",
            topDragEnter: "dragenter",
            topDragExit: "dragexit",
            topDragLeave: "dragleave",
            topDragOver: "dragover",
            topDragStart: "dragstart",
            topDrop: "drop",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topFocus: "focus",
            topInput: "input",
            topKeyDown: "keydown",
            topKeyPress: "keypress",
            topKeyUp: "keyup",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topMouseDown: "mousedown",
            topMouseMove: "mousemove",
            topMouseOut: "mouseout",
            topMouseOver: "mouseover",
            topMouseUp: "mouseup",
            topPaste: "paste",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topScroll: "scroll",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topSelectionChange: "selectionchange",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTextInput: "textInput",
            topTimeUpdate: "timeupdate",
            topTouchCancel: "touchcancel",
            topTouchEnd: "touchend",
            topTouchMove: "touchmove",
            topTouchStart: "touchstart",
            topVolumeChange: "volumechange",
            topWaiting: "waiting",
            topWheel: "wheel"
        },
        v = "_reactListenersID" + String(Math.random()).slice(2),
        g = c({}, s, {
            ReactEventListener: null,
            injection: {
                injectReactEventListener: function(e) {
                    e.setHandleTopLevel(g.handleTopLevel), g.ReactEventListener = e
                }
            },
            setEnabled: function(e) {
                g.ReactEventListener && g.ReactEventListener.setEnabled(e)
            },
            isEnabled: function() {
                return !(!g.ReactEventListener || !g.ReactEventListener.isEnabled())
            },
            listenTo: function(e, t) {
                for (var r = t, o = n(r), s = a.registrationNameDependencies[e], u = i.topLevelTypes, h = 0; h < s.length; h++) {
                    var c = s[h];
                    o.hasOwnProperty(c) && o[c] || (c === u.topWheel ? l("wheel") ? g.ReactEventListener.trapBubbledEvent(u.topWheel, "wheel", r) : l("mousewheel") ? g.ReactEventListener.trapBubbledEvent(u.topWheel, "mousewheel", r) : g.ReactEventListener.trapBubbledEvent(u.topWheel, "DOMMouseScroll", r) : c === u.topScroll ? l("scroll", !0) ? g.ReactEventListener.trapCapturedEvent(u.topScroll, "scroll", r) : g.ReactEventListener.trapBubbledEvent(u.topScroll, "scroll", g.ReactEventListener.WINDOW_HANDLE) : c === u.topFocus || c === u.topBlur ? (l("focus", !0) ? (g.ReactEventListener.trapCapturedEvent(u.topFocus, "focus", r), g.ReactEventListener.trapCapturedEvent(u.topBlur, "blur", r)) : l("focusin") && (g.ReactEventListener.trapBubbledEvent(u.topFocus, "focusin", r), g.ReactEventListener.trapBubbledEvent(u.topBlur, "focusout", r)), o[u.topBlur] = !0, o[u.topFocus] = !0) : m.hasOwnProperty(c) && g.ReactEventListener.trapBubbledEvent(c, m[c], r), o[c] = !0)
                }
            },
            trapBubbledEvent: function(e, t, r) {
                return g.ReactEventListener.trapBubbledEvent(e, t, r)
            },
            trapCapturedEvent: function(e, t, r) {
                return g.ReactEventListener.trapCapturedEvent(e, t, r)
            },
            ensureScrollValueMonitoring: function() {
                if (!d) {
                    var e = h.refreshScrollValues;
                    g.ReactEventListener.monitorScrollValue(e), d = !0
                }
            },
            eventNameDispatchConfigs: o.eventNameDispatchConfigs,
            registrationNameModules: o.registrationNameModules,
            putListener: o.putListener,
            getListener: o.getListener,
            deleteListener: o.deleteListener,
            deleteAllListeners: o.deleteAllListeners
        });
    u.measureMethods(g, "ReactBrowserEventEmitter", {
        putListener: "putListener",
        deleteListener: "deleteListener"
    }), e.exports = g
}, function(e, t, r) {
    "use strict";
    var n = {};
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(23),
        i = n({
            prop: null,
            context: null,
            childContext: null
        });
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(22),
        o = r(82),
        a = r(43),
        s = {
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: a,
            button: function(e) {
                var t = e.button;
                return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
            },
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            pageX: function(e) {
                return "pageX" in e ? e.pageX : e.clientX + o.currentScrollLeft
            },
            pageY: function(e) {
                return "pageY" in e ? e.pageY : e.clientY + o.currentScrollTop
            }
        };
    i.augmentClass(n, s), e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(1),
        i = {
            reinitializeTransaction: function() {
                this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
            },
            _isInTransaction: !1,
            getTransactionWrappers: null,
            isInTransaction: function() {
                return !!this._isInTransaction
            },
            perform: function(e, t, r, i, o, a, s, u) {
                this.isInTransaction() ? n(!1) : void 0;
                var h, c;
                try {
                    this._isInTransaction = !0, h = !0, this.initializeAll(0), c = e.call(t, r, i, o, a, s, u), h = !1
                } finally {
                    try {
                        if (h) try {
                            this.closeAll(0)
                        } catch (l) {} else this.closeAll(0)
                    } finally {
                        this._isInTransaction = !1
                    }
                }
                return c
            },
            initializeAll: function(e) {
                for (var t = this.transactionWrappers, r = e; r < t.length; r++) {
                    var n = t[r];
                    try {
                        this.wrapperInitData[r] = o.OBSERVED_ERROR, this.wrapperInitData[r] = n.initialize ? n.initialize.call(this) : null
                    } finally {
                        if (this.wrapperInitData[r] === o.OBSERVED_ERROR) try {
                            this.initializeAll(r + 1)
                        } catch (i) {}
                    }
                }
            },
            closeAll: function(e) {
                this.isInTransaction() ? void 0 : n(!1);
                for (var t = this.transactionWrappers, r = e; r < t.length; r++) {
                    var i, a = t[r],
                        s = this.wrapperInitData[r];
                    try {
                        i = !0, s !== o.OBSERVED_ERROR && a.close && a.close.call(this, s), i = !1
                    } finally {
                        if (i) try {
                            this.closeAll(r + 1)
                        } catch (u) {}
                    }
                }
                this.wrapperInitData.length = 0
            }
        },
        o = {
            Mixin: i,
            OBSERVED_ERROR: {}
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";
    var n = !1;
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        return i[e]
    }

    function n(e) {
        return ("" + e).replace(o, r)
    }
    var i = {
            "&": "&amp;",
            ">": "&gt;",
            "<": "&lt;",
            '"': "&quot;",
            "'": "&#x27;"
        },
        o = /[&><"']/g;
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(4),
        i = /^[ \r\n\t\f]/,
        o = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
        a = function(e, t) {
            e.innerHTML = t
        };
    if ("undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction && (a = function(e, t) {
            MSApp.execUnsafeLocalFunction(function() {
                e.innerHTML = t
            })
        }), n.canUseDOM) {
        var s = document.createElement("div");
        s.innerHTML = " ", "" === s.innerHTML && (a = function(e, t) {
            if (e.parentNode && e.parentNode.replaceChild(e, e), i.test(t) || "<" === t[0] && o.test(t)) {
                e.innerHTML = String.fromCharCode(65279) + t;
                var r = e.firstChild;
                1 === r.data.length ? e.removeChild(r) : r.deleteData(0, 1)
            } else e.innerHTML = t
        })
    }
    e.exports = a
}, function(e, t, r) {
    "use strict";
    e.exports = r(120)
}, function(e, t, r) {
    "use strict";

    function n() {
        this._callbacks = null, this._contexts = null
    }
    var i = r(13),
        o = r(3),
        a = r(1);
    o(n.prototype, {
        enqueue: function(e, t) {
            this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t)
        },
        notifyAll: function() {
            var e = this._callbacks,
                t = this._contexts;
            if (e) {
                e.length !== t.length ? a(!1) : void 0, this._callbacks = null, this._contexts = null;
                for (var r = 0; r < e.length; r++) e[r].call(t[r]);
                e.length = 0, t.length = 0
            }
        },
        reset: function() {
            this._callbacks = null, this._contexts = null
        },
        destructor: function() {
            this.reset()
        }
    }), i.addPoolingTo(n), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return c.hasOwnProperty(e) ? !0 : h.hasOwnProperty(e) ? !1 : u.test(e) ? (c[e] = !0, !0) : (h[e] = !0, !1)
    }

    function i(e, t) {
        return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && 1 > t || e.hasOverloadedBooleanValue && t === !1
    }
    var o = r(16),
        a = r(7),
        s = r(162),
        u = (r(2), /^[a-zA-Z_][\w\.\-]*$/),
        h = {},
        c = {},
        l = {
            createMarkupForID: function(e) {
                return o.ID_ATTRIBUTE_NAME + "=" + s(e)
            },
            setAttributeForID: function(e, t) {
                e.setAttribute(o.ID_ATTRIBUTE_NAME, t)
            },
            createMarkupForProperty: function(e, t) {
                var r = o.properties.hasOwnProperty(e) ? o.properties[e] : null;
                if (r) {
                    if (i(r, t)) return "";
                    var n = r.attributeName;
                    return r.hasBooleanValue || r.hasOverloadedBooleanValue && t === !0 ? n + '=""' : n + "=" + s(t)
                }
                return o.isCustomAttribute(e) ? null == t ? "" : e + "=" + s(t) : null
            },
            createMarkupForCustomAttribute: function(e, t) {
                return n(e) && null != t ? e + "=" + s(t) : ""
            },
            setValueForProperty: function(e, t, r) {
                var n = o.properties.hasOwnProperty(t) ? o.properties[t] : null;
                if (n) {
                    var a = n.mutationMethod;
                    if (a) a(e, r);
                    else if (i(n, r)) this.deleteValueForProperty(e, t);
                    else if (n.mustUseAttribute) {
                        var s = n.attributeName,
                            u = n.attributeNamespace;
                        u ? e.setAttributeNS(u, s, "" + r) : n.hasBooleanValue || n.hasOverloadedBooleanValue && r === !0 ? e.setAttribute(s, "") : e.setAttribute(s, "" + r)
                    } else {
                        var h = n.propertyName;
                        n.hasSideEffects && "" + e[h] == "" + r || (e[h] = r)
                    }
                } else o.isCustomAttribute(t) && l.setValueForAttribute(e, t, r)
            },
            setValueForAttribute: function(e, t, r) {
                n(t) && (null == r ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
            },
            deleteValueForProperty: function(e, t) {
                var r = o.properties.hasOwnProperty(t) ? o.properties[t] : null;
                if (r) {
                    var n = r.mutationMethod;
                    if (n) n(e, void 0);
                    else if (r.mustUseAttribute) e.removeAttribute(r.attributeName);
                    else {
                        var i = r.propertyName,
                            a = o.getDefaultValueForProperty(e.nodeName, i);
                        r.hasSideEffects && "" + e[i] === a || (e[i] = a)
                    }
                } else o.isCustomAttribute(t) && e.removeAttribute(t)
            }
        };
    a.measureMethods(l, "DOMPropertyOperations", {
        setValueForProperty: "setValueForProperty",
        setValueForAttribute: "setValueForAttribute",
        deleteValueForProperty: "deleteValueForProperty"
    }), e.exports = l
}, function(e, t, r) {
    "use strict";

    function n(e) {
        null != e.checkedLink && null != e.valueLink ? h(!1) : void 0
    }

    function i(e) {
        n(e), null != e.value || null != e.onChange ? h(!1) : void 0
    }

    function o(e) {
        n(e), null != e.checked || null != e.onChange ? h(!1) : void 0
    }

    function a(e) {
        if (e) {
            var t = e.getName();
            if (t) return " Check the render method of `" + t + "`."
        }
        return ""
    }
    var s = r(80),
        u = r(26),
        h = r(1),
        c = (r(2), {
            button: !0,
            checkbox: !0,
            image: !0,
            hidden: !0,
            radio: !0,
            reset: !0,
            submit: !0
        }),
        l = {
            value: function(e, t, r) {
                return !e[t] || c[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
            },
            checked: function(e, t, r) {
                return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
            },
            onChange: s.func
        },
        p = {},
        d = {
            checkPropTypes: function(e, t, r) {
                for (var n in l) {
                    if (l.hasOwnProperty(n)) var i = l[n](t, n, e, u.prop);
                    i instanceof Error && !(i.message in p) && (p[i.message] = !0, a(r))
                }
            },
            getValue: function(e) {
                return e.valueLink ? (i(e), e.valueLink.value) : e.value
            },
            getChecked: function(e) {
                return e.checkedLink ? (o(e), e.checkedLink.value) : e.checked
            },
            executeOnChange: function(e, t) {
                return e.valueLink ? (i(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (o(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
            }
        };
    e.exports = d
}, function(e, t, r) {
    "use strict";
    var n = r(38),
        i = r(5),
        o = {
            processChildrenUpdates: n.dangerouslyProcessChildrenUpdates,
            replaceNodeWithMarkupByID: n.dangerouslyReplaceNodeWithMarkupByID,
            unmountIDFromEnvironment: function(e) {
                i.purgeID(e)
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";
    var n = r(1),
        i = !1,
        o = {
            unmountIDFromEnvironment: null,
            replaceNodeWithMarkupByID: null,
            processChildrenUpdates: null,
            injection: {
                injectEnvironment: function(e) {
                    i ? n(!1) : void 0, o.unmountIDFromEnvironment = e.unmountIDFromEnvironment, o.replaceNodeWithMarkupByID = e.replaceNodeWithMarkupByID, o.processChildrenUpdates = e.processChildrenUpdates, i = !0
                }
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";
    var n = r(60),
        i = r(34),
        o = r(5),
        a = r(7),
        s = r(1),
        u = {
            dangerouslySetInnerHTML: "`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",
            style: "`style` must be set using `updateStylesByID()`."
        },
        h = {
            updatePropertyByID: function(e, t, r) {
                var n = o.getNode(e);
                u.hasOwnProperty(t) ? s(!1) : void 0, null != r ? i.setValueForProperty(n, t, r) : i.deleteValueForProperty(n, t)
            },
            dangerouslyReplaceNodeWithMarkupByID: function(e, t) {
                var r = o.getNode(e);
                n.dangerouslyReplaceNodeWithMarkup(r, t)
            },
            dangerouslyProcessChildrenUpdates: function(e, t) {
                for (var r = 0; r < e.length; r++) e[r].parentNode = o.getNode(e[r].parentID);
                n.processUpdates(e, t)
            }
        };
    a.measureMethods(h, "ReactDOMIDOperations", {
        dangerouslyReplaceNodeWithMarkupByID: "dangerouslyReplaceNodeWithMarkupByID",
        dangerouslyProcessChildrenUpdates: "dangerouslyProcessChildrenUpdates"
    }), e.exports = h
}, function(e, t, r) {
    "use strict";

    function n(e) {
        s.enqueueUpdate(e)
    }

    function i(e, t) {
        var r = a.get(e);
        return r ? r : null
    }
    var o = (r(11), r(6)),
        a = r(21),
        s = r(8),
        u = r(3),
        h = r(1),
        c = (r(2), {
            isMounted: function(e) {
                var t = a.get(e);
                return t ? !!t._renderedComponent : !1
            },
            enqueueCallback: function(e, t) {
                "function" != typeof t ? h(!1) : void 0;
                var r = i(e);
                return r ? (r._pendingCallbacks ? r._pendingCallbacks.push(t) : r._pendingCallbacks = [t], void n(r)) : null
            },
            enqueueCallbackInternal: function(e, t) {
                "function" != typeof t ? h(!1) : void 0, e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], n(e)
            },
            enqueueForceUpdate: function(e) {
                var t = i(e, "forceUpdate");
                t && (t._pendingForceUpdate = !0, n(t))
            },
            enqueueReplaceState: function(e, t) {
                var r = i(e, "replaceState");
                r && (r._pendingStateQueue = [t], r._pendingReplaceState = !0, n(r))
            },
            enqueueSetState: function(e, t) {
                var r = i(e, "setState");
                if (r) {
                    var o = r._pendingStateQueue || (r._pendingStateQueue = []);
                    o.push(t), n(r)
                }
            },
            enqueueSetProps: function(e, t) {
                var r = i(e, "setProps");
                r && c.enqueueSetPropsInternal(r, t)
            },
            enqueueSetPropsInternal: function(e, t) {
                var r = e._topLevelWrapper;
                r ? void 0 : h(!1);
                var i = r._pendingElement || r._currentElement,
                    a = i.props,
                    s = u({}, a.props, t);
                r._pendingElement = o.cloneAndReplaceProps(i, o.cloneAndReplaceProps(a, s)), n(r)
            },
            enqueueReplaceProps: function(e, t) {
                var r = i(e, "replaceProps");
                r && c.enqueueReplacePropsInternal(r, t)
            },
            enqueueReplacePropsInternal: function(e, t) {
                var r = e._topLevelWrapper;
                r ? void 0 : h(!1);
                var i = r._pendingElement || r._currentElement,
                    a = i.props;
                r._pendingElement = o.cloneAndReplaceProps(i, o.cloneAndReplaceProps(a, t)), n(r)
            },
            enqueueElementInternal: function(e, t) {
                e._pendingElement = t, n(e)
            }
        });
    e.exports = c
}, function(e, t) {
    "use strict";
    e.exports = "0.14.7"
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return null == e ? null : 1 === e.nodeType ? e : i.has(e) ? o.getNodeFromInstance(e) : (null != e.render && "function" == typeof e.render ? a(!1) : void 0, void a(!1))
    }
    var i = (r(11), r(21)),
        o = r(5),
        a = r(1);
    r(2), e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        var t, r = e.keyCode;
        return "charCode" in e ? (t = e.charCode, 0 === t && 13 === r && (t = 13)) : t = r, t >= 32 || 13 === t ? t : 0
    }
    e.exports = r
}, function(e, t) {
    "use strict";

    function r(e) {
        var t = this,
            r = t.nativeEvent;
        if (r.getModifierState) return r.getModifierState(e);
        var n = i[e];
        return n ? !!r[n] : !1
    }

    function n(e) {
        return r
    }
    var i = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        var t = e.target || e.srcElement || window;
        return 3 === t.nodeType ? t.parentNode : t
    }
    e.exports = r
}, function(e, t) {
    "use strict";

    function r(e) {
        var t = e && (n && e[n] || e[i]);
        return "function" == typeof t ? t : void 0
    }
    var n = "function" == typeof Symbol && Symbol.iterator,
        i = "@@iterator";
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
    }

    function i(e) {
        var t;
        if (null === e || e === !1) t = new a(i);
        else if ("object" == typeof e) {
            var r = e;
            !r || "function" != typeof r.type && "string" != typeof r.type ? h(!1) : void 0, t = "string" == typeof r.type ? s.createInternalComponent(r) : n(r.type) ? new r.type(r) : new c
        } else "string" == typeof e || "number" == typeof e ? t = s.createInstanceForText(e) : h(!1);
        return t.construct(e), t._mountIndex = 0, t._mountImage = null, t
    }
    var o = r(123),
        a = r(72),
        s = r(78),
        u = r(3),
        h = r(1),
        c = (r(2), function() {});
    u(c.prototype, o.Mixin, {
        _instantiateReactComponent: i
    }), e.exports = i
}, function(e, t, r) {
    "use strict";
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @param {?boolean} capture Check if the capture phase is supported.
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function n(e, t) {
        if (!o.canUseDOM || t && !("addEventListener" in document)) return !1;
        var r = "on" + e,
            n = r in document;
        if (!n) {
            var a = document.createElement("div");
            a.setAttribute(r, "return;"), n = "function" == typeof a[r]
        }
        return !n && i && "wheel" === e && (n = document.implementation.hasFeature("Events.wheel", "3.0")), n
    }
    var i, o = r(4);
    o.canUseDOM && (i = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(4),
        i = r(30),
        o = r(31),
        a = function(e, t) {
            e.textContent = t
        };
    n.canUseDOM && ("textContent" in document.documentElement || (a = function(e, t) {
        o(e, i(t))
    })), e.exports = a
}, function(e, t) {
    "use strict";

    function r(e, t) {
        var r = null === e || e === !1,
            n = null === t || t === !1;
        if (r || n) return r === n;
        var i = typeof e,
            o = typeof t;
        return "string" === i || "number" === i ? "string" === o || "number" === o : "object" === o && e.type === t.type && e.key === t.key
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return m[e]
    }

    function i(e, t) {
        return e && null != e.key ? a(e.key) : t.toString(36)
    }

    function o(e) {
        return ("" + e).replace(v, n)
    }

    function a(e) {
        return "$" + o(e)
    }

    function s(e, t, r, n) {
        var o = typeof e;
        if (("undefined" === o || "boolean" === o) && (e = null), null === e || "string" === o || "number" === o || h.isValidElement(e)) return r(n, e, "" === t ? d + i(e, 0) : t), 1;
        var u, c, m = 0,
            v = "" === t ? d : t + f;
        if (Array.isArray(e))
            for (var g = 0; g < e.length; g++) u = e[g], c = v + i(u, g), m += s(u, c, r, n);
        else {
            var y = l(e);
            if (y) {
                var x, b = y.call(e);
                if (y !== e.entries)
                    for (var M = 0; !(x = b.next()).done;) u = x.value, c = v + i(u, M++), m += s(u, c, r, n);
                else
                    for (; !(x = b.next()).done;) {
                        var w = x.value;
                        w && (u = w[1], c = v + a(w[0]) + f + i(u, 0), m += s(u, c, r, n))
                    }
            } else "object" === o && (String(e), p(!1))
        }
        return m
    }

    function u(e, t, r) {
        return null == e ? 0 : s(e, "", t, r)
    }
    var h = (r(11), r(6)),
        c = r(17),
        l = r(45),
        p = r(1),
        d = (r(2), c.SEPARATOR),
        f = ":",
        m = {
            "=": "=0",
            ".": "=1",
            ":": "=2"
        },
        v = /[=.:]/g;
    e.exports = u
}, function(e, t, r) {
    "use strict";
    var n = (r(3), r(9)),
        i = (r(2), n);
    e.exports = i
}, function(e, t, r) {
    "use strict";
    var n = r(9),
        i = {
            listen: function(e, t, r) {
                return e.addEventListener ? (e.addEventListener(t, r, !1), {
                    remove: function() {
                        e.removeEventListener(t, r, !1)
                    }
                }) : e.attachEvent ? (e.attachEvent("on" + t, r), {
                    remove: function() {
                        e.detachEvent("on" + t, r)
                    }
                }) : void 0
            },
            capture: function(e, t, r) {
                return e.addEventListener ? (e.addEventListener(t, r, !0), {
                    remove: function() {
                        e.removeEventListener(t, r, !0)
                    }
                }) : {
                    remove: n
                }
            },
            registerDefault: function() {}
        };
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = !0;
        e: for (; r;) {
            var n = e,
                o = t;
            if (r = !1, n && o) {
                if (n === o) return !0;
                if (i(n)) return !1;
                if (i(o)) {
                    e = n, t = o.parentNode, r = !0;
                    continue e
                }
                return n.contains ? n.contains(o) : n.compareDocumentPosition ? !!(16 & n.compareDocumentPosition(o)) : !1
            }
            return !1
        }
    }
    var i = r(98);
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        try {
            e.focus()
        } catch (t) {}
    }
    e.exports = r
}, function(e, t) {
    "use strict";

    function r() {
        if ("undefined" == typeof document) return null;
        try {
            return document.activeElement || document.body
        } catch (e) {
            return document.body
        }
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return a ? void 0 : o(!1), p.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ("*" === e ? a.innerHTML = "<link />" : a.innerHTML = "<" + e + "></" + e + ">", s[e] = !a.firstChild), s[e] ? p[e] : null
    }
    var i = r(4),
        o = r(1),
        a = i.canUseDOM ? document.createElement("div") : null,
        s = {},
        u = [1, '<select multiple="true">', "</select>"],
        h = [1, "<table>", "</table>"],
        c = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        l = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
        p = {
            "*": [1, "?<div>", "</div>"],
            area: [1, "<map>", "</map>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            param: [1, "<object>", "</object>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            optgroup: u,
            option: u,
            caption: h,
            colgroup: h,
            tbody: h,
            tfoot: h,
            thead: h,
            td: c,
            th: c
        },
        d = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
    d.forEach(function(e) {
        p[e] = l, s[e] = !0
    }), e.exports = n
}, function(e, t) {
    "use strict";

    function r(e, t) {
        if (e === t) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var r = Object.keys(e),
            i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (var o = n.bind(t), a = 0; a < r.length; a++)
            if (!o(r[a]) || e[r[a]] !== t[r[a]]) return !1;
        return !0
    }
    var n = Object.prototype.hasOwnProperty;
    e.exports = r
}, function(e, t, r) {
    "use strict";
    e.exports = r(65)
}, function(e, t) {
    "use strict";

    function r(e, t) {
        return e + t.charAt(0).toUpperCase() + t.substring(1)
    }
    var n = {
            animationIterationCount: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            stopOpacity: !0,
            strokeDashoffset: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        i = ["Webkit", "ms", "Moz", "O"];
    Object.keys(n).forEach(function(e) {
        i.forEach(function(t) {
            n[r(t, e)] = n[e]
        })
    });
    var o = {
            background: {
                backgroundAttachment: !0,
                backgroundColor: !0,
                backgroundImage: !0,
                backgroundPositionX: !0,
                backgroundPositionY: !0,
                backgroundRepeat: !0
            },
            backgroundPosition: {
                backgroundPositionX: !0,
                backgroundPositionY: !0
            },
            border: {
                borderWidth: !0,
                borderStyle: !0,
                borderColor: !0
            },
            borderBottom: {
                borderBottomWidth: !0,
                borderBottomStyle: !0,
                borderBottomColor: !0
            },
            borderLeft: {
                borderLeftWidth: !0,
                borderLeftStyle: !0,
                borderLeftColor: !0
            },
            borderRight: {
                borderRightWidth: !0,
                borderRightStyle: !0,
                borderRightColor: !0
            },
            borderTop: {
                borderTopWidth: !0,
                borderTopStyle: !0,
                borderTopColor: !0
            },
            font: {
                fontStyle: !0,
                fontVariant: !0,
                fontWeight: !0,
                fontSize: !0,
                lineHeight: !0,
                fontFamily: !0
            },
            outline: {
                outlineWidth: !0,
                outlineStyle: !0,
                outlineColor: !0
            }
        },
        a = {
            isUnitlessNumber: n,
            shorthandPropertyExpansions: o
        };
    e.exports = a
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        var n = r >= e.childNodes.length ? null : e.childNodes.item(r);
        e.insertBefore(t, n)
    }
    var i = r(114),
        o = r(77),
        a = r(7),
        s = r(31),
        u = r(48),
        h = r(1),
        c = {
            dangerouslyReplaceNodeWithMarkup: i.dangerouslyReplaceNodeWithMarkup,
            updateTextContent: u,
            processUpdates: function(e, t) {
                for (var r, a = null, c = null, l = 0; l < e.length; l++)
                    if (r = e[l], r.type === o.MOVE_EXISTING || r.type === o.REMOVE_NODE) {
                        var p = r.fromIndex,
                            d = r.parentNode.childNodes[p],
                            f = r.parentID;
                        d ? void 0 : h(!1), a = a || {}, a[f] = a[f] || [], a[f][p] = d, c = c || [], c.push(d)
                    }
                var m;
                if (m = t.length && "string" == typeof t[0] ? i.dangerouslyRenderMarkup(t) : t, c)
                    for (var v = 0; v < c.length; v++) c[v].parentNode.removeChild(c[v]);
                for (var g = 0; g < e.length; g++) switch (r = e[g], r.type) {
                    case o.INSERT_MARKUP:
                        n(r.parentNode, m[r.markupIndex], r.toIndex);
                        break;
                    case o.MOVE_EXISTING:
                        n(r.parentNode, a[r.parentID][r.fromIndex], r.toIndex);
                        break;
                    case o.SET_MARKUP:
                        s(r.parentNode, r.content);
                        break;
                    case o.TEXT_CONTENT:
                        u(r.parentNode, r.content);
                        break;
                    case o.REMOVE_NODE:
                }
            }
        };
    a.measureMethods(c, "DOMChildrenOperations", {
        updateTextContent: "updateTextContent"
    }), e.exports = c
}, function(e, t, r) {
    "use strict";

    function n() {
        if (s)
            for (var e in u) {
                var t = u[e],
                    r = s.indexOf(e);
                if (r > -1 ? void 0 : a(!1), !h.plugins[r]) {
                    t.extractEvents ? void 0 : a(!1), h.plugins[r] = t;
                    var n = t.eventTypes;
                    for (var o in n) i(n[o], t, o) ? void 0 : a(!1)
                }
            }
    }

    function i(e, t, r) {
        h.eventNameDispatchConfigs.hasOwnProperty(r) ? a(!1) : void 0, h.eventNameDispatchConfigs[r] = e;
        var n = e.phasedRegistrationNames;
        if (n) {
            for (var i in n)
                if (n.hasOwnProperty(i)) {
                    var s = n[i];
                    o(s, t, r)
                }
            return !0
        }
        return e.registrationName ? (o(e.registrationName, t, r), !0) : !1
    }

    function o(e, t, r) {
        h.registrationNameModules[e] ? a(!1) : void 0, h.registrationNameModules[e] = t, h.registrationNameDependencies[e] = t.eventTypes[r].dependencies
    }
    var a = r(1),
        s = null,
        u = {},
        h = {
            plugins: [],
            eventNameDispatchConfigs: {},
            registrationNameModules: {},
            registrationNameDependencies: {},
            injectEventPluginOrder: function(e) {
                s ? a(!1) : void 0, s = Array.prototype.slice.call(e), n()
            },
            injectEventPluginsByName: function(e) {
                var t = !1;
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var i = e[r];
                        u.hasOwnProperty(r) && u[r] === i || (u[r] ? a(!1) : void 0, u[r] = i, t = !0)
                    }
                t && n()
            },
            getPluginModuleForEvent: function(e) {
                var t = e.dispatchConfig;
                if (t.registrationName) return h.registrationNameModules[t.registrationName] || null;
                for (var r in t.phasedRegistrationNames)
                    if (t.phasedRegistrationNames.hasOwnProperty(r)) {
                        var n = h.registrationNameModules[t.phasedRegistrationNames[r]];
                        if (n) return n
                    }
                return null
            },
            _resetEventPlugins: function() {
                s = null;
                for (var e in u) u.hasOwnProperty(e) && delete u[e];
                h.plugins.length = 0;
                var t = h.eventNameDispatchConfigs;
                for (var r in t) t.hasOwnProperty(r) && delete t[r];
                var n = h.registrationNameModules;
                for (var i in n) n.hasOwnProperty(i) && delete n[i]
            }
        };
    e.exports = h
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return ("" + e).replace(b, "//")
    }

    function i(e, t) {
        this.func = e, this.context = t, this.count = 0
    }

    function o(e, t, r) {
        var n = e.func,
            i = e.context;
        n.call(i, t, e.count++)
    }

    function a(e, t, r) {
        if (null == e) return e;
        var n = i.getPooled(t, r);
        g(e, o, n), i.release(n)
    }

    function s(e, t, r, n) {
        this.result = e, this.keyPrefix = t, this.func = r, this.context = n, this.count = 0
    }

    function u(e, t, r) {
        var i = e.result,
            o = e.keyPrefix,
            a = e.func,
            s = e.context,
            u = a.call(s, t, e.count++);
        Array.isArray(u) ? h(u, i, r, v.thatReturnsArgument) : null != u && (m.isValidElement(u) && (u = m.cloneAndReplaceKey(u, o + (u !== t ? n(u.key || "") + "/" : "") + r)), i.push(u))
    }

    function h(e, t, r, i, o) {
        var a = "";
        null != r && (a = n(r) + "/");
        var h = s.getPooled(t, a, i, o);
        g(e, u, h), s.release(h)
    }

    function c(e, t, r) {
        if (null == e) return e;
        var n = [];
        return h(e, n, null, t, r), n
    }

    function l(e, t, r) {
        return null
    }

    function p(e, t) {
        return g(e, l, null)
    }

    function d(e) {
        var t = [];
        return h(e, t, null, v.thatReturnsArgument), t
    }
    var f = r(13),
        m = r(6),
        v = r(9),
        g = r(50),
        y = f.twoArgumentPooler,
        x = f.fourArgumentPooler,
        b = /\/(?!\/)/g;
    i.prototype.destructor = function() {
        this.func = null, this.context = null, this.count = 0
    }, f.addPoolingTo(i, y), s.prototype.destructor = function() {
        this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
    }, f.addPoolingTo(s, x);
    var M = {
        forEach: a,
        map: c,
        mapIntoWithKeyPrefixInternal: h,
        count: p,
        toArray: d
    };
    e.exports = M
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = w.hasOwnProperty(t) ? w[t] : null;
        E.hasOwnProperty(t) && (r !== b.OVERRIDE_BASE ? v(!1) : void 0), e.hasOwnProperty(t) && (r !== b.DEFINE_MANY && r !== b.DEFINE_MANY_MERGED ? v(!1) : void 0)
    }

    function i(e, t) {
        if (t) {
            "function" == typeof t ? v(!1) : void 0, p.isValidElement(t) ? v(!1) : void 0;
            var r = e.prototype;
            t.hasOwnProperty(x) && _.mixins(e, t.mixins);
            for (var i in t)
                if (t.hasOwnProperty(i) && i !== x) {
                    var o = t[i];
                    if (n(r, i), _.hasOwnProperty(i)) _[i](e, o);
                    else {
                        var a = w.hasOwnProperty(i),
                            h = r.hasOwnProperty(i),
                            c = "function" == typeof o,
                            l = c && !a && !h && t.autobind !== !1;
                        if (l) r.__reactAutoBindMap || (r.__reactAutoBindMap = {}), r.__reactAutoBindMap[i] = o, r[i] = o;
                        else if (h) {
                            var d = w[i];
                            !a || d !== b.DEFINE_MANY_MERGED && d !== b.DEFINE_MANY ? v(!1) : void 0, d === b.DEFINE_MANY_MERGED ? r[i] = s(r[i], o) : d === b.DEFINE_MANY && (r[i] = u(r[i], o))
                        } else r[i] = o
                    }
                }
        }
    }

    function o(e, t) {
        if (t)
            for (var r in t) {
                var n = t[r];
                if (t.hasOwnProperty(r)) {
                    var i = r in _;
                    i ? v(!1) : void 0;
                    var o = r in e;
                    o ? v(!1) : void 0, e[r] = n
                }
            }
    }

    function a(e, t) {
        e && t && "object" == typeof e && "object" == typeof t ? void 0 : v(!1);
        for (var r in t) t.hasOwnProperty(r) && (void 0 !== e[r] ? v(!1) : void 0, e[r] = t[r]);
        return e
    }

    function s(e, t) {
        return function() {
            var r = e.apply(this, arguments),
                n = t.apply(this, arguments);
            if (null == r) return n;
            if (null == n) return r;
            var i = {};
            return a(i, r), a(i, n), i
        }
    }

    function u(e, t) {
        return function() {
            e.apply(this, arguments), t.apply(this, arguments)
        }
    }

    function h(e, t) {
        var r = t.bind(e);
        return r
    }

    function c(e) {
        for (var t in e.__reactAutoBindMap)
            if (e.__reactAutoBindMap.hasOwnProperty(t)) {
                var r = e.__reactAutoBindMap[t];
                e[t] = h(e, r)
            }
    }
    var l = r(64),
        p = r(6),
        d = (r(26), r(25), r(79)),
        f = r(3),
        m = r(18),
        v = r(1),
        g = r(23),
        y = r(12),
        x = (r(2), y({
            mixins: null
        })),
        b = g({
            DEFINE_ONCE: null,
            DEFINE_MANY: null,
            OVERRIDE_BASE: null,
            DEFINE_MANY_MERGED: null
        }),
        M = [],
        w = {
            mixins: b.DEFINE_MANY,
            statics: b.DEFINE_MANY,
            propTypes: b.DEFINE_MANY,
            contextTypes: b.DEFINE_MANY,
            childContextTypes: b.DEFINE_MANY,
            getDefaultProps: b.DEFINE_MANY_MERGED,
            getInitialState: b.DEFINE_MANY_MERGED,
            getChildContext: b.DEFINE_MANY_MERGED,
            render: b.DEFINE_ONCE,
            componentWillMount: b.DEFINE_MANY,
            componentDidMount: b.DEFINE_MANY,
            componentWillReceiveProps: b.DEFINE_MANY,
            shouldComponentUpdate: b.DEFINE_ONCE,
            componentWillUpdate: b.DEFINE_MANY,
            componentDidUpdate: b.DEFINE_MANY,
            componentWillUnmount: b.DEFINE_MANY,
            updateComponent: b.OVERRIDE_BASE
        },
        _ = {
            displayName: function(e, t) {
                e.displayName = t
            },
            mixins: function(e, t) {
                if (t)
                    for (var r = 0; r < t.length; r++) i(e, t[r])
            },
            childContextTypes: function(e, t) {
                e.childContextTypes = f({}, e.childContextTypes, t)
            },
            contextTypes: function(e, t) {
                e.contextTypes = f({}, e.contextTypes, t)
            },
            getDefaultProps: function(e, t) {
                e.getDefaultProps ? e.getDefaultProps = s(e.getDefaultProps, t) : e.getDefaultProps = t
            },
            propTypes: function(e, t) {
                e.propTypes = f({}, e.propTypes, t)
            },
            statics: function(e, t) {
                o(e, t)
            },
            autobind: function() {}
        },
        E = {
            replaceState: function(e, t) {
                this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t)
            },
            isMounted: function() {
                return this.updater.isMounted(this)
            },
            setProps: function(e, t) {
                this.updater.enqueueSetProps(this, e), t && this.updater.enqueueCallback(this, t)
            },
            replaceProps: function(e, t) {
                this.updater.enqueueReplaceProps(this, e), t && this.updater.enqueueCallback(this, t)
            }
        },
        S = function() {};
    f(S.prototype, l.prototype, E);
    var C = {
        createClass: function(e) {
            var t = function(e, t, r) {
                this.__reactAutoBindMap && c(this), this.props = e, this.context = t, this.refs = m, this.updater = r || d, this.state = null;
                var n = this.getInitialState ? this.getInitialState() : null;
                "object" != typeof n || Array.isArray(n) ? v(!1) : void 0, this.state = n
            };
            t.prototype = new S, t.prototype.constructor = t, M.forEach(i.bind(null, t)), i(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), t.prototype.render ? void 0 : v(!1);
            for (var r in w) t.prototype[r] || (t.prototype[r] = null);
            return t
        },
        injection: {
            injectMixin: function(e) {
                M.push(e)
            }
        }
    };
    e.exports = C
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        this.props = e, this.context = t, this.refs = o, this.updater = r || i
    }
    var i = r(79),
        o = (r(29), r(18)),
        a = r(1);
    r(2), n.prototype.isReactComponent = {}, n.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e ? a(!1) : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t)
    }, n.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e)
    }, e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(11),
        i = r(68),
        o = r(70),
        a = r(17),
        s = r(5),
        u = r(7),
        h = r(14),
        c = r(8),
        l = r(40),
        p = r(41),
        d = r(163);
    r(2), o.inject();
    var f = u.measure("React", "render", s.render),
        m = {
            findDOMNode: p,
            render: f,
            unmountComponentAtNode: s.unmountComponentAtNode,
            version: l,
            unstable_batchedUpdates: c.batchedUpdates,
            unstable_renderSubtreeIntoContainer: d
        };
    "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
        CurrentOwner: n,
        InstanceHandles: a,
        Mount: s,
        Reconciler: h,
        TextComponent: i
    }), e.exports = m
}, function(e, t) {
    "use strict";
    var r = {
        useCreateElement: !1
    };
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n() {
        if (this._rootNodeID && this._wrapperState.pendingUpdate) {
            this._wrapperState.pendingUpdate = !1;
            var e = this._currentElement.props,
                t = a.getValue(e);
            null != t && i(this, Boolean(e.multiple), t)
        }
    }

    function i(e, t, r) {
        var n, i, o = s.getNode(e._rootNodeID).options;
        if (t) {
            for (n = {}, i = 0; i < r.length; i++) n["" + r[i]] = !0;
            for (i = 0; i < o.length; i++) {
                var a = n.hasOwnProperty(o[i].value);
                o[i].selected !== a && (o[i].selected = a)
            }
        } else {
            for (n = "" + r, i = 0; i < o.length; i++)
                if (o[i].value === n) return void(o[i].selected = !0);
            o.length && (o[0].selected = !0)
        }
    }

    function o(e) {
        var t = this._currentElement.props,
            r = a.executeOnChange(t, e);
        return this._wrapperState.pendingUpdate = !0, u.asap(n, this), r
    }
    var a = r(35),
        s = r(5),
        u = r(8),
        h = r(3),
        c = (r(2), "__ReactDOMSelect_value$" + Math.random().toString(36).slice(2)),
        l = {
            valueContextKey: c,
            getNativeProps: function(e, t, r) {
                return h({}, t, {
                    onChange: e._wrapperState.onChange,
                    value: void 0
                })
            },
            mountWrapper: function(e, t) {
                var r = a.getValue(t);
                e._wrapperState = {
                    pendingUpdate: !1,
                    initialValue: null != r ? r : t.defaultValue,
                    onChange: o.bind(e),
                    wasMultiple: Boolean(t.multiple)
                }
            },
            processChildContext: function(e, t, r) {
                var n = h({}, r);
                return n[c] = e._wrapperState.initialValue, n
            },
            postUpdateWrapper: function(e) {
                var t = e._currentElement.props;
                e._wrapperState.initialValue = void 0;
                var r = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = Boolean(t.multiple);
                var n = a.getValue(t);
                null != n ? (e._wrapperState.pendingUpdate = !1, i(e, Boolean(t.multiple), n)) : r !== Boolean(t.multiple) && (null != t.defaultValue ? i(e, Boolean(t.multiple), t.defaultValue) : i(e, Boolean(t.multiple), t.multiple ? [] : ""))
            }
        };
    e.exports = l
}, function(e, t, r) {
    "use strict";
    var n = r(60),
        i = r(34),
        o = r(36),
        a = r(5),
        s = r(3),
        u = r(30),
        h = r(48),
        c = (r(51), function(e) {});
    s(c.prototype, {
        construct: function(e) {
            this._currentElement = e, this._stringText = "" + e, this._rootNodeID = null, this._mountIndex = 0
        },
        mountComponent: function(e, t, r) {
            if (this._rootNodeID = e, t.useCreateElement) {
                var n = r[a.ownerDocumentContextKey],
                    o = n.createElement("span");
                return i.setAttributeForID(o, e), a.getID(o), h(o, this._stringText), o
            }
            var s = u(this._stringText);
            return t.renderToStaticMarkup ? s : "<span " + i.createMarkupForID(e) + ">" + s + "</span>"
        },
        receiveComponent: function(e, t) {
            if (e !== this._currentElement) {
                this._currentElement = e;
                var r = "" + e;
                if (r !== this._stringText) {
                    this._stringText = r;
                    var i = a.getNode(this._rootNodeID);
                    n.updateTextContent(i, r)
                }
            }
        },
        unmountComponent: function() {
            o.unmountIDFromEnvironment(this._rootNodeID)
        }
    }), e.exports = c
}, function(e, t, r) {
    "use strict";

    function n() {
        this.reinitializeTransaction()
    }
    var i = r(8),
        o = r(28),
        a = r(3),
        s = r(9),
        u = {
            initialize: s,
            close: function() {
                p.isBatchingUpdates = !1
            }
        },
        h = {
            initialize: s,
            close: i.flushBatchedUpdates.bind(i)
        },
        c = [h, u];
    a(n.prototype, o.Mixin, {
        getTransactionWrappers: function() {
            return c
        }
    });
    var l = new n,
        p = {
            isBatchingUpdates: !1,
            batchedUpdates: function(e, t, r, n, i, o) {
                var a = p.isBatchingUpdates;
                p.isBatchingUpdates = !0, a ? e(t, r, n, i, o) : l.perform(e, null, t, r, n, i, o)
            }
        };
    e.exports = p
}, function(e, t, r) {
    "use strict";

    function n() {
        S || (S = !0, g.EventEmitter.injectReactEventListener(v), g.EventPluginHub.injectEventPluginOrder(s), g.EventPluginHub.injectInstanceHandle(y), g.EventPluginHub.injectMount(x), g.EventPluginHub.injectEventPluginsByName({
            SimpleEventPlugin: _,
            EnterLeaveEventPlugin: u,
            ChangeEventPlugin: o,
            SelectEventPlugin: M,
            BeforeInputEventPlugin: i
        }), g.NativeComponent.injectGenericComponentClass(f), g.NativeComponent.injectTextComponentClass(m), g.Class.injectMixin(l), g.DOMProperty.injectDOMPropertyConfig(c), g.DOMProperty.injectDOMPropertyConfig(E), g.EmptyComponent.injectEmptyComponent("noscript"), g.Updates.injectReconcileTransaction(b), g.Updates.injectBatchingStrategy(d), g.RootIndex.injectCreateReactRootIndex(h.canUseDOM ? a.createReactRootIndex : w.createReactRootIndex), g.Component.injectEnvironment(p))
    }
    var i = r(110),
        o = r(112),
        a = r(113),
        s = r(115),
        u = r(116),
        h = r(4),
        c = r(119),
        l = r(121),
        p = r(36),
        d = r(69),
        f = r(125),
        m = r(68),
        v = r(133),
        g = r(134),
        y = r(17),
        x = r(5),
        b = r(138),
        M = r(144),
        w = r(145),
        _ = r(146),
        E = r(143),
        S = !1;
    e.exports = {
        inject: n
    }
}, function(e, t, r) {
    "use strict";

    function n() {
        if (l.current) {
            var e = l.current.getName();
            if (e) return " Check the render method of `" + e + "`."
        }
        return ""
    }

    function i(e, t) {
        e._store && !e._store.validated && null == e.key && (e._store.validated = !0, o("uniqueKey", e, t))
    }

    function o(e, t, r) {
        var i = n();
        if (!i) {
            var o = "string" == typeof r ? r : r.displayName || r.name;
            o && (i = " Check the top-level render call using <" + o + ">.")
        }
        var a = f[e] || (f[e] = {});
        if (a[i]) return null;
        a[i] = !0;
        var s = {
            parentOrOwner: i,
            url: " See https://fb.me/react-warning-keys for more information.",
            childOwner: null
        };
        return t && t._owner && t._owner !== l.current && (s.childOwner = " It was passed a child from " + t._owner.getName() + "."), s
    }

    function a(e, t) {
        if ("object" == typeof e)
            if (Array.isArray(e))
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    h.isValidElement(n) && i(n, t)
                } else if (h.isValidElement(e)) e._store && (e._store.validated = !0);
                else if (e) {
            var o = p(e);
            if (o && o !== e.entries)
                for (var a, s = o.call(e); !(a = s.next()).done;) h.isValidElement(a.value) && i(a.value, t)
        }
    }

    function s(e, t, r, i) {
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                var a;
                try {
                    "function" != typeof t[o] ? d(!1) : void 0, a = t[o](r, o, e, i)
                } catch (s) {
                    a = s
                }
                a instanceof Error && !(a.message in m) && (m[a.message] = !0, n())
            }
    }

    function u(e) {
        var t = e.type;
        if ("function" == typeof t) {
            var r = t.displayName || t.name;
            t.propTypes && s(r, t.propTypes, e.props, c.prop), "function" == typeof t.getDefaultProps
        }
    }
    var h = r(6),
        c = r(26),
        l = (r(25), r(11)),
        p = (r(29), r(45)),
        d = r(1),
        f = (r(2), {}),
        m = {},
        v = {
            createElement: function(e, t, r) {
                var n = "string" == typeof e || "function" == typeof e,
                    i = h.createElement.apply(this, arguments);
                if (null == i) return i;
                if (n)
                    for (var o = 2; o < arguments.length; o++) a(arguments[o], e);
                return u(i), i
            },
            createFactory: function(e) {
                var t = v.createElement.bind(null, e);
                return t.type = e, t
            },
            cloneElement: function(e, t, r) {
                for (var n = h.cloneElement.apply(this, arguments), i = 2; i < arguments.length; i++) a(arguments[i], n.type);
                return u(n), n
            }
        };
    e.exports = v
}, function(e, t, r) {
    "use strict";
    var n, i = r(6),
        o = r(73),
        a = r(14),
        s = r(3),
        u = {
            injectEmptyComponent: function(e) {
                n = i.createElement(e)
            }
        },
        h = function(e) {
            this._currentElement = null, this._rootNodeID = null, this._renderedComponent = e(n)
        };
    s(h.prototype, {
        construct: function(e) {},
        mountComponent: function(e, t, r) {
            return o.registerNullComponentID(e), this._rootNodeID = e, a.mountComponent(this._renderedComponent, e, t, r)
        },
        receiveComponent: function() {},
        unmountComponent: function(e, t, r) {
            a.unmountComponent(this._renderedComponent), o.deregisterNullComponentID(this._rootNodeID), this._rootNodeID = null, this._renderedComponent = null
        }
    }), h.injection = u, e.exports = h
}, function(e, t) {
    "use strict";

    function r(e) {
        return !!o[e]
    }

    function n(e) {
        o[e] = !0
    }

    function i(e) {
        delete o[e]
    }
    var o = {},
        a = {
            isNullComponentID: r,
            registerNullComponentID: n,
            deregisterNullComponentID: i
        };
    e.exports = a
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        try {
            return t(r, n)
        } catch (o) {
            return void(null === i && (i = o))
        }
    }
    var i = null,
        o = {
            invokeGuardedCallback: n,
            invokeGuardedCallbackWithCatch: n,
            rethrowCaughtError: function() {
                if (i) {
                    var e = i;
                    throw i = null, e
                }
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return o(document.documentElement, e)
    }
    var i = r(129),
        o = r(53),
        a = r(54),
        s = r(55),
        u = {
            hasSelectionCapabilities: function(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
            },
            getSelectionInformation: function() {
                var e = s();
                return {
                    focusedElem: e,
                    selectionRange: u.hasSelectionCapabilities(e) ? u.getSelection(e) : null
                }
            },
            restoreSelection: function(e) {
                var t = s(),
                    r = e.focusedElem,
                    i = e.selectionRange;
                t !== r && n(r) && (u.hasSelectionCapabilities(r) && u.setSelection(r, i), a(r))
            },
            getSelection: function(e) {
                var t;
                if ("selectionStart" in e) t = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var r = document.selection.createRange();
                    r.parentElement() === e && (t = {
                        start: -r.moveStart("character", -e.value.length),
                        end: -r.moveEnd("character", -e.value.length)
                    })
                } else t = i.getOffsets(e);
                return t || {
                    start: 0,
                    end: 0
                }
            },
            setSelection: function(e, t) {
                var r = t.start,
                    n = t.end;
                if ("undefined" == typeof n && (n = r), "selectionStart" in e) e.selectionStart = r, e.selectionEnd = Math.min(n, e.value.length);
                else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
                    var o = e.createTextRange();
                    o.collapse(!0), o.moveStart("character", r), o.moveEnd("character", n - r), o.select()
                } else i.setOffsets(e, t)
            }
        };
    e.exports = u
}, function(e, t, r) {
    "use strict";
    var n = r(155),
        i = /\/?>/,
        o = {
            CHECKSUM_ATTR_NAME: "data-react-checksum",
            addChecksumToMarkup: function(e) {
                var t = n(e);
                return e.replace(i, " " + o.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
            },
            canReuseMarkup: function(e, t) {
                var r = t.getAttribute(o.CHECKSUM_ATTR_NAME);
                r = r && parseInt(r, 10);
                var i = n(e);
                return i === r
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";
    var n = r(23),
        i = n({
            INSERT_MARKUP: null,
            MOVE_EXISTING: null,
            REMOVE_NODE: null,
            SET_MARKUP: null,
            TEXT_CONTENT: null
        });
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        if ("function" == typeof e.type) return e.type;
        var t = e.type,
            r = l[t];
        return null == r && (l[t] = r = h(t)), r
    }

    function i(e) {
        return c ? void 0 : u(!1), new c(e.type, e.props)
    }

    function o(e) {
        return new p(e)
    }

    function a(e) {
        return e instanceof p
    }
    var s = r(3),
        u = r(1),
        h = null,
        c = null,
        l = {},
        p = null,
        d = {
            injectGenericComponentClass: function(e) {
                c = e
            },
            injectTextComponentClass: function(e) {
                p = e
            },
            injectComponentClasses: function(e) {
                s(l, e)
            }
        },
        f = {
            getComponentClassForElement: n,
            createInternalComponent: i,
            createInstanceForText: o,
            isTextComponent: a,
            injection: d
        };
    e.exports = f
}, function(e, t, r) {
    "use strict";

    function n(e, t) {}
    var i = (r(2), {
        isMounted: function(e) {
            return !1
        },
        enqueueCallback: function(e, t) {},
        enqueueForceUpdate: function(e) {
            n(e, "forceUpdate")
        },
        enqueueReplaceState: function(e, t) {
            n(e, "replaceState")
        },
        enqueueSetState: function(e, t) {
            n(e, "setState")
        },
        enqueueSetProps: function(e, t) {
            n(e, "setProps")
        },
        enqueueReplaceProps: function(e, t) {
            n(e, "replaceProps")
        }
    });
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        function t(t, r, n, i, o, a) {
            if (i = i || w, a = a || n, null == r[n]) {
                var s = x[o];
                return t ? new Error("Required " + s + " `" + a + "` was not specified in " + ("`" + i + "`.")) : null
            }
            return e(r, n, i, o, a)
        }
        var r = t.bind(null, !1);
        return r.isRequired = t.bind(null, !0), r
    }

    function i(e) {
        function t(t, r, n, i, o) {
            var a = t[r],
                s = m(a);
            if (s !== e) {
                var u = x[i],
                    h = v(a);
                return new Error("Invalid " + u + " `" + o + "` of type " + ("`" + h + "` supplied to `" + n + "`, expected ") + ("`" + e + "`."))
            }
            return null
        }
        return n(t)
    }

    function o() {
        return n(b.thatReturns(null))
    }

    function a(e) {
        function t(t, r, n, i, o) {
            var a = t[r];
            if (!Array.isArray(a)) {
                var s = x[i],
                    u = m(a);
                return new Error("Invalid " + s + " `" + o + "` of type " + ("`" + u + "` supplied to `" + n + "`, expected an array."))
            }
            for (var h = 0; h < a.length; h++) {
                var c = e(a, h, n, i, o + "[" + h + "]");
                if (c instanceof Error) return c
            }
            return null
        }
        return n(t)
    }

    function s() {
        function e(e, t, r, n, i) {
            if (!y.isValidElement(e[t])) {
                var o = x[n];
                return new Error("Invalid " + o + " `" + i + "` supplied to " + ("`" + r + "`, expected a single ReactElement."))
            }
            return null
        }
        return n(e)
    }

    function u(e) {
        function t(t, r, n, i, o) {
            if (!(t[r] instanceof e)) {
                var a = x[i],
                    s = e.name || w,
                    u = g(t[r]);
                return new Error("Invalid " + a + " `" + o + "` of type " + ("`" + u + "` supplied to `" + n + "`, expected ") + ("instance of `" + s + "`."))
            }
            return null
        }
        return n(t)
    }

    function h(e) {
        function t(t, r, n, i, o) {
            for (var a = t[r], s = 0; s < e.length; s++)
                if (a === e[s]) return null;
            var u = x[i],
                h = JSON.stringify(e);
            return new Error("Invalid " + u + " `" + o + "` of value `" + a + "` " + ("supplied to `" + n + "`, expected one of " + h + "."))
        }
        return n(Array.isArray(e) ? t : function() {
            return new Error("Invalid argument supplied to oneOf, expected an instance of array.")
        })
    }

    function c(e) {
        function t(t, r, n, i, o) {
            var a = t[r],
                s = m(a);
            if ("object" !== s) {
                var u = x[i];
                return new Error("Invalid " + u + " `" + o + "` of type " + ("`" + s + "` supplied to `" + n + "`, expected an object."))
            }
            for (var h in a)
                if (a.hasOwnProperty(h)) {
                    var c = e(a, h, n, i, o + "." + h);
                    if (c instanceof Error) return c
                }
            return null
        }
        return n(t)
    }

    function l(e) {
        function t(t, r, n, i, o) {
            for (var a = 0; a < e.length; a++) {
                var s = e[a];
                if (null == s(t, r, n, i, o)) return null
            }
            var u = x[i];
            return new Error("Invalid " + u + " `" + o + "` supplied to " + ("`" + n + "`."))
        }
        return n(Array.isArray(e) ? t : function() {
            return new Error("Invalid argument supplied to oneOfType, expected an instance of array.")
        })
    }

    function p() {
        function e(e, t, r, n, i) {
            if (!f(e[t])) {
                var o = x[n];
                return new Error("Invalid " + o + " `" + i + "` supplied to " + ("`" + r + "`, expected a ReactNode."))
            }
            return null
        }
        return n(e)
    }

    function d(e) {
        function t(t, r, n, i, o) {
            var a = t[r],
                s = m(a);
            if ("object" !== s) {
                var u = x[i];
                return new Error("Invalid " + u + " `" + o + "` of type `" + s + "` " + ("supplied to `" + n + "`, expected `object`."))
            }
            for (var h in e) {
                var c = e[h];
                if (c) {
                    var l = c(a, h, n, i, o + "." + h);
                    if (l) return l
                }
            }
            return null
        }
        return n(t)
    }

    function f(e) {
        switch (typeof e) {
            case "number":
            case "string":
            case "undefined":
                return !0;
            case "boolean":
                return !e;
            case "object":
                if (Array.isArray(e)) return e.every(f);
                if (null === e || y.isValidElement(e)) return !0;
                var t = M(e);
                if (!t) return !1;
                var r, n = t.call(e);
                if (t !== e.entries) {
                    for (; !(r = n.next()).done;)
                        if (!f(r.value)) return !1
                } else
                    for (; !(r = n.next()).done;) {
                        var i = r.value;
                        if (i && !f(i[1])) return !1
                    }
                return !0;
            default:
                return !1
        }
    }

    function m(e) {
        var t = typeof e;
        return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : t
    }

    function v(e) {
        var t = m(e);
        if ("object" === t) {
            if (e instanceof Date) return "date";
            if (e instanceof RegExp) return "regexp"
        }
        return t
    }

    function g(e) {
        return e.constructor && e.constructor.name ? e.constructor.name : "<<anonymous>>"
    }
    var y = r(6),
        x = r(25),
        b = r(9),
        M = r(45),
        w = "<<anonymous>>",
        _ = {
            array: i("array"),
            bool: i("boolean"),
            func: i("function"),
            number: i("number"),
            object: i("object"),
            string: i("string"),
            any: o(),
            arrayOf: a,
            element: s(),
            instanceOf: u,
            node: p(),
            objectOf: c,
            oneOf: h,
            oneOfType: l,
            shape: d
        };
    e.exports = _
}, function(e, t) {
    "use strict";
    var r = {
            injectCreateReactRootIndex: function(e) {
                n.createReactRootIndex = e
            }
        },
        n = {
            createReactRootIndex: null,
            injection: r
        };
    e.exports = n
}, function(e, t) {
    "use strict";
    var r = {
        currentScrollLeft: 0,
        currentScrollTop: 0,
        refreshScrollValues: function(e) {
            r.currentScrollLeft = e.x, r.currentScrollTop = e.y
        }
    };
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        if (null == t ? i(!1) : void 0, null == e) return t;
        var r = Array.isArray(e),
            n = Array.isArray(t);
        return r && n ? (e.push.apply(e, t), e) : r ? (e.push(t), e) : n ? [e].concat(t) : [e, t]
    }
    var i = r(1);
    e.exports = n
}, function(e, t) {
    "use strict";
    var r = function(e, t, r) {
        Array.isArray(e) ? e.forEach(t, r) : e && t.call(r, e)
    };
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n() {
        return !o && i.canUseDOM && (o = "textContent" in document.documentElement ? "textContent" : "innerText"), o
    }
    var i = r(4),
        o = null;
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && n[e.type] || "textarea" === t)
    }
    var n = {
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
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = function() {
        function e(e, t) {
            for (var r = 0; r < t.length; r++) {
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t
        }
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = r(32),
        h = n(u),
        c = r(88),
        l = n(c),
        p = function(e) {
            function t() {
                return i(this, t), o(this, Object.getPrototypeOf(t).apply(this, arguments))
            }
            return a(t, e), s(t, [{
                key: "render",
                value: function() {
                    return h["default"].createElement("div", null, h["default"].createElement(l["default"], {
                        url: USER_STL_FILE_URL
                    }))
                }
            }]), t
        }(u.Component);
    t["default"] = p, e.exports = t["default"]
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    var s = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r), n && e(t, n), t
            }
        }(),
        u = r(32),
        h = n(u),
        c = r(58),
        l = n(c),
        p = r(89),
        d = n(p),
        f = r(102),
        m = n(f),
        v = r(164)(d["default"]),
        g = function(e) {
            function t() {
                return i(this, t), o(this, Object.getPrototypeOf(t).apply(this, arguments))
            }
            return a(t, e), s(t, [{
                key: "componentDidMount",
                value: function() {
                    function e() {
                        n = new d["default"].Scene, a = 1e4;
                        var e = new d["default"].DirectionalLight(16777215);
                        e.position.x = 0, e.position.y = 0, e.position.z = 1, e.position.normalize(), n.add(e);
                        var t = new d["default"].STLLoader;
                        t.load(h, function(e) {
                            e.center(), o = new d["default"].Mesh(e, new d["default"].MeshLambertMaterial({
                                    overdraw: !0,
                                    color: f
                                })), e.computeBoundingBox(), y = e.boundingBox.max.x - e.boundingBox.min.x, x = e.boundingBox.max.y - e.boundingBox.min.y, b = e.boundingBox.max.z - e.boundingBox.min.z, w && (o.rotation.x = 5, o.rotation.z = .25), n.add(o), r = new d["default"].PerspectiveCamera(30, c / p, 1, a),
                                r.position.set(0, 0, Math.max(3 * y, 3 * x, 3 * b)), n.add(r), i = new d["default"].WebGLRenderer, i.setSize(c, p), i.setClearColor(m, 1), g && (s = new v(r, l["default"].findDOMNode(M)), s.addEventListener("change", E)), l["default"].findDOMNode(M).replaceChild(i.domElement, l["default"].findDOMNode(M).firstChild), _()
                        })
                    }
                    var t = this,
                        r = void 0,
                        n = void 0,
                        i = void 0,
                        o = void 0,
                        a = void 0,
                        s = void 0,
                        u = this.props,
                        h = u.url,
                        c = u.width,
                        p = u.height,
                        f = u.modelColor,
                        m = u.backgroundColor,
                        g = u.orbitControls,
                        y = void 0,
                        x = void 0,
                        b = void 0,
                        M = this,
                        w = this.props.rotate;
                    e();
                    var _ = function C() {
                            w && requestAnimationFrame(C), t.props.orbitControls && s.update(), S()
                        },
                        E = function() {
                            w && (w = !1), S()
                        },
                        S = function() {
                            o && w && (o.rotation.z += .02), i.render(n, r)
                        }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.width,
                        r = e.height,
                        n = e.modelColor;
                    return h["default"].createElement("div", {
                        className: this.props.className,
                        style: {
                            width: t,
                            height: r
                        }
                    }, h["default"].createElement("div", {
                        style: {
                            textAlign: "center",
                            marginTop: r / 2 - 8
                        }
                    }, h["default"].createElement(m["default"], {
                        color: n,
                        size: "16px"
                    })))
                }
            }]), t
        }(u.Component);
    g.propTypes = {
        className: u.PropTypes.string,
        url: u.PropTypes.string,
        width: u.PropTypes.number,
        height: u.PropTypes.number,
        backgroundColor: u.PropTypes.string,
        modelColor: u.PropTypes.string,
        rotate: u.PropTypes.bool,
        orbitControls: u.PropTypes.bool
    }, g.defaultProps = {
        backgroundColor: "#fff",
        modelColor: "#afc74b",
        height: 300,
        width: DIV_WIDTH,
        rotate: !0,
        orbitControls: !0
    }, e.exports = g
}, function(e, t, r) {
    "use strict";
    var n = r(165);
    n.STLLoader = function(e) {
        this.manager = void 0 !== e ? e : n.DefaultLoadingManager
    }, n.STLLoader.prototype = {
        constructor: n.STLLoader,
        load: function(e, t, r, i) {
            var o = this,
                a = new n.XHRLoader(o.manager);
            a.setCrossOrigin(this.crossOrigin), a.setResponseType("arraybuffer"), a.load(e, function(e) {
                t(o.parse(e))
            }, r, i)
        },
        parse: function(e) {
            var t = function() {
                    var e, t, n, i;
                    if (i = new DataView(r), t = 50, n = i.getUint32(80, !0), e = 84 + n * t, e === i.byteLength) return !0;
                    for (var o = i.byteLength, a = 0; o > a; a++)
                        if (i.getUint8(a, !1) > 127) return !0;
                    return !1
                },
                r = this.ensureBinary(e);
            return t() ? this.parseBinary(r) : this.parseASCII(this.ensureString(e))
        },
        parseBinary: function(e) {
            for (var t, r, i, o, a, s, u, h, c = new DataView(e), l = c.getUint32(80, !0), p = !1, d = 0; 70 > d; d++) 1129270351 == c.getUint32(d, !1) && 82 == c.getUint8(d + 4) && 61 == c.getUint8(d + 5) && (p = !0, o = new Float32Array(3 * l * 3), a = c.getUint8(d + 6) / 255, s = c.getUint8(d + 7) / 255, u = c.getUint8(d + 8) / 255, h = c.getUint8(d + 9) / 255);
            for (var f = 84, m = 50, v = 0, g = new n.BufferGeometry, y = new Float32Array(3 * l * 3), x = new Float32Array(3 * l * 3), b = 0; l > b; b++) {
                var M = f + b * m,
                    w = c.getFloat32(M, !0),
                    _ = c.getFloat32(M + 4, !0),
                    E = c.getFloat32(M + 8, !0);
                if (p) {
                    var S = c.getUint16(M + 48, !0);
                    0 === (32768 & S) ? (t = (31 & S) / 31, r = (S >> 5 & 31) / 31, i = (S >> 10 & 31) / 31) : (t = a, r = s, i = u)
                }
                for (var C = 1; 3 >= C; C++) {
                    var T = M + 12 * C;
                    y[v] = c.getFloat32(T, !0), y[v + 1] = c.getFloat32(T + 4, !0), y[v + 2] = c.getFloat32(T + 8, !0), x[v] = w, x[v + 1] = _, x[v + 2] = E, p && (o[v] = t, o[v + 1] = r, o[v + 2] = i), v += 3
                }
            }
            return g.addAttribute("position", new n.BufferAttribute(y, 3)), g.addAttribute("normal", new n.BufferAttribute(x, 3)), p && (g.addAttribute("color", new n.BufferAttribute(o, 3)), g.hasColors = !0, g.alpha = h), g
        },
        parseASCII: function(e) {
            var t, r, i, o, a, s, u, h;
            for (t = new n.Geometry, o = /facet([\s\S]*?)endfacet/g; null !== (u = o.exec(e));) {
                for (h = u[0], a = /normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g; null !== (u = a.exec(h));) i = new n.Vector3(parseFloat(u[1]), parseFloat(u[3]), parseFloat(u[5]));
                for (s = /vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g; null !== (u = s.exec(h));) t.vertices.push(new n.Vector3(parseFloat(u[1]), parseFloat(u[3]), parseFloat(u[5])));
                r = t.vertices.length, t.faces.push(new n.Face3(r - 3, r - 2, r - 1, i))
            }
            return t.computeBoundingBox(), t.computeBoundingSphere(), t
        },
        ensureString: function(e) {
            if ("string" != typeof e) {
                for (var t = new Uint8Array(e), r = "", n = 0; n < e.byteLength; n++) r += String.fromCharCode(t[n]);
                return r
            }
            return e
        },
        ensureBinary: function(e) {
            if ("string" == typeof e) {
                for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) t[r] = 255 & e.charCodeAt(r);
                return t.buffer || t
            }
            return e
        }
    }, "undefined" == typeof DataView && (DataView = function(e, t, r) {
        this.buffer = e, this.byteOffset = t || 0, this.byteLength = r || e.byteLength || e.length, this._isString = "string" == typeof e
    }, DataView.prototype = {
        _getCharCodes: function(e, t, r) {
            t = t || 0, r = r || e.length;
            for (var n = t + r, i = [], o = t; n > o; o++) i.push(255 & e.charCodeAt(o));
            return i
        },
        _getBytes: function(e, t, r) {
            var n;
            if (void 0 === r && (r = this._littleEndian), t = void 0 === t ? this.byteOffset : this.byteOffset + t, void 0 === e && (e = this.byteLength - t), "number" != typeof t) throw new TypeError("DataView byteOffset is not a number");
            if (0 > e || t + e > this.byteLength) throw new Error("DataView length or (byteOffset+length) value is out of bounds");
            return n = this.isString ? this._getCharCodes(this.buffer, t, t + e) : this.buffer.slice(t, t + e), !r && e > 1 && (n instanceof Array || (n = Array.prototype.slice.call(n)), n.reverse()), n
        },
        getFloat64: function(e, t) {
            var r = this._getBytes(8, e, t),
                n = 1 - 2 * (r[7] >> 7),
                i = ((r[7] << 1 & 255) << 3 | r[6] >> 4) - 1023,
                o = (15 & r[6]) * Math.pow(2, 48) + r[5] * Math.pow(2, 40) + r[4] * Math.pow(2, 32) + r[3] * Math.pow(2, 24) + r[2] * Math.pow(2, 16) + r[1] * Math.pow(2, 8) + r[0];
            return 1024 === i ? 0 !== o ? NaN : n * (1 / 0) : -1023 === i ? n * o * Math.pow(2, -1074) : n * (1 + o * Math.pow(2, -52)) * Math.pow(2, i)
        },
        getFloat32: function(e, t) {
            var r = this._getBytes(4, e, t),
                n = 1 - 2 * (r[3] >> 7),
                i = (r[3] << 1 & 255 | r[2] >> 7) - 127,
                o = (127 & r[2]) << 16 | r[1] << 8 | r[0];
            return 128 === i ? 0 !== o ? NaN : n * (1 / 0) : -127 === i ? n * o * Math.pow(2, -149) : n * (1 + o * Math.pow(2, -23)) * Math.pow(2, i)
        },
        getInt32: function(e, t) {
            var r = this._getBytes(4, e, t);
            return r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0]
        },
        getUint32: function(e, t) {
            return this.getInt32(e, t) >>> 0
        },
        getInt16: function(e, t) {
            return this.getUint16(e, t) << 16 >> 16
        },
        getUint16: function(e, t) {
            var r = this._getBytes(2, e, t);
            return r[1] << 8 | r[0]
        },
        getInt8: function(e) {
            return this.getUint8(e) << 24 >> 24
        },
        getUint8: function(e) {
            return this._getBytes(1, e)[0]
        }
    }), e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        return e.replace(n, function(e, t) {
            return t.toUpperCase()
        })
    }
    var n = /-(.)/g;
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return i(e.replace(o, "ms-"))
    }
    var i = r(90),
        o = /^-ms-/;
    e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
    }

    function i(e) {
        return n(e) ? Array.isArray(e) ? e.slice() : o(e) : [e]
    }
    var o = r(101);
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e.match(c);
        return t && t[1].toLowerCase()
    }

    function i(e, t) {
        var r = h;
        h ? void 0 : u(!1);
        var i = n(e),
            o = i && s(i);
        if (o) {
            r.innerHTML = o[1] + e + o[2];
            for (var c = o[0]; c--;) r = r.lastChild
        } else r.innerHTML = e;
        var l = r.getElementsByTagName("script");
        l.length && (t ? void 0 : u(!1), a(l).forEach(t));
        for (var p = a(r.childNodes); r.lastChild;) r.removeChild(r.lastChild);
        return p
    }
    var o = r(4),
        a = r(92),
        s = r(56),
        u = r(1),
        h = o.canUseDOM ? document.createElement("div") : null,
        c = /^\s*<(\w+)/;
    e.exports = i
}, function(e, t) {
    "use strict";

    function r(e) {
        return e === window ? {
            x: window.pageXOffset || document.documentElement.scrollLeft,
            y: window.pageYOffset || document.documentElement.scrollTop
        } : {
            x: e.scrollLeft,
            y: e.scrollTop
        }
    }
    e.exports = r
}, function(e, t) {
    "use strict";

    function r(e) {
        return e.replace(n, "-$1").toLowerCase()
    }
    var n = /([A-Z])/g;
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return i(e).replace(o, "-ms-")
    }
    var i = r(95),
        o = /^ms-/;
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return i(e) && 3 == e.nodeType
    }
    var i = r(97);
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e, t, r) {
        if (!e) return null;
        var i = {};
        for (var o in e) n.call(e, o) && (i[o] = t.call(r, e[o], o, e));
        return i
    }
    var n = Object.prototype.hasOwnProperty;
    e.exports = r
}, function(e, t) {
    "use strict";

    function r(e) {
        var t = {};
        return function(r) {
            return t.hasOwnProperty(r) || (t[r] = e.call(this, r)), t[r]
        }
    }
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e.length;
        if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? i(!1) : void 0, "number" != typeof t ? i(!1) : void 0, 0 === t || t - 1 in e ? void 0 : i(!1), e.hasOwnProperty) try {
            return Array.prototype.slice.call(e)
        } catch (r) {}
        for (var n = Array(t), o = 0; t > o; o++) n[o] = e[o];
        return n
    }
    var i = r(1);
    e.exports = n
}, function(e, t, r) {
    var n = r(32),
        i = r(103),
        o = r(107),
        a = {
            "0%": {
                transform: "scaley(1.0)"
            },
            "50%": {
                transform: "scaley(0.4)"
            },
            "100%": {
                transform: "scaley(1.0)"
            }
        },
        s = o(a),
        u = n.createClass({
            displayName: "Loader",
            propTypes: {
                loading: n.PropTypes.bool,
                color: n.PropTypes.string,
                height: n.PropTypes.string,
                width: n.PropTypes.string,
                margin: n.PropTypes.string,
                radius: n.PropTypes.string
            },
            getDefaultProps: function() {
                return {
                    loading: !0,
                    color: "#ffffff",
                    height: "35px",
                    width: "4px",
                    margin: "2px",
                    radius: "2px"
                }
            },
            getLineStyle: function() {
                return {
                    backgroundColor: this.props.color,
                    height: this.props.height,
                    width: this.props.width,
                    margin: this.props.margin,
                    borderRadius: this.props.radius
                }
            },
            getAnimationStyle: function(e) {
                var t = [s, "1s", .1 * e + "s", "infinite", "cubic-bezier(.2,.68,.18,1.08)"].join(" "),
                    r = "both";
                return {
                    animation: t,
                    animationFillMode: r
                }
            },
            getStyle: function(e) {
                return i(this.getLineStyle(e), this.getAnimationStyle(e), {
                    display: "inline-block"
                })
            },
            renderLoader: function(e) {
                return e ? n.createElement("div", {
                    id: this.props.id,
                    className: this.props.className
                }, n.createElement("div", {
                    style: this.getStyle(1)
                }), n.createElement("div", {
                    style: this.getStyle(2)
                }), n.createElement("div", {
                    style: this.getStyle(3)
                }), n.createElement("div", {
                    style: this.getStyle(4)
                }), n.createElement("div", {
                    style: this.getStyle(5)
                })) : null
            },
            render: function() {
                return this.renderLoader(this.props.loading)
            }
        });
    e.exports = u
}, function(e, t, r) {
    "use strict";
    var n = r(106);
    e.exports = function(e, t) {
        for (var r = Object(e), i = Object.prototype.hasOwnProperty, o = 1; o < arguments.length; o++) {
            var a = arguments[o];
            if (null != a) {
                var s = Object(a);
                for (var u in s) i.call(s, u) && (r[u] = s[u])
            }
        }
        var h = {};
        for (var u in r) h[n(u)] = r[u];
        return h
    }
}, function(e, t) {
    "use strict";
    e.exports = document.createElement("div").style
}, function(e, t) {
    "use strict";
    var r;
    e.exports = function() {
        if (r) return r;
        var e = window.getComputedStyle(document.documentElement, ""),
            t = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1];
        return r = "-" + t + "-"
    }
}, function(e, t, r) {
    "use strict";
    var n, i = r(104),
        o = ["Moz", "Webkit", "O", "ms"],
        a = {
            flex: ["WebkitFlex", "WebkitBoxFlex"],
            order: ["WebkitOrder", "WebkitBoxOrdinalGroup"],
            flexDirection: ["WebkitFlexDirection", "WebkitBoxOrient", "WebkitBoxDirection"],
            alignItems: ["WebkitAlignItems", "WebkitBoxAlign"],
            justifyContent: ["WebkitJustifyContent", "WebkitBoxPack"],
            flexWrap: ["WebkitFlexWrap"],
            alignSelf: ["WebkitAlignSelf"]
        };
    e.exports = function(e, t) {
        var r;
        if (e in i) return e;
        if (a[e]) {
            for (var s = a[e], u = 0; u < s.length; ++u)
                if (s[u] in i) return s[u]
        } else {
            var h = e.charAt(0).toUpperCase() + e.substr(1);
            if (n) {
                if (r = n + h, r in i) return r
            } else
                for (var u = 0; u < o.length; ++u)
                    if (r = o[u] + h, r in i) return n = o[u], r
        }
        return t ? void 0 : e
    }
}, function(e, t, r) {
    "use strict";
    var n = r(108),
        i = r(105)(),
        o = 0;
    e.exports = function(e) {
        var t = "anim_" + ++o + +new Date,
            r = "@" + i + "keyframes " + t + " {";
        for (var a in e) {
            r += a + " {";
            for (var s in e[a]) {
                var u = ":" + e[a][s] + ";";
                r += i + s + u, r += s + u
            }
            r += "}"
        }
        return r += "}", n(r), t
    }
}, function(e, t) {
    "use strict";
    var r;
    e.exports = function(e) {
        r || (r = document.createElement("style"), document.getElementsByTagName("head")[0].appendChild(r), r = r.sheet || r.styleSheet);
        var t = (r.cssRules || r.rules).length;
        return r.insertRule(e, t), r
    }
}, function(e, t, r) {
    "use strict";
    var n = r(5),
        i = r(41),
        o = r(54),
        a = {
            componentDidMount: function() {
                this.props.autoFocus && o(i(this))
            }
        },
        s = {
            Mixin: a,
            focusDOMComponent: function() {
                o(n.getNode(this._rootNodeID))
            }
        };
    e.exports = s
}, function(e, t, r) {
    "use strict";

    function n() {
        var e = window.opera;
        return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
    }

    function i(e) {
        return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
    }

    function o(e) {
        switch (e) {
            case A.topCompositionStart:
                return P.compositionStart;
            case A.topCompositionEnd:
                return P.compositionEnd;
            case A.topCompositionUpdate:
                return P.compositionUpdate
        }
    }

    function a(e, t) {
        return e === A.topKeyDown && t.keyCode === M
    }

    function s(e, t) {
        switch (e) {
            case A.topKeyUp:
                return -1 !== b.indexOf(t.keyCode);
            case A.topKeyDown:
                return t.keyCode !== M;
            case A.topKeyPress:
            case A.topMouseDown:
            case A.topBlur:
                return !0;
            default:
                return !1
        }
    }

    function u(e) {
        var t = e.detail;
        return "object" == typeof t && "data" in t ? t.data : null
    }

    function h(e, t, r, n, i) {
        var h, c;
        if (w ? h = o(e) : D ? s(e, n) && (h = P.compositionEnd) : a(e, n) && (h = P.compositionStart), !h) return null;
        S && (D || h !== P.compositionStart ? h === P.compositionEnd && D && (c = D.getData()) : D = v.getPooled(t));
        var l = g.getPooled(h, r, n, i);
        if (c) l.data = c;
        else {
            var p = u(n);
            null !== p && (l.data = p)
        }
        return f.accumulateTwoPhaseDispatches(l), l
    }

    function c(e, t) {
        switch (e) {
            case A.topCompositionEnd:
                return u(t);
            case A.topKeyPress:
                var r = t.which;
                return r !== C ? null : (L = !0, T);
            case A.topTextInput:
                var n = t.data;
                return n === T && L ? null : n;
            default:
                return null
        }
    }

    function l(e, t) {
        if (D) {
            if (e === A.topCompositionEnd || s(e, t)) {
                var r = D.getData();
                return v.release(D), D = null, r
            }
            return null
        }
        switch (e) {
            case A.topPaste:
                return null;
            case A.topKeyPress:
                return t.which && !i(t) ? String.fromCharCode(t.which) : null;
            case A.topCompositionEnd:
                return S ? null : t.data;
            default:
                return null
        }
    }

    function p(e, t, r, n, i) {
        var o;
        if (o = E ? c(e, n) : l(e, n), !o) return null;
        var a = y.getPooled(P.beforeInput, r, n, i);
        return a.data = o, f.accumulateTwoPhaseDispatches(a), a
    }
    var d = r(10),
        f = r(20),
        m = r(4),
        v = r(118),
        g = r(148),
        y = r(151),
        x = r(12),
        b = [9, 13, 27, 32],
        M = 229,
        w = m.canUseDOM && "CompositionEvent" in window,
        _ = null;
    m.canUseDOM && "documentMode" in document && (_ = document.documentMode);
    var E = m.canUseDOM && "TextEvent" in window && !_ && !n(),
        S = m.canUseDOM && (!w || _ && _ > 8 && 11 >= _),
        C = 32,
        T = String.fromCharCode(C),
        A = d.topLevelTypes,
        P = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onBeforeInput: null
                    }),
                    captured: x({
                        onBeforeInputCapture: null
                    })
                },
                dependencies: [A.topCompositionEnd, A.topKeyPress, A.topTextInput, A.topPaste]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCompositionEnd: null
                    }),
                    captured: x({
                        onCompositionEndCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topCompositionEnd, A.topKeyDown, A.topKeyPress, A.topKeyUp, A.topMouseDown]
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCompositionStart: null
                    }),
                    captured: x({
                        onCompositionStartCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topCompositionStart, A.topKeyDown, A.topKeyPress, A.topKeyUp, A.topMouseDown]
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCompositionUpdate: null
                    }),
                    captured: x({
                        onCompositionUpdateCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topCompositionUpdate, A.topKeyDown, A.topKeyPress, A.topKeyUp, A.topMouseDown]
            }
        },
        L = !1,
        D = null,
        R = {
            eventTypes: P,
            extractEvents: function(e, t, r, n, i) {
                return [h(e, t, r, n, i), p(e, t, r, n, i)]
            }
        };
    e.exports = R
}, function(e, t, r) {
    "use strict";
    var n = r(59),
        i = r(4),
        o = r(7),
        a = (r(91), r(156)),
        s = r(96),
        u = r(100),
        h = (r(2), u(function(e) {
            return s(e)
        })),
        c = !1,
        l = "cssFloat";
    if (i.canUseDOM) {
        var p = document.createElement("div").style;
        try {
            p.font = ""
        } catch (d) {
            c = !0
        }
        void 0 === document.documentElement.style.cssFloat && (l = "styleFloat")
    }
    var f = {
        createMarkupForStyles: function(e) {
            var t = "";
            for (var r in e)
                if (e.hasOwnProperty(r)) {
                    var n = e[r];
                    null != n && (t += h(r) + ":", t += a(r, n) + ";")
                }
            return t || null
        },
        setValueForStyles: function(e, t) {
            var r = e.style;
            for (var i in t)
                if (t.hasOwnProperty(i)) {
                    var o = a(i, t[i]);
                    if ("float" === i && (i = l), o) r[i] = o;
                    else {
                        var s = c && n.shorthandPropertyExpansions[i];
                        if (s)
                            for (var u in s) r[u] = "";
                        else r[i] = ""
                    }
                }
        }
    };
    o.measureMethods(f, "CSSPropertyOperations", {
        setValueForStyles: "setValueForStyles"
    }), e.exports = f
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e.nodeName && e.nodeName.toLowerCase();
        return "select" === t || "input" === t && "file" === e.type
    }

    function i(e) {
        var t = _.getPooled(P.change, D, e, E(e));
        b.accumulateTwoPhaseDispatches(t), w.batchedUpdates(o, t)
    }

    function o(e) {
        x.enqueueEvents(e), x.processEventQueue(!1)
    }

    function a(e, t) {
        L = e, D = t, L.attachEvent("onchange", i)
    }

    function s() {
        L && (L.detachEvent("onchange", i), L = null, D = null)
    }

    function u(e, t, r) {
        return e === A.topChange ? r : void 0
    }

    function h(e, t, r) {
        e === A.topFocus ? (s(), a(t, r)) : e === A.topBlur && s()
    }

    function c(e, t) {
        L = e, D = t, R = e.value, O = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(L, "value", U), L.attachEvent("onpropertychange", p)
    }

    function l() {
        L && (delete L.value, L.detachEvent("onpropertychange", p), L = null, D = null, R = null, O = null)
    }

    function p(e) {
        if ("value" === e.propertyName) {
            var t = e.srcElement.value;
            t !== R && (R = t, i(e))
        }
    }

    function d(e, t, r) {
        return e === A.topInput ? r : void 0
    }

    function f(e, t, r) {
        e === A.topFocus ? (l(), c(t, r)) : e === A.topBlur && l()
    }

    function m(e, t, r) {
        return e !== A.topSelectionChange && e !== A.topKeyUp && e !== A.topKeyDown || !L || L.value === R ? void 0 : (R = L.value, D)
    }

    function v(e) {
        return e.nodeName && "input" === e.nodeName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
    }

    function g(e, t, r) {
        return e === A.topClick ? r : void 0
    }
    var y = r(10),
        x = r(19),
        b = r(20),
        M = r(4),
        w = r(8),
        _ = r(15),
        E = r(44),
        S = r(47),
        C = r(86),
        T = r(12),
        A = y.topLevelTypes,
        P = {
            change: {
                phasedRegistrationNames: {
                    bubbled: T({
                        onChange: null
                    }),
                    captured: T({
                        onChangeCapture: null
                    })
                },
                dependencies: [A.topBlur, A.topChange, A.topClick, A.topFocus, A.topInput, A.topKeyDown, A.topKeyUp, A.topSelectionChange]
            }
        },
        L = null,
        D = null,
        R = null,
        O = null,
        k = !1;
    M.canUseDOM && (k = S("change") && (!("documentMode" in document) || document.documentMode > 8));
    var N = !1;
    M.canUseDOM && (N = S("input") && (!("documentMode" in document) || document.documentMode > 9));
    var U = {
            get: function() {
                return O.get.call(this)
            },
            set: function(e) {
                R = "" + e, O.set.call(this, e)
            }
        },
        I = {
            eventTypes: P,
            extractEvents: function(e, t, r, i, o) {
                var a, s;
                if (n(t) ? k ? a = u : s = h : C(t) ? N ? a = d : (a = m, s = f) : v(t) && (a = g), a) {
                    var c = a(e, t, r);
                    if (c) {
                        var l = _.getPooled(P.change, c, i, o);
                        return l.type = "change", b.accumulateTwoPhaseDispatches(l), l
                    }
                }
                s && s(e, t, r)
            }
        };
    e.exports = I
}, function(e, t) {
    "use strict";
    var r = 0,
        n = {
            createReactRootIndex: function() {
                return r++
            }
        };
    e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e.substring(1, e.indexOf(" "))
    }
    var i = r(4),
        o = r(93),
        a = r(9),
        s = r(56),
        u = r(1),
        h = /^(<[^ \/>]+)/,
        c = "data-danger-index",
        l = {
            dangerouslyRenderMarkup: function(e) {
                i.canUseDOM ? void 0 : u(!1);
                for (var t, r = {}, l = 0; l < e.length; l++) e[l] ? void 0 : u(!1), t = n(e[l]), t = s(t) ? t : "*", r[t] = r[t] || [], r[t][l] = e[l];
                var p = [],
                    d = 0;
                for (t in r)
                    if (r.hasOwnProperty(t)) {
                        var f, m = r[t];
                        for (f in m)
                            if (m.hasOwnProperty(f)) {
                                var v = m[f];
                                m[f] = v.replace(h, "$1 " + c + '="' + f + '" ')
                            }
                        for (var g = o(m.join(""), a), y = 0; y < g.length; ++y) {
                            var x = g[y];
                            x.hasAttribute && x.hasAttribute(c) && (f = +x.getAttribute(c), x.removeAttribute(c), p.hasOwnProperty(f) ? u(!1) : void 0, p[f] = x, d += 1)
                        }
                    }
                return d !== p.length ? u(!1) : void 0, p.length !== e.length ? u(!1) : void 0, p
            },
            dangerouslyReplaceNodeWithMarkup: function(e, t) {
                i.canUseDOM ? void 0 : u(!1), t ? void 0 : u(!1), "html" === e.tagName.toLowerCase() ? u(!1) : void 0;
                var r;
                r = "string" == typeof t ? o(t, a)[0] : t, e.parentNode.replaceChild(r, e)
            }
        };
    e.exports = l
}, function(e, t, r) {
    "use strict";
    var n = r(12),
        i = [n({
            ResponderEventPlugin: null
        }), n({
            SimpleEventPlugin: null
        }), n({
            TapEventPlugin: null
        }), n({
            EnterLeaveEventPlugin: null
        }), n({
            ChangeEventPlugin: null
        }), n({
            SelectEventPlugin: null
        }), n({
            BeforeInputEventPlugin: null
        })];
    e.exports = i
}, function(e, t, r) {
    "use strict";
    var n = r(10),
        i = r(20),
        o = r(27),
        a = r(5),
        s = r(12),
        u = n.topLevelTypes,
        h = a.getFirstReactDOM,
        c = {
            mouseEnter: {
                registrationName: s({
                    onMouseEnter: null
                }),
                dependencies: [u.topMouseOut, u.topMouseOver]
            },
            mouseLeave: {
                registrationName: s({
                    onMouseLeave: null
                }),
                dependencies: [u.topMouseOut, u.topMouseOver]
            }
        },
        l = [null, null],
        p = {
            eventTypes: c,
            extractEvents: function(e, t, r, n, s) {
                if (e === u.topMouseOver && (n.relatedTarget || n.fromElement)) return null;
                if (e !== u.topMouseOut && e !== u.topMouseOver) return null;
                var p;
                if (t.window === t) p = t;
                else {
                    var d = t.ownerDocument;
                    p = d ? d.defaultView || d.parentWindow : window
                }
                var f, m, v = "",
                    g = "";
                if (e === u.topMouseOut ? (f = t, v = r, m = h(n.relatedTarget || n.toElement), m ? g = a.getID(m) : m = p, m = m || p) : (f = p, m = t, g = r), f === m) return null;
                var y = o.getPooled(c.mouseLeave, v, n, s);
                y.type = "mouseleave", y.target = f, y.relatedTarget = m;
                var x = o.getPooled(c.mouseEnter, g, n, s);
                return x.type = "mouseenter", x.target = m, x.relatedTarget = f, i.accumulateEnterLeaveDispatches(y, x, v, g), l[0] = y, l[1] = x, l
            }
        };
    e.exports = p
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return e === v.topMouseUp || e === v.topTouchEnd || e === v.topTouchCancel
    }

    function i(e) {
        return e === v.topMouseMove || e === v.topTouchMove
    }

    function o(e) {
        return e === v.topMouseDown || e === v.topTouchStart
    }

    function a(e, t, r, n) {
        var i = e.type || "unknown-event";
        e.currentTarget = m.Mount.getNode(n), t ? d.invokeGuardedCallbackWithCatch(i, r, e, n) : d.invokeGuardedCallback(i, r, e, n), e.currentTarget = null
    }

    function s(e, t) {
        var r = e._dispatchListeners,
            n = e._dispatchIDs;
        if (Array.isArray(r))
            for (var i = 0; i < r.length && !e.isPropagationStopped(); i++) a(e, t, r[i], n[i]);
        else r && a(e, t, r, n);
        e._dispatchListeners = null, e._dispatchIDs = null
    }

    function u(e) {
        var t = e._dispatchListeners,
            r = e._dispatchIDs;
        if (Array.isArray(t)) {
            for (var n = 0; n < t.length && !e.isPropagationStopped(); n++)
                if (t[n](e, r[n])) return r[n]
        } else if (t && t(e, r)) return r;
        return null
    }

    function h(e) {
        var t = u(e);
        return e._dispatchIDs = null, e._dispatchListeners = null, t
    }

    function c(e) {
        var t = e._dispatchListeners,
            r = e._dispatchIDs;
        Array.isArray(t) ? f(!1) : void 0;
        var n = t ? t(e, r) : null;
        return e._dispatchListeners = null, e._dispatchIDs = null, n
    }

    function l(e) {
        return !!e._dispatchListeners
    }
    var p = r(10),
        d = r(74),
        f = r(1),
        m = (r(2), {
            Mount: null,
            injectMount: function(e) {
                m.Mount = e
            }
        }),
        v = p.topLevelTypes,
        g = {
            isEndish: n,
            isMoveish: i,
            isStartish: o,
            executeDirectDispatch: c,
            executeDispatchesInOrder: s,
            executeDispatchesInOrderStopAtTrue: h,
            hasDispatches: l,
            getNode: function(e) {
                return m.Mount.getNode(e)
            },
            getID: function(e) {
                return m.Mount.getID(e)
            },
            injection: m
        };
    e.exports = g
}, function(e, t, r) {
    "use strict";

    function n(e) {
        this._root = e, this._startText = this.getText(), this._fallbackText = null
    }
    var i = r(13),
        o = r(3),
        a = r(85);
    o(n.prototype, {
        destructor: function() {
            this._root = null, this._startText = null, this._fallbackText = null
        },
        getText: function() {
            return "value" in this._root ? this._root.value : this._root[a()]
        },
        getData: function() {
            if (this._fallbackText) return this._fallbackText;
            var e, t, r = this._startText,
                n = r.length,
                i = this.getText(),
                o = i.length;
            for (e = 0; n > e && r[e] === i[e]; e++);
            var a = n - e;
            for (t = 1; a >= t && r[n - t] === i[o - t]; t++);
            var s = t > 1 ? 1 - t : void 0;
            return this._fallbackText = i.slice(e, s), this._fallbackText
        }
    }), i.addPoolingTo(n), e.exports = n
}, function(e, t, r) {
    "use strict";
    var n, i = r(16),
        o = r(4),
        a = i.injection.MUST_USE_ATTRIBUTE,
        s = i.injection.MUST_USE_PROPERTY,
        u = i.injection.HAS_BOOLEAN_VALUE,
        h = i.injection.HAS_SIDE_EFFECTS,
        c = i.injection.HAS_NUMERIC_VALUE,
        l = i.injection.HAS_POSITIVE_NUMERIC_VALUE,
        p = i.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
    if (o.canUseDOM) {
        var d = document.implementation;
        n = d && d.hasFeature && d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
    }
    var f = {
        isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
        Properties: {
            accept: null,
            acceptCharset: null,
            accessKey: null,
            action: null,
            allowFullScreen: a | u,
            allowTransparency: a,
            alt: null,
            async: u,
            autoComplete: null,
            autoPlay: u,
            capture: a | u,
            cellPadding: null,
            cellSpacing: null,
            charSet: a,
            challenge: a,
            checked: s | u,
            classID: a,
            className: n ? a : s,
            cols: a | l,
            colSpan: null,
            content: null,
            contentEditable: null,
            contextMenu: a,
            controls: s | u,
            coords: null,
            crossOrigin: null,
            data: null,
            dateTime: a,
            "default": u,
            defer: u,
            dir: null,
            disabled: a | u,
            download: p,
            draggable: null,
            encType: null,
            form: a,
            formAction: a,
            formEncType: a,
            formMethod: a,
            formNoValidate: u,
            formTarget: a,
            frameBorder: a,
            headers: null,
            height: a,
            hidden: a | u,
            high: null,
            href: null,
            hrefLang: null,
            htmlFor: null,
            httpEquiv: null,
            icon: null,
            id: s,
            inputMode: a,
            integrity: null,
            is: a,
            keyParams: a,
            keyType: a,
            kind: null,
            label: null,
            lang: null,
            list: a,
            loop: s | u,
            low: null,
            manifest: a,
            marginHeight: null,
            marginWidth: null,
            max: null,
            maxLength: a,
            media: a,
            mediaGroup: null,
            method: null,
            min: null,
            minLength: a,
            multiple: s | u,
            muted: s | u,
            name: null,
            nonce: a,
            noValidate: u,
            open: u,
            optimum: null,
            pattern: null,
            placeholder: null,
            poster: null,
            preload: null,
            radioGroup: null,
            readOnly: s | u,
            rel: null,
            required: u,
            reversed: u,
            role: a,
            rows: a | l,
            rowSpan: null,
            sandbox: null,
            scope: null,
            scoped: u,
            scrolling: null,
            seamless: a | u,
            selected: s | u,
            shape: null,
            size: a | l,
            sizes: a,
            span: l,
            spellCheck: null,
            src: null,
            srcDoc: s,
            srcLang: null,
            srcSet: a,
            start: c,
            step: null,
            style: null,
            summary: null,
            tabIndex: null,
            target: null,
            title: null,
            type: null,
            useMap: null,
            value: s | h,
            width: a,
            wmode: a,
            wrap: null,
            about: a,
            datatype: a,
            inlist: a,
            prefix: a,
            property: a,
            resource: a,
            "typeof": a,
            vocab: a,
            autoCapitalize: a,
            autoCorrect: a,
            autoSave: null,
            color: null,
            itemProp: a,
            itemScope: a | u,
            itemType: a,
            itemID: a,
            itemRef: a,
            results: null,
            security: a,
            unselectable: a
        },
        DOMAttributeNames: {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv"
        },
        DOMPropertyNames: {
            autoComplete: "autocomplete",
            autoFocus: "autofocus",
            autoPlay: "autoplay",
            autoSave: "autosave",
            encType: "encoding",
            hrefLang: "hreflang",
            radioGroup: "radiogroup",
            spellCheck: "spellcheck",
            srcDoc: "srcdoc",
            srcSet: "srcset"
        }
    };
    e.exports = f
}, function(e, t, r) {
    "use strict";
    var n = r(65),
        i = r(130),
        o = r(135),
        a = r(3),
        s = r(157),
        u = {};
    a(u, o), a(u, {
        findDOMNode: s("findDOMNode", "ReactDOM", "react-dom", n, n.findDOMNode),
        render: s("render", "ReactDOM", "react-dom", n, n.render),
        unmountComponentAtNode: s("unmountComponentAtNode", "ReactDOM", "react-dom", n, n.unmountComponentAtNode),
        renderToString: s("renderToString", "ReactDOMServer", "react-dom/server", i, i.renderToString),
        renderToStaticMarkup: s("renderToStaticMarkup", "ReactDOMServer", "react-dom/server", i, i.renderToStaticMarkup)
    }), u.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = n, u.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = i, e.exports = u
}, function(e, t, r) {
    "use strict";
    var n = (r(21), r(41)),
        i = (r(2), "_getDOMNodeDidWarn"),
        o = {
            getDOMNode: function() {
                return this.constructor[i] = !0, n(this)
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        var n = void 0 === e[r];
        null != t && n && (e[r] = o(t, null))
    }
    var i = r(14),
        o = r(46),
        a = r(49),
        s = r(50),
        u = (r(2), {
            instantiateChildren: function(e, t, r) {
                if (null == e) return null;
                var i = {};
                return s(e, n, i), i
            },
            updateChildren: function(e, t, r, n) {
                if (!t && !e) return null;
                var s;
                for (s in t)
                    if (t.hasOwnProperty(s)) {
                        var u = e && e[s],
                            h = u && u._currentElement,
                            c = t[s];
                        if (null != u && a(h, c)) i.receiveComponent(u, c, r, n), t[s] = u;
                        else {
                            u && i.unmountComponent(u, s);
                            var l = o(c, null);
                            t[s] = l
                        }
                    }
                for (s in e) !e.hasOwnProperty(s) || t && t.hasOwnProperty(s) || i.unmountComponent(e[s]);
                return t
            },
            unmountChildren: function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t)) {
                        var r = e[t];
                        i.unmountComponent(r)
                    }
            }
        });
    e.exports = u
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = e._currentElement._owner || null;
        if (t) {
            var r = t.getName();
            if (r) return " Check the render method of `" + r + "`."
        }
        return ""
    }

    function i(e) {}
    var o = r(37),
        a = r(11),
        s = r(6),
        u = r(21),
        h = r(7),
        c = r(26),
        l = (r(25), r(14)),
        p = r(39),
        d = r(3),
        f = r(18),
        m = r(1),
        v = r(49);
    r(2), i.prototype.render = function() {
        var e = u.get(this)._currentElement.type;
        return e(this.props, this.context, this.updater)
    };
    var g = 1,
        y = {
            construct: function(e) {
                this._currentElement = e, this._rootNodeID = null, this._instance = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null
            },
            mountComponent: function(e, t, r) {
                this._context = r, this._mountOrder = g++, this._rootNodeID = e;
                var n, o, a = this._processProps(this._currentElement.props),
                    h = this._processContext(r),
                    c = this._currentElement.type,
                    d = "prototype" in c;
                d && (n = new c(a, h, p)), (!d || null === n || n === !1 || s.isValidElement(n)) && (o = n, n = new i(c)), n.props = a, n.context = h, n.refs = f, n.updater = p, this._instance = n, u.set(n, this);
                var v = n.state;
                void 0 === v && (n.state = v = null), "object" != typeof v || Array.isArray(v) ? m(!1) : void 0, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, n.componentWillMount && (n.componentWillMount(), this._pendingStateQueue && (n.state = this._processPendingState(n.props, n.context))), void 0 === o && (o = this._renderValidatedComponent()), this._renderedComponent = this._instantiateReactComponent(o);
                var y = l.mountComponent(this._renderedComponent, e, t, this._processChildContext(r));
                return n.componentDidMount && t.getReactMountReady().enqueue(n.componentDidMount, n), y
            },
            unmountComponent: function() {
                var e = this._instance;
                e.componentWillUnmount && e.componentWillUnmount(), l.unmountComponent(this._renderedComponent), this._renderedComponent = null, this._instance = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = null, this._topLevelWrapper = null, u.remove(e)
            },
            _maskContext: function(e) {
                var t = null,
                    r = this._currentElement.type,
                    n = r.contextTypes;
                if (!n) return f;
                t = {};
                for (var i in n) t[i] = e[i];
                return t
            },
            _processContext: function(e) {
                var t = this._maskContext(e);
                return t
            },
            _processChildContext: function(e) {
                var t = this._currentElement.type,
                    r = this._instance,
                    n = r.getChildContext && r.getChildContext();
                if (n) {
                    "object" != typeof t.childContextTypes ? m(!1) : void 0;
                    for (var i in n) i in t.childContextTypes ? void 0 : m(!1);
                    return d({}, e, n)
                }
                return e
            },
            _processProps: function(e) {
                return e
            },
            _checkPropTypes: function(e, t, r) {
                var i = this.getName();
                for (var o in e)
                    if (e.hasOwnProperty(o)) {
                        var a;
                        try {
                            "function" != typeof e[o] ? m(!1) : void 0, a = e[o](t, o, i, r)
                        } catch (s) {
                            a = s
                        }
                        a instanceof Error && (n(this), r === c.prop)
                    }
            },
            receiveComponent: function(e, t, r) {
                var n = this._currentElement,
                    i = this._context;
                this._pendingElement = null, this.updateComponent(t, n, e, i, r)
            },
            performUpdateIfNecessary: function(e) {
                null != this._pendingElement && l.receiveComponent(this, this._pendingElement || this._currentElement, e, this._context), (null !== this._pendingStateQueue || this._pendingForceUpdate) && this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context)
            },
            updateComponent: function(e, t, r, n, i) {
                var o, a = this._instance,
                    s = this._context === i ? a.context : this._processContext(i);
                t === r ? o = r.props : (o = this._processProps(r.props), a.componentWillReceiveProps && a.componentWillReceiveProps(o, s));
                var u = this._processPendingState(o, s),
                    h = this._pendingForceUpdate || !a.shouldComponentUpdate || a.shouldComponentUpdate(o, u, s);
                h ? (this._pendingForceUpdate = !1, this._performComponentUpdate(r, o, u, s, e, i)) : (this._currentElement = r, this._context = i, a.props = o, a.state = u, a.context = s)
            },
            _processPendingState: function(e, t) {
                var r = this._instance,
                    n = this._pendingStateQueue,
                    i = this._pendingReplaceState;
                if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !n) return r.state;
                if (i && 1 === n.length) return n[0];
                for (var o = d({}, i ? n[0] : r.state), a = i ? 1 : 0; a < n.length; a++) {
                    var s = n[a];
                    d(o, "function" == typeof s ? s.call(r, o, e, t) : s)
                }
                return o
            },
            _performComponentUpdate: function(e, t, r, n, i, o) {
                var a, s, u, h = this._instance,
                    c = Boolean(h.componentDidUpdate);
                c && (a = h.props, s = h.state, u = h.context), h.componentWillUpdate && h.componentWillUpdate(t, r, n), this._currentElement = e, this._context = o, h.props = t, h.state = r, h.context = n, this._updateRenderedComponent(i, o), c && i.getReactMountReady().enqueue(h.componentDidUpdate.bind(h, a, s, u), h)
            },
            _updateRenderedComponent: function(e, t) {
                var r = this._renderedComponent,
                    n = r._currentElement,
                    i = this._renderValidatedComponent();
                if (v(n, i)) l.receiveComponent(r, i, e, this._processChildContext(t));
                else {
                    var o = this._rootNodeID,
                        a = r._rootNodeID;
                    l.unmountComponent(r), this._renderedComponent = this._instantiateReactComponent(i);
                    var s = l.mountComponent(this._renderedComponent, o, e, this._processChildContext(t));
                    this._replaceNodeWithMarkupByID(a, s)
                }
            },
            _replaceNodeWithMarkupByID: function(e, t) {
                o.replaceNodeWithMarkupByID(e, t)
            },
            _renderValidatedComponentWithoutOwnerOrContext: function() {
                var e = this._instance,
                    t = e.render();
                return t
            },
            _renderValidatedComponent: function() {
                var e;
                a.current = this;
                try {
                    e = this._renderValidatedComponentWithoutOwnerOrContext()
                } finally {
                    a.current = null
                }
                return null === e || e === !1 || s.isValidElement(e) ? void 0 : m(!1), e
            },
            attachRef: function(e, t) {
                var r = this.getPublicInstance();
                null == r ? m(!1) : void 0;
                var n = t.getPublicInstance(),
                    i = r.refs === f ? r.refs = {} : r.refs;
                i[e] = n
            },
            detachRef: function(e) {
                var t = this.getPublicInstance().refs;
                delete t[e]
            },
            getName: function() {
                var e = this._currentElement.type,
                    t = this._instance && this._instance.constructor;
                return e.displayName || t && t.displayName || e.name || t && t.name || null
            },
            getPublicInstance: function() {
                var e = this._instance;
                return e instanceof i ? null : e
            },
            _instantiateReactComponent: null
        };
    h.measureMethods(y, "ReactCompositeComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent",
        _renderValidatedComponent: "_renderValidatedComponent"
    });
    var x = {
        Mixin: y
    };
    e.exports = x
}, function(e, t) {
    "use strict";
    var r = {
            onClick: !0,
            onDoubleClick: !0,
            onMouseDown: !0,
            onMouseMove: !0,
            onMouseUp: !0,
            onClickCapture: !0,
            onDoubleClickCapture: !0,
            onMouseDownCapture: !0,
            onMouseMoveCapture: !0,
            onMouseUpCapture: !0
        },
        n = {
            getNativeProps: function(e, t, n) {
                if (!t.disabled) return t;
                var i = {};
                for (var o in t) t.hasOwnProperty(o) && !r[o] && (i[o] = t[o]);
                return i
            }
        };
    e.exports = n
}, function(e, t, r) {
    "use strict";

    function n() {
        return this
    }

    function i() {
        var e = this._reactInternalComponent;
        return !!e
    }

    function o() {}

    function a(e, t) {
        var r = this._reactInternalComponent;
        r && (R.enqueueSetPropsInternal(r, e), t && R.enqueueCallbackInternal(r, t))
    }

    function s(e, t) {
        var r = this._reactInternalComponent;
        r && (R.enqueueReplacePropsInternal(r, e), t && R.enqueueCallbackInternal(r, t))
    }

    function u(e, t) {
        t && (null != t.dangerouslySetInnerHTML && (null != t.children ? U(!1) : void 0, "object" == typeof t.dangerouslySetInnerHTML && X in t.dangerouslySetInnerHTML ? void 0 : U(!1)), null != t.style && "object" != typeof t.style ? U(!1) : void 0)
    }

    function h(e, t, r, n) {
        var i = P.findReactContainerForID(e);
        if (i) {
            var o = i.nodeType === q ? i.ownerDocument : i;
            G(t, o)
        }
        n.getReactMountReady().enqueue(c, {
            id: e,
            registrationName: t,
            listener: r
        })
    }

    function c() {
        var e = this;
        w.putListener(e.id, e.registrationName, e.listener)
    }

    function l() {
        var e = this;
        e._rootNodeID ? void 0 : U(!1);
        var t = P.getNode(e._rootNodeID);
        switch (t ? void 0 : U(!1), e._tag) {
            case "iframe":
                e._wrapperState.listeners = [w.trapBubbledEvent(M.topLevelTypes.topLoad, "load", t)];
                break;
            case "video":
            case "audio":
                e._wrapperState.listeners = [];
                for (var r in Y) Y.hasOwnProperty(r) && e._wrapperState.listeners.push(w.trapBubbledEvent(M.topLevelTypes[r], Y[r], t));
                break;
            case "img":
                e._wrapperState.listeners = [w.trapBubbledEvent(M.topLevelTypes.topError, "error", t), w.trapBubbledEvent(M.topLevelTypes.topLoad, "load", t)];
                break;
            case "form":
                e._wrapperState.listeners = [w.trapBubbledEvent(M.topLevelTypes.topReset, "reset", t), w.trapBubbledEvent(M.topLevelTypes.topSubmit, "submit", t)]
        }
    }

    function p() {
        S.mountReadyWrapper(this)
    }

    function d() {
        T.postUpdateWrapper(this)
    }

    function f(e) {
        $.call(J, e) || (Q.test(e) ? void 0 : U(!1), J[e] = !0)
    }

    function m(e, t) {
        return e.indexOf("-") >= 0 || null != t.is
    }

    function v(e) {
        f(e), this._tag = e.toLowerCase(), this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._rootNodeID = null, this._wrapperState = null, this._topLevelWrapper = null, this._nodeWithLegacyProperties = null
    }
    var g = r(109),
        y = r(111),
        x = r(16),
        b = r(34),
        M = r(10),
        w = r(24),
        _ = r(36),
        E = r(124),
        S = r(127),
        C = r(128),
        T = r(67),
        A = r(131),
        P = r(5),
        L = r(136),
        D = r(7),
        R = r(39),
        O = r(3),
        k = r(29),
        N = r(30),
        U = r(1),
        I = (r(47), r(12)),
        F = r(31),
        B = r(48),
        V = (r(57), r(51), r(2), w.deleteListener),
        G = w.listenTo,
        z = w.registrationNameModules,
        H = {
            string: !0,
            number: !0
        },
        j = I({
            children: null
        }),
        W = I({
            style: null
        }),
        X = I({
            __html: null
        }),
        q = 1,
        Y = {
            topAbort: "abort",
            topCanPlay: "canplay",
            topCanPlayThrough: "canplaythrough",
            topDurationChange: "durationchange",
            topEmptied: "emptied",
            topEncrypted: "encrypted",
            topEnded: "ended",
            topError: "error",
            topLoadedData: "loadeddata",
            topLoadedMetadata: "loadedmetadata",
            topLoadStart: "loadstart",
            topPause: "pause",
            topPlay: "play",
            topPlaying: "playing",
            topProgress: "progress",
            topRateChange: "ratechange",
            topSeeked: "seeked",
            topSeeking: "seeking",
            topStalled: "stalled",
            topSuspend: "suspend",
            topTimeUpdate: "timeupdate",
            topVolumeChange: "volumechange",
            topWaiting: "waiting"
        },
        K = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        },
        Z = {
            listing: !0,
            pre: !0,
            textarea: !0
        },
        Q = (O({
            menuitem: !0
        }, K), /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
        J = {},
        $ = {}.hasOwnProperty;
    v.displayName = "ReactDOMComponent", v.Mixin = {
        construct: function(e) {
            this._currentElement = e
        },
        mountComponent: function(e, t, r) {
            this._rootNodeID = e;
            var n = this._currentElement.props;
            switch (this._tag) {
                case "iframe":
                case "img":
                case "form":
                case "video":
                case "audio":
                    this._wrapperState = {
                        listeners: null
                    }, t.getReactMountReady().enqueue(l, this);
                    break;
                case "button":
                    n = E.getNativeProps(this, n, r);
                    break;
                case "input":
                    S.mountWrapper(this, n, r), n = S.getNativeProps(this, n, r);
                    break;
                case "option":
                    C.mountWrapper(this, n, r), n = C.getNativeProps(this, n, r);
                    break;
                case "select":
                    T.mountWrapper(this, n, r), n = T.getNativeProps(this, n, r), r = T.processChildContext(this, n, r);
                    break;
                case "textarea":
                    A.mountWrapper(this, n, r), n = A.getNativeProps(this, n, r)
            }
            u(this, n);
            var i;
            if (t.useCreateElement) {
                var o = r[P.ownerDocumentContextKey],
                    a = o.createElement(this._currentElement.type);
                b.setAttributeForID(a, this._rootNodeID), P.getID(a), this._updateDOMProperties({}, n, t, a), this._createInitialChildren(t, n, r, a), i = a
            } else {
                var s = this._createOpenTagMarkupAndPutListeners(t, n),
                    h = this._createContentMarkup(t, n, r);
                i = !h && K[this._tag] ? s + "/>" : s + ">" + h + "</" + this._currentElement.type + ">"
            }
            switch (this._tag) {
                case "input":
                    t.getReactMountReady().enqueue(p, this);
                case "button":
                case "select":
                case "textarea":
                    n.autoFocus && t.getReactMountReady().enqueue(g.focusDOMComponent, this)
            }
            return i
        },
        _createOpenTagMarkupAndPutListeners: function(e, t) {
            var r = "<" + this._currentElement.type;
            for (var n in t)
                if (t.hasOwnProperty(n)) {
                    var i = t[n];
                    if (null != i)
                        if (z.hasOwnProperty(n)) i && h(this._rootNodeID, n, i, e);
                        else {
                            n === W && (i && (i = this._previousStyleCopy = O({}, t.style)), i = y.createMarkupForStyles(i));
                            var o = null;
                            null != this._tag && m(this._tag, t) ? n !== j && (o = b.createMarkupForCustomAttribute(n, i)) : o = b.createMarkupForProperty(n, i), o && (r += " " + o)
                        }
                }
            if (e.renderToStaticMarkup) return r;
            var a = b.createMarkupForID(this._rootNodeID);
            return r + " " + a
        },
        _createContentMarkup: function(e, t, r) {
            var n = "",
                i = t.dangerouslySetInnerHTML;
            if (null != i) null != i.__html && (n = i.__html);
            else {
                var o = H[typeof t.children] ? t.children : null,
                    a = null != o ? null : t.children;
                if (null != o) n = N(o);
                else if (null != a) {
                    var s = this.mountChildren(a, e, r);
                    n = s.join("")
                }
            }
            return Z[this._tag] && "\n" === n.charAt(0) ? "\n" + n : n
        },
        _createInitialChildren: function(e, t, r, n) {
            var i = t.dangerouslySetInnerHTML;
            if (null != i) null != i.__html && F(n, i.__html);
            else {
                var o = H[typeof t.children] ? t.children : null,
                    a = null != o ? null : t.children;
                if (null != o) B(n, o);
                else if (null != a)
                    for (var s = this.mountChildren(a, e, r), u = 0; u < s.length; u++) n.appendChild(s[u])
            }
        },
        receiveComponent: function(e, t, r) {
            var n = this._currentElement;
            this._currentElement = e, this.updateComponent(t, n, e, r)
        },
        updateComponent: function(e, t, r, n) {
            var i = t.props,
                o = this._currentElement.props;
            switch (this._tag) {
                case "button":
                    i = E.getNativeProps(this, i), o = E.getNativeProps(this, o);
                    break;
                case "input":
                    S.updateWrapper(this), i = S.getNativeProps(this, i), o = S.getNativeProps(this, o);
                    break;
                case "option":
                    i = C.getNativeProps(this, i), o = C.getNativeProps(this, o);
                    break;
                case "select":
                    i = T.getNativeProps(this, i), o = T.getNativeProps(this, o);
                    break;
                case "textarea":
                    A.updateWrapper(this), i = A.getNativeProps(this, i), o = A.getNativeProps(this, o)
            }
            u(this, o), this._updateDOMProperties(i, o, e, null), this._updateDOMChildren(i, o, e, n), !k && this._nodeWithLegacyProperties && (this._nodeWithLegacyProperties.props = o), "select" === this._tag && e.getReactMountReady().enqueue(d, this)
        },
        _updateDOMProperties: function(e, t, r, n) {
            var i, o, a;
            for (i in e)
                if (!t.hasOwnProperty(i) && e.hasOwnProperty(i))
                    if (i === W) {
                        var s = this._previousStyleCopy;
                        for (o in s) s.hasOwnProperty(o) && (a = a || {}, a[o] = "");
                        this._previousStyleCopy = null
                    } else z.hasOwnProperty(i) ? e[i] && V(this._rootNodeID, i) : (x.properties[i] || x.isCustomAttribute(i)) && (n || (n = P.getNode(this._rootNodeID)), b.deleteValueForProperty(n, i));
            for (i in t) {
                var u = t[i],
                    c = i === W ? this._previousStyleCopy : e[i];
                if (t.hasOwnProperty(i) && u !== c)
                    if (i === W)
                        if (u ? u = this._previousStyleCopy = O({}, u) : this._previousStyleCopy = null, c) {
                            for (o in c) !c.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (a = a || {}, a[o] = "");
                            for (o in u) u.hasOwnProperty(o) && c[o] !== u[o] && (a = a || {}, a[o] = u[o])
                        } else a = u;
                else z.hasOwnProperty(i) ? u ? h(this._rootNodeID, i, u, r) : c && V(this._rootNodeID, i) : m(this._tag, t) ? (n || (n = P.getNode(this._rootNodeID)), i === j && (u = null), b.setValueForAttribute(n, i, u)) : (x.properties[i] || x.isCustomAttribute(i)) && (n || (n = P.getNode(this._rootNodeID)), null != u ? b.setValueForProperty(n, i, u) : b.deleteValueForProperty(n, i))
            }
            a && (n || (n = P.getNode(this._rootNodeID)), y.setValueForStyles(n, a))
        },
        _updateDOMChildren: function(e, t, r, n) {
            var i = H[typeof e.children] ? e.children : null,
                o = H[typeof t.children] ? t.children : null,
                a = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
                s = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
                u = null != i ? null : e.children,
                h = null != o ? null : t.children,
                c = null != i || null != a,
                l = null != o || null != s;
            null != u && null == h ? this.updateChildren(null, r, n) : c && !l && this.updateTextContent(""), null != o ? i !== o && this.updateTextContent("" + o) : null != s ? a !== s && this.updateMarkup("" + s) : null != h && this.updateChildren(h, r, n)
        },
        unmountComponent: function() {
            switch (this._tag) {
                case "iframe":
                case "img":
                case "form":
                case "video":
                case "audio":
                    var e = this._wrapperState.listeners;
                    if (e)
                        for (var t = 0; t < e.length; t++) e[t].remove();
                    break;
                case "input":
                    S.unmountWrapper(this);
                    break;
                case "html":
                case "head":
                case "body":
                    U(!1)
            }
            if (this.unmountChildren(), w.deleteAllListeners(this._rootNodeID), _.unmountIDFromEnvironment(this._rootNodeID), this._rootNodeID = null, this._wrapperState = null, this._nodeWithLegacyProperties) {
                var r = this._nodeWithLegacyProperties;
                r._reactInternalComponent = null, this._nodeWithLegacyProperties = null
            }
        },
        getPublicInstance: function() {
            if (!this._nodeWithLegacyProperties) {
                var e = P.getNode(this._rootNodeID);
                e._reactInternalComponent = this, e.getDOMNode = n, e.isMounted = i, e.setState = o, e.replaceState = o, e.forceUpdate = o, e.setProps = a, e.replaceProps = s, e.props = this._currentElement.props, this._nodeWithLegacyProperties = e
            }
            return this._nodeWithLegacyProperties
        }
    }, D.measureMethods(v, "ReactDOMComponent", {
        mountComponent: "mountComponent",
        updateComponent: "updateComponent"
    }), O(v.prototype, v.Mixin, L.Mixin), e.exports = v
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return i.createFactory(e)
    }
    var i = r(6),
        o = (r(71), r(99)),
        a = o({
            a: "a",
            abbr: "abbr",
            address: "address",
            area: "area",
            article: "article",
            aside: "aside",
            audio: "audio",
            b: "b",
            base: "base",
            bdi: "bdi",
            bdo: "bdo",
            big: "big",
            blockquote: "blockquote",
            body: "body",
            br: "br",
            button: "button",
            canvas: "canvas",
            caption: "caption",
            cite: "cite",
            code: "code",
            col: "col",
            colgroup: "colgroup",
            data: "data",
            datalist: "datalist",
            dd: "dd",
            del: "del",
            details: "details",
            dfn: "dfn",
            dialog: "dialog",
            div: "div",
            dl: "dl",
            dt: "dt",
            em: "em",
            embed: "embed",
            fieldset: "fieldset",
            figcaption: "figcaption",
            figure: "figure",
            footer: "footer",
            form: "form",
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            head: "head",
            header: "header",
            hgroup: "hgroup",
            hr: "hr",
            html: "html",
            i: "i",
            iframe: "iframe",
            img: "img",
            input: "input",
            ins: "ins",
            kbd: "kbd",
            keygen: "keygen",
            label: "label",
            legend: "legend",
            li: "li",
            link: "link",
            main: "main",
            map: "map",
            mark: "mark",
            menu: "menu",
            menuitem: "menuitem",
            meta: "meta",
            meter: "meter",
            nav: "nav",
            noscript: "noscript",
            object: "object",
            ol: "ol",
            optgroup: "optgroup",
            option: "option",
            output: "output",
            p: "p",
            param: "param",
            picture: "picture",
            pre: "pre",
            progress: "progress",
            q: "q",
            rp: "rp",
            rt: "rt",
            ruby: "ruby",
            s: "s",
            samp: "samp",
            script: "script",
            section: "section",
            select: "select",
            small: "small",
            source: "source",
            span: "span",
            strong: "strong",
            style: "style",
            sub: "sub",
            summary: "summary",
            sup: "sup",
            table: "table",
            tbody: "tbody",
            td: "td",
            textarea: "textarea",
            tfoot: "tfoot",
            th: "th",
            thead: "thead",
            time: "time",
            title: "title",
            tr: "tr",
            track: "track",
            u: "u",
            ul: "ul",
            "var": "var",
            video: "video",
            wbr: "wbr",
            circle: "circle",
            clipPath: "clipPath",
            defs: "defs",
            ellipse: "ellipse",
            g: "g",
            image: "image",
            line: "line",
            linearGradient: "linearGradient",
            mask: "mask",
            path: "path",
            pattern: "pattern",
            polygon: "polygon",
            polyline: "polyline",
            radialGradient: "radialGradient",
            rect: "rect",
            stop: "stop",
            svg: "svg",
            text: "text",
            tspan: "tspan"
        }, n);
    e.exports = a
}, function(e, t, r) {
    "use strict";

    function n() {
        this._rootNodeID && p.updateWrapper(this)
    }

    function i(e) {
        var t = this._currentElement.props,
            r = a.executeOnChange(t, e);
        u.asap(n, this);
        var i = t.name;
        if ("radio" === t.type && null != i) {
            for (var o = s.getNode(this._rootNodeID), h = o; h.parentNode;) h = h.parentNode;
            for (var p = h.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), d = 0; d < p.length; d++) {
                var f = p[d];
                if (f !== o && f.form === o.form) {
                    var m = s.getID(f);
                    m ? void 0 : c(!1);
                    var v = l[m];
                    v ? void 0 : c(!1), u.asap(n, v)
                }
            }
        }
        return r
    }
    var o = r(38),
        a = r(35),
        s = r(5),
        u = r(8),
        h = r(3),
        c = r(1),
        l = {},
        p = {
            getNativeProps: function(e, t, r) {
                var n = a.getValue(t),
                    i = a.getChecked(t),
                    o = h({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: null != n ? n : e._wrapperState.initialValue,
                        checked: null != i ? i : e._wrapperState.initialChecked,
                        onChange: e._wrapperState.onChange
                    });
                return o
            },
            mountWrapper: function(e, t) {
                var r = t.defaultValue;
                e._wrapperState = {
                    initialChecked: t.defaultChecked || !1,
                    initialValue: null != r ? r : null,
                    onChange: i.bind(e)
                }
            },
            mountReadyWrapper: function(e) {
                l[e._rootNodeID] = e
            },
            unmountWrapper: function(e) {
                delete l[e._rootNodeID]
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    r = t.checked;
                null != r && o.updatePropertyByID(e._rootNodeID, "checked", r || !1);
                var n = a.getValue(t);
                null != n && o.updatePropertyByID(e._rootNodeID, "value", "" + n)
            }
        };
    e.exports = p
}, function(e, t, r) {
    "use strict";
    var n = r(62),
        i = r(67),
        o = r(3),
        a = (r(2), i.valueContextKey),
        s = {
            mountWrapper: function(e, t, r) {
                var n = r[a],
                    i = null;
                if (null != n)
                    if (i = !1, Array.isArray(n)) {
                        for (var o = 0; o < n.length; o++)
                            if ("" + n[o] == "" + t.value) {
                                i = !0;
                                break
                            }
                    } else i = "" + n == "" + t.value;
                e._wrapperState = {
                    selected: i
                }
            },
            getNativeProps: function(e, t, r) {
                var i = o({
                    selected: void 0,
                    children: void 0
                }, t);
                null != e._wrapperState.selected && (i.selected = e._wrapperState.selected);
                var a = "";
                return n.forEach(t.children, function(e) {
                    null != e && ("string" == typeof e || "number" == typeof e) && (a += e)
                }), a && (i.children = a), i
            }
        };
    e.exports = s
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        return e === r && t === n
    }

    function i(e) {
        var t = document.selection,
            r = t.createRange(),
            n = r.text.length,
            i = r.duplicate();
        i.moveToElementText(e), i.setEndPoint("EndToStart", r);
        var o = i.text.length,
            a = o + n;
        return {
            start: o,
            end: a
        }
    }

    function o(e) {
        var t = window.getSelection && window.getSelection();
        if (!t || 0 === t.rangeCount) return null;
        var r = t.anchorNode,
            i = t.anchorOffset,
            o = t.focusNode,
            a = t.focusOffset,
            s = t.getRangeAt(0);
        try {
            s.startContainer.nodeType, s.endContainer.nodeType
        } catch (u) {
            return null
        }
        var h = n(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
            c = h ? 0 : s.toString().length,
            l = s.cloneRange();
        l.selectNodeContents(e), l.setEnd(s.startContainer, s.startOffset);
        var p = n(l.startContainer, l.startOffset, l.endContainer, l.endOffset),
            d = p ? 0 : l.toString().length,
            f = d + c,
            m = document.createRange();
        m.setStart(r, i), m.setEnd(o, a);
        var v = m.collapsed;
        return {
            start: v ? f : d,
            end: v ? d : f
        }
    }

    function a(e, t) {
        var r, n, i = document.selection.createRange().duplicate();
        "undefined" == typeof t.end ? (r = t.start, n = r) : t.start > t.end ? (r = t.end, n = t.start) : (r = t.start, n = t.end), i.moveToElementText(e), i.moveStart("character", r), i.setEndPoint("EndToStart", i), i.moveEnd("character", n - r), i.select()
    }

    function s(e, t) {
        if (window.getSelection) {
            var r = window.getSelection(),
                n = e[c()].length,
                i = Math.min(t.start, n),
                o = "undefined" == typeof t.end ? i : Math.min(t.end, n);
            if (!r.extend && i > o) {
                var a = o;
                o = i, i = a
            }
            var s = h(e, i),
                u = h(e, o);
            if (s && u) {
                var l = document.createRange();
                l.setStart(s.node, s.offset), r.removeAllRanges(), i > o ? (r.addRange(l), r.extend(u.node, u.offset)) : (l.setEnd(u.node, u.offset), r.addRange(l))
            }
        }
    }
    var u = r(4),
        h = r(160),
        c = r(85),
        l = u.canUseDOM && "selection" in document && !("getSelection" in window),
        p = {
            getOffsets: l ? i : o,
            setOffsets: l ? a : s
        };
    e.exports = p
}, function(e, t, r) {
    "use strict";
    var n = r(70),
        i = r(141),
        o = r(40);
    n.inject();
    var a = {
        renderToString: i.renderToString,
        renderToStaticMarkup: i.renderToStaticMarkup,
        version: o
    };
    e.exports = a
}, function(e, t, r) {
    "use strict";

    function n() {
        this._rootNodeID && c.updateWrapper(this)
    }

    function i(e) {
        var t = this._currentElement.props,
            r = o.executeOnChange(t, e);
        return s.asap(n, this), r
    }
    var o = r(35),
        a = r(38),
        s = r(8),
        u = r(3),
        h = r(1),
        c = (r(2), {
            getNativeProps: function(e, t, r) {
                null != t.dangerouslySetInnerHTML ? h(!1) : void 0;
                var n = u({}, t, {
                    defaultValue: void 0,
                    value: void 0,
                    children: e._wrapperState.initialValue,
                    onChange: e._wrapperState.onChange
                });
                return n
            },
            mountWrapper: function(e, t) {
                var r = t.defaultValue,
                    n = t.children;
                null != n && (null != r ? h(!1) : void 0, Array.isArray(n) && (n.length <= 1 ? void 0 : h(!1), n = n[0]), r = "" + n), null == r && (r = "");
                var a = o.getValue(t);
                e._wrapperState = {
                    initialValue: "" + (null != a ? a : r),
                    onChange: i.bind(e)
                }
            },
            updateWrapper: function(e) {
                var t = e._currentElement.props,
                    r = o.getValue(t);
                null != r && a.updatePropertyByID(e._rootNodeID, "value", "" + r)
            }
        });
    e.exports = c
}, function(e, t, r) {
    "use strict";

    function n(e) {
        i.enqueueEvents(e), i.processEventQueue(!1)
    }
    var i = r(19),
        o = {
            handleTopLevel: function(e, t, r, o, a) {
                var s = i.extractEvents(e, t, r, o, a);
                n(s)
            }
        };
    e.exports = o
}, function(e, t, r) {
    "use strict";

    function n(e) {
        var t = p.getID(e),
            r = l.getReactRootIDFromNodeID(t),
            n = p.findReactContainerForID(r),
            i = p.getFirstReactDOM(n);
        return i
    }

    function i(e, t) {
        this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
    }

    function o(e) {
        a(e)
    }

    function a(e) {
        for (var t = p.getFirstReactDOM(m(e.nativeEvent)) || window, r = t; r;) e.ancestors.push(r), r = n(r);
        for (var i = 0; i < e.ancestors.length; i++) {
            t = e.ancestors[i];
            var o = p.getID(t) || "";
            g._handleTopLevel(e.topLevelType, t, o, e.nativeEvent, m(e.nativeEvent))
        }
    }

    function s(e) {
        var t = v(window);
        e(t)
    }
    var u = r(52),
        h = r(4),
        c = r(13),
        l = r(17),
        p = r(5),
        d = r(8),
        f = r(3),
        m = r(44),
        v = r(94);
    f(i.prototype, {
        destructor: function() {
            this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
        }
    }), c.addPoolingTo(i, c.twoArgumentPooler);
    var g = {
        _enabled: !0,
        _handleTopLevel: null,
        WINDOW_HANDLE: h.canUseDOM ? window : null,
        setHandleTopLevel: function(e) {
            g._handleTopLevel = e
        },
        setEnabled: function(e) {
            g._enabled = !!e
        },
        isEnabled: function() {
            return g._enabled
        },
        trapBubbledEvent: function(e, t, r) {
            var n = r;
            return n ? u.listen(n, t, g.dispatchEvent.bind(null, e)) : null
        },
        trapCapturedEvent: function(e, t, r) {
            var n = r;
            return n ? u.capture(n, t, g.dispatchEvent.bind(null, e)) : null
        },
        monitorScrollValue: function(e) {
            var t = s.bind(null, e);
            u.listen(window, "scroll", t)
        },
        dispatchEvent: function(e, t) {
            if (g._enabled) {
                var r = i.getPooled(e, t);
                try {
                    d.batchedUpdates(o, r)
                } finally {
                    i.release(r)
                }
            }
        }
    };
    e.exports = g
}, function(e, t, r) {
    "use strict";
    var n = r(16),
        i = r(19),
        o = r(37),
        a = r(63),
        s = r(72),
        u = r(24),
        h = r(78),
        c = r(7),
        l = r(81),
        p = r(8),
        d = {
            Component: o.injection,
            Class: a.injection,
            DOMProperty: n.injection,
            EmptyComponent: s.injection,
            EventPluginHub: i.injection,
            EventEmitter: u.injection,
            NativeComponent: h.injection,
            Perf: c.injection,
            RootIndex: l.injection,
            Updates: p.injection
        };
    e.exports = d
}, function(e, t, r) {
    "use strict";
    var n = r(62),
        i = r(64),
        o = r(63),
        a = r(126),
        s = r(6),
        u = (r(71), r(80)),
        h = r(40),
        c = r(3),
        l = r(161),
        p = s.createElement,
        d = s.createFactory,
        f = s.cloneElement,
        m = {
            Children: {
                map: n.map,
                forEach: n.forEach,
                count: n.count,
                toArray: n.toArray,
                only: l
            },
            Component: i,
            createElement: p,
            cloneElement: f,
            isValidElement: s.isValidElement,
            PropTypes: u,
            createClass: o.createClass,
            createFactory: d,
            createMixin: function(e) {
                return e
            },
            DOM: a,
            version: h,
            __spread: c
        };
    e.exports = m
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        v.push({
            parentID: e,
            parentNode: null,
            type: l.INSERT_MARKUP,
            markupIndex: g.push(t) - 1,
            content: null,
            fromIndex: null,
            toIndex: r
        })
    }

    function i(e, t, r) {
        v.push({
            parentID: e,
            parentNode: null,
            type: l.MOVE_EXISTING,
            markupIndex: null,
            content: null,
            fromIndex: t,
            toIndex: r
        })
    }

    function o(e, t) {
        v.push({
            parentID: e,
            parentNode: null,
            type: l.REMOVE_NODE,
            markupIndex: null,
            content: null,
            fromIndex: t,
            toIndex: null
        })
    }

    function a(e, t) {
        v.push({
            parentID: e,
            parentNode: null,
            type: l.SET_MARKUP,
            markupIndex: null,
            content: t,
            fromIndex: null,
            toIndex: null
        })
    }

    function s(e, t) {
        v.push({
            parentID: e,
            parentNode: null,
            type: l.TEXT_CONTENT,
            markupIndex: null,
            content: t,
            fromIndex: null,
            toIndex: null
        })
    }

    function u() {
        v.length && (c.processChildrenUpdates(v, g), h())
    }

    function h() {
        v.length = 0, g.length = 0
    }
    var c = r(37),
        l = r(77),
        p = (r(11), r(14)),
        d = r(122),
        f = r(158),
        m = 0,
        v = [],
        g = [],
        y = {
            Mixin: {
                _reconcilerInstantiateChildren: function(e, t, r) {
                    return d.instantiateChildren(e, t, r)
                },
                _reconcilerUpdateChildren: function(e, t, r, n) {
                    var i;
                    return i = f(t), d.updateChildren(e, i, r, n)
                },
                mountChildren: function(e, t, r) {
                    var n = this._reconcilerInstantiateChildren(e, t, r);
                    this._renderedChildren = n;
                    var i = [],
                        o = 0;
                    for (var a in n)
                        if (n.hasOwnProperty(a)) {
                            var s = n[a],
                                u = this._rootNodeID + a,
                                h = p.mountComponent(s, u, t, r);
                            s._mountIndex = o++, i.push(h)
                        }
                    return i
                },
                updateTextContent: function(e) {
                    m++;
                    var t = !0;
                    try {
                        var r = this._renderedChildren;
                        d.unmountChildren(r);
                        for (var n in r) r.hasOwnProperty(n) && this._unmountChild(r[n]);
                        this.setTextContent(e), t = !1
                    } finally {
                        m--, m || (t ? h() : u())
                    }
                },
                updateMarkup: function(e) {
                    m++;
                    var t = !0;
                    try {
                        var r = this._renderedChildren;
                        d.unmountChildren(r);
                        for (var n in r) r.hasOwnProperty(n) && this._unmountChildByName(r[n], n);
                        this.setMarkup(e), t = !1
                    } finally {
                        m--, m || (t ? h() : u())
                    }
                },
                updateChildren: function(e, t, r) {
                    m++;
                    var n = !0;
                    try {
                        this._updateChildren(e, t, r), n = !1
                    } finally {
                        m--, m || (n ? h() : u())
                    }
                },
                _updateChildren: function(e, t, r) {
                    var n = this._renderedChildren,
                        i = this._reconcilerUpdateChildren(n, e, t, r);
                    if (this._renderedChildren = i, i || n) {
                        var o, a = 0,
                            s = 0;
                        for (o in i)
                            if (i.hasOwnProperty(o)) {
                                var u = n && n[o],
                                    h = i[o];
                                u === h ? (this.moveChild(u, s, a), a = Math.max(u._mountIndex, a), u._mountIndex = s) : (u && (a = Math.max(u._mountIndex, a), this._unmountChild(u)), this._mountChildByNameAtIndex(h, o, s, t, r)), s++
                            }
                        for (o in n) !n.hasOwnProperty(o) || i && i.hasOwnProperty(o) || this._unmountChild(n[o])
                    }
                },
                unmountChildren: function() {
                    var e = this._renderedChildren;
                    d.unmountChildren(e), this._renderedChildren = null
                },
                moveChild: function(e, t, r) {
                    e._mountIndex < r && i(this._rootNodeID, e._mountIndex, t)
                },
                createChild: function(e, t) {
                    n(this._rootNodeID, t, e._mountIndex)
                },
                removeChild: function(e) {
                    o(this._rootNodeID, e._mountIndex)
                },
                setTextContent: function(e) {
                    s(this._rootNodeID, e)
                },
                setMarkup: function(e) {
                    a(this._rootNodeID, e)
                },
                _mountChildByNameAtIndex: function(e, t, r, n, i) {
                    var o = this._rootNodeID + t,
                        a = p.mountComponent(e, o, n, i);
                    e._mountIndex = r, this.createChild(e, a)
                },
                _unmountChild: function(e) {
                    this.removeChild(e), e._mountIndex = null
                }
            }
        };
    e.exports = y
}, function(e, t, r) {
    "use strict";
    var n = r(1),
        i = {
            isValidOwner: function(e) {
                return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
            },
            addComponentAsRefTo: function(e, t, r) {
                i.isValidOwner(r) ? void 0 : n(!1), r.attachRef(t, e)
            },
            removeComponentAsRefFrom: function(e, t, r) {
                i.isValidOwner(r) ? void 0 : n(!1), r.getPublicInstance().refs[t] === e.getPublicInstance() && r.detachRef(t)
            }
        };
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = i.getPooled(null), this.useCreateElement = !e && s.useCreateElement
    }
    var i = r(33),
        o = r(13),
        a = r(24),
        s = r(66),
        u = r(75),
        h = r(28),
        c = r(3),
        l = {
            initialize: u.getSelectionInformation,
            close: u.restoreSelection
        },
        p = {
            initialize: function() {
                var e = a.isEnabled();
                return a.setEnabled(!1), e
            },
            close: function(e) {
                a.setEnabled(e)
            }
        },
        d = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: function() {
                this.reactMountReady.notifyAll()
            }
        },
        f = [l, p, d],
        m = {
            getTransactionWrappers: function() {
                return f
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            destructor: function() {
                i.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    c(n.prototype, h.Mixin, m), o.addPoolingTo(n), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        "function" == typeof e ? e(t.getPublicInstance()) : o.addComponentAsRefTo(t, e, r)
    }

    function i(e, t, r) {
        "function" == typeof e ? e(null) : o.removeComponentAsRefFrom(t, e, r)
    }
    var o = r(137),
        a = {};
    a.attachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var r = t.ref;
            null != r && n(r, e, t._owner)
        }
    }, a.shouldUpdateRefs = function(e, t) {
        var r = null === e || e === !1,
            n = null === t || t === !1;
        return r || n || t._owner !== e._owner || t.ref !== e.ref
    }, a.detachRefs = function(e, t) {
        if (null !== t && t !== !1) {
            var r = t.ref;
            null != r && i(r, e, t._owner)
        }
    }, e.exports = a
}, function(e, t) {
    "use strict";
    var r = {
        isBatchingUpdates: !1,
        batchedUpdates: function(e) {}
    };
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e) {
        a.isValidElement(e) ? void 0 : f(!1);
        var t;
        try {
            l.injection.injectBatchingStrategy(h);
            var r = s.createReactRootID();
            return t = c.getPooled(!1), t.perform(function() {
                var n = d(e, null),
                    i = n.mountComponent(r, t, p);
                return u.addChecksumToMarkup(i)
            }, null)
        } finally {
            c.release(t), l.injection.injectBatchingStrategy(o)
        }
    }

    function i(e) {
        a.isValidElement(e) ? void 0 : f(!1);
        var t;
        try {
            l.injection.injectBatchingStrategy(h);
            var r = s.createReactRootID();
            return t = c.getPooled(!0), t.perform(function() {
                var n = d(e, null);
                return n.mountComponent(r, t, p)
            }, null)
        } finally {
            c.release(t), l.injection.injectBatchingStrategy(o)
        }
    }
    var o = r(69),
        a = r(6),
        s = r(17),
        u = r(76),
        h = r(140),
        c = r(142),
        l = r(8),
        p = r(18),
        d = r(46),
        f = r(1);
    e.exports = {
        renderToString: n,
        renderToStaticMarkup: i
    }
}, function(e, t, r) {
    "use strict";

    function n(e) {
        this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.reactMountReady = o.getPooled(null), this.useCreateElement = !1
    }
    var i = r(13),
        o = r(33),
        a = r(28),
        s = r(3),
        u = r(9),
        h = {
            initialize: function() {
                this.reactMountReady.reset()
            },
            close: u
        },
        c = [h],
        l = {
            getTransactionWrappers: function() {
                return c
            },
            getReactMountReady: function() {
                return this.reactMountReady
            },
            destructor: function() {
                o.release(this.reactMountReady), this.reactMountReady = null
            }
        };
    s(n.prototype, a.Mixin, l), i.addPoolingTo(n), e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(16),
        i = n.injection.MUST_USE_ATTRIBUTE,
        o = {
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace"
        },
        a = {
            Properties: {
                clipPath: i,
                cx: i,
                cy: i,
                d: i,
                dx: i,
                dy: i,
                fill: i,
                fillOpacity: i,
                fontFamily: i,
                fontSize: i,
                fx: i,
                fy: i,
                gradientTransform: i,
                gradientUnits: i,
                markerEnd: i,
                markerMid: i,
                markerStart: i,
                offset: i,
                opacity: i,
                patternContentUnits: i,
                patternUnits: i,
                points: i,
                preserveAspectRatio: i,
                r: i,
                rx: i,
                ry: i,
                spreadMethod: i,
                stopColor: i,
                stopOpacity: i,
                stroke: i,
                strokeDasharray: i,
                strokeLinecap: i,
                strokeOpacity: i,
                strokeWidth: i,
                textAnchor: i,
                transform: i,
                version: i,
                viewBox: i,
                x1: i,
                x2: i,
                x: i,
                xlinkActuate: i,
                xlinkArcrole: i,
                xlinkHref: i,
                xlinkRole: i,
                xlinkShow: i,
                xlinkTitle: i,
                xlinkType: i,
                xmlBase: i,
                xmlLang: i,
                xmlSpace: i,
                y1: i,
                y2: i,
                y: i
            },
            DOMAttributeNamespaces: {
                xlinkActuate: o.xlink,
                xlinkArcrole: o.xlink,
                xlinkHref: o.xlink,
                xlinkRole: o.xlink,
                xlinkShow: o.xlink,
                xlinkTitle: o.xlink,
                xlinkType: o.xlink,
                xmlBase: o.xml,
                xmlLang: o.xml,
                xmlSpace: o.xml
            },
            DOMAttributeNames: {
                clipPath: "clip-path",
                fillOpacity: "fill-opacity",
                fontFamily: "font-family",
                fontSize: "font-size",
                gradientTransform: "gradientTransform",
                gradientUnits: "gradientUnits",
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                patternContentUnits: "patternContentUnits",
                patternUnits: "patternUnits",
                preserveAspectRatio: "preserveAspectRatio",
                spreadMethod: "spreadMethod",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strokeDasharray: "stroke-dasharray",
                strokeLinecap: "stroke-linecap",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                textAnchor: "text-anchor",
                viewBox: "viewBox",
                xlinkActuate: "xlink:actuate",
                xlinkArcrole: "xlink:arcrole",
                xlinkHref: "xlink:href",
                xlinkRole: "xlink:role",
                xlinkShow: "xlink:show",
                xlinkTitle: "xlink:title",
                xlinkType: "xlink:type",
                xmlBase: "xml:base",
                xmlLang: "xml:lang",
                xmlSpace: "xml:space"
            }
        };
    e.exports = a
}, function(e, t, r) {
    "use strict";

    function n(e) {
        if ("selectionStart" in e && u.hasSelectionCapabilities(e)) return {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        if (window.getSelection) {
            var t = window.getSelection();
            return {
                anchorNode: t.anchorNode,
                anchorOffset: t.anchorOffset,
                focusNode: t.focusNode,
                focusOffset: t.focusOffset
            }
        }
        if (document.selection) {
            var r = document.selection.createRange();
            return {
                parentElement: r.parentElement(),
                text: r.text,
                top: r.boundingTop,
                left: r.boundingLeft
            }
        }
    }

    function i(e, t) {
        if (b || null == g || g !== c()) return null;
        var r = n(g);
        if (!x || !d(x, r)) {
            x = r;
            var i = h.getPooled(v.select, y, e, t);
            return i.type = "select", i.target = g, a.accumulateTwoPhaseDispatches(i), i
        }
        return null
    }
    var o = r(10),
        a = r(20),
        s = r(4),
        u = r(75),
        h = r(15),
        c = r(55),
        l = r(86),
        p = r(12),
        d = r(57),
        f = o.topLevelTypes,
        m = s.canUseDOM && "documentMode" in document && document.documentMode <= 11,
        v = {
            select: {
                phasedRegistrationNames: {
                    bubbled: p({
                        onSelect: null
                    }),
                    captured: p({
                        onSelectCapture: null
                    })
                },
                dependencies: [f.topBlur, f.topContextMenu, f.topFocus, f.topKeyDown, f.topMouseDown, f.topMouseUp, f.topSelectionChange]
            }
        },
        g = null,
        y = null,
        x = null,
        b = !1,
        M = !1,
        w = p({
            onSelect: null
        }),
        _ = {
            eventTypes: v,
            extractEvents: function(e, t, r, n, o) {
                if (!M) return null;
                switch (e) {
                    case f.topFocus:
                        (l(t) || "true" === t.contentEditable) && (g = t, y = r, x = null);
                        break;
                    case f.topBlur:
                        g = null, y = null, x = null;
                        break;
                    case f.topMouseDown:
                        b = !0;
                        break;
                    case f.topContextMenu:
                    case f.topMouseUp:
                        return b = !1, i(n, o);
                    case f.topSelectionChange:
                        if (m) break;
                    case f.topKeyDown:
                    case f.topKeyUp:
                        return i(n, o)
                }
                return null
            },
            didPutListener: function(e, t, r) {
                t === w && (M = !0)
            }
        };
    e.exports = _
}, function(e, t) {
    "use strict";
    var r = Math.pow(2, 53),
        n = {
            createReactRootIndex: function() {
                return Math.ceil(Math.random() * r)
            }
        };
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(10),
        i = r(52),
        o = r(20),
        a = r(5),
        s = r(147),
        u = r(15),
        h = r(150),
        c = r(152),
        l = r(27),
        p = r(149),
        d = r(153),
        f = r(22),
        m = r(154),
        v = r(9),
        g = r(42),
        y = r(1),
        x = r(12),
        b = n.topLevelTypes,
        M = {
            abort: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onAbort: !0
                    }),
                    captured: x({
                        onAbortCapture: !0
                    })
                }
            },
            blur: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onBlur: !0
                    }),
                    captured: x({
                        onBlurCapture: !0
                    })
                }
            },
            canPlay: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCanPlay: !0
                    }),
                    captured: x({
                        onCanPlayCapture: !0
                    })
                }
            },
            canPlayThrough: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCanPlayThrough: !0
                    }),
                    captured: x({
                        onCanPlayThroughCapture: !0
                    })
                }
            },
            click: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onClick: !0
                    }),
                    captured: x({
                        onClickCapture: !0
                    })
                }
            },
            contextMenu: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onContextMenu: !0
                    }),
                    captured: x({
                        onContextMenuCapture: !0
                    })
                }
            },
            copy: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCopy: !0
                    }),
                    captured: x({
                        onCopyCapture: !0
                    })
                }
            },
            cut: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onCut: !0
                    }),
                    captured: x({
                        onCutCapture: !0
                    })
                }
            },
            doubleClick: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDoubleClick: !0
                    }),
                    captured: x({
                        onDoubleClickCapture: !0
                    })
                }
            },
            drag: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDrag: !0
                    }),
                    captured: x({
                        onDragCapture: !0
                    })
                }
            },
            dragEnd: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDragEnd: !0
                    }),
                    captured: x({
                        onDragEndCapture: !0
                    })
                }
            },
            dragEnter: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDragEnter: !0
                    }),
                    captured: x({
                        onDragEnterCapture: !0
                    })
                }
            },
            dragExit: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDragExit: !0
                    }),
                    captured: x({
                        onDragExitCapture: !0
                    })
                }
            },
            dragLeave: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDragLeave: !0
                    }),
                    captured: x({
                        onDragLeaveCapture: !0
                    })
                }
            },
            dragOver: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDragOver: !0
                    }),
                    captured: x({
                        onDragOverCapture: !0
                    })
                }
            },
            dragStart: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDragStart: !0
                    }),
                    captured: x({
                        onDragStartCapture: !0
                    })
                }
            },
            drop: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDrop: !0
                    }),
                    captured: x({
                        onDropCapture: !0
                    })
                }
            },
            durationChange: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onDurationChange: !0
                    }),
                    captured: x({
                        onDurationChangeCapture: !0
                    })
                }
            },
            emptied: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onEmptied: !0
                    }),
                    captured: x({
                        onEmptiedCapture: !0
                    })
                }
            },
            encrypted: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onEncrypted: !0
                    }),
                    captured: x({
                        onEncryptedCapture: !0
                    })
                }
            },
            ended: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onEnded: !0
                    }),
                    captured: x({
                        onEndedCapture: !0
                    })
                }
            },
            error: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onError: !0
                    }),
                    captured: x({
                        onErrorCapture: !0
                    })
                }
            },
            focus: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onFocus: !0
                    }),
                    captured: x({
                        onFocusCapture: !0
                    })
                }
            },
            input: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onInput: !0
                    }),
                    captured: x({
                        onInputCapture: !0
                    })
                }
            },
            keyDown: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onKeyDown: !0
                    }),
                    captured: x({
                        onKeyDownCapture: !0
                    })
                }
            },
            keyPress: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onKeyPress: !0
                    }),
                    captured: x({
                        onKeyPressCapture: !0
                    })
                }
            },
            keyUp: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onKeyUp: !0
                    }),
                    captured: x({
                        onKeyUpCapture: !0
                    })
                }
            },
            load: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onLoad: !0
                    }),
                    captured: x({
                        onLoadCapture: !0
                    })
                }
            },
            loadedData: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onLoadedData: !0
                    }),
                    captured: x({
                        onLoadedDataCapture: !0
                    })
                }
            },
            loadedMetadata: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onLoadedMetadata: !0
                    }),
                    captured: x({
                        onLoadedMetadataCapture: !0
                    })
                }
            },
            loadStart: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onLoadStart: !0
                    }),
                    captured: x({
                        onLoadStartCapture: !0
                    })
                }
            },
            mouseDown: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onMouseDown: !0
                    }),
                    captured: x({
                        onMouseDownCapture: !0
                    })
                }
            },
            mouseMove: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onMouseMove: !0
                    }),
                    captured: x({
                        onMouseMoveCapture: !0
                    })
                }
            },
            mouseOut: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onMouseOut: !0
                    }),
                    captured: x({
                        onMouseOutCapture: !0
                    })
                }
            },
            mouseOver: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onMouseOver: !0
                    }),
                    captured: x({
                        onMouseOverCapture: !0
                    })
                }
            },
            mouseUp: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onMouseUp: !0
                    }),
                    captured: x({
                        onMouseUpCapture: !0
                    })
                }
            },
            paste: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onPaste: !0
                    }),
                    captured: x({
                        onPasteCapture: !0
                    })
                }
            },
            pause: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onPause: !0
                    }),
                    captured: x({
                        onPauseCapture: !0
                    })
                }
            },
            play: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onPlay: !0
                    }),
                    captured: x({
                        onPlayCapture: !0
                    })
                }
            },
            playing: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onPlaying: !0
                    }),
                    captured: x({
                        onPlayingCapture: !0
                    })
                }
            },
            progress: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onProgress: !0
                    }),
                    captured: x({
                        onProgressCapture: !0
                    })
                }
            },
            rateChange: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onRateChange: !0
                    }),
                    captured: x({
                        onRateChangeCapture: !0
                    })
                }
            },
            reset: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onReset: !0
                    }),
                    captured: x({
                        onResetCapture: !0
                    })
                }
            },
            scroll: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onScroll: !0
                    }),
                    captured: x({
                        onScrollCapture: !0
                    })
                }
            },
            seeked: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onSeeked: !0
                    }),
                    captured: x({
                        onSeekedCapture: !0
                    })
                }
            },
            seeking: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onSeeking: !0
                    }),
                    captured: x({
                        onSeekingCapture: !0
                    })
                }
            },
            stalled: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onStalled: !0
                    }),
                    captured: x({
                        onStalledCapture: !0
                    })
                }
            },
            submit: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onSubmit: !0
                    }),
                    captured: x({
                        onSubmitCapture: !0
                    })
                }
            },
            suspend: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onSuspend: !0
                    }),
                    captured: x({
                        onSuspendCapture: !0
                    })
                }
            },
            timeUpdate: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onTimeUpdate: !0
                    }),
                    captured: x({
                        onTimeUpdateCapture: !0
                    })
                }
            },
            touchCancel: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onTouchCancel: !0
                    }),
                    captured: x({
                        onTouchCancelCapture: !0
                    })
                }
            },
            touchEnd: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onTouchEnd: !0
                    }),
                    captured: x({
                        onTouchEndCapture: !0
                    })
                }
            },
            touchMove: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onTouchMove: !0
                    }),
                    captured: x({
                        onTouchMoveCapture: !0
                    })
                }
            },
            touchStart: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onTouchStart: !0
                    }),
                    captured: x({
                        onTouchStartCapture: !0
                    })
                }
            },
            volumeChange: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onVolumeChange: !0
                    }),
                    captured: x({
                        onVolumeChangeCapture: !0
                    })
                }
            },
            waiting: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onWaiting: !0
                    }),
                    captured: x({
                        onWaitingCapture: !0
                    })
                }
            },
            wheel: {
                phasedRegistrationNames: {
                    bubbled: x({
                        onWheel: !0
                    }),
                    captured: x({
                        onWheelCapture: !0
                    })
                }
            }
        },
        w = {
            topAbort: M.abort,
            topBlur: M.blur,
            topCanPlay: M.canPlay,
            topCanPlayThrough: M.canPlayThrough,
            topClick: M.click,
            topContextMenu: M.contextMenu,
            topCopy: M.copy,
            topCut: M.cut,
            topDoubleClick: M.doubleClick,
            topDrag: M.drag,
            topDragEnd: M.dragEnd,
            topDragEnter: M.dragEnter,
            topDragExit: M.dragExit,
            topDragLeave: M.dragLeave,
            topDragOver: M.dragOver,
            topDragStart: M.dragStart,
            topDrop: M.drop,
            topDurationChange: M.durationChange,
            topEmptied: M.emptied,
            topEncrypted: M.encrypted,
            topEnded: M.ended,
            topError: M.error,
            topFocus: M.focus,
            topInput: M.input,
            topKeyDown: M.keyDown,
            topKeyPress: M.keyPress,
            topKeyUp: M.keyUp,
            topLoad: M.load,
            topLoadedData: M.loadedData,
            topLoadedMetadata: M.loadedMetadata,
            topLoadStart: M.loadStart,
            topMouseDown: M.mouseDown,
            topMouseMove: M.mouseMove,
            topMouseOut: M.mouseOut,
            topMouseOver: M.mouseOver,
            topMouseUp: M.mouseUp,
            topPaste: M.paste,
            topPause: M.pause,
            topPlay: M.play,
            topPlaying: M.playing,
            topProgress: M.progress,
            topRateChange: M.rateChange,
            topReset: M.reset,
            topScroll: M.scroll,
            topSeeked: M.seeked,
            topSeeking: M.seeking,
            topStalled: M.stalled,
            topSubmit: M.submit,
            topSuspend: M.suspend,
            topTimeUpdate: M.timeUpdate,
            topTouchCancel: M.touchCancel,
            topTouchEnd: M.touchEnd,
            topTouchMove: M.touchMove,
            topTouchStart: M.touchStart,
            topVolumeChange: M.volumeChange,
            topWaiting: M.waiting,
            topWheel: M.wheel
        };
    for (var _ in w) w[_].dependencies = [_];
    var E = x({
            onClick: null
        }),
        S = {},
        C = {
            eventTypes: M,
            extractEvents: function(e, t, r, n, i) {
                var a = w[e];
                if (!a) return null;
                var v;
                switch (e) {
                    case b.topAbort:
                    case b.topCanPlay:
                    case b.topCanPlayThrough:
                    case b.topDurationChange:
                    case b.topEmptied:
                    case b.topEncrypted:
                    case b.topEnded:
                    case b.topError:
                    case b.topInput:
                    case b.topLoad:
                    case b.topLoadedData:
                    case b.topLoadedMetadata:
                    case b.topLoadStart:
                    case b.topPause:
                    case b.topPlay:
                    case b.topPlaying:
                    case b.topProgress:
                    case b.topRateChange:
                    case b.topReset:
                    case b.topSeeked:
                    case b.topSeeking:
                    case b.topStalled:
                    case b.topSubmit:
                    case b.topSuspend:
                    case b.topTimeUpdate:
                    case b.topVolumeChange:
                    case b.topWaiting:
                        v = u;
                        break;
                    case b.topKeyPress:
                        if (0 === g(n)) return null;
                    case b.topKeyDown:
                    case b.topKeyUp:
                        v = c;
                        break;
                    case b.topBlur:
                    case b.topFocus:
                        v = h;
                        break;
                    case b.topClick:
                        if (2 === n.button) return null;
                    case b.topContextMenu:
                    case b.topDoubleClick:
                    case b.topMouseDown:
                    case b.topMouseMove:
                    case b.topMouseOut:
                    case b.topMouseOver:
                    case b.topMouseUp:
                        v = l;
                        break;
                    case b.topDrag:
                    case b.topDragEnd:
                    case b.topDragEnter:
                    case b.topDragExit:
                    case b.topDragLeave:
                    case b.topDragOver:
                    case b.topDragStart:
                    case b.topDrop:
                        v = p;
                        break;
                    case b.topTouchCancel:
                    case b.topTouchEnd:
                    case b.topTouchMove:
                    case b.topTouchStart:
                        v = d;
                        break;
                    case b.topScroll:
                        v = f;
                        break;
                    case b.topWheel:
                        v = m;
                        break;
                    case b.topCopy:
                    case b.topCut:
                    case b.topPaste:
                        v = s
                }
                v ? void 0 : y(!1);
                var x = v.getPooled(a, r, n, i);
                return o.accumulateTwoPhaseDispatches(x), x
            },
            didPutListener: function(e, t, r) {
                if (t === E) {
                    var n = a.getNode(e);
                    S[e] || (S[e] = i.listen(n, "click", v))
                }
            },
            willDeleteListener: function(e, t) {
                t === E && (S[e].remove(), delete S[e])
            }
        };
    e.exports = C
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(15),
        o = {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        };
    i.augmentClass(n, o), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(15),
        o = {
            data: null
        };
    i.augmentClass(n, o), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(27),
        o = {
            dataTransfer: null
        };
    i.augmentClass(n, o), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(22),
        o = {
            relatedTarget: null
        };
    i.augmentClass(n, o), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(15),
        o = {
            data: null
        };
    i.augmentClass(n, o), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(22),
        o = r(42),
        a = r(159),
        s = r(43),
        u = {
            key: a,
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: s,
            charCode: function(e) {
                return "keypress" === e.type ? o(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? o(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        };
    i.augmentClass(n, u), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(22),
        o = r(43),
        a = {
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: o
        };
    i.augmentClass(n, a), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n) {
        i.call(this, e, t, r, n)
    }
    var i = r(27),
        o = {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        };
    i.augmentClass(n, o), e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        for (var t = 1, r = 0, i = 0, o = e.length, a = -4 & o; a > i;) {
            for (; i < Math.min(i + 4096, a); i += 4) r += (t += e.charCodeAt(i)) + (t += e.charCodeAt(i + 1)) + (t += e.charCodeAt(i + 2)) + (t += e.charCodeAt(i + 3));
            t %= n, r %= n
        }
        for (; o > i; i++) r += t += e.charCodeAt(i);
        return t %= n, r %= n, t | r << 16
    }
    var n = 65521;
    e.exports = r
}, function(e, t, r) {
    "use strict";

    function n(e, t) {
        var r = null == t || "boolean" == typeof t || "" === t;
        if (r) return "";
        var n = isNaN(t);
        return n || 0 === t || o.hasOwnProperty(e) && o[e] ? "" + t : ("string" == typeof t && (t = t.trim()), t + "px")
    }
    var i = r(59),
        o = i.isUnitlessNumber;
    e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r, n, i) {
        return i
    }
    r(3), r(2), e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e, t, r) {
        var n = e,
            i = void 0 === n[r];
        i && null != t && (n[r] = t)
    }

    function i(e) {
        if (null == e) return e;
        var t = {};
        return o(e, n, t), t
    }
    var o = r(50);
    r(2), e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        if (e.key) {
            var t = o[e.key] || e.key;
            if ("Unidentified" !== t) return t
        }
        if ("keypress" === e.type) {
            var r = i(e);
            return 13 === r ? "Enter" : String.fromCharCode(r)
        }
        return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : ""
    }
    var i = r(42),
        o = {
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
        },
        a = {
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
        };
    e.exports = n
}, function(e, t) {
    "use strict";

    function r(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function n(e) {
        for (; e;) {
            if (e.nextSibling) return e.nextSibling;
            e = e.parentNode
        }
    }

    function i(e, t) {
        for (var i = r(e), o = 0, a = 0; i;) {
            if (3 === i.nodeType) {
                if (a = o + i.textContent.length, t >= o && a >= t) return {
                    node: i,
                    offset: t - o
                };
                o = a
            }
            i = r(n(i))
        }
    }
    e.exports = i
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return i.isValidElement(e) ? void 0 : o(!1), e
    }
    var i = r(6),
        o = r(1);
    e.exports = n
}, function(e, t, r) {
    "use strict";

    function n(e) {
        return '"' + i(e) + '"'
    }
    var i = r(30);
    e.exports = n
}, function(e, t, r) {
    "use strict";
    var n = r(5);
    e.exports = n.renderSubtreeIntoContainer
}, function(e, t) {
    e.exports = function(e) {
        function t(t) {
            this.object = t, this.target = new e.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25;
            var r, n, i = this,
                o = 1e-6,
                a = 0,
                s = 0,
                u = 1,
                h = new e.Vector3,
                c = !1;
            this.getPolarAngle = function() {
                return n
            }, this.getAzimuthalAngle = function() {
                return r
            }, this.rotateLeft = function(e) {
                s -= e
            }, this.rotateUp = function(e) {
                a -= e
            }, this.panLeft = function() {
                var t = new e.Vector3;
                return function(e) {
                    var r = this.object.matrix.elements;
                    t.set(r[0], r[1], r[2]), t.multiplyScalar(-e), h.add(t)
                }
            }(), this.panUp = function() {
                var t = new e.Vector3;
                return function(e) {
                    var r = this.object.matrix.elements;
                    t.set(r[4], r[5], r[6]), t.multiplyScalar(e), h.add(t)
                }
            }(), this.pan = function(t, r, n, o) {
                if (i.object instanceof e.PerspectiveCamera) {
                    var a = i.object.position,
                        s = a.clone().sub(i.target),
                        u = s.length();
                    u *= Math.tan(i.object.fov / 2 * Math.PI / 180), i.panLeft(2 * t * u / o), i.panUp(2 * r * u / o)
                } else i.object instanceof e.OrthographicCamera ? (i.panLeft(t * (i.object.right - i.object.left) / n), i.panUp(r * (i.object.top - i.object.bottom) / o)) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.")
            }, this.dollyIn = function(t) {
                i.object instanceof e.PerspectiveCamera ? u /= t : i.object instanceof e.OrthographicCamera ? (i.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom * t)), i.object.updateProjectionMatrix(), c = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
            }, this.dollyOut = function(t) {
                i.object instanceof e.PerspectiveCamera ? u *= t : i.object instanceof e.OrthographicCamera ? (i.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / t)), i.object.updateProjectionMatrix(), c = !0) : console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.")
            }, this.update = function() {
                var i = new e.Vector3,
                    l = (new e.Quaternion).setFromUnitVectors(t.up, new e.Vector3(0, 1, 0)),
                    p = l.clone().inverse(),
                    d = new e.Vector3,
                    f = new e.Quaternion;
                return function() {
                    var e = this.object.position;
                    i.copy(e).sub(this.target), i.applyQuaternion(l), r = Math.atan2(i.x, i.z), n = Math.atan2(Math.sqrt(i.x * i.x + i.z * i.z), i.y), r += s, n += a, r = Math.max(this.minAzimuthAngle, Math.min(this.maxAzimuthAngle, r)), n = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, n)), n = Math.max(o, Math.min(Math.PI - o, n));
                    var t = i.length() * u;
                    return t = Math.max(this.minDistance, Math.min(this.maxDistance, t)), this.target.add(h), i.x = t * Math.sin(n) * Math.sin(r), i.y = t * Math.cos(n), i.z = t * Math.sin(n) * Math.cos(r), i.applyQuaternion(p), e.copy(this.target).add(i), this.object.lookAt(this.target), this.enableDamping === !0 ? (s *= 1 - this.dampingFactor, a *= 1 - this.dampingFactor) : (s = 0, a = 0), u = 1, h.set(0, 0, 0), c || d.distanceToSquared(this.object.position) > o || 8 * (1 - f.dot(this.object.quaternion)) > o ? (d.copy(this.object.position), f.copy(this.object.quaternion), c = !1, !0) : !1
                }
            }()
        }

        function r(r, n) {
            function i(e, t) {
                var r = g.domElement === document ? g.domElement.body : g.domElement;
                v.pan(e, t, r.clientWidth, r.clientHeight)
            }

            function o() {
                return 2 * Math.PI / 60 / 60 * g.autoRotateSpeed
            }

            function a() {
                return Math.pow(.95, g.zoomSpeed)
            }

            function s(e) {
                if (g.enabled !== !1) {
                    if (e.preventDefault(), e.button === g.mouseButtons.ORBIT) {
                        if (g.enableRotate === !1) return;
                        A = T.ROTATE, y.set(e.clientX, e.clientY)
                    } else if (e.button === g.mouseButtons.ZOOM) {
                        if (g.enableZoom === !1) return;
                        A = T.DOLLY, E.set(e.clientX, e.clientY)
                    } else if (e.button === g.mouseButtons.PAN) {
                        if (g.enablePan === !1) return;
                        A = T.PAN, M.set(e.clientX, e.clientY)
                    }
                    A !== T.NONE && (document.addEventListener("mousemove", u, !1), document.addEventListener("mouseup", h, !1), g.dispatchEvent(L))
                }
            }

            function u(e) {
                if (g.enabled !== !1) {
                    e.preventDefault();
                    var t = g.domElement === document ? g.domElement.body : g.domElement;
                    if (A === T.ROTATE) {
                        if (g.enableRotate === !1) return;
                        x.set(e.clientX, e.clientY), b.subVectors(x, y), v.rotateLeft(2 * Math.PI * b.x / t.clientWidth * g.rotateSpeed), v.rotateUp(2 * Math.PI * b.y / t.clientHeight * g.rotateSpeed), y.copy(x)
                    } else if (A === T.DOLLY) {
                        if (g.enableZoom === !1) return;
                        S.set(e.clientX, e.clientY), C.subVectors(S, E), C.y > 0 ? v.dollyIn(a()) : C.y < 0 && v.dollyOut(a()), E.copy(S)
                    } else if (A === T.PAN) {
                        if (g.enablePan === !1) return;
                        w.set(e.clientX, e.clientY), _.subVectors(w, M), i(_.x, _.y), M.copy(w)
                    }
                    A !== T.NONE && g.update()
                }
            }

            function h() {
                g.enabled !== !1 && (document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", h, !1), g.dispatchEvent(D), A = T.NONE)
            }

            function c(e) {
                if (g.enabled !== !1 && g.enableZoom !== !1 && A === T.NONE) {
                    e.preventDefault(), e.stopPropagation();
                    var t = 0;
                    void 0 !== e.wheelDelta ? t = e.wheelDelta : void 0 !== e.detail && (t = -e.detail), t > 0 ? v.dollyOut(a()) : 0 > t && v.dollyIn(a()), g.update(), g.dispatchEvent(L), g.dispatchEvent(D)
                }
            }

            function l(e) {
                if (g.enabled !== !1 && g.enableKeys !== !1 && g.enablePan !== !1) switch (e.keyCode) {
                    case g.keys.UP:
                        i(0, g.keyPanSpeed), g.update();
                        break;
                    case g.keys.BOTTOM:
                        i(0, -g.keyPanSpeed), g.update();
                        break;
                    case g.keys.LEFT:
                        i(g.keyPanSpeed, 0), g.update();
                        break;
                    case g.keys.RIGHT:
                        i(-g.keyPanSpeed, 0), g.update()
                }
            }

            function p(e) {
                if (g.enabled !== !1) {
                    switch (e.touches.length) {
                        case 1:
                            if (g.enableRotate === !1) return;
                            A = T.TOUCH_ROTATE, y.set(e.touches[0].pageX, e.touches[0].pageY);
                            break;
                        case 2:
                            if (g.enableZoom === !1) return;
                            A = T.TOUCH_DOLLY;
                            var t = e.touches[0].pageX - e.touches[1].pageX,
                                r = e.touches[0].pageY - e.touches[1].pageY,
                                n = Math.sqrt(t * t + r * r);
                            E.set(0, n);
                            break;
                        case 3:
                            if (g.enablePan === !1) return;
                            A = T.TOUCH_PAN, M.set(e.touches[0].pageX, e.touches[0].pageY);
                            break;
                        default:
                            A = T.NONE
                    }
                    A !== T.NONE && g.dispatchEvent(L)
                }
            }

            function d(e) {
                if (g.enabled !== !1) {
                    e.preventDefault(), e.stopPropagation();
                    var t = g.domElement === document ? g.domElement.body : g.domElement;
                    switch (e.touches.length) {
                        case 1:
                            if (g.enableRotate === !1) return;
                            if (A !== T.TOUCH_ROTATE) return;
                            x.set(e.touches[0].pageX, e.touches[0].pageY), b.subVectors(x, y), v.rotateLeft(2 * Math.PI * b.x / t.clientWidth * g.rotateSpeed), v.rotateUp(2 * Math.PI * b.y / t.clientHeight * g.rotateSpeed), y.copy(x), g.update();
                            break;
                        case 2:
                            if (g.enableZoom === !1) return;
                            if (A !== T.TOUCH_DOLLY) return;
                            var r = e.touches[0].pageX - e.touches[1].pageX,
                                n = e.touches[0].pageY - e.touches[1].pageY,
                                o = Math.sqrt(r * r + n * n);
                            S.set(0, o), C.subVectors(S, E), C.y > 0 ? v.dollyOut(a()) : C.y < 0 && v.dollyIn(a()), E.copy(S), g.update();
                            break;
                        case 3:
                            if (g.enablePan === !1) return;
                            if (A !== T.TOUCH_PAN) return;
                            w.set(e.touches[0].pageX, e.touches[0].pageY), _.subVectors(w, M), i(_.x, _.y), M.copy(w), g.update();
                            break;
                        default:
                            A = T.NONE
                    }
                }
            }

            function f() {
                g.enabled !== !1 && (g.dispatchEvent(D), A = T.NONE)
            }

            function m(e) {
                e.preventDefault()
            }
            var v = new t(r);
            this.domElement = void 0 !== n ? n : document, Object.defineProperty(this, "constraint", {
                get: function() {
                    return v
                }
            }), this.getPolarAngle = function() {
                return v.getPolarAngle()
            }, this.getAzimuthalAngle = function() {
                return v.getAzimuthalAngle()
            }, this.enabled = !0, this.center = this.target, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                BOTTOM: 40
            }, this.mouseButtons = {
                ORBIT: e.MOUSE.LEFT,
                ZOOM: e.MOUSE.MIDDLE,
                PAN: e.MOUSE.RIGHT
            };
            var g = this,
                y = new e.Vector2,
                x = new e.Vector2,
                b = new e.Vector2,
                M = new e.Vector2,
                w = new e.Vector2,
                _ = new e.Vector2,
                E = new e.Vector2,
                S = new e.Vector2,
                C = new e.Vector2,
                T = {
                    NONE: -1,
                    ROTATE: 0,
                    DOLLY: 1,
                    PAN: 2,
                    TOUCH_ROTATE: 3,
                    TOUCH_DOLLY: 4,
                    TOUCH_PAN: 5
                },
                A = T.NONE;
            this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom;
            var P = {
                    type: "change"
                },
                L = {
                    type: "start"
                },
                D = {
                    type: "end"
                };
            this.update = function() {
                this.autoRotate && A === T.NONE && v.rotateLeft(o()), v.update() === !0 && this.dispatchEvent(P)
            }, this.reset = function() {
                A = T.NONE, this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(P), this.update()
            }, this.dispose = function() {
                this.domElement.removeEventListener("contextmenu", m, !1), this.domElement.removeEventListener("mousedown", s, !1), this.domElement.removeEventListener("mousewheel", c, !1), this.domElement.removeEventListener("MozMousePixelScroll", c, !1), this.domElement.removeEventListener("touchstart", p, !1), this.domElement.removeEventListener("touchend", f, !1), this.domElement.removeEventListener("touchmove", d, !1), document.removeEventListener("mousemove", u, !1), document.removeEventListener("mouseup", h, !1), window.removeEventListener("keydown", l, !1)
            }, this.domElement.addEventListener("contextmenu", m, !1), this.domElement.addEventListener("mousedown", s, !1), this.domElement.addEventListener("mousewheel", c, !1), this.domElement.addEventListener("MozMousePixelScroll", c, !1), this.domElement.addEventListener("touchstart", p, !1), this.domElement.addEventListener("touchend", f, !1), this.domElement.addEventListener("touchmove", d, !1), window.addEventListener("keydown", l, !1), this.update()
        }
        var n = e.MOUSE;
        return n || (n = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        }), r.prototype = Object.create(e.EventDispatcher.prototype), r.prototype.constructor = r, Object.defineProperties(r.prototype, {
            object: {
                get: function() {
                    return this.constraint.object
                }
            },
            target: {
                get: function() {
                    return this.constraint.target
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: target is now immutable. Use target.set() instead."), this.constraint.target.copy(e)
                }
            },
            minDistance: {
                get: function() {
                    return this.constraint.minDistance
                },
                set: function(e) {
                    this.constraint.minDistance = e
                }
            },
            maxDistance: {
                get: function() {
                    return this.constraint.maxDistance
                },
                set: function(e) {
                    this.constraint.maxDistance = e
                }
            },
            minZoom: {
                get: function() {
                    return this.constraint.minZoom
                },
                set: function(e) {
                    this.constraint.minZoom = e
                }
            },
            maxZoom: {
                get: function() {
                    return this.constraint.maxZoom
                },
                set: function(e) {
                    this.constraint.maxZoom = e
                }
            },
            minPolarAngle: {
                get: function() {
                    return this.constraint.minPolarAngle
                },
                set: function(e) {
                    this.constraint.minPolarAngle = e
                }
            },
            maxPolarAngle: {
                get: function() {
                    return this.constraint.maxPolarAngle
                },
                set: function(e) {
                    this.constraint.maxPolarAngle = e
                }
            },
            minAzimuthAngle: {
                get: function() {
                    return this.constraint.minAzimuthAngle
                },
                set: function(e) {
                    this.constraint.minAzimuthAngle = e
                }
            },
            maxAzimuthAngle: {
                get: function() {
                    return this.constraint.maxAzimuthAngle
                },
                set: function(e) {
                    this.constraint.maxAzimuthAngle = e
                }
            },
            enableDamping: {
                get: function() {
                    return this.constraint.enableDamping
                },
                set: function(e) {
                    this.constraint.enableDamping = e
                }
            },
            dampingFactor: {
                get: function() {
                    return this.constraint.dampingFactor
                },
                set: function(e) {
                    this.constraint.dampingFactor = e
                }
            },
            noZoom: {
                get: function() {
                    return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
                }
            },
            noRotate: {
                get: function() {
                    return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
                }
            },
            noPan: {
                get: function() {
                    return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
                }
            },
            noKeys: {
                get: function() {
                    return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
                }
            },
            staticMoving: {
                get: function() {
                    return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.constraint.enableDamping
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.constraint.enableDamping = !e
                }
            },
            dynamicDampingFactor: {
                get: function() {
                    return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.constraint.dampingFactor
                },
                set: function(e) {
                    console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.constraint.dampingFactor = e
                }
            }
        }), r
    }
}, function(e, t, r) {
    var n, i, o = o || {},
        a = {
            REVISION: "72"
        };
    n = a, i = "function" == typeof n ? n.call(t, r, t, e) : n, !(void 0 !== i && (e.exports = i)), (void 0 === o.requestAnimationFrame || void 0 === o.cancelAnimationFrame) && ! function() {
            for (var e = 0, t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !o.requestAnimationFrame; ++r) o.requestAnimationFrame = o[t[r] + "RequestAnimationFrame"], o.cancelAnimationFrame = o[t[r] + "CancelAnimationFrame"] || o[t[r] + "CancelRequestAnimationFrame"];
            void 0 === o.requestAnimationFrame && void 0 !== o.setTimeout && (o.requestAnimationFrame = function(t) {
                var r = Date.now(),
                    n = Math.max(0, 16 - (r - e)),
                    i = o.setTimeout(function() {
                        t(r + n)
                    }, n);
                return e = r + n, i
            }), void 0 === o.cancelAnimationFrame && void 0 !== o.clearTimeout && (o.cancelAnimationFrame = function(e) {
                o.clearTimeout(e)
            })
        }(), void 0 === Math.sign && (Math.sign = function(e) {
            return 0 > e ? -1 : e > 0 ? 1 : +e
        }), void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
            get: function() {
                return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
            }
        }), a.MOUSE = {
            LEFT: 0,
            MIDDLE: 1,
            RIGHT: 2
        }, a.CullFaceNone = 0, a.CullFaceBack = 1, a.CullFaceFront = 2, a.CullFaceFrontBack = 3, a.FrontFaceDirectionCW = 0, a.FrontFaceDirectionCCW = 1, a.BasicShadowMap = 0, a.PCFShadowMap = 1, a.PCFSoftShadowMap = 2, a.FrontSide = 0, a.BackSide = 1, a.DoubleSide = 2, a.FlatShading = 1, a.SmoothShading = 2, a.NoColors = 0, a.FaceColors = 1, a.VertexColors = 2, a.NoBlending = 0, a.NormalBlending = 1, a.AdditiveBlending = 2, a.SubtractiveBlending = 3, a.MultiplyBlending = 4, a.CustomBlending = 5, a.AddEquation = 100, a.SubtractEquation = 101, a.ReverseSubtractEquation = 102, a.MinEquation = 103, a.MaxEquation = 104, a.ZeroFactor = 200, a.OneFactor = 201, a.SrcColorFactor = 202, a.OneMinusSrcColorFactor = 203, a.SrcAlphaFactor = 204, a.OneMinusSrcAlphaFactor = 205, a.DstAlphaFactor = 206, a.OneMinusDstAlphaFactor = 207, a.DstColorFactor = 208, a.OneMinusDstColorFactor = 209, a.SrcAlphaSaturateFactor = 210, a.NeverDepth = 0, a.AlwaysDepth = 1, a.LessDepth = 2, a.LessEqualDepth = 3, a.EqualDepth = 4, a.GreaterEqualDepth = 5, a.GreaterDepth = 6, a.NotEqualDepth = 7, a.MultiplyOperation = 0, a.MixOperation = 1, a.AddOperation = 2, a.UVMapping = 300, a.CubeReflectionMapping = 301, a.CubeRefractionMapping = 302, a.EquirectangularReflectionMapping = 303, a.EquirectangularRefractionMapping = 304, a.SphericalReflectionMapping = 305, a.RepeatWrapping = 1e3, a.ClampToEdgeWrapping = 1001, a.MirroredRepeatWrapping = 1002, a.NearestFilter = 1003, a.NearestMipMapNearestFilter = 1004, a.NearestMipMapLinearFilter = 1005, a.LinearFilter = 1006, a.LinearMipMapNearestFilter = 1007, a.LinearMipMapLinearFilter = 1008, a.UnsignedByteType = 1009, a.ByteType = 1010, a.ShortType = 1011, a.UnsignedShortType = 1012, a.IntType = 1013, a.UnsignedIntType = 1014, a.FloatType = 1015, a.HalfFloatType = 1025, a.UnsignedShort4444Type = 1016, a.UnsignedShort5551Type = 1017, a.UnsignedShort565Type = 1018, a.AlphaFormat = 1019, a.RGBFormat = 1020, a.RGBAFormat = 1021, a.LuminanceFormat = 1022, a.LuminanceAlphaFormat = 1023, a.RGBEFormat = a.RGBAFormat, a.RGB_S3TC_DXT1_Format = 2001, a.RGBA_S3TC_DXT1_Format = 2002, a.RGBA_S3TC_DXT3_Format = 2003, a.RGBA_S3TC_DXT5_Format = 2004, a.RGB_PVRTC_4BPPV1_Format = 2100, a.RGB_PVRTC_2BPPV1_Format = 2101, a.RGBA_PVRTC_4BPPV1_Format = 2102, a.RGBA_PVRTC_2BPPV1_Format = 2103, a.Projector = function() {
            console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(e, t) {
                console.warn("THREE.Projector: .projectVector() is now vector.project()."), e.project(t)
            }, this.unprojectVector = function(e, t) {
                console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), e.unproject(t)
            }, this.pickingRay = function(e, t) {
                console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
            }
        }, a.CanvasRenderer = function() {
            console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElement("canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
        }, a.Color = function(e) {
            return 3 === arguments.length ? this.setRGB(arguments[0], arguments[1], arguments[2]) : this.set(e)
        }, a.Color.prototype = {
            constructor: a.Color,
            r: 1,
            g: 1,
            b: 1,
            set: function(e) {
                return e instanceof a.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e), this
            },
            setHex: function(e) {
                return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, this
            },
            setRGB: function(e, t, r) {
                return this.r = e, this.g = t, this.b = r, this
            },
            setHSL: function() {
                function e(e, t, r) {
                    return 0 > r && (r += 1), r > 1 && (r -= 1), 1 / 6 > r ? e + 6 * (t - e) * r : .5 > r ? t : 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
                }
                return function(t, r, n) {
                    if (t = a.Math.euclideanModulo(t, 1), r = a.Math.clamp(r, 0, 1), n = a.Math.clamp(n, 0, 1), 0 === r) this.r = this.g = this.b = n;
                    else {
                        var i = .5 >= n ? n * (1 + r) : n + r - n * r,
                            o = 2 * n - i;
                        this.r = e(o, i, t + 1 / 3), this.g = e(o, i, t), this.b = e(o, i, t - 1 / 3)
                    }
                    return this
                }
            }(),
            setStyle: function(e) {
                var t, r = function(t) {
                    var r = parseFloat(t);
                    return 1 > r && console.warn("THREE.Color: Alpha component of color " + e + " will be ignored."), r
                };
                if (t = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                    var n, i = t[1],
                        o = t[2];
                    switch (i) {
                        case "rgb":
                            if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*$/.exec(o)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, this;
                            if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(o)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, this;
                            break;
                        case "rgba":
                            if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(o)) return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, r(n[4]), this;
                            if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(o)) return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, r(n[4]), this;
                            break;
                        case "hsl":
                            if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*$/.exec(o)) {
                                var s = parseFloat(n[1]),
                                    u = parseInt(n[2], 10) / 100,
                                    h = parseInt(n[3], 10) / 100;
                                return this.setHSL(s, u, h)
                            }
                            break;
                        case "hsla":
                            if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*([0-9]*\.?[0-9]+)\s*$/.exec(o)) {
                                var s = parseFloat(n[1]),
                                    u = parseInt(n[2], 10) / 100,
                                    h = parseInt(n[3], 10) / 100;
                                return r(n[4]), this.setHSL(s, u, h)
                            }
                    }
                } else if (t = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                    var c = t[1],
                        l = c.length;
                    if (3 === l) return this.r = parseInt(c.charAt(0) + c.charAt(0), 16) / 255, this.g = parseInt(c.charAt(1) + c.charAt(1), 16) / 255, this.b = parseInt(c.charAt(2) + c.charAt(2), 16) / 255, this;
                    if (6 === l) return this.r = parseInt(c.charAt(0) + c.charAt(1), 16) / 255, this.g = parseInt(c.charAt(2) + c.charAt(3), 16) / 255, this.b = parseInt(c.charAt(4) + c.charAt(5), 16) / 255, this
                }
                if (e && e.length > 0) {
                    var c = a.ColorKeywords[e];
                    void 0 !== c ? this.setHex(c) : console.warn("THREE.Color: Unknown color " + e)
                }
                return this
            },
            clone: function() {
                return new this.constructor(this.r, this.g, this.b)
            },
            copy: function(e) {
                return this.r = e.r, this.g = e.g, this.b = e.b, this
            },
            copyGammaToLinear: function(e, t) {
                return void 0 === t && (t = 2), this.r = Math.pow(e.r, t), this.g = Math.pow(e.g, t), this.b = Math.pow(e.b, t), this
            },
            copyLinearToGamma: function(e, t) {
                void 0 === t && (t = 2);
                var r = t > 0 ? 1 / t : 1;
                return this.r = Math.pow(e.r, r), this.g = Math.pow(e.g, r), this.b = Math.pow(e.b, r), this
            },
            convertGammaToLinear: function() {
                var e = this.r,
                    t = this.g,
                    r = this.b;
                return this.r = e * e, this.g = t * t, this.b = r * r, this
            },
            convertLinearToGamma: function() {
                return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
            },
            getHex: function() {
                return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
            },
            getHexString: function() {
                return ("000000" + this.getHex().toString(16)).slice(-6)
            },
            getHSL: function(e) {
                var t, r, n = e || {
                        h: 0,
                        s: 0,
                        l: 0
                    },
                    i = this.r,
                    o = this.g,
                    a = this.b,
                    s = Math.max(i, o, a),
                    u = Math.min(i, o, a),
                    h = (u + s) / 2;
                if (u === s) t = 0, r = 0;
                else {
                    var c = s - u;
                    switch (r = .5 >= h ? c / (s + u) : c / (2 - s - u), s) {
                        case i:
                            t = (o - a) / c + (a > o ? 6 : 0);
                            break;
                        case o:
                            t = (a - i) / c + 2;
                            break;
                        case a:
                            t = (i - o) / c + 4
                    }
                    t /= 6
                }
                return n.h = t, n.s = r, n.l = h, n
            },
            getStyle: function() {
                return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
            },
            offsetHSL: function(e, t, r) {
                var n = this.getHSL();
                return n.h += e, n.s += t, n.l += r, this.setHSL(n.h, n.s, n.l), this
            },
            add: function(e) {
                return this.r += e.r, this.g += e.g, this.b += e.b, this
            },
            addColors: function(e, t) {
                return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
            },
            addScalar: function(e) {
                return this.r += e, this.g += e, this.b += e, this
            },
            multiply: function(e) {
                return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
            },
            multiplyScalar: function(e) {
                return this.r *= e, this.g *= e, this.b *= e, this
            },
            lerp: function(e, t) {
                return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
            },
            equals: function(e) {
                return e.r === this.r && e.g === this.g && e.b === this.b
            },
            fromArray: function(e) {
                return this.r = e[0], this.g = e[1], this.b = e[2], this
            },
            toArray: function(e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
            }
        }, a.ColorKeywords = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        }, a.Quaternion = function(e, t, r, n) {
            this._x = e || 0, this._y = t || 0, this._z = r || 0, this._w = void 0 !== n ? n : 1
        }, a.Quaternion.prototype = {
            constructor: a.Quaternion,
            get x() {
                return this._x
            },
            set x(e) {
                this._x = e, this.onChangeCallback()
            },
            get y() {
                return this._y
            },
            set y(e) {
                this._y = e, this.onChangeCallback()
            },
            get z() {
                return this._z
            },
            set z(e) {
                this._z = e, this.onChangeCallback();
            },
            get w() {
                return this._w
            },
            set w(e) {
                this._w = e, this.onChangeCallback()
            },
            set: function(e, t, r, n) {
                return this._x = e, this._y = t, this._z = r, this._w = n, this.onChangeCallback(), this
            },
            clone: function() {
                return new this.constructor(this._x, this._y, this._z, this._w)
            },
            copy: function(e) {
                return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this.onChangeCallback(), this
            },
            setFromEuler: function(e, t) {
                if (e instanceof a.Euler == 0) throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var r = Math.cos(e._x / 2),
                    n = Math.cos(e._y / 2),
                    i = Math.cos(e._z / 2),
                    o = Math.sin(e._x / 2),
                    s = Math.sin(e._y / 2),
                    u = Math.sin(e._z / 2),
                    h = e.order;
                return "XYZ" === h ? (this._x = o * n * i + r * s * u, this._y = r * s * i - o * n * u, this._z = r * n * u + o * s * i, this._w = r * n * i - o * s * u) : "YXZ" === h ? (this._x = o * n * i + r * s * u, this._y = r * s * i - o * n * u, this._z = r * n * u - o * s * i, this._w = r * n * i + o * s * u) : "ZXY" === h ? (this._x = o * n * i - r * s * u, this._y = r * s * i + o * n * u, this._z = r * n * u + o * s * i, this._w = r * n * i - o * s * u) : "ZYX" === h ? (this._x = o * n * i - r * s * u, this._y = r * s * i + o * n * u, this._z = r * n * u - o * s * i, this._w = r * n * i + o * s * u) : "YZX" === h ? (this._x = o * n * i + r * s * u, this._y = r * s * i + o * n * u, this._z = r * n * u - o * s * i, this._w = r * n * i - o * s * u) : "XZY" === h && (this._x = o * n * i - r * s * u, this._y = r * s * i - o * n * u, this._z = r * n * u + o * s * i, this._w = r * n * i + o * s * u), t !== !1 && this.onChangeCallback(), this
            },
            setFromAxisAngle: function(e, t) {
                var r = t / 2,
                    n = Math.sin(r);
                return this._x = e.x * n, this._y = e.y * n, this._z = e.z * n, this._w = Math.cos(r), this.onChangeCallback(), this
            },
            setFromRotationMatrix: function(e) {
                var t, r = e.elements,
                    n = r[0],
                    i = r[4],
                    o = r[8],
                    a = r[1],
                    s = r[5],
                    u = r[9],
                    h = r[2],
                    c = r[6],
                    l = r[10],
                    p = n + s + l;
                return p > 0 ? (t = .5 / Math.sqrt(p + 1), this._w = .25 / t, this._x = (c - u) * t, this._y = (o - h) * t, this._z = (a - i) * t) : n > s && n > l ? (t = 2 * Math.sqrt(1 + n - s - l), this._w = (c - u) / t, this._x = .25 * t, this._y = (i + a) / t, this._z = (o + h) / t) : s > l ? (t = 2 * Math.sqrt(1 + s - n - l), this._w = (o - h) / t, this._x = (i + a) / t, this._y = .25 * t, this._z = (u + c) / t) : (t = 2 * Math.sqrt(1 + l - n - s), this._w = (a - i) / t, this._x = (o + h) / t, this._y = (u + c) / t, this._z = .25 * t), this.onChangeCallback(), this
            },
            setFromUnitVectors: function() {
                var e, t, r = 1e-6;
                return function(n, i) {
                    return void 0 === e && (e = new a.Vector3), t = n.dot(i) + 1, r > t ? (t = 0, Math.abs(n.x) > Math.abs(n.z) ? e.set(-n.y, n.x, 0) : e.set(0, -n.z, n.y)) : e.crossVectors(n, i), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize(), this
                }
            }(),
            inverse: function() {
                return this.conjugate().normalize(), this
            },
            conjugate: function() {
                return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
            },
            dot: function(e) {
                return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
            },
            lengthSq: function() {
                return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
            },
            length: function() {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            },
            normalize: function() {
                var e = this.length();
                return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this.onChangeCallback(), this
            },
            multiply: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
            },
            multiplyQuaternions: function(e, t) {
                var r = e._x,
                    n = e._y,
                    i = e._z,
                    o = e._w,
                    a = t._x,
                    s = t._y,
                    u = t._z,
                    h = t._w;
                return this._x = r * h + o * a + n * u - i * s, this._y = n * h + o * s + i * a - r * u, this._z = i * h + o * u + r * s - n * a, this._w = o * h - r * a - n * s - i * u, this.onChangeCallback(), this
            },
            multiplyVector3: function(e) {
                return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), e.applyQuaternion(this)
            },
            slerp: function(e, t) {
                if (0 === t) return this;
                if (1 === t) return this.copy(e);
                var r = this._x,
                    n = this._y,
                    i = this._z,
                    o = this._w,
                    a = o * e._w + r * e._x + n * e._y + i * e._z;
                if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = r, this._y = n, this._z = i, this;
                var s = Math.acos(a),
                    u = Math.sqrt(1 - a * a);
                if (Math.abs(u) < .001) return this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (n + this._y), this._z = .5 * (i + this._z), this;
                var h = Math.sin((1 - t) * s) / u,
                    c = Math.sin(t * s) / u;
                return this._w = o * h + this._w * c, this._x = r * h + this._x * c, this._y = n * h + this._y * c, this._z = i * h + this._z * c, this.onChangeCallback(), this
            },
            equals: function(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
            },
            fromArray: function(e, t) {
                return void 0 === t && (t = 0), this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this.onChangeCallback(), this
            },
            toArray: function(e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
            },
            onChange: function(e) {
                return this.onChangeCallback = e, this
            },
            onChangeCallback: function() {}
        }, a.Quaternion.slerp = function(e, t, r, n) {
            return r.copy(e).slerp(t, n)
        }, a.Vector2 = function(e, t) {
            this.x = e || 0, this.y = t || 0
        }, a.Vector2.prototype = {
            constructor: a.Vector2,
            set: function(e, t) {
                return this.x = e, this.y = t, this
            },
            setX: function(e) {
                return this.x = e, this
            },
            setY: function(e) {
                return this.y = e, this
            },
            setComponent: function(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            },
            getComponent: function(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y)
            },
            copy: function(e) {
                return this.x = e.x, this.y = e.y, this
            },
            add: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
            },
            addScalar: function(e) {
                return this.x += e, this.y += e, this
            },
            addVectors: function(e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this
            },
            addScaledVector: function(e, t) {
                return this.x += e.x * t, this.y += e.y * t, this
            },
            sub: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
            },
            subScalar: function(e) {
                return this.x -= e, this.y -= e, this
            },
            subVectors: function(e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this
            },
            multiply: function(e) {
                return this.x *= e.x, this.y *= e.y, this
            },
            multiplyScalar: function(e) {
                return this.x *= e, this.y *= e, this
            },
            divide: function(e) {
                return this.x /= e.x, this.y /= e.y, this
            },
            divideScalar: function(e) {
                if (0 !== e) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t
                } else this.x = 0, this.y = 0;
                return this
            },
            min: function(e) {
                return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
            },
            max: function(e) {
                return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
            },
            clamp: function(e, t) {
                return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
            },
            clampScalar: function() {
                var e, t;
                return function(r, n) {
                    return void 0 === e && (e = new a.Vector2, t = new a.Vector2), e.set(r, r), t.set(n, n), this.clamp(e, t)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this
            },
            dot: function(e) {
                return this.x * e.x + this.y * e.y
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            distanceTo: function(e) {
                return Math.sqrt(this.distanceToSquared(e))
            },
            distanceToSquared: function(e) {
                var t = this.x - e.x,
                    r = this.y - e.y;
                return t * t + r * r
            },
            setLength: function(e) {
                var t = this.length();
                return 0 !== t && e !== t && this.multiplyScalar(e / t), this
            },
            lerp: function(e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
            },
            lerpVectors: function(e, t, r) {
                return this.subVectors(t, e).multiplyScalar(r).add(e), this
            },
            equals: function(e) {
                return e.x === this.x && e.y === this.y
            },
            fromArray: function(e, t) {
                return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this
            },
            toArray: function(e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e
            },
            fromAttribute: function(e, t, r) {
                return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this
            }
        }, a.Vector3 = function(e, t, r) {
            this.x = e || 0, this.y = t || 0, this.z = r || 0
        }, a.Vector3.prototype = {
            constructor: a.Vector3,
            set: function(e, t, r) {
                return this.x = e, this.y = t, this.z = r, this
            },
            setX: function(e) {
                return this.x = e, this
            },
            setY: function(e) {
                return this.y = e, this
            },
            setZ: function(e) {
                return this.z = e, this
            },
            setComponent: function(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            },
            getComponent: function(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y, this.z)
            },
            copy: function(e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this
            },
            add: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
            },
            addScalar: function(e) {
                return this.x += e, this.y += e, this.z += e, this
            },
            addVectors: function(e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
            },
            addScaledVector: function(e, t) {
                return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
            },
            sub: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
            },
            subScalar: function(e) {
                return this.x -= e, this.y -= e, this.z -= e, this
            },
            subVectors: function(e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
            },
            multiply: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
            },
            multiplyScalar: function(e) {
                return this.x *= e, this.y *= e, this.z *= e, this
            },
            multiplyVectors: function(e, t) {
                return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
            },
            applyEuler: function() {
                var e;
                return function(t) {
                    return t instanceof a.Euler == 0 && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."), void 0 === e && (e = new a.Quaternion), this.applyQuaternion(e.setFromEuler(t)), this
                }
            }(),
            applyAxisAngle: function() {
                var e;
                return function(t, r) {
                    return void 0 === e && (e = new a.Quaternion), this.applyQuaternion(e.setFromAxisAngle(t, r)), this
                }
            }(),
            applyMatrix3: function(e) {
                var t = this.x,
                    r = this.y,
                    n = this.z,
                    i = e.elements;
                return this.x = i[0] * t + i[3] * r + i[6] * n, this.y = i[1] * t + i[4] * r + i[7] * n, this.z = i[2] * t + i[5] * r + i[8] * n, this
            },
            applyMatrix4: function(e) {
                var t = this.x,
                    r = this.y,
                    n = this.z,
                    i = e.elements;
                return this.x = i[0] * t + i[4] * r + i[8] * n + i[12], this.y = i[1] * t + i[5] * r + i[9] * n + i[13], this.z = i[2] * t + i[6] * r + i[10] * n + i[14], this
            },
            applyProjection: function(e) {
                var t = this.x,
                    r = this.y,
                    n = this.z,
                    i = e.elements,
                    o = 1 / (i[3] * t + i[7] * r + i[11] * n + i[15]);
                return this.x = (i[0] * t + i[4] * r + i[8] * n + i[12]) * o, this.y = (i[1] * t + i[5] * r + i[9] * n + i[13]) * o, this.z = (i[2] * t + i[6] * r + i[10] * n + i[14]) * o, this
            },
            applyQuaternion: function(e) {
                var t = this.x,
                    r = this.y,
                    n = this.z,
                    i = e.x,
                    o = e.y,
                    a = e.z,
                    s = e.w,
                    u = s * t + o * n - a * r,
                    h = s * r + a * t - i * n,
                    c = s * n + i * r - o * t,
                    l = -i * t - o * r - a * n;
                return this.x = u * s + l * -i + h * -a - c * -o, this.y = h * s + l * -o + c * -i - u * -a, this.z = c * s + l * -a + u * -o - h * -i, this
            },
            project: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)), this.applyProjection(e)
                }
            }(),
            unproject: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)), this.applyProjection(e)
                }
            }(),
            transformDirection: function(e) {
                var t = this.x,
                    r = this.y,
                    n = this.z,
                    i = e.elements;
                return this.x = i[0] * t + i[4] * r + i[8] * n, this.y = i[1] * t + i[5] * r + i[9] * n, this.z = i[2] * t + i[6] * r + i[10] * n, this.normalize(), this
            },
            divide: function(e) {
                return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
            },
            divideScalar: function(e) {
                if (0 !== e) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t, this.z *= t
                } else this.x = 0, this.y = 0, this.z = 0;
                return this
            },
            min: function(e) {
                return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
            },
            max: function(e) {
                return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
            },
            clamp: function(e, t) {
                return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
            },
            clampScalar: function() {
                var e, t;
                return function(r, n) {
                    return void 0 === e && (e = new a.Vector3, t = new a.Vector3), e.set(r, r, r), t.set(n, n, n), this.clamp(e, t)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
            },
            dot: function(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            setLength: function(e) {
                var t = this.length();
                return 0 !== t && e !== t && this.multiplyScalar(e / t), this
            },
            lerp: function(e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
            },
            lerpVectors: function(e, t, r) {
                return this.subVectors(t, e).multiplyScalar(r).add(e), this
            },
            cross: function(e, t) {
                if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(e, t);
                var r = this.x,
                    n = this.y,
                    i = this.z;
                return this.x = n * e.z - i * e.y, this.y = i * e.x - r * e.z, this.z = r * e.y - n * e.x, this
            },
            crossVectors: function(e, t) {
                var r = e.x,
                    n = e.y,
                    i = e.z,
                    o = t.x,
                    a = t.y,
                    s = t.z;
                return this.x = n * s - i * a, this.y = i * o - r * s, this.z = r * a - n * o, this
            },
            projectOnVector: function() {
                var e, t;
                return function(r) {
                    return void 0 === e && (e = new a.Vector3), e.copy(r).normalize(), t = this.dot(e), this.copy(e).multiplyScalar(t)
                }
            }(),
            projectOnPlane: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Vector3), e.copy(this).projectOnVector(t), this.sub(e)
                }
            }(),
            reflect: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Vector3), this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
                }
            }(),
            angleTo: function(e) {
                var t = this.dot(e) / (this.length() * e.length());
                return Math.acos(a.Math.clamp(t, -1, 1))
            },
            distanceTo: function(e) {
                return Math.sqrt(this.distanceToSquared(e))
            },
            distanceToSquared: function(e) {
                var t = this.x - e.x,
                    r = this.y - e.y,
                    n = this.z - e.z;
                return t * t + r * r + n * n
            },
            setEulerFromRotationMatrix: function(e, t) {
                console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
            },
            setEulerFromQuaternion: function(e, t) {
                console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
            },
            getPositionFromMatrix: function(e) {
                return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(e)
            },
            getScaleFromMatrix: function(e) {
                return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(e)
            },
            getColumnFromMatrix: function(e, t) {
                return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
            },
            setFromMatrixPosition: function(e) {
                return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
            },
            setFromMatrixScale: function(e) {
                var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
                    r = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
                    n = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
                return this.x = t, this.y = r, this.z = n, this
            },
            setFromMatrixColumn: function(e, t) {
                var r = 4 * e,
                    n = t.elements;
                return this.x = n[r], this.y = n[r + 1], this.z = n[r + 2], this
            },
            equals: function(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z
            },
            fromArray: function(e, t) {
                return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
            },
            toArray: function(e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
            },
            fromAttribute: function(e, t, r) {
                return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this
            }
        }, a.Vector4 = function(e, t, r, n) {
            this.x = e || 0, this.y = t || 0, this.z = r || 0, this.w = void 0 !== n ? n : 1
        }, a.Vector4.prototype = {
            constructor: a.Vector4,
            set: function(e, t, r, n) {
                return this.x = e, this.y = t, this.z = r, this.w = n, this
            },
            setX: function(e) {
                return this.x = e, this
            },
            setY: function(e) {
                return this.y = e, this
            },
            setZ: function(e) {
                return this.z = e, this
            },
            setW: function(e) {
                return this.w = e, this
            },
            setComponent: function(e, t) {
                switch (e) {
                    case 0:
                        this.x = t;
                        break;
                    case 1:
                        this.y = t;
                        break;
                    case 2:
                        this.z = t;
                        break;
                    case 3:
                        this.w = t;
                        break;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            },
            getComponent: function(e) {
                switch (e) {
                    case 0:
                        return this.x;
                    case 1:
                        return this.y;
                    case 2:
                        return this.z;
                    case 3:
                        return this.w;
                    default:
                        throw new Error("index is out of range: " + e)
                }
            },
            clone: function() {
                return new this.constructor(this.x, this.y, this.z, this.w)
            },
            copy: function(e) {
                return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
            },
            add: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
            },
            addScalar: function(e) {
                return this.x += e, this.y += e, this.z += e, this.w += e, this
            },
            addVectors: function(e, t) {
                return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
            },
            addScaledVector: function(e, t) {
                return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
            },
            sub: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
            },
            subScalar: function(e) {
                return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
            },
            subVectors: function(e, t) {
                return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
            },
            multiplyScalar: function(e) {
                return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
            },
            applyMatrix4: function(e) {
                var t = this.x,
                    r = this.y,
                    n = this.z,
                    i = this.w,
                    o = e.elements;
                return this.x = o[0] * t + o[4] * r + o[8] * n + o[12] * i, this.y = o[1] * t + o[5] * r + o[9] * n + o[13] * i, this.z = o[2] * t + o[6] * r + o[10] * n + o[14] * i, this.w = o[3] * t + o[7] * r + o[11] * n + o[15] * i, this
            },
            divideScalar: function(e) {
                if (0 !== e) {
                    var t = 1 / e;
                    this.x *= t, this.y *= t, this.z *= t, this.w *= t
                } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
                return this
            },
            setAxisAngleFromQuaternion: function(e) {
                this.w = 2 * Math.acos(e.w);
                var t = Math.sqrt(1 - e.w * e.w);
                return 1e-4 > t ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
            },
            setAxisAngleFromRotationMatrix: function(e) {
                var t, r, n, i, o = .01,
                    a = .1,
                    s = e.elements,
                    u = s[0],
                    h = s[4],
                    c = s[8],
                    l = s[1],
                    p = s[5],
                    d = s[9],
                    f = s[2],
                    m = s[6],
                    v = s[10];
                if (Math.abs(h - l) < o && Math.abs(c - f) < o && Math.abs(d - m) < o) {
                    if (Math.abs(h + l) < a && Math.abs(c + f) < a && Math.abs(d + m) < a && Math.abs(u + p + v - 3) < a) return this.set(1, 0, 0, 0), this;
                    t = Math.PI;
                    var g = (u + 1) / 2,
                        y = (p + 1) / 2,
                        x = (v + 1) / 2,
                        b = (h + l) / 4,
                        M = (c + f) / 4,
                        w = (d + m) / 4;
                    return g > y && g > x ? o > g ? (r = 0, n = .707106781, i = .707106781) : (r = Math.sqrt(g), n = b / r, i = M / r) : y > x ? o > y ? (r = .707106781, n = 0, i = .707106781) : (n = Math.sqrt(y), r = b / n, i = w / n) : o > x ? (r = .707106781, n = .707106781, i = 0) : (i = Math.sqrt(x), r = M / i, n = w / i), this.set(r, n, i, t), this
                }
                var _ = Math.sqrt((m - d) * (m - d) + (c - f) * (c - f) + (l - h) * (l - h));
                return Math.abs(_) < .001 && (_ = 1), this.x = (m - d) / _, this.y = (c - f) / _, this.z = (l - h) / _, this.w = Math.acos((u + p + v - 1) / 2), this
            },
            min: function(e) {
                return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
            },
            max: function(e) {
                return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
            },
            clamp: function(e, t) {
                return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
            },
            clampScalar: function() {
                var e, t;
                return function(r, n) {
                    return void 0 === e && (e = new a.Vector4, t = new a.Vector4), e.set(r, r, r, r), t.set(n, n, n, n), this.clamp(e, t)
                }
            }(),
            floor: function() {
                return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
            },
            ceil: function() {
                return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
            },
            round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
            },
            roundToZero: function() {
                return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
            },
            negate: function() {
                return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
            },
            dot: function(e) {
                return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
            },
            lengthSq: function() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
            },
            length: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
            },
            lengthManhattan: function() {
                return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            setLength: function(e) {
                var t = this.length();
                return 0 !== t && e !== t && this.multiplyScalar(e / t), this
            },
            lerp: function(e, t) {
                return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
            },
            lerpVectors: function(e, t, r) {
                return this.subVectors(t, e).multiplyScalar(r).add(e), this
            },
            equals: function(e) {
                return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
            },
            fromArray: function(e, t) {
                return void 0 === t && (t = 0), this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
            },
            toArray: function(e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
            },
            fromAttribute: function(e, t, r) {
                return void 0 === r && (r = 0), t = t * e.itemSize + r, this.x = e.array[t], this.y = e.array[t + 1], this.z = e.array[t + 2], this.w = e.array[t + 3], this
            }
        }, a.Euler = function(e, t, r, n) {
            this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = n || a.Euler.DefaultOrder
        }, a.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], a.Euler.DefaultOrder = "XYZ", a.Euler.prototype = {
            constructor: a.Euler,
            get x() {
                return this._x
            },
            set x(e) {
                this._x = e, this.onChangeCallback()
            },
            get y() {
                return this._y
            },
            set y(e) {
                this._y = e, this.onChangeCallback()
            },
            get z() {
                return this._z
            },
            set z(e) {
                this._z = e, this.onChangeCallback()
            },
            get order() {
                return this._order
            },
            set order(e) {
                this._order = e, this.onChangeCallback()
            },
            set: function(e, t, r, n) {
                return this._x = e, this._y = t, this._z = r, this._order = n || this._order, this.onChangeCallback(), this
            },
            clone: function() {
                return new this.constructor(this._x, this._y, this._z, this._order)
            },
            copy: function(e) {
                return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this.onChangeCallback(), this
            },
            setFromRotationMatrix: function(e, t, r) {
                var n = a.Math.clamp,
                    i = e.elements,
                    o = i[0],
                    s = i[4],
                    u = i[8],
                    h = i[1],
                    c = i[5],
                    l = i[9],
                    p = i[2],
                    d = i[6],
                    f = i[10];
                return t = t || this._order, "XYZ" === t ? (this._y = Math.asin(n(u, -1, 1)), Math.abs(u) < .99999 ? (this._x = Math.atan2(-l, f), this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(d, c), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < .99999 ? (this._y = Math.atan2(u, f), this._z = Math.atan2(h, c)) : (this._y = Math.atan2(-p, o), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(n(d, -1, 1)), Math.abs(d) < .99999 ? (this._y = Math.atan2(-p, f), this._z = Math.atan2(-s, c)) : (this._y = 0, this._z = Math.atan2(h, o))) : "ZYX" === t ? (this._y = Math.asin(-n(p, -1, 1)), Math.abs(p) < .99999 ? (this._x = Math.atan2(d, f), this._z = Math.atan2(h, o)) : (this._x = 0, this._z = Math.atan2(-s, c))) : "YZX" === t ? (this._z = Math.asin(n(h, -1, 1)), Math.abs(h) < .99999 ? (this._x = Math.atan2(-l, c), this._y = Math.atan2(-p, o)) : (this._x = 0, this._y = Math.atan2(u, f))) : "XZY" === t ? (this._z = Math.asin(-n(s, -1, 1)), Math.abs(s) < .99999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(u, o)) : (this._x = Math.atan2(-l, f), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t), this._order = t, r !== !1 && this.onChangeCallback(), this
            },
            setFromQuaternion: function() {
                var e;
                return function(t, r, n) {
                    return void 0 === e && (e = new a.Matrix4), e.makeRotationFromQuaternion(t), this.setFromRotationMatrix(e, r, n), this
                }
            }(),
            setFromVector3: function(e, t) {
                return this.set(e.x, e.y, e.z, t || this._order)
            },
            reorder: function() {
                var e = new a.Quaternion;
                return function(t) {
                    e.setFromEuler(this), this.setFromQuaternion(e, t)
                }
            }(),
            equals: function(e) {
                return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
            },
            fromArray: function(e) {
                return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this.onChangeCallback(), this
            },
            toArray: function(e, t) {
                return void 0 === e && (e = []), void 0 === t && (t = 0), e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
            },
            toVector3: function(e) {
                return e ? e.set(this._x, this._y, this._z) : new a.Vector3(this._x, this._y, this._z)
            },
            onChange: function(e) {
                return this.onChangeCallback = e, this
            },
            onChangeCallback: function() {}
        }, a.Line3 = function(e, t) {
            this.start = void 0 !== e ? e : new a.Vector3, this.end = void 0 !== t ? t : new a.Vector3
        }, a.Line3.prototype = {
            constructor: a.Line3,
            set: function(e, t) {
                return this.start.copy(e), this.end.copy(t), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.start.copy(e.start), this.end.copy(e.end), this
            },
            center: function(e) {
                var t = e || new a.Vector3;
                return t.addVectors(this.start, this.end).multiplyScalar(.5)
            },
            delta: function(e) {
                var t = e || new a.Vector3;
                return t.subVectors(this.end, this.start)
            },
            distanceSq: function() {
                return this.start.distanceToSquared(this.end)
            },
            distance: function() {
                return this.start.distanceTo(this.end)
            },
            at: function(e, t) {
                var r = t || new a.Vector3;
                return this.delta(r).multiplyScalar(e).add(this.start)
            },
            closestPointToPointParameter: function() {
                var e = new a.Vector3,
                    t = new a.Vector3;
                return function(r, n) {
                    e.subVectors(r, this.start), t.subVectors(this.end, this.start);
                    var i = t.dot(t),
                        o = t.dot(e),
                        s = o / i;
                    return n && (s = a.Math.clamp(s, 0, 1)), s
                }
            }(),
            closestPointToPoint: function(e, t, r) {
                var n = this.closestPointToPointParameter(e, t),
                    i = r || new a.Vector3;
                return this.delta(i).multiplyScalar(n).add(this.start)
            },
            applyMatrix4: function(e) {
                return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
            },
            equals: function(e) {
                return e.start.equals(this.start) && e.end.equals(this.end)
            }
        }, a.Box2 = function(e, t) {
            this.min = void 0 !== e ? e : new a.Vector2(1 / 0, 1 / 0), this.max = void 0 !== t ? t : new a.Vector2(-(1 / 0), -(1 / 0))
        }, a.Box2.prototype = {
            constructor: a.Box2,
            set: function(e, t) {
                return this.min.copy(e), this.max.copy(t), this
            },
            setFromPoints: function(e) {
                this.makeEmpty();
                for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
                return this
            },
            setFromCenterAndSize: function() {
                var e = new a.Vector2;
                return function(t, r) {
                    var n = e.copy(r).multiplyScalar(.5);
                    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -(1 / 0), this
            },
            empty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y
            },
            center: function(e) {
                var t = e || new a.Vector2;
                return t.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            size: function(e) {
                var t = e || new a.Vector2;
                return t.subVectors(this.max, this.min)
            },
            expandByPoint: function(e) {
                return this.min.min(e), this.max.max(e), this
            },
            expandByVector: function(e) {
                return this.min.sub(e), this.max.add(e), this
            },
            expandByScalar: function(e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            },
            containsPoint: function(e) {
                return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
            },
            containsBox: function(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
            },
            getParameter: function(e, t) {
                var r = t || new a.Vector2;
                return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
            },
            isIntersectionBox: function(e) {
                return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
            },
            clampPoint: function(e, t) {
                var r = t || new a.Vector2;
                return r.copy(e).clamp(this.min, this.max)
            },
            distanceToPoint: function() {
                var e = new a.Vector2;
                return function(t) {
                    var r = e.copy(t).clamp(this.min, this.max);
                    return r.sub(t).length()
                }
            }(),
            intersect: function(e) {
                return this.min.max(e.min), this.max.min(e.max), this
            },
            union: function(e) {
                return this.min.min(e.min), this.max.max(e.max), this
            },
            translate: function(e) {
                return this.min.add(e), this.max.add(e), this
            },
            equals: function(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }, a.Box3 = function(e, t) {
            this.min = void 0 !== e ? e : new a.Vector3(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== t ? t : new a.Vector3(-(1 / 0), -(1 / 0), -(1 / 0))
        }, a.Box3.prototype = {
            constructor: a.Box3,
            set: function(e, t) {
                return this.min.copy(e), this.max.copy(t), this
            },
            setFromPoints: function(e) {
                this.makeEmpty();
                for (var t = 0, r = e.length; r > t; t++) this.expandByPoint(e[t]);
                return this
            },
            setFromCenterAndSize: function() {
                var e = new a.Vector3;
                return function(t, r) {
                    var n = e.copy(r).multiplyScalar(.5);
                    return this.min.copy(t).sub(n), this.max.copy(t).add(n), this
                }
            }(),
            setFromObject: function() {
                var e = new a.Vector3;
                return function(t) {
                    var r = this;
                    return t.updateMatrixWorld(!0), this.makeEmpty(), t.traverse(function(t) {
                        var n = t.geometry;
                        if (void 0 !== n)
                            if (n instanceof a.Geometry)
                                for (var i = n.vertices, o = 0, s = i.length; s > o; o++) e.copy(i[o]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e);
                            else if (n instanceof a.BufferGeometry && void 0 !== n.attributes.position)
                            for (var u = n.attributes.position.array, o = 0, s = u.length; s > o; o += 3) e.set(u[o], u[o + 1], u[o + 2]), e.applyMatrix4(t.matrixWorld), r.expandByPoint(e)
                    }), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.min.copy(e.min), this.max.copy(e.max), this
            },
            makeEmpty: function() {
                return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -(1 / 0), this
            },
            empty: function() {
                return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
            },
            center: function(e) {
                var t = e || new a.Vector3;
                return t.addVectors(this.min, this.max).multiplyScalar(.5)
            },
            size: function(e) {
                var t = e || new a.Vector3;
                return t.subVectors(this.max, this.min)
            },
            expandByPoint: function(e) {
                return this.min.min(e), this.max.max(e), this
            },
            expandByVector: function(e) {
                return this.min.sub(e), this.max.add(e), this
            },
            expandByScalar: function(e) {
                return this.min.addScalar(-e), this.max.addScalar(e), this
            },
            containsPoint: function(e) {
                return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
            },
            containsBox: function(e) {
                return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
            },
            getParameter: function(e, t) {
                var r = t || new a.Vector3;
                return r.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
            },
            isIntersectionBox: function(e) {
                return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
            },
            clampPoint: function(e, t) {
                var r = t || new a.Vector3;
                return r.copy(e).clamp(this.min, this.max)
            },
            distanceToPoint: function() {
                var e = new a.Vector3;
                return function(t) {
                    var r = e.copy(t).clamp(this.min, this.max);
                    return r.sub(t).length()
                }
            }(),
            getBoundingSphere: function() {
                var e = new a.Vector3;
                return function(t) {
                    var r = t || new a.Sphere;
                    return r.center = this.center(), r.radius = .5 * this.size(e).length(), r
                }
            }(),
            intersect: function(e) {
                return this.min.max(e.min), this.max.min(e.max), this
            },
            union: function(e) {
                return this.min.min(e.min), this.max.max(e.max), this
            },
            applyMatrix4: function() {
                var e = [new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3, new a.Vector3];
                return function(t) {
                    return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
                        e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.makeEmpty(), this.setFromPoints(e), this
                }
            }(),
            translate: function(e) {
                return this.min.add(e), this.max.add(e), this
            },
            equals: function(e) {
                return e.min.equals(this.min) && e.max.equals(this.max)
            }
        }, a.Matrix3 = function() {
            this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }, a.Matrix3.prototype = {
            constructor: a.Matrix3,
            set: function(e, t, r, n, i, o, a, s, u) {
                var h = this.elements;
                return h[0] = e, h[3] = t, h[6] = r, h[1] = n, h[4] = i, h[7] = o, h[2] = a, h[5] = s, h[8] = u, this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
            },
            clone: function() {
                return (new this.constructor).fromArray(this.elements)
            },
            copy: function(e) {
                var t = e.elements;
                return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
            },
            multiplyVector3: function(e) {
                return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
            },
            multiplyVector3Array: function(e) {
                return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
            },
            applyToVector3Array: function() {
                var e;
                return function(t, r, n) {
                    void 0 === e && (e = new a.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length);
                    for (var i = 0, o = r; n > i; i += 3, o += 3) e.fromArray(t, o), e.applyMatrix3(this), e.toArray(t, o);
                    return t
                }
            }(),
            applyToBuffer: function() {
                var e;
                return function(t, r, n) {
                    void 0 === e && (e = new a.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length / t.itemSize);
                    for (var i = 0, o = r; n > i; i++, o++) e.x = t.getX(o), e.y = t.getY(o), e.z = t.getZ(o), e.applyMatrix3(this), t.setXYZ(e.x, e.y, e.z);
                    return t
                }
            }(),
            multiplyScalar: function(e) {
                var t = this.elements;
                return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
            },
            determinant: function() {
                var e = this.elements,
                    t = e[0],
                    r = e[1],
                    n = e[2],
                    i = e[3],
                    o = e[4],
                    a = e[5],
                    s = e[6],
                    u = e[7],
                    h = e[8];
                return t * o * h - t * a * u - r * i * h + r * a * s + n * i * u - n * o * s
            },
            getInverse: function(e, t) {
                var r = e.elements,
                    n = this.elements;
                n[0] = r[10] * r[5] - r[6] * r[9], n[1] = -r[10] * r[1] + r[2] * r[9], n[2] = r[6] * r[1] - r[2] * r[5], n[3] = -r[10] * r[4] + r[6] * r[8], n[4] = r[10] * r[0] - r[2] * r[8], n[5] = -r[6] * r[0] + r[2] * r[4], n[6] = r[9] * r[4] - r[5] * r[8], n[7] = -r[9] * r[0] + r[1] * r[8], n[8] = r[5] * r[0] - r[1] * r[4];
                var i = r[0] * n[0] + r[1] * n[3] + r[2] * n[6];
                if (0 === i) {
                    var o = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
                    if (t) throw new Error(o);
                    return console.warn(o), this.identity(), this
                }
                return this.multiplyScalar(1 / i), this
            },
            transpose: function() {
                var e, t = this.elements;
                return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
            },
            flattenToArrayOffset: function(e, t) {
                var r = this.elements;
                return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e
            },
            getNormalMatrix: function(e) {
                return this.getInverse(e).transpose(), this
            },
            transposeIntoArray: function(e) {
                var t = this.elements;
                return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
            },
            fromArray: function(e) {
                return this.elements.set(e), this
            },
            toArray: function() {
                var e = this.elements;
                return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
            }
        }, a.Matrix4 = function() {
            this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }, a.Matrix4.prototype = {
            constructor: a.Matrix4,
            set: function(e, t, r, n, i, o, a, s, u, h, c, l, p, d, f, m) {
                var v = this.elements;
                return v[0] = e, v[4] = t, v[8] = r, v[12] = n, v[1] = i, v[5] = o, v[9] = a, v[13] = s, v[2] = u, v[6] = h, v[10] = c, v[14] = l, v[3] = p, v[7] = d, v[11] = f, v[15] = m, this
            },
            identity: function() {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            clone: function() {
                return (new a.Matrix4).fromArray(this.elements)
            },
            copy: function(e) {
                return this.elements.set(e.elements), this
            },
            extractPosition: function(e) {
                return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(e)
            },
            copyPosition: function(e) {
                var t = this.elements,
                    r = e.elements;
                return t[12] = r[12], t[13] = r[13], t[14] = r[14], this
            },
            extractBasis: function(e, t, r) {
                var n = this.elements;
                return e.set(n[0], n[1], n[2]), t.set(n[4], n[5], n[6]), r.set(n[8], n[9], n[10]), this
            },
            makeBasis: function(e, t, r) {
                return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1), this
            },
            extractRotation: function() {
                var e;
                return function(t) {
                    void 0 === e && (e = new a.Vector3);
                    var r = this.elements,
                        n = t.elements,
                        i = 1 / e.set(n[0], n[1], n[2]).length(),
                        o = 1 / e.set(n[4], n[5], n[6]).length(),
                        s = 1 / e.set(n[8], n[9], n[10]).length();
                    return r[0] = n[0] * i, r[1] = n[1] * i, r[2] = n[2] * i, r[4] = n[4] * o, r[5] = n[5] * o, r[6] = n[6] * o, r[8] = n[8] * s, r[9] = n[9] * s, r[10] = n[10] * s, this
                }
            }(),
            makeRotationFromEuler: function(e) {
                e instanceof a.Euler == 0 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
                var t = this.elements,
                    r = e.x,
                    n = e.y,
                    i = e.z,
                    o = Math.cos(r),
                    s = Math.sin(r),
                    u = Math.cos(n),
                    h = Math.sin(n),
                    c = Math.cos(i),
                    l = Math.sin(i);
                if ("XYZ" === e.order) {
                    var p = o * c,
                        d = o * l,
                        f = s * c,
                        m = s * l;
                    t[0] = u * c, t[4] = -u * l, t[8] = h, t[1] = d + f * h, t[5] = p - m * h, t[9] = -s * u, t[2] = m - p * h, t[6] = f + d * h, t[10] = o * u
                } else if ("YXZ" === e.order) {
                    var v = u * c,
                        g = u * l,
                        y = h * c,
                        x = h * l;
                    t[0] = v + x * s, t[4] = y * s - g, t[8] = o * h, t[1] = o * l, t[5] = o * c, t[9] = -s, t[2] = g * s - y, t[6] = x + v * s, t[10] = o * u
                } else if ("ZXY" === e.order) {
                    var v = u * c,
                        g = u * l,
                        y = h * c,
                        x = h * l;
                    t[0] = v - x * s, t[4] = -o * l, t[8] = y + g * s, t[1] = g + y * s, t[5] = o * c, t[9] = x - v * s, t[2] = -o * h, t[6] = s, t[10] = o * u
                } else if ("ZYX" === e.order) {
                    var p = o * c,
                        d = o * l,
                        f = s * c,
                        m = s * l;
                    t[0] = u * c, t[4] = f * h - d, t[8] = p * h + m, t[1] = u * l, t[5] = m * h + p, t[9] = d * h - f, t[2] = -h, t[6] = s * u, t[10] = o * u
                } else if ("YZX" === e.order) {
                    var b = o * u,
                        M = o * h,
                        w = s * u,
                        _ = s * h;
                    t[0] = u * c, t[4] = _ - b * l, t[8] = w * l + M, t[1] = l, t[5] = o * c, t[9] = -s * c, t[2] = -h * c, t[6] = M * l + w, t[10] = b - _ * l
                } else if ("XZY" === e.order) {
                    var b = o * u,
                        M = o * h,
                        w = s * u,
                        _ = s * h;
                    t[0] = u * c, t[4] = -l, t[8] = h * c, t[1] = b * l + _, t[5] = o * c, t[9] = M * l - w, t[2] = w * l - M, t[6] = s * c, t[10] = _ * l + b
                }
                return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            },
            setRotationFromQuaternion: function(e) {
                return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(e)
            },
            makeRotationFromQuaternion: function(e) {
                var t = this.elements,
                    r = e.x,
                    n = e.y,
                    i = e.z,
                    o = e.w,
                    a = r + r,
                    s = n + n,
                    u = i + i,
                    h = r * a,
                    c = r * s,
                    l = r * u,
                    p = n * s,
                    d = n * u,
                    f = i * u,
                    m = o * a,
                    v = o * s,
                    g = o * u;
                return t[0] = 1 - (p + f), t[4] = c - g, t[8] = l + v, t[1] = c + g, t[5] = 1 - (h + f), t[9] = d - m, t[2] = l - v, t[6] = d + m, t[10] = 1 - (h + p), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            },
            lookAt: function() {
                var e, t, r;
                return function(n, i, o) {
                    void 0 === e && (e = new a.Vector3), void 0 === t && (t = new a.Vector3), void 0 === r && (r = new a.Vector3);
                    var s = this.elements;
                    return r.subVectors(n, i).normalize(), 0 === r.length() && (r.z = 1), e.crossVectors(o, r).normalize(), 0 === e.length() && (r.x += 1e-4, e.crossVectors(o, r).normalize()), t.crossVectors(r, e), s[0] = e.x, s[4] = t.x, s[8] = r.x, s[1] = e.y, s[5] = t.y, s[9] = r.y, s[2] = e.z, s[6] = t.z, s[10] = r.z, this
                }
            }(),
            multiply: function(e, t) {
                return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
            },
            multiplyMatrices: function(e, t) {
                var r = e.elements,
                    n = t.elements,
                    i = this.elements,
                    o = r[0],
                    a = r[4],
                    s = r[8],
                    u = r[12],
                    h = r[1],
                    c = r[5],
                    l = r[9],
                    p = r[13],
                    d = r[2],
                    f = r[6],
                    m = r[10],
                    v = r[14],
                    g = r[3],
                    y = r[7],
                    x = r[11],
                    b = r[15],
                    M = n[0],
                    w = n[4],
                    _ = n[8],
                    E = n[12],
                    S = n[1],
                    C = n[5],
                    T = n[9],
                    A = n[13],
                    P = n[2],
                    L = n[6],
                    D = n[10],
                    R = n[14],
                    O = n[3],
                    k = n[7],
                    N = n[11],
                    U = n[15];
                return i[0] = o * M + a * S + s * P + u * O, i[4] = o * w + a * C + s * L + u * k, i[8] = o * _ + a * T + s * D + u * N, i[12] = o * E + a * A + s * R + u * U, i[1] = h * M + c * S + l * P + p * O, i[5] = h * w + c * C + l * L + p * k, i[9] = h * _ + c * T + l * D + p * N, i[13] = h * E + c * A + l * R + p * U, i[2] = d * M + f * S + m * P + v * O, i[6] = d * w + f * C + m * L + v * k, i[10] = d * _ + f * T + m * D + v * N, i[14] = d * E + f * A + m * R + v * U, i[3] = g * M + y * S + x * P + b * O, i[7] = g * w + y * C + x * L + b * k, i[11] = g * _ + y * T + x * D + b * N, i[15] = g * E + y * A + x * R + b * U, this
            },
            multiplyToArray: function(e, t, r) {
                var n = this.elements;
                return this.multiplyMatrices(e, t), r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = n[3], r[4] = n[4], r[5] = n[5], r[6] = n[6], r[7] = n[7], r[8] = n[8], r[9] = n[9], r[10] = n[10], r[11] = n[11], r[12] = n[12], r[13] = n[13], r[14] = n[14], r[15] = n[15], this
            },
            multiplyScalar: function(e) {
                var t = this.elements;
                return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
            },
            multiplyVector3: function(e) {
                return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."), e.applyProjection(this)
            },
            multiplyVector4: function(e) {
                return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            },
            multiplyVector3Array: function(e) {
                return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(e)
            },
            applyToVector3Array: function() {
                var e;
                return function(t, r, n) {
                    void 0 === e && (e = new a.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length);
                    for (var i = 0, o = r; n > i; i += 3, o += 3) e.fromArray(t, o), e.applyMatrix4(this), e.toArray(t, o);
                    return t
                }
            }(),
            applyToBuffer: function() {
                var e;
                return function(t, r, n) {
                    void 0 === e && (e = new a.Vector3), void 0 === r && (r = 0), void 0 === n && (n = t.length / t.itemSize);
                    for (var i = 0, o = r; n > i; i++, o++) e.x = t.getX(o), e.y = t.getY(o), e.z = t.getZ(o), e.applyMatrix4(this), t.setXYZ(e.x, e.y, e.z);
                    return t
                }
            }(),
            rotateAxis: function(e) {
                console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), e.transformDirection(this)
            },
            crossVector: function(e) {
                return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), e.applyMatrix4(this)
            },
            determinant: function() {
                var e = this.elements,
                    t = e[0],
                    r = e[4],
                    n = e[8],
                    i = e[12],
                    o = e[1],
                    a = e[5],
                    s = e[9],
                    u = e[13],
                    h = e[2],
                    c = e[6],
                    l = e[10],
                    p = e[14],
                    d = e[3],
                    f = e[7],
                    m = e[11],
                    v = e[15];
                return d * (+i * s * c - n * u * c - i * a * l + r * u * l + n * a * p - r * s * p) + f * (+t * s * p - t * u * l + i * o * l - n * o * p + n * u * h - i * s * h) + m * (+t * u * c - t * a * p - i * o * c + r * o * p + i * a * h - r * u * h) + v * (-n * a * h - t * s * c + t * a * l + n * o * c - r * o * l + r * s * h)
            },
            transpose: function() {
                var e, t = this.elements;
                return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
            },
            flattenToArrayOffset: function(e, t) {
                var r = this.elements;
                return e[t] = r[0], e[t + 1] = r[1], e[t + 2] = r[2], e[t + 3] = r[3], e[t + 4] = r[4], e[t + 5] = r[5], e[t + 6] = r[6], e[t + 7] = r[7], e[t + 8] = r[8], e[t + 9] = r[9], e[t + 10] = r[10], e[t + 11] = r[11], e[t + 12] = r[12], e[t + 13] = r[13], e[t + 14] = r[14], e[t + 15] = r[15], e
            },
            getPosition: function() {
                var e;
                return function() {
                    void 0 === e && (e = new a.Vector3), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
                    var t = this.elements;
                    return e.set(t[12], t[13], t[14])
                }
            }(),
            setPosition: function(e) {
                var t = this.elements;
                return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
            },
            getInverse: function(e, t) {
                var r = this.elements,
                    n = e.elements,
                    i = n[0],
                    o = n[4],
                    a = n[8],
                    s = n[12],
                    u = n[1],
                    h = n[5],
                    c = n[9],
                    l = n[13],
                    p = n[2],
                    d = n[6],
                    f = n[10],
                    m = n[14],
                    v = n[3],
                    g = n[7],
                    y = n[11],
                    x = n[15];
                r[0] = c * m * g - l * f * g + l * d * y - h * m * y - c * d * x + h * f * x, r[4] = s * f * g - a * m * g - s * d * y + o * m * y + a * d * x - o * f * x, r[8] = a * l * g - s * c * g + s * h * y - o * l * y - a * h * x + o * c * x, r[12] = s * c * d - a * l * d - s * h * f + o * l * f + a * h * m - o * c * m, r[1] = l * f * v - c * m * v - l * p * y + u * m * y + c * p * x - u * f * x, r[5] = a * m * v - s * f * v + s * p * y - i * m * y - a * p * x + i * f * x, r[9] = s * c * v - a * l * v - s * u * y + i * l * y + a * u * x - i * c * x, r[13] = a * l * p - s * c * p + s * u * f - i * l * f - a * u * m + i * c * m, r[2] = h * m * v - l * d * v + l * p * g - u * m * g - h * p * x + u * d * x, r[6] = s * d * v - o * m * v - s * p * g + i * m * g + o * p * x - i * d * x, r[10] = o * l * v - s * h * v + s * u * g - i * l * g - o * u * x + i * h * x, r[14] = s * h * p - o * l * p - s * u * d + i * l * d + o * u * m - i * h * m, r[3] = c * d * v - h * f * v - c * p * g + u * f * g + h * p * y - u * d * y, r[7] = o * f * v - a * d * v + a * p * g - i * f * g - o * p * y + i * d * y, r[11] = a * h * v - o * c * v - a * u * g + i * c * g + o * u * y - i * h * y, r[15] = o * c * p - a * h * p + a * u * d - i * c * d - o * u * f + i * h * f;
                var b = i * r[0] + u * r[4] + p * r[8] + v * r[12];
                if (0 === b) {
                    var M = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                    if (t) throw new Error(M);
                    return console.warn(M), this.identity(), this
                }
                return this.multiplyScalar(1 / b), this
            },
            translate: function(e) {
                console.error("THREE.Matrix4: .translate() has been removed.")
            },
            rotateX: function(e) {
                console.error("THREE.Matrix4: .rotateX() has been removed.")
            },
            rotateY: function(e) {
                console.error("THREE.Matrix4: .rotateY() has been removed.")
            },
            rotateZ: function(e) {
                console.error("THREE.Matrix4: .rotateZ() has been removed.")
            },
            rotateByAxis: function(e, t) {
                console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
            },
            scale: function(e) {
                var t = this.elements,
                    r = e.x,
                    n = e.y,
                    i = e.z;
                return t[0] *= r, t[4] *= n, t[8] *= i, t[1] *= r, t[5] *= n, t[9] *= i, t[2] *= r, t[6] *= n, t[10] *= i, t[3] *= r, t[7] *= n, t[11] *= i, this
            },
            getMaxScaleOnAxis: function() {
                var e = this.elements,
                    t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
                    r = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
                    n = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
                return Math.sqrt(Math.max(t, Math.max(r, n)))
            },
            makeTranslation: function(e, t, r) {
                return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1), this
            },
            makeRotationX: function(e) {
                var t = Math.cos(e),
                    r = Math.sin(e);
                return this.set(1, 0, 0, 0, 0, t, -r, 0, 0, r, t, 0, 0, 0, 0, 1), this
            },
            makeRotationY: function(e) {
                var t = Math.cos(e),
                    r = Math.sin(e);
                return this.set(t, 0, r, 0, 0, 1, 0, 0, -r, 0, t, 0, 0, 0, 0, 1), this
            },
            makeRotationZ: function(e) {
                var t = Math.cos(e),
                    r = Math.sin(e);
                return this.set(t, -r, 0, 0, r, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            },
            makeRotationAxis: function(e, t) {
                var r = Math.cos(t),
                    n = Math.sin(t),
                    i = 1 - r,
                    o = e.x,
                    a = e.y,
                    s = e.z,
                    u = i * o,
                    h = i * a;
                return this.set(u * o + r, u * a - n * s, u * s + n * a, 0, u * a + n * s, h * a + r, h * s - n * o, 0, u * s - n * a, h * s + n * o, i * s * s + r, 0, 0, 0, 0, 1), this
            },
            makeScale: function(e, t, r) {
                return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1), this
            },
            compose: function(e, t, r) {
                return this.makeRotationFromQuaternion(t), this.scale(r), this.setPosition(e), this
            },
            decompose: function() {
                var e, t;
                return function(r, n, i) {
                    void 0 === e && (e = new a.Vector3), void 0 === t && (t = new a.Matrix4);
                    var o = this.elements,
                        s = e.set(o[0], o[1], o[2]).length(),
                        u = e.set(o[4], o[5], o[6]).length(),
                        h = e.set(o[8], o[9], o[10]).length(),
                        c = this.determinant();
                    0 > c && (s = -s), r.x = o[12], r.y = o[13], r.z = o[14], t.elements.set(this.elements);
                    var l = 1 / s,
                        p = 1 / u,
                        d = 1 / h;
                    return t.elements[0] *= l, t.elements[1] *= l, t.elements[2] *= l, t.elements[4] *= p, t.elements[5] *= p, t.elements[6] *= p, t.elements[8] *= d, t.elements[9] *= d, t.elements[10] *= d, n.setFromRotationMatrix(t), i.x = s, i.y = u, i.z = h, this
                }
            }(),
            makeFrustum: function(e, t, r, n, i, o) {
                var a = this.elements,
                    s = 2 * i / (t - e),
                    u = 2 * i / (n - r),
                    h = (t + e) / (t - e),
                    c = (n + r) / (n - r),
                    l = -(o + i) / (o - i),
                    p = -2 * o * i / (o - i);
                return a[0] = s, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = u, a[9] = c, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = l, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this
            },
            makePerspective: function(e, t, r, n) {
                var i = r * Math.tan(a.Math.degToRad(.5 * e)),
                    o = -i,
                    s = o * t,
                    u = i * t;
                return this.makeFrustum(s, u, o, i, r, n)
            },
            makeOrthographic: function(e, t, r, n, i, o) {
                var a = this.elements,
                    s = t - e,
                    u = r - n,
                    h = o - i,
                    c = (t + e) / s,
                    l = (r + n) / u,
                    p = (o + i) / h;
                return a[0] = 2 / s, a[4] = 0, a[8] = 0, a[12] = -c, a[1] = 0, a[5] = 2 / u, a[9] = 0, a[13] = -l, a[2] = 0, a[6] = 0, a[10] = -2 / h, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this
            },
            equals: function(e) {
                for (var t = this.elements, r = e.elements, n = 0; 16 > n; n++)
                    if (t[n] !== r[n]) return !1;
                return !0
            },
            fromArray: function(e) {
                return this.elements.set(e), this
            },
            toArray: function() {
                var e = this.elements;
                return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
            }
        }, a.Ray = function(e, t) {
            this.origin = void 0 !== e ? e : new a.Vector3, this.direction = void 0 !== t ? t : new a.Vector3
        }, a.Ray.prototype = {
            constructor: a.Ray,
            set: function(e, t) {
                return this.origin.copy(e), this.direction.copy(t), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.origin.copy(e.origin), this.direction.copy(e.direction), this
            },
            at: function(e, t) {
                var r = t || new a.Vector3;
                return r.copy(this.direction).multiplyScalar(e).add(this.origin)
            },
            recast: function() {
                var e = new a.Vector3;
                return function(t) {
                    return this.origin.copy(this.at(t, e)), this
                }
            }(),
            closestPointToPoint: function(e, t) {
                var r = t || new a.Vector3;
                r.subVectors(e, this.origin);
                var n = r.dot(this.direction);
                return 0 > n ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(n).add(this.origin)
            },
            distanceToPoint: function(e) {
                return Math.sqrt(this.distanceSqToPoint(e))
            },
            distanceSqToPoint: function() {
                var e = new a.Vector3;
                return function(t) {
                    var r = e.subVectors(t, this.origin).dot(this.direction);
                    return 0 > r ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceToSquared(t))
                }
            }(),
            distanceSqToSegment: function() {
                var e = new a.Vector3,
                    t = new a.Vector3,
                    r = new a.Vector3;
                return function(n, i, o, a) {
                    e.copy(n).add(i).multiplyScalar(.5), t.copy(i).sub(n).normalize(), r.copy(this.origin).sub(e);
                    var s, u, h, c, l = .5 * n.distanceTo(i),
                        p = -this.direction.dot(t),
                        d = r.dot(this.direction),
                        f = -r.dot(t),
                        m = r.lengthSq(),
                        v = Math.abs(1 - p * p);
                    if (v > 0)
                        if (s = p * f - d, u = p * d - f, c = l * v, s >= 0)
                            if (u >= -c)
                                if (c >= u) {
                                    var g = 1 / v;
                                    s *= g, u *= g, h = s * (s + p * u + 2 * d) + u * (p * s + u + 2 * f) + m
                                } else u = l, s = Math.max(0, -(p * u + d)), h = -s * s + u * (u + 2 * f) + m;
                    else u = -l, s = Math.max(0, -(p * u + d)), h = -s * s + u * (u + 2 * f) + m;
                    else -c >= u ? (s = Math.max(0, -(-p * l + d)), u = s > 0 ? -l : Math.min(Math.max(-l, -f), l), h = -s * s + u * (u + 2 * f) + m) : c >= u ? (s = 0, u = Math.min(Math.max(-l, -f), l), h = u * (u + 2 * f) + m) : (s = Math.max(0, -(p * l + d)), u = s > 0 ? l : Math.min(Math.max(-l, -f), l), h = -s * s + u * (u + 2 * f) + m);
                    else u = p > 0 ? -l : l, s = Math.max(0, -(p * u + d)), h = -s * s + u * (u + 2 * f) + m;
                    return o && o.copy(this.direction).multiplyScalar(s).add(this.origin), a && a.copy(t).multiplyScalar(u).add(e), h
                }
            }(),
            isIntersectionSphere: function(e) {
                return this.distanceToPoint(e.center) <= e.radius
            },
            intersectSphere: function() {
                var e = new a.Vector3;
                return function(t, r) {
                    e.subVectors(t.center, this.origin);
                    var n = e.dot(this.direction),
                        i = e.dot(e) - n * n,
                        o = t.radius * t.radius;
                    if (i > o) return null;
                    var a = Math.sqrt(o - i),
                        s = n - a,
                        u = n + a;
                    return 0 > s && 0 > u ? null : 0 > s ? this.at(u, r) : this.at(s, r)
                }
            }(),
            isIntersectionPlane: function(e) {
                var t = e.distanceToPoint(this.origin);
                if (0 === t) return !0;
                var r = e.normal.dot(this.direction);
                return 0 > r * t ? !0 : !1
            },
            distanceToPlane: function(e) {
                var t = e.normal.dot(this.direction);
                if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
                var r = -(this.origin.dot(e.normal) + e.constant) / t;
                return r >= 0 ? r : null
            },
            intersectPlane: function(e, t) {
                var r = this.distanceToPlane(e);
                return null === r ? null : this.at(r, t)
            },
            isIntersectionBox: function() {
                var e = new a.Vector3;
                return function(t) {
                    return null !== this.intersectBox(t, e)
                }
            }(),
            intersectBox: function(e, t) {
                var r, n, i, o, a, s, u = 1 / this.direction.x,
                    h = 1 / this.direction.y,
                    c = 1 / this.direction.z,
                    l = this.origin;
                return u >= 0 ? (r = (e.min.x - l.x) * u, n = (e.max.x - l.x) * u) : (r = (e.max.x - l.x) * u, n = (e.min.x - l.x) * u), h >= 0 ? (i = (e.min.y - l.y) * h, o = (e.max.y - l.y) * h) : (i = (e.max.y - l.y) * h, o = (e.min.y - l.y) * h), r > o || i > n ? null : ((i > r || r !== r) && (r = i), (n > o || n !== n) && (n = o), c >= 0 ? (a = (e.min.z - l.z) * c, s = (e.max.z - l.z) * c) : (a = (e.max.z - l.z) * c, s = (e.min.z - l.z) * c), r > s || a > n ? null : ((a > r || r !== r) && (r = a), (n > s || n !== n) && (n = s), 0 > n ? null : this.at(r >= 0 ? r : n, t)))
            },
            intersectTriangle: function() {
                var e = new a.Vector3,
                    t = new a.Vector3,
                    r = new a.Vector3,
                    n = new a.Vector3;
                return function(i, o, a, s, u) {
                    t.subVectors(o, i), r.subVectors(a, i), n.crossVectors(t, r);
                    var h, c = this.direction.dot(n);
                    if (c > 0) {
                        if (s) return null;
                        h = 1
                    } else {
                        if (!(0 > c)) return null;
                        h = -1, c = -c
                    }
                    e.subVectors(this.origin, i);
                    var l = h * this.direction.dot(r.crossVectors(e, r));
                    if (0 > l) return null;
                    var p = h * this.direction.dot(t.cross(e));
                    if (0 > p) return null;
                    if (l + p > c) return null;
                    var d = -h * e.dot(n);
                    return 0 > d ? null : this.at(d / c, u)
                }
            }(),
            applyMatrix4: function(e) {
                return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this.direction.normalize(), this
            },
            equals: function(e) {
                return e.origin.equals(this.origin) && e.direction.equals(this.direction)
            }
        }, a.Sphere = function(e, t) {
            this.center = void 0 !== e ? e : new a.Vector3, this.radius = void 0 !== t ? t : 0
        }, a.Sphere.prototype = {
            constructor: a.Sphere,
            set: function(e, t) {
                return this.center.copy(e), this.radius = t, this
            },
            setFromPoints: function() {
                var e = new a.Box3;
                return function(t, r) {
                    var n = this.center;
                    void 0 !== r ? n.copy(r) : e.setFromPoints(t).center(n);
                    for (var i = 0, o = 0, a = t.length; a > o; o++) i = Math.max(i, n.distanceToSquared(t[o]));
                    return this.radius = Math.sqrt(i), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.center.copy(e.center), this.radius = e.radius, this
            },
            empty: function() {
                return this.radius <= 0
            },
            containsPoint: function(e) {
                return e.distanceToSquared(this.center) <= this.radius * this.radius
            },
            distanceToPoint: function(e) {
                return e.distanceTo(this.center) - this.radius
            },
            intersectsSphere: function(e) {
                var t = this.radius + e.radius;
                return e.center.distanceToSquared(this.center) <= t * t
            },
            clampPoint: function(e, t) {
                var r = this.center.distanceToSquared(e),
                    n = t || new a.Vector3;
                return n.copy(e), r > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
            },
            getBoundingBox: function(e) {
                var t = e || new a.Box3;
                return t.set(this.center, this.center), t.expandByScalar(this.radius), t
            },
            applyMatrix4: function(e) {
                return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
            },
            translate: function(e) {
                return this.center.add(e), this
            },
            equals: function(e) {
                return e.center.equals(this.center) && e.radius === this.radius
            }
        }, a.Frustum = function(e, t, r, n, i, o) {
            this.planes = [void 0 !== e ? e : new a.Plane, void 0 !== t ? t : new a.Plane, void 0 !== r ? r : new a.Plane, void 0 !== n ? n : new a.Plane, void 0 !== i ? i : new a.Plane, void 0 !== o ? o : new a.Plane]
        }, a.Frustum.prototype = {
            constructor: a.Frustum,
            set: function(e, t, r, n, i, o) {
                var a = this.planes;
                return a[0].copy(e), a[1].copy(t), a[2].copy(r), a[3].copy(n), a[4].copy(i), a[5].copy(o), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                for (var t = this.planes, r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
                return this
            },
            setFromMatrix: function(e) {
                var t = this.planes,
                    r = e.elements,
                    n = r[0],
                    i = r[1],
                    o = r[2],
                    a = r[3],
                    s = r[4],
                    u = r[5],
                    h = r[6],
                    c = r[7],
                    l = r[8],
                    p = r[9],
                    d = r[10],
                    f = r[11],
                    m = r[12],
                    v = r[13],
                    g = r[14],
                    y = r[15];
                return t[0].setComponents(a - n, c - s, f - l, y - m).normalize(), t[1].setComponents(a + n, c + s, f + l, y + m).normalize(), t[2].setComponents(a + i, c + u, f + p, y + v).normalize(), t[3].setComponents(a - i, c - u, f - p, y - v).normalize(), t[4].setComponents(a - o, c - h, f - d, y - g).normalize(), t[5].setComponents(a + o, c + h, f + d, y + g).normalize(), this
            },
            intersectsObject: function() {
                var e = new a.Sphere;
                return function(t) {
                    var r = t.geometry;
                    return null === r.boundingSphere && r.computeBoundingSphere(), e.copy(r.boundingSphere), e.applyMatrix4(t.matrixWorld), this.intersectsSphere(e)
                }
            }(),
            intersectsSphere: function(e) {
                for (var t = this.planes, r = e.center, n = -e.radius, i = 0; 6 > i; i++) {
                    var o = t[i].distanceToPoint(r);
                    if (n > o) return !1
                }
                return !0
            },
            intersectsBox: function() {
                var e = new a.Vector3,
                    t = new a.Vector3;
                return function(r) {
                    for (var n = this.planes, i = 0; 6 > i; i++) {
                        var o = n[i];
                        e.x = o.normal.x > 0 ? r.min.x : r.max.x, t.x = o.normal.x > 0 ? r.max.x : r.min.x, e.y = o.normal.y > 0 ? r.min.y : r.max.y, t.y = o.normal.y > 0 ? r.max.y : r.min.y, e.z = o.normal.z > 0 ? r.min.z : r.max.z, t.z = o.normal.z > 0 ? r.max.z : r.min.z;
                        var a = o.distanceToPoint(e),
                            s = o.distanceToPoint(t);
                        if (0 > a && 0 > s) return !1
                    }
                    return !0
                }
            }(),
            containsPoint: function(e) {
                for (var t = this.planes, r = 0; 6 > r; r++)
                    if (t[r].distanceToPoint(e) < 0) return !1;
                return !0
            }
        }, a.Plane = function(e, t) {
            this.normal = void 0 !== e ? e : new a.Vector3(1, 0, 0), this.constant = void 0 !== t ? t : 0
        }, a.Plane.prototype = {
            constructor: a.Plane,
            set: function(e, t) {
                return this.normal.copy(e), this.constant = t, this
            },
            setComponents: function(e, t, r, n) {
                return this.normal.set(e, t, r), this.constant = n, this
            },
            setFromNormalAndCoplanarPoint: function(e, t) {
                return this.normal.copy(e), this.constant = -t.dot(this.normal), this
            },
            setFromCoplanarPoints: function() {
                var e = new a.Vector3,
                    t = new a.Vector3;
                return function(r, n, i) {
                    var o = e.subVectors(i, n).cross(t.subVectors(r, n)).normalize();
                    return this.setFromNormalAndCoplanarPoint(o, r), this
                }
            }(),
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.normal.copy(e.normal), this.constant = e.constant, this
            },
            normalize: function() {
                var e = 1 / this.normal.length();
                return this.normal.multiplyScalar(e), this.constant *= e, this
            },
            negate: function() {
                return this.constant *= -1, this.normal.negate(), this
            },
            distanceToPoint: function(e) {
                return this.normal.dot(e) + this.constant
            },
            distanceToSphere: function(e) {
                return this.distanceToPoint(e.center) - e.radius
            },
            projectPoint: function(e, t) {
                return this.orthoPoint(e, t).sub(e).negate()
            },
            orthoPoint: function(e, t) {
                var r = this.distanceToPoint(e),
                    n = t || new a.Vector3;
                return n.copy(this.normal).multiplyScalar(r)
            },
            isIntersectionLine: function(e) {
                var t = this.distanceToPoint(e.start),
                    r = this.distanceToPoint(e.end);
                return 0 > t && r > 0 || 0 > r && t > 0
            },
            intersectLine: function() {
                var e = new a.Vector3;
                return function(t, r) {
                    var n = r || new a.Vector3,
                        i = t.delta(e),
                        o = this.normal.dot(i);
                    if (0 !== o) {
                        var s = -(t.start.dot(this.normal) + this.constant) / o;
                        if (!(0 > s || s > 1)) return n.copy(i).multiplyScalar(s).add(t.start)
                    } else if (0 === this.distanceToPoint(t.start)) return n.copy(t.start)
                }
            }(),
            coplanarPoint: function(e) {
                var t = e || new a.Vector3;
                return t.copy(this.normal).multiplyScalar(-this.constant)
            },
            applyMatrix4: function() {
                var e = new a.Vector3,
                    t = new a.Vector3,
                    r = new a.Matrix3;
                return function(n, i) {
                    var o = i || r.getNormalMatrix(n),
                        a = e.copy(this.normal).applyMatrix3(o),
                        s = this.coplanarPoint(t);
                    return s.applyMatrix4(n), this.setFromNormalAndCoplanarPoint(a, s), this
                }
            }(),
            translate: function(e) {
                return this.constant = this.constant - e.dot(this.normal), this
            },
            equals: function(e) {
                return e.normal.equals(this.normal) && e.constant === this.constant
            }
        }, a.Math = {
            generateUUID: function() {
                var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
                    r = new Array(36),
                    n = 0;
                return function() {
                    for (var i = 0; 36 > i; i++) 8 === i || 13 === i || 18 === i || 23 === i ? r[i] = "-" : 14 === i ? r[i] = "4" : (2 >= n && (n = 33554432 + 16777216 * Math.random() | 0), e = 15 & n, n >>= 4, r[i] = t[19 === i ? 3 & e | 8 : e]);
                    return r.join("")
                }
            }(),
            clamp: function(e, t, r) {
                return t > e ? t : e > r ? r : e
            },
            clampBottom: function(e, t) {
                return t > e ? t : e
            },
            euclideanModulo: function(e, t) {
                return (e % t + t) % t
            },
            mapLinear: function(e, t, r, n, i) {
                return n + (e - t) * (i - n) / (r - t)
            },
            smoothstep: function(e, t, r) {
                return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
            },
            smootherstep: function(e, t, r) {
                return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
            },
            random16: function() {
                return (65280 * Math.random() + 255 * Math.random()) / 65535
            },
            randInt: function(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            },
            randFloat: function(e, t) {
                return e + Math.random() * (t - e)
            },
            randFloatSpread: function(e) {
                return e * (.5 - Math.random())
            },
            degToRad: function() {
                var e = Math.PI / 180;
                return function(t) {
                    return t * e
                }
            }(),
            radToDeg: function() {
                var e = 180 / Math.PI;
                return function(t) {
                    return t * e
                }
            }(),
            isPowerOfTwo: function(e) {
                return 0 === (e & e - 1) && 0 !== e
            },
            nextPowerOfTwo: function(e) {
                return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
            }
        }, a.Spline = function(e) {
            function t(e, t, r, n, i, o, a) {
                var s = .5 * (r - e),
                    u = .5 * (n - t);
                return (2 * (t - r) + s + u) * a + (-3 * (t - r) - 2 * s - u) * o + s * i + t
            }
            this.points = e;
            var r, n, i, o, s, u, h, c, l, p = [],
                d = {
                    x: 0,
                    y: 0,
                    z: 0
                };
            this.initFromArray = function(e) {
                this.points = [];
                for (var t = 0; t < e.length; t++) this.points[t] = {
                    x: e[t][0],
                    y: e[t][1],
                    z: e[t][2]
                }
            }, this.getPoint = function(e) {
                return r = (this.points.length - 1) * e, n = Math.floor(r), i = r - n, p[0] = 0 === n ? n : n - 1, p[1] = n, p[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1, p[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2, u = this.points[p[0]], h = this.points[p[1]], c = this.points[p[2]], l = this.points[p[3]], o = i * i, s = i * o, d.x = t(u.x, h.x, c.x, l.x, i, o, s), d.y = t(u.y, h.y, c.y, l.y, i, o, s), d.z = t(u.z, h.z, c.z, l.z, i, o, s), d
            }, this.getControlPointsArray = function() {
                var e, t, r = this.points.length,
                    n = [];
                for (e = 0; r > e; e++) t = this.points[e], n[e] = [t.x, t.y, t.z];
                return n
            }, this.getLength = function(e) {
                var t, r, n, i, o = 0,
                    s = 0,
                    u = 0,
                    h = new a.Vector3,
                    c = new a.Vector3,
                    l = [],
                    p = 0;
                for (l[0] = 0, e || (e = 100), n = this.points.length * e, h.copy(this.points[0]), t = 1; n > t; t++) r = t / n, i = this.getPoint(r), c.copy(i), p += c.distanceTo(h), h.copy(i), o = (this.points.length - 1) * r, s = Math.floor(o), s !== u && (l[s] = p, u = s);
                return l[l.length] = p, {
                    chunks: l,
                    total: p
                }
            }, this.reparametrizeByArcLength = function(e) {
                var t, r, n, i, o, s, u, h, c = [],
                    l = new a.Vector3,
                    p = this.getLength();
                for (c.push(l.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
                    for (s = p.chunks[t] - p.chunks[t - 1], u = Math.ceil(e * s / p.total), i = (t - 1) / (this.points.length - 1), o = t / (this.points.length - 1), r = 1; u - 1 > r; r++) n = i + r * (1 / u) * (o - i), h = this.getPoint(n), c.push(l.copy(h).clone());
                    c.push(l.copy(this.points[t]).clone())
                }
                this.points = c
            }
        }, a.Triangle = function(e, t, r) {
            this.a = void 0 !== e ? e : new a.Vector3, this.b = void 0 !== t ? t : new a.Vector3, this.c = void 0 !== r ? r : new a.Vector3
        }, a.Triangle.normal = function() {
            var e = new a.Vector3;
            return function(t, r, n, i) {
                var o = i || new a.Vector3;
                o.subVectors(n, r), e.subVectors(t, r), o.cross(e);
                var s = o.lengthSq();
                return s > 0 ? o.multiplyScalar(1 / Math.sqrt(s)) : o.set(0, 0, 0)
            }
        }(), a.Triangle.barycoordFromPoint = function() {
            var e = new a.Vector3,
                t = new a.Vector3,
                r = new a.Vector3;
            return function(n, i, o, s, u) {
                e.subVectors(s, i), t.subVectors(o, i), r.subVectors(n, i);
                var h = e.dot(e),
                    c = e.dot(t),
                    l = e.dot(r),
                    p = t.dot(t),
                    d = t.dot(r),
                    f = h * p - c * c,
                    m = u || new a.Vector3;
                if (0 === f) return m.set(-2, -1, -1);
                var v = 1 / f,
                    g = (p * l - c * d) * v,
                    y = (h * d - c * l) * v;
                return m.set(1 - g - y, y, g)
            }
        }(), a.Triangle.containsPoint = function() {
            var e = new a.Vector3;
            return function(t, r, n, i) {
                var o = a.Triangle.barycoordFromPoint(t, r, n, i, e);
                return o.x >= 0 && o.y >= 0 && o.x + o.y <= 1
            }
        }(), a.Triangle.prototype = {
            constructor: a.Triangle,
            set: function(e, t, r) {
                return this.a.copy(e), this.b.copy(t), this.c.copy(r), this
            },
            setFromPointsAndIndices: function(e, t, r, n) {
                return this.a.copy(e[t]), this.b.copy(e[r]), this.c.copy(e[n]), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
            },
            area: function() {
                var e = new a.Vector3,
                    t = new a.Vector3;
                return function() {
                    return e.subVectors(this.c, this.b), t.subVectors(this.a, this.b), .5 * e.cross(t).length()
                }
            }(),
            midpoint: function(e) {
                var t = e || new a.Vector3;
                return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
            },
            normal: function(e) {
                return a.Triangle.normal(this.a, this.b, this.c, e)
            },
            plane: function(e) {
                var t = e || new a.Plane;
                return t.setFromCoplanarPoints(this.a, this.b, this.c)
            },
            barycoordFromPoint: function(e, t) {
                return a.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
            },
            containsPoint: function(e) {
                return a.Triangle.containsPoint(e, this.a, this.b, this.c)
            },
            equals: function(e) {
                return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
            }
        }, a.Clock = function(e) {
            this.autoStart = void 0 !== e ? e : !0, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
        }, a.Clock.prototype = {
            constructor: a.Clock,
            start: function() {
                this.startTime = void 0 !== o.performance && void 0 !== o.performance.now ? o.performance.now() : Date.now(), this.oldTime = this.startTime, this.running = !0
            },
            stop: function() {
                this.getElapsedTime(), this.running = !1
            },
            getElapsedTime: function() {
                return this.getDelta(), this.elapsedTime
            },
            getDelta: function() {
                var e = 0;
                if (this.autoStart && !this.running && this.start(), this.running) {
                    var t = void 0 !== o.performance && void 0 !== o.performance.now ? o.performance.now() : Date.now();
                    e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e
                }
                return e
            }
        }, a.EventDispatcher = function() {}, a.EventDispatcher.prototype = {
            constructor: a.EventDispatcher,
            apply: function(e) {
                e.addEventListener = a.EventDispatcher.prototype.addEventListener, e.hasEventListener = a.EventDispatcher.prototype.hasEventListener, e.removeEventListener = a.EventDispatcher.prototype.removeEventListener, e.dispatchEvent = a.EventDispatcher.prototype.dispatchEvent
            },
            addEventListener: function(e, t) {
                void 0 === this._listeners && (this._listeners = {});
                var r = this._listeners;
                void 0 === r[e] && (r[e] = []), -1 === r[e].indexOf(t) && r[e].push(t)
            },
            hasEventListener: function(e, t) {
                if (void 0 === this._listeners) return !1;
                var r = this._listeners;
                return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1
            },
            removeEventListener: function(e, t) {
                if (void 0 !== this._listeners) {
                    var r = this._listeners,
                        n = r[e];
                    if (void 0 !== n) {
                        var i = n.indexOf(t); - 1 !== i && n.splice(i, 1)
                    }
                }
            },
            dispatchEvent: function(e) {
                if (void 0 !== this._listeners) {
                    var t = this._listeners,
                        r = t[e.type];
                    if (void 0 !== r) {
                        e.target = this;
                        for (var n = [], i = r.length, o = 0; i > o; o++) n[o] = r[o];
                        for (var o = 0; i > o; o++) n[o].call(this, e)
                    }
                }
            }
        },
        function(e) {
            function t(e, t) {
                return e.distance - t.distance
            }
            e.Raycaster = function(t, r, n, i) {
                this.ray = new e.Ray(t, r), this.near = n || 0, this.far = i || 1 / 0, this.params = {
                    Mesh: {},
                    Line: {},
                    LOD: {},
                    Points: {
                        threshold: 1
                    },
                    Sprite: {}
                }, Object.defineProperties(this.params, {
                    PointCloud: {
                        get: function() {
                            return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                        }
                    }
                })
            };
            var r = function(e, t, n, i) {
                if (e.visible !== !1 && (e.raycast(t, n), i === !0))
                    for (var o = e.children, a = 0, s = o.length; s > a; a++) r(o[a], t, n, !0)
            };
            e.Raycaster.prototype = {
                constructor: e.Raycaster,
                linePrecision: 1,
                set: function(e, t) {
                    this.ray.set(e, t)
                },
                setFromCamera: function(t, r) {
                    r instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld),
                        this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
                },
                intersectObject: function(e, n) {
                    var i = [];
                    return r(e, this, i, n), i.sort(t), i
                },
                intersectObjects: function(e, n) {
                    var i = [];
                    if (Array.isArray(e) === !1) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
                    for (var o = 0, a = e.length; a > o; o++) r(e[o], this, i, n);
                    return i.sort(t), i
                }
            }
        }(a), a.Object3D = function() {
            Object.defineProperty(this, "id", {
                value: a.Object3DIdCount++
            }), this.uuid = a.Math.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = a.Object3D.DefaultUp.clone();
            var e = new a.Vector3,
                t = new a.Euler,
                r = new a.Quaternion,
                n = new a.Vector3(1, 1, 1),
                i = function() {
                    r.setFromEuler(t, !1)
                },
                o = function() {
                    t.setFromQuaternion(r, void 0, !1)
                };
            t.onChange(i), r.onChange(o), Object.defineProperties(this, {
                position: {
                    enumerable: !0,
                    value: e
                },
                rotation: {
                    enumerable: !0,
                    value: t
                },
                quaternion: {
                    enumerable: !0,
                    value: r
                },
                scale: {
                    enumerable: !0,
                    value: n
                },
                modelViewMatrix: {
                    value: new a.Matrix4
                },
                normalMatrix: {
                    value: new a.Matrix3
                }
            }), this.rotationAutoUpdate = !0, this.matrix = new a.Matrix4, this.matrixWorld = new a.Matrix4, this.matrixAutoUpdate = a.Object3D.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
        }, a.Object3D.DefaultUp = new a.Vector3(0, 1, 0), a.Object3D.DefaultMatrixAutoUpdate = !0, a.Object3D.prototype = {
            constructor: a.Object3D,
            get eulerOrder() {
                return console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order
            },
            set eulerOrder(e) {
                console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order."), this.rotation.order = e
            },
            get useQuaternion() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set useQuaternion(e) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set renderDepth(e) {
                console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
            },
            applyMatrix: function(e) {
                this.matrix.multiplyMatrices(e, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
            },
            setRotationFromAxisAngle: function(e, t) {
                this.quaternion.setFromAxisAngle(e, t)
            },
            setRotationFromEuler: function(e) {
                this.quaternion.setFromEuler(e, !0)
            },
            setRotationFromMatrix: function(e) {
                this.quaternion.setFromRotationMatrix(e)
            },
            setRotationFromQuaternion: function(e) {
                this.quaternion.copy(e)
            },
            rotateOnAxis: function() {
                var e = new a.Quaternion;
                return function(t, r) {
                    return e.setFromAxisAngle(t, r), this.quaternion.multiply(e), this
                }
            }(),
            rotateX: function() {
                var e = new a.Vector3(1, 0, 0);
                return function(t) {
                    return this.rotateOnAxis(e, t)
                }
            }(),
            rotateY: function() {
                var e = new a.Vector3(0, 1, 0);
                return function(t) {
                    return this.rotateOnAxis(e, t)
                }
            }(),
            rotateZ: function() {
                var e = new a.Vector3(0, 0, 1);
                return function(t) {
                    return this.rotateOnAxis(e, t)
                }
            }(),
            translateOnAxis: function() {
                var e = new a.Vector3;
                return function(t, r) {
                    return e.copy(t).applyQuaternion(this.quaternion), this.position.add(e.multiplyScalar(r)), this
                }
            }(),
            translate: function(e, t) {
                return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(t, e)
            },
            translateX: function() {
                var e = new a.Vector3(1, 0, 0);
                return function(t) {
                    return this.translateOnAxis(e, t)
                }
            }(),
            translateY: function() {
                var e = new a.Vector3(0, 1, 0);
                return function(t) {
                    return this.translateOnAxis(e, t)
                }
            }(),
            translateZ: function() {
                var e = new a.Vector3(0, 0, 1);
                return function(t) {
                    return this.translateOnAxis(e, t)
                }
            }(),
            localToWorld: function(e) {
                return e.applyMatrix4(this.matrixWorld)
            },
            worldToLocal: function() {
                var e = new a.Matrix4;
                return function(t) {
                    return t.applyMatrix4(e.getInverse(this.matrixWorld))
                }
            }(),
            lookAt: function() {
                var e = new a.Matrix4;
                return function(t) {
                    e.lookAt(t, this.position, this.up), this.quaternion.setFromRotationMatrix(e)
                }
            }(),
            add: function(e) {
                if (arguments.length > 1) {
                    for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
                    return this
                }
                return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof a.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
                    type: "added"
                }), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
            },
            remove: function(e) {
                if (arguments.length > 1)
                    for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
                var r = this.children.indexOf(e); - 1 !== r && (e.parent = null, e.dispatchEvent({
                    type: "removed"
                }), this.children.splice(r, 1))
            },
            getChildByName: function(e) {
                return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(e)
            },
            getObjectById: function(e) {
                return this.getObjectByProperty("id", e)
            },
            getObjectByName: function(e) {
                return this.getObjectByProperty("name", e)
            },
            getObjectByProperty: function(e, t) {
                if (this[e] === t) return this;
                for (var r = 0, n = this.children.length; n > r; r++) {
                    var i = this.children[r],
                        o = i.getObjectByProperty(e, t);
                    if (void 0 !== o) return o
                }
            },
            getWorldPosition: function(e) {
                var t = e || new a.Vector3;
                return this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
            },
            getWorldQuaternion: function() {
                var e = new a.Vector3,
                    t = new a.Vector3;
                return function(r) {
                    var n = r || new a.Quaternion;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, n, t), n
                }
            }(),
            getWorldRotation: function() {
                var e = new a.Quaternion;
                return function(t) {
                    var r = t || new a.Euler;
                    return this.getWorldQuaternion(e), r.setFromQuaternion(e, this.rotation.order, !1)
                }
            }(),
            getWorldScale: function() {
                var e = new a.Vector3,
                    t = new a.Quaternion;
                return function(r) {
                    var n = r || new a.Vector3;
                    return this.updateMatrixWorld(!0), this.matrixWorld.decompose(e, t, n), n
                }
            }(),
            getWorldDirection: function() {
                var e = new a.Quaternion;
                return function(t) {
                    var r = t || new a.Vector3;
                    return this.getWorldQuaternion(e), r.set(0, 0, 1).applyQuaternion(e)
                }
            }(),
            raycast: function() {},
            traverse: function(e) {
                e(this);
                for (var t = this.children, r = 0, n = t.length; n > r; r++) t[r].traverse(e)
            },
            traverseVisible: function(e) {
                if (this.visible !== !1) {
                    e(this);
                    for (var t = this.children, r = 0, n = t.length; n > r; r++) t[r].traverseVisible(e)
                }
            },
            traverseAncestors: function(e) {
                var t = this.parent;
                null !== t && (e(t), t.traverseAncestors(e))
            },
            updateMatrix: function() {
                this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
            },
            updateMatrixWorld: function(e) {
                this.matrixAutoUpdate === !0 && this.updateMatrix(), (this.matrixWorldNeedsUpdate === !0 || e === !0) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
                for (var t = 0, r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
            },
            toJSON: function(e) {
                function t(e) {
                    var t = [];
                    for (var r in e) {
                        var n = e[r];
                        delete n.metadata, t.push(n)
                    }
                    return t
                }
                var r = void 0 === e,
                    n = {};
                if (r && (e = {
                        geometries: {},
                        materials: {},
                        textures: {},
                        images: {}
                    }, n.metadata = {
                        version: 4.4,
                        type: "Object",
                        generator: "Object3D.toJSON"
                    }), n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), this.visible !== !0 && (n.visible = this.visible), n.matrix = this.matrix.toArray(), this.children.length > 0) {
                    n.children = [];
                    for (var i = 0; i < this.children.length; i++) n.children.push(this.children[i].toJSON(e).object)
                }
                var o = {};
                if (r) {
                    var a = t(e.geometries),
                        s = t(e.materials),
                        u = t(e.textures),
                        h = t(e.images);
                    a.length > 0 && (o.geometries = a), s.length > 0 && (o.materials = s), u.length > 0 && (o.textures = u), h.length > 0 && (o.images = h)
                }
                return o.object = n, o
            },
            clone: function(e) {
                return (new this.constructor).copy(this, e)
            },
            copy: function(e, t) {
                if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.rotationAutoUpdate = e.rotationAutoUpdate, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
                    for (var r = 0; r < e.children.length; r++) {
                        var n = e.children[r];
                        this.add(n.clone())
                    }
                return this
            }
        }, a.EventDispatcher.prototype.apply(a.Object3D.prototype), a.Object3DIdCount = 0, a.Face3 = function(e, t, r, n, i, o) {
            this.a = e, this.b = t, this.c = r, this.normal = n instanceof a.Vector3 ? n : new a.Vector3, this.vertexNormals = Array.isArray(n) ? n : [], this.color = i instanceof a.Color ? i : new a.Color, this.vertexColors = Array.isArray(i) ? i : [], this.materialIndex = void 0 !== o ? o : 0
        }, a.Face3.prototype = {
            constructor: a.Face3,
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                this.a = e.a, this.b = e.b, this.c = e.c, this.normal.copy(e.normal), this.color.copy(e.color), this.materialIndex = e.materialIndex;
                for (var t = 0, r = e.vertexNormals.length; r > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
                for (var t = 0, r = e.vertexColors.length; r > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
                return this
            }
        }, a.Face4 = function(e, t, r, n, i, o, s) {
            return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new a.Face3(e, t, r, i, o, s)
        }, a.BufferAttribute = function(e, t) {
            this.uuid = a.Math.generateUUID(), this.array = e, this.itemSize = t, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }, a.BufferAttribute.prototype = {
            constructor: a.BufferAttribute,
            get length() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            },
            get count() {
                return this.array.length / this.itemSize
            },
            set needsUpdate(e) {
                e === !0 && this.version++
            },
            setDynamic: function(e) {
                return this.dynamic = e, this
            },
            copy: function(e) {
                return this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.dynamic = e.dynamic, this
            },
            copyAt: function(e, t, r) {
                e *= this.itemSize, r *= t.itemSize;
                for (var n = 0, i = this.itemSize; i > n; n++) this.array[e + n] = t.array[r + n];
                return this
            },
            copyArray: function(e) {
                return this.array.set(e), this
            },
            copyColorsArray: function(e) {
                for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), o = new a.Color), t[r++] = o.r, t[r++] = o.g, t[r++] = o.b
                }
                return this
            },
            copyIndicesArray: function(e) {
                for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    t[r++] = o.a, t[r++] = o.b, t[r++] = o.c
                }
                return this
            },
            copyVector2sArray: function(e) {
                for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", n), o = new a.Vector2), t[r++] = o.x, t[r++] = o.y
                }
                return this
            },
            copyVector3sArray: function(e) {
                for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), o = new a.Vector3), t[r++] = o.x, t[r++] = o.y, t[r++] = o.z
                }
                return this
            },
            copyVector4sArray: function(e) {
                for (var t = this.array, r = 0, n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), o = new a.Vector4), t[r++] = o.x, t[r++] = o.y, t[r++] = o.z, t[r++] = o.w
                }
                return this
            },
            set: function(e, t) {
                return void 0 === t && (t = 0), this.array.set(e, t), this
            },
            getX: function(e) {
                return this.array[e * this.itemSize]
            },
            setX: function(e, t) {
                return this.array[e * this.itemSize] = t, this
            },
            getY: function(e) {
                return this.array[e * this.itemSize + 1]
            },
            setY: function(e, t) {
                return this.array[e * this.itemSize + 1] = t, this
            },
            getZ: function(e) {
                return this.array[e * this.itemSize + 2]
            },
            setZ: function(e, t) {
                return this.array[e * this.itemSize + 2] = t, this
            },
            getW: function(e) {
                return this.array[e * this.itemSize + 3]
            },
            setW: function(e, t) {
                return this.array[e * this.itemSize + 3] = t, this
            },
            setXY: function(e, t, r) {
                return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this
            },
            setXYZ: function(e, t, r, n) {
                return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = n, this
            },
            setXYZW: function(e, t, r, n, i) {
                return e *= this.itemSize, this.array[e + 0] = t, this.array[e + 1] = r, this.array[e + 2] = n, this.array[e + 3] = i, this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }, a.Int8Attribute = function(e, t) {
            return new a.BufferAttribute(new Int8Array(e), t)
        }, a.Uint8Attribute = function(e, t) {
            return new a.BufferAttribute(new Uint8Array(e), t)
        }, a.Uint8ClampedAttribute = function(e, t) {
            return new a.BufferAttribute(new Uint8ClampedArray(e), t)
        }, a.Int16Attribute = function(e, t) {
            return new a.BufferAttribute(new Int16Array(e), t)
        }, a.Uint16Attribute = function(e, t) {
            return new a.BufferAttribute(new Uint16Array(e), t)
        }, a.Int32Attribute = function(e, t) {
            return new a.BufferAttribute(new Int32Array(e), t)
        }, a.Uint32Attribute = function(e, t) {
            return new a.BufferAttribute(new Uint32Array(e), t)
        }, a.Float32Attribute = function(e, t) {
            return new a.BufferAttribute(new Float32Array(e), t)
        }, a.Float64Attribute = function(e, t) {
            return new a.BufferAttribute(new Float64Array(e), t)
        }, a.DynamicBufferAttribute = function(e, t) {
            return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new a.BufferAttribute(e, t).setDynamic(!0)
        }, a.InstancedBufferAttribute = function(e, t, r) {
            a.BufferAttribute.call(this, e, t), this.meshPerAttribute = r || 1
        }, a.InstancedBufferAttribute.prototype = Object.create(a.BufferAttribute.prototype), a.InstancedBufferAttribute.prototype.constructor = a.InstancedBufferAttribute, a.InstancedBufferAttribute.prototype.copy = function(e) {
            return a.BufferAttribute.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }, a.InterleavedBuffer = function(e, t) {
            this.uuid = a.Math.generateUUID(), this.array = e, this.stride = t, this.dynamic = !1, this.updateRange = {
                offset: 0,
                count: -1
            }, this.version = 0
        }, a.InterleavedBuffer.prototype = {
            constructor: a.InterleavedBuffer,
            get length() {
                return this.array.length
            },
            get count() {
                return this.array.length / this.stride
            },
            set needsUpdate(e) {
                e === !0 && this.version++
            },
            setDynamic: function(e) {
                return this.dynamic = e, this
            },
            copy: function(e) {
                this.array = new e.array.constructor(e.array), this.stride = e.stride, this.dynamic = e.dynamic
            },
            copyAt: function(e, t, r) {
                e *= this.stride, r *= t.stride;
                for (var n = 0, i = this.stride; i > n; n++) this.array[e + n] = t.array[r + n];
                return this
            },
            set: function(e, t) {
                return void 0 === t && (t = 0), this.array.set(e, t), this
            },
            clone: function() {
                return (new this.constructor).copy(this)
            }
        }, a.InstancedInterleavedBuffer = function(e, t, r) {
            a.InterleavedBuffer.call(this, e, t), this.meshPerAttribute = r || 1
        }, a.InstancedInterleavedBuffer.prototype = Object.create(a.InterleavedBuffer.prototype), a.InstancedInterleavedBuffer.prototype.constructor = a.InstancedInterleavedBuffer, a.InstancedInterleavedBuffer.prototype.copy = function(e) {
            return a.InterleavedBuffer.prototype.copy.call(this, e), this.meshPerAttribute = e.meshPerAttribute, this
        }, a.InterleavedBufferAttribute = function(e, t, r) {
            this.uuid = a.Math.generateUUID(), this.data = e, this.itemSize = t, this.offset = r
        }, a.InterleavedBufferAttribute.prototype = {
            constructor: a.InterleavedBufferAttribute,
            get length() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."), this.array.length
            },
            get count() {
                return this.data.array.length / this.data.stride
            },
            setX: function(e, t) {
                return this.data.array[e * this.data.stride + this.offset] = t, this
            },
            setY: function(e, t) {
                return this.data.array[e * this.data.stride + this.offset + 1] = t, this
            },
            setZ: function(e, t) {
                return this.data.array[e * this.data.stride + this.offset + 2] = t, this
            },
            setW: function(e, t) {
                return this.data.array[e * this.data.stride + this.offset + 3] = t, this
            },
            getX: function(e) {
                return this.data.array[e * this.data.stride + this.offset]
            },
            getY: function(e) {
                return this.data.array[e * this.data.stride + this.offset + 1]
            },
            getZ: function(e) {
                return this.data.array[e * this.data.stride + this.offset + 2]
            },
            getW: function(e) {
                return this.data.array[e * this.data.stride + this.offset + 3]
            },
            setXY: function(e, t, r) {
                return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this
            },
            setXYZ: function(e, t, r, n) {
                return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = n, this
            },
            setXYZW: function(e, t, r, n, i) {
                return e = e * this.data.stride + this.offset, this.data.array[e + 0] = t, this.data.array[e + 1] = r, this.data.array[e + 2] = n, this.data.array[e + 3] = i, this
            }
        }, a.Geometry = function() {
            Object.defineProperty(this, "id", {
                value: a.GeometryIdCount++
            }), this.uuid = a.Math.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
        }, a.Geometry.prototype = {
            constructor: a.Geometry,
            applyMatrix: function(e) {
                for (var t = (new a.Matrix3).getNormalMatrix(e), r = 0, n = this.vertices.length; n > r; r++) {
                    var i = this.vertices[r];
                    i.applyMatrix4(e)
                }
                for (var r = 0, n = this.faces.length; n > r; r++) {
                    var o = this.faces[r];
                    o.normal.applyMatrix3(t).normalize();
                    for (var s = 0, u = o.vertexNormals.length; u > s; s++) o.vertexNormals[s].applyMatrix3(t).normalize()
                }
                null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0
            },
            rotateX: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.makeRotationX(t), this.applyMatrix(e), this
                }
            }(),
            rotateY: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
                }
            }(),
            rotateZ: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
                }
            }(),
            translate: function() {
                var e;
                return function(t, r, n) {
                    return void 0 === e && (e = new a.Matrix4), e.makeTranslation(t, r, n), this.applyMatrix(e), this
                }
            }(),
            scale: function() {
                var e;
                return function(t, r, n) {
                    return void 0 === e && (e = new a.Matrix4), e.makeScale(t, r, n), this.applyMatrix(e), this
                }
            }(),
            lookAt: function() {
                var e;
                return function(t) {
                    void 0 === e && (e = new a.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
                }
            }(),
            fromBufferGeometry: function(e) {
                var t = this,
                    r = null !== e.index ? e.index.array : void 0,
                    n = e.attributes,
                    i = n.position.array,
                    o = void 0 !== n.normal ? n.normal.array : void 0,
                    s = void 0 !== n.color ? n.color.array : void 0,
                    u = void 0 !== n.uv ? n.uv.array : void 0,
                    h = void 0 !== n.uv2 ? n.uv2.array : void 0;
                void 0 !== h && (this.faceVertexUvs[1] = []);
                for (var c = [], l = [], p = [], d = 0, f = 0, m = 0; d < i.length; d += 3, f += 2, m += 4) t.vertices.push(new a.Vector3(i[d], i[d + 1], i[d + 2])), void 0 !== o && c.push(new a.Vector3(o[d], o[d + 1], o[d + 2])), void 0 !== s && t.colors.push(new a.Color(s[d], s[d + 1], s[d + 2])), void 0 !== u && l.push(new a.Vector2(u[f], u[f + 1])), void 0 !== h && p.push(new a.Vector2(h[f], h[f + 1]));
                var v = function(e, r, n) {
                    var i = void 0 !== o ? [c[e].clone(), c[r].clone(), c[n].clone()] : [],
                        d = void 0 !== s ? [t.colors[e].clone(), t.colors[r].clone(), t.colors[n].clone()] : [],
                        f = new a.Face3(e, r, n, i, d);
                    t.faces.push(f), void 0 !== u && t.faceVertexUvs[0].push([l[e].clone(), l[r].clone(), l[n].clone()]), void 0 !== h && t.faceVertexUvs[1].push([p[e].clone(), p[r].clone(), p[n].clone()])
                };
                if (void 0 !== r) {
                    var g = e.groups;
                    if (g.length > 0)
                        for (var d = 0; d < g.length; d++)
                            for (var y = g[d], x = y.start, b = y.count, f = x, M = x + b; M > f; f += 3) v(r[f], r[f + 1], r[f + 2]);
                    else
                        for (var d = 0; d < r.length; d += 3) v(r[d], r[d + 1], r[d + 2])
                } else
                    for (var d = 0; d < i.length / 3; d += 3) v(d, d + 1, d + 2);
                return this.computeFaceNormals(), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), this
            },
            center: function() {
                this.computeBoundingBox();
                var e = this.boundingBox.center().negate();
                return this.translate(e.x, e.y, e.z), e
            },
            normalize: function() {
                this.computeBoundingSphere();
                var e = this.boundingSphere.center,
                    t = this.boundingSphere.radius,
                    r = 0 === t ? 1 : 1 / t,
                    n = new a.Matrix4;
                return n.set(r, 0, 0, -r * e.x, 0, r, 0, -r * e.y, 0, 0, r, -r * e.z, 0, 0, 0, 1), this.applyMatrix(n), this
            },
            computeFaceNormals: function() {
                for (var e = new a.Vector3, t = new a.Vector3, r = 0, n = this.faces.length; n > r; r++) {
                    var i = this.faces[r],
                        o = this.vertices[i.a],
                        s = this.vertices[i.b],
                        u = this.vertices[i.c];
                    e.subVectors(u, s), t.subVectors(o, s), e.cross(t), e.normalize(), i.normal.copy(e)
                }
            },
            computeVertexNormals: function(e) {
                var t, r, n, i, o, s;
                for (s = new Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++) s[t] = new a.Vector3;
                if (e) {
                    var u, h, c, l = new a.Vector3,
                        p = new a.Vector3;
                    for (n = 0, i = this.faces.length; i > n; n++) o = this.faces[n], u = this.vertices[o.a], h = this.vertices[o.b], c = this.vertices[o.c], l.subVectors(c, h), p.subVectors(u, h), l.cross(p), s[o.a].add(l), s[o.b].add(l), s[o.c].add(l)
                } else
                    for (n = 0, i = this.faces.length; i > n; n++) o = this.faces[n], s[o.a].add(o.normal), s[o.b].add(o.normal), s[o.c].add(o.normal);
                for (t = 0, r = this.vertices.length; r > t; t++) s[t].normalize();
                for (n = 0, i = this.faces.length; i > n; n++) {
                    o = this.faces[n];
                    var d = o.vertexNormals;
                    3 === d.length ? (d[0].copy(s[o.a]), d[1].copy(s[o.b]), d[2].copy(s[o.c])) : (d[0] = s[o.a].clone(), d[1] = s[o.b].clone(), d[2] = s[o.c].clone())
                }
            },
            computeMorphNormals: function() {
                var e, t, r, n, i;
                for (r = 0, n = this.faces.length; n > r; r++)
                    for (i = this.faces[r], i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(), i.__originalVertexNormals || (i.__originalVertexNormals = []), e = 0, t = i.vertexNormals.length; t > e; e++) i.__originalVertexNormals[e] ? i.__originalVertexNormals[e].copy(i.vertexNormals[e]) : i.__originalVertexNormals[e] = i.vertexNormals[e].clone();
                var o = new a.Geometry;
                for (o.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
                    if (!this.morphNormals[e]) {
                        this.morphNormals[e] = {}, this.morphNormals[e].faceNormals = [], this.morphNormals[e].vertexNormals = [];
                        var s, u, h = this.morphNormals[e].faceNormals,
                            c = this.morphNormals[e].vertexNormals;
                        for (r = 0, n = this.faces.length; n > r; r++) s = new a.Vector3, u = {
                            a: new a.Vector3,
                            b: new a.Vector3,
                            c: new a.Vector3
                        }, h.push(s), c.push(u)
                    }
                    var l = this.morphNormals[e];
                    o.vertices = this.morphTargets[e].vertices, o.computeFaceNormals(), o.computeVertexNormals();
                    var s, u;
                    for (r = 0, n = this.faces.length; n > r; r++) i = this.faces[r], s = l.faceNormals[r], u = l.vertexNormals[r], s.copy(i.normal), u.a.copy(i.vertexNormals[0]), u.b.copy(i.vertexNormals[1]), u.c.copy(i.vertexNormals[2])
                }
                for (r = 0, n = this.faces.length; n > r; r++) i = this.faces[r], i.normal = i.__originalFaceNormal, i.vertexNormals = i.__originalVertexNormals
            },
            computeTangents: function() {
                console.warn("THREE.Geometry: .computeTangents() has been removed.")
            },
            computeLineDistances: function() {
                for (var e = 0, t = this.vertices, r = 0, n = t.length; n > r; r++) r > 0 && (e += t[r].distanceTo(t[r - 1])), this.lineDistances[r] = e
            },
            computeBoundingBox: function() {
                null === this.boundingBox && (this.boundingBox = new a.Box3), this.boundingBox.setFromPoints(this.vertices)
            },
            computeBoundingSphere: function() {
                null === this.boundingSphere && (this.boundingSphere = new a.Sphere), this.boundingSphere.setFromPoints(this.vertices)
            },
            merge: function(e, t, r) {
                if (e instanceof a.Geometry == 0) return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
                var n, i = this.vertices.length,
                    o = this.vertices,
                    s = e.vertices,
                    u = this.faces,
                    h = e.faces,
                    c = this.faceVertexUvs[0],
                    l = e.faceVertexUvs[0];
                void 0 === r && (r = 0), void 0 !== t && (n = (new a.Matrix3).getNormalMatrix(t));
                for (var p = 0, d = s.length; d > p; p++) {
                    var f = s[p],
                        m = f.clone();
                    void 0 !== t && m.applyMatrix4(t), o.push(m)
                }
                for (p = 0, d = h.length; d > p; p++) {
                    var v, g, y, x = h[p],
                        b = x.vertexNormals,
                        M = x.vertexColors;
                    v = new a.Face3(x.a + i, x.b + i, x.c + i), v.normal.copy(x.normal), void 0 !== n && v.normal.applyMatrix3(n).normalize();
                    for (var w = 0, _ = b.length; _ > w; w++) g = b[w].clone(), void 0 !== n && g.applyMatrix3(n).normalize(), v.vertexNormals.push(g);
                    v.color.copy(x.color);
                    for (var w = 0, _ = M.length; _ > w; w++) y = M[w], v.vertexColors.push(y.clone());
                    v.materialIndex = x.materialIndex + r, u.push(v)
                }
                for (p = 0, d = l.length; d > p; p++) {
                    var E = l[p],
                        S = [];
                    if (void 0 !== E) {
                        for (var w = 0, _ = E.length; _ > w; w++) S.push(E[w].clone());
                        c.push(S)
                    }
                }
            },
            mergeMesh: function(e) {
                return e instanceof a.Mesh == 0 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), void this.merge(e.geometry, e.matrix))
            },
            mergeVertices: function() {
                var e, t, r, n, i, o, a, s, u = {},
                    h = [],
                    c = [],
                    l = 4,
                    p = Math.pow(10, l);
                for (r = 0, n = this.vertices.length; n > r; r++) e = this.vertices[r], t = Math.round(e.x * p) + "_" + Math.round(e.y * p) + "_" + Math.round(e.z * p), void 0 === u[t] ? (u[t] = r, h.push(this.vertices[r]), c[r] = h.length - 1) : c[r] = c[u[t]];
                var d = [];
                for (r = 0, n = this.faces.length; n > r; r++) {
                    i = this.faces[r], i.a = c[i.a], i.b = c[i.b], i.c = c[i.c], o = [i.a, i.b, i.c];
                    for (var f = -1, m = 0; 3 > m; m++)
                        if (o[m] === o[(m + 1) % 3]) {
                            f = m, d.push(r);
                            break
                        }
                }
                for (r = d.length - 1; r >= 0; r--) {
                    var v = d[r];
                    for (this.faces.splice(v, 1), a = 0, s = this.faceVertexUvs.length; s > a; a++) this.faceVertexUvs[a].splice(v, 1)
                }
                var g = this.vertices.length - h.length;
                return this.vertices = h, g
            },
            toJSON: function() {
                function e(e, t, r) {
                    return r ? e | 1 << t : e & ~(1 << t)
                }

                function t(e) {
                    var t = e.x.toString() + e.y.toString() + e.z.toString();
                    return void 0 !== p[t] ? p[t] : (p[t] = l.length / 3, l.push(e.x, e.y, e.z), p[t])
                }

                function r(e) {
                    var t = e.r.toString() + e.g.toString() + e.b.toString();
                    return void 0 !== f[t] ? f[t] : (f[t] = d.length, d.push(e.getHex()), f[t])
                }

                function n(e) {
                    var t = e.x.toString() + e.y.toString();
                    return void 0 !== v[t] ? v[t] : (v[t] = m.length / 2, m.push(e.x, e.y), v[t])
                }
                var i = {
                    metadata: {
                        version: 4.4,
                        type: "Geometry",
                        generator: "Geometry.toJSON"
                    }
                };
                if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), void 0 !== this.parameters) {
                    var o = this.parameters;
                    for (var a in o) void 0 !== o[a] && (i[a] = o[a]);
                    return i
                }
                for (var s = [], u = 0; u < this.vertices.length; u++) {
                    var h = this.vertices[u];
                    s.push(h.x, h.y, h.z)
                }
                for (var c = [], l = [], p = {}, d = [], f = {}, m = [], v = {}, u = 0; u < this.faces.length; u++) {
                    var g = this.faces[u],
                        y = !1,
                        x = !1,
                        b = void 0 !== this.faceVertexUvs[0][u],
                        M = g.normal.length() > 0,
                        w = g.vertexNormals.length > 0,
                        _ = 1 !== g.color.r || 1 !== g.color.g || 1 !== g.color.b,
                        E = g.vertexColors.length > 0,
                        S = 0;
                    if (S = e(S, 0, 0), S = e(S, 1, y), S = e(S, 2, x), S = e(S, 3, b), S = e(S, 4, M), S = e(S, 5, w), S = e(S, 6, _), S = e(S, 7, E), c.push(S), c.push(g.a, g.b, g.c), b) {
                        var C = this.faceVertexUvs[0][u];
                        c.push(n(C[0]), n(C[1]), n(C[2]))
                    }
                    if (M && c.push(t(g.normal)), w) {
                        var T = g.vertexNormals;
                        c.push(t(T[0]), t(T[1]), t(T[2]))
                    }
                    if (_ && c.push(r(g.color)), E) {
                        var A = g.vertexColors;
                        c.push(r(A[0]), r(A[1]), r(A[2]))
                    }
                }
                return i.data = {}, i.data.vertices = s, i.data.normals = l, d.length > 0 && (i.data.colors = d), m.length > 0 && (i.data.uvs = [m]), i.data.faces = c, i
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                this.vertices = [], this.faces = [], this.faceVertexUvs = [
                    []
                ];
                for (var t = e.vertices, r = 0, n = t.length; n > r; r++) this.vertices.push(t[r].clone());
                for (var i = e.faces, r = 0, n = i.length; n > r; r++) this.faces.push(i[r].clone());
                for (var r = 0, n = e.faceVertexUvs.length; n > r; r++) {
                    var o = e.faceVertexUvs[r];
                    void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
                    for (var a = 0, s = o.length; s > a; a++) {
                        for (var u = o[a], h = [], c = 0, l = u.length; l > c; c++) {
                            var p = u[c];
                            h.push(p.clone())
                        }
                        this.faceVertexUvs[r].push(h)
                    }
                }
                return this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, a.EventDispatcher.prototype.apply(a.Geometry.prototype), a.GeometryIdCount = 0, a.DirectGeometry = function() {
            Object.defineProperty(this, "id", {
                value: a.GeometryIdCount++
            }), this.uuid = a.Math.generateUUID(), this.name = "", this.type = "DirectGeometry", this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
        }, a.DirectGeometry.prototype = {
            constructor: a.DirectGeometry,
            computeBoundingBox: a.Geometry.prototype.computeBoundingBox,
            computeBoundingSphere: a.Geometry.prototype.computeBoundingSphere,
            computeFaceNormals: function() {
                console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
            },
            computeVertexNormals: function() {
                console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
            },
            computeGroups: function(e) {
                for (var t, r, n = [], i = e.faces, o = 0; o < i.length; o++) {
                    var a = i[o];
                    a.materialIndex !== r && (r = a.materialIndex, void 0 !== t && (t.count = 3 * o - t.start, n.push(t)), t = {
                        start: 3 * o,
                        materialIndex: r
                    })
                }
                void 0 !== t && (t.count = 3 * o - t.start, n.push(t)), this.groups = n
            },
            fromGeometry: function(e) {
                var t = e.faces,
                    r = e.vertices,
                    n = e.faceVertexUvs,
                    i = n[0] && n[0].length > 0,
                    o = n[1] && n[1].length > 0,
                    s = e.morphTargets,
                    u = s.length;
                if (u > 0) {
                    for (var h = [], c = 0; u > c; c++) h[c] = [];
                    this.morphTargets.position = h
                }
                var l = e.morphNormals,
                    p = l.length;
                if (p > 0) {
                    for (var d = [], c = 0; p > c; c++) d[c] = [];
                    this.morphTargets.normal = d
                }
                for (var f = e.skinIndices, m = e.skinWeights, v = f.length === r.length, g = m.length === r.length, c = 0; c < t.length; c++) {
                    var y = t[c];
                    this.vertices.push(r[y.a], r[y.b], r[y.c]);
                    var x = y.vertexNormals;
                    if (3 === x.length) this.normals.push(x[0], x[1], x[2]);
                    else {
                        var b = y.normal;
                        this.normals.push(b, b, b)
                    }
                    var M = y.vertexColors;
                    if (3 === M.length) this.colors.push(M[0], M[1], M[2]);
                    else {
                        var w = y.color;
                        this.colors.push(w, w, w)
                    }
                    if (i === !0) {
                        var _ = n[0][c];
                        void 0 !== _ ? this.uvs.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new a.Vector2, new a.Vector2, new a.Vector2))
                    }
                    if (o === !0) {
                        var _ = n[1][c];
                        void 0 !== _ ? this.uvs2.push(_[0], _[1], _[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new a.Vector2, new a.Vector2, new a.Vector2))
                    }
                    for (var E = 0; u > E; E++) {
                        var S = s[E].vertices;
                        h[E].push(S[y.a], S[y.b], S[y.c])
                    }
                    for (var E = 0; p > E; E++) {
                        var C = l[E].vertexNormals[c];
                        d[E].push(C.a, C.b, C.c)
                    }
                    v && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), g && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
                }
                return this.computeGroups(e), this.verticesNeedUpdate = e.verticesNeedUpdate, this.normalsNeedUpdate = e.normalsNeedUpdate, this.colorsNeedUpdate = e.colorsNeedUpdate, this.uvsNeedUpdate = e.uvsNeedUpdate, this.groupsNeedUpdate = e.groupsNeedUpdate, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, a.EventDispatcher.prototype.apply(a.DirectGeometry.prototype), a.BufferGeometry = function() {
            Object.defineProperty(this, "id", {
                value: a.GeometryIdCount++
            }), this.uuid = a.Math.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                start: 0,
                count: 1 / 0
            }
        }, a.BufferGeometry.prototype = {
            constructor: a.BufferGeometry,
            addIndex: function(e) {
                console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(e)
            },
            getIndex: function() {
                return this.index
            },
            setIndex: function(e) {
                this.index = e
            },
            addAttribute: function(e, t) {
                return t instanceof a.BufferAttribute == 0 && t instanceof a.InterleavedBufferAttribute == 0 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(e, new a.BufferAttribute(arguments[1], arguments[2]))) : ("index" === e && (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t)), void(this.attributes[e] = t))
            },
            getAttribute: function(e) {
                return this.attributes[e]
            },
            removeAttribute: function(e) {
                delete this.attributes[e]
            },
            get drawcalls() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            },
            get offsets() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            },
            addDrawCall: function(e, t, r) {
                void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(e, t)
            },
            clearDrawCalls: function() {
                console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
            },
            addGroup: function(e, t, r) {
                this.groups.push({
                    start: e,
                    count: t,
                    materialIndex: void 0 !== r ? r : 0
                })
            },
            clearGroups: function() {
                this.groups = []
            },
            setDrawRange: function(e, t) {
                this.drawRange.start = e, this.drawRange.count = t
            },
            applyMatrix: function(e) {
                var t = this.attributes.position;
                void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0);
                var r = this.attributes.normal;
                if (void 0 !== r) {
                    var n = (new a.Matrix3).getNormalMatrix(e);
                    n.applyToVector3Array(r.array), r.needsUpdate = !0
                }
                null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere()
            },
            rotateX: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4),
                        e.makeRotationX(t), this.applyMatrix(e), this
                }
            }(),
            rotateY: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.makeRotationY(t), this.applyMatrix(e), this
                }
            }(),
            rotateZ: function() {
                var e;
                return function(t) {
                    return void 0 === e && (e = new a.Matrix4), e.makeRotationZ(t), this.applyMatrix(e), this
                }
            }(),
            translate: function() {
                var e;
                return function(t, r, n) {
                    return void 0 === e && (e = new a.Matrix4), e.makeTranslation(t, r, n), this.applyMatrix(e), this
                }
            }(),
            scale: function() {
                var e;
                return function(t, r, n) {
                    return void 0 === e && (e = new a.Matrix4), e.makeScale(t, r, n), this.applyMatrix(e), this
                }
            }(),
            lookAt: function() {
                var e;
                return function(t) {
                    void 0 === e && (e = new a.Object3D), e.lookAt(t), e.updateMatrix(), this.applyMatrix(e.matrix)
                }
            }(),
            center: function() {
                this.computeBoundingBox();
                var e = this.boundingBox.center().negate();
                return this.translate(e.x, e.y, e.z), e
            },
            setFromObject: function(e) {
                var t = e.geometry;
                if (e instanceof a.Points || e instanceof a.Line) {
                    var r = new a.Float32Attribute(3 * t.vertices.length, 3),
                        n = new a.Float32Attribute(3 * t.colors.length, 3);
                    if (this.addAttribute("position", r.copyVector3sArray(t.vertices)), this.addAttribute("color", n.copyColorsArray(t.colors)), t.lineDistances && t.lineDistances.length === t.vertices.length) {
                        var i = new a.Float32Attribute(t.lineDistances.length, 1);
                        this.addAttribute("lineDistance", i.copyArray(t.lineDistances))
                    }
                    null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
                } else e instanceof a.Mesh && t instanceof a.Geometry && this.fromGeometry(t);
                return this
            },
            updateFromObject: function(e) {
                var t = e.geometry;
                if (e instanceof a.Mesh) {
                    var r = t.__directGeometry;
                    if (void 0 === r) return this.fromGeometry(t);
                    r.verticesNeedUpdate = t.verticesNeedUpdate, r.normalsNeedUpdate = t.normalsNeedUpdate, r.colorsNeedUpdate = t.colorsNeedUpdate, r.uvsNeedUpdate = t.uvsNeedUpdate, r.groupsNeedUpdate = t.groupsNeedUpdate, t.verticesNeedUpdate = !1, t.normalsNeedUpdate = !1, t.colorsNeedUpdate = !1, t.uvsNeedUpdate = !1, t.groupsNeedUpdate = !1, t = r
                }
                if (t.verticesNeedUpdate === !0) {
                    var n = this.attributes.position;
                    void 0 !== n && (n.copyVector3sArray(t.vertices), n.needsUpdate = !0), t.verticesNeedUpdate = !1
                }
                if (t.normalsNeedUpdate === !0) {
                    var n = this.attributes.normal;
                    void 0 !== n && (n.copyVector3sArray(t.normals), n.needsUpdate = !0), t.normalsNeedUpdate = !1
                }
                if (t.colorsNeedUpdate === !0) {
                    var n = this.attributes.color;
                    void 0 !== n && (n.copyColorsArray(t.colors), n.needsUpdate = !0), t.colorsNeedUpdate = !1
                }
                if (t.lineDistancesNeedUpdate) {
                    var n = this.attributes.lineDistance;
                    void 0 !== n && (n.copyArray(t.lineDistances), n.needsUpdate = !0), t.lineDistancesNeedUpdate = !1
                }
                return t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1), this
            },
            fromGeometry: function(e) {
                return e.__directGeometry = (new a.DirectGeometry).fromGeometry(e), this.fromDirectGeometry(e.__directGeometry)
            },
            fromDirectGeometry: function(e) {
                var t = new Float32Array(3 * e.vertices.length);
                if (this.addAttribute("position", new a.BufferAttribute(t, 3).copyVector3sArray(e.vertices)), e.normals.length > 0) {
                    var r = new Float32Array(3 * e.normals.length);
                    this.addAttribute("normal", new a.BufferAttribute(r, 3).copyVector3sArray(e.normals))
                }
                if (e.colors.length > 0) {
                    var n = new Float32Array(3 * e.colors.length);
                    this.addAttribute("color", new a.BufferAttribute(n, 3).copyColorsArray(e.colors))
                }
                if (e.uvs.length > 0) {
                    var i = new Float32Array(2 * e.uvs.length);
                    this.addAttribute("uv", new a.BufferAttribute(i, 2).copyVector2sArray(e.uvs))
                }
                if (e.uvs2.length > 0) {
                    var o = new Float32Array(2 * e.uvs2.length);
                    this.addAttribute("uv2", new a.BufferAttribute(o, 2).copyVector2sArray(e.uvs2))
                }
                if (e.indices.length > 0) {
                    var s = e.vertices.length > 65535 ? Uint32Array : Uint16Array,
                        u = new s(3 * e.indices.length);
                    this.setIndex(new a.BufferAttribute(u, 1).copyIndicesArray(e.indices))
                }
                this.groups = e.groups;
                for (var h in e.morphTargets) {
                    for (var c = [], l = e.morphTargets[h], p = 0, d = l.length; d > p; p++) {
                        var f = l[p],
                            m = new a.Float32Attribute(3 * f.length, 3);
                        c.push(m.copyVector3sArray(f))
                    }
                    this.morphAttributes[h] = c
                }
                if (e.skinIndices.length > 0) {
                    var v = new a.Float32Attribute(4 * e.skinIndices.length, 4);
                    this.addAttribute("skinIndex", v.copyVector4sArray(e.skinIndices))
                }
                if (e.skinWeights.length > 0) {
                    var g = new a.Float32Attribute(4 * e.skinWeights.length, 4);
                    this.addAttribute("skinWeight", g.copyVector4sArray(e.skinWeights))
                }
                return null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()), this
            },
            computeBoundingBox: function() {
                var e = new a.Vector3;
                return function() {
                    null === this.boundingBox && (this.boundingBox = new a.Box3);
                    var t = this.attributes.position.array;
                    if (t) {
                        var r = this.boundingBox;
                        r.makeEmpty();
                        for (var n = 0, i = t.length; i > n; n += 3) e.fromArray(t, n), r.expandByPoint(e)
                    }(void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                }
            }(),
            computeBoundingSphere: function() {
                var e = new a.Box3,
                    t = new a.Vector3;
                return function() {
                    null === this.boundingSphere && (this.boundingSphere = new a.Sphere);
                    var r = this.attributes.position.array;
                    if (r) {
                        e.makeEmpty();
                        for (var n = this.boundingSphere.center, i = 0, o = r.length; o > i; i += 3) t.fromArray(r, i), e.expandByPoint(t);
                        e.center(n);
                        for (var s = 0, i = 0, o = r.length; o > i; i += 3) t.fromArray(r, i), s = Math.max(s, n.distanceToSquared(t));
                        this.boundingSphere.radius = Math.sqrt(s), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                    }
                }
            }(),
            computeFaceNormals: function() {},
            computeVertexNormals: function() {
                var e = this.index,
                    t = this.attributes,
                    r = this.groups;
                if (t.position) {
                    var n = t.position.array;
                    if (void 0 === t.normal) this.addAttribute("normal", new a.BufferAttribute(new Float32Array(n.length), 3));
                    else
                        for (var i = t.normal.array, o = 0, s = i.length; s > o; o++) i[o] = 0;
                    var u, h, c, i = t.normal.array,
                        l = new a.Vector3,
                        p = new a.Vector3,
                        d = new a.Vector3,
                        f = new a.Vector3,
                        m = new a.Vector3;
                    if (e) {
                        var v = e.array;
                        0 === r.length && this.addGroup(0, v.length);
                        for (var g = 0, y = r.length; y > g; ++g)
                            for (var x = r[g], b = x.start, M = x.count, o = b, s = b + M; s > o; o += 3) u = 3 * v[o + 0], h = 3 * v[o + 1], c = 3 * v[o + 2], l.fromArray(n, u), p.fromArray(n, h), d.fromArray(n, c), f.subVectors(d, p), m.subVectors(l, p), f.cross(m), i[u] += f.x, i[u + 1] += f.y, i[u + 2] += f.z, i[h] += f.x, i[h + 1] += f.y, i[h + 2] += f.z, i[c] += f.x, i[c + 1] += f.y, i[c + 2] += f.z
                    } else
                        for (var o = 0, s = n.length; s > o; o += 9) l.fromArray(n, o), p.fromArray(n, o + 3), d.fromArray(n, o + 6), f.subVectors(d, p), m.subVectors(l, p), f.cross(m), i[o] = f.x, i[o + 1] = f.y, i[o + 2] = f.z, i[o + 3] = f.x, i[o + 4] = f.y, i[o + 5] = f.z, i[o + 6] = f.x, i[o + 7] = f.y, i[o + 8] = f.z;
                    this.normalizeNormals(), t.normal.needsUpdate = !0
                }
            },
            computeTangents: function() {
                console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
            },
            computeOffsets: function(e) {
                console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
            },
            merge: function(e, t) {
                if (e instanceof a.BufferGeometry == 0) return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e);
                void 0 === t && (t = 0);
                var r = this.attributes;
                for (var n in r)
                    if (void 0 !== e.attributes[n])
                        for (var i = r[n], o = i.array, s = e.attributes[n], u = s.array, h = s.itemSize, c = 0, l = h * t; c < u.length; c++, l++) o[l] = u[c];
                return this
            },
            normalizeNormals: function() {
                for (var e, t, r, n, i = this.attributes.normal.array, o = 0, a = i.length; a > o; o += 3) e = i[o], t = i[o + 1], r = i[o + 2], n = 1 / Math.sqrt(e * e + t * t + r * r), i[o] *= n, i[o + 1] *= n, i[o + 2] *= n
            },
            toJSON: function() {
                var e = {
                    metadata: {
                        version: 4.4,
                        type: "BufferGeometry",
                        generator: "BufferGeometry.toJSON"
                    }
                };
                if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
                    var t = this.parameters;
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
                    return e
                }
                e.data = {
                    attributes: {}
                };
                var n = this.index;
                if (null !== n) {
                    var i = Array.prototype.slice.call(n.array);
                    e.data.index = {
                        type: n.array.constructor.name,
                        array: i
                    }
                }
                var o = this.attributes;
                for (var r in o) {
                    var a = o[r],
                        i = Array.prototype.slice.call(a.array);
                    e.data.attributes[r] = {
                        itemSize: a.itemSize,
                        type: a.array.constructor.name,
                        array: i
                    }
                }
                var s = this.groups;
                s.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(s)));
                var u = this.boundingSphere;
                return null !== u && (e.data.boundingSphere = {
                    center: u.center.toArray(),
                    radius: u.radius
                }), e
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                var t = e.index;
                null !== t && this.setIndex(t.clone());
                var r = e.attributes;
                for (var n in r) {
                    var i = r[n];
                    this.addAttribute(n, i.clone())
                }
                for (var o = e.groups, a = 0, s = o.length; s > a; a++) {
                    var u = o[a];
                    this.addGroup(u.start, u.count)
                }
                return this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, a.EventDispatcher.prototype.apply(a.BufferGeometry.prototype), a.BufferGeometry.MaxIndex = 65535, a.InstancedBufferGeometry = function() {
            a.BufferGeometry.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
        }, a.InstancedBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype), a.InstancedBufferGeometry.prototype.constructor = a.InstancedBufferGeometry, a.InstancedBufferGeometry.prototype.addGroup = function(e, t, r) {
            this.groups.push({
                start: e,
                count: t,
                instances: r
            })
        }, a.InstancedBufferGeometry.prototype.copy = function(e) {
            var t = e.index;
            null !== t && this.setIndex(t.clone());
            var r = e.attributes;
            for (var n in r) {
                var i = r[n];
                this.addAttribute(n, i.clone())
            }
            for (var o = e.groups, a = 0, s = o.length; s > a; a++) {
                var u = o[a];
                this.addGroup(u.start, u.count, u.instances)
            }
            return this
        }, a.EventDispatcher.prototype.apply(a.InstancedBufferGeometry.prototype), a.Camera = function() {
            a.Object3D.call(this), this.type = "Camera", this.matrixWorldInverse = new a.Matrix4, this.projectionMatrix = new a.Matrix4
        }, a.Camera.prototype = Object.create(a.Object3D.prototype), a.Camera.prototype.constructor = a.Camera, a.Camera.prototype.getWorldDirection = function() {
            var e = new a.Quaternion;
            return function(t) {
                var r = t || new a.Vector3;
                return this.getWorldQuaternion(e), r.set(0, 0, -1).applyQuaternion(e)
            }
        }(), a.Camera.prototype.lookAt = function() {
            var e = new a.Matrix4;
            return function(t) {
                e.lookAt(this.position, t, this.up), this.quaternion.setFromRotationMatrix(e)
            }
        }(), a.Camera.prototype.clone = function() {
            return (new this.constructor).copy(this)
        }, a.Camera.prototype.copy = function(e) {
            return a.Object3D.prototype.copy.call(this, e), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this
        }, a.CubeCamera = function(e, t, r) {
            a.Object3D.call(this), this.type = "CubeCamera";
            var n = 90,
                i = 1,
                o = new a.PerspectiveCamera(n, i, e, t);
            o.up.set(0, -1, 0), o.lookAt(new a.Vector3(1, 0, 0)), this.add(o);
            var s = new a.PerspectiveCamera(n, i, e, t);
            s.up.set(0, -1, 0), s.lookAt(new a.Vector3(-1, 0, 0)), this.add(s);
            var u = new a.PerspectiveCamera(n, i, e, t);
            u.up.set(0, 0, 1), u.lookAt(new a.Vector3(0, 1, 0)), this.add(u);
            var h = new a.PerspectiveCamera(n, i, e, t);
            h.up.set(0, 0, -1), h.lookAt(new a.Vector3(0, -1, 0)), this.add(h);
            var c = new a.PerspectiveCamera(n, i, e, t);
            c.up.set(0, -1, 0), c.lookAt(new a.Vector3(0, 0, 1)), this.add(c);
            var l = new a.PerspectiveCamera(n, i, e, t);
            l.up.set(0, -1, 0), l.lookAt(new a.Vector3(0, 0, -1)), this.add(l), this.renderTarget = new a.WebGLRenderTargetCube(r, r, {
                format: a.RGBFormat,
                magFilter: a.LinearFilter,
                minFilter: a.LinearFilter
            }), this.updateCubeMap = function(e, t) {
                null === this.parent && this.updateMatrixWorld();
                var r = this.renderTarget,
                    n = r.generateMipmaps;
                r.generateMipmaps = !1, r.activeCubeFace = 0, e.render(t, o, r), r.activeCubeFace = 1, e.render(t, s, r), r.activeCubeFace = 2, e.render(t, u, r), r.activeCubeFace = 3, e.render(t, h, r), r.activeCubeFace = 4, e.render(t, c, r), r.generateMipmaps = n, r.activeCubeFace = 5, e.render(t, l, r), e.setRenderTarget(null)
            }
        }, a.CubeCamera.prototype = Object.create(a.Object3D.prototype), a.CubeCamera.prototype.constructor = a.CubeCamera, a.OrthographicCamera = function(e, t, r, n, i, o) {
            a.Camera.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.left = e, this.right = t, this.top = r, this.bottom = n, this.near = void 0 !== i ? i : .1, this.far = void 0 !== o ? o : 2e3, this.updateProjectionMatrix()
        }, a.OrthographicCamera.prototype = Object.create(a.Camera.prototype), a.OrthographicCamera.prototype.constructor = a.OrthographicCamera, a.OrthographicCamera.prototype.updateProjectionMatrix = function() {
            var e = (this.right - this.left) / (2 * this.zoom),
                t = (this.top - this.bottom) / (2 * this.zoom),
                r = (this.right + this.left) / 2,
                n = (this.top + this.bottom) / 2;
            this.projectionMatrix.makeOrthographic(r - e, r + e, n + t, n - t, this.near, this.far)
        }, a.OrthographicCamera.prototype.copy = function(e) {
            return a.Camera.prototype.copy.call(this, e), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
        }, a.OrthographicCamera.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, t
        }, a.PerspectiveCamera = function(e, t, r, n) {
            a.Camera.call(this), this.type = "PerspectiveCamera", this.zoom = 1, this.fov = void 0 !== e ? e : 50, this.aspect = void 0 !== t ? t : 1, this.near = void 0 !== r ? r : .1, this.far = void 0 !== n ? n : 2e3, this.updateProjectionMatrix()
        }, a.PerspectiveCamera.prototype = Object.create(a.Camera.prototype), a.PerspectiveCamera.prototype.constructor = a.PerspectiveCamera, a.PerspectiveCamera.prototype.setLens = function(e, t) {
            void 0 === t && (t = 24), this.fov = 2 * a.Math.radToDeg(Math.atan(t / (2 * e))), this.updateProjectionMatrix()
        }, a.PerspectiveCamera.prototype.setViewOffset = function(e, t, r, n, i, o) {
            this.fullWidth = e, this.fullHeight = t, this.x = r, this.y = n, this.width = i, this.height = o, this.updateProjectionMatrix()
        }, a.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
            var e = a.Math.radToDeg(2 * Math.atan(Math.tan(.5 * a.Math.degToRad(this.fov)) / this.zoom));
            if (this.fullWidth) {
                var t = this.fullWidth / this.fullHeight,
                    r = Math.tan(a.Math.degToRad(.5 * e)) * this.near,
                    n = -r,
                    i = t * n,
                    o = t * r,
                    s = Math.abs(o - i),
                    u = Math.abs(r - n);
                this.projectionMatrix.makeFrustum(i + this.x * s / this.fullWidth, i + (this.x + this.width) * s / this.fullWidth, r - (this.y + this.height) * u / this.fullHeight, r - this.y * u / this.fullHeight, this.near, this.far)
            } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
        }, a.PerspectiveCamera.prototype.copy = function(e) {
            return a.Camera.prototype.copy.call(this, e), this.fov = e.fov, this.aspect = e.aspect, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this
        }, a.PerspectiveCamera.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.zoom = this.zoom, t.object.fov = this.fov, t.object.aspect = this.aspect, t.object.near = this.near, t.object.far = this.far, t
        }, a.Light = function(e) {
            a.Object3D.call(this), this.type = "Light", this.color = new a.Color(e)
        }, a.Light.prototype = Object.create(a.Object3D.prototype), a.Light.prototype.constructor = a.Light, a.Light.prototype.copy = function(e) {
            return a.Object3D.prototype.copy.call(this, e), this.color.copy(e.color), this
        }, a.AmbientLight = function(e) {
            a.Light.call(this, e), this.type = "AmbientLight"
        }, a.AmbientLight.prototype = Object.create(a.Light.prototype), a.AmbientLight.prototype.constructor = a.AmbientLight, a.AmbientLight.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), t
        }, a.DirectionalLight = function(e, t) {
            a.Light.call(this, e), this.type = "DirectionalLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new a.Object3D, this.intensity = void 0 !== t ? t : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
        }, a.DirectionalLight.prototype = Object.create(a.Light.prototype), a.DirectionalLight.prototype.constructor = a.DirectionalLight, a.DirectionalLight.prototype.copy = function(e) {
            return a.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.target = e.target.clone(), this.castShadow = e.castShadow, this.onlyShadow = e.onlyShadow, this.shadowCameraNear = e.shadowCameraNear, this.shadowCameraFar = e.shadowCameraFar, this.shadowCameraLeft = e.shadowCameraLeft, this.shadowCameraRight = e.shadowCameraRight, this.shadowCameraTop = e.shadowCameraTop, this.shadowCameraBottom = e.shadowCameraBottom, this.shadowCameraVisible = e.shadowCameraVisible, this.shadowBias = e.shadowBias, this.shadowDarkness = e.shadowDarkness, this.shadowMapWidth = e.shadowMapWidth, this.shadowMapHeight = e.shadowMapHeight, this
        }, a.DirectionalLight.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t
        }, a.HemisphereLight = function(e, t, r) {
            a.Light.call(this, e), this.type = "HemisphereLight", this.position.set(0, 1, 0), this.updateMatrix(), this.groundColor = new a.Color(t), this.intensity = void 0 !== r ? r : 1
        }, a.HemisphereLight.prototype = Object.create(a.Light.prototype), a.HemisphereLight.prototype.constructor = a.HemisphereLight, a.HemisphereLight.prototype.copy = function(e) {
            return a.Light.prototype.copy.call(this, e), this.groundColor.copy(e.groundColor), this.intensity = e.intensity, this
        }, a.HemisphereLight.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), t.object.groundColor = this.groundColor.getHex(), t.object.intensity = this.intensity, t
        }, a.PointLight = function(e, t, r, n) {
            a.Light.call(this, e), this.type = "PointLight", this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.decay = void 0 !== n ? n : 1
        }, a.PointLight.prototype = Object.create(a.Light.prototype), a.PointLight.prototype.constructor = a.PointLight, a.PointLight.prototype.copy = function(e) {
            return a.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.distance = e.distance, this.decay = e.decay, this
        }, a.PointLight.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t.object.distance = this.distance, t.object.decay = this.decay, t
        }, a.SpotLight = function(e, t, r, n, i, o) {
            a.Light.call(this, e), this.type = "SpotLight", this.position.set(0, 1, 0), this.updateMatrix(), this.target = new a.Object3D, this.intensity = void 0 !== t ? t : 1, this.distance = void 0 !== r ? r : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.exponent = void 0 !== i ? i : 10, this.decay = void 0 !== o ? o : 1, this.castShadow = !1, this.onlyShadow = !1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = .5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
        }, a.SpotLight.prototype = Object.create(a.Light.prototype), a.SpotLight.prototype.constructor = a.SpotLight, a.SpotLight.prototype.copy = function(e) {
            return a.Light.prototype.copy.call(this, e), this.intensity = e.intensity, this.distance = e.distance, this.angle = e.angle, this.exponent = e.exponent, this.decay = e.decay, this.target = e.target.clone(), this.castShadow = e.castShadow, this.onlyShadow = e.onlyShadow, this.shadowCameraNear = e.shadowCameraNear, this.shadowCameraFar = e.shadowCameraFar, this.shadowCameraFov = e.shadowCameraFov, this.shadowCameraVisible = e.shadowCameraVisible, this.shadowBias = e.shadowBias, this.shadowDarkness = e.shadowDarkness, this.shadowMapWidth = e.shadowMapWidth, this.shadowMapHeight = e.shadowMapHeight, this
        }, a.SpotLight.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t.object.distance = this.distance, t.object.angle = this.angle, t.object.exponent = this.exponent, t.object.decay = this.decay, t
        }, a.Cache = {
            enabled: !1,
            files: {},
            add: function(e, t) {
                this.enabled !== !1 && (this.files[e] = t)
            },
            get: function(e) {
                return this.enabled !== !1 ? this.files[e] : void 0
            },
            remove: function(e) {
                delete this.files[e]
            },
            clear: function() {
                this.files = {}
            }
        }, a.Loader = function() {
            this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
        }, a.Loader.prototype = {
            constructor: a.Loader,
            crossOrigin: void 0,
            extractUrlBase: function(e) {
                var t = e.split("/");
                return 1 === t.length ? "./" : (t.pop(), t.join("/") + "/")
            },
            initMaterials: function(e, t, r) {
                for (var n = [], i = 0; i < e.length; ++i) n[i] = this.createMaterial(e[i], t, r);
                return n
            },
            createMaterial: function() {
                var e;
                return function(t, r, n) {
                    function i(e) {
                        var t = Math.log(e) / Math.LN2;
                        return Math.pow(2, Math.round(t))
                    }

                    function o(t, o, s, u, h, c, l) {
                        var p, d = r + s,
                            f = a.Loader.Handlers.get(d);
                        if (null !== f ? p = f.load(d) : (p = new a.Texture, f = e, f.setCrossOrigin(n), f.load(d, function(e) {
                                if (a.Math.isPowerOfTwo(e.width) === !1 || a.Math.isPowerOfTwo(e.height) === !1) {
                                    var t = i(e.width),
                                        r = i(e.height),
                                        n = document.createElement("canvas");
                                    n.width = t, n.height = r;
                                    var o = n.getContext("2d");
                                    o.drawImage(e, 0, 0, t, r), p.image = n
                                } else p.image = e;
                                p.needsUpdate = !0
                            })), p.sourceFile = s, u && (p.repeat.set(u[0], u[1]), 1 !== u[0] && (p.wrapS = a.RepeatWrapping), 1 !== u[1] && (p.wrapT = a.RepeatWrapping)), h && p.offset.set(h[0], h[1]), c) {
                            var m = {
                                repeat: a.RepeatWrapping,
                                mirror: a.MirroredRepeatWrapping
                            };
                            void 0 !== m[c[0]] && (p.wrapS = m[c[0]]), void 0 !== m[c[1]] && (p.wrapT = m[c[1]])
                        }
                        l && (p.anisotropy = l), t[o] = p
                    }

                    function s(e) {
                        return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2]
                    }
                    var u = this;
                    void 0 === n && void 0 !== u.crossOrigin && (n = u.crossOrigin), void 0 === e && (e = new a.ImageLoader);
                    var h = "MeshLambertMaterial",
                        c = {};
                    if (t.shading) {
                        var l = t.shading.toLowerCase();
                        "phong" === l ? h = "MeshPhongMaterial" : "basic" === l && (h = "MeshBasicMaterial")
                    }
                    void 0 !== t.blending && void 0 !== a[t.blending] && (c.blending = a[t.blending]), void 0 !== t.transparent && (c.transparent = t.transparent), void 0 !== t.opacity && t.opacity < 1 && (c.transparent = !0), void 0 !== t.depthTest && (c.depthTest = t.depthTest), void 0 !== t.depthWrite && (c.depthWrite = t.depthWrite), void 0 !== t.visible && (c.visible = t.visible), void 0 !== t.flipSided && (c.side = a.BackSide), void 0 !== t.doubleSided && (c.side = a.DoubleSide), void 0 !== t.wireframe && (c.wireframe = t.wireframe), void 0 !== t.vertexColors && ("face" === t.vertexColors ? c.vertexColors = a.FaceColors : t.vertexColors && (c.vertexColors = a.VertexColors)), t.colorDiffuse ? c.color = s(t.colorDiffuse) : t.DbgColor && (c.color = t.DbgColor), t.colorEmissive && (c.emissive = s(t.colorEmissive)), "MeshPhongMaterial" === h && (t.colorSpecular && (c.specular = s(t.colorSpecular)), t.specularCoef && (c.shininess = t.specularCoef)), void 0 !== t.transparency && (console.warn("THREE.Loader: transparency has been renamed to opacity"), t.opacity = t.transparency), void 0 !== t.opacity && (c.opacity = t.opacity), r && (t.mapDiffuse && o(c, "map", t.mapDiffuse, t.mapDiffuseRepeat, t.mapDiffuseOffset, t.mapDiffuseWrap, t.mapDiffuseAnisotropy), t.mapLight && o(c, "lightMap", t.mapLight, t.mapLightRepeat, t.mapLightOffset, t.mapLightWrap, t.mapLightAnisotropy), t.mapAO && o(c, "aoMap", t.mapAO, t.mapAORepeat, t.mapAOOffset, t.mapAOWrap, t.mapAOAnisotropy), t.mapBump && o(c, "bumpMap", t.mapBump, t.mapBumpRepeat, t.mapBumpOffset, t.mapBumpWrap, t.mapBumpAnisotropy), t.mapNormal && o(c, "normalMap", t.mapNormal, t.mapNormalRepeat, t.mapNormalOffset, t.mapNormalWrap, t.mapNormalAnisotropy), t.mapSpecular && o(c, "specularMap", t.mapSpecular, t.mapSpecularRepeat, t.mapSpecularOffset, t.mapSpecularWrap, t.mapSpecularAnisotropy), t.mapAlpha && o(c, "alphaMap", t.mapAlpha, t.mapAlphaRepeat, t.mapAlphaOffset, t.mapAlphaWrap, t.mapAlphaAnisotropy)), t.mapBumpScale && (c.bumpScale = t.mapBumpScale), t.mapNormalFactor && (c.normalScale = new a.Vector2(t.mapNormalFactor, t.mapNormalFactor));
                    var p = new a[h](c);
                    return void 0 !== t.DbgName && (p.name = t.DbgName), p
                }
            }()
        }, a.Loader.Handlers = {
            handlers: [],
            add: function(e, t) {
                this.handlers.push(e, t)
            },
            get: function(e) {
                for (var t = 0, r = this.handlers.length; r > t; t += 2) {
                    var n = this.handlers[t],
                        i = this.handlers[t + 1];
                    if (n.test(e)) return i
                }
                return null
            }
        }, a.XHRLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager
        }, a.XHRLoader.prototype = {
            constructor: a.XHRLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = a.Cache.get(e);
                if (void 0 !== o) return t && setTimeout(function() {
                    t(o)
                }, 0), o;
                var s = new XMLHttpRequest;
                return s.open("GET", e, !0), s.addEventListener("load", function(r) {
                    a.Cache.add(e, this.response), t && t(this.response), i.manager.itemEnd(e)
                }, !1), void 0 !== r && s.addEventListener("progress", function(e) {
                    r(e)
                }, !1), s.addEventListener("error", function(t) {
                    n && n(t), i.manager.itemError(e)
                }, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), void 0 !== this.responseType && (s.responseType = this.responseType), void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials), s.send(null), i.manager.itemStart(e), s
            },
            setResponseType: function(e) {
                this.responseType = e
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            },
            setWithCredentials: function(e) {
                this.withCredentials = e
            }
        }, a.ImageLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager
        }, a.ImageLoader.prototype = {
            constructor: a.ImageLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = a.Cache.get(e);
                if (void 0 !== o) return t && setTimeout(function() {
                    t(o)
                }, 0), o;
                var s = document.createElement("img");
                return s.addEventListener("load", function(r) {
                    a.Cache.add(e, this), t && t(this), i.manager.itemEnd(e)
                }, !1), void 0 !== r && s.addEventListener("progress", function(e) {
                    r(e)
                }, !1), s.addEventListener("error", function(t) {
                    n && n(t), i.manager.itemError(e)
                }, !1), void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), i.manager.itemStart(e), s.src = e, s
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            }
        }, a.JSONLoader = function(e) {
            "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0), this.manager = void 0 !== e ? e : a.DefaultLoadingManager, this.withCredentials = !1
        }, a.JSONLoader.prototype = {
            constructor: a.JSONLoader,
            get statusDomElement() {
                return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")), console.warn("THREE.JSONLoader: .statusDomElement has been removed."), this._statusDomElement
            },
            load: function(e, t, r, n) {
                var i = this,
                    o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : a.Loader.prototype.extractUrlBase(e),
                    s = new a.XHRLoader(this.manager);
                s.setCrossOrigin(this.crossOrigin), s.setWithCredentials(this.withCredentials), s.load(e, function(r) {
                    var n = JSON.parse(r),
                        a = n.metadata;
                    if (void 0 !== a) {
                        if ("object" === a.type) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === a.type) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
                    }
                    var s = i.parse(n, o);
                    t(s.geometry, s.materials)
                })
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            },
            setTexturePath: function(e) {
                this.texturePath = e
            },
            parse: function(e, t) {
                function r(t) {
                    function r(e, t) {
                        return e & 1 << t
                    }
                    var n, i, s, u, h, c, l, p, d, f, m, v, g, y, x, b, M, w, _, E, S, C, T, A, P, L, D, R = e.faces,
                        O = e.vertices,
                        k = e.normals,
                        N = e.colors,
                        U = 0;
                    if (void 0 !== e.uvs) {
                        for (n = 0; n < e.uvs.length; n++) e.uvs[n].length && U++;
                        for (n = 0; U > n; n++) o.faceVertexUvs[n] = []
                    }
                    for (u = 0, h = O.length; h > u;) w = new a.Vector3, w.x = O[u++] * t, w.y = O[u++] * t, w.z = O[u++] * t, o.vertices.push(w);
                    for (u = 0, h = R.length; h > u;)
                        if (f = R[u++], m = r(f, 0), v = r(f, 1), g = r(f, 3), y = r(f, 4), x = r(f, 5), b = r(f, 6), M = r(f, 7), m) {
                            if (E = new a.Face3, E.a = R[u], E.b = R[u + 1], E.c = R[u + 3], S = new a.Face3, S.a = R[u + 1], S.b = R[u + 2], S.c = R[u + 3], u += 4, v && (d = R[u++], E.materialIndex = d, S.materialIndex = d), s = o.faces.length, g)
                                for (n = 0; U > n; n++)
                                    for (A = e.uvs[n], o.faceVertexUvs[n][s] = [], o.faceVertexUvs[n][s + 1] = [], i = 0; 4 > i; i++) p = R[u++], L = A[2 * p], D = A[2 * p + 1], P = new a.Vector2(L, D), 2 !== i && o.faceVertexUvs[n][s].push(P), 0 !== i && o.faceVertexUvs[n][s + 1].push(P);
                            if (y && (l = 3 * R[u++], E.normal.set(k[l++], k[l++], k[l]), S.normal.copy(E.normal)), x)
                                for (n = 0; 4 > n; n++) l = 3 * R[u++], T = new a.Vector3(k[l++], k[l++], k[l]), 2 !== n && E.vertexNormals.push(T), 0 !== n && S.vertexNormals.push(T);
                            if (b && (c = R[u++], C = N[c], E.color.setHex(C), S.color.setHex(C)), M)
                                for (n = 0; 4 > n; n++) c = R[u++], C = N[c], 2 !== n && E.vertexColors.push(new a.Color(C)), 0 !== n && S.vertexColors.push(new a.Color(C));
                            o.faces.push(E), o.faces.push(S)
                        } else {
                            if (_ = new a.Face3, _.a = R[u++], _.b = R[u++], _.c = R[u++], v && (d = R[u++], _.materialIndex = d), s = o.faces.length, g)
                                for (n = 0; U > n; n++)
                                    for (A = e.uvs[n], o.faceVertexUvs[n][s] = [], i = 0; 3 > i; i++) p = R[u++], L = A[2 * p], D = A[2 * p + 1], P = new a.Vector2(L, D), o.faceVertexUvs[n][s].push(P);
                            if (y && (l = 3 * R[u++], _.normal.set(k[l++], k[l++], k[l])), x)
                                for (n = 0; 3 > n; n++) l = 3 * R[u++], T = new a.Vector3(k[l++], k[l++], k[l]), _.vertexNormals.push(T);
                            if (b && (c = R[u++], _.color.setHex(N[c])), M)
                                for (n = 0; 3 > n; n++) c = R[u++], _.vertexColors.push(new a.Color(N[c]));
                            o.faces.push(_)
                        }
                }

                function n() {
                    var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex : 2;
                    if (e.skinWeights)
                        for (var r = 0, n = e.skinWeights.length; n > r; r += t) {
                            var i = e.skinWeights[r],
                                s = t > 1 ? e.skinWeights[r + 1] : 0,
                                u = t > 2 ? e.skinWeights[r + 2] : 0,
                                h = t > 3 ? e.skinWeights[r + 3] : 0;
                            o.skinWeights.push(new a.Vector4(i, s, u, h))
                        }
                    if (e.skinIndices)
                        for (var r = 0, n = e.skinIndices.length; n > r; r += t) {
                            var c = e.skinIndices[r],
                                l = t > 1 ? e.skinIndices[r + 1] : 0,
                                p = t > 2 ? e.skinIndices[r + 2] : 0,
                                d = t > 3 ? e.skinIndices[r + 3] : 0;
                            o.skinIndices.push(new a.Vector4(c, l, p, d))
                        }
                    o.bones = e.bones, o.bones && o.bones.length > 0 && (o.skinWeights.length !== o.skinIndices.length || o.skinIndices.length !== o.vertices.length) && console.warn("When skinning, number of vertices (" + o.vertices.length + "), skinIndices (" + o.skinIndices.length + "), and skinWeights (" + o.skinWeights.length + ") should match."), o.animation = e.animation, o.animations = e.animations
                }

                function i(t) {
                    if (void 0 !== e.morphTargets) {
                        var r, n, i, s, u, h;
                        for (r = 0, n = e.morphTargets.length; n > r; r++)
                            for (o.morphTargets[r] = {}, o.morphTargets[r].name = e.morphTargets[r].name, o.morphTargets[r].vertices = [], u = o.morphTargets[r].vertices, h = e.morphTargets[r].vertices, i = 0, s = h.length; s > i; i += 3) {
                                var c = new a.Vector3;
                                c.x = h[i] * t, c.y = h[i + 1] * t, c.z = h[i + 2] * t, u.push(c)
                            }
                    }
                    if (void 0 !== e.morphColors) {
                        var r, n, l, p, d, f, m;
                        for (r = 0, n = e.morphColors.length; n > r; r++)
                            for (o.morphColors[r] = {}, o.morphColors[r].name = e.morphColors[r].name, o.morphColors[r].colors = [], d = o.morphColors[r].colors, f = e.morphColors[r].colors, l = 0, p = f.length; p > l; l += 3) m = new a.Color(16755200), m.setRGB(f[l], f[l + 1], f[l + 2]), d.push(m)
                    }
                }
                var o = new a.Geometry,
                    s = void 0 !== e.scale ? 1 / e.scale : 1;
                if (r(s), n(), i(s), o.computeFaceNormals(), o.computeBoundingSphere(), void 0 === e.materials || 0 === e.materials.length) return {
                    geometry: o
                };
                var u = a.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin);
                return {
                    geometry: o,
                    materials: u
                }
            }
        }, a.LoadingManager = function(e, t, r) {
            var n = this,
                i = !1,
                o = 0,
                a = 0;
            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = r, this.itemStart = function(e) {
                a++, i === !1 && void 0 !== n.onStart && n.onStart(e, o, a), i = !0
            }, this.itemEnd = function(e) {
                o++, void 0 !== n.onProgress && n.onProgress(e, o, a), o === a && (i = !1, void 0 !== n.onLoad && n.onLoad())
            }, this.itemError = function(e) {
                void 0 !== n.onError && n.onError(e)
            }
        }, a.DefaultLoadingManager = new a.LoadingManager, a.BufferGeometryLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager
        }, a.BufferGeometryLoader.prototype = {
            constructor: a.BufferGeometryLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = new a.XHRLoader(i.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(e, function(e) {
                    t(i.parse(JSON.parse(e)))
                }, r, n)
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            },
            parse: function(e) {
                var t = new a.BufferGeometry,
                    r = e.data.index;
                if (void 0 !== r) {
                    var n = new o[r.type](r.array);
                    t.setIndex(new a.BufferAttribute(n, 1))
                }
                var i = e.data.attributes;
                for (var s in i) {
                    var u = i[s],
                        n = new o[u.type](u.array);
                    t.addAttribute(s, new a.BufferAttribute(n, u.itemSize))
                }
                var h = e.data.groups || e.data.drawcalls || e.data.offsets;
                if (void 0 !== h)
                    for (var c = 0, l = h.length; c !== l; ++c) {
                        var p = h[c];
                        t.addGroup(p.start, p.count)
                    }
                var d = e.data.boundingSphere;
                if (void 0 !== d) {
                    var f = new a.Vector3;
                    void 0 !== d.center && f.fromArray(d.center), t.boundingSphere = new a.Sphere(f, d.radius)
                }
                return t
            }
        }, a.MaterialLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager, this.textures = {}
        }, a.MaterialLoader.prototype = {
            constructor: a.MaterialLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = new a.XHRLoader(i.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(e, function(e) {
                    t(i.parse(JSON.parse(e)))
                }, r, n)
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            },
            setTextures: function(e) {
                this.textures = e
            },
            getTexture: function(e) {
                var t = this.textures;
                return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e), t[e]
            },
            parse: function(e) {
                var t = new a[e.type];
                if (t.uuid = e.uuid, void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader),
                    void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), e.normalScale && (t.normalScale = new a.Vector2(e.normalScale, e.normalScale)), void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = a.MultiplyOperation), e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials)
                    for (var r = 0, n = e.materials.length; n > r; r++) t.materials.push(this.parse(e.materials[r]));
                return t
            }
        }, a.ObjectLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager, this.texturePath = ""
        }, a.ObjectLoader.prototype = {
            constructor: a.ObjectLoader,
            load: function(e, t, r, n) {
                "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
                var i = this,
                    o = new a.XHRLoader(i.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(e, function(e) {
                    i.parse(JSON.parse(e), t)
                }, r, n)
            },
            setTexturePath: function(e) {
                this.texturePath = e
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            },
            parse: function(e, t) {
                var r = this.parseGeometries(e.geometries),
                    n = this.parseImages(e.images, function() {
                        void 0 !== t && t(a)
                    }),
                    i = this.parseTextures(e.textures, n),
                    o = this.parseMaterials(e.materials, i),
                    a = this.parseObject(e.object, r, o);
                return (void 0 === e.images || 0 === e.images.length) && void 0 !== t && t(a), a
            },
            parseGeometries: function(e) {
                var t = {};
                if (void 0 !== e)
                    for (var r = new a.JSONLoader, n = new a.BufferGeometryLoader, i = 0, o = e.length; o > i; i++) {
                        var s, u = e[i];
                        switch (u.type) {
                            case "PlaneGeometry":
                            case "PlaneBufferGeometry":
                                s = new a[u.type](u.width, u.height, u.widthSegments, u.heightSegments);
                                break;
                            case "BoxGeometry":
                            case "CubeGeometry":
                                s = new a.BoxGeometry(u.width, u.height, u.depth, u.widthSegments, u.heightSegments, u.depthSegments);
                                break;
                            case "CircleBufferGeometry":
                                s = new a.CircleBufferGeometry(u.radius, u.segments, u.thetaStart, u.thetaLength);
                                break;
                            case "CircleGeometry":
                                s = new a.CircleGeometry(u.radius, u.segments, u.thetaStart, u.thetaLength);
                                break;
                            case "CylinderGeometry":
                                s = new a.CylinderGeometry(u.radiusTop, u.radiusBottom, u.height, u.radialSegments, u.heightSegments, u.openEnded, u.thetaStart, u.thetaLength);
                                break;
                            case "SphereGeometry":
                                s = new a.SphereGeometry(u.radius, u.widthSegments, u.heightSegments, u.phiStart, u.phiLength, u.thetaStart, u.thetaLength);
                                break;
                            case "SphereBufferGeometry":
                                s = new a.SphereBufferGeometry(u.radius, u.widthSegments, u.heightSegments, u.phiStart, u.phiLength, u.thetaStart, u.thetaLength);
                                break;
                            case "DodecahedronGeometry":
                                s = new a.DodecahedronGeometry(u.radius, u.detail);
                                break;
                            case "IcosahedronGeometry":
                                s = new a.IcosahedronGeometry(u.radius, u.detail);
                                break;
                            case "OctahedronGeometry":
                                s = new a.OctahedronGeometry(u.radius, u.detail);
                                break;
                            case "TetrahedronGeometry":
                                s = new a.TetrahedronGeometry(u.radius, u.detail);
                                break;
                            case "RingGeometry":
                                s = new a.RingGeometry(u.innerRadius, u.outerRadius, u.thetaSegments, u.phiSegments, u.thetaStart, u.thetaLength);
                                break;
                            case "TorusGeometry":
                                s = new a.TorusGeometry(u.radius, u.tube, u.radialSegments, u.tubularSegments, u.arc);
                                break;
                            case "TorusKnotGeometry":
                                s = new a.TorusKnotGeometry(u.radius, u.tube, u.radialSegments, u.tubularSegments, u.p, u.q, u.heightScale);
                                break;
                            case "TextGeometry":
                                s = new a.TextGeometry(u.text, u.data);
                                break;
                            case "BufferGeometry":
                                s = n.parse(u);
                                break;
                            case "Geometry":
                                s = r.parse(u.data, this.texturePath).geometry;
                                break;
                            default:
                                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + u.type + '"');
                                continue
                        }
                        s.uuid = u.uuid, void 0 !== u.name && (s.name = u.name), t[u.uuid] = s
                    }
                return t
            },
            parseMaterials: function(e, t) {
                var r = {};
                if (void 0 !== e) {
                    var n = new a.MaterialLoader;
                    n.setTextures(t);
                    for (var i = 0, o = e.length; o > i; i++) {
                        var s = n.parse(e[i]);
                        r[s.uuid] = s
                    }
                }
                return r
            },
            parseImages: function(e, t) {
                function r(e) {
                    return n.manager.itemStart(e), s.load(e, function() {
                        n.manager.itemEnd(e)
                    })
                }
                var n = this,
                    i = {};
                if (void 0 !== e && e.length > 0) {
                    var o = new a.LoadingManager(t),
                        s = new a.ImageLoader(o);
                    s.setCrossOrigin(this.crossOrigin);
                    for (var u = 0, h = e.length; h > u; u++) {
                        var c = e[u],
                            l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(c.url) ? c.url : n.texturePath + c.url;
                        i[c.uuid] = r(l)
                    }
                }
                return i
            },
            parseTextures: function(e, t) {
                function r(e) {
                    return "number" == typeof e ? e : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), a[e])
                }
                var n = {};
                if (void 0 !== e)
                    for (var i = 0, o = e.length; o > i; i++) {
                        var s = e[i];
                        void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === t[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                        var u = new a.Texture(t[s.image]);
                        u.needsUpdate = !0, u.uuid = s.uuid, void 0 !== s.name && (u.name = s.name), void 0 !== s.mapping && (u.mapping = r(s.mapping)), void 0 !== s.offset && (u.offset = new a.Vector2(s.offset[0], s.offset[1])), void 0 !== s.repeat && (u.repeat = new a.Vector2(s.repeat[0], s.repeat[1])), void 0 !== s.minFilter && (u.minFilter = r(s.minFilter)), void 0 !== s.magFilter && (u.magFilter = r(s.magFilter)), void 0 !== s.anisotropy && (u.anisotropy = s.anisotropy), Array.isArray(s.wrap) && (u.wrapS = r(s.wrap[0]), u.wrapT = r(s.wrap[1])), n[s.uuid] = u
                    }
                return n
            },
            parseObject: function() {
                var e = new a.Matrix4;
                return function(t, r, n) {
                    var i, o = function(e) {
                            return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e), r[e]
                        },
                        s = function(e) {
                            return void 0 === n[e] && console.warn("THREE.ObjectLoader: Undefined material", e), n[e]
                        };
                    switch (t.type) {
                        case "Scene":
                            i = new a.Scene;
                            break;
                        case "PerspectiveCamera":
                            i = new a.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                            break;
                        case "OrthographicCamera":
                            i = new a.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                            break;
                        case "AmbientLight":
                            i = new a.AmbientLight(t.color);
                            break;
                        case "DirectionalLight":
                            i = new a.DirectionalLight(t.color, t.intensity);
                            break;
                        case "PointLight":
                            i = new a.PointLight(t.color, t.intensity, t.distance, t.decay);
                            break;
                        case "SpotLight":
                            i = new a.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay);
                            break;
                        case "HemisphereLight":
                            i = new a.HemisphereLight(t.color, t.groundColor, t.intensity);
                            break;
                        case "Mesh":
                            i = new a.Mesh(o(t.geometry), s(t.material));
                            break;
                        case "LOD":
                            i = new a.LOD;
                            break;
                        case "Line":
                            i = new a.Line(o(t.geometry), s(t.material), t.mode);
                            break;
                        case "PointCloud":
                        case "Points":
                            i = new a.Points(o(t.geometry), s(t.material));
                            break;
                        case "Sprite":
                            i = new a.Sprite(s(t.material));
                            break;
                        case "Group":
                            i = new a.Group;
                            break;
                        default:
                            i = new a.Object3D
                    }
                    if (i.uuid = t.uuid, void 0 !== t.name && (i.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(i.position, i.quaternion, i.scale)) : (void 0 !== t.position && i.position.fromArray(t.position), void 0 !== t.rotation && i.rotation.fromArray(t.rotation), void 0 !== t.scale && i.scale.fromArray(t.scale)), void 0 !== t.castShadow && (i.castShadow = t.castShadow), void 0 !== t.receiveShadow && (i.receiveShadow = t.receiveShadow), void 0 !== t.visible && (i.visible = t.visible), void 0 !== t.userData && (i.userData = t.userData), void 0 !== t.children)
                        for (var u in t.children) i.add(this.parseObject(t.children[u], r, n));
                    if ("LOD" === t.type)
                        for (var h = t.levels, c = 0; c < h.length; c++) {
                            var l = h[c],
                                u = i.getObjectByProperty("uuid", l.object);
                            void 0 !== u && i.addLevel(u, l.distance)
                        }
                    return i
                }
            }()
        }, a.TextureLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager
        }, a.TextureLoader.prototype = {
            constructor: a.TextureLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = new a.ImageLoader(i.manager);
                o.setCrossOrigin(this.crossOrigin), o.load(e, function(e) {
                    var r = new a.Texture(e);
                    r.needsUpdate = !0, void 0 !== t && t(r)
                }, r, n)
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            }
        }, a.DataTextureLoader = a.BinaryTextureLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager, this._parser = null
        }, a.BinaryTextureLoader.prototype = {
            constructor: a.BinaryTextureLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = new a.DataTexture,
                    s = new a.XHRLoader(this.manager);
                return s.setCrossOrigin(this.crossOrigin), s.setResponseType("arraybuffer"), s.load(e, function(e) {
                    var r = i._parser(e);
                    r && (void 0 !== r.image ? o.image = r.image : void 0 !== r.data && (o.image.width = r.width, o.image.height = r.height, o.image.data = r.data), o.wrapS = void 0 !== r.wrapS ? r.wrapS : a.ClampToEdgeWrapping, o.wrapT = void 0 !== r.wrapT ? r.wrapT : a.ClampToEdgeWrapping, o.magFilter = void 0 !== r.magFilter ? r.magFilter : a.LinearFilter, o.minFilter = void 0 !== r.minFilter ? r.minFilter : a.LinearMipMapLinearFilter, o.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, void 0 !== r.format && (o.format = r.format), void 0 !== r.type && (o.type = r.type), void 0 !== r.mipmaps && (o.mipmaps = r.mipmaps), 1 === r.mipmapCount && (o.minFilter = a.LinearFilter), o.needsUpdate = !0, t && t(o, r))
                }, r, n), o
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            }
        }, a.CompressedTextureLoader = function(e) {
            this.manager = void 0 !== e ? e : a.DefaultLoadingManager, this._parser = null
        }, a.CompressedTextureLoader.prototype = {
            constructor: a.CompressedTextureLoader,
            load: function(e, t, r, n) {
                var i = this,
                    o = [],
                    s = new a.CompressedTexture;
                s.image = o;
                var u = new a.XHRLoader(this.manager);
                if (u.setCrossOrigin(this.crossOrigin), u.setResponseType("arraybuffer"), Array.isArray(e))
                    for (var h = 0, c = function(c) {
                            u.load(e[c], function(e) {
                                var r = i._parser(e, !0);
                                o[c] = {
                                    width: r.width,
                                    height: r.height,
                                    format: r.format,
                                    mipmaps: r.mipmaps
                                }, h += 1, 6 === h && (1 === r.mipmapCount && (s.minFilter = a.LinearFilter), s.format = r.format, s.needsUpdate = !0, t && t(s))
                            }, r, n)
                        }, l = 0, p = e.length; p > l; ++l) c(l);
                else u.load(e, function(e) {
                    var r = i._parser(e, !0);
                    if (r.isCubemap)
                        for (var n = r.mipmaps.length / r.mipmapCount, u = 0; n > u; u++) {
                            o[u] = {
                                mipmaps: []
                            };
                            for (var h = 0; h < r.mipmapCount; h++) o[u].mipmaps.push(r.mipmaps[u * r.mipmapCount + h]), o[u].format = r.format, o[u].width = r.width, o[u].height = r.height
                        } else s.image.width = r.width, s.image.height = r.height, s.mipmaps = r.mipmaps;
                    1 === r.mipmapCount && (s.minFilter = a.LinearFilter), s.format = r.format, s.needsUpdate = !0, t && t(s)
                }, r, n);
                return s
            },
            setCrossOrigin: function(e) {
                this.crossOrigin = e
            }
        }, a.Material = function() {
            Object.defineProperty(this, "id", {
                value: a.MaterialIdCount++
            }), this.uuid = a.Math.generateUUID(), this.name = "", this.type = "Material", this.side = a.FrontSide, this.opacity = 1, this.transparent = !1, this.blending = a.NormalBlending, this.blendSrc = a.SrcAlphaFactor, this.blendDst = a.OneMinusSrcAlphaFactor, this.blendEquation = a.AddEquation, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = a.LessEqualDepth, this.depthTest = !0, this.depthWrite = !0, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.overdraw = 0, this.visible = !0, this._needsUpdate = !0
        }, a.Material.prototype = {
            constructor: a.Material,
            get needsUpdate() {
                return this._needsUpdate
            },
            set needsUpdate(e) {
                e === !0 && this.update(), this._needsUpdate = e
            },
            setValues: function(e) {
                if (void 0 !== e)
                    for (var t in e) {
                        var r = e[t];
                        if (void 0 !== r) {
                            var n = this[t];
                            void 0 !== n ? n instanceof a.Color ? n.set(r) : n instanceof a.Vector3 && r instanceof a.Vector3 ? n.copy(r) : "overdraw" === t ? this[t] = Number(r) : this[t] = r : console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.")
                        } else console.warn("THREE.Material: '" + t + "' parameter is undefined.")
                    }
            },
            toJSON: function(e) {
                var t = {
                    metadata: {
                        version: 4.4,
                        type: "Material",
                        generator: "Material.toJSON"
                    }
                };
                return t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), this.color instanceof a.Color && (t.color = this.color.getHex()), this.emissive instanceof a.Color && (t.emissive = this.emissive.getHex()), this.specular instanceof a.Color && (t.specular = this.specular.getHex()), void 0 !== this.shininess && (t.shininess = this.shininess), this.map instanceof a.Texture && (t.map = this.map.toJSON(e).uuid), this.alphaMap instanceof a.Texture && (t.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap instanceof a.Texture && (t.lightMap = this.lightMap.toJSON(e).uuid), this.bumpMap instanceof a.Texture && (t.bumpMap = this.bumpMap.toJSON(e).uuid, t.bumpScale = this.bumpScale), this.normalMap instanceof a.Texture && (t.normalMap = this.normalMap.toJSON(e).uuid, t.normalScale = this.normalScale), this.displacementMap instanceof a.Texture && (t.displacementMap = this.displacementMap.toJSON(e).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias), this.specularMap instanceof a.Texture && (t.specularMap = this.specularMap.toJSON(e).uuid), this.envMap instanceof a.Texture && (t.envMap = this.envMap.toJSON(e).uuid, t.reflectivity = this.reflectivity), void 0 !== this.size && (t.size = this.size), void 0 !== this.sizeAttenuation && (t.sizeAttenuation = this.sizeAttenuation), void 0 !== this.vertexColors && this.vertexColors !== a.NoColors && (t.vertexColors = this.vertexColors), void 0 !== this.shading && this.shading !== a.SmoothShading && (t.shading = this.shading), void 0 !== this.blending && this.blending !== a.NormalBlending && (t.blending = this.blending), void 0 !== this.side && this.side !== a.FrontSide && (t.side = this.side), this.opacity < 1 && (t.opacity = this.opacity), this.transparent === !0 && (t.transparent = this.transparent), this.alphaTest > 0 && (t.alphaTest = this.alphaTest), this.wireframe === !0 && (t.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (t.wireframeLinewidth = this.wireframeLinewidth), t
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.name = e.name, this.side = e.side, this.opacity = e.opacity, this.transparent = e.transparent, this.blending = e.blending, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.alphaTest = e.alphaTest, this.overdraw = e.overdraw, this.visible = e.visible, this
            },
            update: function() {
                this.dispatchEvent({
                    type: "update"
                })
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            get wrapAround() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set wrapAround(e) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            get wrapRGB() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."), new a.Color
            }
        }, a.EventDispatcher.prototype.apply(a.Material.prototype), a.MaterialIdCount = 0, a.LineBasicMaterial = function(e) {
            a.Material.call(this), this.type = "LineBasicMaterial", this.color = new a.Color(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.vertexColors = a.NoColors, this.fog = !0, this.setValues(e)
        }, a.LineBasicMaterial.prototype = Object.create(a.Material.prototype), a.LineBasicMaterial.prototype.constructor = a.LineBasicMaterial, a.LineBasicMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.vertexColors = e.vertexColors, this.fog = e.fog, this
        }, a.LineDashedMaterial = function(e) {
            a.Material.call(this), this.type = "LineDashedMaterial", this.color = new a.Color(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
        }, a.LineDashedMaterial.prototype = Object.create(a.Material.prototype), a.LineDashedMaterial.prototype.constructor = a.LineDashedMaterial, a.LineDashedMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.linewidth = e.linewidth, this.scale = e.scale, this.dashSize = e.dashSize, this.gapSize = e.gapSize, this.vertexColors = e.vertexColors, this.fog = e.fog, this
        }, a.MeshBasicMaterial = function(e) {
            a.Material.call(this), this.type = "MeshBasicMaterial", this.color = new a.Color(16777215), this.map = null, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = a.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = a.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.setValues(e)
        }, a.MeshBasicMaterial.prototype = Object.create(a.Material.prototype), a.MeshBasicMaterial.prototype.constructor = a.MeshBasicMaterial, a.MeshBasicMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this
        }, a.MeshLambertMaterial = function(e) {
            a.Material.call(this), this.type = "MeshLambertMaterial", this.color = new a.Color(16777215), this.emissive = new a.Color(0), this.map = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = a.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
        }, a.MeshLambertMaterial.prototype = Object.create(a.Material.prototype), a.MeshLambertMaterial.prototype.constructor = a.MeshLambertMaterial, a.MeshLambertMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.emissive.copy(e.emissive), this.map = e.map, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
        }, a.MeshPhongMaterial = function(e) {
            a.Material.call(this), this.type = "MeshPhongMaterial", this.color = new a.Color(16777215), this.emissive = new a.Color(0), this.specular = new a.Color(1118481), this.shininess = 30, this.metal = !1, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new a.Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = a.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = .98, this.fog = !0, this.shading = a.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
        }, a.MeshPhongMaterial.prototype = Object.create(a.Material.prototype), a.MeshPhongMaterial.prototype.constructor = a.MeshPhongMaterial, a.MeshPhongMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.emissive.copy(e.emissive), this.specular.copy(e.specular), this.shininess = e.shininess, this.metal = e.metal, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissiveMap = e.emissiveMap, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.fog = e.fog, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this
        }, a.MeshDepthMaterial = function(e) {
            a.Material.call(this), this.type = "MeshDepthMaterial", this.morphTargets = !1, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
        }, a.MeshDepthMaterial.prototype = Object.create(a.Material.prototype), a.MeshDepthMaterial.prototype.constructor = a.MeshDepthMaterial, a.MeshDepthMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        }, a.MeshNormalMaterial = function(e) {
            a.Material.call(this, e), this.type = "MeshNormalMaterial", this.wireframe = !1, this.wireframeLinewidth = 1, this.morphTargets = !1, this.setValues(e)
        }, a.MeshNormalMaterial.prototype = Object.create(a.Material.prototype), a.MeshNormalMaterial.prototype.constructor = a.MeshNormalMaterial, a.MeshNormalMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
        }, a.MultiMaterial = function(e) {
            this.uuid = a.Math.generateUUID(), this.type = "MultiMaterial", this.materials = e instanceof Array ? e : [], this.visible = !0
        }, a.MultiMaterial.prototype = {
            constructor: a.MultiMaterial,
            toJSON: function() {
                for (var e = {
                        metadata: {
                            version: 4.2,
                            type: "material",
                            generator: "MaterialExporter"
                        },
                        uuid: this.uuid,
                        type: this.type,
                        materials: []
                    }, t = 0, r = this.materials.length; r > t; t++) e.materials.push(this.materials[t].toJSON());
                return e.visible = this.visible, e
            },
            clone: function() {
                for (var e = new this.constructor, t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
                return e.visible = this.visible, e
            }
        }, a.MeshFaceMaterial = a.MultiMaterial, a.PointsMaterial = function(e) {
            a.Material.call(this), this.type = "PointsMaterial", this.color = new a.Color(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.vertexColors = a.NoColors, this.fog = !0, this.setValues(e)
        }, a.PointsMaterial.prototype = Object.create(a.Material.prototype), a.PointsMaterial.prototype.constructor = a.PointsMaterial, a.PointsMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.vertexColors = e.vertexColors, this.fog = e.fog, this
        }, a.PointCloudMaterial = function(e) {
            return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new a.PointsMaterial(e)
        }, a.ParticleBasicMaterial = function(e) {
            return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new a.PointsMaterial(e)
        }, a.ParticleSystemMaterial = function(e) {
            return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new a.PointsMaterial(e)
        }, a.ShaderMaterial = function(e) {
            a.Material.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.shading = a.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = a.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.derivatives = !1, this.defaultAttributeValues = {
                color: [1, 1, 1],
                uv: [0, 0],
                uv2: [0, 0]
            }, this.index0AttributeName = void 0, void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
        }, a.ShaderMaterial.prototype = Object.create(a.Material.prototype), a.ShaderMaterial.prototype.constructor = a.ShaderMaterial, a.ShaderMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = a.UniformsUtils.clone(e.uniforms), this.attributes = e.attributes, this.defines = e.defines, this.shading = e.shading, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.vertexColors = e.vertexColors, this.skinning = e.skinning, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.derivatives = e.derivatives, this
        }, a.ShaderMaterial.prototype.toJSON = function(e) {
            var t = a.Material.prototype.toJSON.call(this, e);
            return t.uniforms = this.uniforms, t.attributes = this.attributes, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
        }, a.RawShaderMaterial = function(e) {
            a.ShaderMaterial.call(this, e), this.type = "RawShaderMaterial"
        }, a.RawShaderMaterial.prototype = Object.create(a.ShaderMaterial.prototype), a.RawShaderMaterial.prototype.constructor = a.RawShaderMaterial, a.SpriteMaterial = function(e) {
            a.Material.call(this), this.type = "SpriteMaterial", this.color = new a.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.setValues(e)
        }, a.SpriteMaterial.prototype = Object.create(a.Material.prototype), a.SpriteMaterial.prototype.constructor = a.SpriteMaterial, a.SpriteMaterial.prototype.copy = function(e) {
            return a.Material.prototype.copy.call(this, e), this.color.copy(e.color), this.map = e.map, this.rotation = e.rotation, this.fog = e.fog, this
        }, a.Texture = function(e, t, r, n, i, o, s, u, h) {
            Object.defineProperty(this, "id", {
                value: a.TextureIdCount++
            }), this.uuid = a.Math.generateUUID(), this.name = "", this.sourceFile = "", this.image = void 0 !== e ? e : a.Texture.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== t ? t : a.Texture.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : a.ClampToEdgeWrapping, this.wrapT = void 0 !== n ? n : a.ClampToEdgeWrapping, this.magFilter = void 0 !== i ? i : a.LinearFilter, this.minFilter = void 0 !== o ? o : a.LinearMipMapLinearFilter, this.anisotropy = void 0 !== h ? h : 1, this.format = void 0 !== s ? s : a.RGBAFormat, this.type = void 0 !== u ? u : a.UnsignedByteType, this.offset = new a.Vector2(0, 0), this.repeat = new a.Vector2(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.version = 0, this.onUpdate = null
        }, a.Texture.DEFAULT_IMAGE = void 0, a.Texture.DEFAULT_MAPPING = a.UVMapping, a.Texture.prototype = {
            constructor: a.Texture,
            set needsUpdate(e) {
                e === !0 && this.version++
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.image = e.image, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this
            },
            toJSON: function(e) {
                function t(e) {
                    var t;
                    return void 0 !== e.toDataURL ? t = e : (t = document.createElement("canvas"), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(e, 0, 0, e.width, e.height)), t.width > 2048 || t.height > 2048 ? t.toDataURL("image/jpeg", .6) : t.toDataURL("image/png")
                }
                if (void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
                var r = {
                    metadata: {
                        version: 4.4,
                        type: "Texture",
                        generator: "Texture.toJSON"
                    },
                    uuid: this.uuid,
                    name: this.name,
                    mapping: this.mapping,
                    repeat: [this.repeat.x, this.repeat.y],
                    offset: [this.offset.x, this.offset.y],
                    wrap: [this.wrapS, this.wrapT],
                    minFilter: this.minFilter,
                    magFilter: this.magFilter,
                    anisotropy: this.anisotropy
                };
                if (void 0 !== this.image) {
                    var n = this.image;
                    void 0 === n.uuid && (n.uuid = a.Math.generateUUID()), void 0 === e.images[n.uuid] && (e.images[n.uuid] = {
                        uuid: n.uuid,
                        url: t(n)
                    }), r.image = n.uuid
                }
                return e.textures[this.uuid] = r, r
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            },
            transformUv: function(e) {
                if (this.mapping === a.UVMapping) {
                    if (e.multiply(this.repeat), e.add(this.offset), e.x < 0 || e.x > 1) switch (this.wrapS) {
                        case a.RepeatWrapping:
                            e.x = e.x - Math.floor(e.x);
                            break;
                        case a.ClampToEdgeWrapping:
                            e.x = e.x < 0 ? 0 : 1;
                            break;
                        case a.MirroredRepeatWrapping:
                            1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                    }
                    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                        case a.RepeatWrapping:
                            e.y = e.y - Math.floor(e.y);
                            break;
                        case a.ClampToEdgeWrapping:
                            e.y = e.y < 0 ? 0 : 1;
                            break;
                        case a.MirroredRepeatWrapping:
                            1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                    }
                    this.flipY && (e.y = 1 - e.y)
                }
            }
        }, a.EventDispatcher.prototype.apply(a.Texture.prototype), a.TextureIdCount = 0, a.CanvasTexture = function(e, t, r, n, i, o, s, u, h) {
            a.Texture.call(this, e, t, r, n, i, o, s, u, h), this.needsUpdate = !0
        }, a.CanvasTexture.prototype = Object.create(a.Texture.prototype), a.CanvasTexture.prototype.constructor = a.CanvasTexture, a.CubeTexture = function(e, t, r, n, i, o, s, u, h) {
            t = void 0 !== t ? t : a.CubeReflectionMapping, a.Texture.call(this, e, t, r, n, i, o, s, u, h), this.images = e, this.flipY = !1
        }, a.CubeTexture.prototype = Object.create(a.Texture.prototype), a.CubeTexture.prototype.constructor = a.CubeTexture, a.CubeTexture.prototype.copy = function(e) {
            return a.Texture.prototype.copy.call(this, e), this.images = e.images, this
        }, a.CompressedTexture = function(e, t, r, n, i, o, s, u, h, c, l) {
            a.Texture.call(this, null, o, s, u, h, c, n, i, l), this.image = {
                width: t,
                height: r
            }, this.mipmaps = e, this.flipY = !1, this.generateMipmaps = !1
        }, a.CompressedTexture.prototype = Object.create(a.Texture.prototype), a.CompressedTexture.prototype.constructor = a.CompressedTexture, a.DataTexture = function(e, t, r, n, i, o, s, u, h, c, l) {
            a.Texture.call(this, null, o, s, u, h, c, n, i, l), this.image = {
                data: e,
                width: t,
                height: r
            }, this.magFilter = void 0 !== h ? h : a.NearestFilter, this.minFilter = void 0 !== c ? c : a.NearestFilter, this.flipY = !1, this.generateMipmaps = !1
        }, a.DataTexture.prototype = Object.create(a.Texture.prototype), a.DataTexture.prototype.constructor = a.DataTexture, a.VideoTexture = function(e, t, r, n, i, o, s, u, h) {
            a.Texture.call(this, e, t, r, n, i, o, s, u, h), this.generateMipmaps = !1;
            var c = this,
                l = function() {
                    requestAnimationFrame(l), e.readyState === e.HAVE_ENOUGH_DATA && (c.needsUpdate = !0)
                };
            l()
        }, a.VideoTexture.prototype = Object.create(a.Texture.prototype), a.VideoTexture.prototype.constructor = a.VideoTexture, a.Group = function() {
            a.Object3D.call(this), this.type = "Group"
        }, a.Group.prototype = Object.create(a.Object3D.prototype), a.Group.prototype.constructor = a.Group, a.Points = function(e, t) {
            a.Object3D.call(this), this.type = "Points", this.geometry = void 0 !== e ? e : new a.Geometry, this.material = void 0 !== t ? t : new a.PointsMaterial({
                color: 16777215 * Math.random()
            })
        }, a.Points.prototype = Object.create(a.Object3D.prototype), a.Points.prototype.constructor = a.Points, a.Points.prototype.raycast = function() {
            var e = new a.Matrix4,
                t = new a.Ray;
            return function(r, n) {
                function i(e, i) {
                    var a = t.distanceSqToPoint(e);
                    if (c > a) {
                        var s = t.closestPointToPoint(e);
                        s.applyMatrix4(o.matrixWorld);
                        var u = r.ray.origin.distanceTo(s);
                        if (u < r.near || u > r.far) return;
                        n.push({
                            distance: u,
                            distanceToRay: Math.sqrt(a),
                            point: s.clone(),
                            index: i,
                            face: null,
                            object: o
                        })
                    }
                }
                var o = this,
                    s = o.geometry,
                    u = r.params.Points.threshold;
                if (e.getInverse(this.matrixWorld), t.copy(r.ray).applyMatrix4(e), null === s.boundingBox || t.isIntersectionBox(s.boundingBox) !== !1) {
                    var h = u / ((this.scale.x + this.scale.y + this.scale.z) / 3),
                        c = h * h,
                        l = new a.Vector3;
                    if (s instanceof a.BufferGeometry) {
                        var p = s.index,
                            d = s.attributes,
                            f = d.position.array;
                        if (null !== p)
                            for (var m = p.array, v = 0, g = m.length; g > v; v++) {
                                var y = m[v];
                                l.fromArray(f, 3 * y), i(l, y)
                            } else
                                for (var v = 0, x = f.length / 3; x > v; v++) l.fromArray(f, 3 * v), i(l, v)
                    } else
                        for (var b = s.vertices, v = 0, x = b.length; x > v; v++) i(b[v], v);
                }
            }
        }(), a.Points.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }, a.Points.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON()), void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON()), t.object.geometry = this.geometry.uuid, t.object.material = this.material.uuid, t
        }, a.PointCloud = function(e, t) {
            return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new a.Points(e, t)
        }, a.ParticleSystem = function(e, t) {
            return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new a.Points(e, t)
        }, a.Line = function(e, t, r) {
            return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new a.LineSegments(e, t)) : (a.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e : new a.Geometry, void(this.material = void 0 !== t ? t : new a.LineBasicMaterial({
                color: 16777215 * Math.random()
            })))
        }, a.Line.prototype = Object.create(a.Object3D.prototype), a.Line.prototype.constructor = a.Line, a.Line.prototype.raycast = function() {
            var e = new a.Matrix4,
                t = new a.Ray,
                r = new a.Sphere;
            return function(n, i) {
                var o = n.linePrecision,
                    s = o * o,
                    u = this.geometry;
                if (null === u.boundingSphere && u.computeBoundingSphere(), r.copy(u.boundingSphere), r.applyMatrix4(this.matrixWorld), n.ray.isIntersectionSphere(r) !== !1) {
                    e.getInverse(this.matrixWorld), t.copy(n.ray).applyMatrix4(e);
                    var h = new a.Vector3,
                        c = new a.Vector3,
                        l = new a.Vector3,
                        p = new a.Vector3,
                        d = this instanceof a.LineSegments ? 2 : 1;
                    if (u instanceof a.BufferGeometry) {
                        var f = u.index,
                            m = u.attributes;
                        if (null !== f)
                            for (var v = f.array, g = m.position.array, y = 0, x = v.length - 1; x > y; y += d) {
                                var b = v[y],
                                    M = v[y + 1];
                                h.fromArray(g, 3 * b), c.fromArray(g, 3 * M);
                                var w = t.distanceSqToSegment(h, c, p, l);
                                if (!(w > s)) {
                                    p.applyMatrix4(this.matrixWorld);
                                    var _ = n.ray.origin.distanceTo(p);
                                    _ < n.near || _ > n.far || i.push({
                                        distance: _,
                                        point: l.clone().applyMatrix4(this.matrixWorld),
                                        index: y,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            } else
                                for (var g = m.position.array, y = 0, x = g.length / 3 - 1; x > y; y += d) {
                                    h.fromArray(g, 3 * y), c.fromArray(g, 3 * y + 3);
                                    var w = t.distanceSqToSegment(h, c, p, l);
                                    if (!(w > s)) {
                                        p.applyMatrix4(this.matrixWorld);
                                        var _ = n.ray.origin.distanceTo(p);
                                        _ < n.near || _ > n.far || i.push({
                                            distance: _,
                                            point: l.clone().applyMatrix4(this.matrixWorld),
                                            index: y,
                                            face: null,
                                            faceIndex: null,
                                            object: this
                                        })
                                    }
                                }
                    } else if (u instanceof a.Geometry)
                        for (var E = u.vertices, S = E.length, y = 0; S - 1 > y; y += d) {
                            var w = t.distanceSqToSegment(E[y], E[y + 1], p, l);
                            if (!(w > s)) {
                                p.applyMatrix4(this.matrixWorld);
                                var _ = n.ray.origin.distanceTo(p);
                                _ < n.near || _ > n.far || i.push({
                                    distance: _,
                                    point: l.clone().applyMatrix4(this.matrixWorld),
                                    index: y,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(), a.Line.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }, a.Line.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON()), void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON()), t.object.geometry = this.geometry.uuid, t.object.material = this.material.uuid, t
        }, a.LineStrip = 0, a.LinePieces = 1, a.LineSegments = function(e, t) {
            a.Line.call(this, e, t), this.type = "LineSegments"
        }, a.LineSegments.prototype = Object.create(a.Line.prototype), a.LineSegments.prototype.constructor = a.LineSegments, a.Mesh = function(e, t) {
            a.Object3D.call(this), this.type = "Mesh", this.geometry = void 0 !== e ? e : new a.Geometry, this.material = void 0 !== t ? t : new a.MeshBasicMaterial({
                color: 16777215 * Math.random()
            }), this.updateMorphTargets()
        }, a.Mesh.prototype = Object.create(a.Object3D.prototype), a.Mesh.prototype.constructor = a.Mesh, a.Mesh.prototype.updateMorphTargets = function() {
            if (void 0 !== this.geometry.morphTargets && this.geometry.morphTargets.length > 0) {
                this.morphTargetBase = -1, this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                for (var e = 0, t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0), this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
            }
        }, a.Mesh.prototype.getMorphTargetIndexByName = function(e) {
            return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
        }, a.Mesh.prototype.raycast = function() {
            function e(e, t, r, n, i, o, s) {
                return a.Triangle.barycoordFromPoint(e, t, r, n, f), i.multiplyScalar(f.x), o.multiplyScalar(f.y), s.multiplyScalar(f.z), i.add(o).add(s), i.clone()
            }
            var t = new a.Matrix4,
                r = new a.Ray,
                n = new a.Sphere,
                i = new a.Vector3,
                o = new a.Vector3,
                s = new a.Vector3,
                u = new a.Vector3,
                h = new a.Vector3,
                c = new a.Vector3,
                l = new a.Vector2,
                p = new a.Vector2,
                d = new a.Vector2,
                f = new a.Vector3,
                m = new a.Vector3,
                v = new a.Vector3;
            return function(f, g) {
                var y = this.geometry,
                    x = this.material;
                if (void 0 !== x && (null === y.boundingSphere && y.computeBoundingSphere(), n.copy(y.boundingSphere), n.applyMatrix4(this.matrixWorld), f.ray.isIntersectionSphere(n) !== !1 && (t.getInverse(this.matrixWorld), r.copy(f.ray).applyMatrix4(t), null === y.boundingBox || r.isIntersectionBox(y.boundingBox) !== !1))) {
                    var b, M, w;
                    if (y instanceof a.BufferGeometry) {
                        var _ = y.index,
                            E = y.attributes;
                        if (null !== _)
                            for (var S = _.array, C = E.position.array, T = 0, A = S.length; A > T; T += 3) {
                                if (b = S[T], M = S[T + 1], w = S[T + 2], i.fromArray(C, 3 * b), o.fromArray(C, 3 * M), s.fromArray(C, 3 * w), x.side === a.BackSide) {
                                    if (null === r.intersectTriangle(s, o, i, !0, m)) continue
                                } else if (null === r.intersectTriangle(i, o, s, x.side !== a.DoubleSide, m)) continue;
                                v.copy(m), v.applyMatrix4(this.matrixWorld);
                                var P = f.ray.origin.distanceTo(v);
                                if (!(P < f.near || P > f.far)) {
                                    var L;
                                    if (void 0 !== E.uv) {
                                        var D = E.uv.array;
                                        l.fromArray(D, 2 * b), p.fromArray(D, 2 * M), d.fromArray(D, 2 * w), L = e(m, i, o, s, l, p, d)
                                    }
                                    g.push({
                                        distance: P,
                                        point: v.clone(),
                                        uv: L,
                                        face: new a.Face3(b, M, w, a.Triangle.normal(i, o, s)),
                                        faceIndex: Math.floor(T / 3),
                                        object: this
                                    })
                                }
                            } else
                                for (var C = E.position.array, T = 0, A = C.length; A > T; T += 9) {
                                    if (i.fromArray(C, T), o.fromArray(C, T + 3), s.fromArray(C, T + 6), x.side === a.BackSide) {
                                        if (null === r.intersectTriangle(s, o, i, !0, m)) continue
                                    } else if (null === r.intersectTriangle(i, o, s, x.side !== a.DoubleSide, m)) continue;
                                    v.copy(m), v.applyMatrix4(this.matrixWorld);
                                    var P = f.ray.origin.distanceTo(v);
                                    if (!(P < f.near || P > f.far)) {
                                        var L;
                                        if (void 0 !== E.uv) {
                                            var D = E.uv.array;
                                            l.fromArray(D, T), p.fromArray(D, T + 2), d.fromArray(D, T + 4), L = e(m, i, o, s, l, p, d)
                                        }
                                        b = T / 3, M = b + 1, w = b + 2, g.push({
                                            distance: P,
                                            point: v.clone(),
                                            uv: L,
                                            face: new a.Face3(b, M, w, a.Triangle.normal(i, o, s)),
                                            index: b,
                                            object: this
                                        })
                                    }
                                }
                    } else if (y instanceof a.Geometry)
                        for (var R = x instanceof a.MeshFaceMaterial, O = R === !0 ? x.materials : null, k = y.vertices, N = y.faces, U = 0, I = N.length; I > U; U++) {
                            var F = N[U],
                                B = R === !0 ? O[F.materialIndex] : x;
                            if (void 0 !== B) {
                                if (b = k[F.a], M = k[F.b], w = k[F.c], B.morphTargets === !0) {
                                    var V = y.morphTargets,
                                        G = this.morphTargetInfluences;
                                    i.set(0, 0, 0), o.set(0, 0, 0), s.set(0, 0, 0);
                                    for (var z = 0, H = V.length; H > z; z++) {
                                        var j = G[z];
                                        if (0 !== j) {
                                            var W = V[z].vertices;
                                            i.addScaledVector(u.subVectors(W[F.a], b), j), o.addScaledVector(h.subVectors(W[F.b], M), j), s.addScaledVector(c.subVectors(W[F.c], w), j)
                                        }
                                    }
                                    i.add(b), o.add(M), s.add(w), b = i, M = o, w = s
                                }
                                if (B.side === a.BackSide) {
                                    if (null === r.intersectTriangle(w, M, b, !0, m)) continue
                                } else if (null === r.intersectTriangle(b, M, w, B.side !== a.DoubleSide, m)) continue;
                                v.copy(m), v.applyMatrix4(this.matrixWorld);
                                var P = f.ray.origin.distanceTo(v);
                                if (!(P < f.near || P > f.far)) {
                                    var L;
                                    if (y.faceVertexUvs[0].length > 0) {
                                        var D = y.faceVertexUvs[0][U];
                                        l.copy(D[0]), p.copy(D[1]), d.copy(D[2]), L = e(m, b, M, w, l, p, d)
                                    }
                                    g.push({
                                        distance: P,
                                        point: v.clone(),
                                        uv: L,
                                        face: F,
                                        faceIndex: U,
                                        object: this
                                    })
                                }
                            }
                        }
                }
            }
        }(), a.Mesh.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }, a.Mesh.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), t.object.geometry = this.geometry.uuid, t.object.material = this.material.uuid, t
        }, a.Bone = function(e) {
            a.Object3D.call(this), this.type = "Bone", this.skin = e
        }, a.Bone.prototype = Object.create(a.Object3D.prototype), a.Bone.prototype.constructor = a.Bone, a.Bone.prototype.copy = function(e) {
            return a.Object3D.prototype.copy.call(this, e), this.skin = e.skin, this
        }, a.Skeleton = function(e, t, r) {
            if (this.useVertexTexture = void 0 !== r ? r : !0, this.identityMatrix = new a.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture) {
                var n = Math.sqrt(4 * this.bones.length);
                n = a.Math.nextPowerOfTwo(Math.ceil(n)), n = Math.max(n, 4), this.boneTextureWidth = n, this.boneTextureHeight = n, this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new a.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, a.RGBAFormat, a.FloatType)
            } else this.boneMatrices = new Float32Array(16 * this.bones.length);
            if (void 0 === t) this.calculateInverses();
            else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
            else {
                console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [];
                for (var i = 0, o = this.bones.length; o > i; i++) this.boneInverses.push(new a.Matrix4)
            }
        }, a.Skeleton.prototype.calculateInverses = function() {
            this.boneInverses = [];
            for (var e = 0, t = this.bones.length; t > e; e++) {
                var r = new a.Matrix4;
                this.bones[e] && r.getInverse(this.bones[e].matrixWorld), this.boneInverses.push(r)
            }
        }, a.Skeleton.prototype.pose = function() {
            for (var e, t = 0, r = this.bones.length; r > t; t++) e = this.bones[t], e && e.matrixWorld.getInverse(this.boneInverses[t]);
            for (var t = 0, r = this.bones.length; r > t; t++) e = this.bones[t], e && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
        }, a.Skeleton.prototype.update = function() {
            var e = new a.Matrix4;
            return function() {
                for (var t = 0, r = this.bones.length; r > t; t++) {
                    var n = this.bones[t] ? this.bones[t].matrixWorld : this.identityMatrix;
                    e.multiplyMatrices(n, this.boneInverses[t]), e.flattenToArrayOffset(this.boneMatrices, 16 * t)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(), a.Skeleton.prototype.clone = function() {
            return new a.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
        }, a.SkinnedMesh = function(e, t, r) {
            a.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new a.Matrix4, this.bindMatrixInverse = new a.Matrix4;
            var n = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                for (var i, o, s = 0, u = this.geometry.bones.length; u > s; ++s) o = this.geometry.bones[s], i = new a.Bone(this), n.push(i), i.name = o.name, i.position.fromArray(o.pos), i.quaternion.fromArray(o.rotq), void 0 !== o.scl && i.scale.fromArray(o.scl);
                for (var s = 0, u = this.geometry.bones.length; u > s; ++s) o = this.geometry.bones[s], -1 !== o.parent ? n[o.parent].add(n[s]) : this.add(n[s])
            }
            this.normalizeSkinWeights(), this.updateMatrixWorld(!0), this.bind(new a.Skeleton(n, void 0, r), this.matrixWorld)
        }, a.SkinnedMesh.prototype = Object.create(a.Mesh.prototype), a.SkinnedMesh.prototype.constructor = a.SkinnedMesh, a.SkinnedMesh.prototype.bind = function(e, t) {
            this.skeleton = e, void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.getInverse(t)
        }, a.SkinnedMesh.prototype.pose = function() {
            this.skeleton.pose()
        }, a.SkinnedMesh.prototype.normalizeSkinWeights = function() {
            if (this.geometry instanceof a.Geometry)
                for (var e = 0; e < this.geometry.skinIndices.length; e++) {
                    var t = this.geometry.skinWeights[e],
                        r = 1 / t.lengthManhattan();
                    r !== 1 / 0 ? t.multiplyScalar(r) : t.set(1)
                }
        }, a.SkinnedMesh.prototype.updateMatrixWorld = function(e) {
            a.Mesh.prototype.updateMatrixWorld.call(this, !0), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        }, a.SkinnedMesh.prototype.clone = function() {
            return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
        }, a.MorphAnimMesh = function(e, t) {
            a.Mesh.call(this, e, t), this.type = "MorphAnimMesh", this.duration = 1e3, this.mirroredLoop = !1, this.time = 0, this.lastKeyframe = 0, this.currentKeyframe = 0, this.direction = 1, this.directionBackwards = !1, this.setFrameRange(0, e.morphTargets.length - 1)
        }, a.MorphAnimMesh.prototype = Object.create(a.Mesh.prototype), a.MorphAnimMesh.prototype.constructor = a.MorphAnimMesh, a.MorphAnimMesh.prototype.setFrameRange = function(e, t) {
            this.startKeyframe = e, this.endKeyframe = t, this.length = this.endKeyframe - this.startKeyframe + 1
        }, a.MorphAnimMesh.prototype.setDirectionForward = function() {
            this.direction = 1, this.directionBackwards = !1
        }, a.MorphAnimMesh.prototype.setDirectionBackward = function() {
            this.direction = -1, this.directionBackwards = !0
        }, a.MorphAnimMesh.prototype.parseAnimations = function() {
            var e = this.geometry;
            e.animations || (e.animations = {});
            for (var t, r = e.animations, n = /([a-z]+)_?(\d+)/, i = 0, o = e.morphTargets.length; o > i; i++) {
                var a = e.morphTargets[i],
                    s = a.name.match(n);
                if (s && s.length > 1) {
                    var u = s[1];
                    r[u] || (r[u] = {
                        start: 1 / 0,
                        end: -(1 / 0)
                    });
                    var h = r[u];
                    i < h.start && (h.start = i), i > h.end && (h.end = i), t || (t = u)
                }
            }
            e.firstAnimation = t
        }, a.MorphAnimMesh.prototype.setAnimationLabel = function(e, t, r) {
            this.geometry.animations || (this.geometry.animations = {}), this.geometry.animations[e] = {
                start: t,
                end: r
            }
        }, a.MorphAnimMesh.prototype.playAnimation = function(e, t) {
            var r = this.geometry.animations[e];
            r ? (this.setFrameRange(r.start, r.end), this.duration = 1e3 * ((r.end - r.start) / t), this.time = 0) : console.warn("THREE.MorphAnimMesh: animation[" + e + "] undefined in .playAnimation()")
        }, a.MorphAnimMesh.prototype.updateAnimation = function(e) {
            var t = this.duration / this.length;
            this.time += this.direction * e, this.mirroredLoop ? (this.time > this.duration || this.time < 0) && (this.direction *= -1, this.time > this.duration && (this.time = this.duration, this.directionBackwards = !0), this.time < 0 && (this.time = 0, this.directionBackwards = !1)) : (this.time = this.time % this.duration, this.time < 0 && (this.time += this.duration));
            var r = this.startKeyframe + a.Math.clamp(Math.floor(this.time / t), 0, this.length - 1),
                n = this.morphTargetInfluences;
            r !== this.currentKeyframe && (n[this.lastKeyframe] = 0, n[this.currentKeyframe] = 1, n[r] = 0, this.lastKeyframe = this.currentKeyframe, this.currentKeyframe = r);
            var i = this.time % t / t;
            this.directionBackwards && (i = 1 - i), n[this.currentKeyframe] = i, n[this.lastKeyframe] = 1 - i
        }, a.MorphAnimMesh.prototype.interpolateTargets = function(e, t, r) {
            for (var n = this.morphTargetInfluences, i = 0, o = n.length; o > i; i++) n[i] = 0;
            e > -1 && (n[e] = 1 - r), t > -1 && (n[t] = r)
        }, a.MorphAnimMesh.prototype.copy = function(e) {
            return a.Mesh.prototype.copy.call(this, e), this.duration = e.duration, this.mirroredLoop = e.mirroredLoop, this.time = e.time, this.lastKeyframe = e.lastKeyframe, this.currentKeyframe = e.currentKeyframe, this.direction = e.direction, this.directionBackwards = e.directionBackwards, this
        }, a.LOD = function() {
            a.Object3D.call(this), this.type = "LOD", Object.defineProperties(this, {
                levels: {
                    enumerable: !0,
                    value: []
                },
                objects: {
                    get: function() {
                        return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
                    }
                }
            })
        }, a.LOD.prototype = Object.create(a.Object3D.prototype), a.LOD.prototype.constructor = a.LOD, a.LOD.prototype.addLevel = function(e, t) {
            void 0 === t && (t = 0), t = Math.abs(t);
            for (var r = this.levels, n = 0; n < r.length && !(t < r[n].distance); n++);
            r.splice(n, 0, {
                distance: t,
                object: e
            }), this.add(e)
        }, a.LOD.prototype.getObjectForDistance = function(e) {
            for (var t = this.levels, r = 1, n = t.length; n > r && !(e < t[r].distance); r++);
            return t[r - 1].object
        }, a.LOD.prototype.raycast = function() {
            var e = new a.Vector3;
            return function(t, r) {
                e.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.origin.distanceTo(e);
                this.getObjectForDistance(n).raycast(t, r)
            }
        }(), a.LOD.prototype.update = function() {
            var e = new a.Vector3,
                t = new a.Vector3;
            return function(r) {
                var n = this.levels;
                if (n.length > 1) {
                    e.setFromMatrixPosition(r.matrixWorld), t.setFromMatrixPosition(this.matrixWorld);
                    var i = e.distanceTo(t);
                    n[0].object.visible = !0;
                    for (var o = 1, a = n.length; a > o && i >= n[o].distance; o++) n[o - 1].object.visible = !1, n[o].object.visible = !0;
                    for (; a > o; o++) n[o].object.visible = !1
                }
            }
        }(), a.LOD.prototype.copy = function(e) {
            a.Object3D.prototype.copy.call(this, e, !1);
            for (var t = e.levels, r = 0, n = t.length; n > r; r++) {
                var i = t[r];
                this.addLevel(i.object.clone(), i.distance)
            }
            return this
        }, a.LOD.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            t.object.levels = [];
            for (var r = this.levels, n = 0, i = r.length; i > n; n++) {
                var o = r[n];
                t.object.levels.push({
                    object: o.object.uuid,
                    distance: o.distance
                })
            }
            return t
        }, a.Sprite = function() {
            var e = new Uint16Array([0, 1, 2, 0, 2, 3]),
                t = new Float32Array([-.5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
                r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
                n = new a.BufferGeometry;
            return n.setIndex(new a.BufferAttribute(e, 1)), n.addAttribute("position", new a.BufferAttribute(t, 3)), n.addAttribute("uv", new a.BufferAttribute(r, 2)),
                function(e) {
                    a.Object3D.call(this), this.type = "Sprite", this.geometry = n, this.material = void 0 !== e ? e : new a.SpriteMaterial
                }
        }(), a.Sprite.prototype = Object.create(a.Object3D.prototype), a.Sprite.prototype.constructor = a.Sprite, a.Sprite.prototype.raycast = function() {
            var e = new a.Vector3;
            return function(t, r) {
                e.setFromMatrixPosition(this.matrixWorld);
                var n = t.ray.distanceSqToPoint(e),
                    i = this.scale.x * this.scale.y;
                n > i || r.push({
                    distance: Math.sqrt(n),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(), a.Sprite.prototype.clone = function() {
            return new this.constructor(this.material).copy(this)
        }, a.Sprite.prototype.toJSON = function(e) {
            var t = a.Object3D.prototype.toJSON.call(this, e);
            return void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON()), t.object.material = this.material.uuid, t
        }, a.Particle = a.Sprite, a.LensFlare = function(e, t, r, n, i) {
            a.Object3D.call(this), this.lensFlares = [], this.positionScreen = new a.Vector3, this.customUpdateCallback = void 0, void 0 !== e && this.add(e, t, r, n, i)
        }, a.LensFlare.prototype = Object.create(a.Object3D.prototype), a.LensFlare.prototype.constructor = a.LensFlare, a.LensFlare.prototype.add = function(e, t, r, n, i, o) {
            void 0 === t && (t = -1), void 0 === r && (r = 0), void 0 === o && (o = 1), void 0 === i && (i = new a.Color(16777215)), void 0 === n && (n = a.NormalBlending), r = Math.min(r, Math.max(0, r)), this.lensFlares.push({
                texture: e,
                size: t,
                distance: r,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: o,
                color: i,
                blending: n
            })
        }, a.LensFlare.prototype.updateLensFlares = function() {
            var e, t, r = this.lensFlares.length,
                n = 2 * -this.positionScreen.x,
                i = 2 * -this.positionScreen.y;
            for (e = 0; r > e; e++) t = this.lensFlares[e], t.x = this.positionScreen.x + n * t.distance, t.y = this.positionScreen.y + i * t.distance, t.wantedRotation = t.x * Math.PI * .25, t.rotation += .25 * (t.wantedRotation - t.rotation)
        }, a.LensFlare.prototype.copy = function(e) {
            a.Object3D.prototype.copy.call(this, e), this.positionScreen.copy(e.positionScreen), this.customUpdateCallback = e.customUpdateCallback;
            for (var t = 0, r = e.lensFlares.length; r > t; t++) this.lensFlares.push(e.lensFlares[t]);
            return this
        }, a.Scene = function() {
            a.Object3D.call(this), this.type = "Scene", this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
        }, a.Scene.prototype = Object.create(a.Object3D.prototype), a.Scene.prototype.constructor = a.Scene, a.Scene.prototype.copy = function(e) {
            return a.Object3D.prototype.copy.call(this, e), null !== e.fog && (this.fog = e.fog.clone()), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.autoUpdate = e.autoUpdate, this.matrixAutoUpdate = e.matrixAutoUpdate, this
        }, a.Fog = function(e, t, r) {
            this.name = "", this.color = new a.Color(e), this.near = void 0 !== t ? t : 1, this.far = void 0 !== r ? r : 1e3
        }, a.Fog.prototype.clone = function() {
            return new a.Fog(this.color.getHex(), this.near, this.far)
        }, a.FogExp2 = function(e, t) {
            this.name = "", this.color = new a.Color(e), this.density = void 0 !== t ? t : 25e-5
        }, a.FogExp2.prototype.clone = function() {
            return new a.FogExp2(this.color.getHex(), this.density)
        }, a.ShaderChunk = {}, a.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n", a.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n", a.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n", a.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n	totalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n", a.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif", a.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n", a.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n", a.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n	// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;		// normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n", a.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif", a.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n", a.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif", a.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = color.xyz;\n\n#endif", a.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	float distance = dot( planeNormal, point - pointOnPlane );\n\n	return - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n	if ( decayExponent > 0.0 ) {\n\n	  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n	}\n\n	return 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n	// Original approximation by Christophe Schlick '94\n	//;float fresnel = pow( 1.0 - dotLH, 5.0 );\n\n	// Optimized variant (presented by Epic at SIGGRAPH '13)\n	float fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n	// geometry term is (n⋅l)(n⋅v) / 4(n⋅l)(n⋅v)\n\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n	// factor of 1/PI in distribution term omitted\n\n	return ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n	vec3 halfDir = normalize( lightDir + viewDir );\n\n	//float dotNL = saturate( dot( normal, lightDir ) );\n	//float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( lightDir, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n	#ifdef GAMMA_INPUT\n\n		return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n	#ifdef GAMMA_OUTPUT\n\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n", a.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n", a.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n", a.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n", a.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n	emissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n	totalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n", a.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n", a.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n", a.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n", a.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n", a.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 worldNormal = transformDirection( objectNormal, modelMatrix );\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n", a.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif", a.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif", a.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	totalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n", a.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif", a.ShaderChunk.lights_lambert_pars_vertex = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n", a.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		// attenuation\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n			// attenuation\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n			// diffuse\n\n			float dotProduct = dot( normal, lightDir );\n\n			vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			float hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n\nvLightFront += ambientLightColor;\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack += ambientLightColor;\n\n#endif\n",
        a.ShaderChunk.lights_phong_fragment = "#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\nvec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lightPosition = pointLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		// attenuation\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n		// diffuse\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n		// specular\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n			// attenuation\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n			// diffuse\n\n			float cosineTerm = saturate( dot( normal, lightDir ) );\n\n			totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n			// specular\n\n			vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n			totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n		// diffuse\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * cosineTerm;\n\n		// specular\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		// diffuse\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalDiffuseLight += lightColor;\n\n		// specular (sky term only)\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * max( dotProduct, 0.0 );\n\n	}\n\n#endif\n\n#ifdef METAL\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n\n#else\n\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n\n#endif\n", a.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n", a.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n", a.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif\n", a.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n", a.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif", a.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n#endif\n", a.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif", a.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif", a.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif\n", a.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif", a.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n", a.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n", a.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n", a.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif", a.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n#endif\n", a.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n	// Per-Pixel Tangent Space Normal Mapping\n	// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n", a.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n", a.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n	#ifdef SHADOWMAP_DEBUG\n\n		vec3 frustumColors[3];\n		frustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n		frustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n		frustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n	#endif\n\n	float fDepth;\n	vec3 shadowColor = vec3( 1.0 );\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n				// if ( something && something ) breaks ATI OpenGL shader compiler\n				// if ( all( something, something ) ) using this instead\n\n		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n		bool inFrustum = all( inFrustumVec );\n\n		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n		bool frustumTest = all( frustumTestVec );\n\n		if ( frustumTest ) {\n\n			shadowCoord.z += shadowBias[ i ];\n\n			#if defined( SHADOWMAP_TYPE_PCF )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n		/*\n						// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n						// must enroll loop manually\n\n				for ( float y = -1.25; y <= 1.25; y += 1.25 )\n					for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n						vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n								// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n								//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n						float fDepth = unpackDepth( rgbaDepth );\n\n						if ( fDepth < shadowCoord.z )\n							shadow += 1.0;\n\n				}\n\n				shadow /= 9.0;\n\n		*/\n\n				const float shadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.25 * xPixelOffset;\n				float dy0 = -1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n						// Percentage-close filtering\n						// (9 pixel kernel)\n						// http://fabiensanglard.net/shadowmappingPCF/\n\n				float shadow = 0.0;\n\n				float xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n				float yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n				float dx0 = -1.0 * xPixelOffset;\n				float dy0 = -1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n				shadowKernel[0] *= vec3(0.25);\n\n				shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n				shadowKernel[1] *= vec3(0.25);\n\n				shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n				shadowKernel[2] *= vec3(0.25);\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n				shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n				shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) );\n\n				shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n			#else\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n\n		// spot with multiple shadows is darker\n\n					shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n		// spot with multiple shadows has the same color as single shadow spot\n\n		// 					shadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n			#endif\n\n		}\n\n\n		#ifdef SHADOWMAP_DEBUG\n\n			if ( inFrustum ) outgoingLight *= frustumColors[ i ];\n\n		#endif\n\n	}\n\n	outgoingLight = outgoingLight * shadowColor;\n\n#endif\n", a.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n#endif", a.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif", a.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	for( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif", a.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif", a.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n", a.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n", a.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n", a.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif", a.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif", a.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	varying vec2 vUv2;\n\n#endif", a.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n\n#endif", a.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	vUv2 = uv2;\n\n#endif", a.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n\n#endif", a.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n", a.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif", a.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n	#endif\n\n#endif\n", a.UniformsUtils = {
            merge: function(e) {
                for (var t = {}, r = 0; r < e.length; r++) {
                    var n = this.clone(e[r]);
                    for (var i in n) t[i] = n[i]
                }
                return t
            },
            clone: function(e) {
                var t = {};
                for (var r in e) {
                    t[r] = {};
                    for (var n in e[r]) {
                        var i = e[r][n];
                        i instanceof a.Color || i instanceof a.Vector2 || i instanceof a.Vector3 || i instanceof a.Vector4 || i instanceof a.Matrix3 || i instanceof a.Matrix4 || i instanceof a.Texture ? t[r][n] = i.clone() : Array.isArray(i) ? t[r][n] = i.slice() : t[r][n] = i
                    }
                }
                return t
            }
        }, a.UniformsLib = {
            common: {
                diffuse: {
                    type: "c",
                    value: new a.Color(15658734)
                },
                opacity: {
                    type: "f",
                    value: 1
                },
                map: {
                    type: "t",
                    value: null
                },
                offsetRepeat: {
                    type: "v4",
                    value: new a.Vector4(0, 0, 1, 1)
                },
                specularMap: {
                    type: "t",
                    value: null
                },
                alphaMap: {
                    type: "t",
                    value: null
                },
                envMap: {
                    type: "t",
                    value: null
                },
                flipEnvMap: {
                    type: "f",
                    value: -1
                },
                reflectivity: {
                    type: "f",
                    value: 1
                },
                refractionRatio: {
                    type: "f",
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    type: "t",
                    value: null
                },
                aoMapIntensity: {
                    type: "f",
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    type: "t",
                    value: null
                },
                lightMapIntensity: {
                    type: "f",
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    type: "t",
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    type: "t",
                    value: null
                },
                bumpScale: {
                    type: "f",
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    type: "t",
                    value: null
                },
                normalScale: {
                    type: "v2",
                    value: new a.Vector2(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    type: "t",
                    value: null
                },
                displacementScale: {
                    type: "f",
                    value: 1
                },
                displacementBias: {
                    type: "f",
                    value: 0
                }
            },
            fog: {
                fogDensity: {
                    type: "f",
                    value: 25e-5
                },
                fogNear: {
                    type: "f",
                    value: 1
                },
                fogFar: {
                    type: "f",
                    value: 2e3
                },
                fogColor: {
                    type: "c",
                    value: new a.Color(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    type: "fv",
                    value: []
                },
                directionalLightDirection: {
                    type: "fv",
                    value: []
                },
                directionalLightColor: {
                    type: "fv",
                    value: []
                },
                hemisphereLightDirection: {
                    type: "fv",
                    value: []
                },
                hemisphereLightSkyColor: {
                    type: "fv",
                    value: []
                },
                hemisphereLightGroundColor: {
                    type: "fv",
                    value: []
                },
                pointLightColor: {
                    type: "fv",
                    value: []
                },
                pointLightPosition: {
                    type: "fv",
                    value: []
                },
                pointLightDistance: {
                    type: "fv1",
                    value: []
                },
                pointLightDecay: {
                    type: "fv1",
                    value: []
                },
                spotLightColor: {
                    type: "fv",
                    value: []
                },
                spotLightPosition: {
                    type: "fv",
                    value: []
                },
                spotLightDirection: {
                    type: "fv",
                    value: []
                },
                spotLightDistance: {
                    type: "fv1",
                    value: []
                },
                spotLightAngleCos: {
                    type: "fv1",
                    value: []
                },
                spotLightExponent: {
                    type: "fv1",
                    value: []
                },
                spotLightDecay: {
                    type: "fv1",
                    value: []
                }
            },
            points: {
                psColor: {
                    type: "c",
                    value: new a.Color(15658734)
                },
                opacity: {
                    type: "f",
                    value: 1
                },
                size: {
                    type: "f",
                    value: 1
                },
                scale: {
                    type: "f",
                    value: 1
                },
                map: {
                    type: "t",
                    value: null
                },
                offsetRepeat: {
                    type: "v4",
                    value: new a.Vector4(0, 0, 1, 1)
                },
                fogDensity: {
                    type: "f",
                    value: 25e-5
                },
                fogNear: {
                    type: "f",
                    value: 1
                },
                fogFar: {
                    type: "f",
                    value: 2e3
                },
                fogColor: {
                    type: "c",
                    value: new a.Color(16777215)
                }
            },
            shadowmap: {
                shadowMap: {
                    type: "tv",
                    value: []
                },
                shadowMapSize: {
                    type: "v2v",
                    value: []
                },
                shadowBias: {
                    type: "fv1",
                    value: []
                },
                shadowDarkness: {
                    type: "fv1",
                    value: []
                },
                shadowMatrix: {
                    type: "m4v",
                    value: []
                }
            }
        }, a.ShaderLib = {
            basic: {
                uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.aomap, a.UniformsLib.fog, a.UniformsLib.shadowmap]),
                vertexShader: [a.ShaderChunk.common, a.ShaderChunk.uv_pars_vertex, a.ShaderChunk.uv2_pars_vertex, a.ShaderChunk.envmap_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.uv_vertex, a.ShaderChunk.uv2_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", a.ShaderChunk.beginnormal_vertex, a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, "	#endif", a.ShaderChunk.begin_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.project_vertex, a.ShaderChunk.logdepthbuf_vertex, a.ShaderChunk.worldpos_vertex, a.ShaderChunk.envmap_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.uv_pars_fragment, a.ShaderChunk.uv2_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.alphamap_pars_fragment, a.ShaderChunk.aomap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = vec3( 1.0 );", a.ShaderChunk.logdepthbuf_fragment, a.ShaderChunk.map_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.alphamap_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, a.ShaderChunk.aomap_fragment, "	outgoingLight = diffuseColor.rgb * totalAmbientLight;", a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            lambert: {
                uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, a.UniformsLib.lights, a.UniformsLib.shadowmap, {
                    emissive: {
                        type: "c",
                        value: new a.Color(0)
                    }
                }]),
                vertexShader: ["#define LAMBERT", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", a.ShaderChunk.common, a.ShaderChunk.uv_pars_vertex, a.ShaderChunk.uv2_pars_vertex, a.ShaderChunk.envmap_pars_vertex, a.ShaderChunk.lights_lambert_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.uv_vertex, a.ShaderChunk.uv2_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.beginnormal_vertex, a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinbase_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, a.ShaderChunk.begin_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.project_vertex, a.ShaderChunk.logdepthbuf_vertex, a.ShaderChunk.worldpos_vertex, a.ShaderChunk.envmap_vertex, a.ShaderChunk.lights_lambert_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform float opacity;", "varying vec3 vLightFront;", "#ifdef DOUBLE_SIDED", "	varying vec3 vLightBack;", "#endif", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.uv_pars_fragment, a.ShaderChunk.uv2_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.alphamap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", a.ShaderChunk.logdepthbuf_fragment, a.ShaderChunk.map_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.alphamap_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, "	#ifdef DOUBLE_SIDED", "		if ( gl_FrontFacing )", "			outgoingLight += diffuseColor.rgb * vLightFront + emissive;", "		else", "			outgoingLight += diffuseColor.rgb * vLightBack + emissive;", "	#else", "		outgoingLight += diffuseColor.rgb * vLightFront + emissive;", "	#endif", a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            phong: {
                uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.aomap, a.UniformsLib.lightmap, a.UniformsLib.emissivemap, a.UniformsLib.bumpmap, a.UniformsLib.normalmap, a.UniformsLib.displacementmap, a.UniformsLib.fog, a.UniformsLib.lights, a.UniformsLib.shadowmap, {
                    emissive: {
                        type: "c",
                        value: new a.Color(0)
                    },
                    specular: {
                        type: "c",
                        value: new a.Color(1118481)
                    },
                    shininess: {
                        type: "f",
                        value: 30
                    }
                }]),
                vertexShader: ["#define PHONG", "varying vec3 vViewPosition;", "#ifndef FLAT_SHADED", "	varying vec3 vNormal;", "#endif", a.ShaderChunk.common, a.ShaderChunk.uv_pars_vertex, a.ShaderChunk.uv2_pars_vertex, a.ShaderChunk.displacementmap_pars_vertex, a.ShaderChunk.envmap_pars_vertex, a.ShaderChunk.lights_phong_pars_vertex, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.uv_vertex, a.ShaderChunk.uv2_vertex, a.ShaderChunk.color_vertex, a.ShaderChunk.beginnormal_vertex, a.ShaderChunk.morphnormal_vertex, a.ShaderChunk.skinbase_vertex, a.ShaderChunk.skinnormal_vertex, a.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED", "	vNormal = normalize( transformedNormal );", "#endif", a.ShaderChunk.begin_vertex, a.ShaderChunk.displacementmap_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.project_vertex, a.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = - mvPosition.xyz;", a.ShaderChunk.worldpos_vertex, a.ShaderChunk.envmap_vertex, a.ShaderChunk.lights_phong_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["#define PHONG", "uniform vec3 diffuse;", "uniform vec3 emissive;", "uniform vec3 specular;", "uniform float shininess;", "uniform float opacity;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.uv_pars_fragment, a.ShaderChunk.uv2_pars_fragment, a.ShaderChunk.map_pars_fragment, a.ShaderChunk.alphamap_pars_fragment, a.ShaderChunk.aomap_pars_fragment, a.ShaderChunk.lightmap_pars_fragment, a.ShaderChunk.emissivemap_pars_fragment, a.ShaderChunk.envmap_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.lights_phong_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.bumpmap_pars_fragment, a.ShaderChunk.normalmap_pars_fragment, a.ShaderChunk.specularmap_pars_fragment, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", "	vec3 totalAmbientLight = ambientLightColor;", "	vec3 totalEmissiveLight = emissive;", a.ShaderChunk.logdepthbuf_fragment, a.ShaderChunk.map_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.alphamap_fragment, a.ShaderChunk.alphatest_fragment, a.ShaderChunk.specularmap_fragment, a.ShaderChunk.lightmap_fragment, a.ShaderChunk.aomap_fragment, a.ShaderChunk.emissivemap_fragment, a.ShaderChunk.lights_phong_fragment, a.ShaderChunk.envmap_fragment, a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.linear_to_gamma_fragment, a.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            points: {
                uniforms: a.UniformsUtils.merge([a.UniformsLib.points, a.UniformsLib.shadowmap]),
                vertexShader: ["uniform float size;", "uniform float scale;", a.ShaderChunk.common, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.shadowmap_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.color_vertex, "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	#ifdef USE_SIZEATTENUATION", "		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );", "	#else", "		gl_PointSize = size;", "	#endif", "	gl_Position = projectionMatrix * mvPosition;", a.ShaderChunk.logdepthbuf_vertex, a.ShaderChunk.worldpos_vertex, a.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 psColor;", "uniform float opacity;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.map_particle_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.shadowmap_pars_fragment, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( psColor, opacity );", a.ShaderChunk.logdepthbuf_fragment, a.ShaderChunk.map_particle_fragment, a.ShaderChunk.color_fragment, a.ShaderChunk.alphatest_fragment, "	outgoingLight = diffuseColor.rgb;", a.ShaderChunk.shadowmap_fragment, a.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            dashed: {
                uniforms: a.UniformsUtils.merge([a.UniformsLib.common, a.UniformsLib.fog, {
                    scale: {
                        type: "f",
                        value: 1
                    },
                    dashSize: {
                        type: "f",
                        value: 1
                    },
                    totalSize: {
                        type: "f",
                        value: 2
                    }
                }]),
                vertexShader: ["uniform float scale;", "attribute float lineDistance;", "varying float vLineDistance;", a.ShaderChunk.common, a.ShaderChunk.color_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;", "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", "	gl_Position = projectionMatrix * mvPosition;", a.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform vec3 diffuse;", "uniform float opacity;", "uniform float dashSize;", "uniform float totalSize;", "varying float vLineDistance;", a.ShaderChunk.common, a.ShaderChunk.color_pars_fragment, a.ShaderChunk.fog_pars_fragment, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	if ( mod( vLineDistance, totalSize ) > dashSize ) {", "		discard;", "	}", "	vec3 outgoingLight = vec3( 0.0 );", "	vec4 diffuseColor = vec4( diffuse, opacity );", a.ShaderChunk.logdepthbuf_fragment, a.ShaderChunk.color_fragment, "	outgoingLight = diffuseColor.rgb;", a.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );", "}"].join("\n")
            },
            depth: {
                uniforms: {
                    mNear: {
                        type: "f",
                        value: 1
                    },
                    mFar: {
                        type: "f",
                        value: 2e3
                    },
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: [a.ShaderChunk.common, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.begin_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.project_vertex, a.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform float mNear;", "uniform float mFar;", "uniform float opacity;", a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", a.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		float depth = gl_FragDepthEXT / gl_FragCoord.w;", "	#else", "		float depth = gl_FragCoord.z / gl_FragCoord.w;", "	#endif", "	float color = 1.0 - smoothstep( mNear, mFar, depth );", "	gl_FragColor = vec4( vec3( color ), opacity );", "}"].join("\n")
            },
            normal: {
                uniforms: {
                    opacity: {
                        type: "f",
                        value: 1
                    }
                },
                vertexShader: ["varying vec3 vNormal;", a.ShaderChunk.common, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vNormal = normalize( normalMatrix * normal );", a.ShaderChunk.begin_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.project_vertex, a.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform float opacity;", "varying vec3 vNormal;", a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", a.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            cube: {
                uniforms: {
                    tCube: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: ["varying vec3 vWorldPosition;", a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", a.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform samplerCube tCube;", "uniform float tFlip;", "varying vec3 vWorldPosition;", a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", a.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        type: "t",
                        value: null
                    },
                    tFlip: {
                        type: "f",
                        value: -1
                    }
                },
                vertexShader: ["varying vec3 vWorldPosition;", a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", "	vWorldPosition = transformDirection( position, modelMatrix );", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", a.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: ["uniform sampler2D tEquirect;", "uniform float tFlip;", "varying vec3 vWorldPosition;", a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", "vec3 direction = normalize( vWorldPosition );", "vec2 sampleUV;", "sampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );", "sampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;", "gl_FragColor = texture2D( tEquirect, sampleUV );", a.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
            },
            depthRGBA: {
                uniforms: {},
                vertexShader: [a.ShaderChunk.common, a.ShaderChunk.morphtarget_pars_vertex, a.ShaderChunk.skinning_pars_vertex, a.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", a.ShaderChunk.skinbase_vertex, a.ShaderChunk.begin_vertex, a.ShaderChunk.morphtarget_vertex, a.ShaderChunk.skinning_vertex, a.ShaderChunk.project_vertex, a.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
                fragmentShader: [a.ShaderChunk.common, a.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {", "	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );", "	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );", "	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );", "	res -= res.xxyz * bit_mask;", "	return res;", "}", "void main() {", a.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT", "		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );", "	#else", "		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );", "	#endif", "}"].join("\n")
            }
        }, a.WebGLRenderer = function(e) {
            function t(e, t, r, n) {
                oe === !0 && (e *= n, t *= n, r *= n), ze.clearColor(e, t, r, n)
            }

            function r() {
                qe.init(), ze.viewport(Ae, Pe, Le, De), t(se.r, se.g, se.b, ue)
            }

            function n() {
                we = null, Ce = null, Se = "", Ee = -1, Fe = !0, qe.reset()
            }

            function i(e) {
                e.preventDefault(), n(), r(), Ye.clear()
            }

            function o(e) {
                var t = e.target;
                t.removeEventListener("dispose", o), h(t), Ve.textures--
            }

            function s(e) {
                var t = e.target;
                t.removeEventListener("dispose", s), c(t), Ve.textures--
            }

            function u(e) {
                var t = e.target;
                t.removeEventListener("dispose", u), l(t)
            }

            function h(e) {
                var t = Ye.get(e);
                if (e.image && t.__image__webglTextureCube) ze.deleteTexture(t.__image__webglTextureCube);
                else {
                    if (void 0 === t.__webglInit) return;
                    ze.deleteTexture(t.__webglTexture)
                }
                Ye["delete"](e)
            }

            function c(e) {
                var t = Ye.get(e);
                if (e && void 0 !== t.__webglTexture) {
                    if (ze.deleteTexture(t.__webglTexture), e instanceof a.WebGLRenderTargetCube)
                        for (var r = 0; 6 > r; r++) ze.deleteFramebuffer(t.__webglFramebuffer[r]), ze.deleteRenderbuffer(t.__webglRenderbuffer[r]);
                    else ze.deleteFramebuffer(t.__webglFramebuffer), ze.deleteRenderbuffer(t.__webglRenderbuffer);
                    Ye["delete"](e)
                }
            }

            function l(e) {
                p(e), Ye["delete"](e)
            }

            function p(e) {
                var t = Ye.get(e).program;
                e.program = void 0, void 0 !== t && Ze.releaseProgram(t)
            }

            function d(e, t, r, n) {
                var i;
                if (r instanceof a.InstancedBufferGeometry && (i = We.get("ANGLE_instanced_arrays"), null === i)) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                void 0 === n && (n = 0), qe.initAttributes();
                var o = r.attributes,
                    s = t.getAttributes(),
                    u = e.defaultAttributeValues;
                for (var h in s) {
                    var c = s[h];
                    if (c >= 0) {
                        var l = o[h];
                        if (void 0 !== l) {
                            qe.enableAttribute(c);
                            var p = l.itemSize,
                                d = Ke.getAttributeBuffer(l);
                            if (l instanceof a.InterleavedBufferAttribute) {
                                var f = l.data,
                                    m = f.stride,
                                    v = l.offset;
                                if (ze.bindBuffer(ze.ARRAY_BUFFER, d), ze.vertexAttribPointer(c, p, ze.FLOAT, !1, m * f.array.BYTES_PER_ELEMENT, (n * m + v) * f.array.BYTES_PER_ELEMENT), f instanceof a.InstancedInterleavedBuffer) {
                                    if (null === i) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");
                                    i.vertexAttribDivisorANGLE(c, f.meshPerAttribute), void 0 === r.maxInstancedCount && (r.maxInstancedCount = f.meshPerAttribute * f.count)
                                }
                            } else if (ze.bindBuffer(ze.ARRAY_BUFFER, d), ze.vertexAttribPointer(c, p, ze.FLOAT, !1, 0, n * p * 4), l instanceof a.InstancedBufferAttribute) {
                                if (null === i) return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferAttribute but hardware does not support extension ANGLE_instanced_arrays.");
                                i.vertexAttribDivisorANGLE(c, l.meshPerAttribute), void 0 === r.maxInstancedCount && (r.maxInstancedCount = l.meshPerAttribute * l.count)
                            }
                        } else if (void 0 !== u) {
                            var g = u[h];
                            if (void 0 !== g) switch (g.length) {
                                case 2:
                                    ze.vertexAttrib2fv(c, g);
                                    break;
                                case 3:
                                    ze.vertexAttrib3fv(c, g);
                                    break;
                                case 4:
                                    ze.vertexAttrib4fv(c, g);
                                    break;
                                default:
                                    ze.vertexAttrib1fv(c, g)
                            }
                        }
                    }
                }
                qe.disableUnusedAttributes()
            }

            function f(e, t) {
                return t[0] - e[0]
            }

            function m(e, t) {
                return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
            }

            function v(e, t) {
                return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
            }

            function g(e) {
                var t, r;
                e.material.transparent ? (t = ve, r = ++ge) : (t = fe, r = ++me), r < t.length ? t[r] = e : t.push(e)
            }

            function y(e, t, r, n, i) {
                var o, a;
                r.transparent ? (o = pe, a = ++de) : (o = ce, a = ++le);
                var s = o[a];
                void 0 !== s ? (s.id = e.id, s.object = e, s.geometry = t, s.material = r, s.z = Ue.z, s.group = i) : (s = {
                    id: e.id,
                    object: e,
                    geometry: t,
                    material: r,
                    z: Ue.z,
                    group: i
                }, o.push(s))
            }

            function x(e) {
                if (e.visible !== !1) {
                    if (e instanceof a.Light) he.push(e);
                    else if (e instanceof a.Sprite) xe.push(e);
                    else if (e instanceof a.LensFlare) be.push(e);
                    else if (e instanceof a.ImmediateRenderObject) g(e);
                    else if ((e instanceof a.Mesh || e instanceof a.Line || e instanceof a.Points) && (e instanceof a.SkinnedMesh && e.skeleton.update(), e.frustumCulled === !1 || ke.intersectsObject(e) === !0)) {
                        var t = e.material;
                        if (t.visible === !0) {
                            Me.sortObjects === !0 && (Ue.setFromMatrixPosition(e.matrixWorld), Ue.applyProjection(Ne));
                            var r = Ke.update(e);
                            if (t instanceof a.MeshFaceMaterial)
                                for (var n = r.groups, i = t.materials, o = 0, s = n.length; s > o; o++) {
                                    var u = n[o],
                                        h = i[u.materialIndex];
                                    h.visible === !0 && y(e, r, h, Ue.z, u)
                                } else y(e, r, t, Ue.z)
                        }
                    }
                    for (var c = e.children, o = 0, s = c.length; s > o; o++) x(c[o])
                }
            }

            function b(e, t, r, n, i) {
                for (var o = 0, a = e.length; a > o; o++) {
                    var s = e[o],
                        u = s.object,
                        h = s.geometry,
                        c = void 0 === i ? s.material : i,
                        l = s.group;
                    u.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, u.matrixWorld), u.normalMatrix.getNormalMatrix(u.modelViewMatrix), Me.renderBufferDirect(t, r, n, h, c, u, l)
                }
            }

            function M(e, t, r, n, i) {
                for (var o = i, a = 0, s = e.length; s > a; a++) {
                    var u = e[a];
                    u.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, u.matrixWorld), u.normalMatrix.getNormalMatrix(u.modelViewMatrix), void 0 === i && (o = u.material), _(o);
                    var h = S(t, r, n, o, u);
                    Se = "", u.render(function(e) {
                        Me.renderBufferImmediate(e, h, o)
                    })
                }
            }

            function w(e, t, r, n) {
                var i = Ye.get(e),
                    o = Ze.getParameters(e, t, r, n),
                    s = Ze.getProgramCode(e, o),
                    h = i.program,
                    c = !0;
                if (void 0 === h) e.addEventListener("dispose", u);
                else if (h.code !== s) p(e);
                else {
                    if (void 0 !== o.shaderID) return;
                    c = !1
                }
                if (c) {
                    if (o.shaderID) {
                        var l = a.ShaderLib[o.shaderID];
                        i.__webglShader = {
                            name: e.type,
                            uniforms: a.UniformsUtils.clone(l.uniforms),
                            vertexShader: l.vertexShader,
                            fragmentShader: l.fragmentShader
                        }
                    } else i.__webglShader = {
                        name: e.type,
                        uniforms: e.uniforms,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader
                    };
                    e.__webglShader = i.__webglShader, h = Ze.acquireProgram(e, o, s), i.program = h, e.program = h
                }
                var d = h.getAttributes();
                if (e.morphTargets) {
                    e.numSupportedMorphTargets = 0;
                    for (var f = 0; f < Me.maxMorphTargets; f++) d["morphTarget" + f] >= 0 && e.numSupportedMorphTargets++
                }
                if (e.morphNormals)
                    for (e.numSupportedMorphNormals = 0, f = 0; f < Me.maxMorphNormals; f++) d["morphNormal" + f] >= 0 && e.numSupportedMorphNormals++;
                i.uniformsList = [];
                var m = i.program.getUniforms();
                for (var v in i.__webglShader.uniforms) {
                    var g = m[v];
                    g && i.uniformsList.push([i.__webglShader.uniforms[v], g])
                }
            }

            function _(e) {
                E(e), e.transparent === !0 ? qe.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha) : qe.setBlending(a.NoBlending), qe.setDepthFunc(e.depthFunc), qe.setDepthTest(e.depthTest), qe.setDepthWrite(e.depthWrite), qe.setColorWrite(e.colorWrite), qe.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
            }

            function E(e) {
                e.side !== a.DoubleSide ? qe.enable(ze.CULL_FACE) : qe.disable(ze.CULL_FACE), qe.setFlipSided(e.side === a.BackSide)
            }

            function S(e, t, r, n, i) {
                Te = 0;
                var o = Ye.get(n);
                (n.needsUpdate || !o.program) && (w(n, t, r, i), n.needsUpdate = !1);
                var s = !1,
                    u = !1,
                    h = !1,
                    c = o.program,
                    l = c.getUniforms(),
                    p = o.__webglShader.uniforms;
                if (c.id !== we && (ze.useProgram(c.program), we = c.id, s = !0, u = !0, h = !0), n.id !== Ee && (-1 === Ee && (h = !0), Ee = n.id, u = !0), (s || e !== Ce) && (ze.uniformMatrix4fv(l.projectionMatrix, !1, e.projectionMatrix.elements), Xe.logarithmicDepthBuffer && ze.uniform1f(l.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== Ce && (Ce = e), (n instanceof a.ShaderMaterial || n instanceof a.MeshPhongMaterial || n.envMap) && void 0 !== l.cameraPosition && (Ue.setFromMatrixPosition(e.matrixWorld), ze.uniform3f(l.cameraPosition, Ue.x, Ue.y, Ue.z)), (n instanceof a.MeshPhongMaterial || n instanceof a.MeshLambertMaterial || n instanceof a.MeshBasicMaterial || n instanceof a.ShaderMaterial || n.skinning) && void 0 !== l.viewMatrix && ze.uniformMatrix4fv(l.viewMatrix, !1, e.matrixWorldInverse.elements)), n.skinning)
                    if (i.bindMatrix && void 0 !== l.bindMatrix && ze.uniformMatrix4fv(l.bindMatrix, !1, i.bindMatrix.elements), i.bindMatrixInverse && void 0 !== l.bindMatrixInverse && ze.uniformMatrix4fv(l.bindMatrixInverse, !1, i.bindMatrixInverse.elements), Xe.floatVertexTextures && i.skeleton && i.skeleton.useVertexTexture) {
                        if (void 0 !== l.boneTexture) {
                            var d = U();
                            ze.uniform1i(l.boneTexture, d), Me.setTexture(i.skeleton.boneTexture, d)
                        }
                        void 0 !== l.boneTextureWidth && ze.uniform1i(l.boneTextureWidth, i.skeleton.boneTextureWidth), void 0 !== l.boneTextureHeight && ze.uniform1i(l.boneTextureHeight, i.skeleton.boneTextureHeight)
                    } else i.skeleton && i.skeleton.boneMatrices && void 0 !== l.boneGlobalMatrices && ze.uniformMatrix4fv(l.boneGlobalMatrices, !1, i.skeleton.boneMatrices);
                return u && (r && n.fog && L(p, r), (n instanceof a.MeshPhongMaterial || n instanceof a.MeshLambertMaterial || n.lights) && (Fe && (h = !0, B(t, e), Fe = !1), h ? (R(p, Be), O(p, !0)) : O(p, !1)), (n instanceof a.MeshBasicMaterial || n instanceof a.MeshLambertMaterial || n instanceof a.MeshPhongMaterial) && C(p, n), n instanceof a.LineBasicMaterial ? T(p, n) : n instanceof a.LineDashedMaterial ? (T(p, n), A(p, n)) : n instanceof a.PointsMaterial ? P(p, n) : n instanceof a.MeshPhongMaterial ? D(p, n) : n instanceof a.MeshDepthMaterial ? (p.mNear.value = e.near, p.mFar.value = e.far, p.opacity.value = n.opacity) : n instanceof a.MeshNormalMaterial && (p.opacity.value = n.opacity), i.receiveShadow && !n._shadowPass && k(p, t), I(o.uniformsList)), N(l, i), void 0 !== l.modelMatrix && ze.uniformMatrix4fv(l.modelMatrix, !1, i.matrixWorld.elements), c
            }

            function C(e, t) {
                e.opacity.value = t.opacity, e.diffuse.value = t.color, t.emissive && (e.emissive.value = t.emissive), e.map.value = t.map, e.specularMap.value = t.specularMap, e.alphaMap.value = t.alphaMap, t.aoMap && (e.aoMap.value = t.aoMap, e.aoMapIntensity.value = t.aoMapIntensity);
                var r;
                if (t.map ? r = t.map : t.specularMap ? r = t.specularMap : t.displacementMap ? r = t.displacementMap : t.normalMap ? r = t.normalMap : t.bumpMap ? r = t.bumpMap : t.alphaMap ? r = t.alphaMap : t.emissiveMap && (r = t.emissiveMap), void 0 !== r) {
                    var n = r.offset,
                        i = r.repeat;
                    e.offsetRepeat.value.set(n.x, n.y, i.x, i.y)
                }
                e.envMap.value = t.envMap, e.flipEnvMap.value = t.envMap instanceof a.WebGLRenderTargetCube ? 1 : -1, e.reflectivity.value = t.reflectivity, e.refractionRatio.value = t.refractionRatio
            }

            function T(e, t) {
                e.diffuse.value = t.color, e.opacity.value = t.opacity
            }

            function A(e, t) {
                e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
            }

            function P(e, t) {
                if (e.psColor.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size, e.scale.value = Z.height / 2, e.map.value = t.map, null !== t.map) {
                    var r = t.map.offset,
                        n = t.map.repeat;
                    e.offsetRepeat.value.set(r.x, r.y, n.x, n.y)
                }
            }

            function L(e, t) {
                e.fogColor.value = t.color, t instanceof a.Fog ? (e.fogNear.value = t.near, e.fogFar.value = t.far) : t instanceof a.FogExp2 && (e.fogDensity.value = t.density)
            }

            function D(e, t) {
                e.specular.value = t.specular, e.shininess.value = t.shininess, t.lightMap && (e.lightMap.value = t.lightMap, e.lightMapIntensity.value = t.lightMapIntensity), t.emissiveMap && (e.emissiveMap.value = t.emissiveMap), t.bumpMap && (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale), t.normalMap && (e.normalMap.value = t.normalMap, e.normalScale.value.copy(t.normalScale)), t.displacementMap && (e.displacementMap.value = t.displacementMap, e.displacementScale.value = t.displacementScale, e.displacementBias.value = t.displacementBias)
            }

            function R(e, t) {
                e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.pointLightDecay.value = t.point.decays, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.spotLightDecay.value = t.spot.decays, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions
            }

            function O(e, t) {
                e.ambientLightColor.needsUpdate = t, e.directionalLightColor.needsUpdate = t, e.directionalLightDirection.needsUpdate = t, e.pointLightColor.needsUpdate = t, e.pointLightPosition.needsUpdate = t, e.pointLightDistance.needsUpdate = t, e.pointLightDecay.needsUpdate = t, e.spotLightColor.needsUpdate = t, e.spotLightPosition.needsUpdate = t, e.spotLightDistance.needsUpdate = t, e.spotLightDirection.needsUpdate = t, e.spotLightAngleCos.needsUpdate = t, e.spotLightExponent.needsUpdate = t, e.spotLightDecay.needsUpdate = t, e.hemisphereLightSkyColor.needsUpdate = t, e.hemisphereLightGroundColor.needsUpdate = t, e.hemisphereLightDirection.needsUpdate = t
            }

            function k(e, t) {
                if (e.shadowMatrix)
                    for (var r = 0, n = 0, i = t.length; i > n; n++) {
                        var o = t[n];
                        o.castShadow && (o instanceof a.SpotLight || o instanceof a.DirectionalLight) && (e.shadowMap.value[r] = o.shadowMap, e.shadowMapSize.value[r] = o.shadowMapSize, e.shadowMatrix.value[r] = o.shadowMatrix, e.shadowDarkness.value[r] = o.shadowDarkness, e.shadowBias.value[r] = o.shadowBias, r++)
                    }
            }

            function N(e, t) {
                ze.uniformMatrix4fv(e.modelViewMatrix, !1, t.modelViewMatrix.elements), e.normalMatrix && ze.uniformMatrix3fv(e.normalMatrix, !1, t.normalMatrix.elements)
            }

            function U() {
                var e = Te;
                return e >= Xe.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + Xe.maxTextures), Te += 1, e
            }

            function I(e) {
                for (var t, r, n = 0, i = e.length; i > n; n++) {
                    var o = e[n][0];
                    if (o.needsUpdate !== !1) {
                        var s = o.type,
                            u = o.value,
                            h = e[n][1];
                        switch (s) {
                            case "1i":
                                ze.uniform1i(h, u);
                                break;
                            case "1f":
                                ze.uniform1f(h, u);
                                break;
                            case "2f":
                                ze.uniform2f(h, u[0], u[1]);
                                break;
                            case "3f":
                                ze.uniform3f(h, u[0], u[1], u[2]);
                                break;
                            case "4f":
                                ze.uniform4f(h, u[0], u[1], u[2], u[3]);
                                break;
                            case "1iv":
                                ze.uniform1iv(h, u);
                                break;
                            case "3iv":
                                ze.uniform3iv(h, u);
                                break;
                            case "1fv":
                                ze.uniform1fv(h, u);
                                break;
                            case "2fv":
                                ze.uniform2fv(h, u);
                                break;
                            case "3fv":
                                ze.uniform3fv(h, u);
                                break;
                            case "4fv":
                                ze.uniform4fv(h, u);
                                break;
                            case "Matrix3fv":
                                ze.uniformMatrix3fv(h, !1, u);
                                break;
                            case "Matrix4fv":
                                ze.uniformMatrix4fv(h, !1, u);
                                break;
                            case "i":
                                ze.uniform1i(h, u);
                                break;
                            case "f":
                                ze.uniform1f(h, u);
                                break;
                            case "v2":
                                ze.uniform2f(h, u.x, u.y);
                                break;
                            case "v3":
                                ze.uniform3f(h, u.x, u.y, u.z);
                                break;
                            case "v4":
                                ze.uniform4f(h, u.x, u.y, u.z, u.w);
                                break;
                            case "c":
                                ze.uniform3f(h, u.r, u.g, u.b);
                                break;
                            case "iv1":
                                ze.uniform1iv(h, u);
                                break;
                            case "iv":
                                ze.uniform3iv(h, u);
                                break;
                            case "fv1":
                                ze.uniform1fv(h, u);
                                break;
                            case "fv":
                                ze.uniform3fv(h, u);
                                break;
                            case "v2v":
                                void 0 === o._array && (o._array = new Float32Array(2 * u.length));
                                for (var c = 0, l = 0, p = u.length; p > c; c++, l += 2) o._array[l + 0] = u[c].x, o._array[l + 1] = u[c].y;
                                ze.uniform2fv(h, o._array);
                                break;
                            case "v3v":
                                void 0 === o._array && (o._array = new Float32Array(3 * u.length));
                                for (var c = 0, d = 0, p = u.length; p > c; c++, d += 3) o._array[d + 0] = u[c].x, o._array[d + 1] = u[c].y, o._array[d + 2] = u[c].z;
                                ze.uniform3fv(h, o._array);
                                break;
                            case "v4v":
                                void 0 === o._array && (o._array = new Float32Array(4 * u.length));
                                for (var c = 0, f = 0, p = u.length; p > c; c++, f += 4) o._array[f + 0] = u[c].x, o._array[f + 1] = u[c].y, o._array[f + 2] = u[c].z, o._array[f + 3] = u[c].w;
                                ze.uniform4fv(h, o._array);
                                break;
                            case "m3":
                                ze.uniformMatrix3fv(h, !1, u.elements);
                                break;
                            case "m3v":
                                void 0 === o._array && (o._array = new Float32Array(9 * u.length));
                                for (var c = 0, p = u.length; p > c; c++) u[c].flattenToArrayOffset(o._array, 9 * c);
                                ze.uniformMatrix3fv(h, !1, o._array);
                                break;
                            case "m4":
                                ze.uniformMatrix4fv(h, !1, u.elements);
                                break;
                            case "m4v":
                                void 0 === o._array && (o._array = new Float32Array(16 * u.length));
                                for (var c = 0, p = u.length; p > c; c++) u[c].flattenToArrayOffset(o._array, 16 * c);
                                ze.uniformMatrix4fv(h, !1, o._array);
                                break;
                            case "t":
                                if (t = u, r = U(), ze.uniform1i(h, r), !t) continue;
                                t instanceof a.CubeTexture || Array.isArray(t.image) && 6 === t.image.length ? H(t, r) : t instanceof a.WebGLRenderTargetCube ? j(t, r) : Me.setTexture(t, r);
                                break;
                            case "tv":
                                void 0 === o._array && (o._array = []);
                                for (var c = 0, p = o.value.length; p > c; c++) o._array[c] = U();
                                ze.uniform1iv(h, o._array);
                                for (var c = 0, p = o.value.length; p > c; c++) t = o.value[c], r = o._array[c], t && Me.setTexture(t, r);
                                break;
                            default:
                                console.warn("THREE.WebGLRenderer: Unknown uniform type: " + s)
                        }
                    }
                }
            }

            function F(e, t, r, n) {
                e[t + 0] = r.r * n, e[t + 1] = r.g * n, e[t + 2] = r.b * n
            }

            function B(e, t) {
                var r, n, i, o, s, u, h, c, l = 0,
                    p = 0,
                    d = 0,
                    f = Be,
                    m = t.matrixWorldInverse,
                    v = f.directional.colors,
                    g = f.directional.positions,
                    y = f.point.colors,
                    x = f.point.positions,
                    b = f.point.distances,
                    M = f.point.decays,
                    w = f.spot.colors,
                    _ = f.spot.positions,
                    E = f.spot.distances,
                    S = f.spot.directions,
                    C = f.spot.anglesCos,
                    T = f.spot.exponents,
                    A = f.spot.decays,
                    P = f.hemi.skyColors,
                    L = f.hemi.groundColors,
                    D = f.hemi.positions,
                    R = 0,
                    O = 0,
                    k = 0,
                    N = 0,
                    U = 0,
                    I = 0,
                    B = 0,
                    V = 0,
                    G = 0,
                    z = 0,
                    H = 0,
                    j = 0;
                for (r = 0, n = e.length; n > r; r++)
                    if (i = e[r], !i.onlyShadow)
                        if (o = i.color, h = i.intensity, c = i.distance, i instanceof a.AmbientLight) {
                            if (!i.visible) continue;
                            l += o.r, p += o.g, d += o.b
                        } else if (i instanceof a.DirectionalLight) {
                    if (U += 1, !i.visible) continue;
                    Ie.setFromMatrixPosition(i.matrixWorld), Ue.setFromMatrixPosition(i.target.matrixWorld), Ie.sub(Ue), Ie.transformDirection(m), G = 3 * R, g[G + 0] = Ie.x, g[G + 1] = Ie.y, g[G + 2] = Ie.z, F(v, G, o, h), R += 1
                } else if (i instanceof a.PointLight) {
                    if (I += 1, !i.visible) continue;
                    z = 3 * O, F(y, z, o, h), Ue.setFromMatrixPosition(i.matrixWorld), Ue.applyMatrix4(m), x[z + 0] = Ue.x, x[z + 1] = Ue.y, x[z + 2] = Ue.z, b[O] = c, M[O] = 0 === i.distance ? 0 : i.decay, O += 1
                } else if (i instanceof a.SpotLight) {
                    if (B += 1, !i.visible) continue;
                    H = 3 * k, F(w, H, o, h), Ie.setFromMatrixPosition(i.matrixWorld), Ue.copy(Ie).applyMatrix4(m), _[H + 0] = Ue.x, _[H + 1] = Ue.y, _[H + 2] = Ue.z, E[k] = c, Ue.setFromMatrixPosition(i.target.matrixWorld), Ie.sub(Ue), Ie.transformDirection(m), S[H + 0] = Ie.x, S[H + 1] = Ie.y, S[H + 2] = Ie.z, C[k] = Math.cos(i.angle), T[k] = i.exponent, A[k] = 0 === i.distance ? 0 : i.decay, k += 1
                } else if (i instanceof a.HemisphereLight) {
                    if (V += 1, !i.visible) continue;
                    Ie.setFromMatrixPosition(i.matrixWorld), Ie.transformDirection(m), j = 3 * N, D[j + 0] = Ie.x, D[j + 1] = Ie.y, D[j + 2] = Ie.z, s = i.color, u = i.groundColor, F(P, j, s, h), F(L, j, u, h), N += 1
                }
                for (r = 3 * R, n = Math.max(v.length, 3 * U); n > r; r++) v[r] = 0;
                for (r = 3 * O, n = Math.max(y.length, 3 * I); n > r; r++) y[r] = 0;
                for (r = 3 * k, n = Math.max(w.length, 3 * B); n > r; r++) w[r] = 0;
                for (r = 3 * N, n = Math.max(P.length, 3 * V); n > r; r++) P[r] = 0;
                for (r = 3 * N, n = Math.max(L.length, 3 * V); n > r; r++) L[r] = 0;
                f.directional.length = R, f.point.length = O, f.spot.length = k, f.hemi.length = N, f.ambient[0] = l, f.ambient[1] = p, f.ambient[2] = d
            }

            function V(e, t, r) {
                var n;
                if (r ? (ze.texParameteri(e, ze.TEXTURE_WRAP_S, K(t.wrapS)), ze.texParameteri(e, ze.TEXTURE_WRAP_T, K(t.wrapT)), ze.texParameteri(e, ze.TEXTURE_MAG_FILTER, K(t.magFilter)), ze.texParameteri(e, ze.TEXTURE_MIN_FILTER, K(t.minFilter))) : (ze.texParameteri(e, ze.TEXTURE_WRAP_S, ze.CLAMP_TO_EDGE), ze.texParameteri(e, ze.TEXTURE_WRAP_T, ze.CLAMP_TO_EDGE), (t.wrapS !== a.ClampToEdgeWrapping || t.wrapT !== a.ClampToEdgeWrapping) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping. ( " + t.sourceFile + " )"), ze.texParameteri(e, ze.TEXTURE_MAG_FILTER, Y(t.magFilter)), ze.texParameteri(e, ze.TEXTURE_MIN_FILTER, Y(t.minFilter)), t.minFilter !== a.NearestFilter && t.minFilter !== a.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter. ( " + t.sourceFile + " )")), n = We.get("EXT_texture_filter_anisotropic")) {
                    if (t.type === a.FloatType && null === We.get("OES_texture_float_linear")) return;
                    if (t.type === a.HalfFloatType && null === We.get("OES_texture_half_float_linear")) return;
                    (t.anisotropy > 1 || Ye.get(t).__currentAnisotropy) && (ze.texParameterf(e, n.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Me.getMaxAnisotropy())), Ye.get(t).__currentAnisotropy = t.anisotropy)
                }
            }

            function G(e, t, r) {
                void 0 === e.__webglInit && (e.__webglInit = !0, t.__webglInit = !0, t.addEventListener("dispose", o), e.__webglTexture = ze.createTexture(), Ve.textures++), qe.activeTexture(ze.TEXTURE0 + r), qe.bindTexture(ze.TEXTURE_2D, e.__webglTexture), ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, t.flipY), ze.pixelStorei(ze.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), ze.pixelStorei(ze.UNPACK_ALIGNMENT, t.unpackAlignment), t.image = z(t.image, Xe.maxTextureSize);
                var n = t.image,
                    i = a.Math.isPowerOfTwo(n.width) && a.Math.isPowerOfTwo(n.height),
                    s = K(t.format),
                    u = K(t.type);
                V(ze.TEXTURE_2D, t, i);
                var h, c = t.mipmaps;
                if (t instanceof a.DataTexture)
                    if (c.length > 0 && i) {
                        for (var l = 0, p = c.length; p > l; l++) h = c[l], qe.texImage2D(ze.TEXTURE_2D, l, s, h.width, h.height, 0, s, u, h.data);
                        t.generateMipmaps = !1
                    } else qe.texImage2D(ze.TEXTURE_2D, 0, s, n.width, n.height, 0, s, u, n.data);
                else if (t instanceof a.CompressedTexture)
                    for (var l = 0, p = c.length; p > l; l++) h = c[l], t.format !== a.RGBAFormat && t.format !== a.RGBFormat ? qe.getCompressedTextureFormats().indexOf(s) > -1 ? qe.compressedTexImage2D(ze.TEXTURE_2D, l, s, h.width, h.height, 0, h.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe.texImage2D(ze.TEXTURE_2D, l, s, h.width, h.height, 0, s, u, h.data);
                else if (c.length > 0 && i) {
                    for (var l = 0, p = c.length; p > l; l++) h = c[l], qe.texImage2D(ze.TEXTURE_2D, l, s, s, u, h);
                    t.generateMipmaps = !1
                } else qe.texImage2D(ze.TEXTURE_2D, 0, s, s, u, t.image);
                t.generateMipmaps && i && ze.generateMipmap(ze.TEXTURE_2D), e.__version = t.version, t.onUpdate && t.onUpdate(t)
            }

            function z(e, t) {
                if (e.width > t || e.height > t) {
                    var r = t / Math.max(e.width, e.height),
                        n = document.createElement("canvas");
                    n.width = Math.floor(e.width * r), n.height = Math.floor(e.height * r);
                    var i = n.getContext("2d");
                    return i.drawImage(e, 0, 0, e.width, e.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + n.width + "x" + n.height, e), n
                }
                return e
            }

            function H(e, t) {
                var r = Ye.get(e);
                if (6 === e.image.length)
                    if (e.version > 0 && r.__version !== e.version) {
                        r.__image__webglTextureCube || (e.addEventListener("dispose", o), r.__image__webglTextureCube = ze.createTexture(), Ve.textures++), qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_CUBE_MAP, r.__image__webglTextureCube), ze.pixelStorei(ze.UNPACK_FLIP_Y_WEBGL, e.flipY);
                        for (var n = e instanceof a.CompressedTexture, i = e.image[0] instanceof a.DataTexture, s = [], u = 0; 6 > u; u++) !Me.autoScaleCubemaps || n || i ? s[u] = i ? e.image[u].image : e.image[u] : s[u] = z(e.image[u], Xe.maxCubemapSize);
                        var h = s[0],
                            c = a.Math.isPowerOfTwo(h.width) && a.Math.isPowerOfTwo(h.height),
                            l = K(e.format),
                            p = K(e.type);
                        V(ze.TEXTURE_CUBE_MAP, e, c);
                        for (var u = 0; 6 > u; u++)
                            if (n)
                                for (var d, f = s[u].mipmaps, m = 0, v = f.length; v > m; m++) d = f[m], e.format !== a.RGBAFormat && e.format !== a.RGBFormat ? qe.getCompressedTextureFormats().indexOf(l) > -1 ? qe.compressedTexImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + u, m, l, d.width, d.height, 0, d.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + u, m, l, d.width, d.height, 0, l, p, d.data);
                            else i ? qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + u, 0, l, s[u].width, s[u].height, 0, l, p, s[u].data) : qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + u, 0, l, l, p, s[u]);
                        e.generateMipmaps && c && ze.generateMipmap(ze.TEXTURE_CUBE_MAP), r.__version = e.version, e.onUpdate && e.onUpdate(e)
                    } else qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_CUBE_MAP, r.__image__webglTextureCube)
            }

            function j(e, t) {
                qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_CUBE_MAP, Ye.get(e).__webglTexture)
            }

            function W(e, t, r) {
                ze.bindFramebuffer(ze.FRAMEBUFFER, e), ze.framebufferTexture2D(ze.FRAMEBUFFER, ze.COLOR_ATTACHMENT0, r, Ye.get(t).__webglTexture, 0)
            }

            function X(e, t) {
                ze.bindRenderbuffer(ze.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (ze.renderbufferStorage(ze.RENDERBUFFER, ze.DEPTH_COMPONENT16, t.width, t.height), ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_ATTACHMENT, ze.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (ze.renderbufferStorage(ze.RENDERBUFFER, ze.DEPTH_STENCIL, t.width, t.height), ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_STENCIL_ATTACHMENT, ze.RENDERBUFFER, e)) : ze.renderbufferStorage(ze.RENDERBUFFER, ze.RGBA4, t.width, t.height)
            }

            function q(e) {
                e instanceof a.WebGLRenderTargetCube ? (qe.bindTexture(ze.TEXTURE_CUBE_MAP, Ye.get(e).__webglTexture), ze.generateMipmap(ze.TEXTURE_CUBE_MAP), qe.bindTexture(ze.TEXTURE_CUBE_MAP, null)) : (qe.bindTexture(ze.TEXTURE_2D, Ye.get(e).__webglTexture), ze.generateMipmap(ze.TEXTURE_2D), qe.bindTexture(ze.TEXTURE_2D, null))
            }

            function Y(e) {
                return e === a.NearestFilter || e === a.NearestMipMapNearestFilter || e === a.NearestMipMapLinearFilter ? ze.NEAREST : ze.LINEAR
            }

            function K(e) {
                var t;
                if (e === a.RepeatWrapping) return ze.REPEAT;
                if (e === a.ClampToEdgeWrapping) return ze.CLAMP_TO_EDGE;
                if (e === a.MirroredRepeatWrapping) return ze.MIRRORED_REPEAT;
                if (e === a.NearestFilter) return ze.NEAREST;
                if (e === a.NearestMipMapNearestFilter) return ze.NEAREST_MIPMAP_NEAREST;
                if (e === a.NearestMipMapLinearFilter) return ze.NEAREST_MIPMAP_LINEAR;
                if (e === a.LinearFilter) return ze.LINEAR;
                if (e === a.LinearMipMapNearestFilter) return ze.LINEAR_MIPMAP_NEAREST;
                if (e === a.LinearMipMapLinearFilter) return ze.LINEAR_MIPMAP_LINEAR;
                if (e === a.UnsignedByteType) return ze.UNSIGNED_BYTE;
                if (e === a.UnsignedShort4444Type) return ze.UNSIGNED_SHORT_4_4_4_4;
                if (e === a.UnsignedShort5551Type) return ze.UNSIGNED_SHORT_5_5_5_1;
                if (e === a.UnsignedShort565Type) return ze.UNSIGNED_SHORT_5_6_5;
                if (e === a.ByteType) return ze.BYTE;
                if (e === a.ShortType) return ze.SHORT;
                if (e === a.UnsignedShortType) return ze.UNSIGNED_SHORT;
                if (e === a.IntType) return ze.INT;
                if (e === a.UnsignedIntType) return ze.UNSIGNED_INT;
                if (e === a.FloatType) return ze.FLOAT;
                if (t = We.get("OES_texture_half_float"), null !== t && e === a.HalfFloatType) return t.HALF_FLOAT_OES;
                if (e === a.AlphaFormat) return ze.ALPHA;
                if (e === a.RGBFormat) return ze.RGB;
                if (e === a.RGBAFormat) return ze.RGBA;
                if (e === a.LuminanceFormat) return ze.LUMINANCE;
                if (e === a.LuminanceAlphaFormat) return ze.LUMINANCE_ALPHA;
                if (e === a.AddEquation) return ze.FUNC_ADD;
                if (e === a.SubtractEquation) return ze.FUNC_SUBTRACT;
                if (e === a.ReverseSubtractEquation) return ze.FUNC_REVERSE_SUBTRACT;
                if (e === a.ZeroFactor) return ze.ZERO;
                if (e === a.OneFactor) return ze.ONE;
                if (e === a.SrcColorFactor) return ze.SRC_COLOR;
                if (e === a.OneMinusSrcColorFactor) return ze.ONE_MINUS_SRC_COLOR;
                if (e === a.SrcAlphaFactor) return ze.SRC_ALPHA;
                if (e === a.OneMinusSrcAlphaFactor) return ze.ONE_MINUS_SRC_ALPHA;
                if (e === a.DstAlphaFactor) return ze.DST_ALPHA;
                if (e === a.OneMinusDstAlphaFactor) return ze.ONE_MINUS_DST_ALPHA;
                if (e === a.DstColorFactor) return ze.DST_COLOR;
                if (e === a.OneMinusDstColorFactor) return ze.ONE_MINUS_DST_COLOR;
                if (e === a.SrcAlphaSaturateFactor) return ze.SRC_ALPHA_SATURATE;
                if (t = We.get("WEBGL_compressed_texture_s3tc"), null !== t) {
                    if (e === a.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (e === a.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (e === a.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (e === a.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if (t = We.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
                    if (e === a.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (e === a.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (e === a.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (e === a.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (t = We.get("EXT_blend_minmax"), null !== t) {
                    if (e === a.MinEquation) return t.MIN_EXT;
                    if (e === a.MaxEquation) return t.MAX_EXT
                }
                return 0
            }
            console.log("THREE.WebGLRenderer", a.REVISION), e = e || {};
            var Z = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
                Q = void 0 !== e.context ? e.context : null,
                J = Z.width,
                $ = Z.height,
                ee = 1,
                te = void 0 !== e.alpha ? e.alpha : !1,
                re = void 0 !== e.depth ? e.depth : !0,
                ne = void 0 !== e.stencil ? e.stencil : !0,
                ie = void 0 !== e.antialias ? e.antialias : !1,
                oe = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha : !0,
                ae = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer : !1,
                se = new a.Color(0),
                ue = 0,
                he = [],
                ce = [],
                le = -1,
                pe = [],
                de = -1,
                fe = [],
                me = -1,
                ve = [],
                ge = -1,
                ye = new Float32Array(8),
                xe = [],
                be = [];
            this.domElement = Z, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.maxMorphTargets = 8, this.maxMorphNormals = 4, this.autoScaleCubemaps = !0;
            var Me = this,
                we = null,
                _e = null,
                Ee = -1,
                Se = "",
                Ce = null,
                Te = 0,
                Ae = 0,
                Pe = 0,
                Le = Z.width,
                De = Z.height,
                Re = 0,
                Oe = 0,
                ke = new a.Frustum,
                Ne = new a.Matrix4,
                Ue = new a.Vector3,
                Ie = new a.Vector3,
                Fe = !0,
                Be = {
                    ambient: [0, 0, 0],
                    directional: {
                        length: 0,
                        colors: [],
                        positions: []
                    },
                    point: {
                        length: 0,
                        colors: [],
                        positions: [],
                        distances: [],
                        decays: []
                    },
                    spot: {
                        length: 0,
                        colors: [],
                        positions: [],
                        distances: [],
                        directions: [],
                        anglesCos: [],
                        exponents: [],
                        decays: []
                    },
                    hemi: {
                        length: 0,
                        skyColors: [],
                        groundColors: [],
                        positions: []
                    }
                },
                Ve = {
                    geometries: 0,
                    textures: 0
                },
                Ge = {
                    calls: 0,
                    vertices: 0,
                    faces: 0,
                    points: 0
                };
            this.info = {
                render: Ge,
                memory: Ve,
                programs: null
            };
            var ze;
            try {
                var He = {
                    alpha: te,
                    depth: re,
                    stencil: ne,
                    antialias: ie,
                    premultipliedAlpha: oe,
                    preserveDrawingBuffer: ae
                };
                if (ze = Q || Z.getContext("webgl", He) || Z.getContext("experimental-webgl", He), null === ze) throw null !== Z.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
                Z.addEventListener("webglcontextlost", i, !1)
            } catch (je) {
                console.error("THREE.WebGLRenderer: " + je)
            }
            var We = new a.WebGLExtensions(ze);
            We.get("OES_texture_float"), We.get("OES_texture_float_linear"), We.get("OES_texture_half_float"), We.get("OES_texture_half_float_linear"), We.get("OES_standard_derivatives"), We.get("ANGLE_instanced_arrays"), We.get("OES_element_index_uint") && (a.BufferGeometry.MaxIndex = 4294967296);
            var Xe = new a.WebGLCapabilities(ze, We, e),
                qe = new a.WebGLState(ze, We, K),
                Ye = new a.WebGLProperties,
                Ke = new a.WebGLObjects(ze, Ye, this.info),
                Ze = new a.WebGLPrograms(this, Xe);
            this.info.programs = Ze.programs;
            var Qe = new a.WebGLBufferRenderer(ze, We, Ge),
                Je = new a.WebGLIndexedBufferRenderer(ze, We, Ge);
            r(), this.context = ze, this.capabilities = Xe, this.extensions = We, this.state = qe;
            var $e = new a.WebGLShadowMap(this, he, Ke);
            this.shadowMap = $e;
            var et = new a.SpritePlugin(this, xe),
                tt = new a.LensFlarePlugin(this, be);
            this.getContext = function() {
                return ze
            }, this.getContextAttributes = function() {
                return ze.getContextAttributes()
            }, this.forceContextLoss = function() {
                We.get("WEBGL_lose_context").loseContext()
            }, this.getMaxAnisotropy = function() {
                var e;
                return function() {
                    if (void 0 !== e) return e;
                    var t = We.get("EXT_texture_filter_anisotropic");
                    return e = null !== t ? ze.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                }
            }(), this.getPrecision = function() {
                return Xe.precision
            }, this.getPixelRatio = function() {
                return ee
            }, this.setPixelRatio = function(e) {
                void 0 !== e && (ee = e)
            }, this.getSize = function() {
                return {
                    width: J,
                    height: $
                }
            }, this.setSize = function(e, t, r) {
                J = e, $ = t, Z.width = e * ee, Z.height = t * ee, r !== !1 && (Z.style.width = e + "px", Z.style.height = t + "px"), this.setViewport(0, 0, e, t)
            }, this.setViewport = function(e, t, r, n) {
                Ae = e * ee, Pe = t * ee, Le = r * ee, De = n * ee, ze.viewport(Ae, Pe, Le, De)
            }, this.setScissor = function(e, t, r, n) {
                ze.scissor(e * ee, t * ee, r * ee, n * ee)
            }, this.enableScissorTest = function(e) {
                qe.setScissorTest(e)
            }, this.getClearColor = function() {
                return se
            }, this.setClearColor = function(e, r) {
                se.set(e), ue = void 0 !== r ? r : 1, t(se.r, se.g, se.b, ue)
            }, this.getClearAlpha = function() {
                return ue
            }, this.setClearAlpha = function(e) {
                ue = e, t(se.r, se.g, se.b, ue)
            }, this.clear = function(e, t, r) {
                var n = 0;
                (void 0 === e || e) && (n |= ze.COLOR_BUFFER_BIT), (void 0 === t || t) && (n |= ze.DEPTH_BUFFER_BIT), (void 0 === r || r) && (n |= ze.STENCIL_BUFFER_BIT), ze.clear(n)
            }, this.clearColor = function() {
                ze.clear(ze.COLOR_BUFFER_BIT)
            }, this.clearDepth = function() {
                ze.clear(ze.DEPTH_BUFFER_BIT)
            }, this.clearStencil = function() {
                ze.clear(ze.STENCIL_BUFFER_BIT)
            }, this.clearTarget = function(e, t, r, n) {
                this.setRenderTarget(e), this.clear(t, r, n)
            }, this.resetGLState = n, this.dispose = function() {
                Z.removeEventListener("webglcontextlost", i, !1)
            }, this.renderBufferImmediate = function(e, t, r) {
                qe.initAttributes();
                var n = Ye.get(e);
                e.hasPositions && !n.position && (n.position = ze.createBuffer()), e.hasNormals && !n.normal && (n.normal = ze.createBuffer()), e.hasUvs && !n.uv && (n.uv = ze.createBuffer()), e.hasColors && !n.color && (n.color = ze.createBuffer());
                var i = t.getAttributes();
                if (e.hasPositions && (ze.bindBuffer(ze.ARRAY_BUFFER, n.position), ze.bufferData(ze.ARRAY_BUFFER, e.positionArray, ze.DYNAMIC_DRAW), qe.enableAttribute(i.position), ze.vertexAttribPointer(i.position, 3, ze.FLOAT, !1, 0, 0)), e.hasNormals) {
                    if (ze.bindBuffer(ze.ARRAY_BUFFER, n.normal), "MeshPhongMaterial" !== r.type && r.shading === a.FlatShading)
                        for (var o = 0, s = 3 * e.count; s > o; o += 9) {
                            var u = e.normalArray,
                                h = (u[o + 0] + u[o + 3] + u[o + 6]) / 3,
                                c = (u[o + 1] + u[o + 4] + u[o + 7]) / 3,
                                l = (u[o + 2] + u[o + 5] + u[o + 8]) / 3;
                            u[o + 0] = h, u[o + 1] = c, u[o + 2] = l, u[o + 3] = h, u[o + 4] = c, u[o + 5] = l, u[o + 6] = h, u[o + 7] = c, u[o + 8] = l
                        }
                    ze.bufferData(ze.ARRAY_BUFFER, e.normalArray, ze.DYNAMIC_DRAW), qe.enableAttribute(i.normal), ze.vertexAttribPointer(i.normal, 3, ze.FLOAT, !1, 0, 0)
                }
                e.hasUvs && r.map && (ze.bindBuffer(ze.ARRAY_BUFFER, n.uv), ze.bufferData(ze.ARRAY_BUFFER, e.uvArray, ze.DYNAMIC_DRAW), qe.enableAttribute(i.uv), ze.vertexAttribPointer(i.uv, 2, ze.FLOAT, !1, 0, 0)), e.hasColors && r.vertexColors !== a.NoColors && (ze.bindBuffer(ze.ARRAY_BUFFER, n.color), ze.bufferData(ze.ARRAY_BUFFER, e.colorArray, ze.DYNAMIC_DRAW), qe.enableAttribute(i.color), ze.vertexAttribPointer(i.color, 3, ze.FLOAT, !1, 0, 0)), qe.disableUnusedAttributes(), ze.drawArrays(ze.TRIANGLES, 0, e.count), e.count = 0
            }, this.renderBufferDirect = function(e, t, r, n, i, o, s) {
                _(i);
                var u = S(e, t, r, i, o),
                    h = !1,
                    c = n.id + "_" + u.id + "_" + i.wireframe;
                c !== Se && (Se = c, h = !0);
                var l = o.morphTargetInfluences;
                if (void 0 !== l) {
                    for (var p = [], m = 0, v = l.length; v > m; m++) {
                        var g = l[m];
                        p.push([g, m])
                    }
                    p.sort(f), p.length > 8 && (p.length = 8);
                    for (var y = n.morphAttributes, m = 0, v = p.length; v > m; m++) {
                        var g = p[m];
                        if (ye[m] = g[0], 0 !== g[0]) {
                            var x = g[1];
                            i.morphTargets === !0 && y.position && n.addAttribute("morphTarget" + m, y.position[x]), i.morphNormals === !0 && y.normal && n.addAttribute("morphNormal" + m, y.normal[x])
                        } else i.morphTargets === !0 && n.removeAttribute("morphTarget" + m), i.morphNormals === !0 && n.removeAttribute("morphNormal" + m)
                    }
                    var b = u.getUniforms();
                    null !== b.morphTargetInfluences && ze.uniform1fv(b.morphTargetInfluences, ye), h = !0
                }
                var x = n.index,
                    M = n.attributes.position;
                i.wireframe === !0 && (x = Ke.getWireframeAttribute(n));
                var w;
                if (null !== x ? (w = Je, w.setIndex(x)) : w = Qe, h && (d(i, u, n), null !== x && ze.bindBuffer(ze.ELEMENT_ARRAY_BUFFER, Ke.getAttributeBuffer(x))), void 0 === s) {
                    var E;
                    E = null !== x ? x.count : M instanceof a.InterleavedBufferAttribute ? M.data.array.length / 3 : M.count;
                    var C = n.drawRange;
                    s = {
                        start: C.start,
                        count: Math.min(C.count, E)
                    }
                }
                if (o instanceof a.Mesh) i.wireframe === !0 ? (qe.setLineWidth(i.wireframeLinewidth * ee), w.setMode(ze.LINES)) : w.setMode(ze.TRIANGLES), n instanceof a.InstancedBufferGeometry && n.maxInstancedCount > 0 ? w.renderInstances(n) : w.render(s.start, s.count);
                else if (o instanceof a.Line) {
                    var T = i.linewidth;
                    void 0 === T && (T = 1), qe.setLineWidth(T * ee), o instanceof a.LineSegments ? w.setMode(ze.LINES) : w.setMode(ze.LINE_STRIP), w.render(s.start, s.count)
                } else o instanceof a.Points && (w.setMode(ze.POINTS), w.render(s.start, s.count))
            }, this.render = function(e, t, r, n) {
                if (t instanceof a.Camera == 0) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                var i = e.fog;
                if (Se = "", Ee = -1, Ce = null, Fe = !0, e.autoUpdate === !0 && e.updateMatrixWorld(), null === t.parent && t.updateMatrixWorld(), t.matrixWorldInverse.getInverse(t.matrixWorld), Ne.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), ke.setFromMatrix(Ne), he.length = 0, le = -1, de = -1, me = -1, ge = -1, xe.length = 0, be.length = 0, x(e), ce.length = le + 1, pe.length = de + 1, fe.length = me + 1, ve.length = ge + 1, Me.sortObjects === !0 && (ce.sort(m), pe.sort(v)), $e.render(e, t), Ge.calls = 0, Ge.vertices = 0, Ge.faces = 0, Ge.points = 0, this.setRenderTarget(r), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), e.overrideMaterial) {
                    var o = e.overrideMaterial;
                    b(ce, t, he, i, o), b(pe, t, he, i, o), M(fe, t, he, i, o), M(ve, t, he, i, o)
                } else qe.setBlending(a.NoBlending), b(ce, t, he, i), M(fe, t, he, i), b(pe, t, he, i), M(ve, t, he, i);
                et.render(e, t), tt.render(e, t, Re, Oe), r && r.generateMipmaps && r.minFilter !== a.NearestFilter && r.minFilter !== a.LinearFilter && q(r), qe.setDepthTest(!0), qe.setDepthWrite(!0), qe.setColorWrite(!0)
            }, this.setFaceCulling = function(e, t) {
                e === a.CullFaceNone ? qe.disable(ze.CULL_FACE) : (t === a.FrontFaceDirectionCW ? ze.frontFace(ze.CW) : ze.frontFace(ze.CCW), e === a.CullFaceBack ? ze.cullFace(ze.BACK) : e === a.CullFaceFront ? ze.cullFace(ze.FRONT) : ze.cullFace(ze.FRONT_AND_BACK), qe.enable(ze.CULL_FACE))
            }, this.setTexture = function(e, t) {
                var r = Ye.get(e);
                if (e.version > 0 && r.__version !== e.version) {
                    var n = e.image;
                    return void 0 === n ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e) : n.complete === !1 ? void console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e) : void G(r, e, t)
                }
                qe.activeTexture(ze.TEXTURE0 + t), qe.bindTexture(ze.TEXTURE_2D, r.__webglTexture)
            }, this.setRenderTarget = function(e) {
                var t = e instanceof a.WebGLRenderTargetCube;
                if (e && void 0 === Ye.get(e).__webglFramebuffer) {
                    var r = Ye.get(e);
                    void 0 === e.depthBuffer && (e.depthBuffer = !0), void 0 === e.stencilBuffer && (e.stencilBuffer = !0), e.addEventListener("dispose", s), r.__webglTexture = ze.createTexture(), Ve.textures++;
                    var n = a.Math.isPowerOfTwo(e.width) && a.Math.isPowerOfTwo(e.height),
                        i = K(e.format),
                        o = K(e.type);
                    if (t) {
                        r.__webglFramebuffer = [], r.__webglRenderbuffer = [], qe.bindTexture(ze.TEXTURE_CUBE_MAP, r.__webglTexture), V(ze.TEXTURE_CUBE_MAP, e, n);
                        for (var u = 0; 6 > u; u++) r.__webglFramebuffer[u] = ze.createFramebuffer(), r.__webglRenderbuffer[u] = ze.createRenderbuffer(), qe.texImage2D(ze.TEXTURE_CUBE_MAP_POSITIVE_X + u, 0, i, e.width, e.height, 0, i, o, null), W(r.__webglFramebuffer[u], e, ze.TEXTURE_CUBE_MAP_POSITIVE_X + u), X(r.__webglRenderbuffer[u], e);
                        e.generateMipmaps && n && ze.generateMipmap(ze.TEXTURE_CUBE_MAP)
                    } else r.__webglFramebuffer = ze.createFramebuffer(), e.shareDepthFrom ? r.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : r.__webglRenderbuffer = ze.createRenderbuffer(), qe.bindTexture(ze.TEXTURE_2D, r.__webglTexture), V(ze.TEXTURE_2D, e, n), qe.texImage2D(ze.TEXTURE_2D, 0, i, e.width, e.height, 0, i, o, null), W(r.__webglFramebuffer, e, ze.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_ATTACHMENT, ze.RENDERBUFFER, r.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && ze.framebufferRenderbuffer(ze.FRAMEBUFFER, ze.DEPTH_STENCIL_ATTACHMENT, ze.RENDERBUFFER, r.__webglRenderbuffer) : X(r.__webglRenderbuffer, e), e.generateMipmaps && n && ze.generateMipmap(ze.TEXTURE_2D);
                    t ? qe.bindTexture(ze.TEXTURE_CUBE_MAP, null) : qe.bindTexture(ze.TEXTURE_2D, null), ze.bindRenderbuffer(ze.RENDERBUFFER, null), ze.bindFramebuffer(ze.FRAMEBUFFER, null)
                }
                var h, c, l, p, d;
                if (e) {
                    var r = Ye.get(e);
                    h = t ? r.__webglFramebuffer[e.activeCubeFace] : r.__webglFramebuffer, c = e.width, l = e.height, p = 0, d = 0
                } else h = null, c = Le, l = De, p = Ae, d = Pe;
                h !== _e && (ze.bindFramebuffer(ze.FRAMEBUFFER, h), ze.viewport(p, d, c, l), _e = h), Re = c, Oe = l
            }, this.readRenderTargetPixels = function(e, t, r, n, i, o) {
                if (!(e instanceof a.WebGLRenderTarget)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                if (Ye.get(e).__webglFramebuffer) {
                    if (e.format !== a.RGBAFormat) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA format. readPixels can read only RGBA format.");
                    var s = !1;
                    Ye.get(e).__webglFramebuffer !== _e && (ze.bindFramebuffer(ze.FRAMEBUFFER, Ye.get(e).__webglFramebuffer), s = !0), ze.checkFramebufferStatus(ze.FRAMEBUFFER) === ze.FRAMEBUFFER_COMPLETE ? ze.readPixels(t, r, n, i, ze.RGBA, ze.UNSIGNED_BYTE, o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."), s && ze.bindFramebuffer(ze.FRAMEBUFFER, _e)
                }
            }, this.supportsFloatTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), We.get("OES_texture_float")
            }, this.supportsHalfFloatTextures = function() {
                return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), We.get("OES_texture_half_float")
            }, this.supportsStandardDerivatives = function() {
                return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), We.get("OES_standard_derivatives")
            }, this.supportsCompressedTextureS3TC = function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), We.get("WEBGL_compressed_texture_s3tc")
            }, this.supportsCompressedTexturePVRTC = function() {
                return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), We.get("WEBGL_compressed_texture_pvrtc")
            }, this.supportsBlendMinMax = function() {
                return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), We.get("EXT_blend_minmax")
            }, this.supportsVertexTextures = function() {
                return Xe.vertexTextures
            }, this.supportsInstancedArrays = function() {
                return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), We.get("ANGLE_instanced_arrays")
            }, this.initMaterial = function() {
                console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
            }, this.addPrePlugin = function() {
                console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
            }, this.addPostPlugin = function() {
                console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
            }, this.updateShadowMap = function() {
                console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
            }, Object.defineProperties(this, {
                shadowMapEnabled: {
                    get: function() {
                        return $e.enabled
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), $e.enabled = e
                    }
                },
                shadowMapType: {
                    get: function() {
                        return $e.type
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), $e.type = e
                    }
                },
                shadowMapCullFace: {
                    get: function() {
                        return $e.cullFace
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), $e.cullFace = e
                    }
                },
                shadowMapDebug: {
                    get: function() {
                        return $e.debug
                    },
                    set: function(e) {
                        console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug."), $e.debug = e
                    }
                }
            })
        }, a.WebGLRenderTarget = function(e, t, r) {
            this.uuid = a.Math.generateUUID(), this.width = e, this.height = t, r = r || {}, this.wrapS = void 0 !== r.wrapS ? r.wrapS : a.ClampToEdgeWrapping, this.wrapT = void 0 !== r.wrapT ? r.wrapT : a.ClampToEdgeWrapping, this.magFilter = void 0 !== r.magFilter ? r.magFilter : a.LinearFilter, this.minFilter = void 0 !== r.minFilter ? r.minFilter : a.LinearMipMapLinearFilter, this.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1, this.offset = new a.Vector2(0, 0), this.repeat = new a.Vector2(1, 1), this.format = void 0 !== r.format ? r.format : a.RGBAFormat, this.type = void 0 !== r.type ? r.type : a.UnsignedByteType, this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer : !0, this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom : null
        }, a.WebGLRenderTarget.prototype = {
            constructor: a.WebGLRenderTarget,
            setSize: function(e, t) {
                (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose())
            },
            clone: function() {
                return (new this.constructor).copy(this)
            },
            copy: function(e) {
                return this.width = e.width, this.height = e.height, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.format = e.format, this.type = e.type, this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.generateMipmaps = e.generateMipmaps, this.shareDepthFrom = e.shareDepthFrom, this
            },
            dispose: function() {
                this.dispatchEvent({
                    type: "dispose"
                })
            }
        }, a.EventDispatcher.prototype.apply(a.WebGLRenderTarget.prototype), a.WebGLRenderTargetCube = function(e, t, r) {
            a.WebGLRenderTarget.call(this, e, t, r), this.activeCubeFace = 0
        }, a.WebGLRenderTargetCube.prototype = Object.create(a.WebGLRenderTarget.prototype), a.WebGLRenderTargetCube.prototype.constructor = a.WebGLRenderTargetCube, a.WebGLBufferRenderer = function(e, t, r) {
            function n(e) {
                s = e
            }

            function i(t, n) {
                e.drawArrays(s, t, n), r.calls++, r.vertices += n, s === e.TRIANGLES && (r.faces += n / 3)
            }

            function o(e) {
                var r = t.get("ANGLE_instanced_arrays");
                if (null === r) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var n = e.attributes.position;
                n instanceof a.InterleavedBufferAttribute ? r.drawArraysInstancedANGLE(s, 0, n.data.count, e.maxInstancedCount) : r.drawArraysInstancedANGLE(s, 0, n.count, e.maxInstancedCount)
            }
            var s;
            this.setMode = n, this.render = i, this.renderInstances = o
        }, a.WebGLIndexedBufferRenderer = function(e, t, r) {
            function n(e) {
                s = e
            }

            function i(r) {
                r.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (u = e.UNSIGNED_INT, h = 4) : (u = e.UNSIGNED_SHORT, h = 2)
            }

            function o(t, n) {
                e.drawElements(s, n, u, t * h), r.calls++, r.vertices += n, s === e.TRIANGLES && (r.faces += n / 3)
            }

            function a(e) {
                var r = t.get("ANGLE_instanced_arrays");
                if (null === r) return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                var n = e.index;
                r.drawElementsInstancedANGLE(s, n.array.length, u, 0, e.maxInstancedCount)
            }
            var s, u, h;
            this.setMode = n, this.setIndex = i, this.render = o, this.renderInstances = a
        }, a.WebGLExtensions = function(e) {
            var t = {};
            this.get = function(r) {
                if (void 0 !== t[r]) return t[r];
                var n;
                switch (r) {
                    case "EXT_texture_filter_anisotropic":
                        n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                        break;
                    case "WEBGL_compressed_texture_s3tc":
                        n = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                        break;
                    case "WEBGL_compressed_texture_pvrtc":
                        n = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                        break;
                    default:
                        n = e.getExtension(r)
                }
                return null === n && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."), t[r] = n, n
            }
        }, a.WebGLCapabilities = function(e, t, r) {
            function n(t) {
                if ("highp" === t) {
                    if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
                    t = "mediump"
                }
                return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
            }
            this.getMaxPrecision = n, this.precision = void 0 !== r.precision ? r.precision : "highp", this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer ? r.logarithmicDepthBuffer : !1, this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE), this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS), this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), this.vertexTextures = this.maxVertexTextures > 0, this.floatFragmentTextures = !!t.get("OES_texture_float"), this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures;
            var i = n(this.precision);
            i !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", i, "instead."), this.precision = i), this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
        }, a.WebGLGeometries = function(e, t, r) {
            function n(e) {
                var t = e.geometry;
                if (void 0 !== c[t.id]) return c[t.id];
                t.addEventListener("dispose", i);
                var n;
                return t instanceof a.BufferGeometry ? n = t : t instanceof a.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new a.BufferGeometry).setFromObject(e)), n = t._bufferGeometry), c[t.id] = n, r.memory.geometries++, n
            }

            function i(e) {
                var n = e.target,
                    o = c[n.id];
                u(o.attributes), n.removeEventListener("dispose", i), delete c[n.id];
                var a = t.get(n);
                a.wireframe && s(a.wireframe), r.memory.geometries--
            }

            function o(e) {
                return e instanceof a.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            }

            function s(t) {
                var r = o(t);
                void 0 !== r && (e.deleteBuffer(r), h(t))
            }

            function u(e) {
                for (var t in e) s(e[t])
            }

            function h(e) {
                e instanceof a.InterleavedBufferAttribute ? t["delete"](e.data) : t["delete"](e)
            }
            var c = {};
            this.get = n
        }, a.WebGLObjects = function(e, t, r) {
            function n(t) {
                var r = l.get(t);
                t.geometry instanceof a.Geometry && r.updateFromObject(t);
                var n = r.index,
                    o = r.attributes;
                null !== n && i(n, e.ELEMENT_ARRAY_BUFFER);
                for (var s in o) i(o[s], e.ARRAY_BUFFER);
                var u = r.morphAttributes;
                for (var s in u)
                    for (var h = u[s], c = 0, p = h.length; p > c; c++) i(h[c], e.ARRAY_BUFFER);
                return r
            }

            function i(e, r) {
                var n = e instanceof a.InterleavedBufferAttribute ? e.data : e,
                    i = t.get(n);
                void 0 === i.__webglBuffer ? o(i, n, r) : i.version !== n.version && s(i, n, r)
            }

            function o(t, r, n) {
                t.__webglBuffer = e.createBuffer(), e.bindBuffer(n, t.__webglBuffer);
                var i = r.dynamic ? e.DYNAMIC_DRAW : e.STATIC_DRAW;
                e.bufferData(n, r.array, i), t.version = r.version
            }

            function s(t, r, n) {
                e.bindBuffer(n, t.__webglBuffer), r.dynamic === !1 || -1 === r.updateRange.count ? e.bufferSubData(n, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(n, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)), r.updateRange.count = 0), t.version = r.version
            }

            function u(e) {
                return e instanceof a.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer : t.get(e).__webglBuffer
            }

            function h(r) {
                var n = t.get(r);
                if (void 0 !== n.wireframe) return n.wireframe;
                var o = [],
                    s = r.index,
                    u = r.attributes,
                    h = u.position;
                if (null !== s)
                    for (var l = {}, p = s.array, d = 0, f = p.length; f > d; d += 3) {
                        var m = p[d + 0],
                            v = p[d + 1],
                            g = p[d + 2];
                        c(l, m, v) && o.push(m, v), c(l, v, g) && o.push(v, g), c(l, g, m) && o.push(g, m)
                    } else
                        for (var p = u.position.array, d = 0, f = p.length / 3 - 1; f > d; d += 3) {
                            var m = d + 0,
                                v = d + 1,
                                g = d + 2;
                            o.push(m, v, v, g, g, m)
                        }
                var y = h.count > 65535 ? Uint32Array : Uint16Array,
                    x = new a.BufferAttribute(new y(o), 1);
                return i(x, e.ELEMENT_ARRAY_BUFFER), n.wireframe = x, x
            }

            function c(e, t, r) {
                if (t > r) {
                    var n = t;
                    t = r, r = n
                }
                var i = e[t];
                return void 0 === i ? (e[t] = [r], !0) : -1 === i.indexOf(r) ? (i.push(r), !0) : !1
            }
            var l = new a.WebGLGeometries(e, t, r);
            this.getAttributeBuffer = u, this.getWireframeAttribute = h, this.update = n
        }, a.WebGLProgram = function() {
            function e(e) {
                var t = [];
                for (var r in e) {
                    var n = e[r];
                    n !== !1 && t.push("#define " + r + " " + n)
                }
                return t.join("\n")
            }

            function t(e, t, r) {
                for (var n = {}, i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), o = 0; i > o; o++) {
                    var a = e.getActiveUniform(t, o),
                        s = a.name,
                        u = e.getUniformLocation(t, s),
                        h = s.lastIndexOf("[0]"); - 1 !== h && h === s.length - 3 && (n[s.substr(0, h)] = u), n[s] = u
                }
                return n
            }

            function r(e, t, r) {
                for (var n = {}, i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES), o = 0; i > o; o++) {
                    var a = e.getActiveAttrib(t, o),
                        s = a.name;
                    n[s] = e.getAttribLocation(t, s)
                }
                return n
            }

            function n(e) {
                return "" !== e
            }
            var i = 0;
            return function(o, s, u, h) {
                var c = o.context,
                    l = u.defines,
                    p = u.__webglShader.vertexShader,
                    d = u.__webglShader.fragmentShader,
                    f = "SHADOWMAP_TYPE_BASIC";
                h.shadowMapType === a.PCFShadowMap ? f = "SHADOWMAP_TYPE_PCF" : h.shadowMapType === a.PCFSoftShadowMap && (f = "SHADOWMAP_TYPE_PCF_SOFT");
                var m = "ENVMAP_TYPE_CUBE",
                    v = "ENVMAP_MODE_REFLECTION",
                    g = "ENVMAP_BLENDING_MULTIPLY";
                if (h.envMap) {
                    switch (u.envMap.mapping) {
                        case a.CubeReflectionMapping:
                        case a.CubeRefractionMapping:
                            m = "ENVMAP_TYPE_CUBE";
                            break;
                        case a.EquirectangularReflectionMapping:
                        case a.EquirectangularRefractionMapping:
                            m = "ENVMAP_TYPE_EQUIREC";
                            break;
                        case a.SphericalReflectionMapping:
                            m = "ENVMAP_TYPE_SPHERE"
                    }
                    switch (u.envMap.mapping) {
                        case a.CubeRefractionMapping:
                        case a.EquirectangularRefractionMapping:
                            v = "ENVMAP_MODE_REFRACTION"
                    }
                    switch (u.combine) {
                        case a.MultiplyOperation:
                            g = "ENVMAP_BLENDING_MULTIPLY";
                            break;
                        case a.MixOperation:
                            g = "ENVMAP_BLENDING_MIX";
                            break;
                        case a.AddOperation:
                            g = "ENVMAP_BLENDING_ADD"
                    }
                }
                var y, x, b = o.gammaFactor > 0 ? o.gammaFactor : 1,
                    M = e(l),
                    w = c.createProgram();
                u instanceof a.RawShaderMaterial ? (y = "", x = "") : (y = ["precision " + h.precision + " float;", "precision " + h.precision + " int;", "#define SHADER_NAME " + u.__webglShader.name, M, h.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", o.gammaInput ? "#define GAMMA_INPUT" : "", o.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + b, "#define MAX_DIR_LIGHTS " + h.maxDirLights, "#define MAX_POINT_LIGHTS " + h.maxPointLights, "#define MAX_SPOT_LIGHTS " + h.maxSpotLights, "#define MAX_HEMI_LIGHTS " + h.maxHemiLights, "#define MAX_SHADOWS " + h.maxShadows, "#define MAX_BONES " + h.maxBones, h.map ? "#define USE_MAP" : "", h.envMap ? "#define USE_ENVMAP" : "", h.envMap ? "#define " + v : "", h.lightMap ? "#define USE_LIGHTMAP" : "", h.aoMap ? "#define USE_AOMAP" : "", h.emissiveMap ? "#define USE_EMISSIVEMAP" : "", h.bumpMap ? "#define USE_BUMPMAP" : "", h.normalMap ? "#define USE_NORMALMAP" : "", h.displacementMap && h.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", h.specularMap ? "#define USE_SPECULARMAP" : "", h.alphaMap ? "#define USE_ALPHAMAP" : "", h.vertexColors ? "#define USE_COLOR" : "", h.flatShading ? "#define FLAT_SHADED" : "", h.skinning ? "#define USE_SKINNING" : "", h.useVertexTexture ? "#define BONE_TEXTURE" : "", h.morphTargets ? "#define USE_MORPHTARGETS" : "", h.morphNormals && h.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", h.doubleSided ? "#define DOUBLE_SIDED" : "", h.flipSided ? "#define FLIP_SIDED" : "", h.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", h.shadowMapEnabled ? "#define " + f : "", h.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", h.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", h.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", h.logarithmicDepthBuffer && o.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(n).join("\n"), x = [h.bumpMap || h.normalMap || h.flatShading || u.derivatives ? "#extension GL_OES_standard_derivatives : enable" : "", h.logarithmicDepthBuffer && o.extensions.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", "precision " + h.precision + " float;", "precision " + h.precision + " int;", "#define SHADER_NAME " + u.__webglShader.name, M, "#define MAX_DIR_LIGHTS " + h.maxDirLights, "#define MAX_POINT_LIGHTS " + h.maxPointLights, "#define MAX_SPOT_LIGHTS " + h.maxSpotLights, "#define MAX_HEMI_LIGHTS " + h.maxHemiLights, "#define MAX_SHADOWS " + h.maxShadows, h.alphaTest ? "#define ALPHATEST " + h.alphaTest : "", o.gammaInput ? "#define GAMMA_INPUT" : "", o.gammaOutput ? "#define GAMMA_OUTPUT" : "", "#define GAMMA_FACTOR " + b, h.useFog && h.fog ? "#define USE_FOG" : "", h.useFog && h.fogExp ? "#define FOG_EXP2" : "", h.map ? "#define USE_MAP" : "", h.envMap ? "#define USE_ENVMAP" : "", h.envMap ? "#define " + m : "", h.envMap ? "#define " + v : "", h.envMap ? "#define " + g : "", h.lightMap ? "#define USE_LIGHTMAP" : "", h.aoMap ? "#define USE_AOMAP" : "", h.emissiveMap ? "#define USE_EMISSIVEMAP" : "", h.bumpMap ? "#define USE_BUMPMAP" : "", h.normalMap ? "#define USE_NORMALMAP" : "", h.specularMap ? "#define USE_SPECULARMAP" : "", h.alphaMap ? "#define USE_ALPHAMAP" : "", h.vertexColors ? "#define USE_COLOR" : "", h.flatShading ? "#define FLAT_SHADED" : "", h.metal ? "#define METAL" : "", h.doubleSided ? "#define DOUBLE_SIDED" : "", h.flipSided ? "#define FLIP_SIDED" : "", h.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", h.shadowMapEnabled ? "#define " + f : "", h.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "", h.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", h.logarithmicDepthBuffer && o.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "\n"].filter(n).join("\n"));
                var _ = y + p,
                    E = x + d,
                    S = a.WebGLShader(c, c.VERTEX_SHADER, _),
                    C = a.WebGLShader(c, c.FRAGMENT_SHADER, E);
                c.attachShader(w, S), c.attachShader(w, C), void 0 !== u.index0AttributeName ? c.bindAttribLocation(w, 0, u.index0AttributeName) : h.morphTargets === !0 && c.bindAttribLocation(w, 0, "position"), c.linkProgram(w);
                var T = c.getProgramInfoLog(w),
                    A = c.getShaderInfoLog(S),
                    P = c.getShaderInfoLog(C),
                    L = !0,
                    D = !0;
                c.getProgramParameter(w, c.LINK_STATUS) === !1 ? (L = !1, console.error("THREE.WebGLProgram: shader error: ", c.getError(), "gl.VALIDATE_STATUS", c.getProgramParameter(w, c.VALIDATE_STATUS), "gl.getProgramInfoLog", T, A, P)) : "" !== T ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", T) : ("" === A || "" === P) && (D = !1), D && (this.diagnostics = {
                    runnable: L,
                    material: u,
                    programLog: T,
                    vertexShader: {
                        log: A,
                        prefix: y
                    },
                    fragmentShader: {
                        log: P,
                        prefix: x
                    }
                }), c.deleteShader(S), c.deleteShader(C);
                var R;
                this.getUniforms = function() {
                    return void 0 === R && (R = t(c, w)), R
                };
                var O;
                return this.getAttributes = function() {
                    return void 0 === O && (O = r(c, w)), O
                }, this.destroy = function() {
                    c.deleteProgram(w), this.program = void 0
                }, Object.defineProperties(this, {
                    uniforms: {
                        get: function() {
                            return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                        }
                    },
                    attributes: {
                        get: function() {
                            return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                        }
                    }
                }), this.id = i++, this.code = s, this.usedTimes = 1, this.program = w, this.vertexShader = S, this.fragmentShader = C, this
            }
        }(), a.WebGLPrograms = function(e, t) {
            function r(e) {
                if (t.floatVertexTextures && e && e.skeleton && e.skeleton.useVertexTexture) return 1024;
                var r = t.maxVertexUniforms,
                    n = Math.floor((r - 20) / 4),
                    i = n;
                return void 0 !== e && e instanceof a.SkinnedMesh && (i = Math.min(e.skeleton.bones.length, i), i < e.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + e.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")), i
            }

            function n(e) {
                for (var t = 0, r = 0, n = 0, i = 0, o = 0, s = e.length; s > o; o++) {
                    var u = e[o];
                    u.onlyShadow || u.visible === !1 || (u instanceof a.DirectionalLight && t++, u instanceof a.PointLight && r++, u instanceof a.SpotLight && n++, u instanceof a.HemisphereLight && i++)
                }
                return {
                    directional: t,
                    point: r,
                    spot: n,
                    hemi: i
                }
            }

            function i(e) {
                for (var t = 0, r = 0, n = e.length; n > r; r++) {
                    var i = e[r];
                    i.castShadow && (i instanceof a.SpotLight && t++, i instanceof a.DirectionalLight && t++)
                }
                return t
            }
            var o = [],
                s = {
                    MeshDepthMaterial: "depth",
                    MeshNormalMaterial: "normal",
                    MeshBasicMaterial: "basic",
                    MeshLambertMaterial: "lambert",
                    MeshPhongMaterial: "phong",
                    LineBasicMaterial: "basic",
                    LineDashedMaterial: "dashed",
                    PointsMaterial: "points"
                },
                u = ["precision", "supportsVertexTextures", "map", "envMap", "envMapMode", "lightMap", "aoMap", "emissiveMap", "bumpMap", "normalMap", "specularMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "maxDirLights", "maxPointLights", "maxSpotLights", "maxHemiLights", "maxShadows", "shadowMapEnabled", "shadowMapType", "shadowMapDebug", "alphaTest", "metal", "doubleSided", "flipSided"];
            this.getParameters = function(o, u, h, c) {
                var l = s[o.type],
                    p = n(u),
                    d = i(u),
                    f = r(c),
                    m = e.getPrecision();
                null !== o.precision && (m = t.getMaxPrecision(o.precision), m !== o.precision && console.warn("THREE.WebGLRenderer.initMaterial:", o.precision, "not supported, using", m, "instead."));
                var v = {
                    shaderID: l,
                    precision: m,
                    supportsVertexTextures: t.vertexTextures,
                    map: !!o.map,
                    envMap: !!o.envMap,
                    envMapMode: o.envMap && o.envMap.mapping,
                    lightMap: !!o.lightMap,
                    aoMap: !!o.aoMap,
                    emissiveMap: !!o.emissiveMap,
                    bumpMap: !!o.bumpMap,
                    normalMap: !!o.normalMap,
                    displacementMap: !!o.displacementMap,
                    specularMap: !!o.specularMap,
                    alphaMap: !!o.alphaMap,
                    combine: o.combine,
                    vertexColors: o.vertexColors,
                    fog: h,
                    useFog: o.fog,
                    fogExp: h instanceof a.FogExp2,
                    flatShading: o.shading === a.FlatShading,
                    sizeAttenuation: o.sizeAttenuation,
                    logarithmicDepthBuffer: t.logarithmicDepthBuffer,
                    skinning: o.skinning,
                    maxBones: f,
                    useVertexTexture: t.floatVertexTextures && c && c.skeleton && c.skeleton.useVertexTexture,
                    morphTargets: o.morphTargets,
                    morphNormals: o.morphNormals,
                    maxMorphTargets: e.maxMorphTargets,
                    maxMorphNormals: e.maxMorphNormals,
                    maxDirLights: p.directional,
                    maxPointLights: p.point,
                    maxSpotLights: p.spot,
                    maxHemiLights: p.hemi,
                    maxShadows: d,
                    shadowMapEnabled: e.shadowMap.enabled && c.receiveShadow && d > 0,
                    shadowMapType: e.shadowMap.type,
                    shadowMapDebug: e.shadowMap.debug,
                    alphaTest: o.alphaTest,
                    metal: o.metal,
                    doubleSided: o.side === a.DoubleSide,
                    flipSided: o.side === a.BackSide
                };
                return v
            }, this.getProgramCode = function(e, t) {
                var r = [];
                if (t.shaderID ? r.push(t.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines)
                    for (var n in e.defines) r.push(n), r.push(e.defines[n]);
                for (var i = 0; i < u.length; i++) {
                    var o = u[i];
                    r.push(o), r.push(t[o])
                }
                return r.join()
            }, this.acquireProgram = function(t, r, n) {
                for (var i, s = 0, u = o.length; u > s; s++) {
                    var h = o[s];
                    if (h.code === n) {
                        i = h, ++i.usedTimes;
                        break
                    }
                }
                return void 0 === i && (i = new a.WebGLProgram(e, n, t, r), o.push(i)), i
            }, this.releaseProgram = function(e) {
                if (0 === --e.usedTimes) {
                    var t = o.indexOf(e);
                    o[t] = o[o.length - 1], o.pop(), e.destroy()
                }
            }, this.programs = o
        }, a.WebGLProperties = function() {
            var e = {};
            this.get = function(t) {
                var r = t.uuid,
                    n = e[r];
                return void 0 === n && (n = {}, e[r] = n), n
            }, this["delete"] = function(t) {
                delete e[t.uuid]
            }, this.clear = function() {
                e = {}
            }
        }, a.WebGLShader = function() {
            var e = function(e) {
                for (var t = e.split("\n"), r = 0; r < t.length; r++) t[r] = r + 1 + ": " + t[r];
                return t.join("\n")
            };
            return function(t, r, n) {
                var i = t.createShader(r);
                return t.shaderSource(i, n), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(i) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", r === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(i), e(n)), i
            }
        }(), a.WebGLShadowMap = function(e, t, r) {
            function n(e, t) {
                var r, n = e.geometry,
                    i = void 0 !== n.morphTargets && n.morphTargets.length > 0 && t.morphTargets,
                    o = e instanceof a.SkinnedMesh && t.skinning;
                return r = e.customDepthMaterial ? e.customDepthMaterial : o ? i ? g : v : i ? m : f, r.visible = t.visible, r.wireframe = t.wireframe, r.wireframeLinewidth = t.wireframeLinewidth, r
            }

            function i(e, t) {
                if (e.visible !== !1) {
                    if ((e instanceof a.Mesh || e instanceof a.Line || e instanceof a.Points) && e.castShadow && (e.frustumCulled === !1 || u.intersectsObject(e) === !0)) {
                        var r = e.material;
                        r.visible === !0 && (e.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), l.push(e))
                    }
                    for (var n = e.children, o = 0, s = n.length; s > o; o++) i(n[o], t)
                }
            }
            var o = e.context,
                s = e.state,
                u = new a.Frustum,
                h = new a.Matrix4,
                c = (new a.Vector3, new a.Vector3, new a.Vector3),
                l = [],
                p = a.ShaderLib.depthRGBA,
                d = a.UniformsUtils.clone(p.uniforms),
                f = new a.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader
                }),
                m = new a.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader,
                    morphTargets: !0
                }),
                v = new a.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader,
                    skinning: !0
                }),
                g = new a.ShaderMaterial({
                    uniforms: d,
                    vertexShader: p.vertexShader,
                    fragmentShader: p.fragmentShader,
                    morphTargets: !0,
                    skinning: !0
                });
            f._shadowPass = !0, m._shadowPass = !0, v._shadowPass = !0, g._shadowPass = !0;
            var y = this;
            this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = a.PCFShadowMap, this.cullFace = a.CullFaceFront, this.render = function(p, d) {
                if (y.enabled !== !1 && (y.autoUpdate !== !1 || y.needsUpdate !== !1)) {
                    o.clearColor(1, 1, 1, 1), s.disable(o.BLEND), s.enable(o.CULL_FACE), o.frontFace(o.CCW), y.cullFace === a.CullFaceFront ? o.cullFace(o.FRONT) : o.cullFace(o.BACK), s.setDepthTest(!0);
                    for (var f = 0, m = t.length; m > f; f++) {
                        var v = t[f];
                        if (v.castShadow) {
                            if (!v.shadowMap) {
                                var g = a.LinearFilter;
                                y.type === a.PCFSoftShadowMap && (g = a.NearestFilter);
                                var x = {
                                    minFilter: g,
                                    magFilter: g,
                                    format: a.RGBAFormat
                                };
                                v.shadowMap = new a.WebGLRenderTarget(v.shadowMapWidth, v.shadowMapHeight, x), v.shadowMapSize = new a.Vector2(v.shadowMapWidth, v.shadowMapHeight), v.shadowMatrix = new a.Matrix4
                            }
                            if (!v.shadowCamera) {
                                if (v instanceof a.SpotLight) v.shadowCamera = new a.PerspectiveCamera(v.shadowCameraFov, v.shadowMapWidth / v.shadowMapHeight, v.shadowCameraNear, v.shadowCameraFar);
                                else {
                                    if (!(v instanceof a.DirectionalLight)) {
                                        console.error("THREE.ShadowMapPlugin: Unsupported light type for shadow", v);
                                        continue
                                    }
                                    v.shadowCamera = new a.OrthographicCamera(v.shadowCameraLeft, v.shadowCameraRight, v.shadowCameraTop, v.shadowCameraBottom, v.shadowCameraNear, v.shadowCameraFar)
                                }
                                p.add(v.shadowCamera), p.autoUpdate === !0 && p.updateMatrixWorld()
                            }
                            v.shadowCameraVisible && !v.cameraHelper && (v.cameraHelper = new a.CameraHelper(v.shadowCamera), p.add(v.cameraHelper));
                            var b = v.shadowMap,
                                M = v.shadowMatrix,
                                w = v.shadowCamera;
                            w.position.setFromMatrixPosition(v.matrixWorld), c.setFromMatrixPosition(v.target.matrixWorld), w.lookAt(c), w.updateMatrixWorld(), w.matrixWorldInverse.getInverse(w.matrixWorld), v.cameraHelper && (v.cameraHelper.visible = v.shadowCameraVisible), v.shadowCameraVisible && v.cameraHelper.update(), M.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), M.multiply(w.projectionMatrix), M.multiply(w.matrixWorldInverse), h.multiplyMatrices(w.projectionMatrix, w.matrixWorldInverse), u.setFromMatrix(h), e.setRenderTarget(b), e.clear(), l.length = 0, i(p, w);
                            for (var _ = 0, E = l.length; E > _; _++) {
                                var S = l[_],
                                    C = r.update(S),
                                    T = S.material;
                                if (T instanceof a.MeshFaceMaterial)
                                    for (var A = C.groups, P = T.materials, L = 0, D = A.length; D > L; L++) {
                                        var R = A[L],
                                            O = P[R.materialIndex];
                                        O.visible === !0 && e.renderBufferDirect(w, t, null, C, n(S, O), S, R)
                                    } else e.renderBufferDirect(w, t, null, C, n(S, T), S)
                            }
                        }
                    }
                    var k = e.getClearColor(),
                        N = e.getClearAlpha();
                    e.setClearColor(k, N), s.enable(o.BLEND), y.cullFace === a.CullFaceFront && o.cullFace(o.BACK), e.resetGLState(), y.needsUpdate = !1
                }
            }
        }, a.WebGLState = function(e, t, r) {
            var n = this,
                i = new Uint8Array(16),
                o = new Uint8Array(16),
                s = {},
                u = null,
                h = null,
                c = null,
                l = null,
                p = null,
                d = null,
                f = null,
                m = null,
                v = null,
                g = null,
                y = null,
                x = null,
                b = null,
                M = null,
                w = null,
                _ = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
                E = void 0,
                S = {};
            this.init = function() {
                e.clearColor(0, 0, 0, 1), e.clearDepth(1), e.clearStencil(0), this.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.frontFace(e.CCW), e.cullFace(e.BACK), this.enable(e.CULL_FACE), this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
            }, this.initAttributes = function() {
                for (var e = 0, t = i.length; t > e; e++) i[e] = 0
            }, this.enableAttribute = function(t) {
                i[t] = 1, 0 === o[t] && (e.enableVertexAttribArray(t), o[t] = 1)
            }, this.disableUnusedAttributes = function() {
                for (var t = 0, r = o.length; r > t; t++) o[t] !== i[t] && (e.disableVertexAttribArray(t), o[t] = 0)
            }, this.enable = function(t) {
                s[t] !== !0 && (e.enable(t), s[t] = !0)
            }, this.disable = function(t) {
                s[t] !== !1 && (e.disable(t), s[t] = !1)
            }, this.getCompressedTextureFormats = function() {
                if (null === u && (u = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc")))
                    for (var r = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), n = 0; n < r.length; n++) u.push(r[n]);
                return u
            }, this.setBlending = function(t, n, i, o, s, u, v) {
                t !== h && (t === a.NoBlending ? this.disable(e.BLEND) : t === a.AdditiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === a.SubtractiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === a.MultiplyBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : t === a.CustomBlending ? this.enable(e.BLEND) : (this.enable(e.BLEND), e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), h = t), t === a.CustomBlending ? (s = s || n, u = u || i, v = v || o, (n !== c || s !== d) && (e.blendEquationSeparate(r(n), r(s)), c = n, d = s), (i !== l || o !== p || u !== f || v !== m) && (e.blendFuncSeparate(r(i), r(o), r(u), r(v)), l = i, p = o, f = u, m = v)) : (c = null, l = null, p = null, d = null, f = null, m = null)
            }, this.setDepthFunc = function(t) {
                if (v !== t) {
                    if (t) switch (t) {
                        case a.NeverDepth:
                            e.depthFunc(e.NEVER);
                            break;
                        case a.AlwaysDepth:
                            e.depthFunc(e.ALWAYS);
                            break;
                        case a.LessDepth:
                            e.depthFunc(e.LESS);
                            break;
                        case a.LessEqualDepth:
                            e.depthFunc(e.LEQUAL);
                            break;
                        case a.EqualDepth:
                            e.depthFunc(e.EQUAL);
                            break;
                        case a.GreaterEqualDepth:
                            e.depthFunc(e.GEQUAL);
                            break;
                        case a.GreaterDepth:
                            e.depthFunc(e.GREATER);
                            break;
                        case a.NotEqualDepth:
                            e.depthFunc(e.NOTEQUAL);
                            break;
                        default:
                            e.depthFunc(e.LEQUAL)
                    } else e.depthFunc(e.LEQUAL);
                    v = t
                }
            }, this.setDepthTest = function(t) {
                t ? this.enable(e.DEPTH_TEST) : this.disable(e.DEPTH_TEST)
            }, this.setDepthWrite = function(t) {
                g !== t && (e.depthMask(t), g = t)
            }, this.setColorWrite = function(t) {
                y !== t && (e.colorMask(t, t, t, t), y = t)
            }, this.setFlipSided = function(t) {
                x !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), x = t)
            }, this.setLineWidth = function(t) {
                t !== b && (e.lineWidth(t), b = t)
            }, this.setPolygonOffset = function(t, r, n) {
                t ? this.enable(e.POLYGON_OFFSET_FILL) : this.disable(e.POLYGON_OFFSET_FILL), !t || M === r && w === n || (e.polygonOffset(r, n), M = r, w = n)
            }, this.setScissorTest = function(t) {
                t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
            }, this.activeTexture = function(t) {
                void 0 === t && (t = e.TEXTURE0 + _ - 1), E !== t && (e.activeTexture(t), E = t)
            }, this.bindTexture = function(t, r) {
                void 0 === E && n.activeTexture();
                var i = S[E];
                void 0 === i && (i = {
                    type: void 0,
                    texture: void 0
                }, S[E] = i), (i.type !== t || i.texture !== r) && (e.bindTexture(t, r), i.type = t, i.texture = r)
            }, this.compressedTexImage2D = function() {
                try {
                    e.compressedTexImage2D.apply(e, arguments)
                } catch (t) {
                    console.error(t)
                }
            }, this.texImage2D = function() {
                try {
                    e.texImage2D.apply(e, arguments)
                } catch (t) {
                    console.error(t)
                }
            }, this.reset = function() {
                for (var t = 0; t < o.length; t++) 1 === o[t] && (e.disableVertexAttribArray(t), o[t] = 0);
                s = {}, u = null, h = null, g = null, y = null, x = null
            }
        }, a.LensFlarePlugin = function(e, t) {
            function r(t) {
                var r = p.createProgram(),
                    n = p.createShader(p.FRAGMENT_SHADER),
                    i = p.createShader(p.VERTEX_SHADER),
                    o = "precision " + e.getPrecision() + " float;\n";
                return p.shaderSource(n, o + t.fragmentShader), p.shaderSource(i, o + t.vertexShader), p.compileShader(n), p.compileShader(i), p.attachShader(r, n), p.attachShader(r, i), p.linkProgram(r), r
            }
            var n, i, o, s, u, h, c, l, p = e.context,
                d = e.state,
                f = function() {
                    var e = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    n = p.createBuffer(), i = p.createBuffer(), p.bindBuffer(p.ARRAY_BUFFER, n), p.bufferData(p.ARRAY_BUFFER, e, p.STATIC_DRAW), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, i), p.bufferData(p.ELEMENT_ARRAY_BUFFER, t, p.STATIC_DRAW), c = p.createTexture(), l = p.createTexture(), d.bindTexture(p.TEXTURE_2D, c), p.texImage2D(p.TEXTURE_2D, 0, p.RGB, 16, 16, 0, p.RGB, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), d.bindTexture(p.TEXTURE_2D, l), p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, 16, 16, 0, p.RGBA, p.UNSIGNED_BYTE, null), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST), h = p.getParameter(p.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
                    var a;
                    a = h ? {
                        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                    } : {
                        vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if( renderType == 2 ) {", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                        fragmentShader: ["precision mediump float;", "uniform lowp int renderType;", "uniform sampler2D map;", "uniform sampler2D occlusionMap;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "void main() {", "if( renderType == 0 ) {", "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );", "} else if( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;", "visibility = ( 1.0 - visibility / 4.0 );", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * visibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
                    }, o = r(a), s = {
                        vertex: p.getAttribLocation(o, "position"),
                        uv: p.getAttribLocation(o, "uv")
                    }, u = {
                        renderType: p.getUniformLocation(o, "renderType"),
                        map: p.getUniformLocation(o, "map"),
                        occlusionMap: p.getUniformLocation(o, "occlusionMap"),
                        opacity: p.getUniformLocation(o, "opacity"),
                        color: p.getUniformLocation(o, "color"),
                        scale: p.getUniformLocation(o, "scale"),
                        rotation: p.getUniformLocation(o, "rotation"),
                        screenPosition: p.getUniformLocation(o, "screenPosition")
                    }
                };
            this.render = function(r, m, v, g) {
                if (0 !== t.length) {
                    var y = new a.Vector3,
                        x = g / v,
                        b = .5 * v,
                        M = .5 * g,
                        w = 16 / g,
                        _ = new a.Vector2(w * x, w),
                        E = new a.Vector3(1, 1, 0),
                        S = new a.Vector2(1, 1);
                    void 0 === o && f(), p.useProgram(o), d.initAttributes(), d.enableAttribute(s.vertex), d.enableAttribute(s.uv), d.disableUnusedAttributes(), p.uniform1i(u.occlusionMap, 0), p.uniform1i(u.map, 1), p.bindBuffer(p.ARRAY_BUFFER, n), p.vertexAttribPointer(s.vertex, 2, p.FLOAT, !1, 16, 0), p.vertexAttribPointer(s.uv, 2, p.FLOAT, !1, 16, 8), p.bindBuffer(p.ELEMENT_ARRAY_BUFFER, i), d.disable(p.CULL_FACE), p.depthMask(!1);
                    for (var C = 0, T = t.length; T > C; C++) {
                        w = 16 / g, _.set(w * x, w);
                        var A = t[C];
                        if (y.set(A.matrixWorld.elements[12], A.matrixWorld.elements[13], A.matrixWorld.elements[14]), y.applyMatrix4(m.matrixWorldInverse), y.applyProjection(m.projectionMatrix), E.copy(y), S.x = E.x * b + b, S.y = E.y * M + M, h || S.x > 0 && S.x < v && S.y > 0 && S.y < g) {
                            d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, null), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, c), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGB, S.x - 8, S.y - 8, 16, 16, 0), p.uniform1i(u.renderType, 0), p.uniform2f(u.scale, _.x, _.y), p.uniform3f(u.screenPosition, E.x, E.y, E.z), d.disable(p.BLEND), d.enable(p.DEPTH_TEST), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), d.activeTexture(p.TEXTURE0), d.bindTexture(p.TEXTURE_2D, l), p.copyTexImage2D(p.TEXTURE_2D, 0, p.RGBA, S.x - 8, S.y - 8, 16, 16, 0), p.uniform1i(u.renderType, 1), d.disable(p.DEPTH_TEST), d.activeTexture(p.TEXTURE1), d.bindTexture(p.TEXTURE_2D, c), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0), A.positionScreen.copy(E), A.customUpdateCallback ? A.customUpdateCallback(A) : A.updateLensFlares(), p.uniform1i(u.renderType, 2), d.enable(p.BLEND);
                            for (var P = 0, L = A.lensFlares.length; L > P; P++) {
                                var D = A.lensFlares[P];
                                D.opacity > .001 && D.scale > .001 && (E.x = D.x, E.y = D.y, E.z = D.z, w = D.size * D.scale / g, _.x = w * x, _.y = w, p.uniform3f(u.screenPosition, E.x, E.y, E.z), p.uniform2f(u.scale, _.x, _.y), p.uniform1f(u.rotation, D.rotation), p.uniform1f(u.opacity, D.opacity), p.uniform3f(u.color, D.color.r, D.color.g, D.color.b), d.setBlending(D.blending, D.blendEquation, D.blendSrc, D.blendDst), e.setTexture(D.texture, 1), p.drawElements(p.TRIANGLES, 6, p.UNSIGNED_SHORT, 0))
                            }
                        }
                    }
                    d.enable(p.CULL_FACE), d.enable(p.DEPTH_TEST), p.depthMask(!0), e.resetGLState()
                }
            }
        }, a.SpritePlugin = function(e, t) {
            function r() {
                var t = l.createProgram(),
                    r = l.createShader(l.VERTEX_SHADER),
                    n = l.createShader(l.FRAGMENT_SHADER);
                return l.shaderSource(r, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), l.shaderSource(n, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), l.compileShader(r), l.compileShader(n), l.attachShader(t, r), l.attachShader(t, n), l.linkProgram(t), t
            }

            function n(e, t) {
                return e.z !== t.z ? t.z - e.z : t.id - e.id
            }
            var i, o, s, u, h, c, l = e.context,
                p = e.state,
                d = new a.Vector3,
                f = new a.Quaternion,
                m = new a.Vector3,
                v = function() {
                    var e = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        t = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    i = l.createBuffer(), o = l.createBuffer(), l.bindBuffer(l.ARRAY_BUFFER, i), l.bufferData(l.ARRAY_BUFFER, e, l.STATIC_DRAW), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, o), l.bufferData(l.ELEMENT_ARRAY_BUFFER, t, l.STATIC_DRAW), s = r(), u = {
                        position: l.getAttribLocation(s, "position"),
                        uv: l.getAttribLocation(s, "uv")
                    }, h = {
                        uvOffset: l.getUniformLocation(s, "uvOffset"),
                        uvScale: l.getUniformLocation(s, "uvScale"),
                        rotation: l.getUniformLocation(s, "rotation"),
                        scale: l.getUniformLocation(s, "scale"),
                        color: l.getUniformLocation(s, "color"),
                        map: l.getUniformLocation(s, "map"),
                        opacity: l.getUniformLocation(s, "opacity"),
                        modelViewMatrix: l.getUniformLocation(s, "modelViewMatrix"),
                        projectionMatrix: l.getUniformLocation(s, "projectionMatrix"),
                        fogType: l.getUniformLocation(s, "fogType"),
                        fogDensity: l.getUniformLocation(s, "fogDensity"),
                        fogNear: l.getUniformLocation(s, "fogNear"),
                        fogFar: l.getUniformLocation(s, "fogFar"),
                        fogColor: l.getUniformLocation(s, "fogColor"),
                        alphaTest: l.getUniformLocation(s, "alphaTest")
                    };
                    var n = document.createElement("canvas");
                    n.width = 8, n.height = 8;
                    var p = n.getContext("2d");
                    p.fillStyle = "white", p.fillRect(0, 0, 8, 8), c = new a.Texture(n), c.needsUpdate = !0
                };
            this.render = function(r, g) {
                if (0 !== t.length) {
                    void 0 === s && v(), l.useProgram(s), p.initAttributes(), p.enableAttribute(u.position), p.enableAttribute(u.uv), p.disableUnusedAttributes(), p.disable(l.CULL_FACE), p.enable(l.BLEND), l.bindBuffer(l.ARRAY_BUFFER, i), l.vertexAttribPointer(u.position, 2, l.FLOAT, !1, 16, 0), l.vertexAttribPointer(u.uv, 2, l.FLOAT, !1, 16, 8), l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, o), l.uniformMatrix4fv(h.projectionMatrix, !1, g.projectionMatrix.elements), p.activeTexture(l.TEXTURE0), l.uniform1i(h.map, 0);
                    var y = 0,
                        x = 0,
                        b = r.fog;
                    b ? (l.uniform3f(h.fogColor, b.color.r, b.color.g, b.color.b), b instanceof a.Fog ? (l.uniform1f(h.fogNear, b.near), l.uniform1f(h.fogFar, b.far), l.uniform1i(h.fogType, 1), y = 1, x = 1) : b instanceof a.FogExp2 && (l.uniform1f(h.fogDensity, b.density), l.uniform1i(h.fogType, 2), y = 2, x = 2)) : (l.uniform1i(h.fogType, 0), y = 0, x = 0);
                    for (var M = 0, w = t.length; w > M; M++) {
                        var _ = t[M];
                        _.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse, _.matrixWorld), _.z = -_.modelViewMatrix.elements[14]
                    }
                    t.sort(n);
                    for (var E = [], M = 0, w = t.length; w > M; M++) {
                        var _ = t[M],
                            S = _.material;
                        l.uniform1f(h.alphaTest, S.alphaTest), l.uniformMatrix4fv(h.modelViewMatrix, !1, _.modelViewMatrix.elements), _.matrixWorld.decompose(d, f, m), E[0] = m.x, E[1] = m.y;
                        var C = 0;
                        r.fog && S.fog && (C = x), y !== C && (l.uniform1i(h.fogType, C), y = C), null !== S.map ? (l.uniform2f(h.uvOffset, S.map.offset.x, S.map.offset.y), l.uniform2f(h.uvScale, S.map.repeat.x, S.map.repeat.y)) : (l.uniform2f(h.uvOffset, 0, 0), l.uniform2f(h.uvScale, 1, 1)), l.uniform1f(h.opacity, S.opacity), l.uniform3f(h.color, S.color.r, S.color.g, S.color.b), l.uniform1f(h.rotation, S.rotation), l.uniform2fv(h.scale, E), p.setBlending(S.blending, S.blendEquation, S.blendSrc, S.blendDst), p.setDepthTest(S.depthTest), p.setDepthWrite(S.depthWrite), S.map && S.map.image && S.map.image.width ? e.setTexture(S.map, 0) : e.setTexture(c, 0), l.drawElements(l.TRIANGLES, 6, l.UNSIGNED_SHORT, 0)
                    }
                    p.enable(l.CULL_FACE), e.resetGLState()
                }
            }
        }, a.GeometryUtils = {
            merge: function(e, t, r) {
                console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
                var n;
                t instanceof a.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), n = t.matrix, t = t.geometry), e.merge(t, n, r)
            },
            center: function(e) {
                return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), e.center()
            }
        }, a.ImageUtils = {
            crossOrigin: void 0,
            loadTexture: function(e, t, r, n) {
                var i = new a.ImageLoader;
                i.crossOrigin = this.crossOrigin;
                var o = new a.Texture(void 0, t);
                return i.load(e, function(e) {
                    o.image = e, o.needsUpdate = !0, r && r(o)
                }, void 0, function(e) {
                    n && n(e)
                }), o.sourceFile = e, o
            },
            loadTextureCube: function(e, t, r, n) {
                var i = [],
                    o = new a.ImageLoader;
                o.crossOrigin = this.crossOrigin;
                for (var s = new a.CubeTexture(i, t), u = 0, h = function(t) {
                        o.load(e[t], function(e) {
                            s.images[t] = e, u += 1, 6 === u && (s.needsUpdate = !0, r && r(s))
                        }, void 0, n)
                    }, c = 0, l = e.length; l > c; ++c) h(c);
                return s
            },
            loadCompressedTexture: function() {
                console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
            },
            loadCompressedTextureCube: function() {
                console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
            },
            getNormalMap: function(e, t) {
                var r = function(e, t) {
                        return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
                    },
                    n = function(e, t) {
                        return [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                    },
                    i = function(e) {
                        var t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
                        return [e[0] / t, e[1] / t, e[2] / t]
                    };
                t = 1 | t;
                var o = e.width,
                    a = e.height,
                    s = document.createElement("canvas");
                s.width = o, s.height = a;
                var u = s.getContext("2d");
                u.drawImage(e, 0, 0);
                for (var h = u.getImageData(0, 0, o, a).data, c = u.createImageData(o, a), l = c.data, p = 0; o > p; p++)
                    for (var d = 0; a > d; d++) {
                        var f = 0 > d - 1 ? 0 : d - 1,
                            m = d + 1 > a - 1 ? a - 1 : d + 1,
                            v = 0 > p - 1 ? 0 : p - 1,
                            g = p + 1 > o - 1 ? o - 1 : p + 1,
                            y = [],
                            x = [0, 0, h[4 * (d * o + p)] / 255 * t];
                        y.push([-1, 0, h[4 * (d * o + v)] / 255 * t]), y.push([-1, -1, h[4 * (f * o + v)] / 255 * t]), y.push([0, -1, h[4 * (f * o + p)] / 255 * t]), y.push([1, -1, h[4 * (f * o + g)] / 255 * t]), y.push([1, 0, h[4 * (d * o + g)] / 255 * t]), y.push([1, 1, h[4 * (m * o + g)] / 255 * t]), y.push([0, 1, h[4 * (m * o + p)] / 255 * t]), y.push([-1, 1, h[4 * (m * o + v)] / 255 * t]);
                        for (var b = [], M = y.length, w = 0; M > w; w++) {
                            var _ = y[w],
                                E = y[(w + 1) % M];
                            _ = n(_, x), E = n(E, x), b.push(i(r(_, E)))
                        }
                        for (var S = [0, 0, 0], w = 0; w < b.length; w++) S[0] += b[w][0], S[1] += b[w][1], S[2] += b[w][2];
                        S[0] /= b.length, S[1] /= b.length, S[2] /= b.length;
                        var C = 4 * (d * o + p);
                        l[C] = (S[0] + 1) / 2 * 255 | 0, l[C + 1] = (S[1] + 1) / 2 * 255 | 0, l[C + 2] = 255 * S[2] | 0, l[C + 3] = 255
                    }
                return u.putImageData(c, 0, 0), s
            },
            generateDataTexture: function(e, t, r) {
                for (var n = e * t, i = new Uint8Array(3 * n), o = Math.floor(255 * r.r), s = Math.floor(255 * r.g), u = Math.floor(255 * r.b), h = 0; n > h; h++) i[3 * h] = o, i[3 * h + 1] = s, i[3 * h + 2] = u;
                var c = new a.DataTexture(i, e, t, a.RGBFormat);
                return c.needsUpdate = !0, c
            }
        }, a.SceneUtils = {
            createMultiMaterialObject: function(e, t) {
                for (var r = new a.Group, n = 0, i = t.length; i > n; n++) r.add(new a.Mesh(e, t[n]));
                return r
            },
            detach: function(e, t, r) {
                e.applyMatrix(t.matrixWorld), t.remove(e), r.add(e)
            },
            attach: function(e, t, r) {
                var n = new a.Matrix4;
                n.getInverse(r.matrixWorld), e.applyMatrix(n), t.remove(e), r.add(e)
            }
        }, a.FontUtils = {
            faces: {},
            face: "helvetiker",
            weight: "normal",
            style: "normal",
            size: 150,
            divisions: 10,
            getFace: function() {
                try {
                    return this.faces[this.face.toLowerCase()][this.weight][this.style]
                } catch (e) {
                    throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
                }
            },
            loadFace: function(e) {
                var t = e.familyName.toLowerCase(),
                    r = this;
                return r.faces[t] = r.faces[t] || {}, r.faces[t][e.cssFontWeight] = r.faces[t][e.cssFontWeight] || {}, r.faces[t][e.cssFontWeight][e.cssFontStyle] = e, r.faces[t][e.cssFontWeight][e.cssFontStyle] = e, e
            },
            drawText: function(e) {
                var t, r = this.getFace(),
                    n = this.size / r.resolution,
                    i = 0,
                    o = String(e).split(""),
                    s = o.length,
                    u = [];
                for (t = 0; s > t; t++) {
                    var h = new a.Path,
                        c = this.extractGlyphPoints(o[t], r, n, i, h);
                    i += c.offset, u.push(c.path)
                }
                var l = i / 2;
                return {
                    paths: u,
                    offset: l
                }
            },
            extractGlyphPoints: function(e, t, r, n, i) {
                var o, s, u, h, c, l, p, d, f, m, v, g, y, x, b, M, w, _, E, S = [],
                    C = t.glyphs[e] || t.glyphs["?"];
                if (C) {
                    if (C.o)
                        for (h = C._cachedOutline || (C._cachedOutline = C.o.split(" ")), l = h.length, p = r, d = r, o = 0; l > o;) switch (c = h[o++]) {
                            case "m":
                                f = h[o++] * p + n, m = h[o++] * d, i.moveTo(f, m);
                                break;
                            case "l":
                                f = h[o++] * p + n, m = h[o++] * d, i.lineTo(f, m);
                                break;
                            case "q":
                                if (v = h[o++] * p + n, g = h[o++] * d, b = h[o++] * p + n, M = h[o++] * d, i.quadraticCurveTo(b, M, v, g), E = S[S.length - 1])
                                    for (y = E.x, x = E.y, s = 1, u = this.divisions; u >= s; s++) {
                                        var T = s / u;
                                        a.Shape.Utils.b2(T, y, b, v), a.Shape.Utils.b2(T, x, M, g)
                                    }
                                break;
                            case "b":
                                if (v = h[o++] * p + n, g = h[o++] * d, b = h[o++] * p + n, M = h[o++] * d, w = h[o++] * p + n, _ = h[o++] * d, i.bezierCurveTo(b, M, w, _, v, g), E = S[S.length - 1])
                                    for (y = E.x, x = E.y, s = 1, u = this.divisions; u >= s; s++) {
                                        var T = s / u;
                                        a.Shape.Utils.b3(T, y, b, w, v), a.Shape.Utils.b3(T, x, M, _, g)
                                    }
                        }
                    return {
                        offset: C.ha * r,
                        path: i
                    }
                }
            }
        }, a.FontUtils.generateShapes = function(e, t) {
            t = t || {};
            var r = void 0 !== t.size ? t.size : 100,
                n = void 0 !== t.curveSegments ? t.curveSegments : 4,
                i = void 0 !== t.font ? t.font : "helvetiker",
                o = void 0 !== t.weight ? t.weight : "normal",
                s = void 0 !== t.style ? t.style : "normal";
            a.FontUtils.size = r, a.FontUtils.divisions = n, a.FontUtils.face = i, a.FontUtils.weight = o, a.FontUtils.style = s;
            for (var u = a.FontUtils.drawText(e), h = u.paths, c = [], l = 0, p = h.length; p > l; l++) Array.prototype.push.apply(c, h[l].toShapes());
            return c
        },
        function(e) {
            var t = 1e-10,
                r = function(e, t) {
                    var r = e.length;
                    if (3 > r) return null;
                    var o, a, s, u = [],
                        h = [],
                        c = [];
                    if (n(e) > 0)
                        for (a = 0; r > a; a++) h[a] = a;
                    else
                        for (a = 0; r > a; a++) h[a] = r - 1 - a;
                    var l = r,
                        p = 2 * l;
                    for (a = l - 1; l > 2;) {
                        if (p-- <= 0) return console.warn("THREE.FontUtils: Warning, unable to triangulate polygon! in Triangulate.process()"), t ? c : u;
                        if (o = a, o >= l && (o = 0), a = o + 1, a >= l && (a = 0), s = a + 1, s >= l && (s = 0), i(e, o, a, s, l, h)) {
                            var d, f, m, v, g;
                            for (d = h[o], f = h[a], m = h[s], u.push([e[d], e[f], e[m]]), c.push([h[o], h[a], h[s]]), v = a, g = a + 1; l > g; v++, g++) h[v] = h[g];
                            l--, p = 2 * l
                        }
                    }
                    return t ? c : u
                },
                n = function(e) {
                    for (var t = e.length, r = 0, n = t - 1, i = 0; t > i; n = i++) r += e[n].x * e[i].y - e[i].x * e[n].y;
                    return .5 * r
                },
                i = function(e, r, n, i, o, a) {
                    var s, u, h, c, l, p, d, f, m;
                    if (u = e[a[r]].x, h = e[a[r]].y, c = e[a[n]].x, l = e[a[n]].y, p = e[a[i]].x, d = e[a[i]].y, t > (c - u) * (d - h) - (l - h) * (p - u)) return !1;
                    var v, g, y, x, b, M, w, _, E, S, C, T, A, P, L;
                    for (v = p - c, g = d - l, y = u - p, x = h - d, b = c - u, M = l - h, s = 0; o > s; s++)
                        if (f = e[a[s]].x, m = e[a[s]].y, !(f === u && m === h || f === c && m === l || f === p && m === d) && (w = f - u, _ = m - h, E = f - c, S = m - l, C = f - p, T = m - d, L = v * S - g * E, A = b * _ - M * w, P = y * T - x * C, L >= -t && P >= -t && A >= -t)) return !1;
                    return !0
                };
            return e.Triangulate = r, e.Triangulate.area = n, e
        }(a.FontUtils), a.typeface_js = {
            faces: a.FontUtils.faces,
            loadFace: a.FontUtils.loadFace
        }, "undefined" != typeof o && (o._typeface_js = a.typeface_js), a.Audio = function(e) {
            a.Object3D.call(this), this.type = "Audio", this.context = e.context, this.source = this.context.createBufferSource(), this.source.onended = this.onEnded.bind(this), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.panner = this.context.createPanner(), this.panner.connect(this.gain), this.autoplay = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1
        }, a.Audio.prototype = Object.create(a.Object3D.prototype), a.Audio.prototype.constructor = a.Audio, a.Audio.prototype.load = function(e) {
            var t = this,
                r = new XMLHttpRequest;
            return r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function(e) {
                t.context.decodeAudioData(this.response, function(e) {
                    t.source.buffer = e, t.autoplay && t.play()
                })
            }, r.send(), this
        }, a.Audio.prototype.play = function() {
            if (this.isPlaying === !0) return void console.warn("THREE.Audio: Audio is already playing.");
            var e = this.context.createBufferSource();
            e.buffer = this.source.buffer, e.loop = this.source.loop, e.onended = this.source.onended, e.start(0, this.startTime), e.playbackRate.value = this.playbackRate, this.isPlaying = !0, this.source = e, this.connect()
        }, a.Audio.prototype.pause = function() {
            this.source.stop(), this.startTime = this.context.currentTime
        }, a.Audio.prototype.stop = function() {
            this.source.stop(), this.startTime = 0
        }, a.Audio.prototype.connect = function() {
            void 0 !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.panner)) : this.source.connect(this.panner)
        }, a.Audio.prototype.disconnect = function() {
            void 0 !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.panner)) : this.source.disconnect(this.panner)
        }, a.Audio.prototype.setFilter = function(e) {
            this.isPlaying === !0 ? (this.disconnect(), this.filter = e, this.connect()) : this.filter = e
        }, a.Audio.prototype.getFilter = function() {
            return this.filter
        }, a.Audio.prototype.setPlaybackRate = function(e) {
            this.playbackRate = e, this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate)
        }, a.Audio.prototype.getPlaybackRate = function() {
            return this.playbackRate
        }, a.Audio.prototype.onEnded = function() {
            this.isPlaying = !1
        }, a.Audio.prototype.setLoop = function(e) {
            this.source.loop = e
        }, a.Audio.prototype.getLoop = function() {
            return this.source.loop
        }, a.Audio.prototype.setRefDistance = function(e) {
            this.panner.refDistance = e
        }, a.Audio.prototype.getRefDistance = function() {
            return this.panner.refDistance
        }, a.Audio.prototype.setRolloffFactor = function(e) {
            this.panner.rolloffFactor = e
        }, a.Audio.prototype.getRolloffFactor = function() {
            return this.panner.rolloffFactor
        }, a.Audio.prototype.setVolume = function(e) {
            this.gain.gain.value = e
        }, a.Audio.prototype.getVolume = function() {
            return this.gain.gain.value
        }, a.Audio.prototype.updateMatrixWorld = function() {
            var e = new a.Vector3;
            return function(t) {
                a.Object3D.prototype.updateMatrixWorld.call(this, t), e.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(e.x, e.y, e.z)
            }
        }(), a.AudioListener = function() {
            a.Object3D.call(this), this.type = "AudioListener", this.context = new(window.AudioContext || window.webkitAudioContext)
        }, a.AudioListener.prototype = Object.create(a.Object3D.prototype), a.AudioListener.prototype.constructor = a.AudioListener, a.AudioListener.prototype.updateMatrixWorld = function() {
            var e = new a.Vector3,
                t = new a.Quaternion,
                r = new a.Vector3,
                n = new a.Vector3;
            return function(i) {
                a.Object3D.prototype.updateMatrixWorld.call(this, i);
                var o = this.context.listener,
                    s = this.up;
                this.matrixWorld.decompose(e, t, r), n.set(0, 0, -1).applyQuaternion(t), o.setPosition(e.x, e.y, e.z), o.setOrientation(n.x, n.y, n.z, s.x, s.y, s.z)
            }
        }(), a.Curve = function() {}, a.Curve.prototype.getPoint = function(e) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"), null
        }, a.Curve.prototype.getPointAt = function(e) {
            var t = this.getUtoTmapping(e);
            return this.getPoint(t)
        }, a.Curve.prototype.getPoints = function(e) {
            e || (e = 5);
            var t, r = [];
            for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
            return r
        }, a.Curve.prototype.getSpacedPoints = function(e) {
            e || (e = 5);
            var t, r = [];
            for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
            return r
        }, a.Curve.prototype.getLength = function() {
            var e = this.getLengths();
            return e[e.length - 1]
        }, a.Curve.prototype.getLengths = function(e) {
            if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var t, r, n = [],
                i = this.getPoint(0),
                o = 0;
            for (n.push(0), r = 1; e >= r; r++) t = this.getPoint(r / e), o += t.distanceTo(i), n.push(o), i = t;
            return this.cacheArcLengths = n, n
        }, a.Curve.prototype.updateArcLengths = function() {
            this.needsUpdate = !0, this.getLengths()
        }, a.Curve.prototype.getUtoTmapping = function(e, t) {
            var r, n = this.getLengths(),
                i = 0,
                o = n.length;
            r = t ? t : e * n[o - 1];
            for (var a, s = 0, u = o - 1; u >= s;)
                if (i = Math.floor(s + (u - s) / 2), a = n[i] - r, 0 > a) s = i + 1;
                else {
                    if (!(a > 0)) {
                        u = i;
                        break
                    }
                    u = i - 1
                }
            if (i = u, n[i] === r) {
                var h = i / (o - 1);
                return h
            }
            var c = n[i],
                l = n[i + 1],
                p = l - c,
                d = (r - c) / p,
                h = (i + d) / (o - 1);
            return h
        }, a.Curve.prototype.getTangent = function(e) {
            var t = 1e-4,
                r = e - t,
                n = e + t;
            0 > r && (r = 0), n > 1 && (n = 1);
            var i = this.getPoint(r),
                o = this.getPoint(n),
                a = o.clone().sub(i);
            return a.normalize()
        }, a.Curve.prototype.getTangentAt = function(e) {
            var t = this.getUtoTmapping(e);
            return this.getTangent(t)
        }, a.Curve.Utils = {
            tangentQuadraticBezier: function(e, t, r, n) {
                return 2 * (1 - e) * (r - t) + 2 * e * (n - r)
            },
            tangentCubicBezier: function(e, t, r, n, i) {
                return -3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * n * (1 - e) - 3 * e * e * n + 3 * e * e * i
            },
            tangentSpline: function(e, t, r, n, i) {
                var o = 6 * e * e - 6 * e,
                    a = 3 * e * e - 4 * e + 1,
                    s = -6 * e * e + 6 * e,
                    u = 3 * e * e - 2 * e;
                return o + a + s + u
            },
            interpolate: function(e, t, r, n, i) {
                var o = .5 * (r - e),
                    a = .5 * (n - t),
                    s = i * i,
                    u = i * s;
                return (2 * t - 2 * r + o + a) * u + (-3 * t + 3 * r - 2 * o - a) * s + o * i + t
            }
        }, a.Curve.create = function(e, t) {
            return e.prototype = Object.create(a.Curve.prototype), e.prototype.constructor = e, e.prototype.getPoint = t, e
        }, a.CurvePath = function() {
            this.curves = [], this.bends = [], this.autoClose = !1
        }, a.CurvePath.prototype = Object.create(a.Curve.prototype), a.CurvePath.prototype.constructor = a.CurvePath, a.CurvePath.prototype.add = function(e) {
            this.curves.push(e)
        }, a.CurvePath.prototype.checkConnection = function() {}, a.CurvePath.prototype.closePath = function() {
            var e = this.curves[0].getPoint(0),
                t = this.curves[this.curves.length - 1].getPoint(1);
            e.equals(t) || this.curves.push(new a.LineCurve(t, e))
        }, a.CurvePath.prototype.getPoint = function(e) {
            for (var t, r, n = e * this.getLength(), i = this.getCurveLengths(), o = 0; o < i.length;) {
                if (i[o] >= n) {
                    t = i[o] - n, r = this.curves[o];
                    var a = 1 - t / r.getLength();
                    return r.getPointAt(a)
                }
                o++
            }
            return null
        }, a.CurvePath.prototype.getLength = function() {
            var e = this.getCurveLengths();
            return e[e.length - 1]
        }, a.CurvePath.prototype.getCurveLengths = function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            var e, t = [],
                r = 0,
                n = this.curves.length;
            for (e = 0; n > e; e++) r += this.curves[e].getLength(), t.push(r);
            return this.cacheLengths = t, t
        }, a.CurvePath.prototype.getBoundingBox = function() {
            var e, t, r, n, i, o, s = this.getPoints();
            e = t = Number.NEGATIVE_INFINITY, n = i = Number.POSITIVE_INFINITY;
            var u, h, c, l, p = s[0] instanceof a.Vector3;
            for (l = p ? new a.Vector3 : new a.Vector2, h = 0, c = s.length; c > h; h++) u = s[h], u.x > e ? e = u.x : u.x < n && (n = u.x), u.y > t ? t = u.y : u.y < i && (i = u.y), p && (u.z > r ? r = u.z : u.z < o && (o = u.z)), l.add(u);
            var d = {
                minX: n,
                minY: i,
                maxX: e,
                maxY: t
            };
            return p && (d.maxZ = r, d.minZ = o), d
        }, a.CurvePath.prototype.createPointsGeometry = function(e) {
            var t = this.getPoints(e, !0);
            return this.createGeometry(t)
        }, a.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
            var t = this.getSpacedPoints(e, !0);
            return this.createGeometry(t)
        }, a.CurvePath.prototype.createGeometry = function(e) {
            for (var t = new a.Geometry, r = 0; r < e.length; r++) t.vertices.push(new a.Vector3(e[r].x, e[r].y, e[r].z || 0));
            return t
        }, a.CurvePath.prototype.addWrapPath = function(e) {
            this.bends.push(e)
        }, a.CurvePath.prototype.getTransformedPoints = function(e, t) {
            var r, n, i = this.getPoints(e);
            for (t || (t = this.bends), r = 0, n = t.length; n > r; r++) i = this.getWrapPoints(i, t[r]);
            return i
        }, a.CurvePath.prototype.getTransformedSpacedPoints = function(e, t) {
            var r, n, i = this.getSpacedPoints(e);
            for (t || (t = this.bends), r = 0, n = t.length; n > r; r++) i = this.getWrapPoints(i, t[r]);
            return i
        }, a.CurvePath.prototype.getWrapPoints = function(e, t) {
            var r, n, i, o, a, s, u = this.getBoundingBox();
            for (r = 0, n = e.length; n > r; r++) {
                i = e[r], o = i.x, a = i.y, s = o / u.maxX, s = t.getUtoTmapping(s, o);
                var h = t.getPoint(s),
                    c = t.getTangent(s);
                c.set(-c.y, c.x).multiplyScalar(a), i.x = h.x + c.x, i.y = h.y + c.y
            }
            return e
        }, a.Path = function(e) {
            a.CurvePath.call(this), this.actions = [], e && this.fromPoints(e)
        }, a.Path.prototype = Object.create(a.CurvePath.prototype), a.Path.prototype.constructor = a.Path, a.PathActions = {
            MOVE_TO: "moveTo",
            LINE_TO: "lineTo",
            QUADRATIC_CURVE_TO: "quadraticCurveTo",
            BEZIER_CURVE_TO: "bezierCurveTo",
            CSPLINE_THRU: "splineThru",
            ARC: "arc",
            ELLIPSE: "ellipse"
        }, a.Path.prototype.fromPoints = function(e) {
            this.moveTo(e[0].x, e[0].y);
            for (var t = 1, r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y)
        }, a.Path.prototype.moveTo = function(e, t) {
            var r = Array.prototype.slice.call(arguments);
            this.actions.push({
                action: a.PathActions.MOVE_TO,
                args: r
            })
        }, a.Path.prototype.lineTo = function(e, t) {
            var r = Array.prototype.slice.call(arguments),
                n = this.actions[this.actions.length - 1].args,
                i = n[n.length - 2],
                o = n[n.length - 1],
                s = new a.LineCurve(new a.Vector2(i, o), new a.Vector2(e, t));
            this.curves.push(s), this.actions.push({
                action: a.PathActions.LINE_TO,
                args: r
            })
        }, a.Path.prototype.quadraticCurveTo = function(e, t, r, n) {
            var i = Array.prototype.slice.call(arguments),
                o = this.actions[this.actions.length - 1].args,
                s = o[o.length - 2],
                u = o[o.length - 1],
                h = new a.QuadraticBezierCurve(new a.Vector2(s, u), new a.Vector2(e, t), new a.Vector2(r, n));
            this.curves.push(h), this.actions.push({
                action: a.PathActions.QUADRATIC_CURVE_TO,
                args: i
            })
        }, a.Path.prototype.bezierCurveTo = function(e, t, r, n, i, o) {
            var s = Array.prototype.slice.call(arguments),
                u = this.actions[this.actions.length - 1].args,
                h = u[u.length - 2],
                c = u[u.length - 1],
                l = new a.CubicBezierCurve(new a.Vector2(h, c), new a.Vector2(e, t), new a.Vector2(r, n), new a.Vector2(i, o));
            this.curves.push(l), this.actions.push({
                action: a.PathActions.BEZIER_CURVE_TO,
                args: s
            })
        }, a.Path.prototype.splineThru = function(e) {
            var t = Array.prototype.slice.call(arguments),
                r = this.actions[this.actions.length - 1].args,
                n = r[r.length - 2],
                i = r[r.length - 1],
                o = [new a.Vector2(n, i)];
            Array.prototype.push.apply(o, e);
            var s = new a.SplineCurve(o);
            this.curves.push(s), this.actions.push({
                action: a.PathActions.CSPLINE_THRU,
                args: t
            })
        }, a.Path.prototype.arc = function(e, t, r, n, i, o) {
            var a = this.actions[this.actions.length - 1].args,
                s = a[a.length - 2],
                u = a[a.length - 1];
            this.absarc(e + s, t + u, r, n, i, o)
        }, a.Path.prototype.absarc = function(e, t, r, n, i, o) {
            this.absellipse(e, t, r, r, n, i, o)
        }, a.Path.prototype.ellipse = function(e, t, r, n, i, o, a, s) {
            var u = this.actions[this.actions.length - 1].args,
                h = u[u.length - 2],
                c = u[u.length - 1];
            this.absellipse(e + h, t + c, r, n, i, o, a, s)
        }, a.Path.prototype.absellipse = function(e, t, r, n, i, o, s, u) {
            var h = [e, t, r, n, i, o, s, u || 0],
                c = new a.EllipseCurve(e, t, r, n, i, o, s, u);
            this.curves.push(c);
            var l = c.getPoint(1);
            h.push(l.x), h.push(l.y), this.actions.push({
                action: a.PathActions.ELLIPSE,
                args: h
            })
        }, a.Path.prototype.getSpacedPoints = function(e, t) {
            e || (e = 40);
            for (var r = [], n = 0; e > n; n++) r.push(this.getPoint(n / e));
            return r
        }, a.Path.prototype.getPoints = function(e, t) {
            if (this.useSpacedPoints) return this.getSpacedPoints(e, t);
            e = e || 12;
            var r, n, i, o, s, u, h, c, l, p, d, f, m, v, g, y, x, b, M = [];
            for (r = 0, n = this.actions.length; n > r; r++) switch (i = this.actions[r], o = i.action, s = i.args, o) {
                case a.PathActions.MOVE_TO:
                    M.push(new a.Vector2(s[0], s[1]));
                    break;
                case a.PathActions.LINE_TO:
                    M.push(new a.Vector2(s[0], s[1]));
                    break;
                case a.PathActions.QUADRATIC_CURVE_TO:
                    for (u = s[2], h = s[3], p = s[0], d = s[1], M.length > 0 ? (v = M[M.length - 1], f = v.x, m = v.y) : (v = this.actions[r - 1].args, f = v[v.length - 2], m = v[v.length - 1]), g = 1; e >= g; g++) y = g / e, x = a.Shape.Utils.b2(y, f, p, u), b = a.Shape.Utils.b2(y, m, d, h), M.push(new a.Vector2(x, b));
                    break;
                case a.PathActions.BEZIER_CURVE_TO:
                    for (u = s[4], h = s[5], p = s[0], d = s[1], c = s[2], l = s[3], M.length > 0 ? (v = M[M.length - 1], f = v.x, m = v.y) : (v = this.actions[r - 1].args, f = v[v.length - 2], m = v[v.length - 1]), g = 1; e >= g; g++) y = g / e, x = a.Shape.Utils.b3(y, f, p, c, u), b = a.Shape.Utils.b3(y, m, d, l, h), M.push(new a.Vector2(x, b));
                    break;
                case a.PathActions.CSPLINE_THRU:
                    v = this.actions[r - 1].args;
                    var w = new a.Vector2(v[v.length - 2], v[v.length - 1]),
                        _ = [w],
                        E = e * s[0].length;
                    _ = _.concat(s[0]);
                    var S = new a.SplineCurve(_);
                    for (g = 1; E >= g; g++) M.push(S.getPointAt(g / E));
                    break;
                case a.PathActions.ARC:
                    var C, T = s[0],
                        A = s[1],
                        P = s[2],
                        L = s[3],
                        D = s[4],
                        R = !!s[5],
                        O = D - L,
                        k = 2 * e;
                    for (g = 1; k >= g; g++) y = g / k, R || (y = 1 - y), C = L + y * O, x = T + P * Math.cos(C), b = A + P * Math.sin(C), M.push(new a.Vector2(x, b));
                    break;
                case a.PathActions.ELLIPSE:
                    var C, N, U, T = s[0],
                        A = s[1],
                        I = s[2],
                        F = s[3],
                        L = s[4],
                        D = s[5],
                        R = !!s[6],
                        B = s[7],
                        O = D - L,
                        k = 2 * e;
                    for (0 !== B && (N = Math.cos(B), U = Math.sin(B)), g = 1; k >= g; g++) {
                        if (y = g / k, R || (y = 1 - y), C = L + y * O, x = T + I * Math.cos(C), b = A + F * Math.sin(C), 0 !== B) {
                            var V = x,
                                G = b;
                            x = (V - T) * N - (G - A) * U + T, b = (V - T) * U + (G - A) * N + A
                        }
                        M.push(new a.Vector2(x, b))
                    }
            }
            var z = M[M.length - 1],
                H = 1e-10;
            return Math.abs(z.x - M[0].x) < H && Math.abs(z.y - M[0].y) < H && M.splice(M.length - 1, 1), t && M.push(M[0]), M
        }, a.Path.prototype.toShapes = function(e, t) {
            function r(e) {
                var t, r, n, i, o, s = [],
                    u = new a.Path;
                for (t = 0, r = e.length; r > t; t++) n = e[t], o = n.args, i = n.action, i === a.PathActions.MOVE_TO && 0 !== u.actions.length && (s.push(u), u = new a.Path), u[i].apply(u, o);
                return 0 !== u.actions.length && s.push(u), s
            }

            function n(e) {
                for (var t = [], r = 0, n = e.length; n > r; r++) {
                    var i = e[r],
                        o = new a.Shape;
                    o.actions = i.actions, o.curves = i.curves, t.push(o)
                }
                return t
            }

            function i(e, t) {
                for (var r = 1e-10, n = t.length, i = !1, o = n - 1, a = 0; n > a; o = a++) {
                    var s = t[o],
                        u = t[a],
                        h = u.x - s.x,
                        c = u.y - s.y;
                    if (Math.abs(c) > r) {
                        if (0 > c && (s = t[a], h = -h, u = t[o], c = -c), e.y < s.y || e.y > u.y) continue;
                        if (e.y === s.y) {
                            if (e.x === s.x) return !0
                        } else {
                            var l = c * (e.x - s.x) - h * (e.y - s.y);
                            if (0 === l) return !0;
                            if (0 > l) continue;
                            i = !i
                        }
                    } else {
                        if (e.y !== s.y) continue;
                        if (u.x <= e.x && e.x <= s.x || s.x <= e.x && e.x <= u.x) return !0
                    }
                }
                return i
            }
            var o = r(this.actions);
            if (0 === o.length) return [];
            if (t === !0) return n(o);
            var s, u, h, c = [];
            if (1 === o.length) return u = o[0], h = new a.Shape, h.actions = u.actions, h.curves = u.curves, c.push(h), c;
            var l = !a.Shape.Utils.isClockWise(o[0].getPoints());
            l = e ? !l : l;
            var p, d = [],
                f = [],
                m = [],
                v = 0;
            f[v] = void 0, m[v] = [];
            var g, y;
            for (g = 0, y = o.length; y > g; g++) u = o[g], p = u.getPoints(), s = a.Shape.Utils.isClockWise(p), s = e ? !s : s, s ? (!l && f[v] && v++, f[v] = {
                s: new a.Shape,
                p: p
            }, f[v].s.actions = u.actions, f[v].s.curves = u.curves, l && v++, m[v] = []) : m[v].push({
                h: u,
                p: p[0]
            });
            if (!f[0]) return n(o);
            if (f.length > 1) {
                for (var x = !1, b = [], M = 0, w = f.length; w > M; M++) d[M] = [];
                for (var M = 0, w = f.length; w > M; M++)
                    for (var _ = m[M], E = 0; E < _.length; E++) {
                        for (var S = _[E], C = !0, T = 0; T < f.length; T++) i(S.p, f[T].p) && (M !== T && b.push({
                            froms: M,
                            tos: T,
                            hole: E
                        }), C ? (C = !1, d[T].push(S)) : x = !0);
                        C && d[M].push(S)
                    }
                b.length > 0 && (x || (m = d))
            }
            var A, P, L;
            for (g = 0, y = f.length; y > g; g++)
                for (h = f[g].s, c.push(h), A = m[g], P = 0, L = A.length; L > P; P++) h.holes.push(A[P].h);
            return c
        }, a.Shape = function() {
            a.Path.apply(this, arguments), this.holes = []
        }, a.Shape.prototype = Object.create(a.Path.prototype), a.Shape.prototype.constructor = a.Shape, a.Shape.prototype.extrude = function(e) {
            var t = new a.ExtrudeGeometry(this, e);
            return t
        }, a.Shape.prototype.makeGeometry = function(e) {
            var t = new a.ShapeGeometry(this, e);
            return t
        }, a.Shape.prototype.getPointsHoles = function(e) {
            var t, r = this.holes.length,
                n = [];
            for (t = 0; r > t; t++) n[t] = this.holes[t].getTransformedPoints(e, this.bends);
            return n
        }, a.Shape.prototype.getSpacedPointsHoles = function(e) {
            var t, r = this.holes.length,
                n = [];
            for (t = 0; r > t; t++) n[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
            return n
        }, a.Shape.prototype.extractAllPoints = function(e) {
            return {
                shape: this.getTransformedPoints(e),
                holes: this.getPointsHoles(e)
            }
        }, a.Shape.prototype.extractPoints = function(e) {
            return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
        }, a.Shape.prototype.extractAllSpacedPoints = function(e) {
            return {
                shape: this.getTransformedSpacedPoints(e),
                holes: this.getSpacedPointsHoles(e)
            }
        }, a.Shape.Utils = {
            triangulateShape: function(e, t) {
                function r(e, t, r) {
                    return e.x !== t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x : t.x <= r.x && r.x <= e.x : e.y < t.y ? e.y <= r.y && r.y <= t.y : t.y <= r.y && r.y <= e.y
                }

                function n(e, t, n, i, o) {
                    var a = 1e-10,
                        s = t.x - e.x,
                        u = t.y - e.y,
                        h = i.x - n.x,
                        c = i.y - n.y,
                        l = e.x - n.x,
                        p = e.y - n.y,
                        d = u * h - s * c,
                        f = u * l - s * p;
                    if (Math.abs(d) > a) {
                        var m;
                        if (d > 0) {
                            if (0 > f || f > d) return [];
                            if (m = c * l - h * p, 0 > m || m > d) return []
                        } else {
                            if (f > 0 || d > f) return [];
                            if (m = c * l - h * p, m > 0 || d > m) return []
                        }
                        if (0 === m) return !o || 0 !== f && f !== d ? [e] : [];
                        if (m === d) return !o || 0 !== f && f !== d ? [t] : [];
                        if (0 === f) return [n];
                        if (f === d) return [i];
                        var v = m / d;
                        return [{
                            x: e.x + v * s,
                            y: e.y + v * u
                        }]
                    }
                    if (0 !== f || c * l !== h * p) return [];
                    var g = 0 === s && 0 === u,
                        y = 0 === h && 0 === c;
                    if (g && y) return e.x !== n.x || e.y !== n.y ? [] : [e];
                    if (g) return r(n, i, e) ? [e] : [];
                    if (y) return r(e, t, n) ? [n] : [];
                    var x, b, M, w, _, E, S, C;
                    return 0 !== s ? (e.x < t.x ? (x = e, M = e.x, b = t, w = t.x) : (x = t, M = t.x, b = e, w = e.x), n.x < i.x ? (_ = n, S = n.x, E = i, C = i.x) : (_ = i, S = i.x, E = n, C = n.x)) : (e.y < t.y ? (x = e, M = e.y, b = t, w = t.y) : (x = t, M = t.y, b = e, w = e.y), n.y < i.y ? (_ = n, S = n.y, E = i, C = i.y) : (_ = i, S = i.y, E = n, C = n.y)), S >= M ? S > w ? [] : w === S ? o ? [] : [_] : C >= w ? [_, b] : [_, E] : M > C ? [] : M === C ? o ? [] : [x] : C >= w ? [x, b] : [x, E]
                }

                function i(e, t, r, n) {
                    var i = 1e-10,
                        o = t.x - e.x,
                        a = t.y - e.y,
                        s = r.x - e.x,
                        u = r.y - e.y,
                        h = n.x - e.x,
                        c = n.y - e.y,
                        l = o * u - a * s,
                        p = o * c - a * h;
                    if (Math.abs(l) > i) {
                        var d = h * u - c * s;
                        return l > 0 ? p >= 0 && d >= 0 : p >= 0 || d >= 0
                    }
                    return p > 0
                }

                function o(e, t) {
                    function r(e, t) {
                        var r = y.length - 1,
                            n = e - 1;
                        0 > n && (n = r);
                        var o = e + 1;
                        o > r && (o = 0);
                        var a = i(y[e], y[n], y[o], s[t]);
                        if (!a) return !1;
                        var u = s.length - 1,
                            h = t - 1;
                        0 > h && (h = u);
                        var c = t + 1;
                        return c > u && (c = 0), a = i(s[t], s[h], s[c], y[e]), a ? !0 : !1
                    }

                    function o(e, t) {
                        var r, i, o;
                        for (r = 0; r < y.length; r++)
                            if (i = r + 1, i %= y.length, o = n(e, t, y[r], y[i], !0), o.length > 0) return !0;
                        return !1
                    }

                    function a(e, r) {
                        var i, o, a, s, u;
                        for (i = 0; i < x.length; i++)
                            for (o = t[x[i]], a = 0; a < o.length; a++)
                                if (s = a + 1, s %= o.length, u = n(e, r, o[a], o[s], !0), u.length > 0) return !0;
                        return !1
                    }
                    for (var s, u, h, c, l, p, d, f, m, v, g, y = e.concat(), x = [], b = [], M = 0, w = t.length; w > M; M++) x.push(M);
                    for (var _ = 0, E = 2 * x.length; x.length > 0;) {
                        if (E--, 0 > E) {
                            console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                            break
                        }
                        for (h = _; h < y.length; h++) {
                            c = y[h], u = -1;
                            for (var M = 0; M < x.length; M++)
                                if (p = x[M], d = c.x + ":" + c.y + ":" + p, void 0 === b[d]) {
                                    s = t[p];
                                    for (var S = 0; S < s.length; S++)
                                        if (l = s[S], r(h, S) && !o(c, l) && !a(c, l)) {
                                            u = S, x.splice(M, 1), f = y.slice(0, h + 1), m = y.slice(h), v = s.slice(u), g = s.slice(0, u + 1), y = f.concat(v).concat(g).concat(m), _ = h;
                                            break
                                        }
                                    if (u >= 0) break;
                                    b[d] = !0
                                }
                            if (u >= 0) break
                        }
                    }
                    return y
                }
                for (var s, u, h, c, l, p, d = {}, f = e.concat(), m = 0, v = t.length; v > m; m++) Array.prototype.push.apply(f, t[m]);
                for (s = 0, u = f.length; u > s; s++) l = f[s].x + ":" + f[s].y, void 0 !== d[l] && console.warn("THREE.Shape: Duplicate point", l), d[l] = s;
                var g = o(e, t),
                    y = a.FontUtils.Triangulate(g, !1);
                for (s = 0, u = y.length; u > s; s++)
                    for (c = y[s], h = 0; 3 > h; h++) l = c[h].x + ":" + c[h].y, p = d[l], void 0 !== p && (c[h] = p);
                return y.concat()
            },
            isClockWise: function(e) {
                return a.FontUtils.Triangulate.area(e) < 0
            },
            b2p0: function(e, t) {
                var r = 1 - e;
                return r * r * t
            },
            b2p1: function(e, t) {
                return 2 * (1 - e) * e * t
            },
            b2p2: function(e, t) {
                return e * e * t
            },
            b2: function(e, t, r, n) {
                return this.b2p0(e, t) + this.b2p1(e, r) + this.b2p2(e, n)
            },
            b3p0: function(e, t) {
                var r = 1 - e;
                return r * r * r * t
            },
            b3p1: function(e, t) {
                var r = 1 - e;
                return 3 * r * r * e * t
            },
            b3p2: function(e, t) {
                var r = 1 - e;
                return 3 * r * e * e * t
            },
            b3p3: function(e, t) {
                return e * e * e * t
            },
            b3: function(e, t, r, n, i) {
                return this.b3p0(e, t) + this.b3p1(e, r) + this.b3p2(e, n) + this.b3p3(e, i)
            }
        }, a.LineCurve = function(e, t) {
            this.v1 = e, this.v2 = t
        }, a.LineCurve.prototype = Object.create(a.Curve.prototype), a.LineCurve.prototype.constructor = a.LineCurve, a.LineCurve.prototype.getPoint = function(e) {
            var t = this.v2.clone().sub(this.v1);
            return t.multiplyScalar(e).add(this.v1), t
        }, a.LineCurve.prototype.getPointAt = function(e) {
            return this.getPoint(e)
        }, a.LineCurve.prototype.getTangent = function(e) {
            var t = this.v2.clone().sub(this.v1);
            return t.normalize()
        }, a.QuadraticBezierCurve = function(e, t, r) {
            this.v0 = e, this.v1 = t, this.v2 = r
        }, a.QuadraticBezierCurve.prototype = Object.create(a.Curve.prototype), a.QuadraticBezierCurve.prototype.constructor = a.QuadraticBezierCurve, a.QuadraticBezierCurve.prototype.getPoint = function(e) {
            var t = new a.Vector2;
            return t.x = a.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), t.y = a.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), t
        }, a.QuadraticBezierCurve.prototype.getTangent = function(e) {
            var t = new a.Vector2;
            return t.x = a.Curve.Utils.tangentQuadraticBezier(e, this.v0.x, this.v1.x, this.v2.x), t.y = a.Curve.Utils.tangentQuadraticBezier(e, this.v0.y, this.v1.y, this.v2.y), t.normalize()
        }, a.CubicBezierCurve = function(e, t, r, n) {
            this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = n
        }, a.CubicBezierCurve.prototype = Object.create(a.Curve.prototype), a.CubicBezierCurve.prototype.constructor = a.CubicBezierCurve, a.CubicBezierCurve.prototype.getPoint = function(e) {
            var t, r;
            return t = a.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r = a.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new a.Vector2(t, r)
        }, a.CubicBezierCurve.prototype.getTangent = function(e) {
            var t, r;
            t = a.Curve.Utils.tangentCubicBezier(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r = a.Curve.Utils.tangentCubicBezier(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y);
            var n = new a.Vector2(t, r);
            return n.normalize(), n
        }, a.SplineCurve = function(e) {
            this.points = void 0 == e ? [] : e
        }, a.SplineCurve.prototype = Object.create(a.Curve.prototype), a.SplineCurve.prototype.constructor = a.SplineCurve, a.SplineCurve.prototype.getPoint = function(e) {
            var t = this.points,
                r = (t.length - 1) * e,
                n = Math.floor(r),
                i = r - n,
                o = t[0 === n ? n : n - 1],
                s = t[n],
                u = t[n > t.length - 2 ? t.length - 1 : n + 1],
                h = t[n > t.length - 3 ? t.length - 1 : n + 2],
                c = new a.Vector2;
            return c.x = a.Curve.Utils.interpolate(o.x, s.x, u.x, h.x, i), c.y = a.Curve.Utils.interpolate(o.y, s.y, u.y, h.y, i), c
        }, a.EllipseCurve = function(e, t, r, n, i, o, a, s) {
            this.aX = e, this.aY = t, this.xRadius = r, this.yRadius = n, this.aStartAngle = i, this.aEndAngle = o, this.aClockwise = a, this.aRotation = s || 0
        }, a.EllipseCurve.prototype = Object.create(a.Curve.prototype), a.EllipseCurve.prototype.constructor = a.EllipseCurve, a.EllipseCurve.prototype.getPoint = function(e) {
            var t = this.aEndAngle - this.aStartAngle;
            0 > t && (t += 2 * Math.PI), t > 2 * Math.PI && (t -= 2 * Math.PI);
            var r;
            r = this.aClockwise === !0 ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t;
            var n = this.aX + this.xRadius * Math.cos(r),
                i = this.aY + this.yRadius * Math.sin(r);
            if (0 !== this.aRotation) {
                var o = Math.cos(this.aRotation),
                    s = Math.sin(this.aRotation),
                    u = n,
                    h = i;
                n = (u - this.aX) * o - (h - this.aY) * s + this.aX, i = (u - this.aX) * s + (h - this.aY) * o + this.aY
            }
            return new a.Vector2(n, i)
        }, a.ArcCurve = function(e, t, r, n, i, o) {
            a.EllipseCurve.call(this, e, t, r, r, n, i, o)
        }, a.ArcCurve.prototype = Object.create(a.EllipseCurve.prototype), a.ArcCurve.prototype.constructor = a.ArcCurve, a.LineCurve3 = a.Curve.create(function(e, t) {
            this.v1 = e, this.v2 = t
        }, function(e) {
            var t = new a.Vector3;
            return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
        }), a.QuadraticBezierCurve3 = a.Curve.create(function(e, t, r) {
            this.v0 = e, this.v1 = t, this.v2 = r
        }, function(e) {
            var t = new a.Vector3;
            return t.x = a.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), t.y = a.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), t.z = a.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z), t
        }), a.CubicBezierCurve3 = a.Curve.create(function(e, t, r, n) {
            this.v0 = e, this.v1 = t, this.v2 = r, this.v3 = n
        }, function(e) {
            var t = new a.Vector3;
            return t.x = a.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t.y = a.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t.z = a.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z), t
        }), a.SplineCurve3 = a.Curve.create(function(e) {
            console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"), this.points = void 0 == e ? [] : e
        }, function(e) {
            var t = this.points,
                r = (t.length - 1) * e,
                n = Math.floor(r),
                i = r - n,
                o = t[0 == n ? n : n - 1],
                s = t[n],
                u = t[n > t.length - 2 ? t.length - 1 : n + 1],
                h = t[n > t.length - 3 ? t.length - 1 : n + 2],
                c = new a.Vector3;
            return c.x = a.Curve.Utils.interpolate(o.x, s.x, u.x, h.x, i), c.y = a.Curve.Utils.interpolate(o.y, s.y, u.y, h.y, i), c.z = a.Curve.Utils.interpolate(o.z, s.z, u.z, h.z, i), c
        }), a.CatmullRomCurve3 = function() {
            function e() {}
            var t = new a.Vector3,
                r = new e,
                n = new e,
                i = new e;
            return e.prototype.init = function(e, t, r, n) {
                this.c0 = e, this.c1 = r, this.c2 = -3 * e + 3 * t - 2 * r - n, this.c3 = 2 * e - 2 * t + r + n
            }, e.prototype.initNonuniformCatmullRom = function(e, t, r, n, i, o, a) {
                var s = (t - e) / i - (r - e) / (i + o) + (r - t) / o,
                    u = (r - t) / o - (n - t) / (o + a) + (n - r) / a;
                s *= o, u *= o, this.init(t, r, s, u)
            }, e.prototype.initCatmullRom = function(e, t, r, n, i) {
                this.init(t, r, i * (r - e), i * (n - t))
            }, e.prototype.calc = function(e) {
                var t = e * e,
                    r = t * e;
                return this.c0 + this.c1 * e + this.c2 * t + this.c3 * r
            }, a.Curve.create(function(e) {
                this.points = e || []
            }, function(e) {
                var o, s, u, h, c = this.points;
                h = c.length, 2 > h && console.log("duh, you need at least 2 points"), o = (h - 1) * e, s = Math.floor(o), u = o - s, 0 === u && s === h - 1 && (s = h - 2, u = 1);
                var l, p, d, f;
                if (0 === s ? (t.subVectors(c[0], c[1]).add(c[0]), l = t) : l = c[s - 1], p = c[s], d = c[s + 1], h > s + 2 ? f = c[s + 2] : (t.subVectors(c[h - 1], c[h - 2]).add(c[h - 2]), f = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                    var m = "chordal" === this.type ? .5 : .25,
                        v = Math.pow(l.distanceToSquared(p), m),
                        g = Math.pow(p.distanceToSquared(d), m),
                        y = Math.pow(d.distanceToSquared(f), m);
                    1e-4 > g && (g = 1), 1e-4 > v && (v = g), 1e-4 > y && (y = g), r.initNonuniformCatmullRom(l.x, p.x, d.x, f.x, v, g, y), n.initNonuniformCatmullRom(l.y, p.y, d.y, f.y, v, g, y), i.initNonuniformCatmullRom(l.z, p.z, d.z, f.z, v, g, y)
                } else if ("catmullrom" === this.type) {
                    var x = void 0 !== this.tension ? this.tension : .5;
                    r.initCatmullRom(l.x, p.x, d.x, f.x, x), n.initCatmullRom(l.y, p.y, d.y, f.y, x), i.initCatmullRom(l.z, p.z, d.z, f.z, x)
                }
                var b = new a.Vector3(r.calc(u), n.calc(u), i.calc(u));
                return b
            })
        }(), a.ClosedSplineCurve3 = a.Curve.create(function(e) {
            this.points = void 0 == e ? [] : e
        }, function(e) {
            var t = this.points,
                r = (t.length - 0) * e,
                n = Math.floor(r),
                i = r - n;
            n += n > 0 ? 0 : (Math.floor(Math.abs(n) / t.length) + 1) * t.length;
            var o = t[(n - 1) % t.length],
                s = t[n % t.length],
                u = t[(n + 1) % t.length],
                h = t[(n + 2) % t.length],
                c = new a.Vector3;
            return c.x = a.Curve.Utils.interpolate(o.x, s.x, u.x, h.x, i), c.y = a.Curve.Utils.interpolate(o.y, s.y, u.y, h.y, i), c.z = a.Curve.Utils.interpolate(o.z, s.z, u.z, h.z, i), c
        }), a.AnimationHandler = {
            LINEAR: 0,
            CATMULLROM: 1,
            CATMULLROM_FORWARD: 2,
            add: function() {
                console.warn("THREE.AnimationHandler.add() has been deprecated.")
            },
            get: function() {
                console.warn("THREE.AnimationHandler.get() has been deprecated.")
            },
            remove: function() {
                console.warn("THREE.AnimationHandler.remove() has been deprecated.")
            },
            animations: [],
            init: function(e) {
                if (e.initialized === !0) return e;
                for (var t = 0; t < e.hierarchy.length; t++) {
                    for (var r = 0; r < e.hierarchy[t].keys.length; r++)
                        if (e.hierarchy[t].keys[r].time < 0 && (e.hierarchy[t].keys[r].time = 0), void 0 !== e.hierarchy[t].keys[r].rot && !(e.hierarchy[t].keys[r].rot instanceof a.Quaternion)) {
                            var n = e.hierarchy[t].keys[r].rot;
                            e.hierarchy[t].keys[r].rot = (new a.Quaternion).fromArray(n)
                        }
                    if (e.hierarchy[t].keys.length && void 0 !== e.hierarchy[t].keys[0].morphTargets) {
                        for (var i = {}, r = 0; r < e.hierarchy[t].keys.length; r++)
                            for (var o = 0; o < e.hierarchy[t].keys[r].morphTargets.length; o++) {
                                var s = e.hierarchy[t].keys[r].morphTargets[o];
                                i[s] = -1
                            }
                        e.hierarchy[t].usedMorphTargets = i;
                        for (var r = 0; r < e.hierarchy[t].keys.length; r++) {
                            var u = {};
                            for (var s in i) {
                                for (var o = 0; o < e.hierarchy[t].keys[r].morphTargets.length; o++)
                                    if (e.hierarchy[t].keys[r].morphTargets[o] === s) {
                                        u[s] = e.hierarchy[t].keys[r].morphTargetsInfluences[o];
                                        break
                                    }
                                o === e.hierarchy[t].keys[r].morphTargets.length && (u[s] = 0)
                            }
                            e.hierarchy[t].keys[r].morphTargetsInfluences = u
                        }
                    }
                    for (var r = 1; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].time === e.hierarchy[t].keys[r - 1].time && (e.hierarchy[t].keys.splice(r, 1), r--);
                    for (var r = 0; r < e.hierarchy[t].keys.length; r++) e.hierarchy[t].keys[r].index = r
                }
                return e.initialized = !0, e
            },
            parse: function(e) {
                var t = function(e, r) {
                        r.push(e);
                        for (var n = 0; n < e.children.length; n++) t(e.children[n], r)
                    },
                    r = [];
                if (e instanceof a.SkinnedMesh)
                    for (var n = 0; n < e.skeleton.bones.length; n++) r.push(e.skeleton.bones[n]);
                else t(e, r);
                return r
            },
            play: function(e) {
                -1 === this.animations.indexOf(e) && this.animations.push(e)
            },
            stop: function(e) {
                var t = this.animations.indexOf(e); - 1 !== t && this.animations.splice(t, 1)
            },
            update: function(e) {
                for (var t = 0; t < this.animations.length; t++) this.animations[t].resetBlendWeights();
                for (var t = 0; t < this.animations.length; t++) this.animations[t].update(e)
            }
        }, a.Animation = function(e, t) {
            this.root = e, this.data = a.AnimationHandler.init(t), this.hierarchy = a.AnimationHandler.parse(e), this.currentTime = 0, this.timeScale = 1, this.isPlaying = !1, this.loop = !0, this.weight = 0, this.interpolationType = a.AnimationHandler.LINEAR
        }, a.Animation.prototype = {
            constructor: a.Animation,
            keyTypes: ["pos", "rot", "scl"],
            play: function(e, t) {
                this.currentTime = void 0 !== e ? e : 0, this.weight = void 0 !== t ? t : 1, this.isPlaying = !0, this.reset(), a.AnimationHandler.play(this)
            },
            stop: function() {
                this.isPlaying = !1, a.AnimationHandler.stop(this)
            },
            reset: function() {
                for (var e = 0, t = this.hierarchy.length; t > e; e++) {
                    var r = this.hierarchy[e];
                    void 0 === r.animationCache && (r.animationCache = {
                        animations: {},
                        blending: {
                            positionWeight: 0,
                            quaternionWeight: 0,
                            scaleWeight: 0
                        }
                    });
                    var n = this.data.name,
                        i = r.animationCache.animations,
                        o = i[n];
                    void 0 === o && (o = {
                        prevKey: {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        },
                        nextKey: {
                            pos: 0,
                            rot: 0,
                            scl: 0
                        },
                        originalMatrix: r.matrix
                    }, i[n] = o);
                    for (var a = 0; 3 > a; a++) {
                        for (var s = this.keyTypes[a], u = this.data.hierarchy[e].keys[0], h = this.getNextKeyWith(s, e, 1); h.time < this.currentTime && h.index > u.index;) u = h, h = this.getNextKeyWith(s, e, h.index + 1);
                        o.prevKey[s] = u, o.nextKey[s] = h
                    }
                }
            },
            resetBlendWeights: function() {
                for (var e = 0, t = this.hierarchy.length; t > e; e++) {
                    var r = this.hierarchy[e],
                        n = r.animationCache;
                    if (void 0 !== n) {
                        var i = n.blending;
                        i.positionWeight = 0, i.quaternionWeight = 0, i.scaleWeight = 0
                    }
                }
            },
            update: function() {
                var e = [],
                    t = new a.Vector3,
                    r = new a.Vector3,
                    n = new a.Quaternion,
                    i = function(e, t) {
                        var r, n, i, a, s, u, h, c, l, p = [],
                            d = [];
                        return r = (e.length - 1) * t, n = Math.floor(r), i = r - n, p[0] = 0 === n ? n : n - 1, p[1] = n, p[2] = n > e.length - 2 ? n : n + 1, p[3] = n > e.length - 3 ? n : n + 2, u = e[p[0]], h = e[p[1]], c = e[p[2]], l = e[p[3]], a = i * i, s = i * a, d[0] = o(u[0], h[0], c[0], l[0], i, a, s), d[1] = o(u[1], h[1], c[1], l[1], i, a, s), d[2] = o(u[2], h[2], c[2], l[2], i, a, s), d
                    },
                    o = function(e, t, r, n, i, o, a) {
                        var s = .5 * (r - e),
                            u = .5 * (n - t);
                        return (2 * (t - r) + s + u) * a + (-3 * (t - r) - 2 * s - u) * o + s * i + t
                    };
                return function(o) {
                    if (this.isPlaying !== !1 && (this.currentTime += o * this.timeScale, 0 !== this.weight)) {
                        var s = this.data.length;
                        (this.currentTime > s || this.currentTime < 0) && (this.loop ? (this.currentTime %= s, this.currentTime < 0 && (this.currentTime += s), this.reset()) : this.stop());
                        for (var u = 0, h = this.hierarchy.length; h > u; u++)
                            for (var c = this.hierarchy[u], l = c.animationCache.animations[this.data.name], p = c.animationCache.blending, d = 0; 3 > d; d++) {
                                var f = this.keyTypes[d],
                                    m = l.prevKey[f],
                                    v = l.nextKey[f];
                                if (this.timeScale > 0 && v.time <= this.currentTime || this.timeScale < 0 && m.time >= this.currentTime) {
                                    for (m = this.data.hierarchy[u].keys[0], v = this.getNextKeyWith(f, u, 1); v.time < this.currentTime && v.index > m.index;) m = v, v = this.getNextKeyWith(f, u, v.index + 1);
                                    l.prevKey[f] = m, l.nextKey[f] = v
                                }
                                var g = (this.currentTime - m.time) / (v.time - m.time),
                                    y = m[f],
                                    x = v[f];
                                if (0 > g && (g = 0), g > 1 && (g = 1), "pos" === f) {
                                    if (this.interpolationType === a.AnimationHandler.LINEAR) {
                                        r.x = y[0] + (x[0] - y[0]) * g, r.y = y[1] + (x[1] - y[1]) * g, r.z = y[2] + (x[2] - y[2]) * g;
                                        var b = this.weight / (this.weight + p.positionWeight);
                                        c.position.lerp(r, b), p.positionWeight += this.weight
                                    } else if (this.interpolationType === a.AnimationHandler.CATMULLROM || this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD) {
                                        e[0] = this.getPrevKeyWith("pos", u, m.index - 1).pos, e[1] = y, e[2] = x, e[3] = this.getNextKeyWith("pos", u, v.index + 1).pos, g = .33 * g + .33;
                                        var M = i(e, g),
                                            b = this.weight / (this.weight + p.positionWeight);
                                        p.positionWeight += this.weight;
                                        var w = c.position;
                                        if (w.x = w.x + (M[0] - w.x) * b, w.y = w.y + (M[1] - w.y) * b, w.z = w.z + (M[2] - w.z) * b, this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD) {
                                            var _ = i(e, 1.01 * g);
                                            t.set(_[0], _[1], _[2]), t.sub(w), t.y = 0, t.normalize();
                                            var E = Math.atan2(t.x, t.z);
                                            c.rotation.set(0, E, 0)
                                        }
                                    }
                                } else if ("rot" === f)
                                    if (a.Quaternion.slerp(y, x, n, g), 0 === p.quaternionWeight) c.quaternion.copy(n), p.quaternionWeight = this.weight;
                                    else {
                                        var b = this.weight / (this.weight + p.quaternionWeight);
                                        a.Quaternion.slerp(c.quaternion, n, c.quaternion, b), p.quaternionWeight += this.weight
                                    }
                                else if ("scl" === f) {
                                    r.x = y[0] + (x[0] - y[0]) * g, r.y = y[1] + (x[1] - y[1]) * g, r.z = y[2] + (x[2] - y[2]) * g;
                                    var b = this.weight / (this.weight + p.scaleWeight);
                                    c.scale.lerp(r, b), p.scaleWeight += this.weight
                                }
                            }
                        return !0
                    }
                }
            }(),
            getNextKeyWith: function(e, t, r) {
                var n = this.data.hierarchy[t].keys;
                for (this.interpolationType === a.AnimationHandler.CATMULLROM || this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD ? r = r < n.length - 1 ? r : n.length - 1 : r %= n.length; r < n.length; r++)
                    if (void 0 !== n[r][e]) return n[r];
                return this.data.hierarchy[t].keys[0]
            },
            getPrevKeyWith: function(e, t, r) {
                var n = this.data.hierarchy[t].keys;
                for (r = this.interpolationType === a.AnimationHandler.CATMULLROM || this.interpolationType === a.AnimationHandler.CATMULLROM_FORWARD ? r > 0 ? r : 0 : r >= 0 ? r : r + n.length; r >= 0; r--)
                    if (void 0 !== n[r][e]) return n[r];
                return this.data.hierarchy[t].keys[n.length - 1]
            }
        }, a.KeyFrameAnimation = function(e) {
            this.root = e.node, this.data = a.AnimationHandler.init(e), this.hierarchy = a.AnimationHandler.parse(this.root), this.currentTime = 0, this.timeScale = .001, this.isPlaying = !1, this.isPaused = !0, this.loop = !0;
            for (var t = 0, r = this.hierarchy.length; r > t; t++) {
                var n = this.data.hierarchy[t].keys,
                    i = this.data.hierarchy[t].sids,
                    o = this.hierarchy[t];
                if (n.length && i) {
                    for (var s = 0; s < i.length; s++) {
                        var u = i[s],
                            h = this.getNextKeyWith(u, t, 0);
                        h && h.apply(u)
                    }
                    o.matrixAutoUpdate = !1, this.data.hierarchy[t].node.updateMatrix(), o.matrixWorldNeedsUpdate = !0
                }
            }
        }, a.KeyFrameAnimation.prototype = {
            constructor: a.KeyFrameAnimation,
            play: function(e) {
                if (this.currentTime = void 0 !== e ? e : 0, this.isPlaying === !1) {
                    this.isPlaying = !0;
                    var t, r, n, i = this.hierarchy.length;
                    for (t = 0; i > t; t++) {
                        r = this.hierarchy[t], n = this.data.hierarchy[t], void 0 === n.animationCache && (n.animationCache = {}, n.animationCache.prevKey = null, n.animationCache.nextKey = null, n.animationCache.originalMatrix = r.matrix);
                        var o = this.data.hierarchy[t].keys;
                        o.length && (n.animationCache.prevKey = o[0], n.animationCache.nextKey = o[1], this.startTime = Math.min(o[0].time, this.startTime), this.endTime = Math.max(o[o.length - 1].time, this.endTime))
                    }
                    this.update(0)
                }
                this.isPaused = !1, a.AnimationHandler.play(this)
            },
            stop: function() {
                this.isPlaying = !1, this.isPaused = !1, a.AnimationHandler.stop(this);
                for (var e = 0; e < this.data.hierarchy.length; e++) {
                    var t = this.hierarchy[e],
                        r = this.data.hierarchy[e];
                    if (void 0 !== r.animationCache) {
                        var n = r.animationCache.originalMatrix;
                        n.copy(t.matrix), t.matrix = n, delete r.animationCache
                    }
                }
            },
            update: function(e) {
                if (this.isPlaying !== !1) {
                    this.currentTime += e * this.timeScale;
                    var t = this.data.length;
                    this.loop === !0 && this.currentTime > t && (this.currentTime %= t), this.currentTime = Math.min(this.currentTime, t);
                    for (var r = 0, n = this.hierarchy.length; n > r; r++) {
                        var i = this.hierarchy[r],
                            o = this.data.hierarchy[r],
                            a = o.keys,
                            s = o.animationCache;
                        if (a.length) {
                            var u = s.prevKey,
                                h = s.nextKey;
                            if (h.time <= this.currentTime) {
                                for (; h.time < this.currentTime && h.index > u.index;) u = h, h = a[u.index + 1];
                                s.prevKey = u, s.nextKey = h
                            }
                            h.time >= this.currentTime ? u.interpolate(h, this.currentTime) : u.interpolate(h, h.time), this.data.hierarchy[r].node.updateMatrix(), i.matrixWorldNeedsUpdate = !0
                        }
                    }
                }
            },
            getNextKeyWith: function(e, t, r) {
                var n = this.data.hierarchy[t].keys;
                for (r %= n.length; r < n.length; r++)
                    if (n[r].hasTarget(e)) return n[r];
                return n[0]
            },
            getPrevKeyWith: function(e, t, r) {
                var n = this.data.hierarchy[t].keys;
                for (r = r >= 0 ? r : r + n.length; r >= 0; r--)
                    if (n[r].hasTarget(e)) return n[r];
                return n[n.length - 1]
            }
        }, a.MorphAnimation = function(e) {
            this.mesh = e, this.frames = e.morphTargetInfluences.length, this.currentTime = 0, this.duration = 1e3, this.loop = !0, this.lastFrame = 0, this.currentFrame = 0, this.isPlaying = !1
        }, a.MorphAnimation.prototype = {
            constructor: a.MorphAnimation,
            play: function() {
                this.isPlaying = !0
            },
            pause: function() {
                this.isPlaying = !1
            },
            update: function(e) {
                if (this.isPlaying !== !1) {
                    this.currentTime += e, this.loop === !0 && this.currentTime > this.duration && (this.currentTime %= this.duration), this.currentTime = Math.min(this.currentTime, this.duration);
                    var t = this.duration / this.frames,
                        r = Math.floor(this.currentTime / t),
                        n = this.mesh.morphTargetInfluences;
                    r !== this.currentFrame && (n[this.lastFrame] = 0, n[this.currentFrame] = 1, n[r] = 0, this.lastFrame = this.currentFrame, this.currentFrame = r);
                    var i = this.currentTime % t / t;
                    n[r] = i, n[this.lastFrame] = 1 - i
                }
            }
        }, a.BoxGeometry = function(e, t, r, n, i, o) {
            function s(e, t, r, n, i, o, s, h) {
                var c, l, p, d = u.widthSegments,
                    f = u.heightSegments,
                    m = i / 2,
                    v = o / 2,
                    g = u.vertices.length;
                "x" === e && "y" === t || "y" === e && "x" === t ? c = "z" : "x" === e && "z" === t || "z" === e && "x" === t ? (c = "y", f = u.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (c = "x", d = u.depthSegments);
                var y = d + 1,
                    x = f + 1,
                    b = i / d,
                    M = o / f,
                    w = new a.Vector3;
                for (w[c] = s > 0 ? 1 : -1, p = 0; x > p; p++)
                    for (l = 0; y > l; l++) {
                        var _ = new a.Vector3;
                        _[e] = (l * b - m) * r, _[t] = (p * M - v) * n, _[c] = s, u.vertices.push(_)
                    }
                for (p = 0; f > p; p++)
                    for (l = 0; d > l; l++) {
                        var E = l + y * p,
                            S = l + y * (p + 1),
                            C = l + 1 + y * (p + 1),
                            T = l + 1 + y * p,
                            A = new a.Vector2(l / d, 1 - p / f),
                            P = new a.Vector2(l / d, 1 - (p + 1) / f),
                            L = new a.Vector2((l + 1) / d, 1 - (p + 1) / f),
                            D = new a.Vector2((l + 1) / d, 1 - p / f),
                            R = new a.Face3(E + g, S + g, T + g);
                        R.normal.copy(w), R.vertexNormals.push(w.clone(), w.clone(), w.clone()), R.materialIndex = h, u.faces.push(R), u.faceVertexUvs[0].push([A, P, D]), R = new a.Face3(S + g, C + g, T + g), R.normal.copy(w), R.vertexNormals.push(w.clone(), w.clone(), w.clone()), R.materialIndex = h, u.faces.push(R), u.faceVertexUvs[0].push([P.clone(), L, D.clone()])
                    }
            }
            a.Geometry.call(this), this.type = "BoxGeometry", this.parameters = {
                width: e,
                height: t,
                depth: r,
                widthSegments: n,
                heightSegments: i,
                depthSegments: o
            }, this.widthSegments = n || 1, this.heightSegments = i || 1, this.depthSegments = o || 1;
            var u = this,
                h = e / 2,
                c = t / 2,
                l = r / 2;
            s("z", "y", -1, -1, r, t, h, 0), s("z", "y", 1, -1, r, t, -h, 1), s("x", "z", 1, 1, e, r, c, 2), s("x", "z", 1, -1, e, r, -c, 3), s("x", "y", 1, -1, e, t, l, 4), s("x", "y", -1, -1, e, t, -l, 5), this.mergeVertices()
        }, a.BoxGeometry.prototype = Object.create(a.Geometry.prototype), a.BoxGeometry.prototype.constructor = a.BoxGeometry, a.BoxGeometry.prototype.clone = function() {
            var e = new a.BoxGeometry(this.parameters.width, this.parameters.height, this.parameters.depth, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.depthSegments);
            return e
        }, a.CubeGeometry = a.BoxGeometry, a.CircleGeometry = function(e, t, r, n) {
            a.Geometry.call(this), this.type = "CircleGeometry", this.parameters = {
                radius: e,
                segments: t,
                thetaStart: r,
                thetaLength: n
            }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI;
            var i, o = [],
                s = new a.Vector3,
                u = new a.Vector2(.5, .5);
            for (this.vertices.push(s), o.push(u), i = 0; t >= i; i++) {
                var h = new a.Vector3,
                    c = r + i / t * n;
                h.x = e * Math.cos(c), h.y = e * Math.sin(c), this.vertices.push(h), o.push(new a.Vector2((h.x / e + 1) / 2, (h.y / e + 1) / 2))
            }
            var l = new a.Vector3(0, 0, 1);
            for (i = 1; t >= i; i++) this.faces.push(new a.Face3(i, i + 1, 0, [l.clone(), l.clone(), l.clone()])), this.faceVertexUvs[0].push([o[i].clone(), o[i + 1].clone(), u.clone()]);
            this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, e)
        }, a.CircleGeometry.prototype = Object.create(a.Geometry.prototype), a.CircleGeometry.prototype.constructor = a.CircleGeometry, a.CircleGeometry.prototype.clone = function() {
            var e = new a.CircleGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);
            return e
        }, a.CircleBufferGeometry = function(e, t, r, n) {
            a.BufferGeometry.call(this), this.type = "CircleBufferGeometry", this.parameters = {
                radius: e,
                segments: t,
                thetaStart: r,
                thetaLength: n
            }, e = e || 50, t = void 0 !== t ? Math.max(3, t) : 8, r = void 0 !== r ? r : 0, n = void 0 !== n ? n : 2 * Math.PI;
            var i = t + 2,
                o = new Float32Array(3 * i),
                s = new Float32Array(3 * i),
                u = new Float32Array(2 * i);
            s[3] = 1, u[0] = .5, u[1] = .5;
            for (var h = 0, c = 3, l = 2; t >= h; h++, c += 3, l += 2) {
                var p = r + h / t * n;
                o[c] = e * Math.cos(p), o[c + 1] = e * Math.sin(p), s[c + 2] = 1, u[l] = (o[c] / e + 1) / 2, u[l + 1] = (o[c + 1] / e + 1) / 2
            }
            for (var d = [], c = 1; t >= c; c++) d.push(c), d.push(c + 1), d.push(0);
            this.setIndex(new a.BufferAttribute(new Uint16Array(d), 1)), this.addAttribute("position", new a.BufferAttribute(o, 3)), this.addAttribute("normal", new a.BufferAttribute(s, 3)), this.addAttribute("uv", new a.BufferAttribute(u, 2)), this.boundingSphere = new a.Sphere(new a.Vector3, e)
        }, a.CircleBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype), a.CircleBufferGeometry.prototype.constructor = a.CircleBufferGeometry, a.CircleBufferGeometry.prototype.clone = function() {
            var e = new a.CircleBufferGeometry(this.parameters.radius, this.parameters.segments, this.parameters.thetaStart, this.parameters.thetaLength);
            return e.copy(this), e
        }, a.CylinderGeometry = function(e, t, r, n, i, o, s, u) {
            a.Geometry.call(this), this.type = "CylinderGeometry", this.parameters = {
                radiusTop: e,
                radiusBottom: t,
                height: r,
                radialSegments: n,
                heightSegments: i,
                openEnded: o,
                thetaStart: s,
                thetaLength: u
            }, e = void 0 !== e ? e : 20, t = void 0 !== t ? t : 20, r = void 0 !== r ? r : 100, n = n || 8, i = i || 1, o = void 0 !== o ? o : !1, s = void 0 !== s ? s : 0, u = void 0 !== u ? u : 2 * Math.PI;
            var h, c, l = r / 2,
                p = [],
                d = [];
            for (c = 0; i >= c; c++) {
                var f = [],
                    m = [],
                    v = c / i,
                    g = v * (t - e) + e;
                for (h = 0; n >= h; h++) {
                    var y = h / n,
                        x = new a.Vector3;
                    x.x = g * Math.sin(y * u + s), x.y = -v * r + l, x.z = g * Math.cos(y * u + s), this.vertices.push(x), f.push(this.vertices.length - 1), m.push(new a.Vector2(y, 1 - v))
                }
                p.push(f), d.push(m)
            }
            var b, M, w = (t - e) / r;
            for (h = 0; n > h; h++)
                for (0 !== e ? (b = this.vertices[p[0][h]].clone(), M = this.vertices[p[0][h + 1]].clone()) : (b = this.vertices[p[1][h]].clone(), M = this.vertices[p[1][h + 1]].clone()), b.setY(Math.sqrt(b.x * b.x + b.z * b.z) * w).normalize(), M.setY(Math.sqrt(M.x * M.x + M.z * M.z) * w).normalize(), c = 0; i > c; c++) {
                    var _ = p[c][h],
                        E = p[c + 1][h],
                        S = p[c + 1][h + 1],
                        C = p[c][h + 1],
                        T = b.clone(),
                        A = b.clone(),
                        P = M.clone(),
                        L = M.clone(),
                        D = d[c][h].clone(),
                        R = d[c + 1][h].clone(),
                        O = d[c + 1][h + 1].clone(),
                        k = d[c][h + 1].clone();
                    this.faces.push(new a.Face3(_, E, C, [T, A, L])), this.faceVertexUvs[0].push([D, R, k]), this.faces.push(new a.Face3(E, S, C, [A.clone(), P, L.clone()])), this.faceVertexUvs[0].push([R.clone(), O, k.clone()])
                }
            if (o === !1 && e > 0)
                for (this.vertices.push(new a.Vector3(0, l, 0)), h = 0; n > h; h++) {
                    var _ = p[0][h],
                        E = p[0][h + 1],
                        S = this.vertices.length - 1,
                        T = new a.Vector3(0, 1, 0),
                        A = new a.Vector3(0, 1, 0),
                        P = new a.Vector3(0, 1, 0),
                        D = d[0][h].clone(),
                        R = d[0][h + 1].clone(),
                        O = new a.Vector2(R.x, 0);
                    this.faces.push(new a.Face3(_, E, S, [T, A, P], void 0, 1)), this.faceVertexUvs[0].push([D, R, O])
                }
            if (o === !1 && t > 0)
                for (this.vertices.push(new a.Vector3(0, -l, 0)), h = 0; n > h; h++) {
                    var _ = p[i][h + 1],
                        E = p[i][h],
                        S = this.vertices.length - 1,
                        T = new a.Vector3(0, -1, 0),
                        A = new a.Vector3(0, -1, 0),
                        P = new a.Vector3(0, -1, 0),
                        D = d[i][h + 1].clone(),
                        R = d[i][h].clone(),
                        O = new a.Vector2(R.x, 1);
                    this.faces.push(new a.Face3(_, E, S, [T, A, P], void 0, 2)), this.faceVertexUvs[0].push([D, R, O])
                }
            this.computeFaceNormals()
        }, a.CylinderGeometry.prototype = Object.create(a.Geometry.prototype), a.CylinderGeometry.prototype.constructor = a.CylinderGeometry, a.CylinderGeometry.prototype.clone = function() {
            var e = new a.CylinderGeometry(this.parameters.radiusTop, this.parameters.radiusBottom, this.parameters.height, this.parameters.radialSegments, this.parameters.heightSegments, this.parameters.openEnded, this.parameters.thetaStart, this.parameters.thetaLength);
            return e
        }, a.EdgesGeometry = function(e, t) {
            a.BufferGeometry.call(this), t = void 0 !== t ? t : 1;
            var r, n = Math.cos(a.Math.degToRad(t)),
                i = [0, 0],
                o = {},
                s = function(e, t) {
                    return e - t
                },
                u = ["a", "b", "c"];
            e instanceof a.BufferGeometry ? (r = new a.Geometry, r.fromBufferGeometry(e)) : r = e.clone(), r.mergeVertices(), r.computeFaceNormals();
            for (var h = r.vertices, c = r.faces, l = 0, p = c.length; p > l; l++)
                for (var d = c[l], f = 0; 3 > f; f++) {
                    i[0] = d[u[f]], i[1] = d[u[(f + 1) % 3]], i.sort(s);
                    var m = i.toString();
                    void 0 === o[m] ? o[m] = {
                        vert1: i[0],
                        vert2: i[1],
                        face1: l,
                        face2: void 0
                    } : o[m].face2 = l
                }
            var v = [];
            for (var m in o) {
                var g = o[m];
                if (void 0 === g.face2 || c[g.face1].normal.dot(c[g.face2].normal) <= n) {
                    var y = h[g.vert1];
                    v.push(y.x), v.push(y.y), v.push(y.z), y = h[g.vert2], v.push(y.x), v.push(y.y), v.push(y.z)
                }
            }
            this.addAttribute("position", new a.BufferAttribute(new Float32Array(v), 3))
        }, a.EdgesGeometry.prototype = Object.create(a.BufferGeometry.prototype), a.EdgesGeometry.prototype.constructor = a.EdgesGeometry, a.ExtrudeGeometry = function(e, t) {
            return "undefined" == typeof e ? void(e = []) : (a.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e : [e], this.addShapeList(e, t), void this.computeFaceNormals())
        }, a.ExtrudeGeometry.prototype = Object.create(a.Geometry.prototype), a.ExtrudeGeometry.prototype.constructor = a.ExtrudeGeometry, a.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
            for (var r = e.length, n = 0; r > n; n++) {
                var i = e[n];
                this.addShape(i, t)
            }
        }, a.ExtrudeGeometry.prototype.addShape = function(e, t) {
            function r(e, t, r) {
                return t || console.error("THREE.ExtrudeGeometry: vec does not exist"), t.clone().multiplyScalar(r).add(e)
            }

            function n(e, t, r) {
                var n, i, o = 1e-10,
                    s = 1,
                    u = e.x - t.x,
                    h = e.y - t.y,
                    c = r.x - e.x,
                    l = r.y - e.y,
                    p = u * u + h * h,
                    d = u * l - h * c;
                if (Math.abs(d) > o) {
                    var f = Math.sqrt(p),
                        m = Math.sqrt(c * c + l * l),
                        v = t.x - h / f,
                        g = t.y + u / f,
                        y = r.x - l / m,
                        x = r.y + c / m,
                        b = ((y - v) * l - (x - g) * c) / (u * l - h * c);
                    n = v + u * b - e.x, i = g + h * b - e.y;
                    var M = n * n + i * i;
                    if (2 >= M) return new a.Vector2(n, i);
                    s = Math.sqrt(M / 2)
                } else {
                    var w = !1;
                    u > o ? c > o && (w = !0) : -o > u ? -o > c && (w = !0) : Math.sign(h) === Math.sign(l) && (w = !0), w ? (n = -h, i = u, s = Math.sqrt(p)) : (n = u, i = h, s = Math.sqrt(p / 2))
                }
                return new a.Vector2(n / s, i / s)
            }

            function i() {
                if (b) {
                    var e = 0,
                        t = H * e;
                    for (X = 0; j > X; X++) z = N[X], h(z[2] + t, z[1] + t, z[0] + t);
                    for (e = w + 2 * x, t = H * e, X = 0; j > X; X++) z = N[X], h(z[0] + t, z[1] + t, z[2] + t)
                } else {
                    for (X = 0; j > X; X++) z = N[X], h(z[2], z[1], z[0]);
                    for (X = 0; j > X; X++) z = N[X], h(z[0] + H * w, z[1] + H * w, z[2] + H * w)
                }
            }

            function o() {
                var e = 0;
                for (s(U, e), e += U.length, T = 0, A = O.length; A > T; T++) C = O[T], s(C, e), e += C.length
            }

            function s(e, t) {
                var r, n;
                for (X = e.length; --X >= 0;) {
                    r = X, n = X - 1, 0 > n && (n = e.length - 1);
                    var i = 0,
                        o = w + 2 * x;
                    for (i = 0; o > i; i++) {
                        var a = H * i,
                            s = H * (i + 1),
                            u = t + r + a,
                            h = t + n + a,
                            l = t + n + s,
                            p = t + r + s;
                        c(u, h, l, p, e, i, o, r, n)
                    }
                }
            }

            function u(e, t, r) {
                P.vertices.push(new a.Vector3(e, t, r))
            }

            function h(e, t, r) {
                e += L, t += L, r += L, P.faces.push(new a.Face3(e, t, r));
                var n = S.generateTopUV(P, e, t, r);
                P.faceVertexUvs[0].push(n)
            }

            function c(e, t, r, n, i, o, s, u, h) {
                e += L, t += L, r += L, n += L, P.faces.push(new a.Face3(e, t, n)), P.faces.push(new a.Face3(t, r, n));
                var c = S.generateSideWallUV(P, e, t, r, n);
                P.faceVertexUvs[0].push([c[0], c[1], c[3]]), P.faceVertexUvs[0].push([c[1], c[2], c[3]])
            }
            var l, p, d, f, m, v = void 0 !== t.amount ? t.amount : 100,
                g = void 0 !== t.bevelThickness ? t.bevelThickness : 6,
                y = void 0 !== t.bevelSize ? t.bevelSize : g - 2,
                x = void 0 !== t.bevelSegments ? t.bevelSegments : 3,
                b = void 0 !== t.bevelEnabled ? t.bevelEnabled : !0,
                M = void 0 !== t.curveSegments ? t.curveSegments : 12,
                w = void 0 !== t.steps ? t.steps : 1,
                _ = t.extrudePath,
                E = !1,
                S = void 0 !== t.UVGenerator ? t.UVGenerator : a.ExtrudeGeometry.WorldUVGenerator;
            _ && (l = _.getSpacedPoints(w), E = !0, b = !1, p = void 0 !== t.frames ? t.frames : new a.TubeGeometry.FrenetFrames(_, w, !1), d = new a.Vector3, f = new a.Vector3, m = new a.Vector3), b || (x = 0, g = 0, y = 0);
            var C, T, A, P = this,
                L = this.vertices.length,
                D = e.extractPoints(M),
                R = D.shape,
                O = D.holes,
                k = !a.Shape.Utils.isClockWise(R);
            if (k) {
                for (R = R.reverse(), T = 0, A = O.length; A > T; T++) C = O[T], a.Shape.Utils.isClockWise(C) && (O[T] = C.reverse());
                k = !1
            }
            var N = a.Shape.Utils.triangulateShape(R, O),
                U = R;
            for (T = 0, A = O.length; A > T; T++) C = O[T], R = R.concat(C);
            for (var I, F, B, V, G, z, H = R.length, j = N.length, W = [], X = 0, q = U.length, Y = q - 1, K = X + 1; q > X; X++, Y++, K++) Y === q && (Y = 0), K === q && (K = 0), W[X] = n(U[X], U[Y], U[K]);
            var Z, Q = [],
                J = W.concat();
            for (T = 0, A = O.length; A > T; T++) {
                for (C = O[T], Z = [], X = 0, q = C.length, Y = q - 1, K = X + 1; q > X; X++, Y++, K++) Y === q && (Y = 0), K === q && (K = 0), Z[X] = n(C[X], C[Y], C[K]);
                Q.push(Z), J = J.concat(Z)
            }
            for (I = 0; x > I; I++) {
                for (B = I / x, V = g * (1 - B), F = y * Math.sin(B * Math.PI / 2), X = 0, q = U.length; q > X; X++) G = r(U[X], W[X], F), u(G.x, G.y, -V);
                for (T = 0, A = O.length; A > T; T++)
                    for (C = O[T], Z = Q[T], X = 0, q = C.length; q > X; X++) G = r(C[X], Z[X], F), u(G.x, G.y, -V)
            }
            for (F = y, X = 0; H > X; X++) G = b ? r(R[X], J[X], F) : R[X], E ? (f.copy(p.normals[0]).multiplyScalar(G.x), d.copy(p.binormals[0]).multiplyScalar(G.y), m.copy(l[0]).add(f).add(d), u(m.x, m.y, m.z)) : u(G.x, G.y, 0);
            var $;
            for ($ = 1; w >= $; $++)
                for (X = 0; H > X; X++) G = b ? r(R[X], J[X], F) : R[X], E ? (f.copy(p.normals[$]).multiplyScalar(G.x), d.copy(p.binormals[$]).multiplyScalar(G.y), m.copy(l[$]).add(f).add(d), u(m.x, m.y, m.z)) : u(G.x, G.y, v / w * $);
            for (I = x - 1; I >= 0; I--) {
                for (B = I / x, V = g * (1 - B), F = y * Math.sin(B * Math.PI / 2), X = 0, q = U.length; q > X; X++) G = r(U[X], W[X], F), u(G.x, G.y, v + V);
                for (T = 0, A = O.length; A > T; T++)
                    for (C = O[T], Z = Q[T], X = 0, q = C.length; q > X; X++) G = r(C[X], Z[X], F), E ? u(G.x, G.y + l[w - 1].y, l[w - 1].x + V) : u(G.x, G.y, v + V)
            }
            i(), o()
        }, a.ExtrudeGeometry.WorldUVGenerator = {
            generateTopUV: function(e, t, r, n) {
                var i = e.vertices,
                    o = i[t],
                    s = i[r],
                    u = i[n];
                return [new a.Vector2(o.x, o.y), new a.Vector2(s.x, s.y), new a.Vector2(u.x, u.y)]
            },
            generateSideWallUV: function(e, t, r, n, i) {
                var o = e.vertices,
                    s = o[t],
                    u = o[r],
                    h = o[n],
                    c = o[i];
                return Math.abs(s.y - u.y) < .01 ? [new a.Vector2(s.x, 1 - s.z), new a.Vector2(u.x, 1 - u.z), new a.Vector2(h.x, 1 - h.z), new a.Vector2(c.x, 1 - c.z)] : [new a.Vector2(s.y, 1 - s.z), new a.Vector2(u.y, 1 - u.z), new a.Vector2(h.y, 1 - h.z), new a.Vector2(c.y, 1 - c.z)]
            }
        }, a.ShapeGeometry = function(e, t) {
            a.Geometry.call(this), this.type = "ShapeGeometry", Array.isArray(e) === !1 && (e = [e]), this.addShapeList(e, t), this.computeFaceNormals()
        }, a.ShapeGeometry.prototype = Object.create(a.Geometry.prototype), a.ShapeGeometry.prototype.constructor = a.ShapeGeometry, a.ShapeGeometry.prototype.addShapeList = function(e, t) {
            for (var r = 0, n = e.length; n > r; r++) this.addShape(e[r], t);
            return this
        }, a.ShapeGeometry.prototype.addShape = function(e, t) {
            void 0 === t && (t = {});
            var r, n, i, o = void 0 !== t.curveSegments ? t.curveSegments : 12,
                s = t.material,
                u = void 0 === t.UVGenerator ? a.ExtrudeGeometry.WorldUVGenerator : t.UVGenerator,
                h = this.vertices.length,
                c = e.extractPoints(o),
                l = c.shape,
                p = c.holes,
                d = !a.Shape.Utils.isClockWise(l);
            if (d) {
                for (l = l.reverse(), r = 0, n = p.length; n > r; r++) i = p[r], a.Shape.Utils.isClockWise(i) && (p[r] = i.reverse());
                d = !1
            }
            var f = a.Shape.Utils.triangulateShape(l, p);
            for (r = 0, n = p.length; n > r; r++) i = p[r], l = l.concat(i);
            var m, v, g = l.length,
                y = f.length;
            for (r = 0; g > r; r++) m = l[r], this.vertices.push(new a.Vector3(m.x, m.y, 0));
            for (r = 0; y > r; r++) {
                v = f[r];
                var x = v[0] + h,
                    b = v[1] + h,
                    M = v[2] + h;
                this.faces.push(new a.Face3(x, b, M, null, null, s)), this.faceVertexUvs[0].push(u.generateTopUV(this, x, b, M))
            }
        }, a.LatheGeometry = function(e, t, r, n) {
            a.Geometry.call(this), this.type = "LatheGeometry", this.parameters = {
                points: e,
                segments: t,
                phiStart: r,
                phiLength: n
            }, t = t || 12, r = r || 0, n = n || 2 * Math.PI;
            for (var i = 1 / (e.length - 1), o = 1 / t, s = 0, u = t; u >= s; s++)
                for (var h = r + s * o * n, c = Math.cos(h), l = Math.sin(h), p = 0, d = e.length; d > p; p++) {
                    var f = e[p],
                        m = new a.Vector3;
                    m.x = c * f.x - l * f.y, m.y = l * f.x + c * f.y, m.z = f.z, this.vertices.push(m)
                }
            for (var v = e.length, s = 0, u = t; u > s; s++)
                for (var p = 0, d = e.length - 1; d > p; p++) {
                    var g = p + v * s,
                        y = g,
                        x = g + v,
                        c = g + 1 + v,
                        b = g + 1,
                        M = s * o,
                        w = p * i,
                        _ = M + o,
                        E = w + i;
                    this.faces.push(new a.Face3(y, x, b)), this.faceVertexUvs[0].push([new a.Vector2(M, w), new a.Vector2(_, w), new a.Vector2(M, E)]), this.faces.push(new a.Face3(x, c, b)), this.faceVertexUvs[0].push([new a.Vector2(_, w), new a.Vector2(_, E), new a.Vector2(M, E)])
                }
            this.mergeVertices(), this.computeFaceNormals(), this.computeVertexNormals()
        }, a.LatheGeometry.prototype = Object.create(a.Geometry.prototype), a.LatheGeometry.prototype.constructor = a.LatheGeometry, a.PlaneGeometry = function(e, t, r, n) {
            a.Geometry.call(this), this.type = "PlaneGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: r,
                heightSegments: n
            }, this.fromBufferGeometry(new a.PlaneBufferGeometry(e, t, r, n))
        }, a.PlaneGeometry.prototype = Object.create(a.Geometry.prototype), a.PlaneGeometry.prototype.constructor = a.PlaneGeometry, a.PlaneGeometry.prototype.clone = function() {
            var e = new a.PlaneGeometry(this.parameters.width, this.parameters.height, this.parameters.widthSegments, this.parameters.heightSegments);
            return e
        }, a.PlaneBufferGeometry = function(e, t, r, n) {
            a.BufferGeometry.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
                width: e,
                height: t,
                widthSegments: r,
                heightSegments: n
            };
            for (var i = e / 2, o = t / 2, s = Math.floor(r) || 1, u = Math.floor(n) || 1, h = s + 1, c = u + 1, l = e / s, p = t / u, d = new Float32Array(h * c * 3), f = new Float32Array(h * c * 3), m = new Float32Array(h * c * 2), v = 0, g = 0, y = 0; c > y; y++)
                for (var x = y * p - o, b = 0; h > b; b++) {
                    var M = b * l - i;
                    d[v] = M, d[v + 1] = -x, f[v + 2] = 1, m[g] = b / s, m[g + 1] = 1 - y / u, v += 3, g += 2
                }
            v = 0;
            for (var w = new(d.length / 3 > 65535 ? Uint32Array : Uint16Array)(s * u * 6), y = 0; u > y; y++)
                for (var b = 0; s > b; b++) {
                    var _ = b + h * y,
                        E = b + h * (y + 1),
                        S = b + 1 + h * (y + 1),
                        C = b + 1 + h * y;
                    w[v] = _, w[v + 1] = E, w[v + 2] = C, w[v + 3] = E, w[v + 4] = S, w[v + 5] = C, v += 6
                }
            this.setIndex(new a.BufferAttribute(w, 1)), this.addAttribute("position", new a.BufferAttribute(d, 3)), this.addAttribute("normal", new a.BufferAttribute(f, 3)), this.addAttribute("uv", new a.BufferAttribute(m, 2))
        }, a.PlaneBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype), a.PlaneBufferGeometry.prototype.constructor = a.PlaneBufferGeometry, a.PlaneBufferGeometry.prototype.clone = function() {
            var e = new a.PlaneBufferGeometry(this.parameters.width, this.parameters.height, this.parameters.widthSegments, this.parameters.heightSegments);
            return e.copy(this), e
        }, a.RingGeometry = function(e, t, r, n, i, o) {
            a.Geometry.call(this), this.type = "RingGeometry", this.parameters = {
                innerRadius: e,
                outerRadius: t,
                thetaSegments: r,
                phiSegments: n,
                thetaStart: i,
                thetaLength: o
            }, e = e || 0, t = t || 50, i = void 0 !== i ? i : 0, o = void 0 !== o ? o : 2 * Math.PI, r = void 0 !== r ? Math.max(3, r) : 8, n = void 0 !== n ? Math.max(1, n) : 8;
            var s, u, h = [],
                c = e,
                l = (t - e) / n;
            for (s = 0; n + 1 > s; s++) {
                for (u = 0; r + 1 > u; u++) {
                    var p = new a.Vector3,
                        d = i + u / r * o;
                    p.x = c * Math.cos(d), p.y = c * Math.sin(d), this.vertices.push(p), h.push(new a.Vector2((p.x / t + 1) / 2, (p.y / t + 1) / 2))
                }
                c += l
            }
            var f = new a.Vector3(0, 0, 1);
            for (s = 0; n > s; s++) {
                var m = s * (r + 1);
                for (u = 0; r > u; u++) {
                    var d = u + m,
                        v = d,
                        g = d + r + 1,
                        y = d + r + 2;
                    this.faces.push(new a.Face3(v, g, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([h[v].clone(), h[g].clone(), h[y].clone()]), v = d, g = d + r + 2, y = d + 1, this.faces.push(new a.Face3(v, g, y, [f.clone(), f.clone(), f.clone()])), this.faceVertexUvs[0].push([h[v].clone(), h[g].clone(), h[y].clone()])
                }
            }
            this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, c)
        }, a.RingGeometry.prototype = Object.create(a.Geometry.prototype), a.RingGeometry.prototype.constructor = a.RingGeometry, a.RingGeometry.prototype.clone = function() {
            var e = new a.RingGeometry(this.parameters.innerRadius, this.parameters.outerRadius, this.parameters.thetaSegments, this.parameters.phiSegments, this.parameters.thetaStart, this.parameters.thetaLength);
            return e
        }, a.SphereGeometry = function(e, t, r, n, i, o, s) {
            a.Geometry.call(this), this.type = "SphereGeometry", this.parameters = {
                radius: e,
                widthSegments: t,
                heightSegments: r,
                phiStart: n,
                phiLength: i,
                thetaStart: o,
                thetaLength: s
            }, this.fromBufferGeometry(new a.SphereBufferGeometry(e, t, r, n, i, o, s))
        }, a.SphereGeometry.prototype = Object.create(a.Geometry.prototype), a.SphereGeometry.prototype.constructor = a.SphereGeometry, a.SphereGeometry.prototype.clone = function() {
            var e = new a.SphereGeometry(this.parameters.radius, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.phiStart, this.parameters.phiLength, this.parameters.thetaStart, this.parameters.thetaLength);
            return e
        }, a.SphereBufferGeometry = function(e, t, r, n, i, o, s) {
            a.BufferGeometry.call(this), this.type = "SphereBufferGeometry", this.parameters = {
                radius: e,
                widthSegments: t,
                heightSegments: r,
                phiStart: n,
                phiLength: i,
                thetaStart: o,
                thetaLength: s
            }, e = e || 50, t = Math.max(3, Math.floor(t) || 8), r = Math.max(2, Math.floor(r) || 6), n = void 0 !== n ? n : 0, i = void 0 !== i ? i : 2 * Math.PI, o = void 0 !== o ? o : 0, s = void 0 !== s ? s : Math.PI;
            for (var u = o + s, h = (t + 1) * (r + 1), c = new a.BufferAttribute(new Float32Array(3 * h), 3), l = new a.BufferAttribute(new Float32Array(3 * h), 3), p = new a.BufferAttribute(new Float32Array(2 * h), 2), d = 0, f = [], m = new a.Vector3, v = 0; r >= v; v++) {
                for (var g = [], y = v / r, x = 0; t >= x; x++) {
                    var b = x / t,
                        M = -e * Math.cos(n + b * i) * Math.sin(o + y * s),
                        w = e * Math.cos(o + y * s),
                        _ = e * Math.sin(n + b * i) * Math.sin(o + y * s);
                    m.set(M, w, _).normalize(), c.setXYZ(d, M, w, _), l.setXYZ(d, m.x, m.y, m.z), p.setXY(d, b, 1 - y), g.push(d), d++
                }
                f.push(g)
            }
            for (var E = [], v = 0; r > v; v++)
                for (var x = 0; t > x; x++) {
                    var S = f[v][x + 1],
                        C = f[v][x],
                        T = f[v + 1][x],
                        A = f[v + 1][x + 1];
                    (0 !== v || o > 0) && E.push(S, C, A), (v !== r - 1 || u < Math.PI) && E.push(C, T, A)
                }
            this.setIndex(new a.BufferAttribute(new Uint16Array(E), 1)), this.addAttribute("position", c), this.addAttribute("normal", l), this.addAttribute("uv", p), this.boundingSphere = new a.Sphere(new a.Vector3, e)
        }, a.SphereBufferGeometry.prototype = Object.create(a.BufferGeometry.prototype), a.SphereBufferGeometry.prototype.constructor = a.SphereBufferGeometry, a.SphereBufferGeometry.prototype.clone = function() {
            var e = new a.SphereBufferGeometry(this.parameters.radius, this.parameters.widthSegments, this.parameters.heightSegments, this.parameters.phiStart, this.parameters.phiLength, this.parameters.thetaStart, this.parameters.thetaLength);
            return e.copy(this), e
        }, a.TextGeometry = function(e, t) {
            t = t || {};
            var r = a.FontUtils.generateShapes(e, t);
            t.amount = void 0 !== t.height ? t.height : 50, void 0 === t.bevelThickness && (t.bevelThickness = 10), void 0 === t.bevelSize && (t.bevelSize = 8), void 0 === t.bevelEnabled && (t.bevelEnabled = !1), a.ExtrudeGeometry.call(this, r, t), this.type = "TextGeometry"
        }, a.TextGeometry.prototype = Object.create(a.ExtrudeGeometry.prototype), a.TextGeometry.prototype.constructor = a.TextGeometry, a.TorusGeometry = function(e, t, r, n, i) {
            a.Geometry.call(this), this.type = "TorusGeometry", this.parameters = {
                radius: e,
                tube: t,
                radialSegments: r,
                tubularSegments: n,
                arc: i
            }, e = e || 100, t = t || 40, r = r || 8, n = n || 6, i = i || 2 * Math.PI;
            for (var o = new a.Vector3, s = [], u = [], h = 0; r >= h; h++)
                for (var c = 0; n >= c; c++) {
                    var l = c / n * i,
                        p = h / r * Math.PI * 2;
                    o.x = e * Math.cos(l), o.y = e * Math.sin(l);
                    var d = new a.Vector3;
                    d.x = (e + t * Math.cos(p)) * Math.cos(l), d.y = (e + t * Math.cos(p)) * Math.sin(l), d.z = t * Math.sin(p), this.vertices.push(d), s.push(new a.Vector2(c / n, h / r)), u.push(d.clone().sub(o).normalize())
                }
            for (var h = 1; r >= h; h++)
                for (var c = 1; n >= c; c++) {
                    var f = (n + 1) * h + c - 1,
                        m = (n + 1) * (h - 1) + c - 1,
                        v = (n + 1) * (h - 1) + c,
                        g = (n + 1) * h + c,
                        y = new a.Face3(f, m, g, [u[f].clone(), u[m].clone(), u[g].clone()]);
                    this.faces.push(y), this.faceVertexUvs[0].push([s[f].clone(), s[m].clone(), s[g].clone()]), y = new a.Face3(m, v, g, [u[m].clone(), u[v].clone(), u[g].clone()]), this.faces.push(y), this.faceVertexUvs[0].push([s[m].clone(), s[v].clone(), s[g].clone()])
                }
            this.computeFaceNormals()
        }, a.TorusGeometry.prototype = Object.create(a.Geometry.prototype), a.TorusGeometry.prototype.constructor = a.TorusGeometry, a.TorusGeometry.prototype.clone = function() {
            var e = new a.TorusGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.arc);
            return e
        }, a.TorusKnotGeometry = function(e, t, r, n, i, o, s) {
            function u(e, t, r, n, i) {
                var o = Math.cos(e),
                    s = Math.sin(e),
                    u = t / r * e,
                    h = Math.cos(u),
                    c = n * (2 + h) * .5 * o,
                    l = n * (2 + h) * s * .5,
                    p = i * n * Math.sin(u) * .5;
                return new a.Vector3(c, l, p)
            }
            a.Geometry.call(this), this.type = "TorusKnotGeometry", this.parameters = {
                radius: e,
                tube: t,
                radialSegments: r,
                tubularSegments: n,
                p: i,
                q: o,
                heightScale: s
            }, e = e || 100, t = t || 40, r = r || 64, n = n || 8, i = i || 2, o = o || 3, s = s || 1;
            for (var h = new Array(r), c = new a.Vector3, l = new a.Vector3, p = new a.Vector3, d = 0; r > d; ++d) {
                h[d] = new Array(n);
                var f = d / r * 2 * i * Math.PI,
                    m = u(f, o, i, e, s),
                    v = u(f + .01, o, i, e, s);
                c.subVectors(v, m), l.addVectors(v, m), p.crossVectors(c, l), l.crossVectors(p, c), p.normalize(), l.normalize();
                for (var g = 0; n > g; ++g) {
                    var y = g / n * 2 * Math.PI,
                        x = -t * Math.cos(y),
                        b = t * Math.sin(y),
                        M = new a.Vector3;
                    M.x = m.x + x * l.x + b * p.x, M.y = m.y + x * l.y + b * p.y, M.z = m.z + x * l.z + b * p.z, h[d][g] = this.vertices.push(M) - 1
                }
            }
            for (var d = 0; r > d; ++d)
                for (var g = 0; n > g; ++g) {
                    var w = (d + 1) % r,
                        _ = (g + 1) % n,
                        E = h[d][g],
                        S = h[w][g],
                        C = h[w][_],
                        T = h[d][_],
                        A = new a.Vector2(d / r, g / n),
                        P = new a.Vector2((d + 1) / r, g / n),
                        L = new a.Vector2((d + 1) / r, (g + 1) / n),
                        D = new a.Vector2(d / r, (g + 1) / n);
                    this.faces.push(new a.Face3(E, S, T)), this.faceVertexUvs[0].push([A, P, D]), this.faces.push(new a.Face3(S, C, T)), this.faceVertexUvs[0].push([P.clone(), L, D.clone()])
                }
            this.computeFaceNormals(), this.computeVertexNormals()
        }, a.TorusKnotGeometry.prototype = Object.create(a.Geometry.prototype), a.TorusKnotGeometry.prototype.constructor = a.TorusKnotGeometry, a.TorusKnotGeometry.prototype.clone = function() {
            var e = new a.TorusKnotGeometry(this.parameters.radius, this.parameters.tube, this.parameters.radialSegments, this.parameters.tubularSegments, this.parameters.p, this.parameters.q, this.parameters.heightScale);
            return e
        }, a.TubeGeometry = function(e, t, r, n, i, o) {
            function s(e, t, r) {
                return L.vertices.push(new a.Vector3(e, t, r)) - 1
            }
            a.Geometry.call(this), this.type = "TubeGeometry", this.parameters = {
                path: e,
                segments: t,
                radius: r,
                radialSegments: n,
                closed: i
            }, t = t || 64, r = r || 1, n = n || 8, i = i || !1, o = o || a.TubeGeometry.NoTaper;
            var u, h, c, l, p, d, f, m, v, g, y, x, b, M, w, _, E, S, C, T, A, P = [],
                L = this,
                D = t + 1,
                R = new a.Vector3,
                O = new a.TubeGeometry.FrenetFrames(e, t, i),
                k = O.tangents,
                N = O.normals,
                U = O.binormals;
            for (this.tangents = k, this.normals = N, this.binormals = U, g = 0; D > g; g++)
                for (P[g] = [], l = g / (D - 1), v = e.getPointAt(l), u = k[g], h = N[g], c = U[g], d = r * o(l), y = 0; n > y; y++) p = y / n * 2 * Math.PI, f = -d * Math.cos(p), m = d * Math.sin(p), R.copy(v), R.x += f * h.x + m * c.x, R.y += f * h.y + m * c.y, R.z += f * h.z + m * c.z, P[g][y] = s(R.x, R.y, R.z);
            for (g = 0; t > g; g++)
                for (y = 0; n > y; y++) x = i ? (g + 1) % t : g + 1, b = (y + 1) % n, M = P[g][y], w = P[x][y], _ = P[x][b], E = P[g][b], S = new a.Vector2(g / t, y / n), C = new a.Vector2((g + 1) / t, y / n), T = new a.Vector2((g + 1) / t, (y + 1) / n), A = new a.Vector2(g / t, (y + 1) / n), this.faces.push(new a.Face3(M, w, E)), this.faceVertexUvs[0].push([S, C, A]), this.faces.push(new a.Face3(w, _, E)), this.faceVertexUvs[0].push([C.clone(), T, A.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        }, a.TubeGeometry.prototype = Object.create(a.Geometry.prototype), a.TubeGeometry.prototype.constructor = a.TubeGeometry, a.TubeGeometry.NoTaper = function(e) {
            return 1
        }, a.TubeGeometry.SinusoidalTaper = function(e) {
            return Math.sin(Math.PI * e)
        }, a.TubeGeometry.FrenetFrames = function(e, t, r) {
            function n() {
                f[0] = new a.Vector3, m[0] = new a.Vector3, o = Number.MAX_VALUE, s = Math.abs(d[0].x), u = Math.abs(d[0].y), h = Math.abs(d[0].z), o >= s && (o = s, p.set(1, 0, 0)), o >= u && (o = u, p.set(0, 1, 0)), o >= h && p.set(0, 0, 1), v.crossVectors(d[0], p).normalize(), f[0].crossVectors(d[0], v), m[0].crossVectors(d[0], f[0])
            }
            var i, o, s, u, h, c, l, p = new a.Vector3,
                d = [],
                f = [],
                m = [],
                v = new a.Vector3,
                g = new a.Matrix4,
                y = t + 1,
                x = 1e-4;
            for (this.tangents = d, this.normals = f, this.binormals = m, c = 0; y > c; c++) l = c / (y - 1), d[c] = e.getTangentAt(l), d[c].normalize();
            for (n(), c = 1; y > c; c++) f[c] = f[c - 1].clone(), m[c] = m[c - 1].clone(), v.crossVectors(d[c - 1], d[c]), v.length() > x && (v.normalize(), i = Math.acos(a.Math.clamp(d[c - 1].dot(d[c]), -1, 1)), f[c].applyMatrix4(g.makeRotationAxis(v, i))), m[c].crossVectors(d[c], f[c]);
            if (r)
                for (i = Math.acos(a.Math.clamp(f[0].dot(f[y - 1]), -1, 1)), i /= y - 1, d[0].dot(v.crossVectors(f[0], f[y - 1])) > 0 && (i = -i), c = 1; y > c; c++) f[c].applyMatrix4(g.makeRotationAxis(d[c], i * c)), m[c].crossVectors(d[c], f[c])
        }, a.PolyhedronGeometry = function(e, t, r, n) {
            function i(e) {
                var t = e.normalize().clone();
                t.index = l.vertices.push(t) - 1;
                var r = u(e) / 2 / Math.PI + .5,
                    n = h(e) / Math.PI + .5;
                return t.uv = new a.Vector2(r, 1 - n), t
            }

            function o(e, t, r, n) {
                var i = new a.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()], void 0, n);
                l.faces.push(i), b.copy(e).add(t).add(r).divideScalar(3);
                var o = u(b);
                l.faceVertexUvs[0].push([c(e.uv, e, o), c(t.uv, t, o), c(r.uv, r, o)])
            }

            function s(e, t) {
                for (var r = Math.pow(2, t), n = i(l.vertices[e.a]), a = i(l.vertices[e.b]), s = i(l.vertices[e.c]), u = [], h = e.materialIndex, c = 0; r >= c; c++) {
                    u[c] = [];
                    for (var p = i(n.clone().lerp(s, c / r)), d = i(a.clone().lerp(s, c / r)), f = r - c, m = 0; f >= m; m++) 0 === m && c === r ? u[c][m] = p : u[c][m] = i(p.clone().lerp(d, m / f))
                }
                for (var c = 0; r > c; c++)
                    for (var m = 0; 2 * (r - c) - 1 > m; m++) {
                        var v = Math.floor(m / 2);
                        m % 2 === 0 ? o(u[c][v + 1], u[c + 1][v], u[c][v], h) : o(u[c][v + 1], u[c + 1][v + 1], u[c + 1][v], h)
                    }
            }

            function u(e) {
                return Math.atan2(e.z, -e.x)
            }

            function h(e) {
                return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
            }

            function c(e, t, r) {
                return 0 > r && 1 === e.x && (e = new a.Vector2(e.x - 1, e.y)), 0 === t.x && 0 === t.z && (e = new a.Vector2(r / 2 / Math.PI + .5, e.y)), e.clone()
            }
            a.Geometry.call(this), this.type = "PolyhedronGeometry", this.parameters = {
                vertices: e,
                indices: t,
                radius: r,
                detail: n
            }, r = r || 1, n = n || 0;
            for (var l = this, p = 0, d = e.length; d > p; p += 3) i(new a.Vector3(e[p], e[p + 1], e[p + 2]));
            for (var f = this.vertices, m = [], p = 0, v = 0, d = t.length; d > p; p += 3, v++) {
                var g = f[t[p]],
                    y = f[t[p + 1]],
                    x = f[t[p + 2]];
                m[v] = new a.Face3(g.index, y.index, x.index, [g.clone(), y.clone(), x.clone()], void 0, v)
            }
            for (var b = new a.Vector3, p = 0, d = m.length; d > p; p++) s(m[p], n);
            for (var p = 0, d = this.faceVertexUvs[0].length; d > p; p++) {
                var M = this.faceVertexUvs[0][p],
                    w = M[0].x,
                    _ = M[1].x,
                    E = M[2].x,
                    S = Math.max(w, Math.max(_, E)),
                    C = Math.min(w, Math.min(_, E));
                S > .9 && .1 > C && (.2 > w && (M[0].x += 1), .2 > _ && (M[1].x += 1), .2 > E && (M[2].x += 1))
            }
            for (var p = 0, d = this.vertices.length; d > p; p++) this.vertices[p].multiplyScalar(r);
            this.mergeVertices(), this.computeFaceNormals(), this.boundingSphere = new a.Sphere(new a.Vector3, r)
        }, a.PolyhedronGeometry.prototype = Object.create(a.Geometry.prototype), a.PolyhedronGeometry.prototype.constructor = a.PolyhedronGeometry, a.PolyhedronGeometry.prototype.clone = function() {
            var e = new a.PolyhedronGeometry(this.parameters.vertices, this.parameters.indices, this.parameters.radius, this.parameters.detail);
            return e.copy(this)
        }, a.PolyhedronGeometry.prototype.copy = function(e) {
            return a.Geometry.prototype.copy.call(this, e), this
        }, a.DodecahedronGeometry = function(e, t) {
            var r = (1 + Math.sqrt(5)) / 2,
                n = 1 / r,
                i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, 0, -r, 0, -n, r, 0, -n, -r, 0, n, r, 0, n],
                o = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
            a.PolyhedronGeometry.call(this, i, o, e, t), this.type = "DodecahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        }, a.DodecahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype), a.DodecahedronGeometry.prototype.constructor = a.DodecahedronGeometry, a.DodecahedronGeometry.prototype.clone = function() {
            var e = new a.DodecahedronGeometry(this.parameters.radius, this.parameters.detail);
            return e.copy(this), e
        }, a.IcosahedronGeometry = function(e, t) {
            var r = (1 + Math.sqrt(5)) / 2,
                n = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1],
                i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
            a.PolyhedronGeometry.call(this, n, i, e, t), this.type = "IcosahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        }, a.IcosahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype), a.IcosahedronGeometry.prototype.constructor = a.IcosahedronGeometry, a.IcosahedronGeometry.prototype.clone = function() {
            var e = new a.IcosahedronGeometry(this.parameters.radius, this.parameters.detail);
            return e.copy(this), e
        }, a.OctahedronGeometry = function(e, t) {
            var r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
                n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
            a.PolyhedronGeometry.call(this, r, n, e, t), this.type = "OctahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        }, a.OctahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype), a.OctahedronGeometry.prototype.constructor = a.OctahedronGeometry, a.OctahedronGeometry.prototype.clone = function() {
            var e = new a.OctahedronGeometry(this.parameters.radius, this.parameters.detail);
            return e.copy(this), e
        }, a.TetrahedronGeometry = function(e, t) {
            var r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
                n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
            a.PolyhedronGeometry.call(this, r, n, e, t), this.type = "TetrahedronGeometry", this.parameters = {
                radius: e,
                detail: t
            }
        }, a.TetrahedronGeometry.prototype = Object.create(a.PolyhedronGeometry.prototype), a.TetrahedronGeometry.prototype.constructor = a.TetrahedronGeometry, a.TetrahedronGeometry.prototype.clone = function() {
            var e = new a.TetrahedronGeometry(this.parameters.radius, this.parameters.detail);
            return e.copy(this), e
        }, a.ParametricGeometry = function(e, t, r) {
            a.Geometry.call(this), this.type = "ParametricGeometry", this.parameters = {
                func: e,
                slices: t,
                stacks: r
            };
            var n, i, o, s, u, h = this.vertices,
                c = this.faces,
                l = this.faceVertexUvs[0],
                p = t + 1;
            for (n = 0; r >= n; n++)
                for (u = n / r, i = 0; t >= i; i++) s = i / t, o = e(s, u), h.push(o);
            var d, f, m, v, g, y, x, b;
            for (n = 0; r > n; n++)
                for (i = 0; t > i; i++) d = n * p + i, f = n * p + i + 1, m = (n + 1) * p + i + 1, v = (n + 1) * p + i, g = new a.Vector2(i / t, n / r), y = new a.Vector2((i + 1) / t, n / r), x = new a.Vector2((i + 1) / t, (n + 1) / r), b = new a.Vector2(i / t, (n + 1) / r), c.push(new a.Face3(d, f, v)), l.push([g, y, b]), c.push(new a.Face3(f, m, v)), l.push([y.clone(), x, b.clone()]);
            this.computeFaceNormals(), this.computeVertexNormals()
        }, a.ParametricGeometry.prototype = Object.create(a.Geometry.prototype), a.ParametricGeometry.prototype.constructor = a.ParametricGeometry, a.WireframeGeometry = function(e) {
            a.BufferGeometry.call(this);
            var t = [0, 0],
                r = {},
                n = function(e, t) {
                    return e - t
                },
                i = ["a", "b", "c"];
            if (e instanceof a.Geometry) {
                for (var o = e.vertices, s = e.faces, u = 0, h = new Uint32Array(6 * s.length), c = 0, l = s.length; l > c; c++)
                    for (var p = s[c], d = 0; 3 > d; d++) {
                        t[0] = p[i[d]], t[1] = p[i[(d + 1) % 3]], t.sort(n);
                        var f = t.toString();
                        void 0 === r[f] && (h[2 * u] = t[0], h[2 * u + 1] = t[1], r[f] = !0, u++)
                    }
                for (var m = new Float32Array(2 * u * 3), c = 0, l = u; l > c; c++)
                    for (var d = 0; 2 > d; d++) {
                        var v = o[h[2 * c + d]],
                            g = 6 * c + 3 * d;
                        m[g + 0] = v.x, m[g + 1] = v.y, m[g + 2] = v.z
                    }
                this.addAttribute("position", new a.BufferAttribute(m, 3))
            } else if (e instanceof a.BufferGeometry)
                if (null !== e.index) {
                    var y = e.index.array,
                        o = e.attributes.position,
                        x = e.drawcalls,
                        u = 0;
                    0 === x.length && e.addDrawCall(0, y.length);
                    for (var h = new Uint32Array(2 * y.length), b = 0, M = x.length; M > b; ++b)
                        for (var w = x[b], _ = w.start, E = w.count, c = _, S = _ + E; S > c; c += 3)
                            for (var d = 0; 3 > d; d++) {
                                t[0] = y[c + d], t[1] = y[c + (d + 1) % 3], t.sort(n);
                                var f = t.toString();
                                void 0 === r[f] && (h[2 * u] = t[0], h[2 * u + 1] = t[1], r[f] = !0, u++)
                            }
                    for (var m = new Float32Array(2 * u * 3), c = 0, l = u; l > c; c++)
                        for (var d = 0; 2 > d; d++) {
                            var g = 6 * c + 3 * d,
                                C = h[2 * c + d];
                            m[g + 0] = o.getX(C), m[g + 1] = o.getY(C), m[g + 2] = o.getZ(C)
                        }
                    this.addAttribute("position", new a.BufferAttribute(m, 3))
                } else {
                    for (var o = e.attributes.position.array, u = o.length / 3, T = u / 3, m = new Float32Array(2 * u * 3), c = 0, l = T; l > c; c++)
                        for (var d = 0; 3 > d; d++) {
                            var g = 18 * c + 6 * d,
                                A = 9 * c + 3 * d;
                            m[g + 0] = o[A], m[g + 1] = o[A + 1], m[g + 2] = o[A + 2];
                            var C = 9 * c + 3 * ((d + 1) % 3);
                            m[g + 3] = o[C], m[g + 4] = o[C + 1], m[g + 5] = o[C + 2]
                        }
                    this.addAttribute("position", new a.BufferAttribute(m, 3))
                }
        }, a.WireframeGeometry.prototype = Object.create(a.BufferGeometry.prototype), a.WireframeGeometry.prototype.constructor = a.WireframeGeometry, a.AxisHelper = function(e) {
            e = e || 1;
            var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
                r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]),
                n = new a.BufferGeometry;
            n.addAttribute("position", new a.BufferAttribute(t, 3)), n.addAttribute("color", new a.BufferAttribute(r, 3));
            var i = new a.LineBasicMaterial({
                vertexColors: a.VertexColors
            });
            a.LineSegments.call(this, n, i)
        }, a.AxisHelper.prototype = Object.create(a.LineSegments.prototype), a.AxisHelper.prototype.constructor = a.AxisHelper, a.ArrowHelper = function() {
            var e = new a.Geometry;
            e.vertices.push(new a.Vector3(0, 0, 0), new a.Vector3(0, 1, 0));
            var t = new a.CylinderGeometry(0, .5, 1, 5, 1);
            return t.translate(0, -.5, 0),
                function(r, n, i, o, s, u) {
                    a.Object3D.call(this), void 0 === o && (o = 16776960), void 0 === i && (i = 1), void 0 === s && (s = .2 * i), void 0 === u && (u = .2 * s), this.position.copy(n), i > s && (this.line = new a.Line(e, new a.LineBasicMaterial({
                        color: o
                    })), this.line.matrixAutoUpdate = !1, this.add(this.line)), this.cone = new a.Mesh(t, new a.MeshBasicMaterial({
                        color: o
                    })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(r), this.setLength(i, s, u)
                }
        }(), a.ArrowHelper.prototype = Object.create(a.Object3D.prototype), a.ArrowHelper.prototype.constructor = a.ArrowHelper, a.ArrowHelper.prototype.setDirection = function() {
            var e, t = new a.Vector3;
            return function(r) {
                r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(), e = Math.acos(r.y), this.quaternion.setFromAxisAngle(t, e))
            }
        }(), a.ArrowHelper.prototype.setLength = function(e, t, r) {
            void 0 === t && (t = .2 * e), void 0 === r && (r = .2 * t), e > t && (this.line.scale.set(1, e - t, 1), this.line.updateMatrix()), this.cone.scale.set(r, t, r), this.cone.position.y = e, this.cone.updateMatrix()
        }, a.ArrowHelper.prototype.setColor = function(e) {
            void 0 !== this.line && this.line.material.color.set(e), this.cone.material.color.set(e)
        }, a.BoxHelper = function(e) {
            var t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
                r = new Float32Array(24),
                n = new a.BufferGeometry;
            n.setIndex(new a.BufferAttribute(t, 1)), n.addAttribute("position", new a.BufferAttribute(r, 3)), a.LineSegments.call(this, n, new a.LineBasicMaterial({
                color: 16776960
            })), void 0 !== e && this.update(e)
        }, a.BoxHelper.prototype = Object.create(a.LineSegments.prototype), a.BoxHelper.prototype.constructor = a.BoxHelper, a.BoxHelper.prototype.update = function() {
            var e = new a.Box3;
            return function(t) {
                if (e.setFromObject(t), !e.empty()) {
                    var r = e.min,
                        n = e.max,
                        i = this.geometry.attributes.position,
                        o = i.array;
                    o[0] = n.x, o[1] = n.y, o[2] = n.z, o[3] = r.x, o[4] = n.y, o[5] = n.z, o[6] = r.x, o[7] = r.y, o[8] = n.z, o[9] = n.x, o[10] = r.y, o[11] = n.z, o[12] = n.x, o[13] = n.y, o[14] = r.z, o[15] = r.x, o[16] = n.y, o[17] = r.z, o[18] = r.x, o[19] = r.y, o[20] = r.z, o[21] = n.x, o[22] = r.y, o[23] = r.z, i.needsUpdate = !0, this.geometry.computeBoundingSphere()
                }
            }
        }(), a.BoundingBoxHelper = function(e, t) {
            var r = void 0 !== t ? t : 8947848;
            this.object = e, this.box = new a.Box3, a.Mesh.call(this, new a.BoxGeometry(1, 1, 1), new a.MeshBasicMaterial({
                color: r,
                wireframe: !0
            }))
        }, a.BoundingBoxHelper.prototype = Object.create(a.Mesh.prototype), a.BoundingBoxHelper.prototype.constructor = a.BoundingBoxHelper, a.BoundingBoxHelper.prototype.update = function() {
            this.box.setFromObject(this.object), this.box.size(this.scale), this.box.center(this.position)
        }, a.CameraHelper = function(e) {
            function t(e, t, n) {
                r(e, n), r(t, n)
            }

            function r(e, t) {
                n.vertices.push(new a.Vector3), n.colors.push(new a.Color(t)), void 0 === o[e] && (o[e] = []), o[e].push(n.vertices.length - 1)
            }
            var n = new a.Geometry,
                i = new a.LineBasicMaterial({
                    color: 16777215,
                    vertexColors: a.FaceColors
                }),
                o = {},
                s = 16755200,
                u = 16711680,
                h = 43775,
                c = 16777215,
                l = 3355443;
            t("n1", "n2", s), t("n2", "n4", s), t("n4", "n3", s), t("n3", "n1", s), t("f1", "f2", s), t("f2", "f4", s), t("f4", "f3", s), t("f3", "f1", s), t("n1", "f1", s), t("n2", "f2", s), t("n3", "f3", s), t("n4", "f4", s), t("p", "n1", u), t("p", "n2", u), t("p", "n3", u), t("p", "n4", u), t("u1", "u2", h), t("u2", "u3", h), t("u3", "u1", h), t("c", "t", c), t("p", "c", l), t("cn1", "cn2", l), t("cn3", "cn4", l), t("cf1", "cf2", l), t("cf3", "cf4", l), a.LineSegments.call(this, n, i), this.camera = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = o, this.update()
        }, a.CameraHelper.prototype = Object.create(a.LineSegments.prototype), a.CameraHelper.prototype.constructor = a.CameraHelper, a.CameraHelper.prototype.update = function() {
            var e, t, r = new a.Vector3,
                n = new a.Camera,
                i = function(i, o, a, s) {
                    r.set(o, a, s).unproject(n);
                    var u = t[i];
                    if (void 0 !== u)
                        for (var h = 0, c = u.length; c > h; h++) e.vertices[u[h]].copy(r)
                };
            return function() {
                e = this.geometry, t = this.pointMap;
                var r = 1,
                    o = 1;
                n.projectionMatrix.copy(this.camera.projectionMatrix), i("c", 0, 0, -1), i("t", 0, 0, 1), i("n1", -r, -o, -1), i("n2", r, -o, -1), i("n3", -r, o, -1), i("n4", r, o, -1), i("f1", -r, -o, 1), i("f2", r, -o, 1), i("f3", -r, o, 1), i("f4", r, o, 1), i("u1", .7 * r, 1.1 * o, -1), i("u2", .7 * -r, 1.1 * o, -1), i("u3", 0, 2 * o, -1), i("cf1", -r, 0, 1), i("cf2", r, 0, 1), i("cf3", 0, -o, 1), i("cf4", 0, o, 1), i("cn1", -r, 0, -1), i("cn2", r, 0, -1), i("cn3", 0, -o, -1), i("cn4", 0, o, -1), e.verticesNeedUpdate = !0
            }
        }(), a.DirectionalLightHelper = function(e, t) {
            a.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, t = t || 1;
            var r = new a.Geometry;
            r.vertices.push(new a.Vector3(-t, t, 0), new a.Vector3(t, t, 0), new a.Vector3(t, -t, 0), new a.Vector3(-t, -t, 0), new a.Vector3(-t, t, 0));
            var n = new a.LineBasicMaterial({
                fog: !1
            });
            n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.lightPlane = new a.Line(r, n), this.add(this.lightPlane), r = new a.Geometry, r.vertices.push(new a.Vector3, new a.Vector3), n = new a.LineBasicMaterial({
                fog: !1
            }), n.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine = new a.Line(r, n), this.add(this.targetLine), this.update()
        }, a.DirectionalLightHelper.prototype = Object.create(a.Object3D.prototype), a.DirectionalLightHelper.prototype.constructor = a.DirectionalLightHelper, a.DirectionalLightHelper.prototype.dispose = function() {
            this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
        }, a.DirectionalLightHelper.prototype.update = function() {
            var e = new a.Vector3,
                t = new a.Vector3,
                r = new a.Vector3;
            return function() {
                e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), r.subVectors(t, e), this.lightPlane.lookAt(r), this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity), this.targetLine.geometry.vertices[1].copy(r), this.targetLine.geometry.verticesNeedUpdate = !0, this.targetLine.material.color.copy(this.lightPlane.material.color)
            }
        }(), a.EdgesHelper = function(e, t, r) {
            var n = void 0 !== t ? t : 16777215;
            a.LineSegments.call(this, new a.EdgesGeometry(e.geometry, r), new a.LineBasicMaterial({
                color: n
            })), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
        }, a.EdgesHelper.prototype = Object.create(a.LineSegments.prototype), a.EdgesHelper.prototype.constructor = a.EdgesHelper, a.FaceNormalsHelper = function(e, t, r, n) {
            this.object = e, this.size = void 0 !== t ? t : 1;
            var i = void 0 !== r ? r : 16776960,
                o = void 0 !== n ? n : 1,
                s = 0,
                u = this.object.geometry;
            u instanceof a.Geometry ? s = u.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
            var h = new a.BufferGeometry,
                c = new a.Float32Attribute(2 * s * 3, 3);
            h.addAttribute("position", c), a.LineSegments.call(this, h, new a.LineBasicMaterial({
                color: i,
                linewidth: o
            })), this.matrixAutoUpdate = !1, this.update()
        }, a.FaceNormalsHelper.prototype = Object.create(a.LineSegments.prototype), a.FaceNormalsHelper.prototype.constructor = a.FaceNormalsHelper, a.FaceNormalsHelper.prototype.update = function() {
            var e = new a.Vector3,
                t = new a.Vector3,
                r = new a.Matrix3;
            return function() {
                this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
                for (var n = this.object.matrixWorld, i = this.geometry.attributes.position, o = this.object.geometry, a = o.vertices, s = o.faces, u = 0, h = 0, c = s.length; c > h; h++) {
                    var l = s[h],
                        p = l.normal;
                    e.copy(a[l.a]).add(a[l.b]).add(a[l.c]).divideScalar(3).applyMatrix4(n), t.copy(p).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), i.setXYZ(u, e.x, e.y, e.z), u += 1, i.setXYZ(u, t.x, t.y, t.z), u += 1
                }
                return i.needsUpdate = !0, this
            }
        }(), a.GridHelper = function(e, t) {
            var r = new a.Geometry,
                n = new a.LineBasicMaterial({
                    vertexColors: a.VertexColors
                });
            this.color1 = new a.Color(4473924), this.color2 = new a.Color(8947848);
            for (var i = -e; e >= i; i += t) {
                r.vertices.push(new a.Vector3(-e, 0, i), new a.Vector3(e, 0, i), new a.Vector3(i, 0, -e), new a.Vector3(i, 0, e));
                var o = 0 === i ? this.color1 : this.color2;
                r.colors.push(o, o, o, o)
            }
            a.LineSegments.call(this, r, n)
        }, a.GridHelper.prototype = Object.create(a.LineSegments.prototype), a.GridHelper.prototype.constructor = a.GridHelper, a.GridHelper.prototype.setColors = function(e, t) {
            this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0
        }, a.HemisphereLightHelper = function(e, t) {
            a.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.colors = [new a.Color, new a.Color];
            var r = new a.SphereGeometry(t, 4, 2);
            r.rotateX(-Math.PI / 2);
            for (var n = 0, i = 8; i > n; n++) r.faces[n].color = this.colors[4 > n ? 0 : 1];
            var o = new a.MeshBasicMaterial({
                vertexColors: a.FaceColors,
                wireframe: !0
            });
            this.lightSphere = new a.Mesh(r, o), this.add(this.lightSphere), this.update()
        }, a.HemisphereLightHelper.prototype = Object.create(a.Object3D.prototype), a.HemisphereLightHelper.prototype.constructor = a.HemisphereLightHelper, a.HemisphereLightHelper.prototype.dispose = function() {
            this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose()
        }, a.HemisphereLightHelper.prototype.update = function() {
            var e = new a.Vector3;
            return function() {
                this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity), this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity), this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()), this.lightSphere.geometry.colorsNeedUpdate = !0
            }
        }(), a.PointLightHelper = function(e, t) {
            this.light = e, this.light.updateMatrixWorld();
            var r = new a.SphereGeometry(t, 4, 2),
                n = new a.MeshBasicMaterial({
                    wireframe: !0,
                    fog: !1
                });
            n.color.copy(this.light.color).multiplyScalar(this.light.intensity), a.Mesh.call(this, r, n), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
        }, a.PointLightHelper.prototype = Object.create(a.Mesh.prototype), a.PointLightHelper.prototype.constructor = a.PointLightHelper, a.PointLightHelper.prototype.dispose = function() {
            this.geometry.dispose(), this.material.dispose()
        }, a.PointLightHelper.prototype.update = function() {
            this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }, a.SkeletonHelper = function(e) {
            this.bones = this.getBoneList(e);
            for (var t = new a.Geometry, r = 0; r < this.bones.length; r++) {
                var n = this.bones[r];
                n.parent instanceof a.Bone && (t.vertices.push(new a.Vector3), t.vertices.push(new a.Vector3), t.colors.push(new a.Color(0, 0, 1)), t.colors.push(new a.Color(0, 1, 0)))
            }
            t.dynamic = !0;
            var i = new a.LineBasicMaterial({
                vertexColors: a.VertexColors,
                depthTest: !1,
                depthWrite: !1,
                transparent: !0
            });
            a.LineSegments.call(this, t, i), this.root = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1, this.update()
        }, a.SkeletonHelper.prototype = Object.create(a.LineSegments.prototype), a.SkeletonHelper.prototype.constructor = a.SkeletonHelper, a.SkeletonHelper.prototype.getBoneList = function(e) {
            var t = [];
            e instanceof a.Bone && t.push(e);
            for (var r = 0; r < e.children.length; r++) t.push.apply(t, this.getBoneList(e.children[r]));
            return t
        }, a.SkeletonHelper.prototype.update = function() {
            for (var e = this.geometry, t = (new a.Matrix4).getInverse(this.root.matrixWorld), r = new a.Matrix4, n = 0, i = 0; i < this.bones.length; i++) {
                var o = this.bones[i];
                o.parent instanceof a.Bone && (r.multiplyMatrices(t, o.matrixWorld), e.vertices[n].setFromMatrixPosition(r), r.multiplyMatrices(t, o.parent.matrixWorld), e.vertices[n + 1].setFromMatrixPosition(r), n += 2)
            }
            e.verticesNeedUpdate = !0, e.computeBoundingSphere()
        }, a.SpotLightHelper = function(e) {
            a.Object3D.call(this), this.light = e, this.light.updateMatrixWorld(), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1;
            var t = new a.CylinderGeometry(0, 1, 1, 8, 1, !0);
            t.translate(0, -.5, 0), t.rotateX(-Math.PI / 2);
            var r = new a.MeshBasicMaterial({
                wireframe: !0,
                fog: !1
            });
            this.cone = new a.Mesh(t, r), this.add(this.cone), this.update()
        }, a.SpotLightHelper.prototype = Object.create(a.Object3D.prototype), a.SpotLightHelper.prototype.constructor = a.SpotLightHelper, a.SpotLightHelper.prototype.dispose = function() {
            this.cone.geometry.dispose(), this.cone.material.dispose()
        }, a.SpotLightHelper.prototype.update = function() {
            var e = new a.Vector3,
                t = new a.Vector3;
            return function() {
                var r = this.light.distance ? this.light.distance : 1e4,
                    n = r * Math.tan(this.light.angle);
                this.cone.scale.set(n, n, r), e.setFromMatrixPosition(this.light.matrixWorld), t.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(t.sub(e)), this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
            }
        }(), a.VertexNormalsHelper = function(e, t, r, n) {
            this.object = e, this.size = void 0 !== t ? t : 1;
            var i = void 0 !== r ? r : 16711680,
                o = void 0 !== n ? n : 1,
                s = 0,
                u = this.object.geometry;
            u instanceof a.Geometry ? s = 3 * u.faces.length : u instanceof a.BufferGeometry && (s = u.attributes.normal.count);
            var h = new a.BufferGeometry,
                c = new a.Float32Attribute(2 * s * 3, 3);
            h.addAttribute("position", c), a.LineSegments.call(this, h, new a.LineBasicMaterial({
                color: i,
                linewidth: o
            })), this.matrixAutoUpdate = !1, this.update()
        }, a.VertexNormalsHelper.prototype = Object.create(a.LineSegments.prototype), a.VertexNormalsHelper.prototype.constructor = a.VertexNormalsHelper, a.VertexNormalsHelper.prototype.update = function() {
            var e = new a.Vector3,
                t = new a.Vector3,
                r = new a.Matrix3;
            return function() {
                var n = ["a", "b", "c"];
                this.object.updateMatrixWorld(!0), r.getNormalMatrix(this.object.matrixWorld);
                var i = this.object.matrixWorld,
                    o = this.geometry.attributes.position,
                    s = this.object.geometry;
                if (s instanceof a.Geometry)
                    for (var u = s.vertices, h = s.faces, c = 0, l = 0, p = h.length; p > l; l++)
                        for (var d = h[l], f = 0, m = d.vertexNormals.length; m > f; f++) {
                            var v = u[d[n[f]]],
                                g = d.vertexNormals[f];
                            e.copy(v).applyMatrix4(i), t.copy(g).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), o.setXYZ(c, e.x, e.y, e.z), c += 1, o.setXYZ(c, t.x, t.y, t.z), c += 1
                        } else if (s instanceof a.BufferGeometry)
                            for (var y = s.attributes.position, x = s.attributes.normal, c = 0, f = 0, m = y.count; m > f; f++) e.set(y.getX(f), y.getY(f), y.getZ(f)).applyMatrix4(i), t.set(x.getX(f), x.getY(f), x.getZ(f)), t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e), o.setXYZ(c, e.x, e.y, e.z), c += 1, o.setXYZ(c, t.x, t.y, t.z), c += 1;
                return o.needsUpdate = !0, this
            }
        }(), a.WireframeHelper = function(e, t) {
            var r = void 0 !== t ? t : 16777215;
            a.LineSegments.call(this, new a.WireframeGeometry(e.geometry), new a.LineBasicMaterial({
                color: r
            })), this.matrix = e.matrixWorld, this.matrixAutoUpdate = !1
        }, a.WireframeHelper.prototype = Object.create(a.LineSegments.prototype), a.WireframeHelper.prototype.constructor = a.WireframeHelper, a.ImmediateRenderObject = function() {
            a.Object3D.call(this), this.render = function(e) {}
        }, a.ImmediateRenderObject.prototype = Object.create(a.Object3D.prototype), a.ImmediateRenderObject.prototype.constructor = a.ImmediateRenderObject, a.MorphBlendMesh = function(e, t) {
            a.Mesh.call(this, e, t), this.animationsMap = {}, this.animationsList = [];
            var r = this.geometry.morphTargets.length,
                n = "__default",
                i = 0,
                o = r - 1,
                s = r / 1;
            this.createAnimation(n, i, o, s), this.setAnimationWeight(n, 1)
        }, a.MorphBlendMesh.prototype = Object.create(a.Mesh.prototype), a.MorphBlendMesh.prototype.constructor = a.MorphBlendMesh, a.MorphBlendMesh.prototype.createAnimation = function(e, t, r, n) {
            var i = {
                start: t,
                end: r,
                length: r - t + 1,
                fps: n,
                duration: (r - t) / n,
                lastFrame: 0,
                currentFrame: 0,
                active: !1,
                time: 0,
                direction: 1,
                weight: 1,
                directionBackwards: !1,
                mirroredLoop: !1
            };
            this.animationsMap[e] = i, this.animationsList.push(i)
        }, a.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
            for (var t, r = /([a-z]+)_?(\d+)/, n = {}, i = this.geometry, o = 0, a = i.morphTargets.length; a > o; o++) {
                var s = i.morphTargets[o],
                    u = s.name.match(r);
                if (u && u.length > 1) {
                    var h = u[1];
                    n[h] || (n[h] = {
                        start: 1 / 0,
                        end: -(1 / 0)
                    });
                    var c = n[h];
                    o < c.start && (c.start = o), o > c.end && (c.end = o), t || (t = h)
                }
            }
            for (var h in n) {
                var c = n[h];
                this.createAnimation(h, c.start, c.end, e)
            }
            this.firstAnimation = t
        }, a.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) {
            var t = this.animationsMap[e];
            t && (t.direction = 1, t.directionBackwards = !1)
        }, a.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) {
            var t = this.animationsMap[e];
            t && (t.direction = -1, t.directionBackwards = !0)
        }, a.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
            var r = this.animationsMap[e];
            r && (r.fps = t, r.duration = (r.end - r.start) / r.fps)
        }, a.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
            var r = this.animationsMap[e];
            r && (r.duration = t, r.fps = (r.end - r.start) / r.duration)
        }, a.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
            var r = this.animationsMap[e];
            r && (r.weight = t)
        }, a.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
            var r = this.animationsMap[e];
            r && (r.time = t)
        }, a.MorphBlendMesh.prototype.getAnimationTime = function(e) {
            var t = 0,
                r = this.animationsMap[e];
            return r && (t = r.time), t
        }, a.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
            var t = -1,
                r = this.animationsMap[e];
            return r && (t = r.duration), t
        }, a.MorphBlendMesh.prototype.playAnimation = function(e) {
            var t = this.animationsMap[e];
            t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
        }, a.MorphBlendMesh.prototype.stopAnimation = function(e) {
            var t = this.animationsMap[e];
            t && (t.active = !1)
        }, a.MorphBlendMesh.prototype.update = function(e) {
            for (var t = 0, r = this.animationsList.length; r > t; t++) {
                var n = this.animationsList[t];
                if (n.active) {
                    var i = n.duration / n.length;
                    n.time += n.direction * e, n.mirroredLoop ? (n.time > n.duration || n.time < 0) && (n.direction *= -1, n.time > n.duration && (n.time = n.duration, n.directionBackwards = !0), n.time < 0 && (n.time = 0, n.directionBackwards = !1)) : (n.time = n.time % n.duration, n.time < 0 && (n.time += n.duration));
                    var o = n.start + a.Math.clamp(Math.floor(n.time / i), 0, n.length - 1),
                        s = n.weight;
                    o !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0, this.morphTargetInfluences[n.currentFrame] = 1 * s, this.morphTargetInfluences[o] = 0, n.lastFrame = n.currentFrame, n.currentFrame = o);
                    var u = n.time % i / i;
                    n.directionBackwards && (u = 1 - u), n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = u * s, this.morphTargetInfluences[n.lastFrame] = (1 - u) * s) : this.morphTargetInfluences[n.currentFrame] = s
                }
            }
        }, "undefined" != typeof e && e.exports && (t = e.exports = a), t.THREE = a
}]);
//# sourceMappingURL=react-bundle.js.map