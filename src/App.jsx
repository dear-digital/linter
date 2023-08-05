import { useState, useCallback } from "react";
import { Page, Layout, Card, Text, LegacyStack } from "@shopify/polaris";
import Editor from "./components/Editor";
import LinterButtons from "./components/LinterButtons";
import "./App.css";

function App() {
  const [error, setError] = useState("");
  const [jsonCode, setJsonCode] = useState("");
  const [updatedJsonCode, setUpdatedJsonCode] = useState("");

  const handleJsonChange = useCallback((value) => {
    setJsonCode(value);
  }, []);

  const handleFormatJSON = useCallback(async () => {
    console.log("Button Clicked");
    try {
      const response = await fetch('http://localhost:5000/format-json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jsonString: jsonCode }),
      });

      const data = await response.json();

      if (data.formattedJson) {
        setError("");
        setUpdatedJsonCode(data.formattedJson);
      } else if (data.error && data.errorMessage) {
        setError(data.errorMessage); 
      } else {
        setError("Unknown error occurred");
      }
    } catch (error) {
      setUpdatedJsonCode('Error occurred', error.message);
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
                  <Editor jsonCode={jsonCode} onJsonChange={handleJsonChange} updatedJson={updatedJsonCode} error={error} />
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
