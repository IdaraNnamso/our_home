import React from 'react';
import "../../css/sports.css";
import Nav from "../../components/nav";

export default function Sports() {
  const electricCars = [
    {
      name: "BMW M4 Competition",
      image: "https://www.autocar.co.uk/sites/autocar.co.uk/files/1-bmw-m4-competition-2021-rt-hero-front.jpg",
      description: " A high-performance coupe with a turbocharged inline-6 engine, rear- or all-wheel drive, and aggressive M styling. Delivers precision handling and over 500 horsepower.",
      tag: "Electric",
    },
    {
      name: "BMW M2 Competition",
      image: "https://i.bstr.es/highmotor/2018/07/bmw-m2-competition-evento-22.jpg",
      description: "A compact, track-ready sports coupe that combines agility, power, and M engineering. Known for its playful dynamics and driver-focused experience.",
      tag: "Electric",
    },
    {
      name: " BMW M8 Competition",
      image: "https://www.topgear.com/sites/default/files/cars-car/carousel/2019/10/bmw_m8_coupe_fire_red_033.jpg",
      description: " BMW’s flagship luxury sports coupe. Equipped with a 617-hp twin-turbo V8, advanced all-wheel drive, and a refined interior — blending brutal power with grand touring comfort.",
      tag: "Electric",
    }
  ];

  return (
    <div className="sportsPage">
      <Nav />
      <div className="contentWrapper">
        <h2 className="heading">Sports BMW Models</h2>
        <div className="videoSection">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="promoVideo"
  >
    <source src="https://videos.pexels.com/video-files/30604139/13103349_1920_1080_60fps.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <h2 className="heading">Sports BMW Models</h2>
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
