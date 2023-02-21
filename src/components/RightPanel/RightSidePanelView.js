import "../../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ForecastCardsView from "../RightPanel/Forecast/ForecastCardsView";

function RightSidePanelView(props) {
    return (
        <Container className="right-panel mt-5">
            <ForecastCardsView forecast={props.forecast} />
        </Container>
    );
}

export default RightSidePanelView;