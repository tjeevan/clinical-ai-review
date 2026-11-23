const button=document.querySelector('.menu-button');const nav=document.querySelector('#nav');if(button&&nav){button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');button.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');button.setAttribute('aria-expanded','false')}})}
// Accessible hero infographic carousel. Manual navigation and optional automatic rotation.
(()=>{const slider=document.querySelector('.hero-slider');if(!slider)return;
const slides=[...slider.querySelectorAll('.hero-slide')],dots=[...slider.querySelectorAll('.slide-dot')],pause=slider.querySelector('[data-pause]');
let index=0,paused=window.matchMedia('(prefers-reduced-motion: reduce)').matches,timer=null;
function show(n){index=(n+slides.length)%slides.length;slides.forEach((el,i)=>{el.classList.toggle('active',i===index);el.setAttribute('aria-hidden',String(i!==index))});dots.forEach((el,i)=>{el.classList.toggle('active',i===index);if(i===index)el.setAttribute('aria-current','true');else el.removeAttribute('aria-current')})}
function stop(){if(timer)clearInterval(timer);timer=null}
function start(){stop();if(!paused)timer=setInterval(()=>show(index+1),6500)}
slider.querySelector('[data-prev]').addEventListener('click',()=>{show(index-1);start()});
slider.querySelector('[data-next]').addEventListener('click',()=>{show(index+1);start()});
dots.forEach((dot,i)=>dot.addEventListener('click',()=>{show(i);start()}));
pause.addEventListener('click',()=>{paused=!paused;pause.textContent=paused?'Play':'Pause';pause.setAttribute('aria-label',paused?'Play automatic slideshow':'Pause automatic slideshow');start()});
slider.addEventListener('mouseenter',stop);slider.addEventListener('mouseleave',start);
slider.addEventListener('focusin',stop);slider.addEventListener('focusout',e=>{if(!slider.contains(e.relatedTarget))start()});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start()});
if(paused){pause.textContent='Play';pause.setAttribute('aria-label','Play automatic slideshow')}
show(0);start()})();
