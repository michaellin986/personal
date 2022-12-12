import variables from "../../../main.scss";
import { PureComponent } from "react";
import data from "../../../assets/data/Travel.json";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldGreatLakesHigh from "@amcharts/amcharts5-geodata/worldGreatLakesHigh";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";

const routes: string[][] = data.routes;
const coordinates: {
  [key: string]: number[];
} = data.coordinates;
const regions: string[] = data.regions;

const points = Object.keys(coordinates).map((loc) => ({
  geometry: {
    type: "Point",
    coordinates: coordinates[loc],
  },
  label: loc,
}));

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

class Map extends PureComponent {
  root: am5.Root | undefined;

  constructor(props: never) {
    super(props);
    this.root = undefined;
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
    polygonSeries.data.setAll(
      regions.map((region) => {
        return {
          id: region,
          polygonSettings: {
            fill: am5.color(variables.colorTertiary),
          },
        };
      })
    );
    chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaHigh,
        fill: am5.color(variables.colorTertiary),
      })
    );
  }

  createPointSeries(root: am5.Root, chart: am5map.MapChart): void {
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 3,
          fill: am5.color(variables.colorQuaternary),
          stroke: am5.color(variables.colorPrimary),
          tooltipText: "{label}",
          tooltipPosition: "pointer",
        }),
      });
    });
    pointSeries.data.setAll(points);
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
      tooltipText: "{label}",
      tooltipPosition: "pointer",
    });
    lineSeries.data.setAll(lines);
  }

  componentDidMount(): void {
    const root = am5.Root.new("chartdiv");
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        zoomStep: 1.25,
        zoomControl: am5map.ZoomControl.new(root, {}),
        panX: "rotateX",
        projection: am5map.geoMercator(),
      })
    );

    this.createPolygonSeries(root, chart);
    this.createPointSeries(root, chart);
    this.createLineSeries(root, chart);
    this.root = root;
  }

  componentWillUnmount(): void {
    if (this.root) {
      this.root.dispose();
    }
  }

  render() {
    return <div id="chartdiv" className="Map"></div>;
  }
}

export default Map;
