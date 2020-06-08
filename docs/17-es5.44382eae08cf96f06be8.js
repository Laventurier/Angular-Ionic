function _defineProperties(n,l){for(var e=0;e<l.length;e++){var u=l[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"44oX":function(n,l,e){"use strict";e.r(l);var u=e("8Y7J"),o=function n(){_classCallCheck(this,n)},t=e("pMnS"),i=e("MKJQ"),r=e("sZkV"),a=e("SVse"),b=e("mrSG"),s=e("ShsW"),c=function(){function n(l,e,u,o){_classCallCheck(this,n),this.service=l,this.loadingController=e,this.active=u,this.alertController=o}return _createClass(n,[{key:"ngOnInit",value:function(){this.getSingleRepo()}},{key:"getSingleRepo",value:function(){var n=this;this.presentLoading("Repository is loading"),this.service.getSingleRepo(this.active.snapshot.params.id).subscribe((function(l){n.repo=l}),(function(){n.exceededLimit()})).add((function(){n.loadingController.dismiss().then((function(n){console.log("Loading dismissed!",n)})).catch((function(n){console.log("error",n)}))}))}},{key:"exceededLimit",value:function(){return b.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Oops you exceeded your IP limit!",message:"Wait 1 hour and try again!",buttons:["OK"]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"presentLoading",value:function(n){return this.loadingController.create({message:n}).then((function(n){n.dismiss()}))}}]),n}(),p=e("iInd"),f=u.nb({encapsulation:0,styles:[[""]],data:{}});function h(n){return u.Gb(0,[(n()(),u.pb(0,0,null,null,2,"ion-title",[],null,null,null,i.E,i.o)),u.ob(1,49152,null,0,r.vb,[u.h,u.k,u.x],null,null),(n()(),u.Fb(2,0,["",""]))],null,(function(n,l){n(l,2,0,l.component.repo.full_name)}))}function d(n){return u.Gb(0,[(n()(),u.pb(0,0,null,null,5,"ion-avatar",[],null,null,null,i.r,i.b)),u.ob(1,49152,null,0,r.e,[u.h,u.k,u.x],null,null),(n()(),u.pb(2,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),u.pb(3,0,null,0,2,"ion-label",[],null,null,null,i.A,i.k)),u.ob(4,49152,null,0,r.L,[u.h,u.k,u.x],null,null),(n()(),u.Fb(5,0,["",""]))],null,(function(n,l){var e=l.component;n(l,2,0,e.repo.owner.avatar_url),n(l,5,0,e.repo.owner.login)}))}function g(n){return u.Gb(0,[(n()(),u.pb(0,0,null,null,12,"div",[],null,null,null,null,null)),(n()(),u.pb(1,0,null,null,5,"ion-header",[],null,null,null,i.x,i.h)),u.ob(2,49152,null,0,r.z,[u.h,u.k,u.x],null,null),(n()(),u.pb(3,0,null,0,3,"ion-toolbar",[],null,null,null,i.F,i.p)),u.ob(4,49152,null,0,r.xb,[u.h,u.k,u.x],null,null),(n()(),u.eb(16777216,null,0,1,null,h)),u.ob(6,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.pb(7,0,null,null,5,"ion-content",[],null,null,null,i.w,i.g)),u.ob(8,49152,null,0,r.s,[u.h,u.k,u.x],{fullscreen:[0,"fullscreen"]},null),(n()(),u.pb(9,0,null,0,3,"ion-item",[],null,null,null,i.z,i.j)),u.ob(10,49152,null,0,r.F,[u.h,u.k,u.x],null,null),(n()(),u.eb(16777216,null,0,1,null,d)),u.ob(12,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,6,0,e.repo&&e.repo.full_name),n(l,8,0,!0),n(l,12,0,e.repo)}),null)}var z=u.lb("ng-component",c,(function(n){return u.Gb(0,[(n()(),u.pb(0,0,null,null,1,"ng-component",[],null,null,null,g,f)),u.ob(1,114688,null,0,c,[s.a,r.Bb,p.a,r.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),m=e("IheW"),k=e("s7LF"),v=function n(){_classCallCheck(this,n)};e.d(l,"RepoViewPageModuleNgFactory",(function(){return C}));var C=u.mb(o,[],(function(n){return u.yb([u.zb(512,u.j,u.X,[[8,[t.a,z]],[3,u.j],u.v]),u.zb(4608,a.k,a.j,[u.s,[2,a.q]]),u.zb(4608,m.h,m.n,[a.c,u.z,m.l]),u.zb(4608,m.o,m.o,[m.h,m.m]),u.zb(5120,m.a,(function(n){return[n]}),[m.o]),u.zb(4608,m.k,m.k,[]),u.zb(6144,m.i,null,[m.k]),u.zb(4608,m.g,m.g,[m.i]),u.zb(6144,m.b,null,[m.g]),u.zb(4608,m.f,m.j,[m.b,u.p]),u.zb(4608,m.c,m.c,[m.f]),u.zb(4608,k.j,k.j,[]),u.zb(4608,r.b,r.b,[u.x,u.g]),u.zb(4608,r.Cb,r.Cb,[r.b,u.j,u.p]),u.zb(4608,r.Fb,r.Fb,[r.b,u.j,u.p]),u.zb(4608,s.a,s.a,[m.c]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,m.e,m.e,[]),u.zb(1073742336,m.d,m.d,[]),u.zb(1073742336,k.i,k.i,[]),u.zb(1073742336,k.d,k.d,[]),u.zb(1073742336,r.zb,r.zb,[]),u.zb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),u.zb(1073742336,v,v,[]),u.zb(1073742336,o,o,[]),u.zb(256,m.l,"XSRF-TOKEN",[]),u.zb(256,m.m,"X-XSRF-TOKEN",[]),u.zb(1024,p.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);