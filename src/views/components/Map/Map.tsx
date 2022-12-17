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
import { Airport } from "../../../models/Map";
import { fetchAirports } from "../../../actions/mapActions";

type MapProps = {
  isLoading: boolean;
  airports: Airport[];
  fetchAirports: typeof fetchAirports;
};

type MapStates = {
  root: am5.Root | undefined;
  pointSeries: am5map.MapPointSeries | undefined;
  polygonSeries: am5map.MapPolygonSeries | undefined;
};

const routes: string[][] = data.routes;
const coordinates: {
  [key: string]: number[];
} = data.coordinates;

const lines = routes.map((route) => {
  const [loc1, loc2] = route;
  const coordinate1 = coordinates[loc1];
  const coordinate2 = coordinates[loc2];
  return {
    geometry: {
      type: "LineString",
      coordinates: [coordinate1, coordinate2],
    },
    label: route.join("/"),
  };
});

class Map extends PureComponent<MapProps, MapStates> {
  constructor(props: MapProps) {
    super(props);
    this.state = {
      root: undefined,
      pointSeries: undefined,
      polygonSeries: undefined,
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
    lineSeries.data.setAll(lines);
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
    this.props.fetchAirports();
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
    if (oldProps.airports !== this.props.airports) {
      const { pointSeries, polygonSeries } = this.state;
      if (pointSeries) {
        pointSeries.data.setAll(this.createPoints());
      }
      if (polygonSeries) {
        polygonSeries.data.setAll(this.createRegions());
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
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchAirports,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Map);
