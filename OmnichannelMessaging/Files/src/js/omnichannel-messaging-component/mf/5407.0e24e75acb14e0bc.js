(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[5407,2298],{25407:(O,v,y)=>{y.r(v),y.d(v,{AnimationLoader:()=>o,BaseDirective:()=>s,LottieCacheModule:()=>c,LottieComponent:()=>p,LottieDirective:()=>u,LottieModule:()=>d,LottieTransferState:()=>f,transformAnimationFilenameToKey:()=>C});var t=y(94450),g=y(31134),l=y(21322),r=y(27049),A=y(54514);const L=["container"],I=new t.InjectionToken("LottieOptions");function M(i,e){const n=i();return(n instanceof Promise?(0,l.from)(n).pipe((0,r.map)(h=>h.default||h)):(0,l.of)(n)).pipe((0,r.tap)(h=>h.useWebWorker(e)),(0,r.shareReplay)({bufferSize:1,refCount:!0}))}class o{constructor(e,n){this.ngZone=e,this.options=n,this.player$=M(this.options.player,this.options.useWebWorker).pipe((0,r.observeOn)(l.animationFrameScheduler))}loadAnimation(e){return this.player$.pipe((0,r.map)(n=>this.createAnimationItem(n,e)))}resolveOptions(e,n){return Object.assign({container:n,renderer:"svg",loop:!0,autoplay:!0},e)}createAnimationItem(e,n){return this.ngZone.runOutsideAngular(()=>e.loadAnimation(n))}}o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275inject(t.NgZone),t.\u0275\u0275inject(I))},o.\u0275prov=t.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(o,[{type:t.Injectable}],function(){return[{type:t.NgZone},{type:void 0,decorators:[{type:t.Inject,args:[I]}]}]},null)}();class s{constructor(e,n,a){this.ngZone=e,this.platformId=n,this.animationLoader=a,this.options=null,this.containerClass=null,this.styles=null,this.animationCreated=this.getAnimationItem(),this.complete=this.awaitAnimationItemAndStartListening("complete"),this.loopComplete=this.awaitAnimationItemAndStartListening("loopComplete"),this.enterFrame=this.awaitAnimationItemAndStartListening("enterFrame"),this.segmentStart=this.awaitAnimationItemAndStartListening("segmentStart"),this.configReady=this.awaitAnimationItemAndStartListening("config_ready"),this.dataReady=this.awaitAnimationItemAndStartListening("data_ready"),this.domLoaded=this.awaitAnimationItemAndStartListening("DOMLoaded"),this.destroy=this.awaitAnimationItemAndStartListening("destroy"),this.error=this.awaitAnimationItemAndStartListening("error"),this.destroy$=new l.Subject,this.loadAnimation$=new l.Subject,this.animationItem$=new l.BehaviorSubject(null),this.setupLoadAnimationListener()}ngOnDestroy(){this.destroy$.next(),this.destroyAnimation()}loadAnimation(e,n){this.ngZone.runOutsideAngular(()=>this.loadAnimation$.next([e,n]))}getAnimationItem(){return(0,l.defer)(()=>this.animationItem$).pipe((0,r.filter)(e=>e!==null))}awaitAnimationItemAndStartListening(e){return this.getAnimationItem().pipe((0,r.switchMap)(n=>new l.Observable(a=>{this.ngZone.runOutsideAngular(()=>{n.addEventListener(e,h=>{this.ngZone.runOutsideAngular(()=>{a.next(h)})})})})))}setupLoadAnimationListener(){this.loadAnimation$.pipe((0,r.filter)(([n])=>(0,g.isPlatformBrowser)(this.platformId)&&n.options!==void 0)).pipe((0,r.switchMap)(([n,a])=>(this.destroyAnimation(),this.animationLoader.loadAnimation(this.animationLoader.resolveOptions(n.options.currentValue,a)))),(0,r.takeUntil)(this.destroy$)).subscribe(n=>{this.ngZone.run(()=>this.animationItem$.next(n))})}destroyAnimation(){const e=this.animationItem$.getValue();e!==null&&(e.destroy(),this.animationItem$.next(null))}}s.\u0275fac=function(e){return new(e||s)(t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.PLATFORM_ID),t.\u0275\u0275directiveInject(o))},s.\u0275dir=t.\u0275\u0275defineDirective({type:s,selectors:[["","lottie",""]],inputs:{options:"options",containerClass:"containerClass",styles:"styles"},outputs:{animationCreated:"animationCreated",complete:"complete",loopComplete:"loopComplete",enterFrame:"enterFrame",segmentStart:"segmentStart",configReady:"configReady",dataReady:"dataReady",domLoaded:"domLoaded",destroy:"destroy",error:"error"}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(s,[{type:t.Directive,args:[{selector:"[lottie]"}]}],function(){return[{type:t.NgZone},{type:void 0,decorators:[{type:t.Inject,args:[t.PLATFORM_ID]}]},{type:o}]},{options:[{type:t.Input}],containerClass:[{type:t.Input}],styles:[{type:t.Input}],animationCreated:[{type:t.Output}],complete:[{type:t.Output}],loopComplete:[{type:t.Output}],enterFrame:[{type:t.Output}],segmentStart:[{type:t.Output}],configReady:[{type:t.Output}],dataReady:[{type:t.Output}],domLoaded:[{type:t.Output}],destroy:[{type:t.Output}],error:[{type:t.Output}]})}();class u extends s{constructor(e,n,a,h){super(e,n,h),this.host=a}ngOnChanges(e){super.loadAnimation(e,this.host.nativeElement)}}u.\u0275fac=function(e){return new(e||u)(t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.PLATFORM_ID),t.\u0275\u0275directiveInject(t.ElementRef,2),t.\u0275\u0275directiveInject(o))},u.\u0275dir=t.\u0275\u0275defineDirective({type:u,selectors:[["","lottie",""]],features:[t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(u,[{type:t.Directive,args:[{selector:"[lottie]"}]}],function(){return[{type:t.NgZone},{type:void 0,decorators:[{type:t.Inject,args:[t.PLATFORM_ID]}]},{type:t.ElementRef,decorators:[{type:t.Self}]},{type:o}]},null)}();class p extends s{constructor(e,n,a){super(e,n,a),this.width=null,this.height=null,this.container=null}ngOnChanges(e){super.loadAnimation(e,this.container.nativeElement)}}p.\u0275fac=function(e){return new(e||p)(t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(t.PLATFORM_ID),t.\u0275\u0275directiveInject(o))},p.\u0275cmp=t.\u0275\u0275defineComponent({type:p,selectors:[["ng-lottie"]],viewQuery:function(e,n){if(e&1&&t.\u0275\u0275viewQuery(L,7),e&2){let a;t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(n.container=a.first)}},inputs:{width:"width",height:"height"},features:[t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275NgOnChangesFeature],decls:2,vars:6,consts:[[3,"ngStyle","ngClass"],["container",""]],template:function(e,n){e&1&&t.\u0275\u0275element(0,"div",0,1),e&2&&(t.\u0275\u0275styleProp("width",n.width||"100%")("height",n.height||"100%"),t.\u0275\u0275property("ngStyle",n.styles)("ngClass",n.containerClass))},dependencies:[g.NgStyle,g.NgClass],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.Component,args:[{selector:"ng-lottie",template:`
    <div
      #container
      [style.width]="width || '100%'"
      [style.height]="height || '100%'"
      [ngStyle]="styles"
      [ngClass]="containerClass"
    ></div>
  `,changeDetection:t.ChangeDetectionStrategy.OnPush}]}],function(){return[{type:t.NgZone},{type:void 0,decorators:[{type:t.Inject,args:[t.PLATFORM_ID]}]},{type:o}]},{width:[{type:t.Input}],height:[{type:t.Input}],container:[{type:t.ViewChild,args:["container",{static:!0}]}]})}();class d{static forRoot(e){return{ngModule:d,providers:[o,{provide:I,useValue:e}]}}}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.\u0275\u0275defineNgModule({type:d}),d.\u0275inj=t.\u0275\u0275defineInjector({imports:[[g.CommonModule]]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(d,[{type:t.NgModule,args:[{imports:[g.CommonModule],declarations:[s,u,p],exports:[s,u,p]}]}],null,null)}();class m extends o{constructor(){super(...arguments),this.cache=new Map}ngOnDestroy(){this.cache.clear()}loadAnimation(e){return this.player$.pipe((0,r.map)(n=>{const a=this.createAnimationItem(n,this.transformOptions(e));return this.awaitConfigAndCache(e,a),a}))}awaitConfigAndCache(e,n){if(this.isAnimationConfigWithPath(e)){if(this.cache.has(e.path))return;n.addEventListener("config_ready",()=>{this.cache.set(e.path,JSON.stringify(n.animationData))})}}transformOptions(e){return this.isAnimationConfigWithPath(e)&&this.cache.has(e.path)?{...e,path:void 0,animationData:JSON.parse(this.cache.get(e.path))}:e}isAnimationConfigWithPath(e){return typeof e.path=="string"}}m.\u0275fac=function(){let i;return function(n){return(i||(i=t.\u0275\u0275getInheritedFactory(m)))(n||m)}}(),m.\u0275prov=t.\u0275\u0275defineInjectable({token:m,factory:m.\u0275fac}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(m,[{type:t.Injectable}],null,null)}();class c{static forRoot(){return{ngModule:c,providers:[{provide:o,useClass:m}]}}}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=t.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(c,[{type:t.NgModule}],null,null)}();function C(i){const[e]=i.split(".json");return`animation-${e}`}class f{constructor(e){this.transferState=e}get(e){const n=C(e),a=(0,A.makeStateKey)(n);return this.transferState.get(a,null)}}f.\u0275fac=function(e){return new(e||f)(t.\u0275\u0275inject(A.TransferState))},f.\u0275prov=t.\u0275\u0275defineInjectable({token:f,factory:f.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(f,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:A.TransferState}]},null)}()}}]);
