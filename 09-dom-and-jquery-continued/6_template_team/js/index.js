$(function(){
    var products    = [
        {
            "item": "",
            "details": "",
            "image": "",
            "price": 0,
            "count": 0
        },
    ];
    var cart        = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var product = products[i];
        var string = "";
        
        $('#products').append(string);
    }

    //Add product event
    $('#products').on('click', '.btn', function(button){
     });

    //View cart event
    $('#viewCart').on('click', function(){
        //Clear the cart
        $('#cartContents').html('');

        //Build the cart
        for(var i = 0; i < products.length; i++)
        {
            var product = products[i]
            var count = product["count"];
            if(count > 0) {
                var string = "";

                string += '<li class="list-group-item clearfix">';
                string += product["item"];
                string += '<span class="badge badge-pill badge-primary">' + count + '</span>';
                string += '</li>';

                $('#cartContents').append(string);
            }
        }
    });


});