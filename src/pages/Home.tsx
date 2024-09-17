import {
  ArrowSquareOut,
  ArrowsClockwise,
  FileCode,
  GitFork,
  Star,
} from '@phosphor-icons/react';
import type { FormEvent, ReactNode } from 'react';

import { useFetchMostPopular } from '../services/fetchData';

interface Repo {
  language: ReactNode;
  updated_at: string | number | Date;
  owner: {
    company: string;
    login: ReactNode;
    bio: string;
    avatar_url: string | undefined;
  };
  url: string | undefined;
  company: string;
  followers: ReactNode;
  login: ReactNode;
  bio: ReactNode;
  avatar_url: string | undefined;
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
}

export const Home = () => {
  const { data, isLoading, isError, error } = useFetchMostPopular();

  if (isLoading) {
    return (
      <p className=" text-center text-base-text text-lg font-bold leading-160">
        Loading...
      </p>
    );
  }
  if (isError) {
    return (
      <p className=" text-center text-base-text text-lg font-bold leading-160">
        Error: {error.message}
      </p>
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log(event);
  }

  return (
    <main className=" max-w-[960px] m-auto">
      <form
        onSubmit={handleSubmit}
        className=" flex items-center justify-center w-1/2 mx-auto mt-[-24px] gap-3 mb-12">
        <input
          className=" w-full bg-base-input rounded-[6px] px-4 py-3 text-base-text placeholder-base-label font-regular text-base leading-160 border border-base-border"
          type="search"
          name="search"
          id="search"
          placeholder="Busque por um perfil do GitHub"
        />
        <button
          type="submit"
          className=" bg-base-input text-base-title border border-base-border hover:bg-base-post transition-colors px-4 py-3 rounded-[6px] font-bold text-sm leading-160">
          Buscar
        </button>
      </form>

      <section>
        <div className=" flex flex-col gap-1 mb-4">
          <h2 className=" text-base-subtitle text-lg font-bold leading-160">
            Os 10 mais
          </h2>
          <span className=" text-base-text text-base font-regular leading-160">
            Os 10 repositórios mais estrelados do GitHub.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data?.items?.map((profile: Repo) => (
            <div
              key={profile.id}
              className="bg-base-profile shadow-custom rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg duration-300 min-h-[320px]">
              <div className="flex flex-col p-4 h-full justify-between">
                {/* Avatar e Nome */}
                <div className="flex items-center space-x-2">
                  <img
                    src={profile.owner.avatar_url}
                    alt="Foto do perfil do GitHub"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-base-blue"
                  />
                  <div className="flex flex-col space-y-1">
                    <h2 className="font-bold text-lg text-base-title leading-tight">
                      {profile.name}
                    </h2>
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-base-blue hover:underline">
                      <span>GitHub</span>
                      <ArrowSquareOut
                        size={16}
                        weight="bold"
                      />
                    </a>
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-sm text-base-title leading-snug line-clamp-4">
                  {profile.description || 'Sem descrição disponível.'}
                </p>

                {/* Informações adicionais */}
                <footer className="grid grid-cols-2 gap-4">
                  <div
                    className="flex items-center space-x-2"
                    title="Estrelas">
                    <Star
                      size={20}
                      color="#f4f601"
                      weight="fill"
                    />
                    <p className="text-sm text-base-subtitle">
                      {profile.stargazers_count}
                    </p>
                  </div>

                  <div
                    className="flex items-center space-x-2"
                    title="Forks">
                    <GitFork
                      size={20}
                      color="#3a536b"
                      weight="fill"
                    />
                    <p className="text-sm text-base-subtitle">{profile.forks_count}</p>
                  </div>

                  <div
                    className="flex items-center space-x-2"
                    title="Atualizado em">
                    <ArrowsClockwise
                      size={20}
                      color="#3A536B"
                      weight="fill"
                    />
                    <p className="text-sm text-base-subtitle">
                      {new Date(profile.updated_at).toLocaleDateString('pt-BR')}
                    </p>
                  </div>

                  <div
                    className="flex items-center space-x-2"
                    title="Linguagem principal">
                    <FileCode
                      size={20}
                      color="#3A536B"
                      weight="fill"
                    />
                    <p className="text-sm text-base-subtitle">
                      {profile.language || 'Not specified'}
                    </p>
                  </div>
                </footer>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
