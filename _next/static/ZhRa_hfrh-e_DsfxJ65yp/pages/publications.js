(window.webpackJsonp=window.webpackJsonp||[]).push([["f36c"],{"6T/A":function(t){t.exports={fileMap:{"content/output/people.json":[{name:"Ehud Sharlin",type:"faculty",title:"Professor",url:"http://contacts.ucalgary.ca/info/cpsc/profiles/102-3264"},{name:"Wesley Willett",type:"faculty",title:"Assistant Professor",url:"http://www.wjwillett.net"},{name:"Lora Oehlberg",type:"faculty",title:"Assistant Professor",url:"https://pages.cpsc.ucalgary.ca/~lora.oehlberg/"},{name:"Ryo Suzuki",type:"faculty",title:"Assistant Professor",url:"https://ryosuzuki.org",scholar:"https://scholar.google.com/citations?user=klWjaQIAAAAJ",twitter:"https://twitter.com/ryosuzk",facebook:"https://www.facebook.com/ryosuzk"},{name:"Søren Knudsen",type:"postdoc",title:"Postdoctoral Fellow",url:"http://sorenknudsen.com/"},{name:"Carmen Hull",type:"phd",title:"PhD Student",url:"https://www.carmenhull.com/"},{name:"Kurtis Danyluk",type:"phd",title:"PhD Student"},{name:"Kendra Wannamaker",type:"master",title:"MSc Student"},{name:"Sasha Ivanov",type:"master",title:"MSc Student"},{name:"Nathalie Bressa",type:"visiting",title:"Visiting Researcher"}],"content/output/publications/uist-2020-suzuki.json":{date:"2020-10",title:"RealitySketch: Embedding Responsive Graphics and Visualizations in AR through Dynamic Sketching",authors:["Ryo Suzuki","Rubaiat Habib Kazi","Li-Yi Wei","Stephen DiVerdi","Wilmot Li","Daniel Leithinger"],year:2020,series:"UIST 2020",booktitle:"In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (UIST '20)",publisher:"ACM, New York, NY, USA",pages:"1-16",dir:"content/output/publications",base:"uist-2020-suzuki.json",ext:".json",sourceBase:"uist-2020-suzuki.md",sourceExt:".md"},"content/output/publications/iros-2020-hedayati.json":{date:"2020-09",title:"PufferBot: Actuated Expandable Structures for Aerial Robots",authors:["Hooman Hedayati","Ryo Suzuki","Daniel Leithinger","Daniel Szafir"],year:2020,series:"IROS 2020",booktitle:"In Proceedings of the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS '20)",publisher:"ACM, New York, NY, USA",pages:"1-7",dir:"content/output/publications",base:"iros-2020-hedayati.json",ext:".json",sourceBase:"iros-2020-hedayati.md",sourceExt:".md"},"content/output/news.json":[{date:"2020-08-10",text:"One paper accepted to UIST 2020",image:"uist-2020.jpg"},{date:"2020-05-05",text:"Five papers accepted to CHI 2020",image:"chi-2020.jpg"}]},sourceFileArray:["content/news.yaml","content/people.yaml","content/publications/iros-2020-hedayati.md","content/publications/uist-2020-suzuki.md"]}},LAxu:function(t,e,n){"use strict";n.r(e);var a=n("XXOK"),r=n.n(a),i=n("p0XB"),o=n.n(i),u=n("XVgq"),s=n.n(u),l=n("Z7t5"),c=n.n(l),p=n("d04V"),d=n.n(p),f=n("pbKT"),m=n.n(f),h=n("0iUn"),y=n("sLSF"),b=n("Tit0"),g=n("MI3g"),w=n("a7VT"),v=n("pLtp"),S=n.n(v),k=n("q1tI"),j=n.n(k),A=(n("IujW"),n("6T/A"));function E(t){var e=function(){if("undefined"==typeof Reflect||!m.a)return!1;if(m.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(m()(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,a=Object(w.default)(t);if(e){var r=Object(w.default)(this).constructor;n=m()(a,arguments,r)}else n=a.apply(this,arguments);return Object(g.default)(this,n)}}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var z,P=[],R=function(t,e){var n;if(void 0===c.a||null==t[s.a]){if(o()(t)||(n=function(t,e){if(t){if("string"==typeof t)return I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?d()(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var a=0,i=function(){};return{s:i,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,p=!1;return{s:function(){n=r()(t)},n:function(){var t=n.next();return l=t.done,t},e:function(t){p=!0,u=t},f:function(){try{l||null==n.return||n.return()}finally{if(p)throw u}}}}(S()(A.fileMap).filter(function(t){return t.includes("publications")}));try{for(R.s();!(z=R.n()).done;){var x=z.value;P.push(A.fileMap[x])}}catch(N){R.e(N)}finally{R.f()}P=P.sort(function(t,e){return new Date(e.date)-new Date(t.date)});var D=function(t){Object(b.default)(n,t);var e=E(n);function n(){return Object(h.default)(this,n),e.apply(this,arguments)}return Object(y.default)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return j.a.createElement("div",{id:"publications",className:"category"},j.a.createElement("h1",{class:"ui horizontal divider header"},j.a.createElement("i",{class:"file alternate outline icon"}),"Publications"),j.a.createElement("div",{className:"ui segment",style:{marginTop:"50px"}},P.map(function(t){return j.a.createElement("div",{className:"project ui vertical segment stackable grid","data-id":t.base.split(".json")[0]},j.a.createElement("div",{className:"four wide column"}),j.a.createElement("div",{className:"twelve wide column"},j.a.createElement("p",null,j.a.createElement("span",{className:"ui large inverted pink label"},t.series)),j.a.createElement("p",null,j.a.createElement("b",null,t.title)),j.a.createElement("p",null,t.authors.map(function(t){return t}).reduce(function(t,e){return[t,", ",e]}))))})))}}]),n}(j.a.Component);e.default=D},jmgf:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/publications",function(){var t=n("LAxu");return{page:t.default||t}}])}},[["jmgf","5d41","9da1"]]]);