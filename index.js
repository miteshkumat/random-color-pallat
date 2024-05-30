const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

generateColor();

function generateColor() {
    const colorContainerEls = document.querySelectorAll(".color-container");
    colorContainerEls.forEach((colorContainerEl) => {
      const newColor = randomColor();
      console.log(newColor);
      colorContainerEl.style.backgroundColor = "#" + newColor;
      colorContainerEl.innerText = "#" + newColor;
    });
  }
function randomColor() {
  const char = "0123456789abcdef";
  const colorcodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorcodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * char.length);

    colorCode += char.substring(randomNumber, randomNumber + 1);
    
  }
  return colorCode;
}


