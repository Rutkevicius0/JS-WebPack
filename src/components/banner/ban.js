import "./ban.css";
function banner(title, btnText) {
  const section = document.createElement("section");
  section.className = "banner";
  const h2El = document.createElement("h2");
  h2El.textContent = title;
  const pEl = document.createElement("p");
  pEl.textContent = "This is very nice banner";
  const btnEl = document.createElement("button");
  btnEl.textContent = btnText;

  section.append(h2El, pEl, btnEl);
  return section;
}

export default banner;
