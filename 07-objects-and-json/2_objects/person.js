var Shopper = function(name, budget) {
    console.log("We created a new Shopper: " + name);
    this.name = name;
    this.budget = budget;
    this.total = 0;
    this.cart = [];

    this.addItem = function(Item)
    {
        this.cart.push(Item);
        this.total += (Item.price * Item.qty);
    }
    
    this.removeItem = function(name, qty)
    {
        for(var i = 0; i < this.cart.length; i++)
        {
            var cart_item = this.cart[i];
            if(cart_item["name"] === name)
            {
                cart_item["qty"] -= qty;
                this.total -= (qty * cart_item["price"]);
            }
        }
    }

    this.checkout = function()
    {
        if(this.total > this.budget)
        {
            console.log("Gotta put something back!");
        } else {
            this.budget -= this.total;
            this.cart = [];
            console.log(this.name + " spent " + this.total + " and has " + this.budget + " left.");
        }
    }
}

var Item = function(name, qty, price) {
    this.name = name;
    this.qty = qty;
    this.price = price;
}

var shopper = new Shopper("Rachel",10);
shopper.addItem(new Item("Carrots",10,.50));
shopper.addItem(new Item("Shampoo",1,5.99));
//shopper.removeItem("Carrots",3);

shopper.checkout();


