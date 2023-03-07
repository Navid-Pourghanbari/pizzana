const menuBTN = document.querySelectorAll(".icon-menu");
var overlays = [];
var headings = [];
var descs = [];
var orderBTN = [];

for (let i = 0; i < menuBTN.length; i++) {
  overlays[i] = document.getElementById(`card--${i}__overlay`);
  headings[i] = document.getElementById(`card--${i}__heading`);
  descs[i] = document.getElementById(`card--${i}__desc`);
  orderBTN[i] = document.getElementById(`card--${i}__btn`);

  menuBTN[i].addEventListener("click", function () {
    overlays[i].classList.toggle("js-hidden");
    headings[i].classList.toggle("js-ani-fade-in-r1");
    descs[i].classList.toggle("js-ani-fade-in-r2");
    orderBTN[i].classList.toggle("js-ani-fade-in-r3");
    menuBTN[i].classList.toggle("js-hidden");

    for (let b = 0; b < overlays.length; b++) {
      if (b == i) continue;

      if (!overlays[b].classList.contains("js-hidden")) {
        overlays[b].classList.toggle("js-hidden");
      }

      if (menuBTN[b].classList.contains("js-hidden"))
        menuBTN[b].classList.toggle("js-hidden");

      if (headings[b].classList.contains("js-ani-fade-in-r1"))
        headings[b].classList.toggle("js-ani-fade-in-r1");

      if (descs[b].classList.contains("js-ani-fade-in-r2"))
        descs[b].classList.toggle("js-ani-fade-in-r2");

      if (orderBTN[b].classList.contains("js-ani-fade-in-r3"))
        orderBTN[b].classList.toggle("js-ani-fade-in-r3");
    }
  });
}
