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
      {"name":"shoes", "price": 50, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shoes", "price": 60, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 3 },
      {"name":"shoes", "price": 55, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 2 },
      {"name":"shoes", "price": 100, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 4 },
      {"name":"shoes", "price": 200, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shoes", "price": 80, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shoes", "price": 20, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shoes", "price": 45, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shoes", "price": 180, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"shirt", "price": 30, "count": {"stock":100, "cart": 0}, "reviews": 20, "stars": 4 }
    ];
    return ProductsFactory;
})
