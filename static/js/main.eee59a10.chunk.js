(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){t.exports={container:"container_container__oj6Oi"}},function(t,e,n){t.exports={section:"section_section__2_-k7"}},function(t,e,n){t.exports={contactForm:"contactForm_contactForm__2kf9v"}},function(t,e,n){t.exports={input:"input_input__1vInn"}},function(t,e,n){t.exports={button:"button_button__2y5Yz"}},function(t,e,n){t.exports={contactItem:"contactItem_contactItem__2PQs4"}},function(t,e,n){t.exports={contactList:"contactList_contactList__1hiT1"}},function(t,e,n){t.exports={filter:"filter_filter__3Y3e8"}},,,,,,,function(t,e,n){},,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(26),n(20)),s=n(3),l=n(4),u=n(7),d=n(6),m=n(11),b=n.n(m),j=(n(39),n(12)),h=n.n(j),f=n(0),p=function(t){var e=t.children;return Object(f.jsx)("div",{className:h.a.container,children:e})},O=n(13),x=n.n(O),v=function(t){var e=t.title,n=t.children;return Object(f.jsxs)("div",{className:x.a.section,children:[Object(f.jsx)("h2",{children:e}),n]})},C=n(2),g=n(5),_=n(14),y=n.n(_),N=n(21),k=n(15),S=n.n(k),A=function(t){var e=t.type,n=void 0===e?"text":e,a=t.id,c=t.value,r=t.className,i=t.placeHolder,o=t.name,s=t.onChange,l=Object(N.a)(t,["type","id","value","className","placeHolder","name","onChange"]),u=[S.a.input,r].join(" ");return Object(f.jsx)("input",Object(C.a)(Object(C.a)({},l),{},{id:a,type:n,value:c,name:o,className:u,placeholder:i,onChange:s,required:!0}))},F=n(16),w=n.n(F),D=function(t){var e=t.className,n=t.children,a=t.type,c=t.onClick,r=[w.a.button,e].join(" ");return Object(f.jsx)("button",{className:r,type:a,onClick:c,children:n})},I=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState((function(){return Object(g.a)({},a,c)}))},t.handleSubmit=function(e){e.preventDefault();var n=t.props.onSubmit;n&&n(Object(C.a)({},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{className:y.a.contactForm,onSubmit:this.handleSubmit,children:[Object(f.jsx)("label",{htmlFor:"name",children:"Name"}),Object(f.jsx)(A,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."}),Object(f.jsx)("label",{htmlFor:"number",children:"Number"}),Object(f.jsx)(A,{type:"tel",name:"number",value:this.state.number,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}),Object(f.jsx)(D,{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),z=n(17),H=n.n(z),L=function(t){var e=t.id,n=t.name,a=t.number,c=t.onDelete;return Object(f.jsxs)("li",{className:H.a.contactItem,children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("span",{children:[n,": "]}),Object(f.jsx)("span",{children:a})]}),Object(f.jsx)(D,{type:"button",onClick:function(){return c(e)},children:"Delete"})]})},E=n(18),J=n.n(E),T=function(t){var e=t.items,n=t.onDelete;return Object(f.jsx)("ul",{className:J.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(L,{id:e,name:a,number:c,onDelete:n},e)}))})},Z=n(19),B=n.n(Z),M=function(t){var e=t.filter,n=t.onChange;return Object(f.jsxs)("form",{className:B.a.filter,children:[Object(f.jsx)("label",{htmlFor:"filter",children:"Find contacts by name"}),Object(f.jsx)(A,{type:"text",name:"filter",value:e,onChange:n})]})},P=(n(41),function(t){var e=t.message;return Object(f.jsx)("p",{children:e})}),R=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:b()("prefix-"),name:n,number:a};c.name!==n?t.setState((function(t){return{contacts:[c].concat(Object(o.a)(t.contacts))}})):alert("".concat(n," is already in contacts."))},t.filterHandler=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=new RegExp(n,"gi");return n?a.filter((function(t){return c.test(t.name)})):a},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getFilteredContacts();return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(p,{children:[Object(f.jsx)(v,{title:"Phonebook",children:Object(f.jsx)(I,{onSubmit:this.addContact})}),Object(f.jsxs)(v,{title:"Contacts",children:[Object(f.jsx)(M,{value:this.state.filter,onChange:this.filterHandler}),t.length>0?Object(f.jsx)(T,{items:t,onDelete:this.deleteContact}):Object(f.jsx)(P,{message:"No any contacts here"})]})]})})}}]),n}(a.Component);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(R,{})}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.eee59a10.chunk.js.map