import './copyButton.css';

function copyButton({ copyContentIndex, handleCopyClick, targetClickedIndex, isDisabled }) {
  return (
    <i
      id='copy-attendance-status-button'
      className={`
          ${targetClickedIndex === copyContentIndex ? 'bi-clipboard-check' : 'bi-copy'} 
          bi 
          copy-button
          ${typeof targetClickedIndex === 'boolean' ? 'copy-button-status-position' : 'copy-button-code-position'}
          ${targetClickedIndex === copyContentIndex ? 'copy-color-clicked' : 'copy-color-inherit'} 
          ${isDisabled ? 'copy-button-disabled' : ''}
        `}
      data-bs-toggle='tooltip'
      data-bs-placement='top'
      title='Copy to clipboard'
      onClick={(event) => handleCopyClick(event, copyContentIndex)}
    ></i>
  )
}

export default copyButton;
