import{S as d,a as u,i as f}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let l;function m(o){return y(),setTimeout(()=>{l&&l.refresh(),l=new d(".gallery a",{captionsData:"alt",captionDelay:250})},100),o.map(({webformatURL:r,largeImageURL:n,tags:a,likes:e,views:t,comments:s,downloads:c})=>`
        <li class="img-card">
            <div class="img-block">
                <a class="big-image" href="${n}">
                    <img class="image" src="${r}" alt="${a}" />
                </a>
            </div>
            
            <div class="info-block">
                <div>
                    <h2>Likes</h2>
                    <p>${e}</p>
                </div>
                <div>
                    <h2>Views</h2>
                    <p>${t}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>${s}</p>
                </div>
                <div>
                    <h2>Downloads</h2>
                    <p>${c}</p>
                </div>
            </div>
        </li>
        `).join("")}function p(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("hidden")}function y(){i.loader.classList.add("hidden")}const g="50766581-35cab7d84125eeb0dc75e938a",v="https://pixabay.com/api/";function L(o){h(),u(v,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal"}}).then(({data:r})=>{i.gallery.innerHTML=m(r.hits),r.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(r=>{console.log(r)})}i.form.addEventListener("submit",b);function b(o){o.preventDefault(),p(),L(i.input.value)}
//# sourceMappingURL=index.js.map
