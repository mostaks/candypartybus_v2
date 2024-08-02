"use client";
import React, {useEffect, useRef, useState} from "react";
import styles from "./header.module.css";
import Link from "next/link";
import {usePathname} from "next/navigation";

const routes = [
    {name: "home", path: "/"},
    {name: "book", path: "/book-your-event"},
    {name: "about", path: "/about-us"},
    {name: "gallery", path: "/gallery"},
    {
        name: "what we offer",
        path: "/what-we-offer",
        items: [
            {name: "birthday parties", path: "/themed-party-bus"},
            {name: "bucks and hens", path: "/vip-party-bus"},
            {name: "school formals", path: "/formal-bus-rental"},
            {name: "weddings and engagements", path: "/wedding-transportation"},
            {name: "corporate events", path: "/corporate-event-transport"},
            {
                name: "airport and cruis ship transfers",
                path: "/airport-bus-transfer",
            },
        ],
    },
    {name: "our buses", path: "/bus-fleet"},
];

const socialLinks = [
    {
        name: "facebook",
        url: "http://facebook.com/profile.php?id=100062963242877",
        image: "facebook.png",
    },
    {
        name: "insta",
        url: "http://instagram.com/candypartybus",
        image: "instagram.png",
    },
    {
        name: "google",
        url: "https://maps.app.goo.gl/tFi3VTDPjrJZqD89A",
        image: "google.png",
    },
];

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const headerRef = useRef(null);
    const pathname = usePathname();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const toggleHeader = () => {
        setMobileDropdownOpen(!mobileDropdownOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    const handleCallNow = () => {
        window.open("tel:+61434222343");
    }

    useEffect(() => {
        document.body.addEventListener("scroll", handleScroll);

        return () => document.body.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={headerRef} className={styles.container}>
            <div className={`${isScrolled ? styles.hidden : styles.header}`}>
                <Link href="/">
                    <img src="/candy-logo-bus.png" alt="Logo" className={styles.logo}/>
                </Link>
                <div className={styles.headerText}>
                    Our Location
                    <br/>
                    <a
                        href="https://www.google.com/maps/place/Sydney+NSW/@-33.8472349,150.6023383,10z/data=!3m1!4b1!4m6!3m5!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955!16zL20vMDZ5NTc?entry=ttu"
                        rel="noopener noreferer"
                        target="_blank"
                    >
                        Serving Sydney and Surrounding Areas
                    </a>
                </div>
                <div onClick={handleCallNow} className={styles.callToAction}>
                    Call Us Now
                    <br/>
                    0434222343
                </div>
            </div>
            <div className={styles.background}>
                <div className={`${mobileDropdownOpen ? styles.nav : styles.hiddenNav}`}>
                    {routes.map(
                        (
                            item: {
                                name: string;
                                path: string;
                                items?: { name: string; path: string }[];
                            },
                            index
                        ) => {
                            let selected = pathname === item.path
                                || item.items?.some((p) => p.path === pathname);
                            return (
                                <div key={index} className={`${styles.nav} ${selected ? styles.selected : ''}`}>
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
                        }
                    )}
                    <div
                        className={`${styles.socialIcons} ${mobileDropdownOpen ? styles.showMobile : styles.hideMobile}`}>
                        {socialLinks.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={`/${item.image}`}
                                    alt="Logo"
                                    style={{width: 30, height: 30}}
                                />
                            </a>
                        ))}
                    </div>
                    <div onClick={handleCallNow}
                         className={`${styles.callToActionMobile} ${mobileDropdownOpen ? styles.showMobile : styles.hideMobile}`}>
                        Call Us Now
                        <br/>
                        0434222343
                    </div>
                    <i onClick={toggleHeader}
                       className={`${mobileDropdownOpen ? styles.showMobile : styles.hideMobile} bars icon`}></i>
                </div>
                <div className={styles.socialIcons}>
                    {socialLinks.map((item, index) => (
                        <a
                            key={index}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`/${item.image}`}
                                alt="Logo"
                                style={{width: 30, height: 30}}
                            />
                        </a>
                    ))}
                </div>
                <i onClick={toggleHeader}
                   className={`${mobileDropdownOpen ? styles.hideMobile : styles.showMobile} bars icon`}></i>
            </div>
        </div>
    );
};

export default Header;
