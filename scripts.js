var currentImage = "/images/summer.jpg";
var rand = 3500;
var randomTimeout = setTimeout(changeBG, rand);
var isLoop = false;
var popup = document.getElementById("popup");
var title = document.getElementById("title");
var textbox = document.getElementById("textbox");
var subtext = document.getElementById("subtext");
var hyperlink = document.getElementById("hyperlink");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE IMAGE TO AUTUMN

function changeBG() {
    if(isLoop == true){
        currentImage = "images/autumn.jpg";
        document.getElementById("real").src = currentImage;
        console.log("changeBG");
            if(isLoop == false){
                clearTimeout(randomTimeout);
            }else{
                setTimeout(changeItBack, 275);
            }
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CHANGE IMAGE TO SUMMER

function changeItBack() {
    if(isLoop == false){
        clearTimeout(randomTimeout);
    }else{
        rand = Math.round(Math.random() * 5000 + 1500);        
        currentImage = "images/summer.jpg";
        document.getElementById("real").src = currentImage;
        console.log(rand);
        setTimeout(changeBG, rand)
        //changeBG();           
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TOGGLE THE SWITCH

function toggle(){
    isLoop = !isLoop;
};

function winner(){
        popup.style.visibility = "visible";
        title.innerHTML = "YOU WIN!";
        openNext();
        subtext.innerHTML = "Next clue in 5"
};

function loser(){
    title.innerHTML = "You Lose!";
    subtext.innerHTML = "Tap to try again";
    popup.style.visibility = "visible";
    //alert("WINNER!");
};

function openNext(){
    var timeleft = 4;
    var downloadTimer = setInterval(function(){
          if(timeleft === 0){
            clearInterval(downloadTimer);
            window.open("https://bit.ly/3h8IBm7", "_self", false);
          }
      subtext.innerHTML = "Next clue in " + timeleft;
      timeleft -= 1;
    }, 1000);
};





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////TECHNICAL SHIT

// FOR MOBILE
document.getElementById("bgimg").addEventListener("touchstart", function () {
    toggle();
        if(isLoop === true){
            rand = Math.round(Math.random() * 5000 + 1500);
            document.getElementById("real").src = "images/summer.jpg";
            randomTimeout = setTimeout(changeBG, rand);
            console.log(rand);
            popup.style.visibility = "hidden";
            
        }else if (isLoop === false && currentImage === "images/autumn.jpg"){
            winner();
        
        }else if(isLoop === false && currentImage === "images/summer.jpg"){
            rand = Math.round(Math.random() * 5000 + 1500);
            clearTimeout(randomTimeout);
            console.log("clicked stop");
            loser();
        }
}, false);



