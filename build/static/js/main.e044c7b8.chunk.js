(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{15:function(e,t,n){e.exports={body:"SuccessPage_body__WUx8K",fadeIn:"SuccessPage_fadeIn__2JjdB",svg_wrapper:"SuccessPage_svg_wrapper__2y8hL",svg:"SuccessPage_svg__2G-97",back:"SuccessPage_back__3kwjg",header:"SuccessPage_header__3to3t",schedule:"SuccessPage_schedule__3ni1k",buttons:"SuccessPage_buttons__1k_UA"}},16:function(e,t,n){e.exports={auth:"AuthForm_auth__1VPHD",control:"AuthForm_control__2HUoD",actions:"AuthForm_actions__1qbam",toggle:"AuthForm_toggle__2PgUZ"}},21:function(e,t,n){e.exports={date_show:"Info_date_show__TWPH5",date:"Info_date__2ADOx",fadeDate:"Info_fadeDate__NP26S",body:"Info_body__3t3lD"}},26:function(e,t,n){e.exports={body:"Nav_body__3zycG",body_inner:"Nav_body_inner__2gpR_",next:"Nav_next__2KYUZ",back:"Nav_back__2YAFQ"}},27:function(e,t,n){e.exports={body:"Form_body__1ZhyU",fadeIn:"Form_fadeIn__1hF2H",header:"Form_header__1zcTG",form:"Form_form__2hemT",fadeError:"Form_fadeError__3wwq8"}},36:function(e,t,n){e.exports={wrapper:"Schedule_wrapper__3eulX",fadeIn:"Schedule_fadeIn__-0ebD",wrapper__init:"Schedule_wrapper__init__1NiaL",wrapper_calender:"Schedule_wrapper_calender__1shMa"}},46:function(e,t,n){e.exports={header:"TopNav_header__3HTEc",logo:"TopNav_logo__GlNFX"}},53:function(e,t,n){e.exports={body:"DateInfo_body__2M55L"}},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(49),s=n.n(a),r=n(20),i=n(11),o=n(52),l=(n(68),n(3)),d=(n(69),n(21)),j=n.n(d),u=n(1);var b=function(e){var t=Object(i.c)((function(e){return e.auth.name}));return Object(u.jsxs)("div",{className:j.a.body,children:[Object(u.jsx)("div",{className:j.a.body_header,children:Object(u.jsx)("h2",{children:t})}),Object(u.jsx)("div",{className:j.a.body_header,children:Object(u.jsx)("h1",{children:"Schdule a demo"})}),Object(u.jsxs)("div",{className:e.show?j.a.date_show:j.a.date,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Date:"}),Object(u.jsx)("h3",{children:e.dates})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Time:"}),Object(u.jsx)("h3",{children:"Scheduled time: ".concat(e.timer)})]})]})]})},h=n(2),m=n(26),O=n.n(m);var p=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(h.g)().pathname,i=e.loading?"Submitting...":"Submit";return Object(c.useEffect)((function(){s("/form"===r?i:"Next")}),[r,i]),Object(u.jsx)("div",{className:O.a.body,children:Object(u.jsxs)("div",{className:O.a.body_inner,children:[Object(u.jsx)("div",{onClick:e.onClick,className:O.a.back,children:Object(u.jsx)("h3",{children:"\u2190 Back"})}),Object(u.jsx)("div",{className:O.a.next,children:Object(u.jsx)("button",{type:"submit",onSubmit:e.onSubmit,onClick:e.onClickFor,disabled:!e.disabled,children:a})})]})})};var x=function(e){return Object(u.jsxs)("div",{className:"calender_wrapper",children:[Object(u.jsxs)("div",{className:"calender_wrapper__inner__wrapper",children:[Object(u.jsx)("div",{className:"calender_wrapper__inner__wrapper__info",children:Object(u.jsx)(b,{dates:e.dates,show:e.show,timer:e.timer})}),Object(u.jsx)("div",{className:"calender_wrapper__inner__wrapper__outlet",children:Object(u.jsx)(h.b,{})})]}),Object(u.jsx)(p,{loading:e.loading,onSubmit:e.onSubmit,onClickFor:e.onClickFor,onClick:e.onClick,disabled:e.disabled})]})},_=(n(71),function(e){return fetch("https://emailodejs.herokuapp.com/api/sendmail",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log("response",e),e.json()})).catch((function(e){return console.log(e)}))}),f=n(27),v=n.n(f);var g=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],d=i[1],j=Object(c.useState)(!1),b=Object(l.a)(j,2),h=b[0],m=b[1];return Object(c.useEffect)((function(){e.name.trim().length>=1&&e.purpose.trim().length>=1&&e.email.includes("@")&&e.email.includes(".com")?e.setIsActive(!0):e.setIsActive(!1)}),[e,e.name,e.purpose,e.email]),Object(c.useEffect)((function(){e.email.trim().length>=1&&e.email.includes("@")&&e.email.includes(".com")&&s(!1)}),[e.email]),Object(u.jsxs)("div",{className:v.a.body,children:[Object(u.jsx)("div",{className:v.a.header,children:Object(u.jsx)("h4",{children:"Enter your information"})}),Object(u.jsx)("div",{className:v.a.header,children:Object(u.jsx)("h1",{children:"Personal Data"})}),Object(u.jsx)("div",{className:v.a.form,children:Object(u.jsxs)("form",{onSubmit:function(){},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Name"}),Object(u.jsx)("input",{type:"text",placeholder:"Please Enter your name",value:e.name,onChange:function(t){e.setName(t.target.value),m(!1)},onBlur:function(){0===e.name.trim().length?m(!0):m(!1)},required:!0}),h&&Object(u.jsx)("p",{children:"Name must be inputed"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Purpose Of meeting:"}),Object(u.jsx)("input",{type:"text",placeholder:"Please Enter meeting purpose",value:e.purpose,onChange:function(t){e.setPurpose(t.target.value),d(!1)},onBlur:function(){0===e.purpose.trim().length?d(!0):d(!1)},required:!0}),o&&Object(u.jsx)("p",{children:"Purpose must be inputed"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Email:"}),Object(u.jsx)("input",{type:"email",placeholder:"Please Enter your email",value:e.email,onChange:function(t){e.setEmail(t.target.value)},onBlur:function(){0!==e.email.trim().length||e.email.includes("@")||e.email.includes(".com")?s(!1):s(!0)},required:!0}),a&&Object(u.jsx)("p",{children:"Email must be inputed"})]})]})})]})},N=n(54),w=n.n(N);n(72);var S=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(u.jsxs)("div",{className:"calendar-container__time",children:[Object(u.jsx)("h3",{children:"Time:"}),Object(u.jsx)("div",{className:"calendar-container__time__inner",children:e.time.map((function(t){return Object(u.jsx)("h1",{onClick:function(){e.setTimer(t),s(t),e.setIsActive(!0),e.setShow(!0)},className:"".concat(a===t&&"activeButton"),children:t},t)}))})]})},y=n(53),k=n.n(y);var C=function(){return Object(u.jsx)("div",{className:k.a.body,children:Object(u.jsx)("div",{children:"Select a Date and Time"})})},P=n(36),I=n.n(P);var T=function(e){return Object(u.jsxs)("div",{className:I.a.wrapper,children:[Object(u.jsxs)("div",{className:I.a.wrapper__init,children:[Object(u.jsx)("div",{children:Object(u.jsx)(C,{date:e.date})}),Object(u.jsx)("div",{className:I.a.wrapper_calender,children:Object(u.jsx)(w.a,{minDate:new Date,onChange:e.onChange,value:e.date})})]}),Object(u.jsx)("div",{children:Object(u.jsx)(S,{setShow:e.setShow,setTimer:e.setTimer,setIsActive:e.setIsActive,time:e.time})})]})},F=n(15),E=n.n(F);var L=function(e){var t=e.loading?"Resending...":"Resend Email",n=Object(h.h)();return Object(u.jsxs)("div",{className:E.a.body,children:[Object(u.jsx)("div",{className:E.a.svg_wrapper,children:Object(u.jsx)("div",{className:E.a.svg,children:Object(u.jsx)("svg",{width:"48",height:"35",viewBox:"0 0 48 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M46.5037 6.7984L19.3597 33.7552C17.9677 35.1376 15.7637 35.1376 14.3717 33.7552L1.49566 20.968C0.10366 19.5856 0.10366 17.3968 1.49566 16.0144C2.88766 14.632 5.09166 14.632 6.48366 16.0144L16.8657 26.3248L41.5157 1.8448C42.9077 0.462399 45.1117 0.462399 46.5037 1.8448C47.8957 3.2272 47.8957 5.416 46.5037 6.7984Z",fill:"#5793E5"})})})}),Object(u.jsx)("div",{className:E.a.header,children:Object(u.jsx)("h2",{children:"We just scheduled a demo for you."})}),Object(u.jsx)("div",{className:E.a.header,children:Object(u.jsxs)("p",{children:["A calendar invitation for your upcoming demo session has been sent to your email (",e.email,")"]})}),Object(u.jsxs)("div",{className:E.a.schedule,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Date:"}),Object(u.jsxs)("p",{children:[e.dates,"."]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Time:"}),Object(u.jsx)("p",{children:e.timer})]})]}),Object(u.jsxs)("div",{className:E.a.buttons,children:[Object(u.jsx)("button",{onClick:function(){n("/"),e.setEmail(""),e.setPhoneNumber(""),e.setName("")},children:"Get back home"}),Object(u.jsx)("div",{onClick:e.onClick,children:Object(u.jsx)("p",{children:t})})]})]})},A=n(44),D=n(28),B=n.n(D),U=n(22),H=n(45),q=n(55),J=n.n(q),R=n(56),Z=n(24),G=Object(H.b)({name:"authentication",initialState:{token:"",isLoggedIn:!1,name:"",email:"",expirationTime:null},reducers:{login:function(e,t){var n=t.payload,c=1e3*n.expiresIn;e.token=n.idToken,e.isLoggedIn=!0,e.name=n.displayName,e.expirationTime=c,e.email=n.email},logout:function(e){e.token="",e.isLoggedIn=!1,e.name="",e.email="",e.expirationTime=null}}}),Y={key:"authentication",storage:J.a},z=Object(R.a)(Y,G.reducer),W=Object(H.a)({reducer:{auth:z},middleware:[Z.a]}),M=G.actions,K=W,X=(n(94),n(16)),Q=n.n(X);n(95).config();var V=function(){var e=Object(c.useState)(!0),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(l.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)(""),b=Object(l.a)(j,2),m=b[0],O=b[1],p=Object(c.useState)(""),x=Object(l.a)(p,2),_=x[0],f=x[1],v=Object(c.useState)(!1),g=Object(l.a)(v,2),N=g[0],w=g[1],S=Object(c.useState)(""),y=Object(l.a)(S,2),k=y[0],C=y[1],P=Object(i.b)(),I=Object(h.h)();return Object(u.jsxs)("section",{className:Q.a.auth,children:[Object(u.jsx)(U.a,{}),Object(u.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();if(n){var t=function(){var e=Object(A.a)(B.a.mark((function e(){var t,n,c;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZhlPg41S1YCUcwLFa9Ia5FRvL1NiTlno",{method:"POST",body:JSON.stringify({email:_,password:o,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:if(t=e.sent,w(!1),!t.ok){e.next=14;break}return e.next=8,t.json();case 8:n=e.sent,console.log(n),I("/"),P(M.login(n)),e.next=18;break;case 14:return e.next=16,t.json();case 16:c=e.sent,U.b.error(c.error.message,{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}else{var c=function(){var e=Object(A.a)(B.a.mark((function e(){var t,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZhlPg41S1YCUcwLFa9Ia5FRvL1NiTlno",{method:"POST",body:JSON.stringify({email:_,password:o,displayName:k,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 3:if(t=e.sent,w(!1),!t.ok){e.next=13;break}U.b.success("Account successfully created, Proceed to login",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),C(""),f(""),d(""),O(""),e.next=17;break;case 13:return e.next=15,t.json();case 15:n=e.sent,U.b.error(n.error.message,{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"});case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(o===m)return c();U.b.warning("Passwords don't match",{position:"top-left",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}},children:[!n&&Object(u.jsxs)("div",{className:Q.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Name"}),Object(u.jsx)("input",{onChange:function(e){C(e.target.value)},value:k,type:"text",id:"name"})]}),Object(u.jsxs)("div",{className:Q.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Email"}),Object(u.jsx)("input",{onChange:function(e){f(e.target.value)},value:_,type:"email",id:"email",required:!0})]}),Object(u.jsxs)("div",{className:Q.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{value:o,onChange:function(e){d(e.target.value)},type:"password",id:"password",required:!0})]}),!n&&Object(u.jsxs)("div",{className:Q.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(u.jsx)("input",{onChange:function(e){O(e.target.value)},value:m,type:"password",id:"confirmPassword",required:!0})]}),!N&&Object(u.jsxs)("div",{className:Q.a.actions,children:[Object(u.jsx)("button",{children:n?"Login":"Create Account"}),Object(u.jsx)("button",{type:"button",className:Q.a.toggle,onClick:function(){a((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})]})]})]})},$=n(46),ee=n.n($);var te=function(){var e=Object(i.c)((function(e){return e.auth.isLoggedIn})),t=Object(i.c)((function(e){return e.auth.expirationTime})),n=Object(h.h)(),a=Object(i.b)();return Object(c.useEffect)((function(){var e=setTimeout((function(){a(M.logout())}),t);return function(){clearTimeout(e)}})),Object(u.jsxs)("header",{className:ee.a.header,children:[Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("div",{className:ee.a.logo,children:"Schedule"})}),Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[!e&&Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"/auth",children:"Login"})}),e&&Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(){a(M.logout()),n("/auth")},children:"Logout"})})]})})]})};var ne=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(new Date),r=Object(l.a)(s,2),o=r[0],d=r[1],j=Object(c.useState)("00:00"),b=Object(l.a)(j,2),m=b[0],O=b[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],N=f[1],w=Object(c.useState)(!1),S=Object(l.a)(w,2),y=S[0],k=S[1],C=Object(c.useState)(""),P=Object(l.a)(C,2),I=P[0],F=P[1],E=Object(c.useState)(!1),A=Object(l.a)(E,2),D=A[0],B=A[1],U=Object(c.useState)(""),H=Object(l.a)(U,2),q=H[0],J=H[1],R=Object(c.useState)(""),Z=Object(l.a)(R,2),G=Z[0],Y=Z[1],z=Object(c.useState)(""),W=Object(l.a)(z,2),M=W[0],K=W[1],X=Object(h.g)().pathname;Object(c.useEffect)((function(){var e=setInterval((function(){var e=o.toLocaleString("en-US",{month:"long"}),t=o.getDate(),n=o.getFullYear();N("".concat(t," ").concat(e,", ").concat(n))}),10);return function(){clearInterval(e)}}),[o]);var Q=Object(i.c)((function(e){return e.auth.isLoggedIn})),$=Object(i.c)((function(e){return e.auth.email})),ee=Object(h.h)(),ne=function(){"/form"===X?(B(!0),_({name:q,purpose:G,userEmail:$,email:I,dates:v,timer:m}).then((function(e){e.err?console.log(e.err):(console.log(e),B(!1),ee("/final"))}))):ee("/form")};return Object(u.jsxs)("div",{className:"main__wrapper1",children:[Object(u.jsx)(te,{}),Object(u.jsx)("div",{className:"calendar-container1",children:Object(u.jsxs)(h.e,{children:[Object(u.jsxs)(h.c,{path:"/",element:Q&&Object(u.jsx)(x,{loading:D,onClickFor:ne,onClick:function(){ee("/final"===X?"/form":"/")},disabled:n,show:y,dates:v,timer:m})||!Q&&Object(u.jsx)(h.a,{to:"/auth"}),children:[Object(u.jsx)(h.c,{path:"/",element:Object(u.jsx)(T,{show:y,setShow:k,isActive:n,setIsActive:a,timer:m,setTimer:O,time:["00:00","00:30","01:00","01:30","02:00","02:30","03:00","03:30","04:00","04:30","05:00","05:30","06:00","06:30","07:00","07:30","08:00","08:30","09:00","09:30","10:00","10:30","11:00","11:30","12:00","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30"],date:o,onChange:d})}),Object(u.jsx)(h.c,{path:"form",element:Q&&Object(u.jsx)(g,{purpose:G,setPurpose:Y,name:q,setName:J,phoneNumber:M,setPhoneNumber:K,email:I,setEmail:F,onClick:ne,setIsActive:a})||!Q&&Object(u.jsx)(h.a,{to:"/auth"})})]}),!Q&&Object(u.jsx)(h.c,{path:"auth",element:Object(u.jsx)(V,{})}),Q&&Object(u.jsx)(h.c,{path:"/final",element:Object(u.jsx)(L,{loading:D,onClick:function(){B(!0),_({name:q,purpose:G,userEmail:$,email:I,dates:v,timer:m}).then((function(e){e.err?console.log(e.err):(console.log(e),B(!1))}))},setName:J,setPhoneNumber:K,setEmail:F,email:I,dates:v,timer:m})}),Object(u.jsx)(h.c,{path:"*",element:Object(u.jsx)(h.a,{to:"/"})})]})})]})},ce=n(33),ae=Object(ce.a)(K);s.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(r.a,{children:Object(u.jsx)(i.a,{store:K,children:Object(u.jsx)(o.a,{loading:null,persistor:ae,children:Object(u.jsx)(ne,{})})})}))}},[[99,1,2]]]);
//# sourceMappingURL=main.e044c7b8.chunk.js.map