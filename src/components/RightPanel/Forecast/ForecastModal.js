import { Modal, Button, Row, Col } from 'react-bootstrap';
import { capitalize } from "../../_utils";
import { format } from "date-fns";

function ForecastModal(props) {
    const weatherData = props.item;
    const date = new Date(weatherData.dt_txt);

    return (
        <Modal {...props} size="lg" centered>
            <Modal.Header>
                <Modal.Title>
                    <Row>
                        <Col>
                            <b>{format(date, 'HH:mm')} </b>
                            <b>{format(date, 'iii, do')}</b>
                        </Col>
                        <Col>
                            {capitalize(weatherData.weather[0].description)}
                        </Col>
                    </Row>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <img
                            src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                            alt={weatherData.weather[0].description}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <h4>Current Weather</h4>
                        <p>Temperature: {weatherData.main.temp} &#8451;</p>
                        <p>Feels like: {weatherData.main.feels_like} &#8451;</p>
                        <p>Pressure: {weatherData.main.pressure} hPa</p>
                        <p>Humidity: {weatherData.main.humidity}%</p>
                        <p>Wind speed: {weatherData.wind.speed} m/s</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Forecast</h4>
                        <p>High: {weatherData.main.temp_max} &#8451;</p>
                        <p>Low: {weatherData.main.temp_min} &#8451;</p>
                        <p>Cloudiness: {weatherData.clouds.all}%</p>
                        <p>Probability of Precipitation: {weatherData.pop * 100}%</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={props.onHide}>
                    Close
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default ForecastModal;