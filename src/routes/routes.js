const routes = {
  home: {
    index: () => '/',
  },
  productDetail: {
    index: () => `/products/:id`,
  },
};

export default routes;
