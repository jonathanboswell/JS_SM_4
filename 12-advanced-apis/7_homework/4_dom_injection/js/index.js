$(function(){
    
    var songs = ["Halo"];
    var artists = ["Beyonce"];
    var images = ["song.jpg"];

    for(var i = 0; i < songs.length; i++)
    {
        var string = `
            <!-- You can put HTML -->
            <!-- directly into this multiline string -->
            <!-- this is a special character it's the 'tick' which is on the upper left corner of the keyboard -->
        `;

        var string = "";
        string += "<!-- or you can build a string -->";
        string += "  <!-- using multiple lines -->";
        string += "  <!-- like this -->";
        string += '<!-- with single quotes or double quotes -->';
        
        //can you take the html template you style and inject it into the DOM?

        //can you get the button to set the "Now Playing" <h3> tag to whatever is clicked?
        //  hint $('#songs').on('click','.btn', function(){});

        $('#songs').append(string);
    }
});
