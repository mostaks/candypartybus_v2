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
        body="Ditch the ordinary and arrive at your school formal in absolute style with Candy Party Buses! Serving Sydney and surrounding areas, we offer more than just a ride; it's an adventure, a chance to make your formal night as memorable as possible."
        cta="0434 222 343"
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
      <Column
        title="Efficiency at Its Best:"
        description="We prioritize efficiency without compromising on the fun. Our professional team ensures a smooth journey, from planning your route to dropping you off at your formal venue."
        backgroundImage=""
      />
      <Column
        title="What Our Service Includes"
        description="Impeccably maintained and stylish party buses that set the stage for your grand entrance.
A dependable service that guarantees a safe and enjoyable ride for you and your classmates.
Cost-effective packages tailored to suit your formal night needs."
        backgroundImage=""
      />

      <Divider
        splitSide={SplitSide.WeirdRight}
        title="Book Your School Formal Ride Today!"
        body="Ready to make your school formal an event to remember? Contact us now to reserve your Candy Party Bus! Let's roll into your formal night with style, reliability, and the promise of an unforgettable journey!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
