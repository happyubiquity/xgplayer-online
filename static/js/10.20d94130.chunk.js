(this["webpackJsonpcloudreve-frontend"]=this["webpackJsonpcloudreve-frontend"]||[]).push([[10],{5196:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return H}));var n=t(3),l=t(10),r=t(0),c=t.n(r),o=t(101),i=t(35),m=t(5212),s=t(5235),u=t(5236),p=t(5222),f=t(5215),d=t(5165),g=t(4),b=t(68),E=t(8),h=t(9),O=t(5147),v=t(5265),y=t(5253),j=t(5240),x=t(46),N=t(5163),C=t(5272),S=t(5262),k=t(27);function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var F=Object(o.a)((function(e){return{contentFix:{padding:"10px 24px 0px 24px"},wrapper:{margin:e.spacing(1),position:"relative"},buttonProgress:{color:e.palette.secondary.light,position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},content:{padding:0,marginTop:0},marginTop:{marginTop:e.spacing(2),display:"block"},textField:{marginTop:e.spacing(1)},scroll:{overflowX:"auto"},dialogContent:{marginTop:e.spacing(2)},pathSelect:{marginTop:e.spacing(2),display:"flex"}}})),T={Circle:c.a.createElement(k.e,null),CircleOutline:c.a.createElement(k.f,null),Heart:c.a.createElement(k.n,null),HeartOutline:c.a.createElement(k.o,null),Hexagon:c.a.createElement(k.p,null),HexagonOutline:c.a.createElement(k.q,null),Hexagram:c.a.createElement(k.r,null),HexagramOutline:c.a.createElement(k.s,null),Rhombus:c.a.createElement(k.C,null),RhombusOutline:c.a.createElement(k.D,null),Square:c.a.createElement(k.F,null),SquareOutline:c.a.createElement(k.G,null),Triangle:c.a.createElement(k.I,null)};function H(e){var a=Object(i.a)(),t=c.a.useState(0),o=Object(l.a)(t,2),w=o[0],H=o[1],W=c.a.useState(!1),D=Object(l.a)(W,2),q=D[0],z=D[1],J=c.a.useState("Circle"),L=Object(l.a)(J,2),R=L[0],G=L[1],I=c.a.useState(a.palette.text.secondary),X=Object(l.a)(I,2),A=X[0],B=X[1],K=c.a.useState({filename:"",tagName:"",path:"/"}),M=Object(l.a)(K,2),Q=M[0],U=M[1],V=c.a.useState(!1),Y=Object(l.a)(V,2),Z=Y[0],$=Y[1],_=Object(r.useState)(""),ee=Object(l.a)(_,2),ae=ee[0],te=ee[1],ne=Object(r.useState)(""),le=Object(l.a)(ne,2),re=(le[0],le[1]),ce=function(e){return function(a){U(P({},Q,Object(n.a)({},e,a.target.value)))}},oe=Object(E.c)(),ie=Object(r.useCallback)((function(e,a,t,n){return oe(Object(g.N)(e,a,t,n))}),[oe]),me=F();return c.a.createElement(m.a,{open:e.open,onClose:e.onClose,"aria-labelledby":"form-dialog-title",fullWidth:!0},c.a.createElement(m.a,{open:Z,onClose:function(){return $(!1)},"aria-labelledby":"form-dialog-title"},c.a.createElement(s.a,{id:"form-dialog-title"},"\u9009\u62e9\u76ee\u5f55"),c.a.createElement(b.a,{presentPath:"/",selected:[],onSelect:function(e){var a="/"===e.path?e.path+e.name:e.path+"/"+e.name;te(a),re(e.name)}}),c.a.createElement(u.a,null,c.a.createElement(p.a,{onClick:function(){return $(!1)}},"\u53d6\u6d88"),c.a.createElement(p.a,{onClick:function(){U(P({},Q,{path:"//"===ae?"/":ae})),$(!1)},color:"primary",disabled:""===ae},"\u786e\u5b9a"))),c.a.createElement(O.a,{position:"static"},c.a.createElement(v.a,{value:w,onChange:function(e,a){H(a)},variant:"fullWidth","aria-label":"full width tabs example"},c.a.createElement(y.a,{label:"\u6587\u4ef6\u5206\u7c7b"}),c.a.createElement(y.a,{label:"\u76ee\u5f55\u5feb\u6377\u65b9\u5f0f"}))),0===w&&c.a.createElement(f.a,{className:me.dialogContent},c.a.createElement(j.a,{label:"\u6807\u7b7e\u540d",id:"filled-name",value:Q.tagName,onChange:ce("tagName"),fullWidth:!0,className:me.textField}),c.a.createElement(j.a,{id:"filled-name",label:"\u6587\u4ef6\u540d\u5339\u914d\u89c4\u5219",value:Q.filename,onChange:ce("filename"),fullWidth:!0,rows:"4",multiline:!0,variant:"filled",className:me.textField}),c.a.createElement(x.a,{variant:"caption",color:"textSecondary"},"\u4f60\u53ef\u4ee5\u4f7f\u7528",c.a.createElement("code",null,"*"),"\u4f5c\u4e3a\u901a\u914d\u7b26\u3002\u6bd4\u5982",c.a.createElement("code",null,"*.png"),"\u8868\u793a\u5339\u914dpng\u683c\u5f0f\u56fe\u50cf\u3002\u591a\u884c\u89c4\u5219\u95f4\u4f1a\u4ee5\u201c\u6216\u201d\u7684\u5173\u7cfb\u8fdb\u884c\u8fd0\u7b97\u3002"),c.a.createElement(N.a,{className:me.marginTop},"\u56fe\u6807\uff1a"),c.a.createElement("div",{className:me.scroll},c.a.createElement(C.a,{size:"small",value:R,exclusive:!0,onChange:function(e,a){a&&G(a)},className:me.textField},Object.keys(T).map((function(e,a){return c.a.createElement(S.a,{key:a,value:e},T[e])})))),c.a.createElement(N.a,{className:me.marginTop},"\u989c\u8272\uff1a"),c.a.createElement("div",{className:me.scroll},c.a.createElement(C.a,{size:"small",value:A,exclusive:!0,onChange:function(e,a){a&&B(a)},className:me.textField},[a.palette.text.secondary,"#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"].map((function(e,a){return c.a.createElement(S.a,{key:a,value:e},c.a.createElement(k.e,{style:{color:e}}))}))))),1===w&&c.a.createElement(f.a,{className:me.dialogContent},c.a.createElement(j.a,{label:"\u6807\u7b7e\u540d",id:"filled-name",value:Q.tagName,onChange:ce("tagName"),fullWidth:!0,className:me.textField}),c.a.createElement("div",{className:me.pathSelect},c.a.createElement(j.a,{label:"\u76ee\u5f55\u8def\u5f84",id:"filled-name",value:Q.path,onChange:ce("path"),fullWidth:!0,className:me.textField}),c.a.createElement(p.a,{onClick:function(){return $(!0)},style:{marginLeft:a.spacing(1),alignSelf:"flex-end"},color:"primary",variant:"outlined"},"\u9009\u62e9"))),c.a.createElement(u.a,null,c.a.createElement(p.a,{onClick:e.onClose},"\u53d6\u6d88"),c.a.createElement("div",{className:me.wrapper},c.a.createElement(p.a,{onClick:function(){0===w?(z(!0),h.b.post("/tag/filter",{expression:Q.filename,name:Q.tagName,color:A,icon:R}).then((function(a){z(!1),e.onClose(),e.onSuccess({type:0,name:Q.tagName,color:A,icon:R,id:a.data})})).catch((function(e){ie("top","right",e.message,"error")})).then((function(){z(!1)}))):(z(!0),h.b.post("/tag/link",{path:Q.path,name:Q.tagName}).then((function(t){z(!1),e.onClose(),e.onSuccess({type:1,name:Q.tagName,expression:Q.path,color:a.palette.text.secondary,icon:"FolderHeartOutline",id:t.data})})).catch((function(e){ie("top","right",e.message,"error")})).then((function(){z(!1)})))},color:"primary",disabled:q||0===w&&(""===Q.filename||""===Q.tagName)||1===w&&(""===Q.tagName||""===Q.path)},"\u786e\u5b9a",q&&c.a.createElement(d.a,{size:24,className:me.buttonProgress})))))}}}]);
//# sourceMappingURL=10.20d94130.chunk.js.map