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

export const useFetchMostPopular = () => {
  return useQuery({
    queryKey: ['mostPopular'],
    queryFn: async () => {
      const response = await axios.get(
        'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&page=1&per_page=10',
      );
      return response.data;
    },
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
