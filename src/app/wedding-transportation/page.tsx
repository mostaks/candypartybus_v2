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
        body={`At Candy Party Buses, we turn your special day into an unforgettable celebration! Serving Sydney and surrounding areas, whether it's saying "I do" or marking the beginning of your love story, our party buses add that extra touch of magic and fun to your wedding or engagement.`}
        cta="0434 222 343"
      />
      <ColumnSplit
        contents={[
          {
            title: "Why Choose Candy Party Buses for Your Big Day?",
            description: "",
          },
          {
            title: "A Dash of Elegance:",
            description:
              "Say goodbye to traditional transport. Our buses offer a unique blend of elegance and fun, making your wedding or engagement even more memorable.",
          },
          {
            title: "Customised Romance:",
            description:
              "We understand that your day is unique. That's why we customise the experience, from the decor to the music, to match your vision of a perfect celebration.",
          },
          {
            title: "Reliability on Your Special Day:",
            description:
              "Count on us for punctuality and efficiency, ensuring you arrive at your wedding venue or engagement party with flair and on time.",
          },
        ]}
        src="/stage-bus.jpeg"
      />
      <Column
        title="What Our Service Includes"
        description="Stunningly decorated party buses that become part of your wedding story's backdrop.
A reliable and professional service that assures a stress-free journey on your special day.
Tailored packages that cater to your specific wedding or engagement needs."
      />

      <Divider
        splitSide={SplitSide.WeirdRight}
        title="Ready to Ride in style?"
        body="Candy Party Bus offers more than just a ride; it's an experience. Book now for an adventure like no other! If it's fun, if it's outrageous!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
