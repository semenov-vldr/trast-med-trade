function closeOnBackDropClick({ currentTarget, target }) {
  const dialogElement = currentTarget;
  const isClickedOnBackDrop = target === dialogElement;
  if (isClickedOnBackDrop) dialogElement.close();
}

const dialogElements = document.querySelectorAll("dialog");
dialogElements.forEach(dialogElement => {
  dialogElement.addEventListener("click", closeOnBackDropClick);
});