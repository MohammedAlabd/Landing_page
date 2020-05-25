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
const navbarList = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("[data-nav]");
const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const createNavbarNode = (navNode) => {
  const li = document.createElement("li");
  li.innerHTML = `<a class="menu__link" href="#${
    navNode.id
  }"> ${navNode.getAttribute("data-nav")} </a>`;
  return li;
};

const BuildNavbar = () => {
  const fragment = document.createDocumentFragment();

  sections.forEach((navNode) => {
    const node = createNavbarNode(navNode);
    fragment.appendChild(node);
  });
  navbarList.appendChild(fragment);
};

const changeActiveClass = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.getBoundingClientRect().height;
    const navButton = document.querySelector(`[href="#${section.id}"]`);
    if (sectionTop < 150 && sectionTop > -sectionHeight + 150) {
      section.classList.add("your-active-class");
      navButton.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      navButton.classList.remove("active");
    }
  });
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */
const main = () => {
  // build the nav
  BuildNavbar();

  // Add class 'active' to section when near top of viewport

  // Scroll to anchor ID using scrollTO event
};
/**
 * End Main Functions
 * Begin Events
 *
 */
window.addEventListener("DOMContentLoaded", main);
window.addEventListener("scroll", changeActiveClass);
// Build menu

// Scroll to section on link click

// Set sections as active
