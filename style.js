const parallaxElements = document.querySelectorAll(".parallax-effect");
const boxElements = document.querySelectorAll(".box-shadow");

document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  parallaxElements.forEach((fieldset) => {
    const offsetX =
      (mouseX -
        fieldset.getBoundingClientRect().left -
        fieldset.offsetWidth / 2) *
      0.01;
    const offsetY =
      (mouseY -
        fieldset.getBoundingClientRect().top -
        fieldset.offsetHeight / 2) *
      0.01;
    fieldset.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
  boxElements.forEach((box) => {
    const offsetX =
      (mouseX - box.getBoundingClientRect().left - box.offsetWidth / 2) * 0.01;
    const offsetY =
      (mouseY - box.getBoundingClientRect().top - box.offsetHeight / 2) * 0.01;

    var ShadowX = Math.min(Math.max(offsetX, -0.06), 0.2) * 5 + 5;
    var ShadowY = Math.min(Math.max(offsetY, -0.06), 0.2) * 5 + 5;

    box.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    box.style.setProperty("--ShadowX", `${ShadowX}px`);
    box.style.setProperty("--ShadowY", `${ShadowY}px`);
  });
});
