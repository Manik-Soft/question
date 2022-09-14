(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/questioncreator/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;i.push([1,"chunk-vendors"]),n()})({0:function(t,e){},1:function(t,e,n){t.exports=n("56d7")},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-main",{staticClass:"grey lighten-3"},[n("v-container",[n("v-card",{staticClass:"grey lighten-2"},[n("v-card-text",[n("div",[n("vue-editor",{staticClass:"inline__quill",attrs:{editorToolbar:t.customToolbar,height:"150px"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),n("div",{staticClass:"mt-4"},[n("v-textarea",{attrs:{outlined:""},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]),n("v-card-actions",[n("div",{staticClass:"ma-auto"},[n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.text,expression:"text",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.clipboardSuccessHandler,expression:"clipboardSuccessHandler",arg:"success"}],staticClass:"success ma-auto pa-3 white--text copybtn"},[t._v(" Copy ")]),n("button",{staticClass:"error ma-auto ml-4 pa-3 white--text",on:{click:function(e){t.text=""}}},[t._v(" Clear ")])])])],1),n("v-card",{staticClass:"my-2"},[n("v-card-text",[n("v-text-field",{attrs:{label:"Question sheet ..."},model:{value:t.questionID,callback:function(e){t.questionID=e},expression:"questionID"}})],1),n("v-card-actions",[n("v-btn",{staticClass:"indigo ma-auto",attrs:{loading:t.loadquestion,large:"",tile:"",dark:""},on:{click:t.loadQuestion}},[t._v(" Preview")])],1)],1),t.questions.length>0?n("div",{staticClass:"mt-5"},t._l(t.questions,(function(e,o){return n("v-card",{key:o,staticClass:"my-3"},[n("v-card-text",{staticClass:"black--text"},[n("p",{domProps:{innerHTML:t._s(e.question)}}),n("v-radio-group",{model:{value:t.questions[o].correct,callback:function(e){t.$set(t.questions[o],"correct",e)},expression:"questions[i].correct"}},[e.a?n("v-radio",{attrs:{value:e.a},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.a)}})]},proxy:!0}],null,!0)}):t._e(),e.b?n("v-radio",{attrs:{value:e.b},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.b)}})]},proxy:!0}],null,!0)}):t._e(),e.c?n("v-radio",{attrs:{value:e.c},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.c)}})]},proxy:!0}],null,!0)}):t._e(),e.d?n("v-radio",{attrs:{value:e.d},scopedSlots:t._u([{key:"label",fn:function(){return[n("div",{domProps:{innerHTML:t._s(e.d)}})]},proxy:!0}],null,!0)}):t._e()],1),n("p",{staticClass:"ma-2 red--text"},[n("b",[t._v("Correct Answer:")])]),n("div",{staticClass:"ma-2",domProps:{innerHTML:t._s(e.correct)}}),e.explain?n("p",{staticClass:"green--text ma-2"},[n("b",[t._v("Explanation")])]):t._e(),e.explain?n("div",{staticClass:"ma-2",domProps:{innerHTML:t._s(e.explain)}}):t._e()],1)],1)})),1):t._e(),n("v-snackbar",{attrs:{timeout:3e3},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[n("v-btn",t._b({attrs:{dark:"",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Text Successfully Copied ")])],1)],1)],1)},i=[],r=(n("caad"),n("2532"),n("d3b7"),n("d81d"),n("c6e5")),s=n("d340"),c=n("5873"),u={components:{VueEditor:c["a"]},data:function(){return{text:"",snackbar:!1,questions:[],questionID:"",loadquestion:!1,customToolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike",{align:[]}],["blockquote","code-block","image"],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],["formula","code-block"]]}},methods:{loadQuestion:function(){var t=this;if(this.questionID.includes("script"))this.loadquestion=!0,fetch(this.questionID+"?type=question").then((function(t){return t.json()})).then((function(e){console.log(e),t.questions=e,t.loadquestion=!1})).catch((function(){t.loadquestion=!1}));else{this.loadquestion=!0;var e=new s["GoogleSpreadsheet"](this.questionID);e.useServiceAccountAuth(r),e.loadInfo().then((function(){var n=e.sheetsByTitle["question"];n.getRows().then((function(e){t.questions=e.map((function(t){return{question:t.question,a:t.a,b:t.b,c:t.c,d:t.d,selected:"",correct:t.correct}})),t.loadquestion=!1})).catch((function(){t.loadquestion=!1}))}))}},clipboardSuccessHandler:function(){this.snackbar=!0}}},l=u,d=n("2877"),p=n("6544"),f=n.n(p),v=n("7496"),b=n("8336"),g=n("b0af"),x=n("99d9"),h=n("a523"),m=n("f6c4"),y=n("67b6"),k=n("43a6"),q=n("2db4"),_=n("8654"),w=n("a844"),C=Object(d["a"])(l,a,i,!1,null,"1afe31c6",null),A=C.exports;f()(C,{VApp:v["a"],VBtn:b["a"],VCard:g["a"],VCardActions:x["a"],VCardText:x["b"],VContainer:h["a"],VMain:m["a"],VRadio:y["a"],VRadioGroup:k["a"],VSnackbar:q["a"],VTextField:_["a"],VTextarea:w["a"]});var P=n("f309");o["a"].use(P["a"]);var S=new P["a"]({}),H=(n("a753"),n("3b2f")),M=n.n(H),Q=(n("be0f"),n("4eb5")),V=n.n(Q);o["a"].use(V.a),o["a"].use(M.a),window.katex=M.a,o["a"].config.productionTip=!1,new o["a"]({vuetify:S,render:function(t){return t(A)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},c6e5:function(t){t.exports=JSON.parse('{"type":"service_account","project_id":"learningsheetapi-1602730324885","private_key_id":"28f785b257273c8d0abef4601e897a60fe7e3aff","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDK/fdFEbWx96m\\nRcn2uQffe7RiJLfnNxvnngVkerhw+Ce+VQ3Z9ZcOPWgaN7UA9bXMjKGoAE4fGdvk\\nFYGog46giDGz2QHLH03yIIAGkY1YdtU3+Fee4l38a/BUXbcgRzH7uDhQxxPusRn6\\nTZ0kiguEf84fy/unsw0upMi8Q3ZcpzAE9OKioFXlWPqip2T+DbbeAEfl/QwvVkeV\\nx2ayB5Mk/bAeexPdxdTvbqmNB2gAi1431u3BmZUhcWz93Sh2RFOyGSyvYOqrU/W3\\nBpXL1cOPsxD1+U+wiGjJ9klzYPcWj0IYtwvgjH0PJS+U+LL6Gsf7BzuLYjlfQGL+\\nWHtr/Me1AgMBAAECggEACyW1Pqgm/aMlI+EOOSx19yfqdG/oHb7SNgdFWT5Vz4Sq\\nRx7g2idCoppo75UT863qXXhWJAbUb3FQ07T+Fqu2QelVfBIJHgViidGdDlhSNuXJ\\nUCzmhZl58xi6fXnBeQin9wUdblEDN0Rf7qHFN8OMsduCNeMMM2wGH45jiraIXvVH\\nWiQleYGolv2/vI+x/hSxRHod1YH4KTtE49YoWKqyW7npqPi6/gpne+pKctnEDt0Q\\nsvB4Nz29pwpQzvrgjg20finwRSNeE3gnDUqGp6UUmrR40NjYUPy2lOSm8Y8khj7A\\noB4Btr/wU3m9dN4eWIlMfY3xCwpkFi0qOLWpSwKbMQKBgQDv0fnHCGtmknhuWlMz\\nYbPuHESCF5PW23fLFXNxlbyLIt/H0iiPA4iYXC5uKMsn7tunJWJJfw50TSNF5nWa\\n+U2kkrBKMlnoyG9qFIRv8RkK4ZMurEGRALgy6crG7HdmCJE7KB3KOdMnEPadyi1s\\nHZyu+PiqY0rON3KiHtweplVXDQKBgQDQVtorY+rzojAYIgXku0A9MVg4IvqV00xZ\\nP+8uiXoSRbESCT/W1coZI1gNiXLGmOkLqRCEgCTpz+Vu5LmqWp/zCGaWNDz81iUa\\n+bOzeD/A4/F6oWsogs9RELki+EyaVztZR8zHLdrO6iCZepPL/0VjWRbnceD4bKr+\\nrFB3ZhWJSQKBgQDP0c35xDoN8O+b8XoYFJqvxJ85fOUIU7dDrZsU2wVALUBvEJdF\\nF3LPVVKG86LZQAvolGTP++KytgXTFRrk6RV3gAZ0xZ1UNB0YeB8sQmnJHCFHWM6Y\\nsV7t/9tQ9qmhKdtwwBrQm7t3JyQPKJykDCUzG12hidnRSgt0ofluNgXOIQKBgAj8\\nph6XCcyGo4J2/UAXn7bECSUqxRpvaeyzqFKelYhyPygjBAD1aelZr/OtiSjt8aeS\\nHGdKy8zWLfRxo1yo2ht2sk4qZLMXXbRjLxA/0Kg2bPU4P1IZCm5ZxVKv2UYTGzlH\\nspqo7LZePRfBxNxY35pgfm9vZx/wOBQSRMpRuf4ZAoGANMHQKZ2k4ShyzHAjRyDR\\nEH7NlQZHsSMMBORgY4qm6Qg/azwRSfKJ5D9dYRKPlA9PW5jCFAlu+DvnkmyIDLTT\\nU1e0rg/SDKvrjL2xZEjcsgCHeW/V88Bbr7XPzQ+u9E412ZcVCMpix9YjNUoaFi6h\\ny14kwtmr7tGmQ6dNp8tjqyg=\\n-----END PRIVATE KEY-----\\n","client_email":"nodesheetapi@learningsheetapi-1602730324885.iam.gserviceaccount.com","client_id":"106897863022859409090","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/nodesheetapi%40learningsheetapi-1602730324885.iam.gserviceaccount.com"}')}});