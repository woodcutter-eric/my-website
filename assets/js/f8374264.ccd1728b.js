(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[7355],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,u(u({ref:t},c),{},{components:n})):r.createElement(d,u({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},733:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(4034),o=n(9973),i=(n(7294),n(3905)),u=["components"],a={},s="Ubuntu setup",l={unversionedId:"Tools/Vim/linux-setup",id:"Tools/Vim/linux-setup",isDocsHomePage:!1,title:"Ubuntu setup",description:"This is some additional step you need to do if you use Ubuntu. My current version is 20.04 LTS.",source:"@site/docs/Tools/Vim/linux-setup.md",sourceDirName:"Tools/Vim",slug:"/Tools/Vim/linux-setup",permalink:"/docs/Tools/Vim/linux-setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Vim Setup",permalink:"/docs/Tools/Vim/Setup"},next:{title:"Setup",permalink:"/docs/Tools/Zsh/Setup"}},c=[{value:"Additional Setup",id:"additional-setup",children:[],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ubuntu-setup"},"Ubuntu setup"),(0,i.kt)("p",null,"This is some additional step you need to do if you use Ubuntu. My current version is 20.04 LTS."),(0,i.kt)("h2",{id:"additional-setup"},"Additional Setup"),(0,i.kt)("p",null,"The basic setup is the same as the general setup, but you have to install some vim prerequisite."),(0,i.kt)("p",null,"Make sure you install some vim requirement (for ubuntu)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install vim-gui-common\n$ sudo apt-get install vim-runtime\n")))}m.isMDXComponent=!0}}]);