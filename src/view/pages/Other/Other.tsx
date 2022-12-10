import "./Other.scss";
import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";

class Other extends PureComponent {
  render() {
    return (
      <div className="Other">
        <div className="Other__intro">
          <div className="Other__intro--quote">
            &ldquo;Jack of all trades, master of a few&rdquo;
          </div>
          <div className="Other__intro--origin">- Me</div>
        </div>
        <div className="Other__content">
          <div className="Other__content--section">Service</div>
        </div>
        <div className="Other__content">
          <div className="Other__content--section">Projects</div>
        </div>
      </div>
    );
  }
}

export default withHeaderFooterWrapper(Other);
