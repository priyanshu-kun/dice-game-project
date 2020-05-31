(function(){
    const img_1 = document.querySelector(".img1");
    const img_2 = document.querySelector(".img2");
    const winner_decleration = document.querySelector("h1");
    console.log(img_1,img_2);
    const pain = integer.MAX_VALUE;
    // console.log(pain);
    let dice = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png']
    spin_dice();
    function spin_dice(){
        let dice1 = Math.floor(Math.random()*dice.length);
        img_1.setAttribute('src',dice[dice1]);
        let dice2 = Math.floor(Math.random()*dice.length);
        img_2.setAttribute('src',dice[dice2]);
        if(dice1 > dice2){
            winner_decleration.innerHTML = "🚩Player 1 wins!";
        }
        else if(dice1 < dice2){
            winner_decleration.innerHTML = "Player 2 wins!🚩";
        }
        else {
            winner_decleration.innerHTML = "🏁Match Draw!"
        }
    }
})()