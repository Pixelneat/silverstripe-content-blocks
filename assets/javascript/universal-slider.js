"use strict";!function e(t,n,r){function i(l,a){if(!n[l]){if(!t[l]){var o="function"==typeof require&&require;if(!a&&o)return o(l,!0);if(s)return s(l,!0);throw new Error("Cannot find module '"+l+"'")}var u=n[l]={exports:{}};t[l][0].call(u.exports,function(e){var n=t[l][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[l].exports}for(var s="function"==typeof require&&require,l=0;l<r.length;l++)i(r[l]);return i}({1:[function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(){function e(t){r(this,e),this.options={infinite:1,classNameFrame:"slider-block__frame",classNameSlideContainer:"slider-block__slides",enableMouseEvents:!0,classNamePrevCtrl:"prev",classNameNextCtrl:"right",slideSpeed:300},this.element=t,this.slides=this.element.querySelectorAll("*[data-item]"),this.element.hasAttribute("data-options")&&(this.options=Object.assign(this.options,JSON.parse(this.element.getAttribute("data-options")))),this.instance=lory(this.element,this.options),this.bindEvents()}return i(e,[{key:"bindEvents",value:function(){var e=this;[].forEach.call(this.element.querySelectorAll('*[data-item="video"]'),function(t){t.querySelector(".slider-block__overlay--play-button").addEventListener("click",function(){e.currentElement=t,e.currentElement.hasAttribute("data-embed")&&(utils.addClass(e.currentElement,"has-embed"),e.embedLink=e.currentElement.getAttribute("data-embed"),e.play())})}),this.element.addEventListener("after.lory.slide",function(t){e.stop();var n=e.getCurrentSlide(t.detail.currentSlide);n&&n.hasAttribute("data-autoplay")&&1===parseInt(n.getAttribute("data-autoplay"))&&(e.currentElement=n,e.currentElement.hasAttribute("data-embed")&&(utils.addClass(e.currentElement,"has-embed"),e.embedLink=e.currentElement.getAttribute("data-embed"),e.play()))})}},{key:"getCurrentSlide",value:function(e){var t=e-1;return t in this.slides&&this.slides[t]}},{key:"stop",value:function(){this.currentElement&&utils.hasClass(this.currentElement,"has-embed")&&(utils.removeClass(this.currentElement,"has-embed"),this.content=this.currentElement.querySelector(".slider-block__content"),this.content.innerHTML=this.contentBefore,this.embedLink=null,this.content=null,this.currentElement=null)}},{key:"play",value:function(){this.content=this.currentElement.querySelector(".slider-block__content"),this.contentBefore=this.content.innerHTML,this.content.innerHTML='\n    <div class="slider-block__content--embed">\n        <iframe src="'+this.embedLink+'" width="100%" height="100%" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n    </div>\n'}}]),e}();n.default=s},{}],2:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0});n.utils={hasClass:function(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)},addClass:function(e,t){e.classList?e.classList.add(t):(void 0).hasClass(e,t)||(e.className+=""+t)},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("\\b"+t+"\\b","g"),"")},randomId:function(){return(0|9e6*Math.random()).toString(36)},escapeEntity:function(e){return e.replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/`/g,"&#96;")},convertEntity:function(e){var t=document.createElement("span");return e.replace(/&[#A-Za-z0-9]+;/gi,function(e){return t.innerHTML=e,t.innerText})},render:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=e.raw,s="";return n.forEach(function(e,t){var n=i[t];Array.isArray(e)&&(e=e.join("")),n.endsWith("$")&&(subst=(void 0).escapeEntity(e),n=n.slice(0,-1)),s+=n,s+=e}),s+=i[i.length-1]}}},{}],3:[function(e,t,n){(function(t){var n=e("./core/utils"),r=e("./blocks/slider/modules/Slider"),i=function(e){return e&&e.__esModule?e:{default:e}}(r);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll('*[data-module="slider"]');t.utils=n.utils,e.length>0&&(window.sliders=[],[].forEach.call(e,function(e){window.sliders.push(new i.default(e))}))})}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./blocks/slider/modules/Slider":1,"./core/utils":2}]},{},[3]);
//# sourceMappingURL=universal-slider.js.map
