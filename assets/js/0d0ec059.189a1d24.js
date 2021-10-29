(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1327],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5152:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(4034),o=t(9973),a=(t(7294),t(3905)),i=["components"],l={},s="PKG resources",c={unversionedId:"Submarine/Code/Sample-Controller/PKG",id:"Submarine/Code/Sample-Controller/PKG",isDocsHomePage:!1,title:"PKG resources",description:"The package is under the /pkg/apis/samplecontroller/v1alpha1 directory.",source:"@site/docs/Submarine/Code/Sample-Controller/PKG.md",sourceDirName:"Submarine/Code/Sample-Controller",slug:"/Submarine/Code/Sample-Controller/PKG",permalink:"/docs/Submarine/Code/Sample-Controller/PKG",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Main",permalink:"/docs/Submarine/Code/Sample-Controller/Main"},next:{title:"Setup",permalink:"/docs/Submarine/Code/Sample-Controller/Setup"}},p=[{value:"Code Generation",id:"code-generation",children:[],level:2},{value:"Resource Types",id:"resource-types",children:[],level:2},{value:"Docs",id:"docs",children:[],level:2},{value:"Register the Type",id:"register-the-type",children:[],level:2},{value:"Signal",id:"signal",children:[],level:2},{value:"References",id:"references",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pkg-resources"},"PKG resources"),(0,a.kt)("p",null,"The package is under the ",(0,a.kt)("inlineCode",{parentName:"p"},"/pkg/apis/samplecontroller/v1alpha1")," directory."),(0,a.kt)("h2",{id:"code-generation"},"Code Generation"),(0,a.kt)("p",null,"Because go does not have generic, the idiomatic way is to use code generation. Kubernetes uses this approach to define custom resources first and generate the related code with the help of the code generator. "),(0,a.kt)("p",null,"By adding comments like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"// +genclient\n// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object\n")),(0,a.kt)("p",null,"Kubernetes helps generate relevant code given the options you specify."),(0,a.kt)("p",null,"See Client-Go code for more explanation."),(0,a.kt)("h2",{id:"resource-types"},"Resource Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You define the struct of custom resource, this is used to map to Kubernetes Object"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metav1.TypeMeta"),": map to ",(0,a.kt)("inlineCode",{parentName:"li"},"apiVersions")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"kind")," in the manifest file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metav1.ObjectMeta"),": map to ",(0,a.kt)("inlineCode",{parentName:"li"},"metadata")," in the manifest file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Spec"),": map to ",(0,a.kt)("inlineCode",{parentName:"li"},"spec")," in the manifest file"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Status"),": map to ",(0,a.kt)("inlineCode",{parentName:"li"},"status")," in the manifest file (only after the resource is created)"),(0,a.kt)("li",{parentName:"ul"},"See Client-Go code explanation")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="types.go"',title:'"types.go"'},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n)\n\n// +genclient\n// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object\n\n// Foo is a specification for a Foo resource\ntype Foo struct {\n    metav1.TypeMeta   `json:",inline"`\n    metav1.ObjectMeta `json:"metadata,omitempty"`\n\n    Spec   FooSpec   `json:"spec"`\n    Status FooStatus `json:"status"`\n}\n\n// FooSpec is the spec for a Foo resource\ntype FooSpec struct {\n    DeploymentName string `json:"deploymentName"`\n    Replicas       *int32 `json:"replicas"`\n}\n\n// FooStatus is the status for a Foo resource\ntype FooStatus struct {\n    AvailableReplicas int32 `json:"availableReplicas"`\n}\n\n// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object\n\n// FooList is a list of Foo resources\ntype FooList struct {\n    metav1.TypeMeta `json:",inline"`\n    metav1.ListMeta `json:"metadata"`\n\n    Items []Foo `json:"items"`\n}\n')),(0,a.kt)("h2",{id:"docs"},"Docs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This file defines the documentation of the controller")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="doc.go"',title:'"doc.go"'},'// +k8s:deepcopy-gen=package\n// +groupName=samplecontroller.k8s.io\n\n// Package v1alpha1 is the v1alpha1 version of the API.\npackage v1alpha1 // import "k8s.io/sample-controller/pkg/apis/samplecontroller/v1alpha1"\n')),(0,a.kt)("h2",{id:"register-the-type"},"Register the Type"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"scheme"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It is the Kubernetest type system, which controls api group and version"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddToScheme")," is a global function that registers this API group & version to a scheme, which is used in ",(0,a.kt)("inlineCode",{parentName:"li"},"controller.go")," to register the custom type so that the client know how to interact with this resources"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Kind")," is the representation of object stored in etcd"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Resource")," is the representation of object served by API server"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Kind")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Resource")," have some mapping between each other (maybe many-to-many)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="register.go"',title:'"register.go"'},'package v1alpha1\n\nimport (\n    metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"\n    "k8s.io/apimachinery/pkg/runtime"\n    "k8s.io/apimachinery/pkg/runtime/schema"\n\n    samplecontroller "k8s.io/sample-controller/pkg/apis/samplecontroller"\n)\n\n// SchemeGroupVersion is group version used to register these objects\nvar SchemeGroupVersion = schema.GroupVersion{Group: samplecontroller.GroupName, Version: "v1alpha1"}\n\n// Kind takes an unqualified kind and returns back a Group qualified GroupKind\nfunc Kind(kind string) schema.GroupKind {\n    return SchemeGroupVersion.WithKind(kind).GroupKind()\n}\n\n// Resource takes an unqualified resource and returns a Group qualified GroupResource\nfunc Resource(resource string) schema.GroupResource {\n    return SchemeGroupVersion.WithResource(resource).GroupResource()\n}\n\nvar (\n    // SchemeBuilder initializes a scheme builder\n    SchemeBuilder = runtime.NewSchemeBuilder(addKnownTypes)\n    // AddToScheme is a global function that registers this API group & version to a scheme\n    AddToScheme = SchemeBuilder.AddToScheme\n)\n\n// Adds the list of known types to Scheme.\nfunc addKnownTypes(scheme *runtime.Scheme) error {\n    scheme.AddKnownTypes(SchemeGroupVersion,\n        &Foo{},\n        &FooList{},\n    )\n    metav1.AddToGroupVersion(scheme, SchemeGroupVersion)\n    return nil\n}\n')),(0,a.kt)("h2",{id:"signal"},"Signal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The signal package writes how to set up a signal handler"),(0,a.kt)("li",{parentName:"ul"},"The principle under the hood is to receive ",(0,a.kt)("inlineCode",{parentName:"li"},"SIGTERM")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"SIGKILL")),(0,a.kt)("li",{parentName:"ul"},"When receive the first stop signal, start graceful shutdown; if receive the second one, exit immediately"),(0,a.kt)("li",{parentName:"ul"},"When call ",(0,a.kt)("inlineCode",{parentName:"li"},"close(stop)"),", the blocking code block on the other side will be removed, so it will allow some termination process to execute and cleanup resources")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"var onlyOneSignalHandler = make(chan struct{})\n\n// SetupSignalHandler registered for SIGTERM and SIGINT. A stop channel is returned\n// which is closed on one of these signals. If a second signal is caught, the program\n// is terminated with exit code 1.\nfunc SetupSignalHandler() (stopCh <-chan struct{}) {\n    close(onlyOneSignalHandler) // panics when called twice\n\n    stop := make(chan struct{})\n    c := make(chan os.Signal, 2)\n    signal.Notify(c, shutdownSignals...)\n    go func() {\n        <-c\n        close(stop)\n        <-c\n        os.Exit(1) // second signal. Exit directly.\n    }()\n\n    return stop\n}\n")),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/sample-controller/"},"https://github.com/kubernetes/sample-controller/"))))}m.isMDXComponent=!0}}]);