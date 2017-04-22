angular
    .module('app', [])

    // Store Controller
    // Angular will "inject" objects that you include in your callback function
    // $scope = a native angular object that manages global variable scope
    // ProductFactory is a factory that we create below
    .controller('StoreController', function($scope, ProductFactory) {
        $scope.page = "Store"
        $scope.products = ProductFactory.products;

        $scope.addToCart = function(product)
        {
            var index = $scope.products.indexOf(product);
            $scope.products[index]["inventory"]--;
        }
    })

    // Inventory Controller
    // The $scope and ProductFactory injected here are the same as the ones above
    // The SUPER COOL part is that a change to either in this controller
    //    will be reflected in another controller
    .controller('InventoryController', function($scope, ProductFactory) {
        $scope.page = "Inventory"
        $scope.products = ProductFactory.products
    })

    // Factories are how we create reusable objects in angular
    .factory('ProductFactory', function(){
        this.products = [
            {"item": "apples", "inventory": 10, "price": 1, "description": "Keep the doctor away!" },
            {"item": "oranges", "inventory": 20, "price": 1.25, "description": "Perfect for Vitamin C" },
            {"item": "bananas", "inventory": 15, "price": .19, "description": "Bananas are the BEST!" },
            {"item": "grapes", "inventory": 12, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
        ]

        return this;
    });