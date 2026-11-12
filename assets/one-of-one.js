(() => {
 const track=document.querySelector('.exclusive-track'),slides=[...track.children],counter=document.querySelector('.exclusive-counter'),buttons=[...document.querySelectorAll('[data-gallery-step]')];
 let current=0,scheduled=false;
 function update(){scheduled=false;current=Math.max(0,Math.min(slides.length-1,Math.round(track.scrollLeft/track.clientWidth)));counter.textContent=`${current+1} / ${slides.length}`;buttons[0].disabled=current===0;buttons[1].disabled=current===slides.length-1}
 function go(step){const next=Math.max(0,Math.min(slides.length-1,current+step));track.scrollTo({left:next*track.clientWidth,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}
 buttons.forEach(b=>b.addEventListener('click',()=>go(Number(b.dataset.galleryStep))));
 track.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(update)}},{passive:true});
 track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();go(e.key==='ArrowRight'?1:-1)}});
 new ResizeObserver(()=>{track.scrollLeft=current*track.clientWidth;update()}).observe(track);update();
})();
