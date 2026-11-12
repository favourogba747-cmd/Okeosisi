const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const heroImage=document.querySelector('.hero-image'),heroDots=[...document.querySelectorAll('.hero-dot')],heroLabel=document.querySelector('.hero-slide-label');if(heroImage&&heroDots.length){const slides=[{image:'assets/company-photos/hero-antique-living.jpg',label:'01 / 03 · THE LIVING COLLECTION'},{image:'assets/company-photos/antique-bedroom.jpg',label:'02 / 03 · THE BEDROOM COLLECTION'},{image:'assets/company-photos/dining-suite.jpg',label:'03 / 03 · THE DINING COLLECTION'}];let current=0;const show=i=>{current=i;heroImage.style.backgroundImage=`url("${slides[i].image}")`;heroDots.forEach((d,n)=>d.classList.toggle('active',n===i));if(heroLabel)heroLabel.textContent=slides[i].label};heroDots.forEach(d=>d.addEventListener('click',()=>{show(Number(d.dataset.slide));clearInterval(timer);timer=setInterval(()=>show((current+1)%slides.length),6500)}));let timer=setInterval(()=>show((current+1)%slides.length),6500)}
