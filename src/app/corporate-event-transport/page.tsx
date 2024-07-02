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
        body="Planning a corporate seminar, convention, conference, or company retreat? Candy Party Buses bring a touch of excitement and functionality to your corporate events. With our range of charter buses, we cater to your every need, ensuring a seamless and enjoyable experience. We serve Sydney and the surrounding areas. Give us a call today at 0434 222 343."
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
        title="Make Your Corporate Event Memorable!"
        body="Ready to add a touch of excitement to your corporate affairs? Contact us now to book your Candy Party Bus and elevate your corporate event into an experience that balances professionalism and fun!"
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
