import './styles.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

loadHome();

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");


homeBtn.addEventListener("click", () => {
  loadHome();
})

menuBtn.addEventListener("click", () => {
  loadMenu();
})

contactBtn.addEventListener("click", () => {
  loadContact();
})
