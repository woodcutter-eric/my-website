(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3695],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(n),k=i,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||l;return n?a.createElement(c,r(r({ref:t},u),{},{components:n})):a.createElement(c,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var m=2;m<l;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6172:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var a=n(4034),i=n(9973),l=(n(7294),n(3905)),r=["components"],o={},p="Components",m={unversionedId:"Submarine/Code/Submarine-Server/Core/Components",id:"Submarine/Code/Submarine-Server/Core/Components",isDocsHomePage:!1,title:"Components",description:"Core",source:"@site/docs/Submarine/Code/Submarine-Server/Core/Components.md",sourceDirName:"Submarine/Code/Submarine-Server/Core",slug:"/Submarine/Code/Submarine-Server/Core/Components",permalink:"/docs/Submarine/Code/Submarine-Server/Core/Components",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Submarine/Code/Submarine-Operator/Overview"},next:{title:"Blog topic",permalink:"/docs/TODO/Blog/blog-topic"}},u=[{value:"Core",id:"core",children:[{value:"BootStrap",id:"bootstrap",children:[],level:3},{value:"Submitter",id:"submitter",children:[],level:3},{value:"Server",id:"server",children:[],level:3}],level:2},{value:"Database",id:"database",children:[{value:"Entity",id:"entity",children:[],level:3},{value:"Utils",id:"utils",children:[],level:3}],level:2},{value:"Environment",id:"environment",children:[{value:"Database/Entity",id:"databaseentity",children:[],level:3},{value:"Database/Mapper",id:"databasemapper",children:[],level:3},{value:"EnvironmentManager",id:"environmentmanager",children:[],level:3}],level:2},{value:"Experiment",id:"experiment",children:[{value:"Database/Entity",id:"databaseentity-1",children:[],level:3},{value:"Database/Mappers",id:"databasemappers",children:[],level:3},{value:"Database/Service",id:"databaseservice",children:[],level:3},{value:"Experiment Manager",id:"experiment-manager",children:[],level:3}],level:2},{value:"ExperimentTemplate",id:"experimenttemplate",children:[{value:"Entities",id:"entities",children:[],level:3},{value:"Mappers",id:"mappers",children:[],level:3},{value:"ExperimentTemplateManager",id:"experimenttemplatemanager",children:[],level:3}],level:2},{value:"model.database",id:"modeldatabase",children:[{value:"Entities",id:"entities-1",children:[],level:3},{value:"Mappers",id:"mappers-1",children:[],level:3},{value:"Service",id:"service",children:[],level:3}],level:2},{value:"Notebook",id:"notebook",children:[{value:"Entity",id:"entity-1",children:[],level:3},{value:"Mappers",id:"mappers-2",children:[],level:3},{value:"Service",id:"service-1",children:[],level:3},{value:"NotebookManager",id:"notebookmanager",children:[],level:3}],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Rest",id:"rest",children:[],level:2},{value:"gson",id:"gson",children:[],level:2},{value:"utils",id:"utils-1",children:[{value:"GitUtils",id:"gitutils",children:[],level:3},{value:"GitHttpRequest",id:"githttprequest",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"components"},"Components"),(0,l.kt)("h2",{id:"core"},"Core"),(0,l.kt)("p",null,"The core files are the top-level files in the server-core folder."),(0,l.kt)("h3",{id:"bootstrap"},"BootStrap"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Bootstrap")," extends ",(0,l.kt)("inlineCode",{parentName:"li"},"HttpServlet"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It first registers the api info like description, email, version, ..."),(0,l.kt)("li",{parentName:"ul"},"The create a server and config"),(0,l.kt)("li",{parentName:"ul"},"And finally use the config to create a servlet")))),(0,l.kt)("h3",{id:"submitter"},"Submitter"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"!!! UNFINISHED"),(0,l.kt)("li",{parentName:"ul"},"Submitter Manager is responsible for load implements class."),(0,l.kt)("li",{parentName:"ul"},"Submitter is used to actually to create resources (I believe it is to create a kubernetes resources)")),(0,l.kt)("h3",{id:"server"},"Server"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It first loads a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineConfiguration")," instance, which is a singleton"),(0,l.kt)("li",{parentName:"ul"},"Then it add config to ",(0,l.kt)("inlineCode",{parentName:"li"},"jettyWebServer")," and set up handlers for ",(0,l.kt)("inlineCode",{parentName:"li"},"jettyWebServer")),(0,l.kt)("li",{parentName:"ul"},"Last, it starts notebook server and submarine server"),(0,l.kt)("li",{parentName:"ul"},"It registers a shutdown hook")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Runtime.getRuntime()\n        .addShutdownHook(\n            new Thread(\n                () -> {\n                  LOG.info("Shutting down Submarine Server ... ");\n                  try {\n                    jettyWebServer.stop();\n                    Thread.sleep(3000);\n                  } catch (Exception e) {\n                    LOG.error("Error while stopping servlet container", e);\n                  }\n                  LOG.info("Bye");\n                }));\n')),(0,l.kt)("h2",{id:"database"},"Database"),(0,l.kt)("h3",{id:"entity"},"Entity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"abstract class ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseEntity")),(0,l.kt)("li",{parentName:"ul"},"It is just a base class for databast schema."),(0,l.kt)("li",{parentName:"ul"},"It also implement a customized ",(0,l.kt)("inlineCode",{parentName:"li"},"toString()")," function.")),(0,l.kt)("h3",{id:"utils"},"Utils"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ModelBatisUtil"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In initialization, it sets up a ",(0,l.kt)("inlineCode",{parentName:"li"},"sqlSessionFactory")," with the ",(0,l.kt)("inlineCode",{parentName:"li"},"mlflow")," database configuration"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MyBatisUtil"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In initialization, it sets up a ",(0,l.kt)("inlineCode",{parentName:"li"},"sqlSessionFactory")," with our own configuration."),(0,l.kt)("li",{parentName:"ul"},"For example, you can specify ",(0,l.kt)("inlineCode",{parentName:"li"},"Test")," and it will use test database instead."))),(0,l.kt)("li",{parentName:"ul"},"Note:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineConfiguration.getInstance()")," is a singleton factory, every method that call it will result in the change of the state.")))),(0,l.kt)("h2",{id:"environment"},"Environment"),(0,l.kt)("h3",{id:"databaseentity"},"Database/Entity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class ",(0,l.kt)("inlineCode",{parentName:"li"},"EnvironmentEntity")," extends ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseEntity")),(0,l.kt)("li",{parentName:"ul"},"It adds ",(0,l.kt)("inlineCode",{parentName:"li"},"environmentName")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"environmentSpec")," fields as well as getters and setters")),(0,l.kt)("h3",{id:"databasemapper"},"Database/Mapper"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"interface ",(0,l.kt)("inlineCode",{parentName:"li"},"EnvironmentMapper")),(0,l.kt)("li",{parentName:"ul"},"It provides a interface for  ",(0,l.kt)("inlineCode",{parentName:"li"},"EnvironmentEntity"),"'s CRUD operations")),(0,l.kt)("h3",{id:"environmentmanager"},"EnvironmentManager"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fields",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cachedEnvironments"),": cache for environments"))),(0,l.kt)("li",{parentName:"ul"},"static method:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getInstance()"),": a singleton factory"))),(0,l.kt)("li",{parentName:"ul"},"instance method:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkSpec(EnvironmentSpec spec)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Make sure that the ",(0,l.kt)("inlineCode",{parentName:"li"},"EnvironmentSpec")," is not ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"And return ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"BAD_REQUEST")," status code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generateEnvironmentId()"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A method to get incremental environment id"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getEnvironmentDetails(String name)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Get an environment from the cache first"),(0,l.kt)("li",{parentName:"ul"},"If not found in the cache, try to pull an entity from the database through ",(0,l.kt)("inlineCode",{parentName:"li"},"sqlSession")),(0,l.kt)("li",{parentName:"ul"},"If not found in the database, throw a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"BAD_REQUEST")," status code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listEnvironments(String status)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Get a list of environments"),(0,l.kt)("li",{parentName:"ul"},"Get all ",(0,l.kt)("inlineCode",{parentName:"li"},"EnvironmentEntity")," from the database and then tranform it into ",(0,l.kt)("inlineCode",{parentName:"li"},"Environment")," and put into the list and cache"),(0,l.kt)("li",{parentName:"ul"},"If some error happens, throw a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"BAD_REQUEST")," status code"),(0,l.kt)("li",{parentName:"ul"},"Set the ",(0,l.kt)("inlineCode",{parentName:"li"},"readedDB")," to false (which means we already build the cache)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"getEnvironment(String name)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A wrapper of ",(0,l.kt)("inlineCode",{parentName:"li"},"getEnvironmentDetails(String name)")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"deleteEnvironment(String name)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"First ",(0,l.kt)("inlineCode",{parentName:"li"},"getEnvironment(String name)"),". If not found, throw a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT_FOUND")," status code."),(0,l.kt)("li",{parentName:"ul"},"Remove the environment from the database and the cache, else throw a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"BAD_REQUEST")," status code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"updateEnvironment(String name, EnvironmentSpec spec)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A wrapper of ",(0,l.kt)("inlineCode",{parentName:"li"},"createOrUpdateEnvironment(EnvironmentSpec spec, String operation)")),(0,l.kt)("li",{parentName:"ul"},"Call ",(0,l.kt)("inlineCode",{parentName:"li"},"checkSpec(EnvironmentSpec spec)")," to make sure the spec is not ",(0,l.kt)("inlineCode",{parentName:"li"},"null")),(0,l.kt)("li",{parentName:"ul"},"If not found, throw a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"NOT_FOUND")," status code."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"createEnvironment(String name, EnvironmentSpec spec)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"A wrapper of ",(0,l.kt)("inlineCode",{parentName:"li"},"createOrUpdateEnvironment(EnvironmentSpec spec, String operation)")),(0,l.kt)("li",{parentName:"ul"},"Call ",(0,l.kt)("inlineCode",{parentName:"li"},"checkSpec(EnvironmentSpec spec)")," to make sure the spec is not ",(0,l.kt)("inlineCode",{parentName:"li"},"null")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"createOrUpdateEnvironment(EnvironmentSpec spec, String operation)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create an entity based on the given spec"),(0,l.kt)("li",{parentName:"ul"},"Choose to create or update given the argument"),(0,l.kt)("li",{parentName:"ul"},"And then update the cache accordingly"),(0,l.kt)("li",{parentName:"ul"},"If there're some error, throw a ",(0,l.kt)("inlineCode",{parentName:"li"},"SubmarineRuntimeException")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"BAD_REQUEST")," status code")))))),(0,l.kt)("h2",{id:"experiment"},"Experiment"),(0,l.kt)("h3",{id:"databaseentity-1"},"Database/Entity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class ",(0,l.kt)("inlineCode",{parentName:"li"},"ExperimentEntity")," extends ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseEntity")),(0,l.kt)("li",{parentName:"ul"},"It adds ",(0,l.kt)("inlineCode",{parentName:"li"},"experimentSpec")," fields as well as getters and setters")),(0,l.kt)("h3",{id:"databasemappers"},"Database/Mappers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"interface ",(0,l.kt)("inlineCode",{parentName:"li"},"ExperimentMapper")),(0,l.kt)("li",{parentName:"ul"},"It provides a interface for  ",(0,l.kt)("inlineCode",{parentName:"li"},"EnvironmentEntity"),"'s CRUD operations")),(0,l.kt)("h3",{id:"databaseservice"},"Database/Service"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"class ",(0,l.kt)("inlineCode",{parentName:"li"},"Experiment ")),(0,l.kt)("li",{parentName:"ul"},"It provides a service that implement ",(0,l.kt)("inlineCode",{parentName:"li"},"ExperimentMapper")," (but not use ",(0,l.kt)("inlineCode",{parentName:"li"},"implement"),", so what it do is to create a deleaged service)"),(0,l.kt)("li",{parentName:"ul"},"Each method will return true to signal the result of execution")),(0,l.kt)("h3",{id:"experiment-manager"},"Experiment Manager"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"createExperiment(ExperimentSpec spec)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If first check the spec is ",(0,l.kt)("inlineCode",{parentName:"li"},"null")," or not by calling ",(0,l.kt)("inlineCode",{parentName:"li"},"checkSpec(spec)")),(0,l.kt)("li",{parentName:"ul"},"Then it is populate the ",(0,l.kt)("inlineCode",{parentName:"li"},"spec")," using some default fields."),(0,l.kt)("li",{parentName:"ul"},"The spec is used to create an experiment"),(0,l.kt)("li",{parentName:"ul"},"After creation, ")))),(0,l.kt)("h2",{id:"experimenttemplate"},"ExperimentTemplate"),(0,l.kt)("h3",{id:"entities"},"Entities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"extends ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseEntity")),(0,l.kt)("li",{parentName:"ul"},"add ",(0,l.kt)("inlineCode",{parentName:"li"},"experimentTemplateName")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"experimentTemplateSpec"))),(0,l.kt)("h3",{id:"mappers"},"Mappers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Just like other mappers before"),(0,l.kt)("li",{parentName:"ul"},"but it add a special ",(0,l.kt)("inlineCode",{parentName:"li"},"selectByKey"))),(0,l.kt)("h3",{id:"experimenttemplatemanager"},"ExperimentTemplateManager"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This manager handles a lot of creating, setting of parameters"),(0,l.kt)("li",{parentName:"ul"},"Then it usuallty returns a ",(0,l.kt)("inlineCode",{parentName:"li"},"ExperimentSpec")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"ExperimentTemplateSpec"))),(0,l.kt)("h2",{id:"modeldatabase"},"model.database"),(0,l.kt)("h3",{id:"entities-1"},"Entities"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ModelVersionEntity"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"version"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"userId"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"currentStage"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"runId"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"status"),", ..."),(0,l.kt)("li",{parentName:"ul"},"getters, setters, and ",(0,l.kt)("inlineCode",{parentName:"li"},"toString()")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RegisteredModelNameEntity"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"description"),", ..."),(0,l.kt)("li",{parentName:"ul"},"getters, setters, and ",(0,l.kt)("inlineCode",{parentName:"li"},"toString()"))))),(0,l.kt)("h3",{id:"mappers-1"},"Mappers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The mappers for model entities")),(0,l.kt)("h3",{id:"service"},"Service"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"They are wrappers for ",(0,l.kt)("inlineCode",{parentName:"li"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"delete"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"select"),", ...")),(0,l.kt)("h2",{id:"notebook"},"Notebook"),(0,l.kt)("h3",{id:"entity-1"},"Entity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"extends ",(0,l.kt)("inlineCode",{parentName:"li"},"BaseEntity")),(0,l.kt)("li",{parentName:"ul"},"And add ",(0,l.kt)("inlineCode",{parentName:"li"},"notebookSpec"))),(0,l.kt)("h3",{id:"mappers-2"},"Mappers"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mapper interface for notebook entity")),(0,l.kt)("h3",{id:"service-1"},"Service"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A service to insert, delete, update a notebook")),(0,l.kt)("h3",{id:"notebookmanager"},"NotebookManager"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Manager is a class that help to convert a spec to a notebook"),(0,l.kt)("li",{parentName:"ul"},"It uses notebook service under the hood"),(0,l.kt)("li",{parentName:"ul"},"It also does some validation, cleaning, adding, and other things to let the spec become valid")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"It contains several class to build a json response.")),(0,l.kt)("h2",{id:"rest"},"Rest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"})),(0,l.kt)("h2",{id:"gson"},"gson"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This folder defines several serializer/deserializer used by google gson (json tool).")),(0,l.kt)("h2",{id:"utils-1"},"utils"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This folder have files to support git operations.")),(0,l.kt)("h3",{id:"gitutils"},"GitUtils"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"clone(String remotePath, String localPath, String token, String branch)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git clone")," operation"),(0,l.kt)("li",{parentName:"ul"},"It uses github access token to clone the repo."),(0,l.kt)("li",{parentName:"ul"},"And it will also create a repository and switch to a given branch"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"add(String localPath, String fileName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git add")," operation"),(0,l.kt)("li",{parentName:"ul"},"It first makes sure the file exists"),(0,l.kt)("li",{parentName:"ul"},"And then add to the cache"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rm(String localPath, String fileName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git rm")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reset(String localPath, String fileName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git reset")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pull(String localPath, String token, String branch)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git pull")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"commit(String localPath, String message)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git commit")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"push(String localPath, String token, String remote)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git push")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"branchCreate(String localPath, String branchName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git branch")," operation"),(0,l.kt)("li",{parentName:"ul"},"It will check if the branch has already existed"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"branchDelete(String localPath, String branchName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git branch -d")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"checkout(String localPath, String branchName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perform ",(0,l.kt)("inlineCode",{parentName:"li"},"git checkout")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rebase(String localPath, String branchName, String upstreamName)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perfrom ",(0,l.kt)("inlineCode",{parentName:"li"},"git rebase")," operation"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"remoteAdd(String localPath, String uri, String remoteName)"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Perfrom ",(0,l.kt)("inlineCode",{parentName:"li"},"git remote add")," operation")))),(0,l.kt)("h3",{id:"githttprequest"},"GitHttpRequest"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This class helps sends an HTTP request to the specified URL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"GitHttpRequest"),":",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create an ",(0,l.kt)("inlineCode",{parentName:"li"},"URLConnection")," and then cast to ",(0,l.kt)("inlineCode",{parentName:"li"},"HttpURLConnection")),(0,l.kt)("li",{parentName:"ul"},"Then set request methods and header properties"),(0,l.kt)("li",{parentName:"ul"},"At last, write content to output stream and read the result from input stream")))),(0,l.kt)("h2",{id:"references"},"References"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/submarine/tree/master/submarine-server/server-core/src/main/java/org/apache/submarine/server"},"https://github.com/apache/submarine/tree/master/submarine-server/server-core/src/main/java/org/apache/submarine/server"))))}d.isMDXComponent=!0}}]);