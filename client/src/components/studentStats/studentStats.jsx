import './studentStats.css'

function StudentStats ({
  matchThreshold,
  setMatchThreshold,
  minutesThreshold,
  setMinutesThreshold,
  isParticipantFileUploaded,
  studentRoster,
  studentAttendance,
}) {
  console.log(
    'student stats isParticipantFileUploaded = ',
    isParticipantFileUploaded
  )

  console.log('student stats studentRoster = ', studentRoster);
  console.log('student stats studentAttendance = ', studentAttendance);


  let studentCount = studentAttendance.length ||studentRoster.length || 0
  let presentCount = 0
  let absentCount = 0

  for (let i = 0; i < studentAttendance?.length; i++) {
    const { isInAttendance } = studentAttendance[i];
    isInAttendance ? presentCount++ : absentCount++;
  }

  const handleMatchChange = (event) => {
    const value = event.target.value;
    setMatchThreshold(value);
  };

  const handleMinutesChange = (event) => {
    const value = event.target.value;
    setMinutesThreshold(value);
  };

  return (
    <div className='accordion-body'>
      <div className='row g-1 d-flex justify-content-between'>
        <div className='form-floating mb-3 col-2 col-sm-2 col-md-2'>
          <input
            value={studentCount || ''}
            id='student-count'
            className='form-control'
            placeholder='Students'
            type='number'
            disabled
          ></input>
          <label className='floating-input' htmlFor='floatingInput'>
            Students
          </label>
        </div>

        <div className='form-floating mb-3 col-2 col-sm-2 col-md-2'>
          <input
            value={presentCount || ""}
            id='present-count'
            className='form-control'
            placeholder='Present'
            type='number'
            disabled
          ></input>
          <label className='floating-input' htmlFor='floatingInput'>
            Present
          </label>
        </div>

        <div className='form-floating mb-3 col-2 col-sm-2 col-md-2'>
          <input
            value={absentCount || ""}
            id='absent-count'
            className='form-control'
            placeholder='Absent'
            type='number'
            disabled
          ></input>
          <label className='floating-input' htmlFor='floatingInput'>
            Absent
          </label>
        </div>

        <div className='form-floating mb-3 col-2 col-sm-2 col-md-2'>
          <input
            value={matchThreshold}
            onChange={handleMatchChange}
            id='match-threshold-input'
            className='form-control'
            placeholder='Threshold'
            min='0'
            max='100'
            type='number'
            data-bs-toggle='tooltip'
            title='Default 60%. Enter a value between 0% and 100%. Click to submit.'
            disabled={!isParticipantFileUploaded}
          ></input>
          <label className='floating-input' htmlFor='floatingInput'>
            Match %
          </label>
        </div>

        <div className='form-floating mb-3 col-2 col-sm-2 col-md-2'>
          <input
            value={minutesThreshold}
            onChange={handleMinutesChange}
            id='duration-threshold-input'
            className='form-control'
            placeholder='Threshold'
            min='0'
            max='500'
            type='number'
            data-bs-toggle='tooltip'
            title='Default 0. Enter a value between 0 and 500 minutes. Click to submit.'
            disabled={!isParticipantFileUploaded}
          ></input>
          <label className='floating-input' htmlFor='floatingInput'>
            Minutes
          </label>
        </div>
      </div>
    </div>
  )
}

export default StudentStats
