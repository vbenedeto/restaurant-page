
export function loadHome() {
  const content = document.querySelector("#content");
  content.classList.remove("menu-page");
  content.classList.add("home-page");
  content.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = "A Taste of Brazil in Every Bite";

  const para = document.createElement("p");
  para.textContent = "Welcome to Sabor do Brasil, where we bring the heart and soul of Brazilian cuisine to your table. From our slow-cooked traditional Feijoada to our crispy snacks and refreshing drinks, join us for a meal that celebrates life, flavor, and community";

  content.appendChild(title);
  content.appendChild(para);
}