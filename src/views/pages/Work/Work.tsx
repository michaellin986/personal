import "./Work.scss";
import { PureComponent } from "react";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";

class Work extends PureComponent {
  render() {
    return (
      <div className="Work">
        <div className="Work__intro">
          <div className="Work__intro--quote">
            Over the years, I have had the privilege of working with
            exceptionally talented people on a variety of projects
          </div>
        </div>
        <div className="Work__company">
          <div className="Work__company--name">
            <a
              href="https://www.bcg.com/"
              className="Work__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boston Consulting Group
            </a>
          </div>
          <div className="Work__position">
            <div className="Work__position--info">
              <div className="Work__position--titleCompany">Consultant</div>
              <div className="Work__position--date">Apr 2024 - Now</div>
            </div>
            <div className="Work__position--description">
              Since May 2024, I have been advising a regional health insurance
              company on strategies to grow their specialty lines of business.
            </div>
          </div>
        </div>
        <div className="Work__company">
          <div className="Work__company--name">
            <a
              href="https://www.yipitdata.com/"
              className="Work__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              YipitData
            </a>
          </div>
          <div className="Work__position">
            <div className="Work__position--info">
              <div className="Work__position--titleCompany">
                Software Engineer, Product Experience
              </div>
              <div className="Work__position--date">Jan 2022 - Aug 2022</div>
            </div>
            <div className="Work__position--description">
              I spent eight months creating an external-facing{" "}
              <a
                href="https://portal.yipitdata.com/"
                className="Work__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portal
              </a>{" "}
              for our clients to access our proprietary research and data
              analyses. The app is powered by Django REST Framework on the
              backend and React.js on the frontend. My work initially focused on
              building the authorization and authentication workflow (basically
              the login page). Once the app was up and running, I worked with
              the product team to create new features and improve the user
              experience.
            </div>
          </div>
          <div className="Work__position">
            <div className="Work__position--info">
              <div className="Work__position--titleCompany">
                Software Engineer, Analyst Tools
              </div>
              <div className="Work__position--date">Apr 2021 - Jan 2022</div>
            </div>
            <div className="Work__position--description">
              I inherited several internal tools that our analysts use to create
              data deliverables, visualizations, and reports. In addition, I
              developed a data product management platform that allows our
              analysts to manage their data products and track their progress.
              Again, all of the apps are powered by Django REST Framework on the
              backend and React.js on the frontend.
            </div>
          </div>
          <div className="Work__position">
            <div className="Work__position--info">
              <div className="Work__position--titleCompany">
                Software Engineer, Readypipe and Data Collection
              </div>
              <div className="Work__position--date">Oct 2019 - Apr 2021</div>
            </div>
            <div className="Work__position--description">
              I worked on{" "}
              <a
                href="https://app.readypipe.io/"
                className="Work__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Readypipe
              </a>
              , our platform-as-a-service (PaaS) product that allows our clients
              and internal users to scrape data from the web at scale. The
              platform greatly simplified the web scraping experience by
              abstracting away a lot of the AWS infrastructure needed, such as
              database management, data streaming, auto-scaling, auto-sizing,
              queuing, monitoring, etc. In addition, I developed novel
              methodologies to scrape data via mobile devices by reverse
              engineering apps using{" "}
              <a
                href="https://frida.re/"
                className="Work__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Frida
              </a>
              .
            </div>
          </div>
          <div className="Work__position">
            <div className="Work__position--info">
              <div className="Work__position--titleCompany">
                Data Product Associate, Alternative Data
              </div>
              <div className="Work__position--date">Apr 2018 - Oct 2019</div>
            </div>
            <div className="Work__position--description">
              I covered the Alibaba (
              <a
                href="https://www.google.com/finance/quote/BABA:NYSE"
                className="Work__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                NYSE: BABA
              </a>
              ) data product, which provides market intelligence on the Tmall
              and Taobao e-commerce platforms and is built with{" "}
              <a
                href="https://en.wikipedia.org/wiki/Alternative_data_(finance)"
                className="Work__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                alternative data
              </a>
              . In addition, I covered our derivative Brands in China product
              that offers insights into how global retail brands perform in the
              China e-commerce space. I managed the data collection, data
              transformation, and data analysis processes, along with authoring
              research reports.
            </div>
          </div>
        </div>
        <div className="Work__company">
          <div className="Work__company--name">
            <a
              href="https://www.bateswhite.com/"
              className="Work__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bates White Economic Consulting
            </a>
          </div>
          <div className="Work__position">
            <div className="Work__position--info">
              <div className="Work__position--titleCompany">
                Consultant, Insurance/Energy
              </div>
              <div className="Work__position--date">Sep 2016 - Apr 2018</div>
            </div>
            <div className="Work__position--description">
              My work involved assessing the economic damage that clients either
              faced or sought. I provided settlement support for clients
              recovering asbestos liabilities losses from insurance companies.
              In addition, I worked on a natural gas derivatives project on
              behalf of a state government. Most of the analyses were performed
              in STATA.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withHeaderFooterWrapper(Work);
