import "./attendancePanel.css";

import UploadStatus from "../uploadStatus";
import StudentStats from "../studentStats";
import StudentContainer from "../studentContainer";

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
            {/* <h2 className="accordion-header">
              <button
                className="accordion-button collapsed show"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#upload-component"
                aria-expanded="false"
                aria-controls="upload-component"
              ></button>
            </h2> */}

            <UploadStatus />

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

                <StudentStats />
                <StudentContainer />
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default AttendancePanel;
