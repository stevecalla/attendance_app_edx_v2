import "./studentContainer.css";

import StudentPlaceholder from "../studentPlaceholder";
import StudentRoster from "../studentRoster";
import StudentRosterAttendace from "../studentRosterAttendance";

function StudentContainer({ isStudentFileUploaded }) {
  return (
    <div
      id="student-container"
      className="accordion m-0 custom-student-container"
    >
      {!isStudentFileUploaded && <StudentPlaceholder />}
      <StudentRoster isStudentFileUploaded={isStudentFileUploaded} />
      {!isStudentFileUploaded && <StudentRosterAttendace />}
    </div>
  );
}

export default StudentContainer;
