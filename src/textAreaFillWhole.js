"use strict";

const textareaFillWhole = function (e) {
  const thetextContent = this[0].textContent.split(" ");
  [...this[1]].forEach((e) => {
    e.style.pointerEvents = "none";
    e.style.color = "#868e96";
  });
  this[2].classList.toggle("hide-open-close-btn");
  this[3].classList.toggle("hide-open-close-btn");
  const thefiltered = thetextContent.filter((r) => r.length > 0);
  const filtered2 = thefiltered.filter((r) => r.trim());
  const filtered3 = filtered2.filter((r) => {
    if (!r.endsWith("\n")) return r;
  });
  const thejoinedTextContent = filtered3.join(" ");
  this[4].textContent += thejoinedTextContent + "." + " ";
};

const textareaFill = function (e) {
  if (!e.target.classList.contains(`${this[0]}`)) return;
  const thetextContent = e.target.textContent.split(" ");
  const theevent = e.target;
  theevent.style.pointerEvents = "none";
  theevent.style.color = "#868e96";
  const thefiltered = thetextContent.filter((r) => r.length > 0);
  const filtered2 = thefiltered.filter((r) => r.trim());
  const filtered3 = filtered2.filter((r) => {
    if (!r.endsWith("\n")) return r;
  });
  const thejoinedTextContent = filtered3.join(" ");
  this[1].textContent += thejoinedTextContent + " ";
};

export { textareaFillWhole, textareaFill };
