$(function(){
    var products    = [
        {
            "item": "apples",
            "details": "This is a delicious apple",
            "image": "apples.png",
            "price": 1.25,
            "count": 0
        },
        {
            "item": "oranges",
            "details": "I love oranges! They are the best.",
            "price": 1.00,
            "count": 0
        },
        {
            "item": "bananas",
            "details": "Bananas are the safest fruit to eat unorganicly.",
            "price": .19,
            "count": 0
        }
    ];
    var cart        = [];

    //Add products to the store
    for(var i = 0; i < products.length; i++)
    {
        var product = products[i];
        var string = "";
        var image = product["image"] || 'default.jpg';
        
        // once we have a product design we like, "templatize" it here
        /*
        string +='<div class="col-xs-2">';
        string +='  <div class="product">';
        string +='      <img class="img-thumbnail" src="./images/' + image + '"/>';
        string +='      <div class="title">' + product["item"] + '</div>';
        string +='      <div class="price">' + product["price"] + '</div>';
        string +='      <div class="details">' + product["details"] + '</div>';
        string +='      <div class="quantity">Quantity';
        string +='          <select id="applesSelect">';
        string +='              <option value=1>1</option>';
        string +='              <option value=2>2</option>';
        string +='              <option value=3>3</option>';
        string +='          </select>';
        string +='      </div>';
        string +='      <button class="btn btn-success" value=' + i +   '>Add to Cart</button>';
        string +='  </div>';
        string +='</div>';
        */

        $('#products').append(string);
    }

    //Add product event
    $('#products').on('click', '.btn', function(button){
        var index = $(this).val();

        //right now this only increments...get it to add the quantity :)
        products[index]["count"]++;
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