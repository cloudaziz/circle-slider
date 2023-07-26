let sliderWrapper = document.querySelector('.slider-wrapper');
let sliderWrapperWidth = sliderWrapper.clientWidth;
let slider = document.querySelector('.slider ul');

let sliderItem = slider.querySelectorAll('li');
let totalSliderItem = sliderItem.length;

let sliderItemWidth = sliderItem[0].clientHeight;
let itemGap = sliderItemWidth / 3;
console.log(itemGap);

let root = document.querySelector(':root');
let showItem = getComputedStyle(root).getPropertyValue('--show-items');

let showItemWidth = sliderItemWidth * showItem;

let totalItemWidth = totalSliderItem * sliderItemWidth;

let count = 0;

document.querySelector('.next').addEventListener('click', () => {
  if (count == totalSliderItem - showItem) return;

  count = count + 1;

  let move =
    sliderWrapperWidth - sliderItemWidth - itemGap - sliderWrapperWidth;

  slider.style.setProperty('--move', `${move * count}px`);
});

document.querySelector('.prev').addEventListener('click', () => {
  if (count == 0) return;

  count = count - 1;

  let move =
    sliderWrapperWidth - sliderItemWidth - itemGap - sliderWrapperWidth;

  slider.style.setProperty('--move', `${move * count}px`);
});
