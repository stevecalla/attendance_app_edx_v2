import "./attendance.css";
import Row from 'react-bootstrap/Row';

import AttendanceContainer from "../../components/attendanceContainer/attendanceContainer";
import InstructionsContainer from "../../components/instructionsContainer/instructionsContainer";

function Attendance() {
  return (
    <div className="main-container">

      {/* <Row className="g-4"> */}

        {/* SECTION ATTENDANCE PANEL */}
        <div className="sub-container me-md-1">
          <AttendanceContainer />
        </div>

        {/* SECTION INSTRUCTION / CODE PANELS */}
        <div className="sub-container ms-md-1">
          <InstructionsContainer />
        </div>

      {/* </Row> */}
    </div>
  );
}

export default Attendance;
