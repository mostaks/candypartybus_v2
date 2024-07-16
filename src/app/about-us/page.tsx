import React from "react";
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider, { SplitSide } from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import Footer from "@/components/footer";
import Column from "@/components/column";

const page = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Divider
        splitSide={SplitSide.WeirdRight}
        body={`At Candy Party Bus, we're not your run-of-the-mill transport service. Imagine a party on wheels, led by seasoned rave enthusiasts, promising an unforgettable night out. We get the disappointment of lacklustre buses posing as top-notch party rides. That's where we step in – setting a new standard as the "casual professionals."`}
      />
      <ColumnSplit
        contents={[
          {
            title: "Services We Offer",
            description:
              "Step into our fleet of party buses, each designed to cater to a variety of events and preferences. From birthdays to weddings, corporate events to wild nights out, our buses offer unique features that promise an experience like no other. Whether you’re seeking a smaller, tamer gathering or an all-out extravaganza, Candy Party Bus has the ride for you.",
          },
          {
            title: "Our Commitment to Quality",
            description:
              "We believe that every event, regardless of size, deserves the Candy Party Bus touch. Our commitment to quality isn’t just about flashy lights and booming sound systems—it’s about ensuring that your vision becomes a reality. We sweat the details so that your celebration is exactly as you’ve dreamed, and perhaps even more.",
          },
        ]}
        src="/stage-bus.jpeg"
      />
      <Column
        title="Customer Satisfaction"
        description="The heart of Candy Party Bus lies in the satisfaction of our customers. Each successful event is a testament to our dedication to creating not just parties, but experiences that leave smiles on faces and memories that linger."
      />
      <Divider
        splitSide={SplitSide.WeirdRight}
        body="Ready to embark on an '80s-inspired adventure? Let's plan your unforgettable party together!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
