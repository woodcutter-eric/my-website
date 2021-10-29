(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3870],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3397:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var a=n(4034),r=n(9973),i=(n(7294),n(3905)),o=["components"],l={},s="Special",c={unversionedId:"Linux/Script/Syntax/Special",id:"Linux/Script/Syntax/Special",isDocsHomePage:!1,title:"Special",description:"This note document several special syntax",source:"@site/docs/Linux/Script/Syntax/Special.md",sourceDirName:"Linux/Script/Syntax",slug:"/Linux/Script/Syntax/Special",permalink:"/docs/Linux/Script/Syntax/Special",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IO flow",permalink:"/docs/Linux/Script/Syntax/IO"},next:{title:"Syntax",permalink:"/docs/Linux/Script/Syntax/Syntax"}},u=[{value:"References",id:"references",children:[],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"special"},"Special"),(0,i.kt)("p",null,"This note document several special syntax"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--"),": it signifys the end of command options, after that only positional arguments are taken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Normally, it means to find a pattern in reverse (not select)\n$ grep pattern -v\n\n# While in this example we want to find a pattern in a file named `-v`\n$ grep -- pattern -v\n\n# Therefore, we can conclude that all arguments after `--` will be treated as\n# normal positional arguments, instead of command flags\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VAR=XXX CMD [option]"),": In this pattern, you can temporarily set a env variable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# We temporarily set a env variable `GOOS` equals `linux`\n# , which make the go compiler use linux architecture to\n# compile the binary this time, and will fall back to\n# normal setting after this command is finished.\n$ GOOS=linux go build -o submarine-operator .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"${parameter:-word}")," means if ",(0,i.kt)("inlineCode",{parentName:"li"},"parameter")," is unset or null, the expansion of ",(0,i.kt)("inlineCode",{parentName:"li"},"word")," will be used")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# If the `CODEGEN_PKG` is not setm then is will expand to `cd "${SCRIPT_ROOT}"`\n$ CODEGEN_PKG=${CODEGEN_PKG:-$(cd "${SCRIPT_ROOT}"; ls -d -1 ./vendor/k8s.io/code-generator 2>/dev/null || echo ../code-generator)}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"set")," built-in command: This command set differnet shell options. For more ",(0,i.kt)("a",{parentName:"li",href:"https://ss64.com/bash/set.html"},"information"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Tell shell do not ignore unset variable, if found, throw an error\n$ set -u\n\n# Abort execution if error occured\n$ set -e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<<")," vs ",(0,i.kt)("inlineCode",{parentName:"li"},"<<<")," vs ",(0,i.kt)("inlineCode",{parentName:"li"},"< <()"),": The explanation is in the command block. For more ",(0,i.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/678915/whats-the-difference-between-and-in-bash"},"information"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# << is called here-document. \n# It is used to signal the command what will be the ending string.\n$ wc << EOF\n> one two three\n> four five\n> EOF\n\n# <<< is called here-string.\n# Equivalent of `echo '5*4' | bc`\n$ bc <<< 5*4\n\n# <() is called process substitution. \n# Process substitution feeds the output of a process (or processes) into the stdin of another process.\n$ $ echo <(echo bar)\n\n# < <() means redirect the result of <() as the input to the command\n# The first < is the simple redirection\n$ wc < <(echo bar;echo foo)\n")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean"},"https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/205688/whats-the-difference-between-set-export-and-env-and-when-should-i-use-each"},"https://askubuntu.com/questions/205688/whats-the-difference-between-set-export-and-env-and-when-should-i-use-each")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://unix.stackexchange.com/questions/30470/what-does-mean-in-a-shell-script"},"https://unix.stackexchange.com/questions/30470/what-does-mean-in-a-shell-script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.tutorialdocs.com/article/set-command-in-bash.html"},"https://www.tutorialdocs.com/article/set-command-in-bash.html")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://askubuntu.com/questions/678915/whats-the-difference-between-and-in-bash"},"https://askubuntu.com/questions/678915/whats-the-difference-between-and-in-bash"))))}m.isMDXComponent=!0}}]);