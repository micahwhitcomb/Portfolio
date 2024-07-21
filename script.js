/* JavaScript file for Portfolio*/

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function openTab(tabName) {
  if (!tabName) return;

  tabLinks.forEach(tablink => tablink.classList.remove("active-link"));
  tabContents.forEach(tabcontent => tabcontent.classList.remove("active-tab"));

  const clickedTab = document.querySelector(`[data-tab-name="${tabName}"]`);
  if (clickedTab) {
    clickedTab.classList.add("active-tab");
  }

  const tabContent = document.getElementById(tabName);
  if (tabContent) {
    tabContent.classList.add("active-tab");
  }
}

const tabContainer = document.querySelector(".tab-container");
tabContainer.addEventListener("click", function(event) {
  if (event.target.matches(".tab-links")) {
    const tabName = event.target.dataset.tabName;
    openTab(tabName);
  }
});