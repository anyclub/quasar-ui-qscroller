(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{8669:function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return o}));s("a481");function a(t){var e=window.location.origin+window.location.pathname+"#"+t,s=document.createElement("textarea");s.className="fixed-top",s.value=e,document.body.appendChild(s),s.focus(),s.select(),document.execCommand("copy"),document.body.removeChild(s),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function o(t){return encodeURIComponent(String(t).trim().replace(/\s+/g,"-"))}},d427:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-markdown"},[s("example-title",{attrs:{title:"view='time-range'"}}),s("example-viewer",{attrs:{title:"Basic",file:"time-range/Basic","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Colors",file:"time-range/Colors","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"QInput",file:"time-range/QInput","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Disabled",file:"time-range/Disabled","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Intervals",file:"time-range/Intervals","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"12 Hour",file:"time-range/12Hour","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}}),s("example-viewer",{attrs:{title:"Types",file:"time-range/Types","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}},[s("q-markdown",[t._v("\nOpen the browser's Dev Tools (console) and then click on examples to see the different types.\n      ")])],1),s("example-viewer",{attrs:{title:"Slots",file:"time-range/Slots","location-url":t.locationUrl,"js-paths":t.jsPaths,"css-paths":t.cssPaths}})],1)},o=[],i=s("fe7d"),n=s("8669"),l=s("384e"),r={name:"TimeRange",components:{ExampleTitle:i["a"]},data:function(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qscroller/tree/dev/demo/src/examples/",jsPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qscroller@".concat(l["b"],"/dist/index.umd.min.js")],cssPaths:["https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qscroller@".concat(l["b"],"/dist/index.min.css"),"https://cdn.jsdelivr.net/npm/@quasar/extras/fontawesome-v5/fontawesome-v5.css"]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("view='time-range'"),this.addToToc("Basic",2),this.addToToc("Colors",2),this.addToToc("QInput",2),this.addToToc("Disabled",2),this.addToToc("Intervals",2),this.addToToc("12 Hour",2),this.addToToc("Types",2),this.addToToc("Slots",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(t){this.$store.commit("common/toc",t)}}},methods:{addToToc:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=t;e>1&&(s="example-"+s);var a=Object(n["b"])(s);this.tempToc.push({children:[],id:a,label:t,level:e})}}},c=r,d=s("2877"),h=Object(d["a"])(c,a,o,!1,null,null,null);e["default"]=h.exports},fe7d:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:t.slugifiedTitle},on:{click:function(e){return t.copyHeading(t.slugifiedTitle)}}},[t._v(t._s(t.title))])},o=[],i=s("8669"),n={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return Object(i["b"])(this.title)}},methods:{copyHeading:i["a"]}},l=n,r=s("2877"),c=Object(r["a"])(l,a,o,!1,null,null,null);e["a"]=c.exports}}]);