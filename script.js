function madLibs(){
    let player = prompt("Would you like 'Story One' or 'Story Two'?");
    let story1 = "Story One";
    let story2 = "Story Two";

    if (player == story1){
        let adj = prompt("type and adjective");
        let place = prompt("type a general place");
        let vehicle = prompt("type a vehicle name (plural)");
        let game = prompt("type the name of a game");
        let noun = prompt("type a plural noun");
        let verb = prompt("type an 'ing' verb");
        let verb2 = prompt("type another 'ing' verb")
        let food = prompt("type a food name (plural)")
        let sport = prompt("type the name of a sport");
        let verb3 = prompt("type another 'ing' verb" );
        let noun2 = prompt("type an emotion");
        let number = prompt("type a number");

        document.getElementById( "storyOne").innerText = `A vacation is when you take a trip to some ${adj} place near an amazing ${place}. A good vacation place is one where you can ride ${vehicle} or play ${game} or go hunting for ${noun}. I like to spend my time ${verb} or ${verb2}. When parents go on a vacation, they spend their time eating three ${food} a day. Usually, fathers play ${sport}, and mothers spend their time ${verb3}. Adults need vacations more than kids because adults are always very ${noun2} because they have to work ${number} hours every day all year just to afford their vacations!`

    } else if (player == story2) {
        let adj = prompt("type an adjective");
        let famous = prompt("type a famous place");
        let noun = prompt("type a plural noun");
        let adj2 = prompt("type another adjective");
        let food = prompt("type a food (plural)");
        let emotion = prompt("type an emotion");
        let verb = prompt("type an 'ing' verb");
        let common = prompt("type a common place");
        let adj3 = prompt("type another adjective");
        let noun2 = prompt("type a noun");
        let adj4 = prompt("type another adjective");
        let noun3 = prompt("type another noun");
        let family = prompt("type a family member");
        let adj5 = prompt("type another adjective");
    
        document.getElementById("storyTwo").innerText = `Today we took a ${adj} fieldtrip to ${famous}. They're famous for making ${noun} and for cooking ${adj2} ${food}. Eating all that food made me feel ${emotion}. Next we enjoyed the local tradition of ${verb} in the middle of the ${common}! Finally, we went shopping for souvenirs. I bought a ${adj3} ${noun2} for myself, and a ${adj4} ${noun3} for my favorite ${family}. I'll definitely never forget this ${adj5} trip!`;
     
        } else {
        alert("Type in 'Story One' or 'Story Two'");
      }
    }
    madlibs();