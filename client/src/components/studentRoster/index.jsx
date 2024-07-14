import { useEffect, useState } from "react";
import { getStudentRoster } from "../../utils/api";

import Accordion from "react-bootstrap/Accordion";

function StudentRoster({ isStudentFileUploaded }) {
  const [studentRoster, setStudentRoster] = useState([]);

  useEffect(() => {
    isStudentFileUploaded && fetch_students_list();
  }, [isStudentFileUploaded]);

  async function fetch_students_list() {
    const response = await getStudentRoster();
    setStudentRoster(response);
  }

  return (
    <Accordion>
      {studentRoster?.map((student, index) => (
        <Accordion.Item eventKey={index} key={index}>
          <Accordion.Header className="custom-hide-expand-icon">
            <span className="me-2">{index + 1})</span>
            <span className="student-name">{student}</span>
          </Accordion.Header>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default StudentRoster;
