import "./attendance.css";

import AttendanceContainer from "../../components/attendanceContainer/attendanceContainer";
import InstructionsContainer from "../../components/instructionsContainer/instructionsContainer";

function Attendance() {
  return (
    <div className="main-container">

      {/* <!-- SECTION ATTENDANCE PANEL --> */}
      <div className="sub-container">
        <AttendanceContainer />
      </div>

      {/* <!-- //SECTION RIGHT PANELS --> */}
      <div className="sub-container">
        <InstructionsContainer />
      </div>
    </div>
  );
}

export default Attendance;
