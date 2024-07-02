import styles from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import ColumnVideo from "@/components/columnVideo";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <Divider />
      <ColumnVideo
        title="Setting the Stage for Your Dream Party"
        description="Our fleet of buses isn't just about getting from A to B; they're an adventure waiting to unfold. Whether it's an intimate get-together or an all-out rave, we've got your back."
        src="/"
      />
      <Divider />
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
      <Footer />
    </main>
  );
}
