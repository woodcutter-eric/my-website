(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8885],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2200:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},c="Go Struct",s={unversionedId:"Programming/Challenge/Go-struct",id:"Programming/Challenge/Go-struct",isDocsHomePage:!1,title:"Go Struct",description:"Struct is a way in Go to represent a collection of different types, just like you see in C/C++. It functions like a class in many OOP language, but the underlying mechanism is different.",source:"@site/docs/Programming/Challenge/Go-struct.md",sourceDirName:"Programming/Challenge",slug:"/Programming/Challenge/Go-struct",permalink:"/docs/Programming/Challenge/Go-struct",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Summer Plan",permalink:"/docs/Plans/2021/summer-plan"},next:{title:"Java Generic",permalink:"/docs/Programming/Challenge/Java-Generic"}},p=[{value:"Interface and Struct",id:"interface-and-struct",children:[]},{value:"Struct Pointer",id:"struct-pointer",children:[]},{value:"Embedded Struct",id:"embedded-struct",children:[]},{value:"Duplicated Field",id:"duplicated-field",children:[]},{value:"Prompted field",id:"prompted-field",children:[]},{value:"References",id:"references",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"go-struct"},"Go Struct"),(0,o.kt)("p",null,"Struct is a way in Go to represent a collection of different types, just like you see in C/C++. It functions like a class in many OOP language, but the underlying mechanism is different."),(0,o.kt)("p",null,"In this article, I write down some challenge features that you may face when reading go struct."),(0,o.kt)("h2",{id:"interface-and-struct"},"Interface and Struct"),(0,o.kt)("p",null,"Typically, to decouple the details, we would separate the interface and the implementation. In Go, which means separate ",(0,o.kt)("inlineCode",{parentName:"p"},"interface")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"struct"),". We will create a general interface for a specific purpose, then create multiple structs that implements this interface and sometimes we will swap different implementation for different use."),(0,o.kt)("h2",{id:"struct-pointer"},"Struct Pointer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"p := &Person{}\n")),(0,o.kt)("p",null,"Instead of binding ",(0,o.kt)("inlineCode",{parentName:"p"},"p")," to a concrete ",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),", we bind it to a reference of a ",(0,o.kt)("inlineCode",{parentName:"p"},"Person"),". This allows us to have a unique reference to pass around several functions, which can be helpful if you want to maintain the state of a struct."),(0,o.kt)("p",null,"By the way, Go allows user to use ",(0,o.kt)("inlineCode",{parentName:"p"},"p.x")," as a short cut of ",(0,o.kt)("inlineCode",{parentName:"p"},"(*p).x"),"."),(0,o.kt)("h2",{id:"embedded-struct"},"Embedded Struct"),(0,o.kt)("p",null,"You can embed type directly without supplying their name, this is called anonymous or embedded field. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"type ReadWriter interface {\n    Reader\n    Writer\n}\n")),(0,o.kt)("h2",{id:"duplicated-field"},"Duplicated Field"),(0,o.kt)("p",null,"This code snippet will not compile because there are duplicated field in a struct."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'type T struct {\n    http.Request // field name is "Request"\n    Request // field name is "Request"\n}\n')),(0,o.kt)("h2",{id:"prompted-field"},"Prompted field"),(0,o.kt)("p",null,"The field that belongs to the embedded element will be ",(0,o.kt)("strong",{parentName:"p"},"prompted")," if it doesn't duplicate with a field in the parent struct.(Compile error) Basic types like ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),' have no "prompted field" to expose ,but it still valid to use ',(0,o.kt)("inlineCode",{parentName:"p"},"obj.string")," to access the field , see ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/28014640"},"https://stackoverflow.com/a/28014640")),(0,o.kt)("p",null,"However, in the initialization, you have to ",(0,o.kt)("strong",{parentName:"p"},"explicitly")," specify the embedded object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'// https://medium.com/golangspec/promoted-fields-and-methods-in-go-4e8d7aefb3e3\ntype Person struct {\n    name string\n    age  int32\n}\n\nfunc (p Person) IsAdult() bool {\n    return p.age >= 18\n}\n\ntype Employee struct {\n    position string\n}\n\nfunc (e Employee) IsManager() bool {\n    return e.position == "manager"\n}\n\ntype Record struct {\n    Person\n    Employee\n}\n\nfunc main() {\n\n    fmt.Printf("%+v", record)\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'func main() {\n    // Not compile!\n    record := Record{\n        name:     "record",\n        age:      29,\n        position: "software engineer",\n    }\n\n    fmt.Printf("%+v", record)\n\n    // Correct!\n    record := Record{}\n    record.name = "record"\n    record.age = 29\n    record.position = "software engineer"\n\n    fmt.Printf("%+v", record)\n\n    // Correct!\n    record := Record{\n        Person: Person{\n            name: "record",\n            age:  29,\n        },\n        Employee: Employee{\n            position: "software engineer",\n        },\n    }\n\n    fmt.Printf("%+v", record)\n}\n\n\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'func main() {\n    record := Record{\n        Person: Person{\n            name: "record",\n            age:  29,\n        },\n        Employee: Employee{\n            position: "software engineer",\n        },\n    }\n\n    fmt.Println("name", record.name)             // 29\n    fmt.Println("Person.age", record.Person.age) // 29\n\n    fmt.Println("position", record.position)                   // software engineer\n    fmt.Println("Employee.position", record.Employee.position) // software engineer\n}\n')),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/28014591/nameless-fields-in-go-structs"},"https://stackoverflow.com/questions/28014591/nameless-fields-in-go-structs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pjchender.dev/golang/structs/"},"https://pjchender.dev/golang/structs/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10227592"},"https://ithelp.ithome.com.tw/articles/10227592")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.hydrogen18.com/blog/golang-embedding.html"},"http://www.hydrogen18.com/blog/golang-embedding.html"))))}d.isMDXComponent=!0}}]);