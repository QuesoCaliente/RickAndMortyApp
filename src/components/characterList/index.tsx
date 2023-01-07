import CharacterCard from '@components/characterCard';
import styles from './characterList.module.css';

interface ICharacterList {
  characters: any[];
}

export default function CharacterList({ characters }: ICharacterList) {
  console.log(characters);
  return (
    <div className={styles.grid}>
      {characters &&
        characters.map(character => {
          return <CharacterCard key={character.id} {...character} />;
        })}
    </div>
  );
}
