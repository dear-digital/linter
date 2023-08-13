import React, { useState, useRef, useCallback } from "react";
import { FormLayout, TextField, Button } from "@shopify/polaris";
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error, clearJsonCode, setJsonCode }) {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleTextChange = useCallback(
    (inputText) => {
      let newText = inputText;
      let cursorPosition = inputText.length;

      if (inputText.endsWith("{")) {
        newText = inputText + '\n  ""\n}';
        cursorPosition += 4;
      } else if (inputText.endsWith(`"`)) {
        newText = inputText + `"`;
        cursorPosition++;
      }

      setText(newText);
      onJsonChange(newText);

      // Set the cursor position asynchronously after the component re-renders
      setTimeout(() => {
        const editorRef = textAreaRef.current;
        editorRef.selectionStart = cursorPosition;
        editorRef.selectionEnd = cursorPosition;
      }, 0);
    },
    [onJsonChange]
  );

  return (
    <FormLayout>
      <style>{`.Polaris-TextField__Resizer {display: none;}`}</style>
      <div className="editor-wrapper">
        <div className="input-field-wrapper">
          <textarea
            rows={4}
            value={jsonCode}
            onChange={(e) => handleTextChange(e.target.value)}
            spellCheck={false}
            placeholder="Paste your JSON Code here"
            className="custom-textarea"
            ref={textAreaRef}
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
