 
var num = 0;
var i = 1;
var cookie = document.getElementById("cookie");
var arrImages = ["image/stade1.png","image/stade2.png",
				"image/stade3.png","image/stade4.png",
				"image/stade5.png","image/stade6.png",
				"image/stade7.png","image/stade8.png",
				"image/stade9.png","image/stade10.png",
				"image/stade11.png","image/stade12.png",
				"image/stade13.png","image/stade14.png",
				"image/stade15.png","image/stade16.png"]

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







