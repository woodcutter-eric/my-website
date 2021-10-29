(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6893],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=l,k=m["".concat(u,".").concat(d)]||m[d]||s[d]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9257:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(4034),l=t(9973),r=(t(7294),t(3905)),i=["components"],o={},u="YAML",p={unversionedId:"Cloud/Docker/Compose/YAML",id:"Cloud/Docker/Compose/YAML",isDocsHomePage:!1,title:"YAML",description:"- A data serialization language.",source:"@site/docs/Cloud/Docker/Compose/YAML.md",sourceDirName:"Cloud/Docker/Compose",slug:"/Cloud/Docker/Compose/YAML",permalink:"/docs/Cloud/Docker/Compose/YAML",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploy Wordpress",permalink:"/docs/Cloud/Docker/Compose/Wordpress-Example"},next:{title:"Kubectl Tips",permalink:"/docs/Cloud/Kubernetes/Advanced/Kubectl-tips"}},c=[{value:"Syntaxs",id:"syntaxs",children:[{value:"Data Types",id:"data-types",children:[],level:3},{value:"Collections",id:"collections",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"yaml"},"YAML"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A data serialization language."),(0,r.kt)("li",{parentName:"ul"},"Human-friendly and can work with differenct progarmming languages."),(0,r.kt)("li",{parentName:"ul"},"Whitespace sensitive, but more readable."),(0,r.kt)("li",{parentName:"ul"},"With ",(0,r.kt)("inlineCode",{parentName:"li"},".yaml")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"yml")," file extension."),(0,r.kt)("li",{parentName:"ul"},"Is a super set of ",(0,r.kt)("inlineCode",{parentName:"li"},"json"),"."),(0,r.kt)("li",{parentName:"ul"},"Support inline commment (using ",(0,r.kt)("inlineCode",{parentName:"li"},"#"),")")),(0,r.kt)("h2",{id:"syntaxs"},"Syntaxs"),(0,r.kt)("h3",{id:"data-types"},"Data Types"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integer: ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"+1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-1")),(0,r.kt)("li",{parentName:"ul"},"Strings",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Normal String")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'#:!'")," for special characters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"\\n"')," for escape characters"))),(0,r.kt)("li",{parentName:"ul"},"Null: ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"~")),(0,r.kt)("li",{parentName:"ul"},"Booleans",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"false")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yes"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"no")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"on"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"off")),(0,r.kt)("li",{parentName:"ul"},"use ",(0,r.kt)("inlineCode",{parentName:"li"},"'yes'")," if you want to string representation")))),(0,r.kt)("h3",{id:"collections"},"Collections"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mappings")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Mapping\nkey: value\n\n# Nested Mapping\nkey1:\n  key2: value\n\n# Inline Mapping (Avoid)\nkey1: { key2: value }\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sequences")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Sequence -> [value1, value2]\n- value1\n- value2\n\n# Nested Sequence -> [[value]]\n- \n  - value\n\n# Inline Sequence\n- [value1, value2]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sequence in Mapping")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Below two expressions are identical\nkey: \n  - value1\n  - value2\n\nkey:\n- value1\n- value2\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mapping in Sequence")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Below two expressions are identical\n- \n  key1: value1\n  key2: value2\n\n- key1: value2\n  key2: value2\n\n# Below two expressions are identical, not equal to the previous one\n- key1: value1\n- key2: value2\n\n- \n  key1: value1\n- \n  key2: value2\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"},"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"))))}m.isMDXComponent=!0}}]);