(window.webpackJsonp=window.webpackJsonp||[]).push([["2dc7"],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"4hZ1":function(t,e,n){"use strict";var r=n("KI45"),i=r(n("pbKT")),o=r(n("0iUn")),a=r(n("AT/M")),u=r(n("sLSF")),c=r(n("Tit0")),f=r(n("MI3g")),s=r(n("a7VT")),l=r(n("dfwq")),p=r(n("ttDY"));function d(t){var e=function(){if("undefined"==typeof Reflect||!i.default)return!1;if(i.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,i.default)(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=(0,s.default)(t);if(e){var o=(0,s.default)(this).constructor;n=(0,i.default)(r,arguments,o)}else n=r.apply(this,arguments);return(0,f.default)(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var v=n("q1tI"),h="undefined"==typeof window;e.default=function(){var t,e=new p.default;function n(n){t=n.props.reduceComponentsToState((0,l.default)(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(r){(0,c.default)(f,r);var i=d(f);function f(t){var r;return(0,o.default)(this,f),r=i.call(this,t),h&&(e.add((0,a.default)(r)),n((0,a.default)(r))),r}return(0,u.default)(f,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),(0,u.default)(f,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),f}(v.Component)}},"8iia":function(t,e,n){var r=n("QMMT"),i=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),i=n("n3ko");t.exports=n("raTm")("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return r.def(i(this,"Set"),t=0===t?0:t,t)}},r)},C2SN:function(t,e,n){var r=n("93I4"),i=n("kAMH"),o=n("UWiX")("species");t.exports=function(t){var e;return i(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},EXMj:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},HsjC:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/meta",function(){var t=n("kU4l");return{page:t.default||t}}])},IClC:function(t,e,n){"use strict";var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.HeadManagerContext=i.createContext(null)},KI45:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TJWN:function(t,e,n){"use strict";var r=n("5T2Y"),i=n("WEpk"),o=n("2faE"),a=n("jmDH"),u=n("UWiX")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];a&&e&&!e[u]&&o.f(e,u,{configurable:!0,get:function(){return this}})}},"V+O7":function(t,e,n){n("aPfg")("Set")},V7Et:function(t,e,n){var r=n("2GTP"),i=n("M1xp"),o=n("JB68"),a=n("tEej"),u=n("v6xn");t.exports=function(t,e){var n=1==t,c=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l,d=e||u;return function(e,u,v){for(var h,m,y=o(e),g=i(y),_=r(u,v,3),w=a(g.length),E=0,x=n?d(e,w):c?d(e,0):void 0;w>E;E++)if((p||E in g)&&(m=_(h=g[E],E,y),t))if(n)x[E]=m;else if(m)switch(t){case 3:return!0;case 5:return h;case 6:return E;case 2:x.push(h)}else if(s)return!1;return l?-1:f||s?s:x}}},VKFn:function(t,e,n){n("bBy9"),n("FlQf"),t.exports=n("ldVq")},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,i=n("oVml"),o=n("XJU/"),a=n("2GTP"),u=n("EXMj"),c=n("oioR"),f=n("MPFp"),s=n("UO39"),l=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,v=n("n3ko"),h=p?"_s":"size",m=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,f){var s=t(function(t,r){u(t,s,e,"_i"),t._t=e,t._i=i(null),t._f=void 0,t._l=void 0,t[h]=0,null!=r&&c(r,n,t[f],t)});return o(s.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=v(this,e),r=m(n,t);if(r){var i=r.n,o=r.p;delete n._i[r.i],r.r=!0,o&&(o.n=i),i&&(i.p=o),n._f==r&&(n._f=i),n._l==r&&(n._l=o),n[h]--}return!!r},forEach:function(t){v(this,e);for(var n,r=a(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!m(v(this,e),t)}}),p&&r(s.prototype,"size",{get:function(){return v(this,e)[h]}}),s},def:function(t,e,n){var r,i,o=m(t,e);return o?o.v=n:(t._l=o={i:i=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[h]++,"F"!==i&&(t._i[i]=o)),t},getEntry:m,setStrong:function(t,e,n){f(t,e,function(t,n){this._t=v(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?s(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,s(1))},n?"entries":"values",!n,!0),l(e)}}},Wziy:function(t,e,n){"use strict";var r=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI")),o=n("imt6");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.enabled,n=void 0!==e&&e,r=t.hybrid,i=void 0!==r&&r,o=t.hasQuery;return n&&(!i||i&&(void 0!==o&&o))}e.isAmp=a,e.useAmp=function(){return a(i.default.useContext(o.AmpModeContext))},e.withAmp=function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).hybrid,n=void 0!==e&&e;function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.default.useContext(o.AmpModeContext);return r.enabled=!0,r.hybrid=n,i.default.createElement(t,e)}return r.__nextAmpOnly=!n,r.getInitialProps=t.getInitialProps,r}},"XJU/":function(t,e,n){var r=n("NegM");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},aPfg:function(t,e,n){"use strict";var r=n("Y7ZC"),i=n("eaoh"),o=n("2GTP"),a=n("oioR");t.exports=function(t){r(r.S,t,{from:function(t){var e,n,r,u,c=arguments[1];return i(this),(e=void 0!==c)&&i(c),null==t?new this:(n=[],e?(r=0,u=o(c,arguments[2],2),a(t,!1,function(t){n.push(u(t,r++))})):a(t,!1,n.push,n),new this(n))}})}},cHUd:function(t,e,n){"use strict";var r=n("Y7ZC");t.exports=function(t){r(r.S,t,{of:function(){for(var t=arguments.length,e=new Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dfwq:function(t,e,n){"use strict";n.r(e);var r=n("p0XB"),i=n.n(r);var o=n("d04V"),a=n.n(o),u=n("yLu3"),c=n.n(u);function f(t){return function(t){if(i()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return a()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"default",function(){return f})},imt6:function(t,e,n){"use strict";var r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n("q1tI"));e.AmpModeContext=i.createContext({})},kU4l:function(t,e,n){"use strict";n.r(e);var r=n("pbKT"),i=n.n(r),o=n("0iUn"),a=n("sLSF"),u=n("Tit0"),c=n("MI3g"),f=n("a7VT"),s=n("q1tI"),l=n.n(s),p=n("m/Pd"),d=n.n(p);function v(t){var e=function(){if("undefined"==typeof Reflect||!i.a)return!1;if(i.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(i()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(f.default)(t);if(e){var o=Object(f.default)(this).constructor;n=i()(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.default)(this,n)}}var h=function(t){Object(u.default)(n,t);var e=v(n);function n(t){var r;Object(o.default)(this,n);var i="Interactions Lab - University of Calgary HCI Group";return(r=e.call(this,t)).props.title?r.title="".concat(r.props.title," | ").concat(i):r.title=i,r.props.description?r.description=r.props.description:r.description="Human-Computer Interaction and Information Visualization Group at the University of Calgary",r.props.keywords?r.keywords=r.props.keywords:r.keywords="Human-Computer Interaction, HCI, Information Visualization, University of Calgary, CHI, UIST",r.props.image?r.image=r.props.image:r.image="/static/images/cover.jpg",r.props.url?r.url=r.props.image:r.url="https://ilab.ucalgary.ca/",r}return Object(a.default)(n,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("title",null,this.title),l.a.createElement("meta",{name:"keywords",content:this.keywords}),l.a.createElement("meta",{name:"description",content:this.description}),l.a.createElement("meta",{property:"og:title",content:this.title}),l.a.createElement("meta",{property:"og:description",content:this.description}),l.a.createElement("meta",{property:"og:site_name",content:"Interactions Lab | University of Calgary HCI Group"}),l.a.createElement("meta",{property:"og:url",content:this.url}),l.a.createElement("meta",{property:"og:image",content:this.image}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{name:"twitter:title",content:this.title}),l.a.createElement("meta",{name:"twitter:description",content:this.description}),l.a.createElement("meta",{name:"twitter:image",content:this.image}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:site",content:"@ucalgary"}),l.a.createElement("meta",{name:"twitter:url",content:this.url}))}}]),n}(l.a.Component);e.default=h},ldVq:function(t,e,n){var r=n("QMMT"),i=n("UWiX")("iterator"),o=n("SBuE");t.exports=n("WEpk").isIterable=function(t){var e=Object(t);return void 0!==e[i]||"@@iterator"in e||o.hasOwnProperty(r(e))}},"m/Pd":function(t,e,n){"use strict";var r=n("KI45")(n("ttDY")),i=function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=i(n("q1tI")),a=i(n("4hZ1")),u=n("imt6"),c=n("IClC"),f=n("Wziy");function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next-head",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[o.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:t})];return e||n.push(o.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1",className:t})),n}function l(t,e){return"string"==typeof e||"number"==typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce(function(t,e){return"string"==typeof e||"number"==typeof e?t:t.concat(e)},[])):t.concat(e)}e.defaultHead=s;var p=["name","httpEquiv","charSet","viewport","itemProp"];function d(t,e){return t.reduce(function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)},[]).reduce(l,[]).reverse().concat(s("",e.isAmp)).filter((n=new r.default,i=new r.default,a=new r.default,u={},function(t){if(t.key&&"number"!=typeof t.key&&0===t.key.indexOf(".$"))return!n.has(t.key)&&(n.add(t.key),!0);switch(t.type){case"title":case"base":if(i.has(t.type))return!1;i.add(t.type);break;case"meta":for(var e=0,o=p.length;e<o;e++){var c=p[e];if(t.props.hasOwnProperty(c))if("charSet"===c||"viewport"===c){if(a.has(c))return!1;a.add(c)}else{var f=t.props[c],s=u[c]||new r.default;if(s.has(f))return!1;s.add(f),u[c]=s}}}return!0})).reverse().map(function(t,e){var n=(t.props&&t.props.className?t.props.className+" ":"")+"next-head",r=t.key||e;return o.default.cloneElement(t,{key:r,className:n})});var n,i,a,u}var v=a.default();function h(t){var e=t.children;return o.default.createElement(u.AmpModeContext.Consumer,null,function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,function(n){return o.default.createElement(v,{reduceComponentsToState:d,handleStateChange:n,isAmp:f.isAmp(t)},e)})})}h.rewind=v.rewind,e.default=h},n3ko:function(t,e,n){var r=n("93I4");t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},oioR:function(t,e,n){var r=n("2GTP"),i=n("sNwI"),o=n("NwJ3"),a=n("5K7Z"),u=n("tEej"),c=n("fNZA"),f={},s={};(e=t.exports=function(t,e,n,l,p){var d,v,h,m,y=p?function(){return t}:c(t),g=r(n,l,e?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(o(y)){for(d=u(t.length);d>_;_++)if((m=e?g(a(v=t[_])[0],v[1]):g(t[_]))===f||m===s)return m}else for(h=y.call(t);!(v=h.next()).done;)if((m=i(h,g,v.value,e))===f||m===s)return m}).BREAK=f,e.RETURN=s},raTm:function(t,e,n){"use strict";var r=n("5T2Y"),i=n("Y7ZC"),o=n("6/1s"),a=n("KUxP"),u=n("NegM"),c=n("XJU/"),f=n("oioR"),s=n("EXMj"),l=n("93I4"),p=n("RfKB"),d=n("2faE").f,v=n("V7Et")(0),h=n("jmDH");t.exports=function(t,e,n,m,y,g){var _=r[t],w=_,E=y?"set":"add",x=w&&w.prototype,C={};return h&&"function"==typeof w&&(g||x.forEach&&!a(function(){(new w).entries().next()}))?(w=e(function(e,n){s(e,w,t,"_c"),e._c=new _,null!=n&&f(n,y,e[E],e)}),v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!g||"clear"!=t)&&u(w.prototype,t,function(n,r){if(s(this,w,t),!e&&g&&!l(n))return"get"==t&&void 0;var i=this._c[t](0===n?0:n,r);return e?this:i})}),g||d(w.prototype,"size",{get:function(){return this._c.size}})):(w=m.getConstructor(e,t,y,E),c(w.prototype,n),o.NEED=!0),p(w,t),C[t]=w,i(i.G+i.W+i.F,C),g||m.setStrong(w,t,y),w}},ttDY:function(t,e,n){t.exports=n("+iuc")},v6xn:function(t,e,n){var r=n("C2SN");t.exports=function(t,e){return new(r(t))(e)}},xvv9:function(t,e,n){n("cHUd")("Set")},yLu3:function(t,e,n){t.exports=n("VKFn")}},[["HsjC","5d41","9da1"]]]);