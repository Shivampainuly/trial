document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav'), toggle=document.querySelector('.menu-toggle');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
  const path=location.pathname;
  const known=['/','/index.html','/cardiology.html','/gastroenterology.html','/diagnostics.html','/doctors.html','/book-consultation.html','/reviews.html','/contact.html','/about.html'];
  if(!known.includes(path) && !path.endsWith('/trial/')) showBanner('Page not found — returning home');
  const current=document.body.dataset.page;
  document.querySelectorAll('.nav a').forEach(a=>{if(a.dataset.page===current || (current==='home'&&a.getAttribute('href')==='index.html')) a.classList.add('active');});
  const form=document.querySelector('#booking-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const phone=form.querySelector('[name="phone"]')?.value||'your phone number';const modal=document.querySelector('#success-modal');if(modal){modal.querySelector('[data-phone]').textContent=phone;modal.classList.add('show');modal.querySelector('button')?.focus();}else showBanner('Appointment request received.');console.log('Vista Clinics booking request:',Object.fromEntries(new FormData(form)));});}
  document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>document.querySelector('.modal')?.classList.remove('show')));
});
function showBanner(message){let b=document.querySelector('.banner');if(!b){b=document.createElement('div');b.className='banner';b.setAttribute('role','status');document.body.appendChild(b)}b.textContent=message;requestAnimationFrame(()=>b.classList.add('show'));setTimeout(()=>b.classList.remove('show'),3500)}
