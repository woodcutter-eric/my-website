(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8235],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1610:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i=["components"],s={},o="Charts",c={unversionedId:"Kubernetes/Helm/Charts",id:"Kubernetes/Helm/Charts",isDocsHomePage:!1,title:"Charts",description:"- Create a chart",source:"@site/docs/Kubernetes/Helm/Charts.md",sourceDirName:"Kubernetes/Helm",slug:"/Kubernetes/Helm/Charts",permalink:"/docs/Kubernetes/Helm/Charts",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Volumes",permalink:"/docs/Kubernetes/Basics/Volumes"},next:{title:"Commands",permalink:"/docs/Kubernetes/Helm/Commands"}},u=[{value:"Chart Structure",id:"chart-structure",children:[]},{value:"Metadata",id:"metadata",children:[{value:"Chart.yaml",id:"chartyaml",children:[]},{value:"values.yaml",id:"valuesyaml",children:[]}]},{value:"Templates",id:"templates",children:[{value:"Example",id:"example",children:[]},{value:"NOTES.txt",id:"notestxt",children:[]},{value:"_helpers.tpl",id:"_helperstpl",children:[]},{value:"tests",id:"tests",children:[]}]},{value:"Packaging",id:"packaging",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Hosting",id:"hosting",children:[]},{value:"Repository Managment",id:"repository-managment",children:[]},{value:"References",id:"references",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"charts"},"Charts"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a chart")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm create [CHART_NAME]\n")),(0,l.kt)("h2",{id:"chart-structure"},"Chart Structure"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"foo/\n\u251c\u2500\u2500 .helmignore   # Contains patterns to ignore when packaging Helm charts.\n\u251c\u2500\u2500 Chart.yaml    # Information about your chart\n\u251c\u2500\u2500 values.yaml   # The default values for your templates\n\u251c\u2500\u2500 charts/       # Charts that this chart depends on\n\u2514\u2500\u2500 templates/    # The template files\n    \u2514\u2500\u2500 tests/    # The test files\n")),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("h3",{id:"chartyaml"},"Chart.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Chart.yaml"',title:'"Chart.yaml"'},"apiVersion: v2\nname: cloudacademy-webapp\ndescription: A Helm chart for Kubernetes\n\n# A chart can be either an 'application' or a 'library' chart.\n#\n# Application charts are a collection of templates that can be packaged into versioned archives\n# to be deployed.\n#\n# Library charts provide useful utilities or functions for the chart developer. They're included as\n# a dependency of application charts to inject those utilities and functions into the rendering\n# pipeline. Library charts do not define any templates and therefore cannot be deployed.\ntype: application\n\n# This is the chart version. This version number should be incremented each time you make changes\n# to the chart and its templates, including the app version.\n# Versions are expected to follow Semantic Versioning (https://semver.org/)\nversion: 0.1.0\n\n# This is the version number of the application being deployed. This version number should be\n# incremented each time you make changes to the application. Versions are not expected to\n# follow Semantic Versioning. They should reflect the version the application is using.\nappVersion: 1.16.0\n")),(0,l.kt)("h3",{id:"valuesyaml"},"values.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'},'# values.yaml contains a structure list of default value\n# These values will be references by other templates in the same chart\nreplicaCount: 2\n\nimage:\n  repository: nginx\n  pullPolicy: IfNotPresent\n  tag: ""\n\nservice:\n  type: ClusterIP\n  port: 80\n\nautoscaling:\n  enabled: false\n\nnginx:\n  conf:\n    message: "CloudAcademy DevOps 2020 v1"\n')),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="templates/service.yaml"',title:'"templates/service.yaml"'},'apiVersion: v1\nkind: Service\nmetadata:\n name: {{ include "webserver.fullname" . }}\n labels:\n   {{- include "webserver.labels" . | nindent 4 }}\nspec:\n type: {{ .Values.service.type }}\n ports:\n   - port: {{ .Values.service.port }}\n     targetPort: http\n     protocol: TCP\n     name: http\n selector:\n   {{- include "webserver.selectorLabels" . | nindent 4 }}\n')),(0,l.kt)("p",null,"Custimize values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm upgrade ca-demo1 ./cloudacademy-app --set=service.port=9090\n")),(0,l.kt)("h2",{id:"templates"},"Templates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"templates")," folder collects templates togother"),(0,l.kt)("li",{parentName:"ul"},"Each template provides definition for a single cluster resource"),(0,l.kt)("li",{parentName:"ul"},"Example:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deployment.yaml")," defines the deployment resources"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"service.yaml")," defines the service resources"))),(0,l.kt)("li",{parentName:"ul"},"The template syntax are subject to go template syntax"),(0,l.kt)("li",{parentName:"ul"},"All files under this directory undergo template rendering process")),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="templates/service.yaml"',title:'"templates/service.yaml"'},'apiVersion: v1\nkind: Service\nmetadata:\n name: {{ include "webserver.fullname" . }}\n labels:\n   {{- include "webserver.labels" . | nindent 4 }}\nspec:\n type: {{ .Values.service.type }}\n ports:\n   - port: {{ .Values.service.port }}\n     targetPort: http\n     protocol: TCP\n     name: http\n selector:\n   {{- include "webserver.selectorLabels" . | nindent 4 }}\n')),(0,l.kt)("h3",{id:"notestxt"},"NOTES.txt"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contains end user instruction to help execute this chart"),(0,l.kt)("li",{parentName:"ul"},"Will be display when using ",(0,l.kt)("inlineCode",{parentName:"li"},"helm install")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"helm upgrade")),(0,l.kt)("li",{parentName:"ul"},"Can also be written into a template for dynamically generate information")),(0,l.kt)("h3",{id:"_helperstpl"},"_helpers.tpl"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contains a number of template partial that are useful in other template files"),(0,l.kt)("li",{parentName:"ul"},"Usage: ",(0,l.kt)("inlineCode",{parentName:"li"},'{{ include "webserver.fullname" . }}'))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tpl"},'{{/* vim: set filetype=mustache: */}}\n{{/*\nExpand the name of the chart.\n*/}}\n{{- define "webserver.name" -}}\n{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}\n{{- end }}\n\n{{/*\nCreate a default fully qualified app name.\nWe truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).\nIf release name contains chart name it will be used as a full name.\n*/}}\n{{- define "webserver.fullname" -}}\n{{- if .Values.fullnameOverride }}\n{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}\n{{- else }}\n{{- $name := default .Chart.Name .Values.nameOverride }}\n{{- if contains $name .Release.Name }}\n{{- .Release.Name | trunc 63 | trimSuffix "-" }}\n{{- else }}\n{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}\n{{- end }}\n{{- end }}\n{{- end }}\n\n{{/*\nCreate chart name and version as used by the chart label.\n*/}}\n{{- define "webserver.chart" -}}\n{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}\n{{- end }}\n\n{{/*\nCommon labels\n*/}}\n{{- define "webserver.labels" -}}\nhelm.sh/chart: {{ include "webserver.chart" . }}\n{{ include "webserver.selectorLabels" . }}\n{{- if .Chart.AppVersion }}\napp.kubernetes.io/version: {{ .Chart.AppVersion | quote }}\n{{- end }}\napp.kubernetes.io/managed-by: {{ .Release.Service }}\n{{- end }}\n\n{{/*\nSelector labels\n*/}}\n{{- define "webserver.selectorLabels" -}}\napp.kubernetes.io/name: {{ include "webserver.name" . }}\napp.kubernetes.io/instance: {{ .Release.Name }}\n{{- end }}\n')),(0,l.kt)("h3",{id:"tests"},"tests"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Contains one or more tests you wrote"),(0,l.kt)("li",{parentName:"ul"},"Validate the chart once deployed"),(0,l.kt)("li",{parentName:"ul"},"Typically implemented by kubernetes ",(0,l.kt)("inlineCode",{parentName:"li"},"Job")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Pod")," resource"),(0,l.kt)("li",{parentName:"ul"},"Should return a ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," exit status code to be interpreted by helm as a successful test"),(0,l.kt)("li",{parentName:"ul"},"Should have notation ",(0,l.kt)("inlineCode",{parentName:"li"},"helm.sh/hool: test")," under the test manifest file"),(0,l.kt)("li",{parentName:"ul"},"Usage: ",(0,l.kt)("inlineCode",{parentName:"li"},"helm test [FILE]"))),(0,l.kt)("h2",{id:"packaging"},"Packaging"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"After finish your chart, you have to package the chart"),(0,l.kt)("li",{parentName:"ul"},"Usage: ",(0,l.kt)("inlineCode",{parentName:"li"},"helm package [CHART DIR]")),(0,l.kt)("li",{parentName:"ul"},"It produces an archive named after what you define in the ",(0,l.kt)("inlineCode",{parentName:"li"},"Chart.yaml")," file"),(0,l.kt)("li",{parentName:"ul"},"With convention: ",(0,l.kt)("inlineCode",{parentName:"li"},"[NAME]-[version].tgz"))),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Install directly provided a value\n$ helm install ca-demo1 cloudacademyapp-0.1.3.tgz --set app.color=red\n\n# Dry-run\n# Render the template and output the kubernetes manifest file\n# so that you can see what will be installed in the cluster\n$ helm install ca-demo1 cloudacademyapp-0.1.3.tgz --dry-run\n")),(0,l.kt)("h2",{id:"hosting"},"Hosting"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Before you can host a chart, you have to create the index file"),(0,l.kt)("li",{parentName:"ul"},"Will search recursively under this directory for all chart archive and produce related information bundled with creation time")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Produce an index.yaml with the given chart archive that can be served by a web server\n$ helm repo index .\n")),(0,l.kt)("h2",{id:"repository-managment"},"Repository Managment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Add chart archive to local repository and run a web server\n$ helm repo add local http://127.0.0.1:8080\n\n# Update the chart archive\n$ helm repo update\n\n# Search for all chart named cloudacademy in the configured repository\n$ helm search repo cloudacademy\n\n# Install the chart from the local repository\n$ helm install ca-demo1 local/cloudacademyapp --set color.red=true\n")),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cloudacademy.com/course/introduction-to-helm-1034"},"https://cloudacademy.com/course/introduction-to-helm-1034")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/cloudacademy/helm-demo"},"https://github.com/cloudacademy/helm-demo"))))}m.isMDXComponent=!0}}]);