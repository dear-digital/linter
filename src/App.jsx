import { Page, Layout, Card, Text, LegacyStack } from "@shopify/polaris";
import Editor from "./components/Editor";
import LinterButtons from "./components/LinterButtons";
import "./App.css";

function App() {
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
                  <Editor />
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
                  <LinterButtons />
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
