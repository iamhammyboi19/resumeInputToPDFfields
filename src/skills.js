"use strict";
const showHideskills = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
};

const showHideSkillsDetails = [
  ".skills-details--",
  ".skills-form",
  ".job-title-update-con-1-skills",
  ".job-title-update-con-2-skills",
];

const fillSkillsTitle = [
  ".skills-details--",
  ".skills-job-title-inp",
  ".job-title-update-1-skills",
  ".job-title-update-2-skills",
];

const skillsDeleteDetails = [
  ".skills-delete-icon-container",
  ".skills-details--",
];

export {
  showHideskills,
  showHideSkillsDetails,
  fillSkillsTitle,
  skillsDeleteDetails,
};
