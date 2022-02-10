import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  //{value1,value2,value3,....} => [value1,value2,value3,....]
  const valueDataPoint = props.dataPoints.map((datapoint) => datapoint.value);
  ///[1,2,3]=1,2,3
  // console.log(valueDataPoint);
  const totalMaximum = Math.max(...valueDataPoint);
  //console.log(totalMaximum);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={totalMaximum}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};
export default Chart;
