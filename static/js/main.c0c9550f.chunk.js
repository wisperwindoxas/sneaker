(this["webpackJsonpmy-shop-react-project"]=this["webpackJsonpmy-shop-react-project"]||[]).push([[0],{11:function(e,t,c){e.exports={overlay:"Drawer_overlay__31WOD",drawer:"Drawer_drawer__17i3e",items:"Drawer_items__3jakE",cart_total_block:"Drawer_cart_total_block__3sVPG",greenBtn:"Drawer_greenBtn__3M31S",cartItem:"Drawer_cartItem__3ihyZ",cartItemImg:"Drawer_cartItemImg__28gKf",remove_btn:"Drawer_remove_btn__1LSNA",cartEmpty:"Drawer_cartEmpty__3tgmU",greenBtnPrev:"Drawer_greenBtnPrev__3oSDl",visibilityOverlay:"Drawer_visibilityOverlay__2gKXY"}},20:function(e,t,c){e.exports={card:"Card_card__34oVw",favorite:"Card_favorite__3WMsO",priceTitle:"Card_priceTitle__1Gwaa",plusBtn:"Card_plusBtn__3R1S-"}},41:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(34),s=c.n(n),i=c(7),l=(c(41),c(42),c(14)),o=c(8),d=c.n(o),j=c(13),u=c(4),b=a.a.createContext({}),m=c(5),x=c.n(m),h=c(2),f=c(0);var O=function(e){var t=a.a.useContext(b).cardItems.reduce((function(e,t){return t.price+e}),0);return Object(f.jsxs)("header",{className:"d-flex justify-between align-center p-40",children:[Object(f.jsx)("title",{children:"\u0413\u043b\u0430\u0432\u043d\u044b\u0439"}),Object(f.jsx)(i.b,{to:"/",children:Object(f.jsxs)("div",{className:"headerLeft d-flex align-center",children:[Object(f.jsx)("img",{className:"m-15",width:"40",height:"40",src:"img/logo.png",alt:"logo"}),Object(f.jsxs)("div",{className:"headerInfo d-flex align-start justify-start flex-column",children:[Object(f.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(f.jsx)("p",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0439 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0430"})]})]})}),Object(f.jsxs)("ul",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("li",{onClick:e.showCard,className:" cu-p",children:[Object(f.jsx)("img",{width:"18",height:"18",src:"img/cart.svg",alt:"logo"}),Object(f.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/favorites",children:Object(f.jsx)("img",{src:"img/favorite-outline.svg",alt:"favorite"})})}),Object(f.jsx)("li",{children:Object(f.jsx)(i.b,{to:"/shoping",children:Object(f.jsx)("img",{width:"18",height:"18",src:"img/Union.svg",alt:"logo"})})})]})]})},v=c(11),p=c.n(v);function g(e){var t=e.title,c=e.subtitle,r=e.img,n=a.a.useContext(b).setCartOpen;return Object(f.jsxs)("div",{className:p.a.cartEmpty+" d-flex  align-center justify-center flex-column flex",children:[Object(f.jsx)("img",{src:r,alt:"empty",className:"m-20",width:"120",height:"120"}),Object(f.jsx)("h2",{children:t}),Object(f.jsx)("p",{className:"opacity-6",children:c}),Object(f.jsxs)("button",{onClick:function(){return n(!1)},className:p.a.greenBtnPrev,children:[Object(f.jsx)("img",{src:"img/arrowPrev.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})}var w=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=a.a.useContext(b),l=i.cardItems,o=i.setCardItems,m=a.a.useState(!1),h=Object(u.a)(m,2),O=h[0],v=h[1],w=a.a.useState(null),N=Object(u.a)(w,2),k=N[0],_=N[1],y=a.a.useState(!1),C=Object(u.a)(y,2),I=C[0],S=C[1],B=l.reduce((function(e,t){return t.price+e}),0),A=function(e){return new Promise((function(t){return setTimeout(t,e)}))},P=function(){var e=Object(j.a)(d.a.mark((function e(){var t,c,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,S(!0),e.next=4,x.a.post("https://6130c2898066ca0017fdaa51.mockapi.io/orders",{items:l});case 4:t=e.sent,c=t.data,_(c.id),v(!0),o([]),r=0;case 10:if(!(r<l.length)){e.next=18;break}return a=l[r],e.next=14,x.a.delete("https://6130c2898066ca0017fdaa51.mockapi.io/card/"+a.id);case 14:A(1e3);case 15:r++,e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0444\u043e\u0440\u043c\u0438\u0442 \u0432\u0430\u0448 \u0437\u0430\u043a\u0430\u0437!");case 23:S(!1);case 24:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"".concat(p.a.overlay," ").concat(s?p.a.visibilityOverlay:""),children:[Object(f.jsx)("title",{children:s?"\u041a\u043e\u0440\u0437\u0438\u043d\u0430":"\u0413\u043b\u0430\u0432\u043d\u044b\u0439"}),Object(f.jsxs)("div",{className:p.a.drawer,children:[Object(f.jsxs)("h2",{className:"d-flex justify-between mb-30  ",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(f.jsx)("img",{onClick:t,className:"remove-btn cu-p",src:"img/btn-remove.svg",alt:"removeBtn"})]}),n.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:p.a.items,children:n.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:p.a.cartItem+" d-flex align-center mt-30 ",children:[Object(f.jsx)("div",{className:p.a.cartItemImg,style:{backgroundImage:"url(".concat(e.img,")")}}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{className:"mb-5",children:e.title}),Object(f.jsxs)("b",{children:[e.price," \u0440\u0443\u0431"]})]}),Object(f.jsx)("img",{onClick:function(){return c(e.id)},className:p.a.remove_btn,src:"img/btn-remove.svg",alt:"removeBtn"})]})},e.id)}))}),Object(f.jsxs)("div",{className:p.a.cart_total_block+" mt-20",children:[Object(f.jsxs)("ul",{className:"total_block mb-20",children:[Object(f.jsxs)("li",{className:"d-flex justify-center align-end mb-20",children:[Object(f.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e: "}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[B," \u0440\u0443\u0431. "]})]}),Object(f.jsxs)("li",{className:"d-flex",children:[Object(f.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%: "}),Object(f.jsx)("div",{}),Object(f.jsxs)("b",{children:[Math.round(B/100*5)," \u0440\u0443\u0431."]})]})]}),Object(f.jsxs)("button",{disabled:I,onClick:P,className:p.a.greenBtn,children:[Object(f.jsx)("span",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"}),Object(f.jsx)("img",{src:"img/btn-arrow.svg",alt:"arrow"})]})]})]}):Object(f.jsx)(g,{img:O?"img/order.png":"img/empty.png",title:O?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",subtitle:O?"\u0412\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u043b\u0438: ".concat(l.length," \u041a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438 \u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #").concat(k," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0435\u0442\u044c \u0437\u0430\u043a\u0430\u0437."})]})]})},N=c(16),k=c(20),_=c.n(k),y=c(36);var C=function(e){var t=e.img,c=e.title,n=e.price,s=e.id,i=e.onFavorite,l=e.onPlus,o=e.favoriteLiked,d=e.loading,j=void 0!==d&&d,m=e.favoriteAdded,x=void 0!==m&&m,h=a.a.useContext(b).isItemAdded,O=Object(r.useState)(o),v=Object(u.a)(O,2),p=v[0],g=v[1];return Object(f.jsx)("div",{className:"mr-20",children:j?Object(f.jsxs)(y.a,{speed:2,width:200,height:300,viewBox:"0 0 155 265",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(f.jsx)("rect",{x:"1",y:"0",rx:"10",ry:"10",width:"200",height:"155"}),Object(f.jsx)("rect",{x:"0",y:"167",rx:"5",ry:"5",width:"200",height:"15"}),Object(f.jsx)("rect",{x:"0",y:"187",rx:"5",ry:"5",width:"100",height:"15"}),Object(f.jsx)("rect",{x:"1",y:"234",rx:"5",ry:"5",width:"80",height:"25"}),Object(f.jsx)("rect",{x:"124",y:"230",rx:"10",ry:"10",width:"32",height:"32"})]}):Object(f.jsxs)("div",{className:_.a.card,children:[Object(f.jsx)("img",{onClick:function(){i({id:s,img:t,title:c,price:n}),g(!p)},className:_.a.favorite,src:p||x?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"unliked"}),Object(f.jsx)("img",{width:"100%",height:"135px",src:t,alt:"sneakers"}),Object(f.jsx)("h5",{children:c}),Object(f.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(f.jsxs)("div",{className:"d-flex flex-column",children:[Object(f.jsx)("span",{className:"priceTitle",children:"\u0426\u0435\u043d\u0430:"}),Object(f.jsxs)("b",{children:[n," \u0440\u0443\u0431"]})]}),Object(f.jsx)("div",{onClick:function(){l({id:s,img:t,title:c,price:n})},className:_.a.plusBtn,children:Object(f.jsx)("img",{src:h(s)?"img/btn-plus.svg":"img/plus.svg",alt:"btnAdd"})})]})]})},s)};var I=function(e){var t=e.cards,c=e.searchValue,r=e.cardItems,a=e.favorites,n=e.setSearchValue,s=e.onChangeSearchInput,i=e.onAddToFavorite,o=e.onAddToCart,d=e.isLoading;return Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex align-center mb-40 justify-between",children:[Object(f.jsx)("h1",{className:"",children:""!==c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443?: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(f.jsxs)("div",{className:"search-block",children:[Object(f.jsx)("img",{src:"img/search.svg",alt:"search"}),c&&Object(f.jsx)("img",{onClick:function(){return n("")},className:"remove-btn clear cu-p",src:"img/btn-remove.svg",alt:"removeBtn"}),Object(f.jsx)("input",{onChange:function(e){return s(e)},value:c,type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a..."})]})]}),Object(f.jsxs)("div",{className:"sneakers d-flex justify-between flex-wrap mb-20",children:[" ",function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(d?Object(l.a)(Array(12)):e).map((function(e,t){return Object(f.jsx)(C,Object(N.a)({onFavorite:function(e){return i(e)},onPlus:function(e){return o(e)},added:r.some((function(t){return t.id===e.id})),favoriteAdded:a.some((function(t){return t.id===e.id})),loading:d},e),t)}))}()," "]})]})};var S=function(){var e=a.a.useContext(b),t=e.favorites,c=e.onAddToCart,r=e.onAddToFavorite;return Object(f.jsxs)("div",{children:[Object(f.jsx)("title",{children:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"}),t.length>0?Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsxs)("div",{className:"d-flex  mr-20 favorite",children:[Object(f.jsx)(i.b,{to:"/",children:Object(f.jsx)("div",{className:"arrow",children:Object(f.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})})}),Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})]}),Object(f.jsx)("div",{className:"sneakers d-flex  flex-wrap mt-40 mb-20",children:t.map((function(e,t){return Object(f.jsx)(C,Object(N.a)({onFavorite:function(e){return r(e)},onPlus:function(e){return c(e)},favoriteLiked:!0},e),t)}))})]}):Object(f.jsxs)("div",{className:"wrapper NoFavoriteproduct d-flex flex-column justify-center align-center",children:[Object(f.jsx)("img",{src:"/img/unFavorite.png",alt:"unFavorite"}),Object(f.jsx)("h2",{children:"\u0417\u0430\u043a\u043b\u0430\u0434\u043e\u043a \u043d\u0435\u0442 :"}),Object(f.jsx)("p",{children:"\u0412\u044b \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u043b\u0438 \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438  "}),Object(f.jsx)(i.b,{to:"/",children:Object(f.jsxs)("button",{className:"greenBtnPrev",children:[Object(f.jsx)("img",{src:"/img/arrowPrev.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})]})};var B=function(){var e=a.a.useState([]),t=Object(u.a)(e,2),c=t[0],r=t[1];return a.a.useEffect((function(){Object(j.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://6130c2898066ca0017fdaa51.mockapi.io/orders");case 2:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(l.a)(e),Object(l.a)(t.items))}),[]));case 5:case"end":return e.stop()}}),e)})))()}),[]),console.log(c),Object(f.jsx)("div",{children:c.length>0?Object(f.jsxs)("div",{className:"content p-40",children:[Object(f.jsx)("title",{children:"\u041c\u043e\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"}),Object(f.jsxs)("div",{className:"d-flex justify-between mr-20 favorite",children:[Object(f.jsxs)("div",{className:"d-flex align-center ",children:[Object(f.jsx)(i.b,{to:"",children:Object(f.jsx)("div",{className:"arrow",children:Object(f.jsx)("img",{src:"img/arrow.svg",alt:"arrow"})})}),Object(f.jsx)("h1",{children:"\u041c\u043e\u0438 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"})]}),Object(f.jsxs)("button",{onClick:function(){c.map(function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete("https://6130c2898066ca0017fdaa51.mockapi.io/orders/".concat(t.id));case 2:r([]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},className:"btnClearShop ",children:[Object(f.jsx)("img",{src:"img/delete.png",alt:"trash"}),"Clear all product"]})]}),Object(f.jsx)("div",{className:"sneakers d-flex  flex-wrap mt-40 mb-20",children:c.map((function(e,t){return Object(f.jsx)(C,Object(N.a)({},e),t)}))})]}):Object(f.jsxs)("div",{className:"wrapper NoFavoriteproduct d-flex flex-column justify-center align-center",children:[Object(f.jsx)("img",{src:"/img/unshoping.png",alt:"unFavorite"}),Object(f.jsx)("h2",{children:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(f.jsx)("p",{children:"\u0412\u044b \u043d\u0438\u0449\u0435\u0431\u0440\u043e\u0434? \u041e\u0444\u043e\u0440\u043c\u0438\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u0437\u0430\u043a\u0430\u0437."}),Object(f.jsx)(i.b,{to:"",children:Object(f.jsxs)("button",{className:"greenBtnPrev",children:[Object(f.jsx)("img",{src:"/img/arrowPrev.svg",alt:"arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})})]})})};var A=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],n=Object(r.useState)([]),s=Object(u.a)(n,2),i=s[0],o=s[1],m=Object(r.useState)([]),v=Object(u.a)(m,2),p=v[0],g=v[1],N=Object(r.useState)(""),k=Object(u.a)(N,2),_=k[0],y=k[1],C=Object(r.useState)([]),A=Object(u.a)(C,2),P=A[0],D=A[1],F=Object(r.useState)(!0),T=Object(u.a)(F,2),E=T[0],L=T[1];Object(r.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://6130c2898066ca0017fdaa51.mockapi.io/card");case 2:return t=e.sent,e.next=5,x.a.get("https://6130c2898066ca0017fdaa51.mockapi.io/liked");case 5:return c=e.sent,e.next=8,x.a.get("https://6130c2898066ca0017fdaa51.mockapi.io/sneakers");case 8:r=e.sent,L(!1),D(t.data),g(c.data),o(r.data);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var V=function(e){try{P.find((function(t){return Number(t.id)===Number(e.id)}))?(D((function(t){return t.filter((function(t){return t.id!==e.id}))})),x.a.delete("https://6130c2898066ca0017fdaa51.mockapi.io/card/".concat(e.id))):(x.a.post("https://6130c2898066ca0017fdaa51.mockapi.io/card",e),D((function(t){return[].concat(Object(l.a)(t),[e])})))}catch(t){alert("Error ".concat(t.message))}},R=function(){var e=Object(j.a)(d.a.mark((function e(t){var c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!p.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}x.a.delete("https://6130c2898066ca0017fdaa51.mockapi.io/liked/".concat(t.id)),g((function(e){return e.filter((function(e){return e.id!==t.id}))})),e.next=11;break;case 6:return e.next=8,x.a.post("https://6130c2898066ca0017fdaa51.mockapi.io/liked",t);case 8:c=e.sent,r=c.data,g((function(e){return[].concat(Object(l.a)(e),[r])}));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0441\u043c\u043e\u0433\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u043e\u0432\u043e\u0440\u0438\u0442\u0435");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(b.Provider,{value:{favorites:p,isItemAdded:function(e){return P.some((function(t){return Number(t.id)===Number(e)}))},onAddToFavorite:R,onAddToCart:V,setCartOpen:a,setCardItems:D,cardItems:P},children:Object(f.jsxs)("div",{className:"wrapper clear",children:[Object(f.jsx)(w,{items:P,onClose:function(){a(!1)},onRemove:function(e){x.a.delete("https://6130c2898066ca0017fdaa51.mockapi.io/card/".concat(e)),D((function(t){return t.filter((function(t){return t.id!==e}))}))},opened:c}),Object(f.jsx)(O,{showCard:function(){a(!0)}}),Object(f.jsx)(h.a,{path:"",exact:!0,children:Object(f.jsx)(I,{cards:i,searchValue:_,setSearchValue:y,onChangeSearchInput:function(e){y(e.target.value)},onAddToFavorite:R,onAddToCart:V,cardItems:P,favorites:p,isLoading:E})}),Object(f.jsx)(h.a,{path:"favorites",exact:!0,children:Object(f.jsx)(S,{})}),Object(f.jsx)(h.a,{path:"shoping",exact:!0,children:Object(f.jsx)(B,{})})]})})};s.a.render(Object(f.jsx)(i.a,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.c0c9550f.chunk.js.map