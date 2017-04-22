angular
    .module('app', [])
    .controller('StoreController', function($scope, ProductFactory, CartFactory) {
        $scope.page = "Store"
        $scope.products = ProductFactory.products;
        $scope.addToCart = CartFactory.add;
    })
    .controller('InventoryController', function($scope, ProductFactory) {
        $scope.page = "Inventory";
        $scope.products = ProductFactory.products;
    })
    .controller('CheckoutController', function($scope, CartFactory) {
        $scope.page = "Checkout";
        $scope.cart = CartFactory.cart;
        $scope.remove = CartFactory.remove;
    })
    .factory('CartFactory', function(ProductFactory){
        var CartFactory = this;
        CartFactory.cart = [];

        CartFactory.add = function(product)
        {
            //Get index of product in the cart
            var cart_index = CartFactory.cart.indexOf(product)
            if(cart_index<0)
            {
                CartFactory.cart.push(product);
                cart_index = CartFactory.cart.indexOf(product);
            }
            CartFactory.cart[cart_index]["count"]++;

            var product_index = ProductFactory.products.indexOf(product);
            ProductFactory.products[product_index]["inventory"]--;
        }

        CartFactory.remove = function(product)
        {
            // Add back to the inventory
            var product_index = ProductFactory.products.indexOf(product);
            ProductFactory.products[product_index]["inventory"] += product["count"];

            // Reset count
            ProductFactory.products[product_index]["count"] = 0;

            // Remove from the cart       
            var cart_index = CartFactory.cart.indexOf(product);
            CartFactory.cart.splice(cart_index, 1);
        }
        return CartFactory;
    })
    .factory('ProductFactory', function(){
        var ProductFactory = this
        ProductFactory.products = [
            {"item": "apples", "inventory": 10, "count":0, "price": 1, "description": "Keep the doctor away!" },
            {"item": "oranges", "inventory": 20, "count":0, "price": 1.25, "description": "Perfect for Vitamin C" },
            {"item": "bananas", "inventory": 15, "count":0, "price": .19, "description": "Bananas are the BEST!" },
            {"item": "grapes", "inventory": 12, "count":0, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
        ]

        return ProductFactory;
    });