import React from "react";
import { FeaturedData } from "./data/FeaturedData";
import "../stylesheets/Featured.css";

function Featured() {
  return (
    <div className="featured">
      <h3 className="featured-text">Featured in</h3>
      <div className="slider">
        <div className="slide-track">
          {FeaturedData.map((item) => {
            return (
              <div className="slide">
                <img src={item.img} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Featured;
