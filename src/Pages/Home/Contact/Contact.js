import React from "react";
import "./Contact.css";

import { FaMapMarkerAlt, FaPhoneAlt, FaLink, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact container">
      <h2 className="services-text mt-5 mb-5 text-center">Contact Us</h2>
      <div className="d-flex  justify-content-center px-2">
        <form className="margin">
          <div class="row g-3 gx-0 w-75">
            <div class="col-sm-4">
              <input
                type="text"
                class="form-control"
                placeholder="Your Name"
                required
              />
            </div>
            <div class="col-sm-4">
              <input
                type="number"
                class="form-control"
                placeholder="Your Phone Number"
                required
              />
            </div>
            <div class="col-sm-4">
              <input
                type="email"
                class="form-control"
                placeholder="Your Email"
              />
            </div>

            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="d-flex  justify-content-center mt-0">
              <button type="submit" onSubmit="" class="btn btn-info col-sm-2">
                Submit
              </button>
            </div>
          </div>
        </form>

        <div className="">
          <h3 className="">Main Office</h3>

          <div className="text-secondary">
            <p className="flex mt-2">
              <span className="m-1 text-primary">
                <FaMapMarkerAlt className="text-secondary" />
              </span>
              House 33 Munsibari road, jigatola 1209
            </p>
            <p className="flex mt-2">
              <span className="m-1 text-primary">
                <FaPhoneAlt className="text-secondary" />
              </span>
              +8801794013834
            </p>

            <p className="mt-2 flex">
              <span className="m-1 text-primary">
                <FaLink className="text-secondary" />
              </span>
              www.wfhbd.org
            </p>
          </div>
        </div>
      </div>

      {/*  input box end  */}

      <h2 className="services-text mt-5 mb-2 text-center">Our Location</h2>
      <div className="mb-10 p-5 lg:mx-8">
        <iframe
          style={{ width: "100%", height: "450px" }}
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=600&amp;height=450&amp;hl=en&amp;q=WFH%20Foundation,%2033%20Munshi%20Bari%20Rd,%20Dhaka%201209%20+(WFH%20Foundation,%2033%20Munshi%20Bari%20Rd,%20Dhaka%201209)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>

        {/* https://maps-generator.com/ */}
      </div>
    </div>
  );
};

export default Contact;
