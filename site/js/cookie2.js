
//initial number of cookies    
var num = 0;
/*window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Bakery";
}*/
var cookie = document.getElementById("cookie");
var arrImages = ["image/stade1.PNG","image/stade2.PNG",
				"image/stade3.PNG","image/stade4.PNG",
				"image/stade5.PNG","image/stade6.PNG"]

function cookieClick() { 
    num += 1;

    var numbers = document.getElementById("numbers");
    
    numbers.innerHTML = num;      
    //automatic Granny upgrade to 2x
    if(num >= 10 ){
        document.getElementById("photo").src=arrImages[0];
    }

    //automatic factory upgrade to 10x
    if(num >= 20) {
        document.getElementById("photo").src= arrImages[1];
    }

    //automatic plant upgrade to 30x
    if(num >= 30) {
        document.getElementById("photo").src= arrImages[2];
    }

    //automatic super factory upgrade to 1000x
    if(num >= 40) {
        document.getElementById("photo").src= arrImages[3];
    }
	if(num >= 50) {
        document.getElementById("photo").src= arrImages[4];
    }
	if(num >= 60) {
        document.getElementById("photo").src= arrImages[5];
    }
}

