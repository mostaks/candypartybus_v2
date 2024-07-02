'use client';
import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";

const images = [
  "/path/to/your/background-image1.jpg",
  "/path/to/your/background-image2.jpg",
  "/path/to/your/background-image3.jpg",
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to Candy Party Bus</h1>
        <p className={styles.subtitle}>
          The ultimate party experience on wheels
        </p>
        <a href="/book-your-event" className={styles.button}>
          Book Now
        </a>
      </div>
    </div>
  );
};

export default Hero;
