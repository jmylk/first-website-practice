const MyListItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) e.target.className = "done";
  else e.target.className = "";
}

MyListItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

const MyImage = document.querySelector("img");

MyImage.addEventListener("click", () => {
  const MySrc = MyImage.getAttribute("src");
  if (MySrc === "images/perlica1.png")
    MyImage.setAttribute("src", "images/perlica2.png");
  else if (MySrc === "images/perlica2.png")
    MyImage.setAttribute("src", "images/perlica3.png");
  else if (MySrc === "images/perlica3.png")
    MyImage.setAttribute("src", "images/perlica4.png");
  else MyImage.setAttribute("src", "images/perlica1.png");
});

const MyTitle = document.querySelector("h1");
const MyButton = document.querySelector("button");

function setUserName() {
  const MyName = prompt("Please enter your name.");
  if (!MyName) setUserName();
  else {
    localStorage.setItem("name", MyName);
    MyTitle.textContent = `Hello, ${MyName},this is my waifu perlica`;
  }
}

if (!localStorage.getItem("name")) setUserName();
else {
  const storedName = localStorage.getItem("name");
  MyTitle.textContent = `Hello, ${storedName},this is my waifu perlica`;
}

MyButton.addEventListener("click", setUserName);
