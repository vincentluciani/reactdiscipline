import styles from './BarChartBar.module.css'

const BarChartBar = props => {
    let barFillingHeight = '0%';

    if (props.maxValue > 0) {
        barFillingHeight = Math.round(100 * props.value / props.maxValue);
    }
    return (
        <div className={styles['chart-bar']}>
            <div className="styles['chart-bar-inside']">
                <div className="styles['chart-bar-filling']" style={{ height: barFillingHeight }}>

                </div>
            </div>
            <div className="styles['chart-bar-label']">{props.label}
            </div>
        </div>)
}

export default BarChartBar;