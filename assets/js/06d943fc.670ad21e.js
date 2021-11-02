(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[4834],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(4034),a=n(9973),o=(n(7294),n(3905)),i=["components"],l={},c="Syntax",u={unversionedId:"Cloud/Docker/Basics/Syntax",id:"Cloud/Docker/Basics/Syntax",isDocsHomePage:!1,title:"Syntax",description:"This note is a brief introduction to docker file syntax. For more information.",source:"@site/docs/Cloud/Docker/Basics/Syntax.md",sourceDirName:"Cloud/Docker/Basics",slug:"/Cloud/Docker/Basics/Syntax",permalink:"/docs/Cloud/Docker/Basics/Syntax",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Storage",permalink:"/docs/Cloud/Docker/Basics/Storage"},next:{title:"Build",permalink:"/docs/Cloud/Docker/Compose/Build"}},s=[{value:"References",id:"references",children:[],level:2}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"This note is a brief introduction to docker file syntax. For more ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/builder/"},"information"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FROM"),": Specify the base image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ubuntu:18.04\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RUN"),": Run some commands, usually used in setting up environment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"RUN apt-get update && apt-get install -y wget vim git curl\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ENV"),": Set environment variable of the image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'ENV PATH="${PATH}:/usr/src/code"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ARG"),": Used for supplying argument when using ",(0,o.kt)("inlineCode",{parentName:"li"},"docker build"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"ARG NODE_VER\nADD ./${NODE_VER:-node-v5.9.1-linux-armv7l} /\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker build --build-arg NODE_VER=node-v5.9.0-linux-armv7l .\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT"),": Replace the default command (bash) to the command you specify")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'ENTRYPOINT ["echo", "Hello Docker"]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CMD"),": The startup command when you start a container, equals ",(0,o.kt)("inlineCode",{parentName:"li"},"bash <COMMAND>"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},'CMD ["/usr/src/submarine-operator", "-incluster=true"]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WORKDIR"),": Set the working directory")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"WORKDIR /usr/submarine\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"COPY"),": Copy local file to the docker image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"COPY . ${ONOS_ROOT}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ADD"),": Similar to ",(0,o.kt)("inlineCode",{parentName:"li"},"COPY"),", but more powerful, allowing using URL. But recommended to use ",(0,o.kt)("inlineCode",{parentName:"li"},"COPY")," if you don't need the functionality ",(0,o.kt)("inlineCode",{parentName:"li"},"ADD")," provides.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dockerfile"},"ADD submarine-operator /usr/src\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://peihsinsu.gitbooks.io/docker-note-book/content/dockerfile-env-vs-arg.html"},"https://peihsinsu.gitbooks.io/docker-note-book/content/dockerfile-env-vs-arg.html")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/24958140/what-is-the-difference-between-the-copy-and-add-commands-in-a-dockerfile"},"https://stackoverflow.com/questions/24958140/what-is-the-difference-between-the-copy-and-add-commands-in-a-dockerfile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile#:~:text=CMD%20is%20an%20instruction%20that,container%20with%20a%20specific%20executable"},"https://stackoverflow.com/questions/21553353/what-is-the-difference-between-cmd-and-entrypoint-in-a-dockerfile#:~:text=CMD%20is%20an%20instruction%20that,container%20with%20a%20specific%20executable"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/dev.Dockerfile"},"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/dev.Dockerfile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/opennetworkinglab/onos/blob/master/Dockerfile"},"https://github.com/opennetworkinglab/onos/blob/master/Dockerfile"))))}m.isMDXComponent=!0}}]);