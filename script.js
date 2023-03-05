let slideIdx = 0;
updateImages()
function toggle() {
  slideIdx++;
  updateImages();
}

function updateImages(){
  console.log("I am updating!");
  console.log(slideIdx)
  let slides = document.getElementsByClassName("container3")

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  if (slideIdx >= slides.length) {slideIdx = 0};
  slides[slideIdx].style.display = "block";
}
