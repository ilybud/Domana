(() => {
 const button=document.querySelector('#account-toggle');
 if(!button)return;
 let panel;
 button.addEventListener('click',()=>{
  if(!panel){
   panel=document.createElement('dialog');panel.className='account-panel';panel.setAttribute('aria-labelledby','account-title');
   panel.innerHTML='<h2 id="account-title">Личный кабинет</h2><p>Вход и регистрация скоро появятся.</p><button type="button">ЗАКРЫТЬ</button>';
   Object.assign(panel.style,{background:'#fff',color:'#111',border:'1px solid #843b3b',padding:'32px',width:'min(420px,90vw)',textAlign:'center'});
   const close=panel.querySelector('button');Object.assign(close.style,{background:'transparent',color:'#843b3b',border:'1px solid #843b3b',borderRadius:'999px',padding:'10px 24px',font:'inherit',cursor:'pointer'});
   document.body.append(panel);close.onclick=()=>panel.close();
  }
  panel.showModal();
 });
})();
