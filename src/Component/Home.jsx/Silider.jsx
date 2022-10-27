import Carousel from "react-bootstrap/Carousel";
import styles from "./silider.css";

function Silider() {
  return (
    <Carousel fade className={`my-5 w-50 ${styles.si}`}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/d6/a6/92/d6a692fc1e0489955e2b4ed4ae742c76.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdwIgtEHx8KPjworUpiCrP8NwzaNVLAxp6fxIqHYMUhmQibk0HdkwfqtsYE31S33JgoM&usqp=CAU4"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-aIq9JMRQR98hbNctqMojGFstxVQ-NVCNJJfEfeZs-ABT6Ai3TZe9unCXF25dPShZKw&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Silider;
