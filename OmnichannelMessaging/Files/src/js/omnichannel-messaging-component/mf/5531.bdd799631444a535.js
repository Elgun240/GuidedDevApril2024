(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[5531],{35531:(U,T,m)=>{m.r(T),m.d(T,{CdkFixedSizeVirtualScroll:()=>S,CdkScrollable:()=>_,CdkScrollableModule:()=>v,CdkVirtualForOf:()=>E,CdkVirtualScrollViewport:()=>p,CdkVirtualScrollable:()=>w,CdkVirtualScrollableElement:()=>C,CdkVirtualScrollableWindow:()=>y,DEFAULT_RESIZE_TIME:()=>P,DEFAULT_SCROLL_TIME:()=>F,FixedSizeVirtualScrollStrategy:()=>M,ScrollDispatcher:()=>h,ScrollingModule:()=>O,VIRTUAL_SCROLLABLE:()=>b,VIRTUAL_SCROLL_STRATEGY:()=>x,ViewportRuler:()=>k,_fixedSizeVirtualScrollStrategyFactory:()=>z});var V=m(3127),t=m(94450),c=m(21322),u=m(27049),g=m(67202),I=m(31134),f=m(99852),R=m(60317);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const L=["contentWrapper"],j=["*"],x=new t.InjectionToken("VIRTUAL_SCROLL_STRATEGY");/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class M{constructor(e,i,r){this._scrolledIndexChange=new c.Subject,this.scrolledIndexChange=this._scrolledIndexChange.pipe((0,u.distinctUntilChanged)()),this._viewport=null,this._itemSize=e,this._minBufferPx=i,this._maxBufferPx=r}attach(e){this._viewport=e,this._updateTotalContentSize(),this._updateRenderedRange()}detach(){this._scrolledIndexChange.complete(),this._viewport=null}updateItemAndBufferSize(e,i,r){if(r<i&&(typeof ngDevMode>"u"||ngDevMode))throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");this._itemSize=e,this._minBufferPx=i,this._maxBufferPx=r,this._updateTotalContentSize(),this._updateRenderedRange()}onContentScrolled(){this._updateRenderedRange()}onDataLengthChanged(){this._updateTotalContentSize(),this._updateRenderedRange()}onContentRendered(){}onRenderedOffsetChanged(){}scrollToIndex(e,i){this._viewport&&this._viewport.scrollToOffset(e*this._itemSize,i)}_updateTotalContentSize(){!this._viewport||this._viewport.setTotalContentSize(this._viewport.getDataLength()*this._itemSize)}_updateRenderedRange(){if(!this._viewport)return;const e=this._viewport.getRenderedRange(),i={start:e.start,end:e.end},r=this._viewport.getViewportSize(),n=this._viewport.getDataLength();let l=this._viewport.measureScrollOffset(),s=this._itemSize>0?l/this._itemSize:0;if(i.end>n){const d=Math.ceil(r/this._itemSize),D=Math.max(0,Math.min(s,n-d));s!=D&&(s=D,l=D*this._itemSize,i.start=Math.floor(s)),i.end=Math.max(0,Math.min(n,i.start+d))}const a=l-i.start*this._itemSize;if(a<this._minBufferPx&&i.start!=0){const d=Math.ceil((this._maxBufferPx-a)/this._itemSize);i.start=Math.max(0,i.start-d),i.end=Math.min(n,Math.ceil(s+(r+this._minBufferPx)/this._itemSize))}else{const d=i.end*this._itemSize-(l+r);if(d<this._minBufferPx&&i.end!=n){const D=Math.ceil((this._maxBufferPx-d)/this._itemSize);D>0&&(i.end=Math.min(n,i.end+D),i.start=Math.max(0,Math.floor(s-this._minBufferPx/this._itemSize)))}}this._viewport.setRenderedRange(i),this._viewport.setRenderedContentOffset(this._itemSize*i.start),this._scrolledIndexChange.next(Math.floor(s))}}function z(o){return o._scrollStrategy}class S{constructor(){this._itemSize=20,this._minBufferPx=100,this._maxBufferPx=200,this._scrollStrategy=new M(this.itemSize,this.minBufferPx,this.maxBufferPx)}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=(0,V.coerceNumberProperty)(e)}get minBufferPx(){return this._minBufferPx}set minBufferPx(e){this._minBufferPx=(0,V.coerceNumberProperty)(e)}get maxBufferPx(){return this._maxBufferPx}set maxBufferPx(e){this._maxBufferPx=(0,V.coerceNumberProperty)(e)}ngOnChanges(){this._scrollStrategy.updateItemAndBufferSize(this.itemSize,this.minBufferPx,this.maxBufferPx)}}S.\u0275fac=function(e){return new(e||S)},S.\u0275dir=t.\u0275\u0275defineDirective({type:S,selectors:[["cdk-virtual-scroll-viewport","itemSize",""]],inputs:{itemSize:"itemSize",minBufferPx:"minBufferPx",maxBufferPx:"maxBufferPx"},standalone:!0,features:[t.\u0275\u0275ProvidersFeature([{provide:x,useFactory:z,deps:[(0,t.forwardRef)(()=>S)]}]),t.\u0275\u0275NgOnChangesFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(S,[{type:t.Directive,args:[{selector:"cdk-virtual-scroll-viewport[itemSize]",standalone:!0,providers:[{provide:x,useFactory:z,deps:[(0,t.forwardRef)(()=>S)]}]}]}],null,{itemSize:[{type:t.Input}],minBufferPx:[{type:t.Input}],maxBufferPx:[{type:t.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const F=20;class h{constructor(e,i,r){this._ngZone=e,this._platform=i,this._scrolled=new c.Subject,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=F){return this._platform.isBrowser?new c.Observable(i=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe((0,u.auditTime)(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,c.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe((0,u.filter)(n=>!n||r.indexOf(n)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((r,n)=>{this._scrollableContainsElement(n,e)&&i.push(n)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let r=(0,V.coerceElement)(i),n=e.getElementRef().nativeElement;do if(r==n)return!0;while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,c.fromEvent)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}h.\u0275fac=function(e){return new(e||h)(t.\u0275\u0275inject(t.NgZone),t.\u0275\u0275inject(g.Platform),t.\u0275\u0275inject(I.DOCUMENT,8))},h.\u0275prov=t.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(h,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:t.NgZone},{type:g.Platform},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[I.DOCUMENT]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class _{constructor(e,i,r,n){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=r,this.dir=n,this._destroyed=new c.Subject,this._elementScrolled=new c.Observable(l=>this.ngZone.runOutsideAngular(()=>(0,c.fromEvent)(this.elementRef.nativeElement,"scroll").pipe((0,u.takeUntil)(this._destroyed)).subscribe(l)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){const i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&(0,g.getRtlScrollAxisType)()!=0?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),(0,g.getRtlScrollAxisType)()==2?e.left=e.right:(0,g.getRtlScrollAxisType)()==1&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){const i=this.elementRef.nativeElement;(0,g.supportsScrollBehavior)()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){const i="left",r="right",n=this.elementRef.nativeElement;if(e=="top")return n.scrollTop;if(e=="bottom")return n.scrollHeight-n.clientHeight-n.scrollTop;const l=this.dir&&this.dir.value=="rtl";return e=="start"?e=l?r:i:e=="end"&&(e=l?i:r),l&&(0,g.getRtlScrollAxisType)()==2?e==i?n.scrollWidth-n.clientWidth-n.scrollLeft:n.scrollLeft:l&&(0,g.getRtlScrollAxisType)()==1?e==i?n.scrollLeft+n.scrollWidth-n.clientWidth:-n.scrollLeft:e==i?n.scrollLeft:n.scrollWidth-n.clientWidth-n.scrollLeft}}_.\u0275fac=function(e){return new(e||_)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(h),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(f.Directionality,8))},_.\u0275dir=t.\u0275\u0275defineDirective({type:_,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(_,[{type:t.Directive,args:[{selector:"[cdk-scrollable], [cdkScrollable]",standalone:!0}]}],function(){return[{type:t.ElementRef},{type:h},{type:t.NgZone},{type:f.Directionality,decorators:[{type:t.Optional}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const P=20;class k{constructor(e,i,r){this._platform=e,this._change=new c.Subject,this._changeListener=n=>{this._change.next(n)},this._document=r,i.runOutsideAngular(()=>{if(e.isBrowser){const n=this._getWindow();n.addEventListener("resize",this._changeListener),n.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),r=e.documentElement,n=r.getBoundingClientRect(),l=-n.top||e.body.scrollTop||i.scrollY||r.scrollTop||0,s=-n.left||e.body.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:l,left:s}}change(e=P){return e>0?this._change.pipe((0,u.auditTime)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}k.\u0275fac=function(e){return new(e||k)(t.\u0275\u0275inject(g.Platform),t.\u0275\u0275inject(t.NgZone),t.\u0275\u0275inject(I.DOCUMENT,8))},k.\u0275prov=t.\u0275\u0275defineInjectable({token:k,factory:k.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(k,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:g.Platform},{type:t.NgZone},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[I.DOCUMENT]}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const b=new t.InjectionToken("VIRTUAL_SCROLLABLE");class w extends _{constructor(e,i,r,n){super(e,i,r,n)}measureViewportSize(e){const i=this.elementRef.nativeElement;return e==="horizontal"?i.clientWidth:i.clientHeight}}w.\u0275fac=function(e){return new(e||w)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(h),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(f.Directionality,8))},w.\u0275dir=t.\u0275\u0275defineDirective({type:w,features:[t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(w,[{type:t.Directive}],function(){return[{type:t.ElementRef},{type:h},{type:t.NgZone},{type:f.Directionality,decorators:[{type:t.Optional}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function A(o,e){return o.start==e.start&&o.end==e.end}const W=typeof requestAnimationFrame<"u"?c.animationFrameScheduler:c.asapScheduler;class p extends w{get orientation(){return this._orientation}set orientation(e){this._orientation!==e&&(this._orientation=e,this._calculateSpacerSize())}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=(0,V.coerceBooleanProperty)(e)}constructor(e,i,r,n,l,s,a,d){if(super(e,s,r,l),this.elementRef=e,this._changeDetectorRef=i,this._scrollStrategy=n,this.scrollable=d,this._platform=(0,t.inject)(g.Platform),this._detachedSubject=new c.Subject,this._renderedRangeSubject=new c.Subject,this._orientation="vertical",this._appendOnly=!1,this.scrolledIndexChange=new c.Observable(D=>this._scrollStrategy.scrolledIndexChange.subscribe(N=>Promise.resolve().then(()=>this.ngZone.run(()=>D.next(N))))),this.renderedRangeStream=this._renderedRangeSubject,this._totalContentSize=0,this._totalContentWidth="",this._totalContentHeight="",this._renderedRange={start:0,end:0},this._dataLength=0,this._viewportSize=0,this._renderedContentOffset=0,this._renderedContentOffsetNeedsRewrite=!1,this._isChangeDetectionPending=!1,this._runAfterChangeDetection=[],this._viewportChanges=c.Subscription.EMPTY,!n&&(typeof ngDevMode>"u"||ngDevMode))throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');this._viewportChanges=a.change().subscribe(()=>{this.checkViewportSize()}),this.scrollable||(this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable"),this.scrollable=this)}ngOnInit(){!this._platform.isBrowser||(this.scrollable===this&&super.ngOnInit(),this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._measureViewportSize(),this._scrollStrategy.attach(this),this.scrollable.elementScrolled().pipe((0,u.startWith)(null),(0,u.auditTime)(0,W)).subscribe(()=>this._scrollStrategy.onContentScrolled()),this._markChangeDetectionNeeded()})))}ngOnDestroy(){this.detach(),this._scrollStrategy.detach(),this._renderedRangeSubject.complete(),this._detachedSubject.complete(),this._viewportChanges.unsubscribe(),super.ngOnDestroy()}attach(e){if(this._forOf&&(typeof ngDevMode>"u"||ngDevMode))throw Error("CdkVirtualScrollViewport is already attached.");this.ngZone.runOutsideAngular(()=>{this._forOf=e,this._forOf.dataStream.pipe((0,u.takeUntil)(this._detachedSubject)).subscribe(i=>{const r=i.length;r!==this._dataLength&&(this._dataLength=r,this._scrollStrategy.onDataLengthChanged()),this._doChangeDetection()})})}detach(){this._forOf=null,this._detachedSubject.next()}getDataLength(){return this._dataLength}getViewportSize(){return this._viewportSize}getRenderedRange(){return this._renderedRange}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}setTotalContentSize(e){this._totalContentSize!==e&&(this._totalContentSize=e,this._calculateSpacerSize(),this._markChangeDetectionNeeded())}setRenderedRange(e){A(this._renderedRange,e)||(this.appendOnly&&(e={start:0,end:Math.max(this._renderedRange.end,e.end)}),this._renderedRangeSubject.next(this._renderedRange=e),this._markChangeDetectionNeeded(()=>this._scrollStrategy.onContentRendered()))}getOffsetToRenderedContentStart(){return this._renderedContentOffsetNeedsRewrite?null:this._renderedContentOffset}setRenderedContentOffset(e,i="to-start"){e=this.appendOnly&&i==="to-start"?0:e;const r=this.dir&&this.dir.value=="rtl",n=this.orientation=="horizontal",l=n?"X":"Y";let a=`translate${l}(${Number((n&&r?-1:1)*e)}px)`;this._renderedContentOffset=e,i==="to-end"&&(a+=` translate${l}(-100%)`,this._renderedContentOffsetNeedsRewrite=!0),this._renderedContentTransform!=a&&(this._renderedContentTransform=a,this._markChangeDetectionNeeded(()=>{this._renderedContentOffsetNeedsRewrite?(this._renderedContentOffset-=this.measureRenderedContentSize(),this._renderedContentOffsetNeedsRewrite=!1,this.setRenderedContentOffset(this._renderedContentOffset)):this._scrollStrategy.onRenderedOffsetChanged()}))}scrollToOffset(e,i="auto"){const r={behavior:i};this.orientation==="horizontal"?r.start=e:r.top=e,this.scrollable.scrollTo(r)}scrollToIndex(e,i="auto"){this._scrollStrategy.scrollToIndex(e,i)}measureScrollOffset(e){let i;return this.scrollable==this?i=r=>super.measureScrollOffset(r):i=r=>this.scrollable.measureScrollOffset(r),Math.max(0,i(e??(this.orientation==="horizontal"?"start":"top"))-this.measureViewportOffset())}measureViewportOffset(e){let i;const r="left",n="right",l=this.dir?.value=="rtl";e=="start"?i=l?n:r:e=="end"?i=l?r:n:e?i=e:i=this.orientation==="horizontal"?"left":"top";const s=this.scrollable.measureBoundingClientRectWithScrollOffset(i);return this.elementRef.nativeElement.getBoundingClientRect()[i]-s}measureRenderedContentSize(){const e=this._contentWrapper.nativeElement;return this.orientation==="horizontal"?e.offsetWidth:e.offsetHeight}measureRangeSize(e){return this._forOf?this._forOf.measureRangeSize(e,this.orientation):0}checkViewportSize(){this._measureViewportSize(),this._scrollStrategy.onDataLengthChanged()}_measureViewportSize(){this._viewportSize=this.scrollable.measureViewportSize(this.orientation)}_markChangeDetectionNeeded(e){e&&this._runAfterChangeDetection.push(e),this._isChangeDetectionPending||(this._isChangeDetectionPending=!0,this.ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>{this._doChangeDetection()})))}_doChangeDetection(){this._isChangeDetectionPending=!1,this._contentWrapper.nativeElement.style.transform=this._renderedContentTransform,this.ngZone.run(()=>this._changeDetectorRef.markForCheck());const e=this._runAfterChangeDetection;this._runAfterChangeDetection=[];for(const i of e)i()}_calculateSpacerSize(){this._totalContentHeight=this.orientation==="horizontal"?"":`${this._totalContentSize}px`,this._totalContentWidth=this.orientation==="horizontal"?`${this._totalContentSize}px`:""}}p.\u0275fac=function(e){return new(e||p)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(x,8),t.\u0275\u0275directiveInject(f.Directionality,8),t.\u0275\u0275directiveInject(h),t.\u0275\u0275directiveInject(k),t.\u0275\u0275directiveInject(b,8))},p.\u0275cmp=t.\u0275\u0275defineComponent({type:p,selectors:[["cdk-virtual-scroll-viewport"]],viewQuery:function(e,i){if(e&1&&t.\u0275\u0275viewQuery(L,7),e&2){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(i._contentWrapper=r.first)}},hostAttrs:[1,"cdk-virtual-scroll-viewport"],hostVars:4,hostBindings:function(e,i){e&2&&t.\u0275\u0275classProp("cdk-virtual-scroll-orientation-horizontal",i.orientation==="horizontal")("cdk-virtual-scroll-orientation-vertical",i.orientation!=="horizontal")},inputs:{orientation:"orientation",appendOnly:"appendOnly"},outputs:{scrolledIndexChange:"scrolledIndexChange"},standalone:!0,features:[t.\u0275\u0275ProvidersFeature([{provide:_,useFactory:(o,e)=>o||e,deps:[[new t.Optional,new t.Inject(b)],p]}]),t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275StandaloneFeature],ngContentSelectors:j,decls:4,vars:4,consts:[[1,"cdk-virtual-scroll-content-wrapper"],["contentWrapper",""],[1,"cdk-virtual-scroll-spacer"]],template:function(e,i){e&1&&(t.\u0275\u0275projectionDef(),t.\u0275\u0275elementStart(0,"div",0,1),t.\u0275\u0275projection(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(3,"div",2)),e&2&&(t.\u0275\u0275advance(3),t.\u0275\u0275styleProp("width",i._totalContentWidth)("height",i._totalContentHeight))},styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.Component,args:[{selector:"cdk-virtual-scroll-viewport",host:{class:"cdk-virtual-scroll-viewport","[class.cdk-virtual-scroll-orientation-horizontal]":'orientation === "horizontal"',"[class.cdk-virtual-scroll-orientation-vertical]":'orientation !== "horizontal"'},encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,standalone:!0,providers:[{provide:_,useFactory:(o,e)=>o||e,deps:[[new t.Optional,new t.Inject(b)],p]}],template:`<!--
  Wrap the rendered content in an element that will be used to offset it based on the scroll
  position.
-->
<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">
  <ng-content></ng-content>
</div>
<!--
  Spacer used to force the scrolling container to the correct size for the *total* number of items
  so that the scrollbar captures the size of the entire data set.
-->
<div class="cdk-virtual-scroll-spacer"
     [style.width]="_totalContentWidth" [style.height]="_totalContentHeight"></div>
`,styles:["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}"]}]}],function(){return[{type:t.ElementRef},{type:t.ChangeDetectorRef},{type:t.NgZone},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[x]}]},{type:f.Directionality,decorators:[{type:t.Optional}]},{type:h},{type:k},{type:w,decorators:[{type:t.Optional},{type:t.Inject,args:[b]}]}]},{orientation:[{type:t.Input}],appendOnly:[{type:t.Input}],scrolledIndexChange:[{type:t.Output}],_contentWrapper:[{type:t.ViewChild,args:["contentWrapper",{static:!0}]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function B(o,e,i){const r=i;if(!r.getBoundingClientRect)return 0;const n=r.getBoundingClientRect();return o==="horizontal"?e==="start"?n.left:n.right:e==="start"?n.top:n.bottom}class E{get cdkVirtualForOf(){return this._cdkVirtualForOf}set cdkVirtualForOf(e){this._cdkVirtualForOf=e,(0,R.isDataSource)(e)?this._dataSourceChanges.next(e):this._dataSourceChanges.next(new R.ArrayDataSource((0,c.isObservable)(e)?e:Array.from(e||[])))}get cdkVirtualForTrackBy(){return this._cdkVirtualForTrackBy}set cdkVirtualForTrackBy(e){this._needsUpdate=!0,this._cdkVirtualForTrackBy=e?(i,r)=>e(i+(this._renderedRange?this._renderedRange.start:0),r):void 0}set cdkVirtualForTemplate(e){e&&(this._needsUpdate=!0,this._template=e)}get cdkVirtualForTemplateCacheSize(){return this._viewRepeater.viewCacheSize}set cdkVirtualForTemplateCacheSize(e){this._viewRepeater.viewCacheSize=(0,V.coerceNumberProperty)(e)}constructor(e,i,r,n,l,s){this._viewContainerRef=e,this._template=i,this._differs=r,this._viewRepeater=n,this._viewport=l,this.viewChange=new c.Subject,this._dataSourceChanges=new c.Subject,this.dataStream=this._dataSourceChanges.pipe((0,u.startWith)(null),(0,u.pairwise)(),(0,u.switchMap)(([a,d])=>this._changeDataSource(a,d)),(0,u.shareReplay)(1)),this._differ=null,this._needsUpdate=!1,this._destroyed=new c.Subject,this.dataStream.subscribe(a=>{this._data=a,this._onRenderedDataChange()}),this._viewport.renderedRangeStream.pipe((0,u.takeUntil)(this._destroyed)).subscribe(a=>{this._renderedRange=a,this.viewChange.observers.length&&s.run(()=>this.viewChange.next(this._renderedRange)),this._onRenderedDataChange()}),this._viewport.attach(this)}measureRangeSize(e,i){if(e.start>=e.end)return 0;if((e.start<this._renderedRange.start||e.end>this._renderedRange.end)&&(typeof ngDevMode>"u"||ngDevMode))throw Error("Error: attempted to measure an item that isn't rendered.");const r=e.start-this._renderedRange.start,n=e.end-e.start;let l,s;for(let a=0;a<n;a++){const d=this._viewContainerRef.get(a+r);if(d&&d.rootNodes.length){l=s=d.rootNodes[0];break}}for(let a=n-1;a>-1;a--){const d=this._viewContainerRef.get(a+r);if(d&&d.rootNodes.length){s=d.rootNodes[d.rootNodes.length-1];break}}return l&&s?B(i,"end",s)-B(i,"start",l):0}ngDoCheck(){if(this._differ&&this._needsUpdate){const e=this._differ.diff(this._renderedItems);e?this._applyChanges(e):this._updateContext(),this._needsUpdate=!1}}ngOnDestroy(){this._viewport.detach(),this._dataSourceChanges.next(void 0),this._dataSourceChanges.complete(),this.viewChange.complete(),this._destroyed.next(),this._destroyed.complete(),this._viewRepeater.detach()}_onRenderedDataChange(){!this._renderedRange||(this._renderedItems=this._data.slice(this._renderedRange.start,this._renderedRange.end),this._differ||(this._differ=this._differs.find(this._renderedItems).create((e,i)=>this.cdkVirtualForTrackBy?this.cdkVirtualForTrackBy(e,i):i)),this._needsUpdate=!0)}_changeDataSource(e,i){return e&&e.disconnect(this),this._needsUpdate=!0,i?i.connect(this):(0,c.of)()}_updateContext(){const e=this._data.length;let i=this._viewContainerRef.length;for(;i--;){const r=this._viewContainerRef.get(i);r.context.index=this._renderedRange.start+i,r.context.count=e,this._updateComputedContextProperties(r.context),r.detectChanges()}}_applyChanges(e){this._viewRepeater.applyChanges(e,this._viewContainerRef,(n,l,s)=>this._getEmbeddedViewArgs(n,s),n=>n.item),e.forEachIdentityChange(n=>{const l=this._viewContainerRef.get(n.currentIndex);l.context.$implicit=n.item});const i=this._data.length;let r=this._viewContainerRef.length;for(;r--;){const n=this._viewContainerRef.get(r);n.context.index=this._renderedRange.start+r,n.context.count=i,this._updateComputedContextProperties(n.context)}}_updateComputedContextProperties(e){e.first=e.index===0,e.last=e.index===e.count-1,e.even=e.index%2===0,e.odd=!e.even}_getEmbeddedViewArgs(e,i){return{templateRef:this._template,context:{$implicit:e.item,cdkVirtualForOf:this._cdkVirtualForOf,index:-1,count:-1,first:!1,last:!1,odd:!1,even:!1},index:i}}}E.\u0275fac=function(e){return new(e||E)(t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.TemplateRef),t.\u0275\u0275directiveInject(t.IterableDiffers),t.\u0275\u0275directiveInject(R._VIEW_REPEATER_STRATEGY),t.\u0275\u0275directiveInject(p,4),t.\u0275\u0275directiveInject(t.NgZone))},E.\u0275dir=t.\u0275\u0275defineDirective({type:E,selectors:[["","cdkVirtualFor","","cdkVirtualForOf",""]],inputs:{cdkVirtualForOf:"cdkVirtualForOf",cdkVirtualForTrackBy:"cdkVirtualForTrackBy",cdkVirtualForTemplate:"cdkVirtualForTemplate",cdkVirtualForTemplateCacheSize:"cdkVirtualForTemplateCacheSize"},standalone:!0,features:[t.\u0275\u0275ProvidersFeature([{provide:R._VIEW_REPEATER_STRATEGY,useClass:R._RecycleViewRepeaterStrategy}])]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(E,[{type:t.Directive,args:[{selector:"[cdkVirtualFor][cdkVirtualForOf]",providers:[{provide:R._VIEW_REPEATER_STRATEGY,useClass:R._RecycleViewRepeaterStrategy}],standalone:!0}]}],function(){return[{type:t.ViewContainerRef},{type:t.TemplateRef},{type:t.IterableDiffers},{type:R._RecycleViewRepeaterStrategy,decorators:[{type:t.Inject,args:[R._VIEW_REPEATER_STRATEGY]}]},{type:p,decorators:[{type:t.SkipSelf}]},{type:t.NgZone}]},{cdkVirtualForOf:[{type:t.Input}],cdkVirtualForTrackBy:[{type:t.Input}],cdkVirtualForTemplate:[{type:t.Input}],cdkVirtualForTemplateCacheSize:[{type:t.Input}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class C extends w{constructor(e,i,r,n){super(e,i,r,n)}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]-this.measureScrollOffset(e)}}C.\u0275fac=function(e){return new(e||C)(t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(h),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(f.Directionality,8))},C.\u0275dir=t.\u0275\u0275defineDirective({type:C,selectors:[["","cdkVirtualScrollingElement",""]],hostAttrs:[1,"cdk-virtual-scrollable"],standalone:!0,features:[t.\u0275\u0275ProvidersFeature([{provide:b,useExisting:C}]),t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(C,[{type:t.Directive,args:[{selector:"[cdkVirtualScrollingElement]",providers:[{provide:b,useExisting:C}],standalone:!0,host:{class:"cdk-virtual-scrollable"}}]}],function(){return[{type:t.ElementRef},{type:h},{type:t.NgZone},{type:f.Directionality,decorators:[{type:t.Optional}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class y extends w{constructor(e,i,r){super(new t.ElementRef(document.documentElement),e,i,r),this._elementScrolled=new c.Observable(n=>this.ngZone.runOutsideAngular(()=>(0,c.fromEvent)(document,"scroll").pipe((0,u.takeUntil)(this._destroyed)).subscribe(n)))}measureBoundingClientRectWithScrollOffset(e){return this.getElementRef().nativeElement.getBoundingClientRect()[e]}}y.\u0275fac=function(e){return new(e||y)(t.\u0275\u0275directiveInject(h),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(f.Directionality,8))},y.\u0275dir=t.\u0275\u0275defineDirective({type:y,selectors:[["cdk-virtual-scroll-viewport","scrollWindow",""]],standalone:!0,features:[t.\u0275\u0275ProvidersFeature([{provide:b,useExisting:y}]),t.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(y,[{type:t.Directive,args:[{selector:"cdk-virtual-scroll-viewport[scrollWindow]",providers:[{provide:b,useExisting:y}],standalone:!0}]}],function(){return[{type:h},{type:t.NgZone},{type:f.Directionality,decorators:[{type:t.Optional}]}]},null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class v{}v.\u0275fac=function(e){return new(e||v)},v.\u0275mod=t.\u0275\u0275defineNgModule({type:v}),v.\u0275inj=t.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(v,[{type:t.NgModule,args:[{exports:[_],imports:[_]}]}],null,null)}();class O{}O.\u0275fac=function(e){return new(e||O)},O.\u0275mod=t.\u0275\u0275defineNgModule({type:O}),O.\u0275inj=t.\u0275\u0275defineInjector({imports:[f.BidiModule,v,p,f.BidiModule,v]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(O,[{type:t.NgModule,args:[{imports:[f.BidiModule,v,p,S,E,y,C],exports:[f.BidiModule,v,S,E,p,y,C]}]}],null,null)}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *//**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}]);
