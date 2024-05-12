const rotators = document.querySelectorAll('.rotator__case');
let index = 0;

function rotator() {
  rotators[index].classList.remove('rotator__case_active');

  if (index === rotators.length - 1) {
      index = 0;
  } else {
    index++;
  }

  rotators[index].classList.add('rotator__case_active');
};

setInterval(rotator, 1000);