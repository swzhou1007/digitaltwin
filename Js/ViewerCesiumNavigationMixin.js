(function(root, factory) {
	"use strict";
	if (typeof define === "function" && define.amd) {
		define([], factory)
	}
	Cesium["viewerCesiumNavigationMixin"] = factory();
})(typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : this, function() {
	var requirejs, require, define;
	(function(undef) {
		var main, req, makeMap, handlers, defined = {},
			waiting = {},
			config = {},
			defining = {},
			hasOwn = Object.prototype.hasOwnProperty,
			aps = [].slice,
			jsSuffixRegExp = /\.js$/;

		function hasProp(obj, prop) {
			return hasOwn.call(obj, prop)
		}

		function normalize(name, baseName) {
			var nameParts, nameSegment, mapValue, foundMap, lastIndex, foundI, foundStarMap, starI, i, j, part,
				normalizedBaseParts, baseParts = baseName && baseName.split("/"),
				map = config.map,
				starMap = map && map["*"] || {};
			if (name) {
				name = name.split("/");
				lastIndex = name.length - 1;
				if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
					name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")
				}
				if (name[0].charAt(0) === "." && baseParts) {
					normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
					name = normalizedBaseParts.concat(name)
				}
				for (i = 0; i < name.length; i++) {
					part = name[i];
					if (part === ".") {
						name.splice(i, 1);
						i -= 1
					} else if (part === "..") {
						if (i === 0 || i === 1 && name[2] === ".." || name[i - 1] === "..") {
							continue
						} else if (i > 0) {
							name.splice(i - 1, 2);
							i -= 2
						}
					}
				}
				name = name.join("/")
			}
			if ((baseParts || starMap) && map) {
				nameParts = name.split("/");
				for (i = nameParts.length; i > 0; i -= 1) {
					nameSegment = nameParts.slice(0, i).join("/");
					if (baseParts) {
						for (j = baseParts.length; j > 0; j -= 1) {
							mapValue = map[baseParts.slice(0, j).join("/")];
							if (mapValue) {
								mapValue = mapValue[nameSegment];
								if (mapValue) {
									foundMap = mapValue;
									foundI = i;
									break
								}
							}
						}
					}
					if (foundMap) {
						break
					}
					if (!foundStarMap && starMap && starMap[nameSegment]) {
						foundStarMap = starMap[nameSegment];
						starI = i
					}
				}
				if (!foundMap && foundStarMap) {
					foundMap = foundStarMap;
					foundI = starI
				}
				if (foundMap) {
					nameParts.splice(0, foundI, foundMap);
					name = nameParts.join("/")
				}
			}
			return name
		}

		function makeRequire(relName, forceSync) {
			return function() {
				var args = aps.call(arguments, 0);
				if (typeof args[0] !== "string" && args.length === 1) {
					args.push(null)
				}
				return req.apply(undef, args.concat([relName, forceSync]))
			}
		}

		function makeNormalize(relName) {
			return function(name) {
				return normalize(name, relName)
			}
		}

		function makeLoad(depName) {
			return function(value) {
				defined[depName] = value
			}
		}

		function callDep(name) {
			if (hasProp(waiting, name)) {
				var args = waiting[name];
				delete waiting[name];
				defining[name] = true;
				main.apply(undef, args)
			}
			if (!hasProp(defined, name) && !hasProp(defining, name)) {
				throw new Error("No " + name)
			}
			return defined[name]
		}

		function splitPrefix(name) {
			var prefix, index = name ? name.indexOf("!") : -1;
			if (index > -1) {
				prefix = name.substring(0, index);
				name = name.substring(index + 1, name.length)
			}
			return [prefix, name]
		}
		makeMap = function(name, relName) {
			var plugin, parts = splitPrefix(name),
				prefix = parts[0];
			name = parts[1];
			if (prefix) {
				prefix = normalize(prefix, relName);
				plugin = callDep(prefix)
			}
			if (prefix) {
				if (plugin && plugin.normalize) {
					name = plugin.normalize(name, makeNormalize(relName))
				} else {
					name = normalize(name, relName)
				}
			} else {
				name = normalize(name, relName);
				parts = splitPrefix(name);
				prefix = parts[0];
				name = parts[1];
				if (prefix) {
					plugin = callDep(prefix)
				}
			}
			return {
				f: prefix ? prefix + "!" + name : name,
				n: name,
				pr: prefix,
				p: plugin
			}
		};

		function makeConfig(name) {
			return function() {
				return config && config.config && config.config[name] || {}
			}
		}
		handlers = {
			require: function(name) {
				return makeRequire(name)
			},
			exports: function(name) {
				var e = defined[name];
				if (typeof e !== "undefined") {
					return e
				} else {
					return defined[name] = {}
				}
			},
			module: function(name) {
				return {
					id: name,
					uri: "",
					exports: defined[name],
					config: makeConfig(name)
				}
			}
		};
		main = function(name, deps, callback, relName) {
			var cjsModule, depName, ret, map, i, args = [],
				callbackType = typeof callback,
				usingExports;
			relName = relName || name;
			if (callbackType === "undefined" || callbackType === "function") {
				deps = !deps.length && callback.length ? ["require", "exports", "module"] : deps;
				for (i = 0; i < deps.length; i += 1) {
					map = makeMap(deps[i], relName);
					depName = map.f;
					if (depName === "require") {
						args[i] = handlers.require(name)
					} else if (depName === "exports") {
						args[i] = handlers.exports(name);
						usingExports = true
					} else if (depName === "module") {
						cjsModule = args[i] = handlers.module(name)
					} else if (hasProp(defined, depName) || hasProp(waiting, depName) || hasProp(defining, depName)) {
						args[i] = callDep(depName)
					} else if (map.p) {
						map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
						args[i] = defined[depName]
					} else {
						throw new Error(name + " missing " + depName)
					}
				}
				ret = callback ? callback.apply(defined[name], args) : undefined;
				if (name) {
					if (cjsModule && cjsModule.exports !== undef && cjsModule.exports !== defined[name]) {
						defined[name] = cjsModule.exports
					} else if (ret !== undef || !usingExports) {
						defined[name] = ret
					}
				}
			} else if (name) {
				defined[name] = callback
			}
		};
		requirejs = require = req = function(deps, callback, relName, forceSync, alt) {
			if (typeof deps === "string") {
				if (handlers[deps]) {
					return handlers[deps](callback)
				}
				return callDep(makeMap(deps, callback).f)
			} else if (!deps.splice) {
				config = deps;
				if (config.deps) {
					req(config.deps, config.callback)
				}
				if (!callback) {
					return
				}
				if (callback.splice) {
					deps = callback;
					callback = relName;
					relName = null
				} else {
					deps = undef
				}
			}
			callback = callback || function() {};
			if (typeof relName === "function") {
				relName = forceSync;
				forceSync = alt
			}
			if (forceSync) {
				main(undef, deps, callback, relName)
			} else {
				setTimeout(function() {
					main(undef, deps, callback, relName)
				}, 4)
			}
			return req
		};
		req.config = function(cfg) {
			return req(cfg)
		};
		requirejs._defined = defined;
		define = function(name, deps, callback) {
			if (typeof name !== "string") {
				throw new Error("See almond README: incorrect module build, no module name")
			}
			if (!deps.splice) {
				callback = deps;
				deps = []
			}
			if (!hasProp(defined, name) && !hasProp(waiting, name)) {
				waiting[name] = [name, deps, callback]
			}
		};
		define.amd = {
			jQuery: true
		}
	})();
	define("almond", function() {});
	(function() {
		(function(n) {
			var x = this || (0, eval)("this"),
				u = x.document,
				M = x.navigator,
				v = x.jQuery,
				F = x.JSON;
			(function(n) {
				"function" === typeof define && define.amd ? define("knockout", ["exports", "require"], n) : "object" ===
					typeof exports && "object" === typeof module ? n(module.exports || exports) : n(x.ko = {})
			})(function(N, O) {
				function J(a, c) {
					return null === a || typeof a in T ? a === c : !1
				}

				function U(b, c) {
					var d;
					return function() {
						d || (d = a.a.setTimeout(function() {
							d = n;
							b()
						}, c))
					}
				}

				function V(b, c) {
					var d;
					return function() {
						clearTimeout(d);
						d = a.a.setTimeout(b, c)
					}
				}

				function W(a, c) {
					c && c !== I ? "beforeChange" === c ? this.Kb(a) : this.Ha(a, c) : this.Lb(a)
				}

				function X(a, c) {
					null !== c && c.k && c.k()
				}

				function Y(a, c) {
					var d = this.Hc,
						e = d[s];
					e.R || (this.lb && this.Ma[c] ? (d.Pb(c, a, this.Ma[c]), this.Ma[c] = null, --this.lb) : e.r[c] || d.Pb(c, a,
						e.s ? {
							ia: a
						} : d.uc(a)))
				}

				function K(b, c, d, e) {
					a.d[b] = {
						init: function(b, g, k, l, m) {
							var h, r;
							a.m(function() {
								var q = a.a.c(g()),
									p = !d !== !q,
									A = !r;
								if (A || c || p !== h) A && a.va.Aa() && (r = a.a.ua(a.f.childNodes(b), !0)), p ? (A || a.f.da(b, a.a.ua(
									r)), a.eb(e ? e(m, q) : m, b)) : a.f.xa(b), h = p
							}, null, {
								i: b
							});
							return {
								controlsDescendantBindings: !0
							}
						}
					};
					a.h.ta[b] = !1;
					a.f.Z[b] = !0
				}
				var a = "undefined" !== typeof N ? N : {};
				a.b = function(b, c) {
					for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
					e[d[d.length - 1]] = c
				};
				a.G = function(a, c, d) {
					a[c] = d
				};
				a.version = "3.4.0";
				a.b("version", a.version);
				a.options = {
					deferUpdates: !1,
					useOnlyNativeEvents: !1
				};
				a.a = function() {
					function b(a, b) {
						for (var c in a) a.hasOwnProperty(c) && b(c, a[c])
					}

					function c(a, b) {
						if (b)
							for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
						return a
					}

					function d(a, b) {
						a.__proto__ = b;
						return a
					}

					function e(b, c, d, e) {
						var h = b[c].match(r) || [];
						a.a.q(d.match(r), function(b) {
							a.a.pa(h, b, e)
						});
						b[c] = h.join(" ")
					}
					var f = {
						__proto__: []
					}
					instanceof Array, g = "function" === typeof Symbol, k = {}, l = {};
					k[M && /Firefox\/2/i.test(M.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
					k.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(
						" ");
					b(k, function(a, b) {
						if (b.length)
							for (var c = 0, d = b.length; c < d; c++) l[b[c]] = a
					});
					var m = {
							propertychange: !0
						},
						h = u && function() {
							for (var a = 3, b = u.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "<!--[if gt IE " +
								++a + "]><i></i><![endif]-->", c[0];);
							return 4 < a ? a : n
						}(),
						r = /\S+/g;
					return {
						cc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
						q: function(a, b) {
							for (var c = 0, d = a.length; c < d; c++) b(a[c], c)
						},
						o: function(a, b) {
							if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);
							for (var c = 0, d = a.length; c < d; c++)
								if (a[c] === b) return c;
							return -1
						},
						Sb: function(a, b, c) {
							for (var d = 0, e = a.length; d < e; d++)
								if (b.call(c, a[d], d)) return a[d];
							return null
						},
						La: function(b, c) {
							var d = a.a.o(b, c);
							0 < d ? b.splice(d, 1) : 0 === d && b.shift()
						},
						Tb: function(b) {
							b = b || [];
							for (var c = [], d = 0, e = b.length; d < e; d++) 0 > a.a.o(c, b[d]) && c.push(b[d]);
							return c
						},
						fb: function(a, b) {
							a = a || [];
							for (var c = [], d = 0, e = a.length; d < e; d++) c.push(b(a[d], d));
							return c
						},
						Ka: function(a, b) {
							a = a || [];
							for (var c = [], d = 0, e = a.length; d < e; d++) b(a[d], d) && c.push(a[d]);
							return c
						},
						ra: function(a, b) {
							if (b instanceof Array) a.push.apply(a, b);
							else
								for (var c = 0, d = b.length; c < d; c++) a.push(b[c]);
							return a
						},
						pa: function(b, c, d) {
							var e = a.a.o(a.a.zb(b), c);
							0 > e ? d && b.push(c) : d || b.splice(e, 1)
						},
						ka: f,
						extend: c,
						Xa: d,
						Ya: f ? d : c,
						D: b,
						Ca: function(a, b) {
							if (!a) return a;
							var c = {},
								d;
							for (d in a) a.hasOwnProperty(d) && (c[d] = b(a[d], d, a));
							return c
						},
						ob: function(b) {
							for (; b.firstChild;) a.removeNode(b.firstChild)
						},
						jc: function(b) {
							b = a.a.V(b);
							for (var c = (b[0] && b[0].ownerDocument || u).createElement("div"), d = 0, e = b.length; d < e; d++) c.appendChild(
								a.$(b[d]));
							return c
						},
						ua: function(b, c) {
							for (var d = 0, e = b.length, h = []; d < e; d++) {
								var m = b[d].cloneNode(!0);
								h.push(c ? a.$(m) : m)
							}
							return h
						},
						da: function(b, c) {
							a.a.ob(b);
							if (c)
								for (var d = 0, e = c.length; d < e; d++) b.appendChild(c[d])
						},
						qc: function(b, c) {
							var d = b.nodeType ? [b] : b;
							if (0 < d.length) {
								for (var e = d[0], h = e.parentNode, m = 0, l = c.length; m < l; m++) h.insertBefore(c[m], e);
								m = 0;
								for (l = d.length; m < l; m++) a.removeNode(d[m])
							}
						},
						za: function(a, b) {
							if (a.length) {
								for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) a.splice(0, 1);
								for (; 1 < a.length && a[a.length - 1].parentNode !== b;) a.length--;
								if (1 < a.length) {
									var c = a[0],
										d = a[a.length - 1];
									for (a.length = 0; c !== d;) a.push(c), c = c.nextSibling;
									a.push(d)
								}
							}
							return a
						},
						sc: function(a, b) {
							7 > h ? a.setAttribute("selected", b) : a.selected = b
						},
						$a: function(a) {
							return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
						},
						nd: function(a, b) {
							a = a || "";
							return b.length > a.length ? !1 : a.substring(0, b.length) === b
						},
						Mc: function(a, b) {
							if (a === b) return !0;
							if (11 === a.nodeType) return !1;
							if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);
							if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);
							for (; a && a != b;) a = a.parentNode;
							return !!a
						},
						nb: function(b) {
							return a.a.Mc(b, b.ownerDocument.documentElement)
						},
						Qb: function(b) {
							return !!a.a.Sb(b, a.a.nb)
						},
						A: function(a) {
							return a && a.tagName && a.tagName.toLowerCase()
						},
						Wb: function(b) {
							return a.onError ? function() {
								try {
									return b.apply(this, arguments)
								} catch (c) {
									throw a.onError && a.onError(c), c
								}
							} : b
						},
						setTimeout: function(b, c) {
							return setTimeout(a.a.Wb(b), c)
						},
						$b: function(b) {
							setTimeout(function() {
								a.onError && a.onError(b);
								throw b
							}, 0)
						},
						p: function(b, c, d) {
							var e = a.a.Wb(d);
							d = h && m[c];
							if (a.options.useOnlyNativeEvents || d || !v)
								if (d || "function" != typeof b.addEventListener)
									if ("undefined" != typeof b.attachEvent) {
										var l = function(a) {
												e.call(b, a)
											},
											f = "on" + c;
										b.attachEvent(f, l);
										a.a.F.oa(b, function() {
											b.detachEvent(f, l)
										})
									} else throw Error("Browser doesn't support addEventListener or attachEvent");
							else b.addEventListener(c, e, !1);
							else v(b).bind(c, e)
						},
						Da: function(b, c) {
							if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
							var d;
							"input" === a.a.A(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" ==
								d) : d = !1;
							if (a.options.useOnlyNativeEvents || !v || d)
								if ("function" == typeof u.createEvent)
									if ("function" == typeof b.dispatchEvent) d = u.createEvent(l[c] || "HTMLEvents"), d.initEvent(c, !0, !0,
										x, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);
									else throw Error("The supplied element doesn't support dispatchEvent");
							else if (d && b.click) b.click();
							else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);
							else throw Error("Browser doesn't support triggering events");
							else v(b).trigger(c)
						},
						c: function(b) {
							return a.H(b) ? b() : b
						},
						zb: function(b) {
							return a.H(b) ? b.t() : b
						},
						bb: function(b, c, d) {
							var h;
							c && ("object" === typeof b.classList ? (h = b.classList[d ? "add" : "remove"], a.a.q(c.match(r), function(
								a) {
								h.call(b.classList, a)
							})) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d))
						},
						Za: function(b, c) {
							var d = a.a.c(c);
							if (null === d || d === n) d = "";
							var e = a.f.firstChild(b);
							!e || 3 != e.nodeType || a.f.nextSibling(e) ? a.f.da(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
							a.a.Rc(b)
						},
						rc: function(a, b) {
							a.name = b;
							if (7 >= h) try {
								a.mergeAttributes(u.createElement("<input name='" + a.name + "'/>"), !1)
							} catch (c) {}
						},
						Rc: function(a) {
							9 <= h && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom))
						},
						Nc: function(a) {
							if (h) {
								var b = a.style.width;
								a.style.width = 0;
								a.style.width = b
							}
						},
						hd: function(b, c) {
							b = a.a.c(b);
							c = a.a.c(c);
							for (var d = [], e = b; e <= c; e++) d.push(e);
							return d
						},
						V: function(a) {
							for (var b = [], c = 0, d = a.length; c < d; c++) b.push(a[c]);
							return b
						},
						Yb: function(a) {
							return g ? Symbol(a) : a
						},
						rd: 6 === h,
						sd: 7 === h,
						C: h,
						ec: function(b, c) {
							for (var d = a.a.V(b.getElementsByTagName("input")).concat(a.a.V(b.getElementsByTagName("textarea"))), e =
									"string" == typeof c ? function(a) {
										return a.name === c
									} : function(a) {
										return c.test(a.name)
									}, h = [], m = d.length - 1; 0 <= m; m--) e(d[m]) && h.push(d[m]);
							return h
						},
						ed: function(b) {
							return "string" == typeof b && (b = a.a.$a(b)) ? F && F.parse ? F.parse(b) : new Function("return " + b)() :
								null
						},
						Eb: function(b, c, d) {
							if (!F || !F.stringify) throw Error(
								"Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js"
							);
							return F.stringify(a.a.c(b), c, d)
						},
						fd: function(c, d, e) {
							e = e || {};
							var h = e.params || {},
								m = e.includeFields || this.cc,
								l = c;
							if ("object" == typeof c && "form" === a.a.A(c))
								for (var l = c.action, f = m.length - 1; 0 <= f; f--)
									for (var g = a.a.ec(c, m[f]), k = g.length - 1; 0 <= k; k--) h[g[k].name] = g[k].value;
							d = a.a.c(d);
							var r = u.createElement("form");
							r.style.display = "none";
							r.action = l;
							r.method = "post";
							for (var n in d) c = u.createElement("input"), c.type = "hidden", c.name = n, c.value = a.a.Eb(a.a.c(d[n])),
								r.appendChild(c);
							b(h, function(a, b) {
								var c = u.createElement("input");
								c.type = "hidden";
								c.name = a;
								c.value = b;
								r.appendChild(c)
							});
							u.body.appendChild(r);
							e.submitter ? e.submitter(r) : r.submit();
							setTimeout(function() {
								r.parentNode.removeChild(r)
							}, 0)
						}
					}
				}();
				a.b("utils", a.a);
				a.b("utils.arrayForEach", a.a.q);
				a.b("utils.arrayFirst", a.a.Sb);
				a.b("utils.arrayFilter", a.a.Ka);
				a.b("utils.arrayGetDistinctValues", a.a.Tb);
				a.b("utils.arrayIndexOf", a.a.o);
				a.b("utils.arrayMap", a.a.fb);
				a.b("utils.arrayPushAll", a.a.ra);
				a.b("utils.arrayRemoveItem", a.a.La);
				a.b("utils.extend", a.a.extend);
				a.b("utils.fieldsIncludedWithJsonPost", a.a.cc);
				a.b("utils.getFormFields", a.a.ec);
				a.b("utils.peekObservable", a.a.zb);
				a.b("utils.postJson", a.a.fd);
				a.b("utils.parseJson", a.a.ed);
				a.b("utils.registerEventHandler", a.a.p);
				a.b("utils.stringifyJson", a.a.Eb);
				a.b("utils.range", a.a.hd);
				a.b("utils.toggleDomNodeCssClass", a.a.bb);
				a.b("utils.triggerEvent", a.a.Da);
				a.b("utils.unwrapObservable", a.a.c);
				a.b("utils.objectForEach", a.a.D);
				a.b("utils.addOrRemoveItem", a.a.pa);
				a.b("utils.setTextContent", a.a.Za);
				a.b("unwrap", a.a.c);
				Function.prototype.bind || (Function.prototype.bind = function(a) {
					var c = this;
					if (1 === arguments.length) return function() {
						return c.apply(a, arguments)
					};
					var d = Array.prototype.slice.call(arguments, 1);
					return function() {
						var e = d.slice(0);
						e.push.apply(e, arguments);
						return c.apply(a, e)
					}
				});
				a.a.e = new function() {
					function a(b, g) {
						var k = b[d];
						if (!k || "null" === k || !e[k]) {
							if (!g) return n;
							k = b[d] = "ko" + c++;
							e[k] = {}
						}
						return e[k]
					}
					var c = 0,
						d = "__ko__" + (new Date).getTime(),
						e = {};
					return {
						get: function(c, d) {
							var e = a(c, !1);
							return e === n ? n : e[d]
						},
						set: function(c, d, e) {
							if (e !== n || a(c, !1) !== n) a(c, !0)[d] = e
						},
						clear: function(a) {
							var b = a[d];
							return b ? (delete e[b], a[d] = null, !0) : !1
						},
						I: function() {
							return c++ + d
						}
					}
				};
				a.b("utils.domData", a.a.e);
				a.b("utils.domData.clear", a.a.e.clear);
				a.a.F = new function() {
					function b(b, c) {
						var e = a.a.e.get(b, d);
						e === n && c && (e = [], a.a.e.set(b, d, e));
						return e
					}

					function c(d) {
						var e = b(d, !1);
						if (e)
							for (var e = e.slice(0), l = 0; l < e.length; l++) e[l](d);
						a.a.e.clear(d);
						a.a.F.cleanExternalData(d);
						if (f[d.nodeType])
							for (e = d.firstChild; d = e;) e = d.nextSibling, 8 === d.nodeType && c(d)
					}
					var d = a.a.e.I(),
						e = {
							1: !0,
							8: !0,
							9: !0
						},
						f = {
							1: !0,
							9: !0
						};
					return {
						oa: function(a, c) {
							if ("function" != typeof c) throw Error("Callback must be a function");
							b(a, !0).push(c)
						},
						pc: function(c, e) {
							var l = b(c, !1);
							l && (a.a.La(l, e), 0 == l.length && a.a.e.set(c, d, n))
						},
						$: function(b) {
							if (e[b.nodeType] && (c(b), f[b.nodeType])) {
								var d = [];
								a.a.ra(d, b.getElementsByTagName("*"));
								for (var l = 0, m = d.length; l < m; l++) c(d[l])
							}
							return b
						},
						removeNode: function(b) {
							a.$(b);
							b.parentNode && b.parentNode.removeChild(b)
						},
						cleanExternalData: function(a) {
							v && "function" == typeof v.cleanData && v.cleanData([a])
						}
					}
				};
				a.$ = a.a.F.$;
				a.removeNode = a.a.F.removeNode;
				a.b("cleanNode", a.$);
				a.b("removeNode", a.removeNode);
				a.b("utils.domNodeDisposal", a.a.F);
				a.b("utils.domNodeDisposal.addDisposeCallback", a.a.F.oa);
				a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.F.pc);
				(function() {
					var b = [0, "", ""],
						c = [1, "<table>", "</table>"],
						d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
						e = [1, "<select multiple='multiple'>", "</select>"],
						f = {
							thead: c,
							tbody: c,
							tfoot: c,
							tr: [2, "<table><tbody>", "</tbody></table>"],
							td: d,
							th: d,
							option: e,
							optgroup: e
						},
						g = 8 >= a.a.C;
					a.a.ma = function(c, d) {
						var e;
						if (v)
							if (v.parseHTML) e = v.parseHTML(c, d) || [];
							else {
								if ((e = v.clean([c], d)) && e[0]) {
									for (var h = e[0]; h.parentNode && 11 !== h.parentNode.nodeType;) h = h.parentNode;
									h.parentNode && h.parentNode.removeChild(h)
								}
							}
						else {
							(e = d) || (e = u);
							var h = e.parentWindow || e.defaultView || x,
								r = a.a.$a(c).toLowerCase(),
								q = e.createElement("div"),
								p;
							p = (r = r.match(/^<([a-z]+)[ >]/)) && f[r[1]] || b;
							r = p[0];
							p = "ignored<div>" + p[1] + c + p[2] + "</div>";
							"function" == typeof h.innerShiv ? q.appendChild(h.innerShiv(p)) : (g && e.appendChild(q), q.innerHTML = p,
								g && q.parentNode.removeChild(q));
							for (; r--;) q = q.lastChild;
							e = a.a.V(q.lastChild.childNodes)
						}
						return e
					};
					a.a.Cb = function(b, c) {
						a.a.ob(b);
						c = a.a.c(c);
						if (null !== c && c !== n)
							if ("string" != typeof c && (c = c.toString()), v) v(b).html(c);
							else
								for (var d = a.a.ma(c, b.ownerDocument), e = 0; e < d.length; e++) b.appendChild(d[e])
					}
				})();
				a.b("utils.parseHtmlFragment", a.a.ma);
				a.b("utils.setHtml", a.a.Cb);
				a.M = function() {
					function b(c, e) {
						if (c)
							if (8 == c.nodeType) {
								var f = a.M.lc(c.nodeValue);
								null != f && e.push({
									Lc: c,
									cd: f
								})
							} else if (1 == c.nodeType)
							for (var f = 0, g = c.childNodes, k = g.length; f < k; f++) b(g[f], e)
					}
					var c = {};
					return {
						wb: function(a) {
							if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
							var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) |
								0).toString(16).substring(1);
							c[b] = a;
							return "<!--[ko_memo:" + b + "]-->"
						},
						xc: function(a, b) {
							var f = c[a];
							if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");
							try {
								return f.apply(null, b || []), !0
							} finally {
								delete c[a]
							}
						},
						yc: function(c, e) {
							var f = [];
							b(c, f);
							for (var g = 0, k = f.length; g < k; g++) {
								var l = f[g].Lc,
									m = [l];
								e && a.a.ra(m, e);
								a.M.xc(f[g].cd, m);
								l.nodeValue = "";
								l.parentNode && l.parentNode.removeChild(l)
							}
						},
						lc: function(a) {
							return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null
						}
					}
				}();
				a.b("memoization", a.M);
				a.b("memoization.memoize", a.M.wb);
				a.b("memoization.unmemoize", a.M.xc);
				a.b("memoization.parseMemoText", a.M.lc);
				a.b("memoization.unmemoizeDomNodeAndDescendants", a.M.yc);
				a.Y = function() {
					function b() {
						if (e)
							for (var b = e, c = 0, m; g < e;)
								if (m = d[g++]) {
									if (g > b) {
										if (5e3 <= ++c) {
											g = e;
											a.a.$b(Error("'Too much recursion' after processing " + c + " task groups."));
											break
										}
										b = e
									}
									try {
										m()
									} catch (h) {
										a.a.$b(h)
									}
								}
					}

					function c() {
						b();
						g = e = d.length = 0
					}
					var d = [],
						e = 0,
						f = 1,
						g = 0;
					return {
						scheduler: x.MutationObserver ? function(a) {
							var b = u.createElement("div");
							new MutationObserver(a).observe(b, {
								attributes: !0
							});
							return function() {
								b.classList.toggle("foo")
							}
						}(c) : u && "onreadystatechange" in u.createElement("script") ? function(a) {
							var b = u.createElement("script");
							b.onreadystatechange = function() {
								b.onreadystatechange = null;
								u.documentElement.removeChild(b);
								b = null;
								a()
							};
							u.documentElement.appendChild(b)
						} : function(a) {
							setTimeout(a, 0)
						},
						Wa: function(b) {
							e || a.Y.scheduler(c);
							d[e++] = b;
							return f++
						},
						cancel: function(a) {
							a -= f - e;
							a >= g && a < e && (d[a] = null)
						},
						resetForTesting: function() {
							var a = e - g;
							g = e = d.length = 0;
							return a
						},
						md: b
					}
				}();
				a.b("tasks", a.Y);
				a.b("tasks.schedule", a.Y.Wa);
				a.b("tasks.runEarly", a.Y.md);
				a.ya = {
					throttle: function(b, c) {
						b.throttleEvaluation = c;
						var d = null;
						return a.B({
							read: b,
							write: function(e) {
								clearTimeout(d);
								d = a.a.setTimeout(function() {
									b(e)
								}, c)
							}
						})
					},
					rateLimit: function(a, c) {
						var d, e, f;
						"number" == typeof c ? d = c : (d = c.timeout, e = c.method);
						a.cb = !1;
						f = "notifyWhenChangesStop" == e ? V : U;
						a.Ta(function(a) {
							return f(a, d)
						})
					},
					deferred: function(b, c) {
						if (!0 !== c) throw Error(
							"The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."
						);
						b.cb || (b.cb = !0, b.Ta(function(c) {
							var e;
							return function() {
								a.Y.cancel(e);
								e = a.Y.Wa(c);
								b.notifySubscribers(n, "dirty")
							}
						}))
					},
					notify: function(a, c) {
						a.equalityComparer = "always" == c ? null : J
					}
				};
				var T = {
					undefined: 1,
					"boolean": 1,
					number: 1,
					string: 1
				};
				a.b("extenders", a.ya);
				a.vc = function(b, c, d) {
					this.ia = b;
					this.gb = c;
					this.Kc = d;
					this.R = !1;
					a.G(this, "dispose", this.k)
				};
				a.vc.prototype.k = function() {
					this.R = !0;
					this.Kc()
				};
				a.J = function() {
					a.a.Ya(this, D);
					D.rb(this)
				};
				var I = "change",
					D = {
						rb: function(a) {
							a.K = {};
							a.Nb = 1
						},
						X: function(b, c, d) {
							var e = this;
							d = d || I;
							var f = new a.vc(e, c ? b.bind(c) : b, function() {
								a.a.La(e.K[d], f);
								e.Ia && e.Ia(d)
							});
							e.sa && e.sa(d);
							e.K[d] || (e.K[d] = []);
							e.K[d].push(f);
							return f
						},
						notifySubscribers: function(b, c) {
							c = c || I;
							c === I && this.zc();
							if (this.Pa(c)) try {
								a.l.Ub();
								for (var d = this.K[c].slice(0), e = 0, f; f = d[e]; ++e) f.R || f.gb(b)
							} finally {
								a.l.end()
							}
						},
						Na: function() {
							return this.Nb
						},
						Uc: function(a) {
							return this.Na() !== a
						},
						zc: function() {
							++this.Nb
						},
						Ta: function(b) {
							var c = this,
								d = a.H(c),
								e, f, g;
							c.Ha || (c.Ha = c.notifySubscribers, c.notifySubscribers = W);
							var k = b(function() {
								c.Mb = !1;
								d && g === c && (g = c());
								e = !1;
								c.tb(f, g) && c.Ha(f = g)
							});
							c.Lb = function(a) {
								c.Mb = e = !0;
								g = a;
								k()
							};
							c.Kb = function(a) {
								e || (f = a, c.Ha(a, "beforeChange"))
							}
						},
						Pa: function(a) {
							return this.K[a] && this.K[a].length
						},
						Sc: function(b) {
							if (b) return this.K[b] && this.K[b].length || 0;
							var c = 0;
							a.a.D(this.K, function(a, b) {
								"dirty" !== a && (c += b.length)
							});
							return c
						},
						tb: function(a, c) {
							return !this.equalityComparer || !this.equalityComparer(a, c)
						},
						extend: function(b) {
							var c = this;
							b && a.a.D(b, function(b, e) {
								var f = a.ya[b];
								"function" == typeof f && (c = f(c, e) || c)
							});
							return c
						}
					};
				a.G(D, "subscribe", D.X);
				a.G(D, "extend", D.extend);
				a.G(D, "getSubscriptionsCount", D.Sc);
				a.a.ka && a.a.Xa(D, Function.prototype);
				a.J.fn = D;
				a.hc = function(a) {
					return null != a && "function" == typeof a.X && "function" == typeof a.notifySubscribers
				};
				a.b("subscribable", a.J);
				a.b("isSubscribable", a.hc);
				a.va = a.l = function() {
					function b(a) {
						d.push(e);
						e = a
					}

					function c() {
						e = d.pop()
					}
					var d = [],
						e, f = 0;
					return {
						Ub: b,
						end: c,
						oc: function(b) {
							if (e) {
								if (!a.hc(b)) throw Error("Only subscribable things can act as dependencies");
								e.gb.call(e.Gc, b, b.Cc || (b.Cc = ++f))
							}
						},
						w: function(a, d, e) {
							try {
								return b(), a.apply(d, e || [])
							} finally {
								c()
							}
						},
						Aa: function() {
							if (e) return e.m.Aa()
						},
						Sa: function() {
							if (e) return e.Sa
						}
					}
				}();
				a.b("computedContext", a.va);
				a.b("computedContext.getDependenciesCount", a.va.Aa);
				a.b("computedContext.isInitial", a.va.Sa);
				a.b("ignoreDependencies", a.qd = a.l.w);
				var E = a.a.Yb("_latestValue");
				a.N = function(b) {
					function c() {
						if (0 < arguments.length) return c.tb(c[E], arguments[0]) && (c.ga(), c[E] = arguments[0], c.fa()), this;
						a.l.oc(c);
						return c[E]
					}
					c[E] = b;
					a.a.ka || a.a.extend(c, a.J.fn);
					a.J.fn.rb(c);
					a.a.Ya(c, B);
					a.options.deferUpdates && a.ya.deferred(c, !0);
					return c
				};
				var B = {
					equalityComparer: J,
					t: function() {
						return this[E]
					},
					fa: function() {
						this.notifySubscribers(this[E])
					},
					ga: function() {
						this.notifySubscribers(this[E], "beforeChange")
					}
				};
				a.a.ka && a.a.Xa(B, a.J.fn);
				var H = a.N.gd = "__ko_proto__";
				B[H] = a.N;
				a.Oa = function(b, c) {
					return null === b || b === n || b[H] === n ? !1 : b[H] === c ? !0 : a.Oa(b[H], c)
				};
				a.H = function(b) {
					return a.Oa(b, a.N)
				};
				a.Ba = function(b) {
					return "function" == typeof b && b[H] === a.N || "function" == typeof b && b[H] === a.B && b.Vc ? !0 : !1
				};
				a.b("observable", a.N);
				a.b("isObservable", a.H);
				a.b("isWriteableObservable", a.Ba);
				a.b("isWritableObservable", a.Ba);
				a.b("observable.fn", B);
				a.G(B, "peek", B.t);
				a.G(B, "valueHasMutated", B.fa);
				a.G(B, "valueWillMutate", B.ga);
				a.la = function(b) {
					b = b || [];
					if ("object" != typeof b || !("length" in b)) throw Error(
						"The argument passed when initializing an observable array must be an array, or null, or undefined.");
					b = a.N(b);
					a.a.Ya(b, a.la.fn);
					return b.extend({
						trackArrayChanges: !0
					})
				};
				a.la.fn = {
					remove: function(b) {
						for (var c = this.t(), d = [], e = "function" != typeof b || a.H(b) ? function(a) {
								return a === b
							} : b, f = 0; f < c.length; f++) {
							var g = c[f];
							e(g) && (0 === d.length && this.ga(), d.push(g), c.splice(f, 1), f--)
						}
						d.length && this.fa();
						return d
					},
					removeAll: function(b) {
						if (b === n) {
							var c = this.t(),
								d = c.slice(0);
							this.ga();
							c.splice(0, c.length);
							this.fa();
							return d
						}
						return b ? this.remove(function(c) {
							return 0 <= a.a.o(b, c)
						}) : []
					},
					destroy: function(b) {
						var c = this.t(),
							d = "function" != typeof b || a.H(b) ? function(a) {
								return a === b
							} : b;
						this.ga();
						for (var e = c.length - 1; 0 <= e; e--) d(c[e]) && (c[e]._destroy = !0);
						this.fa()
					},
					destroyAll: function(b) {
						return b === n ? this.destroy(function() {
							return !0
						}) : b ? this.destroy(function(c) {
							return 0 <= a.a.o(b, c)
						}) : []
					},
					indexOf: function(b) {
						var c = this();
						return a.a.o(c, b)
					},
					replace: function(a, c) {
						var d = this.indexOf(a);
						0 <= d && (this.ga(), this.t()[d] = c, this.fa())
					}
				};
				a.a.ka && a.a.Xa(a.la.fn, a.N.fn);
				a.a.q("pop push reverse shift sort splice unshift".split(" "), function(b) {
					a.la.fn[b] = function() {
						var a = this.t();
						this.ga();
						this.Vb(a, b, arguments);
						var d = a[b].apply(a, arguments);
						this.fa();
						return d === a ? this : d
					}
				});
				a.a.q(["slice"], function(b) {
					a.la.fn[b] = function() {
						var a = this();
						return a[b].apply(a, arguments)
					}
				});
				a.b("observableArray", a.la);
				a.ya.trackArrayChanges = function(b, c) {
					function d() {
						if (!e) {
							e = !0;
							var c = b.notifySubscribers;
							b.notifySubscribers = function(a, b) {
								b && b !== I || ++k;
								return c.apply(this, arguments)
							};
							var d = [].concat(b.t() || []);
							f = null;
							g = b.X(function(c) {
								c = [].concat(c || []);
								if (b.Pa("arrayChange")) {
									var e;
									if (!f || 1 < k) f = a.a.ib(d, c, b.hb);
									e = f
								}
								d = c;
								f = null;
								k = 0;
								e && e.length && b.notifySubscribers(e, "arrayChange")
							})
						}
					}
					b.hb = {};
					c && "object" == typeof c && a.a.extend(b.hb, c);
					b.hb.sparse = !0;
					if (!b.Vb) {
						var e = !1,
							f = null,
							g, k = 0,
							l = b.sa,
							m = b.Ia;
						b.sa = function(a) {
							l && l.call(b, a);
							"arrayChange" === a && d()
						};
						b.Ia = function(a) {
							m && m.call(b, a);
							"arrayChange" !== a || b.Pa("arrayChange") || (g.k(), e = !1)
						};
						b.Vb = function(b, c, d) {
							function m(a, b, c) {
								return l[l.length] = {
									status: a,
									value: b,
									index: c
								}
							}
							if (e && !k) {
								var l = [],
									g = b.length,
									t = d.length,
									G = 0;
								switch (c) {
									case "push":
										G = g;
									case "unshift":
										for (c = 0; c < t; c++) m("added", d[c], G + c);
										break;
									case "pop":
										G = g - 1;
									case "shift":
										g && m("deleted", b[G], G);
										break;
									case "splice":
										c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g);
										for (var g = 1 === t ? g : Math.min(c + (d[1] || 0), g), t = c + t - 2, G = Math.max(g, t), P = [], n = [],
												Q = 2; c < G; ++c, ++Q) c < g && n.push(m("deleted", b[c], c)), c < t && P.push(m("added", d[Q], c));
										a.a.dc(n, P);
										break;
									default:
										return
								}
								f = l
							}
						}
					}
				};
				var s = a.a.Yb("_state");
				a.m = a.B = function(b, c, d) {
					function e() {
						if (0 < arguments.length) {
							if ("function" === typeof f) f.apply(g.pb, arguments);
							else throw Error(
								"Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters."
							);
							return this
						}
						a.l.oc(e);
						(g.S || g.s && e.Qa()) && e.aa();
						return g.T
					}
					"object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
					if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
					var f = d.write,
						g = {
							T: n,
							S: !0,
							Ra: !1,
							Fb: !1,
							R: !1,
							Va: !1,
							s: !1,
							jd: d.read,
							pb: c || d.owner,
							i: d.disposeWhenNodeIsRemoved || d.i || null,
							wa: d.disposeWhen || d.wa,
							mb: null,
							r: {},
							L: 0,
							bc: null
						};
					e[s] = g;
					e.Vc = "function" === typeof f;
					a.a.ka || a.a.extend(e, a.J.fn);
					a.J.fn.rb(e);
					a.a.Ya(e, z);
					d.pure ? (g.Va = !0, g.s = !0, a.a.extend(e, $)) : d.deferEvaluation && a.a.extend(e, aa);
					a.options.deferUpdates && a.ya.deferred(e, !0);
					g.i && (g.Fb = !0, g.i.nodeType || (g.i = null));
					g.s || d.deferEvaluation || e.aa();
					g.i && e.ba() && a.a.F.oa(g.i, g.mb = function() {
						e.k()
					});
					return e
				};
				var z = {
						equalityComparer: J,
						Aa: function() {
							return this[s].L
						},
						Pb: function(a, c, d) {
							if (this[s].Va && c === this) throw Error("A 'pure' computed must not be called recursively");
							this[s].r[a] = d;
							d.Ga = this[s].L++;
							d.na = c.Na()
						},
						Qa: function() {
							var a, c, d = this[s].r;
							for (a in d)
								if (d.hasOwnProperty(a) && (c = d[a], c.ia.Uc(c.na))) return !0
						},
						bd: function() {
							this.Fa && !this[s].Ra && this.Fa()
						},
						ba: function() {
							return this[s].S || 0 < this[s].L
						},
						ld: function() {
							this.Mb || this.ac()
						},
						uc: function(a) {
							if (a.cb && !this[s].i) {
								var c = a.X(this.bd, this, "dirty"),
									d = a.X(this.ld, this);
								return {
									ia: a,
									k: function() {
										c.k();
										d.k()
									}
								}
							}
							return a.X(this.ac, this)
						},
						ac: function() {
							var b = this,
								c = b.throttleEvaluation;
							c && 0 <= c ? (clearTimeout(this[s].bc), this[s].bc = a.a.setTimeout(function() {
								b.aa(!0)
							}, c)) : b.Fa ? b.Fa() : b.aa(!0)
						},
						aa: function(b) {
							var c = this[s],
								d = c.wa;
							if (!c.Ra && !c.R) {
								if (c.i && !a.a.nb(c.i) || d && d()) {
									if (!c.Fb) {
										this.k();
										return
									}
								} else c.Fb = !1;
								c.Ra = !0;
								try {
									this.Qc(b)
								} finally {
									c.Ra = !1
								}
								c.L || this.k()
							}
						},
						Qc: function(b) {
							var c = this[s],
								d = c.Va ? n : !c.L,
								e = {
									Hc: this,
									Ma: c.r,
									lb: c.L
								};
							a.l.Ub({
								Gc: e,
								gb: Y,
								m: this,
								Sa: d
							});
							c.r = {};
							c.L = 0;
							e = this.Pc(c, e);
							this.tb(c.T, e) && (c.s || this.notifySubscribers(c.T, "beforeChange"), c.T = e, c.s ? this.zc() : b &&
								this.notifySubscribers(c.T));
							d && this.notifySubscribers(c.T, "awake")
						},
						Pc: function(b, c) {
							try {
								var d = b.jd;
								return b.pb ? d.call(b.pb) : d()
							} finally {
								a.l.end(), c.lb && !b.s && a.a.D(c.Ma, X), b.S = !1
							}
						},
						t: function() {
							var a = this[s];
							(a.S && !a.L || a.s && this.Qa()) && this.aa();
							return a.T
						},
						Ta: function(b) {
							a.J.fn.Ta.call(this, b);
							this.Fa = function() {
								this.Kb(this[s].T);
								this[s].S = !0;
								this.Lb(this)
							}
						},
						k: function() {
							var b = this[s];
							!b.s && b.r && a.a.D(b.r, function(a, b) {
								b.k && b.k()
							});
							b.i && b.mb && a.a.F.pc(b.i, b.mb);
							b.r = null;
							b.L = 0;
							b.R = !0;
							b.S = !1;
							b.s = !1;
							b.i = null
						}
					},
					$ = {
						sa: function(b) {
							var c = this,
								d = c[s];
							if (!d.R && d.s && "change" == b) {
								d.s = !1;
								if (d.S || c.Qa()) d.r = null, d.L = 0, d.S = !0, c.aa();
								else {
									var e = [];
									a.a.D(d.r, function(a, b) {
										e[b.Ga] = a
									});
									a.a.q(e, function(a, b) {
										var e = d.r[a],
											l = c.uc(e.ia);
										l.Ga = b;
										l.na = e.na;
										d.r[a] = l
									})
								}
								d.R || c.notifySubscribers(d.T, "awake")
							}
						},
						Ia: function(b) {
							var c = this[s];
							c.R || "change" != b || this.Pa("change") || (a.a.D(c.r, function(a, b) {
								b.k && (c.r[a] = {
									ia: b.ia,
									Ga: b.Ga,
									na: b.na
								}, b.k())
							}), c.s = !0, this.notifySubscribers(n, "asleep"))
						},
						Na: function() {
							var b = this[s];
							b.s && (b.S || this.Qa()) && this.aa();
							return a.J.fn.Na.call(this)
						}
					},
					aa = {
						sa: function(a) {
							"change" != a && "beforeChange" != a || this.t()
						}
					};
				a.a.ka && a.a.Xa(z, a.J.fn);
				var R = a.N.gd;
				a.m[R] = a.N;
				z[R] = a.m;
				a.Xc = function(b) {
					return a.Oa(b, a.m)
				};
				a.Yc = function(b) {
					return a.Oa(b, a.m) && b[s] && b[s].Va
				};
				a.b("computed", a.m);
				a.b("dependentObservable", a.m);
				a.b("isComputed", a.Xc);
				a.b("isPureComputed", a.Yc);
				a.b("computed.fn", z);
				a.G(z, "peek", z.t);
				a.G(z, "dispose", z.k);
				a.G(z, "isActive", z.ba);
				a.G(z, "getDependenciesCount", z.Aa);
				a.nc = function(b, c) {
					if ("function" === typeof b) return a.m(b, c, {
						pure: !0
					});
					b = a.a.extend({}, b);
					b.pure = !0;
					return a.m(b, c)
				};
				a.b("pureComputed", a.nc);
				(function() {
					function b(a, f, g) {
						g = g || new d;
						a = f(a);
						if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String ||
							a instanceof Number || a instanceof Boolean) return a;
						var k = a instanceof Array ? [] : {};
						g.save(a, k);
						c(a, function(c) {
							var d = f(a[c]);
							switch (typeof d) {
								case "boolean":
								case "number":
								case "string":
								case "function":
									k[c] = d;
									break;
								case "object":
								case "undefined":
									var h = g.get(d);
									k[c] = h !== n ? h : b(d, f, g)
							}
						});
						return k
					}

					function c(a, b) {
						if (a instanceof Array) {
							for (var c = 0; c < a.length; c++) b(c);
							"function" == typeof a.toJSON && b("toJSON")
						} else
							for (c in a) b(c)
					}

					function d() {
						this.keys = [];
						this.Ib = []
					}
					a.wc = function(c) {
						if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
						return b(c, function(b) {
							for (var c = 0; a.H(b) && 10 > c; c++) b = b();
							return b
						})
					};
					a.toJSON = function(b, c, d) {
						b = a.wc(b);
						return a.a.Eb(b, c, d)
					};
					d.prototype = {
						save: function(b, c) {
							var d = a.a.o(this.keys, b);
							0 <= d ? this.Ib[d] = c : (this.keys.push(b), this.Ib.push(c))
						},
						get: function(b) {
							b = a.a.o(this.keys, b);
							return 0 <= b ? this.Ib[b] : n
						}
					}
				})();
				a.b("toJS", a.wc);
				a.b("toJSON", a.toJSON);
				(function() {
					a.j = {
						u: function(b) {
							switch (a.a.A(b)) {
								case "option":
									return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.e.get(b, a.d.options.xb) : 7 >= a.a.C ? b.getAttributeNode(
										"value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
								case "select":
									return 0 <= b.selectedIndex ? a.j.u(b.options[b.selectedIndex]) : n;
								default:
									return b.value
							}
						},
						ha: function(b, c, d) {
							switch (a.a.A(b)) {
								case "option":
									switch (typeof c) {
										case "string":
											a.a.e.set(b, a.d.options.xb, n);
											"__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;
											b.value = c;
											break;
										default:
											a.a.e.set(b, a.d.options.xb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ?
												c : ""
									}
									break;
								case "select":
									if ("" === c || null === c) c = n;
									for (var e = -1, f = 0, g = b.options.length, k; f < g; ++f)
										if (k = a.j.u(b.options[f]), k == c || "" == k && c === n) {
											e = f;
											break
										} if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e;
									break;
								default:
									if (null === c || c === n) c = "";
									b.value = c
							}
						}
					}
				})();
				a.b("selectExtensions", a.j);
				a.b("selectExtensions.readValue", a.j.u);
				a.b("selectExtensions.writeValue", a.j.ha);
				a.h = function() {
					function b(b) {
						b = a.a.$a(b);
						123 === b.charCodeAt(0) && (b = b.slice(1, -1));
						var c = [],
							d = b.match(e),
							r, k = [],
							p = 0;
						if (d) {
							d.push(",");
							for (var A = 0, y; y = d[A]; ++A) {
								var t = y.charCodeAt(0);
								if (44 === t) {
									if (0 >= p) {
										c.push(r && k.length ? {
											key: r,
											value: k.join("")
										} : {
											unknown: r || k.join("")
										});
										r = p = 0;
										k = [];
										continue
									}
								} else if (58 === t) {
									if (!p && !r && 1 === k.length) {
										r = k.pop();
										continue
									}
								} else 47 === t && A && 1 < y.length ? (t = d[A - 1].match(f)) && !g[t[0]] && (b = b.substr(b.indexOf(y) +
										1), d = b.match(e), d.push(","), A = -1, y = "/") : 40 === t || 123 === t || 91 === t ? ++p : 41 === t ||
									125 === t || 93 === t ? --p : r || k.length || 34 !== t && 39 !== t || (y = y.slice(1, -1));
								k.push(y)
							}
						}
						return c
					}
					var c = ["true", "false", "null", "undefined"],
						d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
						e = RegExp(
							"\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]",
							"g"),
						f = /[\])"'A-Za-z0-9_$]+$/,
						g = {
							"in": 1,
							"return": 1,
							"typeof": 1
						},
						k = {};
					return {
						ta: [],
						ea: k,
						yb: b,
						Ua: function(e, m) {
							function h(b, e) {
								var m;
								if (!A) {
									var l = a.getBindingHandler(b);
									if (l && l.preprocess && !(e = l.preprocess(e, b, h))) return;
									if (l = k[b]) m = e, 0 <= a.a.o(c, m) ? m = !1 : (l = m.match(d), m = null === l ? !1 : l[1] ? "Object(" +
										l[1] + ")" + l[2] : m), l = m;
									l && g.push("'" + b + "':function(_z){" + m + "=_z}")
								}
								p && (e = "function(){return " + e + " }");
								f.push("'" + b + "':" + e)
							}
							m = m || {};
							var f = [],
								g = [],
								p = m.valueAccessors,
								A = m.bindingParams,
								y = "string" === typeof e ? b(e) : e;
							a.a.q(y, function(a) {
								h(a.key || a.unknown, a.value)
							});
							g.length && h("_ko_property_writers", "{" + g.join(",") + " }");
							return f.join(",")
						},
						ad: function(a, b) {
							for (var c = 0; c < a.length; c++)
								if (a[c].key == b) return !0;
							return !1
						},
						Ea: function(b, c, d, e, f) {
							if (b && a.H(b)) !a.Ba(b) || f && b.t() === e || b(e);
							else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e)
						}
					}
				}();
				a.b("expressionRewriting", a.h);
				a.b("expressionRewriting.bindingRewriteValidators", a.h.ta);
				a.b("expressionRewriting.parseObjectLiteral", a.h.yb);
				a.b("expressionRewriting.preProcessBindings", a.h.Ua);
				a.b("expressionRewriting._twoWayBindings", a.h.ea);
				a.b("jsonExpressionRewriting", a.h);
				a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.Ua);
				(function() {
					function b(a) {
						return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue)
					}

					function c(a) {
						return 8 == a.nodeType && k.test(f ? a.text : a.nodeValue)
					}

					function d(a, d) {
						for (var e = a, f = 1, l = []; e = e.nextSibling;) {
							if (c(e) && (f--, 0 === f)) return l;
							l.push(e);
							b(e) && f++
						}
						if (!d) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);
						return null
					}

					function e(a, b) {
						var c = d(a, b);
						return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null
					}
					var f = u && "<!--test-->" === u.createComment("test").text,
						g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
						k = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
						l = {
							ul: !0,
							ol: !0
						};
					a.f = {
						Z: {},
						childNodes: function(a) {
							return b(a) ? d(a) : a.childNodes
						},
						xa: function(c) {
							if (b(c)) {
								c = a.f.childNodes(c);
								for (var d = 0, e = c.length; d < e; d++) a.removeNode(c[d])
							} else a.a.ob(c)
						},
						da: function(c, d) {
							if (b(c)) {
								a.f.xa(c);
								for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++) e.parentNode.insertBefore(d[f], e)
							} else a.a.da(c, d)
						},
						mc: function(a, c) {
							b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(
								c)
						},
						gc: function(c, d, e) {
							e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) :
								c.appendChild(d) : a.f.mc(c, d)
						},
						firstChild: function(a) {
							return b(a) ? !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling : a.firstChild
						},
						nextSibling: function(a) {
							b(a) && (a = e(a));
							return a.nextSibling && c(a.nextSibling) ? null : a.nextSibling
						},
						Tc: b,
						pd: function(a) {
							return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null
						},
						kc: function(d) {
							if (l[a.a.A(d)]) {
								var h = d.firstChild;
								if (h) {
									do
										if (1 === h.nodeType) {
											var f;
											f = h.firstChild;
											var g = null;
											if (f) {
												do
													if (g) g.push(f);
													else if (b(f)) {
													var k = e(f, !0);
													k ? f = k : g = [f]
												} else c(f) && (g = [f]);
												while (f = f.nextSibling)
											}
											if (f = g)
												for (g = h.nextSibling, k = 0; k < f.length; k++) g ? d.insertBefore(f[k], g) : d.appendChild(f[k])
										} while (h = h.nextSibling)
								}
							}
						}
					}
				})();
				a.b("virtualElements", a.f);
				a.b("virtualElements.allowedBindings", a.f.Z);
				a.b("virtualElements.emptyNode", a.f.xa);
				a.b("virtualElements.insertAfter", a.f.gc);
				a.b("virtualElements.prepend", a.f.mc);
				a.b("virtualElements.setDomNodeChildren", a.f.da);
				(function() {
					a.Q = function() {
						this.Fc = {}
					};
					a.a.extend(a.Q.prototype, {
						nodeHasBindings: function(b) {
							switch (b.nodeType) {
								case 1:
									return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);
								case 8:
									return a.f.Tc(b);
								default:
									return !1
							}
						},
						getBindings: function(b, c) {
							var d = this.getBindingsString(b, c),
								d = d ? this.parseBindingsString(d, c, b) : null;
							return a.g.Ob(d, b, c, !1)
						},
						getBindingAccessors: function(b, c) {
							var d = this.getBindingsString(b, c),
								d = d ? this.parseBindingsString(d, c, b, {
									valueAccessors: !0
								}) : null;
							return a.g.Ob(d, b, c, !0)
						},
						getBindingsString: function(b) {
							switch (b.nodeType) {
								case 1:
									return b.getAttribute("data-bind");
								case 8:
									return a.f.pd(b);
								default:
									return null
							}
						},
						parseBindingsString: function(b, c, d, e) {
							try {
								var f = this.Fc,
									g = b + (e && e.valueAccessors || ""),
									k;
								if (!(k = f[g])) {
									var l, m = "with($context){with($data||{}){return{" + a.h.Ua(b, e) + "}}}";
									l = new Function("$context", "$element", m);
									k = f[g] = l
								}
								return k(c, d)
							} catch (h) {
								throw h.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + h.message, h
							}
						}
					});
					a.Q.instance = new a.Q
				})();
				a.b("bindingProvider", a.Q);
				(function() {
					function b(a) {
						return function() {
							return a
						}
					}

					function c(a) {
						return a()
					}

					function d(b) {
						return a.a.Ca(a.l.w(b), function(a, c) {
							return function() {
								return b()[c]
							}
						})
					}

					function e(c, e, h) {
						return "function" === typeof c ? d(c.bind(null, e, h)) : a.a.Ca(c, b)
					}

					function f(a, b) {
						return d(this.getBindings.bind(this, a, b))
					}

					function g(b, c, d) {
						var e, h = a.f.firstChild(c),
							f = a.Q.instance,
							m = f.preprocessNode;
						if (m) {
							for (; e = h;) h = a.f.nextSibling(e), m.call(f, e);
							h = a.f.firstChild(c)
						}
						for (; e = h;) h = a.f.nextSibling(e), k(b, e, d)
					}

					function k(b, c, d) {
						var e = !0,
							h = 1 === c.nodeType;
						h && a.f.kc(c);
						if (h && d || a.Q.instance.nodeHasBindings(c)) e = m(c, null, b, d).shouldBindDescendants;
						e && !r[a.a.A(c)] && g(b, c, !h)
					}

					function l(b) {
						var c = [],
							d = {},
							e = [];
						a.a.D(b, function Z(h) {
							if (!d[h]) {
								var f = a.getBindingHandler(h);
								f && (f.after && (e.push(h), a.a.q(f.after, function(c) {
									if (b[c]) {
										if (-1 !== a.a.o(e, c)) throw Error(
											"Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", ")
										);
										Z(c)
									}
								}), e.length--), c.push({
									key: h,
									fc: f
								}));
								d[h] = !0
							}
						});
						return c
					}

					function m(b, d, e, h) {
						var m = a.a.e.get(b, q);
						if (!d) {
							if (m) throw Error("You cannot apply bindings multiple times to the same element.");
							a.a.e.set(b, q, !0)
						}!m && h && a.tc(b, e);
						var g;
						if (d && "function" !== typeof d) g = d;
						else {
							var k = a.Q.instance,
								r = k.getBindingAccessors || f,
								p = a.B(function() {
									(g = d ? d(e, b) : r.call(k, b, e)) && e.P && e.P();
									return g
								}, null, {
									i: b
								});
							g && p.ba() || (p = null)
						}
						var u;
						if (g) {
							var v = p ? function(a) {
									return function() {
										return c(p()[a])
									}
								} : function(a) {
									return g[a]
								},
								s = function() {
									return a.a.Ca(p ? p() : g, c)
								};
							s.get = function(a) {
								return g[a] && c(v(a))
							};
							s.has = function(a) {
								return a in g
							};
							h = l(g);
							a.a.q(h, function(c) {
								var d = c.fc.init,
									h = c.fc.update,
									f = c.key;
								if (8 === b.nodeType && !a.f.Z[f]) throw Error("The binding '" + f +
									"' cannot be used with virtual elements");
								try {
									"function" == typeof d && a.l.w(function() {
										var a = d(b, v(f), s, e.$data, e);
										if (a && a.controlsDescendantBindings) {
											if (u !== n) throw Error("Multiple bindings (" + u + " and " + f +
												") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."
											);
											u = f
										}
									}), "function" == typeof h && a.B(function() {
										h(b, v(f), s, e.$data, e)
									}, null, {
										i: b
									})
								} catch (m) {
									throw m.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + m.message, m
								}
							})
						}
						return {
							shouldBindDescendants: u === n
						}
					}

					function h(b) {
						return b && b instanceof a.U ? b : new a.U(b)
					}
					a.d = {};
					var r = {
						script: !0,
						textarea: !0,
						template: !0
					};
					a.getBindingHandler = function(b) {
						return a.d[b]
					};
					a.U = function(b, c, d, e) {
						var h = this,
							f = "function" == typeof b && !a.H(b),
							m, g = a.B(function() {
								var m = f ? b() : b,
									l = a.a.c(m);
								c ? (c.P && c.P(), a.a.extend(h, c), g && (h.P = g)) : (h.$parents = [], h.$root = l, h.ko = a);
								h.$rawData = m;
								h.$data = l;
								d && (h[d] = l);
								e && e(h, c, l);
								return h.$data
							}, null, {
								wa: function() {
									return m && !a.a.Qb(m)
								},
								i: !0
							});
						g.ba() && (h.P = g, g.equalityComparer = null, m = [], g.Ac = function(b) {
							m.push(b);
							a.a.F.oa(b, function(b) {
								a.a.La(m, b);
								m.length || (g.k(), h.P = g = n)
							})
						})
					};
					a.U.prototype.createChildContext = function(b, c, d) {
						return new a.U(b, this, c, function(a, b) {
							a.$parentContext = b;
							a.$parent = b.$data;
							a.$parents = (b.$parents || []).slice(0);
							a.$parents.unshift(a.$parent);
							d && d(a)
						})
					};
					a.U.prototype.extend = function(b) {
						return new a.U(this.P || this.$data, this, null, function(c, d) {
							c.$rawData = d.$rawData;
							a.a.extend(c, "function" == typeof b ? b() : b)
						})
					};
					var q = a.a.e.I(),
						p = a.a.e.I();
					a.tc = function(b, c) {
						if (2 == arguments.length) a.a.e.set(b, p, c), c.P && c.P.Ac(b);
						else return a.a.e.get(b, p)
					};
					a.Ja = function(b, c, d) {
						1 === b.nodeType && a.f.kc(b);
						return m(b, c, h(d), !0)
					};
					a.Dc = function(b, c, d) {
						d = h(d);
						return a.Ja(b, e(c, d, b), d)
					};
					a.eb = function(a, b) {
						1 !== b.nodeType && 8 !== b.nodeType || g(h(a), b, !0)
					};
					a.Rb = function(a, b) {
						!v && x.jQuery && (v = x.jQuery);
						if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error(
							"ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
						b = b || x.document.body;
						k(h(a), b, !0)
					};
					a.kb = function(b) {
						switch (b.nodeType) {
							case 1:
							case 8:
								var c = a.tc(b);
								if (c) return c;
								if (b.parentNode) return a.kb(b.parentNode)
						}
						return n
					};
					a.Jc = function(b) {
						return (b = a.kb(b)) ? b.$data : n
					};
					a.b("bindingHandlers", a.d);
					a.b("applyBindings", a.Rb);
					a.b("applyBindingsToDescendants", a.eb);
					a.b("applyBindingAccessorsToNode", a.Ja);
					a.b("applyBindingsToNode", a.Dc);
					a.b("contextFor", a.kb);
					a.b("dataFor", a.Jc)
				})();
				(function(b) {
					function c(c, e) {
						var m = f.hasOwnProperty(c) ? f[c] : b,
							h;
						m ? m.X(e) : (m = f[c] = new a.J, m.X(e), d(c, function(b, d) {
							var e = !(!d || !d.synchronous);
							g[c] = {
								definition: b,
								Zc: e
							};
							delete f[c];
							h || e ? m.notifySubscribers(b) : a.Y.Wa(function() {
								m.notifySubscribers(b)
							})
						}), h = !0)
					}

					function d(a, b) {
						e("getConfig", [a], function(c) {
							c ? e("loadComponent", [a, c], function(a) {
								b(a, c)
							}) : b(null, null)
						})
					}

					function e(c, d, f, h) {
						h || (h = a.g.loaders.slice(0));
						var g = h.shift();
						if (g) {
							var q = g[c];
							if (q) {
								var p = !1;
								if (q.apply(g, d.concat(function(a) {
										p ? f(null) : null !== a ? f(a) : e(c, d, f, h)
									})) !== b && (p = !0, !g.suppressLoaderExceptions)) throw Error(
									"Component loaders must supply values by invoking the callback, not by returning values synchronously."
								)
							} else e(c, d, f, h)
						} else f(null)
					}
					var f = {},
						g = {};
					a.g = {
						get: function(d, e) {
							var f = g.hasOwnProperty(d) ? g[d] : b;
							f ? f.Zc ? a.l.w(function() {
								e(f.definition)
							}) : a.Y.Wa(function() {
								e(f.definition)
							}) : c(d, e)
						},
						Xb: function(a) {
							delete g[a]
						},
						Jb: e
					};
					a.g.loaders = [];
					a.b("components", a.g);
					a.b("components.get", a.g.get);
					a.b("components.clearCachedDefinition", a.g.Xb)
				})();
				(function() {
					function b(b, c, d, e) {
						function g() {
							0 === --y && e(k)
						}
						var k = {},
							y = 2,
							t = d.template;
						d = d.viewModel;
						t ? f(c, t, function(c) {
							a.g.Jb("loadTemplate", [b, c], function(a) {
								k.template = a;
								g()
							})
						}) : g();
						d ? f(c, d, function(c) {
							a.g.Jb("loadViewModel", [b, c], function(a) {
								k[l] = a;
								g()
							})
						}) : g()
					}

					function c(a, b, d) {
						if ("function" === typeof b) d(function(a) {
							return new b(a)
						});
						else if ("function" === typeof b[l]) d(b[l]);
						else if ("instance" in b) {
							var e = b.instance;
							d(function() {
								return e
							})
						} else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b)
					}

					function d(b) {
						switch (a.a.A(b)) {
							case "script":
								return a.a.ma(b.text);
							case "textarea":
								return a.a.ma(b.value);
							case "template":
								if (e(b.content)) return a.a.ua(b.content.childNodes)
						}
						return a.a.ua(b.childNodes)
					}

					function e(a) {
						return x.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType
					}

					function f(a, b, c) {
						"string" === typeof b.require ? O || x.require ? (O || x.require)([b.require], c) : a(
							"Uses require, but no AMD loader is present") : c(b)
					}

					function g(a) {
						return function(b) {
							throw Error("Component '" + a + "': " + b)
						}
					}
					var k = {};
					a.g.register = function(b, c) {
						if (!c) throw Error("Invalid configuration for " + b);
						if (a.g.ub(b)) throw Error("Component " + b + " is already registered");
						k[b] = c
					};
					a.g.ub = function(a) {
						return k.hasOwnProperty(a)
					};
					a.g.od = function(b) {
						delete k[b];
						a.g.Xb(b)
					};
					a.g.Zb = {
						getConfig: function(a, b) {
							b(k.hasOwnProperty(a) ? k[a] : null)
						},
						loadComponent: function(a, c, d) {
							var e = g(a);
							f(e, c, function(c) {
								b(a, e, c, d)
							})
						},
						loadTemplate: function(b, c, f) {
							b = g(b);
							if ("string" === typeof c) f(a.a.ma(c));
							else if (c instanceof Array) f(c);
							else if (e(c)) f(a.a.V(c.childNodes));
							else if (c.element)
								if (c = c.element, x.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c));
								else if ("string" === typeof c) {
								var l = u.getElementById(c);
								l ? f(d(l)) : b("Cannot find element with ID " + c)
							} else b("Unknown element type: " + c);
							else b("Unknown template value: " + c)
						},
						loadViewModel: function(a, b, d) {
							c(g(a), b, d)
						}
					};
					var l = "createViewModel";
					a.b("components.register", a.g.register);
					a.b("components.isRegistered", a.g.ub);
					a.b("components.unregister", a.g.od);
					a.b("components.defaultLoader", a.g.Zb);
					a.g.loaders.push(a.g.Zb);
					a.g.Bc = k
				})();
				(function() {
					function b(b, e) {
						var f = b.getAttribute("params");
						if (f) {
							var f = c.parseBindingsString(f, e, b, {
									valueAccessors: !0,
									bindingParams: !0
								}),
								f = a.a.Ca(f, function(c) {
									return a.m(c, null, {
										i: b
									})
								}),
								g = a.a.Ca(f, function(c) {
									var e = c.t();
									return c.ba() ? a.m({
										read: function() {
											return a.a.c(c())
										},
										write: a.Ba(e) && function(a) {
											c()(a)
										},
										i: b
									}) : e
								});
							g.hasOwnProperty("$raw") || (g.$raw = f);
							return g
						}
						return {
							$raw: {}
						}
					}
					a.g.getComponentNameForNode = function(b) {
						var c = a.a.A(b);
						if (a.g.ub(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.C && b.tagName ===
								c)) return c
					};
					a.g.Ob = function(c, e, f, g) {
						if (1 === e.nodeType) {
							var k = a.g.getComponentNameForNode(e);
							if (k) {
								c = c || {};
								if (c.component) throw Error(
									'Cannot use the "component" binding on a custom element matching a component');
								var l = {
									name: k,
									params: b(e, f)
								};
								c.component = g ? function() {
									return l
								} : l
							}
						}
						return c
					};
					var c = new a.Q;
					9 > a.a.C && (a.g.register = function(a) {
						return function(b) {
							u.createElement(b);
							return a.apply(this, arguments)
						}
					}(a.g.register), u.createDocumentFragment = function(b) {
						return function() {
							var c = b(),
								f = a.g.Bc,
								g;
							for (g in f) f.hasOwnProperty(g) && c.createElement(g);
							return c
						}
					}(u.createDocumentFragment))
				})();
				(function(b) {
					function c(b, c, d) {
						c = c.template;
						if (!c) throw Error("Component '" + b + "' has no template");
						b = a.a.ua(c);
						a.f.da(d, b)
					}

					function d(a, b, c, d) {
						var e = a.createViewModel;
						return e ? e.call(a, d, {
							element: b,
							templateNodes: c
						}) : d
					}
					var e = 0;
					a.d.component = {
						init: function(f, g, k, l, m) {
							function h() {
								var a = r && r.dispose;
								"function" === typeof a && a.call(r);
								q = r = null
							}
							var r, q, p = a.a.V(a.f.childNodes(f));
							a.a.F.oa(f, h);
							a.m(function() {
								var l = a.a.c(g()),
									k, t;
								"string" === typeof l ? k = l : (k = a.a.c(l.name), t = a.a.c(l.params));
								if (!k) throw Error("No component name specified");
								var n = q = ++e;
								a.g.get(k, function(e) {
									if (q === n) {
										h();
										if (!e) throw Error("Unknown component '" + k + "'");
										c(k, e, f);
										var g = d(e, f, p, t);
										e = m.createChildContext(g, b, function(a) {
											a.$component = g;
											a.$componentTemplateNodes = p
										});
										r = g;
										a.eb(e, f)
									}
								})
							}, null, {
								i: f
							});
							return {
								controlsDescendantBindings: !0
							}
						}
					};
					a.f.Z.component = !0
				})();
				var S = {
					"class": "className",
					"for": "htmlFor"
				};
				a.d.attr = {
					update: function(b, c) {
						var d = a.a.c(c()) || {};
						a.a.D(d, function(c, d) {
							d = a.a.c(d);
							var g = !1 === d || null === d || d === n;
							g && b.removeAttribute(c);
							8 >= a.a.C && c in S ? (c = S[c], g ? b.removeAttribute(c) : b[c] = d) : g || b.setAttribute(c, d.toString());
							"name" === c && a.a.rc(b, g ? "" : d.toString())
						})
					}
				};
				(function() {
					a.d.checked = {
						after: ["value", "attr"],
						init: function(b, c, d) {
							function e() {
								var e = b.checked,
									f = p ? g() : e;
								if (!a.va.Sa() && (!l || e)) {
									var m = a.l.w(c);
									if (h) {
										var k = r ? m.t() : m;
										q !== f ? (e && (a.a.pa(k, f, !0), a.a.pa(k, q, !1)), q = f) : a.a.pa(k, f, e);
										r && a.Ba(m) && m(k)
									} else a.h.Ea(m, d, "checked", f, !0)
								}
							}

							function f() {
								var d = a.a.c(c());
								b.checked = h ? 0 <= a.a.o(d, g()) : k ? d : g() === d
							}
							var g = a.nc(function() {
									return d.has("checkedValue") ? a.a.c(d.get("checkedValue")) : d.has("value") ? a.a.c(d.get("value")) :
										b.value
								}),
								k = "checkbox" == b.type,
								l = "radio" == b.type;
							if (k || l) {
								var m = c(),
									h = k && a.a.c(m) instanceof Array,
									r = !(h && m.push && m.splice),
									q = h ? g() : n,
									p = l || h;
								l && !b.name && a.d.uniqueName.init(b, function() {
									return !0
								});
								a.m(e, null, {
									i: b
								});
								a.a.p(b, "click", e);
								a.m(f, null, {
									i: b
								});
								m = n
							}
						}
					};
					a.h.ea.checked = !0;
					a.d.checkedValue = {
						update: function(b, c) {
							b.value = a.a.c(c())
						}
					}
				})();
				a.d.css = {
					update: function(b, c) {
						var d = a.a.c(c());
						null !== d && "object" == typeof d ? a.a.D(d, function(c, d) {
							d = a.a.c(d);
							a.a.bb(b, c, d)
						}) : (d = a.a.$a(String(d || "")), a.a.bb(b, b.__ko__cssValue, !1), b.__ko__cssValue = d, a.a.bb(b, d, !0))
					}
				};
				a.d.enable = {
					update: function(b, c) {
						var d = a.a.c(c());
						d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0)
					}
				};
				a.d.disable = {
					update: function(b, c) {
						a.d.enable.update(b, function() {
							return !a.a.c(c())
						})
					}
				};
				a.d.event = {
					init: function(b, c, d, e, f) {
						var g = c() || {};
						a.a.D(g, function(g) {
							"string" == typeof g && a.a.p(b, g, function(b) {
								var m, h = c()[g];
								if (h) {
									try {
										var r = a.a.V(arguments);
										e = f.$data;
										r.unshift(e);
										m = h.apply(e, r)
									} finally {
										!0 !== m && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
									}!1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation())
								}
							})
						})
					}
				};
				a.d.foreach = {
					ic: function(b) {
						return function() {
							var c = b(),
								d = a.a.zb(c);
							if (!d || "number" == typeof d.length) return {
								foreach: c,
								templateEngine: a.W.sb
							};
							a.a.c(c);
							return {
								foreach: d.data,
								as: d.as,
								includeDestroyed: d.includeDestroyed,
								afterAdd: d.afterAdd,
								beforeRemove: d.beforeRemove,
								afterRender: d.afterRender,
								beforeMove: d.beforeMove,
								afterMove: d.afterMove,
								templateEngine: a.W.sb
							}
						}
					},
					init: function(b, c) {
						return a.d.template.init(b, a.d.foreach.ic(c))
					},
					update: function(b, c, d, e, f) {
						return a.d.template.update(b, a.d.foreach.ic(c), d, e, f)
					}
				};
				a.h.ta.foreach = !1;
				a.f.Z.foreach = !0;
				a.d.hasfocus = {
					init: function(b, c, d) {
						function e(e) {
							b.__ko_hasfocusUpdating = !0;
							var f = b.ownerDocument;
							if ("activeElement" in f) {
								var g;
								try {
									g = f.activeElement
								} catch (h) {
									g = f.body
								}
								e = g === b
							}
							f = c();
							a.h.Ea(f, d, "hasfocus", e, !0);
							b.__ko_hasfocusLastValue = e;
							b.__ko_hasfocusUpdating = !1
						}
						var f = e.bind(null, !0),
							g = e.bind(null, !1);
						a.a.p(b, "focus", f);
						a.a.p(b, "focusin", f);
						a.a.p(b, "blur", g);
						a.a.p(b, "focusout", g)
					},
					update: function(b, c) {
						var d = !!a.a.c(c());
						b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue &&
							b.ownerDocument.body.focus(), a.l.w(a.a.Da, null, [b, d ? "focusin" : "focusout"]))
					}
				};
				a.h.ea.hasfocus = !0;
				a.d.hasFocus = a.d.hasfocus;
				a.h.ea.hasFocus = !0;
				a.d.html = {
					init: function() {
						return {
							controlsDescendantBindings: !0
						}
					},
					update: function(b, c) {
						a.a.Cb(b, c())
					}
				};
				K("if");
				K("ifnot", !1, !0);
				K("with", !0, !1, function(a, c) {
					return a.createChildContext(c)
				});
				var L = {};
				a.d.options = {
					init: function(b) {
						if ("select" !== a.a.A(b)) throw Error("options binding applies only to SELECT elements");
						for (; 0 < b.length;) b.remove(0);
						return {
							controlsDescendantBindings: !0
						}
					},
					update: function(b, c, d) {
						function e() {
							return a.a.Ka(b.options, function(a) {
								return a.selected
							})
						}

						function f(a, b, c) {
							var d = typeof b;
							return "function" == d ? b(a) : "string" == d ? a[b] : c
						}

						function g(c, e) {
							if (A && h) a.j.ha(b, a.a.c(d.get("value")), !0);
							else if (p.length) {
								var f = 0 <= a.a.o(p, a.j.u(e[0]));
								a.a.sc(e[0], f);
								A && !f && a.l.w(a.a.Da, null, [b, "change"])
							}
						}
						var k = b.multiple,
							l = 0 != b.length && k ? b.scrollTop : null,
							m = a.a.c(c()),
							h = d.get("valueAllowUnset") && d.has("value"),
							r = d.get("optionsIncludeDestroyed");
						c = {};
						var q, p = [];
						h || (k ? p = a.a.fb(e(), a.j.u) : 0 <= b.selectedIndex && p.push(a.j.u(b.options[b.selectedIndex])));
						m && ("undefined" == typeof m.length && (m = [m]), q = a.a.Ka(m, function(b) {
							return r || b === n || null === b || !a.a.c(b._destroy)
						}), d.has("optionsCaption") && (m = a.a.c(d.get("optionsCaption")), null !== m && m !== n && q.unshift(L)));
						var A = !1;
						c.beforeRemove = function(a) {
							b.removeChild(a)
						};
						m = g;
						d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (m = function(b, c) {
							g(0, c);
							a.l.w(d.get("optionsAfterRender"), null, [c[0], b !== L ? b : n])
						});
						a.a.Bb(b, q, function(c, e, g) {
							g.length && (p = !h && g[0].selected ? [a.j.u(g[0])] : [], A = !0);
							e = b.ownerDocument.createElement("option");
							c === L ? (a.a.Za(e, d.get("optionsCaption")), a.j.ha(e, n)) : (g = f(c, d.get("optionsValue"), c), a.j.ha(
								e, a.a.c(g)), c = f(c, d.get("optionsText"), g), a.a.Za(e, c));
							return [e]
						}, c, m);
						a.l.w(function() {
							h ? a.j.ha(b, a.a.c(d.get("value")), !0) : (k ? p.length && e().length < p.length : p.length && 0 <= b.selectedIndex ?
								a.j.u(b.options[b.selectedIndex]) !== p[0] : p.length || 0 <= b.selectedIndex) && a.a.Da(b, "change")
						});
						a.a.Nc(b);
						l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l)
					}
				};
				a.d.options.xb = a.a.e.I();
				a.d.selectedOptions = {
					after: ["options", "foreach"],
					init: function(b, c, d) {
						a.a.p(b, "change", function() {
							var e = c(),
								f = [];
							a.a.q(b.getElementsByTagName("option"), function(b) {
								b.selected && f.push(a.j.u(b))
							});
							a.h.Ea(e, d, "selectedOptions", f)
						})
					},
					update: function(b, c) {
						if ("select" != a.a.A(b)) throw Error("values binding applies only to SELECT elements");
						var d = a.a.c(c()),
							e = b.scrollTop;
						d && "number" == typeof d.length && a.a.q(b.getElementsByTagName("option"), function(b) {
							var c = 0 <= a.a.o(d, a.j.u(b));
							b.selected != c && a.a.sc(b, c)
						});
						b.scrollTop = e
					}
				};
				a.h.ea.selectedOptions = !0;
				a.d.style = {
					update: function(b, c) {
						var d = a.a.c(c() || {});
						a.a.D(d, function(c, d) {
							d = a.a.c(d);
							if (null === d || d === n || !1 === d) d = "";
							b.style[c] = d
						})
					}
				};
				a.d.submit = {
					init: function(b, c, d, e, f) {
						if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
						a.a.p(b, "submit", function(a) {
							var d, e = c();
							try {
								d = e.call(f.$data, b)
							} finally {
								!0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
							}
						})
					}
				};
				a.d.text = {
					init: function() {
						return {
							controlsDescendantBindings: !0
						}
					},
					update: function(b, c) {
						a.a.Za(b, c())
					}
				};
				a.f.Z.text = !0;
				(function() {
					if (x && x.navigator) var b = function(a) {
							if (a) return parseFloat(a[1])
						},
						c = x.opera && x.opera.version && parseInt(x.opera.version()),
						d = x.navigator.userAgent,
						e = b(d.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
						f = b(d.match(/Firefox\/([^ ]*)/));
					if (10 > a.a.C) var g = a.a.e.I(),
						k = a.a.e.I(),
						l = function(b) {
							var c = this.activeElement;
							(c = c && a.a.e.get(c, k)) && c(b)
						},
						m = function(b, c) {
							var d = b.ownerDocument;
							a.a.e.get(d, g) || (a.a.e.set(d, g, !0), a.a.p(d, "selectionchange", l));
							a.a.e.set(b, k, c)
						};
					a.d.textInput = {
						init: function(b, d, g) {
							function l(c, d) {
								a.a.p(b, c, d)
							}

							function k() {
								var c = a.a.c(d());
								if (null === c || c === n) c = "";
								v !== n && c === v ? a.a.setTimeout(k, 4) : b.value !== c && (u = c, b.value = c)
							}

							function y() {
								s || (v = b.value, s = a.a.setTimeout(t, 4))
							}

							function t() {
								clearTimeout(s);
								v = s = n;
								var c = b.value;
								u !== c && (u = c, a.h.Ea(d(), g, "textInput", c))
							}
							var u = b.value,
								s, v, x = 9 == a.a.C ? y : t;
							10 > a.a.C ? (l("propertychange", function(a) {
								"value" === a.propertyName && x(a)
							}), 8 == a.a.C && (l("keyup", t), l("keydown", t)), 8 <= a.a.C && (m(b, x), l("dragend", y))) : (l(
									"input", t), 5 > e && "textarea" === a.a.A(b) ? (l("keydown", y), l("paste", y), l("cut", y)) : 11 > c ?
								l("keydown", y) : 4 > f && (l("DOMAutoComplete", t), l("dragdrop", t), l("drop", t)));
							l("change", t);
							a.m(k, null, {
								i: b
							})
						}
					};
					a.h.ea.textInput = !0;
					a.d.textinput = {
						preprocess: function(a, b, c) {
							c("textInput", a)
						}
					}
				})();
				a.d.uniqueName = {
					init: function(b, c) {
						if (c()) {
							var d = "ko_unique_" + ++a.d.uniqueName.Ic;
							a.a.rc(b, d)
						}
					}
				};
				a.d.uniqueName.Ic = 0;
				a.d.value = {
					after: ["options", "foreach"],
					init: function(b, c, d) {
						if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
							var e = ["change"],
								f = d.get("valueUpdate"),
								g = !1,
								k = null;
							f && ("string" == typeof f && (f = [f]), a.a.ra(e, f), e = a.a.Tb(e));
							var l = function() {
								k = null;
								g = !1;
								var e = c(),
									f = a.j.u(b);
								a.h.Ea(e, d, "value", f)
							};
							!a.a.C || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form &&
								"off" == b.form.autocomplete || -1 != a.a.o(e, "propertychange") || (a.a.p(b, "propertychange", function() {
									g = !0
								}), a.a.p(b, "focus", function() {
									g = !1
								}), a.a.p(b, "blur", function() {
									g && l()
								}));
							a.a.q(e, function(c) {
								var d = l;
								a.a.nd(c, "after") && (d = function() {
									k = a.j.u(b);
									a.a.setTimeout(l, 0)
								}, c = c.substring(5));
								a.a.p(b, c, d)
							});
							var m = function() {
								var e = a.a.c(c()),
									f = a.j.u(b);
								if (null !== k && e === k) a.a.setTimeout(m, 0);
								else if (e !== f)
									if ("select" === a.a.A(b)) {
										var g = d.get("valueAllowUnset"),
											f = function() {
												a.j.ha(b, e, g)
											};
										f();
										g || e === a.j.u(b) ? a.a.setTimeout(f, 0) : a.l.w(a.a.Da, null, [b, "change"])
									} else a.j.ha(b, e)
							};
							a.m(m, null, {
								i: b
							})
						} else a.Ja(b, {
							checkedValue: c
						})
					},
					update: function() {}
				};
				a.h.ea.value = !0;
				a.d.visible = {
					update: function(b, c) {
						var d = a.a.c(c()),
							e = "none" != b.style.display;
						d && !e ? b.style.display = "" : !d && e && (b.style.display = "none")
					}
				};
				(function(b) {
					a.d[b] = {
						init: function(c, d, e, f, g) {
							return a.d.event.init.call(this, c, function() {
								var a = {};
								a[b] = d();
								return a
							}, e, f, g)
						}
					}
				})("click");
				a.O = function() {};
				a.O.prototype.renderTemplateSource = function() {
					throw Error("Override renderTemplateSource")
				};
				a.O.prototype.createJavaScriptEvaluatorBlock = function() {
					throw Error("Override createJavaScriptEvaluatorBlock")
				};
				a.O.prototype.makeTemplateSource = function(b, c) {
					if ("string" == typeof b) {
						c = c || u;
						var d = c.getElementById(b);
						if (!d) throw Error("Cannot find template with ID " + b);
						return new a.v.n(d)
					}
					if (1 == b.nodeType || 8 == b.nodeType) return new a.v.qa(b);
					throw Error("Unknown template type: " + b)
				};
				a.O.prototype.renderTemplate = function(a, c, d, e) {
					a = this.makeTemplateSource(a, e);
					return this.renderTemplateSource(a, c, d, e)
				};
				a.O.prototype.isTemplateRewritten = function(a, c) {
					return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten")
				};
				a.O.prototype.rewriteTemplate = function(a, c, d) {
					a = this.makeTemplateSource(a, d);
					c = c(a.text());
					a.text(c);
					a.data("isRewritten", !0)
				};
				a.b("templateEngine", a.O);
				a.Gb = function() {
					function b(b, c, d, k) {
						b = a.h.yb(b);
						for (var l = a.h.ta, m = 0; m < b.length; m++) {
							var h = b[m].key;
							if (l.hasOwnProperty(h)) {
								var r = l[h];
								if ("function" === typeof r) {
									if (h = r(b[m].value)) throw Error(h)
								} else if (!r) throw Error("This template engine does not support the '" + h +
									"' binding within its templates")
							}
						}
						d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.Ua(b, {
							valueAccessors: !0
						}) + " } })()},'" + d.toLowerCase() + "')";
						return k.createJavaScriptEvaluatorBlock(d) + c
					}
					var c =
						/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
						d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
					return {
						Oc: function(b, c, d) {
							c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function(b) {
								return a.Gb.dd(b, c)
							}, d)
						},
						dd: function(a, f) {
							return a.replace(c, function(a, c, d, e, h) {
								return b(h, c, d, f)
							}).replace(d, function(a, c) {
								return b(c, "<!-- ko -->", "#comment", f)
							})
						},
						Ec: function(b, c) {
							return a.M.wb(function(d, k) {
								var l = d.nextSibling;
								l && l.nodeName.toLowerCase() === c && a.Ja(l, b, k)
							})
						}
					}
				}();
				a.b("__tr_ambtns", a.Gb.Ec);
				(function() {
					a.v = {};
					a.v.n = function(b) {
						if (this.n = b) {
							var c = a.a.A(b);
							this.ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ?
								3 : 4
						}
					};
					a.v.n.prototype.text = function() {
						var b = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
						if (0 == arguments.length) return this.n[b];
						var c = arguments[0];
						"innerHTML" === b ? a.a.Cb(this.n, c) : this.n[b] = c
					};
					var b = a.a.e.I() + "_";
					a.v.n.prototype.data = function(c) {
						if (1 === arguments.length) return a.a.e.get(this.n, b + c);
						a.a.e.set(this.n, b + c, arguments[1])
					};
					var c = a.a.e.I();
					a.v.n.prototype.nodes = function() {
						var b = this.n;
						if (0 == arguments.length) return (a.a.e.get(b, c) || {}).jb || (3 === this.ab ? b.content : 4 === this.ab ?
							b : n);
						a.a.e.set(b, c, {
							jb: arguments[0]
						})
					};
					a.v.qa = function(a) {
						this.n = a
					};
					a.v.qa.prototype = new a.v.n;
					a.v.qa.prototype.text = function() {
						if (0 == arguments.length) {
							var b = a.a.e.get(this.n, c) || {};
							b.Hb === n && b.jb && (b.Hb = b.jb.innerHTML);
							return b.Hb
						}
						a.a.e.set(this.n, c, {
							Hb: arguments[0]
						})
					};
					a.b("templateSources", a.v);
					a.b("templateSources.domElement", a.v.n);
					a.b("templateSources.anonymousTemplate", a.v.qa)
				})();
				(function() {
					function b(b, c, d) {
						var e;
						for (c = a.f.nextSibling(c); b && (e = b) !== c;) b = a.f.nextSibling(e), d(e, b)
					}

					function c(c, d) {
						if (c.length) {
							var e = c[0],
								f = c[c.length - 1],
								g = e.parentNode,
								k = a.Q.instance,
								n = k.preprocessNode;
							if (n) {
								b(e, f, function(a, b) {
									var c = a.previousSibling,
										d = n.call(k, a);
									d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c))
								});
								c.length = 0;
								if (!e) return;
								e === f ? c.push(e) : (c.push(e, f), a.a.za(c, g))
							}
							b(e, f, function(b) {
								1 !== b.nodeType && 8 !== b.nodeType || a.Rb(d, b)
							});
							b(e, f, function(b) {
								1 !== b.nodeType && 8 !== b.nodeType || a.M.yc(b, [d])
							});
							a.a.za(c, g)
						}
					}

					function d(a) {
						return a.nodeType ? a : 0 < a.length ? a[0] : null
					}

					function e(b, e, f, k, q) {
						q = q || {};
						var p = (b && d(b) || f || {}).ownerDocument,
							n = q.templateEngine || g;
						a.Gb.Oc(f, n, p);
						f = n.renderTemplate(f, k, q, p);
						if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error(
							"Template engine must return an array of DOM nodes");
						p = !1;
						switch (e) {
							case "replaceChildren":
								a.f.da(b, f);
								p = !0;
								break;
							case "replaceNode":
								a.a.qc(b, f);
								p = !0;
								break;
							case "ignoreTargetNode":
								break;
							default:
								throw Error("Unknown renderMode: " + e)
						}
						p && (c(f, k), q.afterRender && a.l.w(q.afterRender, null, [f, k.$data]));
						return f
					}

					function f(b, c, d) {
						return a.H(b) ? b() : "function" === typeof b ? b(c, d) : b
					}
					var g;
					a.Db = function(b) {
						if (b != n && !(b instanceof a.O)) throw Error("templateEngine must inherit from ko.templateEngine");
						g = b
					};
					a.Ab = function(b, c, h, k, q) {
						h = h || {};
						if ((h.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");
						q = q || "replaceChildren";
						if (k) {
							var p = d(k);
							return a.B(function() {
								var g = c && c instanceof a.U ? c : new a.U(a.a.c(c)),
									n = f(b, g.$data, g),
									g = e(k, q, n, g, h);
								"replaceNode" == q && (k = g, p = d(k))
							}, null, {
								wa: function() {
									return !p || !a.a.nb(p)
								},
								i: p && "replaceNode" == q ? p.parentNode : p
							})
						}
						return a.M.wb(function(d) {
							a.Ab(b, c, h, d, "replaceNode")
						})
					};
					a.kd = function(b, d, g, k, q) {
						function p(a, b) {
							c(b, s);
							g.afterRender && g.afterRender(b, a);
							s = null
						}

						function u(a, c) {
							s = q.createChildContext(a, g.as, function(a) {
								a.$index = c
							});
							var d = f(b, a, s);
							return e(null, "ignoreTargetNode", d, s, g)
						}
						var s;
						return a.B(function() {
							var b = a.a.c(d) || [];
							"undefined" == typeof b.length && (b = [b]);
							b = a.a.Ka(b, function(b) {
								return g.includeDestroyed || b === n || null === b || !a.a.c(b._destroy)
							});
							a.l.w(a.a.Bb, null, [k, b, u, g, p])
						}, null, {
							i: k
						})
					};
					var k = a.a.e.I();
					a.d.template = {
						init: function(b, c) {
							var d = a.a.c(c());
							if ("string" == typeof d || d.name) a.f.xa(b);
							else {
								if ("nodes" in d) {
									if (d = d.nodes || [], a.H(d)) throw Error('The "nodes" option must be a plain, non-observable array.')
								} else d = a.f.childNodes(b);
								d = a.a.jc(d);
								new a.v.qa(b).nodes(d)
							}
							return {
								controlsDescendantBindings: !0
							}
						},
						update: function(b, c, d, e, f) {
							var g = c(),
								s;
							c = a.a.c(g);
							d = !0;
							e = null;
							"string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !
								a.a.c(c.ifnot)), s = a.a.c(c.data));
							"foreach" in c ? e = a.kd(g || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(
								s, c.as) : f, e = a.Ab(g || b, f, c, b)) : a.f.xa(b);
							f = e;
							(s = a.a.e.get(b, k)) && "function" == typeof s.k && s.k();
							a.a.e.set(b, k, f && f.ba() ? f : n)
						}
					};
					a.h.ta.template = function(b) {
						b = a.h.yb(b);
						return 1 == b.length && b[0].unknown || a.h.ad(b, "name") ? null :
							"This template engine does not support anonymous templates nested within its templates"
					};
					a.f.Z.template = !0
				})();
				a.b("setTemplateEngine", a.Db);
				a.b("renderTemplate", a.Ab);
				a.a.dc = function(a, c, d) {
					if (a.length && c.length) {
						var e, f, g, k, l;
						for (e = f = 0;
							(!d || e < d) && (k = a[f]); ++f) {
							for (g = 0; l = c[g]; ++g)
								if (k.value === l.value) {
									k.moved = l.index;
									l.moved = k.index;
									c.splice(g, 1);
									e = g = 0;
									break
								} e += g
						}
					}
				};
				a.a.ib = function() {
					function b(b, d, e, f, g) {
						var k = Math.min,
							l = Math.max,
							m = [],
							h, n = b.length,
							q, p = d.length,
							s = p - n || 1,
							u = n + p + 1,
							t, v, x;
						for (h = 0; h <= n; h++)
							for (v = t, m.push(t = []), x = k(p, h + s), q = l(0, h - 1); q <= x; q++) t[q] = q ? h ? b[h - 1] === d[q -
								1] ? v[q - 1] : k(v[q] || u, t[q - 1] || u) + 1 : q + 1 : h + 1;
						k = [];
						l = [];
						s = [];
						h = n;
						for (q = p; h || q;) p = m[h][q] - 1, q && p === m[h][q - 1] ? l.push(k[k.length] = {
							status: e,
							value: d[--q],
							index: q
						}) : h && p === m[h - 1][q] ? s.push(k[k.length] = {
							status: f,
							value: b[--h],
							index: h
						}) : (--q, --h, g.sparse || k.push({
							status: "retained",
							value: d[q]
						}));
						a.a.dc(s, l, !g.dontLimitMoves && 10 * n);
						return k.reverse()
					}
					return function(a, d, e) {
						e = "boolean" === typeof e ? {
							dontLimitMoves: e
						} : e || {};
						a = a || [];
						d = d || [];
						return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e)
					}
				}();
				a.b("utils.compareArrays", a.a.ib);
				(function() {
					function b(b, c, d, k, l) {
						var m = [],
							h = a.B(function() {
								var h = c(d, l, a.a.za(m, b)) || [];
								0 < m.length && (a.a.qc(m, h), k && a.l.w(k, null, [d, h, l]));
								m.length = 0;
								a.a.ra(m, h)
							}, null, {
								i: b,
								wa: function() {
									return !a.a.Qb(m)
								}
							});
						return {
							ca: m,
							B: h.ba() ? h : n
						}
					}
					var c = a.a.e.I(),
						d = a.a.e.I();
					a.a.Bb = function(e, f, g, k, l) {
						function m(b, c) {
							w = q[c];
							v !== c && (D[b] = w);
							w.qb(v++);
							a.a.za(w.ca, e);
							u.push(w);
							z.push(w)
						}

						function h(b, c) {
							if (b)
								for (var d = 0, e = c.length; d < e; d++) c[d] && a.a.q(c[d].ca, function(a) {
									b(a, d, c[d].ja)
								})
						}
						f = f || [];
						k = k || {};
						var r = a.a.e.get(e, c) === n,
							q = a.a.e.get(e, c) || [],
							p = a.a.fb(q, function(a) {
								return a.ja
							}),
							s = a.a.ib(p, f, k.dontLimitMoves),
							u = [],
							t = 0,
							v = 0,
							x = [],
							z = [];
						f = [];
						for (var D = [], p = [], w, C = 0, B, E; B = s[C]; C++) switch (E = B.moved, B.status) {
							case "deleted":
								E === n && (w = q[t], w.B && (w.B.k(), w.B = n), a.a.za(w.ca, e).length && (k.beforeRemove && (u.push(w),
									z.push(w), w.ja === d ? w = null : f[C] = w), w && x.push.apply(x, w.ca)));
								t++;
								break;
							case "retained":
								m(C, t++);
								break;
							case "added":
								E !== n ? m(C, E) : (w = {
									ja: B.value,
									qb: a.N(v++)
								}, u.push(w), z.push(w), r || (p[C] = w))
						}
						a.a.e.set(e, c, u);
						h(k.beforeMove, D);
						a.a.q(x, k.beforeRemove ? a.$ : a.removeNode);
						for (var C = 0, r = a.f.firstChild(e), F; w = z[C]; C++) {
							w.ca || a.a.extend(w, b(e, g, w.ja, l, w.qb));
							for (t = 0; s = w.ca[t]; r = s.nextSibling, F = s, t++) s !== r && a.f.gc(e, s, F);
							!w.Wc && l && (l(w.ja, w.ca, w.qb), w.Wc = !0)
						}
						h(k.beforeRemove, f);
						for (C = 0; C < f.length; ++C) f[C] && (f[C].ja = d);
						h(k.afterMove, D);
						h(k.afterAdd, p)
					}
				})();
				a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Bb);
				a.W = function() {
					this.allowTemplateRewriting = !1
				};
				a.W.prototype = new a.O;
				a.W.prototype.renderTemplateSource = function(b, c, d, e) {
					if (c = (9 > a.a.C ? 0 : b.nodes) ? b.nodes() : null) return a.a.V(c.cloneNode(!0).childNodes);
					b = b.text();
					return a.a.ma(b, e)
				};
				a.W.sb = new a.W;
				a.Db(a.W.sb);
				a.b("nativeTemplateEngine", a.W);
				(function() {
					a.vb = function() {
						var a = this.$c = function() {
							if (!v || !v.tmpl) return 0;
							try {
								if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
							} catch (a) {}
							return 1
						}();
						this.renderTemplateSource = function(b, e, f, g) {
							g = g || u;
							f = f || {};
							if (2 > a) throw Error(
								"Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
							var k = b.data("precompiled");
							k || (k = b.text() || "", k = v.template(null, "{{ko_with $item.koBindingContext}}" + k + "{{/ko_with}}"),
								b.data("precompiled", k));
							b = [e.$data];
							e = v.extend({
								koBindingContext: e
							}, f.templateOptions);
							e = v.tmpl(k, b, e);
							e.appendTo(g.createElement("div"));
							v.fragments = {};
							return e
						};
						this.createJavaScriptEvaluatorBlock = function(a) {
							return "{{ko_code ((function() { return " + a + " })()) }}"
						};
						this.addTemplate = function(a, b) {
							u.write("<script type='text/html' id='" + a + "'>" + b + "</script>")
						};
						0 < a && (v.tmpl.tag.ko_code = {
							open: "__.push($1 || '');"
						}, v.tmpl.tag.ko_with = {
							open: "with($1) {",
							close: "} "
						})
					};
					a.vb.prototype = new a.O;
					var b = new a.vb;
					0 < b.$c && a.Db(b);
					a.b("jqueryTmplTemplateEngine", a.vb)
				})()
			})
		})()
	})();
	! function(a, b) {
		"use strict";

		function c(a, b) {
			if (!a || "object" != typeof a) throw new Error(
				"When calling ko.track, you must pass an object as the first parameter.");
			var c;
			return i(b) ? (b.deep = b.deep || !1, b.fields = b.fields || Object.getOwnPropertyNames(a), b.lazy = b.lazy || !1,
				h(a, b.fields, b)) : (c = b || Object.getOwnPropertyNames(a), h(a, c, {})), a
		}

		function d(a) {
			return a.name ? a.name : (a.toString().trim().match(A) || [])[1]
		}

		function e(a) {
			return a && "object" == typeof a && "Object" === d(a.constructor)
		}

		function f(a, c, d) {
			var e = w.isObservable(a),
				f = !e && Array.isArray(a),
				g = e ? a : f ? w.observableArray(a) : w.observable(a);
			return d[c] = function() {
				return g
			}, (f || e && "push" in g) && m(w, g), {
				configurable: !0,
				enumerable: !0,
				get: g,
				set: w.isWriteableObservable(g) ? g : b
			}
		}

		function g(a, b, c) {
			function d(a, b) {
				return e ? b ? e(a) : e : Array.isArray(a) ? (e = w.observableArray(a), m(w, e), e) : e = w.observable(a)
			}
			if (w.isObservable(a)) return f(a, b, c);
			var e;
			return c[b] = function() {
				return d(a)
			}, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return d(a)()
				},
				set: function(a) {
					d(a, !0)
				}
			}
		}

		function h(a, b, c) {
			if (b.length) {
				var d = j(a, !0),
					i = {};
				b.forEach(function(b) {
					if (!(b in d) && Object.getOwnPropertyDescriptor(a, b).configurable !== !1) {
						var j = a[b];
						i[b] = (c.lazy ? g : f)(j, b, d), c.deep && e(j) && h(j, Object.keys(j), c)
					}
				}), Object.defineProperties(a, i)
			}
		}

		function i(a) {
			return !!a && "object" == typeof a && a.constructor === Object
		}

		function j(a, b) {
			x || (x = z());
			var c = x.get(a);
			return !c && b && (c = {}, x.set(a, c)), c
		}

		function k(a, b) {
			if (x)
				if (1 === arguments.length) x["delete"](a);
				else {
					var c = j(a, !1);
					c && b.forEach(function(a) {
						delete c[a]
					})
				}
		}

		function l(a, b, d) {
			var e = this,
				f = {
					owner: a,
					deferEvaluation: !0
				};
			if ("function" == typeof d) f.read = d;
			else {
				if ("value" in d) throw new Error(
					'For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');
				if ("function" != typeof d.get) throw new Error(
					'For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".'
				);
				f.read = d.get, f.write = d.set
			}
			return a[b] = e.computed(f), c.call(e, a, [b]), a
		}

		function m(a, b) {
			var c = null;
			a.computed(function() {
				c && (c.dispose(), c = null);
				var d = b();
				d instanceof Array && (c = n(a, b, d))
			})
		}

		function n(a, b, c) {
			var d = o(a, c);
			return d.subscribe(b)
		}

		function o(a, b) {
			y || (y = z());
			var c = y.get(b);
			if (!c) {
				c = new a.subscribable, y.set(b, c);
				var d = {};
				p(b, c, d), q(a, b, c, d)
			}
			return c
		}

		function p(a, b, c) {
			["pop", "push", "reverse", "shift", "sort", "splice", "unshift"].forEach(function(d) {
				var e = a[d];
				a[d] = function() {
					var a = e.apply(this, arguments);
					return c.pause !== !0 && b.notifySubscribers(this), a
				}
			})
		}

		function q(a, b, c, d) {
			["remove", "removeAll", "destroy", "destroyAll", "replace"].forEach(function(e) {
				Object.defineProperty(b, e, {
					enumerable: !1,
					value: function() {
						var f;
						d.pause = !0;
						try {
							f = a.observableArray.fn[e].apply(a.observableArray(b), arguments)
						} finally {
							d.pause = !1
						}
						return c.notifySubscribers(b), f
					}
				})
			})
		}

		function r(a, b) {
			if (!a || "object" != typeof a) return null;
			var c = j(a, !1);
			return c && b in c ? c[b]() : null
		}

		function s(a, b) {
			if (!a || "object" != typeof a) return !1;
			var c = j(a, !1);
			return !!c && b in c
		}

		function t(a, b) {
			var c = r(a, b);
			c && c.valueHasMutated()
		}

		function u(a) {
			a.track = c, a.untrack = k, a.getObservable = r, a.valueHasMutated = t, a.defineProperty = l, a.es5 = {
				getAllObservablesForObject: j,
				notifyWhenPresentOrFutureArrayValuesMutate: m,
				isTracked: s
			}
		}

		function v() {
			if ("object" == typeof exports && "object" == typeof module) {
				w = require("knockout");
				var b = require("../lib/weakmap");
				u(w), z = function() {
					return new b
				}, module.exports = w
			} else "function" == typeof define && define.amd ? define("KnockoutES5", ["knockout"], function(b) {
				return w = b, u(b), z = function() {
					return new a.WeakMap
				}, b
			}) : "ko" in a && (w = a.ko, u(a.ko), z = function() {
				return new a.WeakMap
			})
		}
		var w, x, y, z, A = /^function\s*([^\s(]+)/;
		v()
	}(this), void

	function(a, b, c) {
		function d(a, b, c) {
			return "function" == typeof b && (c = b, b = e(c).replace(/_$/, "")), j(a, b, {
				configurable: !0,
				writable: !0,
				value: c
			})
		}

		function e(a) {
			return "function" != typeof a ? "" : "_name" in a ? a._name : "name" in a ? a.name : k.call(a).match(n)[1]
		}

		function f(a, b) {
			return b._name = a, b
		}

		function g(a) {
			function b(b, e) {
				return e || 2 === arguments.length ? d.set(b, e) : (e = d.get(b), e === c && (e = a(b), d.set(b, e))), e
			}
			var d = new p;
			return a || (a = q), b
		}
		var h = Object.getOwnPropertyNames,
			i = "object" == typeof window ? Object.getOwnPropertyNames(window) : [],
			j = Object.defineProperty,
			k = Function.prototype.toString,
			l = Object.create,
			m = Object.prototype.hasOwnProperty,
			n = /^\n?function\s?(\w*)?_?\(/,
			o = function() {
				function a() {
					var a = g(),
						c = {};
					this.unlock = function(d) {
						var e = n(d);
						if (m.call(e, a)) return e[a](c);
						var f = l(null, b);
						return j(e, a, {
							value: function(a) {
								return a === c ? f : void 0
							}
						}), f
					}
				}
				var b = {
						value: {
							writable: !0,
							value: c
						}
					},
					e = l(null),
					g = function() {
						var a = Math.random().toString(36).slice(2);
						return a in e ? g() : e[a] = a
					},
					k = g(),
					n = function(a) {
						if (m.call(a, k)) return a[k];
						if (!Object.isExtensible(a)) throw new TypeError("Object must be extensible");
						var b = l(null);
						return j(a, k, {
							value: b
						}), b
					};
				return d(Object, f("getOwnPropertyNames", function(a) {
					var b, c = Object(a);
					if (c !== Window.prototype && "toString" in c && "[object Window]" === c.toString()) try {
						b = h(a)
					} catch (d) {
						b = i
					} else b = h(a);
					return m.call(a, k) && b.splice(b.indexOf(k), 1), b
				})), d(a.prototype, f("get", function(a) {
					return this.unlock(a).value
				})), d(a.prototype, f("set", function(a, b) {
					this.unlock(a).value = b
				})), a
			}(),
			p = function(g) {
				function h(b) {
					return this === a || null == this || this === h.prototype ? new h(b) : (p(this, new o), void r(this, b))
				}

				function i(a) {
					n(a);
					var d = q(this).get(a);
					return d === b ? c : d
				}

				function j(a, d) {
					n(a), q(this).set(a, d === c ? b : d)
				}

				function k(a) {
					return n(a), q(this).get(a) !== c
				}

				function l(a) {
					n(a);
					var b = q(this),
						d = b.get(a) !== c;
					return b.set(a, c), d
				}

				function m() {
					return q(this), "[object WeakMap]"
				}
				var n = function(a) {
						if (null == a || "object" != typeof a && "function" != typeof a) throw new TypeError("Invalid WeakMap key")
					},
					p = function(a, b) {
						var c = g.unlock(a);
						if (c.value) throw new TypeError("Object is already a WeakMap");
						c.value = b
					},
					q = function(a) {
						var b = g.unlock(a).value;
						if (!b) throw new TypeError("WeakMap is not generic");
						return b
					},
					r = function(a, b) {
						null !== b && "object" == typeof b && "function" == typeof b.forEach && b.forEach(function(c, d) {
							c instanceof Array && 2 === c.length && j.call(a, b[d][0], b[d][1])
						})
					};
				i._name = "get", j._name = "set", k._name = "has", m._name = "toString";
				var s = ("" + Object).split("Object"),
					t = f("toString", function() {
						return s[0] + e(this) + s[1]
					});
				d(t, t);
				var u = {
					__proto__: []
				}
				instanceof Array ? function(a) {
					a.__proto__ = t
				} : function(a) {
					d(a, t)
				};
				return u(h), [m, i, j, k, l].forEach(function(a) {
					d(h.prototype, a), u(a)
				}), h
			}(new o),
			q = Object.create ? function() {
				return Object.create(null)
			} : function() {
				return {}
			};
		"undefined" != typeof module ? module.exports = p : "undefined" != typeof exports ? exports.WeakMap = p : "WeakMap" in
			a || (a.WeakMap = p), p.createStorage = g, a.WeakMap && (a.WeakMap.createStorage = g)
	}(function() {
		return this
	}());
	! function(e) {
		if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
		else if ("function" == typeof define && define.amd) define("markdown-it-sanitizer", [], e);
		else {
			var t;
			t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ?
				self : this, t.markdownitSanitizer = e()
		}
	}(function() {
		return function e(t, n, r) {
			function o(l, f) {
				if (!n[l]) {
					if (!t[l]) {
						var a = "function" == typeof require && require;
						if (!f && a) return a(l, !0);
						if (i) return i(l, !0);
						var s = new Error("Cannot find module '" + l + "'");
						throw s.code = "MODULE_NOT_FOUND", s
					}
					var u = n[l] = {
						exports: {}
					};
					t[l][0].call(u.exports, function(e) {
						var n = t[l][1][e];
						return o(n ? n : e)
					}, u, u.exports, e, t, n, r)
				}
				return n[l].exports
			}
			for (var i = "function" == typeof require && require, l = 0; l < r.length; l++) o(r[l]);
			return o
		}({
			1: [function(e, t, n) {
				"use strict";
				t.exports = function(e, t) {
					function n(e) {
						var t = l.match(e);
						return t && 1 === t.length && 0 === t[0].index && t[0].lastIndex === e.length ? t[0].url : null
					}

					function r(e) {
						var t = '<a\\shref="([^"<>]*)"(?:\\stitle="([^"<>]*)")?>',
							r = RegExp(t, "i"),
							o = '<img\\s([^<>]*src="[^"<>]*"[^<>]*)\\s?\\/?>',
							i = RegExp(o, "i");
						return e = e.replace(/<[^<>]*>?/gi, function(e) {
							var t, o, l, a, u;
							if (/(^<->|^<-\s|^<3\s)/.test(e)) return e;
							if (t = e.match(i)) {
								var m = t[1];
								if (o = n(m.match(/src="([^"<>]*)"/i)[1]), l = m.match(/alt="([^"<>]*)"/i), l = l && "undefined" !=
									typeof l[1] ? l[1] : "", a = m.match(/title="([^"<>]*)"/i), a = a && "undefined" != typeof a[1] ? a[1] :
									"", o && /^https?:\/\//i.test(o)) return "" !== c ? '<img src="' + o + '" alt="' + l + '" title="' +
									a + '" class="' + c + '">' : '<img src="' + o + '" alt="' + l + '" title="' + a + '">'
							}
							return u = d.indexOf("a"), t = e.match(r), t && (a = "undefined" != typeof t[2] ? t[2] : "", o = n(t[1]),
								o && /^(?:https?:\/\/|ftp:\/\/|mailto:|xmpp:)/i.test(o)) ? (p = !0, h[u] += 1, '<a href="' + o +
								'" title="' + a + '" target="_blank">') : (t = /<\/a>/i.test(e)) ? (p = !0, h[u] -= 1, h[u] < 0 && (g[
								u] = !0), "</a>") : (t = e.match(/<(br|hr)\s?\/?>/i)) ? "<" + t[1].toLowerCase() + ">" : (t = e.match(
									/<(\/?)(b|blockquote|code|em|h[1-6]|li|ol(?: start="\d+")?|p|pre|s|sub|sup|strong|ul)>/i), t && !
								/<\/ol start="\d+"/i.test(e) ? (p = !0, u = d.indexOf(t[2].toLowerCase().split(" ")[0]), "/" === t[1] ?
									h[u] -= 1 : h[u] += 1, h[u] < 0 && (g[u] = !0), "<" + t[1] + t[2].toLowerCase() + ">") : s === !0 ?
								"" : f(e))
						})
					}

					function o(e) {
						var t, n, o;
						for (a = 0; a < d.length; a++) h[a] = 0;
						for (a = 0; a < d.length; a++) g[a] = !1;
						for (p = !1, n = 0; n < e.tokens.length; n++)
							if ("html_block" === e.tokens[n].type && (e.tokens[n].content = r(e.tokens[n].content)), "inline" === e.tokens[
									n].type)
								for (o = e.tokens[n].children, t = 0; t < o.length; t++) "html_inline" === o[t].type && (o[t].content =
									r(o[t].content))
					}

					function i(e) {
						function t(e, t) {
							var n, r;
							return n = "a" === t ? RegExp('<a href="[^"<>]*" title="[^"<>]*" target="_blank">', "g") : "ol" === t ?
								/<ol(?: start="\d+")?>/g : RegExp("<" + t + ">", "g"), r = RegExp("</" + t + ">", "g"), u === !0 ? (e =
									e.replace(n, ""), e = e.replace(r, "")) : (e = e.replace(n, function(e) {
									return f(e)
								}), e = e.replace(r, function(e) {
									return f(e)
								})), e
						}

						function n(e) {
							var n;
							for (n = 0; n < d.length; n++) g[n] === !0 && (e = t(e, d[n]));
							return e
						}
						if (p !== !1) {
							var r, o;
							for (a = 0; a < d.length; a++) 0 !== h[a] && (g[a] = !0);
							for (r = 0; r < e.tokens.length; r++)
								if ("html_block" !== e.tokens[r].type) {
									if ("inline" === e.tokens[r].type)
										for (o = e.tokens[r].children, a = 0; a < o.length; a++) "html_inline" === o[a].type && (o[a].content =
											n(o[a].content))
								} else e.tokens[r].content = n(e.tokens[r].content)
						}
					}
					var l = e.linkify,
						f = e.utils.escapeHtml;
					t = t ? t : {};
					var a, s = "undefined" != typeof t.removeUnknown ? t.removeUnknown : !1,
						u = "undefined" != typeof t.removeUnbalanced ? t.removeUnbalanced : !1,
						c = "undefined" != typeof t.imageClass ? t.imageClass : "",
						p = !1,
						d = ["a", "b", "blockquote", "code", "em", "h1", "h2", "h3", "h4", "h5", "h6", "li", "ol", "p", "pre", "s",
							"sub", "sup", "strong", "ul"
						],
						h = new Array(d.length),
						g = new Array(d.length);
					for (a = 0; a < d.length; a++) h[a] = 0;
					for (a = 0; a < d.length; a++) g[a] = !1;
					e.core.ruler.after("linkify", "sanitize_inline", o), e.core.ruler.after("sanitize_inline",
						"sanitize_balance", i)
				}
			}, {}]
		}, {}, [1])(1)
	});
	! function(e) {
		if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
		else if ("function" == typeof define && define.amd) define("markdown-it", [], e);
		else {
			var r;
			r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ?
				self : this, r.markdownit = e()
		}
	}(function() {
		var e;
		return function r(e, t, n) {
			function s(i, a) {
				if (!t[i]) {
					if (!e[i]) {
						var c = "function" == typeof require && require;
						if (!a && c) return c(i, !0);
						if (o) return o(i, !0);
						var l = new Error("Cannot find module '" + i + "'");
						throw l.code = "MODULE_NOT_FOUND", l
					}
					var u = t[i] = {
						exports: {}
					};
					e[i][0].call(u.exports, function(r) {
						var t = e[i][1][r];
						return s(t ? t : r)
					}, u, u.exports, r, e, t, n)
				}
				return t[i].exports
			}
			for (var o = "function" == typeof require && require, i = 0; i < n.length; i++) s(n[i]);
			return s
		}({
			1: [function(e, r, t) {
				"use strict";
				r.exports = e("entities/maps/entities.json")
			}, {
				"entities/maps/entities.json": 53
			}],
			2: [function(e, r, t) {
				"use strict";
				r.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center",
					"col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure",
					"footer", "form", "frame", "frameset", "h1", "head", "header", "hr", "html", "iframe", "legend", "li",
					"link", "main", "menu", "menuitem", "meta", "nav", "noframes", "ol", "optgroup", "option", "p", "param",
					"pre", "section", "source", "title", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title",
					"tr", "track", "ul"
				]
			}, {}],
			3: [function(e, r, t) {
				"use strict";
				var n = "[a-zA-Z_:][a-zA-Z0-9:._-]*",
					s = "[^\"'=<>`\\x00-\\x20]+",
					o = "'[^']*'",
					i = '"[^"]*"',
					a = "(?:" + s + "|" + o + "|" + i + ")",
					c = "(?:\\s+" + n + "(?:\\s*=\\s*" + a + ")?)",
					l = "<[A-Za-z][A-Za-z0-9\\-]*" + c + "*\\s*\\/?>",
					u = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",
					p = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",
					h = "<[?].*?[?]>",
					f = "<![A-Z]+\\s+[^>]*>",
					d = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
					m = new RegExp("^(?:" + l + "|" + u + "|" + p + "|" + h + "|" + f + "|" + d + ")"),
					_ = new RegExp("^(?:" + l + "|" + u + ")");
				r.exports.HTML_TAG_RE = m, r.exports.HTML_OPEN_CLOSE_TAG_RE = _
			}, {}],
			4: [function(e, r, t) {
				"use strict";

				function n(e) {
					return Object.prototype.toString.call(e)
				}

				function s(e) {
					return "[object String]" === n(e)
				}

				function o(e, r) {
					return x.call(e, r)
				}

				function i(e) {
					var r = Array.prototype.slice.call(arguments, 1);
					return r.forEach(function(r) {
						if (r) {
							if ("object" != typeof r) throw new TypeError(r + "must be object");
							Object.keys(r).forEach(function(t) {
								e[t] = r[t]
							})
						}
					}), e
				}

				function a(e, r, t) {
					return [].concat(e.slice(0, r), t, e.slice(r + 1))
				}

				function c(e) {
					return !(e >= 55296 && e <= 57343) && (!(e >= 64976 && e <= 65007) && (65535 !== (65535 & e) && 65534 !== (
						65535 & e) && (!(e >= 0 && e <= 8) && (11 !== e && (!(e >= 14 && e <= 31) && (!(e >= 127 && e <= 159) &&
						!(e > 1114111)))))))
				}

				function l(e) {
					if (e > 65535) {
						e -= 65536;
						var r = 55296 + (e >> 10),
							t = 56320 + (1023 & e);
						return String.fromCharCode(r, t)
					}
					return String.fromCharCode(e)
				}

				function u(e, r) {
					var t = 0;
					return o(D, r) ? D[r] : 35 === r.charCodeAt(0) && w.test(r) && (t = "x" === r[1].toLowerCase() ? parseInt(r.slice(
						2), 16) : parseInt(r.slice(1), 10), c(t)) ? l(t) : e
				}

				function p(e) {
					return e.indexOf("\\") < 0 ? e : e.replace(y, "$1")
				}

				function h(e) {
					return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(A, function(e, r, t) {
						return r ? r : u(e, t)
					})
				}

				function f(e) {
					return S[e]
				}

				function d(e) {
					return q.test(e) ? e.replace(E, f) : e
				}

				function m(e) {
					return e.replace(F, "\\$&")
				}

				function _(e) {
					switch (e) {
						case 9:
						case 32:
							return !0
					}
					return !1
				}

				function g(e) {
					if (e >= 8192 && e <= 8202) return !0;
					switch (e) {
						case 9:
						case 10:
						case 11:
						case 12:
						case 13:
						case 32:
						case 160:
						case 5760:
						case 8239:
						case 8287:
						case 12288:
							return !0
					}
					return !1
				}

				function k(e) {
					return z.test(e)
				}

				function b(e) {
					switch (e) {
						case 33:
						case 34:
						case 35:
						case 36:
						case 37:
						case 38:
						case 39:
						case 40:
						case 41:
						case 42:
						case 43:
						case 44:
						case 45:
						case 46:
						case 47:
						case 58:
						case 59:
						case 60:
						case 61:
						case 62:
						case 63:
						case 64:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 123:
						case 124:
						case 125:
						case 126:
							return !0;
						default:
							return !1
					}
				}

				function v(e) {
					return e.trim().replace(/\s+/g, " ").toUpperCase()
				}
				var x = Object.prototype.hasOwnProperty,
					y = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,
					C = /&([a-z#][a-z0-9]{1,31});/gi,
					A = new RegExp(y.source + "|" + C.source, "gi"),
					w = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,
					D = e("./entities"),
					q = /[&<>"]/,
					E = /[&<>"]/g,
					S = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;"
					},
					F = /[.?*+^$[\]\\(){}|-]/g,
					z = e("uc.micro/categories/P/regex");
				t.lib = {}, t.lib.mdurl = e("mdurl"), t.lib.ucmicro = e("uc.micro"), t.assign = i, t.isString = s, t.has = o,
					t.unescapeMd = p, t.unescapeAll = h, t.isValidEntityCode = c, t.fromCodePoint = l, t.escapeHtml = d, t.arrayReplaceAt =
					a, t.isSpace = _, t.isWhiteSpace = g, t.isMdAsciiPunct = b, t.isPunctChar = k, t.escapeRE = m, t.normalizeReference =
					v
			}, {
				"./entities": 1,
				mdurl: 59,
				"uc.micro": 65,
				"uc.micro/categories/P/regex": 63
			}],
			5: [function(e, r, t) {
				"use strict";
				t.parseLinkLabel = e("./parse_link_label"), t.parseLinkDestination = e("./parse_link_destination"), t.parseLinkTitle =
					e("./parse_link_title")
			}, {
				"./parse_link_destination": 6,
				"./parse_link_label": 7,
				"./parse_link_title": 8
			}],
			6: [function(e, r, t) {
				"use strict";
				var n = e("../common/utils").isSpace,
					s = e("../common/utils").unescapeAll;
				r.exports = function(e, r, t) {
					var o, i, a = 0,
						c = r,
						l = {
							ok: !1,
							pos: 0,
							lines: 0,
							str: ""
						};
					if (60 === e.charCodeAt(r)) {
						for (r++; r < t;) {
							if (o = e.charCodeAt(r), 10 === o || n(o)) return l;
							if (62 === o) return l.pos = r + 1, l.str = s(e.slice(c + 1, r)), l.ok = !0, l;
							92 === o && r + 1 < t ? r += 2 : r++
						}
						return l
					}
					for (i = 0; r < t && (o = e.charCodeAt(r), 32 !== o) && !(o < 32 || 127 === o);)
						if (92 === o && r + 1 < t) r += 2;
						else {
							if (40 === o && (i++, i > 1)) break;
							if (41 === o && (i--, i < 0)) break;
							r++
						} return c === r ? l : (l.str = s(e.slice(c, r)), l.lines = a, l.pos = r, l.ok = !0, l)
				}
			}, {
				"../common/utils": 4
			}],
			7: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r, t) {
					var n, s, o, i, a = -1,
						c = e.posMax,
						l = e.pos;
					for (e.pos = r + 1, n = 1; e.pos < c;) {
						if (o = e.src.charCodeAt(e.pos), 93 === o && (n--, 0 === n)) {
							s = !0;
							break
						}
						if (i = e.pos, e.md.inline.skipToken(e), 91 === o)
							if (i === e.pos - 1) n++;
							else if (t) return e.pos = l, -1
					}
					return s && (a = e.pos), e.pos = l, a
				}
			}, {}],
			8: [function(e, r, t) {
				"use strict";
				var n = e("../common/utils").unescapeAll;
				r.exports = function(e, r, t) {
					var s, o, i = 0,
						a = r,
						c = {
							ok: !1,
							pos: 0,
							lines: 0,
							str: ""
						};
					if (r >= t) return c;
					if (o = e.charCodeAt(r), 34 !== o && 39 !== o && 40 !== o) return c;
					for (r++, 40 === o && (o = 41); r < t;) {
						if (s = e.charCodeAt(r), s === o) return c.pos = r + 1, c.lines = i, c.str = n(e.slice(a + 1, r)), c.ok = !
							0, c;
						10 === s ? i++ : 92 === s && r + 1 < t && (r++, 10 === e.charCodeAt(r) && i++), r++
					}
					return c
				}
			}, {
				"../common/utils": 4
			}],
			9: [function(e, r, t) {
				"use strict";

				function n(e) {
					var r = e.trim().toLowerCase();
					return !g.test(r) || !!k.test(r)
				}

				function s(e) {
					var r = d.parse(e, !0);
					if (r.hostname && (!r.protocol || b.indexOf(r.protocol) >= 0)) try {
						r.hostname = m.toASCII(r.hostname)
					} catch (t) {}
					return d.encode(d.format(r))
				}

				function o(e) {
					var r = d.parse(e, !0);
					if (r.hostname && (!r.protocol || b.indexOf(r.protocol) >= 0)) try {
						r.hostname = m.toUnicode(r.hostname)
					} catch (t) {}
					return d.decode(d.format(r))
				}

				function i(e, r) {
					return this instanceof i ? (r || a.isString(e) || (r = e || {}, e = "default"), this.inline = new h, this.block =
						new p, this.core = new u, this.renderer = new l, this.linkify = new f, this.validateLink = n, this.normalizeLink =
						s, this.normalizeLinkText = o, this.utils = a, this.helpers = c, this.options = {}, this.configure(e),
						void(r && this.set(r))) : new i(e, r)
				}
				var a = e("./common/utils"),
					c = e("./helpers"),
					l = e("./renderer"),
					u = e("./parser_core"),
					p = e("./parser_block"),
					h = e("./parser_inline"),
					f = e("linkify-it"),
					d = e("mdurl"),
					m = e("punycode"),
					_ = {
						"default": e("./presets/default"),
						zero: e("./presets/zero"),
						commonmark: e("./presets/commonmark")
					},
					g = /^(vbscript|javascript|file|data):/,
					k = /^data:image\/(gif|png|jpeg|webp);/,
					b = ["http:", "https:", "mailto:"];
				i.prototype.set = function(e) {
					return a.assign(this.options, e), this
				}, i.prototype.configure = function(e) {
					var r, t = this;
					if (a.isString(e) && (r = e, e = _[r], !e)) throw new Error('Wrong `markdown-it` preset "' + r +
						'", check name');
					if (!e) throw new Error("Wrong `markdown-it` preset, can't be empty");
					return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(r) {
						e.components[r].rules && t[r].ruler.enableOnly(e.components[r].rules), e.components[r].rules2 && t[r].ruler2
							.enableOnly(e.components[r].rules2)
					}), this
				}, i.prototype.enable = function(e, r) {
					var t = [];
					Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
						t = t.concat(this[r].ruler.enable(e, !0))
					}, this), t = t.concat(this.inline.ruler2.enable(e, !0));
					var n = e.filter(function(e) {
						return t.indexOf(e) < 0
					});
					if (n.length && !r) throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
					return this
				}, i.prototype.disable = function(e, r) {
					var t = [];
					Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
						t = t.concat(this[r].ruler.disable(e, !0))
					}, this), t = t.concat(this.inline.ruler2.disable(e, !0));
					var n = e.filter(function(e) {
						return t.indexOf(e) < 0
					});
					if (n.length && !r) throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
					return this
				}, i.prototype.use = function(e) {
					var r = [this].concat(Array.prototype.slice.call(arguments, 1));
					return e.apply(e, r), this
				}, i.prototype.parse = function(e, r) {
					var t = new this.core.State(e, this, r);
					return this.core.process(t), t.tokens
				}, i.prototype.render = function(e, r) {
					return r = r || {}, this.renderer.render(this.parse(e, r), this.options, r)
				}, i.prototype.parseInline = function(e, r) {
					var t = new this.core.State(e, this, r);
					return t.inlineMode = !0, this.core.process(t), t.tokens
				}, i.prototype.renderInline = function(e, r) {
					return r = r || {}, this.renderer.render(this.parseInline(e, r), this.options, r)
				}, r.exports = i
			}, {
				"./common/utils": 4,
				"./helpers": 5,
				"./parser_block": 10,
				"./parser_core": 11,
				"./parser_inline": 12,
				"./presets/commonmark": 13,
				"./presets/default": 14,
				"./presets/zero": 15,
				"./renderer": 16,
				"linkify-it": 54,
				mdurl: 59,
				punycode: 52
			}],
			10: [function(e, r, t) {
				"use strict";

				function n() {
					this.ruler = new s;
					for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1], {
						alt: (o[e][2] || []).slice()
					})
				}
				var s = e("./ruler"),
					o = [
						["table", e("./rules_block/table"), ["paragraph", "reference"]],
						["code", e("./rules_block/code")],
						["fence", e("./rules_block/fence"), ["paragraph", "reference", "blockquote", "list"]],
						["blockquote", e("./rules_block/blockquote"), ["paragraph", "reference", "list"]],
						["hr", e("./rules_block/hr"), ["paragraph", "reference", "blockquote", "list"]],
						["list", e("./rules_block/list"), ["paragraph", "reference", "blockquote"]],
						["reference", e("./rules_block/reference")],
						["heading", e("./rules_block/heading"), ["paragraph", "reference", "blockquote"]],
						["lheading", e("./rules_block/lheading")],
						["html_block", e("./rules_block/html_block"), ["paragraph", "reference", "blockquote"]],
						["paragraph", e("./rules_block/paragraph")]
					];
				n.prototype.tokenize = function(e, r, t) {
					for (var n, s, o = this.ruler.getRules(""), i = o.length, a = r, c = !1, l = e.md.options.maxNesting; a < t &&
						(e.line = a = e.skipEmptyLines(a), !(a >= t)) && !(e.sCount[a] < e.blkIndent);) {
						if (e.level >= l) {
							e.line = t;
							break
						}
						for (s = 0; s < i && !(n = o[s](e, a, t, !1)); s++);
						if (e.tight = !c, e.isEmpty(e.line - 1) && (c = !0), a = e.line, a < t && e.isEmpty(a)) {
							if (c = !0, a++, a < t && "list" === e.parentType && e.isEmpty(a)) break;
							e.line = a
						}
					}
				}, n.prototype.parse = function(e, r, t, n) {
					var s;
					e && (s = new this.State(e, r, t, n), this.tokenize(s, s.line, s.lineMax))
				}, n.prototype.State = e("./rules_block/state_block"), r.exports = n
			}, {
				"./ruler": 17,
				"./rules_block/blockquote": 18,
				"./rules_block/code": 19,
				"./rules_block/fence": 20,
				"./rules_block/heading": 21,
				"./rules_block/hr": 22,
				"./rules_block/html_block": 23,
				"./rules_block/lheading": 24,
				"./rules_block/list": 25,
				"./rules_block/paragraph": 26,
				"./rules_block/reference": 27,
				"./rules_block/state_block": 28,
				"./rules_block/table": 29
			}],
			11: [function(e, r, t) {
				"use strict";

				function n() {
					this.ruler = new s;
					for (var e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1])
				}
				var s = e("./ruler"),
					o = [
						["normalize", e("./rules_core/normalize")],
						["block", e("./rules_core/block")],
						["inline", e("./rules_core/inline")],
						["linkify", e("./rules_core/linkify")],
						["replacements", e("./rules_core/replacements")],
						["smartquotes", e("./rules_core/smartquotes")]
					];
				n.prototype.process = function(e) {
					var r, t, n;
					for (n = this.ruler.getRules(""), r = 0, t = n.length; r < t; r++) n[r](e)
				}, n.prototype.State = e("./rules_core/state_core"), r.exports = n
			}, {
				"./ruler": 17,
				"./rules_core/block": 30,
				"./rules_core/inline": 31,
				"./rules_core/linkify": 32,
				"./rules_core/normalize": 33,
				"./rules_core/replacements": 34,
				"./rules_core/smartquotes": 35,
				"./rules_core/state_core": 36
			}],
			12: [function(e, r, t) {
				"use strict";

				function n() {
					var e;
					for (this.ruler = new s, e = 0; e < o.length; e++) this.ruler.push(o[e][0], o[e][1]);
					for (this.ruler2 = new s, e = 0; e < i.length; e++) this.ruler2.push(i[e][0], i[e][1])
				}
				var s = e("./ruler"),
					o = [
						["text", e("./rules_inline/text")],
						["newline", e("./rules_inline/newline")],
						["escape", e("./rules_inline/escape")],
						["backticks", e("./rules_inline/backticks")],
						["strikethrough", e("./rules_inline/strikethrough").tokenize],
						["emphasis", e("./rules_inline/emphasis").tokenize],
						["link", e("./rules_inline/link")],
						["image", e("./rules_inline/image")],
						["autolink", e("./rules_inline/autolink")],
						["html_inline", e("./rules_inline/html_inline")],
						["entity", e("./rules_inline/entity")]
					],
					i = [
						["balance_pairs", e("./rules_inline/balance_pairs")],
						["strikethrough", e("./rules_inline/strikethrough").postProcess],
						["emphasis", e("./rules_inline/emphasis").postProcess],
						["text_collapse", e("./rules_inline/text_collapse")]
					];
				n.prototype.skipToken = function(e) {
					var r, t, n = e.pos,
						s = this.ruler.getRules(""),
						o = s.length,
						i = e.md.options.maxNesting,
						a = e.cache;
					if ("undefined" != typeof a[n]) return void(e.pos = a[n]);
					if (e.level < i)
						for (t = 0; t < o && (e.level++, r = s[t](e, !0), e.level--, !r); t++);
					else e.pos = e.posMax;
					r || e.pos++, a[n] = e.pos
				}, n.prototype.tokenize = function(e) {
					for (var r, t, n = this.ruler.getRules(""), s = n.length, o = e.posMax, i = e.md.options.maxNesting; e.pos <
						o;) {
						if (e.level < i)
							for (t = 0; t < s && !(r = n[t](e, !1)); t++);
						if (r) {
							if (e.pos >= o) break
						} else e.pending += e.src[e.pos++]
					}
					e.pending && e.pushPending()
				}, n.prototype.parse = function(e, r, t, n) {
					var s, o, i, a = new this.State(e, r, t, n);
					for (this.tokenize(a), o = this.ruler2.getRules(""), i = o.length, s = 0; s < i; s++) o[s](a)
				}, n.prototype.State = e("./rules_inline/state_inline"), r.exports = n
			}, {
				"./ruler": 17,
				"./rules_inline/autolink": 37,
				"./rules_inline/backticks": 38,
				"./rules_inline/balance_pairs": 39,
				"./rules_inline/emphasis": 40,
				"./rules_inline/entity": 41,
				"./rules_inline/escape": 42,
				"./rules_inline/html_inline": 43,
				"./rules_inline/image": 44,
				"./rules_inline/link": 45,
				"./rules_inline/newline": 46,
				"./rules_inline/state_inline": 47,
				"./rules_inline/strikethrough": 48,
				"./rules_inline/text": 49,
				"./rules_inline/text_collapse": 50
			}],
			13: [function(e, r, t) {
				"use strict";
				r.exports = {
					options: {
						html: !0,
						xhtmlOut: !0,
						breaks: !1,
						langPrefix: "language-",
						linkify: !1,
						typographer: !1,
						quotes: "“”‘’",
						highlight: null,
						maxNesting: 20
					},
					components: {
						core: {
							rules: ["normalize", "block", "inline"]
						},
						block: {
							rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference",
								"paragraph"
							]
						},
						inline: {
							rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link",
								"newline", "text"
							],
							rules2: ["balance_pairs", "emphasis", "text_collapse"]
						}
					}
				}
			}, {}],
			14: [function(e, r, t) {
				"use strict";
				r.exports = {
					options: {
						html: !1,
						xhtmlOut: !1,
						breaks: !1,
						langPrefix: "language-",
						linkify: !1,
						typographer: !1,
						quotes: "“”‘’",
						highlight: null,
						maxNesting: 100
					},
					components: {
						core: {},
						block: {},
						inline: {}
					}
				}
			}, {}],
			15: [function(e, r, t) {
				"use strict";
				r.exports = {
					options: {
						html: !1,
						xhtmlOut: !1,
						breaks: !1,
						langPrefix: "language-",
						linkify: !1,
						typographer: !1,
						quotes: "“”‘’",
						highlight: null,
						maxNesting: 20
					},
					components: {
						core: {
							rules: ["normalize", "block", "inline"]
						},
						block: {
							rules: ["paragraph"]
						},
						inline: {
							rules: ["text"],
							rules2: ["balance_pairs", "text_collapse"]
						}
					}
				}
			}, {}],
			16: [function(e, r, t) {
				"use strict";

				function n() {
					this.rules = s({}, a)
				}
				var s = e("./common/utils").assign,
					o = e("./common/utils").unescapeAll,
					i = e("./common/utils").escapeHtml,
					a = {};
				a.code_inline = function(e, r, t, n, s) {
					var o = e[r],
						a = s.renderAttrs(o);
					return "<code" + (a ? " " + a : "") + ">" + i(e[r].content) + "</code>"
				}, a.code_block = function(e, r, t, n, s) {
					var o = e[r],
						a = s.renderAttrs(o);
					return "<pre" + (a ? " " + a : "") + "><code>" + i(e[r].content) + "</code></pre>\n"
				}, a.fence = function(e, r, t, n, s) {
					var a, c, l, u, p = e[r],
						h = p.info ? o(p.info).trim() : "",
						f = "";
					return h && (f = h.split(/\s+/g)[0]), a = t.highlight ? t.highlight(p.content, f) || i(p.content) : i(p.content),
						0 === a.indexOf("<pre") ? a + "\n" : h ? (c = p.attrIndex("class"), l = p.attrs ? p.attrs.slice() : [], c <
							0 ? l.push(["class", t.langPrefix + f]) : l[c] += " " + t.langPrefix + f, u = {
								attrs: l
							}, "<pre><code" + s.renderAttrs(u) + ">" + a + "</code></pre>\n") : "<pre><code" + s.renderAttrs(p) + ">" +
						a + "</code></pre>\n"
				}, a.image = function(e, r, t, n, s) {
					var o = e[r];
					return o.attrs[o.attrIndex("alt")][1] = s.renderInlineAsText(o.children, t, n), s.renderToken(e, r, t)
				}, a.hardbreak = function(e, r, t) {
					return t.xhtmlOut ? "<br />\n" : "<br>\n"
				}, a.softbreak = function(e, r, t) {
					return t.breaks ? t.xhtmlOut ? "<br />\n" : "<br>\n" : "\n"
				}, a.text = function(e, r) {
					return i(e[r].content)
				}, a.html_block = function(e, r) {
					return e[r].content
				}, a.html_inline = function(e, r) {
					return e[r].content
				}, n.prototype.renderAttrs = function(e) {
					var r, t, n;
					if (!e.attrs) return "";
					for (n = "", r = 0, t = e.attrs.length; r < t; r++) n += " " + i(e.attrs[r][0]) + '="' + i(e.attrs[r][1]) +
						'"';
					return n
				}, n.prototype.renderToken = function(e, r, t) {
					var n, s = "",
						o = !1,
						i = e[r];
					return i.hidden ? "" : (i.block && i.nesting !== -1 && r && e[r - 1].hidden && (s += "\n"), s += (i.nesting ===
							-1 ? "</" : "<") + i.tag, s += this.renderAttrs(i), 0 === i.nesting && t.xhtmlOut && (s += " /"), i.block &&
						(o = !0, 1 === i.nesting && r + 1 < e.length && (n = e[r + 1], "inline" === n.type || n.hidden ? o = !1 :
							n.nesting === -1 && n.tag === i.tag && (o = !1))), s += o ? ">\n" : ">")
				}, n.prototype.renderInline = function(e, r, t) {
					for (var n, s = "", o = this.rules, i = 0, a = e.length; i < a; i++) n = e[i].type, s += "undefined" !=
						typeof o[n] ? o[n](e, i, r, t, this) : this.renderToken(e, i, r);
					return s
				}, n.prototype.renderInlineAsText = function(e, r, t) {
					for (var n = "", s = 0, o = e.length; s < o; s++) "text" === e[s].type ? n += e[s].content : "image" === e[
						s].type && (n += this.renderInlineAsText(e[s].children, r, t));
					return n
				}, n.prototype.render = function(e, r, t) {
					var n, s, o, i = "",
						a = this.rules;
					for (n = 0, s = e.length; n < s; n++) o = e[n].type, i += "inline" === o ? this.renderInline(e[n].children,
						r, t) : "undefined" != typeof a[o] ? a[e[n].type](e, n, r, t, this) : this.renderToken(e, n, r, t);
					return i
				}, r.exports = n
			}, {
				"./common/utils": 4
			}],
			17: [function(e, r, t) {
				"use strict";

				function n() {
					this.__rules__ = [], this.__cache__ = null
				}
				n.prototype.__find__ = function(e) {
					for (var r = 0; r < this.__rules__.length; r++)
						if (this.__rules__[r].name === e) return r;
					return -1
				}, n.prototype.__compile__ = function() {
					var e = this,
						r = [""];
					e.__rules__.forEach(function(e) {
						e.enabled && e.alt.forEach(function(e) {
							r.indexOf(e) < 0 && r.push(e)
						})
					}), e.__cache__ = {}, r.forEach(function(r) {
						e.__cache__[r] = [], e.__rules__.forEach(function(t) {
							t.enabled && (r && t.alt.indexOf(r) < 0 || e.__cache__[r].push(t.fn))
						})
					})
				}, n.prototype.at = function(e, r, t) {
					var n = this.__find__(e),
						s = t || {};
					if (n === -1) throw new Error("Parser rule not found: " + e);
					this.__rules__[n].fn = r, this.__rules__[n].alt = s.alt || [], this.__cache__ = null
				}, n.prototype.before = function(e, r, t, n) {
					var s = this.__find__(e),
						o = n || {};
					if (s === -1) throw new Error("Parser rule not found: " + e);
					this.__rules__.splice(s, 0, {
						name: r,
						enabled: !0,
						fn: t,
						alt: o.alt || []
					}), this.__cache__ = null
				}, n.prototype.after = function(e, r, t, n) {
					var s = this.__find__(e),
						o = n || {};
					if (s === -1) throw new Error("Parser rule not found: " + e);
					this.__rules__.splice(s + 1, 0, {
						name: r,
						enabled: !0,
						fn: t,
						alt: o.alt || []
					}), this.__cache__ = null
				}, n.prototype.push = function(e, r, t) {
					var n = t || {};
					this.__rules__.push({
						name: e,
						enabled: !0,
						fn: r,
						alt: n.alt || []
					}), this.__cache__ = null
				}, n.prototype.enable = function(e, r) {
					Array.isArray(e) || (e = [e]);
					var t = [];
					return e.forEach(function(e) {
						var n = this.__find__(e);
						if (n < 0) {
							if (r) return;
							throw new Error("Rules manager: invalid rule name " + e)
						}
						this.__rules__[n].enabled = !0, t.push(e)
					}, this), this.__cache__ = null, t
				}, n.prototype.enableOnly = function(e, r) {
					Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(e) {
						e.enabled = !1
					}), this.enable(e, r)
				}, n.prototype.disable = function(e, r) {
					Array.isArray(e) || (e = [e]);
					var t = [];
					return e.forEach(function(e) {
						var n = this.__find__(e);
						if (n < 0) {
							if (r) return;
							throw new Error("Rules manager: invalid rule name " + e)
						}
						this.__rules__[n].enabled = !1, t.push(e)
					}, this), this.__cache__ = null, t
				}, n.prototype.getRules = function(e) {
					return null === this.__cache__ && this.__compile__(), this.__cache__[e] || []
				}, r.exports = n
			}, {}],
			18: [function(e, r, t) {
				"use strict";
				var n = e("../common/utils").isSpace;
				r.exports = function(e, r, t, s) {
					var o, i, a, c, l, u, p, h, f, d, m, _, g, k, b, v, x = e.bMarks[r] + e.tShift[r],
						y = e.eMarks[r];
					if (62 !== e.src.charCodeAt(x++)) return !1;
					if (s) return !0;
					for (32 === e.src.charCodeAt(x) && x++, u = e.blkIndent, e.blkIndent = 0, f = d = e.sCount[r] + x - (e.bMarks[
							r] + e.tShift[r]), l = [e.bMarks[r]], e.bMarks[r] = x; x < y && (m = e.src.charCodeAt(x), n(m));) 9 ===
						m ? d += 4 - d % 4 : d++, x++;
					for (i = x >= y, c = [e.sCount[r]], e.sCount[r] = d - f, a = [e.tShift[r]], e.tShift[r] = x - e.bMarks[r],
						_ = e.md.block.ruler.getRules("blockquote"), o = r + 1; o < t && !(e.sCount[o] < u) && (x = e.bMarks[o] +
							e.tShift[o], y = e.eMarks[o], !(x >= y)); o++)
						if (62 !== e.src.charCodeAt(x++)) {
							if (i) break;
							for (v = !1, k = 0, b = _.length; k < b; k++)
								if (_[k](e, o, t, !0)) {
									v = !0;
									break
								} if (v) break;
							l.push(e.bMarks[o]), a.push(e.tShift[o]), c.push(e.sCount[o]), e.sCount[o] = -1
						} else {
							for (32 === e.src.charCodeAt(x) && x++, f = d = e.sCount[o] + x - (e.bMarks[o] + e.tShift[o]), l.push(e.bMarks[
									o]), e.bMarks[o] = x; x < y && (m = e.src.charCodeAt(x), n(m));) 9 === m ? d += 4 - d % 4 : d++, x++;
							i = x >= y, c.push(e.sCount[o]), e.sCount[o] = d - f, a.push(e.tShift[o]), e.tShift[o] = x - e.bMarks[o]
						} for (p = e.parentType, e.parentType = "blockquote", g = e.push("blockquote_open", "blockquote", 1), g.markup =
						">", g.map = h = [r, 0],
						e.md.block.tokenize(e, r, o), g = e.push("blockquote_close", "blockquote", -1), g.markup = ">", e.parentType =
						p, h[1] = e.line, k = 0; k < a.length; k++) e.bMarks[k + r] = l[k], e.tShift[k + r] = a[k], e.sCount[k + r] =
						c[k];
					return e.blkIndent = u, !0
				}
			}, {
				"../common/utils": 4
			}],
			19: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r, t) {
					var n, s, o, i = 0;
					if (e.sCount[r] - e.blkIndent < 4) return !1;
					for (s = n = r + 1; n < t;)
						if (e.isEmpty(n)) {
							if (i++, i >= 2 && "list" === e.parentType) break;
							n++
						} else {
							if (i = 0, !(e.sCount[n] - e.blkIndent >= 4)) break;
							n++, s = n
						} return e.line = s, o = e.push("code_block", "code", 0), o.content = e.getLines(r, s, 4 + e.blkIndent, !0),
						o.map = [r, e.line], !0
				}
			}, {}],
			20: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r, t, n) {
					var s, o, i, a, c, l, u, p = !1,
						h = e.bMarks[r] + e.tShift[r],
						f = e.eMarks[r];
					if (h + 3 > f) return !1;
					if (s = e.src.charCodeAt(h), 126 !== s && 96 !== s) return !1;
					if (c = h, h = e.skipChars(h, s), o = h - c, o < 3) return !1;
					if (u = e.src.slice(c, h), i = e.src.slice(h, f), i.indexOf("`") >= 0) return !1;
					if (n) return !0;
					for (a = r;
						(a++, !(a >= t)) && (h = c = e.bMarks[a] + e.tShift[a], f = e.eMarks[a], !(h < f && e.sCount[a] < e.blkIndent));
					)
						if (e.src.charCodeAt(h) === s && !(e.sCount[a] - e.blkIndent >= 4 || (h = e.skipChars(h, s), h - c < o ||
								(h = e.skipSpaces(h), h < f)))) {
							p = !0;
							break
						} return o = e.sCount[r], e.line = a + (p ? 1 : 0), l = e.push("fence", "code", 0), l.info = i, l.content =
						e.getLines(r + 1, a, o, !0), l.markup = u, l.map = [r, e.line], !0
				}
			}, {}],
			21: [function(e, r, t) {
				"use strict";
				var n = e("../common/utils").isSpace;
				r.exports = function(e, r, t, s) {
					var o, i, a, c, l = e.bMarks[r] + e.tShift[r],
						u = e.eMarks[r];
					if (o = e.src.charCodeAt(l), 35 !== o || l >= u) return !1;
					for (i = 1, o = e.src.charCodeAt(++l); 35 === o && l < u && i <= 6;) i++, o = e.src.charCodeAt(++l);
					return !(i > 6 || l < u && 32 !== o) && (!!s || (u = e.skipSpacesBack(u, l), a = e.skipCharsBack(u, 35, l),
						a > l && n(e.src.charCodeAt(a - 1)) && (u = a), e.line = r + 1, c = e.push("heading_open", "h" + String(
							i), 1), c.markup = "########".slice(0, i), c.map = [r, e.line], c = e.push("inline", "", 0), c.content =
						e.src.slice(l, u).trim(), c.map = [r, e.line], c.children = [], c = e.push("heading_close", "h" + String(
							i), -1), c.markup = "########".slice(0, i), !0))
				}
			}, {
				"../common/utils": 4
			}],
			22: [function(e, r, t) {
				"use strict";
				var n = e("../common/utils").isSpace;
				r.exports = function(e, r, t, s) {
					var o, i, a, c, l = e.bMarks[r] + e.tShift[r],
						u = e.eMarks[r];
					if (o = e.src.charCodeAt(l++), 42 !== o && 45 !== o && 95 !== o) return !1;
					for (i = 1; l < u;) {
						if (a = e.src.charCodeAt(l++), a !== o && !n(a)) return !1;
						a === o && i++
					}
					return !(i < 3) && (!!s || (e.line = r + 1, c = e.push("hr", "hr", 0), c.map = [r, e.line], c.markup =
						Array(i + 1).join(String.fromCharCode(o)), !0))
				}
			}, {
				"../common/utils": 4
			}],
			23: [function(e, r, t) {
				"use strict";
				var n = e("../common/html_blocks"),
					s = e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,
					o = [
						[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
						[/^<!--/, /-->/, !0],
						[/^<\?/, /\?>/, !0],
						[/^<![A-Z]/, />/, !0],
						[/^<!\[CDATA\[/, /\]\]>/, !0],
						[new RegExp("^</?(" + n.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
						[new RegExp(s.source + "\\s*$"), /^$/, !1]
					];
				r.exports = function(e, r, t, n) {
					var s, i, a, c, l = e.bMarks[r] + e.tShift[r],
						u = e.eMarks[r];
					if (!e.md.options.html) return !1;
					if (60 !== e.src.charCodeAt(l)) return !1;
					for (c = e.src.slice(l, u), s = 0; s < o.length && !o[s][0].test(c); s++);
					if (s === o.length) return !1;
					if (n) return o[s][2];
					if (i = r + 1, !o[s][1].test(c))
						for (; i < t && !(e.sCount[i] < e.blkIndent); i++)
							if (l = e.bMarks[i] + e.tShift[i], u = e.eMarks[i], c = e.src.slice(l, u), o[s][1].test(c)) {
								0 !== c.length && i++;
								break
							} return e.line = i, a = e.push("html_block", "", 0), a.map = [r, i], a.content = e.getLines(r, i, e.blkIndent,
						!0), !0
				}
			}, {
				"../common/html_blocks": 2,
				"../common/html_re": 3
			}],
			24: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r, t) {
					for (var n, s, o, i, a, c, l, u, p, h = r + 1, f = e.md.block.ruler.getRules("paragraph"); h < t && !e.isEmpty(
							h); h++)
						if (!(e.sCount[h] - e.blkIndent > 3)) {
							if (e.sCount[h] >= e.blkIndent && (c = e.bMarks[h] + e.tShift[h], l = e.eMarks[h], c < l && (p = e.src.charCodeAt(
									c), (45 === p || 61 === p) && (c = e.skipChars(c, p), c = e.skipSpaces(c), c >= l)))) {
								u = 61 === p ? 1 : 2;
								break
							}
							if (!(e.sCount[h] < 0)) {
								for (s = !1, o = 0, i = f.length; o < i; o++)
									if (f[o](e, h, t, !0)) {
										s = !0;
										break
									} if (s) break
							}
						} return !!u && (n = e.getLines(r, h, e.blkIndent, !1).trim(), e.line = h + 1, a = e.push("heading_open",
							"h" + String(u), 1), a.markup = String.fromCharCode(p), a.map = [r, e.line], a = e.push("inline", "", 0),
						a.content = n, a.map = [r, e.line - 1], a.children = [], a = e.push("heading_close", "h" + String(u), -1),
						a.markup = String.fromCharCode(p), !0)
				}
			}, {}],
			25: [function(e, r, t) {
				"use strict";

				function n(e, r) {
					var t, n, s, o;
					return n = e.bMarks[r] + e.tShift[r], s = e.eMarks[r], t = e.src.charCodeAt(n++), 42 !== t && 45 !== t && 43 !==
						t ? -1 : n < s && (o = e.src.charCodeAt(n), !i(o)) ? -1 : n
				}

				function s(e, r) {
					var t, n = e.bMarks[r] + e.tShift[r],
						s = n,
						o = e.eMarks[r];
					if (s + 1 >= o) return -1;
					if (t = e.src.charCodeAt(s++), t < 48 || t > 57) return -1;
					for (;;) {
						if (s >= o) return -1;
						t = e.src.charCodeAt(s++); {
							if (!(t >= 48 && t <= 57)) {
								if (41 === t || 46 === t) break;
								return -1
							}
							if (s - n >= 10) return -1
						}
					}
					return s < o && (t = e.src.charCodeAt(s), !i(t)) ? -1 : s
				}

				function o(e, r) {
					var t, n, s = e.level + 2;
					for (t = r + 2, n = e.tokens.length - 2; t < n; t++) e.tokens[t].level === s && "paragraph_open" === e.tokens[
						t].type && (e.tokens[t + 2].hidden = !0, e.tokens[t].hidden = !0, t += 2)
				}
				var i = e("../common/utils").isSpace;
				r.exports = function(e, r, t, a) {
					var c, l, u, p, h, f, d, m, _, g, k, b, v, x, y, C, A, w, D, q, E, S, F, z, L, T, R, M, I = !0;
					if ((k = s(e, r)) >= 0) w = !0;
					else {
						if (!((k = n(e, r)) >= 0)) return !1;
						w = !1
					}
					if (A = e.src.charCodeAt(k - 1), a) return !0;
					for (q = e.tokens.length, w ? (g = e.bMarks[r] + e.tShift[r], C = Number(e.src.substr(g, k - g - 1)), L = e
							.push("ordered_list_open", "ol", 1), 1 !== C && (L.attrs = [
								["start", C]
							])) : L = e.push("bullet_list_open", "ul", 1), L.map = S = [r, 0], L.markup = String.fromCharCode(A), c =
						r, E = !1, z = e.md.block.ruler.getRules("list"); c < t;) {
						for (v = k, x = e.eMarks[c], l = u = e.sCount[c] + k - (e.bMarks[r] + e.tShift[r]); v < x && (b = e.src.charCodeAt(
								v), i(b));) 9 === b ? u += 4 - u % 4 : u++, v++;
						if (D = v, y = D >= x ? 1 : u - l, y > 4 && (y = 1), p = l + y, L = e.push("list_item_open", "li", 1), L.markup =
							String.fromCharCode(A), L.map = F = [r, 0], f = e.blkIndent, m = e.tight, h = e.tShift[r], d = e.sCount[r],
							_ = e.parentType, e.blkIndent = p, e.tight = !0, e.parentType = "list", e.tShift[r] = D - e.bMarks[r], e.sCount[
								r] = u, D >= x && e.isEmpty(r + 1) ? e.line = Math.min(e.line + 2, t) : e.md.block.tokenize(e, r, t, !0),
							e.tight && !E || (I = !1), E = e.line - r > 1 && e.isEmpty(e.line - 1), e.blkIndent = f, e.tShift[r] = h,
							e.sCount[r] = d, e.tight = m, e.parentType = _, L = e.push("list_item_close", "li", -1), L.markup =
							String.fromCharCode(A), c = r = e.line, F[1] = c, D = e.bMarks[r], c >= t) break;
						if (e.isEmpty(c)) break;
						if (e.sCount[c] < e.blkIndent) break;
						for (M = !1, T = 0, R = z.length; T < R; T++)
							if (z[T](e, c, t, !0)) {
								M = !0;
								break
							} if (M) break;
						if (w) {
							if (k = s(e, c), k < 0) break
						} else if (k = n(e, c), k < 0) break;
						if (A !== e.src.charCodeAt(k - 1)) break
					}
					return L = w ? e.push("ordered_list_close", "ol", -1) : e.push("bullet_list_close", "ul", -1), L.markup =
						String.fromCharCode(A), S[1] = c, e.line = c, I && o(e, q), !0
				}
			}, {
				"../common/utils": 4
			}],
			26: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r) {
					for (var t, n, s, o, i, a = r + 1, c = e.md.block.ruler.getRules("paragraph"), l = e.lineMax; a < l && !e.isEmpty(
							a); a++)
						if (!(e.sCount[a] - e.blkIndent > 3 || e.sCount[a] < 0)) {
							for (n = !1, s = 0, o = c.length; s < o; s++)
								if (c[s](e, a, l, !0)) {
									n = !0;
									break
								} if (n) break
						} return t = e.getLines(r, a, e.blkIndent, !1).trim(), e.line = a, i = e.push("paragraph_open", "p", 1), i
						.map = [r, e.line], i = e.push("inline", "", 0), i.content = t, i.map = [r, e.line], i.children = [], i =
						e.push("paragraph_close", "p", -1), !0
				}
			}, {}],
			27: [function(e, r, t) {
				"use strict";
				var n = e("../helpers/parse_link_destination"),
					s = e("../helpers/parse_link_title"),
					o = e("../common/utils").normalizeReference,
					i = e("../common/utils").isSpace;
				r.exports = function(e, r, t, a) {
					var c, l, u, p, h, f, d, m, _, g, k, b, v, x, y, C = 0,
						A = e.bMarks[r] + e.tShift[r],
						w = e.eMarks[r],
						D = r + 1;
					if (91 !== e.src.charCodeAt(A)) return !1;
					for (; ++A < w;)
						if (93 === e.src.charCodeAt(A) && 92 !== e.src.charCodeAt(A - 1)) {
							if (A + 1 === w) return !1;
							if (58 !== e.src.charCodeAt(A + 1)) return !1;
							break
						} for (p = e.lineMax, x = e.md.block.ruler.getRules("reference"); D < p && !e.isEmpty(D); D++)
						if (!(e.sCount[D] - e.blkIndent > 3 || e.sCount[D] < 0)) {
							for (v = !1, f = 0, d = x.length; f < d; f++)
								if (x[f](e, D, p, !0)) {
									v = !0;
									break
								} if (v) break
						} for (b = e.getLines(r, D, e.blkIndent, !1).trim(), w = b.length, A = 1; A < w; A++) {
						if (c = b.charCodeAt(A), 91 === c) return !1;
						if (93 === c) {
							_ = A;
							break
						}
						10 === c ? C++ : 92 === c && (A++, A < w && 10 === b.charCodeAt(A) && C++)
					}
					if (_ < 0 || 58 !== b.charCodeAt(_ + 1)) return !1;
					for (A = _ + 2; A < w; A++)
						if (c = b.charCodeAt(A), 10 === c) C++;
						else if (!i(c)) break;
					if (g = n(b, A, w), !g.ok) return !1;
					if (h = e.md.normalizeLink(g.str), !e.md.validateLink(h)) return !1;
					for (A = g.pos, C += g.lines, l = A, u = C, k = A; A < w; A++)
						if (c = b.charCodeAt(A), 10 === c) C++;
						else if (!i(c)) break;
					for (g = s(b, A, w), A < w && k !== A && g.ok ? (y = g.str, A = g.pos, C += g.lines) : (y = "", A = l, C =
							u); A < w && (c = b.charCodeAt(A), i(c));) A++;
					if (A < w && 10 !== b.charCodeAt(A) && y)
						for (y = "", A = l, C = u; A < w && (c = b.charCodeAt(A), i(c));) A++;
					return !(A < w && 10 !== b.charCodeAt(A)) && (!!(m = o(b.slice(1, _))) && (!!a || ("undefined" == typeof e.env
						.references && (e.env.references = {}), "undefined" == typeof e.env.references[m] && (e.env.references[
							m] = {
							title: y,
							href: h
						}), e.line = r + C + 1, !0)))
				}
			}, {
				"../common/utils": 4,
				"../helpers/parse_link_destination": 6,
				"../helpers/parse_link_title": 8
			}],
			28: [function(e, r, t) {
				"use strict";

				function n(e, r, t, n) {
					var s, i, a, c, l, u, p, h;
					for (this.src = e, this.md = r, this.env = t, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [],
						this.sCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType =
						"root", this.ddIndent = -1, this.level = 0, this.result = "", i = this.src, h = !1, a = c = u = p = 0, l =
						i.length; c < l; c++) {
						if (s = i.charCodeAt(c), !h) {
							if (o(s)) {
								u++, 9 === s ? p += 4 - p % 4 : p++;
								continue
							}
							h = !0
						}
						10 !== s && c !== l - 1 || (10 !== s && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(u),
							this.sCount.push(p), h = !1, u = 0, p = 0, a = c + 1)
					}
					this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.lineMax =
						this.bMarks.length - 1
				}
				var s = e("../token"),
					o = e("../common/utils").isSpace;
				n.prototype.push = function(e, r, t) {
					var n = new s(e, r, t);
					return n.block = !0, t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.tokens.push(n),
						n
				}, n.prototype.isEmpty = function(e) {
					return this.bMarks[e] + this.tShift[e] >= this.eMarks[e]
				}, n.prototype.skipEmptyLines = function(e) {
					for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
					return e
				}, n.prototype.skipSpaces = function(e) {
					for (var r, t = this.src.length; e < t && (r = this.src.charCodeAt(e), o(r)); e++);
					return e
				}, n.prototype.skipSpacesBack = function(e, r) {
					if (e <= r) return e;
					for (; e > r;)
						if (!o(this.src.charCodeAt(--e))) return e + 1;
					return e
				}, n.prototype.skipChars = function(e, r) {
					for (var t = this.src.length; e < t && this.src.charCodeAt(e) === r; e++);
					return e
				}, n.prototype.skipCharsBack = function(e, r, t) {
					if (e <= t) return e;
					for (; e > t;)
						if (r !== this.src.charCodeAt(--e)) return e + 1;
					return e
				}, n.prototype.getLines = function(e, r, t, n) {
					var s, i, a, c, l, u, p, h = e;
					if (e >= r) return "";
					for (u = new Array(r - e), s = 0; h < r; h++, s++) {
						for (i = 0, p = c = this.bMarks[h], l = h + 1 < r || n ? this.eMarks[h] + 1 : this.eMarks[h]; c < l && i <
							t;) {
							if (a = this.src.charCodeAt(c), o(a)) 9 === a ? i += 4 - i % 4 : i++;
							else {
								if (!(c - p < this.tShift[h])) break;
								i++
							}
							c++
						}
						u[s] = this.src.slice(c, l)
					}
					return u.join("")
				}, n.prototype.Token = s, r.exports = n
			}, {
				"../common/utils": 4,
				"../token": 51
			}],
			29: [function(e, r, t) {
				"use strict";

				function n(e, r) {
					var t = e.bMarks[r] + e.blkIndent,
						n = e.eMarks[r];
					return e.src.substr(t, n - t)
				}

				function s(e) {
					var r, t = [],
						n = 0,
						s = e.length,
						o = 0,
						i = 0,
						a = !1,
						c = 0;
					for (r = e.charCodeAt(n); n < s;) 96 === r && o % 2 === 0 ? (a = !a, c = n) : 124 !== r || o % 2 !== 0 || a ?
						92 === r ? o++ : o = 0 : (t.push(e.substring(i, n)), i = n + 1), n++, n === s && a && (a = !1, n = c + 1),
						r = e.charCodeAt(n);
					return t.push(e.substring(i)), t
				}
				r.exports = function(e, r, t, o) {
					var i, a, c, l, u, p, h, f, d, m, _, g;
					if (r + 2 > t) return !1;
					if (u = r + 1, e.sCount[u] < e.blkIndent) return !1;
					if (c = e.bMarks[u] + e.tShift[u], c >= e.eMarks[u]) return !1;
					if (i = e.src.charCodeAt(c), 124 !== i && 45 !== i && 58 !== i) return !1;
					if (a = n(e, r + 1), !/^[-:| ]+$/.test(a)) return !1;
					for (p = a.split("|"), d = [], l = 0; l < p.length; l++) {
						if (m = p[l].trim(), !m) {
							if (0 === l || l === p.length - 1) continue;
							return !1
						}
						if (!/^:?-+:?$/.test(m)) return !1;
						58 === m.charCodeAt(m.length - 1) ? d.push(58 === m.charCodeAt(0) ? "center" : "right") : 58 === m.charCodeAt(
							0) ? d.push("left") : d.push("")
					}
					if (a = n(e, r).trim(), a.indexOf("|") === -1) return !1;
					if (p = s(a.replace(/^\||\|$/g, "")), h = p.length, h > d.length) return !1;
					if (o) return !0;
					for (f = e.push("table_open", "table", 1), f.map = _ = [r, 0], f = e.push("thead_open", "thead", 1), f.map = [
							r, r + 1
						], f = e.push("tr_open", "tr", 1), f.map = [r, r + 1], l = 0; l < p.length; l++) f = e.push("th_open",
						"th", 1), f.map = [r, r + 1], d[l] && (f.attrs = [
						["style", "text-align:" + d[l]]
					]), f = e.push("inline", "", 0), f.content = p[l].trim(), f.map = [r, r + 1], f.children = [], f = e.push(
						"th_close", "th", -1);
					for (f = e.push("tr_close", "tr", -1), f = e.push("thead_close", "thead", -1), f = e.push("tbody_open",
							"tbody", 1), f.map = g = [r + 2, 0], u = r + 2; u < t && !(e.sCount[u] < e.blkIndent) && (a = n(e, u), a.indexOf(
							"|") !== -1); u++) {
						for (p = s(a.replace(/^\||\|\s*$/g, "")), f = e.push("tr_open", "tr", 1), l = 0; l < h; l++) f = e.push(
							"td_open", "td", 1), d[l] && (f.attrs = [
							["style", "text-align:" + d[l]]
						]), f = e.push("inline", "", 0), f.content = p[l] ? p[l].trim() : "", f.children = [], f = e.push(
							"td_close", "td", -1);
						f = e.push("tr_close", "tr", -1)
					}
					return f = e.push("tbody_close", "tbody", -1), f = e.push("table_close", "table", -1), _[1] = g[1] = u, e.line =
						u, !0
				}
			}, {}],
			30: [function(e, r, t) {
				"use strict";
				r.exports = function(e) {
					var r;
					e.inlineMode ? (r = new e.Token("inline", "", 0), r.content = e.src, r.map = [0, 1], r.children = [], e.tokens
						.push(r)) : e.md.block.parse(e.src, e.md, e.env, e.tokens)
				}
			}, {}],
			31: [function(e, r, t) {
				"use strict";
				r.exports = function(e) {
					var r, t, n, s = e.tokens;
					for (t = 0, n = s.length; t < n; t++) r = s[t], "inline" === r.type && e.md.inline.parse(r.content, e.md, e
						.env, r.children)
				}
			}, {}],
			32: [function(e, r, t) {
				"use strict";

				function n(e) {
					return /^<a[>\s]/i.test(e)
				}

				function s(e) {
					return /^<\/a\s*>/i.test(e)
				}
				var o = e("../common/utils").arrayReplaceAt;
				r.exports = function(e) {
					var r, t, i, a, c, l, u, p, h, f, d, m, _, g, k, b, v, x = e.tokens;
					if (e.md.options.linkify)
						for (t = 0, i = x.length; t < i; t++)
							if ("inline" === x[t].type && e.md.linkify.pretest(x[t].content))
								for (a = x[t].children, _ = 0, r = a.length - 1; r >= 0; r--)
									if (l = a[r], "link_close" !== l.type) {
										if ("html_inline" === l.type && (n(l.content) && _ > 0 && _--, s(l.content) && _++), !(_ > 0) &&
											"text" === l.type && e.md.linkify.test(l.content)) {
											for (h = l.content, v = e.md.linkify.match(h), u = [], m = l.level, d = 0, p = 0; p < v.length; p++) g =
												v[p].url, k = e.md.normalizeLink(g), e.md.validateLink(k) && (b = v[p].text, b = v[p].schema ?
													"mailto:" !== v[p].schema || /^mailto:/i.test(b) ? e.md.normalizeLinkText(b) : e.md.normalizeLinkText(
														"mailto:" + b).replace(/^mailto:/, "") : e.md.normalizeLinkText("http://" + b).replace(
														/^http:\/\//, ""), f = v[p].index, f > d && (c = new e.Token("text", "", 0), c.content = h.slice(d,
														f), c.level = m, u.push(c)), c = new e.Token("link_open", "a", 1), c.attrs = [
														["href", k]
													], c.level = m++, c.markup = "linkify", c.info = "auto", u.push(c), c = new e.Token("text", "", 0),
													c.content = b, c.level = m, u.push(c), c = new e.Token("link_close", "a", -1), c.level = --m, c.markup =
													"linkify", c.info = "auto", u.push(c), d = v[p].lastIndex);
											d < h.length && (c = new e.Token("text", "", 0), c.content = h.slice(d), c.level = m, u.push(c)), x[t]
												.children = a = o(a, r, u)
										}
									} else
										for (r--; a[r].level !== l.level && "link_open" !== a[r].type;) r--
				}
			}, {
				"../common/utils": 4
			}],
			33: [function(e, r, t) {
				"use strict";
				var n = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g,
					s = /\u0000/g;
				r.exports = function(e) {
					var r;
					r = e.src.replace(n, "\n"), r = r.replace(s, "�"), e.src = r
				}
			}, {}],
			34: [function(e, r, t) {
				"use strict";

				function n(e, r) {
					return l[r.toLowerCase()]
				}

				function s(e) {
					var r, t;
					for (r = e.length - 1; r >= 0; r--) t = e[r], "text" === t.type && (t.content = t.content.replace(c, n))
				}

				function o(e) {
					var r, t;
					for (r = e.length - 1; r >= 0; r--) t = e[r], "text" === t.type && i.test(t.content) && (t.content = t.content
						.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])\u2026/g, "$1..").replace(/([?!]){4,}/g,
							"$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm,
							"$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2"))
				}
				var i = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/,
					a = /\((c|tm|r|p)\)/i,
					c = /\((c|tm|r|p)\)/gi,
					l = {
						c: "©",
						r: "®",
						p: "§",
						tm: "™"
					};
				r.exports = function(e) {
					var r;
					if (e.md.options.typographer)
						for (r = e.tokens.length - 1; r >= 0; r--) "inline" === e.tokens[r].type && (a.test(e.tokens[r].content) &&
							s(e.tokens[r].children), i.test(e.tokens[r].content) && o(e.tokens[r].children))
				}
			}, {}],
			35: [function(e, r, t) {
				"use strict";

				function n(e, r, t) {
					return e.substr(0, r) + t + e.substr(r + 1)
				}

				function s(e, r) {
					var t, s, c, p, h, f, d, m, _, g, k, b, v, x, y, C, A, w, D, q, E;
					for (D = [], t = 0; t < e.length; t++) {
						for (s = e[t], d = e[t].level, A = D.length - 1; A >= 0 && !(D[A].level <= d); A--);
						if (D.length = A + 1, "text" === s.type) {
							c = s.content, h = 0, f = c.length;
							e: for (; h < f && (l.lastIndex = h, p = l.exec(c));) {
								if (y = C = !0, h = p.index + 1, w = "'" === p[0], _ = 32, p.index - 1 >= 0) _ = c.charCodeAt(p.index -
									1);
								else
									for (A = t - 1; A >= 0; A--)
										if ("text" === e[A].type) {
											_ = e[A].content.charCodeAt(e[A].content.length - 1);
											break
										} if (g = 32, h < f) g = c.charCodeAt(h);
								else
									for (A = t + 1; A < e.length; A++)
										if ("text" === e[A].type) {
											g = e[A].content.charCodeAt(0);
											break
										} if (k = a(_) || i(String.fromCharCode(_)), b = a(g) || i(String.fromCharCode(g)), v = o(_), x = o(g),
									x ? y = !1 : b && (v || k || (y = !1)), v ? C = !1 : k && (x || b || (C = !1)), 34 === g && '"' === p[0] &&
									_ >= 48 && _ <= 57 && (C = y = !1), y && C && (y = !1, C = b), y || C) {
									if (C)
										for (A = D.length - 1; A >= 0 && (m = D[A], !(D[A].level < d)); A--)
											if (m.single === w && D[A].level === d) {
												m = D[A], w ? (q = r.md.options.quotes[2], E = r.md.options.quotes[3]) : (q = r.md.options.quotes[0],
														E = r.md.options.quotes[1]), s.content = n(s.content, p.index, E), e[m.token].content = n(e[m.token]
														.content, m.pos, q), h += E.length - 1, m.token === t && (h += q.length - 1), c = s.content, f = c
													.length, D.length = A;
												continue e
											} y ? D.push({
										token: t,
										pos: p.index,
										single: w,
										level: d
									}) : C && w && (s.content = n(s.content, p.index, u))
								} else w && (s.content = n(s.content, p.index, u))
							}
						}
					}
				}
				var o = e("../common/utils").isWhiteSpace,
					i = e("../common/utils").isPunctChar,
					a = e("../common/utils").isMdAsciiPunct,
					c = /['"]/,
					l = /['"]/g,
					u = "’";
				r.exports = function(e) {
					var r;
					if (e.md.options.typographer)
						for (r = e.tokens.length - 1; r >= 0; r--) "inline" === e.tokens[r].type && c.test(e.tokens[r].content) &&
							s(e.tokens[r].children, e)
				}
			}, {
				"../common/utils": 4
			}],
			36: [function(e, r, t) {
				"use strict";

				function n(e, r, t) {
					this.src = e, this.env = t, this.tokens = [], this.inlineMode = !1, this.md = r
				}
				var s = e("../token");
				n.prototype.Token = s, r.exports = n
			}, {
				"../token": 51
			}],
			37: [function(e, r, t) {
				"use strict";
				var n =
					/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,
					s = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/;
				r.exports = function(e, r) {
					var t, o, i, a, c, l, u = e.pos;
					return 60 === e.src.charCodeAt(u) && (t = e.src.slice(u), !(t.indexOf(">") < 0) && (s.test(t) ? (o = t.match(
						s), a = o[0].slice(1, -1), c = e.md.normalizeLink(a), !!e.md.validateLink(c) && (r || (l = e.push(
							"link_open", "a", 1), l.attrs = [
							["href", c]
						], l.markup = "autolink", l.info = "auto", l = e.push("text", "", 0), l.content = e.md.normalizeLinkText(
							a), l = e.push("link_close", "a", -1), l.markup = "autolink", l.info = "auto"), e.pos += o[0].length,
						!0)) : !!n.test(t) && (i = t.match(n), a = i[0].slice(1, -1), c = e.md.normalizeLink("mailto:" + a), !!
						e.md.validateLink(c) && (r || (l = e.push("link_open", "a", 1), l.attrs = [
								["href", c]
							], l.markup = "autolink", l.info = "auto", l = e.push("text", "", 0), l.content = e.md.normalizeLinkText(
								a), l = e.push("link_close", "a", -1), l.markup = "autolink", l.info = "auto"), e.pos += i[0].length,
							!0))))
				}
			}, {}],
			38: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r) {
					var t, n, s, o, i, a, c = e.pos,
						l = e.src.charCodeAt(c);
					if (96 !== l) return !1;
					for (t = c, c++, n = e.posMax; c < n && 96 === e.src.charCodeAt(c);) c++;
					for (s = e.src.slice(t, c), o = i = c;
						(o = e.src.indexOf("`", i)) !== -1;) {
						for (i = o + 1; i < n && 96 === e.src.charCodeAt(i);) i++;
						if (i - o === s.length) return r || (a = e.push("code_inline", "code", 0), a.markup = s, a.content = e.src
							.slice(c, o).replace(/[ \n]+/g, " ").trim()), e.pos = i, !0
					}
					return r || (e.pending += s), e.pos += s.length, !0
				}
			}, {}],
			39: [function(e, r, t) {
				"use strict";
				r.exports = function(e) {
					var r, t, n, s, o = e.delimiters,
						i = e.delimiters.length;
					for (r = 0; r < i; r++)
						if (n = o[r], n.close)
							for (t = r - n.jump - 1; t >= 0;) {
								if (s = o[t], s.open && s.marker === n.marker && s.end < 0 && s.level === n.level) {
									n.jump = r - t, n.open = !1, s.end = r, s.jump = 0;
									break
								}
								t -= s.jump + 1
							}
				}
			}, {}],
			40: [function(e, r, t) {
				"use strict";
				r.exports.tokenize = function(e, r) {
					var t, n, s, o = e.pos,
						i = e.src.charCodeAt(o);
					if (r) return !1;
					if (95 !== i && 42 !== i) return !1;
					for (n = e.scanDelims(e.pos, 42 === i), t = 0; t < n.length; t++) s = e.push("text", "", 0), s.content =
						String.fromCharCode(i), e.delimiters.push({
							marker: i,
							jump: t,
							token: e.tokens.length - 1,
							level: e.level,
							end: -1,
							open: n.can_open,
							close: n.can_close
						});
					return e.pos += n.length, !0
				}, r.exports.postProcess = function(e) {
					var r, t, n, s, o, i, a = e.delimiters,
						c = e.delimiters.length;
					for (r = 0; r < c; r++) t = a[r], 95 !== t.marker && 42 !== t.marker || t.end !== -1 && (n = a[t.end], i =
						r + 1 < c && a[r + 1].end === t.end - 1 && a[r + 1].token === t.token + 1 && a[t.end - 1].token === n.token -
						1 && a[r + 1].marker === t.marker, o = String.fromCharCode(t.marker), s = e.tokens[t.token], s.type = i ?
						"strong_open" : "em_open", s.tag = i ? "strong" : "em", s.nesting = 1, s.markup = i ? o + o : o, s.content =
						"", s = e.tokens[n.token], s.type = i ? "strong_close" : "em_close", s.tag = i ? "strong" : "em", s.nesting = -
						1, s.markup = i ? o + o : o, s.content = "", i && (e.tokens[a[r + 1].token].content = "", e.tokens[a[t.end -
							1].token].content = "", r++))
				}
			}, {}],
			41: [function(e, r, t) {
				"use strict";
				var n = e("../common/entities"),
					s = e("../common/utils").has,
					o = e("../common/utils").isValidEntityCode,
					i = e("../common/utils").fromCodePoint,
					a = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,
					c = /^&([a-z][a-z0-9]{1,31});/i;
				r.exports = function(e, r) {
					var t, l, u, p = e.pos,
						h = e.posMax;
					if (38 !== e.src.charCodeAt(p)) return !1;
					if (p + 1 < h)
						if (t = e.src.charCodeAt(p + 1), 35 === t) {
							if (u = e.src.slice(p).match(a)) return r || (l = "x" === u[1][0].toLowerCase() ? parseInt(u[1].slice(1),
								16) : parseInt(u[1], 10), e.pending += i(o(l) ? l : 65533)), e.pos += u[0].length, !0
						} else if (u = e.src.slice(p).match(c), u && s(n, u[1])) return r || (e.pending += n[u[1]]), e.pos += u[0]
						.length, !0;
					return r || (e.pending += "&"), e.pos++, !0
				}
			}, {
				"../common/entities": 1,
				"../common/utils": 4
			}],
			42: [function(e, r, t) {
				"use strict";
				for (var n = e("../common/utils").isSpace, s = [], o = 0; o < 256; o++) s.push(0);
				"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
					s[e.charCodeAt(0)] = 1
				}), r.exports = function(e, r) {
					var t, o = e.pos,
						i = e.posMax;
					if (92 !== e.src.charCodeAt(o)) return !1;
					if (o++, o < i) {
						if (t = e.src.charCodeAt(o), t < 256 && 0 !== s[t]) return r || (e.pending += e.src[o]), e.pos += 2, !0;
						if (10 === t) {
							for (r || e.push("hardbreak", "br", 0), o++; o < i && (t = e.src.charCodeAt(o), n(t));) o++;
							return e.pos = o, !0
						}
					}
					return r || (e.pending += "\\"), e.pos++, !0
				}
			}, {
				"../common/utils": 4
			}],
			43: [function(e, r, t) {
				"use strict";

				function n(e) {
					var r = 32 | e;
					return r >= 97 && r <= 122
				}
				var s = e("../common/html_re").HTML_TAG_RE;
				r.exports = function(e, r) {
					var t, o, i, a, c = e.pos;
					return !!e.md.options.html && (i = e.posMax, !(60 !== e.src.charCodeAt(c) || c + 2 >= i) && (t = e.src.charCodeAt(
						c + 1), !(33 !== t && 63 !== t && 47 !== t && !n(t)) && (!!(o = e.src.slice(c).match(s)) && (r || (a =
						e.push("html_inline", "", 0), a.content = e.src.slice(c, c + o[0].length)), e.pos += o[0].length, !0))))
				}
			}, {
				"../common/html_re": 3
			}],
			44: [function(e, r, t) {
				"use strict";
				var n = e("../helpers/parse_link_label"),
					s = e("../helpers/parse_link_destination"),
					o = e("../helpers/parse_link_title"),
					i = e("../common/utils").normalizeReference,
					a = e("../common/utils").isSpace;
				r.exports = function(e, r) {
					var t, c, l, u, p, h, f, d, m, _, g, k, b, v = "",
						x = e.pos,
						y = e.posMax;
					if (33 !== e.src.charCodeAt(e.pos)) return !1;
					if (91 !== e.src.charCodeAt(e.pos + 1)) return !1;
					if (h = e.pos + 2, p = n(e, e.pos + 1, !1), p < 0) return !1;
					if (f = p + 1, f < y && 40 === e.src.charCodeAt(f)) {
						for (f++; f < y && (c = e.src.charCodeAt(f), a(c) || 10 === c); f++);
						if (f >= y) return !1;
						for (b = f, m = s(e.src, f, e.posMax), m.ok && (v = e.md.normalizeLink(m.str), e.md.validateLink(v) ? f =
								m.pos : v = ""), b = f; f < y && (c = e.src.charCodeAt(f), a(c) || 10 === c); f++);
						if (m = o(e.src, f, e.posMax), f < y && b !== f && m.ok)
							for (_ = m.str, f = m.pos; f < y && (c = e.src.charCodeAt(f), a(c) || 10 === c); f++);
						else _ = "";
						if (f >= y || 41 !== e.src.charCodeAt(f)) return e.pos = x, !1;
						f++
					} else {
						if ("undefined" == typeof e.env.references) return !1;
						if (f < y && 91 === e.src.charCodeAt(f) ? (b = f + 1, f = n(e, f), f >= 0 ? u = e.src.slice(b, f++) : f =
								p + 1) : f = p + 1, u || (u = e.src.slice(h, p)), d = e.env.references[i(u)], !d) return e.pos = x, !1;
						v = d.href, _ = d.title
					}
					return r || (l = e.src.slice(h, p), e.md.inline.parse(l, e.md, e.env, k = []), g = e.push("image", "img", 0),
						g.attrs = t = [
							["src", v],
							["alt", ""]
						], g.children = k, g.content = l, _ && t.push(["title", _])), e.pos = f, e.posMax = y, !0
				}
			}, {
				"../common/utils": 4,
				"../helpers/parse_link_destination": 6,
				"../helpers/parse_link_label": 7,
				"../helpers/parse_link_title": 8
			}],
			45: [function(e, r, t) {
				"use strict";
				var n = e("../helpers/parse_link_label"),
					s = e("../helpers/parse_link_destination"),
					o = e("../helpers/parse_link_title"),
					i = e("../common/utils").normalizeReference,
					a = e("../common/utils").isSpace;
				r.exports = function(e, r) {
					var t, c, l, u, p, h, f, d, m, _, g = "",
						k = e.pos,
						b = e.posMax,
						v = e.pos;
					if (91 !== e.src.charCodeAt(e.pos)) return !1;
					if (p = e.pos + 1, u = n(e, e.pos, !0), u < 0) return !1;
					if (h = u + 1, h < b && 40 === e.src.charCodeAt(h)) {
						for (h++; h < b && (c = e.src.charCodeAt(h), a(c) || 10 === c); h++);
						if (h >= b) return !1;
						for (v = h, f = s(e.src, h, e.posMax), f.ok && (g = e.md.normalizeLink(f.str), e.md.validateLink(g) ? h =
								f.pos : g = ""), v = h; h < b && (c = e.src.charCodeAt(h), a(c) || 10 === c); h++);
						if (f = o(e.src, h, e.posMax), h < b && v !== h && f.ok)
							for (m = f.str, h = f.pos; h < b && (c = e.src.charCodeAt(h), a(c) || 10 === c); h++);
						else m = "";
						if (h >= b || 41 !== e.src.charCodeAt(h)) return e.pos = k, !1;
						h++
					} else {
						if ("undefined" == typeof e.env.references) return !1;
						if (h < b && 91 === e.src.charCodeAt(h) ? (v = h + 1, h = n(e, h), h >= 0 ? l = e.src.slice(v, h++) : h =
								u + 1) : h = u + 1, l || (l = e.src.slice(p, u)), d = e.env.references[i(l)], !d) return e.pos = k, !1;
						g = d.href, m = d.title
					}
					return r || (e.pos = p, e.posMax = u, _ = e.push("link_open", "a", 1), _.attrs = t = [
							["href", g]
						], m && t.push(["title", m]), e.md.inline.tokenize(e), _ = e.push("link_close", "a", -1)), e.pos = h, e.posMax =
						b, !0
				}
			}, {
				"../common/utils": 4,
				"../helpers/parse_link_destination": 6,
				"../helpers/parse_link_label": 7,
				"../helpers/parse_link_title": 8
			}],
			46: [function(e, r, t) {
				"use strict";
				r.exports = function(e, r) {
					var t, n, s = e.pos;
					if (10 !== e.src.charCodeAt(s)) return !1;
					for (t = e.pending.length - 1, n = e.posMax, r || (t >= 0 && 32 === e.pending.charCodeAt(t) ? t >= 1 && 32 ===
							e.pending.charCodeAt(t - 1) ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) :
							(e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), s++; s <
						n && 32 === e.src.charCodeAt(s);) s++;
					return e.pos = s, !0
				}
			}, {}],
			47: [function(e, r, t) {
				"use strict";

				function n(e, r, t, n) {
					this.src = e, this.env = t, this.md = r, this.tokens = n, this.pos = 0, this.posMax = this.src.length, this.level =
						0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = []
				}
				var s = e("../token"),
					o = e("../common/utils").isWhiteSpace,
					i = e("../common/utils").isPunctChar,
					a = e("../common/utils").isMdAsciiPunct;
				n.prototype.pushPending = function() {
					var e = new s("text", "", 0);
					return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e
				}, n.prototype.push = function(e, r, t) {
					this.pending && this.pushPending();
					var n = new s(e, r, t);
					return t < 0 && this.level--, n.level = this.level, t > 0 && this.level++, this.pendingLevel = this.level,
						this.tokens.push(n), n
				}, n.prototype.scanDelims = function(e, r) {
					var t, n, s, c, l, u, p, h, f, d = e,
						m = !0,
						_ = !0,
						g = this.posMax,
						k = this.src.charCodeAt(e);
					for (t = e > 0 ? this.src.charCodeAt(e - 1) : 32; d < g && this.src.charCodeAt(d) === k;) d++;
					return s = d - e, n = d < g ? this.src.charCodeAt(d) : 32, p = a(t) || i(String.fromCharCode(t)), f = a(n) ||
						i(String.fromCharCode(n)), u = o(t), h = o(n), h ? m = !1 : f && (u || p || (m = !1)), u ? _ = !1 : p && (
							h || f || (_ = !1)), r ? (c = m, l = _) : (c = m && (!_ || p), l = _ && (!m || f)), {
							can_open: c,
							can_close: l,
							length: s
						}
				}, n.prototype.Token = s, r.exports = n
			}, {
				"../common/utils": 4,
				"../token": 51
			}],
			48: [function(e, r, t) {
				"use strict";
				r.exports.tokenize = function(e, r) {
					var t, n, s, o, i, a = e.pos,
						c = e.src.charCodeAt(a);
					if (r) return !1;
					if (126 !== c) return !1;
					if (n = e.scanDelims(e.pos, !0), o = n.length, i = String.fromCharCode(c), o < 2) return !1;
					for (o % 2 && (s = e.push("text", "", 0), s.content = i, o--), t = 0; t < o; t += 2) s = e.push("text", "",
						0), s.content = i + i, e.delimiters.push({
						marker: c,
						jump: t,
						token: e.tokens.length - 1,
						level: e.level,
						end: -1,
						open: n.can_open,
						close: n.can_close
					});
					return e.pos += n.length, !0
				}, r.exports.postProcess = function(e) {
					var r, t, n, s, o, i = [],
						a = e.delimiters,
						c = e.delimiters.length;
					for (r = 0; r < c; r++) n = a[r], 126 === n.marker && n.end !== -1 && (s = a[n.end], o = e.tokens[n.token],
						o.type = "s_open", o.tag = "s", o.nesting = 1, o.markup = "~~", o.content = "", o = e.tokens[s.token], o.type =
						"s_close", o.tag = "s", o.nesting = -1, o.markup = "~~", o.content = "", "text" === e.tokens[s.token - 1]
						.type && "~" === e.tokens[s.token - 1].content && i.push(s.token - 1));
					for (; i.length;) {
						for (r = i.pop(), t = r + 1; t < e.tokens.length && "s_close" === e.tokens[t].type;) t++;
						t--, r !== t && (o = e.tokens[t], e.tokens[t] = e.tokens[r], e.tokens[r] = o)
					}
				}
			}, {}],
			49: [function(e, r, t) {
				"use strict";

				function n(e) {
					switch (e) {
						case 10:
						case 33:
						case 35:
						case 36:
						case 37:
						case 38:
						case 42:
						case 43:
						case 45:
						case 58:
						case 60:
						case 61:
						case 62:
						case 64:
						case 91:
						case 92:
						case 93:
						case 94:
						case 95:
						case 96:
						case 123:
						case 125:
						case 126:
							return !0;
						default:
							return !1
					}
				}
				r.exports = function(e, r) {
					for (var t = e.pos; t < e.posMax && !n(e.src.charCodeAt(t));) t++;
					return t !== e.pos && (r || (e.pending += e.src.slice(e.pos, t)), e.pos = t, !0)
				}
			}, {}],
			50: [function(e, r, t) {
				"use strict";
				r.exports = function(e) {
					var r, t, n = 0,
						s = e.tokens,
						o = e.tokens.length;
					for (r = t = 0; r < o; r++) n += s[r].nesting, s[r].level = n, "text" === s[r].type && r + 1 < o && "text" ===
						s[r + 1].type ? s[r + 1].content = s[r].content + s[r + 1].content : (r !== t && (s[t] = s[r]), t++);
					r !== t && (s.length = t)
				}
			}, {}],
			51: [function(e, r, t) {
				"use strict";

				function n(e, r, t) {
					this.type = e, this.tag = r, this.attrs = null, this.map = null, this.nesting = t, this.level = 0, this.children =
						null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !
						1
				}
				n.prototype.attrIndex = function(e) {
					var r, t, n;
					if (!this.attrs) return -1;
					for (r = this.attrs, t = 0, n = r.length; t < n; t++)
						if (r[t][0] === e) return t;
					return -1
				}, n.prototype.attrPush = function(e) {
					this.attrs ? this.attrs.push(e) : this.attrs = [e]
				}, n.prototype.attrSet = function(e, r) {
					var t = this.attrIndex(e),
						n = [e, r];
					t < 0 ? this.attrPush(n) : this.attrs[t] = n
				}, n.prototype.attrGet = function(e) {
					var r = this.attrIndex(e),
						t = null;
					return r >= 0 && (t = this.attrs[r][1]), t
				}, n.prototype.attrJoin = function(e, r) {
					var t = this.attrIndex(e);
					t < 0 ? this.attrPush([e, r]) : this.attrs[t][1] = this.attrs[t][1] + " " + r
				}, r.exports = n
			}, {}],
			52: [function(r, t, n) {
				(function(r) {
					! function(s) {
						function o(e) {
							throw new RangeError(R[e])
						}

						function i(e, r) {
							for (var t = e.length, n = []; t--;) n[t] = r(e[t]);
							return n
						}

						function a(e, r) {
							var t = e.split("@"),
								n = "";
							t.length > 1 && (n = t[0] + "@", e = t[1]), e = e.replace(T, ".");
							var s = e.split("."),
								o = i(s, r).join(".");
							return n + o
						}

						function c(e) {
							for (var r, t, n = [], s = 0, o = e.length; s < o;) r = e.charCodeAt(s++), r >= 55296 && r <= 56319 && s <
								o ? (t = e.charCodeAt(s++), 56320 == (64512 & t) ? n.push(((1023 & r) << 10) + (1023 & t) + 65536) : (n.push(
									r), s--)) : n.push(r);
							return n
						}

						function l(e) {
							return i(e, function(e) {
								var r = "";
								return e > 65535 && (e -= 65536, r += B(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), r += B(e)
							}).join("")
						}

						function u(e) {
							return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : C
						}

						function p(e, r) {
							return e + 22 + 75 * (e < 26) - ((0 != r) << 5)
						}

						function h(e, r, t) {
							var n = 0;
							for (e = t ? I(e / q) : e >> 1, e += I(e / r); e > M * w >> 1; n += C) e = I(e / M);
							return I(n + (M + 1) * e / (e + D))
						}

						function f(e) {
							var r, t, n, s, i, a, c, p, f, d, m = [],
								_ = e.length,
								g = 0,
								k = S,
								b = E;
							for (t = e.lastIndexOf(F), t < 0 && (t = 0), n = 0; n < t; ++n) e.charCodeAt(n) >= 128 && o("not-basic"),
								m.push(e.charCodeAt(n));
							for (s = t > 0 ? t + 1 : 0; s < _;) {
								for (i = g, a = 1, c = C; s >= _ && o("invalid-input"), p = u(e.charCodeAt(s++)), (p >= C || p > I((y -
										g) / a)) && o("overflow"), g += p * a, f = c <= b ? A : c >= b + w ? w : c - b, !(p < f); c += C) d =
									C - f, a > I(y / d) && o("overflow"), a *= d;
								r = m.length + 1, b = h(g - i, r, 0 == i), I(g / r) > y - k && o("overflow"), k += I(g / r), g %= r, m.splice(
									g++, 0, k)
							}
							return l(m)
						}

						function d(e) {
							var r, t, n, s, i, a, l, u, f, d, m, _, g, k, b, v = [];
							for (e = c(e), _ = e.length, r = S, t = 0, i = E, a = 0; a < _; ++a) m = e[a], m < 128 && v.push(B(m));
							for (n = s = v.length, s && v.push(F); n < _;) {
								for (l = y, a = 0; a < _; ++a) m = e[a], m >= r && m < l && (l = m);
								for (g = n + 1, l - r > I((y - t) / g) && o("overflow"), t += (l - r) * g, r = l, a = 0; a < _; ++a)
									if (m = e[a], m < r && ++t > y && o("overflow"), m == r) {
										for (u = t, f = C; d = f <= i ? A : f >= i + w ? w : f - i, !(u < d); f += C) b = u - d, k = C - d, v.push(
											B(p(d + b % k, 0))), u = I(b / k);
										v.push(B(p(u, 0))), i = h(t, g, n == s), t = 0, ++n
									}++ t, ++r
							}
							return v.join("")
						}

						function m(e) {
							return a(e, function(e) {
								return z.test(e) ? f(e.slice(4).toLowerCase()) : e
							})
						}

						function _(e) {
							return a(e, function(e) {
								return L.test(e) ? "xn--" + d(e) : e
							})
						}
						var g = "object" == typeof n && n && !n.nodeType && n,
							k = "object" == typeof t && t && !t.nodeType && t,
							b = "object" == typeof r && r;
						b.global !== b && b.window !== b && b.self !== b || (s = b);
						var v, x, y = 2147483647,
							C = 36,
							A = 1,
							w = 26,
							D = 38,
							q = 700,
							E = 72,
							S = 128,
							F = "-",
							z = /^xn--/,
							L = /[^\x20-\x7E]/,
							T = /[\x2E\u3002\uFF0E\uFF61]/g,
							R = {
								overflow: "Overflow: input needs wider integers to process",
								"not-basic": "Illegal input >= 0x80 (not a basic code point)",
								"invalid-input": "Invalid input"
							},
							M = C - A,
							I = Math.floor,
							B = String.fromCharCode;
						if (v = {
								version: "1.4.1",
								ucs2: {
									decode: c,
									encode: l
								},
								decode: f,
								encode: d,
								toASCII: _,
								toUnicode: m
							}, "function" == typeof e && "object" == typeof e.amd && e.amd) e("punycode", function() {
							return v
						});
						else if (g && k)
							if (t.exports == g) k.exports = v;
							else
								for (x in v) v.hasOwnProperty(x) && (g[x] = v[x]);
						else s.punycode = v
					}(this)
				}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" !=
					typeof window ? window : {})
			}, {}],
			53: [function(e, r, t) {
				r.exports = {
					Aacute: "Á",
					aacute: "á",
					Abreve: "Ă",
					abreve: "ă",
					ac: "∾",
					acd: "∿",
					acE: "∾̳",
					Acirc: "Â",
					acirc: "â",
					acute: "´",
					Acy: "А",
					acy: "а",
					AElig: "Æ",
					aelig: "æ",
					af: "⁡",
					Afr: "𝔄",
					afr: "𝔞",
					Agrave: "À",
					agrave: "à",
					alefsym: "ℵ",
					aleph: "ℵ",
					Alpha: "Α",
					alpha: "α",
					Amacr: "Ā",
					amacr: "ā",
					amalg: "⨿",
					amp: "&",
					AMP: "&",
					andand: "⩕",
					And: "⩓",
					and: "∧",
					andd: "⩜",
					andslope: "⩘",
					andv: "⩚",
					ang: "∠",
					ange: "⦤",
					angle: "∠",
					angmsdaa: "⦨",
					angmsdab: "⦩",
					angmsdac: "⦪",
					angmsdad: "⦫",
					angmsdae: "⦬",
					angmsdaf: "⦭",
					angmsdag: "⦮",
					angmsdah: "⦯",
					angmsd: "∡",
					angrt: "∟",
					angrtvb: "⊾",
					angrtvbd: "⦝",
					angsph: "∢",
					angst: "Å",
					angzarr: "⍼",
					Aogon: "Ą",
					aogon: "ą",
					Aopf: "𝔸",
					aopf: "𝕒",
					apacir: "⩯",
					ap: "≈",
					apE: "⩰",
					ape: "≊",
					apid: "≋",
					apos: "'",
					ApplyFunction: "⁡",
					approx: "≈",
					approxeq: "≊",
					Aring: "Å",
					aring: "å",
					Ascr: "𝒜",
					ascr: "𝒶",
					Assign: "≔",
					ast: "*",
					asymp: "≈",
					asympeq: "≍",
					Atilde: "Ã",
					atilde: "ã",
					Auml: "Ä",
					auml: "ä",
					awconint: "∳",
					awint: "⨑",
					backcong: "≌",
					backepsilon: "϶",
					backprime: "‵",
					backsim: "∽",
					backsimeq: "⋍",
					Backslash: "∖",
					Barv: "⫧",
					barvee: "⊽",
					barwed: "⌅",
					Barwed: "⌆",
					barwedge: "⌅",
					bbrk: "⎵",
					bbrktbrk: "⎶",
					bcong: "≌",
					Bcy: "Б",
					bcy: "б",
					bdquo: "„",
					becaus: "∵",
					because: "∵",
					Because: "∵",
					bemptyv: "⦰",
					bepsi: "϶",
					bernou: "ℬ",
					Bernoullis: "ℬ",
					Beta: "Β",
					beta: "β",
					beth: "ℶ",
					between: "≬",
					Bfr: "𝔅",
					bfr: "𝔟",
					bigcap: "⋂",
					bigcirc: "◯",
					bigcup: "⋃",
					bigodot: "⨀",
					bigoplus: "⨁",
					bigotimes: "⨂",
					bigsqcup: "⨆",
					bigstar: "★",
					bigtriangledown: "▽",
					bigtriangleup: "△",
					biguplus: "⨄",
					bigvee: "⋁",
					bigwedge: "⋀",
					bkarow: "⤍",
					blacklozenge: "⧫",
					blacksquare: "▪",
					blacktriangle: "▴",
					blacktriangledown: "▾",
					blacktriangleleft: "◂",
					blacktriangleright: "▸",
					blank: "␣",
					blk12: "▒",
					blk14: "░",
					blk34: "▓",
					block: "█",
					bne: "=⃥",
					bnequiv: "≡⃥",
					bNot: "⫭",
					bnot: "⌐",
					Bopf: "𝔹",
					bopf: "𝕓",
					bot: "⊥",
					bottom: "⊥",
					bowtie: "⋈",
					boxbox: "⧉",
					boxdl: "┐",
					boxdL: "╕",
					boxDl: "╖",
					boxDL: "╗",
					boxdr: "┌",
					boxdR: "╒",
					boxDr: "╓",
					boxDR: "╔",
					boxh: "─",
					boxH: "═",
					boxhd: "┬",
					boxHd: "╤",
					boxhD: "╥",
					boxHD: "╦",
					boxhu: "┴",
					boxHu: "╧",
					boxhU: "╨",
					boxHU: "╩",
					boxminus: "⊟",
					boxplus: "⊞",
					boxtimes: "⊠",
					boxul: "┘",
					boxuL: "╛",
					boxUl: "╜",
					boxUL: "╝",
					boxur: "└",
					boxuR: "╘",
					boxUr: "╙",
					boxUR: "╚",
					boxv: "│",
					boxV: "║",
					boxvh: "┼",
					boxvH: "╪",
					boxVh: "╫",
					boxVH: "╬",
					boxvl: "┤",
					boxvL: "╡",
					boxVl: "╢",
					boxVL: "╣",
					boxvr: "├",
					boxvR: "╞",
					boxVr: "╟",
					boxVR: "╠",
					bprime: "‵",
					breve: "˘",
					Breve: "˘",
					brvbar: "¦",
					bscr: "𝒷",
					Bscr: "ℬ",
					bsemi: "⁏",
					bsim: "∽",
					bsime: "⋍",
					bsolb: "⧅",
					bsol: "\\",
					bsolhsub: "⟈",
					bull: "•",
					bullet: "•",
					bump: "≎",
					bumpE: "⪮",
					bumpe: "≏",
					Bumpeq: "≎",
					bumpeq: "≏",
					Cacute: "Ć",
					cacute: "ć",
					capand: "⩄",
					capbrcup: "⩉",
					capcap: "⩋",
					cap: "∩",
					Cap: "⋒",
					capcup: "⩇",
					capdot: "⩀",
					CapitalDifferentialD: "ⅅ",
					caps: "∩︀",
					caret: "⁁",
					caron: "ˇ",
					Cayleys: "ℭ",
					ccaps: "⩍",
					Ccaron: "Č",
					ccaron: "č",
					Ccedil: "Ç",
					ccedil: "ç",
					Ccirc: "Ĉ",
					ccirc: "ĉ",
					Cconint: "∰",
					ccups: "⩌",
					ccupssm: "⩐",
					Cdot: "Ċ",
					cdot: "ċ",
					cedil: "¸",
					Cedilla: "¸",
					cemptyv: "⦲",
					cent: "¢",
					centerdot: "·",
					CenterDot: "·",
					cfr: "𝔠",
					Cfr: "ℭ",
					CHcy: "Ч",
					chcy: "ч",
					check: "✓",
					checkmark: "✓",
					Chi: "Χ",
					chi: "χ",
					circ: "ˆ",
					circeq: "≗",
					circlearrowleft: "↺",
					circlearrowright: "↻",
					circledast: "⊛",
					circledcirc: "⊚",
					circleddash: "⊝",
					CircleDot: "⊙",
					circledR: "®",
					circledS: "Ⓢ",
					CircleMinus: "⊖",
					CirclePlus: "⊕",
					CircleTimes: "⊗",
					cir: "○",
					cirE: "⧃",
					cire: "≗",
					cirfnint: "⨐",
					cirmid: "⫯",
					cirscir: "⧂",
					ClockwiseContourIntegral: "∲",
					CloseCurlyDoubleQuote: "”",
					CloseCurlyQuote: "’",
					clubs: "♣",
					clubsuit: "♣",
					colon: ":",
					Colon: "∷",
					Colone: "⩴",
					colone: "≔",
					coloneq: "≔",
					comma: ",",
					commat: "@",
					comp: "∁",
					compfn: "∘",
					complement: "∁",
					complexes: "ℂ",
					cong: "≅",
					congdot: "⩭",
					Congruent: "≡",
					conint: "∮",
					Conint: "∯",
					ContourIntegral: "∮",
					copf: "𝕔",
					Copf: "ℂ",
					coprod: "∐",
					Coproduct: "∐",
					copy: "©",
					COPY: "©",
					copysr: "℗",
					CounterClockwiseContourIntegral: "∳",
					crarr: "↵",
					cross: "✗",
					Cross: "⨯",
					Cscr: "𝒞",
					cscr: "𝒸",
					csub: "⫏",
					csube: "⫑",
					csup: "⫐",
					csupe: "⫒",
					ctdot: "⋯",
					cudarrl: "⤸",
					cudarrr: "⤵",
					cuepr: "⋞",
					cuesc: "⋟",
					cularr: "↶",
					cularrp: "⤽",
					cupbrcap: "⩈",
					cupcap: "⩆",
					CupCap: "≍",
					cup: "∪",
					Cup: "⋓",
					cupcup: "⩊",
					cupdot: "⊍",
					cupor: "⩅",
					cups: "∪︀",
					curarr: "↷",
					curarrm: "⤼",
					curlyeqprec: "⋞",
					curlyeqsucc: "⋟",
					curlyvee: "⋎",
					curlywedge: "⋏",
					curren: "¤",
					curvearrowleft: "↶",
					curvearrowright: "↷",
					cuvee: "⋎",
					cuwed: "⋏",
					cwconint: "∲",
					cwint: "∱",
					cylcty: "⌭",
					dagger: "†",
					Dagger: "‡",
					daleth: "ℸ",
					darr: "↓",
					Darr: "↡",
					dArr: "⇓",
					dash: "‐",
					Dashv: "⫤",
					dashv: "⊣",
					dbkarow: "⤏",
					dblac: "˝",
					Dcaron: "Ď",
					dcaron: "ď",
					Dcy: "Д",
					dcy: "д",
					ddagger: "‡",
					ddarr: "⇊",
					DD: "ⅅ",
					dd: "ⅆ",
					DDotrahd: "⤑",
					ddotseq: "⩷",
					deg: "°",
					Del: "∇",
					Delta: "Δ",
					delta: "δ",
					demptyv: "⦱",
					dfisht: "⥿",
					Dfr: "𝔇",
					dfr: "𝔡",
					dHar: "⥥",
					dharl: "⇃",
					dharr: "⇂",
					DiacriticalAcute: "´",
					DiacriticalDot: "˙",
					DiacriticalDoubleAcute: "˝",
					DiacriticalGrave: "`",
					DiacriticalTilde: "˜",
					diam: "⋄",
					diamond: "⋄",
					Diamond: "⋄",
					diamondsuit: "♦",
					diams: "♦",
					die: "¨",
					DifferentialD: "ⅆ",
					digamma: "ϝ",
					disin: "⋲",
					div: "÷",
					divide: "÷",
					divideontimes: "⋇",
					divonx: "⋇",
					DJcy: "Ђ",
					djcy: "ђ",
					dlcorn: "⌞",
					dlcrop: "⌍",
					dollar: "$",
					Dopf: "𝔻",
					dopf: "𝕕",
					Dot: "¨",
					dot: "˙",
					DotDot: "⃜",
					doteq: "≐",
					doteqdot: "≑",
					DotEqual: "≐",
					dotminus: "∸",
					dotplus: "∔",
					dotsquare: "⊡",
					doublebarwedge: "⌆",
					DoubleContourIntegral: "∯",
					DoubleDot: "¨",
					DoubleDownArrow: "⇓",
					DoubleLeftArrow: "⇐",
					DoubleLeftRightArrow: "⇔",
					DoubleLeftTee: "⫤",
					DoubleLongLeftArrow: "⟸",
					DoubleLongLeftRightArrow: "⟺",
					DoubleLongRightArrow: "⟹",
					DoubleRightArrow: "⇒",
					DoubleRightTee: "⊨",
					DoubleUpArrow: "⇑",
					DoubleUpDownArrow: "⇕",
					DoubleVerticalBar: "∥",
					DownArrowBar: "⤓",
					downarrow: "↓",
					DownArrow: "↓",
					Downarrow: "⇓",
					DownArrowUpArrow: "⇵",
					DownBreve: "̑",
					downdownarrows: "⇊",
					downharpoonleft: "⇃",
					downharpoonright: "⇂",
					DownLeftRightVector: "⥐",
					DownLeftTeeVector: "⥞",
					DownLeftVectorBar: "⥖",
					DownLeftVector: "↽",
					DownRightTeeVector: "⥟",
					DownRightVectorBar: "⥗",
					DownRightVector: "⇁",
					DownTeeArrow: "↧",
					DownTee: "⊤",
					drbkarow: "⤐",
					drcorn: "⌟",
					drcrop: "⌌",
					Dscr: "𝒟",
					dscr: "𝒹",
					DScy: "Ѕ",
					dscy: "ѕ",
					dsol: "⧶",
					Dstrok: "Đ",
					dstrok: "đ",
					dtdot: "⋱",
					dtri: "▿",
					dtrif: "▾",
					duarr: "⇵",
					duhar: "⥯",
					dwangle: "⦦",
					DZcy: "Џ",
					dzcy: "џ",
					dzigrarr: "⟿",
					Eacute: "É",
					eacute: "é",
					easter: "⩮",
					Ecaron: "Ě",
					ecaron: "ě",
					Ecirc: "Ê",
					ecirc: "ê",
					ecir: "≖",
					ecolon: "≕",
					Ecy: "Э",
					ecy: "э",
					eDDot: "⩷",
					Edot: "Ė",
					edot: "ė",
					eDot: "≑",
					ee: "ⅇ",
					efDot: "≒",
					Efr: "𝔈",
					efr: "𝔢",
					eg: "⪚",
					Egrave: "È",
					egrave: "è",
					egs: "⪖",
					egsdot: "⪘",
					el: "⪙",
					Element: "∈",
					elinters: "⏧",
					ell: "ℓ",
					els: "⪕",
					elsdot: "⪗",
					Emacr: "Ē",
					emacr: "ē",
					empty: "∅",
					emptyset: "∅",
					EmptySmallSquare: "◻",
					emptyv: "∅",
					EmptyVerySmallSquare: "▫",
					emsp13: " ",
					emsp14: " ",
					emsp: " ",
					ENG: "Ŋ",
					eng: "ŋ",
					ensp: " ",
					Eogon: "Ę",
					eogon: "ę",
					Eopf: "𝔼",
					eopf: "𝕖",
					epar: "⋕",
					eparsl: "⧣",
					eplus: "⩱",
					epsi: "ε",
					Epsilon: "Ε",
					epsilon: "ε",
					epsiv: "ϵ",
					eqcirc: "≖",
					eqcolon: "≕",
					eqsim: "≂",
					eqslantgtr: "⪖",
					eqslantless: "⪕",
					Equal: "⩵",
					equals: "=",
					EqualTilde: "≂",
					equest: "≟",
					Equilibrium: "⇌",
					equiv: "≡",
					equivDD: "⩸",
					eqvparsl: "⧥",
					erarr: "⥱",
					erDot: "≓",
					escr: "ℯ",
					Escr: "ℰ",
					esdot: "≐",
					Esim: "⩳",
					esim: "≂",
					Eta: "Η",
					eta: "η",
					ETH: "Ð",
					eth: "ð",
					Euml: "Ë",
					euml: "ë",
					euro: "€",
					excl: "!",
					exist: "∃",
					Exists: "∃",
					expectation: "ℰ",
					exponentiale: "ⅇ",
					ExponentialE: "ⅇ",
					fallingdotseq: "≒",
					Fcy: "Ф",
					fcy: "ф",
					female: "♀",
					ffilig: "ﬃ",
					fflig: "ﬀ",
					ffllig: "ﬄ",
					Ffr: "𝔉",
					ffr: "𝔣",
					filig: "ﬁ",
					FilledSmallSquare: "◼",
					FilledVerySmallSquare: "▪",
					fjlig: "fj",
					flat: "♭",
					fllig: "ﬂ",
					fltns: "▱",
					fnof: "ƒ",
					Fopf: "𝔽",
					fopf: "𝕗",
					forall: "∀",
					ForAll: "∀",
					fork: "⋔",
					forkv: "⫙",
					Fouriertrf: "ℱ",
					fpartint: "⨍",
					frac12: "½",
					frac13: "⅓",
					frac14: "¼",
					frac15: "⅕",
					frac16: "⅙",
					frac18: "⅛",
					frac23: "⅔",
					frac25: "⅖",
					frac34: "¾",
					frac35: "⅗",
					frac38: "⅜",
					frac45: "⅘",
					frac56: "⅚",
					frac58: "⅝",
					frac78: "⅞",
					frasl: "⁄",
					frown: "⌢",
					fscr: "𝒻",
					Fscr: "ℱ",
					gacute: "ǵ",
					Gamma: "Γ",
					gamma: "γ",
					Gammad: "Ϝ",
					gammad: "ϝ",
					gap: "⪆",
					Gbreve: "Ğ",
					gbreve: "ğ",
					Gcedil: "Ģ",
					Gcirc: "Ĝ",
					gcirc: "ĝ",
					Gcy: "Г",
					gcy: "г",
					Gdot: "Ġ",
					gdot: "ġ",
					ge: "≥",
					gE: "≧",
					gEl: "⪌",
					gel: "⋛",
					geq: "≥",
					geqq: "≧",
					geqslant: "⩾",
					gescc: "⪩",
					ges: "⩾",
					gesdot: "⪀",
					gesdoto: "⪂",
					gesdotol: "⪄",
					gesl: "⋛︀",
					gesles: "⪔",
					Gfr: "𝔊",
					gfr: "𝔤",
					gg: "≫",
					Gg: "⋙",
					ggg: "⋙",
					gimel: "ℷ",
					GJcy: "Ѓ",
					gjcy: "ѓ",
					gla: "⪥",
					gl: "≷",
					glE: "⪒",
					glj: "⪤",
					gnap: "⪊",
					gnapprox: "⪊",
					gne: "⪈",
					gnE: "≩",
					gneq: "⪈",
					gneqq: "≩",
					gnsim: "⋧",
					Gopf: "𝔾",
					gopf: "𝕘",
					grave: "`",
					GreaterEqual: "≥",
					GreaterEqualLess: "⋛",
					GreaterFullEqual: "≧",
					GreaterGreater: "⪢",
					GreaterLess: "≷",
					GreaterSlantEqual: "⩾",
					GreaterTilde: "≳",
					Gscr: "𝒢",
					gscr: "ℊ",
					gsim: "≳",
					gsime: "⪎",
					gsiml: "⪐",
					gtcc: "⪧",
					gtcir: "⩺",
					gt: ">",
					GT: ">",
					Gt: "≫",
					gtdot: "⋗",
					gtlPar: "⦕",
					gtquest: "⩼",
					gtrapprox: "⪆",
					gtrarr: "⥸",
					gtrdot: "⋗",
					gtreqless: "⋛",
					gtreqqless: "⪌",
					gtrless: "≷",
					gtrsim: "≳",
					gvertneqq: "≩︀",
					gvnE: "≩︀",
					Hacek: "ˇ",
					hairsp: " ",
					half: "½",
					hamilt: "ℋ",
					HARDcy: "Ъ",
					hardcy: "ъ",
					harrcir: "⥈",
					harr: "↔",
					hArr: "⇔",
					harrw: "↭",
					Hat: "^",
					hbar: "ℏ",
					Hcirc: "Ĥ",
					hcirc: "ĥ",
					hearts: "♥",
					heartsuit: "♥",
					hellip: "…",
					hercon: "⊹",
					hfr: "𝔥",
					Hfr: "ℌ",
					HilbertSpace: "ℋ",
					hksearow: "⤥",
					hkswarow: "⤦",
					hoarr: "⇿",
					homtht: "∻",
					hookleftarrow: "↩",
					hookrightarrow: "↪",
					hopf: "𝕙",
					Hopf: "ℍ",
					horbar: "―",
					HorizontalLine: "─",
					hscr: "𝒽",
					Hscr: "ℋ",
					hslash: "ℏ",
					Hstrok: "Ħ",
					hstrok: "ħ",
					HumpDownHump: "≎",
					HumpEqual: "≏",
					hybull: "⁃",
					hyphen: "‐",
					Iacute: "Í",
					iacute: "í",
					ic: "⁣",
					Icirc: "Î",
					icirc: "î",
					Icy: "И",
					icy: "и",
					Idot: "İ",
					IEcy: "Е",
					iecy: "е",
					iexcl: "¡",
					iff: "⇔",
					ifr: "𝔦",
					Ifr: "ℑ",
					Igrave: "Ì",
					igrave: "ì",
					ii: "ⅈ",
					iiiint: "⨌",
					iiint: "∭",
					iinfin: "⧜",
					iiota: "℩",
					IJlig: "Ĳ",
					ijlig: "ĳ",
					Imacr: "Ī",
					imacr: "ī",
					image: "ℑ",
					ImaginaryI: "ⅈ",
					imagline: "ℐ",
					imagpart: "ℑ",
					imath: "ı",
					Im: "ℑ",
					imof: "⊷",
					imped: "Ƶ",
					Implies: "⇒",
					incare: "℅",
					"in": "∈",
					infin: "∞",
					infintie: "⧝",
					inodot: "ı",
					intcal: "⊺",
					"int": "∫",
					Int: "∬",
					integers: "ℤ",
					Integral: "∫",
					intercal: "⊺",
					Intersection: "⋂",
					intlarhk: "⨗",
					intprod: "⨼",
					InvisibleComma: "⁣",
					InvisibleTimes: "⁢",
					IOcy: "Ё",
					iocy: "ё",
					Iogon: "Į",
					iogon: "į",
					Iopf: "𝕀",
					iopf: "𝕚",
					Iota: "Ι",
					iota: "ι",
					iprod: "⨼",
					iquest: "¿",
					iscr: "𝒾",
					Iscr: "ℐ",
					isin: "∈",
					isindot: "⋵",
					isinE: "⋹",
					isins: "⋴",
					isinsv: "⋳",
					isinv: "∈",
					it: "⁢",
					Itilde: "Ĩ",
					itilde: "ĩ",
					Iukcy: "І",
					iukcy: "і",
					Iuml: "Ï",
					iuml: "ï",
					Jcirc: "Ĵ",
					jcirc: "ĵ",
					Jcy: "Й",
					jcy: "й",
					Jfr: "𝔍",
					jfr: "𝔧",
					jmath: "ȷ",
					Jopf: "𝕁",
					jopf: "𝕛",
					Jscr: "𝒥",
					jscr: "𝒿",
					Jsercy: "Ј",
					jsercy: "ј",
					Jukcy: "Є",
					jukcy: "є",
					Kappa: "Κ",
					kappa: "κ",
					kappav: "ϰ",
					Kcedil: "Ķ",
					kcedil: "ķ",
					Kcy: "К",
					kcy: "к",
					Kfr: "𝔎",
					kfr: "𝔨",
					kgreen: "ĸ",
					KHcy: "Х",
					khcy: "х",
					KJcy: "Ќ",
					kjcy: "ќ",
					Kopf: "𝕂",
					kopf: "𝕜",
					Kscr: "𝒦",
					kscr: "𝓀",
					lAarr: "⇚",
					Lacute: "Ĺ",
					lacute: "ĺ",
					laemptyv: "⦴",
					lagran: "ℒ",
					Lambda: "Λ",
					lambda: "λ",
					lang: "⟨",
					Lang: "⟪",
					langd: "⦑",
					langle: "⟨",
					lap: "⪅",
					Laplacetrf: "ℒ",
					laquo: "«",
					larrb: "⇤",
					larrbfs: "⤟",
					larr: "←",
					Larr: "↞",
					lArr: "⇐",
					larrfs: "⤝",
					larrhk: "↩",
					larrlp: "↫",
					larrpl: "⤹",
					larrsim: "⥳",
					larrtl: "↢",
					latail: "⤙",
					lAtail: "⤛",
					lat: "⪫",
					late: "⪭",
					lates: "⪭︀",
					lbarr: "⤌",
					lBarr: "⤎",
					lbbrk: "❲",
					lbrace: "{",
					lbrack: "[",
					lbrke: "⦋",
					lbrksld: "⦏",
					lbrkslu: "⦍",
					Lcaron: "Ľ",
					lcaron: "ľ",
					Lcedil: "Ļ",
					lcedil: "ļ",
					lceil: "⌈",
					lcub: "{",
					Lcy: "Л",
					lcy: "л",
					ldca: "⤶",
					ldquo: "“",
					ldquor: "„",
					ldrdhar: "⥧",
					ldrushar: "⥋",
					ldsh: "↲",
					le: "≤",
					lE: "≦",
					LeftAngleBracket: "⟨",
					LeftArrowBar: "⇤",
					leftarrow: "←",
					LeftArrow: "←",
					Leftarrow: "⇐",
					LeftArrowRightArrow: "⇆",
					leftarrowtail: "↢",
					LeftCeiling: "⌈",
					LeftDoubleBracket: "⟦",
					LeftDownTeeVector: "⥡",
					LeftDownVectorBar: "⥙",
					LeftDownVector: "⇃",
					LeftFloor: "⌊",
					leftharpoondown: "↽",
					leftharpoonup: "↼",
					leftleftarrows: "⇇",
					leftrightarrow: "↔",
					LeftRightArrow: "↔",
					Leftrightarrow: "⇔",
					leftrightarrows: "⇆",
					leftrightharpoons: "⇋",
					leftrightsquigarrow: "↭",
					LeftRightVector: "⥎",
					LeftTeeArrow: "↤",
					LeftTee: "⊣",
					LeftTeeVector: "⥚",
					leftthreetimes: "⋋",
					LeftTriangleBar: "⧏",
					LeftTriangle: "⊲",
					LeftTriangleEqual: "⊴",
					LeftUpDownVector: "⥑",
					LeftUpTeeVector: "⥠",
					LeftUpVectorBar: "⥘",
					LeftUpVector: "↿",
					LeftVectorBar: "⥒",
					LeftVector: "↼",
					lEg: "⪋",
					leg: "⋚",
					leq: "≤",
					leqq: "≦",
					leqslant: "⩽",
					lescc: "⪨",
					les: "⩽",
					lesdot: "⩿",
					lesdoto: "⪁",
					lesdotor: "⪃",
					lesg: "⋚︀",
					lesges: "⪓",
					lessapprox: "⪅",
					lessdot: "⋖",
					lesseqgtr: "⋚",
					lesseqqgtr: "⪋",
					LessEqualGreater: "⋚",
					LessFullEqual: "≦",
					LessGreater: "≶",
					lessgtr: "≶",
					LessLess: "⪡",
					lesssim: "≲",
					LessSlantEqual: "⩽",
					LessTilde: "≲",
					lfisht: "⥼",
					lfloor: "⌊",
					Lfr: "𝔏",
					lfr: "𝔩",
					lg: "≶",
					lgE: "⪑",
					lHar: "⥢",
					lhard: "↽",
					lharu: "↼",
					lharul: "⥪",
					lhblk: "▄",
					LJcy: "Љ",
					ljcy: "љ",
					llarr: "⇇",
					ll: "≪",
					Ll: "⋘",
					llcorner: "⌞",
					Lleftarrow: "⇚",
					llhard: "⥫",
					lltri: "◺",
					Lmidot: "Ŀ",
					lmidot: "ŀ",
					lmoustache: "⎰",
					lmoust: "⎰",
					lnap: "⪉",
					lnapprox: "⪉",
					lne: "⪇",
					lnE: "≨",
					lneq: "⪇",
					lneqq: "≨",
					lnsim: "⋦",
					loang: "⟬",
					loarr: "⇽",
					lobrk: "⟦",
					longleftarrow: "⟵",
					LongLeftArrow: "⟵",
					Longleftarrow: "⟸",
					longleftrightarrow: "⟷",
					LongLeftRightArrow: "⟷",
					Longleftrightarrow: "⟺",
					longmapsto: "⟼",
					longrightarrow: "⟶",
					LongRightArrow: "⟶",
					Longrightarrow: "⟹",
					looparrowleft: "↫",
					looparrowright: "↬",
					lopar: "⦅",
					Lopf: "𝕃",
					lopf: "𝕝",
					loplus: "⨭",
					lotimes: "⨴",
					lowast: "∗",
					lowbar: "_",
					LowerLeftArrow: "↙",
					LowerRightArrow: "↘",
					loz: "◊",
					lozenge: "◊",
					lozf: "⧫",
					lpar: "(",
					lparlt: "⦓",
					lrarr: "⇆",
					lrcorner: "⌟",
					lrhar: "⇋",
					lrhard: "⥭",
					lrm: "‎",
					lrtri: "⊿",
					lsaquo: "‹",
					lscr: "𝓁",
					Lscr: "ℒ",
					lsh: "↰",
					Lsh: "↰",
					lsim: "≲",
					lsime: "⪍",
					lsimg: "⪏",
					lsqb: "[",
					lsquo: "‘",
					lsquor: "‚",
					Lstrok: "Ł",
					lstrok: "ł",
					ltcc: "⪦",
					ltcir: "⩹",
					lt: "<",
					LT: "<",
					Lt: "≪",
					ltdot: "⋖",
					lthree: "⋋",
					ltimes: "⋉",
					ltlarr: "⥶",
					ltquest: "⩻",
					ltri: "◃",
					ltrie: "⊴",
					ltrif: "◂",
					ltrPar: "⦖",
					lurdshar: "⥊",
					luruhar: "⥦",
					lvertneqq: "≨︀",
					lvnE: "≨︀",
					macr: "¯",
					male: "♂",
					malt: "✠",
					maltese: "✠",
					Map: "⤅",
					map: "↦",
					mapsto: "↦",
					mapstodown: "↧",
					mapstoleft: "↤",
					mapstoup: "↥",
					marker: "▮",
					mcomma: "⨩",
					Mcy: "М",
					mcy: "м",
					mdash: "—",
					mDDot: "∺",
					measuredangle: "∡",
					MediumSpace: " ",
					Mellintrf: "ℳ",
					Mfr: "𝔐",
					mfr: "𝔪",
					mho: "℧",
					micro: "µ",
					midast: "*",
					midcir: "⫰",
					mid: "∣",
					middot: "·",
					minusb: "⊟",
					minus: "−",
					minusd: "∸",
					minusdu: "⨪",
					MinusPlus: "∓",
					mlcp: "⫛",
					mldr: "…",
					mnplus: "∓",
					models: "⊧",
					Mopf: "𝕄",
					mopf: "𝕞",
					mp: "∓",
					mscr: "𝓂",
					Mscr: "ℳ",
					mstpos: "∾",
					Mu: "Μ",
					mu: "μ",
					multimap: "⊸",
					mumap: "⊸",
					nabla: "∇",
					Nacute: "Ń",
					nacute: "ń",
					nang: "∠⃒",
					nap: "≉",
					napE: "⩰̸",
					napid: "≋̸",
					napos: "ŉ",
					napprox: "≉",
					natural: "♮",
					naturals: "ℕ",
					natur: "♮",
					nbsp: " ",
					nbump: "≎̸",
					nbumpe: "≏̸",
					ncap: "⩃",
					Ncaron: "Ň",
					ncaron: "ň",
					Ncedil: "Ņ",
					ncedil: "ņ",
					ncong: "≇",
					ncongdot: "⩭̸",
					ncup: "⩂",
					Ncy: "Н",
					ncy: "н",
					ndash: "–",
					nearhk: "⤤",
					nearr: "↗",
					neArr: "⇗",
					nearrow: "↗",
					ne: "≠",
					nedot: "≐̸",
					NegativeMediumSpace: "​",
					NegativeThickSpace: "​",
					NegativeThinSpace: "​",
					NegativeVeryThinSpace: "​",
					nequiv: "≢",
					nesear: "⤨",
					nesim: "≂̸",
					NestedGreaterGreater: "≫",
					NestedLessLess: "≪",
					NewLine: "\n",
					nexist: "∄",
					nexists: "∄",
					Nfr: "𝔑",
					nfr: "𝔫",
					ngE: "≧̸",
					nge: "≱",
					ngeq: "≱",
					ngeqq: "≧̸",
					ngeqslant: "⩾̸",
					nges: "⩾̸",
					nGg: "⋙̸",
					ngsim: "≵",
					nGt: "≫⃒",
					ngt: "≯",
					ngtr: "≯",
					nGtv: "≫̸",
					nharr: "↮",
					nhArr: "⇎",
					nhpar: "⫲",
					ni: "∋",
					nis: "⋼",
					nisd: "⋺",
					niv: "∋",
					NJcy: "Њ",
					njcy: "њ",
					nlarr: "↚",
					nlArr: "⇍",
					nldr: "‥",
					nlE: "≦̸",
					nle: "≰",
					nleftarrow: "↚",
					nLeftarrow: "⇍",
					nleftrightarrow: "↮",
					nLeftrightarrow: "⇎",
					nleq: "≰",
					nleqq: "≦̸",
					nleqslant: "⩽̸",
					nles: "⩽̸",
					nless: "≮",
					nLl: "⋘̸",
					nlsim: "≴",
					nLt: "≪⃒",
					nlt: "≮",
					nltri: "⋪",
					nltrie: "⋬",
					nLtv: "≪̸",
					nmid: "∤",
					NoBreak: "⁠",
					NonBreakingSpace: " ",
					nopf: "𝕟",
					Nopf: "ℕ",
					Not: "⫬",
					not: "¬",
					NotCongruent: "≢",
					NotCupCap: "≭",
					NotDoubleVerticalBar: "∦",
					NotElement: "∉",
					NotEqual: "≠",
					NotEqualTilde: "≂̸",
					NotExists: "∄",
					NotGreater: "≯",
					NotGreaterEqual: "≱",
					NotGreaterFullEqual: "≧̸",
					NotGreaterGreater: "≫̸",
					NotGreaterLess: "≹",
					NotGreaterSlantEqual: "⩾̸",
					NotGreaterTilde: "≵",
					NotHumpDownHump: "≎̸",
					NotHumpEqual: "≏̸",
					notin: "∉",
					notindot: "⋵̸",
					notinE: "⋹̸",
					notinva: "∉",
					notinvb: "⋷",
					notinvc: "⋶",
					NotLeftTriangleBar: "⧏̸",
					NotLeftTriangle: "⋪",
					NotLeftTriangleEqual: "⋬",
					NotLess: "≮",
					NotLessEqual: "≰",
					NotLessGreater: "≸",
					NotLessLess: "≪̸",
					NotLessSlantEqual: "⩽̸",
					NotLessTilde: "≴",
					NotNestedGreaterGreater: "⪢̸",
					NotNestedLessLess: "⪡̸",
					notni: "∌",
					notniva: "∌",
					notnivb: "⋾",
					notnivc: "⋽",
					NotPrecedes: "⊀",
					NotPrecedesEqual: "⪯̸",
					NotPrecedesSlantEqual: "⋠",
					NotReverseElement: "∌",
					NotRightTriangleBar: "⧐̸",
					NotRightTriangle: "⋫",
					NotRightTriangleEqual: "⋭",
					NotSquareSubset: "⊏̸",
					NotSquareSubsetEqual: "⋢",
					NotSquareSuperset: "⊐̸",
					NotSquareSupersetEqual: "⋣",
					NotSubset: "⊂⃒",
					NotSubsetEqual: "⊈",
					NotSucceeds: "⊁",
					NotSucceedsEqual: "⪰̸",
					NotSucceedsSlantEqual: "⋡",
					NotSucceedsTilde: "≿̸",
					NotSuperset: "⊃⃒",
					NotSupersetEqual: "⊉",
					NotTilde: "≁",
					NotTildeEqual: "≄",
					NotTildeFullEqual: "≇",
					NotTildeTilde: "≉",
					NotVerticalBar: "∤",
					nparallel: "∦",
					npar: "∦",
					nparsl: "⫽⃥",
					npart: "∂̸",
					npolint: "⨔",
					npr: "⊀",
					nprcue: "⋠",
					nprec: "⊀",
					npreceq: "⪯̸",
					npre: "⪯̸",
					nrarrc: "⤳̸",
					nrarr: "↛",
					nrArr: "⇏",
					nrarrw: "↝̸",
					nrightarrow: "↛",
					nRightarrow: "⇏",
					nrtri: "⋫",
					nrtrie: "⋭",
					nsc: "⊁",
					nsccue: "⋡",
					nsce: "⪰̸",
					Nscr: "𝒩",
					nscr: "𝓃",
					nshortmid: "∤",
					nshortparallel: "∦",
					nsim: "≁",
					nsime: "≄",
					nsimeq: "≄",
					nsmid: "∤",
					nspar: "∦",
					nsqsube: "⋢",
					nsqsupe: "⋣",
					nsub: "⊄",
					nsubE: "⫅̸",
					nsube: "⊈",
					nsubset: "⊂⃒",
					nsubseteq: "⊈",
					nsubseteqq: "⫅̸",
					nsucc: "⊁",
					nsucceq: "⪰̸",
					nsup: "⊅",
					nsupE: "⫆̸",
					nsupe: "⊉",
					nsupset: "⊃⃒",
					nsupseteq: "⊉",
					nsupseteqq: "⫆̸",
					ntgl: "≹",
					Ntilde: "Ñ",
					ntilde: "ñ",
					ntlg: "≸",
					ntriangleleft: "⋪",
					ntrianglelefteq: "⋬",
					ntriangleright: "⋫",
					ntrianglerighteq: "⋭",
					Nu: "Ν",
					nu: "ν",
					num: "#",
					numero: "№",
					numsp: " ",
					nvap: "≍⃒",
					nvdash: "⊬",
					nvDash: "⊭",
					nVdash: "⊮",
					nVDash: "⊯",
					nvge: "≥⃒",
					nvgt: ">⃒",
					nvHarr: "⤄",
					nvinfin: "⧞",
					nvlArr: "⤂",
					nvle: "≤⃒",
					nvlt: "<⃒",
					nvltrie: "⊴⃒",
					nvrArr: "⤃",
					nvrtrie: "⊵⃒",
					nvsim: "∼⃒",
					nwarhk: "⤣",
					nwarr: "↖",
					nwArr: "⇖",
					nwarrow: "↖",
					nwnear: "⤧",
					Oacute: "Ó",
					oacute: "ó",
					oast: "⊛",
					Ocirc: "Ô",
					ocirc: "ô",
					ocir: "⊚",
					Ocy: "О",
					ocy: "о",
					odash: "⊝",
					Odblac: "Ő",
					odblac: "ő",
					odiv: "⨸",
					odot: "⊙",
					odsold: "⦼",
					OElig: "Œ",
					oelig: "œ",
					ofcir: "⦿",
					Ofr: "𝔒",
					ofr: "𝔬",
					ogon: "˛",
					Ograve: "Ò",
					ograve: "ò",
					ogt: "⧁",
					ohbar: "⦵",
					ohm: "Ω",
					oint: "∮",
					olarr: "↺",
					olcir: "⦾",
					olcross: "⦻",
					oline: "‾",
					olt: "⧀",
					Omacr: "Ō",
					omacr: "ō",
					Omega: "Ω",
					omega: "ω",
					Omicron: "Ο",
					omicron: "ο",
					omid: "⦶",
					ominus: "⊖",
					Oopf: "𝕆",
					oopf: "𝕠",
					opar: "⦷",
					OpenCurlyDoubleQuote: "“",
					OpenCurlyQuote: "‘",
					operp: "⦹",
					oplus: "⊕",
					orarr: "↻",
					Or: "⩔",
					or: "∨",
					ord: "⩝",
					order: "ℴ",
					orderof: "ℴ",
					ordf: "ª",
					ordm: "º",
					origof: "⊶",
					oror: "⩖",
					orslope: "⩗",
					orv: "⩛",
					oS: "Ⓢ",
					Oscr: "𝒪",
					oscr: "ℴ",
					Oslash: "Ø",
					oslash: "ø",
					osol: "⊘",
					Otilde: "Õ",
					otilde: "õ",
					otimesas: "⨶",
					Otimes: "⨷",
					otimes: "⊗",
					Ouml: "Ö",
					ouml: "ö",
					ovbar: "⌽",
					OverBar: "‾",
					OverBrace: "⏞",
					OverBracket: "⎴",
					OverParenthesis: "⏜",
					para: "¶",
					parallel: "∥",
					par: "∥",
					parsim: "⫳",
					parsl: "⫽",
					part: "∂",
					PartialD: "∂",
					Pcy: "П",
					pcy: "п",
					percnt: "%",
					period: ".",
					permil: "‰",
					perp: "⊥",
					pertenk: "‱",
					Pfr: "𝔓",
					pfr: "𝔭",
					Phi: "Φ",
					phi: "φ",
					phiv: "ϕ",
					phmmat: "ℳ",
					phone: "☎",
					Pi: "Π",
					pi: "π",
					pitchfork: "⋔",
					piv: "ϖ",
					planck: "ℏ",
					planckh: "ℎ",
					plankv: "ℏ",
					plusacir: "⨣",
					plusb: "⊞",
					pluscir: "⨢",
					plus: "+",
					plusdo: "∔",
					plusdu: "⨥",
					pluse: "⩲",
					PlusMinus: "±",
					plusmn: "±",
					plussim: "⨦",
					plustwo: "⨧",
					pm: "±",
					Poincareplane: "ℌ",
					pointint: "⨕",
					popf: "𝕡",
					Popf: "ℙ",
					pound: "£",
					prap: "⪷",
					Pr: "⪻",
					pr: "≺",
					prcue: "≼",
					precapprox: "⪷",
					prec: "≺",
					preccurlyeq: "≼",
					Precedes: "≺",
					PrecedesEqual: "⪯",
					PrecedesSlantEqual: "≼",
					PrecedesTilde: "≾",
					preceq: "⪯",
					precnapprox: "⪹",
					precneqq: "⪵",
					precnsim: "⋨",
					pre: "⪯",
					prE: "⪳",
					precsim: "≾",
					prime: "′",
					Prime: "″",
					primes: "ℙ",
					prnap: "⪹",
					prnE: "⪵",
					prnsim: "⋨",
					prod: "∏",
					Product: "∏",
					profalar: "⌮",
					profline: "⌒",
					profsurf: "⌓",
					prop: "∝",
					Proportional: "∝",
					Proportion: "∷",
					propto: "∝",
					prsim: "≾",
					prurel: "⊰",
					Pscr: "𝒫",
					pscr: "𝓅",
					Psi: "Ψ",
					psi: "ψ",
					puncsp: " ",
					Qfr: "𝔔",
					qfr: "𝔮",
					qint: "⨌",
					qopf: "𝕢",
					Qopf: "ℚ",
					qprime: "⁗",
					Qscr: "𝒬",
					qscr: "𝓆",
					quaternions: "ℍ",
					quatint: "⨖",
					quest: "?",
					questeq: "≟",
					quot: '"',
					QUOT: '"',
					rAarr: "⇛",
					race: "∽̱",
					Racute: "Ŕ",
					racute: "ŕ",
					radic: "√",
					raemptyv: "⦳",
					rang: "⟩",
					Rang: "⟫",
					rangd: "⦒",
					range: "⦥",
					rangle: "⟩",
					raquo: "»",
					rarrap: "⥵",
					rarrb: "⇥",
					rarrbfs: "⤠",
					rarrc: "⤳",
					rarr: "→",
					Rarr: "↠",
					rArr: "⇒",
					rarrfs: "⤞",
					rarrhk: "↪",
					rarrlp: "↬",
					rarrpl: "⥅",
					rarrsim: "⥴",
					Rarrtl: "⤖",
					rarrtl: "↣",
					rarrw: "↝",
					ratail: "⤚",
					rAtail: "⤜",
					ratio: "∶",
					rationals: "ℚ",
					rbarr: "⤍",
					rBarr: "⤏",
					RBarr: "⤐",
					rbbrk: "❳",
					rbrace: "}",
					rbrack: "]",
					rbrke: "⦌",
					rbrksld: "⦎",
					rbrkslu: "⦐",
					Rcaron: "Ř",
					rcaron: "ř",
					Rcedil: "Ŗ",
					rcedil: "ŗ",
					rceil: "⌉",
					rcub: "}",
					Rcy: "Р",
					rcy: "р",
					rdca: "⤷",
					rdldhar: "⥩",
					rdquo: "”",
					rdquor: "”",
					rdsh: "↳",
					real: "ℜ",
					realine: "ℛ",
					realpart: "ℜ",
					reals: "ℝ",
					Re: "ℜ",
					rect: "▭",
					reg: "®",
					REG: "®",
					ReverseElement: "∋",
					ReverseEquilibrium: "⇋",
					ReverseUpEquilibrium: "⥯",
					rfisht: "⥽",
					rfloor: "⌋",
					rfr: "𝔯",
					Rfr: "ℜ",
					rHar: "⥤",
					rhard: "⇁",
					rharu: "⇀",
					rharul: "⥬",
					Rho: "Ρ",
					rho: "ρ",
					rhov: "ϱ",
					RightAngleBracket: "⟩",
					RightArrowBar: "⇥",
					rightarrow: "→",
					RightArrow: "→",
					Rightarrow: "⇒",
					RightArrowLeftArrow: "⇄",
					rightarrowtail: "↣",
					RightCeiling: "⌉",
					RightDoubleBracket: "⟧",
					RightDownTeeVector: "⥝",
					RightDownVectorBar: "⥕",
					RightDownVector: "⇂",
					RightFloor: "⌋",
					rightharpoondown: "⇁",
					rightharpoonup: "⇀",
					rightleftarrows: "⇄",
					rightleftharpoons: "⇌",
					rightrightarrows: "⇉",
					rightsquigarrow: "↝",
					RightTeeArrow: "↦",
					RightTee: "⊢",
					RightTeeVector: "⥛",
					rightthreetimes: "⋌",
					RightTriangleBar: "⧐",
					RightTriangle: "⊳",
					RightTriangleEqual: "⊵",
					RightUpDownVector: "⥏",
					RightUpTeeVector: "⥜",
					RightUpVectorBar: "⥔",
					RightUpVector: "↾",
					RightVectorBar: "⥓",
					RightVector: "⇀",
					ring: "˚",
					risingdotseq: "≓",
					rlarr: "⇄",
					rlhar: "⇌",
					rlm: "‏",
					rmoustache: "⎱",
					rmoust: "⎱",
					rnmid: "⫮",
					roang: "⟭",
					roarr: "⇾",
					robrk: "⟧",
					ropar: "⦆",
					ropf: "𝕣",
					Ropf: "ℝ",
					roplus: "⨮",
					rotimes: "⨵",
					RoundImplies: "⥰",
					rpar: ")",
					rpargt: "⦔",
					rppolint: "⨒",
					rrarr: "⇉",
					Rrightarrow: "⇛",
					rsaquo: "›",
					rscr: "𝓇",
					Rscr: "ℛ",
					rsh: "↱",
					Rsh: "↱",
					rsqb: "]",
					rsquo: "’",
					rsquor: "’",
					rthree: "⋌",
					rtimes: "⋊",
					rtri: "▹",
					rtrie: "⊵",
					rtrif: "▸",
					rtriltri: "⧎",
					RuleDelayed: "⧴",
					ruluhar: "⥨",
					rx: "℞",
					Sacute: "Ś",
					sacute: "ś",
					sbquo: "‚",
					scap: "⪸",
					Scaron: "Š",
					scaron: "š",
					Sc: "⪼",
					sc: "≻",
					sccue: "≽",
					sce: "⪰",
					scE: "⪴",
					Scedil: "Ş",
					scedil: "ş",
					Scirc: "Ŝ",
					scirc: "ŝ",
					scnap: "⪺",
					scnE: "⪶",
					scnsim: "⋩",
					scpolint: "⨓",
					scsim: "≿",
					Scy: "С",
					scy: "с",
					sdotb: "⊡",
					sdot: "⋅",
					sdote: "⩦",
					searhk: "⤥",
					searr: "↘",
					seArr: "⇘",
					searrow: "↘",
					sect: "§",
					semi: ";",
					seswar: "⤩",
					setminus: "∖",
					setmn: "∖",
					sext: "✶",
					Sfr: "𝔖",
					sfr: "𝔰",
					sfrown: "⌢",
					sharp: "♯",
					SHCHcy: "Щ",
					shchcy: "щ",
					SHcy: "Ш",
					shcy: "ш",
					ShortDownArrow: "↓",
					ShortLeftArrow: "←",
					shortmid: "∣",
					shortparallel: "∥",
					ShortRightArrow: "→",
					ShortUpArrow: "↑",
					shy: "­",
					Sigma: "Σ",
					sigma: "σ",
					sigmaf: "ς",
					sigmav: "ς",
					sim: "∼",
					simdot: "⩪",
					sime: "≃",
					simeq: "≃",
					simg: "⪞",
					simgE: "⪠",
					siml: "⪝",
					simlE: "⪟",
					simne: "≆",
					simplus: "⨤",
					simrarr: "⥲",
					slarr: "←",
					SmallCircle: "∘",
					smallsetminus: "∖",
					smashp: "⨳",
					smeparsl: "⧤",
					smid: "∣",
					smile: "⌣",
					smt: "⪪",
					smte: "⪬",
					smtes: "⪬︀",
					SOFTcy: "Ь",
					softcy: "ь",
					solbar: "⌿",
					solb: "⧄",
					sol: "/",
					Sopf: "𝕊",
					sopf: "𝕤",
					spades: "♠",
					spadesuit: "♠",
					spar: "∥",
					sqcap: "⊓",
					sqcaps: "⊓︀",
					sqcup: "⊔",
					sqcups: "⊔︀",
					Sqrt: "√",
					sqsub: "⊏",
					sqsube: "⊑",
					sqsubset: "⊏",
					sqsubseteq: "⊑",
					sqsup: "⊐",
					sqsupe: "⊒",
					sqsupset: "⊐",
					sqsupseteq: "⊒",
					square: "□",
					Square: "□",
					SquareIntersection: "⊓",
					SquareSubset: "⊏",
					SquareSubsetEqual: "⊑",
					SquareSuperset: "⊐",
					SquareSupersetEqual: "⊒",
					SquareUnion: "⊔",
					squarf: "▪",
					squ: "□",
					squf: "▪",
					srarr: "→",
					Sscr: "𝒮",
					sscr: "𝓈",
					ssetmn: "∖",
					ssmile: "⌣",
					sstarf: "⋆",
					Star: "⋆",
					star: "☆",
					starf: "★",
					straightepsilon: "ϵ",
					straightphi: "ϕ",
					strns: "¯",
					sub: "⊂",
					Sub: "⋐",
					subdot: "⪽",
					subE: "⫅",
					sube: "⊆",
					subedot: "⫃",
					submult: "⫁",
					subnE: "⫋",
					subne: "⊊",
					subplus: "⪿",
					subrarr: "⥹",
					subset: "⊂",
					Subset: "⋐",
					subseteq: "⊆",
					subseteqq: "⫅",
					SubsetEqual: "⊆",
					subsetneq: "⊊",
					subsetneqq: "⫋",
					subsim: "⫇",
					subsub: "⫕",
					subsup: "⫓",
					succapprox: "⪸",
					succ: "≻",
					succcurlyeq: "≽",
					Succeeds: "≻",
					SucceedsEqual: "⪰",
					SucceedsSlantEqual: "≽",
					SucceedsTilde: "≿",
					succeq: "⪰",
					succnapprox: "⪺",
					succneqq: "⪶",
					succnsim: "⋩",
					succsim: "≿",
					SuchThat: "∋",
					sum: "∑",
					Sum: "∑",
					sung: "♪",
					sup1: "¹",
					sup2: "²",
					sup3: "³",
					sup: "⊃",
					Sup: "⋑",
					supdot: "⪾",
					supdsub: "⫘",
					supE: "⫆",
					supe: "⊇",
					supedot: "⫄",
					Superset: "⊃",
					SupersetEqual: "⊇",
					suphsol: "⟉",
					suphsub: "⫗",
					suplarr: "⥻",
					supmult: "⫂",
					supnE: "⫌",
					supne: "⊋",
					supplus: "⫀",
					supset: "⊃",
					Supset: "⋑",
					supseteq: "⊇",
					supseteqq: "⫆",
					supsetneq: "⊋",
					supsetneqq: "⫌",
					supsim: "⫈",
					supsub: "⫔",
					supsup: "⫖",
					swarhk: "⤦",
					swarr: "↙",
					swArr: "⇙",
					swarrow: "↙",
					swnwar: "⤪",
					szlig: "ß",
					Tab: "	",
					target: "⌖",
					Tau: "Τ",
					tau: "τ",
					tbrk: "⎴",
					Tcaron: "Ť",
					tcaron: "ť",
					Tcedil: "Ţ",
					tcedil: "ţ",
					Tcy: "Т",
					tcy: "т",
					tdot: "⃛",
					telrec: "⌕",
					Tfr: "𝔗",
					tfr: "𝔱",
					there4: "∴",
					therefore: "∴",
					Therefore: "∴",
					Theta: "Θ",
					theta: "θ",
					thetasym: "ϑ",
					thetav: "ϑ",
					thickapprox: "≈",
					thicksim: "∼",
					ThickSpace: "  ",
					ThinSpace: " ",
					thinsp: " ",
					thkap: "≈",
					thksim: "∼",
					THORN: "Þ",
					thorn: "þ",
					tilde: "˜",
					Tilde: "∼",
					TildeEqual: "≃",
					TildeFullEqual: "≅",
					TildeTilde: "≈",
					timesbar: "⨱",
					timesb: "⊠",
					times: "×",
					timesd: "⨰",
					tint: "∭",
					toea: "⤨",
					topbot: "⌶",
					topcir: "⫱",
					top: "⊤",
					Topf: "𝕋",
					topf: "𝕥",
					topfork: "⫚",
					tosa: "⤩",
					tprime: "‴",
					trade: "™",
					TRADE: "™",
					triangle: "▵",
					triangledown: "▿",
					triangleleft: "◃",
					trianglelefteq: "⊴",
					triangleq: "≜",
					triangleright: "▹",
					trianglerighteq: "⊵",
					tridot: "◬",
					trie: "≜",
					triminus: "⨺",
					TripleDot: "⃛",
					triplus: "⨹",
					trisb: "⧍",
					tritime: "⨻",
					trpezium: "⏢",
					Tscr: "𝒯",
					tscr: "𝓉",
					TScy: "Ц",
					tscy: "ц",
					TSHcy: "Ћ",
					tshcy: "ћ",
					Tstrok: "Ŧ",
					tstrok: "ŧ",
					twixt: "≬",
					twoheadleftarrow: "↞",
					twoheadrightarrow: "↠",
					Uacute: "Ú",
					uacute: "ú",
					uarr: "↑",
					Uarr: "↟",
					uArr: "⇑",
					Uarrocir: "⥉",
					Ubrcy: "Ў",
					ubrcy: "ў",
					Ubreve: "Ŭ",
					ubreve: "ŭ",
					Ucirc: "Û",
					ucirc: "û",
					Ucy: "У",
					ucy: "у",
					udarr: "⇅",
					Udblac: "Ű",
					udblac: "ű",
					udhar: "⥮",
					ufisht: "⥾",
					Ufr: "𝔘",
					ufr: "𝔲",
					Ugrave: "Ù",
					ugrave: "ù",
					uHar: "⥣",
					uharl: "↿",
					uharr: "↾",
					uhblk: "▀",
					ulcorn: "⌜",
					ulcorner: "⌜",
					ulcrop: "⌏",
					ultri: "◸",
					Umacr: "Ū",
					umacr: "ū",
					uml: "¨",
					UnderBar: "_",
					UnderBrace: "⏟",
					UnderBracket: "⎵",
					UnderParenthesis: "⏝",
					Union: "⋃",
					UnionPlus: "⊎",
					Uogon: "Ų",
					uogon: "ų",
					Uopf: "𝕌",
					uopf: "𝕦",
					UpArrowBar: "⤒",
					uparrow: "↑",
					UpArrow: "↑",
					Uparrow: "⇑",
					UpArrowDownArrow: "⇅",
					updownarrow: "↕",
					UpDownArrow: "↕",
					Updownarrow: "⇕",
					UpEquilibrium: "⥮",
					upharpoonleft: "↿",
					upharpoonright: "↾",
					uplus: "⊎",
					UpperLeftArrow: "↖",
					UpperRightArrow: "↗",
					upsi: "υ",
					Upsi: "ϒ",
					upsih: "ϒ",
					Upsilon: "Υ",
					upsilon: "υ",
					UpTeeArrow: "↥",
					UpTee: "⊥",
					upuparrows: "⇈",
					urcorn: "⌝",
					urcorner: "⌝",
					urcrop: "⌎",
					Uring: "Ů",
					uring: "ů",
					urtri: "◹",
					Uscr: "𝒰",
					uscr: "𝓊",
					utdot: "⋰",
					Utilde: "Ũ",
					utilde: "ũ",
					utri: "▵",
					utrif: "▴",
					uuarr: "⇈",
					Uuml: "Ü",
					uuml: "ü",
					uwangle: "⦧",
					vangrt: "⦜",
					varepsilon: "ϵ",
					varkappa: "ϰ",
					varnothing: "∅",
					varphi: "ϕ",
					varpi: "ϖ",
					varpropto: "∝",
					varr: "↕",
					vArr: "⇕",
					varrho: "ϱ",
					varsigma: "ς",
					varsubsetneq: "⊊︀",
					varsubsetneqq: "⫋︀",
					varsupsetneq: "⊋︀",
					varsupsetneqq: "⫌︀",
					vartheta: "ϑ",
					vartriangleleft: "⊲",
					vartriangleright: "⊳",
					vBar: "⫨",
					Vbar: "⫫",
					vBarv: "⫩",
					Vcy: "В",
					vcy: "в",
					vdash: "⊢",
					vDash: "⊨",
					Vdash: "⊩",
					VDash: "⊫",
					Vdashl: "⫦",
					veebar: "⊻",
					vee: "∨",
					Vee: "⋁",
					veeeq: "≚",
					vellip: "⋮",
					verbar: "|",
					Verbar: "‖",
					vert: "|",
					Vert: "‖",
					VerticalBar: "∣",
					VerticalLine: "|",
					VerticalSeparator: "❘",
					VerticalTilde: "≀",
					VeryThinSpace: " ",
					Vfr: "𝔙",
					vfr: "𝔳",
					vltri: "⊲",
					vnsub: "⊂⃒",
					vnsup: "⊃⃒",
					Vopf: "𝕍",
					vopf: "𝕧",
					vprop: "∝",
					vrtri: "⊳",
					Vscr: "𝒱",
					vscr: "𝓋",
					vsubnE: "⫋︀",
					vsubne: "⊊︀",
					vsupnE: "⫌︀",
					vsupne: "⊋︀",
					Vvdash: "⊪",
					vzigzag: "⦚",
					Wcirc: "Ŵ",
					wcirc: "ŵ",
					wedbar: "⩟",
					wedge: "∧",
					Wedge: "⋀",
					wedgeq: "≙",
					weierp: "℘",
					Wfr: "𝔚",
					wfr: "𝔴",
					Wopf: "𝕎",
					wopf: "𝕨",
					wp: "℘",
					wr: "≀",
					wreath: "≀",
					Wscr: "𝒲",
					wscr: "𝓌",
					xcap: "⋂",
					xcirc: "◯",
					xcup: "⋃",
					xdtri: "▽",
					Xfr: "𝔛",
					xfr: "𝔵",
					xharr: "⟷",
					xhArr: "⟺",
					Xi: "Ξ",
					xi: "ξ",
					xlarr: "⟵",
					xlArr: "⟸",
					xmap: "⟼",
					xnis: "⋻",
					xodot: "⨀",
					Xopf: "𝕏",
					xopf: "𝕩",
					xoplus: "⨁",
					xotime: "⨂",
					xrarr: "⟶",
					xrArr: "⟹",
					Xscr: "𝒳",
					xscr: "𝓍",
					xsqcup: "⨆",
					xuplus: "⨄",
					xutri: "△",
					xvee: "⋁",
					xwedge: "⋀",
					Yacute: "Ý",
					yacute: "ý",
					YAcy: "Я",
					yacy: "я",
					Ycirc: "Ŷ",
					ycirc: "ŷ",
					Ycy: "Ы",
					ycy: "ы",
					yen: "¥",
					Yfr: "𝔜",
					yfr: "𝔶",
					YIcy: "Ї",
					yicy: "ї",
					Yopf: "𝕐",
					yopf: "𝕪",
					Yscr: "𝒴",
					yscr: "𝓎",
					YUcy: "Ю",
					yucy: "ю",
					yuml: "ÿ",
					Yuml: "Ÿ",
					Zacute: "Ź",
					zacute: "ź",
					Zcaron: "Ž",
					zcaron: "ž",
					Zcy: "З",
					zcy: "з",
					Zdot: "Ż",
					zdot: "ż",
					zeetrf: "ℨ",
					ZeroWidthSpace: "​",
					Zeta: "Ζ",
					zeta: "ζ",
					zfr: "𝔷",
					Zfr: "ℨ",
					ZHcy: "Ж",
					zhcy: "ж",
					zigrarr: "⇝",
					zopf: "𝕫",
					Zopf: "ℤ",
					Zscr: "𝒵",
					zscr: "𝓏",
					zwj: "‍",
					zwnj: "‌"
				}
			}, {}],
			54: [function(e, r, t) {
				"use strict";

				function n(e) {
					var r = Array.prototype.slice.call(arguments, 1);
					return r.forEach(function(r) {
						r && Object.keys(r).forEach(function(t) {
							e[t] = r[t]
						})
					}), e
				}

				function s(e) {
					return Object.prototype.toString.call(e)
				}

				function o(e) {
					return "[object String]" === s(e)
				}

				function i(e) {
					return "[object Object]" === s(e)
				}

				function a(e) {
					return "[object RegExp]" === s(e)
				}

				function c(e) {
					return "[object Function]" === s(e)
				}

				function l(e) {
					return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
				}

				function u(e) {
					return Object.keys(e || {}).reduce(function(e, r) {
						return e || k.hasOwnProperty(r)
					}, !1)
				}

				function p(e) {
					e.__index__ = -1, e.__text_cache__ = ""
				}

				function h(e) {
					return function(r, t) {
						var n = r.slice(t);
						return e.test(n) ? n.match(e)[0].length : 0
					}
				}

				function f() {
					return function(e, r) {
						r.normalize(e)
					}
				}

				function d(r) {
					function t(e) {
						return e.replace("%TLDS%", s.src_tlds)
					}

					function n(e, r) {
						throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + r)
					}
					var s = r.re = e("./lib/re")(r.__opts__),
						u = r.__tlds__.slice();
					r.onCompile(), r.__tlds_replaced__ || u.push(v), u.push(s.src_xn), s.src_tlds = u.join("|"), s.email_fuzzy =
						RegExp(t(s.tpl_email_fuzzy), "i"), s.link_fuzzy = RegExp(t(s.tpl_link_fuzzy), "i"), s.link_no_ip_fuzzy =
						RegExp(t(s.tpl_link_no_ip_fuzzy), "i"), s.host_fuzzy_test = RegExp(t(s.tpl_host_fuzzy_test), "i");
					var d = [];
					r.__compiled__ = {}, Object.keys(r.__schemas__).forEach(function(e) {
						var t = r.__schemas__[e];
						if (null !== t) {
							var s = {
								validate: null,
								link: null
							};
							return r.__compiled__[e] = s, i(t) ? (a(t.validate) ? s.validate = h(t.validate) : c(t.validate) ? s.validate =
								t.validate : n(e, t), void(c(t.normalize) ? s.normalize = t.normalize : t.normalize ? n(e, t) : s.normalize =
									f())) : o(t) ? void d.push(e) : void n(e, t)
						}
					}), d.forEach(function(e) {
						r.__compiled__[r.__schemas__[e]] && (r.__compiled__[e].validate = r.__compiled__[r.__schemas__[e]].validate,
							r.__compiled__[e].normalize = r.__compiled__[r.__schemas__[e]].normalize)
					}), r.__compiled__[""] = {
						validate: null,
						normalize: f()
					};
					var m = Object.keys(r.__compiled__).filter(function(e) {
						return e.length > 0 && r.__compiled__[e]
					}).map(l).join("|");
					r.re.schema_test = RegExp("(^|(?!_)(?:[><]|" + s.src_ZPCc + "))(" + m + ")", "i"), r.re.schema_search =
						RegExp("(^|(?!_)(?:[><]|" + s.src_ZPCc + "))(" + m + ")", "ig"), r.re.pretest = RegExp("(" + r.re.schema_test
							.source + ")|(" + r.re.host_fuzzy_test.source + ")|@", "i"), p(r)
				}

				function m(e, r) {
					var t = e.__index__,
						n = e.__last_index__,
						s = e.__text_cache__.slice(t, n);
					this.schema = e.__schema__.toLowerCase(), this.index = t + r, this.lastIndex = n + r, this.raw = s, this.text =
						s, this.url = s
				}

				function _(e, r) {
					var t = new m(e, r);
					return e.__compiled__[t.schema].normalize(t, e), t
				}

				function g(e, r) {
					return this instanceof g ? (r || u(e) && (r = e, e = {}), this.__opts__ = n({}, k, r), this.__index__ = -1,
						this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, b, e),
						this.__compiled__ = {}, this.__tlds__ = x, this.__tlds_replaced__ = !1, this.re = {}, void d(this)) : new g(
						e, r)
				}
				var k = {
						fuzzyLink: !0,
						fuzzyEmail: !0,
						fuzzyIP: !1
					},
					b = {
						"http:": {
							validate: function(e, r, t) {
								var n = e.slice(r);
								return t.re.http || (t.re.http = new RegExp("^\\/\\/" + t.re.src_auth + t.re.src_host_port_strict + t.re
									.src_path, "i")), t.re.http.test(n) ? n.match(t.re.http)[0].length : 0
							}
						},
						"https:": "http:",
						"ftp:": "http:",
						"//": {
							validate: function(e, r, t) {
								var n = e.slice(r);
								return t.re.no_http || (t.re.no_http = new RegExp("^" + t.re.src_auth + "(?:localhost|(?:(?:" + t.re.src_domain +
									")\\.)+" + t.re.src_domain_root + ")" + t.re.src_port + t.re.src_host_terminator + t.re.src_path, "i"
								)), t.re.no_http.test(n) ? r >= 3 && ":" === e[r - 3] ? 0 : r >= 3 && "/" === e[r - 3] ? 0 : n.match(t.re
									.no_http)[0].length : 0
							}
						},
						"mailto:": {
							validate: function(e, r, t) {
								var n = e.slice(r);
								return t.re.mailto || (t.re.mailto = new RegExp("^" + t.re.src_email_name + "@" + t.re.src_host_strict,
									"i")), t.re.mailto.test(n) ? n.match(t.re.mailto)[0].length : 0
							}
						}
					},
					v =
					"a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
					x = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
				g.prototype.add = function(e, r) {
					return this.__schemas__[e] = r, d(this), this
				}, g.prototype.set = function(e) {
					return this.__opts__ = n(this.__opts__, e), this
				}, g.prototype.test = function(e) {
					if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
					var r, t, n, s, o, i, a, c, l;
					if (this.re.schema_test.test(e))
						for (a = this.re.schema_search, a.lastIndex = 0; null !== (r = a.exec(e));)
							if (s = this.testSchemaAt(e, r[2], a.lastIndex)) {
								this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length +
									s;
								break
							} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = e.search(this.re.host_fuzzy_test),
						c >= 0 && (this.__index__ < 0 || c < this.__index__) && null !== (t = e.match(this.__opts__.fuzzyIP ?
							this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = t.index + t[1].length, (this.__index__ < 0 || o <
							this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = t.index + t[0].length))
					), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = e.indexOf("@"), l >= 0 && null !== (n =
						e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, i = n.index + n[0].length, (this.__index__ <
						0 || o < this.__index__ || o === this.__index__ && i > this.__last_index__) && (this.__schema__ =
						"mailto:", this.__index__ = o, this.__last_index__ = i))), this.__index__ >= 0
				}, g.prototype.pretest = function(e) {
					return this.re.pretest.test(e)
				}, g.prototype.testSchemaAt = function(e, r, t) {
					return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(e, t, this) : 0
				}, g.prototype.match = function(e) {
					var r = 0,
						t = [];
					this.__index__ >= 0 && this.__text_cache__ === e && (t.push(_(this, r)), r = this.__last_index__);
					for (var n = r ? e.slice(r) : e; this.test(n);) t.push(_(this, r)), n = n.slice(this.__last_index__), r +=
						this.__last_index__;
					return t.length ? t : null
				}, g.prototype.tlds = function(e, r) {
					return e = Array.isArray(e) ? e : [e], r ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(
						e, r, t) {
						return e !== t[r - 1]
					}).reverse(), d(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, d(this), this)
				}, g.prototype.normalize = function(e) {
					e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url =
						"mailto:" + e.url)
				}, g.prototype.onCompile = function() {}, r.exports = g
			}, {
				"./lib/re": 55
			}],
			55: [function(e, r, t) {
				"use strict";
				r.exports = function(r) {
					var t = {};
					return t.src_Any = e("uc.micro/properties/Any/regex").source, t.src_Cc = e("uc.micro/categories/Cc/regex").source,
						t.src_Z = e("uc.micro/categories/Z/regex").source, t.src_P = e("uc.micro/categories/P/regex").source, t.src_ZPCc = [
							t.src_Z, t.src_P, t.src_Cc
						].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|"), t.src_pseudo_letter = "(?:(?!>|<|" + t.src_ZPCc +
						")" + t.src_Any + ")", t.src_ip4 =
						"(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth =
						"(?:(?:(?!" + t.src_ZCc + "|[@/]).)+@)?", t.src_port =
						"(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator =
						"(?=$|>|<|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" +
						t.src_ZCc + "|[()[\\]{}.,\"'?!\\-<>]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc +
						"|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc +
						"|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" +
						(r && r["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc +
						"|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',
						t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter +
						"{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter +
						"(?:-(?!-)|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" +
						t.src_domain + ")\\.)*" + t.src_domain_root + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" +
						t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain +
						")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy +
						t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict =
						t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy +
						t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test =
						"localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy =
						"(^|<|>|\\(|" + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy =
						"(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + t.src_ZPCc + "))((?![$+<=>^`|])" + t.tpl_host_port_fuzzy_strict + t.src_path +
						")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|]|" + t.src_ZPCc + "))((?![$+<=>^`|])" + t.tpl_host_port_no_ip_fuzzy_strict +
						t.src_path + ")", t
				}
			}, {
				"uc.micro/categories/Cc/regex": 61,
				"uc.micro/categories/P/regex": 63,
				"uc.micro/categories/Z/regex": 64,
				"uc.micro/properties/Any/regex": 66
			}],
			56: [function(e, r, t) {
				"use strict";

				function n(e) {
					var r, t, n = o[e];
					if (n) return n;
					for (n = o[e] = [], r = 0; r < 128; r++) t = String.fromCharCode(r), n.push(t);
					for (r = 0; r < e.length; r++) t = e.charCodeAt(r), n[t] = "%" + ("0" + t.toString(16).toUpperCase()).slice(
						-2);
					return n
				}

				function s(e, r) {
					var t;
					return "string" != typeof r && (r = s.defaultChars), t = n(r), e.replace(/(%[a-f0-9]{2})+/gi, function(e) {
						var r, n, s, o, i, a, c, l = "";
						for (r = 0, n = e.length; r < n; r += 3) s = parseInt(e.slice(r + 1, r + 3), 16), s < 128 ? l += t[s] :
							192 === (224 & s) && r + 3 < n && (o = parseInt(e.slice(r + 4, r + 6), 16), 128 === (192 & o)) ? (c = s <<
								6 & 1984 | 63 & o, l += c < 128 ? "��" : String.fromCharCode(c), r += 3) : 224 === (240 & s) && r + 6 <
							n && (o = parseInt(e.slice(r + 4, r + 6), 16), i = parseInt(e.slice(r + 7, r + 9), 16), 128 === (192 & o) &&
								128 === (192 & i)) ? (c = s << 12 & 61440 | o << 6 & 4032 | 63 & i, l += c < 2048 || c >= 55296 && c <=
								57343 ? "���" : String.fromCharCode(c), r += 6) : 240 === (248 & s) && r + 9 < n && (o = parseInt(e.slice(
									r + 4, r + 6), 16), i = parseInt(e.slice(r + 7, r + 9), 16), a = parseInt(e.slice(r + 10, r + 12), 16),
								128 === (192 & o) && 128 === (192 & i) && 128 === (192 & a)) ? (c = s << 18 & 1835008 | o << 12 &
								258048 | i << 6 & 4032 | 63 & a, c < 65536 || c > 1114111 ? l += "����" : (c -= 65536, l += String.fromCharCode(
									55296 + (c >> 10), 56320 + (1023 & c))), r += 9) : l += "�";
						return l
					})
				}
				var o = {};
				s.defaultChars = ";/?:@&=+$,#", s.componentChars = "", r.exports = s
			}, {}],
			57: [function(e, r, t) {
				"use strict";

				function n(e) {
					var r, t, n = o[e];
					if (n) return n;
					for (n = o[e] = [], r = 0; r < 128; r++) t = String.fromCharCode(r), /^[0-9a-z]$/i.test(t) ? n.push(t) : n.push(
						"%" + ("0" + r.toString(16).toUpperCase()).slice(-2));
					for (r = 0; r < e.length; r++) n[e.charCodeAt(r)] = e[r];
					return n
				}

				function s(e, r, t) {
					var o, i, a, c, l, u = "";
					for ("string" != typeof r && (t = r, r = s.defaultChars), "undefined" == typeof t && (t = !0), l = n(r), o =
						0, i = e.length; o < i; o++)
						if (a = e.charCodeAt(o), t && 37 === a && o + 2 < i && /^[0-9a-f]{2}$/i.test(e.slice(o + 1, o + 3))) u += e
							.slice(o, o + 3), o += 2;
						else if (a < 128) u += l[a];
					else if (a >= 55296 && a <= 57343) {
						if (a >= 55296 && a <= 56319 && o + 1 < i && (c = e.charCodeAt(o + 1), c >= 56320 && c <= 57343)) {
							u += encodeURIComponent(e[o] + e[o + 1]), o++;
							continue
						}
						u += "%EF%BF%BD"
					} else u += encodeURIComponent(e[o]);
					return u
				}
				var o = {};
				s.defaultChars = ";/?:@&=+$,-_.!~*'()#", s.componentChars = "-_.!~*'()", r.exports = s
			}, {}],
			58: [function(e, r, t) {
				"use strict";
				r.exports = function(e) {
					var r = "";
					return r += e.protocol || "", r += e.slashes ? "//" : "", r += e.auth ? e.auth + "@" : "", r += e.hostname &&
						e.hostname.indexOf(":") !== -1 ? "[" + e.hostname + "]" : e.hostname || "", r += e.port ? ":" + e.port :
						"", r += e.pathname || "", r += e.search || "", r += e.hash || ""
				}
			}, {}],
			59: [function(e, r, t) {
				"use strict";
				r.exports.encode = e("./encode"), r.exports.decode = e("./decode"), r.exports.format = e("./format"), r.exports
					.parse = e("./parse")
			}, {
				"./decode": 56,
				"./encode": 57,
				"./format": 58,
				"./parse": 60
			}],
			60: [function(e, r, t) {
				"use strict";

				function n() {
					this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash =
						null, this.search = null, this.pathname = null
				}

				function s(e, r) {
					if (e && e instanceof n) return e;
					var t = new n;
					return t.parse(e, r), t
				}
				var o = /^([a-z0-9.+-]+:)/i,
					i = /:[0-9]*$/,
					a = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
					c = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
					l = ["{", "}", "|", "\\", "^", "`"].concat(c),
					u = ["'"].concat(l),
					p = ["%", "/", "?", ";", "#"].concat(u),
					h = ["/", "?", "#"],
					f = 255,
					d = /^[+a-z0-9A-Z_-]{0,63}$/,
					m = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
					_ = {
						javascript: !0,
						"javascript:": !0
					},
					g = {
						http: !0,
						https: !0,
						ftp: !0,
						gopher: !0,
						file: !0,
						"http:": !0,
						"https:": !0,
						"ftp:": !0,
						"gopher:": !0,
						"file:": !0
					};
				n.prototype.parse = function(e, r) {
					var t, n, s, i, c, l = e;
					if (l = l.trim(), !r && 1 === e.split("#").length) {
						var u = a.exec(l);
						if (u) return this.pathname = u[1], u[2] && (this.search = u[2]), this
					}
					var k = o.exec(l);
					if (k && (k = k[0], s = k.toLowerCase(), this.protocol = k, l = l.substr(k.length)), (r || k || l.match(
							/^\/\/[^@\/]+@[^@\/]+/)) && (c = "//" === l.substr(0, 2), !c || k && _[k] || (l = l.substr(2), this.slashes = !
							0)), !_[k] && (c || k && !g[k])) {
						var b = -1;
						for (t = 0; t < h.length; t++) i = l.indexOf(h[t]), i !== -1 && (b === -1 || i < b) && (b = i);
						var v, x;
						for (x = b === -1 ? l.lastIndexOf("@") : l.lastIndexOf("@", b), x !== -1 && (v = l.slice(0, x), l = l.slice(
								x + 1), this.auth = v), b = -1, t = 0; t < p.length; t++) i = l.indexOf(p[t]), i !== -1 && (b === -1 ||
							i < b) && (b = i);
						b === -1 && (b = l.length), ":" === l[b - 1] && b--;
						var y = l.slice(0, b);
						l = l.slice(b), this.parseHost(y), this.hostname = this.hostname || "";
						var C = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
						if (!C) {
							var A = this.hostname.split(/\./);
							for (t = 0, n = A.length; t < n; t++) {
								var w = A[t];
								if (w && !w.match(d)) {
									for (var D = "", q = 0, E = w.length; q < E; q++) D += w.charCodeAt(q) > 127 ? "x" : w[q];
									if (!D.match(d)) {
										var S = A.slice(0, t),
											F = A.slice(t + 1),
											z = w.match(m);
										z && (S.push(z[1]), F.unshift(z[2])), F.length && (l = F.join(".") + l), this.hostname = S.join(".");
										break
									}
								}
							}
						}
						this.hostname.length > f && (this.hostname = ""), C && (this.hostname = this.hostname.substr(1, this.hostname
							.length - 2))
					}
					var L = l.indexOf("#");
					L !== -1 && (this.hash = l.substr(L), l = l.slice(0, L));
					var T = l.indexOf("?");
					return T !== -1 && (this.search = l.substr(T), l = l.slice(0, T)), l && (this.pathname = l), g[s] && this.hostname &&
						!this.pathname && (this.pathname = ""), this
				}, n.prototype.parseHost = function(e) {
					var r = i.exec(e);
					r && (r = r[0], ":" !== r && (this.port = r.substr(1)), e = e.substr(0, e.length - r.length)), e && (this.hostname =
						e)
				}, r.exports = s
			}, {}],
			61: [function(e, r, t) {
				r.exports = /[\0-\x1F\x7F-\x9F]/
			}, {}],
			62: [function(e, r, t) {
				r.exports =
					/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/
			}, {}],
			63: [function(e, r, t) {
				r.exports =
					/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/
			}, {}],
			64: [function(e, r, t) {
				r.exports = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/
			}, {}],
			65: [function(e, r, t) {
				r.exports.Any = e("./properties/Any/regex"), r.exports.Cc = e("./categories/Cc/regex"), r.exports.Cf = e(
					"./categories/Cf/regex"), r.exports.P = e("./categories/P/regex"), r.exports.Z = e("./categories/Z/regex")
			}, {
				"./categories/Cc/regex": 61,
				"./categories/Cf/regex": 62,
				"./categories/P/regex": 63,
				"./categories/Z/regex": 64,
				"./properties/Any/regex": 66
			}],
			66: [function(e, r, t) {
				r.exports =
					/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
			}, {}],
			67: [function(e, r, t) {
				"use strict";
				r.exports = e("./lib/")
			}, {
				"./lib/": 9
			}]
		}, {}, [67])(67)
	});
	define("Core/KnockoutMarkdownBinding", ["markdown-it-sanitizer", "markdown-it"], function(MarkdownItSanitizer,
		MarkdownIt) {
		"use strict";
		var htmlTagRegex = /<html(.|\s)*>(.|\s)*<\/html>/im;
		var md = new MarkdownIt({
			html: true,
			linkify: true
		});
		md.use(MarkdownItSanitizer, {
			imageClass: "",
			removeUnbalanced: false,
			removeUnknown: false
		});
		var KnockoutMarkdownBinding = {
			register: function(Knockout) {
				Knockout.bindingHandlers.markdown = {
					init: function() {
						return {
							controlsDescendantBindings: true
						}
					},
					update: function(element, valueAccessor) {
						while (element.firstChild) {
							Knockout.removeNode(element.firstChild)
						}
						var rawText = Knockout.unwrap(valueAccessor());
						var html;
						if (htmlTagRegex.test(rawText)) {
							html = rawText
						} else {
							html = md.render(rawText)
						}
						var nodes = Knockout.utils.parseHtmlFragment(html, element);
						element.className = element.className + " markdown";
						for (var i = 0; i < nodes.length; ++i) {
							var node = nodes[i];
							setAnchorTargets(node);
							element.appendChild(node)
						}
					}
				}
			}
		};

		function setAnchorTargets(element) {
			if (element instanceof HTMLAnchorElement) {
				element.target = "_blank"
			}
			if (element.childNodes && element.childNodes.length > 0) {
				for (var i = 0; i < element.childNodes.length; ++i) {
					setAnchorTargets(element.childNodes[i])
				}
			}
		}
		return KnockoutMarkdownBinding
	});
	! function(a, b, c, d) {
		"use strict";

		function e(a, b, c) {
			return setTimeout(j(a, c), b)
		}

		function f(a, b, c) {
			return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
		}

		function g(a, b, c) {
			var e;
			if (a)
				if (a.forEach) a.forEach(b, c);
				else if (a.length !== d)
				for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
			else
				for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
		}

		function h(b, c, d) {
			var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
			return function() {
				var c = new Error("get-stack-trace"),
					d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(
						/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					f = a.console && (a.console.warn || a.console.log);
				return f && f.call(a.console, e, d), b.apply(this, arguments)
			}
		}

		function i(a, b, c) {
			var d, e = b.prototype;
			d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
		}

		function j(a, b) {
			return function() {
				return a.apply(b, arguments)
			}
		}

		function k(a, b) {
			return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
		}

		function l(a, b) {
			return a === d ? b : a
		}

		function m(a, b, c) {
			g(q(b), function(b) {
				a.addEventListener(b, c, !1)
			})
		}

		function n(a, b, c) {
			g(q(b), function(b) {
				a.removeEventListener(b, c, !1)
			})
		}

		function o(a, b) {
			for (; a;) {
				if (a == b) return !0;
				a = a.parentNode
			}
			return !1
		}

		function p(a, b) {
			return a.indexOf(b) > -1
		}

		function q(a) {
			return a.trim().split(/\s+/g)
		}

		function r(a, b, c) {
			if (a.indexOf && !c) return a.indexOf(b);
			for (var d = 0; d < a.length;) {
				if (c && a[d][c] == b || !c && a[d] === b) return d;
				d++
			}
			return -1
		}

		function s(a) {
			return Array.prototype.slice.call(a, 0)
		}

		function t(a, b, c) {
			for (var d = [], e = [], f = 0; f < a.length;) {
				var g = b ? a[f][b] : a[f];
				r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
			}
			return c && (d = b ? d.sort(function(a, c) {
				return a[b] > c[b]
			}) : d.sort()), d
		}

		function u(a, b) {
			for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
				if (c = ma[g], e = c ? c + f : b, e in a) return e;
				g++
			}
			return d
		}

		function v() {
			return ua++
		}

		function w(b) {
			var c = b.ownerDocument || b;
			return c.defaultView || c.parentWindow || a
		}

		function x(a, b) {
			var c = this;
			this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler =
				function(b) {
					k(a.options.enable, [a]) && c.handler(b)
				}, this.init()
		}

		function y(a) {
			var b, c = a.options.inputClass;
			return new(b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
		}

		function z(a, b, c) {
			var d = c.pointers.length,
				e = c.changedPointers.length,
				f = b & Ea && d - e === 0,
				g = b & (Ga | Ha) && d - e === 0;
			c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(
				c), a.session.prevInput = c
		}

		function A(a, b) {
			var c = a.session,
				d = b.pointers,
				e = d.length;
			c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !
				1);
			var f = c.firstInput,
				g = c.firstMultiple,
				h = g ? g.center : f.center,
				i = b.center = E(d);
			b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection =
				G(b.deltaX, b.deltaY);
			var j = F(b.deltaTime, b.deltaX, b.deltaY);
			b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ?
				K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput
				.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
			var k = a.element;
			o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
		}

		function B(a, b) {
			var c = b.center,
				d = a.offsetDelta || {},
				e = a.prevDelta || {},
				f = a.prevInput || {};
			b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
				x: f.deltaX || 0,
				y: f.deltaY || 0
			}, d = a.offsetDelta = {
				x: c.x,
				y: c.y
			}), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
		}

		function C(a, b) {
			var c, e, f, g, h = a.lastInterval || b,
				i = b.timeStamp - h.timeStamp;
			if (b.eventType != Ha && (i > Da || h.velocity === d)) {
				var j = b.deltaX - h.deltaX,
					k = b.deltaY - h.deltaY,
					l = F(i, j, k);
				e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
			} else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
			b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
		}

		function D(a) {
			for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
				clientX: pa(a.pointers[c].clientX),
				clientY: pa(a.pointers[c].clientY)
			}, c++;
			return {
				timeStamp: ra(),
				pointers: b,
				center: E(b),
				deltaX: a.deltaX,
				deltaY: a.deltaY
			}
		}

		function E(a) {
			var b = a.length;
			if (1 === b) return {
				x: pa(a[0].clientX),
				y: pa(a[0].clientY)
			};
			for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
			return {
				x: pa(c / b),
				y: pa(d / b)
			}
		}

		function F(a, b, c) {
			return {
				x: b / a || 0,
				y: c / a || 0
			}
		}

		function G(a, b) {
			return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
		}

		function H(a, b, c) {
			c || (c = Qa);
			var d = b[c[0]] - a[c[0]],
				e = b[c[1]] - a[c[1]];
			return Math.sqrt(d * d + e * e)
		}

		function I(a, b, c) {
			c || (c = Qa);
			var d = b[c[0]] - a[c[0]],
				e = b[c[1]] - a[c[1]];
			return 180 * Math.atan2(e, d) / Math.PI
		}

		function J(a, b) {
			return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
		}

		function K(a, b) {
			return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
		}

		function L() {
			this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
		}

		function M() {
			this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}

		function N() {
			this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
		}

		function O(a, b) {
			var c = s(a.touches),
				d = s(a.changedTouches);
			return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
		}

		function P() {
			this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
		}

		function Q(a, b) {
			var c = s(a.touches),
				d = this.targetIds;
			if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
			var e, f, g = s(a.changedTouches),
				h = [],
				i = this.target;
			if (f = c.filter(function(a) {
					return o(a.target, i)
				}), b === Ea)
				for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
			for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
			return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
		}

		function R() {
			x.apply(this, arguments);
			var a = j(this.handler, this);
			this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
		}

		function S(a, b) {
			a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
		}

		function T(a) {
			var b = a.changedPointers[0];
			if (b.identifier === this.primaryTouch) {
				var c = {
					x: b.clientX,
					y: b.clientY
				};
				this.lastTouches.push(c);
				var d = this.lastTouches,
					e = function() {
						var a = d.indexOf(c);
						a > -1 && d.splice(a, 1)
					};
				setTimeout(e, cb)
			}
		}

		function U(a) {
			for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
				var e = this.lastTouches[d],
					f = Math.abs(b - e.x),
					g = Math.abs(c - e.y);
				if (db >= f && db >= g) return !0
			}
			return !1
		}

		function V(a, b) {
			this.manager = a, this.set(b)
		}

		function W(a) {
			if (p(a, jb)) return jb;
			var b = p(a, kb),
				c = p(a, lb);
			return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
		}

		function X() {
			if (!fb) return !1;
			var b = {},
				c = a.CSS && a.CSS.supports;
			return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(d) {
				b[d] = c ? a.CSS.supports("touch-action", d) : !0
			}), b
		}

		function Y(a) {
			this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options
				.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
		}

		function Z(a) {
			return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
		}

		function $(a) {
			return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
		}

		function _(a, b) {
			var c = b.manager;
			return c ? c.get(a) : a
		}

		function aa() {
			Y.apply(this, arguments)
		}

		function ba() {
			aa.apply(this, arguments), this.pX = null, this.pY = null
		}

		function ca() {
			aa.apply(this, arguments)
		}

		function da() {
			Y.apply(this, arguments), this._timer = null, this._input = null
		}

		function ea() {
			aa.apply(this, arguments)
		}

		function fa() {
			aa.apply(this, arguments)
		}

		function ga() {
			Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count =
				0
		}

		function ha(a, b) {
			return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
		}

		function ia(a, b) {
			this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {},
				this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction =
				new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function(a) {
					var b = this.add(new a[0](a[1]));
					a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
				}, this)
		}

		function ja(a, b) {
			var c = a.element;
			if (c.style) {
				var d;
				g(a.options.cssProps, function(e, f) {
					d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
				}), b || (a.oldCssProps = {})
			}
		}

		function ka(a, c) {
			var d = b.createEvent("Event");
			d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
		}
		var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
			na = b.createElement("div"),
			oa = "function",
			pa = Math.round,
			qa = Math.abs,
			ra = Date.now;
		la = "function" != typeof Object.assign ? function(a) {
			if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
			for (var b = Object(a), c = 1; c < arguments.length; c++) {
				var e = arguments[c];
				if (e !== d && null !== e)
					for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
			}
			return b
		} : Object.assign;
		var sa = h(function(a, b, c) {
				for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
				return a
			}, "extend", "Use `assign`."),
			ta = h(function(a, b) {
				return sa(a, b, !0)
			}, "merge", "Use `assign`."),
			ua = 1,
			va = /mobile|tablet|ip(ad|hone|od)|android/i,
			wa = "ontouchstart" in a,
			xa = u(a, "PointerEvent") !== d,
			ya = wa && va.test(navigator.userAgent),
			za = "touch",
			Aa = "pen",
			Ba = "mouse",
			Ca = "kinect",
			Da = 25,
			Ea = 1,
			Fa = 2,
			Ga = 4,
			Ha = 8,
			Ia = 1,
			Ja = 2,
			Ka = 4,
			La = 8,
			Ma = 16,
			Na = Ja | Ka,
			Oa = La | Ma,
			Pa = Na | Oa,
			Qa = ["x", "y"],
			Ra = ["clientX", "clientY"];
		x.prototype = {
			handler: function() {},
			init: function() {
				this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler),
					this.evWin && m(w(this.element), this.evWin, this.domHandler)
			},
			destroy: function() {
				this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler),
					this.evWin && n(w(this.element), this.evWin, this.domHandler)
			}
		};
		var Sa = {
				mousedown: Ea,
				mousemove: Fa,
				mouseup: Ga
			},
			Ta = "mousedown",
			Ua = "mousemove mouseup";
		i(L, x, {
			handler: function(a) {
				var b = Sa[a.type];
				b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga &&
					(this.pressed = !1), this.callback(this.manager, b, {
						pointers: [a],
						changedPointers: [a],
						pointerType: Ba,
						srcEvent: a
					}))
			}
		});
		var Va = {
				pointerdown: Ea,
				pointermove: Fa,
				pointerup: Ga,
				pointercancel: Ha,
				pointerout: Ha
			},
			Wa = {
				2: za,
				3: Aa,
				4: Ba,
				5: Ca
			},
			Xa = "pointerdown",
			Ya = "pointermove pointerup pointercancel";
		a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M,
			x, {
				handler: function(a) {
					var b = this.store,
						c = !1,
						d = a.type.toLowerCase().replace("ms", ""),
						e = Va[d],
						f = Wa[a.pointerType] || a.pointerType,
						g = f == za,
						h = r(b, a.pointerId, "pointerId");
					e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h ||
						(b[h] = a, this.callback(this.manager, e, {
							pointers: b,
							changedPointers: [a],
							pointerType: f,
							srcEvent: a
						}), c && b.splice(h, 1))
				}
			});
		var Za = {
				touchstart: Ea,
				touchmove: Fa,
				touchend: Ga,
				touchcancel: Ha
			},
			$a = "touchstart",
			_a = "touchstart touchmove touchend touchcancel";
		i(N, x, {
			handler: function(a) {
				var b = Za[a.type];
				if (b === Ea && (this.started = !0), this.started) {
					var c = O.call(this, a, b);
					b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
						pointers: c[0],
						changedPointers: c[1],
						pointerType: za,
						srcEvent: a
					})
				}
			}
		});
		var ab = {
				touchstart: Ea,
				touchmove: Fa,
				touchend: Ga,
				touchcancel: Ha
			},
			bb = "touchstart touchmove touchend touchcancel";
		i(P, x, {
			handler: function(a) {
				var b = ab[a.type],
					c = Q.call(this, a, b);
				c && this.callback(this.manager, b, {
					pointers: c[0],
					changedPointers: c[1],
					pointerType: za,
					srcEvent: a
				})
			}
		});
		var cb = 2500,
			db = 25;
		i(R, x, {
			handler: function(a, b, c) {
				var d = c.pointerType == za,
					e = c.pointerType == Ba;
				if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
					if (d) S.call(this, b, c);
					else if (e && U.call(this, c)) return;
					this.callback(a, b, c)
				}
			},
			destroy: function() {
				this.touch.destroy(), this.mouse.destroy()
			}
		});
		var eb = u(na.style, "touchAction"),
			fb = eb !== d,
			gb = "compute",
			hb = "auto",
			ib = "manipulation",
			jb = "none",
			kb = "pan-x",
			lb = "pan-y",
			mb = X();
		V.prototype = {
			set: function(a) {
				a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] =
					a), this.actions = a.toLowerCase().trim()
			},
			update: function() {
				this.set(this.manager.options.touchAction)
			},
			compute: function() {
				var a = [];
				return g(this.manager.recognizers, function(b) {
					k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
				}), W(a.join(" "))
			},
			preventDefaults: function(a) {
				var b = a.srcEvent,
					c = a.offsetDirection;
				if (this.manager.session.prevented) return void b.preventDefault();
				var d = this.actions,
					e = p(d, jb) && !mb[jb],
					f = p(d, lb) && !mb[lb],
					g = p(d, kb) && !mb[kb];
				if (e) {
					var h = 1 === a.pointers.length,
						i = a.distance < 2,
						j = a.deltaTime < 250;
					if (h && i && j) return
				}
				return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
			},
			preventSrc: function(a) {
				this.manager.session.prevented = !0, a.preventDefault()
			}
		};
		var nb = 1,
			ob = 2,
			pb = 4,
			qb = 8,
			rb = qb,
			sb = 16,
			tb = 32;
		Y.prototype = {
			defaults: {},
			set: function(a) {
				return la(this.options, a), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function(a) {
				if (f(a, "recognizeWith", this)) return this;
				var b = this.simultaneous;
				return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
			},
			dropRecognizeWith: function(a) {
				return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
			},
			requireFailure: function(a) {
				if (f(a, "requireFailure", this)) return this;
				var b = this.requireFail;
				return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
			},
			dropRequireFailure: function(a) {
				if (f(a, "dropRequireFailure", this)) return this;
				a = _(a, this);
				var b = r(this.requireFail, a);
				return b > -1 && this.requireFail.splice(b, 1), this
			},
			hasRequireFailures: function() {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function(a) {
				return !!this.simultaneous[a.id]
			},
			emit: function(a) {
				function b(b) {
					c.manager.emit(b, a)
				}
				var c = this,
					d = this.state;
				qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(
					c.options.event + Z(d))
			},
			tryEmit: function(a) {
				return this.canEmit() ? this.emit(a) : void(this.state = tb)
			},
			canEmit: function() {
				for (var a = 0; a < this.requireFail.length;) {
					if (!(this.requireFail[a].state & (tb | nb))) return !1;
					a++
				}
				return !0
			},
			recognize: function(a) {
				var b = la({}, a);
				return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(
					b), void(this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void(this.state = tb))
			},
			process: function(a) {},
			getTouchAction: function() {},
			reset: function() {}
		}, i(aa, Y, {
			defaults: {
				pointers: 1
			},
			attrTest: function(a) {
				var b = this.options.pointers;
				return 0 === b || a.pointers.length === b
			},
			process: function(a) {
				var b = this.state,
					c = a.eventType,
					d = b & (ob | pb),
					e = this.attrTest(a);
				return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
			}
		}), i(ba, aa, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: Pa
			},
			getTouchAction: function() {
				var a = this.options.direction,
					b = [];
				return a & Na && b.push(lb), a & Oa && b.push(kb), b
			},
			directionTest: function(a) {
				var b = this.options,
					c = !0,
					d = a.distance,
					e = a.direction,
					f = a.deltaX,
					g = a.deltaY;
				return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(
						a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e,
					c && d > b.threshold && e & b.direction
			},
			attrTest: function(a) {
				return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
			},
			emit: function(a) {
				this.pX = a.deltaX, this.pY = a.deltaY;
				var b = $(a.direction);
				b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
			}
		}), i(ca, aa, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [jb]
			},
			attrTest: function(a) {
				return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
			},
			emit: function(a) {
				if (1 !== a.scale) {
					var b = a.scale < 1 ? "in" : "out";
					a.additionalEvent = this.options.event + b
				}
				this._super.emit.call(this, a)
			}
		}), i(da, Y, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function() {
				return [hb]
			},
			process: function(a) {
				var b = this.options,
					c = a.pointers.length === b.pointers,
					d = a.distance < b.threshold,
					f = a.deltaTime > b.time;
				if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
				else if (a.eventType & Ea) this.reset(), this._timer = e(function() {
					this.state = rb, this.tryEmit()
				}, b.time, this);
				else if (a.eventType & Ga) return rb;
				return tb
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function(a) {
				this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp =
					ra(), this.manager.emit(this.options.event, this._input)))
			}
		}), i(ea, aa, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function() {
				return [jb]
			},
			attrTest: function(a) {
				return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
			}
		}), i(fa, aa, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: Na | Oa,
				pointers: 1
			},
			getTouchAction: function() {
				return ba.prototype.getTouchAction.call(this)
			},
			attrTest: function(a) {
				var b, c = this.options.direction;
				return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY),
					this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers ==
					this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
			},
			emit: function(a) {
				var b = $(a.offsetDirection);
				b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
			}
		}), i(ga, Y, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function() {
				return [ib]
			},
			process: function(a) {
				var b = this.options,
					c = a.pointers.length === b.pointers,
					d = a.distance < b.threshold,
					f = a.deltaTime < b.time;
				if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
				if (d && f && c) {
					if (a.eventType != Ga) return this.failTimeout();
					var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
						h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
					this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
					var i = this.count % b.taps;
					if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function() {
						this.state = rb, this.tryEmit()
					}, b.interval, this), ob) : rb
				}
				return tb
			},
			failTimeout: function() {
				return this._timer = e(function() {
					this.state = tb
				}, this.options.interval, this), tb
			},
			reset: function() {
				clearTimeout(this._timer)
			},
			emit: function() {
				this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		}), ha.VERSION = "2.0.7", ha.defaults = {
			domEvents: !1,
			touchAction: gb,
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[ea, {
					enable: !1
				}],
				[ca, {
						enable: !1
					},
					["rotate"]
				],
				[fa, {
					direction: Na
				}],
				[ba, {
						direction: Na
					},
					["swipe"]
				],
				[ga],
				[ga, {
						event: "doubletap",
						taps: 2
					},
					["tap"]
				],
				[da]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		};
		var ub = 1,
			vb = 2;
		ia.prototype = {
			set: function(a) {
				return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(),
					this.input.target = a.inputTarget, this.input.init()), this
			},
			stop: function(a) {
				this.session.stopped = a ? vb : ub
			},
			recognize: function(a) {
				var b = this.session;
				if (!b.stopped) {
					this.touchAction.preventDefaults(a);
					var c, d = this.recognizers,
						e = b.curRecognizer;
					(!e || e && e.state & rb) && (e = b.curRecognizer = null);
					for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() :
						c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
				}
			},
			get: function(a) {
				if (a instanceof Y) return a;
				for (var b = this.recognizers, c = 0; c < b.length; c++)
					if (b[c].options.event == a) return b[c];
				return null
			},
			add: function(a) {
				if (f(a, "add", this)) return this;
				var b = this.get(a.options.event);
				return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
			},
			remove: function(a) {
				if (f(a, "remove", this)) return this;
				if (a = this.get(a)) {
					var b = this.recognizers,
						c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
				}
				return this
			},
			on: function(a, b) {
				if (a !== d && b !== d) {
					var c = this.handlers;
					return g(q(a), function(a) {
						c[a] = c[a] || [], c[a].push(b)
					}), this
				}
			},
			off: function(a, b) {
				if (a !== d) {
					var c = this.handlers;
					return g(q(a), function(a) {
						b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
					}), this
				}
			},
			emit: function(a, b) {
				this.options.domEvents && ka(a, b);
				var c = this.handlers[a] && this.handlers[a].slice();
				if (c && c.length) {
					b.type = a, b.preventDefault = function() {
						b.srcEvent.preventDefault()
					};
					for (var d = 0; d < c.length;) c[d](b), d++
				}
			},
			destroy: function() {
				this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		}, la(ha, {
			INPUT_START: Ea,
			INPUT_MOVE: Fa,
			INPUT_END: Ga,
			INPUT_CANCEL: Ha,
			STATE_POSSIBLE: nb,
			STATE_BEGAN: ob,
			STATE_CHANGED: pb,
			STATE_ENDED: qb,
			STATE_RECOGNIZED: rb,
			STATE_CANCELLED: sb,
			STATE_FAILED: tb,
			DIRECTION_NONE: Ia,
			DIRECTION_LEFT: Ja,
			DIRECTION_RIGHT: Ka,
			DIRECTION_UP: La,
			DIRECTION_DOWN: Ma,
			DIRECTION_HORIZONTAL: Na,
			DIRECTION_VERTICAL: Oa,
			DIRECTION_ALL: Pa,
			Manager: ia,
			Input: x,
			TouchAction: V,
			TouchInput: P,
			MouseInput: L,
			PointerEventInput: M,
			TouchMouseInput: R,
			SingleTouchInput: N,
			Recognizer: Y,
			AttrRecognizer: aa,
			Tap: ga,
			Pan: ba,
			Swipe: fa,
			Pinch: ca,
			Rotate: ea,
			Press: da,
			on: m,
			off: n,
			each: g,
			merge: ta,
			extend: sa,
			assign: la,
			inherit: i,
			bindFn: j,
			prefixed: u
		});
		var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
		wb.Hammer = ha, "function" == typeof define && define.amd ? define("Hammer", [], function() {
			return ha
		}) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
	}(window, document, "Hammer");
	define("Core/KnockoutHammerBinding", ["KnockoutES5", "Hammer"], function(Knockout, Hammer) {
		"use strict";
		var KnockoutHammerBinding = {
			register: function(Knockout) {
				Knockout.bindingHandlers.swipeLeft = {
					init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
						var f = Knockout.unwrap(valueAccessor());
						new Hammer(element).on("swipeleft", function(e) {
							var viewModel = bindingContext.$data;
							f.apply(viewModel, arguments)
						})
					}
				};
				Knockout.bindingHandlers.swipeRight = {
					init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
						var f = Knockout.unwrap(valueAccessor());
						new Hammer(element).on("swiperight", function(e) {
							var viewModel = bindingContext.$data;
							f.apply(viewModel, arguments)
						})
					}
				}
			}
		};
		return KnockoutHammerBinding
	});
	define("Core/registerKnockoutBindings", ["Cesium/Widgets/SvgPathBindingHandler", "KnockoutES5",
		"Core/KnockoutMarkdownBinding", "Core/KnockoutHammerBinding"
	], function(SvgPathBindingHandler, Knockout, KnockoutMarkdownBinding, KnockoutHammerBinding) {
		"use strict";
		var registerKnockoutBindings = function() {
			SvgPathBindingHandler.register(Knockout);
			KnockoutMarkdownBinding.register(Knockout);
			KnockoutHammerBinding.register(Knockout);
			Knockout.bindingHandlers.embeddedComponent = {
				init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
					var component = Knockout.unwrap(valueAccessor());
					component.show(element);
					return {
						controlsDescendantBindings: true
					}
				},
				update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {}
			}
		};
		return registerKnockoutBindings
	});
	define("Core/createFragmentFromTemplate", [], function() {
		"use strict";
		var createFragmentFromTemplate = function(htmlString) {
			var holder = document.createElement("div");
			holder.innerHTML = htmlString;
			var fragment = document.createDocumentFragment();
			while (holder.firstChild) {
				fragment.appendChild(holder.firstChild)
			}
			return fragment
		};
		return createFragmentFromTemplate
	});
	define("Core/loadView", ["Cesium/Widgets/getElement", "KnockoutES5", "Core/createFragmentFromTemplate"], function(
		getElement, Knockout, createFragmentFromTemplate) {
		"use strict";
		var loadView = function(htmlString, container, viewModel) {
			container = getElement(container);
			var fragment = createFragmentFromTemplate(htmlString);
			var nodes = [];
			var i;
			for (i = 0; i < fragment.childNodes.length; ++i) {
				nodes.push(fragment.childNodes[i])
			}
			container.appendChild(fragment);
			for (i = 0; i < nodes.length; ++i) {
				var node = nodes[i];
				if (node.nodeType === 1 || node.nodeType === 8) {
					Knockout.applyBindings(viewModel, node)
				}
			}
			return nodes
		};
		return loadView
	});
	! function(t, e, i) {
		var n = t.L,
			o = {};
		o.version = "0.7.7", "object" == typeof module && "object" == typeof module.exports ? module.exports = o :
			"function" == typeof define && define.amd && define("leaflet", o), o.noConflict = function() {
				return t.L = n, this
			}, t.L = o, o.Util = {
				extend: function(t) {
					var e, i, n, o, s = Array.prototype.slice.call(arguments, 1);
					for (i = 0, n = s.length; n > i; i++) {
						o = s[i] || {};
						for (e in o) o.hasOwnProperty(e) && (t[e] = o[e])
					}
					return t
				},
				bind: function(t, e) {
					var i = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
					return function() {
						return t.apply(e, i || arguments)
					}
				},
				stamp: function() {
					var t = 0,
						e = "_leaflet_id";
					return function(i) {
						return i[e] = i[e] || ++t, i[e]
					}
				}(),
				invokeEach: function(t, e, i) {
					var n, o;
					if ("object" == typeof t) {
						o = Array.prototype.slice.call(arguments, 3);
						for (n in t) e.apply(i, [n, t[n]].concat(o));
						return !0
					}
					return !1
				},
				limitExecByInterval: function(t, e, i) {
					var n, o;
					return function s() {
						var a = arguments;
						return n ? void(o = !0) : (n = !0, setTimeout(function() {
							n = !1, o && (s.apply(i, a), o = !1)
						}, e), void t.apply(i, a))
					}
				},
				falseFn: function() {
					return !1
				},
				formatNum: function(t, e) {
					var i = Math.pow(10, e || 5);
					return Math.round(t * i) / i
				},
				trim: function(t) {
					return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
				},
				splitWords: function(t) {
					return o.Util.trim(t).split(/\s+/)
				},
				setOptions: function(t, e) {
					return t.options = o.extend({}, t.options, e), t.options
				},
				getParamString: function(t, e, i) {
					var n = [];
					for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
					return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
				},
				template: function(t, e) {
					return t.replace(/\{ *([\w_]+) *\}/g, function(t, n) {
						var o = e[n];
						if (o === i) throw new Error("No value provided for variable " + t);
						return "function" == typeof o && (o = o(e)), o
					})
				},
				isArray: Array.isArray || function(t) {
					return "[object Array]" === Object.prototype.toString.call(t)
				},
				emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
			},
			function() {
				function e(e) {
					var i, n, o = ["webkit", "moz", "o", "ms"];
					for (i = 0; i < o.length && !n; i++) n = t[o[i] + e];
					return n
				}

				function i(e) {
					var i = +new Date,
						o = Math.max(0, 16 - (i - n));
					return n = i + o, t.setTimeout(e, o)
				}
				var n = 0,
					s = t.requestAnimationFrame || e("RequestAnimationFrame") || i,
					a = t.cancelAnimationFrame || e("CancelAnimationFrame") || e("CancelRequestAnimationFrame") || function(e) {
						t.clearTimeout(e)
					};
				o.Util.requestAnimFrame = function(e, n, a, r) {
					return e = o.bind(e, n), a && s === i ? void e() : s.call(t, e, r)
				}, o.Util.cancelAnimFrame = function(e) {
					e && a.call(t, e)
				}
			}(), o.extend = o.Util.extend, o.bind = o.Util.bind, o.stamp = o.Util.stamp, o.setOptions = o.Util.setOptions, o.Class =
			function() {}, o.Class.extend = function(t) {
				var e = function() {
						this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks()
					},
					i = function() {};
				i.prototype = this.prototype;
				var n = new i;
				n.constructor = e, e.prototype = n;
				for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
				t.statics && (o.extend(e, t.statics), delete t.statics), t.includes && (o.Util.extend.apply(null, [n].concat(t.includes)),
						delete t.includes), t.options && n.options && (t.options = o.extend({}, n.options, t.options)), o.extend(n, t),
					n._initHooks = [];
				var a = this;
				return e.__super__ = a.prototype, n.callInitHooks = function() {
					if (!this._initHooksCalled) {
						a.prototype.callInitHooks && a.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
						for (var t = 0, e = n._initHooks.length; e > t; t++) n._initHooks[t].call(this)
					}
				}, e
			}, o.Class.include = function(t) {
				o.extend(this.prototype, t)
			}, o.Class.mergeOptions = function(t) {
				o.extend(this.prototype.options, t)
			}, o.Class.addInitHook = function(t) {
				var e = Array.prototype.slice.call(arguments, 1),
					i = "function" == typeof t ? t : function() {
						this[t].apply(this, e)
					};
				this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i)
			};
		var s = "_leaflet_events";
		o.Mixin = {}, o.Mixin.Events = {
				addEventListener: function(t, e, i) {
					if (o.Util.invokeEach(t, this.addEventListener, this, e, i)) return this;
					var n, a, r, h, l, u, c, d = this[s] = this[s] || {},
						p = i && i !== this && o.stamp(i);
					for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++) r = {
						action: e,
						context: i || this
					}, h = t[n], p ? (l = h + "_idx", u = l + "_len", c = d[l] = d[l] || {}, c[p] || (c[p] = [], d[u] = (d[u] || 0) +
						1), c[p].push(r)) : (d[h] = d[h] || [], d[h].push(r));
					return this
				},
				hasEventListeners: function(t) {
					var e = this[s];
					return !!e && (t in e && e[t].length > 0 || t + "_idx" in e && e[t + "_idx_len"] > 0)
				},
				removeEventListener: function(t, e, i) {
					if (!this[s]) return this;
					if (!t) return this.clearAllEventListeners();
					if (o.Util.invokeEach(t, this.removeEventListener, this, e, i)) return this;
					var n, a, r, h, l, u, c, d, p, _ = this[s],
						m = i && i !== this && o.stamp(i);
					for (t = o.Util.splitWords(t), n = 0, a = t.length; a > n; n++)
						if (r = t[n], u = r + "_idx", c = u + "_len", d = _[u], e) {
							if (h = m && d ? d[m] : _[r]) {
								for (l = h.length - 1; l >= 0; l--) h[l].action !== e || i && h[l].context !== i || (p = h.splice(l, 1), p[0]
									.action = o.Util.falseFn);
								i && d && 0 === h.length && (delete d[m], _[c]--)
							}
						} else delete _[r], delete _[u], delete _[c];
					return this
				},
				clearAllEventListeners: function() {
					return delete this[s], this
				},
				fireEvent: function(t, e) {
					if (!this.hasEventListeners(t)) return this;
					var i, n, a, r, h, l = o.Util.extend({}, e, {
							type: t,
							target: this
						}),
						u = this[s];
					if (u[t])
						for (i = u[t].slice(), n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, l);
					r = u[t + "_idx"];
					for (h in r)
						if (i = r[h].slice())
							for (n = 0, a = i.length; a > n; n++) i[n].action.call(i[n].context, l);
					return this
				},
				addOneTimeEventListener: function(t, e, i) {
					if (o.Util.invokeEach(t, this.addOneTimeEventListener, this, e, i)) return this;
					var n = o.bind(function() {
						this.removeEventListener(t, e, i).removeEventListener(t, n, i)
					}, this);
					return this.addEventListener(t, e, i).addEventListener(t, n, i)
				}
			}, o.Mixin.Events.on = o.Mixin.Events.addEventListener, o.Mixin.Events.off = o.Mixin.Events.removeEventListener, o.Mixin
			.Events.once = o.Mixin.Events.addOneTimeEventListener, o.Mixin.Events.fire = o.Mixin.Events.fireEvent,
			function() {
				var n = "ActiveXObject" in t,
					s = n && !e.addEventListener,
					a = navigator.userAgent.toLowerCase(),
					r = -1 !== a.indexOf("webkit"),
					h = -1 !== a.indexOf("chrome"),
					l = -1 !== a.indexOf("phantom"),
					u = -1 !== a.indexOf("android"),
					c = -1 !== a.search("android [23]"),
					d = -1 !== a.indexOf("gecko"),
					p = typeof orientation != i + "",
					_ = !t.PointerEvent && t.MSPointerEvent,
					m = t.PointerEvent && t.navigator.pointerEnabled || _,
					f = "devicePixelRatio" in t && t.devicePixelRatio > 1 || "matchMedia" in t && t.matchMedia(
						"(min-resolution:144dpi)") && t.matchMedia("(min-resolution:144dpi)").matches,
					g = e.documentElement,
					v = n && "transition" in g.style,
					y = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix && !c,
					P = "MozPerspective" in g.style,
					L = "OTransition" in g.style,
					x = !t.L_DISABLE_3D && (v || y || P || L) && !l,
					w = !t.L_NO_TOUCH && !l && (m || "ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch);
				o.Browser = {
					ie: n,
					ielt9: s,
					webkit: r,
					gecko: d && !r && !t.opera && !n,
					android: u,
					android23: c,
					chrome: h,
					ie3d: v,
					webkit3d: y,
					gecko3d: P,
					opera3d: L,
					any3d: x,
					mobile: p,
					mobileWebkit: p && r,
					mobileWebkit3d: p && y,
					mobileOpera: p && t.opera,
					touch: w,
					msPointer: _,
					pointer: m,
					retina: f
				}
			}(), o.Point = function(t, e, i) {
				this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
			}, o.Point.prototype = {
				clone: function() {
					return new o.Point(this.x, this.y)
				},
				add: function(t) {
					return this.clone()._add(o.point(t))
				},
				_add: function(t) {
					return this.x += t.x, this.y += t.y, this
				},
				subtract: function(t) {
					return this.clone()._subtract(o.point(t))
				},
				_subtract: function(t) {
					return this.x -= t.x, this.y -= t.y, this
				},
				divideBy: function(t) {
					return this.clone()._divideBy(t)
				},
				_divideBy: function(t) {
					return this.x /= t, this.y /= t, this
				},
				multiplyBy: function(t) {
					return this.clone()._multiplyBy(t)
				},
				_multiplyBy: function(t) {
					return this.x *= t, this.y *= t, this
				},
				round: function() {
					return this.clone()._round()
				},
				_round: function() {
					return this.x = Math.round(this.x), this.y = Math.round(this.y), this
				},
				floor: function() {
					return this.clone()._floor()
				},
				_floor: function() {
					return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
				},
				distanceTo: function(t) {
					t = o.point(t);
					var e = t.x - this.x,
						i = t.y - this.y;
					return Math.sqrt(e * e + i * i)
				},
				equals: function(t) {
					return t = o.point(t), t.x === this.x && t.y === this.y
				},
				contains: function(t) {
					return t = o.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
				},
				toString: function() {
					return "Point(" + o.Util.formatNum(this.x) + ", " + o.Util.formatNum(this.y) + ")"
				}
			}, o.point = function(t, e, n) {
				return t instanceof o.Point ? t : o.Util.isArray(t) ? new o.Point(t[0], t[1]) : t === i || null === t ? t : new o.Point(
					t, e, n)
			}, o.Bounds = function(t, e) {
				if (t)
					for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
			}, o.Bounds.prototype = {
				extend: function(t) {
					return t = o.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x,
						this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(),
						this.max = t.clone()), this
				},
				getCenter: function(t) {
					return new o.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
				},
				getBottomLeft: function() {
					return new o.Point(this.min.x, this.max.y)
				},
				getTopRight: function() {
					return new o.Point(this.max.x, this.min.y)
				},
				getSize: function() {
					return this.max.subtract(this.min)
				},
				contains: function(t) {
					var e, i;
					return t = "number" == typeof t[0] || t instanceof o.Point ? o.point(t) : o.bounds(t), t instanceof o.Bounds ? (
							e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max
						.y
				},
				intersects: function(t) {
					t = o.bounds(t);
					var e = this.min,
						i = this.max,
						n = t.min,
						s = t.max,
						a = s.x >= e.x && n.x <= i.x,
						r = s.y >= e.y && n.y <= i.y;
					return a && r
				},
				isValid: function() {
					return !(!this.min || !this.max)
				}
			}, o.bounds = function(t, e) {
				return !t || t instanceof o.Bounds ? t : new o.Bounds(t, e)
			}, o.Transformation = function(t, e, i, n) {
				this._a = t, this._b = e, this._c = i, this._d = n
			}, o.Transformation.prototype = {
				transform: function(t, e) {
					return this._transform(t.clone(), e)
				},
				_transform: function(t, e) {
					return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
				},
				untransform: function(t, e) {
					return e = e || 1, new o.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
				}
			}, o.DomUtil = {
				get: function(t) {
					return "string" == typeof t ? e.getElementById(t) : t
				},
				getStyle: function(t, i) {
					var n = t.style[i];
					if (!n && t.currentStyle && (n = t.currentStyle[i]), (!n || "auto" === n) && e.defaultView) {
						var o = e.defaultView.getComputedStyle(t, null);
						n = o ? o[i] : null
					}
					return "auto" === n ? null : n
				},
				getViewportOffset: function(t) {
					var i, n = 0,
						s = 0,
						a = t,
						r = e.body,
						h = e.documentElement;
					do {
						if (n += a.offsetTop || 0, s += a.offsetLeft || 0, n += parseInt(o.DomUtil.getStyle(a, "borderTopWidth"), 10) ||
							0, s += parseInt(o.DomUtil.getStyle(a, "borderLeftWidth"), 10) || 0, i = o.DomUtil.getStyle(a, "position"), a.offsetParent ===
							r && "absolute" === i) break;
						if ("fixed" === i) {
							n += r.scrollTop || h.scrollTop || 0, s += r.scrollLeft || h.scrollLeft || 0;
							break
						}
						if ("relative" === i && !a.offsetLeft) {
							var l = o.DomUtil.getStyle(a, "width"),
								u = o.DomUtil.getStyle(a, "max-width"),
								c = a.getBoundingClientRect();
							("none" !== l || "none" !== u) && (s += c.left + a.clientLeft), n += c.top + (r.scrollTop || h.scrollTop || 0);
							break
						}
						a = a.offsetParent
					} while (a);
					a = t;
					do {
						if (a === r) break;
						n -= a.scrollTop || 0, s -= a.scrollLeft || 0, a = a.parentNode
					} while (a);
					return new o.Point(s, n)
				},
				documentIsLtr: function() {
					return o.DomUtil._docIsLtrCached || (o.DomUtil._docIsLtrCached = !0, o.DomUtil._docIsLtr = "ltr" === o.DomUtil.getStyle(
						e.body, "direction")), o.DomUtil._docIsLtr
				},
				create: function(t, i, n) {
					var o = e.createElement(t);
					return o.className = i, n && n.appendChild(o), o
				},
				hasClass: function(t, e) {
					if (t.classList !== i) return t.classList.contains(e);
					var n = o.DomUtil._getClass(t);
					return n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
				},
				addClass: function(t, e) {
					if (t.classList !== i)
						for (var n = o.Util.splitWords(e), s = 0, a = n.length; a > s; s++) t.classList.add(n[s]);
					else if (!o.DomUtil.hasClass(t, e)) {
						var r = o.DomUtil._getClass(t);
						o.DomUtil._setClass(t, (r ? r + " " : "") + e)
					}
				},
				removeClass: function(t, e) {
					t.classList !== i ? t.classList.remove(e) : o.DomUtil._setClass(t, o.Util.trim((" " + o.DomUtil._getClass(t) +
						" ").replace(" " + e + " ", " ")))
				},
				_setClass: function(t, e) {
					t.className.baseVal === i ? t.className = e : t.className.baseVal = e
				},
				_getClass: function(t) {
					return t.className.baseVal === i ? t.className : t.className.baseVal
				},
				setOpacity: function(t, e) {
					if ("opacity" in t.style) t.style.opacity = e;
					else if ("filter" in t.style) {
						var i = !1,
							n = "DXImageTransform.Microsoft.Alpha";
						try {
							i = t.filters.item(n)
						} catch (o) {
							if (1 === e) return
						}
						e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n +
							"(opacity=" + e + ")"
					}
				},
				testProp: function(t) {
					for (var i = e.documentElement.style, n = 0; n < t.length; n++)
						if (t[n] in i) return t[n];
					return !1
				},
				getTranslateString: function(t) {
					var e = o.Browser.webkit3d,
						i = "translate" + (e ? "3d" : "") + "(",
						n = (e ? ",0" : "") + ")";
					return i + t.x + "px," + t.y + "px" + n
				},
				getScaleString: function(t, e) {
					var i = o.DomUtil.getTranslateString(e.add(e.multiplyBy(-1 * t))),
						n = " scale(" + t + ") ";
					return i + n
				},
				setPosition: function(t, e, i) {
					t._leaflet_pos = e, !i && o.Browser.any3d ? t.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(e) : (t.style
						.left = e.x + "px", t.style.top = e.y + "px")
				},
				getPosition: function(t) {
					return t._leaflet_pos
				}
			}, o.DomUtil.TRANSFORM = o.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform",
				"msTransform"
			]), o.DomUtil.TRANSITION = o.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition",
				"msTransition"
			]), o.DomUtil.TRANSITION_END = "webkitTransition" === o.DomUtil.TRANSITION || "OTransition" === o.DomUtil.TRANSITION ?
			o.DomUtil.TRANSITION + "End" : "transitionend",
			function() {
				if ("onselectstart" in e) o.extend(o.DomUtil, {
					disableTextSelection: function() {
						o.DomEvent.on(t, "selectstart", o.DomEvent.preventDefault)
					},
					enableTextSelection: function() {
						o.DomEvent.off(t, "selectstart", o.DomEvent.preventDefault)
					}
				});
				else {
					var i = o.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
					o.extend(o.DomUtil, {
						disableTextSelection: function() {
							if (i) {
								var t = e.documentElement.style;
								this._userSelect = t[i], t[i] = "none"
							}
						},
						enableTextSelection: function() {
							i && (e.documentElement.style[i] = this._userSelect, delete this._userSelect)
						}
					})
				}
				o.extend(o.DomUtil, {
					disableImageDrag: function() {
						o.DomEvent.on(t, "dragstart", o.DomEvent.preventDefault)
					},
					enableImageDrag: function() {
						o.DomEvent.off(t, "dragstart", o.DomEvent.preventDefault)
					}
				})
			}(), o.LatLng = function(t, e, n) {
				if (t = parseFloat(t), e = parseFloat(e), isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t +
					", " + e + ")");
				this.lat = t, this.lng = e, n !== i && (this.alt = parseFloat(n))
			}, o.extend(o.LatLng, {
				DEG_TO_RAD: Math.PI / 180,
				RAD_TO_DEG: 180 / Math.PI,
				MAX_MARGIN: 1e-9
			}), o.LatLng.prototype = {
				equals: function(t) {
					if (!t) return !1;
					t = o.latLng(t);
					var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
					return e <= o.LatLng.MAX_MARGIN
				},
				toString: function(t) {
					return "LatLng(" + o.Util.formatNum(this.lat, t) + ", " + o.Util.formatNum(this.lng, t) + ")"
				},
				distanceTo: function(t) {
					t = o.latLng(t);
					var e = 6378137,
						i = o.LatLng.DEG_TO_RAD,
						n = (t.lat - this.lat) * i,
						s = (t.lng - this.lng) * i,
						a = this.lat * i,
						r = t.lat * i,
						h = Math.sin(n / 2),
						l = Math.sin(s / 2),
						u = h * h + l * l * Math.cos(a) * Math.cos(r);
					return 2 * e * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u))
				},
				wrap: function(t, e) {
					var i = this.lng;
					return t = t || -180, e = e || 180, i = (i + e) % (e - t) + (t > i || i === e ? e : t), new o.LatLng(this.lat, i)
				}
			}, o.latLng = function(t, e) {
				return t instanceof o.LatLng ? t : o.Util.isArray(t) ? "number" == typeof t[0] || "string" == typeof t[0] ? new o.LatLng(
					t[0], t[1], t[2]) : null : t === i || null === t ? t : "object" == typeof t && "lat" in t ? new o.LatLng(t.lat,
					"lng" in t ? t.lng : t.lon) : e === i ? null : new o.LatLng(t, e)
			}, o.LatLngBounds = function(t, e) {
				if (t)
					for (var i = e ? [t, e] : t, n = 0, o = i.length; o > n; n++) this.extend(i[n])
			}, o.LatLngBounds.prototype = {
				extend: function(t) {
					if (!t) return this;
					var e = o.latLng(t);
					return t = null !== e ? e : o.latLngBounds(t), t instanceof o.LatLng ? this._southWest || this._northEast ? (
							this._southWest.lat = Math.min(t.lat, this._southWest.lat), this._southWest.lng = Math.min(t.lng, this._southWest
								.lng), this._northEast.lat = Math.max(t.lat, this._northEast.lat), this._northEast.lng = Math.max(t.lng, this
								._northEast.lng)) : (this._southWest = new o.LatLng(t.lat, t.lng), this._northEast = new o.LatLng(t.lat, t.lng)) :
						t instanceof o.LatLngBounds && (this.extend(t._southWest), this.extend(t._northEast)), this
				},
				pad: function(t) {
					var e = this._southWest,
						i = this._northEast,
						n = Math.abs(e.lat - i.lat) * t,
						s = Math.abs(e.lng - i.lng) * t;
					return new o.LatLngBounds(new o.LatLng(e.lat - n, e.lng - s), new o.LatLng(i.lat + n, i.lng + s))
				},
				getCenter: function() {
					return new o.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) /
						2)
				},
				getSouthWest: function() {
					return this._southWest
				},
				getNorthEast: function() {
					return this._northEast
				},
				getNorthWest: function() {
					return new o.LatLng(this.getNorth(), this.getWest())
				},
				getSouthEast: function() {
					return new o.LatLng(this.getSouth(), this.getEast())
				},
				getWest: function() {
					return this._southWest.lng
				},
				getSouth: function() {
					return this._southWest.lat
				},
				getEast: function() {
					return this._northEast.lng
				},
				getNorth: function() {
					return this._northEast.lat
				},
				contains: function(t) {
					t = "number" == typeof t[0] || t instanceof o.LatLng ? o.latLng(t) : o.latLngBounds(t);
					var e, i, n = this._southWest,
						s = this._northEast;
					return t instanceof o.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat &&
						i.lat <= s.lat && e.lng >= n.lng && i.lng <= s.lng
				},
				intersects: function(t) {
					t = o.latLngBounds(t);
					var e = this._southWest,
						i = this._northEast,
						n = t.getSouthWest(),
						s = t.getNorthEast(),
						a = s.lat >= e.lat && n.lat <= i.lat,
						r = s.lng >= e.lng && n.lng <= i.lng;
					return a && r
				},
				toBBoxString: function() {
					return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
				},
				equals: function(t) {
					return t ? (t = o.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast())) :
						!1
				},
				isValid: function() {
					return !(!this._southWest || !this._northEast)
				}
			}, o.latLngBounds = function(t, e) {
				return !t || t instanceof o.LatLngBounds ? t : new o.LatLngBounds(t, e)
			}, o.Projection = {}, o.Projection.SphericalMercator = {
				MAX_LATITUDE: 85.0511287798,
				project: function(t) {
					var e = o.LatLng.DEG_TO_RAD,
						i = this.MAX_LATITUDE,
						n = Math.max(Math.min(i, t.lat), -i),
						s = t.lng * e,
						a = n * e;
					return a = Math.log(Math.tan(Math.PI / 4 + a / 2)), new o.Point(s, a)
				},
				unproject: function(t) {
					var e = o.LatLng.RAD_TO_DEG,
						i = t.x * e,
						n = (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e;
					return new o.LatLng(n, i)
				}
			}, o.Projection.LonLat = {
				project: function(t) {
					return new o.Point(t.lng, t.lat)
				},
				unproject: function(t) {
					return new o.LatLng(t.y, t.x)
				}
			}, o.CRS = {
				latLngToPoint: function(t, e) {
					var i = this.projection.project(t),
						n = this.scale(e);
					return this.transformation._transform(i, n)
				},
				pointToLatLng: function(t, e) {
					var i = this.scale(e),
						n = this.transformation.untransform(t, i);
					return this.projection.unproject(n)
				},
				project: function(t) {
					return this.projection.project(t)
				},
				scale: function(t) {
					return 256 * Math.pow(2, t)
				},
				getSize: function(t) {
					var e = this.scale(t);
					return o.point(e, e)
				}
			}, o.CRS.Simple = o.extend({}, o.CRS, {
				projection: o.Projection.LonLat,
				transformation: new o.Transformation(1, 0, -1, 0),
				scale: function(t) {
					return Math.pow(2, t)
				}
			}), o.CRS.EPSG3857 = o.extend({}, o.CRS, {
				code: "EPSG:3857",
				projection: o.Projection.SphericalMercator,
				transformation: new o.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5),
				project: function(t) {
					var e = this.projection.project(t),
						i = 6378137;
					return e.multiplyBy(i)
				}
			}), o.CRS.EPSG900913 = o.extend({}, o.CRS.EPSG3857, {
				code: "EPSG:900913"
			}), o.CRS.EPSG4326 = o.extend({}, o.CRS, {
				code: "EPSG:4326",
				projection: o.Projection.LonLat,
				transformation: new o.Transformation(1 / 360, .5, -1 / 360, .5)
			}), o.Map = o.Class.extend({
				includes: o.Mixin.Events,
				options: {
					crs: o.CRS.EPSG3857,
					fadeAnimation: o.DomUtil.TRANSITION && !o.Browser.android23,
					trackResize: !0,
					markerZoomAnimation: o.DomUtil.TRANSITION && o.Browser.any3d
				},
				initialize: function(t, e) {
					e = o.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = o.bind(this._onResize,
							this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), e.center && e.zoom !== i && this.setView(
							o.latLng(e.center), e.zoom, {
								reset: !0
							}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(),
						this._addLayers(e.layers)
				},
				setView: function(t, e) {
					return e = e === i ? this.getZoom() : e, this._resetView(o.latLng(t), this._limitZoom(e)), this
				},
				setZoom: function(t, e) {
					return this._loaded ? this.setView(this.getCenter(), t, {
						zoom: e
					}) : (this._zoom = this._limitZoom(t), this)
				},
				zoomIn: function(t, e) {
					return this.setZoom(this._zoom + (t || 1), e)
				},
				zoomOut: function(t, e) {
					return this.setZoom(this._zoom - (t || 1), e)
				},
				setZoomAround: function(t, e, i) {
					var n = this.getZoomScale(e),
						s = this.getSize().divideBy(2),
						a = t instanceof o.Point ? t : this.latLngToContainerPoint(t),
						r = a.subtract(s).multiplyBy(1 - 1 / n),
						h = this.containerPointToLatLng(s.add(r));
					return this.setView(h, e, {
						zoom: i
					})
				},
				fitBounds: function(t, e) {
					e = e || {}, t = t.getBounds ? t.getBounds() : o.latLngBounds(t);
					var i = o.point(e.paddingTopLeft || e.padding || [0, 0]),
						n = o.point(e.paddingBottomRight || e.padding || [0, 0]),
						s = this.getBoundsZoom(t, !1, i.add(n));
					s = e.maxZoom ? Math.min(e.maxZoom, s) : s;
					var a = n.subtract(i).divideBy(2),
						r = this.project(t.getSouthWest(), s),
						h = this.project(t.getNorthEast(), s),
						l = this.unproject(r.add(h).divideBy(2).add(a), s);
					return this.setView(l, s, e)
				},
				fitWorld: function(t) {
					return this.fitBounds([
						[-90, -180],
						[90, 180]
					], t)
				},
				panTo: function(t, e) {
					return this.setView(t, this._zoom, {
						pan: e
					})
				},
				panBy: function(t) {
					return this.fire("movestart"), this._rawPanBy(o.point(t)), this.fire("move"), this.fire("moveend")
				},
				setMaxBounds: function(t) {
					return t = o.latLngBounds(t), this.options.maxBounds = t, t ? (this._loaded && this._panInsideMaxBounds(), this
						.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this)
				},
				panInsideBounds: function(t, e) {
					var i = this.getCenter(),
						n = this._limitCenter(i, this._zoom, t);
					return i.equals(n) ? this : this.panTo(n, e)
				},
				addLayer: function(t) {
					var e = o.stamp(t);
					return this._layers[e] ? this : (this._layers[e] = t, !t.options || isNaN(t.options.maxZoom) && isNaN(t.options
							.minZoom) || (this._zoomBoundLayers[e] = t, this._updateZoomLevels()), this.options.zoomAnimation && o.TileLayer &&
						t instanceof o.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, t.on("load", this._onTileLayerLoad,
							this)), this._loaded && this._layerAdd(t), this)
				},
				removeLayer: function(t) {
					var e = o.stamp(t);
					return this._layers[e] ? (this._loaded && t.onRemove(this), delete this._layers[e], this._loaded && this.fire(
							"layerremove", {
								layer: t
							}), this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels()), this.options.zoomAnimation &&
						o.TileLayer && t instanceof o.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, t.off("load",
							this._onTileLayerLoad, this)), this) : this
				},
				hasLayer: function(t) {
					return t ? o.stamp(t) in this._layers : !1
				},
				eachLayer: function(t, e) {
					for (var i in this._layers) t.call(e, this._layers[i]);
					return this
				},
				invalidateSize: function(t) {
					if (!this._loaded) return this;
					t = o.extend({
						animate: !1,
						pan: !0
					}, t === !0 ? {
						animate: !0
					} : t);
					var e = this.getSize();
					this._sizeChanged = !0, this._initialCenter = null;
					var i = this.getSize(),
						n = e.divideBy(2).round(),
						s = i.divideBy(2).round(),
						a = n.subtract(s);
					return a.x || a.y ? (t.animate && t.pan ? this.panBy(a) : (t.pan && this._rawPanBy(a), this.fire("move"), t.debounceMoveend ?
						(clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(o.bind(this.fire, this, "moveend"), 200)) :
						this.fire("moveend")), this.fire("resize", {
						oldSize: e,
						newSize: i
					})) : this
				},
				addHandler: function(t, e) {
					if (!e) return this;
					var i = this[t] = new e(this);
					return this._handlers.push(i), this.options[t] && i.enable(), this
				},
				remove: function() {
					this._loaded && this.fire("unload"), this._initEvents("off");
					try {
						delete this._container._leaflet
					} catch (t) {
						this._container._leaflet = i
					}
					return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this
				},
				getCenter: function() {
					return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(
						this._getCenterLayerPoint())
				},
				getZoom: function() {
					return this._zoom
				},
				getBounds: function() {
					var t = this.getPixelBounds(),
						e = this.unproject(t.getBottomLeft()),
						i = this.unproject(t.getTopRight());
					return new o.LatLngBounds(e, i)
				},
				getMinZoom: function() {
					return this.options.minZoom === i ? this._layersMinZoom === i ? 0 : this._layersMinZoom : this.options.minZoom
				},
				getMaxZoom: function() {
					return this.options.maxZoom === i ? this._layersMaxZoom === i ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
				},
				getBoundsZoom: function(t, e, i) {
					t = o.latLngBounds(t);
					var n, s = this.getMinZoom() - (e ? 1 : 0),
						a = this.getMaxZoom(),
						r = this.getSize(),
						h = t.getNorthWest(),
						l = t.getSouthEast(),
						u = !0;
					i = o.point(i || [0, 0]);
					do s++, n = this.project(l, s).subtract(this.project(h, s)).add(i), u = e ? n.x < r.x || n.y < r.y : r.contains(
						n); while (u && a >= s);
					return u && e ? null : e ? s : s - 1
				},
				getSize: function() {
					return (!this._size || this._sizeChanged) && (this._size = new o.Point(this._container.clientWidth, this._container
						.clientHeight), this._sizeChanged = !1), this._size.clone()
				},
				getPixelBounds: function() {
					var t = this._getTopLeftPoint();
					return new o.Bounds(t, t.add(this.getSize()))
				},
				getPixelOrigin: function() {
					return this._checkIfLoaded(), this._initialTopLeftPoint
				},
				getPanes: function() {
					return this._panes
				},
				getContainer: function() {
					return this._container
				},
				getZoomScale: function(t) {
					var e = this.options.crs;
					return e.scale(t) / e.scale(this._zoom)
				},
				getScaleZoom: function(t) {
					return this._zoom + Math.log(t) / Math.LN2
				},
				project: function(t, e) {
					return e = e === i ? this._zoom : e, this.options.crs.latLngToPoint(o.latLng(t), e)
				},
				unproject: function(t, e) {
					return e = e === i ? this._zoom : e, this.options.crs.pointToLatLng(o.point(t), e)
				},
				layerPointToLatLng: function(t) {
					var e = o.point(t).add(this.getPixelOrigin());
					return this.unproject(e)
				},
				latLngToLayerPoint: function(t) {
					var e = this.project(o.latLng(t))._round();
					return e._subtract(this.getPixelOrigin())
				},
				containerPointToLayerPoint: function(t) {
					return o.point(t).subtract(this._getMapPanePos())
				},
				layerPointToContainerPoint: function(t) {
					return o.point(t).add(this._getMapPanePos())
				},
				containerPointToLatLng: function(t) {
					var e = this.containerPointToLayerPoint(o.point(t));
					return this.layerPointToLatLng(e)
				},
				latLngToContainerPoint: function(t) {
					return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))
				},
				mouseEventToContainerPoint: function(t) {
					return o.DomEvent.getMousePosition(t, this._container)
				},
				mouseEventToLayerPoint: function(t) {
					return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
				},
				mouseEventToLatLng: function(t) {
					return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
				},
				_initContainer: function(t) {
					var e = this._container = o.DomUtil.get(t);
					if (!e) throw new Error("Map container not found.");
					if (e._leaflet) throw new Error("Map container is already initialized.");
					e._leaflet = !0
				},
				_initLayout: function() {
					var t = this._container;
					o.DomUtil.addClass(t, "leaflet-container" + (o.Browser.touch ? " leaflet-touch" : "") + (o.Browser.retina ?
						" leaflet-retina" : "") + (o.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ?
						" leaflet-fade-anim" : ""));
					var e = o.DomUtil.getStyle(t, "position");
					"absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(),
						this._initControlPos && this._initControlPos()
				},
				_initPanes: function() {
					var t = this._panes = {};
					this._mapPane = t.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = t.tilePane =
						this._createPane("leaflet-tile-pane", this._mapPane), t.objectsPane = this._createPane("leaflet-objects-pane",
							this._mapPane), t.shadowPane = this._createPane("leaflet-shadow-pane"), t.overlayPane = this._createPane(
							"leaflet-overlay-pane"), t.markerPane = this._createPane("leaflet-marker-pane"), t.popupPane = this._createPane(
							"leaflet-popup-pane");
					var e = " leaflet-zoom-hide";
					this.options.markerZoomAnimation || (o.DomUtil.addClass(t.markerPane, e), o.DomUtil.addClass(t.shadowPane, e),
						o.DomUtil.addClass(t.popupPane, e))
				},
				_createPane: function(t, e) {
					return o.DomUtil.create("div", t, e || this._panes.objectsPane)
				},
				_clearPanes: function() {
					this._container.removeChild(this._mapPane)
				},
				_addLayers: function(t) {
					t = t ? o.Util.isArray(t) ? t : [t] : [];
					for (var e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
				},
				_resetView: function(t, e, i, n) {
					var s = this._zoom !== e;
					n || (this.fire("movestart"), s && this.fire("zoomstart")), this._zoom = e, this._initialCenter = t, this._initialTopLeftPoint =
						this._getNewTopLeftPoint(t), i ? this._initialTopLeftPoint._add(this._getMapPanePos()) : o.DomUtil.setPosition(
							this._mapPane, new o.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
					var a = !this._loaded;
					this._loaded = !0, this.fire("viewreset", {
						hard: !i
					}), a && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (s || n) && this.fire(
						"zoomend"), this.fire("moveend", {
						hard: !i
					})
				},
				_rawPanBy: function(t) {
					o.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
				},
				_getZoomSpan: function() {
					return this.getMaxZoom() - this.getMinZoom()
				},
				_updateZoomLevels: function() {
					var t, e = 1 / 0,
						n = -(1 / 0),
						o = this._getZoomSpan();
					for (t in this._zoomBoundLayers) {
						var s = this._zoomBoundLayers[t];
						isNaN(s.options.minZoom) || (e = Math.min(e, s.options.minZoom)), isNaN(s.options.maxZoom) || (n = Math.max(n,
							s.options.maxZoom))
					}
					t === i ? this._layersMaxZoom = this._layersMinZoom = i : (this._layersMaxZoom = n, this._layersMinZoom = e), o !==
						this._getZoomSpan() && this.fire("zoomlevelschange")
				},
				_panInsideMaxBounds: function() {
					this.panInsideBounds(this.options.maxBounds)
				},
				_checkIfLoaded: function() {
					if (!this._loaded) throw new Error("Set map center and zoom first.")
				},
				_initEvents: function(e) {
					if (o.DomEvent) {
						e = e || "on", o.DomEvent[e](this._container, "click", this._onMouseClick, this);
						var i, n, s = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
						for (i = 0, n = s.length; n > i; i++) o.DomEvent[e](this._container, s[i], this._fireMouseEvent, this);
						this.options.trackResize && o.DomEvent[e](t, "resize", this._onResize, this)
					}
				},
				_onResize: function() {
					o.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = o.Util.requestAnimFrame(function() {
						this.invalidateSize({
							debounceMoveend: !0
						})
					}, this, !1, this._container)
				},
				_onMouseClick: function(t) {
					!this._loaded || !t._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) ||
						o.DomEvent._skipped(t) || (this.fire("preclick"), this._fireMouseEvent(t))
				},
				_fireMouseEvent: function(t) {
					if (this._loaded && !o.DomEvent._skipped(t)) {
						var e = t.type;
						if (e = "mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, this.hasEventListeners(e)) {
							"contextmenu" === e && o.DomEvent.preventDefault(t);
							var i = this.mouseEventToContainerPoint(t),
								n = this.containerPointToLayerPoint(i),
								s = this.layerPointToLatLng(n);
							this.fire(e, {
								latlng: s,
								layerPoint: n,
								containerPoint: i,
								originalEvent: t
							})
						}
					}
				},
				_onTileLayerLoad: function() {
					this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload")
				},
				_clearHandlers: function() {
					for (var t = 0, e = this._handlers.length; e > t; t++) this._handlers[t].disable()
				},
				whenReady: function(t, e) {
					return this._loaded ? t.call(e || this, this) : this.on("load", t, e), this
				},
				_layerAdd: function(t) {
					t.onAdd(this), this.fire("layeradd", {
						layer: t
					})
				},
				_getMapPanePos: function() {
					return o.DomUtil.getPosition(this._mapPane)
				},
				_moved: function() {
					var t = this._getMapPanePos();
					return t && !t.equals([0, 0])
				},
				_getTopLeftPoint: function() {
					return this.getPixelOrigin().subtract(this._getMapPanePos())
				},
				_getNewTopLeftPoint: function(t, e) {
					var i = this.getSize()._divideBy(2);
					return this.project(t, e)._subtract(i)._round()
				},
				_latLngToNewLayerPoint: function(t, e, i) {
					var n = this._getNewTopLeftPoint(i, e).add(this._getMapPanePos());
					return this.project(t, e)._subtract(n)
				},
				_getCenterLayerPoint: function() {
					return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
				},
				_getCenterOffset: function(t) {
					return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
				},
				_limitCenter: function(t, e, i) {
					if (!i) return t;
					var n = this.project(t, e),
						s = this.getSize().divideBy(2),
						a = new o.Bounds(n.subtract(s), n.add(s)),
						r = this._getBoundsOffset(a, i, e);
					return this.unproject(n.add(r), e)
				},
				_limitOffset: function(t, e) {
					if (!e) return t;
					var i = this.getPixelBounds(),
						n = new o.Bounds(i.min.add(t), i.max.add(t));
					return t.add(this._getBoundsOffset(n, e))
				},
				_getBoundsOffset: function(t, e, i) {
					var n = this.project(e.getNorthWest(), i).subtract(t.min),
						s = this.project(e.getSouthEast(), i).subtract(t.max),
						a = this._rebound(n.x, -s.x),
						r = this._rebound(n.y, -s.y);
					return new o.Point(a, r)
				},
				_rebound: function(t, e) {
					return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
				},
				_limitZoom: function(t) {
					var e = this.getMinZoom(),
						i = this.getMaxZoom();
					return Math.max(e, Math.min(i, t))
				}
			}), o.map = function(t, e) {
				return new o.Map(t, e)
			}, o.Projection.Mercator = {
				MAX_LATITUDE: 85.0840591556,
				R_MINOR: 6356752.314245179,
				R_MAJOR: 6378137,
				project: function(t) {
					var e = o.LatLng.DEG_TO_RAD,
						i = this.MAX_LATITUDE,
						n = Math.max(Math.min(i, t.lat), -i),
						s = this.R_MAJOR,
						a = this.R_MINOR,
						r = t.lng * e * s,
						h = n * e,
						l = a / s,
						u = Math.sqrt(1 - l * l),
						c = u * Math.sin(h);
					c = Math.pow((1 - c) / (1 + c), .5 * u);
					var d = Math.tan(.5 * (.5 * Math.PI - h)) / c;
					return h = -s * Math.log(d), new o.Point(r, h)
				},
				unproject: function(t) {
					for (var e, i = o.LatLng.RAD_TO_DEG, n = this.R_MAJOR, s = this.R_MINOR, a = t.x * i / n, r = s / n, h = Math.sqrt(
							1 - r * r), l = Math.exp(-t.y / n), u = Math.PI / 2 - 2 * Math.atan(l), c = 15, d = 1e-7, p = c, _ = .1; Math.abs(
							_) > d && --p > 0;) e = h * Math.sin(u), _ = Math.PI / 2 - 2 * Math.atan(l * Math.pow((1 - e) / (1 + e), .5 *
						h)) - u, u += _;
					return new o.LatLng(u * i, a)
				}
			}, o.CRS.EPSG3395 = o.extend({}, o.CRS, {
				code: "EPSG:3395",
				projection: o.Projection.Mercator,
				transformation: function() {
					var t = o.Projection.Mercator,
						e = t.R_MAJOR,
						i = .5 / (Math.PI * e);
					return new o.Transformation(i, .5, -i, .5)
				}()
			}), o.TileLayer = o.Class.extend({
				includes: o.Mixin.Events,
				options: {
					minZoom: 0,
					maxZoom: 18,
					tileSize: 256,
					subdomains: "abc",
					errorTileUrl: "",
					attribution: "",
					zoomOffset: 0,
					opacity: 1,
					unloadInvisibleTiles: o.Browser.mobile,
					updateWhenIdle: o.Browser.mobile
				},
				initialize: function(t, e) {
					e = o.setOptions(this, e), e.detectRetina && o.Browser.retina && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize /
						2), e.zoomOffset++, e.minZoom > 0 && e.minZoom--, this.options.maxZoom--), e.bounds && (e.bounds = o.latLngBounds(
						e.bounds)), this._url = t;
					var i = this.options.subdomains;
					"string" == typeof i && (this.options.subdomains = i.split(""))
				},
				onAdd: function(t) {
					this._map = t, this._animated = t._zoomAnimated, this._initContainer(), t.on({
						viewreset: this._reset,
						moveend: this._update
					}, this), this._animated && t.on({
						zoomanim: this._animateZoom,
						zoomend: this._endZoomAnim
					}, this), this.options.updateWhenIdle || (this._limitedUpdate = o.Util.limitExecByInterval(this._update, 150,
						this), t.on("move", this._limitedUpdate, this)), this._reset(), this._update()
				},
				addTo: function(t) {
					return t.addLayer(this), this
				},
				onRemove: function(t) {
					this._container.parentNode.removeChild(this._container), t.off({
							viewreset: this._reset,
							moveend: this._update
						}, this), this._animated && t.off({
							zoomanim: this._animateZoom,
							zoomend: this._endZoomAnim
						}, this), this.options.updateWhenIdle || t.off("move", this._limitedUpdate, this), this._container = null,
						this._map = null
				},
				bringToFront: function() {
					var t = this._map._panes.tilePane;
					return this._container && (t.appendChild(this._container), this._setAutoZIndex(t, Math.max)), this
				},
				bringToBack: function() {
					var t = this._map._panes.tilePane;
					return this._container && (t.insertBefore(this._container, t.firstChild), this._setAutoZIndex(t, Math.min)),
						this
				},
				getAttribution: function() {
					return this.options.attribution
				},
				getContainer: function() {
					return this._container
				},
				setOpacity: function(t) {
					return this.options.opacity = t, this._map && this._updateOpacity(), this
				},
				setZIndex: function(t) {
					return this.options.zIndex = t, this._updateZIndex(), this
				},
				setUrl: function(t, e) {
					return this._url = t, e || this.redraw(), this
				},
				redraw: function() {
					return this._map && (this._reset({
						hard: !0
					}), this._update()), this
				},
				_updateZIndex: function() {
					this._container && this.options.zIndex !== i && (this._container.style.zIndex = this.options.zIndex)
				},
				_setAutoZIndex: function(t, e) {
					var i, n, o, s = t.children,
						a = -e(1 / 0, -(1 / 0));
					for (n = 0, o = s.length; o > n; n++) s[n] !== this._container && (i = parseInt(s[n].style.zIndex, 10), isNaN(i) ||
						(a = e(a, i)));
					this.options.zIndex = this._container.style.zIndex = (isFinite(a) ? a : 0) + e(1, -1)
				},
				_updateOpacity: function() {
					var t, e = this._tiles;
					if (o.Browser.ielt9)
						for (t in e) o.DomUtil.setOpacity(e[t], this.options.opacity);
					else o.DomUtil.setOpacity(this._container, this.options.opacity)
				},
				_initContainer: function() {
					var t = this._map._panes.tilePane;
					if (!this._container) {
						if (this._container = o.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
							var e = "leaflet-tile-container";
							this._bgBuffer = o.DomUtil.create("div", e, this._container), this._tileContainer = o.DomUtil.create("div", e,
								this._container)
						} else this._tileContainer = this._container;
						t.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity()
					}
				},
				_reset: function(t) {
					for (var e in this._tiles) this.fire("tileunload", {
						tile: this._tiles[e]
					});
					this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer
						.innerHTML = "", this._animated && t && t.hard && this._clearBgBuffer(), this._initContainer()
				},
				_getTileSize: function() {
					var t = this._map,
						e = t.getZoom() + this.options.zoomOffset,
						i = this.options.maxNativeZoom,
						n = this.options.tileSize;
					return i && e > i && (n = Math.round(t.getZoomScale(e) / t.getZoomScale(i) * n)), n
				},
				_update: function() {
					if (this._map) {
						var t = this._map,
							e = t.getPixelBounds(),
							i = t.getZoom(),
							n = this._getTileSize();
						if (!(i > this.options.maxZoom || i < this.options.minZoom)) {
							var s = o.bounds(e.min.divideBy(n)._floor(), e.max.divideBy(n)._floor());
							this._addTilesFromCenterOut(s), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(
								s)
						}
					}
				},
				_addTilesFromCenterOut: function(t) {
					var i, n, s, a = [],
						r = t.getCenter();
					for (i = t.min.y; i <= t.max.y; i++)
						for (n = t.min.x; n <= t.max.x; n++) s = new o.Point(n, i), this._tileShouldBeLoaded(s) && a.push(s);
					var h = a.length;
					if (0 !== h) {
						a.sort(function(t, e) {
							return t.distanceTo(r) - e.distanceTo(r)
						});
						var l = e.createDocumentFragment();
						for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += h, n = 0; h > n; n++) this._addTile(a[n],
							l);
						this._tileContainer.appendChild(l)
					}
				},
				_tileShouldBeLoaded: function(t) {
					if (t.x + ":" + t.y in this._tiles) return !1;
					var e = this.options;
					if (!e.continuousWorld) {
						var i = this._getWrapTileNum();
						if (e.noWrap && (t.x < 0 || t.x >= i.x) || t.y < 0 || t.y >= i.y) return !1
					}
					if (e.bounds) {
						var n = this._getTileSize(),
							o = t.multiplyBy(n),
							s = o.add([n, n]),
							a = this._map.unproject(o),
							r = this._map.unproject(s);
						if (e.continuousWorld || e.noWrap || (a = a.wrap(), r = r.wrap()), !e.bounds.intersects([a, r])) return !1
					}
					return !0
				},
				_removeOtherTiles: function(t) {
					var e, i, n, o;
					for (o in this._tiles) e = o.split(":"), i = parseInt(e[0], 10), n = parseInt(e[1], 10), (i < t.min.x || i > t.max
						.x || n < t.min.y || n > t.max.y) && this._removeTile(o)
				},
				_removeTile: function(t) {
					var e = this._tiles[t];
					this.fire("tileunload", {
							tile: e,
							url: e.src
						}), this.options.reuseTiles ? (o.DomUtil.removeClass(e, "leaflet-tile-loaded"), this._unusedTiles.push(e)) : e
						.parentNode === this._tileContainer && this._tileContainer.removeChild(e), o.Browser.android || (e.onload =
							null, e.src = o.Util.emptyImageUrl), delete this._tiles[t]
				},
				_addTile: function(t, e) {
					var i = this._getTilePos(t),
						n = this._getTile();
					o.DomUtil.setPosition(n, i, o.Browser.chrome), this._tiles[t.x + ":" + t.y] = n, this._loadTile(n, t), n.parentNode !==
						this._tileContainer && e.appendChild(n)
				},
				_getZoomForUrl: function() {
					var t = this.options,
						e = this._map.getZoom();
					return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) :
						e
				},
				_getTilePos: function(t) {
					var e = this._map.getPixelOrigin(),
						i = this._getTileSize();
					return t.multiplyBy(i).subtract(e)
				},
				getTileUrl: function(t) {
					return o.Util.template(this._url, o.extend({
						s: this._getSubdomain(t),
						z: t.z,
						x: t.x,
						y: t.y
					}, this.options))
				},
				_getWrapTileNum: function() {
					var t = this._map.options.crs,
						e = t.getSize(this._map.getZoom());
					return e.divideBy(this._getTileSize())._floor()
				},
				_adjustTilePoint: function(t) {
					var e = this._getWrapTileNum();
					this.options.continuousWorld || this.options.noWrap || (t.x = (t.x % e.x + e.x) % e.x), this.options.tms && (t.y =
						e.y - t.y - 1), t.z = this._getZoomForUrl()
				},
				_getSubdomain: function(t) {
					var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
					return this.options.subdomains[e]
				},
				_getTile: function() {
					if (this.options.reuseTiles && this._unusedTiles.length > 0) {
						var t = this._unusedTiles.pop();
						return this._resetTile(t), t
					}
					return this._createTile()
				},
				_resetTile: function() {},
				_createTile: function() {
					var t = o.DomUtil.create("img", "leaflet-tile");
					return t.style.width = t.style.height = this._getTileSize() + "px", t.galleryimg = "no", t.onselectstart = t.onmousemove =
						o.Util.falseFn, o.Browser.ielt9 && this.options.opacity !== i && o.DomUtil.setOpacity(t, this.options.opacity),
						o.Browser.mobileWebkit3d && (t.style.WebkitBackfaceVisibility = "hidden"), t
				},
				_loadTile: function(t, e) {
					t._layer = this, t.onload = this._tileOnLoad, t.onerror = this._tileOnError, this._adjustTilePoint(e), t.src =
						this.getTileUrl(e), this.fire("tileloadstart", {
							tile: t,
							url: t.src
						})
				},
				_tileLoaded: function() {
					this._tilesToLoad--, this._animated && o.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad ||
						(this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer =
							setTimeout(o.bind(this._clearBgBuffer, this), 500)))
				},
				_tileOnLoad: function() {
					var t = this._layer;
					this.src !== o.Util.emptyImageUrl && (o.DomUtil.addClass(this, "leaflet-tile-loaded"), t.fire("tileload", {
						tile: this,
						url: this.src
					})), t._tileLoaded()
				},
				_tileOnError: function() {
					var t = this._layer;
					t.fire("tileerror", {
						tile: this,
						url: this.src
					});
					var e = t.options.errorTileUrl;
					e && (this.src = e), t._tileLoaded()
				}
			}), o.tileLayer = function(t, e) {
				return new o.TileLayer(t, e)
			}, o.TileLayer.WMS = o.TileLayer.extend({
				defaultWmsParams: {
					service: "WMS",
					request: "GetMap",
					version: "1.1.1",
					layers: "",
					styles: "",
					format: "image/jpeg",
					transparent: !1
				},
				initialize: function(t, e) {
					this._url = t;
					var i = o.extend({}, this.defaultWmsParams),
						n = e.tileSize || this.options.tileSize;
					e.detectRetina && o.Browser.retina ? i.width = i.height = 2 * n : i.width = i.height = n;
					for (var s in e) this.options.hasOwnProperty(s) || "crs" === s || (i[s] = e[s]);
					this.wmsParams = i, o.setOptions(this, e)
				},
				onAdd: function(t) {
					this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
					var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
					this.wmsParams[e] = this._crs.code, o.TileLayer.prototype.onAdd.call(this, t)
				},
				getTileUrl: function(t) {
					var e = this._map,
						i = this.options.tileSize,
						n = t.multiplyBy(i),
						s = n.add([i, i]),
						a = this._crs.project(e.unproject(n, t.z)),
						r = this._crs.project(e.unproject(s, t.z)),
						h = this._wmsVersion >= 1.3 && this._crs === o.CRS.EPSG4326 ? [r.y, a.x, a.y, r.x].join(",") : [a.x, r.y, r.x,
							a.y
						].join(","),
						l = o.Util.template(this._url, {
							s: this._getSubdomain(t)
						});
					return l + o.Util.getParamString(this.wmsParams, l, !0) + "&BBOX=" + h
				},
				setParams: function(t, e) {
					return o.extend(this.wmsParams, t), e || this.redraw(), this
				}
			}), o.tileLayer.wms = function(t, e) {
				return new o.TileLayer.WMS(t, e)
			}, o.TileLayer.Canvas = o.TileLayer.extend({
				options: {
					async: !1
				},
				initialize: function(t) {
					o.setOptions(this, t)
				},
				redraw: function() {
					this._map && (this._reset({
						hard: !0
					}), this._update());
					for (var t in this._tiles) this._redrawTile(this._tiles[t]);
					return this
				},
				_redrawTile: function(t) {
					this.drawTile(t, t._tilePoint, this._map._zoom)
				},
				_createTile: function() {
					var t = o.DomUtil.create("canvas", "leaflet-tile");
					return t.width = t.height = this.options.tileSize, t.onselectstart = t.onmousemove = o.Util.falseFn, t
				},
				_loadTile: function(t, e) {
					t._layer = this, t._tilePoint = e, this._redrawTile(t), this.options.async || this.tileDrawn(t)
				},
				drawTile: function() {},
				tileDrawn: function(t) {
					this._tileOnLoad.call(t)
				}
			}), o.tileLayer.canvas = function(t) {
				return new o.TileLayer.Canvas(t)
			}, o.ImageOverlay = o.Class.extend({
				includes: o.Mixin.Events,
				options: {
					opacity: 1
				},
				initialize: function(t, e, i) {
					this._url = t, this._bounds = o.latLngBounds(e), o.setOptions(this, i)
				},
				onAdd: function(t) {
					this._map = t, this._image || this._initImage(), t._panes.overlayPane.appendChild(this._image), t.on(
						"viewreset", this._reset, this), t.options.zoomAnimation && o.Browser.any3d && t.on("zoomanim", this._animateZoom,
						this), this._reset()
				},
				onRemove: function(t) {
					t.getPanes().overlayPane.removeChild(this._image), t.off("viewreset", this._reset, this), t.options.zoomAnimation &&
						t.off("zoomanim", this._animateZoom, this)
				},
				addTo: function(t) {
					return t.addLayer(this), this
				},
				setOpacity: function(t) {
					return this.options.opacity = t, this._updateOpacity(), this
				},
				bringToFront: function() {
					return this._image && this._map._panes.overlayPane.appendChild(this._image), this
				},
				bringToBack: function() {
					var t = this._map._panes.overlayPane;
					return this._image && t.insertBefore(this._image, t.firstChild), this
				},
				setUrl: function(t) {
					this._url = t, this._image.src = this._url
				},
				getAttribution: function() {
					return this.options.attribution
				},
				_initImage: function() {
					this._image = o.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && o.Browser.any3d ?
						o.DomUtil.addClass(this._image, "leaflet-zoom-animated") : o.DomUtil.addClass(this._image, "leaflet-zoom-hide"),
						this._updateOpacity(), o.extend(this._image, {
							galleryimg: "no",
							onselectstart: o.Util.falseFn,
							onmousemove: o.Util.falseFn,
							onload: o.bind(this._onImageLoad, this),
							src: this._url
						})
				},
				_animateZoom: function(t) {
					var e = this._map,
						i = this._image,
						n = e.getZoomScale(t.zoom),
						s = this._bounds.getNorthWest(),
						a = this._bounds.getSouthEast(),
						r = e._latLngToNewLayerPoint(s, t.zoom, t.center),
						h = e._latLngToNewLayerPoint(a, t.zoom, t.center)._subtract(r),
						l = r._add(h._multiplyBy(.5 * (1 - 1 / n)));
					i.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(l) + " scale(" + n + ") "
				},
				_reset: function() {
					var t = this._image,
						e = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
						i = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(e);
					o.DomUtil.setPosition(t, e), t.style.width = i.x + "px", t.style.height = i.y + "px"
				},
				_onImageLoad: function() {
					this.fire("load")
				},
				_updateOpacity: function() {
					o.DomUtil.setOpacity(this._image, this.options.opacity)
				}
			}), o.imageOverlay = function(t, e, i) {
				return new o.ImageOverlay(t, e, i)
			}, o.Icon = o.Class.extend({
				options: {
					className: ""
				},
				initialize: function(t) {
					o.setOptions(this, t)
				},
				createIcon: function(t) {
					return this._createIcon("icon", t)
				},
				createShadow: function(t) {
					return this._createIcon("shadow", t)
				},
				_createIcon: function(t, e) {
					var i = this._getIconUrl(t);
					if (!i) {
						if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
						return null
					}
					var n;
					return n = e && "IMG" === e.tagName ? this._createImg(i, e) : this._createImg(i), this._setIconStyles(n, t), n
				},
				_setIconStyles: function(t, e) {
					var i, n = this.options,
						s = o.point(n[e + "Size"]);
					i = "shadow" === e ? o.point(n.shadowAnchor || n.iconAnchor) : o.point(n.iconAnchor), !i && s && (i = s.divideBy(
						2, !0)), t.className = "leaflet-marker-" + e + " " + n.className, i && (t.style.marginLeft = -i.x + "px", t.style
						.marginTop = -i.y + "px"), s && (t.style.width = s.x + "px", t.style.height = s.y + "px")
				},
				_createImg: function(t, i) {
					return i = i || e.createElement("img"), i.src = t, i
				},
				_getIconUrl: function(t) {
					return o.Browser.retina && this.options[t + "RetinaUrl"] ? this.options[t + "RetinaUrl"] : this.options[t +
						"Url"]
				}
			}), o.icon = function(t) {
				return new o.Icon(t)
			}, o.Icon.Default = o.Icon.extend({
				options: {
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
					shadowSize: [41, 41]
				},
				_getIconUrl: function(t) {
					var e = t + "Url";
					if (this.options[e]) return this.options[e];
					o.Browser.retina && "icon" === t && (t += "-2x");
					var i = o.Icon.Default.imagePath;
					if (!i) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
					return i + "/marker-" + t + ".png"
				}
			}), o.Icon.Default.imagePath = function() {
				var t, i, n, o, s, a = e.getElementsByTagName("script"),
					r = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
				for (t = 0, i = a.length; i > t; t++)
					if (n = a[t].src, o = n.match(r)) return s = n.split(r)[0], (s ? s + "/" : "") + "images"
			}(), o.Marker = o.Class.extend({
				includes: o.Mixin.Events,
				options: {
					icon: new o.Icon.Default,
					title: "",
					alt: "",
					clickable: !0,
					draggable: !1,
					keyboard: !0,
					zIndexOffset: 0,
					opacity: 1,
					riseOnHover: !1,
					riseOffset: 250
				},
				initialize: function(t, e) {
					o.setOptions(this, e), this._latlng = o.latLng(t)
				},
				onAdd: function(t) {
					this._map = t, t.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), t.options
						.zoomAnimation && t.options.markerZoomAnimation && t.on("zoomanim", this._animateZoom, this)
				},
				addTo: function(t) {
					return t.addLayer(this), this
				},
				onRemove: function(t) {
					this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), t.off({
						viewreset: this.update,
						zoomanim: this._animateZoom
					}, this), this._map = null
				},
				getLatLng: function() {
					return this._latlng
				},
				setLatLng: function(t) {
					return this._latlng = o.latLng(t), this.update(), this.fire("move", {
						latlng: this._latlng
					})
				},
				setZIndexOffset: function(t) {
					return this.options.zIndexOffset = t, this.update(), this
				},
				setIcon: function(t) {
					return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(
						this._popup), this
				},
				update: function() {
					return this._icon && this._setPos(this._map.latLngToLayerPoint(this._latlng).round()), this
				},
				_initIcon: function() {
					var t = this.options,
						e = this._map,
						i = e.options.zoomAnimation && e.options.markerZoomAnimation,
						n = i ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
						s = t.icon.createIcon(this._icon),
						a = !1;
					s !== this._icon && (this._icon && this._removeIcon(), a = !0, t.title && (s.title = t.title), t.alt && (s.alt =
							t.alt)), o.DomUtil.addClass(s, n), t.keyboard && (s.tabIndex = "0"), this._icon = s, this._initInteraction(),
						t.riseOnHover && o.DomEvent.on(s, "mouseover", this._bringToFront, this).on(s, "mouseout", this._resetZIndex,
							this);
					var r = t.icon.createShadow(this._shadow),
						h = !1;
					r !== this._shadow && (this._removeShadow(), h = !0), r && o.DomUtil.addClass(r, n), this._shadow = r, t.opacity <
						1 && this._updateOpacity();
					var l = this._map._panes;
					a && l.markerPane.appendChild(this._icon), r && h && l.shadowPane.appendChild(this._shadow)
				},
				_removeIcon: function() {
					this.options.riseOnHover && o.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon,
						"mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null
				},
				_removeShadow: function() {
					this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null
				},
				_setPos: function(t) {
					o.DomUtil.setPosition(this._icon, t), this._shadow && o.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y +
						this.options.zIndexOffset, this._resetZIndex()
				},
				_updateZIndex: function(t) {
					this._icon.style.zIndex = this._zIndex + t
				},
				_animateZoom: function(t) {
					var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
					this._setPos(e)
				},
				_initInteraction: function() {
					if (this.options.clickable) {
						var t = this._icon,
							e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
						o.DomUtil.addClass(t, "leaflet-clickable"), o.DomEvent.on(t, "click", this._onMouseClick, this), o.DomEvent.on(
							t, "keypress", this._onKeyPress, this);
						for (var i = 0; i < e.length; i++) o.DomEvent.on(t, e[i], this._fireMouseEvent, this);
						o.Handler.MarkerDrag && (this.dragging = new o.Handler.MarkerDrag(this), this.options.draggable && this.dragging
							.enable())
					}
				},
				_onMouseClick: function(t) {
					var e = this.dragging && this.dragging.moved();
					(this.hasEventListeners(t.type) || e) && o.DomEvent.stopPropagation(t), e || (this.dragging && this.dragging._enabled ||
						!this._map.dragging || !this._map.dragging.moved()) && this.fire(t.type, {
						originalEvent: t,
						latlng: this._latlng
					})
				},
				_onKeyPress: function(t) {
					13 === t.keyCode && this.fire("click", {
						originalEvent: t,
						latlng: this._latlng
					})
				},
				_fireMouseEvent: function(t) {
					this.fire(t.type, {
							originalEvent: t,
							latlng: this._latlng
						}), "contextmenu" === t.type && this.hasEventListeners(t.type) && o.DomEvent.preventDefault(t), "mousedown" !==
						t.type ? o.DomEvent.stopPropagation(t) : o.DomEvent.preventDefault(t)
				},
				setOpacity: function(t) {
					return this.options.opacity = t, this._map && this._updateOpacity(), this
				},
				_updateOpacity: function() {
					o.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && o.DomUtil.setOpacity(this._shadow, this
						.options.opacity)
				},
				_bringToFront: function() {
					this._updateZIndex(this.options.riseOffset)
				},
				_resetZIndex: function() {
					this._updateZIndex(0)
				}
			}), o.marker = function(t, e) {
				return new o.Marker(t, e)
			}, o.DivIcon = o.Icon.extend({
				options: {
					iconSize: [12, 12],
					className: "leaflet-div-icon",
					html: !1
				},
				createIcon: function(t) {
					var i = t && "DIV" === t.tagName ? t : e.createElement("div"),
						n = this.options;
					return n.html !== !1 ? i.innerHTML = n.html : i.innerHTML = "", n.bgPos && (i.style.backgroundPosition = -n.bgPos
						.x + "px " + -n.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
				},
				createShadow: function() {
					return null
				}
			}), o.divIcon = function(t) {
				return new o.DivIcon(t)
			}, o.Map.mergeOptions({
				closePopupOnClick: !0
			}), o.Popup = o.Class.extend({
				includes: o.Mixin.Events,
				options: {
					minWidth: 50,
					maxWidth: 300,
					autoPan: !0,
					closeButton: !0,
					offset: [0, 7],
					autoPanPadding: [5, 5],
					keepInView: !1,
					className: "",
					zoomAnimation: !0
				},
				initialize: function(t, e) {
					o.setOptions(this, t), this._source = e, this._animated = o.Browser.any3d && this.options.zoomAnimation, this._isOpen = !
						1
				},
				onAdd: function(t) {
					this._map = t, this._container || this._initLayout();
					var e = t.options.fadeAnimation;
					e && o.DomUtil.setOpacity(this._container, 0), t._panes.popupPane.appendChild(this._container), t.on(this._getEvents(),
						this), this.update(), e && o.DomUtil.setOpacity(this._container, 1), this.fire("open"), t.fire("popupopen", {
						popup: this
					}), this._source && this._source.fire("popupopen", {
						popup: this
					})
				},
				addTo: function(t) {
					return t.addLayer(this), this
				},
				openOn: function(t) {
					return t.openPopup(this), this
				},
				onRemove: function(t) {
					t._panes.popupPane.removeChild(this._container), o.Util.falseFn(this._container.offsetWidth), t.off(this._getEvents(),
						this), t.options.fadeAnimation && o.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire(
						"close"), t.fire("popupclose", {
						popup: this
					}), this._source && this._source.fire("popupclose", {
						popup: this
					})
				},
				getLatLng: function() {
					return this._latlng
				},
				setLatLng: function(t) {
					return this._latlng = o.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
				},
				getContent: function() {
					return this._content
				},
				setContent: function(t) {
					return this._content = t, this.update(), this
				},
				update: function() {
					this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(),
						this._container.style.visibility = "", this._adjustPan())
				},
				_getEvents: function() {
					var t = {
						viewreset: this._updatePosition
					};
					return this._animated && (t.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick :
						this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend =
						this._adjustPan), t
				},
				_close: function() {
					this._map && this._map.closePopup(this)
				},
				_initLayout: function() {
					var t, e = "leaflet-popup",
						i = e + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
						n = this._container = o.DomUtil.create("div", i);
					this.options.closeButton && (t = this._closeButton = o.DomUtil.create("a", e + "-close-button", n), t.href =
						"#close", t.innerHTML = "&#215;", o.DomEvent.disableClickPropagation(t), o.DomEvent.on(t, "click", this._onCloseButtonClick,
							this));
					var s = this._wrapper = o.DomUtil.create("div", e + "-content-wrapper", n);
					o.DomEvent.disableClickPropagation(s), this._contentNode = o.DomUtil.create("div", e + "-content", s), o.DomEvent
						.disableScrollPropagation(this._contentNode), o.DomEvent.on(s, "contextmenu", o.DomEvent.stopPropagation),
						this._tipContainer = o.DomUtil.create("div", e + "-tip-container", n), this._tip = o.DomUtil.create("div", e +
							"-tip", this._tipContainer)
				},
				_updateContent: function() {
					if (this._content) {
						if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
						else {
							for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
							this._contentNode.appendChild(this._content)
						}
						this.fire("contentupdate")
					}
				},
				_updateLayout: function() {
					var t = this._contentNode,
						e = t.style;
					e.width = "", e.whiteSpace = "nowrap";
					var i = t.offsetWidth;
					i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace =
						"", e.height = "";
					var n = t.offsetHeight,
						s = this.options.maxHeight,
						a = "leaflet-popup-scrolled";
					s && n > s ? (e.height = s + "px", o.DomUtil.addClass(t, a)) : o.DomUtil.removeClass(t, a), this._containerWidth =
						this._container.offsetWidth
				},
				_updatePosition: function() {
					if (this._map) {
						var t = this._map.latLngToLayerPoint(this._latlng),
							e = this._animated,
							i = o.point(this.options.offset);
						e && o.DomUtil.setPosition(this._container, t), this._containerBottom = -i.y - (e ? 0 : t.y), this._containerLeft = -
							Math.round(this._containerWidth / 2) + i.x + (e ? 0 : t.x), this._container.style.bottom = this._containerBottom +
							"px", this._container.style.left = this._containerLeft + "px"
					}
				},
				_zoomAnimation: function(t) {
					var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
					o.DomUtil.setPosition(this._container, e)
				},
				_adjustPan: function() {
					if (this.options.autoPan) {
						var t = this._map,
							e = this._container.offsetHeight,
							i = this._containerWidth,
							n = new o.Point(this._containerLeft, -e - this._containerBottom);
						this._animated && n._add(o.DomUtil.getPosition(this._container));
						var s = t.layerPointToContainerPoint(n),
							a = o.point(this.options.autoPanPadding),
							r = o.point(this.options.autoPanPaddingTopLeft || a),
							h = o.point(this.options.autoPanPaddingBottomRight || a),
							l = t.getSize(),
							u = 0,
							c = 0;
						s.x + i + h.x > l.x && (u = s.x + i - l.x + h.x), s.x - u - r.x < 0 && (u = s.x - r.x), s.y + e + h.y > l.y &&
							(c = s.y + e - l.y + h.y), s.y - c - r.y < 0 && (c = s.y - r.y), (u || c) && t.fire("autopanstart").panBy([u,
								c
							])
					}
				},
				_onCloseButtonClick: function(t) {
					this._close(), o.DomEvent.stop(t)
				}
			}), o.popup = function(t, e) {
				return new o.Popup(t, e)
			}, o.Map.include({
				openPopup: function(t, e, i) {
					if (this.closePopup(), !(t instanceof o.Popup)) {
						var n = t;
						t = new o.Popup(i).setLatLng(e).setContent(n)
					}
					return t._isOpen = !0, this._popup = t, this.addLayer(t)
				},
				closePopup: function(t) {
					return t && t !== this._popup || (t = this._popup, this._popup = null), t && (this.removeLayer(t), t._isOpen = !
						1), this
				}
			}), o.Marker.include({
				openPopup: function() {
					return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng),
						this._map.openPopup(this._popup)), this
				},
				closePopup: function() {
					return this._popup && this._popup._close(), this
				},
				togglePopup: function() {
					return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this
				},
				bindPopup: function(t, e) {
					var i = o.point(this.options.icon.options.popupAnchor || [0, 0]);
					return i = i.add(o.Popup.prototype.options.offset), e && e.offset && (i = i.add(e.offset)), e = o.extend({
						offset: i
					}, e), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup,
						this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), t instanceof o.Popup ? (o.setOptions(
						t, e), this._popup = t, t._source = this) : this._popup = new o.Popup(e, this).setContent(t), this
				},
				setPopupContent: function(t) {
					return this._popup && this._popup.setContent(t), this
				},
				unbindPopup: function() {
					return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup,
						this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this
				},
				getPopup: function() {
					return this._popup
				},
				_movePopup: function(t) {
					this._popup.setLatLng(t.latlng)
				}
			}), o.LayerGroup = o.Class.extend({
				initialize: function(t) {
					this._layers = {};
					var e, i;
					if (t)
						for (e = 0, i = t.length; i > e; e++) this.addLayer(t[e])
				},
				addLayer: function(t) {
					var e = this.getLayerId(t);
					return this._layers[e] = t, this._map && this._map.addLayer(t), this
				},
				removeLayer: function(t) {
					var e = t in this._layers ? t : this.getLayerId(t);
					return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
				},
				hasLayer: function(t) {
					return t ? t in this._layers || this.getLayerId(t) in this._layers : !1
				},
				clearLayers: function() {
					return this.eachLayer(this.removeLayer, this), this
				},
				invoke: function(t) {
					var e, i, n = Array.prototype.slice.call(arguments, 1);
					for (e in this._layers) i = this._layers[e], i[t] && i[t].apply(i, n);
					return this
				},
				onAdd: function(t) {
					this._map = t, this.eachLayer(t.addLayer, t)
				},
				onRemove: function(t) {
					this.eachLayer(t.removeLayer, t), this._map = null
				},
				addTo: function(t) {
					return t.addLayer(this), this
				},
				eachLayer: function(t, e) {
					for (var i in this._layers) t.call(e, this._layers[i]);
					return this
				},
				getLayer: function(t) {
					return this._layers[t]
				},
				getLayers: function() {
					var t = [];
					for (var e in this._layers) t.push(this._layers[e]);
					return t
				},
				setZIndex: function(t) {
					return this.invoke("setZIndex", t)
				},
				getLayerId: function(t) {
					return o.stamp(t)
				}
			}), o.layerGroup = function(t) {
				return new o.LayerGroup(t)
			}, o.FeatureGroup = o.LayerGroup.extend({
				includes: o.Mixin.Events,
				statics: {
					EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose"
				},
				addLayer: function(t) {
					return this.hasLayer(t) ? this : ("on" in t && t.on(o.FeatureGroup.EVENTS, this._propagateEvent, this), o.LayerGroup
						.prototype.addLayer.call(this, t), this._popupContent && t.bindPopup && t.bindPopup(this._popupContent, this._popupOptions),
						this.fire("layeradd", {
							layer: t
						}))
				},
				removeLayer: function(t) {
					return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), "off" in t && t.off(o.FeatureGroup.EVENTS,
						this._propagateEvent, this), o.LayerGroup.prototype.removeLayer.call(this, t), this._popupContent && this.invoke(
						"unbindPopup"), this.fire("layerremove", {
						layer: t
					})) : this
				},
				bindPopup: function(t, e) {
					return this._popupContent = t, this._popupOptions = e, this.invoke("bindPopup", t, e)
				},
				openPopup: function(t) {
					for (var e in this._layers) {
						this._layers[e].openPopup(t);
						break
					}
					return this
				},
				setStyle: function(t) {
					return this.invoke("setStyle", t)
				},
				bringToFront: function() {
					return this.invoke("bringToFront")
				},
				bringToBack: function() {
					return this.invoke("bringToBack")
				},
				getBounds: function() {
					var t = new o.LatLngBounds;
					return this.eachLayer(function(e) {
						t.extend(e instanceof o.Marker ? e.getLatLng() : e.getBounds())
					}), t
				},
				_propagateEvent: function(t) {
					t = o.extend({
						layer: t.target,
						target: this
					}, t), this.fire(t.type, t)
				}
			}), o.featureGroup = function(t) {
				return new o.FeatureGroup(t)
			}, o.Path = o.Class.extend({
				includes: [o.Mixin.Events],
				statics: {
					CLIP_PADDING: function() {
						var e = o.Browser.mobile ? 1280 : 2e3,
							i = (e / Math.max(t.outerWidth, t.outerHeight) - 1) / 2;
						return Math.max(0, Math.min(.5, i))
					}()
				},
				options: {
					stroke: !0,
					color: "#0033ff",
					dashArray: null,
					lineCap: null,
					lineJoin: null,
					weight: 5,
					opacity: .5,
					fill: !1,
					fillColor: null,
					fillOpacity: .2,
					clickable: !0
				},
				initialize: function(t) {
					o.setOptions(this, t)
				},
				onAdd: function(t) {
					this._map = t, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(),
						this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), t.on({
							viewreset: this.projectLatlngs,
							moveend: this._updatePath
						}, this)
				},
				addTo: function(t) {
					return t.addLayer(this), this
				},
				onRemove: function(t) {
					t._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, o.Browser.vml && (this._container =
						null, this._stroke = null, this._fill = null), t.off({
						viewreset: this.projectLatlngs,
						moveend: this._updatePath
					}, this)
				},
				projectLatlngs: function() {},
				setStyle: function(t) {
					return o.setOptions(this, t), this._container && this._updateStyle(), this
				},
				redraw: function() {
					return this._map && (this.projectLatlngs(), this._updatePath()), this
				}
			}), o.Map.include({
				_updatePathViewport: function() {
					var t = o.Path.CLIP_PADDING,
						e = this.getSize(),
						i = o.DomUtil.getPosition(this._mapPane),
						n = i.multiplyBy(-1)._subtract(e.multiplyBy(t)._round()),
						s = n.add(e.multiplyBy(1 + 2 * t)._round());
					this._pathViewport = new o.Bounds(n, s)
				}
			}), o.Path.SVG_NS = "http://www.w3.org/2000/svg", o.Browser.svg = !(!e.createElementNS || !e.createElementNS(o.Path
				.SVG_NS, "svg").createSVGRect), o.Path = o.Path.extend({
				statics: {
					SVG: o.Browser.svg
				},
				bringToFront: function() {
					var t = this._map._pathRoot,
						e = this._container;
					return e && t.lastChild !== e && t.appendChild(e), this
				},
				bringToBack: function() {
					var t = this._map._pathRoot,
						e = this._container,
						i = t.firstChild;
					return e && i !== e && t.insertBefore(e, i), this
				},
				getPathString: function() {},
				_createElement: function(t) {
					return e.createElementNS(o.Path.SVG_NS, t)
				},
				_initElements: function() {
					this._map._initPathRoot(), this._initPath(), this._initStyle()
				},
				_initPath: function() {
					this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className &&
						o.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path)
				},
				_initStyle: function() {
					this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute(
							"stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options
						.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable ||
						this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle()
				},
				_updateStyle: function() {
					this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute(
							"stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options
						.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute(
							"stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap),
						this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute(
						"stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options
						.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill",
						"none")
				},
				_updatePath: function() {
					var t = this.getPathString();
					t || (t = "M0 0"), this._path.setAttribute("d", t)
				},
				_initEvents: function() {
					if (this.options.clickable) {
						(o.Browser.svg || !o.Browser.vml) && o.DomUtil.addClass(this._path, "leaflet-clickable"), o.DomEvent.on(this._container,
							"click", this._onMouseClick, this);
						for (var t = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], e = 0; e < t.length; e++)
							o.DomEvent.on(this._container, t[e], this._fireMouseEvent, this)
					}
				},
				_onMouseClick: function(t) {
					this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
				},
				_fireMouseEvent: function(t) {
					if (this._map && this.hasEventListeners(t.type)) {
						var e = this._map,
							i = e.mouseEventToContainerPoint(t),
							n = e.containerPointToLayerPoint(i),
							s = e.layerPointToLatLng(n);
						this.fire(t.type, {
							latlng: s,
							layerPoint: n,
							containerPoint: i,
							originalEvent: t
						}), "contextmenu" === t.type && o.DomEvent.preventDefault(t), "mousemove" !== t.type && o.DomEvent.stopPropagation(
							t)
					}
				}
			}), o.Map.include({
				_initPathRoot: function() {
					this._pathRoot || (this._pathRoot = o.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(
							this._pathRoot), this.options.zoomAnimation && o.Browser.any3d ? (o.DomUtil.addClass(this._pathRoot,
							"leaflet-zoom-animated"), this.on({
							zoomanim: this._animatePathZoom,
							zoomend: this._endPathZoom
						})) : o.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport),
						this._updateSvgViewport())
				},
				_animatePathZoom: function(t) {
					var e = this.getZoomScale(t.zoom),
						i = this._getCenterOffset(t.center)._multiplyBy(-e)._add(this._pathViewport.min);
					this._pathRoot.style[o.DomUtil.TRANSFORM] = o.DomUtil.getTranslateString(i) + " scale(" + e + ") ", this._pathZooming = !
						0
				},
				_endPathZoom: function() {
					this._pathZooming = !1
				},
				_updateSvgViewport: function() {
					if (!this._pathZooming) {
						this._updatePathViewport();
						var t = this._pathViewport,
							e = t.min,
							i = t.max,
							n = i.x - e.x,
							s = i.y - e.y,
							a = this._pathRoot,
							r = this._panes.overlayPane;
						o.Browser.mobileWebkit && r.removeChild(a), o.DomUtil.setPosition(a, e), a.setAttribute("width", n), a.setAttribute(
							"height", s), a.setAttribute("viewBox", [e.x, e.y, n, s].join(" ")), o.Browser.mobileWebkit && r.appendChild(
							a)
					}
				}
			}), o.Path.include({
				bindPopup: function(t, e) {
					return t instanceof o.Popup ? this._popup = t : ((!this._popup || e) && (this._popup = new o.Popup(e, this)),
						this._popup.setContent(t)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove",
						this.closePopup, this), this._popupHandlersAdded = !0), this
				},
				unbindPopup: function() {
					return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup),
						this._popupHandlersAdded = !1), this
				},
				openPopup: function(t) {
					return this._popup && (t = t || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({
						latlng: t
					})), this
				},
				closePopup: function() {
					return this._popup && this._popup._close(), this
				},
				_openPopup: function(t) {
					this._popup.setLatLng(t.latlng), this._map.openPopup(this._popup)
				}
			}), o.Browser.vml = !o.Browser.svg && function() {
				try {
					var t = e.createElement("div");
					t.innerHTML = '<v:shape adj="1"/>';
					var i = t.firstChild;
					return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
				} catch (n) {
					return !1
				}
			}(), o.Path = o.Browser.svg || !o.Browser.vml ? o.Path : o.Path.extend({
				statics: {
					VML: !0,
					CLIP_PADDING: .02
				},
				_createElement: function() {
					try {
						return e.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
							function(t) {
								return e.createElement("<lvml:" + t + ' class="lvml">')
							}
					} catch (t) {
						return function(t) {
							return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
						}
					}
				}(),
				_initPath: function() {
					var t = this._container = this._createElement("shape");
					o.DomUtil.addClass(t, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this
						.options.clickable && o.DomUtil.addClass(t, "leaflet-clickable"), t.coordsize = "1 1", this._path = this._createElement(
							"path"), t.appendChild(this._path), this._map._pathRoot.appendChild(t)
				},
				_initStyle: function() {
					this._updateStyle()
				},
				_updateStyle: function() {
					var t = this._stroke,
						e = this._fill,
						i = this.options,
						n = this._container;
					n.stroked = i.stroke, n.filled = i.fill, i.stroke ? (t || (t = this._stroke = this._createElement("stroke"), t.endcap =
								"round", n.appendChild(t)), t.weight = i.weight + "px", t.color = i.color, t.opacity = i.opacity, i.dashArray ?
							t.dashStyle = o.Util.isArray(i.dashArray) ? i.dashArray.join(" ") : i.dashArray.replace(/( *, *)/g, " ") : t.dashStyle =
							"", i.lineCap && (t.endcap = i.lineCap.replace("butt", "flat")), i.lineJoin && (t.joinstyle = i.lineJoin)) :
						t && (n.removeChild(t), this._stroke = null), i.fill ? (e || (e = this._fill = this._createElement("fill"), n.appendChild(
							e)), e.color = i.fillColor || i.color, e.opacity = i.fillOpacity) : e && (n.removeChild(e), this._fill = null)
				},
				_updatePath: function() {
					var t = this._container.style;
					t.display = "none", this._path.v = this.getPathString() + " ", t.display = ""
				}
			}), o.Map.include(o.Browser.svg || !o.Browser.vml ? {} : {
				_initPathRoot: function() {
					if (!this._pathRoot) {
						var t = this._pathRoot = e.createElement("div");
						t.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(t), this.on("moveend", this._updatePathViewport),
							this._updatePathViewport()
					}
				}
			}), o.Browser.canvas = function() {
				return !!e.createElement("canvas").getContext
			}(), o.Path = o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? o.Path : o.Path.extend({
				statics: {
					CANVAS: !0,
					SVG: !1
				},
				redraw: function() {
					return this._map && (this.projectLatlngs(), this._requestUpdate()), this
				},
				setStyle: function(t) {
					return o.setOptions(this, t), this._map && (this._updateStyle(), this._requestUpdate()), this
				},
				onRemove: function(t) {
					t.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable &&
						(this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(),
						this.fire("remove"), this._map = null
				},
				_requestUpdate: function() {
					this._map && !o.Path._updateRequest && (o.Path._updateRequest = o.Util.requestAnimFrame(this._fireMapMoveEnd,
						this._map))
				},
				_fireMapMoveEnd: function() {
					o.Path._updateRequest = null, this.fire("moveend")
				},
				_initElements: function() {
					this._map._initPathRoot(), this._ctx = this._map._canvasCtx
				},
				_updateStyle: function() {
					var t = this.options;
					t.stroke && (this._ctx.lineWidth = t.weight, this._ctx.strokeStyle = t.color), t.fill && (this._ctx.fillStyle =
						t.fillColor || t.color), t.lineCap && (this._ctx.lineCap = t.lineCap), t.lineJoin && (this._ctx.lineJoin = t.lineJoin)
				},
				_drawPath: function() {
					var t, e, i, n, s, a;
					for (this._ctx.beginPath(), t = 0, i = this._parts.length; i > t; t++) {
						for (e = 0, n = this._parts[t].length; n > e; e++) s = this._parts[t][e], a = (0 === e ? "move" : "line") +
							"To", this._ctx[a](s.x, s.y);
						this instanceof o.Polygon && this._ctx.closePath()
					}
				},
				_checkIfEmpty: function() {
					return !this._parts.length
				},
				_updatePath: function() {
					if (!this._checkIfEmpty()) {
						var t = this._ctx,
							e = this.options;
						this._drawPath(), t.save(), this._updateStyle(), e.fill && (t.globalAlpha = e.fillOpacity, t.fill(e.fillRule ||
							"evenodd")), e.stroke && (t.globalAlpha = e.opacity, t.stroke()), t.restore()
					}
				},
				_initEvents: function() {
					this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on(
						"click dblclick contextmenu", this._fireMouseEvent, this))
				},
				_fireMouseEvent: function(t) {
					this._containsPoint(t.layerPoint) && this.fire(t.type, t)
				},
				_onMouseMove: function(t) {
					this._map && !this._map._animatingZoom && (this._containsPoint(t.layerPoint) ? (this._ctx.canvas.style.cursor =
						"pointer", this._mouseInside = !0, this.fire("mouseover", t)) : this._mouseInside && (this._ctx.canvas.style
						.cursor = "", this._mouseInside = !1, this.fire("mouseout", t)))
				}
			}), o.Map.include(o.Path.SVG && !t.L_PREFER_CANVAS || !o.Browser.canvas ? {} : {
				_initPathRoot: function() {
					var t, i = this._pathRoot;
					i || (i = this._pathRoot = e.createElement("canvas"), i.style.position = "absolute", t = this._canvasCtx = i.getContext(
							"2d"), t.lineCap = "round", t.lineJoin = "round", this._panes.overlayPane.appendChild(i), this.options.zoomAnimation &&
						(this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on(
							"zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport()
					)
				},
				_updateCanvasViewport: function() {
					if (!this._pathZooming) {
						this._updatePathViewport();
						var t = this._pathViewport,
							e = t.min,
							i = t.max.subtract(e),
							n = this._pathRoot;
						o.DomUtil.setPosition(n, e), n.width = i.x, n.height = i.y, n.getContext("2d").translate(-e.x, -e.y)
					}
				}
			}), o.LineUtil = {
				simplify: function(t, e) {
					if (!e || !t.length) return t.slice();
					var i = e * e;
					return t = this._reducePoints(t, i), t = this._simplifyDP(t, i)
				},
				pointToSegmentDistance: function(t, e, i) {
					return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
				},
				closestPointOnSegment: function(t, e, i) {
					return this._sqClosestPointOnSegment(t, e, i)
				},
				_simplifyDP: function(t, e) {
					var n = t.length,
						o = typeof Uint8Array != i + "" ? Uint8Array : Array,
						s = new o(n);
					s[0] = s[n - 1] = 1, this._simplifyDPStep(t, s, e, 0, n - 1);
					var a, r = [];
					for (a = 0; n > a; a++) s[a] && r.push(t[a]);
					return r
				},
				_simplifyDPStep: function(t, e, i, n, o) {
					var s, a, r, h = 0;
					for (a = n + 1; o - 1 >= a; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[o], !0), r > h && (s = a, h = r);
					h > i && (e[s] = 1, this._simplifyDPStep(t, e, i, n, s), this._simplifyDPStep(t, e, i, s, o))
				},
				_reducePoints: function(t, e) {
					for (var i = [t[0]], n = 1, o = 0, s = t.length; s > n; n++) this._sqDist(t[n], t[o]) > e && (i.push(t[n]), o =
						n);
					return s - 1 > o && i.push(t[s - 1]), i
				},
				clipSegment: function(t, e, i, n) {
					var o, s, a, r = n ? this._lastCode : this._getBitCode(t, i),
						h = this._getBitCode(e, i);
					for (this._lastCode = h;;) {
						if (!(r | h)) return [t, e];
						if (r & h) return !1;
						o = r || h, s = this._getEdgeIntersection(t, e, o, i), a = this._getBitCode(s, i), o === r ? (t = s, r = a) : (
							e = s, h = a)
					}
				},
				_getEdgeIntersection: function(t, e, i, n) {
					var s = e.x - t.x,
						a = e.y - t.y,
						r = n.min,
						h = n.max;
					return 8 & i ? new o.Point(t.x + s * (h.y - t.y) / a, h.y) : 4 & i ? new o.Point(t.x + s * (r.y - t.y) / a, r.y) :
						2 & i ? new o.Point(h.x, t.y + a * (h.x - t.x) / s) : 1 & i ? new o.Point(r.x, t.y + a * (r.x - t.x) / s) :
						void 0
				},
				_getBitCode: function(t, e) {
					var i = 0;
					return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
				},
				_sqDist: function(t, e) {
					var i = e.x - t.x,
						n = e.y - t.y;
					return i * i + n * n
				},
				_sqClosestPointOnSegment: function(t, e, i, n) {
					var s, a = e.x,
						r = e.y,
						h = i.x - a,
						l = i.y - r,
						u = h * h + l * l;
					return u > 0 && (s = ((t.x - a) * h + (t.y - r) * l) / u, s > 1 ? (a = i.x, r = i.y) : s > 0 && (a += h * s, r +=
						l * s)), h = t.x - a, l = t.y - r, n ? h * h + l * l : new o.Point(a, r)
				}
			}, o.Polyline = o.Path.extend({
				initialize: function(t, e) {
					o.Path.prototype.initialize.call(this, e), this._latlngs = this._convertLatLngs(t)
				},
				options: {
					smoothFactor: 1,
					noClip: !1
				},
				projectLatlngs: function() {
					this._originalPoints = [];
					for (var t = 0, e = this._latlngs.length; e > t; t++) this._originalPoints[t] = this._map.latLngToLayerPoint(
						this._latlngs[t])
				},
				getPathString: function() {
					for (var t = 0, e = this._parts.length, i = ""; e > t; t++) i += this._getPathPartStr(this._parts[t]);
					return i
				},
				getLatLngs: function() {
					return this._latlngs
				},
				setLatLngs: function(t) {
					return this._latlngs = this._convertLatLngs(t), this.redraw()
				},
				addLatLng: function(t) {
					return this._latlngs.push(o.latLng(t)), this.redraw()
				},
				spliceLatLngs: function() {
					var t = [].splice.apply(this._latlngs, arguments);
					return this._convertLatLngs(this._latlngs, !0), this.redraw(), t
				},
				closestLayerPoint: function(t) {
					for (var e, i, n = 1 / 0, s = this._parts, a = null, r = 0, h = s.length; h > r; r++)
						for (var l = s[r], u = 1, c = l.length; c > u; u++) {
							e = l[u - 1], i = l[u];
							var d = o.LineUtil._sqClosestPointOnSegment(t, e, i, !0);
							n > d && (n = d, a = o.LineUtil._sqClosestPointOnSegment(t, e, i))
						}
					return a && (a.distance = Math.sqrt(n)), a
				},
				getBounds: function() {
					return new o.LatLngBounds(this.getLatLngs())
				},
				_convertLatLngs: function(t, e) {
					var i, n, s = e ? t : [];
					for (i = 0, n = t.length; n > i; i++) {
						if (o.Util.isArray(t[i]) && "number" != typeof t[i][0]) return;
						s[i] = o.latLng(t[i])
					}
					return s
				},
				_initEvents: function() {
					o.Path.prototype._initEvents.call(this)
				},
				_getPathPartStr: function(t) {
					for (var e, i = o.Path.VML, n = 0, s = t.length, a = ""; s > n; n++) e = t[n], i && e._round(), a += (n ? "L" :
						"M") + e.x + " " + e.y;
					return a
				},
				_clipPoints: function() {
					var t, e, i, n = this._originalPoints,
						s = n.length;
					if (this.options.noClip) return void(this._parts = [n]);
					this._parts = [];
					var a = this._parts,
						r = this._map._pathViewport,
						h = o.LineUtil;
					for (t = 0, e = 0; s - 1 > t; t++) i = h.clipSegment(n[t], n[t + 1], r, t), i && (a[e] = a[e] || [], a[e].push(
						i[0]), (i[1] !== n[t + 1] || t === s - 2) && (a[e].push(i[1]), e++))
				},
				_simplifyPoints: function() {
					for (var t = this._parts, e = o.LineUtil, i = 0, n = t.length; n > i; i++) t[i] = e.simplify(t[i], this.options
						.smoothFactor)
				},
				_updatePath: function() {
					this._map && (this._clipPoints(), this._simplifyPoints(), o.Path.prototype._updatePath.call(this))
				}
			}), o.polyline = function(t, e) {
				return new o.Polyline(t, e)
			}, o.PolyUtil = {}, o.PolyUtil.clipPolygon = function(t, e) {
				var i, n, s, a, r, h, l, u, c, d = [1, 4, 2, 8],
					p = o.LineUtil;
				for (n = 0, l = t.length; l > n; n++) t[n]._code = p._getBitCode(t[n], e);
				for (a = 0; 4 > a; a++) {
					for (u = d[a], i = [], n = 0, l = t.length, s = l - 1; l > n; s = n++) r = t[n], h = t[s], r._code & u ? h._code &
						u || (c = p._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)) : (h._code & u && (c = p
							._getEdgeIntersection(h, r, u, e), c._code = p._getBitCode(c, e), i.push(c)), i.push(r));
					t = i
				}
				return t
			}, o.Polygon = o.Polyline.extend({
				options: {
					fill: !0
				},
				initialize: function(t, e) {
					o.Polyline.prototype.initialize.call(this, t, e), this._initWithHoles(t)
				},
				_initWithHoles: function(t) {
					var e, i, n;
					if (t && o.Util.isArray(t[0]) && "number" != typeof t[0][0])
						for (this._latlngs = this._convertLatLngs(t[0]), this._holes = t.slice(1), e = 0, i = this._holes.length; i >
							e; e++) n = this._holes[e] = this._convertLatLngs(this._holes[e]), n[0].equals(n[n.length - 1]) && n.pop();
					t = this._latlngs, t.length >= 2 && t[0].equals(t[t.length - 1]) && t.pop()
				},
				projectLatlngs: function() {
					if (o.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
						var t, e, i, n;
						for (t = 0, i = this._holes.length; i > t; t++)
							for (this._holePoints[t] = [], e = 0, n = this._holes[t].length; n > e; e++) this._holePoints[t][e] = this._map
								.latLngToLayerPoint(this._holes[t][e])
					}
				},
				setLatLngs: function(t) {
					return t && o.Util.isArray(t[0]) && "number" != typeof t[0][0] ? (this._initWithHoles(t), this.redraw()) : o.Polyline
						.prototype.setLatLngs.call(this, t)
				},
				_clipPoints: function() {
					var t = this._originalPoints,
						e = [];
					if (this._parts = [t].concat(this._holePoints), !this.options.noClip) {
						for (var i = 0, n = this._parts.length; n > i; i++) {
							var s = o.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
							s.length && e.push(s)
						}
						this._parts = e
					}
				},
				_getPathPartStr: function(t) {
					var e = o.Polyline.prototype._getPathPartStr.call(this, t);
					return e + (o.Browser.svg ? "z" : "x")
				}
			}), o.polygon = function(t, e) {
				return new o.Polygon(t, e)
			},
			function() {
				function t(t) {
					return o.FeatureGroup.extend({
						initialize: function(t, e) {
							this._layers = {}, this._options = e, this.setLatLngs(t)
						},
						setLatLngs: function(e) {
							var i = 0,
								n = e.length;
							for (this.eachLayer(function(t) {
									n > i ? t.setLatLngs(e[i++]) : this.removeLayer(t)
								}, this); n > i;) this.addLayer(new t(e[i++], this._options));
							return this
						},
						getLatLngs: function() {
							var t = [];
							return this.eachLayer(function(e) {
								t.push(e.getLatLngs())
							}), t
						}
					})
				}
				o.MultiPolyline = t(o.Polyline), o.MultiPolygon = t(o.Polygon), o.multiPolyline = function(t, e) {
					return new o.MultiPolyline(t, e)
				}, o.multiPolygon = function(t, e) {
					return new o.MultiPolygon(t, e)
				}
			}(), o.Rectangle = o.Polygon.extend({
				initialize: function(t, e) {
					o.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
				},
				setBounds: function(t) {
					this.setLatLngs(this._boundsToLatLngs(t))
				},
				_boundsToLatLngs: function(t) {
					return t = o.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
				}
			}), o.rectangle = function(t, e) {
				return new o.Rectangle(t, e)
			}, o.Circle = o.Path.extend({
				initialize: function(t, e, i) {
					o.Path.prototype.initialize.call(this, i), this._latlng = o.latLng(t), this._mRadius = e
				},
				options: {
					fill: !0
				},
				setLatLng: function(t) {
					return this._latlng = o.latLng(t), this.redraw()
				},
				setRadius: function(t) {
					return this._mRadius = t, this.redraw()
				},
				projectLatlngs: function() {
					var t = this._getLngRadius(),
						e = this._latlng,
						i = this._map.latLngToLayerPoint([e.lat, e.lng - t]);
					this._point = this._map.latLngToLayerPoint(e), this._radius = Math.max(this._point.x - i.x, 1)
				},
				getBounds: function() {
					var t = this._getLngRadius(),
						e = this._mRadius / 40075017 * 360,
						i = this._latlng;
					return new o.LatLngBounds([i.lat - e, i.lng - t], [i.lat + e, i.lng + t])
				},
				getLatLng: function() {
					return this._latlng
				},
				getPathString: function() {
					var t = this._point,
						e = this._radius;
					return this._checkIfEmpty() ? "" : o.Browser.svg ? "M" + t.x + "," + (t.y - e) + "A" + e + "," + e + ",0,1,1," +
						(t.x - .1) + "," + (t.y - e) + " z" : (t._round(), e = Math.round(e), "AL " + t.x + "," + t.y + " " + e + "," +
							e + " 0,23592600")
				},
				getRadius: function() {
					return this._mRadius
				},
				_getLatRadius: function() {
					return this._mRadius / 40075017 * 360
				},
				_getLngRadius: function() {
					return this._getLatRadius() / Math.cos(o.LatLng.DEG_TO_RAD * this._latlng.lat)
				},
				_checkIfEmpty: function() {
					if (!this._map) return !1;
					var t = this._map._pathViewport,
						e = this._radius,
						i = this._point;
					return i.x - e > t.max.x || i.y - e > t.max.y || i.x + e < t.min.x || i.y + e < t.min.y
				}
			}), o.circle = function(t, e, i) {
				return new o.Circle(t, e, i)
			}, o.CircleMarker = o.Circle.extend({
				options: {
					radius: 10,
					weight: 2
				},
				initialize: function(t, e) {
					o.Circle.prototype.initialize.call(this, t, null, e), this._radius = this.options.radius
				},
				projectLatlngs: function() {
					this._point = this._map.latLngToLayerPoint(this._latlng)
				},
				_updateStyle: function() {
					o.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius)
				},
				setLatLng: function(t) {
					return o.Circle.prototype.setLatLng.call(this, t), this._popup && this._popup._isOpen && this._popup.setLatLng(
						t), this
				},
				setRadius: function(t) {
					return this.options.radius = this._radius = t, this.redraw()
				},
				getRadius: function() {
					return this._radius
				}
			}), o.circleMarker = function(t, e) {
				return new o.CircleMarker(t, e)
			}, o.Polyline.include(o.Path.CANVAS ? {
				_containsPoint: function(t, e) {
					var i, n, s, a, r, h, l, u = this.options.weight / 2;
					for (o.Browser.touch && (u += 10), i = 0, a = this._parts.length; a > i; i++)
						for (l = this._parts[i], n = 0, r = l.length, s = r - 1; r > n; s = n++)
							if ((e || 0 !== n) && (h = o.LineUtil.pointToSegmentDistance(t, l[s], l[n]), u >= h)) return !0;
					return !1
				}
			} : {}), o.Polygon.include(o.Path.CANVAS ? {
				_containsPoint: function(t) {
					var e, i, n, s, a, r, h, l, u = !1;
					if (o.Polyline.prototype._containsPoint.call(this, t, !0)) return !0;
					for (s = 0, h = this._parts.length; h > s; s++)
						for (e = this._parts[s], a = 0, l = e.length, r = l - 1; l > a; r = a++) i = e[a], n = e[r], i.y > t.y != n.y >
							t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (u = !u);
					return u
				}
			} : {}), o.Circle.include(o.Path.CANVAS ? {
				_drawPath: function() {
					var t = this._point;
					this._ctx.beginPath(), this._ctx.arc(t.x, t.y, this._radius, 0, 2 * Math.PI, !1)
				},
				_containsPoint: function(t) {
					var e = this._point,
						i = this.options.stroke ? this.options.weight / 2 : 0;
					return t.distanceTo(e) <= this._radius + i
				}
			} : {}), o.CircleMarker.include(o.Path.CANVAS ? {
				_updateStyle: function() {
					o.Path.prototype._updateStyle.call(this)
				}
			} : {}), o.GeoJSON = o.FeatureGroup.extend({
				initialize: function(t, e) {
					o.setOptions(this, e), this._layers = {}, t && this.addData(t)
				},
				addData: function(t) {
					var e, i, n, s = o.Util.isArray(t) ? t : t.features;
					if (s) {
						for (e = 0, i = s.length; i > e; e++) n = s[e], (n.geometries || n.geometry || n.features || n.coordinates) &&
							this.addData(s[e]);
						return this
					}
					var a = this.options;
					if (!a.filter || a.filter(t)) {
						var r = o.GeoJSON.geometryToLayer(t, a.pointToLayer, a.coordsToLatLng, a);
						return r.feature = o.GeoJSON.asFeature(t), r.defaultOptions = r.options, this.resetStyle(r), a.onEachFeature &&
							a.onEachFeature(t, r), this.addLayer(r)
					}
				},
				resetStyle: function(t) {
					var e = this.options.style;
					e && (o.Util.extend(t.options, t.defaultOptions), this._setLayerStyle(t, e))
				},
				setStyle: function(t) {
					this.eachLayer(function(e) {
						this._setLayerStyle(e, t)
					}, this)
				},
				_setLayerStyle: function(t, e) {
					"function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
				}
			}), o.extend(o.GeoJSON, {
				geometryToLayer: function(t, e, i, n) {
					var s, a, r, h, l = "Feature" === t.type ? t.geometry : t,
						u = l.coordinates,
						c = [];
					switch (i = i || this.coordsToLatLng, l.type) {
						case "Point":
							return s = i(u), e ? e(t, s) : new o.Marker(s);
						case "MultiPoint":
							for (r = 0, h = u.length; h > r; r++) s = i(u[r]), c.push(e ? e(t, s) : new o.Marker(s));
							return new o.FeatureGroup(c);
						case "LineString":
							return a = this.coordsToLatLngs(u, 0, i), new o.Polyline(a, n);
						case "Polygon":
							if (2 === u.length && !u[1].length) throw new Error("Invalid GeoJSON object.");
							return a = this.coordsToLatLngs(u, 1, i), new o.Polygon(a, n);
						case "MultiLineString":
							return a = this.coordsToLatLngs(u, 1, i), new o.MultiPolyline(a, n);
						case "MultiPolygon":
							return a = this.coordsToLatLngs(u, 2, i), new o.MultiPolygon(a, n);
						case "GeometryCollection":
							for (r = 0, h = l.geometries.length; h > r; r++) c.push(this.geometryToLayer({
								geometry: l.geometries[r],
								type: "Feature",
								properties: t.properties
							}, e, i, n));
							return new o.FeatureGroup(c);
						default:
							throw new Error("Invalid GeoJSON object.")
					}
				},
				coordsToLatLng: function(t) {
					return new o.LatLng(t[1], t[0], t[2])
				},
				coordsToLatLngs: function(t, e, i) {
					var n, o, s, a = [];
					for (o = 0, s = t.length; s > o; o++) n = e ? this.coordsToLatLngs(t[o], e - 1, i) : (i || this.coordsToLatLng)
						(t[o]), a.push(n);
					return a
				},
				latLngToCoords: function(t) {
					var e = [t.lng, t.lat];
					return t.alt !== i && e.push(t.alt), e
				},
				latLngsToCoords: function(t) {
					for (var e = [], i = 0, n = t.length; n > i; i++) e.push(o.GeoJSON.latLngToCoords(t[i]));
					return e
				},
				getFeature: function(t, e) {
					return t.feature ? o.extend({}, t.feature, {
						geometry: e
					}) : o.GeoJSON.asFeature(e)
				},
				asFeature: function(t) {
					return "Feature" === t.type ? t : {
						type: "Feature",
						properties: {},
						geometry: t
					}
				}
			});
		var a = {
			toGeoJSON: function() {
				return o.GeoJSON.getFeature(this, {
					type: "Point",
					coordinates: o.GeoJSON.latLngToCoords(this.getLatLng())
				})
			}
		};
		o.Marker.include(a), o.Circle.include(a), o.CircleMarker.include(a), o.Polyline.include({
				toGeoJSON: function() {
					return o.GeoJSON.getFeature(this, {
						type: "LineString",
						coordinates: o.GeoJSON.latLngsToCoords(this.getLatLngs())
					})
				}
			}), o.Polygon.include({
				toGeoJSON: function() {
					var t, e, i, n = [o.GeoJSON.latLngsToCoords(this.getLatLngs())];
					if (n[0].push(n[0][0]), this._holes)
						for (t = 0, e = this._holes.length; e > t; t++) i = o.GeoJSON.latLngsToCoords(this._holes[t]), i.push(i[0]), n
							.push(i);
					return o.GeoJSON.getFeature(this, {
						type: "Polygon",
						coordinates: n
					})
				}
			}),
			function() {
				function t(t) {
					return function() {
						var e = [];
						return this.eachLayer(function(t) {
							e.push(t.toGeoJSON().geometry.coordinates)
						}), o.GeoJSON.getFeature(this, {
							type: t,
							coordinates: e
						})
					}
				}
				o.MultiPolyline.include({
					toGeoJSON: t("MultiLineString")
				}), o.MultiPolygon.include({
					toGeoJSON: t("MultiPolygon")
				}), o.LayerGroup.include({
					toGeoJSON: function() {
						var e, i = this.feature && this.feature.geometry,
							n = [];
						if (i && "MultiPoint" === i.type) return t("MultiPoint").call(this);
						var s = i && "GeometryCollection" === i.type;
						return this.eachLayer(function(t) {
							t.toGeoJSON && (e = t.toGeoJSON(), n.push(s ? e.geometry : o.GeoJSON.asFeature(e)))
						}), s ? o.GeoJSON.getFeature(this, {
							geometries: n,
							type: "GeometryCollection"
						}) : {
							type: "FeatureCollection",
							features: n
						}
					}
				})
			}(), o.geoJson = function(t, e) {
				return new o.GeoJSON(t, e)
			}, o.DomEvent = {
				addListener: function(t, e, i, n) {
					var s, a, r, h = o.stamp(i),
						l = "_leaflet_" + e + h;
					return t[l] ? this : (s = function(e) {
						return i.call(n || t, e || o.DomEvent._getEvent())
					}, o.Browser.pointer && 0 === e.indexOf("touch") ? this.addPointerListener(t, e, s, h) : (o.Browser.touch &&
						"dblclick" === e && this.addDoubleTapListener && this.addDoubleTapListener(t, s, h), "addEventListener" in t ?
						"mousewheel" === e ? (t.addEventListener("DOMMouseScroll", s, !1), t.addEventListener(e, s, !1)) :
						"mouseenter" === e || "mouseleave" === e ? (a = s, r = "mouseenter" === e ? "mouseover" : "mouseout", s =
							function(e) {
								return o.DomEvent._checkMouse(t, e) ? a(e) : void 0
							}, t.addEventListener(r, s, !1)) : "click" === e && o.Browser.android ? (a = s, s = function(t) {
							return o.DomEvent._filterClick(t, a)
						}, t.addEventListener(e, s, !1)) : t.addEventListener(e, s, !1) : "attachEvent" in t && t.attachEvent("on" +
							e, s), t[l] = s, this))
				},
				removeListener: function(t, e, i) {
					var n = o.stamp(i),
						s = "_leaflet_" + e + n,
						a = t[s];
					return a ? (o.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : o.Browser.touch &&
						"dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in
						t ? "mousewheel" === e ? (t.removeEventListener("DOMMouseScroll", a, !1), t.removeEventListener(e, a, !1)) :
						"mouseenter" === e || "mouseleave" === e ? t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseout",
							a, !1) : t.removeEventListener(e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[s] = null,
						this) : this
				},
				stopPropagation: function(t) {
					return t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0, o.DomEvent._skipped(t), this
				},
				disableScrollPropagation: function(t) {
					var e = o.DomEvent.stopPropagation;
					return o.DomEvent.on(t, "mousewheel", e).on(t, "MozMousePixelScroll", e)
				},
				disableClickPropagation: function(t) {
					for (var e = o.DomEvent.stopPropagation, i = o.Draggable.START.length - 1; i >= 0; i--) o.DomEvent.on(t, o.Draggable
						.START[i], e);
					return o.DomEvent.on(t, "click", o.DomEvent._fakeStop).on(t, "dblclick", e)
				},
				preventDefault: function(t) {
					return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
				},
				stop: function(t) {
					return o.DomEvent.preventDefault(t).stopPropagation(t)
				},
				getMousePosition: function(t, e) {
					if (!e) return new o.Point(t.clientX, t.clientY);
					var i = e.getBoundingClientRect();
					return new o.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
				},
				getWheelDelta: function(t) {
					var e = 0;
					return t.wheelDelta && (e = t.wheelDelta / 120), t.detail && (e = -t.detail / 3), e
				},
				_skipEvents: {},
				_fakeStop: function(t) {
					o.DomEvent._skipEvents[t.type] = !0
				},
				_skipped: function(t) {
					var e = this._skipEvents[t.type];
					return this._skipEvents[t.type] = !1, e
				},
				_checkMouse: function(t, e) {
					var i = e.relatedTarget;
					if (!i) return !0;
					try {
						for (; i && i !== t;) i = i.parentNode
					} catch (n) {
						return !1
					}
					return i !== t
				},
				_getEvent: function() {
					var e = t.event;
					if (!e)
						for (var i = arguments.callee.caller; i && (e = i.arguments[0], !e || t.Event !== e.constructor);) i = i.caller;
					return e
				},
				_filterClick: function(t, e) {
					var i = t.timeStamp || t.originalEvent.timeStamp,
						n = o.DomEvent._lastClick && i - o.DomEvent._lastClick;
					return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void o.DomEvent.stop(t) : (o.DomEvent
						._lastClick = i, e(t))
				}
			}, o.DomEvent.on = o.DomEvent.addListener, o.DomEvent.off = o.DomEvent.removeListener, o.Draggable = o.Class.extend({
				includes: o.Mixin.Events,
				statics: {
					START: o.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
					END: {
						mousedown: "mouseup",
						touchstart: "touchend",
						pointerdown: "touchend",
						MSPointerDown: "touchend"
					},
					MOVE: {
						mousedown: "mousemove",
						touchstart: "touchmove",
						pointerdown: "touchmove",
						MSPointerDown: "touchmove"
					}
				},
				initialize: function(t, e) {
					this._element = t, this._dragStartTarget = e || t
				},
				enable: function() {
					if (!this._enabled) {
						for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.on(this._dragStartTarget, o.Draggable.START[
							t], this._onDown, this);
						this._enabled = !0
					}
				},
				disable: function() {
					if (this._enabled) {
						for (var t = o.Draggable.START.length - 1; t >= 0; t--) o.DomEvent.off(this._dragStartTarget, o.Draggable.START[
							t], this._onDown, this);
						this._enabled = !1, this._moved = !1
					}
				},
				_onDown: function(t) {
					if (this._moved = !1, !t.shiftKey && (1 === t.which || 1 === t.button || t.touches) && (o.DomEvent.stopPropagation(
							t), !o.Draggable._disabled && (o.DomUtil.disableImageDrag(), o.DomUtil.disableTextSelection(), !this._moving))) {
						var i = t.touches ? t.touches[0] : t;
						this._startPoint = new o.Point(i.clientX, i.clientY), this._startPos = this._newPos = o.DomUtil.getPosition(
							this._element), o.DomEvent.on(e, o.Draggable.MOVE[t.type], this._onMove, this).on(e, o.Draggable.END[t.type],
							this._onUp, this)
					}
				},
				_onMove: function(t) {
					if (t.touches && t.touches.length > 1) return void(this._moved = !0);
					var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
						n = new o.Point(i.clientX, i.clientY),
						s = n.subtract(this._startPoint);
					(s.x || s.y) && (o.Browser.touch && Math.abs(s.x) + Math.abs(s.y) < 3 || (o.DomEvent.preventDefault(t), this._moved ||
						(this.fire("dragstart"), this._moved = !0, this._startPos = o.DomUtil.getPosition(this._element).subtract(s),
							o.DomUtil.addClass(e.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, o.DomUtil.addClass(
								this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, o.Util.cancelAnimFrame(
							this._animRequest), this._animRequest = o.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget)
					))
				},
				_updatePosition: function() {
					this.fire("predrag"), o.DomUtil.setPosition(this._element, this._newPos), this.fire("drag")
				},
				_onUp: function() {
					o.DomUtil.removeClass(e.body, "leaflet-dragging"), this._lastTarget && (o.DomUtil.removeClass(this._lastTarget,
						"leaflet-drag-target"), this._lastTarget = null);
					for (var t in o.Draggable.MOVE) o.DomEvent.off(e, o.Draggable.MOVE[t], this._onMove).off(e, o.Draggable.END[t],
						this._onUp);
					o.DomUtil.enableImageDrag(), o.DomUtil.enableTextSelection(), this._moved && this._moving && (o.Util.cancelAnimFrame(
						this._animRequest), this.fire("dragend", {
						distance: this._newPos.distanceTo(this._startPos)
					})), this._moving = !1
				}
			}), o.Handler = o.Class.extend({
				initialize: function(t) {
					this._map = t
				},
				enable: function() {
					this._enabled || (this._enabled = !0, this.addHooks())
				},
				disable: function() {
					this._enabled && (this._enabled = !1, this.removeHooks())
				},
				enabled: function() {
					return !!this._enabled
				}
			}), o.Map.mergeOptions({
				dragging: !0,
				inertia: !o.Browser.android23,
				inertiaDeceleration: 3400,
				inertiaMaxSpeed: 1 / 0,
				inertiaThreshold: o.Browser.touch ? 32 : 18,
				easeLinearity: .25,
				worldCopyJump: !1
			}), o.Map.Drag = o.Handler.extend({
				addHooks: function() {
					if (!this._draggable) {
						var t = this._map;
						this._draggable = new o.Draggable(t._mapPane, t._container), this._draggable.on({
							dragstart: this._onDragStart,
							drag: this._onDrag,
							dragend: this._onDragEnd
						}, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), t.on("viewreset",
							this._onViewReset, this), t.whenReady(this._onViewReset, this))
					}
					this._draggable.enable()
				},
				removeHooks: function() {
					this._draggable.disable()
				},
				moved: function() {
					return this._draggable && this._draggable._moved
				},
				_onDragStart: function() {
					var t = this._map;
					t._panAnim && t._panAnim.stop(), t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [],
						this._times = [])
				},
				_onDrag: function() {
					if (this._map.options.inertia) {
						var t = this._lastTime = +new Date,
							e = this._lastPos = this._draggable._newPos;
						this._positions.push(e), this._times.push(t), t - this._times[0] > 200 && (this._positions.shift(), this._times
							.shift())
					}
					this._map.fire("move").fire("drag")
				},
				_onViewReset: function() {
					var t = this._map.getSize()._divideBy(2),
						e = this._map.latLngToLayerPoint([0, 0]);
					this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.project([0, 180]).x
				},
				_onPreDrag: function() {
					var t = this._worldWidth,
						e = Math.round(t / 2),
						i = this._initialWorldOffset,
						n = this._draggable._newPos.x,
						o = (n - e + i) % t + e - i,
						s = (n + e + i) % t - e - i,
						a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
					this._draggable._newPos.x = a
				},
				_onDragEnd: function(t) {
					var e = this._map,
						i = e.options,
						n = +new Date - this._lastTime,
						s = !i.inertia || n > i.inertiaThreshold || !this._positions[0];
					if (e.fire("dragend", t), s) e.fire("moveend");
					else {
						var a = this._lastPos.subtract(this._positions[0]),
							r = (this._lastTime + n - this._times[0]) / 1e3,
							h = i.easeLinearity,
							l = a.multiplyBy(h / r),
							u = l.distanceTo([0, 0]),
							c = Math.min(i.inertiaMaxSpeed, u),
							d = l.multiplyBy(c / u),
							p = c / (i.inertiaDeceleration * h),
							_ = d.multiplyBy(-p / 2).round();
						_.x && _.y ? (_ = e._limitOffset(_, e.options.maxBounds), o.Util.requestAnimFrame(function() {
							e.panBy(_, {
								duration: p,
								easeLinearity: h,
								noMoveStart: !0
							})
						})) : e.fire("moveend")
					}
				}
			}), o.Map.addInitHook("addHandler", "dragging", o.Map.Drag), o.Map.mergeOptions({
				doubleClickZoom: !0
			}), o.Map.DoubleClickZoom = o.Handler.extend({
				addHooks: function() {
					this._map.on("dblclick", this._onDoubleClick, this)
				},
				removeHooks: function() {
					this._map.off("dblclick", this._onDoubleClick, this)
				},
				_onDoubleClick: function(t) {
					var e = this._map,
						i = e.getZoom() + (t.originalEvent.shiftKey ? -1 : 1);
					"center" === e.options.doubleClickZoom ? e.setZoom(i) : e.setZoomAround(t.containerPoint, i)
				}
			}), o.Map.addInitHook("addHandler", "doubleClickZoom", o.Map.DoubleClickZoom), o.Map.mergeOptions({
				scrollWheelZoom: !0
			}), o.Map.ScrollWheelZoom = o.Handler.extend({
				addHooks: function() {
					o.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), o.DomEvent.on(this._map._container,
						"MozMousePixelScroll", o.DomEvent.preventDefault), this._delta = 0
				},
				removeHooks: function() {
					o.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), o.DomEvent.off(this._map._container,
						"MozMousePixelScroll", o.DomEvent.preventDefault)
				},
				_onWheelScroll: function(t) {
					var e = o.DomEvent.getWheelDelta(t);
					this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +
						new Date);
					var i = Math.max(40 - (+new Date - this._startTime), 0);
					clearTimeout(this._timer), this._timer = setTimeout(o.bind(this._performZoom, this), i), o.DomEvent.preventDefault(
						t), o.DomEvent.stopPropagation(t)
				},
				_performZoom: function() {
					var t = this._map,
						e = this._delta,
						i = t.getZoom();
					e = e > 0 ? Math.ceil(e) : Math.floor(e), e = Math.max(Math.min(e, 4), -4), e = t._limitZoom(i + e) - i, this._delta =
						0, this._startTime = null, e && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + e) : t.setZoomAround(
							this._lastMousePos, i + e))
				}
			}), o.Map.addInitHook("addHandler", "scrollWheelZoom", o.Map.ScrollWheelZoom), o.extend(o.DomEvent, {
				_touchstart: o.Browser.msPointer ? "MSPointerDown" : o.Browser.pointer ? "pointerdown" : "touchstart",
				_touchend: o.Browser.msPointer ? "MSPointerUp" : o.Browser.pointer ? "pointerup" : "touchend",
				addDoubleTapListener: function(t, i, n) {
					function s(t) {
						var e;
						if (o.Browser.pointer ? (_.push(t.pointerId), e = _.length) : e = t.touches.length, !(e > 1)) {
							var i = Date.now(),
								n = i - (r || i);
							h = t.touches ? t.touches[0] : t, l = n > 0 && u >= n, r = i
						}
					}

					function a(t) {
						if (o.Browser.pointer) {
							var e = _.indexOf(t.pointerId);
							if (-1 === e) return;
							_.splice(e, 1)
						}
						if (l) {
							if (o.Browser.pointer) {
								var n, s = {};
								for (var a in h) n = h[a], "function" == typeof n ? s[a] = n.bind(h) : s[a] = n;
								h = s
							}
							h.type = "dblclick", i(h), r = null
						}
					}
					var r, h, l = !1,
						u = 250,
						c = "_leaflet_",
						d = this._touchstart,
						p = this._touchend,
						_ = [];
					t[c + d + n] = s, t[c + p + n] = a;
					var m = o.Browser.pointer ? e.documentElement : t;
					return t.addEventListener(d, s, !1), m.addEventListener(p, a, !1), o.Browser.pointer && m.addEventListener(o.DomEvent
						.POINTER_CANCEL, a, !1), this
				},
				removeDoubleTapListener: function(t, i) {
					var n = "_leaflet_";
					return t.removeEventListener(this._touchstart, t[n + this._touchstart + i], !1), (o.Browser.pointer ? e.documentElement :
							t).removeEventListener(this._touchend, t[n + this._touchend + i], !1), o.Browser.pointer && e.documentElement
						.removeEventListener(o.DomEvent.POINTER_CANCEL, t[n + this._touchend + i], !1), this
				}
			}), o.extend(o.DomEvent, {
				POINTER_DOWN: o.Browser.msPointer ? "MSPointerDown" : "pointerdown",
				POINTER_MOVE: o.Browser.msPointer ? "MSPointerMove" : "pointermove",
				POINTER_UP: o.Browser.msPointer ? "MSPointerUp" : "pointerup",
				POINTER_CANCEL: o.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
				_pointers: [],
				_pointerDocumentListener: !1,
				addPointerListener: function(t, e, i, n) {
					switch (e) {
						case "touchstart":
							return this.addPointerListenerStart(t, e, i, n);
						case "touchend":
							return this.addPointerListenerEnd(t, e, i, n);
						case "touchmove":
							return this.addPointerListenerMove(t, e, i, n);
						default:
							throw "Unknown touch event type"
					}
				},
				addPointerListenerStart: function(t, i, n, s) {
					var a = "_leaflet_",
						r = this._pointers,
						h = function(t) {
							"mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && o.DomEvent.preventDefault(t);
							for (var e = !1, i = 0; i < r.length; i++)
								if (r[i].pointerId === t.pointerId) {
									e = !0;
									break
								} e || r.push(t), t.touches = r.slice(), t.changedTouches = [t], n(t)
						};
					if (t[a + "touchstart" + s] = h, t.addEventListener(this.POINTER_DOWN, h, !1), !this._pointerDocumentListener) {
						var l = function(t) {
							for (var e = 0; e < r.length; e++)
								if (r[e].pointerId === t.pointerId) {
									r.splice(e, 1);
									break
								}
						};
						e.documentElement.addEventListener(this.POINTER_UP, l, !1), e.documentElement.addEventListener(this.POINTER_CANCEL,
							l, !1), this._pointerDocumentListener = !0
					}
					return this
				},
				addPointerListenerMove: function(t, e, i, n) {
					function o(t) {
						if (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) {
							for (var e = 0; e < a.length; e++)
								if (a[e].pointerId === t.pointerId) {
									a[e] = t;
									break
								} t.touches = a.slice(), t.changedTouches = [t], i(t)
						}
					}
					var s = "_leaflet_",
						a = this._pointers;
					return t[s + "touchmove" + n] = o, t.addEventListener(this.POINTER_MOVE, o, !1), this
				},
				addPointerListenerEnd: function(t, e, i, n) {
					var o = "_leaflet_",
						s = this._pointers,
						a = function(t) {
							for (var e = 0; e < s.length; e++)
								if (s[e].pointerId === t.pointerId) {
									s.splice(e, 1);
									break
								} t.touches = s.slice(), t.changedTouches = [t], i(t)
						};
					return t[o + "touchend" + n] = a, t.addEventListener(this.POINTER_UP, a, !1), t.addEventListener(this.POINTER_CANCEL,
						a, !1), this
				},
				removePointerListener: function(t, e, i) {
					var n = "_leaflet_",
						o = t[n + e + i];
					switch (e) {
						case "touchstart":
							t.removeEventListener(this.POINTER_DOWN, o, !1);
							break;
						case "touchmove":
							t.removeEventListener(this.POINTER_MOVE, o, !1);
							break;
						case "touchend":
							t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)
					}
					return this
				}
			}), o.Map.mergeOptions({
				touchZoom: o.Browser.touch && !o.Browser.android23,
				bounceAtZoomLimits: !0
			}), o.Map.TouchZoom = o.Handler.extend({
				addHooks: function() {
					o.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
				},
				removeHooks: function() {
					o.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
				},
				_onTouchStart: function(t) {
					var i = this._map;
					if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
						var n = i.mouseEventToLayerPoint(t.touches[0]),
							s = i.mouseEventToLayerPoint(t.touches[1]),
							a = i._getCenterLayerPoint();
						this._startCenter = n.add(s)._divideBy(2), this._startDist = n.distanceTo(s), this._moved = !1, this._zooming = !
							0, this._centerOffset = a.subtract(this._startCenter), i._panAnim && i._panAnim.stop(), o.DomEvent.on(e,
								"touchmove", this._onTouchMove, this).on(e, "touchend", this._onTouchEnd, this), o.DomEvent.preventDefault(t)
					}
				},
				_onTouchMove: function(t) {
					var e = this._map;
					if (t.touches && 2 === t.touches.length && this._zooming) {
						var i = e.mouseEventToLayerPoint(t.touches[0]),
							n = e.mouseEventToLayerPoint(t.touches[1]);
						this._scale = i.distanceTo(n) / this._startDist, this._delta = i._add(n)._divideBy(2)._subtract(this._startCenter),
							1 !== this._scale && (e.options.bounceAtZoomLimits || !(e.getZoom() === e.getMinZoom() && this._scale < 1 ||
								e.getZoom() === e.getMaxZoom() && this._scale > 1)) && (this._moved || (o.DomUtil.addClass(e._mapPane,
									"leaflet-touching"), e.fire("movestart").fire("zoomstart"), this._moved = !0), o.Util.cancelAnimFrame(this._animRequest),
								this._animRequest = o.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), o.DomEvent.preventDefault(
									t))
					}
				},
				_updateOnMove: function() {
					var t = this._map,
						e = this._getScaleOrigin(),
						i = t.layerPointToLatLng(e),
						n = t.getScaleZoom(this._scale);
					t._animateZoom(i, n, this._startCenter, this._scale, this._delta, !1, !0)
				},
				_onTouchEnd: function() {
					if (!this._moved || !this._zooming) return void(this._zooming = !1);
					var t = this._map;
					this._zooming = !1, o.DomUtil.removeClass(t._mapPane, "leaflet-touching"), o.Util.cancelAnimFrame(this._animRequest),
						o.DomEvent.off(e, "touchmove", this._onTouchMove).off(e, "touchend", this._onTouchEnd);
					var i = this._getScaleOrigin(),
						n = t.layerPointToLatLng(i),
						s = t.getZoom(),
						a = t.getScaleZoom(this._scale) - s,
						r = a > 0 ? Math.ceil(a) : Math.floor(a),
						h = t._limitZoom(s + r),
						l = t.getZoomScale(h) / this._scale;
					t._animateZoom(n, h, i, l)
				},
				_getScaleOrigin: function() {
					var t = this._centerOffset.subtract(this._delta).divideBy(this._scale);
					return this._startCenter.add(t)
				}
			}), o.Map.addInitHook("addHandler", "touchZoom", o.Map.TouchZoom), o.Map.mergeOptions({
				tap: !0,
				tapTolerance: 15
			}), o.Map.Tap = o.Handler.extend({
				addHooks: function() {
					o.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
				},
				removeHooks: function() {
					o.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
				},
				_onDown: function(t) {
					if (t.touches) {
						if (o.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1,
							void clearTimeout(this._holdTimeout);
						var i = t.touches[0],
							n = i.target;
						this._startPos = this._newPos = new o.Point(i.clientX, i.clientY), n.tagName && "a" === n.tagName.toLowerCase() &&
							o.DomUtil.addClass(n, "leaflet-active"), this._holdTimeout = setTimeout(o.bind(function() {
								this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
							}, this), 1e3), o.DomEvent.on(e, "touchmove", this._onMove, this).on(e, "touchend", this._onUp, this)
					}
				},
				_onUp: function(t) {
					if (clearTimeout(this._holdTimeout), o.DomEvent.off(e, "touchmove", this._onMove, this).off(e, "touchend", this
							._onUp, this), this._fireClick && t && t.changedTouches) {
						var i = t.changedTouches[0],
							n = i.target;
						n && n.tagName && "a" === n.tagName.toLowerCase() && o.DomUtil.removeClass(n, "leaflet-active"), this._isTapValid() &&
							this._simulateEvent("click", i)
					}
				},
				_isTapValid: function() {
					return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
				},
				_onMove: function(t) {
					var e = t.touches[0];
					this._newPos = new o.Point(e.clientX, e.clientY)
				},
				_simulateEvent: function(i, n) {
					var o = e.createEvent("MouseEvents");
					o._simulated = !0, n.target._simulatedClick = !0, o.initMouseEvent(i, !0, !0, t, 1, n.screenX, n.screenY, n.clientX,
						n.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(o)
				}
			}), o.Browser.touch && !o.Browser.pointer && o.Map.addInitHook("addHandler", "tap", o.Map.Tap), o.Map.mergeOptions({
				boxZoom: !0
			}), o.Map.BoxZoom = o.Handler.extend({
				initialize: function(t) {
					this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._moved = !1
				},
				addHooks: function() {
					o.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
				},
				removeHooks: function() {
					o.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1
				},
				moved: function() {
					return this._moved
				},
				_onMouseDown: function(t) {
					return this._moved = !1, !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (o.DomUtil.disableTextSelection(),
						o.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(t), void o.DomEvent.on(
							e, "mousemove", this._onMouseMove, this).on(e, "mouseup", this._onMouseUp, this).on(e, "keydown", this._onKeyDown,
							this))
				},
				_onMouseMove: function(t) {
					this._moved || (this._box = o.DomUtil.create("div", "leaflet-zoom-box", this._pane), o.DomUtil.setPosition(this
						._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
					var e = this._startLayerPoint,
						i = this._box,
						n = this._map.mouseEventToLayerPoint(t),
						s = n.subtract(e),
						a = new o.Point(Math.min(n.x, e.x), Math.min(n.y, e.y));
					o.DomUtil.setPosition(i, a), this._moved = !0, i.style.width = Math.max(0, Math.abs(s.x) - 4) + "px", i.style.height =
						Math.max(0, Math.abs(s.y) - 4) + "px"
				},
				_finish: function() {
					this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), o.DomUtil.enableTextSelection(),
						o.DomUtil.enableImageDrag(), o.DomEvent.off(e, "mousemove", this._onMouseMove).off(e, "mouseup", this._onMouseUp)
						.off(e, "keydown", this._onKeyDown)
				},
				_onMouseUp: function(t) {
					this._finish();
					var e = this._map,
						i = e.mouseEventToLayerPoint(t);
					if (!this._startLayerPoint.equals(i)) {
						var n = new o.LatLngBounds(e.layerPointToLatLng(this._startLayerPoint), e.layerPointToLatLng(i));
						e.fitBounds(n), e.fire("boxzoomend", {
							boxZoomBounds: n
						})
					}
				},
				_onKeyDown: function(t) {
					27 === t.keyCode && this._finish()
				}
			}), o.Map.addInitHook("addHandler", "boxZoom", o.Map.BoxZoom), o.Map.mergeOptions({
				keyboard: !0,
				keyboardPanOffset: 80,
				keyboardZoomOffset: 1
			}), o.Map.Keyboard = o.Handler.extend({
				keyCodes: {
					left: [37],
					right: [39],
					down: [40],
					up: [38],
					zoomIn: [187, 107, 61, 171],
					zoomOut: [189, 109, 173]
				},
				initialize: function(t) {
					this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
				},
				addHooks: function() {
					var t = this._map._container; - 1 === t.tabIndex && (t.tabIndex = "0"), o.DomEvent.on(t, "focus", this._onFocus,
						this).on(t, "blur", this._onBlur, this).on(t, "mousedown", this._onMouseDown, this), this._map.on("focus",
						this._addHooks, this).on("blur", this._removeHooks, this)
				},
				removeHooks: function() {
					this._removeHooks();
					var t = this._map._container;
					o.DomEvent.off(t, "focus", this._onFocus, this).off(t, "blur", this._onBlur, this).off(t, "mousedown", this._onMouseDown,
						this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this)
				},
				_onMouseDown: function() {
					if (!this._focused) {
						var i = e.body,
							n = e.documentElement,
							o = i.scrollTop || n.scrollTop,
							s = i.scrollLeft || n.scrollLeft;
						this._map._container.focus(), t.scrollTo(s, o)
					}
				},
				_onFocus: function() {
					this._focused = !0, this._map.fire("focus")
				},
				_onBlur: function() {
					this._focused = !1, this._map.fire("blur")
				},
				_setPanOffset: function(t) {
					var e, i, n = this._panKeys = {},
						o = this.keyCodes;
					for (e = 0, i = o.left.length; i > e; e++) n[o.left[e]] = [-1 * t, 0];
					for (e = 0, i = o.right.length; i > e; e++) n[o.right[e]] = [t, 0];
					for (e = 0, i = o.down.length; i > e; e++) n[o.down[e]] = [0, t];
					for (e = 0, i = o.up.length; i > e; e++) n[o.up[e]] = [0, -1 * t]
				},
				_setZoomOffset: function(t) {
					var e, i, n = this._zoomKeys = {},
						o = this.keyCodes;
					for (e = 0, i = o.zoomIn.length; i > e; e++) n[o.zoomIn[e]] = t;
					for (e = 0, i = o.zoomOut.length; i > e; e++) n[o.zoomOut[e]] = -t
				},
				_addHooks: function() {
					o.DomEvent.on(e, "keydown", this._onKeyDown, this)
				},
				_removeHooks: function() {
					o.DomEvent.off(e, "keydown", this._onKeyDown, this)
				},
				_onKeyDown: function(t) {
					var e = t.keyCode,
						i = this._map;
					if (e in this._panKeys) {
						if (i._panAnim && i._panAnim._inProgress) return;
						i.panBy(this._panKeys[e]), i.options.maxBounds && i.panInsideBounds(i.options.maxBounds)
					} else {
						if (!(e in this._zoomKeys)) return;
						i.setZoom(i.getZoom() + this._zoomKeys[e])
					}
					o.DomEvent.stop(t)
				}
			}), o.Map.addInitHook("addHandler", "keyboard", o.Map.Keyboard), o.Handler.MarkerDrag = o.Handler.extend({
				initialize: function(t) {
					this._marker = t
				},
				addHooks: function() {
					var t = this._marker._icon;
					this._draggable || (this._draggable = new o.Draggable(t, t)), this._draggable.on("dragstart", this._onDragStart,
							this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), o.DomUtil
						.addClass(this._marker._icon, "leaflet-marker-draggable")
				},
				removeHooks: function() {
					this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd,
						this), this._draggable.disable(), o.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
				},
				moved: function() {
					return this._draggable && this._draggable._moved
				},
				_onDragStart: function() {
					this._marker.closePopup().fire("movestart").fire("dragstart")
				},
				_onDrag: function() {
					var t = this._marker,
						e = t._shadow,
						i = o.DomUtil.getPosition(t._icon),
						n = t._map.layerPointToLatLng(i);
					e && o.DomUtil.setPosition(e, i), t._latlng = n, t.fire("move", {
						latlng: n
					}).fire("drag")
				},
				_onDragEnd: function(t) {
					this._marker.fire("moveend").fire("dragend", t)
				}
			}), o.Control = o.Class.extend({
				options: {
					position: "topright"
				},
				initialize: function(t) {
					o.setOptions(this, t)
				},
				getPosition: function() {
					return this.options.position
				},
				setPosition: function(t) {
					var e = this._map;
					return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
				},
				getContainer: function() {
					return this._container
				},
				addTo: function(t) {
					this._map = t;
					var e = this._container = this.onAdd(t),
						i = this.getPosition(),
						n = t._controlCorners[i];
					return o.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) :
						n.appendChild(e), this
				},
				removeFrom: function(t) {
					var e = this.getPosition(),
						i = t._controlCorners[e];
					return i.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(t), this
				},
				_refocusOnMap: function() {
					this._map && this._map.getContainer().focus()
				}
			}), o.control = function(t) {
				return new o.Control(t)
			}, o.Map.include({
				addControl: function(t) {
					return t.addTo(this), this
				},
				removeControl: function(t) {
					return t.removeFrom(this), this
				},
				_initControlPos: function() {
					function t(t, s) {
						var a = i + t + " " + i + s;
						e[t + s] = o.DomUtil.create("div", a, n)
					}
					var e = this._controlCorners = {},
						i = "leaflet-",
						n = this._controlContainer = o.DomUtil.create("div", i + "control-container", this._container);
					t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
				},
				_clearControlPos: function() {
					this._container.removeChild(this._controlContainer)
				}
			}), o.Control.Zoom = o.Control.extend({
				options: {
					position: "topleft",
					zoomInText: "+",
					/*zoomInTitle:"Zoom in"*/
					zoomInTitle: "放大",
					zoomOutText: "-",
					/*zoomOutTitle:"Zoom out"*/
					zoomOutTitle: "缩小"
				},
				onAdd: function(t) {
					var e = "leaflet-control-zoom",
						i = o.DomUtil.create("div", e + " leaflet-bar");
					return this._map = t, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle,
						e + "-in", i, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options
						.zoomOutTitle, e + "-out", i, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange",
						this._updateDisabled, this), i
				},
				onRemove: function(t) {
					t.off("zoomend zoomlevelschange", this._updateDisabled, this)
				},
				_zoomIn: function(t) {
					this._map.zoomIn(t.shiftKey ? 3 : 1)
				},
				_zoomOut: function(t) {
					this._map.zoomOut(t.shiftKey ? 3 : 1)
				},
				_createButton: function(t, e, i, n, s, a) {
					var r = o.DomUtil.create("a", i, n);
					r.innerHTML = t, r.href = "#", r.title = e;
					var h = o.DomEvent.stopPropagation;
					return o.DomEvent.on(r, "click", h).on(r, "mousedown", h).on(r, "dblclick", h).on(r, "click", o.DomEvent.preventDefault)
						.on(r, "click", s, a).on(r, "click", this._refocusOnMap, a), r
				},
				_updateDisabled: function() {
					var t = this._map,
						e = "leaflet-disabled";
					o.DomUtil.removeClass(this._zoomInButton, e), o.DomUtil.removeClass(this._zoomOutButton, e), t._zoom === t.getMinZoom() &&
						o.DomUtil.addClass(this._zoomOutButton, e), t._zoom === t.getMaxZoom() && o.DomUtil.addClass(this._zoomInButton,
							e)
				}
			}), o.Map.mergeOptions({
				zoomControl: !0
			}), o.Map.addInitHook(function() {
				this.options.zoomControl && (this.zoomControl = new o.Control.Zoom, this.addControl(this.zoomControl))
			}), o.control.zoom = function(t) {
				return new o.Control.Zoom(t)
			}, o.Control.Attribution = o.Control.extend({
				options: {
					position: "bottomright",
					prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
				},
				initialize: function(t) {
					o.setOptions(this, t), this._attributions = {}
				},
				onAdd: function(t) {
					this._container = o.DomUtil.create("div", "leaflet-control-attribution"), o.DomEvent.disableClickPropagation(
						this._container);
					for (var e in t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
					return t.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(),
						this._container
				},
				onRemove: function(t) {
					t.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove)
				},
				setPrefix: function(t) {
					return this.options.prefix = t, this._update(), this
				},
				addAttribution: function(t) {
					return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) :
						void 0
				},
				removeAttribution: function(t) {
					return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : void 0
				},
				_update: function() {
					if (this._map) {
						var t = [];
						for (var e in this._attributions) this._attributions[e] && t.push(e);
						var i = [];
						this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML =
							i.join(" | ")
					}
				},
				_onLayerAdd: function(t) {
					t.layer.getAttribution && this.addAttribution(t.layer.getAttribution())
				},
				_onLayerRemove: function(t) {
					t.layer.getAttribution && this.removeAttribution(t.layer.getAttribution())
				}
			}), o.Map.mergeOptions({
				attributionControl: !0
			}), o.Map.addInitHook(function() {
				this.options.attributionControl && (this.attributionControl = (new o.Control.Attribution).addTo(this))
			}), o.control.attribution = function(t) {
				return new o.Control.Attribution(t)
			}, o.Control.Scale = o.Control.extend({
				options: {
					position: "bottomleft",
					maxWidth: 100,
					metric: !0,
					imperial: !0,
					updateWhenIdle: !1
				},
				onAdd: function(t) {
					this._map = t;
					var e = "leaflet-control-scale",
						i = o.DomUtil.create("div", e),
						n = this.options;
					return this._addScales(n, e, i), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(
						this._update, this), i
				},
				onRemove: function(t) {
					t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
				},
				_addScales: function(t, e, i) {
					t.metric && (this._mScale = o.DomUtil.create("div", e + "-line", i)), t.imperial && (this._iScale = o.DomUtil.create(
						"div", e + "-line", i))
				},
				_update: function() {
					var t = this._map.getBounds(),
						e = t.getCenter().lat,
						i = 6378137 * Math.PI * Math.cos(e * Math.PI / 180),
						n = i * (t.getNorthEast().lng - t.getSouthWest().lng) / 180,
						o = this._map.getSize(),
						s = this.options,
						a = 0;
					o.x > 0 && (a = n * (s.maxWidth / o.x)), this._updateScales(s, a)
				},
				_updateScales: function(t, e) {
					t.metric && e && this._updateMetric(e), t.imperial && e && this._updateImperial(e)
				},
				_updateMetric: function(t) {
					var e = this._getRoundNum(t);
					this._mScale.style.width = this._getScaleWidth(e / t) + "px", this._mScale.innerHTML = 1e3 > e ? e + " m" : e /
						1e3 + " km"
				},
				_updateImperial: function(t) {
					var e, i, n, o = 3.2808399 * t,
						s = this._iScale;
					o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), s.style.width = this._getScaleWidth(i / e) + "px", s.innerHTML =
						i + " mi") : (n = this._getRoundNum(o), s.style.width = this._getScaleWidth(n / o) + "px", s.innerHTML = n +
						" ft")
				},
				_getScaleWidth: function(t) {
					return Math.round(this.options.maxWidth * t) - 10
				},
				_getRoundNum: function(t) {
					var e = Math.pow(10, (Math.floor(t) + "").length - 1),
						i = t / e;
					return i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1, e * i
				}
			}), o.control.scale = function(t) {
				return new o.Control.Scale(t)
			}, o.Control.Layers = o.Control.extend({
				options: {
					collapsed: !0,
					position: "topright",
					autoZIndex: !0
				},
				initialize: function(t, e, i) {
					o.setOptions(this, i), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
					for (var n in t) this._addLayer(t[n], n);
					for (n in e) this._addLayer(e[n], n, !0)
				},
				onAdd: function(t) {
					return this._initLayout(), this._update(), t.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange,
						this), this._container
				},
				onRemove: function(t) {
					t.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this)
				},
				addBaseLayer: function(t, e) {
					return this._addLayer(t, e), this._update(), this
				},
				addOverlay: function(t, e) {
					return this._addLayer(t, e, !0), this._update(), this
				},
				removeLayer: function(t) {
					var e = o.stamp(t);
					return delete this._layers[e], this._update(), this
				},
				_initLayout: function() {
					var t = "leaflet-control-layers",
						e = this._container = o.DomUtil.create("div", t);
					e.setAttribute("aria-haspopup", !0), o.Browser.touch ? o.DomEvent.on(e, "click", o.DomEvent.stopPropagation) :
						o.DomEvent.disableClickPropagation(e).disableScrollPropagation(e);
					var i = this._form = o.DomUtil.create("form", t + "-list");
					if (this.options.collapsed) {
						o.Browser.android || o.DomEvent.on(e, "mouseover", this._expand, this).on(e, "mouseout", this._collapse, this);
						var n = this._layersLink = o.DomUtil.create("a", t + "-toggle", e);
						n.href = "#", n.title = "Layers", o.Browser.touch ? o.DomEvent.on(n, "click", o.DomEvent.stop).on(n, "click",
							this._expand, this) : o.DomEvent.on(n, "focus", this._expand, this), o.DomEvent.on(i, "click", function() {
							setTimeout(o.bind(this._onInputClick, this), 0)
						}, this), this._map.on("click", this._collapse, this)
					} else this._expand();
					this._baseLayersList = o.DomUtil.create("div", t + "-base", i), this._separator = o.DomUtil.create("div", t +
						"-separator", i), this._overlaysList = o.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
				},
				_addLayer: function(t, e, i) {
					var n = o.stamp(t);
					this._layers[n] = {
						layer: t,
						name: e,
						overlay: i
					}, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
				},
				_update: function() {
					if (this._container) {
						this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
						var t, e, i = !1,
							n = !1;
						for (t in this._layers) e = this._layers[t], this._addItem(e), n = n || e.overlay, i = i || !e.overlay;
						this._separator.style.display = n && i ? "" : "none"
					}
				},
				_onLayerChange: function(t) {
					var e = this._layers[o.stamp(t.layer)];
					if (e) {
						this._handlingClick || this._update();
						var i = e.overlay ? "layeradd" === t.type ? "overlayadd" : "overlayremove" : "layeradd" === t.type ?
							"baselayerchange" : null;
						i && this._map.fire(i, e)
					}
				},
				_createRadioElement: function(t, i) {
					var n = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"';
					i && (n += ' checked="checked"'), n += "/>";
					var o = e.createElement("div");
					return o.innerHTML = n, o.firstChild
				},
				_addItem: function(t) {
					var i, n = e.createElement("label"),
						s = this._map.hasLayer(t.layer);
					t.overlay ? (i = e.createElement("input"), i.type = "checkbox", i.className = "leaflet-control-layers-selector",
							i.defaultChecked = s) : i = this._createRadioElement("leaflet-base-layers", s), i.layerId = o.stamp(t.layer),
						o.DomEvent.on(i, "click", this._onInputClick, this);
					var a = e.createElement("span");
					a.innerHTML = " " + t.name, n.appendChild(i), n.appendChild(a);
					var r = t.overlay ? this._overlaysList : this._baseLayersList;
					return r.appendChild(n), n
				},
				_onInputClick: function() {
					var t, e, i, n = this._form.getElementsByTagName("input"),
						o = n.length;
					for (this._handlingClick = !0, t = 0; o > t; t++) e = n[t], i = this._layers[e.layerId], e.checked && !this._map
						.hasLayer(i.layer) ? this._map.addLayer(i.layer) : !e.checked && this._map.hasLayer(i.layer) && this._map.removeLayer(
							i.layer);
					this._handlingClick = !1, this._refocusOnMap()
				},
				_expand: function() {
					o.DomUtil.addClass(this._container, "leaflet-control-layers-expanded")
				},
				_collapse: function() {
					this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "")
				}
			}), o.control.layers = function(t, e, i) {
				return new o.Control.Layers(t, e, i)
			}, o.PosAnimation = o.Class.extend({
				includes: o.Mixin.Events,
				run: function(t, e, i, n) {
					this.stop(), this._el = t, this._inProgress = !0, this._newPos = e, this.fire("start"), t.style[o.DomUtil.TRANSITION] =
						"all " + (i || .25) + "s cubic-bezier(0,0," + (n || .5) + ",1)", o.DomEvent.on(t, o.DomUtil.TRANSITION_END,
							this._onTransitionEnd, this), o.DomUtil.setPosition(t, e), o.Util.falseFn(t.offsetWidth), this._stepTimer =
						setInterval(o.bind(this._onStep, this), 50)
				},
				stop: function() {
					this._inProgress && (o.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), o.Util.falseFn(
						this._el.offsetWidth))
				},
				_onStep: function() {
					var t = this._getPos();
					return t ? (this._el._leaflet_pos = t, void this.fire("step")) : void this._onTransitionEnd()
				},
				_transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/,
				_getPos: function() {
					var e, i, n, s = this._el,
						a = t.getComputedStyle(s);
					if (o.Browser.any3d) {
						if (n = a[o.DomUtil.TRANSFORM].match(this._transformRe), !n) return;
						e = parseFloat(n[1]), i = parseFloat(n[2])
					} else e = parseFloat(a.left), i = parseFloat(a.top);
					return new o.Point(e, i, !0)
				},
				_onTransitionEnd: function() {
					o.DomEvent.off(this._el, o.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !
						1, this._el.style[o.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer),
						this.fire("step").fire("end"))
				}
			}), o.Map.include({
				setView: function(t, e, n) {
					if (e = e === i ? this._zoom : this._limitZoom(e), t = this._limitCenter(o.latLng(t), e, this.options.maxBounds),
						n = n || {}, this._panAnim && this._panAnim.stop(), this._loaded && !n.reset && n !== !0) {
						n.animate !== i && (n.zoom = o.extend({
							animate: n.animate
						}, n.zoom), n.pan = o.extend({
							animate: n.animate
						}, n.pan));
						var s = this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom) : this._tryAnimatedPan(
							t, n.pan);
						if (s) return clearTimeout(this._sizeTimer), this
					}
					return this._resetView(t, e), this
				},
				panBy: function(t, e) {
					if (t = o.point(t).round(), e = e || {}, !t.x && !t.y) return this;
					if (this._panAnim || (this._panAnim = new o.PosAnimation, this._panAnim.on({
							step: this._onPanTransitionStep,
							end: this._onPanTransitionEnd
						}, this)), e.noMoveStart || this.fire("movestart"), e.animate !== !1) {
						o.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
						var i = this._getMapPanePos().subtract(t);
						this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
					} else this._rawPanBy(t), this.fire("move").fire("moveend");
					return this
				},
				_onPanTransitionStep: function() {
					this.fire("move")
				},
				_onPanTransitionEnd: function() {
					o.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
				},
				_tryAnimatedPan: function(t, e) {
					var i = this._getCenterOffset(t)._floor();
					return (e && e.animate) === !0 || this.getSize().contains(i) ? (this.panBy(i, e), !0) : !1
				}
			}), o.PosAnimation = o.DomUtil.TRANSITION ? o.PosAnimation : o.PosAnimation.extend({
				run: function(t, e, i, n) {
					this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(
							n || .5, .2), this._startPos = o.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +
						new Date, this.fire("start"), this._animate()
				},
				stop: function() {
					this._inProgress && (this._step(), this._complete())
				},
				_animate: function() {
					this._animId = o.Util.requestAnimFrame(this._animate, this), this._step()
				},
				_step: function() {
					var t = +new Date - this._startTime,
						e = 1e3 * this._duration;
					e > t ? this._runFrame(this._easeOut(t / e)) : (this._runFrame(1), this._complete())
				},
				_runFrame: function(t) {
					var e = this._startPos.add(this._offset.multiplyBy(t));
					o.DomUtil.setPosition(this._el, e), this.fire("step")
				},
				_complete: function() {
					o.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
				},
				_easeOut: function(t) {
					return 1 - Math.pow(1 - t, this._easeOutPower)
				}
			}), o.Map.mergeOptions({
				zoomAnimation: !0,
				zoomAnimationThreshold: 4
			}), o.DomUtil.TRANSITION && o.Map.addInitHook(function() {
				this._zoomAnimated = this.options.zoomAnimation && o.DomUtil.TRANSITION && o.Browser.any3d && !o.Browser.android23 &&
					!o.Browser.mobileOpera, this._zoomAnimated && o.DomEvent.on(this._mapPane, o.DomUtil.TRANSITION_END, this._catchTransitionEnd,
						this)
			}), o.Map.include(o.DomUtil.TRANSITION ? {
				_catchTransitionEnd: function(t) {
					this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
				},
				_nothingToAnimate: function() {
					return !this._container.getElementsByClassName("leaflet-zoom-animated").length
				},
				_tryAnimatedZoom: function(t, e, i) {
					if (this._animatingZoom) return !0;
					if (i = i || {}, !this._zoomAnimated || i.animate === !1 || this._nothingToAnimate() || Math.abs(e - this._zoom) >
						this.options.zoomAnimationThreshold) return !1;
					var n = this.getZoomScale(e),
						o = this._getCenterOffset(t)._divideBy(1 - 1 / n),
						s = this._getCenterLayerPoint()._add(o);
					return i.animate === !0 || this.getSize().contains(o) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(
						t, e, s, n, null, !0), !0) : !1
				},
				_animateZoom: function(t, e, i, n, s, a, r) {
					r || (this._animatingZoom = !0), o.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter =
						t, this._animateToZoom = e, o.Draggable && (o.Draggable._disabled = !0), o.Util.requestAnimFrame(function() {
							this.fire("zoomanim", {
								center: t,
								zoom: e,
								origin: i,
								scale: n,
								delta: s,
								backwards: a
							}), setTimeout(o.bind(this._onZoomTransitionEnd, this), 250)
						}, this)
				},
				_onZoomTransitionEnd: function() {
					this._animatingZoom && (this._animatingZoom = !1, o.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), o.Util
						.requestAnimFrame(function() {
							this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), o.Draggable && (o.Draggable._disabled = !
								1)
						}, this))
				}
			} : {}), o.TileLayer.include({
				_animateZoom: function(t) {
					this._animating || (this._animating = !0, this._prepareBgBuffer());
					var e = this._bgBuffer,
						i = o.DomUtil.TRANSFORM,
						n = t.delta ? o.DomUtil.getTranslateString(t.delta) : e.style[i],
						s = o.DomUtil.getScaleString(t.scale, t.origin);
					e.style[i] = t.backwards ? s + " " + n : n + " " + s
				},
				_endZoomAnim: function() {
					var t = this._tileContainer,
						e = this._bgBuffer;
					t.style.visibility = "", t.parentNode.appendChild(t), o.Util.falseFn(e.offsetWidth);
					var i = this._map.getZoom();
					(i > this.options.maxZoom || i < this.options.minZoom) && this._clearBgBuffer(), this._animating = !1
				},
				_clearBgBuffer: function() {
					var t = this._map;
					!t || t._animatingZoom || t.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[o.DomUtil
						.TRANSFORM] = "")
				},
				_prepareBgBuffer: function() {
					var t = this._tileContainer,
						e = this._bgBuffer,
						i = this._getLoadedTilesPercentage(e),
						n = this._getLoadedTilesPercentage(t);
					return e && i > .5 && .5 > n ? (t.style.visibility = "hidden", void this._stopLoadingImages(t)) : (e.style.visibility =
						"hidden", e.style[o.DomUtil.TRANSFORM] = "", this._tileContainer = e, e = this._bgBuffer = t, this._stopLoadingImages(
							e), void clearTimeout(this._clearBgBufferTimer))
				},
				_getLoadedTilesPercentage: function(t) {
					var e, i, n = t.getElementsByTagName("img"),
						o = 0;
					for (e = 0, i = n.length; i > e; e++) n[e].complete && o++;
					return o / i
				},
				_stopLoadingImages: function(t) {
					var e, i, n, s = Array.prototype.slice.call(t.getElementsByTagName("img"));
					for (e = 0, i = s.length; i > e; e++) n = s[e], n.complete || (n.onload = o.Util.falseFn, n.onerror = o.Util.falseFn,
						n.src = o.Util.emptyImageUrl, n.parentNode.removeChild(n))
				}
			}), o.Map.include({
				_defaultLocateOptions: {
					watch: !1,
					setView: !1,
					maxZoom: 1 / 0,
					timeout: 1e4,
					maximumAge: 0,
					enableHighAccuracy: !1
				},
				locate: function(t) {
					if (t = this._locateOptions = o.extend(this._defaultLocateOptions, t), !navigator.geolocation) return this._handleGeolocationError({
						code: 0,
						message: "Geolocation not supported."
					}), this;
					var e = o.bind(this._handleGeolocationResponse, this),
						i = o.bind(this._handleGeolocationError, this);
					return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(
						e, i, t), this
				},
				stopLocate: function() {
					return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions &&
						(this._locateOptions.setView = !1), this
				},
				_handleGeolocationError: function(t) {
					var e = t.code,
						i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
					this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
						code: e,
						message: "Geolocation error: " + i + "."
					})
				},
				_handleGeolocationResponse: function(t) {
					var e = t.coords.latitude,
						i = t.coords.longitude,
						n = new o.LatLng(e, i),
						s = 180 * t.coords.accuracy / 40075017,
						a = s / Math.cos(o.LatLng.DEG_TO_RAD * e),
						r = o.latLngBounds([e - s, i - a], [e + s, i + a]),
						h = this._locateOptions;
					if (h.setView) {
						var l = Math.min(this.getBoundsZoom(r), h.maxZoom);
						this.setView(n, l)
					}
					var u = {
						latlng: n,
						bounds: r,
						timestamp: t.timestamp
					};
					for (var c in t.coords) "number" == typeof t.coords[c] && (u[c] = t.coords[c]);
					this.fire("locationfound", u)
				}
			})
	}(window, document);
	define("ViewModels/DistanceLegendViewModel", ["Cesium/Core/defined", "Cesium/Core/DeveloperError",
		"Cesium/Core/EllipsoidGeodesic", "Cesium/Core/Cartesian2", "Cesium/Core/getTimestamp", "Cesium/Core/EventHelper",
		"KnockoutES5", "Core/loadView", "leaflet"
	], function(defined, DeveloperError, EllipsoidGeodesic, Cartesian2, getTimestamp, EventHelper, Knockout, loadView,
		leaflet) {
		"use strict";
		var DistanceLegendViewModel = function(options) {
			if (!defined(options) || !defined(options.terria)) {
				throw new DeveloperError("options.terria is required.")
			}
			this.terria = options.terria;
			this._removeSubscription = undefined;
			this._lastLegendUpdate = undefined;
			this.eventHelper = new EventHelper;
			this.distanceLabel = undefined;
			this.barWidth = undefined;
			Knockout.track(this, ["distanceLabel", "barWidth"]);
			this.eventHelper.add(this.terria.afterWidgetChanged, function() {
				if (defined(this._removeSubscription)) {
					this._removeSubscription();
					this._removeSubscription = undefined
				}
			}, this);
			var that = this;

			function addUpdateSubscription() {
				if (defined(that.terria)) {
					var scene = that.terria.scene;
					that._removeSubscription = scene.postRender.addEventListener(function() {
						updateDistanceLegendCesium(this, scene)
					}, that)
				} else if (defined(that.terria.leaflet)) {
					var map = that.terria.leaflet.map;
					var potentialChangeCallback = function potentialChangeCallback() {
						updateDistanceLegendLeaflet(that, map)
					};
					that._removeSubscription = function() {
						map.off("zoomend", potentialChangeCallback);
						map.off("moveend", potentialChangeCallback)
					};
					map.on("zoomend", potentialChangeCallback);
					map.on("moveend", potentialChangeCallback);
					updateDistanceLegendLeaflet(that, map)
				}
			}
			addUpdateSubscription();
			this.eventHelper.add(this.terria.afterWidgetChanged, function() {
				addUpdateSubscription()
			}, this)
		};
		DistanceLegendViewModel.prototype.destroy = function() {
			this.eventHelper.removeAll()
		};
		DistanceLegendViewModel.prototype.show = function(container) {
			var testing = '<div class="distance-legend" data-bind="visible: distanceLabel && barWidth">' +
				'<div class="distance-legend-label" data-bind="text: distanceLabel"></div>' +
				"<div class=\"distance-legend-scale-bar\" data-bind=\"style: { width: barWidth + 'px', left: (5 + (125 - barWidth) / 2) + 'px' }\"></div>" +
				"</div>";
			loadView(testing, container, this)
		};
		DistanceLegendViewModel.create = function(options) {
			var result = new DistanceLegendViewModel(options);
			result.show(options.container);
			return result
		};
		var geodesic = new EllipsoidGeodesic;
		var distances = [1, 2, 3, 5, 10, 20, 30, 50, 100, 200, 300, 500, 1e3, 2e3, 3e3, 5e3, 1e4, 2e4, 3e4, 5e4, 1e5, 2e5,
			3e5, 5e5, 1e6, 2e6, 3e6, 5e6, 1e7, 2e7, 3e7, 5e7
		];

		function updateDistanceLegendCesium(viewModel, scene) {
			var now = getTimestamp();
			if (now < viewModel._lastLegendUpdate + 250) {
				return
			}
			viewModel._lastLegendUpdate = now;
			var width = scene.canvas.clientWidth;
			var height = scene.canvas.clientHeight;
			var left = scene.camera.getPickRay(new Cartesian2(width / 2 | 0, height - 1));
			var right = scene.camera.getPickRay(new Cartesian2(1 + width / 2 | 0, height - 1));
			var globe = scene.globe;
			var leftPosition = globe.pick(left, scene);
			var rightPosition = globe.pick(right, scene);
			if (!defined(leftPosition) || !defined(rightPosition)) {
				viewModel.barWidth = undefined;
				viewModel.distanceLabel = undefined;
				return
			}
			var leftCartographic = globe.ellipsoid.cartesianToCartographic(leftPosition);
			var rightCartographic = globe.ellipsoid.cartesianToCartographic(rightPosition);
			geodesic.setEndPoints(leftCartographic, rightCartographic);
			var pixelDistance = geodesic.surfaceDistance;
			var maxBarWidth = 100;
			var distance;
			for (var i = distances.length - 1; !defined(distance) && i >= 0; --i) {
				if (distances[i] / pixelDistance < maxBarWidth) {
					distance = distances[i]
				}
			}
			if (defined(distance)) {
				var label;
				if (distance >= 1e3) {
					label = (distance / 1e3).toString() + " km"
				} else {
					label = distance.toString() + " m"
				}
				viewModel.barWidth = distance / pixelDistance | 0;
				viewModel.distanceLabel = label
			} else {
				viewModel.barWidth = undefined;
				viewModel.distanceLabel = undefined
			}
		}

		function updateDistanceLegendLeaflet(viewModel, map) {
			var halfHeight = map.getSize().y / 2;
			var maxPixelWidth = 100;
			var maxMeters = map.containerPointToLatLng([0, halfHeight]).distanceTo(map.containerPointToLatLng([maxPixelWidth,
				halfHeight
			]));
			var meters = leaflet.control.scale()._getRoundNum(maxMeters);
			var label = meters < 1e3 ? meters + " m" : meters / 1e3 + " km";
			viewModel.barWidth = meters / maxMeters * maxPixelWidth;
			viewModel.distanceLabel = label
		}
		return DistanceLegendViewModel
	});
	define("ViewModels/UserInterfaceControl", ["Cesium/Core/defined", "Cesium/Core/defineProperties",
		"Cesium/Core/DeveloperError", "KnockoutES5"
	], function(defined, defineProperties, DeveloperError, Knockout) {
		"use strict";
		var UserInterfaceControl = function(terria) {
			if (!defined(terria)) {
				throw new DeveloperError("terria is required")
			}
			this._terria = terria;
			this.name = "Unnamed Control";
			this.text = undefined;
			this.svgIcon = undefined;
			this.svgHeight = undefined;
			this.svgWidth = undefined;
			this.cssClass = undefined;
			this.isActive = false;
			Knockout.track(this, ["name", "svgIcon", "svgHeight", "svgWidth", "cssClass", "isActive"])
		};
		defineProperties(UserInterfaceControl.prototype, {
			terria: {
				get: function() {
					return this._terria
				}
			},
			hasText: {
				get: function() {
					return defined(this.text) && typeof this.text === "string"
				}
			}
		});
		UserInterfaceControl.prototype.activate = function() {
			throw new DeveloperError("activate must be implemented in the derived class.")
		};
		return UserInterfaceControl
	});
	define("ViewModels/NavigationControl", ["ViewModels/UserInterfaceControl"], function(UserInterfaceControl) {
		"use strict";
		var NavigationControl = function(terria) {
			UserInterfaceControl.apply(this, arguments)
		};
		NavigationControl.prototype = Object.create(UserInterfaceControl.prototype);
		return NavigationControl
	});
	define("SvgPaths/svgReset", [], function() {
		"use strict";
		return "m7.60782,7.54705m-7.42593,0a7.42593,7.3703 0 1 0 14.85186,0a7.42593,7.3703 0 1 0 -14.85186,0z"
	});
	define("ViewModels/ResetViewNavigationControl", ["Cesium/Core/defined", "Cesium/Scene/Camera",
		"Cesium/Core/Rectangle", "Cesium/Core/Cartographic", "ViewModels/NavigationControl", "SvgPaths/svgReset"
	], function(defined, Camera, Rectangle, Cartographic, NavigationControl, svgReset) {
		"use strict";
		var ResetViewNavigationControl = function(terria) {
			NavigationControl.apply(this, arguments); /*this.name="Reset View";*/
			this.name = "地图复位";
			this.svgIcon = svgReset;
			this.svgHeight = 0;
			this.svgWidth = 0;
			this.cssClass = "navigation-control-icon-reset"
		};
		ResetViewNavigationControl.prototype = Object.create(NavigationControl.prototype);
		ResetViewNavigationControl.prototype.resetView = function() {
			var position = oDefault.configData.initialPosition;
			var orientation = oDefault.configData.initialOrientation;
			var initialPosition = new Cesium.Cartesian3.fromDegrees(position[0], position[1], position[2]);
			var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(orientation[0], orientation[1], orientation[2]);
			var homeCameraView = {
				destination: initialPosition,
				orientation: initialOrientation
			};
			oDefault.viewer.scene.camera.flyTo(homeCameraView);
		};
		ResetViewNavigationControl.prototype.activate = function() {
			this.resetView()
		};
		return ResetViewNavigationControl
	});
	define("Core/Utils", ["Cesium/Core/defined", "Cesium/Core/Ray", "Cesium/Core/Cartesian3", "Cesium/Core/Cartographic",
		"Cesium/Core/ReferenceFrame", "Cesium/Scene/SceneMode"
	], function(defined, Ray, Cartesian3, Cartographic, ReferenceFrame, SceneMode) {
		"use strict";
		var Utils = {};
		var unprojectedScratch = new Cartographic;
		var rayScratch = new Ray;
		Utils.getCameraFocus = function(terria, inWorldCoordinates, result) {
			var scene = terria.scene;
			var camera = scene.camera;
			if (scene.mode == SceneMode.MORPHING) {
				return undefined
			}
			if (!defined(result)) {
				result = new Cartesian3
			}
			if (defined(terria.trackedEntity)) {
				result = terria.trackedEntity.position.getValue(terria.clock.currentTime, result)
			} else {
				rayScratch.origin = camera.positionWC;
				rayScratch.direction = camera.directionWC;
				result = scene.globe.pick(rayScratch, scene, result)
			}
			if (!defined(result)) {
				return undefined
			}
			if (scene.mode == SceneMode.SCENE2D || scene.mode == SceneMode.COLUMBUS_VIEW) {
				result = camera.worldToCameraCoordinatesPoint(result, result);
				if (inWorldCoordinates) {
					result = scene.globe.ellipsoid.cartographicToCartesian(scene.mapProjection.unproject(result,
						unprojectedScratch), result)
				}
			} else {
				if (!inWorldCoordinates) {
					result = camera.worldToCameraCoordinatesPoint(result, result)
				}
			}
			return result
		};
		return Utils
	});
	define("ViewModels/ZoomNavigationControl", ["Cesium/Core/defined", "Cesium/Core/Ray", "Cesium/Core/IntersectionTests",
		"Cesium/Core/Cartesian3", "Cesium/Scene/SceneMode", "ViewModels/NavigationControl", "Core/Utils"
	], function(defined, Ray, IntersectionTests, Cartesian3, SceneMode, NavigationControl, Utils) {
		"use strict";
		var ZoomNavigationControl = function(terria, zoomIn) {
			NavigationControl.apply(this, arguments); /*this.name="Zoom "+(zoomIn?"In":"Out");*/
			if (zoomIn) {
				this.name = "放大"
			} else {
				this.name = "缩小"
			};
			this.text = zoomIn ? "" : "";
			this.cssClass = "navigation-control-icon-zoom-" + (zoomIn ? "in" : "out");
			this.relativeAmount = 2;
			if (zoomIn) {
				this.relativeAmount = 1 / this.relativeAmount
			}
		};
		ZoomNavigationControl.prototype.relativeAmount = 1;
		ZoomNavigationControl.prototype = Object.create(NavigationControl.prototype);
		ZoomNavigationControl.prototype.activate = function() {
			this.zoom(this.relativeAmount)
		};
		var cartesian3Scratch = new Cartesian3;
		ZoomNavigationControl.prototype.zoom = function(relativeAmount) {
			this.isActive = true;
			if (defined(this.terria)) {
				var scene = this.terria.scene;
				var sscc = scene.screenSpaceCameraController;
				if (!sscc.enableInputs || !sscc.enableZoom) {
					return
				}
				var camera = scene.camera;
				var orientation;
				console.log(scene.mode)
				console.log(SceneMode)
				switch (2) {
					// switch (scene.mode) {
					case SceneMode.MORPHING:
						break;
					case SceneMode.SCENE2D:
						camera.zoomIn(camera.positionCartographic.height * (1 - this.relativeAmount));
						break;
					default:
						var focus;
						if (defined(this.terria.trackedEntity)) {
							focus = new Cartesian3
						} else {
							focus = Utils.getCameraFocus(this.terria, false)
						}
						if (!defined(focus)) {
							var ray = new Ray(camera.worldToCameraCoordinatesPoint(scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic)),
								camera.directionWC);
							focus = IntersectionTests.grazingAltitudeLocation(ray, scene.globe.ellipsoid);
							orientation = {
								heading: camera.heading,
								pitch: camera.pitch,
								roll: camera.roll
							}
						} else {
							orientation = {
								direction: camera.direction,
								up: camera.up
							}
						}
						var direction = Cartesian3.subtract(camera.position, focus, cartesian3Scratch);
						var movementVector = Cartesian3.multiplyByScalar(direction, relativeAmount, direction);
						var endPosition = Cartesian3.add(focus, movementVector, focus);
						if (defined(this.terria.trackedEntity) || scene.mode == SceneMode.COLUMBUS_VIEW) {
							camera.position = endPosition
						} else {
							camera.flyTo({
								destination: endPosition,
								orientation: orientation,
								duration: .5,
								convert: false
							})
						}
				}
			}
			this.isActive = false
		};
		return ZoomNavigationControl
	});
	define("SvgPaths/svgCompassOuterRing", [], function() {
		"use strict";
		return "m 66.5625,0 0,15.15625 3.71875,0 0,-10.40625 5.5,10.40625 4.375,0 0,-15.15625 -3.71875,0 0,10.40625 L 70.9375,0 66.5625,0 z M 72.5,20.21875 c -28.867432,0 -52.28125,23.407738 -52.28125,52.28125 0,28.87351 23.413818,52.3125 52.28125,52.3125 28.86743,0 52.28125,-23.43899 52.28125,-52.3125 0,-28.873512 -23.41382,-52.28125 -52.28125,-52.28125 z m 0,1.75 c 13.842515,0 26.368948,5.558092 35.5,14.5625 l -11.03125,11 0.625,0.625 11.03125,-11 c 8.9199,9.108762 14.4375,21.579143 14.4375,35.34375 0,13.764606 -5.5176,26.22729 -14.4375,35.34375 l -11.03125,-11 -0.625,0.625 11.03125,11 c -9.130866,9.01087 -21.658601,14.59375 -35.5,14.59375 -13.801622,0 -26.321058,-5.53481 -35.4375,-14.5 l 11.125,-11.09375 c 6.277989,6.12179 14.857796,9.90625 24.3125,9.90625 19.241896,0 34.875,-15.629154 34.875,-34.875 0,-19.245847 -15.633104,-34.84375 -34.875,-34.84375 -9.454704,0 -18.034511,3.760884 -24.3125,9.875 L 37.0625,36.4375 C 46.179178,27.478444 58.696991,21.96875 72.5,21.96875 z m -0.875,0.84375 0,13.9375 1.75,0 0,-13.9375 -1.75,0 z M 36.46875,37.0625 47.5625,48.15625 C 41.429794,54.436565 37.65625,63.027539 37.65625,72.5 c 0,9.472461 3.773544,18.055746 9.90625,24.34375 L 36.46875,107.9375 c -8.96721,-9.1247 -14.5,-21.624886 -14.5,-35.4375 0,-13.812615 5.53279,-26.320526 14.5,-35.4375 z M 72.5,39.40625 c 18.297686,0 33.125,14.791695 33.125,33.09375 0,18.302054 -14.827314,33.125 -33.125,33.125 -18.297687,0 -33.09375,-14.822946 -33.09375,-33.125 0,-18.302056 14.796063,-33.09375 33.09375,-33.09375 z M 22.84375,71.625 l 0,1.75 13.96875,0 0,-1.75 -13.96875,0 z m 85.5625,0 0,1.75 14,0 0,-1.75 -14,0 z M 71.75,108.25 l 0,13.9375 1.71875,0 0,-13.9375 -1.71875,0 z"
 });
	define("SvgPaths/svgCompassGyro", [], function() {
		"use strict";
		return "m 72.71875,54.375 c -0.476702,0 -0.908208,0.245402 -1.21875,0.5625 -0.310542,0.317098 -0.551189,0.701933 -0.78125,1.1875 -0.172018,0.363062 -0.319101,0.791709 -0.46875,1.25 -6.91615,1.075544 -12.313231,6.656514 -13,13.625 -0.327516,0.117495 -0.661877,0.244642 -0.9375,0.375 -0.485434,0.22959 -0.901634,0.471239 -1.21875,0.78125 -0.317116,0.310011 -0.5625,0.742111 -0.5625,1.21875 l 0.03125,0 c 0,0.476639 0.245384,0.877489 0.5625,1.1875 0.317116,0.310011 0.702066,0.58291 1.1875,0.8125 0.35554,0.168155 0.771616,0.32165 1.21875,0.46875 1.370803,6.10004 6.420817,10.834127 12.71875,11.8125 0.146999,0.447079 0.30025,0.863113 0.46875,1.21875 0.230061,0.485567 0.470708,0.870402 0.78125,1.1875 0.310542,0.317098 0.742048,0.5625 1.21875,0.5625 0.476702,0 0.876958,-0.245402 1.1875,-0.5625 0.310542,-0.317098 0.582439,-0.701933 0.8125,-1.1875 0.172018,-0.363062 0.319101,-0.791709 0.46875,-1.25 6.249045,-1.017063 11.256351,-5.7184 12.625,-11.78125 0.447134,-0.1471 0.86321,-0.300595 1.21875,-0.46875 0.485434,-0.22959 0.901633,-0.502489 1.21875,-0.8125 0.317117,-0.310011 0.5625,-0.710861 0.5625,-1.1875 l -0.03125,0 c 0,-0.476639 -0.245383,-0.908739 -0.5625,-1.21875 C 89.901633,71.846239 89.516684,71.60459 89.03125,71.375 88.755626,71.244642 88.456123,71.117495 88.125,71 87.439949,64.078341 82.072807,58.503735 75.21875,57.375 c -0.15044,-0.461669 -0.326927,-0.884711 -0.5,-1.25 -0.230061,-0.485567 -0.501958,-0.870402 -0.8125,-1.1875 -0.310542,-0.317098 -0.710798,-0.5625 -1.1875,-0.5625 z m -0.0625,1.40625 c 0.03595,-0.01283 0.05968,0 0.0625,0 0.0056,0 0.04321,-0.02233 0.1875,0.125 0.144288,0.147334 0.34336,0.447188 0.53125,0.84375 0.06385,0.134761 0.123901,0.309578 0.1875,0.46875 -0.320353,-0.01957 -0.643524,-0.0625 -0.96875,-0.0625 -0.289073,0 -0.558569,0.04702 -0.84375,0.0625 C 71.8761,57.059578 71.936151,56.884761 72,56.75 c 0.18789,-0.396562 0.355712,-0.696416 0.5,-0.84375 0.07214,-0.07367 0.120304,-0.112167 0.15625,-0.125 z m 0,2.40625 c 0.448007,0 0.906196,0.05436 1.34375,0.09375 0.177011,0.592256 0.347655,1.271044 0.5,2.03125 0.475097,2.370753 0.807525,5.463852 0.9375,8.9375 -0.906869,-0.02852 -1.834463,-0.0625 -2.78125,-0.0625 -0.92298,0 -1.802327,0.03537 -2.6875,0.0625 0.138529,-3.473648 0.493653,-6.566747 0.96875,-8.9375 0.154684,-0.771878 0.320019,-1.463985 0.5,-2.0625 0.405568,-0.03377 0.804291,-0.0625 1.21875,-0.0625 z m -2.71875,0.28125 c -0.129732,0.498888 -0.259782,0.987558 -0.375,1.5625 -0.498513,2.487595 -0.838088,5.693299 -0.96875,9.25 -3.21363,0.15162 -6.119596,0.480068 -8.40625,0.9375 -0.682394,0.136509 -1.275579,0.279657 -1.84375,0.4375 0.799068,-6.135482 5.504716,-11.036454 11.59375,-12.1875 z M 75.5,58.5 c 6.043169,1.18408 10.705093,6.052712 11.5,12.15625 -0.569435,-0.155806 -1.200273,-0.302525 -1.875,-0.4375 -2.262525,-0.452605 -5.108535,-0.783809 -8.28125,-0.9375 -0.130662,-3.556701 -0.470237,-6.762405 -0.96875,-9.25 C 75.761959,59.467174 75.626981,58.990925 75.5,58.5 z m -2.84375,12.09375 c 0.959338,0 1.895843,0.03282 2.8125,0.0625 C 75.48165,71.267751 75.5,71.871028 75.5,72.5 c 0,1.228616 -0.01449,2.438313 -0.0625,3.59375 -0.897358,0.0284 -1.811972,0.0625 -2.75,0.0625 -0.927373,0 -1.831062,-0.03473 -2.71875,-0.0625 -0.05109,-1.155437 -0.0625,-2.365134 -0.0625,-3.59375 0,-0.628972 0.01741,-1.232249 0.03125,-1.84375 0.895269,-0.02827 1.783025,-0.0625 2.71875,-0.0625 z M 68.5625,70.6875 c -0.01243,0.60601 -0.03125,1.189946 -0.03125,1.8125 0,1.22431 0.01541,2.407837 0.0625,3.5625 -3.125243,-0.150329 -5.92077,-0.471558 -8.09375,-0.90625 -0.784983,-0.157031 -1.511491,-0.316471 -2.125,-0.5 -0.107878,-0.704096 -0.1875,-1.422089 -0.1875,-2.15625 0,-0.115714 0.02849,-0.228688 0.03125,-0.34375 0.643106,-0.20284 1.389577,-0.390377 2.25,-0.5625 2.166953,-0.433487 4.97905,-0.75541 8.09375,-0.90625 z m 8.3125,0.03125 c 3.075121,0.15271 5.824455,0.446046 7.96875,0.875 0.857478,0.171534 1.630962,0.360416 2.28125,0.5625 0.0027,0.114659 0,0.228443 0,0.34375 0,0.735827 -0.07914,1.450633 -0.1875,2.15625 -0.598568,0.180148 -1.29077,0.34562 -2.0625,0.5 -2.158064,0.431708 -4.932088,0.754666 -8.03125,0.90625 0.04709,-1.154663 0.0625,-2.33819 0.0625,-3.5625 0,-0.611824 -0.01924,-1.185379 -0.03125,-1.78125 z M 57.15625,72.5625 c 0.0023,0.572772 0.06082,1.131112 0.125,1.6875 -0.125327,-0.05123 -0.266577,-0.10497 -0.375,-0.15625 -0.396499,-0.187528 -0.665288,-0.387337 -0.8125,-0.53125 -0.147212,-0.143913 -0.15625,-0.182756 -0.15625,-0.1875 0,-0.0047 -0.02221,-0.07484 0.125,-0.21875 0.147212,-0.143913 0.447251,-0.312472 0.84375,-0.5 0.07123,-0.03369 0.171867,-0.06006 0.25,-0.09375 z m 31.03125,0 c 0.08201,0.03503 0.175941,0.05872 0.25,0.09375 0.396499,0.187528 0.665288,0.356087 0.8125,0.5 0.14725,0.14391 0.15625,0.21405 0.15625,0.21875 0,0.0047 -0.009,0.04359 -0.15625,0.1875 -0.147212,0.143913 -0.416001,0.343722 -0.8125,0.53125 -0.09755,0.04613 -0.233314,0.07889 -0.34375,0.125 0.06214,-0.546289 0.09144,-1.094215 0.09375,-1.65625 z m -29.5,3.625 c 0.479308,0.123125 0.983064,0.234089 1.53125,0.34375 2.301781,0.460458 5.229421,0.787224 8.46875,0.9375 0.167006,2.84339 0.46081,5.433176 0.875,7.5 0.115218,0.574942 0.245268,1.063612 0.375,1.5625 -5.463677,-1.028179 -9.833074,-5.091831 -11.25,-10.34375 z m 27.96875,0 C 85.247546,81.408945 80.919274,85.442932 75.5,86.5 c 0.126981,-0.490925 0.261959,-0.967174 0.375,-1.53125 0.41419,-2.066824 0.707994,-4.65661 0.875,-7.5 3.204493,-0.15162 6.088346,-0.480068 8.375,-0.9375 0.548186,-0.109661 1.051942,-0.220625 1.53125,-0.34375 z M 70.0625,77.53125 c 0.865391,0.02589 1.723666,0.03125 2.625,0.03125 0.912062,0 1.782843,-0.0048 2.65625,-0.03125 -0.165173,2.736408 -0.453252,5.207651 -0.84375,7.15625 -0.152345,0.760206 -0.322989,1.438994 -0.5,2.03125 -0.437447,0.03919 -0.895856,0.0625 -1.34375,0.0625 -0.414943,0 -0.812719,-0.02881 -1.21875,-0.0625 -0.177011,-0.592256 -0.347655,-1.271044 -0.5,-2.03125 -0.390498,-1.948599 -0.700644,-4.419842 -0.875,-7.15625 z m 1.75,10.28125 c 0.284911,0.01545 0.554954,0.03125 0.84375,0.03125 0.325029,0 0.648588,-0.01171 0.96875,-0.03125 -0.05999,0.148763 -0.127309,0.31046 -0.1875,0.4375 -0.18789,0.396562 -0.386962,0.696416 -0.53125,0.84375 -0.144288,0.147334 -0.181857,0.125 -0.1875,0.125 -0.0056,0 -0.07446,0.02233 -0.21875,-0.125 C 72.355712,88.946416 72.18789,88.646562 72,88.25 71.939809,88.12296 71.872486,87.961263 71.8125,87.8125 z"
	});
	define("SvgPaths/svgCompassRotationMarker", [], function() {
		"use strict";
		return "M 72.46875,22.03125 C 59.505873,22.050338 46.521615,27.004287 36.6875,36.875 L 47.84375,47.96875 C 61.521556,34.240041 83.442603,34.227389 97.125,47.90625 l 11.125,-11.125 C 98.401629,26.935424 85.431627,22.012162 72.46875,22.03125 z"
	});
	define("ViewModels/NavigationViewModel", ["Cesium/Core/defined", "Cesium/Core/Math", "Cesium/Core/getTimestamp",
		"Cesium/Core/EventHelper", "Cesium/Core/Transforms", "Cesium/Scene/SceneMode", "Cesium/Core/Cartesian2",
		"Cesium/Core/Cartesian3", "Cesium/Core/Matrix4", "Cesium/Core/BoundingSphere", "Cesium/Core/HeadingPitchRange",
		"KnockoutES5", "Core/loadView", "ViewModels/ResetViewNavigationControl", "ViewModels/ZoomNavigationControl",
		"SvgPaths/svgCompassOuterRing", "SvgPaths/svgCompassGyro", "SvgPaths/svgCompassRotationMarker", "Core/Utils"
	], function(defined, CesiumMath, getTimestamp, EventHelper, Transforms, SceneMode, Cartesian2, Cartesian3, Matrix4,
		BoundingSphere, HeadingPitchRange, Knockout, loadView, ResetViewNavigationControl, ZoomNavigationControl,
		svgCompassOuterRing, svgCompassGyro, svgCompassRotationMarker, Utils) {
		"use strict";
		var NavigationViewModel = function(options) {
			this.terria = options.terria;
			this.eventHelper = new EventHelper;
			this.controls = options.controls;
			if (!defined(this.controls)) {
				this.controls = [new ZoomNavigationControl(this.terria, true), new ResetViewNavigationControl(this.terria), new ZoomNavigationControl(
					this.terria, false)]
			}
			this.svgCompassOuterRing = svgCompassOuterRing;
			this.svgCompassGyro = svgCompassGyro;
			this.svgCompassRotationMarker = svgCompassRotationMarker;
			this.showCompass = defined(this.terria);
			this.heading = this.showCompass ? this.terria.scene.camera.heading : 0;
			this.isOrbiting = false;
			this.orbitCursorAngle = 0;
			this.orbitCursorOpacity = 0;
			this.orbitLastTimestamp = 0;
			this.orbitFrame = undefined;
			this.orbitIsLook = false;
			this.orbitMouseMoveFunction = undefined;
			this.orbitMouseUpFunction = undefined;
			this.isRotating = false;
			this.rotateInitialCursorAngle = undefined;
			this.rotateFrame = undefined;
			this.rotateIsLook = false;
			this.rotateMouseMoveFunction = undefined;
			this.rotateMouseUpFunction = undefined;
			this._unsubcribeFromPostRender = undefined;
			Knockout.track(this, ["controls", "showCompass", "heading", "isOrbiting", "orbitCursorAngle", "isRotating"]);
			var that = this;

			function widgetChange() {
				if (defined(that.terria)) {
					if (that._unsubcribeFromPostRender) {
						that._unsubcribeFromPostRender();
						that._unsubcribeFromPostRender = undefined
					}
					that.showCompass = true;
					that._unsubcribeFromPostRender = that.terria.scene.postRender.addEventListener(function() {
						that.heading = that.terria.scene.camera.heading
					})
				} else {
					if (that._unsubcribeFromPostRender) {
						that._unsubcribeFromPostRender();
						that._unsubcribeFromPostRender = undefined
					}
					that.showCompass = false
				}
			}
			this.eventHelper.add(this.terria.afterWidgetChanged, widgetChange, this);
			widgetChange()
		};
		NavigationViewModel.prototype.destroy = function() {
			this.eventHelper.removeAll()
		};
		NavigationViewModel.prototype.show = function(container) {
			var testing = '<div class="compass" /*title="Drag outer ring: rotate view. ' +
				"Drag inner gyroscope: free orbit." + "Double-click: reset view." +
				'TIP: You can also free orbit by holding the CTRL key and dragging the map."*/ title="1.拖动外圈:旋转地图视角\n2.双击地图复位" data-bind="visible: showCompass, event: { mousedown: handleMouseDown, dblclick: handleDoubleClick }">' +
				'<div class="compass-outer-ring-background"></div>' +
				" <div class=\"compass-rotation-marker\" data-bind=\"visible: isOrbiting, style: { transform: 'rotate(-' + orbitCursorAngle + 'rad)', '-webkit-transform': 'rotate(-' + orbitCursorAngle + 'rad)', opacity: orbitCursorOpacity }, cesiumSvgPath: { path: svgCompassRotationMarker, width: 145, height: 145 }\"></div>" +
				" <div class=\"compass-outer-ring\" /*title=\"Click and drag to rotate the camera\"*/ title=\"点击拖拽旋转地图视角\" data-bind=\"style: { transform: 'rotate(-' + heading + 'rad)', '-webkit-transform': 'rotate(-' + heading + 'rad)' }, cesiumSvgPath: { path: svgCompassOuterRing, width: 145, height: 145 }\"></div>" +
				' <div class="compass-gyro-background"></div>' +
				' <div class="compass-gyro" data-bind="cesiumSvgPath: { path: svgCompassGyro, width: 145, height: 145 }, css: { \'compass-gyro-active\': isOrbiting }"></div>' +
				"</div>" + '<div class="navigation-controls">' + "<!-- ko foreach: controls -->" +
				"<div data-bind=\"click: activate, attr: { title: $data.name }, css: $root.isLastControl($data) ? 'navigation-control' : 'navigation-control-zoom' \">" +
				"   <!-- ko if: $data.hasText -->" +
				"   <div data-bind=\"text: $data.text, css: $data.isActive ?  'navigation-control-icon-active ' + $data.cssClass : $data.cssClass\"></div>" +
				"   <!-- /ko -->" + "  <!-- ko ifnot: $data.hasText -->" +
				"  <div data-bind=\"cesiumSvgPath: { path: $data.svgIcon, width: $data.svgWidth, height: $data.svgHeight }, css: $data.isActive ?  'navigation-control-icon-active ' + $data.cssClass : $data.cssClass\"></div>" +
				"  <!-- /ko -->" + " </div>" + " <!-- /ko -->" + "</div>";
			loadView(testing, container, this)
		};
		NavigationViewModel.prototype.add = function(control) {
			this.controls.push(control)
		};
		NavigationViewModel.prototype.remove = function(control) {
			this.controls.remove(control)
		};
		// NavigationViewModel.prototype.isLastControl = function(control) {
		// 	return control === this.controls[this.controls.length - 1]
		// };
		NavigationViewModel.prototype.isLastControl = function(control) {
			return control === this.controls[this.controls.length - 2]
		};
		var vectorScratch = new Cartesian2;
		NavigationViewModel.prototype.handleMouseDown = function(viewModel, e) {
			var scene = this.terria.scene;
			if (scene.mode == SceneMode.MORPHING) {
				return true
			}
			var compassElement = e.currentTarget;
			var compassRectangle = e.currentTarget.getBoundingClientRect();
			var maxDistance = compassRectangle.width / 2;
			var center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2, (compassRectangle.bottom -
				compassRectangle.top) / 2);
			var clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
			var vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
			var distanceFromCenter = Cartesian2.magnitude(vector);
			var distanceFraction = distanceFromCenter / maxDistance;
			var nominalTotalRadius = 145;
			var norminalGyroRadius = 50;
			if (distanceFraction < norminalGyroRadius / nominalTotalRadius) {
				orbit(this, compassElement, vector)
			} else if (distanceFraction < 1) {
				rotate(this, compassElement, vector)
			} else {
				return true
			}
		};
		var oldTransformScratch = new Matrix4;
		var newTransformScratch = new Matrix4;
		var centerScratch = new Cartesian3;
		NavigationViewModel.prototype.handleDoubleClick = function(viewModel, e) {
			var scene = viewModel.terria.scene;
			var camera = scene.camera;
			var sscc = scene.screenSpaceCameraController;
			if (scene.mode == SceneMode.MORPHING || !sscc.enableInputs) {
				return true
			}
			if (scene.mode == SceneMode.COLUMBUS_VIEW && !sscc.enableTranslate) {
				return
			}
			if (scene.mode == SceneMode.SCENE3D || scene.mode == SceneMode.COLUMBUS_VIEW) {
				if (!sscc.enableLook) {
					return
				}
				if (scene.mode == SceneMode.SCENE3D) {
					if (!sscc.enableRotate) {
						return
					}
				}
			}
			var center = Utils.getCameraFocus(viewModel.terria, true, centerScratch);
			if (!defined(center)) {
				this.controls[1].resetView();
				return
			}
			var cameraPosition = scene.globe.ellipsoid.cartographicToCartesian(camera.positionCartographic, new Cartesian3);
			var surfaceNormal = scene.globe.ellipsoid.geodeticSurfaceNormal(center);
			var focusBoundingSphere = new BoundingSphere(center, 0);
			camera.flyToBoundingSphere(focusBoundingSphere, {
				offset: new HeadingPitchRange(0, CesiumMath.PI_OVER_TWO - Cartesian3.angleBetween(surfaceNormal, camera.directionWC),
					Cartesian3.distance(cameraPosition, center)),
				duration: 1.5
			})
		};
		NavigationViewModel.create = function(options) {
			var result = new NavigationViewModel(options);
			result.show(options.container);
			return result
		};

		function orbit(viewModel, compassElement, cursorVector) {
			var scene = viewModel.terria.scene;
			var sscc = scene.screenSpaceCameraController;
			if (scene.mode == SceneMode.MORPHING || !sscc.enableInputs) {
				return
			}
			switch (scene.mode) {
				case SceneMode.COLUMBUS_VIEW:
					if (sscc.enableLook) {
						break
					}
					if (!sscc.enableTranslate || !sscc.enableTilt) {
						return
					}
					break;
				case SceneMode.SCENE3D:
					if (sscc.enableLook) {
						break
					}
					if (!sscc.enableTilt || !sscc.enableRotate) {
						return
					}
					break;
				case SceneMode.SCENE2D:
					if (!sscc.enableTranslate) {
						return
					}
					break
			}
			document.removeEventListener("mousemove", viewModel.orbitMouseMoveFunction, false);
			document.removeEventListener("mouseup", viewModel.orbitMouseUpFunction, false);
			if (defined(viewModel.orbitTickFunction)) {
				viewModel.terria.clock.onTick.removeEventListener(viewModel.orbitTickFunction)
			}
			viewModel.orbitMouseMoveFunction = undefined;
			viewModel.orbitMouseUpFunction = undefined;
			viewModel.orbitTickFunction = undefined;
			viewModel.isOrbiting = true;
			viewModel.orbitLastTimestamp = getTimestamp();
			var camera = scene.camera;
			if (defined(viewModel.terria.trackedEntity)) {
				viewModel.orbitFrame = undefined;
				viewModel.orbitIsLook = false
			} else {
				var center = Utils.getCameraFocus(viewModel.terria, true, centerScratch);
				if (!defined(center)) {
					viewModel.orbitFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, scene.globe.ellipsoid,
						newTransformScratch);
					viewModel.orbitIsLook = true
				} else {
					viewModel.orbitFrame = Transforms.eastNorthUpToFixedFrame(center, scene.globe.ellipsoid, newTransformScratch);
					viewModel.orbitIsLook = false
				}
			}
			viewModel.orbitTickFunction = function(e) {
				var timestamp = getTimestamp();
				var deltaT = timestamp - viewModel.orbitLastTimestamp;
				var rate = (viewModel.orbitCursorOpacity - .5) * 2.5 / 1e3;
				var distance = deltaT * rate;
				var angle = viewModel.orbitCursorAngle + CesiumMath.PI_OVER_TWO;
				var x = Math.cos(angle) * distance;
				var y = Math.sin(angle) * distance;
				var oldTransform;
				if (defined(viewModel.orbitFrame)) {
					oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
					camera.lookAtTransform(viewModel.orbitFrame)
				}
				if (scene.mode == SceneMode.SCENE2D) {
					camera.move(new Cartesian3(x, y, 0), Math.max(scene.canvas.clientWidth, scene.canvas.clientHeight) / 100 *
						camera.positionCartographic.height * distance)
				} else {
					if (viewModel.orbitIsLook) {
						camera.look(Cartesian3.UNIT_Z, -x);
						camera.look(camera.right, -y)
					} else {
						camera.rotateLeft(x);
						camera.rotateUp(y)
					}
				}
				if (defined(viewModel.orbitFrame)) {
					camera.lookAtTransform(oldTransform)
				}
				viewModel.orbitLastTimestamp = timestamp
			};

			function updateAngleAndOpacity(vector, compassWidth) {
				var angle = Math.atan2(-vector.y, vector.x);
				viewModel.orbitCursorAngle = CesiumMath.zeroToTwoPi(angle - CesiumMath.PI_OVER_TWO);
				var distance = Cartesian2.magnitude(vector);
				var maxDistance = compassWidth / 2;
				var distanceFraction = Math.min(distance / maxDistance, 1);
				var easedOpacity = .5 * distanceFraction * distanceFraction + .5;
				viewModel.orbitCursorOpacity = easedOpacity
			}
			viewModel.orbitMouseMoveFunction = function(e) {
				var compassRectangle = compassElement.getBoundingClientRect();
				var center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2, (compassRectangle.bottom -
					compassRectangle.top) / 2);
				var clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
				var vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
				updateAngleAndOpacity(vector, compassRectangle.width)
			};
			viewModel.orbitMouseUpFunction = function(e) {
				viewModel.isOrbiting = false;
				document.removeEventListener("mousemove", viewModel.orbitMouseMoveFunction, false);
				document.removeEventListener("mouseup", viewModel.orbitMouseUpFunction, false);
				if (defined(viewModel.orbitTickFunction)) {
					viewModel.terria.clock.onTick.removeEventListener(viewModel.orbitTickFunction)
				}
				viewModel.orbitMouseMoveFunction = undefined;
				viewModel.orbitMouseUpFunction = undefined;
				viewModel.orbitTickFunction = undefined
			};
			document.addEventListener("mousemove", viewModel.orbitMouseMoveFunction, false);
			document.addEventListener("mouseup", viewModel.orbitMouseUpFunction, false);
			viewModel.terria.clock.onTick.addEventListener(viewModel.orbitTickFunction);
			updateAngleAndOpacity(cursorVector, compassElement.getBoundingClientRect().width)
		}

		function rotate(viewModel, compassElement, cursorVector) {
			var scene = viewModel.terria.scene;
			var camera = scene.camera;
			var sscc = scene.screenSpaceCameraController;
			if (scene.mode == SceneMode.MORPHING || scene.mode == SceneMode.SCENE2D || !sscc.enableInputs) {
				return
			}
			if (!sscc.enableLook && (scene.mode == SceneMode.COLUMBUS_VIEW || scene.mode == SceneMode.SCENE3D && !sscc.enableRotate)) {
				return
			}
			document.removeEventListener("mousemove", viewModel.rotateMouseMoveFunction, false);
			document.removeEventListener("mouseup", viewModel.rotateMouseUpFunction, false);
			viewModel.rotateMouseMoveFunction = undefined;
			viewModel.rotateMouseUpFunction = undefined;
			viewModel.isRotating = true;
			viewModel.rotateInitialCursorAngle = Math.atan2(-cursorVector.y, cursorVector.x);
			if (defined(viewModel.terria.trackedEntity)) {
				viewModel.rotateFrame = undefined;
				viewModel.rotateIsLook = false
			} else {
				var viewCenter = Utils.getCameraFocus(viewModel.terria, true, centerScratch);
				if (!defined(viewCenter) || scene.mode == SceneMode.COLUMBUS_VIEW && !sscc.enableLook && !sscc.enableTranslate) {
					viewModel.rotateFrame = Transforms.eastNorthUpToFixedFrame(camera.positionWC, scene.globe.ellipsoid,
						newTransformScratch);
					viewModel.rotateIsLook = true
				} else {
					viewModel.rotateFrame = Transforms.eastNorthUpToFixedFrame(viewCenter, scene.globe.ellipsoid,
						newTransformScratch);
					viewModel.rotateIsLook = false
				}
			}
			var oldTransform;
			if (defined(viewModel.rotateFrame)) {
				oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
				camera.lookAtTransform(viewModel.rotateFrame)
			}
			viewModel.rotateInitialCameraAngle = -camera.heading;
			if (defined(viewModel.rotateFrame)) {
				camera.lookAtTransform(oldTransform)
			}
			viewModel.rotateMouseMoveFunction = function(e) {
				var compassRectangle = compassElement.getBoundingClientRect();
				var center = new Cartesian2((compassRectangle.right - compassRectangle.left) / 2, (compassRectangle.bottom -
					compassRectangle.top) / 2);
				var clickLocation = new Cartesian2(e.clientX - compassRectangle.left, e.clientY - compassRectangle.top);
				var vector = Cartesian2.subtract(clickLocation, center, vectorScratch);
				var angle = Math.atan2(-vector.y, vector.x);
				var angleDifference = angle - viewModel.rotateInitialCursorAngle;
				var newCameraAngle = CesiumMath.zeroToTwoPi(viewModel.rotateInitialCameraAngle - angleDifference);
				var camera = viewModel.terria.scene.camera;
				var oldTransform;
				if (defined(viewModel.rotateFrame)) {
					oldTransform = Matrix4.clone(camera.transform, oldTransformScratch);
					camera.lookAtTransform(viewModel.rotateFrame)
				}
				var currentCameraAngle = -camera.heading;
				camera.rotateRight(newCameraAngle - currentCameraAngle);
				if (defined(viewModel.rotateFrame)) {
					camera.lookAtTransform(oldTransform)
				}
			};
			viewModel.rotateMouseUpFunction = function(e) {
				viewModel.isRotating = false;
				document.removeEventListener("mousemove", viewModel.rotateMouseMoveFunction, false);
				document.removeEventListener("mouseup", viewModel.rotateMouseUpFunction, false);
				viewModel.rotateMouseMoveFunction = undefined;
				viewModel.rotateMouseUpFunction = undefined
			};
			document.addEventListener("mousemove", viewModel.rotateMouseMoveFunction, false);
			document.addEventListener("mouseup", viewModel.rotateMouseUpFunction, false)
		}
		return NavigationViewModel
	});
	define("CesiumNavigation", ["Cesium/Core/defined", "Cesium/Core/defineProperties", "Cesium/Core/Event", "KnockoutES5",
		"Core/registerKnockoutBindings", "ViewModels/DistanceLegendViewModel", "ViewModels/NavigationViewModel"
	], function(defined, defineProperties, CesiumEvent, Knockout, registerKnockoutBindings, DistanceLegendViewModel,
		NavigationViewModel) {
		"use strict";
		var CesiumNavigation = function(viewerCesiumWidget) {
			initialize.apply(this, arguments);
			this._onDestroyListeners = []
		};
		CesiumNavigation.prototype.distanceLegendViewModel = undefined;
		CesiumNavigation.prototype.navigationViewModel = undefined;
		CesiumNavigation.prototype.navigationDiv = undefined;
		CesiumNavigation.prototype.distanceLegendDiv = undefined;
		CesiumNavigation.prototype.terria = undefined;
		CesiumNavigation.prototype.container = undefined;
		CesiumNavigation.prototype._onDestroyListeners = undefined;
		CesiumNavigation.prototype.destroy = function() {
			if (defined(this.navigationViewModel)) {
				this.navigationViewModel.destroy()
			}
			if (defined(this.distanceLegendViewModel)) {
				this.distanceLegendViewModel.destroy()
			}
			if (defined(this.navigationDiv)) {
				this.navigationDiv.parentNode.removeChild(this.navigationDiv)
			}
			delete this.navigationDiv;
			if (defined(this.distanceLegendDiv)) {
				this.distanceLegendDiv.parentNode.removeChild(this.distanceLegendDiv)
			}
			delete this.distanceLegendDiv;
			if (defined(this.container)) {
				this.container.parentNode.removeChild(this.container)
			}
			delete this.container;
			for (var i = 0; i < this._onDestroyListeners.length; i++) {
				this._onDestroyListeners[i]()
			}
		};
		CesiumNavigation.prototype.addOnDestroyListener = function(callback) {
			if (typeof callback === "function") {
				this._onDestroyListeners.push(callback)
			}
		};

		function initialize(viewerCesiumWidget, options) {
			if (!defined(viewerCesiumWidget)) {
				throw new DeveloperError("CesiumWidget or Viewer is required.")
			}
			var cesiumWidget = defined(viewerCesiumWidget.cesiumWidget) ? viewerCesiumWidget.cesiumWidget :
				viewerCesiumWidget;
			var container = document.createElement("div");
			container.className = "cesium-widget-cesiumNavigationContainer";
			cesiumWidget.container.appendChild(container);
			this.terria = viewerCesiumWidget;
			this.terria.options = options;
			this.terria.afterWidgetChanged = new CesiumEvent;
			this.terria.beforeWidgetChanged = new CesiumEvent;
			this.container = container;
			this.navigationDiv = document.createElement("div");
			this.navigationDiv.setAttribute("id", "navigationDiv");
			this.distanceLegendDiv = document.createElement("div");
			this.navigationDiv.setAttribute("id", "distanceLegendDiv");
			container.appendChild(this.navigationDiv);
			container.appendChild(this.distanceLegendDiv);			
			registerKnockoutBindings();
			this.distanceLegendViewModel = DistanceLegendViewModel.create({
				container: this.distanceLegendDiv,
				terria: this.terria,
				mapElement: container
			});
			this.navigationViewModel = NavigationViewModel.create({
				container: this.navigationDiv,
				terria: this.terria
			})
			$('#distanceLegendDiv .compass').append('<div class="navigation-circle"></div>')
		}
		return CesiumNavigation
	});
	define("dummy/require-less/less/dummy", [], function() {});
	define("viewerCesiumNavigationMixin", ["Cesium/Core/defined", "Cesium/Core/defineProperties",
		"Cesium/Core/DeveloperError", "CesiumNavigation", "dummy/require-less/less/dummy"
	], function(defined, defineProperties, DeveloperError, CesiumNavigation) {
		"use strict";

		function viewerCesiumNavigationMixin(viewer, options) {
			if (!defined(viewer)) {
				throw new DeveloperError("viewer is required.")
			}
			var cesiumNavigation = init(viewer, options);
			cesiumNavigation.addOnDestroyListener(function(viewer) {
				return function() {
					delete viewer.cesiumNavigation
				}
			}(viewer));
			defineProperties(viewer, {
				cesiumNavigation: {
					configurable: true,
					get: function() {
						return viewer.cesiumWidget.cesiumNavigation
					}
				}
			})
		}
		viewerCesiumNavigationMixin.mixinWidget = function(cesiumWidget, options) {
			return init.apply(undefined, arguments)
		};
		var init = function(viewerCesiumWidget, options) {
			var cesiumNavigation = new CesiumNavigation(viewerCesiumWidget, options);
			var cesiumWidget = defined(viewerCesiumWidget.cesiumWidget) ? viewerCesiumWidget.cesiumWidget :
				viewerCesiumWidget;
			defineProperties(cesiumWidget, {
				cesiumNavigation: {
					configurable: true,
					get: function() {
						return cesiumNavigation
					}
				}
			});
			cesiumNavigation.addOnDestroyListener(function(cesiumWidget) {
				return function() {
					delete cesiumWidget.cesiumNavigation
				}
			}(cesiumWidget));
			return cesiumNavigation
		};
		return viewerCesiumNavigationMixin
	});
	(function(c) {
		var d = document,
			a = "appendChild",
			i = "styleSheet",
			s = d.createElement("style");
		s.type = "text/css";
		d.getElementsByTagName("head")[0][a](s);
		s[i] ? s[i].cssText = c : s[a](d.createTextNode(c))
	})(
		".full-window{position:absolute;top:0;left:0;right:0;bottom:0;margin:0;overflow:hidden;padding:0;-webkit-transition:left .25s ease-out;-moz-transition:left .25s ease-out;-ms-transition:left .25s ease-out;-o-transition:left .25s ease-out;transition:left .25s ease-out}.transparent-to-input{pointer-events:none}.opaque-to-input{pointer-events:auto}.clickable{cursor:pointer}.markdown a:hover,.markdown u,a:hover{text-decoration:underline}.modal,.modal-background{top:0;left:0;bottom:0;right:0}.modal-background{pointer-events:auto;background-color:rgba(0,0,0,.5);z-index:1000;position:fixed}.modal{position:absolute;margin:auto;background-color:#2f353c;max-height:100%;max-width:100%;font-family:'Roboto',sans-serif;color:#fff}.modal-header{background-color:rgba(0,0,0,.2);border-bottom:1px solid rgba(100,100,100,.6);font-size:15px;line-height:40px;margin:0}.modal-header h1{font-size:15px;color:#fff;margin-left:15px}.modal-content{margin-left:15px;margin-right:15px;margin-bottom:15px;padding-top:15px;overflow:auto}.modal-close-button{position:absolute;right:15px;cursor:pointer;font-size:18px;color:#fff}#ui{z-index:2100}@media print{.full-window{position:initial}}.markdown img{max-width:100%}.markdown svg{max-height:100%}.markdown fieldset,.markdown input,.markdown select,.markdown textarea{font-family:inherit;font-size:1rem;box-sizing:border-box;margin-top:0;margin-bottom:0}.markdown label{vertical-align:middle}.markdown h1,.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{font-family:inherit;font-weight:700;line-height:1.25;margin-top:1em;margin-bottom:.5em}.markdown h1{font-size:2rem}.markdown h2{font-size:1.5rem}.markdown h3{font-size:1.25rem}.markdown h4{font-size:1rem}.markdown h5{font-size:.875rem}.markdown h6{font-size:.75rem}.markdown dl,.markdown ol,.markdown p,.markdown ul{margin-top:0;margin-bottom:1rem}.markdown strong{font-weight:700}.markdown em{font-style:italic}.markdown small{font-size:80%}.markdown mark{color:#000;background:#ff0}.markdown s{text-decoration:line-through}.markdown ol{list-style:decimal inside}.markdown ul{list-style:disc inside}.markdown code,.markdown pre,.markdown samp{font-family:monospace;font-size:inherit}.markdown pre{margin-top:0;margin-bottom:1rem;overflow-x:scroll}.markdown a{color:#68adfe;text-decoration:none}.markdown code,.markdown pre{background-color:transparent;border-radius:3px}.markdown hr{border:0;border-bottom-style:solid;border-bottom-width:1px;border-bottom-color:rgba(0,0,0,.125)}.markdown .left-align{text-align:left}.markdown .center{text-align:center}.markdown .right-align{text-align:right}.markdown .justify{text-align:justify}.markdown .truncate{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.markdown ol.upper-roman{list-style-type:upper-roman}.markdown ol.lower-alpha{list-style-type:lower-alpha}.markdown ul.circle{list-style-type:circle}.markdown ul.square{list-style-type:square}.markdown .list-reset{list-style:none;padding-left:0}.floating,.floating-horizontal,.floating-vertical{pointer-events:auto;position:absolute;border-radius:15px;background-color:rgba(47,53,60,.8)}.floating-horizontal{padding-left:5px;padding-right:5px}.floating-vertical{padding-top:5px;padding-bottom:5px}@media print{.floating{display:none}}.distance-legend{pointer-events:auto;position:absolute;/*border-radius:15px;background-color:rgba(47,53,60,.8);*/padding-left:5px;padding-right:5px;right:50px;bottom:1px;height:30px;width:125px;/*border:1px solid rgba(255,255,255,.1);*/box-sizing:content-box;z-index: 10}.distance-legend-label{display:inline-block;font-family:'Roboto',sans-serif;font-size:14px;font-weight:lighter;line-height:30px;color:#fff;width:125px;text-align:center}.distance-legend-scale-bar{border-left:1px solid #fff;border-right:1px solid #fff;border-bottom:1px solid #fff;position:absolute;height:10px;top:15px}@media print{.distance-legend{display:none}}@media screen and (max-width:700px),screen and (max-height:420px){.distance-legend{display:none}}.navigation-controls{position:absolute;/*right:30px;*//*bottom: 100px;*/width:30px;border:1px solid rgba(255,255,255,.5);font-weight:300;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background: rgba(47,53,60,.8);}.navigation-control{cursor:pointer;/*border-bottom:1px solid #555*/border-bottom:1px solid rgba(255,255,255,.5)}.naviagation-control:active{color:#fff}.navigation-control-last{cursor:pointer;border-bottom:0}.navigation-control-icon-zoom-in{padding-bottom:4px}.navigation-control-icon-zoom-in,.navigation-control-icon-zoom-out{position:relative;text-align:center;font-size:20px;color:#fff}.navigation-control-icon-reset{position:relative;left:10px;width:10px;height:10px;fill:rgba(255,255,255,.8);padding-top:6px;padding-bottom:6px;box-sizing:content-box}.compass,.compass-outer-ring{position:absolute;width:95px;height:95px}.compass{pointer-events:auto;/*right:0;*/overflow:hidden;/*bottom: 210px;*/}.compass-outer-ring{top:0;fill:rgba(255,255,255,.5)}.compass-outer-ring-background{position:absolute;top:14px;left:14px;width:44px;height:44px;border-radius:44px;border:12px solid rgba(47,53,60,.8);box-sizing:content-box}.compass-gyro{pointer-events:none;position:absolute;top:0;width:95px;height:95px;fill:#ccc}.compass-gyro-active,.compass-gyro-background:hover+.compass-gyro{fill:#68adfe}.compass-gyro-background{position:absolute;top:30px;left:30px;width:33px;height:33px;border-radius:33px;background-color:rgba(47,53,60,.8);border:1px solid rgba(255,255,255,.2);box-sizing:content-box}.compass-rotation-marker{position:absolute;top:0;width:95px;height:95px;fill:#68adfe}@media screen and (max-width:700px),screen and (max-height:420px){.compass,.navigation-controls{display:none}}@media print{.compass,.navigation-controls{display:none}}"
	);
	define("Cesium/Core/defined", function() {
		return Cesium["defined"]
	});
	define("Cesium/Core/defineProperties", function() {
		// return Cesium["defineProperties"]
		return Object.defineProperties
	});
	define("Cesium/Core/defaultValue", function() {
		return Cesium["defaultValue"]
	});
	define("Cesium/Core/Event", function() {
		return Cesium["Event"]
	});
	define("Cesium/Widgets/getElement", function() {
		return Cesium["getElement"]
	});
	define("Cesium/Widgets/SvgPathBindingHandler", function() {
		return Cesium["SvgPathBindingHandler"]
	});
	define("Cesium/Core/Ray", function() {
		return Cesium["Ray"]
	});
	define("Cesium/Core/Cartesian3", function() {
		return Cesium["Cartesian3"]
	});
	define("Cesium/Core/Cartographic", function() {
		return Cesium["Cartographic"]
	});
	define("Cesium/Core/ReferenceFrame", function() {
		return Cesium["ReferenceFrame"]
	});
	define("Cesium/Scene/SceneMode", function() {
		return Cesium["SceneMode"]
	});
	define("Cesium/Core/DeveloperError", function() {
		return Cesium["DeveloperError"]
	});
	define("Cesium/Core/EllipsoidGeodesic", function() {
		return Cesium["EllipsoidGeodesic"]
	});
	define("Cesium/Core/Cartesian2", function() {
		return Cesium["Cartesian2"]
	});
	define("Cesium/Core/getTimestamp", function() {
		return Cesium["getTimestamp"]
	});
	define("Cesium/Core/EventHelper", function() {
		return Cesium["EventHelper"]
	});
	define("Cesium/Core/Math", function() {
		return Cesium["Math"]
	});
	define("Cesium/Core/Transforms", function() {
		return Cesium["Transforms"]
	});
	define("Cesium/Core/Matrix4", function() {
		return Cesium["Matrix4"]
	});
	define("Cesium/Core/BoundingSphere", function() {
		return Cesium["BoundingSphere"]
	});
	define("Cesium/Core/HeadingPitchRange", function() {
		return Cesium["HeadingPitchRange"]
	});
	define("Cesium/Scene/Camera", function() {
		return Cesium["Camera"]
	});
	define("Cesium/Core/Rectangle", function() {
		return Cesium["Rectangle"]
	});
	define("Cesium/Core/IntersectionTests", function() {
		return Cesium["IntersectionTests"]
	});
	return require("viewerCesiumNavigationMixin")
});
