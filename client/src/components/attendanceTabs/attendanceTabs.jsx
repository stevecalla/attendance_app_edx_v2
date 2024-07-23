// import "./attendanceTabs.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AttendancePanel from "../attendancePanel/attendancePanel";

function AttendanceTabs() {
  return (
    <section className="card attendance-card">
      <Tabs defaultActiveKey="attendance" id="" className="m-3 mb-1" fill>

        <Tab eventKey="attendance" title="Attendance">
          <AttendancePanel />
        </Tab>

        <Tab eventKey="status" title="Status">
          Tab content for Status
        </Tab>
        
      </Tabs>
    </section>
  );
}

export default AttendanceTabs;