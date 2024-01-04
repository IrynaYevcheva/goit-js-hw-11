import{S as m,i as l}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector("#form"),h=document.querySelector("#formInput"),u=document.querySelector("#gallery"),a=document.querySelector(".loader");let g=new m("#gallery a",{showCounter:!1});l.settings({close:!0,closeOnClick:!1,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",timeout:4e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"red"});function p(){u.innerHTML="",l.show()}c.addEventListener("submit",y);function y(i){a.classList.remove("hidden"),i.preventDefault();const o=new URLSearchParams({key:"41535570-7b1028e1c6f1b041bb0744cc1",q:h.value,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{setTimeout(()=>{if(a.classList.add("hidden"),r.hits.length===0)return p();v(r.hits)},1e3)}).catch(r=>console.log(r)).finally(()=>{c.reset()})}function v(i){u.innerHTML=i.reduce((o,{webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>o+`
      <li class="gallery-item">
        <a href="${s}">
          <img class="gallery-img" src="${r}" alt="${e}" />
        </a>
        <div class="image-info">
          <div>Likes:<span>${t}</span></div>
          <div>Views:<span>${n}</span></div>
          <div>Comments:<span>${d}</span></div>
          <div>Downloads:<span>${f}</span></div>
        </div>
      </li>
      `,""),g.refresh()}
//# sourceMappingURL=commonHelpers.js.map
