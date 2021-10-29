(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5087],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1678:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),l=["components"],o={},s="P4 Overview",c={unversionedId:"System/Network/Virtualization/P4/P4-Overview",id:"System/Network/Virtualization/P4/P4-Overview",isDocsHomePage:!1,title:"P4 Overview",description:"P4 = Protocol-Independent Packet Processors",source:"@site/docs/System/Network/Virtualization/P4/P4-Overview.md",sourceDirName:"System/Network/Virtualization/P4",slug:"/System/Network/Virtualization/P4/P4-Overview",permalink:"/docs/System/Network/Virtualization/P4/P4-Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ONOS + mininet",permalink:"/docs/System/Network/Operation/ONOS-Lab"},next:{title:"Network Management",permalink:"/docs/System/Network/Virtualization/SDN/Network-Management"}},u=[{value:"SDN",id:"sdn",children:[{value:"Limitation",id:"limitation",children:[],level:3}],level:2},{value:"P4",id:"p4",children:[{value:"Version",id:"version",children:[],level:3},{value:"Benefits",id:"benefits",children:[],level:3},{value:"Hardwares",id:"hardwares",children:[],level:3},{value:"Processing Steps",id:"processing-steps",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"p4-overview"},"P4 Overview"),(0,i.kt)("p",null,"P4 = Protocol-Independent Packet Processors"),(0,i.kt)("h2",{id:"sdn"},"SDN"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network devices are divided into control and data planes."),(0,i.kt)("li",{parentName:"ul"},"The controller install rules into forwarding table in switches to control traffic routing")),(0,i.kt)("h3",{id:"limitation"},"Limitation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The packet fields that can be matched are limited by OpenFlow protocol."),(0,i.kt)("li",{parentName:"ul"},"The actions we can take on packets are also limited."),(0,i.kt)("li",{parentName:"ul"},"OpenFlow switches reserve TCAM space for all possible fields --\x3e waste TCAM space."),(0,i.kt)("li",{parentName:"ul"},"The design of hardware (to support more actions) (limited by Openflow protocol) is also hard to change because it\u2019s too expensive.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SDN-match-fields",src:n(2001).Z})," ",(0,i.kt)("img",{alt:"SDN-action-types",src:n(4083).Z})),(0,i.kt)("h2",{id:"p4"},"P4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"P4 is a language to describe what a switch should do."),(0,i.kt)("li",{parentName:"ul"},"Bottom-up design (SDN) V.S. a top-down design (P4)"),(0,i.kt)("li",{parentName:"ul"},"SDN --\x3e programmable control plane"),(0,i.kt)("li",{parentName:"ul"},"P4 --\x3e programmable data plane"),(0,i.kt)("li",{parentName:"ul"},"Goals:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Reconfigurability"),(0,i.kt)("li",{parentName:"ul"},"Protocol-independence"),(0,i.kt)("li",{parentName:"ul"},"Target Independence (Can run on any level (sw and hw), but this has not been achieved now)\\"))),(0,i.kt)("li",{parentName:"ul"},"Note: Since we still need a way to communicate between data plane and control plane, we need to define a protocol other than OpenFlow.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SDN-vs-P4-1",src:n(5621).Z})),(0,i.kt)("h3",{id:"version"},"Version"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Before 2017: P414"),(0,i.kt)("li",{parentName:"ul"},"After 2017: P416"),(0,i.kt)("li",{parentName:"ul"},"They have very different syntax.")),(0,i.kt)("h3",{id:"benefits"},"Benefits"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"New Features")," \u2013 Add new protocols"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reduce complexity")," \u2013 Remove unused protocols"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Efficient use of resources")," \u2013 flexible use of tables"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Greater visibility")," \u2013 New diagnostic techniques, telemetry, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SW style development")," \u2013 rapid design cycle, fast innovation, fix data plane bugs in the field"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"You keep your own ideas"))),(0,i.kt)("h3",{id:"hardwares"},"Hardwares"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Let control plane and data plane can be developed by the same person."),(0,i.kt)("li",{parentName:"ul"},"New custom ASICs can achieve such flexibility at terabit speeds. (Kangaroo INFOCOM \u201910, SDN Chip\nSIGCOMM \u201913, Intel FM6000 switch silicon)"),(0,i.kt)("li",{parentName:"ul"},"Some switches are more programmable than others:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"FPGA (Xilinx, Altera, Corsa)"),(0,i.kt)("li",{parentName:"ul"},"NPU (Ezchip, Netronome)"),(0,i.kt)("li",{parentName:"ul"},"CPU (OVS, ...)")))),(0,i.kt)("h3",{id:"processing-steps"},"Processing Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In traditional switches, these 3 steps are bundled and can not modify.\n",(0,i.kt)("img",{alt:"P4-process-steps",src:n(3910).Z}))),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This note is based on NTU course - ",(0,i.kt)("a",{parentName:"li",href:"https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?course_id=942%20U0710&class=&dpt_code=9420&ser_no=50698&semester=110-1&lang=CH"},"Network Virtualization and Security"))))}d.isMDXComponent=!0},3910:function(e,t,n){"use strict";t.Z=n.p+"assets/images/P4-process-steps-07d554cb1520efc9055b5d4709932c77.png"},4083:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SDN-action-types-b6335788e78d29a6942f2a8094fcb2cc.png"},2001:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SDN-match-fields-27e44ea4bbfc5e750f9e6c68703c8922.png"},5621:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SDN-vs-P4-1-9b32921747874bf33c68157853c37b2e.png"}}]);