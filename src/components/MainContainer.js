import React from "react";
import "./MainContainer.css";
import win from "../components/image/win.jpg";
import CardMain from "./CardMain.js";

import cars from "../components/image/cars.jpeg";
import ball from "../components/image/ball.jpeg";
import diamond from "../components/image/diamond.jpeg";
import jack from "../components/image/jack.jpg";
import pyramid from "../components/image/pyramid.jpeg";
import flower from "../components/image/flower.jpeg";
import MainRightTop from "./MainRightTop.js";
import MainRightBottom from "./MainRightBottom.js";

function MainContainer() {
  return (
    <div className='mainContainer'>
      <div className='left'>
        <div
          className='banner'
          style={{
            background: `url(${win})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
          }}
        >
          <div className='textContainer'>
            <h1>Round Hell</h1>
            <h2>1.5 ETH</h2>
            <p>Up loaded by Abate Agegnehu</p>
            <div className='bid'>
              <a href='#' className='button1'>
                Bid No
              </a>
              <p>
                Ending in<span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>
        <div className='cards'>
          <div className='filters'>
            <div className='popular'>
              <h2>Feed</h2>
              <a href='#' className='button2'>
                Popular
              </a>
            </div>
            <div className='filter-button'>
              <a href='#' className='button1'>
                All
              </a>
              <a href='#' className='button2'>
                Illustration
              </a>
              <a href='#' className='button2'>
                Art
              </a>
              <a href='#' className='button2'>
                Games
              </a>
            </div>
          </div>
          <main>
            <CardMain imgSrc={cars} title={"Cars"} hearts={"65"} />
            <CardMain imgSrc={jack} title={"Jacket"} hearts={"23"} />
            <CardMain imgSrc={diamond} title={"Diamond"} hearts={"45"} />
            <CardMain imgSrc={ball} title={"Ball"} hearts={"67"} />
            <CardMain imgSrc={flower} title={"Flower"} hearts={"64"} />
            <CardMain imgSrc={pyramid} title={"Pyramid"} hearts={"36"} />
          </main>
        </div>
      </div>
      <div className='right'>
        <MainRightTop />
        <MainRightBottom />
      </div>
    </div>
  );
}

export default MainContainer;
