import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Row } from "react-bootstrap";



function ForecastCard(props) {
    const item = props.item;

    // if (props.forecast.length > 0) {
    return (
        <Row className="justify-content-md-center mt-5">
            {/* {props.forecast.map((item, index) => ( */}
            <Col lg={12} className="mb-4">
                <Card>
                    <Card.Header>
                        <strong>Date: {item.dt_txt}</strong>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <img
                                src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                                alt={item.weather[0].description}
                            />
                        </Card.Text>
                        <Card.Text>Description: {item.weather[0].description}</Card.Text>
                        <Card.Text>Max Temp: {item.main.temp_max}°C</Card.Text>
                        <Card.Text>Min Temp: {item.main.temp_min}°C</Card.Text>
                        <Card.Text>Wind speed: {item.wind.speed}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/* )
                )} */}
        </Row>
    );
    // } else {
    //     return null;
    // }
};

export default ForecastCard;