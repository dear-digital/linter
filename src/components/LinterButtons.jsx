import { ButtonGroup, Button } from "@shopify/polaris";
import "./LinterButtons.css";

function LinterButtons ({ onFormatJSON }) {
  return (
    <ButtonGroup role="group" aria-label="Linting Options">
      <div className="btn-group-wrapper">
        <div className="lint-btn-wrapper">
          <Button
            id="local-btn"
            onClick={onFormatJSON}
            accessibilityLabel="Lint Locally"
          >
            Lint Locally
          </Button>
        </div>
        <div className="lint-btn-wrapper">
          <Button id="api-btn" accessibilityLabel="Lint with AI API">
            Lint with AI API
          </Button>
        </div>
      </div>
    </ButtonGroup>
  );
}

export default LinterButtons;
