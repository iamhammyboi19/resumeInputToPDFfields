"use strict";

import { textareaFillWhole } from "./textAreaFillWhole.js";

import { TemplatesLondonFillUpFromLocalStorage } from "./TemplatesLondon.js";

// import { addPersonalDetailsMarkupFromLocalStorage } from "../personalDetails.js";

import {
  EmploymentNewFormSessions,
  WebSocialLinkFormSessions,
  SaveAndDeleteItemsFromLocalStorage,
  EducationNewFormSessions,
  InternshipNewFormSessions,
  SkillsNewFormSessions,
  PersonDetailsFormSession,
  RefsNewFormSession,
} from "./formModels.js";

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

import {
  showHiderefsForm,
  showHideRefsDetails,
  fillRefsTitle,
  refsDeleteDetails,
  addMoreRefsFromLocalStorageMarkup,
  checkRefs,
} from "./refs.js";

const personalDetailsMainForm = document.querySelector(".main-form");
const personalDetailsParent = document.querySelector(".div-con-for-form");

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

// prof-summary-textfield
const profSummartText = document.querySelector(".prof-summary-textfield");

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
// REFS section
const addRefsBtn = document.querySelector(".refs-div-add");
const refsParentCon = document.querySelector(".refs-parent");
// refs-div-add

const formTitle = document.querySelector(".input-form-title");
const downloadTemplateLondonBtn = document.querySelector(".download-pdf-btn");

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

// used in getting and setting personalDetails to localStorage

const personalDetailsOnLoad =
  JSON.parse(localStorage.getItem("personalDetails")) || [];

const profSumFromLocalStorage =
  localStorage.getItem("professionalSummary") || "";

window.addEventListener("load", function () {
  //
  // FILL PERSONAL DETAILS INPUT ON LOAD
  if (personalDetailsOnLoad.length > 0) {
    personalDetailsOnLoad.forEach((item) => {
      document.querySelector(".wantedJob").value = item.wantedJob;
      document.querySelector(".firstName").value = item.firstName;
      document.querySelector(".lastName").value = item.lastName;
      document.querySelector(".email").value = item.email;
      document.querySelector(".phone").value = item.phone;
      document.querySelector(".country").value = item.country;
      document.querySelector(".city").value = item.city;
      document.querySelector(".address").value = item.address;
      document.querySelector(".driversLicense").value = item.driversLicense;
      document.querySelector(".nationality").value = item.nationality;
      document.querySelector(".placeOfBirth").value = item.placeOfBirth;
      document.querySelector(".dateOfBirth").value = item.dateOfBirth;
      document.querySelector(".postalCode").value = item.postalCode;
    });
  }

  if (personalDetailsOnLoad.length === 0) {
    SaveAndDeleteItemsFromLocalStorage.collectPersonDetails(
      new PersonDetailsFormSession()
    );
    SaveAndDeleteItemsFromLocalStorage.savePersonalDetails();
  }

  // else {
  //   return;
  // }

  // GET EDUCATION FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  // if (!addMoreEducationMarkupFromLocalStorage()) return;
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
  // if (!addMoreWebsiteLinkFromLocalStorageMarkup()) return;
  webSocialLinkParent.insertAdjacentHTML(
    "beforeend",
    addMoreWebsiteLinkFromLocalStorageMarkup().join("")
  );
  if (checkWebLinks) {
    addSocialBtn.querySelector("span").textContent = `Add one more link`;
  }

  // GET SKILLS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  // if (!addMoreSkillsFromLocalStorageMarkup()) return;
  skillsParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreSkillsFromLocalStorageMarkup().join("")
  );
  if (checkSkills) {
    addSkillsBtn.querySelector("span").textContent = `Add one more skill`;
  }

  // GET INTERNSHIPS FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  // if (!addMoreInternshipsFromLocalStorageMarkup()) return;
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
  // if (!addMoreRefsFromLocalStorageMarkup()) return;
  refsParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreRefsFromLocalStorageMarkup().join("")
  );
  if (checkRefs) {
    addRefsBtn.querySelector("span").textContent = `Add one more reference`;
  }

  // GET EMPLOYMENT FROM LOCALSTORAGE AND DISPLAY IT ON LOAD action
  // if (!addMoreEmploymentMarkupFromLocalStorage()) return;
  employmentParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEmploymentMarkupFromLocalStorage().join("")
  );
  if (checkEmployment) {
    addEmploymentBtn.querySelector(
      "span"
    ).textContent = `Add one more employment`;
  }

  profSummartText.textContent = profSumFromLocalStorage;
});

// ------------------------------------------------------------------------------------

const hideShowFormCon = function () {
  [...hiddenForms]?.forEach((e) => e.classList.toggle("hidden-form-container"));
  hidFormCon.classList.toggle("hidden-form-container");
  showFormCon.classList.toggle("hidden-form-container");
};

// hide and show the first form container
showFormCon?.addEventListener("click", hideShowFormCon);
hidFormCon?.addEventListener("click", hideShowFormCon);

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
// ------------------------------------------------------------------------------------

// PERSONAL DETAILS FORM INPUT SECTION

// used in getting and setting personalDetails to localStorage

const autoSavePersonalDetailsFormOnInput = function (e) {
  const personalDetails =
    JSON.parse(localStorage.getItem("personalDetails")) || [];
  if (personalDetails.length === 0) return;
  personalDetails[0][this[0]] = `${
    e.target.value.length > 0 ? e.target.value : " "
  }`;
  localStorage.setItem("personalDetails", JSON.stringify(personalDetails));
};

personalDetailsMainForm?.addEventListener("click", function (e) {
  //
  // CHECK IF INPUT IS WANTED JOB
  if (e.target.classList.contains("wantedJob")) {
    personalDetailsMainForm
      .querySelector(".wantedJob")
      .addEventListener("input" || "click", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["wantedJob"])(e);
      });
  }
  // CHECK IF INPUT IS FIRST NAME
  if (e.target.classList.contains("firstName")) {
    personalDetailsMainForm
      .querySelector(".firstName")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["firstName"])(e);
      });
  }

  // CHECK IF INPUT IS LAST NAME
  if (e.target.classList.contains("lastName")) {
    personalDetailsMainForm
      .querySelector(".lastName")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["lastName"])(e);
      });
  }

  // CHECK IF INPUT IS EMAIL
  if (e.target.classList.contains("email")) {
    personalDetailsMainForm
      .querySelector(".email")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["email"])(e);
      });
  }

  // CHECK IF INPUT IS PHONE
  if (e.target.classList.contains("phone")) {
    personalDetailsMainForm
      .querySelector(".phone")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["phone"])(e);
      });
  }

  // CHECK IF INPUT IS CITY
  if (e.target.classList.contains("city")) {
    personalDetailsMainForm
      .querySelector(".city")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["city"])(e);
      });
  }

  // CHECK IF INPUT IS COUNTRY
  if (e.target.classList.contains("country")) {
    personalDetailsMainForm
      .querySelector(".country")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["country"])(e);
      });
  }

  // CHECK IF INPUT IS ADDRESS
  if (e.target.classList.contains("address")) {
    personalDetailsMainForm
      .querySelector(".address")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["address"])(e);
      });
  }

  // CHECK IF INPUT IS POSTAL CODE
  if (e.target.classList.contains("postalCode")) {
    personalDetailsMainForm
      .querySelector(".postalCode")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["postalCode"])(e);
      });
  }

  // CHECK IF INPUT IS DRIVER'S LICENSE
  if (e.target.classList.contains("driversLicense")) {
    personalDetailsMainForm
      .querySelector(".driversLicense")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["driversLicense"])(e);
      });
  }

  // CHECK IF INPUT IS NATIONALITY
  if (e.target.classList.contains("nationality")) {
    personalDetailsMainForm
      .querySelector(".nationality")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["nationality"])(e);
      });
  }

  // CHECK IF INPUT IS PLACE OF BIRTH
  if (e.target.classList.contains("placeOfBirth")) {
    personalDetailsMainForm
      .querySelector(".placeOfBirth")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["placeOfBirth"])(e);
      });
  }

  // CHECK IF INPUT IS DATE OF BIRTH
  if (e.target.classList.contains("dateOfBirth")) {
    personalDetailsMainForm
      .querySelector(".dateOfBirth")
      .addEventListener("input", function (e) {
        autoSavePersonalDetailsFormOnInput.bind(["dateOfBirth"])(e);
      });
  }
});

// ------------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------
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

// FILL UP THE NON-SPECIFIED PART ON INPUT
// [form-details, form-job-title-inp, job-title-update-1-internship, job-title-update-2-internship ]
const fillMeUp = function (e) {
  // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it
  return e.target
    .closest(this[0])
    .querySelector(this[1])
    ?.addEventListener(
      "input",
      nonSpecificTextFill.bind([
        // SELECT THE NON SPECIFIED FIELD AREA FOR EACH CURRENT FORM ELEMENT
        e.target.closest(this[0]).querySelector(this[2]),
        e.target.closest(this[0]).querySelector(this[3]),
      ])
    );
};

// [form-details-delete-btn, formDetails]
// DELETE CURRENT FORM AND ALSO IN LOCAL STORAGE ON DELETE-ICON CLICK
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

// ADD ITEMS TO LOCALSTORAGE WHILE INPUTTING
// [".edu-details--", ".education-job-title-inp", "school"]
// [FORM PARENT, FORM INPUT, labelClass]

const storeAutoAsIwriteToTheForm = function (e) {
  // TAKE THE BIND ELEMENT AND PASS IT DOWN TO THE SESSIONID
  // ONLY WORKS THIS WAY
  const this1 = this[0];
  const this2 = this[2];
  e.target
    .closest(this[0])
    .querySelector(this[1])
    .addEventListener("input", function (e) {
      // CHECK THE CURRENT ELEMENT INPUTTED AND UPDATE IT IN THE LOCALSTORAGE
      // COLLECT IT PARENTS DATA-SESSIONID AND UPDATE THE PARTICULAR FIELD
      const { sessionId } = e.target.closest(this1).dataset;
      const savedItems = JSON.parse(localStorage.getItem("allForms"));
      const curTemplate = savedItems.find((el) => el.id === sessionId);
      const index = savedItems.indexOf(curTemplate);
      curTemplate[this2] = `${e.target.value.length > 0 ? e.target.value : ""}`;
      savedItems[index] = curTemplate;
      localStorage.setItem("allForms", JSON.stringify(savedItems));
    });
};

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// show employment section

// ADDING MORE SECTION
addEmploymentBtn.addEventListener("click", function () {
  // CREATE NEW EMPLOYMENT FORM OBJECT AND ADD TO LOCALSTORAGE
  SaveAndDeleteItemsFromLocalStorage.collectItems(
    new EmploymentNewFormSessions()
  );
  SaveAndDeleteItemsFromLocalStorage.save();

  // CLEAR EMPLOYMENT PARENT
  employmentParentCon.innerHTML = "";

  // AND DISPLAY ALL FORM OBJECT FROM LOCALSTORAGE
  employmentParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEmploymentMarkupFromLocalStorage().join("")
  );

  if (employmentParentCon.children.length > 0) {
    addEmploymentBtn.querySelector(
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

      // CHECK CURRENT CLICKED ELEMENT ON EMPLOYMENT FORM
      if (e.target.classList.contains("employment-job-title-inp")) {
        storeAutoAsIwriteToTheForm.bind([
          ".employment-details--",
          ".employment-job-title-inp",
          "jobTitle",
        ])(e);
      }

      // CHECK CURRENT CLICKED ELEMENT ON EMPLOYMENT FORM
      if (e.target.classList.contains("employment-emp-title-inp")) {
        storeAutoAsIwriteToTheForm.bind([
          ".employment-details--",
          ".employment-emp-title-inp",
          "employer",
        ])(e);
      }

      // CHECK CURRENT CLICKED ELEMENT ON EMPLOYMENT FORM
      if (e.target.classList.contains("emp-enddate")) {
        storeAutoAsIwriteToTheForm.bind([
          ".employment-details--",
          ".emp-enddate",
          "endDate",
        ])(e);
      }

      // CHECK CURRENT CLICKED ELEMENT ON EMPLOYMENT FORM
      if (e.target.classList.contains("startdate")) {
        storeAutoAsIwriteToTheForm.bind([
          ".employment-details--",
          ".startdate",
          "startDate",
        ])(e);
      }

      // CHECK CURRENT CLICKED ELEMENT ON EMPLOYMENT FORM
      if (e.target.classList.contains("emp-city")) {
        storeAutoAsIwriteToTheForm.bind([
          ".employment-details--",
          ".emp-city",
          "city",
        ])(e);
      }

      // CHECK CURRENT CLICKED ELEMENT ON EMPLOYMENT FORM
      if (e.target.classList.contains("emp-sum-inp")) {
        storeAutoAsIwriteToTheForm.bind([
          ".employment-details--",
          ".emp-sum-inp",
          "about",
        ])(e);
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
  SaveAndDeleteItemsFromLocalStorage.collectItems(
    new EducationNewFormSessions()
  );
  SaveAndDeleteItemsFromLocalStorage.save();

  educationParentCon.innerHTML = "";

  educationParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreEducationMarkupFromLocalStorage().join("")
  );

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

    // CHECK CURRENT CLICKED ELEMENT ON EDUCATION FORM
    if (e.target.classList.contains("education-job-title-inp")) {
      storeAutoAsIwriteToTheForm.bind([
        ".edu-details--",
        ".education-job-title-inp",
        "school",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON EDUCATION FORM
    if (e.target.classList.contains("edu-deg-inp")) {
      storeAutoAsIwriteToTheForm.bind([
        ".edu-details--",
        ".edu-deg-inp",
        "degree",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON EDUCATION FORM
    if (e.target.classList.contains("enddate-edu")) {
      storeAutoAsIwriteToTheForm.bind([
        ".edu-details--",
        ".enddate-edu",
        "endDate",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON EDUCATION FORM
    if (e.target.classList.contains("startdate-edu")) {
      storeAutoAsIwriteToTheForm.bind([
        ".edu-details--",
        ".startdate-edu",
        "startDate",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON EDUCATION FORM
    if (e.target.classList.contains("edu-city")) {
      storeAutoAsIwriteToTheForm.bind([".edu-details--", ".edu-city", "city"])(
        e
      );
    }

    // CHECK CURRENT CLICKED ELEMENT ON EDUCATION FORM
    if (e.target.classList.contains("edu-sum-inp")) {
      storeAutoAsIwriteToTheForm.bind([
        ".edu-details--",
        ".edu-sum-inp",
        "about",
      ])(e);
    }
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
  SaveAndDeleteItemsFromLocalStorage.collectItems(
    new WebSocialLinkFormSessions()
  );
  SaveAndDeleteItemsFromLocalStorage.save();

  webSocialLinkParent.innerHTML = "";

  webSocialLinkParent.insertAdjacentHTML(
    "beforeend",
    addMoreWebsiteLinkFromLocalStorageMarkup().join("")
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

    // CHECK CURRENT CLICKED ELEMENT ON WEBLINK FORM
    if (e.target.classList.contains("linklabel")) {
      storeAutoAsIwriteToTheForm.bind([
        ".link-details--",
        ".linklabel",
        "label",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON WEBLINK FORM
    if (e.target.classList.contains("linklink")) {
      storeAutoAsIwriteToTheForm.bind([".link-details--", ".linklink", "link"])(
        e
      );
    }
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
  SaveAndDeleteItemsFromLocalStorage.collectItems(new SkillsNewFormSessions());
  SaveAndDeleteItemsFromLocalStorage.save();

  skillsParentCon.innerHTML = "";

  skillsParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreSkillsFromLocalStorageMarkup().join("")
  );

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

    // CHECK CURRENT CLICKED ELEMENT ON SKILLS FORM
    if (e.target.classList.contains("skillslabel")) {
      storeAutoAsIwriteToTheForm.bind([
        ".skills-details--",
        ".skillslabel",
        "label",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON SKILLS FORM
    if (e.target.classList.contains("skillslevel")) {
      storeAutoAsIwriteToTheForm.bind([
        ".skills-details--",
        ".skillslevel",
        "link",
      ])(e);
    }
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

// ADD NEW ELEMENT TO THE PARENT
addRefsBtn.addEventListener("click", function () {
  SaveAndDeleteItemsFromLocalStorage.collectItems(new RefsNewFormSession());
  SaveAndDeleteItemsFromLocalStorage.save();

  refsParentCon.innerHTML = "";

  refsParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreRefsFromLocalStorageMarkup().join("")
  );

  if (refsParentCon.children.length > 0) {
    addRefsBtn.querySelector("span").textContent = `Add one more reference`;
  }
});

refsParentCon.addEventListener("click", function (e) {
  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-1-refs")) {
    showHiderefsForm.bind(showHideRefsDetails)(e);
  }

  // HIDE AND SHOW FORM
  if (e.target.closest(".job-title-update-con-2-refs")) {
    showHiderefsForm.bind(showHideRefsDetails)(e);
  }

  // FILLING THE NOT SPECIFIED AREA IN THE FORM
  if (e.target.closest(".refs-details--")) {
    // SELECT THE CURRENT ELEMENT INPUT FORM ON CLICK AND addEventListener to it
    fillMeUp.bind(fillRefsTitle)(e);

    // CHECK CURRENT CLICKED ELEMENT ON SKILLS FORM
    if (e.target.classList.contains("refsFullName--")) {
      storeAutoAsIwriteToTheForm.bind([
        ".refs-details--",
        ".refsFullName--",
        "refsFullName",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON SKILLS FORM
    if (e.target.classList.contains("refsCompany")) {
      storeAutoAsIwriteToTheForm.bind([
        ".refs-details--",
        ".refsCompany",
        "company",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON SKILLS FORM
    if (e.target.classList.contains("refsPhone")) {
      storeAutoAsIwriteToTheForm.bind([
        ".refs-details--",
        ".refsPhone",
        "phone",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON SKILLS FORM
    if (e.target.classList.contains("refsEmail")) {
      storeAutoAsIwriteToTheForm.bind([
        ".refs-details--",
        ".refsEmail",
        "email",
      ])(e);
    }
  }

  // DELETE FORM
  if (e.target.closest(".refs-delete-icon-container")) {
    // delete on click
    deleteSpecificForm.bind(refsDeleteDetails)(e);

    // check if there is any child element left
    if (refsParentCon.children.length === 0) {
      addRefsBtn.querySelector("span").textContent = `Add reference`;
    }
  }
});

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// add internship section

// ADD NEW ELEMENT TO THE PARENT
addInternshipBtn.addEventListener("click", function () {
  SaveAndDeleteItemsFromLocalStorage.collectItems(
    new InternshipNewFormSessions()
  );
  SaveAndDeleteItemsFromLocalStorage.save();

  internshipParentCon.innerHTML = "";

  internshipParentCon.insertAdjacentHTML(
    "beforeend",
    addMoreInternshipsFromLocalStorageMarkup().join("")
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

    // CHECK CURRENT CLICKED ELEMENT ON INTERNSHIP FORM
    if (e.target.classList.contains("internship-job-title-inp")) {
      storeAutoAsIwriteToTheForm.bind([
        ".internship-details--",
        ".internship-job-title-inp",
        "jobTitle",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON INTERNSHIP FORM
    if (e.target.classList.contains("internshipEmployer")) {
      storeAutoAsIwriteToTheForm.bind([
        ".internship-details--",
        ".internshipEmployer",
        "employer",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON INTERNSHIP FORM
    if (e.target.classList.contains("startdate-internship")) {
      storeAutoAsIwriteToTheForm.bind([
        ".internship-details--",
        ".startdate-internship",
        "startDate",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON INTERNSHIP FORM
    if (e.target.classList.contains("enddate-internship")) {
      storeAutoAsIwriteToTheForm.bind([
        ".internship-details--",
        ".enddate-internship",
        "endDate",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON INTERNSHIP FORM
    if (e.target.classList.contains("internshipCity")) {
      storeAutoAsIwriteToTheForm.bind([
        ".internship-details--",
        ".internshipCity",
        "city",
      ])(e);
    }

    // CHECK CURRENT CLICKED ELEMENT ON INTERNSHIP FORM
    if (e.target.classList.contains("internship-about")) {
      storeAutoAsIwriteToTheForm.bind([
        ".internship-details--",
        ".internship-about",
        "about",
      ])(e);
    }
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

profSummartText.addEventListener("input", function (e) {
  if (e.target.value.length > 0) {
    localStorage.setItem("professionalSummary", e.target.value);
  } else {
    localStorage.setItem("professionalSummary", " ");
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

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

downloadTemplateLondonBtn.addEventListener("click", function () {
  const pdfOptions = {
    filename: `${formTitle.value}.pdf`,
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      dpi: 192,
      scale: 4,
      width: 470,
      letterRendering: true,
      useCORS: true,
    },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  };

  const templateLondonPdfFormat = document.getElementById(
    "template-london-pdf-format"
  );

  html2pdf().set(pdfOptions).from(templateLondonPdfFormat).save();
});

// TEMPLATE LONDON SECTION
new TemplatesLondonFillUpFromLocalStorage();

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
