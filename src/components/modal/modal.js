import "./modal.css";
function modal() {
  console.log("vykdo");
  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  const modalH2 = document.createElement("h2");
  modalH2.textContent = "Modal";
  const modalP = document.createElement("p");
  modalP.textContent = "cia yra modalas";
  const modalBtn = document.createElement("button");
  modalBtn.textContent = "Close";

  //kuriam backdrop diva;
  const backdropDiv = document.createElement("div");
  document.body.appendChild(backdropDiv);
  backdropDiv.classList.add("backdrop");

  modalBtn.addEventListener("click", function () {
    modalDiv.remove();
    backdropDiv.remove();
  });
  backdropDiv.addEventListener("click", function () {
    modalDiv.remove();
    backdropDiv.remove();
  });

  modalDiv.appendChild(modalH2);
  modalDiv.appendChild(modalP);
  modalDiv.appendChild(modalBtn);

  document.body.appendChild(modalDiv);
}

export default modal;
