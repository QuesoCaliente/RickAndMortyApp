export const getApiCharactersByNameStatusGender = async (
  name: string,
  status: string,
  gender: string,
  page: number
) => {
  const query: {
    [key: string]: string;
  } = {};
  name !== '' && (query['name'] = name);
  status !== 'all' && (query['status'] = status);
  gender !== 'all' && (query['gender'] = gender);
  query['page'] = page.toString();

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?` + new URLSearchParams(query)
  );
  if (!response.ok) {
    throw new Error('No se encontro ningun personaje');
  }
  const data = await response.json();
  return data;
};
