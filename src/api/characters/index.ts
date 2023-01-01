export const getApiCharacters = async (page: number) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getApiCharactersByNameStatusGender = async (
  name: string,
  status: string,
  gender: string
) => {
  try {
    const queryStatus = status !== "all" ? `&status=${status}` : "";
    const queryGender = gender !== "all" ? `&gender=${gender}` : "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}${queryStatus}${queryGender}`
    );
    const data = await response.json();
    return data;
  } catch (error) {}
};
