import{l as e,s as t}from"./personal-BNCZxw2U.js";import{a as n,n as r}from"./util-CUu8vVuc.js";var i=e.github.replace(/\/$/,``).split(`/`).pop();async function a(e){let t=`ouaisfc:gh:${e}`;try{let e=JSON.parse(sessionStorage.getItem(t)||`null`);if(e&&Date.now()-e.t<6e5)return e.v}catch{}let n=await fetch(e,{headers:{Accept:`application/vnd.github+json`}});if(!n.ok)throw Error(String(n.status));let r=await n.json();try{sessionStorage.setItem(t,JSON.stringify({t:Date.now(),v:r}))}catch{}return r}function o(o,s){let c=s.lang===`fr`,l=s.lang,u=!0,d=e=>{let t=(Date.now()-new Date(e).getTime())/1e3,n=new Intl.RelativeTimeFormat(l,{numeric:`auto`});return t<3600?n.format(-Math.round(t/60),`minute`):t<86400?n.format(-Math.round(t/3600),`hour`):t<2592e3?n.format(-Math.round(t/86400),`day`):n.format(-Math.round(t/2592e3),`month`)},f=t.find(e=>e.id===`esiee`),p=t.find(e=>e.id===`next`);o.innerHTML=`
    <div class="lg">
      <div class="lg-now">
        <div class="stat"><small>${c?`En ce moment`:`Right now`}</small><b>${r(f.title[l])}</b><small>${r(f.place[l])} · ${r(f.when[l])}</small></div>
        <div class="stat"><small>${c?`La suite`:`Next`}</small><b>${r(p.title[l])}</b><small>${r(p.place[l])}</small></div>
      </div>
      <h3>${c?`Derniers commits`:`Latest commits`}</h3>
      <ol class="lg-feed"><li class="lab-muted">${c?`Chargement depuis GitHub…`:`Loading from GitHub…`}</li></ol>
      <h3>${c?`Dépôts mis à jour récemment`:`Recently updated repositories`}</h3>
      <div class="lg-repos"></div>
      <p class="lab-note">${c?`Données publiques de l’API GitHub, chargées par votre navigateur.`:`Public data from the GitHub API, loaded by your browser.`} <a href="${e.github}" target="_blank" rel="noopener">github.com/${r(i)}</a></p>
    </div>`;let m=o.querySelector(`.lg-feed`),h=o.querySelector(`.lg-repos`);return a(`https://api.github.com/users/${i}/repos?sort=pushed&per_page=8`).then(async e=>{let t=e.filter(e=>!e.fork).slice(0,4),n=await Promise.all(t.map(e=>a(`https://api.github.com/repos/${i}/${e.name}/commits?per_page=5`).catch(()=>[])));if(!u)return;let o=n.flatMap((e,n)=>e.map(e=>({repo:`${i}/${t[n].name}`,msg:e.commit.message.split(`
`)[0],at:e.commit.author?.date??e.commit.committer?.date??``}))).filter(e=>e.at).sort((e,t)=>t.at.localeCompare(e.at));m.innerHTML=o.length?o.slice(0,12).map(e=>`<li><span class="lg-repo">${r(e.repo.split(`/`)[1])}</span><span class="lg-msg">${r(e.msg)}</span><time datetime="${e.at}">${d(e.at)}</time></li>`).join(``):`<li class="lab-muted">${c?`Pas d’activité publique récente.`:`No recent public activity.`}</li>`}).catch(()=>{u&&(m.innerHTML=`<li class="lab-muted">${c?`GitHub ne répond pas pour le moment.`:`GitHub is not reachable right now.`}</li>`)}),a(`https://api.github.com/users/${i}/repos?sort=pushed&per_page=8`).then(e=>{u&&(h.innerHTML=e.filter(e=>!e.fork).slice(0,6).map(e=>`
      <a class="lg-card" href="${r(e.html_url)}" target="_blank" rel="noopener">
        <b>${r(e.name)}</b>
        <span>${r(e.description??``)}</span>
        <small>${r(e.language??``)}${e.stargazers_count?` · ★ ${n(e.stargazers_count,0,l)}`:``} · ${d(e.pushed_at)}</small>
      </a>`).join(``))}).catch(()=>{u&&(h.innerHTML=``)}),s.unlock(`trainlog`),()=>{u=!1}}export{o as mount};