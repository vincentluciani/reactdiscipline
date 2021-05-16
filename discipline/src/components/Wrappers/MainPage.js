import styles from './MainPage.module.css'

function MainPage(props) {
    const mainClass = 'main-page'
    const additionalClass = props.className;
    let className = styles[mainClass];
    if (additionalClass) {
        className += " " + styles.additionalClass;
    }

    return (
        <div className={className}>{props.children}</div>
    );
}

export default MainPage;
