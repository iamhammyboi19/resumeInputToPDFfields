"use strict";

// GET ITEMS FROM LOCALSTORAGE
const getEmploymentFromLocalStorage = JSON.parse(
  localStorage.getItem("allForms")
);

const checkEmployment = getEmploymentFromLocalStorage?.find(
  (el) => el.type === "employment"
);

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

const fillEmploymentTitle = [
  ".employment-details--",
  ".employment-job-title-inp",
  ".job-title-update-1",
  ".job-title-update-2",
];

const employmentDeleteDetails = [
  ".employ-delete-icon-container",
  ".employment-details--",
];

const addMoreEmploymentMarkupFromLocalStorage = function () {
  const employmentFromStorage = JSON.parse(localStorage.getItem("allForms"));
  if (!employmentFromStorage) return;
  return employmentFromStorage.map((item) => {
    if (item.type === "employment") {
      return `
      <li class="employment-details-- data-sessionId=${item.id}">
      <div class="calendar-form-div-con">
        <div>
          <div class="job-title-update-div">
            <span class="job-title-update-con-1">
              <h6 class="job-title-update-1">(Not specified)</h6>
              <ion-icon
                name="chevron-down-outline"
                class="job-title-update-icon"
              ></ion-icon
            ></span>
            <span class="job-title-update-con-2 hidden">
              <h6 class="job-title-update-2">(Not specified)</h6>
              <ion-icon
                name="chevron-up-outline"
                class="job-title-update-icon"
              ></ion-icon
            ></span>
          </div>
          <form class="main-form employment-form hidden">
            <div class="input-div input-div-job">
              <label class="personal-d-label">Job Title</label>
              <input
                type="text"
                class="personal-d-input-1 per-det-inp employment-job-title-inp"
                value=${item.jobTitle}>
            </div>
            <div class="input-div">
              <label class="personal-d-label">Employer</label>
              <input type="text"  class="personal-d-input-1 per-det-inp" value=${item.employer}>
            </div>
            <div class="input-div">
              <label class="personal-d-label">Start & End Date</label>
              <div class="start-end-date-div">
                <input
                  type="text"
                  placeholder="MM / YYYY"
                  class="personal-d-input-1 per-det-inp start-end-date-inp startdate"
                  value=${item.startDate}>
                <input
                  type="text"
                  placeholder="MM / YYYY"
                  class="personal-d-input-1 per-det-inp start-end-date-inp"
                  value=${item.endDate}>
              </div>
            </div>
            <div class="input-div">
              <label class="personal-d-label">City</label>
              <input type="text" class="personal-d-input-1 per-det-inp"  value=${item.city}>
            </div>
          </form>
    
          <div class="calendar-div">
            <div class="calendar">
              <div class="calendar-back-front">
                <ion-icon
                  name="chevron-back-outline"
                  class="calendar-back-pointer"
                ></ion-icon>
                <span class="calendar-year">2022</span>
                <ion-icon
                  name="chevron-forward-outline"
                  class="calendar-front-pointer"
                ></ion-icon>
              </div>
              <div class="calendar-months-con">
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
    
        <div class="text-styles-con-employment hidden">
          <div class="text-styles--employment">
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
            placeholder="e.g Created and implemented lesson plans based on child-led interest and curiosities."
            class="summary-input-emp"
            rows="10"
            cols="35"
            minlength="0"
            value=${item.about}
          ></textarea>
    
          <div class="suggestion-texts-con-div-emp">
            <aside class="suggestion-con-emp">
              <span class="close-arrow-btn-con-emp hide-open-close-btn"
                ><ion-icon
                  name="checkmark-outline"
                  class="close-arrow-btn-emp"
                ></ion-icon
              ></span>
              <span class="arrow-btn-con-emp"
                ><ion-icon
                  name="arrow-back-outline"
                  class="arrow-btn-employment"
                ></ion-icon>
              </span>
    
              <div class="suggestion-texts-con-emp">
                <span class="suggestion-texts-employment"
                  >Worked to ensure a positive and hassle-free customer
                  experience.</span
                >
              </div>
            </aside>
          </div>
        </div>
      </div>
      <div class="employ-delete-icon-container">
        <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
      </div>
    </li>
      `;
    }
  });
};

export {
  showHideEmploymentform,
  showHideEmDetails,
  fillEmploymentTitle,
  employmentDeleteDetails,
  addMoreEmploymentMarkupFromLocalStorage,
  checkEmployment,
};
