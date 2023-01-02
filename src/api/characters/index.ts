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
    const helperStatus = name !== "" ? "&" : "?";
    const helperGender = status !== "all" ? "&" : "?";
    const queryStatus =
      status !== "all" ? `${helperStatus}status=${status}` : "";
    const queryGender =
      gender !== "all" ? `${helperGender}gender=${gender}` : "";
    const querySearch = name !== "" ? `?name=${name}` : "";
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${querySearch}${queryStatus}${queryGender}`
    );
    console.log(
      `https://rickandmortyapi.com/api/character/${querySearch}${queryStatus}${queryGender}`
    );
    const data = await response.json();
    return data;
  } catch (error) {}
};
