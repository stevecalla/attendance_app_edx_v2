import "./attendancePanel.css";

function AttendancePanel() {
  return (
    <>
      {/* <!-- SECTION UPLOAD CONTENT--> */}
      <div className="tab-content mx-4" id="attendance-container">
        <div
          className="tab-pane fade show active"
          id="attendance-container"
          role="tabpanel"
          aria-labelledby="attendance-container-tab"
          tabIndex="0"
        >
          <article className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed show"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#upload-component"
                aria-expanded="false"
                aria-controls="upload-component"
              >
                {/* <!-- Upload --> */}
              </button>
            </h2>

            {/* <!-- SECTION UPLOAD STATUS --> */}
            <div className="row align-items-start m-2">
              <div className="d-flex justify-content-between">
                <p className="card-text m-0 py-1 px-0 upload-status">
                  Upload Status:
                </p>
                <p className="card-text m-0 py-1 px-3 student-upload-status">
                  Students{" "}
                  <span id="student-upload-status" className="status-icon">
                    ❌
                  </span>
                </p>
                <p className="card-text m-0 py-1 px-3 participant-upload-status">
                  Participants{" "}
                  <span id="participant-upload-status" className="status-icon">
                    ❌
                  </span>
                </p>
              </div>
            </div>
            {/* <!-- SECTION UPLOAD FILE PICKER --> */}
            <div
              id="upload-component"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="input-group mb-3">
                  <input
                    id="choose-file-button"
                    type="file"
                    className="form-control"
                  ></input>
                  <label
                    id="upload-button"
                    className="input-group-text custom-disabled-hide"
                  >
                    Upload
                  </label>
                </div>

                <div
                  id="takeAttendance"
                  className=""
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row g-1 d-flex justify-content-between">
                      <div
                        id=""
                        className="form-floating mb-3 col-2 col-sm-2 col-md-2 stat-container"
                      >
                        <input
                          id="student-count"
                          className="form-control"
                          placeholder="Students"
                          type="number"
                          disabled
                        ></input>
                        <label
                          className="floating-input"
                          htmlFor="floatingInput"
                        >
                          Students
                        </label>
                      </div>

                      <div
                        id=""
                        className="form-floating mb-3 col-2 col-sm-2 col-md-2 stat-container"
                      >
                        <input
                          id="present-count"
                          className="form-control"
                          placeholder="Present"
                          type="number"
                          disabled
                        ></input>
                        <label
                          className="floating-input"
                          htmlFor="floatingInput"
                        >
                          Present
                        </label>
                      </div>

                      <div
                        id=""
                        className="form-floating mb-3 col-2 col-sm-2 col-md-2 stat-container"
                      >
                        <input
                          id="absent-count"
                          className="form-control"
                          placeholder="Absent"
                          type="number"
                          disabled
                        ></input>
                        <label
                          className="floating-input"
                          htmlFor="floatingInput"
                        >
                          Absent
                        </label>
                      </div>
                      <div className="form-floating mb-3 col-2 col-sm-2 col-md-2 stat-container">
                        <input
                          id="match-threshold-input"
                          className="form-control"
                          placeholder="Threshold"
                          min="0"
                          max="100"
                          type="number"
                          data-bs-toggle="tooltip"
                          title="Default 60%. Enter a value between 0% and 100%. Click to submit."
                          disabled
                        ></input>
                        <label
                          className="floating-input"
                          htmlFor="floatingInput"
                        >
                          Match
                        </label>
                      </div>
                      <div className="form-floating mb-3 col-2 col-sm-2 col-md-2 stat-container">
                        <input
                          id="duration-threshold-input"
                          className="form-control"
                          placeholder="Threshold"
                          min="0"
                          max="500"
                          type="number"
                          data-bs-toggle="tooltip"
                          title="Default 0. Enter a value between 0 and 500 minutes. Click to submit."
                          disabled
                        ></input>
                        <label
                          className="floating-input"
                          htmlFor="floatingInput"
                        >
                          Minutes
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* <!-- SECTION POPULATE STUDENT ROSTER WITH ATTENDANCE STATUS --> */}
                  <div
                    id="student-container"
                    className="accordion m-0 custom-student-container"
                  >
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                    <article className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed custom-hide-expand-icon"
                          type="button"
                        ></button>
                        <span className="accordion placeholder col-1 bg-secondary"></span>
                        <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
                      </h2>
                    </article>
                  </div>

                  <div
                    id="student-container"
                    className="accordion m-0 custom-student-container hidden"
                  ></div>
                  
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default AttendancePanel;
