import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as s}from"./assets/vendor-c4bdc8af.js";const l=document.querySelector(".feedback-form"),{email:t,message:a}=l.elements,r="feedback-form-state";l.addEventListener("input",s(m,500));l.addEventListener("submit",i);let e=JSON.parse(localStorage.getItem(r))||{};n();function n(){t.value=e.email||"",a.value=e.message||""}function m(){e={email:t.value,message:a.value},localStorage.setItem(r,JSON.stringify(e))}function i(o){if(o.preventDefault(),console.log({email:t.value,message:a.value}),t.value===""||a.value==="")return alert("Please fill all fields");localStorage.removeItem(r),o.currentTarget.reset(),e={}}
//# sourceMappingURL=commonHelpers3.js.map
