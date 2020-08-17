"use strict";

let checkOp;

function setValue(value) {
  document.getElementById("js-result").innerHTML = value;
}

function isNaN(value) {
  if (Number.isNaN(Number(value))) return 1;
  return 0;
}

function isNum(value) {
  if (isNaN(value)) {
    return;
    // 수식 함수 추가
  }

  setValue(value);
}

function isZero() {
  return document.getElementById("js-result").innerHTML;
}

function printNum(value) {
  let checkZero = isZero();

  if (checkZero !== "0" && checkOp === 0) {
    value = checkZero + value;
    document.getElementById("js-result").innerHTML = value;
  } else {
    document.getElementById("js-result").innerHTML = value;
  }

  checkOp = 0;

  return;
}

function printOP(op) {
  let tmpResult;

  if (document.getElementById("js-tmpResult").innerHTML === "0") {
    tmpResult = document.getElementById("js-result").innerHTML;
    document.getElementById("js-tmpResult").innerHTML = tmpResult + " " + op;
  } else {
    tmpResult = document.getElementById("js-tmpResult").innerHTML;
    tmpResult =
      tmpResult + " " + document.getElementById("js-result").innerHTML;
    document.getElementById("js-tmpResult").innerHTML = tmpResult + " " + op;
  }

  return;
}

function whatKey(key) {
  if (checkOp === undefined) {
    checkOp = 0;
  }

  switch (key) {
    case "9":
    case "8":
    case "7":
    case "6":
    case "5":
    case "4":
    case "3":
    case "2":
    case "1":
    case "0":
      // 숫자 ㅋㅋㅋ
      printNum(key);
      break;
    case "/":
    case "X":
    case "-":
    case "+":
      checkOp = 1;
      printOP(key);
      break;
    case "C":
      clear();
      break;
    case "=":
      compute();
      break;
  }

  return;
}
