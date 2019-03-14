!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=fabric},function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o);function r(e){e.forEachObject(e=>{e.selectable=!0}),e.defaultCursor="default",e.hoverCursor="move"}function s(e,t){const n=document.getElementById("labelNamePopUp");n.style.display="block";const o=document.getElementById("canvas-wrapper").getBoundingClientRect(),i=o.top,r=o.left;n.style.top=`${t+i}px`,n.style.left=`${e+r}px`}function a(){document.getElementById("labelNamePopUp").style.display="none"}const l={},c={inProgress:!1};let u=null,d=null,g=0;function f(e,t){u=e,d=t,c.inProgress=!0}function h(){const e=document.getElementById("label-title").value;r(d),a(),u.set("id",g),g+=1,l[u[u.id]]=e}function m(e){e.discardActiveObject(),e.renderAll(),e.forEachObject(e=>{e.selectable=!1}),e.defaultCursor="crosshair",e.hoverCursor="crosshair"}let p=null,b=!1,w=!1;const y={};function x(e){(p=e).backgroundImage&&(b=!0,m(p),p.discardActiveObject()),e.on("mouse:down",()=>{!function(){if(b){w=!0;const e=p.getPointer(p.e);y.origX=e.x,y.origY=e.y,y.rect=new i.a.Rect(function(e,t){return{left:e.origX,top:e.origY,width:t.x-e.origX,height:t.y-e.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)",shapeName:"bndBoxTemp"}}(y,e)),p.add(y.rect)}}()}),e.on("mouse:move",e=>{!function(e){if(!w)return;const t=p.getPointer(e.e);y.origX>t.x&&y.rect.set({left:Math.abs(t.x)}),y.origY>t.y&&y.rect.set({top:Math.abs(t.y)}),y.rect.set({width:Math.abs(y.origX-t.x)}),y.rect.set({height:Math.abs(y.origY-t.y)}),p.renderAll()}(e)}),e.on("mouse:up",e=>{!function(e){if(w){b=!1,w=!1,y.rect.setCoords(),y.rect.selectable=!1,r(p);const t=p.getPointer(e.e);f(y.rect,p),s(t.x,t.y)}}(e)})}const v={};function C(e,t,n){const o=n.getPointer(t.e);return{radius:3,fill:"#ffffff",stroke:"#333333",strokeWidth:.5,left:o.x,top:o.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"tempCircle",circleId:e,objectCaching:!1}}function P(e,t){return{radius:3,fill:"blue",stroke:"#333333",strokeWidth:.5,left:t.x,top:t.y,selectable:!0,hasBorders:!1,hasControls:!1,originX:"center",originY:"center",shapeName:"point",objectCaching:!1,circleId:e}}v.newPolygon={stroke:"rgba(255,0,0)",strokeWidth:1.75,fill:"rgba(237, 237, 237, 0.01)",perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygon",selectable:!1,evented:!0,objectCaching:!1},v.newTempPolygon={stroke:"#333333",strokeWidth:.8,fill:"#cccccc",opacity:.3,selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},v.newFinalPolygon={perPixelTargetFind:!0,hasBorders:!1,hasControls:!1,shapeName:"polygonGrp",selectable:!0,subTargetCheck:!0},v.newLine={strokeWidth:1.1,fill:"#999999",stroke:"#999999",class:"line",originX:"center",originY:"center",selectable:!1,hasBorders:!1,hasControls:!1,evented:!1,objectCaching:!1},v.firstCircle={fill:"red",shapeName:"firstCircle"},v.newCircle=C,v.existingPolygonCircle=P;let j,_,k=null,O=[],A=[],B=!0,N=null,L=!1,E=0;function W(){A.forEach(e=>{k.remove(e)}),k.remove(L).remove(N)}function I(){O[0]&&(O.forEach(e=>{k.remove(e)}),W(),O=[],A=[],L=null,N=null,E=0)}function M(e){e.target&&e.target.shapeName&&"firstCircle"===e.target.shapeName&&function(e){const t=[];O.forEach(e=>{t.push({x:e.left,y:e.top}),k.remove(e)}),W();const n=new i.a.Polygon(t,v.newPolygon);k.add(n),N=null,L=null,B=!1;const o=k.getPointer(e.e);f(n,k),s(o.x,o.y)}(e),B&&function(e){const t=k.getPointer(e.e),n=new i.a.Circle(v.newCircle(E,e,k));E+=1,0===O.length&&n.set(v.firstCircle);let o=[t.x,t.y,t.x,t.y];const r=new i.a.Line(o,v.newLine);if(L){(o=L.get("points")).push({x:t.x,y:t.y});const e=new i.a.Polygon(o,v.newTempPolygon);k.remove(L),k.add(e),L=e,k.renderAll()}else{const e=[{x:t.x,y:t.y}],n=new i.a.Polygon(e,v.newTempPolygon);L=n,k.add(n)}N=r,O.push(n),A.push(r),k.add(n),k.selection=!1}(e)}function T(e){k=e,B=!0,I(),k.discardActiveObject(),m(k),e.on("mouse:down",e=>{(!e.target||e.target&&"tempCircle"!==e.target.shapeName)&&M(e)}),e.on("object:moving",e=>{!function(e){L.points[e.target.circleId]={x:e.target.getCenterPoint().x,y:e.target.getCenterPoint().y}}(e)}),e.on("mouse:move",e=>{!function(e){if(N&&"line"===N.class){const t=k.getPointer(e.e);N.set({x2:t.x,y2:t.y});const n=L.get("points");n[O.length]={x:t.x,y:t.y},L.set({points:n}),k.renderAll()}k.renderAll()}(e)}),e.on("mouse:over",t=>{t.target&&t.target.selectable?e.hoverCursor="move":e.hoverCursor="crosshair"})}let U,X=[],Y=[];function $(e,t){j=e,_=t,e.discardActiveObject(),function(){let e=0;_.get("points").forEach(t=>{const n=new i.a.Circle(v.existingPolygonCircle(e,t));j.add(n),X.push(n),e+=1})}()}function H(){let e=[];const t=new i.a.Polygon([],v.newPolygon);j.add(t),j.discardActiveObject(),U=_.calcTransformMatrix();const n=_.get("points").map(e=>new i.a.Point(e.x-_.pathOffset.x,e.y-_.pathOffset.y)).map(e=>i.a.util.transformPoint(e,U));let o=0;n.map(t=>{const n=new i.a.Circle(v.existingPolygonCircle(o,t));j.add(n),X.push(n),e.push({x:n.left-1,y:n.top-1}),o+=1}),t.set({id:_.id,selectable:!0}),j.remove(_),(_=t).set("points",e);let r=_._calcDimensions();_.set({left:r.left,top:r.top,height:r.height,width:r.width,pathOffset:{x:r.left+r.width/2,y:r.top+r.height/2}}),_.setCoords(),j.renderAll()}function R(){X.forEach(e=>{j.remove(e),Y.push(e)}),j.renderAll(),X=[]}let S=!1,F=!1,D=null,z=!1;function G(e){e.on("mouse:down",e=>{}),e.on("mouse:up",t=>{F?(H(),F=!1,S=!0):(!t.target&&S&&(R(),S=!1,D=null),t.target&&"polygon"===t.target.shapeName&&t.target.id!==D&&(console.log("sadasda"),S=!0,$(e,t.target),D=t.target.id,z&&(R(),H(),z=!1)))}),e.on("object:moving",e=>{e.target&&"polygon"===e.target.shapeName&&(z=!0,S&&(S=!1,R(),F=!0)),e.target&&"point"===e.target.shapeName&&function(e){const{left:t}=e.target,{top:n}=e.target,o=e.target;_.points[o.circleId]={x:t,y:n};let i=_._calcDimensions();console.log(i),_.set({left:i.left,top:i.top,height:i.height,width:i.width,pathOffset:{x:i.left+i.width/2,y:i.top+i.height/2}}),_.setCoords(),j.renderAll()}(e)}),e.on("mouse:over",t=>{t.target&&t.target._objects&&(t.target._objects[0].set("fill","rgba(255,0,0,0.2)"),e.renderAll())}),e.on("mouse:out",t=>{t.target&&t.target._objects&&("bndBox"===t.target.shapeName?t.target._objects[0].set("fill","rgba(255,0,0,0"):"polygon"===t.target.shapeName&&t.target._objects[0].set("fill","rgba(255,0,0,0.01)"),e.renderAll())})}function q(e){e.__eventListeners&&(e.__eventListeners["mouse:down"]=[],e.__eventListeners["mouse:over"]=[],e.__eventListeners["mouse:out"]=[],e.__eventListeners["mouse:move"]=[],e.__eventListeners["mouse:up"]=[],e.__eventListeners["object:moving"]=[])}let J=null,K=!1;function Q(){q(J),x(J),K=!1}function V(){q(J),T(J),K=!1}function Z(){J.remove(J.getActiveObject())}function ee(){K||(q(J),r(J),G(J),K=!0)}const te={uploaded:!1,name:null},ne={};let oe=null;function ie(e,t){t?function(e,t){oe.setWidth(t.width),oe.setHeight(t.height),i.a.Image.fromURL(e.src,e=>{oe.setBackgroundImage(e,oe.renderAll.bind(oe),{scaleX:oe.width/e.width,scaleY:oe.height/e.height})})}(e,t):function(e){oe.setWidth(e.width),oe.setHeight(e.height),oe.setBackgroundColor({source:e.src},()=>{oe.renderAll()})}(e)}function re(e){const t={},n=ne.maximumCanvasWidth/e.width;return t.width=ne.maximumCanvasWidth,t.height=e.height*n,t}function se(){te.uploaded=!0;const e=this;if(ne.maximumCanvasHeight<e.height){let t=function(e){const t={},n=ne.maximumCanvasHeight/e.height;return t.height=ne.maximumCanvasHeight,t.width=e.width*n,t}(e);ne.maximumCanvasWidth<t.width&&(t=re(t)),ie(e,t)}else if(ne.maximumCanvasWidth<e.width){ie(e,re(e))}else ie(e)}function ae(e){const t=new Image;t.src=e.target.result,t.onload=se}function le(e){oe=e,ne.maximumCanvasHeight=window.innerHeight-54,ne.maximumCanvasWidth=window.innerWidth-110}function ce(e){return function e(t){let n="";return Object.keys(t).forEach(o=>{"object"==typeof t[o]?n+=`<${o}>${e(t[o])}</${o}>`:n+=`<${o}>${t[o]}</${o}>`}),n}(e)}let ue=null;function de(e){const t=document.createElement("a"),n=new Blob([e],{type:"text/plain"});return t.setAttribute("href",window.URL.createObjectURL(n)),t.setAttribute("download",`${new RegExp("^([^.]+)").exec(te.name)[0]}.xml`),t.dataset.downloadurl=["text/plain",t.download,t.href].join(":"),t.draggable=!0,t.classList.add("dragout"),t}function ge(){if(ue.backgroundImage){!function(e){de(e).click()}(ce(function(e,t){const n={};return n.annotations=function(e,t){return{folder:"Unknown",filename:t.name,path:"Unknown",source:{database:"Unknown"},size:{width:e.getWidth(),height:e.getHeight(),depth:1},segmented:0}}(e,t),n.annotations.object=function(e){let t={};return e.forEachObject(e=>{const n=e._objects[0],o=e._objects[1].text;t={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),t}(e),n}(ue,te)))}}function fe(){h(),ee()}function he(){c.inProgress&&(a(),d.remove(u),c.inProgress=!1,c.inProgress=!1)}function me(){I(),he()}function pe(e){me(),e&&e()}function be(e){me(),function(e){if(e.files&&e.files[0]){const t=new FileReader;te.name=e.files[0].name,t.onload=ae,t.readAsDataURL(e.files[0])}}(e)}!function(){const e=new i.a.Canvas("c",{selection:!1});i.a.Object.prototype.transparentCorners=!1,J=e,le(e),function(e){ue=e}(e)}(),function(){window.createNewBndBox=pe.bind(this,Q),window.createNewPolygon=pe.bind(this,V),window.removeShape=pe.bind(this,Z),window.downloadXML=pe.bind(this,ge),window.cancel=pe.bind(this,ee),window.uploadImage=be,window.labelShape=fe}()}]);