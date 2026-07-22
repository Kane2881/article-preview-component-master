const toggleBtn = document.getElementById("toggle-btn");
const socialGroup = document.getElementById("social-links-group");
// const square = document.querySelector(".square");
const socialLinkWrapper = document.querySelector(".social-links-wrapper");

toggleBtn.addEventListener("click", () => {
  const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
  isExpanded ? closeSlideBack() : openSlideIn();
});

function openSlideIn() {
  toggleBtn.setAttribute("aria-expanded", true);
  socialGroup.setAttribute("aria-hidden", false);
  socialLinkWrapper.style.visibility = "visible";
  socialLinkWrapper.style.opacity = "1";
}

function closeSlideBack() {
  toggleBtn.setAttribute("aria-expanded", false);
  socialGroup.setAttribute("aria-hidden", true);
  socialLinkWrapper.style.visibility = "hidden";
  socialLinkWrapper.style.opacity = "0";
}
