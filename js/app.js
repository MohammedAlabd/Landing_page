/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
window.addEventListener("DOMContentLoaded", () => {
  console.log("hi");
  const navbarList = document.querySelector("#navbar__list");
  const navbarElements = document.querySelectorAll("[data-nav]");
  /**
   * End Global Variables
   * Start Helper Functions
   *
   */
  const createNavbarNode = (navNode) => {
    const li = document.createElement("li");
    li.innerHTML = `<a class="menu__link" href="#${navNode.id}"> ${navNode.getAttribute("data-nav")} </a>`;
    return li;
  };

  const BuildNavbar = () => {
    const fragment = document.createDocumentFragment();

    navbarElements.forEach((navNode) => {
      const node = createNavbarNode(navNode);
      fragment.appendChild(node);
    });
    navbarList.appendChild(fragment);
  };
  /**
   * End Helper Functions
   * Begin Main Functions
   *
   */

  // build the nav
  BuildNavbar();

  // Add class 'active' to section when near top of viewport

  // Scroll to anchor ID using scrollTO event

  /**
   * End Main Functions
   * Begin Events
   *
   */

  // Build menu

  // Scroll to section on link click

  // Set sections as active
});
