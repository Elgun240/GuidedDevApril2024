(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[3622,7723],{37723:(p,a,u)=>{u.r(a),u.d(a,{CdkObserveContent:()=>i,ContentObserver:()=>r,MutationObserverFactory:()=>n,ObserversModule:()=>c});var b=u(3127),t=u(94450),v=u(21322),_=u(27049);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class n{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}}n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(n,[{type:t.Injectable,args:[{providedIn:"root"}]}],null,null)}();class r{constructor(e){this._mutationObserverFactory=e,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((e,s)=>this._cleanupObserver(s))}observe(e){const s=(0,b.coerceElement)(e);return new v.Observable(o=>{const h=this._observeElement(s).subscribe(o);return()=>{h.unsubscribe(),this._unobserveElement(s)}})}_observeElement(e){if(this._observedElements.has(e))this._observedElements.get(e).count++;else{const s=new v.Subject,o=this._mutationObserverFactory.create(l=>s.next(l));o&&o.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:o,stream:s,count:1})}return this._observedElements.get(e).stream}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){const{observer:s,stream:o}=this._observedElements.get(e);s&&s.disconnect(),o.complete(),this._observedElements.delete(e)}}}r.\u0275fac=function(e){return new(e||r)(t.\u0275\u0275inject(n))},r.\u0275prov=t.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(r,[{type:t.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:n}]},null)}();class i{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,b.coerceBooleanProperty)(e),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(e){this._debounce=(0,b.coerceNumberProperty)(e),this._subscribe()}constructor(e,s,o){this._contentObserver=e,this._elementRef=s,this._ngZone=o,this.event=new t.EventEmitter,this._disabled=!1,this._currentSubscription=null}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const e=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?e.pipe((0,_.debounceTime)(this.debounce)):e).subscribe(this.event)})}_unsubscribe(){this._currentSubscription?.unsubscribe()}}i.\u0275fac=function(e){return new(e||i)(t.\u0275\u0275directiveInject(r),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(t.NgZone))},i.\u0275dir=t.\u0275\u0275defineDirective({type:i,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(i,[{type:t.Directive,args:[{selector:"[cdkObserveContent]",exportAs:"cdkObserveContent"}]}],function(){return[{type:r},{type:t.ElementRef},{type:t.NgZone}]},{event:[{type:t.Output,args:["cdkObserveContent"]}],disabled:[{type:t.Input,args:["cdkObserveContentDisabled"]}],debounce:[{type:t.Input}]})}();class c{}c.\u0275fac=function(e){return new(e||c)},c.\u0275mod=t.\u0275\u0275defineNgModule({type:c}),c.\u0275inj=t.\u0275\u0275defineInjector({providers:[n]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(c,[{type:t.NgModule,args:[{exports:[i],declarations:[i],providers:[n]}]}],null,null)}();/**
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
