(self.webpackChunkreact_front=self.webpackChunkreact_front||[]).push([[471],{2471:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var n=r(9596),a=r(7294),o=r(3727),l=r(2122),i=r(7329),c=r(1253),s=(r(9864),r(5697),r(6010)),u=r(6426),m=r(3871),p={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=a.forwardRef((function(e,t){var r=e.align,n=void 0===r?"inherit":r,o=e.classes,i=e.className,u=e.color,d=void 0===u?"initial":u,f=e.component,y=e.display,h=void 0===y?"initial":y,g=e.gutterBottom,v=void 0!==g&&g,b=e.noWrap,E=void 0!==b&&b,S=e.paragraph,w=void 0!==S&&S,x=e.variant,Z=void 0===x?"body1":x,k=e.variantMapping,A=void 0===k?p:k,C=(0,c.Z)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),N=f||(w?"p":A[Z]||p[Z])||"span";return a.createElement(N,(0,l.Z)({className:(0,s.Z)(o.root,i,"inherit"!==Z&&o[Z],"initial"!==d&&o["color".concat((0,m.Z)(d))],E&&o.noWrap,v&&o.gutterBottom,w&&o.paragraph,"inherit"!==n&&o["align".concat((0,m.Z)(n))],"initial"!==h&&o["display".concat((0,m.Z)(h))]),ref:t},C))}));const f=(0,u.Z)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d);var y=r(9693);const h=(0,r(5209).Z)(a.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");var g=r(3483);const v=(0,u.Z)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:(0,y._4)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var t=e.classes,r=(0,c.Z)(e,["classes"]);return a.createElement(g.Z,(0,l.Z)({component:"li",className:t.root,focusRipple:!0},r),a.createElement(h,{className:t.icon}))}));var b=a.forwardRef((function(e,t){var r=e.children,n=e.classes,o=e.className,u=e.component,m=void 0===u?"nav":u,p=e.expandText,d=void 0===p?"Show path":p,y=e.itemsAfterCollapse,h=void 0===y?1:y,g=e.itemsBeforeCollapse,b=void 0===g?1:g,E=e.maxItems,S=void 0===E?8:E,w=e.separator,x=void 0===w?"/":w,Z=(0,c.Z)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),k=a.useState(!1),A=k[0],C=k[1],N=a.Children.toArray(r).filter((function(e){return a.isValidElement(e)})).map((function(e,t){return a.createElement("li",{className:n.li,key:"child-".concat(t)},e)}));return a.createElement(f,(0,l.Z)({ref:t,component:m,color:"textSecondary",className:(0,s.Z)(n.root,o)},Z),a.createElement("ol",{className:n.ol},function(e,t,r){return e.reduce((function(n,o,l){return l<e.length-1?n=n.concat(o,a.createElement("li",{"aria-hidden":!0,key:"separator-".concat(l),className:t},r)):n.push(o),n}),[])}(A||S&&N.length<=S?N:function(e){return b+h>=e.length?e:[].concat((0,i.Z)(e.slice(0,b)),[a.createElement(v,{"aria-label":d,key:"ellipsis",onClick:function(e){C(!0);var t=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");t&&t.focus()}})],(0,i.Z)(e.slice(e.length-h,e.length)))}(N),n.separator,x)))}));const E=(0,u.Z)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(b),S=function(e){var t;return a.createElement("div",null,a.createElement(E,{"aria-label":"breadcrumb"},e.parent.map((function(e){return a.createElement(o.rU,{key:e.name,to:"/"==e.name?"/":"/catalog/".concat(e.name)},e.title)})),a.createElement("p",null,null===(t=e.self)||void 0===t?void 0:t.title)))};var w=r(5977),x=r(7703);const Z=(0,x.$j)((function(e){return{indexes:e.main.indexes}}))((function(e){return a.createElement("div",null,a.createElement("h3",null,"Содержание:"),a.createElement("div",{className:"ml4"},e.indexes.map((function(e,t){return a.createElement("div",{key:t},a.createElement("a",{href:"#".concat(t)},e))}))))}));var k=r(7152);const A=(0,x.$j)((function(e){return{fullCatalog:e.main.fullCatalog}}))((function(e){var t;return a.createElement("div",null,a.createElement(o.rU,{to:e.fullCatalog.name},e.fullCatalog.title),a.createElement("ul",null,null===(t=e.fullCatalog.catalog)||void 0===t?void 0:t.map((function(e){return(0,k.Z)(e)}))))}));var C=r(3806),N=r(9669),j=r.n(N),I=r(2637);const T=function(e){var t=(0,w.k6)();return a.createElement("div",{className:"ml4 mr4",style:{marginTop:"3rem"}},a.createElement("div",{className:"card",onClick:function(r){return t.push("/blog/".concat(e.card.name))}},a.createElement("div",{dangerouslySetInnerHTML:{__html:e.card.text}})),a.createElement("div",null,a.createElement(I.Z,{comments:e.card.comments_count,likes:e.card.likes_count,views:e.card.view_count,isLiked:!1,sendLike:null})))};var B=r(5477);function O(e){return function(e){if(Array.isArray(e))return R(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||_(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const L=function(){var e=M(a.useState(!1),2),t=e[0],r=e[1],n=M(a.useState([]),2),o=n[0],l=n[1],i=M(a.useState(0),2),c=i[0],s=i[1],u=M(a.useState(0),2),m=u[0],p=u[1],d=function(e){r(!0);var t={page:m};j().post("/api/blog/page/",t).then((function(e){p(m+1),l([].concat(O(o),O(e.data.blogs))),s(e.data.pages)})).catch((function(e){return console.log(e.message)})).finally((function(e){return r(!1)}))};return a.useEffect((function(e){d()}),[]),a.createElement("div",null,o.map((function(e){return a.createElement(T,{key:e.title,card:e})})),function(e){if(m<=c)return t?a.createElement("div",{style:{marginTop:"5rem"},className:"row justify-center"},a.createElement(B.Z,null)):a.createElement("div",{className:"row justify-center mt4"},a.createElement("button",{onClick:d,className:"btn btn-red"},"Еще"))}())};var U=r(8846);function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const $=function(e){var t=W(a.useState({}),2),r=t[0],o=t[1],l=W(a.useState([]),2),i=l[0],c=l[1],s=(0,w.UO)().name;return a.useEffect((function(t){if(s){c([]),o({});var r="/api/".concat(e.blog?"blog":"catalog","/").concat(s,"/by_name/");j().get(r,(0,n.Z)()).then((function(e){c(e.data.parent),o(e.data)})).catch((function(e){console.log(e)}))}}),[s]),a.createElement("div",null,a.createElement("div",{className:"main-container"},a.createElement("div",{className:"left-line"},a.createElement(A,null)),a.createElement("div",{className:"col3"},s&&a.createElement(S,{parent:i,self:r}),e.catalog&&a.createElement(C.Z,{catalog:r})||e.blog&&a.createElement(U.Z,{blog:r})||e.cards&&a.createElement(L,null)),a.createElement("div",{className:"right-line"},e.blog&&a.createElement(Z,null))))}}}]);