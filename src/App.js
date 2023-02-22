import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import LeftSidePanel from "./components/LeftPanel/LeftSidePanelView";
import RightSidePanel from "./components/RightPanel/RightSidePanelView";
import Logo from "./components/Logo";

function App() {
  useEffect(() => {
    document.body.classList.add("bg-color");
    return () => {
      document.body.classList.remove("bg-color");
    };
  }, []);

  const [city, setCity] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [forecast, setForecast] = useState([]);

  return (
    <Container className="mt-5">
      <Logo />
      <Row>
        <Col md={4}>
          <LeftSidePanel
            city={city}
            setCity={setCity}
            setForecast={setForecast}
            cityInput={cityInput}
            setCityInput={setCityInput}
          />
        </Col>
        <Col md={8}>
          <RightSidePanel 
            city={city}
            setCity={setCity}
            setForecast={setForecast}
            setCityInput={setCityInput}
            forecast={forecast} 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;