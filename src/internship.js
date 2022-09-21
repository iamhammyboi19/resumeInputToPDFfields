"use strict";

// GET ITEMS FROM LOCALSTORAGE
const getInternshipFromLocalStorage = JSON.parse(
  localStorage.getItem("allForms")
);

const checkInternship = getInternshipFromLocalStorage?.find(
  (el) => el.type === "internship"
);

const showHideInternship = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[4]).classList.toggle("hidden");
};

// SHOW EACH FORM INPUT SECTION ON CLICK
const showHideInternshipDetails = [
  ".internship-details--",
  ".internship-form",
  ".job-title-update-con-1-internship",
  ".job-title-update-con-2-internship",
  ".text-styles-con-internship",
];

// FILL THE NOT SPECIFIED PART
const fillInternshipTitle = [
  ".internship-details--",
  ".internship-job-title-inp",
  ".job-title-update-1-internship",
  ".job-title-update-2-internship",
];

// DELETE FORM
const internshipDeleteDetails = [
  ".internship-delete-icon-container",
  ".internship-details--",
];

// GET ITEMS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
const addMoreInternshipsFromLocalStorageMarkup = function () {
  const internshipFromStorage = JSON.parse(localStorage.getItem("allForms"));
  if (!internshipFromStorage) return;
  return internshipFromStorage.map((item) => {
    if (item.type === "internship") {
      return `
      <li class="internship-details--" data-sessionId=${item.id}>
                <div class="calendar-form-div-con-internship">
                  <div>
                    <div class="job-title-update-div-internship">
                      <span class="job-title-update-con-1-internship">
                        <h6 class="job-title-update-1-internship">${
                          item.jobTitle.length < 2
                            ? "(Not specified)"
                            : item.jobTitle
                        }</h6>
                        <ion-icon
                          name="chevron-down-outline"
                          class="job-title-update-icon-internship"
                        ></ion-icon
                      ></span>
                      <span class="job-title-update-con-2-internship hidden">
                        <h6 class="job-title-update-2-internship">${
                          item.jobTitle.length < 2
                            ? "(Not specified)"
                            : item.jobTitle
                        }</h6>
                        <ion-icon
                          name="chevron-up-outline"
                          class="job-title-update-icon-internship"
                        ></ion-icon
                      ></span>
                    </div>
                    <form class="main-form internship-form hidden">
                      <div class="input-div input-div-school">
                        <label class="personal-d-label">Job Title</label>
                        <input
                          type="text"
                          class="personal-d-input-1 per-det-inp internship-job-title-inp"
                          value="${item.jobTitle}">
                      </div>
                      <div class="input-div">
                        <label class="personal-d-label">Employer</label>
                        <input type="text" class="personal-d-input-1 per-det-inp internshipEmployer" value="${
                          item.employer
                        }">
                      </div>
                      <div class="input-div">
                        <label class="personal-d-label">Start & End Date</label>
                        <div class="start-end-date-div-internship">
                          <input
                            type="text"
                            placeholder="MM / YYYY"
                            class="personal-d-input-1 per-det-inp start-end-date-inp-internship startdate-internship"
                            value="${item.startDate}">
                          <input
                            type="text"
                            placeholder="MM / YYYY"
                            class="personal-d-input-1 per-det-inp start-end-date-inp-internship enddate-internship"
                            value="${item.endDate}">
                        </div>
                      </div>
                      <div class="input-div">
                        <label class="personal-d-label">City</label>
                        <input type="text" class="personal-d-input-1 per-det-inp internshipCity" value="${
                          item.city
                        }">
                      </div>
                    </form>
    
                    
                  <div class="text-styles-con-internship hidden">
                    <div class="text-styles--internship">
                      <span>
                        <i class="fa-solid fa-bold text-style-icon-sizes"></i>
                      </span>
                      <span
                        ><i class="fa-solid fa-italic text-style-icon-sizes"></i
                      ></span>
                      <span
                        ><i class="fa-solid fa-underline text-style-icon-sizes"></i
                      ></span>
                      <span class="line-up">&nbsp;</span>
                      <span
                        ><i
                          class="fa-solid fa-align-center text-style-icon-sizes"
                        ></i
                      ></span>
                      <span
                        ><i
                          class="fa-solid fa-align-justify text-style-icon-sizes"
                        ></i
                      ></span>
                      <span class="line-up">&nbsp;</span>
                    </div>
    
                    <textarea
                      placeholder="e.g Created and implemented lesson plans based on child-led interests and curiosities"
                      class="summary-input-internship internship-about"
                      rows="10"
                      cols="35"
                      minlength="0"
                    >${item.about}</textarea>
                  </div>
                </div>
                <div class="internship-delete-icon-container">
                  <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
                </div>
              </li>
      `;
    }
  });
};

export {
  showHideInternship,
  showHideInternshipDetails,
  fillInternshipTitle,
  internshipDeleteDetails,
  addMoreInternshipsFromLocalStorageMarkup,
  checkInternship,
};
