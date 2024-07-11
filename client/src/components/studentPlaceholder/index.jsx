function StudentPlaceholder() {
  const placeholders = [];

  // Use a for loop to push 10 instances of the placeholder structure into the array
  for (let i = 0; i < 10; i++) {
    placeholders.push(
      <article className="accordion-item" key={i}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed custom-hide-expand-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#score_container_{i}`}
            aria-expanded="false"
            aria-controls={`score_container_{i}`}
          >
            <span className="accordion placeholder col-1 bg-secondary"></span>
            <span className="accordion placeholder col-11 mx-2 bg-secondary"></span>
          </button>
        </h2>
      </article>
    );
  }

  return <>{placeholders}</>;
}

export default StudentPlaceholder;
