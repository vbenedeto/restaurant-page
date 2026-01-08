import feijoada from '../assets/feijoada-item.jpg';
import paoDeQueijo from '../assets/pao-de-queijo-item.jpg';
import coxinha from '../assets/coxinha-item.jpg';
import picanha from '../assets/picanha-item.png';
import moqueca from '../assets/moqueca-item.png';
import xis from '../assets/xis-item.jpg';

const menuItems = [
  {
    name: "Feijoada",
    image: feijoada,
    info: "The ultimate Brazilian soul food. A rich black bean stew simmered with premium smoked meats and sausages. Served with white rice, fried egg, and toasted farofa",
    price: "€15.50",
  },
  {
    name: "Pão de Queijo",
    image: paoDeQueijo, 
    info: "Queijo	Warm, chewy, and irresistibly cheesy. Traditional gluten-free bread rolls made with tapioca flour and cured cheese. A staple of Minas Gerais (Portion of 11)",
    price: "€6.50",
  },
  {
    name: "Coxinha de Frango",
    image: coxinha,
    info: "Brazil’s most iconic street food. Savory teardrop-shaped dough filled with seasoned shredded chicken and cream cheese, perfectly breaded and golden-fried",
    price: "€7",
  },
  {
    name: "Brazilian Steak",
    image: picanha,
    info: "Tender, grilled Picanha (sirloin cap) sliced thin and served over a fresh bed of peppery rucula (arugula) and sweet cherry tomatoes. Finished with sea salt and olive oil",
    price: "€24",
  },
  {
    name: "Moqueca de Peixe", //bold
    image: moqueca,
    info: "A fragrant, slow-cooked seafood stew from the coast. White fish and shrimp simmered in coconut milk, lime, peppers, and dendê palm oil. Bursting with tropical flavor", // italic
    price: "€21", //another text color
  },
  {
    name: "Xis Salada Gaúcho",
    image: xis,
    info: "An iconic oversized burger from the South of Brazil. A massive, pressed toasted bun stuffed with a juicy beef patty, melted cheese, ham, a fried egg, fresh lettuce, tomatoes, sweet corn, peas, and our signature creamy herb mayo.",
    price: "€12.50"
  }
];

function createMenuItem(item) {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("menu-item");

  const name = document.createElement("h3");
  name.textContent = item.name;

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;

  const info = document.createElement("p");
  info.textContent = item.info;
  info.classList.add("info");

  const price = document.createElement("p");
  price.textContent = item.price;
  price.classList.add("price");

  itemDiv.append(name, image, info, price);
  return itemDiv;
}

export function loadMenu() {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.classList.remove("home-page");
  content.classList.add("menu-page");

  menuItems.forEach((item) => {
    const finishedDiv = createMenuItem(item);
    content.appendChild(finishedDiv);
  })
}
