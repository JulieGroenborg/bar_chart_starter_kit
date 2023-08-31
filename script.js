const ourList = document.querySelector("ul");
const ourArray = [];
setInterval(generateBarCharts, 1000);

function generateBarCharts() {
  const randomNum = Math.floor(Math.random() * 100 + 1);

  ourArray.push(randomNum);

  const ourLi = document.createElement("li");
  ourLi.style.setProperty("--height", randomNum);
  ourList.appendChild(ourLi);

  if (ourArray.length > 20) {
    ourArray.shift();
    ourList.removeChild(ourList.firstElementChild);
  }
  console.log("hej", ourArray);
}
