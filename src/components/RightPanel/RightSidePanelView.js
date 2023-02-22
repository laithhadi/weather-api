import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FiveDayAPIClient from "../../api/OpenWeather/FiveDayAPIClient";
import ForecastCardsView from "../RightPanel/Forecast/ForecastCardsView";
import WeatherInfo from "./WeatherInfo";
import CityPhotoCarousel from "./CityCarousel";

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
                <Col xs={12} md={6}>
                    <WeatherInfo city={props.city} forecast={props.forecast} />
                </Col>
                <Col xs={12} md={6}>
                    <CityPhotoCarousel city={props.city} />
                </Col>
            </Row>
            <Row>
                <ForecastCardsView forecast={props.forecast} />
            </Row>
        </Container>
    );
}

export default RightSidePanelView;