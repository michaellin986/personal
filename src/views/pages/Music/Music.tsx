import "./Music.scss";
import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";

class Music extends PureComponent {
  render() {
    return (
      <div className="Music">
        <div className="Music__intro">
          <div className="Music__intro--quote">
            A window into my musical interests and activities
          </div>
        </div>
        <div className="Music__content">
          <div className="Music__content--section">Violin</div>
          <p>
            Since Fall 2022, I have been the Concertmaster of the{" "}
            <a
              href="https://music.northwestern.edu/academics/ensembles/philharmonia"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Northwestern University Philharmonia
            </a>
            . We perform symphonic works such as Dvorak&apos;s Slavonic Dances,
            and Prokofiev&apos;s Symphony No. 7. In addition, I have been a part
            of the Northwestern Baroque Music Ensemble.
          </p>
          <p>
            Before returning to school, I played violin with various ensembles
            including the{" "}
            <a
              href="https://www.capitalcitysymphony.org/"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Capital City Symphony
            </a>{" "}
            in Washington D.C., the{" "}
            <a
              href="https://www.gvo.org/"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Greenwich Village Orchestra
            </a>{" "}
            in New York City, and the{" "}
            <a
              href="http://www.concordorchestra.org/"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Concord Chamber Orchestra
            </a>{" "}
            in Milwaukee. During college, I was a member of the{" "}
            <a
              href="https://music.duke.edu/ensembles/symphony-orchestra"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Duke Symphony Orchestra
            </a>
            , and before that I was an active member of the{" "}
            <a
              href="https://myso.org/"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Milwaukee Youth Symphony Orchestra
            </a>
            .
          </p>
          <p>
            In addition to playing in orchestras, I have also performed as a
            soloist and a chamber musician.
          </p>
          <p>
            My primary teachers include Daniel Henry, Jim Schultz, Beth Rees,
            Yuri Anisimov, and{" "}
            <a
              href="https://ciompi.org/about/eric-pritchard/"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Eric Pritchard
            </a>
            .
          </p>
        </div>
        <div className="Music__content">
          <div className="Music__content--section">Conducting</div>
          <p>
            In college, I had the privilege of studying conducting with{" "}
            <a
              href="https://scholars.duke.edu/person/verena.m"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Professor Verena Mösenbichler-Bryant
            </a>{" "}
            as well as conducting a chamber orchestra{" "}
            <a
              href="https://www.youtube.com/watch?v=jPhG8yzFT4U"
              className="Music__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              performance
            </a>
            . Before that, I had the opportunity to conduct the pit orchestra
            for a musical production during my senior year of high school.
          </p>
        </div>
      </div>
    );
  }
}

export default withHeaderFooterWrapper(Music);
