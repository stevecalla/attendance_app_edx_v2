import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AttendancePanel from '../attendancePanel/attendancePanel';
import AttendanceStatusPanel from '../attendanceStatusPanel/attendanceStatusPanel';

function AttendanceContainer() {
  const [isParticipantFileUploaded, setIsParticipantFileUploaded] =
    useState(false);
  const [studentAttendance, setStudentAttendance] = useState([]);  

  return (
    <Card className='attendance-card'>
    {/* <section className='card attendance-card'> */}
      <Tabs defaultActiveKey='attendance' id='' className='m-3 mb-1' fill>
        <Tab eventKey='attendance' title='Attendance'>
          <AttendancePanel
            isParticipantFileUploaded={isParticipantFileUploaded}
            setIsParticipantFileUploaded={setIsParticipantFileUploaded}
            studentAttendance={studentAttendance}
            setStudentAttendance={setStudentAttendance}
          />
        </Tab>

        <Tab
          eventKey='status'
          title='Status'
          disabled={!isParticipantFileUploaded}
        >
          <AttendanceStatusPanel 
            studentAttendance={studentAttendance}
          />
        </Tab>
      </Tabs>
    {/* </section> */}
    </Card>

  )
}

export default AttendanceContainer
