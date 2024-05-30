"use client";

import React from "react";
import Styles from "./ProgressBar.module.scss";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={Styles.progressBar}
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
