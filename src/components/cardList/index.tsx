import Card from "@components/card";
import React from "react";
import styles from "./cardList.module.css";

interface ICardList {
  characters: any[];
}

export default function CardList({ characters }: ICardList) {
  return (
    <div className={styles.grid}>
      {characters &&
        characters.map((character) => {
          return <Card key={character.name} {...character} />;
        })}
    </div>
  );
}
