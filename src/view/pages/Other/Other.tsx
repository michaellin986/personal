import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";

class Other extends PureComponent {
  render() {
    return <div>Other</div>;
  }
}

export default withHeaderFooterWrapper(Other);
