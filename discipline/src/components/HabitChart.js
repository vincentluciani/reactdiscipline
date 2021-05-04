import BarChart from './BarChart'

const HabitChart = props => {
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }];

    for (const habit of props.habits) {
        const habitMonth = habit.date.getMonth();
        chartDataPoints[habitMonth].value += habit.progress;
    }

    return (
        <BarChart dataPoints={chartDataPoints} />)

}

export default HabitChart;