"use strict";

const templateLondonContent = document.querySelector(".template-contents");
const templateUserName = document.querySelector(".user-name");
const templateAddress = document.querySelector(".address-part");
const templateDateOfBirthParent = document.querySelector(".first-part-1");
const templatePlaceOfBirthParent = document.querySelector(".first-part-2");
const templateNationalityParent = document.querySelector(".first-part-3");
const templateDlParent = document.querySelector(".first-part-4");
const templateLinkList = document.querySelector(".link-list");
const templateProfileTitle = document.querySelector(".profile-temp-section");

class TemplatesLondonFillUpFromLocalStorage {
  constructor() {
    this.#showUserNameAndWantedJob();
    this.#showAddressEmailPhone();
    this.#showDatePlNaDl();
    this.#showWebAndSocialLinks();
    this.#showEmploymentHistory();
    this.#showEduationHistory();
    this.#showSkills();
    this.#showInternship();
    this.#showRefs();
    this.#showProfSum();
  }

  #getItemsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("personalDetails"));
  }

  #getAllFormsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("allForms"));
  }

  #getProfSumFromLocalStorage() {
    return localStorage.getItem("professionalSummary");
  }

  #showProfSum() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getProfSumFromLocalStorage()) return;

      if (this.#getProfSumFromLocalStorage().length > 3) {
        document.querySelector(".profile-line").innerHTML = "";
        document.querySelector(
          ".profile-line"
        ).innerHTML = `<hr class="separate-lines" />`;
        templateProfileTitle.textContent = "PROFILE";
        document.querySelector(".profile-temp-about").textContent =
          this.#getProfSumFromLocalStorage();
      } else {
        document.querySelector(".profile-line").innerHTML = "";
        templateProfileTitle.textContent = "";
        document.querySelector(".profile-temp-about").textContent = "";
      }
    }, 1000);
  }

  //////// WEB SOCIAL LINKS SECTION
  #showWebAndSocialLinks() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getAllFormsFromLocalStorage()) return;

      // CHECK IF THERE IS WEBLINK
      const checkforWebLinks = this.#getAllFormsFromLocalStorage().find(
        (items) => items.type === "webLinks"
      );

      // IF WEBLINK DISPLAY LINKS
      if (checkforWebLinks) {
        document.querySelector(".link-line").innerHTML = "";
        document.querySelector(
          ".link-line"
        ).innerHTML = `<hr class="separate-lines" />`;
        document.querySelector(".link-section").textContent = "LINKS";
      } else {
        document.querySelector(".link-section").textContent = "";
        document.querySelector(".link-line").innerHTML = "";
      }

      // GET ALL WEBLINKS AND GENERATE MARKUP
      const allLinks = this.#getAllFormsFromLocalStorage().map((item) => {
        if (item.type === "webLinks") {
          return `<a href="${
            item.link.startsWith("https") ? item.link : `https://${item.link}`
          }" target="_blank" class="links-name">${item.label}, </a>`;
        }
      });

      // DISPLAY WEBLINKS

      templateLinkList.innerHTML = "";

      templateLinkList.insertAdjacentHTML("beforeend", allLinks.join(""));

      if (templateLinkList.lastChild) {
        templateLinkList.lastChild.textContent =
          templateLinkList.lastChild.textContent.replace(", ", "");
      }
    }, 1000);
  }

  ///////// EMPLOYMENT HISTORY SECTION
  #showEmploymentHistory() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getAllFormsFromLocalStorage()) return;

      // CHECK IF THERE IS EMPLOYMENT
      const checkforEmployment = this.#getAllFormsFromLocalStorage().find(
        (items) => items.type === "employment"
      );

      // IF EMPLOYMENT DISPLAY EMPLOYMENT
      if (checkforEmployment) {
        document.querySelector(".employment-line").innerHTML = "";
        document.querySelector(
          ".employment-line"
        ).innerHTML = `<hr class="separate-lines" />`;
        document.querySelector(".employment-history").textContent =
          "EMPLOYMENT HISTORY";
      } else {
        document.querySelector(".employment-history").textContent = "";
        document.querySelector(".employment-line").innerHTML = "";
      }

      // EMPLOYMENT MARKUP
      const allEmploymentHistory = this.#getAllFormsFromLocalStorage().map(
        (item) => {
          if (item.type === "employment") {
            const aboutMe = item.about.split("\n").map((i) => {
              return `<li class="emp-desc-list">${i}</li>`;
            });

            return `
                  <div class="em-temp-det-con">
                  <span class="em-temp-date"><p>${item.startDate} ${
              item.startDate.length > 2 ? "—" : ""
            } ${item.endDate}</p></span>
                  <div class="emp-sch-det">
                    <h6 class="emp-work">${item.jobTitle} ${
              item.jobTitle.length > 2 ? "AT" : ""
            } ${item.employer}</h6>
                    <ul class="emp-desc-list-con">
                    ${aboutMe.join("")}
                    </ul>
                  </div>
                  <p class="emp-city-temp">${item.city}</p>
                </div>
            `;
          }
        }
      );

      // DISPLAY EMPLOYMENT HISTORY MARKUP
      document.querySelector(".emp-temp-major-parent").innerHTML = "";

      document
        .querySelector(".emp-temp-major-parent")
        .insertAdjacentHTML("beforeend", allEmploymentHistory.join(""));
    }, 1000);
  }

  ///////// EDUCATION
  #showEduationHistory() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // CHECK IF THERE IS EDUCATION
      const checkForEducation = this.#getAllFormsFromLocalStorage().find(
        (items) => items.type === "education"
      );

      // IF EDUCATION DISPLAY EDUCATION
      if (checkForEducation) {
        document.querySelector(".education-line").innerHTML = "";
        document.querySelector(
          ".education-line"
        ).innerHTML = `<hr class="separate-lines" />`;
        document.querySelector(".education-history").textContent = "EDUCATION";
      } else {
        document.querySelector(".education-history").textContent = "";
        document.querySelector(".education-line").innerHTML = "";
      }

      // EDUCATION
      const allEducationHistory = this.#getAllFormsFromLocalStorage().map(
        (item) => {
          if (item.type === "education") {
            const aboutMe = item.about.split("\n").map((i) => {
              return `<li class="edu-desc-list">${i}</li>`;
            });

            return `
                <div class="edu-temp-det-con">
                <span class="edu-temp-date"><p>${item.startDate} ${
              item.startDate.length > 2 ? "—" : ""
            } ${item.endDate}</p></span>
                <div class="edu-sch-det">
                  <h6 class="edu-work">${item.school}, ${item.degree}</h6>
                  <ul class="edu-desc-list-con">
                    ${aboutMe.join("")}
                  </ul>
                </div>
  
                <p class="edu-city-temp">${item.city}</p>
              </div>
            `;
          }
        }
      );

      // DISPLAY EDUCATION HISTORY MARKUP
      document.querySelector(".edu-temp-major-parent").innerHTML = "";

      document
        .querySelector(".edu-temp-major-parent")
        .insertAdjacentHTML("beforeend", allEducationHistory.join(""));
    }, 1000);
  }

  ///////// SKILLS SECTION
  #showSkills() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // CHECK IF THERE IS SKILLS
      const checkForSkills = this.#getAllFormsFromLocalStorage().find(
        (items) => items.type === "skills"
      );

      // IF SKILLS DISPLAY SKILLS
      if (checkForSkills) {
        document.querySelector(".skills-line").innerHTML = "";
        document.querySelector(
          ".skills-line"
        ).innerHTML = `<hr class="separate-lines" />`;
        document.querySelector(".skills-history").textContent = "SKILLS";
      } else {
        document.querySelector(".skills-history").textContent = "";
        document.querySelector(".skills-line").innerHTML = "";
      }

      const allSkillsListed = this.#getAllFormsFromLocalStorage().map(
        (item) => {
          if (item.type === "skills") {
            return `
            <li class="skills-list-desc-level">
              <span class="skills-desc">${item.label}</span>
              <span class="skills-level-temp">${item.link}</span>
            </li>
            `;
          }
        }
      );

      // DISPLAY SKILLS LISTS MARKUP
      document.querySelector(".skills-list-level").innerHTML = "";

      document
        .querySelector(".skills-list-level")
        .insertAdjacentHTML("beforeend", allSkillsListed.join(""));
    }, 1000);
  }

  ///////// INTERNSHIP SECTION
  #showInternship() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // CHECK IF THERE IS INTERNSHIP
      const checkForInterships = this.#getAllFormsFromLocalStorage().find(
        (items) => items.type === "internship"
      );

      // IF INTERNSHIP DISPLAY INTERNSHIP
      if (checkForInterships) {
        document.querySelector(".intern-line").innerHTML = "";
        document.querySelector(
          ".intern-line"
        ).innerHTML = `<hr class="separate-lines" />`;
        document.querySelector(".internship-history").textContent =
          "INTERNSHIPS";
      } else {
        document.querySelector(".internship-history").textContent = "";
        document.querySelector(".intern-line").innerHTML = "";
      }

      // INTERNSHIPS
      const allInternshipsHistory = this.#getAllFormsFromLocalStorage().map(
        (item) => {
          if (item.type === "internship") {
            const aboutMe = item.about.split("\n").map((i) => {
              return ` <li class="intern-desc-list">${i}</li>`;
            });

            return `
          <div class="intern-temp-det-con">
              <span class="intern-temp-date"><p>${item.startDate} ${
              item.startDate.length > 2 ? "—" : ""
            } ${item.endDate}</p></span>
              <div class="intern-sch-det">
                <h6 class="intern-work">${item.jobTitle} AT ${
              item.employer
            }</h6>
                <ul class="intern-desc-list-con">
                  ${aboutMe.join("")}
                </ul>
              </div>

              <p class="intern-city-temp">${item.city}</p>
          </div>
          `;
          }
        }
      );

      // DISPLAY INTERNSHIPS HISTORY MARKUP
      document.querySelector(".intern-temp-major-parent").innerHTML = "";

      document
        .querySelector(".intern-temp-major-parent")
        .insertAdjacentHTML("beforeend", allInternshipsHistory.join(""));
    }, 1000);
  }

  ///////// REFERENCE
  #showRefs() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // CHECK IF THERE IS REFERENCE
      const checkForRefs = this.#getAllFormsFromLocalStorage().find(
        (items) => items.type === "refs"
      );

      // IF REFERENCE DISPLAY REFERENCE
      if (checkForRefs) {
        // LINE BEFORE REFS LINE
        document.querySelector(".refs-line").innerHTML = "";
        document.querySelector(
          ".refs-line"
        ).innerHTML = `<hr class="separate-lines" />`;

        // LAST LINE
        document.querySelector(".last-inline").innerHTML = "";
        document.querySelector(
          ".last-inline"
        ).innerHTML = `<hr class="separate-lines" />`;

        //
        document.querySelector(".refs-history").textContent = "REFERENCE";
      } else {
        document.querySelector(".refs-history").textContent = "";
        document.querySelector(".refs-line").innerHTML = "";
        document.querySelector(".last-inline").innerHTML = "";
      }

      const allRefsListed = this.#getAllFormsFromLocalStorage().map((item) => {
        if (item.type === "refs") {
          return `
          <h6 class="ref-org">${item.refsFullName} ${
            item.refsFullName.length > 3 ? "FROM" : ""
          } ${item.company}</h6>
          <p class="ref-phone-email">
            ${item.email}, ${item.phone}
          </p>
            `;
        }
      });

      document.querySelector(".ref-temp-place").innerHTML = "";

      document
        .querySelector(".ref-temp-place")
        .insertAdjacentHTML("beforeend", allRefsListed.join(""));
    });
  }

  ///////// USERNAME AND WANTED JOB SECTION
  #showUserNameAndWantedJob() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // GET NEEDED ITEMS FROM LOCALSTORAGE
      const { firstName, lastName, wantedJob } =
        this.#getItemsFromLocalStorage()[0];

      // CREATE MARKUP
      const markup = `${firstName} ${lastName}${
        firstName.length > 1 || lastName.length > 1 ? "," : ""
      } ${wantedJob}`;

      // CREATE MARKUP
      templateUserName.innerHTML = markup;
    }, 1000);
  }

  //////// ADDRESS EMAIL PHONE POSTAL CODE
  #showAddressEmailPhone() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // CHECK THE LENGTH OF EACH ITEM BEFORE ADDING A COMMA
      const c = (a) => `${a.length > 1 ? "," : ""}`;

      // GET NEEDED ITEMS FROM LOCALSTORAGE
      const { address, city, postalCode, country, phone, email } =
        this.#getItemsFromLocalStorage()[0];

      // CREATE MARKUP
      const markup = `${address}${c(address)} ${city}${c(
        city
      )} ${postalCode}${c(postalCode)} ${country}${c(country)} ${phone}${c(
        phone
      )} ${email}`;

      // ADD MARKUP TO TEMPLATE
      templateAddress.innerHTML = markup;
    });
  }

  ///////// DOB POB DL NA SECTION
  #showDatePlNaDl() {
    setInterval(() => {
      // IF NO ITEM IN LOCAL STORAGE RETURN IMMEDIATELY
      if (!this.#getItemsFromLocalStorage()) return;

      // GET NEEDED ITEMS FROM LOCALSTORAGE
      const { dateOfBirth, placeOfBirth, nationality, driversLicense } =
        this.#getItemsFromLocalStorage()[0];

      // generate markups
      const markup1 = `<p class="dateOfBirthPdf">Date of birth</p> <p class="dateOfBirthPdf">${dateOfBirth}</p>`;
      const markup2 = `<p class="dateOfBirthPdf">Place of birth</p> <p class="dateOfBirthPdf">${placeOfBirth}</p>`;
      const markup3 = `<p class="dateOfBirthPdf">Nationality</p> <p class="dateOfBirthPdf">${nationality}</p>`;
      const markup4 = ` <p class="dateOfBirthPdf">Driving License</p> <p class="dateOfBirthPdf">${driversLicense}</p>`;

      if (
        dateOfBirth.length > 1 ||
        placeOfBirth.length > 1 ||
        nationality.length > 1 ||
        driversLicense.length > 1
      ) {
        // <hr class="separate-lines" />
        document.querySelector(".first-line").innerHTML = "";
        document.querySelector(".first-line").innerHTML =
          '<hr class="separate-lines" />';
      } else {
        document.querySelector(".first-line").innerHTML = "";
      }

      // check if there is date of birth to add markup
      if (dateOfBirth.length > 2) {
        templateDateOfBirthParent.innerHTML = markup1;
      } else {
        templateDateOfBirthParent.innerHTML = "";
      }

      // check if there is place of birth to add markup
      if (placeOfBirth.length > 2) {
        templatePlaceOfBirthParent.innerHTML = markup2;
      } else {
        templatePlaceOfBirthParent.innerHTML = "";
      }

      // check if there is nationality to add markup
      if (nationality.length > 2) {
        templateNationalityParent.innerHTML = markup3;
      } else {
        templateNationalityParent.innerHTML = "";
      }

      // check if there is drivers license to add markup
      if (driversLicense.length > 2) {
        templateDlParent.innerHTML = markup4;
      } else {
        templateDlParent.innerHTML = "";
      }
    });
  }
}

export { TemplatesLondonFillUpFromLocalStorage };
