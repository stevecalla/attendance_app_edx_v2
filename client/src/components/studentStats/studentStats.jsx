import Accordion from 'react-bootstrap/Accordion'
import './studentStats.css'

function StudentStats ({
  matchThreshold,
  setMatchThreshold,
  minutesThreshold,
  setMinutesThreshold,
  isParticipantFileUploaded,
  studentRoster,
  studentAttendance
}) {
  let studentCount = studentAttendance.length || studentRoster.length || 0
  let presentCount = 0
  let absentCount = 0

  for (let i = 0; i < studentAttendance?.length; i++) {
    const { isInAttendance } = studentAttendance[i]
    isInAttendance ? presentCount++ : absentCount++
  }

  const handleMatchChange = event => {
    const value = event.target.value
    setMatchThreshold(value)
  }

  const handleMinutesChange = event => {
    const value = event.target.value
    setMinutesThreshold(value)
  }

  const statElements = [
    {
      id: 'student-count',
      value: studentCount || '',
      label: 'Students',
      placeholder: 'Students',
      disabled: true
    },
    {
      id: 'present-count',
      value: presentCount || '',
      label: 'Present',
      placeholder: 'Present',
      disabled: true
    },
    {
      id: 'absent-count',
      value: absentCount || '',
      label: 'Absent',
      placeholder: 'Absent',
      disabled: true
    },
    {
      id: 'match-threshold-input',
      value: matchThreshold,
      onChange: handleMatchChange,
      label: 'Match %',
      placeholder: 'Threshold',
      min: '0',
      max: '100',
      type: 'number',
      tooltipTitle:
        'Default 60%. Enter a value between 0% and 100%. Click to submit.',
      disabled: !isParticipantFileUploaded
    },
    {
      id: 'duration-threshold-input',
      value: minutesThreshold,
      onChange: handleMinutesChange,
      label: 'Minutes',
      placeholder: 'Threshold',
      min: '0',
      max: '500',
      type: 'number',
      tooltipTitle:
        'Default 0. Enter a value between 0 and 500 minutes. Click to submit.',
      disabled: !isParticipantFileUploaded
    }
  ]

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey='0' className="custom-border">
        <Accordion.Body className="p-0">
          <div className='row g-1 d-flex justify-content-between'>
            {statElements.map((element, index) => (
              <div
                key={index}
                className='form-floating mb-3 col-2 col-sm-2 col-md-2'
              >
                <input
                  id={element.id}
                  value={element.value}
                  onChange={element.onChange}
                  className='form-control'
                  placeholder={element.placeholder}
                  min={element.min}
                  max={element.max}
                  type={element.type}
                  data-bs-toggle='tooltip'
                  title={element.tooltipTitle}
                  disabled={element.disabled}
                />
                <label className='floating-input' htmlFor={element.id}>
                  {element.label}
                </label>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default StudentStats;