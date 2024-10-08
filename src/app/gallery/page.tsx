"use client";
import React from "react";
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

let images = [];

for (var i = 3; i <= 31; i++) {
    switch (i) {
        case 14:
        case 13:
        case 18:
        case 29:
            continue;
        default:
            images.push({
                original: `/photos/${i}.jpg`,
                thumbnail: `/photos/${i}.jpg`,
            });
            break;
    }
}

const page = () => {
    return (
        <main className={styles.main}>
            <Header/>
            <div style={{ position: 'relative', width: '100%', height: '100%', }}>
                <ReactImageGallery
                    items={images}
                    autoPlay={true}
                    slideInterval={10000}
                    showFullscreenButton={true}
                />
            </div>
            <Footer/>
        </main>
    );
};

export default page;
