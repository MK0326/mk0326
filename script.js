
let inputID;
let outputID;
let color;
function pawn(value) {
  inputID = value.id;
  color = value.className.split(' ');
}

function bord(value) {
  if (inputID == value.id) {
    value.style.background="light"+color[0];
    value.className

  }
}