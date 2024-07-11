import "./studentStats.css";

function StudentStats() {
  return (
    <div className="accordion-body">
      <div className="row g-1 d-flex justify-content-between">
        <div className="form-floating mb-3 col-2 col-sm-2 col-md-2">
          <input
            id="student-count"
            className="form-control"
            placeholder="Students"
            type="number"
            disabled
          ></input>
          <label className="floating-input" htmlFor="floatingInput">
            Students
          </label>
        </div>

        <div className="form-floating mb-3 col-2 col-sm-2 col-md-2">
          <input
            id="present-count"
            className="form-control"
            placeholder="Present"
            type="number"
            disabled
          ></input>
          <label className="floating-input" htmlFor="floatingInput">
            Present
          </label>
        </div>

        <div className="form-floating mb-3 col-2 col-sm-2 col-md-2">
          <input
            id="absent-count"
            className="form-control"
            placeholder="Absent"
            type="number"
            disabled
          ></input>
          <label className="floating-input" htmlFor="floatingInput">
            Absent
          </label>
        </div>

        <div className="form-floating mb-3 col-2 col-sm-2 col-md-2">
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
          <label className="floating-input" htmlFor="floatingInput">
            Match
          </label>
        </div>

        <div className="form-floating mb-3 col-2 col-sm-2 col-md-2">
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
          <label className="floating-input" htmlFor="floatingInput">
            Minutes
          </label>
        </div>
        
      </div>
    </div>
  );
}

export default StudentStats;
