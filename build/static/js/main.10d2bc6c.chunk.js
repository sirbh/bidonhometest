(this["webpackJsonptenent-app"]=this["webpackJsonptenent-app"]||[]).push([[0],{105:function(e,t,n){},114:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(48),i=n.n(a),o=(n(105),n(16)),d=n(25),u=n(35),s=n(5),l=n(8),p=n(23),j=Object(p.b)({name:"products",initialState:{products:[],filterQuery:""},reducers:{addProduct:function(e,t){var n={prodId:Math.random().toString(),productName:t.payload.productName,discription:0===t.payload.discription.length?null:t.payload.discription,quantity:t.payload.quantity,price:t.payload.price,image:0===t.payload.image.length?null:t.payload.image};e.products.push(n),e.filterQuery=""},filterProducts:function(e,t){e.filterQuery=t.payload},editProduct:function(e,t){var n=e.products.findIndex((function(e){return e.prodId===t.payload.prodId}));e.products[n].productName=t.payload.productName,e.products[n].discription=t.payload.discription,e.products[n].quantity=t.payload.quantity,e.products[n].price=t.payload.price,e.products[n].image=t.payload.image},sortPrice:function(e,t){t.payload?e.products=e.products.sort((function(e,t){return e.price-t.price})):e.products=e.products.sort((function(e,t){return-(e.price-t.price)}))},sortQuantity:function(e,t){t.payload?e.products=e.products.sort((function(e,t){return e.quantity-t.quantity})):e.products=e.products.sort((function(e,t){return-(e.quantity-t.quantity)}))}}}),b=j.reducer,O=j.actions,h=O.addProduct,m=O.filterProducts,x=O.editProduct,f=O.sortPrice,y=O.sortQuantity,v=n(33),g=n(29),N=n(26),_=n.n(N),q=n(1),I=function(){var e=Object(s.c)((function(e){return e.authenticate.isAuth})),t=Object(s.c)((function(e){return e.authenticate.userName})),n=Object(s.b)(),r=Object(c.useState)(""),a=Object(o.a)(r,2),i=a[0],p=a[1],j=e?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsxs)(g.b,{to:"#",className:_.a.Icon,activeStyle:{color:"black"},children:[Object(q.jsx)(u.a,{icon:d.d,style:{marginRight:"10px"}}),t]}),Object(q.jsxs)(g.b,{to:"/",className:_.a.Icon,onClick:function(){n(Object(v.c)()),window.alert("you have logged out!!")},children:[Object(q.jsx)(u.a,{icon:d.a,style:{marginRight:"10px"}}),"LogOut"]})]}):Object(q.jsxs)(g.b,{to:"/",className:_.a.Icon,onClick:function(){n(Object(l.c)("login"))},children:[Object(q.jsx)(u.a,{icon:d.a,style:{marginRight:"10px"}}),"Login"]});return Object(q.jsxs)("div",{className:_.a.Header,children:[Object(q.jsx)("div",{className:_.a.Holder,children:Object(q.jsx)("h1",{children:"BIDonHomes"})}),Object(q.jsx)("div",{className:_.a.SearchBar,children:Object(q.jsx)("input",{placeholder:"Search Product",value:i,onChange:function(e){p(e.target.value),n(m(e.target.value))}})}),Object(q.jsx)("div",{className:_.a.Nav,children:j})]})},P=function(e){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(I,{}),e.children]})},S=n(4),w=(n(114),n(89)),k=n.n(w),B=function(e){var t=e.top;return Object(q.jsxs)("div",{className:k.a.AddButton,onClick:e.onClick,style:{top:t},children:[Object(q.jsx)(u.a,{icon:e.icon,size:"1x"}),e.children]})},C=n(90),A=n.n(C),F=function(e){return Object(q.jsx)("div",{className:A.a.BackDrop,onClick:e.onClick,children:e.children})},H=n(54),R=n.n(H),M=n(91),L=n(28),D=n(17),Q=n(11),V=n(9),U=n(34),E=function(){var e=Object(s.b)();return Object(q.jsx)(D.b,{validateOnBlur:!1,validateOnChange:!1,initialValues:{productName:"",discription:"",price:"",quantity:"",image:""},validationSchema:Q.b({productName:Q.c().required("Required").required("Required"),price:Q.a("not a number").test("IsPositve","Must be postive",(function(e){return e>0})).required("Required"),quantity:Q.a("not a number").test("IsPositve","Must be postive",(function(e){return e>0})).required("Required")}),onSubmit:function(t){e(h(Object(L.a)({},t))),e(Object(l.b)())},children:Object(q.jsxs)(D.a,{noValidate:!0,children:[Object(q.jsx)(V.a,{name:"productName",type:"text",placeholder:"Product Name"}),Object(q.jsx)(V.a,{name:"discription",type:"text",placeholder:"Discription"}),Object(q.jsx)(V.a,{name:"price",type:"number",placeholder:"Price"}),Object(q.jsx)(V.a,{name:"quantity",type:"number",placeholder:"Quantity"}),Object(q.jsx)(V.a,{name:"image",type:"text",placeholder:"Add Img URL"}),Object(q.jsx)(U.a,{name:"ADD"})]})})},T=function(e){var t=Object(s.b)(),n=Object(s.c)((function(e){return e.products.products})),c=n.findIndex((function(t){return t.prodId===e.data})),r=n[c];return Object(q.jsx)(D.b,{validateOnBlur:!1,validateOnChange:!1,initialValues:{productName:r.productName,discription:r.discription,price:r.price,quantity:r.quantity,image:r.image},validationSchema:Q.b({productName:Q.c().required("Required").required("Required"),price:Q.a("not a number").test("IsPositve","Must be postive",(function(e){return e>0})).required("Required"),quantity:Q.a("not a number").test("IsPositve","Must be postive",(function(e){return e>0})).required("Required")}),onSubmit:function(n){t(x(Object(L.a)(Object(L.a)({},n),{},{prodId:e.data}))),t(Object(l.b)())},children:Object(q.jsxs)(D.a,{noValidate:!0,children:[Object(q.jsx)(V.a,{name:"productName",type:"text",placeholder:"Product Name"}),Object(q.jsx)(V.a,{name:"discription",type:"text",placeholder:"Discription"}),Object(q.jsx)(V.a,{name:"price",type:"number",placeholder:"Price"}),Object(q.jsx)(V.a,{name:"quantity",type:"number",placeholder:"Quantity"}),Object(q.jsx)(V.a,{name:"image",type:"text",placeholder:"Add Img URL"}),Object(q.jsx)(U.a,{name:"EDIT"})]})})},z=function(e){var t,n,c=Object(s.c)((function(e){return e.modal.type}));switch(c){case"login":t="Login",n=Object(q.jsx)(M.default,{});break;case"add-product":t="Add Product",n=Object(q.jsx)(E,{});break;default:t="Edit Product",n=Object(q.jsx)(T,{data:c})}return Object(q.jsxs)("div",{className:R.a.FormModal,onClick:function(e){e.stopPropagation()},children:[Object(q.jsx)("div",{className:R.a.Head,children:Object(q.jsx)("h1",{children:t})}),Object(q.jsx)("div",{className:R.a.Form,children:n})]})},Y=r.a.lazy((function(){return n.e(3).then(n.bind(null,219))})),J=r.a.lazy((function(){return Promise.resolve().then(n.bind(null,91))}));var X=function(){var e=Object(s.c)((function(e){return e.modal.show})),t=Object(s.c)((function(e){return e.authenticate.isAuth})),n=Object(s.c)((function(e){return e.products.products})),r=Object(s.b)(),a=Object(c.useState)(!0),i=Object(o.a)(a,2),u=i[0],p=i[1];return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsx)(B,{onClick:function(){t?r(Object(l.c)("add-product")):window.alert("please LogIn first to add product !!!")},top:"75px",icon:d.b,children:"Add Product"}),0!==n.length&&Object(q.jsx)(B,{onClick:function(){r(f(u)),p((function(e){return!e}))},top:"140px",icon:d.c,children:"Sort Price"}),0!==n.length&&Object(q.jsx)(B,{onClick:function(){r(y(u)),p((function(e){return!e}))},top:"206px",icon:d.c,children:"Sort Quantity"}),e&&Object(q.jsx)(F,{onClick:function(){r(Object(l.b)())},children:Object(q.jsx)(z,{})}),Object(q.jsx)(P,{children:Object(q.jsxs)(S.c,{children:[Object(q.jsx)(S.a,{path:"/",exact:!0,children:Object(q.jsx)(c.Suspense,{fallback:Object(q.jsx)("div",{children:"Loading..."}),children:Object(q.jsx)(Y,{})})}),Object(q.jsx)(S.a,{path:"/login",children:Object(q.jsx)(c.Suspense,{fallback:Object(q.jsx)("div",{children:"Loading..."}),children:Object(q.jsx)(J,{})})})]})})]})},G=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,218)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},K=n(7),W=n(53),Z=n(99),$=n.n(Z),ee=n(40),te=Object(K.b)({authenticate:v.a,modal:l.a,products:b}),ne={key:"root",storage:$.a,blacklist:[l.a]},ce=Object(W.a)(ne,te),re=Object(p.a)({reducer:ce,middleware:[ee.a]}),ae=n(100),ie=Object(W.b)(re);i.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(g.a,{children:Object(q.jsx)(s.a,{store:re,children:Object(q.jsx)(ae.a,{loading:null,persistor:ie,children:Object(q.jsx)(X,{})})})})}),document.getElementById("root")),G()},26:function(e,t,n){e.exports={Header:"Header_Header__DYdV2",Holder:"Header_Holder__1tCMM",SearchBar:"Header_SearchBar__3UeB7",Nav:"Header_Nav__2g8XO",Icon:"Header_Icon__25ijm"}},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var c=n(23),r=Object(c.b)({name:"auth",initialState:{isAuth:!1,userName:void 0,password:void 0},reducers:{login:function(e,t){e.isAuth=!0,e.userName=t.payload.userName,e.password=t.payload.password},logout:function(e){e.isAuth=!1,e.userName=void 0,e.password=void 0}}});t.a=r.reducer;var a=r.actions,i=a.login,o=a.logout},34:function(e,t,n){"use strict";var c=n(98),r=n.n(c),a=n(1);t.a=function(e){return Object(a.jsx)("button",{className:r.a.Button,children:e.name})}},54:function(e,t,n){e.exports={FormModal:"FormModal_FormModal__2BNe7",Head:"FormModal_Head__1oU6A",Form:"FormModal_Form__3SLT_"}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var c=n(23),r=Object(c.b)({name:"modal",initialState:{show:!1,type:void 0,other:{}},reducers:{show:function(e,t){e.show=!0,e.type=t.payload},hide:function(e,t){e.show=!1,e.type=void 0}}});t.a=r.reducer;var a=r.actions,i=a.show,o=a.hide},89:function(e,t,n){e.exports={AddButton:"AddButton_AddButton__1iIU0"}},9:function(e,t,n){"use strict";var c=n(28),r=n(16),a=n(17),i=n(97),o=n.n(i),d=n(1);t.a=function(e){var t=Object(a.c)(e.name),n=Object(r.a)(t,2),i=n[0],u=n[1];return Object(d.jsxs)("div",{className:o.a.Input,children:[Object(d.jsx)("input",Object(c.a)({placeholder:e.placeholder,type:e.type},i)),Object(d.jsx)("p",{style:{height:"20px"},children:u.error?"* "+u.error:"     "})]})}},90:function(e,t,n){e.exports={BackDrop:"BackDrop_BackDrop__2deY_"}},91:function(e,t,n){"use strict";n.r(t);var c=n(17),r=n(11),a=n(9),i=n(34),o=n(5),d=n(8),u=n(33),s=n(1);t.default=function(){var e=Object(o.b)();return Object(s.jsx)(c.b,{validateOnBlur:!1,validateOnChange:!1,initialValues:{username:"",password:""},validationSchema:r.b({username:r.c().required("Required"),password:r.c().min(8,"must be 8 char long").required("Required")}),onSubmit:function(t,n){e(Object(u.b)({userName:t.username,password:t.password})),e(Object(d.b)()),n.setSubmitting=!1},children:Object(s.jsxs)(c.a,{noValidate:!0,children:[Object(s.jsx)(a.a,{name:"username",type:"text",placeholder:"Your Name"}),Object(s.jsx)(a.a,{name:"password",type:"password",placeholder:"Password"}),Object(s.jsx)(i.a,{name:"Login"})]})})}},97:function(e,t,n){e.exports={Input:"Input_Input__2n2AE"}},98:function(e,t,n){e.exports={Button:"SimpleButton_Button__U2OLg"}}},[[215,1,2]]]);
//# sourceMappingURL=main.10d2bc6c.chunk.js.map