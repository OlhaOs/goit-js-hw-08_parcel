function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,m=Math.min,p=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function E(e){return c=e,u=setTimeout(S,t),l?y(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function S(){var e=p();if(x(e))return j(e);u=setTimeout(S,function(e){var n=t-(e-f);return d?m(n,i-(e-c)):n}(e))}function j(e){return u=void 0,v&&r?y(e):(r=o=void 0,a)}function O(){var e=p(),n=x(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return E(f);if(d)return u=setTimeout(S,t),y(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=b(t)||0,g(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},O.flush=function(){return void 0===u?a:j(p())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={formEl:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),inputEl:document.querySelector(".feedback-form input")};let E={};function x(e){E[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(E))}y.formEl.addEventListener("submit",(function(e){e.preventDefault();const t=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(t),y.textarea.value="",y.inputEl.value="",localStorage.removeItem("feedback-form-state")})),y.textarea.addEventListener("input",e(t)(x,500)),y.inputEl.addEventListener("input",e(t)(x,500)),E=JSON.parse(localStorage.getItem("feedback-form-state")),y.textarea.value=E.message,y.inputEl.value=E.email;
//# sourceMappingURL=03-feedback.9b23928c.js.map
