import { Carousel } from "react-bootstrap";
import UnsplashAPIClient from "../../api/Unsplash/UnsplashAPIClient";
import { useState, useEffect } from "react";
import "../../css/RightSidePanel.css";

function CityCarousel(props) {
    const [imageData, setImageData] = useState([]);

    useEffect(() => {
        const unsplashAPI = new UnsplashAPIClient();
        const fetchData = async () => {
            const data = await unsplashAPI.fetchImagesForCity(props.city);
            setImageData(data);
        };
        fetchData();
    }, [props.city]);

    const [activeIndex, setActiveIndex] = useState(0);
    const handleSlideEnd = (index) => {
        if (index === imageData.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex(index + 1);
        }
    };

    return (
        <Carousel
            fade
            controls={false}
            interval={1000}
            activeIndex={activeIndex}
            onSelect={handleSlideEnd}
        >
            {imageData.map((image) => (
                <Carousel.Item key={image.id}>
                    <img className="d-block w-100" src={image.urls.regular} alt={image.alt_description} />
                    <Carousel.Caption>
                        <h3>{image.alt_description}</h3>
                        <p>{image.user.name}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CityCarousel;
