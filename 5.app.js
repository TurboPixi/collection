(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{208:function(t,n,e){"use strict";(function(t){e(228),e(288),e(57),e(58),e(290),e(298),e(300),e(301),e(302),e(303),e(304),e(305),e(306),e(307),e(308),e(309),e(310),e(314),e(315),e(316),e(317),e(318),e(319),e(320),e(321),e(322),e(323),e(324);var i,c=e(207),r=e.n(c),a=e(325),o=e.n(a),s=e(332),u=new(e.n(s).a)((function(t){return i=t})),d=fetch("//static.lufei.so/1.m4a?tf",{mode:"cors"}).then((function(t){return t.arrayBuffer()}));function f(n){var e=new(window.webkitAudioContext||window.AudioContext),i=e.createAnalyser(),c=e.createBufferSource();i.fftSize=256;var a=i.frequencyBinCount,s=new Uint8Array(a),u=new t.Graphics,f=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return t={r:t>>16,g:t>>8&255,b:255&t},n={r:n>>16,g:n>>8&255,b:255&n},r()({length:e},(function(i,c){var r=c/e;return(t.r+(n.r-t.r)*r<<16)+(t.g+(n.g-t.g)*r<<8)+(t.b+(n.b-t.b)*r)}))}(16763955,16724940,i.frequencyBinCount),l=(Math.cos,Math.sin,Math.PI,n.stage),h=n.ticker,w=n.screen,p=w.width/a/2;d.then((function(t){e.decodeAudioData(t,(function(t){c.buffer=t,c.connect(i),i.connect(e.destination),c.start()}))})),l.addChild(u),h.add((function(){i.getByteFrequencyData(s),u.clear(),o()(s).call(s,(function(t,n){u.beginFill(f[n]),u.drawRect(2*n*p,w.height/2-t,p,2*t)})),u.endFill()}))}document.body.addEventListener("click",i),document.body.addEventListener("touchstart",i),n.a={data:function(){return{clicked:!1}},mounted:function(){var n=this,e=new t.Application({antialias:!0,transparent:!0,width:this.$refs.view.offsetWidth,height:this.$refs.view.offsetHeight}),i=e.view;if(i.style.display="block",i.style.position="absolute",matchMedia("(orientation: portrait)").matches){var c=window,r=c.innerWidth,a=c.innerHeight;i.style.width="".concat(a,"px"),i.style.height="".concat(r,"px"),i.style.transform="rotate(90deg)",i.style.top="".concat(.5*(innerHeight-r),"px"),i.style.left="".concat(.5*(innerWidth-a),"px")}u.then((function(){n.clicked=!0,f(e)})),this.$refs.view.appendChild(i)}}}).call(this,e(348))},241:function(t,n,e){var i=e(347);"string"==typeof i&&(i=[[t.i,i,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};e(26)(i,c);i.locals&&(t.exports=i.locals)},346:function(t,n,e){"use strict";e(241)},347:function(t,n,e){(t.exports=e(25)(!1)).push([t.i,"section[data-v-8b3c85a8] {\n  width: 100%;\n  height: 100%;\n}\n",""])},98:function(t,n,e){"use strict";e.r(n);var i=e(208).a,c=(e(346),e(23)),r=Object(c.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{ref:"view",staticClass:"d-flex align-items-center justify-content-center"},[this.clicked?this._e():n("button",{staticClass:"btn btn-info"},[this._v("Play")])])}),[],!1,null,"8b3c85a8",null);n.default=r.exports}}]);