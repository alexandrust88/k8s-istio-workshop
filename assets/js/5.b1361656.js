(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{316:function(t,e,s){t.exports=s.p+"assets/img/istio.a24267ed.svg"},377:function(t,e,s){t.exports=s.p+"assets/img/istio_kiali_weight-based_routing.59934166.gif"},378:function(t,e,s){t.exports=s.p+"assets/img/bookinfo_v3.ef8cd88e.jpg"},379:function(t,e,s){t.exports=s.p+"assets/img/istio_kiali_weight-based_routing-bookinfo_v3.187ca222.gif"},398:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"istio-weight-based-routing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#istio-weight-based-routing"}},[t._v("#")]),t._v(" Istio - Weight-based routing")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Screencast: "),a("a",{attrs:{href:"https://asciinema.org/a/229605?autoplay=0&t=470",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://asciinema.org/a/229605?t=470"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://istio.io/docs/tasks/traffic-management/traffic-shifting/#apply-weight-based-routing",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://istio.io/docs/tasks/traffic-management/traffic-shifting/#apply-weight-based-routing"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("In "),a("strong",[t._v("Canary Deployments")]),t._v(", newer versions of services are incrementally rolled\nout to users to minimize the risk and impact of any bugs introduced by the newer\nversion.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/istio/istio.io/7bf371365e4a16a9a13c0e79355fe1eac7f8f99f/content/docs/concepts/traffic-management/ServiceModel_Versions.svg?sanitize=true",alt:"Traffic Management with Istio",title:"Traffic Management with Istio"}})]),t._v(" "),a("p",[t._v("Route a percentage of traffic to one service or another - send "),a("strong",[t._v("%50")]),t._v("\nof traffic to "),a("code",[t._v("reviews:v1")]),t._v(" and "),a("strong",[t._v("%50")]),t._v(" to "),a("code",[t._v("reviews:v3")]),t._v(" and finally complete\nthe migration by sending "),a("strong",[t._v("%100")]),t._v(" of traffic to "),a("code",[t._v("reviews:v3")]),t._v(".")]),t._v(" "),a("p",[t._v("Route all traffic to the "),a("code",[t._v("reviews:v1")]),t._v(" version of each microservice:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f samples/bookinfo/networking/virtual-service-all-v1.yaml\n")])])]),a("p",[t._v("Transfer "),a("strong",[t._v("50%")]),t._v(" of the traffic from "),a("code",[t._v("reviews:v1")]),t._v(" to "),a("code",[t._v("reviews:v3")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f samples/bookinfo/networking/virtual-service-reviews-50-v3.yaml\n")])])]),a("p",[t._v("Confirm the rule was replaced:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl get virtualservice reviews -o yaml\n")])])]),a("p",[t._v("Output:")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.istio.io/v1alpha3\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" VirtualService\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" reviews\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" reviews\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v3\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("weight")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("\n")])])]),a("p",[t._v("Refresh the "),a("code",[t._v("/productpage")]),t._v(" in your browser and you now see\n"),a("strong",[t._v("red colored star")]),t._v(" ratings approximately "),a("strong",[t._v("50%")]),t._v(" of the time.")]),t._v(" "),a("p",[t._v("Check the flows in Kiali graph, where only "),a("code",[t._v("reviews:{v1,v2}")]),t._v(" are used:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(377),alt:"Weight-based routing Kiali Graph",title:"Weight-based routing Kiali Graph"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("Assuming you decide that the "),a("code",[t._v("reviews:v3")]),t._v(" microservice is stable, you can\nroute "),a("strong",[t._v("100%")]),t._v(" of the traffic to "),a("code",[t._v("reviews:v3")]),t._v(" by applying this virtual service.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("kubectl apply -f samples/bookinfo/networking/virtual-service-reviews-v3.yaml\n")])])]),a("p",[t._v("When you refresh the "),a("code",[t._v("/productpage")]),t._v(" you will always see book reviews\nwith "),a("strong",[t._v("red colored star")]),t._v(" ratings for "),a("strong",[t._v("each")]),t._v(" review.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(378),alt:"Bookinfo v3",title:"Bookinfo v3"}})]),t._v(" "),a("p",[t._v("Kiali graph:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(379),alt:"Kiali - Bookinfo v3",title:"Kiali - Bookinfo v3"}})]),t._v(" "),a("hr"),t._v(" "),a("p",[a("img",{attrs:{src:s(316),alt:"Istio",title:"Istio"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);