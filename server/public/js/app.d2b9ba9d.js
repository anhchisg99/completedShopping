(function(t){function e(e){for(var r,i,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},s={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01a7":function(t,e,a){"use strict";a("b820")},"034f":function(t,e,a){"use strict";a("85ec")},"0a5f":function(t,e,a){"use strict";a("fe7e")},"0c22":function(t,e,a){"use strict";a("518e")},"0e07":function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8PDxAPDw8NDw0NDw0PDQ8PDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFSsdFR0rKy0tLSstKysrKysrLSstLS0rLSsrLSsrLSsrNy0tLSstLSstNy03KzcrLS0rLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAQIDBAf/xAAoEAEBAQEAAAYBAwQDAAAAAAAAARECAxIhMUFRYRNxgZGh8PGx0eH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAAAERAiExEv/aAAwDAQACEQMRAD8A+w1jutsdOTvHLqOV1054z50sHSOXOvR4Xs5dc+2O0Dk1prGrKM46SicqrJSFEBLRmgWpaJRpdNRKC2s3oZwakblbc46DNajPW5c9/hTfUROdz1u37LRANaY75l9L7LAXTQoKI1AaQgrIAguiEFTvnZidZJ+PZpLAc+prNue7piensNSsmt4z16f+C6ysv0zy3ArfLTPMaGKkpVZoGpRBQoCiKlATFBVkUi4MseN11M8s1uCgXlz5me/q6azbMBCBgqrE5BFISJQa1UxRAQAVCUFqWlQGbz6ZLhxzZ7+v5+caTfqipZdn0trTM7m2fQE5/H8NSCiaQSflQRFAZorNFFxInrs9fT6FXErSAgq4CyKQGRFARLFQUhVZAxcFANRcAioUQ0EFaGY1BCotQCxnniRoFCcz3+VBBWYsBbSKiohVEVnGa6GBrmh4fVtssyT2rdg1rKpZfj+f2awRicTd+a3FxKGiaVnQxuVWeVEBQEwxQGVlKCtSM1Z0zaIsoy0KhAAiSmm6K1RagyAAoigECA0lBUEwVFABAABUAEqgMWMSOyYNSsxQBRFECgCI0grOovUQVY1GYsEoKgMWrDqEGnWoUGEUAAAFgAVAABQE1UoLprNQGxz1dDGxAFEAEUBFAAFBMMVVGLEx0TENZnKrEoaIqAlZbSC62CCKgAGoAaaApoIDRqAis9Kz3RYKxoC6MrKK3F1iHW5c9xG9WV5J5vy9HN9PX+RbMbEWUZBQEBQFiAjSCAqUUEFAYpGrEwVRABFZ38fyBoWgqW/iqICa0i9bnp/wKarMi2iLrl10t7/2wLIvmNQn9P7iqBoJd+K3zWZGevEwPXZjvn5tyfThPG6/yNee/YvzY9NHDi9W5rt5OvuDFmNaa5Tv1+M+vnW5QxoZ1dBVjKwRoAAEEXTWQXGtNZUApYT8glTRz66FbYnX+mubrnRqN+dL2wC5G54n+fLXncq3OZgWRy8brr49vx76z4PPXzufn7ejE6l/7E1m9J5o7eHOf5/uz4uBrnekl1ZDMFXEv5ief910C/hjyt+T/NWSAxzwldtZ8oa5TnPV0/W6+2v0q5WB1Tnv1/d11xdNCtytSscxuQZpK1KytsBL4snz/RrnuVw/SnxXTiYLZHTzT2KhRk1nSsiyNaeZjV0XHfWfNNzZ+3ylTJ7/AD9jGNJeNAVPSezn5PXzbf2+HWs0WFkvsTwydL5w2s4L1UDWsLyhoJ5V8hq6Gp5HPxeNz3mN21KEYSt2JYNEMv4WLBCNeUhaIZWZ4f23oDl+mccX5mOqi6zieJ1jVrh36hE2mM8tjepgN+b6kn9wSd12jzuvhdegzyjVSrUEiYJ11iTxILjqaAwaABXPoAiL6/KAq6eYAb57SgBCqAyKAlMAVZcL4u+mX+QDEUBBZVATyz3+ftQEc+5d9NdufDn7gFqdeHHPACVLGfKA3KeVeZgBrWtAJTyy/CzifU/oAza//9k="},"167e":function(t,e){t.exports="data:image/jpeg;base64,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"},"1aec":function(t,e,a){},"2d16":function(t,e,a){"use strict";a("9835")},3360:function(t,e,a){},"3b20":function(t,e,a){"use strict";a("1aec")},"3dc2":function(t,e,a){"use strict";a("3360")},"4d2d":function(t,e,a){},"518e":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view",{attrs:{products:this.$store.state.products,conga:t.kata}}),a("bottom")],1)},n=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"bottom"}},[a("div",{staticClass:"address"},[a("p",[a("i",{staticClass:"fas fa-home"}),a("span",[t._v(" 30 Luong Huu Khanh")])]),a("p",[a("i",{staticClass:"fas fa-envelope"}),a("span",[t._v(" skate@gmail.com")])])]),a("div",{staticClass:"link"},[a("h3",[t._v("LINK")]),a("p",[t._v("Search")]),a("p",[t._v("Our Story")]),a("p",[t._v("Contact Us")])]),a("div",{staticClass:"sign-up"},[a("h3",[t._v("SIGN UP FOR HFWTH UPDATES")]),a("p",[t._v("Enter your email to receive newest collection & special offers.")])])])}],c={name:"Bottom"},u=c,l=(a("5a8f"),a("2877")),d=Object(l["a"])(u,i,o,!1,null,"3622fbe4",null),p=d.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("header",[r("router-link",{staticClass:"card",attrs:{to:"/"}},[r("img",{attrs:{src:a("b640"),alt:""}})]),r("nav",[r("ul",[r("li",[r("router-link",{staticClass:"card",attrs:{to:"/pagination"}},[t._v("Shop")])],1),t._m(0),t._m(1),t._m(2)])]),r("router-link",{staticClass:"card",attrs:{to:"/cart"}},[r("i",{staticClass:"fas fa-shopping-cart"},[t._v(t._s(this.$store.getters.quantityCart))])])],1)])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[t._v("Restock")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[t._v("News")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:""}},[t._v("About Us")])])}],A={name:"Header"},h=A,v=(a("01a7"),Object(l["a"])(h,m,f,!1,null,"f72c70ac",null)),g=v.exports,C={name:"App",components:{Bottom:p,Header:g},data:function(){return{kata:"congabebe",products:this.$store.state.products,items:""}},watch:{$route:function(){this.$store.dispatch("getProduct")}},created:function(){this.$store.dispatch("getProduct")},mounted:function(){this.$store.commit("addlocalStorage")}},_=C,E=(a("034f"),Object(l["a"])(_,s,n,!1,null,null,null)),y=E.exports,b=a("8c4f"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"home"}},[a("Carousel"),a("CardMain"),t._m(0),a("BestSeller",{attrs:{products:t.products}})],1)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-seller"},[a("h1",[t._v("BEST SELLER")])])}],T=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"carousel"}},[r("img",{attrs:{id:"img-1",src:a("0e07"),alt:""}}),r("img",{attrs:{id:"img-2",src:a("167e"),alt:""}}),r("img",{attrs:{id:"img-3",src:a("0e07"),alt:""}}),r("button",[r("i",{staticClass:"fas fa-arrow-circle-right"})]),r("button",{attrs:{onclick:""}},[r("i",{staticClass:"fas fa-arrow-circle-left"})])])}],x={name:"Carousel"},Q=x,B=(a("8347"),Object(l["a"])(Q,T,N,!1,null,"150a9aa8",null)),F=B.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{attrs:{id:"card-main"}},[r("div",{staticClass:"card"},[r("img",{attrs:{src:a("61db"),alt:""}}),r("div",{staticClass:"info"})]),r("div",{staticClass:"card"},[r("img",{attrs:{src:a("61db"),alt:""}}),r("div",{staticClass:"info"})])])}],k={name:"CardMain",props:["conga"]},D=k,L=(a("8fee"),Object(l["a"])(D,w,O,!1,null,"506f7bba",null)),G=L.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"best-seller"}},[a("div",{staticClass:"card-seller"},t._l(t.products,(function(t,e){return a("Product",{key:e,staticClass:"card",attrs:{product:t}})})),1)])},I=[],K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"card",attrs:{to:"/shop/"+t.product._id}},[a("span",[t._v("New arrival")]),a("img",{attrs:{src:t.product.linkImg,alt:""}}),a("div",{staticClass:"info"},[a("h3",[t._v("Name:"+t._s(t.product.name))]),a("h3",[t._v("Price:"+t._s(t.product.price))])])])},R=[],z={name:"Product",props:["product"],data:function(){return{}}},j=z,M=(a("5c03"),Object(l["a"])(j,K,R,!1,null,"44d30eee",null)),Z=M.exports,U={components:{Product:Z},name:"BestSeller",props:["products"]},V=U,W=(a("3dc2"),Object(l["a"])(V,q,I,!1,null,"7296769b",null)),Y=W.exports,H={name:"Home",components:{Carousel:F,CardMain:G,BestSeller:Y},props:["products"]},$=H,X=(a("0a5f"),Object(l["a"])($,P,S,!1,null,"180b38ca",null)),J=X.exports,tt=a("5530"),et=(a("e9c4"),a("fb6a"),a("7db0"),a("d3b7"),a("4de4"),a("2f62")),at=a("bc3a"),rt=a.n(at);r["a"].use(et["a"]);var st="api/";function nt(t){localStorage.setItem("cart",JSON.stringify(t))}var it=new et["a"].Store({state:{items:[{id:1,name:"quan",des:"depnha",price:1e3},{id:2,name:"ao",des:"depnha",price:1e3},{id:3,name:"ao thun",des:"depnha1 ",price:1e3}],products:[],cart:[],successOrder:"",todopagi:[],page:""},getters:{quantityCart:function(t){for(var e=0,a=0;a<t.cart.length;a++)e+=t.cart[a].quantity;return e},sum:function(t){for(var e=0,a=0;a<t.cart.length;a++)e+=t.cart[a].quantity*t.cart[a].price;return e},perPage:function(t){return t.todopagi.length%8==0?t.todopagi.length/8:t.todopagi.length/8+1},getItem:function(t){var e=8*(t.page-1),a=8*(t.page-1)+8;return t.todopagi.slice(e,a)}},actions:{getProduct:function(t){var e=t.commit;rt.a.get("api/item/getProductMain").then((function(t){e("GETPRODUCTMAIN",t.data)}))},postOrder:function(t,e){var a=t.commit;rt.a.post(st+"order/postOrder",e).then((function(t){a("POSTORDER",t.data)}))},getProductPagination:function(t){var e=t.commit;rt()(st+"item/getItem").then((function(t){e("GETPRODUCTPAGINATION",t.data)}))}},mutations:{GETPRODUCTMAIN:function(t,e){t.products=e},addtoCart:function(t,e){var a=t.cart.find((function(t){return t._id==e._id}));a?a.quantity++:t.cart.push(Object(tt["a"])(Object(tt["a"])({},e),{},{quantity:1})),nt(t.cart)},addlocalStorage:function(t){var e=localStorage.getItem("cart");e&&(t.cart=JSON.parse(e))},removeFromCart:function(t,e){var a=t.cart.find((function(t){return t._id==e._id}));a&&(a.quantity>1?a.quantity--:t.cart=t.cart.filter((function(t){return t._id!==e._id}))),nt(t.cart)},POSTORDER:function(t,e){t.cart=0,localStorage.removeItem("cart"),t.successOrder="ban da dat hang thanh cong ".concat(e._id)},GETPRODUCTPAGINATION:function(t,e){t.todopagi=e},GETITEM:function(t,e){t.page=e}}}),ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"shop"}},[t.error?a("p",[t._v("this is error")]):t._e(),a("div",{staticClass:"item"},[a("img",{attrs:{src:t.product.linkImg,alt:""}})]),a("div",{staticClass:"info"},[a("h1",[t._v(t._s(t.product.name))]),a("h1",[t._v(t._s(t.product.price))]),a("h3",[t._v("Quantity")]),a("div",{staticClass:"group-button"},[a("button",{on:{click:function(e){return t.$store.commit("addtoCart",t.product)}}},[t._v("Add to cart")]),a("button",[t._v("Buy It Now")])])])])},ct=[],ut={name:"Shop",data:function(){return{product:"",error:null}},watch:{"$route.params.id":{handler:function(t){var e=this;rt.a.get("/api/item/".concat(t)).then((function(t){return e.product=t.data})).catch((function(t){return e.error=t}))},deep:!0,immediate:!0}}},lt=ut,dt=(a("3b20"),Object(l["a"])(lt,ot,ct,!1,null,"58ba2710",null)),pt=dt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"form",attrs:{method:"post"},on:{submit:t.checkForm}},[a("h2",[t._v("Thong tin nhan hang")]),a("div",{staticClass:"catch-error"},[t.errors.length?a("p",[a("b",[t._v("Please correct the following error(s) :")]),a("ul",t._l(t.errors,(function(e,r){return a("li",{key:r},[t._v(t._s(e))])})),0)]):t._e()]),a("form",{attrs:{action:"/action_page.php"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-75"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"text",id:"fname",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-75"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"fname",placeholder:"Full Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-75"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",id:"lname",placeholder:"Phone"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-75"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address1,expression:"address1"}],attrs:{type:"text",id:"lname",placeholder:"Address 1"},domProps:{value:t.address1},on:{input:function(e){e.target.composing||(t.address1=e.target.value)}}})])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-75"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address2,expression:"address2"}],attrs:{type:"text",id:"lname",placeholder:"Address 2"},domProps:{value:t.address2},on:{input:function(e){e.target.composing||(t.address2=e.target.value)}}})])])])]),a("div",{staticClass:"order"},[a("h2",[t._v("Don Hang")]),t._l(this.$store.state.cart,(function(e,r){return a("div",{key:r,staticClass:"item"},[a("div",{staticClass:"item-img"},[a("img",{attrs:{src:e.linkImg,alt:""}})]),a("div",{staticClass:"item-detail"},[a("p",[t._v("Tee (black) "+t._s(e.name))]),a("p",[t._v("Money "+t._s(e.price))])])])})),a("p",{staticClass:"item1"}),a("div",{staticClass:"ship"},[t._m(0),a("div",{staticClass:"ship-right"},[a("p",[t._v("money "+t._s(t.$store.getters.sum))]),a("p",[t._v(t._s(t.phivanchuyen))])])]),a("p",{staticClass:"ship1"}),a("div",{staticClass:"total"},[a("div",{staticClass:"total-left"},[a("p",[t._v("Tong Cong")]),a("router-link",{staticClass:"card",attrs:{to:"/cart"}},[a("i",{staticClass:"fas fa-arrow-left"})])],1),a("div",{staticClass:"total-right"},[a("p",[t._v("money "+t._s(t.tongcong))]),a("button",{attrs:{type:"button"},on:{click:t.checkForm}},[t._v("Dat Hang")])])])],2)])},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ship-left"},[a("p",[t._v("Tam Tinh ")]),a("p",[t._v("Van chuyen")])])}],At=(a("b0c0"),a("ac1f"),a("00b4"),{name:"CheckOut",data:function(){return{phivanchuyen:2e4,email:"",name:"",phone:"",address1:"",address2:"",errors:[]}},computed:{tongcong:function(){return this.$store.getters.sum+this.phivanchuyen}},methods:{checkForm:function(t){var e=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,a=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(this.errors=[],this.name||this.errors.push("Name required."),this.email||this.errors.push("Age required."),e.test(this.phone)||this.errors.push("Not type of Phone. "),a.test(this.email)||this.errors.push("Not type of Email. "),this.errors.length>0&&t.preventDefault(),0==this.errors.length){var r={email:this.email,name:this.name,phone:this.phone,address1:this.address1,address2:this.address2,cart:this.$store.state.cart};this.$store.dispatch("postOrder",r),this.$router.push({name:"checkouted"})}}}}),ht=At,vt=(a("f7cd"),Object(l["a"])(ht,mt,ft,!1,null,"42ff3b53",null)),gt=vt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkouted"},[t._m(0),a("h3",[t._v("Ma don hang"+t._s(this.$store.state.successOrder))])])},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"part1"},[a("h1",{staticClass:"animate__animated animate__rubberBand animate__bounceInLeft"},[a("i",{staticClass:"fas fa-check-circle"})]),a("h1",[t._v(" Cam on ban da thanh toan")])])}],Et={name:"checkouted"},yt=Et,bt=(a("0c22"),Object(l["a"])(yt,Ct,_t,!1,null,"2cd35c11",null)),Pt=bt.exports,St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"cart"}},[a("h1",[t._v("GIO HANG")]),0!=t.cart?a("div",{staticClass:"cart-main"},[a("div",{staticClass:"cartItem"},[a("table",{staticStyle:{width:"100%"}},[t._m(0),t._l(t.$store.state.cart,(function(e,r){return a("tr",{key:r},[a("td",[t._v("san pham")]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.price))]),a("td",[t._v(t._s(e.quantity))]),a("td",[t._v(t._s(e.quantity*e.price))]),a("td",[a("button",{on:{click:function(a){return t.removeFromCart(e)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])])}))],2)]),a("div",{staticClass:"payment"},[a("h1",{staticClass:"sum"},[t._v("Tong thanh toan:"+t._s(t.$store.getters.sum))]),a("router-link",{attrs:{to:"/checkout"}},[t._v("Tien hanh thanh toan")])],1)]):a("div",{staticClass:"cart-main-noProduct"},[a("h1",[t._v("Không có sản phẩm nào. Quay lại cửa hàng để tiếp tục mua sắm.")])])])},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",[t._v("Anh san pham")]),a("th",[t._v("ten san pham")]),a("th",[t._v("don gia")]),a("th",[t._v("so luong")]),a("th",[t._v("thanh tien")]),a("th",[t._v("delete")])])}],Nt={name:"Cart",components:{},data:function(){return{}},computed:{cart:function(){return this.$store.state.cart}},methods:{removeFromCart:function(t){this.$store.commit("removeFromCart",t)}}},xt=Nt,Qt=(a("650e"),Object(l["a"])(xt,St,Tt,!1,null,"69ad5929",null)),Bt=Qt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination"},[a("div",{staticClass:"pagination-info"},[a("h1",[t._v("Home | Shop "+t._s(t.$route.query.page))])]),a("div",{staticClass:"collection"},[a("div",{staticClass:"collection-item"},t._l(t.$store.getters.getItem,(function(t,e){return a("product",{key:e,staticClass:"collection-product",attrs:{product:t}})})),1),a("div",{staticClass:"collection-nav"},[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[t.prePagi?a("li",[a("router-link",{staticClass:"page-link",attrs:{tag:"a",to:{query:{page:parseInt(this.$route.query.page)-1}}}},[a("i",{staticClass:"fas fa-chevron-left"})])],1):t._e(),t._l(3,(function(e,r){return a("li",{key:r,staticClass:"page-item",class:{activeT:parseInt(t.$route.query.page)==(parseInt(t.$route.query.page)>3?e+(parseInt(t.$route.query.page)-3):e)}},[a("router-link",{staticClass:"page-link",attrs:{tag:"a",to:{query:{page:e}}}},[t._v(t._s(t.checkTo>3?e+(t.checkTo-3):e))])],1)})),a("li",{class:{disabled:parseInt(this.$route.query.page)==parseInt(this.$store.getters.perPage)}},[a("router-link",{staticClass:"page-link",attrs:{tag:"a",to:{query:{page:t.iniPagi}}}},[a("i",{staticClass:"fas fa-chevron-right"})])],1)],2)])])])])},wt=[],Ot=a("53ca"),kt={name:"Pagination",components:{Product:Z},data:function(){return{arrayTodo:"",currentPage:parseInt(this.$route.query.page)}},mounted:function(){this.$store.dispatch("getProductPagination")},computed:{routerParams:function(){return this.page<4?Object(Ot["a"])(this.page):this.page+1},checkTo:function(){return parseInt(this.$route.query.page)},iniPagi:function(){return this.$route.query.page?parseInt(this.$route.query.page)+1:2},prePagi:function(){return!!this.$route.query.page&&1!=parseInt(this.$route.query.page)}},watch:{"$route.query.page":{handler:function(t){this.$route.query.page?this.$store.commit("GETITEM",t):this.$store.commit("GETITEM",1)},deep:!0,immediate:!0}}},Dt=kt,Lt=(a("2d16"),Object(l["a"])(Dt,Ft,wt,!1,null,"1ca58202",null)),Gt=Lt.exports;r["a"].use(b["a"]);var qt=new b["a"]({mode:"history",routes:[{path:"/",name:"Home",component:J},{path:"/shop/:id",name:"shop",component:pt},{path:"/cart",name:"cart",component:Bt},{path:"/checkout",name:"checkout",component:gt,beforeEnter:function(t,e,a){0==it.state.cart.length?a(!1):a()}},{path:"/checkouted",name:"checkouted",component:Pt},{path:"/pagination/",name:"pagination",component:Gt}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)},store:it,router:qt}).$mount("#app")},"5a8f":function(t,e,a){"use strict";a("782f")},"5c03":function(t,e,a){"use strict";a("4d2d")},"61db":function(t,e,a){t.exports=a.p+"img/conceptual_art_1.517ea690.jpeg"},"650e":function(t,e,a){"use strict";a("d938")},"782f":function(t,e,a){},8347:function(t,e,a){"use strict";a("94ef")},"85ec":function(t,e,a){},"8fee":function(t,e,a){"use strict";a("d7ed")},"94ef":function(t,e,a){},9835:function(t,e,a){},b640:function(t,e,a){t.exports=a.p+"img/logo.20e3c8cd.jpg"},b820:function(t,e,a){},bf3f:function(t,e,a){},d7ed:function(t,e,a){},d938:function(t,e,a){},f7cd:function(t,e,a){"use strict";a("bf3f")},fe7e:function(t,e,a){}});
//# sourceMappingURL=app.d2b9ba9d.js.map