import{S as m,a as f,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const i={form:document.querySelector(".form"),input:document.querySelector(".form input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let c;function p(o){return u(),setTimeout(()=>{c&&c.refresh(),c=new m(".gallery a",{captionsData:"alt",captionDelay:250})},100),o.map(({webformatURL:t,largeImageURL:n,tags:s,likes:e,views:r,comments:a,downloads:d})=>`
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
        `).join("")}function h(){i.gallery.innerHTML=""}function g(){i.loader.classList.remove("hidden")}function u(){i.loader.classList.add("hidden")}const y="50766581-35cab7d84125eeb0dc75e938a",v="https://pixabay.com/api/e";function L(o){return g(),f(v,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}i.form.addEventListener("submit",b);function b(o){if(o.preventDefault(),h(),!i.input.value.trim()){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.input.value.trim()).then(({data:t})=>{i.gallery.innerHTML=p(t.hits),t.hits.length===0&&l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{u(),l.error({message:`${t.message}`,position:"topRight"})})}
//# sourceMappingURL=index.js.map
