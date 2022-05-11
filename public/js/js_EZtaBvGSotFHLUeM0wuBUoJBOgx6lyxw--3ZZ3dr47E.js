(function($) {
    AOS.init({
        // Global settings
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll

        // Settings that can be overriden on per-element basis, by `data-aos-*` attributes:
        offset: 0, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 500, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

})(jQuery);

;
"use strict";
(function(a, b, c) { a(".ufc-block-localization__title").click(function() { var b = a(this).siblings(".ufc-block-localization__links").attr("aria-hidden");
        b = "true" === b ? "false" : "true", a(this).siblings(".ufc-block-localization__links").attr("aria-hidden", b) }), a(c).mouseup(function(b) { var c = a("#block-ufc-localization");
        c.is(b.target) || 0 !== c.has(b.target).length || a(".ufc-block-localization__links").attr("aria-hidden", "true") }) })(jQuery, window, document);
'use strict';
(function(a) { 'use strict'; var b = a('a[data-toggle],button[data-toggle]');
    0 == b.length || b.each(function() { var b = a(this),
            c = a('#' + b.attr('data-toggle')).toggle();
        c.hide(), b.on('click', function(a) { a.preventDefault(), c.toggle() }) }) })(jQuery, window, document);
'use strict';
(function(a, b) { a('.c-big-links a[href]').filter(function() { return this.href === b.location.href }).addClass('active-link') })(jQuery, window, document);
'use strict';
(function(a) { 'use strict'; var b = a('[data-cta]');
    0 == b.length || b.each(function() { var b = a(this),
            c = a('[data-cta-btn]', b); if (1 <= c.length) { var d = a('[data-cta-content]', b);
            c.each(function() { var b = a(this),
                    c = b.attr('data-cta-btn');
                b.attr('aria-controls', 'cta-content-' + c).attr('aria-expanded', !1), d.filter('[data-cta-content="' + c + '"]').attr('id', 'cta-content-' + c).attr('aria-hidden', !0) }), c.on('click', function(b) { b.preventDefault(); var e = a(this),
                    f = e.attr('data-cta-btn'),
                    g = d.filter('[data-cta-content="' + f + '"]');
                e.attr('aria-expanded', !0).addClass('is-active'), c.not(e).attr('aria-expanded', !1).removeClass('is-active'), d.filter('[data-cta-content="' + f + '"]').attr('aria-hidden', !1), d.not(g).attr('aria-hidden', !0) }) } }) })(jQuery, window, document);
"use strict";
(function(a) { if ("undefined" != typeof a(".c-card--content-footer")) { var b = new ScrollMagic.Controller;
        a(".c-card--content-footer").each(function() { var a = TweenMax.from(this, 0.6, { y: 40, autoAlpha: 0, delay: 0, ease: Power2.easeOut }, 0.1),
                c = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.8, offset: -100, reverse: !1 }).setTween(a).addTo(b) }) } })(jQuery, window, document);
'use strict';
(function(a, b, c) { a(c).ready(function() { a('.c-card--image-details .open-card-extra-details').click(function() { a(this).parent().siblings('.c-card--image-details__back').addClass('open') }), a('.c-card--image-details__back .close-card-extra-details').click(function() { a(this).parent().removeClass('open') }) }) })(jQuery, window, document);
'use strict';
(function(a, b, c) { a(c).ready(function() { a('.c-card-promo-milestone .open-card-extra-details').click(function() { a(this).parent().siblings('.c-card-promo-milestone__back').addClass('open') }), a('.c-card-promo-milestone .close-card-extra-details').click(function() { a(this).parent().removeClass('open') }) }) })(jQuery, window, document);
'use strict';
(function(a, b, c, d, e) { if (d.behaviors.carousels = { attach: function attach(b) { var c = a('[data-carousel="inline"]', b);
                c.not('.slick-initialized').each(function() { a(this).slick() }), c.on('afterChange', function() { var b = a('.c-carousel__header', a(this)),
                        c = a('.slick-active .c-carousel__item-count-index', a(this)); if (b.length && c.length) { var d = a('.c-carousel__items-count span', b);
                        d.length && d.html(c.html()) } }); var d = a('[data-carousel="variable"]', b);
                d.length && d.slick({ slidesToShow: 1, infinite: !1, swipeToSlide: !0, variableWidth: !0, outerEdgeLimit: !0 }); var f = a('[data-carousel="variable-mobile"]', b);
                f.length && (f.on('init, setPosition', function() { var b = a('.block-ufc-events-lastnext .slick-track'),
                        c = b.css('left');
                    b.css('margin-left', '-' + c) }), f.slick({ mobileFirst: !0, slidesToShow: 1, slidesToScroll: 1, infinite: !1, swipeToSlide: !0, arrows: !1, variableWidth: !0, outerEdgeLimit: !0, centerMode: !0, centerPadding: '0px', useTransform: !1, responsive: [{ breakpoint: 767, settings: 'unslick' }] })); var g = a('.c-carousel__content[data-carousel="modal"]', b);
                g.length && g.slick({ slidesToShow: 1, slidesToScroll: 1, infinite: !1, swipeToSlide: !0, arrows: !0 }); var h = a('[data-carousel="multiple"]', b);
                h.each(function() { a(this).slick({ slidesToShow: 3.5, infinite: !1, centerMode: !1, swipeToSlide: !0, responsive: [{ breakpoint: 920, settings: { slidesToShow: 3.5, slidesToScroll: 3.5 } }, { breakpoint: 610, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 319, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }) }); var i = a('[data-carousel="dots-multiple"]', b);
                i.each(function() { a(this).after('<div class="slick-dots-wrapper" />'), a(this).slick({ slidesToShow: 4, dots: !0, infinite: !1, centerMode: !1, variableWidth: !0, swipeToSlide: !0, mobileFirst: !0, appendArrows: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), appendDots: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } }, { breakpoint: 920, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 610, settings: { slidesToShow: 2.1, slidesToScroll: 2, arrows: !1 } }, { breakpoint: 319, settings: { slidesToShow: 1.5, slidesToScroll: 1, dots: !1, arrows: !1 } }] }) }); var j = a('[data-carousel="dots-multiple-3-items"]', b);
                j.each(function() { a(this).after('<div class="slick-dots-wrapper" />'), a(this).slick({ slidesToShow: 3, dots: !0, arrows: !0, infinite: !0, swipeToSlide: !0, mobileFirst: !0, appendArrows: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), appendDots: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), responsive: [{ breakpoint: 920, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 610, settings: { slidesToShow: 2, slidesToScroll: 2, dots: !1, arrows: !1 } }, { breakpoint: 319, settings: { slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !1 } }] }) }), a('[data-carousel="gallery"], [data-carousel="gallery-collapsed"]', b).not('.slick-initialized').each(function() { a(this).on('afterChange', function(b, c, d) { var f = a(this),
                            g = this.querySelectorAll('.video-player-playing'),
                            h = void 0; if (g)
                            for (h = 0; h < g.length; ++h) { var n = g[h];
                                e.players[n.id].pauseVideo() }
                        var i = f.parents('.node--type-gallery'); if (i.length) { var j = i.find('.overlay__header__information__text__current-slide'),
                                k = i.find('.overlay__header__information__text'),
                                l = a('.slick-active .c-carousel__item-count-index', a(this));
                            j.length && l.length ? (j.html(l.text()), k.css('visibility', 'visible')) : k.css('visibility', 'hidden'); var m = i.find('.overlay__header__fullscreen a');
                            m.length && m.attr('data-modal-start-index', d) } }).slick() }); var k = a('.c-gallery-collapsed-item__captions-toggle-button', b);
                k.click(function() { var b = a('.c-gallery-collapsed-item__caption'),
                        c = a('.c-gallery-collapsed-item__captions-toggle-show'),
                        d = a('.c-gallery-collapsed-item__captions-toggle-hide'),
                        e = a('.c-gallery-collapsed-item__footer');
                    e.toggleClass('c-gallery-collapsed-item__footer--hide-comments'), b.toggle(), c.toggle(), d.toggle() }); var l = a('[data-carousel="poster"]', b);
                l.each(function() { a(this).slick({ slidesToShow: 3, dots: !1, infinite: !1, swipeToSlide: !0, arrows: !1, prevArrow: !1, nextArrow: !1, mobileFirst: !0, responsive: [{ breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 920, settings: { slidesToShow: 2.1, slidesToScroll: 2 } }, { breakpoint: 319, settings: { slidesToShow: 1.1, slidesToScroll: 1 } }] }); var b = a('.c-poster--featured'),
                        c = a('.c-poster__front-back-toggle-button'),
                        d = a('.c-poster__back');
                    l.on('breakpoint', function() { a(c).on('click', function() { a(this).closest(b).find(d).toggle(), a(this).closest(b).toggleClass('is-active') }) }) }); var m = a('[data-carousel="dots-instagram"]', b);
                m.each(function() { a(this).after('<div class="slick-dots-wrapper" />'), a(this).slick({ slidesToShow: 4, dots: !0, arrows: !0, infinite: !0, swipeToSlide: !0, mobileFirst: !0, appendArrows: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), appendDots: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), responsive: [{ breakpoint: 1250, settings: { slidesToShow: 4, slidesToScroll: 4 } }, { breakpoint: 920, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 610, settings: { slidesToShow: 2, slidesToScroll: 2.1, dots: !1, arrows: !1 } }, { breakpoint: 319, settings: { slidesToShow: 1.1, slidesToScroll: 1, dots: !1, arrows: !1 } }] }) }); var n = a('[data-carousel="parent-carousel"]', b);
                n.length && n.slick({ slidesToShow: 1, draggable: !1, arrows: !1, fade: !0, accessibility: !1, infinite: !0 }); var o = a('[data-carousel="merchandise"]', b);
                o.length && o.slick({ slidesToShow: 1, slidesToScroll: 1, swipeToSlide: !0, infinite: !1, prevArrow: '<button type="button" class="slick-prev merchandise">Previous</button>', nextArrow: '<button type="button" class="slick-next merchandise">Next</button>' }) } }, d.behaviors.carouselsGridController = { attach: function attach(b) { var c = this;
                a('a[data-carousel-controls]', b).click(function() { var b = a(this),
                        d = b.data('modal-start-index'),
                        e = a('#' + b.data('carousel-controls'));
                    e.length && 'undefined' != typeof d && e.find('.slick-slider').slick('slickGoTo', d, !0), c.close(b) }) }, close: function close(b) { b.data('close-modal').length && a('.ui-widget-content[data-modal-id="' + b.data('close-modal') + '"]').dialog('close') } }, a(c).ready(function() { var b = a('[data-carousel="label"]');
            b.length && b.slick({ slidesToShow: 1, slidesToScroll: 1, swipeToSlide: !0, infinite: !0, asNavFor: '.c-carousel--parent__content', prevArrow: '<button type="button" class="slick-prev label">Previous</button>', nextArrow: '<button type="button" class="slick-next label">Next</button>' }) }), 'undefined' !== a('body.page-node-type-event')) { var f = a('.c-carousel--instagram, .view-related-content-event .c-carousel--dots-multiple__content, .block-ufc-social'); if (f.length) { var g = new ScrollMagic.Controller;
            f.each(function() { var a = TweenMax.from(this, 0.6, { y: 40, autoAlpha: 0, delay: 0, ease: Power2.easeOut }, 0.1),
                    b = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.8, offset: -100, reverse: !1 }).setTween(a).addTo(g) }) } } })(jQuery, window, document, Drupal, drupalSettings);
'use strict';
(function(a, b, c, d) { d.behaviors.carousel_promo_milestones = { attach: function attach(c) { var d = a('[data-carousel="promo-milestones"]', c);
            d.each(function() { a(this).slick({ slidesToShow: 4, dots: !0, infinite: !1, centerMode: !0, variableWidth: !0, swipeToSlide: !0, mobileFirst: !0, appendArrows: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), appendDots: a(this).parents('.c-carousel-wrapper').find('.slick-dots-wrapper'), responsive: [{ breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } }, { breakpoint: 920, settings: { slidesToShow: 3, slidesToScroll: 3 } }, { breakpoint: 610, settings: { slidesToShow: 2.1, slidesToScroll: 2, dots: !1, arrows: !1 } }, { breakpoint: 319, settings: { slidesToShow: 1.5, slidesToScroll: 1, dots: !1, arrows: !1 } }] }) }), 500 < a(b).width() && a('.c-carousel--promo-milestones .slick-track').css('margin-left', '-28%') } } })(jQuery, window, document, Drupal);
'use strict';
(function(a, b) { b.behaviors.eventCardTicketsCarousel = { attach: function attach(b) { a('.c-card-event--tickets-result', b).each(function() { var b = a(this),
                    c = a('.c-card-event--tickets-result__headline a', b),
                    d = a('.c-card-event--tickets-result__date', b);
                a('.slick-slider', b).on('beforeChange', function(b, e, f, g) { var h = a(e.$slides.get(g)).find('.fight-card-tickets').data('fight-label'),
                        i = a(e.$slides.get(g)).find('.fight-card-tickets').data('fight-card'),
                        j = a(e.$slides.get(g)).find('.fight-card-tickets').data('fight-card-name'),
                        k = d.data(i + '-card');
                    c.fadeOut(function() { c.text(h) }).fadeIn(), 'undefined' == typeof k ? d.fadeOut(function() { d.find('a').text('') }).fadeIn() : d.fadeOut(function() { d.find('a').text(k + ' / ' + j) }).fadeIn() }) }), a('.c-card-event--result', b).each(function() { var b = a(this),
                    c = a('.c-card-event--result__headline a', b),
                    d = a('.c-card-event--result__date', b);
                a('.slick-slider', b).on('beforeChange', function(b, e, f, g) { var h = a(e.$slides.get(g)).find('.fight-card-tickets').data('fight-label'),
                        i = a(e.$slides.get(g)).find('.fight-card-tickets').data('fight-card'),
                        j = a(e.$slides.get(g)).find('.fight-card-tickets').data('fight-card-name'),
                        k = d.data(i + '-card');
                    c.fadeOut(function() { c.text(h) }).fadeIn(), 'undefined' == typeof k ? d.fadeOut(function() { d.find('a').text('') }).fadeIn() : d.fadeOut(function() { d.find('a').text(k + ' / ' + j) }).fadeIn() }) }) } } })(jQuery, Drupal);
'use strict';
(function(a) { a('.c-card--grid-card-trending').hover(function() { a('.c-card--grid-card-trending__cta', this).toggleClass('active') }) })(jQuery);
'use strict';
(function(a) { var b = a('.block-views-blockeck-promos-hero .c-carousel-wrapper'),
        c = a('.l-main__hero');
    a(window).scroll(function() { var d = a(window).scrollTop();
        b.css('opacity', 1 - d / b.height()), b.find('.c-hero, .c-hero--article, .c-hero--full').css('transform', 'translateY(' + (d / 2 + 'px') + ')'), c.find('.c-hero--full').css('transform', 'translateY(' + (d / 1.5 + 'px') + ')') }) })(jQuery);
"use strict";
(function() {})(jQuery, window, document);
'use strict';
! function(a, b, c) { 'use strict';
    b.behaviors.leaderboardChosen = { attach: function attach(b) { var d = function() { c('.c-leaderboard__filter select', b).once().chosen({ disable_search_threshold: 100 }) };
            d(), c(a).ajaxComplete(function() { d() }), c('.c-leaderboard__table .views-row:first-child').each(function() { c(this).find('.views-field-leaderboard-stat').appendTo(c(this).find('.views-field-title')) }) } } }(document, Drupal, jQuery);
"use strict";
(function(a) { a(".c-leadership-bio__quote").each(function() { a(this).insertAfter(a(this).siblings(".field--name-bio").children("p:nth-child(1)")) }) })(jQuery, window, document);
'use strict';
(function(a, b, c) {
    function d() { if (void 0 !== drupalSettings.ufc && void 0 !== drupalSettings.ufc.device_icons) { var b = drupalSettings.ufc.device_icons;
            a('#opt-buttons').remove(), a('<div/>', { id: 'opt-buttons' }).prependTo('.view-marketing-devices .view-content'); var c = '';
            a('select[data-drupal-selector="edit-device-type-target-id"] > option').each(function() { if (a.isNumeric(this.value)) { var d = !1;
                    d = a(this)[0].selected, c += ' ' + d, this.machine = this.text.replace(/\s+/g, ''), a('<div/>', { id: 'option-' + this.value, class: 'sym-button ' + this.machine + (d ? ' active ' : ''), text: this.text, style: 'background-image:url(\'' + b[this.machine] + '\');' }).appendTo('#opt-buttons') } }), a('<div/>', { id: 'option-all', class: 'sym-button all ' + ('false false false' == a.trim(c) ? 'active' : ''), text: 'All' }).prependTo('#opt-buttons'), a('.sym-button').on('click', function() { a('.sym-button').removeClass('active'), a(this).addClass('active'); var b = a(this).attr('id').replace('option-', '');
                a('select[data-drupal-selector="edit-device-type-target-id"]').val(b).trigger('change') }) } }
    a(c).ready(function() { d() }).ajaxComplete(function() { d() }) })(jQuery, window, document);
"use strict";
(function(a, b, c, d, e) {
    function f() { var a, b = c.querySelectorAll(".video-player-playing"); if (b)
            for (a = 0; a < b.length; ++a) { var d = b[a];
                e.players[d.id] && e.players[d.id].pauseVideo() } }
    d.behaviors.modals = { attach: function attach(c) { a("[data-modal-target]", c).bind("click", function() { var c = a(this),
                    d = c.attr("data-modal-target"),
                    e = c.attr("data-modal-theme"),
                    g = c.attr("data-modal-start-index"),
                    h = c.attr("data-modal-keep-existing"); if (f(), h && "true" === h || a(".ui-dialog-content").dialog("close"), void 0 !== d) { var i = void 0 === e ? "default" : e; "dark" == i ? a("[data-modal-id=\"" + d + "\"]").dialog({ classes: { "ui-dialog": "c-modal--dark" }, draggable: !1, open: function open() { var b = a(".slick-initialized", this); "undefined" !== g && b.slick("slickGoTo", g), FB.XFBML.parse() }, close: function close() { f(), a(this).dialog("destroy") } }) : "light" == i ? a("[data-modal-id=\"" + d + "\"]").dialog({ classes: { "ui-dialog": "c-modal--light" }, draggable: !1, open: function open() { var b = a(".slick-initialized", this); "undefined" !== g && b.slick("slickGoTo", g) }, close: function close() { f() } }) : "light--dark-title" == i ? a("[data-modal-id=\"" + d + "\"]").dialog({ classes: { "ui-dialog": "c-modal--light--dark-title" }, draggable: !1, open: function open() { var b = a(".slick-initialized", this); "undefined" !== g && b.slick("slickGoTo", g) }, close: function close() { f() } }) : "card" == i ? a("[data-modal-id=\"" + d + "\"]").dialog({ classes: { "ui-dialog": "c-modal--card" }, draggable: !1, maxWidth: 390 }) : "copy-link" == i ? a("[data-modal-id=\"" + d + "\"]").dialog({ classes: { "ui-dialog": "c-modal--copy-link" }, draggable: !1, maxWidth: 360, position: { my: "center top", at: "center bottom", of: c }, open: function open() { a(".c-modal--copy-link").addClass("copy-link--position") }, close: function close() { a(".c-modal--copy-link").removeClass("copy-link--position").hide() } }) : a("[data-modal-id=\"" + d + "\"]").dialog({ classes: { "ui-dialog": "c-modal--default" }, draggable: !1, maxWidth: 1440 }), a(b).resize(function() { a.colorbox.resize() }) } }), a("[data-modal-callback]", c).bind("click", function(b) { b.preventDefault(); var c = a(this),
                    e = c.attr("data-modal-callback"),
                    g = c.attr("data-modal-start-index"),
                    h = c.attr("data-modal-keep-existing");
                f(), h && "true" === h || a(".ui-dialog-content").dialog("close"); var i = a("<div></div>");
                i.attr("id", "l" + Date.now().toString(36) + Math.random().toString(36).substr(2, 9)).dialog({ classes: { "ui-dialog": "c-modal--dark" }, draggable: !1, open: function open() { var b = this,
                            c = d.ajax({ url: e });
                        c.success = function(c, e) { d.Ajax.prototype.success.call(this, c, e); var f = a(".slick-initialized", b); "undefined" != typeof g && f.slick("slickGoTo", g) }, c.options.type = "GET", c.execute() }, close: function close() { f(), a(".c-modal--copy-link").removeClass("copy-link--position").hide(), a(this).remove() } }) }) } } })(jQuery, window, document, Drupal, drupalSettings);
"use strict";
(function(a, b) { "use strict";

    function c() { var c = b.matchMedia("(min-width: 768px)"); if (c.matches) { a(".c-menu-main__menu--level-1").append("<li class='c-menu-main__menu--underline'></li>"), n = a(".c-menu-main__menu--underline"), n.css("opacity", 0), o = 36; var d = new TimelineMax;
            d.to(n, 1, { opacity: 1 }, 0.2), m = s.position().left + (s.outerWidth() - o) / 2, n.width(o).css("left", m) } }

    function d() { var a = b.matchMedia("(min-width: 768px)"); if (a.matches && n && n.length) { q = s.position().left + (s.outerWidth() - o) / 2, m = q; var c = new TimelineMax;
            c.to(n, 0.01, { left: q }, "underline") } } var f = a("#main-menu"),
        g = a("[data-main-menu=smart-menu]"),
        h = a("[data-search-btn]"),
        i = a("[data-search-panel]"); if (f.length) { g.smartmenus({ subMenusMaxWidth: "none", subMenusMinWidth: "100%", subIndicators: !1, collapsibleBehavior: "accordion", hideFunction: function hideFunction(a) { a.hide() } }); var e = a(".c-menu-main__menu--level-1 li.is-active:eq(0) > a");
        g.smartmenus("itemActivate", e); var j = b.matchMedia("(min-width: 768px)"); if (j.matches && g.smartmenus("menuHideAll"), e.hasClass("highlighted")) { var k = e.next().height(),
                l = g.height() + k;
            f.height(l) }
        g.on("show.smapi", function(b, c) { "true" == i.attr("aria-expanded") && (h.attr("data-search-panel", "collapsed"), i.attr("aria-expanded", "false")); var d = a(c).height() + g.height();
            f.height(d) }), g.on("hide.smapi", function() { f.height("auto") }), h.on("focus", function() { var c = b.matchMedia("(min-width: 768px)");
            c.matches && a.SmartMenus.hideAll() }); var m, n, o, p, q, r = b.location.pathname,
            s = a(".c-menu-main__item--home > a");
        0 < a(".c-menu-main__menu--level-1 > li.is-active").length && (s = a(".c-menu-main__menu--level-1 > li.is-active > a")), setTimeout(function() { c() }, 2e3); var t = new TimelineMax;
        a(".c-menu-main__menu--level-1 > li").hover(function() { t.kill(), j.matches && a(".c-menu-main__menu--level-2 > li > a").css("transform", "matrix(1, 0, 0, 1, 0, -70)").css("opacity", 0), t = new TimelineMax, t.fromTo(a(this).find(".c-menu-main__menu--level-2 > li > a"), 0.5, { y: -70, opacity: 0 }, { y: 0, opacity: 1 }, 0.1), p = a(this).find("> a"), q = p.position().left + (p.outerWidth() - o) / 2; var b = new TimelineMax;
            p.is(s) ? b.to(n, 0.1, { ease: Power2.easeOut, width: 44, left: q - 4 }, "underline") : b.to(n, 0.6, { left: q }, "underline").to(n, 0.2, { ease: Power2.easeOut, width: 1.2 * o }, "underline").to(n, 0.1, { ease: Power2.easeIn, width: o }, "-=0.4") }, function() { t = new TimelineMax, t.fromTo(a(this).find(".c-menu-main__menu--level-2 > li > a"), 0.5, { y: 0, opacity: 1 }, { y: 70, opacity: 0 }).to(a(this).find(".c-menu-main__menu--level-2 > li > a"), 0.01, { y: -70, opacity: 0 }); var b = new TimelineMax;
            p.is(s) ? b.to(n, 0.1, { ease: Power2.easeOut, width: o, left: q }, "underline") : b.to(n, 0.6, { left: m }, "underline").to(n, 0.2, { ease: Power2.easeOut, width: 1.2 * o }, "underline").to(n, 0.2, { ease: Power2.easeIn, width: o }, "-=0.4") }), a(".c-site-header").bind("stickied", function() { var a = setInterval(function() { d() }, 1);
            setTimeout(function() { clearInterval(a) }, 1e3) }), b.onresize = function() { d() }; var u, v = 1;
        a(".block-region-content").find("> div:first-child").hasClass("block-views-blockeck-promos-hero") ? (v = a(".block-region-content").find(".block-views-blockeck-promos-hero:first-child").height(), u = ".c-hero__end") : u = "#header-pin"; var w = new ScrollMagic.Scene({ triggerElement: u, triggerHook: 0 }).addTo(ScrollMagicController);
        w.on("enter", function() { a(".c-site-header").addClass("is-dark"), a(".c-menu-main__menu--level-1").addClass("is-dark"), a(".c-menu-main__menu--level-2").addClass("is-dark"), a(".c-menu-main__menu--level-1 li a").addClass("is-dark"), a(".c-site-header__button--search").addClass("is-dark"), a(".c-site-header__search-panel").addClass("is-dark") }), w.on("leave", function() { a(".c-site-header").removeClass("is-dark"), a(".c-menu-main__menu--level-1").removeClass("is-dark"), a(".c-menu-main__menu--level-2").removeClass("is-dark"), a(".c-menu-main__menu--level-1 li a").removeClass("is-dark"), a(".c-site-header__button--search").removeClass("is-dark"), a(".c-site-header__search-panel").removeClass("is-dark") }) } })(jQuery, window, document);
'use strict';
(function(a) { 'use strict';
    a('.newsletter-page #edit-submit').addClass('disabled'); var b = !0;
    a('.newsletter-page input').blur(function() { disableNewsletterSubscribe(b) }), a('.newsletter-page #edit-country-country').on('change', function() { disableNewsletterSubscribe(b) }) })(jQuery, window, document);

function disableNewsletterSubscribe(a) { a = !0, jQuery('.newsletter-page input').each(function() { '' == jQuery(this).val() && (a = !1) }), '' == jQuery('.newsletter-page #edit-country-country').val() && (a = !1), a ? jQuery('.newsletter-page #edit-submit').removeClass('disabled') : jQuery('.newsletter-page #edit-submit').addClass('disabled') }
'use strict';
(function(a) { var b = a('.slick-overlap');
    b.length && (b.slick({ autoplay: !0, autoplaySpeed: 4e3, fade: !1, prevArrow: !1, nextArrow: !1 }), a('.c-overlap__words h3 a').on('click', function(a) { a.preventDefault() }), a('.c-overlap__words h3').on('mouseover', function() { var b = a(this).index(),
            c = a(this).closest('.c-overlap').find('.slick-overlap');
        c.slick('slickGoTo', parseInt(b)) }), a('.c-overlap__card').on('click', function() { location.href = a(this).find('.c-overlap__link').children('a').attr('href') })) })(jQuery, window, document);
"use strict";
(function() {})(jQuery, window, document);
'use strict';
(function(a, b, c) { 'use strict';
    c.behaviors.overlayHeaders = { attach: function attach(a) { var c, d = a.querySelectorAll('.overlay__header-copy'); if (d) { var e = function() { var a = d[c],
                        e = a.querySelector('.overlay__header-copy__value').innerHTML.trim(),
                        f = a.querySelector('.overlay__header-copy__copy-link button'),
                        g = a.querySelector('.overlay__header-copy__status');
                    f.addEventListener('click', function() { var c = b.createElement('textarea');
                        c.value = e, c.style.position = 'fixed', c.style.top = 0, c.style.left = 0, c.style.width = '1px', c.style.height = '1px', a.appendChild(c), c.select(), b.execCommand('copy'), c.remove(), g.classList.add('overlay__header-copy__status--success') }) }; for (c = 0; c < d.length; ++c) e() } } } })(jQuery, document, Drupal);
'use strict';
var _createClass = function() {
    function a(a, b) { for (var c, d = 0; d < b.length; d++) c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, 'value' in c && (c.writable = !0), Object.defineProperty(a, c.key, c) } return function(b, c, d) { return c && a(b.prototype, c), d && a(b, d), b } }();

function _classCallCheck(a, b) { if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function') }(function(a, b) { b.behaviors.poll = { attach: function attach(b) { 'use strict';

            function c() { var c = b.getElementsByClassName('poll-view-form');
                c[0].submit(function() { a.post('') }) } var d, e = b.getElementsByClassName('form-item-choice'),
                f = []; for (d = 0; d < e.length; ++d) f[d] = e[d], f[d].onclick = c; var g = b.querySelectorAll('dd.choice-result div.bar'),
                h = []; for (d = 0; d < g.length; d++) h[d] = g[d].dataset.value; var i = 0; for (d = 0; d < h; d++) h[d] > h[i] && (i = d); var j = b.querySelectorAll('dd.choice-result'),
                k = []; for (d = 0; d < j.length; d++) k[d] = j[d]; var l = k[i];
            null != l && l.classList.add('winner'); for (var m = b.querySelectorAll('[data-responsive-background-image]'), n = function() {
                    function a(c) { var d = this;
                        _classCallCheck(this, a), this.element = c, this.img = b.querySelector('.field--name-image-poll img'), this.src = '', this.img.addEventListener('load', function() { d.update() }), this.img.complete && this.update() } return _createClass(a, [{ key: 'update', value: function update() { var a = 'undefined' == typeof this.img.currentSrc ? this.img.src : this.img.currentSrc;
                            this.src !== a && (this.src = a, this.element.style.backgroundImage = 'url("' + this.src + '")') } }]), a }(), o = 0; o < m.length; o++) new n(m[o]) } } })(jQuery, Drupal);
"use strict";
(function(a, b, c, d) { "use strict";
    d.behaviors.posters = { attach: function attach() { var b = a(".c-poster--featured"),
                c = a(".c-poster__front-back-toggle-button"),
                d = a(".c-poster__back");
            a(c).on("click", function() { a(this).closest(b).find(d).toggle(), a(this).closest(b).toggleClass("is-active") }) } } })(jQuery, window, document, Drupal);
'use strict';
(function(a, b) { 'use strict';
    b.behaviors.ufcFilterBox = { attach: function attach(b, c) { 'undefined' != typeof c.path && a('.filter-control .clear-all-filters a').attr('href', '/' + c.path.currentPath), a('.filter-control-header').once('ufc-filter-box').on('click', function(b) { b.preventDefault(), b.stopPropagation(); var c = a(this).parents('.filter-control');
                c.hasClass('open-filter') ? c.removeClass('open-filter').find('.filter-control-list').slideUp() : c.addClass('open-filter').find('.filter-control-list').slideDown() }), a('.js-select-up.js-select li').once('js-select-update').on('click', function() { var b = a(this).attr('data-value'),
                    c = a(this).parent('.js-ul').attr('data-filter'),
                    d = a(this).parents('.js-select').find('.js-selected-option');
                d.val(b), a(this).parents('.js-select').find('.js-label').text(a(this).text()), a(this).parents('form').find('.js-form-submit').click() }) } } })(jQuery, Drupal);
'use strict';
(function(a, b, c) { 'use strict';

    function d() { i.attr('data-mobile-menu-state', 'is-visible'), j.attr('data-mobile-menu-state', 'is-open'), e.attr('aria-expanded', 'true') }

    function f() { i.attr('data-mobile-menu-state', 'is-hidden'), j.removeAttr('data-mobile-menu-state'), e.attr('aria-expanded', 'false') }

    function g() { k.attr('aria-expanded', 'true'), l.attr('data-search-state', 'is-visible') }

    function h() { k.attr('aria-expanded', 'false'), l.attr('data-search-state', 'is-hidden') } var e = a('[data-mobile-menu-component="toggle"]'),
        i = a('[data-mobile-menu-component="panel"]'),
        j = a('body');
    e.attr('aria-controls', 'mobile-menu-panel').attr('aria-expanded', 'false'), i.attr('id', 'mobile-menu-panel'), e.on('click', function() { var a = i.attr('data-mobile-menu-state'); 'is-hidden' == a ? d() : f() }); var k = a('[data-search-btn]'),
        l = a('[data-search-panel]');
    k.attr('aria-controls', 'search-panel').attr('aria-expanded', 'false'), l.attr('id', 'search-panel'), k.bind('click', function(a) { var b = l.attr('data-search-state');
        f(), 'is-hidden' == b ? g() : h(), a.stopPropagation() }); var m = b.matchMedia('(min-width: 768px)');
    m.addListener(function() { m.matches && j.removeAttr('data-mobile-menu-state') }), a(c).bind('click', function(a) { l.is(a.target) || 0 !== l.has(a.target).length || 'is-visible' !== l.attr('data-search-state') || h() }), a(b).on('scroll', function() { a('.c-site-header').removeAttr('data-header-state') }) })(jQuery, window, document);
'use strict';
(function(a, b) {
    function c() { a('body').css('padding-bottom', a('footer.c-site-footer').outerHeight()) }
    c(), a(b).on('resize', function() { c() }) })(jQuery, window, document);
'use strict';
! function(a, b, c) { 'use strict';
    b.behaviors.sliderCarousel = { prevArrow: '<button type="button" class="slider-container__btn btn prev" aria-label="Back up the gallery">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25.3"><path d="M18 0L0 12.7l18 12.6z"/></svg>\n                </button>', nextArrow: '<button type="button" class="slider-container__btn btn next" aria-label="Advance the gallery">\n                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 25.3"><path d="M0 25.3l18-12.6L0 0z"/></svg>\n                </button>', attach: function attach(a) { c('#slideshow', a).slick({ slidesToShow: 1, slidesToScroll: 1, adaptiveHeight: !0, mobileFirst: !0, centerMode: !1, dots: !0, prevArrow: this.prevArrow, nextArrow: this.nextArrow, appendArrows: c('.slide-pager'), appendDots: c('.slide-pager'), responsive: [{ breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 4 } }] }), c('button.next').appendTo(c('.slide-pager')) } } }(document, Drupal, jQuery);
'use strict';
! function(a, b, c) { 'use strict';
    b.behaviors.accordion = { attach: function attach(a) { c('.stats-accordion', a).accordion({ heightStyle: 'content', header: 'h3.stats-header', icons: { header: 'ui-icon-triangle-1-n', activeHeader: 'ui-icon-triangle-1-s' } }), c('.ui-accordion-header').each(function() { c(this).find('.ui-accordion-header-icon').appendTo(this) }) } } }(document, Drupal, jQuery);
'use strict';
! function(a, b) { 'use strict';
    a.behaviors.sliderCarousel = { attach: function attach(a) { var c = b('.stats-carousel-items', a);
            c.length && c.slick({ slidesToShow: 8, slidesToScroll: 1, centerMode: !1, infinite: !1, swipeToSlide: !0, prevArrow: '<button type="button" class="slick-prev label">Previous</button>', nextArrow: '<button type="button" class="slick-next label">Next</button>' }) } } }(Drupal, jQuery);
'use strict';
(function() { Drupal.behaviors.eventStats = { attach: function attach(a) { 'use strict';
            jQuery('.event-stats-byname-toggle', a).on('click', function() { jQuery(this).parents('.c-table-wrapper').find('table').toggle() }) } } })(jQuery, window, document);
'use strict';
(function(a, b, c, d, e) { 'use strict';

    function f(a) { var b = Math.floor,
            c = []; if (3600 < a) { var f = b(a / 3600);
            a -= 3600 * f, c.push(f) } var d = b(a / 60);
        a -= 60 * d, c.push(d.toString().padStart(2, '0')); var e = b(a); return c.push(e.toString().padStart(2, '0')), c.join(':') } var g = !1,
        h = 'videoProgress',
        j = JSON.parse(localStorage.getItem(h)) || [];
    e.players = [], d.behaviors.watchedVideos = { attach: function attach(a) { var b, c = a.querySelectorAll('.c-card__overlay-ufc-video-progress'); if (c)
                for (b = 0; b < c.length; ++b) { var d = c[b],
                        e = d.dataset.videoId,
                        f = j[e.toString()],
                        g = d.querySelector('.c-card__overlay-ufc-video-progress__completed');
                    g.style.flexBasis = f + '%' } } }, d.behaviors.mobileFeatured = { attach: function attach(a) { var b = a.querySelectorAll('.video-player__small-screens .video-player__paused-content__featured'),
                e = void 0,
                f = function() { var a = b[e],
                        f = a.querySelectorAll('li'); if (6 < f.length) { var g = c.createElement('button');
                        g.innerText = d.t('Show all'), g.classList.add('video-player__paused-content__featured__more'), g.addEventListener('click', function() { a.classList.contains('open') ? (a.classList.remove('open'), g.innerText = d.t('Show all')) : (a.classList.add('open'), g.innerText = d.t('Show less')) }), a.appendChild(g) } }; for (e = 0; e < b.length; ++e) f() } }, d.behaviors.videoPlayer = { attach: function attach(a) { var b, c = a.querySelectorAll('.video-player-bg'); if (c)
                for (b = 0; b < c.length; ++b) { var d = c[b];
                    d.querySelector('video').play() } } }, d.behaviors.videoPlayer = { attach: function attach(a) { var d, i = a.querySelectorAll('.video-player-local, .video-player-embedded');
            i && function() { var j = c.createElement('div');
                j.classList.add('video-player-float-wrapper'), c.body.appendChild(j); var k = null,
                    l = null,
                    m = !1;
                b.addEventListener('scroll', function() { m = !0 }); var n = !1;
                b.addEventListener('resize', function() { n = !0 }); var o = setInterval(function() { if ((m || n) && (m = !1, n = !1, !!i)) { if (!b.matchMedia('(min-width: 805px)').matches) return void(k && k.destroy()); var d = a.querySelector('.video-player-playing'); if (d) { var f = d.id,
                                    g = d.getBoundingClientRect(),
                                    h = 100,
                                    o = g.top >= (b.innerHeight || c.documentElement.clientHeight) - h || g.left >= (b.innerWidth || c.documentElement.clientWidth) - h || g.bottom <= h || g.right <= h; if (o) { var r = d.querySelector('#' + f + ' > .video-player__float'); if (!r) return; if (k) return;
                                    j.style.display = 'block'; var s = d.querySelector('#' + f + ' > video, #' + f + ' > .video-embed-field-provider-dve > video');
                                    k = d, k.destroy = function() { j.style.display = 'none', clearInterval(l); var a = j.querySelector('.video-player__float');
                                        k.appendChild(a), k = null }, j.appendChild(r); var t = r.querySelector('.video-player__float__close');
                                    t.addEventListener('click', function() { e.players[f].pauseVideo(), k.destroy() }), clearInterval(l); var p = r.querySelector('.video-player__float__canvas'),
                                        q = p.getContext('2d');
                                    l = setInterval(function() { q.drawImage(s, 0, 0, 320, 180) }, 33) } else k && k.destroy() } } }, 500),
                    p = !1;
                c.addEventListener('mousemove', function() { p = !0 }); var q = setInterval(function() { if (p) { var b = a.querySelector('.video-player:hover'); if (i)
                                for (d = 0; d < i.length; ++d) { var c = i[d];
                                    b && c.id === b.id ? c.classList.add('video-player-hover') : c.classList.remove('video-player-hover') } } }, 500),
                    r = setInterval(function() { if (!p) { var b, c = a.querySelectorAll('.video-player-hover'); if (c)
                                for (b = 0; b < c.length; ++b) c[b].classList.remove('video-player-hover'); return }
                        p = !1 }, 3e3),
                    s = function() { var j = i[d],
                            l = 'v' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
                        j.setAttribute('id', l); var m = {};
                        m.player = j, m.id = j.dataset.videoId, m.video = j.querySelector('#' + l + ' > video, #' + l + ' > .video-embed-field-provider-dve > video'), m.adContainer = j.querySelector('#' + l + ' > .video-player__ads'), m.adContainerPlayer = j.querySelector('#' + l + ' > .video-player__ads > .video-player__ads__player'), m.overlayToggleButton = j.querySelector('#' + l + ' > .video-player__play'), m.progressBar = j.querySelector('#' + l + ' > .video-player__progress .video-player__progress__completed'), m.autoplay = 'autoplay' === j.dataset.autoplay, m.controlsProgress = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__progress'), m.controlsProgressBar = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__progress__completed'), m.controlsToggle = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__toggle'), m.controlsCurrentTime = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__time__current-time'), m.controlsDuration = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__time__duration'), m.controlsVolume = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__volume'), m.controlsVolumeOffIcon = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__volume__off'), m.controlsVolumeOnIcon = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__volume__on'), m.controlsVolumeFullIcon = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__volume__full'), m.controlsVolumeRange = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__volume__range'), m.controlsFullScreenButton = j.querySelector('#' + l + ' > .video-player__controls .video-player__controls__fullscreen'), m.headerDuration = j.querySelector('#' + l + ' > .overlay__header .overlay__header__information__text'), m.endedContent = j.querySelector('#' + l + ' > .video-player__ended-content'), m.nextVideo = j.querySelector('#' + l + ' > .video-player__ended-content .video-player__ended-content__videos'), m.nextVideoCountdown = j.querySelector('#' + l + ' > .video-player__ended-content .video-player__ended-content__countdown'), m.nextVideoFirstOverlay = j.querySelector('#' + l + ' > .video-player__ended-content .c-card__overlay-text'), m.nextVideoTimer = j.querySelector('#' + l + ' > .video-player__ended-content .video-player__ended-content__countdown__time'), m.nextVideoFirst = j.querySelector('#' + l + ' > .video-player__ended-content .video-player__ended-content__videos a'), m.floatCanvas = j.querySelector('#' + l + ' > .video-player__float .video-player__float__canvas'), m.floatToggle = j.querySelector('#' + l + ' > .video-player__float .video-player__float__toggle'), m.floatVolumeOffIcon = j.querySelector('#' + l + ' > .video-player__float .video-player__float__volume__off'), m.floatVolumeOnIcon = j.querySelector('#' + l + ' > .video-player__float .video-player__float__volume__on'), m.floatVolumeFullIcon = j.querySelector('#' + l + ' > .video-player__float .video-player__float__volume__full'), m.floatFullScreenButton = j.querySelector('#' + l + ' > .video-player__float .video-player__float__fullscreen'), m.floatProgressBar = j.querySelector('#' + l + ' > .video-player__float .video-player__float__progress__completed'), m.playPromise = null, m.videoDuration = 0, m.videoLastVolume = 0.5, m.videoReady = function() { this.setDuration() }.bind(m), m.setDuration = function() { this.videoDuration = isNaN(this.video.duration) ? 0 : this.video.duration, null !== this.controlsCurrentTime && (this.controlsCurrentTime.innerHTML = f(0)), null !== this.controlsDuration && (this.controlsDuration.innerHTML = f(this.videoDuration)), null !== this.headerDuration && (this.headerDuration.innerHTML = f(this.videoDuration)) }.bind(m), m.mainTogglePlay = function() { k && k.destroy(), this.togglePlay() }.bind(m), m.playVideo = function() { var b, c = a.querySelectorAll('.video-player-playing'); if (c)
                                for (b = 0; b < c.length; ++b) { var d = c[b];
                                    d.id !== this.player.id && e.players[d.id].pauseVideo() }
                            return this.video.playing = !0, this.playPromise = this.video.play(), this.playPromise }.bind(m), m.pauseVideo = function() { g, this.playPromise instanceof Promise && this.video.pause() }.bind(m), m.togglePlay = function() { this.video.paused ? this.playVideo() : this.pauseVideo() }.bind(m), m.initVideo = function() { this.pauseVideo(), this.video.currentTime = 0, this.player.classList.add('video-player-init'), this.player.classList.remove('video-player-playing'), this.player.classList.remove('video-player-paused'), this.player.classList.remove('video-player-ended') }.bind(m), m.updateState = function() { var a = '<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/custom/ufc/assets/svg/sprite-ui.svg#play"></use></svg>',
                                b = '<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/themes/custom/ufc/assets/svg/sprite-ui.svg#pause"></use></svg>';
                            this.player.classList.remove('video-player-init'), this.player.classList.remove('video-player-playing'), this.player.classList.remove('video-player-paused'), this.player.classList.remove('video-player-ended'), this.video.ended ? (this.controlsToggle.innerHTML = a, this.floatToggle && (this.floatToggle.innerHTML = a), this.overlayToggleButton.innerHTML = a, this.player.classList.add('video-player-ended'), this.nextVideoFirst && this.startNext(10)) : this.video.paused ? (this.controlsToggle.innerHTML = a, this.floatToggle && (this.floatToggle.innerHTML = a), this.overlayToggleButton.innerHTML = a, this.player.classList.add('video-player-paused')) : (this.video.playing || 0 < this.video.currentTime) && (this.controlsToggle.innerHTML = b, this.floatToggle && (this.floatToggle.innerHTML = b), this.overlayToggleButton.innerHTML = b, this.player.classList.add('video-player-playing')) }.bind(m), m.startNext = function(a) { a--, 0 == a && this.nextVideoFirst ? this.nextVideoFirst.click() : this.nextVideoTimer && (this.nextVideoTimer.innerHTML = a, setTimeout(function() { m.startNext(a) }, 1e3)) }.bind(m), m.responsiveChanges = function() { this.endedContent && b.matchMedia('(min-width: 1024px)').matches ? this.endedContent.appendChild(this.nextVideoCountdown) : this.nextVideoFirstOverlay && this.nextVideoFirstOverlay.appendChild(this.nextVideoCountdown) }.bind(m), m.handleProgress = function() { var a = 100 * (this.video.currentTime / this.video.duration);
                            this.progressBar.style.flexBasis = a + '%', this.controlsProgressBar.style.flexBasis = a + '%', this.floatProgressBar && (this.floatProgressBar.style.flexBasis = a + '%'), this.controlsCurrentTime.innerHTML = f(this.video.currentTime); var b = JSON.parse(localStorage.getItem(h)) || [];
                            b[this.id.toString()] = Math.ceil(a), localStorage.setItem(h, JSON.stringify(b)) }.bind(m), m.scrub = function(a) { this.video.currentTime = a.offsetX / this.controlsProgress.offsetWidth * this.video.duration }.bind(m), m.volumeRangeUpdate = function() { var a = this.controlsVolumeRange.value;
                            this.videoLastVolume = this.video.volume = this.adContainerPlayer.volume = a, 0 === this.value ? (this.volumeSetOffIcons(), this.video.muted = !0, this.adContainerPlayer.muted = !0) : 0 < a && 1 > a ? (this.volumeSetOnIcons(), this.video.muted = !1, this.adContainerPlayer.muted = !1) : (this.volumeSetFullIcons(), this.video.muted = !1, this.adContainerPlayer.muted = !1) }.bind(m), m.volumeOff = function() { this.video.muted = this.adContainerPlayer.muted = !0, this.controlsVolumeRange.value = this.video.volume = this.adContainerPlayer.volume = 0, this.volumeSetOffIcons() }.bind(m), m.volumeOn = function() { this.video.muted = this.adContainerPlayer.muted = !1, this.controlsVolumeRange.value = this.video.volume = this.adContainerPlayer.volume = this.videoLastVolume, 1 == this.video.volume ? this.volumeSetFullIcons() : this.volumeSetOnIcons() }.bind(m), m.volumeSetOnIcons = function() { this.controlsVolumeOnIcon.style.display = 'block', this.controlsVolumeFullIcon.style.display = 'none', this.controlsVolumeOffIcon.style.display = 'none', this.floatVolumeOnIcon.style.display = 'block', this.floatVolumeFullIcon.style.display = 'none', this.floatVolumeOffIcon.style.display = 'none' }.bind(m), m.volumeSetFullIcons = function() { this.controlsVolumeOnIcon.style.display = 'none', this.controlsVolumeFullIcon.style.display = 'block', this.controlsVolumeOffIcon.style.display = 'none', this.floatVolumeOnIcon.style.display = 'none', this.floatVolumeFullIcon.style.display = 'block', this.floatVolumeOffIcon.style.display = 'none' }.bind(m), m.volumeSetOffIcons = function() { this.controlsVolumeOnIcon.style.display = 'none', this.controlsVolumeFullIcon.style.display = 'none', this.controlsVolumeOffIcon.style.display = 'block', this.floatVolumeOnIcon.style.display = 'none', this.floatVolumeFullIcon.style.display = 'none', this.floatVolumeOffIcon.style.display = 'block' }.bind(m), m.toggleFullScreen = function() { j.classList.contains('video-player-fullscreen') ? this.closeFullScreen() : this.openFullScreen(), this.setFullScreenState() }.bind(m), m.openFullScreen = function() { this.player.requestFullscreen ? this.player.requestFullscreen() : this.player.mozRequestFullScreen ? this.player.mozRequestFullScreen() : this.player.webkitRequestFullscreen ? this.player.webkitRequestFullscreen() : this.video.webkitSupportsFullscreen ? this.video.webkitEnterFullscreen() : this.player.msRequestFullscreen && this.player.msRequestFullscreen(), this.player.classList.add('video-player-fullscreen') }.bind(m), m.closeFullScreen = function() { c.exitFullscreen ? c.exitFullscreen() : c.mozCancelFullscreen ? c.mozCancelFullscreen() : c.webkitExitFullscreen ? c.webkitExitFullscreen() : c.msExitFullscreen && c.msExitFullscreen() }.bind(m), m.setFullScreenState = function() { c.fullscreenElement || c.webkitIsFullScreen || c.mozFullScreen || c.msFullscreenElement ? this.player.classList.add('video-player-fullscreen') : this.player.classList.remove('video-player-fullscreen') }.bind(m), m.controlsCurrentTime.innerHTML = f(0), m.player.classList.add('video-player-init'), b.addEventListener('resize', m.responsiveChanges), m.video.addEventListener('videoReady', m.metadataLoaded), m.video.addEventListener('durationchange', m.setDuration), m.video.addEventListener('timeupdate', m.handleProgress), m.video.addEventListener('play', m.updateState), m.video.addEventListener('pause', m.updateState), m.video.addEventListener('ended', m.updateState), m.overlayToggleButton.addEventListener('click', m.mainTogglePlay), m.controlsToggle.addEventListener('click', m.mainTogglePlay), m.mousedown = !1, m.controlsProgress.addEventListener('click', m.scrub), m.controlsProgress.addEventListener('mousemove', function(a) { return m.mousedown && m.scrub(a) }), m.controlsProgress.addEventListener('mousedown', function() { return m.mousedown = !0 }), m.controlsProgress.addEventListener('mouseup', function() { return m.mousedown = !1 }), m.controlsVolume.addEventListener('click', function(a) { a.preventDefault() }), m.controlsVolumeOnIcon.addEventListener('click', m.volumeOff), m.controlsVolumeFullIcon.addEventListener('click', m.volumeOff), m.controlsVolumeOffIcon.addEventListener('click', m.volumeOn), m.controlsVolumeRange.addEventListener('change', m.volumeRangeUpdate), m.controlsVolumeRange.addEventListener('mousemove', m.volumeRangeUpdate), m.controlsFullScreenButton.addEventListener('click', m.toggleFullScreen), m.floatCanvas && m.floatToggle && (m.floatCanvas.addEventListener('click', m.togglePlay), m.floatToggle.addEventListener('click', m.togglePlay), m.floatVolumeOnIcon.addEventListener('click', m.volumeOff), m.floatVolumeFullIcon.addEventListener('click', m.volumeOff), m.floatVolumeOffIcon.addEventListener('click', m.volumeOn), m.floatFullScreenButton.addEventListener('click', m.toggleFullScreen)), c.addEventListener('fullscreenchange', m.setFullScreenState), c.addEventListener('webkitfullscreenchange', m.setFullScreenState), c.addEventListener('mozfullscreenchange', m.setFullScreenState), c.addEventListener('MSFullscreenChange', m.setFullScreenState), m.adsManager, m.adDisplayContainer = new google.ima.AdDisplayContainer(m.adContainer, m.adContainerPlayer), m.adsLoader = new google.ima.AdsLoader(m.adDisplayContainer), m.adsLoader.getSettings().setDisableCustomPlaybackForIOS10Plus(!0), m.adsRequest = new google.ima.AdsRequest, m.adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/5458/zuffa.ufc&description_url=' + encodeURIComponent(b.location.href) + '&env=vp&impl=s&correlator=' + Date.now() + m.id + '&tfcd=0&npa=0&gdfp_req=1&output=vast&sz=1x1000&unviewed_position_start=1', g, m.adsRequest.linearAdSlotWidth = m.adsRequest.nonLinearAdSlotWidth = m.adContainer.offsetWidth, m.adsRequest.linearAdSlotHeight = m.adsRequest.nonLinearAdSlotHeight = m.adContainer.offsetHeight, m.adContainer.style.display = 'none', m.adsError = !1; var n = function() { g, m.adsError = !0, this.adsManager && this.adsManager.destroy(), this.adContainer.style.display = 'none', this.video.removeEventListener('play', this.preRollAds), this.autoplay && this.autoPlayVideo() }.bind(m);
                        m.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, n, !1), m.autoplayResolved = !1, m.autoplayAllowed = !1, m.autoplayRequiresMuted = !1, m.autoplayChecksResolved = function() { g, this.autoplayResolved = !0, this.adsError || (this.adsRequest.setAdWillAutoPlay(this.autoplayAllowed), this.adsRequest.setAdWillPlayMuted(this.autoplayRequiresMuted), this.video.addEventListener('play', this.preRollAds)), this.autoplayAllowed && this.playVideo() }.bind(m), m.onAutoplayWithSoundSuccess = function() { g, this.pauseVideo(), this.autoplayAllowed = !0, this.autoplayRequiresMuted = !1, this.autoplayChecksResolved() }.bind(m), m.onMutedAutoplaySuccess = function() { g, this.pauseVideo(), this.autoplayAllowed = !0, this.autoplayRequiresMuted = !0, this.autoplayChecksResolved() }.bind(m), m.onMutedAutoplayFail = function() { g, this.volumeOn(), this.autoplayAllowed = !1, this.autoplayRequiresMuted = !1, this.autoplayChecksResolved() }.bind(m), m.checkMutedAutoplaySupport = function() { g, this.volumeOff(); var a = this.playVideo();a instanceof Promise ? a.then(this.onMutedAutoplaySuccess).catch(this.onMutedAutoplayFail) : this.onMutedAutoplayFail() }.bind(m), m.onAutoplayWithSoundFail = function() { g, this.initVideo() }.bind(m), m.autoPlayVideo = function() { var a = this.playVideo();
                            a instanceof Promise ? a.then(this.onAutoplayWithSoundSuccess).catch(this.onAutoplayWithSoundFail) : this.onAutoplayWithSoundFail() }.bind(m), m.resumeVideo = function() { g, this.adContainer.style.display = 'none', this.video.removeEventListener('play', this.preRollAds), this.playVideo() }.bind(m), m.startAd = function() { g, this.adContainer.style.display = 'block', this.pauseVideo() }.bind(m), m.preRollAds = function() { if (g, this.autoplayResolved) { this.adDisplayContainer.initialize(); try { this.adsManager.init(this.adsRequest.linearAdSlotWidth, this.adsRequest.linearAdSlotHeight, google.ima.ViewMode.NORMAL), this.adsManager.start(), this.video.removeEventListener('play', this.preRollAds) } catch (a) { this.resumeVideo() } } }.bind(m), m.postRollAds = function() { g, this.adsLoader.contentComplete() }.bind(m), m.video.addEventListener('ended', m.postRollAds), m.onContentPauseRequested = function() { g, this.startAd() }.bind(m), m.onContentResumeRequested = function() { g, this.resumeVideo() }.bind(m), m.onAdsManagerLoaded = function(a) { var b = new google.ima.AdsRenderingSettings;
                            b.restoreCustomPlaybackStateOnAdBreakComplete = !0, this.adsManager = a.getAdsManager(this.video, b), this.adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, n), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, this.onContentPauseRequested), this.adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, this.onContentResumeRequested), this.autoplay ? this.autoPlayVideo() : this.video.addEventListener('play', this.preRollAds) }.bind(m), m.adsLoader.requestAds(m.adsRequest), m.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, m.onAdsManagerLoaded, !1), e.players[l] = m }; for (d = 0; d < i.length; ++d) s() }() } }; var k = !1;
    b.onYouTubeIframeAPIReady = function() { k = !0, d.behaviors.youtubePlayer.attach(c) }, b.videoReady = function(a) { e.players[a.target.getIframe().dataset.parentId].videoReady(a) }, b.updateState = function(a) { e.players[a.target.getIframe().dataset.parentId].updateState() }, d.behaviors.youtubePlayer = { attach: function attach(a) { var b, d = a.querySelectorAll('.video-player-youtube'); if (d && k) { var i = !1;
                c.addEventListener('mousemove', function() { i = !0 }); var f = setInterval(function() { if (i) { var c = a.querySelector('.video-player-youtube:hover'); if (d)
                                for (b = 0; b < d.length; ++b) { var e = d[b];
                                    c && e.id === c.id ? e.classList.add('video-player-hover') : e.classList.remove('video-player-hover') } } }, 500),
                    g = setInterval(function() { if (!i) { var b, c = a.querySelectorAll('.video-player-hover'); if (c)
                                for (b = 0; b < c.length; ++b) c[b].classList.remove('video-player-hover'); return }
                        i = !1 }, 3e3),
                    h = function() { var a = d[b],
                            f = 'v' + Date.now().toString(36) + Math.random().toString(36).substr(2, 9),
                            g = f + '-youtube';
                        a.setAttribute('id', f); var h = {};
                        h.player = a, h.id = a.dataset.videoId, h.video = a.querySelector('#' + f + ' > .video-embed-field-provider-youtube > iframe'), h.video.setAttribute('id', g), h.video.dataset.parentId = f, h.autoplay = 'autoplay' === a.dataset.autoplay, h.endedContent = a.querySelector('#' + f + ' > .video-player__ended-content'), h.nextVideo = a.querySelector('#' + f + ' > .video-player__ended-content .video-player__ended-content__videos'), h.nextVideoCountdown = a.querySelector('#' + f + ' > .video-player__ended-content .video-player__ended-content__countdown'), h.nextVideoFirstOverlay = a.querySelector('#' + f + ' > .video-player__ended-content .c-card__overlay-text'), h.nextVideoTimer = a.querySelector('#' + f + ' > .video-player__ended-content .video-player__ended-content__countdown__time'), h.nextVideoFirst = a.querySelector('#' + f + ' > .video-player__ended-content .video-player__ended-content__videos a'), h.YTPlayer = new YT.Player(g, { events: { onReady: videoReady, onStateChange: updateState } }), h.videoReady = function() { this.autoplay && (this.playVideo(), this.YTPlayer.getPlayerState() !== YT.PlayerState.PLAYING && (this.YTPlayer.mute(), this.playVideo())) }.bind(h), h.playVideo = function() { this.YTPlayer.playVideo() }.bind(h), h.pauseVideo = function() { this.YTPlayer.pauseVideo() }.bind(h), h.startNext = function(a) { a--, 0 == a && this.nextVideoFirst ? this.nextVideoFirst.click() : this.nextVideoTimer && (this.nextVideoTimer.innerHTML = a, setTimeout(function() { h.startNext(a) }, 1e3)) }.bind(h), h.updateState = function() { if (this.player.classList.remove('video-player-init'), this.player.classList.remove('video-player-playing'), this.player.classList.remove('video-player-paused'), this.player.classList.remove('video-player-ended'), this.YTPlayer.getPlayerState() === YT.PlayerState.ENDED) this.player.classList.add('video-player-ended'), this.nextVideoFirst && this.startNext(10);
                            else if (this.YTPlayer.getPlayerState() === YT.PlayerState.PAUSED) this.player.classList.add('video-player-paused');
                            else if (this.YTPlayer.getPlayerState() === YT.PlayerState.PLAYING) { var a, b = c.querySelectorAll('.video-player-playing'); if (b)
                                    for (a = 0; a < b.length; ++a) { var d = b[a];
                                        d.id !== this.id && e.players[d.id] && e.players[d.id].pauseVideo() }
                                this.player.classList.add('video-player-playing') } }.bind(h); for (var i = h.player; i && i !== c; i = i.parentNode) i.matches('.ui-dialog') && (i.classList.add('ui-dialog-youtube'), h.dialog = i);
                        e.players[f] = h }; for (b = 0; b < d.length; ++b) h() } } }, Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(a) { for (var b = (this.document || this.ownerDocument).querySelectorAll(a), c = b.length; 0 <= --c && b.item(c) !== this;); return -1 < c }) })(jQuery, window, document, Drupal, drupalSettings);
"use strict";
! function(a) { "use strict"; var b, c = a.querySelectorAll(".video-player .c-embedded-single-media__caption-block"); if (c)
        for (b = 0; b < c.length; ++b) { var d = c[b],
                e = d.clientHeight,
                f = d.parentNode;
            d.style.bottom = 0 - e + "px", f.style.marginBottom = e + "px" } }(document);
'use strict';
(function(a) { a('.legacy-article iframe[src*="youtube.com"]').each(function() { a(this).wrap('<div class="scale-video"></div>') }) })(jQuery, window, document);
'use strict';
! function(a, b, c) { 'use strict';
    b.behaviors.statToggle = { attach: function attach(a) { c('.stats-button__wrapper button.e-button--white', a).on('click', function() { c('.stats-records__outer-container', a).toggleClass('expanded'), c('div.stats-records__outer-container').hasClass('expanded') ? c('.stats-button__wrapper button.e-button--white span.e-button__text').text(b.t('Hide Stats')) : c('.stats-button__wrapper button.e-button--white span.e-button__text').text(b.t('Show Stats')) }) } } }(document, Drupal, jQuery);
'use strict';
(function(a) { 'use strict';
    Drupal.behaviors.pageScrollProgress = { attach: function attach() {
            function b() { a('.article-wrapper').each(function() { var b = a(this),
                        e = b.offset().top,
                        g = b.outerHeight(),
                        h = new ScrollMagic.Scene({ triggerElement: 'body', triggerHook: d, duration: g, offset: e, reverse: !0 }).on('enter', function() { c = b, f(b) }).addTo(ScrollMagicController) }) }
            a('.page-node-type-article .c-site-header').append('<div class="bar-long"></div>'), a('.page-node-type-page.node-display-mode-article .c-site-header').append('<div class="bar-long"></div>'), a('.bar-long').css('background-color', '#D20A0A'); var c = a('.article-wrapper:first'),
                d = 0.2,
                e = a(window).height() - a(window).height() * d,
                f = function(b) { if (a(b).is(c)) { var d = a(b).offset().top,
                            f = a(b).outerHeight(),
                            g = a(b).offset().top + f,
                            h = 100 * (a(window).scrollTop() - (d - a(window).height() + e)) / f;
                        a('.bar-long').css('width', h + '%'), a(window).scroll(function() { var b = 100 * (a(window).scrollTop() - (d - a(window).height() + e)) / f;
                            100 < b ? b = 100 : (0 > b || 0 == a(window).scrollTop()) && (b = 0), a('.bar-long').css('width', b + '%') }) } };
            b(), window.onresize = function() { e = a(window).height() - a(window).height() * d, b() }, a(document).bind('addArticles', function() { b() }) } } })(jQuery);
'use strict';
(function(a, b, c) { a(c).ready(function() {
        function d(c) { var d = a(b).height();
            a(c).each(function() { var c = a(this).offset().top,
                    e = a(b).scrollTop();
                e + d - 100 > c && a(this).addClass('fadeIn') }) }
        a('.panelist-control .btn-filter-open').on('click', function(b) { b.preventDefault(); var c = a('.panelist-control .btn-filter-open');
            c.hasClass('closed') ? (c.removeClass('closed'), c.parents('.panelist-control').removeClass('closed'), c.addClass('open'), c.parents('.panelist-control').addClass('open')) : (c.removeClass('open'), c.parents('.panelist-control').removeClass('open'), c.addClass('closed'), c.parents('.panelist-control').addClass('closed')), a('.panelist-control-list').slideToggle('slow') }), a('.panelist-item-inner.changer').on('click', function(b) { b.preventDefault(); var c = a(this).data('panelist');
            a('#edit-rankings-panelist').val(c), a('.views-exposed-form').submit() }), a('.btn-show-facebook-comments').click(function() { a('.facebook-comments').slideToggle('slow') }), a('.view-athlete-rankings .views-table .rankings--athlete--champion').click(function() { a(this).toggleClass('expanded'), a(this).parents('table').find('tbody').toggleClass('visible') }), a(c).ready(function() { d('body.path-rankings .view-athlete-rankings .rankings--athlete--champion') }), a(b).scroll(function() { d('body.path-rankings .view-athlete-rankings .rankings--athlete--champion') }) }) })(jQuery, window, document);
"use strict";
(function() {})(jQuery);
'use strict';
(function(a, b) { 'use strict';

    function c(a) { a.matches }
    b.behaviors.ufcFacetFilter = { attach: function attach(b) { if (0 != a('.sticky-filter-btn').length) { var d = this;
                d.stickyFilterBtn(a('.sticky-filter-btn'), a('.view-items-wrp')), a(window).scroll(function() { d.stickyFilterBtn(a('.sticky-filter-btn'), a('.view-items-wrp')) }); var e = window.matchMedia('(min-width: 900px)');
                c(e), e.addListener(c), a('.sticky-filter-btn a').on('click', function(b) { return a('aside.l-page__sidebar-first, aside.l-page_filters').slideDown('slow', function() { a('html, body').css({ overflow: 'hidden', height: '100%' }) }), b.preventDefault(), !1 }), a('.facet-filter__close').on('click', function() { a('aside.l-page__sidebar-first, aside.l-page_filters').slideUp('slow', function() { a('html, body').css({ overflow: 'auto', height: 'auto' }) }) }); var f = '.althelete-total';
                f += ' ,.view-id-trending .l-filters__results-summary', f += ' ,.path-search .e-t2--centered', f += ' ,.path-watch .video-library--result-summary', a('.facet-filter-top-nav .facet-tnav-label--white').text(a(f).text()), a('.block-facets__header', b).on('click', function() { a(this).parent().toggleClass('open') }) } }, stickyFilterBtn: function stickyFilterBtn(b, c) { var d = parseInt(c.offset().top),
                e = parseInt(d + c.outerHeight()),
                f = a(window).scrollTop(),
                g = f + a(window).height();
            d + 200 + 20 <= g && e >= g ? b.css({ position: 'fixed', bottom: 20, top: 'auto' }) : b.css({ position: 'absolute', bottom: '0px', top: 'auto' }) } } })(jQuery, Drupal);
'use strict';
(function(a) {
    function b(b) { if ('undefined' == typeof b) return !1; var c = a(window).scrollTop(),
            d = c + a(window).height(),
            e = b.offset().top; return e <= d && e >= c }

    function c(a, b) { 'undefined' != typeof a && (a.append('<div class="u-reveal" />'), 'full' === b && a.append('<div class="u-reveal--left" /><div class="u-reveal--right" />')) } var d = a('.c-hero--prefooter');
    c(d, 'full'); var e = a('.path-frontpage .grid-item:not(.size_2x2) .grid_card_image .c-card--grid-card-trending__image, .path-frontpage .grid-item:not(.size_2x2) .grid_card_image_text .c-card--grid-card-trending__image');
    c(e), a(window).scroll(function() { 'undefined' != typeof d && d.each(function() { b(a(this)) && !1 === a(this).hasClass('u-animate__reveal') && a(this).addClass('u-animate__reveal') }), 'undefined' != typeof e && e.each(function() { b(a(this)) && !1 === a(this).hasClass('u-animate__reveal--fast') && a(this).addClass('u-animate__reveal--fast') }) }), a(window).on('load', function() { a('body').hasClass('page-node-type-athlete') && a('.c-hero--full').attr('data-hero-state', 'animate') }); var f = a('.l-listing__item'),
        g = new ScrollMagic.Controller; 'undefined' != typeof f && f.each(function() { var a = TweenMax.from(this, 0.6, { y: 40, autoAlpha: 0, delay: 0, ease: Power2.easeOut }, 0.1),
            b = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.8, offset: -100, reverse: !1 }).setTween(a).addTo(g) }); var h = a('.c-carousel--poster'),
        i = new ScrollMagic.Controller; 'undefined' != typeof h && h.each(function() { var a = TweenMax.from(this, 0.6, { y: 40, autoAlpha: 0, delay: 0, ease: Power2.easeOut }, 0.1),
            b = new ScrollMagic.Scene({ triggerElement: this, triggerHook: 0.8, offset: -100, reverse: !1 }).setTween(a).addTo(i) }) })(jQuery);
'use strict';
(function() { 'use strict' })(jQuery, Drupal);;
(function($, window, document) {
    'use strict';
    Drupal.behaviors.svgSupportTest = {
        attach: function(context, settings) {
            $(document).ready(function() {
                // adding SVG External Content support to all browsers.
                svg4everybody();
            });
        }
    };
})(jQuery, window, document);;