import { useEffect } from 'react'
import { getAttendanceResults } from '../../utils/api'

import Accordion from 'react-bootstrap/Accordion'
import './studentRosterAttendance.css'

function StudentRosterAttendance ({
  isParticipantFileUploaded,
  matchThreshold,
  minutesThreshold,
  studentAttendance,
  setStudentAttendance
}) {
  useEffect(() => {
    isParticipantFileUploaded && fetch_attendance_status()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isParticipantFileUploaded, matchThreshold, minutesThreshold])

  async function fetch_attendance_status () {
    const response = await getAttendanceResults(
      matchThreshold,
      minutesThreshold
    )
    console.log(response)
    setStudentAttendance(response)
  }

  return (
    <Accordion>
      {studentAttendance?.map(
        (
          {
            name,
            matchName,
            maxSimilarityScore: score,
            duration,
            isInAttendance,
            isAMatchStatus,
            isMinutesAboveThresholdStatus
          },
          index
        ) => (
          <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>
              <span className='me-2'>{index + 1})</span>
              <span className='student-name'>{name}</span>
              <span
                className='me-2 match-score'
                style={{ color: !isAMatchStatus && 'red' }}
              >
                {score}
              </span>
              <span
                className='me-2 duration'
                style={{ color: !isMinutesAboveThresholdStatus && 'red' }}
              >
                {duration}
              </span>
              <span
                className={`me-2 ${isInAttendance ? 'checkmark' : 'cross'}`}
              >
                {isInAttendance ? '✅' : '❌'}
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <p className='mb-1'>
                <span className='custom-row-label'>Match Name:</span>
                <span className='mx-2 mb-1'>{matchName}</span>
              </p>
              <p className='mb-1'>
                <span className='custom-row-label'>Match Score:</span>
                <span className='mx-2'>{score}</span>
              </p>
              <p className='mb-1'>
                <span className='custom-row-label'>Match Status:</span>
                <span
                  className='mx-2'
                  style={{ color: !isAMatchStatus && 'red' }}
                >
                  {isAMatchStatus ? 'Present' : 'Absent'}
                </span>
              </p>
              <p className='mb-1'>
                <span className='custom-row-label'>Duration:</span>
                <span className='mx-2'>{duration} minutes</span>
              </p>
              <p className='mb-1'>
                <span className='custom-row-label'>Duration Status:</span>
                <span
                  className='mx-2'
                  style={{ color: !isMinutesAboveThresholdStatus && 'red' }}
                >
                  {isMinutesAboveThresholdStatus ? 'Present' : 'Absent'}
                </span>
              </p>
              <p className='mb-1'>
                <span className='custom-row-label'>Attendance:</span>
                <span
                  className='mx-2'
                  style={{ color: !isInAttendance && 'red' }}
                >
                  {isInAttendance ? 'Present' : 'Absent'}
                </span>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        )
      )}
    </Accordion>
  )
}

export default StudentRosterAttendance
