(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2799],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2178:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),c=["components"],a={},s="OCP (Open-Closed Principle)",l={unversionedId:"Programming/Design Pattern/Principle/OCP",id:"Programming/Design Pattern/Principle/OCP",isDocsHomePage:!1,title:"OCP (Open-Closed Principle)",description:"- Open for extensions, but closed for modification.",source:"@site/docs/Programming/Design Pattern/Principle/OCP.md",sourceDirName:"Programming/Design Pattern/Principle",slug:"/Programming/Design Pattern/Principle/OCP",permalink:"/docs/Programming/Design Pattern/Principle/OCP",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Others",permalink:"/docs/Programming/Design Pattern/Principle/Misc"},next:{title:"SRP (Single Responsibility Principle)",permalink:"/docs/Programming/Design Pattern/Principle/SRP"}},p=[{value:"Example",id:"example",children:[]},{value:"References",id:"references",children:[]}],u={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ocp-open-closed-principle"},"OCP (Open-Closed Principle)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open for extensions, but closed for modification."),(0,o.kt)("li",{parentName:"ul"},"When you create a class, you must let it easy for future modification and each modification of an existing class will not affect other classes because they are hidden in the abstraction.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"enum Color\n{\n  RED, GREEN, BLUE\n}\n\nenum Size\n{\n  SMALL, MEDIUM, LARGE, YUGE\n}\n\nclass Product\n{\n  public String name;\n  public Color color;\n  public Size size;\n\n  public Product(String name, Color color, Size size) {\n    this.name = name;\n    this.color = color;\n    this.size = size;\n  }\n}\n")),(0,o.kt)("p",null,"To add some filter to ",(0,o.kt)("inlineCode",{parentName:"p"},"Product"),", a not very good way is to hardcode some filtering methods. This is very hard for future modification."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class ProductFilter\n{\n  public Stream<Product> filterByColor(List<Product> products, Color color)\n  {\n    return products.stream().filter(p -> p.color == color);\n  }\n\n  public Stream<Product> filterBySize(List<Product> products, Size size)\n  {\n    return products.stream().filter(p -> p.size == size);\n  }\n\n  public Stream<Product> filterBySizeAndColor(List<Product> products, Size size, Color color)\n  {\n    return products.stream().filter(p -> p.size == size && p.color == color);\n  }\n  // state space explosion\n  // 3 criteria = 7 methods\n}\n")),(0,o.kt)("p",null,"When we introduce several interfaces, we can separate the interface and implementation and also form a framework for future use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// we introduce two new interfaces that are open for extension\ninterface Specification<T>\n{\n  boolean isSatisfied(T item);\n}\n\ninterface Filter<T>\n{\n  Stream<T> filter(List<T> items, Specification<T> spec);\n}\n\nclass ColorSpecification implements Specification<Product>\n{\n  private Color color;\n\n  public ColorSpecification(Color color) {\n    this.color = color;\n  }\n\n  @Override\n  public boolean isSatisfied(Product p) {\n    return p.color == color;\n  }\n}\n\nclass SizeSpecification implements Specification<Product>\n{\n  private Size size;\n\n  public SizeSpecification(Size size) {\n    this.size = size;\n  }\n\n  @Override\n  public boolean isSatisfied(Product p) {\n    return p.size == size;\n  }\n}\n")),(0,o.kt)("p",null,"You can combined several specification into a single one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class AndSpecification<T> implements Specification<T>\n{\n  private Specification<T> first, second;\n\n  public AndSpecification(Specification<T> first, Specification<T> second) {\n    this.first = first;\n    this.second = second;\n  }\n\n  @Override\n  public boolean isSatisfied(T item) {\n    return first.isSatisfied(item) && second.isSatisfied(item);\n  }\n\n}\n\nclass BetterFilter implements Filter<Product>\n{\n  @Override\n  public Stream<Product> filter(List<Product> items, Specification<Product> spec) {\n    return items.stream().filter(p -> spec.isSatisfied(p));\n  }\n}\n")),(0,o.kt)("p",null,"For generalization, we can write an variadic function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"class GeneralSpecification<T> implements Specification<T>\n{\n  private Specification<T>[] specs;\n\n  public GeneralSpecification(Specification<T>... specs) {\n    this.specs = specs;\n  }\n\n  @Override\n  public boolean isSatisfied(T item) {\n    return specs\n        .stream()\n        .reduce((first, second) -> (first.isSatisfied(item) && second.isSatisfied(item)));\n  }\n}\n\n")),(0,o.kt)("p",null,"And then you will notice that the latter method is much more extensible compared to the former one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'class OCPDemo\n{\n  public static void main(String[] args) {\n    Product apple = new Product("Apple", Color.GREEN, Size.SMALL);\n    Product tree = new Product("Tree", Color.GREEN, Size.LARGE);\n    Product house = new Product("House", Color.BLUE, Size.LARGE);\n\n    List<Product> products = List.of(apple, tree, house);\n\n    ProductFilter pf = new ProductFilter();\n    System.out.println("Green products (old):");\n    pf.filterByColor(products, Color.GREEN)\n      .forEach(p -> System.out.println(" - " + p.name + " is green"));\n\n    // ^^ BEFORE\n\n    // vv AFTER\n    BetterFilter bf = new BetterFilter();\n    System.out.println("Green products (new):");\n    bf.filter(products, new ColorSpecification(Color.GREEN))\n      .forEach(p -> System.out.println(" - " + p.name + " is green"));\n\n    System.out.println("Large products:");\n    bf.filter(products, new SizeSpecification(Size.LARGE))\n      .forEach(p -> System.out.println(" - " + p.name + " is large"));\n\n    System.out.println("Large blue items:");\n    bf.filter(products,\n      new AndSpecification<>(\n        new ColorSpecification(Color.BLUE),\n        new SizeSpecification(Size.LARGE)\n      ))\n      .forEach(p -> System.out.println(" - " + p.name + " is large and blue"));\n  }\n}\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-java/"},"https://www.udemy.com/course/design-patterns-java/"))))}f.isMDXComponent=!0}}]);