import React, { useState } from 'react';
import styles from './InputForm.module.css';

function InputForm() {
  const [textInput, setTextInput] = useState('');
  const [fileName, setFileName] = useState('');

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Text input:', textInput);
    console.log('File name:', fileName);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.inputGroup}>
        <label htmlFor="textInput">Text input:</label>
        <input
          type="text"
          id="textInput"
          value={textInput}
          onChange={handleTextChange}
          className={styles.textInput}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="fileInput">File input:</label>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        <label htmlFor="fileInput" className={styles.fileInputLabel}>
          Choose File
        </label>
        <span>{fileName || 'No file chosen'}</span>
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
}

export default InputForm;