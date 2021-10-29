(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6761],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=i,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1106:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return f}});var n=r(4034),i=r(9973),o=(r(7294),r(3905)),a=["components"],l={},u="SDN Overview",c={unversionedId:"System/Network/Virtualization/SDN/SDN-Overview",id:"System/Network/Virtualization/SDN/SDN-Overview",isDocsHomePage:!1,title:"SDN Overview",description:"Q: Why we need SDN?",source:"@site/docs/System/Network/Virtualization/SDN/SDN-Overview.md",sourceDirName:"System/Network/Virtualization/SDN",slug:"/System/Network/Virtualization/SDN/SDN-Overview",permalink:"/docs/System/Network/Virtualization/SDN/SDN-Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenFlow",permalink:"/docs/System/Network/Virtualization/SDN/SDN-OpenFlow"},next:{title:"SDN Perspectives",permalink:"/docs/System/Network/Virtualization/SDN/SDN-Perspectives"}},s=[{value:"References",id:"references",children:[],level:2}],p={toc:s};function f(e){var t=e.components,l=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sdn-overview"},"SDN Overview"),(0,o.kt)("p",null,"Q: Why we need SDN?\nA: Network is versatile, we need more flexibility to solve a number of problems\nFor example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Media Network: Medium Throughput, High Stablity"),(0,o.kt)("li",{parentName:"ul"},"IoT Network: Low throughput, Low Latency"),(0,o.kt)("li",{parentName:"ul"},"File Network: High Throughput"),(0,o.kt)("li",{parentName:"ul"},"...")),(0,o.kt)("p",null,"Each router contains a flow table that is computed and distributed by a logically centralized routing controller."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"sdn",src:r(8684).Z})),(0,o.kt)("p",null,"Besides, SDN splits the network device structure into 3 layers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Vertically Integrated --\x3e Horizontal"),(0,o.kt)("li",{parentName:"ul"},"Closed, Proprietary --\x3e Open Interfaces"),(0,o.kt)("li",{parentName:"ul"},"Slow Innovation --\x3e Rapid Innovation"),(0,o.kt)("li",{parentName:"ul"},"Small Industry --\x3e Huge Industry")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"interface-revolution",src:r(9936).Z})),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This note is based on NTU course - ",(0,o.kt)("a",{parentName:"li",href:"https://nol.ntu.edu.tw/nol/coursesearch/print_table.php?course_id=942%20U0710&class=&dpt_code=9420&ser_no=50698&semester=110-1&lang=CH"},"Network Virtualization and Security"))))}f.isMDXComponent=!0},9936:function(e,t,r){"use strict";t.Z=r.p+"assets/images/interface-revolution-2a039af3143bbc9c15462bf94dc2527d.png"},8684:function(e,t,r){"use strict";t.Z=r.p+"assets/images/sdn-a741ddcd8386e0a1701f719c60f75b09.png"}}]);