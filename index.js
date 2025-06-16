import{S as u,i as c,a as m}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let l;function f(o){return g(),setTimeout(()=>{l&&l.refresh(),l=new u(".gallery a",{captionsData:"alt",captionDelay:250})},100),o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:d})=>`
        <li class="img-card">
            <div class="img-block">
                <a class="big-image" href="${n}">
                    <img class="image" src="${t}" alt="${s}" />
                </a>
            </div>
            
            <div class="info-block">
                <div>
                    <h2>Likes</h2>
                    <p>${e}</p>
                </div>
                <div>
                    <h2>Views</h2>
                    <p>${r}</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>${a}</p>
                </div>
                <div>
                    <h2>Downloads</h2>
                    <p>${d}</p>
                </div>
            </div>
        </li>
        `).join("")}function p(){i.gallery.innerHTML=""}function h(){i.loader.classList.remove("hidden")}function g(){i.loader.classList.add("hidden")}const y="50766581-35cab7d84125eeb0dc75e938a",v="https://pixabay.com/api/";function L(o){if(!o){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(),m(v,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal"}}).then(({data:t})=>{i.gallery.innerHTML=f(t.hits),t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{console.log(t)})}i.form.addEventListener("submit",b);function b(o){o.preventDefault(),p(),L(i.input.value.trim()),console.log(i.input.value.trim())}
//# sourceMappingURL=index.js.map
