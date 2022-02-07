import React, { useState, useEffect } from "react";
import Image from "next/image";

import { photos } from "../src/photos";

const styles = {
  text: {
    alignText: "center",
  },
};

const PHOTO_RADIUS = 75;
const COUNT = 7;

const Pibes = () => {
  const [circleRadius, setCircleRadius] = useState(0);

  useEffect(() => {
    const width = (window.innerWidth - 32) / 2;

    setCircleRadius(width);
  }, []);

  return (
    <div className="container">
      {photos.map((photo, index) => {
        const difference = index - Math.floor(COUNT / 2);
        const distance = difference * PHOTO_RADIUS * 2;

        return (
          <div
            key={photo.slice(5)}
            className="photo_container"
            style={{
              position: "absolute",
              top: 0,
              left: circleRadius + distance - PHOTO_RADIUS,
            }}
          >
            <Image
              src={photo}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="photo"
              alt="photo"
            />
          </div>
        );
      })}
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState("");

  useEffect(() => {
    const s = setTimeout(() => {
      const now = new Date().getTime();
      const trip = new Date("3/4/2022").getTime();
      const diff = trip - now;
      const diffCount = Math.floor(diff / (1000 * 60 * 60 * 24));

      setCounter(diffCount.toString());
    }, 1000);

    return () => clearTimeout(s);
  });

  return (
    <div>
      <Pibes />
      <p className="title">Viajamos en {counter} dias</p>
    </div>
  );
};

export default Counter;
