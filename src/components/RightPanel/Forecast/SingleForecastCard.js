import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "react-bootstrap";
import "../../../css/RightSidePanel.css";

function ForecastCard(props) {
    const item = props.item;

    return (
        <Row className="mt-5">
            <Col lg={12}>
                <Card className="weather-card">
                    <Card.Header>
                        <b>Date: <br></br>
                            {item.dt_txt}</b>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <img
                                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                                alt={item.weather[0].description}
                            />
                        </Card.Text>
                        <Card.Text className="weather-description">Description: {item.weather[0].description}</Card.Text>
                        <Card.Text>High: {item.main.temp_max}°C</Card.Text>
                        <Card.Text>Low: {item.main.temp_min}°C</Card.Text>
                        <Card.Text>Wind speed: {item.wind.speed} m/s</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default ForecastCard;