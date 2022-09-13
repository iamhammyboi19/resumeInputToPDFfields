"use strict";
const showHideEmploymentform = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[4]).classList.toggle("hidden");
};

// [parent, form, formTitleUpdate1, formTitleUpdate2, textStyle]

const showHideEmDetails = [
  ".employment-details--",
  ".employment-form",
  ".job-title-update-con-1",
  ".job-title-update-con-2",
  ".text-styles-con-employment",
];

export { showHideEmploymentform, showHideEmDetails };
