(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,h=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&h.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"31f2":function(e,t,o){"use strict";var n=o("ebce"),s=o.n(n);s.a},"56d7":function(e,t,o){"use strict";o.r(t);o("a4d3"),o("e01a"),o("b636"),o("dc8d"),o("efe9"),o("d28b"),o("2a1b"),o("80e0"),o("6b9e"),o("197b"),o("2351"),o("8172"),o("944a"),o("81b8"),o("99af"),o("a874"),o("a623"),o("cb29"),o("4de4"),o("7db0"),o("c740"),o("0481"),o("5db7"),o("4160"),o("a630"),o("caad"),o("c975"),o("e260"),o("a15b"),o("baa5"),o("d81d"),o("5ded"),o("13d5"),o("f4dd"),o("fb6a"),o("45fc"),o("f785"),o("a434"),o("4069"),o("73d9"),o("c19f"),o("efec"),o("b56e"),o("b0c0"),o("0c47"),o("4ec9"),o("5327"),o("79a8"),o("9ff9"),o("3ea3"),o("40d9"),o("ff9c"),o("0ac8"),o("f664"),o("4057"),o("bc01"),o("6b93"),o("ca21"),o("90d7"),o("2af1"),o("0261"),o("7898"),o("23dc"),o("b65f"),o("a9e3"),o("35b3"),o("f00c"),o("8ba4"),o("9129"),o("583b"),o("aff5"),o("e6e1"),o("c35a"),o("25eb"),o("b680"),o("cca6"),o("12a8"),o("e71b"),o("4fad"),o("dca8"),o("c1f9"),o("e439"),o("dbb4"),o("7039"),o("3410"),o("2b19"),o("c906"),o("e21d"),o("e43e"),o("b64b"),o("bf96"),o("5bf7"),o("cee8"),o("af93"),o("d3b7"),o("07ac"),o("e6cf"),o("a79d"),o("a6fd"),o("4ae1"),o("3f3a"),o("ac16"),o("5d41"),o("9e4a"),o("7f78"),o("c760"),o("db96"),o("1bf2"),o("d6dd"),o("7ed3"),o("8b9a"),o("4d63"),o("ac1f"),o("5377"),o("25f0"),o("6062"),o("f5b2"),o("8a79"),o("f6d6"),o("2532"),o("3ca3"),o("466d"),o("843c"),o("4d90"),o("d80f"),o("38cf"),o("5319"),o("841c"),o("1276"),o("2ca0"),o("498a"),o("1e25"),o("eee7"),o("18a5"),o("1393"),o("04d3"),o("cc71"),o("c7cd"),o("9767"),o("1913"),o("c5d0"),o("9911"),o("c96a"),o("2315"),o("4c53"),o("664f"),o("cfc3"),o("4a9b"),o("fd87"),o("8b09"),o("143c"),o("5cc6"),o("8a59"),o("84c3"),o("fb2c"),o("9a8c"),o("a975"),o("735e"),o("c1ac"),o("d139"),o("3a7b"),o("d5d6"),o("20bf"),o("82f8"),o("e91f"),o("60bd"),o("5f96"),o("3280"),o("3fcc"),o("ec97"),o("ca91"),o("25a1"),o("cd26"),o("3c5d"),o("2954"),o("649e"),o("219c"),o("170b"),o("b39a"),o("72f7"),o("10d1"),o("1fe2"),o("159b"),o("ddb0"),o("130f"),o("9f96"),o("2b3d"),o("bf19"),o("9861");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("HelloWorld",{attrs:{msg:"Mmmm småkager"}})],1)},r=[],a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("CRow",[o("vue-lorem",{attrs:{lorem:"",sentences:""}})],1),o("CRow",[o("p",{domProps:{textContent:e._s(e.$faker.lorem.sentences())}})]),o("CRow",[o("CCol",[o("vue-lorem",{attrs:{image:"",avatar:""}})],1),o("CCol",[o("vue-lorem",{attrs:{image:"",avatar:""}})],1)],1),o("CModal",{attrs:{title:"Modal title",color:"warning",size:"xl",closeOnBackdrop:!1,show:e.warningModal},on:{"update:show":function(t){e.warningModal=t}},scopedSlots:e._u([{key:"footer-wrapper",fn:function(){return[e._v(".")]},proxy:!0},{key:"header-wrapper",fn:function(){return[e._v(".")]},proxy:!0}])},[o("CJumbotron",{attrs:{fluid:!0}},[o("h1",{staticClass:"display-3"},[e._v("Københavns Kommunes hjemmeside bruger cookies ")]),o("p",{staticClass:"leftp"},[e._v(" Dette site bruger cookies til at forbedre visningen af indholdet, huske dine valg samt til statistik for at kunne optimere indholdet løbende. Vi videregiver kun data til 3.part efter aftale og til intern brug. ")]),o("p",{staticClass:"leftp"},[e._v("Vi sætter først cookies, når du har accepterede cookies via knapperne. Bemærk enkelte/nogle indholdselementer ikke vises korrekt, hvis du undlader at acceptere eller vælger at afvise vores cookies.")]),o("p",{staticClass:"leftp"},[e._v("Du kan altid ændre dine valg om cookies ved at klikke på ”Mine valg af cookies”, der fremover vil stå øverst på siden, når du har valgt")]),o("CRow",{staticClass:"lead",attrs:{alignHorizontal:"center"}},[o("CCol",{attrs:{col:"3"}},[o("CButton",{staticClass:"btn-secondary btn-pill"},[e._v("Kun nødvendige cookies")])],1),o("CCol",{attrs:{col:"3"}},[o("CButton",{staticClass:"btn-success btn-pill"},[e._v("Tillad udvalgte")])],1),o("CCol",{attrs:{col:"2"}},[o("CButton",{staticClass:"btn-success btn-pill"},[e._v("Tillad alle ")])],1)],1),o("CRow",[o("hr")]),o("CRow",{staticClass:"catsel",attrs:{alignVertical:"baseline",alignHorizontal:"center"}},[o("CCol",{attrs:{col:"2"}},[o("toggle-button",{attrs:{value:!0,disabled:"disabled",color:{checked:"#2EB85C",unchecked:"#CED2D8"},labels:!0}}),e._v(" Nødvendige ")],1),o("CCol",{attrs:{col:"2"}},[o("toggle-button",{attrs:{value:!1,color:{checked:"#2EB85C",unchecked:"#CED2D8"},labels:!0}}),e._v(" Præference ")],1),o("CCol",{attrs:{col:"2"}},[o("toggle-button",{attrs:{value:!1,color:{checked:"#2EB85C",unchecked:"#CED2D8"},labels:!0}}),e._v(" Statistik ")],1),o("CCol",{attrs:{col:"2"}},[o("toggle-button",{attrs:{value:!1,color:{checked:"#2EB85C",unchecked:"#CED2D8"},labels:!0}}),e._v(" Funktionel ")],1)],1),o("CRow",[o("CCol",{staticClass:"offset-10"},[o("CButton",{staticClass:"mb-2",attrs:{color:"secondary"},on:{click:function(t){e.collapse=!e.collapse}}},[e.collapse?o("div",[e._v("Skjul detaljer")]):e._e(),e.collapse?e._e():o("div",[e._v("Vis detaljer")])])],1)],1),o("CCollapse",{attrs:{show:e.collapse}},[o("CRow",{staticClass:"align-content-center"},[o("CCol",[o("CTabs",{attrs:{variant:"tabs","active-tab":0}},[o("CTab",{attrs:{title:"Cookie deklaration"}},[o("CTabs",{attrs:{variant:"tabs",vertical:""}},[o("CTab",{attrs:{title:"Nødvendige"}},[e._v(" Nødvendige cookies er nødvendige for at understøtte sitets funktionalitet. "),o("CDataTable",{attrs:{items:e.items,fields:e.fields,hover:"",sorter:"",pagination:""}})],1),o("CTab",{attrs:{title:"Præference"}},[o("CDataTable",{attrs:{items:e.itemsPref,fields:e.fields,hover:"",sorter:"",pagination:""}})],1),o("CTab",{attrs:{title:"Statistik"}},[o("CDataTable",{attrs:{items:e.itemsStat,fields:e.fields,hover:"",sorter:"",pagination:""}})],1),o("CTab",{attrs:{title:"Funktionelle"}},[o("CDataTable",{attrs:{items:e.itemsFunk,fields:e.fields,hover:"",sorter:"",pagination:""}})],1)],1)],1),o("CTab",{attrs:{title:"Cookie policy"}},[e._v(" "+e._s(e.cookiepolicy)+" ")]),o("CTab",{attrs:{title:"Privacy policy"}},[e._v(" "+e._s(e.privacyPolicy)+" ")])],1)],1)],1)],1)],1)],1)],1)},i=[],c={name:"HelloWorld",props:{msg:String},data:function(){return{warningModal:!0,collapse:!1,innerCollapse:!1,fields:["navn","udbyder","forml","udlb","type"],itemsFunk:[{navn:"phpsess",udbyder:"me",forml:"session",udlb:"never",type:"https"},{navn:"phpsess",udbyder:"santa",forml:"session",udlb:"session",type:"https"},{navn:"aspse",udbyder:"none",forml:"session",udlb:"30 days",type:"https"},{navn:"cfuid",udbyder:"cloudflare",forml:"protection",udlb:"never",type:"https"}],items:[{navn:"phpsess",udbyder:"me",forml:"session",udlb:"never",type:"https"},{navn:"phpsess",udbyder:"santa",forml:"session",udlb:"session",type:"https"},{navn:"aspse",udbyder:"none",forml:"session",udlb:"30 days",type:"https"},{navn:"cfuid",udbyder:"cloudflare",forml:"protection",udlb:"never",type:"https"}],itemsPref:[{navn:"pref",udbyder:"easterbunny",forml:"preferences",udlb:"never",type:"https"},{navn:"setns",udbyder:"john",forml:"preferences",udlb:"never",type:"https"},{navn:"cookie_opts",udbyder:"he-man",forml:"preferences",udlb:"never",type:"https"},{navn:"adsrv",udbyder:"doe,john",forml:"preferences",udlb:"never",type:"https"}],itemsStat:[{navn:"1111751702_1373418",udbyder:"Defgo",forml:"Sikrer at en bruger ikke inviteres til at udfylde flere gange",udlb:"3 mdr.",type:"https"},{navn:"defgo_domainEnterTime",udbyder:"Defgo",forml:"Sikrer at en bruger inviteres første gang",udlb:"Session",type:"https"},{navn:"defgo_lastVisitedSites",udbyder:"Defgo",forml:"Registrerer hvilke sider der er besøgt på sitet",udlb:"session",type:"https"},{navn:"TestCookies",udbyder:"Defgo",forml:"Registrerer om brugeren har cookies aktiveret i sin browser",udlb:"never",type:"https"},{navn:"ASPSESSIONID",udbyder:"Defgo",forml:"Bevarer brugertilstand på tværs af sideforespørgsler",udlb:"session",type:"https"},{navn:"JSESSIONID",udbyder:"Defgo",forml:"Bevarer brugertilstand på tværs af sideforespørgsler",udlb:"session",type:"https"}],cookiepolicy:"What Are Cookies\n\nAs is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality.\n\nFor more general information on cookies, please read \"What Are Cookies\".\n\nHow We Use Cookies\n\nWe use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.\n\nDisabling Cookies\n\nYou can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies.\n\nThe Cookies We Set\n\nAccount related cookies\n\nIf you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out.\n\nLogin related cookies\n\nWe use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.\n\nEmail newsletters related cookies\n\nThis site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.\n\nSurveys related cookies\n\nFrom time to time we offer user surveys and questionnaires to provide you with interesting insights, helpful tools, or to understand our user base more accurately. These surveys may use cookies to remember who has already taken part in a survey or to provide you with accurate results after you change pages.\n\nForms related cookies\n\nWhen you submit data to through a form such as those found on contact pages or comment forms cookies may be set to remember your user details for future correspondence.\n\nSite preferences cookies\n\nIn order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences we need to set cookies so that this information can be called whenever you interact with a page is affected by your preferences.\n\nThird Party Cookies\n\nIn some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.\n\nThird party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.\n\nFrom time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.",privacyPolicy:"Privacy Policy for siteman\nAt sitename, accessible from siteurl, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by sitename and how we use it.\n\nIf you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.\n\nThis Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in sitename. This policy is not applicable to any information collected offline or via channels other than this website.\n\nConsent\nBy using our website, you hereby consent to our Privacy Policy and agree to its terms.\n\nInformation we collect\nThe personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.\n\nIf you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.\n\nWhen you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.\n\nHow we use your information\nWe use the information we collect in various ways, including to:\n\nProvide, operate, and maintain our webste\nImprove, personalize, and expand our webste\nUnderstand and analyze how you use our webste\nDevelop new products, services, features, and functionality\nCommunicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes\nSend you emails\nFind and prevent fraud\nLog Files\nsitename follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information. Our Privacy Policy was created with the help of the Privacy Policy Generator.\n\nCookies and Web Beacons\nLike any other website, sitename uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.\n\nFor more general information on cookies, please read \"What Are Cookies\".\n\nAdvertising Partners Privacy Policies\nYou may consult this list to find the Privacy Policy for each of the advertising partners of sitename.\n\nThird-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on sitename, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.\n\nNote that sitename has no access to or control over these cookies that are used by third-party advertisers.\n\nThird Party Privacy Policies\nsitename's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.\n\nYou can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.\n\nCCPA Privacy Rights (Do Not Sell My Personal Information)\nUnder the CCPA, among other rights, California consumers have the right to:\n\nRequest that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.\n\nRequest that a business delete any personal data about the consumer that a business has collected.\n\nRequest that a business that sells a consumer's personal data, not sell the consumer's personal data.\n\nIf you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.\n\nGDPR Data Protection Rights\nWe would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:\n\nThe right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.\n\nThe right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.\n\nThe right to erasure – You have the right to request that we erase your personal data, under certain conditions.\n\nThe right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.\n\nThe right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.\n\nThe right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.\n\nIf you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.\n\nChildren's Information\nAnother part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.\n\nsitename does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."}}},l=c,d=(o("31f2"),o("2877")),u=Object(d["a"])(l,a,i,!1,null,null,null),h=u.exports,f={name:"App",components:{HelloWorld:h}},p=f,y=(o("5c0b"),Object(d["a"])(p,s,r,!1,null,null,null)),m=y.exports,b=o("cf2b"),v=o.n(b),g=o("f206"),w=o.n(g),k=o("a18c"),C=o.n(k);n["a"].config.productionTip=!1,n["a"].config.performance=!0,n["a"].use(v.a),n["a"].use(w.a),n["a"].use(C.a),new n["a"]({render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("9c0c"),s=o.n(n);s.a},"9c0c":function(e,t,o){},ebce:function(e,t,o){}});
//# sourceMappingURL=app-legacy.e11d7287.js.map