import { PureComponent } from "react";
import data from "../../../assets/data/Travel.json";

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldGreatLakesHigh from "@amcharts/amcharts5-geodata/worldGreatLakesHigh";

const routes: string[][] = data.routes;
const coordinates: {
  [key: string]: number[];
} = data.coordinates;
const countries: string[] = data.countries;

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

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldGreatLakesHigh,
        exclude: ["AQ"],
        fill: am5.color("#61dbfb"),
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      templateField: "polygonSettings",
    });

    polygonSeries.data.setAll(
      countries.map((country) => {
        return {
          id: country,
          polygonSettings: {
            fill: am5.color("#4169e1"),
          },
        };
      })
    );

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 3,
          fill: am5.color("#ff0000"),
          stroke: am5.color("#ffffff"),
          tooltipText: "{label}",
          tooltipPosition: "pointer",
        }),
      });
    });
    pointSeries.data.setAll(points);
    const lineSeries = chart.series.push(
      am5map.MapLineSeries.new(root, {
        stroke: am5.color("#ffffff"),
        lineType: "curved",
      })
    );
    lineSeries.mapLines.template.setAll({
      strokeWidth: 1.5,
      tooltipText: "{label}",
      tooltipPosition: "pointer",
    });
    lineSeries.data.setAll(lines);

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
