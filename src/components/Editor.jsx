import React, { useState } from "react";
import { FormLayout } from "@shopify/polaris";
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error }) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    const inputText = event.target.value;

    if (inputText.endsWith("{")) {
      const newText = inputText + "\n  \" \" : \" \",\n}";
      setText(newText);
      onJsonChange(newText);

      // Set the cursor position between the braces
      const cursorPosition = newText.length - 5;
      event.target.setSelectionRange(cursorPosition, cursorPosition);
    } else if (inputText.endsWith(`"`)) {
      const newText = inputText + `"`;
      setText(newText);
      onJsonChange(newText);
    } else {
      setText(inputText);
      onJsonChange(inputText);
    }
  };


  return (
    <FormLayout>
      <style>{`.Polaris-TextField__Resizer {display: none;}`}</style>
      <div className="editor-wrapper">
        <div className="input-field-wrapper">
          <p> Paste JSON Code</p>
          <textarea
            className="Polaris-TextField__Input Polaris-TextField__Input--multiline textarea"
            id="input-field"
            value={text}
            label="Paste JSON Code"
            onChange={handleTextChange}
            spellCheck="false"
            placeholder="Paste your JSON Code here"
            style={{ fontSize: "20px" }}
          />

        </div>
        <div className="output-field-wrapper">
          <p> Output JSON Code</p>
          <textarea
            className="Polaris-TextField__Input Polaris-TextField__Input--multiline textarea output-field"
            id="output-field"
            value={error ? `${error}` : updatedJson}
            spellCheck="false"
            style={{ fontSize: "20px" }}
            readOnly
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
