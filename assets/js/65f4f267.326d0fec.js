(self.webpackChunksyrf_devdocs=self.webpackChunksyrf_devdocs||[]).push([[9721],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4956:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),s=["components"],o={sidebar_position:10},l={unversionedId:"guides/raceconfigs",id:"guides/raceconfigs",isDocsHomePage:!1,title:"Common Race Configurations",description:"Here we describe high level instructions for handling common race configurations and problems.",source:"@site/docs/guides/raceconfigs.md",sourceDirName:"guides",slug:"/guides/raceconfigs",permalink:"/docs/guides/raceconfigs",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/raceconfigs.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"guidesSidebar",previous:{title:"Validation",permalink:"/docs/guides/validation"},next:{title:"Realtime Data",permalink:"/docs/guides/realtimescoring"}},c=[{value:"Pursuit starts",id:"pursuit-starts",children:[]},{value:"Different starts, same finish",id:"different-starts-same-finish",children:[]},{value:"OCS",id:"ocs",children:[]},{value:"Z, Black flags",id:"z-black-flags",children:[]},{value:"Offset marks",id:"offset-marks",children:[]},{value:"Match racing",id:"match-racing",children:[]},{value:"Drifting marks",id:"drifting-marks",children:[]},{value:"Complicated leaderboards and trophies",id:"complicated-leaderboards-and-trophies",children:[]},{value:"Super Mario gameplay",id:"super-mario-gameplay",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("script",{async:!0,defer:!0,"data-website-id":"d9c6bc6c-4456-4d65-ac9a-cd8a579d76e4",src:"https://analytics.syrf.io/umami.js"}),(0,i.kt)("p",null,"Here we describe high level instructions for handling common race configurations and problems."),(0,i.kt)("h2",{id:"pursuit-starts"},"Pursuit starts"),(0,i.kt)("p",null,"Pursuit starts occur when a group of vessels are sailing around the same course, but the faster boats are given a later start time than the slower boats.\nPursuit starts can be handled in two ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option 1: use a single VesselParticipationGroup for the course. This is the recommended tactic for PCS pursuit starts.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Treat the earliest boat's start time as the start of the competition."),(0,i.kt)("li",{parentName:"ul"},"Find the elapsed time between the first boat and the actual start for each boat."),(0,i.kt)("li",{parentName:"ul"},"Subtract that elapsed time from both the corrected and elapsed times for those boats."))),(0,i.kt)("li",{parentName:"ul"},"Option 2: give each boat it's own VesselParticipationGroup with its own start time.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This technique doesn't work for PCS because PCS requires all vessels to be in the same group.")))),(0,i.kt)("h2",{id:"different-starts-same-finish"},"Different starts, same finish"),(0,i.kt)("p",null,"For a rally or similar race where vessels may start wherever they want and they are racing against each other to the same finish,\nyou can run these events by simply creating a unique VesselParticipationGroup for each starting location and subscribing to and comparing elapsed times across groups."),(0,i.kt)("h2",{id:"ocs"},"OCS"),(0,i.kt)("p",null,"On Course Side can be implemented by numerous techniques. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Option 1: Create a timed geometry polygon in front of the start that begins a few minutes before start time and ends at start time.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There will be a VesselPolygonEntered event if a vessel is in the polygon before the race."))),(0,i.kt)("li",{parentName:"ul"},"Option 2: Monitor for both VesselLineInsideCrossed and VesselLineOutsideCrossed events and check the time of the event against the start time of the competition.")),(0,i.kt)("h2",{id:"z-black-flags"},"Z, Black flags"),(0,i.kt)("p",null,"These types of flags are easily handled using the same technique as OCS: simply define timed or untimed course geometry using the points in your courses and monitor for events associated with\nvessels interacting with said geometry, and optionally compare the event time with the start time."),(0,i.kt)("h2",{id:"offset-marks"},"Offset marks"),(0,i.kt)("p",null,"Offset marks are easily handled by adding a point object following an upwind mark point object in your sequenced course geometry."),(0,i.kt)("h2",{id:"match-racing"},"Match racing"),(0,i.kt)("p",null,"Create a new VesselParticipantGroup for each pair of vessels competing against each other. Give each pair match its own CompetitionUnit, then pull the data you need to rank however you wish."),(0,i.kt)("h2",{id:"drifting-marks"},"Drifting marks"),(0,i.kt)("p",null,"Since the idealized location of course points is editable, your end users can update the location of the points at any point in the race.\nAdditionally, points that are attached to trackers will benefit from always having the most up to date location. "),(0,i.kt)("h2",{id:"complicated-leaderboards-and-trophies"},"Complicated leaderboards and trophies"),(0,i.kt)("p",null,"Apps can subscribe to any number of VesselParticipantGroups across any number of CompetitionUnits and the corrected elapsed times can be sorted or ranked however the developer wishes. "),(0,i.kt)("h2",{id:"super-mario-gameplay"},"Super Mario gameplay"),(0,i.kt)("p",null,"Someone please build a racing app where vessels gain points by entering timed regions or get points taken away by not avoiding regions with sea monsters."))}d.isMDXComponent=!0}}]);