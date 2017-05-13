angular
    .module('app', [])
    .controller('StoreController', function() {
        this.products = [
            {"item": "apples", "count": 0, "price": 1, "description": "Keep the doctor away!" },
            {"item": "oranges", "count": 0, "price": 1.25, "description": "Perfect for Vitamin C" },
            {"item": "bananas", "count": 0, "price": .19, "description": "Bananas are the BEST!" },
            {"item": "grapes", "count": 0, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
        ];

        this.addToCart = function(product)
        {
            console.log(product);
        }
    });
