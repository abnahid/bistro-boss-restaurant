import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../assets/home/01.jpg";
import img2 from "../../assets/home/02.jpg";
import img3 from "../../assets/home/03.png";
import img4 from "../../assets/home/04.jpg";
import img5 from "../../assets/home/05.png";
import img6 from "../../assets/home/06.png";

const Banner = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="carousel-container mx-auto xl:max-w-7xl">
      <Carousel
        className="mx-auto"
        showThumbs
        renderThumbs={() =>
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-14 object-cover rounded cursor-pointer"
            />
          ))
        }
        thumbWidth={100} // Set the width of each thumbnail
        infiniteLoop
        autoPlay
        dynamicHeight
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="max-h-[80vh] object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>

      <style>
        {`
        .carousel {
        display: block;
        }
          .carousel .thumbs-wrapper {
            display: flex;
            justify-content: center; /* Center thumbnails */
            margin-top: 20px; /* Add space above thumbnails */
          }
          .carousel .thumb {
            margin: 0 5px; 
          }
          .carousel .thumb.selected {
            border: 2px solid #007bff; 
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
