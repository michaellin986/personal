import "./Other.scss";
import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";
import paper from "../../../assets/documents/paper.pdf";
import poster from "../../../assets/documents/poster.pdf";

class Other extends PureComponent {
  render() {
    return (
      <div className="Other">
        <div className="Other__intro">
          <div className="Other__intro--quote">
            &ldquo;Jack of all trades, master of{" "}
            <span style={{ textDecoration: "line-through" }}>none</span> a
            few.&rdquo;
          </div>
          <div className="Other__intro--origin">- Me</div>
        </div>
        <div className="Other__content">
          <div className="Other__content--section">Service</div>
          <div className="Other__position">
            <div className="Other__position--info">
              <div className="Other__position--org">
                Computer Science Teacher,{" "}
                <a
                  href="https://www.microsoft.com/en-us/teals"
                  className="Other__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Microsoft TEALS
                </a>
              </div>
            </div>
            <div className="Other__position--description">
              I taught computer science to high school students in underserved
              communities through the Microsoft TEALS program. The courses I
              taught include{" "}
              <a
                href="https://tealsk12.github.io/2nd-semester-introduction-to-computer-science/"
                className="Other__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Introduction to Computer Science
              </a>{" "}
              (Python) and{" "}
              <a
                href="https://apstudents.collegeboard.org/courses/ap-computer-science-a"
                className="Other__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                AP Computer Science A
              </a>{" "}
              (Java).
            </div>
          </div>
          <div className="Other__position">
            <div className="Other__position--info">
              <div className="Other__position--org">
                Alumni Interviewer,{" "}
                <a
                  href="https://admissions.duke.edu/"
                  className="Other__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Duke University Admissions
                </a>
              </div>
            </div>
            <div className="Other__position--description">
              I interview applicants for undergraduate admissions for my alma
              mater.
            </div>
          </div>
        </div>
        <div className="Other__content">
          <div className="Other__content--section">Projects</div>
          <div className="Other__position">
            <div className="Other__position--info">
              <div className="Other__position--org">
                Summer REU in Mathematical Biology,{" "}
                <a
                  href="https://math.duke.edu/"
                  className="Other__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Department of Mathematics, Duke University
                </a>
              </div>
            </div>
            <div className="Other__position--description">
              I spent the summer of 2013 working with{" "}
              <a
                href="https://sites.duke.edu/marcdryser/"
                className="Other__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Professor Marc Ryser
              </a>{" "}
              and Jack Enyeart on a tumor growth modeling project. At the end of
              the summer, I had the privilege of presenting my findings at the{" "}
              <a
                href="https://mbi.osu.edu/"
                className="Other__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mathematical Biosciences Institute at The Ohio State University
              </a>
              . My work was funded by the National Science Foundation.
              <ul className="Other__position--bullets">
                <li className="Other__position--bullet">
                  A Mechanistic Model for Metastatic Tumour Growth and Treatment
                  with Radiation Therapy (
                  <a
                    href={paper}
                    className="Other__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paper
                  </a>{" "}
                  |{" "}
                  <a
                    href={poster}
                    className="Other__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Poster
                  </a>
                  )
                </li>
              </ul>
            </div>
          </div>
          <div className="Other__position">
            <div className="Other__position--info">
              <div className="Other__position--org">
                Biomedical research,{" "}
                <a
                  href="https://surgery.duke.edu/"
                  className="Other__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Department of Surgery, Duke University School of Medicine
                </a>
              </div>
            </div>
            <div className="Other__position--description">
              In college, I was a part of Dr. Hardean Achneck&apos;s lab where
              we studied the impact of endothelial progenitor cells (EPCs) on
              reducing thrombotic complications for patients with ventricular
              assist devices (e.g. stint). Specifically, we were interested in
              seeding EPCs onto sintered titanium surfaces to see if they
              reduced platelet adhesion. I was a co-author (as Qiuyu Lin) on one
              of the papers we published in the American Society for Artificial
              Internal Organs Journal.
              <ul className="Other__position--bullets">
                <li className="Other__position--bullet">
                  Point-of-Care Rapid Seeding Ventricular Assist Device with
                  Blood-Derived Endothelial Cells to Create a Living
                  Antithrombotic Coating (
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4925231/"
                    className="Other__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paper
                  </a>
                  )
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withHeaderFooterWrapper(Other);
