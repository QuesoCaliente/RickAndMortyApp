import TagAlive from "@components/tagAlive";
import styles from "./characterCard.module.css";

interface ICard {
  image: string;
  name: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  status: "Alive" | "Dead" | "unknown";
}

export default function CharacterCard({ image, name, gender, status }: ICard) {
  const genderTranslate = {
    Female: "Femenino",
    Male: "Masculino",
    Genderless: "Sin genero",
    unknown: "Desconocido",
  };

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
            <span className={styles.card_text}>{genderTranslate[gender]}</span>
          </div>
        </div>
      </div>
    </article>
  );
}