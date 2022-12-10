import { PureComponent } from "react";

class Work extends PureComponent {
  render() {
    return (
      <div>
        <p>
          Previously, I was a Full-Stack Software Engineer and Data Scientist at{" "}
          <a className="Home__text--link" href="https://www.yipitdata.com">
            YipitData
          </a>
          . Before that, I was a Consultant at{" "}
          <a className="Home__text--link" href="https://www.bateswhite.com">
            Bates White Economic Consulting
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Work;
