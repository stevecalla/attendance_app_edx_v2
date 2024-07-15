import { useState } from "react";

import "./attendancePanel.css";

import UploadStatus from "../uploadStatus";
import UploadFileContainer from "../uploadFileContainer";
import StudentStats from "../studentStats";
import StudentContainer from "../studentContainer";

function AttendancePanel() {
  const [isStudentFileUploaded, setIsStudentFileUploaded] = useState(false);
  const [isParticipantFileUploaded, setIsParticipantFileUploaded] = useState(false);

  return (
    <div className="m-4">
      <UploadStatus />
      <UploadFileContainer
        isStudentFileUploaded={isStudentFileUploaded}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        isParticipantFileUploaded={isParticipantFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
      />
      <StudentStats />
      <StudentContainer 
        isStudentFileUploaded={isStudentFileUploaded} 
        isParticipantFileUploaded={isParticipantFileUploaded}
      />
    </div>
  );
}

export default AttendancePanel;
