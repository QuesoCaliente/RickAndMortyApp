import React from "react";
import styles from "./tagAlive.module.css";

interface TagAlive {
  alive: "Alive" | "Dead" | "unknown";
}

export default function TagAlive({ alive }: TagAlive) {
  return (
    <div className={styles.container}>
      <div
        className={
          alive === "Alive" ? styles.circle_alive : styles.circle_death
        }
      ></div>
      <span className={styles.text}>{alive}</span>
    </div>
  );
}
