import { Carousel } from "react-bootstrap";
import UnsplashAPIClient from "../../api/Unsplash/UnsplashAPIClient";
import { useState, useEffect } from "react";

function CityCarousel() {
    const city = ["New York", "London", "Paris "]; // Define an array of city names
    const unsplashAPI = new UnsplashAPIClient();
    const [imageData, setImageData] = useState([]);
    
    // Fetch images for each city in the array
    useEffect(() => {
        const fetchData = async () => {
            const images = [];
            for (const cityName of city) {
                const data = await unsplashAPI.fetchImagesForCity(city);
                images.push(...data);
            }
            setImageData(images);
        };
        fetchData();
    }, [city, unsplashAPI]);
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
            interval={2000}
            activeIndex={activeIndex}
            onSelect={handleSlideEnd}
        >
            {imageData.map((image) => (
                <Carousel.Item key={image.id}>
                    <img
                        className="d-block w-100"
                    src={image.src}
                    alt={image.description}
          />
                    <Carousel.Caption>
                        <h3>{image.caption}</h3>
                        <p>{image.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CityCarousel;