(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[3933],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4496:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=["components"],l={},c="Overview",s={unversionedId:"Programming/Design Pattern/Patterns/Singleton/Overview",id:"Programming/Design Pattern/Patterns/Singleton/Overview",isDocsHomePage:!1,title:"Overview",description:"Motivation",source:"@site/docs/Programming/Design Pattern/Patterns/Singleton/Overview.md",sourceDirName:"Programming/Design Pattern/Patterns/Singleton",slug:"/Programming/Design Pattern/Patterns/Singleton/Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Singleton/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Go Singleton Pattern",permalink:"/docs/Programming/Design Pattern/Patterns/Singleton/Go"},next:{title:"Setup Guide",permalink:"/docs/Programming/Language/Go/Setup"}},u=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Goals",id:"goals",children:[],level:2},{value:"Singleton Patterns",id:"singleton-patterns",children:[{value:"Creation",id:"creation",children:[],level:3},{value:"Problems",id:"problems",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"motivation"},"Motivation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For some components, it only makes sense to have one in the system",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Database repository"),(0,a.kt)("li",{parentName:"ul"},"Object factory"))),(0,a.kt)("li",{parentName:"ul"},"The construction call is expensive",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Only want to do it once"),(0,a.kt)("li",{parentName:"ul"},"Want everybody has the same instance"))),(0,a.kt)("li",{parentName:"ul"},"We want to prevent anyone creating additional copies"),(0,a.kt)("li",{parentName:"ul"},"Need to take care of lazy instantiation")),(0,a.kt)("h2",{id:"goals"},"Goals"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Singleton: A component which is instantiated only once")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lazy one-time initialization"),(0,a.kt)("li",{parentName:"ul"},"Adhere to DIP: depend on interfaces, not concrete types")),(0,a.kt)("h2",{id:"singleton-patterns"},"Singleton Patterns"),(0,a.kt)("h3",{id:"creation"},"Creation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Users create a singleton using a function, which makes sure only one instance will be created or initialization will be executed"),(0,a.kt)("li",{parentName:"ul"},"You can use some synchronization features provided by a langauge")),(0,a.kt)("h3",{id:"problems"},"Problems"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It may cause performace issues because only one instance handles the logic"),(0,a.kt)("li",{parentName:"ul"},"If not carefully designed, it will make the code hard to test because it is tightly-coupled"),(0,a.kt)("li",{parentName:"ul"},"That is, if some functions depend on a singleton, it may let code hard to test"),(0,a.kt)("li",{parentName:"ul"},"A common solution is to make singleton depends on an interface rather than a concrete type to decouple the application")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-go"},"https://www.udemy.com/course/design-patterns-go"))))}m.isMDXComponent=!0}}]);