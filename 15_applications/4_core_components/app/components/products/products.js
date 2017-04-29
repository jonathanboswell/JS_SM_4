angular
.module('app')
.component('products', {
    templateUrl: "components/products/products.html",
    controller: "ProductsController",
    controllerAs: "controller",
})
.controller('ProductsController', function(ProductsFactory, CartFactory) {
    this.products = ProductsFactory;
    this.cart = CartFactory;
})
.factory('ProductsFactory', function(){
    var ProductsFactory = this;
    ProductsFactory.inventory = [
      {"name":"shoes", "price": 60, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shirt", "price": 30, "count": {"stock":100, "cart": 0}, "reviews": 20, "stars": 4 }
    ];
    return ProductsFactory;
})
