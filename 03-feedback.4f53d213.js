function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):a}function N(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function O(){var e=g();if(N(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,i-(e-l)):n}(e))}function T(e){return f=void 0,p&&o?y(e):(o=r=void 0,a)}function h(){var e=g(),n=N(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form")};let S={};y.form.addEventListener("input",e(t)((function(e){const t=localStorage.getItem("feedback-form-state",JSON.stringify(S));console.log(t),S=null===t?{}:JSON.parse(localStorage.getItem("feedback-form-state")),S[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),y.form.addEventListener("submit",(function(e){e.preventDefault();[...e.target.elements].filter((e=>"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)).every((e=>""!==e.value))?(console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),y.form.reset()):alert("Fill in the fields")})),function(){const{email:e,message:t}=y.form,n=JSON.parse(localStorage.getItem("feedback-form-state"));if(n)for(const e in n)y.form[e].value=n[e]||""}();
//# sourceMappingURL=03-feedback.4f53d213.js.map
