!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=4)}({4:function(e,t,n){e.exports=n(5)},5:function(e,t){!function(i,o){"use strict";try{var a=function(e){console.warn("[Plausible] Ignoring event because "+e)},u=function(){var e=i.location.search.match(/[?&](ref|source|utm_source)=([^?&]+)/);return e?e[2]:null},c=function(){var e=JSON.parse(function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):null}("plausible_user"));return e?{initial_referrer:e.initial_referrer&&decodeURIComponent(e.initial_referrer),initial_source:e.initial_source&&decodeURIComponent(e.initial_source)}:(e={initial_referrer:i.document.referrer||null,initial_source:u()},function(e,t){var n=new Date;n.setTime(n.getTime()+94608e6);var r="; expires="+n.toUTCString();document.cookie=e+"="+(t||"")+r+"; samesite=strict; path=/"}("plausible_user",JSON.stringify({initial_referrer:e.initial_referrer&&encodeURIComponent(e.initial_referrer),initial_source:e.initial_source&&encodeURIComponent(e.initial_source)})),e)},e=function(e,t){if(/localhost$/.test(i.location.hostname))return a("website is running locally");if("file:"===i.location.protocol)return a("website is running locally");if("prerender"===i.document.visibilityState)return a("document is prerendering");var n=s.trackAcquisition?c():{};n.name=e,n.url=i.location.protocol+"//"+i.location.hostname+i.location.pathname+i.location.search,n.domain=s.domain,n.referrer=i.document.referrer||null,n.source=u(),n.user_agent=i.navigator.userAgent,n.screen_width=i.innerWidth;var r=new XMLHttpRequest;r.open("POST",o+"/api/event",!0),r.setRequestHeader("Content-Type","text/plain"),r.send(JSON.stringify(n)),r.onreadystatechange=function(){r.readyState==XMLHttpRequest.DONE&&t&&t.callback&&t.callback()}},t=function(){e("pageview")},n=i.document.querySelector('[src*="'+o+'"]'),r=n&&n.getAttribute("data-domain"),l=n&&n.getAttribute("data-track-acquisition"),s={domain:r||i.location.hostname,trackAcquisition:"string"==typeof l},p=i.history;if(p.pushState){var f=p.pushState;p.pushState=function(){f.apply(this,arguments),t()},i.addEventListener("popstate",t)}var d=i.plausible&&i.plausible.q||[];i.plausible=e;for(var m=0;m<d.length;m++)e.apply(this,d[m]);t()}catch(e){(new Image).src=o+"/api/error?message="+encodeURIComponent(e.message)}}(window,"https://analytics.qualitativly.com")}});