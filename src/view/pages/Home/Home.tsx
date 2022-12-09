import "./Home.scss";
import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

export default withHeaderFooterWrapper(Home);
