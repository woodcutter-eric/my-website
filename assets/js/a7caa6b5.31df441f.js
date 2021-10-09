(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[440],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},c="Misc",s={unversionedId:"Submarine/Prerequisite/Misc",id:"Submarine/Prerequisite/Misc",isDocsHomePage:!1,title:"Misc",description:"Go",source:"@site/docs/Submarine/Prerequisite/Misc.md",sourceDirName:"Submarine/Prerequisite",slug:"/Submarine/Prerequisite/Misc",permalink:"/docs/Submarine/Prerequisite/Misc",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/Submarine/Prerequisite/Kubernetes"},next:{title:"Prerequisite",permalink:"/docs/Submarine/Prerequisite/Overview"}},u=[{value:"Go",id:"go",children:[]},{value:"Node",id:"node",children:[]},{value:"Python",id:"python",children:[]},{value:"Refereces",id:"refereces",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"misc"},"Misc"),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"tar.gz")," on your computer"),(0,o.kt)("li",{parentName:"ol"},"Extract the folder")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo tar -C /usr/local -xzf go1.17.2.linux-amd64.tar.gz\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Add it to the ",(0,o.kt)("inlineCode",{parentName:"li"},"PATH")," variable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export PATH="${PATH}:/usr/local/go/bin"\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Verify go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ go version\n")),(0,o.kt)("h2",{id:"node"},"Node"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"nvm"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Instal NodeJS 14")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm install 14\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check installation")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm -v\n$ node -v\n$ npm -v\n")),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to this ",(0,o.kt)("a",{parentName:"li",href:"https://docs.conda.io/en/latest/miniconda.html"},"link")," and download the installer and then install."),(0,o.kt)("li",{parentName:"ol"},"Install Miniconda"),(0,o.kt)("li",{parentName:"ol"},"Create virtual environment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# To init conda\n$ /home/chiao/miniconda3/bin/conda init zsh\n\n# Then you can use conda as a short command\n$ conda create -n submarine-dev python=3.6\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Activate environment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ conda activate submarine-dev\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Decativate current environment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ conda deactivate\n")),(0,o.kt)("h2",{id:"refereces"},"Refereces"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"})))}m.isMDXComponent=!0}}]);