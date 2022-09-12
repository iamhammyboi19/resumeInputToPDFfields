"use strict";

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
const addEmploymentBtn = document.querySelector(".employment-div");
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
const educationTextStyle = document.querySelector(".text-styles-con-education");
const addEducationBtn = document.querySelector(".education-div");
const educationJobTitleInp = document.querySelector(".education-job-title-inp");
const schtitleUpdatetext1 = document.querySelector(".job-title-update-1-edu");
const schtitleUpdatetext2 = document.querySelector(".job-title-update-2-edu");
const inputDivSchool = document.querySelector(".input-div-school");

// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

// // website & social links

const webSocialLinksSection = document.querySelector(".link-details--");
const addSocialBtn = document.querySelector(".link-div");
const socialLinkTitleInp = document.querySelector(".socialLink-job-title-inp");
const linkTitleUpdate1 = document.querySelector(".job-title-update-con-1-link");
const linkTitleUpdate2 = document.querySelector(".job-title-update-con-2-link");
const linkTitleUpdateText1 = document.querySelector(".job-title-update-1-link");
const linkTitleUpdateText2 = document.querySelector(".job-title-update-2-link");
const WebSocialLinkForm = document.querySelector(".socialLink-form");
const webLinkTitleInp = document.querySelector(".socialLink-job-title-inp");
const deleteSocialLink = document.querySelector(".delete-link-con");
const linkDeleteAndSocialCon = document.querySelector(
  ".link-detailsAndDeleteCon"
);
// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------

const thedate = new Date();
let curDate = thedate.getFullYear();
calendarYear.textContent = curDate;

const theDate2 = new Date();
let curDateEdu = theDate2.getFullYear();
calendarYearEdu.textContent = curDateEdu;

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

const textareaFill = function (e) {
  if (!e.target.classList.contains(`${this[0]}`)) return;
  const thetextContent = e.target.textContent.split(" ");
  const theevent = e.target;
  theevent.style.pointerEvents = "none";
  theevent.style.color = "#868e96";
  const thefiltered = thetextContent.filter((r) => r.length > 0);
  const filtered2 = thefiltered.filter((r) => r.trim());
  const filtered3 = filtered2.filter((r) => {
    if (!r.endsWith("\n")) return r;
  });
  const thejoinedTextContent = filtered3.join(" ");
  this[1].textContent += thejoinedTextContent + " ";
};

theBoxTexts.addEventListener(
  "click",
  textareaFill.bind(["suggestion-texts", textareaInput])
);

theBoxTextsEmploy.addEventListener(
  "click",
  textareaFill.bind(["suggestion-texts-employment", textareaEmploy])
);

// ------------------------------------------------------------------------------------

const textareaFillWhole = function (e) {
  const thetextContent = this[0].textContent.split(" ");
  [...this[1]].forEach((e) => {
    e.style.pointerEvents = "none";
    e.style.color = "#868e96";
  });
  this[2].classList.toggle("hide-open-close-btn");
  this[3].classList.toggle("hide-open-close-btn");
  const thefiltered = thetextContent.filter((r) => r.length > 0);
  const filtered2 = thefiltered.filter((r) => r.trim());
  const filtered3 = filtered2.filter((r) => {
    if (!r.endsWith("\n")) return r;
  });
  const thejoinedTextContent = filtered3.join(" ");
  this[4].textContent += thejoinedTextContent + "." + " ";
};

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
employmentForm.addEventListener("click", function (e) {
  if (!e.target.classList.contains("startdate")) return;
  calendarDiv.classList.toggle("hide-show-calendar-div");
});

let curYear = curDate;

deductCurYear.addEventListener("click", function () {
  +curYear--;
  calendarYear.textContent = curYear;
});

addCurYear.addEventListener("click", function () {
  +curYear++;
  calendarYear.textContent = curYear;
});

calendarYear.addEventListener("click", function () {
  startDate.value = calendarYear.textContent;
});

calendarMonths.addEventListener("click", function (e) {
  if (e.target.classList.contains("calendar-months-con")) return;
  startDate.value = e.target.textContent + "," + " " + calendarYear.textContent;
  calendarDiv.classList.toggle("hide-show-calendar-div");
});

// ------------------------------------------------------------------------------------

// education calendar
educationForm.addEventListener("click", function (e) {
  if (!e.target.classList.contains("startdate-edu")) return;
  calendarDivEdu.classList.toggle("hide-show-calendar-div");
});

let curYearEdu = curDateEdu;

deductCurYearEdu.addEventListener("click", function () {
  +curYearEdu--;
  calendarYearEdu.textContent = curYearEdu;
});

addCurYearEdu.addEventListener("click", function () {
  +curYearEdu++;
  calendarYearEdu.textContent = curYearEdu;
});

calendarYearEdu.addEventListener("click", function () {
  startDateEdu.value = calendarYearEdu.textContent;
});

calendarMonthsEdu.addEventListener("click", function (e) {
  if (e.target.classList.contains("calendar-months-con-edu")) return;
  startDateEdu.value =
    e.target.textContent + "," + " " + calendarYearEdu.textContent;
  calendarDivEdu.classList.toggle("hide-show-calendar-div");
});

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

// ------------------------------------------------------------------------------------

// show employment section
addEmploymentBtn.addEventListener("click", function () {
  employmentSection.classList.remove("hidden");
});

const showHideEmploymentform = function () {
  employmentForm.classList.toggle("hidden");
  jobTitleUpdate1.classList.toggle("hidden");
  jobTitleUpdate2.classList.toggle("hidden");
  employmentTextStyle.classList.toggle("hidden");
};

jobTitleUpdate1.addEventListener("click", showHideEmploymentform);

jobTitleUpdate2.addEventListener("click", showHideEmploymentform);

employmentJobTitleInp.addEventListener(
  "input",
  nonSpecificTextFill.bind([jobtitleUpdatetext1, jobtitleUpdatetext2])
);

// ------------------------------------------------------------------------------------

// show education section
addEducationBtn.addEventListener("click", function () {
  educationSection.classList.remove("hidden");
});

const showHideEducationform = function () {
  educationForm.classList.toggle("hidden");
  schTitleUpdate1.classList.toggle("hidden");
  schTitleUpdate2.classList.toggle("hidden");
  educationTextStyle.classList.toggle("hidden");
};

schTitleUpdate1.addEventListener("click", showHideEducationform);

schTitleUpdate2.addEventListener("click", showHideEducationform);

educationJobTitleInp.addEventListener(
  "input",
  nonSpecificTextFill.bind([schtitleUpdatetext1, schtitleUpdatetext2])
);

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
document.documentElement.addEventListener("click", showHideSuggestionBoxEmploy);

// hiding positioned element clicking outing the element CALENDAR

// ------------------------------------------------------------------------------------

// show education section
addSocialBtn.addEventListener("click", function () {
  webSocialLinksSection.classList.remove("hidden");
});

const showHideWebsiteAndSocialLinks = function () {
  linkTitleUpdate1.classList.toggle("hidden");
  linkTitleUpdate2.classList.toggle("hidden");
  WebSocialLinkForm.classList.toggle("hidden");
};

linkTitleUpdate1.addEventListener("click", showHideWebsiteAndSocialLinks);
linkTitleUpdate2.addEventListener("click", showHideWebsiteAndSocialLinks);
webLinkTitleInp.addEventListener(
  "input",
  nonSpecificTextFill.bind([linkTitleUpdateText1, linkTitleUpdateText2])
);
// linkDeleteAndSocialCon.addEventListener("mouseover", function () {
//   deleteSocialLink.classList.remove("hidden");
// });
// linkDeleteAndSocialCon.addEventListener("mouseout", function () {
//   deleteSocialLink.classList.add("hidden");
// });
