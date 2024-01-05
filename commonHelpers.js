import{S as u,i as l}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=document.querySelector("#form"),i=document.querySelector("#gallery"),c=document.querySelector(".loader");f.addEventListener("submit",p);let d=new u("#gallery a",{showCounter:!1,captionsData:"alt",captionDelay:200});function m(){i.innerHTML="",l.show({close:!1,closeOnClick:!0,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",timeout:2e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"#EF4040",progressBar:!1})}function p(n){n.preventDefault(),c.classList.remove("hidden"),i.innerHTML="";const e=n.currentTarget.elements.inputToSearch.value.trim();h(e),n.currentTarget.reset()}function h(n){const e=new URLSearchParams({key:"41535570-7b1028e1c6f1b041bb0744cc1",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{o.hits.length===0&&m(),g(o),d.refresh()}).catch(o=>{l.error({message:"ERROR",messageColor:"white",timeout:2e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",progressBar:!1})}).finally(()=>{c.classList.add("hidden")})}function g(n){return i.innerHTML=n.hits.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}">
          <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="image-info">
          <div>Likes:<span>${e.likes}</span></div>
          <div>Views:<span>${e.views}</span></div>
          <div>Comments:<span>${e.comments}</span></div>
          <div>Downloads:<span>${e.downloads}</span></div>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map