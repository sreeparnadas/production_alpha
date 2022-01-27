"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[531],{7531:(N,A,r)=>{r.d(A,{Nt:()=>k,c:()=>F});var u=r(3191),d=r(925),n=r(5e3),f=r(3075),_=r(508),p=r(7322),x=r(7579),b=r(515);const y=(0,d.i$)({passive:!0});let I=(()=>{class i{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return b.E;const t=(0,u.fI)(e),s=this._monitoredElements.get(t);if(s)return s.subject;const o=new x.x,l="cdk-text-field-autofilled",c=h=>{"cdk-text-field-autofill-start"!==h.animationName||t.classList.contains(l)?"cdk-text-field-autofill-end"===h.animationName&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!1}))):(t.classList.add(l),this._ngZone.run(()=>o.next({target:h.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",c,y),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:o,unlisten:()=>{t.removeEventListener("animationstart",c,y)}}),o}stopMonitoring(e){const t=(0,u.fI)(e),s=this._monitoredElements.get(t);s&&(s.unlisten(),s.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return i.\u0275fac=function(e){return new(e||i)(n.LFG(d.t4),n.LFG(n.R0b))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),C=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[[d.ud]]}),i})();const w=new n.OlP("MAT_INPUT_VALUE_ACCESSOR"),H=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let R=0;const T=(0,_.FD)(class{constructor(i,a,e,t){this._defaultErrorStateMatcher=i,this._parentForm=a,this._parentFormGroup=e,this.ngControl=t}});let k=(()=>{class i extends T{constructor(e,t,s,o,l,c,h,D,S,E){super(c,o,l,s),this._elementRef=e,this._platform=t,this._autofillMonitor=D,this._formField=E,this._uid="mat-input-"+R++,this.focused=!1,this.stateChanges=new x.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(v=>(0,d.qK)().has(v));const g=this._elementRef.nativeElement,M=g.nodeName.toLowerCase();this._inputValueAccessor=h||g,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&S.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",v=>{const m=v.target;!m.value&&0===m.selectionStart&&0===m.selectionEnd&&(m.setSelectionRange(1,1),m.setSelectionRange(0,0))})}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===M,this._isTextarea="textarea"===M,this._isInFormField=!!E,this._isNativeSelect&&(this.controlType=g.multiple?"mat-native-select-multiple":"mat-native-select")}get disabled(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled}set disabled(e){this._disabled=(0,u.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){var e,t,s,o;return null!==(o=null!==(e=this._required)&&void 0!==e?e:null===(s=null===(t=this.ngControl)||void 0===t?void 0:t.control)||void 0===s?void 0:s.hasValidator(f.kI.required))&&void 0!==o&&o}set required(e){this._required=(0,u.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,d.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,u.Ig)(e)}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}ngDoCheck(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckPlaceholder(){var e,t;const s=(null===(t=null===(e=this._formField)||void 0===e?void 0:e._hideControlPlaceholder)||void 0===t?void 0:t.call(e))?null:this.placeholder;if(s!==this._previousPlaceholder){const o=this._elementRef.nativeElement;this._previousPlaceholder=s,s?o.setAttribute("placeholder",s):o.removeAttribute("placeholder")}}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_validateType(){H.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.SBq),n.Y36(d.t4),n.Y36(f.a5,10),n.Y36(f.F,8),n.Y36(f.sg,8),n.Y36(_.rD),n.Y36(w,10),n.Y36(I),n.Y36(n.R0b),n.Y36(p.G_,8))},i.\u0275dir=n.lG2({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:12,hostBindings:function(e,t){1&e&&n.NdJ("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(n.Ikx("disabled",t.disabled)("required",t.required),n.uIk("id",t.id)("data-placeholder",t.placeholder)("name",t.name||null)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required),n.ekj("mat-input-server",t._isServer)("mat-native-select-inline",t._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[n._Bn([{provide:p.Eo,useExisting:i}]),n.qOj,n.TTD]}),i})(),F=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({providers:[_.rD],imports:[[C,p.lN,_.BQ],C,p.lN]}),i})()}}]);