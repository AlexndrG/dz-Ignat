(this.webpackJsonpdz=this.webpackJsonpdz||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={navbar:"Navbar_navbar__3UpeD",item:"Navbar_item__FMX5u",activeLink:"Navbar_activeLink__eckw4"}},function(e,t,n){e.exports={message:"Message_message__3v-jC",avatar:"Message_avatar__1LxDj",arrow:"Message_arrow__3buOt",messageBlock:"Message_messageBlock__7z04c",blockName:"Message_blockName__3qBIM",blockMessage:"Message_blockMessage__D3nlH",blockTime:"Message_blockTime__28A5n"}},,,,function(e,t,n){e.exports={someClass:"Greeting_someClass__11kQb",error:"Greeting_error__qYhFg",ok:"Greeting_ok__1Rj_f",container:"Greeting_container__3rHzK",totalUsers:"Greeting_totalUsers__XkE6k"}},,function(e,t,n){e.exports={error:"Error404_error__nsv8j",text:"Error404_text__34MKm",image:"Error404_image__2iDPj"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2GU9x",errorInput:"SuperInputText_errorInput__Pb_-Q",error:"SuperInputText_error__2cT4-"}},function(e,t,n){e.exports={pen:"SuperEditableSpan_pen__31PJC",spanParameter:"SuperEditableSpan_spanParameter__1PbVU",editableSpan:"SuperEditableSpan_editableSpan__LNdjE"}},,,function(e,t,n){e.exports={button:"Affair_button__76OYH",low:"Affair_low__3q3Ma",middle:"Affair_middle__S5Zth",high:"Affair_high__2Xsh8"}},function(e,t,n){e.exports={blue:"HW4_blue__kx2Bn",column:"HW4_column__3Ytpq",testSpanError:"HW4_testSpanError__2JgQi"}},function(e,t,n){e.exports={default:"SuperButton_default__2iszQ",red:"SuperButton_red__3Mz14"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1GW73",spanClassName:"SuperCheckbox_spanClassName__2qtbh"}},,,,,,function(e,t,n){e.exports={App:"App_App__3ZBbj"}},function(e,t,n){e.exports={header:"Header_header__2D-rn"}},function(e,t,n){e.exports={someClass:"Affairs_someClass__2cGIB",affairs:"Affairs_affairs__2u91N"}},function(e,t,n){e.exports={main:"HW6_main__33JFf"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(28),s=n.n(c),i=(n(39),n(29)),o=n.n(i),l=n(10),j=n(3),u=n(30),b=n.n(u),d=n(8),h=n.n(d),O=n(2),x=n(15),m=n.n(x),_=n(0);var f=function(){return Object(_.jsxs)("div",{className:m.a.error,children:[Object(_.jsxs)("div",{className:m.a.text,children:["404",Object(_.jsx)("br",{}),"Sorry..."]}),Object(_.jsx)("img",{className:m.a.image,src:"https://images-na.ssl-images-amazon.com/images/I/51yEw1u0HqL._AC_SY1000_.jpg",alt:"turd"})]})};function p(){return Object(_.jsx)("div",{children:Object(_.jsx)("b",{children:"Page for future HomeWorks JUNIOR level."})})}function v(){return Object(_.jsx)("div",{children:Object(_.jsx)("b",{children:"Page for future HomeWorks JUNIOR+ level."})})}var k=n(9),g=n.n(k);var C=function(e){return Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:g.a.message,children:[Object(_.jsx)("div",{className:g.a.avatar,children:Object(_.jsx)("img",{src:e.avatar})}),Object(_.jsx)("div",{className:g.a.arrow}),Object(_.jsxs)("div",{className:g.a.messageBlock,children:[Object(_.jsx)("div",{className:g.a.blockName,children:e.name}),Object(_.jsx)("div",{className:g.a.blockMessage,children:e.message}),Object(_.jsx)("div",{className:g.a.blockTime,children:e.time})]})]})})},N="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",S="Some Name",w="some text",y="22:00";var E=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 1",Object(_.jsx)(C,{avatar:N,name:S,message:w,time:y}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},M=n(20),A=n.n(M);var B=function(e){return Object(_.jsxs)("div",{children:[Object(_.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:A.a.button,children:"X"}),Object(_.jsx)("span",{children:"".concat(e.affair._id,". ").concat(e.affair.name," [")}),Object(_.jsx)("span",{className:"".concat(A.a[e.affair.priority]),children:e.affair.priority}),Object(_.jsx)("span",{children:"]"})]})},I=n(31),P=n.n(I);var T=function(e){var t=e.data.map((function(t){return Object(_.jsx)(B,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(_.jsxs)("div",{className:P.a.affairs,children:[t,Object(_.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(_.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(_.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(_.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(a.useState)(H),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 2",Object(_.jsx)(T,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!=t}))}(n,e))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},L=n(34),U=n(48),J=n(13),W=n.n(J),D=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.error,c=e.totalUsers,s=r?W.a.error:W.a.ok;return Object(_.jsxs)("div",{className:W.a.container,children:[Object(_.jsx)("input",{value:t,onChange:function(e){return n(e.currentTarget.value)},className:s}),Object(_.jsx)("span",{children:r}),Object(_.jsx)("button",{onClick:a,children:"add"}),Object(_.jsx)("span",{className:W.a.totalUsers,children:c})]})},G=0,q=function(e){e.users,e.addUserCallback;var t=Object(a.useState)(""),n=Object(j.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(""),i=Object(j.a)(s,2),o=i[0],l=i[1];return Object(_.jsx)(D,{name:r,setNameCallback:function(e){c(e),l("")},addUser:function(){r?(G++,l(""),alert("Hello, ".concat(r," !")),c("")):l(" ERROR! Input name! ")},error:o,totalUsers:G})};var z=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 3",Object(_.jsx)(q,{users:n,addUserCallback:function(e){var t={_id:Object(U.a)(),name:e};r([t].concat(Object(L.a)(n)))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},R=n(6),K=n(7),X=n(16),Y=n.n(X),Q=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(K.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(Y.a.error," ").concat(i||""),j="".concat(c?Y.a.errorInput:Y.a.superInput," ").concat(s);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",Object(R.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(_.jsx)("span",{className:l,children:c})]})},Z=n(21),V=n.n(Z),$=n(22),ee=n.n($),te=function(e){var t=e.red,n=e.className,a=Object(K.a)(e,["red","className"]),r="".concat(t?ee.a.red:ee.a.default," ").concat(n);return Object(_.jsx)("button",Object(R.a)({className:r},a))},ne=n(23),ae=n.n(ne),re=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(K.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(ae.a.checkbox," ").concat(a||"");return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(R.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),r&&Object(_.jsx)("span",{className:ae.a.spanClassName,children:r})]})};var ce=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1],b=function(e){return u(e.currentTarget.checked)};return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 4",Object(_.jsxs)("div",{className:V.a.column,children:[Object(_.jsx)(Q,{value:n,onChangeText:r,onEnter:s,error:c}),Object(_.jsx)(Q,{className:V.a.blue,value:n,onChangeText:r,error:c}),Object(_.jsx)(te,{children:"default"}),Object(_.jsx)(te,{red:!0,onClick:s,children:"delete "}),Object(_.jsx)(te,{disabled:!0,children:"Button disabled"}),Object(_.jsx)(re,{checked:l,onChangeChecked:u,children:"some text "}),Object(_.jsx)(re,{checked:l,onChange:b}),Object(_.jsx)(re,{checked:l,onChangeChecked:u,onChange:b,children:"Double call"})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},se=n(17),ie=n.n(se),oe=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(K.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=r||{},b=u.children,d=u.onDoubleClick,h=(u.className,Object(K.a)(u,["children","onDoubleClick","className"])),O="".concat(ie.a.editableSpan," ").concat(c.spanClassName?ie.a[c.spanClassName]:"");return Object(_.jsx)(_.Fragment,{children:o?Object(_.jsx)(Q,Object(R.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(_.jsxs)("div",{children:[Object(_.jsx)("img",{className:ie.a.pen,src:"https://iconarchive.com/download/i96727/iconsmind/outline/Pen.ico",alt:"pen"}),Object(_.jsx)("span",Object(R.a)(Object(R.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:O},h),{},{children:b||c.value}))]})})};var le=n(32),je=n.n(le);var ue=function(){var e=function(){return function(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}("editable-span-value","")},t=Object(a.useState)(e()),n=Object(j.a)(t,2),r=n[0],c=n[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 6",Object(_.jsxs)("div",{className:je.a.main,children:[Object(_.jsx)("div",{children:Object(_.jsx)(oe,{value:r,onChangeText:c,spanProps:{children:r?void 0:"enter text..."},onEnter:function(){return alert("Hello, onEnter!")},onBlur:function(){return alert("Hello, onBlur!")},spanClassName:"spanParameter"})}),Object(_.jsx)(te,{onClick:function(){!function(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}("editable-span-value",r)},children:"save"}),Object(_.jsx)(te,{onClick:function(){c(e())},children:"restore"})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var be=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(E,{}),Object(_.jsx)(F,{}),Object(_.jsx)(z,{}),Object(_.jsx)(ce,{}),Object(_.jsx)(ue,{})]})},de="/pre-junior",he="/junior",Oe="/junior-plus";var xe=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(O.d,{children:[Object(_.jsx)(O.b,{path:"/",exact:!0,render:function(){return Object(_.jsx)(O.a,{to:de})}}),Object(_.jsx)(O.b,{path:de,render:function(){return Object(_.jsx)(be,{})}}),Object(_.jsx)(O.b,{path:he,render:function(){return Object(_.jsx)(p,{})}}),Object(_.jsx)(O.b,{path:Oe,render:function(){return Object(_.jsx)(v,{})}}),Object(_.jsx)(O.b,{render:function(){return Object(_.jsx)(f,{})}})]})})};function me(e){return Object(_.jsxs)("div",{className:h.a.navbar,children:[Object(_.jsx)("div",{className:h.a.item,children:Object(_.jsx)(l.b,{to:de,activeClassName:h.a.activeLink,onClick:e.onLinkClick,children:"Pre Junior"})}),Object(_.jsx)("div",{className:h.a.item,children:Object(_.jsx)(l.b,{to:he,activeClassName:h.a.activeLink,onClick:e.onLinkClick,children:"Junior"})}),Object(_.jsx)("div",{className:h.a.item,children:Object(_.jsx)(l.b,{to:Oe,activeClassName:h.a.activeLink,onClick:e.onLinkClick,children:"Junior +"})})]})}var _e=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{className:b.a.header,onMouseOver:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:["My pages",n&&Object(_.jsx)(me,{onLinkClick:function(){r(!1)}})]})};var fe=function(){return Object(_.jsx)("div",{children:Object(_.jsxs)(l.a,{children:[Object(_.jsx)(_e,{}),Object(_.jsx)(xe,{})]})})};var pe=function(){return Object(_.jsxs)("div",{className:o.a.App,children:[Object(_.jsx)("div",{children:"react homeworks:"}),Object(_.jsx)(fe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.16043caf.chunk.js.map