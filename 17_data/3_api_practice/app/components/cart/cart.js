angular
.module('app')
.component('cart', {
    templateUrl: "components/cart/cart.html",
    controller: "CartController",
    controllerAs: "controller",
})
.controller('CartController', function(CartFactory) {
    this.cart = CartFactory;
})
.factory('CartFactory', function(){
    var CartFactory = this;
    CartFactory.items = [];
    CartFactory.total = 0;

    CartFactory.add = function(product)
    {
      if(CartFactory.items.indexOf(product) < 0)
      {
        CartFactory.items.push(product);
      }
      product["count"]["cart"]++;
      CartFactory.total += product["price"];
    }

    CartFactory.remove = function(product)
    {
      //Update the total
      CartFactory.total -= product["price"] * product["count"]["cart"];

      //Move items from cart to inventory and set cart to 0
      product["count"]["inventory"] += product["count"]["cart"];
      product["count"]["cart"] = 0;

      //Remove from cart
      var index = CartFactory.items.indexOf(product);
      CartFactory.items.splice(index, 1);
    }
    return CartFactory;
})
