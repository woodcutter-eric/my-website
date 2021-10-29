(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6216],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7307:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(4034),i=n(9973),a=(n(7294),n(3905)),o=["components"],c={},l="Overview",s={unversionedId:"Linux/Script/Structure/Overview",id:"Linux/Script/Structure/Overview",isDocsHomePage:!1,title:"Overview",description:"Shell script is a series of commands that automate a complex process.",source:"@site/docs/Linux/Script/Structure/Overview.md",sourceDirName:"Linux/Script/Structure",slug:"/Linux/Script/Structure/Overview",permalink:"/docs/Linux/Script/Structure/Overview",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"User Input",permalink:"/docs/Linux/Script/Project/User-Input"},next:{title:"Case",permalink:"/docs/Linux/Script/Syntax/Case"}},u=[{value:"Basics",id:"basics",children:[{value:"Structure",id:"structure",children:[],level:3},{value:"Execution",id:"execution",children:[],level:3}],level:2},{value:"Get information",id:"get-information",children:[],level:2},{value:"References",id:"references",children:[],level:2}],m={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Shell script is a series of commands that automate a complex process. "),(0,a.kt)("h2",{id:"basics"},"Basics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"#!/bin/bash"),": this lines told that we want to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/bin/bash")," as the interpreter. In not set, it will use the default shell (",(0,a.kt)("inlineCode",{parentName:"li"},"zsh")," in Mac). The ",(0,a.kt)("inlineCode",{parentName:"li"},"#!")," is called Shebang, the combination of ",(0,a.kt)("inlineCode",{parentName:"li"},"#")," (sharp, pound sign) and ",(0,a.kt)("inlineCode",{parentName:"li"},"!")," (bang, exclamation mark). This linke is really helpful if you collaborate with you team. You always have to specify this line if you don't want to break the process if someone use a different shell in his/her computers."),(0,a.kt)("li",{parentName:"ul"},"Another way is to use ",(0,a.kt)("inlineCode",{parentName:"li"},"#/usr/bin/env bash"),", which is recommended approach now"),(0,a.kt)("li",{parentName:"ul"},"You will add a lot of commands to document this script unless you want to see a garbage after 3 months later."),(0,a.kt)("li",{parentName:"ul"},"You can add only commands but also some control commands (if, for) to control the execution flow.")),(0,a.kt)("h3",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title=test.sh",title:"test.sh"},"#!/bin/bash\n\n# comment1\nVAR='1234312'\ncommand 1\n\n# comment2\ncommand 2\n")),(0,a.kt)("h3",{id:"execution"},"Execution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Add execution privilege to the script\n# Or you can use `chmod 755 ./test.sh`\n$ chmod +x ./test.sh\n\n# Execute in sub-shell\n# or sh ./test.sh\n$ ./test.sh\n\n# Execute in current shell\n# or . ./test.sh\n$ source ./test.sh\n")),(0,a.kt)("h2",{id:"get-information"},"Get information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Get current working directory\n$ pwd\n\n# Check whether this command is built-in\n$ type -a <command>\n\n# Get built-in command help\n$ help <command>\n\n# Get non built-in command help\n# man: manual\n$ man <command>\n\n# You can find many environmental variables in bash manual page\n$ man bash\n# And then search for a env variable you want to search for\n")),(0,a.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);