(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={button:"ContactForm_button__3v6L4"}},13:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(11),u=n(1),i=n(2),m=n(4),s=n(5),h=n(19),d=n(9),b=n(3),p=n(10),f=n.n(p),v=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.InputNameId=Object(h.a)(),e.InputNumberId=Object(h.a)(),e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.handleSubmit=function(t){var n=e.props.onAddContact;t.preventDefault(),n(Object(d.a)({},e.state)),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.title,t=this.state,n=t.name,a=t.number;return r.a.createElement("div",null,r.a.createElement("h2",null,e),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:this.InputNameId},"Name:"),r.a.createElement("input",{name:"name",id:this.InputNameId,type:"text",onChange:this.handleChange,value:n})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:this.InputNumberId},"Number:"),r.a.createElement("input",{name:"number",id:this.InputNumberId,type:"number",onChange:this.handleChange,value:a})),r.a.createElement("button",{className:f.a.button,type:"submit"},"Add contact")))}}]),n}(a.Component),C=n(6),E=n.n(C),g=function(e){var t=e.contactItem,n=e.onRemoveContact,a=t.name,c=t.number;return r.a.createElement("div",{className:E.a.container},r.a.createElement("p",null,a,r.a.createElement("span",null," : "),r.a.createElement("span",null,c)),r.a.createElement("button",{className:E.a.buttonDelete,onClick:n,type:"button"},"Delete contact"))},y=function(e){var t=e.contacts,n=e.onRemoveContact;return t.length>0&&r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(g,{contactItem:e,onRemoveContact:function(){return n(e.id)}}))})))},I=function(e){var t=e.handleFilterChange;return r.a.createElement("div",null,r.a.createElement("h3",null,"Find your contact:"),r.a.createElement("input",{type:"text",onChange:t}))},j=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.hasContact=function(t){return e.state.contacts.some((function(e){return e.name.toLowerCase()===t.toLowerCase()}))},e.addToContacts=function(t){var n=t.name,a=t.number;if(e.hasContact(n))alert("Already in contacts ".concat(n));else{var r={name:n,number:a,id:Object(h.a)()};e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[r])}}))}},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.handleFilterChange=function(t){var n=t.target.value;e.setState({filter:n})},e}return Object(i.a)(n,[{key:"applyFilter",value:function(){var e=this.state,t=e.contacts,n=e.filter;return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))}},{key:"render",value:function(){var e=this.state.contacts,t=this.applyFilter(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{title:"Phonebook",onAddContact:this.addToContacts}),e.length>1&&r.a.createElement(I,{handleFilterChange:this.handleFilterChange}),r.a.createElement(y,{contacts:t,onRemoveContact:this.removeContact}))}}]),n}(a.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))},6:function(e,t,n){e.exports={container:"ContactItem_container__2BnnW",buttonDelete:"ContactItem_buttonDelete__1Lj_A"}}},[[13,1,2]]]);
//# sourceMappingURL=main.77f84986.chunk.js.map