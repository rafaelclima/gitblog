import { useState } from 'react';
import { useFetchRepoData } from '../services/fetchData';
interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
}
export function Repos() {
  const [page, setPage] = useState(1);
  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useFetchRepoData(page);

  if (isPending) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Error: {error.message}</p>;
  }
  console.log();

  return (
    <main>
      <section className=" w-full grid sm:grid-cols-2 gap-4 md:gap-8 justify-items-center ">
        {data?.data.map((repo: Repo) => (
          <div
            key={repo.id}
            className=" w-full flex flex-col justify-center gap-5 p-8 rounded-[10px] bg-base-post ">
            <div className=" flex justify-between items-center ">
              <h2 className=" text-base-title font-bold text-xl leading-160 ">
                {repo.name}
              </h2>
              <span className=" text-base-span font-regular text-sm leading-160 ">
                {repo.created_at}
              </span>
            </div>
            <p className=" text-base-span font-regular text-base leading-160 line-clamp-4 ">
              {repo.description}
            </p>
          </div>
        ))}
      </section>

      <div className=" w-1/2 ml-auto flex items-center justify-evenly mt-6 mb-16 ">
        <button
          type="button"
          onClick={() => setPage((prev: number) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={` text-base-text font-semibold focus:outline-none  
          ${page === 1 ? ' text-base-label cursor-not-allowed' : 'text-base-text hover:text-base-label'}`}>
          Voltar
        </button>

        <span className=" text-base-title text-base ">
          {isFetching ? 'Carregando...' : page}
        </span>

        <button
          type="button"
          onClick={() => {
            data?.hasMore && setPage((prev: number) => prev + 1);
          }}
          disabled={!data?.hasMore}
          className={` text-base-text font-semibol focus:outline-none  
          ${isPlaceholderData || !data?.hasMore ? 'text-base-label cursor-not-allowed' : 'text-base-text hover:text-base-label'}`}>
          Próximo
        </button>
      </div>
    </main>
  );
}
