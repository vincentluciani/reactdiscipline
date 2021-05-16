import BarChartBar from './BarChartBar'
import styles from './BarChartBar.module.css'

const BarChart = props => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);

    return (
        <div className={styles["chart-container"]}>
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