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
                          <span class="pre-written-employment"
                            ><span class="open-pre-phrase-employment"
                              >Pre-written phrases</span
                            ><i
                              class="fa-solid fa-circle-plus text-style-icon-sizes show-hide-suggestion-box"
                            ></i
                          ></span>
                          <span class="close-pre-con-employment hide-open-close-btn">
                            <span class="close-pre-phrase-employment"
                              >Pre-written phrases</span
                            ><i
                              class="fa-solid fa-circle-xmark text-style-icon-sizes"
                            ></i>
                          </span>
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
                  </li>
  
  `;
};

export { addMoreEmploymentMarkup };
