/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {var $ = __webpack_require__(0);
__webpack_provided_window_dot_jQuery = $;
// Require scripts
// require('./originals/device.min');

__webpack_require__(3);
__webpack_require__(4); // Remove if you don't have and background blurs.
__webpack_require__(5);
__webpack_require__(6); // Remove if you don't have a slider.
__webpack_require__(7); 
__webpack_require__(8); // Remove if you use a full-screen menu.
__webpack_require__(9); // Remove if you don't use parallax.
__webpack_require__(10);
__webpack_require__(11); // Remove if there is no blog.
__webpack_require__(12);
__webpack_require__(13); // Remove if there are no forms with date fields.
__webpack_require__(14);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/**
 * Back To Top - CodyHouse
 * http://codyhouse.co/gem/back-to-top/
 */
jQuery(document).ready(function($){var offset=300,offset_opacity=1200,scroll_top_duration=700,$back_to_top=jQuery('.cd-top');jQuery(window).scroll(function(){(jQuery(this).scrollTop()>offset)?$back_to_top.addClass('cd-is-visible'):$back_to_top.removeClass('cd-is-visible cd-fade-out');if(jQuery(this).scrollTop()>offset_opacity){$back_to_top.addClass('cd-fade-out')}});$back_to_top.on('click',function(event){event.preventDefault();jQuery('body,html').animate({scrollTop:0,},scroll_top_duration)})});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {!function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("plugin.backgroundBlur"),o=t.extend({},r.DEFAULTS,i.data(),"object"==typeof e&&e);n||i.data("plugin.backgroundBlur",n=new r(this,o)),"fadeIn"===e?n.fadeIn():"fadeOut"===e?n.fadeOut():"string"==typeof e&&n.generateBlurredImage(e)})}var i=function(){for(var t,e=3,i=document.createElement("div"),n=i.getElementsByTagName("i");i.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->",n[0];);return e>4?e:t}(),n=function(){return"_"+Math.random().toString(36).substr(2,9)},o={svgns:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink",createElement:function(t,e){var i=document.createElementNS(o.svgns,t);return e&&o.setAttr(i,e),i},setAttr:function(t,e){for(var i in e)"href"===i?t.setAttributeNS(o.xlink,i,e[i]):t.setAttribute(i,e[i]);return t}},r=function(e,i){this.internalID=n(),this.$element=t(e),this.$width=this.$element.width(),this.$height=this.$element.height(),this.element=e,this.options=t.extend({},r.DEFAULTS,i),this.$overlayEl=this.createOverlay(),this.$blurredImage={},this.useVelocity=this.detectVelocity(),this.attachListeners(),this.generateBlurredImage(this.options.imageURL)};r.VERSION="0.1.1",r.DEFAULTS={imageURL:"",blurAmount:10,imageClass:"",overlayClass:"",duration:!1,opacity:1},r.prototype.detectVelocity=function(){return!!__webpack_provided_window_dot_jQuery.Velocity},r.prototype.attachListeners=function(){this.$element.on("ui.blur.loaded",t.proxy(this.fadeIn,this)),this.$element.on("ui.blur.unload",t.proxy(this.fadeOut,this))},r.prototype.fadeIn=function(){this.options.duration&&this.options.duration>0&&(this.useVelocity?this.$blurredImage.velocity({opacity:this.options.opacity},{duration:this.options.duration}):this.$blurredImage.animate({opacity:this.options.opacity},{duration:this.options.duration}))},r.prototype.fadeOut=function(){this.options.duration&&this.options.duration>0?this.useVelocity?this.$blurredImage.velocity({opacity:0},{duration:this.options.duration}):this.$blurredImage.animate({opacity:0},{duration:this.options.duration}):this.$blurredImage.css({opacity:0})},r.prototype.generateBlurredImage=function(t){var e=this.$blurredImage;this.internalID=n(),e.length>0&&(this.options.duration&&this.options.duration>0?this.useVelocity?e.first().velocity({opacity:0},{duration:this.options.duration,complete:function(){e.remove()}}):e.first().animate({opacity:0},{duration:this.options.duration,complete:function(){e.remove()}}):e.remove()),i?this.$blurredImage=this.createIMG(t,this.$width,this.$height):this.$blurredImage=this.createSVG(t,this.$width,this.$height)},r.prototype.createOverlay=function(){return this.options.overlayClass&&""!==this.options.overlayClass?t("<div></div>").prependTo(this.$element).addClass(this.options.overlayClass):!1},r.prototype.createSVG=function(e,i,n){var r=this,s=o.createElement("svg",{xmlns:o.svgns,version:"1.1",width:i,height:n,id:"blurred"+this.internalID,"class":this.options.imageClass,viewBox:"0 0 "+i+" "+n,preserveAspectRatio:"none"}),a="blur"+this.internalID,u=o.createElement("filter",{id:a}),l=o.createElement("feGaussianBlur",{"in":"SourceGraphic",stdDeviation:this.options.blurAmount}),h=o.createElement("image",{x:0,y:0,width:i,height:n,externalResourcesRequired:"true",href:e,style:"filter:url(#"+a+")",preserveAspectRatio:"none"});h.addEventListener("load",function(){r.$element.trigger("ui.blur.loaded")},!0),h.addEventListener("SVGLoad",function(){r.$element.trigger("ui.blur.loaded")},!0),u.appendChild(l),s.appendChild(u),s.appendChild(h);var d=t(s);return r.options.duration&&r.options.duration>0&&(d.css({opacity:0}),window.setTimeout(function(){"0"===d.css("opacity")&&d.css({opacity:1})},this.options.duration+100)),this.element.insertBefore(s,this.element.firstChild),d},r.prototype.createIMG=function(t,e,i){var n=this,o=this.prependImage(t),r=2*this.options.blurAmount>100?100:2*this.options.blurAmount;return o.css({filter:"progid:DXImageTransform.Microsoft.Blur(pixelradius="+r+") ",top:2.5*-this.options.blurAmount,left:2.5*-this.options.blurAmount,width:e+2.5*this.options.blurAmount,height:i+2.5*this.options.blurAmount}).attr("id","blurred"+this.internalID),o.load(function(){n.$element.trigger("ui.blur.loaded")}),this.options.duration&&this.options.duration>0&&window.setTimeout(function(){"0"===o.css("opacity")&&o.css({opacity:1})},this.options.duration+100),o},r.prototype.prependImage=function(e){var i,n=t('<img src="'+e+'" />');return i=this.$overlayEl?n.insertBefore(this.$overlayEl).attr("id",this.internalID).addClass(this.options.imageClass):n.prependTo(this.$element).attr("id",this.internalID).addClass(this.options.imageClass)};var s=t.fn.backgroundBlur;t.fn.backgroundBlur=e,t.fn.backgroundBlur.Constructor=r,t.fn.backgroundBlur.noConflict=function(){return t.fn.backgroundBlur=s,this}}(jQuery);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com> 
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true,
                closed: false,
                tabidentify: '',
                activetab_bg: 'white',
                inactive_bg: '#F5F5F5',
                active_border_color: '#c1c1c1',
                active_content_border_color: '#c1c1c1',
                activate: function () {
                }
            }
            //Variables
            var options = $.extend(defaults, options);
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';
            var hash = window.location.hash;
            var historyApi = !!(window.history && history.replaceState);

            //Events
            $(this).bind('tabactivate', function (e, currentTab) {
                if (typeof options.activate === 'function') {
                    options.activate.call(currentTab, e)
                }
            });

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                var $respTabsList = $respTabs.find('ul.resp-tabs-list.' + options.tabidentify);
                var respTabsId = $respTabs.attr('id');
                $respTabs.find('ul.resp-tabs-list.' + options.tabidentify + ' li').addClass('resp-tab-item').addClass(options.tabidentify);
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                if (options.type == 'vertical')
                    $respTabsList.css('margin-top', '3px');

                $respTabs.find('.resp-tabs-container.' + options.tabidentify).css('border-color', options.active_content_border_color);
                $respTabs.find('.resp-tabs-container.' + options.tabidentify + ' > div').addClass('resp-tab-content').addClass(options.tabidentify);
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs').addClass(options.tabidentify);
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion').addClass(options.tabidentify);
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup to accordion title
                var $tabItemh2;
                $respTabs.find('.resp-tab-content.' + options.tabidentify).before("<h2 class='resp-accordion " + options.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>");

                $respTabs.find('.resp-tab-content.' + options.tabidentify).prev("h2").css({
                    'background-color': options.inactive_bg,
                    'border-color': options.active_border_color
                });

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var $tabItem = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')');
                    var $accItem = $respTabs.find('.resp-accordion:eq(' + itemCount + ')');
                    $accItem.append($tabItem.html());
                    $accItem.data($tabItem.data());
                    $tabItemh2.attr('aria-controls', options.tabidentify + '_tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', options.tabidentify + '_tab_item-' + (count));
                    $tabItem.attr('role', 'tab');
                    $tabItem.css({
                        'background-color': options.inactive_bg,
                        'border-color': 'none'
                    });

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content.' + options.tabidentify).each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', options.tabidentify + '_tab_item-' + (tabcount)).css({
                            'border-color': options.active_border_color
                        });
                        tabcount++;
                    });
                    count++;
                });

                // Show correct content area
                var tabNum = 0;
                if (hash != '') {
                    var matches = hash.match(new RegExp(respTabsId + "([0-9]+)"));
                    if (matches !== null && matches.length === 2) {
                        tabNum = parseInt(matches[1], 10) - 1;
                        if (tabNum > count) {
                            tabNum = 0;
                        }
                    }
                }

                //Active correct tab
                $($respTabs.find('.resp-tab-item.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                    'background-color': options.activetab_bg,
                    'border-color': options.active_border_color
                });

                //keep closed if option = 'closed' or option is 'accordion' and the element is in accordion mode
                if (options.closed !== true && !(options.closed === 'accordion' && !$respTabsList.is(':visible')) && !(options.closed === 'tabs' && $respTabsList.is(':visible'))) {
                    $($respTabs.find('.resp-accordion.' + options.tabidentify)[tabNum]).addClass('resp-tab-active').css({
                        'background-color': options.activetab_bg + ' !important',
                        'border-color': options.active_border_color,
                        'background': 'none'
                    });

                    $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-tab-content-active').addClass(options.tabidentify).attr('style', 'display:block');
                }
                //assign proper classes for when tabs mode is activated before making a selection in accordion mode
                else {
                   // $($respTabs.find('.resp-tab-content.' + options.tabidentify)[tabNum]).addClass('resp-accordion-closed'); //removed resp-tab-content-active
                }

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {

                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $currentTab = $(this);
                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp('', function () {
                                $(this).addClass('resp-accordion-closed');
                            });
                            $currentTab.removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });
                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).slideDown().addClass('resp-tab-content-active');
                        } else {
                            console.log('here');
                            $respTabs.find('.resp-tab-active.' + options.tabidentify).removeClass('resp-tab-active').css({
                                'background-color': options.inactive_bg,
                                'border-color': 'none'
                            });

                            $respTabs.find('.resp-tab-content-active.' + options.tabidentify).removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');

                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active').css({
                                'background-color': options.activetab_bg,
                                'border-color': options.active_border_color
                            });

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + '].' + options.tabidentify).addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                        //Trigger tab activation event
                        $currentTab.trigger('tabactivate', $currentTab);

                        //Update Browser History
                        if (historyApi) {
                            var currentHash = window.location.hash;
                            var tabAriaParts = $tabAria.split('tab_item-');
                            // var newHash = respTabsId + (parseInt($tabAria.substring(9), 10) + 1).toString();
                            var newHash = respTabsId + (parseInt(tabAriaParts[1], 10) + 1).toString();
                            if (currentHash != "") {
                                var re = new RegExp(respTabsId + "[0-9]+");
                                if (currentHash.match(re) != null) {
                                    newHash = currentHash.replace(re, newHash);
                                }
                                else {
                                    newHash = currentHash + "|" + newHash;
                                }
                            }
                            else {
                                newHash = '#' + newHash;
                            }

                            history.replaceState(null, null, newHash);
                        }
                    });

                });

                //Window resize function                   
                $(window).resize(function () {
                    $respTabs.find('.resp-accordion-closed').removeAttr('style');
                });
            });
        }
    });
})(jQuery);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!function(t){var e={mode:"horizontal",slideSelector:"",infiniteLoop:!0,hideControlOnEnd:!1,speed:500,easing:null,slideMargin:0,startSlide:0,randomStart:!1,captions:!1,ticker:!1,tickerHover:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"bx-wrapper",touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!1,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,slideWidth:0,shrinkItems:!1,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};t.fn.bxSlider=function(n){if(0===this.length)return this;if(this.length>1)return this.each(function(){t(this).bxSlider(n)}),this;var s={},o=this,r=t(window).width(),a=t(window).height();if(!t(o).data("bxSlider")){var l=function(){t(o).data("bxSlider")||(s.settings=t.extend({},e,n),s.settings.slideWidth=parseInt(s.settings.slideWidth),s.children=o.children(s.settings.slideSelector),s.children.length<s.settings.minSlides&&(s.settings.minSlides=s.children.length),s.children.length<s.settings.maxSlides&&(s.settings.maxSlides=s.children.length),s.settings.randomStart&&(s.settings.startSlide=Math.floor(Math.random()*s.children.length)),s.active={index:s.settings.startSlide},s.carousel=s.settings.minSlides>1||s.settings.maxSlides>1,s.carousel&&(s.settings.preloadImages="all"),s.minThreshold=s.settings.minSlides*s.settings.slideWidth+(s.settings.minSlides-1)*s.settings.slideMargin,s.maxThreshold=s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin,s.working=!1,s.controls={},s.interval=null,s.animProp="vertical"===s.settings.mode?"top":"left",s.usingCSS=s.settings.useCSS&&"fade"!==s.settings.mode&&function(){for(var t=document.createElement("div"),e=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<e.length;i++)if(void 0!==t.style[e[i]])return s.cssPrefix=e[i].replace("Perspective","").toLowerCase(),s.animProp="-"+s.cssPrefix+"-transform",!0;return!1}(),"vertical"===s.settings.mode&&(s.settings.maxSlides=s.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(s.settings.slideSelector).each(function(){t(this).data("origStyle",t(this).attr("style"))}),d())},d=function(){var e=s.children.eq(s.settings.startSlide);o.wrap('<div class="'+s.settings.wrapperClass+'"><div class="bx-viewport"></div></div>'),s.viewport=o.parent(),s.settings.ariaLive&&!s.settings.ticker&&s.viewport.attr("aria-live","polite"),s.loader=t('<div class="bx-loading" />'),s.viewport.prepend(s.loader),o.css({width:"horizontal"===s.settings.mode?1e3*s.children.length+215+"%":"auto",position:"relative"}),s.usingCSS&&s.settings.easing?o.css("-"+s.cssPrefix+"-transition-timing-function",s.settings.easing):s.settings.easing||(s.settings.easing="swing"),s.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),s.viewport.parent().css({maxWidth:h()}),s.children.css({float:"horizontal"===s.settings.mode?"left":"none",listStyle:"none",position:"relative"}),s.children.css("width",u()),"horizontal"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginRight",s.settings.slideMargin),"vertical"===s.settings.mode&&s.settings.slideMargin>0&&s.children.css("marginBottom",s.settings.slideMargin),"fade"===s.settings.mode&&(s.children.css({position:"absolute",zIndex:0,display:"none"}),s.children.eq(s.settings.startSlide).css({zIndex:s.settings.slideZIndex,display:"block"})),s.controls.el=t('<div class="bx-controls" />'),s.settings.captions&&P(),s.active.last=s.settings.startSlide===f()-1,s.settings.video&&o.fitVids(),("all"===s.settings.preloadImages||s.settings.ticker)&&(e=s.children),s.settings.ticker?s.settings.pager=!1:(s.settings.controls&&C(),s.settings.auto&&s.settings.autoControls&&T(),s.settings.pager&&w(),(s.settings.controls||s.settings.autoControls||s.settings.pager)&&s.viewport.after(s.controls.el)),c(e,g)},c=function(e,i){var n=e.find('img:not([src=""]), iframe').length,s=0;0!==n?e.find('img:not([src=""]), iframe').each(function(){t(this).one("load error",function(){++s===n&&i()}).each(function(){(this.complete||""==this.src)&&t(this).trigger("load")})}):i()},g=function(){if(s.settings.infiniteLoop&&"fade"!==s.settings.mode&&!s.settings.ticker){var e="vertical"===s.settings.mode?s.settings.minSlides:s.settings.maxSlides,i=s.children.slice(0,e).clone(!0).addClass("bx-clone"),n=s.children.slice(-e).clone(!0).addClass("bx-clone");s.settings.ariaHidden&&(i.attr("aria-hidden",!0),n.attr("aria-hidden",!0)),o.append(i).prepend(n)}s.loader.remove(),m(),"vertical"===s.settings.mode&&(s.settings.adaptiveHeight=!0),s.viewport.height(p()),o.redrawSlider(),s.settings.onSliderLoad.call(o,s.active.index),s.initialized=!0,s.settings.responsive&&t(window).bind("resize",B),s.settings.auto&&s.settings.autoStart&&(f()>1||s.settings.autoSlideForOnePage)&&L(),s.settings.ticker&&O(),s.settings.pager&&I(s.settings.startSlide),s.settings.controls&&D(),s.settings.touchEnabled&&!s.settings.ticker&&X(),s.settings.keyboardEnabled&&!s.settings.ticker&&t(document).keydown(N)},p=function(){var e=0,n=t();if("vertical"===s.settings.mode||s.settings.adaptiveHeight)if(s.carousel){var o=1===s.settings.moveSlides?s.active.index:s.active.index*x();for(n=s.children.eq(o),i=1;i<=s.settings.maxSlides-1;i++)n=o+i>=s.children.length?n.add(s.children.eq(i-1)):n.add(s.children.eq(o+i))}else n=s.children.eq(s.active.index);else n=s.children;return"vertical"===s.settings.mode?(n.each(function(i){e+=t(this).outerHeight()}),s.settings.slideMargin>0&&(e+=s.settings.slideMargin*(s.settings.minSlides-1))):e=Math.max.apply(Math,n.map(function(){return t(this).outerHeight(!1)}).get()),"border-box"===s.viewport.css("box-sizing")?e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))+parseFloat(s.viewport.css("border-top-width"))+parseFloat(s.viewport.css("border-bottom-width")):"padding-box"===s.viewport.css("box-sizing")&&(e+=parseFloat(s.viewport.css("padding-top"))+parseFloat(s.viewport.css("padding-bottom"))),e},h=function(){var t="100%";return s.settings.slideWidth>0&&(t="horizontal"===s.settings.mode?s.settings.maxSlides*s.settings.slideWidth+(s.settings.maxSlides-1)*s.settings.slideMargin:s.settings.slideWidth),t},u=function(){var t=s.settings.slideWidth,e=s.viewport.width();if(0===s.settings.slideWidth||s.settings.slideWidth>e&&!s.carousel||"vertical"===s.settings.mode)t=e;else if(s.settings.maxSlides>1&&"horizontal"===s.settings.mode){if(e>s.maxThreshold)return t;e<s.minThreshold?t=(e-s.settings.slideMargin*(s.settings.minSlides-1))/s.settings.minSlides:s.settings.shrinkItems&&(t=Math.floor((e+s.settings.slideMargin)/Math.ceil((e+s.settings.slideMargin)/(t+s.settings.slideMargin))-s.settings.slideMargin))}return t},v=function(){var t=1,e=null;return"horizontal"===s.settings.mode&&s.settings.slideWidth>0?s.viewport.width()<s.minThreshold?t=s.settings.minSlides:s.viewport.width()>s.maxThreshold?t=s.settings.maxSlides:(e=s.children.first().width()+s.settings.slideMargin,t=Math.floor((s.viewport.width()+s.settings.slideMargin)/e)||1):"vertical"===s.settings.mode&&(t=s.settings.minSlides),t},f=function(){var t=0,e=0,i=0;if(s.settings.moveSlides>0){if(!s.settings.infiniteLoop){for(;e<s.children.length;)++t,e=i+v(),i+=s.settings.moveSlides<=v()?s.settings.moveSlides:v();return i}t=Math.ceil(s.children.length/x())}else t=Math.ceil(s.children.length/v());return t},x=function(){return s.settings.moveSlides>0&&s.settings.moveSlides<=v()?s.settings.moveSlides:v()},m=function(){var t,e,i;s.children.length>s.settings.maxSlides&&s.active.last&&!s.settings.infiniteLoop?"horizontal"===s.settings.mode?(t=(e=s.children.last()).position(),S(-(t.left-(s.viewport.width()-e.outerWidth())),"reset",0)):"vertical"===s.settings.mode&&(i=s.children.length-s.settings.minSlides,t=s.children.eq(i).position(),S(-t.top,"reset",0)):(t=s.children.eq(s.active.index*x()).position(),s.active.index===f()-1&&(s.active.last=!0),void 0!==t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0)))},S=function(e,i,n,r){var a,l;s.usingCSS?(l="vertical"===s.settings.mode?"translate3d(0, "+e+"px, 0)":"translate3d("+e+"px, 0, 0)",o.css("-"+s.cssPrefix+"-transition-duration",n/1e3+"s"),"slide"===i?(o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),A())}):A()):"reset"===i?o.css(s.animProp,l):"ticker"===i&&(o.css("-"+s.cssPrefix+"-transition-timing-function","linear"),o.css(s.animProp,l),0!==n?o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(e){t(e.target).is(o)&&(o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),S(r.resetValue,"reset",0),F())}):(S(r.resetValue,"reset",0),F()))):((a={})[s.animProp]=e,"slide"===i?o.animate(a,n,s.settings.easing,function(){A()}):"reset"===i?o.css(s.animProp,e):"ticker"===i&&o.animate(a,n,"linear",function(){S(r.resetValue,"reset",0),F()}))},b=function(){for(var e="",i="",n=f(),o=0;o<n;o++)i="",s.settings.buildPager&&t.isFunction(s.settings.buildPager)||s.settings.pagerCustom?(i=s.settings.buildPager(o),s.pagerEl.addClass("bx-custom-pager")):(i=o+1,s.pagerEl.addClass("bx-default-pager")),e+='<div class="bx-pager-item"><a href="" data-slide-index="'+o+'" class="bx-pager-link">'+i+"</a></div>";s.pagerEl.html(e)},w=function(){s.settings.pagerCustom?s.pagerEl=t(s.settings.pagerCustom):(s.pagerEl=t('<div class="bx-pager" />'),s.settings.pagerSelector?t(s.settings.pagerSelector).html(s.pagerEl):s.controls.el.addClass("bx-has-pager").append(s.pagerEl),b()),s.pagerEl.on("click touchend","a",z)},C=function(){s.controls.next=t('<a class="bx-next" href="">'+s.settings.nextText+"</a>"),s.controls.prev=t('<a class="bx-prev" href="">'+s.settings.prevText+"</a>"),s.controls.next.bind("click touchend",k),s.controls.prev.bind("click touchend",E),s.settings.nextSelector&&t(s.settings.nextSelector).append(s.controls.next),s.settings.prevSelector&&t(s.settings.prevSelector).append(s.controls.prev),s.settings.nextSelector||s.settings.prevSelector||(s.controls.directionEl=t('<div class="bx-controls-direction" />'),s.controls.directionEl.append(s.controls.prev).append(s.controls.next),s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))},T=function(){s.controls.start=t('<div class="bx-controls-auto-item"><a class="bx-start" href="">'+s.settings.startText+"</a></div>"),s.controls.stop=t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">'+s.settings.stopText+"</a></div>"),s.controls.autoEl=t('<div class="bx-controls-auto" />'),s.controls.autoEl.on("click",".bx-start",M),s.controls.autoEl.on("click",".bx-stop",y),s.settings.autoControlsCombine?s.controls.autoEl.append(s.controls.start):s.controls.autoEl.append(s.controls.start).append(s.controls.stop),s.settings.autoControlsSelector?t(s.settings.autoControlsSelector).html(s.controls.autoEl):s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),q(s.settings.autoStart?"stop":"start")},P=function(){s.children.each(function(e){var i=t(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&t(this).append('<div class="bx-caption"><span>'+i+"</span></div>")})},k=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToNextSlide())},E=function(t){t.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),o.goToPrevSlide())},M=function(t){o.startAuto(),t.preventDefault()},y=function(t){o.stopAuto(),t.preventDefault()},z=function(e){var i,n;e.preventDefault(),s.controls.el.hasClass("disabled")||(s.settings.auto&&s.settings.stopAutoOnClick&&o.stopAuto(),void 0!==(i=t(e.currentTarget)).attr("data-slide-index")&&(n=parseInt(i.attr("data-slide-index")))!==s.active.index&&o.goToSlide(n))},I=function(e){var i=s.children.length;if("short"===s.settings.pagerType)return s.settings.maxSlides>1&&(i=Math.ceil(s.children.length/s.settings.maxSlides)),void s.pagerEl.html(e+1+s.settings.pagerShortSeparator+i);s.pagerEl.find("a").removeClass("active"),s.pagerEl.each(function(i,n){t(n).find("a").eq(e).addClass("active")})},A=function(){if(s.settings.infiniteLoop){var t="";0===s.active.index?t=s.children.eq(0).position():s.active.index===f()-1&&s.carousel?t=s.children.eq((f()-1)*x()).position():s.active.index===s.children.length-1&&(t=s.children.eq(s.children.length-1).position()),t&&("horizontal"===s.settings.mode?S(-t.left,"reset",0):"vertical"===s.settings.mode&&S(-t.top,"reset",0))}s.working=!1,s.settings.onSlideAfter.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)},q=function(t){s.settings.autoControlsCombine?s.controls.autoEl.html(s.controls[t]):(s.controls.autoEl.find("a").removeClass("active"),s.controls.autoEl.find("a:not(.bx-"+t+")").addClass("active"))},D=function(){1===f()?(s.controls.prev.addClass("disabled"),s.controls.next.addClass("disabled")):!s.settings.infiniteLoop&&s.settings.hideControlOnEnd&&(0===s.active.index?(s.controls.prev.addClass("disabled"),s.controls.next.removeClass("disabled")):s.active.index===f()-1?(s.controls.next.addClass("disabled"),s.controls.prev.removeClass("disabled")):(s.controls.prev.removeClass("disabled"),s.controls.next.removeClass("disabled")))},H=function(){o.startAuto()},W=function(){o.stopAuto()},L=function(){if(s.settings.autoDelay>0)setTimeout(o.startAuto,s.settings.autoDelay);else o.startAuto(),t(window).focus(H).blur(W);s.settings.autoHover&&o.hover(function(){s.interval&&(o.stopAuto(!0),s.autoPaused=!0)},function(){s.autoPaused&&(o.startAuto(!0),s.autoPaused=null)})},O=function(){var e,i,n,r,a,l,d,c,g=0;"next"===s.settings.autoDirection?o.append(s.children.clone().addClass("bx-clone")):(o.prepend(s.children.clone().addClass("bx-clone")),e=s.children.first().position(),g="horizontal"===s.settings.mode?-e.left:-e.top),S(g,"reset",0),s.settings.pager=!1,s.settings.controls=!1,s.settings.autoControls=!1,s.settings.tickerHover&&(s.usingCSS?(r="horizontal"===s.settings.mode?4:5,s.viewport.hover(function(){i=o.css("-"+s.cssPrefix+"-transform"),n=parseFloat(i.split(",")[r]),S(n,"reset",0)},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(n))),F(d)})):s.viewport.hover(function(){o.stop()},function(){c=0,s.children.each(function(e){c+="horizontal"===s.settings.mode?t(this).outerWidth(!0):t(this).outerHeight(!0)}),a=s.settings.speed/c,l="horizontal"===s.settings.mode?"left":"top",d=a*(c-Math.abs(parseInt(o.css(l)))),F(d)})),F()},F=function(t){var e,i,n=t||s.settings.speed,r={left:0,top:0},a={left:0,top:0};"next"===s.settings.autoDirection?r=o.find(".bx-clone").first().position():a=s.children.first().position(),e="horizontal"===s.settings.mode?-r.left:-r.top,i="horizontal"===s.settings.mode?-a.left:-a.top,S(e,"ticker",n,{resetValue:i})},N=function(e){var i,n,s,r,a=document.activeElement.tagName.toLowerCase();if(null==new RegExp(a,["i"]).exec("input|textarea")&&(i=o,n=t(window),s={top:n.scrollTop(),left:n.scrollLeft()},r=i.offset(),s.right=s.left+n.width(),s.bottom=s.top+n.height(),r.right=r.left+i.outerWidth(),r.bottom=r.top+i.outerHeight(),!(s.right<r.left||s.left>r.right||s.bottom<r.top||s.top>r.bottom))){if(39===e.keyCode)return k(e),!1;if(37===e.keyCode)return E(e),!1}},X=function(){s.touch={start:{x:0,y:0},end:{x:0,y:0}},s.viewport.bind("touchstart MSPointerDown pointerdown",Y),s.viewport.on("click",".bxslider a",function(t){s.viewport.hasClass("click-disabled")&&(t.preventDefault(),s.viewport.removeClass("click-disabled"))})},Y=function(t){if(s.controls.el.addClass("disabled"),s.working)t.preventDefault(),s.controls.el.removeClass("disabled");else{s.touch.originalPos=o.position();var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e];s.touch.start.x=i[0].pageX,s.touch.start.y=i[0].pageY,s.viewport.get(0).setPointerCapture&&e.pointerId&&(s.pointerId=e.pointerId,s.viewport.get(0).setPointerCapture(s.pointerId)),s.viewport.bind("touchmove MSPointerMove pointermove",R),s.viewport.bind("touchend MSPointerUp pointerup",Z),s.viewport.bind("MSPointerCancel pointercancel",V)}},V=function(t){S(s.touch.originalPos.left,"reset",0),s.controls.el.removeClass("disabled"),s.viewport.unbind("MSPointerCancel pointercancel",V),s.viewport.unbind("touchmove MSPointerMove pointermove",R),s.viewport.unbind("touchend MSPointerUp pointerup",Z),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},R=function(t){var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=Math.abs(i[0].pageX-s.touch.start.x),o=Math.abs(i[0].pageY-s.touch.start.y),r=0,a=0;3*n>o&&s.settings.preventDefaultSwipeX?t.preventDefault():3*o>n&&s.settings.preventDefaultSwipeY&&t.preventDefault(),"fade"!==s.settings.mode&&s.settings.oneToOneTouch&&("horizontal"===s.settings.mode?(a=i[0].pageX-s.touch.start.x,r=s.touch.originalPos.left+a):(a=i[0].pageY-s.touch.start.y,r=s.touch.originalPos.top+a),S(r,"reset",0))},Z=function(t){s.viewport.unbind("touchmove MSPointerMove pointermove",R),s.controls.el.removeClass("disabled");var e=t.originalEvent,i=void 0!==e.changedTouches?e.changedTouches:[e],n=0,r=0;s.touch.end.x=i[0].pageX,s.touch.end.y=i[0].pageY,"fade"===s.settings.mode?(r=Math.abs(s.touch.start.x-s.touch.end.x))>=s.settings.swipeThreshold&&(s.touch.start.x>s.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===s.settings.mode?(r=s.touch.end.x-s.touch.start.x,n=s.touch.originalPos.left):(r=s.touch.end.y-s.touch.start.y,n=s.touch.originalPos.top),!s.settings.infiniteLoop&&(0===s.active.index&&r>0||s.active.last&&r<0)?S(n,"reset",200):Math.abs(r)>=s.settings.swipeThreshold?(r<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):S(n,"reset",200)),s.viewport.unbind("touchend MSPointerUp pointerup",Z),s.viewport.get(0).releasePointerCapture&&s.viewport.get(0).releasePointerCapture(s.pointerId)},B=function(e){if(s.initialized)if(s.working)window.setTimeout(B,10);else{var i=t(window).width(),n=t(window).height();r===i&&a===n||(r=i,a=n,o.redrawSlider(),s.settings.onSliderResize.call(o,s.active.index))}},U=function(t){var e=v();s.settings.ariaHidden&&!s.settings.ticker&&(s.children.attr("aria-hidden","true"),s.children.slice(t,t+e).attr("aria-hidden","false"))};return o.goToSlide=function(e,i){var n,r,a,l,d,c=!0,g=0,h={left:0,top:0},u=null;if(s.oldIndex=s.active.index,s.active.index=(d=e)<0?s.settings.infiniteLoop?f()-1:s.active.index:d>=f()?s.settings.infiniteLoop?0:s.active.index:d,!s.working&&s.active.index!==s.oldIndex){if(s.working=!0,void 0!==(c=s.settings.onSlideBefore.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index))&&!c)return s.active.index=s.oldIndex,void(s.working=!1);"next"===i?s.settings.onSlideNext.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(c=!1):"prev"===i&&(s.settings.onSlidePrev.call(o,s.children.eq(s.active.index),s.oldIndex,s.active.index)||(c=!1)),s.active.last=s.active.index>=f()-1,(s.settings.pager||s.settings.pagerCustom)&&I(s.active.index),s.settings.controls&&D(),"fade"===s.settings.mode?(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),s.children.filter(":visible").fadeOut(s.settings.speed).css({zIndex:0}),s.children.eq(s.active.index).css("zIndex",s.settings.slideZIndex+1).fadeIn(s.settings.speed,function(){t(this).css("zIndex",s.settings.slideZIndex),A()})):(s.settings.adaptiveHeight&&s.viewport.height()!==p()&&s.viewport.animate({height:p()},s.settings.adaptiveHeightSpeed),!s.settings.infiniteLoop&&s.carousel&&s.active.last?"horizontal"===s.settings.mode?(h=(u=s.children.eq(s.children.length-1)).position(),g=s.viewport.width()-u.outerWidth()):(n=s.children.length-s.settings.minSlides,h=s.children.eq(n).position()):s.carousel&&s.active.last&&"prev"===i?(r=1===s.settings.moveSlides?s.settings.maxSlides-x():(f()-1)*x()-(s.children.length-s.settings.maxSlides),h=(u=o.children(".bx-clone").eq(r)).position()):"next"===i&&0===s.active.index?(h=o.find("> .bx-clone").eq(s.settings.maxSlides).position(),s.active.last=!1):e>=0&&(l=e*parseInt(x()),h=s.children.eq(l).position()),void 0!==h&&(a="horizontal"===s.settings.mode?-(h.left-g):-h.top,S(a,"slide",s.settings.speed)),s.working=!1),s.settings.ariaHidden&&U(s.active.index*x())}},o.goToNextSlide=function(){if((s.settings.infiniteLoop||!s.active.last)&&1!=s.working){var t=parseInt(s.active.index)+1;o.goToSlide(t,"next")}},o.goToPrevSlide=function(){if((s.settings.infiniteLoop||0!==s.active.index)&&1!=s.working){var t=parseInt(s.active.index)-1;o.goToSlide(t,"prev")}},o.startAuto=function(t){s.interval||(s.interval=setInterval(function(){"next"===s.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},s.settings.pause),s.settings.onAutoChange.call(o,!0),s.settings.autoControls&&!0!==t&&q("stop"))},o.stopAuto=function(t){s.interval&&(clearInterval(s.interval),s.interval=null,s.settings.onAutoChange.call(o,!1),s.settings.autoControls&&!0!==t&&q("start"))},o.getCurrentSlide=function(){return s.active.index},o.getCurrentSlideElement=function(){return s.children.eq(s.active.index)},o.getSlideElement=function(t){return s.children.eq(t)},o.getSlideCount=function(){return s.children.length},o.isWorking=function(){return s.working},o.redrawSlider=function(){s.children.add(o.find(".bx-clone")).outerWidth(u()),s.viewport.css("height",p()),s.settings.ticker||m(),s.active.last&&(s.active.index=f()-1),s.active.index>=f()&&(s.active.last=!0),s.settings.pager&&!s.settings.pagerCustom&&(b(),I(s.active.index)),s.settings.ariaHidden&&U(s.active.index*x())},o.destroySlider=function(){s.initialized&&(s.initialized=!1,t(".bx-clone",this).remove(),s.children.each(function(){void 0!==t(this).data("origStyle")?t(this).attr("style",t(this).data("origStyle")):t(this).removeAttr("style")}),void 0!==t(this).data("origStyle")?this.attr("style",t(this).data("origStyle")):t(this).removeAttr("style"),t(this).unwrap().unwrap(),s.controls.el&&s.controls.el.remove(),s.controls.next&&s.controls.next.remove(),s.controls.prev&&s.controls.prev.remove(),s.pagerEl&&s.settings.controls&&!s.settings.pagerCustom&&s.pagerEl.remove(),t(".bx-caption",this).remove(),s.controls.autoEl&&s.controls.autoEl.remove(),clearInterval(s.interval),s.settings.responsive&&t(window).unbind("resize",B),s.settings.keyboardEnabled&&t(document).unbind("keydown",N),t(this).removeData("bxSlider"),t(window).off("blur",W).off("focus",H))},o.reloadSlider=function(e){void 0!==e&&(n=e),o.destroySlider(),l(),t(o).data("bxSlider",this)},l(),t(o).data("bxSlider",this),this}}}(jQuery);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* jquery-match-height 0.7.2 by @liabru
* http://brm.io/jquery-match-height/
* License MIT
*/
!function(t){"use strict"; true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,n=function(t){return parseFloat(t)||0},a=function(e){var o=1,a=t(e),i=null,r=[];return a.each(function(){var e=t(this),a=e.offset().top-n(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(i-a))<=o?r[r.length-1]=s.add(e):r.push(e),i=a}),r},i=function(e){var o={
    byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=i(e);if(o.remove){var n=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(n)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="0.7.2",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
    r._afterUpdate=null,r._rows=a,r._parse=n,r._parseOptions=i,r._apply=function(e,o){var s=i(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),u=h.parents().filter(":hidden");return u.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),u.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
    "padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=a(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var a=t(o),i=0;if(s.target)i=s.target.outerHeight(!1);else{if(s.byRow&&a.length<=1)return void a.css(s.property,"");a.each(function(){var e=t(this),o=e.attr("style"),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block");var a={
    display:n};a[s.property]="",e.css(a),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}a.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=n(e.css("border-top-width"))+n(e.css("border-bottom-width")),o+=n(e.css("padding-top"))+n(e.css("padding-bottom"))),e.css(s.property,i-o+"px"))})}),u.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
    this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),n=o.attr("data-mh")||o.attr("data-match-height");n in e?e[n]=e[n].add(o):e[n]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(n,a){if(a&&"resize"===a.type){var i=t(window).width();if(i===e)return;e=i;
}n?o===-1&&(o=setTimeout(function(){s(a),o=-1},r._throttle)):s(a)},t(r._applyDataApi);var h=t.fn.on?"on":"bind";t(window)[h]("load",function(t){r._update(!1,t)}),t(window)[h]("resize orientationchange",function(t){r._update(!0,t)})});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
* jquery.slimmenu.js
* http://adnantopal.github.io/slimmenu/
* Author: @adnantopal
* Copyright 2013-2015, Adnan Topal (adnan.co)
* Licensed under the MIT license.
*/
!function(e,n,i,s){"use strict";function t(n,i){this.element=n,this.$elem=e(this.element),this.options=e.extend(d,i),this.init()}var l="slimmenu",a=0,d={resizeWidth:"767",initiallyVisible:!1,collapserTitle:"Main Menu",animSpeed:"medium",easingEffect:null,indentChildren:!1,childrenIndenter:"&nbsp;&nbsp;",expandIcon:"<i>&#9660;</i>",collapseIcon:"<i>&#9650;</i>"};t.prototype={init:function(){var i,s=e(n),t=this.options,l=this.$elem,a='<div class="menu-collapser">'+t.collapserTitle+'<div class="collapse-button"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></div></div>';l.before(a),i=l.prev(".menu-collapser"),l.on("click",".sub-toggle",function(n){n.preventDefault(),n.stopPropagation();var i=e(this).closest("li");e(this).hasClass("expanded")?(e(this).removeClass("expanded").html(t.expandIcon),i.find(">ul").slideUp(t.animSpeed,t.easingEffect)):(e(this).addClass("expanded").html(t.collapseIcon),i.find(">ul").slideDown(t.animSpeed,t.easingEffect))}),i.on("click",".collapse-button",function(e){e.preventDefault(),l.slideToggle(t.animSpeed,t.easingEffect)}),this.resizeMenu(),s.on("resize",this.resizeMenu.bind(this)),s.trigger("resize")},resizeMenu:function(){var i=this,t=e(n),l=t.width(),d=this.options,o=e(this.element),h=e("body").find(".menu-collapser");n.innerWidth!==s&&n.innerWidth>l&&(l=n.innerWidth),l!=a&&(a=l,o.find("li").each(function(){e(this).has("ul").length&&(e(this).addClass("has-submenu").has(".sub-toggle").length?e(this).children(".sub-toggle").html(d.expandIcon):e(this).addClass("has-submenu").append('<span class="sub-toggle">'+d.expandIcon+"</span>")),e(this).children("ul").hide().end().find(".sub-toggle").removeClass("expanded").html(d.expandIcon)}),d.resizeWidth>=l?(d.indentChildren&&o.find("ul").each(function(){var n=e(this).parents("ul").length;e(this).children("li").children("a").has("i").length||e(this).children("li").children("a").prepend(i.indent(n,d))}),o.addClass("collapsed").find("li").has("ul").off("mouseenter mouseleave"),h.show(),d.initiallyVisible||o.hide()):(o.find("li").has("ul").on("mouseenter",function(){e(this).find(">ul").stop().slideDown(d.animSpeed,d.easingEffect)}).on("mouseleave",function(){e(this).find(">ul").stop().slideUp(d.animSpeed,d.easingEffect)}),o.find("li > a > i").remove(),o.removeClass("collapsed").show(),h.hide()))},indent:function(e,n){for(var i=0,s="";e>i;i++)s+=n.childrenIndenter;return"<i>"+s+"</i> "}},e.fn[l]=function(n){return this.each(function(){e.data(this,"plugin_"+l)||e.data(this,"plugin_"+l,new t(this,n))})}}(jQuery,window,document);


/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
* jQuery plugin paroller.js v1.0
* https://github.com/tgomilar/paroller.js
* preview: https://tgomilar.github.io/paroller/
 **/
!function($){"use strict";var r=$("[data-paroller-factor]"),t={bgVertical:function(r,t){return r.css({"background-position":"center "+-t+"px"})},bgHorizontal:function(r,t){return r.css({"background-position":-t+"px center"})},vertical:function(r,t){return r.css({"-webkit-transform":"translateY("+t+"px)","-moz-transform":"translateY("+t+"px)",transform:"translateY("+t+"px)"})},horizontal:function(r,t){return r.css({"-webkit-transform":"translateX("+t+"px)","-moz-transform":"translateX("+t+"px)",transform:"translateX("+t+"px)"})}};$.fn.paroller=function(o){var a=$(window).height(),n=$(document).height(),o=$.extend({factor:0,type:"background",direction:"vertical"},o);r.each(function(){var r=$(this),e=r.offset().top,i=r.outerHeight(),c=r.data("paroller-factor"),l=r.data("paroller-type"),s=r.data("paroller-direction"),u=c?c:o.factor,f=l?l:o.type,d=s?s:o.direction,p=Math.round(e*u),h=Math.round((e-a/2+i)*u);"background"==f?"vertical"==d?t.bgVertical(r,p):"horizontal"==d&&t.bgHorizontal(r,p):"foreground"==f&&("vertical"==d?t.vertical(r,h):"horizontal"==d&&t.horizontal(r,h)),$(window).on("scroll",function(){var o=$(this).scrollTop();p=Math.round((e-o)*u),h=Math.round((e-a/2+i-o)*u),"background"==f?"vertical"==d?t.bgVertical(r,p):"horizontal"==d&&t.bgHorizontal(r,p):"foreground"==f&&n>o&&("vertical"==d?t.vertical(r,h):"horizontal"==d&&t.horizontal(r,h))})})}}(jQuery);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/* Preloader
 * -------------------------------------------------- */
var drumPreloader = function() {
    jQuery( document ).ready(function() {
        // will first fade out the loading animation
        jQuery(".loading-inner").fadeOut("slow", function() {
            // will fade out the whole DIV that covers the website.
            jQuery("#preloader").delay(300).fadeOut("slow");
        });
    });
};

/* Initialize
 * ------------------------------------------------------ */
(function drumInit() {
    drumPreloader();
})();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

/*
 Name: Reading Time
 Dependencies: jQuery
 Author: Michael Lynch
 Author URL: http://michaelynch.com
 Date Created: August 14, 2013
 Date Updated: June 19, 2015
 Licensed under the MIT license
 */
if(jQuery("#estimated-time").length != 0) {
    !function(e){e.fn.readingTime=function(n){var t={readingTimeTarget:".eta",wordCountTarget:null,wordsPerMinute:270,round:!0,lang:"en",lessThanAMinuteString:"",prependTimeString:"",prependWordString:"",remotePath:null,remoteTarget:null,success:function(){},error:function(){}},i=this,r=e(this);i.settings=e.extend({},t,n);var a=i.settings;if(!this.length)return a.error.call(this),this;if("it"==a.lang)var s=a.lessThanAMinuteString||"Meno di un minuto",l="min";else if("fr"==a.lang)var s=a.lessThanAMinuteString||"Moins d'une minute",l="min";else if("de"==a.lang)var s=a.lessThanAMinuteString||"Weniger als eine Minute",l="min";else if("es"==a.lang)var s=a.lessThanAMinuteString||"Menos de un minuto",l="min";else if("nl"==a.lang)var s=a.lessThanAMinuteString||"Minder dan een minuut",l="min";else if("sk"==a.lang)var s=a.lessThanAMinuteString||"Menej než minútu",l="min";else if("cz"==a.lang)var s=a.lessThanAMinuteString||"Méně než minutu",l="min";else if("hu"==a.lang)var s=a.lessThanAMinuteString||"Kevesebb mint egy perc",l="perc";else var s=a.lessThanAMinuteString||"Less than a minute",l="min";var u=function(n){if(""!==n){var t=n.trim().split(/\s+/g).length,i=a.wordsPerMinute/60,r=t/i;if(a.round===!0)var u=Math.round(r/60);else var u=Math.floor(r/60);var g=Math.round(r-60*u);if(a.round===!0)e(a.readingTimeTarget).text(u>0?a.prependTimeString+u+" "+l:a.prependTimeString+s);else{var o=u+":"+g;e(a.readingTimeTarget).text(a.prependTimeString+o)}""!==a.wordCountTarget&&void 0!==a.wordCountTarget&&e(a.wordCountTarget).text(a.prependWordString+t),a.success.call(this)}else a.error.call(this,"The element is empty.")};r.each(function(){null!=a.remotePath&&null!=a.remoteTarget?e.get(a.remotePath,function(n){u(e("<div>").html(n).find(a.remoteTarget).text())}):u(r.text())})}}(jQuery);
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/*!
 * headroom.js v0.7.0 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";function c(a){this.callback=a,this.ticking=!1}function d(b){return b&&"undefined"!=typeof a&&(b===a||b.nodeType)}function e(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var b,c,f=a||{};for(c=1;c<arguments.length;c++){var g=arguments[c]||{};for(b in g)f[b]="object"!=typeof f[b]||d(f[b])?f[b]||g[b]:e(f[b],g[b])}return f}function f(a){return a===Object(a)?a:{down:a,up:a}}function g(a,b){b=e(b,g.options),this.lastKnownScrollY=0,this.elem=a,this.debouncer=new c(this.update.bind(this)),this.tolerance=f(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop}var h={bind:!!function(){}.bind,classList:"classList"in b.documentElement,rAF:!!(a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame)};a.requestAnimationFrame=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame,c.prototype={constructor:c,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},g.prototype={constructor:g,init:function(){return g.cutsTheMustard?(this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this):void 0},destroy:function(){var a=this.classes;this.initialised=!1,this.elem.classList.remove(a.unpinned,a.pinned,a.top,a.initial),this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;(a.contains(b.pinned)||!a.contains(b.unpinned))&&(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(b.documentElement||b.body.parentNode||b.body).scrollTop},getViewportHeight:function(){return a.innerHeight||b.documentElement.clientHeight||b.body.clientHeight},getDocumentHeight:function(){var a=b.body,c=b.documentElement;return Math.max(a.scrollHeight,c.scrollHeight,a.offsetHeight,c.offsetHeight,a.clientHeight,c.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===a||this.scroller===b.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=0>a,c=a+this.getViewportHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},g.options={tolerance:{up:0,down:0},offset:0,scroller:a,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",initial:"headroom"}},g.cutsTheMustard="undefined"!=typeof h&&h.rAF&&h.bind&&h.classList,a.Headroom=g}(window,document);

jQuery( document ).ready(function() {
    // grab an element
    var myElement = document.querySelector("header#masthead");
// construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
// initialise
    headroom.init();
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

!function(e){var a={t:"transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",a:"webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend"},t={en:{name:"English",gregorian:!1,months:{"short":["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],full:["January","February","March","April","May","June","July","August","September","October","November","December"]},weekdays:{"short":["S","M","T","W","T","F","S"],full:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},it:{name:"Italiano",gregorian:!0,months:{"short":["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],full:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"]},weekdays:{"short":["D","L","M","M","G","V","S"],full:["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"]}},fr:{name:"Français",gregorian:!0,months:{"short":["Jan","Fév","Mar","Avr","Mai","Jui","Jui","Aoû","Sep","Oct","Nov","Déc"],full:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]},weekdays:{"short":["D","L","M","M","J","V","S"],full:["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]}},zh:{name:"中文",gregorian:!0,months:{"short":["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],full:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},weekdays:{"short":["天","一","二","三","四","五","六"],full:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"]}},ar:{name:"العَرَبِيَّة",gregorian:!1,months:{"short":["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],full:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},weekdays:{"short":["S","M","T","W","T","F","S"],full:["الأحد","الإثنين","الثلثاء","الأربعاء","الخميس","الجمعة","السبت"]}},fa:{name:"فارسی",gregorian:!1,months:{"short":["ژانویه","فووریه","مارچ","آپریل","می","جون","جولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"],full:["ژانویه","فووریه","مارچ","آپریل","می","جون","جولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"]},weekdays:{"short":["S","M","T","W","T","F","S"],full:["یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه","شنبه"]}},hu:{name:"Hungarian",gregorian:!0,months:{"short":["jan","feb","már","ápr","máj","jún","júl","aug","sze","okt","nov","dec"],full:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},weekdays:{"short":["v","h","k","s","c","p","s"],full:["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"]}},gr:{name:"Ελληνικά",gregorian:!0,months:{"short":["Ιαν","Φεβ","Μάρ","Απρ","Μάι","Ιούν","Ιούλ","Αύγ","Σεπ","Οκτ","Νοέ","Δεκ"],full:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},weekdays:{"short":["Κ","Δ","Τ","Τ","Π","Π","Σ"],full:["Κυριακή","Δευτέρα","Τρίτη","Τετάρτη","Πέμπτη","Παρασκευή","Σάββατο"]}},es:{name:"Español",gregorian:!0,months:{"short":["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],full:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]},weekdays:{"short":["D","L","M","X","J","V","S"],full:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]}},da:{name:"Dansk",gregorian:!0,months:{"short":["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],full:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},weekdays:{"short":["s","m","t","o","t","f","l"],full:["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"]}},de:{name:"Deutsch",gregorian:!0,months:{"short":["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],full:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},weekdays:{"short":["S","M","D","M","D","F","S"],full:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]}},nl:{name:"Nederlands",gregorian:!0,months:{"short":["jan","feb","maa","apr","mei","jun","jul","aug","sep","okt","nov","dec"],full:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},weekdays:{"short":["z","m","d","w","d","v","z"],full:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]}},pl:{name:"język polski",gregorian:!0,months:{"short":["sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"],full:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},weekdays:{"short":["n","p","w","ś","c","p","s"],full:["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"]}},pt:{name:"Português",gregorian:!0,months:{"short":["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],full:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]},weekdays:{"short":["D","S","T","Q","Q","S","S"],full:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"]}},si:{name:"Slovenščina",gregorian:!0,months:{"short":["jan","feb","mar","apr","maj","jun","jul","avg","sep","okt","nov","dec"],full:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},weekdays:{"short":["n","p","t","s","č","p","s"],full:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"]}},uk:{name:"українська мова",gregorian:!0,months:{"short":["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"],full:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},weekdays:{"short":["н","п","в","с","ч","п","с"],full:["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"]}},ru:{name:"русский язык",gregorian:!0,months:{"short":["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"],full:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},weekdays:{"short":["в","п","в","с","ч","п","с"],full:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]}},tr:{name:"Türkçe",gregorian:!0,months:{"short":["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"],full:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},weekdays:{"short":["P","P","S","Ç","P","C","C"],full:["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"]}},ko:{name:"조선말",gregorian:!0,months:{"short":["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"],full:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},weekdays:{"short":["일","월","화","수","목","금","토"],full:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"]}},fi:{name:"suomen kieli",gregorian:!0,months:{"short":["Tam","Hel","Maa","Huh","Tou","Kes","Hei","Elo","Syy","Lok","Mar","Jou"],full:["Tammikuu","Helmikuu","Maaliskuu","Huhtikuu","Toukokuu","Kesäkuu","Heinäkuu","Elokuu","Syyskuu","Lokakuu","Marraskuu","Joulukuu"]},weekdays:{"short":["S","M","T","K","T","P","L"],full:["Sunnuntai","Maanantai","Tiistai","Keskiviikko","Torstai","Perjantai","Lauantai"]}},vi:{name:"Tiếng việt",gregorian:!1,months:{"short":["Th.01","Th.02","Th.03","Th.04","Th.05","Th.06","Th.07","Th.08","Th.09","Th.10","Th.11","Th.12"],full:["Tháng 01","Tháng 02","Tháng 03","Tháng 04","Tháng 05","Tháng 06","Tháng 07","Tháng 08","Tháng 09","Tháng 10","Tháng 11","Tháng 12"]},weekdays:{"short":["CN","T2","T3","T4","T5","T6","T7"],full:["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy"]}}},n={},r=null,l=!1,s=null,d=null,u=null,c=!1,k=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?!0:!1},p=function(){r&&n[r.id].fx&&!n[r.id].fxmobile&&(e(window).width()<480?r.element.removeClass("picker-fxs"):r.element.addClass("picker-fxs"))},m=function(){return n[r.id].jump>=n[r.id].key.y.max-n[r.id].key.y.min?!1:!0},g=function(){var e=A(w()),a=A(v());if(n[r.id].lock){if("from"==n[r.id].lock)return a>e?(Q(),r.element.addClass("picker-lkd"),!0):(r.element.removeClass("picker-lkd"),!1);if("to"==n[r.id].lock)return e>a?(Q(),r.element.addClass("picker-lkd"),!0):(r.element.removeClass("picker-lkd"),!1)}return n[r.id].disabledays?-1!=n[r.id].disabledays.indexOf(e)?(Q(),r.element.addClass("picker-lkd"),!0):(r.element.removeClass("picker-lkd"),!1):void 0},h=function(e){return e%1===0},f=function(e){var a=/(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/;return a.test(e)},y=function(e){return parseInt(n[r.id].key[e].current)},b=function(e){return parseInt(n[r.id].key[e].today)},v=function(){return b("m")+"/"+b("d")+"/"+b("y")},w=function(){return y("m")+"/"+y("d")+"/"+y("y")},T=function(e,a){for(var i=[],t=n[r.id].key[e],l=t.min;l<=t.max;l++)l%a==0&&i.push(l);return i},M=function(e,a){for(var i=a[0],t=Math.abs(e-i),n=0;n<a.length;n++){var r=Math.abs(e-a[n]);t>r&&(t=r,i=a[n])}return i},C=function(e,a){var i=n[r.id].key[e];return a>i.max?C(e,a-i.max+(i.min-1)):a<i.min?C(e,a+1+(i.max-i.min)):a},j=function(){return t[n[r.id].lang].gregorian?[1,2,3,4,5,6,0]:[0,1,2,3,4,5,6]},D=function(e){return z('ul.pick[data-k="'+e+'"]')},S=function(a,i){ul=D(a);var t=[];return ul.find("li").each(function(){t.push(e(this).attr("value"))}),"last"==i?t[t.length-1]:t[0]},z=function(e){return r?r.element.find(e):void 0},A=function(e){return Date.parse(e)/1e3},x=function(){n[r.id].large&&(r.element.toggleClass("picker-lg"),Y())},J=function(){z("ul.pick.pick-l").toggleClass("visible")},F=function(){if(!r.element.hasClass("picker-modal")){var e=r.input,a=e.offset().left+e.outerWidth()/2,i=e.offset().top+e.outerHeight();r.element.css({left:a,top:i})}},O=function(e){n[r.id].lang=Object.keys(t)[e],E(),G()},E=function(){var a=j();z(".pick-lg .pick-lg-h li").each(function(i){e(this).html(t[n[r.id].lang].weekdays.short[a[i]])}),z("ul.pick.pick-m li").each(function(){e(this).html(t[n[r.id].lang].months.short[e(this).attr("value")-1])})},N=function(){r.element.addClass("picker-focus")},L=function(){g()||(r.element.removeClass("picker-focus"),r.element.hasClass("picker-modal")&&e(".picker-modal-overlay").addClass("tohide"),r=null),l=!1},P=function(a){var l=D(a),o=n[r.id].key[a];for(n[r.id].key[a].current=o.today<o.min&&o.min||o.today,i=o.min;i<=o.max;i++){var s=i;"m"==a&&(s=t[n[r.id].lang].months.short[i-1]),"l"==a&&(s=t[Object.keys(t)[i]].name),s+="d"==a?"<span></span>":"",e("<li>",{value:i,html:s}).appendTo(l)}e("<div>",{"class":"pick-arw pick-arw-s1 pick-arw-l",html:e("<i>",{"class":"pick-i-l"})}).appendTo(l),e("<div>",{"class":"pick-arw pick-arw-s1 pick-arw-r",html:e("<i>",{"class":"pick-i-r"})}).appendTo(l),"y"==a&&(e("<div>",{"class":"pick-arw pick-arw-s2 pick-arw-l",html:e("<i>",{"class":"pick-i-l"})}).appendTo(l),e("<div>",{"class":"pick-arw pick-arw-s2 pick-arw-r",html:e("<i>",{"class":"pick-i-r"})}).appendTo(l)),K(a,y(a))},Y=function(){var a=0,i=z(".pick-lg-b");i.find("li").empty().removeClass("pick-n pick-b pick-a pick-v pick-lk pick-sl pick-h").attr("data-value","");var l=(new Date(w()),new Date(w())),o=new Date(w()),s=function(e){var a=e.getMonth(),i=e.getFullYear(),t=i%4==0&&(i%100!=0||i%400==0);return[31,t?29:28,31,30,31,30,31,31,30,31,30,31][a]};o.setMonth(o.getMonth()-1),l.setDate(1);var d=l.getDay()-1;0>d&&(d=6),t[n[r.id].lang].gregorian&&(d--,0>d&&(d=6));for(var u=s(o)-d;u<=s(o);u++)i.find("li").eq(a).html(u).addClass("pick-b pick-n pick-h"),a++;for(var u=1;u<=s(l);u++)i.find("li").eq(a).html(u).addClass("pick-n pick-v").attr("data-value",u),a++;if(i.find("li.pick-n").length<42)for(var c=42-i.find("li.pick-n").length,u=1;c>=u;u++)i.find("li").eq(a).html(u).addClass("pick-a pick-n pick-h"),a++;n[r.id].lock&&("from"===n[r.id].lock?y("y")<=b("y")&&(y("m")==b("m")?z('.pick-lg .pick-lg-b li.pick-v[data-value="'+b("d")+'"]').prevAll("li").addClass("pick-lk"):y("m")<b("m")?z(".pick-lg .pick-lg-b li").addClass("pick-lk"):y("m")>b("m")&&y("y")<b("y")&&z(".pick-lg .pick-lg-b li").addClass("pick-lk")):y("y")>=b("y")&&(y("m")==b("m")?z('.pick-lg .pick-lg-b li.pick-v[data-value="'+b("d")+'"]').nextAll("li").addClass("pick-lk"):y("m")>b("m")?z(".pick-lg .pick-lg-b li").addClass("pick-lk"):y("m")<b("m")&&y("y")>b("y")&&z(".pick-lg .pick-lg-b li").addClass("pick-lk"))),n[r.id].disabledays&&e.each(n[r.id].disabledays,function(e,a){if(a&&f(a)){var i=new Date(1e3*a);i.getMonth()+1==y("m")&&i.getFullYear()==y("y")&&z('.pick-lg .pick-lg-b li.pick-v[data-value="'+i.getDate()+'"]').addClass("pick-lk")}}),z(".pick-lg-b li.pick-v[data-value="+y("d")+"]").addClass("pick-sl")},H=function(){var a=y("m"),i=y("y"),l=i%4==0&&(i%100!=0||i%400==0);n[r.id].key.d.max=[31,l?29:28,31,30,31,30,31,31,30,31,30,31][a-1],y("d")>n[r.id].key.d.max&&(n[r.id].key.d.current=n[r.id].key.d.max,K("d",y("d"))),z(".pick-d li").removeClass("pick-wke").each(function(){var l=new Date(a+"/"+e(this).attr("value")+"/"+i).getDay();e(this).find("span").html(t[n[r.id].lang].weekdays.full[l]),(0==l||6==l)&&e(this).addClass("pick-wke")}),r.element.hasClass("picker-lg")&&(z(".pick-lg-b li").removeClass("pick-wke"),z(".pick-lg-b li.pick-v").each(function(){var t=new Date(a+"/"+e(this).attr("data-value")+"/"+i).getDay();(0==t||6==t)&&e(this).addClass("pick-wke")}))},G=function(){r.element.hasClass("picker-lg")&&Y(),H(),q()},K=function(e,a){var i=D(e);if(i.find("li").removeClass("pick-sl pick-bfr pick-afr"),a==S(e,"last")){var t=i.find('li[value="'+S(e,"first")+'"]');t.clone().insertAfter(i.find("li[value="+a+"]")),t.remove()}if(a==S(e,"first")){var t=i.find('li[value="'+S(e,"last")+'"]');t.clone().insertBefore(i.find("li[value="+a+"]")),t.remove()}i.find("li[value="+a+"]").addClass("pick-sl"),i.find("li.pick-sl").nextAll("li").addClass("pick-afr"),i.find("li.pick-sl").prevAll("li").addClass("pick-bfr")},V=function(e,a){var i=n[r.id].key[e];a>i.max&&("d"==e&&I("m","right"),"m"==e&&I("y","right"),a=i.min),a<i.min&&("d"==e&&I("m","left"),"m"==e&&I("y","left"),a=i.max),n[r.id].key[e].current=a,K(e,a)},I=function(e,a){var i=y(e);"right"==a?i++:i--,V(e,i)},Q=function(){r.element.addClass("picker-rmbl")},W=function(e){return 10>e?"0"+e:e},B=function(e){var a=["th","st","nd","rd"],i=e%100;return e+(a[(i-20)%10]||a[i]||a[0])},q=function(){if(!g()&&l){var e=y("d"),a=y("m"),i=y("y"),o=new Date(a+"/"+e+"/"+i).getDay(),s=n[r.id].format.replace(/\b(d)\b/g,W(e)).replace(/\b(m)\b/g,W(a)).replace(/\b(S)\b/g,B(e)).replace(/\b(Y)\b/g,i).replace(/\b(U)\b/g,A(w())).replace(/\b(D)\b/g,t[n[r.id].lang].weekdays.short[o]).replace(/\b(l)\b/g,t[n[r.id].lang].weekdays.full[o]).replace(/\b(F)\b/g,t[n[r.id].lang].months.full[a-1]).replace(/\b(M)\b/g,t[n[r.id].lang].months.short[a-1]).replace(/\b(n)\b/g,a).replace(/\b(j)\b/g,e);r.input.val(s).change(),l=!1}};if(k())var U={i:"touchstart",m:"touchmove",e:"touchend"};else var U={i:"mousedown",m:"mousemove",e:"mouseup"};var X="div.datedropper.picker-focus";e(document).on("click",function(e){r&&(r.input.is(e.target)||r.element.is(e.target)||0!==r.element.has(e.target).length||(L(),s=null))}).on(a.a,X+".picker-rmbl",function(){r.element.hasClass("picker-rmbl")&&e(this).removeClass("picker-rmbl")}).on(a.t,".picker-modal-overlay",function(){e(this).remove()}).on(U.i,X+" .pick-lg li.pick-v",function(){z(".pick-lg-b li").removeClass("pick-sl"),e(this).addClass("pick-sl"),n[r.id].key.d.current=e(this).attr("data-value"),K("d",e(this).attr("data-value")),l=!0}).on("click",X+" .pick-btn-sz",function(){x()}).on("click",X+" .pick-btn-lng",function(){J()}).on(U.i,X+" .pick-arw.pick-arw-s2",function(a){a.preventDefault(),s=null;var i,t=(e(this).closest("ul").data("k"),n[r.id].jump);i=e(this).hasClass("pick-arw-r")?y("y")+t:y("y")-t;var o=T("y",t);i>o[o.length-1]&&(i=o[0]),i<o[0]&&(i=o[o.length-1]),n[r.id].key.y.current=i,K("y",y("y")),l=!0}).on(U.i,X+" .pick-arw.pick-arw-s1",function(a){a.preventDefault(),s=null;var i=e(this).closest("ul").data("k");e(this).hasClass("pick-arw-r")?I(i,"right"):I(i,"left"),l=!0}).on(U.i,X+" ul.pick.pick-y li",function(){c=!0}).on(U.e,X+" ul.pick.pick-y li",function(){if(c&&m()){e(this).closest("ul").toggleClass("pick-jump");var a=M(y("y"),T("y",n[r.id].jump));n[r.id].key.y.current=a,K("y",y("y")),c=!1}}).on(U.i,X+" ul.pick.pick-d li",function(){c=!0}).on(U.e,X+" ul.pick.pick-d li",function(){c&&(x(),c=!1)}).on(U.i,X+" ul.pick.pick-l li",function(){c=!0}).on(U.e,X+" ul.pick.pick-l li",function(){c&&(J(),O(e(this).val()),c=!1)}).on(U.i,X+" ul.pick",function(a){if(s=e(this)){var i=s.data("k");d=k()?a.originalEvent.touches[0].pageY:a.pageY,u=y(i)}}).on(U.m,function(e){if(c=!1,s){e.preventDefault();var a=s.data("k");o=k()?e.originalEvent.touches[0].pageY:e.pageY,o=d-o,o=Math.round(.026*o),i=u+o;var t=C(a,i);t!=n[r.id].key[a].current&&V(a,t),l=!0}}).on(U.e,function(){s&&(s=null,d=null,u=null),r&&G()}).on(U.i,X+" .pick-submit",function(){L()}),e(window).resize(function(){r&&(F(),p())}),e.fn.dateDropper=function(){return e(this).each(function(){if(e(this).is("input")&&!e(this).hasClass("picker-input")){var a=e(this),i="datedropper-"+Object.keys(n).length;a.attr("data-id",i).addClass("picker-input").prop({type:"text",readonly:!0});var o=a.data("default-date")&&f(a.data("default-date"))?a.data("default-date"):null,s=a.data("disabled-days")?a.data("disabled-days").split(","):null,d=a.data("format")||"m/d/Y",u=a.data("fx")===!1?a.data("fx"):!0,c=a.data("fx")===!1?"":"picker-fxs",k=a.data("fx-mobile")===!1?a.data("fx-mobile"):!0,p=a.data("init-set")===!1?!1:!0,m=a.data("lang")&&a.data("lang")in t?a.data("lang"):"en",g=a.data("large-mode")===!0?!0:!1,y=a.data("large-default")===!0&&g===!0?"picker-lg":"",b="from"==a.data("lock")||"to"==a.data("lock")?a.data("lock"):!1,v=a.data("jump")&&h(a.data("jump"))?a.data("jump"):10,w=a.data("max-year")&&h(a.data("max-year"))?a.data("max-year"):(new Date).getFullYear(),T=a.data("min-year")&&h(a.data("min-year"))?a.data("min-year"):1970,M=a.data("modal")===!0?"picker-modal":"",C=a.data("theme")||"primary",D=a.data("translate-mode")===!0?!0:!1;if(s&&e.each(s,function(e,a){a&&f(a)&&(s[e]=A(a))}),n[i]={disabledays:s,format:d,fx:u,fxmobile:k,lang:m,large:g,lock:b,jump:v,key:{m:{min:1,max:12,current:1,today:(new Date).getMonth()+1},d:{min:1,max:31,current:1,today:(new Date).getDate()},y:{min:T,max:w,current:T,today:(new Date).getFullYear()},l:{min:0,max:Object.keys(t).length-1,current:0,today:0}},translate:D},o){var S=/\d+/g,x=o,J=x.match(S);e.each(J,function(e,a){J[e]=parseInt(a)}),n[i].key.m.today=J[0]&&J[0]<=12?J[0]:n[i].key.m.today,n[i].key.d.today=J[1]&&J[1]<=31?J[1]:n[i].key.d.today,n[i].key.y.today=J[2]?J[2]:n[i].key.y.today,n[i].key.y.today>n[i].key.y.max&&(n[i].key.y.max=n[i].key.y.today),n[i].key.y.today<n[i].key.y.min&&(n[i].key.y.min=n[i].key.y.today)}e("<div>",{"class":"datedropper "+M+" "+C+" "+c+" "+y,id:i,html:e("<div>",{"class":"picker"})}).appendTo("body"),r={id:i,input:a,element:e("#"+i)};for(var F in n[i].key)e("<ul>",{"class":"pick pick-"+F,"data-k":F}).appendTo(z(".picker")),P(F);if(n[i].large){e("<div>",{"class":"pick-lg"}).insertBefore(z(".pick-d")),e('<ul class="pick-lg-h"></ul><ul class="pick-lg-b"></ul>').appendTo(z(".pick-lg"));for(var O=j(),E=0;7>E;E++)e("<li>",{html:t[n[r.id].lang].weekdays.short[O[E]]}).appendTo(z(".pick-lg .pick-lg-h"));for(var E=0;42>E;E++)e("<li>").appendTo(z(".pick-lg .pick-lg-b"))}e("<div>",{"class":"pick-btns"}).appendTo(z(".picker")),e("<div>",{"class":"pick-submit"}).appendTo(z(".pick-btns")),n[r.id].translate&&e("<div>",{"class":"pick-btn pick-btn-lng"}).appendTo(z(".pick-btns")),n[r.id].large&&e("<div>",{"class":"pick-btn pick-btn-sz"}).appendTo(z(".pick-btns")),("Y"==d||"m"==d)&&(z(".pick-d,.pick-btn-sz").hide(),r.element.addClass("picker-tiny"),"Y"==d&&z(".pick-m,.pick-btn-lng").hide(),"m"==d&&z(".pick-y").hide()),p&&(l=!0,q()),r=null}}).focus(function(a){a.preventDefault(),e(this).blur(),r&&L(),r={id:e(this).data("id"),input:e(this),element:e("#"+e(this).data("id"))},p(),F(),G(),N(),r.element.hasClass("picker-modal")&&e("body").append('<div class="picker-modal-overlay"></div>')})}}(jQuery);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

 /**
 * Initialize jQuery Plugins
 **/
jQuery( document ).ready(function() {

	// Handle FOUC
	jQuery('.no-fouc').removeClass('no-fouc');

    if(jQuery("#estimated-time").length != 0) {
        jQuery('article').readingTime();
    }
    
    var floatlabelsInstances = Array();
    jQuery('form').each(function(i) {
	    var thisForm = jQuery(this)[0];
        floatlabelsInstances[i] = new FloatLabels( thisForm, {
			style: 2,
			prioritize: 'placeholder',
		});
    });

    jQuery('ul.slimmenu').slimmenu( {
        resizeWidth: '640',
        collapserTitle: '',
        animSpeed: 'medium',
        easingEffect: null,
        indentChildren: false,
        childrenIndenter: '&nbsp;',
        expandIcon: '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"/></svg>',
        collapseIcon: '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"/></svg>',
    });

    jQuery('.search-button').featherlight({
        namespace: 'fl-modal',
        variant: 'fl-search',
        closeIcon: '&#10005;',
        afterContent: function(event){
            setTimeout(function() {
                jQuery( 'input#s' ).focus();
            }, 500);
        },
    });
    
    jQuery(window).paroller();
	
	var currentTime = new Date();
	jQuery("li.gfield.date input").each(function() {
	   // Date Dropper
	   // Set min year to current year.
	   jQuery(this).data('min-year', '1900');
	   // Set max year to 2030.
	   jQuery(this).data('max-year', '2030');
	   // Turn large mode on.
	   jQuery(this).data('large-mode', true);
	   // Set large mode as default.
	   jQuery(this).data('large-default', true);
	   // Don't set the date initially.
	   jQuery(this).data('init-set', false);
	   jQuery(this).dateDropper();
	});		    
});

/***/ })
/******/ ]);
//# sourceMappingURL=footer_scripts.js.map