let inputID;
let outputID;
let color;

function pawn(value) {
  inputID = value.id;
  color = value.className.split(' ');
}

function bord(value) {
  
  if (inputID == value.id && value.className.split(" ")[1] != "checked") {
    value.style.background="light"+color[0];

    // 一コマ目以降置けないように
    inputID = "";
    // 駒を置かれていることをクラス名で追加
    value.classList.add("checked");
  }
}