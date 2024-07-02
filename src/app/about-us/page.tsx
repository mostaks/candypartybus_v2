import React from "react";
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider, { SplitSide } from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import Footer from "@/components/footer";

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
            title: "Setting the Stage for Your Dream Party",
            description:
              "Our fleet of buses isn't just about getting from A to B; they're an adventure waiting to unfold. Whether it's an intimate get-together or an all-out rave, we've got your back.",
          },
          {
            title: "Party Bus Services That Make Us Stand Out",
            description:
              "One-Way & Return: Whether it's a single ride or a round trip, our service ensures you're at your destination on time. Drive-Around: Need the bus to be the party? Cruise around town, stop for refreshments, and keep the celebration going – all within the safety of our buses.",
          },
        ]}
        src="/stage-bus.jpeg"
      />
      <Divider
        splitSide={SplitSide.WeirdRight}
        body="Candy Party Bus offers more than just a ride; it's an experience. Book now for an adventure like no other! If it's fun, if it's outrageous!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
