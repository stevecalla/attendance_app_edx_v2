import "./studentContainer.css";

import StudentPlaceholder from "../studentPlaceholder";
import StudentRoster from "../studentRoster";
import StudentRosterAttendace from "../studentRosterAttendance";

function StudentContainer({ isStudentFileUploaded, isParticipantFileUploaded }) {
  return (
    <div
      id="student-container"
      className="accordion m-0 custom-student-container"
    >
      <StudentPlaceholder />
      <StudentRoster isStudentFileUploaded={isStudentFileUploaded} />
      <StudentRosterAttendace isParticipantFileUploaded={isParticipantFileUploaded} />
    </div>
  );
}

export default StudentContainer;
