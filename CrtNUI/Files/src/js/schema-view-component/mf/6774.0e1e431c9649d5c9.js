(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[6774,8239,5036,6118,7344,8160,1034,8056,1906,4501,1216,9256,9795,1006,7571,6025,9424,885,7709,6662,9669,2375,316],{96774:(h,S,s)=>{s.r(S),s.d(S,{NavigationUtils:()=>r,UITypePriority:()=>d});var c=s(8239),o=s(75378),l=s(97600),d;(function(i){i.Auto="auto",i.PreferFreedomUI="freedom-ui"})(d||(d={}));var f=s(11685);class y{static initialize(){f.config({disableDefaultAlphabetLength:!0,disableDefaultIdLength:!0,idLength:7}),f.characters("0123456789abcdefghijklmnopqrstuvwxyz")}static generateUnique(e,t="",u="_"){const n=new RegExp(`^${t}`);return t+e.replace(n,"")+u+f.generate()}}y.initialize();class r{static get angularSchemaType(){return r._angularSchemaType}static _getTypeColumnName(e,t){return r.getEntityStructure(e,t??d.Auto)?.pages.find(a=>a.typeColumnName)?.typeColumnName}static _getTypeColumnValue(e){return(0,c.Z)(function*(){const{entityName:t,typeColumnValue:u}=e;if(u)return u;const n=r._getTypeColumnName(t,e.uiTypePriority),a=r.getRecordLookupValue(e.recordId);return!n||!a?null:(yield(yield o.Model.create(t)).load({attributes:[n],parameters:[{type:o.ModelParameterType.Filter,value:new o.CompareFilter(o.ComparisonType.Equal,new o.ColumnExpression({columnPath:"Id"}),new o.ParameterExpression({value:a}))}]}))?.[0]?.[n]?.value})()}static _getModuleStructureBySectionSchema(e){return Object.values(Terrasoft.configuration.ModuleStructure).find(t=>t.sectionSchema===e)}static _getSectionModuleName(e){return r._getModuleStructureBySectionSchema(e)?.sectionModule}static _getSectionEditPageModuleName(e){return Object.values(Terrasoft.configuration.ModuleStructure).find(u=>u.cardSchema===e||u.pages?.some(n=>n.cardSchema===e))?.cardModule}static _getSchemaRequire(e){return new Promise(t=>{Terrasoft.require([e],u=>t(u))})}static _isSchemaInheritedFrom(e,t){return(0,c.Z)(function*(){let u=Terrasoft.configuration.Structures[t];u||(yield r._getSchemaRequire(t),u=Terrasoft.configuration.Structures[t]);const n=u?.structureParent;return n?n===e?!0:r._isSchemaInheritedFrom(e,n):!1})()}static _getModuleName(e){return(0,c.Z)(function*(){const t=r._getSectionModuleName(e)??r._getSectionEditPageModuleName(e);if(t)return t;if(yield r._isSchemaInheritedFrom("BasePageV2",e))return"CardModuleV2";switch(!0){case(yield r._isSchemaInheritedFrom("BaseHomePage",e)):return"HomePage";case(yield r._isSchemaInheritedFrom("BaseIntroPageSchema",e)):return"IntroPage";default:return"PageSchemaViewModule"}})()}static _getTypedPage(e,t){if(!t||t.length<=1)return;if(e.entityPageName){const n=t.find(a=>a.cardSchema===e.entityPageName);if(n)return n}let u=e.typeColumnValue;if(!u&&e.entityName){const a=r.getEntityStructure(e.entityName,e.uiTypePriority)?.attribute;if(a){const g=e.defaultValues?.find(m=>m.attributeName===a);u=g?.value?.value||g?.value}}if(u)return t.find(n=>n.UId===u)}static _getDefaultPages(e){return e?.filter(t=>r._isDefaultPage(t))}static _getNotTypedAddPage(e){return e?.find(t=>r._isAddPage(t)&&!t.UId)}static _getTypedAddPage(e){return e?.find(t=>r._isAddPage(t)&&t.UId)}static _getTypedDefaultPage(e){return e?.find(t=>r._isDefaultPage(t)&&t.UId)}static _getNotTypedDefaultPage(e){return e?.find(t=>r._isDefaultPage(t)&&!t.UId)}static _isDefaultPage(e){return e.isDefault||!e.actions}static _isAddPage(e){return e.actions?.add}static _getDefaultPage(e){const t=r.getEntityStructure(e.entityName,e.uiTypePriority),u=r._getDefaultPages(t?.pages),a=r._getTypedPage(e,u)||r._getNotTypedDefaultPage(u);return a||(console.warn("Default page not found and random page is given instead. Please, check passed options."),t?.pages?.[0])}static _getAddPage(e){const u=r.getEntityStructure(e.entityName,e.uiTypePriority)?.pages,n=r.getPagesForAddAction(u);if(n?.length<=1)return n?.[0];const a=r._getTypedPage(e,n);if(a)return a;const g=r._getNotTypedAddPage(u),m=r._getNotTypedDefaultPage(u);let P=g||m;return P||(console.warn("Add or default page not found and random page is given instead. Please, check options."),console.warn(e),P=u?.[0]),P}static _getEditPage(e){return r._getDefaultPage(e)}static _getGroupedTypedPages(e){const t={};for(const u of e){const{UId:n}=u;n&&(t[n]=t[n]??[],t[n].push(u))}return t}static _getModuleConfig(e){return Object.values(Terrasoft.configuration.ModuleStructure).find(t=>t.cardSchema===e||t.sectionSchema===e||t.pages?.some(u=>u.cardSchema===e))}static getPagesForAddAction(e){if((0,l.isEmpty)(e))return[];const t=r._getGroupedTypedPages(e),u=r._getNotTypedAddPage(e),n=r._getNotTypedDefaultPage(e),a=Object.values(t).map(m=>{const P=r._getTypedAddPage(m);if(P)return P;const p=r._getTypedDefaultPage(m);return p&&u?{...u,...(0,l.pick)(p,["caption","captionLcz","UId"])}:u||p||n});if(!(0,l.isEmpty)(a))return a;const g=u||n;return g?[g]:[]}static getCardSchemaName(e){return e?.cardSchema??e?.cardSchemaName}static getEntityStructure(e,t=d.Auto){let u;return t===d.PreferFreedomUI&&(u=Object.values(Terrasoft.configuration.EntityStructure).find(n=>n.page8X&&n.entitySchemaName===e)),u??Terrasoft.ModuleUtils.getEntityStructureByName(e)}static getRecordLookupValue(e){return typeof e=="string"?e:e?.value}static getPageForActionAsync(e){return(0,c.Z)(function*(){const u={typeColumnValue:yield r._getTypeColumnValue(e),...e};return r.getPageForAction(u)})()}static getPageForAction(e){let t;return e.action===o.ModelInPageAction.Add?t=r._getAddPage(e):t=r._getEditPage(e),t||(t=r._getDefaultPage(e)),t}static getPageSchemaNameForAction(e){return(0,c.Z)(function*(){if(e.entityPageName)return e.entityPageName;const t=yield r.getPageForActionAsync(e);return r.getCardSchemaName(t)})()}static isAngularSchema(e){return(0,c.Z)(function*(){return yield r._getSchemaRequire(e),(yield r._getSchemaRequire(e+"Structure")).type===r._angularSchemaType})()}static generateChainModuleId(e){return y.generateUnique(e+"_chain")}static getValuePairs(e){return e&&e.map(t=>{let u,n;const a=t.value;return a?.value?(n=a.value,u=a.displayValue):n=a,{name:t.attributeName,value:n,displayValue:u}})}static getModuleName(e,t){return(0,c.Z)(function*(){if(!e&&!t)throw new o.ArgumentEmptyException("schemaName");return e&&!t&&(t=yield r._getModuleName(e)),t})()}static getEditPageModuleName(e,t=d.Auto){return r.getEntityStructure(e,t)?.cardModuleName}static hasEntityEditPage(e){return(0,c.Z)(function*(){const t=yield r.getPageForActionAsync(e);return Boolean(t)})()}static isSectionEditPage(e){return Boolean(r._getSectionEditPageModuleName(e))}static isAngularListPage(e){return(0,c.Z)(function*(){return(yield r.isAngularSchema(e))?r._isSchemaInheritedFrom("BaseGridSectionTemplate",e):!1})()}static isAngularRouting(e){return r._angularModules.includes(e)}static getSectionEntityName(e){return r._getModuleStructureBySectionSchema(e)?.entitySchemaName}static getPageEntitySchemaName(e){const t=this._getModuleConfig(e);return t?.entitySchemaName?t.entitySchemaName:Object.values(Terrasoft.configuration.EntityStructure).find(n=>n.pages?.some(a=>a.cardSchema===e))?.entitySchemaName}static getEntityPageStructure(e){return Object.values(Terrasoft.configuration.EntityStructure).find(u=>u.pages.find(n=>n.cardSchema===e))?.pages?.find(u=>u.cardSchema===e)}static isMiniPage(e){const t=r.getEntityPageStructure(e);if(t){const u=t.schemaGroup==="MiniPage";return Promise.resolve(u)}return r._isSchemaInheritedFrom("BaseMiniPageTemplate",e)}static getSysModuleId(e){return(r._getModuleConfig(e)||Object.values(Terrasoft.configuration.ModuleStructure).find(u=>u.sectionModule===e))?.moduleId}}r._angularSchemaType=9,r._angularModules=["PageSchemaViewModule","CardSchemaViewModule","HomePage","Desktop","SectionSchemaViewModule"]},8239:(h,S,s)=>{s.d(S,{Z:()=>o});function c(l,d,f,y,r,i,e){try{var t=l[i](e),u=t.value}catch(n){f(n);return}t.done?d(u):Promise.resolve(u).then(y,r)}function o(l){return function(){var d=this,f=arguments;return new Promise(function(y,r){var i=l.apply(d,f);function e(u){c(i,y,r,e,t,"next",u)}function t(u){c(i,y,r,e,t,"throw",u)}e(void 0)})}}}}]);
