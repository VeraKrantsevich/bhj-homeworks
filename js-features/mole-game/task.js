const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
const countHoles = document.getElementsByClassName("hole").length;
const hole = [];

function end(massage) {
  alert(massage);
  dead.textContent = 0;
  lost.textContent = 0;
};

for (let i = 1; i <= countHoles; i++) {
  hole[i] = document.getElementById('hole' + i);

  hole[i].onclick = () => {
    if (hole[i].classList.contains('hole_has-mole')){
      dead.textContent++;
    }
    else{
      lost.textContent++;
    }
    dead.textContent == 10 ? end("Победа!") : null;
    lost.textContent == 5 ? end("Поражение! Игра окончена :(") : null;
  }
};

