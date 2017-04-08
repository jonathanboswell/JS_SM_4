$('.alert').hide();
$(function(){
    $('#apiForm').submit(function(submitEvent){
        submitEvent.preventDefault();
    })
    
    $('#orderButton').click(function(clickEvent){
        if($('#apiForm').get(0).checkValidity())
        {
            console.log("Email order from: ", $('#email').val(), ' for ', $('#order').val());
        } else {
            console.log("Gotta enter an email, bruh!");
        }

        pretendSendMail($('#order').val());

        //sendMail($('#order').val(),$('#email').val());
        
        $('#orderMessage').html("Thank you for your order.");
        $('.alert').show();
    });

    function pretendSendMail(order) {
        $.ajax({
            type: 'POST',
            url: 'http://headshot.mockable.io/messages/send.json', 
            data: {
                'message': {
                  'from_email': 'jonathan@headshot.com',
                  'to': [
                      {
                        'email': 'jonathan@arborbridge.com',
                        'name': 'Jonathan Boswell',
                        'type': 'to'
                      }
                    ],
                  'autotext': 'true',
                  'subject': 'Thank You For Your Order',
                  'html': 'Your order for: ' +  order + ' will be ready for pickup in 20 minutes.'
                }
            }
        }).done(function(response){
            console.log(response);
        });
    }

    function sendMail(order, email) {
        $.ajax({
              type: 'POST',
              url: 'https://mandrillapp.com/api/1.0/messages/send.json',
              data: {
                'key': 'bXDy5sQadMnK9WprDtBxrg',  //This will stop working in a couple days
                'message': {
                  'from_email': 'jonathan@headshot.com',
                  'to': [
                      {
                        'email': email,
                        'name': 'Jonathan Boswell',
                        'type': 'to'
                      }
                    ],
                  'autotext': 'true',
                  'subject': 'Thank You For Your Order',
                  'html': 'Your order for: ' +  order + ' will be ready for pickup in 20 minutes.'
                }
              }
        }).done(function(response) {
               console.log(response); // if you're into that sorta thing
        });
    }
});