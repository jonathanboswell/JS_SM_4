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
.factory('ProductsFactory', function($http){
    var ProductsFactory = this;

    // Create a method to get the data
    ProductsFactory.getData = function()
    {
        // It is very important to return $http whenever you use it
        // This is called a "promise" and allows you to "chain" actions
        return $http.get('http://headshot.mockable.io/products').then(function(response){

            // Set the data to the Factory
            ProductsFactory.inventory = response.data.products;

            // Return the data
            return ProductsFactory.inventory;

        }, function(error) {
            console.log("Something went wrong", error);
        });
    }

    // See how you can add an event and chain it to the getData method
    ProductsFactory.reload = function()
    {
        // Use return on all promises to continuing chaining functionality
        return ProductsFactory.getData().then(function(response){
            console.log("Data reloaded", response);
            return response;
        });
    }

    // Invoke the data call before returning the factory
    ProductsFactory.getData();

    return ProductsFactory;
})
