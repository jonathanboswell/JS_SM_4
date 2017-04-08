/*
Independent practice:
- Add "price" to each product object
- Have the cart reflect the subtotal of each product (quantity * price)
- Add a <li></li> that reflects the total amount of all the items in the cart
- Add a "description" to each product object
- Have the description appear in the info box when you hover over a product
BONUS:
- Add a "remove" button in the cart, that when clicked removes the product from the cart and sets the count back to 0
*/
$(function(){
    // Define Variables
    var products    = [
        {"item": "apples", "count": 0 },
        {"item": "oranges", "count": 0 },
        {"item": "bananas", "count": 0 }
    ];
    
    // Call Initial Functions
    buildStore();
    $('#info').hide();

    // Handle Events
    $('#products').on('click','.btn', function(){
        products[$(this).val()]["count"]++;
        buildCart();
    });

    $('#products').on('mouseenter','.list-group-item', function(){
        var index = $(this).find('button').val();
        $('#info').show();
        $('#info').text("You are thinking about: " + products[index]["item"]);
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

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var count = products[i]["count"];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += products[i]["item"];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }  
    }

});