import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

const socialLinks = [
  {
    name: "facebook",
    url: "http://facebook.com/profile.php?id=100062963242877",
  },
  { name: "insta", url: "http://instagram.com/candypartybus" },
  { name: "google", url: "https://maps.app.goo.gl/tFi3VTDPjrJZqD89A" },
];

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.row}>
          <div className={styles.pink}>Quick Links</div>
          <div className={styles.itemBolder}>
            <Link href={"/"}>{"Home"}</Link>
          </div>
          <div className={styles.itemBolder}>
            <Link href={"/gallery"}>{"Gallery"}</Link>
          </div>
          <div className={styles.itemBolder}>
            <Link href={"/bus-fleet"}>{"Our busses"}</Link>
          </div>
          <div className={styles.itemBolder}>
            <Link href={"/book-your-event"}>{"Book your ride"}</Link>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.pink}>Contact Information</div>
          <div className={styles.item}>Phone: 0434222343</div>
          <div className={styles.item}>Email: someone@candypartybus.com</div>
          <div className={styles.item}>
            Address: Serving Sydney and Surrounding Areas
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.pink}>Business Hours</div>
          <div className={styles.item}>Mon - Sun</div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", gap: "15px" }}>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div>Open 24 hours</div>
        </div>
      </div>
      <div
        className={styles.boohoo}
        style={{
          color: "white",
        }}
      >
        Content, including images, displayed on this website is protected by
        copyright laws. Downloading, republication, retransmission or
        reproduction of content on this website is strictly prohibited.
      </div>
      <div className={styles.boohoo}>Made with ❤️ by Sydney Dev Agency</div>
    </div>
  );
};

export default footer;
