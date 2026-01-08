import map from '../assets/map.png';

export function loadContact() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.className = "";
  content.classList.add("contact-page");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const title = document.createElement("h2");
  title.textContent = "Visit Us in Kreuzberg";

  const phone = document.createElement("p");
  phone.textContent = "📞 49 30 12345678";

  const address = document.createElement("p");
  address.textContent = "📍 Oranienstraße 190, 10999 Berlin";

  const hours = document.createElement("p");
  hours.textContent = "⏰ Tue-Sun, 12:00 - 22:00";

  const mapImg = document.createElement("img");
  mapImg.src = map;

  contactContainer.append(title, phone, hours, address, mapImg);

  content.appendChild(contactContainer);
}