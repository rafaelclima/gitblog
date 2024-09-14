import { useQuery } from '@tanstack/react-query';
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

export function useFetchRepoData() {
  return useQuery({
    queryKey: ['repos'],
    queryFn: async () => {
      const response = await axios.get(`${BASE_URL}/repos`);
      return response.data;
    },
  });
}
