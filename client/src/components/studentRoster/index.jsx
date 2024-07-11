function StudentRoster() {
  const students = [];

  const data = ["student a", "student b"];

  for (let i = 0; i < data.length; i++) {
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
            <span className="student-name">{data[i]}</span>
            </button>
        </h2>
      </article> 
    );
  }

  return (
    <>
      {students}
    </>
  );
}

export default StudentRoster;
