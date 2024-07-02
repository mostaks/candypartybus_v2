import React from "react";
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider, { SplitSide } from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import Column from "@/components/column";
import Footer from "@/components/footer";

const page = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Divider
        splitSide={SplitSide.WeirdRight}
        body="Got a birthday on the horizon? Elevate the celebration with Candy Party Bus! Serving Sydney and surrounding areas, whether you're marking a milestone or simply eager to make this year's bash legendary, our party buses are your ticket to an unforgettable celebration."
        cta="0434 222 343"
      />

      <ColumnSplit
        contents={[
          {
            title: "Setting the Stage for Your Dream Party",
            description: `Ultimate Party on Wheels:

              Our buses are more than transportation; they're the party! Neon lights, booming sound systems, and dance floors await you and your friends.
  
              Customised Experiences:
  
              Every birthday is unique, so why settle for an average celebration? We tailor the experience to your preferences, from music choices to route planning.
  
              Unmatched Vibes:
  
              We'll whisk you around town, hitting the hottest spots while keeping the party alive inside the bus.
  
              Safety First, Fun Always:
  
              Our professional crew ensures a safe and enjoyable ride so you can focus on celebrating without worry.`,
          },
        ]}
        src="/stage-bus.jpeg"
      />

      <Column
        backgroundImage="/"
        title="What's Included in the Birthday Package?"
        description="A fully kitted party bus: Think laser lights, a killer sound system, and a spacious dance floor.
Customised playlists: Your favourite tunes set the mood for an epic celebration.
Flexible routes: We'll take you where you want to go, ensuring the party never stops."
      />
      <Divider
        splitSide={SplitSide.WeirdRight}
        title="How to Book Your Birthday Ride"
        body="Ready to turn your birthday into an extravaganza? Contact us today to book your Candy Party Bus and celebrate in style! Serving Sydney and surrounding areas, let's create a birthday celebration that's more than just another rotation around the sun – it's an adventure!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
