"use strict";

let r;
const randStr = () => (r = (Math.random() + 1).toString(36).substring(7));

class FormSessions {
  id = String(Date.now()).slice(0, 10) + randStr();
  constructor(startDate, endDate, city, about) {
    this.startDate = " " || startDate;
    this.endDate = " " || endDate;
    this.city = " " || city;
    this.about = " " || about;
  }
}

class EmploymentNewFormSessions extends FormSessions {
  constructor(jobTitle, employer, startDate, endDate, city, about) {
    super(startDate, endDate, city, about);
    this.jobTitle = " " || jobTitle;
    this.employer = " " || employer;
    this.type = "employment";
  }
}

class EducationNewFormSessions extends FormSessions {
  constructor(school, degree, startDate, endDate, city, about) {
    super(startDate, endDate, city, about);
    this.school = " " || school;
    this.degree = " " || degree;
    this.type = "education";
  }
}

class InternshipNewFormSessions extends EmploymentNewFormSessions {
  constructor(jobTitle, employer, startDate, endDate, city, about) {
    super(jobTitle, employer, startDate, endDate, city, about);
    this.type = "internship";
  }
}

class WebSocialLinkFormSessions {
  id = String(Date.now()).slice(0, 10) + randStr();
  constructor(link, label) {
    this.link = " " || link;
    this.label = " " || label;
    this.type = "webLinks";
  }
}

class SkillsNewFormSessions extends WebSocialLinkFormSessions {
  constructor(link, label) {
    super(link, label);
    this.type = "skills";
  }
}

class SaveAndDeleteItemsFromLocalStorage {
  static #userData = [];

  static collectItems(...items) {
    this.#userData = JSON.parse(localStorage.getItem("allForms")) || [];
    this.#userData.push(...items);
  }

  static save() {
    localStorage.setItem("allForms", JSON.stringify(this.#userData));
  }
}

export {
  EmploymentNewFormSessions,
  WebSocialLinkFormSessions,
  EducationNewFormSessions,
  SkillsNewFormSessions,
  InternshipNewFormSessions,
  SaveAndDeleteItemsFromLocalStorage,
};
