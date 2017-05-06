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

// Notice how we inject $http into our ProductsFactory callback
.factory('ProductsFactory', function($http){
    var ProductsFactory = this;

    //This is an array of objects
    ProductsFactory.inventory = [
      {"name":"shoes", "price": 50, "count": {"stock": 30, "cart": 0}, "reviews": 15, "stars": 5 },
      {"name":"belt", "price": 20, "count": {"stock": 100, "cart": 0}, "reviews": 8, "stars": 3 },
      {"name":"pants", "price": 75, "count": {"stock": 50, "cart": 0}, "reviews": 12, "stars": 4 },
      {"name":"shirt", "price": 30, "count": {"stock":100, "cart": 0}, "reviews": 20, "stars": 4 },
      {"name":"socks", "price": 8, "count": {"stock":300, "cart": 0}, "reviews": 12, "stars": 4 },
      {"name":"hat", "price": 24, "count": {"stock":50, "cart": 0}, "reviews": 80, "stars": 5 }
    ];

    // Variables for our API call
    var url = 'http://headshot.mockable.io/products';
    var successCallback = function(response){
      ProductsFactory.inventory = response.data.products;
    }

    // This is an API call
    $http.get(url).then(successCallback);

    return ProductsFactory;
})
