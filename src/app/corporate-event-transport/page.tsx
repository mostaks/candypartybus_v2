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
        body="Planning a corporate seminar, convention, conference, or company retreat? Candy Party Buses bring a touch of excitement and functionality to your corporate events. With our range of charter buses, we cater to your every need, ensuring a seamless and enjoyable experience. We serve Sydney and the surrounding areas. Give us a call today at 0434 222 343."
      />
      <ColumnSplit
        contents={[
          {
            title: "Why Choose Candy Party Buses for Your Corporate Event?",
            description: "",
          },
          {
            title: "Versatile Chartering Options:",
            description:
              "Whether it's a seminar, conference, or company retreat, we have the right bus to meet your specific requirements, ensuring a comfortable and productive journey.",
          },
          {
            title: "Drive-Around Option:",
            description: `Take your corporate event to a new level with our "Drive Around" option. Ideal for groups with no final destination, this unique service allows you to party within the safety of the bus. We drive around for an agreed amount of hours, stopping at your request for food and toilet breaks.`,
          },
          {
            title: "Professionalism Meets Fun:",
            description:
              "We understand the importance of professionalism for corporate events. Rest assured, our services are punctual, efficient, and tailored to ensure a smooth experience while adding an element of fun.",
          },
        ]}
        src="/stage-bus.jpeg"
      />
      <Column
        title="What Our Transport Service Includes"
        description="Fully equipped charter buses that combine comfort and functionality for your corporate needs.
Customizable options, including the drive-around service, to match your event's specific requirements.
Professional and experienced drivers committed to making your corporate event transportation seamless and stress-free."
        backgroundImage=""
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
