import variables from "../../../main.scss";
import { PureComponent } from "react";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldGreatLakesHigh from "@amcharts/amcharts5-geodata/worldGreatLakesHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";

import { RootState } from "../../../store";
import data from "../../../assets/data/Travel.json";
import { Airport, Route } from "../../../models/Map";
import {
  fetchAirports,
  fetchFlights,
  fetchRoutes,
} from "../../../actions/mapActions";

type MapProps = {
  isLoading: boolean;
  airports: Airport[];
  routes: Route[];
  fetchAirports: typeof fetchAirports;
  fetchFlights: typeof fetchFlights;
  fetchRoutes: typeof fetchRoutes;
};

type MapStates = {
  root: am5.Root | undefined;
  pointSeries: am5map.MapPointSeries | undefined;
  polygonSeries: am5map.MapPolygonSeries | undefined;
  lineSeries: am5map.MapLineSeries | undefined;
};

const coordinates: {
  [key: string]: number[];
} = data.coordinates;

class Map extends PureComponent<MapProps, MapStates> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
      root: undefined,
      pointSeries: undefined,
      polygonSeries: undefined,
      lineSeries: undefined,
    };
  }

  createPolygonSeries(root: am5.Root, chart: am5map.MapChart): void {
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldGreatLakesHigh,
        exclude: ["AQ"],
        fill: am5.color(variables.colorSecondary),
      })
    );
    polygonSeries.mapPolygons.template.setAll({
      templateField: "polygonSettings",
    });
    const regions = this.createRegions();
    polygonSeries.data.setAll(regions);
    chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaHigh,
        fill: am5.color(variables.colorTertiary),
      })
    );
    this.setState({ polygonSeries });
  }

  createLines = () => {
    const { airports, routes } = this.props;
    return airports.length === 0 || routes.length === 0
      ? data.routes.map((route) => ({
          geometry: {
            type: "LineString",
            coordinates: route.map((loc) => coordinates[loc]),
          },
          label: route.join("/"),
        }))
      : routes.map((route) => ({
          geometry: {
            type: "LineString",
            coordinates: route.map((loc) => {
              const airport = airports.find((airport) => airport.code === loc);
              return [airport?.longitude, airport?.latitude];
            }),
          },
          label: route.join("/"),
        }));
  };

  createLineSeries(root: am5.Root, chart: am5map.MapChart): void {
    const lineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {
        stroke: am5.color(variables.colorPrimary),
        lineType: "curved",
      })
    );
    lineSeries.mapLines.template.setAll({
      strokeWidth: 1.5,
      tooltipHTML: `<div style="color: black;">{label}</div>`,
      tooltipPosition: "pointer",
    });
    lineSeries.data.setAll(this.createLines());
    this.setState({ lineSeries });
  }

  createPoints = () => {
    const { airports } = this.props;
    return airports.length === 0
      ? Object.keys(coordinates).map((loc) => ({
          geometry: {
            type: "Point",
            coordinates: coordinates[loc],
          },
          code: loc,
        }))
      : airports.map((airport) => ({
          geometry: {
            type: "Point",
            coordinates: [airport.longitude, airport.latitude],
          },
          code: airport.code,
        }));
  };

  createRegions = () => {
    const { airports } = this.props;
    const regions =
      airports.length === 0
        ? data.regions
        : Array.from(new Set(airports.map((airport) => airport.country)));
    return regions.map((region) => ({
      id: region,
      polygonSettings: {
        fill: am5.color(variables.colorTertiary),
      },
    }));
  };

  createPointSeries(root: am5.Root, chart: am5map.MapChart): void {
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 3,
          fill: am5.color(variables.colorQuaternary),
          stroke: am5.color(variables.colorPrimary),
          tooltipHTML: "{code}",
          tooltipPosition: "pointer",
        }),
      });
    });
    pointSeries.data.setAll(this.createPoints());
    this.setState({ pointSeries });
  }

  componentDidMount(): void {
    const { fetchAirports, fetchRoutes } = this.props;
    fetchRoutes();
    fetchAirports();
    const root = am5.Root.new("chartdiv");
    this.setState({ root });
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        zoomStep: 1.25,
        zoomControl: am5map.ZoomControl.new(root, {}),
        panX: "rotateX",
        projection: am5map.geoMercator(),
      })
    );
    this.createPolygonSeries(root, chart);
    this.createLineSeries(root, chart);
    this.createPointSeries(root, chart);
  }

  componentDidUpdate(oldProps: MapProps): void {
    if (
      oldProps.airports !== this.props.airports ||
      oldProps.routes !== this.props.routes
    ) {
      const { pointSeries, polygonSeries, lineSeries } = this.state;
      if (polygonSeries) {
        polygonSeries.data.setAll(this.createRegions());
      }
      if (lineSeries) {
        lineSeries.data.setAll(this.createLines());
      }
      if (pointSeries) {
        pointSeries.data.setAll(this.createPoints());
      }
    }
  }

  componentWillUnmount(): void {
    const { root } = this.state;
    if (root) {
      root.dispose();
    }
  }

  render() {
    return <div id="chartdiv" className="Map"></div>;
  }
}

const mapStateToProps = (state: RootState) => ({
  isLoading: state.map.isLoading,
  airports: state.map.airports,
  routes: state.map.routes,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchAirports,
      fetchFlights,
      fetchRoutes,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Map);
