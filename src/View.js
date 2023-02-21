import ForecastCards from "./components/ForecastCards"

function View(props) {
    return (
        <div className="View">
            <ForecastCards forecast={props.forecast} />
        </div>
    )
}

export default View

