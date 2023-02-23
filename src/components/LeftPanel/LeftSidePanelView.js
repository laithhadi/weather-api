import "../../css/LeftSidePanel.css";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import FiveDayAPIClient from "../../api/OpenWeather/FiveDayAPIClient";
import GoogleMap from "./GoogleMap";

function LeftSidePanelView(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const apiClient = new FiveDayAPIClient();
            const data = await apiClient.fetch5DayForecastByCityIn24HrInterval(
                props.cityInput
            );
            if (data) {
                props.setForecast(data.list);
                props.setCity(props.cityInput);
            } else {
                setError("Failed to retrieve weather data for the entered city. Please try again.");
            }
        } catch (error) {
            setError("Failed to retrieve weather data for the entered city. Please try again.");
        }

        setIsLoading(false);
    };

    const isSubmitButtonDisabled = props.cityInput === "";

    return (
        <Container className="left-panel rounded-4">
            <Row>
                <Form onSubmit={handleSubmit}>
                    <Row className="mt-5">
                        <Col lg={3}>
                            <Form.Label>City</Form.Label>
                        </Col>
                        <Col lg={9}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter city name"
                                    value={props.cityInput}
                                    onChange={(e) => props.setCityInput(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Button className="city-btn mt-3" variant="primary" type="submit" disabled={isSubmitButtonDisabled}>
                                {isLoading ? (
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                ) : (
                                    "Submit"
                                )}
                            </Button></Col>
                        <Col></Col>
                    </Row>
                    {error && (
                        <Row className="mt-3">
                            <Alert variant="danger">{error}</Alert>
                        </Row>
                    )}
                </Form>
            </Row>
            <Row>
                <Col lg={12} className="text-center text-lg-start mt-3">
                    {props.city !== "" ? (
                        <GoogleMap className="google-map" city={props.city} />
                    ) : isLoading ? (
                        <Spinner animation="border" />
                    ) : (
                        <p>Choose a city first to see the map!</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default LeftSidePanelView;