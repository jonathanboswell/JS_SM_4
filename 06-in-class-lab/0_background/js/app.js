function doMagic()
{
    $('#magic').html("Abra Kadabra Alakazam");
}

function disappear()
{
    $('#magic').html("");
}

$('#magicButton').click(doMagic);
$('#disappearButton').click(disappear);



















function fireMagic()
{
    $('body').css('background-color', '#000');
    var string = "";
    string = `<svg viewBox="0 0 600 300">
                  <!-- Pattern -->
                  <pattern 
                           id="p-fire" 
                           viewBox="30 100 186 200"
                           patternUnits="userSpaceOnUse"
                           width="216" height="200"
                           x="-70" y="35">

                    <!-- Fire -->
                    <image xlink:href="http://tympanus.net/codrops-playground/assets/images/posts/23145/fire.gif" width="256" height="300"/>
                  </pattern>

                  <!-- Text -->
                  <text text-anchor="middle"
                        x="50%"
                        y="50%"
                        dy=".35em"
                        class="text"
                        >
                    Abra Kadabra Alakazam
                  </text>

                </svg>`;
    $("#magic").html(string);
}
