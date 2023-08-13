import React, { useState } from "react";
import { FormLayout, TextField, Button } from "@shopify/polaris";
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error, clearJsonCode, setJsonCode }) {
  const [text, setText] = useState("");



  const handleTextChange = (inputText) => {
    if (inputText.endsWith("{")) {
      const newText = inputText + "\n  \" \"\n}";
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

    return null;
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
          />
          <div className="btn-div">
            <Button onClick={clearJsonCode}>Clear</Button>
          </div>
        </div>
        <div className="output-field-wrapper">
          <div className="characterCount">
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
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
