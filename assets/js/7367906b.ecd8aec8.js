(self.webpackChunksyrf_devdocs=self.webpackChunksyrf_devdocs||[]).push([[375],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8229:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return c}});var i=a(2122),n=a(9756),r=(a(7294),a(3905)),o=["components"],l={sidebar_position:1},s="Types",d={unversionedId:"guides/datamodel/types",id:"guides/datamodel/types",isDocsHomePage:!1,title:"Types",description:"This page describes high level types which are used across our client SDKs, REST and Websocket APIs.",source:"@site/docs/guides/datamodel/types.md",sourceDirName:"guides/datamodel",slug:"/guides/datamodel/types",permalink:"/docs/guides/datamodel/types",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guides/datamodel/types.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guidesSidebar",previous:{title:"Lifecycle",permalink:"/docs/guides/eventlifecycle"},next:{title:"Events",permalink:"/docs/guides/datamodel/events"}},p=[{value:"<code>Participant</code>",id:"participant",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"<code>Vessel</code>",id:"vessel",children:[{value:"Attributes",id:"attributes-1",children:[]}]},{value:"<code>VesselParticipants</code>",id:"vesselparticipants",children:[{value:"Attributes",id:"attributes-2",children:[]}]},{value:"<code>CalendarEvent</code>",id:"calendarevent",children:[{value:"Attributes",id:"attributes-3",children:[]}]},{value:"<code>CompetitionUnit</code>",id:"competitionunit",children:[{value:"Attributes",id:"attributes-4",children:[]}]},{value:"<code>VesselParticipantGroup</code>",id:"vesselparticipantgroup",children:[{value:"Attributes",id:"attributes-5",children:[]}]},{value:"<code>GroundWindObservation</code>",id:"groundwindobservation",children:[{value:"Attributes",id:"attributes-6",children:[]}]},{value:"<code>AnchoredCurrentObservation</code>",id:"anchoredcurrentobservation",children:[{value:"Attributes",id:"attributes-7",children:[]}]},{value:"<code>Point</code>",id:"point",children:[{value:"Attributes",id:"attributes-8",children:[]}]},{value:"<code>Line</code>",id:"line",children:[{value:"Attributes",id:"attributes-9",children:[]}]},{value:"<code>Polygon</code>",id:"polygon",children:[{value:"Attributes",id:"attributes-10",children:[]}]},{value:"<code>Course</code>",id:"course",children:[{value:"Attributes",id:"attributes-11",children:[]}]},{value:"<code>VesselObservedData</code>",id:"vesselobserveddata",children:[{value:"Attributes",id:"attributes-12",children:[]}]},{value:"<code>VesselDerivedData</code>",id:"vesselderiveddata",children:[{value:"Attributes",id:"attributes-13",children:[]}]}],u={toc:p};function c(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"types"},"Types"),(0,r.kt)("script",{async:!0,defer:!0,"data-website-id":"d9c6bc6c-4456-4d65-ac9a-cd8a579d76e4",src:"https://analytics.syrf.io/umami.js"}),(0,r.kt)("p",null,"This page describes high level types which are used across our client SDKs, REST and Websocket APIs.\nThink of this page more of a dictionary than an API reference. The names, vocabulary and business logic will be similar across platforms but the specific\ncode that uses them will be different."),(0,r.kt)("h2",{id:"participant"},(0,r.kt)("inlineCode",{parentName:"h2"},"Participant")),(0,r.kt)("p",null,"A human being who sits in a vessel and goes around a course. Could be a participant with a SYRF.io account or not. Participants must be associated with ",(0,r.kt)("inlineCode",{parentName:"p"},"VesselParticipants")," in order to track."),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an identifier provided by you the developer that is unique within a ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),". (A ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),"can't have two participants with the same id.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publicName"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", a public name to be used on a map view of the race that identifies the partipant. The end-user must be aware that this will be public."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trackerUrl"),", autogenerated, the url generated for that participant to open in SYRF tracker.")),(0,r.kt)("h2",{id:"vessel"},(0,r.kt)("inlineCode",{parentName:"h2"},"Vessel")),(0,r.kt)("p",null,"Vessels are physical objects that float on the water. They may have a crew of 1 or a crew of 30. They may be sailboats or wingfoils. The crew may change. The owner may change. The certificates and polars may change. The vessel is always the same vessel. "),(0,r.kt)("h3",{id:"attributes-1"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an identifier provided by you the developer that is unique within a ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),". (A ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),"can't have two participants with the same id.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lengthInMeters"),",  ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the length in meters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalId")," an optional identifier provided by the developer if they wish to track a boat between multiple events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"publicName"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", a public name to be used on a map view of the race that identifies the vessel. This could be the boat name or a team name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"orcJsonPolars"),", an optional developer provided JSON object provided for PCS ranking within a ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),". ")),(0,r.kt)("h2",{id:"vesselparticipants"},(0,r.kt)("inlineCode",{parentName:"h2"},"VesselParticipants")),(0,r.kt)("p",null,"Associates an array of human participants to a vessel for a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"CompetitionUnit"),". "),(0,r.kt)("h3",{id:"attributes-2"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an identifier provided by you the developer that is unique within a ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),". (A ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),"can't have two participants with the same id.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vessel"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", FK on a vessel object."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"participants"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an array of ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant"),"s who are on the vessel.")),(0,r.kt)("h2",{id:"calendarevent"},(0,r.kt)("inlineCode",{parentName:"h2"},"CalendarEvent")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent")," object refers to an object that one would put on their calendar. What are colloquially called \u201cseries\u201d, \u201craces\u201d, \u201cregattas\u201d, and \u201cevents\u201d could all have a ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent")," object associated with them. For instance, a regatta management app may chose to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent")," for a summer long series, or numerous ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent"),"s for each specific Wednesday night race. A ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent")," binds a collection of RaceUnits. ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent"),"s don\u2019t have timestamps because they are fuzzy. Unlike a race (or ",(0,r.kt)("inlineCode",{parentName:"p"},"RaceUnit"),") which has a specific start time that matters for purposes of scoring, ",(0,r.kt)("inlineCode",{parentName:"p"},"CalendarEvent"),"s have an ",(0,r.kt)("inlineCode",{parentName:"p"},"ApproximateStartTime"),"."),(0,r.kt)("h3",{id:"attributes-3"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the name of the calendar event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"externalUrl"),", the optional website for the calendar event."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startDay")," - autogenerated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startMonth")," - autogenerated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startYear"),"- autogenerated"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"approximateStartTime"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the time people should gather to watch the show, be near start line, arrive at the hotel, etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endDay")," - optional but added after an event closes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endMonth"),"  - optional but added after an event closes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"endYear")," - optional but added after an event closes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"competitionUnits"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an array of competition unit objects. Described in detail below. ")),(0,r.kt)("h2",{id:"competitionunit"},(0,r.kt)("inlineCode",{parentName:"h2"},"CompetitionUnit")),(0,r.kt)("p",null,"The atomic unit of a group of vessels and humans going around the same course at the same time. In order to avoid the ambiguity in terms like \u201crace\u201d, \u201cregatta\u201d, and \u201cevent\u201d the atomic scorable object of our API is called a ",(0,r.kt)("inlineCode",{parentName:"p"},"CompetitionUnit"),". A ",(0,r.kt)("inlineCode",{parentName:"p"},"CompetitionUnit")," is a combination of a course, a start time and a vessel participant group."),(0,r.kt)("h3",{id:"attributes-4"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", what to call this."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"startTime"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", Unix epoch for when the vessels should begin the course."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"boundingBox"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", a lat/lon bounding box that defines the race area. Used for out of bounds events as well as filtering locations for privacy and getting weather data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"course"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", FK on Course"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"approximateStart"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the approximate start of the competition."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vesselParticipantGroup"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", FK on ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),".")),(0,r.kt)("h2",{id:"vesselparticipantgroup"},(0,r.kt)("inlineCode",{parentName:"h2"},"VesselParticipantGroup")),(0,r.kt)("p",null,"Associates an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"VesselParticipants")," to a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"CompetitionUnit"),". "),(0,r.kt)("h3",{id:"attributes-5"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an identifier provided by you the developer that is unique within a ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),". (A ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipantGroup"),"can't have two participants with the same id.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"competitionUnit"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", FK on a ",(0,r.kt)("inlineCode",{parentName:"li"},"CompetitionUnit"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vesselParticipants"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an array of ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipants")," who are engaged in the ",(0,r.kt)("inlineCode",{parentName:"li"},"CompetitionUnit"),".")),(0,r.kt)("h2",{id:"groundwindobservation"},(0,r.kt)("inlineCode",{parentName:"h2"},"GroundWindObservation")),(0,r.kt)("p",null,"A developer supplied (maybe from an end user) observation of the wind measured from a fixed or anchored platform (the land, an anchored and settled vessel, a cemented dock, etc)."),(0,r.kt)("h3",{id:"attributes-6"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"speedKts"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the wind speed in kts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"degreesClockwiseFromTrueNorth"),", the direction the wind ",(0,r.kt)("strong",{parentName:"li"}," comes from ")," in degrees clockwise from true north."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"degreesClockwiseFromMagneticNorth"),", the direction the wind ",(0,r.kt)("strong",{parentName:"li"}," comes from ")," in degrees clockwise from magnetic north."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latitude"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the WGS84 latitude of the observation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"longitude"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the WGS84 longitude of the observation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"altitudeAboveSeaLevelInMeters"),", optional (defaults to 0), the altitude of the measurement above sea level."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight"),", optional, how much should this be weighted relative to other data?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validStartTime"),", optional, when is this observation valid from?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validEndTime"),", optional, when is this observation valid until?")),(0,r.kt)("h2",{id:"anchoredcurrentobservation"},(0,r.kt)("inlineCode",{parentName:"h2"},"AnchoredCurrentObservation")),(0,r.kt)("p",null,"A developer supplied (maybe from an end user) observation of the current measured from a fixed or anchored platform (the land, an anchored and settled vessel, a cemented dock, etc)."),(0,r.kt)("h3",{id:"attributes-7"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"speedKts"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the current speed in kts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"degreesClockwiseFromTrueNorth"),", the direction the current ",(0,r.kt)("strong",{parentName:"li"}," is going to ")," in degrees clockwise from true north."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"degreesClockwiseFromMagneticNorth"),", the direction the current ",(0,r.kt)("strong",{parentName:"li"}," is going to ")," in degrees clockwise from magnetic north."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"latitude"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the WGS84 latitude of the observation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"longitude"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", the WGS84 longitude of the observation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"depth"),", optional (defaults to 0), the depth of the measurement in meters below the surface."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"weight"),", optional, how much should this be weighted relative to other data?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validStartTime"),", optional, when is this observation valid from?"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"validEndTime"),", optional, when is this observation valid until?")),(0,r.kt)("h2",{id:"point"},(0,r.kt)("inlineCode",{parentName:"h2"},"Point")),(0,r.kt)("p",null,"A point object represents a specific point object on the planet. Point objects exist in an abstract sense and a physical sense. A point may be a mark, part of a line, or part of a polygon. A point has an idealized location as well as an actual specific location in the world for a moment in time. Point objects may represent a buoy, an obstacle, the race committee boat, or something else with a specific location. Points are the only geometry objects that are tracked, because all other geometry types are simply compositions of points."),(0,r.kt)("h3",{id:"attributes-8"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idealizedLat")," , ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", The idealized, fixed latitude position of this point on a map. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idealizedLon"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", The idealized, fixed longitude position of this point on a map. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"developerId"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", A developer supplied identifier for the point."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"trackingUrl"),", autogenerated, the url to open in SYRF tracker to track that point.")),(0,r.kt)("h2",{id:"line"},(0,r.kt)("inlineCode",{parentName:"h2"},"Line")),(0,r.kt)("p",null,"A line is a collection of points that don\u2019t connect. Line\u2019s do not have a separate tracking stream from their points. A line can be a start line, finish line, or gate."),(0,r.kt)("h3",{id:"attributes-9"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"points"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an ordered array of points (first, second, \u2026 last). Validate there are at least two points.")),(0,r.kt)("h2",{id:"polygon"},(0,r.kt)("inlineCode",{parentName:"h2"},"Polygon")),(0,r.kt)("p",null,"A polygon is a list point objects that do connect. Polygons may self intersect."),(0,r.kt)("h3",{id:"attributes-10"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"points"),", ",(0,r.kt)("strong",{parentName:"li"},"REQUIRED"),", an ordered array of points. The last point is assumed to connect to the first. Validate that this is a polygon. ")),(0,r.kt)("h2",{id:"course"},(0,r.kt)("inlineCode",{parentName:"h2"},"Course")),(0,r.kt)("p",null,"Courses describe geometry on the surface of the Earth that ",(0,r.kt)("inlineCode",{parentName:"p"},"Vessels")," can interact with. A course object represents a collection of sequenced, unsequenced timed geometry and unsequenced untimed geometry. SequencedGeometry is an ordered array of pairings of a geometry object with a name.\nUnsequencedUntimedGeometry is a set of pairs of names and geometry that are always applied independent of an ordering. UnsequenceTimedGeometry is like UnsequencedUntimedGeometry except that each unsequenced piece of geometry has a valid start time and end time, whereas untimed geometry is valid always. For instance a course boundary may be modeled using UnseqencedUntimedGeometry.\nOne course may be used by many ",(0,r.kt)("inlineCode",{parentName:"p"},"CompetitionUnit"),"s, but each ",(0,r.kt)("inlineCode",{parentName:"p"},"CompetitionUnit")," must have only one course."),(0,r.kt)("h3",{id:"attributes-11"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),", autogenerated, the ID of the course."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sequencedGeometry"),", a (possibly empty) ordered array of points, lines and polygons in a specific sequence. When the start/finish line is the same, the same line object should be used twice in this array."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsequencedUntimedGeometry"),", a (possibly empty) set (where order is ignored) of points, lines and polygons that are always part of the course."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"unsequencedTimedGeometry"),", similar to unsequencedUntimedGeometry except that each geometry segment has a valid start and stop time. This can be used for Super Mario type coin collection for instance.")),(0,r.kt)("h2",{id:"vesselobserveddata"},(0,r.kt)("inlineCode",{parentName:"h2"},"VesselObservedData")),(0,r.kt)("p",null,"A convenience type that holds a variety of data for a ",(0,r.kt)("inlineCode",{parentName:"p"},"VesselParticipant"),"."),(0,r.kt)("h3",{id:"attributes-12"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"vesselParticipant"),", autogenerated FK on ",(0,r.kt)("inlineCode",{parentName:"li"},"VesselParticipant"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"twa"),", twa from the instruments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cog"),", cog from instruments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sog"),", sog from instruments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setDrift"),", set and drift from instruments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ellapsedTime"),", how long the vessel has been racing.")),(0,r.kt)("h2",{id:"vesselderiveddata"},(0,r.kt)("inlineCode",{parentName:"h2"},"VesselDerivedData")),(0,r.kt)("p",null,"Data that has to be calculated from other data or otherwise interpolated."),(0,r.kt)("h3",{id:"attributes-13"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"correctedTimes"),", a dictionary of corrected times where the keys are a methodology (PCS, ToD, ToT, protest) and the values are the corrected times."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"twa"),", calculated twa models."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cog"),", calculated cog from positions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sog"),", calculated sog from positions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setDrift"),", set and drift from current models.")))}c.isMDXComponent=!0}}]);