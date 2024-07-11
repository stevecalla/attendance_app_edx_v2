import "./attendancePanel.css";

import UploadStatus from "../uploadStatus";
import UploadFilePicker from "../uploadFilePicker";
import StudentStats from "../studentStats";
import StudentContainer from "../studentContainer";

function AttendancePanel() {
  return (
    <div className="m-4">
      <UploadStatus />
      <UploadFilePicker />
      <StudentStats />
      <StudentContainer />
    </div>
  );
}

export default AttendancePanel;
