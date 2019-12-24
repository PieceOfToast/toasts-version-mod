! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
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
            for (var a in e) n.d(r, a, function(t) {
                return e[t]
            }.bind(null, a));
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
    }, n.p = "", n(n.s = 6)
}([function(e, t, n) {
    "use strict";
    e.exports = n(8)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "a", (function() {
            return m
        }));
        var r = n(0),
            a = n.n(r);

        function o(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function i(e) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function l(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function u(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function s(e, t, n) {
            return t && u(e.prototype, t), n && u(e, n), e
        }

        function c(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? f(e) : t
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
        n(4);
        var m = function(e) {
                function t(e) {
                    var n;
                    return l(this, t), (n = c(this, d(t).call(this, e))).state = {
                        display: "none",
                        register: "none"
                    }, n
                }
                return p(t, e), s(t, [{
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
                        return a.a.createElement("span", null, a.a.createElement(_, null), a.a.createElement(g, {
                            toggleAudio: this.props.data.toggleAudio
                        }), a.a.createElement(v, {
                            toggleMusic: this.props.data.toggleMusic
                        }), a.a.createElement(b, {
                            display: "LoginOverlay" === this.state.display
                        }), a.a.createElement(y, {
                            register: "Register" === this.state.register
                        }))
                    }
                }]), t
            }(r.Component),
            g = function(e) {
                function t(e) {
                    var n;
                    return l(this, t), (n = c(this, d(t).call(this, e))).state = {
                        muted: !1
                    }, n
                }
                return p(t, e), s(t, [{
                    key: "click",
                    value: function() {
                        this.setState({
                            muted: this.props.toggleAudio()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.a.createElement("div", {
                            className: "mute-button",
                            onClick: this.click.bind(this)
                        }, this.state.muted ? a.a.createElement("span", null, a.a.createElement("img", {
                            src: "img/soundOff.png"
                        })) : a.a.createElement("span", null, a.a.createElement("img", {
                            src: "img/soundOn.png"
                        })))
                    }
                }]), t
            }(r.Component),
            v = function(e) {
                function t(e) {
                    var n;
                    return l(this, t), (n = c(this, d(t).call(this, e))).state = {
                        musicMuted: !1
                    }, n
                }
                return p(t, e), s(t, [{
                    key: "click",
                    value: function() {
                        this.setState({
                            musicMuted: this.props.toggleMusic()
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        return a.a.createElement("div", {
                            className: "music-button",
                            onClick: this.click.bind(this)
                        }, this.state.musicMuted ? a.a.createElement("span", null, a.a.createElement("img", {
                            src: "img/musicOff.png"
                        })) : a.a.createElement("span", null, a.a.createElement("img", {
                            src: "img/musicOn.png"
                        })))
                    }
                }]), t
            }(r.Component),
            y = function(e) {
                function t() {
                    var e;
                    return l(this, t), o(f(e = c(this, d(t).call(this))), "handleChangeU", (function(t) {
                        e.setState({
                            user: t.target.value,
                            pass: e.state.pass
                        })
                    })), o(f(e), "handleChangeP", (function(t) {
                        e.setState({
                            user: e.state.user,
                            pass: t.target.value
                        })
                    })), o(f(e), "register", (function() {
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
                return p(t, e), s(t, [{
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
                        return this.props.register ? a.a.createElement("div", {
                            className: "register-menu"
                        }, a.a.createElement("center", null, a.a.createElement("h3", null, "Create an account!"), a.a.createElement("br", null), a.a.createElement("input", {
                            className: "overlay-input",
                            type: "text",
                            onChange: this.handleChangeU,
                            placeholder: "Username",
                            maxLength: "16",
                            style: {
                                margin: 8
                            }
                        }), a.a.createElement("input", {
                            className: "overlay-input",
                            type: "password",
                            onChange: this.handleChangeP,
                            placeholder: "Password",
                            maxLength: "32",
                            style: {
                                margin: 8
                            }
                        }), a.a.createElement("br", null), a.a.createElement("button", {
                            className: "register",
                            onClick: this.register
                        }, "Register!"), a.a.createElement("br", null), a.a.createElement("br", null), "By registering, you agree to our terms of service, available at torn.space/tos.", a.a.createElement("br", null), "Remember, never give your password to anyone!!")) : null
                    }
                }]), t
            }(r.Component),
            b = function(e) {
                function t() {
                    var e;
                    return l(this, t), o(f(e = c(this, d(t).call(this))), "handleChangeU", (function(t) {
                        e.setState({
                            user: t.target.value,
                            pass: e.state.pass
                        })
                    })), o(f(e), "handleChangeP", (function(t) {
                        e.setState({
                            user: e.state.user,
                            pass: t.target.value
                        })
                    })), o(f(e), "login", (function() {
                        var t = e.state.user,
                            n = e.state.pass;
                        "" != t && "" != n && (connect(), void 0 !== m.socket && m.socket.emit("login", {
                            user: t,
                            pass: n,
                            amNew: !1,
                            version: "v2-32-g8110b8a"
                        }))
                    })), o(f(e), "registerH", (function() {
                        connect(), void 0 !== m.socket && m.socket.emit("lore", {
                            alien: !1
                        })
                    })), o(f(e), "registerA", (function() {
                        connect(), void 0 !== m.socket && m.socket.emit("lore", {
                            alien: !0
                        })
                    })), o(f(e), "langEng", (function() {
                        setLang("eng")
                    })), o(f(e), "langEsp", (function() {
                        setLang("esp")
                    })), o(f(e), "langFrn", (function() {
                        setLang("frn")
                    })), o(f(e), "langPyc", (function() {
                        setLang("pyc")
                    })), o(f(e), "langDeu", (function() {
                        setLang("deu")
                    })), e.state = {
                        user: "",
                        pass: "",
                        seed: Math.random()
                    }, e
                }
                return p(t, e), s(t, [{
                    key: "render",
                    value: function() {
                        var e = this.state.seed < .5 ? a.a.createElement("div", null, a.a.createElement("button", {
                            id: "registerA",
                            onClick: this.registerA
                        }, "Join Alien Team!"), a.a.createElement("button", {
                            id: "registerH",
                            onClick: this.registerH
                        }, "Join Human Team!")) : a.a.createElement("div", null, a.a.createElement("button", {
                            id: "registerH",
                            onClick: this.registerH
                        }, "Join Human Team!"), a.a.createElement("button", {
                            id: "registerA",
                            onClick: this.registerA
                        }, "Join Alien Team!"));
                        return this.props.display ? a.a.createElement("div", null, a.a.createElement("div", {
                            className: "overlay-menu"
                        }, a.a.createElement("div", {
                            className: "container"
                        }, a.a.createElement("div", {
                            className: "guests"
                        }, a.a.createElement("center", null, a.a.createElement("h3", null, "New Players"), e)), a.a.createElement("div", {
                            className: "video"
                        }, a.a.createElement("center", null, a.a.createElement("img", {
                            src: "img/harrlogo.png",
                            alt: "Logo",
                            width: "340"
                        }))), a.a.createElement("div", {
                            className: "login"
                        }, a.a.createElement("center", null, a.a.createElement("h3", null, "Returning Players"), a.a.createElement("input", {
                            className: "overlay-input",
                            type: "text",
                            id: "usernameid",
                            onChange: this.handleChangeU,
                            placeholder: "Username"
                        }), a.a.createElement("input", {
                            className: "overlay-input",
                            type: "password",
                            id: "passid",
                            onChange: this.handleChangeP,
                            placeholder: "Password"
                        }), a.a.createElement("button", {
                            className: "overlay-button",
                            id: "loginButton",
                            onClick: this.login
                        }, "Login"))))), a.a.createElement("div", {
                            className: "discord"
                        }, a.a.createElement("a", {
                            onClick: this.langEng
                        }, "Eng|"), a.a.createElement("a", {
                            onClick: this.langEsp
                        }, "Esp|"), a.a.createElement("a", {
                            onClick: this.langFrn
                        }, "Frn|"), a.a.createElement("a", {
                            onClick: this.langDeu
                        }, "Deu|"), a.a.createElement("a", {
                            onClick: this.langPyc
                        }, "Pyc"))) : null
                    }
                }]), t
            }(r.Component),
            _ = function(e) {
                function t() {
                    var e;
                    return l(this, t), (e = c(this, d(t).call(this))).state = {
                        msgs: []
                    }, m.chat = function(t) {
                        var n = e.state;
                        n.msgs.push(new w(t)), e.setState(n)
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
                return p(t, e), s(t, [{
                    key: "render",
                    value: function() {
                        return a.a.createElement("div", {
                            className: "chat"
                        }, this.state.msgs.map((function(e, t) {
                            return a.a.createElement("div", {
                                maxLength: "128",
                                className: "chat-msg ".concat(e.fadeOut ? "chat-msg-fadeout" : ""),
                                key: t,
                                style: {
                                    color: "red" === e.color ? "pink" : "blue" === e.color ? "cyan" : "white"
                                }
                            }, e.msg)
                        })), a.a.createElement(x, null))
                    }
                }]), t
            }(r.Component),
            w = function e(t) {
                var n = this;
                l(this, e), this.msg = t.msg, this.color = t.color, this.id = Math.random(), this.fadeOut = !1, setTimeout((function() {
                    _.fadeOut(n.id), setTimeout((function() {
                        _.remove(n.id)
                    }), 2e3)
                }), 6e4)
            },
            x = function(t) {
                function n() {
                    var e;
                    return l(this, n), (e = c(this, d(n).call(this))).state = {
                        value: "",
                        activated: !1
                    }, e
                }
                return p(n, t), s(n, [{
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
                        return this.state.activated ? a.a.createElement("input", {
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
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;

    function i(e) {
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
        for (var n, l, u = i(e), s = 1; s < arguments.length; s++) {
            for (var c in n = Object(arguments[s])) a.call(n, c) && (u[c] = n[c]);
            if (r) {
                l = r(n);
                for (var f = 0; f < l.length; f++) o.call(n, l[f]) && (u[l[f]] = n[l[f]])
            }
        }
        return u
    }
}, function(e, t, n) {
    (function(e) {
        var t = "english.json",
            r = "spanish.json",
            a = "russian.json",
            o = "german.json",
            i = "french.json";
        e.languagejson = null, e.jsn = n(12), e.setLang = function(e) {
            document.cookie = "lang=" + e, loadLang(e)
        }, e.loadLang = function(n) {
            var l = null;
            if ((location.href.includes("eng") || "eng" == n) && (l = languagejson = t), (location.href.includes("frn") || "frn" === n) && (l = languagejson = i), (location.href.includes("esp") || "esp" === n) && (l = languagejson = r), (location.href.includes("pyc") || "pyc" === n) && (l = languagejson = a), (location.href.includes("deu") || "deu" === n) && (l = languagejson = o), !l) {
                var u = document.cookie.replace(/(?:(?:^|.*;\s*)lang\s*\=\s*([^;]*).*$)|^.*$/, "$1");
                null == u && (languagejson = t), "frn" === u ? languagejson = i : "esp" === u ? languagejson = r : "pyc" === u ? languagejson = a : "eng" === u ? languagejson = t : "deu" == u && (languagejson = o)
            }
            null == languagejson && (languagejson = t), languagejson = function(e) {
                var t = new XMLHttpRequest;
                t.open("GET", e, !1);
                var n = "";
                return t.onload = function(e) {
                    4 === t.readyState && (n = t.responseText)
                }, t.send(null), JSON.parse(n)
            }(languagejson), jsn.messages = languagejson.messages, jsn.achNames = languagejson.achNames, jsn.splashes = languagejson.splashes, jsn.lore = languagejson.lore;
            for (var s = 0; s < jsn.weapons.length; s++) jsn.weapons[s].name = languagejson.weapons[s].name, jsn.weapons[s].desc = languagejson.weapons[s].desc;
            for (s = 0; s < jsn.ships.length; s++) jsn.ships[s].nameA = languagejson.ships[s].nameA, jsn.ships[s].nameH = languagejson.ships[s].nameH, jsn.ships[s].desc = languagejson.ships[s].desc;
            e.mEng = jsn.messages, e.splash = jsn.splashes[Math.floor(Math.random() * jsn.splashes.length)], splash.endsWith("!") || splash.endsWith("?") || (splash += "...")
        }
    }).call(this, n(2))
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
    }(), e.exports = n(9)
}, function(e, t, n) {
    e.exports = n(7)
}, function(e, t, n) {
    "use strict";
    n.r(t),
        function(e) {
            var t = n(0),
                r = n.n(t),
                a = n(5),
                o = n.n(a),
                i = n(1);
            console.log("************************************************************************************************************************"), console.log(" ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄     ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄ "), console.log("▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌"), console.log(" ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌   ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌▐░▌    ▐░▌   ▐░▌          ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌          ▐░▌          "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌ ▐░▌   ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌          ▐░█▄▄▄▄▄▄▄▄▄ "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌   ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌          ▐░░░░░░░░░░░▌"), console.log("     ▐░▌     ▐░▌       ▐░▌▐░█▀▀▀▀█░█▀▀ ▐░▌   ▐░▌ ▐░▌    ▀▀▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌          ▐░█▀▀▀▀▀▀▀▀▀ "), console.log("     ▐░▌     ▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌    ▐░▌▐░▌             ▐░▌▐░▌          ▐░▌       ▐░▌▐░▌          ▐░▌          "), console.log("     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░▌     ▐░▐░▌ ▄  ▄▄▄▄▄▄▄▄▄█░▌▐░▌          ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄▄▄ "), console.log("     ▐░▌     ▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░▌      ▐░░▌▐░▌▐░░░░░░░░░░░▌▐░▌          ▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌"), console.log("      ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀        ▀▀  ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀            ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀ "), console.log("                                                                                                                        "), console.log("************************************************************************************************************************"), console.log("torn-client-git-torn-production-8110b8a85b20c2c8ff3f838533a7303a6f2e2c2a"), console.log("Implementing protocol version v2-32-g8110b8a"), window.document.title = "Torn v2-32-g8110b8a";
            var l = !0,
                u = document.getElementById("ctx");
            u.width = window.innerWidth, u.height = window.innerHeight;
            var s = u.getContext("2d"),
                c = n(13),
                f = c.Howl,
                d = c.Howler,
                p = n(14);
            o.a.render(r.a.createElement(i.a, {
                data: {
                    toggleMusic: function() {
                        (Tn ^= !0) && A ? wn.music1.pause() : 0 != _n && wn.music1.play();
                        return Tn
                    },
                    toggleAudio: function() {
                        return Sn ^= !0, d.mute(Sn), Sn
                    }
                }
            }), document.getElementById("a")), i.a.turnOnDisplay("LoginOverlay");
            for (var h = [], m = 0; m < 1571; m++) h[m] = Math.sin(m / 1e3);
            n(4), loadLang();
            var g = io("torn.space:443", {
                autoConnect: !1,
                parser: p
            });
            i.a.socket = g, e.connect = function() {
                g.connected || g.open()
            };
            var v = 14336,
                y = 0,
                b = 0,
                _ = 0,
                w = 0,
                x = 0,
                k = 0,
                E = 0,
                S = 7,
                T = 0,
                M = 0,
                A = !1,
                P = !1,
                C = !1,
                I = 0,
                N = 0,
                O = 0,
                D = 0,
                R = !1,
                L = 0,
                U = 0,
                z = 0,
                F = 0,
                j = 0,
                B = 0,
                H = 0,
                W = 0,
                V = 0,
                q = 0,
                G = 0,
                Q = 0,
                K = 0,
                X = 0,
                Y = 0,
                J = 0,
                Z = 0,
                ee = 0,
                te = 0,
                ne = 0,
                re = 0,
                ae = 0,
                oe = 0,
                ie = 0,
                le = !1,
                ue = !0,
                se = 0,
                ce = -1,
                fe = 0,
                de = 0,
                pe = .5;
            e.typing = !1, e.stopTyping = function() {
                typing = !1
            };
            var he = 20,
                me = 0,
                ge = 0,
                ve = {},
                ye = 0,
                be = 0,
                _e = 0,
                we = {};
            for (m = 0; m < he; m++) we[m] = "";
            xr();
            var xe = -1,
                ke = 0,
                Ee = 0,
                Se = 0,
                Te = !1,
                Me = !1,
                Ae = 0,
                Pe = 0,
                Ce = 0,
                Ie = 0,
                Ne = -1,
                Oe = -1,
                De = 0,
                Re = 45e3,
                Le = 1,
                Ue = 1,
                ze = 1,
                Fe = 1,
                je = 1,
                Be = 1,
                He = !1,
                We = 50,
                Ve = 0,
                qe = 0,
                $e = -40,
                Ge = 0,
                Qe = 0,
                Ke = 0,
                Xe = 0,
                Ye = 0,
                Je = !1,
                Ze = 0,
                et = 0,
                tt = 0,
                nt = "~`",
                rt = "GUEST",
                at = "",
                ot = !1,
                it = !1,
                lt = "",
                ut = "",
                st = 0,
                ct = 0,
                ft = {},
                dt = {},
                pt = {},
                ht = {},
                mt = {},
                gt = 0,
                vt = 0,
                yt = 0,
                bt = 0,
                _t = [],
                wt = 0,
                xt = window.innerWidth,
                kt = window.innerHeight,
                Et = xt / 2 - 384,
                St = kt / 4 - 128,
                Tt = void 0,
                Mt = {},
                At = {},
                Pt = {},
                Ct = {},
                It = {},
                Nt = {},
                Ot = {},
                Dt = {},
                Rt = {},
                Lt = !1,
                Ut = !1,
                zt = [];
            for (m = 0; m < 200; m++) zt[m] = {
                x: Math.random() * xt,
                y: Math.random() * kt
            };
            var Ft = void 0,
                jt = [];
            for (m = 0; m < 2e3; m++) {
                var Bt = 6.28318 * Math.random(),
                    Ht = 128 * Math.random(),
                    Wt = ir(Bt += or(5 * (Bt % (2 * Math.PI / 5) + Ht / 32) / 2) / (1 + 128 / Ht)) * Ht,
                    Vt = or(Bt) * Ht,
                    qt = 16 * or(100 * Math.random()) / (1 + Ht * Ht / 1024);
                jt[m] = {
                    x: Math.floor(Wt),
                    y: Math.floor(Vt),
                    z: Math.floor(qt)
                }
            }
            var $t = 0,
                Gt = -1,
                Qt = 0,
                Kt = !1,
                Xt = oe,
                Yt = ie,
                Jt = {
                    x: Xt *= 256 / S * (2 * S - 1) / (2 * S),
                    y: Yt *= 256 / S * (2 * S - 1) / (2 * S),
                    z: 0,
                    color: "lime"
                },
                Zt = 0,
                en = 0,
                tn = !1,
                nn = !1,
                rn = 0,
                an = [],
                on = [0, 1, 0, 4, 2, 2, 3, 0, 5, 1];
            for (m = 0; m < 12; m += 2) {
                Wt = on[m] - (S - 1) / 2, Vt = on[m + 1] - (S - 1) / 2;
                Wt *= 256 / S * (2 * S - 1) / (2 * S), Vt *= 256 / S * (2 * S - 1) / (2 * S), an[m / 2] = {
                    x: Wt,
                    y: Vt,
                    z: 0,
                    color: "red"
                };
                var ln = (S - 1) / 2 - on[m],
                    un = (S - 1) / 2 - on[m + 1];
                ln *= 256 / S * (2 * S - 1) / (2 * S), un *= 256 / S * (2 * S - 1) / (2 * S), an[m / 2 + 6] = {
                    x: ln,
                    y: un,
                    z: 0,
                    color: "cyan"
                }
            }
            var sn = [];
            for (m = 0; m < 2 * S + 2; m++) {
                Wt = m < S + 1 ? 256 * (m - S / 2) / S : -128, Vt = m > S ? 256 * (m - (S + 1) - S / 2) / S : -128;
                Wt *= (2 * S - 1) / (2 * S), Vt *= (2 * S - 1) / (2 * S), sn[m] = {
                    x: Wt,
                    y: Vt,
                    z: 0
                };
                ln = m < S + 1 ? 256 * (m - S / 2) / S : 128, un = m > S ? 256 * (m - (S + 1) - S / 2) / S : 128;
                ln *= (2 * S - 1) / (2 * S), un *= (2 * S - 1) / (2 * S), sn[m + 2 * S + 2] = {
                    x: ln,
                    y: un,
                    z: 0
                }
            }
            for (var cn = jsn.weapons, fn = jsn.ships, dn = 0; dn < cn.length - 1; dn++)
                if (cn[hr(dn)].type === cn[hr(dn + 1)].type && cn[hr(dn)].level > cn[hr(dn + 1)].level) {
                    var pn = hr(dn),
                        hn = hr(dn + 1);
                    cn[pn].order = dn + 1, cn[hn].order = dn, dn = 0
                }
            cn[-2] = {
                name: ""
            }, cn[-1] = {
                name: mEng[0]
            };
            var mn = 0,
                gn = 0,
                vn = 0,
                yn = 0,
                bn = {},
                _n = 0,
                wn = {},
                xn = [0, 0],
                kn = !1;

            function En(e, t) {
                wn[e] && console.error("Loading audio twice: " + e), wn[e] = new f({
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
            var Sn = !1,
                Tn = !1;

            function Mn(e, t) {
                if (!Sn) {
                    var n = wn[e];
                    n || console.error("Unknown sound " + e);
                    var r = n.play();
                    n.volume(pe * t, r), "bigboom" == e && n.volume(pe * t * 2, r), "noammo" == e && n.volume(pe * t * 5, r), "music1" === e && (n.volume(pe * t / 2, r), _n = r)
                }
            }
            var An = [],
                Pn = [],
                Cn = [],
                In = {},
                Nn = [0, 0],
                On = !1;

            function Dn(e, t) {
                In[e] ? console.error("Loading image twice: " + e) : (In[e] = new Image, In[e].addEventListener("load", (function() {
                    lt = "Loaded sprite " + e, console.log(lt), Nn[0]++
                })), In[e].src = t, Nn[1]++)
            }

            function Rn(e, t) {
                e ? (An[t] = new Image, An[t].src = "/img/red/r" + (t + 1) + ".png") : (Pn[t] = new Image, Pn[t].src = "/img/blue/b" + (t + 1) + ".png")
            }! function() {
                Dn("s1", "/img/space/s1.png"), Dn("s2", "/img/space/s2.png"), Dn("s3", "/img/space/s3.png"), Dn("s4", "/img/space/s4.png"), Dn("s5", "/img/space/s5.png"), Dn("s6", "/img/space/s6.png"), Dn("s7", "/img/space/s7.png"), Dn("s8", "/img/space/s8.png"), Dn("spc", "/img/space/NewBackground.png"), Dn("bullet", "/img/red/rb.png"), Dn("grad", "/img/grad.png"), Dn("shockwave", "/img/shockwave.png"), Dn("ebullet", "/img/blue/bb.png"), Dn("bigBullet", "/img/bigBullet.png"), Dn("base", "https://cdn.discordapp.com/attachments/658471777361723393/658844472884461578/base-alien.png"), Dn("bss", "https://cdn.discordapp.com/attachments/658471777361723393/658844481541505033/base-human.png"), Dn("mrss", "/img/red/mrss.png"), Dn("mbss", "/img/blue/mbss.png"), Dn("turret", `https://cdn.discordapp.com/attachments/658471777361723393/658774700305940491/turret-alien.png`), Dn("bt", `https://cdn.discordapp.com/attachments/658471777361723393/658786151993180175/turret-human.png`), Dn("iron", "/img/space/iron.png"), Dn("aluminium", "/img/space/aluminium.png"), Dn("platinum", "/img/space/platinum.png"), Dn("silver", "/img/space/silver.png"), Dn("astUnderlay", "/img/space/astUnderlay.png"), Dn("astUnderlayRed", "/img/space/astUnderlayRed.png"), Dn("booms", "/img/booms.png"), Dn("planetO", "/img/space/planetOverlay.png"), Dn("planetU", "/img/space/planetUnderlay.png"), Dn("planetUB", "/img/space/planetUnderlayBlue.png"), Dn("planetUR", "/img/space/planetUnderlayRed.png"), Dn("grid", "/img/grid.png"), Dn("galaxy", "/img/galaxy.png"), Dn("spin", "/img/spin.png"), Dn("fire", "/img/fire.png"), Dn("arrow", "/img/arrow.png"), Dn("energyDisk", "/img/missile/energyDisk.png"), Dn("missile", "https://media.discordapp.net/attachments/658471777361723393/658770909489922066/missile-basic.png"), Dn("torpedo", "https://media.discordapp.net/attachments/658471777361723393/658774046258888714/missile-torpedo.png"), Dn("heavyMissile", "https://media.discordapp.net/attachments/658471777361723393/658770942646026250/missile-heavy.png"), Dn("empMissile", "https://media.discordapp.net/attachments/658471777361723393/658770928028745741/missile-emp.png"), Dn("mine", "/img/missile/mine.png"), Dn("grenade", "/img/missile/grenade.png"), Dn("empMine", "/img/missile/empMine.png"), Dn("laserMine", "/img/missile/laserMine.png"), Dn("ma", "/img/ma.png"), Dn("vort", "/img/space/vort.png"), Dn("worm", "/img/space/worm.png"), Dn("q", "/img/q.png"), Dn("button", "/img/button.png"), Dn("gbutton", "/img/gbutton.png"), Dn("pack", "/img/pack.png"), Dn("ammo", "/img/ammo.png"), Dn("bonus", "/img/bonus.png"), Dn("life", "/img/life.png"), Dn("bar1", "/img/bar1.png"), Dn("bar2", "/img/bar2.png"), Dn("astArrow", "/img/astArrow.png"), Dn("edgeArrow", "/img/edgeArrow.png"), Dn("redArrow", "/img/redArrow.png"), Dn("blueArrow", "/img/blueArrow.png"), Dn("baseArrow", "/img/baseArrow.png"), Dn("BHArrow", "/img/BHArrow.png"), Dn("Exclamation", "/img/AAA.png"), Dn("energyBar", "/img/energy.png"), Rn(!0, 14);
                for (var e = 0; e < 8; e++) Rn(!1, e);
                for (e = 0; e < 8; e++) Rn(!0, e);
                ! function() {
                    var e = function() {
                        return Nn[0] === Nn[1] && ((On = !0) && kn && (Lt = !0), !0)
                    };
                    if (!e()) var t = setInterval((function() {
                        e() && clearInterval(t)
                    }), 100)
                }()
            }(), En("minigun", "https://cdn.discordapp.com/attachments/482302941072588800/493828086651944971/PulsePhaserJLH.wav"), En("boom", "aud/noammo.wav"), En("hyperspace", "https://cdn.discordapp.com/attachments/658471777361723393/658722096179970108/Cursanfocusbeamloop.wav"), En("bigboom", "https://cdn.discordapp.com/attachments/482302941072588800/493822304531251220/explo_large_01.wav"), En("shot", "https://cdn.discordapp.com/attachments/658471777361723393/658715190451372042/mouseclick.wav"), En("beam", "https://cdn.discordapp.com/attachments/658471777361723393/658659332061396993/ambassador_phaser_a.wav"), En("missile", "https://cdn.discordapp.com/attachments/482302941072588800/493828777114337285/VoyTorpJLH.wav"), En("sector", "https://cdn.discordapp.com/attachments/658471777361723393/658710553128075294/hail.wav"), En("money", "/aud/money.wav"), En("button2", "https://cdn.discordapp.com/attachments/658471777361723393/658709681690378240/ebviewscreenoff.wav"), En("noammo", "https://cdn.discordapp.com/attachments/482302941072588800/493822774788358154/Error.WAV"),
                function() {
                    var e = function() {
                        return xn[0] === xn[1] && ((kn = !0) && On && (Lt = !0), !0)
                    };
                    if (!e()) var t = setInterval((function() {
                        e() && clearInterval(t)
                    }), 100)
                }();
            var Ln = [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1],
                Un = [-1, -1, -1, -1];

            function zn(e) {
                for (var t in jt) {
                    var n = jt[t],
                        r = Math.sqrt(n.y * n.y + n.z * n.z),
                        a = Math.atan2(n.z, n.y) + e / 28,
                        o = Math.cos(a) * r,
                        i = Math.sin(a) * r;
                    n.y = o, n.z = i
                }
                for (var t in an) {
                    n = an[t], r = Math.sqrt(n.y * n.y + n.z * n.z), a = Math.atan2(n.z, n.y) + e / 28, o = Math.cos(a) * r, i = Math.sin(a) * r;
                    n.y = o, n.z = i
                }
                for (var t in sn) {
                    n = sn[t], r = Math.sqrt(n.y * n.y + n.z * n.z), a = Math.atan2(n.z, n.y) + e / 28, o = Math.cos(a) * r, i = Math.sin(a) * r;
                    n.y = o, n.z = i
                }
                n = Jt, r = Math.sqrt(n.y * n.y + n.z * n.z), a = Math.atan2(n.z, n.y) + e / 28, o = Math.cos(a) * r, i = Math.sin(a) * r;
                n.y = o, n.z = i
            }

            function Fn(e) {
                for (var t in jt) {
                    var n = jt[t],
                        r = Math.sqrt(n.x * n.x + n.z * n.z),
                        a = Math.atan2(n.z, n.x) + e / 28,
                        o = Math.cos(a) * r,
                        i = Math.sin(a) * r;
                    n.x = o, n.z = i
                }
                for (var t in an) {
                    n = an[t], r = Math.sqrt(n.x * n.x + n.z * n.z), a = Math.atan2(n.z, n.x) + e / 28, o = Math.cos(a) * r, i = Math.sin(a) * r;
                    n.x = o, n.z = i
                }
                for (var t in sn) {
                    n = sn[t], r = Math.sqrt(n.x * n.x + n.z * n.z), a = Math.atan2(n.z, n.x) + e / 28, o = Math.cos(a) * r, i = Math.sin(a) * r;
                    n.x = o, n.z = i
                }
                n = Jt, r = Math.sqrt(n.x * n.x + n.z * n.z), a = Math.atan2(n.z, n.x) + e / 28, o = Math.cos(a) * r, i = Math.sin(a) * r;
                n.x = o, n.z = i
            }

            function jn(e, t) {
                return String.fromCharCode(97 + e).toUpperCase() + "" + (t + 1)
            }

            function Bn() {
                if (He) return s.globalAlpha = .02, s.fillStyle = "black", s.fillRect(0, 0, u.width, u.height), s.globalAlpha = 1, void
                function() {
                    s.fillStyle = "yellow", s.textAlign = "center", s.font = "50px Nasa", nr(mEng[110], Et + 384, St + 128), s.font = "34px Nasa", nr(mEng[13] + We, Et + 384, St + 384), We > 0 && nr(mEng[111], Et + 384, St + 512);
                    s.textAlign = "left", s.font = "11px Nasa"
                }();
                if (le && (Me = !1, mr(), function() {
                        w++, u.width = u.width, Er(), wr(), kr(),
                            function() {
                                s.lineWidth = 2, s.textAlign = "right", s.fillStyle = "yellow";
                                var e = {};
                                e[0] = mEng[3] + jn(oe, ie), e[1] = mEng[5] + Math.floor(ne);
                                for (var t = 0; t < 2; t++) nr(e[t], xt - (Ut ? 16 : 278), 16 + 16 * t);
                                s.font = "11px Nasa", s.lineWidth = 2, zn(or(++x % 3142 / 100) / 16), Fn(ir(x % 3142 / Math.PI / 50) / 16);
                                var n = {};
                                n[0] = mEng[141], n[1] = mEng[142], n[2] = mEng[143], n[3] = mEng[144], n[4] = mEng[145], n[5] = mEng[146], Ir(Et, St + 44, 768, 468, "black", "white"), s.textAlign = "center";
                                for (t = 0; t < 6; t++) Ir(Et + 128 * t + 8, St + 4, 112, 32, se == t ? "darkgray" : "black", "white");
                                s.fillStyle = "white";
                                for (t = 0; t < 6; t++) nr(n[t], Et + (128 * t + 64), St + 23);
                                s.fillStyle = "yellow", s.textAlign = "right", s.font = "18px Nasa", nr(mEng[78], Et + 768 - 16, St + 512 + 24), s.font = "11px Nasa", s.textAlign = "left"
                            }(), -1 != se && i.a.turnOffRegister("LoginOverlay");
                        switch (se) {
                            case 0:
                                s.textAlign = "center",
                                    function() {
                                        for (var e in s.strokeStyle = s.fillStyle = "white", s.lineWidth = 2, jt) {
                                            var t = jt[e],
                                                n = Et + 256 + 2 * t.x / 1.5,
                                                r = St + 256 + 20 + 2 * t.y / 1.5;
                                            s.fillRect(n, r, 1.5, 1.5)
                                        }
                                        for (var e in an) {
                                            t = an[e], n = Et + 256 + 2 * t.x / 1.5, r = St + 256 + 20 + 2 * t.y / 1.5;
                                            var a = "red" == t.color ? In.mrss : "cyan" == t.color ? In.mbss : In.ma;
                                            s.drawImage(a, n - 10, r - 10, 21, 21)
                                        }
                                        for (s.strokeStyle = "gray", s.lineWidth = .8, e = 0; e < 2 * S + 2; e++) {
                                            t = sn[e];
                                            var o = sn[e + 2 * S + 2],
                                                i = (n = Et + 256 + 2 * t.x / 1.5, r = St + 256 + 20 + 2 * t.y / 1.5, Et + 256 + 2 * o.x / 1.5),
                                                l = St + 256 + 20 + 2 * o.y / 1.5;
                                            s.beginPath(), s.moveTo(n, r), s.lineTo(i, l), s.closePath(), s.stroke()
                                        }
                                    }(), Ut && (s.font = 4 * or(x / 16) + 28 + "px Nasa", s.fillStyle = 600 == Ae ? "lime" : "yellow", s.textAlign = "center", nr(mEng[11], Et + 728 - 96, St + 256), s.font = "11px Nasa");
                                break;
                            case 1:
                                ! function() {
                                    var e = {};
                                    e[4] = (X > 0 ? mEng[133] : mEng[137]) + X + " => $" + X * ("red" === O ? 1 : 2) + " ($" + ("red" === O ? "1" : "2") + " " + mEng[155] + ")", e[5] = (Y > 0 ? mEng[134] : mEng[138]) + Y + " => $" + 1.5 * Y + " ($1.5 " + mEng[155] + ")", e[6] = (J > 0 ? mEng[135] : mEng[139]) + J + " => $" + J * ("blue" === O ? 1 : 2) + " ($" + ("blue" === O ? "1" : "2") + " " + mEng[155] + ")", e[7] = (Z > 0 ? mEng[136] : mEng[140]) + Z + " => $" + 1.5 * Z + " ($1.5 " + mEng[155] + ")",
                                        function(e, t) {
                                            for (var n in s.strokeStyle = s.fillStyle = "white", s.lineWidth = 2, jt) {
                                                var r = jt[n],
                                                    a = e + r.x / 1.33,
                                                    o = t + r.y / 1.33;
                                                s.fillRect(a, o, 1, 1)
                                            }
                                            for (var n in an) {
                                                r = an[n], a = e + r.x / 1.33, o = t + r.y / 1.33;
                                                var i = "red" == r.color ? In.mrss : "cyan" == r.color ? In.mbss : In.ma;
                                                s.drawImage(i, a - 7, o - 7, 15, 15)
                                            }
                                            s.strokeStyle = "gray", s.lineWidth = .35;
                                            for (n = 0; n < 2 * S + 2; n++) {
                                                r = sn[n];
                                                var l = sn[n + 2 * S + 2],
                                                    u = (a = e + r.x / 1.33, o = t + r.y / 1.33, e + l.x / 1.33),
                                                    c = t + l.y / 1.33;
                                                s.beginPath(), s.moveTo(a, o), s.lineTo(u, c), s.closePath(), s.stroke()
                                            }
                                        }(Et + 768 - 256 - 16 + 128, St + 512 - 128 - 32), s.strokeStyle = "white", s.lineWidth = 1, s.font = "11px Nasa", s.textAlign = "left";
                                    for (var t = 4; t < 8; t++) s.fillStyle = t + 1 == Ae ? "lime" : "yellow", nr(e[t], Et + 256 - 32, St - 32 + 32 * t);
                                    s.fillStyle = 610 == Ae ? "lime" : "yellow", nr(mEng[12], Et + 256 + 48, St + 76), s.fillStyle = "yellow", s.textAlign = "right", nr(mEng[13] + We + " ($" + cr() + ") ", Et + 768 - 16 - s.measureText(mEng[14]).width, St + 512 - 16), s.fillStyle = We >= 20 || ne < cr() ? "red" : 611 == Ae ? "lime" : "yellow", nr(mEng[14], Et + 768 - 16, St + 512 - 16), s.textAlign = "left", s.fillStyle = "yellow", s.font = "24px Nasa", nr(mEng[15], Et + 256 + 32, St + 256 - 16), s.textAlign = "center", nr(mEng[16], Et + 256, St + 64 + 8), s.textAlign = "left", s.font = "11px Nasa", s.fillStyle = 601 == Ae ? "lime" : "yellow", nr(mEng[18], Et + 512 - 64, St + 256 - 16), s.fillStyle = "yellow";
                                    for (t = 0; t < 10; t++) {
                                        s.fillStyle = Ae - 10 == t ? "lime" : "yellow", fn[fe].weapons <= t && (s.fillStyle = "orange"), fe < cn[yn[t]].level && (s.fillStyle = "red");
                                        var n = "\t      "; - 1 == yn[t] ? n = mEng[14] + (9 != t ? "  " : " ") : yn[t] > -1 && (n = mEng[19] + (9 != t ? " " : "")), nr(n + (t + 1) + ": " + cn[yn[t]].name, Et + 256 + 32, St + 256 + 16 * t)
                                    }
                                    s.fillStyle = "white", Cr(Et + 16, St + 256 - 16, 256, 256, 8, !1, !0);
                                    var r = new Date,
                                        a = 2 * r.getMilliseconds() * Math.PI / 5e4 + 2 * r.getSeconds() * Math.PI / 50 + 2 * r.getMinutes() * 60 * Math.PI / 50,
                                        o = Et + 128 + 16,
                                        i = St + 384 - 16,
                                        l = "red" === O,
                                        u = l ? An[fe] : Pn[fe];
                                    void 0 === u || 2 == u ? ((l ? An : Pn)[fe] = 2, 2 != u && Rn(l, fe)) : (s.save(), s.translate(o, i), s.rotate(-3 * a), fe > ae && (u = In.q), s.drawImage(u, -u.width / 2, -u.height / 2), s.restore());
                                    s.textAlign = "center", s.fillStyle = "yellow", s.font = "20px Nasa", nr(mEng[24], Et + 128 + 16, St + 256 + 16), s.font = "11px Nasa", nr(mEng[25] + " " + fe, Et + 128 + 16, St + 256 + 56), nr("red" === O ? fn[fe].nameA : fn[fe].nameH, Et + 128 + 16, St + 256 + 40), fe > ae && (s.fillStyle = "red");
                                    s.fillStyle = "yellow", fn[fe].price > ne + Ce || fe > ae ? s.fillStyle = "red" : 100 == Ae && (s.fillStyle = "lime");
                                    fe != Ie && nr("$" + (fn[fe].price - Ce) + " " + mEng[14], o, i + 96);
                                    s.textAlign = "left", s.fillStyle = "yellow", nr(mEng[27] + (fe > ae ? mEng[26] : fn[fe].thrust), Et + 256 + 32, St + 256 + 176), nr(mEng[28] + (fe > ae ? mEng[26] : fn[fe].agility), Et + 256 + 32, St + 256 + 192), nr(mEng[29] + (fe > ae ? mEng[26] : fn[fe].health), Et + 256 + 32, St + 256 + 208), nr(mEng[30] + (fe > ae ? mEng[26] : fn[fe].weapons), Et + 256 + 32, St + 256 + 224), nr(mEng[31] + (fe > ae ? mEng[26] : fn[fe].capacity), Et + 256 + 32, St + 256 + 240), fe < fn.length && s.drawImage(In.arrow, o + 128 - 48, i - 16);
                                    fe > 0 && (s.save(), s.translate(o - 128 + 32, i), s.rotate(Math.PI), s.drawImage(In.arrow, -16, -16), s.restore());
                                    var c = Math.floor((r.getMilliseconds() / 1e3 + r.getSeconds()) / 60 * 1024) % 64,
                                        f = c % 8 * 128,
                                        d = 128 * Math.floor(c / 8 % 4);
                                    s.save(), s.translate(Et + 128 - 16, St + 92 + 40), s.drawImage(In.silver, f, d, 128, 128, -64, -64, 128, 128), s.restore()
                                }();
                                break;
                            case 2:
                                ! function() {
                                    if (s.font = "11px Nasa", s.textAlign = "left", Sr(), 0 != M) {
                                        s.fillStyle = "cyan", s.textAlign = "center", s.font = "30px Nasa", nr(mEng[36], Et + 384, St + 128), s.font = "11px Nasa";
                                        var e = "";
                                        "Mining" === M.type && (e = mEng[37] + M.amt + mEng[38] + M.metal + mEng[39] + jn(M.sx, M.sy) + mEng[40]), "Base" === M.type && (e = mEng[41] + jn(M.sx, M.sy) + mEng[40]), "Delivery" === M.type && (e = mEng[42] + jn(M.sx, M.sy) + mEng[43] + jn(M.dsx, M.dsy) + mEng[40]), "Secret" === M.type && (e = mEng[156] + jn(M.sx, M.sy) + mEng[157]), "Secret2" === M.type && (e = mEng[158] + jn(M.sx, M.sy) + mEng[159] + ut + mEng[40]), "Secret3" === M.type && (e = mEng[160]), nr(e, Et + 384, St + 192), s.textAlign = "left"
                                    } else
                                        for (var t in T) {
                                            var n = t < 5 ? 0 : 384,
                                                r = T[t];
                                            e = "";
                                            s.fillStyle = t == Ae - 300 ? "lime" : "yellow", "Mining" == r.type && (e = mEng[37] + r.amt + mEng[38] + r.metal + mEng[39] + jn(r.sx, r.sy) + mEng[40]), "Base" == r.type && (e = ae > 6 ? mEng[41] + jn(r.sx, r.sy) + mEng[40] : mEng[46]), "Secret" == r.type && (e = ae > 14 ? mEng[156] + jn(r.sx, r.sy) + mEng[157] : mEng[46]), "Delivery" == r.type && (e = mEng[42] + jn(r.sx, r.sy) + mEng[43] + jn(r.dsx, r.dsy) + mEng[40]), nr(r.type, n + Et + 16, St + 72 + t % 5 * 80), nr(mEng[47] + r.exp + mEng[48] + Math.floor(r.exp / ("Mining" === r.type || "Delivery" === r.type ? 1500 : 4e3)) + mEng[49], n + Et + 16 + 16, St + 72 + t % 5 * 80 + 16), Vn(mEng[50] + e, n + Et + 16 + 16, St + 72 + t % 5 * 80 + 32, 336, 16)
                                        }
                                }();
                                break;
                            case 3:
                                ! function() {
                                    s.font = "11px Nasa", s.textAlign = "left";
                                    for (var e = new Date, t = 2 * e.getMilliseconds() * Math.PI / 5e4 + 2 * e.getSeconds() * Math.PI / 50 + 2 * e.getMinutes() * 60 * Math.PI / 50, n = X + Y + J + Z, r = 0, a = 1; a < Le; a += .2) r += 1e3 * Math.round(Math.pow(1024, a) / 1e3);
                                    for (a = 1; a < Fe; a += .2) r += 1e3 * Math.round(Math.pow(1024, a) / 1e3);
                                    for (a = 1; a < Be; a += .2) r += 1e3 * Math.round(Math.pow(1024, a) / 1e3);
                                    for (a = 1; a < ze; a += .2) r += 1e3 * Math.round(Math.pow(1024, a) / 1e3);
                                    for (a = 1; a < Ue; a += .2) r += 1e3 * Math.round(Math.pow(1024, a) / 1e3);
                                    for (a = 1; a < je; a += .2) r += 1e3 * Math.round(Math.pow(4096, a) / 1e3);
                                    var o = 0;
                                    for (var a in Ln) Ln[a] && o++;
                                    s.fillStyle = "yellow", nr(mEng[161], Et + 16, St + 512 - 16), s.font = "32px Nasa", s.textAlign = "center", nr(rt, Et + 192, St + 96), s.font = "11px Nasa";
                                    var i = 0;
                                    if (Ie >= cn[20].level)
                                        for (a = 0; a < fn[Ie].weapons; a++) 20 == yn[a] && i++;
                                    var l = je;
                                    for (a = 0; a < i; a++) l *= 1.06;
                                    var u = [mEng[162] + i, mEng[20] + Number((fn[Ie].thrust * Le).toPrecision(3)), mEng[21] + Number(Fe.toPrecision(3)) + mEng[163], mEng[22] + Number((fn[Ie].capacity * ze).toPrecision(3)), mEng[23] + Number((fn[Ie].health * Ue).toPrecision(3)), mEng[164] + Number(l.toPrecision(3)), ee - te + mEng[51], te + mEng[52], We + mEng[53], mEng[54] + n, mEng[55] + Number((Ce + r).toPrecision(3)), mEng[56] + Number((ne + n + Ce + r).toPrecision(3)), Math.round(re) + mEng[57], mEng[58] + ae, o + mEng[59]];
                                    for (a = 0; a < u.length; a++) nr(u[a], Et + 512 - 64, St + 44 + 32 + 16 * a);
                                    s.fillStyle = 700 == Ae ? "yellow" : "red", nr(mEng[165], Et + 512 + 128, St + 44 + 64 - 16), Ln[12] && (s.fillStyle = 701 == Ae ? "yellow" : "red", nr(mEng[166], Et + 512 + 128, St + 44 + 64 + 16));
                                    Ln[24] && (s.fillStyle = 702 == Ae ? "yellow" : "gold", nr(mEng[167], Et + 512 + 128, St + 44 + 64 + 48));
                                    Ln[36] && (s.fillStyle = 703 == Ae ? "yellow" : "lightgray", nr(mEng[168], Et + 512 + 128, St + 44 + 64 + 80));
                                    Ln[47] && (s.fillStyle = 704 == Ae ? "yellow" : "cyan", nr(mEng[169], Et + 512 + 128, St + 44 + 64 + 112));
                                    0;
                                    var c = Et + 192,
                                        f = St + 192;
                                    s.save(), s.translate(c, f), s.rotate(-3 * t);
                                    var d = "red" === O,
                                        p = d ? An[Ie] : Pn[Ie];
                                    if (void 0 === p || 2 == p) return (d ? An : Pn)[Ie] = 2, void(2 != p && Rn(d, Ie));
                                    s.drawImage(p, -p.width / 2, -p.height / 2), s.restore(), s.fillStyle = "yellow", s.textAlign = "left", s.font = "24px Nasa", nr(mEng[17], Et + 64, St + 256 + 64 + 16), s.fillStyle = "white", s.font = "11px Nasa", s.drawImage(200 == Ae ? In.gbutton : In.button, Et + 64, St + 416 - 64), s.drawImage(201 == Ae ? In.gbutton : In.button, Et + 192, St + 416 - 64), s.drawImage(202 == Ae ? In.gbutton : In.button, Et + 64, St + 416), s.drawImage(203 == Ae ? In.gbutton : In.button, Et + 192, St + 416), s.drawImage(204 == Ae ? In.gbutton : In.button, Et + 320, St + 416 - 64), s.drawImage(205 == Ae ? In.gbutton : In.button, Et + 320, St + 416), s.textAlign = "center", nr(mEng[20] + Le + mEng[163], Et + 64 + 54, St + 416 - 64 + 16), nr(mEng[21] + Fe + mEng[163], Et + 192 + 54, St + 416 - 64 + 16), nr(mEng[22] + ze + mEng[163], Et + 64 + 54, St + 416 + 16), nr(mEng[23] + Ue + mEng[163], Et + 192 + 54, St + 416 + 16), nr("Energy: " + je + mEng[163], Et + 320 + 54, St + 416 - 64 + 16), nr("Agility: " + Be + mEng[163], Et + 320 + 54, St + 416 + 16), nr("$" + 1e3 * Math.round(Math.pow(1024, Le) / 1e3), Et + 64 + 54, St + 416 - 64 + 32), nr("$" + 1e3 * Math.round(Math.pow(1024, Fe) / 1e3), Et + 192 + 54, St + 416 - 64 + 32), nr("$" + 1e3 * Math.round(Math.pow(1024, ze) / 1e3), Et + 64 + 54, St + 416 + 32), nr("$" + 1e3 * Math.round(Math.pow(1024, Ue) / 1e3), Et + 192 + 54, St + 416 + 32), nr("$" + 1e3 * Math.round(Math.pow(4096, je) / 1e3), Et + 320 + 54, St + 416 - 64 + 32), nr("$" + 1e3 * Math.round(Math.pow(1024, Be) / 1e3), Et + 320 + 54, St + 416 + 32)
                                }();
                                break;
                            case 4:
                                ! function() {
                                    s.save(), s.fillStyle = "yellow", s.font = "11px Nasa", s.textAlign = "center";
                                    for (var e = 0; e < Ln.length; e++) s.fillStyle = e < 13 ? Ln[e] ? "red" : "pink" : e < 25 ? Ln[e] ? "gold" : "lime" : e < 37 ? Ln[e] ? "lightgray" : "white" : Ln[e] ? "cyan" : "yellow", Ln[e] && (s.font = "9px Nasa", nr(jsn.achNames[e].split(":")[1], Et + 768 * (1 + e % 5 * 2) / 10, St + 20 + 40 * Math.floor(e / 5) + 60)), s.font = "12px Nasa", nr(Ln[e] ? jsn.achNames[e].split(":")[0] : mEng[172], Et + 768 * (1 + e % 5 * 2) / 10, St + 8 + 40 * Math.floor(e / 5) + 60);
                                    s.restore()
                                }();
                                break;
                            case 5:
                                ! function() {
                                    s.textAlign = "center", s.font = "26px Nasa";
                                    for (var e = [mEng[62], mEng[63], mEng[64], mEng[65], mEng[66], mEng[67], mEng[68]], t = 0; t < 3; t++)
                                        for (var n = 0; n < 2; n++) {
                                            s.fillStyle = Ae == 500 + t + 4 * n ? "lime" : "yellow", nr(e[t + 4 * n], Et + 128 + 256 * t, St + 40 + 472 * n * 2 / 3 + 472 / 6)
                                        }
                                    s.fillStyle = 503 == Ae ? "lime" : "yellow", nr(e[3], Et + 384, St + 40 + 472 / 3 + 472 / 6), s.textAlign = "left", s.font = "11px Nasa"
                                }();
                                break;
                            case 7:
                                ! function() {
                                    s.font = "11px Nasa", s.textAlign = "right", s.fillStyle = "yellow", nr(mEng[5] + Math.floor(ne), Et + 768 - 16, St + 64), s.textAlign = "center", s.font = "24px Nasa", nr(mEng[15], Et + 384, St + 68), s.textAlign = "left", s.font = "11px Nasa";
                                    for (var e = 0; e < cn.length; e++) {
                                        var t = Et + 4 + 240 * Math.floor(cn[e].order / Math.ceil(cn.length / 3)),
                                            n = St + 40 + 32 + 16 * (cn[e].order % Math.ceil(cn.length / 3) + 2),
                                            r = cn[e].price > ne ? "orange" : "yellow";
                                        Ie < cn[e].level && (r = "red");
                                        var a = "white";
                                        "Gun" === cn[e].type && (a = "red"), "Missile" === cn[e].type && (a = "orange"), "Orb" === cn[e].type && (a = "tan"), "Beam" === cn[e].type && (a = "lime"), "Blast" === cn[e].type && (a = "green"), "Mine" === cn[e].type && (a = "blue"), "Misc" === cn[e].type && (a = "purple"), s.fillStyle = a, nr("*", t, n), s.fillStyle = Ae - 20 == e ? "lime" : r, nr(mEng[69] + ("$" + cn[e].price + "         ").substring(0, 9) + cn[e].name, t + 11, n), Ae - 20 == e && Wn(e)
                                    }
                                }();
                                break;
                            case 8:
                                s.fillStyle = "cyan", s.textAlign = "center", s.font = "16px Nasa", nr(mEng[32] + cn[yn[ce]].name + mEng[33] + .75 * cn[yn[ce]].price + mEng[34], Et + 384, St + 128), s.font = "13px Nasa", nr(mEng[35], Et + 384, St + 192), s.font = "11px Nasa", s.textAlign = "left"
                        }
                        tt-- > 0 && !Ut && (s.save(), s.textAlign = "center", s.fillStyle = "yellow", s.strokeStyle = "black", s.font = "64px Nasa", s.globalAlpha = Math.sqrt(tt / 41), s.fillText(mEng[126], xt / 2, kt / 2), s.strokeText(mEng[126], xt / 2, kt / 2), s.restore()); - 1 == se && Ar();
                        C && Mr();
                        0 != self.quests && _r();
                        0 != yt && Tr();
                        Nr(), Dr(), Pr(), Or()
                    }()), !le && (0 != Mt || ot)) {
                    if (Qe > 0 || $e >= 35) return br($e), $e = 34, void setTimeout(Bn, 5);
                    en > 0 && (k = E = 0, Oe = (1e4 - lr(100 - en)) / 1e3), Ke++, Qe++;
                    var e = new Date,
                        t = e.getTime();
                    s.font = "11px Nasa";
                    var n = -performance.now();
                    u.width = u.width, Er();
                    var r = Math.floor(25 * Math.random()),
                        a = !1;
                    Oe > 0 && (! function(e) {
                        var t = Oe / 16;
                        s.fillStyle = "red", s.globalAlpha = .75 * t, s.fillRect(0, 0, xt, kt), s.globalAlpha = 1, s.translate(t * (e % 5 - 2), t * (e / 5 - 2))
                    }(r), a = !0), (X + J + Z + Y) / (fn[Ie].capacity * ze) > .995 && (at = mEng[1]);
                    var o = -performance.now();
                    n -= o, wr();
                    var l = -performance.now();
                    o -= l,
                        function() {
                            if (0 == gt) return;
                            var e = gt,
                                t = e.x - I + xt / 2 + k,
                                n = e.y - N + kt / 2 + E,
                                r = new Date,
                                a = (r.getTime(), r.getTime() / 15e4),
                                o = (oe + ie * S) % 5,
                                i = Cn[o];
                            if (void 0 === i || 2 == i) return Cn[o] = 2, void(2 == i || isNaN(o) || function(e) {
                                Cn[e] = new Image;
                                var t = e + 1;
                                Cn[e].src = "/img/space/planets/pt" + t + ".png"
                            }(o));
                            var l = (or(5 * a) / 2 + .5) * (i.width - 512) + 256,
                                u = (ir(4 * a) / 2 + .5) * (i.height - 512) + 256;
                            s.save();
                            var c = s.createPattern(i, "no-repeat");
                            s.fillStyle = c, s.translate(t, n), s.drawImage("blue" == e.color ? In.planetUB : "red" == e.color ? In.planetUR : In.planetU, -310, -310, 620, 620), s.translate(-l, -u), s.beginPath(), s.arc(l, u, 256, 0, 2 * Math.PI), s.closePath(), s.fill(), s.translate(l, u), s.drawImage(In.planetO, -256, -256), s.setLineDash([20, 15]), s.lineWidth = 3, s.strokeStyle = "pink", s.beginPath(), s.lineWidth = 1, s.restore(), s.textAlign = "center", s.fillStyle = e.color, "red" == s.fillStyle ? s.fillStyle : "blue" == s.fillStyle && s.fillStyle;
                            s.font = "60px Nasa";
                            var f = (e.record / 25 + .0078125 + "").replace(".", ":");
                            f = f.substr(0, f.length - 5), nr(mEng[127] + e.name, t, n - 128 - 256), s.textAlign = "left", s.font = "11px Nasa"
                        }(),
                        function() {
                            if (void 0 !== Tt) {
                                var e = "red" == Tt.color ? In.base : In.bss,
                                    t = e.width,
                                    n = e.height,
                                    r = Tt.x - I + xt / 2 + k,
                                    a = Tt.y - N + kt / 2 + E;
                                if (Tt.color !== O && (at = mEng[131]), Tt.isBase ? (s.save(), s.translate(r, a), s.rotate(w / 1e3 + Math.PI / 2), s.drawImage("red" == Tt.color ? In.astUnderlayRed : In.astUnderlay, -512, -512, 1024, 1024), s.drawImage(e, -384, -384, 768, 768), s.restore(), s.textAlign = "center", s.fillStyle = "lime", re < 64 && Tt.color == O && lr(I - Tt.x) + lr(N - Tt.y) < lr(512) && (s.font = 2.5 * or(w / 8) + 15 + "px Nasa", nr(mEng[130], r, a - 96), s.font = "11px Nasa"), s.textAlign = "left") : (s.textAlign = "center", s.fillStyle = "white", s.font = "11px Nasa", nr(Tt.name, r, a - 64)), Tt.turretLive) {
                                    var o = "red" == Tt.color ? In.turret : In.bt;
                                    if (t = o.width, n = o.height, s.save(), s.translate(r, a), s.rotate(Tt.angle + Math.PI / 2), s.drawImage(o, -t / 2, -n / 2), s.restore(), Tt.health / Tt.maxHealth < 1) {
                                        s.lineWidth = 4;
                                        var i = Math.floor(255 * (1 - Tt.health / Tt.maxHealth)),
                                            l = Math.floor(255 * Tt.health / Tt.maxHealth),
                                            u = Math.floor(64 * Tt.health / Tt.maxHealth);
                                        s.strokeStyle = "rgb(" + i + ", " + l + ", " + u + ")", s.beginPath(), s.arc(r, a, t / 1.5, (2.5 - .99 * Tt.health / Tt.maxHealth) * Math.PI, (.501 + Tt.health / Tt.maxHealth) * Math.PI, !1), s.stroke()
                                    }
                                }! function(e) {
                                    var t = 0;
                                    if (void 0 !== An[Ie]) t = An[Ie].width;
                                    else {
                                        if (void 0 === Pn[Ie]) return;
                                        t = Pn[Ie].width
                                    }
                                    s.fillStyle = "lightgray";
                                    var n = Math.sqrt((e.x - I) * (e.x - I) + (e.y - N) * (e.y - N));
                                    if ((n = Math.floor(n / 10)) < kt / 30) return;
                                    var r = Math.atan2(e.y - N, e.x - I),
                                        a = xt / 2 + 1 * t * ir(r) + k,
                                        o = kt / 2 + 1 * t * or(r) + E,
                                        i = xt / 2 + 1.3 * t * ir(r) + k,
                                        l = kt / 2 + 1.3 * t * or(r) + E,
                                        u = In.blueArrow,
                                        c = u.width / 2;
                                    s.save(), s.translate(a, o), s.rotate(r), s.drawImage(u, -c, -c), s.restore(), s.textAlign = "center", nr(n, i, l + 6), s.textAlign = "left"
                                }(Tt)
                            }
                        }();
                    var c = -performance.now();
                    l -= c,
                        function() {
                            var e = 0;
                            for (var t in Dt) {
                                var n = 0 == (t = Dt[t]).metal ? In.iron : 3 == t.metal ? In.platinum : 1 == t.metal ? In.silver : In.aluminium,
                                    r = t.x - I + xt / 2 + k,
                                    a = t.y - N + kt / 2 + E,
                                    o = new Date,
                                    i = (.5 + t.health / t.maxHealth) / 1.5,
                                    l = Math.floor((o.getMilliseconds() / 1e3 + o.getSeconds()) / 60 * 1024) % 64,
                                    u = l % 8 * 128,
                                    c = 128 * Math.floor(l / 8 % 4 + Math.floor(t.metal) % 2 * 4);
                                s.save(), s.translate(r, a), s.drawImage(In.astUnderlay, -128, -128), s.rotate(t.angle + Math.PI / 2), s.drawImage(n, u, c, 128, 128, -64 * i, -64 * i, 128 * i, 128 * i), s.restore(), t.color != O && (0 == e ? e = t : (t.x - I) * (t.x - I) + (t.y - N) * (t.y - N) < (e.x - I) * (e.x - I) + (e.y - N) * (e.y - N) && (e = t))
                            }! function(e) {
                                var t = 0;
                                if (void 0 !== An[Ie]) t = An[Ie].width;
                                else {
                                    if (void 0 === Pn[Ie]) return;
                                    t = Pn[Ie].width
                                }
                                s.fillStyle = "orange", s.textAlign = "center";
                                var n = Math.sqrt((e.x - I) * (e.x - I) + (e.y - N) * (e.y - N));
                                if ((n = Math.floor(n / 10)) < kt / 30 || n > 500 * Fe) return;
                                var r = Math.atan2(e.y - N, e.x - I),
                                    a = xt / 2 + 1 * t * ir(r) + k,
                                    o = kt / 2 + 1 * t * or(r) + E,
                                    i = xt / 2 + 1.3 * t * ir(r) + k,
                                    l = kt / 2 + 1.3 * t * or(r) + E,
                                    u = In.astArrow,
                                    c = u.width / 2;
                                s.save(), s.translate(a, o), s.rotate(r), s.drawImage(u, -c, -c), s.restore(), s.textAlign = "center", nr(n, i, l + 6), s.textAlign = "left"
                            }(e)
                        }(),
                        function() {
                            for (var e in Rt) {
                                var t = 0 == (e = Rt[e]).type ? In.pack : 1 == e.type ? In.bonus : 2 == e.type ? In.life : In.ammo,
                                    n = e.x - I + xt / 2 + k,
                                    r = e.y - N + kt / 2 + E,
                                    a = new Date,
                                    o = (a.getMilliseconds() / 1e3 + a.getSeconds()) / 3;
                                s.save(), s.translate(n, r), s.scale(2, 2), s.rotate(o * Math.PI), s.drawImage(t, -t.width / 2, -t.height / 2), s.restore()
                            }
                        }();
                    var f = -performance.now();
                    c -= f,
                        function() {
                            for (var e in pt) {
                                var t = pt[e];
                                s.globalAlpha = (7 - t.time) / 7, s.strokeStyle = s.fillStyle = "#" + t.color, t.vip ? yr(t.x - I + xt / 2 + k, t.y - N + E + kt / 2, 5, 3, 8) : s.fillRect(t.x - 1 - I + xt / 2 + k, t.y - 1 - N + E + kt / 2, 3, 3)
                            }
                            s.globalAlpha = 1
                        }(),
                        function() {
                            K = Q = 0;
                            var e = 0,
                                t = 0;
                            for (var n in Mt) {
                                "red" == (n = Mt[n]).color ? K++ : Q++, s.strokeStyle = "grey";
                                var r = "red" === n.color,
                                    a = (r ? An : Pn)[n.ship];
                                if (void 0 === a || 2 == a) return (r ? An : Pn)[n.ship] = 2, void(2 != a && Rn(r, n.ship));
                                var o = a.width,
                                    i = a.height;
                                if (0 == o || 0 == i) return;
                                var l = n.x - I + xt / 2 + k,
                                    u = n.y - N + kt / 2 + E;
                                s.save(), s.translate(l, u), s.globalAlpha = .8, s.drawImage("red" == n.color ? In.astUnderlayRed : In.astUnderlay, -o, -i, 2 * o, 2 * i), s.globalAlpha = 1, s.rotate(n.angle + Math.PI / 2);
                                var c = 38.4 * Math.sqrt(o / 64),
                                    f = 1.4 * n.speed * o / 64 + Math.random() * o / 25;
                                if (n.speed > 0 && s.drawImage(In.fire, 0, w % 8 * 64, 64, 64, -c / 2, 0, c, f), s.restore(), s.save(), s.translate(l, u), s.rotate(n.angle + Math.PI / 2), s.drawImage(a, -o / 2, -i / 2), s.restore(), s.fillStyle = "white", s.textAlign = "center", nr(n.name, l, u - .5 * fn[n.ship].width), s.textAlign = "left", n.color !== O ? 0 == e ? e = n : (n.x - I) * (n.x - I) + (n.y - N) * (n.y - N) < (e.x - I) * (e.x - I) + (e.y - N) * (e.y - N) && (e = n) : lr(n.x - I) + lr(n.y - N) > 1600 || Ie != n.ship ? 0 == t ? t = n : (n.x - I) * (n.x - I) + (n.y - N) * (n.y - N) < (t.x - I) * (t.x - I) + (t.y - N) * (t.y - N) && (t = n) : n.health < .3 * n.maxHealth && (at = mEng[150]), n.hasPackage && Lr(n), s.lineWidth = 6, n.shield && (s.strokeStyle = "lightblue", s.beginPath(), s.arc(l, u, o / 1.5 - 8, 0, 2 * Math.PI, !1), s.stroke()), !(n.health / n.maxHealth >= 1)) {
                                    s.lineWidth = 4;
                                    var d = Math.floor(255 * (1 - n.health / n.maxHealth)),
                                        p = Math.floor(255 * n.health / n.maxHealth),
                                        h = Math.floor(64 * n.health / n.maxHealth);
                                    s.strokeStyle = "rgb(" + d + ", " + p + ", " + h + ")", s.beginPath(), s.arc(l, u, o / 1.5, (2.5 - n.health / n.maxHealth * .99) * Math.PI, (.501 + n.health / n.maxHealth) * Math.PI, !1), s.stroke()
                                }
                            }
                            0 != e && function(e) {
                                var t = 0;
                                if (void 0 !== An[Ie]) t = An[Ie].width;
                                else {
                                    if (void 0 === Pn[Ie]) return;
                                    t = Pn[Ie].width
                                }
                                s.fillStyle = "red" === O ? "cyan" : "red";
                                var n = Math.sqrt((e.x - I) * (e.x - I) + (e.y - N) * (e.y - N));
                                if ((n = Math.floor(n / 10)) < kt / 30 || n > 500 * Fe) return;
                                var r = Math.atan2(e.y - N, e.x - I),
                                    a = xt / 2 + 1 * t * ir(r) + k,
                                    o = kt / 2 + 1 * t * or(r) + E,
                                    i = xt / 2 + 1.3 * t * ir(r) + k,
                                    l = kt / 2 + 1.3 * t * or(r) + E,
                                    u = "red" === O ? In.baseArrow : In.redArrow,
                                    c = u.width / 2;
                                s.save(), s.translate(a, o), s.rotate(r), s.drawImage(u, -c, -c), s.restore(), s.textAlign = "center", nr(n, i, l + 6), s.textAlign = "left"
                            }(e);
                            0 != t && function(e) {
                                var t = 0;
                                if (void 0 !== An[Ie]) t = An[Ie].width;
                                else {
                                    if (void 0 === Pn[Ie]) return;
                                    t = Pn[Ie].width
                                }
                                s.fillStyle = "red" !== O ? "cyan" : "red";
                                var n = Math.sqrt((e.x - I) * (e.x - I) + (e.y - N) * (e.y - N));
                                if ((n = Math.floor(n / 10)) < kt / 30 || n > 500 * Fe) return;
                                var r = Math.atan2(e.y - N, e.x - I),
                                    a = xt / 2 + 1 * t * ir(r) + k,
                                    o = kt / 2 + 1 * t * or(r) + E,
                                    i = xt / 2 + 1.3 * t * ir(r) + k,
                                    l = kt / 2 + 1.3 * t * or(r) + E,
                                    u = "red" !== O ? In.baseArrow : In.redArrow,
                                    c = u.width / 2;
                                s.save(), s.translate(a, o), s.rotate(r), s.drawImage(u, -c, -c), s.restore(), s.textAlign = "center", nr(n, i, l + 6), s.textAlign = "left"
                            }(t)
                        }(), ot && function() {
                            s.strokeStyle = "grey";
                            var e = "red" === O,
                                t = e ? An[Ie] : Pn[Ie];
                            if (void 0 === t || 2 == t) return (e ? An : Pn)[Ie] = 2, void(2 != t && Rn(e, Ie));
                            var n = t.width,
                                r = t.height,
                                a = I - I + xt / 2 + k,
                                o = N - N + kt / 2 + E;
                            s.save(), s.translate(a, o), s.rotate(D + Math.PI / 2), s.globalAlpha = .25, s.drawImage(t, -n / 2, -r / 2), s.restore(), s.lineWidth = 6, Te && (s.strokeStyle = "lightblue", s.beginPath(), s.arc(a, o, n / 1.5 - 8, 0, 2 * Math.PI, !1), s.stroke());
                            var i = fn[Ie].health * Ue;
                            L < .3 * i && (at = mEng[150]);
                            if (L / i >= 1) return;
                            s.lineWidth = 4;
                            var l = Math.floor(255 * (1 - L / i)),
                                u = Math.floor(255 * L / i),
                                c = Math.floor(64 * L / i);
                            s.strokeStyle = "rgb(" + l + ", " + u + ", " + c + ")", s.beginPath(), s.arc(a, o, n / 1.5, (2.5 - L / i * .99) * Math.PI, (.501 + L / i) * Math.PI, !1), s.stroke()
                        }();
                    var d = -performance.now();
                    f -= d, Rr(),
                        function() {
                            for (var e in s.lineWidth = 6, Nt) {
                                var t = Nt[e];
                                7 == t.wepnID ? s.strokeStyle = "mediumpurple" : 9 == t.wepnID ? s.strokeStyle = "lime" : 24 == t.wepnID ? s.strokeStyle = "yellow" : 33 == t.wepnID || 26 == t.wepnID || 30 == t.wepnID ? s.strokeStyle = "#d0c090" : s.strokeStyle = "red";
                                var n = t.bx - I + xt / 2 + k,
                                    r = t.by - N + kt / 2 + E,
                                    a = t.ex - I + xt / 2 + k,
                                    o = t.ey - N + kt / 2 + E;
                                s.beginPath(), s.moveTo(n, r), s.lineTo(a, o), s.globalAlpha = Math.random() * (12 - t.time) / 14, s.stroke(), s.closePath()
                            }
                            s.globalAlpha = 1
                        }(),
                        function() {
                            for (var e in s.lineWidth = 12, s.strokeStyle = "white", Ot) {
                                var t = Ot[e],
                                    n = t.bx - I + xt / 2 + k,
                                    r = t.by - N + kt / 2 + E,
                                    a = t.bx + 1e4 * Math.cos(t.angle) - I + xt / 2 + k,
                                    o = t.by + 1e4 * Math.sin(t.angle) - N + kt / 2 + E;
                                s.beginPath(), s.moveTo(n, r), s.lineTo(a, o), s.globalAlpha = Math.random() * (12 - t.time) / 14, s.stroke(), s.closePath()
                            }
                            s.globalAlpha = 1
                        }(),
                        function() {
                            for (var e in Ct) {
                                e = Ct[e];
                                var t = In.missile;
                                11 != e.wepnID && 13 != e.weaponID || (t = In.heavyMissile), 12 == e.wepnID && (t = In.empMissile), 14 == e.wepnID && (t = In.torpedo);
                                var n = t.width,
                                    r = t.height,
                                    a = e.x - I + xt / 2 + k,
                                    o = e.y - N + kt / 2 + E;
                                s.save(), s.translate(a, o), s.rotate(e.angle + Math.PI / 2), s.drawImage(t, -n / 2, -r / 2), s.restore()
                            }
                        }(),
                        function() {
                            for (var e in Pt) {
                                var t = Pt[e],
                                    n = In.energyDisk,
                                    r = n.width,
                                    a = n.height,
                                    o = t.x - I + xt / 2 + k,
                                    i = t.y - N + kt / 2 + E;
                                s.save(), s.translate(o, i), s.rotate(w / 10 + Math.PI / 2), s.drawImage(n, -r / 2, -a / 2), s.restore()
                            }
                        }(),
                        function() {
                            for (var e in At) {
                                e = At[e];
                                var t = In.mine,
                                    n = t.width,
                                    r = t.height,
                                    a = e.x - I + xt / 2 + k,
                                    o = e.y - N + kt / 2 + E;
                                if (16 == e.wepnID) t = In.laserMine;
                                else if (17 == e.wepnID) t = In.empMine;
                                else {
                                    if (32 == e.wepnID) {
                                        s.save(), s.globalAlpha = .1, s.fillStyle = "white";
                                        for (var i = 0; i < 10; i++) {
                                            var l = Math.random() * Math.PI * 2,
                                                u = 4 + lr(25 * Math.random() / 10),
                                                c = Math.random() * u;
                                            s.beginPath(), s.arc(a + Math.cos(l) * c, o + Math.sin(l) * c, u, 0, 2 * Math.PI, !1), s.closePath(), s.fill()
                                        }
                                        s.restore();
                                        continue
                                    }
                                    33 == e.wepnID && (t = In.grenade)
                                }
                                s.save(), s.translate(a, o), s.rotate(e.angle), s.drawImage(t, -n / 2, -r / 2), s.restore(), s.fillStyle = "red" == e.color ? "red" : "#00FFFF", s.beginPath(), s.arc(a, o, 4, 0, 2 * Math.PI, !1), s.fill()
                            }
                        }(),
                        function() {
                            var e = (new Date).getTime() / 1e3;
                            for (var t in It) {
                                s.save();
                                var n = (t = It[t]).isWorm ? In.worm : In.vort,
                                    r = 24 * t.size / 64,
                                    a = t.x - I + xt / 2 + k,
                                    o = t.y - N + kt / 2 + E;
                                s.translate(a, o), s.rotate(e % (2 * Math.PI)), s.drawImage(n, -r / 2, -r / 2, r, r), s.globalAlpha = .3, s.rotate(-.5 * e % (2 * Math.PI)), s.drawImage(n, 3 * -r / 4, 3 * -r / 4, 1.5 * r, 1.5 * r), s.restore(), at = t.isWorm ? mEng[128] : mEng[129]
                            }
                        }(), vr();
                    var p = -performance.now();
                    d -= p,
                        function() {
                            s.textAlign = "center", s.font = "14px Nasa", s.strokeStyle = s.fillStyle = "yellow", s.lineWidth = 2, s.setLineDash([20, 15]);
                            for (var e = (xt / 2 - I) % v; e < xt; e += v) s.beginPath(), s.moveTo(e + k, 0), s.lineTo(e + k, kt), s.stroke(), s.save(), s.translate(e, kt / 2), s.rotate(Math.PI / 2), s.fillText(mEng[103], 0, 0), s.restore();
                            for (e = (kt / 2 - N) % v; e < kt; e += v) s.beginPath(), s.moveTo(0, e + E), s.lineTo(xt, e + E), s.stroke(), nr(mEng[103], xt / 2, e);
                            s.font = "11px Nasa", s.textAlign = "left", s.setLineDash([])
                        }(),
                        function() {
                            var e = 0;
                            if (void 0 !== An[Ie]) e = An[Ie].width;
                            else {
                                if (void 0 === Pn[Ie]) return;
                                e = Pn[Ie].width
                            }
                            s.fillStyle = "yellow";
                            var t = 0;
                            t = I < N ? v - I > N ? 2 : 3 : v - I > N ? 1 : 0;
                            var n = "";
                            0 == t ? n = v - I : 1 == t ? n = N : 2 == t ? n = I : 3 == t && (n = v - N);
                            if ((n = Math.floor(n / 10)) < kt / 30 || n > 500 * Fe) return;
                            var r = xt / 2 + 1 * e * ir(t * Math.PI / 2) + k,
                                a = kt / 2 - 1 * e * or(t * Math.PI / 2) + E,
                                o = xt / 2 + 1.3 * e * ir(t * Math.PI / 2) + k,
                                i = kt / 2 - 1.3 * e * or(t * Math.PI / 2) + E,
                                l = In.edgeArrow,
                                u = l.width / 2;
                            s.save(), s.translate(r, a), s.rotate(-t * Math.PI / 2), s.drawImage(l, -u, -u), s.restore(), s.textAlign = "center", nr(n, o, i + 6), s.textAlign = "left"
                        }(),
                        function() {
                            for (var e in s.textAlign = "center", s.fillStyle = "pink", ht) {
                                var t = ht[e];
                                s.font = (t.strong ? 40 : 20) + "px Nasa", s.globalAlpha = (39 - t.time) / 39;
                                var n = t.spoils ? t.x : t.x - I + xt / 2 + k + (t.local ? I : 0),
                                    r = t.spoils ? t.y : t.y - N + kt / 2 - t.time + E + (t.local ? N : 0);
                                nr(t.msg, n, r)
                            }
                            s.globalAlpha = 1, s.textAlign = "left", s.font = "11px Nasa"
                        }(),
                        function() {
                            if (Gt < 0 || $t < 1) return;
                            var e = "" + Math.round(Gt / 25);
                            for (; e.length < 2;) e = "0" + e;
                            e = "0:" + e;
                            var t = mEng[163] + $t;
                            s.save(), s.globalAlpha = Math.min(1, 1 - (Gt - 730) / 15);
                            var n = 1 + Math.max(0, Math.cbrt(Gt - 730)) / 2;
                            s.textAlign = "center", s.font = 30 * n + "px Nasa", nr(t, xt / 2, 64), s.font = 20 * n + "px Nasa", nr(e, xt / 2, 88), s.restore()
                        }(),
                        function() {
                            if (oe != Math.floor(S / 2) || ie != Math.floor(S / 2)) return;
                            if (void 0 === An[Ie] && void 0 === Pn[Ie]) return;
                            var e = void 0 === An[Ie] ? Pn[Ie].width : An[Ie].width,
                                t = I - v / 2,
                                n = N - v / 2,
                                r = Math.atan2(n, t) + Math.PI,
                                a = xt / 2 + 1.25 * e * ir(r) + k,
                                o = kt / 2 + 1.25 * e * or(r) + E,
                                i = In.BHArrow,
                                l = i.width / 2;
                            s.save(), s.translate(a, o);
                            var u = new Date;
                            s.drawImage(In.Exclamation, 0, (7 & Math.floor(u.getMilliseconds() / 50 + 4)) * l * 2, 2 * l, 2 * l, l, l, 2 * l, 2 * l), s.rotate(r), s.drawImage(i, 0, (7 & Math.floor(u.getMilliseconds() / 50)) * l * 2, 2 * l, 2 * l, -l, -l, 2 * l, 2 * l), s.restore()
                        }(), 0 != self.quests && _r(), Nr(),
                        function() {
                            if (0 === yn) return;
                            if (-2 == yn[1]) return;
                            s.save(), s.globalAlpha = .5, s.fillStyle = "black", s.strokeStyle = "cyan", Cr(xt - 208, kt - 432 + 128, 210, 192, {
                                bl: 32,
                                tl: 32
                            }, !0, !1), s.restore(), s.font = "11px Nasa", s.fillStyle = "yellow", s.textAlign = "right", s.globalAlpha = Math.max(gn--, 0) / 100 * .7 + .3, nr(mEng[152], xt - 80, kt - 432 + 144), nr(mEng[151], xt - 16, kt - 432 + 144);
                            for (var e = 0; e < 10; e++) s.fillStyle = mn == e ? "lime" : "yellow", e >= fn[Ie].weapons && (s.fillStyle = "orange"), Ie < cn[yn[e]].Level && (s.fillStyle = "red"), void 0 !== cn[yn[e]] && nr(cn[yn[e]].name + ": " + (e + 1) % 10, xt - 80, kt - 432 + 16 * (e + 10)), yn[e] > -1 && nr(Hn(bn[e]), xt - 16, kt - 432 + 16 * (e + 10));
                            s.globalAlpha = 1, s.fillStyle = "yellow", Qt = Qt < 1 ? 0 : Qt - 1, s.font = 16 + Qt + "px Nasa", nr(mEng[2], xt - 16, kt - 96), s.font = "11px Nasa", s.textAlign = "left"
                        }(),
                        function() {
                            Ne > 0 && (s.font = "24px Nasa", s.textAlign = "center", s.fillStyle = "orange", nr(mEng[96] + Math.round(Ne / 25) + mEng[75] + mEng[97], xt / 2, 256), s.font = "11px Nasa", s.textAlign = "left", at = mEng[98]);
                            De > 0 && (s.font = "24px Nasa", s.textAlign = "center", s.fillStyle = "orange", nr(mEng[99] + Math.round(De / 25) + mEng[75] + mEng[97], xt / 2, 256), s.font = "11px Nasa", s.textAlign = "left", at = mEng[100]);
                            !C && Re < 2250 && (s.font = "24px Nasa", s.textAlign = "center", s.fillStyle = "orange", nr(mEng[102] + Math.round(Re / 25) + mEng[75] + mEng[97], xt / 2, 256), s.font = "11px Nasa", s.textAlign = "left", at = mEng[101])
                        }();
                    var h = -performance.now();
                    p -= h, kr();
                    var m = -performance.now();
                    h -= m, Sr();
                    var g = -performance.now();
                    m -= g,
                        function() {
                            if (Fe < 1.1) return;
                            s.fillStyle = "white", s.drawImage(In.grid, 16, 246);
                            var e = new Date,
                                t = e.getTime() / 560;
                            s.globalAlpha = .5, s.save(), s.translate(112, 342), s.rotate(t % (2 * Math.PI) + Math.PI / 2), s.drawImage(In.spin, -96, -96), s.restore(), s.globalAlpha = s.lineWidth = 1;
                            var n = 5120 * (1 + 1.5 * (Fe - 1));
                            if (void 0 !== Tt) {
                                var r = Tt.x - I,
                                    a = Tt.y - N;
                                if (lr(r) + lr(a) < lr(n)) {
                                    var o = Math.atan2(a, r) + 2 * Math.PI,
                                        i = r / n * 96 + 96 + 16,
                                        l = a / n * 96 + 96 + 214 + 32;
                                    s.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), s.beginPath(), s.arc(i, l, Fe > 1.3 ? 5 : 3, 0, 2 * Math.PI, !1), s.fillStyle = "lightgray", Fe > 1.3 && (s.fillStyle = "red" === Tt.color ? "pink" : "cyan"), s.fill()
                                }
                            }
                            e.getTime();
                            for (var u in Mt) {
                                r = (c = Mt[u]).x - I, a = c.y - N;
                                if (!(lr(r) + lr(a) > lr(n))) {
                                    o = Math.atan2(a, r) + 2 * Math.PI, i = r / n * 96 + 16 + 96, l = a / n * 96 + 96 + 214 + 32;
                                    s.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), s.beginPath(), s.arc(i, l, 3, 0, 2 * Math.PI, !1), Fe > 1.3 && (s.fillStyle = "red" === c.color ? "pink" : "cyan"), s.fill()
                                }
                            }
                            if (Fe > 2.5)
                                for (var u in Mt) {
                                    var c;
                                    r = (c = Mt[u]).x - I, a = c.y - N;
                                    if (!(lr(r) + lr(a) > lr(n))) {
                                        o = Math.atan2(a, r) + 2 * Math.PI, i = r / n * 96 + 16 + 96, l = a / n * 96 + 96 + 214 + 32;
                                        s.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), s.beginPath(), s.arc(i, l, 2, 0, 2 * Math.PI, !1), s.fillStyle = "gold", s.fill()
                                    }
                                }
                            for (var f in s.lineWidth = 2, Dt) {
                                r = (f = Dt[f]).x - I, a = f.y - N;
                                if (!(lr(r) + lr(a) > lr(n))) {
                                    o = Math.atan2(a, r) + 2 * Math.PI, i = r / n * 96 + 16 + 96, l = a / n * 96 + 96 + 214 + 32;
                                    s.globalAlpha = (o - t + 2e9 * Math.PI) % (2 * Math.PI) / (2 * Math.PI), s.beginPath(), s.arc(i, l, 3, 0, 2 * Math.PI, !1), Fe > 1.3 && (s.strokeStyle = s.fillStyle = "orange"), Fe > 1.7 && (0 == f.metal ? s.strokeStyle = s.fillStyle = "#d44" : 1 == f.metal ? s.strokeStyle = s.fillStyle = "#eef" : 2 == f.metal ? s.strokeStyle = s.fillStyle = "#9a9" : 3 == f.metal && (s.strokeStyle = s.fillStyle = "#90f")), Fe > 1.5 ? s.stroke() : s.fill()
                                }
                            }
                            s.globalAlpha = 1, s.lineWidth = 3
                        }();
                    var y = -performance.now();
                    g -= y, 0 != yt && Tr(),
                        function() {
                            if (Ut) return;
                            var e = 256 * (re - ur(ae - 1)) / (ur(ae) - ur(ae - 1));
                            e < 0 && (e = 0);
                            s.drawImage(In.bar1, xt / 2 - 128, kt - 28), s.fillStyle = "#000000", s.fillRect(xt / 2 - 126 + e, kt - 22, 248 - e, 10), s.drawImage(In.bar2, xt / 2 - 128, kt - 28), s.fillStyle = "#ffffff", s.textAlign = "right", nr("" + Math.max(ur(ae - 1), 0), xt / 2 - 140, kt - 14), s.textAlign = "left", nr("" + ur(ae), xt / 2 + 140, kt - 14), s.font = "9px Nasa", s.textAlign = e > 128 ? "right" : "left", s.fillStyle = e > 128 ? "black" : "white", nr("" + Math.round(re), xt / 2 - 128 + e + (e > 128 ? -8 : 8), kt - 14), s.font = "11px Nasa", s.textAlign = "left"
                        }(),
                        function() {
                            if (de <= 0) return;
                            s.save(), s.globalAlpha = de, de -= .01, s.fillStyle = "#ffffff", s.fillRect(xt - 32 - 20 - 128, kt - 10 - 16 - 6, 128, 6), s.beginPath(), s.arc(xt - 32 - 20 - 128, kt - 10 - 16 - 3, 3, 0, 2 * Math.PI, !1), s.fill(), s.beginPath(), s.arc(xt - 32 - 20, kt - 10 - 16 - 3, 3, 0, 2 * Math.PI, !1), s.fill(), s.beginPath(), s.arc(xt - 32 - 20 - 128 + 128 * pe, kt - 10 - 16 - 3, 6, 0, 2 * Math.PI, !1), s.fill(), s.fillStyle = "#000000", s.beginPath(), s.arc(xt - 32 - 20 - 128 + 128 * pe, kt - 10 - 16 - 3, 4, 0, 2 * Math.PI, !1), s.fill(), s.restore()
                        }(),
                        function() {
                            if (0 === yn) return;
                            var e = cn[yn[mn]].charge;
                            if (e < 12 && vn < 12) return;
                            e < 12 && vn >= 12 && (e = 150);
                            var t = vn / e;
                            if (t > 1) return;
                            s.fillStyle = "lime", s.globalAlpha = .5, s.fillRect(0, 0, xt / 2 * t, 4), s.fillRect(0, kt - 4, xt / 2 * t, 4), s.fillRect(xt - xt / 2 * t, 0, xt / 2 * t, 4), s.fillRect(xt - xt / 2 * t, kt - 4, xt / 2 * t, 4), s.fillRect(0, 0, 4, kt / 2 * t), s.fillRect(xt - 4, 0, 4, kt / 2 * t), s.fillRect(0, kt - kt / 2 * t, 4, kt / 2 * t), s.fillRect(xt - 4, kt - kt / 2 * t, 4, kt / 2 * t), s.globalAlpha = 1
                        }(), Zt > 0 && (s.globalAlpha = .2 * (.3 * Zt + .01), Zt -= .2, s.fillStyle = "pink", s.fillRect(0, 0, xt, kt), s.globalAlpha = 1), Pr(), a && en <= 0 && function(e) {
                            var t = Oe / 16;
                            s.translate(-t * (e % 5 - 2), -t * (e / 5 - 2)), Oe--
                        }(r), C && Mr(), R && (at = mEng[132]), "" !== at && function() {
                            s.save(), s.font = "20px Nasa", s.fillStyle = w % 6 < 3 ? "orange" : "yellow", s.textAlign = "right", self.lives < 3 && (at = "Low Lives");
                            nr(mEng[125] + at, xt - 16, kt - 320), s.restore()
                        }(), at = "", Or();
                    var b = (e = new Date).getTime();
                    $e = b - t, ! function(e) {
                        if (0 == wt) return void(wt = e);
                        for (var t = 0; t < e.length; t++) wt[t] = (wt[t] + e[t] / 20) / 1.05
                    }([n, o, l, c, f, d, p, h, m, g, y += performance.now()]), br($e), Qe--
                }
            }

            function Hn(e) {
                return e >= 0 ? e + "" : -1 == e ? mEng[153] : -2 == e ? mEng[154] : ""
            }

            function Wn(e) {
                if (s.font = "11px Nasa", nr(cn[e].name, Et + 32, St + 364 + -32), Vn(cn[e].desc, Et + 32, St + 364 + -16, 704, 16), nr("Type: " + cn[e].type, Et + 32, St + 364 + 32), nr(mEng[71] + (-1 == cn[e].range ? mEng[206] : cn[e].range + " Meters"), Et + 32, St + 364 + 48), nr(mEng[72] + (-1 == cn[e].damage ? mEng[206] : cn[e].damage), Et + 32, St + 364 + 64), nr(mEng[73] + (-1 == cn[e].speed ? mEng[206] : cn[e].speed), Et + 32, St + 364 + 80), nr(mEng[74] + (-1 == cn[e].charge ? mEng[206] : cn[e].charge / 25 + mEng[75]), Et + 32, St + 364 + 96), nr(mEng[173] + Hn(cn[e].ammo), Et + 32, St + 364 + 112), nr(mEng[174] + cn[e].level, Et + 32, St + 364 + 128), ue) {
                    s.fillStyle = cn[e].price > ne ? "orange" : "limeq";
                    var t = cn[e].price > ne ? mEng[76] : mEng[77];
                    s.font = "20px Nasa", nr(t, Et + 256 + 32, St + 256 + 100 + 112)
                }
                s.font = "11px Nasa"
            }

            function Vn(e, t, n, r, a) {
                for (var o = e.split(" "), i = "", l = 0; l < o.length; l++) {
                    var u = i + o[l] + " ";
                    s.measureText(u).width > r && l > 0 ? (nr(i, t, n), i = o[l] + " ", n += a) : i = u
                }
                nr(i, t, n)
            }

            function qn() {
                for (var e in mt) delete mt[e];
                for (var e in data.pack) mt[data.pack[e].id] = data.pack[e]
            }

            function $n(e) {
                var t = e.id,
                    n = e.delta;
                if (void 0 !== Mt[t]) {
                    for (var r in n) Mt[t][r] = n[r];
                    t == Ft && (I = Mt[t].x, N = Mt[t].y, D = Mt[t].angle, L = Mt[t].health, k = -ir(D) * Mt[t].speed, E = -or(D) * Mt[t].speed)
                }
            }

            function Gn(e) {
                var t = e.id;
                if (void 0 !== It[t]) {
                    var n = e.delta;
                    for (var r in n) It[t][r] = n[r]
                }
            }

            function Qn(e) {
                var t = e.id;
                if (void 0 !== At[t]) {
                    var n = e.delta;
                    for (var r in n) At[t][r] = n[r]
                }
            }

            function Kn(e) {
                var t = e.id;
                if (void 0 !== Rt[t]) {
                    var n = e.delta;
                    for (var r in n) Rt[t][r] = n[r]
                }
            }

            function Xn(e) {
                var t = e.id;
                if (void 0 !== Nt[t]) {
                    var n = e.delta;
                    for (var r in n) Nt[t][r] = n[r]
                }
            }

            function Yn(e) {
                var t = e.id;
                if (void 0 !== Ot[t]) {
                    e = data.delta;
                    for (var n in e) Ot[t][n] = e[n]
                }
            }

            function Jn(e) {
                var t = e.id;
                if (void 0 !== Dt[t]) {
                    var n = e.delta;
                    for (var r in n) Dt[t][r] = n[r]
                }
            }

            function Zn(e) {
                var t = e.id;
                if (void 0 !== Pt[t]) {
                    var n = e.delta;
                    for (var r in n) Pt[t][r] = n[r]
                }
            }

            function er(e) {
                var t = e.id;
                if (void 0 !== Ct[t]) {
                    var n = e.delta;
                    for (var r in n) Ct[t][r] = n[r]
                }
            }

            function tr(e, t, n) {
                return e.split(t, n).join(t).length
            }

            function nr(e, t, n) {
                void 0 !== e && (e.length > et ? s.fillText(e.substring(0, et), t, n) : s.fillText(e, t, n))
            }

            function rr(e, t) {
                var n = e.getBoundingClientRect();
                return {
                    x: t.clientX - n.left,
                    y: t.clientY - n.top
                }
            }

            function ar(e) {
                return e * e * e
            }

            function or(e) {
                e += 200 * Math.PI;
                var t = (e %= 2 * Math.PI) % Math.PI;
                return (e > Math.PI ? -1 : 1) * h[Math.floor(1e3 * (t < Math.PI / 2 ? t : Math.PI - t))]
            }

            function ir(e) {
                return or(e + Math.PI / 2)
            }

            function lr(e) {
                return e * e
            }

            function ur(e) {
                return e < 0 ? 0 : [0, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 4e3, 8e3, 14e3, 2e4, 4e4, 7e4, 1e5, 14e4, 2e5, 3e5, 5e5, 8e5, 1e6, 15e5, 2e6, 3e6, 5e6, 8e6, 12e6, 16e6, 32e6, 64e6, 1e8][e]
            }

            function sr(e) {
                var t = Math.floor(e),
                    n = e - t,
                    r = Math.sin(1e3 * lr(t));
                return r + (Math.sin(1e3 * lr(t + 1)) - r) * (n * n / 2 - n * n * n / 3) * 6
            }

            function cr() {
                return Math.floor(Ut ? 0 : 2e5 * (1 / (1 + Math.exp(-re / 15e3)) + Math.atan(re / 15e4) - .5)) + 500
            }

            function fr(e) {
                for (var t = 0; t < 4 && -1 != Un[t]; t++);
                Un[t] = e
            }

            function dr(e, t, n, r, a) {
                return (n - t) / (v / a >> r) % a + a * e
            }

            function pr(e) {
                return e % 1e3 - 500
            }

            function hr(e) {
                for (var t = 0; t < cn.length; t++)
                    if (cn[t].order == e) return t
            }

            function mr() {
                for (var e in ht) {
                    ht[e].time++ > 38 && delete ht[e]
                }
            }

            function gr() {
                for (var e in ft) {
                    var t = ft[e];
                    t.time += 14, t.time > 400 && delete ft[e]
                }
                for (var e in dt) {
                    var n = dt[e];
                    n.time++ >= 14 ? delete dt[e] : (n.x += 25 * ir(n.angle) + n.dx, n.y += 25 * or(n.angle) + n.dy)
                }
            }

            function vr() {
                for (var e in A || gr(), ft) {
                    var t = ft[e],
                        n = t.x - I + xt / 2 - 64 + k,
                        r = t.y - N + kt / 2 - 64 + E;
                    if (t.time < 114) {
                        var a = In.booms,
                            o = t.time % 10 * 128,
                            i = 128 * Math.floor(t.time / 10);
                        s.save(), s.drawImage(a, o, i, 128, 128, n, r, 128, 128), s.restore()
                    }
                    if (t.shockwave) {
                        n = t.x - I + xt / 2 + k, r = t.y - N + kt / 2 + E;
                        var l = 96 * Math.sqrt(t.time);
                        s.globalAlpha = .9 - t.time / 500, s.drawImage(In.shockwave, n - l / 2, r - l / 2, l, l), s.globalAlpha = 1
                    }
                }
                for (var e in dt) {
                    var u = dt[e];
                    s.beginPath(), s.strokeStyle = "gray", s.lineWidth = 6, s.globalAlpha = (15 - u.time) / 15, s.fillStyle = "white", s.fillRect(u.x - 3 - I + xt / 2, u.y - 3 - N + kt / 2, 7, 7), s.globalAlpha = (15 - u.time) / 22, s.moveTo(u.x - I + xt / 2, u.y - N + kt / 2), s.lineTo(u.x - I + xt / 2 - (25 * ir(u.angle) + u.dx), u.y - N + kt / 2 - (25 * or(u.angle) + u.dy)), s.stroke(), s.closePath(), s.globalAlpha = 1
                }
            }

            function yr(e, t, n, r, a) {
                s.lineWidth = 1;
                var o = Math.PI / 2 * 3,
                    i = e,
                    l = t,
                    u = Math.PI / n;
                for (s.beginPath(), s.moveTo(e, t - r), m = 0; m < n; m++) i = e + ir(o) * r, l = t + or(o) * r, s.lineTo(i, l), i = e + ir(o += u) * a, l = t + or(o) * a, s.lineTo(i, l), o += u;
                s.lineTo(e, t - r), s.closePath(), s.fill()
            }

            function br(e, t) {
                var n = X + Y + J + Z;
                s.textAlign = "right", s.fillStyle = "yellow";
                var r = [mEng[182], mEng[183], mEng[184], mEng[185], mEng[186], mEng[187], mEng[188], mEng[189], mEng[190], mEng[191], mEng[192]],
                    a = {},
                    o = Ut ? 0 : 240;
                st *= ct, st += qe, ct++, st /= ct + 0, a[0] = mEng[149] + Math.round(re), a[1] = mEng[5] + Math.floor(ne), a[2] = mEng[6] + ee, a[3] = mEng[147] + n, a[4] = mEng[148] + ae, a[5] = "", a[6] = l ? "" : mEng[81], a[7] = l ? "" : mEng[82], a[8] = mEng[83] + Number((e / 40).toPrecision(3)) + mEng[193], a[9] = mEng[84] + Number((Ve / 40).toPrecision(3)) + mEng[193], a[10] = mEng[85] + qe + " ms " + mEng[194] + Number(st).toPrecision(3) + " ms)", a[11] = mEng[86] + Ge, a[12] = mEng[87] + Ye, e > 50 ? (a[5] = mEng[88], a[6] = mEng[89], a[7] = "") : qe > 100 ? (a[5] = mEng[90], a[6] = mEng[91], a[7] = mEng[92]) : Ve > 50 && (a[5] = mEng[95], a[6] = mEng[92], a[7] = "");
                for (var i = 0; i < (Je ? 15 + wt.length : 5); i++) nr(i < 15 ? a[i] : r[i - 15] + mEng[195] + parseFloat(Math.round(100 * wt[i - 15]) / 100).toFixed(2), xt - o - 32, 64 + 16 * i);
                Ut || (s.fillStyle = "yellow", nr(mEng[196], xt - o - 32, 16), s.fillStyle = "pink", nr(H + "/" + V + "/" + G + "/" + K, xt - o - 32, 32), s.fillStyle = "cyan", nr(B + "/" + W + "/" + q + "/" + Q, xt - o - 32, 48)), s.textAlign = "left"
            }

            function _r() {
                s.fillStyle = "cyan", s.textAlign = "center";
                var e = "";
                "Mining" == M.type && (e = mEng[37] + M.amt + mEng[38] + M.metal + mEng[39] + jn(M.sx, M.sy) + mEng[40]), "Base" == M.type && (e = mEng[41] + jn(M.sx, M.sy) + mEng[40]), "Delivery" == M.type && (e = mEng[42] + jn(M.sx, M.sy) + mEng[43] + jn(M.dsx, M.dsy) + mEng[40]), "Secret" == M.type && (e = mEng[156] + jn(M.sx, M.sy) + mEng[157]), "Secret2" == M.type && (e = mEng[158] + jn(M.sx, M.sy) + mEng[159] + ut + mEng[40]), "Secret3" == M.type && (e = mEng[160]), nr(e, xt / 2, kt - 56), s.textAlign = "left"
            }

            function wr() {
                for (var e in zt) {
                    var t = zt[e],
                        n = In.s1;
                    e < 150 ? (n = In.s5, e % 4 == 1 ? n = In.s6 : e % 4 == 2 ? n = In.s7 : e % 4 == 3 && (n = In.s8)) : e % 4 == 1 ? n = In.s2 : e % 4 == 2 ? n = In.s3 : e % 4 == 3 && (n = In.s4);
                    var r = (1e3 - e) / 1e3;
                    r *= r * r;
                    var a = (5e5 + t.x - (I - k + oe * v) * (r * r + .1) * .25) % xt,
                        o = (5e5 + t.y - (N - E + ie * v) * (r * r + .1) * .25) % kt;
                    s.drawImage(n, a, o)
                }
            }

            function xr() {
                var e = we;
                ve = {}, ye = 0;
                for (var t = new RegExp(nt + ".*?" + nt, "g"), n = he - 1; n >= 0; n--) {
                    for (var r = "", a = e[n].split(" "), o = 0; o < a.length; o++) {
                        var i = r + a[o] + " ";
                        s.measureText(i.replace(t, "")).width > 512 && o > 0 ? (ve[ye++] = r, r = "                  " + a[o] + " ") : r = i
                    }
                    ve[ye++] = r
                }
                ye--
            }

            function kr() {
                if (s.font = "11px Nasa", s.save(), s.globalAlpha = .5, s.fillStyle = "black", s.strokeStyle = "#222222", Cr(-34, kt - 168, 562, 224, 32, !0, !0), s.fillStyle = "white", Cr(0, kt - 64 - me / he * 154, 6, 24, 2, !0, !1), s.globalAlpha = 1, s.textAlign = "right", s.fillStyle = 800 != Ae ? 1 != ge ? "violet" : "blue" === O ? "cyan" : "pink" : "yellow", nr(0 == ge ? mEng[197] : mEng[199], 512, kt - 16), s.restore(), 1 != ge) {
                    s.textAlign = "left", s.fillStyle = "yellow", s.save();
                    for (var e = ye - me; e >= Math.max(0, ye - me - 7); e--) {
                        var t = e + me - Object.keys(ve).length;
                        s.globalAlpha = lr((t + 20) / 20);
                        for (var n = 0, r = ve[e].split(nt), a = 0; a < r.length; a++) a % 2 == 0 ? (s.fillText(r[a], 16 + n, kt - 24 + 16 * t), n += s.measureText(r[a]).width) : s.fillStyle = "blue" === r[a] ? "cyan" : "red" === r[a] ? "pink" : r[a]
                    }
                    s.restore()
                }
            }

            function Er(e) {
                s.fillStyle = "black", s.fillRect(0, 0, xt, kt), s.font = "11px Nasa";
                for (var t = e ? 1 : 0, n = In.spc, r = 0; r < (en > 0 ? 3 : 1); r++) {
                    s.globalAlpha = 0 == r ? .5 : (1e4 - lr(100 - en)) / (1e4 * r);
                    for (var a = -t; a < 2 + Math.floor(xt / 2048) + t; a++)
                        for (var o = -t; o < 2 + Math.floor(kt / 2048) + t; o++) s.drawImage(n, dr(a, I, k, r, 2048), dr(o, N, E, r, 2048))
                }
                s.globalAlpha = 1
            }

            function Sr() {
                if (!Ut) {
                    if (0 != vt) {
                        if (void 0 === vt[oe]) return;
                        var e = pr(vt[oe][ie]);
                        (e > 3 && "blue" === O || e < -3 && "red" === O) && (at = mEng[104]);
                        for (var t = 0; t < S; t++)
                            for (var n = 0; n < S; n++) {
                                var r = pr(vt[t][n]);
                                s.fillStyle = r > 0 ? "red" : "cyan";
                                var a = Math.sqrt(Math.abs(r) / 30);
                                s.globalAlpha = Math.min(1, a), s.fillRect(20 + 182 * t / S, 20 + 182 * n / S, 182 / S, 182 / S)
                            }
                    }
                    if (s.globalAlpha = 1, s.drawImage(In.galaxy, 14, 14), s.lineWidth = 3, s.strokeStyle = "#FFFF00", s.strokeRect(20 + 182 * oe / S, 20 + 182 * ie / S, 182 / S, 182 / S), 0 != Pe && 0 != vt)
                        for (t = 0; t < S; t++)
                            for (n = 0; n < S; n++) 1 == Pe[t][n] ? s.drawImage(In.mrss, 21.5 + 26 * t, 21.5 + 27 * n) : 2 == Pe[t][n] ? s.drawImage(In.mbss, 21.5 + 26 * t, 21.5 + 26 * n) : vt[t][n] >= 1e3 && s.drawImage(In.ma, 21.5 + 26 * t, 21.5 + 26 * n);
                    Fe < 1.9 || (s.fillStyle = "white", s.beginPath(), s.arc(20 + 182 * F, 20 + 182 * j, 4, 0, 2 * Math.PI, !1), s.fill(), s.fillStyle = "black", s.beginPath(), s.arc(20 + 182 * F, 20 + 182 * j, 3, 0, 2 * Math.PI, !1), s.fill(), s.fillStyle = "white", s.beginPath(), s.arc(20 + 182 * U, 20 + 182 * z, 4, 0, 2 * Math.PI, !1), s.fill())
                }
            }

            function Tr() {
                if (!Ut) {
                    s.save(), s.globalAlpha = .5, Ir(xt - 260, -2, 262, 16 * (yt.length + 4) + 2, "black", "white"), s.fillStyle = O, Cr(xt - 221, 16 * Math.min(bt, 16) + 52, 8 * rt.length + 7, 16, 7, !0, !1), s.restore(), s.fillStyle = "yellow", s.font = "24px Nasa", s.textAlign = "center", nr(mEng[105], xt - 128, 28), s.font = "11px Nasa", s.fillStyle = "yellow", nr(mEng[106], xt - 208, 48), s.textAlign = "right", nr(mEng[107], xt - 48 - 16, 48), nr(mEng[108], xt - 16, 48);
                    for (var e = 0; e < yt.length; e++) {
                        var t = 1 + (16 != e ? e : parseInt(yt[e].id));
                        if (s.textAlign = "left", s.fillStyle = "red" == yt[e].color ? "pink" : "cyan", yt[e].name.startsWith("[V] ")) {
                            var n = (new Date).getTime() / 560;
                            nr("[VIP]", xt - 216, 16 * (e + 4)), s.fillStyle = "rgba(" + Math.floor(16 * Math.sqrt(128 * Math.sin(n) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 2 * Math.PI / 3) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 4 * Math.PI / 3) + 128)) + ", 1)", nr(yt[e].name.substring(4), xt - 186, 16 * (e + 4))
                        } else if (yt[e].name.startsWith("[B] ")) {
                            n = (new Date).getTime() / 560;
                            nr("[MVP]", xt - 216, 16 * (e + 4)), s.fillStyle = "rgba(" + Math.floor(16 * Math.sqrt(128 * Math.sin(n) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 2 * Math.PI / 3) + 128)) + ", " + Math.floor(16 * Math.sqrt(128 * Math.sin(n + 4 * Math.PI / 3) + 128)) + ", 1)", nr(yt[e].name.substring(4), xt - 180, 16 * (e + 4))
                        } else nr(yt[e].name, xt - 216, 16 * (e + 4));
                        s.fillStyle = "yellow", nr(t + mEng[40], xt - 248, 16 * (e + 4)), s.textAlign = "right", nr((r = yt[e].exp) < 1e4 ? "" + Math.round(r) : r < 1e7 ? Math.round(r / 1e3) + mEng[180] : r < 1e10 ? Math.round(r / 1e6) + mEng[181] : void 0, xt - 48 - 16, 16 * (e + 4)), nr(yt[e].rank, xt - 16, 16 * (e + 4))
                    }
                    var r
                }
            }

            function Mr() {
                s.fillStyle = "yellow", s.textAlign = "center", s.font = "40px Nasa", nr(mEng[109], Et + 384, St + 512), s.textAlign = "left", s.font = "11px Nasa"
            }

            function Ar() {
                s.fillStyle = "pink", s.textAlign = "center", s.font = "20px Nasa";
                var e = "";
                1 == Ze && (e = mEng[112]), 2 == Ze && (e = mEng[113]), 3 == Ze && (e = mEng[114]), 4 == Ze && (e = mEng[115]), 5 == Ze && (e = "Username is profane!"), 10 == Ze && (e = mEng[116]), 20 == Ze && (e = "Outdated client! Please clear your cache or try incongito mode!"), nr(e, xt / 2, kt - 64), s.textAlign = "left", s.font = "11px Nasa"
            }

            function Pr() {
                var e = X + Y + J + Z,
                    t = "",
                    n = "";
                s.save(), s.textAlign = "center", s.fillStyle = "yellow", Ut && (8e3 != ne && rn > 3 ? (t = mEng[123], rn < 5 && (rn = 5, fr([256, t, "", ""]))) : tn ? nn ? 0 == Ie && 0 == e ? (t = mEng[119], n = mEng[120], rn < 3 && (rn = 3, fr([256, t, n, ""]))) : 0 == Ie && (t = le ? mEng[122] : mEng[121], rn < 4 && (rn = 4, fr([256, t, "", ""]))) : (t = mEng[118], rn < 2 && (rn = 2, fr([256, t, "", ""]))) : (t = mEng[117], rn < 1 && (rn = 1, fr([256, t, "", ""]))));
                var r = (new Date).getTime();
                s.font = 5 * or(r / 180) + 25 + "px Nasa", nr(t, xt / 2, 40), nr(n, xt / 2, 88), s.restore()
            }

            function Cr(e, t, n, r, a, o, i) {
                if (s.lineWidth = 2, void 0 === i && (i = !0), void 0 === a && (a = 0), "number" == typeof a) a = {
                    tl: a,
                    tr: a,
                    br: a,
                    bl: a
                };
                else {
                    var l = {
                        tl: 0,
                        tr: 0,
                        br: 0,
                        bl: 0
                    };
                    for (var u in l) a[u] = a[u] || l[u]
                }
                s.beginPath(), s.moveTo(e + a.tl, t), s.lineTo(e + n - a.tr, t), s.quadraticCurveTo(e + n, t, e + n, t + a.tr), s.lineTo(e + n, t + r - a.br), s.quadraticCurveTo(e + n, t + r, e + n - a.br, t + r), s.lineTo(e + a.bl, t + r), s.quadraticCurveTo(e, t + r, e, t + r - a.bl), s.lineTo(e, t + a.tl), s.quadraticCurveTo(e, t, e + a.tl, t), s.closePath(), o && s.fill(), i && s.stroke()
            }

            function Ir(e, t, n, r, a, o) {
                s.save(), s.lineWidth = 1, s.globalAlpha = .5, a && (s.fillStyle = a, s.fillRect(e, t, n, r)), o && (s.strokeStyle = o, s.beginPath(), s.moveTo(e, t), s.lineTo(e + n, t), s.closePath(), s.stroke(), s.beginPath(), s.moveTo(e, t + r), s.lineTo(e + n, t + r), s.closePath(), s.stroke()), s.restore()
            }

            function Nr() {
                if (!(Ut || ae < 6)) {
                    s.save(), s.fillStyle = "yellow", s.textAlign = "center";
                    var e = xe / 25,
                        t = Math.floor(e / 60),
                        n = "" + Math.floor(e) % 60;
                    1 == n.length && (n = "0" + n), s.font = "16px Nasa", xe >= 0 && xe < 15e3 ? (nr(mEng[200] + t + ":" + n, xt / 2, kt - 120), nr(mEng[201] + Se, xt / 2, kt - 80), s.font = "14px Nasa", nr("-", xt / 2, kt - 100), s.fillStyle = "pink", s.textAlign = "right", nr(ke, xt / 2 - 8, kt - 100), s.fillStyle = "cyan", s.textAlign = "left", nr(Ee, xt / 2 + 8, kt - 100)) : le && t > 5 && nr(mEng[202] + (t - 10) + ":" + n, xt / 2, kt - 120), s.restore()
                }
            }

            function Or() {
                if (-1 !== Un[0])
                    if (Un[0][0] -= "" === Un[0][2] ? 2 : 1.25, Un[0][0] < 0) {
                        for (var e = 0; e < 3; e++) Un[e] = Un[e + 1];
                        Un[3] = -1
                    } else {
                        var t = Un[0][0];
                        s.fillStyle = "black", s.globalAlpha = .8 / (1 + Math.exp(lr(128 - t) / 5e3)), s.fillRect(0, 0, xt, kt), s.textAlign = "center", s.fillStyle = "cyan";
                        var n = xt / 2 + (ar(t - 128) + 10 * (t - 128)) / 1500;
                        s.globalAlpha = .7, s.font = "48px Nasa", nr(Un[0][1], n, kt / 2 - 64), s.font = "36px Nasa", nr(Un[0][2], n, kt / 2), s.font = "24px Nasa", nr(Un[0][3], n, kt / 2 + 64), s.globalAlpha = 1, s.font = "12px Nasa"
                    }
            }

            function Dr() {
                for (var e in mt) {
                    var t = mt[e];
                    t.x += t.vx, t.y += t.vy, t.tick++
                }
            }

            function Rr() {
                for (var e in A || Dr(), mt) {
                    var t = mt[e],
                        n = In.bullet,
                        r = t.x - I + xt / 2 + k,
                        a = t.y - N + kt / 2 + E;
                    if (28 != t.wepnID) {
                        "blue" == t.color && (n = In.ebullet), 1 != t.wepnID && 23 != t.wepnID || (n = In.bigBullet);
                        var o = n.width,
                            i = n.height;
                        s.save(), s.translate(r, a), s.rotate(t.angle + Math.PI / 2), s.drawImage(n, -o / 2, -i / 2), s.restore()
                    } else {
                        s.save(), s.globalAlpha = .1, s.fillStyle = "white";
                        for (var l = 0; l < 10; l++) {
                            var u = Math.random() * Math.PI * 2,
                                c = Math.min(t.tick, 75),
                                f = 4 + lr(Math.random() * c / 10),
                                d = Math.random() * f;
                            s.beginPath(), s.arc(r + Math.cos(u) * d, a + Math.sin(u) * d, f, 0, 2 * Math.PI, !1), s.closePath(), s.fill()
                        }
                        s.restore(), t.tick > 750 && delete mt[e]
                    }
                }
            }

            function Lr(e) {
                var t = In.pack,
                    n = e.x - I + xt / 2 + k,
                    r = e.y - N + kt / 2 + E;
                s.save(), s.translate(n, r), s.drawImage(t, -16, -16, 32, 32), s.restore()
            }
            g.on("connect_error", (function(e) {
                if (!A) return alert("Failed to connect to the Torn servers. This probably either means they are down or your firewall is blocking the request. " + e), void g.close();
                alert("There's been an issue and your connection to Torn has been interrupted. You should be able to reload and get back right into the game. " + e), g.close()
            })), g.on("posUp", (function(e) {
                oe == e.sx && ie == e.sy || Mn("sector", 1), e.planetTimer / 25, e.energy, oe = e.sx, ie = e.sy, I = e.x, N = e.y, L = e.health, R = e.isLocked, vn = e.charge, k = -ir(e.angle) * e.speed, E = -or(e.angle) * e.speed, D = e.angle, Te = e.shield, ot = e.cloaked, le && Mn("sector", 1), Ne--, De--, Re--, Gt--, le = !1, Rt = e.packs, Mt = e.players, e.planets, Tt = e.bases, Dt = e.asteroids, Nt = e.beams, Ot = e.blasts, Ct = e.missiles, Pt = e.orbs, At = e.mines, It = e.vorts
            })), g.on("update", (function(e) {
                ++Xe, ++w, oe == e.sx && ie == e.sy || Mn("sector", 1), e.energy, oe = e.sx, ie = e.sy, R = e.isLocked, vn = e.charge, ot = e.cloaked;
                for (var t = e.state, n = 0; n < t.vorts.length; ++n) Gn(t.vorts[n]);
                for (n = 0; n < t.players.length; ++n) $n(t.players[n]);
                for (n = 0; n < t.mines.length; ++n) Qn(t.mines[n]);
                for (n = 0; n < t.beams.length; ++n) Xn(t.beams[n]);
                for (n = 0; n < t.blasts.length; ++n) Yn(t.blasts[n]);
                for (n = 0; n < t.asteroids.length; ++n) Jn(t.asteroids[n]);
                for (n = 0; n < t.missiles.length; ++n) er(t.missiles[n]);
                for (n = 0; n < t.packs.length; ++n) Kn(t.packs[n]);
                for (n = 0; n < t.orbs.length; ++n) Zn(t.orbs[n]);
                void 0 !== t.base && function(e) {
                        if (void 0 === e || void 0 === e.delta) return;
                        var t = e.delta;
                        if (0 === Tt) return;
                        for (var n in t) Tt[n] = t[n]
                    }(t.base), e.planetTimer / 25, gr(), mr(), Dr(),
                    function() {
                        for (var e in pt) {
                            (n = pt[e]).time++ >= 5 ? delete pt[e] : (n.x += n.dx, n.y += n.dy)
                        }
                        var t = (new Date).getTime() / 100;
                        for (var e in Mt) {
                            var n, r = (n = Mt[e]).trail,
                                a = r % 16;
                            if (Math.abs(n.speed) > 1 && Math.abs(n.driftAngle - n.angle) > .05) {
                                var o = .66 * lr(fn[n.ship].width / 96);
                                o *= Math.min(8 * Math.abs(n.driftAngle - n.angle), 16), r > 15 ? o /= 6 : 0 != a && (o *= 2.5);
                                for (var i = ir(n.angle), l = or(n.angle), u = 0; u < o; u++) {
                                    var s = Math.random() * n.speed,
                                        c = (Math.random(), ((96 + Math.floor(64 * Math.random()) << 16) + (96 + Math.floor(128 * Math.random()) << 8) + 255 - Math.floor(64 * Math.random())).toString(16));
                                    if (1 == a) c = ((192 + Math.floor(64 * Math.random()) << 16) + (Math.floor(64 * Math.random()) << 8) + Math.floor(92 * Math.random())).toString(16);
                                    else if (2 == a) c = Math.random() < .5 ? ((255 - 64 * Math.floor(Math.random()) << 16) + (183 + Math.floor(64 * Math.random()) << 8)).toString(16) : ((Math.floor(64 * Math.random()) << 16) + (192 + Math.floor(64 * Math.random()) << 8) + Math.floor(64 * Math.random())).toString(16);
                                    else if (3 == a) {
                                        var f = Math.random() < .5 ? 255 : 1;
                                        c = ((f << 16) + (f << 8) + f).toString(16)
                                    } else 4 == a ? (t = Math.random() * Math.PI * 60, c = ((Math.floor(128 * Math.cos(t) + 128) << 16) + (Math.floor(128 * Math.cos(t + 2 * Math.PI / 3) + 128) << 8) + Math.floor(128 * Math.cos(t + 4 * Math.PI / 3) + 128)).toString(16)) : 5 == a && (c = ((Math.floor(128 * Math.cos(t) + 128) << 16) + (Math.floor(128 * Math.cos(t + 2 * Math.PI / 3) + 128) << 8) + Math.floor(128 * Math.cos(t + 4 * Math.PI / 3) + 128)).toString(16));
                                    for (; c.length < 6;) c = "0" + c;
                                    pt[Math.random()] = {
                                        vip: r > 15,
                                        dx: i * n.speed / 2,
                                        dy: l * n.speed / 2,
                                        x: n.x + 4 * ar(4 * Math.random() - 2) * fn[n.ship].width / 128 + i * s - i * n.speed,
                                        y: n.y + 4 * ar(4 * Math.random() - 2) * fn[n.ship].width / 128 + l * s - l * n.speed,
                                        time: -1,
                                        color: c
                                    }
                                }
                            }
                            if (n.health / n.maxHealth < .4)
                                for (u = 0; u < 10; u++) {
                                    f = Math.random();
                                    pt[Math.random()] = {
                                        vip: !1,
                                        dx: i * n.speed / 2,
                                        dy: l * n.speed / 2,
                                        x: n.x + 4 * ar(4 * Math.random() - 2) * fn[n.ship].width / 128 + i * f * n.speed,
                                        y: n.y + 4 * ar(4 * Math.random() - 2) * fn[n.ship].width / 128 + l * f * n.speed,
                                        time: -1,
                                        color: ((Math.round(112 + 32 * f) << 16) + (Math.round(112 + 32 * f) << 8) + Math.round(112 + 32 * f)).toString(16)
                                    }
                                }
                        }
                    }(), Ne--, De--, Re--, Gt--
            })), g.on("player_create", (function(e) {
                Mt[e.id] = e
            })), g.on("player_delete", (function(e) {
                delete Mt[e]
            })), g.on("vort_create", (function(e) {
                It[e.id] = e.pack
            })), g.on("vort_delete", (function(e) {
                delete It[e]
            })), g.on("mine_create", (function(e) {
                At[e.id] = e.pack
            })), g.on("mine_delete", (function(e) {
                delete At[e]
            })), g.on("pack_create", (function(e) {
                Rt[e.id] = e.pack
            })), g.on("pack_delete", (function(e) {
                delete Rt[e]
            })), g.on("beam_create", (function(e) {
                Nt[e.id] = e.pack
            })), g.on("beam_delete", (function(e) {
                delete Nt[e]
            })), g.on("blast_create", (function(e) {
                Ot[e.id] = e.pack
            })), g.on("blast_delete", (function(e) {
                delete Ot[e]
            })), g.on("base_create", (function(e) {
                Tt = e
            })), g.on("base_delete", (function(e) {
                Tt = void 0
            })), g.on("asteroid_create", (function(e) {
                Dt[e.id] = e
            })), g.on("pong", (function(e) {
                qe = e
            })), g.on("asteroid_delete", (function(e) {
                delete Dt[e]
            })), g.on("orb_create", (function(e) {
                Pt[e.id] = e.pack
            })), g.on("orb_delete", (function(e) {
                delete Pt[e]
            })), g.on("missile_create", (function(e) {
                Ct[e.id] = e.pack
            })), g.on("missile_delete", (function(e) {
                delete Ct[e]
            })), g.on("chat", (function(e) {
                ! function(e) {
                    for (var t = he; t > 0; t--) we[t] = we[t - 1];
                    if (e.msg.includes("`~")) {
                        var n = tr(e.msg, "`~", 1),
                            r = tr(e.msg, "`~", 2),
                            a = parseFloat(e.msg.substring(n + 2, r));
                        e.msg = e.msg.replace("`~" + a + "`~", cn[a].name)
                    }
                    we[0] = e.msg, me = 0, xr()
                }(e)
            })), g.on("newBullet", (function(e) {
                mt[e.id] = e, mt[e.id].tick = 0
            })), g.on("delBullet", (function(e) {
                delete mt[e.id]
            })), g.on("clrBullet", (function(e) {
                qn()
            })), g.on("AFK", (function(e) {
                0 == e.t ? (C = !0, Mr()) : 2250 == e.t && (Re = 2250)
            })), g.on("invalidCredentials", (function(e) {
                Ze = 1
            })), g.on("accInUse", (function(e) {
                Ze = 10
            })), g.on("outdated", (function() {
                Ze = 20
            })), g.on("loginSuccess", (function(e) {
                for (var t in mt) delete mt[t];
                Mn("music1", .5), Ze = 0, i.a.turnOffDisplay("LoginOverlay"), i.a.init({
                    value: ""
                }), Me = !1, A = !0, Ft = e.id
            })), g.on("invalidReg", (function(e) {
                Ze = e.reason
            })), g.on("registered", (function(e) {
                Ze = 0, g.emit("login", {
                    user: e.user,
                    pass: e.pass,
                    amNew: !0,
                    version: "v2-32-g8110b8a"
                }), i.a.turnOffRegister("LoginOverlay"), Ut = !1, et = 0, Me = !1, se = 0
            })), g.on("lored", (function(e) {
                for (var t in mt) delete mt[t];
                Ze = 0, O = e.pc, i.a.turnOffDisplay("LoginOverlay"), P = !0
            })), g.on("guested", (function(e) {
                Ze = 0, i.a.turnOffDisplay("LoginOverlay"), A = !0, Ut = !0, Ft = e.id
            })), g.on("you", (function(e) {
                $t = e.killStreak, Gt = e.killStreakTimer, rt = e.name, O = e.color, ne = e.money, ee = e.kills, te = e.baseKills, X = e.iron, Z = e.aluminium, J = e.platinum, Y = e.silver, Ie = e.ship, re = e.experience, ae = e.rank, Le = Math.round(1e3 * e.t2) / 1e3, Fe = Math.round(1e3 * e.va2) / 1e3, Be = Math.round(1e3 * e.ag2) / 1e3, ze = Math.round(1e3 * e.c2) / 1e3, Ue = Math.round(1e3 * e.mh2) / 1e3, je = Math.round(1e3 * e.e2) / 1e3, e.points >= 0 && e.points < 1e3 && (Se = e.points)
            })), g.on("weapons", (function(e) {
                var t = !1;
                for (var n in yn) yn[n] != e.weapons[n] && (t = !0);
                yn = e.weapons, Ce = e.worth, bn = e.ammos, le && t && Mn("money", 1)
            })), g.on("sound", (function(e) {
                if (e.file.includes("boom")) {
                    "bigboom" === e.file && (Zt = 1), ft[Math.random()] = {
                        x: e.x,
                        y: e.y,
                        time: 0,
                        shockwave: "bigboom" === e.file
                    };
                    for (var t = 0; t < 5; t++) dt[Math.random()] = {
                        x: e.x,
                        y: e.y,
                        angle: 6.28 * Math.random(),
                        time: -1,
                        dx: e.dx / 1.5,
                        dy: e.dy / 1.5
                    }
                }
                var n = (I - e.x) / 1e3,
                    r = (N - e.y) / 1e3,
                    a = .6 / Math.hypot(Math.abs(n) + 10, Math.abs(r) + 10);
                "hyperspace" === e.file && (en = 200, a = 2), Mn(e.file, a)
            })), g.on("equip", (function(e) {
                mn = e.scroll, gn = 100
            })), g.on("note", (function(e) {
                ht[Math.random()] = {
                    msg: e.msg,
                    x: e.x - 16 + (e.local ? -I : 32 * Math.random()),
                    y: e.y - 16 + (e.local ? -N : 32 * Math.random()),
                    time: 0,
                    strong: !1,
                    local: e.local
                }
            })), g.on("strong", (function(e) {
                ht[Math.random()] = {
                    msg: e.msg,
                    x: e.x + (e.local ? -I : 0),
                    y: e.y - 128 + (e.local ? -N : 0),
                    time: 0,
                    strong: !0,
                    local: e.local
                }
            })), g.on("spoils", (function(e) {
                if (e.amt = Math.round(e.amt), 0 != e.amt) {
                    var t = "",
                        n = 0,
                        r = 0;
                    "experience" === e.type ? (t = mEng[175] + e.amt + mEng[176], n = xt / 2 + 256, r = kt - 32) : "money" === e.type ? (t = "$" + e.amt, n = xt - 512, r = 64) : "ore" === e.type ? (t = mEng[175] + e.amt + mEng[177], n = xt - 512, r = 96) : "life" === e.type && (t = mEng[175] + e.amt + (e.amt > 1 ? mEng[178] : mEng[179]), n = xt - 512, r = 128), ht[Math.random()] = {
                        spoils: !0,
                        msg: t,
                        x: n,
                        y: r,
                        time: 0,
                        strong: !0,
                        local: e.local
                    }
                }
            })), g.on("online", (function(e) {
                q = e.bb, G = e.rb, B = e.bp, H = e.rp, W = e.bg, V = e.rg, Ve = e.lag
            })), g.on("sectors", (function(e) {
                Pe = e.sectors;
                for (var t = 12, n = 0; n < S; n++)
                    for (var r = 0; r < S; r++)
                        if (4 == Pe[n][r]) {
                            var a = n - (S - 1) / 2,
                                o = r - (S - 1) / 2;
                            a *= 256 / S * (2 * S - 1) / (2 * S), o *= 256 / S * (2 * S - 1) / (2 * S), an[t] = {
                                x: a,
                                y: o,
                                z: 0,
                                color: "lime"
                            }, t++
                        }
            })), g.on("emp", (function(e) {
                Ne = e.t
            })), g.on("gyro", (function(e) {
                De = e.t
            })), g.on("dmg", (function(e) {
                Oe = 15
            })), g.on("refresh", (function(e) {
                window.location.reload(!0)
            })), g.on("quests", (function(e) {
                T = e.quests
            })), g.on("rank", (function(e) {
                fr([256, "Rank Up!", "", ""])
            })), g.on("quest", (function(e) {
                e.complete && fr([256, "Quest Complete!", "", ""]), M = e.quest
            })), g.on("achievementsKill", (function(e) {
                for (var t in e.achs) t = Number(t), Ln[t] != e.achs[t] && (Ln[t] = e.achs[t], e.note && !Ut && fr([256, "Achievement Get!", jsn.achNames[t].split(":")[0], jsn.achNames[t].split(":")[1]]))
            })), g.on("achievementsCash", (function(e) {
                for (var t in e.achs) t = Number(t), Ln[t + 13] != e.achs[t] && (Ln[t + 13] = e.achs[t], e.note && !Ut && fr([256, "Achievement Get!", jsn.achNames[t + 13].split(":")[0], jsn.achNames[t + 13].split(":")[1]]))
            })), g.on("achievementsDrift", (function(e) {
                for (var t in e.achs) t = Number(t), Ln[t + 25] != e.achs[t] && (Ln[t + 25] = e.achs[t], e.note && !Ut && fr([256, "Achievement Get!", jsn.achNames[t + 25].split(":")[0], jsn.achNames[t + 25].split(":")[1]]))
            })), g.on("achievementsMisc", (function(e) {
                for (var t in e.achs) t = Number(t), Ln[t + 37] != e.achs[t] && (Ln[t + 37] = e.achs[t], e.note && !Ut && fr([256, "Achievement Get!", jsn.achNames[t + 37].split(":")[0], jsn.achNames[t + 37].split(":")[1]]))
            })), g.on("status", (function(e) {
                fe = Ie, !le && e.docked && (tt = 40), le != e.docked && (et = 0), le = e.docked, He = e.state, We = e.lives
            })), g.on("planets", (function(e) {
                gt = e.pack, 0 != M && "Secret2" === M.type && oe == M.sx && ie == M.sy && (ut = gt.name)
            })), g.on("heatmap", (function(e) {
                vt = e.hmap, yt = e.lb, ke = e.raidRed, Ee = e.raidBlue, bt = parseInt(e.youi), e.youi > 15 && (yt[16] = {
                    id: e.youi,
                    name: rt,
                    exp: re,
                    color: O,
                    rank: ae
                })
            })), g.on("worm", (function(e) {
                F = e.bx, j = e.by, U = e.bxo, z = e.byo
            })), g.on("raid", (function(e) {
                xe = e.raidTimer
            })), g.on("kick", (function(e) {
                alert(e.msg), g.disconnect()
            })), setInterval((function() {
                Ge = Ke, Ye = Xe, Xe = Ke = 0;
                (new Date).getTime()
            }), 1e3), setInterval((function() {
                xe--, en--, xt = window.innerWidth, kt = window.innerHeight, u.width == xt && u.height == kt || (u.width = xt, u.height = kt), Et = xt / 2 - 384, St = kt / 4 - 128
            }), 40), window.requestAnimationFrame((function e() {
                if (Bn(), et++, A) i.a.activate();
                else {
                    if (!Lt) return i.a.turnOffDisplay("LoginOverlay"),
                        function() {
                            s.fillStyle = "black", s.fillRect(0, 0, xt, kt), s.fillStyle = "white", s.fillRect(xt / 2 - 128, kt / 2 - 32, 256, 64), s.fillStyle = "black", s.fillRect(xt / 2 - 128 + 8, kt / 2 - 32 + 8, 240, 48), s.fillStyle = "white", s.fillRect(xt / 2 - 128 + 16, kt / 2 - 32 + 16, (xn[0] + Nn[0]) / (xn[1] + Nn[1]) * 224, 32), s.textAlign = "center", s.font = "30px Nasa", s.fillText(splash, xt / 2, kt / 2 - 96), s.font = "15px Nasa", Nn[0] == Nn[1] && s.fillText("All images loaded.", xt / 2, kt / 2 + 64);
                            xn[0] == xn[1] && s.fillText("All sounds loaded", xt / 2, kt / 2 + 80);
                            s.fillText(lt, xt / 2, kt / 2 + 96)
                        }(), setTimeout(Bn, 5), void window.requestAnimationFrame(e);
                    i.a.turnOnDisplay("LoginOverlay"), 0 == be++ && En("music1", "https://cdn.discordapp.com/attachments/658471777361723393/658666793107456000/Babylon_5_-_Season_5_Main_Titles_Instrumental.mp3"), u.width = u.width, s.fillStyle = "black", s.fillRect(0, 0, xt, kt);
                    var t = Math.exp(be / 15),
                        n = 1.885 * (t / (1 + t) - .47);
                    be > 100 && (n = 1), s.translate(xt / 2, kt / 2), s.scale(n, n), s.translate(-xt / 2, -kt / 2);
                    var r = (new Date).getTime() / 6e3,
                        a = 100 * (Math.hypot(_e, 256) - 256);
                    I = 3200 * (32 + Math.sin(4 * r)), N = 3200 * (32 + Math.cos(5 * r)), k = -xt / 3 * Math.cos(4 * r), E = kt / 3 * Math.sin(5 * r), _e > 0 && (E += a), Er(!0);
                    var o = 4e3 * Math.sin(5 * r),
                        l = 3200 * Math.cos(4 * r),
                        c = Math.hypot(o, l) / 100,
                        f = Math.random(),
                        d = -Math.atan2(5 * Math.sin(5 * r), 4 * Math.cos(4 * r));
                    f < .05 && (it && Mn("minigun", .1), mt[f] = {
                        x: I,
                        y: N,
                        vx: 12800 / 6e3 * 20 * Math.cos(4 * r) + 40 * Math.cos(d),
                        vy: -16e3 / 6e3 * 20 * Math.sin(5 * r) + 40 * Math.sin(d),
                        id: f,
                        angle: d,
                        wepnID: 0,
                        color: "red"
                    });
                    var p = An[14];
                    if (void 0 === p || 2 == p) return An[14] = 2, 2 != p && Rn(!0, 14), void window.requestAnimationFrame(e);
                    var h = p.width,
                        m = p.height,
                        g = xt / 2 + k,
                        v = kt / 2 + E;
                    s.save(), s.translate(g, v), s.drawImage(In.astUnderlayRed, -h, -m, 2 * h, 2 * m), s.rotate(d + Math.PI / 2);
                    var y = 38.4 * Math.sqrt(h / 64),
                        b = 1.4 * c * h / 64 + Math.random() * h / 25;
                    c > 0 && s.drawImage(In.fire, 0, 64 * Math.floor(8 * Math.random()), 64, 64, -y / 2, 0, y, b), s.restore(), s.save(), s.translate(g, v), s.rotate(d + Math.PI / 2), s.drawImage(p, -h / 2, -m / 2), s.restore();
                    for (var _ = 0; _ < 4; _++) {
                        var w = 3200 * (32 + Math.sin(4 * r + .2)) + 192 * sr(4 * r + 3 * _ * Math.E),
                            x = 3200 * (32 + Math.cos(5 * r + .2)) + 192 * sr(4 * r + 3 * _ * Math.E + 61.23);
                        for (var S in mt) {
                            var T = mt[S];
                            lr(T.x - w) + lr(T.y - x) < 2048 && (delete mt[S], ft[Math.random()] = {
                                x: T.x,
                                y: T.y,
                                time: 0,
                                shockwave: !1
                            }, it && Mn("boom", .35))
                        }
                        if (void 0 === (p = Pn[2 * _]) || 2 == p) return Pn[2 * _] = 2, 2 != p && Rn(!1, 2 * _), void window.requestAnimationFrame(e);
                        h = p.width, m = p.height, g = w - I + xt / 2 + k, v = x - N + kt / 2 + E, s.save(), s.translate(g, v), s.drawImage(In.astUnderlay, -h, -m, 2 * h, 2 * m), d = -Math.atan2(5 * Math.sin(5 * r), 4 * Math.cos(4 * r)), s.rotate(d + Math.PI / 2), y = 38.4 * Math.sqrt(h / 64), b = 1.4 * c * h / 64 + Math.random() * h / 25, c > 0 && s.drawImage(In.fire, 0, 64 * Math.floor(8 * Math.random()), 64, 64, -y / 2, 0, y, b), s.restore(), s.save(), s.translate(g, v), s.rotate(d + Math.PI / 2), s.drawImage(p, -h / 2, -m / 2), s.restore()
                    }
                    for (var S in mt) Math.random() < .01 && delete mt[S];
                    if (Rr(), vr(), s.setTransform(1, 0, 0, 1, 0, 0), be < 10 && (s.globalAlpha = 1 - be / 10, s.fillStyle = "black", s.fillRect(0, 0, xt, kt), s.globalAlpha = 1), s.drawImage(In.grad, 0, 0, xt, kt), Ar(), P) return i.a.turnOffDisplay("LoginOverlay"),
                        function() {
                            et = 1e3, s.fillStyle = O ? "pink" : "cyan", s.font = "22px Nasa", Vn(jsn.lore[O ? 0 : 1], 48, kt / 2 - 110 - 1e4 / (_e + 1), xt - 96, 40), s.textAlign = "center", s.fillStyle = "yellow";
                            var e = (new Date).getTime() / 6e3;
                            s.font = (32 + 6 * Math.sin(24 * e)) * (_e / (_e + 50)) + "px Nasa", s.fillText(mEng[80], xt / 2, kt - 48)
                        }(), _e++, void window.requestAnimationFrame(e)
                }
                window.requestAnimationFrame(e)
            })), document.onkeydown = function(e) {
                if (A || P || 13 != e.keyCode) {
                    if (A && -1 != se) {
                        if (16 === e.keyCode) return 1 != _t[0] && g.emit("key", {
                            inputId: "shift",
                            state: !0
                        }), _t[0] = !0, Re = 45e3, void!0;
                        if (typing) 13 == e.keyCode && (i.a.unfocusChat(), typing = !1);
                        else {
                            if (Me) return;
                            if (13 == e.keyCode) i.a.focusChat(), typing = !0;
                            else if (78 == e.keyCode && le && 8 == se) ce = -1, se = 1;
                            else if (89 == e.keyCode && le && 8 == se) g.emit("sellW", {
                                slot: ce
                            }), ce = -1, et = 0, se = 1;
                            else if (66 == e.keyCode && le && 7 == se && 0 != Ae && ue) g.emit("buyW", {
                                slot: mn,
                                weapon: Ae - 20
                            }), et = 0, se = 1;
                            else if (e.keyCode > 48 && e.keyCode < 58 && -2 != yn[e.keyCode - 49]) g.emit("equip", {
                                scroll: e.keyCode - 49
                            });
                            else if (48 == e.keyCode && -2 != yn[e.keyCode - 49]) g.emit("equip", {
                                scroll: 9
                            });
                            else if (83 === e.keyCode || 40 === e.keyCode) 1 != _t[1] && g.emit("key", {
                                inputId: "s",
                                state: !0
                            }), _t[1] = !0, Re = 45e3;
                            else if (192 === e.keyCode) Je = !Je;
                            else if (69 === e.keyCode) 1 != _t[2] && g.emit("key", {
                                inputId: "e",
                                state: !0
                            }), _t[2] = !0, Re = 45e3;
                            else if (87 === e.keyCode || 38 === e.keyCode) 1 != _t[3] && g.emit("key", {
                                inputId: "w",
                                state: !0
                            }), _t[3] = !0, tn = !0, Re = 45e3;
                            else if (65 === e.keyCode || 37 === e.keyCode) 1 != _t[4] && g.emit("key", {
                                inputId: "a",
                                state: !0
                            }), _t[4] = !0, nn = !0, Re = 45e3;
                            else if (68 === e.keyCode || 39 === e.keyCode) 1 != _t[5] && g.emit("key", {
                                inputId: "d",
                                state: !0
                            }), _t[5] = !0, nn = !0, Re = 45e3;
                            else if (32 === e.keyCode) 1 != _t[6] && g.emit("key", {
                                inputId: " ",
                                state: !0
                            }), _t[6] = !0, yn[mn] < 0 && (Qt = 20), Re = 45e3;
                            else if (81 === e.keyCode) 1 != _t[7] && g.emit("key", {
                                inputId: "q",
                                state: !0
                            }), _t[7] = !0, Re = 45e3;
                            else if (88 === e.keyCode || 27 === e.keyCode) {
                                if (He) return;
                                1 != _t[8] && g.emit("key", {
                                    inputId: "x",
                                    state: !0
                                }), _t[8] = !0, et > 300 && (et = 0), se = 0, i.a.turnOffRegister(""), Re = 45e3, g.emit("equip", {
                                    scroll: mn
                                })
                            } else if (Ie > 15 && (86 === e.keyCode || 67 === e.keyCode)) {
                                if (He) return;
                                1 != _t[9] && g.emit("key", {
                                    inputId: "c",
                                    state: !0
                                }), _t[9] = !0, Re = 45e3
                            }
                        }
                    }
                } else document.getElementById("loginButton").click()
            }, document.onkeyup = function(e) {
                if (!typing && 80 === e.keyCode && !le) return Me ^= !0, void(-1 == Un[0] && fr([256, "Autopilot " + (Me ? "E" : "Dise") + "ngaged!", "Press P to toggle.", ""]));
                if (!Me && A && -1 != se) {
                    var t = !0;
                    83 === e.keyCode || 40 === e.keyCode ? (_t[1] = !1, g.emit("key", {
                        inputId: "s",
                        state: !1
                    })) : 69 === e.keyCode ? _t[2] = !1 : 87 === e.keyCode || 38 === e.keyCode ? (_t[3] = !1, g.emit("key", {
                        inputId: "w",
                        state: !1
                    })) : 65 === e.keyCode || 37 === e.keyCode ? (_t[4] = !1, g.emit("key", {
                        inputId: "a",
                        state: !1
                    })) : 68 === e.keyCode || 39 === e.keyCode ? (_t[5] = !1, g.emit("key", {
                        inputId: "d",
                        state: !1
                    })) : 32 === e.keyCode ? (_t[6] = !1, g.emit("key", {
                        inputId: " ",
                        state: !1
                    })) : 81 === e.keyCode ? _t[7] = !1 : 88 === e.keyCode || 27 === e.keyCode ? _t[8] = !1 : Ie > 15 && (86 === e.keyCode || 67 === e.keyCode) ? (1 == _t[9] && g.emit("key", {
                        inputId: "c",
                        state: !1
                    }), _t[9] = !1) : 16 === e.keyCode ? (_t[0] = !1, !1, g.emit("key", {
                        inputId: "shift",
                        state: !1
                    })) : t = !1, t && (Re = 45e3)
                }
            }, document.addEventListener("mousemove", (function(e) {
                var t = y,
                    n = b,
                    r = rr(u, e);
                y = r.x, b = r.y, 1 == _ && y > xt - 32 - 20 - 128 && y < xt - 32 - 20 && b > kt - 52 && (pe = (y + 20 + 32 + 128 - xt) / 128), y > xt - 32 - 20 - 128 && b > kt - 52 && (de = 1);
                var a = Ae;
                if (Ut && 0 == se && le && y > Et + 768 - 256 && y < Et + 768 && b > St + 256 - 40 && b < St + 256 + 120) Ae = 600;
                else if (1 == se && le && y > Et + 256 + 48 && y < Et + 256 + 48 + s.measureText(mEng[12]).width && b > St + 64 && b < St + 80) Ae = 610;
                else if (1 == se && le && y > Et + 768 - 16 - s.measureText(mEng[14]).width && y < Et + 768 - 16 && b > St + 512 - 32 && b < St + 512 - 16) Ae = 611;
                else if (1 == _ && le && 1 == se && y > Et + 512 - 16 && y < Et + 768 - 16 && b < St + 512 - 16 && b > St + 256 - 16) {
                    var o = y - t;
                    zn((b - n) / 4), Fn(o / 4)
                } else if (1 == _ && le && 0 == se && y > Et && y < Et + 512 && b < St + 512 && b > St + 40) {
                    o = y - t;
                    zn((b - n) / 4), Fn(o / 4)
                } else if (le && 2 == se && y > 16 + Et && y < Et + 768 - 16 && b > St + 40 + 32 && b < St + 512 - 48 && 0 == M) Ae = Math.floor((b - St - 40 - 32) / 80) + 300, y > Et + 384 && (Ae += 5);
                else if (1 == se && le && y > Et + 256 - 32 && y < Et + 264 && b < St + 84 + 128 - 16 && b > St + 84) Ae = 5 + Math.floor((b - 84 - St) / 32), Math.floor((b - 84 - St) / 16) % 2 == 1 && (Ae = 0);
                else if (1 == se && le && b > St + 246 && b < St + 240 + 160 && y > Et + 256 + 32 && y < Et + 256 + 78) Ae = Math.floor((b - St - 246) / 16 + 10);
                else if (1 == se && le && b > St + 256 - 30 && b < St + 256 - 16 && y > Et + 512 - 64 && y < Et + 512 - 64 + s.measureText(mEng[18]).width) Ae = 601;
                else if (7 == se && le && b > St + 40 + 52 && b < St + 76 + 16 * (Math.ceil(cn.length / 3) + 1) && y > Et + 16 && y < Et + 16 + 48) Ae = hr(Math.floor((b - St - 40 - 52) / 16)) + 20;
                else if (7 == se && le && b > St + 40 + 52 && b < St + 76 + 16 * (Math.ceil(cn.length / 3) + 1) && y > Et + 16 + 240 && y < Et + 16 + 240 + 48) Ae = hr(Math.floor((b - St - 40 - 52) / 16 + Math.ceil(cn.length / 3))) + 20;
                else if (7 == se && le && b > St + 40 + 52 && b < St + 76 + 16 * (Math.ceil(cn.length / 3) + 1) && y > Et + 16 + 480 && y < Et + 16 + 480 + 48) Ae = hr(Math.floor((b - St - 40 - 52) / 16 + 2 * Math.ceil(cn.length / 3))) + 20;
                else if (le && 1 == se && b > St + 256 - 16 && b < St + 512 - 16 && y > Et + 16 && y < Et + 256 + 16) Ae = b > St + 256 + 128 + 32 ? 100 : 0;
                else if (le && 3 == se && b > St + 416 - 64 && b < St + 416 - 64 + 48 && y > Et + 64 && y < Et + 64 + 112) Ae = 200;
                else if (le && 3 == se && b > St + 416 - 64 && b < St + 416 - 64 + 48 && y > Et + 192 && y < Et + 192 + 112) Ae = 201;
                else if (le && 3 == se && b > St + 416 && b < St + 416 + 48 && y > Et + 64 && y < Et + 64 + 112) Ae = 202;
                else if (le && 3 == se && b > St + 416 && b < St + 416 + 48 && y > Et + 192 && y < Et + 192 + 112) Ae = 203;
                else if (le && 3 == se && b > St + 416 - 64 && b < St + 416 - 64 + 48 && y > Et + 320 && y < Et + 320 + 112) Ae = 204;
                else if (le && 3 == se && b > St + 416 && b < St + 416 + 48 && y > Et + 320 && y < Et + 320 + 112) Ae = 205;
                else if (le && 5 == se && b > St + 40 && b < St + 512 && y > Et && y < Et + 768) {
                    var i = Math.floor((y - Et) / 256),
                        l = Math.floor((b - St - 40) / (472 / 3));
                    Ae = 1 == l ? 503 : 500 + i + 2 * l
                } else le && 3 == se && b > St + 44 + 64 - 24 && b < St + 44 + 64 + 168 && y > Et + 512 && y < Et + 768 ? (701 == (Ae = 700 + Math.floor((b - St - 44 - 64 + 24) / 32)) && !Ln[12] || 702 == Ae && !Ln[24] || 703 == Ae && !Ln[36] || 704 == Ae && !Ln[47] || 705 == Ae) && (Ae = 0) : Ae = y < 544 && y > 448 && b > kt - 32 ? 800 : 0;
                0 != Ae && Ae != a && Mn("button2", .2)
            }), !1), document.addEventListener("mousedown", (function(e) {
                if (it = !0, _ = 1, !P || A) {
                    y > xt - 32 - 20 - 128 && y < xt - 32 - 20 && b > kt - 52 && (pe = (y + 20 + 32 + 128 - xt) / 128);
                    var t = rr(u, e);
                    y = t.x, b = t.y, y < 400 && y > 9 && b > kt - 32 && b < kt - 8 ? (typing = !0, i.a.focusChat()) : typing = !1;
                    var n = Ae;
                    if (0 != n || Kt || (Kt = !0, (y < xt - 32 - 20 - 128 - 16 || b < kt - 92) && (y > 544 || b < kt - 216) && (g.emit("key", {
                            inputId: " ",
                            state: !0
                        }), Re = 45e3), yn[mn] < 0 && (Qt = 20)), 500 == n && window.open("https://tornspace.wikia.com/wiki/Torn.space_Wiki", "_blank"), 501 == n && window.open("/store", "_blank"), 502 == n && window.open("/leaderboard", "_blank"), 503 == n && window.open("/contact", "_blank"), 504 == n && window.open("https://www.youtube.com/channel/UCKsbC4GfoPOcyifiwW1GA4w", "_blank"), 505 == n && window.open("https://discord.gg/wFsdUcY", "_blank"), 506 == n && window.open("/credits", "_blank"), 600 == n && Ut && (i.a.turnOnRegister(""), et = 0, se = -1), 601 == n && (et = 0, se = 7, ue = !1), 610 == n && g.emit("sell", {
                            item: "all"
                        }), 611 == n && g.emit("buyLife", {}), n >= 300 && n < 310 && 0 == M && g.emit("quest", {
                            quest: n - 300
                        }), le && 3 == se && n > 199 && n < 206 && g.emit("upgrade", {
                            item: n - 200
                        }), le && y > Et && y < Et + 768 && b > St && b < St + 40 && (et = 0, se = Math.floor((y - Et) / 128)), n >= 700 && n < 705 && g.emit("trail", {
                            trail: n - 700
                        }), 800 == n && (ge = (ge + 1) % 2, g.emit("toggleGlobal", {}), xr()), le && y > Et + 256 - 32 && y < Et + 264 && b < St + 84 + 128 - 16 && b > St + 84) {
                        var r = "";
                        5 == n ? r = "iron" : 6 == n ? r = "silver" : 7 == n ? r = "platinum" : 8 == n && (r = "aluminium"), g.emit("sell", {
                            item: r
                        })
                    } else le && 1 == se && b > St + 246 && b < St + 240 + 160 && y > Et + 256 + 32 && y < Et + 256 + 78 ? -1 == yn[n - 10] ? (et = 0, se = 7, ue = !0, mn = n - 10) : yn[n - 10] > -1 && (et = 0, se = 8, ce = n - 10) : le && 1 == se && b > St + 256 - 16 && b < St + 512 - 16 && y > Et + 16 && y < Et + 256 + 16 && (b > St + 256 + 128 + 32 ? g.emit("buyShip", {
                        ship: fe
                    }) : y > Et + 16 + 128 && fe < fn.length - 1 ? fe++ : y < Et + 16 + 128 && fe > 0 && fe--);
                    0 != n && 600 != n && i.a.turnOffRegister("")
                } else g.emit("guest", "v2-32-g8110b8a")
            }), !1), document.addEventListener("mouseup", (function(e) {
                _ = 0, Kt && (g.emit("key", {
                    inputId: " ",
                    state: !1
                }), Re = 45e3, Kt = !1)
            }), !1), document.addEventListener("mousewheel", (function(e) {
                var t = Math.sign(e.wheelDelta);
                y < 544 && b > kt - 216 ? me = Math.max(0, Math.min(he - 10, me + t)) : yn[mn] > 0 && (le || mn - t < 0 || mn - t >= yn.length || yn[mn - t] < -1) || -2 == yn[mn - t] || g.emit("equip", {
                    scroll: mn - t
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
    var r = n(3),
        a = "function" == typeof Symbol && Symbol.for,
        o = a ? Symbol.for("react.element") : 60103,
        i = a ? Symbol.for("react.portal") : 60106,
        l = a ? Symbol.for("react.fragment") : 60107,
        u = a ? Symbol.for("react.strict_mode") : 60108,
        s = a ? Symbol.for("react.profiler") : 60114,
        c = a ? Symbol.for("react.provider") : 60109,
        f = a ? Symbol.for("react.context") : 60110,
        d = a ? Symbol.for("react.forward_ref") : 60112,
        p = a ? Symbol.for("react.suspense") : 60113;
    a && Symbol.for("react.suspense_list");
    var h = a ? Symbol.for("react.memo") : 60115,
        m = a ? Symbol.for("react.lazy") : 60116;
    a && Symbol.for("react.fundamental"), a && Symbol.for("react.responder"), a && Symbol.for("react.scope");
    var g = "function" == typeof Symbol && Symbol.iterator;

    function v(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var y = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        b = {};

    function _(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || y
    }

    function w() {}

    function x(e, t, n) {
        this.props = e, this.context = t, this.refs = b, this.updater = n || y
    }
    _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(v(85));
        this.updater.enqueueSetState(this, e, t, "setState")
    }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, w.prototype = _.prototype;
    var k = x.prototype = new w;
    k.constructor = x, r(k, _.prototype), k.isPureReactComponent = !0;
    var E = {
            current: null
        },
        S = {
            current: null
        },
        T = Object.prototype.hasOwnProperty,
        M = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function A(e, t, n) {
        var r, a = {},
            i = null,
            l = null;
        if (null != t)
            for (r in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = "" + t.key), t) T.call(t, r) && !M.hasOwnProperty(r) && (a[r] = t[r]);
        var u = arguments.length - 2;
        if (1 === u) a.children = n;
        else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            a.children = s
        }
        if (e && e.defaultProps)
            for (r in u = e.defaultProps) void 0 === a[r] && (a[r] = u[r]);
        return {
            $$typeof: o,
            type: e,
            key: i,
            ref: l,
            props: a,
            _owner: S.current
        }
    }

    function P(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var C = /\/+/g,
        I = [];

    function N(e, t, n, r) {
        if (I.length) {
            var a = I.pop();
            return a.result = e, a.keyPrefix = t, a.func = n, a.context = r, a.count = 0, a
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }

    function O(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > I.length && I.push(e)
    }

    function D(e, t, n) {
        return null == e ? 0 : function e(t, n, r, a) {
            var l = typeof t;
            "undefined" !== l && "boolean" !== l || (t = null);
            var u = !1;
            if (null === t) u = !0;
            else switch (l) {
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case i:
                            u = !0
                    }
            }
            if (u) return r(a, t, "" === n ? "." + R(t, 0) : n), 1;
            if (u = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                for (var s = 0; s < t.length; s++) {
                    var c = n + R(l = t[s], s);
                    u += e(l, c, r, a)
                } else if (null === t || "object" != typeof t ? c = null : c = "function" == typeof(c = g && t[g] || t["@@iterator"]) ? c : null, "function" == typeof c)
                    for (t = c.call(t), s = 0; !(l = t.next()).done;) u += e(l = l.value, c = n + R(l, s++), r, a);
                else if ("object" === l) throw r = "" + t, Error(v(31, "[object Object]" === r ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, ""));
            return u
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

    function L(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function U(e, t, n) {
        var r = e.result,
            a = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, r, n, (function(e) {
            return e
        })) : null != e && (P(e) && (e = function(e, t) {
            return {
                $$typeof: o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, a + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(C, "$&/") + "/") + n)), r.push(e))
    }

    function z(e, t, n, r, a) {
        var o = "";
        null != n && (o = ("" + n).replace(C, "$&/") + "/"), D(e, U, t = N(t, o, r, a)), O(t)
    }

    function F() {
        var e = E.current;
        if (null === e) throw Error(v(321));
        return e
    }
    var j = {
            Children: {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return z(e, r, null, t, n), r
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    D(e, L, t = N(null, null, t, n)), O(t)
                },
                count: function(e) {
                    return D(e, (function() {
                        return null
                    }), null)
                },
                toArray: function(e) {
                    var t = [];
                    return z(e, t, null, (function(e) {
                        return e
                    })), t
                },
                only: function(e) {
                    if (!P(e)) throw Error(v(143));
                    return e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: _,
            PureComponent: x,
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
                return F().useCallback(e, t)
            },
            useContext: function(e, t) {
                return F().useContext(e, t)
            },
            useEffect: function(e, t) {
                return F().useEffect(e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return F().useImperativeHandle(e, t, n)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return F().useLayoutEffect(e, t)
            },
            useMemo: function(e, t) {
                return F().useMemo(e, t)
            },
            useReducer: function(e, t, n) {
                return F().useReducer(e, t, n)
            },
            useRef: function(e) {
                return F().useRef(e)
            },
            useState: function(e) {
                return F().useState(e)
            },
            Fragment: l,
            Profiler: s,
            StrictMode: u,
            Suspense: p,
            createElement: A,
            cloneElement: function(e, t, n) {
                if (null == e) throw Error(v(267, e));
                var a = r({}, e.props),
                    i = e.key,
                    l = e.ref,
                    u = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (l = t.ref, u = S.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (c in t) T.call(t, c) && !M.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) a.children = n;
                else if (1 < c) {
                    s = Array(c);
                    for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
                    a.children = s
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: i,
                    ref: l,
                    props: a,
                    _owner: u
                }
            },
            createFactory: function(e) {
                var t = A.bind(null, e);
                return t.type = e, t
            },
            isValidElement: P,
            version: "16.12.0",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: E,
                ReactCurrentBatchConfig: {
                    suspense: null
                },
                ReactCurrentOwner: S,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: r
            }
        },
        B = {
            default: j
        },
        H = B && j || B;
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
        a = n(3),
        o = n(10);

    function i(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    if (!r) throw Error(i(227));
    var l = null,
        u = {};

    function s() {
        if (l)
            for (var e in u) {
                var t = u[e],
                    n = l.indexOf(e);
                if (!(-1 < n)) throw Error(i(96, e));
                if (!f[n]) {
                    if (!t.extractEvents) throw Error(i(97, e));
                    for (var r in f[n] = t, n = t.eventTypes) {
                        var a = void 0,
                            o = n[r],
                            s = t,
                            p = r;
                        if (d.hasOwnProperty(p)) throw Error(i(99, p));
                        d[p] = o;
                        var h = o.phasedRegistrationNames;
                        if (h) {
                            for (a in h) h.hasOwnProperty(a) && c(h[a], s, p);
                            a = !0
                        } else o.registrationName ? (c(o.registrationName, s, p), a = !0) : a = !1;
                        if (!a) throw Error(i(98, r, e))
                    }
                }
            }
    }

    function c(e, t, n) {
        if (p[e]) throw Error(i(100, e));
        p[e] = t, h[e] = t.eventTypes[n].dependencies
    }
    var f = [],
        d = {},
        p = {},
        h = {};

    function m(e, t, n, r, a, o, i, l, u) {
        var s = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(n, s)
        } catch (e) {
            this.onError(e)
        }
    }
    var g = !1,
        v = null,
        y = !1,
        b = null,
        _ = {
            onError: function(e) {
                g = !0, v = e
            }
        };

    function w(e, t, n, r, a, o, i, l, u) {
        g = !1, v = null, m.apply(_, arguments)
    }
    var x = null,
        k = null,
        E = null;

    function S(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = E(n),
            function(e, t, n, r, a, o, l, u, s) {
                if (w.apply(this, arguments), g) {
                    if (!g) throw Error(i(198));
                    var c = v;
                    g = !1, v = null, y || (y = !0, b = c)
                }
            }(r, t, void 0, e), e.currentTarget = null
    }

    function T(e, t) {
        if (null == t) throw Error(i(30));
        return null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function M(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var A = null;

    function P(e) {
        if (e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) S(e, t[r], n[r]);
            else t && S(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }

    function C(e) {
        if (null !== e && (A = T(A, e)), e = A, A = null, e) {
            if (M(e, P), A) throw Error(i(95));
            if (y) throw e = b, y = !1, b = null, e
        }
    }
    var I = {
        injectEventPluginOrder: function(e) {
            if (l) throw Error(i(101));
            l = Array.prototype.slice.call(e), s()
        },
        injectEventPluginsByName: function(e) {
            var t, n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    if (!u.hasOwnProperty(t) || u[t] !== r) {
                        if (u[t]) throw Error(i(102, t));
                        u[t] = r, n = !0
                    }
                }
            n && s()
        }
    };

    function N(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = x(n);
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
        if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
        return n
    }
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    O.hasOwnProperty("ReactCurrentDispatcher") || (O.ReactCurrentDispatcher = {
        current: null
    }), O.hasOwnProperty("ReactCurrentBatchConfig") || (O.ReactCurrentBatchConfig = {
        suspense: null
    });
    var D = /^(.*)[\\\/]/,
        R = "function" == typeof Symbol && Symbol.for,
        L = R ? Symbol.for("react.element") : 60103,
        U = R ? Symbol.for("react.portal") : 60106,
        z = R ? Symbol.for("react.fragment") : 60107,
        F = R ? Symbol.for("react.strict_mode") : 60108,
        j = R ? Symbol.for("react.profiler") : 60114,
        B = R ? Symbol.for("react.provider") : 60109,
        H = R ? Symbol.for("react.context") : 60110,
        W = R ? Symbol.for("react.concurrent_mode") : 60111,
        V = R ? Symbol.for("react.forward_ref") : 60112,
        q = R ? Symbol.for("react.suspense") : 60113,
        $ = R ? Symbol.for("react.suspense_list") : 60120,
        G = R ? Symbol.for("react.memo") : 60115,
        Q = R ? Symbol.for("react.lazy") : 60116;
    R && Symbol.for("react.fundamental"), R && Symbol.for("react.responder"), R && Symbol.for("react.scope");
    var K = "function" == typeof Symbol && Symbol.iterator;

    function X(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = K && e[K] || e["@@iterator"]) ? e : null
    }

    function Y(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case z:
                return "Fragment";
            case U:
                return "Portal";
            case j:
                return "Profiler";
            case F:
                return "StrictMode";
            case q:
                return "Suspense";
            case $:
                return "SuspenseList"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case H:
                return "Context.Consumer";
            case B:
                return "Context.Provider";
            case V:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case G:
                return Y(e.type);
            case Q:
                if (e = 1 === e._status ? e._result : null) return Y(e)
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
                        a = e._debugSource,
                        o = Y(e.type);
                    n = null, r && (n = Y(r.type)), r = o, o = "", a ? o = " (at " + a.fileName.replace(D, "") + ":" + a.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
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
        if (e = k(e)) {
            if ("function" != typeof ee) throw Error(i(280));
            var t = x(e.stateNode);
            ee(e.stateNode, e.type, t)
        }
    }

    function ae(e) {
        te ? ne ? ne.push(e) : ne = [e] : te = e
    }

    function oe() {
        if (te) {
            var e = te,
                t = ne;
            if (ne = te = null, re(e), t)
                for (e = 0; e < t.length; e++) re(t[e])
        }
    }

    function ie(e, t) {
        return e(t)
    }

    function le(e, t, n, r) {
        return e(t, n, r)
    }

    function ue() {}
    var se = ie,
        ce = !1,
        fe = !1;

    function de() {
        null === te && null === ne || (ue(), oe())
    }
    new Map;
    var pe = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        he = Object.prototype.hasOwnProperty,
        me = {},
        ge = {};

    function ve(e, t, n, r, a, o) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o
    }
    var ye = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
        ye[e] = new ve(e, 0, !1, e, null, !1)
    })), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach((function(e) {
        var t = e[0];
        ye[t] = new ve(t, 1, !1, e[1], null, !1)
    })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
        ye[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1)
    })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
        ye[e] = new ve(e, 2, !1, e, null, !1)
    })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
        ye[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1)
    })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
        ye[e] = new ve(e, 3, !0, e, null, !1)
    })), ["capture", "download"].forEach((function(e) {
        ye[e] = new ve(e, 4, !1, e, null, !1)
    })), ["cols", "rows", "size", "span"].forEach((function(e) {
        ye[e] = new ve(e, 6, !1, e, null, !1)
    })), ["rowSpan", "start"].forEach((function(e) {
        ye[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1)
    }));
    var be = /[\-:]([a-z])/g;

    function _e(e) {
        return e[1].toUpperCase()
    }

    function we(e) {
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

    function xe(e, t, n, r) {
        var a = ye.hasOwnProperty(t) ? ye[t] : null;
        (null !== a ? 0 === a.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
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
        }(t, n, a, r) && (n = null), r || null === a ? function(e) {
            return !!he.call(ge, e) || !he.call(me, e) && (pe.test(e) ? ge[e] = !0 : (me[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : a.mustUseProperty ? e[a.propertyName] = null === n ? 3 !== a.type && "" : n : (t = a.attributeName, r = a.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (a = a.type) || 4 === a && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }

    function ke(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function Ee(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = ke(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var a = n.get,
                    o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return a.call(this)
                    },
                    set: function(e) {
                        r = "" + e, o.call(this, e)
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

    function Se(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = ke(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }

    function Te(e, t) {
        var n = t.checked;
        return a({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function Me(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
        n = we(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function Ae(e, t) {
        null != (t = t.checked) && xe(e, "checked", t, !1)
    }

    function Pe(e, t) {
        Ae(e, t);
        var n = we(t.value),
            r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? Ie(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ie(e, t.type, we(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Ce(e, t, n) {
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
        return e = a({
            children: void 0
        }, t), (t = function(e) {
            var t = "";
            return r.Children.forEach(e, (function(e) {
                null != e && (t += e)
            })), t
        }(t.children)) && (e.children = t), e
    }

    function Oe(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++) a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + we(n), t = null, a = 0; a < e.length; a++) {
                if (e[a].value === n) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                null !== t || e[a].disabled || (t = e[a])
            }
            null !== t && (t.selected = !0)
        }
    }

    function De(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return a({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Re(e, t) {
        var n = t.value;
        if (null == n) {
            if (n = t.defaultValue, null != (t = t.children)) {
                if (null != n) throw Error(i(92));
                if (Array.isArray(t)) {
                    if (!(1 >= t.length)) throw Error(i(93));
                    t = t[0]
                }
                n = t
            }
            null == n && (n = "")
        }
        e._wrapperState = {
            initialValue: we(n)
        }
    }

    function Le(e, t) {
        var n = we(t.value),
            r = we(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function Ue(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
        var t = e.replace(be, _e);
        ye[t] = new ve(t, 1, !1, e, null, !1)
    })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
        var t = e.replace(be, _e);
        ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1)
    })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
        var t = e.replace(be, _e);
        ye[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1)
    })), ["tabIndex", "crossOrigin"].forEach((function(e) {
        ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1)
    })), ye.xlinkHref = new ve("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(e) {
        ye[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0)
    }));
    var ze = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function Fe(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function je(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? Fe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var Be, He = function(e) {
        return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, a) {
            MSApp.execUnsafeLocalFunction((function() {
                return e(t, n)
            }))
        } : e
    }((function(e, t) {
        if (e.namespaceURI !== ze.svg || "innerHTML" in e) e.innerHTML = t;
        else {
            for ((Be = Be || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Be.firstChild; e.firstChild;) e.removeChild(e.firstChild);
            for (; t.firstChild;) e.appendChild(t.firstChild)
        }
    }));

    function We(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }

    function Ve(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var qe = {
            animationend: Ve("Animation", "AnimationEnd"),
            animationiteration: Ve("Animation", "AnimationIteration"),
            animationstart: Ve("Animation", "AnimationStart"),
            transitionend: Ve("Transition", "TransitionEnd")
        },
        $e = {},
        Ge = {};

    function Qe(e) {
        if ($e[e]) return $e[e];
        if (!qe[e]) return e;
        var t, n = qe[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in Ge) return $e[e] = n[t];
        return e
    }
    Z && (Ge = document.createElement("div").style, "AnimationEvent" in window || (delete qe.animationend.animation, delete qe.animationiteration.animation, delete qe.animationstart.animation), "TransitionEvent" in window || delete qe.transitionend.transition);
    var Ke = Qe("animationend"),
        Xe = Qe("animationiteration"),
        Ye = Qe("animationstart"),
        Je = Qe("transitionend"),
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
        if (et(e) !== e) throw Error(i(188))
    }

    function rt(e) {
        if (!(e = function(e) {
                var t = e.alternate;
                if (!t) {
                    if (null === (t = et(e))) throw Error(i(188));
                    return t !== e ? null : e
                }
                for (var n = e, r = t;;) {
                    var a = n.return;
                    if (null === a) break;
                    var o = a.alternate;
                    if (null === o) {
                        if (null !== (r = a.return)) {
                            n = r;
                            continue
                        }
                        break
                    }
                    if (a.child === o.child) {
                        for (o = a.child; o;) {
                            if (o === n) return nt(a), e;
                            if (o === r) return nt(a), t;
                            o = o.sibling
                        }
                        throw Error(i(188))
                    }
                    if (n.return !== r.return) n = a, r = o;
                    else {
                        for (var l = !1, u = a.child; u;) {
                            if (u === n) {
                                l = !0, n = a, r = o;
                                break
                            }
                            if (u === r) {
                                l = !0, r = a, n = o;
                                break
                            }
                            u = u.sibling
                        }
                        if (!l) {
                            for (u = o.child; u;) {
                                if (u === n) {
                                    l = !0, n = o, r = a;
                                    break
                                }
                                if (u === r) {
                                    l = !0, r = o, n = a;
                                    break
                                }
                                u = u.sibling
                            }
                            if (!l) throw Error(i(189))
                        }
                    }
                    if (n.alternate !== r) throw Error(i(190))
                }
                if (3 !== n.tag) throw Error(i(188));
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
    var at, ot, it, lt = !1,
        ut = [],
        st = null,
        ct = null,
        ft = null,
        dt = new Map,
        pt = new Map,
        ht = [],
        mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
        gt = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");

    function vt(e, t, n, r) {
        return {
            blockedOn: e,
            topLevelType: t,
            eventSystemFlags: 32 | n,
            nativeEvent: r
        }
    }

    function yt(e, t) {
        switch (e) {
            case "focus":
            case "blur":
                st = null;
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

    function bt(e, t, n, r, a) {
        return null === e || e.nativeEvent !== a ? (e = vt(t, n, r, a), null !== t && (null !== (t = pr(t)) && ot(t)), e) : (e.eventSystemFlags |= r, e)
    }

    function _t(e) {
        var t = dr(e.target);
        if (null !== t) {
            var n = et(t);
            if (null !== n)
                if (13 === (t = n.tag)) {
                    if (null !== (t = tt(n))) return e.blockedOn = t, void o.unstable_runWithPriority(e.priority, (function() {
                        it(n)
                    }))
                } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
        }
        e.blockedOn = null
    }

    function wt(e) {
        if (null !== e.blockedOn) return !1;
        var t = In(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
        if (null !== t) {
            var n = pr(t);
            return null !== n && ot(n), e.blockedOn = t, !1
        }
        return !0
    }

    function xt(e, t, n) {
        wt(e) && n.delete(t)
    }

    function kt() {
        for (lt = !1; 0 < ut.length;) {
            var e = ut[0];
            if (null !== e.blockedOn) {
                null !== (e = pr(e.blockedOn)) && at(e);
                break
            }
            var t = In(e.topLevelType, e.eventSystemFlags, e.nativeEvent);
            null !== t ? e.blockedOn = t : ut.shift()
        }
        null !== st && wt(st) && (st = null), null !== ct && wt(ct) && (ct = null), null !== ft && wt(ft) && (ft = null), dt.forEach(xt), pt.forEach(xt)
    }

    function Et(e, t) {
        e.blockedOn === t && (e.blockedOn = null, lt || (lt = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, kt)))
    }

    function St(e) {
        function t(t) {
            return Et(t, e)
        }
        if (0 < ut.length) {
            Et(ut[0], e);
            for (var n = 1; n < ut.length; n++) {
                var r = ut[n];
                r.blockedOn === e && (r.blockedOn = null)
            }
        }
        for (null !== st && Et(st, e), null !== ct && Et(ct, e), null !== ft && Et(ft, e), dt.forEach(t), pt.forEach(t), n = 0; n < ht.length; n++)(r = ht[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < ht.length && null === (n = ht[0]).blockedOn;) _t(n), null === n.blockedOn && ht.shift()
    }

    function Tt(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function Mt(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function At(e, t, n) {
        (t = N(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
    }

    function Pt(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = Mt(t);
            for (t = n.length; 0 < t--;) At(n[t], "captured", e);
            for (t = 0; t < n.length; t++) At(n[t], "bubbled", e)
        }
    }

    function Ct(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = N(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = T(n._dispatchListeners, t), n._dispatchInstances = T(n._dispatchInstances, e))
    }

    function It(e) {
        e && e.dispatchConfig.registrationName && Ct(e._targetInst, null, e)
    }

    function Nt(e) {
        M(e, Pt)
    }

    function Ot() {
        return !0
    }

    function Dt() {
        return !1
    }

    function Rt(e, t, n, r) {
        for (var a in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(a) && ((t = e[a]) ? this[a] = t(n) : "target" === a ? this.target = r : this[a] = n[a]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? Ot : Dt, this.isPropagationStopped = Dt, this
    }

    function Lt(e, t, n, r) {
        if (this.eventPool.length) {
            var a = this.eventPool.pop();
            return this.call(a, e, t, n, r), a
        }
        return new this(e, t, n, r)
    }

    function Ut(e) {
        if (!(e instanceof this)) throw Error(i(279));
        e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function zt(e) {
        e.eventPool = [], e.getPooled = Lt, e.release = Ut
    }
    a(Rt.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = Ot)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = Ot)
        },
        persist: function() {
            this.isPersistent = Ot
        },
        isPersistent: Dt,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = Dt, this._dispatchInstances = this._dispatchListeners = null
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
        var o = new t;
        return a(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = a({}, r.Interface, e), n.extend = r.extend, zt(n), n
    }, zt(Rt);
    var Ft = Rt.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        jt = Rt.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        Bt = Rt.extend({
            view: null,
            detail: null
        }),
        Ht = Bt.extend({
            relatedTarget: null
        });

    function Wt(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var Vt = {
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
        qt = {
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

    function Gt(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = $t[e]) && !!t[e]
    }

    function Qt() {
        return Gt
    }
    for (var Kt = Bt.extend({
            key: function(e) {
                if (e.key) {
                    var t = Vt[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = Wt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? qt[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Qt,
            charCode: function(e) {
                return "keypress" === e.type ? Wt(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? Wt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }), Xt = 0, Yt = 0, Jt = !1, Zt = !1, en = Bt.extend({
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
            getModifierState: Qt,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function(e) {
                if ("movementX" in e) return e.movementX;
                var t = Xt;
                return Xt = e.screenX, Jt ? "mousemove" === e.type ? e.screenX - t : 0 : (Jt = !0, 0)
            },
            movementY: function(e) {
                if ("movementY" in e) return e.movementY;
                var t = Yt;
                return Yt = e.screenY, Zt ? "mousemove" === e.type ? e.screenY - t : 0 : (Zt = !0, 0)
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
        }), rn = Bt.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Qt
        }), an = Rt.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }), on = en.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }), ln = [
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
            [Ke, "animationEnd", 2],
            [Xe, "animationIteration", 2],
            [Ye, "animationStart", 2],
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
        ], un = {}, sn = {}, cn = 0; cn < ln.length; cn++) {
        var fn = ln[cn],
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
        un[pn] = gn, sn[dn] = gn
    }
    var vn = {
            eventTypes: un,
            getEventPriority: function(e) {
                return void 0 !== (e = sn[e]) ? e.eventPriority : 2
            },
            extractEvents: function(e, t, n, r) {
                var a = sn[e];
                if (!a) return null;
                switch (e) {
                    case "keypress":
                        if (0 === Wt(n)) return null;
                    case "keydown":
                    case "keyup":
                        e = Kt;
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
                    case Ke:
                    case Xe:
                    case Ye:
                        e = Ft;
                        break;
                    case Je:
                        e = an;
                        break;
                    case "scroll":
                        e = Bt;
                        break;
                    case "wheel":
                        e = on;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = jt;
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
                return Nt(t = e.getPooled(a, t, n, r)), t
            }
        },
        yn = o.unstable_UserBlockingPriority,
        bn = o.unstable_runWithPriority,
        _n = vn.getEventPriority,
        wn = 10,
        xn = [];

    function kn(e) {
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
            var a = Tt(e.nativeEvent);
            r = e.topLevelType;
            for (var o = e.nativeEvent, i = e.eventSystemFlags, l = null, u = 0; u < f.length; u++) {
                var s = f[u];
                s && (s = s.extractEvents(r, t, o, a, i)) && (l = T(l, s))
            }
            C(l)
        }
    }
    var En = !0;

    function Sn(e, t) {
        Tn(t, e, !1)
    }

    function Tn(e, t, n) {
        switch (_n(t)) {
            case 0:
                var r = Mn.bind(null, t, 1);
                break;
            case 1:
                r = An.bind(null, t, 1);
                break;
            default:
                r = Cn.bind(null, t, 1)
        }
        n ? e.addEventListener(t, r, !0) : e.addEventListener(t, r, !1)
    }

    function Mn(e, t, n) {
        ce || ue();
        var r = Cn,
            a = ce;
        ce = !0;
        try {
            le(r, e, t, n)
        } finally {
            (ce = a) || de()
        }
    }

    function An(e, t, n) {
        bn(yn, Cn.bind(null, e, t, n))
    }

    function Pn(e, t, n, r) {
        if (xn.length) {
            var a = xn.pop();
            a.topLevelType = e, a.eventSystemFlags = t, a.nativeEvent = n, a.targetInst = r, e = a
        } else e = {
            topLevelType: e,
            eventSystemFlags: t,
            nativeEvent: n,
            targetInst: r,
            ancestors: []
        };
        try {
            if (t = kn, n = e, fe) t(n, void 0);
            else {
                fe = !0;
                try {
                    se(t, n, void 0)
                } finally {
                    fe = !1, de()
                }
            }
        } finally {
            e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, xn.length < wn && xn.push(e)
        }
    }

    function Cn(e, t, n) {
        if (En)
            if (0 < ut.length && -1 < mt.indexOf(e)) e = vt(null, e, t, n), ut.push(e);
            else {
                var r = In(e, t, n);
                null === r ? yt(e, n) : -1 < mt.indexOf(e) ? (e = vt(r, e, t, n), ut.push(e)) : function(e, t, n, r) {
                    switch (t) {
                        case "focus":
                            return st = bt(st, e, t, n, r), !0;
                        case "dragenter":
                            return ct = bt(ct, e, t, n, r), !0;
                        case "mouseover":
                            return ft = bt(ft, e, t, n, r), !0;
                        case "pointerover":
                            var a = r.pointerId;
                            return dt.set(a, bt(dt.get(a) || null, e, t, n, r)), !0;
                        case "gotpointercapture":
                            return a = r.pointerId, pt.set(a, bt(pt.get(a) || null, e, t, n, r)), !0
                    }
                    return !1
                }(r, e, t, n) || (yt(e, n), Pn(e, t, n, null))
            }
    }

    function In(e, t, n) {
        var r = Tt(n);
        if (null !== (r = dr(r))) {
            var a = et(r);
            if (null === a) r = null;
            else {
                var o = a.tag;
                if (13 === o) {
                    if (null !== (r = tt(a))) return r;
                    r = null
                } else if (3 === o) {
                    if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
                    r = null
                } else a !== r && (r = null)
            }
        }
        return Pn(e, t, n, r), null
    }

    function Nn(e) {
        if (!Z) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }
    var On = new("function" == typeof WeakMap ? WeakMap : Map);

    function Dn(e) {
        var t = On.get(e);
        return void 0 === t && (t = new Set, On.set(e, t)), t
    }

    function Rn(e, t, n) {
        if (!n.has(e)) {
            switch (e) {
                case "scroll":
                    Tn(t, "scroll", !0);
                    break;
                case "focus":
                case "blur":
                    Tn(t, "focus", !0), Tn(t, "blur", !0), n.add("blur"), n.add("focus");
                    break;
                case "cancel":
                case "close":
                    Nn(e) && Tn(t, e, !0);
                    break;
                case "invalid":
                case "submit":
                case "reset":
                    break;
                default:
                    -1 === Ze.indexOf(e) && Sn(e, t)
            }
            n.add(e)
        }
    }
    var Ln = {
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
        Un = ["Webkit", "ms", "Moz", "O"];

    function zn(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || Ln.hasOwnProperty(e) && Ln[e] ? ("" + t).trim() : t + "px"
    }

    function Fn(e, t) {
        for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    a = zn(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, a) : e[n] = a
            }
    }
    Object.keys(Ln).forEach((function(e) {
        Un.forEach((function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), Ln[t] = Ln[e]
        }))
    }));
    var jn = a({
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

    function Bn(e, t) {
        if (t) {
            if (jn[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e, ""));
            if (null != t.dangerouslySetInnerHTML) {
                if (null != t.children) throw Error(i(60));
                if (!("object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
            }
            if (null != t.style && "object" != typeof t.style) throw Error(i(62, ""))
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

    function Wn(e, t) {
        var n = Dn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = h[t];
        for (var r = 0; r < t.length; r++) Rn(t[r], e, n)
    }

    function Vn() {}

    function qn(e) {
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

    function Gn(e, t) {
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

    function Qn() {
        for (var e = window, t = qn(); t instanceof e.HTMLIFrameElement;) {
            try {
                var n = "string" == typeof t.contentWindow.location.href
            } catch (e) {
                n = !1
            }
            if (!n) break;
            t = qn((e = t.contentWindow).document)
        }
        return t
    }

    function Kn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }
    var Xn = "$",
        Yn = "/$",
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
    var ar = "function" == typeof setTimeout ? setTimeout : void 0,
        or = "function" == typeof clearTimeout ? clearTimeout : void 0;

    function ir(e) {
        for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break
        }
        return e
    }

    function lr(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
            if (8 === e.nodeType) {
                var n = e.data;
                if (n === Xn || n === Zn || n === Jn) {
                    if (0 === t) return e;
                    t--
                } else n === Yn && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var ur = Math.random().toString(36).slice(2),
        sr = "__reactInternalInstance$" + ur,
        cr = "__reactEventHandlers$" + ur,
        fr = "__reactContainere$" + ur;

    function dr(e) {
        var t = e[sr];
        if (t) return t;
        for (var n = e.parentNode; n;) {
            if (t = n[fr] || n[sr]) {
                if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                    for (e = lr(e); null !== e;) {
                        if (n = e[sr]) return n;
                        e = lr(e)
                    }
                return t
            }
            n = (e = n).parentNode
        }
        return null
    }

    function pr(e) {
        return !(e = e[sr] || e[fr]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
    }

    function hr(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33))
    }

    function mr(e) {
        return e[cr] || null
    }
    var gr = null,
        vr = null,
        yr = null;

    function br() {
        if (yr) return yr;
        var e, t, n = vr,
            r = n.length,
            a = "value" in gr ? gr.value : gr.textContent,
            o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return yr = a.slice(e, 1 < t ? 1 - t : void 0)
    }
    var _r = Rt.extend({
            data: null
        }),
        wr = Rt.extend({
            data: null
        }),
        xr = [9, 13, 27, 32],
        kr = Z && "CompositionEvent" in window,
        Er = null;
    Z && "documentMode" in document && (Er = document.documentMode);
    var Sr = Z && "TextEvent" in window && !Er,
        Tr = Z && (!kr || Er && 8 < Er && 11 >= Er),
        Mr = String.fromCharCode(32),
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
        Pr = !1;

    function Cr(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== xr.indexOf(t.keyCode);
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
    var Or = {
            eventTypes: Ar,
            extractEvents: function(e, t, n, r) {
                var a;
                if (kr) e: {
                    switch (e) {
                        case "compositionstart":
                            var o = Ar.compositionStart;
                            break e;
                        case "compositionend":
                            o = Ar.compositionEnd;
                            break e;
                        case "compositionupdate":
                            o = Ar.compositionUpdate;
                            break e
                    }
                    o = void 0
                } else Nr ? Cr(e, n) && (o = Ar.compositionEnd) : "keydown" === e && 229 === n.keyCode && (o = Ar.compositionStart);
                return o ? (Tr && "ko" !== n.locale && (Nr || o !== Ar.compositionStart ? o === Ar.compositionEnd && Nr && (a = br()) : (vr = "value" in (gr = r) ? gr.value : gr.textContent, Nr = !0)), o = _r.getPooled(o, t, n, r), a ? o.data = a : null !== (a = Ir(n)) && (o.data = a), Nt(o), a = o) : a = null, (e = Sr ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return Ir(t);
                        case "keypress":
                            return 32 !== t.which ? null : (Pr = !0, Mr);
                        case "textInput":
                            return (e = t.data) === Mr && Pr ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function(e, t) {
                    if (Nr) return "compositionend" === e || !kr && Cr(e, t) ? (e = br(), yr = vr = gr = null, Nr = !1, e) : null;
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
                            return Tr && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, n)) ? ((t = wr.getPooled(Ar.beforeInput, t, n, r)).data = e, Nt(t)) : t = null, null === a ? t : null === t ? a : [a, t]
            }
        },
        Dr = {
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
        return "input" === t ? !!Dr[e.type] : "textarea" === t
    }
    var Lr = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Ur(e, t, n) {
        return (e = Rt.getPooled(Lr.change, e, t, n)).type = "change", ae(n), Nt(e), e
    }
    var zr = null,
        Fr = null;

    function jr(e) {
        C(e)
    }

    function Br(e) {
        if (Se(hr(e))) return e
    }

    function Hr(e, t) {
        if ("change" === e) return t
    }
    var Wr = !1;

    function Vr() {
        zr && (zr.detachEvent("onpropertychange", qr), Fr = zr = null)
    }

    function qr(e) {
        if ("value" === e.propertyName && Br(Fr))
            if (e = Ur(Fr, e, Tt(e)), ce) C(e);
            else {
                ce = !0;
                try {
                    ie(jr, e)
                } finally {
                    ce = !1, de()
                }
            }
    }

    function $r(e, t, n) {
        "focus" === e ? (Vr(), Fr = n, (zr = t).attachEvent("onpropertychange", qr)) : "blur" === e && Vr()
    }

    function Gr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Br(Fr)
    }

    function Qr(e, t) {
        if ("click" === e) return Br(t)
    }

    function Kr(e, t) {
        if ("input" === e || "change" === e) return Br(t)
    }
    Z && (Wr = Nn("input") && (!document.documentMode || 9 < document.documentMode));
    var Xr, Yr = {
            eventTypes: Lr,
            _isInputEventSupported: Wr,
            extractEvents: function(e, t, n, r) {
                var a = t ? hr(t) : window,
                    o = a.nodeName && a.nodeName.toLowerCase();
                if ("select" === o || "input" === o && "file" === a.type) var i = Hr;
                else if (Rr(a))
                    if (Wr) i = Kr;
                    else {
                        i = Gr;
                        var l = $r
                    } else(o = a.nodeName) && "input" === o.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (i = Qr);
                if (i && (i = i(e, t))) return Ur(i, n, r);
                l && l(e, a, t), "blur" === e && (e = a._wrapperState) && e.controlled && "number" === a.type && Ie(a, "number", a.value)
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
            extractEvents: function(e, t, n, r, a) {
                var o = "mouseover" === e || "pointerover" === e,
                    i = "mouseout" === e || "pointerout" === e;
                if (o && 0 == (32 & a) && (n.relatedTarget || n.fromElement) || !i && !o) return null;
                if (a = r.window === r ? r : (a = r.ownerDocument) ? a.defaultView || a.parentWindow : window, i ? (i = t, null !== (t = (t = n.relatedTarget || n.toElement) ? dr(t) : null) && (t !== (o = et(t)) || 5 !== t.tag && 6 !== t.tag) && (t = null)) : i = null, i === t) return null;
                if ("mouseout" === e || "mouseover" === e) var l = en,
                    u = Jr.mouseLeave,
                    s = Jr.mouseEnter,
                    c = "mouse";
                else "pointerout" !== e && "pointerover" !== e || (l = tn, u = Jr.pointerLeave, s = Jr.pointerEnter, c = "pointer");
                if (e = null == i ? a : hr(i), a = null == t ? a : hr(t), (u = l.getPooled(u, i, n, r)).type = c + "leave", u.target = e, u.relatedTarget = a, (r = l.getPooled(s, t, n, r)).type = c + "enter", r.target = a, r.relatedTarget = e, c = t, (l = i) && c) e: {
                    for (e = c, i = 0, t = s = l; t; t = Mt(t)) i++;
                    for (t = 0, a = e; a; a = Mt(a)) t++;
                    for (; 0 < i - t;) s = Mt(s), i--;
                    for (; 0 < t - i;) e = Mt(e), t--;
                    for (; i--;) {
                        if (s === e || s === e.alternate) break e;
                        s = Mt(s), e = Mt(e)
                    }
                    s = null
                } else s = null;
                for (e = s, s = []; l && l !== e && (null === (i = l.alternate) || i !== e);) s.push(l), l = Mt(l);
                for (l = []; c && c !== e && (null === (i = c.alternate) || i !== e);) l.push(c), c = Mt(c);
                for (c = 0; c < s.length; c++) Ct(s[c], "bubbled", u);
                for (c = l.length; 0 < c--;) Ct(l[c], "captured", r);
                return n === Xr ? (Xr = null, [u]) : (Xr = n, [u, r])
            }
        };
    var ea = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        ta = Object.prototype.hasOwnProperty;

    function na(e, t) {
        if (ea(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
            if (!ta.call(t, n[r]) || !ea(e[n[r]], t[n[r]])) return !1;
        return !0
    }
    var ra = Z && "documentMode" in document && 11 >= document.documentMode,
        aa = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        oa = null,
        ia = null,
        la = null,
        ua = !1;

    function sa(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return ua || null == oa || oa !== qn(n) ? null : ("selectionStart" in (n = oa) && Kn(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, la && na(la, n) ? null : (la = n, (e = Rt.getPooled(aa.select, ia, e, t)).type = "select", e.target = oa, Nt(e), e))
    }
    var ca = {
        eventTypes: aa,
        extractEvents: function(e, t, n, r) {
            var a, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
            if (!(a = !o)) {
                e: {
                    o = Dn(o), a = h.onSelect;
                    for (var i = 0; i < a.length; i++)
                        if (!o.has(a[i])) {
                            o = !1;
                            break e
                        }
                    o = !0
                }
                a = !o
            }
            if (a) return null;
            switch (o = t ? hr(t) : window, e) {
                case "focus":
                    (Rr(o) || "true" === o.contentEditable) && (oa = o, ia = t, la = null);
                    break;
                case "blur":
                    la = ia = oa = null;
                    break;
                case "mousedown":
                    ua = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return ua = !1, sa(n, r);
                case "selectionchange":
                    if (ra) break;
                case "keydown":
                case "keyup":
                    return sa(n, r)
            }
            return null
        }
    };
    I.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), x = mr, k = pr, E = hr, I.injectEventPluginsByName({
        SimpleEventPlugin: vn,
        EnterLeaveEventPlugin: Zr,
        ChangeEventPlugin: Yr,
        SelectEventPlugin: ca,
        BeforeInputEventPlugin: Or
    }), new Set;
    var fa = [],
        da = -1;

    function pa(e) {
        0 > da || (e.current = fa[da], fa[da] = null, da--)
    }

    function ha(e, t) {
        da++, fa[da] = e.current, e.current = t
    }
    var ma = {},
        ga = {
            current: ma
        },
        va = {
            current: !1
        },
        ya = ma;

    function ba(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ma;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var a, o = {};
        for (a in n) o[a] = t[a];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function _a(e) {
        return null != (e = e.childContextTypes)
    }

    function wa(e) {
        pa(va), pa(ga)
    }

    function xa(e) {
        pa(va), pa(ga)
    }

    function ka(e, t, n) {
        if (ga.current !== ma) throw Error(i(168));
        ha(ga, t), ha(va, n)
    }

    function Ea(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext())
            if (!(o in e)) throw Error(i(108, Y(t) || "Unknown", o));
        return a({}, n, {}, r)
    }

    function Sa(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || ma, ya = ga.current, ha(ga, t), ha(va, va.current), !0
    }

    function Ta(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n ? (t = Ea(e, t, ya), r.__reactInternalMemoizedMergedChildContext = t, pa(va), pa(ga), ha(ga, t)) : pa(va), ha(va, n)
    }
    var Ma = o.unstable_runWithPriority,
        Aa = o.unstable_scheduleCallback,
        Pa = o.unstable_cancelCallback,
        Ca = o.unstable_shouldYield,
        Ia = o.unstable_requestPaint,
        Na = o.unstable_now,
        Oa = o.unstable_getCurrentPriorityLevel,
        Da = o.unstable_ImmediatePriority,
        Ra = o.unstable_UserBlockingPriority,
        La = o.unstable_NormalPriority,
        Ua = o.unstable_LowPriority,
        za = o.unstable_IdlePriority,
        Fa = {},
        ja = void 0 !== Ia ? Ia : function() {},
        Ba = null,
        Ha = null,
        Wa = !1,
        Va = Na(),
        qa = 1e4 > Va ? Na : function() {
            return Na() - Va
        };

    function $a() {
        switch (Oa()) {
            case Da:
                return 99;
            case Ra:
                return 98;
            case La:
                return 97;
            case Ua:
                return 96;
            case za:
                return 95;
            default:
                throw Error(i(332))
        }
    }

    function Ga(e) {
        switch (e) {
            case 99:
                return Da;
            case 98:
                return Ra;
            case 97:
                return La;
            case 96:
                return Ua;
            case 95:
                return za;
            default:
                throw Error(i(332))
        }
    }

    function Qa(e, t) {
        return e = Ga(e), Ma(e, t)
    }

    function Ka(e, t, n) {
        return e = Ga(e), Aa(e, t, n)
    }

    function Xa(e) {
        return null === Ba ? (Ba = [e], Ha = Aa(Da, Ja)) : Ba.push(e), Fa
    }

    function Ya() {
        if (null !== Ha) {
            var e = Ha;
            Ha = null, Pa(e)
        }
        Ja()
    }

    function Ja() {
        if (!Wa && null !== Ba) {
            Wa = !0;
            var e = 0;
            try {
                var t = Ba;
                Qa(99, (function() {
                    for (; e < t.length; e++) {
                        var n = t[e];
                        do {
                            n = n(!0)
                        } while (null !== n)
                    }
                })), Ba = null
            } catch (t) {
                throw null !== Ba && (Ba = Ba.slice(e + 1)), Aa(Da, Ya), t
            } finally {
                Wa = !1
            }
        }
    }
    var Za = 3;

    function eo(e, t, n) {
        return 1073741821 - (1 + ((1073741821 - e + t / 10) / (n /= 10) | 0)) * n
    }

    function to(e, t) {
        if (e && e.defaultProps)
            for (var n in t = a({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var no = {
            current: null
        },
        ro = null,
        ao = null,
        oo = null;

    function io() {
        oo = ao = ro = null
    }

    function lo(e, t) {
        var n = e.type._context;
        ha(no, n._currentValue), n._currentValue = t
    }

    function uo(e) {
        var t = no.current;
        pa(no), e.type._context._currentValue = t
    }

    function so(e, t) {
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

    function co(e, t) {
        ro = e, oo = ao = null, null !== (e = e.dependencies) && null !== e.firstContext && (e.expirationTime >= t && (qi = !0), e.firstContext = null)
    }

    function fo(e, t) {
        if (oo !== e && !1 !== t && 0 !== t)
            if ("number" == typeof t && 1073741823 !== t || (oo = e, t = 1073741823), t = {
                    context: e,
                    observedBits: t,
                    next: null
                }, null === ao) {
                if (null === ro) throw Error(i(308));
                ao = t, ro.dependencies = {
                    expirationTime: 0,
                    firstContext: t,
                    responders: null
                }
            } else ao = ao.next = t;
        return e._currentValue
    }
    var po = !1;

    function ho(e) {
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

    function mo(e) {
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

    function go(e, t) {
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

    function vo(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
    }

    function yo(e, t) {
        var n = e.alternate;
        if (null === n) {
            var r = e.updateQueue,
                a = null;
            null === r && (r = e.updateQueue = ho(e.memoizedState))
        } else r = e.updateQueue, a = n.updateQueue, null === r ? null === a ? (r = e.updateQueue = ho(e.memoizedState), a = n.updateQueue = ho(n.memoizedState)) : r = e.updateQueue = mo(a) : null === a && (a = n.updateQueue = mo(r));
        null === a || r === a ? vo(r, t) : null === r.lastUpdate || null === a.lastUpdate ? (vo(r, t), vo(a, t)) : (vo(r, t), a.lastUpdate = t)
    }

    function bo(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? e.updateQueue = ho(e.memoizedState) : _o(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
    }

    function _o(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = mo(t)), t
    }

    function wo(e, t, n, r, o, i) {
        switch (n.tag) {
            case 1:
                return "function" == typeof(e = n.payload) ? e.call(i, r, o) : e;
            case 3:
                e.effectTag = -4097 & e.effectTag | 64;
            case 0:
                if (null == (o = "function" == typeof(e = n.payload) ? e.call(i, r, o) : e)) break;
                return a({}, r, o);
            case 2:
                po = !0
        }
        return r
    }

    function xo(e, t, n, r, a) {
        po = !1;
        for (var o = (t = _o(e, t)).baseState, i = null, l = 0, u = t.firstUpdate, s = o; null !== u;) {
            var c = u.expirationTime;
            c < a ? (null === i && (i = u, o = s), l < c && (l = c)) : (Mu(c, u.suspenseConfig), s = wo(e, 0, u, s, n, r), null !== u.callback && (e.effectTag |= 32, u.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = u : (t.lastEffect.nextEffect = u, t.lastEffect = u))), u = u.next
        }
        for (c = null, u = t.firstCapturedUpdate; null !== u;) {
            var f = u.expirationTime;
            f < a ? (null === c && (c = u, null === i && (o = s)), l < f && (l = f)) : (s = wo(e, 0, u, s, n, r), null !== u.callback && (e.effectTag |= 32, u.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = u : (t.lastCapturedEffect.nextEffect = u, t.lastCapturedEffect = u))), u = u.next
        }
        null === i && (t.lastUpdate = null), null === c ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === i && null === c && (o = s), t.baseState = o, t.firstUpdate = i, t.firstCapturedUpdate = c, Au(l), e.expirationTime = l, e.memoizedState = s
    }

    function ko(e, t, n) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), Eo(t.firstEffect, n), t.firstEffect = t.lastEffect = null, Eo(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function Eo(e, t) {
        for (; null !== e;) {
            var n = e.callback;
            if (null !== n) {
                e.callback = null;
                var r = t;
                if ("function" != typeof n) throw Error(i(191, n));
                n.call(r)
            }
            e = e.nextEffect
        }
    }
    var So = O.ReactCurrentBatchConfig,
        To = (new r.Component).refs;

    function Mo(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : a({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
    }
    var Ao = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && et(e) === e
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = hu(),
                a = So.suspense;
            (a = go(r = mu(r, e, a), a)).payload = t, null != n && (a.callback = n), yo(e, a), gu(e, r)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = hu(),
                a = So.suspense;
            (a = go(r = mu(r, e, a), a)).tag = 1, a.payload = t, null != n && (a.callback = n), yo(e, a), gu(e, r)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var n = hu(),
                r = So.suspense;
            (r = go(n = mu(n, e, r), r)).tag = 2, null != t && (r.callback = t), yo(e, r), gu(e, n)
        }
    };

    function Po(e, t, n, r, a, o, i) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, i) : !t.prototype || !t.prototype.isPureReactComponent || (!na(n, r) || !na(a, o))
    }

    function Co(e, t, n) {
        var r = !1,
            a = ma,
            o = t.contextType;
        return "object" == typeof o && null !== o ? o = fo(o) : (a = _a(t) ? ya : ga.current, o = (r = null != (r = t.contextTypes)) ? ba(e, a) : ma), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = Ao, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function Io(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ao.enqueueReplaceState(t, t.state, null)
    }

    function No(e, t, n, r) {
        var a = e.stateNode;
        a.props = n, a.state = e.memoizedState, a.refs = To;
        var o = t.contextType;
        "object" == typeof o && null !== o ? a.context = fo(o) : (o = _a(t) ? ya : ga.current, a.context = ba(e, o)), null !== (o = e.updateQueue) && (xo(e, o, n, a, r), a.state = e.memoizedState), "function" == typeof(o = t.getDerivedStateFromProps) && (Mo(e, t, o, n), a.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof a.getSnapshotBeforeUpdate || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || (t = a.state, "function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), t !== a.state && Ao.enqueueReplaceState(a, a.state, null), null !== (o = e.updateQueue) && (xo(e, o, n, a, r), a.state = e.memoizedState)), "function" == typeof a.componentDidMount && (e.effectTag |= 4)
    }
    var Oo = Array.isArray;

    function Do(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                if (n = n._owner) {
                    if (1 !== n.tag) throw Error(i(309));
                    var r = n.stateNode
                }
                if (!r) throw Error(i(147, e));
                var a = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === a ? t.ref : ((t = function(e) {
                    var t = r.refs;
                    t === To && (t = r.refs = {}), null === e ? delete t[a] : t[a] = e
                })._stringRef = a, t)
            }
            if ("string" != typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e))
        }
        return e
    }

    function Ro(e, t) {
        if ("textarea" !== e.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, ""))
    }

    function Lo(e) {
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

        function a(e, t, n) {
            return (e = Qu(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
        }

        function l(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function u(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Yu(n, e.mode, r)).return = e, t) : ((t = a(t, n)).return = e, t)
        }

        function s(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = a(t, n.props)).ref = Do(e, t, n), r.return = e, r) : ((r = Ku(n.type, n.key, n.props, null, e.mode, r)).ref = Do(e, t, n), r.return = e, r)
        }

        function c(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Ju(n, e.mode, r)).return = e, t) : ((t = a(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag ? ((t = Xu(n, e.mode, r, o)).return = e, t) : ((t = a(t, n)).return = e, t)
        }

        function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Yu("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case L:
                        return (n = Ku(t.type, t.key, t.props, null, e.mode, n)).ref = Do(e, null, t), n.return = e, n;
                    case U:
                        return (t = Ju(t, e.mode, n)).return = e, t
                }
                if (Oo(t) || X(t)) return (t = Xu(t, e.mode, n, null)).return = e, t;
                Ro(e, t)
            }
            return null
        }

        function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== a ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case L:
                        return n.key === a ? n.type === z ? f(e, t, n.props.children, r, a) : s(e, t, n, r) : null;
                    case U:
                        return n.key === a ? c(e, t, n, r) : null
                }
                if (Oo(n) || X(n)) return null !== a ? null : f(e, t, n, r, null);
                Ro(e, n)
            }
            return null
        }

        function h(e, t, n, r, a) {
            if ("string" == typeof r || "number" == typeof r) return u(t, e = e.get(n) || null, "" + r, a);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case L:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === z ? f(t, e, r.props.children, a, r.key) : s(t, e, r, a);
                    case U:
                        return c(t, e = e.get(null === r.key ? n : r.key) || null, r, a)
                }
                if (Oo(r) || X(r)) return f(t, e = e.get(n) || null, r, a, null);
                Ro(t, r)
            }
            return null
        }

        function m(a, i, l, u) {
            for (var s = null, c = null, f = i, m = i = 0, g = null; null !== f && m < l.length; m++) {
                f.index > m ? (g = f, f = null) : g = f.sibling;
                var v = p(a, f, l[m], u);
                if (null === v) {
                    null === f && (f = g);
                    break
                }
                e && f && null === v.alternate && t(a, f), i = o(v, i, m), null === c ? s = v : c.sibling = v, c = v, f = g
            }
            if (m === l.length) return n(a, f), s;
            if (null === f) {
                for (; m < l.length; m++) null !== (f = d(a, l[m], u)) && (i = o(f, i, m), null === c ? s = f : c.sibling = f, c = f);
                return s
            }
            for (f = r(a, f); m < l.length; m++) null !== (g = h(f, a, m, l[m], u)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), i = o(g, i, m), null === c ? s = g : c.sibling = g, c = g);
            return e && f.forEach((function(e) {
                return t(a, e)
            })), s
        }

        function g(a, l, u, s) {
            var c = X(u);
            if ("function" != typeof c) throw Error(i(150));
            if (null == (u = c.call(u))) throw Error(i(151));
            for (var f = c = null, m = l, g = l = 0, v = null, y = u.next(); null !== m && !y.done; g++, y = u.next()) {
                m.index > g ? (v = m, m = null) : v = m.sibling;
                var b = p(a, m, y.value, s);
                if (null === b) {
                    null === m && (m = v);
                    break
                }
                e && m && null === b.alternate && t(a, m), l = o(b, l, g), null === f ? c = b : f.sibling = b, f = b, m = v
            }
            if (y.done) return n(a, m), c;
            if (null === m) {
                for (; !y.done; g++, y = u.next()) null !== (y = d(a, y.value, s)) && (l = o(y, l, g), null === f ? c = y : f.sibling = y, f = y);
                return c
            }
            for (m = r(a, m); !y.done; g++, y = u.next()) null !== (y = h(m, a, g, y.value, s)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), l = o(y, l, g), null === f ? c = y : f.sibling = y, f = y);
            return e && m.forEach((function(e) {
                return t(a, e)
            })), c
        }
        return function(e, r, o, u) {
            var s = "object" == typeof o && null !== o && o.type === z && null === o.key;
            s && (o = o.props.children);
            var c = "object" == typeof o && null !== o;
            if (c) switch (o.$$typeof) {
                case L:
                    e: {
                        for (c = o.key, s = r; null !== s;) {
                            if (s.key === c) {
                                if (7 === s.tag ? o.type === z : s.elementType === o.type) {
                                    n(e, s.sibling), (r = a(s, o.type === z ? o.props.children : o.props)).ref = Do(e, s, o), r.return = e, e = r;
                                    break e
                                }
                                n(e, s);
                                break
                            }
                            t(e, s), s = s.sibling
                        }
                        o.type === z ? ((r = Xu(o.props.children, e.mode, u, o.key)).return = e, e = r) : ((u = Ku(o.type, o.key, o.props, null, e.mode, u)).ref = Do(e, r, o), u.return = e, e = u)
                    }
                    return l(e);
                case U:
                    e: {
                        for (s = o.key; null !== r;) {
                            if (r.key === s) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling), (r = a(r, o.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }(r = Ju(o, e.mode, u)).return = e, e = r
                    }
                    return l(e)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = a(r, o)).return = e, e = r) : (n(e, r), (r = Yu(o, e.mode, u)).return = e, e = r), l(e);
            if (Oo(o)) return m(e, r, o, u);
            if (X(o)) return g(e, r, o, u);
            if (c && Ro(e, o), void 0 === o && !s) switch (e.tag) {
                case 1:
                case 0:
                    throw e = e.type, Error(i(152, e.displayName || e.name || "Component"))
            }
            return n(e, r)
        }
    }
    var Uo = Lo(!0),
        zo = Lo(!1),
        Fo = {},
        jo = {
            current: Fo
        },
        Bo = {
            current: Fo
        },
        Ho = {
            current: Fo
        };

    function Wo(e) {
        if (e === Fo) throw Error(i(174));
        return e
    }

    function Vo(e, t) {
        ha(Ho, t), ha(Bo, e), ha(jo, Fo);
        var n = t.nodeType;
        switch (n) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : je(null, "");
                break;
            default:
                t = je(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
        }
        pa(jo), ha(jo, t)
    }

    function qo(e) {
        pa(jo), pa(Bo), pa(Ho)
    }

    function $o(e) {
        Wo(Ho.current);
        var t = Wo(jo.current),
            n = je(t, e.type);
        t !== n && (ha(Bo, e), ha(jo, n))
    }

    function Go(e) {
        Bo.current === e && (pa(jo), pa(Bo))
    }
    var Qo = {
        current: 0
    };

    function Ko(e) {
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

    function Xo(e, t) {
        return {
            responder: e,
            props: t
        }
    }
    var Yo = O.ReactCurrentDispatcher,
        Jo = O.ReactCurrentBatchConfig,
        Zo = 0,
        ei = null,
        ti = null,
        ni = null,
        ri = null,
        ai = null,
        oi = null,
        ii = 0,
        li = null,
        ui = 0,
        si = !1,
        ci = null,
        fi = 0;

    function di() {
        throw Error(i(321))
    }

    function pi(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!ea(e[n], t[n])) return !1;
        return !0
    }

    function hi(e, t, n, r, a, o) {
        if (Zo = o, ei = t, ni = null !== e ? e.memoizedState : null, Yo.current = null === ni ? Oi : Di, t = n(r, a), si) {
            do {
                si = !1, fi += 1, ni = null !== e ? e.memoizedState : null, oi = ri, li = ai = ti = null, Yo.current = Di, t = n(r, a)
            } while (si);
            ci = null, fi = 0
        }
        if (Yo.current = Ni, (e = ei).memoizedState = ri, e.expirationTime = ii, e.updateQueue = li, e.effectTag |= ui, e = null !== ti && null !== ti.next, Zo = 0, oi = ai = ri = ni = ti = ei = null, ii = 0, li = null, ui = 0, e) throw Error(i(300));
        return t
    }

    function mi() {
        Yo.current = Ni, Zo = 0, oi = ai = ri = ni = ti = ei = null, ii = 0, li = null, ui = 0, si = !1, ci = null, fi = 0
    }

    function gi() {
        var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === ai ? ri = ai = e : ai = ai.next = e, ai
    }

    function vi() {
        if (null !== oi) oi = (ai = oi).next, ni = null !== (ti = ni) ? ti.next : null;
        else {
            if (null === ni) throw Error(i(310));
            var e = {
                memoizedState: (ti = ni).memoizedState,
                baseState: ti.baseState,
                queue: ti.queue,
                baseUpdate: ti.baseUpdate,
                next: null
            };
            ai = null === ai ? ri = e : ai.next = e, ni = ti.next
        }
        return ai
    }

    function yi(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function bi(e) {
        var t = vi(),
            n = t.queue;
        if (null === n) throw Error(i(311));
        if (n.lastRenderedReducer = e, 0 < fi) {
            var r = n.dispatch;
            if (null !== ci) {
                var a = ci.get(n);
                if (void 0 !== a) {
                    ci.delete(n);
                    var o = t.memoizedState;
                    do {
                        o = e(o, a.action), a = a.next
                    } while (null !== a);
                    return ea(o, t.memoizedState) || (qi = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), n.lastRenderedState = o, [o, r]
                }
            }
            return [t.memoizedState, r]
        }
        r = n.last;
        var l = t.baseUpdate;
        if (o = t.baseState, null !== l ? (null !== r && (r.next = null), r = l.next) : r = null !== r ? r.next : null, null !== r) {
            var u = a = null,
                s = r,
                c = !1;
            do {
                var f = s.expirationTime;
                f < Zo ? (c || (c = !0, u = l, a = o), f > ii && Au(ii = f)) : (Mu(f, s.suspenseConfig), o = s.eagerReducer === e ? s.eagerState : e(o, s.action)), l = s, s = s.next
            } while (null !== s && s !== r);
            c || (u = l, a = o), ea(o, t.memoizedState) || (qi = !0), t.memoizedState = o, t.baseUpdate = u, t.baseState = a, n.lastRenderedState = o
        }
        return [t.memoizedState, n.dispatch]
    }

    function _i(e) {
        var t = gi();
        return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
            last: null,
            dispatch: null,
            lastRenderedReducer: yi,
            lastRenderedState: e
        }).dispatch = Ii.bind(null, ei, e), [t.memoizedState, e]
    }

    function wi(e) {
        return bi(yi)
    }

    function xi(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === li ? (li = {
            lastEffect: null
        }).lastEffect = e.next = e : null === (t = li.lastEffect) ? li.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, li.lastEffect = e), e
    }

    function ki(e, t, n, r) {
        var a = gi();
        ui |= e, a.memoizedState = xi(t, n, void 0, void 0 === r ? null : r)
    }

    function Ei(e, t, n, r) {
        var a = vi();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ti) {
            var i = ti.memoizedState;
            if (o = i.destroy, null !== r && pi(r, i.deps)) return void xi(0, n, o, r)
        }
        ui |= e, a.memoizedState = xi(t, n, o, r)
    }

    function Si(e, t) {
        return ki(516, 192, e, t)
    }

    function Ti(e, t) {
        return Ei(516, 192, e, t)
    }

    function Mi(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
            t.current = null
        }) : void 0
    }

    function Ai() {}

    function Pi(e, t) {
        return gi().memoizedState = [e, void 0 === t ? null : t], e
    }

    function Ci(e, t) {
        var n = vi();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && pi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
    }

    function Ii(e, t, n) {
        if (!(25 > fi)) throw Error(i(301));
        var r = e.alternate;
        if (e === ei || null !== r && r === ei)
            if (si = !0, e = {
                    expirationTime: Zo,
                    suspenseConfig: null,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === ci && (ci = new Map), void 0 === (n = ci.get(t))) ci.set(t, e);
            else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
            } else {
            var a = hu(),
                o = So.suspense;
            o = {
                expirationTime: a = mu(a, e, o),
                suspenseConfig: o,
                action: n,
                eagerReducer: null,
                eagerState: null,
                next: null
            };
            var l = t.last;
            if (null === l) o.next = o;
            else {
                var u = l.next;
                null !== u && (o.next = u), l.next = o
            }
            if (t.last = o, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.lastRenderedReducer)) try {
                var s = t.lastRenderedState,
                    c = r(s, n);
                if (o.eagerReducer = r, o.eagerState = c, ea(c, s)) return
            } catch (e) {}
            gu(e, a)
        }
    }
    var Ni = {
            readContext: fo,
            useCallback: di,
            useContext: di,
            useEffect: di,
            useImperativeHandle: di,
            useLayoutEffect: di,
            useMemo: di,
            useReducer: di,
            useRef: di,
            useState: di,
            useDebugValue: di,
            useResponder: di,
            useDeferredValue: di,
            useTransition: di
        },
        Oi = {
            readContext: fo,
            useCallback: Pi,
            useContext: fo,
            useEffect: Si,
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, ki(4, 36, Mi.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return ki(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var n = gi();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = gi();
                return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                    last: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t
                }).dispatch = Ii.bind(null, ei, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, gi().memoizedState = e
            },
            useState: _i,
            useDebugValue: Ai,
            useResponder: Xo,
            useDeferredValue: function(e, t) {
                var n = _i(e),
                    r = n[0],
                    a = n[1];
                return Si((function() {
                    o.unstable_next((function() {
                        var n = Jo.suspense;
                        Jo.suspense = void 0 === t ? null : t;
                        try {
                            a(e)
                        } finally {
                            Jo.suspense = n
                        }
                    }))
                }), [e, t]), r
            },
            useTransition: function(e) {
                var t = _i(!1),
                    n = t[0],
                    r = t[1];
                return [Pi((function(t) {
                    r(!0), o.unstable_next((function() {
                        var n = Jo.suspense;
                        Jo.suspense = void 0 === e ? null : e;
                        try {
                            r(!1), t()
                        } finally {
                            Jo.suspense = n
                        }
                    }))
                }), [e, n]), n]
            }
        },
        Di = {
            readContext: fo,
            useCallback: Ci,
            useContext: fo,
            useEffect: Ti,
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, Ei(4, 36, Mi.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return Ei(4, 36, e, t)
            },
            useMemo: function(e, t) {
                var n = vi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && pi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            },
            useReducer: bi,
            useRef: function() {
                return vi().memoizedState
            },
            useState: wi,
            useDebugValue: Ai,
            useResponder: Xo,
            useDeferredValue: function(e, t) {
                var n = wi(),
                    r = n[0],
                    a = n[1];
                return Ti((function() {
                    o.unstable_next((function() {
                        var n = Jo.suspense;
                        Jo.suspense = void 0 === t ? null : t;
                        try {
                            a(e)
                        } finally {
                            Jo.suspense = n
                        }
                    }))
                }), [e, t]), r
            },
            useTransition: function(e) {
                var t = wi(),
                    n = t[0],
                    r = t[1];
                return [Ci((function(t) {
                    r(!0), o.unstable_next((function() {
                        var n = Jo.suspense;
                        Jo.suspense = void 0 === e ? null : e;
                        try {
                            r(!1), t()
                        } finally {
                            Jo.suspense = n
                        }
                    }))
                }), [e, n]), n]
            }
        },
        Ri = null,
        Li = null,
        Ui = !1;

    function zi(e, t) {
        var n = $u(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function Fi(e, t) {
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

    function ji(e) {
        if (Ui) {
            var t = Li;
            if (t) {
                var n = t;
                if (!Fi(e, t)) {
                    if (!(t = ir(n.nextSibling)) || !Fi(e, t)) return e.effectTag = -1025 & e.effectTag | 2, Ui = !1, void(Ri = e);
                    zi(Ri, n)
                }
                Ri = e, Li = ir(t.firstChild)
            } else e.effectTag = -1025 & e.effectTag | 2, Ui = !1, Ri = e
        }
    }

    function Bi(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
        Ri = e
    }

    function Hi(e) {
        if (e !== Ri) return !1;
        if (!Ui) return Bi(e), Ui = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !rr(t, e.memoizedProps))
            for (t = Li; t;) zi(e, t), t = ir(t.nextSibling);
        if (Bi(e), 13 === e.tag) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
            e: {
                for (e = e.nextSibling, t = 0; e;) {
                    if (8 === e.nodeType) {
                        var n = e.data;
                        if (n === Yn) {
                            if (0 === t) {
                                Li = ir(e.nextSibling);
                                break e
                            }
                            t--
                        } else n !== Xn && n !== Zn && n !== Jn || t++
                    }
                    e = e.nextSibling
                }
                Li = null
            }
        } else Li = Ri ? ir(e.stateNode.nextSibling) : null;
        return !0
    }

    function Wi() {
        Li = Ri = null, Ui = !1
    }
    var Vi = O.ReactCurrentOwner,
        qi = !1;

    function $i(e, t, n, r) {
        t.child = null === e ? zo(t, null, n, r) : Uo(t, e.child, n, r)
    }

    function Gi(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return co(t, a), r = hi(e, t, n, r, o, a), null === e || qi ? (t.effectTag |= 1, $i(e, t, r, a), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= a && (e.expirationTime = 0), cl(e, t, a))
    }

    function Qi(e, t, n, r, a, o) {
        if (null === e) {
            var i = n.type;
            return "function" != typeof i || Gu(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Ku(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Ki(e, t, i, r, a, o))
        }
        return i = e.child, a < o && (a = i.memoizedProps, (n = null !== (n = n.compare) ? n : na)(a, r) && e.ref === t.ref) ? cl(e, t, o) : (t.effectTag |= 1, (e = Qu(i, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function Ki(e, t, n, r, a, o) {
        return null !== e && na(e.memoizedProps, r) && e.ref === t.ref && (qi = !1, a < o) ? cl(e, t, o) : Yi(e, t, n, r, o)
    }

    function Xi(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function Yi(e, t, n, r, a) {
        var o = _a(n) ? ya : ga.current;
        return o = ba(t, o), co(t, a), n = hi(e, t, n, r, o, a), null === e || qi ? (t.effectTag |= 1, $i(e, t, n, a), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= a && (e.expirationTime = 0), cl(e, t, a))
    }

    function Ji(e, t, n, r, a) {
        if (_a(n)) {
            var o = !0;
            Sa(t)
        } else o = !1;
        if (co(t, a), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), Co(t, n, r), No(t, n, r, a), r = !0;
        else if (null === e) {
            var i = t.stateNode,
                l = t.memoizedProps;
            i.props = l;
            var u = i.context,
                s = n.contextType;
            "object" == typeof s && null !== s ? s = fo(s) : s = ba(t, s = _a(n) ? ya : ga.current);
            var c = n.getDerivedStateFromProps,
                f = "function" == typeof c || "function" == typeof i.getSnapshotBeforeUpdate;
            f || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || u !== s) && Io(t, i, r, s), po = !1;
            var d = t.memoizedState;
            u = i.state = d;
            var p = t.updateQueue;
            null !== p && (xo(t, p, r, i, a), u = t.memoizedState), l !== r || d !== u || va.current || po ? ("function" == typeof c && (Mo(t, n, c, r), u = t.memoizedState), (l = po || Po(t, n, l, r, d, u, s)) ? (f || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || ("function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" == typeof i.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = s, r = l) : ("function" == typeof i.componentDidMount && (t.effectTag |= 4), r = !1)
        } else i = t.stateNode, l = t.memoizedProps, i.props = t.type === t.elementType ? l : to(t.type, l), u = i.context, "object" == typeof(s = n.contextType) && null !== s ? s = fo(s) : s = ba(t, s = _a(n) ? ya : ga.current), (f = "function" == typeof(c = n.getDerivedStateFromProps) || "function" == typeof i.getSnapshotBeforeUpdate) || "function" != typeof i.UNSAFE_componentWillReceiveProps && "function" != typeof i.componentWillReceiveProps || (l !== r || u !== s) && Io(t, i, r, s), po = !1, u = t.memoizedState, d = i.state = u, null !== (p = t.updateQueue) && (xo(t, p, r, i, a), d = t.memoizedState), l !== r || u !== d || va.current || po ? ("function" == typeof c && (Mo(t, n, c, r), d = t.memoizedState), (c = po || Po(t, n, l, r, u, d, s)) ? (f || "function" != typeof i.UNSAFE_componentWillUpdate && "function" != typeof i.componentWillUpdate || ("function" == typeof i.componentWillUpdate && i.componentWillUpdate(r, d, s), "function" == typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, d, s)), "function" == typeof i.componentDidUpdate && (t.effectTag |= 4), "function" == typeof i.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = d), i.props = r, i.state = d, i.context = s, r = c) : ("function" != typeof i.componentDidUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 4), "function" != typeof i.getSnapshotBeforeUpdate || l === e.memoizedProps && u === e.memoizedState || (t.effectTag |= 256), r = !1);
        return Zi(e, t, n, r, o, a)
    }

    function Zi(e, t, n, r, a, o) {
        Xi(e, t);
        var i = 0 != (64 & t.effectTag);
        if (!r && !i) return a && Ta(t, n, !1), cl(e, t, o);
        r = t.stateNode, Vi.current = t;
        var l = i && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && i ? (t.child = Uo(t, e.child, null, o), t.child = Uo(t, null, l, o)) : $i(e, t, l, o), t.memoizedState = r.state, a && Ta(t, n, !0), t.child
    }

    function el(e) {
        var t = e.stateNode;
        t.pendingContext ? ka(0, t.pendingContext, t.pendingContext !== t.context) : t.context && ka(0, t.context, !1), Vo(e, t.containerInfo)
    }
    var tl, nl, rl, al, ol = {
        dehydrated: null,
        retryTime: 0
    };

    function il(e, t, n) {
        var r, a = t.mode,
            o = t.pendingProps,
            i = Qo.current,
            l = !1;
        if ((r = 0 != (64 & t.effectTag)) || (r = 0 != (2 & i) && (null === e || null !== e.memoizedState)), r ? (l = !0, t.effectTag &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (i |= 1), ha(Qo, 1 & i), null === e) {
            if (void 0 !== o.fallback && ji(t), l) {
                if (l = o.fallback, (o = Xu(null, a, 0, null)).return = t, 0 == (2 & t.mode))
                    for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
                return (n = Xu(l, a, n, null)).return = t, o.sibling = n, t.memoizedState = ol, t.child = o, n
            }
            return a = o.children, t.memoizedState = null, t.child = zo(t, null, a, n)
        }
        if (null !== e.memoizedState) {
            if (a = (e = e.child).sibling, l) {
                if (o = o.fallback, (n = Qu(e, e.pendingProps)).return = t, 0 == (2 & t.mode) && (l = null !== t.memoizedState ? t.child.child : t.child) !== e.child)
                    for (n.child = l; null !== l;) l.return = n, l = l.sibling;
                return (a = Qu(a, o, a.expirationTime)).return = t, n.sibling = a, n.childExpirationTime = 0, t.memoizedState = ol, t.child = n, a
            }
            return n = Uo(t, e.child, o.children, n), t.memoizedState = null, t.child = n
        }
        if (e = e.child, l) {
            if (l = o.fallback, (o = Xu(null, a, 0, null)).return = t, o.child = e, null !== e && (e.return = o), 0 == (2 & t.mode))
                for (e = null !== t.memoizedState ? t.child.child : t.child, o.child = e; null !== e;) e.return = o, e = e.sibling;
            return (n = Xu(l, a, n, null)).return = t, o.sibling = n, n.effectTag |= 2, o.childExpirationTime = 0, t.memoizedState = ol, t.child = o, n
        }
        return t.memoizedState = null, t.child = Uo(t, e, o.children, n)
    }

    function ll(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t), so(e.return, t)
    }

    function ul(e, t, n, r, a, o) {
        var i = e.memoizedState;
        null === i ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            last: r,
            tail: n,
            tailExpiration: 0,
            tailMode: a,
            lastEffect: o
        } : (i.isBackwards = t, i.rendering = null, i.last = r, i.tail = n, i.tailExpiration = 0, i.tailMode = a, i.lastEffect = o)
    }

    function sl(e, t, n) {
        var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
        if ($i(e, t, r.children, n), 0 != (2 & (r = Qo.current))) r = 1 & r | 2, t.effectTag |= 64;
        else {
            if (null !== e && 0 != (64 & e.effectTag)) e: for (e = t.child; null !== e;) {
                if (13 === e.tag) null !== e.memoizedState && ll(e, n);
                else if (19 === e.tag) ll(e, n);
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
        if (ha(Qo, r), 0 == (2 & t.mode)) t.memoizedState = null;
        else switch (a) {
            case "forwards":
                for (n = t.child, a = null; null !== n;) null !== (e = n.alternate) && null === Ko(e) && (a = n), n = n.sibling;
                null === (n = a) ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), ul(t, !1, a, n, o, t.lastEffect);
                break;
            case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a;) {
                    if (null !== (e = a.alternate) && null === Ko(e)) {
                        t.child = a;
                        break
                    }
                    e = a.sibling, a.sibling = n, n = a, a = e
                }
                ul(t, !0, n, null, o, t.lastEffect);
                break;
            case "together":
                ul(t, !1, null, null, void 0, t.lastEffect);
                break;
            default:
                t.memoizedState = null
        }
        return t.child
    }

    function cl(e, t, n) {
        null !== e && (t.dependencies = e.dependencies);
        var r = t.expirationTime;
        if (0 !== r && Au(r), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child) throw Error(i(153));
        if (null !== t.child) {
            for (n = Qu(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Qu(e, e.pendingProps, e.expirationTime)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function fl(e) {
        e.effectTag |= 4
    }

    function dl(e, t) {
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

    function pl(e) {
        switch (e.tag) {
            case 1:
                _a(e.type) && wa();
                var t = e.effectTag;
                return 4096 & t ? (e.effectTag = -4097 & t | 64, e) : null;
            case 3:
                if (qo(), xa(), 0 != (64 & (t = e.effectTag))) throw Error(i(285));
                return e.effectTag = -4097 & t | 64, e;
            case 5:
                return Go(e), null;
            case 13:
                return pa(Qo), 4096 & (t = e.effectTag) ? (e.effectTag = -4097 & t | 64, e) : null;
            case 19:
                return pa(Qo), null;
            case 4:
                return qo(), null;
            case 10:
                return uo(e), null;
            default:
                return null
        }
    }

    function hl(e, t) {
        return {
            value: e,
            source: t,
            stack: J(t)
        }
    }
    tl = function(e, t) {
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
    }, nl = function() {}, rl = function(e, t, n, r, o) {
        var i = e.memoizedProps;
        if (i !== r) {
            var l, u, s = t.stateNode;
            switch (Wo(jo.current), e = null, n) {
                case "input":
                    i = Te(s, i), r = Te(s, r), e = [];
                    break;
                case "option":
                    i = Ne(s, i), r = Ne(s, r), e = [];
                    break;
                case "select":
                    i = a({}, i, {
                        value: void 0
                    }), r = a({}, r, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    i = De(s, i), r = De(s, r), e = [];
                    break;
                default:
                    "function" != typeof i.onClick && "function" == typeof r.onClick && (s.onclick = Vn)
            }
            for (l in Bn(n, r), n = null, i)
                if (!r.hasOwnProperty(l) && i.hasOwnProperty(l) && null != i[l])
                    if ("style" === l)
                        for (u in s = i[l]) s.hasOwnProperty(u) && (n || (n = {}), n[u] = "");
                    else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (p.hasOwnProperty(l) ? e || (e = []) : (e = e || []).push(l, null));
            for (l in r) {
                var c = r[l];
                if (s = null != i ? i[l] : void 0, r.hasOwnProperty(l) && c !== s && (null != c || null != s))
                    if ("style" === l)
                        if (s) {
                            for (u in s) !s.hasOwnProperty(u) || c && c.hasOwnProperty(u) || (n || (n = {}), n[u] = "");
                            for (u in c) c.hasOwnProperty(u) && s[u] !== c[u] && (n || (n = {}), n[u] = c[u])
                        } else n || (e || (e = []), e.push(l, n)), n = c;
                else "dangerouslySetInnerHTML" === l ? (c = c ? c.__html : void 0, s = s ? s.__html : void 0, null != c && s !== c && (e = e || []).push(l, "" + c)) : "children" === l ? s === c || "string" != typeof c && "number" != typeof c || (e = e || []).push(l, "" + c) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (p.hasOwnProperty(l) ? (null != c && Wn(o, l), e || s === c || (e = [])) : (e = e || []).push(l, c))
            }
            n && (e = e || []).push("style", n), o = e, (t.updateQueue = o) && fl(t)
        }
    }, al = function(e, t, n, r) {
        n !== r && fl(t)
    };
    var ml = "function" == typeof WeakSet ? WeakSet : Set;

    function gl(e, t) {
        var n = t.source,
            r = t.stack;
        null === r && null !== n && (r = J(n)), null !== n && Y(n.type), t = t.value, null !== e && 1 === e.tag && Y(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout((function() {
                throw e
            }))
        }
    }

    function vl(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                ju(e, t)
            } else t.current = null
    }

    function yl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                bl(2, 0, t);
                break;
            case 1:
                if (256 & t.effectTag && null !== e) {
                    var n = e.memoizedProps,
                        r = e.memoizedState;
                    t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : to(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                }
                break;
            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
                break;
            default:
                throw Error(i(163))
        }
    }

    function bl(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var r = n = n.next;
            do {
                if (0 != (r.tag & e)) {
                    var a = r.destroy;
                    r.destroy = void 0, void 0 !== a && a()
                }
                0 != (r.tag & t) && (a = r.create, r.destroy = a()), r = r.next
            } while (r !== n)
        }
    }

    function _l(e, t, n) {
        switch ("function" == typeof Vu && Vu(t), t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                    var r = e.next;
                    Qa(97 < n ? 97 : n, (function() {
                        var e = r;
                        do {
                            var n = e.destroy;
                            if (void 0 !== n) {
                                var a = t;
                                try {
                                    n()
                                } catch (e) {
                                    ju(a, e)
                                }
                            }
                            e = e.next
                        } while (e !== r)
                    }))
                }
                break;
            case 1:
                vl(t), "function" == typeof(n = t.stateNode).componentWillUnmount && function(e, t) {
                    try {
                        t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                    } catch (t) {
                        ju(e, t)
                    }
                }(t, n);
                break;
            case 5:
                vl(t);
                break;
            case 4:
                El(e, t, n)
        }
    }

    function wl(e) {
        var t = e.alternate;
        e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.alternate = null, e.firstEffect = null, e.lastEffect = null, e.pendingProps = null, e.memoizedProps = null, null !== t && wl(t)
    }

    function xl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function kl(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (xl(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            throw Error(i(160))
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
                throw Error(i(161))
        }
        16 & n.effectTag && (We(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || xl(n.return)) {
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
        for (var a = e;;) {
            var o = 5 === a.tag || 6 === a.tag;
            if (o) {
                var l = o ? a.stateNode : a.stateNode.instance;
                if (n)
                    if (r) {
                        var u = l;
                        l = n, 8 === (o = t).nodeType ? o.parentNode.insertBefore(u, l) : o.insertBefore(u, l)
                    } else t.insertBefore(l, n);
                else r ? (8 === (u = t).nodeType ? (o = u.parentNode).insertBefore(l, u) : (o = u).appendChild(l), null != (u = u._reactRootContainer) || null !== o.onclick || (o.onclick = Vn)) : t.appendChild(l)
            } else if (4 !== a.tag && null !== a.child) {
                a.child.return = a, a = a.child;
                continue
            }
            if (a === e) break;
            for (; null === a.sibling;) {
                if (null === a.return || a.return === e) return;
                a = a.return
            }
            a.sibling.return = a.return, a = a.sibling
        }
    }

    function El(e, t, n) {
        for (var r, a, o = t, l = !1;;) {
            if (!l) {
                l = o.return;
                e: for (;;) {
                    if (null === l) throw Error(i(160));
                    switch (r = l.stateNode, l.tag) {
                        case 5:
                            a = !1;
                            break e;
                        case 3:
                        case 4:
                            r = r.containerInfo, a = !0;
                            break e
                    }
                    l = l.return
                }
                l = !0
            }
            if (5 === o.tag || 6 === o.tag) {
                e: for (var u = e, s = o, c = n, f = s;;)
                    if (_l(u, f, c), null !== f.child && 4 !== f.tag) f.child.return = f, f = f.child;
                    else {
                        if (f === s) break;
                        for (; null === f.sibling;) {
                            if (null === f.return || f.return === s) break e;
                            f = f.return
                        }
                        f.sibling.return = f.return, f = f.sibling
                    }a ? (u = r, s = o.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(s) : u.removeChild(s)) : r.removeChild(o.stateNode)
            } else if (4 === o.tag) {
                if (null !== o.child) {
                    r = o.stateNode.containerInfo, a = !0, o.child.return = o, o = o.child;
                    continue
                }
            } else if (_l(e, o, n), null !== o.child) {
                o.child.return = o, o = o.child;
                continue
            }
            if (o === t) break;
            for (; null === o.sibling;) {
                if (null === o.return || o.return === t) return;
                4 === (o = o.return).tag && (l = !1)
            }
            o.sibling.return = o.return, o = o.sibling
        }
    }

    function Sl(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                bl(4, 8, t);
                break;
            case 1:
                break;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps,
                        a = null !== e ? e.memoizedProps : r;
                    e = t.type;
                    var o = t.updateQueue;
                    if (t.updateQueue = null, null !== o) {
                        for (n[cr] = r, "input" === e && "radio" === r.type && null != r.name && Ae(n, r), Hn(e, a), t = Hn(e, r), a = 0; a < o.length; a += 2) {
                            var l = o[a],
                                u = o[a + 1];
                            "style" === l ? Fn(n, u) : "dangerouslySetInnerHTML" === l ? He(n, u) : "children" === l ? We(n, u) : xe(n, l, u, t)
                        }
                        switch (e) {
                            case "input":
                                Pe(n, r);
                                break;
                            case "textarea":
                                Le(n, r);
                                break;
                            case "select":
                                t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (e = r.value) ? Oe(n, !!r.multiple, e, !1) : t !== !!r.multiple && (null != r.defaultValue ? Oe(n, !!r.multiple, r.defaultValue, !0) : Oe(n, !!r.multiple, r.multiple ? [] : "", !1))
                        }
                    }
                }
                break;
            case 6:
                if (null === t.stateNode) throw Error(i(162));
                t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
                (t = t.stateNode).hydrate && (t.hydrate = !1, St(t.containerInfo));
                break;
            case 12:
                break;
            case 13:
                if (n = t, null === t.memoizedState ? r = !1 : (r = !0, n = t.child, tu = qa()), null !== n) e: for (e = n;;) {
                    if (5 === e.tag) o = e.stateNode, r ? "function" == typeof(o = o.style).setProperty ? o.setProperty("display", "none", "important") : o.display = "none" : (o = e.stateNode, a = null != (a = e.memoizedProps.style) && a.hasOwnProperty("display") ? a.display : null, o.style.display = zn("display", a));
                    else if (6 === e.tag) e.stateNode.nodeValue = r ? "" : e.memoizedProps;
                    else {
                        if (13 === e.tag && null !== e.memoizedState && null === e.memoizedState.dehydrated) {
                            (o = e.child.sibling).return = e, e = o;
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
                Tl(t);
                break;
            case 19:
                Tl(t);
                break;
            case 17:
            case 20:
            case 21:
                break;
            default:
                throw Error(i(163))
        }
    }

    function Tl(e) {
        var t = e.updateQueue;
        if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new ml), t.forEach((function(t) {
                var r = Hu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r))
            }))
        }
    }
    var Ml = "function" == typeof WeakMap ? WeakMap : Map;

    function Al(e, t, n) {
        (n = go(n, null)).tag = 3, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            au || (au = !0, ou = r), gl(e, t)
        }, n
    }

    function Pl(e, t, n) {
        (n = go(n, null)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var a = t.value;
            n.payload = function() {
                return gl(e, t), r(a)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof r && (null === iu ? iu = new Set([this]) : iu.add(this), gl(e, t));
            var n = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: null !== n ? n : ""
            })
        }), n
    }
    var Cl, Il = Math.ceil,
        Nl = O.ReactCurrentDispatcher,
        Ol = O.ReactCurrentOwner,
        Dl = 0,
        Rl = 8,
        Ll = 16,
        Ul = 32,
        zl = 0,
        Fl = 1,
        jl = 2,
        Bl = 3,
        Hl = 4,
        Wl = 5,
        Vl = Dl,
        ql = null,
        $l = null,
        Gl = 0,
        Ql = zl,
        Kl = null,
        Xl = 1073741823,
        Yl = 1073741823,
        Jl = null,
        Zl = 0,
        eu = !1,
        tu = 0,
        nu = 500,
        ru = null,
        au = !1,
        ou = null,
        iu = null,
        lu = !1,
        uu = null,
        su = 90,
        cu = null,
        fu = 0,
        du = null,
        pu = 0;

    function hu() {
        return (Vl & (Ll | Ul)) !== Dl ? 1073741821 - (qa() / 10 | 0) : 0 !== pu ? pu : pu = 1073741821 - (qa() / 10 | 0)
    }

    function mu(e, t, n) {
        if (0 == (2 & (t = t.mode))) return 1073741823;
        var r = $a();
        if (0 == (4 & t)) return 99 === r ? 1073741823 : 1073741822;
        if ((Vl & Ll) !== Dl) return Gl;
        if (null !== n) e = eo(e, 0 | n.timeoutMs || 5e3, 250);
        else switch (r) {
            case 99:
                e = 1073741823;
                break;
            case 98:
                e = eo(e, 150, 100);
                break;
            case 97:
            case 96:
                e = eo(e, 5e3, 250);
                break;
            case 95:
                e = 2;
                break;
            default:
                throw Error(i(326))
        }
        return null !== ql && e === Gl && --e, e
    }

    function gu(e, t) {
        if (50 < fu) throw fu = 0, du = null, Error(i(185));
        if (null !== (e = vu(e, t))) {
            var n = $a();
            1073741823 === t ? (Vl & Rl) !== Dl && (Vl & (Ll | Ul)) === Dl ? wu(e) : (bu(e), Vl === Dl && Ya()) : bu(e), (4 & Vl) === Dl || 98 !== n && 99 !== n || (null === cu ? cu = new Map([
                [e, t]
            ]) : (void 0 === (n = cu.get(e)) || n > t) && cu.set(e, t))
        }
    }

    function vu(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
            a = null;
        if (null === r && 3 === e.tag) a = e.stateNode;
        else
            for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                    a = r.stateNode;
                    break
                }
                r = r.return
            }
        return null !== a && (ql === a && (Au(t), Ql === Hl && ts(a, Gl)), ns(a, t)), a
    }

    function yu(e) {
        var t = e.lastExpiredTime;
        return 0 !== t ? t : es(e, t = e.firstPendingTime) ? (t = e.lastPingedTime) > (e = e.nextKnownPendingLevel) ? t : e : t
    }

    function bu(e) {
        if (0 !== e.lastExpiredTime) e.callbackExpirationTime = 1073741823, e.callbackPriority = 99, e.callbackNode = Xa(wu.bind(null, e));
        else {
            var t = yu(e),
                n = e.callbackNode;
            if (0 === t) null !== n && (e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90);
            else {
                var r = hu();
                if (1073741823 === t ? r = 99 : 1 === t || 2 === t ? r = 95 : r = 0 >= (r = 10 * (1073741821 - t) - 10 * (1073741821 - r)) ? 99 : 250 >= r ? 98 : 5250 >= r ? 97 : 95, null !== n) {
                    var a = e.callbackPriority;
                    if (e.callbackExpirationTime === t && a >= r) return;
                    n !== Fa && Pa(n)
                }
                e.callbackExpirationTime = t, e.callbackPriority = r, t = 1073741823 === t ? Xa(wu.bind(null, e)) : Ka(r, _u.bind(null, e), {
                    timeout: 10 * (1073741821 - t) - qa()
                }), e.callbackNode = t
            }
        }
    }

    function _u(e, t) {
        if (pu = 0, t) return rs(e, t = hu()), bu(e), null;
        var n = yu(e);
        if (0 !== n) {
            if (t = e.callbackNode, (Vl & (Ll | Ul)) !== Dl) throw Error(i(327));
            if (Uu(), e === ql && n === Gl || Eu(e, n), null !== $l) {
                var r = Vl;
                Vl |= Ll;
                for (var a = Tu();;) try {
                    Cu();
                    break
                } catch (t) {
                    Su(e, t)
                }
                if (io(), Vl = r, Nl.current = a, Ql === Fl) throw t = Kl, Eu(e, n), ts(e, n), bu(e), t;
                if (null === $l) switch (a = e.finishedWork = e.current.alternate, e.finishedExpirationTime = n, r = Ql, ql = null, r) {
                    case zl:
                    case Fl:
                        throw Error(i(345));
                    case jl:
                        rs(e, 2 < n ? 2 : n);
                        break;
                    case Bl:
                        if (ts(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Ou(a)), 1073741823 === Xl && 10 < (a = tu + nu - qa())) {
                            if (eu) {
                                var o = e.lastPingedTime;
                                if (0 === o || o >= n) {
                                    e.lastPingedTime = n, Eu(e, n);
                                    break
                                }
                            }
                            if (0 !== (o = yu(e)) && o !== n) break;
                            if (0 !== r && r !== n) {
                                e.lastPingedTime = r;
                                break
                            }
                            e.timeoutHandle = ar(Du.bind(null, e), a);
                            break
                        }
                        Du(e);
                        break;
                    case Hl:
                        if (ts(e, n), n === (r = e.lastSuspendedTime) && (e.nextKnownPendingLevel = Ou(a)), eu && (0 === (a = e.lastPingedTime) || a >= n)) {
                            e.lastPingedTime = n, Eu(e, n);
                            break
                        }
                        if (0 !== (a = yu(e)) && a !== n) break;
                        if (0 !== r && r !== n) {
                            e.lastPingedTime = r;
                            break
                        }
                        if (1073741823 !== Yl ? r = 10 * (1073741821 - Yl) - qa() : 1073741823 === Xl ? r = 0 : (r = 10 * (1073741821 - Xl) - 5e3, 0 > (r = (a = qa()) - r) && (r = 0), (n = 10 * (1073741821 - n) - a) < (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Il(r / 1960)) - r) && (r = n)), 10 < r) {
                            e.timeoutHandle = ar(Du.bind(null, e), r);
                            break
                        }
                        Du(e);
                        break;
                    case Wl:
                        if (1073741823 !== Xl && null !== Jl) {
                            o = Xl;
                            var l = Jl;
                            if (0 >= (r = 0 | l.busyMinDurationMs) ? r = 0 : (a = 0 | l.busyDelayMs, r = (o = qa() - (10 * (1073741821 - o) - (0 | l.timeoutMs || 5e3))) <= a ? 0 : a + r - o), 10 < r) {
                                ts(e, n), e.timeoutHandle = ar(Du.bind(null, e), r);
                                break
                            }
                        }
                        Du(e);
                        break;
                    default:
                        throw Error(i(329))
                }
                if (bu(e), e.callbackNode === t) return _u.bind(null, e)
            }
        }
        return null
    }

    function wu(e) {
        var t = e.lastExpiredTime;
        if (t = 0 !== t ? t : 1073741823, e.finishedExpirationTime === t) Du(e);
        else {
            if ((Vl & (Ll | Ul)) !== Dl) throw Error(i(327));
            if (Uu(), e === ql && t === Gl || Eu(e, t), null !== $l) {
                var n = Vl;
                Vl |= Ll;
                for (var r = Tu();;) try {
                    Pu();
                    break
                } catch (t) {
                    Su(e, t)
                }
                if (io(), Vl = n, Nl.current = r, Ql === Fl) throw n = Kl, Eu(e, t), ts(e, t), bu(e), n;
                if (null !== $l) throw Error(i(261));
                e.finishedWork = e.current.alternate, e.finishedExpirationTime = t, ql = null, Du(e), bu(e)
            }
        }
        return null
    }

    function xu(e, t) {
        var n = Vl;
        Vl |= 1;
        try {
            return e(t)
        } finally {
            (Vl = n) === Dl && Ya()
        }
    }

    function ku(e, t) {
        var n = Vl;
        Vl &= -2, Vl |= Rl;
        try {
            return e(t)
        } finally {
            (Vl = n) === Dl && Ya()
        }
    }

    function Eu(e, t) {
        e.finishedWork = null, e.finishedExpirationTime = 0;
        var n = e.timeoutHandle;
        if (-1 !== n && (e.timeoutHandle = -1, or(n)), null !== $l)
            for (n = $l.return; null !== n;) {
                var r = n;
                switch (r.tag) {
                    case 1:
                        var a = r.type.childContextTypes;
                        null != a && wa();
                        break;
                    case 3:
                        qo(), xa();
                        break;
                    case 5:
                        Go(r);
                        break;
                    case 4:
                        qo();
                        break;
                    case 13:
                    case 19:
                        pa(Qo);
                        break;
                    case 10:
                        uo(r)
                }
                n = n.return
            }
        ql = e, $l = Qu(e.current, null), Gl = t, Ql = zl, Kl = null, Yl = Xl = 1073741823, Jl = null, Zl = 0, eu = !1
    }

    function Su(e, t) {
        for (;;) {
            try {
                if (io(), mi(), null === $l || null === $l.return) return Ql = Fl, Kl = t, null;
                e: {
                    var n = e,
                        r = $l.return,
                        a = $l,
                        o = t;
                    if (t = Gl, a.effectTag |= 2048, a.firstEffect = a.lastEffect = null, null !== o && "object" == typeof o && "function" == typeof o.then) {
                        var i = o,
                            l = 0 != (1 & Qo.current),
                            u = r;
                        do {
                            var s;
                            if (s = 13 === u.tag) {
                                var c = u.memoizedState;
                                if (null !== c) s = null !== c.dehydrated;
                                else {
                                    var f = u.memoizedProps;
                                    s = void 0 !== f.fallback && (!0 !== f.unstable_avoidThisFallback || !l)
                                }
                            }
                            if (s) {
                                var d = u.updateQueue;
                                if (null === d) {
                                    var p = new Set;
                                    p.add(i), u.updateQueue = p
                                } else d.add(i);
                                if (0 == (2 & u.mode)) {
                                    if (u.effectTag |= 64, a.effectTag &= -2981, 1 === a.tag)
                                        if (null === a.alternate) a.tag = 17;
                                        else {
                                            var h = go(1073741823, null);
                                            h.tag = 2, yo(a, h)
                                        }
                                    a.expirationTime = 1073741823;
                                    break e
                                }
                                o = void 0, a = t;
                                var m = n.pingCache;
                                if (null === m ? (m = n.pingCache = new Ml, o = new Set, m.set(i, o)) : void 0 === (o = m.get(i)) && (o = new Set, m.set(i, o)), !o.has(a)) {
                                    o.add(a);
                                    var g = Bu.bind(null, n, i, a);
                                    i.then(g, g)
                                }
                                u.effectTag |= 4096, u.expirationTime = t;
                                break e
                            }
                            u = u.return
                        } while (null !== u);
                        o = Error((Y(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + J(a))
                    }
                    Ql !== Wl && (Ql = jl), o = hl(o, a), u = r;
                    do {
                        switch (u.tag) {
                            case 3:
                                i = o, u.effectTag |= 4096, u.expirationTime = t, bo(u, Al(u, i, t));
                                break e;
                            case 1:
                                i = o;
                                var v = u.type,
                                    y = u.stateNode;
                                if (0 == (64 & u.effectTag) && ("function" == typeof v.getDerivedStateFromError || null !== y && "function" == typeof y.componentDidCatch && (null === iu || !iu.has(y)))) {
                                    u.effectTag |= 4096, u.expirationTime = t, bo(u, Pl(u, i, t));
                                    break e
                                }
                        }
                        u = u.return
                    } while (null !== u)
                }
                $l = Nu($l)
            } catch (e) {
                t = e;
                continue
            }
            break
        }
    }

    function Tu() {
        var e = Nl.current;
        return Nl.current = Ni, null === e ? Ni : e
    }

    function Mu(e, t) {
        e < Xl && 2 < e && (Xl = e), null !== t && e < Yl && 2 < e && (Yl = e, Jl = t)
    }

    function Au(e) {
        e > Zl && (Zl = e)
    }

    function Pu() {
        for (; null !== $l;) $l = Iu($l)
    }

    function Cu() {
        for (; null !== $l && !Ca();) $l = Iu($l)
    }

    function Iu(e) {
        var t = Cl(e.alternate, e, Gl);
        return e.memoizedProps = e.pendingProps, null === t && (t = Nu(e)), Ol.current = null, t
    }

    function Nu(e) {
        $l = e;
        do {
            var t = $l.alternate;
            if (e = $l.return, 0 == (2048 & $l.effectTag)) {
                e: {
                    var n = t,
                        r = Gl,
                        o = (t = $l).pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            _a(t.type) && wa();
                            break;
                        case 3:
                            qo(), xa(), (o = t.stateNode).pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (null === n || null === n.child) && Hi(t) && fl(t), nl(t);
                            break;
                        case 5:
                            Go(t), r = Wo(Ho.current);
                            var l = t.type;
                            if (null !== n && null != t.stateNode) rl(n, t, l, o, r), n.ref !== t.ref && (t.effectTag |= 128);
                            else if (o) {
                                var u = Wo(jo.current);
                                if (Hi(t)) {
                                    var s = (o = t).stateNode;
                                    n = o.type;
                                    var c = o.memoizedProps,
                                        f = r;
                                    switch (s[sr] = o, s[cr] = c, l = void 0, r = s, n) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Sn("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (s = 0; s < Ze.length; s++) Sn(Ze[s], r);
                                            break;
                                        case "source":
                                            Sn("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Sn("error", r), Sn("load", r);
                                            break;
                                        case "form":
                                            Sn("reset", r), Sn("submit", r);
                                            break;
                                        case "details":
                                            Sn("toggle", r);
                                            break;
                                        case "input":
                                            Me(r, c), Sn("invalid", r), Wn(f, "onChange");
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!c.multiple
                                            }, Sn("invalid", r), Wn(f, "onChange");
                                            break;
                                        case "textarea":
                                            Re(r, c), Sn("invalid", r), Wn(f, "onChange")
                                    }
                                    for (l in Bn(n, c), s = null, c) c.hasOwnProperty(l) && (u = c[l], "children" === l ? "string" == typeof u ? r.textContent !== u && (s = ["children", u]) : "number" == typeof u && r.textContent !== "" + u && (s = ["children", "" + u]) : p.hasOwnProperty(l) && null != u && Wn(f, l));
                                    switch (n) {
                                        case "input":
                                            Ee(r), Ce(r, c, !0);
                                            break;
                                        case "textarea":
                                            Ee(r), Ue(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof c.onClick && (r.onclick = Vn)
                                    }
                                    l = s, o.updateQueue = l, (o = null !== l) && fl(t)
                                } else {
                                    n = t, f = l, c = o, s = 9 === r.nodeType ? r : r.ownerDocument, u === ze.html && (u = Fe(f)), u === ze.html ? "script" === f ? ((c = s.createElement("div")).innerHTML = "<script><\/script>", s = c.removeChild(c.firstChild)) : "string" == typeof c.is ? s = s.createElement(f, {
                                        is: c.is
                                    }) : (s = s.createElement(f), "select" === f && (f = s, c.multiple ? f.multiple = !0 : c.size && (f.size = c.size))) : s = s.createElementNS(u, f), (c = s)[sr] = n, c[cr] = o, tl(c, t, !1, !1), t.stateNode = c;
                                    var d = r,
                                        h = Hn(f = l, n = o);
                                    switch (f) {
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Sn("load", c), r = n;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (r = 0; r < Ze.length; r++) Sn(Ze[r], c);
                                            r = n;
                                            break;
                                        case "source":
                                            Sn("error", c), r = n;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Sn("error", c), Sn("load", c), r = n;
                                            break;
                                        case "form":
                                            Sn("reset", c), Sn("submit", c), r = n;
                                            break;
                                        case "details":
                                            Sn("toggle", c), r = n;
                                            break;
                                        case "input":
                                            Me(c, n), r = Te(c, n), Sn("invalid", c), Wn(d, "onChange");
                                            break;
                                        case "option":
                                            r = Ne(c, n);
                                            break;
                                        case "select":
                                            c._wrapperState = {
                                                wasMultiple: !!n.multiple
                                            }, r = a({}, n, {
                                                value: void 0
                                            }), Sn("invalid", c), Wn(d, "onChange");
                                            break;
                                        case "textarea":
                                            Re(c, n), r = De(c, n), Sn("invalid", c), Wn(d, "onChange");
                                            break;
                                        default:
                                            r = n
                                    }
                                    Bn(f, r), s = void 0, u = f;
                                    var m = c,
                                        g = r;
                                    for (s in g)
                                        if (g.hasOwnProperty(s)) {
                                            var v = g[s];
                                            "style" === s ? Fn(m, v) : "dangerouslySetInnerHTML" === s ? null != (v = v ? v.__html : void 0) && He(m, v) : "children" === s ? "string" == typeof v ? ("textarea" !== u || "" !== v) && We(m, v) : "number" == typeof v && We(m, "" + v) : "suppressContentEditableWarning" !== s && "suppressHydrationWarning" !== s && "autoFocus" !== s && (p.hasOwnProperty(s) ? null != v && Wn(d, s) : null != v && xe(m, s, v, h))
                                        }
                                    switch (f) {
                                        case "input":
                                            Ee(c), Ce(c, n, !1);
                                            break;
                                        case "textarea":
                                            Ee(c), Ue(c);
                                            break;
                                        case "option":
                                            null != n.value && c.setAttribute("value", "" + we(n.value));
                                            break;
                                        case "select":
                                            (r = c).multiple = !!n.multiple, null != (c = n.value) ? Oe(r, !!n.multiple, c, !1) : null != n.defaultValue && Oe(r, !!n.multiple, n.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof r.onClick && (c.onclick = Vn)
                                    }(o = nr(l, o)) && fl(t)
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            } else if (null === t.stateNode) throw Error(i(166));
                            break;
                        case 6:
                            if (n && null != t.stateNode) al(n, t, n.memoizedProps, o);
                            else {
                                if ("string" != typeof o && null === t.stateNode) throw Error(i(166));
                                r = Wo(Ho.current), Wo(jo.current), Hi(t) ? (l = (o = t).stateNode, r = o.memoizedProps, l[sr] = o, (o = l.nodeValue !== r) && fl(t)) : (l = t, (o = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(o))[sr] = l, t.stateNode = o)
                            }
                            break;
                        case 11:
                            break;
                        case 13:
                            if (pa(Qo), o = t.memoizedState, 0 != (64 & t.effectTag)) {
                                t.expirationTime = r;
                                break e
                            }
                            o = null !== o, l = !1, null === n ? void 0 !== t.memoizedProps.fallback && Hi(t) : (l = null !== (r = n.memoizedState), o || null === r || null !== (r = n.child.sibling) && (null !== (c = t.firstEffect) ? (t.firstEffect = r, r.nextEffect = c) : (t.firstEffect = t.lastEffect = r, r.nextEffect = null), r.effectTag = 8)), o && !l && 0 != (2 & t.mode) && (null === n && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Qo.current) ? Ql === zl && (Ql = Bl) : (Ql !== zl && Ql !== Bl || (Ql = Hl), 0 !== Zl && null !== ql && (ts(ql, Gl), ns(ql, Zl)))), (o || l) && (t.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            qo(), nl(t);
                            break;
                        case 10:
                            uo(t);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            _a(t.type) && wa();
                            break;
                        case 19:
                            if (pa(Qo), null === (o = t.memoizedState)) break;
                            if (l = 0 != (64 & t.effectTag), null === (c = o.rendering)) {
                                if (l) dl(o, !1);
                                else if (Ql !== zl || null !== n && 0 != (64 & n.effectTag))
                                    for (n = t.child; null !== n;) {
                                        if (null !== (c = Ko(n))) {
                                            for (t.effectTag |= 64, dl(o, !1), null !== (l = c.updateQueue) && (t.updateQueue = l, t.effectTag |= 4), null === o.lastEffect && (t.firstEffect = null), t.lastEffect = o.lastEffect, o = r, l = t.child; null !== l;) n = o, (r = l).effectTag &= 2, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null, null === (c = r.alternate) ? (r.childExpirationTime = 0, r.expirationTime = n, r.child = null, r.memoizedProps = null, r.memoizedState = null, r.updateQueue = null, r.dependencies = null) : (r.childExpirationTime = c.childExpirationTime, r.expirationTime = c.expirationTime, r.child = c.child, r.memoizedProps = c.memoizedProps, r.memoizedState = c.memoizedState, r.updateQueue = c.updateQueue, n = c.dependencies, r.dependencies = null === n ? null : {
                                                expirationTime: n.expirationTime,
                                                firstContext: n.firstContext,
                                                responders: n.responders
                                            }), l = l.sibling;
                                            ha(Qo, 1 & Qo.current | 2), t = t.child;
                                            break e
                                        }
                                        n = n.sibling
                                    }
                            } else {
                                if (!l)
                                    if (null !== (n = Ko(c))) {
                                        if (t.effectTag |= 64, l = !0, null !== (r = n.updateQueue) && (t.updateQueue = r, t.effectTag |= 4), dl(o, !0), null === o.tail && "hidden" === o.tailMode && !c.alternate) {
                                            null !== (t = t.lastEffect = o.lastEffect) && (t.nextEffect = null);
                                            break
                                        }
                                    } else qa() > o.tailExpiration && 1 < r && (t.effectTag |= 64, l = !0, dl(o, !1), t.expirationTime = t.childExpirationTime = r - 1);
                                o.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (r = o.last) ? r.sibling = c : t.child = c, o.last = c)
                            }
                            if (null !== o.tail) {
                                0 === o.tailExpiration && (o.tailExpiration = qa() + 500), r = o.tail, o.rendering = r, o.tail = r.sibling, o.lastEffect = t.lastEffect, r.sibling = null, o = Qo.current, ha(Qo, o = l ? 1 & o | 2 : 1 & o), t = r;
                                break e
                            }
                            break;
                        case 20:
                        case 21:
                            break;
                        default:
                            throw Error(i(156, t.tag))
                    }
                    t = null
                }
                if (o = $l, 1 === Gl || 1 !== o.childExpirationTime) {
                    for (l = 0, r = o.child; null !== r;)(n = r.expirationTime) > l && (l = n), (c = r.childExpirationTime) > l && (l = c), r = r.sibling;
                    o.childExpirationTime = l
                }
                if (null !== t) return t;null !== e && 0 == (2048 & e.effectTag) && (null === e.firstEffect && (e.firstEffect = $l.firstEffect), null !== $l.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = $l.firstEffect), e.lastEffect = $l.lastEffect), 1 < $l.effectTag && (null !== e.lastEffect ? e.lastEffect.nextEffect = $l : e.firstEffect = $l, e.lastEffect = $l))
            } else {
                if (null !== (t = pl($l))) return t.effectTag &= 2047, t;
                null !== e && (e.firstEffect = e.lastEffect = null, e.effectTag |= 2048)
            }
            if (null !== (t = $l.sibling)) return t;
            $l = e
        } while (null !== $l);
        return Ql === zl && (Ql = Wl), null
    }

    function Ou(e) {
        var t = e.expirationTime;
        return t > (e = e.childExpirationTime) ? t : e
    }

    function Du(e) {
        var t = $a();
        return Qa(99, Ru.bind(null, e, t)), null
    }

    function Ru(e, t) {
        do {
            Uu()
        } while (null !== uu);
        if ((Vl & (Ll | Ul)) !== Dl) throw Error(i(327));
        var n = e.finishedWork,
            r = e.finishedExpirationTime;
        if (null === n) return null;
        if (e.finishedWork = null, e.finishedExpirationTime = 0, n === e.current) throw Error(i(177));
        e.callbackNode = null, e.callbackExpirationTime = 0, e.callbackPriority = 90, e.nextKnownPendingLevel = 0;
        var a = Ou(n);
        if (e.firstPendingTime = a, r <= e.lastSuspendedTime ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : r <= e.firstSuspendedTime && (e.firstSuspendedTime = r - 1), r <= e.lastPingedTime && (e.lastPingedTime = 0), r <= e.lastExpiredTime && (e.lastExpiredTime = 0), e === ql && ($l = ql = null, Gl = 0), 1 < n.effectTag ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, a = n.firstEffect) : a = n : a = n.firstEffect, null !== a) {
            var o = Vl;
            Vl |= Ul, Ol.current = null, er = En;
            var l = Qn();
            if (Kn(l)) {
                if ("selectionStart" in l) var u = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
                else e: {
                    var s = (u = (u = l.ownerDocument) && u.defaultView || window).getSelection && u.getSelection();
                    if (s && 0 !== s.rangeCount) {
                        u = s.anchorNode;
                        var c = s.anchorOffset,
                            f = s.focusNode;
                        s = s.focusOffset;
                        try {
                            u.nodeType, f.nodeType
                        } catch (e) {
                            u = null;
                            break e
                        }
                        var d = 0,
                            p = -1,
                            h = -1,
                            m = 0,
                            g = 0,
                            v = l,
                            y = null;
                        t: for (;;) {
                            for (var b; v !== u || 0 !== c && 3 !== v.nodeType || (p = d + c), v !== f || 0 !== s && 3 !== v.nodeType || (h = d + s), 3 === v.nodeType && (d += v.nodeValue.length), null !== (b = v.firstChild);) y = v, v = b;
                            for (;;) {
                                if (v === l) break t;
                                if (y === u && ++m === c && (p = d), y === f && ++g === s && (h = d), null !== (b = v.nextSibling)) break;
                                y = (v = y).parentNode
                            }
                            v = b
                        }
                        u = -1 === p || -1 === h ? null : {
                            start: p,
                            end: h
                        }
                    } else u = null
                }
                u = u || {
                    start: 0,
                    end: 0
                }
            } else u = null;
            tr = {
                focusedElem: l,
                selectionRange: u
            }, En = !1, ru = a;
            do {
                try {
                    Lu()
                } catch (e) {
                    if (null === ru) throw Error(i(330));
                    ju(ru, e), ru = ru.nextEffect
                }
            } while (null !== ru);
            ru = a;
            do {
                try {
                    for (l = e, u = t; null !== ru;) {
                        var _ = ru.effectTag;
                        if (16 & _ && We(ru.stateNode, ""), 128 & _) {
                            var w = ru.alternate;
                            if (null !== w) {
                                var x = w.ref;
                                null !== x && ("function" == typeof x ? x(null) : x.current = null)
                            }
                        }
                        switch (1038 & _) {
                            case 2:
                                kl(ru), ru.effectTag &= -3;
                                break;
                            case 6:
                                kl(ru), ru.effectTag &= -3, Sl(ru.alternate, ru);
                                break;
                            case 1024:
                                ru.effectTag &= -1025;
                                break;
                            case 1028:
                                ru.effectTag &= -1025, Sl(ru.alternate, ru);
                                break;
                            case 4:
                                Sl(ru.alternate, ru);
                                break;
                            case 8:
                                El(l, c = ru, u), wl(c)
                        }
                        ru = ru.nextEffect
                    }
                } catch (e) {
                    if (null === ru) throw Error(i(330));
                    ju(ru, e), ru = ru.nextEffect
                }
            } while (null !== ru);
            if (x = tr, w = Qn(), _ = x.focusedElem, u = x.selectionRange, w !== _ && _ && _.ownerDocument && function e(t, n) {
                    return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
                }(_.ownerDocument.documentElement, _)) {
                null !== u && Kn(_) && (w = u.start, void 0 === (x = u.end) && (x = w), "selectionStart" in _ ? (_.selectionStart = w, _.selectionEnd = Math.min(x, _.value.length)) : (x = (w = _.ownerDocument || document) && w.defaultView || window).getSelection && (x = x.getSelection(), c = _.textContent.length, l = Math.min(u.start, c), u = void 0 === u.end ? l : Math.min(u.end, c), !x.extend && l > u && (c = u, u = l, l = c), c = Gn(_, l), f = Gn(_, u), c && f && (1 !== x.rangeCount || x.anchorNode !== c.node || x.anchorOffset !== c.offset || x.focusNode !== f.node || x.focusOffset !== f.offset) && ((w = w.createRange()).setStart(c.node, c.offset), x.removeAllRanges(), l > u ? (x.addRange(w), x.extend(f.node, f.offset)) : (w.setEnd(f.node, f.offset), x.addRange(w))))), w = [];
                for (x = _; x = x.parentNode;) 1 === x.nodeType && w.push({
                    element: x,
                    left: x.scrollLeft,
                    top: x.scrollTop
                });
                for ("function" == typeof _.focus && _.focus(), _ = 0; _ < w.length; _++)(x = w[_]).element.scrollLeft = x.left, x.element.scrollTop = x.top
            }
            tr = null, En = !!er, er = null, e.current = n, ru = a;
            do {
                try {
                    for (_ = r; null !== ru;) {
                        var k = ru.effectTag;
                        if (36 & k) {
                            var E = ru.alternate;
                            switch (x = _, (w = ru).tag) {
                                case 0:
                                case 11:
                                case 15:
                                    bl(16, 32, w);
                                    break;
                                case 1:
                                    var S = w.stateNode;
                                    if (4 & w.effectTag)
                                        if (null === E) S.componentDidMount();
                                        else {
                                            var T = w.elementType === w.type ? E.memoizedProps : to(w.type, E.memoizedProps);
                                            S.componentDidUpdate(T, E.memoizedState, S.__reactInternalSnapshotBeforeUpdate)
                                        }
                                    var M = w.updateQueue;
                                    null !== M && ko(0, M, S);
                                    break;
                                case 3:
                                    var A = w.updateQueue;
                                    if (null !== A) {
                                        if (l = null, null !== w.child) switch (w.child.tag) {
                                            case 5:
                                                l = w.child.stateNode;
                                                break;
                                            case 1:
                                                l = w.child.stateNode
                                        }
                                        ko(0, A, l)
                                    }
                                    break;
                                case 5:
                                    var P = w.stateNode;
                                    null === E && 4 & w.effectTag && nr(w.type, w.memoizedProps) && P.focus();
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                    break;
                                case 13:
                                    if (null === w.memoizedState) {
                                        var C = w.alternate;
                                        if (null !== C) {
                                            var I = C.memoizedState;
                                            if (null !== I) {
                                                var N = I.dehydrated;
                                                null !== N && St(N)
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
                                    throw Error(i(163))
                            }
                        }
                        if (128 & k) {
                            w = void 0;
                            var O = ru.ref;
                            if (null !== O) {
                                var D = ru.stateNode;
                                switch (ru.tag) {
                                    case 5:
                                        w = D;
                                        break;
                                    default:
                                        w = D
                                }
                                "function" == typeof O ? O(w) : O.current = w
                            }
                        }
                        ru = ru.nextEffect
                    }
                } catch (e) {
                    if (null === ru) throw Error(i(330));
                    ju(ru, e), ru = ru.nextEffect
                }
            } while (null !== ru);
            ru = null, ja(), Vl = o
        } else e.current = n;
        if (lu) lu = !1, uu = e, su = t;
        else
            for (ru = a; null !== ru;) t = ru.nextEffect, ru.nextEffect = null, ru = t;
        if (0 === (t = e.firstPendingTime) && (iu = null), 1073741823 === t ? e === du ? fu++ : (fu = 0, du = e) : fu = 0, "function" == typeof Wu && Wu(n.stateNode, r), bu(e), au) throw au = !1, e = ou, ou = null, e;
        return (Vl & Rl) !== Dl ? null : (Ya(), null)
    }

    function Lu() {
        for (; null !== ru;) {
            var e = ru.effectTag;
            0 != (256 & e) && yl(ru.alternate, ru), 0 == (512 & e) || lu || (lu = !0, Ka(97, (function() {
                return Uu(), null
            }))), ru = ru.nextEffect
        }
    }

    function Uu() {
        if (90 !== su) {
            var e = 97 < su ? 97 : su;
            return su = 90, Qa(e, zu)
        }
    }

    function zu() {
        if (null === uu) return !1;
        var e = uu;
        if (uu = null, (Vl & (Ll | Ul)) !== Dl) throw Error(i(331));
        var t = Vl;
        for (Vl |= Ul, e = e.current.firstEffect; null !== e;) {
            try {
                var n = e;
                if (0 != (512 & n.effectTag)) switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        bl(128, 0, n), bl(0, 64, n)
                }
            } catch (t) {
                if (null === e) throw Error(i(330));
                ju(e, t)
            }
            n = e.nextEffect, e.nextEffect = null, e = n
        }
        return Vl = t, Ya(), !0
    }

    function Fu(e, t, n) {
        yo(e, t = Al(e, t = hl(n, t), 1073741823)), null !== (e = vu(e, 1073741823)) && bu(e)
    }

    function ju(e, t) {
        if (3 === e.tag) Fu(e, e, t);
        else
            for (var n = e.return; null !== n;) {
                if (3 === n.tag) {
                    Fu(n, e, t);
                    break
                }
                if (1 === n.tag) {
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === iu || !iu.has(r))) {
                        yo(n, e = Pl(n, e = hl(t, e), 1073741823)), null !== (n = vu(n, 1073741823)) && bu(n);
                        break
                    }
                }
                n = n.return
            }
    }

    function Bu(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), ql === e && Gl === n ? Ql === Hl || Ql === Bl && 1073741823 === Xl && qa() - tu < nu ? Eu(e, Gl) : eu = !0 : es(e, n) && (0 !== (t = e.lastPingedTime) && t < n || (e.lastPingedTime = n, e.finishedExpirationTime === n && (e.finishedExpirationTime = 0, e.finishedWork = null), bu(e)))
    }

    function Hu(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t), 0 === (t = 0) && (t = mu(t = hu(), e, null)), null !== (e = vu(e, t)) && bu(e)
    }
    Cl = function(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            var a = t.pendingProps;
            if (e.memoizedProps !== a || va.current) qi = !0;
            else {
                if (r < n) {
                    switch (qi = !1, t.tag) {
                        case 3:
                            el(t), Wi();
                            break;
                        case 5:
                            if ($o(t), 4 & t.mode && 1 !== n && a.hidden) return t.expirationTime = t.childExpirationTime = 1, null;
                            break;
                        case 1:
                            _a(t.type) && Sa(t);
                            break;
                        case 4:
                            Vo(t, t.stateNode.containerInfo);
                            break;
                        case 10:
                            lo(t, t.memoizedProps.value);
                            break;
                        case 13:
                            if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? il(e, t, n) : (ha(Qo, 1 & Qo.current), null !== (t = cl(e, t, n)) ? t.sibling : null);
                            ha(Qo, 1 & Qo.current);
                            break;
                        case 19:
                            if (r = t.childExpirationTime >= n, 0 != (64 & e.effectTag)) {
                                if (r) return sl(e, t, n);
                                t.effectTag |= 64
                            }
                            if (null !== (a = t.memoizedState) && (a.rendering = null, a.tail = null), ha(Qo, Qo.current), !r) return null
                    }
                    return cl(e, t, n)
                }
                qi = !1
            }
        } else qi = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, a = ba(t, ga.current), co(t, n), a = hi(null, t, r, e, a, n), t.effectTag |= 1, "object" == typeof a && null !== a && "function" == typeof a.render && void 0 === a.$$typeof) {
                    if (t.tag = 1, mi(), _a(r)) {
                        var o = !0;
                        Sa(t)
                    } else o = !1;
                    t.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null;
                    var l = r.getDerivedStateFromProps;
                    "function" == typeof l && Mo(t, r, l, e), a.updater = Ao, t.stateNode = a, a._reactInternalFiber = t, No(t, r, e, n), t = Zi(null, t, r, !0, o, n)
                } else t.tag = 0, $i(null, t, a, n), t = t.child;
                return t;
            case 16:
                if (a = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps, function(e) {
                        if (-1 === e._status) {
                            e._status = 0;
                            var t = e._ctor;
                            t = t(), e._result = t, t.then((function(t) {
                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                            }), (function(t) {
                                0 === e._status && (e._status = 2, e._result = t)
                            }))
                        }
                    }(a), 1 !== a._status) throw a._result;
                switch (a = a._result, t.type = a, o = t.tag = function(e) {
                    if ("function" == typeof e) return Gu(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === V) return 11;
                        if (e === G) return 14
                    }
                    return 2
                }(a), e = to(a, e), o) {
                    case 0:
                        t = Yi(null, t, a, e, n);
                        break;
                    case 1:
                        t = Ji(null, t, a, e, n);
                        break;
                    case 11:
                        t = Gi(null, t, a, e, n);
                        break;
                    case 14:
                        t = Qi(null, t, a, to(a.type, e), r, n);
                        break;
                    default:
                        throw Error(i(306, a, ""))
                }
                return t;
            case 0:
                return r = t.type, a = t.pendingProps, Yi(e, t, r, a = t.elementType === r ? a : to(r, a), n);
            case 1:
                return r = t.type, a = t.pendingProps, Ji(e, t, r, a = t.elementType === r ? a : to(r, a), n);
            case 3:
                if (el(t), null === (r = t.updateQueue)) throw Error(i(282));
                if (a = null !== (a = t.memoizedState) ? a.element : null, xo(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === a) Wi(), t = cl(e, t, n);
                else {
                    if ((a = t.stateNode.hydrate) && (Li = ir(t.stateNode.containerInfo.firstChild), Ri = t, a = Ui = !0), a)
                        for (n = zo(t, null, r, n), t.child = n; n;) n.effectTag = -3 & n.effectTag | 1024, n = n.sibling;
                    else $i(e, t, r, n), Wi();
                    t = t.child
                }
                return t;
            case 5:
                return $o(t), null === e && ji(t), r = t.type, a = t.pendingProps, o = null !== e ? e.memoizedProps : null, l = a.children, rr(r, a) ? l = null : null !== o && rr(r, o) && (t.effectTag |= 16), Xi(e, t), 4 & t.mode && 1 !== n && a.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : ($i(e, t, l, n), t = t.child), t;
            case 6:
                return null === e && ji(t), null;
            case 13:
                return il(e, t, n);
            case 4:
                return Vo(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Uo(t, null, r, n) : $i(e, t, r, n), t.child;
            case 11:
                return r = t.type, a = t.pendingProps, Gi(e, t, r, a = t.elementType === r ? a : to(r, a), n);
            case 7:
                return $i(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return $i(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, a = t.pendingProps, l = t.memoizedProps, lo(t, o = a.value), null !== l) {
                        var u = l.value;
                        if (0 === (o = ea(u, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, o) : 1073741823))) {
                            if (l.children === a.children && !va.current) {
                                t = cl(e, t, n);
                                break e
                            }
                        } else
                            for (null !== (u = t.child) && (u.return = t); null !== u;) {
                                var s = u.dependencies;
                                if (null !== s) {
                                    l = u.child;
                                    for (var c = s.firstContext; null !== c;) {
                                        if (c.context === r && 0 != (c.observedBits & o)) {
                                            1 === u.tag && ((c = go(n, null)).tag = 2, yo(u, c)), u.expirationTime < n && (u.expirationTime = n), null !== (c = u.alternate) && c.expirationTime < n && (c.expirationTime = n), so(u.return, n), s.expirationTime < n && (s.expirationTime = n);
                                            break
                                        }
                                        c = c.next
                                    }
                                } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                                if (null !== l) l.return = u;
                                else
                                    for (l = u; null !== l;) {
                                        if (l === t) {
                                            l = null;
                                            break
                                        }
                                        if (null !== (u = l.sibling)) {
                                            u.return = l.return, l = u;
                                            break
                                        }
                                        l = l.return
                                    }
                                u = l
                            }
                    }
                    $i(e, t, a.children, n), t = t.child
                }
                return t;
            case 9:
                return a = t.type, r = (o = t.pendingProps).children, co(t, n), r = r(a = fo(a, o.unstable_observedBits)), t.effectTag |= 1, $i(e, t, r, n), t.child;
            case 14:
                return o = to(a = t.type, t.pendingProps), Qi(e, t, a, o = to(a.type, o), r, n);
            case 15:
                return Ki(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, a = t.pendingProps, a = t.elementType === r ? a : to(r, a), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, _a(r) ? (e = !0, Sa(t)) : e = !1, co(t, n), Co(t, r, a), No(t, r, a, n), Zi(null, t, r, !0, e, n);
            case 19:
                return sl(e, t, n)
        }
        throw Error(i(156, t.tag))
    };
    var Wu = null,
        Vu = null;

    function qu(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function $u(e, t, n, r) {
        return new qu(e, t, n, r)
    }

    function Gu(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Qu(e, t) {
        var n = e.alternate;
        return null === n ? ((n = $u(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
            expirationTime: t.expirationTime,
            firstContext: t.firstContext,
            responders: t.responders
        }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Ku(e, t, n, r, a, o) {
        var l = 2;
        if (r = e, "function" == typeof e) Gu(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else e: switch (e) {
            case z:
                return Xu(n.children, a, o, t);
            case W:
                l = 8, a |= 7;
                break;
            case F:
                l = 8, a |= 1;
                break;
            case j:
                return (e = $u(12, n, t, 8 | a)).elementType = j, e.type = j, e.expirationTime = o, e;
            case q:
                return (e = $u(13, n, t, a)).type = q, e.elementType = q, e.expirationTime = o, e;
            case $:
                return (e = $u(19, n, t, a)).elementType = $, e.expirationTime = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case B:
                        l = 10;
                        break e;
                    case H:
                        l = 9;
                        break e;
                    case V:
                        l = 11;
                        break e;
                    case G:
                        l = 14;
                        break e;
                    case Q:
                        l = 16, r = null;
                        break e
                }
                throw Error(i(130, null == e ? e : typeof e, ""))
        }
        return (t = $u(l, n, t, a)).elementType = e, t.type = r, t.expirationTime = o, t
    }

    function Xu(e, t, n, r) {
        return (e = $u(7, e, r, t)).expirationTime = n, e
    }

    function Yu(e, t, n) {
        return (e = $u(6, e, null, t)).expirationTime = n, e
    }

    function Ju(e, t, n) {
        return (t = $u(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Zu(e, t, n) {
        this.tag = t, this.current = null, this.containerInfo = e, this.pingCache = this.pendingChildren = null, this.finishedExpirationTime = 0, this.finishedWork = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 90, this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0
    }

    function es(e, t) {
        var n = e.firstSuspendedTime;
        return e = e.lastSuspendedTime, 0 !== n && n >= t && e <= t
    }

    function ts(e, t) {
        var n = e.firstSuspendedTime,
            r = e.lastSuspendedTime;
        n < t && (e.firstSuspendedTime = t), (r > t || 0 === n) && (e.lastSuspendedTime = t), t <= e.lastPingedTime && (e.lastPingedTime = 0), t <= e.lastExpiredTime && (e.lastExpiredTime = 0)
    }

    function ns(e, t) {
        t > e.firstPendingTime && (e.firstPendingTime = t);
        var n = e.firstSuspendedTime;
        0 !== n && (t >= n ? e.firstSuspendedTime = e.lastSuspendedTime = e.nextKnownPendingLevel = 0 : t >= e.lastSuspendedTime && (e.lastSuspendedTime = t + 1), t > e.nextKnownPendingLevel && (e.nextKnownPendingLevel = t))
    }

    function rs(e, t) {
        var n = e.lastExpiredTime;
        (0 === n || n > t) && (e.lastExpiredTime = t)
    }

    function as(e, t, n, r) {
        var a = t.current,
            o = hu(),
            l = So.suspense;
        o = mu(o, a, l);
        e: if (n) {
            t: {
                if (et(n = n._reactInternalFiber) !== n || 1 !== n.tag) throw Error(i(170));
                var u = n;
                do {
                    switch (u.tag) {
                        case 3:
                            u = u.stateNode.context;
                            break t;
                        case 1:
                            if (_a(u.type)) {
                                u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    u = u.return
                } while (null !== u);
                throw Error(i(171))
            }
            if (1 === n.tag) {
                var s = n.type;
                if (_a(s)) {
                    n = Ea(n, s, u);
                    break e
                }
            }
            n = u
        } else n = ma;
        return null === t.context ? t.context = n : t.pendingContext = n, (t = go(o, l)).payload = {
            element: e
        }, null !== (r = void 0 === r ? null : r) && (t.callback = r), yo(a, t), gu(a, o), o
    }

    function os(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function is(e, t) {
        null !== (e = e.memoizedState) && null !== e.dehydrated && e.retryTime < t && (e.retryTime = t)
    }

    function ls(e, t) {
        is(e, t), (e = e.alternate) && is(e, t)
    }

    function us(e, t, n) {
        var r = new Zu(e, t, n = null != n && !0 === n.hydrate),
            a = $u(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0);
        r.current = a, a.stateNode = r, e[fr] = r.current, n && 0 !== t && function(e) {
            var t = Dn(e);
            mt.forEach((function(n) {
                Rn(n, e, t)
            })), gt.forEach((function(n) {
                Rn(n, e, t)
            }))
        }(9 === e.nodeType ? e : e.ownerDocument), this._internalRoot = r
    }

    function ss(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function cs(e, t, n, r, a) {
        var o = n._reactRootContainer;
        if (o) {
            var i = o._internalRoot;
            if ("function" == typeof a) {
                var l = a;
                a = function() {
                    var e = os(i);
                    l.call(e)
                }
            }
            as(t, i, e, a)
        } else {
            if (o = n._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var n; n = e.lastChild;) e.removeChild(n);
                    return new us(e, 0, t ? {
                        hydrate: !0
                    } : void 0)
                }(n, r), i = o._internalRoot, "function" == typeof a) {
                var u = a;
                a = function() {
                    var e = os(i);
                    u.call(e)
                }
            }
            ku((function() {
                as(t, i, e, a)
            }))
        }
        return os(i)
    }

    function fs(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ss(t)) throw Error(i(200));
        return function(e, t, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return {
                $$typeof: U,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n
            }
        }(e, t, null, n)
    }
    us.prototype.render = function(e, t) {
        as(e, this._internalRoot, null, void 0 === t ? null : t)
    }, us.prototype.unmount = function(e) {
        var t = this._internalRoot,
            n = void 0 === e ? null : e,
            r = t.containerInfo;
        as(null, t, null, (function() {
            r[fr] = null, null !== n && n()
        }))
    }, at = function(e) {
        if (13 === e.tag) {
            var t = eo(hu(), 150, 100);
            gu(e, t), ls(e, t)
        }
    }, ot = function(e) {
        if (13 === e.tag) {
            hu();
            var t = Za++;
            gu(e, t), ls(e, t)
        }
    }, it = function(e) {
        if (13 === e.tag) {
            var t = hu();
            gu(e, t = mu(t, e, null)), ls(e, t)
        }
    }, ee = function(e, t, n) {
        switch (t) {
            case "input":
                if (Pe(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var a = mr(r);
                            if (!a) throw Error(i(90));
                            Se(r), Pe(r, a)
                        }
                    }
                }
                break;
            case "textarea":
                Le(e, n);
                break;
            case "select":
                null != (t = n.value) && Oe(e, !!n.multiple, t, !1)
        }
    }, ie = xu, le = function(e, t, n, r) {
        var a = Vl;
        Vl |= 4;
        try {
            return Qa(98, e.bind(null, t, n, r))
        } finally {
            (Vl = a) === Dl && Ya()
        }
    }, ue = function() {
        (Vl & (1 | Ll | Ul)) === Dl && (function() {
            if (null !== cu) {
                var e = cu;
                cu = null, e.forEach((function(e, t) {
                    rs(t, e), bu(t)
                })), Ya()
            }
        }(), Uu())
    }, se = function(e, t) {
        var n = Vl;
        Vl |= 2;
        try {
            return e(t)
        } finally {
            (Vl = n) === Dl && Ya()
        }
    };
    var ds, ps, hs = {
        createPortal: fs,
        findDOMNode: function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            if (void 0 === t) {
                if ("function" == typeof e.render) throw Error(i(188));
                throw Error(i(268, Object.keys(e)))
            }
            return e = null === (e = rt(t)) ? null : e.stateNode
        },
        hydrate: function(e, t, n) {
            if (!ss(t)) throw Error(i(200));
            return cs(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            if (!ss(t)) throw Error(i(200));
            return cs(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
            if (!ss(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternalFiber) throw Error(i(38));
            return cs(e, t, n, !1, r)
        },
        unmountComponentAtNode: function(e) {
            if (!ss(e)) throw Error(i(40));
            return !!e._reactRootContainer && (ku((function() {
                cs(null, null, e, !1, (function() {
                    e._reactRootContainer = null, e[fr] = null
                }))
            })), !0)
        },
        unstable_createPortal: function() {
            return fs.apply(void 0, arguments)
        },
        unstable_batchedUpdates: xu,
        flushSync: function(e, t) {
            if ((Vl & (Ll | Ul)) !== Dl) throw Error(i(187));
            var n = Vl;
            Vl |= 1;
            try {
                return Qa(99, e.bind(null, t))
            } finally {
                Vl = n, Ya()
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [pr, hr, mr, I.injectEventPluginsByName, d, Nt, function(e) {
                M(e, It)
            }, ae, oe, Cn, C, Uu, {
                current: !1
            }]
        }
    };
    ps = (ds = {
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
                Wu = function(e) {
                    try {
                        t.onCommitFiberRoot(n, e, void 0, 64 == (64 & e.current.effectTag))
                    } catch (e) {}
                }, Vu = function(e) {
                    try {
                        t.onCommitFiberUnmount(n, e)
                    } catch (e) {}
                }
            } catch (e) {}
        }(a({}, ds, {
            overrideHookState: null,
            overrideProps: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: O.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = rt(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return ps ? ps(e) : null
            },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null
        }));
    var ms = {
            default: hs
        },
        gs = ms && hs || ms;
    e.exports = gs.default || gs
}, function(e, t, n) {
    "use strict";
    e.exports = n(11)
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
    var r, a, o, i, l;
    if (Object.defineProperty(t, "__esModule", {
            value: !0
        }), "undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null,
            s = null,
            c = function() {
                if (null !== u) try {
                    var e = t.unstable_now();
                    u(!0, e), u = null
                } catch (e) {
                    throw setTimeout(c, 0), e
                }
            },
            f = Date.now();
        t.unstable_now = function() {
            return Date.now() - f
        }, r = function(e) {
            null !== u ? setTimeout(r, 0, e) : (u = e, setTimeout(c, 0))
        }, a = function(e, t) {
            s = setTimeout(e, t)
        }, o = function() {
            clearTimeout(s)
        }, i = function() {
            return !1
        }, l = t.unstable_forceFrameRate = function() {}
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
            var v = p.now();
            t.unstable_now = function() {
                return p.now() - v
            }
        }
        var y = !1,
            b = null,
            _ = -1,
            w = 5,
            x = 0;
        i = function() {
            return t.unstable_now() >= x
        }, l = function() {}, t.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : w = 0 < e ? Math.floor(1e3 / e) : 5
        };
        var k = new MessageChannel,
            E = k.port2;
        k.port1.onmessage = function() {
            if (null !== b) {
                var e = t.unstable_now();
                x = e + w;
                try {
                    b(!0, e) ? E.postMessage(null) : (y = !1, b = null)
                } catch (e) {
                    throw E.postMessage(null), e
                }
            } else y = !1
        }, r = function(e) {
            b = e, y || (y = !0, E.postMessage(null))
        }, a = function(e, n) {
            _ = h((function() {
                e(t.unstable_now())
            }), n)
        }, o = function() {
            m(_), _ = -1
        }
    }

    function S(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
            var r = Math.floor((n - 1) / 2),
                a = e[r];
            if (!(void 0 !== a && 0 < A(a, t))) break e;
            e[r] = t, e[n] = a, n = r
        }
    }

    function T(e) {
        return void 0 === (e = e[0]) ? null : e
    }

    function M(e) {
        var t = e[0];
        if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
                e[0] = n;
                e: for (var r = 0, a = e.length; r < a;) {
                    var o = 2 * (r + 1) - 1,
                        i = e[o],
                        l = o + 1,
                        u = e[l];
                    if (void 0 !== i && 0 > A(i, n)) void 0 !== u && 0 > A(u, i) ? (e[r] = u, e[l] = n, r = l) : (e[r] = i, e[o] = n, r = o);
                    else {
                        if (!(void 0 !== u && 0 > A(u, n))) break e;
                        e[r] = u, e[l] = n, r = l
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
    var P = [],
        C = [],
        I = 1,
        N = null,
        O = 3,
        D = !1,
        R = !1,
        L = !1;

    function U(e) {
        for (var t = T(C); null !== t;) {
            if (null === t.callback) M(C);
            else {
                if (!(t.startTime <= e)) break;
                M(C), t.sortIndex = t.expirationTime, S(P, t)
            }
            t = T(C)
        }
    }

    function z(e) {
        if (L = !1, U(e), !R)
            if (null !== T(P)) R = !0, r(F);
            else {
                var t = T(C);
                null !== t && a(z, t.startTime - e)
            }
    }

    function F(e, n) {
        R = !1, L && (L = !1, o()), D = !0;
        var r = O;
        try {
            for (U(n), N = T(P); null !== N && (!(N.expirationTime > n) || e && !i());) {
                var l = N.callback;
                if (null !== l) {
                    N.callback = null, O = N.priorityLevel;
                    var u = l(N.expirationTime <= n);
                    n = t.unstable_now(), "function" == typeof u ? N.callback = u : N === T(P) && M(P), U(n)
                } else M(P);
                N = T(P)
            }
            if (null !== N) var s = !0;
            else {
                var c = T(C);
                null !== c && a(z, c.startTime - n), s = !1
            }
            return s
        } finally {
            N = null, O = r, D = !1
        }
    }

    function j(e) {
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
    var B = l;
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
        var n = O;
        O = e;
        try {
            return t()
        } finally {
            O = n
        }
    }, t.unstable_next = function(e) {
        switch (O) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = O
        }
        var n = O;
        O = t;
        try {
            return e()
        } finally {
            O = n
        }
    }, t.unstable_scheduleCallback = function(e, n, i) {
        var l = t.unstable_now();
        if ("object" == typeof i && null !== i) {
            var u = i.delay;
            u = "number" == typeof u && 0 < u ? l + u : l, i = "number" == typeof i.timeout ? i.timeout : j(e)
        } else i = j(e), u = l;
        return e = {
            id: I++,
            callback: n,
            priorityLevel: e,
            startTime: u,
            expirationTime: i = u + i,
            sortIndex: -1
        }, u > l ? (e.sortIndex = u, S(C, e), null === T(P) && e === T(C) && (L ? o() : L = !0, a(z, u - l))) : (e.sortIndex = i, S(P, e), R || D || (R = !0, r(F))), e
    }, t.unstable_cancelCallback = function(e) {
        e.callback = null
    }, t.unstable_wrapCallback = function(e) {
        var t = O;
        return function() {
            var n = O;
            O = t;
            try {
                return e.apply(this, arguments)
            } finally {
                O = n
            }
        }
    }, t.unstable_getCurrentPriorityLevel = function() {
        return O
    }, t.unstable_shouldYield = function() {
        var e = t.unstable_now();
        U(e);
        var n = T(P);
        return n !== N && null !== N && null !== n && null !== n.callback && n.startTime <= e && n.expirationTime < N.expirationTime || i()
    }, t.unstable_requestPaint = B, t.unstable_continueExecution = function() {
        R || D || (R = !0, r(F))
    }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
        return T(P)
    }, t.unstable_Profiling = null
}, function(e) {
    e.exports = JSON.parse('{"weapons":[{"name":"Stock Gun","range":250,"damage":20,"speed":50,"charge":8,"price":0,"ammo":-1,"level":0,"order":0,"type":"Gun","bot":true},{"name":"Plasma Gun","range":150,"damage":45,"speed":40,"charge":10,"price":2000,"ammo":175,"level":2,"order":2,"type":"Gun","bot":true},{"name":"Reverse Gun","range":250,"damage":30,"speed":50,"charge":8,"price":1000,"ammo":-1,"level":1,"order":1,"type":"Gun","bot":false},{"name":"Rifle","range":750,"damage":30,"speed":80,"charge":10,"price":5000,"ammo":40,"level":5,"order":4,"type":"Gun","bot":true},{"name":"Shotgun","range":100,"damage":20,"speed":50,"charge":15,"price":5000,"ammo":40,"level":3,"order":3,"type":"Gun","bot":true},{"name":"Machine Gun","range":250,"damage":10,"speed":80,"charge":4,"price":6000,"ammo":500,"level":4,"order":5,"type":"Gun","bot":true},{"name":"Minigun","range":250,"damage":8,"speed":60,"charge":4,"price":30000,"ammo":500,"level":6,"order":6,"type":"Gun","bot":true},{"name":"Plasma Beam","range":60,"damage":5,"speed":-1,"charge":3,"price":6000,"ammo":-1,"level":1,"order":19,"type":"Beam","bot":true},{"name":"Laser Beam","range":60,"damage":22,"speed":-1,"charge":10,"price":12000,"ammo":-1,"level":4,"order":20,"type":"Beam","bot":true},{"name":"Hadron Beam","range":125,"damage":80,"speed":-1,"charge":50,"price":30000,"ammo":-1,"level":8,"order":21,"type":"Beam","bot":true},{"name":"Missile","range":1000,"damage":20,"speed":100,"charge":12,"price":4000,"ammo":20,"level":0,"order":9,"type":"Missile","bot":true},{"name":"Heavy Missile","range":750,"damage":40,"speed":60,"charge":20,"price":10000,"ammo":20,"level":3,"order":10,"type":"Missile","bot":true},{"name":"EMP Missile","range":750,"damage":25,"speed":100,"charge":50,"price":40000,"ammo":10,"level":7,"order":12,"type":"Missile","bot":false},{"name":"Missile Swarm","range":750,"damage":-1,"speed":50,"charge":100,"price":60000,"ammo":5,"level":9,"order":13,"type":"Missile","bot":true},{"name":"Torpedo","range":3000,"damage":12,"speed":120,"charge":30,"price":18000,"ammo":15,"level":5,"order":11,"type":"Missile","bot":true},{"name":"Mine","range":16,"damage":45,"speed":-1,"charge":25,"price":1000,"ammo":15,"level":0,"order":26,"type":"Mine","bot":false},{"name":"Laser Mine","range":64,"damage":50,"speed":-1,"charge":100,"price":6000,"ammo":10,"level":3,"order":29,"type":"Mine","bot":false},{"name":"EMP Mine","range":24,"damage":30,"speed":-1,"charge":100,"price":10000,"ammo":4,"level":6,"order":30,"type":"Mine","bot":false},{"name":"Hull Nanobots","range":-1,"damage":-150,"speed":-1,"charge":175,"price":50000,"ammo":3,"level":8,"order":34,"type":"Misc","bot":false},{"name":"Photon Cloak","range":-1,"damage":-1,"speed":-1,"charge":600,"price":30000,"ammo":2,"level":4,"order":35,"type":"Misc","bot":false},{"name":"Generator","range":-1,"damage":-1,"speed":-1,"charge":0,"price":60000,"ammo":-1,"level":9,"order":37,"type":"Misc","bot":false},{"name":"Turbo","range":-1,"damage":-1,"speed":1.44,"charge":0,"price":15000,"ammo":-1,"level":2,"order":31,"type":"Misc","bot":false},{"name":"Hyperdrive","range":-1,"damage":-1,"speed":10000,"charge":0,"price":3500,"ammo":-2,"level":5,"order":32,"type":"Misc","bot":false},{"name":"Pulse Wave","range":10000,"damage":0,"speed":40,"charge":100,"price":25000,"ammo":1,"level":7,"order":36,"type":"Misc","bot":false},{"name":"Electromagnet","range":512,"damage":0.1666,"speed":-1,"charge":0,"price":40000,"ammo":-1,"level":8,"order":38,"type":"Misc","bot":false},{"name":"EMP Blast","range":100000,"damage":-1,"speed":-1,"charge":150,"price":50000,"ammo":2,"level":9,"order":24,"type":"Blast","bot":false},{"name":"Mining Laser","range":100,"damage":30,"speed":-1,"charge":5,"price":5000,"ammo":-1,"level":1,"order":16,"type":"Beam","bot":false},{"name":"Turret","range":1000,"damage":30,"speed":-1,"charge":8,"price":750000,"ammo":-2,"level":10,"order":40,"type":"Misc","bot":false},{"name":"Gravity Bomb","range":2500,"damage":300,"speed":10,"charge":0,"price":2000000,"ammo":-2,"level":10,"order":41,"type":"Misc","bot":false},{"name":"Warp Drive","range":-1,"damage":-1,"speed":500,"charge":150,"price":200000,"ammo":3,"level":7,"order":33,"type":"Misc","bot":false},{"name":"Ore Cannon","range":200,"damage":60,"speed":-1,"charge":5,"price":20000,"ammo":-1,"level":2,"order":17,"type":"Beam","bot":false},{"name":"Destabilizer","range":1000000,"damage":-1,"speed":-1,"charge":100,"price":4000,"ammo":3,"level":6,"order":22,"type":"Beam","bot":false},{"name":"Impulse Mine","range":16,"damage":0,"speed":-1,"charge":25,"price":6000,"ammo":10,"level":4,"order":27,"type":"Mine","bot":false},{"name":"Grenades","range":16,"damage":45,"speed":30,"charge":25,"price":8000,"ammo":10,"level":3,"order":28,"type":"Mine","bot":false},{"name":"Muon Ray","range":10000,"damage":300,"speed":-1,"charge":200,"price":1000000,"ammo":1,"level":10,"order":23,"type":"Blast","bot":false},{"name":"Jammer","range":16,"damage":0,"speed":-1,"charge":3,"price":40000,"ammo":-1,"level":10,"order":18,"type":"Beam","bot":false},{"name":"Supercharger","range":-1,"damage":-1,"speed":-1,"charge":0,"price":100000,"ammo":-2,"level":11,"order":39,"type":"Misc","bot":false},{"name":"Energy Disk","range":125,"damage":25,"speed":8,"charge":25,"price":5000,"ammo":15,"level":0,"order":15,"type":"Orb","bot":true},{"name":"Proximity Fuze","range":125,"damage":25,"speed":40,"charge":25,"price":5000,"ammo":15,"level":5,"order":14,"type":"Missile","bot":true},{"name":"Spreadshot","range":250,"damage":8,"speed":60,"charge":4,"price":30000,"ammo":200,"level":6,"order":7,"type":"Gun","bot":true},{"name":"Submachinegun","range":250,"damage":10,"speed":60,"charge":10,"price":30000,"ammo":1000,"level":6,"order":8,"type":"Gun","bot":true},{"name":"Hypno Ray","range":10000,"damage":0,"speed":-1,"charge":25,"price":5000,"ammo":-2,"level":5,"order":25,"type":"Blast","bot":false}],"planets":["Inocybe","Bisporus","Lophophora","Pluteus","Pholiotina","Panaeolina","Conocybe","Fimicola","Cubensis","Mycena","Cyanescens","Semilanceata","Bohemica","Guzman","Lysergia","Stuntzii","Muscaria","Gymnopilus","Baeocystis","Cordispora","Acutipilea","Rosetta","Copelandia","Azurescens","Indica","Panaeolus","Ovoid","Stropharea","Ayahuasca","Psilocybe","Agaricales","Venenata","Weilii","Amanita","Mexicana","Galerina","Basidius","Argyreia","Allenii","Stamets","Mycetes","Cinctulus","Lophophora","Purpurea","Tampanensis","Aztecorum","Muscaria","Somniferum","Caapi"],"ships":[{"thrust":0.8,"health":100,"agility":1.75,"width":64,"price":7500,"weapons":1,"capacity":4000},{"thrust":0.8,"health":120,"agility":2,"width":64,"price":12500,"weapons":2,"capacity":4800},{"thrust":0.7,"health":180,"agility":1,"width":64,"price":20000,"weapons":3,"capacity":10000},{"thrust":0.9,"health":80,"agility":2.2,"width":64,"price":25000,"weapons":3,"capacity":2000},{"thrust":0.7,"health":150,"agility":2.2,"width":64,"price":40000,"weapons":4,"capacity":1800},{"thrust":0.6,"health":175,"agility":1.5,"width":64,"price":50000,"weapons":5,"capacity":4000},{"thrust":0.65,"health":130,"agility":0.8,"width":64,"price":75000,"weapons":6,"capacity":3000},{"thrust":0.45,"health":250,"agility":0.7,"width":128,"price":100000,"weapons":6,"capacity":3500},{"thrust":0.55,"health":180,"agility":0.8,"width":128,"price":200000,"weapons":7,"capacity":3000},{"thrust":0.4,"health":270,"agility":0.7,"width":128,"price":250000,"weapons":7,"capacity":8000},{"thrust":0.45,"health":250,"agility":0.8,"width":128,"price":250000,"weapons":8,"capacity":5000},{"thrust":0.5,"health":220,"agility":0.7,"width":128,"weapons":8,"price":400000,"capacity":2000},{"thrust":0.3,"health":600,"agility":0.3,"width":192,"price":400000,"weapons":9,"capacity":50000},{"thrust":0.35,"health":300,"agility":0.3,"width":128,"price":500000,"weapons":9,"capacity":10000},{"thrust":0.4,"health":250,"agility":0.5,"width":128,"price":1000000,"weapons":9,"capacity":2000},{"thrust":0.32,"health":500,"agility":0.3,"width":192,"price":1000000,"weapons":10,"capacity":20000},{"thrust":0.5,"health":250,"agility":0.4,"width":128,"weapons":"10 + Turbo (active) + C-turbo simultaneous combo (passive)","price":2000000,"capacity":5000},{"thrust":0.22,"health":800,"agility":0.3,"width":192,"price":2500000,"weapons":"10 + Asteroid launcher (active) + Mining web (passive)","capacity":999999},{"thrust":0.32,"health":500,"agility":0.3,"width":128,"price":3000000,"weapons":"10 + Spreadshot (active)","capacity":10000},{"thrust":0.4,"health":300,"agility":0.5,"width":128,"price":5000000,"weapons":"10 + Healing item (active) + 1.5 sec EMP sector blast (passive)","capacity":5000},{"thrust":0.2,"health":600,"agility":0.25,"width":192,"price":10000000,"weapons":"10 + Grav Bomb launcher (active)","capacity":20000}]}')
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
            var a = function() {
                this.init()
            };
            a.prototype = {
                init: function() {
                    var e = this || o;
                    return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
                },
                volume: function(e) {
                    var t = this || o;
                    if (e = parseFloat(e), t.ctx || p(), void 0 !== e && e >= 0 && e <= 1) {
                        if (t._volume = e, t._muted) return t;
                        t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, o.ctx.currentTime);
                        for (var n = 0; n < t._howls.length; n++)
                            if (!t._howls[n]._webAudio)
                                for (var r = t._howls[n]._getSoundIds(), a = 0; a < r.length; a++) {
                                    var i = t._howls[n]._soundById(r[a]);
                                    i && i._node && (i._node.volume = i._volume * e)
                                }
                            return t
                    }
                    return t._volume
                },
                mute: function(e) {
                    var t = this || o;
                    t.ctx || p(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, o.ctx.currentTime);
                    for (var n = 0; n < t._howls.length; n++)
                        if (!t._howls[n]._webAudio)
                            for (var r = t._howls[n]._getSoundIds(), a = 0; a < r.length; a++) {
                                var i = t._howls[n]._soundById(r[a]);
                                i && i._node && (i._node.muted = !!e || i._muted)
                            }
                        return t
                },
                unload: function() {
                    for (var e = this || o, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                    return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, p()), e
                },
                codecs: function(e) {
                    return (this || o)._codecs[e.replace(/^x-/, "")]
                },
                _setup: function() {
                    var e = this || o;
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
                    var e = this || o,
                        t = null;
                    try {
                        t = "undefined" != typeof Audio ? new Audio : null
                    } catch (t) {
                        return e
                    }
                    if (!t || "function" != typeof t.canPlayType) return e;
                    var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                        r = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                        a = r && parseInt(r[0].split("/")[1], 10) < 33;
                    return e._codecs = {
                        mp3: !(a || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
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
                    var e = this || o;
                    if (!e._audioUnlocked && e.ctx) {
                        e._audioUnlocked = !1, e.autoUnlock = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                        var t = function(n) {
                            for (var r = 0; r < e.html5PoolSize; r++) try {
                                var a = new Audio;
                                a._unlocked = !0, e._releaseHtml5Audio(a)
                            } catch (n) {
                                e.noAudio = !0
                            }
                            for (r = 0; r < e._howls.length; r++)
                                if (!e._howls[r]._webAudio)
                                    for (var o = e._howls[r]._getSoundIds(), i = 0; i < o.length; i++) {
                                        var l = e._howls[r]._soundById(o[i]);
                                        l && l._node && !l._node._unlocked && (l._node._unlocked = !0, l._node.load())
                                    }
                                e._autoResume();
                            var u = e.ctx.createBufferSource();
                            u.buffer = e._scratchBuffer, u.connect(e.ctx.destination), void 0 === u.start ? u.noteOn(0) : u.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), u.onended = function() {
                                u.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0);
                                for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit("unlock")
                            }
                        };
                        return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), e
                    }
                },
                _obtainHtml5Audio: function() {
                    var e = this || o;
                    if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                    var t = (new Audio).play();
                    return t && "undefined" != typeof Promise && (t instanceof Promise || "function" == typeof t.then) && t.catch((function() {
                        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                    })), new Audio
                },
                _releaseHtml5Audio: function(e) {
                    var t = this || o;
                    return e._unlocked && t._html5AudioPool.push(e), t
                },
                _autoSuspend: function() {
                    var e = this;
                    if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && o.usingWebAudio) {
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
                    if (e.ctx && void 0 !== e.ctx.resume && o.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then((function() {
                        e.state = "running";
                        for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                    })), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                }
            };
            var o = new a,
                i = function(e) {
                    e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
                };
            i.prototype = {
                init: function(e) {
                    var t = this;
                    return o.ctx || p(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{
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
                    }] : [], t._onresume = [], t._webAudio = o.usingWebAudio && !t._html5, void 0 !== o.ctx && o.ctx && o.autoUnlock && o._unlockAudio(), o._howls.push(t), t._autoplay && t._queue.push({
                        event: "play",
                        action: function() {
                            t.play()
                        }
                    }), t._preload && t.load(), t
                },
                load: function() {
                    var e = null;
                    if (o.noAudio) this._emit("loaderror", null, "No audio support.");
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
                            if (n || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), n && o.codecs(n)) {
                                e = this._src[t];
                                break
                            }
                        }
                        if (e) return this._src = e, this._state = "loading", "https:" === window.location.protocol && "http:" === e.slice(0, 5) && (this._html5 = !0, this._webAudio = !1), new l(this), this._webAudio && s(this), this;
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
                            for (var a = 0, i = 0; i < n._sounds.length; i++) n._sounds[i]._paused && !n._sounds[i]._ended && (a++, r = n._sounds[i]._id);
                            1 === a ? e = null : r = null
                        }
                    }
                    var l = r ? n._soundById(r) : n._inactiveSound();
                    if (!l) return null;
                    if (r && !e && (e = l._sprite || "__default"), "loaded" !== n._state) {
                        l._sprite = e, l._ended = !1;
                        var u = l._id;
                        return n._queue.push({
                            event: "play",
                            action: function() {
                                n.play(u)
                            }
                        }), u
                    }
                    if (r && !l._paused) return t || n._loadQueue("play"), l._id;
                    n._webAudio && o._autoResume();
                    var s = Math.max(0, l._seek > 0 ? l._seek : n._sprite[e][0] / 1e3),
                        c = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - s),
                        f = 1e3 * c / Math.abs(l._rate),
                        d = n._sprite[e][0] / 1e3,
                        p = (n._sprite[e][0] + n._sprite[e][1]) / 1e3,
                        h = !(!l._loop && !n._sprite[e][2]);
                    l._sprite = e, l._ended = !1;
                    var m = function() {
                        l._paused = !1, l._seek = s, l._start = d, l._stop = p, l._loop = h
                    };
                    if (!(s >= p)) {
                        var g = l._node;
                        if (n._webAudio) {
                            var v = function() {
                                n._playLock = !1, m(), n._refreshBuffer(l);
                                var e = l._muted || n._muted ? 0 : l._volume;
                                g.gain.setValueAtTime(e, o.ctx.currentTime), l._playStart = o.ctx.currentTime, void 0 === g.bufferSource.start ? l._loop ? g.bufferSource.noteGrainOn(0, s, 86400) : g.bufferSource.noteGrainOn(0, s, c) : l._loop ? g.bufferSource.start(0, s, 86400) : g.bufferSource.start(0, s, c), f !== 1 / 0 && (n._endTimers[l._id] = setTimeout(n._ended.bind(n, l), f)), t || setTimeout((function() {
                                    n._emit("play", l._id), n._loadQueue()
                                }), 0)
                            };
                            "running" === o.state ? v() : (n._playLock = !0, n.once("resume", v), n._clearTimer(l._id))
                        } else {
                            var y = function() {
                                g.currentTime = s, g.muted = l._muted || n._muted || o._muted || g.muted, g.volume = l._volume * o.volume(), g.playbackRate = l._rate;
                                try {
                                    var r = g.play();
                                    if (r && "undefined" != typeof Promise && (r instanceof Promise || "function" == typeof r.then) ? (n._playLock = !0, m(), r.then((function() {
                                            n._playLock = !1, g._unlocked = !0, t || (n._emit("play", l._id), n._loadQueue())
                                        })).catch((function() {
                                            n._playLock = !1, n._emit("playerror", l._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), l._ended = !0, l._paused = !0
                                        }))) : t || (n._playLock = !1, m(), n._emit("play", l._id), n._loadQueue()), g.playbackRate = l._rate, g.paused) return void n._emit("playerror", l._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                    "__default" !== e || l._loop ? n._endTimers[l._id] = setTimeout(n._ended.bind(n, l), f) : (n._endTimers[l._id] = function() {
                                        n._ended(l), g.removeEventListener("ended", n._endTimers[l._id], !1)
                                    }, g.addEventListener("ended", n._endTimers[l._id], !1))
                                } catch (e) {
                                    n._emit("playerror", l._id, e)
                                }
                            };
                            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" === g.src && (g.src = n._src, g.load());
                            var b = window && window.ejecta || !g.readyState && o._navigator.isCocoonJS;
                            if (g.readyState >= 3 || b) y();
                            else {
                                n._playLock = !0;
                                var _ = function() {
                                    y(), g.removeEventListener(o._canPlayEvent, _, !1)
                                };
                                g.addEventListener(o._canPlayEvent, _, !1), n._clearTimer(l._id)
                            }
                        }
                        return l._id
                    }
                    n._ended(l)
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
                        var a = t._soundById(n[r]);
                        if (a && !a._paused && (a._seek = t.seek(n[r]), a._rateSeek = 0, a._paused = !0, t._stopFade(n[r]), a._node))
                            if (t._webAudio) {
                                if (!a._node.bufferSource) continue;
                                void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), t._cleanBuffer(a._node)
                            } else isNaN(a._node.duration) && a._node.duration !== 1 / 0 || a._node.pause();
                        arguments[1] || t._emit("pause", a ? a._id : null)
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
                    for (var r = n._getSoundIds(e), a = 0; a < r.length; a++) {
                        n._clearTimer(r[a]);
                        var o = n._soundById(r[a]);
                        o && (o._seek = o._start || 0, o._rateSeek = 0, o._paused = !0, o._ended = !0, n._stopFade(r[a]), o._node && (n._webAudio ? o._node.bufferSource && (void 0 === o._node.bufferSource.stop ? o._node.bufferSource.noteOff(0) : o._node.bufferSource.stop(0), n._cleanBuffer(o._node)) : isNaN(o._node.duration) && o._node.duration !== 1 / 0 || (o._node.currentTime = o._start || 0, o._node.pause(), o._node.duration === 1 / 0 && n._clearSound(o._node))), t || n._emit("stop", o._id))
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
                    for (var r = n._getSoundIds(t), a = 0; a < r.length; a++) {
                        var i = n._soundById(r[a]);
                        i && (i._muted = e, i._interval && n._stopFade(i._id), n._webAudio && i._node ? i._node.gain.setValueAtTime(e ? 0 : i._volume, o.ctx.currentTime) : i._node && (i._node.muted = !!o._muted || e), n._emit("mute", i._id))
                    }
                    return n
                },
                volume: function() {
                    var e, t, n, r = this,
                        a = arguments;
                    if (0 === a.length) return r._volume;
                    if (1 === a.length || 2 === a.length && void 0 === a[1]) {
                        var i = r._getSoundIds(),
                            l = i.indexOf(a[0]);
                        l >= 0 ? t = parseInt(a[0], 10) : e = parseFloat(a[0])
                    } else a.length >= 2 && (e = parseFloat(a[0]), t = parseInt(a[1], 10));
                    if (!(void 0 !== e && e >= 0 && e <= 1)) return (n = t ? r._soundById(t) : r._sounds[0]) ? n._volume : 0;
                    if ("loaded" !== r._state || r._playLock) return r._queue.push({
                        event: "volume",
                        action: function() {
                            r.volume.apply(r, a)
                        }
                    }), r;
                    void 0 === t && (r._volume = e), t = r._getSoundIds(t);
                    for (var u = 0; u < t.length; u++)(n = r._soundById(t[u])) && (n._volume = e, a[2] || r._stopFade(t[u]), r._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, o.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * o.volume()), r._emit("volume", n._id));
                    return r
                },
                fade: function(e, t, n, r) {
                    var a = this;
                    if ("loaded" !== a._state || a._playLock) return a._queue.push({
                        event: "fade",
                        action: function() {
                            a.fade(e, t, n, r)
                        }
                    }), a;
                    e = parseFloat(e), t = parseFloat(t), n = parseFloat(n), a.volume(e, r);
                    for (var i = a._getSoundIds(r), l = 0; l < i.length; l++) {
                        var u = a._soundById(i[l]);
                        if (u) {
                            if (r || a._stopFade(i[l]), a._webAudio && !u._muted) {
                                var s = o.ctx.currentTime,
                                    c = s + n / 1e3;
                                u._volume = e, u._node.gain.setValueAtTime(e, s), u._node.gain.linearRampToValueAtTime(t, c)
                            }
                            a._startFadeInterval(u, e, t, n, i[l], void 0 === r)
                        }
                    }
                    return a
                },
                _startFadeInterval: function(e, t, n, r, a, o) {
                    var i = this,
                        l = t,
                        u = n - t,
                        s = Math.abs(u / .01),
                        c = Math.max(4, s > 0 ? r / s : r),
                        f = Date.now();
                    e._fadeTo = n, e._interval = setInterval((function() {
                        var a = (Date.now() - f) / r;
                        f = Date.now(), l += u * a, l = Math.max(0, l), l = Math.min(1, l), l = Math.round(100 * l) / 100, i._webAudio ? e._volume = l : i.volume(l, e._id, !0), o && (i._volume = l), (n < t && l <= n || n > t && l >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, i.volume(n, e._id), i._emit("fade", e._id))
                    }), c)
                },
                _stopFade: function(e) {
                    var t = this._soundById(e);
                    return t && t._interval && (this._webAudio && t._node.gain.cancelScheduledValues(o.ctx.currentTime), clearInterval(t._interval), t._interval = null, this.volume(t._fadeTo, e), t._fadeTo = null, this._emit("fade", e)), this
                },
                loop: function() {
                    var e, t, n, r = this,
                        a = arguments;
                    if (0 === a.length) return r._loop;
                    if (1 === a.length) {
                        if ("boolean" != typeof a[0]) return !!(n = r._soundById(parseInt(a[0], 10))) && n._loop;
                        e = a[0], r._loop = e
                    } else 2 === a.length && (e = a[0], t = parseInt(a[1], 10));
                    for (var o = r._getSoundIds(t), i = 0; i < o.length; i++)(n = r._soundById(o[i])) && (n._loop = e, r._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e, e && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop)));
                    return r
                },
                rate: function() {
                    var e, t, n, r = this,
                        a = arguments;
                    if (0 === a.length) t = r._sounds[0]._id;
                    else if (1 === a.length) {
                        var i = r._getSoundIds(),
                            l = i.indexOf(a[0]);
                        l >= 0 ? t = parseInt(a[0], 10) : e = parseFloat(a[0])
                    } else 2 === a.length && (e = parseFloat(a[0]), t = parseInt(a[1], 10));
                    if ("number" != typeof e) return (n = r._soundById(t)) ? n._rate : r._rate;
                    if ("loaded" !== r._state || r._playLock) return r._queue.push({
                        event: "rate",
                        action: function() {
                            r.rate.apply(r, a)
                        }
                    }), r;
                    void 0 === t && (r._rate = e), t = r._getSoundIds(t);
                    for (var u = 0; u < t.length; u++)
                        if (n = r._soundById(t[u])) {
                            r.playing(t[u]) && (n._rateSeek = r.seek(t[u]), n._playStart = r._webAudio ? o.ctx.currentTime : n._playStart), n._rate = e, r._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, o.ctx.currentTime) : n._node && (n._node.playbackRate = e);
                            var s = r.seek(t[u]),
                                c = (r._sprite[n._sprite][0] + r._sprite[n._sprite][1]) / 1e3 - s,
                                f = 1e3 * c / Math.abs(n._rate);
                            !r._endTimers[t[u]] && n._paused || (r._clearTimer(t[u]), r._endTimers[t[u]] = setTimeout(r._ended.bind(r, n), f)), r._emit("rate", n._id)
                        }
                    return r
                },
                seek: function() {
                    var e, t, n = this,
                        r = arguments;
                    if (0 === r.length) t = n._sounds[0]._id;
                    else if (1 === r.length) {
                        var a = n._getSoundIds(),
                            i = a.indexOf(r[0]);
                        i >= 0 ? t = parseInt(r[0], 10) : n._sounds.length && (t = n._sounds[0]._id, e = parseFloat(r[0]))
                    } else 2 === r.length && (e = parseFloat(r[0]), t = parseInt(r[1], 10));
                    if (void 0 === t) return n;
                    if ("loaded" !== n._state || n._playLock) return n._queue.push({
                        event: "seek",
                        action: function() {
                            n.seek.apply(n, r)
                        }
                    }), n;
                    var l = n._soundById(t);
                    if (l) {
                        if (!("number" == typeof e && e >= 0)) {
                            if (n._webAudio) {
                                var u = n.playing(t) ? o.ctx.currentTime - l._playStart : 0,
                                    s = l._rateSeek ? l._rateSeek - l._seek : 0;
                                return l._seek + (s + u * Math.abs(l._rate))
                            }
                            return l._node.currentTime
                        }
                        var c = n.playing(t);
                        c && n.pause(t, !0), l._seek = e, l._ended = !1, n._clearTimer(t), n._webAudio || !l._node || isNaN(l._node.duration) || (l._node.currentTime = e);
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
                    for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (e._clearSound(t[n]._node), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(o._canPlayEvent, t[n]._loadFn, !1), o._releaseHtml5Audio(t[n]._node)), delete t[n]._node, e._clearTimer(t[n]._id);
                    var r = o._howls.indexOf(e);
                    r >= 0 && o._howls.splice(r, 1);
                    var a = !0;
                    for (n = 0; n < o._howls.length; n++)
                        if (o._howls[n]._src === e._src || e._src.indexOf(o._howls[n]._src) >= 0) {
                            a = !1;
                            break
                        }
                    return u && a && delete u[e._src], o.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                },
                on: function(e, t, n, r) {
                    var a = this["_on" + e];
                    return "function" == typeof t && a.push(r ? {
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
                        a = 0;
                    if ("number" == typeof t && (n = t, t = null), t || n)
                        for (a = 0; a < r.length; a++) {
                            var o = n === r[a].id;
                            if (t === r[a].fn && o || !t && o) {
                                r.splice(a, 1);
                                break
                            }
                        } else if (e) this["_on" + e] = [];
                        else {
                            var i = Object.keys(this);
                            for (a = 0; a < i.length; a++) 0 === i[a].indexOf("_on") && Array.isArray(this[i[a]]) && (this[i[a]] = [])
                        }
                    return this
                },
                once: function(e, t, n) {
                    return this.on(e, t, n, 1), this
                },
                _emit: function(e, t, n) {
                    for (var r = this["_on" + e], a = r.length - 1; a >= 0; a--) r[a].id && r[a].id !== t && "load" !== e || (setTimeout(function(e) {
                        e.call(this, t, n)
                    }.bind(this, r[a].fn), 0), r[a].once && this.off(e, r[a].fn, r[a].id));
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
                        this._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = o.ctx.currentTime;
                        var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                        this._endTimers[e._id] = setTimeout(this._ended.bind(this, e), r)
                    }
                    return this._webAudio && !n && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, this._clearTimer(e._id), this._cleanBuffer(e._node), o._autoSuspend()), this._webAudio || n || this.stop(e._id, !0), this
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
                    return new l(this)
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
                    return e._node.bufferSource = o.ctx.createBufferSource(), e._node.bufferSource.buffer = u[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, o.ctx.currentTime), this
                },
                _cleanBuffer: function(e) {
                    var t = o._navigator && o._navigator.vendor.indexOf("Apple") >= 0;
                    if (o._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), t)) try {
                        e.bufferSource.buffer = o._scratchBuffer
                    } catch (e) {}
                    return e.bufferSource = null, this
                },
                _clearSound: function(e) {
                    /MSIE |Trident\//.test(o._navigator && o._navigator.userAgent) || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
                }
            };
            var l = function(e) {
                this._parent = e, this.init()
            };
            l.prototype = {
                init: function() {
                    var e = this._parent;
                    return this._muted = e._muted, this._loop = e._loop, this._volume = e._volume, this._rate = e._rate, this._seek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++o._counter, e._sounds.push(this), this.create(), this
                },
                create: function() {
                    var e = this._parent,
                        t = o._muted || this._muted || this._parent._muted ? 0 : this._volume;
                    return e._webAudio ? (this._node = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), this._node.gain.setValueAtTime(t, o.ctx.currentTime), this._node.paused = !0, this._node.connect(o.masterGain)) : (this._node = o._obtainHtml5Audio(), this._errorFn = this._errorListener.bind(this), this._node.addEventListener("error", this._errorFn, !1), this._loadFn = this._loadListener.bind(this), this._node.addEventListener(o._canPlayEvent, this._loadFn, !1), this._node.src = e._src, this._node.preload = "auto", this._node.volume = t * o.volume(), this._node.load()), this
                },
                reset: function() {
                    var e = this._parent;
                    return this._muted = e._muted, this._loop = e._loop, this._volume = e._volume, this._rate = e._rate, this._seek = 0, this._rateSeek = 0, this._paused = !0, this._ended = !0, this._sprite = "__default", this._id = ++o._counter, this
                },
                _errorListener: function() {
                    this._parent._emit("loaderror", this._id, this._node.error ? this._node.error.code : 0), this._node.removeEventListener("error", this._errorFn, !1)
                },
                _loadListener: function() {
                    var e = this._parent;
                    e._duration = Math.ceil(10 * this._node.duration) / 10, 0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1e3 * e._duration]
                    }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), this._node.removeEventListener(o._canPlayEvent, this._loadFn, !1)
                }
            };
            var u = {},
                s = function(e) {
                    var t = e._src;
                    if (u[t]) return e._duration = u[t].duration, void d(e);
                    if (/^data:[^;]+;base64,/.test(t)) {
                        for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), a = 0; a < n.length; ++a) r[a] = n.charCodeAt(a);
                        f(r.buffer, e)
                    } else {
                        var o = new XMLHttpRequest;
                        o.open("GET", t, !0), o.withCredentials = e._xhrWithCredentials, o.responseType = "arraybuffer", o.onload = function() {
                            var t = (o.status + "")[0];
                            "0" === t || "2" === t || "3" === t ? f(o.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + o.status + ".")
                        }, o.onerror = function() {
                            e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete u[t], e.load())
                        }, c(o)
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
                            e && t._sounds.length > 0 ? (u[t._src] = e, d(t, e)) : n()
                        };
                    "undefined" != typeof Promise && 1 === o.ctx.decodeAudioData.length ? o.ctx.decodeAudioData(e).then(r).catch(n) : o.ctx.decodeAudioData(e, r, n)
                },
                d = function(e, t) {
                    t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
                        __default: [0, 1e3 * e._duration]
                    }), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                },
                p = function() {
                    if (o.usingWebAudio) {
                        try {
                            "undefined" != typeof AudioContext ? o.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? o.ctx = new webkitAudioContext : o.usingWebAudio = !1
                        } catch (e) {
                            o.usingWebAudio = !1
                        }
                        o.ctx || (o.usingWebAudio = !1);
                        var e = /iP(hone|od|ad)/.test(o._navigator && o._navigator.platform),
                            t = o._navigator && o._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                            n = t ? parseInt(t[1], 10) : null;
                        if (e && n && n < 9) {
                            var r = /safari/.test(o._navigator && o._navigator.userAgent.toLowerCase());
                            (o._navigator && o._navigator.standalone && !r || o._navigator && !o._navigator.standalone && !r) && (o.usingWebAudio = !1)
                        }
                        o.usingWebAudio && (o.masterGain = void 0 === o.ctx.createGain ? o.ctx.createGainNode() : o.ctx.createGain(), o.masterGain.gain.setValueAtTime(o._muted ? 0 : 1, o.ctx.currentTime), o.masterGain.connect(o.ctx.destination)), o._setup()
                    }
                };
            void 0 === (r = function() {
                return {
                    Howler: o,
                    Howl: i
                }
            }.apply(t, [])) || (e.exports = r), t.Howler = o, t.Howl = i, "undefined" != typeof window ? (window.HowlerGlobal = a, window.Howler = o, window.Howl = i, window.Sound = l) : void 0 !== n && (n.HowlerGlobal = a, n.Howler = o, n.Howl = i, n.Sound = l)
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
            }, HowlerGlobal.prototype.orientation = function(e, t, n, r, a, o) {
                if (!this.ctx || !this.ctx.listener) return this;
                var i = this._orientation;
                return t = "number" != typeof t ? i[1] : t, n = "number" != typeof n ? i[2] : n, r = "number" != typeof r ? i[3] : r, a = "number" != typeof a ? i[4] : a, o = "number" != typeof o ? i[5] : o, "number" != typeof e ? i : (this._orientation = [e, t, n, r, a, o], void 0 !== this.ctx.listener.forwardX ? (this.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.forwardZ.setTargetAtTime(n, Howler.ctx.currentTime, .1), this.ctx.listener.upX.setTargetAtTime(e, Howler.ctx.currentTime, .1), this.ctx.listener.upY.setTargetAtTime(t, Howler.ctx.currentTime, .1), this.ctx.listener.upZ.setTargetAtTime(n, Howler.ctx.currentTime, .1)) : this.ctx.listener.setOrientation(e, t, n, r, a, o), this)
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
                var a = void 0 === Howler.ctx.createStereoPanner ? "spatial" : "stereo";
                if (void 0 === n) {
                    if ("number" != typeof e) return r._stereo;
                    r._stereo = e, r._pos = [e, 0, 0]
                }
                for (var o = r._getSoundIds(n), i = 0; i < o.length; i++) {
                    var l = r._soundById(o[i]);
                    if (l) {
                        if ("number" != typeof e) return l._stereo;
                        l._stereo = e, l._pos = [e, 0, 0], l._node && (l._pannerAttr.panningModel = "equalpower", l._panner && l._panner.pan || t(l, a), "spatial" === a ? void 0 !== l._panner.positionX ? (l._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), l._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), l._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : l._panner.setPosition(e, 0, 0) : l._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), r._emit("stereo", l._id)
                    }
                }
                return r
            }, Howl.prototype.pos = function(e, n, r, a) {
                var o = this;
                if (!o._webAudio) return o;
                if ("loaded" !== o._state) return o._queue.push({
                    event: "pos",
                    action: function() {
                        o.pos(e, n, r, a)
                    }
                }), o;
                if (n = "number" != typeof n ? 0 : n, r = "number" != typeof r ? -.5 : r, void 0 === a) {
                    if ("number" != typeof e) return o._pos;
                    o._pos = [e, n, r]
                }
                for (var i = o._getSoundIds(a), l = 0; l < i.length; l++) {
                    var u = o._soundById(i[l]);
                    if (u) {
                        if ("number" != typeof e) return u._pos;
                        u._pos = [e, n, r], u._node && (u._panner && !u._panner.pan || t(u, "spatial"), void 0 !== u._panner.positionX ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), u._panner.positionY.setValueAtTime(n, Howler.ctx.currentTime), u._panner.positionZ.setValueAtTime(r, Howler.ctx.currentTime)) : u._panner.setPosition(e, n, r)), o._emit("pos", u._id)
                    }
                }
                return o
            }, Howl.prototype.orientation = function(e, n, r, a) {
                var o = this;
                if (!o._webAudio) return o;
                if ("loaded" !== o._state) return o._queue.push({
                    event: "orientation",
                    action: function() {
                        o.orientation(e, n, r, a)
                    }
                }), o;
                if (n = "number" != typeof n ? o._orientation[1] : n, r = "number" != typeof r ? o._orientation[2] : r, void 0 === a) {
                    if ("number" != typeof e) return o._orientation;
                    o._orientation = [e, n, r]
                }
                for (var i = o._getSoundIds(a), l = 0; l < i.length; l++) {
                    var u = o._soundById(i[l]);
                    if (u) {
                        if ("number" != typeof e) return u._orientation;
                        u._orientation = [e, n, r], u._node && (u._panner || (u._pos || (u._pos = o._pos || [0, 0, -.5]), t(u, "spatial")), void 0 !== u._panner.orientationX ? (u._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), u._panner.orientationY.setValueAtTime(n, Howler.ctx.currentTime), u._panner.orientationZ.setValueAtTime(r, Howler.ctx.currentTime)) : u._panner.setOrientation(e, n, r)), o._emit("orientation", u._id)
                    }
                }
                return o
            }, Howl.prototype.pannerAttr = function() {
                var e, n, r, a = this,
                    o = arguments;
                if (!a._webAudio) return a;
                if (0 === o.length) return a._pannerAttr;
                if (1 === o.length) {
                    if ("object" != typeof o[0]) return (r = a._soundById(parseInt(o[0], 10))) ? r._pannerAttr : a._pannerAttr;
                    e = o[0], void 0 === n && (e.pannerAttr || (e.pannerAttr = {
                        coneInnerAngle: e.coneInnerAngle,
                        coneOuterAngle: e.coneOuterAngle,
                        coneOuterGain: e.coneOuterGain,
                        distanceModel: e.distanceModel,
                        maxDistance: e.maxDistance,
                        refDistance: e.refDistance,
                        rolloffFactor: e.rolloffFactor,
                        panningModel: e.panningModel
                    }), a._pannerAttr = {
                        coneInnerAngle: void 0 !== e.pannerAttr.coneInnerAngle ? e.pannerAttr.coneInnerAngle : a._coneInnerAngle,
                        coneOuterAngle: void 0 !== e.pannerAttr.coneOuterAngle ? e.pannerAttr.coneOuterAngle : a._coneOuterAngle,
                        coneOuterGain: void 0 !== e.pannerAttr.coneOuterGain ? e.pannerAttr.coneOuterGain : a._coneOuterGain,
                        distanceModel: void 0 !== e.pannerAttr.distanceModel ? e.pannerAttr.distanceModel : a._distanceModel,
                        maxDistance: void 0 !== e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : a._maxDistance,
                        refDistance: void 0 !== e.pannerAttr.refDistance ? e.pannerAttr.refDistance : a._refDistance,
                        rolloffFactor: void 0 !== e.pannerAttr.rolloffFactor ? e.pannerAttr.rolloffFactor : a._rolloffFactor,
                        panningModel: void 0 !== e.pannerAttr.panningModel ? e.pannerAttr.panningModel : a._panningModel
                    })
                } else 2 === o.length && (e = o[0], n = parseInt(o[1], 10));
                for (var i = a._getSoundIds(n), l = 0; l < i.length; l++)
                    if (r = a._soundById(i[l])) {
                        var u = r._pannerAttr;
                        u = {
                            coneInnerAngle: void 0 !== e.coneInnerAngle ? e.coneInnerAngle : u.coneInnerAngle,
                            coneOuterAngle: void 0 !== e.coneOuterAngle ? e.coneOuterAngle : u.coneOuterAngle,
                            coneOuterGain: void 0 !== e.coneOuterGain ? e.coneOuterGain : u.coneOuterGain,
                            distanceModel: void 0 !== e.distanceModel ? e.distanceModel : u.distanceModel,
                            maxDistance: void 0 !== e.maxDistance ? e.maxDistance : u.maxDistance,
                            refDistance: void 0 !== e.refDistance ? e.refDistance : u.refDistance,
                            rolloffFactor: void 0 !== e.rolloffFactor ? e.rolloffFactor : u.rolloffFactor,
                            panningModel: void 0 !== e.panningModel ? e.panningModel : u.panningModel
                        };
                        var s = r._panner;
                        s ? (s.coneInnerAngle = u.coneInnerAngle, s.coneOuterAngle = u.coneOuterAngle, s.coneOuterGain = u.coneOuterGain, s.distanceModel = u.distanceModel, s.maxDistance = u.maxDistance, s.refDistance = u.refDistance, s.rolloffFactor = u.rolloffFactor, s.panningModel = u.panningModel) : (r._pos || (r._pos = a._pos || [0, 0, -.5]), t(r, "spatial"))
                    }
                return a
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
    var r = n(15),
        a = n(18);
    t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6;
    var o = {
        type: t.ERROR,
        data: "parser error"
    };

    function i() {}

    function l() {}
    i.prototype.encode = function(e, n) {
        switch (e.type) {
            case t.CONNECT:
            case t.DISCONNECT:
            case t.ERROR:
                return n([JSON.stringify(e)]);
            default:
                return n([r.encode(e)])
        }
    }, a(l.prototype), l.prototype.add = function(e) {
        "string" == typeof e ? this.parseJSON(e) : this.parseBinary(e)
    }, l.prototype.parseJSON = function(e) {
        try {
            var t = JSON.parse(e);
            this.emit("decoded", t)
        } catch (e) {
            this.emit("decoded", o)
        }
    }, l.prototype.parseBinary = function(e) {
        try {
            var t = r.decode(e);
            this.emit("decoded", t)
        } catch (e) {
            this.emit("decoded", o)
        }
    }, l.prototype.destroy = function() {}, t.Encoder = i, t.Decoder = l
}, function(e, t, n) {
    t.encode = n(16), t.decode = n(17)
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        for (var r = 0, a = 0, o = n.length; a < o; a++)(r = n.charCodeAt(a)) < 128 ? e.setUint8(t++, r) : r < 2048 ? (e.setUint8(t++, 192 | r >> 6), e.setUint8(t++, 128 | 63 & r)) : r < 55296 || r >= 57344 ? (e.setUint8(t++, 224 | r >> 12), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | 63 & r)) : (a++, r = 65536 + ((1023 & r) << 10 | 1023 & n.charCodeAt(a)), e.setUint8(t++, 240 | r >> 18), e.setUint8(t++, 128 | r >> 12 & 63), e.setUint8(t++, 128 | r >> 6 & 63), e.setUint8(t++, 128 | 63 & r))
    }
    e.exports = function(e) {
        var t = [],
            n = [],
            a = function e(t, n, r) {
                var a = typeof r,
                    o = 0,
                    i = 0,
                    l = 0,
                    u = 0,
                    s = 0,
                    c = 0;
                if ("string" === a) {
                    if ((s = function(e) {
                            for (var t = 0, n = 0, r = 0, a = e.length; r < a; r++)(t = e.charCodeAt(r)) < 128 ? n += 1 : t < 2048 ? n += 2 : t < 55296 || t >= 57344 ? n += 3 : (r++, n += 4);
                            return n
                        }(r)) < 32) t.push(160 | s), c = 1;
                    else if (s < 256) t.push(217, s), c = 2;
                    else if (s < 65536) t.push(218, s >> 8, s), c = 3;
                    else {
                        if (!(s < 4294967296)) throw new Error("String too long");
                        t.push(219, s >> 24, s >> 16, s >> 8, s), c = 5
                    }
                    return n.push({
                        str: r,
                        length: s,
                        offset: t.length
                    }), c + s
                }
                if ("number" === a) return Math.floor(r) === r && isFinite(r) ? r >= 0 ? r < 128 ? (t.push(r), 1) : r < 256 ? (t.push(204, r), 2) : r < 65536 ? (t.push(205, r >> 8, r), 3) : r < 4294967296 ? (t.push(206, r >> 24, r >> 16, r >> 8, r), 5) : (l = r / Math.pow(2, 32) >> 0, u = r >>> 0, t.push(207, l >> 24, l >> 16, l >> 8, l, u >> 24, u >> 16, u >> 8, u), 9) : r >= -32 ? (t.push(r), 1) : r >= -128 ? (t.push(208, r), 2) : r >= -32768 ? (t.push(209, r >> 8, r), 3) : r >= -2147483648 ? (t.push(210, r >> 24, r >> 16, r >> 8, r), 5) : (l = Math.floor(r / Math.pow(2, 32)), u = r >>> 0, t.push(211, l >> 24, l >> 16, l >> 8, l, u >> 24, u >> 16, u >> 8, u), 9) : (t.push(203), n.push({
                    float: r,
                    length: 8,
                    offset: t.length
                }), 9);
                if ("object" === a) {
                    if (null === r) return t.push(192), 1;
                    if (Array.isArray(r)) {
                        if ((s = r.length) < 16) t.push(144 | s), c = 1;
                        else if (s < 65536) t.push(220, s >> 8, s), c = 3;
                        else {
                            if (!(s < 4294967296)) throw new Error("Array too large");
                            t.push(221, s >> 24, s >> 16, s >> 8, s), c = 5
                        }
                        for (o = 0; o < s; o++) c += e(t, n, r[o]);
                        return c
                    }
                    if (r instanceof Date) {
                        var f = r.getTime();
                        return l = Math.floor(f / Math.pow(2, 32)), u = f >>> 0, t.push(215, 0, l >> 24, l >> 16, l >> 8, l, u >> 24, u >> 16, u >> 8, u), 10
                    }
                    if (r instanceof ArrayBuffer) {
                        if ((s = r.byteLength) < 256) t.push(196, s), c = 2;
                        else if (s < 65536) t.push(197, s >> 8, s), c = 3;
                        else {
                            if (!(s < 4294967296)) throw new Error("Buffer too large");
                            t.push(198, s >> 24, s >> 16, s >> 8, s), c = 5
                        }
                        return n.push({
                            bin: r,
                            length: s,
                            offset: t.length
                        }), c + s
                    }
                    if ("function" == typeof r.toJSON) return e(t, n, r.toJSON());
                    var d = [],
                        p = "",
                        h = Object.keys(r);
                    for (o = 0, i = h.length; o < i; o++) "function" != typeof r[p = h[o]] && d.push(p);
                    if ((s = d.length) < 16) t.push(128 | s), c = 1;
                    else if (s < 65536) t.push(222, s >> 8, s), c = 3;
                    else {
                        if (!(s < 4294967296)) throw new Error("Object too large");
                        t.push(223, s >> 24, s >> 16, s >> 8, s), c = 5
                    }
                    for (o = 0; o < s; o++) c += e(t, n, p = d[o]), c += e(t, n, r[p]);
                    return c
                }
                if ("boolean" === a) return t.push(r ? 195 : 194), 1;
                if ("undefined" === a) return t.push(212, 0, 0), 3;
                throw new Error("Could not encode")
            }(t, n, e),
            o = new ArrayBuffer(a),
            i = new DataView(o),
            l = 0,
            u = 0,
            s = -1;
        n.length > 0 && (s = n[0].offset);
        for (var c, f = 0, d = 0, p = 0, h = t.length; p < h; p++)
            if (i.setUint8(u + p, t[p]), p + 1 === s) {
                if (f = (c = n[l]).length, d = u + s, c.bin)
                    for (var m = new Uint8Array(c.bin), g = 0; g < f; g++) i.setUint8(d + g, m[g]);
                else c.str ? r(i, d, c.str) : void 0 !== c.float && i.setFloat64(d, c.float);
                u += f, n[++l] && (s = n[l].offset)
            }
        return o
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
            for (var r = "", a = 0, o = t, i = t + n; o < i; o++) {
                var l = e.getUint8(o);
                if (0 != (128 & l))
                    if (192 != (224 & l))
                        if (224 != (240 & l)) {
                            if (240 != (248 & l)) throw new Error("Invalid byte " + l.toString(16));
                            (a = (7 & l) << 18 | (63 & e.getUint8(++o)) << 12 | (63 & e.getUint8(++o)) << 6 | (63 & e.getUint8(++o)) << 0) >= 65536 ? (a -= 65536, r += String.fromCharCode(55296 + (a >>> 10), 56320 + (1023 & a))) : r += String.fromCharCode(a)
                        } else r += String.fromCharCode((15 & l) << 12 | (63 & e.getUint8(++o)) << 6 | (63 & e.getUint8(++o)) << 0);
                else r += String.fromCharCode((31 & l) << 6 | 63 & e.getUint8(++o));
                else r += String.fromCharCode(l)
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
            a = 0,
            o = 0;
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
                return a = this.view.getUint32(this.offset) * Math.pow(2, 32), o = this.view.getUint32(this.offset + 4), this.offset += 8, a + o;
            case 208:
                return e = this.view.getInt8(this.offset), this.offset += 1, e;
            case 209:
                return e = this.view.getInt16(this.offset), this.offset += 2, e;
            case 210:
                return e = this.view.getInt32(this.offset), this.offset += 4, e;
            case 211:
                return a = this.view.getInt32(this.offset) * Math.pow(2, 32), o = this.view.getUint32(this.offset + 4), this.offset += 8, a + o;
            case 212:
                return r = this.view.getInt8(this.offset), this.offset += 1, 0 === r ? void(this.offset += 1) : [r, this.bin(1)];
            case 213:
                return r = this.view.getInt8(this.offset), this.offset += 1, [r, this.bin(2)];
            case 214:
                return r = this.view.getInt8(this.offset), this.offset += 1, [r, this.bin(4)];
            case 215:
                return r = this.view.getInt8(this.offset), this.offset += 1, 0 === r ? (a = this.view.getInt32(this.offset) * Math.pow(2, 32), o = this.view.getUint32(this.offset + 4), this.offset += 8, new Date(a + o)) : [r, this.bin(8)];
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
        for (var a = 0; a < r.length; a++)
            if ((n = r[a]) === t || n.fn === t) {
                r.splice(a, 1);
                break
            }
        return this
    }, r.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            n = this._callbacks["$" + e];
        if (n)
            for (var r = 0, a = (n = n.slice(0)).length; r < a; ++r) n[r].apply(this, t);
        return this
    }, r.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}]);