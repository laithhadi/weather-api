import "../../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import FiveDayAPIClient from "../../api/OpenWeather/FiveDayAPIClient";
import GoogleMap from "./GoogleMap";

function LeftSidePanelView(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiClient = new FiveDayAPIClient();
            const data = await apiClient.fetch5DayForecastByCityIn24HrInterval(props.cityInput);
            props.setForecast(data.list);
            props.setCity(props.cityInput);
        } catch (error) {
            props.setForecast([]);
        }
    };

    return (
        <Container className="left-panel mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter city name"
                                value={props.cityInput}
                                onChange={(e) => props.setCityInput(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
            {props.city !== "" ? (
                <GoogleMap city={props.city} />
            ) : (
                "should display loading here or error msg"
            )}
        </Container>
    );
}

export default LeftSidePanelView;