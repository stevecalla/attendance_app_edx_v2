function UploadFilePicker() {
  return (
    <div className="input-group mb-3">
      <input
        id="choose-file-button"
        type="file"
        className="form-control"
      ></input>
      <label
        id="upload-button"
        className="input-group-text custom-disabled-hide"
      >
        Upload
      </label>
    </div>
  );
}

export default UploadFilePicker;
