import restaurantImage from "../assets/60bf3cb1-b82d-4ef2-88bd-3dedb056c43c--fondue.jpg"
function createHomePage(){
  const content = document.getElementById("content");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("page-content");
  homeContainer.classList.add("home-page");

  const title = document.createElement("h1");
  title.textContent = "The Cozy Corner";
  homeContainer.appendChild(title);

  const headline = document.createElement("h2");
  headline.textContent = "Welcome to the Cozy Corner!"
  homeContainer.appendChild(headline)

  const presentation = document.createElement("p");
  presentation.textContent = "The Cozy Corner is a restaurant with the main objective to bring a cozy and comfortable experience while you enjoy our menu"
  homeContainer.appendChild(presentation)

  const image = new Image();
  image.src = restaurantImage;
  homeContainer.appendChild(image)

  const hoursTitle = document.createElement("h3")
  hoursTitle.textContent = "Hours"
  homeContainer.appendChild(hoursTitle)

  const hours = document.createElement("p")
  hours.textContent = "Monday - Friday: 8am - 8pm | Satuarday: 8am - 10pm"
  homeContainer.appendChild(hours)

  const locationTitle = document.createElement("h3");
  locationTitle.textContent = "Location"
  homeContainer.appendChild(locationTitle);

  const location = document.createElement("p");
  location.textContent = "a place called nowhere"
  homeContainer.appendChild(location)

  content.appendChild(homeContainer)
}

export default createHomePage;