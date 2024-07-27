import { useState, useRef } from 'react';
import { codeData } from '../../utils/codeData';
import { instructionsData } from '../../utils/instructionsData';

import "./instructionsContainer.css";
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function InstructionsContainter() {
  // USED TO COPY CODE CONTENT
  const [copiedIndex, setCopiedIndex] = useState(null);
  const bodyRefs = useRef([]);

  function handleCopyClick(event, index) {
    event.stopPropagation(); // prevent accordian from opening when copy button clicked

    // Get the content from the Accordion.Body using the ref
    const content = bodyRefs.current[index].innerText; // or use `innerHTML` if needed

    // Copy the content to the clipboard
    navigator.clipboard.writeText(content).then(
      () => {
        console.log('Content copied to clipboard');
        setCopiedIndex(index); // Update the state to reflect the copied icon
      },
      (err) => {
        console.error('Failed to copy content: ', err);
      }
    );

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  }

  return (
    <Card className='attendance-card'>

      {/* SECTION INSTRUCTIONS */}
      <Card className="custom-card">
        <Card.Header>Instructions</Card.Header>
        <Card.Body className="custom-card-scroll">
          <Accordion>
            {instructionsData?.map(({ header, body }, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>{header}</Accordion.Header>
                <Accordion.Body>
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>

      {/*SECTION CHROME SCRIPTS CODE LIBRARY */}
      <Card className="custom-card">
        <Card.Header> Library - Chrome Scripts </Card.Header>
        <Card.Body className="custom-card-scroll">
          <Accordion>
            {codeData?.map(({ header, body }, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                  <span className="header-title">{header}</span>
                  <span>
                    {header !== "Video Demo" &&
                      <i
                        id='copy-attendance-status-button'
                        className={`
                          bi 
                          ${copiedIndex === index ? 'bi-clipboard-check' : 'bi-copy'} 
                          ${copiedIndex === index ? 'copy-code-color-green' : 'inherit'}
                          copy-code-button
                        `}
                        data-bs-toggle='tooltip'
                        data-bs-placement='top'
                        title='Copy to clipboard'
                        onClick={(event) => handleCopyClick(event, index)}
                      ></i>
                    }
                  </span>
                </Accordion.Header>
                <Accordion.Body ref={(el) => (bodyRefs.current[index] = el)}>
                  <div
                    dangerouslySetInnerHTML={{ __html: body }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>
      </Card>

    </Card>
  )
}

export default InstructionsContainter
