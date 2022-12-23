import "./Travel.scss";
import { PureComponent } from "react";
import { connect } from "react-redux";
import withHeaderFooterWrapper from "../../components/HeaderFooterWrapper";
import Map from "../../components/Map";

import { RootState } from "../../../store";
import Loader from "../../components/Loader";

type TravelProps = {
  isLoadingAirports: boolean;
  isLoadingFlights: boolean;
  isLoadingRoutes: boolean;
};

class Travel extends PureComponent<TravelProps> {
  constructor(props: TravelProps) {
    super(props);
  }

  render() {
    const { isLoadingAirports, isLoadingRoutes } = this.props;
    return (
      <div className="Travel">
        <Loader isLoading={isLoadingAirports || isLoadingRoutes} />
        <div className="Travel__map">
          <Map />
        </div>
        <div className="Travel__section">
          <div className="Travel__section--name">Exploring New Places</div>
          <div className="Travel__section--description">
            <p>
              The map above shows a sample of the places I&apos;ve flown to and
              routes I have flown on (login required) across 31 airlines since
              2002.
            </p>
            <p>
              Of course, flying is only half of the fun. Exploring new places
              and experiencing new cultures have been incredibly rewarding. Some
              of my favorite trips in recent years include:
            </p>
            <ul className="Travel__section--bullets">
              <li className="Travel__section--bullet">Norway (Aug 2022)</li>
              <li className="Travel__section--bullet">Iceland (Jun 2022)</li>
              <li className="Travel__section--bullet">
                Glacier NP, USA (Oct 2021)
              </li>
              <li className="Travel__section--bullet">Japan (Nov 2019)</li>
              <li className="Travel__section--bullet">
                Banff NP, Canada (Jul 2019)
              </li>
              <li className="Travel__section--bullet">Spain (Nov 2018)</li>
              <li className="Travel__section--bullet">Italy (Sep 2018)</li>
              <li className="Travel__section--bullet">
                Switzerland (Jul 2017)
              </li>
              <li className="Travel__section--bullet">
                7,000 mile road trip from the Midwest to the West Coast, and
                back (May 2016)
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  isLoadingAirports: state.map.isLoadingAirports,
  isLoadingFlights: state.map.isLoadingFlights,
  isLoadingRoutes: state.map.isLoadingRoutes,
});

export default withHeaderFooterWrapper(connect(mapStateToProps)(Travel));
