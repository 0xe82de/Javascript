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
