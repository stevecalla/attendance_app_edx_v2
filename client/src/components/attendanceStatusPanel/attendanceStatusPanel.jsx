import './attendanceStatusPanel.css'

function AttendanceStatusPanel () {
  return (
    <div className='m-4'>
      <article className='accordion-item mb-2'>
        <h2 className='accordion-header'>
          <button
            className='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#attendanceStatus'
            aria-expanded='false'
            aria-controls='attendanceStatus'
          ></button>
        </h2>
        <div
          id='studentList'
          className='accordion-collapse'
          data-bs-parent='#accordionExample'
        >
          <div className='accordion-body'>
            <div className='input-group'>
              <button
                id='get-attendance-status-button'
                className='btn btn-outline-secondary'
                type='button'
              >
                Get Status
              </button>
              <textarea
                id='status-list'
                className='form-control status-text-area'
                spellCheck='false'
                aria-label='With textarea'
                placeholder='Attendance Status'
              ></textarea>
              <i
                id='copy-attendance-status-button'
                className='bi bi-copy copy-status-button disabled'
                data-bs-toggle='tooltip'
                data-bs-placement='top'
                title='Copy to clipboard'
              ></i>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default AttendanceStatusPanel
