import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FiveDayAPIClient from "./api/OpenWeather/FiveDayAPIClient";
import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import GoogleMap from "./components/LeftPanel/GoogleMap";
import View from "./components/RightPanel/Forecast/ForecastCardsView";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [cityInput, setCityInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiClient = new FiveDayAPIClient();
      const data = await apiClient.fetch5DayForecastByCityIn24HrInterval(cityInput);

      setForecast(data.list);
      setCity(cityInput);
      setError("");
    } catch (error) {
      setForecast([]);
      setError("An error occurred while fetching data. Please try again later.");
    }
  };

  const renderError = () => {
    if (error !== "") {
      return <Alert variant="danger">{error}</Alert>;
    } else {
      return null;
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1 className="mb-4">Five Day Weather Forecast</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city name"
                  value={cityInput}
                  onChange={(e) => setCityInput(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        {renderError()}
        <View forecast={forecast} />
        {city !== ""
          ? <GoogleMap city={city} />
          : "should display loading here or error msg"
        }
      </Container>

    </>
  );
}

export default App;