!function(){function t(t,e){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,c=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){c=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(c)throw a}}}}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}function r(t,n,e,i,o,r,a){try{var s=t[r](a),c=s.value}catch(u){return void e(u)}s.done?n(c):Promise.resolve(c).then(i,o)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(i,o){var a=t.apply(n,e);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0/6H":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("A36C"),o=e("iWo5"),r=e("qULd"),a=function(t,n){var e,a,s=function(t,i,o){if("undefined"!=typeof document){var r=document.elementFromPoint(t,i);r&&n(r)?r!==e&&(u(),c(r,o)):u()}},c=function(t,n){e=t,a||(a=e);var o=e;Object(i.f)((function(){return o.classList.add("ion-activated")})),n()},u=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var n=e;Object(i.f)((function(){return n.classList.remove("ion-activated")})),t&&a!==e&&e.click(),e=void 0}};return Object(o.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:function(t){return s(t.currentX,t.currentY,r.a)},onMove:function(t){return s(t.currentX,t.currentY,r.b)},onEnd:function(){u(!0),Object(r.e)(),a=void 0}})}},"74mu":function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return c}));var i=function(t,n){return null!==n.closest(t)},o=function(t,n){return"string"==typeof t&&t.length>0?Object.assign((o=!0,(i="ion-color-"+t)in(e={"ion-color":!0})?Object.defineProperty(e,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[i]=o,e),n):n;var e,i,o},r=function(t){var n={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return n[t]=!0})),n},s=/^[a-z][a-z0-9+\-.]*:/,c=function(){var t=a(regeneratorRuntime.mark((function t(n,e,i,o){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==n||"#"===n[0]||s.test(n)){t.next=4;break}if(!(r=document.querySelector("ion-router"))){t.next=4;break}return t.abrupt("return",(null!=e&&e.preventDefault(),r.push(n,i,o)));case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(n,e,i,o){return t.apply(this,arguments)}}()},A7BC:function(t,n,i){"use strict";i.d(n,"a",(function(){return u}));var r=i("fXoL"),a=i("TEn/"),s=i("ofXK"),c=["myTabs"],u=function(){var t=function(){function t(n){e(this,t),this.render=n,this.currentTab="main"}return o(t,[{key:"ngOnInit",value:function(){}},{key:"ngAfterViewInit",value:function(){this.currentTab=this.tabs.outlet.tabsPrefix.replace("/",""),console.log(this.currentTab),this.tabs.outlet.tabsPrefix="/"}},{key:"getTab",value:function(){console.log("hi");var t=this.tabs.getSelected();console.log(t)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Hb(r.D))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-footer"]],viewQuery:function(t,n){var e;1&t&&r.nc(c,!0),2&t&&r.bc(e=r.Tb())&&(n.tabs=e.first)},decls:19,vars:4,consts:[[3,"ionTabsWillChange"],["myTabs",""],["slot","bottom"],["tab","main",3,"ngClass"],["name","home"],["tab","home",3,"ngClass"],["name","trophy"],["tab","leads",3,"ngClass"],["name","receipt-outline"],["tab","user-profile",3,"ngClass"],["name","person-circle-outline"]],template:function(t,n){1&t&&(r.Kb(0,"ion-tabs",0,1),r.Sb("ionTabsWillChange",(function(){return n.getTab()})),r.Kb(2,"ion-tab-bar",2),r.Kb(3,"ion-tab-button",3),r.Ib(4,"ion-icon",4),r.Kb(5,"ion-label"),r.jc(6,"Home"),r.Jb(),r.Jb(),r.Kb(7,"ion-tab-button",5),r.Ib(8,"ion-icon",6),r.Kb(9,"ion-label"),r.jc(10,"Opportunity"),r.Jb(),r.Jb(),r.Kb(11,"ion-tab-button",7),r.Ib(12,"ion-icon",8),r.Kb(13,"ion-label"),r.jc(14,"Lead"),r.Jb(),r.Jb(),r.Kb(15,"ion-tab-button",9),r.Ib(16,"ion-icon",10),r.Kb(17,"ion-label"),r.jc(18,"Profile"),r.Jb(),r.Jb(),r.Jb(),r.Jb()),2&t&&(r.xb(3),r.Zb("ngClass","main"==n.currentTab?"active":""),r.xb(4),r.Zb("ngClass","home"==n.currentTab?"active":""),r.xb(4),r.Zb("ngClass","leads"==n.currentTab?"active":""),r.xb(4),r.Zb("ngClass","user-profile"==n.currentTab?"active":""))},directives:[a.J,a.H,a.I,s.i,a.q,a.u],styles:[".active[_ngcontent-%COMP%]{color:#33bee5!important}"]}),t}()},ZaV5:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}));var i=function(){var t=a(regeneratorRuntime.mark((function t(n,e,i,o,r){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=2;break}return t.abrupt("return",n.attachViewToDom(e,i,r,o));case 2:if("string"==typeof i||i instanceof HTMLElement){t.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof i?e.ownerDocument&&e.ownerDocument.createElement(i):i,o&&o.forEach((function(t){return a.classList.add(t)})),r&&Object.assign(a,r),e.appendChild(a),t.t0=a.componentOnReady,!t.t0){t.next=12;break}return t.next=12,a.componentOnReady();case 12:return t.abrupt("return",a);case 13:case"end":return t.stop()}}),t)})));return function(n,e,i,o,r){return t.apply(this,arguments)}}(),o=function(t,n){if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},h3R7:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var i={bubbles:{dur:1e3,circles:9,fn:function(t,n,e){var i=t*n/e-t+"ms",o=2*Math.PI*n/e;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:function(t,n,e){var i=n/e,o=t*i-t+"ms",r=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,n){return{r:6,style:{left:9-9*n+"px","animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(t,n,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,n,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":t*n/e-t+"ms"}}}}}},kOL3:function(n,i,r){"use strict";var a=function(){function t(n,i,o){e(this,t),this.x=n,this.y=i,this.time=o||Date.now()}return o(t,[{key:"distanceTo",value:function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time}},{key:"velocityFrom",value:function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):0}}]),t}(),s=function(){function t(n,i,o,r,a,s){e(this,t),this.startPoint=n,this.control2=i,this.control1=o,this.endPoint=r,this.startWidth=a,this.endWidth=s}return o(t,[{key:"length",value:function(){for(var t,n,e=0,i=0;i<=10;i+=1){var o=i/10,r=this.point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this.point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var s=r-t,c=a-n;e+=Math.sqrt(s*s+c*c)}t=r,n=a}return e}},{key:"point",value:function(t,n,e,i,o){return n*(1-t)*(1-t)*(1-t)+3*e*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t}}],[{key:"fromPoints",value:function(n,e){var i=this.calculateControlPoints(n[0],n[1],n[2]).c2,o=this.calculateControlPoints(n[1],n[2],n[3]).c1;return new t(n[1],i,o,n[2],e.start,e.end)}},{key:"calculateControlPoints",value:function(t,n,e){var i=t.x-n.x,o=t.y-n.y,r=n.x-e.x,s=n.y-e.y,c=(t.x+n.x)/2,u=(t.y+n.y)/2,l=(n.x+e.x)/2,h=(n.y+e.y)/2,d=Math.sqrt(i*i+o*o),f=Math.sqrt(r*r+s*s),v=f/(d+f),m=n.x-(l+(c-l)*v),p=n.y-(h+(u-h)*v);return{c1:new a(c+m,u+p),c2:new a(l+m,h+p)}}}]),t}(),c=function(){function n(t){var i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e(this,n),this.canvas=t,this.options=o,this._handleMouseDown=function(t){1===t.which&&(i._mouseButtonDown=!0,i._strokeBegin(t))},this._handleMouseMove=function(t){i._mouseButtonDown&&i._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&i._mouseButtonDown&&(i._mouseButtonDown=!1,i._strokeEnd(t))},this._handleTouchStart=function(t){t.preventDefault(),1===t.targetTouches.length&&i._strokeBegin(t.changedTouches[0])},this._handleTouchMove=function(t){t.preventDefault(),i._strokeMoveUpdate(t.targetTouches[0])},this._handleTouchEnd=function(t){t.target===i.canvas&&(t.preventDefault(),i._strokeEnd(t.changedTouches[0]))},this.velocityFilterWeight=o.velocityFilterWeight||.7,this.minWidth=o.minWidth||.5,this.maxWidth=o.maxWidth||2.5,this.throttle="throttle"in o?o.throttle:16,this.minDistance="minDistance"in o?o.minDistance:5,this.dotSize=o.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=o.penColor||"black",this.backgroundColor=o.backgroundColor||"rgba(0,0,0,0)",this.onBegin=o.onBegin,this.onEnd=o.onEnd,this._strokeMoveUpdate=this.throttle?function(t){var n,e,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250,r=0,a=null,s=function(){r=Date.now(),a=null,n=t.apply(e,i),a||(e=null,i=[])};return function(){for(var c=Date.now(),u=o-(c-r),l=arguments.length,h=new Array(l),d=0;d<l;d++)h[d]=arguments[d];return e=this,i=h,u<=0||u>o?(a&&(clearTimeout(a),a=null),r=c,n=t.apply(e,i),a||(e=null,i=[])):a||(a=window.setTimeout(s,u)),n}}(n.prototype._strokeUpdate,this.throttle):n.prototype._strokeUpdate,this._ctx=t.getContext("2d"),this.clear(),this.on()}return o(n,[{key:"clear",value:function(){var t=this._ctx,n=this.canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(),this._isEmpty=!0}},{key:"fromDataURL",value:function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0,o=new Image,r=e.ratio||window.devicePixelRatio||1,a=e.width||this.canvas.width/r,s=e.height||this.canvas.height/r;this._reset(),o.onload=function(){n._ctx.drawImage(o,0,0,a,s),i&&i()},o.onerror=function(t){i&&i(t)},o.src=t,this._isEmpty=!1}},{key:"toDataURL",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"image/png",n=arguments.length>1?arguments[1]:void 0;switch(t){case"image/svg+xml":return this._toSVG();default:return this.canvas.toDataURL(t,n)}}},{key:"on",value:function(){this.canvas.style.touchAction="none",this.canvas.style.msTouchAction="none",window.PointerEvent?this._handlePointerEvents():(this._handleMouseEvents(),"ontouchstart"in window&&this._handleTouchEvents())}},{key:"off",value:function(){this.canvas.style.touchAction="auto",this.canvas.style.msTouchAction="auto",this.canvas.removeEventListener("pointerdown",this._handleMouseDown),this.canvas.removeEventListener("pointermove",this._handleMouseMove),document.removeEventListener("pointerup",this._handleMouseUp),this.canvas.removeEventListener("mousedown",this._handleMouseDown),this.canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this.canvas.removeEventListener("touchstart",this._handleTouchStart),this.canvas.removeEventListener("touchmove",this._handleTouchMove),this.canvas.removeEventListener("touchend",this._handleTouchEnd)}},{key:"isEmpty",value:function(){return this._isEmpty}},{key:"fromData",value:function(t){var n=this;this.clear(),this._fromData(t,(function(t){var e=t.color,i=t.curve;return n._drawCurve({color:e,curve:i})}),(function(t){var e=t.color,i=t.point;return n._drawDot({color:e,point:i})})),this._data=t}},{key:"toData",value:function(){return this._data}},{key:"_strokeBegin",value:function(t){var n={color:this.penColor,points:[]};"function"==typeof this.onBegin&&this.onBegin(t),this._data.push(n),this._reset(),this._strokeUpdate(t)}},{key:"_strokeUpdate",value:function(t){if(0!==this._data.length){var n=this._createPoint(t.clientX,t.clientY),e=this._data[this._data.length-1],i=e.points,o=i.length>0&&i[i.length-1],r=!!o&&n.distanceTo(o)<=this.minDistance,a=e.color;if(!o||!o||!r){var s=this._addPoint(n);o?s&&this._drawCurve({color:a,curve:s}):this._drawDot({color:a,point:n}),i.push({time:n.time,x:n.x,y:n.y})}}else this._strokeBegin(t)}},{key:"_strokeEnd",value:function(t){this._strokeUpdate(t),"function"==typeof this.onEnd&&this.onEnd(t)}},{key:"_handlePointerEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("pointerdown",this._handleMouseDown),this.canvas.addEventListener("pointermove",this._handleMouseMove),document.addEventListener("pointerup",this._handleMouseUp)}},{key:"_handleMouseEvents",value:function(){this._mouseButtonDown=!1,this.canvas.addEventListener("mousedown",this._handleMouseDown),this.canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)}},{key:"_handleTouchEvents",value:function(){this.canvas.addEventListener("touchstart",this._handleTouchStart),this.canvas.addEventListener("touchmove",this._handleTouchMove),this.canvas.addEventListener("touchend",this._handleTouchEnd)}},{key:"_reset",value:function(){this._lastPoints=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor}},{key:"_createPoint",value:function(t,n){var e=this.canvas.getBoundingClientRect();return new a(t-e.left,n-e.top,(new Date).getTime())}},{key:"_addPoint",value:function(t){var n=this._lastPoints;if(n.push(t),n.length>2){3===n.length&&n.unshift(n[0]);var e=this._calculateCurveWidths(n[1],n[2]),i=s.fromPoints(n,e);return n.shift(),i}return null}},{key:"_calculateCurveWidths",value:function(t,n){var e=this.velocityFilterWeight*n.velocityFrom(t)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(e),o={end:i,start:this._lastWidth};return this._lastVelocity=e,this._lastWidth=i,o}},{key:"_strokeWidth",value:function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)}},{key:"_drawCurveSegment",value:function(t,n,e){var i=this._ctx;i.moveTo(t,n),i.arc(t,n,e,0,2*Math.PI,!1),this._isEmpty=!1}},{key:"_drawCurve",value:function(t){var n=t.color,e=t.curve,i=this._ctx,o=e.endWidth-e.startWidth,r=2*Math.floor(e.length());i.beginPath(),i.fillStyle=n;for(var a=0;a<r;a+=1){var s=a/r,c=s*s,u=c*s,l=1-s,h=l*l,d=h*l,f=d*e.startPoint.x;f+=3*h*s*e.control1.x,f+=3*l*c*e.control2.x,f+=u*e.endPoint.x;var v=d*e.startPoint.y;v+=3*h*s*e.control1.y,v+=3*l*c*e.control2.y,v+=u*e.endPoint.y;var m=Math.min(e.startWidth+u*o,this.maxWidth);this._drawCurveSegment(f,v,m)}i.closePath(),i.fill()}},{key:"_drawDot",value:function(t){var n=t.color,e=t.point,i=this._ctx,o="function"==typeof this.dotSize?this.dotSize():this.dotSize;i.beginPath(),this._drawCurveSegment(e.x,e.y,o),i.closePath(),i.fillStyle=n,i.fill()}},{key:"_fromData",value:function(n,e,i){var o,r=t(n);try{for(r.s();!(o=r.n()).done;){var s=o.value,c=s.color,u=s.points;if(u.length>1)for(var l=0;l<u.length;l+=1){var h=u[l],d=new a(h.x,h.y,h.time);this.penColor=c,0===l&&this._reset();var f=this._addPoint(d);f&&e({color:c,curve:f})}else this._reset(),i({color:c,point:u[0]})}}catch(v){r.e(v)}finally{r.f()}}},{key:"_toSVG",value:function(){var t=this,n=this._data,e=Math.max(window.devicePixelRatio||1,1),i=this.canvas.width/e,o=this.canvas.height/e,r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("width",this.canvas.width.toString()),r.setAttribute("height",this.canvas.height.toString()),this._fromData(n,(function(t){var n=t.color,e=t.curve,i=document.createElement("path");if(!(isNaN(e.control1.x)||isNaN(e.control1.y)||isNaN(e.control2.x)||isNaN(e.control2.y))){var o="M ".concat(e.startPoint.x.toFixed(3),",").concat(e.startPoint.y.toFixed(3)," C ").concat(e.control1.x.toFixed(3),",").concat(e.control1.y.toFixed(3)," ").concat(e.control2.x.toFixed(3),",").concat(e.control2.y.toFixed(3)," ").concat(e.endPoint.x.toFixed(3),",").concat(e.endPoint.y.toFixed(3));i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*e.endWidth).toFixed(3)),i.setAttribute("stroke",n),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),r.appendChild(i)}}),(function(n){var e=n.color,i=n.point,o=document.createElement("circle"),a="function"==typeof t.dotSize?t.dotSize():t.dotSize;o.setAttribute("r",a.toString()),o.setAttribute("cx",i.x.toString()),o.setAttribute("cy",i.y.toString()),o.setAttribute("fill",e),r.appendChild(o)}));var a='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '.concat(i," ").concat(o,'" width="').concat(i,'" height="').concat(o,'">'),s=r.innerHTML;if(void 0===s){var c=document.createElement("dummy"),u=r.childNodes;c.innerHTML="";for(var l=0;l<u.length;l+=1)c.appendChild(u[l].cloneNode(!0));s=c.innerHTML}return"data:image/svg+xml;base64,"+btoa(a+s+"</svg>")}}]),n}();i.a=c},qULd:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return c})),e.d(n,"e",(function(){return s}));var i={getEngine:function(){var t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.impact({style:e})}},notification:function(t){var n=this.getEngine();if(n){var e=this.isCapacitor()?t.style.toUpperCase():t.style;n.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd:function(){var t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},o=function(){i.selection()},r=function(){i.selectionStart()},a=function(){i.selectionChanged()},s=function(){i.selectionEnd()},c=function(t){i.impact(t)}}}])}();