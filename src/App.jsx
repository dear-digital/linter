import { useState, useCallback, useEffect } from "react";
import { Page, Layout, Card, Text, LegacyStack } from "@shopify/polaris";
import Editor from "./components/Editor";
import LinterButtons from "./components/LinterButtons";
import "./App.css";
import axios from "axios";

function App () {
  const [error, setError] = useState("");
  const [jsonCode, setJsonCode] = useState("");
  const [updatedJsonCode, setUpdatedJsonCode] = useState("");

  const clearJsonCode = () => {
    setJsonCode(""); // Clear the JSON code input field
    // Clear the jsonCode cookie by setting its expiration to a past date
    const expirationDate = new Date(0);
    document.cookie = `jsonCode=; expires=${expirationDate.toUTCString()}; path=/`;
  };

  const handleJsonChange = useCallback((value) => {
    setJsonCode(value);
    // Update the cookie whenever JSON code changes
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    document.cookie = `jsonCode=${encodeURIComponent(
      value
    )}; expires=${expirationDate.toUTCString()}; path=/`;
  }, []);

  useEffect(() => {
    // Load stored JSON code from the cookie on initial render
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      if (name === "jsonCode") {
        setJsonCode(decodeURIComponent(value));
        break;
      }
    }
  }, []);

  const handleFormatJSON = useCallback(async () => {
    try {
      const response = await axios.post("/api-local/format-json", {
        jsonString: jsonCode,
      });

      const data = response.data;

      if (data.formattedJson) {
        setError("");
        setUpdatedJsonCode(data.formattedJson);
      } else if (data.error && data.errorMessage) {
        setError(data.errorMessage);
      } else {
        setError("Unknown error occurred");
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.errorMessage
      ) {
        setError(error.response.data.errorMessage);
      } else {
        setError("Error occurred while processing the request");
      }
    }
  }, [jsonCode]);

  return (
    <div className="App">
      <Page>
        <div className="title-wrapper">
          <div className="page-title">
            <LegacyStack vertical>
              <Text variant="heading4xl" as="h1">
                JSON Code Linter
              </Text>
            </LegacyStack>
          </div>
        </div>
        <div className="page-wrapper">
          <Layout>
            <div className="page">
              <Layout.Section oneThird>
                <Card sectioned>
                  <div className="subtitle-wrapper">
                    <Text variant="heading3xl" as="h2">
                      Editor
                    </Text>
                  </div>
                  <Editor
                    jsonCode={jsonCode}
                    onJsonChange={handleJsonChange}
                    updatedJson={updatedJsonCode}
                    error={error}
                    clearJsonCode={clearJsonCode}
                    setJsonCode={setJsonCode}
                  />
                </Card>
              </Layout.Section>
              <Layout.Section oneThird>
                <Card sectioned>
                  <div className="subtitle-wrapper">
                    <div className="btn-title">
                      <Text variant="heading3xl" as="h2">
                        Linting Options
                      </Text>
                    </div>
                  </div>
                  <LinterButtons onFormatJSON={handleFormatJSON} />
                </Card>
              </Layout.Section>
            </div>
          </Layout>
        </div>
      </Page>
    </div>
  );
}

export default App;
