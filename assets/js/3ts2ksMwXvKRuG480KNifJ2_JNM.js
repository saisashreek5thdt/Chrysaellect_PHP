window.CloudflareApps = window.Eager = window.CloudflareApps || window.Eager || {}, window.CloudflareApps = window.CloudflareApps || {}, CloudflareApps.siteId = "2635f6279cb88cfd8ad4b6d16d18badb", CloudflareApps.installs = CloudflareApps.installs || {},
	function () {
		CloudflareApps.internal = CloudflareApps.internal || {};
		var e = [];
		CloudflareApps.internal.placementErrors = e;
		var r = {},
			t = function (t) {
				var o = t.selector + "::" + t.type + "::" + (t.installId || "");
				r[o] || (r[o] = !0, e.push(t))
			},
			o = {},
			l = !1;
		CloudflareApps.internal.markSelectors = function () {
			l || (n(), l = !0, setTimeout(function () {
				l = !1
			}))
		};
		var n = function () {
			var e = window.CloudflareApps.installs;
			for (var r in e)
				if (e.hasOwnProperty(r)) {
					var l = e[r].selectors;
					if (l)
						for (var n in l)
							if (l.hasOwnProperty(n)) {
								var a = r + "::" + n;
								if (!o[a]) {
									var p = document.querySelectorAll(l[n]);
									p && p.length > 1 ? (t({
										type: "init:too-many",
										option: n,
										selector: l[n],
										installId: r
									}), o[a] = !0) : p && p.length && (o[a] = !0, p[0].setAttribute("cfapps-selector", l[n]))
								}
							}
				}
		};
		CloudflareApps.querySelector = function (e) {
			if ("body" === e || "head" === e) return document[e];
			CloudflareApps.internal.markSelectors();
			var r = document.querySelectorAll('[cfapps-selector="' + e + '"]');
			return r && r.length ? (r.length > 1 && t({
				type: "select:too-many:by-attribute",
				selector: e
			}), r[0]) : (t({
				type: "select:not-found:by-attribute",
				selector: e
			}), (r = document.querySelectorAll(e)) && r.length ? (r.length > 1 && t({
				type: "select:too-many:by-query",
				selector: e
			}), r[0]) : (t({
				type: "select:not-found:by-query",
				selector: e
			}), null))
		}
	}(),
	function () {
		var e = {};
		CloudflareApps.createElement = function (r, t) {
			CloudflareApps.internal.markSelectors();
			try {
				var o;
				if (t && t.parentNode) t.cfAppsElementId && (o = e[t.cfAppsElementId]), o ? (t.parentNode.replaceChild(o, t), delete e[t.cfAppsElementId]) : t.parentNode.removeChild(t);
				var l, n = document.createElement("cloudflare-app");
				try {
					l = CloudflareApps.querySelector(r.selector)
				} catch (e) {}
				if (!l) return n;
				if (!l.parentNode && ("after" == r.method || "before" == r.method || "replace" == r.method)) return n;
				switch (l == document.body && ("after" == r.method ? r.method = "append" : "before" == r.method && (r.method = "prepend")), r.method) {
					case "prepend":
						if (l.firstChild) {
							l.insertBefore(n, l.firstChild);
							break
						}
					case "append":
						l.appendChild(n);
						break;
					case "after":
						l.nextSibling ? l.parentNode.insertBefore(n, l.nextSibling) : l.parentNode.appendChild(n);
						break;
					case "before":
						l.parentNode.insertBefore(n, l);
						break;
					case "replace":
						try {
							id = n.cfAppsElementId = Math.random().toString(36), e[id] = l
						} catch (e) {}
						l.parentNode.replaceChild(n, l)
				}
				return n
			} catch (e) {
				"undefined" != typeof console && void 0 !== console.error && console.error("Error creating Cloudflare Apps element", e)
			}
		}
	}(), CloudflareApps.matchPage = function (e) {
		if (!e || !e.length) return !0;
		if (window.CloudflareApps && CloudflareApps.proxy && CloudflareApps.proxy.originalURL) var r = CloudflareApps.proxy.originalURL.parsed,
			t = r.host + r.path;
		else t = document.location.host + document.location.pathname;
		for (var o = 0; o < e.length; o++)
			if (new RegExp(e[o], "i").test(t)) return !0;
		return !1
	}, CloudflareApps.installs.z8mJiV6tI7w0 = {
		appId: "XzVIEqe1R2kW",
		scope: {}
	}, CloudflareApps.installs.z8mJiV6tI7w0.options = {
		ie: 7
	},
	function () {
		var e = document.createElement("script");
		e.src = "/cdn-cgi/apps/body/4o300efCt-CXoq1JEC-sVReFz48.js", document.head.appendChild(e)
	}();