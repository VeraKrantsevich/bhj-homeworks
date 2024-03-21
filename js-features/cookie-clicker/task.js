const imageCookie = document.getElementById("cookie");
imageCookie.onclick = function() {
  console.log("Нажали на картинку");
  const clicker = document.getElementById("clicker__counter");
  clicker.textContent++;
  console.log(clicker.textContent);
  if (clicker.textContent % 2) {
    imageCookie.width = 200;
    imageCookie.height = 128;
  } else {
    imageCookie.width = 250;
    imageCookie.height = 160;
  }
};


