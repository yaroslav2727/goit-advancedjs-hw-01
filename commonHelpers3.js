import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as i}from"./assets/vendor-78be7656.js";const o="feedback-form-state",r=document.querySelector(".feedback-form");let t=l(r);r.addEventListener("input",i(n,500));r.addEventListener("submit",m);function n(e){e.target.nodeName==="INPUT"&&(t.email=e.target.value),e.target.nodeName==="TEXTAREA"&&(t.message=e.target.value),localStorage.setItem(o,JSON.stringify(t))}function m(e){if(e.preventDefault(),!t.email||!t.message){alert("Fill in every field, please.");return}console.log(t),localStorage.removeItem(o),t=l(e.currentTarget)}function l(e,s=o){const a=JSON.parse(localStorage.getItem(s))??{email:"",message:""};return e.elements.email.value=a.email,e.elements.message.value=a.message,a}
//# sourceMappingURL=commonHelpers3.js.map
