import { useEffect, useState } from "react";
import { getAttendanceResults } from "../../utils/api";

import Accordion from "react-bootstrap/Accordion";

function StudentRosterAttendance({ isParticipantFileUploaded }) {
  // const attendance_status = false;
  // const students = [];
  // const data = [
  //   {
  //     name: "student a",
  //     matchName: "student aaaaa",
  //     maxSimilarityScore: 1.0,
  //     duration: 100,
  //   },
  //   {
  //     name: "student b",
  //     matchName: "student bbbb",
  //     maxSimilarityScore: 0.8,
  //     duration: 100,
  //   },
  //   {
  //     name: "student c",
  //     matchName: "student cccc",
  //     maxSimilarityScore: 0.25,
  //     duration: 100,
  //   },
  // ];

  const [studentAttendance, setStudentAttendance] = useState([]);

  useEffect(() => {
    console.log("*******************");
    console.log("*******************");
    console.log("*******************");
    console.log("StudentRosterAttendance = ", isParticipantFileUploaded);
  }, [isParticipantFileUploaded]);

  useEffect(() => {
    isParticipantFileUploaded && fetch_attendance_status();
  }, [isParticipantFileUploaded]);

  async function fetch_attendance_status() {
    const response = await getAttendanceResults();
    console.log("fetch_attendance_status", response);
    setStudentAttendance(response);
  }

  return (
    <Accordion>
      {studentAttendance?.map(
        (
          {
            name,
            matchName,
            maxSimilarityScore: score,
            duration,
          },
          index
        ) => (
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
              <span
                className={`me-2 ${
                  score > 0.6 ? "checkmark" : "cross"
                }`}
              >
                {score > 0.6 ? "✅" : "❌"}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <p>Match Name: {matchName}</p>
              <p>Match Score: {(score * 100).toFixed(0)}%</p>
              <p>
                Match Status: {score > 0.6 ? "Present" : "Absent"}
              </p>
              <p>Duration: {duration} minutes</p>
            </Accordion.Body>
          </Accordion.Item>
        )
      )}
    </Accordion>
  );
}

export default StudentRosterAttendance;
