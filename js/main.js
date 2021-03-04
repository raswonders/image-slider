let img = document.getElementById("image");
let i = 0;
let images = ["model-beach.jpg", "model-desert.jpg", "model-factory.jpg", "model-flower.jpg", "model-foot.jpg",
              "model-studio.jpg", "model-sunbath.jpg"];

function updatePic(step) {
  i += step
  i = i % images.length;
  if (i < 0) i += images.length
  img.setAttribute("src", "img/" + images[i])
}


function initPic(index) {
  img.setAttribute("src", "img/" + images[index])
}

initPic(0);
