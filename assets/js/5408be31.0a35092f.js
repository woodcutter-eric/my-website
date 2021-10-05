(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[188],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),k=l,d=c["".concat(s,".").concat(k)]||c[k]||m[k]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2127:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(2122),l=n(9756),o=(n(7294),n(3905)),a=["components"],i={},s="Setup",p={unversionedId:"Tools/Zsh/Setup",id:"Tools/Zsh/Setup",isDocsHomePage:!1,title:"Setup",description:"Install Iterm2",source:"@site/docs/Tools/Zsh/Setup.md",sourceDirName:"Tools/Zsh",slug:"/Tools/Zsh/Setup",permalink:"/docs/Tools/Zsh/Setup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Ubuntu setup",permalink:"/docs/Tools/Vim/linux-setup"},next:{title:"Ubuntu Setup",permalink:"/docs/Tools/Zsh/linux-setup"}},u=[{value:"Install Iterm2",id:"install-iterm2",children:[]},{value:"Install Zim",id:"install-zim",children:[]},{value:"Install Powerlevel10k",id:"install-powerlevel10k",children:[]},{value:"References",id:"references",children:[]}],m={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("h2",{id:"install-iterm2"},"Install Iterm2"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install iterm2")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install --cask iterm2\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install colors. (Follow the instruction of this ",(0,o.kt)("a",{parentName:"li",href:"https://iterm2colorschemes.com/"},"website"),")"),(0,o.kt)("li",{parentName:"ol"},"Setup colors",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Profile")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Color")),(0,o.kt)("li",{parentName:"ul"},"Import color scheme downloaded in previous step"),(0,o.kt)("li",{parentName:"ul"},"Choose the color you want (I choose ",(0,o.kt)("inlineCode",{parentName:"li"},"OneHalfDark"),")"))),(0,o.kt)("li",{parentName:"ol"},"Setup hotkey",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Keys")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"HotKey")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Create a Dedicated HotKey Window")),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"HotKey")," field to start recording"),(0,o.kt)("li",{parentName:"ul"},"I choose ",(0,o.kt)("inlineCode",{parentName:"li"},"option")," +",(0,o.kt)("inlineCode",{parentName:"li"},"3")," as my hotkey"),(0,o.kt)("li",{parentName:"ul"},"You have to prevent hotkey collison or trap in you OS or another softwares "))),(0,o.kt)("li",{parentName:"ol"},"Then you can go to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Profile")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"HotKey Window")," to customize your hotkey window")),(0,o.kt)("h2",{id:"install-zim"},"Install Zim"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -fsSL https://raw.githubusercontent.com/zimfw/install/master/install.zsh | zsh\n")),(0,o.kt)("h2",{id:"install-powerlevel10k"},"Install Powerlevel10k"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add powerlevel 10k in the ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.zimrc")," file")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ vim ~/.zimrc\n\n# Then add the following line to bottom of ~/.zimrc\n# `zmodule romkatv/powerlevel10k`\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install zmodule")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ zimfw install\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After installing, restart the iterm2"),(0,o.kt)("li",{parentName:"ol"},"When you restart, you will see p10k configure program automatically pop up, follow the instruction.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It will ask you to install some additional font"),(0,o.kt)("li",{parentName:"ul"},"After installation, please ",(0,o.kt)("inlineCode",{parentName:"li"},"fully")," restart or it will not take effect"),(0,o.kt)("li",{parentName:"ul"},"Once it show up some icon (like diamon, lock, ...), it means you successfully install the font"),(0,o.kt)("li",{parentName:"ul"},"The last step is to follow the further instructions, and choose whatever setting you like"))),(0,o.kt)("li",{parentName:"ol"},"Add font to VSCode",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Code")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Preference")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")),(0,o.kt)("li",{parentName:"ul"},"Search for ",(0,o.kt)("inlineCode",{parentName:"li"},"terminal.integrated.fontFamily")),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"MesloLGS NF")," to the box")))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zimfw/zimfw"},"https://github.com/zimfw/zimfw")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/@white1033/%E8%B6%85%E7%B0%A1%E5%96%AE-%E5%BF%AB%E9%80%9F%E6%89%93%E9%80%A0%E6%BC%82%E4%BA%AE%E5%8F%88%E5%A5%BD%E7%94%A8%E7%9A%84-zsh-%E7%B5%82%E7%AB%AF%E7%92%B0%E5%A2%83-c81874368264"},"https://medium.com/@white1033/%E8%B6%85%E7%B0%A1%E5%96%AE-%E5%BF%AB%E9%80%9F%E6%89%93%E9%80%A0%E6%BC%82%E4%BA%AE%E5%8F%88%E5%A5%BD%E7%94%A8%E7%9A%84-zsh-%E7%B5%82%E7%AB%AF%E7%92%B0%E5%A2%83-c81874368264")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/romkatv/powerlevel10k/issues/671"},"https://github.com/romkatv/powerlevel10k/issues/671")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/romkatv/powerlevel10k/blob/master/font.md"},"https://github.com/romkatv/powerlevel10k/blob/master/font.md"))))}c.isMDXComponent=!0}}]);