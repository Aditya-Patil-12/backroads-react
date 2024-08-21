import React from "react";
import Title from "./Title";
import { serviceCardDetails } from "../data";
const ServiceCard = (props) => {
  return (
     <article className="service">
              <span className="service-icon">
                <i className={props.iconClass}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{props.logoHeading}</h4>
                <p className="service-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, officia.
                </p>
              </div>
            </article>
  );
};
function Services() {
  return (
    <section className="section services" id="services">
      <Title first={"Our"} second={"Services"} />
      <div className="section-center services-center">
        {/* use map to just iterate over do it ..... */}
        {serviceCardDetails.map((card) => {
          return (
            <ServiceCard {...card} key={card.id}/>
          );
        })}
      </div>
    </section>
  );
}
export default Services;
