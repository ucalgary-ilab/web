(window.webpackJsonp=window.webpackJsonp||[]).push([["fc83"],{Xj6D:function(e,t,i){"use strict";i.r(t);var a=i("XXOK"),n=i.n(a),r=i("p0XB"),c=i.n(r),l=i("XVgq"),o=i.n(l),s=i("Z7t5"),u=i.n(s),p=i("d04V"),m=i.n(p),d=i("pbKT"),b=i.n(d),h=i("UXZV"),f=i.n(h),g=i("0iUn"),v=i("sLSF"),y=i("Tit0"),E=i("MI3g"),w=i("a7VT"),N=i("q1tI"),k=i.n(N);function j(e,t){var i;if(void 0===u.a||null==e[o.a]){if(c()(e)||(i=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return m()(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var a=0,r=function(){};return{s:r,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,p=!1;return{s:function(){i=n()(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){p=!0,l=e},f:function(){try{s||null==i.return||i.return()}finally{if(p)throw l}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function O(e){var t=function(){if("undefined"==typeof Reflect||!b.a)return!1;if(b.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(b()(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var i,a=Object(w.default)(e);if(t){var n=Object(w.default)(this).constructor;i=b()(a,arguments,n)}else i=a.apply(this,arguments);return Object(E.default)(this,i)}}var T=function(e){Object(y.default)(i,e);var t=O(i);function i(e){var a;return Object(g.default)(this,i),(a=t.call(this,e)).props.publication?(a.publication=f()({},a.props.publication),a.people=f()([],a.props.people),a.namesId=f()({},a.props.namesId),a.names=a.people.map(function(e){return e.name}),a.publication.base&&(a.publication.id=a.publication.base.split(".json")[0]),a.getProceedings(),a.getVideoEmbed(),a.showFigures=!1,a.props.short||(a.getFigures(),a.figures[a.publication.id]&&(a.showFigures=!0)),a):Object(E.default)(a)}return Object(v.default)(i,[{key:"getProceedings",value:function(){var e=this.publication.series.slice(0,-5),t=this.publication.series.slice(-2);this.proceeding=this.props.booktitles[e],this.proceeding||(this.proceeding={}),this.proceeding.series="".concat(e," '").concat(t),this.publication.pages<4&&(this.proceeding.booktitle="Adjunct "+this.proceeding.booktitle)}},{key:"getVideoEmbed",value:function(){this.publication.video&&(this.publication.video.includes("youtube")&&(this.publication.embedId=this.publication.video.split("?v=")[1],this.publication.embed="https://www.youtube.com/embed/".concat(this.publication.embedId),this.publication.embedThumbnail="https://img.youtube.com/vi/".concat(this.publication.embedId,"/maxresdefault.jpg")),this.publication.video.includes("vimeo")&&(this.publication.embedId=this.publication.video.split("/")[3],this.publication.embed="https://player.vimeo.com/video/".concat(this.publication.embedId),this.publication.embedThumbnail=this.props.vimeo[this.publication.embedId]))}},{key:"getFigures",value:function(){var e=this.props.files.children.filter(function(e){return"images"===e.name})[0].children.filter(function(e){return"publications"===e.name})[0].children.filter(function(e){return"figures"===e.name})[0].children;this.figures={};var t,i=j(e);try{for(i.s();!(t=i.n()).done;){var a=t.value,n=a.name,r=a.children.map(function(e){return e.path});this.figures[n]=r}}catch(c){i.e(c)}finally{i.f()}}},{key:"render",value:function(){var e=this;return this.props.publication?k.a.createElement("div",{id:"publication"},k.a.createElement("div",{className:"block"},k.a.createElement("div",{id:"breadcrumb",className:"ui breadcrumb"},k.a.createElement("a",{className:"section",href:"/publications"},"Publications"),k.a.createElement("i",{className:"right angle icon divider"}),k.a.createElement("a",{className:"active section"},this.publication.series)),k.a.createElement("div",{className:"ui grid",style:{marginTop:"10px"}},k.a.createElement("div",{className:"three wide column",style:{margin:"auto"}},k.a.createElement("img",{className:"cover",src:"/static/images/publications/cover/".concat(this.publication.id,".jpg")})),k.a.createElement("div",{className:"thirteen wide column"},k.a.createElement("h1",null,this.publication.title),k.a.createElement("p",{className:"meta"},this.publication.authors.map(function(t){return e.names.includes(t)?k.a.createElement("a",{href:"/people/".concat(e.namesId[t]),key:t},k.a.createElement("img",{src:"/static/images/people/".concat(e.namesId[t],".jpg"),className:"ui circular spaced image mini-profile"}),k.a.createElement("strong",null,t)):k.a.createElement("span",{key:t},t)}).reduce(function(e,t){return[e," , ",t]}))))),this.publication.embed&&k.a.createElement("div",{className:"block"},k.a.createElement("div",{className:"video-container"},k.a.createElement("iframe",{className:"embed",width:"100%",height:"315",src:"".concat(this.publication.embed,"?"),srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(this.publication.embed,"?autoplay=1><img src=").concat(this.publication.embedThumbnail,"><span>▶</span></a>"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,mozallowfullscreen:"true",msallowfullscreen:"true",oallowfullscreen:"true",webkitallowfullscreen:"true"}))),k.a.createElement("div",{className:"block"},k.a.createElement("h1",null,"Abstract"),k.a.createElement("p",null,this.publication.abstract),this.publication.keywords&&k.a.createElement("div",{className:"ui labels"},"Keywords:  ",this.publication.keywords.split(", ").map(function(e){return k.a.createElement("span",{className:"ui large grey label",key:e},e)}))),k.a.createElement("div",{className:"block"},k.a.createElement("h1",null,"Reference"),k.a.createElement("div",{className:"ui segment"},k.a.createElement("p",{style:{lineHeight:"160%"}},this.publication.authors.reduce(function(e,t){return[e,", ",t]}),". ",k.a.createElement("b",null,this.publication.title),". ",k.a.createElement("i",null,"In ".concat(this.proceeding.booktitle," (").concat(this.proceeding.series,")")),". ",this.proceeding.publisher,"  Page: 1-",this.publication.pages,".  DOI: ",k.a.createElement("a",{href:this.publication.doi,target:"_blank"},this.publication.doi)))),this.showFigures&&k.a.createElement("div",{className:"block"},k.a.createElement("h1",null,"Figures"),k.a.createElement("div",{id:"figure"},k.a.createElement("div",{className:"ui three cards",style:{marginTop:"30px"}},this.figures[this.publication.id].map(function(e){return k.a.createElement("a",{className:"card",href:"/".concat(e),target:"_blank"},k.a.createElement("div",{className:"image"},k.a.createElement("img",{src:"/".concat(e)})))}))))):k.a.createElement("div",null)}}]),i}(k.a.Component);t.default=T},vUjY:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detail",function(){var e=i("Xj6D");return{page:e.default||e}}])}},[["vUjY","5d41","9da1"]]]);