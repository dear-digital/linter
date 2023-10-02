import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import "@shopify/polaris-tokens/css/styles.css";
import "./Index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>
);
