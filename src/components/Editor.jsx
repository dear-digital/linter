//import { useState, useCallback, useEffect } from "react";
import { FormLayout, TextField } from "@shopify/polaris";
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error }) {
  //const [jsonCode, setJsonCode] = useState("");
  //const [updatedJsonCode, setUpdatedJsonCode] = useState("");
  // Convert the updatedJson string to an object
  /* const parsedUpdatedJson = JSON.parse(updatedJson);

  // Convert the parsed object to a formatted JSON string
  const formattedJsonString = JSON.stringify(parsedUpdatedJson, null, 2); */

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
            onChange={onJsonChange}
            spellCheck="false"
            placeholder="Paste your JSON Code here"
          />
        </div>
        <div className="output-field-wrapper">
          <TextField
            id="output-field"
            label="Result"
            multiline={4}
            value={error ? `${error}` : updatedJson}
            spellCheck="false"
            autoComplete="off"
          />
        </div>

        
      </div>

    
    </FormLayout>
  );
}

export default Editor;
