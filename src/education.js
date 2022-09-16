"use strict";

// GET ITEMS FROM LOCALSTORAGE
const getEducationFromLocalStorage = JSON.parse(
  localStorage.getItem("allForms")
);

const showHideEducationform = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[4]).classList.toggle("hidden");
};

// [parent, form, formTitleUpdate1, formTitleUpdate2, textStyle]
// SHOW EACH FORM INPUT SECTION ON CLICK
const showHideEduDetails = [
  ".edu-details--",
  ".education-form",
  ".job-title-update-con-1-edu",
  ".job-title-update-con-2-edu",
  ".text-styles-con-education",
];

// FILL THE NOT SPECIFIED PART
const fillEducationTitle = [
  ".edu-details--",
  ".education-job-title-inp",
  ".job-title-update-1-edu",
  ".job-title-update-2-edu",
];

// DELETE FORM
const educationDeleteDetails = [".edu-delete-icon-container", ".edu-details--"];

// GET ITEMS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
const addMoreEducationMarkupFromLocalStorage = function () {
  if (!getEducationFromLocalStorage) return;
  return getEducationFromLocalStorage.map((item) => {
    if (item.type === "education") {
      return `
      <li class="edu-details-- data-sessionId=${item.id}">
      <div class="calendar-form-div-con-edu">
        <div>
          <div class="job-title-update-div-edu">
            <span class="job-title-update-con-1-edu">
              <h6 class="job-title-update-1-edu">(Not specified)</h6>
              <ion-icon
                name="chevron-down-outline"
                class="job-title-update-icon-edu"
              ></ion-icon
            ></span>
            <span class="job-title-update-con-2-edu hidden">
              <h6 class="job-title-update-2-edu">(Not specified)</h6>
              <ion-icon
                name="chevron-up-outline"
                class="job-title-update-icon-edu"
              ></ion-icon
            ></span>
          </div>
          <form class="main-form education-form hidden">
            <div class="input-div input-div-school">
              <label class="personal-d-label">School</label>
              <input
                type="text"
                class="personal-d-input-1 per-det-inp education-job-title-inp"
                value=${item.school || " "}
              />
            </div>
            <div class="input-div">
              <label class="personal-d-label">Degree</label>
              <input type="text" class="personal-d-input-1 per-det-inp" value=${
                item.degree || " "
              } />
            </div>
            <div class="input-div">
              <label class="personal-d-label">Start & End Date</label>
              <div class="start-end-date-div-edu">
                <input
                  type="text"
                  placeholder="MM / YYYY"
                  class="personal-d-input-1 per-det-inp start-end-date-inp-edu startdate-edu"
                  value=${item.startDate || " "} 
                />
                <input
                  type="text"
                  placeholder="MM / YYYY"
                  class="personal-d-input-1 per-det-inp start-end-date-inp-edu"
                  value=${item.endDate || " "}
                />
              </div>
            </div>
            <div class="input-div">
              <label class="personal-d-label">City</label>
              <input type="text" class="personal-d-input-1 per-det-inp" value=${
                item.city || " "
              } />
            </div>
          </form>
    
          <div class="calendar-div-edu">
            <div class="calendar-edu">
              <div class="calendar-back-front-edu">
                <ion-icon
                  name="chevron-back-outline"
                  class="calendar-back-pointer-edu"
                ></ion-icon>
                <span class="calendar-year-edu">2022</span>
                <ion-icon
                  name="chevron-forward-outline"
                  class="calendar-front-pointer-edu"
                ></ion-icon>
              </div>
              <div class="calendar-months-con-edu">
                <span class="calendar-months">Jan</span>
                <span class="calendar-months">Feb</span>
                <span class="calendar-months">Mar</span>
                <span class="calendar-months">Apr</span>
                <span class="calendar-months">May</span>
                <span class="calendar-months">Jun</span>
                <span class="calendar-months">Jul</span>
                <span class="calendar-months">Aug</span>
                <span class="calendar-months">Sep</span>
                <span class="calendar-months">Oct</span>
                <span class="calendar-months">Nov</span>
                <span class="calendar-months">Dec</span>
              </div>
            </div>
          </div>
        </div>
    
        <div class="text-styles-con-education hidden">
          <div class="text-styles--education">
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
            placeholder="e.g Graduated with high honors"
            class="summary-input-edu"
            rows="10"
            cols="35"
            minlength="0"
            value=${item.about || " "}
          ></textarea>
        </div>
      </div>
      <div class="edu-delete-icon-container">
        <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
      </div>
    </li>  
      `;
    }
  });
};

export {
  showHideEduDetails,
  showHideEducationform,
  addMoreEducationMarkupFromLocalStorage,
  fillEducationTitle,
  educationDeleteDetails,
};
