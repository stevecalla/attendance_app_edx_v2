import './studentContainer.css'

import StudentPlaceholder from '../studentPlaceholder'
import StudentRoster from '../studentRoster'
import StudentRosterAttendance from '../studentRosterAttendance'

function StudentContainer ({
  isStudentFileUploaded,
  isParticipantFileUploaded,
  matchThreshold,
  minutesThreshold
}) {
  return (
    <div
      id='student-container'
      className='accordion m-0 custom-student-container'
    >
      {/* Show placeholder if neither student nor participant file is uploaded */}
      {!isStudentFileUploaded && !isParticipantFileUploaded && (
        <StudentPlaceholder />
      )}

      {/* Show student roster if student file is uploaded */}
      {isStudentFileUploaded && (
        <StudentRoster isStudentFileUploaded={isStudentFileUploaded} />
      )}

      {/* Show attendance if participant file is uploaded but student file is not */}
      {isParticipantFileUploaded && !isStudentFileUploaded && (
        <StudentRosterAttendance
          isParticipantFileUploaded={isParticipantFileUploaded}
          matchThreshold={matchThreshold}
          minutesThreshold={minutesThreshold}
        />
      )}
    </div>
  )
}

export default StudentContainer
