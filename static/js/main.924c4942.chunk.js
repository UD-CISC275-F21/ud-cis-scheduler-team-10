(this["webpackJsonpfinal-project-starter"]=this["webpackJsonpfinal-project-starter"]||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(11),s=n.n(r),o=(n(36),n(37),n(38),n(51)),a=n(52),j=n(49),u=n(1);function d(){return Object(u.jsx)(j.a,{variant:"danger",children:"Clear Courses"})}var b=n(3),l=n(50);n(40);function O(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),i=n[0],r=n[1];function s(t){t.key===e&&r(!0)}var o=function(t){t.key===e&&r(!1)};return Object(c.useEffect)((function(){return window.addEventListener("keydown",s),window.addEventListener("keyup",o),function(){window.removeEventListener("keydown",s),window.removeEventListener("keyup",o)}}),[]),i}var x=function(e){var t,n,i=e.text,r=e.onSetText,s=Object(c.useState)(!1),o=Object(b.a)(s,2),a=o[0],j=o[1],d=Object(c.useState)(i),l=Object(b.a)(d,2),x=l[0],h=l[1],f=Object(c.useRef)(null),m=Object(c.useRef)(null),p=Object(c.useRef)(null),v=O("Enter"),S=O("Escape");return t=f,n=function(){a&&(r(x),j(!1))},Object(c.useEffect)((function(){var e=function(e){var c=null===t||void 0===t?void 0:t.current;c&&!c.contains(e.target)&&n(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[t,n]),Object(c.useEffect)((function(){var e;a&&(null===p||void 0===p||null===(e=p.current)||void 0===e||e.focus())}),[a]),Object(c.useEffect)((function(){a&&(v&&(r(x),j(!1)),S&&(h(i),j(!1)))}),[v,S]),Object(u.jsxs)("span",{className:"inline-text",ref:f,children:[Object(u.jsx)("span",{ref:m,onClick:function(){return j(!0)},className:"inline-text_copy inline-text_copy--".concat(a?"hidden":"active"),children:i}),Object(u.jsx)("input",{ref:p,style:{width:Math.ceil(.9*x.length)+"ex"},value:x,onChange:function(e){h(e.target.value)},className:"inline-text_input inline-text_input--".concat(a?"active":"hidden")})]})};function h(){var e=Object(c.useState)("CISC108"),t=Object(b.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)("3"),s=Object(b.a)(r,2),o=s[0],a=s[1],j=Object(c.useState)("Introduction to Programming"),d=Object(b.a)(j,2),O=d[0],h=d[1],f=Object(c.useState)("Computing and principles of programming with an emphasis on systematic program design. Topics include functional programming, data abstraction, procedural abstraction, \n        use of control and state, recursion, testing, and object-oriented programming concepts. Requires no prior programming experience, open to any major, \n        but intended primarily for majors and minors in computer science or mathematics."),m=Object(b.a)(f,2),p=m[0],v=m[1],S=Object(c.useState)("MATH241"),g=Object(b.a)(S,2),y=g[0],T=g[1],E=Object(c.useState)("4"),w=Object(b.a)(E,2),C=w[0],k=w[1],L=Object(c.useState)("Analytic Geometry and Calculus A"),I=Object(b.a)(L,2),N=I[0],_=I[1],D=Object(c.useState)("Functions, limits, continuity, derivatives. Polynomial, rational, exponential, hyperbolic, logarithmic, trigonometric and inverse trigonometric functions. \n        Definite and indefinite integrals and the Fundamental Theorem of Calculus. Simple differential equations (separable ODE, linear ODE). ODE models leading to exponential growth and decay."),F=Object(b.a)(D,2),A=F[0],G=F[1],P=Object(c.useState)("EGGG101"),K=Object(b.a)(P,2),R=K[0],M=K[1],q=Object(c.useState)("2"),B=Object(b.a)(q,2),J=B[0],H=B[1],U=Object(c.useState)("Introduction to Engineering"),z=Object(b.a)(U,2),Q=z[0],V=z[1],W=Object(c.useState)("Introduction to profession, including disciplines of chemical, civil, computer, electrical, environmental, and mechanical engineering. \n        Prepares students for success through integration of: technical problem solving and engineering design, ethical decision-making, teamwork, and communicating to diverse audiences."),X=Object(b.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)("ENGL110"),ee=Object(b.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)("3"),ie=Object(b.a)(ce,2),re=ie[0],se=ie[1],oe=Object(c.useState)("Seminar and Composition"),ae=Object(b.a)(oe,2),je=ae[0],ue=ae[1],de=Object(c.useState)("Introduction to the process of academic writing that centers on the composition of analytical, research-based essays."),be=Object(b.a)(de,2),le=be[0],Oe=be[1];return Object(u.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Course Number"}),Object(u.jsx)("th",{children:"Course Name"}),Object(u.jsx)("th",{children:"Credits"}),Object(u.jsx)("th",{children:"Description"})]})}),Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:n,onSetText:function(e){return i(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:O,onSetText:function(e){return h(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:o,onSetText:function(e){return a(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:p,onSetText:function(e){return v(e)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:y,onSetText:function(e){return T(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:N,onSetText:function(e){return _(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:C,onSetText:function(e){return k(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:A,onSetText:function(e){return G(e)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:R,onSetText:function(e){return M(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:Q,onSetText:function(e){return V(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:J,onSetText:function(e){return H(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:Y,onSetText:function(e){return Z(e)}})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:te,onSetText:function(e){return ne(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:je,onSetText:function(e){return ue(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:re,onSetText:function(e){return se(e)}})}),Object(u.jsx)("td",{children:Object(u.jsx)(x,{text:le,onSetText:function(e){return Oe(e)}})})]})]})]})}function f(){return Object(u.jsxs)(o.a,{defaultActiveKey:"semester_1",id:"uncontrolled-tab-example",className:"mb-3",children:[Object(u.jsxs)(a.a,{eventKey:"semester_1",title:"Semester 1",children:[Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]}),Object(u.jsxs)(a.a,{eventKey:"semester_2",title:"Semester 2",children:[Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]}),Object(u.jsxs)(a.a,{eventKey:"semester_3",title:"Semester 3",children:[Object(u.jsx)(h,{}),Object(u.jsx)(d,{})]})]})}var m=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"UD CIS Scheduler"}),Object(u.jsx)(f,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()}},[[46,1,2]]]);
//# sourceMappingURL=main.924c4942.chunk.js.map