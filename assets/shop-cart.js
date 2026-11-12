(() => {
const key='domana-cart-v1';
const valid=(x)=>x&&shopProducts.some(p=>p.id===x.id&&p.size.includes(x.size))&&Number.isInteger(x.qty)&&x.qty>0;
const read=()=>{try{const data=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(data)?data.filter(valid):[]}catch{return []}};
window.getShopCart=read;
window.shopCartCount=()=>read().reduce((n,x)=>n+x.qty,0);
const update=()=>{document.querySelectorAll('#bag-count').forEach(el=>el.textContent='('+shopCartCount()+')')};
const write=list=>{localStorage.setItem(key,JSON.stringify(list));update();window.dispatchEvent(new Event('shop-cart-change'))};
window.addShopCart=(id,size)=>{if(!shopProducts.some(p=>p.id===id&&p.size.includes(size)))return;const list=read(),line=list.find(x=>x.id===id&&x.size===size);if(line)line.qty++;else list.push({id,size,qty:1});write(list)};
window.setShopCartQuantity=(id,size,qty)=>{if(!Number.isInteger(qty)||qty<1)return;const list=read(),line=list.find(x=>x.id===id&&x.size===size);if(line){line.qty=qty;write(list)}};
window.removeShopCart=(id,size)=>write(read().filter(x=>x.id!==id||x.size!==size));
window.openShopCart=()=>{location.href='cart.html'};
window.addEventListener('storage',event=>{if(event.key===key||event.key===null){update();window.dispatchEvent(new Event('shop-cart-change'))}});document.addEventListener('DOMContentLoaded',update);
})();
