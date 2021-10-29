(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5364],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),s=o,k=m["".concat(c,".").concat(s)]||m[s]||d[s]||l;return t?r.createElement(k,a(a({ref:n},p),{},{components:t})):r.createElement(k,a({ref:n},p))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8175:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=t(4034),o=t(9973),l=(t(7294),t(3905)),a=["components"],i={},c="Build",u={unversionedId:"Cloud/Docker/Compose/Build",id:"Cloud/Docker/Compose/Build",isDocsHomePage:!1,title:"Build",description:"- Use Dockerfile for image build construction",source:"@site/docs/Cloud/Docker/Compose/Build.md",sourceDirName:"Cloud/Docker/Compose",slug:"/Cloud/Docker/Compose/Build",permalink:"/docs/Cloud/Docker/Compose/Build",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Syntax",permalink:"/docs/Cloud/Docker/Basics/Syntax"},next:{title:"Multiple Compose Files",permalink:"/docs/Cloud/Docker/Compose/Multiple"}},p=[{value:"Compose file",id:"compose-file",children:[],level:2},{value:"Commands",id:"commands",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"References",id:"references",children:[],level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"build"},"Build"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use Dockerfile for image build construction"),(0,l.kt)("li",{parentName:"ul"},"Compose file ",(0,l.kt)("inlineCode",{parentName:"li"},"build")," key"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker compose")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"up")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"build"))),(0,l.kt)("h2",{id:"compose-file"},"Compose file"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Two forms")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"build: ./dir\n\nbuild:\n  context: ./dir\n  dockerfile: the.dockerfile\n  args:\n    buildno: 1\n  # add this line for custom tag\n  # image: name:tag\n")),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose up"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Build image for those had not been build, and will not rebuilt those old ones"),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"--build")," to always build images"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose build"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Re/builds images without starting"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--no-cache"),": prevent using layer cache and rebuild all layers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--pull"),": always pull new version of the base image")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev.Dockerfile"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dockerfile"},'FROM node:6 \n\nRUN npm install --global nodemon\n\nRUN mkdir src\nWORKDIR /src\nADD ./src/package.json /src/package.json\nRUN npm install \n\nEXPOSE 3000\n\nCMD ["nodemon", "-L", "/src/app/bin/www"]\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"dev-docker-compose.yml"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3\'\nservices: \n  app:\n    build: \n      context: .\n      dockerfile: dev.Dockerfile \n    image: accumulator\n    ports:\n      - "3000:3000"\n    environment: \n      - NODE_ENV=development\n      - DB_HOST=app-db \n    volumes: \n      - "./src:/src/app"\n    depends_on: \n      - app-db \n    networks: \n      - backend\n  app-db:\n    image: mongo:3\n    networks: \n      - backend \nnetworks: \n  backend:\n')),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/compose-file/compose-file-v3/"},"https://docs.docker.com/compose/compose-file/compose-file-v3/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"},"https://cloudacademy.com/learning-paths/cloud-academy-docker-in-depth-129/"))))}m.isMDXComponent=!0}}]);