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
        body="At Candy Party Bus, we boast a fleet ready to take your celebrations to the next level, serving Sydney and surrounding areas. From untamed groups to more intimate gatherings, our buses are designed to ensure your party never stops."
      />
      <ColumnSplit
        contents={[
          {
            title: "80 Passenger Full-Size Limo Party Bus",
            description:
              "Get ready for the ultimate party experience! Our soon-to-arrive 80-passenger full-size limo party bus is a marvel on wheels. Decked out with a completely covered, trippy interior design, a sprawling dance floor adorned with multiple dance poles, and DJ compatibility, this bus is primed for the wildest celebrations. The rear wall hosts an insane light show sound system and bespoke party lights/lasers, creating an atmosphere unlike any other party bus for hire. ",
          },
        ]}
      />
      <Column
        title="24-Seater Mini Party Bus"
        paragraphs={[
          "Our 24-seater mini-party bus is the perfect choice for smaller yet equally vibrant groups. This bus has been crafted from the inside out to cater to your party needs, featuring laser lights, a booming sound system, and a trippy interior design. Don't be fooled by its size—the sound system might be too big for a bus this size! Party lights and lasers elevate the atmosphere, ensuring your celebration is unforgettable.",
          "Whether you're seeking the grandeur of our forthcoming 80-passenger marvel or the intimacy of our 24-seater mini-party bus, Candy Party Bus guarantees an electrifying ride for your group.",
        ]}
      />
      <div style={{ paddingTop: 100 }} />
      <Divider
        splitSide={SplitSide.WeirdRight}
        body="Contact us now to inquire about availability and book your preferred party bus for an '80s-themed adventure!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
