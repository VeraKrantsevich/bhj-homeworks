
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));
const dropdownList = document.querySelector('.dropdown__list');

dropdownValue.addEventListener('click', (e) => {
    dropdownList.classList.toggle('dropdown__list_active');
});

dropdownItems.forEach(item => {
  item.addEventListener('click', (e) => {
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  })

})