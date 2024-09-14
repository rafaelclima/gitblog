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
  const { data, isLoading, error } = useFetchRepoData();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  //console.log(data);

  return (
    <section className=" w-full grid sm:grid-cols-2 gap-4 md:gap-8 justify-items-center mb-[234px]">
      {data.map((repo: Repo) => (
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
      )
    </section>
  );
}
