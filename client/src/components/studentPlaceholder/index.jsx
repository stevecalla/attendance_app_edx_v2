import Accordion from "react-bootstrap/Accordion";

function StudentPlaceholder() {
  const placeholder = [];

  for (let i = 0; i < 5; i++) {
    placeholder.push(
      <Accordion.Item eventKey={i} key={i}>
        <Accordion.Header className="custom-hide-expand-icon">
          <span className="accordion placeholder col-1 bg-secondary"></span>
          <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
        </Accordion.Header>
      </Accordion.Item>
    );
  }

  return <>{placeholder}</>;
}

export default StudentPlaceholder;
