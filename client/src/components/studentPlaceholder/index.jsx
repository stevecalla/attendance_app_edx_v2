function StudentPlaceholder() {
  const placeholders = [];

  // Use a for loop to push 10 instances of the placeholder structure into the array
  for (let i = 0; i < 10; i++) {
    placeholders.push(
      <article className="accordion-item" key={i}>
        <h2 className="accordion-header">
          <span className="accordion placeholder col-1 bg-secondary"></span>
          <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
        </h2>
      </article> 
    );
  }

  return (
    <>
      {placeholders}
    </>
  );
}

export default StudentPlaceholder;
