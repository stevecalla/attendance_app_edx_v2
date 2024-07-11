import "./studentContainer.css";

import StudentPlaceholder from "../studentPlaceholder";
import StudentRoster from "../studentRoster";
import StudentRosterAttendance from "../studentRosterAttendance";

function StudentContainer() {
  return (
    <div
      id="student-container"
      className="accordion m-0 custom-student-container"
    >
      {/* <StudentPlaceholder /> */}
      <StudentRoster />
      <StudentRosterAttendance />
    </div>
  );
}

export default StudentContainer;
