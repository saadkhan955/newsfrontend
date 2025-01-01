import React from "react";
import OwlCarousel from "react-owl-carousel";

import "../../assets/css/owl.carousel.min.css";
import { Link } from "react-router-dom";

function MainSlider(props) {
  const { maincarousel } = props.newsData;
  console.log({ maincarousel });

  const options = {
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    center: true,
  };
  return (
    <>
      <OwlCarousel
        className="owl-carousel main-carousel owl-loaded owl-drag"
        {...options}
      >
        {maincarousel.map((element, index) => (
          <div
            key={index}
            className="position-relative overflow-hidden"
            style={{ height: "500px" }}
          >
            <img
              className="img-fluid h-100"
              src={element.largeImage}
              style={{ objectFit: "cover" }}
              alt={element.title}
            />
            <div className="overlay">
              <div className="mb-2">
                <Link
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                  to="/"
                >
                  {element.category}
                </Link>
                <Link className="text-white">{element.title}</Link>
              </div>
              <Link className="h2 m-0 text-white text-uppercase font-weight-bold">
                {element.title}
              </Link>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </>
  );
}

export default MainSlider;
