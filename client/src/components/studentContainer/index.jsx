import "./studentContainer.css";

import StudentPlaceholder from "../studentPlaceholder";
import StudentRoster from "../studentRoster";
import StudentRosterAttendace from "../studentRosterAttendance";

function StudentContainer() {
  return (
    <div
      id="student-container"
      className="accordion m-0 custom-student-container"
    >
      <StudentPlaceholder />
      <StudentRoster />
      <StudentRosterAttendace />
    </div>
  );
}

export default StudentContainer;
