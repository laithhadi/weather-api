import SingleForecastCard from "./SingleForecastCard";
import "../../../css/RightSidePanel.css";
import { Row } from "react-bootstrap";



function ForecastCards(props) {
    return (
        <Row className="card-wrapper">
            {props.forecast.map(function (dailyForecast, index) {
                if (index < 5) {
                    return (
                        <div className="col" key={index}>
                            <SingleForecastCard item={dailyForecast} key={index} />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </Row>
    );
}

export default ForecastCards;