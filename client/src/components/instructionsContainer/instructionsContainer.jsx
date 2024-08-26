import { useState, useRef } from 'react';

import CopyButton from '../copyButton/copyButton';
import { copyContentToClipboard } from '../../utils/copyContentToClipboard';

import { instructionsData } from '../../utils/instructionsData';
import { codeData } from '../../utils/codeData';

import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import "./instructionsContainer.css";

function InstructionsContainter() {
  // USED TO COPY CODE CONTENT
  const [targetClickedIndex, setTargetClickedIndex] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const bodyRefs = useRef([]);

  return (
    <>
      {/* SECTION INSTRUCTIONS */}
      <Card className="custom-card">
        <Card.Header>Instructions</Card.Header>
        <Card.Body className="custom-card-scroll">
          <Accordion>
            {instructionsData?.map(({ title, body }, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>{title}</Accordion.Header>
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
            {codeData?.map(({ title, body, hasCopyButton }, index) => (
              <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header>
                  <span className="header-title">{title}</span>
                  <span>
                    {hasCopyButton &&
                      <CopyButton
                        targetClickedIndex={targetClickedIndex}
                        copyContentIndex={index}
                        handleCopyClick={(event) => {
                          event.stopPropagation(); // Prevent accordion from opening
                          const content = bodyRefs.current[index]?.innerText || '';
                          copyContentToClipboard(content, setTargetClickedIndex, index, setIsDisabled);
                        }}
                        isDisabled={isDisabled}
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
