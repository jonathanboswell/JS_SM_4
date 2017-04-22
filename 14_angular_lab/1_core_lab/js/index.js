angular
    .module('app', [])
    .controller('StoreController', function() {
        this.products = [
            {"item": "apples", "count": 0, "price": 1, "description": "Keep the doctor away!" },
            {"item": "oranges", "count": 0, "price": 1.25, "description": "Perfect for Vitamin C" },
            {"item": "bananas", "count": 0, "price": .19, "description": "Bananas are the BEST!" },
            {"item": "grapes", "count": 0, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
        ];

        // Create an cart array 

        this.addToCart = function(product)
        {
            console.log(product);
            // Use .push() to add the product to the cart
        }

        // .remove() needs to take a parameter 
        // that parameter should be a product
        // similar to the addToCart() above
        // then 
        this.remove = function()
        {
            console.log("Inside remove function");

            // Uncomment the two lines of code below
            // Note: just because you uncomment, does not mean it will work
            // You need to put the parameter name that you put in .remove()
            // and pass it into the .indexOf() function

            // var index = this.products.indexOf()
            // this.products.splice(index, 1)
        }
    });