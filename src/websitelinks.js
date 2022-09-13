"use strict";
const showHideWebsiteAndSocialLinks = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
};

const showHideWebDetails = [
  ".link-details--",
  ".socialLink-form",
  ".job-title-update-con-1-link",
  ".job-title-update-con-2-link",
];

export { showHideWebsiteAndSocialLinks, showHideWebDetails };
