(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3743],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(t),m=i,f=k["".concat(u,".").concat(m)]||k[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=k;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},60:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return k}});var r=t(4034),i=t(9973),o=(t(7294),t(3905)),a=["components"],l={},u="Setup",s={unversionedId:"Cloud/Docker/Steup",id:"Cloud/Docker/Steup",isDocsHomePage:!1,title:"Setup",description:"I'm using Mac.",source:"@site/docs/Cloud/Docker/Steup.md",sourceDirName:"Cloud/Docker",slug:"/Cloud/Docker/Steup",permalink:"/docs/Cloud/Docker/Steup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ubuntu Setup",permalink:"/docs/Tools/Zsh/linux-setup"},next:{title:"Dockerfile",permalink:"/docs/Cloud/Docker/Basics/File"}},c=[{value:"Install Docker Desktop",id:"install-docker-desktop",children:[],level:2},{value:"Install via Minikube",id:"install-via-minikube",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:c};function k(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("p",null,"I'm using Mac."),(0,o.kt)("h2",{id:"install-docker-desktop"},"Install Docker Desktop"),(0,o.kt)("p",null,"One way to use docker is to install docker desktop. You can find it in the official webpage of Docker."),(0,o.kt)("h2",{id:"install-via-minikube"},"Install via Minikube"),(0,o.kt)("p",null,"Another way is to setup a minikube cluster with the help of hyperkit vm."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install hyperkit")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install hyperkit\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install docker cli")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install docker\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Minikube and kubectl")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install minikube kubectl\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"My simple setup script")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n\nminikube ip &> /dev/null\n\n# Make sure no minikube cluster is running\nif [[ "${?}" -ne 0  ]]\nthen\n    echo "Minikube is down!"\nelse\n    echo "Minikube is up!"\n    docker_setup\n    exit 1\nfi\n\necho\necho "Starting Minikube..."\necho\n\necho "No. of Parameters: ${#}"\n\nCPUS="${1}"\nMEMORY="${2}"g\n\nif [[ "${#}" -eq 0  ]]\nthen\n    echo "Using default setting!"\nelif [[ "${#}" -eq 1 ]]\nthen\n    echo "Setting cpus as: " "$CPUS"\n    minikube config set cpus "$CPUS"\nelse\n    echo "Setting cpus as: " "$CPUS"\n    echo "Setting memory as:" "$MEMORY"\n    minikube config set cpus "$CPUS"\n    minikube config set memory "$MEMORY"\nfi\n\n# Clean up all former resources\necho\necho "Deleting all resources..."\nminikube delete\n# Start minikube\necho\nminikube start\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Point docker-cli to docker daemon in minikube (You have to do it when you open a new terminal session)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ eval $(minikube docker-env)\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://itnext.io/goodbye-docker-desktop-hello-minikube-3649f2a1c469"},"https://itnext.io/goodbye-docker-desktop-hello-minikube-3649f2a1c469")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/1955505/parsing-json-with-unix-tools"},"https://stackoverflow.com/questions/1955505/parsing-json-with-unix-tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/31414/how-can-i-pass-a-command-line-argument-into-a-shell-script"},"https://unix.stackexchange.com/questions/31414/how-can-i-pass-a-command-line-argument-into-a-shell-script")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/7069682/how-to-get-arguments-with-flags-in-bash"},"https://stackoverflow.com/questions/7069682/how-to-get-arguments-with-flags-in-bash"))))}k.isMDXComponent=!0}}]);