(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[7319],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7344:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(4034),a=n(9973),i=(n(7294),n(3905)),l=["components"],s={},o="Kubernetes",u={unversionedId:"Submarine/Prerequisite/Kubernetes",id:"Submarine/Prerequisite/Kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"Kubectl",source:"@site/docs/Submarine/Prerequisite/Kubernetes.md",sourceDirName:"Submarine/Prerequisite",slug:"/Submarine/Prerequisite/Kubernetes",permalink:"/docs/Submarine/Prerequisite/Kubernetes",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java",permalink:"/docs/Submarine/Prerequisite/Java"},next:{title:"Misc",permalink:"/docs/Submarine/Prerequisite/Misc"}},c=[{value:"Kubectl",id:"kubectl",children:[],level:2},{value:"Minikube",id:"minikube",children:[],level:2},{value:"Helm",id:"helm",children:[],level:2},{value:"K9s",id:"k9s",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("h2",{id:"kubectl"},"Kubectl"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the apt package index and install packages needed to use the Kubernetes apt repository")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Download the Google Cloud public signing key")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add the Kubernetes apt repository")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Update apt package index with the new repository and install kubectl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get update\n$ sudo apt-get install -y kubectl\n")),(0,i.kt)("h2",{id:"minikube"},"Minikube"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Add this line before your start an minikube cluster\n$ sudo usermod -aG docker $USER && newgrp docker\n\n# Create a new node\n$ minikube start\n\n# Stop the node\n$ minikube stop\n\n# Resume the node\n$ minikube start\n\n# Delete a node\n$ minikube delete\n")),(0,i.kt)("h2",{id:"helm"},"Helm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -\nsudo apt-get install apt-transport-https --yes\necho "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list\nsudo apt-get update\nsudo apt-get install helm\n')),(0,i.kt)("h2",{id:"k9s"},"K9s"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -sS https://webinstall.dev/k9s | bash\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"https://helm.sh/docs/intro/install/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/derailed/k9s"},"https://github.com/derailed/k9s"))))}d.isMDXComponent=!0}}]);