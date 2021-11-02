(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[5609],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return b}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(t),b=a,d=m["".concat(s,".").concat(b)]||m[b]||c[b]||o;return t?n.createElement(d,i(i({ref:r},p),{},{components:t})):n.createElement(d,i({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var u={};for(var s in r)hasOwnProperty.call(r,s)&&(u[s]=r[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5544:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var n=t(4034),a=t(9973),o=(t(7294),t(3905)),i=["components"],u={},s="Overview",l={unversionedId:"Submarine/Code/Submarine-Operator/Overview",id:"Submarine/Code/Submarine-Operator/Overview",isDocsHomePage:!1,title:"Overview",description:"The Submarine Operator is based on the sample controller project of Kubernetes.",source:"@site/docs/Submarine/Code/Submarine-Operator/Overview.md",sourceDirName:"Submarine/Code/Submarine-Operator",slug:"/Submarine/Code/Submarine-Operator/Overview",permalink:"/docs/Submarine/Code/Submarine-Operator/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/Submarine/Code/Sample-Controller/Setup"},next:{title:"Components",permalink:"/docs/Submarine/Code/Submarine-Server/Core/Components"}},p=[{value:"Setup",id:"setup",children:[],level:2},{value:"Run out of Cluster",id:"run-out-of-cluster",children:[],level:2},{value:"Run in-cluster",id:"run-in-cluster",children:[],level:2},{value:"References",id:"references",children:[],level:2}],c={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The Submarine Operator is based on the sample controller project of Kubernetes."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add helm-chart dependencies\n$ cp -r ../helm-charts/submarine/charts ./helm-charts/submarine-operator/\n# Install dependencies\n$ go mod vendor\n# Run the cluster\n$ minikube start --vm-driver=docker  --kubernetes-version v1.15.11\n")),(0,o.kt)("h2",{id:"run-out-of-cluster"},"Run out of Cluster"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The meaning of out of cluster is that you run the operator on your host machine instead of inside the minikube.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Step1: Install helm chart dependencies\nhelm install --set dev=true submarine-operator ./helm-charts/submarine-operator/\n\n# Step2: Build & Run "submarine-operator"\nmake\n./submarine-operator\n\n# Step3: Deploy a Submarine\nkubectl create ns submarine-user-test\nkubectl apply -n submarine-user-test -f artifacts/examples/example-submarine.yaml\n\n# Step4: Exposing Service\n# Method1 -- use minikube ip\nminikube ip  # you\'ll get the IP address of minikube, ex: 192.168.49.2\n\n# Method2 -- use port-forwarding\nkubectl port-forward --address 0.0.0.0 service/submarine-operator-traefik 32080:80\n\n# Step5: View Workbench\n# http://{minikube ip}:32080 (from Method 1), ex: http://192.168.49.2:32080\n# or http://127.0.0.1:32080 (from Method 2).\n\n# Step6: Delete Submarine\n# By deleting the submarine custom resource, the operator will do the following things:\n#   (1) Remove all relevant Helm chart releases\n#   (2) Remove all resources in the namespace "submariner-user-test"\n#   (3) Remove all non-namespaced resources (Ex: PersistentVolume) created by client-go API\n#   (4) **Note:** The namespace "submarine-user-test" will not be deleted\nkubectl delete submarine example-submarine -n submarine-user-test\n\n# Step6: Stop the operator\n# Press ctrl+c to stop the operator\n\n# Step7: Uninstall helm chart dependencies\nhelm delete submarine-operator\n')),(0,o.kt)("h2",{id:"run-in-cluster"},"Run in-cluster"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The meaning of run in cluster is that it will deploy the operator inside the minikube cluster using pod or deployment.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Step1: Install submarine-operator\nhelm install submarine-operator ./helm-charts/submarine-operator/\n\n# Step2: Deploy a submarine\nkubectl create ns submarine-user-test\nkubectl apply -n submarine-user-test -f artifacts/examples/example-submarine.yaml\n\n# Step3: Inspect the logs of submarine-operator\nkubectl logs -f $(kubectl get pods --output=name | grep submarine-operator)\n\n# Step4: Exposing Service\n# Method1 -- use minikube ip\nminikube ip  # you\'ll get the IP address of minikube, ex: 192.168.49.2\n\n# Method2 -- use port-forwarding\nkubectl port-forward --address 0.0.0.0 service/submarine-operator-traefik 32080:80\n\n# Step5: View Workbench\n# http://{minikube ip}:32080 (from Method 1), ex: http://192.168.49.2:32080\n# or http://127.0.0.1:32080 (from Method 2).\n\n# Step6: Delete Submarine\n# By deleting the submarine custom resource, the operator will do the following things:\n#   (1) Remove all relevant Helm chart releases\n#   (2) Remove all resources in the namespace "submariner-user-test"\n#   (3) Remove all non-namespaced resources (Ex: PersistentVolume) created by client-go API\n#   (4) **Note:** The namespace "submarine-user-test" will not be deleted\nkubectl delete submarine example-submarine -n submarine-user-test\n\n# Step7: Delete the submarine-operator\nhelm delete submarine-operator\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/README.md"},"https://github.com/apache/submarine/blob/master/submarine-cloud-v2/README.md"))))}m.isMDXComponent=!0}}]);