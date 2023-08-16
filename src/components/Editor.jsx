import React, { useState } from "react";
import { FormLayout, TextField, Button } from "@shopify/polaris";
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error, clearJsonCode }) {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleTextChange = (inputText) => {
    if (inputText.endsWith("{")) {
      const newText = inputText + '\n  " "\n}';
      setText(newText);
      onJsonChange(newText);

      // Set the cursor position between the braces
      const cursorPosition = newText.length - 5;
      return cursorPosition;
    } else if (inputText.endsWith(`"`)) {
      const newText = inputText + `"`;
      setText(newText);
      onJsonChange(newText);
    } else {
      setText(inputText);
      onJsonChange(inputText);
    }
    // Reset the copy button state
    setIsCopied(false);
    return null;
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setText(e.target.result);
        onJsonChange(e.target.result);
      };

      reader.readAsText(file);
    }
  };

  const handleCopyToClipboard = (textToCopy) => {
    if (!error) {
      const tempTextArea = document.createElement("textarea");
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);

      // Update the copy button state
      setIsCopied(true);
    } else {
      // Display the error (you can adjust the UI as needed)
      setIsCopied(false);
      alert(`Error: ${error}`);
    }
  };

  return (
    <FormLayout>
      <style>{`.Polaris-TextField__Resizer {display: none;}`}</style>
      <div className="editor-wrapper">
        <div className="input-field-wrapper">
          <TextField
            multiline={4}
            value={jsonCode}
            label="Paste JSON Code"
            onChange={handleTextChange}
            spellCheck={false}
            placeholder="Paste your JSON Code here"
          />

          <div className="lint-btn-wrapper">
            <label className="Polaris-Button" htmlFor="file-upload">
              Upload JSON File
            </label>
            <input
              id="file-upload"
              type="file"
              accept=".json"
              onChange={handleFileUpload}
            />
          </div>
          <div className="btn-div">
            <Button onClick={clearJsonCode}>Clear</Button>
          </div>
        </div>
        <div className="output-field-wrapper">
          <TextField
            multiline={4}
            value={error ? `${error}` : updatedJson}
            label="Output JSON Code"
            spellCheck={false}
            readOnly
          />
          <Button onClick={() => handleCopyToClipboard(updatedJson)}>
            {error
              ? "Error"
              : isCopied
              ? "Copied"
              : "Copy Output JSON to Clipboard"}
          </Button>
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
