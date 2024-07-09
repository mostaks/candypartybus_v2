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
        body="Candy Party Buses offer hassle-free transfers to and from airports and cruise ship terminals, ensuring you never miss a beat. Serving Sydney and surrounding areas, our commitment is simple: to provide a seamless, reliable, and comfortable travel experience."
        cta="0434 222 343"
      />
      <ColumnSplit
        contents={[
          {
            title: "Why Choose Candy Party Buses for Your Transfers?",
            description: "",
          },
          {
            title: "Punctuality Guaranteed:",
            description:
              "Count on us for timely transfers. We understand the importance of reaching your destination on time and ensuring punctual service for your peace of mind.",
          },
          {
            title: "Comfortable and Efficient Travel:",
            description:
              "OOur buses offer a comfortable and spacious journey, equipped to handle your luggage and provide a relaxing transfer experience.",
          },
          {
            title: "Professional Service, Every Time:",
            description:
              "Expect professionalism from our experienced drivers, who prioritize your safety and comfort throughout your transfer.",
          },
        ]}
        src="/stage-bus.jpeg"
      />
      <Column
        title="What Our Transfer Service Includes"
        description="Effortless Luggage Handling: Our buses accommodate various luggage sizes, ensuring a hassle-free journey without compromising on comfort.
Seamless Airport Pickup: We provide clear instructions for designated meeting points at the airport, ensuring easy access to your Candy Party Bus upon arrival.
Flight Monitoring Capabilities: Candy Party Buses offers flight monitoring services to adjust transfers in case of delays or early arrivals, ensuring a smooth experience.
Additional Comforts: Enjoy complimentary refreshments or Wi-Fi availability onboard, adding to your convenience during the journey."
        backgroundImage=""
      />
      <Divider
        splitSide={SplitSide.WeirdRight}
        title="Book Your Seamless Transfer Today!"
        body="Candy Party Buses offer hassle-free transfers to and from airports and cruise ship terminals, ensuring you never miss a beat. Serving Sydney and surrounding areas, our commitment is simple: to provide a seamless, reliable, and comfortable travel experience."
        cta="0434 222 343"
      />
      <Footer />
    </main>
  );
};

export default page;
