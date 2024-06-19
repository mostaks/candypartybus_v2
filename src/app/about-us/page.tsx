import React from 'react'
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider from "@/components/divider";
import ColumnSplit from "@/components/columnSplit";
import Footer from "@/components/footer";

const page = () => {
  return (
      <main className={styles.main}>
          <Header/>
          <Hero/>
          <Divider/>
          <ColumnSplit/>
          <Divider/>
          <Footer />
      </main>
  )
}

export default page
