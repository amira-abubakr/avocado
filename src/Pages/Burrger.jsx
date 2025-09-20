
import GUACAMOLE from "../assets/images/guacamole-1.png";
import { Row, Col } from "react-bootstrap";
import GuacamoleItems  from "../data/GuacamoleItems.json";
import GuacamoleItem from "../components/GuacamoleItem";

const Guacamole = () => {
  return (
    <div className="my-5 pt-5">
      {/* Header Section */}
      <div className="container d-flex flex-wrap align-items-center mt-5">
        <div className="w-50 p-3">
          <h1 className="fw-bold text-success mb-4">Guacamole Recipes</h1>
          <p className="text-muted mb-4">
            Discover a variety of delicious guacamole recipes that are perfect
            for any occasion. From classic to creative, find your favorite way
            to enjoy this creamy avocado dip.
          </p>

          
          <button className="btn btn-outline-success">Learn More</button>
        </div>
        <div className="w-50 text-center p-3">
          <img src={GUACAMOLE} alt="Guacamole" className="img-fluid" />
        </div>
      </div>

      <Row lg={3} md={2} sm={1} className="g-3 container mt-3 me-auto ms-auto">
        {GuacamoleItems.map((item) => (
          <Col key={item.id}>
            <GuacamoleItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Guacamole;
