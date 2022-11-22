"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[919],{7919:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(2791),a=r.n(n),l=r(4075),i=r.n(l),c=r(6410);r(5862);function o(e){var t=e.proyects;return a().createElement(a().Fragment,null,a().createElement(i(),null,a().createElement("div",{className:"card__container"},a().createElement("div",{className:"card__containerImage"},t?a().createElement("img",{src:"https://floating-spire-53343.herokuapp.com/proyect/proyect-image/".concat(t.image),alt:t.title,loading:"lazy",className:"card__image"}):a().createElement(c.Z,{className:"card__image",borderRadius:"0.25rem",baseColor:"#b0b0b0",highlightColor:"#444"})),a().createElement("div",{className:"card__containerInfo"},a().createElement("h4",{className:"card__title"},t.title||a().createElement(c.Z,{baseColor:"#b0b0b0",highlightColor:"#444"})),a().createElement("div",{className:"card__skillsContainer"},t.skill.map((function(e){return a().createElement("p",{key:e._id,className:"card__skills"},e.skill)}))),a().createElement("p",{className:"card__description"},t.description||a().createElement(c.Z,{baseColor:"#b0b0b0",highlightColor:"#444"}))),a().createElement("div",{className:"card__linksContainer"},a().createElement("a",{href:t.demolink,target:"_blank",rel:"noreferrer",className:"card__link demo"},"Demo"),"null"===t.repolink?a().createElement(a().Fragment,null):a().createElement("a",{href:"https://github.com/gastoncabrera/".concat(t.repolink),target:"_blank",rel:"noreferrer",className:"card__link code"},"Code")))))}function s(e){var t=e.skill,r=e.proyects;return a().createElement(a().Fragment,null,a().createElement("div",{className:"main"},a().createElement("div",{className:"main__container"},a().createElement("h1",{className:"main__title",id:"skill"},"Habilidades"),t?a().createElement("div",{className:"main__containerSkills"},null===t||void 0===t?void 0:t.map((function(e,t){return a().createElement("img",{src:"https://floating-spire-53343.herokuapp.com/skill/skill-image/".concat(e.image),alt:e.skill,className:"main__skills",loading:"lazy",title:e.skill})}))):a().createElement(c.Z,{className:"main__skills skeleton",inline:!0,borderRadius:"1.25rem",width:50,baseColor:"#b0b0b0",highlightColor:"#444",count:11})),a().createElement("div",{className:"main__proyects"},a().createElement("h1",{className:"main__titleProyects",id:"proyect"},"Proyectos"),a().createElement("div",{className:"card"},null===r||void 0===r?void 0:r.map((function(e){return a().createElement(o,{proyects:e,key:e._id})}))))))}},5862:function(){},6410:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(885);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=r(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],m=o.createContext({});function u(e){for(var t,r,a,l=e.count,u=void 0===l?1:l,d=e.wrapper,p=e.className,f=e.containerClassName,b=e.containerTestId,g=e.circle,h=void 0!==g&&g,y=e.style,v=c(e,s),_=o.useContext(m),k=i({},v),E=0,N=Object.entries(v);E<N.length;E++){var O=(0,n.Z)(N[E],2),C=O[0];"undefined"===typeof O[1]&&delete k[C]}var w=i(i(i({},_),k),{},{circle:h}),j=i(i({},y),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,a=e.height,l=e.borderRadius,i=e.circle,c=e.direction,o=e.duration,s=e.enableAnimation,m=void 0===s||s,u={};return"rtl"===c&&(u["--animation-direction"]="reverse"),"number"===typeof o&&(u["--animation-duration"]="".concat(o,"s")),m||(u["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(u.width=n),"string"!==typeof a&&"number"!==typeof a||(u.height=a),"string"!==typeof l&&"number"!==typeof l||(u.borderRadius=l),i&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof r&&(u["--highlight-color"]=r),u}(w)),P="react-loading-skeleton";p&&(P+=" ".concat(p));for(var Z=null!==(t=w.inline)&&void 0!==t&&t,D=[],I=Math.ceil(u),R=0;R<I;R++){var S=j;if(I>u&&R===I-1){var x=null!==(r=S.width)&&void 0!==r?r:"100%",F=u%1,z="number"===typeof x?x*F:"calc(".concat(x," * ").concat(F,")");S=i(i({},S),{},{width:z})}var A=o.createElement("span",{className:P,style:S,key:R},"\u200c");Z?D.push(A):D.push(o.createElement(o.Fragment,{key:R},A,o.createElement("br",null)))}return o.createElement("span",{className:f,"data-testid":b,"aria-live":"polite","aria-busy":null===(a=w.enableAnimation)||void 0===a||a},d?D.map((function(e,t){return o.createElement(d,{key:t},e)})):D)}}}]);
//# sourceMappingURL=919.dd066f07.chunk.js.map