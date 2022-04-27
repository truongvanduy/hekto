const products = [
  {
    id: 1,
    name: "Brantwood Everest Oak Steel",
    imgSrc: "../images/products/brantwood-everest-oak-steel.png",
    category: "trending",
    price: 1799,
    quantity: 0,
  },
  {
    id: 2,
    name: "Eboni Lamp Table",
    imgSrc: "../images/products/eboni-lamp-table.png",
    category: "trending",
    price: 599,
    quantity: 0,
  },
  {
    id: 3,
    name: "Tobi End Table",
    imgSrc: "../images/products/tobi-end-table.png",
    category: "trending",
    price: 229,
    quantity: 0,
  },
  {
    id: 4,
    name: "Emse Chair",
    imgSrc: "../images/products/esme-chair.png",
    category: "trending",
    price: 949,
    quantity: 0,
  },
  {
    id: 5,
    name: "Buckland Ladder",
    imgSrc: "../images/products/buckland-ladder.png",
    category: "trending",
    price: 499,
    quantity: 0,
  },
  {
    id: 6,
    name: "The Sofology Fifth Avenue",
    imgSrc: "../images/products/the-sofology-fifth-avenue.png",
    category: "trending",
    price: 3549,
    quantity: 0,
  },
  {
    id: 7,
    name: "Mini LCW Chair",
    imgSrc: "../images/products/mini-lcw-chair.png",
    category: "top chair",
    price: 299,
    quantity: 0,
  },
  {
    id: 8,
    name: "Sunningdale Chair",
    imgSrc: "../images/products/sunningdale-chair.png",
    category: "top chair",
    price: 499,
    quantity: 0,
  },
  {
    id: 9,
    name: "Paddington Chair",
    imgSrc: "../images/products/paddington-chair.png",
    category: "top chair",
    price: 749,
    quantity: 0,
  },
  {
    id: 10,
    name: "Swivel Accent Chair",
    imgSrc: "../images/products/swivel-accent-chair.png",
    category: "top chair",
    price: 799,
    quantity: 0,
  },
]

// Render trending product list to HTML
const onTrendingElements = document.querySelectorAll('.on-trending-item');
let trendingElIndex = 0;
onTrendingElements.forEach((element) => {
  while (products[trendingElIndex].category !== "trending")
    trendingElIndex++;
  element.innerHTML = `
    <figcaption class="on-trending-item__name font-secondary">${products[trendingElIndex].name}</figcaption>
    <div class="on-trending-item__img product-item__img"> <img src=${products[trendingElIndex].imgSrc} alt="a chair"/></div><span class="on-trending-item__price">${products[trendingElIndex].price}$</span>
    <div class="product-action product-action--bottom-left">
      <button class="product-action__item"><i class="fa-solid fa-cart-plus"></i></button>
      <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
      <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>`
  trendingElIndex++;
});

// Render top chair list to HTML
const topChairs = document.querySelectorAll('.product-top .row > .col');
console.log(topChairs);
let topChairIndex = 0;
topChairs.forEach((element) => {
  console.log(element);
  while (products[topChairIndex].category !== "top chair")
    topChairIndex++;
  element.innerHTML = `
    <figure class="product-top-item product-item action-rounded obs-transition fade side-half-up"> 
      <div class="product-top-item__top product-item__top"> 
        <div class="product-top-item__img product-item__img"> <img src="${products[topChairIndex].imgSrc}" alt="Mini LCW Chair"/></div>
        <div class="product-action product-action--rounded">
          <button class="product-action__item"><i class="fa-solid fa-cart-plus"></i></button>
          <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
          <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div class="product-top-item__bottom product-item__bottom"> 
        <figcaption class="product-top-item__heading heading heading-xs heading-center font-primary">${products[topChairIndex].name}</figcaption><span class="product-top-item__price text text-md text-center color-heading">$${products[topChairIndex].price}</span>
      </div>
    </figure>`
  topChairIndex++;
});
