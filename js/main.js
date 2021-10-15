/*====1) DESPLEGAR MENÚ DE NAVEGACIÓN (RESPONSIVE)====*/
let btn_menu = document.getElementById("btn_menu");
let menu = document.querySelector("nav");
let shown = false;

btn_menu.onclick = () => {
  menu.classList.toggle("show_menu");
  if(shown == false){
    btn_menu.innerHTML = '<img src="img/close_menu.png" alt=""> Close';
    shown = true;
  }else{
    btn_menu.innerHTML = '<img src="img/menu_bars.png" alt=""> Menú';
    shown = false;
  }
}

/*====2) MOVIMIENTO DE LA GALERÍA DE IMÁGENES====*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3500); //Cambiar la imagen cada 3 segundos y medio
}

/*====3) RECARGAR LA PORTADA DEL PORTAFOLIO CON UNA TRANSICIÓN====*/
let hero = document.getElementById("hero");

window.onload = () => {
  hero.style.opacity = "1";
}

/*====4) EFECTO PARALLAX A LAS SECCIONES DEL PORTAFOLIO====*/

//Variables para manipular las secciones del portafolio
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let works = document.getElementById("works");
let contact = document.getElementById("contact");

//Variables que manipulan los vínculos del menú para otorgar efectos focus
let navLink1 = document.getElementById("nav_link1");
let navLink2 = document.getElementById("nav_link2");
let navLink3 = document.getElementById("nav_link3");
let navLink4 = document.getElementById("nav_link4");

//Función para el portafolio cuando se ejecuta el scroll
document.onscroll = () => {
  
  if(scrollY > 300){
    about.style.opacity = "1"; 
    navLink1.classList.add("focus"); 
  }else{
    about.style.opacity = "0"; 
    navLink1.classList.remove("focus"); 
  }
  
  if(scrollY > 900 && scrollY > 1100){
    skills.style.opacity = "1"; 
    navLink1.classList.remove("focus");
    navLink2.classList.add("focus");
  }else{
    skills.style.opacity = "0";
    navLink2.classList.remove("focus");
  }
  
  if(scrollY > 1200 && scrollY > 1600){
    works.style.opacity = "1"; 
    navLink2.classList.remove("focus");
    navLink3.classList.add("focus");
  }else{
    works.style.opacity = "0";
    navLink3.classList.remove("focus");
  }

  if(scrollY > 2600){
    contact.style.opacity = "1"; 
    navLink3.classList.remove("focus");
    navLink4.classList.add("focus");
  }else{
    contact.style.opacity = "0";
    navLink4.classList.remove("focus");
  }

} //Fin función ejecutar scroll