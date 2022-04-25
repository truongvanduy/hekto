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
]

// Get trending products from product list
const onTrendingProducts = products.filter((product, index) => {
  if (product.category === "trending")
    return product;
})

// Render trending product list to HTML
const onTrendingElements = document.querySelectorAll('.on-trending-item');

onTrendingElements.forEach((element, i) => {
  element.innerHTML = `
    <figcaption class="on-trending-item__name font-secondary">${onTrendingProducts[i].name}</figcaption>
    <div class="on-trending-item__img product-item__img"> <img src=${onTrendingProducts[i].imgSrc} alt="a chair"/></div><span class="on-trending-item__price">${onTrendingProducts[i].price}$</span>
    <div class="product-action product-action--bottom-left">
      <button class="product-action__item"><i class="fa-solid fa-cart-plus"></i></button>
      <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
      <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>`
});
