const pageDocs = document.querySelector(".documents");

if (pageDocs) {
  const docsTabs = pageDocs.querySelectorAll(".documents__tabs-item");
  const docsList = pageDocs.querySelectorAll(".documents__list");

// Создание оберток для колонок документов
  docsList.forEach(docsItem => {
    const groupDocs = docsItem.querySelectorAll(".details-doc");
    const docWrap1 = document.createElement("div");
    docWrap1.classList.add("documents__group-wrap-1");
    const docWrap2 = document.createElement("div");
    docWrap2.classList.add("documents__group-wrap-2");

    groupDocs.forEach((groupDoc, index) => {
      (index % 2 === 0) ? docWrap1.appendChild(groupDoc) : docWrap2.appendChild(groupDoc);
    });
    docsItem.appendChild(docWrap1);
    docsItem.appendChild(docWrap2);
  });

  // Работа табов для документов
  docsTabs.forEach(docsTab => {
    docsTab.addEventListener("click", () => {
      const dataTabDoc = docsTab.dataset.docs;

      docsList.forEach(docsItem => {
        const dataDocs = docsItem.dataset.docs;
        const isActiveDocs = dataTabDoc !== dataDocs;
        docsItem.classList.toggle("hidden", isActiveDocs);
      });
    });
  });

}