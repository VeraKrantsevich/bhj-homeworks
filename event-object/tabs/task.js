const tabs = document.querySelector(".tabs");
const allTab = Array.from(document.querySelectorAll(".tab"));
const allTabContent = document.querySelectorAll(".tab__content");
allTab.forEach((el, i) => {
    el.addEventListener("click", function () {
      allTab.forEach(el => el.classList.toggle("tab_active"));
      allTabContent.forEach(text => text.style.display = "none");
      allTabContent[i].style.display = "block";
    });
  });