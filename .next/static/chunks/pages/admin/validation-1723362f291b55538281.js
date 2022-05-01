_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"/kxI":function(e,a,t){"use strict";var l=t("wx14"),s=t("zLVn"),c=t("q1tI"),i=t.n(c),n=t("17x9"),r=t.n(n),d=t("TSYQ"),o=t.n(d),j=t("33Jr"),b={tag:j.tagPropType,className:r.a.string,cssModule:r.a.object,innerRef:r.a.oneOfType([r.a.object,r.a.string,r.a.func])},m=function(e){var a=e.className,t=e.cssModule,c=e.innerRef,n=e.tag,r=Object(s.a)(e,["className","cssModule","innerRef","tag"]),d=Object(j.mapToCssModules)(o()(a,"card-body"),t);return i.a.createElement(n,Object(l.a)({},r,{className:d,ref:c}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},"EvW+":function(e,a,t){"use strict";var l=t("wx14"),s=t("zLVn"),c=t("q1tI"),i=t.n(c),n=t("17x9"),r=t.n(n),d=t("TSYQ"),o=t.n(d),j=t("33Jr"),b={tag:j.tagPropType,active:r.a.bool,className:r.a.string,cssModule:r.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.active,n=e.tag,r=Object(s.a)(e,["className","cssModule","active","tag"]),d=Object(j.mapToCssModules)(o()(a,!!c&&"active","breadcrumb-item"),t);return i.a.createElement(n,Object(l.a)({},r,{className:d,"aria-current":c?"page":void 0}))};m.propTypes=b,m.defaultProps={tag:"li"},a.a=m},KXr7:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/validation",function(){return t("QfQ/")}])},"QfQ/":function(e,a,t){"use strict";t.r(a);var l=t("nKUr"),s=t("ODXe"),c=t("q1tI"),i=t.n(c),n=t("TSYQ"),r=t.n(n),d=t("1Yj4"),o=t("ok1R"),j=t("BLzl"),b=t("afej"),m=t("/kxI"),u=t("rhny"),h=t("uBiN"),v=t("L3zb"),x=t("jrRI"),O=t("sOKU"),p=t("q7Gj"),f=t("re1l"),N=t("Z+s4"),g=t("i6E2"),y=t("ncAF");function k(){var e=i.a.useState(!1),a=Object(s.a)(e,2),t=a[0],c=a[1],n=i.a.useState("Mark"),g=Object(s.a)(n,2),k=g[0],S=g[1],C=i.a.useState(null),F=Object(s.a)(C,2),w=F[0],T=F[1],P=i.a.useState("Otto"),q=Object(s.a)(P,2),L=q[0],M=q[1],_=i.a.useState(null),D=Object(s.a)(_,2),U=D[0],E=D[1],V=i.a.useState(""),I=Object(s.a)(V,2),z=I[0],Q=I[1],Y=i.a.useState(null),J=Object(s.a)(Y,2),A=J[0],R=J[1],X=i.a.useState(""),K=Object(s.a)(X,2),Z=K[0],G=K[1],B=i.a.useState(null),W=Object(s.a)(B,2),H=W[0],$=W[1],ee=i.a.useState(""),ae=Object(s.a)(ee,2),te=ae[0],le=ae[1],se=i.a.useState(null),ce=Object(s.a)(se,2),ie=ce[0],ne=ce[1],re=i.a.useState(""),de=Object(s.a)(re,2),oe=de[0],je=de[1],be=i.a.useState(null),me=Object(s.a)(be,2),ue=me[0],he=me[1],ve=i.a.useState(!1),xe=Object(s.a)(ve,2),Oe=xe[0],pe=xe[1],fe=i.a.useState(null),Ne=Object(s.a)(fe,2),ge=Ne[0],ye=Ne[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y.a,{name:"Form validation",parentName:"Forms"}),Object(l.jsx)(d.a,{className:"mt--6",fluid:!0,children:Object(l.jsx)(o.a,{children:Object(l.jsx)("div",{className:"col",children:Object(l.jsxs)("div",{className:"card-wrapper",children:[Object(l.jsxs)(j.a,{children:[Object(l.jsx)(b.a,{children:Object(l.jsx)("h3",{className:"mb-0",children:"Custom styles"})}),Object(l.jsxs)(m.a,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(u.a,{lg:"8",children:Object(l.jsxs)("p",{className:"mb-0",children:["For custom form validation messages, you\u2019ll need to add the novalidate boolean attribute to your"," ",Object(l.jsx)("code",{children:"<form>"}),". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"When attempting to submit, you\u2019ll see the"," ",Object(l.jsx)("code",{children:":invalid"})," and ",Object(l.jsx)("code",{children:":valid"})," styles applied to your form controls."]})})}),Object(l.jsx)("hr",{}),Object(l.jsxs)(h.a,{className:"needs-validation",noValidate:!0,children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsxs)(u.a,{className:"mb-3",md:"4",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationCustom01",children:"First name"}),Object(l.jsx)(v.a,{defaultValue:"Mark",id:"validationCustom01",placeholder:"First name",type:"text",valid:"valid"===w,invalid:"invalid"===w,onChange:function(e){S(e.target.value),""===e.target.value?T("invalid"):T("valid")}}),Object(l.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(l.jsxs)(u.a,{className:"mb-3",md:"4",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationCustom02",children:"Last name"}),Object(l.jsx)(v.a,{defaultValue:"Otto",id:"validationCustom02",placeholder:"Last name",type:"text",valid:"valid"===U,invalid:"invalid"===U,onChange:function(e){M(e.target.value),""===e.target.value?E("invalid"):E("valid")}}),Object(l.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]}),Object(l.jsxs)(u.a,{className:"mb-3",md:"4",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationCustomUsername",children:"Username"}),Object(l.jsx)(v.a,{"aria-describedby":"inputGroupPrepend",id:"validationCustomUsername",placeholder:"Username",type:"text",valid:"valid"===A,invalid:"invalid"===A,onChange:function(e){Q(e.target.value),""===e.target.value?R("invalid"):R("valid")}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please choose a username."})]})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsxs)(u.a,{className:"mb-3",md:"6",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationCustom03",children:"City"}),Object(l.jsx)(v.a,{id:"validationCustom03",placeholder:"City",type:"text",valid:"valid"===H,invalid:"invalid"===H,onChange:function(e){G(e.target.value),""===e.target.value?$("invalid"):$("valid")}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid city."})]}),Object(l.jsxs)(u.a,{className:"mb-3",md:"3",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationCustom04",children:"State"}),Object(l.jsx)(v.a,{id:"validationCustom04",placeholder:"State",type:"text",valid:"valid"===ie,invalid:"invalid"===ie,onChange:function(e){le(e.target.value),""===e.target.value?ne("invalid"):ne("valid")}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid state."})]}),Object(l.jsxs)(u.a,{className:"mb-3",md:"3",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationCustom05",children:"Zip"}),Object(l.jsx)(v.a,{id:"validationCustom05",placeholder:"Zip",type:"text",valid:"valid"===ue,invalid:"invalid"===ue,onChange:function(e){je(e.target.value),""===e.target.value?he("invalid"):he("valid")}}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid zip."})]})]}),Object(l.jsx)(x.a,{children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox mb-3",children:[Object(l.jsx)("input",{className:"custom-control-input",defaultValue:"",id:"invalidCheck",type:"checkbox",valid:("valid"===ge).toString(),invalid:("invalid"===ge).toString(),onChange:function(e){pe(e.target.value),""===e.target.value?ye("invalid"):ye("valid")}}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"invalidCheck",children:"Agree to terms and conditions"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"You must agree before submitting."})]})}),Object(l.jsx)(O.a,{color:"primary",type:"button",onClick:function(){T(""===k?"invalid":"valid"),E(""===L?"invalid":"valid"),R(""===z?"invalid":"valid"),$(""===Z?"invalid":"valid"),ne(""===te?"invalid":"valid"),he(""===oe?"invalid":"valid"),ye(!1===Oe?"invalid":"valid")},children:"Submit form"})]})]})]}),Object(l.jsxs)(j.a,{children:[Object(l.jsx)(b.a,{children:Object(l.jsx)("h3",{className:"mb-0",children:"Browser defaults"})}),Object(l.jsxs)(m.a,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(u.a,{lg:"8",children:Object(l.jsxs)("p",{className:"mb-0",children:["Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you\u2019ll see a slightly different style of feedback. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."]})})}),Object(l.jsx)("hr",{}),Object(l.jsxs)(h.a,{children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(u.a,{className:"mb-3",md:"4",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationDefault01",children:"First name"}),Object(l.jsx)(v.a,{defaultValue:"Mark",id:"validationDefault01",placeholder:"First name",required:!0,type:"text"})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"4",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationDefault02",children:"Last name"}),Object(l.jsx)(v.a,{defaultValue:"Otto",id:"validationDefault02",placeholder:"Last name",required:!0,type:"text"})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"4",children:Object(l.jsxs)(x.a,{className:r()({focused:t}),children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationDefaultUsername",children:"Username"}),Object(l.jsxs)(p.a,{children:[Object(l.jsx)(f.a,{addonType:"prepend",children:Object(l.jsx)(N.a,{id:"inputGroupPrepend2",children:"@"})}),Object(l.jsx)(v.a,{"aria-describedby":"inputGroupPrepend2",id:"validationDefaultUsername",placeholder:"Username",required:!0,type:"text",onFocus:function(){return c(!0)},onBlur:function(){return c(!1)}})]})]})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(u.a,{className:"mb-3",md:"6",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationDefault03",children:"City"}),Object(l.jsx)(v.a,{id:"validationDefault03",placeholder:"City",required:!0,type:"text"})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"3",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationDefault04",children:"State"}),Object(l.jsx)(v.a,{id:"validationDefault04",placeholder:"State",required:!0,type:"text"})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"3",children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationDefault05",children:"Zip"}),Object(l.jsx)(v.a,{id:"validationDefault05",placeholder:"Zip",required:!0,type:"text"})]})})]}),Object(l.jsx)(x.a,{children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox mb-3",children:[Object(l.jsx)("input",{className:"custom-control-input",defaultValue:"",id:"invalidCheck2",required:!0,type:"checkbox"}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"invalidCheck2",children:"Agree to terms and conditions"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"You must agree before submitting."})]})}),Object(l.jsx)(O.a,{color:"primary",type:"submit",children:"Submit form"})]})]})]}),Object(l.jsxs)(j.a,{children:[Object(l.jsx)(b.a,{children:Object(l.jsx)("h3",{className:"mb-0",children:"Server side"})}),Object(l.jsxs)(m.a,{children:[Object(l.jsx)(o.a,{children:Object(l.jsx)(u.a,{lg:"8",children:Object(l.jsxs)("p",{className:"mb-0",children:["We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with ",Object(l.jsx)("code",{children:".is-invalid"})," and"," ",Object(l.jsx)("code",{children:".is-valid"}),". Note that"," ",Object(l.jsx)("code",{children:".invalid-feedback"})," is also supported with these classes."]})})}),Object(l.jsx)("hr",{}),Object(l.jsxs)(h.a,{children:[Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(u.a,{className:"mb-3",md:"4",children:Object(l.jsxs)(x.a,{className:"has-success",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationServer01",children:"First name"}),Object(l.jsx)(v.a,{className:"is-valid",defaultValue:"Mark",id:"validationServer01",placeholder:"First name",required:!0,type:"text"}),Object(l.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"4",children:Object(l.jsxs)(x.a,{className:"has-success",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationServer02",children:"Last name"}),Object(l.jsx)(v.a,{className:"is-valid",defaultValue:"Otto",id:"validationServer02",placeholder:"Last name",required:!0,type:"text"}),Object(l.jsx)("div",{className:"valid-feedback",children:"Looks good!"})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"4",children:Object(l.jsxs)(x.a,{className:"has-danger",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationServerUsername",children:"Username"}),Object(l.jsx)(v.a,{"aria-describedby":"inputGroupPrepend3",className:"is-invalid",id:"validationServerUsername",placeholder:"Username",required:!0,type:"text"})]})})]}),Object(l.jsxs)("div",{className:"form-row",children:[Object(l.jsx)(u.a,{className:"mb-3",md:"6",children:Object(l.jsxs)(x.a,{className:"has-danger",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationServer03",children:"City"}),Object(l.jsx)(v.a,{className:"is-invalid",id:"validationServer03",placeholder:"City",required:!0,type:"text"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid city."})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"3",children:Object(l.jsxs)(x.a,{className:"has-danger",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationServer04",children:"State"}),Object(l.jsx)(v.a,{className:"is-invalid",id:"validationServer04",placeholder:"State",required:!0,type:"text"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid state."})]})}),Object(l.jsx)(u.a,{className:"mb-3",md:"3",children:Object(l.jsxs)(x.a,{className:"has-danger",children:[Object(l.jsx)("label",{className:"form-control-label",htmlFor:"validationServer05",children:"Zip"}),Object(l.jsx)(v.a,{className:"is-invalid",id:"validationServer05",placeholder:"Zip",required:!0,type:"text"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"Please provide a valid zip."})]})})]}),Object(l.jsx)(x.a,{className:"has-danger",children:Object(l.jsxs)("div",{className:"custom-control custom-checkbox mb-3",children:[Object(l.jsx)("input",{className:"custom-control-input is-invalid",defaultValue:"",id:"invalidCheck3",required:!0,type:"checkbox"}),Object(l.jsx)("label",{className:"custom-control-label",htmlFor:"invalidCheck3",children:"Agree to terms and conditions"}),Object(l.jsx)("div",{className:"invalid-feedback",children:"You must agree before submitting."})]})}),Object(l.jsx)(O.a,{color:"primary",type:"submit",children:"Submit form"})]})]})]})]})})})})]})}k.layout=g.a,a.default=k},XI7o:function(e,a,t){"use strict";var l=t("wx14"),s=t("zLVn"),c=t("q1tI"),i=t.n(c),n=t("17x9"),r=t.n(n),d=t("TSYQ"),o=t.n(d),j=t("33Jr"),b={tag:j.tagPropType,listTag:j.tagPropType,className:r.a.string,listClassName:r.a.string,cssModule:r.a.object,children:r.a.node,"aria-label":r.a.string},m=function(e){var a=e.className,t=e.listClassName,c=e.cssModule,n=e.children,r=e.tag,d=e.listTag,b=e["aria-label"],m=Object(s.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),u=Object(j.mapToCssModules)(o()(a),c),h=Object(j.mapToCssModules)(o()("breadcrumb",t),c);return i.a.createElement(r,Object(l.a)({},m,{className:u,"aria-label":b}),i.a.createElement(d,{className:h},n))};m.propTypes=b,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},afej:function(e,a,t){"use strict";var l=t("wx14"),s=t("zLVn"),c=t("q1tI"),i=t.n(c),n=t("17x9"),r=t.n(n),d=t("TSYQ"),o=t.n(d),j=t("33Jr"),b={tag:j.tagPropType,className:r.a.string,cssModule:r.a.object},m=function(e){var a=e.className,t=e.cssModule,c=e.tag,n=Object(s.a)(e,["className","cssModule","tag"]),r=Object(j.mapToCssModules)(o()(a,"card-header"),t);return i.a.createElement(c,Object(l.a)({},n,{className:r}))};m.propTypes=b,m.defaultProps={tag:"div"},a.a=m},i6E2:function(e,a,t){"use strict";var l=t("nKUr"),s=t("ODXe"),c=t("q1tI"),i=t.n(c),n=t("20a2"),r=t("jnuQ"),d=t("SbLS"),o=t("RG8o"),j=t("8cHP");a.a=Object(n.withRouter)((function(e){var a=e.router,c=e.children,n=i.a.useState(!0),b=Object(s.a)(n,2),m=b[0],u=b[1],h=function(e){document.body.classList.contains("g-sidenav-pinned")?(document.body.classList.remove("g-sidenav-pinned"),document.body.classList.add("g-sidenav-hidden")):(document.body.classList.add("g-sidenav-pinned"),document.body.classList.remove("g-sidenav-hidden")),u(!m)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{routes:j.a,toggleSidenav:h,sidenavOpen:m,logo:{innerLink:"/",imgSrc:t("v3H1"),imgAlt:"..."}}),Object(l.jsxs)("div",{className:"main-content",children:[Object(l.jsx)(r.a,{theme:-1===a.pathname.indexOf("admin/alternative-dashboard")?"dark":"light",toggleSidenav:h,sidenavOpen:m,brandText:function(e){for(var t=0;t<j.a.length;t++)if(-1!==a.pathname.indexOf(j.a[t].layout+j.a[t].path))return j.a[t].name;return"Brand"}(a.pathname)}),c,Object(l.jsx)(d.a,{})]}),m?Object(l.jsx)("div",{className:"backdrop d-xl-none",onClick:h}):null]})}))},ncAF:function(e,a,t){"use strict";var l=t("nKUr"),s=(t("q1tI"),t("1Yj4")),c=t("ok1R"),i=t("rhny"),n=t("XI7o"),r=t("EvW+"),d=t("sOKU");a.a=function(e){var a=e.name,t=e.parentName;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"header header-dark bg-dark pb-6 content__title content__title--calendar",children:Object(l.jsx)(s.a,{fluid:!0,children:Object(l.jsx)("div",{className:"header-body",children:Object(l.jsxs)(c.a,{className:"align-items-center py-4",children:[Object(l.jsxs)(i.a,{lg:"6",xs:"7",children:[Object(l.jsx)("h6",{className:"fullcalendar-title h2 text-white d-inline-block mb-0",children:a})," ",Object(l.jsxs)(n.a,{className:"d-none d-md-inline-block ml-lg-4",listClassName:"breadcrumb-links breadcrumb-dark",children:[Object(l.jsx)(r.a,{children:Object(l.jsx)("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},children:Object(l.jsx)("i",{className:"fas fa-home"})})}),Object(l.jsx)(r.a,{children:Object(l.jsx)("a",{href:"#pablo",onClick:function(e){return e.preventDefault()},children:t})}),Object(l.jsx)(r.a,{"aria-current":"page",className:"active",children:a})]})]}),Object(l.jsxs)(i.a,{className:"mt-3 mt-md-0 text-md-right",lg:"6",xs:"5",children:[Object(l.jsx)(d.a,{className:"btn-neutral",color:"default",size:"sm",children:"New"}),Object(l.jsx)(d.a,{className:"btn-neutral",color:"default",size:"sm",children:"Filters"})]})]})})})})})}},v3H1:function(e,a){e.exports="/_next/static/images/nextjs_argon_black-00653defbe44f7b5ed0e3926ec44f265.png"}},[["KXr7",0,2,1,3,4]]]);