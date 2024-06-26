import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
          }}
        >
          <div className={styles.nav}>
            {["home", "book", "about", "contact"].map((item, index) => (
              <div key={index} className={styles.nav}>
                <Link href={`/${item}`}>
                    {item}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.nav}>
            {["facebook", "insta", "google"].map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
