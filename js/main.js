let img = document.getElementById("image");
let arrows = document.querySelectorAll(".arrowBox")
let images = ["model-beach.jpg", "model-desert.jpg", "model-factory.jpg", "model-flower.jpg", "model-foot.jpg",
              "model-studio.jpg", "model-sunbath.jpg"];
let i = 0;

arrows.forEach(arrow => arrow.addEventListener('click', function(e) {
 if (arrow.classList.contains("left")) updatePic(-1);
 if (arrow.classList.contains("right")) updatePic(1);
}))


function updatePic(step) {
  i += step
  i = i % images.length;
  if (i < 0) i += images.length
  img.setAttribute("src", `img/${images[i]}`)
}


function initPic(index) {
  img.setAttribute("src", `img/${images[i]}`)
}

initPic(0);
