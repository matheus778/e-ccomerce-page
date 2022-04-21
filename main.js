const btnCart = document.querySelector('#btn-cart');
const cartContainer = document.querySelector('.cart-container');

const btnHamburg = document.querySelector('#menu-hamburger');
const btnClose =  document.querySelector('#btn-close');
const menuContainer = document.querySelector('.menu');

function showCart() {
  cartContainer.classList.toggle('show');
}

function showMenu(){
  menuContainer.classList.add('show-menu');
}

function closeMenu(){
  menuContainer.classList.remove('show-menu');
}

btnCart.addEventListener('click', showCart);
btnHamburg.addEventListener('click', showMenu);
btnClose.addEventListener('click', closeMenu);

// mudar imagem do produto versão desktop
const miniatures = document.querySelectorAll('.product-thumb');
const imageProduct = document.querySelector('#img-product');

miniatures.forEach(element=>{
  element.addEventListener('click',()=>{
    selectMiniatures(element.src, element);
  })
})

function selectMiniatures(product, element){
  let image = product.replace(/-thumbnail/,'')
  imageProduct.setAttribute('src', image);

  // remover classe active da miniatura
  miniatures.forEach(element=>{
    element.classList.remove('active')
  });

  //adicionar classe na miniatuara que foi clicada
  element.classList.add('active');
}

// mudar imagem do produto versão mobile
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

function getImagesProductMobile(){
  const images = [];
  miniatures.forEach((element, index)=>{
    let imageStrip = element.src;
    imageStrip = imageStrip.replace(/-thumbnail/,'')
    images[index] = imageStrip;
  });
  return images;
}

const imagesProducts = getImagesProductMobile();
let countImage = 0;

btnNext.addEventListener('click', ()=>{
  countImage = countImage+1;
  if(countImage >= imagesProducts.length) {
    countImage = 0;
    imageProduct.getAttribute('src', imageProduct[countImage])
  } 
    imageProduct.setAttribute('src', imagesProducts[countImage])
 
})

btnPrev.addEventListener('click', ()=>{
  countImage = countImage-1;
  if(countImage < 0) {
    countImage = imagesProducts.length - 1;
    imageProduct.getAttribute('src', imageProduct[countImage])
  } 
    imageProduct.setAttribute('src', imagesProducts[countImage])
 
})




// alterar quantidade do produto
const btnAddItem = document.querySelector('#btn-add');
const btnRemoveItem = document.querySelector('#btn-remove');
let qtdItem = document.querySelector('#qtd-item');

let qtd = 0;
qtdItem.innerText = qtd

btnAddItem.addEventListener('click', ()=>{

  if(qtd >= 5) return;

  qtd = qtd+1;
  qtdItem.innerText = qtd;
});

btnRemoveItem.addEventListener('click', ()=>{

  if(qtd <= 0) return;

  qtd = qtd-1;
  qtdItem.innerText = qtd;
})