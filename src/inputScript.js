"use strict";

import { textareaFillWhole, textareaFill } from "./textAreaFillWhole.js";

import {
  addMoreEducationMarkup,
  addMoreEmploymentMarkup,
  addMoreWebsiteLinkMarkup,
  addMoreSkillsMarkup,
  addMoreInternshipsMarkup,
} from "./markups.js";

import {
  showHideEmploymentform,
  showHideEmDetails,
  fillEmploymentTitle,
  employmentDeleteDetails,
} from "./employments.js";

import {
  showHideWebDetails,
  showHideWebsiteAndSocialLinks,
  fillSocialTitle,
  linkDeleteDetails,
} from "./websitelinks.js";

import {
  showHideEducationform,
  showHideEduDetails,
  fillEducationTitle,
  educationDeleteDetails,
} from "./education.js";

import {
  showHideskills,
  showHideSkillsDetails,
  fillSkillsTitle,
  skillsDeleteDetails,
} from "./skills.js";

import {
  showHideInternship,
  showHideInternshipDetails,
  fillInternshipTitle,
  internshipDeleteDetails,
} from "./internship.js";

const hiddenForms = document.querySelectorAll(".hidden-input-divs");
const showFormCon = document.querySelector(".show-form-container");
const hidFormCon = document.querySelector(".hide-form-container");

// -----------------------------------------------------------------------------------

//  suggestion box and text parts
const showSuggestBox = document.querySelector(".pre-written-profession");
const hideSuggestBox = document.querySelector(".close-pre-con");
const showSuggestBoxEmploy = document.querySelector(".pre-written-employment");
const hideSuggestBoxEm = document.querySelector(".close-pre-con-employment");
const suggestionBoxDiv = document.querySelector(".suggestion-texts-con-div");
const theBoxTexts = document.querySelector(".suggestion-texts-con");
const theBoxTextsEmploy = document.querySelector(".suggestion-texts-con-emp");
const suggestionBoxDivEmploy = document.querySelector(
  ".suggestion-texts-con-div-emp"
);
const textareaInput = document.querySelector(".summary-input");
const textareaEmploy = document.querySelector(".summary-input-emp");
const prePhraseArrowBtn = document.querySelector(".arrow-btn-con");
const prePhraseArrowBtnEmp = document.querySelector(".arrow-btn-con-emp");
const suggestionTexts = document.querySelectorAll(".suggestion-texts");
const suggestionTextsEmp = document.querySelectorAll(
  ".suggestion-texts-employment"
);
const prePhraseCloseArrowBtn = document.querySelector(".close-arrow-btn-con");
const prePhraseCloseArrowBtnEmp = document.querySelector(
  ".close-arrow-btn-con-emp"
);

// ------------------------------------------------------------------------------------

//  form calendar part first calendar
const calendarDiv = document.querySelector(".calendar-div");
const calendarYear = document.querySelector(".calendar-year");
const calendarBackFront = document.querySelector(".calendar-back-front");
const deductCurYear = document.querySelector(".calendar-back-pointer");
const addCurYear = document.querySelector(".calendar-front-pointer");
const calendarMonths = document.querySelector(".calendar-months-con");
const startDate = document.querySelector(".startdate");

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
const employmentSection = document.querySelector(".employment-details--");
const jobTitleUpdate1 = document.querySelector(".job-title-update-con-1");
const jobTitleUpdate2 = document.querySelector(".job-title-update-con-2");
const employmentForm = document.querySelector(".employment-form");
const employmentTextStyle = document.querySelector(
  ".text-styles-con-employment"
);
const addEmploymentBtn = document.querySelector(".employment-div-add");
const addMoreEmploymentBtn = document.querySelector(".employment-div-addMore");
const employmentParentCon = document.querySelector(".employment-parent");
const employmentJobTitleInp = document.querySelector(
  ".employment-job-title-inp"
);
const jobtitleUpdatetext1 = document.querySelector(".job-title-update-1");
const jobtitleUpdatetext2 = document.querySelector(".job-title-update-2");
const inputDivJob = document.querySelector(".input-div-job");

// ------------------------------------------------------------------------------------

// // education form parts
const educationSection = document.querySelector(".edu-details--");
const schTitleUpdate1 = document.querySelector(".job-title-update-con-1-edu");
const schTitleUpdate2 = document.querySelector(".job-title-update-con-2-edu");
const educationForm = document.querySelector(".education-form");
const educationParentCon = document.querySelector(".education-parent");
const educationTextStyle = document.querySelector(".text-styles-con-education");
const addEducationBtn = document.querySelector(".education-div-add");
const addMoreEducationBtn = document.querySelector(".education-div-addMore");
const educationJobTitleInp = document.querySelector(".education-job-title-inp");
const schtitleUpdatetext1 = document.querySelector(".job-title-update-1-edu");
const schtitleUpdatetext2 = document.querySelector(".job-title-update-2-edu");
const inputDivSchool = document.querySelector(".input-div-school");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// // website & social links

const webSocialLinksSection = document.querySelector(".link-details--");
const webSocialLinkParent = document.querySelector(".weblink-parent");
const addSocialBtn = document.querySelector(".link-div-add");
const addMoreSocialBtn = document.querySelector(".link-div-addMore");
const socialLinkTitleInp = document.querySelector(".socialLink-job-title-inp");
const linkTitleUpdate1 = document.querySelector(".job-title-update-con-1-link");
const linkTitleUpdate2 = document.querySelector(".job-title-update-con-2-link");
const linkTitleUpdateText1 = document.querySelector(".job-title-update-1-link");
const linkTitleUpdateText2 = document.querySelector(".job-title-update-2-link");
const WebSocialLinkForm = document.querySelector(".socialLink-form");
const webLinkTitleInp = document.querySelector(".socialLink-job-title-inp");
const deleteSocialLink = document.querySelector(".delete-link-con");
// const linkDeleteAndSocialCon = document.querySelector(
//   ".link-detailsAndDeleteCon"
// );
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// // skills section
const addSkillsBtn = document.querySelector(".skills-div-add");
const skillsParentCon = document.querySelector(".skills-parent");
// job-title-update-con-1-skills
// job-title-update-con-2-skills

// // internship section
const addInternshipBtn = document.querySelector(".internship-div-add");
const internshipParentCon = document.querySelector(".internship-parent");
// job-title-update-con-1-skills
// job-title-update-con-2-skills

// CURRENT DATE

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

const showHideSuggestBoxEmployFunc = function () {
  suggestionBoxDivEmploy.classList.toggle("hide-suggestion-box-emp");
  showSuggestBoxEmploy.classList.toggle("hide-open-close-btn");
  hideSuggestBoxEm.classList.toggle("hide-open-close-btn");
};

// hide and show the second suggestion text container
showSuggestBoxEmploy.addEventListener("click", showHideSuggestBoxEmployFunc);
hideSuggestBoxEm.addEventListener("click", showHideSuggestBoxEmployFunc);

// ------------------------------------------------------------------------------------

theBoxTexts.addEventListener(
  "click",
  textareaFill.bind(["suggestion-texts", textareaInput])
);

theBoxTextsEmploy.addEventListener(
  "click",
  textareaFill.bind(["suggestion-texts-employment", textareaEmploy])
);

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

// theBoxTextsEmploy suggestionTextsEmp prePhraseArrowBtnEmp prePhraseCloseArrowBtnEmp textareaEmploy
// fill textarea at once for second suggestion text
prePhraseArrowBtnEmp.addEventListener(
  "click",
  textareaFillWhole.bind([
    theBoxTextsEmploy,
    suggestionTextsEmp,
    prePhraseArrowBtnEmp,
    prePhraseCloseArrowBtnEmp,
    textareaEmploy,
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
  return curDeleteBtn
    .closest(this[1])
    .parentElement.removeChild(curDeleteBtn.closest(this[1]));
};
// ------------------------------------------------------------------------------------

// show employment section
addEmploymentBtn.addEventListener("click", function () {
  employmentSection.classList.remove("hidden");
  addEmploymentBtn.classList.add("hidden");
  addMoreEmploymentBtn.classList.remove("hidden");
});

// ADDING MORE SECTION
addMoreEmploymentBtn.addEventListener("click", function () {
  employmentParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEmploymentMarkup()
  );
  if (employmentParentCon.children.length > 0) {
    addMoreEmploymentBtn.querySelector(
      "span"
    ).textContent = `Add one more employment`;
  }
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
    }

    // DELETE FORM
    if (e.target.closest(".employ-delete-icon-container")) {
      // delete on click
      deleteSpecificForm.bind(employmentDeleteDetails)(e);

      // check if there is any child element left
      if (employmentParentCon.children.length === 0) {
        addMoreEmploymentBtn.querySelector(
          "span"
        ).textContent = `Add employment`;
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

const showHideSuggestionBoxEmploy = function (e) {
  if (
    e.target.closest(".suggestion-texts-con-div-emp") ||
    e.target.closest(".pre-written-employment") ||
    e.target.closest(".close-pre-con-employment")
  )
    return;
  suggestionBoxDivEmploy.classList.remove("hide-suggestion-box-emp");
  if (!suggestionBoxDivEmploy.classList.contains("hide-suggestion-box-emp")) {
    showSuggestBoxEmploy.classList.remove("hide-open-close-btn");
    hideSuggestBoxEm.classList.add("hide-open-close-btn");
  }
};

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
document.documentElement.addEventListener("click", showHideSuggestionBoxEmploy);
// document.documentElement.addEventListener("click", showHideEmCalendar);

// hiding positioned element clicking outing the element EMPLOY

// suggestion-texts-con-div-emp pre-written-employment close-pre-con-employment hide-suggestion-box-emp
