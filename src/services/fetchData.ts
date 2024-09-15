import { keepPreviousData, useQuery } from '@tanstack/react-query';

import axios from 'axios';

const BASE_URL = 'https://api.github.com/users/maykbrito';
//https://api.github.com/users/rafaelclima

export function useFetchData() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const response = await axios.get(BASE_URL);
      return response.data;
    },
  });
}

const fetchRepos = async (page: number) => {
  const { data, headers } = await axios.get(`${BASE_URL}/repos?page=${page}&per_page=6`);
  const hasMore = headers.link?.includes('rel="next"');
  return { data, hasMore };
};

export const useFetchRepoData = (page: number) => {
  return useQuery({
    queryKey: ['repos', page],
    queryFn: () => fetchRepos(page),
    placeholderData: keepPreviousData,
  });
};

// export function useFetchRepoData() {
//   return useQuery({
//     queryKey: ['repos'],
//     queryFn: async () => {
//       const response = await axios.get(`${BASE_URL}/repos`);
//       return response.data;
//     },
//   });
// }
