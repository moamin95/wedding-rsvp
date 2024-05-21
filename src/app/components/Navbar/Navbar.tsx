"use client";

import React, { useState } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import localFont from "next/font/local";

const seasonsBold = localFont({
  src: "../../../../public/TheSeasonsRegular.ttf",
});
const seasonsLight = localFont({
  src: "../../../../public/TheSeasonsLight.ttf",
});

const Navbar = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  const menuItems = [
    { id: 1, title: "home", path: "/" },
    { id: 2, title: "program", path: "/" },
    { id: 3, title: "RSVP", path: "/" },
    { id: 4, title: "faqs", path: "/" },
  ];

  const motionVariants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        ease: "easeOut",
        type: "spring",
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0,
        duration: 0,
      },
    },
  };

  const listItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0,
      },
    },
  };

  return (
    <div
      className={`${Styles.navbar} ${burgerMenuActive ? Styles.active : ""}`}
    >
      <div className={Styles.navigation}>
        <button
          className={`${Styles.button} ${seasonsBold.className} text-3xl font-bold`}
        >
          <a
            href={'/'}
          >
            AP
          </a>
        </button>
        <div
          className={Styles.burgerMenuContainer}
          onClick={() => toggleBurgerMenu()}
        >
          <div className={Styles.burgerMenuTrigger}></div>
          <div className={Styles.burgerMenu}></div>
        </div>
      </div>
      <div className={Styles.content}>
        <motion.ul
          animate={burgerMenuActive ? "open" : "closed"}
          variants={motionVariants}
        >
          {menuItems.map((item) => (
            <motion.li variants={listItemVariants} key={item.id}>
              <a
                className={`${seasonsLight.className} text-sm tracking-wide uppercase`}
                href={item.path}
              >
                {item.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
