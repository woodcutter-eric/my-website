(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[1811],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(t),d=a,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(h,l(l({ref:n},m),{},{components:t})):r.createElement(h,l({ref:n},m))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2911:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=t(4034),a=t(9973),o=(t(7294),t(3905)),l=["components"],i={},c="Commands",s={unversionedId:"Cloud/Kubernetes/Helm/Commands",id:"Cloud/Kubernetes/Helm/Commands",isDocsHomePage:!1,title:"Commands",description:"This file lists some common commands, for more information, append -h after each command.",source:"@site/docs/Cloud/Kubernetes/Helm/Commands.md",sourceDirName:"Cloud/Kubernetes/Helm",slug:"/Cloud/Kubernetes/Helm/Commands",permalink:"/docs/Cloud/Kubernetes/Helm/Commands",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Charts",permalink:"/docs/Cloud/Kubernetes/Helm/Charts"},next:{title:"Demo - Nginx",permalink:"/docs/Cloud/Kubernetes/Helm/Demo-Nginx"}},m=[{value:"Basics",id:"basics",children:[],level:2},{value:"Repo Management",id:"repo-management",children:[],level:2},{value:"Release Management",id:"release-management",children:[],level:2},{value:"Chart Management",id:"chart-management",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:m};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commands"},"Commands"),(0,o.kt)("p",null,"This file lists some common commands, for more information, append ",(0,o.kt)("inlineCode",{parentName:"p"},"-h")," after each command."),(0,o.kt)("h2",{id:"basics"},"Basics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Search for helm charm in the Artifact Hub\n$ helm search hub [KEYWORD]\n\n# Search through all repository configured on the system\n$ helm search repo [KEYWORD]\n\n# Retrieve a package from a package repository, and download it locally.\n$ helm pull [CHART]\n\n# Deploy a chart instance\n$ helm install [NAME] [CHART]\n\n# Upgrade a release of a chart \n$ helm upgrade [RELEASE] [CHART]\n\n# Rollback to a previous version\n$ helm rollback [RELEASE] [REVISON]\n\n# Remove the release of a chart\n$ helm uninstall [RELEASE]\n")),(0,o.kt)("h2",{id:"repo-management"},"Repo Management"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Add a chart repository\n$ helm repo add [NAME] [URL]\n\n# List chart repositories\n$ helm repo list\n\n# Remove a chart repository\n$ helm repo remove [NAME]\n\n# Get the latest information of a repository.\n# The result if cached locally and then used by commands like `helm search`\n$ helm repo update\n\n# Read the current directory and generate an index file based on the charts found.\n$ helm repo index [DIR]\n")),(0,o.kt)("h2",{id:"release-management"},"Release Management"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Display the detail of a release\n$ helm status [RELEASE]\n\n# List all release in a specific namespace\n$ helm list\n\n# History prints historical revisions for a given release.\n$ helm history [RELEASE]\n\n# This command fetches the generated manifest files for a given release.\n$ helm get manifest [RELEASE]\n")),(0,o.kt)("h2",{id:"chart-management"},"Chart Management"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Creates a chart directory along with the common files and directories used in a chart.\n$ helm create [NAME]\n\n# Render chart templates locally and display the output.\n$ helm template [NAME] [CHART]\n\n# Packages a chart into a versioned chart archive file.\n$ helm package [CHART]\n\n# Takes a path to a chart and runs a series of tests to verify that the chart is well-formed.\n$ helm lint [CHART]\n")),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloudacademy.com/course/introduction-to-helm-1034"},"https://cloudacademy.com/course/introduction-to-helm-1034"))))}p.isMDXComponent=!0}}]);