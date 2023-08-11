import React, { useState } from "react";
import { FormLayout, TextField } from "@shopify/polaris";
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error }) {
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
            label="Paste JSON Code"
            onChange={handleTextChange}
            spellCheck={false}
            placeholder="Paste your JSON Code here"
          />
        </div>
        <div className="output-field-wrapper">
          <TextField
            multiline={4}
            value={error ? `${error}` : updatedJson}
            label="Output JSON Code"
            spellCheck={false}
            readOnly
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
