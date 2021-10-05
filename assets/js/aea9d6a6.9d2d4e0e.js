(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4381],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7137:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var i=n(2122),r=n(9756),a=(n(7294),n(3905)),o=["components"],s={},l="LSP (Kiskov Subsitution Principle)",c={unversionedId:"Programming/Design Pattern/Principle/LSP",id:"Programming/Design Pattern/Principle/LSP",isDocsHomePage:!1,title:"LSP (Kiskov Subsitution Principle)",description:"- You are able to substitute a derived class for a base class. (The implementation of a derived class does not have a conflict with the behavior of the base class.)",source:"@site/docs/Programming/Design Pattern/Principle/LSP.md",sourceDirName:"Programming/Design Pattern/Principle",slug:"/Programming/Design Pattern/Principle/LSP",permalink:"/docs/Programming/Design Pattern/Principle/LSP",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ISP (Interface Segregation Principle)",permalink:"/docs/Programming/Design Pattern/Principle/ISP"},next:{title:"Others",permalink:"/docs/Programming/Design Pattern/Principle/Misc"}},u=[{value:"Example",id:"example",children:[]},{value:"References",id:"references",children:[]}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lsp-kiskov-subsitution-principle"},"LSP (Kiskov Subsitution Principle)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are able to substitute a derived class for a base class. (The implementation of a derived class does not have a conflict with the behavior of the base class.)")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"We implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle")," class as our base class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class Rectangle\n{\n  protected int width, height;\n\n  public Rectangle() {\n  }\n\n  public Rectangle(int width, int height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  public int getWidth() {\n    return width;\n  }\n\n  public void setWidth(int width) {\n    this.width = width;\n  }\n\n  public int getHeight() {\n    return height;\n  }\n\n  public void setHeight(int height) {\n    this.height = height;\n  }\n\n  public int getArea() { return width*height; }\n\n  @Override\n  public String toString() {\n    return "Rectangle{" +\n      "width=" + width +\n      ", height=" + height +\n      \'}\';\n  }\n\n  public boolean isSquare()\n  {\n    return width == height;\n  }\n}\n')),(0,a.kt)("p",null,"We have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Square")," class as a child class. But for the implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"setWidth()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setHeight()")," method, you implicitly change another attributes, which causes inconsistency in some situations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class Square extends Rectangle\n{\n  public Square() {\n  }\n\n  public Square(int size) {\n    width = height = size;\n  }\n\n  @Override\n  public void setWidth(int width) {\n    super.setWidth(width);\n    super.setHeight(width);\n  }\n\n  @Override\n  public void setHeight(int height) {\n    super.setHeight(height);\n    super.setWidth(height);\n  }\n}\n")),(0,a.kt)("p",null,"In this example, you find that you get an unexpected behavior when you call ",(0,a.kt)("inlineCode",{parentName:"p"},"getArea()")," after one of the above-mentioned methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'class LSPDemo\n{\n  // maybe conform to ++\n  static void useIt(Rectangle r)\n  {\n    int width = r.getWidth();\n    r.setHeight(10);\n    System.out.println("Expected area of " + (width*10) + ", got " + r.getArea());\n  }\n\n  public static void main(String[] args) {\n    Rectangle rc = new Rectangle(2, 3);\n    useIt(rc);\n\n    Rectangle sq = new Square();\n    sq.setHeight(5);\n    sq.setWidth(10);\n    useIt(sq);\n  }\n}\n')),(0,a.kt)("p",null,"A possible solution is to add a factory for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Rectangle")," class, but it still cannot solve the basic problem."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"class RectangleFactory\n{\n  public static Rectangle newSquare(int side)\n  {\n    return new Rectangle(side, side);\n  }\n\n  public static Rectangle newRectangle(int width, int height)\n  {\n    return new Rectangle(width, height);\n  }\n}\n")),(0,a.kt)("p",null,"Another possible solution is to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"isSquare()")," method to identify a square."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"  public boolean isSquare()\n  {\n    return width == height;\n  }\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-java/"},"https://www.udemy.com/course/design-patterns-java/"))))}h.isMDXComponent=!0}}]);