import { useEffect, useState } from "react";
import { getAttendanceResults } from "../../utils/api";

import Accordion from "react-bootstrap/Accordion";
import "./studentRosterAttendance.css";

function StudentRosterAttendance({ isParticipantFileUploaded }) {
  const [studentAttendance, setStudentAttendance] = useState([]);

  useEffect(() => {
    isParticipantFileUploaded && fetch_attendance_status();
  }, [isParticipantFileUploaded]);

  async function fetch_attendance_status() {
    const response = await getAttendanceResults();
    setStudentAttendance(response);
  }

  return (
    <Accordion>
      {studentAttendance?.map(
        ({ name, matchName, maxSimilarityScore: score, duration }, index) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <span className="me-2">{index + 1})</span>
              <span className="student-name">{name}</span>
              <span
                className="me-2 match-score"
                style={{ color: !(score > 0.6) && "red" }}
              >
                {(score * 100).toFixed(0)}%
              </span>
              <span
                className="me-2 duration"
                style={{ color: !(score > 0.6) && "red" }}
              >
                {duration}
              </span>
              <span className={`me-2 ${score > 0.6 ? "checkmark" : "cross"}`}>
                {score > 0.6 ? "✅" : "❌"}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-1">
                <span className="custom-row-label">Match Name:</span>
                <span className="mx-2 mb-1">{matchName}</span>
              </p>
              <p className="mb-1">
                <span className="custom-row-label">Match Score:</span>
                <span className="mx-2">{(score * 100).toFixed(0)}%</span>
              </p>
              <p className="mb-1">
                <span className="custom-row-label">Match Status:</span>
                <span className="mx-2">{score > 0.6 ? "Present" : "Absent"}</span>
              </p>
              <p className="mb-1">
                <span className="custom-row-label">Duration:</span>
                <span className="mx-2">{duration} minutes</span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        )
      )}
    </Accordion>
  );
}

export default StudentRosterAttendance;
