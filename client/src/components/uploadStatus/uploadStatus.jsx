import "./uploadStatus.css";

function UploadStatus() {
  return (
    <div className="row align-items-start m-2">
      <div className="d-flex justify-content-between">
        <p className="card-text m-0 py-1 px-0 upload-status">
          Upload Status:
        </p>
        <p className="card-text m-0 py-1 px-3 student-upload-status">
          Students{" "}
          <span id="student-upload-status" className="status-icon">
            ❌
          </span>
        </p>
        <p className="card-text m-0 py-1 px-3 participant-upload-status">
          Participants{" "}
          <span id="participant-upload-status" className="status-icon">
            ❌
          </span>
        </p>
      </div>
    </div>
  );
}

export default UploadStatus;
