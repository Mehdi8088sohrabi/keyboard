
window.addEventListener("keydown", logKeydown);
window.addEventListener("keyup", logKeyup);

function logKeydown(e) {
  let element = document.querySelector(`#${e.key}`);
  element.style.background = "rgb(5, 84, 116)";
}


function logKeyup(e) {
  let element = document.querySelector(`#${e.key}`);
  element.style.background = "black";
}