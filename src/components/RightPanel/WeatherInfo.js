import { capitalize } from "../_utils";
import { Row, Col } from "react-bootstrap";
import { format } from 'date-fns';

function WeatherInfo(props) {
    if (!Array.isArray(props.forecast) || props.forecast.length < 1) {
        return "Loading....";
    }

    return (
        <>
            <Row className="weather-info-row">
                <Col className="city-name">{capitalize(props.city)}</Col>
            </Row>
            <Row>
                <Col>{format(new Date(props.forecast[0].dt * 1000), 'EEEE, HH:mm')}</Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center real-temp">{props.forecast[0].main.temp}°C</Col>
            </Row>
            <Row>
                <Col className="d-flex align-items-center">Feels like: {props.forecast[0].main.feels_like}°C</Col>
                <Col><img className="weather-icon"
                    src={`https://openweathermap.org/img/w/${props.forecast[0].weather[0].icon}.png`}
                    alt={props.forecast[0].weather[0].description}
                /></Col>
            </Row>
        </>
    );
}

export default WeatherInfo;