function newJoke() {
    jokes = [
        "How do you make holy water? You boil the hell out of it.", 
        "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!", 
        "Did you know the first French fries weren't actually cooked in France? They were cooked in Greece."
    ];

    randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    
    document.getElementById("jokes-output").innerHTML = randomJoke;
}