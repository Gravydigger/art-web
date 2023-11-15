// const images = document.querySelectorAll(".image");
const images = document.querySelectorAll("img");
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementsByClassName("close")[0];
const body = document.getElementsByTagName("body")[0];

images.forEach((image) => {
  
  if (image.className == "modal-content")
    return;
  
  image.addEventListener("click", (event) => {
    displayModal(event);
  });
  image.addEventListener("keydown", (event) => {
    // Ignore if key is tab
    if (
      event.isComposing ||
      event.keyCode == 9 ||
      modal.style.display == "block"
    ) {
      return;
    }
    displayModal(event);
  });
});

function displayModal(event) {
  var element = event.target;
  var modalImg = document.getElementsByClassName("modal-content")[0];

  if (element | modal | (modalImg == null)) return;

  if (element.tagName == "LI") {
    element = element.lastChild;
  }

  modal.style.display = "flex";
  body.style.overflow = "hidden";

  modalImg.src = element.attributes[0].nodeValue;
}
modal.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "auto";
};

close.onkeydown = function () {
  modal.style.display = "none";
  body.style.overflow = "auto";
};
