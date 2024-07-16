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
        body="At Candy Party Bus, we redefine the meaning of unforgettable nights, transforming ordinary celebrations into extraordinary memories! Serving Sydney and surrounding areas, whether it's a milestone event or a night of sheer fun with friends, our party buses are the epitome of extraordinary experiences."
        cta="0434 222 343"
      />
      <ColumnSplit
        contents={[
          {
            title: "Tailored Experiences for Special Celebrations",
            description:
              "We specialise in crafting bucks and hen's nights that go beyond the ordinary. Recognising these events as once-in-a-lifetime celebrations, we take pride in curating an experience that exceeds your wildest expectations. Your dreams set the stage, and we bring them to life. From curating the perfect playlist to choosing your destination, every detail is customised to your desires.",
          },
          {
            title: "Party on Wheels: Where Every Moment Counts",
            description:
              "Step aboard our party buses that boast state-of-the-art sound systems, laser lighting, spacious dance floors, and luxurious seating. Immerse yourself in comfort and entertainment as our professional crew takes you on a city tour, ensuring you're at the heart of the hottest nightlife spots, never missing a beat.",
          },
        ]}
        src="/stage-bus.jpeg"
      />
      <Column
        title="An Array of Exciting Activities"
        description="Explore our range of packages, meticulously designed to suit every budget and group size. Whether it's an intimate gathering or a larger-than-life celebration, our party buses are primed to make your night a legendary experience. From bachelor parties to school formals or corporate events, Candy Party Bus promises a hassle-free and memorable journey."
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
