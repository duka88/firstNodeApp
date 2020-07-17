const Product = require('../models/product');


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            path: '/products',
            pageTitle: 'Shop'
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
   
    Product.finbById(prodId, product =>{       
        res.render('shop/product-detail', {
            product: product,
            path: '/products/id',
            pageTitle: product.title
        });
    });
      
   
};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            path: '/',
            pageTitle: 'Shop'
        });
    });
};

exports.getCart = (req, res, next) => {
    const prodId = req.body.productId;
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Cart'
    });
};

exports.postCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Cart'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/cart', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders'
    });
};