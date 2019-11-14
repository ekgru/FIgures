import { ColumnManager } from "./columnManager.js";
export { App };
class App {
  init() {
    new ColumnManager().create("#fde910", "limon");
    new ColumnManager().create("#5C9991", "circle");
    new ColumnManager().create("#FFACD1", "square");
  }
}

let createBtn = document.getElementById("submit-button");
createBtn.onclick = () => {
  let form = document.forms[0];
  let colorSelector = form.elements.colorSelector;
  let color = colorSelector.value;
  let figureSelector = form.elements.figureSelector;
  let figure = figureSelector.value;
  new ColumnManager().create(color, figure);
};
let hellBtn = document.getElementById("hell-button");
hellBtn.onclick = () => {
  let form = document.forms[0];
  let figureSelector = form.elements.figureSelector;
  let figure = figureSelector.value;
  let btnCreateFigures = document.getElementsByClassName("btn-create");
  for (let i = 0; i < btnCreateFigures.length; i++){
    btnCreateFigures[i].innerHTML = `Do more ${figure}'s`;
  btnCreateFigures[i].onclick = () => {
    let color = btnCreateFigures[i].parentNode.parentNode.style.backgroundColor;
    btnCreateFigures[i].parentNode.append(
      new ColumnManager().createBlock(figure, color)
    );
  };
}};
