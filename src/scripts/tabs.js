// Добавить/убрать активность табов
const blocksTabs = document.querySelectorAll(".tabs__list");

if (blocksTabs) {
  blocksTabs.forEach(blockTabs => {
    const tabs = blockTabs.querySelectorAll(".tabs__item");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.toggle("active", t === tab));
      });
    });
  });
}


