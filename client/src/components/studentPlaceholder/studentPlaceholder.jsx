import Accordion from "react-bootstrap/Accordion";
import Placeholder from 'react-bootstrap/Placeholder';

function StudentPlaceholder() {
  const placeholder = [];

  for (let i = 0; i < 10; i++) {
    placeholder.push(
      <Accordion.Item eventKey={i} key={i}>
        <Accordion.Header className="custom-hide-expand-icon">
          <Placeholder className="col-1 bg-secondary" size="lg"/>
          <Placeholder className="col-11 mx-2 bg-secondary" size="lg"/>
        </Accordion.Header>
      </Accordion.Item>
    );
  }

  return <>{placeholder}</>;
}

export default StudentPlaceholder;
