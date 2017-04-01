$(function(){

    function convert(amount)
    {
        //Static variables
        var rate = .8;
        var from_symbol = "$";
        var to_symbol = "&pound;";

        //Dynamic variables
        var amount = parseFloat($("#amount").val());

        //If / Else
        if(amount && typeof(amount)==="number") //make sure amount exists and that it's a number
        {
            $('#convertedAmount').html(currencyFormat(amount,from_symbol) + " = " + currencyFormat(amount * rate, to_symbol));
        } else {
            $('#convertedAmount').html('<div class="alert alert-warning">Please enter a valid number</div>');
        }
    }

    $("#convert").click(convert);
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