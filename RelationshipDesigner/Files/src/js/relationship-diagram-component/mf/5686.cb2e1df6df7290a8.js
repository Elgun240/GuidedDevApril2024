(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[5686],{17581:(_,s,n)=>{n.r(s),n.d(s,{RemoteEntryLoader:()=>l,createGlobalRemoteEntryLoader:()=>p,getGlobalRemoteEntryLoader:()=>u});var i=n(8239),y=n(75378);function m(a){return import(a)}class l{constructor(e){this._sharingContext=e,this._loadedContainers={},this._initializedRemotes={},this._initializedShareScopes={}}_lookupExposedModule(e,t){var r=this;return(0,i.Z)(function*(){return(yield r._loadedContainers[e].get(t))()})()}_initRemote(e,t,r){var o=this;return(0,i.Z)(function*(){o._initializedRemotes[t]||(o._initializedShareScopes[r]||(yield o._sharingContext.initSharing(r),o._initializedShareScopes[r]=!0),yield e.init(o._sharingContext.shareScopes[r]),o._initializedRemotes[t]=!0)})()}_loadRemoteScriptEntry(e,t,r){return new Promise((o,c)=>{if(this._loadedContainers[t]){o();return}const d=document.createElement("script");d.src=e,d.onerror=c,d.onload=()=>{const h=window[t];this._initRemote(h,t,r),this._loadedContainers[t]=h,o()},document.body.appendChild(d)})}_loadRemoteModuleEntry(e,t){var r=this;return(0,i.Z)(function*(){if(r._loadedContainers[e])return Promise.resolve();yield m(e).then(o=>{r._initRemote(o,e,t),r._loadedContainers[e]=o})})()}load(e){var t=this;return(0,i.Z)(function*(){let r;return e.remoteEntryType===y.RemoteEntryType.Module?(yield t._loadRemoteModuleEntry(e.remoteEntry,e.shareScope),r=e.remoteEntry):(yield t._loadRemoteScriptEntry(e.remoteEntry,e.remoteName,e.shareScope),r=e.remoteName),t._lookupExposedModule(r,e.exposedModule)})()}}function u(){return window.creatio?._remoteEntryLoader}function p(a){var e;if(u())throw new Error("Global RemoteEntryLoader instance already created");const t=new l(a);return((e=window).creatio??(e.creatio={}))._remoteEntryLoader=t,t}}}]);
