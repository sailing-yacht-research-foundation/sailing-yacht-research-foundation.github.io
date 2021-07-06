(self.webpackChunksyrf_devdocs=self.webpackChunksyrf_devdocs||[]).push([[7356],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4098:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),o=["components"],c={sidebar_position:3},p="Quick Start",s={unversionedId:"guides/quickstart",id:"guides/quickstart",isDocsHomePage:!1,title:"Quick Start",description:"How Do I?",source:"@site/docs/guides/quickstart.md",sourceDirName:"guides",slug:"/guides/quickstart",permalink:"/docs/guides/quickstart",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/quickstart.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"Support",permalink:"/docs/guides/support"},next:{title:"Design Philosophy",permalink:"/docs/guides/philosophy"}},u=[{value:"How Do I?",id:"how-do-i",children:[{value:"Add SYRF SSO to my app?",id:"add-syrf-sso-to-my-app",children:[]},{value:"Use SYRF tracking app for tracking if I have an existing race planning app?",id:"use-syrf-tracking-app-for-tracking-if-i-have-an-existing-race-planning-app",children:[]},{value:"Embed a playback iFrame?",id:"embed-a-playback-iframe",children:[]},{value:"Subscribe to race data?",id:"subscribe-to-race-data",children:[]},{value:"Create a custom tracking app?",id:"create-a-custom-tracking-app",children:[]},{value:"Pull data from an expired race?",id:"pull-data-from-an-expired-race",children:[]}]}],d={toc:u};function l(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quick-start"},"Quick Start"),(0,i.kt)("script",{async:!0,defer:!0,"data-website-id":"d9c6bc6c-4456-4d65-ac9a-cd8a579d76e4",src:"https://analytics.syrf.io/umami.js"}),(0,i.kt)("h2",{id:"how-do-i"},"How Do I?"),(0,i.kt)("h3",{id:"add-syrf-sso-to-my-app"},"Add SYRF SSO to my app?"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"use-syrf-tracking-app-for-tracking-if-i-have-an-existing-race-planning-app"},"Use SYRF tracking app for tracking if I have an existing race planning app?"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/recipes/usetrackingapp"},"our recipe here.")),(0,i.kt)("h3",{id:"embed-a-playback-iframe"},"Embed a playback iFrame?"),(0,i.kt)("p",null,"Add this snippet to your html:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<iframe src='https://playback.syrf.io/?token=YOUR_DEVELOPER_TOKEN&race=RACE_ID'>\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reminder")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Don't forget to replace your token and the race ID."))),(0,i.kt)("h3",{id:"subscribe-to-race-data"},"Subscribe to race data?"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"create-a-custom-tracking-app"},"Create a custom tracking app?"),(0,i.kt)("p",null,"TODO"),(0,i.kt)("h3",{id:"pull-data-from-an-expired-race"},"Pull data from an expired race?"),(0,i.kt)("p",null,"TODO"))}l.isMDXComponent=!0}}]);