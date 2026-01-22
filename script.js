
  const sections = document.querySelectorAll(".container, .row, .card");

  sections.forEach(sec => sec.classList.add("animar"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("mostrar");
      }
    });
  });

  sections.forEach(el => observer.observe(el));

  const cardHTML = document.querySelector("#html .card");
const textHTML = document.getElementById("texthtml");

var html = document.getElementById('html');
var css = document.getElementById('css');
var javascript = document.getElementById('javascript');
var c = document.getElementById('c');
var banco = document.getElementById('banco');
var bootstrap = document.getElementById('bootstrap');

function subir(x){
  x.style.transform = 'translateY(-10px)'
}
function descer(x){
  x.style.transform = 'translateY(0px)'
}




