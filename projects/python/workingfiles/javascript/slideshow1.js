let index1 = 1;
showSlides1(index1);

// Next/previous controls
function plusSlides1(y) {
  showSlides1(index1 += y);
}

// Thumbnail image controls
function currentSlide1(y) {
  showSlides1(index1 = y);
}

function showSlides1(y) {
  let x;
  let slides1 = document.getElementsByClassName("mySlides1");

  if (y > slides1.length) {
     index1 = 1
    }
  if (y < 1) {
    index1 = slides1.length
    }

  for (x = 0; x < slides1.length; x++) {
    slides1[x].style.display = "none";
    }

  slides1[index1-1].style.display = "block";
  
}
