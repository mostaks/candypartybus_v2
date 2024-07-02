import React from "react";
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import Column from "@/components/column";
import Footer from "@/components/footer";

const page = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Divider />

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

      <Divider />
      <Column
        backgroundImage="/"
        title="What's Included in the Birthday Package?"
        description="A fully kitted party bus: Think laser lights, a killer sound system, and a spacious dance floor.
Customised playlists: Your favourite tunes set the mood for an epic celebration.
Flexible routes: We'll take you where you want to go, ensuring the party never stops."
      />
      <Divider />
      <Footer />
    </main>
  );
};

export default page;
