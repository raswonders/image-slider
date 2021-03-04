let img = document.getElementById("image");
let i = 0;
let images = ["pic01.jpg", "pic02.jpg", "pic03.jpg", "pic04.jpg", "pic05.jpg",
              "pic06.jpg", "pic07.jpg"];

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
