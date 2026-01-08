import './styles.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';

// loadHome();
loadMenu();

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");


homeBtn.addEventListener("click", () => {
  loadHome();
})

menuBtn.addEventListener("click", () => {
  loadMenu();
})