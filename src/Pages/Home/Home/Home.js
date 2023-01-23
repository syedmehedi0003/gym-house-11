import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../../Shared/Footer/Footer";

import useServices from "../../hooks/useServices";
import Service from "../Service/Service";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";

const Home = () => {
  const [services, setServices] = useServices();
  return (
    <div>
      <Banner></Banner>

      <div className="text-center">
        <h2
          className="services-text mb-5
                "
        >
          Our Services
        </h2>

        <div className="services-container">
          {services.slice(0, 3).map((service) => (
            <Service
              key={service._id}
              service={service}
              services={services}
              setServices={setServices}
            ></Service>
          ))}
        </div>

        <Link className="btn btn-warning mb-2" to="/services">
          See All
        </Link>
      </div>

      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
