import React from 'react';
import styles from "@/app/page.module.css";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Divider from "@/components/divider";
import Form from "@/components/form";
import Footer from "@/components/footer";

const page = () => {
  return (
      <main className={styles.main}>
          <Header/>
          <Hero/>
          <Form />
          <Footer />
      </main>
  )
}

export default page;
