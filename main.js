const circle = document.querySelector(".circle");
const info = document.querySelector(".info");
const position = document.querySelector(".position");

const move = e => {
  console.log(e.keyCode);

  position.textContent = `Circle position X: ${circle.offsetLeft} Y: ${circle.offsetTop}`;
  switch (e.keyCode) {
    case 37:
      info.textContent = "arrow left";
      circle.style.left = circle.offsetLeft - 5 + "px";
      break;

    case 38:
      info.textContent = "arrow up";
      circle.style.top = circle.offsetTop - 5 + "px";

      break;
    case 39:
      info.textContent = "arrow right";
      circle.style.left = circle.offsetLeft + 5 + "px";
      break;
    case 40:
      info.textContent = "arrow down ";
      circle.style.top = circle.offsetTop + 5 + "px";
      break;

    case 65:
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      circle.style.backgroundColor = `rgb(${red}, ${green},${blue})`;
      circle.style.width = "30px";
      circle.style.height = "30px";
      circle.style.borderWidth = "0px";
      info.textContent = " Attack ";
      break;

    case 83:
      circle.style.backgroundColor = "orange";
      circle.style.width = "20px";
      circle.style.height = "20px";
      circle.style.borderWidth = "0px";
      info.textContent = "Normal ";
      break;

    case 90:
      circle.style.backgroundColor = "orange";
      circle.style.borderWidth = "7px";
      circle.style.width = "20px";
      circle.style.height = "20px";
      info.textContent = " Defense ";
      break;

    default:
      info.textContent = "Use arrow keys";
      break;
  }
};

window.addEventListener("keydown", move);
