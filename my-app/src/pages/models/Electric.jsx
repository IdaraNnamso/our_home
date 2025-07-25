import React from 'react';
import "../../css/electric.css";
import Nav from "../../components/nav";

export default function Electric() {
  const electricCars = [
    {
      name: "BMW i8 Roadster",
      image: "https://i.pinimg.com/1200x/6f/f0/a4/6ff0a49488627b6cd8df22229d6e0c29.jpg",
      description: "A plug-in hybrid sports car with a futuristic design, electric torque, and premium interior.",
      tag: "Electric",
    },
    {
      name: "BMW iX",
      image: "https://hips.hearstapps.com/hmg-prod/images/2023-bmw-ix-m60-108-1653422436.jpg?crop=0.825xw:0.695xh;0.119xw,0.0745xh&resize=2048:*",
      description: "A fully electric luxury SUV designed for long range, intelligent driving, and sustainability.",
      tag: "Electric",
    },
    {
      name: "BMW i4 M50",
      image: "https://www.thedrive.com/wp-content/uploads/2023/02/09/2022BMWi4M50_9.jpg?quality=85",
      description: "A performance-driven electric Gran Coupe with M DNA and zero emissions.",
      tag: "Electric",
    }
  ];

  return (
    <div className="electricPage">
      <Nav />
      <div className="contentWrapper">
        <h2 className="heading">Electric BMW Models</h2>
        <div className="videoSection">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="promoVideo"
  >
    <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/innovation/futureoftech/fot-01-stage-hd.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <h2 className="heading">Electric BMW Models</h2>
</div>


        <div className="cardGrid">
          {electricCars.map((car, index) => (
            <div key={index} className="carCard">
              <span className="carTag">{car.tag}</span>
              <img src={car.image} alt={car.name} />
              <div className="carInfo">
                <h3>{car.name}</h3>
                <p>{car.description}</p>
                <button className="learnMoreBtn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
