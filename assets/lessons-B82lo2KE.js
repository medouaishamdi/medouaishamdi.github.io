import{u as e}from"./personal-BNCZxw2U.js";import{n as t}from"./util-CUu8vVuc.js";function n(n,r){let i=r.lang===`fr`,a=r.lang,o=-1,s=()=>{let r=e.map((e,t)=>({p:e,i:t})).filter(({i:e})=>o<0||e===o);n.querySelector(`.ls-wall`).innerHTML=r.map(({p:e})=>`
      <section class="ls-proj">
        <h3 style="--c:${e.color}">${t(e.name)}</h3>
        <div class="ls-notes">
          ${e.learned.map((n,r)=>`<article class="ls-note" style="--r:${(r*37+e.name.length)%7-3}deg"><h4>${t(n.title[a])}</h4><p>${t(n.body[a])}</p></article>`).join(``)}
          <article class="ls-note limits"><h4>${i?`Ce qu’il ne sait pas faire`:`What it still can’t do`}</h4><ul>${e.limits.map(e=>`<li>${t(e[a])}</li>`).join(``)}</ul></article>
        </div>
      </section>`).join(``)};n.innerHTML=`
    <p class="lab-lead">${i?`Chaque projet a été testé là où il risquait d’échouer. Voici ce que ces tests m’ont appris, y compris quand le résultat n’était pas flatteur.`:`Every project was tested where it was most likely to fail. Here is what those tests taught me, including when the result wasn’t flattering.`}</p>
    <div class="chips" role="group">${[``,...e.map(e=>e.name)].map((e,n)=>`<button class="chip${n===0?` on`:``}" data-f="${n-1}">${n===0?i?`Tous`:`All`:t(e)}</button>`).join(``)}</div>
    <div class="ls-wall"></div>`,n.querySelectorAll(`[data-f]`).forEach(e=>e.addEventListener(`click`,()=>{o=Number(e.dataset.f),n.querySelectorAll(`[data-f]`).forEach(t=>t.classList.toggle(`on`,t===e)),s()})),s(),r.unlock(`lessons`)}export{n as mount};