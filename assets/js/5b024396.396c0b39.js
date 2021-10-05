(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4805],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8111:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={},u="Operator",s={unversionedId:"Submarine/Setup/Operator",id:"Submarine/Setup/Operator",isDocsHomePage:!1,title:"Operator",description:"We can use submarine operator as another way to deploy. The code is under submarine/submarine-cloud-v2",source:"@site/docs/Submarine/Setup/Operator.md",sourceDirName:"Submarine/Setup",slug:"/Submarine/Setup/Operator",permalink:"/docs/Submarine/Setup/Operator",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Notebook",permalink:"/docs/Submarine/Setup/Notebook"},next:{title:"Intro",permalink:"/docs/System Programming/File System/Intro"}},p=[{value:"Operator setup",id:"operator-setup",children:[]},{value:"Rebuild server",id:"rebuild-server",children:[]},{value:"More Information",id:"more-information",children:[]}],c={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operator"},"Operator"),(0,o.kt)("p",null,"We can use submarine operator as another way to deploy. The code is under ",(0,o.kt)("inlineCode",{parentName:"p"},"submarine/submarine-cloud-v2")),(0,o.kt)("h2",{id:"operator-setup"},"Operator setup"),(0,o.kt)("p",null,"Make sure to delete those in the previous deploy from the normal steps.\nUnder ",(0,o.kt)("inlineCode",{parentName:"p"},"submarine/submarine-cloud-v2")," directory"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initial setup")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add helm-chart dependencies\n$ cp -r ../helm-charts/submarine/charts ./helm-charts/submarine-operator/\n# Run the cluster\n$ minikube start --kubernetes-version v1.15.11\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You can see that there is some ",(0,o.kt)("inlineCode",{parentName:"li"},"operator-XXX")," in the default namespace."),(0,o.kt)("li",{parentName:"ol"},"Use the in-cluster method to deploy other resources")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Step1: Install submarine-operator\n$ helm install submarine-operator ./helm-charts/submarine-operator/\n\n# Step2: Deploy a submarine\n$ kubectl create ns submarine-user-test\n$ kubectl apply -n submarine-user-test -f artifacts/examples/example-submarine.yaml\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"You wll see many other resources in the ",(0,o.kt)("inlineCode",{parentName:"li"},"submarine-user-test")," namespace.")),(0,o.kt)("h2",{id:"rebuild-server"},"Rebuild server"),(0,o.kt)("p",null,"Under ",(0,o.kt)("inlineCode",{parentName:"p"},"submarine/submarine-cloud-v2")," directory"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run maven install each time you want to rebuild (in ",(0,o.kt)("inlineCode",{parentName:"li"},"submarine")," folder)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ mvn install -DskipTests\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Rebuild server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd hack/\n# ./server-rapid-builder.sh <namespace>\n$ ./server-rapid-builder.sh submarine-user-test\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Verify that it indeed change")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl logs <pod_name> -n submarine-user-test| grep Host\n")),(0,o.kt)("h2",{id:"more-information"},"More Information"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/tree/master/submarine-cloud-v2"},"oeprator")),(0,o.kt)("li",{parentName:"ul"},"[]")))}m.isMDXComponent=!0}}]);