(self.webpackChunkapp_studio_enterprise_error_list_dialog=self.webpackChunkapp_studio_enterprise_error_list_dialog||[]).push([[2697],{62697:(I,v,o)=>{o.r(v);var d=o(54514),M=o(31134),l=o(2876),e=o(94450),p=o(71006),C=o(57186),i=o(77207),f=o(33177),g=o(41307),c=o(46206),m=o(49475),u=o(21322),E=o(27049);class a extends i.TranslateLoader{_getDefaultTranslation(){return{ErrorListDialogService:{CodeErrorListDialogCaption:"Compilation errors",FileNameColumn:"File name",ErrorTextColumn:"Description",ErrorNumberColumn:"Code",LineColumn:"Line",CodeValidationErrorListDialogCaption:"Error while saving package dependencies",SourceColumn:"Source",ReferenceColumn:"Reference",PackageColumn:"Package",AcademyHelpUrlCaption:" Learn more in the Academy"},TableDialog:{Close:"Close"}}}_getRussianTranslation(){return{ErrorListDialogService:{CodeErrorListDialogCaption:"\u041E\u0442\u0447\u0435\u0442 \u043E\u0448\u0438\u0431\u043E\u043A \u043A\u043E\u043C\u043F\u0438\u043B\u044F\u0446\u0438\u0438",FileNameColumn:"\u0418\u043C\u044F \u0444\u0430\u0439\u043B\u0430",ErrorTextColumn:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",ErrorNumberColumn:"\u041A\u043E\u0434",LineColumn:"\u0421\u0442\u0440\u043E\u043A\u0430",CodeValidationErrorListDialogCaption:"\u041E\u0448\u0438\u0431\u043A\u0430: \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043F\u0430\u043A\u0435\u0442\u043E\u0432",SourceColumn:"\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A",ReferenceColumn:"\u0421\u0441\u044B\u043B\u043A\u0430",PackageColumn:"\u041F\u0430\u043A\u0435\u0442",AcademyHelpUrlCaption:" \u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0438"},TableDialog:{Close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C"}}}getTranslation(t){const n=this._getDefaultTranslation();return t==="en-US"?(0,u.of)(n):t==="ru-RU"?(0,u.of)(Object.assign(n,this._getRussianTranslation())):(0,u.of)(n)}}a.\u0275fac=function(){let r;return function(n){return(r||(r=e.\u0275\u0275getInheritedFactory(a)))(n||a)}}(),a.\u0275prov=e.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac});function R(r,t){return()=>(0,u.lastValueFrom)(r.loadCurrentUserInfo().pipe((0,E.switchMap)(n=>t.use(n?.userInfo?.cultureInfo?.sysCultureName).pipe((0,E.catchError)(()=>(0,u.of)(null))))),{defaultValue:null})}class s{constructor(t,n){this._injector=t,this._customElementsBootstrapService=n}ngDoBootstrap(){this._customElementsBootstrapService.defineComponent("ts-error-list-dialog-proxy",c.ErrorListDialogProxyComponent,this._injector)}}s.\u0275fac=function(t){return new(t||s)(e.\u0275\u0275inject(e.Injector),e.\u0275\u0275inject(f.CustomElementsBootstrapService))},s.\u0275mod=e.\u0275\u0275defineNgModule({type:s}),s.\u0275inj=e.\u0275\u0275defineInjector({providers:[f.WINDOW_PROVIDER,{provide:e.APP_INITIALIZER,useFactory:R,deps:[m.UserInfoService,i.TranslateService],multi:!0},g.HANDLER_CHAIN_ADAPTER_APP_INITIALIZER_PROVIDER,g.HandlerChainAdapter,m.USER_INFO_PROVIDER,{provide:M.APP_BASE_HREF,useValue:"/"},{provide:l.HTTP_INTERCEPTORS,useClass:m.WebComponentHttpInterceptor,multi:!0}],imports:[d.BrowserModule,p.BrowserAnimationsModule,i.TranslateModule.forRoot({defaultLanguage:"en-US",useDefaultLang:!0,loader:{provide:i.TranslateLoader,useClass:a}}),l.HttpClientModule,l.HttpClientXsrfModule.withOptions({cookieName:"BPMCSRF",headerName:"BPMCSRF"}),C.RouterModule.forRoot([],{}),c.ErrorListDialogProxyModule]}),function(){(typeof ngJitMode>"u"||ngJitMode)&&e.\u0275\u0275setNgModuleScope(s,{imports:[d.BrowserModule,p.BrowserAnimationsModule,i.TranslateModule,l.HttpClientModule,l.HttpClientXsrfModule,C.RouterModule,c.ErrorListDialogProxyModule]})}(),d.platformBrowser().bootstrapModule(s).catch(r=>console.error(r))}}]);
