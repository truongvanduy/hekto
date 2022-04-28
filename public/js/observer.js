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

const onTrendingItems = $$('.on-trending-item, .product-top-item, .accessories-item, .home-blog-item');
const onTrendingItemOptions = {
  rootMargin: '0px 0px -20% 0px',
  threshold: 0,
};
const onTrendingItemObserver = new IntersectionObserver((entries, onTrendingItemsObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting)
      entry.target.classList.add('appear');
  })
}, onTrendingItemOptions)

onTrendingItems.forEach(product => {
  onTrendingItemObserver.observe(product);
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
}, stickBannerOptions)

stickBanners.forEach(banner => {
  stickBannerObserver.observe(banner);
})