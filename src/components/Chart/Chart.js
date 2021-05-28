import './Chart.css';
import ChartBar from './ChartBar.js';

const Chart = function(props) {
  const totalMaximum = Math.max(...(props.dataPoints.map(el => el.value)));

  return (
    <div className='chart'>
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart;