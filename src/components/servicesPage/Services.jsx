import React from "react";
import { Fragment } from "react";
import "./services.css";
import Card from "./cards/Card";

const Services = () => {
  return (
    <Fragment>
      <section id="services" className="ser-sect">
        <div className="ser-center">
          {/* <h1>Services</h1> */}
          <Card
            title="Services"
            para="nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Card
            title="Services"
            para="nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <Card
            title="Services"
            para="nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </section>
    </Fragment>
  );
};

export default Services;
