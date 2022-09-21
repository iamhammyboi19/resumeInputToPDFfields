"use strict";

import { textareaFillWhole, textareaFill } from "./textAreaFillWhole.js";

import {
  EmploymentNewFormSessions,
  WebSocialLinkFormSessions,
  SaveAndDeleteItemsFromLocalStorage,
  EducationNewFormSessions,
  InternshipNewFormSessions,
  SkillsNewFormSessions,
} from "./formModels.js";

import {
  addMoreEmploymentMarkup,
  addMoreWebsiteLinkMarkup,
  addMoreSkillsMarkup,
  addMoreInternshipsMarkup,
  addMoreEducationMarkup,
} from "./markups.js";

import {
  showHideEmploymentform,
  showHideEmDetails,
  fillEmploymentTitle,
  employmentDeleteDetails,
  addMoreEmploymentMarkupFromLocalStorage,
  checkEmployment,
} from "./employments.js";

import {
  showHideWebDetails,
  showHideWebsiteAndSocialLinks,
  fillSocialTitle,
  linkDeleteDetails,
  addMoreWebsiteLinkFromLocalStorageMarkup,
  checkWebLinks,
} from "./websitelinks.js";

import {
  showHideEducationform,
  showHideEduDetails,
  fillEducationTitle,
  educationDeleteDetails,
  addMoreEducationMarkupFromLocalStorage,
  checkEducation,
} from "./education.js";

import {
  showHideskills,
  showHideSkillsDetails,
  fillSkillsTitle,
  skillsDeleteDetails,
  addMoreSkillsFromLocalStorageMarkup,
  checkSkills,
} from "./skills.js";

import {
  showHideInternship,
  showHideInternshipDetails,
  fillInternshipTitle,
  internshipDeleteDetails,
  addMoreInternshipsFromLocalStorageMarkup,
  checkInternship,
} from "./internship.js";

const hiddenForms = document.querySelectorAll(".hidden-input-divs");
const showFormCon = document.querySelector(".show-form-container");
const hidFormCon = document.querySelector(".hide-form-container");

// -----------------------------------------------------------------------------------

//  suggestion box and text parts
const showSuggestBox = document.querySelector(".pre-written-profession");
const hideSuggestBox = document.querySelector(".close-pre-con");
const suggestionBoxDiv = document.querySelector(".suggestion-texts-con-div");
const theBoxTexts = document.querySelector(".suggestion-texts-con");
const textareaInput = document.querySelector(".summary-input");
const prePhraseArrowBtn = document.querySelector(".arrow-btn-con");
const suggestionTexts = document.querySelectorAll(".suggestion-texts");
const prePhraseCloseArrowBtn = document.querySelector(".close-arrow-btn-con");

// ------------------------------------------------------------------------------------

//  form calendar part first calendar
const calendarYear = document.querySelector(".calendar-year");

// second calendar
const calendarDivEdu = document.querySelector(".calendar-div-edu");
const calendarYearEdu = document.querySelector(".calendar-year-edu");
const calendarBackFrontEdu = document.querySelector(".calendar-back-front-edu");
const deductCurYearEdu = document.querySelector(".calendar-back-pointer-edu");
const addCurYearEdu = document.querySelector(".calendar-front-pointer-edu");
const calendarMonthsEdu = document.querySelector(".calendar-months-con-edu");
const startDateEdu = document.querySelector(".startdate-edu");

// ------------------------------------------------------------------------------------

// employment form parts
const addEmploymentBtn = document.querySelector(".employment-div-add");
const employmentParentCon = document.querySelector(".employment-parent");

// ------------------------------------------------------------------------------------

// // education form parts

const educationForm = document.querySelector(".education-form");
const educationParentCon = document.querySelector(".education-parent");
const addEducationBtn = document.querySelector(".education-div-add");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// // website & social links

const webSocialLinkParent = document.querySelector(".weblink-parent");
const addSocialBtn = document.querySelector(".link-div-add");
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// // skills section
const addSkillsBtn = document.querySelector(".skills-div-add");
const skillsParentCon = document.querySelector(".skills-parent");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// // internship section
const addInternshipBtn = document.querySelector(".internship-div-add");
const internshipParentCon = document.querySelector(".internship-parent");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

const thedate = new Date();
let curDate = thedate.getFullYear();
if (calendarYear) {
  calendarYear.textContent = curDate;
}

const theDate2 = new Date();
let curDateEdu = theDate2.getFullYear();
if (calendarYearEdu) {
  calendarYearEdu.textContent = curDateEdu;
}

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// SHOW AVAILABLE ITEMS ON RELOAD

window.addEventListener("load", function () {
  // GET EDUCATION FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  if (!addMoreEducationMarkupFromLocalStorage()) return;
  educationParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEducationMarkupFromLocalStorage().join("")
  );
  if (checkEducation) {
    addEducationBtn.querySelector(
      "span"
    ).textContent = `Add one more education`;
  }

  // GET WEBLINKS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  if (!addMoreWebsiteLinkFromLocalStorageMarkup()) return;
  webSocialLinkParent.insertAdjacentHTML(
    "beforeend",
    addMoreWebsiteLinkFromLocalStorageMarkup().join("")
  );
  if (checkWebLinks) {
    addSocialBtn.querySelector("span").textContent = `Add one more link`;
  }

  // GET SKILLS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  if (!addMoreSkillsFromLocalStorageMarkup()) return;
  skillsParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreSkillsFromLocalStorageMarkup().join("")
  );
  if (checkSkills) {
    addSkillsBtn.querySelector("span").textContent = `Add one more skill`;
  }

  // GET INTERNSHIPS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  if (!addMoreInternshipsFromLocalStorageMarkup()) return;
  internshipParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreInternshipsFromLocalStorageMarkup().join("")
  );
  if (checkInternship) {
    addInternshipBtn.querySelector(
      "span"
    ).textContent = `Add one more internship`;
  }

  // GET INTERNSHIPS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  if (!addMoreEmploymentMarkupFromLocalStorage()) return;
  employmentParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEmploymentMarkupFromLocalStorage().join("")
  );
  if (checkEmployment) {
    addEmploymentBtn.querySelector(
      "span"
    ).textContent = `Add one more employment`;
  }
});

// ------------------------------------------------------------------------------------

const hideShowFormCon = function () {
  [...hiddenForms].forEach((e) => e.classList.toggle("hidden-form-container"));
  hidFormCon.classList.toggle("hidden-form-container");
  showFormCon.classList.toggle("hidden-form-container");
};

// hide and show the first form container
showFormCon.addEventListener("click", hideShowFormCon);
hidFormCon.addEventListener("click", hideShowFormCon);

// ------------------------------------------------------------------------------------

const showHideSuggestionBoxFunc = function () {
  suggestionBoxDiv.classList.toggle("hide-suggestion-box");
  showSuggestBox.classList.toggle("hide-open-close-btn");
  hideSuggestBox.classList.toggle("hide-open-close-btn");
};

// hide and show the first suggestion text container
showSuggestBox.addEventListener("click", showHideSuggestionBoxFunc);
hideSuggestBox.addEventListener("click", showHideSuggestionBoxFunc);

// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

theBoxTexts.addEventListener(
  "click",
  textareaFill.bind(["suggestion-texts", textareaInput])
);

// theBoxTextsEmploy.addEventListener(
//   "click",
//   textareaFill.bind(["suggestion-texts-employment", textareaEmploy])
// );

// ------------------------------------------------------------------------------------

// theBoxTexts suggestionTexts prePhraseArrowBtn prePhraseCloseArrowBtn textareaInput
// fill textarea at once for first suggestion text
prePhraseArrowBtn.addEventListener(
  "click",
  textareaFillWhole.bind([
    theBoxTexts,
    suggestionTexts,
    prePhraseArrowBtn,
    prePhraseCloseArrowBtn,
    textareaInput,
  ])
);
// ------------------------------------------------------------------------------------

// employment calendar
// employmentForm
document.documentElement.addEventListener("click", function (e) {
  // CHECK IF DECREASE OR INCREASE YEAR BUTTON IS CLICK AND STILL LEAVE THE CALENDAR
  if (
    e.target.closest(".calendar-back-pointer") ||
    e.target.closest(".calendar-front-pointer")
  )
    return;

  // CHECK IF START-DATE BUTTON IS CLICK AND SHOW THE CALENDAR FORM
  if (
    e.target.closest(".employment-details--") &&
    e.target.classList.contains("startdate")
  ) {
    e.target
      .closest(".employment-details--")
      .querySelector(".calendar-form-div-con").style.position = "relative";
    e.target
      .closest(".employment-details--")
      .querySelector(".calendar-div")
      .classList.toggle("hide-show-calendar-div");
  }

  // CHECK IF ANY OTHER BUTTON IS CLICKED TO HIDE THE CALENDAR FORM
  else {
    e.target
      .closest(".employment-details--")
      ?.querySelector(".calendar-div")
      .classList.remove("hide-show-calendar-div");
  }
});

let curYear = curDate;

document
  .querySelector(".employment-parent")
  .addEventListener("click", function (e) {
    // REDUCE THE YEAR ON CLICK AND CHANGE CURRENT YEAR
    if (e.target.closest(".calendar-back-pointer")) {
      +curYear--;
      e.target.closest(
        ".calendar-back-pointer"
      ).nextElementSibling.textContent = curYear;
    }

    // INCREASE THE YEAR ON CLICK AND CHANGE CURRENT YEAR
    if (e.target.closest(".calendar-front-pointer")) {
      +curYear++;
      e.target.closest(
        ".calendar-front-pointer"
      ).previousElementSibling.textContent = curYear;
    }

    // TAKE THE YEAR ON CLICK AND CHANGE START DATE
    if (e.target.closest(".calendar-year")) {
      e.target
        .closest(".employment-details--")
        .querySelector(".startdate").value =
        e.target.closest(".calendar-year").textContent;
    }

    // TAKE THE YEAR AND MONTH ON CLICK AND CHANGE START DATE ALSO HIDE THE CALENDAR FORM
    if (e.target.closest(".calendar-months-con")) {
      if (e.target.classList.contains("calendar-months-con")) return;
      e.target
        .closest(".employment-details--")
        .querySelector(".startdate").value =
        e.target.textContent +
        "," +
        " " +
        e.target
          .closest(".employment-details--")
          .querySelector(".calendar-year").textContent;
      e.target
        .closest(".employment-details--")
        .querySelector(".calendar-div")
        .classList.toggle("hide-show-calendar-div");
    }
  });

// ------------------------------------------------------------------------------------

// education calendar

if (educationForm) {
  educationForm.addEventListener("click", function (e) {
    if (!e.target.classList.contains("startdate-edu")) return;
    calendarDivEdu.classList.toggle("hide-show-calendar-div");
  });
}

let curYearEdu = curDateEdu;

if (deductCurYearEdu) {
  deductCurYearEdu.addEventListener("click", function () {
    +curYearEdu--;
    calendarYearEdu.textContent = curYearEdu;
  });
}

if (addCurYearEdu) {
  addCurYearEdu.addEventListener("click", function () {
    +curYearEdu++;
    calendarYearEdu.textContent = curYearEdu;
  });
}

if (calendarYearEdu) {
  calendarYearEdu.addEventListener("click", function () {
    startDateEdu.value = calendarYearEdu.textContent;
  });
}

if (calendarMonthsEdu) {
  calendarMonthsEdu.addEventListener("click", function (e) {
    if (e.target.classList.contains("calendar-months-con-edu")) return;
    startDateEdu.value =
      e.target.textContent + "," + " " + calendarYearEdu.textContent;
    calendarDivEdu.classList.toggle("hide-show-calendar-div");
  });
}
// ------------------------------------------------------------------------------------

// REUSEABLE FUNCTION FOR FILLING THE NON-SPECIFIED PART

const nonSpecificTextFill = function (e) {
  const jobTitleObs = e.target.value;
  if (jobTitleObs.length === 0) {
    this[0].textContent = this[1].textContent = "(Not Specfied)";
  } else {
    this[0].textContent = this[1].textContent = jobTitleObs;
  }
};

// [form-details, form-job-title-inp, job-title-update-1-internship, job-title-update-2-internship ]
const fillMeUp = function (e) {
  // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it
  return e.target
    .closest(this[0])
    .querySelector(this[1])
    .addEventListener(
      "input",
      nonSpecificTextFill.bind([
        // SELECT THE NON SPECIFIED FIELD AREA FOR EACH CURRENT FORM ELEMENT
        e.target.closest(this[0]).querySelector(this[2]),
        e.target.closest(this[0]).querySelector(this[3]),
      ])
    );
};

// [form-details-delete-btn, formDetails]
const deleteSpecificForm = function (e) {
  const curDeleteBtn = e.target.closest(this[0]);

  // GET THE CUURENT DELETED ELEMENT AND ALSO DELETE FROM LOCALSTORAGE
  const { sessionId } = curDeleteBtn.closest(this[1]).dataset;
  const savedItems = JSON.parse(localStorage.getItem("allForms"));
  const curTemplate = savedItems.findIndex((el) => el.id === sessionId);
  savedItems.splice(curTemplate, 1);
  if (savedItems.length === 0) localStorage.removeItem("allForms");
  localStorage.setItem("allForms", JSON.stringify(savedItems));
  return curDeleteBtn
    .closest(this[1])
    .parentElement.removeChild(curDeleteBtn.closest(this[1]));
};
// ------------------------------------------------------------------------------------

// show employment section

// ADDING MORE SECTION
addEmploymentBtn.addEventListener("click", function () {
  employmentParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEmploymentMarkup()
  );
  if (employmentParentCon.children.length > 0) {
    addEmploymentBtn.querySelector(
      "span"
    ).textContent = `Add one more employment`;
  }

  SaveAndDeleteItemsFromLocalStorage.collectItems(
    new EmploymentNewFormSessions()
  );
  SaveAndDeleteItemsFromLocalStorage.save();
});

document
  .querySelector(".employment-parent")
  .addEventListener("click", function (e) {
    // HIDE AND SHOW FORM
    if (e.target.closest(".job-title-update-con-1")) {
      showHideEmploymentform.bind(showHideEmDetails)(e);
    }

    // HIDE AND SHOW FORM
    if (e.target.closest(".job-title-update-con-2")) {
      showHideEmploymentform.bind(showHideEmDetails)(e);
    }

    // FILLING THE NOT SPECIFIED AREA IN THE FORM

    if (e.target.closest(".employment-details--")) {
      // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it

      fillMeUp.bind(fillEmploymentTitle)(e);

      if (e.target.classList.contains("employment-job-title-inp")) {
        e.target
          .closest(".employment-details--")
          .querySelector(".employment-job-title-inp")
          .addEventListener("input", function (e) {
            const sessionId = e.target.closest(".employment-details--");
            console.log(sessionId);
            // const savedItems = JSON.parse(localStorage.getItem("allForms"));
            // const curTemplate = savedItems.find((el) => el.id === sessionId);
            // const index = savedItems.indexOf(curTemplate);
            // curTemplate.jobTitle = e.target.value;
            // savedItems[index] = curTemplate;
            // localStorage.setItem("allForms", JSON.stringify(savedItems));
          });
      }
    }

    // DELETE FORM
    if (e.target.closest(".employ-delete-icon-container")) {
      // delete on click
      deleteSpecificForm.bind(employmentDeleteDetails)(e);

      // check if there is any child element left
      if (employmentParentCon.children.length === 0) {
        addEmploymentBtn.querySelector("span").textContent = `Add employment`;
      }
    }
  });

// ------------------------------------------------------------------------------------

// show education section

// ADDING MORE SECTION
addEducationBtn.addEventListener("click", function () {
  educationParentCon.insertAdjacentHTML("beforeend", addMoreEducationMarkup());
  if (educationParentCon.children.length > 0) {
    addEducationBtn.querySelector(
      "span"
    ).textContent = `Add one more education`;
  }
  const eduItems = new EducationNewFormSessions();
  SaveAndDeleteItemsFromLocalStorage.collectItems(eduItems);
  SaveAndDeleteItemsFromLocalStorage.save();
});

// SHOW AND HIDE FORM ON CLICK
educationParentCon.addEventListener("click", function (e) {
  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-1-edu")) {
    showHideEducationform.bind(showHideEduDetails)(e);
  }

  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-2-edu")) {
    showHideEducationform.bind(showHideEduDetails)(e);
  }

  // FILLING THE NOT SPECIFIED AREA IN THE FORM

  if (e.target.closest(".edu-details--")) {
    // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it

    fillMeUp.bind(fillEducationTitle)(e);
  }

  // DELETE FORM
  if (e.target.closest(".edu-delete-icon-container")) {
    // delete on click
    deleteSpecificForm.bind(educationDeleteDetails)(e);

    // check if there is any child element left
    if (educationParentCon.children.length === 0) {
      addEducationBtn.querySelector("span").textContent = `Add education`;
    }
  }
});

// ------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------

// show education section

// ADDING MORE SECTION
addSocialBtn.addEventListener("click", function () {
  webSocialLinkParent.insertAdjacentHTML(
    "beforeend",
    addMoreWebsiteLinkMarkup()
  );
  if (webSocialLinkParent.children.length > 0) {
    addSocialBtn.querySelector("span").textContent = `Add one more link`;
  }

  const webLinkItems = new WebSocialLinkFormSessions();
  SaveAndDeleteItemsFromLocalStorage.collectItems(webLinkItems);
  SaveAndDeleteItemsFromLocalStorage.save();
});

// SHOW AND HIDE FORM ON CLICK
webSocialLinkParent.addEventListener("click", function (e) {
  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-1-link")) {
    showHideWebsiteAndSocialLinks.bind(showHideWebDetails)(e);
  }

  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-2-link")) {
    showHideWebsiteAndSocialLinks.bind(showHideWebDetails)(e);
  }

  // FILLING THE NOT SPECIFIED AREA IN THE FORM
  if (e.target.closest(".link-details--")) {
    // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it
    fillMeUp.bind(fillSocialTitle)(e);
  }

  // DELETE FORM
  if (e.target.closest(".weblink-delete-icon-container")) {
    // delete on click
    deleteSpecificForm.bind(linkDeleteDetails)(e);

    // check if there is any child element left
    if (webSocialLinkParent.children.length === 0) {
      addSocialBtn.querySelector("span").textContent = `Add link`;
    }
  }
});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// show skills section

// ADD NEW ELEMENT TO THE PARENT
addSkillsBtn.addEventListener("click", function () {
  skillsParentCon.insertAdjacentHTML("beforeend", addMoreSkillsMarkup());
  if (skillsParentCon.children.length > 0) {
    addSkillsBtn.querySelector("span").textContent = `Add one more skill`;
  }
  const skillsItems = new SkillsNewFormSessions();
  SaveAndDeleteItemsFromLocalStorage.collectItems(skillsItems);
  SaveAndDeleteItemsFromLocalStorage.save();
});

skillsParentCon.addEventListener("click", function (e) {
  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-1-skills")) {
    showHideskills.bind(showHideSkillsDetails)(e);
  }

  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-2-skills")) {
    showHideskills.bind(showHideSkillsDetails)(e);
  }

  // FILLING THE NOT SPECIFIED AREA IN THE FORM
  if (e.target.closest(".skills-details--")) {
    // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it
    fillMeUp.bind(fillSkillsTitle)(e);
  }

  // DELETE FORM
  if (e.target.closest(".skills-delete-icon-container")) {
    // delete on click
    deleteSpecificForm.bind(skillsDeleteDetails)(e);

    // check if there is any child element left
    if (skillsParentCon.children.length === 0) {
      addSkillsBtn.querySelector("span").textContent = `Add skills`;
    }
  }
});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// add internship section

// ADD NEW ELEMENT TO THE PARENT
addInternshipBtn.addEventListener("click", function () {
  internshipParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreInternshipsMarkup()
  );

  if (internshipParentCon.children.length > 0) {
    addInternshipBtn.querySelector(
      "span"
    ).textContent = `Add one more internship`;
  }

  const internshipItems = new InternshipNewFormSessions();
  SaveAndDeleteItemsFromLocalStorage.collectItems(internshipItems);
  SaveAndDeleteItemsFromLocalStorage.save();
});

internshipParentCon.addEventListener("click", function (e) {
  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-1-internship")) {
    showHideInternship.bind(showHideInternshipDetails)(e);
  }

  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-2-internship")) {
    showHideInternship.bind(showHideInternshipDetails)(e);
  }

  // FILLING THE NOT SPECIFIED AREA IN THE FORM
  if (e.target.closest(".internship-details--")) {
    fillMeUp.bind(fillInternshipTitle)(e);
  }

  // DELETE FORM
  if (e.target.closest(".internship-delete-icon-container")) {
    // delete on click
    deleteSpecificForm.bind(internshipDeleteDetails)(e);

    // check if there is any child element left
    if (internshipParentCon.children.length === 0) {
      addInternshipBtn.querySelector("span").textContent = `Add internship`;
    }
  }
});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// hiding positioned element clicking outing the element PROFESSIONAL

// LOGIC
/*
1) make sure the element you are hiding and showing and the buttons doing it are not responding while clicking on body element
2) hide the box as long as the first condition is not met
3) make a new condition to check if the box is hidden 
4) hide the close->(hide-suggestion-box-btn) btn under the second condition
5) show the open->(show-suggestion-box-btn) btn under the second condition

*/

const showHideSuggestionBoxProf = function (e) {
  if (
    e.target.closest(".suggestion-texts-con-div") ||
    e.target.closest(".pre-written-profession") ||
    e.target.closest(".close-pre-con")
  )
    return;
  suggestionBoxDiv.classList.remove("hide-suggestion-box");
  if (!suggestionBoxDiv.classList.contains("hide-suggestion-box")) {
    showSuggestBox.classList.remove("hide-open-close-btn");
    hideSuggestBox.classList.add("hide-open-close-btn");
  }
};

document.documentElement.addEventListener("click", showHideSuggestionBoxProf);

// hiding positioned element clicking outing the element EMPLOY

// suggestion-texts-con-div-emp pre-written-employment close-pre-con-employment hide-suggestion-box-emp
