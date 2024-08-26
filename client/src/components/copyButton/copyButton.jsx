import './copyButton.css';

function copyButton({ copyContentIndex, handleCopyClick, targetClickedIndex }) {

  console.log(copyContentIndex, handleCopyClick, targetClickedIndex, typeof targetClickedIndex);

  return (
    <i
      id='copy-attendance-status-button'
      className={`
          bi 
          copy-button
          ${typeof targetClickedIndex === 'boolean' ? 'copy-button-position' : 'inherit'}
          ${targetClickedIndex === copyContentIndex ? 'bi-clipboard-check' : 'bi-copy'} 
          ${targetClickedIndex === copyContentIndex ? 'copy-color-green' : 'inherit'} 
        `}
      data-bs-toggle='tooltip'
      data-bs-placement='top'
      title='Copy to clipboard'
      onClick={(event) => handleCopyClick( event, copyContentIndex )}
    ></i>
  )
}

export default copyButton;
