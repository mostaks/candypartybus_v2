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
          title="Setting the Stage for Your Dream Party"
          description="Our fleet of buses isn't just about getting from A to B; they're an adventure waiting to unfold. Whether it's an intimate get-together or an all-out rave, we've got your back."
          src="/"
        />
        <Footer />
      </main>
    );
}
