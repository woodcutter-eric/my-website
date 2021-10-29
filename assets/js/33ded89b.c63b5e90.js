(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[480],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8004:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(4034),o=r(9973),i=(r(7294),r(3905)),a=["components"],l={},s="Membership",c={unversionedId:"System/Distributed/Concepts/Membership",id:"System/Distributed/Concepts/Membership",isDocsHomePage:!1,title:"Membership",description:"It is crucial to maintain a membership list of a group when we want to do some mulicasting operation. To make sure the list is up-to-date, while some member may join or leave the group, we have to implement a failure detector.",source:"@site/docs/System/Distributed/Concepts/Membership.md",sourceDirName:"System/Distributed/Concepts",slug:"/System/Distributed/Concepts/Membership",permalink:"/docs/System/Distributed/Concepts/Membership",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/Programming/Language/Python/Setup"},next:{title:"Multicast",permalink:"/docs/System/Distributed/Concepts/Multicast"}},p=[{value:"Heartbeat",id:"heartbeat",children:[{value:"Simple All-to-All",id:"simple-all-to-all",children:[],level:3},{value:"Gossip-based All-to-All",id:"gossip-based-all-to-all",children:[],level:3}],level:2},{value:"SWIM",id:"swim",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"membership"},"Membership"),(0,i.kt)("p",null,"It is crucial to maintain a membership list of a group when we want to do some mulicasting operation. To make sure the list is up-to-date, while some member may join or leave the group, we have to implement a failure detector."),(0,i.kt)("p",null,"There are a few solution, but the most popular one is using ",(0,i.kt)("strong",{parentName:"p"},"heartbeat"),". We also introduce another method called ",(0,i.kt)("strong",{parentName:"p"},"SWIM"),", but it is not yet widely adopted."),(0,i.kt)("h2",{id:"heartbeat"},"Heartbeat"),(0,i.kt)("p",null,"The essence of heartbeating is to send the alive signal to other member. Each process has to maintain a group list, where each entry contain a tuple ",(0,i.kt)("inlineCode",{parentName:"p"},"(id, counter, timestamp)"),". Each process also has a local clock. When any of a process in the list left behind from local clock by a threshould, the process will mark that process as suspected. After a while, if the local process still not receive any update message from that process, the remote process is then marked as failed and the local process broadcast a message to tell all the other process to remove the failed process from the list. "),(0,i.kt)("h3",{id:"simple-all-to-all"},"Simple All-to-All"),(0,i.kt)("h3",{id:"gossip-based-all-to-all"},"Gossip-based All-to-All"),(0,i.kt)("h2",{id:"swim"},"SWIM"),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cloud Computing Specialization, Coursera")))}m.isMDXComponent=!0}}]);