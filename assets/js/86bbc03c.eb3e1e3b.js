(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8151],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2279:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(4034),o=t(9973),a=(t(7294),t(3905)),l=["components"],s={},i="Controller",c={unversionedId:"Submarine/Code/Sample-Controller/Controller",id:"Submarine/Code/Sample-Controller/Controller",isDocsHomePage:!1,title:"Controller",description:"Overview",source:"@site/docs/Submarine/Code/Sample-Controller/Controller.md",sourceDirName:"Submarine/Code/Sample-Controller",slug:"/Submarine/Code/Sample-Controller/Controller",permalink:"/docs/Submarine/Code/Sample-Controller/Controller",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Resources",permalink:"/docs/Submarine/Code/Sample-Controller/CR"},next:{title:"Main",permalink:"/docs/Submarine/Code/Sample-Controller/Main"}},u=[{value:"Overview",id:"overview",children:[],level:2},{value:"Basic Types",id:"basic-types",children:[],level:2},{value:"Controller Construction",id:"controller-construction",children:[],level:2},{value:"Event Handler",id:"event-handler",children:[{value:"Enqueue Object",id:"enqueue-object",children:[],level:3},{value:"Handle Object",id:"handle-object",children:[],level:3}],level:2},{value:"Resources Creation",id:"resources-creation",children:[],level:2},{value:"Run",id:"run",children:[],level:2},{value:"Process Items",id:"process-items",children:[],level:2},{value:"Sync Statue",id:"sync-statue",children:[],level:2},{value:"References",id:"references",children:[],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"controller"},"Controller"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"I list the steps of the sample controller machine model:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"NewController()"),": Create a new controller instance"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Controller.Run()"),": Start the controller",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"First sync all existing resources"),(0,a.kt)("li",{parentName:"ul"},"Start workers to wait to pull object from the workqueue"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Controller.processNextWorkItem()"),": Process objects in the workqueue",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"After an object being pulled out of workqueue, it does some validation to make sure it is the item we can process. The only valid format is string: ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace/name")),(0,a.kt)("li",{parentName:"ul"},"Then we call ",(0,a.kt)("inlineCode",{parentName:"li"},"syncHandler")," to try to merge the actual state to the current state"),(0,a.kt)("li",{parentName:"ul"},"If success, then we forget this item (stop tracking it) or we will requeue the item in case of transient error"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Controller.syncHandler()"),": sync the state between actual state and current state",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It will first parse the string and to find the object"),(0,a.kt)("li",{parentName:"ul"},"If not found, we create a new one (send a request)"),(0,a.kt)("li",{parentName:"ul"},"If found, we check the ownership of the deployment else we return an error"),(0,a.kt)("li",{parentName:"ul"},"If the replicas number differs, we update the deployment (send a request)"),(0,a.kt)("li",{parentName:"ul"},"Finally we update the status block of the resources to reflect the change and then record the event")))),(0,a.kt)("p",null,"And later I will explain each component in detail"),(0,a.kt)("h2",{id:"basic-types"},"Basic Types"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'const controllerAgentName = "sample-controller"\n\nconst (\n    // SuccessSynced is used as part of the Event \'reason\' when a Foo is synced\n    SuccessSynced = "Synced"\n    // ErrResourceExists is used as part of the Event \'reason\' when a Foo fails\n    // to sync due to a Deployment of the same name already existing.\n    ErrResourceExists = "ErrResourceExists"\n\n    // MessageResourceExists is the message used for Events when a resource\n    // fails to sync due to a Deployment already existing\n    MessageResourceExists = "Resource %q already exists and is not managed by Foo"\n    // MessageResourceSynced is the message used for an Event fired when a Foo\n    // is synced successfully\n    MessageResourceSynced = "Foo synced successfully"\n)\n\n// Controller is the controller implementation for Foo resources\ntype Controller struct {\n    // kubeclientset is a standard kubernetes clientset\n    kubeclientset kubernetes.Interface\n    // sampleclientset is a clientset for our own API group\n    sampleclientset clientset.Interface\n\n    deploymentsLister appslisters.DeploymentLister\n    deploymentsSynced cache.InformerSynced\n    foosLister        listers.FooLister\n    foosSynced        cache.InformerSynced\n\n    // workqueue is a rate limited work queue. This is used to queue work to be\n    // processed instead of performing it as soon as a change happens. This\n    // means we can ensure we only process a fixed amount of resources at a\n    // time, and makes it easy to ensure we are never processing the same item\n    // simultaneously in two different workers.\n    workqueue workqueue.RateLimitingInterface\n    // recorder is an event recorder for recording Event resources to the\n    // Kubernetes API.\n    recorder record.EventRecorder\n}\n')),(0,a.kt)("h2",{id:"controller-construction"},"Controller Construction"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First it takes arugments containing clients and informers"),(0,a.kt)("li",{parentName:"ol"},"Then it create a recorder to record events"),(0,a.kt)("li",{parentName:"ol"},"It creates a controller instance"),(0,a.kt)("li",{parentName:"ol"},"It registers event handlers for informers")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// NewController returns a new sample controller\nfunc NewController(\n    kubeclientset kubernetes.Interface,\n    sampleclientset clientset.Interface,\n    deploymentInformer appsinformers.DeploymentInformer,\n    fooInformer informers.FooInformer) *Controller {\n\n    // Create event broadcaster\n    // Add sample-controller types to the default Kubernetes Scheme so Events can be\n    // logged for sample-controller types.\n    utilruntime.Must(samplescheme.AddToScheme(scheme.Scheme))\n    klog.V(4).Info("Creating event broadcaster")\n    eventBroadcaster := record.NewBroadcaster()\n    eventBroadcaster.StartStructuredLogging(0)\n    eventBroadcaster.StartRecordingToSink(&typedcorev1.EventSinkImpl{Interface: kubeclientset.CoreV1().Events("")})\n    recorder := eventBroadcaster.NewRecorder(scheme.Scheme, corev1.EventSource{Component: controllerAgentName})\n\n    controller := &Controller{\n        kubeclientset:     kubeclientset,\n        sampleclientset:   sampleclientset,\n        deploymentsLister: deploymentInformer.Lister(),\n        deploymentsSynced: deploymentInformer.Informer().HasSynced,\n        foosLister:        fooInformer.Lister(),\n        foosSynced:        fooInformer.Informer().HasSynced,\n        workqueue:         workqueue.NewNamedRateLimitingQueue(workqueue.DefaultControllerRateLimiter(), "Foos"),\n        recorder:          recorder,\n    }\n\n    klog.Info("Setting up event handlers")\n    // Set up an event handler for when Foo resources change\n    fooInformer.Informer().AddEventHandler(cache.ResourceEventHandlerFuncs{\n        AddFunc: controller.enqueueFoo,\n        UpdateFunc: func(old, new interface{}) {\n            controller.enqueueFoo(new)\n        },\n    })\n    // Set up an event handler for when Deployment resources change. This\n    // handler will lookup the owner of the given Deployment, and if it is\n    // owned by a Foo resource then the handler will enqueue that Foo resource for\n    // processing. This way, we don\'t need to implement custom logic for\n    // handling Deployment resources. More info on this pattern:\n    // https://github.com/kubernetes/community/blob/8cafef897a22026d42f5e5bb3f104febe7e29830/contributors/devel/controllers.md\n    deploymentInformer.Informer().AddEventHandler(cache.ResourceEventHandlerFuncs{\n        AddFunc: controller.handleObject,\n        UpdateFunc: func(old, new interface{}) {\n            newDepl := new.(*appsv1.Deployment)\n            oldDepl := old.(*appsv1.Deployment)\n            if newDepl.ResourceVersion == oldDepl.ResourceVersion {\n                // Periodic resync will send update events for all known Deployments.\n                // Two different versions of the same Deployment will always have different RVs.\n                return\n            }\n            controller.handleObject(new)\n        },\n        DeleteFunc: controller.handleObject,\n    })\n\n    return controller\n}\n')),(0,a.kt)("h2",{id:"event-handler"},"Event Handler"),(0,a.kt)("h3",{id:"enqueue-object"},"Enqueue Object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We enqueue the object when the spec of a cr changed")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// enqueueFoo takes a Foo resource and converts it into a namespace/name\n// string which is then put onto the work queue. This method should *not* be\n// passed resources of any type other than Foo.\nfunc (c *Controller) enqueueFoo(obj interface{}) {\n    var key string\n    var err error\n    if key, err = cache.MetaNamespaceKeyFunc(obj); err != nil {\n        utilruntime.HandleError(err)\n        return\n    }\n    c.workqueue.Add(key)\n}\n")),(0,a.kt)("h3",{id:"handle-object"},"Handle Object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If first make sure if is a valid Kubernetes object and then check the ownership"),(0,a.kt)("li",{parentName:"ul"},"Due to the share informer, we are not sure whether this object belongs to the foo or not (all change in any deployment resources will be reflect to each deployment informer)"),(0,a.kt)("li",{parentName:"ul"},"You may wonder why we also call ",(0,a.kt)("inlineCode",{parentName:"li"},"enqueueFoo(foo)"),". That's because if the spec of a deployment change, you probabily have to check the status of the cr again to make sure the state is consistent. This is the principle of single point of change. (only allow the ",(0,a.kt)("inlineCode",{parentName:"li"},"syncHandler")," to do the work)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// handleObject will take any resource implementing metav1.Object and attempt\n// to find the Foo resource that \'owns\' it. It does this by looking at the\n// objects metadata.ownerReferences field for an appropriate OwnerReference.\n// It then enqueues that Foo resource to be processed. If the object does not\n// have an appropriate OwnerReference, it will simply be skipped.\nfunc (c *Controller) handleObject(obj interface{}) {\n    var object metav1.Object\n    var ok bool\n    if object, ok = obj.(metav1.Object); !ok {\n        tombstone, ok := obj.(cache.DeletedFinalStateUnknown)\n        if !ok {\n            utilruntime.HandleError(fmt.Errorf("error decoding object, invalid type"))\n            return\n        }\n        object, ok = tombstone.Obj.(metav1.Object)\n        if !ok {\n            utilruntime.HandleError(fmt.Errorf("error decoding object tombstone, invalid type"))\n            return\n        }\n        klog.V(4).Infof("Recovered deleted object \'%s\' from tombstone", object.GetName())\n    }\n    klog.V(4).Infof("Processing object: %s", object.GetName())\n    if ownerRef := metav1.GetControllerOf(object); ownerRef != nil {\n        // If this object is not owned by a Foo, we should not do anything more\n        // with it.\n        if ownerRef.Kind != "Foo" {\n            return\n        }\n\n        foo, err := c.foosLister.Foos(object.GetNamespace()).Get(ownerRef.Name)\n        if err != nil {\n            klog.V(4).Infof("ignoring orphaned object \'%s\' of foo \'%s\'", object.GetSelfLink(), ownerRef.Name)\n            return\n        }\n\n        c.enqueueFoo(foo)\n        return\n    }\n}\n')),(0,a.kt)("h2",{id:"resources-creation"},"Resources Creation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This code snippet is only to use object-based method to create a Kubernets object representation and will be used later to create a new deployment in Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"This line ",(0,a.kt)("inlineCode",{parentName:"li"},'*metav1.NewControllerRef(foo, samplev1alpha1.SchemeGroupVersion.WithKind("Foo"))')," add the ownership to this object")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// newDeployment creates a new Deployment for a Foo resource. It also sets\n// the appropriate OwnerReferences on the resource so handleObject can discover\n// the Foo resource that \'owns\' it.\nfunc newDeployment(foo *samplev1alpha1.Foo) *appsv1.Deployment {\n    labels := map[string]string{\n        "app":        "nginx",\n        "controller": foo.Name,\n    }\n    return &appsv1.Deployment{\n        ObjectMeta: metav1.ObjectMeta{\n            Name:      foo.Spec.DeploymentName,\n            Namespace: foo.Namespace,\n            OwnerReferences: []metav1.OwnerReference{\n                *metav1.NewControllerRef(foo, samplev1alpha1.SchemeGroupVersion.WithKind("Foo")),\n            },\n        },\n        Spec: appsv1.DeploymentSpec{\n            Replicas: foo.Spec.Replicas,\n            Selector: &metav1.LabelSelector{\n                MatchLabels: labels,\n            },\n            Template: corev1.PodTemplateSpec{\n                ObjectMeta: metav1.ObjectMeta{\n                    Labels: labels,\n                },\n                Spec: corev1.PodSpec{\n                    Containers: []corev1.Container{\n                        {\n                            Name:  "nginx",\n                            Image: "nginx:latest",\n                        },\n                    },\n                },\n            },\n        },\n    }\n}\n')),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It will first sync all existing resources (also monitor all previous resources, too)"),(0,a.kt)("li",{parentName:"ul"},"It then starts workers to wait to pull object from the workqueue"),(0,a.kt)("li",{parentName:"ul"},"When we input a stop signal, the ",(0,a.kt)("inlineCode",{parentName:"li"},"stopCh")," will stop blocking and the function returns")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Run will set up the event handlers for types we are interested in, as well\n// as syncing informer caches and starting workers. It will block until stopCh\n// is closed, at which point it will shutdown the workqueue and wait for\n// workers to finish processing their current work items.\nfunc (c *Controller) Run(workers int, stopCh <-chan struct{}) error {\n    defer utilruntime.HandleCrash()\n    defer c.workqueue.ShutDown()\n\n    // Start the informer factories to begin populating the informer caches\n    klog.Info("Starting Foo controller")\n\n    // Wait for the caches to be synced before starting workers\n    klog.Info("Waiting for informer caches to sync")\n    if ok := cache.WaitForCacheSync(stopCh, c.deploymentsSynced, c.foosSynced); !ok {\n        return fmt.Errorf("failed to wait for caches to sync")\n    }\n\n    klog.Info("Starting workers")\n    // Launch two workers to process Foo resources\n    for i := 0; i < workers; i++ {\n        go wait.Until(c.runWorker, time.Second, stopCh)\n    }\n\n    klog.Info("Started workers")\n    <-stopCh\n    klog.Info("Shutting down workers")\n\n    return nil\n}\n')),(0,a.kt)("h2",{id:"process-items"},"Process Items"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Each worker will wait to pull objects from the workqueue"),(0,a.kt)("li",{parentName:"ul"},"After pulling a object, it first checks if it is the valid format (string: ",(0,a.kt)("inlineCode",{parentName:"li"},"namespace/name"),"), then try to sync each state"),(0,a.kt)("li",{parentName:"ul"},"If failed, requeue the item for fear of transient error or just forget (stop tracking) the item to remove it from the workqueue")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// runWorker is a long-running function that will continually call the\n// processNextWorkItem function in order to read and process a message on the\n// workqueue.\nfunc (c *Controller) runWorker() {\n    for c.processNextWorkItem() {\n    }\n}\n\n// processNextWorkItem will read a single work item off the workqueue and\n// attempt to process it, by calling the syncHandler.\nfunc (c *Controller) processNextWorkItem() bool {\n    obj, shutdown := c.workqueue.Get()\n\n    if shutdown {\n        return false\n    }\n\n    // We wrap this block in a func so we can defer c.workqueue.Done.\n    err := func(obj interface{}) error {\n        // We call Done here so the workqueue knows we have finished\n        // processing this item. We also must remember to call Forget if we\n        // do not want this work item being re-queued. For example, we do\n        // not call Forget if a transient error occurs, instead the item is\n        // put back on the workqueue and attempted again after a back-off\n        // period.\n        defer c.workqueue.Done(obj)\n        var key string\n        var ok bool\n        // We expect strings to come off the workqueue. These are of the\n        // form namespace/name. We do this as the delayed nature of the\n        // workqueue means the items in the informer cache may actually be\n        // more up to date that when the item was initially put onto the\n        // workqueue.\n        if key, ok = obj.(string); !ok {\n            // As the item in the workqueue is actually invalid, we call\n            // Forget here else we\'d go into a loop of attempting to\n            // process a work item that is invalid.\n            c.workqueue.Forget(obj)\n            utilruntime.HandleError(fmt.Errorf("expected string in workqueue but got %#v", obj))\n            return nil\n        }\n        // Run the syncHandler, passing it the namespace/name string of the\n        // Foo resource to be synced.\n        if err := c.syncHandler(key); err != nil {\n            // Put the item back on the workqueue to handle any transient errors.\n            c.workqueue.AddRateLimited(key)\n            return fmt.Errorf("error syncing \'%s\': %s, requeuing", key, err.Error())\n        }\n        // Finally, if no error occurs we Forget this item so it does not\n        // get queued again until another change happens.\n        c.workqueue.Forget(obj)\n        klog.Infof("Successfully synced \'%s\'", key)\n        return nil\n    }(obj)\n\n    if err != nil {\n        utilruntime.HandleError(err)\n        return true\n    }\n\n    return true\n}\n\n')),(0,a.kt)("h2",{id:"sync-statue"},"Sync Statue"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This function sync state between actual state and current state"),(0,a.kt)("li",{parentName:"ul"},"It first parses the string to get the namespace and name and then retrieve the object based on these data",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It do some checking to make sure the object is still valid or just ignore it"),(0,a.kt)("li",{parentName:"ul"},"If object not found, just create a new one"))),(0,a.kt)("li",{parentName:"ul"},"It get the deployment object and check the ownership ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If not belongs to the controller, means that it exist, so we return and output error"),(0,a.kt)("li",{parentName:"ul"},"Else we update status of the deployment (try to merge the state)"))),(0,a.kt)("li",{parentName:"ul"},"At last we update the status field of the cr to reflect the change")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// syncHandler compares the actual state with the desired, and attempts to\n// converge the two. It then updates the Status block of the Foo resource\n// with the current status of the resource.\nfunc (c *Controller) syncHandler(key string) error {\n    // Convert the namespace/name string into a distinct namespace and name\n    namespace, name, err := cache.SplitMetaNamespaceKey(key)\n    if err != nil {\n        utilruntime.HandleError(fmt.Errorf("invalid resource key: %s", key))\n        return nil\n    }\n\n    // Get the Foo resource with this namespace/name\n    foo, err := c.foosLister.Foos(namespace).Get(name)\n    if err != nil {\n        // The Foo resource may no longer exist, in which case we stop\n        // processing.\n        if errors.IsNotFound(err) {\n            utilruntime.HandleError(fmt.Errorf("foo \'%s\' in work queue no longer exists", key))\n            return nil\n        }\n\n        return err\n    }\n\n    deploymentName := foo.Spec.DeploymentName\n    if deploymentName == "" {\n        // We choose to absorb the error here as the worker would requeue the\n        // resource otherwise. Instead, the next time the resource is updated\n        // the resource will be queued again.\n        utilruntime.HandleError(fmt.Errorf("%s: deployment name must be specified", key))\n        return nil\n    }\n\n    // Get the deployment with the name specified in Foo.spec\n    deployment, err := c.deploymentsLister.Deployments(foo.Namespace).Get(deploymentName)\n    // If the resource doesn\'t exist, we\'ll create it\n    if errors.IsNotFound(err) {\n        deployment, err = c.kubeclientset.AppsV1().Deployments(foo.Namespace).Create(context.TODO(), newDeployment(foo), metav1.CreateOptions{})\n    }\n\n    // If an error occurs during Get/Create, we\'ll requeue the item so we can\n    // attempt processing again later. This could have been caused by a\n    // temporary network failure, or any other transient reason.\n    if err != nil {\n        return err\n    }\n\n    // If the Deployment is not controlled by this Foo resource, we should log\n    // a warning to the event recorder and return error msg.\n    if !metav1.IsControlledBy(deployment, foo) {\n        msg := fmt.Sprintf(MessageResourceExists, deployment.Name)\n        c.recorder.Event(foo, corev1.EventTypeWarning, ErrResourceExists, msg)\n        return fmt.Errorf("%s", msg)\n    }\n\n    // If this number of the replicas on the Foo resource is specified, and the\n    // number does not equal the current desired replicas on the Deployment, we\n    // should update the Deployment resource.\n    if foo.Spec.Replicas != nil && *foo.Spec.Replicas != *deployment.Spec.Replicas {\n        klog.V(4).Infof("Foo %s replicas: %d, deployment replicas: %d", name, *foo.Spec.Replicas, *deployment.Spec.Replicas)\n        deployment, err = c.kubeclientset.AppsV1().Deployments(foo.Namespace).Update(context.TODO(), newDeployment(foo), metav1.UpdateOptions{})\n    }\n\n    // If an error occurs during Update, we\'ll requeue the item so we can\n    // attempt processing again later. This could have been caused by a\n    // temporary network failure, or any other transient reason.\n    if err != nil {\n        return err\n    }\n\n    // Finally, we update the status block of the Foo resource to reflect the\n    // current state of the world\n    err = c.updateFooStatus(foo, deployment)\n    if err != nil {\n        return err\n    }\n\n    c.recorder.Event(foo, corev1.EventTypeNormal, SuccessSynced, MessageResourceSynced)\n    return nil\n}\n')),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/sample-controller/"},"https://github.com/kubernetes/sample-controller/"))))}m.isMDXComponent=!0}}]);