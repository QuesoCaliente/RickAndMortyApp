import TagAlive from "@components/tagAlive";
import React from "react";
import styles from "./card.module.css";

interface ICard {
  image: string;
  name: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  status: "Alive" | "Dead" | "unknown";
}

export default function Card({ image, name, gender, status }: ICard) {
  return (
    <article className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles.card_body}>
        <h2 className={styles.card_title}>{name}</h2>
        <div className={styles.card_details}>
          <div className={styles.card_item}>
            <span className={styles.card_text}>Estado:</span>
            <TagAlive alive={status} />
          </div>
          <div className={styles.card_item}>
            <span className={styles.card_text}>Genero:</span>
            <span className={styles.card_text}>{gender}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
