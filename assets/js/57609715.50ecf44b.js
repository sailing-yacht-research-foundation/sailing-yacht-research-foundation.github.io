(self.webpackChunksyrf_devdocs=self.webpackChunksyrf_devdocs||[]).push([[7073],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||s;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var d=2;d<s;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4766:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=n(2122),r=n(9756),s=(n(7294),n(3905)),a=["components"],o={sidebar_position:2},l={unversionedId:"guides/datamodel/events",id:"guides/datamodel/events",isDocsHomePage:!1,title:"Events",description:"Events provide a means to understand how vessels are interacting with courses. Geospatial calculations are geodesic.",source:"@site/docs/guides/datamodel/events.md",sourceDirName:"guides/datamodel",slug:"/guides/datamodel/events",permalink:"/sailing-yacht-research-foundation.github.io/docs/guides/datamodel/events",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/datamodel/events.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"Types",permalink:"/sailing-yacht-research-foundation.github.io/docs/guides/datamodel/types"},next:{title:"Permissions and Scopes",permalink:"/sailing-yacht-research-foundation.github.io/docs/guides/permissions"}},d=[{value:"<code>VesselPointRounding</code>",id:"vesselpointrounding",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"<code>VesselLineInsideCrossing</code>",id:"vessellineinsidecrossing",children:[]},{value:"Attributes",id:"attributes-1",children:[]},{value:"<code>VesselLineOutsideCrossing</code>",id:"vessellineoutsidecrossing",children:[]},{value:"Attributes",id:"attributes-2",children:[]},{value:"<code>VesselPolygonEntered</code>",id:"vesselpolygonentered",children:[]},{value:"Attributes",id:"attributes-3",children:[]},{value:"<code>VesselPolygonExited</code>",id:"vesselpolygonexited",children:[]},{value:"Attributes",id:"attributes-4",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,s.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("script",{async:!0,defer:!0,"data-website-id":"d9c6bc6c-4456-4d65-ac9a-cd8a579d76e4",src:"https://analytics.syrf.io/umami.js"}),(0,s.kt)("p",null,"Events provide a means to understand how vessels are interacting with courses. Geospatial calculations are geodesic. "),(0,s.kt)("h2",{id:"vesselpointrounding"},(0,s.kt)("inlineCode",{parentName:"h2"},"VesselPointRounding")),(0,s.kt)("p",null,"This event occurs when a vessel crosses the imaginary line drawn from a course geometry point upwind towards the direction the wind is coming from.\nThe imaginary line is 100m long. "),(0,s.kt)("h2",{id:"attributes"},"Attributes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eventTimestamp")," An interpolated timestamp for when this took place."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vesselParticipant")," FK, which vessel participant rounded the point."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"point")," FK, which point was rounded. ")),(0,s.kt)("h2",{id:"vessellineinsidecrossing"},(0,s.kt)("inlineCode",{parentName:"h2"},"VesselLineInsideCrossing")),(0,s.kt)("p",null,"This event occurs when a vessel crosses within the endpoints of any course line."),(0,s.kt)("h2",{id:"attributes-1"},"Attributes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eventTimestamp")," An interpolated timestamp for when this took place."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vesselParticipant")," FK, which vessel participant crossed the line internally."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"line")," FK, which line was crossed. ")),(0,s.kt)("h2",{id:"vessellineoutsidecrossing"},(0,s.kt)("inlineCode",{parentName:"h2"},"VesselLineOutsideCrossing")),(0,s.kt)("p",null,"This event occurs when a vessel crosses lines formed by extending the ending segments of a line by 100m. "),(0,s.kt)("h2",{id:"attributes-2"},"Attributes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eventTimestamp")," An interpolated timestamp for when this took place."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vesselParticipant")," FK, which vessel participant crossed the line externally."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"line")," FK, which line was crossed (outside of the line). ")),(0,s.kt)("h2",{id:"vesselpolygonentered"},(0,s.kt)("inlineCode",{parentName:"h2"},"VesselPolygonEntered")),(0,s.kt)("p",null,"This event occurs when a vessel enters a polygon. "),(0,s.kt)("h2",{id:"attributes-3"},"Attributes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eventTimestamp")," An interpolated timestamp for when this took place."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vesselParticipant")," FK, which vessel participant entered the polygon."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"polygon")," FK, which polygon was entered.")),(0,s.kt)("h2",{id:"vesselpolygonexited"},(0,s.kt)("inlineCode",{parentName:"h2"},"VesselPolygonExited")),(0,s.kt)("p",null,"This event occurs when a vessel exits a polygon. "),(0,s.kt)("h2",{id:"attributes-4"},"Attributes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"eventTimestamp")," An interpolated timestamp for when this took place."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vesselParticipant")," FK, which vessel participant exited the polygon."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"polygon")," FK, which polygon was exited.")))}u.isMDXComponent=!0}}]);