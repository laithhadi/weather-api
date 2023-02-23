import { Row, Col } from "react-bootstrap";
import { format } from 'date-fns';
import "../../css/RightSidePanel.css";

function WeatherInfo(props) {
    if (!Array.isArray(props.forecast) || props.forecast.length < 1) {
        return "Loading....";
    }

    const capitalize = (s) => {
        const capital = s.charAt(0).toUpperCase();
        const rest = s.slice(1);
        return capital + rest;
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
                <Col>Temp: {props.forecast[0].main.temp}°C</Col>
                <Col><img className="weather-icon"
                    src={`http://openweathermap.org/img/w/${props.forecast[0].weather[0].icon}.png`}
                    alt={props.forecast[0].weather[0].description}
                /></Col>
            </Row>
        </>
    );
}

export default WeatherInfo;