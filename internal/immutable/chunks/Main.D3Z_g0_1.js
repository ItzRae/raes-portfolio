import{d as ea,f as wa,a as j,t as B,s as G,e as ya}from"./disclose-version.C9ibj-3h.js";import{i as Aa}from"./legacy.C1dc-JLF.js";import{a3 as Ia,ah as fa,as as va,a0 as M,a4 as V,a2 as J,B as ka,ae as da,aj as xa,ak as ta,a9 as U,a1 as N,at as O,al as ua,ag as F,am as Ma,X as Ca,y as ia,au as X,av as ra,aw as $,ax as Ea,ad as Sa,ay as Ta,az as ha,Z as pa,aa as Na,V as Ra,aA as za,M as Da,q as sa,aB as Ha,a7 as ga,ab as La,a8 as ja,aC as Va,A as Oa,aD as Ba,p as Pa,t as Y,j as Ua,k as w,s as A,m,O as qa,g as L}from"./runtime.dLIlgSPi.js";import{p as Ga}from"./props.CdagI7gK.js";function na(e,a){return a}function Ja(e,a,t,i){for(var r=[],l=a.length,n=0;n<l;n++)Ea(a[n].e,r,!0);var h=l>0&&r.length===0&&t!==null;if(h){var c=t.parentNode;Sa(c),c.append(t),i.clear(),E(e,a[0].prev,a[l-1].next)}Ta(r,()=>{for(var _=0;_<l;_++){var d=a[_];h||(i.delete(d.k),E(e,d.prev,d.next)),ha(d.e,!h)}})}function oa(e,a,t,i,r,l=null){var n=e,h={flags:a,items:new Map,first:null},c=(a&va)!==0;if(c){var _=e;n=M?V(pa(_)):_.appendChild(Ia())}M&&J();var d=null,p=!1;fa(()=>{var I=t(),o=ka(I)?I:I==null?[]:da(I),f=o.length;if(p&&f===0)return;p=f===0;let u=!1;if(M){var C=n.data===xa;C!==(f===0)&&(n=ta(),V(n),U(!1),u=!0)}if(M){for(var y=null,k,b=0;b<f;b++){if(N.nodeType===8&&N.data===Na){n=N,u=!0,U(!1);break}var g=o[b],s=i(g,b);k=ma(N,h,y,null,g,s,b,r,a),h.items.set(s,k),y=k}f>0&&V(ta())}if(!M){var v=Ra;Ya(o,h,n,r,a,(v.f&O)!==0,i)}l!==null&&(f===0?d?ua(d):d=F(()=>l(n)):d!==null&&Ma(d,()=>{d=null})),u&&U(!0),t()}),M&&(n=N)}function Ya(e,a,t,i,r,l,n,h){var K,Q,W,Z;var c=(r&za)!==0,_=(r&(X|$))!==0,d=e.length,p=a.items,I=a.first,o=I,f,u=null,C,y=[],k=[],b,g,s,v;if(c)for(v=0;v<d;v+=1)b=e[v],g=n(b,v),s=p.get(g),s!==void 0&&((K=s.a)==null||K.measure(),(C??(C=new Set)).add(s));for(v=0;v<d;v+=1){if(b=e[v],g=n(b,v),s=p.get(g),s===void 0){var D=o?o.e.nodes_start:t;u=ma(D,a,u,u===null?a.first:u.next,b,g,v,i,r),p.set(g,u),y=[],k=[],o=u.next;continue}if(_&&Fa(s,b,v,r),s.e.f&O&&(ua(s.e),c&&((Q=s.a)==null||Q.unfix(),(C??(C=new Set)).delete(s))),s!==o){if(f!==void 0&&f.has(s)){if(y.length<k.length){var S=k[0],x;u=S.prev;var H=y[0],R=y[y.length-1];for(x=0;x<y.length;x+=1)la(y[x],S,t);for(x=0;x<k.length;x+=1)f.delete(k[x]);E(a,H.prev,R.next),E(a,u,H),E(a,R,S),o=S,u=R,v-=1,y=[],k=[]}else f.delete(s),la(s,o,t),E(a,s.prev,s.next),E(a,s,u===null?a.first:u.next),E(a,u,s),u=s;continue}for(y=[],k=[];o!==null&&o.k!==g;)(l||!(o.e.f&O))&&(f??(f=new Set)).add(o),k.push(o),o=o.next;if(o===null)continue;s=o}y.push(s),u=s,o=s.next}if(o!==null||f!==void 0){for(var T=f===void 0?[]:da(f);o!==null;)(l||!(o.e.f&O))&&T.push(o),o=o.next;var P=T.length;if(P>0){var ba=r&va&&d===0?t:null;if(c){for(v=0;v<P;v+=1)(W=T[v].a)==null||W.measure();for(v=0;v<P;v+=1)(Z=T[v].a)==null||Z.fix()}Ja(a,T,ba,p)}}c&&Ca(()=>{var aa;if(C!==void 0)for(s of C)(aa=s.a)==null||aa.apply()}),ia.first=a.first&&a.first.e,ia.last=u&&u.e}function Fa(e,a,t,i){i&X&&ra(e.v,a),i&$?ra(e.i,t):e.i=t}function ma(e,a,t,i,r,l,n,h,c,_){var d=(c&X)!==0,p=(c&Ha)===0,I=d?p?Da(r):sa(r):r,o=c&$?sa(n):n,f={i:o,v:I,k:l,a:null,e:null,prev:t,next:i};try{return f.e=F(()=>h(e,I,o),M),f.e.prev=t&&t.e,f.e.next=i&&i.e,t===null?a.first=f:(t.next=f,t.e.next=f.e),i!==null&&(i.prev=f,i.e.prev=f.e),f}finally{}}function la(e,a,t){for(var i=e.next?e.next.e.nodes_start:t,r=a?a.e.nodes_start:t,l=e.e.nodes_start;l!==i;){var n=ga(l);r.before(l),l=n}}function E(e,a,t){a===null?e.first=t:(a.next=t,a.e.next=t&&t.e),t!==null&&(t.prev=a,t.e.prev=a&&a.e)}function Xa(e,a,t,i,r){var l=e,n="",h;fa(()=>{if(n===(n=a()??"")){M&&J();return}h!==void 0&&(ha(h),h=void 0),n!==""&&(h=F(()=>{if(M){N.data;for(var c=J(),_=c;c!==null&&(c.nodeType!==8||c.data!=="");)_=c,c=ga(c);if(c===null)throw La(),ja;ea(N,_),l=V(c);return}var d=n+"",p=wa(d);ea(pa(p),p.lastChild),l.before(p)}))})}function _a(e){var a,t,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var r=e.length;for(a=0;a<r;a++)e[a]&&(t=_a(e[a]))&&(i&&(i+=" "),i+=t)}else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function $a(){for(var e,a,t=0,i="",r=arguments.length;t<r;t++)(e=arguments[t])&&(a=_a(e))&&(i&&(i+=" "),i+=a);return i}function Ka(e){return typeof e=="object"?$a(e):e??""}function z(e,a,t,i){var r=e.__attributes??(e.__attributes={});M&&(r[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||r[a]!==(r[a]=t)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Va]=t),t==null?e.removeAttribute(a):typeof t!="string"&&Qa(e).includes(a)?e[a]=t:e.setAttribute(a,t))}var ca=new Map;function Qa(e){var a=ca.get(e.nodeName);if(a)return a;ca.set(e.nodeName,a=[]);for(var t,i=e,r=Element.prototype;r!==i;){t=Ba(i);for(var l in t)t[l].set&&a.push(l);i=Oa(i)}return a}function Wa(e,a,t){var i=e.__className,r=Za(a);M&&e.className===r?e.__className=r:(i!==r||M&&e.className!==r)&&(a==null&&!t?e.removeAttribute("class"):e.className=r,e.__className=r)}function Za(e,a){return(e??"")+""}function ae(e){return function(...a){var t=a[0];return t.preventDefault(),e==null?void 0:e.apply(this,a)}}var ee=B('<div target="_blank"><div class="project-card"><img> <h3> </h3> <p> </p> <div class="project-links"><a><i class="fa-brands fa-github"></i></a> <a><i class="fa-solid fa-globe"></i></a></div></div></div>');function q(e,a){Pa(a,!1);let t=Ga(a,"card",8);Aa();var i=ee(),r=w(i),l=w(r),n=A(l,2),h=w(n,!0);m(n);var c=A(n,2),_=w(c,!0);m(c);var d=A(c,2),p=w(d),I=A(p,2);m(d),m(r),m(i),Y(()=>{z(i,"href",t().href),z(l,"src",t().img),z(l,"alt",`thumbnail of ${t().name??""}`),G(h,t().name),G(_,t().desc),z(p,"href",t().github_link),z(I,"href",t().demo_link)}),j(e,i),Ua()}var te=B("<i></i>"),ie=B('<div class="about-desc-item"><h1 class="about-index"></h1> <div class="about-desc-content"><h3 class="about-desc-title"> </h3> <p class="about-desc-text"><!></p></div></div>'),re=B(`<main><section id="hero" class="hero container"><div class="hero-img-container"><img class="hero-img" src="src/files/heropicture.jpg" alt=""></div> <div class="hero-content"><h1 class="hero-title">HI, I'M RACHEL 👋🏼</h1> <p class="hero-desc">A current undergraduate pursuing a B.S in Computer Science 
                at <strong>Amherst College</strong>. I'm experienced in <strong>full-stack 
                web development</strong>, web scraping, and artificial intelligence.</p> <div class="hero-btns"><a href="https://github.com/ItzRae" class="hero-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg></a> <a href="https://www.linkedin.com/in/rachel-a-lin/" class="hero-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path></svg></a> <a href="mailto: raalin25@amherst.edu" class="hero-icon"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path></svg></a></div> <a class="hero-btn btn" href="#projects">↓ See Projects ↓</a></div></section> <section id="about" class="about container"><div class="about-skills"><h1>Skills</h1> <div class="about-skills-icons"></div></div> <div class="about-content"><h1>About Me</h1> <p class="about-subtitle">I am...</p> <div class="about-desc"></div></div></section> <section id="projects" class="projects container"><h1>Projects</h1> <div class="projects-box"><!> <!> <!></div></section> <footer class="footer container section"><h3 class="footer-title">~ Rachel Lin ~</h3></footer></main>`);function ce(e){function a({target:b}){const g=document.querySelector(b.getAttribute("href"));g&&g.scrollIntoView({behavior:"smooth"})}let t=[{title:"Python",icon:"fa-brands fa-python"},{title:"Javascript",icon:"fa-brands fa-js-square"},{title:"Git",icon:"fa-brands fa-git-alt"},{title:"React",icon:"fa-brands fa-react"},{title:"HTML",icon:"fa-brands fa-html5"},{title:"CSS",icon:"fa-brands fa-css3-alt"},{title:"R",icon:"fa-brands fa-r-project"},{title:"Java",icon:"fa-brands fa-java"}],i=[{name:"a driven student",desc:"I have taken a range of CS courses from <a>Artificial Intelligence, Machine Learning</a>, and <a>Computer Systems</a> to <a>Data Science</a> and <a>Data Mining</a>. These classes have taught me how to break down complex problems and approach them with logical, creative solutions."},{name:"a curious, knowledge-driven learner",desc:"I’m passionate about exploring new technologies and pushing myself to learn tools that expand my skills. I have experience with <a>Python, Java, JavaScript, HTML/CSS, Svelte, and SQL</a>. I’m excited to keep growing and discovering new ways to apply what I’ve learned."},{name:"an excellent communicator",desc:"I believe <a>communication is key</a>, especially in the workplace. Whether it’s explaining technical ideas in a way that’s easy to understand, presenting my work to a group, or collaborating on projects, I strive to create an <a>open and productive environment</a>. I’m still growing in this area, but I’ve found that being a good communicator makes a big difference in team success."}],r=[{name:"Formula 1 Data Science Blog",desc:"Developed an interactive blog analyzing Formula 1 datasets with spatial visualizations (Leaflet map), network graphs, and text analysis (web scraping) via word clouds.",img:"../src/files/project1.png",github_link:"https://github.com/stat231-f24/blog01-f1-fanatics",demo_link:"https://stat231-f24.github.io/blog01-f1-fanatics/"},{name:"MammothEDU",desc:"MAMU’s mission is to create an education-catered web-app that offers increased curriculum flexibility, enhancing accessibility for students and educators. Used React, OpenAI API, and Tailwind for UI.",img:"../src/files/mammothedu.png",github_link:"https://github.com/MammothEdu/MammothEdu.github.io",demo_link:"https://mammothedu.github.io/"},{name:"AlgoVisualizer",desc:"A react app that visualizes sorting algorithms with real-time animations and an educational menu for users to learn about the basics, runtime, and pseudocode of each algorithm.",img:"src/files/algovisualizer.png",github_link:"https://github.com/ItzRae/algo-visualizer",demo_link:"https://itzrae.github.io/algo-visualizer/"}];var l=re(),n=w(l),h=A(w(n),2),c=A(w(h),6);m(h),m(n);var _=A(n,2),d=w(_),p=A(w(d),2);oa(p,5,()=>t,na,(b,g)=>{var s=te();Y(()=>{Wa(s,Ka(L(g).icon),""),z(s,"title",L(g).title)}),j(b,s)}),m(p),m(d);var I=A(d,2),o=A(w(I),4);oa(o,5,()=>i,na,(b,g,s)=>{var v=ie(),D=w(v);D.textContent=`0${s+1}`;var S=A(D,2),x=w(S),H=w(x,!0);m(x);var R=A(x,2),T=w(R);Xa(T,()=>L(g).desc),m(R),m(S),m(v),Y(()=>G(H,L(g).name)),j(b,v)}),m(o),m(I),m(_);var f=A(_,2),u=A(w(f),2),C=w(u);q(C,{get card(){return r[0]}});var y=A(C,2);q(y,{get card(){return r[1]}});var k=A(y,2);q(k,{get card(){return r[2]}}),m(u),m(f),qa(2),m(l),ya("click",c,ae(a)),j(e,l)}export{ce as M,oa as e,na as i,z as s};
