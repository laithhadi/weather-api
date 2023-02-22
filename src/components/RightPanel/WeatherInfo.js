import { Row, Col } from "react-bootstrap";
import { format } from 'date-fns';

function WeatherInfo(props) {
    if (!Array.isArray(props.forecast) || props.forecast.length < 1) {
        return "Loading....";
    }

    return (
        <>
            <Row>
                <Col>{props.city}</Col>
            </Row>
            <Row>
                <Col>{format(new Date(props.forecast[0].dt * 1000), 'EEEE, HH:mm')}</Col>
            </Row>
            <Row>
                <Col>Temp:{props.forecast[0].main.temp}</Col>
                <Col><img
                    src={`http://openweathermap.org/img/w/${props.forecast[0].weather[0].icon}.png`}
                    alt={props.forecast[0].weather[0].description}
                /></Col>
            </Row>
        </>
    );
}

export default WeatherInfo;