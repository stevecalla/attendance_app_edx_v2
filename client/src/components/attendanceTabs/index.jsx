// import "./attendanceTabs.css";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AttendancePanel from "../attendancePanel";

function AttendanceTabs() {
  return (
    <section className="card attendance-card">
      <Tabs defaultActiveKey="profile" id="" className="m-4" fill>

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
