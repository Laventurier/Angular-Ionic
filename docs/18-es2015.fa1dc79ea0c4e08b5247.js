(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{swfE:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class u{}var i=t("pMnS"),s=t("MKJQ"),o=t("sZkV"),r=t("iInd"),c=t("SVse"),h=t("s7LF"),a=t("mrSG"),b=t("7o/Q"),d=t("quSY");class p extends d.a{constructor(l,n){super()}schedule(l,n=0){return this}}class g extends p{constructor(l,n){super(l,n),this.scheduler=l,this.work=n,this.pending=!1}schedule(l,n=0){if(this.closed)return this;this.state=l;const t=this.id,e=this.scheduler;return null!=t&&(this.id=this.recycleAsyncId(e,t,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(e,this.id,n),this}requestAsyncId(l,n,t=0){return setInterval(l.flush.bind(l,this),t)}recycleAsyncId(l,n,t=0){if(null!==t&&this.delay===t&&!1===this.pending)return n;clearInterval(n)}execute(l,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const t=this._execute(l,n);if(t)return t;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(l,n){let t=!1,e=void 0;try{this.work(l)}catch(u){t=!0,e=!!u&&u||new Error(u)}if(t)return this.unsubscribe(),e}_unsubscribe(){const l=this.id,n=this.scheduler,t=n.actions,e=t.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==e&&t.splice(e,1),null!=l&&(this.id=this.recycleAsyncId(n,l,null)),this.delay=null}}let f=(()=>{class l{constructor(n,t=l.now){this.SchedulerAction=n,this.now=t}schedule(l,n=0,t){return new this.SchedulerAction(this,l).schedule(t,n)}}return l.now=()=>Date.now(),l})();class k extends f{constructor(l,n=f.now){super(l,()=>k.delegate&&k.delegate!==this?k.delegate.now():n()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(l,n=0,t){return k.delegate&&k.delegate!==this?k.delegate.schedule(l,n,t):super.schedule(l,n,t)}flush(l){const{actions:n}=this;if(this.active)return void n.push(l);let t;this.active=!0;do{if(t=l.execute(l.state,l.delay))break}while(l=n.shift());if(this.active=!1,t){for(;l=n.shift();)l.unsubscribe();throw t}}}const x=new k(g);class m{constructor(l,n){this.dueTime=l,this.scheduler=n}call(l,n){return n.subscribe(new v(l,this.dueTime,this.scheduler))}}class v extends b.a{constructor(l,n,t){super(l),this.dueTime=n,this.scheduler=t,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(l){this.clearDebounce(),this.lastValue=l,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(z,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:l}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(l)}}clearDebounce(){const l=this.debouncedSubscription;null!==l&&(this.remove(l),l.unsubscribe(),this.debouncedSubscription=null)}}function z(l){l.debouncedNext()}var y=t("ShsW");class C{constructor(l,n,t){this.service=l,this.loadingController=n,this.alertController=t,this.query="",this.repos=[]}ngOnInit(){this.initNickControl()}initNickControl(){this.repo=new h.b,this.repo.valueChanges.pipe(function(l,n=x){return t=>t.lift(new m(l,n))}(50)).subscribe(l=>this.service.getRepositories(l))}presentLoading(){this.loadingController.create({message:"Please wait..."}).then(l=>{l.present()})}emptyData(){return a.a(this,void 0,void 0,(function*(){const l=yield this.alertController.create({header:"Validation Error!",message:"Search input is empty",buttons:["OK"]});yield l.present()}))}getRepositories(l){l?l&&l===this.query||(this.query=l,this.presentLoading(),this.service.getRepositories(l).subscribe(l=>{this.repos=l.items}).add(()=>{this.loadingController.dismiss()})):this.emptyData()}searchRepos(){this.getRepositories(this.repo.value?this.repo.value:"")}}var w=e.nb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]],data:{}});function B(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),e.pb(1,0,null,null,9,"ion-item",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==e.Bb(l,3).onClick()&&u),"click"===n&&(u=!1!==e.Bb(l,4).onClick(t)&&u),u}),s.z,s.j)),e.ob(2,49152,null,0,o.F,[e.h,e.k,e.x],null,null),e.ob(3,16384,null,0,r.n,[r.m,r.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.ob(4,737280,null,0,o.Gb,[c.g,o.Db,e.k,r.m,[2,r.n]],null,null),(l()(),e.pb(5,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,s.r,s.b)),e.ob(6,49152,null,0,o.e,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(8,0,null,0,2,"ion-label",[],null,null,null,s.A,s.k)),e.ob(9,49152,null,0,o.L,[e.h,e.k,e.x],null,null),(l()(),e.Fb(10,0,["",""]))],(function(l,n){l(n,3,0,e.tb(1,"/details/",n.context.$implicit.id,"")),l(n,4,0)}),(function(l,n){l(n,7,0,n.context.$implicit.owner.avatar_url),l(n,10,0,n.context.$implicit.full_name)}))}function _(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,s.x,s.h)),e.ob(1,49152,null,0,o.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,s.F,s.p)),e.ob(3,49152,null,0,o.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,s.E,s.o)),e.ob(5,49152,null,0,o.vb,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Repository list"])),(l()(),e.pb(7,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.t,s.d)),e.ob(8,49152,null,0,o.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,1,"ion-menu-button",[["autoHide","false"]],null,null,null,s.B,s.m)),e.ob(10,49152,null,0,o.P,[e.h,e.k,e.x],{autoHide:[0,"autoHide"]},null),(l()(),e.pb(11,0,null,null,16,"ion-card",[],null,null,null,s.u,s.e)),e.ob(12,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,11,"ion-item",[],null,null,null,s.z,s.j)),e.ob(14,49152,null,0,o.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,s.A,s.k)),e.ob(16,49152,null,0,o.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Fb(-1,0,["Repo name"])),(l()(),e.pb(18,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0;return"ionBlur"===n&&(u=!1!==e.Bb(l,19)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==e.Bb(l,19)._handleInputEvent(t.target)&&u),u}),s.y,s.i)),e.ob(19,16384,null,0,o.Hb,[e.k],null,null),e.Cb(1024,null,h.e,(function(l){return[l]}),[o.Hb]),e.ob(21,540672,null,0,h.c,[[8,null],[8,null],[6,h.e],[2,h.k]],{form:[0,"form"]},null),e.Cb(2048,null,h.f,null,[h.c]),e.ob(23,16384,null,0,h.g,[[4,h.f]],null,null),e.ob(24,49152,null,0,o.E,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.pb(25,0,null,0,2,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.searchRepos()&&e),e}),s.s,s.c)),e.ob(26,49152,null,0,o.i,[e.h,e.k,e.x],null,null),(l()(),e.Fb(-1,0,["Search"])),(l()(),e.pb(28,0,null,null,7,"ion-content",[],null,null,null,s.w,s.g)),e.ob(29,49152,null,0,o.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(30,0,null,0,5,"ion-row",[],null,null,null,s.D,s.n)),e.ob(31,49152,null,0,o.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(32,0,null,0,3,"ion-col",[],null,null,null,s.v,s.f)),e.ob(33,49152,null,0,o.r,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,B)),e.ob(35,278528,null,0,c.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,10,0,"false"),l(n,16,0,"floating"),l(n,21,0,t.repo),l(n,24,0,"text"),l(n,35,0,t.repos)}),(function(l,n){l(n,18,0,e.Bb(n,23).ngClassUntouched,e.Bb(n,23).ngClassTouched,e.Bb(n,23).ngClassPristine,e.Bb(n,23).ngClassDirty,e.Bb(n,23).ngClassValid,e.Bb(n,23).ngClassInvalid,e.Bb(n,23).ngClassPending)}))}function F(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"ng-component",[],null,null,null,_,w)),e.ob(1,114688,null,0,C,[y.a,o.Bb,o.a],null,null)],(function(l,n){l(n,1,0)}),null)}var S=e.lb("ng-component",C,F,{},{},[]),O=t("IheW");class I{}t.d(n,"ReposModuleNgFactory",(function(){return V}));var V=e.mb(u,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,S]],[3,e.j],e.v]),e.zb(4608,c.k,c.j,[e.s,[2,c.q]]),e.zb(4608,h.j,h.j,[]),e.zb(4608,O.h,O.n,[c.c,e.z,O.l]),e.zb(4608,O.o,O.o,[O.h,O.m]),e.zb(5120,O.a,(function(l){return[l]}),[O.o]),e.zb(4608,O.k,O.k,[]),e.zb(6144,O.i,null,[O.k]),e.zb(4608,O.g,O.g,[O.i]),e.zb(6144,O.b,null,[O.g]),e.zb(4608,O.f,O.j,[O.b,e.p]),e.zb(4608,O.c,O.c,[O.f]),e.zb(4608,h.a,h.a,[]),e.zb(4608,o.b,o.b,[e.x,e.g]),e.zb(4608,o.Cb,o.Cb,[o.b,e.j,e.p]),e.zb(4608,o.Fb,o.Fb,[o.b,e.j,e.p]),e.zb(4608,y.a,y.a,[O.c]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,h.i,h.i,[]),e.zb(1073742336,h.d,h.d,[]),e.zb(1073742336,O.e,O.e,[]),e.zb(1073742336,O.d,O.d,[]),e.zb(1073742336,h.h,h.h,[]),e.zb(1073742336,o.zb,o.zb,[]),e.zb(1073742336,r.o,r.o,[[2,r.t],[2,r.m]]),e.zb(1073742336,I,I,[]),e.zb(1073742336,u,u,[]),e.zb(256,O.l,"XSRF-TOKEN",[]),e.zb(256,O.m,"X-XSRF-TOKEN",[]),e.zb(1024,r.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);