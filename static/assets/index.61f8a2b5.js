import{f as e}from"./vendor.519c7c38.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const o=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,c)=>{const i=new URL(e,o);if(self[t].moduleMap[i])return n(self[t].moduleMap[i]);const s=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){c(new Error(`Failed to import: ${e}`)),a(d)},onload(){n(self[t].moduleMap[i]),a(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");const t={apiKey:"AIzaSyChwv4ULSZFHYI3dS1xs_by7eFDfb8I2HE",authDomain:"test-4e071.firebaseapp.com",projectId:"test-4e071",storageBucket:"test-4e071.appspot.com",messagingSenderId:"251598311975",appId:"1:251598311975:web:0216503ce4960f768d3402"};e.apps.length||e.initializeApp(t);const n=e.firestore(),o=new RTCPeerConnection({iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]}],iceCandidatePoolSize:10}),a=document.getElementById("callButton"),c=document.getElementById("callInput"),i=document.getElementById("answerButton"),s=document.getElementById("hangupButton"),d=document.getElementById("txt_send"),l=document.getElementById("btn_send"),r=document.getElementById("div_connect_status"),m=document.getElementById("sensors_ui"),u=document.getElementById("start_demo");var p,g,v;(p=o.createDataChannel("sendDataChannel",null)).onopen=h,p.onclose=h,o.ondatachannel=function(e){console.log("Receive Channel Callback"),(g=e.channel).onmessage=w,g.onopen=b,g.onclose=b};const y=new URLSearchParams(window.location.search),f=Object.fromEntries(y.entries());function w(e){v.send(`${e.data}`),console.log(`Received Message : ${e.data}`)}function h(){let e=p.readyState;console.log("Send channel state is: "+e),r.innerHTML="open"===e?"connected to server":"disconnected to server"}function b(){let e=g.readyState;console.log("Receive channel state is: "+e)}console.log(f),l.onclick=function(e){let t=d.value;p.send(t),console.log("Sent Data: "+t)},a.onclick=async()=>{const e=n.collection("calls").doc(),t=e.collection("offerCandidates"),a=e.collection("answerCandidates");c.value=e.id;let i=document.createElement("img");i.src=`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=https://atosystem.github.io/testcontrol/?connect_code=${e.id}`,m.appendChild(i),o.onicecandidate=e=>{e.candidate&&t.add(e.candidate.toJSON())};const d=await o.createOffer();await o.setLocalDescription(d);const l={sdp:d.sdp,type:d.type};await e.set({offer:l}),e.onSnapshot((e=>{const t=e.data();if(!o.currentRemoteDescription&&(null==t?void 0:t.answer)){const e=new RTCSessionDescription(t.answer);o.setRemoteDescription(e)}})),a.onSnapshot((e=>{console.log("Candidate answered"),e.docChanges().forEach((e=>{if("added"===e.type){const t=new RTCIceCandidate(e.doc.data());o.addIceCandidate(t)}}))})),s.disabled=!1};const I=async()=>{const e=c.value,t=n.collection("calls").doc(e),a=t.collection("answerCandidates"),i=t.collection("offerCandidates");o.onicecandidate=e=>{e.candidate&&a.add(e.candidate.toJSON())};const s=(await t.get()).data().offer;await o.setRemoteDescription(new RTCSessionDescription(s));const d=await o.createAnswer();await o.setLocalDescription(d);const l={type:d.type,sdp:d.sdp};await t.update({answer:l}),i.onSnapshot((e=>{e.docChanges().forEach((e=>{if("added"===e.type){let t=e.doc.data();o.addIceCandidate(new RTCIceCandidate(t))}}))}))};i.onclick=I,"connect_code"in f?(c.value=f.connect_code,c.disabled=!0,a.disabled=!0,i.disabled=!0,r.innerHTML="connecting to server",I()):"localhost"===location.hostname||"127.0.0.1"===location.hostname?(console.log("Using localhost"),r.innerHTML="Please Start the server",u.classList.add("disabled"),m.innerHTML="",i.disabled=!0,c.disabled=!1,(v=new WebSocket("ws://localhost:3005")).onopen=()=>{console.log("[ws]open connection")},v.onclose=()=>{console.log("[ws]close connection")}):r.innerHTML="Free mode";var L=[0,0,0];function _(e){C("Orientation_a",e.alpha),C("Orientation_b",e.beta),C("Orientation_g",e.gamma),L=[e.alpha,e.beta,e.gamma],E()}function E(){let e=document.getElementById("num-observed-events"),t=parseInt(e.innerHTML);e.innerHTML=t+1}function C(e,t,n=10){null!=t&&(document.getElementById(e).innerHTML=t.toFixed(n))}function R(e){let t="";t+=`${e.accelerationIncludingGravity.x} ${e.accelerationIncludingGravity.y} ${e.accelerationIncludingGravity.z} `,t+=`${e.acceleration.x} ${e.acceleration.y} ${e.acceleration.z} `,t+=`${e.rotationRate.alpha} ${e.rotationRate.beta} ${e.rotationRate.gamma} `,t+=`${L[0]} ${L[1]} ${L[2]}`,p.send(`${t}`),C("Accelerometer_gx",e.accelerationIncludingGravity.x),C("Accelerometer_gy",e.accelerationIncludingGravity.y),C("Accelerometer_gz",e.accelerationIncludingGravity.z),C("Accelerometer_x",e.acceleration.x),C("Accelerometer_y",e.acceleration.y),C("Accelerometer_z",e.acceleration.z),C("Accelerometer_i",e.interval,2),C("Gyroscope_z",e.rotationRate.alpha),C("Gyroscope_x",e.rotationRate.beta),C("Gyroscope_y",e.rotationRate.gamma),E()}let S=!1;u.onclick=function(e){e.preventDefault(),DeviceMotionEvent&&"function"==typeof DeviceMotionEvent.requestPermission&&DeviceMotionEvent.requestPermission(),S?(window.removeEventListener("devicemotion",R),window.removeEventListener("deviceorientation",_),u.innerHTML="Start demo",u.classList.add("btn-success"),u.classList.remove("btn-danger"),S=!1):(window.addEventListener("devicemotion",R),window.addEventListener("deviceorientation",_),document.getElementById("start_demo").innerHTML="Stop demo",u.classList.remove("btn-success"),u.classList.add("btn-danger"),S=!0)};