(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(t,n,e){"use strict";(function(t){e(168),e(246),e(45),e(52),e(247),e(253),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(268),e(269),e(270),e(271),e(272),e(273),e(274),e(275),e(276),e(277),e(278);var i,a=e(136),r=e.n(a),c=e(279),o=e.n(c),s=e(286),u=new(e.n(s).a)(function(t){return i=t}),d=fetch("//static.lufei.so/1.m4a?tf",{mode:"cors"}).then(function(t){return t.arrayBuffer()});function f(n){var e=new(window.webkitAudioContext||window.AudioContext),i=e.createAnalyser(),a=e.createBufferSource();i.fftSize=256;var c=i.frequencyBinCount,s=new Uint8Array(c),u=new t.Graphics,f=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return t={r:t>>16,g:t>>8&255,b:255&t},n={r:n>>16,g:n>>8&255,b:255&n},r()({length:e},function(i,a){var r=a/e;return(t.r+(n.r-t.r)*r<<16)+(t.g+(n.g-t.g)*r<<8)+(t.b+(n.b-t.b)*r)})}(16763955,16724940,i.frequencyBinCount),l=(Math.cos,Math.sin,Math.PI,n.stage),h=n.ticker,w=n.screen,p=w.width/c/2;d.then(function(t){e.decodeAudioData(t,function(t){a.buffer=t,a.connect(i),i.connect(e.destination),a.start()})}),l.addChild(u),h.add(function(){i.getByteFrequencyData(s),u.clear(),o()(s).call(s,function(t,n){u.beginFill(f[n]),u.drawRect(2*n*p,w.height/2-t,p,2*t)}),u.endFill()})}document.body.addEventListener("click",i),document.body.addEventListener("touchstart",i),n.a={data:function(){return{clicked:!1}},mounted:function(){var n=this,e=new t.Application({antialias:!0,transparent:!0,width:this.$refs.view.offsetWidth,height:this.$refs.view.offsetHeight}),i=e.view;if(i.style.display="block",i.style.position="absolute",matchMedia("(orientation: portrait)").matches){var a=window,r=a.innerWidth,c=a.innerHeight;i.style.width="".concat(c,"px"),i.style.height="".concat(r,"px"),i.style.transform="rotate(90deg)",i.style.top="".concat(.5*(innerHeight-r),"px"),i.style.left="".concat(.5*(innerWidth-c),"px")}u.then(function(){n.clicked=!0,f(e)}),this.$refs.view.appendChild(i)}}}).call(this,e(301))},145:function(t,n,e){var i=e(300);"string"==typeof i&&(i=[[t.i,i,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(21)(i,a);i.locals&&(t.exports=i.locals)},299:function(t,n,e){"use strict";var i=e(145);e.n(i).a},300:function(t,n,e){(t.exports=e(20)(!1)).push([t.i,"section[data-v-8b3c85a8] {\n  width: 100%;\n  height: 100%;\n}\n",""])},89:function(t,n,e){"use strict";e.r(n);var i=e(139).a,a=(e(299),e(19)),r=Object(a.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("section",{ref:"view",staticClass:"d-flex align-items-center justify-content-center"},[this.clicked?this._e():n("button",{staticClass:"btn btn-info"},[this._v("Play")])])},[],!1,null,"8b3c85a8",null);n.default=r.exports}}]);