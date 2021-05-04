import './BarChartBar.css'

const BarChartBar = props => {
    let barFillingHeight = '0%';

    if (props.maxValue > 0) {
        barFillingHeight = Math.round(100 * props.value / props.maxValue);
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar-inside">
                <div className="chart-bar-filling" style={{ height: barFillingHeight }}>

                </div>
            </div>
            <div className="chart-bar-label">{props.label}
            </div>
        </div>)
}

export default BarChartBar;