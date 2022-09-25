"use strict";

// GET ITEMS FROM LOCALSTORAGE
const getSkillsFromLocalStorage = JSON.parse(localStorage.getItem("allForms"));

const checkSkills = getSkillsFromLocalStorage?.find(
  (el) => el.type === "skills"
);

const showHideskills = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
};

// SHOW EACH FORM INPUT SECTION ON CLICK
const showHideSkillsDetails = [
  ".skills-details--",
  ".skills-form",
  ".job-title-update-con-1-skills",
  ".job-title-update-con-2-skills",
];

// FILL THE NOT SPECIFIED PART
const fillSkillsTitle = [
  ".skills-details--",
  ".skills-job-title-inp",
  ".job-title-update-1-skills",
  ".job-title-update-2-skills",
];

// DELETE FORM
const skillsDeleteDetails = [
  ".skills-delete-icon-container",
  ".skills-details--",
];

// GET ITEMS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
const addMoreSkillsFromLocalStorageMarkup = function () {
  const skillsFromStorage = JSON.parse(localStorage.getItem("allForms"));
  if (!skillsFromStorage) return;
  return skillsFromStorage.map((item) => {
    if (item.type === "skills") {
      return `
      <li class="skills-details--" data-session-id=${item.id}>
      <div class="calendar-form-div-con-skills">
        <div>
          <div class="job-title-update-div-skills">
            <span class="job-title-update-con-1-skills">
              <h6 class="job-title-update-1-skills">${
                item.label.length < 2 ? "(Not specified)" : item.label
              }</h6>
              <ion-icon
                name="chevron-down-outline"
                class="job-title-update-icon-skills"
              ></ion-icon
            ></span>
            <span class="job-title-update-con-2-skills hidden">
              <h6 class="job-title-update-2-skills">${
                item.label.length < 2 ? "(Not specified)" : item.label
              }</h6>
              <ion-icon
                name="chevron-up-outline"
                class="job-title-update-icon-skills"
              ></ion-icon
            ></span>
          </div>
          <form class="main-form skills-form hidden">
            <div class="input-div input-div-school">
              <label class="personal-d-label">Label</label>
              <input
                type="text"
                class="personal-d-input-1 per-det-inp skills-job-title-inp skillslabel"
                value="${item.label}"
              >
            </div>
            <div class="input-div">
              <label class="personal-d-label">Level</label>
              <input type="text" class="personal-d-input-1 per-det-inp skillslevel" value="${
                item.link
              }">
            </div>
          </form>
        </div>
      </div>
      <div class="skills-delete-icon-container">
        <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
      </div>
    </li>
      `;
    }
  });
};

export {
  showHideskills,
  showHideSkillsDetails,
  fillSkillsTitle,
  skillsDeleteDetails,
  addMoreSkillsFromLocalStorageMarkup,
  checkSkills,
};
