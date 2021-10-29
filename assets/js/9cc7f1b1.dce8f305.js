(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2145],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),p=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,y=u["".concat(d,".").concat(m)]||u[m]||l[m]||a;return t?r.createElement(y,s(s({ref:n},c),{},{components:t})):r.createElement(y,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},696:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=t(4034),o=t(9973),a=(t(7294),t(3905)),s=["components"],i={},d="Go Prototype Pattern",p={unversionedId:"Programming/Design Pattern/Patterns/Prototype/Go",id:"Programming/Design Pattern/Patterns/Prototype/Go",isDocsHomePage:!1,title:"Go Prototype Pattern",description:"Deep Copying",source:"@site/docs/Programming/Design Pattern/Patterns/Prototype/Go.md",sourceDirName:"Programming/Design Pattern/Patterns/Prototype",slug:"/Programming/Design Pattern/Patterns/Prototype/Go",permalink:"/docs/Programming/Design Pattern/Patterns/Prototype/Go",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Factory Pattern",permalink:"/docs/Programming/Design Pattern/Patterns/Factory/Overview"},next:{title:"Overview",permalink:"/docs/Programming/Design Pattern/Patterns/Prototype/Overview"}},c=[{value:"Deep Copying",id:"deep-copying",children:[],level:3},{value:"Copy Method",id:"copy-method",children:[],level:3},{value:"Copy Through Serialization",id:"copy-through-serialization",children:[],level:3},{value:"Prototype Factory",id:"prototype-factory",children:[],level:3},{value:"References",id:"references",children:[],level:2}],l={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-prototype-pattern"},"Go Prototype Pattern"),(0,a.kt)("h3",{id:"deep-copying"},"Deep Copying"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this approach, you copy each fields directly from the old object.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Address struct {\n  StreetAddress, City, Country string\n}\n\ntype Person struct {\n  Name string\n  Address *Address\n}\n\nfunc main() {\n  john := Person{"John",\n    &Address{"123 London Rd", "London", "UK"}}\n\n  jane := john\n  jane.Address = &Address{\n    john.Address.StreetAddress,\n    john.Address.City,\n    john.Address.Country  }\n\n  jane.Name = "Jane" // ok\n\n  jane.Address.StreetAddress = "321 Baker St"\n\n  fmt.Println(john.Name, john.Address)\n  fmt.Println(jane.Name, jane. Address)\n}\n')),(0,a.kt)("h3",{id:"copy-method"},"Copy Method"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this approach, you create cascade ",(0,a.kt)("inlineCode",{parentName:"li"},"DeepCopy()")," function to create a new object.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'type Address struct {\n  StreetAddress, City, Country string\n}\n\nfunc (a *Address) DeepCopy() *Address {\n  return &Address{\n    a.StreetAddress,\n    a.City,\n    a.Country }\n}\n\ntype Person struct {\n  Name string\n  Address *Address\n  Friends []string\n}\n\nfunc (p *Person) DeepCopy() *Person {\n  q := *p // copies Name\n  q.Address = p.Address.DeepCopy()\n  copy(q.Friends, p.Friends)\n  return &q\n}\n\nfunc main() {\n  john := Person{"John",\n    &Address{"123 London Rd", "London", "UK"},\n    []string{"Chris", "Matt"}}\n\n  jane := john.DeepCopy()\n  jane.Name = "Jane"\n  jane.Address.StreetAddress = "321 Baker St"\n  jane.Friends = append(jane.Friends, "Angela")\n\n  fmt.Println(john, john.Address)\n  fmt.Println(jane, jane.Address)\n}\n')),(0,a.kt)("h3",{id:"copy-through-serialization"},"Copy Through Serialization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In this approach, you use some standard library function to serialize and deserialize an object")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "bytes"\n  "encoding/gob"\n  "fmt"\n)\n\ntype Address struct {\n  StreetAddress, City, Country string\n}\n\ntype Person struct {\n  Name string\n  Address *Address\n  Friends []string\n}\n\nfunc (p *Person) DeepCopy() *Person {\n  // note: no error handling below\n  b := bytes.Buffer{}\n  e := gob.NewEncoder(&b)\n  _ = e.Encode(p)\n\n  d := gob.NewDecoder(&b)\n  result := Person{}\n  _ = d.Decode(&result)\n  return &result\n}\n\nfunc main() {\n  john := Person{"John",\n    &Address{"123 London Rd", "London", "UK"},\n    []string{"Chris", "Matt", "Sam"}}\n\n  jane := john.DeepCopy()\n  jane.Name = "Jane"\n  jane.Address.StreetAddress = "321 Baker St"\n  jane.Friends = append(jane.Friends, "Jill")\n\n  fmt.Println(john, john.Address)\n  fmt.Println(jane, jane.Address)\n}\n')),(0,a.kt)("h3",{id:"prototype-factory"},"Prototype Factory"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can create some wrapper functions to build a convenient API for building a prototype.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "bytes"\n  "encoding/gob"\n  "fmt"\n)\n\ntype Address struct {\n  Suite int\n  StreetAddress, City string\n}\n\ntype Employee struct {\n  Name string\n  Office Address\n}\n\nfunc (p *Employee) DeepCopy() *Employee {\n  // note: no error handling below\n  b := bytes.Buffer{}\n  e := gob.NewEncoder(&b)\n  _ = e.Encode(p)\n\n  d := gob.NewDecoder(&b)\n  result := Employee{}\n  _ = d.Decode(&result)\n  return &result\n}\n\n// employee factory\n// either a struct or some functions\nvar mainOffice = Employee {\n  "", Address{0, "123 East Dr", "London"}}\nvar auxOffice = Employee {\n  "", Address{0, "66 West Dr", "London"}}\n\n// utility method for configuring emp\nfunc newEmployee(proto *Employee,\n  name string, suite int) *Employee {\n  result := proto.DeepCopy()\n  result.Name = name\n  result.Office.Suite = suite\n  return result\n}\n\nfunc NewMainOfficeEmployee(\n  name string, suite int) *Employee {\n    return newEmployee(&mainOffice, name, suite)\n}\n\nfunc NewAuxOfficeEmployee(\n  name string, suite int) *Employee {\n    return newEmployee(&auxOffice, name, suite)\n}\n\nfunc main() {\n  john := NewMainOfficeEmployee("John", 100)\n  jane := NewAuxOfficeEmployee("Jane", 200)\n\n  fmt.Println(john)\n  fmt.Println(jane)\n}\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/design-patterns-go"},"https://www.udemy.com/course/design-patterns-go"))))}u.isMDXComponent=!0}}]);