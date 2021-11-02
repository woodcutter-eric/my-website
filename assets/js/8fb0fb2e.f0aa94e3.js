(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[2592],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(v,o(o({ref:n},p),{},{components:t})):r.createElement(v,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6768:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(4034),a=t(9973),i=(t(7294),t(3905)),o=["components"],l={},s="Init Container",c={unversionedId:"Cloud/Kubernetes/Basics/InitContainer",id:"Cloud/Kubernetes/Basics/InitContainer",isDocsHomePage:!1,title:"Init Container",description:"Motivation",source:"@site/docs/Cloud/Kubernetes/Basics/InitContainer.md",sourceDirName:"Cloud/Kubernetes/Basics",slug:"/Cloud/Kubernetes/Basics/InitContainer",permalink:"/docs/Cloud/Kubernetes/Basics/InitContainer",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Ecosystem",permalink:"/docs/Cloud/Kubernetes/Basics/Ecosystem"},next:{title:"Jobs",permalink:"/docs/Cloud/Kubernetes/Basics/Jobs"}},p=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Procedure",id:"procedure",children:[],level:2},{value:"Source code",id:"source-code",children:[{value:"Explanation",id:"explanation",children:[],level:3}],level:2},{value:"Commands",id:"commands",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"init-container"},"Init Container"),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sometimes we need to wait for some initialization"),(0,i.kt)("li",{parentName:"ul"},"Prefer to separate initialization logic from the container"),(0,i.kt)("li",{parentName:"ul"},"Initialization is tightly-coupled to the main application"),(0,i.kt)("li",{parentName:"ul"},"Init containers allow you to run initialization tasks before starting main containers"),(0,i.kt)("li",{parentName:"ul"},"Does not need setup utilities when running the application")),(0,i.kt)("h2",{id:"procedure"},"Procedure"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pods can declare any number of init containers"),(0,i.kt)("li",{parentName:"ul"},"Run in sequence until the previous one is complete"),(0,i.kt)("li",{parentName:"ul"},"Use their own image"),(0,i.kt)("li",{parentName:"ul"},"When all init containers complete, the main containers can start"),(0,i.kt)("li",{parentName:"ul"},"Easy way to block or delay staring an application"),(0,i.kt)("li",{parentName:"ul"},"Run every time when the pod is created (running more than once will have no additional effects)"),(0,i.kt)("li",{parentName:"ul"},"Init containers do not support readiness probe, because they are meant for completion")),(0,i.kt)("h2",{id:"source-code"},"Source code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="8.1-app_tier.yaml"',title:'"8.1-app_tier.yaml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\nspec:\n  ports:\n  - port: 8080\n  selector:\n    tier: app\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: app-tier\n  labels:\n    app: microservices\n    tier: app\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      tier: app\n  template:\n    metadata:\n      labels:\n        app: microservices\n        tier: app\n    spec:\n      containers:\n      - name: server\n        image: lrakai/microservices:server-v1\n        ports:\n          - containerPort: 8080\n            name: server\n        env:\n          - name: REDIS_URL\n            # Environment variable service discovery\n            # Naming pattern:\n            #   IP address: <all_caps_service_name>_SERVICE_HOST\n            #   Port: <all_caps_service_name>_SERVICE_PORT\n            #   Named Port: <all_caps_service_name>_SERVICE_PORT_<all_caps_port_name>\n            value: redis://$(DATA_TIER_SERVICE_HOST):$(DATA_TIER_SERVICE_PORT_REDIS)\n            # In multi-container example value was\n            # value: redis://localhost:6379 \n          - name: DEBUG\n            value: express:*\n        livenessProbe:\n          httpGet:\n            path: /probe/liveness\n            port: server\n          initialDelaySeconds: 5\n        readinessProbe:\n          httpGet:\n            path: /probe/readiness\n            port: server\n          initialDelaySeconds: 3\n      initContainers:\n        - name: await-redis\n          image: lrakai/microservices:server-v1\n          env:\n          - name: REDIS_URL\n            value: redis://$(DATA_TIER_SERVICE_HOST):$(DATA_TIER_SERVICE_PORT_REDIS)\n          command:\n            - npm\n            - run-script\n            - await-redis\n")),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We use the same image for simplicity"),(0,i.kt)("li",{parentName:"ul"},"We write a run-script in the source code that will test the redis connection")),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get information")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n probes get pods\n\nkubectl -n probes get pod <pod_name>\n\nkubectl -n probes describe pod app-tier-84b5ffd8f4-8lsbf\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get logs")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n probes logs <pod_name>\nkubectl -n probes logs <pod_name> -c <container_name>\n")),(0,i.kt)("h2",{id:"references"},"References"))}m.isMDXComponent=!0}}]);