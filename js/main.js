const screenOperation = document.getElementById("screen-operation");
const screenResult = document.getElementById("screen-result");
const buttons = document.getElementById("buttons");

const lastValue = () => {
  //Solamente devuelve el último valor de la operación
  screenOperation.textContent.substring(screenOperation.textContent.length - 1);
};

const writeOperation = (text) => {
  if (screenOperation.textContent == 0) screenOperation.textContent = "";

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
  screenResult.textContent = eval(screenOperation.textContent);
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
