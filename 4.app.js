(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{101:function(t,n,r){var o=r(111),e=r(109),i=r(140),c=r(114).f;t.exports=function(t){var n=o.Symbol||(o.Symbol={});e(n,t)||c(n,t,{value:i.f(t)})}},130:function(t,n,r){var o=r(105),e=r(103),i=r(138),c=e("species");t.exports=function(t){return i>=51||!o((function(){var n=[];return(n.constructor={})[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},139:function(t,n,r){var o=r(164),e=r(148).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return o(t,e)}},140:function(t,n,r){var o=r(103);n.f=o},155:function(t,n,r){t.exports=r(156)},156:function(t,n,r){r(119),r(125);var o=r(168);t.exports=o},168:function(t,n,r){var o=r(108),e=r(129);t.exports=function(t){var n=e(t);if("function"!=typeof n)throw TypeError(String(t)+" is not iterable");return o(n.call(t))}},169:function(t,n,r){t.exports=r(170)},170:function(t,n,r){r(119),r(125);var o=r(129);t.exports=o},171:function(t,n,r){t.exports=r(172)},172:function(t,n,r){var o=r(173);t.exports=o},173:function(t,n,r){r(174),r(177),r(178),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197);var o=r(111);t.exports=o.Symbol},174:function(t,n,r){"use strict";var o=r(106),e=r(105),i=r(115),c=r(107),u=r(123),a=r(116),f=r(137),s=r(175),l=r(130),p=r(103),y=r(138),h=p("isConcatSpreadable"),v=y>=51||!e((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),d=l("concat"),b=function(t){if(!c(t))return!1;var n=t[h];return void 0!==n?!!n:i(t)};o({target:"Array",proto:!0,forced:!v||!d},{concat:function(t){var n,r,o,e,i,c=u(this),l=s(c,0),p=0;for(n=-1,o=arguments.length;n<o;n++)if(b(i=-1===n?c:arguments[n])){if(p+(e=a(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(r=0;r<e;r++,p++)r in i&&f(l,p,i[r])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");f(l,p++,i)}return l.length=p,l}})},178:function(t,n,r){"use strict";var o=r(106),e=r(104),i=r(117),c=r(122),u=r(113),a=r(146),f=r(162),s=r(105),l=r(109),p=r(115),y=r(107),h=r(108),v=r(123),d=r(112),b=r(132),g=r(121),m=r(147),w=r(163),x=r(139),S=r(179),O=r(180),A=r(145),j=r(114),P=r(160),E=r(110),C=r(128),N=r(143),I=r(133),T=r(134),k=r(144),J=r(103),M=r(140),_=r(101),F=r(124),$=r(131),q=r(149).forEach,B=I("hidden"),D=J("toPrimitive"),Q=$.set,R=$.getterFor("Symbol"),U=Object.prototype,W=e.Symbol,Y=i("JSON","stringify"),z=A.f,G=j.f,H=S.f,K=P.f,L=N("symbols"),V=N("op-symbols"),X=N("string-to-symbol-registry"),Z=N("symbol-to-string-registry"),tt=N("wks"),nt=e.QObject,rt=!nt||!nt.prototype||!nt.prototype.findChild,ot=u&&s((function(){return 7!=m(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,n,r){var o=z(U,n);o&&delete U[n],G(t,n,r),o&&t!==U&&G(U,n,o)}:G,et=function(t,n){var r=L[t]=m(W.prototype);return Q(r,{type:"Symbol",tag:t,description:n}),u||(r.description=n),r},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,n,r){t===U&&ct(V,n,r),h(t);var o=b(n,!0);return h(r),l(L,o)?(r.enumerable?(l(t,B)&&t[B][o]&&(t[B][o]=!1),r=m(r,{enumerable:g(0,!1)})):(l(t,B)||G(t,B,g(1,{})),t[B][o]=!0),ot(t,o,r)):G(t,o,r)},ut=function(t,n){h(t);var r=d(n),o=w(r).concat(lt(r));return q(o,(function(n){u&&!at.call(r,n)||ct(t,n,r[n])})),t},at=function(t){var n=b(t,!0),r=K.call(this,n);return!(this===U&&l(L,n)&&!l(V,n))&&(!(r||!l(this,n)||!l(L,n)||l(this,B)&&this[B][n])||r)},ft=function(t,n){var r=d(t),o=b(n,!0);if(r!==U||!l(L,o)||l(V,o)){var e=z(r,o);return!e||!l(L,o)||l(r,B)&&r[B][o]||(e.enumerable=!0),e}},st=function(t){var n=H(d(t)),r=[];return q(n,(function(t){l(L,t)||l(T,t)||r.push(t)})),r},lt=function(t){var n=t===U,r=H(n?V:d(t)),o=[];return q(r,(function(t){!l(L,t)||n&&!l(U,t)||o.push(L[t])})),o};(a||(C((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=k(t),r=function(t){this===U&&r.call(V,t),l(this,B)&&l(this[B],n)&&(this[B][n]=!1),ot(this,n,g(1,t))};return u&&rt&&ot(U,n,{configurable:!0,set:r}),et(n,t)}).prototype,"toString",(function(){return R(this).tag})),C(W,"withoutSetter",(function(t){return et(k(t),t)})),P.f=at,j.f=ct,A.f=ft,x.f=S.f=st,O.f=lt,M.f=function(t){return et(J(t),t)},u&&(G(W.prototype,"description",{configurable:!0,get:function(){return R(this).description}}),c||C(U,"propertyIsEnumerable",at,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:W}),q(w(tt),(function(t){_(t)})),o({target:"Symbol",stat:!0,forced:!a},{for:function(t){var n=String(t);if(l(X,n))return X[n];var r=W(n);return X[n]=r,Z[r]=n,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),o({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,n){return void 0===n?m(t):ut(m(t),n)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),o({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),o({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),Y)&&o({target:"JSON",stat:!0,forced:!a||s((function(){var t=W();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}))},{stringify:function(t,n,r){for(var o,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);if(o=n,(y(n)||void 0!==t)&&!it(t))return p(n)||(n=function(t,n){if("function"==typeof o&&(n=o.call(this,t,n)),!it(n))return n}),e[1]=n,Y.apply(null,e)}});W.prototype[D]||E(W.prototype,D,W.prototype.valueOf),F(W,"Symbol"),T[B]=!0},179:function(t,n,r){var o=r(112),e=r(139).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return e(t)}catch(t){return c.slice()}}(t):e(o(t))}},180:function(t,n){n.f=Object.getOwnPropertySymbols},181:function(t,n,r){r(101)("asyncIterator")},182:function(t,n){},183:function(t,n,r){r(101)("hasInstance")},184:function(t,n,r){r(101)("isConcatSpreadable")},185:function(t,n,r){r(101)("iterator")},186:function(t,n,r){r(101)("match")},187:function(t,n,r){r(101)("matchAll")},188:function(t,n,r){r(101)("replace")},189:function(t,n,r){r(101)("search")},190:function(t,n,r){r(101)("species")},191:function(t,n,r){r(101)("split")},192:function(t,n,r){r(101)("toPrimitive")},193:function(t,n,r){r(101)("toStringTag")},194:function(t,n,r){r(101)("unscopables")},195:function(t,n,r){var o=r(104);r(124)(o.JSON,"JSON",!0)},196:function(t,n){},197:function(t,n){},198:function(t,n,r){t.exports=r(199)},199:function(t,n,r){var o=r(200);t.exports=o},200:function(t,n,r){r(201);var o=r(111);t.exports=o.Array.isArray},201:function(t,n,r){r(106)({target:"Array",stat:!0},{isArray:r(115)})},202:function(t,n,r){t.exports=r(203)},203:function(t,n,r){var o=r(204);t.exports=o},204:function(t,n,r){var o=r(205),e=Array.prototype;t.exports=function(t){var n=t.slice;return t===e||t instanceof Array&&n===e.slice?o:n}},205:function(t,n,r){r(206);var o=r(151);t.exports=o("Array").slice},206:function(t,n,r){"use strict";var o=r(106),e=r(107),i=r(115),c=r(166),u=r(116),a=r(112),f=r(137),s=r(103),l=r(130),p=r(150),y=l("slice"),h=p("slice",{ACCESSORS:!0,0:0,1:2}),v=s("species"),d=[].slice,b=Math.max;o({target:"Array",proto:!0,forced:!y||!h},{slice:function(t,n){var r,o,s,l=a(this),p=u(l.length),y=c(t,p),h=c(void 0===n?p:n,p);if(i(l)&&("function"!=typeof(r=l.constructor)||r!==Array&&!i(r.prototype)?e(r)&&null===(r=r[v])&&(r=void 0):r=void 0,r===Array||void 0===r))return d.call(l,y,h);for(o=new(void 0===r?Array:r)(b(h-y,0)),s=0;y<h;y++,s++)y in l&&f(o,s,l[y]);return o.length=s,o}})},225:function(t,n,r){var o=r(270);"string"==typeof o&&(o=[[t.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};r(26)(o,e);o.locals&&(t.exports=o.locals)},269:function(t,n,r){"use strict";r(225)},270:function(t,n,r){(t.exports=r(25)(!1)).push([t.i,".view[data-v-77232304] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  overflow: hidden;\n}\ni[data-v-77232304] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  background-color: rgba(75, 255, 51, 0.452);\n  border: 1px solid #ccc;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n",""])},96:function(t,n,r){"use strict";r.r(n);var o=r(155),e=r.n(o),i=r(198),c=r.n(i),u=r(169),a=r.n(u),f=r(171),s=r.n(f),l=r(202),p=r.n(l),y=r(207),h=r.n(y);function v(t,n){var r;if(void 0===s.a||null==a()(t)){if(c()(t)||(r=function(t,n){var r;if(!t)return;if("string"==typeof t)return d(t,n);var o=p()(r=Object.prototype.toString.call(t)).call(r,8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return h()(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return d(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,i=function(){};return{s:i,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,f=!0,l=!1;return{s:function(){r=e()(t)},n:function(){var t=r.next();return f=t.done,t},e:function(t){l=!0,u=t},f:function(){try{f||null==r.return||r.return()}finally{if(l)throw u}}}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,o=new Array(n);r<n;r++)o[r]=t[r];return o}var b={data:function(){return{index:0,children:[]}},methods:{loop:function(){var t,n=0,r=this.children.length,o=v(this.children);try{for(o.s();!(t=o.n()).done;){var e=t.value;(this.index+1)%r!==n&&this.index!==n||(e.ty-=.01),e.ty<=-1&&(this.index++,e.ty=1),n++}}catch(t){o.e(t)}finally{o.f()}this.index===r&&(this.index=0),requestAnimationFrame(this.loop)}},mounted:function(){this.children=h()({length:6},(function(t,n){return{ty:n?1:0}})),this.loop()}},g=(r(269),r(23)),m=Object(g.a)(b,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("section",{staticClass:"view"},t._l(t.children,(function(n,o){return r("i",{style:{transform:"translateY("+100*n.ty+"%)"},domProps:{textContent:t._s(o)}})})),0)}),[],!1,null,"77232304",null);n.default=m.exports}}]);