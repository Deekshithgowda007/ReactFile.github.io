"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[642],{73642:(e,n,a)=>{a.r(n),a.d(n,{default:()=>p});var t=a(32735);const s=JSON.parse('{"u2":"@ohif/extension-dicom-pdf"}').u2,r=`${s}.sopClassHandlerModule.dicom-pdf`;var i=a(62771);const{ImageSet:c}=i.classes,l=Object.values({ENCAPSULATED_PDF:"1.2.840.10008.5.1.4.1.1.104.1"});function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}const d=t.lazy((()=>a.e(295).then(a.bind(a,56295)))),u=e=>t.createElement(t.Suspense,{fallback:t.createElement("div",null,"Loading...")},t.createElement(d,e)),p={id:s,getViewportModule(e){let{servicesManager:n,extensionManager:a}=e;return[{name:"dicom-pdf",component:e=>t.createElement(u,o({servicesManager:n,extensionManager:a},e))}]},getSopClassHandlerModule:function(e){let{servicesManager:n,extensionManager:a}=e;return[{name:"dicom-pdf",sopClassUids:l,getDisplaySetsFromSeries:e=>((e,n,a)=>{const t=a.getActiveDataSource()[0];return e.map((e=>{const{Modality:n,SOPInstanceUID:a,EncapsulatedDocument:s}=e,{SeriesDescription:c="PDF",MIMETypeOfEncapsulatedDocument:o}=e,{SeriesNumber:d,SeriesDate:u,SeriesInstanceUID:p,StudyInstanceUID:m,SOPClassUID:S}=e,g=t.retrieve.directURL({instance:e,tag:"EncapsulatedDocument",defaultType:o||"application/pdf",singlepart:"pdf"});return{Modality:n,displaySetInstanceUID:i.utils.guid(),SeriesDescription:c,SeriesNumber:d,SeriesDate:u,SOPInstanceUID:a,SeriesInstanceUID:p,StudyInstanceUID:m,SOPClassHandlerId:r,SOPClassUID:S,referencedImages:null,measurements:null,pdfUrl:g,instances:[e],thumbnailSrc:t.retrieve.directURL({instance:e,defaultPath:"/thumbnail",defaultType:"image/jpeg",tag:"Absent"}),isDerivedDisplaySet:!0,isLoaded:!1,sopClassUids:l,numImageFrames:0,numInstances:1,instance:e}}))})(e,0,a)}]}}}}]);
//# sourceMappingURL=642.bundle.3f3bd1a4ec462a4ddede.js.map