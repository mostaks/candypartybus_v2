"use client";
import React, { useState } from "react";
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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.nav}>
          {routes.map((item, index) => (
            <div key={index} className={styles.nav}>
              {item.items ? (
                <div className={styles.dropdownToggle} onClick={toggleDropdown}>
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
          ))}
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
