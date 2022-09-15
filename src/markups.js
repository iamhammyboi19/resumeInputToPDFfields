"use strict";

const addMoreEmploymentMarkup = function () {
  return `
  <li class="employment-details--" data-id="123456">
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
                            />
                          </div>
                          <div class="input-div">
                            <label class="personal-d-label">Employer</label>
                            <input type="text" class="personal-d-input-1 per-det-inp" />
                          </div>
                          <div class="input-div">
                            <label class="personal-d-label">Start & End Date</label>
                            <div class="start-end-date-div">
                              <input
                                type="text"
                                placeholder="MM / YYYY"
                                class="personal-d-input-1 per-det-inp start-end-date-inp startdate"
                              />
                              <input
                                type="text"
                                placeholder="MM / YYYY"
                                class="personal-d-input-1 per-det-inp start-end-date-inp"
                              />
                            </div>
                          </div>
                          <div class="input-div">
                            <label class="personal-d-label">City</label>
                            <input type="text" class="personal-d-input-1 per-det-inp" />
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
};

// EDUCATION

const addMoreEducationMarkup = function () {
  return `
  <li class="edu-details--">
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
          />
        </div>
        <div class="input-div">
          <label class="personal-d-label">Degree</label>
          <input type="text" class="personal-d-input-1 per-det-inp" />
        </div>
        <div class="input-div">
          <label class="personal-d-label">Start & End Date</label>
          <div class="start-end-date-div-edu">
            <input
              type="text"
              placeholder="MM / YYYY"
              class="personal-d-input-1 per-det-inp start-end-date-inp-edu startdate-edu"
            />
            <input
              type="text"
              placeholder="MM / YYYY"
              class="personal-d-input-1 per-det-inp start-end-date-inp-edu"
            />
          </div>
        </div>
        <div class="input-div">
          <label class="personal-d-label">City</label>
          <input type="text" class="personal-d-input-1 per-det-inp" />
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
      ></textarea>
    </div>
  </div>
  <div class="edu-delete-icon-container">
    <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
  </div>
</li>  
  `;
};

const addMoreWebsiteLinkMarkup = function () {
  return `
  <li class="link-details-- ">
            <div class="calendar-form-div-con-link">
              <div>
                <div class="job-title-update-div-link">
                  <span class="job-title-update-con-1-link">
                    <h6 class="job-title-update-1-link">(Not specified)</h6>
                    <ion-icon
                      name="chevron-down-outline"
                      class="job-title-update-icon-link"
                    ></ion-icon
                  ></span>
                  <span class="job-title-update-con-2-link hidden">
                    <h6 class="job-title-update-2-link">(Not specified)</h6>
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
                      class="personal-d-input-1 per-det-inp socialLink-job-title-inp"
                    />
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">Link</label>
                    <input type="text" class="personal-d-input-1 per-det-inp" />
                  </div>
                </form>
              </div>
            </div>
            <div class="weblink-delete-icon-container">
              <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
            </div>
          </li>
  `;
};

const addMoreSkillsMarkup = function () {
  return `
  <li class="skills-details--">
  <div class="calendar-form-div-con-skills">
    <div>
      <div class="job-title-update-div-skills">
        <span class="job-title-update-con-1-skills">
          <h6 class="job-title-update-1-skills">(Not specified)</h6>
          <ion-icon
            name="chevron-down-outline"
            class="job-title-update-icon-skills"
          ></ion-icon
        ></span>
        <span class="job-title-update-con-2-skills hidden">
          <h6 class="job-title-update-2-skills">(Not specified)</h6>
          <ion-icon
            name="chevron-up-outline"
            class="job-title-update-icon-skills"
          ></ion-icon
        ></span>
      </div>
      <form class="main-form skills-form hidden">
        <div class="input-div input-div-school">
          <label class="personal-d-label">Label</label>
          <input
            type="text"
            class="personal-d-input-1 per-det-inp skills-job-title-inp"
          />
        </div>
        <div class="input-div">
          <label class="personal-d-label">Level</label>
          <input type="text" class="personal-d-input-1 per-det-inp" />
        </div>
      </form>
    </div>
  </div>
  <div class="skills-delete-icon-container">
    <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
  </div>
</li>
  `;
};

const addMoreInternshipsMarkup = function () {
  return `
  <li class="internship-details--">
            <div class="calendar-form-div-con-internship">
              <div>
                <div class="job-title-update-div-internship">
                  <span class="job-title-update-con-1-internship">
                    <h6 class="job-title-update-1-internship">(Not specified)</h6>
                    <ion-icon
                      name="chevron-down-outline"
                      class="job-title-update-icon-internship"
                    ></ion-icon
                  ></span>
                  <span class="job-title-update-con-2-internship hidden">
                    <h6 class="job-title-update-2-internship">(Not specified)</h6>
                    <ion-icon
                      name="chevron-up-outline"
                      class="job-title-update-icon-internship"
                    ></ion-icon
                  ></span>
                </div>
                <form class="main-form internship-form hidden">
                  <div class="input-div input-div-school">
                    <label class="personal-d-label">Job Title</label>
                    <input
                      type="text"
                      class="personal-d-input-1 per-det-inp internship-job-title-inp"
                    />
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">Employer</label>
                    <input type="text" class="personal-d-input-1 per-det-inp" />
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">Start & End Date</label>
                    <div class="start-end-date-div-internship">
                      <input
                        type="text"
                        placeholder="MM / YYYY"
                        class="personal-d-input-1 per-det-inp start-end-date-inp-internship startdate-internship"
                      />
                      <input
                        type="text"
                        placeholder="MM / YYYY"
                        class="personal-d-input-1 per-det-inp start-end-date-inp-internship"
                      />
                    </div>
                  </div>
                  <div class="input-div">
                    <label class="personal-d-label">City</label>
                    <input type="text" class="personal-d-input-1 per-det-inp" />
                  </div>
                </form>

                
              <div class="text-styles-con-internship hidden">
                <div class="text-styles--internship">
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
                  placeholder="e.g Created and implemented lesson plans based on child-led interests and curiosities"
                  class="summary-input-internship"
                  rows="10"
                  cols="35"
                  minlength="0"
                ></textarea>
              </div>
            </div>
            <div class="internship-delete-icon-container">
              <ion-icon name="trash-outline" class="delete-icon"></ion-icon>
            </div>
          </li>
  `;
};

export {
  addMoreEmploymentMarkup,
  addMoreEducationMarkup,
  addMoreWebsiteLinkMarkup,
  addMoreSkillsMarkup,
  addMoreInternshipsMarkup,
};
