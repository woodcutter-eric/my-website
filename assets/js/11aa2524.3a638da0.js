(self.webpackChunkyingchiaochen_website=self.webpackChunkyingchiaochen_website||[]).push([[3690],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),d=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},u=function(e){var n=d(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,g=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return r?t.createElement(g,o(o({ref:n},u),{},{components:r})):t.createElement(g,o({ref:n},u))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},864:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var t=r(4034),a=r(9973),i=(r(7294),r(3905)),o=["components"],l={},c="Go Decorator Pattern",d={unversionedId:"Programming/Design Pattern/Patterns/Decorator/Go",id:"Programming/Design Pattern/Patterns/Decorator/Go",isDocsHomePage:!1,title:"Go Decorator Pattern",description:"Aggregated Decorator",source:"@site/docs/Programming/Design Pattern/Patterns/Decorator/Go.md",sourceDirName:"Programming/Design Pattern/Patterns/Decorator",slug:"/Programming/Design Pattern/Patterns/Decorator/Go",permalink:"/docs/Programming/Design Pattern/Patterns/Decorator/Go",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Composite/Overview"},next:{title:"Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Decorator/Overview"}},u=[{value:"Aggregated Decorator",id:"aggregated-decorator",children:[],level:2},{value:"Embedded Decorator",id:"embedded-decorator",children:[],level:2},{value:"Functional Decorator",id:"functional-decorator",children:[],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:u};function p(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"go-decorator-pattern"},"Go Decorator Pattern"),(0,i.kt)("h2",{id:"aggregated-decorator"},"Aggregated Decorator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Dragon")," want to have functionalities of both ",(0,i.kt)("inlineCode",{parentName:"li"},"Bird")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Lizard")),(0,i.kt)("li",{parentName:"ul"},"We define an ",(0,i.kt)("inlineCode",{parentName:"li"},"Aged")," interface to serve as an entry point for proxying"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Dragon")," struct simply proxies ",(0,i.kt)("inlineCode",{parentName:"li"},"Bird")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Lizard"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type Aged interface {\n  Age() int\n  SetAge(age int)\n}\n\ntype Bird struct {\n  age int\n}\n\nfunc (b *Bird) Age() int { return b.age }\nfunc (b *Bird) SetAge(age int) { b.age = age }\n\nfunc (b *Bird) Fly() {\n  if b.age >= 10 {\n    fmt.Println("Flying!")\n  }\n}\n\ntype Lizard struct {\n  age int\n}\n\nfunc (l *Lizard) Age() int { return l.age }\nfunc (l *Lizard) SetAge(age int) { l.age = age }\n\nfunc (l *Lizard) Crawl() {\n  if l.age < 10 {\n    fmt.Println("Crawling!")\n  }\n}\n\ntype Dragon struct {\n  bird Bird\n  lizard Lizard\n}\n\nfunc (d *Dragon) Age() int {\n  return d.bird.age\n}\n\nfunc (d *Dragon) SetAge(age int) {\n  d.bird.SetAge(age)\n  d.lizard.SetAge(age)\n}\n\nfunc (d *Dragon) Fly() {\n  d.bird.Fly()\n}\n\nfunc (d *Dragon) Crawl() {\n  d.lizard.Crawl()\n}\n\nfunc NewDragon() *Dragon {\n  return &Dragon{Bird{}, Lizard{}}\n}\n\nfunc main() {\n  d := NewDragon()\n  d.SetAge(10)\n  d.Fly()\n  d.Crawl()\n}\n')),(0,i.kt)("h2",{id:"embedded-decorator"},"Embedded Decorator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have a ",(0,i.kt)("inlineCode",{parentName:"li"},"Shape")," interface with a ",(0,i.kt)("inlineCode",{parentName:"li"},"Render()")," method"),(0,i.kt)("li",{parentName:"ul"},"Both ",(0,i.kt)("inlineCode",{parentName:"li"},"Circle")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Square")," implement it"),(0,i.kt)("li",{parentName:"ul"},"We create another struct called ",(0,i.kt)("inlineCode",{parentName:"li"},"ColoredShape"),", which add color functionality"),(0,i.kt)("li",{parentName:"ul"},"We can also add another functionality by embedding a ",(0,i.kt)("inlineCode",{parentName:"li"},"Shape")," again"),(0,i.kt)("li",{parentName:"ul"},"In this example, because ",(0,i.kt)("inlineCode",{parentName:"li"},"ColoredShape")," implements ",(0,i.kt)("inlineCode",{parentName:"li"},"Shape"),", too. It can then being embedded as another struct's field"),(0,i.kt)("li",{parentName:"ul"},"The downside of this approach is that you may lose some native methods like ",(0,i.kt)("inlineCode",{parentName:"li"},"Resize()")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"Circle")," because this method is not included in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Shape")," interface.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type Shape interface {\n  Render() string\n}\n\ntype Circle struct {\n  Radius float32\n}\n\nfunc (c *Circle) Render() string {\n  return fmt.Sprintf("Circle of radius %f",\n    c.Radius)\n}\n\nfunc (c *Circle) Resize(factor float32) {\n  c.Radius *= factor\n}\n\ntype Square struct {\n  Side float32\n}\n\nfunc (s *Square) Render() string {\n  return fmt.Sprintf("Square with side %f", s.Side)\n}\n\n// possible, but not generic enough\ntype ColoredSquare struct {\n  Square\n  Color string\n}\n\ntype ColoredShape struct {\n  Shape Shape\n  Color string\n}\n\nfunc (c *ColoredShape) Render() string {\n  return fmt.Sprintf("%s has the color %s",\n    c.Shape.Render(), c.Color)\n}\n\ntype TransparentShape struct {\n  Shape Shape\n  Transparency float32\n}\n\nfunc (t *TransparentShape) Render() string {\n  return fmt.Sprintf("%s has %f%% transparency",\n    t.Shape.Render(), t.Transparency * 100.0)\n}\n\nfunc main() {\n  circle := Circle{2}\n  fmt.Println(circle.Render())\n\n  redCircle := ColoredShape{&circle, "Red"}\n  fmt.Println(redCircle.Render())\n\n  rhsCircle := TransparentShape{&redCircle, 0.5}\n  fmt.Println(rhsCircle.Render())\n}\n')),(0,i.kt)("h2",{id:"functional-decorator"},"Functional Decorator"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In this example, it takes an ",(0,i.kt)("inlineCode",{parentName:"li"},"Effector")," as an argument and return a decorated ",(0,i.kt)("inlineCode",{parentName:"li"},"Effector")," with retry functionality")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'type Effector func(context.Context) (string, error)\n\nfunc Retry(effector Effector, retries int, delay time.Duration) Effector { \n    return func(ctx context.Context) (string, error) {\n        for r:=0 ; ; r++ {\n            response, err := effector(ctx) \n            if err == nil || r >= retries {\n                return response, err \n            }\n            \n            log.Printf("Attempt %d failed; retrying in %v", r + 1, delay)\n            \n            select {\n            case <-time.After(delay): \n            case <-ctx.Done():\n                return "", ctx.Err() \n            }\n        }    \n    }\n}\n\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Matthews A. Titmus - Cloud Native Go"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-go"},"https://www.udemy.com/course/design-patterns-go"))))}p.isMDXComponent=!0}}]);