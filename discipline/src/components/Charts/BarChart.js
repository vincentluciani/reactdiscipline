import BarChartBar from './BarChartBar'

const BarChart = props => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className="chart-container">
            {
                props.dataPoints.map(
                    dataPoint =>
                        <BarChartBar
                            key={dataPoint.id}
                            value={dataPoint.value}
                            maxValue={totalMaximum}
                            label={dataPoint.label}
                        />
                )
            }
        </div>)
}

export default BarChart