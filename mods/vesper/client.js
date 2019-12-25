! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 30)
}([function(e, t, n) {
    "use strict";
    e.exports = n(32)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return m
        }));
        var r = n(0),
            o = n.n(r);

        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function l(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function u(e, t, n) {
            return t && l(e.prototype, t), n && l(e, n), e
        }

        function c(e, t) {
            return !t || "object" !== a(t) && "function" != typeof t ? f(e) : t
        }

        function f(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function p(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && h(e, t)
        }

        function h(e, t) {
            return (h = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }
        n(16);
        var m = function(e) {
                function t(e) {
                    var n;
                    return s(this, t), (n = c(this, d(t).call(this, e))).state = {
                        display: "none",
                        register: "none"
                    }, n
                }
                return p(t, e), u(t, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        t.toggleDisplay = function(t) {
                            var n = e.state,
                                r = n.display;
                            n.display = r === t ? "none" : t, e.setState(n)
                        }, t.turnOnDisplay = function(t) {
                            var n = e.state;
                            n.display = t, e.setState(n)
                        }, t.turnOffDisplay = function(t) {
                            var n = e.state;
                            n.display = "none", e.setState(n)
                        }, t.turnOnRegister = function(t) {
                            var n = e.state;
                            n.register = "Register", e.setState(n)
                        }, t.turnOffRegister = function(t) {
                            var n = e.state;
                            n.register = "none", e.setState(n)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("span", null, o.a.createElement(w, null), o.a.createElement(g, {
                            toggleAudio: this.props.data.toggleAudio
                        }), o.a.createElement(y, {
                            toggleMusic: this.props.data.toggleMusic
                        }), o.a.createElement(b, {
                            display: "LoginOverlay" === this.state.display
                        }), o.a.createElement(v, {
                            register: "Register" === this.state.register
                        }))
                    }
                }]), t
            }(r.Component),
            g = function(e) {
                function t(e) {
                    var n;
                    return s(this, t), (n = c(this, d(t).call(this, e))).state = {
                        muted: !1
                    }, n
                }
                return p(t, e), u(t, [{
                    key: "click",
                    value: function() {
                        this.setState({
                            muted: this.props.toggleAudio()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: "mute-button",
                            onClick: this.click.bind(this)
                        }, this.state.muted ? o.a.createElement("span", null, o.a.createElement("img", {
                            src: "img/soundOff.png"
                        })) : o.a.createElement("span", null, o.a.createElement("img", {
                            src: "img/soundOn.png"
                        })))
                    }
                }]), t
            }(r.Component),
            y = function(e) {
                function t(e) {
                    var n;
                    return s(this, t), (n = c(this, d(t).call(this, e))).state = {
                        musicMuted: !1
                    }, n
                }
                return p(t, e), u(t, [{
                    key: "click",
                    value: function() {
                        this.setState({
                            musicMuted: this.props.toggleMusic()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: "music-button",
                            onClick: this.click.bind(this)
                        }, this.state.musicMuted ? o.a.createElement("span", null, o.a.createElement("img", {
                            src: "img/musicOff.png"
                        })) : o.a.createElement("span", null, o.a.createElement("img", {
                            src: "img/musicOn.png"
                        })))
                    }
                }]), t
            }(r.Component),
            v = function(e) {
                function t() {
                    var e;
                    return s(this, t), i(f(e = c(this, d(t).call(this))), "handleChangeU", (function(t) {
                        e.setState({
                            user: t.target.value,
                            pass: e.state.pass
                        })
                    })), i(f(e), "handleChangeP", (function(t) {
                        e.setState({
                            user: e.state.user,
                            pass: t.target.value
                        })
                    })), i(f(e), "register", (function() {
                        var t = e.state.user,
                            n = e.state.pass;
                        void 0 !== m.socket && m.socket.emit("register", {
                            user: t,
                            pass: n
                        })
                    })), e.state = {
                        user: "",
                        pass: ""
                    }, e
                }
                return p(t, e), u(t, [{
                    key: "turnOn",
                    value: function() {
                        this.setState({
                            on: !0
                        })
                    }
                }, {
                    key: "turnOff",
                    value: function() {
                        this.setState({
                            off: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.props.register ? o.a.createElement("div", {
                            className: "register-menu"
                        }, o.a.createElement("center", null, o.a.createElement("h3", null, "Create an account!"), o.a.createElement("br", null), o.a.createElement("input", {
                            className: "overlay-input",
                            type: "text",
                            onChange: this.handleChangeU,
                            placeholder: "Username",
                            maxLength: "16",
                            style: {
                                margin: 8
                            }
                        }), o.a.createElement("input", {
                            className: "overlay-input",
                            type: "password",
                            onChange: this.handleChangeP,
                            placeholder: "Password",
                            maxLength: "32",
                            style: {
                                margin: 8
                            }
                        }), o.a.createElement("br", null), o.a.createElement("button", {
                            className: "register",
                            onClick: this.register
                        }, "Register!"), o.a.createElement("br", null), o.a.createElement("br", null), "By registering, you agree to our terms of service, available at torn.space/tos.", o.a.createElement("br", null), "Remember, never give your password to anyone!!")) : null
                    }
                }]), t
            }(r.Component),
            b = function(e) {
                function t() {
                    var e;
                    return s(this, t), i(f(e = c(this, d(t).call(this))), "handleChangeU", (function(t) {
                        e.setState({
                            user: t.target.value,
                            pass: e.state.pass
                        })
                    })), i(f(e), "handleChangeP", (function(t) {
                        e.setState({
                            user: e.state.user,
                            pass: t.target.value
                        })
                    })), i(f(e), "login", (function() {
                        var t = e.state.user,
                            n = e.state.pass;
                        "" != t && "" != n && (connect(), void 0 !== m.socket && m.socket.emit("login", {
                            user: t,
                            pass: n,
                            amNew: !1,
                            version: "v2-50-g322f3d9"
                        }))
                    })), i(f(e), "registerH", (function() {
                        connect(), void 0 !== m.socket && m.socket.emit("lore", {
                            alien: !1
                        })
                    })), i(f(e), "registerA", (function() {
                        connect(), void 0 !== m.socket && m.socket.emit("lore", {
                            alien: !0
                        })
                    })), i(f(e), "langEng", (function() {
                        setLang("eng")
                    })), i(f(e), "langEsp", (function() {
                        setLang("esp")
                    })), i(f(e), "langFrn", (function() {
                        setLang("frn")
                    })), i(f(e), "langPyc", (function() {
                        setLang("pyc")
                    })), i(f(e), "langDeu", (function() {
                        setLang("deu")
                    })), e.state = {
                        user: "",
                        pass: "",
                        seed: Math.random()
                    }, e
                }
                return p(t, e), u(t, [{
                    key: "render",
                    value: function() {
                        var e = this.state.seed < .5 ? o.a.createElement("div", null, o.a.createElement("button", {
                            id: "registerA",
                            onClick: this.registerA
                        }, "Join Alien Team!"), o.a.createElement("button", {
                            id: "registerH",
                            onClick: this.registerH
                        }, "Join Human Team!")) : o.a.createElement("div", null, o.a.createElement("button", {
                            id: "registerH",
                            onClick: this.registerH
                        }, "Join Human Team!"), o.a.createElement("button", {
                            id: "registerA",
                            onClick: this.registerA
                        }, "Join Alien Team!"));
                        return this.props.display ? o.a.createElement("div", null, o.a.createElement("div", {
                            className: "overlay-menu"
                        }, o.a.createElement("div", {
                            className: "container"
                        }, o.a.createElement("div", {
                            className: "guests"
                        }, o.a.createElement("center", null, o.a.createElement("h3", null, "New Players"), e)), o.a.createElement("div", {
                            className: "video"
                        }, o.a.createElement("center", null, o.a.createElement("img", {
                            src: "img/harrlogo.png",
                            alt: "Logo",
                            width: "340"
                        }))), o.a.createElement("div", {
                            className: "login"
                        }, o.a.createElement("center", null, o.a.createElement("h3", null, "Returning Players"), o.a.createElement("input", {
                            className: "overlay-input",
                            type: "text",
                            id: "usernameid",
                            onChange: this.handleChangeU,
                            placeholder: "Username"
                        }), o.a.createElement("input", {
                            className: "overlay-input",
                            type: "password",
                            id: "passid",
                            onChange: this.handleChangeP,
                            placeholder: "Password"
                        }), o.a.createElement("button", {
                            className: "overlay-button",
                            id: "loginButton",
                            onClick: this.login
                        }, "Login"))))), o.a.createElement("div", {
                            className: "discord"
                        }, o.a.createElement("a", {
                            onClick: this.langEng
                        }, "Eng|"), o.a.createElement("a", {
                            onClick: this.langEsp
                        }, "Esp|"), o.a.createElement("a", {
                            onClick: this.langFrn
                        }, "Frn|"), o.a.createElement("a", {
                            onClick: this.langDeu
                        }, "Deu|"), o.a.createElement("a", {
                            onClick: this.langPyc
                        }, "Pyc"))) : null
                    }
                }]), t
            }(r.Component),
            w = function(e) {
                function t() {
                    var e;
                    return s(this, t), (e = c(this, d(t).call(this))).state = {
                        msgs: []
                    }, m.chat = function(t) {
                        var n = e.state;
                        n.msgs.push(new _(t)), e.setState(n)
                    }, t.fadeOut = function(t) {
                        var n = e.state;
                        n.msgs.forEach((function(e, r) {
                            e.id === t && (n.msgs[r].fadeOut = !0)
                        })), e.setState(n)
                    }, t.remove = function(t) {
                        var n = e.state;
                        n.msgs.forEach((function(e, r) {
                            e.id === t && n.msgs.splice(r, 1)
                        })), e.setState(n)
                    }, e
                }
                return p(t, e), u(t, [{
                    key: "render",
                    value: function() {
                        return o.a.createElement("div", {
                            className: "chat"
                        }, this.state.msgs.map((function(e, t) {
                            return o.a.createElement("div", {
                                maxLength: "128",
                                className: "chat-msg ".concat(e.fadeOut ? "chat-msg-fadeout" : ""),
                                key: t,
                                style: {
                                    color: "red" === e.color ? "pink" : "blue" === e.color ? "cyan" : "white"
                                }
                            }, e.msg)
                        })), o.a.createElement(k, null))
                    }
                }]), t
            }(r.Component),
            _ = function e(t) {
                var n = this;
                s(this, e), this.msg = t.msg, this.color = t.color, this.id = Math.random(), this.fadeOut = !1, setTimeout((function() {
                    w.fadeOut(n.id), setTimeout((function() {
                        w.remove(n.id)
                    }), 2e3)
                }), 6e4)
            },
            k = function(t) {
                function n() {
                    var e;
                    return s(this, n), (e = c(this, d(n).call(this))).state = {
                        value: "",
                        activated: !1
                    }, e
                }
                return p(n, t), u(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        m.focusChat = function() {
                            e.refs.chat.focus()
                        }, m.unfocusChat = function() {
                            e.refs.chat.blur()
                        }, m.init = function(t) {
                            e.setState(t)
                        }, m.activate = function() {
                            e.setState({
                                value: e.state.value,
                                activated: !0
                            })
                        }
                    }
                }, {
                    key: "keypress",
                    value: function(t) {
                        if ("Enter" === t.key) {
                            m.unfocusChat();
                            var n = this.state.value;
                            m.socket.emit("chat", {
                                msg: n
                            }), this.setState({
                                value: "",
                                activated: this.state.activated
                            }), setTimeout(e.stopTyping, 50)
                        }
                    }
                }, {
                    key: "change",
                    value: function(e) {
                        this.setState({
                            value: e.target.value,
                            activated: this.state.activated
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return this.state.activated ? o.a.createElement("input", {
                            className: "chat-input",
                            ref: "chat",
                            maxLength: "128",
                            onKeyDown: this.keypress.bind(this),
                            onChange: this.change.bind(this),
                            value: this.state.value,
                            placeholder: "Press enter to chat!",
                            type: "text"
                        }) : null
                    }
                }]), n
            }(r.Component)
    }).call(this, n(2))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    var r, o = n(52),
        i = n(23),
        a = n(54),
        s = n(55),
        l = n(56);
    "undefined" != typeof ArrayBuffer && (r = n(57));
    var u = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
        c = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
        f = u || c;
    t.protocol = 3;
    var d = t.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        p = o(d),
        h = {
            type: "error",
            data: "parser error"
        },
        m = n(58);

    function g(e, t, n) {
        for (var r = new Array(e.length), o = s(e.length, n), i = function(e, n, o) {
                t(n, (function(t, n) {
                    r[e] = n, o(t, r)
                }))
            }, a = 0; a < e.length; a++) i(a, e[a], o)
    }
    t.encodePacket = function(e, n, r, o) {
        "function" == typeof n && (o = n, n = !1), "function" == typeof r && (o = r, r = null);
        var i = void 0 === e.data ? void 0 : e.data.buffer || e.data;
        if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer) return function(e, n, r) {
            if (!n) return t.encodeBase64Packet(e, r);
            var o = e.data,
                i = new Uint8Array(o),
                a = new Uint8Array(1 + o.byteLength);
            a[0] = d[e.type];
            for (var s = 0; s < i.length; s++) a[s + 1] = i[s];
            return r(a.buffer)
        }(e, n, o);
        if (void 0 !== m && i instanceof m) return function(e, n, r) {
            if (!n) return t.encodeBase64Packet(e, r);
            if (f) return function(e, n, r) {
                if (!n) return t.encodeBase64Packet(e, r);
                var o = new FileReader;
                return o.onload = function() {
                    t.encodePacket({
                        type: e.type,
                        data: o.result
                    }, n, !0, r)
                }, o.readAsArrayBuffer(e.data)
            }(e, n, r);
            var o = new Uint8Array(1);
            o[0] = d[e.type];
            var i = new m([o.buffer, e.data]);
            return r(i)
        }(e, n, o);
        if (i && i.base64) return function(e, n) {
            var r = "b" + t.packets[e.type] + e.data.data;
            return n(r)
        }(e, o);
        var a = d[e.type];
        return void 0 !== e.data && (a += r ? l.encode(String(e.data), {
            strict: !1
        }) : String(e.data)), o("" + a)
    }, t.encodeBase64Packet = function(e, n) {
        var r, o = "b" + t.packets[e.type];
        if (void 0 !== m && e.data instanceof m) {
            var i = new FileReader;
            return i.onload = function() {
                var e = i.result.split(",")[1];
                n(o + e)
            }, i.readAsDataURL(e.data)
        }
        try {
            r = String.fromCharCode.apply(null, new Uint8Array(e.data))
        } catch (t) {
            for (var a = new Uint8Array(e.data), s = new Array(a.length), l = 0; l < a.length; l++) s[l] = a[l];
            r = String.fromCharCode.apply(null, s)
        }
        return o += btoa(r), n(o)
    }, t.decodePacket = function(e, n, r) {
        if (void 0 === e) return h;
        if ("string" == typeof e) {
            if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), n);
            if (r && !1 === (e = function(e) {
                    try {
                        e = l.decode(e, {
                            strict: !1
                        })
                    } catch (e) {
                        return !1
                    }
                    return e
                }(e))) return h;
            var o = e.charAt(0);
            return Number(o) == o && p[o] ? e.length > 1 ? {
                type: p[o],
                data: e.substring(1)
            } : {
                type: p[o]
            } : h
        }
        o = new Uint8Array(e)[0];
        var i = a(e, 1);
        return m && "blob" === n && (i = new m([i])), {
            type: p[o],
            data: i
        }
    }, t.decodeBase64Packet = function(e, t) {
        var n = p[e.charAt(0)];
        if (!r) return {
            type: n,
            data: {
                base64: !0,
                data: e.substr(1)
            }
        };
        var o = r.decode(e.substr(1));
        return "blob" === t && m && (o = new m([o])), {
            type: n,
            data: o
        }
    }, t.encodePayload = function(e, n, r) {
        "function" == typeof n && (r = n, n = null);
        var o = i(e);
        if (n && o) return m && !f ? t.encodePayloadAsBlob(e, r) : t.encodePayloadAsArrayBuffer(e, r);
        if (!e.length) return r("0:");
        g(e, (function(e, r) {
            t.encodePacket(e, !!o && n, !1, (function(e) {
                r(null, function(e) {
                    return e.length + ":" + e
                }(e))
            }))
        }), (function(e, t) {
            return r(t.join(""))
        }))
    }, t.decodePayload = function(e, n, r) {
        if ("string" != typeof e) return t.decodePayloadAsBinary(e, n, r);
        var o;
        if ("function" == typeof n && (r = n, n = null), "" === e) return r(h, 0, 1);
        for (var i, a, s = "", l = 0, u = e.length; l < u; l++) {
            var c = e.charAt(l);
            if (":" === c) {
                if ("" === s || s != (i = Number(s))) return r(h, 0, 1);
                if (s != (a = e.substr(l + 1, i)).length) return r(h, 0, 1);
                if (a.length) {
                    if (o = t.decodePacket(a, n, !1), h.type === o.type && h.data === o.data) return r(h, 0, 1);
                    if (!1 === r(o, l + i, u)) return
                }
                l += i, s = ""
            } else s += c
        }
        return "" !== s ? r(h, 0, 1) : void 0
    }, t.encodePayloadAsArrayBuffer = function(e, n) {
        if (!e.length) return n(new ArrayBuffer(0));
        g(e, (function(e, n) {
            t.encodePacket(e, !0, !0, (function(e) {
                return n(null, e)
            }))
        }), (function(e, t) {
            var r = t.reduce((function(e, t) {
                    var n;
                    return e + (n = "string" == typeof t ? t.length : t.byteLength).toString().length + n + 2
                }), 0),
                o = new Uint8Array(r),
                i = 0;
            return t.forEach((function(e) {
                var t = "string" == typeof e,
                    n = e;
                if (t) {
                    for (var r = new Uint8Array(e.length), a = 0; a < e.length; a++) r[a] = e.charCodeAt(a);
                    n = r.buffer
                }
                o[i++] = t ? 0 : 1;
                var s = n.byteLength.toString();
                for (a = 0; a < s.length; a++) o[i++] = parseInt(s[a]);
                o[i++] = 255;
                for (r = new Uint8Array(n), a = 0; a < r.length; a++) o[i++] = r[a]
            })), n(o.buffer)
        }))
    }, t.encodePayloadAsBlob = function(e, n) {
        g(e, (function(e, n) {
            t.encodePacket(e, !0, !0, (function(e) {
                var t = new Uint8Array(1);
                if (t[0] = 1, "string" == typeof e) {
                    for (var r = new Uint8Array(e.length), o = 0; o < e.length; o++) r[o] = e.charCodeAt(o);
                    e = r.buffer, t[0] = 0
                }
                var i = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
                    a = new Uint8Array(i.length + 1);
                for (o = 0; o < i.length; o++) a[o] = parseInt(i[o]);
                if (a[i.length] = 255, m) {
                    var s = new m([t.buffer, a.buffer, e]);
                    n(null, s)
                }
            }))
        }), (function(e, t) {
            return n(new m(t))
        }))
    }, t.decodePayloadAsBinary = function(e, n, r) {
        "function" == typeof n && (r = n, n = null);
        for (var o = e, i = []; o.byteLength > 0;) {
            for (var s = new Uint8Array(o), l = 0 === s[0], u = "", c = 1; 255 !== s[c]; c++) {
                if (u.length > 310) return r(h, 0, 1);
                u += s[c]
            }
            o = a(o, 2 + u.length), u = parseInt(u);
            var f = a(o, 0, u);
            if (l) try {
                f = String.fromCharCode.apply(null, new Uint8Array(f))
            } catch (e) {
                var d = new Uint8Array(f);
                f = "";
                for (c = 0; c < d.length; c++) f += String.fromCharCode(d[c])
            }
            i.push(f), o = a(o, u)
        }
        var p = i.length;
        i.forEach((function(e, o) {
            r(t.decodePacket(e, n, !0), o, p)
        }))
    }
}, function(e, t, n) {
    (function(r) {
        t.log = function(...e) {
            return "object" == typeof console && console.log && console.log(...e)
        }, t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            let r = 0,
                o = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (r++, "%c" === e && (o = r))
            }), t.splice(o, 0, n)
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {}
        }, t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug")
            } catch (e) {}!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
            return e
        }, t.useColors = function() {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = function() {
            try {
                return localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(39)(t);
        const {
            formatters: o
        } = e.exports;
        o.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }).call(this, n(8))
}, function(e, t) {
    t.encode = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
        return t
    }, t.decode = function(e) {
        for (var t = {}, n = e.split("&"), r = 0, o = n.length; r < o; r++) {
            var i = n[r].split("=");
            t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
        }
        return t
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
}, function(e, t, n) {
    (function(r) {
        t.log = function(...e) {
            return "object" == typeof console && console.log && console.log(...e)
        }, t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const n = "color: " + this.color;
            t.splice(1, 0, n, "color: inherit");
            let r = 0,
                o = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (r++, "%c" === e && (o = r))
            }), t.splice(o, 0, n)
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch (e) {}
        }, t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug")
            } catch (e) {}!e && void 0 !== r && "env" in r && (e = r.env.DEBUG);
            return e
        }, t.useColors = function() {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = function() {
            try {
                return localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = n(59)(t);
        const {
            formatters: o
        } = e.exports;
        o.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }).call(this, n(8))
}, function(e, t) {
    var n, r, o = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var l, u = [],
        c = !1,
        f = -1;

    function d() {
        c && l && (c = !1, l.length ? u = l.concat(u) : f = -1, u.length && p())
    }

    function p() {
        if (!c) {
            var e = s(d);
            c = !0;
            for (var t = u.length; t;) {
                for (l = u, u = []; ++f < t;) l && l[f].run();
                f = -1, t = u.length
            }
            l = null, c = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new h(e, t)), 1 !== u.length || c || s(p)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
        return []
    }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(e, t, n) {
    var r = n(41)("socket.io-parser"),
        o = n(10),
        i = n(44),
        a = n(18),
        s = n(19);

    function l() {}
    t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = l, t.Decoder = f;
    var u = t.ERROR + '"encode error"';

    function c(e) {
        var n = "" + e.type;
        if (t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-"), e.nsp && "/" !== e.nsp && (n += e.nsp + ","), null != e.id && (n += e.id), null != e.data) {
            var o = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return !1
                }
            }(e.data);
            if (!1 === o) return u;
            n += o
        }
        return r("encoded %j as %s", e, n), n
    }

    function f() {
        this.reconstructor = null
    }

    function d(e) {
        this.reconPack = e, this.buffers = []
    }

    function p(e) {
        return {
            type: t.ERROR,
            data: "parser error: " + e
        }
    }
    l.prototype.encode = function(e, n) {
        (r("encoding packet %j", e), t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type) ? function(e, t) {
            i.removeBlobs(e, (function(e) {
                var n = i.deconstructPacket(e),
                    r = c(n.packet),
                    o = n.buffers;
                o.unshift(r), t(o)
            }))
        }(e, n) : n([c(e)])
    }, o(f.prototype), f.prototype.add = function(e) {
        var n;
        if ("string" == typeof e) n = function(e) {
            var n = 0,
                o = {
                    type: Number(e.charAt(0))
                };
            if (null == t.types[o.type]) return p("unknown packet type " + o.type);
            if (t.BINARY_EVENT === o.type || t.BINARY_ACK === o.type) {
                for (var i = "";
                    "-" !== e.charAt(++n) && (i += e.charAt(n), n != e.length););
                if (i != Number(i) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
                o.attachments = Number(i)
            }
            if ("/" === e.charAt(n + 1))
                for (o.nsp = ""; ++n;) {
                    if ("," === (l = e.charAt(n))) break;
                    if (o.nsp += l, n === e.length) break
                } else o.nsp = "/";
            var s = e.charAt(n + 1);
            if ("" !== s && Number(s) == s) {
                for (o.id = ""; ++n;) {
                    var l;
                    if (null == (l = e.charAt(n)) || Number(l) != l) {
                        --n;
                        break
                    }
                    if (o.id += e.charAt(n), n === e.length) break
                }
                o.id = Number(o.id)
            }
            if (e.charAt(++n)) {
                var u = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return !1
                    }
                }(e.substr(n));
                if (!(!1 !== u && (o.type === t.ERROR || a(u)))) return p("invalid payload");
                o.data = u
            }
            return r("decoded %s as %j", e, o), o
        }(e), t.BINARY_EVENT === n.type || t.BINARY_ACK === n.type ? (this.reconstructor = new d(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);
        else {
            if (!s(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            (n = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", n))
        }
    }, f.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    }, d.prototype.takeBinaryData = function(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            var t = i.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t
        }
        return null
    }, d.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    }
}, function(e, t, n) {
    function r(e) {
        if (e) return function(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e
        }(e)
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function(e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments)
        }
        return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + e];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
                r.splice(o, 1);
                break
            }
        return this
    }, r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            n = this._callbacks["$" + e];
        if (n)
            for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
        return this
    }, r.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(45),
            o = n(46),
            i = n(47);

        function a() {
            return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(e, t) {
            if (a() < t) throw new RangeError("Invalid typed array length");
            return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
        }

        function l(e, t, n) {
            if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, e)
            }
            return u(this, e, t, n)
        }

        function u(e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | h(t, n),
                    o = (e = s(e, r)).write(t, n);
                o !== r && (e = e.slice(0, o));
                return e
            }(e, t, n) : function(e, t) {
                if (l.isBuffer(t)) {
                    var n = 0 | p(t.length);
                    return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : d(e, t);
                    if ("Buffer" === t.type && i(t.data)) return d(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function c(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(e, t) {
            if (c(t), e = s(e, t < 0 ? 0 : 0 | p(t)), !l.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function d(e, t) {
            var n = t.length < 0 ? 0 : 0 | p(t.length);
            e = s(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function p(e) {
            if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }

        function h(e, t) {
            if (l.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return j(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return H(e).length;
                default:
                    if (r) return j(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function m(e, t, n) {
            var r = !1;
            if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
            if ((n >>>= 0) <= (t >>>= 0)) return "";
            for (e || (e = "utf8");;) switch (e) {
                case "hex":
                    return P(this, t, n);
                case "utf8":
                case "utf-8":
                    return S(this, t, n);
                case "ascii":
                    return A(this, t, n);
                case "latin1":
                case "binary":
                    return M(this, t, n);
                case "base64":
                    return C(this, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return I(this, t, n);
                default:
                    if (r) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), r = !0
            }
        }

        function g(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function y(e, t, n, r, o) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (o) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!o) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, r, o);
            if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, r, o);
            throw new TypeError("val must be string, number or Buffer")
        }

        function v(e, t, n, r, o) {
            var i, a = 1,
                s = e.length,
                l = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, l /= 2, n /= 2
            }

            function u(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (o) {
                var c = -1;
                for (i = n; i < s; i++)
                    if (u(e, i) === u(t, -1 === c ? 0 : i - c)) {
                        if (-1 === c && (c = i), i - c + 1 === l) return c * a
                    } else -1 !== c && (i -= i - c), c = -1
            } else
                for (n + l > s && (n = s - l), i = n; i >= 0; i--) {
                    for (var f = !0, d = 0; d < l; d++)
                        if (u(e, i + d) !== u(t, d)) {
                            f = !1;
                            break
                        }
                    if (f) return i
                }
            return -1
        }

        function b(e, t, n, r) {
            n = Number(n) || 0;
            var o = e.length - n;
            r ? (r = Number(r)) > o && (r = o) : r = o;
            var i = t.length;
            if (i % 2 != 0) throw new TypeError("Invalid hex string");
            r > i / 2 && (r = i / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[n + a] = s
            }
            return a
        }

        function w(e, t, n, r) {
            return q(j(t, e.length - n), e, n, r)
        }

        function _(e, t, n, r) {
            return q(function(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function k(e, t, n, r) {
            return _(e, t, n, r)
        }

        function x(e, t, n, r) {
            return q(H(t), e, n, r)
        }

        function E(e, t, n, r) {
            return q(function(e, t) {
                for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, o = n % 256, i.push(o), i.push(r);
                return i
            }(t, e.length - n), e, n, r)
        }

        function C(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function S(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], o = t; o < n;) {
                var i, a, s, l, u = e[o],
                    c = null,
                    f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (o + f <= n) switch (f) {
                    case 1:
                        u < 128 && (c = u);
                        break;
                    case 2:
                        128 == (192 & (i = e[o + 1])) && (l = (31 & u) << 6 | 63 & i) > 127 && (c = l);
                        break;
                    case 3:
                        i = e[o + 1], a = e[o + 2], 128 == (192 & i) && 128 == (192 & a) && (l = (15 & u) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (c = l);
                        break;
                    case 4:
                        i = e[o + 1], a = e[o + 2], s = e[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (c = l)
                }
                null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, r.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), r.push(c), o += f
            }
            return function(e) {
                var t = e.length;
                if (t <= T) return String.fromCharCode.apply(String, e);
                var n = "",
                    r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T));
                return n
            }(r)
        }
        t.Buffer = l, t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return l.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = a(), l.poolSize = 8192, l._augment = function(e) {
            return e.__proto__ = l.prototype, e
        }, l.from = function(e, t, n) {
            return u(null, e, t, n)
        }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0
        })), l.alloc = function(e, t, n) {
            return function(e, t, n, r) {
                return c(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
            }(null, e, t, n)
        }, l.allocUnsafe = function(e) {
            return f(null, e)
        }, l.allocUnsafeSlow = function(e) {
            return f(null, e)
        }, l.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, l.compare = function(e, t) {
            if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                if (e[o] !== t[o]) {
                    n = e[o], r = t[o];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }, l.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(e, t) {
            if (!i(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = l.allocUnsafe(t),
                o = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, o), o += a.length
            }
            return r
        }, l.byteLength = h, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) g(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : m.apply(this, arguments)
        }, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, l.prototype.compare = function(e, t, n, r, o) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), t < 0 || n > e.length || r < 0 || o > this.length) throw new RangeError("out of range index");
            if (r >= o && t >= n) return 0;
            if (r >= o) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(i, a), u = this.slice(r, o), c = e.slice(t, n), f = 0; f < s; ++f)
                if (u[f] !== c[f]) {
                    i = u[f], a = c[f];
                    break
                }
            return i < a ? -1 : a < i ? 1 : 0
        }, l.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, l.prototype.indexOf = function(e, t, n) {
            return y(this, e, t, n, !0)
        }, l.prototype.lastIndexOf = function(e, t, n) {
            return y(this, e, t, n, !1)
        }, l.prototype.write = function(e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var o = this.length - t;
            if ((void 0 === n || n > o) && (n = o), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var i = !1;;) switch (r) {
                case "hex":
                    return b(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return w(this, e, t, n);
                case "ascii":
                    return _(this, e, t, n);
                case "latin1":
                case "binary":
                    return k(this, e, t, n);
                case "base64":
                    return x(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return E(this, e, t, n);
                default:
                    if (i) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), i = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var T = 4096;

        function A(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o]);
            return r
        }

        function M(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var o = t; o < n; ++o) r += String.fromCharCode(e[o]);
            return r
        }

        function P(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var o = "", i = t; i < n; ++i) o += z(e[i]);
            return o
        }

        function I(e, t, n) {
            for (var r = e.slice(t, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
            return o
        }

        function N(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function F(e, t, n, r, o, i) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > o || t < i) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function O(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var o = 0, i = Math.min(e.length - n, 2); o < i; ++o) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
        }

        function R(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var o = 0, i = Math.min(e.length - n, 4); o < i; ++o) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
        }

        function B(e, t, n, r, o, i) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function D(e, t, n, r, i) {
            return i || B(e, 0, n, 4), o.write(e, t, n, r, 23, 4), n + 4
        }

        function U(e, t, n, r, i) {
            return i || B(e, 0, n, 8), o.write(e, t, n, r, 52, 8), n + 8
        }
        l.prototype.slice = function(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
            else {
                var o = t - e;
                n = new l(o, void 0);
                for (var i = 0; i < o; ++i) n[i] = this[i + e]
            }
            return n
        }, l.prototype.readUIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || N(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
            return r
        }, l.prototype.readUIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || N(e, t, this.length);
            for (var r = this[e + --t], o = 1; t > 0 && (o *= 256);) r += this[e + --t] * o;
            return r
        }, l.prototype.readUInt8 = function(e, t) {
            return t || N(e, 1, this.length), this[e]
        }, l.prototype.readUInt16LE = function(e, t) {
            return t || N(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUInt16BE = function(e, t) {
            return t || N(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUInt32LE = function(e, t) {
            return t || N(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, l.prototype.readUInt32BE = function(e, t) {
            return t || N(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || N(e, t, this.length);
            for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256);) r += this[e + i] * o;
            return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, l.prototype.readIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || N(e, t, this.length);
            for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256);) i += this[e + --r] * o;
            return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
        }, l.prototype.readInt8 = function(e, t) {
            return t || N(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            t || N(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt16BE = function(e, t) {
            t || N(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt32LE = function(e, t) {
            return t || N(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return t || N(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readFloatLE = function(e, t) {
            return t || N(e, 4, this.length), o.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return t || N(e, 4, this.length), o.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return t || N(e, 8, this.length), o.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return t || N(e, 8, this.length), o.read(this, e, !1, 52, 8)
        }, l.prototype.writeUIntLE = function(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = 1,
                i = 0;
            for (this[t] = 255 & e; ++i < n && (o *= 256);) this[t + i] = e / o & 255;
            return t + n
        }, l.prototype.writeUIntBE = function(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || F(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var o = n - 1,
                i = 1;
            for (this[t + o] = 255 & e; --o >= 0 && (i *= 256);) this[t + o] = e / i & 255;
            return t + n
        }, l.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, l.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
        }, l.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
        }, l.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : R(this, e, t, !0), t + 4
        }, l.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : R(this, e, t, !1), t + 4
        }, l.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                F(this, e, t, n, o - 1, -o)
            }
            var i = 0,
                a = 1,
                s = 0;
            for (this[t] = 255 & e; ++i < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i - 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
            return t + n
        }, l.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                F(this, e, t, n, o - 1, -o)
            }
            var i = n - 1,
                a = 1,
                s = 0;
            for (this[t + i] = 255 & e; --i >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + i + 1] && (s = 1), this[t + i] = (e / a >> 0) - s & 255;
            return t + n
        }, l.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : O(this, e, t, !0), t + 2
        }, l.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : O(this, e, t, !1), t + 2
        }, l.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : R(this, e, t, !0), t + 4
        }, l.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || F(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : R(this, e, t, !1), t + 4
        }, l.prototype.writeFloatLE = function(e, t, n) {
            return D(this, e, t, !0, n)
        }, l.prototype.writeFloatBE = function(e, t, n) {
            return D(this, e, t, !1, n)
        }, l.prototype.writeDoubleLE = function(e, t, n) {
            return U(this, e, t, !0, n)
        }, l.prototype.writeDoubleBE = function(e, t, n) {
            return U(this, e, t, !1, n)
        }, l.prototype.copy = function(e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var o, i = r - n;
            if (this === e && n < t && t < r)
                for (o = i - 1; o >= 0; --o) e[o + t] = this[o + n];
            else if (i < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o) e[o + t] = this[o + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
            return i
        }, l.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                    var o = e.charCodeAt(0);
                    o < 256 && (e = o)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var i;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (i = t; i < n; ++i) this[i] = e;
            else {
                var a = l.isBuffer(e) ? e : j(new l(e, r).toString()),
                    s = a.length;
                for (i = 0; i < n - t; ++i) this[i + t] = a[i % s]
            }
            return this
        };
        var L = /[^+\/0-9A-Za-z-_]/g;

        function z(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function j(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!o) {
                        if (n > 56319) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && i.push(239, 191, 189);
                            continue
                        }
                        o = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && i.push(239, 191, 189), o = n;
                        continue
                    }
                    n = 65536 + (o - 55296 << 10 | n - 56320)
                } else o && (t -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    i.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    i.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return i
        }

        function H(e) {
            return r.toByteArray(function(e) {
                if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(L, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function q(e, t, n, r) {
            for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) t[o + n] = e[o];
            return o
        }
    }).call(this, n(2))
}, function(e, t, n) {
    var r = n(50);
    e.exports = function(e) {
        var t = e.xdomain,
            n = e.xscheme,
            o = e.enablesXDR;
        try {
            if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest
        } catch (e) {}
        try {
            if ("undefined" != typeof XDomainRequest && !n && o) return new XDomainRequest
        } catch (e) {}
        if (!t) try {
            return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
        } catch (e) {}
    }
}, function(e, t, n) {
    var r = n(3),
        o = n(14);

    function i(e) {
        this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
    }
    e.exports = i, o(i.prototype), i.prototype.onError = function(e, t) {
        var n = new Error(e);
        return n.type = "TransportError", n.description = t, this.emit("error", n), this
    }, i.prototype.open = function() {
        return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, i.prototype.close = function() {
        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, i.prototype.send = function(e) {
        if ("open" !== this.readyState) throw new Error("Transport not open");
        this.write(e)
    }, i.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, i.prototype.onData = function(e) {
        var t = r.decodePacket(e, this.socket.binaryType);
        this.onPacket(t)
    }, i.prototype.onPacket = function(e) {
        this.emit("packet", e)
    }, i.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }
}, function(e, t, n) {
    function r(e) {
        if (e) return function(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e
        }(e)
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function(e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments)
        }
        return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + e];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
                r.splice(o, 1);
                break
            }
        return this
    }, r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            n = this._callbacks["$" + e];
        if (n)
            for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
        return this
    }, r.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}, function(e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;

    function a(e) {
        if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                    return t[e]
                })).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                r[e] = e
            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, s, l = a(e), u = 1; u < arguments.length; u++) {
            for (var c in n = Object(arguments[u])) o.call(n, c) && (l[c] = n[c]);
            if (r) {
                s = r(n);
                for (var f = 0; f < s.length; f++) i.call(n, s[f]) && (l[s[f]] = n[s[f]])
            }
        }
        return l
    }
}, function(e, t, n) {
    (function(e) {
        var t = "english.json",
            r = "spanish.json",
            o = "russian.json",
            i = "german.json",
            a = "french.json";
        e.languagejson = null, e.jsn = n(36), e.setLang = function(e) {
            document.cookie = "lang=" + e, loadLang(e)
        }, e.loadLang = function(n) {
            var s = null;
            if ((location.href.includes("eng") || "eng" == n) && (s = languagejson = t), (location.href.includes("frn") || "frn" === n) && (s = languagejson = a), (location.href.includes("esp") || "esp" === n) && (s = languagejson = r), (location.href.includes("pyc") || "pyc" === n) && (s = languagejson = o), (location.href.includes("deu") || "deu" === n) && (s = languagejson = i), !s) {
                var l = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                null == l && (languagejson = t), "frn" === l ? languagejson = a : "esp" === l ? languagejson = r : "pyc" === l ? languagejson = o : "eng" === l ? languagejson = t : "deu" == l && (languagejson = i)
            }
            null == languagejson && (languagejson = t), languagejson = function(e) {
                var t = new XMLHttpRequest;
                t.open("GET", e, !1);
                var n = "";
                return t.onload = function(e) {
                    4 === t.readyState && (n = t.responseText)
                }, t.send(null), JSON.parse(n)
            }(languagejson), jsn.messages = languagejson.messages, jsn.achNames = languagejson.achNames, jsn.splashes = languagejson.splashes, jsn.lore = languagejson.lore;
            for (var u = 0; u < jsn.weapons.length; u++) jsn.weapons[u].name = languagejson.weapons[u].name, jsn.weapons[u].desc = languagejson.weapons[u].desc;
            for (u = 0; u < jsn.ships.length; u++) jsn.ships[u].nameA = languagejson.ships[u].nameA, jsn.ships[u].nameH = languagejson.ships[u].nameH, jsn.ships[u].desc = languagejson.ships[u].desc;
            e.mEng = jsn.messages, e.splash = jsn.splashes[Math.floor(Math.random() * jsn.splashes.length)], splash.endsWith("!") || splash.endsWith("?") || (splash += "...")
        }
    }).call(this, n(2))
}, function(e, t) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        r = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    e.exports = function(e) {
        var t = e,
            o = e.indexOf("["),
            i = e.indexOf("]"); - 1 != o && -1 != i && (e = e.substring(0, o) + e.substring(o, i).replace(/:/g, ";") + e.substring(i, e.length));
        for (var a = n.exec(e || ""), s = {}, l = 14; l--;) s[r[l]] = a[l] || "";
        return -1 != o && -1 != i && (s.source = t, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    (function(t) {
        e.exports = function(e) {
            return n && t.isBuffer(e) || r && (e instanceof ArrayBuffer || o(e))
        };
        var n = "function" == typeof t && "function" == typeof t.isBuffer,
            r = "function" == typeof ArrayBuffer,
            o = function(e) {
                return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
            }
    }).call(this, n(11).Buffer)
}, function(e, t, n) {
    var r = n(48),
        o = n(26),
        i = n(10),
        a = n(9),
        s = n(27),
        l = n(28),
        u = n(4)("socket.io-client:manager"),
        c = n(25),
        f = n(65),
        d = Object.prototype.hasOwnProperty;

    function p(e, t) {
        if (!(this instanceof p)) return new p(e, t);
        e && "object" == typeof e && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new f({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
        var n = t.parser || a;
        this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
    }
    e.exports = p, p.prototype.emitAll = function() {
        for (var e in this.emit.apply(this, arguments), this.nsps) d.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
    }, p.prototype.updateSocketIds = function() {
        for (var e in this.nsps) d.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
    }, p.prototype.generateId = function(e) {
        return ("/" === e ? "" : e + "#") + this.engine.id
    }, i(p.prototype), p.prototype.reconnection = function(e) {
        return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
    }, p.prototype.reconnectionAttempts = function(e) {
        return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
    }, p.prototype.reconnectionDelay = function(e) {
        return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
    }, p.prototype.randomizationFactor = function(e) {
        return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
    }, p.prototype.reconnectionDelayMax = function(e) {
        return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
    }, p.prototype.timeout = function(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }, p.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, p.prototype.open = p.prototype.connect = function(e, t) {
        if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        u("opening %s", this.uri), this.engine = r(this.uri, this.opts);
        var n = this.engine,
            o = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var i = s(n, "open", (function() {
                o.onopen(), e && e()
            })),
            a = s(n, "error", (function(t) {
                if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", t), e) {
                    var n = new Error("Connection error");
                    n.data = t, e(n)
                } else o.maybeReconnectOnOpen()
            }));
        if (!1 !== this._timeout) {
            var l = this._timeout;
            u("connect attempt will timeout after %d", l);
            var c = setTimeout((function() {
                u("connect attempt timed out after %d", l), i.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", l)
            }), l);
            this.subs.push({
                destroy: function() {
                    clearTimeout(c)
                }
            })
        }
        return this.subs.push(i), this.subs.push(a), this
    }, p.prototype.onopen = function() {
        u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var e = this.engine;
        this.subs.push(s(e, "data", l(this, "ondata"))), this.subs.push(s(e, "ping", l(this, "onping"))), this.subs.push(s(e, "pong", l(this, "onpong"))), this.subs.push(s(e, "error", l(this, "onerror"))), this.subs.push(s(e, "close", l(this, "onclose"))), this.subs.push(s(this.decoder, "decoded", l(this, "ondecoded")))
    }, p.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, p.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, p.prototype.ondata = function(e) {
        this.decoder.add(e)
    }, p.prototype.ondecoded = function(e) {
        this.emit("packet", e)
    }, p.prototype.onerror = function(e) {
        u("error", e), this.emitAll("error", e)
    }, p.prototype.socket = function(e, t) {
        var n = this.nsps[e];
        if (!n) {
            n = new o(this, e, t), this.nsps[e] = n;
            var r = this;
            n.on("connecting", i), n.on("connect", (function() {
                n.id = r.generateId(e)
            })), this.autoConnect && i()
        }

        function i() {
            ~c(r.connecting, n) || r.connecting.push(n)
        }
        return n
    }, p.prototype.destroy = function(e) {
        var t = c(this.connecting, e);
        ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
    }, p.prototype.packet = function(e) {
        u("writing packet %j", e);
        var t = this;
        e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, (function(n) {
            for (var r = 0; r < n.length; r++) t.engine.write(n[r], e.options);
            t.encoding = !1, t.processPacketQueue()
        })))
    }, p.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
            var e = this.packetBuffer.shift();
            this.packet(e)
        }
    }, p.prototype.cleanup = function() {
        u("cleanup");
        for (var e = this.subs.length, t = 0; t < e; t++) {
            this.subs.shift().destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, p.prototype.close = p.prototype.disconnect = function() {
        u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, p.prototype.onclose = function(e) {
        u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
    }, p.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var t = this.backoff.duration();
            u("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
            var n = setTimeout((function() {
                e.skipReconnect || (u("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || e.open((function(t) {
                    t ? (u("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : (u("reconnect success"), e.onreconnect())
                })))
            }), t);
            this.subs.push({
                destroy: function() {
                    clearTimeout(n)
                }
            })
        }
    }, p.prototype.onreconnect = function() {
        var e = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
    }
}, function(e, t, n) {
    var r = n(12),
        o = n(51),
        i = n(61),
        a = n(62);
    t.polling = function(e) {
        var t = !1,
            n = !1,
            a = !1 !== e.jsonp;
        if ("undefined" != typeof location) {
            var s = "https:" === location.protocol,
                l = location.port;
            l || (l = s ? 443 : 80), t = e.hostname !== location.hostname || l !== e.port, n = e.secure !== s
        }
        if (e.xdomain = t, e.xscheme = n, "open" in new r(e) && !e.forceJSONP) return new o(e);
        if (!a) throw new Error("JSONP disabled");
        return new i(e)
    }, t.websocket = a
}, function(e, t, n) {
    var r = n(13),
        o = n(5),
        i = n(3),
        a = n(6),
        s = n(24),
        l = n(7)("engine.io-client:polling");
    e.exports = c;
    var u = null != new(n(12))({
        xdomain: !1
    }).responseType;

    function c(e) {
        var t = e && e.forceBase64;
        u && !t || (this.supportsBinary = !1), r.call(this, e)
    }
    a(c, r), c.prototype.name = "polling", c.prototype.doOpen = function() {
        this.poll()
    }, c.prototype.pause = function(e) {
        var t = this;

        function n() {
            l("paused"), t.readyState = "paused", e()
        }
        if (this.readyState = "pausing", this.polling || !this.writable) {
            var r = 0;
            this.polling && (l("we are currently polling - waiting to pause"), r++, this.once("pollComplete", (function() {
                l("pre-pause polling complete"), --r || n()
            }))), this.writable || (l("we are currently writing - waiting to pause"), r++, this.once("drain", (function() {
                l("pre-pause writing complete"), --r || n()
            })))
        } else n()
    }, c.prototype.poll = function() {
        l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, c.prototype.onData = function(e) {
        var t = this;
        l("polling got data %s", e);
        i.decodePayload(e, this.socket.binaryType, (function(e, n, r) {
            if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
            t.onPacket(e)
        })), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
    }, c.prototype.doClose = function() {
        var e = this;

        function t() {
            l("writing close packet"), e.write([{
                type: "close"
            }])
        }
        "open" === this.readyState ? (l("transport open - closing"), t()) : (l("transport not open - deferring close"), this.once("open", t))
    }, c.prototype.write = function(e) {
        var t = this;
        this.writable = !1;
        var n = function() {
            t.writable = !0, t.emit("drain")
        };
        i.encodePayload(e, this.supportsBinary, (function(e) {
            t.doWrite(e, n)
        }))
    }, c.prototype.uri = function() {
        var e = this.query || {},
            t = this.secure ? "https" : "http",
            n = "";
        return !1 !== this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || e.sid || (e.b64 = 1), e = o.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
    }
}, function(e, t, n) {
    (function(t) {
        var r = n(53),
            o = Object.prototype.toString,
            i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === o.call(Blob),
            a = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === o.call(File);
        e.exports = function e(n) {
            if (!n || "object" != typeof n) return !1;
            if (r(n)) {
                for (var o = 0, s = n.length; o < s; o++)
                    if (e(n[o])) return !0;
                return !1
            }
            if ("function" == typeof t && t.isBuffer && t.isBuffer(n) || "function" == typeof ArrayBuffer && n instanceof ArrayBuffer || i && n instanceof Blob || a && n instanceof File) return !0;
            if (n.toJSON && "function" == typeof n.toJSON && 1 === arguments.length) return e(n.toJSON(), !0);
            for (var l in n)
                if (Object.prototype.hasOwnProperty.call(n, l) && e(n[l])) return !0;
            return !1
        }
    }).call(this, n(11).Buffer)
}, function(e, t, n) {
    "use strict";
    var r, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        i = 64,
        a = {},
        s = 0,
        l = 0;

    function u(e) {
        var t = "";
        do {
            t = o[e % i] + t, e = Math.floor(e / i)
        } while (e > 0);
        return t
    }

    function c() {
        var e = u(+new Date);
        return e !== r ? (s = 0, r = e) : e + "." + u(s++)
    }
    for (; l < i; l++) a[o[l]] = l;
    c.encode = u, c.decode = function(e) {
        var t = 0;
        for (l = 0; l < e.length; l++) t = t * i + a[e.charAt(l)];
        return t
    }, e.exports = c
}, function(e, t) {
    var n = [].indexOf;
    e.exports = function(e, t) {
        if (n) return e.indexOf(t);
        for (var r = 0; r < e.length; ++r)
            if (e[r] === t) return r;
        return -1
    }
}, function(e, t, n) {
    var r = n(9),
        o = n(10),
        i = n(64),
        a = n(27),
        s = n(28),
        l = n(4)("socket.io-client:socket"),
        u = n(5),
        c = n(23);
    e.exports = p;
    var f = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        d = o.prototype.emit;

    function p(e, t, n) {
        this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
    }
    o(p.prototype), p.prototype.subEvents = function() {
        if (!this.subs) {
            var e = this.io;
            this.subs = [a(e, "open", s(this, "onopen")), a(e, "packet", s(this, "onpacket")), a(e, "close", s(this, "onclose"))]
        }
    }, p.prototype.open = p.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
    }, p.prototype.send = function() {
        var e = i(arguments);
        return e.unshift("message"), this.emit.apply(this, e), this
    }, p.prototype.emit = function(e) {
        if (f.hasOwnProperty(e)) return d.apply(this, arguments), this;
        var t = i(arguments),
            n = {
                type: (void 0 !== this.flags.binary ? this.flags.binary : c(t)) ? r.BINARY_EVENT : r.EVENT,
                data: t,
                options: {}
            };
        return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
    }, p.prototype.packet = function(e) {
        e.nsp = this.nsp, this.io.packet(e)
    }, p.prototype.onopen = function() {
        if (l("transport is open - connecting"), "/" !== this.nsp)
            if (this.query) {
                var e = "object" == typeof this.query ? u.encode(this.query) : this.query;
                l("sending connect packet with query %s", e), this.packet({
                    type: r.CONNECT,
                    query: e
                })
            } else this.packet({
                type: r.CONNECT
            })
    }, p.prototype.onclose = function(e) {
        l("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
    }, p.prototype.onpacket = function(e) {
        var t = e.nsp === this.nsp,
            n = e.type === r.ERROR && "/" === e.nsp;
        if (t || n) switch (e.type) {
            case r.CONNECT:
                this.onconnect();
                break;
            case r.EVENT:
            case r.BINARY_EVENT:
                this.onevent(e);
                break;
            case r.ACK:
            case r.BINARY_ACK:
                this.onack(e);
                break;
            case r.DISCONNECT:
                this.ondisconnect();
                break;
            case r.ERROR:
                this.emit("error", e.data)
        }
    }, p.prototype.onevent = function(e) {
        var t = e.data || [];
        l("emitting event %j", t), null != e.id && (l("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? d.apply(this, t) : this.receiveBuffer.push(t)
    }, p.prototype.ack = function(e) {
        var t = this,
            n = !1;
        return function() {
            if (!n) {
                n = !0;
                var o = i(arguments);
                l("sending ack %j", o), t.packet({
                    type: c(o) ? r.BINARY_ACK : r.ACK,
                    id: e,
                    data: o
                })
            }
        }
    }, p.prototype.onack = function(e) {
        var t = this.acks[e.id];
        "function" == typeof t ? (l("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : l("bad ack %s", e.id)
    }, p.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, p.prototype.emitBuffered = function() {
        var e;
        for (e = 0; e < this.receiveBuffer.length; e++) d.apply(this, this.receiveBuffer[e]);
        for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
        this.sendBuffer = []
    }, p.prototype.ondisconnect = function() {
        l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, p.prototype.destroy = function() {
        if (this.subs) {
            for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, p.prototype.close = p.prototype.disconnect = function() {
        return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({
            type: r.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, p.prototype.compress = function(e) {
        return this.flags.compress = e, this
    }, p.prototype.binary = function(e) {
        return this.flags.binary = e, this
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        return e.on(t, n), {
            destroy: function() {
                e.removeListener(t, n)
            }
        }
    }
}, function(e, t) {
    var n = [].slice;
    e.exports = function(e, t) {
        if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
        var r = n.call(arguments, 2);
        return function() {
            return t.apply(e, r.concat(n.call(arguments)))
        }
    }
}, function(e, t, n) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) {
            0;
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
            } catch (e) {
                console.error(e)
            }
        }
    }(), e.exports = n(33)
}, function(e, t, n) {
    e.exports = n(31)
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            var t = n(0),
                r = n.n(t),
                o = n(29),
                i = n.n(o),
                a = n(1);
            console.log("************************************************************************************************************************"), console.log(" ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄     ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ "), console.log("▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌"), console.log(" ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌   ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌   ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌"), console.log("     ▐░▌     ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░▌   ▐░▌ ▐░▌    ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌    ▐░▌▐░▌             ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌          "), console.log("     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░▌     ▐░▐░▌ ▄  ▄▄▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ "), console.log("     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌      ▐░░▌▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌"), console.log("      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀        ▀▀  ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ "), console.log("                                                                                                                        "), console.log("************************************************************************************************************************"), console.log("torn-client-git-torn-production-322f3d93e0bb99e5b602e6ce84beace77ea7d385"), console.log("Implementing protocol version v2-50-g322f3d9"), console.error("***********************************************************************"), console.error("WARNING: PASTING CODE INTO HERE CAN ALLOW FOR YOUR ACCOUNT TO BE STOLEN"), console.error("ALWAYS AUDIT CODE YOU ARE INJECTING INTO THE DEVELOPER CONSOLE"), console.error("ADDITIONALLY, PLEASE RESPECT OUR TOS https://torn.space/tos"), console.error("***********************************************************************"), window.document.title = "Torn v2-50-g322f3d9";
            var s = !0,
                l = document.getElementById("ctx");
            l.width = window.innerWidth, l.height = window.innerHeight;
            var u = l.getContext("2d"),
                c = n(37),
                f = n(66),
                d = f.Howl,
                p = f.Howler,
                h = n(67);
            i.a.render(r.a.createElement(a.a, {
                data: {
                    toggleMusic: function() {
                        (Sn ^= !0) && M ? kn.music1.pause() : 0 != _n && kn.music1.play();
                        return Sn
                    },
                    toggleAudio: function() {
                        return Cn ^= !0, p.mute(Cn), Cn
                    }
                }
            }), document.getElementById("a")), a.a.turnOnDisplay("LoginOverlay");
            for (var m = [], g = 0; g < 1571; g++) m[g] = Math.sin(g / 1e3);
            n(16), loadLang();
            var y = c("torn.space:443", {
                autoConnect: !1,
                parser: h
            });
            a.a.socket = y, e.connect = function() {
                y.connected || y.open()
            };
            var v = 14336,
                b = 0,
                w = 0,
                _ = 0,
                k = 0,
                x = 0,
                E = 0,
                C = 0,
                S = 7,
                T = 0,
                A = 0,
                M = !1,
                P = !1,
                I = !1,
                N = 0,
                F = 0,
                O = 0,
                R = 0,
                B = !1,
                D = 0,
                U = 0,
                L = 0,
                z = 0,
                j = 0,
                H = 0,
                q = 0,
                W = 0,
                V = 0,
                Y = 0,
                G = 0,
                X = 0,
                Q = 0,
                K = 0,
                J = 0,
                Z = 0,
                ee = 0,
                te = 0,
                ne = 0,
                re = 0,
                oe = 0,
                ie = 0,
                ae = 0,
                se = 0,
                le = !1,
                ue = !0,
                ce = 0,
                fe = -1,
                de = 0,
                pe = 0,
                he = .5;
            e.typing = !1, e.stopTyping = function() {
                typing = !1
            };
            var me = 20,
                ge = 0,
                ye = 0,
                ve = {},
                be = 0,
                we = 0,
                _e = 0,
                ke = {};
            for (g = 0; g < me; g++) ke[g] = "";
            _r();
            var xe = -1,
                Ee = 0,
                Ce = 0,
                Se = 0,
                Te = !1,
                Ae = !1,
                Me = 0,
                Pe = 0,
                Ie = 0,
                Ne = 0,
                Fe = -1,
                Oe = -1,
                Re = 0,
                Be = 45e3,
                De = 1,
                Ue = 1,
                Le = 1,
                ze = 1,
                je = 1,
                He = 1,
                qe = !1,
                We = 50,
                Ve = 0,
                $e = 0,
                Ye = -40,
                Ge = 0,
                Xe = 0,
                Qe = 0,
                Ke = 0,
                Je = 0,
                Ze = !1,
                et = 0,
                tt = 0,
                nt = 0,
                rt = "~`",
                ot = "GUEST",
                it = "",
                at = !1,
                st = !1,
                lt = "",
                ut = "",
                ct = 0,
                ft = 0,
                dt = {},
                pt = {},
                ht = {},
                mt = {},
                gt = {},
                yt = 0,
                vt = 0,
                bt = 0,
                wt = 0,
                _t = [],
                kt = 0,
                xt = window.innerWidth,
                Et = window.innerHeight,
                Ct = xt / 2 - 384,
                St = Et / 4 - 128,
                Tt = void 0,
                At = {},
                Mt = {},
                Pt = {},
                It = {},
                Nt = {},
                Ft = {},
                Ot = {},
                Rt = {},
                Bt = {},
                Dt = !1,
                Ut = !1,
                Lt = [];
            for (g = 0; g < 200; g++) Lt[g] = {
                x: Math.random() * xt,
                y: Math.random() * Et
            };
            var zt = void 0,
                jt = [];
            for (g = 0; g < 2e3; g++) {
                var Ht = 6.28318 * Math.random(),
                    qt = 128 * Math.random(),
                    Wt = ir(Ht += or(5 * (Ht % (2 * Math.PI / 5) + qt / 32) / 2) / (1 + 128 / qt)) * qt,
                    Vt = or(Ht) * qt,
                    $t = 16 * or(100 * Math.random()) / (1 + qt * qt / 1024);
                jt[g] = {
                    x: Math.floor(Wt),
                    y: Math.floor(Vt),
                    z: Math.floor($t)
                }
            }
            var Yt = 0,
                Gt = -1,
                Xt = 0,
                Qt = !1,
                Kt = ae,
                Jt = se,
                Zt = {
                    x: Kt *= 256 / S * (2 * S - 1) / (2 * S),
                    y: Jt *= 256 / S * (2 * S - 1) / (2 * S),
                    z: 0,
                    color: "lime"
                },
                en = 0,
                tn = 0,
                nn = !1,
                rn = !1,
                on = 0,
                an = [],
                sn = [0, 1, 0, 4, 2, 2, 3, 0, 5, 1];
            for (g = 0; g < 12; g += 2) {
                Wt = sn[g] - (S - 1) / 2, Vt = sn[g + 1] - (S - 1) / 2;
                Wt *= 256 / S * (2 * S - 1) / (2 * S), Vt *= 256 / S * (2 * S - 1) / (2 * S), an[g / 2] = {
                    x: Wt,
                    y: Vt,
                    z: 0,
                    color: "red"
                };
                var ln = (S - 1) / 2 - sn[g],
                    un = (S - 1) / 2 - sn[g + 1];
                ln *= 256 / S * (2 * S - 1) / (2 * S), un *= 256 / S * (2 * S - 1) / (2 * S), an[g / 2 + 6] = {
                    x: ln,
                    y: un,
                    z: 0,
                    color: "cyan"
                }
            }
            var cn = [];
            for (g = 0; g < 2 * S + 2; g++) {
                Wt = g < S + 1 ? 256 * (g - S / 2) / S : -128, Vt = g > S ? 256 * (g - (S + 1) - S / 2) / S : -128;
                Wt *= (2 * S - 1) / (2 * S), Vt *= (2 * S - 1) / (2 * S), cn[g] = {
                    x: Wt,
                    y: Vt,
                    z: 0
                };
                ln = g < S + 1 ? 256 * (g - S / 2) / S : 128, un = g > S ? 256 * (g - (S + 1) - S / 2) / S : 128;
                ln *= (2 * S - 1) / (2 * S), un *= (2 * S - 1) / (2 * S), cn[g + 2 * S + 2] = {
                    x: ln,
                    y: un,
                    z: 0
                }
            }
            for (var fn = jsn.weapons, dn = jsn.ships, pn = 0; pn < fn.length - 1; pn++)
                if (fn[pr(pn)].type === fn[pr(pn + 1)].type && fn[pr(pn)].level > fn[pr(pn + 1)].level) {
                    var hn = pr(pn),
                        mn = pr(pn + 1);
                    fn[hn].order = pn + 1, fn[mn].order = pn, pn = 0
                }
            fn[-2] = {
                name: ""
            }, fn[-1] = {
                name: mEng[0]
            };
            var gn = 0,
                yn = 0,
                vn = 0,
                bn = 0,
                wn = {},
                _n = 0,
                kn = {},
                xn = [0, 0];

            function En(e, t) {
                kn[e] && console.error("Loading audio twice: " + e), kn[e] = new d({
                    src: t,
                    autoplay: !1,
                    loop: !1,
                    preload: !0,
                    onload: function() {
                        lt = "Loaded audio " + e, console.log(lt), ++xn[0]
                    },
                    pool: 15
                }), xn[1]++
            }
            var Cn = !1,
                Sn = !1;

            function Tn(e, t) {
                if (!Cn) {
                    var n = kn[e];
                    n || console.error("Unknown sound " + e);
                    var r = n.play();
                    n.volume(he * t, r), "bigboom" == e && n.volume(he * t * 2, r), "noammo" == e && n.volume(he * t * 5, r), "music1" === e && (n.volume(he * t / 2, r), _n = r)
                }
            }
            var An = [],
                Mn = [],
                Pn = [],
                In = {},
                Nn = [0, 0];

            function Fn(e, t) {
                In[e] ? console.error("Loading image twice: " + e) : (In[e] = new Image, In[e].addEventListener("load", (function() {
                    lt = "Loaded sprite " + e, console.log(lt), Nn[0]++
                })), In[e].src = t, Nn[1]++)
            }

            function On(e, t) {
                e ? (An[t] = new Image, An[t].src = "/img/red/r" + (t + 1) + ".png") : (Mn[t] = new Image, Mn[t].src = "/img/blue/b" + (t + 1) + ".png")
            }! function() {
                Fn("s1", "/img/space/s1.png"), Fn("s2", "/img/space/s2.png"), Fn("s3", "/img/space/s3.png"), Fn("s4", "/img/space/s4.png"), Fn("s5", "/img/space/s5.png"), Fn("s6", "/img/space/s6.png"), Fn("s7", "/img/space/s7.png"), Fn("s8", "/img/space/s8.png"), Fn("spc", "/img/space/NewBackground.png"), Fn("bullet", "/img/red/rb.png"), Fn("grad", "/img/grad.png"), Fn("shockwave", "/img/shockwave.png"), Fn("ebullet", "/img/blue/bb.png"), Fn("bigBullet", "/img/bigBullet.png"), Fn("base", "https://cdn.discordapp.com/attachments/658471777361723393/659132442224885790/rBeastBasev3.png"), Fn("bss", "https://cdn.discordapp.com/attachments/617205605647646745/659122294928572469/bBeastBase.png"), Fn("mrss", "/img/red/mrss.png"), Fn("mbss", "/img/blue/mbss.png"), Fn("turret", "https://cdn.discordapp.com/attachments/658471777361723393/658774700305940491/turret-alien.png"), Fn("bt", "https://cdn.discordapp.com/attachments/658471777361723393/658786151993180175/turret-human.png"), Fn("iron", "/img/space/iron.png"), Fn("aluminium", "/img/space/aluminium.png"), Fn("platinum", "/img/space/platinum.png"), Fn("silver", "/img/space/silver.png"), Fn("astUnderlay", "/img/space/astUnderlay.png"), Fn("astUnderlayRed", "/img/space/astUnderlayRed.png"), Fn("booms", "/img/booms.png"), Fn("planetO", "/img/space/planetOverlay.png"), Fn("planetU", "/img/space/planetUnderlay.png"), Fn("planetUB", "/img/space/planetUnderlayBlue.png"), Fn("planetUR", "/img/space/planetUnderlayRed.png"), Fn("grid", "/img/grid.png"), Fn("galaxy", "/img/galaxy.png"), Fn("spin", "/img/spin.png"), Fn("fire", "/img/fire.png"), Fn("arrow", "/img/arrow.png"), Fn("energyDisk", "/img/missile/energyDisk.png"), Fn("missile", "https://media.discordapp.net/attachments/658471777361723393/658770909489922066/missile-basic.png"), Fn("torpedo", "https://media.discordapp.net/attachments/658471777361723393/658774046258888714/missile-torpedo.png"), Fn("heavyMissile", "https://media.discordapp.net/attachments/658471777361723393/658770942646026250/missile-heavy.png"), Fn("empMissile", "https://media.discordapp.net/attachments/658471777361723393/658770928028745741/missile-emp.png"), Fn("mine", "/img/missile/mine.png"), Fn("grenade", "/img/missile/grenade.png"), Fn("empMine", "/img/missile/empMine.png"), Fn("laserMine", "/img/missile/laserMine.png"), Fn("ma", "/img/ma.png"), Fn("vort", "/img/space/vort.png"), Fn("worm", "/img/space/worm.png"), Fn("q", "/img/q.png"), Fn("button", "/img/button.png"), Fn("gbutton", "/img/gbutton.png"), Fn("pack", "/img/pack.png"), Fn("ammo", "/img/ammo.png"), Fn("bonus", "/img/bonus.png"), Fn("life", "/img/life.png"), Fn("bar1", "/img/bar1.png"), Fn("bar2", "/img/bar2.png"), Fn("astArrow", "/img/astArrow.png"), Fn("edgeArrow", "/img/edgeArrow.png"), Fn("redArrow", "/img/redArrow.png"), Fn("blueArrow", "/img/blueArrow.png"), Fn("baseArrow", "/img/baseArrow.png"), Fn("BHArrow", "/img/BHArrow.png"), Fn("Exclamation", "/img/AAA.png"), Fn("energyBar", "/img/energy.png"), On(!0, 14);
                for (var e = 0; e < 8; e++) On(!1, e);
                for (e = 0; e < 8; e++) On(!0, e);
                ! function() {
                    var e = function() {
                        return console.log("loadImageEnd"), Nn[0] === Nn[1] && (!0, Dt = !0, !0)
                    };
                    if (!e()) var t = setInterval((function() {
                        e() && clearInterval(t)
                    }), 100)
                }()
            }(), En("minigun", "https://cdn.discordapp.com/attachments/482302941072588800/493828086651944971/PulsePhaserJLH.wav"), En("boom", "aud/noammo.wav"), En("hyperspace", "https://cdn.discordapp.com/attachments/658471777361723393/658722096179970108/Cursanfocusbeamloop.wav"), En("bigboom", "https://cdn.discordapp.com/attachments/482302941072588800/493822304531251220/explo_large_01.wav"), En("shot", "/aud/shot.mp3"), En("beam", "https://cdn.discordapp.com/attachments/658471777361723393/658659332061396993/ambassador_phaser_a.wav"), En("missile", "https://cdn.discordapp.com/attachments/482302941072588800/493828777114337285/VoyTorpJLH.wav"), En("sector", "https://cdn.discordapp.com/attachments/658471777361723393/658710553128075294/hail.wav"), En("money", "/aud/money.wav"), En("button2", "https://cdn.discordapp.com/attachments/658471777361723393/658709681690378240/ebviewscreenoff.wav"), En("noammo", "https://cdn.discordapp.com/attachments/482302941072588800/493822774788358154/Error.WAV");
            var Rn = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                Bn = [-1, -1, -1, -1];

            function Dn(e) {
                for (var t in jt) {
                    var n = jt[t],
                        r = Math.sqrt(n.y * n.y + n.z * n.z),
                        o = Math.atan2(n.z, n.y) + e / 28,
                        i = Math.cos(o) * r,
                        a = Math.sin(o) * r;
                    n.y = i, n.z = a
                }
                for (var t in an) {
                    n = an[t], r = Math.sqrt(n.y * n.y + n.z * n.z), o = Math.atan2(n.z, n.y) + e / 28, i = Math.cos(o) * r, a = Math.sin(o) * r;
                    n.y = i, n.z = a
                }
                for (var t in cn) {
                    n = cn[t], r = Math.sqrt(n.y * n.y + n.z * n.z), o = Math.atan2(n.z, n.y) + e / 28, i = Math.cos(o) * r, a = Math.sin(o) * r;
                    n.y = i, n.z = a
                }
                n = Zt, r = Math.sqrt(n.y * n.y + n.z * n.z), o = Math.atan2(n.z, n.y) + e / 28, i = Math.cos(o) * r, a = Math.sin(o) * r;
                n.y = i, n.z = a
            }

            function Un(e) {
                for (var t in jt) {
                    var n = jt[t],
                        r = Math.sqrt(n.x * n.x + n.z * n.z),
                        o = Math.atan2(n.z, n.x) + e / 28,
                        i = Math.cos(o) * r,
                        a = Math.sin(o) * r;
                    n.x = i, n.z = a
                }
                for (var t in an) {
                    n = an[t], r = Math.sqrt(n.x * n.x + n.z * n.z), o = Math.atan2(n.z, n.x) + e / 28, i = Math.cos(o) * r, a = Math.sin(o) * r;
                    n.x = i, n.z = a
                }
                for (var t in cn) {
                    n = cn[t], r = Math.sqrt(n.x * n.x + n.z * n.z), o = Math.atan2(n.z, n.x) + e / 28, i = Math.cos(o) * r, a = Math.sin(o) * r;
                    n.x = i, n.z = a
                }
                n = Zt, r = Math.sqrt(n.x * n.x + n.z * n.z), o = Math.atan2(n.z, n.x) + e / 28, i = Math.cos(o) * r, a = Math.sin(o) * r;
                n.x = i, n.z = a
            }

            function Ln(e, t) {
                return String.fromCharCode(97 + e).toUpperCase() + "" + (t + 1)
            }

            function zn() {
                if (qe) return u.globalAlpha = .02, u.fillStyle = "black", u.fillRect(0, 0, l.width, l.height), u.globalAlpha = 1, void
                function() {
                    u.fillStyle = "yellow", u.textAlign = "center", u.font = "50px Nasa", tr(mEng[110], Ct + 384, St + 128), u.font = "34px Nasa", tr(mEng[13] + We, Ct + 384, St + 384), We > 0 && tr(mEng[111], Ct + 384, St + 512);
                    u.textAlign = "left", u.font = "11px Nasa"
                }();
                if (le && (Ae = !1, hr(), function() {
                        k++, l.width = l.width, xr(), wr(), kr(),
                            function() {
                                u.lineWidth = 2, u.textAlign = "right", u.fillStyle = "yellow";
                                var e = {};
                                e[0] = mEng[3] + Ln(ae, se), e[1] = mEng[5] + Math.floor(re);
                                for (var t = 0; t < 2; t++) tr(e[t], xt - (Ut ? 16 : 278), 16 + 16 * t);
                                u.font = "11px Nasa", u.lineWidth = 2, Dn(or(++x % 3142 / 100) / 16), Un(ir(x % 3142 / Math.PI / 50) / 16);
                                var n = {};
                                n[0] = mEng[141], n[1] = mEng[142], n[2] = mEng[143], n[3] = mEng[144], n[4] = mEng[145], n[5] = mEng[146], Pr(Ct, St + 44, 768, 468, "black", "white"), u.textAlign = "center";
                                for (t = 0; t < 6; t++) Pr(Ct + 128 * t + 8, St + 4, 112, 32, ce == t ? "darkgray" : "black", "white");
                                u.fillStyle = "white";
                                for (t = 0; t < 6; t++) tr(n[t], Ct + (128 * t + 64), St + 23);
                                u.fillStyle = "yellow", u.textAlign = "right", u.font = "18px Nasa", tr(mEng[78], Ct + 768 - 16, St + 512 + 24), u.font = "11px Nasa", u.textAlign = "left"
                            }(), -1 != ce && a.a.turnOffRegister("LoginOverlay");
                        switch (ce) {
                            case 0:
                                u.textAlign = "center",
                                    function() {
                                        for (var e in u.strokeStyle = u.fillStyle = "white", u.lineWidth = 2, jt) {
                                            var t = jt[e],
                                                n = Ct + 256 + 2 * t.x / 1.5,
                                                r = St + 256 + 20 + 2 * t.y / 1.5;
                                            u.fillRect(n, r, 1.5, 1.5)
                                        }
                                        for (var e in an) {
                                            t = an[e], n = Ct + 256 + 2 * t.x / 1.5, r = St + 256 + 20 + 2 * t.y / 1.5;
                                            var o = "red" == t.color ? In.mrss : "cyan" == t.color ? In.mbss : In.ma;
                                            u.drawImage(o, n - 10, r - 10, 21, 21)
                                        }
                                        for (u.strokeStyle = "gray", u.lineWidth = .8, e = 0; e < 2 * S + 2; e++) {
                                            t = cn[e];
                                            var i = cn[e + 2 * S + 2],
                                                a = (n = Ct + 256 + 2 * t.x / 1.5, r = St + 256 + 20 + 2 * t.y / 1.5, Ct + 256 + 2 * i.x / 1.5),
                                                s = St + 256 + 20 + 2 * i.y / 1.5;
                                            u.beginPath(), u.moveTo(n, r), u.lineTo(a, s), u.closePath(), u.stroke()
                                        }
                                    }(), Ut && (u.font = 4 * or(x / 16) + 28 + "px Nasa", u.fillStyle = 600 == Me ? "lime" : "yellow", u.textAlign = "center", tr(mEng[11], Ct + 728 - 96, St + 256), u.font = "11px Nasa");
                                break;
                            case 1:
                                ! function() {
                                    var e = {};
                                    e[4] = (K > 0 ? mEng[133] : mEng[137]) + K + " => $" + K * ("red" === O ? 1 : 2) + " ($" + ("red" === O ? "1" : "2") + " " + mEng[155] + ")", e[5] = (J > 0 ? mEng[134] : mEng[138]) + J + " => $" + 1.5 * J + " ($1.5 " + mEng[155] + ")", e[6] = (Z > 0 ? mEng[135] : mEng[139]) + Z + " => $" + Z * ("blue" === O ? 1 : 2) + " ($" + ("blue" === O ? "1" : "2") + " " + mEng[155] + ")", e[7] = (ee > 0 ? mEng[136] : mEng[140]) + ee + " => $" + 1.5 * ee + " ($1.5 " + mEng[155] + ")",
                                        function(e, t) {
                                            for (var n in u.strokeStyle = u.fillStyle = "white", u.lineWidth = 2, jt) {
                                                var r = jt[n],
                                                    o = e + r.x / 1.33,
                                                    i = t + r.y / 1.33;
                                                u.fillRect(o, i, 1, 1)
                                            }
                                            for (var n in an) {
                                                r = an[n], o = e + r.x / 1.33, i = t + r.y / 1.33;
                                                var a = "red" == r.color ? In.mrss : "cyan" == r.color ? In.mbss : In.ma;
                                                u.drawImage(a, o - 7, i - 7, 15, 15)
                                            }
                                            u.strokeStyle = "gray", u.lineWidth = .35;
                                            for (n = 0; n < 2 * S + 2; n++) {
                                                r = cn[n];
                                                var s = cn[n + 2 * S + 2],
                                                    l = (o = e + r.x / 1.33, i = t + r.y / 1.33, e + s.x / 1.33),
                                                    c = t + s.y / 1.33;
                                                u.beginPath(), u.moveTo(o, i), u.lineTo(l, c), u.closePath(), u.stroke()
                                            }
                                        }(Ct + 768 - 256 - 16 + 128, St + 512 - 128 - 32), u.strokeStyle = "white", u.lineWidth = 1, u.font = "11px Nasa", u.textAlign = "left";
                                    for (var t = 4; t < 8; t++) u.fillStyle = t + 1 == Me ? "lime" : "yellow", tr(e[t], Ct + 256 - 32, St - 32 + 32 * t);
                                    u.fillStyle = 610 == Me ? "lime" : "yellow", tr(mEng[12], Ct + 256 + 48, St + 76), u.fillStyle = "yellow", u.textAlign = "right", tr(mEng[13] + We + " ($" + ur() + ") ", Ct + 768 - 16 - u.measureText(mEng[14]).width, St + 512 - 16), u.fillStyle = We >= 20 || re < ur() ? "red" : 611 == Me ? "lime" : "yellow", tr(mEng[14], Ct + 768 - 16, St + 512 - 16), u.textAlign = "left", u.fillStyle = "yellow", u.font = "24px Nasa", tr(mEng[15], Ct + 256 + 32, St + 256 - 16), u.textAlign = "center", tr(mEng[16], Ct + 256, St + 64 + 8), u.textAlign = "left", u.font = "11px Nasa", u.fillStyle = 601 == Me ? "lime" : "yellow", tr(mEng[18], Ct + 512 - 64, St + 256 - 16), u.fillStyle = "yellow";
                                    for (t = 0; t < 10; t++) {
                                        u.fillStyle = Me - 10 == t ? "lime" : "yellow", dn[de].weapons <= t && (u.fillStyle = "orange"), de < fn[bn[t]].level && (u.fillStyle = "red");
                                        var n = "\t      "; - 1 == bn[t] ? n = mEng[14] + (9 != t ? "  " : " ") : bn[t] > -1 && (n = mEng[19] + (9 != t ? " " : "")), tr(n + (t + 1) + ": " + fn[bn[t]].name, Ct + 256 + 32, St + 256 + 16 * t)
                                    }
                                    u.fillStyle = "white", Mr(Ct + 16, St + 256 - 16, 256, 256, 8, !1, !0);
                                    var r = new Date,
                                        o = 2 * r.getMilliseconds() * Math.PI / 5e4 + 2 * r.getSeconds() * Math.PI / 50 + 2 * r.getMinutes() * 60 * Math.PI / 50,
                                        i = Ct + 128 + 16,
                                        a = St + 384 - 16,
                                        s = "red" === O,
                                        l = s ? An[de] : Mn[de];
                                    void 0 === l || 2 == l ? ((s ? An : Mn)[de] = 2, 2 != l && On(s, de)) : (u.save(), u.translate(i, a), u.rotate(-3 * o), de > ie && (l = In.q), u.drawImage(l, -l.width / 2, -l.height / 2), u.restore());
                                    u.textAlign = "center", u.fillStyle = "yellow", u.font = "20px Nasa", tr(mEng[24], Ct + 128 + 16, St + 256 + 16), u.font = "11px Nasa", tr(mEng[25] + " " + de, Ct + 128 + 16, St + 256 + 56), tr("red" === O ? dn[de].nameA : dn[de].nameH, Ct + 128 + 16, St + 256 + 40), de > ie && (u.fillStyle = "red");
                                    u.fillStyle = "yellow", dn[de].price > re + Ie || de > ie ? u.fillStyle = "red" : 100 == Me && (u.fillStyle = "lime");
                                    de != Ne && tr("$" + (dn[de].price - Ie) + " " + mEng[14], i, a + 96);
                                    u.textAlign = "left", u.fillStyle = "yellow", tr(mEng[27] + (de > ie ? mEng[26] : dn[de].thrust), Ct + 256 + 32, St + 256 + 176), tr(mEng[28] + (de > ie ? mEng[26] : dn[de].agility), Ct + 256 + 32, St + 256 + 192), tr(mEng[29] + (de > ie ? mEng[26] : dn[de].health), Ct + 256 + 32, St + 256 + 208), tr(mEng[30] + (de > ie ? mEng[26] : dn[de].weapons), Ct + 256 + 32, St + 256 + 224), tr(mEng[31] + (de > ie ? mEng[26] : dn[de].capacity), Ct + 256 + 32, St + 256 + 240), de < dn.length && u.drawImage(In.arrow, i + 128 - 48, a - 16);
                                    de > 0 && (u.save(), u.translate(i - 128 + 32, a), u.rotate(Math.PI), u.drawImage(In.arrow, -16, -16), u.restore());
                                    var c = Math.floor((r.getMilliseconds() / 1e3 + r.getSeconds()) / 60 * 1024) % 64,
                                        f = c % 8 * 128,
                                        d = 128 * Math.floor(c / 8 % 4);
                                    u.save(), u.translate(Ct + 128 - 16, St + 92 + 40), u.drawImage(In.silver, f, d, 128, 128, -64, -64, 128, 128), u.restore()
                                }();
                                break;
                            case 2:
                                ! function() {
                                    if (u.font = "11px Nasa", u.textAlign = "left", Er(), 0 != A) {
                                        u.fillStyle = "cyan", u.textAlign = "center", u.font = "30px Nasa", tr(mEng[36], Ct + 384, St + 128), u.font = "11px Nasa";
                                        var e = "";
                                        "Mining" === A.type && (e = mEng[37] + A.amt + mEng[38] + A.metal + mEng[39] + Ln(A.sx, A.sy) + mEng[40]), "Base" === A.type && (e = mEng[41] + Ln(A.sx, A.sy) + mEng[40]), "Delivery" === A.type && (e = mEng[42] + Ln(A.sx, A.sy) + mEng[43] + Ln(A.dsx, A.dsy) + mEng[40]), "Secret" === A.type && (e = mEng[156] + Ln(A.sx, A.sy) + mEng[157]), "Secret2" === A.type && (e = mEng[158] + Ln(A.sx, A.sy) + mEng[159] + ut + mEng[40]), "Secret3" === A.type && (e = mEng[160]), tr(e, Ct + 384, St + 192), u.textAlign = "left"
                                    } else
                                        for (var t in T) {
                                            var n = t < 5 ? 0 : 384,
                                                r = T[t];
                                            e = "";
                                            u.fillStyle = t == Me - 300 ? "lime" : "yellow", "Mining" == r.type && (e = mEng[37] + r.amt + mEng[38] + r.metal + mEng[39] + Ln(r.sx, r.sy) + mEng[40]), "Base" == r.type && (e = ie > 6 ? mEng[41] + Ln(r.sx, r.sy) + mEng[40] : mEng[46]), "Secret" == r.type && (e = ie > 14 ? mEng[156] + Ln(r.sx, r.sy) + mEng[157] : mEng[46]), "Delivery" == r.type && (e = mEng[42] + Ln(r.sx, r.sy) + mEng[43] + Ln(r.dsx, r.dsy) + mEng[40]), tr(r.type, n + Ct + 16, St + 72 + t % 5 * 80), tr(mEng[47] + r.exp + mEng[48] + Math.floor(r.exp / ("Mining" === r.type || "Delivery" === r.type ? 1500 : 4e3)) + mEng[49], n + Ct + 16 + 16, St + 72 + t % 5 * 80 + 16), qn(mEng[50] + e, n + Ct + 16 + 16, St + 72 + t % 5 * 80 + 32, 336, 16)
                                        }
                                }();
                                break;
                            case 3:
                                ! function() {
                                    u.font = "11px Nasa", u.textAlign = "left";
                                    for (var e = new Date, t = 2 * e.getMilliseconds() * Math.PI / 5e4 + 2 * e.getSeconds() * Math.PI / 50 + 2 * e.getMinutes() * 60 * Math.PI / 50, n = K + J + Z + ee, r = 0, o = 1; o < De; o += .2) r += 1e3 * Math.round(Math.pow(1024, o) / 1e3);
                                    for (o = 1; o < ze; o += .2) r += 1e3 * Math.round(Math.pow(1024, o) / 1e3);
                                    for (o = 1; o < He; o += .2) r += 1e3 * Math.round(Math.pow(1024, o) / 1e3);
                                    for (o = 1; o < Le; o += .2) r += 1e3 * Math.round(Math.pow(1024, o) / 1e3);
                                    for (o = 1; o < Ue; o += .2) r += 1e3 * Math.round(Math.pow(1024, o) / 1e3);
                                    for (o = 1; o < je; o += .2) r += 1e3 * Math.round(Math.pow(4096, o) / 1e3);
                                    var i = 0;
                                    for (var o in Rn) Rn[o] && i++;
                                    u.fillStyle = "yellow", tr(mEng[161], Ct + 16, St + 512 - 16), u.font = "32px Nasa", u.textAlign = "center", tr(ot, Ct + 192, St + 96), u.font = "11px Nasa";
                                    var a = 0;
                                    if (Ne >= fn[20].level)
                                        for (o = 0; o < dn[Ne].weapons; o++) 20 == bn[o] && a++;
                                    var s = je;
                                    for (o = 0; o < a; o++) s *= 1.06;
                                    var l = [mEng[162] + a, mEng[20] + Number((dn[Ne].thrust * De).toPrecision(3)), mEng[21] + Number(ze.toPrecision(3)) + mEng[163], mEng[22] + Number((dn[Ne].capacity * Le).toPrecision(3)), mEng[23] + Number((dn[Ne].health * Ue).toPrecision(3)), mEng[164] + Number(s.toPrecision(3)), te - ne + mEng[51], ne + mEng[52], We + mEng[53], mEng[54] + n, mEng[55] + Number((Ie + r).toPrecision(3)), mEng[56] + Number((re + n + Ie + r).toPrecision(3)), Math.round(oe) + mEng[57], mEng[58] + ie, i + mEng[59]];
                                    for (o = 0; o < l.length; o++) tr(l[o], Ct + 512 - 64, St + 44 + 32 + 16 * o);
                                    u.fillStyle = 700 == Me ? "yellow" : "red", tr(mEng[165], Ct + 512 + 128, St + 44 + 64 - 16), Rn[12] && (u.fillStyle = 701 == Me ? "yellow" : "red", tr(mEng[166], Ct + 512 + 128, St + 44 + 64 + 16));
                                    Rn[24] && (u.fillStyle = 702 == Me ? "yellow" : "gold", tr(mEng[167], Ct + 512 + 128, St + 44 + 64 + 48));
                                    Rn[36] && (u.fillStyle = 703 == Me ? "yellow" : "lightgray", tr(mEng[168], Ct + 512 + 128, St + 44 + 64 + 80));
                                    Rn[47] && (u.fillStyle = 704 == Me ? "yellow" : "cyan", tr(mEng[169], Ct + 512 + 128, St + 44 + 64 + 112));
                                    0;
                                    var c = Ct + 192,
                                        f = St + 192;
                                    u.save(), u.translate(c, f), u.rotate(-3 * t);
                                    var d = "red" === O,
                                        p = d ? An[Ne] : Mn[Ne];
                                    if (void 0 === p || 2 == p) return (d ? An : Mn)[Ne] = 2, void(2 != p && On(d, Ne));
                                    u.drawImage(p, -p.width / 2, -p.height / 2), u.restore(), u.fillStyle = "yellow", u.textAlign = "left", u.font = "24px Nasa", tr(mEng[17], Ct + 64, St + 256 + 64 + 16), u.fillStyle = "white", u.font = "11px Nasa", u.drawImage(200 == Me ? In.gbutton : In.button, Ct + 64, St + 416 - 64), u.drawImage(201 == Me ? In.gbutton : In.button, Ct + 192, St + 416 - 64), u.drawImage(202 == Me ? In.gbutton : In.button, Ct + 64, St + 416), u.drawImage(203 == Me ? In.gbutton : In.button, Ct + 192, St + 416), u.drawImage(204 == Me ? In.gbutton : In.button, Ct + 320, St + 416 - 64), u.drawImage(205 == Me ? In.gbutton : In.button, Ct + 320, St + 416), u.textAlign = "center", tr(mEng[20] + De + mEng[163], Ct + 64 + 54, St + 416 - 64 + 16), tr(mEng[21] + ze + mEng[163], Ct + 192 + 54, St + 416 - 64 + 16), tr(mEng[22] + Le + mEng[163], Ct + 64 + 54, St + 416 + 16), tr(mEng[23] + Ue + mEng[163], Ct + 192 + 54, St + 416 + 16), tr("Energy: " + je + mEng[163], Ct + 320 + 54, St + 416 - 64 + 16), tr("Agility: " + He + mEng[163], Ct + 320 + 54, St + 416 + 16), tr("$" + 1e3 * Math.round(Math.pow(1024, De) / 1e3), Ct + 64 + 54, St + 416 - 64 + 32), tr("$" + 1e3 * Math.round(Math.pow(1024, ze) / 1e3), Ct + 192 + 54, St + 416 - 64 + 32), tr("$" + 1e3 * Math.round(Math.pow(1024, Le) / 1e3), Ct + 64 + 54, St + 416 + 32), tr("$" + 1e3 * Math.round(Math.pow(1024, Ue) / 1e3), Ct + 192 + 54, St + 416 + 32), tr("$" + 1e3 * Math.round(Math.pow(4096, je) / 1e3), Ct + 320 + 54, St + 416 - 64 + 32), tr("$" + 1e3 * Math.round(Math.pow(1024, He) / 1e3), Ct + 320 + 54, St + 416 + 32)
                                }();
                                break;
                            case 4:
                                ! function() {
                                    u.save(), u.fillStyle = "yellow", u.font = "11px Nasa", u.textAlign = "center";
                                    for (var e = 0; e < Rn.length; e++) u.fillStyle = e < 13 ? Rn[e] ? "red" : "pink" : e < 25 ? Rn[e] ? "gold" : "lime" : e < 37 ? Rn[e] ? "lightgray" : "white" : Rn[e] ? "cyan" : "yellow", Rn[e] && (u.font = "9px Nasa", tr(jsn.achNames[e].split(":")[1], Ct + 768 * (1 + e % 5 * 2) / 10, St + 20 + 40 * Math.floor(e / 5) + 60)), u.font = "12px Nasa", tr(Rn[e] ? jsn.achNames[e].split(":")[0] : mEng[172], Ct + 768 * (1 + e % 5 * 2) / 10, St + 8 + 40 * Math.floor(e / 5) + 60);
                                    u.restore()
                                }();
                                break;
                            case 5:
                                ! function() {
                                    u.textAlign = "center", u.font = "26px Nasa";
                                    for (var e = [mEng[62], mEng[63], mEng[64], mEng[65], mEng[66], mEng[67], mEng[68]], t = 0; t < 3; t++)
                                        for (var n = 0; n < 2; n++) {
                                            u.fillStyle = Me == 500 + t + 4 * n ? "lime" : "yellow", tr(e[t + 4 * n], Ct + 128 + 256 * t, St + 40 + 472 * n * 2 / 3 + 472 / 6)
                                        }
                                    u.fillStyle = 503 == Me ? "lime" : "yellow", tr(e[3], Ct + 384, St + 40 + 472 / 3 + 472 / 6), u.textAlign = "left", u.font = "11px Nasa"
                                }();
                                break;
                            case 7:
                                ! function() {
                                    u.font = "11px Nasa", u.textAlign = "right", u.fillStyle = "yellow", tr(mEng[5] + Math.floor(re), Ct + 768 - 16, St + 64), u.textAlign = "center", u.font = "24px Nasa", tr(mEng[15], Ct + 384, St + 68), u.textAlign = "left", u.font = "11px Nasa";
                                    for (var e = 0; e < fn.length; e++) {
                                        var t = Ct + 4 + 240 * Math.floor(fn[e].order / Math.ceil(fn.length / 3)),
                                            n = St + 40 + 32 + 16 * (fn[e].order % Math.ceil(fn.length / 3) + 2),
                                            r = fn[e].price > re ? "orange" : "yellow";
                                        Ne < fn[e].level && (r = "red");
                                        var o = "white";
                                        "Gun" === fn[e].type && (o = "red"), "Missile" === fn[e].type && (o = "orange"), "Orb" === fn[e].type && (o = "tan"), "Beam" === fn[e].type && (o = "lime"), "Blast" === fn[e].type && (o = "green"), "Mine" === fn[e].type && (o = "blue"), "Misc" === fn[e].type && (o = "purple"), u.fillStyle = o, tr("*", t, n), u.fillStyle = Me - 20 == e ? "lime" : r, tr(mEng[69] + ("$" + fn[e].price + "         ").substring(0, 9) + fn[e].name, t + 11, n), Me - 20 == e && Hn(e)
                                    }
                                }();
                                break;
                            case 8:
                                u.fillStyle = "cyan", u.textAlign = "center", u.font = "16px Nasa", tr(mEng[32] + fn[bn[fe]].name + mEng[33] + .75 * fn[bn[fe]].price + mEng[34], Ct + 384, St + 128), u.font = "13px Nasa", tr(mEng[35], Ct + 384, St + 192), u.font = "11px Nasa", u.textAlign = "left"
                        }
                        nt-- > 0 && !Ut && (u.save(), u.textAlign = "center", u.fillStyle = "yellow", u.strokeStyle = "black", u.font = "64px Nasa", u.globalAlpha = Math.sqrt(nt / 41), u.fillText(mEng[126], xt / 2, Et / 2), u.strokeText(mEng[126], xt / 2, Et / 2), u.restore()); - 1 == ce && Tr();
                        I && Sr();
                        0 != self.quests && br();
                        0 != bt && Cr();
                        Ir(), Fr(), Ar(), Nr()
                    }()), !le && (0 != At || at)) {
                    if (Xe > 0 || Ye >= 35) return vr(Ye), Ye = 34, void setTimeout(zn, 5);
                    tn > 0 && (E = C = 0, Oe = (1e4 - ar(100 - tn)) / 1e3), Qe++, Xe++;
                    var e = new Date,
                        t = e.getTime();
                    u.font = "11px Nasa";
                    var n = -performance.now();
                    l.width = l.width, xr();
                    var r = Math.floor(25 * Math.random()),
                        o = !1;
                    Oe > 0 && (! function(e) {
                        var t = Oe / 16;
                        u.fillStyle = "red", u.globalAlpha = .75 * t, u.fillRect(0, 0, xt, Et), u.globalAlpha = 1, u.translate(t * (e % 5 - 2), t * (e / 5 - 2))
                    }(r), o = !0), (K + Z + ee + J) / (dn[Ne].capacity * Le) > .995 && (it = mEng[1]);
                    var i = -performance.now();
                    n -= i, wr();
                    var s = -performance.now();
                    i -= s,
                        function() {
                            if (0 == yt) return;
                            var e = yt,
                                t = e.x - N + xt / 2 + E,
                                n = e.y - F + Et / 2 + C,
                                r = new Date,
                                o = (r.getTime(), r.getTime() / 15e4),
                                i = (ae + se * S) % 5,
                                a = Pn[i];
                            if (void 0 === a || 2 == a) return Pn[i] = 2, void(2 == a || isNaN(i) || function(e) {
                                Pn[e] = new Image, Pn[e].src = "/img/space/planets/pt" + (e % 5 + 1) + ".png"
                            }(i));
                            var s = (or(5 * o) / 2 + .5) * (a.width - 512) + 256,
                                l = (ir(4 * o) / 2 + .5) * (a.height - 512) + 256;
                            u.save();
                            var c = u.createPattern(a, "no-repeat");
                            u.fillStyle = c, u.translate(t, n), u.drawImage("blue" == e.color ? In.planetUB : "red" == e.color ? In.planetUR : In.planetU, -310, -310, 620, 620), u.translate(-s, -l), u.beginPath(), u.arc(s, l, 256, 0, 2 * Math.PI), u.closePath(), u.fill(), u.translate(s, l), u.drawImage(In.planetO, -256, -256), u.setLineDash([20, 15]), u.lineWidth = 3, u.strokeStyle = "pink", u.beginPath(), u.lineWidth = 1, u.restore(), u.textAlign = "center", u.fillStyle = e.color, "red" == u.fillStyle ? u.fillStyle : "blue" == u.fillStyle && u.fillStyle;
                            u.font = "60px Nasa";
                            var f = (e.record / 25 + .0078125 + "").replace(".", ":");
                            f = f.substr(0, f.length - 5), tr(mEng[127] + e.name, t, n - 128 - 256), u.textAlign = "left", u.font = "11px Nasa"
                        }(),
                        function() {
                            if (void 0 !== Tt) {
                                var e = "red" == Tt.color ? In.base : In.bss,
                                    t = e.width,
                                    n = e.height,
                                    r = Tt.x - N + xt / 2 + E,
                                    o = Tt.y - F + Et / 2 + C;
                                if (Tt.color !== O && (it = mEng[131]), Tt.isBase ? (u.save(), u.translate(r, o), u.rotate(k / 1e3 + Math.PI / 2), u.drawImage("red" == Tt.color ? In.astUnderlayRed : In.astUnderlay, -512, -512, 1024, 1024), u.drawImage(e, -384, -384, 768, 768), u.restore(), u.textAlign = "center", u.fillStyle = "lime", oe < 64 && Tt.color == O && ar(N - Tt.x) + ar(F - Tt.y) < ar(512) && (u.font = 2.5 * or(k / 8) + 15 + "px Nasa", tr(mEng[130], r, o - 96), u.font = "11px Nasa"), u.textAlign = "left") : (u.textAlign = "center", u.fillStyle = "white", u.font = "11px Nasa", tr(Tt.name, r, o - 64)), Tt.turretLive) {
                                    var i = "red" == Tt.color ? In.turret : In.bt;
                                    if (t = i.width, n = i.height, u.save(), u.translate(r, o), u.rotate(Tt.angle + Math.PI / 2), u.drawImage(i, -t / 2, -n / 2), u.restore(), Tt.health / Tt.maxHealth < 1) {
                                        u.lineWidth = 4;
                                        var a = Math.floor(255 * (1 - Tt.health / Tt.maxHealth)),
                                            s = Math.floor(255 * Tt.health / Tt.maxHealth),
                                            l = Math.floor(64 * Tt.health / Tt.maxHealth);
                                        u.strokeStyle = "rgb(" + a + ", " + s + ", " + l + ")", u.beginPath(), u.arc(r, o, t / 1.5, (2.5 - .99 * Tt.health / Tt.maxHealth) * Math.PI, (.501 + Tt.health / Tt.maxHealth) * Math.PI, !1), u.stroke()
                                    }
                                }! function(e) {
                                    var t = 0;
                                    if (void 0 !== An[Ne]) t = An[Ne].width;
                                    else {
                                        if (void 0 === Mn[Ne]) return;
                                        t = Mn[Ne].width
                                    }
                                    u.fillStyle = "lightgray";
                                    var n = Math.sqrt((e.x - N) * (e.x - N) + (e.y - F) * (e.y - F));
                                    if ((n = Math.floor(n / 10)) < Et / 30) return;
                                    var r = Math.atan2(e.y - F, e.x - N),
                                        o = xt / 2 + 1 * t * ir(r) + E,
                                        i = Et / 2 + 1 * t * or(r) + C,
                                        a = xt / 2 + 1.3 * t * ir(r) + E,
                                        s = Et / 2 + 1.3 * t * or(r) + C,
                                        l = In.blueArrow,
                                        c = l.width / 2;
                                    u.save(), u.translate(o, i), u.rotate(r), u.drawImage(l, -c, -c), u.restore(), u.textAlign = "center", tr(n, a, s + 6), u.textAlign = "left"
                                }(Tt)
                            }
                        }();
                    var c = -performance.now();
                    s -= c,
                        function() {
                            var e = 0;
                            for (var t in Rt) {
                                var n = 0 == (t = Rt[t]).metal ? In.iron : 3 == t.metal ? In.platinum : 1 == t.metal ? In.silver : In.aluminium,
                                    r = t.x - N + xt / 2 + E,
                                    o = t.y - F + Et / 2 + C,
                                    i = new Date,
                                    a = (.5 + t.health / t.maxHealth) / 1.5,
                                    s = Math.floor((i.getMilliseconds() / 1e3 + i.getSeconds()) / 60 * 1024) % 64,
                                    l = s % 8 * 128,
                                    c = 128 * Math.floor(s / 8 % 4 + Math.floor(t.metal) % 2 * 4);
                                u.save(), u.translate(r, o), u.drawImage(In.astUnderlay, -128, -128), u.rotate(t.angle + Math.PI / 2), u.drawImage(n, l, c, 128, 128, -64 * a, -64 * a, 128 * a, 128 * a), u.restore(), t.color != O && (0 == e ? e = t : (t.x - N) * (t.x - N) + (t.y - F) * (t.y - F) < (e.x - N) * (e.x - N) + (e.y - F) * (e.y - F) && (e = t))
                            }! function(e) {
                                var t = 0;
                                if (void 0 !== An[Ne]) t = An[Ne].width;
                                else {
                                    if (void 0 === Mn[Ne]) return;
                                    t = Mn[Ne].width
                                }
                                u.fillStyle = "orange", u.textAlign = "center";
                                var n = Math.sqrt((e.x - N) * (e.x - N) + (e.y - F) * (e.y - F));
                                if ((n = Math.floor(n / 10)) < Et / 30 || n > 500 * ze) return;
                                var r = Math.atan2(e.y - F, e.x - N),
                                    o = xt / 2 + 1 * t * ir(r) + E,
                                    i = Et / 2 + 1 * t * or(r) + C,
                                    a = xt / 2 + 1.3 * t * ir(r) + E,
                                    s = Et / 2 + 1.3 * t * or(r) + C,
                                    l = In.astArrow,
                                    c = l.width / 2;
                                u.save(), u.translate(o, i), u.rotate(r), u.drawImage(l, -c, -c), u.restore(), u.textAlign = "center", tr(n, a, s + 6), u.textAlign = "left"
                            }(e)
                        }(),
                        function() {
                            for (var e in Bt) {
                                var t = 0 == (e = Bt[e]).type ? In.pack : 1 == e.type ? In.bonus : 2 == e.type ? In.life : In.ammo,
                                    n = e.x - N + xt / 2 + E,
                                    r = e.y - F + Et / 2 + C,
                                    o = new Date,
                                    i = (o.getMilliseconds() / 1e3 + o.getSeconds()) / 3;
                                u.save(), u.translate(n, r), u.scale(2, 2), u.rotate(i * Math.PI), u.drawImage(t, -t.width / 2, -t.height / 2), u.restore()
                            }
                        }();
                    var f = -performance.now();
                    c -= f,
                        function() {
                            for (var e in ht) {
                                var t = ht[e];
                                u.globalAlpha = (7 - t.time) / 7, u.strokeStyle = u.fillStyle = "#" + t.color, t.vip ? yr(t.x - N + xt / 2 + E, t.y - F + C + Et / 2, 5, 3, 8) : u.fillRect(t.x - 1 - N + xt / 2 + E, t.y - 1 - F + C + Et / 2, 3, 3)
                            }
                            u.globalAlpha = 1
                        }(),
                        function() {
                            Q = X = 0;
                            var e = 0,
                                t = 0;
                            for (var n in At) {
                                "red" == (n = At[n]).color ? Q++ : X++, u.strokeStyle = "grey";
                                var r = "red" === n.color,
                                    o = (r ? An : Mn)[n.ship];
                                if (void 0 === o || 2 == o) return (r ? An : Mn)[n.ship] = 2, void(2 != o && On(r, n.ship));
                                var i = o.width,
                                    a = o.height;
                                if (0 == i || 0 == a) return;
                                var s = n.x - N + xt / 2 + E,
                                    l = n.y - F + Et / 2 + C;
                                u.save(), u.translate(s, l), u.globalAlpha = .8, u.drawImage("red" == n.color ? In.astUnderlayRed : In.astUnderlay, -i, -a, 2 * i, 2 * a), u.globalAlpha = 1, u.rotate(n.angle + Math.PI / 2);
                                var c = 38.4 * Math.sqrt(i / 64),
                                    f = 1.4 * n.speed * i / 64 + Math.random() * i / 25;
                                if (n.speed > 0 && u.drawImage(In.fire, 0, k % 8 * 64, 64, 64, -c / 2, 0, c, f), u.restore(), u.save(), u.translate(s, l), u.rotate(n.angle + Math.PI / 2), u.drawImage(o, -i / 2, -a / 2), u.restore(), u.fillStyle = "white", u.textAlign = "center", tr(n.name, s, l - .5 * dn[n.ship].width), u.textAlign = "left", n.color !== O ? 0 == e ? e = n : (n.x - N) * (n.x - N) + (n.y - F) * (n.y - F) < (e.x - N) * (e.x - N) + (e.y - F) * (e.y - F) && (e = n) : ar(n.x - N) + ar(n.y - F) > 1600 || Ne != n.ship ? 0 == t ? t = n : (n.x - N) * (n.x - N) + (n.y - F) * (n.y - F) < (t.x - N) * (t.x - N) + (t.y - F) * (t.y - F) && (t = n) : n.health < .3 * n.maxHealth && (it = mEng[150]), n.hasPackage && Rr(n), u.lineWidth = 6, n.shield && (u.strokeStyle = "lightblue", u.beginPath(), u.arc(s, l, i / 1.5 - 8, 0, 2 * Math.PI, !1), u.stroke()), !(n.health / n.maxHealth >= 1)) {
                                    u.lineWidth = 4;
                                    var d = Math.floor(255 * (1 - n.health / n.maxHealth)),
                                        p = Math.floor(255 * n.health / n.maxHealth),
                                        h = Math.floor(64 * n.health / n.maxHealth);
                                    u.strokeStyle = "rgb(" + d + ", " + p + ", " + h + ")", u.beginPath(), u.arc(s, l, i / 1.5, (2.5 - n.health / n.maxHealth * .99) * Math.PI, (.501 + n.health / n.maxHealth) * Math.PI, !1), u.stroke()
                                }
                            }
                            0 != e && function(e) {
                                var t = 0;
                                if (void 0 !== An[Ne]) t = An[Ne].width;
                                else {
                                    if (void 0 === Mn[Ne]) return;
                                    t = Mn[Ne].width
                                }
                                u.fillStyle = "red" === O ? "cyan" : "red";
                                var n = Math.sqrt((e.x - N) * (e.x - N) + (e.y - F) * (e.y - F));
                                if ((n = Math.floor(n / 10)) < Et / 30 || n > 500 * ze) return;
                                var r = Math.atan2(e.y - F, e.x - N),
                                    o = xt / 2 + 1 * t * ir(r) + E,
                                    i = Et / 2 + 1 * t * or(r) + C,
                                    a = xt / 2 + 1.3 * t * ir(r) + E,
                                    s = Et / 2 + 1.3 * t * or(r) + C,
                                    l = "red" === O ? In.baseArrow : In.redArrow,
                                    c = l.width / 2;
                                u.save(), u.translate(o, i), u.rotate(r), u.drawImage(l, -c, -c), u.restore(), u.textAlign = "center", tr(n, a, s + 6), u.textAlign = "left"
                            }(e);
                            0 != t && function(e) {
                                var t = 0;
                                if (void 0 !== An[Ne]) t = An[Ne].width;
                                else {
                                    if (void 0 === Mn[Ne]) return;
                                    t = Mn[Ne].width
                                }
                                u.fillStyle = "red" !== O ? "cyan" : "red";
                                var n = Math.sqrt((e.x - N) * (e.x - N) + (e.y - F) * (e.y - F));
                                if ((n = Math.floor(n / 10)) < Et / 30 || n > 500 * ze) return;
                                var r = Math.atan2(e.y - F, e.x - N),
                                    o = xt / 2 + 1 * t * ir(r) + E,
                                    i = Et / 2 + 1 * t * or(r) + C,
                                    a = xt / 2 + 1.3 * t * ir(r) + E,
                                    s = Et / 2 + 1.3 * t * or(r) + C,
                                    l = "red" !== O ? In.baseArrow : In.redArrow,
                                    c = l.width / 2;
                                u.save(), u.translate(o, i), u.rotate(r), u.drawImage(l, -c, -c), u.restore(), u.textAlign = "center", tr(n, a, s + 6), u.textAlign = "left"
                            }(t)
                        }(), at && function() {
                            u.strokeStyle = "grey";
                            var e = "red" === O,
                                t = e ? An[Ne] : Mn[Ne];
                            if (void 0 === t || 2 == t) return (e ? An : Mn)[Ne] = 2, void(2 != t && On(e, Ne));
                            var n = t.width,
                                r = t.height,
                                o = N - N + xt / 2 + E,
                                i = F - F + Et / 2 + C;
                            u.save(), u.translate(o, i), u.rotate(R + Math.PI / 2), u.globalAlpha = .25, u.drawImage(t, -n / 2, -r / 2), u.restore(), u.lineWidth = 6, Te && (u.strokeStyle = "lightblue", u.beginPath(), u.arc(o, i, n / 1.5 - 8, 0, 2 * Math.PI, !1), u.stroke());
                            var a = dn[Ne].health * Ue;
                            D < .3 * a && (it = mEng[150]);
                            if (D / a >= 1) return;
                            u.lineWidth = 4;
                            var s = Math.floor(255 * (1 - D / a)),
                                l = Math.floor(255 * D / a),
                                c = Math.floor(64 * D / a);
                            u.strokeStyle = "rgb(" + s + ", " + l + ", " + c + ")", u.beginPath(), u.arc(o, i, n / 1.5, (2.5 - D / a * .99) * Math.PI, (.501 + D / a) * Math.PI, !1), u.stroke()
                        }();
                    var d = -performance.now();
                    f -= d, Or(),
                        function() {
                            for (var e in u.lineWidth = 6, Ft) {
                                var t = Ft[e];
                                7 == t.wepnID ? u.strokeStyle = "mediumpurple" : 9 == t.wepnID ? u.strokeStyle = "lime" : 24 == t.wepnID ? u.strokeStyle = "yellow" : 33 == t.wepnID || 26 == t.wepnID || 30 == t.wepnID ? u.strokeStyle = "#d0c090" : u.strokeStyle = "red";
                                var n = t.bx - N + xt / 2 + E,
                                    r = t.by - F + Et / 2 + C,
                                    o = t.ex - N + xt / 2 + E,
                                    i = t.ey - F + Et / 2 + C;
                                u.beginPath(), u.moveTo(n, r), u.lineTo(o, i), u.globalAlpha = Math.random() * (12 - t.time) / 14, u.stroke(), u.closePath()
                            }
                            u.globalAlpha = 1
                        }(),
                        function() {
                            for (var e in u.lineWidth = 12, u.strokeStyle = "white", Ot) {
                                var t = Ot[e],
                                    n = t.bx - N + xt / 2 + E,
                                    r = t.by - F + Et / 2 + C,
                                    o = t.bx + 1e4 * Math.cos(t.angle) - N + xt / 2 + E,
                                    i = t.by + 1e4 * Math.sin(t.angle) - F + Et / 2 + C;
                                u.beginPath(), u.moveTo(n, r), u.lineTo(o, i), u.globalAlpha = Math.random() * (12 - t.time) / 14, u.stroke(), u.closePath()
                            }
                            u.globalAlpha = 1
                        }(),
                        function() {
                            for (var e in It) {
                                e = It[e];
                                var t = In.missile;
                                11 != e.wepnID && 13 != e.weaponID || (t = In.heavyMissile), 12 == e.wepnID && (t = In.empMissile), 14 == e.wepnID && (t = In.torpedo);
                                var n = t.width,
                                    r = t.height,
                                    o = e.x - N + xt / 2 + E,
                                    i = e.y - F + Et / 2 + C;
                                u.save(), u.translate(o, i), u.rotate(e.angle + Math.PI / 2), u.drawImage(t, -n / 2, -r / 2), u.restore()
                            }
                        }(),
                        function() {
                            for (var e in Pt) {
                                var t = Pt[e],
                                    n = In.energyDisk,
                                    r = n.width,
                                    o = n.height,
                                    i = t.x - N + xt / 2 + E,
                                    a = t.y - F + Et / 2 + C;
                                u.save(), u.translate(i, a), u.rotate(k / 10 + Math.PI / 2), u.drawImage(n, -r / 2, -o / 2), u.restore()
                            }
                        }(),
                        function() {
                            for (var e in Mt) {
                                e = Mt[e];
                                var t = In.mine,
                                    n = t.width,
                                    r = t.height,
                                    o = e.x - N + xt / 2 + E,
                                    i = e.y - F + Et / 2 + C;
                                if (16 == e.wepnID) t = In.laserMine;
                                else if (17 == e.wepnID) t = In.empMine;
                                else {
                                    if (32 == e.wepnID) {
                                        u.save(), u.globalAlpha = .1, u.fillStyle = "white";
                                        for (var a = 0; a < 10; a++) {
                                            var s = Math.random() * Math.PI * 2,
                                                l = 4 + ar(25 * Math.random() / 10),
                                                c = Math.random() * l;
                                            u.beginPath(), u.arc(o + Math.cos(s) * c, i + Math.sin(s) * c, l, 0, 2 * Math.PI, !1), u.closePath(), u.fill()
                                        }
                                        u.restore();
                                        continue
                                    }
                                    33 == e.wepnID && (t = In.grenade)
                                }
                                u.save(), u.translate(o, i), u.rotate(e.angle), u.drawImage(t, -n / 2, -r / 2), u.restore(), u.fillStyle = "red" == e.color ? "red" : "#00FFFF", u.beginPath(), u.arc(o, i, 4, 0, 2 * Math.PI, !1), u.fill()
                            }
                        }(),
                        function() {
                            var e = (new Date).getTime() / 1e3;
                            for (var t in Nt) {
                                u.save();
                                var n = (t = Nt[t]).isWorm ? In.worm : In.vort,
                                    r = 24 * t.size / 64,
                                    o = t.x - N + xt / 2 + E,
                                    i = t.y - F + Et / 2 + C;
                                u.translate(o, i), u.rotate(e % (2 * Math.PI)), u.drawImage(n, -r / 2, -r / 2, r, r), u.globalAlpha = .3, u.rotate(-.5 * e % (2 * Math.PI)), u.drawImage(n, 3 * -r / 4, 3 * -r / 4, 1.5 * r, 1.5 * r), u.restore(), it = t.isWorm ? mEng[128] : mEng[129]
                            }
                        }(), gr();
                    var p = -performance.now();
                    d -= p,
                        function() {
                            u.textAlign = "center", u.font = "14px Nasa", u.strokeStyle = u.fillStyle = "yellow", u.lineWidth = 2, u.setLineDash([20, 15]);
                            for (var e = (xt / 2 - N) % v; e < xt; e += v) u.beginPath(), u.moveTo(e + E, 0), u.lineTo(e + E, Et), u.stroke(), u.save(), u.translate(e, Et / 2), u.rotate(Math.PI / 2), u.fillText(mEng[103], 0, 0), u.restore();
                            for (e = (Et / 2 - F) % v; e < Et; e += v) u.beginPath(), u.moveTo(0, e + C), u.lineTo(xt, e + C), u.stroke(), tr(mEng[103], xt / 2, e);
                            u.font = "11px Nasa", u.textAlign = "left", u.setLineDash([])
                        }(),
                        function() {
                            var e = 0;
                            if (void 0 !== An[Ne]) e = An[Ne].width;
                            else {
                                if (void 0 === Mn[Ne]) return;
                                e = Mn[Ne].width
                            }
                            u.fillStyle = "yellow";
                            var t = 0;
                            t = N < F ? v - N > F ? 2 : 3 : v - N > F ? 1 : 0;
                            var n = "";
                            0 == t ? n = v - N : 1 == t ? n = F : 2 == t ? n = N : 3 == t && (n = v - F);
                            if ((n = Math.floor(n / 10)) < Et / 30 || n > 500 * ze) return;
                            var r = xt / 2 + 1 * e * ir(t * Math.PI / 2) + E,
                                o = Et / 2 - 1 * e * or(t * Math.PI / 2) + C,
                                i = xt / 2 + 1.3 * e * ir(t * Math.PI / 2) + E,
                                a = Et / 2 - 1.3 * e * or(t * Math.PI / 2) + C,
                                s = In.edgeArrow,
                                l = s.width / 2;
                            u.save(), u.translate(r, o), u.rotate(-t * Math.PI / 2), u.drawImage(s, -l, -l), u.restore(), u.textAlign = "center", tr(n, i, a + 6), u.textAlign = "left"
                        }(),
                        function() {
                            for (var e in u.textAlign = "center", u.fillStyle = "pink", mt) {
                                var t = mt[e];
                                u.font = (t.strong ? 40 : 20) + "px Nasa", u.globalAlpha = (39 - t.time) / 39;
                                var n = t.spoils ? t.x : t.x - N + xt / 2 + E + (t.local ? N : 0),
                                    r = t.spoils ? t.y : t.y - F + Et / 2 - t.time + C + (t.local ? F : 0);
                                tr(t.msg, n, r)
                            }
                            u.globalAlpha = 1, u.textAlign = "left", u.font = "11px Nasa"
                        }(),
                        function() {
                            if (Gt < 0 || Yt < 1) return;
                            var e = "" + Math.round(Gt / 25);
                            for (; e.length < 2;) e = "0" + e;
                            e = "0:" + e;
                            var t = mEng[163] + Yt;
                            u.save(), u.globalAlpha = Math.min(1, 1 - (Gt - 730) / 15);
                            var n = 1 + Math.max(0, Math.cbrt(Gt - 730)) / 2;
                            u.textAlign = "center", u.font = 30 * n + "px Nasa", tr(t, xt / 2, 64), u.font = 20 * n + "px Nasa", tr(e, xt / 2, 88), u.restore()
                        }(),
                        function() {
                            if (ae != Math.floor(S / 2) || se != Math.floor(S / 2)) return;
                            if (void 0 === An[Ne] && void 0 === Mn[Ne]) return;
                            var e = void 0 === An[Ne] ? Mn[Ne].width : An[Ne].width,
                                t = N - v / 2,
                                n = F - v / 2,
                                r = Math.atan2(n, t) + Math.PI,
                                o = xt / 2 + 1.25 * e * ir(r) + E,
                                i = Et / 2 + 1.25 * e * or(r) + C,
                                a = In.BHArrow,
                                s = a.width / 2;
                            u.save(), u.translate(o, i);
                            var l = new Date;
                            u.drawImage(In.Exclamation, 0, (7 & Math.floor(l.getMilliseconds() / 50 + 4)) * s * 2, 2 * s, 2 * s, s, s, 2 * s, 2 * s), u.rotate(r), u.drawImage(a, 0, (7 & Math.floor(l.getMilliseconds() / 50)) * s * 2, 2 * s, 2 * s, -s, -s, 2 * s, 2 * s), u.restore()
                        }(), 0 != self.quests && br(), Ir(),
                        function() {
                            if (0 === bn) return;
                            if (-2 == bn[1]) return;
                            u.save(), u.globalAlpha = .5, u.fillStyle = "black", u.strokeStyle = "cyan", Mr(xt - 208, Et - 432 + 128, 210, 192, {
                                bl: 32,
                                tl: 32
                            }, !0, !1), u.restore(), u.font = "11px Nasa", u.fillStyle = "yellow", u.textAlign = "right", u.globalAlpha = Math.max(yn--, 0) / 100 * .7 + .3, tr(mEng[152], xt - 80, Et - 432 + 144), tr(mEng[151], xt - 16, Et - 432 + 144);
                            for (var e = 0; e < 10; e++) u.fillStyle = gn == e ? "lime" : "yellow", e >= dn[Ne].weapons && (u.fillStyle = "orange"), Ne < fn[bn[e]].Level && (u.fillStyle = "red"), void 0 !== fn[bn[e]] && tr(fn[bn[e]].name + ": " + (e + 1) % 10, xt - 80, Et - 432 + 16 * (e + 10)), bn[e] > -1 && tr(jn(wn[e]), xt - 16, Et - 432 + 16 * (e + 10));
                            u.globalAlpha = 1, u.fillStyle = "yellow", Xt = Xt < 1 ? 0 : Xt - 1, u.font = 16 + Xt + "px Nasa", tr(mEng[2], xt - 16, Et - 96), u.font = "11px Nasa", u.textAlign = "left"
                        }(),
                        function() {
                            Fe > 0 && (u.font = "24px Nasa", u.textAlign = "center", u.fillStyle = "orange", tr(mEng[96] + Math.round(Fe / 25) + mEng[75] + mEng[97], xt / 2, 256), u.font = "11px Nasa", u.textAlign = "left", it = mEng[98]);
                            Re > 0 && (u.font = "24px Nasa", u.textAlign = "center", u.fillStyle = "orange", tr(mEng[99] + Math.round(Re / 25) + mEng[75] + mEng[97], xt / 2, 256), u.font = "11px Nasa", u.textAlign = "left", it = mEng[100]);
                            !I && Be < 2250 && (u.font = "24px Nasa", u.textAlign = "center", u.fillStyle = "orange", tr(mEng[102] + Math.round(Be / 25) + mEng[75] + mEng[97], xt / 2, 256), u.font = "11px Nasa", u.textAlign = "left", it = mEng[101])
                        }();
                    var h = -performance.now();
                    p -= h, kr();
                    var m = -performance.now();
                    h -= m, Er();
                    var g = -performance.now();
                    m -= g,
                        function() {
                            if (ze < 1.1) return;
                            u.fillStyle = "white", u.drawImage(In.grid, 16, 246);
                            var e = new Date,
                                t = e.getTime() / 560;
                            u.globalAlpha = .5, u.save(), u.translate(112, 342), u.rotate(t % (2 * Math.PI) + Math.PI / 2), u.drawImage(In.spin, -96, -96), u.restore(), u.globalAlpha = u.lineWidth = 1;
                            var n = 5120 * (1 + 1.5 * (ze - 1));
                            if (void 0 !== Tt) {
                                var r = Tt.x - N,
                                    o = Tt.y - F;
                                if (ar(r) + ar(o) < ar(n)) {
                                    var i = Math.atan2(o, r) + 2 * Math.PI,
                                        a = r / n * 96 + 96 + 16,
                                        s = o / n * 96 + 96 + 214 + 32;
                                    u.globalAlpha = (i - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), u.beginPath(), u.arc(a, s, ze > 1.3 ? 5 : 3, 0, 2 * Math.PI, !1), u.fillStyle = "lightgray", ze > 1.3 && (u.fillStyle = "red" === Tt.color ? "pink" : "cyan"), u.fill()
                                }
                            }
                            e.getTime();
                            for (var l in At) {
                                r = (c = At[l]).x - N, o = c.y - F;
                                if (!(ar(r) + ar(o) > ar(n))) {
                                    i = Math.atan2(o, r) + 2 * Math.PI, a = r / n * 96 + 16 + 96, s = o / n * 96 + 96 + 214 + 32;
                                    u.globalAlpha = (i - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), u.beginPath(), u.arc(a, s, 3, 0, 2 * Math.PI, !1), ze > 1.3 && (u.fillStyle = "red" === c.color ? "pink" : "cyan"), u.fill()
                                }
                            }
                            if (ze > 2.5)
                                for (var l in At) {
                                    var c;
                                    r = (c = At[l]).x - N, o = c.y - F;
                                    if (!(ar(r) + ar(o) > ar(n))) {
                                        i = Math.atan2(o, r) + 2 * Math.PI, a = r / n * 96 + 16 + 96, s = o / n * 96 + 96 + 214 + 32;
                                        u.globalAlpha = (i - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), u.beginPath(), u.arc(a, s, 2, 0, 2 * Math.PI, !1), u.fillStyle = "gold", u.fill()
                                    }
                                }
                            for (var f in u.lineWidth = 2, Rt) {
                                r = (f = Rt[f]).x - N, o = f.y - F;
                                if (!(ar(r) + ar(o) > ar(n))) {
                                    i = Math.atan2(o, r) + 2 * Math.PI, a = r / n * 96 + 16 + 96, s = o / n * 96 + 96 + 214 + 32;
                                    u.globalAlpha = (i - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), u.beginPath(), u.arc(a, s, 3, 0, 2 * Math.PI, !1), ze > 1.3 && (u.strokeStyle = u.fillStyle = "orange"), ze > 1.7 && (0 == f.metal ? u.strokeStyle = u.fillStyle = "#d44" : 1 == f.metal ? u.strokeStyle = u.fillStyle = "#eef" : 2 == f.metal ? u.strokeStyle = u.fillStyle = "#9a9" : 3 == f.metal && (u.strokeStyle = u.fillStyle = "#90f")), ze > 1.5 ? u.stroke() : u.fill()
                                }
                            }
                            u.globalAlpha = 1, u.lineWidth = 3
                        }();
                    var y = -performance.now();
                    g -= y, 0 != bt && Cr(),
                        function() {
                            if (Ut) return;
                            var e = 256 * (oe - sr(ie - 1)) / (sr(ie) - sr(ie - 1));
                            e < 0 && (e = 0);
                            u.drawImage(In.bar1, xt / 2 - 128, Et - 28), u.fillStyle = "#000000", u.fillRect(xt / 2 - 126 + e, Et - 22, 248 - e, 10), u.drawImage(In.bar2, xt / 2 - 128, Et - 28), u.fillStyle = "#ffffff", u.textAlign = "right", tr("" + Math.max(sr(ie - 1), 0), xt / 2 - 140, Et - 14), u.textAlign = "left", tr("" + sr(ie), xt / 2 + 140, Et - 14), u.font = "9px Nasa", u.textAlign = e > 128 ? "right" : "left", u.fillStyle = e > 128 ? "black" : "white", tr("" + Math.round(oe), xt / 2 - 128 + e + (e > 128 ? -8 : 8), Et - 14), u.font = "11px Nasa", u.textAlign = "left"
                        }(),
                        function() {
                            if (pe <= 0) return;
                            u.save(), u.globalAlpha = pe, pe -= .01, u.fillStyle = "#ffffff", u.fillRect(xt - 32 - 20 - 128, Et - 10 - 16 - 6, 128, 6), u.beginPath(), u.arc(xt - 32 - 20 - 128, Et - 10 - 16 - 3, 3, 0, 2 * Math.PI, !1), u.fill(), u.beginPath(), u.arc(xt - 32 - 20, Et - 10 - 16 - 3, 3, 0, 2 * Math.PI, !1), u.fill(), u.beginPath(), u.arc(xt - 32 - 20 - 128 + 128 * he, Et - 10 - 16 - 3, 6, 0, 2 * Math.PI, !1), u.fill(), u.fillStyle = "#000000", u.beginPath(), u.arc(xt - 32 - 20 - 128 + 128 * he, Et - 10 - 16 - 3, 4, 0, 2 * Math.PI, !1), u.fill(), u.restore()
                        }(),
                        function() {
                            if (0 === bn) return;
                            var e = fn[bn[gn]].charge;
                            if (e < 12 && vn < 12) return;
                            e < 12 && vn >= 12 && (e = 150);
                            var t = vn / e;
                            if (t > 1) return;
                            u.fillStyle = "lime", u.globalAlpha = .5, u.fillRect(0, 0, xt / 2 * t, 4), u.fillRect(0, Et - 4, xt / 2 * t, 4), u.fillRect(xt - xt / 2 * t, 0, xt / 2 * t, 4), u.fillRect(xt - xt / 2 * t, Et - 4, xt / 2 * t, 4), u.fillRect(0, 0, 4, Et / 2 * t), u.fillRect(xt - 4, 0, 4, Et / 2 * t), u.fillRect(0, Et - Et / 2 * t, 4, Et / 2 * t), u.fillRect(xt - 4, Et - Et / 2 * t, 4, Et / 2 * t), u.globalAlpha = 1
                        }(), en > 0 && (u.globalAlpha = .2 * (.3 * en + .01), en -= .2, u.fillStyle = "pink", u.fillRect(0, 0, xt, Et), u.globalAlpha = 1), Ar(), o && tn <= 0 && function(e) {
                            var t = Oe / 16;
                            u.translate(-t * (e % 5 - 2), -t * (e / 5 - 2)), Oe--
                        }(r), I && Sr(), B && (it = mEng[132]), "" !== it && function() {
                            u.save(), u.font = "20px Nasa", u.fillStyle = k % 6 < 3 ? "orange" : "yellow", u.textAlign = "right", self.lives < 3 && (it = "Low Lives");
                            tr(mEng[125] + it, xt - 16, Et - 320), u.restore()
                        }(), it = "", Nr();
                    var b = (e = new Date).getTime();
                    Ye = b - t, ! function(e) {
                        if (0 == kt) return void(kt = e);
                        for (var t = 0; t < e.length; t++) kt[t] = (kt[t] + e[t] / 20) / 1.05
                    }([n, i, s, c, f, d, p, h, m, g, y += performance.now()]), vr(Ye), Xe--
                }
            }

            function jn(e) {
                return e >= 0 ? e + "" : -1 == e ? mEng[153] : -2 == e ? mEng[154] : ""
            }

            function Hn(e) {
                if (u.font = "11px Nasa", tr(fn[e].name, Ct + 32, St + 364 + -32), qn(fn[e].desc, Ct + 32, St + 364 + -16, 704, 16), tr("Type: " + fn[e].type, Ct + 32, St + 364 + 32), tr(mEng[71] + (-1 == fn[e].range ? mEng[206] : fn[e].range + " Meters"), Ct + 32, St + 364 + 48), tr(mEng[72] + (-1 == fn[e].damage ? mEng[206] : fn[e].damage), Ct + 32, St + 364 + 64), tr(mEng[73] + (-1 == fn[e].speed ? mEng[206] : fn[e].speed), Ct + 32, St + 364 + 80), tr(mEng[74] + (-1 == fn[e].charge ? mEng[206] : fn[e].charge / 25 + mEng[75]), Ct + 32, St + 364 + 96), tr(mEng[173] + jn(fn[e].ammo), Ct + 32, St + 364 + 112), tr(mEng[174] + fn[e].level, Ct + 32, St + 364 + 128), ue) {
                    u.fillStyle = fn[e].price > re ? "orange" : "limeq";
                    var t = fn[e].price > re ? mEng[76] : mEng[77];
                    u.font = "20px Nasa", tr(t, Ct + 256 + 32, St + 256 + 100 + 112)
                }
                u.font = "11px Nasa"
            }

            function qn(e, t, n, r, o) {
                for (var i = e.split(" "), a = "", s = 0; s < i.length; s++) {
                    var l = a + i[s] + " ";
                    u.measureText(l).width > r && s > 0 ? (tr(a, t, n), a = i[s] + " ", n += o) : a = l
                }
                tr(a, t, n)
            }

            function Wn() {
                for (var e in gt) delete gt[e];
                for (var e in data.pack) gt[data.pack[e].id] = data.pack[e]
            }

            function Vn(e) {
                var t = e.id,
                    n = e.delta;
                if (void 0 !== At[t]) {
                    for (var r in n) At[t][r] = n[r];
                    t == zt && (N = At[t].x, F = At[t].y, R = At[t].angle, D = At[t].health, E = -ir(R) * At[t].speed, C = -or(R) * At[t].speed)
                }
            }

            function $n(e) {
                var t = e.id;
                if (void 0 !== Nt[t]) {
                    var n = e.delta;
                    for (var r in n) Nt[t][r] = n[r]
                }
            }

            function Yn(e) {
                var t = e.id;
                if (void 0 !== Mt[t]) {
                    var n = e.delta;
                    for (var r in n) Mt[t][r] = n[r]
                }
            }

            function Gn(e) {
                var t = e.id;
                if (void 0 !== Bt[t]) {
                    var n = e.delta;
                    for (var r in n) Bt[t][r] = n[r]
                }
            }

            function Xn(e) {
                var t = e.id;
                if (void 0 !== Ft[t]) {
                    var n = e.delta;
                    for (var r in n) Ft[t][r] = n[r]
                }
            }

            function Qn(e) {
                var t = e.id;
                if (void 0 !== Ot[t]) {
                    e = data.delta;
                    for (var n in e) Ot[t][n] = e[n]
                }
            }

            function Kn(e) {
                var t = e.id;
                if (void 0 !== Rt[t]) {
                    var n = e.delta;
                    for (var r in n) Rt[t][r] = n[r]
                }
            }

            function Jn(e) {
                var t = e.id;
                if (void 0 !== Pt[t]) {
                    var n = e.delta;
                    for (var r in n) Pt[t][r] = n[r]
                }
            }

            function Zn(e) {
                var t = e.id;
                if (void 0 !== It[t]) {
                    var n = e.delta;
                    for (var r in n) It[t][r] = n[r]
                }
            }

            function er(e, t, n) {
                return e.split(t, n).join(t).length
            }

            function tr(e, t, n) {
                void 0 !== e && (e.length > tt ? u.fillText(e.substring(0, tt), t, n) : u.fillText(e, t, n))
            }

            function nr(e, t) {
                var n = e.getBoundingClientRect();
                return {
                    x: t.clientX - n.left,
                    y: t.clientY - n.top
                }
            }

            function rr(e) {
                return e * e * e
            }

            function or(e) {
                e += 200 * Math.PI;
                var t = (e %= 2 * Math.PI) % Math.PI;
                return (e > Math.PI ? -1 : 1) * m[Math.floor(1e3 * (t < Math.PI / 2 ? t : Math.PI - t))]
            }

            function ir(e) {
                return or(e + Math.PI / 2)
            }

            function ar(e) {
                return e * e
            }

            function sr(e) {
                return e < 0 ? 0 : [0, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 4e3, 8e3, 14e3, 2e4, 4e4, 7e4, 1e5, 14e4, 2e5, 3e5, 5e5, 8e5, 1e6, 15e5, 2e6, 3e6, 5e6, 8e6, 12e6, 16e6, 32e6, 64e6, 1e8][e]
            }

            function lr(e) {
                var t = Math.floor(e),
                    n = e - t,
                    r = Math.sin(1e3 * ar(t));
                return r + (Math.sin(1e3 * ar(t + 1)) - r) * (n * n / 2 - n * n * n / 3) * 6
            }

            function ur() {
                return Math.floor(Ut ? 0 : 2e5 * (1 / (1 + Math.exp(-oe / 15e3)) + Math.atan(oe / 15e4) - .5)) + 500
            }

            function cr(e) {
                for (var t = 0; t < 4 && -1 != Bn[t]; t++);
                Bn[t] = e
            }

            function fr(e, t, n, r, o) {
                return (n - t) / (v / o >> r) % o + o * e
            }

            function dr(e) {
                return e % 1e3 - 500
            }

            function pr(e) {
                for (var t = 0; t < fn.length; t++)
                    if (fn[t].order == e) return t
            }

            function hr() {
                for (var e in mt) {
                    mt[e].time++ > 38 && delete mt[e]
                }
            }

            function mr() {
                for (var e in dt) {
                    var t = dt[e];
                    t.time += 14, t.time > 400 && delete dt[e]
                }
                for (var e in pt) {
                    var n = pt[e];
                    n.time++ >= 14 ? delete pt[e] : (n.x += 25 * ir(n.angle) + n.dx, n.y += 25 * or(n.angle) + n.dy)
                }
            }

            function gr() {
                for (var e in M || mr(), dt) {
                    var t = dt[e],
                        n = t.x - N + xt / 2 - 64 + E,
                        r = t.y - F + Et / 2 - 64 + C;
                    if (t.time < 114) {
                        var o = In.booms,
                            i = t.time % 10 * 128,
                            a = 128 * Math.floor(t.time / 10);
                        u.save(), u.drawImage(o, i, a, 128, 128, n, r, 128, 128), u.restore()
                    }
                    if (t.shockwave) {
                        n = t.x - N + xt / 2 + E, r = t.y - F + Et / 2 + C;
                        var s = 96 * Math.sqrt(t.time);
                        u.globalAlpha = .9 - t.time / 500, u.drawImage(In.shockwave, n - s / 2, r - s / 2, s, s), u.globalAlpha = 1
                    }
                }
                for (var e in pt) {
                    var l = pt[e];
                    u.beginPath(), u.strokeStyle = "gray", u.lineWidth = 6, u.globalAlpha = (15 - l.time) / 15, u.fillStyle = "white", u.fillRect(l.x - 3 - N + xt / 2, l.y - 3 - F + Et / 2, 7, 7), u.globalAlpha = (15 - l.time) / 22, u.moveTo(l.x - N + xt / 2, l.y - F + Et / 2), u.lineTo(l.x - N + xt / 2 - (25 * ir(l.angle) + l.dx), l.y - F + Et / 2 - (25 * or(l.angle) + l.dy)), u.stroke(), u.closePath(), u.globalAlpha = 1
                }
            }

            function yr(e, t, n, r, o) {
                u.lineWidth = 1;
                var i = Math.PI / 2 * 3,
                    a = e,
                    s = t,
                    l = Math.PI / n;
                for (u.beginPath(), u.moveTo(e, t - r), g = 0; g < n; g++) a = e + ir(i) * r, s = t + or(i) * r, u.lineTo(a, s), a = e + ir(i += l) * o, s = t + or(i) * o, u.lineTo(a, s), i += l;
                u.lineTo(e, t - r), u.closePath(), u.fill()
            }

            function vr(e, t) {
                var n = K + J + Z + ee;
                u.textAlign = "right", u.fillStyle = "yellow";
                var r = [mEng[182], mEng[183], mEng[184], mEng[185], mEng[186], mEng[187], mEng[188], mEng[189], mEng[190], mEng[191], mEng[192]],
                    o = {},
                    i = Ut ? 0 : 240;
                ct *= ft, ct += $e, ft++, ct /= ft + 0, o[0] = mEng[149] + Math.round(oe), o[1] = mEng[5] + Math.floor(re), o[2] = mEng[6] + te, o[3] = mEng[147] + n, o[4] = mEng[148] + ie, o[5] = "", o[6] = s ? "" : mEng[81], o[7] = s ? "" : mEng[82], o[8] = mEng[83] + Number((e / 40).toPrecision(3)) + mEng[193], o[9] = mEng[84] + Number((Ve / 40).toPrecision(3)) + mEng[193], o[10] = mEng[85] + $e + " ms " + mEng[194] + Number(ct).toPrecision(3) + " ms)", o[11] = mEng[86] + Ge, o[12] = mEng[87] + Je, e > 50 ? (o[5] = mEng[88], o[6] = mEng[89], o[7] = "") : $e > 100 ? (o[5] = mEng[90], o[6] = mEng[91], o[7] = mEng[92]) : Ve > 50 && (o[5] = mEng[95], o[6] = mEng[92], o[7] = "");
                for (var a = 0; a < (Ze ? 15 + kt.length : 5); a++) tr(a < 15 ? o[a] : r[a - 15] + mEng[195] + parseFloat(Math.round(100 * kt[a - 15]) / 100).toFixed(2), xt - i - 32, 64 + 16 * a);
                Ut || (u.fillStyle = "yellow", tr(mEng[196], xt - i - 32, 16), u.fillStyle = "pink", tr(q + "/" + V + "/" + G + "/" + Q, xt - i - 32, 32), u.fillStyle = "cyan", tr(H + "/" + W + "/" + Y + "/" + X, xt - i - 32, 48)), u.textAlign = "left"
            }

            function br() {
                u.fillStyle = "cyan", u.textAlign = "center";
                var e = "";
                "Mining" == A.type && (e = mEng[37] + A.amt + mEng[38] + A.metal + mEng[39] + Ln(A.sx, A.sy) + mEng[40]), "Base" == A.type && (e = mEng[41] + Ln(A.sx, A.sy) + mEng[40]), "Delivery" == A.type && (e = mEng[42] + Ln(A.sx, A.sy) + mEng[43] + Ln(A.dsx, A.dsy) + mEng[40]), "Secret" == A.type && (e = mEng[156] + Ln(A.sx, A.sy) + mEng[157]), "Secret2" == A.type && (e = mEng[158] + Ln(A.sx, A.sy) + mEng[159] + ut + mEng[40]), "Secret3" == A.type && (e = mEng[160]), tr(e, xt / 2, Et - 56), u.textAlign = "left"
            }

            function wr() {
                for (var e in Lt) {
                    var t = Lt[e],
                        n = In.s1;
                    e < 150 ? (n = In.s5, e % 4 == 1 ? n = In.s6 : e % 4 == 2 ? n = In.s7 : e % 4 == 3 && (n = In.s8)) : e % 4 == 1 ? n = In.s2 : e % 4 == 2 ? n = In.s3 : e % 4 == 3 && (n = In.s4);
                    var r = (1e3 - e) / 1e3;
                    r *= r * r;
                    var o = (5e5 + t.x - (N - E + ae * v) * (r * r + .1) * .25) % xt,
                        i = (5e5 + t.y - (F - C + se * v) * (r * r + .1) * .25) % Et;
                    u.drawImage(n, o, i)
                }
            }

            function _r() {
                var e = ke;
                ve = {}, be = 0;
                for (var t = new RegExp(rt + ".*?" + rt, "g"), n = me - 1; n >= 0; n--) {
                    for (var r = "", o = e[n].split(" "), i = 0; i < o.length; i++) {
                        var a = r + o[i] + " ";
                        u.measureText(a.replace(t, "")).width > 512 && i > 0 ? (ve[be++] = r, r = "                  " + o[i] + " ") : r = a
                    }
                    ve[be++] = r
                }
                be--
            }

            function kr() {
                if (u.font = "11px Nasa", u.save(), u.globalAlpha = .5, u.fillStyle = "black", u.strokeStyle = "#222222", Mr(-34, Et - 168, 562, 224, 32, !0, !0), u.fillStyle = "white", Mr(0, Et - 64 - ge / me * 154, 6, 24, 2, !0, !1), u.globalAlpha = 1, u.textAlign = "right", u.fillStyle = 800 != Me ? 1 != ye ? "violet" : "blue" === O ? "cyan" : "pink" : "yellow", tr(0 == ye ? mEng[197] : mEng[199], 512, Et - 16), u.restore(), 1 != ye) {
                    u.textAlign = "left", u.fillStyle = "yellow", u.save();
                    for (var e = be - ge; e >= Math.max(0, be - ge - 7); e--) {
                        var t = e + ge - Object.keys(ve).length;
                        u.globalAlpha = ar((t + 20) / 20);
                        for (var n = 0, r = ve[e].split(rt), o = 0; o < r.length; o++) o % 2 == 0 ? (u.fillText(r[o], 16 + n, Et - 24 + 16 * t), n += u.measureText(r[o]).width) : u.fillStyle = "blue" === r[o] ? "cyan" : "red" === r[o] ? "pink" : r[o]
                    }
                    u.restore()
                }
            }

            function xr(e) {
                u.fillStyle = "black", u.fillRect(0, 0, xt, Et), u.font = "11px Nasa";
                for (var t = e ? 1 : 0, n = In.spc, r = 0; r < (tn > 0 ? 3 : 1); r++) {
                    u.globalAlpha = 0 == r ? .5 : (1e4 - ar(100 - tn)) / (1e4 * r);
                    for (var o = -t; o < 2 + Math.floor(xt / 2048) + t; o++)
                        for (var i = -t; i < 2 + Math.floor(Et / 2048) + t; i++) u.drawImage(n, fr(o, N, E, r, 2048), fr(i, F, C, r, 2048))
                }
                u.globalAlpha = 1
            }

            function Er() {
                if (!Ut) {
                    if (0 != vt) {
                        if (void 0 === vt[ae]) return;
                        var e = dr(vt[ae][se]);
                        (e > 3 && "blue" === O || e < -3 && "red" === O) && (it = mEng[104]);
                        for (var t = 0; t < S; t++)
                            for (var n = 0; n < S; n++) {
                                var r = dr(vt[t][n]);
                                u.fillStyle = r > 0 ? "red" : "cyan";
                                var o = Math.sqrt(Math.abs(r) / 30);
                                u.globalAlpha = Math.min(1, o), u.fillRect(20 + 182 * t / S, 20 + 182 * n / S, 182 / S, 182 / S)
                            }
                    }
                    if (u.globalAlpha = 1, u.drawImage(In.galaxy, 14, 14), u.lineWidth = 3, u.strokeStyle = "#FFFF00", u.strokeRect(20 + 182 * ae / S, 20 + 182 * se / S, 182 / S, 182 / S), 0 != Pe && 0 != vt)
                        for (t = 0; t < S; t++)
                            for (n = 0; n < S; n++) 1 == Pe[t][n] ? u.drawImage(In.mrss, 21.5 + 26 * t, 21.5 + 27 * n) : 2 == Pe[t][n] ? u.drawImage(In.mbss, 21.5 + 26 * t, 21.5 + 26 * n) : vt[t][n] >= 1e3 && u.drawImage(In.ma, 21.5 + 26 * t, 21.5 + 26 * n);
                    ze < 1.9 || (u.fillStyle = "white", u.beginPath(), u.arc(20 + 182 * z, 20 + 182 * j, 4, 0, 2 * Math.PI, !1), u.fill(), u.fillStyle = "black", u.beginPath(), u.arc(20 + 182 * z, 20 + 182 * j, 3, 0, 2 * Math.PI, !1), u.fill(), u.fillStyle = "white", u.beginPath(), u.arc(20 + 182 * U, 20 + 182 * L, 4, 0, 2 * Math.PI, !1), u.fill())
                }
            }

            function Cr() {
                if (!Ut) {
                    u.save(), u.globalAlpha = .5, Pr(xt - 260, -2, 262, 16 * (bt.length + 4) + 2, "black", "white"), u.fillStyle = O, Mr(xt - 221, 16 * Math.min(wt, 16) + 52, 8 * ot.length + 7, 16, 7, !0, !1), u.restore(), u.fillStyle = "yellow", u.font = "24px Nasa", u.textAlign = "center", tr(mEng[105], xt - 128, 28), u.font = "11px Nasa", u.fillStyle = "yellow", tr(mEng[106], xt - 208, 48), u.textAlign = "right", tr(mEng[107], xt - 48 - 16, 48), tr(mEng[108], xt - 16, 48);
                    for (var e = 0; e < bt.length; e++) {
                        var t = 1 + (16 != e ? e : parseInt(bt[e].id));
                        if (u.textAlign = "left", u.fillStyle = "red" == bt[e].color ? "pink" : "cyan", bt[e].name.startsWith("[V] ")) {
                            var n = (new Date).getTime() / 560;
                            tr("[VIP]", xt - 216, 16 * (e + 4)), u.fillStyle = "rgba(" + Math.floor(16 * Math.sqrt(128 * Math.sin(n) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 2 * Math.PI / 3) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 4 * Math.PI / 3) + 128)) + ", 1)", tr(bt[e].name.substring(4), xt - 186, 16 * (e + 4))
                        } else if (bt[e].name.startsWith("[B] ")) {
                            n = (new Date).getTime() / 560;
                            tr("[MVP]", xt - 216, 16 * (e + 4)), u.fillStyle = "rgba(" + Math.floor(16 * Math.sqrt(128 * Math.sin(n) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 2 * Math.PI / 3) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 4 * Math.PI / 3) + 128)) + ", 1)", tr(bt[e].name.substring(4), xt - 180, 16 * (e + 4))
                        } else tr(bt[e].name, xt - 216, 16 * (e + 4));
                        u.fillStyle = "yellow", tr(t + mEng[40], xt - 248, 16 * (e + 4)), u.textAlign = "right", tr((r = bt[e].exp) < 1e4 ? "" + Math.round(r) : r < 1e7 ? Math.round(r / 1e3) + mEng[180] : r < 1e10 ? Math.round(r / 1e6) + mEng[181] : void 0, xt - 48 - 16, 16 * (e + 4)), tr(bt[e].rank, xt - 16, 16 * (e + 4))
                    }
                    var r
                }
            }

            function Sr() {
                u.fillStyle = "yellow", u.textAlign = "center", u.font = "40px Nasa", tr(mEng[109], Ct + 384, St + 512), u.textAlign = "left", u.font = "11px Nasa"
            }

            function Tr() {
                u.fillStyle = "pink", u.textAlign = "center", u.font = "20px Nasa";
                var e = "";
                1 == et && (e = mEng[112]), 2 == et && (e = mEng[113]), 3 == et && (e = mEng[114]), 4 == et && (e = mEng[115]), 5 == et && (e = "Username is profane!"), 10 == et && (e = mEng[116]), 20 == et && (e = "Outdated client! Please clear your cache or try incongito mode!"), tr(e, xt / 2, Et - 64), u.textAlign = "left", u.font = "11px Nasa"
            }

            function Ar() {
                var e = K + J + Z + ee,
                    t = "",
                    n = "";
                u.save(), u.textAlign = "center", u.fillStyle = "yellow", Ut && (8e3 != re && on > 3 ? (t = mEng[123], on < 5 && (on = 5, cr([256, t, "", ""]))) : nn ? rn ? 0 == Ne && 0 == e ? (t = mEng[119], n = mEng[120], on < 3 && (on = 3, cr([256, t, n, ""]))) : 0 == Ne && (t = le ? mEng[122] : mEng[121], on < 4 && (on = 4, cr([256, t, "", ""]))) : (t = mEng[118], on < 2 && (on = 2, cr([256, t, "", ""]))) : (t = mEng[117], on < 1 && (on = 1, cr([256, t, "", ""]))));
                var r = (new Date).getTime();
                u.font = 5 * or(r / 180) + 25 + "px Nasa", tr(t, xt / 2, 40), tr(n, xt / 2, 88), u.restore()
            }

            function Mr(e, t, n, r, o, i, a) {
                if (u.lineWidth = 2, void 0 === a && (a = !0), void 0 === o && (o = 0), "number" == typeof o) o = {
                    tl: o,
                    tr: o,
                    br: o,
                    bl: o
                };
                else {
                    var s = {
                        tl: 0,
                        tr: 0,
                        br: 0,
                        bl: 0
                    };
                    for (var l in s) o[l] = o[l] || s[l]
                }
                u.beginPath(), u.moveTo(e + o.tl, t), u.lineTo(e + n - o.tr, t), u.quadraticCurveTo(e + n, t, e + n, t + o.tr), u.lineTo(e + n, t + r - o.br), u.quadraticCurveTo(e + n, t + r, e + n - o.br, t + r), u.lineTo(e + o.bl, t + r), u.quadraticCurveTo(e, t + r, e, t + r - o.bl), u.lineTo(e, t + o.tl), u.quadraticCurveTo(e, t, e + o.tl, t), u.closePath(), i && u.fill(), a && u.stroke()
            }

            function Pr(e, t, n, r, o, i) {
                u.save(), u.lineWidth = 1, u.globalAlpha = .5, o && (u.fillStyle = o, u.fillRect(e, t, n, r)), i && (u.strokeStyle = i, u.beginPath(), u.moveTo(e, t), u.lineTo(e + n, t), u.closePath(), u.stroke(), u.beginPath(), u.moveTo(e, t + r), u.lineTo(e + n, t + r), u.closePath(), u.stroke()), u.restore()
            }

            function Ir() {
                if (!(Ut || ie < 6)) {
                    u.save(), u.fillStyle = "yellow", u.textAlign = "center";
                    var e = xe / 25,
                        t = Math.floor(e / 60),
                        n = "" + Math.floor(e) % 60;
                    1 == n.length && (n = "0" + n), u.font = "16px Nasa", xe >= 0 && xe < 15e3 ? (tr(mEng[200] + t + ":" + n, xt / 2, Et - 120), tr(mEng[201] + Se, xt / 2, Et - 80), u.font = "14px Nasa", tr("-", xt / 2, Et - 100), u.fillStyle = "pink", u.textAlign = "right", tr(Ee, xt / 2 - 8, Et - 100), u.fillStyle = "cyan", u.textAlign = "left", tr(Ce, xt / 2 + 8, Et - 100)) : le && t > 5 && tr(mEng[202] + (t - 10) + ":" + n, xt / 2, Et - 120), u.restore()
                }
            }

            function Nr() {
                if (-1 !== Bn[0])
                    if (Bn[0][0] -= "" === Bn[0][2] ? 2 : 1.25, Bn[0][0] < 0) {
                        for (var e = 0; e < 3; e++) Bn[e] = Bn[e + 1];
                        Bn[3] = -1
                    } else {
                        var t = Bn[0][0];
                        u.fillStyle = "black", u.globalAlpha = .8 / (1 + Math.exp(ar(128 - t) / 5e3)), u.fillRect(0, 0, xt, Et), u.textAlign = "center", u.fillStyle = "cyan";
                        var n = xt / 2 + (rr(t - 128) + 10 * (t - 128)) / 1500;
                        u.globalAlpha = .7, u.font = "48px Nasa", tr(Bn[0][1], n, Et / 2 - 64), u.font = "36px Nasa", tr(Bn[0][2], n, Et / 2), u.font = "24px Nasa", tr(Bn[0][3], n, Et / 2 + 64), u.globalAlpha = 1, u.font = "12px Nasa"
                    }
            }

            function Fr() {
                for (var e in gt) {
                    var t = gt[e];
                    t.x += t.vx, t.y += t.vy, t.tick++
                }
            }

            function Or() {
                for (var e in M || Fr(), gt) {
                    var t = gt[e],
                        n = In.bullet,
                        r = t.x - N + xt / 2 + E,
                        o = t.y - F + Et / 2 + C;
                    if (28 != t.wepnID) {
                        "blue" == t.color && (n = In.ebullet), 1 != t.wepnID && 23 != t.wepnID || (n = In.bigBullet);
                        var i = n.width,
                            a = n.height;
                        u.save(), u.translate(r, o), u.rotate(t.angle + Math.PI / 2), u.drawImage(n, -i / 2, -a / 2), u.restore()
                    } else {
                        u.save(), u.globalAlpha = .1, u.fillStyle = "white";
                        for (var s = 0; s < 10; s++) {
                            var l = Math.random() * Math.PI * 2,
                                c = Math.min(t.tick, 75),
                                f = 4 + ar(Math.random() * c / 10),
                                d = Math.random() * f;
                            u.beginPath(), u.arc(r + Math.cos(l) * d, o + Math.sin(l) * d, f, 0, 2 * Math.PI, !1), u.closePath(), u.fill()
                        }
                        u.restore(), t.tick > 750 && delete gt[e]
                    }
                }
            }

            function Rr(e) {
                var t = In.pack,
                    n = e.x - N + xt / 2 + E,
                    r = e.y - F + Et / 2 + C;
                u.save(), u.translate(n, r), u.drawImage(t, -16, -16, 32, 32), u.restore()
            }
            y.on("connect_error", (function(e) {
                if (!M) return alert("Failed to connect to the Torn servers. This probably either means they are down or your firewall is blocking the request. " + e), void y.close();
                alert("There's been an issue and your connection to Torn has been interrupted. You should be able to reload and get back right into the game. " + e), y.close()
            })), y.on("posUp", (function(e) {
                ae == e.sx && se == e.sy || Tn("sector", 1), e.planetTimer / 25, e.energy, ae = e.sx, se = e.sy, N = e.x, F = e.y, D = e.health, B = e.isLocked, vn = e.charge, E = -ir(e.angle) * e.speed, C = -or(e.angle) * e.speed, R = e.angle, Te = e.shield, at = e.cloaked, le && Tn("sector", 1), Fe--, Re--, Be--, Gt--, le = !1, Bt = e.packs, At = e.players, e.planets, Tt = e.bases, Rt = e.asteroids, Ft = e.beams, Ot = e.blasts, It = e.missiles, Pt = e.orbs, Mt = e.mines, Nt = e.vorts
            })), y.on("update", (function(e) {
                ++Ke, ++k, ae == e.sx && se == e.sy || Tn("sector", 1), e.energy, ae = e.sx, se = e.sy, B = e.isLocked, vn = e.charge, at = e.cloaked;
                for (var t = e.state, n = 0; n < t.vorts.length; ++n) $n(t.vorts[n]);
                for (n = 0; n < t.players.length; ++n) Vn(t.players[n]);
                for (n = 0; n < t.mines.length; ++n) Yn(t.mines[n]);
                for (n = 0; n < t.beams.length; ++n) Xn(t.beams[n]);
                for (n = 0; n < t.blasts.length; ++n) Qn(t.blasts[n]);
                for (n = 0; n < t.asteroids.length; ++n) Kn(t.asteroids[n]);
                for (n = 0; n < t.missiles.length; ++n) Zn(t.missiles[n]);
                for (n = 0; n < t.packs.length; ++n) Gn(t.packs[n]);
                for (n = 0; n < t.orbs.length; ++n) Jn(t.orbs[n]);
                void 0 !== t.base && function(e) {
                        if (void 0 === e || void 0 === e.delta) return;
                        var t = e.delta;
                        if (0 === Tt) return;
                        for (var n in t) Tt[n] = t[n]
                    }(t.base), e.planetTimer / 25, mr(), hr(), Fr(),
                    function() {
                        for (var e in ht) {
                            (n = ht[e]).time++ >= 5 ? delete ht[e] : (n.x += n.dx, n.y += n.dy)
                        }
                        var t = (new Date).getTime() / 100;
                        for (var e in At) {
                            var n, r = (n = At[e]).trail,
                                o = r % 16;
                            if (Math.abs(n.speed) > 1 && Math.abs(n.driftAngle - n.angle) > .05) {
                                var i = .66 * ar(dn[n.ship].width / 96);
                                i *= Math.min(8 * Math.abs(n.driftAngle - n.angle), 16), r > 15 ? i /= 6 : 0 != o && (i *= 2.5);
                                for (var a = ir(n.angle), s = or(n.angle), l = 0; l < i; l++) {
                                    var u = Math.random() * n.speed,
                                        c = (Math.random(), ((96 + Math.floor(64 * Math.random()) << 16) + (96 + Math.floor(128 * Math.random()) << 8) + 255 - Math.floor(64 * Math.random())).toString(16));
                                    if (1 == o) c = ((192 + Math.floor(64 * Math.random()) << 16) + (Math.floor(64 * Math.random()) << 8) + Math.floor(92 * Math.random())).toString(16);
                                    else if (2 == o) c = Math.random() < .5 ? ((255 - 64 * Math.floor(Math.random()) << 16) + (183 + Math.floor(64 * Math.random()) << 8)).toString(16) : ((Math.floor(64 * Math.random()) << 16) + (192 + Math.floor(64 * Math.random()) << 8) + Math.floor(64 * Math.random())).toString(16);
                                    else if (3 == o) {
                                        var f = Math.random() < .5 ? 255 : 1;
                                        c = ((f << 16) + (f << 8) + f).toString(16)
                                    } else 4 == o ? (t = Math.random() * Math.PI * 60, c = ((Math.floor(128 * Math.cos(t) + 128) << 16) + (Math.floor(128 * Math.cos(t + 2 * Math.PI / 3) + 128) << 8) + Math.floor(128 * Math.cos(t + 4 * Math.PI / 3) + 128)).toString(16)) : 5 == o && (c = ((Math.floor(128 * Math.cos(t) + 128) << 16) + (Math.floor(128 * Math.cos(t + 2 * Math.PI / 3) + 128) << 8) + Math.floor(128 * Math.cos(t + 4 * Math.PI / 3) + 128)).toString(16));
                                    for (; c.length < 6;) c = "0" + c;
                                    ht[Math.random()] = {
                                        vip: r > 15,
                                        dx: a * n.speed / 2,
                                        dy: s * n.speed / 2,
                                        x: n.x + 4 * rr(4 * Math.random() - 2) * dn[n.ship].width / 128 + a * u - a * n.speed,
                                        y: n.y + 4 * rr(4 * Math.random() - 2) * dn[n.ship].width / 128 + s * u - s * n.speed,
                                        time: -1,
                                        color: c
                                    }
                                }
                            }
                            if (n.health / n.maxHealth < .4)
                                for (l = 0; l < 10; l++) {
                                    f = Math.random();
                                    ht[Math.random()] = {
                                        vip: !1,
                                        dx: a * n.speed / 2,
                                        dy: s * n.speed / 2,
                                        x: n.x + 4 * rr(4 * Math.random() - 2) * dn[n.ship].width / 128 + a * f * n.speed,
                                        y: n.y + 4 * rr(4 * Math.random() - 2) * dn[n.ship].width / 128 + s * f * n.speed,
                                        time: -1,
                                        color: ((Math.round(112 + 32 * f) << 16) + (Math.round(112 + 32 * f) << 8) + Math.round(112 + 32 * f)).toString(16)
                                    }
                                }
                        }
                    }(), Fe--, Re--, Be--, Gt--
            })), y.on("player_create", (function(e) {
                At[e.id] = e
            })), y.on("player_delete", (function(e) {
                delete At[e]
            })), y.on("vort_create", (function(e) {
                Nt[e.id] = e.pack
            })), y.on("vort_delete", (function(e) {
                delete Nt[e]
            })), y.on("mine_create", (function(e) {
                Mt[e.id] = e.pack
            })), y.on("mine_delete", (function(e) {
                delete Mt[e]
            })), y.on("pack_create", (function(e) {
                Bt[e.id] = e.pack
            })), y.on("pack_delete", (function(e) {
                delete Bt[e]
            })), y.on("beam_create", (function(e) {
                Ft[e.id] = e.pack
            })), y.on("beam_delete", (function(e) {
                delete Ft[e]
            })), y.on("blast_create", (function(e) {
                Ot[e.id] = e.pack
            })), y.on("blast_delete", (function(e) {
                delete Ot[e]
            })), y.on("base_create", (function(e) {
                Tt = e
            })), y.on("base_delete", (function(e) {
                Tt = void 0
            })), y.on("asteroid_create", (function(e) {
                Rt[e.id] = e
            })), y.on("pong", (function(e) {
                $e = e
            })), y.on("asteroid_delete", (function(e) {
                delete Rt[e]
            })), y.on("orb_create", (function(e) {
                Pt[e.id] = e.pack
            })), y.on("orb_delete", (function(e) {
                delete Pt[e]
            })), y.on("missile_create", (function(e) {
                It[e.id] = e.pack
            })), y.on("missile_delete", (function(e) {
                delete It[e]
            })), y.on("chat", (function(e) {
                ! function(e) {
                    for (var t = me; t > 0; t--) ke[t] = ke[t - 1];
                    if (e.msg.includes("`~")) {
                        var n = er(e.msg, "`~", 1),
                            r = er(e.msg, "`~", 2),
                            o = parseFloat(e.msg.substring(n + 2, r));
                        e.msg = e.msg.replace("`~" + o + "`~", fn[o].name)
                    }
                    ke[0] = e.msg, ge = 0, _r()
                }(e)
            })), y.on("newBullet", (function(e) {
                gt[e.id] = e, gt[e.id].tick = 0
            })), y.on("delBullet", (function(e) {
                delete gt[e.id]
            })), y.on("clrBullet", (function(e) {
                Wn()
            })), y.on("AFK", (function(e) {
                0 == e.t ? (I = !0, Sr()) : 2250 == e.t && (Be = 2250)
            })), y.on("invalidCredentials", (function(e) {
                et = 1
            })), y.on("accInUse", (function(e) {
                et = 10
            })), y.on("outdated", (function() {
                et = 20
            })), y.on("loginSuccess", (function(e) {
                for (var t in gt) delete gt[t];
                Tn("music1", .5), et = 0, a.a.turnOffDisplay("LoginOverlay"), a.a.init({
                    value: ""
                }), Ae = !1, M = !0, zt = e.id
            })), y.on("invalidReg", (function(e) {
                et = e.reason
            })), y.on("registered", (function(e) {
                et = 0, y.emit("login", {
                    user: e.user,
                    pass: e.pass,
                    amNew: !0,
                    version: "v2-50-g322f3d9"
                }), a.a.turnOffRegister("LoginOverlay"), Ut = !1, tt = 0, Ae = !1, ce = 0
            })), y.on("lored", (function(e) {
                for (var t in gt) delete gt[t];
                et = 0, O = e.pc, a.a.turnOffDisplay("LoginOverlay"), P = !0
            })), y.on("guested", (function(e) {
                et = 0, a.a.turnOffDisplay("LoginOverlay"), M = !0, Ut = !0, zt = e.id
            })), y.on("you", (function(e) {
                Yt = e.killStreak, Gt = e.killStreakTimer, ot = e.name, O = e.color, re = e.money, te = e.kills, ne = e.baseKills, K = e.iron, ee = e.aluminium, Z = e.platinum, J = e.silver, Ne = e.ship, oe = e.experience, ie = e.rank, De = Math.round(1e3 * e.t2) / 1e3, ze = Math.round(1e3 * e.va2) / 1e3, He = Math.round(1e3 * e.ag2) / 1e3, Le = Math.round(1e3 * e.c2) / 1e3, Ue = Math.round(1e3 * e.mh2) / 1e3, je = Math.round(1e3 * e.e2) / 1e3, e.points >= 0 && e.points < 1e3 && (Se = e.points)
            })), y.on("weapons", (function(e) {
                var t = !1;
                for (var n in bn) bn[n] != e.weapons[n] && (t = !0);
                bn = e.weapons, Ie = e.worth, wn = e.ammos, le && t && Tn("money", 1)
            })), y.on("sound", (function(e) {
                if (e.file.includes("boom")) {
                    "bigboom" === e.file && (en = 1), dt[Math.random()] = {
                        x: e.x,
                        y: e.y,
                        time: 0,
                        shockwave: "bigboom" === e.file
                    };
                    for (var t = 0; t < 5; t++) pt[Math.random()] = {
                        x: e.x,
                        y: e.y,
                        angle: 6.28 * Math.random(),
                        time: -1,
                        dx: e.dx / 1.5,
                        dy: e.dy / 1.5
                    }
                }
                var n = (N - e.x) / 1e3,
                    r = (F - e.y) / 1e3,
                    o = .6 / Math.hypot(Math.abs(n) + 10, Math.abs(r) + 10);
                "hyperspace" === e.file && (tn = 200, o = 2), Tn(e.file, o)
            })), y.on("equip", (function(e) {
                gn = e.scroll, yn = 100
            })), y.on("note", (function(e) {
                mt[Math.random()] = {
                    msg: e.msg,
                    x: e.x - 16 + (e.local ? -N : 32 * Math.random()),
                    y: e.y - 16 + (e.local ? -F : 32 * Math.random()),
                    time: 0,
                    strong: !1,
                    local: e.local
                }
            })), y.on("strong", (function(e) {
                mt[Math.random()] = {
                    msg: e.msg,
                    x: e.x + (e.local ? -N : 0),
                    y: e.y - 128 + (e.local ? -F : 0),
                    time: 0,
                    strong: !0,
                    local: e.local
                }
            })), y.on("spoils", (function(e) {
                if (e.amt = Math.round(e.amt), 0 != e.amt) {
                    var t = "",
                        n = 0,
                        r = 0;
                    "experience" === e.type ? (t = mEng[175] + e.amt + mEng[176], n = xt / 2 + 256, r = Et - 32) : "money" === e.type ? (t = "$" + e.amt, n = xt - 512, r = 64) : "ore" === e.type ? (t = mEng[175] + e.amt + mEng[177], n = xt - 512, r = 96) : "life" === e.type && (t = mEng[175] + e.amt + (e.amt > 1 ? mEng[178] : mEng[179]), n = xt - 512, r = 128), mt[Math.random()] = {
                        spoils: !0,
                        msg: t,
                        x: n,
                        y: r,
                        time: 0,
                        strong: !0,
                        local: e.local
                    }
                }
            })), y.on("online", (function(e) {
                Y = e.bb, G = e.rb, H = e.bp, q = e.rp, W = e.bg, V = e.rg, Ve = e.lag
            })), y.on("sectors", (function(e) {
                Pe = e.sectors;
                for (var t = 12, n = 0; n < S; n++)
                    for (var r = 0; r < S; r++)
                        if (4 == Pe[n][r]) {
                            var o = n - (S - 1) / 2,
                                i = r - (S - 1) / 2;
                            o *= 256 / S * (2 * S - 1) / (2 * S), i *= 256 / S * (2 * S - 1) / (2 * S), an[t] = {
                                x: o,
                                y: i,
                                z: 0,
                                color: "lime"
                            }, t++
                        }
            })), y.on("emp", (function(e) {
                Fe = e.t
            })), y.on("gyro", (function(e) {
                Re = e.t
            })), y.on("dmg", (function(e) {
                Oe = 15
            })), y.on("refresh", (function(e) {
                window.location.reload(!0)
            })), y.on("quests", (function(e) {
                T = e.quests
            })), y.on("rank", (function(e) {
                cr([256, "Rank Up!", "", ""])
            })), y.on("quest", (function(e) {
                e.complete && cr([256, "Quest Complete!", "", ""]), A = e.quest
            })), y.on("achievementsKill", (function(e) {
                for (var t in e.achs) t = Number(t), Rn[t] != e.achs[t] && (Rn[t] = e.achs[t], e.note && !Ut && cr([256, "Achievement Get!", jsn.achNames[t].split(":")[0], jsn.achNames[t].split(":")[1]]))
            })), y.on("achievementsCash", (function(e) {
                for (var t in e.achs) t = Number(t), Rn[t + 13] != e.achs[t] && (Rn[t + 13] = e.achs[t], e.note && !Ut && cr([256, "Achievement Get!", jsn.achNames[t + 13].split(":")[0], jsn.achNames[t + 13].split(":")[1]]))
            })), y.on("achievementsDrift", (function(e) {
                for (var t in e.achs) t = Number(t), Rn[t + 25] != e.achs[t] && (Rn[t + 25] = e.achs[t], e.note && !Ut && cr([256, "Achievement Get!", jsn.achNames[t + 25].split(":")[0], jsn.achNames[t + 25].split(":")[1]]))
            })), y.on("achievementsMisc", (function(e) {
                for (var t in e.achs) t = Number(t), Rn[t + 37] != e.achs[t] && (Rn[t + 37] = e.achs[t], e.note && !Ut && cr([256, "Achievement Get!", jsn.achNames[t + 37].split(":")[0], jsn.achNames[t + 37].split(":")[1]]))
            })), y.on("status", (function(e) {
                de = Ne, !le && e.docked && (nt = 40), le != e.docked && (tt = 0), le = e.docked, qe = e.state, We = e.lives
            })), y.on("planets", (function(e) {
                yt = e.pack, 0 != A && "Secret2" === A.type && ae == A.sx && se == A.sy && (ut = yt.name)
            })), y.on("heatmap", (function(e) {
                vt = e.hmap, bt = e.lb, Ee = e.raidRed, Ce = e.raidBlue, wt = parseInt(e.youi), e.youi > 15 && (bt[16] = {
                    id: e.youi,
                    name: ot,
                    exp: oe,
                    color: O,
                    rank: ie
                })
            })), y.on("worm", (function(e) {
                z = e.bx, j = e.by, U = e.bxo, L = e.byo
            })), y.on("raid", (function(e) {
                xe = e.raidTimer
            })), y.on("kick", (function(e) {
                alert(e.msg), y.disconnect()
            })), setInterval((function() {
                Ge = Qe, Je = Ke, Ke = Qe = 0;
                (new Date).getTime()
            }), 1e3), setInterval((function() {
                xe--, tn--, xt = window.innerWidth, Et = window.innerHeight, l.width == xt && l.height == Et || (l.width = xt, l.height = Et), Ct = xt / 2 - 384, St = Et / 4 - 128
            }), 40), window.requestAnimationFrame((function e() {
                if (zn(), tt++, M) a.a.activate();
                else {
                    if (!Dt) return a.a.turnOffDisplay("LoginOverlay"),
                        function() {
                            u.fillStyle = "black", u.fillRect(0, 0, xt, Et), u.fillStyle = "white", u.fillRect(xt / 2 - 128, Et / 2 - 32, 256, 64), u.fillStyle = "black", u.fillRect(xt / 2 - 128 + 8, Et / 2 - 32 + 8, 240, 48), u.fillStyle = "white", u.fillRect(xt / 2 - 128 + 16, Et / 2 - 32 + 16, (xn[0] + Nn[0]) / (xn[1] + Nn[1]) * 224, 32), u.textAlign = "center", u.font = "30px Nasa", u.fillText(splash, xt / 2, Et / 2 - 96), u.font = "15px Nasa", Nn[0] == Nn[1] && u.fillText("All images loaded.", xt / 2, Et / 2 + 64);
                            xn[0] == xn[1] && u.fillText("All sounds loaded", xt / 2, Et / 2 + 80);
                            u.fillText(lt, xt / 2, Et / 2 + 96)
                        }(), setTimeout(zn, 5), void window.requestAnimationFrame(e);
                    a.a.turnOnDisplay("LoginOverlay"), 0 == we++ && En("music1", "https://cdn.discordapp.com/attachments/658471777361723393/658666793107456000/Babylon_5_-_Season_5_Main_Titles_Instrumental.mp3"), l.width = l.width, u.fillStyle = "black", u.fillRect(0, 0, xt, Et);
                    var t = Math.exp(we / 15),
                        n = 1.885 * (t / (1 + t) - .47);
                    we > 100 && (n = 1), u.translate(xt / 2, Et / 2), u.scale(n, n), u.translate(-xt / 2, -Et / 2);
                    var r = (new Date).getTime() / 6e3,
                        o = 100 * (Math.hypot(_e, 256) - 256);
                    N = 3200 * (32 + Math.sin(4 * r)), F = 3200 * (32 + Math.cos(5 * r)), E = -xt / 3 * Math.cos(4 * r), C = Et / 3 * Math.sin(5 * r), _e > 0 && (C += o), xr(!0);
                    var i = 4e3 * Math.sin(5 * r),
                        s = 3200 * Math.cos(4 * r),
                        c = Math.hypot(i, s) / 100,
                        f = Math.random(),
                        d = -Math.atan2(5 * Math.sin(5 * r), 4 * Math.cos(4 * r));
                    f < .05 && (st && Tn("minigun", .1), gt[f] = {
                        x: N,
                        y: F,
                        vx: 12800 / 6e3 * 20 * Math.cos(4 * r) + 40 * Math.cos(d),
                        vy: -16e3 / 6e3 * 20 * Math.sin(5 * r) + 40 * Math.sin(d),
                        id: f,
                        angle: d,
                        wepnID: 0,
                        color: "red"
                    });
                    var p = An[14];
                    if (void 0 === p || 2 == p) return An[14] = 2, 2 != p && On(!0, 14), void window.requestAnimationFrame(e);
                    var h = p.width,
                        m = p.height,
                        g = xt / 2 + E,
                        y = Et / 2 + C;
                    u.save(), u.translate(g, y), u.drawImage(In.astUnderlayRed, -h, -m, 2 * h, 2 * m), u.rotate(d + Math.PI / 2);
                    var v = 38.4 * Math.sqrt(h / 64),
                        b = 1.4 * c * h / 64 + Math.random() * h / 25;
                    c > 0 && u.drawImage(In.fire, 0, 64 * Math.floor(8 * Math.random()), 64, 64, -v / 2, 0, v, b), u.restore(), u.save(), u.translate(g, y), u.rotate(d + Math.PI / 2), u.drawImage(p, -h / 2, -m / 2), u.restore();
                    for (var w = 0; w < 4; w++) {
                        var _ = 3200 * (32 + Math.sin(4 * r + .2)) + 192 * lr(4 * r + 3 * w * Math.E),
                            k = 3200 * (32 + Math.cos(5 * r + .2)) + 192 * lr(4 * r + 3 * w * Math.E + 61.23);
                        for (var x in gt) {
                            var S = gt[x];
                            ar(S.x - _) + ar(S.y - k) < 2048 && (delete gt[x], dt[Math.random()] = {
                                x: S.x,
                                y: S.y,
                                time: 0,
                                shockwave: !1
                            }, st && Tn("boom", .35))
                        }
                        if (void 0 === (p = Mn[2 * w]) || 2 == p) return Mn[2 * w] = 2, 2 != p && On(!1, 2 * w), void window.requestAnimationFrame(e);
                        h = p.width, m = p.height, g = _ - N + xt / 2 + E, y = k - F + Et / 2 + C, u.save(), u.translate(g, y), u.drawImage(In.astUnderlay, -h, -m, 2 * h, 2 * m), d = -Math.atan2(5 * Math.sin(5 * r), 4 * Math.cos(4 * r)), u.rotate(d + Math.PI / 2), v = 38.4 * Math.sqrt(h / 64), b = 1.4 * c * h / 64 + Math.random() * h / 25, c > 0 && u.drawImage(In.fire, 0, 64 * Math.floor(8 * Math.random()), 64, 64, -v / 2, 0, v, b), u.restore(), u.save(), u.translate(g, y), u.rotate(d + Math.PI / 2), u.drawImage(p, -h / 2, -m / 2), u.restore()
                    }
                    for (var x in gt) Math.random() < .01 && delete gt[x];
                    if (Or(), gr(), u.setTransform(1, 0, 0, 1, 0, 0), we < 10 && (u.globalAlpha = 1 - we / 10, u.fillStyle = "black", u.fillRect(0, 0, xt, Et), u.globalAlpha = 1), u.drawImage(In.grad, 0, 0, xt, Et), Tr(), P) return a.a.turnOffDisplay("LoginOverlay"),
                        function() {
                            tt = 1e3, u.fillStyle = O ? "pink" : "cyan", u.font = "22px Nasa", qn(jsn.lore[O ? 0 : 1], 48, Et / 2 - 110 - 1e4 / (_e + 1), xt - 96, 40), u.textAlign = "center", u.fillStyle = "yellow";
                            var e = (new Date).getTime() / 6e3;
                            u.font = (32 + 6 * Math.sin(24 * e)) * (_e / (_e + 50)) + "px Nasa", u.fillText(mEng[80], xt / 2, Et - 48)
                        }(), _e++, void window.requestAnimationFrame(e)
                }
                window.requestAnimationFrame(e)
            })), document.onkeydown = function(e) {
                if (M || P || 13 != e.keyCode) {
                    if (M && -1 != ce) {
                        if (16 === e.keyCode) return 1 != _t[0] && y.emit("key", {
                            inputId: "shift",
                            state: !0
                        }), _t[0] = !0, Be = 45e3, void!0;
                        if (typing) 13 == e.keyCode && (a.a.unfocusChat(), typing = !1);
                        else {
                            if (Ae) return;
                            if (13 == e.keyCode) a.a.focusChat(), typing = !0;
                            else if (78 == e.keyCode && le && 8 == ce) fe = -1, ce = 1;
                            else if (89 == e.keyCode && le && 8 == ce) y.emit("sellW", {
                                slot: fe
                            }), fe = -1, tt = 0, ce = 1;
                            else if (66 == e.keyCode && le && 7 == ce && 0 != Me && ue) y.emit("buyW", {
                                slot: gn,
                                weapon: Me - 20
                            }), tt = 0, ce = 1;
                            else if (e.keyCode > 48 && e.keyCode < 58 && -2 != bn[e.keyCode - 49]) y.emit("equip", {
                                scroll: e.keyCode - 49
                            });
                            else if (48 == e.keyCode && -2 != bn[e.keyCode - 49]) y.emit("equip", {
                                scroll: 9
                            });
                            else if (83 === e.keyCode || 40 === e.keyCode) 1 != _t[1] && y.emit("key", {
                                inputId: "s",
                                state: !0
                            }), _t[1] = !0, Be = 45e3;
                            else if (192 === e.keyCode) Ze = !Ze;
                            else if (69 === e.keyCode) 1 != _t[2] && y.emit("key", {
                                inputId: "e",
                                state: !0
                            }), _t[2] = !0, Be = 45e3;
                            else if (87 === e.keyCode || 38 === e.keyCode) 1 != _t[3] && y.emit("key", {
                                inputId: "w",
                                state: !0
                            }), _t[3] = !0, nn = !0, Be = 45e3;
                            else if (65 === e.keyCode || 37 === e.keyCode) 1 != _t[4] && y.emit("key", {
                                inputId: "a",
                                state: !0
                            }), _t[4] = !0, rn = !0, Be = 45e3;
                            else if (68 === e.keyCode || 39 === e.keyCode) 1 != _t[5] && y.emit("key", {
                                inputId: "d",
                                state: !0
                            }), _t[5] = !0, rn = !0, Be = 45e3;
                            else if (32 === e.keyCode) 1 != _t[6] && y.emit("key", {
                                inputId: " ",
                                state: !0
                            }), _t[6] = !0, bn[gn] < 0 && (Xt = 20), Be = 45e3;
                            else if (81 === e.keyCode) 1 != _t[7] && y.emit("key", {
                                inputId: "q",
                                state: !0
                            }), _t[7] = !0, Be = 45e3;
                            else if (88 === e.keyCode || 27 === e.keyCode) {
                                if (qe) return;
                                1 != _t[8] && y.emit("key", {
                                    inputId: "x",
                                    state: !0
                                }), _t[8] = !0, tt > 300 && (tt = 0), ce = 0, a.a.turnOffRegister(""), Be = 45e3, y.emit("equip", {
                                    scroll: gn
                                })
                            } else if (Ne > 15 && (86 === e.keyCode || 67 === e.keyCode)) {
                                if (qe) return;
                                1 != _t[9] && y.emit("key", {
                                    inputId: "c",
                                    state: !0
                                }), _t[9] = !0, Be = 45e3
                            }
                        }
                    }
                } else document.getElementById("loginButton").click()
            }, document.onkeyup = function(e) {
                if (!typing && 80 === e.keyCode && !le) return Ae ^= !0, void(-1 == Bn[0] && cr([256, "Autopilot " + (Ae ? "E" : "Dise") + "ngaged!", "Press P to toggle.", ""]));
                if (!Ae && M && -1 != ce) {
                    var t = !0;
                    83 === e.keyCode || 40 === e.keyCode ? (_t[1] = !1, y.emit("key", {
                        inputId: "s",
                        state: !1
                    })) : 69 === e.keyCode ? _t[2] = !1 : 87 === e.keyCode || 38 === e.keyCode ? (_t[3] = !1, y.emit("key", {
                        inputId: "w",
                        state: !1
                    })) : 65 === e.keyCode || 37 === e.keyCode ? (_t[4] = !1, y.emit("key", {
                        inputId: "a",
                        state: !1
                    })) : 68 === e.keyCode || 39 === e.keyCode ? (_t[5] = !1, y.emit("key", {
                        inputId: "d",
                        state: !1
                    })) : 32 === e.keyCode ? (_t[6] = !1, y.emit("key", {
                        inputId: " ",
                        state: !1
                    })) : 81 === e.keyCode ? _t[7] = !1 : 88 === e.keyCode || 27 === e.keyCode ? _t[8] = !1 : Ne > 15 && (86 === e.keyCode || 67 === e.keyCode) ? (1 == _t[9] && y.emit("key", {
                        inputId: "c",
                        state: !1
                    }), _t[9] = !1) : 16 === e.keyCode ? (_t[0] = !1, !1, y.emit("key", {
                        inputId: "shift",
                        state: !1
                    })) : t = !1, t && (Be = 45e3)
                }
            }, document.addEventListener("mousemove", (function(e) {
                var t = b,
                    n = w,
                    r = nr(l, e);
                b = r.x, w = r.y, 1 == _ && b > xt - 32 - 20 - 128 && b < xt - 32 - 20 && w > Et - 52 && (he = (b + 20 + 32 + 128 - xt) / 128), b > xt - 32 - 20 - 128 && w > Et - 52 && (pe = 1);
                var o = Me;
                if (Ut && 0 == ce && le && b > Ct + 768 - 256 && b < Ct + 768 && w > St + 256 - 40 && w < St + 256 + 120) Me = 600;
                else if (1 == ce && le && b > Ct + 256 + 48 && b < Ct + 256 + 48 + u.measureText(mEng[12]).width && w > St + 64 && w < St + 80) Me = 610;
                else if (1 == ce && le && b > Ct + 768 - 16 - u.measureText(mEng[14]).width && b < Ct + 768 - 16 && w > St + 512 - 32 && w < St + 512 - 16) Me = 611;
                else if (1 == _ && le && 1 == ce && b > Ct + 512 - 16 && b < Ct + 768 - 16 && w < St + 512 - 16 && w > St + 256 - 16) {
                    var i = b - t;
                    Dn((w - n) / 4), Un(i / 4)
                } else if (1 == _ && le && 0 == ce && b > Ct && b < Ct + 512 && w < St + 512 && w > St + 40) {
                    i = b - t;
                    Dn((w - n) / 4), Un(i / 4)
                } else if (le && 2 == ce && b > 16 + Ct && b < Ct + 768 - 16 && w > St + 40 + 32 && w < St + 512 - 48 && 0 == A) Me = Math.floor((w - St - 40 - 32) / 80) + 300, b > Ct + 384 && (Me += 5);
                else if (1 == ce && le && b > Ct + 256 - 32 && b < Ct + 264 && w < St + 84 + 128 - 16 && w > St + 84) Me = 5 + Math.floor((w - 84 - St) / 32), Math.floor((w - 84 - St) / 16) % 2 == 1 && (Me = 0);
                else if (1 == ce && le && w > St + 246 && w < St + 240 + 160 && b > Ct + 256 + 32 && b < Ct + 256 + 78) Me = Math.floor((w - St - 246) / 16 + 10);
                else if (1 == ce && le && w > St + 256 - 30 && w < St + 256 - 16 && b > Ct + 512 - 64 && b < Ct + 512 - 64 + u.measureText(mEng[18]).width) Me = 601;
                else if (7 == ce && le && w > St + 40 + 52 && w < St + 76 + 16 * (Math.ceil(fn.length / 3) + 1) && b > Ct + 16 && b < Ct + 16 + 48) Me = pr(Math.floor((w - St - 40 - 52) / 16)) + 20;
                else if (7 == ce && le && w > St + 40 + 52 && w < St + 76 + 16 * (Math.ceil(fn.length / 3) + 1) && b > Ct + 16 + 240 && b < Ct + 16 + 240 + 48) Me = pr(Math.floor((w - St - 40 - 52) / 16 + Math.ceil(fn.length / 3))) + 20;
                else if (7 == ce && le && w > St + 40 + 52 && w < St + 76 + 16 * (Math.ceil(fn.length / 3) + 1) && b > Ct + 16 + 480 && b < Ct + 16 + 480 + 48) Me = pr(Math.floor((w - St - 40 - 52) / 16 + 2 * Math.ceil(fn.length / 3))) + 20;
                else if (le && 1 == ce && w > St + 256 - 16 && w < St + 512 - 16 && b > Ct + 16 && b < Ct + 256 + 16) Me = w > St + 256 + 128 + 32 ? 100 : 0;
                else if (le && 3 == ce && w > St + 416 - 64 && w < St + 416 - 64 + 48 && b > Ct + 64 && b < Ct + 64 + 112) Me = 200;
                else if (le && 3 == ce && w > St + 416 - 64 && w < St + 416 - 64 + 48 && b > Ct + 192 && b < Ct + 192 + 112) Me = 201;
                else if (le && 3 == ce && w > St + 416 && w < St + 416 + 48 && b > Ct + 64 && b < Ct + 64 + 112) Me = 202;
                else if (le && 3 == ce && w > St + 416 && w < St + 416 + 48 && b > Ct + 192 && b < Ct + 192 + 112) Me = 203;
                else if (le && 3 == ce && w > St + 416 - 64 && w < St + 416 - 64 + 48 && b > Ct + 320 && b < Ct + 320 + 112) Me = 204;
                else if (le && 3 == ce && w > St + 416 && w < St + 416 + 48 && b > Ct + 320 && b < Ct + 320 + 112) Me = 205;
                else if (le && 5 == ce && w > St + 40 && w < St + 512 && b > Ct && b < Ct + 768) {
                    var a = Math.floor((b - Ct) / 256),
                        s = Math.floor((w - St - 40) / (472 / 3));
                    Me = 1 == s ? 503 : 500 + a + 2 * s
                } else le && 3 == ce && w > St + 44 + 64 - 24 && w < St + 44 + 64 + 168 && b > Ct + 512 && b < Ct + 768 ? (701 == (Me = 700 + Math.floor((w - St - 44 - 64 + 24) / 32)) && !Rn[12] || 702 == Me && !Rn[24] || 703 == Me && !Rn[36] || 704 == Me && !Rn[47] || 705 == Me) && (Me = 0) : Me = b < 544 && b > 448 && w > Et - 32 ? 800 : 0;
                0 != Me && Me != o && Tn("button2", .2)
            }), !1), document.addEventListener("mousedown", (function(e) {
                if (st = !0, _ = 1, !P || M) {
                    b > xt - 32 - 20 - 128 && b < xt - 32 - 20 && w > Et - 52 && (he = (b + 20 + 32 + 128 - xt) / 128);
                    var t = nr(l, e);
                    b = t.x, w = t.y, b < 400 && b > 9 && w > Et - 32 && w < Et - 8 ? (typing = !0, a.a.focusChat()) : typing = !1;
                    var n = Me;
                    if (0 != n || Qt || (Qt = !0, (b < xt - 32 - 20 - 128 - 16 || w < Et - 92) && (b > 544 || w < Et - 216) && (y.emit("key", {
                            inputId: " ",
                            state: !0
                        }), Be = 45e3), bn[gn] < 0 && (Xt = 20)), 500 == n && window.open("https://tornspace.wikia.com/wiki/Torn.space_Wiki", "_blank"), 501 == n && window.open("/store", "_blank"), 502 == n && window.open("/leaderboard", "_blank"), 503 == n && window.open("/contact", "_blank"), 504 == n && window.open("https://www.youtube.com/channel/UCKsbC4GfoPOcyifiwW1GA4w", "_blank"), 505 == n && window.open("https://discord.gg/wFsdUcY", "_blank"), 506 == n && window.open("/credits", "_blank"), 600 == n && Ut && (a.a.turnOnRegister(""), tt = 0, ce = -1), 601 == n && (tt = 0, ce = 7, ue = !1), 610 == n && y.emit("sell", {
                            item: "all"
                        }), 611 == n && y.emit("buyLife", {}), n >= 300 && n < 310 && 0 == A && y.emit("quest", {
                            quest: n - 300
                        }), le && 3 == ce && n > 199 && n < 206 && y.emit("upgrade", {
                            item: n - 200
                        }), le && b > Ct && b < Ct + 768 && w > St && w < St + 40 && (tt = 0, ce = Math.floor((b - Ct) / 128)), n >= 700 && n < 705 && y.emit("trail", {
                            trail: n - 700
                        }), 800 == n && (ye = (ye + 1) % 2, y.emit("toggleGlobal", {}), _r()), le && b > Ct + 256 - 32 && b < Ct + 264 && w < St + 84 + 128 - 16 && w > St + 84) {
                        var r = "";
                        5 == n ? r = "iron" : 6 == n ? r = "silver" : 7 == n ? r = "platinum" : 8 == n && (r = "aluminium"), y.emit("sell", {
                            item: r
                        })
                    } else le && 1 == ce && w > St + 246 && w < St + 240 + 160 && b > Ct + 256 + 32 && b < Ct + 256 + 78 ? -1 == bn[n - 10] ? (tt = 0, ce = 7, ue = !0, gn = n - 10) : bn[n - 10] > -1 && (tt = 0, ce = 8, fe = n - 10) : le && 1 == ce && w > St + 256 - 16 && w < St + 512 - 16 && b > Ct + 16 && b < Ct + 256 + 16 && (w > St + 256 + 128 + 32 ? y.emit("buyShip", {
                        ship: de
                    }) : b > Ct + 16 + 128 && de < dn.length - 1 ? de++ : b < Ct + 16 + 128 && de > 0 && de--);
                    0 != n && 600 != n && a.a.turnOffRegister("")
                } else y.emit("guest", "v2-50-g322f3d9")
            }), !1), document.addEventListener("mouseup", (function(e) {
                _ = 0, Qt && (y.emit("key", {
                    inputId: " ",
                    state: !1
                }), Be = 45e3, Qt = !1)
            }), !1), document.addEventListener("mousewheel", (function(e) {
                var t = Math.sign(e.wheelDelta);
                b < 544 && w > Et - 216 ? ge = Math.max(0, Math.min(me - 10, ge + t)) : bn[gn] > 0 && (le || gn - t < 0 || gn - t >= bn.length || bn[gn - t] < -1) || -2 == bn[gn - t] || y.emit("equip", {
                    scroll: gn - t
                })
            }), !1), $(document).keydown((function(e) {
                1 != e.ctrlKey || "61" != e.which && "107" != e.which && "173" != e.which && "109" != e.which && "187" != e.which && "189" != e.which || e.preventDefault()
            })), $(window).bind("mousewheel DOMMouseScroll", (function(e) {
                1 == e.ctrlKey && e.preventDefault()
            }), {
                passive: !1
            })
        }.call(this, n(2))
}, function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(15),
        o = "function" == typeof Symbol && Symbol.for,
        i = o ? Symbol.for("react.element") : 60103,
        a = o ? Symbol.for("react.portal") : 60106,
        s = o ? Symbol.for("react.fragment") : 60107,
        l = o ? Symbol.for("react.strict_mode") : 60108,
        u = o ? Symbol.for("react.profiler") : 60114,
        c = o ? Symbol.for("react.provider") : 60109,
        f = o ? Symbol.for("react.context") : 60110,
        d = o ? Symbol.for("react.forward_ref") : 60112,
        p = o ? Symbol.for("react.suspense") : 60113;
    o && Symbol.for("react.suspense_list");
    var h = o ? Symbol.for("react.memo") : 60115,
        m = o ? Symbol.for("react.lazy") : 60116;
    o && Symbol.for("react.fundamental"), o && Symbol.for("react.responder"), o && Symbol.for("react.scope");
    var g = "function" == typeof Symbol && Symbol.iterator;

    function y(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var v = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        b = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || v
    }

    function _() {}

    function k(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || v
    }
    w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, _.prototype = w.prototype;
    var x = k.prototype = new _;
    x.constructor = k, r(x, w.prototype), x.isPureReactComponent = !0;
    var E = {
            current: null
        },
        C = {
            current: null
        },
        S = Object.prototype.hasOwnProperty,
        T = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function A(e, t, n) {
        var r, o = {},
            a = null,
            s = null;
        if (null != t)
            for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) S.call(t, r) && !T.hasOwnProperty(r) && (o[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) o.children = n;
        else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            o.children = u
        }
        if (e && e.defaultProps)
            for (r in l = e.defaultProps) void 0 === o[r] && (o[r] = l[r]);
        return {
            $$typeof: i,
            type: e,
            key: a,
            ref: s,
            props: o,
            _owner: C.current
        }
    }

    function M(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }
    var P = /\/+/g,
        I = [];

    function N(e, t, n, r) {
        if (I.length) {
            var o = I.pop();
            return o.result = e, o.keyPrefix = t, o.func = n, o.context = r, o.count = 0, o
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }

    function F(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > I.length && I.push(e)
    }

    function O(e, t, n) {
        return null == e ? 0 : function e(t, n, r, o) {
            var s = typeof t;
            "undefined" !== s && "boolean" !== s || (t = null);
            var l = !1;
            if (null === t) l = !0;
            else switch (s) {
                case "string":
                case "number":
                    l = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case i:
                        case a:
                            l = !0
                    }
            }
            if (l) return r(o, t, "" === n ? "." + R(t, 0) : n), 1;
            if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                for (var u = 0; u < t.length; u++) {
                    var c = n + R(s = t[u], u);
                    l += e(s, c, r, o)
                } else if (null === t || "object" != typeof t ? c = null : c = "function" == typeof(c = g && t[g] || t["@@iterator"]) ? c : null, "function" == typeof c)
                    for (t = c.call(t), u = 0; !(s = t.next()).done;) l += e(s = s.value, c = n + R(s, u++), r, o);
                else if ("object" === s) throw r = "" + t, Error(y(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
            return l
        }(e, "", t, n)
    }

    function R(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                return t[e]
            }))
        }(e.key) : t.toString(36)
    }

    function B(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function D(e, t, n) {
        var r = e.result,
            o = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? U(e, r, n, (function(e) {
            return e
        })) : null != e && (M(e) && (e = function(e, t) {
            return {
                $$typeof: i,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, o + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(P, "$&/") + "/") + n)), r.push(e))
    }

    function U(e, t, n, r, o) {
        var i = "";
        null != n && (i = ("" + n).replace(P, "$&/") + "/"), O(e, D, t = N(t, i, r, o)), F(t)
    }

    function L() {
        var e = E.current;
        if (null === e) throw Error(y(321));
        return e
    }
    var z = {
            Children: {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return U(e, r, null, t, n), r
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    O(e, B, t = N(null, null, t, n)), F(t)
                },
                count: function(e) {
                    return O(e, (function() {
                        return null
                    }), null)
                },
                toArray: function(e) {
                    var t = [];
                    return U(e, t, null, (function(e) {
                        return e
                    })), t
                },
                only: function(e) {
                    if (!M(e)) throw Error(y(143));
                    return e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: w,
            PureComponent: k,
            createContext: function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: c,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: d,
                    render: e
                }
            },
            lazy: function(e) {
                return {
                    $$typeof: m,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(e, t) {
                return {
                    $$typeof: h,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            },
            useCallback: function(e, t) {
                return L().useCallback(e, t)
            },
            useContext: function(e, t) {
                return L().useContext(e, t)
            },
            useEffect: function(e, t) {
                return L().useEffect(e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return L().useImperativeHandle(e, t, n)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return L().useLayoutEffect(e, t)
            },
            useMemo: function(e, t) {
                return L().useMemo(e, t)
            },
            useReducer: function(e, t, n) {
                return L().useReducer(e, t, n)
            },
            useRef: function(e) {
                return L().useRef(e)
            },
            useState: function(e) {
                return L().useState(e)
            },
            Fragment: s,
            Profiler: u,
            StrictMode: l,
            Suspense: p,
            createElement: A,
            cloneElement: function(e, t, n) {
                if (null == e) throw Error(y(267, e));
                var o = r({}, e.props),
                    a = e.key,
                    s = e.ref,
                    l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (s = t.ref, l = C.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                    for (c in t) S.call(t, c) && !T.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = n;
                else if (1 < c) {
                    u = Array(c);
                    for (var f = 0; f < c; f++) u[f] = arguments[f + 2];
                    o.children = u
                }
                return {
                    $$typeof: i,
                    type: e.type,
                    key: a,
                    ref: s,
                    props: o,
                    _owner: l
                }
            },
            createFactory: function(e) {
                var t = A.bind(null, e);
                return t.type = e, t
            },
            isValidElement: M,
            version: "16.12.0",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: E,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: C,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            }
        },
        j = {
            default: z
        },
        H = j && z || j;
    e.exports = H.default || H
}, function(e, t, n) {
    "use strict";
    /** @license React v16.12.0
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(0),
        o = n(15),
        i = n(34);

    function a(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r) throw Error(a(227));
    var s = null,
        l = {};

    function u() {
        if (s)
            for (var e in l) {
                var t = l[e],
                    n = s.indexOf(e);
                if (!(-1 < n)) throw Error(a(96, e));
                if (!f[n]) {
                    if (!t.extractEvents) throw Error(a(97, e));
                    for (var r in f[n] = t, n = t.eventTypes) {
                        var o = void 0,
                            i = n[r],
                            u = t,
                            p = r;
                        if (d.hasOwnProperty(p)) throw Error(a(99, p));
                        d[p] = i;
                        var h = i.phasedRegistrationNames;
                        if (h) {
                            for (o in h) h.hasOwnProperty(o) && c(h[o], u, p);
                            o = !0
                        } else i.registrationName ? (c(i.registrationName, u, p), o = !0) : o = !1;
                        if (!o) throw Error(a(98, r, e))
                    }
                }
            }
    }

    function c(e, t, n) {
        if (p[e]) throw Error(a(100, e));
        p[e] = t, h[e] = t.eventTypes[n].dependencies
    }
    var f = [],
        d = {},
        p = {},
        h = {};

    function m(e, t, n, r, o, i, a, s, l) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, u)
        } catch (e) {
            this.onError(e)
        }
    }
    var g = !1,
        y = null,
        v = !1,
        b = null,
        w = {
            onError: function(e) {
                g = !0, y = e
            }
        };

    function _(e, t, n, r, o, i, a, s, l) {
        g = !1, y = null, m.apply(w, arguments)
    }
    var k = null,
        x = null,
        E = null;

    function C(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = E(n),
            function(e, t, n, r, o, i, s, l, u) {
                if (_.apply(this, arguments), g) {
                    if (!g) throw Error(a(198));
                    var c = y;
                    g = !1, y = null, v || (v = !0, b = c)
                }
            }(r, t, void 0, e), e.currentTarget = null
    }

    function S(e, t) {
        if (null == t) throw Error(a(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function T(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var A = null;

    function M(e) {
        if (e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) C(e, t[r], n[r]);
            else t && C(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function P(e) {
        if (null !== e && (A = S(A, e)), e = A, A = null, e) {
            if (T(e, M), A) throw Error(a(95));
            if (v) throw e = b, v = !1, b = null, e
        }
    }
    var I = {
        injectEventPluginOrder: function(e) {
            if (s) throw Error(a(101));
            s = Array.prototype.slice.call(e), u()
        },
        injectEventPluginsByName: function(e) {
            var t, n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    if (!l.hasOwnProperty(t) || l[t] !== r) {
                        if (l[t]) throw Error(a(102, t));
                        l[t] = r, n = !0
                    }
                }
            n && u()
        }
    };

    function N(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = k(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
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
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
        return n
    }
    var F = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    F.hasOwnProperty("ReactCurrentDispatcher") || (F.ReactCurrentDispatcher = {
        current: null
    }), F.hasOwnProperty("ReactCurrentBatchConfig") || (F.ReactCurrentBatchConfig = {
        suspense: null
    });
    var O = /^(.*)[\\\/]/,
        R = "function" == typeof Symbol && Symbol.for,
        B = R ? Symbol.for("react.element") : 60103,
        D = R ? Symbol.for("react.portal") : 60106,
        U = R ? Symbol.for("react.fragment") : 60107,
        L = R ? Symbol.for("react.strict_mode") : 60108,
        z = R ? Symbol.for("react.profiler") : 60114,
        j = R ? Symbol.for("react.provider") : 60109,
        H = R ? Symbol.for("react.context") : 60110,
        q = R ? Symbol.for("react.concurrent_mode") : 60111,
        W = R ? Symbol.for("react.forward_ref") : 60112,
        V = R ? Symbol.for("react.suspense") : 60113,
        $ = R ? Symbol.for("react.suspense_list") : 60120,
        Y = R ? Symbol.for("react.memo") : 60115,
        G = R ? Symbol.for("react.lazy") : 60116;
    R && Symbol.for("react.fundamental"), R && Symbol.for("react.responder"), R && Symbol.for("react.scope");
    var X = "function" == typeof Symbol && Symbol.iterator;

    function Q(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = X && e[X] || e["@@iterator"]) ? e : null
    }

    function K(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case U:
                return "Fragment";
            case D:
                return "Portal";
            case z:
                return "Profiler";
            case L:
                return "StrictMode";
            case V:
                return "Suspense";
            case $:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case H:
                return "Context.Consumer";
            case j:
                return "Context.Provider";
            case W:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case Y:
                return K(e.type);
            case G:
                if (e = 1 === e._status ? e._result : null) return K(e)
        }
        return null
    }

    function J(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var r = e._debugOwner,
                        o = e._debugSource,
                        i = K(e.type);
                    n = null, r && (n = K(r.type)), r = i, i = "", o ? i = " (at " + o.fileName.replace(O, "") + ":" + o.lineNumber + ")" : n && (i = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + i
            }
            t += n,
            e = e.return
        } while (e);
        return t
    }
    var Z = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
        ee = null,
        te = null,
        ne = null;

    function re(e) {
        if (e = x(e)) {
            if ("function" != typeof ee) throw Error(a(280));
            var t = k(e.stateNode);
            ee(e.stateNode, e.type, t)
        }
    }

    function oe(e) {
        te ? ne ? ne.push(e) : ne = [e] : te = e
    }

    function ie() {
        if (te) {
            var e = te,
                t = ne;
            if (ne = te = null, re(e), t)
                for (e = 0; e < t.length; e++) re(t[e])
        }
    }

    function ae(e, t) {
        return e(t)
    }

    function se(e, t, n, r) {
        return e(t, n, r)
    }

    function le() {}
    var ue = ae,
        ce = !1,
        fe = !1;

    function de() {
        null === te && null === ne || (le(), ie())
    }
    new Map;
    var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        he = Object.prototype.hasOwnProperty,
        me = {},
        ge = {};

    function ye(e, t, n, r, o, i) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i
    }
    var ve = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        ve[e] = new ye(e, 0, !1, e, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function(e) {
        var t = e[0];
        ve[t] = new ye(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        ve[e] = new ye(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        ve[e] = new ye(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        ve[e] = new ye(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        ve[e] = new ye(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function(e) {
        ve[e] = new ye(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function(e) {
        ve[e] = new ye(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function(e) {
        ve[e] = new ye(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var be = /[\-:]([a-z])/g;

    function we(e) {
        return e[1].toUpperCase()
    }

    function _e(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function ke(e, t, n, r) {
        var o = ve.hasOwnProperty(t) ? ve[t] : null;
        (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
            if (null == t || function(e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, o, r) && (n = null), r || null === o ? function(e) {
            return !!he.call(ge, e) || !he.call(me, e) && (pe.test(e) ? ge[e] = !0 : (me[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }

    function xe(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function Ee(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = xe(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var o = n.get,
                    i = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return o.call(this)
                    },
                    set: function(e) {
                        r = "" + e, i.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function Ce(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = xe(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function Se(e, t) {
        var n = t.checked;
        return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function Te(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
        n = _e(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function Ae(e, t) {
        null != (t = t.checked) && ke(e, "checked", t, !1)
    }

    function Me(e, t) {
        Ae(e, t);
        var n = _e(t.value),
            r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ie(e, t.type, _e(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Pe(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function Ie(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }

    function Ne(e, t) {
        return e = o({
            children: void 0
        }, t), (t = function(e) {
            var t = "";
            return r.Children.forEach(e, (function(e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function Fe(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + _e(n), t = null, o = 0; o < e.length; o++) {
                if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                null !== t || e[o].disabled || (t = e[o])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Oe(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
        return o({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Re(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.defaultValue, null != (t = t.children)) {
                if (null != n) throw Error(a(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(a(93));
                    t = t[0]
                }
                n = t
            }
            null == n && (n = "")
        }
        e._wrapperState = {
            initialValue: _e(n)
        }
    }

    function Be(e, t) {
        var n = _e(t.value),
            r = _e(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function De(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(be, we);
        ve[t] = new ye(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(be, we);
        ve[t] = new ye(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(be, we);
        ve[t] = new ye(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function(e) {
        ve[e] = new ye(e, 1, !1, e.toLowerCase(), null, !1)
    })), ve.xlinkHref = new ye("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
        ve[e] = new ye(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var Ue = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function Le(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function ze(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Le(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var je, He = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction((function() {
                return e(t, n)
            }))
        } : e
    }((function(e, t) {
        if (e.namespaceURI !== Ue.svg || "innerHTML" in e) e.innerHTML = t;
        else {
            for ((je = je || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = je.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function qe(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }

    function We(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var Ve = {
            animationend: We("Animation", "AnimationEnd"),
            animationiteration: We("Animation", "AnimationIteration"),
            animationstart: We("Animation", "AnimationStart"),
            transitionend: We("Transition", "TransitionEnd")
        },
        $e = {},
        Ye = {};

    function Ge(e) {
        if ($e[e]) return $e[e];
        if (!Ve[e]) return e;
        var t, n = Ve[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in Ye) return $e[e] = n[t];
        return e
    }
    Z && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete Ve.animationend.animation, delete Ve.animationiteration.animation, delete Ve.animationstart.animation), "TransitionEvent" in window || delete Ve.transitionend.transition);
    var Xe = Ge("animationend"),
        Qe = Ge("animationiteration"),
        Ke = Ge("animationstart"),
        Je = Ge("transitionend"),
        Ze = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");

    function et(e) {
        var t = e,
            n = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            e = t;
            do {
                0 != (1026 & (t = e).effectTag) && (n = t.return), e = t.return
            } while (e)
        }
        return 3 === t.tag ? n : null
    }

    function tt(e) {
        if (13 === e.tag) {
            var t = e.memoizedState;
            if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
        }
        return null
    }

    function nt(e) {
        if (et(e) !== e) throw Error(a(188))
    }

    function rt(e) {
        if (!(e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = et(e))) throw Error(a(188));
                    return t !== e ? null : e
                }
                for (var n = e, r = t;;) {
                    var o = n.return;
                    if (null === o) break;
                    var i = o.alternate;
                    if (null === i) {
                        if (null !== (r = o.return)) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (o.child === i.child) {
                        for (i = o.child; i;) {
                            if (i === n) return nt(o), e;
                            if (i === r) return nt(o), t;
                            i = i.sibling
                        }
                        throw Error(a(188))
                    }
                    if (n.return !== r.return) n = o, r = i;
                    else {
                        for (var s = !1, l = o.child; l;) {
                            if (l === n) {
                                s = !0, n = o, r = i;
                                break
                            }
                            if (l === r) {
                                s = !0, r = o, n = i;
                                break
                            }
                            l = l.sibling
                        }
                        if (!s) {
                            for (l = i.child; l;) {
                                if (l === n) {
                                    s = !0, n = i, r = o;
                                    break
                                }
                                if (l === r) {
                                    s = !0, r = i, n = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!s) throw Error(a(189))
                        }
                    }
                    if (n.alternate !== r) throw Error(a(190))
                }
                if (3 !== n.tag) throw Error(a(188));
                return n.stateNode.current === n ? e : t
            }(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }
    var ot, it, at, st = !1,
        lt = [],
        ut = null,
        ct = null,
        ft = null,
        dt = new Map,
        pt = new Map,
        ht = [],
        mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        gt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function yt(e, t, n, r) {
        return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | n,
            nativeEvent: r
        }
    }

    function vt(e, t) {
        switch (e) {
            case "focus":
            case "blur":
                ut = null;
                break;
            case "dragenter":
            case "dragleave":
                ct = null;
                break;
            case "mouseover":
            case "mouseout":
                ft = null;
                break;
            case "pointerover":
            case "pointerout":
                dt.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                pt.delete(t.pointerId)
        }
    }

    function bt(e, t, n, r, o) {
        return null === e || e.nativeEvent !== o ? (e = yt(t, n, r, o), null !== t && (null !== (t = pr(t)) && it(t)), e) : (e.eventSystemFlags |= r, e)
    }

    function wt(e) {
        var t = dr(e.target);
        if (null !== t) {
            var n = et(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = tt(n))) return e.blockedOn = t, void i.unstable_runWithPriority(e.priority, (function() {
                        at(n)
                    }))
                } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function _t(e) {
        if (null !== e.blockedOn) return !1;
        var t = In(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        if (null !== t) {
            var n = pr(t);
            return null !== n && it(n), e.blockedOn = t, !1
        }
        return !0
    }

    function kt(e, t, n) {
        _t(e) && n.delete(t)
    }

    function xt() {
        for (st = !1; 0 < lt.length;) {
            var e = lt[0];
            if (null !== e.blockedOn) {
                null !== (e = pr(e.blockedOn)) && ot(e);
                break
            }
            var t = In(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
            null !== t ? e.blockedOn = t : lt.shift()
        }
        null !== ut && _t(ut) && (ut = null), null !== ct && _t(ct) && (ct = null), null !== ft && _t(ft) && (ft = null), dt.forEach(kt), pt.forEach(kt)
    }

    function Et(e, t) {
        e.blockedOn === t && (e.blockedOn = null, st || (st = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, xt)))
    }

    function Ct(e) {
        function t(t) {
            return Et(t, e)
        }
        if (0 < lt.length) {
            Et(lt[0], e);
            for (var n = 1; n < lt.length; n++) {
                var r = lt[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== ut && Et(ut, e), null !== ct && Et(ct, e), null !== ft && Et(ft, e), dt.forEach(t), pt.forEach(t), n = 0; n < ht.length; n++)(r = ht[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < ht.length && null === (n = ht[0]).blockedOn;) wt(n), null === n.blockedOn && ht.shift()
    }

    function St(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function Tt(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function At(e, t, n) {
        (t = N(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = S(n._dispatchListeners, t), n._dispatchInstances = S(n._dispatchInstances, e))
    }

    function Mt(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = Tt(t);
            for (t = n.length; 0 < t--;) At(n[t], "captured", e);
            for (t = 0; t < n.length; t++) At(n[t], "bubbled", e)
        }
    }

    function Pt(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = N(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = S(n._dispatchListeners, t), n._dispatchInstances = S(n._dispatchInstances, e))
    }

    function It(e) {
        e && e.dispatchConfig.registrationName && Pt(e._targetInst, null, e)
    }

    function Nt(e) {
        T(e, Mt)
    }

    function Ft() {
        return !0
    }

    function Ot() {
        return !1
    }

    function Rt(e, t, n, r) {
        for (var o in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(o) && ((t = e[o]) ? this[o] = t(n) : "target" === o ? this.target = r : this[o] = n[o]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Ft : Ot, this.isPropagationStopped = Ot, this
    }

    function Bt(e, t, n, r) {
        if (this.eventPool.length) {
            var o = this.eventPool.pop();
            return this.call(o, e, t, n, r), o
        }
        return new this(e, t, n, r)
    }

    function Dt(e) {
        if (!(e instanceof this)) throw Error(a(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function Ut(e) {
        e.eventPool = [], e.getPooled = Bt, e.release = Dt
    }
    o(Rt.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Ft)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Ft)
        },
        persist: function() {
            this.isPersistent = Ft
        },
        isPersistent: Ot,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Ot, this._dispatchInstances = this._dispatchListeners = null
        }
    }), Rt.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, Rt.extend = function(e) {
        function t() {}

        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        t.prototype = r.prototype;
        var i = new t;
        return o(i, n.prototype), n.prototype = i, n.prototype.constructor = n, n.Interface = o({}, r.Interface, e), n.extend = r.extend, Ut(n), n
    }, Ut(Rt);
    var Lt = Rt.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        zt = Rt.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        jt = Rt.extend({
            view: null,
            detail: null
        }),
        Ht = jt.extend({
            relatedTarget: null
        });

    function qt(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var Wt = {
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
        Vt = {
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
        },
        $t = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Yt(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = $t[e]) && !!t[e]
    }

    function Gt() {
        return Yt
    }
    for (var Xt = jt.extend({
            key: function(e) {
                if (e.key) {
                    var t = Wt[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = qt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Vt[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Gt,
            charCode: function(e) {
                return "keypress" === e.type ? qt(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? qt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }), Qt = 0, Kt = 0, Jt = !1, Zt = !1, en = jt.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Gt,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function(e) {
                if ("movementX" in e) return e.movementX;
                var t = Qt;
                return Qt = e.screenX, Jt ? "mousemove" === e.type ? e.screenX - t : 0 : (Jt = !0, 0)
            },
            movementY: function(e) {
                if ("movementY" in e) return e.movementY;
                var t = Kt;
                return Kt = e.screenY, Zt ? "mousemove" === e.type ? e.screenY - t : 0 : (Zt = !0, 0)
            }
        }), tn = en.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }), nn = en.extend({
            dataTransfer: null
        }), rn = jt.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Gt
        }), on = Rt.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), an = en.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }), sn = [
            ["blur", "blur", 0],
            ["cancel", "cancel", 0],
            ["click", "click", 0],
            ["close", "close", 0],
            ["contextmenu", "contextMenu", 0],
            ["copy", "copy", 0],
            ["cut", "cut", 0],
            ["auxclick", "auxClick", 0],
            ["dblclick", "doubleClick", 0],
            ["dragend", "dragEnd", 0],
            ["dragstart", "dragStart", 0],
            ["drop", "drop", 0],
            ["focus", "focus", 0],
            ["input", "input", 0],
            ["invalid", "invalid", 0],
            ["keydown", "keyDown", 0],
            ["keypress", "keyPress", 0],
            ["keyup", "keyUp", 0],
            ["mousedown", "mouseDown", 0],
            ["mouseup", "mouseUp", 0],
            ["paste", "paste", 0],
            ["pause", "pause", 0],
            ["play", "play", 0],
            ["pointercancel", "pointerCancel", 0],
            ["pointerdown", "pointerDown", 0],
            ["pointerup", "pointerUp", 0],
            ["ratechange", "rateChange", 0],
            ["reset", "reset", 0],
            ["seeked", "seeked", 0],
            ["submit", "submit", 0],
            ["touchcancel", "touchCancel", 0],
            ["touchend", "touchEnd", 0],
            ["touchstart", "touchStart", 0],
            ["volumechange", "volumeChange", 0],
            ["drag", "drag", 1],
            ["dragenter", "dragEnter", 1],
            ["dragexit", "dragExit", 1],
            ["dragleave", "dragLeave", 1],
            ["dragover", "dragOver", 1],
            ["mousemove", "mouseMove", 1],
            ["mouseout", "mouseOut", 1],
            ["mouseover", "mouseOver", 1],
            ["pointermove", "pointerMove", 1],
            ["pointerout", "pointerOut", 1],
            ["pointerover", "pointerOver", 1],
            ["scroll", "scroll", 1],
            ["toggle", "toggle", 1],
            ["touchmove", "touchMove", 1],
            ["wheel", "wheel", 1],
            ["abort", "abort", 2],
            [Xe, "animationEnd", 2],
            [Qe, "animationIteration", 2],
            [Ke, "animationStart", 2],
            ["canplay", "canPlay", 2],
            ["canplaythrough", "canPlayThrough", 2],
            ["durationchange", "durationChange", 2],
            ["emptied", "emptied", 2],
            ["encrypted", "encrypted", 2],
            ["ended", "ended", 2],
            ["error", "error", 2],
            ["gotpointercapture", "gotPointerCapture", 2],
            ["load", "load", 2],
            ["loadeddata", "loadedData", 2],
            ["loadedmetadata", "loadedMetadata", 2],
            ["loadstart", "loadStart", 2],
            ["lostpointercapture", "lostPointerCapture", 2],
            ["playing", "playing", 2],
            ["progress", "progress", 2],
            ["seeking", "seeking", 2],
            ["stalled", "stalled", 2],
            ["suspend", "suspend", 2],
            ["timeupdate", "timeUpdate", 2],
            [Je, "transitionEnd", 2],
            ["waiting", "waiting", 2]
        ], ln = {}, un = {}, cn = 0; cn < sn.length; cn++) {
        var fn = sn[cn],
            dn = fn[0],
            pn = fn[1],
            hn = fn[2],
            mn = "on" + (pn[0].toUpperCase() + pn.slice(1)),
            gn = {
                phasedRegistrationNames: {
                    bubbled: mn,
                    captured: mn + "Capture"
                },
                dependencies: [dn],
                eventPriority: hn
            };
        ln[pn] = gn, un[dn] = gn
    }
    var yn = {
            eventTypes: ln,
            getEventPriority: function(e) {
                return void 0 !== (e = un[e]) ? e.eventPriority : 2
            },
            extractEvents: function(e, t, n, r) {
                var o = un[e];
                if (!o) return null;
                switch (e) {
                    case "keypress":
                        if (0 === qt(n)) return null;
                    case "keydown":
                    case "keyup":
                        e = Xt;
                        break;
                    case "blur":
                    case "focus":
                        e = Ht;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = en;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = nn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = rn;
                        break;
                    case Xe:
                    case Qe:
                    case Ke:
                        e = Lt;
                        break;
                    case Je:
                        e = on;
                        break;
                    case "scroll":
                        e = jt;
                        break;
                    case "wheel":
                        e = an;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = zt;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = tn;
                        break;
                    default:
                        e = Rt
                }
                return Nt(t = e.getPooled(o, t, n, r)), t
            }
        },
        vn = i.unstable_UserBlockingPriority,
        bn = i.unstable_runWithPriority,
        wn = yn.getEventPriority,
        _n = 10,
        kn = [];

    function xn(e) {
        var t = e.targetInst,
            n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r = n;
            if (3 === r.tag) r = r.stateNode.containerInfo;
            else {
                for (; r.return;) r = r.return;
                r = 3 !== r.tag ? null : r.stateNode.containerInfo
            }
            if (!r) break;
            5 !== (t = n.tag) && 6 !== t || e.ancestors.push(n), n = dr(r)
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var o = St(e.nativeEvent);
            r = e.topLevelType;
            for (var i = e.nativeEvent, a = e.eventSystemFlags, s = null, l = 0; l < f.length; l++) {
                var u = f[l];
                u && (u = u.extractEvents(r, t, i, o, a)) && (s = S(s, u))
            }
            P(s)
        }
    }
    var En = !0;

    function Cn(e, t) {
        Sn(t, e, !1)
    }

    function Sn(e, t, n) {
        switch (wn(t)) {
            case 0:
                var r = Tn.bind(null, t, 1);
                break;
            case 1:
                r = An.bind(null, t, 1);
                break;
            default:
                r = Pn.bind(null, t, 1)
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
    }

    function Tn(e, t, n) {
        ce || le();
        var r = Pn,
            o = ce;
        ce = !0;
        try {
            se(r, e, t, n)
        } finally {
            (ce = o) || de()
        }
    }

    function An(e, t, n) {
        bn(vn, Pn.bind(null, e, t, n))
    }

    function Mn(e, t, n, r) {
        if (kn.length) {
            var o = kn.pop();
            o.topLevelType = e, o.eventSystemFlags = t, o.nativeEvent = n, o.targetInst = r, e = o
        } else e = {
            topLevelType: e,
            eventSystemFlags: t,
            nativeEvent: n,
            targetInst: r,
            ancestors: []
        };
        try {
            if (t = xn, n = e, fe) t(n, void 0);
            else {
                fe = !0;
                try {
                    ue(t, n, void 0)
                } finally {
                    fe = !1, de()
                }
            }
        } finally {
            e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, kn.length < _n && kn.push(e)
        }
    }

    function Pn(e, t, n) {
        if (En)
            if (0 < lt.length && -1 < mt.indexOf(e)) e = yt(null, e, t, n), lt.push(e);
            else {
                var r = In(e, t, n);
                null === r ? vt(e, n) : -1 < mt.indexOf(e) ? (e = yt(r, e, t, n), lt.push(e)) : function(e, t, n, r) {
                    switch (t) {
                        case "focus":
                            return ut = bt(ut, e, t, n, r), !0;
                        case "dragenter":
                            return ct = bt(ct, e, t, n, r), !0;
                        case "mouseover":
                            return ft = bt(ft, e, t, n, r), !0;
                        case "pointerover":
                            var o = r.pointerId;
                            return dt.set(o, bt(dt.get(o) || null, e, t, n, r)), !0;
                        case "gotpointercapture":
                            return o = r.pointerId, pt.set(o, bt(pt.get(o) || null, e, t, n, r)), !0
                    }
                    return !1
                }(r, e, t, n) || (vt(e, n), Mn(e, t, n, null))
            }
    }

    function In(e, t, n) {
        var r = St(n);
        if (null !== (r = dr(r))) {
            var o = et(r);
            if (null === o) r = null;
            else {
                var i = o.tag;
                if (13 === i) {
                    if (null !== (r = tt(o))) return r;
                    r = null
                } else if (3 === i) {
                    if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                    r = null
                } else o !== r && (r = null)
            }
        }
        return Mn(e, t, n, r), null
    }

    function Nn(e) {
        if (!Z) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }
    var Fn = new("function" == typeof WeakMap ? WeakMap : Map);

    function On(e) {
        var t = Fn.get(e);
        return void 0 === t && (t = new Set, Fn.set(e, t)), t
    }

    function Rn(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
                case "scroll":
                    Sn(t, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Sn(t, "focus", !0), Sn(t, "blur", !0), n.add("blur"), n.add("focus");
                    break;
                case "cancel":
                case "close":
                    Nn(e) && Sn(t, e, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === Ze.indexOf(e) && Cn(e, t)
            }
            n.add(e)
        }
    }
    var Bn = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
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
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        Dn = ["Webkit", "ms", "Moz", "O"];

    function Un(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px"
    }

    function Ln(e, t) {
        for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    o = Un(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
            }
    }
    Object.keys(Bn).forEach((function(e) {
        Dn.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Bn[t] = Bn[e]
        }))
    }));
    var zn = o({
        menuitem: !0
    }, {
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
    });

    function jn(e, t) {
        if (t) {
            if (zn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(a(60));
                if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw Error(a(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(a(62, ""))
        }
    }

    function Hn(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
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

    function qn(e, t) {
        var n = On(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = h[t];
        for (var r = 0; r < t.length; r++) Rn(t[r], e, n)
    }

    function Wn() {}

    function Vn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function $n(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Yn(e, t) {
        var n, r = $n(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = $n(r)
        }
    }

    function Gn() {
        for (var e = window, t = Vn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = Vn((e = t.contentWindow).document)
        }
        return t
    }

    function Xn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var Qn = "$",
        Kn = "/$",
        Jn = "$?",
        Zn = "$!",
        er = null,
        tr = null;

    function nr(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function rr(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var or = "function" == typeof setTimeout ? setTimeout : void 0,
        ir = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function ar(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function sr(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if (n === Qn || n === Zn || n === Jn) {
                    if (0 === t) return e;
                    t--
                } else n === Kn && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var lr = Math.random().toString(36).slice(2),
        ur = "__reactInternalInstance$" + lr,
        cr = "__reactEventHandlers$" + lr,
        fr = "__reactContainere$" + lr;

    function dr(e) {
        var t = e[ur];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[fr] || n[ur]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = sr(e); null !== e;) {
                        if (n = e[ur]) return n;
                        e = sr(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function pr(e) {
        return !(e = e[ur] || e[fr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function hr(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(a(33))
    }

    function mr(e) {
        return e[cr] || null
    }
    var gr = null,
        yr = null,
        vr = null;

    function br() {
        if (vr) return vr;
        var e, t, n = yr,
            r = n.length,
            o = "value" in gr ? gr.value : gr.textContent,
            i = o.length;
        for (e = 0; e < r && n[e] === o[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
        return vr = o.slice(e, 1 < t ? 1 - t : void 0)
    }
    var wr = Rt.extend({
            data: null
        }),
        _r = Rt.extend({
            data: null
        }),
        kr = [9, 13, 27, 32],
        xr = Z && "CompositionEvent" in window,
        Er = null;
    Z && "documentMode" in document && (Er = document.documentMode);
    var Cr = Z && "TextEvent" in window && !Er,
        Sr = Z && (!xr || Er && 8 < Er && 11 >= Er),
        Tr = String.fromCharCode(32),
        Ar = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        Mr = !1;

    function Pr(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== kr.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function Ir(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var Nr = !1;
    var Fr = {
            eventTypes: Ar,
            extractEvents: function(e, t, n, r) {
                var o;
                if (xr) e: {
                    switch (e) {
                        case "compositionstart":
                            var i = Ar.compositionStart;
                            break e;
                        case "compositionend":
                            i = Ar.compositionEnd;
                            break e;
                        case "compositionupdate":
                            i = Ar.compositionUpdate;
                            break e
                    }
                    i = void 0
                } else Nr ? Pr(e, n) && (i = Ar.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = Ar.compositionStart);
                return i ? (Sr && "ko" !== n.locale && (Nr || i !== Ar.compositionStart ? i === Ar.compositionEnd && Nr && (o = br()) : (yr = "value" in (gr = r) ? gr.value : gr.textContent, Nr = !0)), i = wr.getPooled(i, t, n, r), o ? i.data = o : null !== (o = Ir(n)) && (i.data = o), Nt(i), o = i) : o = null, (e = Cr ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return Ir(t);
                        case "keypress":
                            return 32 !== t.which ? null : (Mr = !0, Tr);
                        case "textInput":
                            return (e = t.data) === Tr && Mr ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function(e, t) {
                    if (Nr) return "compositionend" === e || !xr && Pr(e, t) ? (e = br(), vr = yr = gr = null, Nr = !1, e) : null;
                    switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return Sr && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, n)) ? ((t = _r.getPooled(Ar.beforeInput, t, n, r)).data = e, Nt(t)) : t = null, null === o ? t : null === t ? o : [o, t]
            }
        },
        Or = {
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

    function Rr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Or[e.type] : "textarea" === t
    }
    var Br = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Dr(e, t, n) {
        return (e = Rt.getPooled(Br.change, e, t, n)).type = "change", oe(n), Nt(e), e
    }
    var Ur = null,
        Lr = null;

    function zr(e) {
        P(e)
    }

    function jr(e) {
        if (Ce(hr(e))) return e
    }

    function Hr(e, t) {
        if ("change" === e) return t
    }
    var qr = !1;

    function Wr() {
        Ur && (Ur.detachEvent("onpropertychange", Vr), Lr = Ur = null)
    }

    function Vr(e) {
        if ("value" === e.propertyName && jr(Lr))
            if (e = Dr(Lr, e, St(e)), ce) P(e);
            else {
                ce = !0;
                try {
                    ae(zr, e)
                } finally {
                    ce = !1, de()
                }
            }
    }

    function $r(e, t, n) {
        "focus" === e ? (Wr(), Lr = n, (Ur = t).attachEvent("onpropertychange", Vr)) : "blur" === e && Wr()
    }

    function Yr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return jr(Lr)
    }

    function Gr(e, t) {
        if ("click" === e) return jr(t)
    }

    function Xr(e, t) {
        if ("input" === e || "change" === e) return jr(t)
    }
    Z && (qr = Nn("input") && (!document.documentMode || 9 < document.documentMode));
    var Qr, Kr = {
            eventTypes: Br,
            _isInputEventSupported: qr,
            extractEvents: function(e, t, n, r) {
                var o = t ? hr(t) : window,
                    i = o.nodeName && o.nodeName.toLowerCase();
                if ("select" === i || "input" === i && "file" === o.type) var a = Hr;
                else if (Rr(o))
                    if (qr) a = Xr;
                    else {
                        a = Yr;
                        var s = $r
                    } else(i = o.nodeName) && "input" === i.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (a = Gr);
                if (a && (a = a(e, t))) return Dr(a, n, r);
                s && s(e, o, t), "blur" === e && (e = o._wrapperState) && e.controlled && "number" === o.type && Ie(o, "number", o.value)
            }
        },
        Jr = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        Zr = {
            eventTypes: Jr,
            extractEvents: function(e, t, n, r, o) {
                var i = "mouseover" === e || "pointerover" === e,
                    a = "mouseout" === e || "pointerout" === e;
                if (i && 0 == (32 & o) && (n.relatedTarget || n.fromElement) || !a && !i) return null;
                if (o = r.window === r ? r : (o = r.ownerDocument) ? o.defaultView || o.parentWindow : window, a ? (a = t, null !== (t = (t = n.relatedTarget || n.toElement) ? dr(t) : null) && (t !== (i = et(t)) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : a = null, a === t) return null;
                if ("mouseout" === e || "mouseover" === e) var s = en,
                    l = Jr.mouseLeave,
                    u = Jr.mouseEnter,
                    c = "mouse";
                else "pointerout" !== e && "pointerover" !== e || (s = tn, l = Jr.pointerLeave, u = Jr.pointerEnter, c = "pointer");
                if (e = null == a ? o : hr(a), o = null == t ? o : hr(t), (l = s.getPooled(l, a, n, r)).type = c + "leave", l.target = e, l.relatedTarget = o, (r = s.getPooled(u, t, n, r)).type = c + "enter", r.target = o, r.relatedTarget = e, c = t, (s = a) && c) e: {
                    for (e = c, a = 0, t = u = s; t; t = Tt(t)) a++;
                    for (t = 0, o = e; o; o = Tt(o)) t++;
                    for (; 0 < a - t;) u = Tt(u), a--;
                    for (; 0 < t - a;) e = Tt(e), t--;
                    for (; a--;) {
                        if (u === e || u === e.alternate) break e;
                        u = Tt(u), e = Tt(e)
                    }
                    u = null
                } else u = null;
                for (e = u, u = []; s && s !== e && (null === (a = s.alternate) || a !== e);) u.push(s), s = Tt(s);
                for (s = []; c && c !== e && (null === (a = c.alternate) || a !== e);) s.push(c), c = Tt(c);
                for (c = 0; c < u.length; c++) Pt(u[c], "bubbled", l);
                for (c = s.length; 0 < c--;) Pt(s[c], "captured", r);
                return n === Qr ? (Qr = null, [l]) : (Qr = n, [l, r])
            }
        };
    var eo = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        to = Object.prototype.hasOwnProperty;

    function no(e, t) {
        if (eo(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
            if (!to.call(t, n[r]) || !eo(e[n[r]], t[n[r]])) return !1;
        return !0
    }
    var ro = Z && "documentMode" in document && 11 >= document.documentMode,
        oo = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        io = null,
        ao = null,
        so = null,
        lo = !1;

    function uo(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return lo || null == io || io !== Vn(n) ? null : ("selectionStart" in (n = io) && Xn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, so && no(so, n) ? null : (so = n, (e = Rt.getPooled(oo.select, ao, e, t)).type = "select", e.target = io, Nt(e), e))
    }
    var co = {
        eventTypes: oo,
        extractEvents: function(e, t, n, r) {
            var o, i = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
            if (!(o = !i)) {
                e: {
                    i = On(i), o = h.onSelect;
                    for (var a = 0; a < o.length; a++)
                        if (!i.has(o[a])) {
                            i = !1;
                            break e
                        }
                    i = !0
                }
                o = !i
            }
            if (o) return null;
            switch (i = t ? hr(t) : window, e) {
                case "focus":
                    (Rr(i) || "true" === i.contentEditable) && (io = i, ao = t, so = null);
                    break;
                case "blur":
                    so = ao = io = null;
                    break;
                case "mousedown":
                    lo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return lo = !1, uo(n, r);
                case "selectionchange":
                    if (ro) break;
                case "keydown":
                case "keyup":
                    return uo(n, r)
            }
            return null
        }
    };
    I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), k = mr, x = pr, E = hr, I.injectEventPluginsByName({
        SimpleEventPlugin: yn,
        EnterLeaveEventPlugin: Zr,
        ChangeEventPlugin: Kr,
        SelectEventPlugin: co,
        BeforeInputEventPlugin: Fr
    }), new Set;
    var fo = [],
        po = -1;

    function ho(e) {
        0 > po || (e.current = fo[po], fo[po] = null, po--)
    }

    function mo(e, t) {
        po++, fo[po] = e.current, e.current = t
    }
    var go = {},
        yo = {
            current: go
        },
        vo = {
            current: !1
        },
        bo = go;

    function wo(e, t) {
        var n = e.type.contextTypes;
        if (!n) return go;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var o, i = {};
        for (o in n) i[o] = t[o];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
    }

    function _o(e) {
        return null != (e = e.childContextTypes)
    }

    function ko(e) {
        ho(vo), ho(yo)
    }

    function xo(e) {
        ho(vo), ho(yo)
    }

    function Eo(e, t, n) {
        if (yo.current !== go) throw Error(a(168));
        mo(yo, t), mo(vo, n)
    }

    function Co(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var i in r = r.getChildContext())
            if (!(i in e)) throw Error(a(108, K(t) || "Unknown", i));
        return o({}, n, {}, r)
    }

    function So(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || go, bo = yo.current, mo(yo, t), mo(vo, vo.current), !0
    }

    function To(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(a(169));
        n ? (t = Co(e, t, bo), r.__reactInternalMemoizedMergedChildContext = t, ho(vo), ho(yo), mo(yo, t)) : ho(vo), mo(vo, n)
    }
    var Ao = i.unstable_runWithPriority,
        Mo = i.unstable_scheduleCallback,
        Po = i.unstable_cancelCallback,
        Io = i.unstable_shouldYield,
        No = i.unstable_requestPaint,
        Fo = i.unstable_now,
        Oo = i.unstable_getCurrentPriorityLevel,
        Ro = i.unstable_ImmediatePriority,
        Bo = i.unstable_UserBlockingPriority,
        Do = i.unstable_NormalPriority,
        Uo = i.unstable_LowPriority,
        Lo = i.unstable_IdlePriority,
        zo = {},
        jo = void 0 !== No ? No : function() {},
        Ho = null,
        qo = null,
        Wo = !1,
        Vo = Fo(),
        $o = 1e4 > Vo ? Fo : function() {
            return Fo() - Vo
        };

    function Yo() {
        switch (Oo()) {
            case Ro:
                return 99;
            case Bo:
                return 98;
            case Do:
                return 97;
            case Uo:
                return 96;
            case Lo:
                return 95;
            default:
                throw Error(a(332))
        }
    }

    function Go(e) {
        switch (e) {
            case 99:
                return Ro;
            case 98:
                return Bo;
            case 97:
                return Do;
            case 96:
                return Uo;
            case 95:
                return Lo;
            default:
                throw Error(a(332))
        }
    }

    function Xo(e, t) {
        return e = Go(e), Ao(e, t)
    }

    function Qo(e, t, n) {
        return e = Go(e), Mo(e, t, n)
    }

    function Ko(e) {
        return null === Ho ? (Ho = [e], qo = Mo(Ro, Zo)) : Ho.push(e), zo
    }

    function Jo() {
        if (null !== qo) {
            var e = qo;
            qo = null, Po(e)
        }
        Zo()
    }

    function Zo() {
        if (!Wo && null !== Ho) {
            Wo = !0;
            var e = 0;
            try {
                var t = Ho;
                Xo(99, (function() {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Ho = null
            } catch (t) {
                throw null !== Ho && (Ho = Ho.slice(e + 1)), Mo(Ro, Jo), t
            } finally {
                Wo = !1
            }
        }
    }
    var ei = 3;

    function ti(e, t, n) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
    }

    function ni(e, t) {
        if (e && e.defaultProps)
            for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var ri = {
            current: null
        },
        oi = null,
        ii = null,
        ai = null;

    function si() {
        ai = ii = oi = null
    }

    function li(e, t) {
        var n = e.type._context;
        mo(ri, n._currentValue), n._currentValue = t
    }

    function ui(e) {
        var t = ri.current;
        ho(ri), e.type._context._currentValue = t
    }

    function ci(e, t) {
        for (; null !== e;) {
            var n = e.alternate;
            if (e.childExpirationTime < t) e.childExpirationTime = t, null !== n && n.childExpirationTime < t && (n.childExpirationTime = t);
            else {
                if (!(null !== n && n.childExpirationTime < t)) break;
                n.childExpirationTime = t
            }
            e = e.return
        }
    }

    function fi(e, t) {
        oi = e, ai = ii = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (Va = !0), e.firstContext = null)
    }

    function di(e, t) {
        if (ai !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (ai = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === ii) {
                if (null === oi) throw Error(a(308));
                ii = t, oi.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else ii = ii.next = t;
        return e._currentValue
    }
    var pi = !1;

    function hi(e) {
        return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function mi(e) {
        return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function gi(e, t) {
        return {
            expirationTime: e,
            suspenseConfig: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function yi(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
    }

    function vi(e, t) {
        var n = e.alternate;
        if (null === n) {
            var r = e.updateQueue,
                o = null;
            null === r && (r = e.updateQueue = hi(e.memoizedState))
        } else r = e.updateQueue, o = n.updateQueue, null === r ? null === o ? (r = e.updateQueue = hi(e.memoizedState), o = n.updateQueue = hi(n.memoizedState)) : r = e.updateQueue = mi(o) : null === o && (o = n.updateQueue = mi(r));
        null === o || r === o ? yi(r, t) : null === r.lastUpdate || null === o.lastUpdate ? (yi(r, t), yi(o, t)) : (yi(r, t), o.lastUpdate = t)
    }

    function bi(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? e.updateQueue = hi(e.memoizedState) : wi(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
    }

    function wi(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = mi(t)), t
    }

    function _i(e, t, n, r, i, a) {
        switch (n.tag) {
            case 1:
                return "function" == typeof(e = n.payload) ? e.call(a, r, i) : e;
            case 3:
                e.effectTag = -4097 & e.effectTag | 64;
            case 0:
                if (null == (i = "function" == typeof(e = n.payload) ? e.call(a, r, i) : e)) break;
                return o({}, r, i);
            case 2:
                pi = !0
        }
        return r
    }

    function ki(e, t, n, r, o) {
        pi = !1;
        for (var i = (t = wi(e, t)).baseState, a = null, s = 0, l = t.firstUpdate, u = i; null !== l;) {
            var c = l.expirationTime;
            c < o ? (null === a && (a = l, i = u), s < c && (s = c)) : (Tl(c, l.suspenseConfig), u = _i(e, 0, l, u, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
        }
        for (c = null, l = t.firstCapturedUpdate; null !== l;) {
            var f = l.expirationTime;
            f < o ? (null === c && (c = l, null === a && (i = u)), s < f && (s = f)) : (u = _i(e, 0, l, u, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
        }
        null === a && (t.lastUpdate = null), null === c ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === a && null === c && (i = u), t.baseState = i, t.firstUpdate = a, t.firstCapturedUpdate = c, Al(s), e.expirationTime = s, e.memoizedState = u
    }

    function xi(e, t, n) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), Ei(t.firstEffect, n), t.firstEffect = t.lastEffect = null, Ei(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function Ei(e, t) {
        for (; null !== e;) {
            var n = e.callback;
            if (null !== n) {
                e.callback = null;
                var r = t;
                if ("function" != typeof n) throw Error(a(191, n));
                n.call(r)
            }
            e = e.nextEffect
        }
    }
    var Ci = F.ReactCurrentBatchConfig,
        Si = (new r.Component).refs;

    function Ti(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : o({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
    }
    var Ai = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && et(e) === e
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = hl(),
                o = Ci.suspense;
            (o = gi(r = ml(r, e, o), o)).payload = t, null != n && (o.callback = n), vi(e, o), gl(e, r)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = hl(),
                o = Ci.suspense;
            (o = gi(r = ml(r, e, o), o)).tag = 1, o.payload = t, null != n && (o.callback = n), vi(e, o), gl(e, r)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var n = hl(),
                r = Ci.suspense;
            (r = gi(n = ml(n, e, r), r)).tag = 2, null != t && (r.callback = t), vi(e, r), gl(e, n)
        }
    };

    function Mi(e, t, n, r, o, i, a) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || (!no(n, r) || !no(o, i))
    }

    function Pi(e, t, n) {
        var r = !1,
            o = go,
            i = t.contextType;
        return "object" == typeof i && null !== i ? i = di(i) : (o = _o(t) ? bo : yo.current, i = (r = null != (r = t.contextTypes)) ? wo(e, o) : go), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ai, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
    }

    function Ii(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ai.enqueueReplaceState(t, t.state, null)
    }

    function Ni(e, t, n, r) {
        var o = e.stateNode;
        o.props = n, o.state = e.memoizedState, o.refs = Si;
        var i = t.contextType;
        "object" == typeof i && null !== i ? o.context = di(i) : (i = _o(t) ? bo : yo.current, o.context = wo(e, i)), null !== (i = e.updateQueue) && (ki(e, i, n, o, r), o.state = e.memoizedState), "function" == typeof(i = t.getDerivedStateFromProps) && (Ti(e, t, i, n), o.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof o.getSnapshotBeforeUpdate || "function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount || (t = o.state, "function" == typeof o.componentWillMount && o.componentWillMount(), "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && Ai.enqueueReplaceState(o, o.state, null), null !== (i = e.updateQueue) && (ki(e, i, n, o, r), o.state = e.memoizedState)), "function" == typeof o.componentDidMount && (e.effectTag |= 4)
    }
    var Fi = Array.isArray;

    function Oi(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(a(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(a(147, e));
                var o = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o ? t.ref : ((t = function(e) {
                    var t = r.refs;
                    t === Si && (t = r.refs = {}), null === e ? delete t[o] : t[o] = e
                })._stringRef = o, t)
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e))
        }
        return e
    }

    function Ri(e, t) {
        if ("textarea" !== e.type) throw Error(a(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }

    function Bi(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function o(e, t, n) {
            return (e = Gl(e, t)).index = 0, e.sibling = null, e
        }

        function i(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
        }

        function s(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function l(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Kl(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
        }

        function u(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = Oi(e, t, n), r.return = e, r) : ((r = Xl(n.type, n.key, n.props, null, e.mode, r)).ref = Oi(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Jl(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag ? ((t = Ql(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
        }

        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Kl("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case B:
                        return (n = Xl(t.type, t.key, t.props, null, e.mode, n)).ref = Oi(e, null, t), n.return = e, n;
                    case D:
                        return (t = Jl(t, e.mode, n)).return = e, t
                }
                if (Fi(t) || Q(t)) return (t = Ql(t, e.mode, n, null)).return = e, t;
                Ri(e, t)
            }
            return null
        }

        function p(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== o ? null : l(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case B:
                        return n.key === o ? n.type === U ? f(e, t, n.props.children, r, o) : u(e, t, n, r) : null;
                    case D:
                        return n.key === o ? c(e, t, n, r) : null
                }
                if (Fi(n) || Q(n)) return null !== o ? null : f(e, t, n, r, null);
                Ri(e, n)
            }
            return null
        }

        function h(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, o);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case B:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === U ? f(t, e, r.props.children, o, r.key) : u(t, e, r, o);
                    case D:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                }
                if (Fi(r) || Q(r)) return f(t, e = e.get(n) || null, r, o, null);
                Ri(t, r)
            }
            return null
        }

        function m(o, a, s, l) {
            for (var u = null, c = null, f = a, m = a = 0, g = null; null !== f && m < s.length; m++) {
                f.index > m ? (g = f, f = null) : g = f.sibling;
                var y = p(o, f, s[m], l);
                if (null === y) {
                    null === f && (f = g);
                    break
                }
                e && f && null === y.alternate && t(o, f), a = i(y, a, m), null === c ? u = y : c.sibling = y, c = y, f = g
            }
            if (m === s.length) return n(o, f), u;
            if (null === f) {
                for (; m < s.length; m++) null !== (f = d(o, s[m], l)) && (a = i(f, a, m), null === c ? u = f : c.sibling = f, c = f);
                return u
            }
            for (f = r(o, f); m < s.length; m++) null !== (g = h(f, o, m, s[m], l)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), a = i(g, a, m), null === c ? u = g : c.sibling = g, c = g);
            return e && f.forEach((function(e) {
                return t(o, e)
            })), u
        }

        function g(o, s, l, u) {
            var c = Q(l);
            if ("function" != typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (var f = c = null, m = s, g = s = 0, y = null, v = l.next(); null !== m && !v.done; g++, v = l.next()) {
                m.index > g ? (y = m, m = null) : y = m.sibling;
                var b = p(o, m, v.value, u);
                if (null === b) {
                    null === m && (m = y);
                    break
                }
                e && m && null === b.alternate && t(o, m), s = i(b, s, g), null === f ? c = b : f.sibling = b, f = b, m = y
            }
            if (v.done) return n(o, m), c;
            if (null === m) {
                for (; !v.done; g++, v = l.next()) null !== (v = d(o, v.value, u)) && (s = i(v, s, g), null === f ? c = v : f.sibling = v, f = v);
                return c
            }
            for (m = r(o, m); !v.done; g++, v = l.next()) null !== (v = h(m, o, g, v.value, u)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), s = i(v, s, g), null === f ? c = v : f.sibling = v, f = v);
            return e && m.forEach((function(e) {
                return t(o, e)
            })), c
        }
        return function(e, r, i, l) {
            var u = "object" == typeof i && null !== i && i.type === U && null === i.key;
            u && (i = i.props.children);
            var c = "object" == typeof i && null !== i;
            if (c) switch (i.$$typeof) {
                case B:
                    e: {
                        for (c = i.key, u = r; null !== u;) {
                            if (u.key === c) {
                                if (7 === u.tag ? i.type === U : u.elementType === i.type) {
                                    n(e, u.sibling), (r = o(u, i.type === U ? i.props.children : i.props)).ref = Oi(e, u, i), r.return = e, e = r;
                                    break e
                                }
                                n(e, u);
                                break
                            }
                            t(e, u), u = u.sibling
                        }
                        i.type === U ? ((r = Ql(i.props.children, e.mode, l, i.key)).return = e, e = r) : ((l = Xl(i.type, i.key, i.props, null, e.mode, l)).ref = Oi(e, r, i), l.return = e, e = l)
                    }
                    return s(e);
                case D:
                    e: {
                        for (u = i.key; null !== r;) {
                            if (r.key === u) {
                                if (4 === r.tag && r.stateNode.containerInfo === i.containerInfo && r.stateNode.implementation === i.implementation) {
                                    n(e, r.sibling), (r = o(r, i.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }(r = Jl(i, e.mode, l)).return = e, e = r
                    }
                    return s(e)
            }
            if ("string" == typeof i || "number" == typeof i) return i = "" + i, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, i)).return = e, e = r) : (n(e, r), (r = Kl(i, e.mode, l)).return = e, e = r), s(e);
            if (Fi(i)) return m(e, r, i, l);
            if (Q(i)) return g(e, r, i, l);
            if (c && Ri(e, i), void 0 === i && !u) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(a(152, e.displayName || e.name || "Component"))
            }
            return n(e, r)
        }
    }
    var Di = Bi(!0),
        Ui = Bi(!1),
        Li = {},
        zi = {
            current: Li
        },
        ji = {
            current: Li
        },
        Hi = {
            current: Li
        };

    function qi(e) {
        if (e === Li) throw Error(a(174));
        return e
    }

    function Wi(e, t) {
        mo(Hi, t), mo(ji, e), mo(zi, Li);
        var n = t.nodeType;
        switch (n) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : ze(null, "");
                break;
            default:
                t = ze(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
        }
        ho(zi), mo(zi, t)
    }

    function Vi(e) {
        ho(zi), ho(ji), ho(Hi)
    }

    function $i(e) {
        qi(Hi.current);
        var t = qi(zi.current),
            n = ze(t, e.type);
        t !== n && (mo(ji, e), mo(zi, n))
    }

    function Yi(e) {
        ji.current === e && (ho(zi), ho(ji))
    }
    var Gi = {
        current: 0
    };

    function Xi(e) {
        for (var t = e; null !== t;) {
            if (13 === t.tag) {
                var n = t.memoizedState;
                if (null !== n && (null === (n = n.dehydrated) || n.data === Jn || n.data === Zn)) return t
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                if (0 != (64 & t.effectTag)) return t
            } else if (null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return null;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
        return null
    }

    function Qi(e, t) {
        return {
            responder: e,
            props: t
        }
    }
    var Ki = F.ReactCurrentDispatcher,
        Ji = F.ReactCurrentBatchConfig,
        Zi = 0,
        ea = null,
        ta = null,
        na = null,
        ra = null,
        oa = null,
        ia = null,
        aa = 0,
        sa = null,
        la = 0,
        ua = !1,
        ca = null,
        fa = 0;

    function da() {
        throw Error(a(321))
    }

    function pa(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!eo(e[n], t[n])) return !1;
        return !0
    }

    function ha(e, t, n, r, o, i) {
        if (Zi = i, ea = t, na = null !== e ? e.memoizedState : null, Ki.current = null === na ? Fa : Oa, t = n(r, o), ua) {
            do {
                ua = !1, fa += 1, na = null !== e ? e.memoizedState : null, ia = ra, sa = oa = ta = null, Ki.current = Oa, t = n(r, o)
            } while (ua);
            ca = null, fa = 0
        }
        if (Ki.current = Na, (e = ea).memoizedState = ra, e.expirationTime = aa, e.updateQueue = sa, e.effectTag |= la, e = null !== ta && null !== ta.next, Zi = 0, ia = oa = ra = na = ta = ea = null, aa = 0, sa = null, la = 0, e) throw Error(a(300));
        return t
    }

    function ma() {
        Ki.current = Na, Zi = 0, ia = oa = ra = na = ta = ea = null, aa = 0, sa = null, la = 0, ua = !1, ca = null, fa = 0
    }

    function ga() {
        var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === oa ? ra = oa = e : oa = oa.next = e, oa
    }

    function ya() {
        if (null !== ia) ia = (oa = ia).next, na = null !== (ta = na) ? ta.next : null;
        else {
            if (null === na) throw Error(a(310));
            var e = {
                memoizedState: (ta = na).memoizedState,
                baseState: ta.baseState,
                queue: ta.queue,
                baseUpdate: ta.baseUpdate,
                next: null
            };
            oa = null === oa ? ra = e : oa.next = e, na = ta.next
        }
        return oa
    }

    function va(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function ba(e) {
        var t = ya(),
            n = t.queue;
        if (null === n) throw Error(a(311));
        if (n.lastRenderedReducer = e, 0 < fa) {
            var r = n.dispatch;
            if (null !== ca) {
                var o = ca.get(n);
                if (void 0 !== o) {
                    ca.delete(n);
                    var i = t.memoizedState;
                    do {
                        i = e(i, o.action), o = o.next
                    } while (null !== o);
                    return eo(i, t.memoizedState) || (Va = !0), t.memoizedState = i, t.baseUpdate === n.last && (t.baseState = i), n.lastRenderedState = i, [i, r]
                }
            }
            return [t.memoizedState, r]
        }
        r = n.last;
        var s = t.baseUpdate;
        if (i = t.baseState, null !== s ? (null !== r && (r.next = null), r = s.next) : r = null !== r ? r.next : null, null !== r) {
            var l = o = null,
                u = r,
                c = !1;
            do {
                var f = u.expirationTime;
                f < Zi ? (c || (c = !0, l = s, o = i), f > aa && Al(aa = f)) : (Tl(f, u.suspenseConfig), i = u.eagerReducer === e ? u.eagerState : e(i, u.action)), s = u, u = u.next
            } while (null !== u && u !== r);
            c || (l = s, o = i), eo(i, t.memoizedState) || (Va = !0), t.memoizedState = i, t.baseUpdate = l, t.baseState = o, n.lastRenderedState = i
        }
        return [t.memoizedState, n.dispatch]
    }

    function wa(e) {
        var t = ga();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: va,
            lastRenderedState: e
        }).dispatch = Ia.bind(null, ea, e), [t.memoizedState, e]
    }

    function _a(e) {
        return ba(va)
    }

    function ka(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === sa ? (sa = {
            lastEffect: null
        }).lastEffect = e.next = e : null === (t = sa.lastEffect) ? sa.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, sa.lastEffect = e), e
    }

    function xa(e, t, n, r) {
        var o = ga();
        la |= e, o.memoizedState = ka(t, n, void 0, void 0 === r ? null : r)
    }

    function Ea(e, t, n, r) {
        var o = ya();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== ta) {
            var a = ta.memoizedState;
            if (i = a.destroy, null !== r && pa(r, a.deps)) return void ka(0, n, i, r)
        }
        la |= e, o.memoizedState = ka(t, n, i, r)
    }

    function Ca(e, t) {
        return xa(516, 192, e, t)
    }

    function Sa(e, t) {
        return Ea(516, 192, e, t)
    }

    function Ta(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
            t.current = null
        }) : void 0
    }

    function Aa() {}

    function Ma(e, t) {
        return ga().memoizedState = [e, void 0 === t ? null : t], e
    }

    function Pa(e, t) {
        var n = ya();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && pa(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Ia(e, t, n) {
        if (!(25 > fa)) throw Error(a(301));
        var r = e.alternate;
        if (e === ea || null !== r && r === ea)
            if (ua = !0, e = {
                    expirationTime: Zi,
                    suspenseConfig: null,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === ca && (ca = new Map), void 0 === (n = ca.get(t))) ca.set(t, e);
            else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
            } else {
            var o = hl(),
                i = Ci.suspense;
            i = {
                expirationTime: o = ml(o, e, i),
                suspenseConfig: i,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var s = t.last;
            if (null === s) i.next = i;
            else {
                var l = s.next;
                null !== l && (i.next = l), s.next = i
            }
            if (t.last = i, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try {
                var u = t.lastRenderedState,
                    c = r(u, n);
                if (i.eagerReducer = r, i.eagerState = c, eo(c, u)) return
            } catch (e) {}
            gl(e, o)
        }
    }
    var Na = {
            readContext: di,
            useCallback: da,
            useContext: da,
            useEffect: da,
            useImperativeHandle: da,
            useLayoutEffect: da,
            useMemo: da,
            useReducer: da,
            useRef: da,
            useState: da,
            useDebugValue: da,
            useResponder: da,
            useDeferredValue: da,
            useTransition: da
        },
        Fa = {
            readContext: di,
            useCallback: Ma,
            useContext: di,
            useEffect: Ca,
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, xa(4, 36, Ta.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return xa(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var n = ga();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = ga();
                return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = Ia.bind(null, ea, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, ga().memoizedState = e
            },
            useState: wa,
            useDebugValue: Aa,
            useResponder: Qi,
            useDeferredValue: function(e, t) {
                var n = wa(e),
                    r = n[0],
                    o = n[1];
                return Ca((function() {
                    i.unstable_next((function() {
                        var n = Ji.suspense;
                        Ji.suspense = void 0 === t ? null : t;
                        try {
                            o(e)
                        } finally {
                            Ji.suspense = n
                        }
                    }))
                }), [e, t]), r
            },
            useTransition: function(e) {
                var t = wa(!1),
                    n = t[0],
                    r = t[1];
                return [Ma((function(t) {
                    r(!0), i.unstable_next((function() {
                        var n = Ji.suspense;
                        Ji.suspense = void 0 === e ? null : e;
                        try {
                            r(!1), t()
                        } finally {
                            Ji.suspense = n
                        }
                    }))
                }), [e, n]), n]
            }
        },
        Oa = {
            readContext: di,
            useCallback: Pa,
            useContext: di,
            useEffect: Sa,
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, Ea(4, 36, Ta.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Ea(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var n = ya();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && pa(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            },
            useReducer: ba,
            useRef: function() {
                return ya().memoizedState
            },
            useState: _a,
            useDebugValue: Aa,
            useResponder: Qi,
            useDeferredValue: function(e, t) {
                var n = _a(),
                    r = n[0],
                    o = n[1];
                return Sa((function() {
                    i.unstable_next((function() {
                        var n = Ji.suspense;
                        Ji.suspense = void 0 === t ? null : t;
                        try {
                            o(e)
                        } finally {
                            Ji.suspense = n
                        }
                    }))
                }), [e, t]), r
            },
            useTransition: function(e) {
                var t = _a(),
                    n = t[0],
                    r = t[1];
                return [Pa((function(t) {
                    r(!0), i.unstable_next((function() {
                        var n = Ji.suspense;
                        Ji.suspense = void 0 === e ? null : e;
                        try {
                            r(!1), t()
                        } finally {
                            Ji.suspense = n
                        }
                    }))
                }), [e, n]), n]
            }
        },
        Ra = null,
        Ba = null,
        Da = !1;

    function Ua(e, t) {
        var n = $l(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function La(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function za(e) {
        if (Da) {
            var t = Ba;
            if (t) {
                var n = t;
                if (!La(e, t)) {
                    if (!(t = ar(n.nextSibling)) || !La(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Da = !1, void(Ra = e);
                    Ua(Ra, n)
                }
                Ra = e, Ba = ar(t.firstChild)
            } else e.effectTag = -1025 & e.effectTag | 2, Da = !1, Ra = e
        }
    }

    function ja(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        Ra = e
    }

    function Ha(e) {
        if (e !== Ra) return !1;
        if (!Da) return ja(e), Da = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !rr(t, e.memoizedProps))
            for (t = Ba; t;) Ua(e, t), t = ar(t.nextSibling);
        if (ja(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if (n === Kn) {
                            if (0 === t) {
                                Ba = ar(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== Qn && n !== Zn && n !== Jn || t++
                    }
                    e = e.nextSibling
                }
                Ba = null
            }
        } else Ba = Ra ? ar(e.stateNode.nextSibling) : null;
        return !0
    }

    function qa() {
        Ba = Ra = null, Da = !1
    }
    var Wa = F.ReactCurrentOwner,
        Va = !1;

    function $a(e, t, n, r) {
        t.child = null === e ? Ui(t, null, n, r) : Di(t, e.child, n, r)
    }

    function Ya(e, t, n, r, o) {
        n = n.render;
        var i = t.ref;
        return fi(t, o), r = ha(e, t, n, r, i, o), null === e || Va ? (t.effectTag |= 1, $a(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= o && (e.expirationTime = 0), cs(e, t, o))
    }

    function Ga(e, t, n, r, o, i) {
        if (null === e) {
            var a = n.type;
            return "function" != typeof a || Yl(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Xl(n.type, null, r, null, t.mode, i)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, Xa(e, t, a, r, o, i))
        }
        return a = e.child, o < i && (o = a.memoizedProps, (n = null !== (n = n.compare) ? n : no)(o, r) && e.ref === t.ref) ? cs(e, t, i) : (t.effectTag |= 1, (e = Gl(a, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function Xa(e, t, n, r, o, i) {
        return null !== e && no(e.memoizedProps, r) && e.ref === t.ref && (Va = !1, o < i) ? cs(e, t, i) : Ka(e, t, n, r, i)
    }

    function Qa(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function Ka(e, t, n, r, o) {
        var i = _o(n) ? bo : yo.current;
        return i = wo(t, i), fi(t, o), n = ha(e, t, n, r, i, o), null === e || Va ? (t.effectTag |= 1, $a(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= o && (e.expirationTime = 0), cs(e, t, o))
    }

    function Ja(e, t, n, r, o) {
        if (_o(n)) {
            var i = !0;
            So(t)
        } else i = !1;
        if (fi(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Pi(t, n, r), Ni(t, n, r, o), r = !0;
        else if (null === e) {
            var a = t.stateNode,
                s = t.memoizedProps;
            a.props = s;
            var l = a.context,
                u = n.contextType;
            "object" == typeof u && null !== u ? u = di(u) : u = wo(t, u = _o(n) ? bo : yo.current);
            var c = n.getDerivedStateFromProps,
                f = "function" == typeof c || "function" == typeof a.getSnapshotBeforeUpdate;
            f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== u) && Ii(t, a, r, u), pi = !1;
            var d = t.memoizedState;
            l = a.state = d;
            var p = t.updateQueue;
            null !== p && (ki(t, p, r, a, o), l = t.memoizedState), s !== r || d !== l || vo.current || pi ? ("function" == typeof c && (Ti(t, n, c, r), l = t.memoizedState), (s = pi || Mi(t, n, s, r, d, l, u)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), r = !1)
        } else a = t.stateNode, s = t.memoizedProps, a.props = t.type === t.elementType ? s : ni(t.type, s), l = a.context, "object" == typeof(u = n.contextType) && null !== u ? u = di(u) : u = wo(t, u = _o(n) ? bo : yo.current), (f = "function" == typeof(c = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== u) && Ii(t, a, r, u), pi = !1, l = t.memoizedState, d = a.state = l, null !== (p = t.updateQueue) && (ki(t, p, r, a, o), d = t.memoizedState), s !== r || l !== d || vo.current || pi ? ("function" == typeof c && (Ti(t, n, c, r), d = t.memoizedState), (c = pi || Mi(t, n, s, r, l, d, u)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, d, u), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, d, u)), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), a.props = r, a.state = d, a.context = u, r = c) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1);
        return Za(e, t, n, r, i, o)
    }

    function Za(e, t, n, r, o, i) {
        Qa(e, t);
        var a = 0 != (64 & t.effectTag);
        if (!r && !a) return o && To(t, n, !1), cs(e, t, i);
        r = t.stateNode, Wa.current = t;
        var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && a ? (t.child = Di(t, e.child, null, i), t.child = Di(t, null, s, i)) : $a(e, t, s, i), t.memoizedState = r.state, o && To(t, n, !0), t.child
    }

    function es(e) {
        var t = e.stateNode;
        t.pendingContext ? Eo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Eo(0, t.context, !1), Wi(e, t.containerInfo)
    }
    var ts, ns, rs, os, is = {
        dehydrated: null,
        retryTime: 0
    };

    function as(e, t, n) {
        var r, o = t.mode,
            i = t.pendingProps,
            a = Gi.current,
            s = !1;
        if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & a) && (null === e || null !== e.memoizedState)), r ? (s = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (a |= 1), mo(Gi, 1 & a), null === e) {
            if (void 0 !== i.fallback && za(t), s) {
                if (s = i.fallback, (i = Ql(null, o, 0, null)).return = t, 0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e;) e.return = i, e = e.sibling;
                return (n = Ql(s, o, n, null)).return = t, i.sibling = n, t.memoizedState = is, t.child = i, n
            }
            return o = i.children, t.memoizedState = null, t.child = Ui(t, null, o, n)
        }
        if (null !== e.memoizedState) {
            if (o = (e = e.child).sibling, s) {
                if (i = i.fallback, (n = Gl(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (s = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                    for (n.child = s; null !== s;) s.return = n, s = s.sibling;
                return (o = Gl(o, i, o.expirationTime)).return = t, n.sibling = o, n.childExpirationTime = 0, t.memoizedState = is, t.child = n, o
            }
            return n = Di(t, e.child, i.children, n), t.memoizedState = null, t.child = n
        }
        if (e = e.child, s) {
            if (s = i.fallback, (i = Ql(null, o, 0, null)).return = t, i.child = e, null !== e && (e.return = i), 0 == (2 & t.mode))
                for (e = null !== t.memoizedState ? t.child.child : t.child, i.child = e; null !== e;) e.return = i, e = e.sibling;
            return (n = Ql(s, o, n, null)).return = t, i.sibling = n, n.effectTag |= 2, i.childExpirationTime = 0, t.memoizedState = is, t.child = i, n
        }
        return t.memoizedState = null, t.child = Di(t, e, i.children, n)
    }

    function ss(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t), ci(e.return, t)
    }

    function ls(e, t, n, r, o, i) {
        var a = e.memoizedState;
        null === a ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: o,
            lastEffect: i
        } : (a.isBackwards = t, a.rendering = null, a.last = r, a.tail = n, a.tailExpiration = 0, a.tailMode = o, a.lastEffect = i)
    }

    function us(e, t, n) {
        var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
        if ($a(e, t, r.children, n), 0 != (2 & (r = Gi.current))) r = 1 & r | 2, t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && ss(e, n);
                else if (19 === e.tag) ss(e, n);
                else if (null !== e.child) {
                    e.child.return = e, e = e.child;
                    continue
                }
                if (e === t) break e;
                for (; null === e.sibling;) {
                    if (null === e.return || e.return === t) break e;
                    e = e.return
                }
                e.sibling.return = e.return, e = e.sibling
            }
            r &= 1
        }
        if (mo(Gi, r), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (o) {
            case "forwards":
                for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === Xi(e) && (o = n), n = n.sibling;
                null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ls(t, !1, o, n, i, t.lastEffect);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o;) {
                    if (null !== (e = o.alternate) && null === Xi(e)) {
                        t.child = o;
                        break
                    }
                    e = o.sibling, o.sibling = n, n = o, o = e
                }
                ls(t, !0, n, null, i, t.lastEffect);
                break;
            case "together":
                ls(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function cs(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && Al(r), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw Error(a(153));
        if (null !== t.child) {
            for (n = Gl(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Gl(e, e.pendingProps, e.expirationTime)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function fs(e) {
        e.effectTag |= 4
    }

    function ds(e, t) {
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                null === n ? e.tail = null : n.sibling = null;
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
    }

    function ps(e) {
        switch (e.tag) {
            case 1:
                _o(e.type) && ko();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (Vi(), xo(), 0 != (64 & (t = e.effectTag))) throw Error(a(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return Yi(e), null;
            case 13:
                return ho(Gi), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return ho(Gi), null;
            case 4:
                return Vi(), null;
            case 10:
                return ui(e), null;
            default:
                return null
        }
    }

    function hs(e, t) {
        return {
            value: e,
            source: t,
            stack: J(t)
        }
    }
    ts = function(e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, ns = function() {}, rs = function(e, t, n, r, i) {
        var a = e.memoizedProps;
        if (a !== r) {
            var s, l, u = t.stateNode;
            switch (qi(zi.current), e = null, n) {
                case "input":
                    a = Se(u, a), r = Se(u, r), e = [];
                    break;
                case "option":
                    a = Ne(u, a), r = Ne(u, r), e = [];
                    break;
                case "select":
                    a = o({}, a, {
                        value: void 0
                    }), r = o({}, r, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    a = Oe(u, a), r = Oe(u, r), e = [];
                    break;
                default:
                    "function" != typeof a.onClick && "function" == typeof r.onClick && (u.onclick = Wn)
            }
            for (s in jn(n, r), n = null, a)
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                    if ("style" === s)
                        for (l in u = a[s]) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
                    else "dangerouslySetInnerHTML" !== s && "children" !== s && "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (p.hasOwnProperty(s) ? e || (e = []) : (e = e || []).push(s, null));
            for (s in r) {
                var c = r[s];
                if (u = null != a ? a[s] : void 0, r.hasOwnProperty(s) && c !== u && (null != c || null != u))
                    if ("style" === s)
                        if (u) {
                            for (l in u) !u.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
                            for (l in c) c.hasOwnProperty(l) && u[l] !== c[l] && (n || (n = {}), n[l] = c[l])
                        } else n || (e || (e = []), e.push(s, n)), n = c;
                else "dangerouslySetInnerHTML" === s ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (e = e || []).push(s, "" + c)) : "children" === s ? u === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(s, "" + c) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && (p.hasOwnProperty(s) ? (null != c && qn(i, s), e || u === c || (e = [])) : (e = e || []).push(s, c))
            }
            n && (e = e || []).push("style", n), i = e, (t.updateQueue = i) && fs(t)
        }
    }, os = function(e, t, n, r) {
        n !== r && fs(t)
    };
    var ms = "function" == typeof WeakSet ? WeakSet : Set;

    function gs(e, t) {
        var n = t.source,
            r = t.stack;
        null === r && null !== n && (r = J(n)), null !== n && K(n.type), t = t.value, null !== e && 1 === e.tag && K(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function() {
                throw e
            }))
        }
    }

    function ys(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                zl(e, t)
            } else t.current = null
    }

    function vs(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                bs(2, 0, t);
                break;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps,
                        r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ni(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                }
                break;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                break;
            default:
                throw Error(a(163))
        }
    }

    function bs(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var r = n = n.next;
            do {
                if (0 != (r.tag & e)) {
                    var o = r.destroy;
                    r.destroy = void 0, void 0 !== o && o()
                }
                0 != (r.tag & t) && (o = r.create, r.destroy = o()), r = r.next
            } while (r !== n)
        }
    }

    function ws(e, t, n) {
        switch ("function" == typeof Wl && Wl(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var r = e.next;
                    Xo(97 < n ? 97 : n, (function() {
                        var e = r;
                        do {
                            var n = e.destroy;
                            if (void 0 !== n) {
                                var o = t;
                                try {
                                    n()
                                } catch (e) {
                                    zl(o, e)
                                }
                            }
                            e = e.next
                        } while (e !== r)
                    }))
                }
                break;
            case 1:
                ys(t), "function" == typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        zl(e, t)
                    }
                }(t, n);
                break;
            case 5:
                ys(t);
                break;
            case 4:
                Es(e, t, n)
        }
    }

    function _s(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && _s(t)
    }

    function ks(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function xs(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (ks(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw Error(a(160))
        }
        switch (t = n.stateNode, n.tag) {
            case 5:
                var r = !1;
                break;
            case 3:
            case 4:
                t = t.containerInfo, r = !0;
                break;
            default:
                throw Error(a(161))
        }
        16 & n.effectTag && (qe(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || ks(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        for (var o = e;;) {
            var i = 5 === o.tag || 6 === o.tag;
            if (i) {
                var s = i ? o.stateNode : o.stateNode.instance;
                if (n)
                    if (r) {
                        var l = s;
                        s = n, 8 === (i = t).nodeType ? i.parentNode.insertBefore(l, s) : i.insertBefore(l, s)
                    } else t.insertBefore(s, n);
                else r ? (8 === (l = t).nodeType ? (i = l.parentNode).insertBefore(s, l) : (i = l).appendChild(s), null != (l = l._reactRootContainer) || null !== i.onclick || (i.onclick = Wn)) : t.appendChild(s)
            } else if (4 !== o.tag && null !== o.child) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === e) break;
            for (; null === o.sibling;) {
                if (null === o.return || o.return === e) return;
                o = o.return
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }

    function Es(e, t, n) {
        for (var r, o, i = t, s = !1;;) {
            if (!s) {
                s = i.return;
                e: for (;;) {
                    if (null === s) throw Error(a(160));
                    switch (r = s.stateNode, s.tag) {
                        case 5:
                            o = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, o = !0;
                            break e
                    }
                    s = s.return
                }
                s = !0
            }
            if (5 === i.tag || 6 === i.tag) {
                e: for (var l = e, u = i, c = n, f = u;;)
                    if (ws(l, f, c), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
                    else {
                        if (f === u) break;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === u) break e;
                            f = f.return
                        }
                        f.sibling.return = f.return, f = f.sibling
                    }o ? (l = r, u = i.stateNode, 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u)) : r.removeChild(i.stateNode)
            } else if (4 === i.tag) {
                if (null !== i.child) {
                    r = i.stateNode.containerInfo, o = !0, i.child.return = i, i = i.child;
                    continue
                }
            } else if (ws(e, i, n), null !== i.child) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === t) break;
            for (; null === i.sibling;) {
                if (null === i.return || i.return === t) return;
                4 === (i = i.return).tag && (s = !1)
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }

    function Cs(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                bs(4, 8, t);
                break;
            case 1:
                break;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps,
                        o = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var i = t.updateQueue;
                    if (t.updateQueue = null, null !== i) {
                        for (n[cr] = r, "input" === e && "radio" === r.type && null != r.name && Ae(n, r), Hn(e, o), t = Hn(e, r), o = 0; o < i.length; o += 2) {
                            var s = i[o],
                                l = i[o + 1];
                            "style" === s ? Ln(n, l) : "dangerouslySetInnerHTML" === s ? He(n, l) : "children" === s ? qe(n, l) : ke(n, s, l, t)
                        }
                        switch (e) {
                            case "input":
                                Me(n, r);
                                break;
                            case "textarea":
                                Be(n, r);
                                break;
                            case "select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Fe(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Fe(n, !!r.multiple, r.defaultValue, !0) : Fe(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                break;
            case 6:
                if (null === t.stateNode) throw Error(a(162));
                t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
                (t = t.stateNode).hydrate && (t.hydrate = !1, Ct(t.containerInfo));
                break;
            case 12:
                break;
            case 13:
                if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, tl = $o()), null !== n) e: for (e = n;;) {
                    if (5 === e.tag) i = e.stateNode, r ? "function" == typeof(i = i.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (i = e.stateNode, o = null != (o = e.memoizedProps.style) && o.hasOwnProperty("display") ? o.display : null, i.style.display = Un("display", o));
                    else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (i = e.child.sibling).return = e, e = i;
                            continue
                        }
                        if (null !== e.child) {
                            e.child.return = e, e = e.child;
                            continue
                        }
                    }
                    if (e === n) break e;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === n) break e;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                Ss(t);
                break;
            case 19:
                Ss(t);
                break;
            case 17:
            case 20:
            case 21:
                break;
            default:
                throw Error(a(163))
        }
    }

    function Ss(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new ms), t.forEach((function(t) {
                var r = Hl.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r))
            }))
        }
    }
    var Ts = "function" == typeof WeakMap ? WeakMap : Map;

    function As(e, t, n) {
        (n = gi(n, null)).tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            ol || (ol = !0, il = r), gs(e, t)
        }, n
    }

    function Ms(e, t, n) {
        (n = gi(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var o = t.value;
            n.payload = function() {
                return gs(e, t), r(o)
            }
        }
        var i = e.stateNode;
        return null !== i && "function" == typeof i.componentDidCatch && (n.callback = function() {
            "function" != typeof r && (null === al ? al = new Set([this]) : al.add(this), gs(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ""
            })
        }), n
    }
    var Ps, Is = Math.ceil,
        Ns = F.ReactCurrentDispatcher,
        Fs = F.ReactCurrentOwner,
        Os = 0,
        Rs = 8,
        Bs = 16,
        Ds = 32,
        Us = 0,
        Ls = 1,
        zs = 2,
        js = 3,
        Hs = 4,
        qs = 5,
        Ws = Os,
        Vs = null,
        $s = null,
        Ys = 0,
        Gs = Us,
        Xs = null,
        Qs = 1073741823,
        Ks = 1073741823,
        Js = null,
        Zs = 0,
        el = !1,
        tl = 0,
        nl = 500,
        rl = null,
        ol = !1,
        il = null,
        al = null,
        sl = !1,
        ll = null,
        ul = 90,
        cl = null,
        fl = 0,
        dl = null,
        pl = 0;

    function hl() {
        return (Ws & (Bs | Ds)) !== Os ? 1073741821 - ($o() / 10 | 0) : 0 !== pl ? pl : pl = 1073741821 - ($o() / 10 | 0)
    }

    function ml(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = Yo();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((Ws & Bs) !== Os) return Ys;
        if (null !== n) e = ti(e, 0 | n.timeoutMs || 5e3, 250);
        else switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = ti(e, 150, 100);
                break;
            case 97:
            case 96:
                e = ti(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(a(326))
        }
        return null !== Vs && e === Ys && --e, e
    }

    function gl(e, t) {
        if (50 < fl) throw fl = 0, dl = null, Error(a(185));
        if (null !== (e = yl(e, t))) {
            var n = Yo();
            1073741823 === t ? (Ws & Rs) !== Os && (Ws & (Bs | Ds)) === Os ? _l(e) : (bl(e), Ws === Os && Jo()) : bl(e), (4 & Ws) === Os || 98 !== n && 99 !== n || (null === cl ? cl = new Map([
                [e, t]
            ]) : (void 0 === (n = cl.get(e)) || n > t) && cl.set(e, t))
        }
    }

    function yl(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
            o = null;
        if (null === r && 3 === e.tag) o = e.stateNode;
        else
            for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                    o = r.stateNode;
                    break
                }
                r = r.return
            }
        return null !== o && (Vs === o && (Al(t), Gs === Hs && tu(o, Ys)), nu(o, t)), o
    }

    function vl(e) {
        var t = e.lastExpiredTime;
        return 0 !== t ? t : eu(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
    }

    function bl(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Ko(_l.bind(null, e));
        else {
            var t = vl(e),
                n = e.callbackNode;
            if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
            else {
                var r = hl();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var o = e.callbackPriority;
                    if (e.callbackExpirationTime === t && o >= r) return;
                    n !== zo && Po(n)
                }
                e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Ko(_l.bind(null, e)) : Qo(r, wl.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - $o()
                }), e.callbackNode = t
            }
        }
    }

    function wl(e, t) {
        if (pl = 0, t) return ru(e, t = hl()), bl(e), null;
        var n = vl(e);
        if (0 !== n) {
            if (t = e.callbackNode, (Ws & (Bs | Ds)) !== Os) throw Error(a(327));
            if (Dl(), e === Vs && n === Ys || El(e, n), null !== $s) {
                var r = Ws;
                Ws |= Bs;
                for (var o = Sl();;) try {
                    Pl();
                    break
                } catch (t) {
                    Cl(e, t)
                }
                if (si(), Ws = r, Ns.current = o, Gs === Ls) throw t = Xs, El(e, n), tu(e, n), bl(e), t;
                if (null === $s) switch (o = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = Gs, Vs = null, r) {
                    case Us:
                    case Ls:
                        throw Error(a(345));
                    case zs:
                        ru(e, 2 < n ? 2 : n);
                        break;
                    case js:
                        if (tu(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Fl(o)), 1073741823 === Qs && 10 < (o = tl + nl - $o())) {
                            if (el) {
                                var i = e.lastPingedTime;
                                if (0 === i || i >= n) {
                                    e.lastPingedTime = n, El(e, n);
                                    break
                                }
                            }
                            if (0 !== (i = vl(e)) && i !== n) break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break
                            }
                            e.timeoutHandle = or(Ol.bind(null, e), o);
                            break
                        }
                        Ol(e);
                        break;
                    case Hs:
                        if (tu(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Fl(o)), el && (0 === (o = e.lastPingedTime) || o >= n)) {
                            e.lastPingedTime = n, El(e, n);
                            break
                        }
                        if (0 !== (o = vl(e)) && o !== n) break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== Ks ? r = 10 * (1073741821 - Ks) - $o() : 1073741823 === Qs ? r = 0 : (r = 10 * (1073741821 - Qs) - 5e3, 0 > (r = (o = $o()) - r) && (r = 0), (n = 10 * (1073741821 - n) - o) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Is(r / 1960)) - r) && (r = n)), 10 < r) {
                            e.timeoutHandle = or(Ol.bind(null, e), r);
                            break
                        }
                        Ol(e);
                        break;
                    case qs:
                        if (1073741823 !== Qs && null !== Js) {
                            i = Qs;
                            var s = Js;
                            if (0 >= (r = 0 | s.busyMinDurationMs) ? r = 0 : (o = 0 | s.busyDelayMs, r = (i = $o() - (10 * (1073741821 - i) - (0 | s.timeoutMs || 5e3))) <= o ? 0 : o + r - i), 10 < r) {
                                tu(e, n), e.timeoutHandle = or(Ol.bind(null, e), r);
                                break
                            }
                        }
                        Ol(e);
                        break;
                    default:
                        throw Error(a(329))
                }
                if (bl(e), e.callbackNode === t) return wl.bind(null, e)
            }
        }
        return null
    }

    function _l(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) Ol(e);
        else {
            if ((Ws & (Bs | Ds)) !== Os) throw Error(a(327));
            if (Dl(), e === Vs && t === Ys || El(e, t), null !== $s) {
                var n = Ws;
                Ws |= Bs;
                for (var r = Sl();;) try {
                    Ml();
                    break
                } catch (t) {
                    Cl(e, t)
                }
                if (si(), Ws = n, Ns.current = r, Gs === Ls) throw n = Xs, El(e, t), tu(e, t), bl(e), n;
                if (null !== $s) throw Error(a(261));
                e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, Vs = null, Ol(e), bl(e)
            }
        }
        return null
    }

    function kl(e, t) {
        var n = Ws;
        Ws |= 1;
        try {
            return e(t)
        } finally {
            (Ws = n) === Os && Jo()
        }
    }

    function xl(e, t) {
        var n = Ws;
        Ws &= -2, Ws |= Rs;
        try {
            return e(t)
        } finally {
            (Ws = n) === Os && Jo()
        }
    }

    function El(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, ir(n)), null !== $s)
            for (n = $s.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        var o = r.type.childContextTypes;
                        null != o && ko();
                        break;
                    case 3:
                        Vi(), xo();
                        break;
                    case 5:
                        Yi(r);
                        break;
                    case 4:
                        Vi();
                        break;
                    case 13:
                    case 19:
                        ho(Gi);
                        break;
                    case 10:
                        ui(r)
                }
                n = n.return
            }
        Vs = e, $s = Gl(e.current, null), Ys = t, Gs = Us, Xs = null, Ks = Qs = 1073741823, Js = null, Zs = 0, el = !1
    }

    function Cl(e, t) {
        for (;;) {
            try {
                if (si(), ma(), null === $s || null === $s.return) return Gs = Ls, Xs = t, null;
                e: {
                    var n = e,
                        r = $s.return,
                        o = $s,
                        i = t;
                    if (t = Ys, o.effectTag |= 2048, o.firstEffect = o.lastEffect = null, null !== i && "object" == typeof i && "function" == typeof i.then) {
                        var a = i,
                            s = 0 != (1 & Gi.current),
                            l = r;
                        do {
                            var u;
                            if (u = 13 === l.tag) {
                                var c = l.memoizedState;
                                if (null !== c) u = null !== c.dehydrated;
                                else {
                                    var f = l.memoizedProps;
                                    u = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !s)
                                }
                            }
                            if (u) {
                                var d = l.updateQueue;
                                if (null === d) {
                                    var p = new Set;
                                    p.add(a), l.updateQueue = p
                                } else d.add(a);
                                if (0 == (2 & l.mode)) {
                                    if (l.effectTag |= 64, o.effectTag &= -2981, 1 === o.tag)
                                        if (null === o.alternate) o.tag = 17;
                                        else {
                                            var h = gi(1073741823, null);
                                            h.tag = 2, vi(o, h)
                                        }
                                    o.expirationTime = 1073741823;
                                    break e
                                }
                                i = void 0, o = t;
                                var m = n.pingCache;
                                if (null === m ? (m = n.pingCache = new Ts, i = new Set, m.set(a, i)) : void 0 === (i = m.get(a)) && (i = new Set, m.set(a, i)), !i.has(o)) {
                                    i.add(o);
                                    var g = jl.bind(null, n, a, o);
                                    a.then(g, g)
                                }
                                l.effectTag |= 4096, l.expirationTime = t;
                                break e
                            }
                            l = l.return
                        } while (null !== l);
                        i = Error((K(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + J(o))
                    }
                    Gs !== qs && (Gs = zs), i = hs(i, o), l = r;
                    do {
                        switch (l.tag) {
                            case 3:
                                a = i, l.effectTag |= 4096, l.expirationTime = t, bi(l, As(l, a, t));
                                break e;
                            case 1:
                                a = i;
                                var y = l.type,
                                    v = l.stateNode;
                                if (0 == (64 & l.effectTag) && ("function" == typeof y.getDerivedStateFromError || null !== v && "function" == typeof v.componentDidCatch && (null === al || !al.has(v)))) {
                                    l.effectTag |= 4096, l.expirationTime = t, bi(l, Ms(l, a, t));
                                    break e
                                }
                        }
                        l = l.return
                    } while (null !== l)
                }
                $s = Nl($s)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function Sl() {
        var e = Ns.current;
        return Ns.current = Na, null === e ? Na : e
    }

    function Tl(e, t) {
        e < Qs && 2 < e && (Qs = e), null !== t && e < Ks && 2 < e && (Ks = e, Js = t)
    }

    function Al(e) {
        e > Zs && (Zs = e)
    }

    function Ml() {
        for (; null !== $s;) $s = Il($s)
    }

    function Pl() {
        for (; null !== $s && !Io();) $s = Il($s)
    }

    function Il(e) {
        var t = Ps(e.alternate, e, Ys);
        return e.memoizedProps = e.pendingProps, null === t && (t = Nl(e)), Fs.current = null, t
    }

    function Nl(e) {
        $s = e;
        do {
            var t = $s.alternate;
            if (e = $s.return, 0 == (2048 & $s.effectTag)) {
                e: {
                    var n = t,
                        r = Ys,
                        i = (t = $s).pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            _o(t.type) && ko();
                            break;
                        case 3:
                            Vi(), xo(), (i = t.stateNode).pendingContext && (i.context = i.pendingContext, i.pendingContext = null), (null === n || null === n.child) && Ha(t) && fs(t), ns(t);
                            break;
                        case 5:
                            Yi(t), r = qi(Hi.current);
                            var s = t.type;
                            if (null !== n && null != t.stateNode) rs(n, t, s, i, r), n.ref !== t.ref && (t.effectTag |= 128);
                            else if (i) {
                                var l = qi(zi.current);
                                if (Ha(t)) {
                                    var u = (i = t).stateNode;
                                    n = i.type;
                                    var c = i.memoizedProps,
                                        f = r;
                                    switch (u[ur] = i, u[cr] = c, s = void 0, r = u, n) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Cn("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (u = 0; u < Ze.length; u++) Cn(Ze[u], r);
                                            break;
                                        case "source":
                                            Cn("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Cn("error", r), Cn("load", r);
                                            break;
                                        case "form":
                                            Cn("reset", r), Cn("submit", r);
                                            break;
                                        case "details":
                                            Cn("toggle", r);
                                            break;
                                        case "input":
                                            Te(r, c), Cn("invalid", r), qn(f, "onChange");
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!c.multiple
                                            }, Cn("invalid", r), qn(f, "onChange");
                                            break;
                                        case "textarea":
                                            Re(r, c), Cn("invalid", r), qn(f, "onChange")
                                    }
                                    for (s in jn(n, c), u = null, c) c.hasOwnProperty(s) && (l = c[s], "children" === s ? "string" == typeof l ? r.textContent !== l && (u = ["children", l]) : "number" == typeof l && r.textContent !== "" + l && (u = ["children", "" + l]) : p.hasOwnProperty(s) && null != l && qn(f, s));
                                    switch (n) {
                                        case "input":
                                            Ee(r), Pe(r, c, !0);
                                            break;
                                        case "textarea":
                                            Ee(r), De(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof c.onClick && (r.onclick = Wn)
                                    }
                                    s = u, i.updateQueue = s, (i = null !== s) && fs(t)
                                } else {
                                    n = t, f = s, c = i, u = 9 === r.nodeType ? r : r.ownerDocument, l === Ue.html && (l = Le(f)), l === Ue.html ? "script" === f ? ((c = u.createElement("div")).innerHTML = "<script><\/script>", u = c.removeChild(c.firstChild)) : "string" == typeof c.is ? u = u.createElement(f, {
                                        is: c.is
                                    }) : (u = u.createElement(f), "select" === f && (f = u, c.multiple ? f.multiple = !0 : c.size && (f.size = c.size))) : u = u.createElementNS(l, f), (c = u)[ur] = n, c[cr] = i, ts(c, t, !1, !1), t.stateNode = c;
                                    var d = r,
                                        h = Hn(f = s, n = i);
                                    switch (f) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Cn("load", c), r = n;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (r = 0; r < Ze.length; r++) Cn(Ze[r], c);
                                            r = n;
                                            break;
                                        case "source":
                                            Cn("error", c), r = n;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Cn("error", c), Cn("load", c), r = n;
                                            break;
                                        case "form":
                                            Cn("reset", c), Cn("submit", c), r = n;
                                            break;
                                        case "details":
                                            Cn("toggle", c), r = n;
                                            break;
                                        case "input":
                                            Te(c, n), r = Se(c, n), Cn("invalid", c), qn(d, "onChange");
                                            break;
                                        case "option":
                                            r = Ne(c, n);
                                            break;
                                        case "select":
                                            c._wrapperState = {
                                                wasMultiple: !!n.multiple
                                            }, r = o({}, n, {
                                                value: void 0
                                            }), Cn("invalid", c), qn(d, "onChange");
                                            break;
                                        case "textarea":
                                            Re(c, n), r = Oe(c, n), Cn("invalid", c), qn(d, "onChange");
                                            break;
                                        default:
                                            r = n
                                    }
                                    jn(f, r), u = void 0, l = f;
                                    var m = c,
                                        g = r;
                                    for (u in g)
                                        if (g.hasOwnProperty(u)) {
                                            var y = g[u];
                                            "style" === u ? Ln(m, y) : "dangerouslySetInnerHTML" === u ? null != (y = y ? y.__html : void 0) && He(m, y) : "children" === u ? "string" == typeof y ? ("textarea" !== l || "" !== y) && qe(m, y) : "number" == typeof y && qe(m, "" + y) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (p.hasOwnProperty(u) ? null != y && qn(d, u) : null != y && ke(m, u, y, h))
                                        }
                                    switch (f) {
                                        case "input":
                                            Ee(c), Pe(c, n, !1);
                                            break;
                                        case "textarea":
                                            Ee(c), De(c);
                                            break;
                                        case "option":
                                            null != n.value && c.setAttribute("value", "" + _e(n.value));
                                            break;
                                        case "select":
                                            (r = c).multiple = !!n.multiple, null != (c = n.value) ? Fe(r, !!n.multiple, c, !1) : null != n.defaultValue && Fe(r, !!n.multiple, n.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof r.onClick && (c.onclick = Wn)
                                    }(i = nr(s, i)) && fs(t)
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            } else if (null === t.stateNode) throw Error(a(166));
                            break;
                        case 6:
                            if (n && null != t.stateNode) os(n, t, n.memoizedProps, i);
                            else {
                                if ("string" != typeof i && null === t.stateNode) throw Error(a(166));
                                r = qi(Hi.current), qi(zi.current), Ha(t) ? (s = (i = t).stateNode, r = i.memoizedProps, s[ur] = i, (i = s.nodeValue !== r) && fs(t)) : (s = t, (i = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(i))[ur] = s, t.stateNode = i)
                            }
                            break;
                        case 11:
                            break;
                        case 13:
                            if (ho(Gi), i = t.memoizedState, 0 != (64 & t.effectTag)) {
                                t.expirationTime = r;
                                break e
                            }
                            i = null !== i, s = !1, null === n ? void 0 !== t.memoizedProps.fallback && Ha(t) : (s = null !== (r = n.memoizedState), i || null === r || null !== (r = n.child.sibling) && (null !== (c = t.firstEffect) ? (t.firstEffect = r, r.nextEffect = c) : (t.firstEffect = t.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), i && !s && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Gi.current) ? Gs === Us && (Gs = js) : (Gs !== Us && Gs !== js || (Gs = Hs), 0 !== Zs && null !== Vs && (tu(Vs, Ys), nu(Vs, Zs)))), (i || s) && (t.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            Vi(), ns(t);
                            break;
                        case 10:
                            ui(t);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            _o(t.type) && ko();
                            break;
                        case 19:
                            if (ho(Gi), null === (i = t.memoizedState)) break;
                            if (s = 0 != (64 & t.effectTag), null === (c = i.rendering)) {
                                if (s) ds(i, !1);
                                else if (Gs !== Us || null !== n && 0 != (64 & n.effectTag))
                                    for (n = t.child; null !== n;) {
                                        if (null !== (c = Xi(n))) {
                                            for (t.effectTag |= 64, ds(i, !1), null !== (s = c.updateQueue) && (t.updateQueue = s, t.effectTag |= 4), null === i.lastEffect && (t.firstEffect = null), t.lastEffect = i.lastEffect, i = r, s = t.child; null !== s;) n = i, (r = s).effectTag &= 2, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, null === (c = r.alternate) ? (r.childExpirationTime = 0, r.expirationTime = n, r.child = null, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null) : (r.childExpirationTime = c.childExpirationTime, r.expirationTime = c.expirationTime, r.child = c.child, r.memoizedProps = c.memoizedProps, r.memoizedState = c.memoizedState, r.updateQueue = c.updateQueue, n = c.dependencies, r.dependencies = null === n ? null : {
                                                expirationTime: n.expirationTime,
                                                firstContext: n.firstContext,
                                                responders: n.responders
                                            }), s = s.sibling;
                                            mo(Gi, 1 & Gi.current | 2), t = t.child;
                                            break e
                                        }
                                        n = n.sibling
                                    }
                            } else {
                                if (!s)
                                    if (null !== (n = Xi(c))) {
                                        if (t.effectTag |= 64, s = !0, null !== (r = n.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), ds(i, !0), null === i.tail && "hidden" === i.tailMode && !c.alternate) {
                                            null !== (t = t.lastEffect = i.lastEffect) && (t.nextEffect = null);
                                            break
                                        }
                                    } else $o() > i.tailExpiration && 1 < r && (t.effectTag |= 64, s = !0, ds(i, !1), t.expirationTime = t.childExpirationTime = r - 1);
                                i.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (r = i.last) ? r.sibling = c : t.child = c, i.last = c)
                            }
                            if (null !== i.tail) {
                                0 === i.tailExpiration && (i.tailExpiration = $o() + 500), r = i.tail, i.rendering = r, i.tail = r.sibling, i.lastEffect = t.lastEffect, r.sibling = null, i = Gi.current, mo(Gi, i = s ? 1 & i | 2 : 1 & i), t = r;
                                break e
                            }
                            break;
                        case 20:
                        case 21:
                            break;
                        default:
                            throw Error(a(156, t.tag))
                    }
                    t = null
                }
                if (i = $s, 1 === Ys || 1 !== i.childExpirationTime) {
                    for (s = 0, r = i.child; null !== r;)(n = r.expirationTime) > s && (s = n), (c = r.childExpirationTime) > s && (s = c), r = r.sibling;
                    i.childExpirationTime = s
                }
                if (null !== t) return t;null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = $s.firstEffect), null !== $s.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = $s.firstEffect), e.lastEffect = $s.lastEffect), 1 < $s.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = $s : e.firstEffect = $s, e.lastEffect = $s))
            } else {
                if (null !== (t = ps($s))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = $s.sibling)) return t;
            $s = e
        } while (null !== $s);
        return Gs === Us && (Gs = qs), null
    }

    function Fl(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function Ol(e) {
        var t = Yo();
        return Xo(99, Rl.bind(null, e, t)), null
    }

    function Rl(e, t) {
        do {
            Dl()
        } while (null !== ll);
        if ((Ws & (Bs | Ds)) !== Os) throw Error(a(327));
        var n = e.finishedWork,
            r = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(a(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var o = Fl(n);
        if (e.firstPendingTime = o, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === Vs && ($s = Vs = null, Ys = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, o = n.firstEffect) : o = n : o = n.firstEffect, null !== o) {
            var i = Ws;
            Ws |= Ds, Fs.current = null, er = En;
            var s = Gn();
            if (Xn(s)) {
                if ("selectionStart" in s) var l = {
                    start: s.selectionStart,
                    end: s.selectionEnd
                };
                else e: {
                    var u = (l = (l = s.ownerDocument) && l.defaultView || window).getSelection && l.getSelection();
                    if (u && 0 !== u.rangeCount) {
                        l = u.anchorNode;
                        var c = u.anchorOffset,
                            f = u.focusNode;
                        u = u.focusOffset;
                        try {
                            l.nodeType, f.nodeType
                        } catch (e) {
                            l = null;
                            break e
                        }
                        var d = 0,
                            p = -1,
                            h = -1,
                            m = 0,
                            g = 0,
                            y = s,
                            v = null;
                        t: for (;;) {
                            for (var b; y !== l || 0 !== c && 3 !== y.nodeType || (p = d + c), y !== f || 0 !== u && 3 !== y.nodeType || (h = d + u), 3 === y.nodeType && (d += y.nodeValue.length), null !== (b = y.firstChild);) v = y, y = b;
                            for (;;) {
                                if (y === s) break t;
                                if (v === l && ++m === c && (p = d), v === f && ++g === u && (h = d), null !== (b = y.nextSibling)) break;
                                v = (y = v).parentNode
                            }
                            y = b
                        }
                        l = -1 === p || -1 === h ? null : {
                            start: p,
                            end: h
                        }
                    } else l = null
                }
                l = l || {
                    start: 0,
                    end: 0
                }
            } else l = null;
            tr = {
                focusedElem: s,
                selectionRange: l
            }, En = !1, rl = o;
            do {
                try {
                    Bl()
                } catch (e) {
                    if (null === rl) throw Error(a(330));
                    zl(rl, e), rl = rl.nextEffect
                }
            } while (null !== rl);
            rl = o;
            do {
                try {
                    for (s = e, l = t; null !== rl;) {
                        var w = rl.effectTag;
                        if (16 & w && qe(rl.stateNode, ""), 128 & w) {
                            var _ = rl.alternate;
                            if (null !== _) {
                                var k = _.ref;
                                null !== k && ("function" == typeof k ? k(null) : k.current = null)
                            }
                        }
                        switch (1038 & w) {
                            case 2:
                                xs(rl), rl.effectTag &= -3;
                                break;
                            case 6:
                                xs(rl), rl.effectTag &= -3, Cs(rl.alternate, rl);
                                break;
                            case 1024:
                                rl.effectTag &= -1025;
                                break;
                            case 1028:
                                rl.effectTag &= -1025, Cs(rl.alternate, rl);
                                break;
                            case 4:
                                Cs(rl.alternate, rl);
                                break;
                            case 8:
                                Es(s, c = rl, l), _s(c)
                        }
                        rl = rl.nextEffect
                    }
                } catch (e) {
                    if (null === rl) throw Error(a(330));
                    zl(rl, e), rl = rl.nextEffect
                }
            } while (null !== rl);
            if (k = tr, _ = Gn(), w = k.focusedElem, l = k.selectionRange, _ !== w && w && w.ownerDocument && function e(t, n) {
                    return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                }(w.ownerDocument.documentElement, w)) {
                null !== l && Xn(w) && (_ = l.start, void 0 === (k = l.end) && (k = _), "selectionStart" in w ? (w.selectionStart = _, w.selectionEnd = Math.min(k, w.value.length)) : (k = (_ = w.ownerDocument || document) && _.defaultView || window).getSelection && (k = k.getSelection(), c = w.textContent.length, s = Math.min(l.start, c), l = void 0 === l.end ? s : Math.min(l.end, c), !k.extend && s > l && (c = l, l = s, s = c), c = Yn(w, s), f = Yn(w, l), c && f && (1 !== k.rangeCount || k.anchorNode !== c.node || k.anchorOffset !== c.offset || k.focusNode !== f.node || k.focusOffset !== f.offset) && ((_ = _.createRange()).setStart(c.node, c.offset), k.removeAllRanges(), s > l ? (k.addRange(_), k.extend(f.node, f.offset)) : (_.setEnd(f.node, f.offset), k.addRange(_))))), _ = [];
                for (k = w; k = k.parentNode;) 1 === k.nodeType && _.push({
                    element: k,
                    left: k.scrollLeft,
                    top: k.scrollTop
                });
                for ("function" == typeof w.focus && w.focus(), w = 0; w < _.length; w++)(k = _[w]).element.scrollLeft = k.left, k.element.scrollTop = k.top
            }
            tr = null, En = !!er, er = null, e.current = n, rl = o;
            do {
                try {
                    for (w = r; null !== rl;) {
                        var x = rl.effectTag;
                        if (36 & x) {
                            var E = rl.alternate;
                            switch (k = w, (_ = rl).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    bs(16, 32, _);
                                    break;
                                case 1:
                                    var C = _.stateNode;
                                    if (4 & _.effectTag)
                                        if (null === E) C.componentDidMount();
                                        else {
                                            var S = _.elementType === _.type ? E.memoizedProps : ni(_.type, E.memoizedProps);
                                            C.componentDidUpdate(S, E.memoizedState, C.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var T = _.updateQueue;
                                    null !== T && xi(0, T, C);
                                    break;
                                case 3:
                                    var A = _.updateQueue;
                                    if (null !== A) {
                                        if (s = null, null !== _.child) switch (_.child.tag) {
                                            case 5:
                                                s = _.child.stateNode;
                                                break;
                                            case 1:
                                                s = _.child.stateNode
                                        }
                                        xi(0, A, s)
                                    }
                                    break;
                                case 5:
                                    var M = _.stateNode;
                                    null === E && 4 & _.effectTag && nr(_.type, _.memoizedProps) && M.focus();
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                    break;
                                case 13:
                                    if (null === _.memoizedState) {
                                        var P = _.alternate;
                                        if (null !== P) {
                                            var I = P.memoizedState;
                                            if (null !== I) {
                                                var N = I.dehydrated;
                                                null !== N && Ct(N)
                                            }
                                        }
                                    }
                                    break;
                                case 19:
                                case 17:
                                case 20:
                                case 21:
                                    break;
                                default:
                                    throw Error(a(163))
                            }
                        }
                        if (128 & x) {
                            _ = void 0;
                            var F = rl.ref;
                            if (null !== F) {
                                var O = rl.stateNode;
                                switch (rl.tag) {
                                    case 5:
                                        _ = O;
                                        break;
                                    default:
                                        _ = O
                                }
                                "function" == typeof F ? F(_) : F.current = _
                            }
                        }
                        rl = rl.nextEffect
                    }
                } catch (e) {
                    if (null === rl) throw Error(a(330));
                    zl(rl, e), rl = rl.nextEffect
                }
            } while (null !== rl);
            rl = null, jo(), Ws = i
        } else e.current = n;
        if (sl) sl = !1, ll = e, ul = t;
        else
            for (rl = o; null !== rl;) t = rl.nextEffect, rl.nextEffect = null, rl = t;
        if (0 === (t = e.firstPendingTime) && (al = null), 1073741823 === t ? e === dl ? fl++ : (fl = 0, dl = e) : fl = 0, "function" == typeof ql && ql(n.stateNode, r), bl(e), ol) throw ol = !1, e = il, il = null, e;
        return (Ws & Rs) !== Os ? null : (Jo(), null)
    }

    function Bl() {
        for (; null !== rl;) {
            var e = rl.effectTag;
            0 != (256 & e) && vs(rl.alternate, rl), 0 == (512 & e) || sl || (sl = !0, Qo(97, (function() {
                return Dl(), null
            }))), rl = rl.nextEffect
        }
    }

    function Dl() {
        if (90 !== ul) {
            var e = 97 < ul ? 97 : ul;
            return ul = 90, Xo(e, Ul)
        }
    }

    function Ul() {
        if (null === ll) return !1;
        var e = ll;
        if (ll = null, (Ws & (Bs | Ds)) !== Os) throw Error(a(331));
        var t = Ws;
        for (Ws |= Ds, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        bs(128, 0, n), bs(0, 64, n)
                }
            } catch (t) {
                if (null === e) throw Error(a(330));
                zl(e, t)
            }
            n = e.nextEffect, e.nextEffect = null, e = n
        }
        return Ws = t, Jo(), !0
    }

    function Ll(e, t, n) {
        vi(e, t = As(e, t = hs(n, t), 1073741823)), null !== (e = yl(e, 1073741823)) && bl(e)
    }

    function zl(e, t) {
        if (3 === e.tag) Ll(e, e, t);
        else
            for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    Ll(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === al || !al.has(r))) {
                        vi(n, e = Ms(n, e = hs(t, e), 1073741823)), null !== (n = yl(n, 1073741823)) && bl(n);
                        break
                    }
                }
                n = n.return
            }
    }

    function jl(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), Vs === e && Ys === n ? Gs === Hs || Gs === js && 1073741823 === Qs && $o() - tl < nl ? El(e, Ys) : el = !0 : eu(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), bl(e)))
    }

    function Hl(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (t = ml(t = hl(), e, null)), null !== (e = yl(e, t)) && bl(e)
    }
    Ps = function(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var o = t.pendingProps;
            if (e.memoizedProps !== o || vo.current) Va = !0;
            else {
                if (r < n) {
                    switch (Va = !1, t.tag) {
                        case 3:
                            es(t), qa();
                            break;
                        case 5:
                            if ($i(t), 4 & t.mode && 1 !== n && o.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            _o(t.type) && So(t);
                            break;
                        case 4:
                            Wi(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            li(t, t.memoizedProps.value);
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? as(e, t, n) : (mo(Gi, 1 & Gi.current), null !== (t = cs(e, t, n)) ? t.sibling : null);
                            mo(Gi, 1 & Gi.current);
                            break;
                        case 19:
                            if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                if (r) return us(e, t, n);
                                t.effectTag |= 64
                            }
                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null), mo(Gi, Gi.current), !r) return null
                    }
                    return cs(e, t, n)
                }
                Va = !1
            }
        } else Va = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, o = wo(t, yo.current), fi(t, n), o = ha(null, t, r, e, o, n), t.effectTag |= 1, "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof) {
                    if (t.tag = 1, ma(), _o(r)) {
                        var i = !0;
                        So(t)
                    } else i = !1;
                    t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null;
                    var s = r.getDerivedStateFromProps;
                    "function" == typeof s && Ti(t, r, s, e), o.updater = Ai, t.stateNode = o, o._reactInternalFiber = t, Ni(t, r, e, n), t = Za(null, t, r, !0, i, n)
                } else t.tag = 0, $a(null, t, o, n), t = t.child;
                return t;
            case 16:
                if (o = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                        if (-1 === e._status) {
                            e._status = 0;
                            var t = e._ctor;
                            t = t(), e._result = t, t.then((function(t) {
                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                            }), (function(t) {
                                0 === e._status && (e._status = 2, e._result = t)
                            }))
                        }
                    }(o), 1 !== o._status) throw o._result;
                switch (o = o._result, t.type = o, i = t.tag = function(e) {
                    if ("function" == typeof e) return Yl(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === W) return 11;
                        if (e === Y) return 14
                    }
                    return 2
                }(o), e = ni(o, e), i) {
                    case 0:
                        t = Ka(null, t, o, e, n);
                        break;
                    case 1:
                        t = Ja(null, t, o, e, n);
                        break;
                    case 11:
                        t = Ya(null, t, o, e, n);
                        break;
                    case 14:
                        t = Ga(null, t, o, ni(o.type, e), r, n);
                        break;
                    default:
                        throw Error(a(306, o, ""))
                }
                return t;
            case 0:
                return r = t.type, o = t.pendingProps, Ka(e, t, r, o = t.elementType === r ? o : ni(r, o), n);
            case 1:
                return r = t.type, o = t.pendingProps, Ja(e, t, r, o = t.elementType === r ? o : ni(r, o), n);
            case 3:
                if (es(t), null === (r = t.updateQueue)) throw Error(a(282));
                if (o = null !== (o = t.memoizedState) ? o.element : null, ki(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === o) qa(), t = cs(e, t, n);
                else {
                    if ((o = t.stateNode.hydrate) && (Ba = ar(t.stateNode.containerInfo.firstChild), Ra = t, o = Da = !0), o)
                        for (n = Ui(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                    else $a(e, t, r, n), qa();
                    t = t.child
                }
                return t;
            case 5:
                return $i(t), null === e && za(t), r = t.type, o = t.pendingProps, i = null !== e ? e.memoizedProps : null, s = o.children, rr(r, o) ? s = null : null !== i && rr(r, i) && (t.effectTag |= 16), Qa(e, t), 4 & t.mode && 1 !== n && o.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : ($a(e, t, s, n), t = t.child), t;
            case 6:
                return null === e && za(t), null;
            case 13:
                return as(e, t, n);
            case 4:
                return Wi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Di(t, null, r, n) : $a(e, t, r, n), t.child;
            case 11:
                return r = t.type, o = t.pendingProps, Ya(e, t, r, o = t.elementType === r ? o : ni(r, o), n);
            case 7:
                return $a(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return $a(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, o = t.pendingProps, s = t.memoizedProps, li(t, i = o.value), null !== s) {
                        var l = s.value;
                        if (0 === (i = eo(l, i) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(l, i) : 1073741823))) {
                            if (s.children === o.children && !vo.current) {
                                t = cs(e, t, n);
                                break e
                            }
                        } else
                            for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                var u = l.dependencies;
                                if (null !== u) {
                                    s = l.child;
                                    for (var c = u.firstContext; null !== c;) {
                                        if (c.context === r && 0 != (c.observedBits & i)) {
                                            1 === l.tag && ((c = gi(n, null)).tag = 2, vi(l, c)), l.expirationTime < n && (l.expirationTime = n), null !== (c = l.alternate) && c.expirationTime < n && (c.expirationTime = n), ci(l.return, n), u.expirationTime < n && (u.expirationTime = n);
                                            break
                                        }
                                        c = c.next
                                    }
                                } else s = 10 === l.tag && l.type === t.type ? null : l.child;
                                if (null !== s) s.return = l;
                                else
                                    for (s = l; null !== s;) {
                                        if (s === t) {
                                            s = null;
                                            break
                                        }
                                        if (null !== (l = s.sibling)) {
                                            l.return = s.return, s = l;
                                            break
                                        }
                                        s = s.return
                                    }
                                l = s
                            }
                    }
                    $a(e, t, o.children, n), t = t.child
                }
                return t;
            case 9:
                return o = t.type, r = (i = t.pendingProps).children, fi(t, n), r = r(o = di(o, i.unstable_observedBits)), t.effectTag |= 1, $a(e, t, r, n), t.child;
            case 14:
                return i = ni(o = t.type, t.pendingProps), Ga(e, t, o, i = ni(o.type, i), r, n);
            case 15:
                return Xa(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ni(r, o), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, _o(r) ? (e = !0, So(t)) : e = !1, fi(t, n), Pi(t, r, o), Ni(t, r, o, n), Za(null, t, r, !0, e, n);
            case 19:
                return us(e, t, n)
        }
        throw Error(a(156, t.tag))
    };
    var ql = null,
        Wl = null;

    function Vl(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function $l(e, t, n, r) {
        return new Vl(e, t, n, r)
    }

    function Yl(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Gl(e, t) {
        var n = e.alternate;
        return null === n ? ((n = $l(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Xl(e, t, n, r, o, i) {
        var s = 2;
        if (r = e, "function" == typeof e) Yl(e) && (s = 1);
        else if ("string" == typeof e) s = 5;
        else e: switch (e) {
            case U:
                return Ql(n.children, o, i, t);
            case q:
                s = 8, o |= 7;
                break;
            case L:
                s = 8, o |= 1;
                break;
            case z:
                return (e = $l(12, n, t, 8 | o)).elementType = z, e.type = z, e.expirationTime = i, e;
            case V:
                return (e = $l(13, n, t, o)).type = V, e.elementType = V, e.expirationTime = i, e;
            case $:
                return (e = $l(19, n, t, o)).elementType = $, e.expirationTime = i, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case j:
                        s = 10;
                        break e;
                    case H:
                        s = 9;
                        break e;
                    case W:
                        s = 11;
                        break e;
                    case Y:
                        s = 14;
                        break e;
                    case G:
                        s = 16, r = null;
                        break e
                }
                throw Error(a(130, null == e ? e : typeof e, ""))
        }
        return (t = $l(s, n, t, o)).elementType = e, t.type = r, t.expirationTime = i, t
    }

    function Ql(e, t, n, r) {
        return (e = $l(7, e, r, t)).expirationTime = n, e
    }

    function Kl(e, t, n) {
        return (e = $l(6, e, null, t)).expirationTime = n, e
    }

    function Jl(e, t, n) {
        return (t = $l(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Zl(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function eu(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
    }

    function tu(e, t) {
        var n = e.firstSuspendedTime,
            r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function nu(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function ru(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t)
    }

    function ou(e, t, n, r) {
        var o = t.current,
            i = hl(),
            s = Ci.suspense;
        i = ml(i, o, s);
        e: if (n) {
            t: {
                if (et(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(a(170));
                var l = n;
                do {
                    switch (l.tag) {
                        case 3:
                            l = l.stateNode.context;
                            break t;
                        case 1:
                            if (_o(l.type)) {
                                l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    l = l.return
                } while (null !== l);
                throw Error(a(171))
            }
            if (1 === n.tag) {
                var u = n.type;
                if (_o(u)) {
                    n = Co(n, u, l);
                    break e
                }
            }
            n = l
        } else n = go;
        return null === t.context ? t.context = n : t.pendingContext = n, (t = gi(i, s)).payload = {
            element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), vi(o, t), gl(o, i), i
    }

    function iu(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function au(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }

    function su(e, t) {
        au(e, t), (e = e.alternate) && au(e, t)
    }

    function lu(e, t, n) {
        var r = new Zl(e, t, n = null != n && !0 === n.hydrate),
            o = $l(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        r.current = o, o.stateNode = r, e[fr] = r.current, n && 0 !== t && function(e) {
            var t = On(e);
            mt.forEach((function(n) {
                Rn(n, e, t)
            })), gt.forEach((function(n) {
                Rn(n, e, t)
            }))
        }(9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
    }

    function uu(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function cu(e, t, n, r, o) {
        var i = n._reactRootContainer;
        if (i) {
            var a = i._internalRoot;
            if ("function" == typeof o) {
                var s = o;
                o = function() {
                    var e = iu(a);
                    s.call(e)
                }
            }
            ou(t, a, e, o)
        } else {
            if (i = n._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var n; n = e.lastChild;) e.removeChild(n);
                    return new lu(e, 0, t ? {
                        hydrate: !0
                    } : void 0)
                }(n, r), a = i._internalRoot, "function" == typeof o) {
                var l = o;
                o = function() {
                    var e = iu(a);
                    l.call(e)
                }
            }
            xl((function() {
                ou(t, a, e, o)
            }))
        }
        return iu(a)
    }

    function fu(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!uu(t)) throw Error(a(200));
        return function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: D,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }(e, t, null, n)
    }
    lu.prototype.render = function(e, t) {
        ou(e, this._internalRoot, null, void 0 === t ? null : t)
    }, lu.prototype.unmount = function(e) {
        var t = this._internalRoot,
            n = void 0 === e ? null : e,
            r = t.containerInfo;
        ou(null, t, null, (function() {
            r[fr] = null, null !== n && n()
        }))
    }, ot = function(e) {
        if (13 === e.tag) {
            var t = ti(hl(), 150, 100);
            gl(e, t), su(e, t)
        }
    }, it = function(e) {
        if (13 === e.tag) {
            hl();
            var t = ei++;
            gl(e, t), su(e, t)
        }
    }, at = function(e) {
        if (13 === e.tag) {
            var t = hl();
            gl(e, t = ml(t, e, null)), su(e, t)
        }
    }, ee = function(e, t, n) {
        switch (t) {
            case "input":
                if (Me(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var o = mr(r);
                            if (!o) throw Error(a(90));
                            Ce(r), Me(r, o)
                        }
                    }
                }
                break;
            case "textarea":
                Be(e, n);
                break;
            case "select":
                null != (t = n.value) && Fe(e, !!n.multiple, t, !1)
        }
    }, ae = kl, se = function(e, t, n, r) {
        var o = Ws;
        Ws |= 4;
        try {
            return Xo(98, e.bind(null, t, n, r))
        } finally {
            (Ws = o) === Os && Jo()
        }
    }, le = function() {
        (Ws & (1 | Bs | Ds)) === Os && (function() {
            if (null !== cl) {
                var e = cl;
                cl = null, e.forEach((function(e, t) {
                    ru(t, e), bl(t)
                })), Jo()
            }
        }(), Dl())
    }, ue = function(e, t) {
        var n = Ws;
        Ws |= 2;
        try {
            return e(t)
        } finally {
            (Ws = n) === Os && Jo()
        }
    };
    var du, pu, hu = {
        createPortal: fu,
        findDOMNode: function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(a(188));
                throw Error(a(268, Object.keys(e)))
            }
            return e = null === (e = rt(t)) ? null : e.stateNode
        },
        hydrate: function(e, t, n) {
            if (!uu(t)) throw Error(a(200));
            return cu(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            if (!uu(t)) throw Error(a(200));
            return cu(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
            if (!uu(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternalFiber) throw Error(a(38));
            return cu(e, t, n, !1, r)
        },
        unmountComponentAtNode: function(e) {
            if (!uu(e)) throw Error(a(40));
            return !!e._reactRootContainer && (xl((function() {
                cu(null, null, e, !1, (function() {
                    e._reactRootContainer = null, e[fr] = null
                }))
            })), !0)
        },
        unstable_createPortal: function() {
            return fu.apply(void 0, arguments)
        },
        unstable_batchedUpdates: kl,
        flushSync: function(e, t) {
            if ((Ws & (Bs | Ds)) !== Os) throw Error(a(187));
            var n = Ws;
            Ws |= 1;
            try {
                return Xo(99, e.bind(null, t))
            } finally {
                Ws = n, Jo()
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [pr, hr, mr, I.injectEventPluginsByName, d, Nt, function(e) {
                T(e, It)
            }, oe, ie, Pn, P, Dl, {
                current: !1
            }]
        }
    };
    pu = (du = {
            findFiberByHostInstance: dr,
            bundleType: 0,
            version: "16.12.0",
            rendererPackageName: "react-dom"
        }).findFiberByHostInstance,
        function(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
                var n = t.inject(e);
                ql = function(e) {
                    try {
                        t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                    } catch (e) {}
                }, Wl = function(e) {
                    try {
                        t.onCommitFiberUnmount(n, e)
                    } catch (e) {}
                }
            } catch (e) {}
        }(o({}, du, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: F.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = rt(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return pu ? pu(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
    var mu = {
            default: hu
        },
        gu = mu && hu || mu;
    e.exports = gu.default || gu
}, function(e, t, n) {
    "use strict";
    e.exports = n(35)
}, function(e, t, n) {
    "use strict";
    /** @license React v0.18.0
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, i, a, s;
    if (Object.defineProperty(t, "__esModule", {
            value: !0
        }), "undefined" == typeof window || "function" != typeof MessageChannel) {
        var l = null,
            u = null,
            c = function() {
                if (null !== l) try {
                    var e = t.unstable_now();
                    l(!0, e), l = null
                } catch (e) {
                    throw setTimeout(c, 0), e
                }
            },
            f = Date.now();
        t.unstable_now = function() {
            return Date.now() - f
        }, r = function(e) {
            null !== l ? setTimeout(r, 0, e) : (l = e, setTimeout(c, 0))
        }, o = function(e, t) {
            u = setTimeout(e, t)
        }, i = function() {
            clearTimeout(u)
        }, a = function() {
            return !1
        }, s = t.unstable_forceFrameRate = function() {}
    } else {
        var d = window.performance,
            p = window.Date,
            h = window.setTimeout,
            m = window.clearTimeout;
        if ("undefined" != typeof console) {
            var g = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof g && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")
        }
        if ("object" == typeof d && "function" == typeof d.now) t.unstable_now = function() {
            return d.now()
        };
        else {
            var y = p.now();
            t.unstable_now = function() {
                return p.now() - y
            }
        }
        var v = !1,
            b = null,
            w = -1,
            _ = 5,
            k = 0;
        a = function() {
            return t.unstable_now() >= k
        }, s = function() {}, t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : _ = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var x = new MessageChannel,
            E = x.port2;
        x.port1.onmessage = function() {
            if (null !== b) {
                var e = t.unstable_now();
                k = e + _;
                try {
                    b(!0, e) ? E.postMessage(null) : (v = !1, b = null)
                } catch (e) {
                    throw E.postMessage(null), e
                }
            } else v = !1
        }, r = function(e) {
            b = e, v || (v = !0, E.postMessage(null))
        }, o = function(e, n) {
            w = h((function() {
                e(t.unstable_now())
            }), n)
        }, i = function() {
            m(w), w = -1
        }
    }

    function C(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
            var r = Math.floor((n - 1) / 2),
                o = e[r];
            if (!(void 0 !== o && 0 < A(o, t))) break e;
            e[r] = t, e[n] = o, n = r
        }
    }

    function S(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function T(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, o = e.length; r < o;) {
                    var i = 2 * (r + 1) - 1,
                        a = e[i],
                        s = i + 1,
                        l = e[s];
                    if (void 0 !== a && 0 > A(a, n)) void 0 !== l && 0 > A(l, a) ? (e[r] = l, e[s] = n, r = s) : (e[r] = a, e[i] = n, r = i);
                    else {
                        if (!(void 0 !== l && 0 > A(l, n))) break e;
                        e[r] = l, e[s] = n, r = s
                    }
                }
            }
            return t
        }
        return null
    }

    function A(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id
    }
    var M = [],
        P = [],
        I = 1,
        N = null,
        F = 3,
        O = !1,
        R = !1,
        B = !1;

    function D(e) {
        for (var t = S(P); null !== t;) {
            if (null === t.callback) T(P);
            else {
                if (!(t.startTime <= e)) break;
                T(P), t.sortIndex = t.expirationTime, C(M, t)
            }
            t = S(P)
        }
    }

    function U(e) {
        if (B = !1, D(e), !R)
            if (null !== S(M)) R = !0, r(L);
            else {
                var t = S(P);
                null !== t && o(U, t.startTime - e)
            }
    }

    function L(e, n) {
        R = !1, B && (B = !1, i()), O = !0;
        var r = F;
        try {
            for (D(n), N = S(M); null !== N && (!(N.expirationTime > n) || e && !a());) {
                var s = N.callback;
                if (null !== s) {
                    N.callback = null, F = N.priorityLevel;
                    var l = s(N.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof l ? N.callback = l : N === S(M) && T(M), D(n)
                } else T(M);
                N = S(M)
            }
            if (null !== N) var u = !0;
            else {
                var c = S(P);
                null !== c && o(U, c.startTime - n), u = !1
            }
            return u
        } finally {
            N = null, F = r, O = !1
        }
    }

    function z(e) {
        switch (e) {
            case 1:
                return -1;
            case 2:
                return 250;
            case 5:
                return 1073741823;
            case 4:
                return 1e4;
            default:
                return 5e3
        }
    }
    var j = s;
    t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, t) {
        switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
        }
        var n = F;
        F = e;
        try {
            return t()
        } finally {
            F = n
        }
    }, t.unstable_next = function(e) {
        switch (F) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = F
        }
        var n = F;
        F = t;
        try {
            return e()
        } finally {
            F = n
        }
    }, t.unstable_scheduleCallback = function(e, n, a) {
        var s = t.unstable_now();
        if ("object" == typeof a && null !== a) {
            var l = a.delay;
            l = "number" == typeof l && 0 < l ? s + l : s, a = "number" == typeof a.timeout ? a.timeout : z(e)
        } else a = z(e), l = s;
        return e = {
            id: I++,
            callback: n,
            priorityLevel: e,
            startTime: l,
            expirationTime: a = l + a,
            sortIndex: -1
        }, l > s ? (e.sortIndex = l, C(P, e), null === S(M) && e === S(P) && (B ? i() : B = !0, o(U, l - s))) : (e.sortIndex = a, C(M, e), R || O || (R = !0, r(L))), e
    }, t.unstable_cancelCallback = function(e) {
        e.callback = null
    }, t.unstable_wrapCallback = function(e) {
        var t = F;
        return function() {
            var n = F;
            F = t;
            try {
                return e.apply(this, arguments)
            } finally {
                F = n
            }
        }
    }, t.unstable_getCurrentPriorityLevel = function() {
        return F
    }, t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        D(e);
        var n = S(M);
        return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < N.expirationTime || a()
    }, t.unstable_requestPaint = j, t.unstable_continueExecution = function() {
        R || O || (R = !0, r(L))
    }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
        return S(M)
    }, t.unstable_Profiling = null
}, function(e) {
    e.exports = JSON.parse('{"weapons":[{"name":"Stock Gun","range":250,"damage":20,"speed":50,"charge":8,"price":0,"ammo":-1,"level":0,"order":0,"type":"Gun","bot":true},{"name":"Plasma Gun","range":150,"damage":45,"speed":40,"charge":10,"price":2000,"ammo":175,"level":2,"order":2,"type":"Gun","bot":true},{"name":"Reverse Gun","range":250,"damage":30,"speed":50,"charge":8,"price":1000,"ammo":-1,"level":1,"order":1,"type":"Gun","bot":false},{"name":"Rifle","range":750,"damage":30,"speed":80,"charge":10,"price":5000,"ammo":40,"level":5,"order":4,"type":"Gun","bot":true},{"name":"Shotgun","range":100,"damage":20,"speed":50,"charge":15,"price":5000,"ammo":40,"level":3,"order":3,"type":"Gun","bot":true},{"name":"Machine Gun","range":250,"damage":10,"speed":80,"charge":4,"price":6000,"ammo":500,"level":4,"order":5,"type":"Gun","bot":true},{"name":"Minigun","range":250,"damage":8,"speed":60,"charge":4,"price":30000,"ammo":500,"level":6,"order":6,"type":"Gun","bot":true},{"name":"Plasma Beam","range":60,"damage":5,"speed":-1,"charge":3,"price":6000,"ammo":-1,"level":1,"order":19,"type":"Beam","bot":true},{"name":"Laser Beam","range":60,"damage":22,"speed":-1,"charge":10,"price":12000,"ammo":-1,"level":4,"order":20,"type":"Beam","bot":true},{"name":"Hadron Beam","range":125,"damage":80,"speed":-1,"charge":50,"price":30000,"ammo":-1,"level":8,"order":21,"type":"Beam","bot":true},{"name":"Missile","range":1000,"damage":20,"speed":100,"charge":12,"price":4000,"ammo":20,"level":0,"order":9,"type":"Missile","bot":true},{"name":"Heavy Missile","range":750,"damage":40,"speed":60,"charge":20,"price":10000,"ammo":20,"level":3,"order":10,"type":"Missile","bot":true},{"name":"EMP Missile","range":750,"damage":25,"speed":100,"charge":50,"price":40000,"ammo":10,"level":7,"order":12,"type":"Missile","bot":false},{"name":"Missile Swarm","range":750,"damage":-1,"speed":50,"charge":100,"price":60000,"ammo":5,"level":9,"order":13,"type":"Missile","bot":true},{"name":"Torpedo","range":3000,"damage":12,"speed":120,"charge":30,"price":18000,"ammo":15,"level":5,"order":11,"type":"Missile","bot":true},{"name":"Mine","range":16,"damage":45,"speed":-1,"charge":25,"price":1000,"ammo":15,"level":0,"order":26,"type":"Mine","bot":false},{"name":"Laser Mine","range":64,"damage":50,"speed":-1,"charge":100,"price":6000,"ammo":10,"level":3,"order":29,"type":"Mine","bot":false},{"name":"EMP Mine","range":24,"damage":30,"speed":-1,"charge":100,"price":10000,"ammo":4,"level":6,"order":30,"type":"Mine","bot":false},{"name":"Hull Nanobots","range":-1,"damage":-150,"speed":-1,"charge":175,"price":50000,"ammo":3,"level":8,"order":34,"type":"Misc","bot":false},{"name":"Photon Cloak","range":-1,"damage":-1,"speed":-1,"charge":600,"price":30000,"ammo":2,"level":4,"order":35,"type":"Misc","bot":false},{"name":"Generator","range":-1,"damage":-1,"speed":-1,"charge":0,"price":60000,"ammo":-1,"level":9,"order":37,"type":"Misc","bot":false},{"name":"Turbo","range":-1,"damage":-1,"speed":1.44,"charge":0,"price":15000,"ammo":-1,"level":2,"order":31,"type":"Misc","bot":false},{"name":"Hyperdrive","range":-1,"damage":-1,"speed":10000,"charge":0,"price":3500,"ammo":-2,"level":5,"order":32,"type":"Misc","bot":false},{"name":"Pulse Wave","range":10000,"damage":0,"speed":40,"charge":100,"price":25000,"ammo":1,"level":7,"order":36,"type":"Misc","bot":false},{"name":"Electromagnet","range":512,"damage":0.1666,"speed":-1,"charge":0,"price":40000,"ammo":-1,"level":8,"order":38,"type":"Misc","bot":false},{"name":"EMP Blast","range":100000,"damage":-1,"speed":-1,"charge":150,"price":50000,"ammo":2,"level":9,"order":24,"type":"Blast","bot":false},{"name":"Mining Laser","range":100,"damage":30,"speed":-1,"charge":5,"price":5000,"ammo":-1,"level":1,"order":16,"type":"Beam","bot":false},{"name":"Turret","range":1000,"damage":30,"speed":-1,"charge":8,"price":750000,"ammo":-2,"level":10,"order":40,"type":"Misc","bot":false},{"name":"Gravity Bomb","range":2500,"damage":300,"speed":10,"charge":0,"price":2000000,"ammo":-2,"level":10,"order":41,"type":"Misc","bot":false},{"name":"Warp Drive","range":-1,"damage":-1,"speed":500,"charge":150,"price":200000,"ammo":3,"level":7,"order":33,"type":"Misc","bot":false},{"name":"Ore Cannon","range":200,"damage":60,"speed":-1,"charge":5,"price":20000,"ammo":-1,"level":2,"order":17,"type":"Beam","bot":false},{"name":"Destabilizer","range":1000000,"damage":-1,"speed":-1,"charge":100,"price":4000,"ammo":3,"level":6,"order":22,"type":"Beam","bot":false},{"name":"Impulse Mine","range":16,"damage":0,"speed":-1,"charge":25,"price":6000,"ammo":10,"level":4,"order":27,"type":"Mine","bot":false},{"name":"Grenades","range":16,"damage":45,"speed":30,"charge":25,"price":8000,"ammo":10,"level":3,"order":28,"type":"Mine","bot":false},{"name":"Muon Ray","range":10000,"damage":300,"speed":-1,"charge":200,"price":1000000,"ammo":1,"level":10,"order":23,"type":"Blast","bot":false},{"name":"Jammer","range":16,"damage":0,"speed":-1,"charge":3,"price":40000,"ammo":-1,"level":10,"order":18,"type":"Beam","bot":false},{"name":"Supercharger","range":-1,"damage":-1,"speed":-1,"charge":0,"price":100000,"ammo":-2,"level":11,"order":39,"type":"Misc","bot":false},{"name":"Energy Disk","range":125,"damage":25,"speed":8,"charge":25,"price":5000,"ammo":15,"level":0,"order":15,"type":"Orb","bot":true},{"name":"Proximity Fuze","range":125,"damage":25,"speed":40,"charge":25,"price":5000,"ammo":15,"level":5,"order":14,"type":"Missile","bot":true},{"name":"Spreadshot","range":250,"damage":8,"speed":60,"charge":4,"price":30000,"ammo":200,"level":6,"order":7,"type":"Gun","bot":true},{"name":"Submachinegun","range":250,"damage":10,"speed":60,"charge":10,"price":30000,"ammo":1000,"level":6,"order":8,"type":"Gun","bot":true},{"name":"Hypno Ray","range":10000,"damage":0,"speed":-1,"charge":25,"price":5000,"ammo":-2,"level":5,"order":25,"type":"Blast","bot":false}],"planets":["Inocybe","Bisporus","Lophophora","Pluteus","Pholiotina","Panaeolina","Conocybe","Fimicola","Cubensis","Mycena","Cyanescens","Semilanceata","Bohemica","Guzman","Lysergia","Stuntzii","Muscaria","Gymnopilus","Baeocystis","Cordispora","Acutipilea","Rosetta","Copelandia","Azurescens","Indica","Panaeolus","Ovoid","Stropharea","Ayahuasca","Psilocybe","Agaricales","Venenata","Weilii","Amanita","Mexicana","Galerina","Basidius","Argyreia","Allenii","Stamets","Mycetes","Cinctulus","Lophophora","Purpurea","Tampanensis","Aztecorum","Muscaria","Somniferum","Caapi"],"ships":[{"thrust":0.8,"health":100,"agility":1.75,"width":64,"price":7500,"weapons":1,"capacity":4000},{"thrust":0.8,"health":120,"agility":2,"width":64,"price":12500,"weapons":2,"capacity":4800},{"thrust":0.7,"health":180,"agility":1,"width":64,"price":20000,"weapons":3,"capacity":10000},{"thrust":0.9,"health":80,"agility":2.2,"width":64,"price":25000,"weapons":3,"capacity":2000},{"thrust":0.7,"health":150,"agility":2.2,"width":64,"price":40000,"weapons":4,"capacity":1800},{"thrust":0.6,"health":175,"agility":1.5,"width":64,"price":50000,"weapons":5,"capacity":4000},{"thrust":0.65,"health":130,"agility":0.8,"width":64,"price":75000,"weapons":6,"capacity":3000},{"thrust":0.45,"health":250,"agility":0.7,"width":128,"price":100000,"weapons":6,"capacity":3500},{"thrust":0.55,"health":180,"agility":0.8,"width":128,"price":200000,"weapons":7,"capacity":3000},{"thrust":0.4,"health":270,"agility":0.7,"width":128,"price":250000,"weapons":7,"capacity":8000},{"thrust":0.45,"health":250,"agility":0.8,"width":128,"price":250000,"weapons":8,"capacity":5000},{"thrust":0.5,"health":220,"agility":0.7,"width":128,"weapons":8,"price":400000,"capacity":2000},{"thrust":0.3,"health":600,"agility":0.3,"width":192,"price":400000,"weapons":9,"capacity":50000},{"thrust":0.35,"health":300,"agility":0.3,"width":128,"price":500000,"weapons":9,"capacity":10000},{"thrust":0.4,"health":250,"agility":0.5,"width":128,"price":1000000,"weapons":9,"capacity":2000},{"thrust":0.32,"health":500,"agility":0.3,"width":192,"price":1000000,"weapons":10,"capacity":20000},{"thrust":0.5,"health":250,"agility":0.4,"width":128,"weapons":"10 + Turbo (active) + C-turbo simultaneous combo (passive)","price":2000000,"capacity":5000},{"thrust":0.22,"health":800,"agility":0.3,"width":192,"price":2500000,"weapons":"10 + Asteroid launcher (active) + Mining web (passive)","capacity":999999},{"thrust":0.32,"health":500,"agility":0.3,"width":128,"price":3000000,"weapons":"10 + unlimited Spreadshot (active)","capacity":10000},{"thrust":0.4,"health":300,"agility":0.5,"width":128,"price":5000000,"weapons":"10 + Healing Item (active + 1.5 sec sector EMP blast (passive))","capacity":5000},{"thrust":0.2,"health":600,"agility":0.25,"width":192,"price":10000000,"weapons": "10 + Infinite Grav Bomb shooter (active)","capacity":20000}]}')
}, function(e, t, n) {
    var r = n(38),
        o = n(9),
        i = n(20),
        a = n(4)("socket.io-client");
    e.exports = t = l;
    var s = t.managers = {};

    function l(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var n, o = r(e),
            l = o.source,
            u = o.id,
            c = o.path,
            f = s[u] && c in s[u].nsps;
        return t.forceNew || t["force new connection"] || !1 === t.multiplex || f ? (a("ignoring socket cache for %s", l), n = i(l, t)) : (s[u] || (a("new io instance for %s", l), s[u] = i(l, t)), n = s[u]), o.query && !t.query && (t.query = o.query), n.socket(o.path, t)
    }
    t.protocol = o.protocol, t.connect = l, t.Manager = n(20), t.Socket = n(26)
}, function(e, t, n) {
    var r = n(17),
        o = n(4)("socket.io-client:url");
    e.exports = function(e, t) {
        var n = e;
        t = t || "undefined" != typeof location && location, null == e && (e = t.protocol + "//" + t.host);
        "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (o("protocol-less url %s", e), e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), o("parse %s", e), n = r(e));
        n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
        n.path = n.path || "/";
        var i = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
        return n.id = n.protocol + "://" + i + ":" + n.port, n.href = n.protocol + "://" + i + (t && t.port === n.port ? "" : ":" + n.port), n
    }
}, function(e, t, n) {
    e.exports = function(e) {
        function t(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
            return r.colors[Math.abs(t) % r.colors.length]
        }

        function r(e) {
            let n;

            function a(...e) {
                if (!a.enabled) return;
                const t = a,
                    o = Number(new Date),
                    i = o - (n || o);
                t.diff = i, t.prev = n, t.curr = o, n = o, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let s = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
                    if ("%%" === n) return n;
                    s++;
                    const i = r.formatters[o];
                    if ("function" == typeof i) {
                        const r = e[s];
                        n = i.call(t, r), e.splice(s, 1), s--
                    }
                    return n
                }), r.formatArgs.call(t, e), (t.log || r.log).apply(t, e)
            }
            return a.namespace = e, a.enabled = r.enabled(e), a.useColors = r.useColors(), a.color = t(e), a.destroy = o, a.extend = i, "function" == typeof r.init && r.init(a), r.instances.push(a), a
        }

        function o() {
            const e = r.instances.indexOf(this);
            return -1 !== e && (r.instances.splice(e, 1), !0)
        }

        function i(e, t) {
            const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
            return n.log = this.log, n
        }

        function a(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        return r.debug = r, r.default = r, r.coerce = function(e) {
            if (e instanceof Error) return e.stack || e.message;
            return e
        }, r.disable = function() {
            const e = [...r.names.map(a), ...r.skips.map(a).map(e => "-" + e)].join(",");
            return r.enable(""), e
        }, r.enable = function(e) {
            let t;
            r.save(e), r.names = [], r.skips = [];
            const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                o = n.length;
            for (t = 0; t < o; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
            for (t = 0; t < r.instances.length; t++) {
                const e = r.instances[t];
                e.enabled = r.enabled(e.namespace)
            }
        }, r.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            let t, n;
            for (t = 0, n = r.skips.length; t < n; t++)
                if (r.skips[t].test(e)) return !1;
            for (t = 0, n = r.names.length; t < n; t++)
                if (r.names[t].test(e)) return !0;
            return !1
        }, r.humanize = n(40), Object.keys(e).forEach(t => {
            r[t] = e[t]
        }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
    }
}, function(e, t) {
    var n = 1e3,
        r = 60 * n,
        o = 60 * r,
        i = 24 * o,
        a = 7 * i,
        s = 365.25 * i;

    function l(e, t, n, r) {
        var o = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (o ? "s" : "")
    }
    e.exports = function(e, t) {
        t = t || {};
        var u = typeof e;
        if ("string" === u && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var l = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return l * s;
                case "weeks":
                case "week":
                case "w":
                    return l * a;
                case "days":
                case "day":
                case "d":
                    return l * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return l * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return l * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return l * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return l;
                default:
                    return
            }
        }(e);
        if ("number" === u && isFinite(e)) return t.long ? function(e) {
            var t = Math.abs(e);
            if (t >= i) return l(e, t, i, "day");
            if (t >= o) return l(e, t, o, "hour");
            if (t >= r) return l(e, t, r, "minute");
            if (t >= n) return l(e, t, n, "second");
            return e + " ms"
        }(e) : function(e) {
            var t = Math.abs(e);
            if (t >= i) return Math.round(e / i) + "d";
            if (t >= o) return Math.round(e / o) + "h";
            if (t >= r) return Math.round(e / r) + "m";
            if (t >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    (function(r) {
        function o() {
            var e;
            try {
                e = t.storage.debug
            } catch (e) {}
            return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e
        }(t = e.exports = n(42)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, t.formatArgs = function(e) {
            var n = this.useColors;
            if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
            var r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            var o = 0,
                i = 0;
            e[0].replace(/%[a-zA-Z%]/g, (function(e) {
                "%%" !== e && (o++, "%c" === e && (i = o))
            })), e.splice(i, 0, r)
        }, t.save = function(e) {
            try {
                null == e ? t.storage.removeItem("debug") : t.storage.debug = e
            } catch (e) {}
        }, t.load = o, t.useColors = function() {
            if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, t.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, t.enable(o())
    }).call(this, n(8))
}, function(e, t, n) {
    function r(e) {
        var n;

        function r() {
            if (r.enabled) {
                var e = r,
                    o = +new Date,
                    i = o - (n || o);
                e.diff = i, e.prev = n, e.curr = o, n = o;
                for (var a = new Array(arguments.length), s = 0; s < a.length; s++) a[s] = arguments[s];
                a[0] = t.coerce(a[0]), "string" != typeof a[0] && a.unshift("%O");
                var l = 0;
                a[0] = a[0].replace(/%([a-zA-Z%])/g, (function(n, r) {
                    if ("%%" === n) return n;
                    l++;
                    var o = t.formatters[r];
                    if ("function" == typeof o) {
                        var i = a[l];
                        n = o.call(e, i), a.splice(l, 1), l--
                    }
                    return n
                })), t.formatArgs.call(e, a), (r.log || t.log || console.log.bind(console)).apply(e, a)
            }
        }
        return r.namespace = e, r.enabled = t.enabled(e), r.useColors = t.useColors(), r.color = function(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length]
        }(e), r.destroy = o, "function" == typeof t.init && t.init(r), t.instances.push(r), r
    }

    function o() {
        var e = t.instances.indexOf(this);
        return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = r.debug = r.default = r).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function() {
        t.enable("")
    }, t.enable = function(e) {
        var n;
        t.save(e), t.names = [], t.skips = [];
        var r = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = r.length;
        for (n = 0; n < o; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        for (n = 0; n < t.instances.length; n++) {
            var i = t.instances[n];
            i.enabled = t.enabled(i.namespace)
        }
    }, t.enabled = function(e) {
        if ("*" === e[e.length - 1]) return !0;
        var n, r;
        for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
        for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
        return !1
    }, t.humanize = n(43), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
}, function(e, t) {
    var n = 1e3,
        r = 60 * n,
        o = 60 * r,
        i = 24 * o,
        a = 365.25 * i;

    function s(e, t, n) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var l, u = typeof e;
        if ("string" === u && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var s = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return s * a;
                case "days":
                case "day":
                case "d":
                    return s * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return s * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return s * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return s * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return s;
                default:
                    return
            }
        }(e);
        if ("number" === u && !1 === isNaN(e)) return t.long ? s(l = e, i, "day") || s(l, o, "hour") || s(l, r, "minute") || s(l, n, "second") || l + " ms" : function(e) {
            if (e >= i) return Math.round(e / i) + "d";
            if (e >= o) return Math.round(e / o) + "h";
            if (e >= r) return Math.round(e / r) + "m";
            if (e >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    var r = n(18),
        o = n(19),
        i = Object.prototype.toString,
        a = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === i.call(Blob),
        s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === i.call(File);
    t.deconstructPacket = function(e) {
        var t = [],
            n = e.data,
            i = e;
        return i.data = function e(t, n) {
            if (!t) return t;
            if (o(t)) {
                var i = {
                    _placeholder: !0,
                    num: n.length
                };
                return n.push(t), i
            }
            if (r(t)) {
                for (var a = new Array(t.length), s = 0; s < t.length; s++) a[s] = e(t[s], n);
                return a
            }
            if ("object" == typeof t && !(t instanceof Date)) {
                a = {};
                for (var l in t) a[l] = e(t[l], n);
                return a
            }
            return t
        }(n, t), i.attachments = t.length, {
            packet: i,
            buffers: t
        }
    }, t.reconstructPacket = function(e, t) {
        return e.data = function e(t, n) {
            if (!t) return t;
            if (t && t._placeholder) return n[t.num];
            if (r(t))
                for (var o = 0; o < t.length; o++) t[o] = e(t[o], n);
            else if ("object" == typeof t)
                for (var i in t) t[i] = e(t[i], n);
            return t
        }(e.data, t), e.attachments = void 0, e
    }, t.removeBlobs = function(e, t) {
        var n = 0,
            i = e;
        ! function e(l, u, c) {
            if (!l) return l;
            if (a && l instanceof Blob || s && l instanceof File) {
                n++;
                var f = new FileReader;
                f.onload = function() {
                    c ? c[u] = this.result : i = this.result, --n || t(i)
                }, f.readAsArrayBuffer(l)
            } else if (r(l))
                for (var d = 0; d < l.length; d++) e(l[d], d, l);
            else if ("object" == typeof l && !o(l))
                for (var p in l) e(l[p], p, l)
        }(i), n || t(i)
    }
}, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = u(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function(e) {
        var t, n, r = u(e),
            a = r[0],
            s = r[1],
            l = new i(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, a, s)),
            c = 0,
            f = s > 0 ? a - 4 : a;
        for (n = 0; n < f; n += 4) t = o[e.charCodeAt(n)] << 18 | o[e.charCodeAt(n + 1)] << 12 | o[e.charCodeAt(n + 2)] << 6 | o[e.charCodeAt(n + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
        2 === s && (t = o[e.charCodeAt(n)] << 2 | o[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t);
        1 === s && (t = o[e.charCodeAt(n)] << 10 | o[e.charCodeAt(n + 1)] << 4 | o[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t);
        return l
    }, t.fromByteArray = function(e) {
        for (var t, n = e.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(c(e, a, a + 16383 > s ? s : a + 16383));
        1 === o ? (t = e[n - 1], i.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === o && (t = (e[n - 2] << 8) + e[n - 1], i.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return i.join("")
    };
    for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) r[s] = a[s], o[a.charCodeAt(s)] = s;

    function u(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function c(e, t, n) {
        for (var o, i, a = [], s = t; s < n; s += 3) o = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
        return a.join("")
    }
    o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
}, function(e, t) {
    t.read = function(e, t, n, r, o) {
        var i, a, s = 8 * o - r - 1,
            l = (1 << s) - 1,
            u = l >> 1,
            c = -7,
            f = n ? o - 1 : 0,
            d = n ? -1 : 1,
            p = e[t + f];
        for (f += d, i = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; i = 256 * i + e[t + f], f += d, c -= 8);
        for (a = i & (1 << -c) - 1, i >>= -c, c += r; c > 0; a = 256 * a + e[t + f], f += d, c -= 8);
        if (0 === i) i = 1 - u;
        else {
            if (i === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
            a += Math.pow(2, r), i -= u
        }
        return (p ? -1 : 1) * a * Math.pow(2, i - r)
    }, t.write = function(e, t, n, r, o, i) {
        var a, s, l, u = 8 * i - o - 1,
            c = (1 << u) - 1,
            f = c >> 1,
            d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : i - 1,
            h = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + f >= 1 ? d / l : d * Math.pow(2, 1 - f)) * l >= 2 && (a++, l /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * l - 1) * Math.pow(2, o), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; e[n + p] = 255 & s, p += h, s /= 256, o -= 8);
        for (a = a << o | s, u += o; u > 0; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
        e[n + p - h] |= 128 * m
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t, n) {
    e.exports = n(49), e.exports.parser = n(3)
}, function(e, t, n) {
    var r = n(21),
        o = n(14),
        i = n(7)("engine.io-client:socket"),
        a = n(25),
        s = n(3),
        l = n(17),
        u = n(5);

    function c(e, t) {
        if (!(this instanceof c)) return new c(e, t);
        t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = l(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = l(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = u.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = !1 !== t.withCredentials, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    e.exports = c, c.priorWebsocketSuccess = !1, o(c.prototype), c.protocol = s.protocol, c.Socket = c, c.Transport = n(13), c.transports = n(21), c.parser = n(3), c.prototype.createTransport = function(e) {
        i('creating transport "%s"', e);
        var t = function(e) {
            var t = {};
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }(this.query);
        t.EIO = s.protocol, t.transport = e;
        var n = this.transportOptions[e] || {};
        return this.id && (t.sid = this.id), new r[e]({
            query: t,
            socket: this,
            agent: n.agent || this.agent,
            hostname: n.hostname || this.hostname,
            port: n.port || this.port,
            secure: n.secure || this.secure,
            path: n.path || this.path,
            forceJSONP: n.forceJSONP || this.forceJSONP,
            jsonp: n.jsonp || this.jsonp,
            forceBase64: n.forceBase64 || this.forceBase64,
            enablesXDR: n.enablesXDR || this.enablesXDR,
            withCredentials: n.withCredentials || this.withCredentials,
            timestampRequests: n.timestampRequests || this.timestampRequests,
            timestampParam: n.timestampParam || this.timestampParam,
            policyPort: n.policyPort || this.policyPort,
            pfx: n.pfx || this.pfx,
            key: n.key || this.key,
            passphrase: n.passphrase || this.passphrase,
            cert: n.cert || this.cert,
            ca: n.ca || this.ca,
            ciphers: n.ciphers || this.ciphers,
            rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: n.extraHeaders || this.extraHeaders,
            forceNode: n.forceNode || this.forceNode,
            localAddress: n.localAddress || this.localAddress,
            requestTimeout: n.requestTimeout || this.requestTimeout,
            protocols: n.protocols || void 0,
            isReactNative: this.isReactNative
        })
    }, c.prototype.open = function() {
        var e;
        if (this.rememberUpgrade && c.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
        else {
            if (0 === this.transports.length) {
                var t = this;
                return void setTimeout((function() {
                    t.emit("error", "No transports available")
                }), 0)
            }
            e = this.transports[0]
        }
        this.readyState = "opening";
        try {
            e = this.createTransport(e)
        } catch (e) {
            return this.transports.shift(), void this.open()
        }
        e.open(), this.setTransport(e)
    }, c.prototype.setTransport = function(e) {
        i("setting transport %s", e.name);
        var t = this;
        this.transport && (i("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", (function() {
            t.onDrain()
        })).on("packet", (function(e) {
            t.onPacket(e)
        })).on("error", (function(e) {
            t.onError(e)
        })).on("close", (function() {
            t.onClose("transport close")
        }))
    }, c.prototype.probe = function(e) {
        i('probing transport "%s"', e);
        var t = this.createTransport(e, {
                probe: 1
            }),
            n = !1,
            r = this;

        function o() {
            if (r.onlyBinaryUpgrades) {
                var o = !this.supportsBinary && r.transport.supportsBinary;
                n = n || o
            }
            n || (i('probe transport "%s" opened', e), t.send([{
                type: "ping",
                data: "probe"
            }]), t.once("packet", (function(o) {
                if (!n)
                    if ("pong" === o.type && "probe" === o.data) {
                        if (i('probe transport "%s" pong', e), r.upgrading = !0, r.emit("upgrading", t), !t) return;
                        c.priorWebsocketSuccess = "websocket" === t.name, i('pausing current transport "%s"', r.transport.name), r.transport.pause((function() {
                            n || "closed" !== r.readyState && (i("changing transport and sending upgrade packet"), d(), r.setTransport(t), t.send([{
                                type: "upgrade"
                            }]), r.emit("upgrade", t), t = null, r.upgrading = !1, r.flush())
                        }))
                    } else {
                        i('probe transport "%s" failed', e);
                        var a = new Error("probe error");
                        a.transport = t.name, r.emit("upgradeError", a)
                    }
            })))
        }

        function a() {
            n || (n = !0, d(), t.close(), t = null)
        }

        function s(n) {
            var o = new Error("probe error: " + n);
            o.transport = t.name, a(), i('probe transport "%s" failed because of error: %s', e, n), r.emit("upgradeError", o)
        }

        function l() {
            s("transport closed")
        }

        function u() {
            s("socket closed")
        }

        function f(e) {
            t && e.name !== t.name && (i('"%s" works - aborting "%s"', e.name, t.name), a())
        }

        function d() {
            t.removeListener("open", o), t.removeListener("error", s), t.removeListener("close", l), r.removeListener("close", u), r.removeListener("upgrading", f)
        }
        c.priorWebsocketSuccess = !1, t.once("open", o), t.once("error", s), t.once("close", l), this.once("close", u), this.once("upgrading", f), t.open()
    }, c.prototype.onOpen = function() {
        if (i("socket open"), this.readyState = "open", c.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
            i("starting upgrade probes");
            for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
        }
    }, c.prototype.onPacket = function(e) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (i('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "pong":
                this.setPing(), this.emit("pong");
                break;
            case "error":
                var t = new Error("server error");
                t.code = e.data, this.onError(t);
                break;
            case "message":
                this.emit("data", e.data), this.emit("message", e.data)
        } else i('packet received with socket readyState "%s"', this.readyState)
    }, c.prototype.onHandshake = function(e) {
        this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, c.prototype.onHeartbeat = function(e) {
        clearTimeout(this.pingTimeoutTimer);
        var t = this;
        t.pingTimeoutTimer = setTimeout((function() {
            "closed" !== t.readyState && t.onClose("ping timeout")
        }), e || t.pingInterval + t.pingTimeout)
    }, c.prototype.setPing = function() {
        var e = this;
        clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout((function() {
            i("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
        }), e.pingInterval)
    }, c.prototype.ping = function() {
        var e = this;
        this.sendPacket("ping", (function() {
            e.emit("ping")
        }))
    }, c.prototype.onDrain = function() {
        this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
    }, c.prototype.flush = function() {
        "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (i("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, c.prototype.write = c.prototype.send = function(e, t, n) {
        return this.sendPacket("message", e, t, n), this
    }, c.prototype.sendPacket = function(e, t, n, r) {
        if ("function" == typeof t && (r = t, t = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
            (n = n || {}).compress = !1 !== n.compress;
            var o = {
                type: e,
                data: t,
                options: n
            };
            this.emit("packetCreate", o), this.writeBuffer.push(o), r && this.once("flush", r), this.flush()
        }
    }, c.prototype.close = function() {
        if ("opening" === this.readyState || "open" === this.readyState) {
            this.readyState = "closing";
            var e = this;
            this.writeBuffer.length ? this.once("drain", (function() {
                this.upgrading ? r() : t()
            })) : this.upgrading ? r() : t()
        }

        function t() {
            e.onClose("forced close"), i("socket closing - telling transport to close"), e.transport.close()
        }

        function n() {
            e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
        }

        function r() {
            e.once("upgrade", n), e.once("upgradeError", n)
        }
        return this
    }, c.prototype.onError = function(e) {
        i("socket error %j", e), c.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
    }, c.prototype.onClose = function(e, t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
            i('socket close with reason: "%s"', e);
            clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0
        }
    }, c.prototype.filterUpgrades = function(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) ~a(this.transports, e[n]) && t.push(e[n]);
        return t
    }
}, function(e, t) {
    try {
        e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (t) {
        e.exports = !1
    }
}, function(e, t, n) {
    var r = n(12),
        o = n(22),
        i = n(14),
        a = n(6),
        s = n(7)("engine.io-client:polling-xhr");

    function l() {}

    function u(e) {
        if (o.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, "undefined" != typeof location) {
            var t = "https:" === location.protocol,
                n = location.port;
            n || (n = t ? 443 : 80), this.xd = "undefined" != typeof location && e.hostname !== location.hostname || n !== e.port, this.xs = e.secure !== t
        }
    }

    function c(e) {
        this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
    }
    if (e.exports = u, e.exports.Request = c, a(u, o), u.prototype.supportsBinary = !0, u.prototype.request = function(e) {
            return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new c(e)
        }, u.prototype.doWrite = function(e, t) {
            var n = "string" != typeof e && void 0 !== e,
                r = this.request({
                    method: "POST",
                    data: e,
                    isBinary: n
                }),
                o = this;
            r.on("success", t), r.on("error", (function(e) {
                o.onError("xhr post error", e)
            })), this.sendXhr = r
        }, u.prototype.doPoll = function() {
            s("xhr poll");
            var e = this.request(),
                t = this;
            e.on("data", (function(e) {
                t.onData(e)
            })), e.on("error", (function(e) {
                t.onError("xhr poll error", e)
            })), this.pollXhr = e
        }, i(c.prototype), c.prototype.create = function() {
            var e = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
            var t = this.xhr = new r(e),
                n = this;
            try {
                s("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var o in t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(o) && t.setRequestHeader(o, this.extraHeaders[o])
                } catch (e) {}
                if ("POST" === this.method) try {
                    this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (e) {}
                try {
                    t.setRequestHeader("Accept", "*/*")
                } catch (e) {}
                "withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
                    n.onLoad()
                }, t.onerror = function() {
                    n.onError(t.responseText)
                }) : t.onreadystatechange = function() {
                    if (2 === t.readyState) try {
                        var e = t.getResponseHeader("Content-Type");
                        (n.supportsBinary && "application/octet-stream" === e || "application/octet-stream; charset=UTF-8" === e) && (t.responseType = "arraybuffer")
                    } catch (e) {}
                    4 === t.readyState && (200 === t.status || 1223 === t.status ? n.onLoad() : setTimeout((function() {
                        n.onError("number" == typeof t.status ? t.status : 0)
                    }), 0))
                }, s("xhr data %s", this.data), t.send(this.data)
            } catch (e) {
                return void setTimeout((function() {
                    n.onError(e)
                }), 0)
            }
            "undefined" != typeof document && (this.index = c.requestsCount++, c.requests[this.index] = this)
        }, c.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, c.prototype.onData = function(e) {
            this.emit("data", e), this.onSuccess()
        }, c.prototype.onError = function(e) {
            this.emit("error", e), this.cleanup(!0)
        }, c.prototype.cleanup = function(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = l : this.xhr.onreadystatechange = l, e) try {
                    this.xhr.abort()
                } catch (e) {}
                "undefined" != typeof document && delete c.requests[this.index], this.xhr = null
            }
        }, c.prototype.onLoad = function() {
            var e;
            try {
                var t;
                try {
                    t = this.xhr.getResponseHeader("Content-Type")
                } catch (e) {}
                e = ("application/octet-stream" === t || "application/octet-stream; charset=UTF-8" === t) && this.xhr.response || this.xhr.responseText
            } catch (e) {
                this.onError(e)
            }
            null != e && this.onData(e)
        }, c.prototype.hasXDR = function() {
            return "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
        }, c.prototype.abort = function() {
            this.cleanup()
        }, c.requestsCount = 0, c.requests = {}, "undefined" != typeof document)
        if ("function" == typeof attachEvent) attachEvent("onunload", d);
        else if ("function" == typeof addEventListener) {
        var f = "onpagehide" in self ? "pagehide" : "unload";
        addEventListener(f, d, !1)
    }

    function d() {
        for (var e in c.requests) c.requests.hasOwnProperty(e) && c.requests[e].abort()
    }
}, function(e, t) {
    e.exports = Object.keys || function(e) {
        var t = [],
            n = Object.prototype.hasOwnProperty;
        for (var r in e) n.call(e, r) && t.push(r);
        return t
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(e, t) {
    e.exports = function(e, t, n) {
        var r = e.byteLength;
        if (t = t || 0, n = n || r, e.slice) return e.slice(t, n);
        if (t < 0 && (t += r), n < 0 && (n += r), n > r && (n = r), t >= r || t >= n || 0 === r) return new ArrayBuffer(0);
        for (var o = new Uint8Array(e), i = new Uint8Array(n - t), a = t, s = 0; a < n; a++, s++) i[s] = o[a];
        return i.buffer
    }
}, function(e, t) {
    function n() {}
    e.exports = function(e, t, r) {
        var o = !1;
        return r = r || n, i.count = e, 0 === e ? t() : i;

        function i(e, n) {
            if (i.count <= 0) throw new Error("after called too many times");
            --i.count, e ? (o = !0, t(e), t = r) : 0 !== i.count || o || t(null, n)
        }
    }
}, function(e, t) {
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var n, r, o, i = String.fromCharCode;

    function a(e) {
        for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
        return r
    }

    function s(e, t) {
        if (e >= 55296 && e <= 57343) {
            if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
            return !1
        }
        return !0
    }

    function l(e, t) {
        return i(e >> t & 63 | 128)
    }

    function u(e, t) {
        if (0 == (4294967168 & e)) return i(e);
        var n = "";
        return 0 == (4294965248 & e) ? n = i(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (s(e, t) || (e = 65533), n = i(e >> 12 & 15 | 224), n += l(e, 6)) : 0 == (4292870144 & e) && (n = i(e >> 18 & 7 | 240), n += l(e, 12), n += l(e, 6)), n += i(63 & e | 128)
    }

    function c() {
        if (o >= r) throw Error("Invalid byte index");
        var e = 255 & n[o];
        if (o++, 128 == (192 & e)) return 63 & e;
        throw Error("Invalid continuation byte")
    }

    function f(e) {
        var t, i;
        if (o > r) throw Error("Invalid byte index");
        if (o == r) return !1;
        if (t = 255 & n[o], o++, 0 == (128 & t)) return t;
        if (192 == (224 & t)) {
            if ((i = (31 & t) << 6 | c()) >= 128) return i;
            throw Error("Invalid continuation byte")
        }
        if (224 == (240 & t)) {
            if ((i = (15 & t) << 12 | c() << 6 | c()) >= 2048) return s(i, e) ? i : 65533;
            throw Error("Invalid continuation byte")
        }
        if (240 == (248 & t) && (i = (7 & t) << 18 | c() << 12 | c() << 6 | c()) >= 65536 && i <= 1114111) return i;
        throw Error("Invalid UTF-8 detected")
    }
    e.exports = {
        version: "2.1.2",
        encode: function(e, t) {
            for (var n = !1 !== (t = t || {}).strict, r = a(e), o = r.length, i = -1, s = ""; ++i < o;) s += u(r[i], n);
            return s
        },
        decode: function(e, t) {
            var s = !1 !== (t = t || {}).strict;
            n = a(e), r = n.length, o = 0;
            for (var l, u = []; !1 !== (l = f(s));) u.push(l);
            return function(e) {
                for (var t, n = e.length, r = -1, o = ""; ++r < n;)(t = e[r]) > 65535 && (o += i((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), o += i(t);
                return o
            }(u)
        }
    }
}, function(e, t) {
    ! function() {
        "use strict";
        for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = new Uint8Array(256), r = 0; r < e.length; r++) n[e.charCodeAt(r)] = r;
        t.encode = function(t) {
            var n, r = new Uint8Array(t),
                o = r.length,
                i = "";
            for (n = 0; n < o; n += 3) i += e[r[n] >> 2], i += e[(3 & r[n]) << 4 | r[n + 1] >> 4], i += e[(15 & r[n + 1]) << 2 | r[n + 2] >> 6], i += e[63 & r[n + 2]];
            return o % 3 == 2 ? i = i.substring(0, i.length - 1) + "=" : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="), i
        }, t.decode = function(e) {
            var t, r, o, i, a, s = .75 * e.length,
                l = e.length,
                u = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            var c = new ArrayBuffer(s),
                f = new Uint8Array(c);
            for (t = 0; t < l; t += 4) r = n[e.charCodeAt(t)], o = n[e.charCodeAt(t + 1)], i = n[e.charCodeAt(t + 2)], a = n[e.charCodeAt(t + 3)], f[u++] = r << 2 | o >> 4, f[u++] = (15 & o) << 4 | i >> 2, f[u++] = (3 & i) << 6 | 63 & a;
            return c
        }
    }()
}, function(e, t) {
    var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
        r = function() {
            try {
                return 2 === new Blob(["hi"]).size
            } catch (e) {
                return !1
            }
        }(),
        o = r && function() {
            try {
                return 2 === new Blob([new Uint8Array([1, 2])]).size
            } catch (e) {
                return !1
            }
        }(),
        i = n && n.prototype.append && n.prototype.getBlob;

    function a(e) {
        return e.map((function(e) {
            if (e.buffer instanceof ArrayBuffer) {
                var t = e.buffer;
                if (e.byteLength !== t.byteLength) {
                    var n = new Uint8Array(e.byteLength);
                    n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = n.buffer
                }
                return t
            }
            return e
        }))
    }

    function s(e, t) {
        t = t || {};
        var r = new n;
        return a(e).forEach((function(e) {
            r.append(e)
        })), t.type ? r.getBlob(t.type) : r.getBlob()
    }

    function l(e, t) {
        return new Blob(a(e), t || {})
    }
    "undefined" != typeof Blob && (s.prototype = Blob.prototype, l.prototype = Blob.prototype), e.exports = r ? o ? Blob : l : i ? s : void 0
}, function(e, t, n) {
    e.exports = function(e) {
        function t(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
            return r.colors[Math.abs(t) % r.colors.length]
        }

        function r(e) {
            let n;

            function a(...e) {
                if (!a.enabled) return;
                const t = a,
                    o = Number(new Date),
                    i = o - (n || o);
                t.diff = i, t.prev = n, t.curr = o, n = o, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let s = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (n, o) => {
                    if ("%%" === n) return n;
                    s++;
                    const i = r.formatters[o];
                    if ("function" == typeof i) {
                        const r = e[s];
                        n = i.call(t, r), e.splice(s, 1), s--
                    }
                    return n
                }), r.formatArgs.call(t, e), (t.log || r.log).apply(t, e)
            }
            return a.namespace = e, a.enabled = r.enabled(e), a.useColors = r.useColors(), a.color = t(e), a.destroy = o, a.extend = i, "function" == typeof r.init && r.init(a), r.instances.push(a), a
        }

        function o() {
            const e = r.instances.indexOf(this);
            return -1 !== e && (r.instances.splice(e, 1), !0)
        }

        function i(e, t) {
            const n = r(this.namespace + (void 0 === t ? ":" : t) + e);
            return n.log = this.log, n
        }

        function a(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        return r.debug = r, r.default = r, r.coerce = function(e) {
            if (e instanceof Error) return e.stack || e.message;
            return e
        }, r.disable = function() {
            const e = [...r.names.map(a), ...r.skips.map(a).map(e => "-" + e)].join(",");
            return r.enable(""), e
        }, r.enable = function(e) {
            let t;
            r.save(e), r.names = [], r.skips = [];
            const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
                o = n.length;
            for (t = 0; t < o; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
            for (t = 0; t < r.instances.length; t++) {
                const e = r.instances[t];
                e.enabled = r.enabled(e.namespace)
            }
        }, r.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            let t, n;
            for (t = 0, n = r.skips.length; t < n; t++)
                if (r.skips[t].test(e)) return !1;
            for (t = 0, n = r.names.length; t < n; t++)
                if (r.names[t].test(e)) return !0;
            return !1
        }, r.humanize = n(60), Object.keys(e).forEach(t => {
            r[t] = e[t]
        }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, r.enable(r.load()), r
    }
}, function(e, t) {
    var n = 1e3,
        r = 60 * n,
        o = 60 * r,
        i = 24 * o,
        a = 7 * i,
        s = 365.25 * i;

    function l(e, t, n, r) {
        var o = t >= 1.5 * n;
        return Math.round(e / n) + " " + r + (o ? "s" : "")
    }
    e.exports = function(e, t) {
        t = t || {};
        var u = typeof e;
        if ("string" === u && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var l = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return l * s;
                case "weeks":
                case "week":
                case "w":
                    return l * a;
                case "days":
                case "day":
                case "d":
                    return l * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return l * o;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return l * r;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return l * n;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return l;
                default:
                    return
            }
        }(e);
        if ("number" === u && isFinite(e)) return t.long ? function(e) {
            var t = Math.abs(e);
            if (t >= i) return l(e, t, i, "day");
            if (t >= o) return l(e, t, o, "hour");
            if (t >= r) return l(e, t, r, "minute");
            if (t >= n) return l(e, t, n, "second");
            return e + " ms"
        }(e) : function(e) {
            var t = Math.abs(e);
            if (t >= i) return Math.round(e / i) + "d";
            if (t >= o) return Math.round(e / o) + "h";
            if (t >= r) return Math.round(e / r) + "m";
            if (t >= n) return Math.round(e / n) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, t, n) {
    (function(t) {
        var r = n(22),
            o = n(6);
        e.exports = c;
        var i, a = /\n/g,
            s = /\\n/g;

        function l() {}

        function u() {
            return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {}
        }

        function c(e) {
            if (r.call(this, e), this.query = this.query || {}, !i) {
                var t = u();
                i = t.___eio = t.___eio || []
            }
            this.index = i.length;
            var n = this;
            i.push((function(e) {
                n.onData(e)
            })), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", (function() {
                n.script && (n.script.onerror = l)
            }), !1)
        }
        o(c, r), c.prototype.supportsBinary = !1, c.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), r.prototype.doClose.call(this)
        }, c.prototype.doPoll = function() {
            var e = this,
                t = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(t) {
                e.onError("jsonp poll error", t)
            };
            var n = document.getElementsByTagName("script")[0];
            n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout((function() {
                var e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e)
            }), 100)
        }, c.prototype.doWrite = function(e, t) {
            var n = this;
            if (!this.form) {
                var r, o = document.createElement("form"),
                    i = document.createElement("textarea"),
                    l = this.iframeId = "eio_iframe_" + this.index;
                o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = l, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), i.name = "d", o.appendChild(i), document.body.appendChild(o), this.form = o, this.area = i
            }

            function u() {
                c(), t()
            }

            function c() {
                if (n.iframe) try {
                    n.form.removeChild(n.iframe)
                } catch (e) {
                    n.onError("jsonp polling iframe removal error", e)
                }
                try {
                    var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
                    r = document.createElement(e)
                } catch (e) {
                    (r = document.createElement("iframe")).name = n.iframeId, r.src = "javascript:0"
                }
                r.id = n.iframeId, n.form.appendChild(r), n.iframe = r
            }
            this.form.action = this.uri(), c(), e = e.replace(s, "\\\n"), this.area.value = e.replace(a, "\\n");
            try {
                this.form.submit()
            } catch (e) {}
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                "complete" === n.iframe.readyState && u()
            } : this.iframe.onload = u
        }
    }).call(this, n(2))
}, function(e, t, n) {
    (function(t) {
        var r, o, i = n(13),
            a = n(3),
            s = n(5),
            l = n(6),
            u = n(24),
            c = n(7)("engine.io-client:websocket");
        if ("undefined" != typeof WebSocket ? r = WebSocket : "undefined" != typeof self && (r = self.WebSocket || self.MozWebSocket), "undefined" == typeof window) try {
            o = n(63)
        } catch (e) {}
        var f = r || o;

        function d(e) {
            e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = r && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (f = o), i.call(this, e)
        }
        e.exports = d, l(d, i), d.prototype.name = "websocket", d.prototype.supportsBinary = !0, d.prototype.doOpen = function() {
            if (this.check()) {
                var e = this.uri(),
                    t = this.protocols,
                    n = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                n.pfx = this.pfx, n.key = this.key, n.passphrase = this.passphrase, n.cert = this.cert, n.ca = this.ca, n.ciphers = this.ciphers, n.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (n.headers = this.extraHeaders), this.localAddress && (n.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new f(e, t) : new f(e) : new f(e, t, n)
                } catch (e) {
                    return this.emit("error", e)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
            }
        }, d.prototype.addEventListeners = function() {
            var e = this;
            this.ws.onopen = function() {
                e.onOpen()
            }, this.ws.onclose = function() {
                e.onClose()
            }, this.ws.onmessage = function(t) {
                e.onData(t.data)
            }, this.ws.onerror = function(t) {
                e.onError("websocket error", t)
            }
        }, d.prototype.write = function(e) {
            var n = this;
            this.writable = !1;
            for (var r = e.length, o = 0, i = r; o < i; o++) ! function(e) {
                a.encodePacket(e, n.supportsBinary, (function(o) {
                    if (!n.usingBrowserWebSocket) {
                        var i = {};
                        if (e.options && (i.compress = e.options.compress), n.perMessageDeflate)("string" == typeof o ? t.byteLength(o) : o.length) < n.perMessageDeflate.threshold && (i.compress = !1)
                    }
                    try {
                        n.usingBrowserWebSocket ? n.ws.send(o) : n.ws.send(o, i)
                    } catch (e) {
                        c("websocket closed before onclose event")
                    }--r || s()
                }))
            }(e[o]);

            function s() {
                n.emit("flush"), setTimeout((function() {
                    n.writable = !0, n.emit("drain")
                }), 0)
            }
        }, d.prototype.onClose = function() {
            i.prototype.onClose.call(this)
        }, d.prototype.doClose = function() {
            void 0 !== this.ws && this.ws.close()
        }, d.prototype.uri = function() {
            var e = this.query || {},
                t = this.secure ? "wss" : "ws",
                n = "";
            return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = u()), this.supportsBinary || (e.b64 = 1), (e = s.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
        }, d.prototype.check = function() {
            return !(!f || "__initialize" in f && this.name === d.prototype.name)
        }
    }).call(this, n(11).Buffer)
}, function(e, t) {}, function(e, t) {
    e.exports = function(e, t) {
        for (var n = [], r = (t = t || 0) || 0; r < e.length; r++) n[r - t] = e[r];
        return n
    }
}, function(e, t) {
    function n(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }
    e.exports = n, n.prototype.duration = function() {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var t = Math.random(),
                n = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
        }
        return 0 | Math.min(e, this.max)
    }, n.prototype.reset = function() {
        this.attempts = 0
    }, n.prototype.setMin = function(e) {
        this.ms = e
    }, n.prototype.setMax = function(e) {
        this.max = e
    }, n.prototype.setJitter = function(e) {
        this.jitter = e
    }
}, function(e, t, n) {
    (function(n) {
        var r;
        /*!
         *  howler.js v2.1.2
         *  howlerjs.com
         *
         *  (c) 2013-2019, James Simpson of GoldFire Studios
         *  goldfirestudios.com
         *
         *  MIT License
         */
        ! function() {
            "use strict";
            var o = function() {
                this.init()
            };
            o.prototype = {
                init: function() {
                    var e = this || i;
                    return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
                },
                volume: function(e) {
                    var t = this || i;
                    if (e = parseFloat(e), t.ctx || p(), void 0 !== e && e >= 0 && e <= 1) {
                        if (t._volume = e, t._muted) return t;
                        t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
                        for (var n = 0; n < t._howls.length; n++)
                            if (!t._howls[n]._webAudio)
                                for (var r = t._howls[n]._getSoundIds(), o = 0; o < r.length; o++) {
                                    var a = t._howls[n]._soundById(r[o]);
                                    a && a._node && (a._node.volume = a._volume * e)
                                }
                            return t
                    }
                    return t._volume
                },
                mute: function(e) {
                    var t = this || i;
                    t.ctx || p(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, i.ctx.currentTime);
                    for (var n = 0; n < t._howls.length; n++)
                        if (!t._howls[n]._webAudio)
                            for (var r = t._howls[n]._getSoundIds(), o = 0; o < r.length; o++) {
                                var a = t._howls[n]._soundById(r[o]);
                                a && a._node && (a._node.muted = !!e || a._muted)
                            }
                        return t
                },
                unload: function() {
                    for (var e = this || i, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                    return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, p()), e
                },
                codecs: function(e) {
                    return (this || i)._codecs[e.replace(/^x-/, "")]
                },
                _setup: function() {
                    var e = this || i;
                    if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio)
                        if ("undefined" != typeof Audio) try {
                            void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                        } catch (t) {
                            e.noAudio = !0
                        } else e.noAudio = !0;
                    try {
                        (new Audio).muted && (e.noAudio = !0)
                    } catch (e) {}
                    return e.noAudio || e._setupCodecs(), e
                },
                _setupCodecs: function() {
                    var e = this || i,
                        t = null;
                    try {
                        t = "undefined" != typeof Audio ? new Audio : null
                    } catch (t) {
                        return e
                    }
                    if (!t || "function" != typeof t.canPlayType) return e;
                    var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                        o = r && parseInt(r[0].split("/")[1], 10) < 33;
                    return e._codecs = {
                        mp3: !(o || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                        mpeg: !!n,
                        opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                        ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                        wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                        aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                        caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                        m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                        weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                        webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                        dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                        flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                    }, e
                },
                _unlockAudio: function() {
                    var e = this || i;
                    if (!e._audioUnlocked && e.ctx) {
                        e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                        var t = function(n) {
                            for (var r = 0; r < e.html5PoolSize; r++) try {
                                var o = new Audio;
                                o._unlocked = !0, e._releaseHtml5Audio(o)
                            } catch (n) {
                                e.noAudio = !0
                            }
                            for (r = 0; r < e._howls.length; r++)
                                if (!e._howls[r]._webAudio)
                                    for (var i = e._howls[r]._getSoundIds(), a = 0; a < i.length; a++) {
                                        var s = e._howls[r]._soundById(i[a]);
                                        s && s._node && !s._node._unlocked && (s._node._unlocked = !0, s._node.load())
                                    }
                                e._autoResume();
                            var l = e.ctx.createBufferSource();
                            l.buffer = e._scratchBuffer, l.connect(e.ctx.destination), void 0 === l.start ? l.noteOn(0) : l.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), l.onended = function() {
                                l.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0);
                                for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock")
                            }
                        };
                        return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), e
                    }
                },
                _obtainHtml5Audio: function() {
                    var e = this || i;
                    if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                    var t = (new Audio).play();
                    return t && "undefined" != typeof Promise && (t instanceof Promise || "function" == typeof t.then) && t.catch((function() {
                        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                    })), new Audio
                },
                _releaseHtml5Audio: function(e) {
                    var t = this || i;
                    return e._unlocked && t._html5AudioPool.push(e), t
                },
                _autoSuspend: function() {
                    var e = this;
                    if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && i.usingWebAudio) {
                        for (var t = 0; t < e._howls.length; t++)
                            if (e._howls[t]._webAudio)
                                for (var n = 0; n < e._howls[t]._sounds.length; n++)
                                    if (!e._howls[t]._sounds[n]._paused) return e;
                        return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout((function() {
                            e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then((function() {
                                e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                            })))
                        }), 3e4), e
                    }
                },
                _autoResume: function() {
                    var e = this;
                    if (e.ctx && void 0 !== e.ctx.resume && i.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then((function() {
                        e.state = "running";
                        for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                    })), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                }
            };
            var i = new o,
                a = function(e) {
                    e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
                };
            a.prototype = {
                init: function(e) {
                    var t = this;
                    return i.ctx || p(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
                        fn: e.onend
                    }] : [], t._onfade = e.onfade ? [{
                        fn: e.onfade
                    }] : [], t._onload = e.onload ? [{
                        fn: e.onload
                    }] : [], t._onloaderror = e.onloaderror ? [{
                        fn: e.onloaderror
                    }] : [], t._onplayerror = e.onplayerror ? [{
                        fn: e.onplayerror
                    }] : [], t._onpause = e.onpause ? [{
                        fn: e.onpause
                    }] : [], t._onplay = e.onplay ? [{
                        fn: e.onplay
                    }] : [], t._onstop = e.onstop ? [{
                        fn: e.onstop
                    }] : [], t._onmute = e.onmute ? [{
                        fn: e.onmute
                    }] : [], t._onvolume = e.onvolume ? [{
                        fn: e.onvolume
                    }] : [], t._onrate = e.onrate ? [{
                        fn: e.onrate
                    }] : [], t._onseek = e.onseek ? [{
                        fn: e.onseek
                    }] : [], t._onunlock = e.onunlock ? [{
                        fn: e.onunlock
                    }] : [], t._onresume = [], t._webAudio = i.usingWebAudio && !t._html5, void 0 !== i.ctx && i.ctx && i.autoUnlock && i._unlockAudio(), i._howls.push(t), t._autoplay && t._queue.push({
                        event: "play",
                        action: function() {
                            t.play()
                        }
                    }), t._preload && t.load(), t
                },
                load: function() {
                    var e = null;
                    if (i.noAudio) this._emit("loaderror", null, "No audio support.");
                    else {
                        "string" == typeof this._src && (this._src = [this._src]);
                        for (var t = 0; t < this._src.length; t++) {
                            var n, r;
                            if (this._format && this._format[t]) n = this._format[t];
                            else {
                                if ("string" != typeof(r = this._src[t])) {
                                    this._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                    continue
                                }(n = /^data:audio\/([^;,]+);/i.exec(r)) || (n = /\.([^.]+)$/.exec(r.split("?", 1)[0])), n && (n = n[1].toLowerCase())
                            }
                            if (n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), n && i.codecs(n)) {
                                e = this._src[t];
                                break
                            }
                        }
                        if (e) return this._src = e, this._state = "loading", "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new s(this), this._webAudio && u(this), this;
                        this._emit("loaderror", null, "No codec support for selected audio sources.")
                    }
                },
                play: function(e, t) {
                    var n = this,
                        r = null;
                    if ("number" == typeof e) r = e, e = null;
                    else {
                        if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null;
                        if (void 0 === e && (e = "__default", !n._playLock)) {
                            for (var o = 0, a = 0; a < n._sounds.length; a++) n._sounds[a]._paused && !n._sounds[a]._ended && (o++, r = n._sounds[a]._id);
                            1 === o ? e = null : r = null
                        }
                    }
                    var s = r ? n._soundById(r) : n._inactiveSound();
                    if (!s) return null;
                    if (r && !e && (e = s._sprite || "__default"), "loaded" !== n._state) {
                        s._sprite = e, s._ended = !1;
                        var l = s._id;
                        return n._queue.push({
                            event: "play",
                            action: function() {
                                n.play(l)
                            }
                        }), l
                    }
                    if (r && !s._paused) return t || n._loadQueue("play"), s._id;
                    n._webAudio && i._autoResume();
                    var u = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
                        c = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - u),
                        f = 1e3 * c / Math.abs(s._rate),
                        d = n._sprite[e][0] / 1e3,
                        p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3,
                        h = !(!s._loop && !n._sprite[e][2]);
                    s._sprite = e, s._ended = !1;
                    var m = function() {
                        s._paused = !1, s._seek = u, s._start = d, s._stop = p, s._loop = h
                    };
                    if (!(u >= p)) {
                        var g = s._node;
                        if (n._webAudio) {
                            var y = function() {
                                n._playLock = !1, m(), n._refreshBuffer(s);
                                var e = s._muted || n._muted ? 0 : s._volume;
                                g.gain.setValueAtTime(e, i.ctx.currentTime), s._playStart = i.ctx.currentTime, void 0 === g.bufferSource.start ? s._loop ? g.bufferSource.noteGrainOn(0, u, 86400) : g.bufferSource.noteGrainOn(0, u, c) : s._loop ? g.bufferSource.start(0, u, 86400) : g.bufferSource.start(0, u, c), f !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), f)), t || setTimeout((function() {
                                    n._emit("play", s._id), n._loadQueue()
                                }), 0)
                            };
                            "running" === i.state ? y() : (n._playLock = !0, n.once("resume", y), n._clearTimer(s._id))
                        } else {
                            var v = function() {
                                g.currentTime = u, g.muted = s._muted || n._muted || i._muted || g.muted, g.volume = s._volume * i.volume(), g.playbackRate = s._rate;
                                try {
                                    var r = g.play();
                                    if (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (n._playLock = !0, m(), r.then((function() {
                                            n._playLock = !1, g._unlocked = !0, t || (n._emit("play", s._id), n._loadQueue())
                                        })).catch((function() {
                                            n._playLock = !1, n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), s._ended = !0, s._paused = !0
                                        }))) : t || (n._playLock = !1, m(), n._emit("play", s._id), n._loadQueue()), g.playbackRate = s._rate, g.paused) return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                    "__default" !== e || s._loop ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), f) : (n._endTimers[s._id] = function() {
                                        n._ended(s), g.removeEventListener("ended", n._endTimers[s._id], !1)
                                    }, g.addEventListener("ended", n._endTimers[s._id], !1))
                                } catch (e) {
                                    n._emit("playerror", s._id, e)
                                }
                            };
                            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === g.src && (g.src = n._src, g.load());
                            var b = window && window.ejecta || !g.readyState && i._navigator.isCocoonJS;
                            if (g.readyState >= 3 || b) v();
                            else {
                                n._playLock = !0;
                                var w = function() {
                                    v(), g.removeEventListener(i._canPlayEvent, w, !1)
                                };
                                g.addEventListener(i._canPlayEvent, w, !1), n._clearTimer(s._id)
                            }
                        }
                        return s._id
                    }
                    n._ended(s)
                },
                pause: function(e) {
                    var t = this;
                    if ("loaded" !== t._state || t._playLock) return t._queue.push({
                        event: "pause",
                        action: function() {
                            t.pause(e)
                        }
                    }), t;
                    for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                        t._clearTimer(n[r]);
                        var o = t._soundById(n[r]);
                        if (o && !o._paused && (o._seek = t.seek(n[r]), o._rateSeek = 0, o._paused = !0, t._stopFade(n[r]), o._node))
                            if (t._webAudio) {
                                if (!o._node.bufferSource) continue;
                                void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), t._cleanBuffer(o._node)
                            } else isNaN(o._node.duration) && o._node.duration !== 1 / 0 || o._node.pause();
                        arguments[1] || t._emit("pause", o ? o._id : null)
                    }
                    return t
                },
                stop: function(e, t) {
                    var n = this;
                    if ("loaded" !== n._state || n._playLock) return n._queue.push({
                        event: "stop",
                        action: function() {
                            n.stop(e)
                        }
                    }), n;
                    for (var r = n._getSoundIds(e), o = 0; o < r.length; o++) {
                        n._clearTimer(r[o]);
                        var i = n._soundById(r[o]);
                        i && (i._seek = i._start || 0, i._rateSeek = 0, i._paused = !0, i._ended = !0, n._stopFade(r[o]), i._node && (n._webAudio ? i._node.bufferSource && (void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), n._cleanBuffer(i._node)) : isNaN(i._node.duration) && i._node.duration !== 1 / 0 || (i._node.currentTime = i._start || 0, i._node.pause(), i._node.duration === 1 / 0 && n._clearSound(i._node))), t || n._emit("stop", i._id))
                    }
                    return n
                },
                mute: function(e, t) {
                    var n = this;
                    if ("loaded" !== n._state || n._playLock) return n._queue.push({
                        event: "mute",
                        action: function() {
                            n.mute(e, t)
                        }
                    }), n;
                    if (void 0 === t) {
                        if ("boolean" != typeof e) return n._muted;
                        n._muted = e
                    }
                    for (var r = n._getSoundIds(t), o = 0; o < r.length; o++) {
                        var a = n._soundById(r[o]);
                        a && (a._muted = e, a._interval && n._stopFade(a._id), n._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, i.ctx.currentTime) : a._node && (a._node.muted = !!i._muted || e), n._emit("mute", a._id))
                    }
                    return n
                },
                volume: function() {
                    var e, t, n, r = this,
                        o = arguments;
                    if (0 === o.length) return r._volume;
                    if (1 === o.length || 2 === o.length && void 0 === o[1]) {
                        var a = r._getSoundIds(),
                            s = a.indexOf(o[0]);
                        s >= 0 ? t = parseInt(o[0], 10) : e = parseFloat(o[0])
                    } else o.length >= 2 && (e = parseFloat(o[0]), t = parseInt(o[1], 10));
                    if (!(void 0 !== e && e >= 0 && e <= 1)) return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
                    if ("loaded" !== r._state || r._playLock) return r._queue.push({
                        event: "volume",
                        action: function() {
                            r.volume.apply(r, o)
                        }
                    }), r;
                    void 0 === t && (r._volume = e), t = r._getSoundIds(t);
                    for (var l = 0; l < t.length; l++)(n = r._soundById(t[l])) && (n._volume = e, o[2] || r._stopFade(t[l]), r._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, i.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * i.volume()), r._emit("volume", n._id));
                    return r
                },
                fade: function(e, t, n, r) {
                    var o = this;
                    if ("loaded" !== o._state || o._playLock) return o._queue.push({
                        event: "fade",
                        action: function() {
                            o.fade(e, t, n, r)
                        }
                    }), o;
                    e = parseFloat(e), t = parseFloat(t), n = parseFloat(n), o.volume(e, r);
                    for (var a = o._getSoundIds(r), s = 0; s < a.length; s++) {
                        var l = o._soundById(a[s]);
                        if (l) {
                            if (r || o._stopFade(a[s]), o._webAudio && !l._muted) {
                                var u = i.ctx.currentTime,
                                    c = u + n / 1e3;
                                l._volume = e, l._node.gain.setValueAtTime(e, u), l._node.gain.linearRampToValueAtTime(t, c)
                            }
                            o._startFadeInterval(l, e, t, n, a[s], void 0 === r)
                        }
                    }
                    return o
                },
                _startFadeInterval: function(e, t, n, r, o, i) {
                    var a = this,
                        s = t,
                        l = n - t,
                        u = Math.abs(l / .01),
                        c = Math.max(4, u > 0 ? r / u : r),
                        f = Date.now();
                    e._fadeTo = n, e._interval = setInterval((function() {
                        var o = (Date.now() - f) / r;
                        f = Date.now(), s += l * o, s = Math.max(0, s), s = Math.min(1, s), s = Math.round(100 * s) / 100, a._webAudio ? e._volume = s : a.volume(s, e._id, !0), i && (a._volume = s), (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, a.volume(n, e._id), a._emit("fade", e._id))
                    }), c)
                },
                _stopFade: function(e) {
                    var t = this._soundById(e);
                    return t && t._interval && (this._webAudio && t._node.gain.cancelScheduledValues(i.ctx.currentTime), clearInterval(t._interval), t._interval = null, this.volume(t._fadeTo, e), t._fadeTo = null, this._emit("fade", e)), this
                },
                loop: function() {
                    var e, t, n, r = this,
                        o = arguments;
                    if (0 === o.length) return r._loop;
                    if (1 === o.length) {
                        if ("boolean" != typeof o[0]) return !!(n = r._soundById(parseInt(o[0], 10))) && n._loop;
                        e = o[0], r._loop = e
                    } else 2 === o.length && (e = o[0], t = parseInt(o[1], 10));
                    for (var i = r._getSoundIds(t), a = 0; a < i.length; a++)(n = r._soundById(i[a])) && (n._loop = e, r._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e, e && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop)));
                    return r
                },
                rate: function() {
                    var e, t, n, r = this,
                        o = arguments;
                    if (0 === o.length) t = r._sounds[0]._id;
                    else if (1 === o.length) {
                        var a = r._getSoundIds(),
                            s = a.indexOf(o[0]);
                        s >= 0 ? t = parseInt(o[0], 10) : e = parseFloat(o[0])
                    } else 2 === o.length && (e = parseFloat(o[0]), t = parseInt(o[1], 10));
                    if ("number" != typeof e) return (n = r._soundById(t)) ? n._rate : r._rate;
                    if ("loaded" !== r._state || r._playLock) return r._queue.push({
                        event: "rate",
                        action: function() {
                            r.rate.apply(r, o)
                        }
                    }), r;
                    void 0 === t && (r._rate = e), t = r._getSoundIds(t);
                    for (var l = 0; l < t.length; l++)
                        if (n = r._soundById(t[l])) {
                            r.playing(t[l]) && (n._rateSeek = r.seek(t[l]), n._playStart = r._webAudio ? i.ctx.currentTime : n._playStart), n._rate = e, r._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, i.ctx.currentTime) : n._node && (n._node.playbackRate = e);
                            var u = r.seek(t[l]),
                                c = (r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1e3 - u,
                                f = 1e3 * c / Math.abs(n._rate);
                            !r._endTimers[t[l]] && n._paused || (r._clearTimer(t[l]), r._endTimers[t[l]] = setTimeout(r._ended.bind(r, n), f)), r._emit("rate", n._id)
                        }
                    return r
                },
                seek: function() {
                    var e, t, n = this,
                        r = arguments;
                    if (0 === r.length) t = n._sounds[0]._id;
                    else if (1 === r.length) {
                        var o = n._getSoundIds(),
                            a = o.indexOf(r[0]);
                        a >= 0 ? t = parseInt(r[0], 10) : n._sounds.length && (t = n._sounds[0]._id, e = parseFloat(r[0]))
                    } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
                    if (void 0 === t) return n;
                    if ("loaded" !== n._state || n._playLock) return n._queue.push({
                        event: "seek",
                        action: function() {
                            n.seek.apply(n, r)
                        }
                    }), n;
                    var s = n._soundById(t);
                    if (s) {
                        if (!("number" == typeof e && e >= 0)) {
                            if (n._webAudio) {
                                var l = n.playing(t) ? i.ctx.currentTime - s._playStart : 0,
                                    u = s._rateSeek ? s._rateSeek - s._seek : 0;
                                return s._seek + (u + l * Math.abs(s._rate))
                            }
                            return s._node.currentTime
                        }
                        var c = n.playing(t);
                        c && n.pause(t, !0), s._seek = e, s._ended = !1, n._clearTimer(t), n._webAudio || !s._node || isNaN(s._node.duration) || (s._node.currentTime = e);
                        var f = function() {
                            n._emit("seek", t), c && n.play(t, !0)
                        };
                        if (c && !n._webAudio) {
                            var d = function() {
                                n._playLock ? setTimeout(d, 0) : f()
                            };
                            setTimeout(d, 0)
                        } else f()
                    }
                    return n
                },
                playing: function(e) {
                    if ("number" == typeof e) {
                        var t = this._soundById(e);
                        return !!t && !t._paused
                    }
                    for (var n = 0; n < this._sounds.length; n++)
                        if (!this._sounds[n]._paused) return !0;
                    return !1
                },
                duration: function(e) {
                    var t = this._duration,
                        n = this._soundById(e);
                    return n && (t = this._sprite[n._sprite][1] / 1e3), t
                },
                state: function() {
                    return this._state
                },
                unload: function() {
                    for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (e._clearSound(t[n]._node), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(i._canPlayEvent, t[n]._loadFn, !1), i._releaseHtml5Audio(t[n]._node)), delete t[n]._node, e._clearTimer(t[n]._id);
                    var r = i._howls.indexOf(e);
                    r >= 0 && i._howls.splice(r, 1);
                    var o = !0;
                    for (n = 0; n < i._howls.length; n++)
                        if (i._howls[n]._src === e._src || e._src.indexOf(i._howls[n]._src) >= 0) {
                            o = !1;
                            break
                        }
                    return l && o && delete l[e._src], i.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                },
                on: function(e, t, n, r) {
                    var o = this["_on" + e];
                    return "function" == typeof t && o.push(r ? {
                        id: n,
                        fn: t,
                        once: r
                    } : {
                        id: n,
                        fn: t
                    }), this
                },
                off: function(e, t, n) {
                    var r = this["_on" + e],
                        o = 0;
                    if ("number" == typeof t && (n = t, t = null), t || n)
                        for (o = 0; o < r.length; o++) {
                            var i = n === r[o].id;
                            if (t === r[o].fn && i || !t && i) {
                                r.splice(o, 1);
                                break
                            }
                        } else if (e) this["_on" + e] = [];
                        else {
                            var a = Object.keys(this);
                            for (o = 0; o < a.length; o++) 0 === a[o].indexOf("_on") && Array.isArray(this[a[o]]) && (this[a[o]] = [])
                        }
                    return this
                },
                once: function(e, t, n) {
                    return this.on(e, t, n, 1), this
                },
                _emit: function(e, t, n) {
                    for (var r = this["_on" + e], o = r.length - 1; o >= 0; o--) r[o].id && r[o].id !== t && "load" !== e || (setTimeout(function(e) {
                        e.call(this, t, n)
                    }.bind(this, r[o].fn), 0), r[o].once && this.off(e, r[o].fn, r[o].id));
                    return this._loadQueue(e), this
                },
                _loadQueue: function(e) {
                    if (this._queue.length > 0) {
                        var t = this._queue[0];
                        t.event === e && (this._queue.shift(), this._loadQueue()), e || t.action()
                    }
                    return this
                },
                _ended: function(e) {
                    var t = e._sprite;
                    if (!this._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(this._ended.bind(this, e), 100), this;
                    var n = !(!e._loop && !this._sprite[t][2]);
                    if (this._emit("end", e._id), !this._webAudio && n && this.stop(e._id, !0).play(e._id), this._webAudio && n) {
                        this._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = i.ctx.currentTime;
                        var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                        this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), r)
                    }
                    return this._webAudio && !n && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, this._clearTimer(e._id), this._cleanBuffer(e._node), i._autoSuspend()), this._webAudio || n || this.stop(e._id, !0), this
                },
                _clearTimer: function(e) {
                    if (this._endTimers[e]) {
                        if ("function" != typeof this._endTimers[e]) clearTimeout(this._endTimers[e]);
                        else {
                            var t = this._soundById(e);
                            t && t._node && t._node.removeEventListener("ended", this._endTimers[e], !1)
                        }
                        delete this._endTimers[e]
                    }
                    return this
                },
                _soundById: function(e) {
                    for (var t = 0; t < this._sounds.length; t++)
                        if (e === this._sounds[t]._id) return this._sounds[t];
                    return null
                },
                _inactiveSound: function() {
                    this._drain();
                    for (var e = 0; e < this._sounds.length; e++)
                        if (this._sounds[e]._ended) return this._sounds[e].reset();
                    return new s(this)
                },
                _drain: function() {
                    var e = this._pool,
                        t = 0,
                        n = 0;
                    if (!(this._sounds.length < e)) {
                        for (n = 0; n < this._sounds.length; n++) this._sounds[n]._ended && t++;
                        for (n = this._sounds.length - 1; n >= 0; n--) {
                            if (t <= e) return;
                            this._sounds[n]._ended && (this._webAudio && this._sounds[n]._node && this._sounds[n]._node.disconnect(0), this._sounds.splice(n, 1), t--)
                        }
                    }
                },
                _getSoundIds: function(e) {
                    if (void 0 === e) {
                        for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id);
                        return t
                    }
                    return [e]
                },
                _refreshBuffer: function(e) {
                    return e._node.bufferSource = i.ctx.createBufferSource(), e._node.bufferSource.buffer = l[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, i.ctx.currentTime), this
                },
                _cleanBuffer: function(e) {
                    var t = i._navigator && i._navigator.vendor.indexOf("Apple") >= 0;
                    if (i._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                        e.bufferSource.buffer = i._scratchBuffer
                    } catch (e) {}
                    return e.bufferSource = null, this
                },
                _clearSound: function(e) {
                    /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                }
            };
            var s = function(e) {
                this._parent = e, this.init()
            };
            s.prototype = {
                init: function() {
                    var e = this._parent;
                    return this._muted = e._muted, this._loop = e._loop, this._volume = e._volume, this._rate = e._rate, this._seek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++i._counter, e._sounds.push(this), this.create(), this
                },
                create: function() {
                    var e = this._parent,
                        t = i._muted || this._muted || this._parent._muted ? 0 : this._volume;
                    return e._webAudio ? (this._node = void 0 === i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), this._node.gain.setValueAtTime(t, i.ctx.currentTime), this._node.paused = !0, this._node.connect(i.masterGain)) : (this._node = i._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(i._canPlayEvent, this._loadFn, !1), this._node.src = e._src, this._node.preload = "auto", this._node.volume = t * i.volume(), this._node.load()), this
                },
                reset: function() {
                    var e = this._parent;
                    return this._muted = e._muted, this._loop = e._loop, this._volume = e._volume, this._rate = e._rate, this._seek = 0, this._rateSeek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++i._counter, this
                },
                _errorListener: function() {
                    this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorFn, !1)
                },
                _loadListener: function() {
                    var e = this._parent;
                    e._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1e3 * e._duration]
                    }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), this._node.removeEventListener(i._canPlayEvent, this._loadFn, !1)
                }
            };
            var l = {},
                u = function(e) {
                    var t = e._src;
                    if (l[t]) return e._duration = l[t].duration, void d(e);
                    if (/^data:[^;]+;base64,/.test(t)) {
                        for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
                        f(r.buffer, e)
                    } else {
                        var i = new XMLHttpRequest;
                        i.open("GET", t, !0), i.withCredentials = e._xhrWithCredentials, i.responseType = "arraybuffer", i.onload = function() {
                            var t = (i.status + "")[0];
                            "0" === t || "2" === t || "3" === t ? f(i.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + i.status + ".")
                        }, i.onerror = function() {
                            e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete l[t], e.load())
                        }, c(i)
                    }
                },
                c = function(e) {
                    try {
                        e.send()
                    } catch (t) {
                        e.onerror()
                    }
                },
                f = function(e, t) {
                    var n = function() {
                            t._emit("loaderror", null, "Decoding audio data failed.")
                        },
                        r = function(e) {
                            e && t._sounds.length > 0 ? (l[t._src] = e, d(t, e)) : n()
                        };
                    "undefined" != typeof Promise && 1 === i.ctx.decodeAudioData.length ? i.ctx.decodeAudioData(e).then(r).catch(n) : i.ctx.decodeAudioData(e, r, n)
                },
                d = function(e, t) {
                    t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1e3 * e._duration]
                    }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                },
                p = function() {
                    if (i.usingWebAudio) {
                        try {
                            "undefined" != typeof AudioContext ? i.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? i.ctx = new webkitAudioContext : i.usingWebAudio = !1
                        } catch (e) {
                            i.usingWebAudio = !1
                        }
                        i.ctx || (i.usingWebAudio = !1);
                        var e = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform),
                            t = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                            n = t ? parseInt(t[1], 10) : null;
                        if (e && n && n < 9) {
                            var r = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
                            (i._navigator && i._navigator.standalone && !r || i._navigator && !i._navigator.standalone && !r) && (i.usingWebAudio = !1)
                        }
                        i.usingWebAudio && (i.masterGain = void 0 === i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), i.masterGain.gain.setValueAtTime(i._muted ? 0 : 1, i.ctx.currentTime), i.masterGain.connect(i.ctx.destination)), i._setup()
                    }
                };
            void 0 === (r = function() {
                return {
                    Howler: i,
                    Howl: a
                }
            }.apply(t, [])) || (e.exports = r), t.Howler = i, t.Howl = a, "undefined" != typeof window ? (window.HowlerGlobal = o, window.Howler = i, window.Howl = a, window.Sound = s) : void 0 !== n && (n.HowlerGlobal = o, n.Howler = i, n.Howl = a, n.Sound = s)
        }(),
        /*!
         *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
         *  
         *  howler.js v2.1.2
         *  howlerjs.com
         *
         *  (c) 2013-2019, James Simpson of GoldFire Studios
         *  goldfirestudios.com
         *
         *  MIT License
         */
        function() {
            "use strict";
            var e;
            HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
                if (!this.ctx || !this.ctx.listener) return this;
                for (var t = this._howls.length - 1; t >= 0; t--) this._howls[t].stereo(e);
                return this
            }, HowlerGlobal.prototype.pos = function(e, t, n) {
                return this.ctx && this.ctx.listener ? (t = "number" != typeof t ? this._pos[1] : t, n = "number" != typeof n ? this._pos[2] : n, "number" != typeof e ? this._pos : (this._pos = [e, t, n], void 0 !== this.ctx.listener.positionX ? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, .1), this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, .1), this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, .1)) : this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]), this)) : this
            }, HowlerGlobal.prototype.orientation = function(e, t, n, r, o, i) {
                if (!this.ctx || !this.ctx.listener) return this;
                var a = this._orientation;
                return t = "number" != typeof t ? a[1] : t, n = "number" != typeof n ? a[2] : n, r = "number" != typeof r ? a[3] : r, o = "number" != typeof o ? a[4] : o, i = "number" != typeof i ? a[5] : i, "number" != typeof e ? a : (this._orientation = [e, t, n, r, o, i], void 0 !== this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), this.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.upY.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.upZ.setTargetAtTime(n, Howler.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(e, t, n, r, o, i), this)
            }, Howl.prototype.init = (e = Howl.prototype.init, function(t) {
                return this._orientation = t.orientation || [1, 0, 0], this._stereo = t.stereo || null, this._pos = t.pos || null, this._pannerAttr = {
                    coneInnerAngle: void 0 !== t.coneInnerAngle ? t.coneInnerAngle : 360,
                    coneOuterAngle: void 0 !== t.coneOuterAngle ? t.coneOuterAngle : 360,
                    coneOuterGain: void 0 !== t.coneOuterGain ? t.coneOuterGain : 0,
                    distanceModel: void 0 !== t.distanceModel ? t.distanceModel : "inverse",
                    maxDistance: void 0 !== t.maxDistance ? t.maxDistance : 1e4,
                    panningModel: void 0 !== t.panningModel ? t.panningModel : "HRTF",
                    refDistance: void 0 !== t.refDistance ? t.refDistance : 1,
                    rolloffFactor: void 0 !== t.rolloffFactor ? t.rolloffFactor : 1
                }, this._onstereo = t.onstereo ? [{
                    fn: t.onstereo
                }] : [], this._onpos = t.onpos ? [{
                    fn: t.onpos
                }] : [], this._onorientation = t.onorientation ? [{
                    fn: t.onorientation
                }] : [], e.call(this, t)
            }), Howl.prototype.stereo = function(e, n) {
                var r = this;
                if (!r._webAudio) return r;
                if ("loaded" !== r._state) return r._queue.push({
                    event: "stereo",
                    action: function() {
                        r.stereo(e, n)
                    }
                }), r;
                var o = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                if (void 0 === n) {
                    if ("number" != typeof e) return r._stereo;
                    r._stereo = e, r._pos = [e, 0, 0]
                }
                for (var i = r._getSoundIds(n), a = 0; a < i.length; a++) {
                    var s = r._soundById(i[a]);
                    if (s) {
                        if ("number" != typeof e) return s._stereo;
                        s._stereo = e, s._pos = [e, 0, 0], s._node && (s._pannerAttr.panningModel = "equalpower", s._panner && s._panner.pan || t(s, o), "spatial" === o ? void 0 !== s._panner.positionX ? (s._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), s._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), s._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : s._panner.setPosition(e, 0, 0) : s._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), r._emit("stereo", s._id)
                    }
                }
                return r
            }, Howl.prototype.pos = function(e, n, r, o) {
                var i = this;
                if (!i._webAudio) return i;
                if ("loaded" !== i._state) return i._queue.push({
                    event: "pos",
                    action: function() {
                        i.pos(e, n, r, o)
                    }
                }), i;
                if (n = "number" != typeof n ? 0 : n, r = "number" != typeof r ? -.5 : r, void 0 === o) {
                    if ("number" != typeof e) return i._pos;
                    i._pos = [e, n, r]
                }
                for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
                    var l = i._soundById(a[s]);
                    if (l) {
                        if ("number" != typeof e) return l._pos;
                        l._pos = [e, n, r], l._node && (l._panner && !l._panner.pan || t(l, "spatial"), void 0 !== l._panner.positionX ? (l._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), l._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime), l._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : l._panner.setPosition(e, n, r)), i._emit("pos", l._id)
                    }
                }
                return i
            }, Howl.prototype.orientation = function(e, n, r, o) {
                var i = this;
                if (!i._webAudio) return i;
                if ("loaded" !== i._state) return i._queue.push({
                    event: "orientation",
                    action: function() {
                        i.orientation(e, n, r, o)
                    }
                }), i;
                if (n = "number" != typeof n ? i._orientation[1] : n, r = "number" != typeof r ? i._orientation[2] : r, void 0 === o) {
                    if ("number" != typeof e) return i._orientation;
                    i._orientation = [e, n, r]
                }
                for (var a = i._getSoundIds(o), s = 0; s < a.length; s++) {
                    var l = i._soundById(a[s]);
                    if (l) {
                        if ("number" != typeof e) return l._orientation;
                        l._orientation = [e, n, r], l._node && (l._panner || (l._pos || (l._pos = i._pos || [0, 0, -.5]), t(l, "spatial")), void 0 !== l._panner.orientationX ? (l._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), l._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime), l._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : l._panner.setOrientation(e, n, r)), i._emit("orientation", l._id)
                    }
                }
                return i
            }, Howl.prototype.pannerAttr = function() {
                var e, n, r, o = this,
                    i = arguments;
                if (!o._webAudio) return o;
                if (0 === i.length) return o._pannerAttr;
                if (1 === i.length) {
                    if ("object" != typeof i[0]) return (r = o._soundById(parseInt(i[0], 10))) ? r._pannerAttr : o._pannerAttr;
                    e = i[0], void 0 === n && (e.pannerAttr || (e.pannerAttr = {
                        coneInnerAngle: e.coneInnerAngle,
                        coneOuterAngle: e.coneOuterAngle,
                        coneOuterGain: e.coneOuterGain,
                        distanceModel: e.distanceModel,
                        maxDistance: e.maxDistance,
                        refDistance: e.refDistance,
                        rolloffFactor: e.rolloffFactor,
                        panningModel: e.panningModel
                    }), o._pannerAttr = {
                        coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : o._coneInnerAngle,
                        coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : o._coneOuterAngle,
                        coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : o._coneOuterGain,
                        distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : o._distanceModel,
                        maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : o._maxDistance,
                        refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : o._refDistance,
                        rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : o._rolloffFactor,
                        panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : o._panningModel
                    })
                } else 2 === i.length && (e = i[0], n = parseInt(i[1], 10));
                for (var a = o._getSoundIds(n), s = 0; s < a.length; s++)
                    if (r = o._soundById(a[s])) {
                        var l = r._pannerAttr;
                        l = {
                            coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : l.coneInnerAngle,
                            coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : l.coneOuterAngle,
                            coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : l.coneOuterGain,
                            distanceModel: void 0 !== e.distanceModel ? e.distanceModel : l.distanceModel,
                            maxDistance: void 0 !== e.maxDistance ? e.maxDistance : l.maxDistance,
                            refDistance: void 0 !== e.refDistance ? e.refDistance : l.refDistance,
                            rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : l.rolloffFactor,
                            panningModel: void 0 !== e.panningModel ? e.panningModel : l.panningModel
                        };
                        var u = r._panner;
                        u ? (u.coneInnerAngle = l.coneInnerAngle, u.coneOuterAngle = l.coneOuterAngle, u.coneOuterGain = l.coneOuterGain, u.distanceModel = l.distanceModel, u.maxDistance = l.maxDistance, u.refDistance = l.refDistance, u.rolloffFactor = l.rolloffFactor, u.panningModel = l.panningModel) : (r._pos || (r._pos = o._pos || [0, 0, -.5]), t(r, "spatial"))
                    }
                return o
            }, Sound.prototype.init = function(e) {
                return function() {
                    var t = this._parent;
                    this._orientation = t._orientation, this._stereo = t._stereo, this._pos = t._pos, this._pannerAttr = t._pannerAttr, e.call(this), this._stereo ? t.stereo(this._stereo) : this._pos && t.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
                }
            }(Sound.prototype.init), Sound.prototype.reset = function(e) {
                return function() {
                    var t = this._parent;
                    return this._orientation = t._orientation, this._stereo = t._stereo, this._pos = t._pos, this._pannerAttr = t._pannerAttr, this._stereo ? t.stereo(this._stereo) : this._pos ? t.pos(this._pos[0], this._pos[1], this._pos[2], this._id) : this._panner && (this._panner.disconnect(0), this._panner = void 0, t._refreshBuffer(this)), e.call(this)
                }
            }(Sound.prototype.reset);
            var t = function(e, t) {
                "spatial" === (t = t || "spatial") ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, void 0 !== e._panner.positionX ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), void 0 !== e._panner.orientationX ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id, !0)
            }
        }()
    }).call(this, n(2))
}, function(e, t, n) {
    var r = n(68),
        o = n(71);
    t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6;
    var i = {
        type: t.ERROR,
        data: "parser error"
    };

    function a() {}

    function s() {}
    a.prototype.encode = function(e, n) {
        switch (e.type) {
            case t.CONNECT:
            case t.DISCONNECT:
            case t.ERROR:
                return n([JSON.stringify(e)]);
            default:
                return n([r.encode(e)])
        }
    }, o(s.prototype), s.prototype.add = function(e) {
        "string" == typeof e ? this.parseJSON(e) : this.parseBinary(e)
    }, s.prototype.parseJSON = function(e) {
        try {
            var t = JSON.parse(e);
            this.emit("decoded", t)
        } catch (e) {
            this.emit("decoded", i)
        }
    }, s.prototype.parseBinary = function(e) {
        try {
            var t = r.decode(e);
            this.emit("decoded", t)
        } catch (e) {
            this.emit("decoded", i)
        }
    }, s.prototype.destroy = function() {}, t.Encoder = a, t.Decoder = s
}, function(e, t, n) {
    t.encode = n(69), t.decode = n(70)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        for (var r = 0, o = 0, i = n.length; o < i; o++)(r = n.charCodeAt(o)) < 128 ? e.setUint8(t++, r) : r < 2048 ? (e.setUint8(t++, 192 | r >> 6), e.setUint8(t++, 128 | 63 & r)) : r < 55296 || r >= 57344 ? (e.setUint8(t++, 224 | r >> 12), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | 63 & r)) : (o++, r = 65536 + ((1023 & r) << 10 | 1023 & n.charCodeAt(o)), e.setUint8(t++, 240 | r >> 18), e.setUint8(t++, 128 | r >> 12 & 63), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | 63 & r))
    }
    e.exports = function(e) {
        var t = [],
            n = [],
            o = function e(t, n, r) {
                var o = typeof r,
                    i = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    u = 0,
                    c = 0;
                if ("string" === o) {
                    if ((u = function(e) {
                            for (var t = 0, n = 0, r = 0, o = e.length; r < o; r++)(t = e.charCodeAt(r)) < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
                            return n
                        }(r)) < 32) t.push(160 | u), c = 1;
                    else if (u < 256) t.push(217, u), c = 2;
                    else if (u < 65536) t.push(218, u >> 8, u), c = 3;
                    else {
                        if (!(u < 4294967296)) throw new Error("String too long");
                        t.push(219, u >> 24, u >> 16, u >> 8, u), c = 5
                    }
                    return n.push({
                        str: r,
                        length: u,
                        offset: t.length
                    }), c + u
                }
                if ("number" === o) return Math.floor(r) === r && isFinite(r) ? r >= 0 ? r < 128 ? (t.push(r), 1) : r < 256 ? (t.push(204, r), 2) : r < 65536 ? (t.push(205, r >> 8, r), 3) : r < 4294967296 ? (t.push(206, r >> 24, r >> 16, r >> 8, r), 5) : (s = r / Math.pow(2, 32) >> 0, l = r >>> 0, t.push(207, s >> 24, s >> 16, s >> 8, s, l >> 24, l >> 16, l >> 8, l), 9) : r >= -32 ? (t.push(r), 1) : r >= -128 ? (t.push(208, r), 2) : r >= -32768 ? (t.push(209, r >> 8, r), 3) : r >= -2147483648 ? (t.push(210, r >> 24, r >> 16, r >> 8, r), 5) : (s = Math.floor(r / Math.pow(2, 32)), l = r >>> 0, t.push(211, s >> 24, s >> 16, s >> 8, s, l >> 24, l >> 16, l >> 8, l), 9) : (t.push(203), n.push({
                    float: r,
                    length: 8,
                    offset: t.length
                }), 9);
                if ("object" === o) {
                    if (null === r) return t.push(192), 1;
                    if (Array.isArray(r)) {
                        if ((u = r.length) < 16) t.push(144 | u), c = 1;
                        else if (u < 65536) t.push(220, u >> 8, u), c = 3;
                        else {
                            if (!(u < 4294967296)) throw new Error("Array too large");
                            t.push(221, u >> 24, u >> 16, u >> 8, u), c = 5
                        }
                        for (i = 0; i < u; i++) c += e(t, n, r[i]);
                        return c
                    }
                    if (r instanceof Date) {
                        var f = r.getTime();
                        return s = Math.floor(f / Math.pow(2, 32)), l = f >>> 0, t.push(215, 0, s >> 24, s >> 16, s >> 8, s, l >> 24, l >> 16, l >> 8, l), 10
                    }
                    if (r instanceof ArrayBuffer) {
                        if ((u = r.byteLength) < 256) t.push(196, u), c = 2;
                        else if (u < 65536) t.push(197, u >> 8, u), c = 3;
                        else {
                            if (!(u < 4294967296)) throw new Error("Buffer too large");
                            t.push(198, u >> 24, u >> 16, u >> 8, u), c = 5
                        }
                        return n.push({
                            bin: r,
                            length: u,
                            offset: t.length
                        }), c + u
                    }
                    if ("function" == typeof r.toJSON) return e(t, n, r.toJSON());
                    var d = [],
                        p = "",
                        h = Object.keys(r);
                    for (i = 0, a = h.length; i < a; i++) "function" != typeof r[p = h[i]] && d.push(p);
                    if ((u = d.length) < 16) t.push(128 | u), c = 1;
                    else if (u < 65536) t.push(222, u >> 8, u), c = 3;
                    else {
                        if (!(u < 4294967296)) throw new Error("Object too large");
                        t.push(223, u >> 24, u >> 16, u >> 8, u), c = 5
                    }
                    for (i = 0; i < u; i++) c += e(t, n, p = d[i]), c += e(t, n, r[p]);
                    return c
                }
                if ("boolean" === o) return t.push(r ? 195 : 194), 1;
                if ("undefined" === o) return t.push(212, 0, 0), 3;
                throw new Error("Could not encode")
            }(t, n, e),
            i = new ArrayBuffer(o),
            a = new DataView(i),
            s = 0,
            l = 0,
            u = -1;
        n.length > 0 && (u = n[0].offset);
        for (var c, f = 0, d = 0, p = 0, h = t.length; p < h; p++)
            if (a.setUint8(l + p, t[p]), p + 1 === u) {
                if (f = (c = n[s]).length, d = l + u, c.bin)
                    for (var m = new Uint8Array(c.bin), g = 0; g < f; g++) a.setUint8(d + g, m[g]);
                else c.str ? r(a, d, c.str) : void 0 !== c.float && a.setFloat64(d, c.float);
                l += f, n[++s] && (u = n[s].offset)
            }
        return i
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (this.offset = 0, e instanceof ArrayBuffer) this.buffer = e, this.view = new DataView(this.buffer);
        else {
            if (!ArrayBuffer.isView(e)) throw new Error("Invalid argument");
            this.buffer = e.buffer, this.view = new DataView(this.buffer, e.byteOffset, e.byteLength)
        }
    }
    r.prototype.array = function(e) {
        for (var t = new Array(e), n = 0; n < e; n++) t[n] = this.parse();
        return t
    }, r.prototype.map = function(e) {
        for (var t = {}, n = 0; n < e; n++) t[this.parse()] = this.parse();
        return t
    }, r.prototype.str = function(e) {
        var t = function(e, t, n) {
            for (var r = "", o = 0, i = t, a = t + n; i < a; i++) {
                var s = e.getUint8(i);
                if (0 != (128 & s))
                    if (192 != (224 & s))
                        if (224 != (240 & s)) {
                            if (240 != (248 & s)) throw new Error("Invalid byte " + s.toString(16));
                            (o = (7 & s) << 18 | (63 & e.getUint8(++i)) << 12 | (63 & e.getUint8(++i)) << 6 | (63 & e.getUint8(++i)) << 0) >= 65536 ? (o -= 65536, r += String.fromCharCode(55296 + (o >>> 10), 56320 + (1023 & o))) : r += String.fromCharCode(o)
                        } else r += String.fromCharCode((15 & s) << 12 | (63 & e.getUint8(++i)) << 6 | (63 & e.getUint8(++i)) << 0);
                else r += String.fromCharCode((31 & s) << 6 | 63 & e.getUint8(++i));
                else r += String.fromCharCode(s)
            }
            return r
        }(this.view, this.offset, e);
        return this.offset += e, t
    }, r.prototype.bin = function(e) {
        var t = this.buffer.slice(this.offset, this.offset + e);
        return this.offset += e, t
    }, r.prototype.parse = function() {
        var e, t = this.view.getUint8(this.offset++),
            n = 0,
            r = 0,
            o = 0,
            i = 0;
        if (t < 192) return t < 128 ? t : t < 144 ? this.map(15 & t) : t < 160 ? this.array(15 & t) : this.str(31 & t);
        if (t > 223) return -1 * (255 - t + 1);
        switch (t) {
            case 192:
                return null;
            case 194:
                return !1;
            case 195:
                return !0;
            case 196:
                return n = this.view.getUint8(this.offset), this.offset += 1, this.bin(n);
            case 197:
                return n = this.view.getUint16(this.offset), this.offset += 2, this.bin(n);
            case 198:
                return n = this.view.getUint32(this.offset), this.offset += 4, this.bin(n);
            case 199:
                return n = this.view.getUint8(this.offset), r = this.view.getInt8(this.offset + 1), this.offset += 2, [r, this.bin(n)];
            case 200:
                return n = this.view.getUint16(this.offset), r = this.view.getInt8(this.offset + 2), this.offset += 3, [r, this.bin(n)];
            case 201:
                return n = this.view.getUint32(this.offset), r = this.view.getInt8(this.offset + 4), this.offset += 5, [r, this.bin(n)];
            case 202:
                return e = this.view.getFloat32(this.offset), this.offset += 4, e;
            case 203:
                return e = this.view.getFloat64(this.offset), this.offset += 8, e;
            case 204:
                return e = this.view.getUint8(this.offset), this.offset += 1, e;
            case 205:
                return e = this.view.getUint16(this.offset), this.offset += 2, e;
            case 206:
                return e = this.view.getUint32(this.offset), this.offset += 4, e;
            case 207:
                return o = this.view.getUint32(this.offset) * Math.pow(2, 32), i = this.view.getUint32(this.offset + 4), this.offset += 8, o + i;
            case 208:
                return e = this.view.getInt8(this.offset), this.offset += 1, e;
            case 209:
                return e = this.view.getInt16(this.offset), this.offset += 2, e;
            case 210:
                return e = this.view.getInt32(this.offset), this.offset += 4, e;
            case 211:
                return o = this.view.getInt32(this.offset) * Math.pow(2, 32), i = this.view.getUint32(this.offset + 4), this.offset += 8, o + i;
            case 212:
                return r = this.view.getInt8(this.offset), this.offset += 1, 0 === r ? void(this.offset += 1) : [r, this.bin(1)];
            case 213:
                return r = this.view.getInt8(this.offset), this.offset += 1, [r, this.bin(2)];
            case 214:
                return r = this.view.getInt8(this.offset), this.offset += 1, [r, this.bin(4)];
            case 215:
                return r = this.view.getInt8(this.offset), this.offset += 1, 0 === r ? (o = this.view.getInt32(this.offset) * Math.pow(2, 32), i = this.view.getUint32(this.offset + 4), this.offset += 8, new Date(o + i)) : [r, this.bin(8)];
            case 216:
                return r = this.view.getInt8(this.offset), this.offset += 1, [r, this.bin(16)];
            case 217:
                return n = this.view.getUint8(this.offset), this.offset += 1, this.str(n);
            case 218:
                return n = this.view.getUint16(this.offset), this.offset += 2, this.str(n);
            case 219:
                return n = this.view.getUint32(this.offset), this.offset += 4, this.str(n);
            case 220:
                return n = this.view.getUint16(this.offset), this.offset += 2, this.array(n);
            case 221:
                return n = this.view.getUint32(this.offset), this.offset += 4, this.array(n);
            case 222:
                return n = this.view.getUint16(this.offset), this.offset += 2, this.map(n);
            case 223:
                return n = this.view.getUint32(this.offset), this.offset += 4, this.map(n)
        }
        throw new Error("Could not parse")
    }, e.exports = function(e) {
        var t = new r(e),
            n = t.parse();
        if (t.offset !== e.byteLength) throw new Error(e.byteLength - t.offset + " trailing bytes");
        return n
    }
}, function(e, t, n) {
    function r(e) {
        if (e) return function(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e
        }(e)
    }
    e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function(e, t) {
        function n() {
            this.off(e, n), t.apply(this, arguments)
        }
        return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var n, r = this._callbacks["$" + e];
        if (!r) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var o = 0; o < r.length; o++)
            if ((n = r[o]) === t || n.fn === t) {
                r.splice(o, 1);
                break
            }
        return this
    }, r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            n = this._callbacks["$" + e];
        if (n)
            for (var r = 0, o = (n = n.slice(0)).length; r < o; ++r) n[r].apply(this, t);
        return this
    }, r.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}]);