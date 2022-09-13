"use strict";
const showHideEducationform = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[4]).classList.toggle("hidden");
};

const showHideEduDetails = [
  ".edu-details--",
  ".education-form",
  ".job-title-update-con-1-edu",
  ".job-title-update-con-2-edu",
  ".text-styles-con-education",
];

export { showHideEduDetails, showHideEducationform };
