import{S as d,i as c}from"./assets/vendor-46aac873.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const f=document.querySelector("#form"),a=document.querySelector("#gallery"),u=document.querySelector(".loader");f.addEventListener("submit",p);let m=new d("#gallery a",{showCounter:!1,captionsData:"alt",captionDelay:200});function h(){a.innerHTML="",c.show({close:!0,closeOnClick:!1,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",timeout:4e3,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topRight",backgroundColor:"#EF4040"})}function s(){return u.classList.add("hidden")}function p(n){n.preventDefault(),u.classList.remove("hidden"),a.innerHTML="";const e=n.currentTarget.elements.inputToSearch.value.trim();g(e),n.currentTarget.reset()}function g(n){const e=new URLSearchParams({key:"41535570-7b1028e1c6f1b041bb0744cc1",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).then(o=>{o.hits.length===0&&h(),y(o),s(),m.refresh()}).catch(o=>{c.error(),s()}).finally(()=>{s()})}function y(n){return a.innerHTML=n.hits.map(e=>`<li class="gallery-item">
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
