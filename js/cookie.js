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
				"image/stade5.PNG","image/stade6.PNG",
				"image/stade7.PNG","image/stade8.PNG",
				"image/stade9.PNG","image/stade10.PNG",
				"image/stade11.PNG","image/stade12.PNG",
				"image/stade13.PNG","image/stade14.PNG",
				"image/stade15.PNG","image/stade16.PNG"]

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
	if(num == 70) {
        nextImage();
    }
	if(num == 80) {
        nextImage();
    }
	if(num == 90) {
        nextImage();
    }
	if(num == 100) {
        nextImage();
    }
	if(num == 110) {
        nextImage();
    }
	if(num == 120) {
        nextImage();
    }
	if(num == 130) {
        nextImage();
    }
	if(num == 140) {
        nextImage();
    }
	if(num == 150) {
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







