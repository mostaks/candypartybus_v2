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
        body="At Candy Party Bus, we redefine the meaning of unforgettable nights, transforming ordinary celebrations into extraordinary memories! Serving Sydney and surrounding areas, whether it's a milestone event or a night of sheer fun with friends, our party buses are the epitome of extraordinary experiences."
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
      <Divider
        splitSide={SplitSide.WeirdRight}
        title="Experience the Extravaganza: Book Your Unforgettable Night!"
        body="Don't settle for an average celebration. Choose Candy Party Bus for an unrivalled experience. Let's create a bucks or hen's night that's not just memorable but an absolute blast!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
