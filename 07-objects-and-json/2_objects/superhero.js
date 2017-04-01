var Superhero = function(firstName, superheroName) {
    this.name = firstName;
    this.superheroName = superheroName;
    this.villiansDestroyed = [];
    console.log("Superhero created");

    this.transform = function()
    {
        console.log(this.name + " transforms into " + this.superheroName);
    }

    this.destroy = function(villan)
    {
        this.villiansDestroyed.push(villan);
    }
}

var wonderWoman = new Superhero("Diana", "Wonder Woman");
wonderWoman.transform();
wonderWoman.destroy("Doctor Psycho");

var superman = new Superhero("Clark", "Superman");
superman.transform();
superman.destroy("Lex Luther");
