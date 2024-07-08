import "./attendance.css";

import AttendanceTabs from "../../components/attendanceTabs";

// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";

function Attendance() {
  return (
    <div className="main-container">

      {/* <!-- SECTION ATTENDANCE PANEL --> */}
      <div className="sub-container">
        <AttendanceTabs />
      </div>

      {/* <!-- //SECTION RIGHT PANELS --> */}
      <div className="sub-container">
        <p>Hello</p>
      </div>
    </div>
  );
}

export default Attendance;
