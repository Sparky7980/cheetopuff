console.log("Script By Sparky7980")
localStorage.setItem("totalWins", 968);
localStorage.setItem("totalKills", 98765);
localStorage.setItem("coinsOwned", 87687677432);
var b = prompt("What character would you like? 1-35");
        if(isNaN(b) || b < 1 || b > 35){
            window.alert("Please put a number from 1-35 next time.");
        }else if(b != null || b != undefined || b != ""){
            localStorage.setItem("playerSkin", b);
            window.alert("Please reload to enable the skin");
isl = prompt("What island do you want to go to?")
