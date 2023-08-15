import { ButtonGroup, Button } from "@shopify/polaris";
import "./LinterButtons.css";

function LinterButtons({ onFormatJSON }) {
  /* const [inputJson, setInputJson] = useState('');

  const handleButtonClick = () => {
    onFormatJSON(inputJson);
  }; */

  return (
    <ButtonGroup>
      <div className="btn-group-wrapper">
        <div className="lint-btn-wrapper">
          <Button id="local-btn" onClick={onFormatJSON}>
            Lint Locally
          </Button>
        </div>
        <div className="lint-btn-wrapper">
          <Button id="api-btn">Lint with AI API</Button>
        </div>
      </div>
    </ButtonGroup>
  );
}

export default LinterButtons;
