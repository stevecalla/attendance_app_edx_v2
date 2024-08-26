import { useState, useRef } from 'react';

import CopyButton from '../copyButton/copyButton';

import { instructionsData } from '../../utils/instructionsData';
import { codeData } from '../../utils/codeData';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import "./instructionsContainer.css";

function InstructionsContainter() {
  // USED TO COPY CODE CONTENT
  const [targetClickedIndex, settargetClickedIndex] = useState(null);
  const bodyRefs = useRef([]);

  async function handleCopyClick(event, index) {
    console.log(event, index)
    // prevent accordian from opening when copy button clicked
    event.stopPropagation(); 

    // Get the content from the Accordion.Body using the ref
    const content = bodyRefs.current[index]?.innerText || '';

    try {
      // Copy the content to the clipboard
      await navigator.clipboard.writeText(content);

      console.log('Content copied to clipboard');
      settargetClickedIndex(index); // Update the state to reflect the clicked copy icon

      setTimeout(() => {
        settargetClickedIndex(null);
      }, 2000);

      // set navigator clipboard content to "content cleared after 10 seconds" after 10 seconds
      // setTimeout(() => {
      //   navigator.clipboard.writeText('Content cleared after 10 seconds');
      // }, 10000);
      
    } catch (err) {
      console.error('Failed to copy content: ', err);
    }
  }

  return (
    <>
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

                      <CopyButton
                        targetClickedIndex={targetClickedIndex}
                        copyContentIndex={index}
                        handleCopyClick={handleCopyClick}
                      />

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

    </>
  )
}

export default InstructionsContainter
