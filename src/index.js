import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";
import "./style.css";

const content = document.getElementById("content");
const homebtn = document.getElementById("home-btn");
const menubtn = document.getElementById("menu-btn");
const aboutbtn = document.getElementById("about-btn");

function clearContent(){
  content.innerHTML = "";
}

homebtn.addEventListener("click", () => {
  clearContent();
  createHomePage();
})

menubtn.addEventListener("click", () =>{
  clearContent();
  createMenuPage();
})

aboutbtn.addEventListener("click", () =>{
  clearContent();
  createAboutPage();
})
createHomePage();