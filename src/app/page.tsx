import styles from "./page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header/>
            <Hero/>
            <Divider/>
            <ColumnSplit/>
            <Divider/>
            <Footer />
        </main>
    );
}
