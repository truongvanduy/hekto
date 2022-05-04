app
  products: [],
  inCartProducts: [],


  handleEvents: (
    - When clicking on the Add to cart button
  ),
  updateProductList: (),
  updateInCartProductsList: (),
  updateCartIcon: (),
  renderTrendingProducts: (),
  renderTopChairs: (),
  renderAccessories: (),
  renderProductList: (),
  renderHomeProducts: (
    renderTrendingProducts();
    renderTopChairs();
    renderAccessories();
  ),
  start: (
    handleEvents();
  ),