(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6737:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],u={},c="Build",l={unversionedId:"Submarine/Setup/Build",id:"Submarine/Setup/Build",isDocsHomePage:!1,title:"Build",description:"Package",source:"@site/docs/Submarine/Setup/Build.md",sourceDirName:"Submarine/Setup",slug:"/Submarine/Setup/Build",permalink:"/docs/Submarine/Setup/Build",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SRP (Single Responsibility Principle)",permalink:"/docs/Programming/Design Pattern/Principle/SRP"},next:{title:"Checkstyle",permalink:"/docs/Submarine/Setup/Checkstyle"}},p=[{value:"Package",id:"package",children:[]}],s={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"build"},"Build"),(0,o.kt)("h2",{id:"package"},"Package"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Each time you have some changes in the project, you have to repackage into a new jar file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# If you don't want to run the test, add -Dskiptests flag\n$ mvn package -DskipTests\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Build the new server docker image")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# switch to minikube docker daemon to build image directly in minikube\n$ eval $(minikube docker-env)\n\n# run docker build\n$ ./dev-support/docker-images/submarine/build.sh\n\n# exit minikube docker daemon\n$ eval $(minikube docker-env -u)\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Upgrade server pod")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade --set submarine.server.dev=true submarine ./helm-charts/submarine\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Check")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# First, find your pod name \n$ watch kubectl get pods\n\n# Second, get the logs\n$ kubectl logs <pod_name> | grep Host\n")),(0,o.kt)("p",null,"For more information: ",(0,o.kt)("a",{parentName:"p",href:"https://submarine.apache.org/docs/devDocs/Development"},"link")))}m.isMDXComponent=!0}}]);