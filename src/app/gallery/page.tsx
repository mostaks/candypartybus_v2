"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

let images = [];

for (var i = 3; i <= 31; i++) {
  images.push({
    original: `/photos/${i}.jpg`,
    thumbnail: `/photos/${i}.jpg`,
  });
}

const page = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <ReactImageGallery items={images} autoPlay={true} />
      <Footer />
    </main>
  );
};

export default page;
