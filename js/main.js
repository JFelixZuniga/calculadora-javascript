const screenOperation = document.getElementById("screen-operation");
const screenResult = document.getElementById("screen-result");
const buttons = document.getElementById("buttons");

let opeationComplete = false;

//Solamente devuelve el último valor de la operación
const lastValue = () =>
  screenOperation.textContent.substring(screenOperation.textContent.length - 1);

const writeOperation = (text) => {
  if (screenOperation.textContent == 0) screenOperation.textContent = "";

  if (opeationComplete && isNaN(text)) {
    screenOperation.textContent = screenResult.textContent;
    opeationComplete = false;
  }

  if (opeationComplete && !isNaN(text)) {
    screenOperation.textContent = "";
    screenResult.textContent = 0;
    opeationComplete = false;
  }

  if (isNaN(lastValue()) && isNaN(text)) {
    screenOperation.textContent = screenOperation.textContent.substring(
      0,
      screenOperation.textContent.length - 1
    );
  } else {
    screenOperation.textContent += text;
  }
};

//EVAL es una función que recibe un string, lo evalua y si es una operación matemática, la resuelve.
const writeResult = () => {
  if (isNaN(lastValue()))
    screenOperation.textContent = screenOperation.textContent.substring(
      0,
      screenOperation.textContent.length - 1
    );

  screenResult.textContent = eval(screenOperation.textContent);
  opeationComplete = true;
};

const changeSing = () => {
  let lastNumber = "";
  let position = 0;
  //Si lo último que tenemos, no es un número...
  if (!isNaN(lastValue())) {
    for (let i = screenOperation.textContent.length - 1; i > 0; i--) {
      if (isNaN(screenOperation.textContent[i])) {
        position = i + 1;
        break;
      }
    }
  }
  lastNumber = screenOperation.textContent.substring(position);
  screenOperation.textContent = screenOperation.textContent.replace(
    lastNumber,
    `(${lastNumber * -1})`
  );
};

const resetScreen = () => {
  screenOperation.textContent = "0";
  screenResult.textContent = "0";
};

//Evento de escucha a cada click
buttons.addEventListener("click", (e) => {
  //Comprobaos si donde hicimos click no está vacio
  if (e.target.textContent !== "") {
    switch (e.target.textContent) {
      //Evalua la operación e imprime el resultado
      case "=":
        writeResult();
        break;
      case "C":
        resetScreen();
        break;
      case "+/-":
        changeSing();
        break;
      case ",":
        writeOperation(".");
        break;
      default:
        writeOperation(e.target.textContent);
        break;
    }
  }
});

// SOCIAL PANEL JS
const floating_btn = document.querySelector(".floating-btn");
const close_btn = document.querySelector(".close-btn");
const social_panel_container = document.querySelector(
  ".social-panel-container"
);

floating_btn.addEventListener("click", () => {
  social_panel_container.classList.toggle("visible");
});

close_btn.addEventListener("click", () => {
  social_panel_container.classList.remove("visible");
});
