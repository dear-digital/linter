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
          <TextField
            multiline={4}
            value={jsonCode}
            label={` Paste JSON Code Character Count: ${jsonCode.length} `}
            onChange={handleTextChange}
            spellCheck={false}
            placeholder="Paste your JSON Code here"
            showCharacterCount
            maxLength={200}

          />
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
            selectTextOnFocus
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
