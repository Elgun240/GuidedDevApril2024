(self.webpackChunkapp_studio_enterprise_duplicates_widget=self.webpackChunkapp_studio_enterprise_duplicates_widget||[]).push([[7432,4542],{37432:(h,c,n)=>{n.r(c),n.d(c,{CodemirrorComponent:()=>o,CodemirrorModule:()=>s});var e=n(94450),f=n.n(e),a=n(34560),p=n.n(a);const l=["ref"];function d(i){return i&&i.replace(/\r\n|\r/g,`
`)}class o{constructor(t,r){this._differs=t,this._ngZone=r,this.className="",this.name="codemirror",this.autoFocus=!1,this.preserveScrollPosition=!1,this.cursorActivity=new e.EventEmitter,this.focusChange=new e.EventEmitter,this.scroll=new e.EventEmitter,this.drop=new e.EventEmitter,this.value="",this.disabled=!1,this.isFocused=!1,this.onChange=u=>{},this.onTouched=()=>{}}set options(t){this._options=t,!this._differ&&t&&(this._differ=this._differs.find(t).create())}get codeMirrorGlobal(){return this._codeMirror?this._codeMirror:(this._codeMirror=typeof CodeMirror<"u"?CodeMirror:n(17467),this._codeMirror)}ngAfterViewInit(){!this.ref||this._ngZone.runOutsideAngular(()=>{this.codeMirror=this.codeMirrorGlobal.fromTextArea(this.ref.nativeElement,this._options),this.codeMirror.on("cursorActivity",t=>this._ngZone.run(()=>this.cursorActive(t))),this.codeMirror.on("scroll",this.scrollChanged.bind(this)),this.codeMirror.on("blur",()=>this._ngZone.run(()=>this.focusChanged(!1))),this.codeMirror.on("focus",()=>this._ngZone.run(()=>this.focusChanged(!0))),this.codeMirror.on("change",(t,r)=>this._ngZone.run(()=>this.codemirrorValueChanged(t,r))),this.codeMirror.on("drop",(t,r)=>{this._ngZone.run(()=>this.dropFiles(t,r))}),this.codeMirror.setValue(this.value)})}ngDoCheck(){if(!this._differ)return;const t=this._differ.diff(this._options);t&&(t.forEachChangedItem(r=>this.setOptionIfChanged(r.key,r.currentValue)),t.forEachAddedItem(r=>this.setOptionIfChanged(r.key,r.currentValue)),t.forEachRemovedItem(r=>this.setOptionIfChanged(r.key,r.currentValue)))}ngOnDestroy(){this.codeMirror&&this.codeMirror.toTextArea()}codemirrorValueChanged(t,r){r.origin!=="setValue"&&(this.value=t.getValue(),this.onChange(this.value))}setOptionIfChanged(t,r){!this.codeMirror||this.codeMirror.setOption(t,r)}focusChanged(t){this.onTouched(),this.isFocused=t,this.focusChange.emit(t)}scrollChanged(t){this.scroll.emit(t.getScrollInfo())}cursorActive(t){this.cursorActivity.emit(t)}dropFiles(t,r){this.drop.emit([t,r])}writeValue(t){if(t==null)return;if(!this.codeMirror){this.value=t;return}const r=this.codeMirror.getValue();if(t!==r&&d(r)!==d(t))if(this.value=t,this.preserveScrollPosition){const u=this.codeMirror.getScrollInfo();this.codeMirror.setValue(this.value),this.codeMirror.scrollTo(u.left,u.top)}else this.codeMirror.setValue(this.value)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this.disabled=t,this.setOptionIfChanged("readOnly",this.disabled)}}o.\u0275fac=function(t){return new(t||o)(e.\u0275\u0275directiveInject(e.KeyValueDiffers),e.\u0275\u0275directiveInject(e.NgZone))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ngx-codemirror"]],viewQuery:function(t,r){if(t&1&&e.\u0275\u0275viewQuery(l,7),t&2){let u;e.\u0275\u0275queryRefresh(u=e.\u0275\u0275loadQuery())&&(r.ref=u.first)}},inputs:{className:"className",name:"name",autoFocus:"autoFocus",preserveScrollPosition:"preserveScrollPosition",options:"options"},outputs:{cursorActivity:"cursorActivity",focusChange:"focusChange",scroll:"scroll",drop:"drop"},features:[e.\u0275\u0275ProvidersFeature([{provide:a.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>o),multi:!0}])],decls:3,vars:7,consts:[["autocomplete","off",3,"name","autofocus"],["ref",""]],template:function(t,r){t&1&&(e.\u0275\u0275elementStart(0,"textarea",0,1),e.\u0275\u0275text(2,"    "),e.\u0275\u0275elementEnd()),t&2&&(e.\u0275\u0275classMapInterpolate1("ngx-codemirror ",r.className,""),e.\u0275\u0275classProp("ngx-codemirror--focused",r.isFocused),e.\u0275\u0275property("name",r.name)("autofocus",r.autoFocus))},encapsulation:2,changeDetection:0}),o.ctorParameters=()=>[{type:e.KeyValueDiffers},{type:e.NgZone}],o.propDecorators={className:[{type:e.Input}],name:[{type:e.Input}],autoFocus:[{type:e.Input}],options:[{type:e.Input}],preserveScrollPosition:[{type:e.Input}],cursorActivity:[{type:e.Output}],focusChange:[{type:e.Output}],scroll:[{type:e.Output}],drop:[{type:e.Output}],ref:[{type:e.ViewChild,args:["ref",{static:!0}]}]},function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(o,[{type:e.Component,args:[{selector:"ngx-codemirror",template:`
    <textarea
      [name]="name"
      class="ngx-codemirror {{ className }}"
      [class.ngx-codemirror--focused]="isFocused"
      autocomplete="off"
      [autofocus]="autoFocus"
      #ref
    >
    </textarea>
  `,providers:[{provide:a.NG_VALUE_ACCESSOR,useExisting:(0,e.forwardRef)(()=>o),multi:!0}],preserveWhitespaces:!1,changeDetection:e.ChangeDetectionStrategy.OnPush}]}],function(){return[{type:e.KeyValueDiffers},{type:e.NgZone}]},{className:[{type:e.Input}],name:[{type:e.Input}],autoFocus:[{type:e.Input}],preserveScrollPosition:[{type:e.Input}],cursorActivity:[{type:e.Output}],focusChange:[{type:e.Output}],scroll:[{type:e.Output}],drop:[{type:e.Output}],options:[{type:e.Input}],ref:[{type:e.ViewChild,args:["ref",{static:!0}]}]})}();class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=e.\u0275\u0275defineInjector({}),function(){(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(s,[{type:e.NgModule,args:[{exports:[o],declarations:[o]}]}],null,null)}(),function(){(typeof ngJitMode>"u"||ngJitMode)&&e.\u0275\u0275setNgModuleScope(s,{declarations:[o],exports:[o]})}()}}]);
