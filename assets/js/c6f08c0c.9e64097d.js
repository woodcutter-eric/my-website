(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9605],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9694:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=["components"],o={},s="Java",p={unversionedId:"Submarine/Prerequisite/Java",id:"Submarine/Prerequisite/Java",isDocsHomePage:!1,title:"Java",description:"SDK",source:"@site/docs/Submarine/Prerequisite/Java.md",sourceDirName:"Submarine/Prerequisite",slug:"/Submarine/Prerequisite/Java",permalink:"/docs/Submarine/Prerequisite/Java",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/Submarine/Prerequisite/Docker"},next:{title:"Kubernetes",permalink:"/docs/Submarine/Prerequisite/Kubernetes"}},c=[{value:"SDK",id:"sdk",children:[]},{value:"IntelliJ",id:"intellij",children:[]},{value:"Maven",id:"maven",children:[]},{value:"References",id:"references",children:[]}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"java"},"Java"),(0,l.kt)("h2",{id:"sdk"},"SDK"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install sdkman")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -s "https://get.sdkman.io" | bash\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Restart or ",(0,l.kt)("inlineCode",{parentName:"li"},"source")," the ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.zshrc")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"~/.bash_profile")),(0,l.kt)("li",{parentName:"ol"},"Find a version to install")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sdk list java\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Install JDK 8")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sdk install java 8.0.292.j9-adpt\n")),(0,l.kt)("h2",{id:"intellij"},"IntelliJ"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the tar.gz file"),(0,l.kt)("li",{parentName:"ol"},"Extract directory to /opt")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo tar -xzf ideaIU.tar.gz -C /opt\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Rename directory")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cd /opt\n$ sudo mv ideaxxxxx idea-IU\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Add the script in ",(0,l.kt)("inlineCode",{parentName:"li"},"PATH")," env variable (I use zsh)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="${PATH}:/opt/idea-IU/bin"\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Run the script (you have to login or enter license at the first time)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ idea.sh\n")),(0,l.kt)("h2",{id:"maven"},"Maven"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download zip or tar.gz (",(0,l.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/maven/maven-3/3.6.3/"},"maven 3.6.3"),")"),(0,l.kt)("li",{parentName:"ol"},"Extract the file (I use unzip or you can follow this ",(0,l.kt)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"link"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ unzip apache-maven-3.6.3-bin.zip\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Move the directory to ",(0,l.kt)("inlineCode",{parentName:"li"},"/opt")," ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mv apache-maven-3.6.3 /opt/maven\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Add the bin location to ",(0,l.kt)("inlineCode",{parentName:"li"},"PATH")," variable")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="${PATH}:/opt/maven/bin"\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Check success")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ mvn -v\n")),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/help/idea/installation-guide.html#standalone"},"https://www.jetbrains.com/help/idea/installation-guide.html#standalone"))))}m.isMDXComponent=!0}}]);