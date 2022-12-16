const tooltipButtons = document.querySelectorAll('.js-tooltip-button');
const tooltip = document.querySelector('.js-tooltip');
const openTooltipButton = document.querySelector('.js-open-tooltip-button');

const isHiddenClass = 'is-hidden';
const shareButtonDarkClass = 'share-button--dark';

tooltipButtons.forEach(tooltipButton => {
  tooltipButton.addEventListener('click', e => {
    tooltip.classList.toggle(isHiddenClass);
    openTooltipButton.classList.toggle(shareButtonDarkClass);
    e.stopImmediatePropagation();
  });
});

document.addEventListener('click', ({target}) => {
  if (!tooltip.isEqualNode(target) && !tooltip.contains(target)) {
    tooltip.classList.add(isHiddenClass);
    openTooltipButton.classList.remove(shareButtonDarkClass);
  }
});
