function StudentRosterAttendance() {
  const attendance_status = false;

  const students = [];

  const data = [
    {
      name: "student a",
      matchName: "student aaaaa",
      maxSimilarityScore: 1.0,
      duration: 100,
    },
  ];

  for (let i = 0; i < data.length; i++) {
    const { name, matchName, maxSimilarityScore: score, duration } = data[i];
    // const attendance_status = await get_attendance_status(score, duration);

    students.push(
      <article className="accordion-item" key={i}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#score_container_{i}`}
            aria-expanded="false"
            aria-controls={`score_container_{i}`}
          >
            <span className="me-2">{i + 1})</span>
            <span className="student-name">{name}</span>

            <span
              className="me-2 match-score"
              style={{ color: !attendance_status && "red" }}
            >
              {(score * 100).toFixed(0)}%
            </span>

            <span
              className="me-2 duration"
              style={{ color: !attendance_status && "red" }}
            >
              {duration}
            </span>
            <span
              className={`me-2 {attendance_status ? "checkmark" : "cross"}`}
            >
              {attendance_status ? "✅" : "❌"}
            </span>
          </button>
        </h2>
        <div
          id={`#score_container_{i}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Match Name: {matchName}</p>
            <p>Match Score: {(score * 100).toFixed(0)}%</p>
            <p>Match Status: {attendance_status ? "Present" : "Absent"}</p>
            <p>Duration: {duration} minutes</p>
          </div>
        </div>
      </article>
    );
  }

  return <>{students}</>;
}

export default StudentRosterAttendance;
