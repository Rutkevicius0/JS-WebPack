import "./aside.css";
const arr = ["unos", "dos", "tres"];
function aside(title, btnText) {
  const aside = document.createElement("aside");
  aside.className = "aside";
  const h2El = document.createElement("h2");
  h2El.textContent = title;
  const ulEl = document.createElement("ul");
  arr.forEach((e) => {
    let liEl = document.createElement("li");
    liEl.textContent = e;
    ulEl.appendChild(liEl);
  });
  const btnEl = document.createElement("button");
  btnEl.textContent = btnText;
  btnEl.className = "aside__button";

  aside.append(h2El, ulEl, btnEl);
  return aside;
}

export default aside;
