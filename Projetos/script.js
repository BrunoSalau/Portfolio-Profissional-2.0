function subir(x){
    x.style.transform = "translateY(-10px)"
}
function descer(x){
    x.style.transform = "translateY(0px)"
}

//======================================================

let qd1 = document.getElementById('qd1')

qd1.addEventListener('click', () => {
    window.location.href = "Mundo dos Peixes/index.html";
  });

qd1.style.cursor = 'pointer'

//======================================================

let qd2 = document.getElementById('qd2')

qd2.addEventListener('click', () => {
    window.location.href = "Tabuada/index.html";
  });

qd2.style.cursor = 'pointer'

//======================================================

let qd3 = document.getElementById('qd3')

qd3.addEventListener('click', () => {
    window.location.href = "../index.html";
  });

qd3.style.cursor = 'pointer'

//======================================================
