export const getApiCharactersByNameStatusGender = async (
  name: string,
  status: string,
  gender: string,
  page: number
) => {
  const helperStatus = name !== '' ? '&' : '?';
  const helperGender = status !== 'all' ? '&' : '?';
  const helperPage = gender !== 'all' ? '&' : '?';
  const queryStatus = status !== 'all' ? `${helperStatus}status=${status}` : '';
  const queryGender = gender !== 'all' ? `${helperGender}gender=${gender}` : '';
  const querySearch = name !== '' ? `?name=${name}` : '';
  const queryPage = page !== 1 ? `${helperPage}page=${page}` : '';
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${querySearch}${queryStatus}${queryGender}${queryPage}`
  );
  if (!response.ok) {
    throw new Error('No se encontro ningun personaje');
  }
  console.log(
    `https://rickandmortyapi.com/api/character/${querySearch}${queryStatus}${queryGender}${queryPage}`
  );
  const data = await response.json();
  return data;
};
