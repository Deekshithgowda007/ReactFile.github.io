"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[799],{91799:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(32735),s=n(60216),a=n.n(s),i=n(62771),o=n(28619),l=n(21572),c=n(57270),u=n(43418),m=n(77331);function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const{formatDate:p}=i.utils;function E(e){const{displaySets:t,viewportIndex:n,viewportLabel:s,servicesManager:a,extensionManager:E,viewportOptions:f}=e,{t:S}=(0,l.$G)("Common"),{measurementService:v,cornerstoneViewportService:g,viewportGridService:b}=a.services,w=t[0],[I,D]=(0,u.I)(),[h,x]=(0,r.useState)(!1),[y,N]=(0,r.useState)(null),[V,T]=(0,r.useState)(null),{trackedSeries:k}=I.context,M=f.viewportId,{SeriesDate:O,SeriesDescription:R,SeriesInstanceUID:U,SeriesNumber:A}=w,{PatientID:C,PatientName:P,PatientSex:_,PatientAge:j,SliceThickness:F,SpacingBetweenSlices:L,StudyDate:W,ManufacturerModelName:G}=w.images[0],q=(0,r.useCallback)((()=>{const e=g.getCornerstoneViewportByIndex(n);if(e instanceof m.BaseVolumeViewport){const t=e?.getCurrentImageId();if(!t)return void(h&&x(!1))}k.includes(U)!==h&&x(!h)}),[h,I,n,U]),B=(0,r.useCallback)((e=>{e.detail.element!==V&&(e.detail.element?.addEventListener(m.Enums.Events.VOLUME_VIEWPORT_NEW_VOLUME,q),T(e.detail.element))}),[q,V]),$=(0,r.useCallback)((()=>{V?.removeEventListener(m.Enums.Events.VOLUME_VIEWPORT_NEW_VOLUME,q)}),[q,V]);(0,r.useEffect)(q,[q]),(0,r.useEffect)((()=>{const{unsubscribe:e}=g.subscribe(g.EVENTS.VIEWPORT_DATA_CHANGED,(e=>{e.viewportIndex===n&&q()}));return()=>{e()}}),[q,n]),(0,r.useEffect)((()=>h?(c.annotation.config.style.setViewportToolStyles(M,{global:{lineDash:""}}),void g.getRenderingEngine().renderViewport(M)):(c.annotation.config.style.setViewportToolStyles(M,{global:{lineDash:"4,4"}}),g.getRenderingEngine().renderViewport(M),()=>{c.annotation.config.style.setViewportToolStyles(M,{})})),[h]),(0,r.useEffect)((()=>{const e=v.EVENTS.MEASUREMENT_ADDED,t=v.EVENTS.RAW_MEASUREMENT_ADDED,r=[];return[e,t].forEach((e=>{r.push(v.subscribe(e,(e=>{let{source:t,measurement:r}=e;const{activeViewportIndex:s}=b.getState();if(n===s){const{referenceStudyUID:e,referenceSeriesUID:t}=r;D("SET_DIRTY",{SeriesInstanceUID:t}),D("TRACK_SERIES",{viewportIndex:n,StudyInstanceUID:e,SeriesInstanceUID:t})}})).unsubscribe)})),()=>{r.forEach((e=>{e()}))}}),[v,D,n,b]);return r.createElement(r.Fragment,null,r.createElement(o.uY,{onDoubleClick:e=>{e.stopPropagation(),e.preventDefault()},useAltStyling:h,onArrowsClick:e=>function(e){const t=function(e,t,n,r){const{measurementService:s,viewportGridService:a}=t.services,i=s.getMeasurements(),{activeViewportIndex:o,viewports:l}=a.getState(),{displaySetInstanceUIDs:c}=l[o],{trackedSeries:u}=r.context,m=i.filter((e=>u.includes(e.referenceSeriesUID)&&c.includes(e.displaySetInstanceUID)));if(!m.length)return;const d=m.length,p=m.map((e=>e.uid));let E=p.findIndex((e=>e===n));return-1===E?E=0:"left"===e?(E--,E<0&&(E=d-1)):"right"===e&&(E++,E===d&&(E=0)),p[E]}(e,a,y,I);t&&(N(t),v.jumpToMeasurement(n,t))}(e),getStatusComponent:()=>function(e){const t=e?"status-tracked":"status-untracked";return r.createElement("div",{className:"relative"},r.createElement(o.u,{position:"bottom-left",content:r.createElement("div",{className:"flex py-2"},r.createElement("div",{className:"flex pt-1"},r.createElement(o.JO,{name:"info-link",className:"w-4 text-primary-main"})),r.createElement("div",{className:"flex ml-4"},r.createElement("span",{className:"text-base text-common-light"},e?r.createElement(r.Fragment,null,"Series is",r.createElement("span",{className:"font-bold text-white"}," tracked")," and can be viewed ",r.createElement("br",null)," in the measurement panel"):r.createElement(r.Fragment,null,"Measurements for",r.createElement("span",{className:"font-bold text-white"}," untracked "),"series ",r.createElement("br",null)," will not be shown in the ",r.createElement("br",null)," measurements panel"))))},r.createElement(o.JO,{name:t,className:"text-primary-light"})))}(h),studyData:{label:s,studyDate:p(O)||p(W)||S("NoStudyDate"),currentSeries:A,seriesDescription:R,patientInformation:{patientName:P?i.default.utils.formatPN(P):"",patientSex:_||"",patientAge:j||"",MRN:C||"",thickness:F?`${parseFloat(F).toFixed(2)}mm`:"",spacing:void 0!==L?`${parseFloat(L).toFixed(2)}mm`:"",scanner:G||""}}}),r.createElement("div",{className:"relative flex flex-row w-full h-full overflow-hidden"},(()=>{const{component:t}=E.getModuleEntry("@ohif/extension-cornerstone.viewportModule.cornerstone");return r.createElement(t,d({},e,{onElementEnabled:B,onElementDisabled:$}))})()))}E.propTypes={displaySets:a().arrayOf(a().object.isRequired).isRequired,viewportIndex:a().number.isRequired,dataSource:a().object,children:a().node,customProps:a().object},E.defaultProps={customProps:{}};const f=E}}]);
//# sourceMappingURL=799.bundle.07f715243b38e8b0e0ba.js.map