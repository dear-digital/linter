import React, { useState } from "react";
import { FormLayout } from "@shopify/polaris";
import AceEditor from "react-ace"; // Import react-ace
import "ace-builds/src-noconflict/theme-github"; // Choose a theme
import "ace-builds/src-noconflict/mode-json"; // Choose a syntax mode
import "./Editor.css";

function Editor({ jsonCode, onJsonChange, updatedJson, error }) {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
    onJsonChange(newText);
  };

  return (
    <FormLayout>
      <style>{`.Polaris-TextField__Resizer {display: none;}`}</style>
      <div className="editor-wrapper">
        <div className="input-field-wrapper">
          <p> Paste JSON Code</p>
          <AceEditor
            mode="json" // Specify the syntax mode
            theme="github" // Specify the theme
            name="input-field"
            value={jsonCode}
            onChange={handleTextChange}
            placeholder="Paste your JSON Code here"
            width="500px"
            height="300px"
            fontSize={"20px"}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              tabSize: 2,
            }}
          />
        </div>
        <div className="output-field-wrapper">
          <p> Output JSON Code</p>
          {/* <textarea
            className="Polaris-TextField__Input Polaris-TextField__Input--multiline textarea output-field"
            id="output-field"
            value={error ? `${error}` : updatedJson}
            spellCheck="false"
            readOnly
          /> */}
          <div className="output-field-wrapper">
            <AceEditor
              mode="json" // Specify the syntax mode
              theme="github" // Specify the theme
              name="output-field"
              value={error ? `${error}` : updatedJson}
              readOnly={true}
              placeholder="Output JSON Code"
              width="500px"
              height="300px"
              fontSize={20}
              setOptions={{
                tabSize: 2,
              }}
            />
          </div>


        </div>
      </div>
    </FormLayout>
  );
}

export default Editor;
