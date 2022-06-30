import React, { useEffect, useState } from "react";
import Image from "next/image";
import { photos } from "../src/photos";
import { moveAvatars } from "../src/moveAvatars";
import { Countdown } from "./Countdown";

const Counter = () => {
  const [hasClass, setHasClass] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHasClass((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  });

  useEffect(() => {
    moveAvatars();
  }, []);

  return (
    <div>
      <div>
        {photos.map((photo) => (
          <div
            className="photo_container  rotate-scale-down"
            key={photo.slice(5)}
          >
            <Image
              src={photo}
              className="photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="photo"
            />
          </div>
        ))}
      </div>
      <div
        className={["counter_container"]
          .concat(hasClass ? ["shake-lr"] : [])
          .join(" ")}
      >
        <p className="title">ATENCION CUENTA REGRESIVA PARA IBIZA RUMIANTE </p>
        <Countdown />
      </div>
    </div>
  );
};

export default Counter;
