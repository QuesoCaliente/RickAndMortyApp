import styles from "./home.module.css";
import CardList from "../../components/cardList/index";
import Search from "@components/search";
import Select from "../../components/select/index";
import { GENDER_OPTIONS, STATUS_OPTIONS } from "./const";
import { useEffect, useState } from "react";
import { getApiCharacters } from "../../api/characters";
import { getApiCharactersByNameStatusGender } from "../../api/characters/index";
import Loading from "@components/loading";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("all");
  const [status, setStatus] = useState("all");
  const [gender, setGender] = useState("all");
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    getAllCharacters();
  }, []);

  const getAllCharacters = () => {
    getApiCharacters(1).then((response) => {
      setCharacters(response.results);
    });
  };

  const filterCharacters = () => {
    getApiCharactersByNameStatusGender(search, status, gender).then(
      (response) => {
        response.error && setErrors(response.error);
        setCharacters(response.results);
      }
    );
  };

  const isLoading = characters?.length === 0 && !errors;

  const handleFilter = () => {
    setErrors(null);
    if (search === "" && status === "all" && gender === "all") {
      getAllCharacters();
    } else {
      filterCharacters();
    }
  };

  return (
    <main className={styles.container}>
      <Search
        onClick={() => handleFilter()}
        onSearch={(value) => setSearch(value)}
      />
      <div className={styles.selects_container}>
        <Select
          onChange={(value) => setGender(value)}
          options={STATUS_OPTIONS}
        />
        <Select
          onChange={(value) => setStatus(value)}
          options={GENDER_OPTIONS}
        />
      </div>
      {isLoading && <Loading />}
      <CardList characters={characters} />
      {errors && (
        <p className={styles.error}>⚠ No se han encontrado resultados</p>
      )}
    </main>
  );
}
