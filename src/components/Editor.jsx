import { useState, useCallback, useEffect } from "react";
import { FormLayout, TextField } from "@shopify/polaris";
import "./Editor.css";

function Editor() {
  const [jsonCode, setJsonCode] = useState("");
  const [updatedJsonCode, setUpdatedJsonCode] = useState("");

  const handleJsonChange = (value) => {
    setJsonCode(value);
  };

  return (
    <FormLayout>
      <style>{`.Polaris-TextField__Resizer {display: none;}`}</style>
      <div className="editor-wrapper">
        <div className="input-field-wrapper">
          <TextField
            wrap="true"
            id="input-field"
            label="Paste JSON Code"
            multiline={4}
            value={jsonCode}
            onChange={handleJsonChange}
            spellCheck="false"
            placeholder="Paste your JSON Code here"
          />
        </div>
        <div className="output-field-wrapper">
          <TextField
            id="output-field"
            label="Result"
            multiline={4}
            value={updatedJsonCode}
            spellCheck="false"
            disabled
            autoComplete="off"
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
