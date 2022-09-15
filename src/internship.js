"use strict";
const showHideInternship = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[4]).classList.toggle("hidden");
};

const showHideInternshipDetails = [
  ".internship-details--",
  ".internship-form",
  ".job-title-update-con-1-internship",
  ".job-title-update-con-2-internship",
  ".text-styles-con-internship",
];

const fillInternshipTitle = [
  ".internship-details--",
  ".internship-job-title-inp",
  ".job-title-update-1-internship",
  ".job-title-update-2-internship",
];

const internshipDeleteDetails = [
  ".internship-delete-icon-container",
  ".internship-details--",
];

export {
  showHideInternship,
  showHideInternshipDetails,
  fillInternshipTitle,
  internshipDeleteDetails,
};
