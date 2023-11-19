const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');
const txtCarro = document.getElementById('txtCarro');
const fraseEfeito = document.getElementById('fraseEfeito');
const modelosRedirectBtn = document.getElementById('modelosButton');

let pictures = ['images/sla1.png', 'images/honda1.png', 'images/hyunday1.png'];

img.src = pictures[0];

let position = 0;
const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0;
    } else {
        position++;
    }
    updateContent();
    switch (position) {
        case 0:
            txtCarro.innerText = "Nome do Carro";
            fraseEfeito.innerText = "Frase de Efeito";
            break;
        case 1:
            txtCarro.innerText = "Nome do Carro 2";
            fraseEfeito.innerText = "Frase de Efeito 2";
            break;
        case 2:
            txtCarro.innerText = "Nome do Carro 3";
            fraseEfeito.innerText = "Frase de Efeito 3";
            break;
    }
};

const moveLeft = () => {
    if (position <= 0) {
        position = pictures.length - 1;
    } else {
        position--;
    }
    updateContent();
};

const updateContent = () => {
    img.src = pictures[position];
};

const autoSlide = () => {
    moveRight();
    setTimeout(autoSlide, 3000);
};

modelosRedirectBtn.addEventListener('click', () => {
    switch (position) {
        case 0:
            window.location.href = 'index.html'
            break;
        case 1:
            window.location.href = 'index.html'
            break;
        case 2:
           window.location.href = 'index.html'
            break;
    }
});

autoSlide();

 const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7
};

function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    } else {
      // fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
fadeElms.forEach(el => observer.observe(el));