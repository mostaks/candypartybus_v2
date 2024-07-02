"use client";
import React, { useEffect, useState } from "react";
import styles from "./hero.module.css";

const images = ["/home/hero-1.jpg", "/home/hero-2.jpg", "/home/hero-3.jpg"];

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
        <img
          style={{
            width: "20%",
            marginTop: 60,
            marginBottom: 20,
          }}
          src={"/palm-trees.svg"}
        />
        <div className={styles.title}>WELCOME TO CANDY PARTY BUS:</div>
        <div className={styles.subtitle}>
          <span>YOUR </span>
          <span style={{ color: "rgb(70, 197, 231)" }}>RETRO </span>
          <span>RIDE TO EPIC MEMORIES!</span>
        </div>

        <a href="/book-your-event" className={styles.button}>
          All Aboard the Candy Party Bus Express!
        </a>
      </div>
    </div>
  );
};

export default Hero;
