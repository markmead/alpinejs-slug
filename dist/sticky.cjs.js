var s=Object.defineProperty;var g=e=>s(e,"__esModule",{value:!0});var u=(e,t)=>{g(e);for(var r in t)s(e,r,{get:t[r],enumerable:!0})};u(exports,{default:()=>b});function i(e){e.directive("sticky",(t,{expression:r,modifiers:n})=>{let o=n.includes("parent")?t.closest("[x-sticky-parent]"):null,l=r.split(" "),c=t.getAttribute("x-sticky-root")||"-1px 0px 0px 0px",a=t.getAttribute("x-sticky-threshold")||[1],p=o||t;new IntersectionObserver(([x])=>l.map(d=>t.classList.toggle(d,x.intersectionRatio<1)),{rootMargin:c,threshold:a}).observe(p)})}var b=i;0&&(module.exports={});
