!function t(e,i,n){function s(u,a){if(!i[u]){if(!e[u]){var o="function"==typeof require&&require;if(!a&&o)return o(u,!0);if(r)return r(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[u]={exports:{}};e[u][0].call(c.exports,function(t){var i=e[u][1][t];return s(i?i:t)},c,c.exports,t,e,i,n)}return i[u].exports}for(var r="function"==typeof require&&require,u=0;u<n.length;u++)s(n[u]);return s}({1:[function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var s=t("./moth.js"),r=n(s),u=new r.default;u.init()},{"./moth.js":2}],2:[function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(){function t(){n(this,t),this.stalk=null,this.audio=null,this.stage=null}return s(t,[{key:"init",value:function(){this.stage=document.querySelector(".stage"),this.stage.style.display="block",this.stalk=document.querySelector(".stage--center-stalk"),this.audio=document.querySelector(".flute-audio"),this.play(),this.events()}},{key:"events",value:function(){this.stalk.addEventListener("click",this.play.bind(this),!1),this.audio.addEventListener("ended",this.musicCompleted.bind(this),!1),this.stalk.addEventListener("animationend",this.stalkCompleted.bind(this),!1)}},{key:"stalkCompleted",value:function(){this.stalk.classList.add("pulse")}},{key:"musicCompleted",value:function(t){this.audio.currentTime=0,this.stage.classList.remove("start"),this.stalk.classList.remove("pulse")}},{key:"play",value:function(){this.stage.classList.add("start"),this.audio.volume=.1,this.audio.play()}}]),t}();i.default=r},{}]},{},[1]);