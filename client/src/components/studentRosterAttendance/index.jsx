import Accordion from "react-bootstrap/Accordion";

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
    {
      name: "student b",
      matchName: "student bbbb",
      maxSimilarityScore: 0.8,
      duration: 100,
    },
    {
      name: "student c",
      matchName: "student cccc",
      maxSimilarityScore: 0.25,
      duration: 100,
    },
  ];

  for (let i = 0; i < data.length; i++) {
    const { name, matchName, maxSimilarityScore: score, duration } = data[i];

    students.push(
      <Accordion.Item eventKey={i} key={i}>
        <Accordion.Header>
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
          <span className={`me-2 {attendance_status ? "checkmark" : "cross"}`}>
            {attendance_status ? "✅" : "❌"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <p>Match Name: {matchName}</p>
          <p>Match Score: {(score * 100).toFixed(0)}%</p>
          <p>Match Status: {attendance_status ? "Present" : "Absent"}</p>
          <p>Duration: {duration} minutes</p>
        </Accordion.Body>
      </Accordion.Item>
    );
  }

  return <Accordion defaultActiveKey>{students}</Accordion>;
}

export default StudentRosterAttendance;
