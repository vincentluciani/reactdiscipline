const Filter = (props) => {
    const filterChangeHandler = event => {
        console.log("message from filter component: value selected is:" + event.target.value)
        props.setDate(event.target.value);
    }
    return (
        <div><div>Year</div>
            <select onChange={filterChangeHandler}>
                <option value=""></option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    );
}

export default Filter;