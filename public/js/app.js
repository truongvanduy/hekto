"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const toggleMenuBtn = $('.js-toggle-menu');
const menu = $('.js-menu');
const header = $('.header');
const onTrendingElements = $$('.col.col-12.xl-12.lg-7.md-12.sm-12, .col.col-6.xl-6.lg-12.md-6.sm-12');
const topChairs = $$('.product-top .row > .col');
const accessories = $('.accessories .row');


const app = {
  products: [
    {
      id: 1,
      name: "Brantwood Everest Oak Steel",
      imgSrc: "../images/products/brantwood-everest-oak-steel.png",
      category: "trending",
      price: 1799,
      quantity: 0,
      addClassName: "lg",
    },
    {
      id: 2,
      name: "Eboni Lamp Table",
      imgSrc: "../images/products/eboni-lamp-table.png",
      category: "trending",
      price: 599,
      quantity: 0,
      addClassName: "md",
    },
    {
      id: 3,
      name: "Tobi End Table",
      imgSrc: "../images/products/tobi-end-table.png",
      category: "trending",
      price: 229,
      quantity: 0,
      addClassName: "md",
    },
    {
      id: 4,
      name: "Emse Chair",
      imgSrc: "../images/products/esme-chair.png",
      category: "trending",
      price: 949,
      quantity: 0,
      addClassName: "md",
    },
    {
      id: 5,
      name: "Buckland Ladder",
      imgSrc: "../images/products/buckland-ladder.png",
      category: "trending",
      price: 499,
      quantity: 0,
      addClassName: "md",
    },
    {
      id: 6,
      name: "The Sofology Fifth Avenue",
      imgSrc: "../images/products/the-sofology-fifth-avenue.png",
      category: "trending",
      price: 3549,
      quantity: 0,
      addClassName: "lg",
    },
    {
      id: 7,
      name: "Mini LCW Chair",
      imgSrc: "../images/products/mini-lcw-chair.png",
      category: "top chair",
      price: 299,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 8,
      name: "Sunningdale Chair",
      imgSrc: "../images/products/sunningdale-chair.png",
      category: "top chair",
      price: 499,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 9,
      name: "Paddington Chair",
      imgSrc: "../images/products/paddington-chair.png",
      category: "top chair",
      price: 749,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 10,
      name: "Swivel Accent Chair",
      imgSrc: "../images/products/swivel-accent-chair.png",
      category: "top chair",
      price: 799,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 11,
      name: "Hemi Floor Lamp",
      imgSrc: "../images/products/hemi-floor-lamp.png",
      category: "accessories",
      price: 399,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 12,
      name: "Bowie Scatter Scatter Cushion",
      imgSrc: "../images/products/bowie-scatter-cushion.png",
      category: "accessories",
      price: 35,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 13,
      name: "Bangles Mirror",
      imgSrc: "../images/products/bangles-mirror.png",
      category: "accessories",
      price: 249,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 14,
      name: "Dover Rugs Rug",
      imgSrc: "../images/products/dover-rugs-rug.png",
      category: "accessories",
      price: 299,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 15,
      name: "Marcia Coffee Table",
      imgSrc: "../images/products/marcia-coffee-table.png",
      category: "accessories",
      price: 849,
      quantity: 0,
      addClassName: "",
    },
    {
      id: 16,
      name: "Captiva Table Lamp",
      imgSrc: "../images/products/captiva-table-lamp.png",
      category: "accessories",
      price: 149,
      quantity: 0,
      addClassName: "",
    },
  ],
  inCartProducts: [],

  handleEvents: function () {
    const _this = this;
    const addToCartBtn = $$(".product-action__cart");
    function getProductFromBtn(btn) {
      while (btn && !btn.matches('figure.product-item'))
        btn = btn.parentElement;
      return btn;
    }

    // When clickin on the Add to Cart button
    addToCartBtn.forEach(btn => {
      btn.onclick = () => {
        let productItem = getProductFromBtn(btn);
        if (productItem) {
          let chosenProduct = _this.products[productItem.dataset.index - 1];
          chosenProduct.quantity++;
          if (!_this.inCartProducts.includes(chosenProduct))
            _this.inCartProducts.push(chosenProduct);
          console.log(_this.inCartProducts);
        }
      }
    });
  },
  handleHeader: function () {  // Hide header when scrolling down
    let currentPosition = 0;
    window.onscroll = e => {
      let newPosition = document.documentElement.scrollTop;
      if (newPosition > currentPosition && newPosition > header.offsetHeight && !menu.classList.contains('opened')) {
        header.classList.add('hide');
      } else if (newPosition < currentPosition) {
        header.classList.remove('hide');
      }
      currentPosition = newPosition;
    }
  },
  handleMenu: function () {  // Toggle menu function
    toggleMenuBtn.onclick = () => {
      toggleMenuBtn.classList.toggle('opened');
      menu.classList.toggle("opened");
    }
  },
  updateProductList: function () {
  },
  updateInCartProductsList: function () {

  },
  updateCartIcon: function () {

  },
  renderTrendingProducts: function () {
    let i = 0;
    onTrendingElements.forEach((element) => {
      while (this.products[i].category !== "trending")
        i++;
      element.innerHTML = `
        <figure class="product-item on-trending-item on-trending-item--${this.products[i].addClassName}" data-index="${this.products[i].id}" >
          <figcaption class="on-trending-item__name font-secondary">${this.products[i].name}</figcaption>
          <div class="on-trending-item__img product-item__img"> <img src=${this.products[i].imgSrc} alt="a chair"/></div><span class="on-trending-item__price">${this.products[i].price}$</span>
          <div class="product-action product-action--bottom-left">
            <button class="product-action__item  product-action__cart"><i class="fa-solid fa-cart-plus"></i></button>
            <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
            <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
        </figure>`
      i++;
    });
  },
  renderTopChairs: function () {
    let i = 0;
    topChairs.forEach((element) => {
      while (this.products[i].category !== "top chair")
        i++;
      element.innerHTML = `
        <figure class="product-top-item product-item action-rounded obs-transition fade side-half-up" data-index="${this.products[i].id}">
          <div class="product-top-item__top product-item__top">
            <div class="product-top-item__img product-item__img"> <img src="${this.products[i].imgSrc}" alt="Mini LCW Chair"/></div>
            <div class="product-action product-action--rounded">
              <button class="product-action__item  product-action__cart"><i class="fa-solid fa-cart-plus"></i></button>
              <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
              <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <div class="product-top-item__bottom product-item__bottom"> 
            <figcaption class="product-top-item__heading heading heading-xs heading-center font-primary">${this.products[i].name}</figcaption><span class="product-top-item__price text text-md text-center color-heading">$${this.products[i].price}</span>
          </div>
        </figure>`
      i++;
    });
  },
  renderAccessories: function () {
    this.products.forEach((product) => {
      if (product.category === 'accessories')
        accessories.innerHTML +=
          `<div class="col col-4 xl-4 lg-6 md-6 sm-12"> 
        <figure class="accessories-item product-item action-horizontal obs-transition fade slide-down" data-index="${product.id}"> 
          <div class="accessories-item__top product-item__top"> 
            <div class="accessories-item__img product-item__img"> <img src="${product.imgSrc}" alt="${product.name}"/></div>
            <div class="product-action product-action--horizontal">
              <button class="product-action__item  product-action__cart"><i class="fa-solid fa-cart-plus"></i></button>
              <button class="product-action__item"><i class="fa-regular fa-heart"></i></button>
              <button class="product-action__item"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <div class="accessories-item__bottom product-item__bottom"> 
            <figcaption class="accessories-item__heading text text-lg text-center color-heading font-secondary">${product.name}</figcaption>
            <div class="accessories-item-price text text-sm text-center color-heading"> <span class="accessories-item-price__new">$${product.price}</span>
            </div>
          </div>
        </figure>
      </div>`;
    });
  },
  renderProductList: function () {

  },
  renderHomeProducts: function () {
    this.renderTrendingProducts();
    this.renderTopChairs();
    this.renderAccessories();
  },
  addHomeAnimation: function () {
    /*=====================
      Sale Banner Container
    ======================*/

    const saleBannerContainer = $('.banner-sale__container');
    const saleBannerContainerOptions = {
      rootMargin: '-45% 0px 0px 0px',
      threshold: 0,
    };
    const saleBannerContainerObserver = new IntersectionObserver((entries, saleBannerContainerObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.classList.add('appear');
        else
          entry.target.classList.remove('appear');
      })
    }, saleBannerContainerOptions)

    saleBannerContainerObserver.observe(saleBannerContainer);


    /*====================
      Sale Banner Contents
    =====================*/

    const saleBannerContents = $$('.banner-sale__heading, .banner-sale__desc, .banner-sale__cta');
    const saleBannerContentOptions = {
      rootMargin: '-30% 0px 0px 0px',
      threshold: 0,
    };
    const saleBannerContentObserver = new IntersectionObserver((entries, saleBannerContentsObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.classList.add('appear');
        else
          entry.target.classList.remove('appear');
      })
    }, saleBannerContentOptions)

    saleBannerContents.forEach(content => {
      saleBannerContentObserver.observe(content);
    })

    /*====================
      On Trending Products
    =====================*/

    const items = $$('.col.col-12.xl-12.lg-7.md-12.sm-12,.col.col-6.xl-6.lg-12.md-6.sm-12, .product-top-item, .accessories-item, .home-blog-item');
    console.log(items);
    const itemOptions = {
      rootMargin: '0px 0px -20% 0px',
      threshold: 0,
    };
    const itemObserver = new IntersectionObserver((entries, itemsObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.classList.add('appear');
      })
    }, itemOptions)

    items.forEach(product => {
      itemObserver.observe(product);
    })

    /*=============
      Stick Banners
    ==============*/

    const stickBanners = $$('.banner-stick__content, .banner-stick__img, .banner-side__img, .banner-side__content');
    const stickBannerOptions = {
      rootMargin: '0px 0px -50% 0px',
      threshold: 0,
    };
    const stickBannerObserver = new IntersectionObserver((entries, stickBannersObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          entry.target.classList.add('appear');
      })
    }, stickBannerOptions);

    stickBanners.forEach(banner => {
      stickBannerObserver.observe(banner);
    });
  },
  start: function () {
    this.handleHeader();
    this.handleMenu();
    this.handleEvents();
  },
}

