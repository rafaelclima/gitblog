import { ArrowSquareOut, Building, GithubLogo, UsersThree } from '@phosphor-icons/react';

import { Repos } from '../components/Repos';
import { useFetchData } from '../services/fetchData';

export const Blog = () => {
  const { data, isLoading, error } = useFetchData();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  //console.log(data);

  return (
    <main className=" max-w-[864px] m-auto mt-[-74px]">
      <section className=" flex items-center justify-between w-full h-[212px] gap-8 rounded-[10px] bg-base-profile shadow-custom opacity-90 p-8 pl-10 mb-[72px]">
        <img
          src={data.avatar_url}
          className=" w-[9.25rem] h-[9.25rem] rounded-lg  "
          alt="Foto do perfil do github"
        />
        <div className=" flex flex-col justify-between items-start ">
          <div className=" flex items-center justify-between w-full ">
            <h2 className=" font-bold text-2xl leading-{130} mb-2 text-base-title ">
              {data.name}
            </h2>
            <span className=" flex items-center gap-1 uppercase text-xs font-bold leading-160 text-base-blue">
              <a
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer">
                GitHub
              </a>
              <ArrowSquareOut
                size={12}
                weight="bold"
              />
            </span>
          </div>
          <p className=" font-normal text-base leading-160 text-base-title mb-6">
            {data.bio}
          </p>

          <footer className=" flex justify-between items-center gap-6">
            <div className=" flex justify-center items-center gap-2">
              <GithubLogo
                size={18}
                color="#3A536B"
                weight="fill"
              />
              <p className=" font-normal text-base leading-160 text-base-subtitle">
                {data.login}
              </p>
            </div>
            <div className=" flex justify-center items-center gap-2">
              <Building
                size={18}
                color="#3A536B"
                weight="fill"
              />
              <p className=" font-normal text-base leading-160 text-base-subtitle">
                {data.company || 'Não informado'}
              </p>
            </div>
            <div className=" flex justify-center items-center gap-2">
              <UsersThree
                size={18}
                color="#3A536B"
                weight="fill"
              />
              <p className=" font-normal text-base leading-160 text-base-subtitle">
                <span>{data.followers}</span> seguidores
              </p>
            </div>
          </footer>
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center w-full gap-3 mb-12">
        <div className=" flex items-center justify-between w-full ">
          <h3 className=" text-base-subtitle text-lg font-bold leading-160 ">
            Publicações
          </h3>
          <p className=" text-base-span text-sm font-regular leading-160 ">
            <span>{data.public_repos}</span> publicações
          </p>
        </div>

        <input
          className=" w-full bg-base-input rounded-[6px] px-4 py-3 text-base-text placeholder-base-label font-regular text-base leading-160 border border-base-border"
          type="search"
          name="search"
          id="search"
          placeholder="Buscar conteúdo"
        />
      </section>

      <Repos />
    </main>
  );
};
