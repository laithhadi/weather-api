import ForecastCard from "./ForecastCard";

function ForecastCards(props) {

    return (

        <div className="row">
            {props.forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
                        <div className="col" key={index}>
                            <ForecastCard item={dailyForecast} key={index} />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default ForecastCards;