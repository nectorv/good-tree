//initial number of cookies    
var num = 0;
var i = 1;
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
    if(num == 10 ){
        nextImage();
    }
    if(num == 20) {
        nextImage();
    }
    if(num == 30) {
        nextImage();
    }
    if(num == 40) {
        nextImage();
    }
	if(num == 50) {
        nextImage();
    }
	if(num == 60) {
        nextImage();
    }
}

function nextImage() {

  document.getElementById("photo").src = arrImages[i];
  
  if (i+1 >= arrImages.length) {
    i = 0;
  } else {
    i++;
  }

}







