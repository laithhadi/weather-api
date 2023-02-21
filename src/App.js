import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import FiveDayAPIClient from "./api/OpenWeather/FiveDayAPIClient";
import MapsAPIClient from "./api/GoogleMaps/MapsAPIClient";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [map, setMap] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiClient = new FiveDayAPIClient();
      const mapsAPIClient = new MapsAPIClient();
      const data = await apiClient.fetch5DayForecastByCityIn24HrInterval(city);
      const mapData = await mapsAPIClient.fetchMapForCity(city);

      setForecast(data.list);
      setMap(mapData);
      setError("");
    } catch (error) {
      setForecast([]);
      setError("An error occurred while fetching data. Please try again later.");
    }
  };

  const renderForecast = () => {
    if (forecast.length > 0) {
      return (
        <Row className="justify-content-md-center mt-5">
          {forecast.map((item, index) => (
            <Col lg={2} key={index} className="mb-4">
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
          ))}
        </Row>
      );
    } else {
      return null;
    }
  };

  const renderGoogleMap = () => {
    return (
      <div className="google-map">
        <iframe title="google map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC7IXnHpREreLX34gD-5CbPqv4C5GQcf54&q=London&zoom=6&maptype=roadmap" width="300" height="300"></iframe>
      </div>
    )
  };

  const renderError = () => {
    if (error !== "") {
      return <Alert variant="danger">{error}</Alert>;
    } else {
      return null;
    }
  };

  return (
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      {renderError()}
      {renderForecast()}
      {renderGoogleMap()}
    </Container >
  );
}

export default App;