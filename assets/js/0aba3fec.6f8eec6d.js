(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7695],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(g,l(l({ref:n},s),{},{components:t})):r.createElement(g,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8819:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=t(4034),a=t(9973),i=(t(7294),t(3905)),l=["components"],o={},p="Setup",u={unversionedId:"Programming/Language/Python/Setup",id:"Programming/Language/Python/Setup",isDocsHomePage:!1,title:"Setup",description:"I use pyenv as the version manager for python.",source:"@site/docs/Programming/Language/Python/Setup.md",sourceDirName:"Programming/Language/Python",slug:"/Programming/Language/Python/Setup",permalink:"/docs/Programming/Language/Python/Setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Java Generic",permalink:"/docs/Programming/Language/Java/Advanced/Java-Generic"},next:{title:"Membership",permalink:"/docs/System/Distributed/Concepts/Membership"}},s=[{value:"Using pyenv",id:"using-pyenv",children:[],level:2},{value:"Using miniconda",id:"using-miniconda",children:[],level:2},{value:"References",id:"references",children:[],level:2}],c={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setup"},"Setup"),(0,i.kt)("p",null,"I use ",(0,i.kt)("inlineCode",{parentName:"p"},"pyenv")," as the version manager for python."),(0,i.kt)("h2",{id:"using-pyenv"},"Using pyenv"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"pyenv"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install pyenv\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure ",(0,i.kt)("inlineCode",{parentName:"li"},"pyenv"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'eval \"$(pyenv init --path)\"' >> ~/.zprofile\necho 'eval \"$(pyenv init -)\"' >> ~/.zshrc\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install specific version")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Set 3.9.0 as global version\n$ pyenv install 3.9.0\n$ pyenv global 3.9.0\n\n# Set 3.8.0 as local version\n$ pyenv install 3.8.0\n$ pyenv local 3.8.0\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uninstall specific version")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ pyenv uninstall 3.8.0\n")),(0,i.kt)("h2",{id:"using-miniconda"},"Using miniconda"),(0,i.kt)("p",null,"Go to this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"link")," and download you OS installer."),(0,i.kt)("p",null,"For Windows and Mac, you just need to follow the package installer. "),(0,i.kt)("p",null,"For Linux, you should run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ chmod +x <the_installer_name>\n$ ./<the_installer_name>\n")),(0,i.kt)("p",null,"And then you follow the instructions to install."),(0,i.kt)("p",null,"If you miss some steps, make sure you can find it through the path.\nAdd the following command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vim"},'export PATH="${HOME}/miniconda3/bin:$PATH"\n')),(0,i.kt)("p",null,"Then initialize the conda"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ conda init zsh\n")),(0,i.kt)("p",null,"Behind the scene, it will comment out the export you just added and do some additional setup in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.zshrc"),"."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyenv/pyenv"},"https://github.com/pyenv/pyenv")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10237266"},"https://ithelp.ithome.com.tw/articles/10237266"))))}m.isMDXComponent=!0}}]);