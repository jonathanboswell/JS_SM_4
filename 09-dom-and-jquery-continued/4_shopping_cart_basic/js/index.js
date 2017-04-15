/*
Independent practice:
X Add "price" to each product object
X Have the cart reflect the subtotal of each product (quantity * price)
X Add a <li></li> that reflects the total amount of all the items in the cart
X Add a "description" to each product object
X Have the description appear in the info box when you hover over a product
BONUS:
- Add a "remove" button in the cart, that when clicked removes the product from the cart and sets the count back to 0
*/
$(function(){
    // Define Variables
    var products    = [
        {
            "item": "apples",
            "count": 0,
            "price": 1,
            "description": "Keep the doctor away!"
        },
        {"item": "oranges", "count": 0, "price": 1.25, "description": "Perfect for Vitamin C" },
        {"item": "bananas", "count": 0, "price": .19, "description": "Bananas are the BEST!" },
        {"item": "grapes", "count": 0, "price": 2.25, "description": "Frozen grapes are a yummy dessert"}
    ];
    
    // Call Initial Functions
    buildStore();
    $('#info').hide();

    // Handle Events
    $('#products').on('click','.btn', function(){
        products[$(this).val()]["count"]++;
        buildCart();
    });

    $('#cartContents').on('click','.btn', function(){
        products[$(this).val()]["count"] = 0;
        $(this).parent().remove();
    });

    $('#products').on('mouseenter','.list-group-item', function(){
        var index = $(this).find('button').val();
        $('#info').show();
        $('#info').text(products[index]["description"]);
    });

    $('#products').on('mouseleave', '.list-group-item', function(){
        $('#info').hide();
    });


    // Define Functions
    function buildStore()
    {
        //Add products to the store
        for(var i = 0; i < products.length; i++)
        {
            var string = "";

            string += '<li class="list-group-item">';
            string +=   products[i]["item"];
            string += ' <button class="btn btn-success btn-xs pull-right" value=' + i + '>Add to Cart</button>';
            string += '</li>';

            $('#products').append(string);
        }
    }

    function buildCart()
    {
        $('#cartContents').html('');
        var total = 0;

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = products[i]["count"];
            var subtotal = products[i]["price"] * count;
            total += subtotal;
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i]["item"];
                string += '<button class="btn btn-danger" value=' + i + '>Remove</button>';
                string += '<span class="label label-success pull-right">' + currencyFormat(subtotal, "$") + '</span>';
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
        //Append Total
        var string = "";
        string += '<li class="list-group-item active clearfix">';
        string += "TOTAL";
        string += '<span class="label label-success pull-right">' + currencyFormat(total, "$") + '</span>';
        string += '</li>';
        $('#cartContents').prepend(string);
    }

});

function currencyFormat(number, symbol)
{
    if(typeof(number)==="number")
    {
        return symbol + commaSeparateNumber(number.toFixed(2));
    }
}

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}