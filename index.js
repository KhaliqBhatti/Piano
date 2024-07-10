window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let keys = document.querySelector(`.keys[data-key="${e.keyCode}"]`);
  let keysBlack = document.querySelector(
    `.black-sting[data-key="${e.keyCode}"]`
  );
  // console.log(keys, "upperkeys white");
  if (audio) {
    audio.play();
    audio.currentTime = 0;
    if (keys) {
      keys.classList.add("press");
    }
    if (keysBlack) {
      keysBlack.classList.add("black-press");
    }

    // black-Sting.classList.add('black-press')
  }
  return;
});
let p = document.querySelectorAll(".keys");
p.forEach((e) => {
  e.addEventListener("transitionend", () => {
    if ((e.propertyName = "background")) {
      e.classList.remove("press");
    }
    return;
  });
});
let keys_Black = document.querySelectorAll(`.black-sting`);

keys_Black.forEach((e) => {
  e.addEventListener("transitionend", () => {
    if ((e.propertyName = "background")) {
      e.classList.remove("black-press");
    }
    return;
  });
});
