import contactImage from "../assets/contact-us.png"
function createAboutPage(){
  const content = document.getElementById("content");
  
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("page-content")
  aboutContainer.classList.add("about-page");

  const headline = document.createElement("h1");
  headline.textContent = "Contact Us!";
  aboutContainer.appendChild(headline);

  const image = new Image();
  image.src = contactImage;
  aboutContainer.appendChild(image)

  const contactInfo = document.createElement("p");
  contactInfo.textContent = "Phone: 123-456-7890 | Email: contact@awesome.com";
  aboutContainer.appendChild(contactInfo);

  content.appendChild(aboutContainer);
}

export default createAboutPage;