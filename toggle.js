const toggleBtn = document.getElementById("toggle-btn");
const socialGroup = document.getElementById("social-links-group");

toggleBtn.addEventListener("click", () => {
  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
  isExpanded ? closeSlideBack() : openSlideIn();
});

function openSlideIn() {
  toggleBtn.setAttribute("aria-expanded", true);
  socialGroup.setAttribute("aria-hidden", false);
}

function closeSlideBack() {
  toggleBtn.setAttribute("aria-expanded", false);
  socialGroup.setAttribute("aria-hidden", true);
}
