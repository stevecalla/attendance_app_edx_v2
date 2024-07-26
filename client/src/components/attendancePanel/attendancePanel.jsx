import { useState } from 'react'

import './attendancePanel.css'

import UploadStatus from '../uploadStatus/uploadStatus'
import UploadFileContainer from '../uploadFileContainer/uploadFileContainer'
import StudentStats from '../studentStats/studentStats'
import StudentContainer from '../studentContainer/studentContainer'

function AttendancePanel ({
  isParticipantFileUploaded,
  setIsParticipantFileUploaded,
  studentAttendance,
  setStudentAttendance
}) {
  const [isStudentFileUploaded, setIsStudentFileUploaded] = useState(false)
  const [matchThreshold, setMatchThreshold] = useState(60)
  const [minutesThreshold, setMinutesThreshold] = useState(0)
  const [studentRoster, setStudentRoster] = useState([])

  // const [isParticipantFileUploaded, setIsParticipantFileUploaded] = useState(false);
  // const [studentAttendance, setStudentAttendance] = useState([]);

  return (
    <div className='m-4'>
      <UploadStatus />
      <UploadFileContainer
        isStudentFileUploaded={isStudentFileUploaded}
        setIsStudentFileUploaded={setIsStudentFileUploaded}
        isParticipantFileUploaded={isParticipantFileUploaded}
        setIsParticipantFileUploaded={setIsParticipantFileUploaded}
      />
      <StudentStats
        matchThreshold={matchThreshold}
        setMatchThreshold={setMatchThreshold}
        minutesThreshold={minutesThreshold}
        setMinutesThreshold={setMinutesThreshold}
        isParticipantFileUploaded={isParticipantFileUploaded}
        studentRoster={studentRoster}
        studentAttendance={studentAttendance}
      />
      <StudentContainer
        isStudentFileUploaded={isStudentFileUploaded}
        isParticipantFileUploaded={isParticipantFileUploaded}
        matchThreshold={matchThreshold}
        minutesThreshold={minutesThreshold}
        studentRoster={studentRoster}
        setStudentRoster={setStudentRoster}
        studentAttendance={studentAttendance}
        setStudentAttendance={setStudentAttendance}
      />
    </div>
  )
}

export default AttendancePanel
