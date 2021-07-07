(self.webpackChunksyrf_devdocs=self.webpackChunksyrf_devdocs||[]).push([[6634],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9349:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=r(2122),i=r(9756),n=(r(7294),r(3905)),o=["components"],s={sidebar_position:6},l={unversionedId:"guides/recipes/usetrackingapp",id:"guides/recipes/usetrackingapp",isDocsHomePage:!1,title:"Using the SYRF tracking app",description:"Companies that have existing race and regatta management platforms can use our APIs to configure the SYRF.io mobile tracking app to track races that have been planned in their systems.",source:"@site/docs/guides/recipes/usetrackingapp.md",sourceDirName:"guides/recipes",slug:"/guides/recipes/usetrackingapp",permalink:"/docs/guides/recipes/usetrackingapp",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/recipes/usetrackingapp.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"Realtime Data",permalink:"/docs/guides/realtimescoring"},next:{title:"Congratulations!",permalink:"/docs/guides/sampleapps/congratulations"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Overview",id:"overview",children:[{value:"Get a developer token",id:"get-a-developer-token",children:[]},{value:"Set up your race on SYRF",id:"set-up-your-race-on-syrf",children:[]},{value:"Save the tracking urls provided in the REST responses",id:"save-the-tracking-urls-provided-in-the-rest-responses",children:[]},{value:"Display the iFrame for that race or build your own playback",id:"display-the-iframe-for-that-race-or-build-your-own-playback",children:[]}]}],u={toc:c};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("script",{async:!0,defer:!0,"data-website-id":"d9c6bc6c-4456-4d65-ac9a-cd8a579d76e4",src:"https://analytics.syrf.io/umami.js"}),(0,n.kt)("p",null,"Companies that have existing race and regatta management platforms can use our APIs to configure the SYRF.io mobile tracking app to track races that have been planned in their systems."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"This document assumes some familiarity with our data model."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Suppose you have an existing race management app that allows clubs and individuals to plan races but you don't have a means to track the boats in the race.\nThe SYRF APIs allow you to configure basic race information and use the existing SYRF tracking app to track your races. This is an appealing option for teams without a mobile app or who want to focus on other features. "),(0,n.kt)("p",null,"The process is as follows:"),(0,n.kt)("h3",{id:"get-a-developer-token"},"Get a developer token"),(0,n.kt)("p",null,"You need a developer token which will be provided by the SYRF engineering team.\nIn the future this will be available via a self-service developer dashboard. "),(0,n.kt)("h3",{id:"set-up-your-race-on-syrf"},"Set up your race on SYRF"),(0,n.kt)("p",null,"Within the iRace back end, you will use the SYRF REST APIs to define the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Define the race:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tell us the name of the race, the time it starts, and other required details."),(0,n.kt)("li",{parentName:"ul"},"Provide a bounding box for the region of the race. This bounding box enables us to get the weather and filter erroneous positions."))),(0,n.kt)("li",{parentName:"ul"},"Describe the race course geometry including marks, lines and polygons and their respective idealized locations and sequence."),(0,n.kt)("li",{parentName:"ul"},"Send in each boat for each participant group and optionally the ORC JSON polars for that boat if you'd like to use PCS handicap scoring."),(0,n.kt)("li",{parentName:"ul"},"Send in unique identifiers for each sailor on each boat. The identifiers need only be unique across that boat participation group."),(0,n.kt)("li",{parentName:"ul"},"All of this information is editable at any time by your application using the developer token.")),(0,n.kt)("h3",{id:"save-the-tracking-urls-provided-in-the-rest-responses"},"Save the tracking urls provided in the REST responses"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When you send in the list of sailors/athletes for each boat in the race, you will recieve a url that is unique to each individual in the response."),(0,n.kt)("li",{parentName:"ul"},"That url is a deep link which is specific to that particular sailor/athlete. It is your responsiblitiy to provide the correct link to the correct sailor."),(0,n.kt)("li",{parentName:"ul"},"When a sailor clicks on that link on a mobile device, it will either open the SYRF tracker if they already have it installed, or it will take them to the app store to install it."),(0,n.kt)("li",{parentName:"ul"},"Once the app is installed by the end user, the deep link will immediately take them to a page in the SYRF tracking app that allows them to track for that race.")),(0,n.kt)("h3",{id:"display-the-iframe-for-that-race-or-build-your-own-playback"},"Display the iFrame for that race or build your own playback"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SYRF provides a simple iFrame that can be embedded in your apps to view the map of the race tracking."),(0,n.kt)("li",{parentName:"ul"},"If you would like to build your own map view, or subscribe to course interaction events, you may optionally use the Websockets API to build your own user interfaces, for instance you may want to subscribe to corrected elapsed times."),(0,n.kt)("li",{parentName:"ul"},"Optionally use our protest API after the race to edit the corrected times of the race for races that require protests.")))}p.isMDXComponent=!0}}]);