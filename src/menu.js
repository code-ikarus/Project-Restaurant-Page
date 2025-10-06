const menuItems = [
   {
    name: "Classic Fondue",
    description: "A rich blend of Gruyère and Emmental cheese, served with artisan bread cubes.",
    price: "$25"
  },
  {
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with wild mushrooms, parmesan, and a hint of truffle oil.",
    price: "$18"
  },
  {
    name: "Steak Frites",
    description: "Perfectly grilled steak served with a side of crispy golden fries.",
    price: "$25"
  },
  {
    name: "Beef and Guinness Stew",
    description: "A deep, rich beef stew so flavorful with veggies and the most tender fall-apart beef served over mashed potatoes.",
    price: "$30"
  },
  {
    name: "French Onion Soup",
    description: "A rich, slow-simmered beef broth with caramelized onions, topped with a toasted crouton and melted Gruyère cheese.",
    price: "$12"
  },
  {
    name: "Duck Ragu with Pappardelle",
    description: "Slow-braised duck in a rich tomato and red wine sauce, served over wide, handmade pappardelle pasta.",
    price: "$28"
  },
  {
    name: "Chocolate Lava Cake",
    description: "A warm, individual chocolate cake with a gooey, molten center, served with a scoop of vanilla bean ice cream.",
    price: "$14"
  }
]

function createMenuItem(name, description, price){
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  
  const itemName = document.createElement("h2");
  itemName.textContent = name;

  const itemDescription = document.createElement("h3");
  itemDescription.textContent = description;

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("price");
  itemPrice.textContent = price;

  menuItem.appendChild(itemName)
  menuItem.appendChild(itemDescription)
  menuItem.appendChild(itemPrice)

  return menuItem;
}

function createMenuPage(){
  const content = document.getElementById("content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("page-content")
  menuContainer.classList.add("menu-page");

  const headline = document.createElement("h1")
  headline.textContent = "Have a look at our delicious menu!"
  menuContainer.appendChild(headline)

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("items-container"); 
  menuContainer.appendChild(itemsContainer)

  menuItems.forEach(item => {
    const menuItemElement = createMenuItem(item.name, item.description, item.price);
    itemsContainer.appendChild(menuItemElement);
  })

  content.appendChild(menuContainer);
}

export default createMenuPage;