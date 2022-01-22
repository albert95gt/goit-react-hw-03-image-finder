import axios from 'axios';

const AUTH_TOKEN = '24370619-9679c13b7b313e4f61ec3203f';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImagesWithSearchValue = async (searchValue, page) => {
  const response = await axios.get(
    `/?q=${searchValue}&page=${page}&key=${AUTH_TOKEN}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data.hits;
};
