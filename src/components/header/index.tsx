"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Link from "next/link";

const routes = [
  { name: "home", path: "/" },
  { name: "book", path: "/book-your-event" },
  { name: "about", path: "/about-us" },
  { name: "gallery", path: "/gallery" },
  {
    name: "what we offer",
    path: "/",
    items: [
      { name: "birthday parties", path: "/themed-party-bus" },
      { name: "bucks and hens", path: "/vip-party-bus" },
      { name: "school formals", path: "/formal-bus-rental" },
      { name: "weddings and engagements", path: "/wedding-transportation" },
      { name: "corporate events", path: "/corporate-event-transport" },
      {
        name: "airport and cruis ship transfers",
        path: "/airport-bus-transfer",
      },
    ],
  },
  { name: "our buses", path: "/bus-fleet" },
];

const socialLinks = [
  {
    name: "facebook",
    url: "http://facebook.com/profile.php?id=100062963242877",
  },
  { name: "insta", url: "http://instagram.com/candypartybus" },
  { name: "google", url: "https://maps.app.goo.gl/tFi3VTDPjrJZqD89A" },
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    console.log("HELLO");
    document.addEventListener("scroll", () => console.log('HELLO'));
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${isScrolled ? styles.hidden : styles.header}`}>
        <Link href="/">
          <img src="/candy-logo-bus.webp" alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles.headerText}>
          Our Location
          <br />
          <a
            href="https://www.google.com/maps/place/Sydney+NSW/@-33.8472349,150.6023383,10z/data=!3m1!4b1!4m6!3m5!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955!16zL20vMDZ5NTc?entry=ttu"
            rel="noopener noreferer"
            target="_blank"
          >
            Serving Sydney and Surrounding Areas
          </a>
        </div>
        <a href="tel:+1234567890" className={styles.callToAction}>
          Call Us Now
        </a>
      </div>
      <div className={styles.background}>
        <div className={styles.nav}>
          {routes.map(
            (
              item: {
                name: string;
                path: string;
                items?: { name: string; path: string }[];
              },
              index
            ) => (
              <div key={index} className={styles.nav}>
                {item.items ? (
                  <div
                    className={styles.dropdownToggle}
                    onClick={toggleDropdown}
                  >
                    {item.name}
                    {dropdownOpen && (
                      <div className={styles.dropdownMenu}>
                        {item.items.map((subItem) => (
                          <Link
                            className={styles.nav}
                            key={subItem.name}
                            href={subItem.path}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.path}>{item.name}</Link>
                )}
              </div>
            )
          )}
        </div>
        <div className={styles.socialIcons}>
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
  );
};

export default Header;
