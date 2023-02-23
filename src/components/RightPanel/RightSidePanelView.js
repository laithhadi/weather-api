import "../../css/RightSidePanel.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FiveDayAPIClient from "../../api/OpenWeather/FiveDayAPIClient";
import WeatherInfo from "./WeatherInfo";
import CityPhotoCarousel from "./CityCarousel";
import ForecastCards from "../RightPanel/Forecast/ForecastCards"

function RightSidePanelView(props) {
    useEffect(() => {
        async function fetchDefaultCityData() {
            const defaultCity = "London";
            const apiClient = new FiveDayAPIClient();
            const data = await apiClient.fetch5DayForecastByCityIn24HrInterval(defaultCity);
            props.setForecast(data.list);
            props.setCityInput(defaultCity)
            props.setCity(defaultCity);
        }
        fetchDefaultCityData();
    }, []);

    return (
        <Container className="right-panel rounded-4">
            <Row>
                <Col xs={12} md={6} className="weather-info" >
                    <WeatherInfo
                        city={props.city} forecast={props.forecast} />
                </Col>
                <Col xs={12} md={6}>
                    <CityPhotoCarousel className="carousel"
                        city={props.city} />
                </Col>
            </Row>
            <Row>
                <ForecastCards forecast={props.forecast} />
            </Row>
        </Container>
    );
}

export default RightSidePanelView;