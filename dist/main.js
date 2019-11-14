(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _columnManager = require("./columnManager.js");

class App {
  init() {
    new _columnManager.ColumnManager().create("#fde910", "limon");
    new _columnManager.ColumnManager().create("#5C9991", "circle");
    new _columnManager.ColumnManager().create("#FFACD1", "square");
  }

}

exports.App = App;
let createBtn = document.getElementById("submit-button");

createBtn.onclick = () => {
  let form = document.forms[0];
  let colorSelector = form.elements.colorSelector;
  let color = colorSelector.value;
  let figureSelector = form.elements.figureSelector;
  let figure = figureSelector.value;
  new _columnManager.ColumnManager().create(color, figure);
};

let hellBtn = document.getElementById("hell-button");

hellBtn.onclick = () => {
  let form = document.forms[0];
  let figureSelector = form.elements.figureSelector;
  let figure = figureSelector.value;
  let btnCreateFigures = document.getElementsByClassName("btn-create");

  for (let i = 0; i < btnCreateFigures.length; i++) {
    btnCreateFigures[i].innerHTML = "Do more ".concat(figure, "'s");

    btnCreateFigures[i].onclick = () => {
      let color = btnCreateFigures[i].parentNode.parentNode.style.backgroundColor;
      btnCreateFigures[i].parentNode.append(new _columnManager.ColumnManager().createBlock(figure, color));
    };
  }
};

},{"./columnManager.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnManager = void 0;

class ColumnManager {
  create(color, figure) {
    let columnBack = this.createColumnBack(color);
    let contentDiv = this.createContentDiv();
    let button = this.createBtn(figure, color);
    let blocks = this.createBlock(figure, color);
    columnBack.append(contentDiv);
    contentDiv.append(button); //contentDiv.append(blocks);

    let container = document.getElementById('container');
    container.append(columnBack);
    return columnBack;
  }

  createColumnBack(color) {
    let columnBack = document.createElement('div');
    columnBack.className = 'column-back';
    columnBack.style.backgroundColor = color;
    return columnBack;
  }

  createContentDiv() {
    let contentDiv = document.createElement('div');
    contentDiv.className = 'content-div';
    return contentDiv;
  }

  createBlock(figure, color) {
    let block = document.createElement('div');
    block.className = 'block ' + figure;
    block.style.background = color;

    block.onclick = () => {
      block.remove(this);
    };

    return block;
  }

  createBtn(figure, color) {
    let btnCreate = document.createElement('button');
    btnCreate.className = 'btn-create';
    btnCreate.textContent = "Do more ".concat(figure, "'s");

    btnCreate.onclick = () => {
      btnCreate.parentNode.append(this.createBlock(figure, color));
    };

    return btnCreate;
  }

}

exports.ColumnManager = ColumnManager;

},{}],3:[function(require,module,exports){
"use strict";

var _app = require("./app.js");

new _app.App().init();

},{"./app.js":1}]},{},[3]);
