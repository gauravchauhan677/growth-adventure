"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.scss";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const dropdownRefs = {
    treks: useRef(null),
    expeditions: useRef(null)
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeMenu();
        return;
      }

      if (openDropdown) {
        const dropdownRef = dropdownRefs[openDropdown];
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setOpenDropdown(null);
        }
      }
    };

    if (isOpen || openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, openDropdown]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const socialLinks = [
    { icon: <FaInstagram />, url: "https://www.instagram.com/growth_adventure/" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=100072234413841" },
    { icon: <FaWhatsapp />, url: "https://wa.me/919410703518" },
  ];

  return (
    <nav className={styles.navbar} ref={navbarRef}>
      <div className={styles.container}>
        <Link 
          href="/" 
          className={`${styles.logo} ${styles.logoLink}`}
          onClick={closeMenu}
        >
          {/* <Image
            src="/images/logo.png"
            alt="Himalayas Expedition Logo"
            width={80}
            height={80}
            className={styles.logoImage}
            priority
          /> */}
          <span>Growth Adventure</span>
        </Link>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
          <Link
            href="/"
            className={`${styles.navLink} ${
              pathname === "/" ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`${styles.navLink} ${
              pathname.startsWith("/about") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            About
          </Link>

          <div
            className={`${styles.dropdownContainer} ${
              openDropdown === "treks" ? styles.open : ""
            }`}
            ref={dropdownRefs.treks}
          >
            <div className={styles.navLinkWithDropdown}>
              <Link
                href="/treks"
                className={`${styles.navLink} ${
                  pathname.startsWith("/treks") ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Treks
              </Link>
              <button
                className={styles.dropdownToggle}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("treks");
                }}
                aria-expanded={openDropdown === "treks"}
                aria-label="Toggle treks dropdown"
              >
                <FaChevronDown className={styles.dropdownIcon} />
              </button>
            </div>
            <div
              className={`${styles.dropdown} ${
                openDropdown === "treks" ? styles.open : ""
              }`}
            >
              <Link
                href="/treks/gaumukh-tapovan-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Gaumukh Tapovan Trek
              </Link>
              <Link
                href="/treks/kedartal-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Kedartal Trek
              </Link>
              <Link
                href="/treks/kyarkoti-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Kyarkoti Trek
              </Link>
              <Link
                href="/treks/dayara-bugyal-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Dayara Bugyal Trek
              </Link>
              <Link
                href="/treks/gidara-bugyal-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Gidara Bugyal Trek
              </Link>
              <Link
                href="/treks/dodital-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Dodital Trek
              </Link>
              <Link
                href="/treks/nandanvan-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Nandanvan Trek
              </Link>
              <Link
                href="/treks/gaumukh-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Gaumukh Trek
              </Link>
              <Link
                href="/treks/sat-tal-trek"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Sat Tal Trek
              </Link>
            </div>
          </div>

          <div
            className={`${styles.dropdownContainer} ${
              openDropdown === "expeditions" ? styles.open : ""
            }`}
            ref={dropdownRefs.expeditions}
          >
            <div className={styles.navLinkWithDropdown}>
              <Link
                href="/expeditions"
                className={`${styles.navLink} ${
                  pathname.startsWith("/expeditions") ? styles.active : ""
                }`}
                onClick={closeMenu}
              >
                Expeditions
              </Link>
              <button
                className={styles.dropdownToggle}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("expeditions");
                }}
                aria-expanded={openDropdown === "expeditions"}
                aria-label="Toggle expeditions dropdown"
              >
                <FaChevronDown className={styles.dropdownIcon} />
              </button>
            </div>
            <div
              className={`${styles.dropdown} ${
                openDropdown === "expeditions" ? styles.open : ""
              }`}
            >
              <Link
                href="/expeditions/mt-shivling-expedition"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Mt. Shivling Expedtion
              </Link>
              <Link
                href="/expeditions/audens-col-expedition"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Auden&apos;s Col Expedition
              </Link>
              <Link
                href="/expeditions/kalindi-khal-expedition"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Kalindi Khal Expedition
              </Link>
              <Link
                href="/expeditions/meru-expedition"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Meru Expedition
              </Link>
              <Link
                href="/expeditions/mayali-pass-expedition"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Mayali Pass Expedition
              </Link>
              <Link
                href="/expeditions/lamkhaga-pass-expedition"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Lamkhaga Pass Expedition
              </Link>
              <Link
                href="/expeditions/thalay-sagar-circuit"
                className={styles.dropdownLink}
                onClick={closeMenu}
              >
                Thalay Sagar Expedition
              </Link>
            </div>
          </div>

          <Link
            href="/gallery"
            className={`${styles.navLink} ${
              pathname.startsWith("/gallery") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Gallery
          </Link>

          <Link
            href="/blog"
            className={`${styles.navLink} ${
              pathname.startsWith("/blog") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className={`${styles.navLink} ${
              pathname.startsWith("/contact") ? styles.active : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>

          <div className={styles.socialIcons}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={`Social media link ${index}`}
                onClick={closeMenu}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;