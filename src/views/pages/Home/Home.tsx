import "./Home.scss";
import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";
import headshot from "../../../assets/images/headshot.png";

class Home extends PureComponent {
  render() {
    return (
      <div className="Home">
        <div className="Home__image">
          <img
            className="Home__image--headshot"
            src={headshot}
            alt="Michael Lin"
          />
        </div>
        <div className="Home__text">
          <div className="Home__text--welcome">Welcome</div>
          <div className="Home__text--description">
            I am a recent graduate of the{" "}
            <a
              className="Home__text--link"
              href="https://www.kellogg.northwestern.edu/programs/full-time-mba/mbai-program.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              joint MBA program in Artificial Intelligence
            </a>{" "}
            in the Kellogg School of Management and the McCormick School of
            Engineering at Northwestern University. My passions are solving
            challenging problems and making a positive impact at the
            intersection of business and technology.
          </div>
        </div>
      </div>
    );
  }
}

export default withHeaderFooterWrapper(Home);
