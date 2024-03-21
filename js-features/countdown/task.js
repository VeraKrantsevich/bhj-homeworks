const startCountDown = function(){
  const timer = document.getElementById("timer");
  timer.textContent = (timer.textContent - 1);
  console.log(Number(timer.textContent));
  if (Number(timer.textContent) < 0) {
    clearInterval(interval);
    alert("Вы победили в конкурсе!");
  }
}

const interval = setInterval(startCountDown, 100);
