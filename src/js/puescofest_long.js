if (function(t, e) {
    function n(t) {
        var e = t.length,
            n = lt.type(t);
        return !lt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || "function" !== n && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)))
    }

    function i(t) {
        var e = Ct[t] = {};
        return lt.each(t.match(ut) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function o(t, n, i, o) {
        if (lt.acceptData(t)) {
            var r, a, s = lt.expando,
                l = "string" == typeof n,
                c = t.nodeType,
                u = c ? lt.cache : t,
                d = c ? t[s] : t[s] && s;
            if (d && u[d] && (o || u[d].data) || !l || i !== e) return d || (c ? t[s] = d = G.pop() || lt.guid++ : d = s), u[d] || (u[d] = {}, c || (u[d].toJSON = lt.noop)), "object" != typeof n && "function" != typeof n || (o ? u[d] = lt.extend(u[d], n) : u[d].data = lt.extend(u[d].data, n)), r = u[d], o || (r.data || (r.data = {}), r = r.data), i !== e && (r[lt.camelCase(n)] = i), l ? null == (a = r[n]) && (a = r[lt.camelCase(n)]) : a = r, a
        }
    }

    function r(t, e, n) {
        if (lt.acceptData(t)) {
            var i, o, r, a = t.nodeType,
                l = a ? lt.cache : t,
                c = a ? t[lt.expando] : lt.expando;
            if (l[c]) {
                if (e && (r = n ? l[c] : l[c].data)) {
                    lt.isArray(e) ? e = e.concat(lt.map(e, lt.camelCase)) : e in r ? e = [e] : (e = lt.camelCase(e), e = e in r ? [e] : e.split(" "));
                    for (i = 0, o = e.length; i < o; i++) delete r[e[i]];
                    if (!(n ? s : lt.isEmptyObject)(r)) return
                }(n || (delete l[c].data, s(l[c]))) && (a ? lt.cleanData([t], !0) : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
            }
        }
    }

    function a(t, n, i) {
        if (i === e && 1 === t.nodeType) {
            var o = "data-" + n.replace(St, "-$1").toLowerCase();
            if ("string" == typeof(i = t.getAttribute(o))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : kt.test(i) ? lt.parseJSON(i) : i)
                } catch (t) {}
                lt.data(t, n, i)
            } else i = e
        }
        return i
    }

    function s(t) {
        var e;
        for (e in t)
            if (("data" !== e || !lt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function c() {
        return !1
    }

    function u(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function d(t, e, n) {
        if (e = e || 0, lt.isFunction(e)) return lt.grep(t, function(t, i) {
            return !!e.call(t, i, t) === n
        });
        if (e.nodeType) return lt.grep(t, function(t) {
            return t === e === n
        });
        if ("string" == typeof e) {
            var i = lt.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (zt.test(e)) return lt.filter(e, i, !n);
            e = lt.filter(e, i)
        }
        return lt.grep(t, function(t) {
            return lt.inArray(t, e) >= 0 === n
        })
    }

    function p(t) {
        var e = Qt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function f(t, e) {
        return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e))
    }

    function h(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type, t
    }

    function m(t) {
        var e = oe.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function g(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) lt._data(n, "globalEval", !e || lt._data(e[i], "globalEval"))
    }

    function v(t, e) {
        if (1 === e.nodeType && lt.hasData(t)) {
            var n, i, o, r = lt._data(t),
                a = lt._data(e, r),
                s = r.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)
                    for (i = 0, o = s[n].length; i < o; i++) lt.event.add(e, n, s[n][i])
            }
            a.data && (a.data = lt.extend({}, a.data))
        }
    }

    function y(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !lt.support.noCloneEvent && e[lt.expando]) {
                o = lt._data(e);
                for (i in o.events) lt.removeEvent(e, i, o.handle);
                e.removeAttribute(lt.expando)
            }
            "script" === n && e.text !== t.text ? (h(e).text = t.text, m(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), lt.support.html5Clone && t.innerHTML && !lt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function b(t, n) {
        var i, o, r = 0,
            a = typeof t.getElementsByTagName !== X ? t.getElementsByTagName(n || "*") : typeof t.querySelectorAll !== X ? t.querySelectorAll(n || "*") : e;
        if (!a)
            for (a = [], i = t.childNodes || t; null != (o = i[r]); r++) !n || lt.nodeName(o, n) ? a.push(o) : lt.merge(a, b(o, n));
        return n === e || n && lt.nodeName(t, n) ? lt.merge([t], a) : a
    }

    function w(t) {
        ee.test(t.type) && (t.defaultChecked = t.checked)
    }

    function x(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = ke.length; o--;)
            if ((e = ke[o] + n) in t) return e;
        return i
    }

    function T(t, e) {
        return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
    }

    function C(t, e) {
        for (var n, i, o, r = [], a = 0, s = t.length; a < s; a++) i = t[a], i.style && (r[a] = lt._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && T(i) && (r[a] = lt._data(i, "olddisplay", N(i.nodeName)))) : r[a] || (o = T(i), (n && "none" !== n || !o) && lt._data(i, "olddisplay", o ? n : lt.css(i, "display"))));
        for (a = 0; a < s; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
        return t
    }

    function k(t, e, n) {
        var i = ve.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function S(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += lt.css(t, n + Ce[r], !0, o)), i ? ("content" === n && (a -= lt.css(t, "padding" + Ce[r], !0, o)), "margin" !== n && (a -= lt.css(t, "border" + Ce[r] + "Width", !0, o))) : (a += lt.css(t, "padding" + Ce[r], !0, o), "padding" !== n && (a += lt.css(t, "border" + Ce[r] + "Width", !0, o)));
        return a
    }

    function E(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = ue(t),
            a = lt.support.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (o = de(t, e, r), (o < 0 || null == o) && (o = t.style[e]), ye.test(o)) return o;
            i = a && (lt.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + S(t, e, n || (a ? "border" : "content"), i, r) + "px"
    }

    function N(t) {
        var e = V,
            n = we[t];
        return n || (n = A(t, e), "none" !== n && n || (ce = (ce || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (ce[0].contentWindow || ce[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), n = A(t, e), ce.detach()), we[t] = n), n
    }

    function A(t, e) {
        var n = lt(e.createElement(t)).appendTo(e.body),
            i = lt.css(n[0], "display");
        return n.remove(), i
    }

    function D(t, e, n, i) {
        var o;
        if (lt.isArray(e)) lt.each(e, function(e, o) {
            n || Ee.test(t) ? i(t, o) : D(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== lt.type(e)) i(t, e);
        else
            for (o in e) D(t + "[" + o + "]", e[o], n, i)
    }

    function $(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                r = e.toLowerCase().match(ut) || [];
            if (lt.isFunction(n))
                for (; i = r[o++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function I(t, e, n, i) {
        function o(s) {
            var l;
            return r[s] = !0, lt.each(t[s] || [], function(t, s) {
                var c = s(e, n, i);
                return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var r = {},
            a = t === ze;
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }

    function j(t, n) {
        var i, o, r = lt.ajaxSettings.flatOptions || {};
        for (o in n) n[o] !== e && ((r[o] ? t : i || (i = {}))[o] = n[o]);
        return i && lt.extend(!0, t, i), t
    }

    function O(t, n, i) {
        var o, r, a, s, l = t.contents,
            c = t.dataTypes,
            u = t.responseFields;
        for (s in u) s in i && (n[u[s]] = i[s]);
        for (;
            "*" === c[0];) c.shift(), r === e && (r = t.mimeType || n.getResponseHeader("Content-Type"));
        if (r)
            for (s in l)
                if (l[s] && l[s].test(r)) {
                    c.unshift(s);
                    break
                }
        if (c[0] in i) a = c[0];
        else {
            for (s in i) {
                if (!c[0] || t.converters[s + " " + c[0]]) {
                    a = s;
                    break
                }
                o || (o = s)
            }
            a = a || o
        }
        if (a) return a !== c[0] && c.unshift(a), i[a]
    }

    function M(t, e) {
        var n, i, o, r, a = {},
            s = 0,
            l = t.dataTypes.slice(),
            c = l[0];
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
            for (o in t.converters) a[o.toLowerCase()] = t.converters[o];
        for (; i = l[++s];)
            if ("*" !== i) {
                if ("*" !== c && c !== i) {
                    if (!(o = a[c + " " + i] || a["* " + i]))
                        for (n in a)
                            if (r = n.split(" "), r[1] === i && (o = a[c + " " + r[0]] || a["* " + r[0]])) {
                                o === !0 ? o = a[n] : a[n] !== !0 && (i = r[0], l.splice(s--, 0, i));
                                break
                            }
                    if (o !== !0)
                        if (o && t["throws"]) e = o(e);
                        else try {
                            e = o(e)
                        } catch (t) {
                            return {
                                state: "parsererror",
                                error: o ? t : "No conversion from " + c + " to " + i
                            }
                        }
                }
                c = i
            }
        return {
            state: "success",
            data: e
        }
    }

    function F() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    }

    function L() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function P() {
        return setTimeout(function() {
            Je = e
        }), Je = lt.now()
    }

    function H(t, e) {
        lt.each(e, function(e, n) {
            for (var i = (on[e] || []).concat(on["*"]), o = 0, r = i.length; o < r; o++)
                if (i[o].call(t, e, n)) return
        })
    }

    function _(t, e, n) {
        var i, o, r = 0,
            a = nn.length,
            s = lt.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = Je || P(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                return s.notifyWith(t, [c, r, n]), r < 1 && l ? n : (s.resolveWith(t, [c]), !1)
            },
            c = s.promise({
                elem: t,
                props: lt.extend({}, e),
                opts: lt.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Je || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = lt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }),
            u = c.props;
        for (R(u, c.opts.specialEasing); r < a; r++)
            if (i = nn[r].call(c, t, u, c.opts)) return i;
        return H(c, u), lt.isFunction(c.opts.start) && c.opts.start.call(t, c), lt.fx.timer(lt.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function R(t, e) {
        var n, i, o, r, a;
        for (o in t)
            if (i = lt.camelCase(o), r = e[i], n = t[o], lt.isArray(n) && (r = n[1], n = t[o] = n[0]), o !== i && (t[i] = n, delete t[o]), (a = lt.cssHooks[i]) && "expand" in a) {
                n = a.expand(n), delete t[i];
                for (o in n) o in t || (t[o] = n[o], e[o] = r)
            } else e[i] = r
    }

    function B(t, e, n) {
        var i, o, r, a, s, l, c, u, d, p = this,
            f = t.style,
            h = {},
            m = [],
            g = t.nodeType && T(t);
        n.queue || (u = lt._queueHooks(t, "fx"), null == u.unqueued && (u.unqueued = 0, d = u.empty.fire, u.empty.fire = function() {
            u.unqueued || d()
        }), u.unqueued++, p.always(function() {
            p.always(function() {
                u.unqueued--, lt.queue(t, "fx").length || u.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === lt.css(t, "display") && "none" === lt.css(t, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", lt.support.shrinkWrapBlocks || p.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (o in e)
            if (a = e[o], Ge.exec(a)) {
                if (delete e[o], l = l || "toggle" === a, a === (g ? "hide" : "show")) continue;
                m.push(o)
            }
        if (r = m.length) {
            s = lt._data(t, "fxshow") || lt._data(t, "fxshow", {}), "hidden" in s && (g = s.hidden), l && (s.hidden = !g), g ? lt(t).show() : p.done(function() {
                lt(t).hide()
            }), p.done(function() {
                var e;
                lt._removeData(t, "fxshow");
                for (e in h) lt.style(t, e, h[e])
            });
            for (o = 0; o < r; o++) i = m[o], c = p.createTween(i, g ? s[i] : 0), h[i] = s[i] || lt.style(t, i), i in s || (s[i] = c.start, g && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function q(t, e, n, i, o) {
        return new q.prototype.init(t, e, n, i, o)
    }

    function z(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; o < 4; o += 2 - e) n = Ce[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function W(t) {
        return lt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var U, Q, X = typeof e,
        V = t.document,
        Y = t.location,
        K = t.jQuery,
        J = t.$,
        Z = {},
        G = [],
        tt = "1.9.1",
        et = G.concat,
        nt = G.push,
        it = G.slice,
        ot = G.indexOf,
        rt = Z.toString,
        at = Z.hasOwnProperty,
        st = tt.trim,
        lt = function(t, e) {
            return new lt.fn.init(t, e, Q)
        },
        ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ut = /\S+/g,
        dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ht = /^[\],:{}\s]*$/,
        mt = /(?:^|:|,)(?:\s*\[)+/g,
        gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        vt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        yt = /^-ms-/,
        bt = /-([\da-z])/gi,
        wt = function(t, e) {
            return e.toUpperCase()
        },
        xt = function(t) {
            (V.addEventListener || "load" === t.type || "complete" === V.readyState) && (Tt(), lt.ready())
        },
        Tt = function() {
            V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), t.removeEventListener("load", xt, !1)) : (V.detachEvent("onreadystatechange", xt), t.detachEvent("onload", xt))
        };
    lt.fn = lt.prototype = {
        jquery: tt,
        constructor: lt,
        init: function(t, n, i) {
            var o, r;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : pt.exec(t)) || !o[1] && n) return !n || n.jquery ? (n || i).find(t) : this.constructor(n).find(t);
                if (o[1]) {
                    if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(o[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), ft.test(o[1]) && lt.isPlainObject(n))
                        for (o in n) lt.isFunction(this[o]) ? this[o](n[o]) : this.attr(o, n[o]);
                    return this
                }
                if ((r = V.getElementById(o[2])) && r.parentNode) {
                    if (r.id !== o[2]) return i.find(t);
                    this.length = 1, this[0] = r
                }
                return this.context = V, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? i.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return it.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
        },
        pushStack: function(t) {
            var e = lt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return lt.each(this, t, e)
        },
        ready: function(t) {
            return lt.ready.promise().done(t), this
        },
        slice: function() {
            return this.pushStack(it.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        map: function(t) {
            return this.pushStack(lt.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: nt,
        sort: [].sort,
        splice: [].splice
    }, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function() {
        var t, n, i, o, r, a, s = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || lt.isFunction(s) || (s = {}), c === l && (s = this, --l); l < c; l++)
            if (null != (r = arguments[l]))
                for (o in r) t = s[o], i = r[o], s !== i && (u && i && (lt.isPlainObject(i) || (n = lt.isArray(i))) ? (n ? (n = !1, a = t && lt.isArray(t) ? t : []) : a = t && lt.isPlainObject(t) ? t : {}, s[o] = lt.extend(u, a, i)) : i !== e && (s[o] = i));
        return s
    }, lt.extend({
        noConflict: function(e) {
            return t.$ === lt && (t.$ = J), e && t.jQuery === lt && (t.jQuery = K), lt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? lt.readyWait++ : lt.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--lt.readyWait : !lt.isReady) {
                if (!V.body) return setTimeout(lt.ready);
                lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (U.resolveWith(V, [lt]), lt.fn.trigger && lt(V).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === lt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === lt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? Z[rt.call(t)] || "object" : typeof t
        },
        isPlainObject: function(t) {
            if (!t || "object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
            try {
                if (t.constructor && !at.call(t, "constructor") && !at.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            var n;
            for (n in t);
            return n === e || at.call(t, n)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function(t) {
            throw new Error(t)
        },
        parseHTML: function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || V;
            var i = ft.exec(t),
                o = !n && [];
            return i ? [e.createElement(i[1])] : (i = lt.buildFragment([t], e, o), o && lt(o).remove(), lt.merge([], i.childNodes))
        },
        parseJSON: function(e) {
            return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = lt.trim(e)) && ht.test(e.replace(gt, "@").replace(vt, "]").replace(mt, "")) ? new Function("return " + e)() : void lt.error("Invalid JSON: " + e)
        },
        parseXML: function(n) {
            var i, o;
            if (!n || "string" != typeof n) return null;
            try {
                t.DOMParser ? (o = new DOMParser, i = o.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch (t) {
                i = e
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n), i
        },
        noop: function() {},
        globalEval: function(e) {
            e && lt.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(yt, "ms-").replace(bt, wt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o = 0,
                r = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; o < r && e.apply(t[o], i) !== !1; o++);
                else
                    for (o in t)
                        if (e.apply(t[o], i) === !1) break
            } else if (a)
                for (; o < r && e.call(t[o], o, t[o]) !== !1; o++);
            else
                for (o in t)
                    if (e.call(t[o], o, t[o]) === !1) break; return t
        },
        trim: st && !st.call("\ufeff\xa0") ? function(t) {
            return null == t ? "" : st.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(dt, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? lt.merge(i, "string" == typeof t ? [t] : t) : nt.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (ot) return ot.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, n) {
            var i = n.length,
                o = t.length,
                r = 0;
            if ("number" == typeof i)
                for (; r < i; r++) t[o++] = n[r];
            else
                for (; n[r] !== e;) t[o++] = n[r++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            var i, o = [],
                r = 0,
                a = t.length;
            for (n = !!n; r < a; r++) i = !!e(t[r], r), n !== i && o.push(t[r]);
            return o
        },
        map: function(t, e, i) {
            var o, r = 0,
                a = t.length,
                s = n(t),
                l = [];
            if (s)
                for (; r < a; r++) null != (o = e(t[r], r, i)) && (l[l.length] = o);
            else
                for (r in t) null != (o = e(t[r], r, i)) && (l[l.length] = o);
            return et.apply([], l)
        },
        guid: 1,
        proxy: function(t, n) {
            var i, o, r;
            return "string" == typeof n && (r = t[n], n = t, t = r), lt.isFunction(t) ? (i = it.call(arguments, 2), o = function() {
                return t.apply(n || this, i.concat(it.call(arguments)))
            }, o.guid = t.guid = t.guid || lt.guid++, o) : e
        },
        access: function(t, n, i, o, r, a, s) {
            var l = 0,
                c = t.length,
                u = null == i;
            if ("object" === lt.type(i)) {
                r = !0;
                for (l in i) lt.access(t, n, l, i[l], !0, a, s)
            } else if (o !== e && (r = !0, lt.isFunction(o) || (s = !0), u && (s ? (n.call(t, o), n = null) : (u = n, n = function(t, e, n) {
                    return u.call(lt(t), n)
                })), n))
                for (; l < c; l++) n(t[l], i, s ? o : o.call(t[l], l, n(t[l], i)));
            return r ? t : u ? n.call(t) : c ? n(t[0], i) : a
        },
        now: function() {
            return (new Date).getTime()
        }
    }), lt.ready.promise = function(e) {
        if (!U)
            if (U = lt.Deferred(), "complete" === V.readyState) setTimeout(lt.ready);
            else if (V.addEventListener) V.addEventListener("DOMContentLoaded", xt, !1), t.addEventListener("load", xt, !1);
        else {
            V.attachEvent("onreadystatechange", xt), t.attachEvent("onload", xt);
            var n = !1;
            try {
                n = null == t.frameElement && V.documentElement
            } catch (t) {}
            n && n.doScroll && function t() {
                if (!lt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(t, 50)
                    }
                    Tt(), lt.ready()
                }
            }()
        }
        return U.promise(e)
    }, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    }), Q = lt(V);
    var Ct = {};
    lt.Callbacks = function(t) {
        t = "string" == typeof t ? Ct[t] || i(t) : lt.extend({}, t);
        var n, o, r, a, s, l, c = [],
            u = !t.once && [],
            d = function(e) {
                for (o = t.memory && e, r = !0, s = l || 0, l = 0, a = c.length, n = !0; c && s < a; s++)
                    if (c[s].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                        o = !1;
                        break
                    }
                n = !1, c && (u ? u.length && d(u.shift()) : o ? c = [] : p.disable())
            },
            p = {
                add: function() {
                    if (c) {
                        var e = c.length;
                        ! function e(n) {
                            lt.each(n, function(n, i) {
                                var o = lt.type(i);
                                "function" === o ? t.unique && p.has(i) || c.push(i) : i && i.length && "string" !== o && e(i)
                            })
                        }(arguments), n ? a = c.length : o && (l = e, d(o))
                    }
                    return this
                },
                remove: function() {
                    return c && lt.each(arguments, function(t, e) {
                        for (var i;
                            (i = lt.inArray(e, c, i)) > -1;) c.splice(i, 1), n && (i <= a && a--, i <= s && s--)
                    }), this
                },
                has: function(t) {
                    return t ? lt.inArray(t, c) > -1 : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], this
                },
                disable: function() {
                    return c = u = o = e, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return u = e, o || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(t, e) {
                    return e = e || [], e = [t, e.slice ? e.slice() : e], !c || r && !u || (n ? u.push(e) : d(e)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return p
    }, lt.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", lt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", lt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", lt.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return lt.Deferred(function(n) {
                            lt.each(e, function(e, r) {
                                var a = r[0],
                                    s = lt.isFunction(t[e]) && t[e];
                                o[r[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && lt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? lt.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, lt.each(e, function(t, r) {
                var a = r[2],
                    s = r[3];
                i[r[1]] = a.add, s && a.add(function() {
                    n = s
                }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                    return o[r[0] + "With"](this === o ? i : this, arguments), this
                }, o[r[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0,
                r = it.call(arguments),
                a = r.length,
                s = 1 !== a || t && lt.isFunction(t.promise) ? a : 0,
                l = 1 === s ? t : lt.Deferred(),
                c = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? it.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
            if (a > 1)
                for (e = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && lt.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --s;
            return s || l.resolveWith(i, r), l.promise()
        }
    }), lt.support = function() {
        var e, n, i, o, r, a, s, l, c, u, d = V.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], !n || !i || !n.length) return {};
        r = V.createElement("select"), s = r.appendChild(V.createElement("option")), o = d.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", e = {
            getSetAttribute: "t" !== d.className,
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !!d.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!o.value,
            optSelected: s.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (t) {
            e.deleteExpando = !1
        }
        o = V.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), a = V.createDocumentFragment(), a.appendChild(o), e.appendChecked = o.checked, e.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            e.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) d.setAttribute(l = "on" + u, "t"), e[u + "Bubbles"] = l in t || d.attributes[l].expando === !1;
        return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === d.style.backgroundClip, lt(function() {
            var n, i, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                a = V.getElementsByTagName("body")[0];
            a && (n = V.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === d.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(d, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(d, null) || {
                width: "4px"
            }).width, i = d.appendChild(V.createElement("div")), i.style.cssText = d.style.cssText = r, i.style.marginRight = i.style.width = "0", d.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== X && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== d.offsetWidth, e.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = o = i = null)
        }), n = r = a = s = i = o = null, e
    }();
    var kt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        St = /([A-Z])/g;
    lt.extend({
        cache: {},
        expando: "jQuery" + (tt + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? lt.cache[t[lt.expando]] : t[lt.expando]) && !s(t)
        },
        data: function(t, e, n) {
            return o(t, e, n)
        },
        removeData: function(t, e) {
            return r(t, e)
        },
        _data: function(t, e, n) {
            return o(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return r(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && lt.noData[t.nodeName.toLowerCase()];
            return !e || e !== !0 && t.getAttribute("classid") === e
        }
    }), lt.fn.extend({
        data: function(t, n) {
            var i, o, r = this[0],
                s = 0,
                l = null;
            if (t === e) {
                if (this.length && (l = lt.data(r), 1 === r.nodeType && !lt._data(r, "parsedAttrs"))) {
                    for (i = r.attributes; s < i.length; s++) o = i[s].name, o.indexOf("data-") || (o = lt.camelCase(o.slice(5)), a(r, o, l[o]));
                    lt._data(r, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof t ? this.each(function() {
                lt.data(this, t)
            }) : lt.access(this, function(n) {
                if (n === e) return r ? a(r, t, lt.data(r, t)) : null;
                this.each(function() {
                    lt.data(this, t, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                lt.removeData(this, t)
            })
        }
    }), lt.extend({
        queue: function(t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = lt._data(t, e), n && (!i || lt.isArray(n) ? i = lt._data(t, e, lt.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = lt.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = lt._queueHooks(t, e),
                a = function() {
                    lt.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), r.cur = o, o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return lt._data(t, n) || lt._data(t, n, {
                empty: lt.Callbacks("once memory").add(function() {
                    lt._removeData(t, e + "queue"), lt._removeData(t, n)
                })
            })
        }
    }), lt.fn.extend({
        queue: function(t, n) {
            var i = 2;
            return "string" != typeof t && (n = t, t = "fx", i--), arguments.length < i ? lt.queue(this[0], t) : n === e ? this : this.each(function() {
                var e = lt.queue(this, t, n);
                lt._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && lt.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                lt.dequeue(this, t)
            })
        },
        delay: function(t, e) {
            return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, n) {
            var i, o = 1,
                r = lt.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --o || r.resolveWith(a, [a])
                };
            for ("string" != typeof t && (n = t, t = e), t = t || "fx"; s--;)(i = lt._data(a[s], t + "queueHooks")) && i.empty && (o++, i.empty.add(l));
            return l(), r.promise(n)
        }
    });
    var Et, Nt, At = /[\t\r\n]/g,
        Dt = /\r/g,
        $t = /^(?:input|select|textarea|button|object)$/i,
        It = /^(?:a|area)$/i,
        jt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Ot = /^(?:checked|selected)$/i,
        Mt = lt.support.getSetAttribute,
        Ft = lt.support.input;
    lt.fn.extend({
        attr: function(t, e) {
            return lt.access(this, lt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                lt.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return lt.access(this, lt.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = lt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = e, delete this[t]
                } catch (t) {}
            })
        },
        addClass: function(t) {
            var e, n, i, o, r, a = 0,
                s = this.length,
                l = "string" == typeof t && t;
            if (lt.isFunction(t)) return this.each(function(e) {
                lt(this).addClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ut) || []; a < s; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                        for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        n.className = lt.trim(i)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, r, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof t && t;
            if (lt.isFunction(t)) return this.each(function(e) {
                lt(this).removeClass(t.call(this, e, this.className))
            });
            if (l)
                for (e = (t || "").match(ut) || []; a < s; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                        for (r = 0; o = e[r++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        n.className = t ? lt.trim(i) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t,
                i = "boolean" == typeof e;
            return lt.isFunction(t) ? this.each(function(n) {
                lt(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var o, r = 0, a = lt(this), s = e, l = t.match(ut) || []; o = l[r++];) s = i ? s : !a.hasClass(o), a[s ? "addClass" : "removeClass"](o);
                else n !== X && "boolean" !== n || (this.className && lt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : lt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var n, i, o, r = this[0]; {
                if (arguments.length) return o = lt.isFunction(t), this.each(function(n) {
                    var r, a = lt(this);
                    1 === this.nodeType && (r = o ? t.call(this, n, a.val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : lt.isArray(r) && (r = lt.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (i = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, r, "value") !== e || (this.value = r))
                });
                if (r) return (i = lt.valHooks[r.type] || lt.valHooks[r.nodeName.toLowerCase()]) && "get" in i && (n = i.get(r, "value")) !== e ? n : (n = r.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "" : n)
            }
        }
    }), lt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++)
                        if (n = i[l], (n.selected || l === o) && (lt.support.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !lt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = lt(n).val(), r) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    var n = lt.makeArray(e);
                    return lt(t).find("option").each(function() {
                        this.selected = lt.inArray(lt(this).val(), n) >= 0
                    }), n.length || (t.selectedIndex = -1), n
                }
            }
        },
        attr: function(t, n, i) {
            var o, r, a, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === X ? lt.prop(t, n, i) : (r = 1 !== s || !lt.isXMLDoc(t), r && (n = n.toLowerCase(), o = lt.attrHooks[n] || (jt.test(n) ? Nt : Et)), i === e ? o && r && "get" in o && null !== (a = o.get(t, n)) ? a : (typeof t.getAttribute !== X && (a = t.getAttribute(n)), null == a ? e : a) : null !== i ? o && r && "set" in o && (a = o.set(t, i, n)) !== e ? a : (t.setAttribute(n, i + ""), i) : void lt.removeAttr(t, n))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                r = e && e.match(ut);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = lt.propFix[n] || n, jt.test(n) ? !Mt && Ot.test(n) ? t[lt.camelCase("default-" + n)] = t[i] = !1 : t[i] = !1 : lt.attr(t, n, ""), t.removeAttribute(Mt ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!lt.support.radioValue && "radio" === e && lt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, n, i) {
            var o, r, a, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !lt.isXMLDoc(t), a && (n = lt.propFix[n] || n, r = lt.propHooks[n]), i !== e ? r && "set" in r && (o = r.set(t, i, n)) !== e ? o : t[n] = i : r && "get" in r && null !== (o = r.get(t, n)) ? o : t[n]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var n = t.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : $t.test(t.nodeName) || It.test(t.nodeName) && t.href ? 0 : e
                }
            }
        }
    }), Nt = {
        get: function(t, n) {
            var i = lt.prop(t, n),
                o = "boolean" == typeof i && t.getAttribute(n),
                r = "boolean" == typeof i ? Ft && Mt ? null != o : Ot.test(n) ? t[lt.camelCase("default-" + n)] : !!o : t.getAttributeNode(n);
            return r && r.value !== !1 ? n.toLowerCase() : e
        },
        set: function(t, e, n) {
            return e === !1 ? lt.removeAttr(t, n) : Ft && Mt || !Ot.test(n) ? t.setAttribute(!Mt && lt.propFix[n] || n, n) : t[lt.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, Ft && Mt || (lt.attrHooks.value = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return lt.nodeName(t, "input") ? t.defaultValue : i && i.specified ? i.value : e
        },
        set: function(t, e, n) {
            if (!lt.nodeName(t, "input")) return Et && Et.set(t, e, n);
            t.defaultValue = e
        }
    }), Mt || (Et = lt.valHooks.button = {
        get: function(t, n) {
            var i = t.getAttributeNode(n);
            return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : e
        },
        set: function(t, n, i) {
            var o = t.getAttributeNode(i);
            return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(i)), o.value = n += "", "value" === i || n === t.getAttribute(i) ? n : e
        }
    }, lt.attrHooks.contenteditable = {
        get: Et.get,
        set: function(t, e, n) {
            Et.set(t, "" !== e && e, n)
        }
    }, lt.each(["width", "height"], function(t, e) {
        lt.attrHooks[e] = lt.extend(lt.attrHooks[e], {
            set: function(t, n) {
                if ("" === n) return t.setAttribute(e, "auto"), n
            }
        })
    })), lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"], function(t, n) {
        lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {
            get: function(t) {
                var i = t.getAttribute(n, 2);
                return null == i ? e : i
            }
        })
    }), lt.each(["href", "src"], function(t, e) {
        lt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    })), lt.support.style || (lt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || e
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each(["radio", "checkbox"], function() {
        lt.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), lt.each(["radio", "checkbox"], function() {
        lt.valHooks[this] = lt.extend(lt.valHooks[this], {
            set: function(t, e) {
                if (lt.isArray(e)) return t.checked = lt.inArray(lt(t).val(), e) >= 0
            }
        })
    });
    var Lt = /^(?:input|select|textarea)$/i,
        Pt = /^key/,
        Ht = /^(?:mouse|contextmenu)|click/,
        _t = /^(?:focusinfocus|focusoutblur)$/,
        Rt = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {
            global: {},
            add: function(t, n, i, o, r) {
                var a, s, l, c, u, d, p, f, h, m, g, v = lt._data(t);
                if (v) {
                    for (i.handler && (c = i, i = c.handler, r = c.selector), i.guid || (i.guid = lt.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(t) {
                            return typeof lt === X || t && lt.event.triggered === t.type ? e : lt.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = t), n = (n || "").match(ut) || [""], l = n.length; l--;) a = Rt.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), u = lt.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = lt.event.special[h] || {}, p = lt.extend({
                        type: h,
                        origType: g,
                        data: o,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && lt.expr.match.needsContext.test(r),
                        namespace: m.join(".")
                    }, c), (f = s[h]) || (f = s[h] = [], f.delegateCount = 0, u.setup && u.setup.call(t, o, m, d) !== !1 || (t.addEventListener ? t.addEventListener(h, d, !1) : t.attachEvent && t.attachEvent("on" + h, d))), u.add && (u.add.call(t, p), p.handler.guid || (p.handler.guid = i.guid)), r ? f.splice(f.delegateCount++, 0, p) : f.push(p), lt.event.global[h] = !0;
                    t = null
                }
            },
            remove: function(t, e, n, i, o) {
                var r, a, s, l, c, u, d, p, f, h, m, g = lt.hasData(t) && lt._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(ut) || [""], c = e.length; c--;)
                        if (s = Rt.exec(e[c]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (d = lt.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, p = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) a = p[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (p.splice(r, 1), a.selector && p.delegateCount--, d.remove && d.remove.call(t, a));
                            l && !p.length && (d.teardown && d.teardown.call(t, h, g.handle) !== !1 || lt.removeEvent(t, f, g.handle), delete u[f])
                        } else
                            for (f in u) lt.event.remove(t, f + e[c], n, i, !0);
                    lt.isEmptyObject(u) && (delete g.handle, lt._removeData(t, "events"))
                }
            },
            trigger: function(n, i, o, r) {
                var a, s, l, c, u, d, p, f = [o || V],
                    h = at.call(n, "type") ? n.type : n,
                    m = at.call(n, "namespace") ? n.namespace.split(".") : [];
                if (l = d = o = o || V, 3 !== o.nodeType && 8 !== o.nodeType && !_t.test(h + lt.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[lt.expando] ? n : new lt.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = e, n.target || (n.target = o), i = null == i ? [n] : lt.makeArray(i, [n]), u = lt.event.special[h] || {}, r || !u.trigger || u.trigger.apply(o, i) !== !1)) {
                    if (!r && !u.noBubble && !lt.isWindow(o)) {
                        for (c = u.delegateType || h, _t.test(c + h) || (l = l.parentNode); l; l = l.parentNode) f.push(l), d = l;
                        d === (o.ownerDocument || V) && f.push(d.defaultView || d.parentWindow || t)
                    }
                    for (p = 0;
                        (l = f[p++]) && !n.isPropagationStopped();) n.type = p > 1 ? c : u.bindType || h, a = (lt._data(l, "events") || {})[n.type] && lt._data(l, "handle"), a && a.apply(l, i), (a = s && l[s]) && lt.acceptData(l) && a.apply && a.apply(l, i) === !1 && n.preventDefault();
                    if (n.type = h, !r && !n.isDefaultPrevented() && (!u._default || u._default.apply(o.ownerDocument, i) === !1) && ("click" !== h || !lt.nodeName(o, "a")) && lt.acceptData(o) && s && o[h] && !lt.isWindow(o)) {
                        d = o[s], d && (o[s] = null), lt.event.triggered = h;
                        try {
                            o[h]()
                        } catch (t) {}
                        lt.event.triggered = e, d && (o[s] = d)
                    }
                    return n.result
                }
            },
            dispatch: function(t) {
                t = lt.event.fix(t);
                var n, i, o, r, a, s = [],
                    l = it.call(arguments),
                    c = (lt._data(this, "events") || {})[t.type] || [],
                    u = lt.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = lt.event.handlers.call(this, t, c), n = 0;
                        (r = s[n++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, a = 0;
                            (o = r.handlers[a++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, (i = ((lt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) !== e && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, n) {
                var i, o, r, a, s = [],
                    l = n.delegateCount,
                    c = t.target;
                if (l && c.nodeType && (!t.button || "click" !== t.type))
                    for (; c != this; c = c.parentNode || this)
                        if (1 === c.nodeType && (c.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], a = 0; a < l; a++) o = n[a], i = o.selector + " ", r[i] === e && (r[i] = o.needsContext ? lt(i, this).index(c) >= 0 : lt.find(i, this, null, [c]).length), r[i] && r.push(o);
                            r.length && s.push({
                                elem: c,
                                handlers: r
                            })
                        }
                return l < n.length && s.push({
                    elem: this,
                    handlers: n.slice(l)
                }), s
            },
            fix: function(t) {
                if (t[lt.expando]) return t;
                var e, n, i, o = t.type,
                    r = t,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Ht.test(o) ? this.mouseHooks : Pt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new lt.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || V), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, n) {
                    var i, o, r, a = n.button,
                        s = n.fromElement;
                    return null == t.pageX && null != n.clientX && (o = t.target.ownerDocument || V, r = o.documentElement, i = o.body, t.pageX = n.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = n.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? n.toElement : s), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        if (lt.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== V.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === V.activeElement && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var o = lt.extend(new lt.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? lt.event.trigger(o, null, e) : lt.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, lt.removeEvent = V.removeEventListener ? function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === X && (t[i] = null), t.detachEvent(i, n))
        }, lt.Event = function(t, e) {
            if (!(this instanceof lt.Event)) return new lt.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : c) : this.type = t, e && lt.extend(this, e), this.timeStamp = t && t.timeStamp || lt.now(), this[lt.expando] = !0
        }, lt.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, lt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            lt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === i || lt.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), lt.support.submitBubbles || (lt.event.special.submit = {
            setup: function() {
                if (lt.nodeName(this, "form")) return !1;
                lt.event.add(this, "click._submit keypress._submit", function(t) {
                    var n = t.target,
                        i = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form : e;
                    i && !lt._data(i, "submitBubbles") && (lt.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), lt._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && lt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                if (lt.nodeName(this, "form")) return !1;
                lt.event.remove(this, "._submit")
            }
        }), lt.support.changeBubbles || (lt.event.special.change = {
            setup: function() {
                if (Lt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (lt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), lt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, t, !0)
                })), !1;
                lt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Lt.test(e.nodeName) && !lt._data(e, "changeBubbles") && (lt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || lt.event.simulate("change", this.parentNode, t, !0)
                    }), lt._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return lt.event.remove(this, "._change"), !Lt.test(this.nodeName)
            }
        }), lt.support.focusinBubbles || lt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = 0,
                i = function(t) {
                    lt.event.simulate(e, t.target, lt.event.fix(t), !0)
                };
            lt.event.special[e] = {
                setup: function() {
                    0 == n++ && V.addEventListener(t, i, !0)
                },
                teardown: function() {
                    0 == --n && V.removeEventListener(t, i, !0)
                }
            }
        }), lt.fn.extend({
            on: function(t, n, i, o, r) {
                var a, s;
                if ("object" == typeof t) {
                    "string" != typeof n && (i = i || n, n = e);
                    for (a in t) this.on(a, n, i, t[a], r);
                    return this
                }
                if (null == i && null == o ? (o = n, i = n = e) : null == o && ("string" == typeof n ? (o = i, i = e) : (o = i, i = n, n = e)), o === !1) o = c;
                else if (!o) return this;
                return 1 === r && (s = o, o = function(t) {
                    return lt().off(t), s.apply(this, arguments)
                }, o.guid = s.guid || (s.guid = lt.guid++)), this.each(function() {
                    lt.event.add(this, t, o, i, n)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, n, i) {
                var o, r;
                if (t && t.preventDefault && t.handleObj) return o = t.handleObj, lt(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, n, t[r]);
                    return this
                }
                return n !== !1 && "function" != typeof n || (i = n, n = e), i === !1 && (i = c), this.each(function() {
                    lt.event.remove(this, t, i, n)
                })
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            },
            trigger: function(t, e) {
                return this.each(function() {
                    lt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                if (n) return lt.event.trigger(t, e, n, !0)
            }
        }),
        function(t, e) {
            function n(t) {
                return ht.test(t + "")
            }

            function i() {
                var t, e = [];
                return t = function(n, i) {
                    return e.push(n += " ") > k.cacheLength && delete t[e.shift()], t[n] = i
                }
            }

            function o(t) {
                return t[_] = !0, t
            }

            function r(t) {
                var e = I.createElement("div");
                try {
                    return t(e)
                } catch (t) {
                    return !1
                } finally {
                    e = null
                }
            }

            function a(t, e, n, i) {
                var o, r, a, s, l, c, u, f, h, m;
                if ((e ? e.ownerDocument || e : R) !== I && $(e), e = e || I, n = n || [], !t || "string" != typeof t) return n;
                if (1 !== (s = e.nodeType) && 9 !== s) return [];
                if (!O && !i) {
                    if (o = mt.exec(t))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (!(r = e.getElementById(a)) || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && P(e, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return J.apply(n, Z.call(e.getElementsByTagName(t), 0)), n;
                            if ((a = o[3]) && B.getByClassName && e.getElementsByClassName) return J.apply(n, Z.call(e.getElementsByClassName(a), 0)), n
                        }
                    if (B.qsa && !M.test(t)) {
                        if (u = !0, f = _, h = e, m = 9 === s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = d(t), (u = e.getAttribute("id")) ? f = u.replace(yt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                            h = ft.test(t) && e.parentNode || e, m = c.join(",")
                        }
                        if (m) try {
                            return J.apply(n, Z.call(h.querySelectorAll(m), 0)), n
                        } catch (t) {} finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return w(t.replace(at, "$1"), e, n, i)
            }

            function s(t, e) {
                var n = e && t,
                    i = n && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function l(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function c(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function u(t) {
                return o(function(e) {
                    return e = +e, o(function(n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function d(t, e) {
                var n, i, o, r, s, l, c, u = U[t + " "];
                if (u) return e ? 0 : u.slice(0);
                for (s = t, l = [], c = k.preFilter; s;) {
                    n && !(i = st.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = ct.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(at, " ")
                    }), s = s.slice(n.length));
                    for (r in k.filter) !(i = pt[r].exec(s)) || c[r] && !(i = c[r](i)) || (n = i.shift(), o.push({
                        value: n,
                        type: r,
                        matches: i
                    }), s = s.slice(n.length));
                    if (!n) break
                }
                return e ? s.length : s ? a.error(t) : U(t, l).slice(0)
            }

            function p(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function f(t, e, n) {
                var i = e.dir,
                    o = n && "parentNode" === i,
                    r = z++;
                return e.first ? function(e, n, r) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) return t(e, n, r)
                } : function(e, n, a) {
                    var s, l, c, u = q + " " + r;
                    if (a) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || o)
                                if (c = e[_] || (e[_] = {}), (l = c[i]) && l[0] === u) {
                                    if ((s = l[1]) === !0 || s === C) return s === !0
                                } else if (l = c[i] = [u], l[1] = t(e, n, a) || C, l[1] === !0) return !0
                }
            }

            function h(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, e, n, i, o) {
                for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++)(r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
                return a
            }

            function g(t, e, n, i, r, a) {
                return i && !i[_] && (i = g(i)), r && !r[_] && (r = g(r, a)), o(function(o, a, s, l) {
                    var c, u, d, p = [],
                        f = [],
                        h = a.length,
                        g = o || b(e || "*", s.nodeType ? [s] : s, []),
                        v = !t || !o && e ? g : m(g, p, t, s, l),
                        y = n ? r || (o ? t : h || i) ? [] : a : v;
                    if (n && n(v, y, s, l), i)
                        for (c = m(y, f), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (y[f[u]] = !(v[f[u]] = d));
                    if (o) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
                                r(null, y = [], c, l)
                            }
                            for (u = y.length; u--;)(d = y[u]) && (c = r ? G.call(o, d) : p[u]) > -1 && (o[c] = !(a[c] = d))
                        }
                    } else y = m(y === a ? y.splice(h, y.length) : y), r ? r(null, a, y, l) : J.apply(a, y)
                })
            }

            function v(t) {
                for (var e, n, i, o = t.length, r = k.relative[t[0].type], a = r || k.relative[" "], s = r ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, a, !0), c = f(function(t) {
                        return G.call(e, t) > -1
                    }, a, !0), u = [function(t, n, i) {
                        return !r && (i || n !== D) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i))
                    }]; s < o; s++)
                    if (n = k.relative[t[s].type]) u = [f(h(u), n)];
                    else {
                        if (n = k.filter[t[s].type].apply(null, t[s].matches), n[_]) {
                            for (i = ++s; i < o && !k.relative[t[i].type]; i++);
                            return g(s > 1 && h(u), s > 1 && p(t.slice(0, s - 1)).replace(at, "$1"), n, s < i && v(t.slice(s, i)), i < o && v(t = t.slice(i)), i < o && p(t))
                        }
                        u.push(n)
                    }
                return h(u)
            }

            function y(t, e) {
                var n = 0,
                    i = e.length > 0,
                    r = t.length > 0,
                    s = function(o, s, l, c, u) {
                        var d, p, f, h = [],
                            g = 0,
                            v = "0",
                            y = o && [],
                            b = null != u,
                            w = D,
                            x = o || r && k.find.TAG("*", u && s.parentNode || s),
                            T = q += null == w ? 1 : Math.random() || .1;
                        for (b && (D = s !== I && s, C = n); null != (d = x[v]); v++) {
                            if (r && d) {
                                for (p = 0; f = t[p++];)
                                    if (f(d, s, l)) {
                                        c.push(d);
                                        break
                                    }
                                b && (q = T, C = ++n)
                            }
                            i && ((d = !f && d) && g--, o && y.push(d))
                        }
                        if (g += v, i && v !== g) {
                            for (p = 0; f = e[p++];) f(y, h, s, l);
                            if (o) {
                                if (g > 0)
                                    for (; v--;) y[v] || h[v] || (h[v] = K.call(c));
                                h = m(h)
                            }
                            J.apply(c, h), b && !o && h.length > 0 && g + e.length > 1 && a.uniqueSort(c)
                        }
                        return b && (q = T, D = w), y
                    };
                return i ? o(s) : s
            }

            function b(t, e, n) {
                for (var i = 0, o = e.length; i < o; i++) a(t, e[i], n);
                return n
            }

            function w(t, e, n, i) {
                var o, r, a, s, l, c = d(t);
                if (!i && 1 === c.length) {
                    if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && 9 === e.nodeType && !O && k.relative[r[1].type]) {
                        if (!(e = k.find.ID(a.matches[0].replace(wt, xt), e)[0])) return n;
                        t = t.slice(r.shift().value.length)
                    }
                    for (o = pt.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !k.relative[s = a.type]);)
                        if ((l = k.find[s]) && (i = l(a.matches[0].replace(wt, xt), ft.test(r[0].type) && e.parentNode || e))) {
                            if (r.splice(o, 1), !(t = i.length && p(r))) return J.apply(n, Z.call(i, 0)), n;
                            break
                        }
                }
                return N(t, c)(i, e, O, n, ft.test(t)), n
            }

            function x() {}
            var T, C, k, S, E, N, A, D, $, I, j, O, M, F, L, P, H, _ = "sizzle" + -new Date,
                R = t.document,
                B = {},
                q = 0,
                z = 0,
                W = i(),
                U = i(),
                Q = i(),
                X = typeof e,
                V = 1 << 31,
                Y = [],
                K = Y.pop,
                J = Y.push,
                Z = Y.slice,
                G = Y.indexOf || function(t) {
                    for (var e = 0, n = this.length; e < n; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                nt = et.replace("w", "w#"),
                it = "([*^$|!~]?=)",
                ot = "\\[" + tt + "*(" + et + ")" + tt + "*(?:" + it + tt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + tt + "*\\]",
                rt = ":(" + et + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ot.replace(3, 8) + ")*)|.*)\\)|)",
                at = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                st = new RegExp("^" + tt + "*," + tt + "*"),
                ct = new RegExp("^" + tt + "*([\\x20\\t\\r\\n\\f>+~])" + tt + "*"),
                ut = new RegExp(rt),
                dt = new RegExp("^" + nt + "$"),
                pt = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + et + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                ft = /[\x20\t\r\n\f]*[+~]/,
                ht = /^[^{]+\{\s*\[native code/,
                mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /^(?:input|select|textarea|button)$/i,
                vt = /^h\d$/i,
                yt = /'|\\/g,
                bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                wt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                xt = function(t, e) {
                    var n = "0x" + e - 65536;
                    return n !== n ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                Z.call(R.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                Z = function(t) {
                    for (var e, n = []; e = this[t++];) n.push(e);
                    return n
                }
            }
            E = a.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, $ = a.setDocument = function(t) {
                var i = t ? t.ownerDocument || t : R;
                return i !== I && 9 === i.nodeType && i.documentElement ? (I = i, j = i.documentElement, O = E(i), B.tagNameNoComments = r(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), B.attributes = r(function(t) {
                    t.innerHTML = "<select></select>";
                    var e = typeof t.lastChild.getAttribute("multiple");
                    return "boolean" !== e && "string" !== e
                }), B.getByClassName = r(function(t) {
                    return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length)
                }), B.getByName = r(function(t) {
                    t.id = _ + 0, t.innerHTML = "<a name='" + _ + "'></a><div name='" + _ + "'></div>", j.insertBefore(t, j.firstChild);
                    var e = i.getElementsByName && i.getElementsByName(_).length === 2 + i.getElementsByName(_ + 0).length;
                    return B.getIdNotName = !i.getElementById(_), j.removeChild(t), e
                }), k.attrHandle = r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== X && "#" === t.firstChild.getAttribute("href")
                }) ? {} : {
                    href: function(t) {
                        return t.getAttribute("href", 2)
                    },
                    type: function(t) {
                        return t.getAttribute("type")
                    }
                }, B.getIdNotName ? (k.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && !O) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, k.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (k.find.ID = function(t, n) {
                    if (typeof n.getElementById !== X && !O) {
                        var i = n.getElementById(t);
                        return i ? i.id === t || typeof i.getAttributeNode !== X && i.getAttributeNode("id").value === t ? [i] : e : []
                    }
                }, k.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var n = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), k.find.TAG = B.tagNameNoComments ? function(t, e) {
                    if (typeof e.getElementsByTagName !== X) return e.getElementsByTagName(t)
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, k.find.NAME = B.getByName && function(t, e) {
                    if (typeof e.getElementsByName !== X) return e.getElementsByName(name)
                }, k.find.CLASS = B.getByClassName && function(t, e) {
                    if (typeof e.getElementsByClassName !== X && !O) return e.getElementsByClassName(t)
                }, F = [], M = [":focus"], (B.qsa = n(i.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || M.push(":checked")
                }), r(function(t) {
                    t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && M.push("[*^$]=" + tt + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (B.matchesSelector = n(L = j.matchesSelector || j.mozMatchesSelector || j.webkitMatchesSelector || j.oMatchesSelector || j.msMatchesSelector)) && r(function(t) {
                    B.disconnectedMatch = L.call(t, "div"), L.call(t, "[s!='']:x"), F.push("!=", rt)
                }), M = new RegExp(M.join("|")), F = new RegExp(F.join("|")), P = n(j.contains) || j.compareDocumentPosition ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, H = j.compareDocumentPosition ? function(t, e) {
                    var n;
                    return t === e ? (A = !0, 0) : (n = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & n || t.parentNode && 11 === t.parentNode.nodeType ? t === i || P(R, t) ? -1 : e === i || P(R, e) ? 1 : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                } : function(t, e) {
                    var n, o = 0,
                        r = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        c = [e];
                    if (t === e) return A = !0, 0;
                    if (!r || !a) return t === i ? -1 : e === i ? 1 : r ? -1 : a ? 1 : 0;
                    if (r === a) return s(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? s(l[o], c[o]) : l[o] === R ? -1 : c[o] === R ? 1 : 0
                }, A = !1, [0, 0].sort(H), B.detectDuplicates = A, I) : I
            }, a.matches = function(t, e) {
                return a(t, null, null, e)
            }, a.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== I && $(t), e = e.replace(bt, "='$1']"), B.matchesSelector && !O && (!F || !F.test(e)) && !M.test(e)) try {
                    var n = L.call(t, e);
                    if (n || B.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return a(e, I, null, [t]).length > 0
            }, a.contains = function(t, e) {
                return (t.ownerDocument || t) !== I && $(t), P(t, e)
            }, a.attr = function(t, e) {
                var n;
                return (t.ownerDocument || t) !== I && $(t), O || (e = e.toLowerCase()), (n = k.attrHandle[e]) ? n(t) : O || B.attributes ? t.getAttribute(e) : ((n = t.getAttributeNode(e)) || t.getAttribute(e)) && t[e] === !0 ? e : n && n.specified ? n.value : null
            }, a.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, a.uniqueSort = function(t) {
                var e, n = [],
                    i = 1,
                    o = 0;
                if (A = !B.detectDuplicates, t.sort(H), A) {
                    for (; e = t[i]; i++) e === t[i - 1] && (o = n.push(i));
                    for (; o--;) t.splice(n[o], 1)
                }
                return t
            }, S = a.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += S(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i]; i++) n += S(e);
                return n
            }, k = a.selectors = {
                cacheLength: 50,
                createPseudo: o,
                match: pt,
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || a.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && a.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[5] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : n && ut.test(n) && (e = d(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        return "*" === t ? function() {
                            return !0
                        } : (t = t.replace(wt, xt).toLowerCase(), function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        })
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && W(t, function(t) {
                            return e.test(t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, n) {
                        return function(i) {
                            var o = a.attr(i, t);
                            return null == o ? "!=" === e : !e || (o += "", "=" === e ? o === n : "!=" === e ? o !== n : "^=" === e ? n && 0 === o.indexOf(n) : "*=" === e ? n && o.indexOf(n) > -1 : "$=" === e ? n && o.slice(-n.length) === n : "~=" === e ? (" " + o + " ").indexOf(n) > -1 : "|=" === e && (o === n || o.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            s = "of-type" === e;
                        return 1 === i && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var c, u, d, p, f, h, m = r !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        h = m = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[_] || (g[_] = {}), c = u[t] || [], f = c[0] === q && c[1], p = c[0] === q && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (p = f = 0) || h.pop();)
                                        if (1 === d.nodeType && ++p && d === e) {
                                            u[t] = [q, f, p];
                                            break
                                        }
                                } else if (y && (c = (e[_] || (e[_] = {}))[t]) && c[0] === q) p = c[1];
                                else
                                    for (;
                                        (d = ++f && d && d[m] || (p = f = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++p || (y && ((d[_] || (d[_] = {}))[t] = [q, p]), d !== e)););
                                return (p -= o) === i || p % i == 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var n, i = k.pseudos[t] || k.setFilters[t.toLowerCase()] || a.error("unsupported pseudo: " + t);
                        return i[_] ? i(e) : i.length > 1 ? (n = [t, t, "", e], k.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, n) {
                            for (var o, r = i(t, e), a = r.length; a--;) o = G.call(t, r[a]), t[o] = !(n[o] = r[a])
                        }) : function(t) {
                            return i(t, 0, n)
                        }) : i
                    }
                },
                pseudos: {
                    not: o(function(t) {
                        var e = [],
                            n = [],
                            i = N(t.replace(at, "$1"));
                        return i[_] ? o(function(t, e, n, o) {
                            for (var r, a = i(t, null, o, []), s = t.length; s--;)(r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function(t, o, r) {
                            return e[0] = t, i(e, null, r, n), !n.pop()
                        }
                    }),
                    has: o(function(t) {
                        return function(e) {
                            return a(t, e).length > 0
                        }
                    }),
                    contains: o(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                        }
                    }),
                    lang: o(function(t) {
                        return dt.test(t || "") || a.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = O ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === j
                    },
                    focus: function(t) {
                        return t === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !k.pseudos.empty(t)
                    },
                    header: function(t) {
                        return vt.test(t.nodeName)
                    },
                    input: function(t) {
                        return gt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                    },
                    first: u(function() {
                        return [0]
                    }),
                    last: u(function(t, e) {
                        return [e - 1]
                    }),
                    eq: u(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: u(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: u(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: u(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: u(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            };
            for (T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) k.pseudos[T] = l(T);
            for (T in {
                    submit: !0,
                    reset: !0
                }) k.pseudos[T] = c(T);
            N = a.compile = function(t, e) {
                var n, i = [],
                    o = [],
                    r = Q[t + " "];
                if (!r) {
                    for (e || (e = d(t)), n = e.length; n--;) r = v(e[n]), r[_] ? i.push(r) : o.push(r);
                    r = Q(t, y(o, i))
                }
                return r
            }, k.pseudos.nth = k.pseudos.eq, k.filters = x.prototype = k.pseudos, k.setFilters = new x, $(), a.attr = lt.attr, lt.find = a, lt.expr = a.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = a.uniqueSort, lt.text = a.getText, lt.isXMLDoc = a.isXML, lt.contains = a.contains
        }(t);
    var Bt = /Until$/,
        qt = /^(?:parents|prev(?:Until|All))/,
        zt = /^.[^:#\[\.,]*$/,
        Wt = lt.expr.match.needsContext,
        Ut = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    lt.fn.extend({
        find: function(t) {
            var e, n, i, o = this.length;
            if ("string" != typeof t) return i = this, this.pushStack(lt(t).filter(function() {
                for (e = 0; e < o; e++)
                    if (lt.contains(i[e], this)) return !0
            }));
            for (n = [], e = 0; e < o; e++) lt.find(t, this[e], n);
            return n = this.pushStack(o > 1 ? lt.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + t, n
        },
        has: function(t) {
            var e, n = lt(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (lt.contains(this, n[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(d(this, t, !1))
        },
        filter: function(t) {
            return this.pushStack(d(this, t, !0))
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? Wt.test(t) ? lt(t, this.context).index(this[0]) >= 0 : lt.filter(t, this).length > 0 : this.filter(t).length > 0)
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], a = Wt.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n.ownerDocument && n !== e && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : lt.find.matchesSelector(n, t)) {
                        r.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return this.pushStack(r.length > 1 ? lt.unique(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? lt.inArray(this[0], lt(t)) : lt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var n = "string" == typeof t ? lt(t, e) : lt.makeArray(t && t.nodeType ? [t] : t),
                i = lt.merge(this.get(), n);
            return this.pushStack(lt.unique(i))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), lt.fn.andSelf = lt.fn.addBack, lt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return lt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return lt.dir(t, "parentNode", n)
        },
        next: function(t) {
            return u(t, "nextSibling")
        },
        prev: function(t) {
            return u(t, "previousSibling")
        },
        nextAll: function(t) {
            return lt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return lt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return lt.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return lt.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return lt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return lt.sibling(t.firstChild)
        },
        contents: function(t) {
            return lt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : lt.merge([], t.childNodes)
        }
    }, function(t, e) {
        lt.fn[t] = function(n, i) {
            var o = lt.map(this, e, n);
            return Bt.test(t) || (i = n), i && "string" == typeof i && (o = lt.filter(i, o)), o = this.length > 1 && !Ut[t] ? lt.unique(o) : o, this.length > 1 && qt.test(t) && (o = o.reverse()), this.pushStack(o)
        }
    }), lt.extend({
        filter: function(t, e, n) {
            return n && (t = ":not(" + t + ")"), 1 === e.length ? lt.find.matchesSelector(e[0], t) ? [e[0]] : [] : lt.find.matches(t, e)
        },
        dir: function(t, n, i) {
            for (var o = [], r = t[n]; r && 9 !== r.nodeType && (i === e || 1 !== r.nodeType || !lt(r).is(i));) 1 === r.nodeType && o.push(r), r = r[n];
            return o
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    });
    var Qt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Xt = / jQuery\d+="(?:null|\d+)"/g,
        Vt = new RegExp("<(?:" + Qt + ")[\\s/>]", "i"),
        Yt = /^\s+/,
        Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Jt = /<([\w:]+)/,
        Zt = /<tbody/i,
        Gt = /<|&#?\w+;/,
        te = /<(?:script|style|link)/i,
        ee = /^(?:checkbox|radio)$/i,
        ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ie = /^$|\/(?:java|ecma)script/i,
        oe = /^true\/(.*)/,
        re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ae = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        se = p(V),
        le = se.appendChild(V.createElement("div"));
    ae.optgroup = ae.option, ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead, ae.th = ae.td, lt.fn.extend({
        text: function(t) {
            return lt.access(this, function(t) {
                return t === e ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function(t) {
            if (lt.isFunction(t)) return this.each(function(e) {
                lt(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = lt(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return lt.isFunction(t) ? this.each(function(e) {
                lt(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = lt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = lt.isFunction(t);
            return this.each(function(n) {
                lt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(t, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = 0; null != (n = this[i]); i++)(!t || lt.filter(t, [n]).length > 0) && (e || 1 !== n.nodeType || lt.cleanData(b(n)), n.parentNode && (e && lt.contains(n.ownerDocument, n) && g(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && lt.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && lt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return lt.clone(this, t, e)
            })
        },
        html: function(t) {
            return lt.access(this, function(t) {
                var n = this[0] || {},
                    i = 0,
                    o = this.length;
                if (t === e) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : e;
                if ("string" == typeof t && !te.test(t) && (lt.support.htmlSerialize || !Vt.test(t)) && (lt.support.leadingWhitespace || !Yt.test(t)) && !ae[(Jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Kt, "<$1></$2>");
                    try {
                        for (; i < o; i++) n = this[i] || {}, 1 === n.nodeType && (lt.cleanData(b(n, !1)), n.innerHTML = t);
                        n = 0
                    } catch (t) {}
                }
                n && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(t) {
            return lt.isFunction(t) || "string" == typeof t || (t = lt(t).not(this).detach()), this.domManip([t], !0, function(t) {
                var e = this.nextSibling,
                    n = this.parentNode;
                n && (lt(this).remove(), n.insertBefore(t, e))
            })
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, n, i) {
            t = et.apply([], t);
            var o, r, a, s, l, c, u = 0,
                d = this.length,
                p = this,
                g = d - 1,
                v = t[0],
                y = lt.isFunction(v);
            if (y || !(d <= 1 || "string" != typeof v || lt.support.checkClone) && ne.test(v)) return this.each(function(o) {
                var r = p.eq(o);
                y && (t[0] = v.call(this, o, n ? r.html() : e)), r.domManip(t, n, i)
            });
            if (d && (c = lt.buildFragment(t, this[0].ownerDocument, !1, this), o = c.firstChild, 1 === c.childNodes.length && (c = o), o)) {
                for (n = n && lt.nodeName(o, "tr"), s = lt.map(b(c, "script"), h), a = s.length; u < d; u++) r = c, u !== g && (r = lt.clone(r, !0, !0), a && lt.merge(s, b(r, "script"))), i.call(n && lt.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], r, u);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, lt.map(s, m), u = 0; u < a; u++) r = s[u], ie.test(r.type || "") && !lt._data(r, "globalEval") && lt.contains(l, r) && (r.src ? lt.ajax({
                        url: r.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : lt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(re, "")));
                c = o = null
            }
            return this
        }
    }), lt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        lt.fn[t] = function(t) {
            for (var n, i = 0, o = [], r = lt(t), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), lt(r[i])[e](n), nt.apply(o, n.get());
            return this.pushStack(o)
        }
    }), lt.extend({
        clone: function(t, e, n) {
            var i, o, r, a, s, l = lt.contains(t.ownerDocument, t);
            if (lt.support.html5Clone || lt.isXMLDoc(t) || !Vt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(r = le.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t)))
                for (i = b(r), s = b(t), a = 0; null != (o = s[a]); ++a) i[a] && y(o, i[a]);
            if (e)
                if (n)
                    for (s = s || b(t), i = i || b(r), a = 0; null != (o = s[a]); a++) v(o, i[a]);
                else v(t, r);
            return i = b(r, "script"), i.length > 0 && g(i, !l && b(t, "script")), i = s = o = null, r
        },
        buildFragment: function(t, e, n, i) {
            for (var o, r, a, s, l, c, u, d = t.length, f = p(e), h = [], m = 0; m < d; m++)
                if ((r = t[m]) || 0 === r)
                    if ("object" === lt.type(r)) lt.merge(h, r.nodeType ? [r] : r);
                    else if (Gt.test(r)) {
                for (s = s || f.appendChild(e.createElement("div")), l = (Jt.exec(r) || ["", ""])[1].toLowerCase(), u = ae[l] || ae._default, s.innerHTML = u[1] + r.replace(Kt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                if (!lt.support.leadingWhitespace && Yt.test(r) && h.push(e.createTextNode(Yt.exec(r)[0])), !lt.support.tbody)
                    for (r = "table" !== l || Zt.test(r) ? "<table>" !== u[1] || Zt.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) lt.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (lt.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = f.lastChild
            } else h.push(e.createTextNode(r));
            for (s && f.removeChild(s), lt.support.appendChecked || lt.grep(b(h, "input"), w), m = 0; r = h[m++];)
                if ((!i || lt.inArray(r, i) === -1) && (a = lt.contains(r.ownerDocument, r), s = b(f.appendChild(r), "script"), a && g(s), n))
                    for (o = 0; r = s[o++];) ie.test(r.type || "") && n.push(r);
            return s = null, f
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, a = 0, s = lt.expando, l = lt.cache, c = lt.support.deleteExpando, u = lt.event.special; null != (n = t[a]); a++)
                if ((e || lt.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events)
                        for (i in r.events) u[i] ? lt.event.remove(n, i) : lt.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== X ? n.removeAttribute(s) : n[s] = null, G.push(o))
                }
        }
    });
    var ce, ue, de, pe = /alpha\([^)]*\)/i,
        fe = /opacity\s*=\s*([^)]*)/,
        he = /^(top|right|bottom|left)$/,
        me = /^(none|table(?!-c[ea]).+)/,
        ge = /^margin/,
        ve = new RegExp("^(" + ct + ")(.*)$", "i"),
        ye = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
        be = new RegExp("^([+-])=(" + ct + ")", "i"),
        we = {
            BODY: "block"
        },
        xe = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Te = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Ce = ["Top", "Right", "Bottom", "Left"],
        ke = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({
        css: function(t, n) {
            return lt.access(this, function(t, n, i) {
                var o, r, a = {},
                    s = 0;
                if (lt.isArray(n)) {
                    for (r = ue(t), o = n.length; s < o; s++) a[n[s]] = lt.css(t, n[s], !1, r);
                    return a
                }
                return i !== e ? lt.style(t, n, i) : lt.css(t, n)
            }, t, n, arguments.length > 1)
        },
        show: function() {
            return C(this, !0)
        },
        hide: function() {
            return C(this)
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : T(this)) ? lt(this).show(): lt(this).hide()
            })
        }
    }), lt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = de(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": lt.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, n, i, o) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, a, s, l = lt.camelCase(n),
                    c = t.style;
                if (n = lt.cssProps[l] || (lt.cssProps[l] = x(c, l)), s = lt.cssHooks[n] || lt.cssHooks[l], i === e) return s && "get" in s && (r = s.get(t, !1, o)) !== e ? r : c[n];
                if (a = typeof i, "string" === a && (r = be.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(lt.css(t, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || lt.cssNumber[l] || (i += "px"), lt.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set" in s && (i = s.set(t, i, o)) === e))) try {
                    c[n] = i
                } catch (t) {}
            }
        },
        css: function(t, n, i, o) {
            var r, a, s, l = lt.camelCase(n);
            return n = lt.cssProps[l] || (lt.cssProps[l] = x(t.style, l)), s = lt.cssHooks[n] || lt.cssHooks[l], s && "get" in s && (a = s.get(t, !0, i)), a === e && (a = de(t, n, o)), "normal" === a && n in Te && (a = Te[n]), "" === i || i ? (r = parseFloat(a), i === !0 || lt.isNumeric(r) ? r || 0 : a) : a
        },
        swap: function(t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        }
    }), t.getComputedStyle ? (ue = function(e) {
        return t.getComputedStyle(e, null)
    }, de = function(t, n, i) {
        var o, r, a, s = i || ue(t),
            l = s ? s.getPropertyValue(n) || s[n] : e,
            c = t.style;
        return s && ("" !== l || lt.contains(t.ownerDocument, t) || (l = lt.style(t, n)), ye.test(l) && ge.test(n) && (o = c.width, r = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = o, c.minWidth = r, c.maxWidth = a)), l
    }) : V.documentElement.currentStyle && (ue = function(t) {
        return t.currentStyle
    }, de = function(t, n, i) {
        var o, r, a, s = i || ue(t),
            l = s ? s[n] : e,
            c = t.style;
        return null == l && c && c[n] && (l = c[n]), ye.test(l) && !he.test(n) && (o = c.left, r = t.runtimeStyle, a = r && r.left, a && (r.left = t.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = o, a && (r.left = a)), "" === l ? "auto" : l
    }), lt.each(["height", "width"], function(t, e) {
        lt.cssHooks[e] = {
            get: function(t, n, i) {
                if (n) return 0 === t.offsetWidth && me.test(lt.css(t, "display")) ? lt.swap(t, xe, function() {
                    return E(t, e, i)
                }) : E(t, e, i)
            },
            set: function(t, n, i) {
                var o = i && ue(t);
                return k(t, n, i ? S(t, e, i, lt.support.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), lt.support.opacity || (lt.cssHooks.opacity = {
        get: function(t, e) {
            return fe.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = lt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === lt.trim(r.replace(pe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = pe.test(r) ? r.replace(pe, o) : r + " " + o)
        }
    }), lt(function() {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {
            get: function(t, e) {
                if (e) return lt.swap(t, {
                    display: "inline-block"
                }, de, [t, "marginRight"])
            }
        }), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function(t, e) {
            lt.cssHooks[e] = {
                get: function(t, n) {
                    if (n) return n = de(t, e), ye.test(n) ? lt(t).position()[e] + "px" : n
                }
            }
        })
    }), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !lt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || lt.css(t, "display"))
    }, lt.expr.filters.visible = function(t) {
        return !lt.expr.filters.hidden(t)
    }), lt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        lt.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Ce[i] + e] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, ge.test(t) || (lt.cssHooks[t + e].set = k)
    });
    var Se = /%20/g,
        Ee = /\[\]$/,
        Ne = /\r?\n/g,
        Ae = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({
        serialize: function() {
            return lt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = lt.prop(this, "elements");
                return t ? lt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !lt(this).is(":disabled") && De.test(this.nodeName) && !Ae.test(t) && (this.checked || !ee.test(t))
            }).map(function(t, e) {
                var n = lt(this).val();
                return null == n ? null : lt.isArray(n) ? lt.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ne, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ne, "\r\n")
                }
            }).get()
        }
    }), lt.param = function(t, n) {
        var i, o = [],
            r = function(t, e) {
                e = lt.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (n === e && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function() {
            r(this.name, this.value)
        });
        else
            for (i in t) D(i, t[i], n, r);
        return o.join("&").replace(Se, "+")
    }, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        lt.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), lt.fn.hover = function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    };
    var $e, Ie, je = lt.now(),
        Oe = /\?/,
        Me = /#.*$/,
        Fe = /([?&])_=[^&]*/,
        Le = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        He = /^(?:GET|HEAD)$/,
        _e = /^\/\//,
        Re = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Be = lt.fn.load,
        qe = {},
        ze = {},
        We = "*/".concat("*");
    try {
        Ie = Y.href
    } catch (t) {
        Ie = V.createElement("a"), Ie.href = "", Ie = Ie.href
    }
    $e = Re.exec(Ie.toLowerCase()) || [], lt.fn.load = function(t, n, i) {
        if ("string" != typeof t && Be) return Be.apply(this, arguments);
        var o, r, a, s = this,
            l = t.indexOf(" ");
        return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), lt.isFunction(n) ? (i = n, n = e) : n && "object" == typeof n && (a = "POST"), s.length > 0 && lt.ajax({
            url: t,
            type: a,
            dataType: "html",
            data: n
        }).done(function(t) {
            r = arguments, s.html(o ? lt("<div>").append(lt.parseHTML(t)).find(o) : t)
        }).complete(i && function(t, e) {
            s.each(i, r || [t.responseText, e, t])
        }), this
    }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        lt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), lt.each(["get", "post"], function(t, n) {
        lt[n] = function(t, i, o, r) {
            return lt.isFunction(i) && (r = r || o, o = i, i = e), lt.ajax({
                url: t,
                type: n,
                dataType: r,
                data: i,
                success: o
            })
        }
    }), lt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ie,
            type: "GET",
            isLocal: Pe.test($e[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": t.String,
                "text html": !0,
                "text json": lt.parseJSON,
                "text xml": lt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? j(j(t, lt.ajaxSettings), e) : j(lt.ajaxSettings, t)
        },
        ajaxPrefilter: $(qe),
        ajaxTransport: $(ze),
        ajax: function(t, n) {
            function i(t, n, i, o) {
                var r, d, y, b, x, C = n;
                2 !== w && (w = 2, l && clearTimeout(l), u = e, s = o || "", T.readyState = t > 0 ? 4 : 0, i && (b = O(p, T, i)), t >= 200 && t < 300 || 304 === t ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (lt.lastModified[a] = x), (x = T.getResponseHeader("etag")) && (lt.etag[a] = x)), 204 === t ? (r = !0, C = "nocontent") : 304 === t ? (r = !0, C = "notmodified") : (r = M(p, b), C = r.state, d = r.data, y = r.error, r = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", r ? m.resolveWith(f, [d, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = e, c && h.trigger(r ? "ajaxSuccess" : "ajaxError", [T, p, r ? d : y]), g.fireWith(f, [T, C]), c && (h.trigger("ajaxComplete", [T, p]), --lt.active || lt.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = e), n = n || {};
            var o, r, a, s, l, c, u, d, p = lt.ajaxSetup({}, n),
                f = p.context || p,
                h = p.context && (f.nodeType || f.jquery) ? lt(f) : lt.event,
                m = lt.Deferred(),
                g = lt.Callbacks("once memory"),
                v = p.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; e = Le.exec(s);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t, y[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (p.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (w < 2)
                                for (e in t) v[e] = [v[e], t[e]];
                            else T.always(t[T.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || x;
                        return u && u.abort(e), i(0, e), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((t || p.url || Ie) + "").replace(Me, "").replace(_e, $e[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = lt.trim(p.dataType || "*").toLowerCase().match(ut) || [""], null == p.crossDomain && (o = Re.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === $e[1] && o[2] === $e[2] && (o[3] || ("http:" === o[1] ? 80 : 443)) == ($e[3] || ("http:" === $e[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = lt.param(p.data, p.traditional)), I(qe, p, n, T), 2 === w) return T;
            c = p.global, c && 0 == lt.active++ && lt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !He.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Oe.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fe.test(a) ? a.replace(Fe, "$1_=" + je++) : a + (Oe.test(a) ? "&" : "?") + "_=" + je++)), p.ifModified && (lt.lastModified[a] && T.setRequestHeader("If-Modified-Since", lt.lastModified[a]), lt.etag[a] && T.setRequestHeader("If-None-Match", lt.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + We + "; q=0.01" : "") : p.accepts["*"]);
            for (r in p.headers) T.setRequestHeader(r, p.headers[r]);
            if (p.beforeSend && (p.beforeSend.call(f, T, p) === !1 || 2 === w)) return T.abort();
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[r](p[r]);
            if (u = I(ze, p, n, T)) {
                T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, u.send(y, i)
                } catch (t) {
                    if (!(w < 2)) throw t;
                    i(-1, t)
                }
            } else i(-1, "No Transport");
            return T
        },
        getScript: function(t, n) {
            return lt.get(t, e, n, "script")
        },
        getJSON: function(t, e, n) {
            return lt.get(t, e, n, "json")
        }
    }), lt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return lt.globalEval(t), t
            }
        }
    }), lt.ajaxPrefilter("script", function(t) {
        t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), lt.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var n, i = V.head || lt("head")[0] || V.documentElement;
            return {
                send: function(e, o) {
                    n = V.createElement("script"), n.async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function(t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || o(200, "success"))
                    }, i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(e, !0)
                }
            }
        }
    });
    var Ue = [],
        Qe = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ue.pop() || lt.expando + "_" + je++;
            return this[t] = !0, t
        }
    }), lt.ajaxPrefilter("json jsonp", function(n, i, o) {
        var r, a, s, l = n.jsonp !== !1 && (Qe.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Qe.test(n.data) && "data");
        if (l || "jsonp" === n.dataTypes[0]) return r = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Qe, "$1" + r) : n.jsonp !== !1 && (n.url += (Oe.test(n.url) ? "&" : "?") + n.jsonp + "=" + r), n.converters["script json"] = function() {
            return s || lt.error(r + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = t[r], t[r] = function() {
            s = arguments
        }, o.always(function() {
            t[r] = a, n[r] && (n.jsonpCallback = i.jsonpCallback, Ue.push(r)), s && lt.isFunction(a) && a(s[0]), s = a = e
        }), "script"
    });
    var Xe, Ve, Ye = 0,
        Ke = t.ActiveXObject && function() {
            var t;
            for (t in Xe) Xe[t](e, !0)
        };
    lt.ajaxSettings.xhr = t.ActiveXObject ? function() {
        return !this.isLocal && F() || L()
    } : F, Ve = lt.ajaxSettings.xhr(), lt.support.cors = !!Ve && "withCredentials" in Ve, (Ve = lt.support.ajax = !!Ve) && lt.ajaxTransport(function(n) {
        if (!n.crossDomain || lt.support.cors) {
            var i;
            return {
                send: function(o, r) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (s in n.xhrFields) l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in o) l.setRequestHeader(s, o[s])
                    } catch (t) {}
                    l.send(n.hasContent && n.data || null), i = function(t, o) {
                        var s, c, u, d;
                        try {
                            if (i && (o || 4 === l.readyState))
                                if (i = e, a && (l.onreadystatechange = lt.noop, Ke && delete Xe[a]), o) 4 !== l.readyState && l.abort();
                                else {
                                    d = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
                                    try {
                                        u = l.statusText
                                    } catch (t) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404
                                }
                        } catch (t) {
                            o || r(-1, t)
                        }
                        d && r(s, u, d, c)
                    }, n.async ? 4 === l.readyState ? setTimeout(i) : (a = ++Ye, Ke && (Xe || (Xe = {}, lt(t).unload(Ke)), Xe[a] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(e, !0)
                }
            }
        }
    });
    var Je, Ze, Ge = /^(?:toggle|show|hide)$/,
        tn = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
        en = /queueHooks$/,
        nn = [B],
        on = {
            "*": [function(t, e) {
                var n, i, o = this.createTween(t, e),
                    r = tn.exec(e),
                    a = o.cur(),
                    s = +a || 0,
                    l = 1,
                    c = 20;
                if (r) {
                    if (n = +r[2], "px" !== (i = r[3] || (lt.cssNumber[t] ? "" : "px")) && s) {
                        s = lt.css(o.elem, t, !0) || n || 1;
                        do l = l || ".5", s /= l, lt.style(o.elem, t, s + i); while (l !== (l = o.cur() / a) && 1 !== l && --c)
                    }
                    o.unit = i, o.start = s, o.end = r[1] ? s + (r[1] + 1) * n : n
                }
                return o
            }]
        };
    lt.Animation = lt.extend(_, {
        tweener: function(t, e) {
            lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], on[n] = on[n] || [], on[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? nn.unshift(t) : nn.push(t)
        }
    }), lt.Tween = q, q.prototype = {
        constructor: q,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (lt.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = q.propHooks[this.prop];
            return t && t.get ? t.get(this) : q.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = q.propHooks[this.prop];
            return this.options.duration ? this.pos = e = lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : q.propHooks._default.set(this), this
        }
    }, q.prototype.init.prototype = q.prototype, q.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[lt.cssProps[t.prop]] || lt.cssHooks[t.prop]) ? lt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, lt.each(["toggle", "show", "hide"], function(t, e) {
        var n = lt.fn[e];
        lt.fn[e] = function(t, i, o) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, o)
        }
    }), lt.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(T).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var o = lt.isEmptyObject(t),
                r = lt.speed(e, n, i),
                a = function() {
                    var e = _(this, lt.extend({}, t), r);
                    a.finish = function() {
                        e.stop(!0)
                    }, (o || lt._data(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(t, n, i) {
            var o = function(t) {
                var e = t.stop;
                delete t.stop, e(i)
            };
            return "string" != typeof t && (i = n, n = t, t = e), n && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    n = null != t && t + "queueHooks",
                    r = lt.timers,
                    a = lt._data(this);
                if (n) a[n] && a[n].stop && o(a[n]);
                else
                    for (n in a) a[n] && a[n].stop && en.test(n) && o(a[n]);
                for (n = r.length; n--;) r[n].elem !== this || null != t && r[n].queue !== t || (r[n].anim.stop(i), e = !1, r.splice(n, 1));
                !e && i || lt.dequeue(this, t)
            })
        },
        finish: function(t) {
            return t !== !1 && (t = t || "fx"), this.each(function() {
                var e, n = lt._data(this),
                    i = n[t + "queue"],
                    o = n[t + "queueHooks"],
                    r = lt.timers,
                    a = i ? i.length : 0;
                for (n.finish = !0, lt.queue(this, t, []), o && o.cur && o.cur.finish && o.cur.finish.call(this), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), lt.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        lt.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), lt.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? lt.extend({}, t) : {
            complete: n || !n && e || lt.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !lt.isFunction(e) && e
        };
        return i.duration = lt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in lt.fx.speeds ? lt.fx.speeds[i.duration] : lt.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            lt.isFunction(i.old) && i.old.call(this), i.queue && lt.dequeue(this, i.queue)
        }, i
    }, lt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, lt.timers = [], lt.fx = q.prototype.init, lt.fx.tick = function() {
        var t, n = lt.timers,
            i = 0;
        for (Je = lt.now(); i < n.length; i++)(t = n[i])() || n[i] !== t || n.splice(i--, 1);
        n.length || lt.fx.stop(), Je = e
    }, lt.fx.timer = function(t) {
        t() && lt.timers.push(t) && lt.fx.start()
    }, lt.fx.interval = 13, lt.fx.start = function() {
        Ze || (Ze = setInterval(lt.fx.tick, lt.fx.interval))
    }, lt.fx.stop = function() {
        clearInterval(Ze), Ze = null
    }, lt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function(t) {
        return lt.grep(lt.timers, function(e) {
            return t === e.elem
        }).length
    }), lt.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) {
            lt.offset.setOffset(this, t, e)
        });
        var n, i, o = {
                top: 0,
                left: 0
            },
            r = this[0],
            a = r && r.ownerDocument;
        if (a) return n = a.documentElement, lt.contains(n, r) ? (typeof r.getBoundingClientRect !== X && (o = r.getBoundingClientRect()), i = W(a), {
            top: o.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: o.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : o
    }, lt.offset = {
        setOffset: function(t, e, n) {
            var i = lt.css(t, "position");
            "static" === i && (t.style.position = "relative");
            var o, r, a = lt(t),
                s = a.offset(),
                l = lt.css(t, "top"),
                c = lt.css(t, "left"),
                u = ("absolute" === i || "fixed" === i) && lt.inArray("auto", [l, c]) > -1,
                d = {},
                p = {};
            u ? (p = a.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(c) || 0), lt.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (d.top = e.top - s.top + o), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : a.css(d)
        }
    }, lt.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === lt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (n = t.offset()), n.top += lt.css(t[0], "borderTopWidth", !0), n.left += lt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - lt.css(i, "marginTop", !0),
                    left: e.left - n.left - lt.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || V.documentElement; t && !lt.nodeName(t, "html") && "static" === lt.css(t, "position");) t = t.offsetParent;
                return t || V.documentElement
            })
        }
    }), lt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var i = /Y/.test(n);
        lt.fn[t] = function(o) {
            return lt.access(this, function(t, o, r) {
                var a = W(t);
                if (r === e) return a ? n in a ? a[n] : a.document.documentElement[o] : t[o];
                a ? a.scrollTo(i ? lt(a).scrollLeft() : r, i ? r : lt(a).scrollTop()) : t[o] = r
            }, t, o, arguments.length, null)
        }
    }), lt.each({
        Height: "height",
        Width: "width"
    }, function(t, n) {
        lt.each({
            padding: "inner" + t,
            content: n,
            "": "outer" + t
        }, function(i, o) {
            lt.fn[o] = function(o, r) {
                var a = arguments.length && (i || "boolean" != typeof o),
                    s = i || (o === !0 || r === !0 ? "margin" : "border");
                return lt.access(this, function(n, i, o) {
                    var r;
                    return lt.isWindow(n) ? n.document.documentElement["client" + t] : 9 === n.nodeType ? (r = n.documentElement, Math.max(n.body["scroll" + t], r["scroll" + t], n.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? lt.css(n, i, s) : lt.style(n, i, o, s)
                }, n, a ? o : e, a, null)
            }
        })
    }), t.jQuery = t.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return lt
    })
}(window), function(t, e) {
    "use strict";
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return t("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return t("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = n.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
        },
        fire: function(e, n, i) {
            var o = t.Event(n);
            return e.trigger(o, i), o.result !== !1
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== e && t.data("remote") !== !1
        },
        handleRemote: function(i) {
            var o, r, a, s, l, c;
            if (n.fire(i, "ajax:before")) {
                if (s = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    o = i.data("ujs:submit-button-formmethod") || i.attr("method"), r = i.data("ujs:submit-button-formaction") || i.attr("action"), a = t(i[0]).serializeArray();
                    var u = i.data("ujs:submit-button");
                    u && (a.push(u), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                } else i.is(n.inputChangeSelector) ? (o = i.data("method"), r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (o = i.data("method") || "get", r = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (o = i.data("method"), r = n.href(i), a = i.data("params") || null);
                return c = {
                    type: o || "GET",
                    data: a,
                    dataType: l,
                    beforeSend: function(t, o) {
                        if (o.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + o.accepts.script), !n.fire(i, "ajax:beforeSend", [t, o])) return !1;
                        i.trigger("ajax:send", t)
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(r)
                }, s && (c.xhrFields = {
                    withCredentials: s
                }), r && (c.url = r), n.ajax(c)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (t) {
                return !0
            }
        },
        handleMethod: function(i) {
            var o = n.href(i),
                r = i.data("method"),
                a = i.attr("target"),
                s = n.csrfToken(),
                l = n.csrfParam(),
                c = t('<form method="post" action="' + o + '"></form>'),
                u = '<input name="_method" value="' + r + '" type="hidden" />';
            l === e || s === e || n.isCrossDomain(o) || (u += '<input name="' + l + '" value="' + s + '" type="hidden" />'), a && c.attr("target", a), c.hide().append(u).appendTo("body"), c.submit()
        },
        formElements: function(e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function(e) {
            n.formElements(e, n.disableSelector).each(function() {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function(t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), i !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(e) {
            n.formElements(e, n.enableSelector).each(function() {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function(t) {
            var n = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1),
                t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                o = !1;
            if (!i) return !0;
            if (n.fire(t, "confirm")) {
                try {
                    o = n.confirm(i)
                } catch (t) {
                    (console.error || console.log).call(console, t.stack || t)
                }
                e = n.fire(t, "confirm:complete", [o])
            }
            return o && e
        },
        blankInputs: function(e, n, i) {
            var o, r, a, s, l = t(),
                c = n || "input,textarea",
                u = e.find(c),
                d = {};
            return u.each(function() {
                o = t(this), o.is("input[type=radio]") ? (s = o.attr("name"), d[s] || (0 === e.find('input[type=radio]:checked[name="' + s + '"]').length && (a = e.find('input[type=radio][name="' + s + '"]'), l = l.add(a)), d[s] = s)) : (r = o.is("input[type=checkbox],input[type=radio]") ? o.is(":checked") : !!o.val()) === i && (l = l.add(o))
            }), !!l.length && l
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var i = t.data("disable-with");
            i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(window).on("pageshow.rails", function() {
        t(t.rails.enableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableFormElement(e)
        }), t(t.rails.linkDisableSelector).each(function() {
            var e = t(this);
            e.data("ujs:disabled") && t.rails.enableElement(e)
        })
    }), i.on("ajax:complete", n.linkDisableSelector, function() {
        n.enableElement(t(this))
    }), i.on("ajax:complete", n.buttonDisableSelector, function() {
        n.enableFormElement(t(this))
    }), i.on("click.rails", n.linkClickSelector, function(e) {
        var i = t(this),
            o = i.data("method"),
            r = i.data("params"),
            a = e.metaKey || e.ctrlKey;
        if (!n.allowAction(i)) return n.stopEverything(e);
        if (!a && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
            if (a && (!o || "GET" === o) && !r) return !0;
            var s = n.handleRemote(i);
            return s === !1 ? n.enableElement(i) : s.fail(function() {
                n.enableElement(i)
            }), !1
        }
        return o ? (n.handleMethod(i), !1) : void 0
    }), i.on("click.rails", n.buttonClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var o = n.handleRemote(i);
        return o === !1 ? n.enableFormElement(i) : o.fail(function() {
            n.enableFormElement(i)
        }), !1
    }), i.on("change.rails", n.inputChangeSelector, function(e) {
        var i = t(this);
        return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.on("submit.rails", n.formSubmitSelector, function(i) {
        var o, r, a = t(this),
            s = n.isRemote(a);
        if (!n.allowAction(a)) return n.stopEverything(i);
        if (a.attr("novalidate") === e)
            if (a.data("ujs:formnovalidate-button") === e) {
                if ((o = n.blankInputs(a, n.requiredInputSelector, !1)) && n.fire(a, "ajax:aborted:required", [o])) return n.stopEverything(i)
            } else a.data("ujs:formnovalidate-button", e);
        if (s) {
            if (r = n.nonBlankInputs(a, n.fileInputSelector)) {
                setTimeout(function() {
                    n.disableFormElements(a)
                }, 13);
                var l = n.fire(a, "ajax:aborted:file", [r]);
                return l || setTimeout(function() {
                    n.enableFormElements(a)
                }, 13), l
            }
            return n.handleRemote(a), !1
        }
        setTimeout(function() {
            n.disableFormElements(a)
        }, 13)
    }), i.on("click.rails", n.formInputClickSelector, function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var o = i.attr("name"),
            r = o ? {
                name: o,
                value: i.val()
            } : null,
            a = i.closest("form");
        0 === a.length && (a = t("#" + i.attr("form"))), a.data("ujs:submit-button", r), a.data("ujs:formnovalidate-button", i.attr("formnovalidate")), a.data("ujs:submit-button-formaction", i.attr("formaction")), a.data("ujs:submit-button-formmethod", i.attr("formmethod"))
    }), i.on("ajax:send.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.disableFormElements(t(this))
    }), i.on("ajax:complete.rails", n.formSubmitSelector, function(e) {
        this === e.target && n.enableFormElements(t(this))
    }), t(function() {
        n.refreshCSRFTokens()
    }))
}(jQuery), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
"use strict";
var e = t.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
function(t) {
"use strict";

function e() {
    var t = document.createElement("bootstrap"),
        e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
    for (var n in e)
        if (void 0 !== t.style[n]) return {
            end: e[n]
        };
    return !1
}
t.fn.emulateTransitionEnd = function(e) {
    var n = !1,
        i = this;
    t(this).one("bsTransitionEnd", function() {
        n = !0
    });
    var o = function() {
        n || t(i).trigger(t.support.transition.end)
    };
    return setTimeout(o, e), this
}, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function(e) {
            return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
        }
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.alert");
        o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
    })
}
var n = '[data-dismiss="alert"]',
    i = function(e) {
        t(e).on("click", n, this.close)
    };
i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
    function n() {
        a.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
        r = o.attr("data-target");
    r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
    var a = t(r);
    e && e.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
};
var o = t.fn.alert;
t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
    return t.fn.alert = o, this
}, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.button"),
            r = "object" == typeof e && e;
        o || i.data("bs.button", o = new n(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
}
var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
};
n.VERSION = "3.3.5", n.DEFAULTS = {
    loadingText: "loading..."
}, n.prototype.setState = function(e) {
    var n = "disabled",
        i = this.$element,
        o = i.is("input") ? "val" : "html",
        r = i.data();
    e += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
        i[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
    }, this), 0)
}, n.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var n = this.$element.find("input");
        "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var i = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
    return t.fn.button = i, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = t(n.target);
    i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.carousel"),
            r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
            a = "string" == typeof e ? e : r.slide;
        o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof e ? o.to(e) : a ? o[a]() : r.interval && o.pause().cycle()
    })
}
var n = function(e, n) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, n.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, n.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, n.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, n.prototype.getItemForDirection = function(t, e) {
    var n = this.getItemIndex(e);
    if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
    var i = "prev" == t ? -1 : 1,
        o = (n + i) % this.$items.length;
    return this.$items.eq(o)
}, n.prototype.to = function(t) {
    var e = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
}, n.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, n.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
}, n.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
}, n.prototype.slide = function(e, i) {
    var o = this.$element.find(".item.active"),
        r = i || this.getItemForDirection(e, o),
        a = this.interval,
        s = "next" == e ? "left" : "right",
        l = this;
    if (r.hasClass("active")) return this.sliding = !1;
    var c = r[0],
        u = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: s
        });
    if (this.$element.trigger(u), !u.isDefaultPrevented()) {
        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var d = t(this.$indicators.children()[this.getItemIndex(r)]);
            d && d.addClass("active")
        }
        var p = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: s
        });
        return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
            r.removeClass([e, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(p)
            }, 0)
        }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
    }
};
var i = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = i, this
};
var o = function(n) {
    var i, o = t(this),
        r = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    if (r.hasClass("carousel")) {
        var a = t.extend({}, r.data(), o.data()),
            s = o.attr("data-slide-to");
        s && (a.interval = !1), e.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var n = t(this);
        e.call(n, n.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var n;
    return t(e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
}

function n(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.collapse"),
            r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof e && o[e]()
    })
}
var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
    toggle: !0
}, i.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(o && o.length && (e = o.data("bs.collapse")) && e.transitioning)) {
            var r = t.Event("show.bs.collapse");
            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                var a = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return s.call(this);
                var l = t.camelCase(["scroll", a].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
            }
        }
    }
}, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var o = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
        }
    }
}, i.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, i.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
        var o = t(i);
        this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
}, i.prototype.addAriaAndCollapsedClass = function(t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
};
var o = t.fn.collapse;
t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = o, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var o = t(this);
    o.attr("data-target") || i.preventDefault();
    var r = e(o),
        a = r.data("bs.collapse"),
        s = a ? "toggle" : o.data();
    n.call(r, s)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var n = e.attr("data-target");
    n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && t(n);
    return i && i.length ? i : e.parent()
}

function n(n) {
    n && 3 === n.which || (t(o).remove(), t(r).each(function() {
        var i = t(this),
            o = e(i),
            r = {
                relatedTarget: this
            };
        o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger("hidden.bs.dropdown", r))))
    }))
}

function i(e) {
    return this.each(function() {
        var n = t(this),
            i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", i = new a(this)), "string" == typeof e && i[e].call(n)
    })
}
var o = ".dropdown-backdrop",
    r = '[data-toggle="dropdown"]',
    a = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
a.VERSION = "3.3.5", a.prototype.toggle = function(i) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
        var r = e(o),
            a = r.hasClass("open");
        if (n(), !a) {
            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
            var s = {
                relatedTarget: this
            };
            if (r.trigger(i = t.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
            o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger("shown.bs.dropdown", s)
        }
        return !1
    }
}, a.prototype.keydown = function(n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
        var i = t(this);
        if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
            var o = e(i),
                a = o.hasClass("open");
            if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
            var s = " li:not(.disabled):visible a",
                l = o.find(".dropdown-menu" + s);
            if (l.length) {
                var c = l.index(n.target);
                38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
            }
        }
    }
};
var s = t.fn.dropdown;
t.fn.dropdown = i, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = s, this
}, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery),
function(t) {
"use strict";

function e(e, i) {
    return this.each(function() {
        var o = t(this),
            r = o.data("bs.modal"),
            a = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        r || o.data("bs.modal", r = new n(this, a)), "string" == typeof e ? r[e](i) : a.show && r.show(i)
    })
}
var n = function(e, n) {
    this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, n.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, n.prototype.show = function(e) {
    var i = this,
        o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        i.$element.one("mouseup.dismiss.bs.modal", function(e) {
            t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var o = t.support.transition && i.$element.hasClass("fade");
        i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
        var r = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        o ? i.$dialog.one("bsTransitionEnd", function() {
            i.$element.trigger("focus").trigger(r)
        }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
    }))
}, n.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
}, n.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
        this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, n.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, n.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, n.prototype.backdrop = function(e) {
    var i = this,
        o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var r = t.support.transition && o;
        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var a = function() {
            i.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
    } else e && e()
}, n.prototype.handleUpdate = function() {
    this.adjustDialog()
}, n.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, n.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, n.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, n.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, n.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var i = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
    return t.fn.modal = i, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = t(this),
        o = i.attr("href"),
        r = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
        a = r.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, r.data(), i.data());
    i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
            i.is(":visible") && i.trigger("focus")
        })
    }), e.call(r, a, this)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.tooltip"),
            r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof e && o[e]())
    })
}
var n = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, n.prototype.init = function(e, n, i) {
    if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
        var a = o[r];
        if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != a) {
            var s = "hover" == a ? "mouseenter" : "focusin",
                l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.getOptions = function(e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, n.prototype.getDelegateOptions = function() {
    var e = {},
        n = this.getDefaults();
    return this._options && t.each(this._options, function(t, i) {
        n[t] != i && (e[t] = i)
    }), e
}, n.prototype.enter = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
        "in" == n.hoverState && n.show()
    }, n.options.delay.show)) : n.show())
}, n.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, n.prototype.leave = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
        "out" == n.hoverState && n.hide()
    }, n.options.delay.hide)) : n.hide())
}, n.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (e.isDefaultPrevented() || !i) return;
        var o = this,
            r = this.tip(),
            a = this.getUID(this.type);
        this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
        var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(s);
        c && (s = s.replace(l, "") || "top"), r.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var u = this.getPosition(),
            d = r[0].offsetWidth,
            p = r[0].offsetHeight;
        if (c) {
            var f = s,
                h = this.getPosition(this.$viewport);
            s = "bottom" == s && u.bottom + p > h.bottom ? "top" : "top" == s && u.top - p < h.top ? "bottom" : "right" == s && u.right + d > h.width ? "left" : "left" == s && u.left - d < h.left ? "right" : s, r.removeClass(f).addClass(s)
        }
        var m = this.getCalculatedOffset(s, u, d, p);
        this.applyPlacement(m, s);
        var g = function() {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
        };
        t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
    }
}, n.prototype.applyPlacement = function(e, n) {
    var i = this.tip(),
        o = i[0].offsetWidth,
        r = i[0].offsetHeight,
        a = parseInt(i.css("margin-top"), 10),
        s = parseInt(i.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(i[0], t.extend({
        using: function(t) {
            i.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), i.addClass("in");
    var l = i[0].offsetWidth,
        c = i[0].offsetHeight;
    "top" == n && c != r && (e.top = e.top + r - c);
    var u = this.getViewportAdjustedDelta(n, e, l, c);
    u.left ? e.left += u.left : e.top += u.top;
    var d = /top|bottom/.test(n),
        p = d ? 2 * u.left - o + l : 2 * u.top - r + c,
        f = d ? "offsetWidth" : "offsetHeight";
    i.offset(e), this.replaceArrow(p, i[0][f], d)
}, n.prototype.replaceArrow = function(t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
}, n.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, n.prototype.hide = function(e) {
    function i() {
        "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
    }
    var o = this,
        r = t(this.$tip),
        a = t.Event("hide.bs." + this.type);
    return this.$element.trigger(a), a.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
}, n.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, n.prototype.hasContent = function() {
    return this.getTitle()
}, n.prototype.getPosition = function(e) {
    e = e || this.$element;
    var n = e[0],
        i = "BODY" == n.tagName,
        o = n.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
        width: o.right - o.left,
        height: o.bottom - o.top
    }));
    var r = i ? {
            top: 0,
            left: 0
        } : e.offset(),
        a = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        s = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, o, a, s, r)
}, n.prototype.getCalculatedOffset = function(t, e, n, i) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - n / 2
    } : "top" == t ? {
        top: e.top - i,
        left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - i / 2,
        left: e.left - n
    } : {
        top: e.top + e.height / 2 - i / 2,
        left: e.left + e.width
    }
}, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var r = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var s = e.top - r - a.scroll,
            l = e.top + r - a.scroll + i;
        s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
    } else {
        var c = e.left - r,
            u = e.left + r + n;
        c < a.left ? o.left = a.left - c : u > a.right && (o.left = a.left + a.width - u)
    }
    return o
}, n.prototype.getTitle = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, n.prototype.getUID = function(t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
}, n.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, n.prototype.enable = function() {
    this.enabled = !0
}, n.prototype.disable = function() {
    this.enabled = !1
}, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, n.prototype.toggle = function(e) {
    var n = this;
    e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
}, n.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
    })
};
var i = t.fn.tooltip;
t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = i, this
}
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.popover"),
            r = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof e && o[e]())
    })
}
var n = function(t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        n = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, n.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var i = t.fn.popover;
t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
    return t.fn.popover = i, this
}
}(jQuery),
function(t) {
"use strict";

function e(n, i) {
    this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function n(n) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.scrollspy"),
            r = "object" == typeof n && n;
        o || i.data("bs.scrollspy", o = new e(this, r)), "string" == typeof n && o[n]()
    })
}
e.VERSION = "3.3.5", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
    var e = this,
        n = "offset",
        i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = t(this),
            o = e.data("target") || e.attr("href"),
            r = /^#./.test(o) && t(o);
        return r && r.length && r.is(":visible") && [
            [r[n]().top + i, o]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        i = this.options.offset + n - this.$scrollElement.height(),
        o = this.offsets,
        r = this.targets,
        a = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), e >= i) return a != (t = r[r.length - 1]) && this.activate(t);
    if (a && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) a != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
}, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        i = t(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var i = t.fn.scrollspy;
t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = i, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
        var e = t(this);
        n.call(e, e.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.tab");
        o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
    })
}
var n = function(e) {
    this.element = t(e)
};
n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
    var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.data("target");
    if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var o = n.find(".active:last a"),
            r = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            a = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
        if (o.trigger(r), e.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
            var s = t(i);
            this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                o.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: o[0]
                })
            })
        }
    }
}, n.prototype.activate = function(e, i, o) {
    function r() {
        a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var a = i.find("> .active"),
        s = o && t.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
    a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
};
var i = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
    return t.fn.tab = i, this
};
var o = function(n) {
    n.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.affix"),
            r = "object" == typeof e && e;
        o || i.data("bs.affix", o = new n(this, r)), "string" == typeof e && o[e]()
    })
}
var n = function(e, i) {
    this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
}, n.prototype.getState = function(t, e, n, i) {
    var o = this.$target.scrollTop(),
        r = this.$element.offset(),
        a = this.$target.height();
    if (null != n && "top" == this.affixed) return n > o && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(t - i >= o + a) && "bottom";
    var s = null == this.affixed,
        l = s ? o : r.top,
        c = s ? a : e;
    return null != n && n >= o ? "top" : null != i && l + c >= t - i && "bottom"
}, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            i = this.options.offset,
            o = i.top,
            r = i.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
        "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
        var s = this.getState(a, e, o, r);
        if (this.affixed != s) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (s ? "-" + s : ""),
                c = t.Event(l + ".bs.affix");
            if (this.$element.trigger(c), c.isDefaultPrevented()) return;
            this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == s && this.$element.offset({
            top: a - e - r
        })
    }
};
var i = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
    return t.fn.affix = i, this
}, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
        var n = t(this),
            i = n.data();
        i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
    })
})
}(jQuery),
function(t) {
var e = function(e, i) {
    if (this.element = t(e), this.format = n.parseFormat(i.format || this.element.data("date-format") || "mm/dd/yyyy"), this.picker = t(n.template).appendTo("body").on({
            click: t.proxy(this.click, this)
        }), this.isInput = this.element.is("input"), this.component = !!this.element.is(".date") && this.element.find(".add-on"), this.isInput ? this.element.on({
            focus: t.proxy(this.show, this),
            keyup: t.proxy(this.update, this)
        }) : this.component ? this.component.on("click", t.proxy(this.show, this)) : this.element.on("click", t.proxy(this.show, this)), this.minViewMode = i.minViewMode || this.element.data("date-minviewmode") || 0, "string" == typeof this.minViewMode) switch (this.minViewMode) {
        case "months":
            this.minViewMode = 1;
            break;
        case "years":
            this.minViewMode = 2;
            break;
        default:
            this.minViewMode = 0
    }
    if (this.viewMode = i.viewMode || this.element.data("date-viewmode") || 0, "string" == typeof this.viewMode) switch (this.viewMode) {
        case "months":
            this.viewMode = 1;
            break;
        case "years":
            this.viewMode = 2;
            break;
        default:
            this.viewMode = 0
    }
    this.startViewMode = this.viewMode, this.weekStart = i.weekStart || this.element.data("date-weekstart") || 0, this.weekEnd = 0 === this.weekStart ? 6 : this.weekStart - 1, this.onRender = i.onRender, this.fillDow(), this.fillMonths(), this.update(), this.showMode()
};
e.prototype = {
    constructor: e,
    show: function(e) {
        this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.place(), t(window).on("resize", t.proxy(this.place, this)), e && (e.stopPropagation(), e.preventDefault()), this.isInput;
        var n = this;
        t(document).on("mousedown", function(e) {
            0 == t(e.target).closest(".datepicker").length && n.hide()
        }), this.element.trigger({
            type: "show",
            date: this.date
        })
    },
    hide: function() {
        this.picker.hide(), t(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || t(document).off("mousedown", this.hide), this.element.trigger({
            type: "hide",
            date: this.date
        })
    },
    set: function() {
        var t = n.formatDate(this.date, this.format);
        this.isInput ? this.element.prop("value", t) : (this.component && this.element.find("input").prop("value", t), this.element.data("date", t))
    },
    setValue: function(t) {
        this.date = "string" == typeof t ? n.parseDate(t, this.format) : new Date(t), this.set(), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
    },
    place: function() {
        var t = this.component ? this.component.offset() : this.element.offset();
        this.picker.css({
            top: t.top + this.height,
            left: t.left
        })
    },
    update: function(t) {
        this.date = n.parseDate("string" == typeof t ? t : this.isInput ? this.element.prop("value") : this.element.data("date"), this.format), this.viewDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1, 0, 0, 0, 0), this.fill()
    },
    fillDow: function() {
        for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="dow">' + n.dates.daysMin[t++ % 7] + "</th>";
        e += "</tr>", this.picker.find(".datepicker-days thead").append(e)
    },
    fillMonths: function() {
        for (var t = "", e = 0; e < 12;) t += '<span class="month">' + n.dates.monthsShort[e++] + "</span>";
        this.picker.find(".datepicker-months td").append(t)
    },
    fill: function() {
        var t = new Date(this.viewDate),
            e = t.getFullYear(),
            i = t.getMonth(),
            o = this.date.valueOf();
        this.picker.find(".datepicker-days th:eq(1)").text(n.dates.months[i] + " " + e);
        var r = new Date(e, i - 1, 28, 0, 0, 0, 0),
            a = n.getDaysInMonth(r.getFullYear(), r.getMonth());
        r.setDate(a), r.setDate(a - (r.getDay() - this.weekStart + 7) % 7);
        var s = new Date(r);
        s.setDate(s.getDate() + 42), s = s.valueOf();
        for (var l, c, u, d = []; r.valueOf() < s;) r.getDay() === this.weekStart && d.push("<tr>"), l = this.onRender(r), c = r.getFullYear(), u = r.getMonth(), u < i && c === e || c < e ? l += " old" : (u > i && c === e || c > e) && (l += " new"), r.valueOf() === o && (l += " active"), d.push('<td class="day ' + l + '">' + r.getDate() + "</td>"), r.getDay() === this.weekEnd && d.push("</tr>"), r.setDate(r.getDate() + 1);
        this.picker.find(".datepicker-days tbody").empty().append(d.join(""));
        var p = this.date.getFullYear(),
            f = this.picker.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");
        p === e && f.eq(this.date.getMonth()).addClass("active"), d = "", e = 10 * parseInt(e / 10, 10);
        var h = this.picker.find(".datepicker-years").find("th:eq(1)").text(e + "-" + (e + 9)).end().find("td");
        e -= 1;
        for (var m = -1; m < 11; m++) d += '<span class="year' + (m === -1 || 10 === m ? " old" : "") + (p === e ? " active" : "") + '">' + e + "</span>", e += 1;
        h.html(d)
    },
    click: function(e) {
        e.stopPropagation(), e.preventDefault();
        var i = t(e.target).closest("span, td, th");
        if (1 === i.length) switch (i[0].nodeName.toLowerCase()) {
            case "th":
                switch (i[0].className) {
                    case "switch":
                        this.showMode(1);
                        break;
                    case "prev":
                    case "next":
                        this.viewDate["set" + n.modes[this.viewMode].navFnc].call(this.viewDate, this.viewDate["get" + n.modes[this.viewMode].navFnc].call(this.viewDate) + n.modes[this.viewMode].navStep * ("prev" === i[0].className ? -1 : 1)), this.fill(), this.set()
                }
                break;
            case "span":
                if (i.is(".month")) {
                    var o = i.parent().find("span").index(i);
                    this.viewDate.setMonth(o)
                } else {
                    var r = parseInt(i.text(), 10) || 0;
                    this.viewDate.setFullYear(r)
                }
                0 !== this.viewMode && (this.date = new Date(this.viewDate), this.element.trigger({
                    type: "changeDate",
                    date: this.date,
                    viewMode: n.modes[this.viewMode].clsName
                })), this.showMode(-1), this.fill(), this.set();
                break;
            case "td":
                if (i.is(".day") && !i.is(".disabled")) {
                    var a = parseInt(i.text(), 10) || 1,
                        o = this.viewDate.getMonth();
                    i.is(".old") ? o -= 1 : i.is(".new") && (o += 1);
                    var r = this.viewDate.getFullYear();
                    this.date = new Date(r, o, a, 0, 0, 0, 0), this.viewDate = new Date(r, o, Math.min(28, a), 0, 0, 0, 0), this.fill(), this.set(), this.element.trigger({
                        type: "changeDate",
                        date: this.date,
                        viewMode: n.modes[this.viewMode].clsName
                    })
                }
        }
    },
    mousedown: function(t) {
        t.stopPropagation(), t.preventDefault()
    },
    showMode: function(t) {
        t && (this.viewMode = Math.max(this.minViewMode, Math.min(2, this.viewMode + t))), this.picker.find(">div").hide().filter(".datepicker-" + n.modes[this.viewMode].clsName).show()
    }
}, t.fn.datepicker = function(n, i) {
    return this.each(function() {
        var o = t(this),
            r = o.data("datepicker"),
            a = "object" == typeof n && n;
        r || o.data("datepicker", r = new e(this, t.extend({}, t.fn.datepicker.defaults, a))), "string" == typeof n && r[n](i)
    })
}, t.fn.datepicker.defaults = {
    onRender: function() {
        return ""
    }
}, t.fn.datepicker.Constructor = e;
var n = {
    modes: [{
        clsName: "days",
        navFnc: "Month",
        navStep: 1
    }, {
        clsName: "months",
        navFnc: "FullYear",
        navStep: 1
    }, {
        clsName: "years",
        navFnc: "FullYear",
        navStep: 10
    }],
    dates: {
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    isLeapYear: function(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    },
    getDaysInMonth: function(t, e) {
        return [31, n.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
    },
    parseFormat: function(t) {
        var e = t.match(/[.\/\-\s].*?/),
            n = t.split(/\W+/);
        if (!e || !n || 0 === n.length) throw new Error("Invalid date format.");
        return {
            separator: e,
            parts: n
        }
    },
    parseDate: function(t, e) {
        var n, i = t.split(e.separator),
            t = new Date;
        if (t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), i.length === e.parts.length) {
            for (var o = t.getFullYear(), r = t.getDate(), a = t.getMonth(), s = 0, l = e.parts.length; s < l; s++) switch (n = parseInt(i[s], 10) || 1, e.parts[s]) {
                case "dd":
                case "d":
                    r = n, t.setDate(n);
                    break;
                case "mm":
                case "m":
                    a = n - 1, t.setMonth(n - 1);
                    break;
                case "yy":
                    o = 2e3 + n, t.setFullYear(2e3 + n);
                    break;
                case "yyyy":
                    o = n, t.setFullYear(n)
            }
            t = new Date(o, a, r, 0, 0, 0)
        }
        return t
    },
    formatDate: function(t, e) {
        var n = {
            d: t.getDate(),
            m: t.getMonth() + 1,
            yy: t.getFullYear().toString().substring(2),
            yyyy: t.getFullYear()
        };
        n.dd = (n.d < 10 ? "0" : "") + n.d, n.mm = (n.m < 10 ? "0" : "") + n.m;
        for (var t = [], i = 0, o = e.parts.length; i < o; i++) t.push(n[e.parts[i]]);
        return t.join(e.separator)
    },
    headTemplate: '<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>'
};
n.template = '<div class="datepicker dropdown-menu"><div class="datepicker-days"><table class=" table-condensed">' + n.headTemplate + '<tbody></tbody></table></div><div class="datepicker-months"><table class="table-condensed">' + n.headTemplate + n.contTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + n.headTemplate + n.contTemplate + "</table></div></div>"
}(window.jQuery),
function(t) {
"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(t) {
var e, n, i, o, r, a, s = "Close",
    l = "BeforeClose",
    c = "AfterClose",
    u = "BeforeAppend",
    d = "MarkupParse",
    p = "Open",
    f = "Change",
    h = "mfp",
    m = "." + h,
    g = "mfp-ready",
    v = "mfp-removing",
    y = "mfp-prevent-close",
    b = function() {},
    w = !!window.jQuery,
    x = t(window),
    T = function(t, n) {
        e.ev.on(h + t + m, n)
    },
    C = function(e, n, i, o) {
        var r = document.createElement("div");
        return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r
    },
    k = function(n, i) {
        e.ev.triggerHandler(h + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
    },
    S = function(n) {
        return n === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = n), e.currTemplate.closeBtn
    },
    E = function() {
        t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
    },
    N = function() {
        var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];
        if (t.transition !== undefined) return !0;
        for (; e.length;)
            if (e.pop() + "Transition" in t) return !0;
        return !1
    };
b.prototype = {
    constructor: b,
    init: function() {
        var n = navigator.appVersion;
        e.isIE7 = n.indexOf("MSIE 7.") !== -1, e.isIE8 = n.indexOf("MSIE 8.") !== -1, e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = N(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document), e.popupsCache = {}
    },
    open: function(n) {
        var o;
        if (n.isObj === !1) {
            e.items = n.items.toArray(), e.index = 0;
            var a, s = n.items;
            for (o = 0; o < s.length; o++)
                if (a = s[o], a.parsed && (a = a.el[0]), a === n.el[0]) {
                    e.index = o;
                    break
                }
        } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
        if (e.isOpen) return void e.updateItemHTML();
        e.types = [], r = "", n.mainEl && n.mainEl.length ? e.ev = n.mainEl.eq(0) : e.ev = i, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = C("bg").on("click" + m, function() {
            e.close()
        }), e.wrap = C("wrap").attr("tabindex", -1).on("click" + m, function(t) {
            e._checkIfClose(t.target) && e.close()
        }), e.container = C("container", e.wrap)), e.contentContainer = C("content"), e.st.preloader && (e.preloader = C("preloader", e.container, e.st.tLoading));
        var l = t.magnificPopup.modules;
        for (o = 0; o < l.length; o++) {
            var c = l[o];
            c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
        }
        k("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (T(d, function(t, e, n, i) {
            n.close_replaceWith = S(i.type)
        }), r += " mfp-close-btn-in") : e.wrap.append(S())), e.st.alignTop && (r += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
            overflow: e.st.overflowY,
            overflowX: "hidden",
            overflowY: e.st.overflowY
        }) : e.wrap.css({
            top: x.scrollTop(),
            position: "absolute"
        }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
            height: i.height(),
            position: "absolute"
        }), e.st.enableEscapeKey && i.on("keyup" + m, function(t) {
            27 === t.keyCode && e.close()
        }), x.on("resize" + m, function() {
            e.updateSize()
        }), e.st.closeOnContentClick || (r += " mfp-auto-cursor"), r && e.wrap.addClass(r);
        var u = e.wH = x.height(),
            f = {};
        if (e.fixedContentPos && e._hasScrollBar(u)) {
            var h = e._getScrollbarSize();
            h && (f.marginRight = h)
        }
        e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : f.overflow = "hidden");
        var v = e.st.mainClass;
        return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), k("BuildControls"), t("html").css(f), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
            e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), i.on("focusin" + m, e._onFocusIn)
        }, 16), e.isOpen = !0, e.updateSize(u), k(p), n
    },
    close: function() {
        e.isOpen && (k(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
            e._close()
        }, e.st.removalDelay)) : e._close())
    },
    _close: function() {
        k(s);
        var n = v + " " + g + " ";
        if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
            var o = {
                marginRight: ""
            };
            e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
        }
        i.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, k(c)
    },
    updateSize: function(t) {
        if (e.isIOS) {
            var n = document.documentElement.clientWidth / window.innerWidth,
                i = window.innerHeight * n;
            e.wrap.css("height", i), e.wH = i
        } else e.wH = t || x.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), k("Resize")
    },
    updateItemHTML: function() {
        var n = e.items[e.index];
        e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
        var i = n.type;
        if (k("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
            var r = !!e.st[i] && e.st[i].markup;
            k("FirstMarkupParse", r), e.currTemplate[i] = !r || t(r)
        }
        o && o !== n.type && e.container.removeClass("mfp-" + o + "-holder");
        var a = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
        e.appendContent(a, i), n.preloaded = !0, k(f, n), o = n.type, e.container.prepend(e.contentContainer), k("AfterChange")
    },
    appendContent: function(t, n) {
        e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[n] === !0 ? e.content.find(".mfp-close").length || e.content.append(S()) : e.content = t : e.content = "", k(u), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
    },
    parseEl: function(n) {
        var i, o = e.items[n];
        if (o.tagName ? o = {
                el: t(o)
            } : (i = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
            for (var r = e.types, a = 0; a < r.length; a++)
                if (o.el.hasClass("mfp-" + r[a])) {
                    i = r[a];
                    break
                }
            o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
        }
        return o.type = i || e.st.type || "inline", o.index = n, o.parsed = !0, e.items[n] = o, k("ElementParse", o), e.items[n]
    },
    addGroup: function(t, n) {
        var i = function(i) {
            i.mfpEl = this, e._openClick(i, t, n)
        };
        n || (n = {});
        var o = "click.magnificPopup";
        n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)))
    },
    _openClick: function(n, i, o) {
        if ((o.midClick !== undefined ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
            var r = o.disableOn !== undefined ? o.disableOn : t.magnificPopup.defaults.disableOn;
            if (r)
                if (t.isFunction(r)) {
                    if (!r.call(e)) return !0
                } else if (x.width() < r) return !0;
            n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o)
        }
    },
    updateStatus: function(t, i) {
        if (e.preloader) {
            n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
            var o = {
                status: t,
                text: i
            };
            k("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", function(t) {
                t.stopImmediatePropagation()
            }), e.container.addClass("mfp-s-" + t), n = t
        }
    },
    _checkIfClose: function(n) {
        if (!t(n).hasClass(y)) {
            var i = e.st.closeOnContentClick,
                o = e.st.closeOnBgClick;
            if (i && o) return !0;
            if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
            if (n === e.content[0] || t.contains(e.content[0], n)) {
                if (i) return !0
            } else if (o && t.contains(document, n)) return !0;
            return !1
        }
    },
    _addClassToMFP: function(t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t)
    },
    _removeClassFromMFP: function(t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
    },
    _hasScrollBar: function(t) {
        return (e.isIE7 ? i.height() : document.body.scrollHeight) > (t || x.height())
    },
    _setFocus: function() {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
    },
    _onFocusIn: function(n) {
        if (n.target !== e.wrap[0] && !t.contains(e.wrap[0], n.target)) return e._setFocus(), !1
    },
    _parseMarkup: function(e, n, i) {
        var o;
        i.data && (n = t.extend(i.data, n)), k(d, [e, n, i]), t.each(n, function(t, n) {
            if (n === undefined || n === !1) return !0;
            if (o = t.split("_"), o.length > 1) {
                var i = e.find(m + "-" + o[0]);
                if (i.length > 0) {
                    var r = o[1];
                    "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                }
            } else e.find(m + "-" + t).html(n)
        })
    },
    _getScrollbarSize: function() {
        if (e.scrollbarSize === undefined) {
            var t = document.createElement("div");
            t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
        }
        return e.scrollbarSize
    }
}, t.magnificPopup = {
    instance: null,
    proto: b.prototype,
    modules: [],
    open: function(e, n) {
        return E(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = n || 0, this.instance.open(e)
    },
    close: function() {
        return t.magnificPopup.instance && t.magnificPopup.instance.close()
    },
    registerModule: function(e, n) {
        n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
    },
    defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading..."
    }
}, t.fn.magnificPopup = function(n) {
    E();
    var i = t(this);
    if ("string" == typeof n)
        if ("open" === n) {
            var o, r = w ? i.data("magnificPopup") : i[0].magnificPopup,
                a = parseInt(arguments[1], 10) || 0;
            r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), e._openClick({
                mfpEl: o
            }, i, r)
        } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1));
    else n = t.extend(!0, {}, n), w ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
    return i
};
var A, D, $, I = "inline",
    j = function() {
        $ && (D.after($.addClass(A)).detach(), $ = null)
    };
t.magnificPopup.registerModule(I, {
    options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found"
    },
    proto: {
        initInline: function() {
            e.types.push(I), T(s + "." + I, function() {
                j()
            })
        },
        getInline: function(n, i) {
            if (j(), n.src) {
                var o = e.st.inline,
                    r = t(n.src);
                if (r.length) {
                    var a = r[0].parentNode;
                    a && a.tagName && (D || (A = o.hiddenClass, D = C(A), A = "mfp-" + A), $ = r.after(D).detach().removeClass(A)), e.updateStatus("ready")
                } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                return n.inlineElement = r, r
            }
            return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
        }
    }
});
var O, M = "ajax",
    F = function() {
        O && t(document.body).removeClass(O)
    },
    L = function() {
        F(), e.req && e.req.abort()
    };
t.magnificPopup.registerModule(M, {
    options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
        initAjax: function() {
            e.types.push(M), O = e.st.ajax.cursor, T(s + "." + M, L), T("BeforeChange." + M, L)
        },
        getAjax: function(n) {
            O && t(document.body).addClass(O), e.updateStatus("loading");
            var i = t.extend({
                url: n.src,
                success: function(i, o, r) {
                    var a = {
                        data: i,
                        xhr: r
                    };
                    k("ParseAjax", a), e.appendContent(t(a.data), M), n.finished = !0, F(), e._setFocus(), setTimeout(function() {
                        e.wrap.addClass(g)
                    }, 16), e.updateStatus("ready"), k("AjaxContentAdded")
                },
                error: function() {
                    F(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                }
            }, e.st.ajax.settings);
            return e.req = t.ajax(i), ""
        }
    }
});
var P, H = function(n) {
    if (n.data && n.data.title !== undefined) return n.data.title;
    var i = e.st.image.titleSrc;
    if (i) {
        if (t.isFunction(i)) return i.call(e, n);
        if (n.el) return n.el.attr(i) || ""
    }
    return ""
};
t.magnificPopup.registerModule("image", {
    options: {
        markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
        initImage: function() {
            var n = e.st.image,
                i = ".image";
            e.types.push("image"), T(p + i, function() {
                "image" === e.currItem.type && n.cursor && t(document.body).addClass(n.cursor)
            }), T(s + i, function() {
                n.cursor && t(document.body).removeClass(n.cursor), x.off("resize" + m)
            }), T("Resize" + i, e.resizeImage), e.isLowIE && T("AfterChange", e.resizeImage)
        },
        resizeImage: function() {
            var t = e.currItem;
            if (t && t.img && e.st.image.verticalFit) {
                var n = 0;
                e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
            }
        },
        _onImageHasSize: function(t) {
            t.img && (t.hasSize = !0, P && clearInterval(P), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
        },
        findImageSize: function(t) {
            var n = 0,
                i = t.img[0],
                o = function(r) {
                    P && clearInterval(P), P = setInterval(function() {
                        if (i.naturalWidth > 0) return void e._onImageHasSize(t);
                        n > 200 && clearInterval(P), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)
                    }, r)
                };
            o(1)
        },
        getImage: function(n, i) {
            var o = 0,
                r = function() {
                    n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, k("ImageLoadComplete")) : (o++, o < 200 ? setTimeout(r, 100) : a()))
                },
                a = function() {
                    n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                },
                s = e.st.image,
                l = i.find(".mfp-img");
            if (l.length) {
                var c = document.createElement("img");
                c.className = "mfp-img", n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")), n.img = t(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), c = n.img[0], c.naturalWidth > 0 ? n.hasSize = !0 : c.width || (n.hasSize = !1)
            }
            return e._parseMarkup(i, {
                title: H(n),
                img_replaceWith: n.img
            }, n), e.resizeImage(), n.hasSize ? (P && clearInterval(P), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
        }
    }
});
var _, R = function() {
    return _ === undefined && (_ = document.createElement("p").style.MozTransform !== undefined), _
};
t.magnificPopup.registerModule("zoom", {
    options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function(t) {
            return t.is("img") ? t : t.find("img")
        }
    },
    proto: {
        initZoom: function() {
            var t, n = e.st.zoom,
                i = ".zoom";
            if (n.enabled && e.supportsTransition) {
                var o, r, a = n.duration,
                    c = function(t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            i = "all " + n.duration / 1e3 + "s " + n.easing,
                            o = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            },
                            r = "transition";
                        return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, e.css(o), e
                    },
                    u = function() {
                        e.content.css("visibility", "visible")
                    };
                T("BuildControls" + i, function() {
                    if (e._allowZoom()) {
                        if (clearTimeout(o), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void u();
                        r = c(t), r.css(e._getOffset()), e.wrap.append(r), o = setTimeout(function() {
                            r.css(e._getOffset(!0)), o = setTimeout(function() {
                                u(), setTimeout(function() {
                                    r.remove(), t = r = null, k("ZoomAnimationEnded")
                                }, 16)
                            }, a)
                        }, 16)
                    }
                }), T(l + i, function() {
                    if (e._allowZoom()) {
                        if (clearTimeout(o), e.st.removalDelay = a, !t) {
                            if (!(t = e._getItemToZoom())) return;
                            r = c(t)
                        }
                        r.css(e._getOffset(!0)), e.wrap.append(r), e.content.css("visibility", "hidden"), setTimeout(function() {
                            r.css(e._getOffset())
                        }, 16)
                    }
                }), T(s + i, function() {
                    e._allowZoom() && (u(), r && r.remove(), t = null)
                })
            }
        },
        _allowZoom: function() {
            return "image" === e.currItem.type
        },
        _getItemToZoom: function() {
            return !!e.currItem.hasSize && e.currItem.img
        },
        _getOffset: function(n) {
            var i;
            i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
            var o = i.offset(),
                r = parseInt(i.css("padding-top"), 10),
                a = parseInt(i.css("padding-bottom"), 10);
            o.top -= t(window).scrollTop() - r;
            var s = {
                width: i.width(),
                height: (w ? i.innerHeight() : i[0].offsetHeight) - a - r
            };
            return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
        }
    }
});
var B = "iframe",
    q = "//about:blank",
    z = function(t) {
        if (e.currTemplate[B]) {
            var n = e.currTemplate[B].find("iframe");
            n.length && (t || (n[0].src = q), e.isIE8 && n.css("display", t ? "block" : "none"))
        }
    };
t.magnificPopup.registerModule(B, {
    options: {
        markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
            youtube: {
                index: "youtube.com",
                id: "v=",
                src: "//www.youtube.com/embed/%id%?autoplay=1"
            },
            vimeo: {
                index: "vimeo.com/",
                id: "/",
                src: "//player.vimeo.com/video/%id%?autoplay=1"
            },
            gmaps: {
                index: "//maps.google.",
                src: "%id%&output=embed"
            }
        }
    },
    proto: {
        initIframe: function() {
            e.types.push(B), T("BeforeChange", function(t, e, n) {
                e !== n && (e === B ? z() : n === B && z(!0))
            }), T(s + "." + B, function() {
                z()
            })
        },
        getIframe: function(n, i) {
            var o = n.src,
                r = e.st.iframe;
            t.each(r.patterns, function() {
                if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1
            });
            var a = {};
            return r.srcAction && (a[r.srcAction] = o), e._parseMarkup(i, a, n), e.updateStatus("ready"), i
        }
    }
});
var W = function(t) {
        var n = e.items.length;
        return t > n - 1 ? t - n : t < 0 ? n + t : t
    },
    U = function(t, e, n) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
    };
t.magnificPopup.registerModule("gallery", {
    options: {
        enabled: !1,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%"
    },
    proto: {
        initGallery: function() {
            var n = e.st.gallery,
                o = ".mfp-gallery",
                a = Boolean(t.fn.mfpFastClick);
            if (e.direction = !0, !n || !n.enabled) return !1;
            r += " mfp-gallery", T(p + o, function() {
                n.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
                    if (e.items.length > 1) return e.next(), !1
                }), i.on("keydown" + o, function(t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                })
            }), T("UpdateStatus" + o, function(t, n) {
                n.text && (n.text = U(n.text, e.currItem.index, e.items.length))
            }), T(d + o, function(t, i, o, r) {
                var a = e.items.length;
                o.counter = a > 1 ? U(n.tCounter, r.index, a) : ""
            }), T("BuildControls" + o, function() {
                if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                    var i = n.arrowMarkup,
                        o = e.arrowLeft = t(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                        r = e.arrowRight = t(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
                        s = a ? "mfpFastClick" : "click";
                    o[s](function() {
                        e.prev()
                    }), r[s](function() {
                        e.next()
                    }), e.isIE7 && (C("b", o[0], !1, !0), C("a", o[0], !1, !0), C("b", r[0], !1, !0), C("a", r[0], !1, !0)), e.container.append(o.add(r))
                }
            }), T(f + o, function() {
                e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                    e.preloadNearbyImages(), e._preloadTimeout = null
                }, 16)
            }), T(s + o, function() {
                i.off(o), e.wrap.off("click" + o), e.arrowLeft && a && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
            })
        },
        next: function() {
            e.direction = !0, e.index = W(e.index + 1), e.updateItemHTML()
        },
        prev: function() {
            e.direction = !1, e.index = W(e.index - 1), e.updateItemHTML()
        },
        goTo: function(t) {
            e.direction = t >= e.index, e.index = t, e.updateItemHTML()
        },
        preloadNearbyImages: function() {
            var t, n = e.st.gallery.preload,
                i = Math.min(n[0], e.items.length),
                o = Math.min(n[1], e.items.length);
            for (t = 1; t <= (e.direction ? o : i); t++) e._preloadItem(e.index + t);
            for (t = 1; t <= (e.direction ? i : o); t++) e._preloadItem(e.index - t)
        },
        _preloadItem: function(n) {
            if (n = W(n), !e.items[n].preloaded) {
                var i = e.items[n];
                i.parsed || (i = e.parseEl(n)), k("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                    i.hasSize = !0
                }).on("error.mfploader", function() {
                    i.hasSize = !0, i.loadError = !0, k("LazyLoadError", i)
                }).attr("src", i.src)), i.preloaded = !0
            }
        }
    }
});
var Q = "retina";
t.magnificPopup.registerModule(Q, {
        options: {
            replaceSrc: function(t) {
                return t.src.replace(/\.\w+$/, function(t) {
                    return "@2x" + t
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina,
                        n = t.ratio;
                    n = isNaN(n) ? n() : n, n > 1 && (T("ImageHasSize." + Q, function(t, e) {
                        e.img.css({
                            "max-width": e.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), T("ElementParse." + Q, function(e, i) {
                        i.src = t.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
    function() {
        var e = "ontouchstart" in window,
            n = function() {
                x.off("touchmove" + o + " touchend" + o)
            },
            i = "mfpFastClick",
            o = "." + i;
        t.fn.mfpFastClick = function(i) {
            return t(this).each(function() {
                var r, a = t(this);
                if (e) {
                    var s, l, c, u, d, p;
                    a.on("touchstart" + o, function(t) {
                        u = !1, p = 1, d = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], l = d.clientX, c = d.clientY, x.on("touchmove" + o, function(t) {
                            d = t.originalEvent ? t.originalEvent.touches : t.touches, p = d.length, d = d[0], (Math.abs(d.clientX - l) > 10 || Math.abs(d.clientY - c) > 10) && (u = !0, n())
                        }).on("touchend" + o, function(t) {
                            n(), u || p > 1 || (r = !0, t.preventDefault(), clearTimeout(s), s = setTimeout(function() {
                                r = !1
                            }, 1e3), i())
                        })
                    })
                }
                a.on("click" + o, function() {
                    r || i()
                })
            })
        }, t.fn.destroyMfpFastClick = function() {
            t(this).off("touchstart" + o + " click" + o), e && x.off("touchmove" + o + " touchend" + o)
        }
    }(), E()
}), ! function() {
"use strict";

function t(i) {
    if (!i) throw new Error("No options passed to Waypoint constructor");
    if (!i.element) throw new Error("No element option passed to Waypoint constructor");
    if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
    }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
}
var e = 0,
    n = {};
t.prototype.queueTrigger = function(t) {
    this.group.queueTrigger(this, t)
}, t.prototype.trigger = function(t) {
    this.enabled && this.callback && this.callback.apply(this, t)
}, t.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete n[this.key]
}, t.prototype.disable = function() {
    return this.enabled = !1, this
}, t.prototype.enable = function() {
    return this.context.refresh(), this.enabled = !0, this
}, t.prototype.next = function() {
    return this.group.next(this)
}, t.prototype.previous = function() {
    return this.group.previous(this)
}, t.invokeAll = function(t) {
    var e = [];
    for (var i in n) e.push(n[i]);
    for (var o = 0, r = e.length; r > o; o++) e[o][t]()
}, t.destroyAll = function() {
    t.invokeAll("destroy")
}, t.disableAll = function() {
    t.invokeAll("disable")
}, t.enableAll = function() {
    t.Context.refreshAll();
    for (var e in n) n[e].enabled = !0;
    return this
}, t.refreshAll = function() {
    t.Context.refreshAll()
}, t.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight
}, t.viewportWidth = function() {
    return document.documentElement.clientWidth
}, t.adapters = [], t.defaults = {
    context: window,
    continuous: !0,
    enabled: !0,
    group: "default",
    horizontal: !1,
    offset: 0
}, t.offsetAliases = {
    "bottom-in-view": function() {
        return this.context.innerHeight() - this.adapter.outerHeight()
    },
    "right-in-view": function() {
        return this.context.innerWidth() - this.adapter.outerWidth()
    }
}, window.Waypoint = t
}(),
function() {
"use strict";

function t(t) {
    window.setTimeout(t, 1e3 / 60)
}

function e(t) {
    this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
    }, this.waypoints = {
        vertical: {},
        horizontal: {}
    }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
}
var n = 0,
    i = {},
    o = window.Waypoint,
    r = window.onload;
e.prototype.add = function(t) {
    var e = t.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e][t.key] = t, this.refresh()
}, e.prototype.checkEmpty = function() {
    var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
        e = this.Adapter.isEmptyObject(this.waypoints.vertical),
        n = this.element == this.element.window;
    t && e && !n && (this.adapter.off(".waypoints"), delete i[this.key])
}, e.prototype.createThrottledResizeHandler = function() {
    function t() {
        e.handleResize(), e.didResize = !1
    }
    var e = this;
    this.adapter.on("resize.waypoints", function() {
        e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
    })
}, e.prototype.createThrottledScrollHandler = function() {
    function t() {
        e.handleScroll(), e.didScroll = !1
    }
    var e = this;
    this.adapter.on("scroll.waypoints", function() {
        (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
    })
}, e.prototype.handleResize = function() {
    o.Context.refreshAll()
}, e.prototype.handleScroll = function() {
    var t = {},
        e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
    for (var n in e) {
        var i = e[n],
            o = i.newScroll > i.oldScroll,
            r = o ? i.forward : i.backward;
        for (var a in this.waypoints[n]) {
            var s = this.waypoints[n][a];
            if (null !== s.triggerPoint) {
                var l = i.oldScroll < s.triggerPoint,
                    c = i.newScroll >= s.triggerPoint,
                    u = l && c,
                    d = !l && !c;
                (u || d) && (s.queueTrigger(r), t[s.group.id] = s.group)
            }
        }
    }
    for (var p in t) t[p].flushTriggers();
    this.oldScroll = {
        x: e.horizontal.newScroll,
        y: e.vertical.newScroll
    }
}, e.prototype.innerHeight = function() {
    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
}, e.prototype.remove = function(t) {
    delete this.waypoints[t.axis][t.key], this.checkEmpty()
}, e.prototype.innerWidth = function() {
    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
}, e.prototype.destroy = function() {
    var t = [];
    for (var e in this.waypoints)
        for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
    for (var i = 0, o = t.length; o > i; i++) t[i].destroy()
}, e.prototype.refresh = function() {
    var t, e = this.element == this.element.window,
        n = e ? void 0 : this.adapter.offset(),
        i = {};
    this.handleScroll(), t = {
        horizontal: {
            contextOffset: e ? 0 : n.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left"
        },
        vertical: {
            contextOffset: e ? 0 : n.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top"
        }
    };
    for (var r in t) {
        var a = t[r];
        for (var s in this.waypoints[r]) {
            var l, c, u, d, p, f = this.waypoints[r][s],
                h = f.options.offset,
                m = f.triggerPoint,
                g = 0,
                v = null == m;
            f.element !== f.element.window && (g = f.adapter.offset()[a.offsetProp]), "function" == typeof h ? h = h.apply(f) : "string" == typeof h && (h = parseFloat(h), f.options.offset.indexOf("%") > -1 && (h = Math.ceil(a.contextDimension * h / 100))), l = a.contextScroll - a.contextOffset, f.triggerPoint = Math.floor(g + l - h), c = m < a.oldScroll, u = f.triggerPoint >= a.oldScroll, d = c && u, p = !c && !u, !v && d ? (f.queueTrigger(a.backward), i[f.group.id] = f.group) : !v && p ? (f.queueTrigger(a.forward), i[f.group.id] = f.group) : v && a.oldScroll >= f.triggerPoint && (f.queueTrigger(a.forward), i[f.group.id] = f.group)
        }
    }
    return o.requestAnimationFrame(function() {
        for (var t in i) i[t].flushTriggers()
    }), this
}, e.findOrCreateByElement = function(t) {
    return e.findByElement(t) || new e(t)
}, e.refreshAll = function() {
    for (var t in i) i[t].refresh()
}, e.findByElement = function(t) {
    return i[t.waypointContextKey]
}, window.onload = function() {
    r && r(), e.refreshAll()
}, o.requestAnimationFrame = function(e) {
    (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
}, o.Context = e
}(),
function() {
"use strict";

function t(t, e) {
    return t.triggerPoint - e.triggerPoint
}

function e(t, e) {
    return e.triggerPoint - t.triggerPoint
}

function n(t) {
    this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
}
var i = {
        vertical: {},
        horizontal: {}
    },
    o = window.Waypoint;
n.prototype.add = function(t) {
    this.waypoints.push(t)
}, n.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
    }
}, n.prototype.flushTriggers = function() {
    for (var n in this.triggerQueues) {
        var i = this.triggerQueues[n],
            o = "up" === n || "left" === n;
        i.sort(o ? e : t);
        for (var r = 0, a = i.length; a > r; r += 1) {
            var s = i[r];
            (s.options.continuous || r === i.length - 1) && s.trigger([n])
        }
    }
    this.clearTriggerQueues()
}, n.prototype.next = function(e) {
    this.waypoints.sort(t);
    var n = o.Adapter.inArray(e, this.waypoints);
    return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
}, n.prototype.previous = function(e) {
    this.waypoints.sort(t);
    var n = o.Adapter.inArray(e, this.waypoints);
    return n ? this.waypoints[n - 1] : null
}, n.prototype.queueTrigger = function(t, e) {
    this.triggerQueues[e].push(t)
}, n.prototype.remove = function(t) {
    var e = o.Adapter.inArray(t, this.waypoints);
    e > -1 && this.waypoints.splice(e, 1)
}, n.prototype.first = function() {
    return this.waypoints[0]
}, n.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1]
}, n.findOrCreate = function(t) {
    return i[t.axis][t.name] || new n(t)
}, o.Group = n
}(),
function() {
"use strict";

function t(t) {
    this.$element = e(t)
}
var e = window.jQuery,
    n = window.Waypoint;
e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, n) {
    t.prototype[n] = function() {
        var t = Array.prototype.slice.call(arguments);
        return this.$element[n].apply(this.$element, t)
    }
}), e.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
    t[i] = e[i]
}), n.adapters.push({
    name: "jquery",
    Adapter: t
}), n.Adapter = t
}(),
function() {
"use strict";

function t(t) {
    return function() {
        var n = [],
            i = arguments[0];
        return t.isFunction(arguments[0]) && (i = t.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function() {
            var o = t.extend({}, i, {
                element: this
            });
            "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), n.push(new e(o))
        }), n
    }
}
var e = window.Waypoint;
window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(), $(document).ready(function() {
$("#suscribe").on("submit", function(t) {
    t.preventDefault();
    var e;
    e = $('#suscribe input[name*="email"]').val();
    var n = !0,
        i = "";
    if (0 == e.length) n = !1, i += "Ingrese Email.\n";
    else {
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e) || (n = !1, i += "El Email debe contener el formato correcto.\n")
    }
    if (!n) return void alert("Se han encontrado los siguientes errores:" + i)
});
var t = $("#init").height();
$(window).on("scroll", function() {
    var e = $(window).scrollTop(),
        n = $("nav");
    e > t ? n.addClass("sticky") : n.removeClass("sticky")
});
var e = $(".navbar-default");
e.offset().top;
$("#main-nav-wrap li a").not(".especial").not(".especial-dark").on("click", function(t) {
    t.preventDefault(), $("html, body").animate({
        scrollTop: $($.attr(this, "href")).offset().top
    }, 700), $("#main-nav-wrap li").removeClass("current"), $(this).parent().addClass("current")
});
var n = $("section"),
    i = $("#main-nav-wrap li a");
n.waypoint({
    handler: function(t) {
        var e;
        e = $("section#" + this.element.id), "up" === t && (e = e.prev());
        var n = $('#main-nav-wrap a[href="#' + e.attr("id") + '"]');
        i.parent().removeClass("current"), n.parent().addClass("current")
    },
    offset: "20px"
}), $("#ticket-button").magnificPopup({
    items: {
        src: "#popup",
        type: "inline"
    },
    removalDelay: 500,
    mainClass: "mfp-fade"
}), $(".open-popup-link").magnificPopup({
    type: "inline",
    closeOnBgClick: !0
})
});