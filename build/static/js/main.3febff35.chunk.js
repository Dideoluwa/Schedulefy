(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{11:function(e,t,c){e.exports={date_show:"Info_date_show__TWPH5",date:"Info_date__2ADOx",fadeDate:"Info_fadeDate__NP26S",body:"Info_body__3t3lD"}},12:function(e,t,c){e.exports={body:"Nav_body__3zycG",body_inner:"Nav_body_inner__2gpR_",next:"Nav_next__2KYUZ",back:"Nav_back__2YAFQ"}},13:function(e,t,c){e.exports={body:"Form_body__1ZhyU",fadeIn:"Form_fadeIn__1hF2H",header:"Form_header__1zcTG",form:"Form_form__2hemT",fadeError:"Form_fadeError__3wwq8"}},26:function(e,t,c){e.exports={body:"DateInfo_body__2M55L"}},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(25),s=c.n(a),i=c(21),r=(c(36),c(3)),l=(c(37),c(11)),o=c.n(l),j=c(0);var d=function(e){return Object(j.jsxs)("div",{className:o.a.body,children:[Object(j.jsx)("div",{className:o.a.body_header,children:Object(j.jsx)("h2",{children:"Walkthrough"})}),Object(j.jsx)("div",{className:o.a.body_header,children:Object(j.jsx)("h1",{children:"Schdule a demo"})}),Object(j.jsxs)("div",{className:e.show?o.a.date_show:o.a.date,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Date:"}),Object(j.jsx)("h3",{children:e.dates})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Time:"}),Object(j.jsx)("h3",{children:"Scheduled time: ".concat(e.timer)})]})]})]})},b=c(2),h=c(12),u=c.n(h);var m=function(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(b.f)().pathname;return Object(n.useEffect)((function(){s("/form"===i?"Submit":"Next")}),[i]),Object(j.jsx)("div",{className:u.a.body,children:Object(j.jsxs)("div",{className:u.a.body_inner,children:[Object(j.jsx)("div",{onClick:e.onClick,className:u.a.back,children:Object(j.jsx)("h3",{children:"\u2190 Back"})}),Object(j.jsx)("div",{className:u.a.next,children:Object(j.jsx)("button",{type:"submit",onSubmit:e.onSubmit,onClick:e.onClickFor,disabled:!e.disabled,children:a})})]})})};var O=function(e){return Object(j.jsxs)("div",{className:"main__wrapper",children:[Object(j.jsxs)("div",{className:"calendar-container",children:[Object(j.jsx)("div",{className:"calender__info",children:Object(j.jsx)(d,{dates:e.dates,show:e.show,timer:e.timer})}),Object(j.jsx)("div",{className:"outlet",children:Object(j.jsx)(b.a,{})})]}),Object(j.jsx)(m,{onSubmit:e.onSubmit,onClickFor:e.onClickFor,onClick:e.onClick,disabled:e.disabled})]})},x=(c(39),c.p+"static/media/alarm.ee8a1c56.wav"),v=c(13),_=c.n(v);var f=function(e){var t=Object(n.useState)(""),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),l=Object(r.a)(i,2),o=l[0],d=l[1],b=Object(n.useState)(!1),h=Object(r.a)(b,2),u=h[0],m=h[1],O=Object(n.useState)(!1),x=Object(r.a)(O,2),v=x[0],f=x[1],p=Object(n.useState)(!1),g=Object(r.a)(p,2),S=g[0],N=g[1];return Object(n.useEffect)((function(){a.trim().length>=1&&o.trim().length>=1&&e.email.includes("@")&&e.email.includes(".com")?e.setIsActive(!0):e.setIsActive(!1)}),[e,a,o,e.email]),Object(n.useEffect)((function(){e.email.trim().length>=1&&e.email.includes("@")&&e.email.includes(".com")&&m(!1)}),[e.email]),Object(j.jsxs)("div",{className:_.a.body,children:[Object(j.jsx)("div",{className:_.a.header,children:Object(j.jsx)("h4",{children:"Enter your information"})}),Object(j.jsx)("div",{className:_.a.header,children:Object(j.jsx)("h1",{children:"Personal Data"})}),Object(j.jsx)("div",{className:_.a.form,children:Object(j.jsxs)("form",{onSubmit:function(){},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Name"}),Object(j.jsx)("input",{type:"text",placeholder:"Please Enter your name",value:a,onChange:function(e){s(e.target.value),N(!1)},onBlur:function(){0===a.trim().length?N(!0):N(!1)},required:!0}),S&&Object(j.jsx)("p",{children:"Name must be inputed"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Phone Number:"}),Object(j.jsx)("input",{type:"number",placeholder:"Please Enter your phone number",value:o,onChange:function(e){d(e.target.value),f(!1)},onBlur:function(){0===o.trim().length?f(!0):f(!1)},required:!0}),v&&Object(j.jsx)("p",{children:"Phone number must be inputed"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Email:"}),Object(j.jsx)("input",{type:"email",placeholder:"Please Enter your email",value:e.email,onChange:function(t){e.setEmail(t.target.value)},onBlur:function(){0!==e.email.trim().length||e.email.includes("@")||e.email.includes(".com")?m(!1):m(!0)},required:!0}),u&&Object(j.jsx)("p",{children:"Email must be inputed"})]})]})})]})},p=c(27),g=c.n(p);c(40);var S=function(e){var t=Object(n.useState)(null),c=Object(r.a)(t,2),a=c[0],s=c[1];return Object(j.jsxs)("div",{className:"calendar-container__time",children:[Object(j.jsx)("h3",{children:"Time:"}),Object(j.jsx)("div",{className:"calendar-container__time__inner",children:e.time.map((function(t){return Object(j.jsx)("h1",{onClick:function(){e.setTimer(t),s(t),e.setIsActive(!0),e.setShow(!0)},className:"".concat(a===t&&"activeButton"),children:t},t)}))})]})},N=c(26),y=c.n(N);var w=function(e){return Object(j.jsx)("div",{className:y.a.body,children:Object(j.jsx)("div",{children:"Select a Date and Time"})})};var C=function(e){return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"calendar-container__inner",children:[Object(j.jsx)("div",{className:"calendar-container__header",children:Object(j.jsx)(w,{date:e.date})}),Object(j.jsx)(g.a,{minDate:new Date,onChange:e.onChange,value:e.date})]})}),Object(j.jsx)("div",{children:Object(j.jsx)(S,{setShow:e.setShow,setTimer:e.setTimer,setIsActive:e.setIsActive,time:e.time})})]})})},k=c(9),E=c.n(k);var I=function(e){var t=Object(b.g)();return Object(j.jsxs)("div",{className:E.a.body,children:[Object(j.jsx)("div",{className:E.a.svg_wrapper,children:Object(j.jsx)("div",{className:E.a.svg,children:Object(j.jsx)("svg",{width:"48",height:"35",viewBox:"0 0 48 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M46.5037 6.7984L19.3597 33.7552C17.9677 35.1376 15.7637 35.1376 14.3717 33.7552L1.49566 20.968C0.10366 19.5856 0.10366 17.3968 1.49566 16.0144C2.88766 14.632 5.09166 14.632 6.48366 16.0144L16.8657 26.3248L41.5157 1.8448C42.9077 0.462399 45.1117 0.462399 46.5037 1.8448C47.8957 3.2272 47.8957 5.416 46.5037 6.7984Z",fill:"#5793E5"})})})}),Object(j.jsx)("div",{className:E.a.header,children:Object(j.jsx)("h2",{children:"We just scheduled a demo for you."})}),Object(j.jsx)("div",{className:E.a.header,children:Object(j.jsxs)("p",{children:["A calendar invitation for your upcoming demo session has been sent to your email (",e.email,")"]})}),Object(j.jsxs)("div",{className:E.a.schedule,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Date"}),Object(j.jsx)("p",{children:e.dates})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Time"}),Object(j.jsx)("p",{children:e.timer})]})]}),Object(j.jsxs)("div",{className:E.a.buttons,children:[Object(j.jsx)("button",{onClick:function(){t("/")},children:"Get back home"}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Resend Email"})})]})]})};var P=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(new Date),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(n.useState)("00:00"),h=Object(r.a)(d,2),u=h[0],m=h[1],v=Object(n.useState)(!1),_=Object(r.a)(v,2),p=_[0],g=_[1],S=Object(n.useState)(""),N=Object(r.a)(S,2),y=N[0],w=N[1],k=Object(n.useState)(""),E=Object(r.a)(k,2),P=E[0],D=E[1],A=Object(n.useState)(""),F=Object(r.a)(A,2),T=F[0],L=F[1],B=Object(n.useState)(!1),U=Object(r.a)(B,2),q=U[0],G=U[1],J=Object(n.useState)(""),W=Object(r.a)(J,2),Y=W[0],R=W[1],Z=Object(n.useState)(""),z=Object(r.a)(Z,2),H=z[0],K=z[1],M=Object(b.f)().pathname,Q=new Audio(x);Object(n.useEffect)((function(){var e=setInterval((function(){var e=new Date,t=e.toLocaleString("en-US",{hour:"numeric",hour12:!1}),c=e.toLocaleString("en-US",{minute:"2-digit"}),n=e.toLocaleString("en-US",{month:"long"}),a=e.getDate(),s=e.getFullYear(),i=l.toLocaleString("en-US",{month:"long"}),r=l.getDate(),o=l.getFullYear();c=c<10?"0"+c:c,w("".concat(t,":").concat(c)),L("".concat(r," ").concat(i,", ").concat(o,".")),D("".concat(a," ").concat(n,", ").concat(s,"."))}),1e3);return function(){clearInterval(e)}}),[l]),Object(n.useEffect)((function(){g(u===y&&P===T)}),[u,l,y,P,T]),p&&Q.play();var V=Object(b.g)(),X=function(){V("/form"===M?"/final":"/form")};return Object(j.jsx)("div",{className:"main__wrapper1",children:Object(j.jsxs)("div",{className:"calendar-container2",children:[Object(j.jsxs)("div",{className:"calendar-container1",children:[Object(j.jsxs)(b.d,{children:[Object(j.jsxs)(b.b,{path:"/",element:Object(j.jsx)(O,{onClickFor:X,onClick:function(){V("/final"===M?"/form":"/")},disabled:c,show:q,dates:T,timer:u}),children:[Object(j.jsx)(b.b,{path:"/",element:Object(j.jsx)(C,{show:q,setShow:G,isActive:c,setIsActive:a,timer:u,setTimer:m,time:["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],date:l,onChange:o})}),Object(j.jsx)(b.b,{path:"form",element:Object(j.jsx)(f,{email:Y,setEmail:R,onClick:X,setIsActive:a})})]}),Object(j.jsx)(b.b,{path:"/final",element:Object(j.jsx)(I,{email:Y,dates:T,timer:u})})]}),Object(j.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault(),(t={name:H,email:Y},fetch("http://localhost:8000/api/sendmail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("response",e),e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.err?console.log(e.err):console.log(e)})).catch(console.log("error")),R(""),K("")},children:[Object(j.jsxs)("label",{children:["Enter your name:",Object(j.jsx)("input",{type:"text",placeholder:"email",value:Y,onChange:function(e){R(e.target.value)}}),Object(j.jsx)("input",{type:"text",value:H,onChange:function(e){K(e.target.value)}})]}),Object(j.jsx)("button",{children:"Submit"})]})]}),Object(j.jsx)("div",{})]})})};s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(i.a,{children:Object(j.jsx)(P,{})}))},9:function(e,t,c){e.exports={body:"SuccessPage_body__WUx8K",fadeIn:"SuccessPage_fadeIn__2JjdB",svg_wrapper:"SuccessPage_svg_wrapper__2y8hL",svg:"SuccessPage_svg__2G-97",back:"SuccessPage_back__3kwjg",header:"SuccessPage_header__3to3t",schedule:"SuccessPage_schedule__3ni1k",buttons:"SuccessPage_buttons__1k_UA"}}},[[59,1,2]]]);
//# sourceMappingURL=main.3febff35.chunk.js.map