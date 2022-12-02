"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[919],{7919:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(2791),a=r.n(n),l=r(4075),i=r.n(l),c=r(6410);r(5862);function o(e){var t=e.proyects;return a().createElement(a().Fragment,null,a().createElement(i(),null,a().createElement("div",{className:"card__container",style:{order:t.order}},a().createElement("div",{className:"card__containerImage"},t?a().createElement("img",{src:"https://db-portfolio-u3mm.vercel.app/proyect/proyect-image/".concat(t.image),alt:t.title,loading:"lazy",className:"card__image"}):a().createElement(c.Z,{className:"card__image",borderRadius:"0.25rem",baseColor:"#b0b0b0",highlightColor:"#444"})),a().createElement("div",{className:"card__containerInfo"},a().createElement("h4",{className:"card__title"},t.title||a().createElement(c.Z,{baseColor:"#b0b0b0",highlightColor:"#444"})),a().createElement("div",{className:"card__skillsContainer"},t.skill.map((function(e){return a().createElement("p",{key:e._id,className:"card__skills"},e.skill)}))),a().createElement("p",{className:"card__description"},t.description||a().createElement(c.Z,{baseColor:"#b0b0b0",highlightColor:"#444"}))),a().createElement("div",{className:"card__linksContainer"},a().createElement("a",{href:t.demolink,target:"_blank",rel:"noreferrer",className:"card__link demo"},"Proyecto"),"null"===t.repolink?a().createElement(a().Fragment,null):a().createElement("a",{href:"https://github.com/gastoncabrera/".concat(t.repolink),target:"_blank",rel:"noreferrer",className:"card__link code"},"Codigo")))))}function s(e){var t=e.skill,r=e.proyects;return a().createElement(a().Fragment,null,a().createElement("div",{className:"main"},a().createElement("div",{className:"main__container"},a().createElement("h1",{className:"main__title",id:"skill"},"Habilidades"),t?a().createElement("div",{className:"main__containerSkills"},null===t||void 0===t?void 0:t.map((function(e,t){return a().createElement("img",{src:"https://db-portfolio-u3mm.vercel.app/skill/skill-image/".concat(e.image),alt:e.skill,className:"main__skills",loading:"lazy",title:e.skill})}))):a().createElement(c.Z,{className:"main__skills skeleton",inline:!0,borderRadius:"1.25rem",width:50,baseColor:"#b0b0b0",highlightColor:"#444",count:11})),a().createElement("div",{className:"main__proyects"},a().createElement("h1",{className:"main__titleProyects",id:"proyect"},"Proyectos"),a().createElement("div",{className:"card"},null===r||void 0===r?void 0:r.map((function(e){return a().createElement(o,{proyects:e,key:e._id})}))))))}},5862:function(){},6410:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(885);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=r(2791),s=["count","wrapper","className","containerClassName","containerTestId","circle","style"],m=o.createContext({});function d(e){for(var t,r,a,l=e.count,d=void 0===l?1:l,u=e.wrapper,p=e.className,b=e.containerClassName,f=e.containerTestId,y=e.circle,g=void 0!==y&&y,h=e.style,v=c(e,s),_=o.useContext(m),E=i({},v),k=0,N=Object.entries(v);k<N.length;k++){var O=(0,n.Z)(N[k],2),C=O[0];"undefined"===typeof O[1]&&delete E[C]}var w=i(i(i({},_),E),{},{circle:g}),j=i(i({},h),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,a=e.height,l=e.borderRadius,i=e.circle,c=e.direction,o=e.duration,s=e.enableAnimation,m=void 0===s||s,d={};return"rtl"===c&&(d["--animation-direction"]="reverse"),"number"===typeof o&&(d["--animation-duration"]="".concat(o,"s")),m||(d["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(d.width=n),"string"!==typeof a&&"number"!==typeof a||(d.height=a),"string"!==typeof l&&"number"!==typeof l||(d.borderRadius=l),i&&(d.borderRadius="50%"),"undefined"!==typeof t&&(d["--base-color"]=t),"undefined"!==typeof r&&(d["--highlight-color"]=r),d}(w)),P="react-loading-skeleton";p&&(P+=" ".concat(p));for(var Z=null!==(t=w.inline)&&void 0!==t&&t,I=[],R=Math.ceil(d),S=0;S<R;S++){var x=j;if(R>d&&S===R-1){var D=null!==(r=x.width)&&void 0!==r?r:"100%",F=d%1,z="number"===typeof D?D*F:"calc(".concat(D," * ").concat(F,")");x=i(i({},x),{},{width:z})}var A=o.createElement("span",{className:P,style:x,key:S},"\u200c");Z?I.push(A):I.push(o.createElement(o.Fragment,{key:S},A,o.createElement("br",null)))}return o.createElement("span",{className:b,"data-testid":f,"aria-live":"polite","aria-busy":null===(a=w.enableAnimation)||void 0===a||a},u?I.map((function(e,t){return o.createElement(u,{key:t},e)})):I)}}}]);
//# sourceMappingURL=919.3c09c667.chunk.js.map