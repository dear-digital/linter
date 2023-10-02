
import { FormLayout, TextField, Button } from "@shopify/polaris";
import "./Editor.css";
import {
  UploadMajor, ClipboardMinor, InstallMinor, CircleCancelMajor
} from '@shopify/polaris-icons';
import { useState } from "react";
function Editor ({
  jsonCode,
  onJsonChange,
  updatedJson,
  error,
  clearJsonCode,
}) {
  // eslint-disable-next-line no-unused-vars
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");

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
      setSelectedFileName(file.name); // Set the selected file name
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
  const handleDownloadJson = () => {
    if (updatedJson) {
      const jsonBlob = new Blob([updatedJson], { type: "application/json" });
      const downloadLink = document.createElement("a");
      downloadLink.href = URL.createObjectURL(jsonBlob);
      downloadLink.download = "linter-output.json";
      downloadLink.click();
    }
  };

  return (
    <FormLayout>
      <style>{`.Polaris-TextField__Resizer {display: none;}`}</style>
      <div className="editor-wrapper">
        <div className="input-field-wrapper">
          <div className="header">
            <h4>Your JSON Code</h4>
          </div>
          <TextField
            multiline={4}
            value={jsonCode}
            label={`Character Count: ${jsonCode.length}`}
            onChange={handleTextChange}
            spellCheck={false}
            placeholder="Paste your JSON Code here"
            aria-label="Input JSON Code"
          />
          <div className="btn-div">
            <Button
              onClick={() => document.getElementById("file-upload").click()}
              icon={<UploadMajor id="icons" />}
            >
              Upload JSON File
            </Button>
            <span className="selected-file-name">{selectedFileName}</span>
            <input
              id="file-upload"
              type="file"
              accept=".json"
              onChange={handleFileUpload}
              style={{ display: "none" }}
              aria-label="Upload JSON File Input"
            />
          </div>

          <div className="btn-div">
            <Button onClick={clearJsonCode} icon={<CircleCancelMajor id="icons" />}>Clear</Button>
          </div>

          <div className="btn-div">
            <CircleCancelMajor id="icons" />
            <Button onClick={clearJsonCode} >Clear</Button>
          </div>

        </div>
        <div className="output-field-wrapper">
          <div className="header">
            <h4>Output JSON Code</h4>
          </div>
          <TextField
            multiline={4}
            value={error ? `${error}` : updatedJson}
            label={`Character Count: ${updatedJson.length}`}
            spellCheck={false}
            readOnly
            selectTextOnFocus
          />
          <div className={`${!updatedJson ? "disabled-button" : ""} btn-div`}>
            <Button onClick={handleDownloadJson} disabled={!updatedJson} icon={<InstallMinor id="icons" />}>
              Download Json Code
            </Button>
          </div>
          <div className={`${!updatedJson ? "disabled-button" : ""} btn-div`}>
            <Button
              onClick={() => handleCopyToClipboard(updatedJson)}
              disabled={!updatedJson} icon={<ClipboardMinor id="icons" />}
            >
              {error ? "Error" : isCopied ? "Copied" : "Copy JSON to Clipboard"}
            </Button>
          </div>
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
