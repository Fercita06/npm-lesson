(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);"]),a.push([t.id,'button{background-color:#bb86fc;color:#000;border:none;display:block;margin:1rem 0;padding:.5rem 1.25rem;font-size:1rem;border-radius:5px;cursor:pointer}button:hover{transform:scale(1.025);background-color:#c292fc}button:active{background-color:#c99ffd}input{color:#000}*{font-family:"Lato",sans-serif;color:#fff}body{background-color:#121212}',""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var h=n(f),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(d);else{var p=o(d,r);r.byIndex=s,e.splice(s,0,{identifier:f,updater:p,references:1})}a.push(f)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),a=n(569),s=n.n(a),c=n(565),u=n.n(c),l=n(216),f=n.n(l),h=n(589),d=n.n(h),p=n(192),v={};v.styleTagTransform=d(),v.setAttributes=u(),v.insert=s().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=f(),e()(p.Z,v),p.Z&&p.Z.locals&&p.Z.locals;var g={};!function t(e,n,r,o){var i=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL);function a(){}function s(t){var r=n.exports.Promise,o=void 0!==r?r:e.Promise;return"function"==typeof o?new o(t):(t(a,a),null)}var c,u,l,f,h,d,p,v,g,m=(l=Math.floor(1e3/60),f={},h=0,"function"==typeof requestAnimationFrame&&"function"==typeof cancelAnimationFrame?(c=function(t){var e=Math.random();return f[e]=requestAnimationFrame((function n(r){h===r||h+l-1<r?(h=r,delete f[e],t()):f[e]=requestAnimationFrame(n)})),e},u=function(t){f[t]&&cancelAnimationFrame(f[t])}):(c=function(t){return setTimeout(t,l)},u=function(t){return clearTimeout(t)}),{frame:c,cancel:u}),b=(v={},function(){if(d)return d;if(!r&&i){var e=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{d=new Worker(URL.createObjectURL(new Blob([e])))}catch(t){return void 0!==typeof console&&"function"==typeof console.warn&&console.warn("🎊 Could not load worker",t),null}!function(t){function e(e,n){t.postMessage({options:e||{},callback:n})}t.init=function(e){var n=e.transferControlToOffscreen();t.postMessage({canvas:n},[n])},t.fire=function(n,r,o){if(p)return e(n,null),p;var i=Math.random().toString(36).slice(2);return p=s((function(r){function a(e){e.data.callback===i&&(delete v[i],t.removeEventListener("message",a),p=null,o(),r())}t.addEventListener("message",a),e(n,i),v[i]=a.bind(null,{data:{callback:i}})}))},t.reset=function(){for(var e in t.postMessage({reset:!0}),v)v[e](),delete v[e]}}(d)}return d}),y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(t,e,n){return function(t,e){return e?e(t):t}(t&&null!=t[e]?t[e]:y[e],n)}function M(t){return t<0?0:Math.floor(t)}function x(t){return parseInt(t,16)}function C(t){return t.map(E)}function E(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:x(e.substring(0,2)),g:x(e.substring(2,4)),b:x(e.substring(4,6))}}function k(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function I(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function S(t,n){var a,c=!t,u=!!w(n||{},"resize"),l=w(n,"disableForReducedMotion",Boolean),f=i&&w(n||{},"useWorker")?b():null,h=c?k:I,d=!(!t||!f||!t.__confetti_initialized),p="function"==typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function v(e,n,i){for(var c,u,l,f,d=w(e,"particleCount",M),p=w(e,"angle",Number),v=w(e,"spread",Number),g=w(e,"startVelocity",Number),b=w(e,"decay",Number),y=w(e,"gravity",Number),x=w(e,"drift",Number),E=w(e,"colors",C),k=w(e,"ticks",Number),I=w(e,"shapes"),S=w(e,"scalar"),T=function(t){var e=w(t,"origin",Object);return e.x=w(e,"x",Number),e.y=w(e,"y",Number),e}(e),z=d,L=[],P=t.width*T.x,N=t.height*T.y;z--;)L.push((void 0,void 0,u=(c={x:P,y:N,angle:p,spread:v,startVelocity:g,color:E[z%E.length],shape:I[(0,f=I.length,Math.floor(Math.random()*(f-0))+0)],ticks:k,decay:b,gravity:y,drift:x,scalar:S}).angle*(Math.PI/180),l=c.spread*(Math.PI/180),{x:c.x,y:c.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*c.startVelocity+Math.random()*c.startVelocity,angle2D:-u+(.5*l-Math.random()*l),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:c.color,shape:c.shape,tick:0,totalTicks:c.ticks,decay:c.decay,drift:c.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*c.gravity,ovalScalar:.6,scalar:c.scalar}));return a?a.addFettis(L):(a=function(t,e,n,i,a){var c,u,l=e.slice(),f=t.getContext("2d"),h=s((function(e){function s(){c=u=null,f.clearRect(0,0,i.width,i.height),a(),e()}c=m.frame((function e(){!r||i.width===o.width&&i.height===o.height||(i.width=t.width=o.width,i.height=t.height=o.height),i.width||i.height||(n(t),i.width=t.width,i.height=t.height),f.clearRect(0,0,i.width,i.height),l=l.filter((function(t){return function(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var n=e.tick++/e.totalTicks,r=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,a=e.wobbleY+e.random*e.tiltSin;return t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-n)+")",t.beginPath(),"circle"===e.shape?t.ellipse?t.ellipse(e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(a-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):function(t,e,n,r,o,i,a,s,c){t.save(),t.translate(e,n),t.rotate(i),t.scale(r,o),t.arc(0,0,1,0,s,void 0),t.restore()}(t,e.x,e.y,Math.abs(i-r)*e.ovalScalar,Math.abs(a-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(o)),t.lineTo(Math.floor(i),Math.floor(a)),t.lineTo(Math.floor(r),Math.floor(e.wobbleY))),t.closePath(),t.fill(),e.tick<e.totalTicks}(f,t)})),l.length?c=m.frame(e):s()})),u=s}));return{addFettis:function(t){return l=l.concat(t),h},canvas:t,promise:h,reset:function(){c&&m.cancel(c),u&&u()}}}(t,L,h,n,i)).promise}function g(n){var r=l||w(n,"disableForReducedMotion",Boolean),o=w(n,"zIndex",Number);if(r&&p)return s((function(t){t()}));c&&a?t=a.canvas:c&&!t&&(t=function(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}(o),document.body.appendChild(t)),u&&!d&&h(t);var i={width:t.width,height:t.height};function g(){if(f){var e={getBoundingClientRect:function(){if(!c)return t.getBoundingClientRect()}};return h(e),void f.postMessage({resize:{width:e.width,height:e.height}})}i.width=i.height=null}function m(){a=null,u&&e.removeEventListener("resize",g),c&&t&&(document.body.removeChild(t),t=null,d=!1)}return f&&!d&&f.init(t),d=!0,f&&(t.__confetti_initialized=!0),u&&e.addEventListener("resize",g,!1),f?f.fire(n,i,m):v(n,i,m)}return g.reset=function(){f&&f.reset(),a&&a.reset()},g}function T(){return g||(g=S(null,{useWorker:!0,resize:!0})),g}n.exports=function(){return T().apply(this,arguments)},n.exports.reset=function(){T().reset()},n.exports.create=S}(function(){return"undefined"!=typeof window?window:"undefined"!=typeof self?self:this||{}}(),g,!1);const m=g.exports;if(g.exports.create,!b)var b={map:function(t,e){var n={};return e?t.map((function(t,r){return n.index=r,e.call(n,t)})):t.slice()},naturalOrder:function(t,e){return t<e?-1:t>e?1:0},sum:function(t,e){var n={};return t.reduce(e?function(t,r,o){return n.index=o,t+e.call(n,r)}:function(t,e){return t+e},0)},max:function(t,e){return Math.max.apply(null,e?b.map(t,e):t)}};var y=function(){function t(t,e,n){return(t<<10)+(e<<5)+n}function e(t){var e=[],n=!1;function r(){e.sort(t),n=!0}return{push:function(t){e.push(t),n=!1},peek:function(t){return n||r(),void 0===t&&(t=e.length-1),e[t]},pop:function(){return n||r(),e.pop()},size:function(){return e.length},map:function(t){return e.map(t)},debug:function(){return n||r(),e}}}function n(t,e,n,r,o,i,a){this.r1=t,this.r2=e,this.g1=n,this.g2=r,this.b1=o,this.b2=i,this.histo=a}function r(){this.vboxes=new e((function(t,e){return b.naturalOrder(t.vbox.count()*t.vbox.volume(),e.vbox.count()*e.vbox.volume())}))}function o(e,n){if(n.count()){var r=n.r2-n.r1+1,o=n.g2-n.g1+1,i=b.max([r,o,n.b2-n.b1+1]);if(1==n.count())return[n.copy()];var a,s,c,u,l=0,f=[],h=[];if(i==r)for(a=n.r1;a<=n.r2;a++){for(u=0,s=n.g1;s<=n.g2;s++)for(c=n.b1;c<=n.b2;c++)u+=e[t(a,s,c)]||0;f[a]=l+=u}else if(i==o)for(a=n.g1;a<=n.g2;a++){for(u=0,s=n.r1;s<=n.r2;s++)for(c=n.b1;c<=n.b2;c++)u+=e[t(s,a,c)]||0;f[a]=l+=u}else for(a=n.b1;a<=n.b2;a++){for(u=0,s=n.r1;s<=n.r2;s++)for(c=n.g1;c<=n.g2;c++)u+=e[t(s,c,a)]||0;f[a]=l+=u}return f.forEach((function(t,e){h[e]=l-t})),function(t){var e,r,o,i,s,c=t+"1",u=t+"2",d=0;for(a=n[c];a<=n[u];a++)if(f[a]>l/2){for(o=n.copy(),i=n.copy(),s=(e=a-n[c])<=(r=n[u]-a)?Math.min(n[u]-1,~~(a+r/2)):Math.max(n[c],~~(a-1-e/2));!f[s];)s++;for(d=h[s];!d&&f[s-1];)d=h[--s];return o[u]=s,i[c]=o[u]+1,[o,i]}}(i==r?"r":i==o?"g":"b")}}return n.prototype={volume:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume},count:function(e){var n=this.histo;if(!this._count_set||e){var r,o,i,a=0;for(r=this.r1;r<=this.r2;r++)for(o=this.g1;o<=this.g2;o++)for(i=this.b1;i<=this.b2;i++)a+=n[t(r,o,i)]||0;this._count=a,this._count_set=!0}return this._count},copy:function(){return new n(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)},avg:function(e){var n=this.histo;if(!this._avg||e){var r,o,i,a,s=0,c=0,u=0,l=0;for(o=this.r1;o<=this.r2;o++)for(i=this.g1;i<=this.g2;i++)for(a=this.b1;a<=this.b2;a++)s+=r=n[t(o,i,a)]||0,c+=r*(o+.5)*8,u+=r*(i+.5)*8,l+=r*(a+.5)*8;this._avg=s?[~~(c/s),~~(u/s),~~(l/s)]:[~~(8*(this.r1+this.r2+1)/2),~~(8*(this.g1+this.g2+1)/2),~~(8*(this.b1+this.b2+1)/2)]}return this._avg},contains:function(t){var e=t[0]>>3;return gval=t[1]>>3,bval=t[2]>>3,e>=this.r1&&e<=this.r2&&gval>=this.g1&&gval<=this.g2&&bval>=this.b1&&bval<=this.b2}},r.prototype={push:function(t){this.vboxes.push({vbox:t,color:t.avg()})},palette:function(){return this.vboxes.map((function(t){return t.color}))},size:function(){return this.vboxes.size()},map:function(t){for(var e=this.vboxes,n=0;n<e.size();n++)if(e.peek(n).vbox.contains(t))return e.peek(n).color;return this.nearest(t)},nearest:function(t){for(var e,n,r,o=this.vboxes,i=0;i<o.size();i++)((n=Math.sqrt(Math.pow(t[0]-o.peek(i).color[0],2)+Math.pow(t[1]-o.peek(i).color[1],2)+Math.pow(t[2]-o.peek(i).color[2],2)))<e||void 0===e)&&(e=n,r=o.peek(i).color);return r},forcebw:function(){var t=this.vboxes;t.sort((function(t,e){return b.naturalOrder(b.sum(t.color),b.sum(e.color))}));var e=t[0].color;e[0]<5&&e[1]<5&&e[2]<5&&(t[0].color=[0,0,0]);var n=t.length-1,r=t[n].color;r[0]>251&&r[1]>251&&r[2]>251&&(t[n].color=[255,255,255])}},{quantize:function(i,a){if(!i.length||a<2||a>256)return!1;var s=function(e){var n,r=new Array(32768);return e.forEach((function(e){n=t(e[0]>>3,e[1]>>3,e[2]>>3),r[n]=(r[n]||0)+1})),r}(i);s.forEach((function(){}));var c=function(t,e){var r,o,i,a=1e6,s=0,c=1e6,u=0,l=1e6,f=0;return t.forEach((function(t){(r=t[0]>>3)<a?a=r:r>s&&(s=r),(o=t[1]>>3)<c?c=o:o>u&&(u=o),(i=t[2]>>3)<l?l=i:i>f&&(f=i)})),new n(a,s,c,u,l,f,e)}(i,s),u=new e((function(t,e){return b.naturalOrder(t.count(),e.count())}));function l(t,e){for(var n,r=t.size(),i=0;i<1e3;){if(r>=e)return;if(i++>1e3)return;if((n=t.pop()).count()){var a=o(s,n),c=a[0],u=a[1];if(!c)return;t.push(c),u&&(t.push(u),r++)}else t.push(n),i++}}u.push(c),l(u,.75*a);for(var f=new e((function(t,e){return b.naturalOrder(t.count()*t.volume(),e.count()*e.volume())}));u.size();)f.push(u.pop());l(f,a);for(var h=new r;f.size();)h.push(f.pop());return h}}}().quantize,w=function(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)};w.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var M=function(){};M.prototype.getColor=function(t,e){return void 0===e&&(e=10),this.getPalette(t,5,e)[0]},M.prototype.getPalette=function(t,e,n){var r=function(t){var e=t.colorCount,n=t.quality;if(void 0!==e&&Number.isInteger(e)){if(1===e)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");e=Math.max(e,2),e=Math.min(e,20)}else e=10;return(void 0===n||!Number.isInteger(n)||n<1)&&(n=10),{colorCount:e,quality:n}}({colorCount:e,quality:n}),o=new w(t),i=function(t,e,n){for(var r=t,o=[],i=0,a=void 0,s=void 0,c=void 0,u=void 0,l=void 0;i<e;i+=n)s=r[0+(a=4*i)],c=r[a+1],u=r[a+2],(void 0===(l=r[a+3])||l>=125)&&(s>250&&c>250&&u>250||o.push([s,c,u]));return o}(o.getImageData().data,o.width*o.height,r.quality),a=y(i,r.colorCount);return a?a.palette():null},M.prototype.getColorFromUrl=function(t,e,n){var r=this,o=document.createElement("img");o.addEventListener("load",(function(){var i=r.getPalette(o,5,n);e(i[0],t)})),o.src=t},M.prototype.getImageData=function(t,e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="arraybuffer",n.onload=function(){if(200==this.status){var t=new Uint8Array(this.response);i=t.length;for(var n=new Array(i),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);var o=n.join(""),a=window.btoa(o);e("data:image/png;base64,"+a)}},n.send()},M.prototype.getColorAsync=function(t,e,n){var r=this;this.getImageData(t,(function(t){var o=document.createElement("img");o.addEventListener("load",(function(){var t=r.getPalette(o,5,n);e(t[0],this)})),o.src=t}))};const x=new M,C=document.querySelector("#confetti-button"),E=document.querySelector("#dog-image"),k=document.querySelector("#image-url-input"),I=(t,e)=>Math.random()*(e-t)+t,S=t=>{const e={particleCount:I(50,100),angle:I(55,125),spread:I(50,70),origin:{y:.6},colors:t};m(e)};C.addEventListener("click",(()=>{S()})),E.addEventListener("load",(()=>{const t=x.getColor(E),e=x.getPalette(E);document.querySelector("body").style.backgroundColor=`rgb(${t[0]},${t[1]},${t[2]})`,S(e)})),k.addEventListener("input",(t=>{E.src=t.target.value}))})()})();