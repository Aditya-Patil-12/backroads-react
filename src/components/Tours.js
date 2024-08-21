import React from "react";
import Title from "./Title";
import { tourCardsInfo } from "../data";
import img1 from '../Images/tour-5.jpeg';
import img2 from "../Images/tour-6.jpeg";
import img3 from "../Images/tour-3.jpeg";
import img4 from "../Images/tour-4.jpeg";
const TourCard = (props)=>{
  console.log(props);
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={props.src} className="tour-img" alt="" />
        <p className="tour-date">{props.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{props.heading}</h4>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae
          tempore voluptatum maxime reprehenderit eum quod exercitationem fugit,
          qui corporis.
        </p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {props.country}
          </p>
          <p>{props.days}</p>
          <p>{props.Budget}</p>
        </div>
      </div>
    </article>
  );
};
const Tours = () => {
  const  arrImages = [img1,img2,img3,img4];
  return (
    <section className="section" id="tours">
      <Title first={"Our"} second={"tours"} />
      <div className="section-center featured-center">
        {
          tourCardsInfo.map((tourcard,index)=>{
            return (
              <TourCard {...tourcard} src={arrImages[index]}  key={tourcard.id}/>
            );
          })
        }
      </div>
    </section>
  );
};

export default Tours;
