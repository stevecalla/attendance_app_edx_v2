import Accordion from "react-bootstrap/Accordion";

function StudentRoster() {
  const students = [];
  const data = ["student a", "student b"];

  for (let i = 0; i < data.length; i++) {
    students.push(
      <Accordion.Item eventKey={i} key={i}>
      <Accordion.Header className="custom-hide-expand-icon">
        <span className="me-2">{i + 1})</span>
        <span className="student-name">{data[i]}</span>
      </Accordion.Header>
      </Accordion.Item>
    );
  }

  return <Accordion>{students}</Accordion>;
}

export default StudentRoster;
