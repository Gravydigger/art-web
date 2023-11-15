const images = document.querySelectorAll("img");
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementsByClassName("close")[0];
const body = document.getElementsByTagName("body")[0];
var modalEnabled = false;

images.forEach((image) => {
  if (image.className == "modal-content") return;

  image.addEventListener("click", (event) => {
    displayModal(event);
  });
  image.addEventListener("keydown", (event) => {
    // Ignore if key is tab
    if (event.isComposing || modal.style.display == "block" || event.key == "Tab") {
      return;
    }
    
    displayModal(event);
  });
});

modal.onclick = function () {
  hideModal();
};

// document.onkeydown = function (e) {
//   if (e.repeat) {
//     hideModal();
//   }
// };

function hideModal() {
  modal.style.display = "none";
  body.style.overflow = "auto";
  modalEnabled = false;
}

function displayModal(event) {
  var element = event.target;
  var modalImg = document.getElementsByClassName("modal-content")[0];

  if ((element | modal | modalImg) == null) return;
  
  if (modalEnabled) {
    
    
    
    hideModal();
    return;
  }

  modalEnabled = true;

  modal.style.display = "flex";
  body.style.overflow = "hidden";

  modalImg.src = element.attributes[0].nodeValue;
  modalImg.alt = element.attributes[1].nodeValue;
}
