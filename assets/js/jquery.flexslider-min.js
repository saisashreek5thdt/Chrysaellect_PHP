! function (e) {
	e.flexslider = function (n, a) {
		var t = n;
		t.init = function () {
			if (t.vars = e.extend({}, e.flexslider.defaults, a), t.data("flexslider", !0), t.container = e(".slides", t), t.slides = e(".slides > li", t), t.count = t.slides.length, t.animating = !1, t.currentSlide = t.vars.slideToStart, t.animatingTo = t.currentSlide, t.atEnd = 0 == t.currentSlide, t.eventType = "ontouchstart" in document.documentElement ? "touchstart" : "click", t.cloneCount = 0, t.cloneOffset = 0, "" != t.vars.controlsContainer && (t.controlsContainer = e(t.vars.controlsContainer).eq(e(".slides").index(t.container)), t.containerExists = t.controlsContainer.length > 0), "" != t.vars.manualControls && (t.manualControls = e(t.vars.manualControls, t.containerExists ? t.controlsContainer : t), t.manualExists = t.manualControls.length > 0), t.vars.randomize && (t.slides.sort(function () {
					return Math.round(Math.random()) - .5
				}), t.container.empty().append(t.slides)), "slide" == t.vars.animation.toLowerCase() ? (t.css({
					overflow: "hidden"
				}), t.vars.animationLoop && (t.cloneCount = 2, t.cloneOffset = 1, t.container.append(t.slides.filter(":first").clone().addClass("clone")).prepend(t.slides.filter(":last").clone().addClass("clone"))), t.container.width((t.count + t.cloneCount) * t.width() + 2e3), t.newSlides = e(".slides > li", t), setTimeout(function () {
					t.newSlides.width(t.width()).css({
						float: "left"
					}).show()
				}, 100), t.container.css({
					marginLeft: -1 * (t.currentSlide + t.cloneOffset) * t.width() + "px"
				})) : t.slides.css({
					width: "100%",
					float: "left",
					marginRight: "-100%"
				}).eq(t.currentSlide).fadeIn(400), t.vars.controlNav) {
				if (t.manualExists) t.controlNav = t.manualControls;
				else {
					for (var n = e('<ol class="flex-control-nav"></ol>'), i = 1, s = 0; s < t.count; s++) n.append("<li><a>" + i + "</a></li>"), i++;
					t.containerExists ? (e(t.controlsContainer).append(n), t.controlNav = e(".flex-control-nav li a", t.controlsContainer)) : (t.append(n), t.controlNav = e(".flex-control-nav li a", t))
				}
				t.controlNav.eq(t.currentSlide).addClass("active"), t.controlNav.bind(t.eventType, function (n) {
					n.preventDefault(), e(this).hasClass("active") || t.flexAnimate(t.controlNav.index(e(this)), t.vars.pauseOnAction)
				})
			}
			if (t.vars.directionNav) {
				var r = e('<ul class="flex-direction-nav"><li><a class="prev" href="#">' + t.vars.prevText + '</a></li><li><a class="next" href="#">' + t.vars.nextText + "</a></li></ul>");
				t.containerExists ? (e(t.controlsContainer).append(r), t.directionNav = e(".flex-direction-nav li a", t.controlsContainer)) : (t.append(r), t.directionNav = e(".flex-direction-nav li a", t)), t.vars.animationLoop || (0 == t.currentSlide ? t.directionNav.filter(".prev").addClass("disabled") : t.currentSlide == t.count - 1 && t.directionNav.filter(".next").addClass("disabled")), t.directionNav.bind(t.eventType, function (n) {
					n.preventDefault();
					var a = e(this).hasClass("next") ? t.getTarget("next") : t.getTarget("prev");
					t.canAdvance(a) && t.flexAnimate(a, t.vars.pauseOnAction)
				})
			}
			if (t.vars.keyboardNav && 1 == e("ul.slides").length && e(document).keyup(function (e) {
					if (!t.animating && (39 == e.keyCode || 37 == e.keyCode)) {
						if (39 == e.keyCode) var n = t.getTarget("next");
						else if (37 == e.keyCode) n = t.getTarget("prev");
						t.canAdvance(n) && t.flexAnimate(n, t.vars.pauseOnAction)
					}
				}), t.vars.slideshow && (t.vars.pauseOnHover && t.vars.slideshow && t.hover(function () {
					t.pause()
				}, function () {
					t.resume()
				}), t.animatedSlides = setInterval(t.animateSlides, t.vars.slideshowSpeed)), t.vars.pausePlay) {
				var o = e('<div class="flex-pauseplay"><span></span></div>');
				t.containerExists ? (t.controlsContainer.append(o), t.pausePlay = e(".flex-pauseplay span", t.controlsContainer)) : (t.append(o), t.pausePlay = e(".flex-pauseplay span", t));
				var l = t.vars.slideshow ? "pause" : "play";
				t.pausePlay.addClass(l).text("pause" == l ? t.vars.pauseText : t.vars.playText), t.pausePlay.click(function (n) {
					n.preventDefault(), e(this).hasClass("pause") ? t.pause() : t.resume()
				})
			}
			t.vars.touchSwipe && "ontouchstart" in document.documentElement && t.each(function () {
				var e, n = 20;

				function a(i) {
					if (isMoving) {
						var s = i.touches[0].pageX,
							r = e - s;
						if (Math.abs(r) >= n) {
							! function () {
								this.removeEventListener("touchmove", a), e = null, isMoving = !1
							}();
							var o = r > 0 ? t.getTarget("next") : t.getTarget("prev");
							t.canAdvance(o) && t.flexAnimate(o, t.vars.pauseOnAction)
						}
					}
				}
				isMoving = !1, "ontouchstart" in document.documentElement && this.addEventListener("touchstart", function (n) {
					1 == n.touches.length && (e = n.touches[0].pageX, isMoving = !0, this.addEventListener("touchmove", a, !1))
				}, !1)
			}), "slide" == t.vars.animation.toLowerCase() && (t.sliderTimer, e(window).resize(function () {
				t.newSlides.width(t.width()), t.container.width((t.count + t.cloneCount) * t.width() + 2e3), clearTimeout(t.sliderTimer), t.sliderTimer = setTimeout(function () {
					t.flexAnimate(t.currentSlide)
				}, 300)
			})), t.vars.start(t)
		}, t.flexAnimate = function (e, n) {
			t.animating || (t.animating = !0, t.animatingTo = e, t.vars.before(t), n && t.pause(), t.vars.controlNav && t.controlNav.removeClass("active").eq(e).addClass("active"), t.atEnd = 0 == e || e == t.count - 1, !t.vars.animationLoop && t.vars.directionNav && (0 == e ? t.directionNav.removeClass("disabled").filter(".prev").addClass("disabled") : e == t.count - 1 ? t.directionNav.removeClass("disabled").filter(".next").addClass("disabled") : t.directionNav.removeClass("disabled")), t.vars.animationLoop || e != t.count - 1 || (t.pause(), t.vars.end(t)), "slide" == t.vars.animation.toLowerCase() ? (0 == t.currentSlide && e == t.count - 1 && t.vars.animationLoop && "next" != t.direction ? t.slideString = "0px" : t.currentSlide == t.count - 1 && 0 == e && t.vars.animationLoop && "prev" != t.direction ? t.slideString = -1 * (t.count + 1) * t.slides.filter(":first").width() + "px" : t.slideString = -1 * (e + t.cloneOffset) * t.slides.filter(":first").width() + "px", t.container.animate({
				marginLeft: t.slideString
			}, t.vars.animationDuration, function () {
				0 == t.currentSlide && e == t.count - 1 && t.vars.animationLoop ? t.container.css({
					marginLeft: -1 * t.count * t.slides.filter(":first").width() + "px"
				}) : t.currentSlide == t.count - 1 && 0 == e && t.vars.animationLoop && t.container.css({
					marginLeft: -1 * t.slides.filter(":first").width() + "px"
				}), t.animating = !1, t.currentSlide = e, t.vars.after(t)
			})) : (t.slides.eq(t.currentSlide).fadeOut(t.vars.animationDuration), t.slides.eq(e).fadeIn(t.vars.animationDuration, function () {
				t.animating = !1, t.currentSlide = e, t.vars.after(t)
			})))
		}, t.animateSlides = function () {
			if (!t.animating) {
				var e = t.currentSlide == t.count - 1 ? 0 : t.currentSlide + 1;
				t.flexAnimate(e)
			}
		}, t.pause = function () {
			clearInterval(t.animatedSlides), t.vars.pausePlay && t.pausePlay.removeClass("pause").addClass("play").text(t.vars.playText)
		}, t.resume = function () {
			t.animatedSlides = setInterval(t.animateSlides, t.vars.slideshowSpeed), t.vars.pausePlay && t.pausePlay.removeClass("play").addClass("pause").text(t.vars.pauseText)
		}, t.canAdvance = function (e) {
			return !(!t.vars.animationLoop && t.atEnd) || (0 != t.currentSlide || e != t.count - 1 || "next" == t.direction) && (t.currentSlide != t.count - 1 || 0 != e || "next" != t.direction)
		}, t.getTarget = function (e) {
			return t.direction = e, "next" == e ? t.currentSlide == t.count - 1 ? 0 : t.currentSlide + 1 : 0 == t.currentSlide ? t.count - 1 : t.currentSlide - 1
		}, t.init()
	}, e.flexslider.defaults = {
		animation: "fade",
		slideshow: !0,
		slideshowSpeed: 4e3,
		animationDuration: 300,
		directionNav: !1,
		controlNav: !0,
		keyboardNav: !0,
		touchSwipe: !0,
		prevText: "Previous",
		nextText: "Next",
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		randomize: !1,
		slideToStart: 0,
		animationLoop: !0,
		pauseOnAction: !0,
		pauseOnHover: !1,
		controlsContainer: "",
		manualControls: "",
		start: function () {},
		before: function () {},
		after: function () {},
		end: function () {}
	}, e.fn.flexslider = function (n) {
		return this.each(function () {
			1 == e(this).find(".slides li").length ? e(this).find(".slides li").fadeIn(400) : 1 != e(this).data("flexslider") && new e.flexslider(e(this), n)
		})
	}
}(jQuery);