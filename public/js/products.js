// const products = [
//   {
//     id: 1,
//     name: "Brantwood Everest Oak Steel",
//     imgSrc: "../images/products/brantwood-everest-oak-steel.png",
//     category: "trending",
//     price: 1799,
//     quantity: 0,
//     addClassName: "lg",
//   },
//   {
//     id: 2,
//     name: "Eboni Lamp Table",
//     imgSrc: "../images/products/eboni-lamp-table.png",
//     category: "trending",
//     price: 599,
//     quantity: 0,
//     addClassName: "md",
//   },
//   {
//     id: 3,
//     name: "Tobi End Table",
//     imgSrc: "../images/products/tobi-end-table.png",
//     category: "trending",
//     price: 229,
//     quantity: 0,
//     addClassName: "md",
//   },
//   {
//     id: 4,
//     name: "Emse Chair",
//     imgSrc: "../images/products/esme-chair.png",
//     category: "trending",
//     price: 949,
//     quantity: 0,
//     addClassName: "md",
//   },
//   {
//     id: 5,
//     name: "Buckland Ladder",
//     imgSrc: "../images/products/buckland-ladder.png",
//     category: "trending",
//     price: 499,
//     quantity: 0,
//     addClassName: "md",
//   },
//   {
//     id: 6,
//     name: "The Sofology Fifth Avenue",
//     imgSrc: "../images/products/the-sofology-fifth-avenue.png",
//     category: "trending",
//     price: 3549,
//     quantity: 0,
//     addClassName: "lg",
//   },
//   {
//     id: 7,
//     name: "Mini LCW Chair",
//     imgSrc: "../images/products/mini-lcw-chair.png",
//     category: "top chair",
//     price: 299,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 8,
//     name: "Sunningdale Chair",
//     imgSrc: "../images/products/sunningdale-chair.png",
//     category: "top chair",
//     price: 499,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 9,
//     name: "Paddington Chair",
//     imgSrc: "../images/products/paddington-chair.png",
//     category: "top chair",
//     price: 749,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 10,
//     name: "Swivel Accent Chair",
//     imgSrc: "../images/products/swivel-accent-chair.png",
//     category: "top chair",
//     price: 799,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 11,
//     name: "Hemi Floor Lamp",
//     imgSrc: "../images/products/hemi-floor-lamp.png",
//     category: "accessories",
//     price: 399,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 12,
//     name: "Bowie Scatter Scatter Cushion",
//     imgSrc: "../images/products/bowie-scatter-cushion.png",
//     category: "accessories",
//     price: 35,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 13,
//     name: "Bangles Mirror",
//     imgSrc: "../images/products/bangles-mirror.png",
//     category: "accessories",
//     price: 249,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 14,
//     name: "Dover Rugs Rug",
//     imgSrc: "../images/products/dover-rugs-rug.png",
//     category: "accessories",
//     price: 299,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 15,
//     name: "Marcia Coffee Table",
//     imgSrc: "../images/products/marcia-coffee-table.png",
//     category: "accessories",
//     price: 849,
//     quantity: 0,
//     addClassName: "",
//   },
//   {
//     id: 16,
//     name: "Captiva Table Lamp",
//     imgSrc: "../images/products/captiva-table-lamp.png",
//     category: "accessories",
//     price: 149,
//     quantity: 0,
//     addClassName: "",
//   },
// ]
/**===================================
  Render trending product list to HTML
=====================================*/

// const onTrendingElements = document.querySelectorAll('.col.col-12.xl-12.lg-7.md-12.sm-12, .col.col-6.xl-6.lg-12.md-6.sm-12');
// let trendingElIndex = 0;
// onTrendingElements.forEach((element) => {
//   while (products[trendingElIndex].category !== "trending")
//     trendingElIndex++;
//   element.innerHTML = `
//     <figure class="product-item on-trending-item on-trending-item--${products[trendingElIndex].addClassName}" data-index="${products[trendingElIndex].id}" >
//       <figcaption class="on-trending-item__name font-secondary">${products[trendingElIndex].name}</figcaption>
//       <div class="on-trending-item__img product-item__img"> <img src=${products[trendingElIndex].imgSrc} alt="a chair"/></div><span class="on-trending-item__price">${products[trendingElIndex].price}$</span>
//       <div class="product-action product-action--bottom-left">
//         <button class="product-action__item  product-action__cart"><i class="fa-solid fa-cart-plus"></i></button>
//         <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
//         <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
//       </div>
//     </figure>`
//   trendingElIndex++;
// });

/**===================================
  Render top chair list to HTML
=====================================*/
// const topChairs = document.querySelectorAll('.product-top .row > .col');
// let topChairIndex = 0;
// topChairs.forEach((element) => {
//   while (products[topChairIndex].category !== "top chair")
//     topChairIndex++;
//   element.innerHTML = `
//     <figure class="product-top-item product-item action-rounded obs-transition fade side-half-up" data-index="${products[topChairIndex].id}">
//       <div class="product-top-item__top product-item__top">
//         <div class="product-top-item__img product-item__img"> <img src="${products[topChairIndex].imgSrc}" alt="Mini LCW Chair"/></div>
//         <div class="product-action product-action--rounded">
//           <button class="product-action__item  product-action__cart"><i class="fa-solid fa-cart-plus"></i></button>
//           <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
//           <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
//         </div>
//       </div>
//       <div class="product-top-item__bottom product-item__bottom"> 
//         <figcaption class="product-top-item__heading heading heading-xs heading-center font-primary">${products[topChairIndex].name}</figcaption><span class="product-top-item__price text text-md text-center color-heading">$${products[topChairIndex].price}</span>
//       </div>
//     </figure>`
//   topChairIndex++;
// });

/**===================================
  Render accessories to HTML
=====================================*/
// const accessories = document.querySelector('.accessories .row');

// products.forEach((product) => {
//   if (product.category === 'accessories')
//     accessories.innerHTML +=
//       `<div class="col col-4 xl-4 lg-6 md-6 sm-12"> 
//         <figure class="accessories-item product-item action-horizontal obs-transition fade slide-down" data-index="${product.id}"> 
//           <div class="accessories-item__top product-item__top"> 
//             <div class="accessories-item__img product-item__img"> <img src="${product.imgSrc}" alt="${product.name}"/></div>
//             <div class="product-action product-action--horizontal">
//               <button class="product-action__item  product-action__cart"><i class="fa-solid fa-cart-plus"></i></button>
//               <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
//               <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
//             </div>
//           </div>
//           <div class="accessories-item__bottom product-item__bottom"> 
//             <figcaption class="accessories-item__heading text text-lg text-center color-heading font-secondary">${product.name}</figcaption>
//             <div class="accessories-item-price text text-sm text-center color-heading"> <span class="accessories-item-price__new">$${product.price}</span>
//             </div>
//           </div>
//         </figure>
//       </div>`;
// });


/*========================================
  When clicking on the add to cart button
========================================*/

// const addToCartBtn = document.querySelectorAll(".product-action__cart");
// let inCartProducts = [];

// getProductFromBtn = function (btn) {
//   while (btn && !btn.matches('figure.product-item'))
//     btn = btn.parentElement;
//   return btn;
// }

// addToCartBtn.forEach(btn => {
//   btn.onclick = () => {
//     let productItem = getProductFromBtn(btn);
//     if (productItem) {
//       let chosenProduct = products[productItem.dataset.index - 1];
//       chosenProduct.quantity++;
//       if (!inCartProducts.includes(chosenProduct))
//         inCartProducts.push(chosenProduct);
//       console.log(inCartProducts);
//     }
//   }
// })