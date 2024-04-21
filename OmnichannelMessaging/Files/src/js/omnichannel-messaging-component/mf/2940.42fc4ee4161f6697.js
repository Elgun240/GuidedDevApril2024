(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[2940],{2940:(J,S,n)=>{n.r(S),n.d(S,{MAT_TOOLTIP_DEFAULT_OPTIONS:()=>P,MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY:()=>j,MAT_TOOLTIP_SCROLL_STRATEGY:()=>E,MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY:()=>z,MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>M,MatTooltip:()=>m,MatTooltipModule:()=>u,SCROLL_THROTTLE_MS:()=>Y,TOOLTIP_PANEL_CLASS:()=>G,TooltipComponent:()=>h,_MatTooltipBase:()=>v,_TooltipComponentBase:()=>f,getMatTooltipInvalidPositionError:()=>w,matTooltipAnimations:()=>Q});var c=n(27049),b=n(3127),k=n(33297),i=n(94450),y=n(31134),O=n(67202),I=n(71006),_=n(71689),C=n(99852),p=n(31892),V=n(83676),N=n(21322),d=n(72310),U=n(17684),D=n(66385);/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const H=["tooltip"],Y=20;function w(l){return Error(`Tooltip position "${l}" is invalid.`)}const E=new i.InjectionToken("mat-tooltip-scroll-strategy");function z(l){return()=>l.scrollStrategies.reposition({scrollThrottle:Y})}const M={provide:E,deps:[p.Overlay],useFactory:z};function j(){return{showDelay:0,hideDelay:0,touchendHideDelay:1500}}const P=new i.InjectionToken("mat-tooltip-default-options",{providedIn:"root",factory:j}),G="mat-mdc-tooltip-panel",B="tooltip-panel",F=(0,O.normalizePassiveListenerOptions)({passive:!0}),X=500,W=8,K=8,Z=24,$=200;class v{get position(){return this._position}set position(t){t!==this._position&&(this._position=t,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(t){this._positionAtOrigin=(0,b.coerceBooleanProperty)(t),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,b.coerceBooleanProperty)(t),this._disabled?this.hide(0):this._setupPointerEnterEventsIfNeeded()}get showDelay(){return this._showDelay}set showDelay(t){this._showDelay=(0,b.coerceNumberProperty)(t)}get hideDelay(){return this._hideDelay}set hideDelay(t){this._hideDelay=(0,b.coerceNumberProperty)(t),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}get message(){return this._message}set message(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this._message,"tooltip"),this._message=t!=null?String(t).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage(),this._ngZone.runOutsideAngular(()=>{Promise.resolve().then(()=>{this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")})}))}get tooltipClass(){return this._tooltipClass}set tooltipClass(t){this._tooltipClass=t,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}constructor(t,e,o,s,a,g,T,A,R,x,r,L){this._overlay=t,this._elementRef=e,this._scrollDispatcher=o,this._viewContainerRef=s,this._ngZone=a,this._platform=g,this._ariaDescriber=T,this._focusMonitor=A,this._dir=x,this._defaultOptions=r,this._position="below",this._positionAtOrigin=!1,this._disabled=!1,this._viewInitialized=!1,this._pointerExitEventsInitialized=!1,this._viewportMargin=8,this._cssClassPrefix="mat",this._showDelay=this._defaultOptions.showDelay,this._hideDelay=this._defaultOptions.hideDelay,this.touchGestures="auto",this._message="",this._passiveListeners=[],this._destroyed=new N.Subject,this._scrollStrategy=R,this._document=L,r&&(r.position&&(this.position=r.position),r.positionAtOrigin&&(this.positionAtOrigin=r.positionAtOrigin),r.touchGestures&&(this.touchGestures=r.touchGestures)),x.change.pipe((0,c.takeUntil)(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe((0,c.takeUntil)(this._destroyed)).subscribe(t=>{t?t==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){const t=this._elementRef.nativeElement;clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._passiveListeners.forEach(([e,o])=>{t.removeEventListener(e,o,F)}),this._passiveListeners.length=0,this._destroyed.next(),this._destroyed.complete(),this._ariaDescriber.removeDescription(t,this.message,"tooltip"),this._focusMonitor.stopMonitoring(t)}show(t=this.showDelay,e){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}const o=this._createOverlay(e);this._detach(),this._portal=this._portal||new V.ComponentPortal(this._tooltipComponent,this._viewContainerRef);const s=this._tooltipInstance=o.attach(this._portal).instance;s._triggerElement=this._elementRef.nativeElement,s._mouseLeaveHideDelay=this._hideDelay,s.afterHidden().pipe((0,c.takeUntil)(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),s.show(t)}hide(t=this.hideDelay){const e=this._tooltipInstance;e&&(e.isVisible()?e.hide(t):(e._cancelPendingAnimations(),this._detach()))}toggle(t){this._isTooltipVisible()?this.hide():this.show(void 0,t)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(t){if(this._overlayRef){const s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!t)&&s._origin instanceof i.ElementRef)return this._overlayRef;this._detach()}const e=this._scrollDispatcher.getAncestorScrollContainers(this._elementRef),o=this._overlay.position().flexibleConnectedTo(this.positionAtOrigin?t||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(e);return o.positionChanges.pipe((0,c.takeUntil)(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=this._overlay.create({direction:this._dir,positionStrategy:o,panelClass:`${this._cssClassPrefix}-${B}`,scrollStrategy:this._scrollStrategy()}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe((0,c.takeUntil)(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe((0,c.takeUntil)(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe((0,c.takeUntil)(this._destroyed)).subscribe(s=>{this._isTooltipVisible()&&s.keyCode===k.ESCAPE&&!(0,k.hasModifierKey)(s)&&(s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0)))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(t){const e=t.getConfig().positionStrategy,o=this._getOrigin(),s=this._getOverlayPosition();e.withPositions([this._addOffset({...o.main,...s.main}),this._addOffset({...o.fallback,...s.fallback})])}_addOffset(t){return t}_getOrigin(){const t=!this._dir||this._dir.value=="ltr",e=this.position;let o;if(e=="above"||e=="below")o={originX:"center",originY:e=="above"?"top":"bottom"};else if(e=="before"||e=="left"&&t||e=="right"&&!t)o={originX:"start",originY:"center"};else if(e=="after"||e=="right"&&t||e=="left"&&!t)o={originX:"end",originY:"center"};else if(typeof ngDevMode>"u"||ngDevMode)throw w(e);const{x:s,y:a}=this._invertPosition(o.originX,o.originY);return{main:o,fallback:{originX:s,originY:a}}}_getOverlayPosition(){const t=!this._dir||this._dir.value=="ltr",e=this.position;let o;if(e=="above")o={overlayX:"center",overlayY:"bottom"};else if(e=="below")o={overlayX:"center",overlayY:"top"};else if(e=="before"||e=="left"&&t||e=="right"&&!t)o={overlayX:"end",overlayY:"center"};else if(e=="after"||e=="right"&&t||e=="left"&&!t)o={overlayX:"start",overlayY:"center"};else if(typeof ngDevMode>"u"||ngDevMode)throw w(e);const{x:s,y:a}=this._invertPosition(o.overlayX,o.overlayY);return{main:o,fallback:{overlayX:s,overlayY:a}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),this._ngZone.onMicrotaskEmpty.pipe((0,c.take)(1),(0,c.takeUntil)(this._destroyed)).subscribe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()}))}_setTooltipClass(t){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=t,this._tooltipInstance._markForCheck())}_invertPosition(t,e){return this.position==="above"||this.position==="below"?e==="top"?e="bottom":e==="bottom"&&(e="top"):t==="end"?t="start":t==="start"&&(t="end"),{x:t,y:e}}_updateCurrentPositionClass(t){const{overlayY:e,originX:o,originY:s}=t;let a;if(e==="center"?this._dir&&this._dir.value==="rtl"?a=o==="end"?"left":"right":a=o==="start"?"left":"right":a=e==="bottom"&&s==="top"?"above":"below",a!==this._currentPosition){const g=this._overlayRef;if(g){const T=`${this._cssClassPrefix}-${B}-`;g.removePanelClass(T+this._currentPosition),g.addPanelClass(T+a)}this._currentPosition=a}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._passiveListeners.length||(this._platformSupportsMouseEvents()?this._passiveListeners.push(["mouseenter",t=>{this._setupPointerExitEventsIfNeeded();let e;t.x!==void 0&&t.y!==void 0&&(e=t),this.show(void 0,e)}]):this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._passiveListeners.push(["touchstart",t=>{const e=t.targetTouches?.[0],o=e?{x:e.clientX,y:e.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),clearTimeout(this._touchstartTimeout),this._touchstartTimeout=setTimeout(()=>this.show(void 0,o),X)}])),this._addListeners(this._passiveListeners))}_setupPointerExitEventsIfNeeded(){if(this._pointerExitEventsInitialized)return;this._pointerExitEventsInitialized=!0;const t=[];if(this._platformSupportsMouseEvents())t.push(["mouseleave",e=>{const o=e.relatedTarget;(!o||!this._overlayRef?.overlayElement.contains(o))&&this.hide()}],["wheel",e=>this._wheelListener(e)]);else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();const e=()=>{clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions.touchendHideDelay)};t.push(["touchend",e],["touchcancel",e])}this._addListeners(t),this._passiveListeners.push(...t)}_addListeners(t){t.forEach(([e,o])=>{this._elementRef.nativeElement.addEventListener(e,o,F)})}_platformSupportsMouseEvents(){return!this._platform.IOS&&!this._platform.ANDROID}_wheelListener(t){if(this._isTooltipVisible()){const e=this._document.elementFromPoint(t.clientX,t.clientY),o=this._elementRef.nativeElement;e!==o&&!o.contains(e)&&this.hide()}}_disableNativeGesturesIfNecessary(){const t=this.touchGestures;if(t!=="off"){const e=this._elementRef.nativeElement,o=e.style;(t==="on"||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA")&&(o.userSelect=o.msUserSelect=o.webkitUserSelect=o.MozUserSelect="none"),(t==="on"||!e.draggable)&&(o.webkitUserDrag="none"),o.touchAction="none",o.webkitTapHighlightColor="transparent"}}}v.\u0275fac=function(t){i.\u0275\u0275invalidFactory()},v.\u0275dir=i.\u0275\u0275defineDirective({type:v,inputs:{position:["matTooltipPosition","position"],positionAtOrigin:["matTooltipPositionAtOrigin","positionAtOrigin"],disabled:["matTooltipDisabled","disabled"],showDelay:["matTooltipShowDelay","showDelay"],hideDelay:["matTooltipHideDelay","hideDelay"],touchGestures:["matTooltipTouchGestures","touchGestures"],message:["matTooltip","message"],tooltipClass:["matTooltipClass","tooltipClass"]}}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(v,[{type:i.Directive}],function(){return[{type:p.Overlay},{type:i.ElementRef},{type:p.ScrollDispatcher},{type:i.ViewContainerRef},{type:i.NgZone},{type:O.Platform},{type:_.AriaDescriber},{type:_.FocusMonitor},{type:void 0},{type:C.Directionality},{type:void 0},{type:void 0,decorators:[{type:i.Inject,args:[y.DOCUMENT]}]}]},{position:[{type:i.Input,args:["matTooltipPosition"]}],positionAtOrigin:[{type:i.Input,args:["matTooltipPositionAtOrigin"]}],disabled:[{type:i.Input,args:["matTooltipDisabled"]}],showDelay:[{type:i.Input,args:["matTooltipShowDelay"]}],hideDelay:[{type:i.Input,args:["matTooltipHideDelay"]}],touchGestures:[{type:i.Input,args:["matTooltipTouchGestures"]}],message:[{type:i.Input,args:["matTooltip"]}],tooltipClass:[{type:i.Input,args:["matTooltipClass"]}]})}();class m extends v{constructor(t,e,o,s,a,g,T,A,R,x,r,L){super(t,e,o,s,a,g,T,A,R,x,r,L),this._tooltipComponent=h,this._cssClassPrefix="mat-mdc",this._viewportMargin=W}_addOffset(t){const e=K,o=!this._dir||this._dir.value=="ltr";return t.originY==="top"?t.offsetY=-e:t.originY==="bottom"?t.offsetY=e:t.originX==="start"?t.offsetX=o?-e:e:t.originX==="end"&&(t.offsetX=o?e:-e),t}}m.\u0275fac=function(t){return new(t||m)(i.\u0275\u0275directiveInject(p.Overlay),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(p.ScrollDispatcher),i.\u0275\u0275directiveInject(i.ViewContainerRef),i.\u0275\u0275directiveInject(i.NgZone),i.\u0275\u0275directiveInject(O.Platform),i.\u0275\u0275directiveInject(_.AriaDescriber),i.\u0275\u0275directiveInject(_.FocusMonitor),i.\u0275\u0275directiveInject(E),i.\u0275\u0275directiveInject(C.Directionality,8),i.\u0275\u0275directiveInject(P,8),i.\u0275\u0275directiveInject(y.DOCUMENT))},m.\u0275dir=i.\u0275\u0275defineDirective({type:m,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],exportAs:["matTooltip"],features:[i.\u0275\u0275InheritDefinitionFeature]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(m,[{type:i.Directive,args:[{selector:"[matTooltip]",exportAs:"matTooltip",host:{class:"mat-mdc-tooltip-trigger"}}]}],function(){return[{type:p.Overlay},{type:i.ElementRef},{type:p.ScrollDispatcher},{type:i.ViewContainerRef},{type:i.NgZone},{type:O.Platform},{type:_.AriaDescriber},{type:_.FocusMonitor},{type:void 0,decorators:[{type:i.Inject,args:[E]}]},{type:C.Directionality,decorators:[{type:i.Optional}]},{type:void 0,decorators:[{type:i.Optional},{type:i.Inject,args:[P]}]},{type:void 0,decorators:[{type:i.Inject,args:[y.DOCUMENT]}]}]},null)}();class f{constructor(t,e){this._changeDetectorRef=t,this._closeOnInteraction=!1,this._isVisible=!1,this._onHide=new N.Subject,this._animationsDisabled=e==="NoopAnimations"}show(t){clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},t)}hide(t){clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},t)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:t}){(!t||!this._triggerElement.contains(t))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){}_handleAnimationEnd({animationName:t}){(t===this._showAnimation||t===this._hideAnimation)&&this._finalizeAnimation(t===this._showAnimation)}_cancelPendingAnimations(){clearTimeout(this._showTimeoutId),clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(t){t?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(t){const e=this._tooltip.nativeElement,o=this._showAnimation,s=this._hideAnimation;if(e.classList.remove(t?s:o),e.classList.add(t?o:s),this._isVisible=t,t&&!this._animationsDisabled&&typeof getComputedStyle=="function"){const a=getComputedStyle(e);(a.getPropertyValue("animation-duration")==="0s"||a.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}t&&this._onShow(),this._animationsDisabled&&(e.classList.add("_mat-animation-noopable"),this._finalizeAnimation(t))}}f.\u0275fac=function(t){return new(t||f)(i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(I.ANIMATION_MODULE_TYPE,8))},f.\u0275dir=i.\u0275\u0275defineDirective({type:f}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(f,[{type:i.Directive}],function(){return[{type:i.ChangeDetectorRef},{type:void 0,decorators:[{type:i.Optional},{type:i.Inject,args:[I.ANIMATION_MODULE_TYPE]}]}]},null)}();class h extends f{constructor(t,e,o){super(t,o),this._elementRef=e,this._isMultiline=!1,this._showAnimation="mat-mdc-tooltip-show",this._hideAnimation="mat-mdc-tooltip-hide"}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){const t=this._elementRef.nativeElement.getBoundingClientRect();return t.height>Z&&t.width>=$}}h.\u0275fac=function(t){return new(t||h)(i.\u0275\u0275directiveInject(i.ChangeDetectorRef),i.\u0275\u0275directiveInject(i.ElementRef),i.\u0275\u0275directiveInject(I.ANIMATION_MODULE_TYPE,8))},h.\u0275cmp=i.\u0275\u0275defineComponent({type:h,selectors:[["mat-tooltip-component"]],viewQuery:function(t,e){if(t&1&&i.\u0275\u0275viewQuery(H,7),t&2){let o;i.\u0275\u0275queryRefresh(o=i.\u0275\u0275loadQuery())&&(e._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostVars:2,hostBindings:function(t,e){t&1&&i.\u0275\u0275listener("mouseleave",function(s){return e._handleMouseLeave(s)}),t&2&&i.\u0275\u0275styleProp("zoom",e.isVisible()?1:null)},features:[i.\u0275\u0275InheritDefinitionFeature],decls:4,vars:4,consts:[[1,"mdc-tooltip","mdc-tooltip--shown","mat-mdc-tooltip",3,"ngClass","animationend"],["tooltip",""],[1,"mdc-tooltip__surface","mdc-tooltip__surface-animation"]],template:function(t,e){t&1&&(i.\u0275\u0275elementStart(0,"div",0,1),i.\u0275\u0275listener("animationend",function(s){return e._handleAnimationEnd(s)}),i.\u0275\u0275elementStart(2,"div",2),i.\u0275\u0275text(3),i.\u0275\u0275elementEnd()()),t&2&&(i.\u0275\u0275classProp("mdc-tooltip--multiline",e._isMultiline),i.\u0275\u0275property("ngClass",e.tooltipClass),i.\u0275\u0275advance(3),i.\u0275\u0275textInterpolate(e.message))},dependencies:[y.NgClass],styles:['.mdc-tooltip__surface{word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - (2 * 8px));margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - (2 * 8px));align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color, #fff)}.mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color, #000)}.mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font, inherit);font-size:var(--mdc-plain-tooltip-supporting-text-size, inherit);font-weight:var(--mdc-plain-tooltip-supporting-text-weight, inherit);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, inherit)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}'],encapsulation:2,changeDetection:0}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(h,[{type:i.Component,args:[{selector:"mat-tooltip-component",encapsulation:i.ViewEncapsulation.None,changeDetection:i.ChangeDetectionStrategy.OnPush,host:{"[style.zoom]":"isVisible() ? 1 : null","(mouseleave)":"_handleMouseLeave($event)","aria-hidden":"true"},template:`<div
  #tooltip
  class="mdc-tooltip mdc-tooltip--shown mat-mdc-tooltip"
  [ngClass]="tooltipClass"
  (animationend)="_handleAnimationEnd($event)"
  [class.mdc-tooltip--multiline]="_isMultiline">
  <div class="mdc-tooltip__surface mdc-tooltip__surface-animation">{{message}}</div>
</div>
`,styles:['.mdc-tooltip__surface{word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - (2 * 8px));margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - (2 * 8px));align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color, #fff)}.mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape, var(--mdc-shape-small, 4px))}.mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color, #000)}.mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font, inherit);font-size:var(--mdc-plain-tooltip-supporting-text-size, inherit);font-weight:var(--mdc-plain-tooltip-supporting-text-weight, inherit);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, inherit)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}']}]}],function(){return[{type:i.ChangeDetectorRef},{type:i.ElementRef},{type:void 0,decorators:[{type:i.Optional},{type:i.Inject,args:[I.ANIMATION_MODULE_TYPE]}]}]},{_tooltip:[{type:i.ViewChild,args:["tooltip",{static:!0}]}]})}();/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Q={tooltipState:(0,d.trigger)("state",[(0,d.state)("initial, void, hidden",(0,d.style)({opacity:0,transform:"scale(0.8)"})),(0,d.state)("visible",(0,d.style)({transform:"scale(1)"})),(0,d.transition)("* => visible",(0,d.animate)("150ms cubic-bezier(0, 0, 0.2, 1)")),(0,d.transition)("* => hidden",(0,d.animate)("75ms cubic-bezier(0.4, 0, 1, 1)"))])};/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=i.\u0275\u0275defineNgModule({type:u}),u.\u0275inj=i.\u0275\u0275defineInjector({providers:[M],imports:[_.A11yModule,y.CommonModule,p.OverlayModule,D.MatCommonModule,D.MatCommonModule,U.CdkScrollableModule]}),function(){(typeof ngDevMode>"u"||ngDevMode)&&i.\u0275setClassMetadata(u,[{type:i.NgModule,args:[{imports:[_.A11yModule,y.CommonModule,p.OverlayModule,D.MatCommonModule],exports:[m,h,D.MatCommonModule,U.CdkScrollableModule],declarations:[m,h],providers:[M]}]}],null,null)}();/**
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
