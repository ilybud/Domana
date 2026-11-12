(() => {
const toggle=document.querySelector('#menu-toggle'),drawer=document.querySelector('#menu-drawer'),close=drawer.querySelector('.drawer-close');let closing=false;
function closeMenu(){if(!drawer.open||closing)return;closing=true;drawer.classList.remove('is-open');setTimeout(()=>{drawer.close();closing=false;document.documentElement.classList.remove('drawer-open');toggle.setAttribute('aria-expanded','false');toggle.focus()},matchMedia('(prefers-reduced-motion: reduce)').matches?0:350)}
toggle.addEventListener('click',()=>{if(drawer.open)return;drawer.showModal();document.documentElement.classList.add('drawer-open');toggle.setAttribute('aria-expanded','true');requestAnimationFrame(()=>requestAnimationFrame(()=>drawer.classList.add('is-open')));close.focus()});close.onclick=closeMenu;drawer.addEventListener('cancel',e=>{e.preventDefault();closeMenu()});drawer.addEventListener('click',e=>{if(e.target===drawer){const r=drawer.getBoundingClientRect();if(e.clientX>r.right||e.clientX<r.left)closeMenu()}});matchMedia('(max-width:760px)').addEventListener('change',e=>{if(!e.matches)closeMenu()});
document.querySelector('#bag-toggle').onclick=()=>openShopCart();
})();
document.querySelectorAll('.socials [data-info]').forEach(button=>button.addEventListener('click',()=>{
 let notice=document.querySelector('.social-notice');if(!notice){notice=document.createElement('dialog');notice.className='social-notice';notice.setAttribute('aria-label','Социальные сети');notice.innerHTML='<p>Ссылка на официальный профиль скоро появится.</p><button type="button">Закрыть</button>';document.body.append(notice);notice.querySelector('button').onclick=()=>notice.close()}notice.showModal();
}));
