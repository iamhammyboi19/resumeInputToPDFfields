"use strict";

// GET ITEMS FROM LOCALSTORAGE
const getWeblinksFromLocalStorage = JSON.parse(
  localStorage.getItem("allForms")
);

const checkWebLinks = getWeblinksFromLocalStorage?.find(
  (el) => el.type === "webLinks"
);

const showHideWebsiteAndSocialLinks = function (e) {
  // SELECT EACH FORM THROUGH THE PARENT ELEMENT AND HIDE AND SHOW WHEREVER YOU CLICK ON THE BUTTON
  e.target.closest(this[0]).querySelector(this[1]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[2]).classList.toggle("hidden");
  e.target.closest(this[0]).querySelector(this[3]).classList.toggle("hidden");
};

// SHOW EACH FORM INPUT SECTION ON CLICK
const showHideWebDetails = [
  ".link-details--",
  ".socialLink-form",
  ".job-title-update-con-1-link",
  ".job-title-update-con-2-link",
];

// FILL THE NOT SPECIFIED PART
const fillSocialTitle = [
  ".link-details--",
  ".socialLink-job-title-inp",
  ".job-title-update-1-link",
  ".job-title-update-2-link",
];

// DELETE FORM
const linkDeleteDetails = [".weblink-delete-icon-container", ".link-details--"];

// GET ITEMS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
const addMoreWebsiteLinkFromLocalStorageMarkup = function () {
  const webLinksFromStorage = JSON.parse(localStorage.getItem("allForms"));
  if (!webLinksFromStorage) return;
  return webLinksFromStorage.map((item) => {
    if (item.type === "webLinks") {
      return `
    <li class="link-details--" data-sessionId=${item.id}>
              <div class="calendar-form-div-con-link">
                <div>
                  <div class="job-title-update-div-link">
                    <span class="job-title-update-con-1-link">
                      <h6 class="job-title-update-1-link">${
                        item.label.length < 2 ? "(Not specified)" : item.label
                      }</h6>
                      <ion-icon
                        name="chevron-down-outline"
                        class="job-title-update-icon-link"
                      ></ion-icon
                    ></span>
                    <span class="job-title-update-con-2-link hidden">
                      <h6 class="job-title-update-2-link">${
                        item.label.length < 2 ? "(Not specified)" : item.label
                      }</h6>
                      <ion-icon
                        name="chevron-up-outline"
                        class="job-title-update-icon-link"
                      ></ion-icon
                    ></span>
                  </div>
                  <form class="main-form socialLink-form hidden">
                    <div class="input-div input-div-school">
                      <label class="personal-d-label">Label</label>
                      <input
                        type="text"
                        class="personal-d-input-1 per-det-inp socialLink-job-title-inp linklabel"
                        value="${item.label}">
                    </div>
                    <div class="input-div">
                      <label class="personal-d-label">Link</label>
                      <input type="text" class="personal-d-input-1 per-det-inp linklink" value="${
                        item.link
                      }">
                    </div>
                  </form>
                </div>
              </div>
              <div class="weblink-delete-icon-container">
                <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
              </div>
            </li>
    `;
    }
  });
};

export {
  showHideWebsiteAndSocialLinks,
  showHideWebDetails,
  fillSocialTitle,
  linkDeleteDetails,
  addMoreWebsiteLinkFromLocalStorageMarkup,
  checkWebLinks,
};
