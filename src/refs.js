"use strict";

// GET ITEMS FROM LOCALSTORAGE
const getRefsFromLocalStorage = JSON.parse(localStorage.getItem("allForms"));

const checkRefs = getRefsFromLocalStorage?.find((el) => el.type === "refs");

const showHiderefsForm = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
};

// SHOW EACH FORM INPUT SECTION ON CLICK
const showHideRefsDetails = [
  ".refs-details--",
  ".refs-form",
  ".job-title-update-con-1-refs",
  ".job-title-update-con-2-refs",
];

// FILL THE NOT SPECIFIED PART
const fillRefsTitle = [
  ".refs-details--",
  ".refsFullName--",
  ".job-title-update-1-refs",
  ".job-title-update-2-refs",
];

// DELETE FORM
const refsDeleteDetails = [".refs-delete-icon-container", ".refs-details--"];

// GET ITEMS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
const addMoreRefsFromLocalStorageMarkup = function () {
  const refsFromStorage = JSON.parse(localStorage.getItem("allForms"));
  if (!refsFromStorage) return;
  return refsFromStorage.map((item) => {
    if (item.type === "refs") {
      return `
      <li class="refs-details--" data-session-id=${item.id}>
            <div class="calendar-form-div-con-refs">
              <div>
                <div class="job-title-update-div-refs">
                  <span class="job-title-update-con-1-refs">
                    <h6 class="job-title-update-1-refs">${
                      item.refsFullName.length < 2
                        ? "(Not specified)"
                        : item.refsFullName
                    }</h6>
                    <ion-icon
                      name="chevron-down-outline"
                      class="job-title-update-icon-refs"
                    ></ion-icon
                  ></span>
                  <span class="job-title-update-con-2-refs hidden">
                    <h6 class="job-title-update-2-refs">${
                      item.refsFullName.length < 2
                        ? "(Not specified)"
                        : item.refsFullName
                    }</h6>
                    <ion-icon
                      name="chevron-up-outline"
                      class="job-title-update-icon-refs"
                    ></ion-icon
                  ></span>
                </div>
                <form class="main-form refs-form hidden">
                  <div class="input-div input-div-school">
                    <label class="personal-d-label">Referent's Full Name</label>
                    <input
                      type="text"
                      class="personal-d-input-1 per-det-inp refsFullName--"
                      value="${item.refsFullName}"
                    >
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">Company</label>
                    <input type="text" class="personal-d-input-1 per-det-inp refsCompany" value="${
                      item.company
                    }">
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">Phone</label>
                    <input type="text" class="personal-d-input-1 per-det-inp refsPhone" value="${
                      item.phone
                    }" >
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">Email</label>
                    <input type="text" class="personal-d-input-1 per-det-inp refsEmail" value="${
                      item.email
                    }">
                  </div>
                </form>
              </div>
            </div>
            <div class="refs-delete-icon-container">
              <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
            </div>
          </li>
      `;
    }
  });
};

export {
  showHiderefsForm,
  showHideRefsDetails,
  fillRefsTitle,
  refsDeleteDetails,
  addMoreRefsFromLocalStorageMarkup,
  checkRefs,
};
