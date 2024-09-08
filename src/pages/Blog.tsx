import { ArrowSquareOut, Building, GithubLogo, UsersThree } from '@phosphor-icons/react';

import avatar from '../assets/avatar.png';

export const Blog = () => {
  return (
    <main className=" max-w-[864px] m-auto mt-[-74px]">
      <section className=" flex items-center justify-between w-full h-[212px] gap-8 rounded-[10px] bg-base-profile shadow-custom opacity-90 p-8 pl-10 mb-[72px]">
        <img
          src={avatar}
          className=" w-[9.25rem] h-[9.25rem] rounded-lg  "
          alt="Foto do perfil do github"
        />
        <div className=" flex flex-col justify-between items-start ">
          <div className=" flex items-center justify-between w-full ">
            <h2 className=" font-bold text-2xl leading-{130} mb-2 text-base-title ">
              Nome do desenvolvedor
            </h2>
            <span className=" flex items-center gap-1 uppercase text-xs font-bold leading-160 text-base-blue">
              GitHub{' '}
              <ArrowSquareOut
                size={12}
                weight="bold"
              />
            </span>
          </div>
          <p className=" font-normal text-base leading-160 text-base-title mb-6">
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa
            quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>

          <footer className=" flex justify-between items-center gap-6">
            <div className=" flex justify-center items-center gap-2">
              <GithubLogo
                size={18}
                color="#3A536B"
                weight="fill"
              />
              <p className=" font-normal text-base leading-160 text-base-subtitle">
                Usuário do Git
              </p>
            </div>
            <div className=" flex justify-center items-center gap-2">
              <Building
                size={18}
                color="#3A536B"
                weight="fill"
              />
              <p className=" font-normal text-base leading-160 text-base-subtitle">
                Empresa
              </p>
            </div>
            <div className=" flex justify-center items-center gap-2">
              <UsersThree
                size={18}
                color="#3A536B"
                weight="fill"
              />
              <p className=" font-normal text-base leading-160 text-base-subtitle">
                <span>XX</span> seguidores
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
            <span>XX</span> publicações
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

      <section className=" grid grid-cols-2 gap-8 justify-items-center mb-[234px] ">
        <div className=" flex flex-col justify-center gap-5 p-8 rounded-[10px] bg-base-post ">
          <div className=" flex justify-between items-center ">
            <h2 className=" text-base-title font-bold text-xl leading-160 ">
              Nome do post
            </h2>
            <span className=" text-base-span font-regular text-sm leading-160 ">
              há X dias
            </span>
          </div>
          <p className=" text-base-span font-regular text-base leading-160 line-clamp-4 ">
            Programming languages all have built-in data structures, but these often
            differ from one language to another. This article attempts to list the
            built-in data structures available in each programming language.
          </p>
        </div>
        <div className=" flex flex-col justify-center gap-5 p-8 rounded-[10px] bg-base-post ">
          <div className=" flex justify-between items-center ">
            <h2 className=" text-base-title font-bold text-xl leading-160 ">
              Nome do post
            </h2>
            <span className=" text-base-span font-regular text-sm leading-160 ">
              há X dias
            </span>
          </div>
          <p className=" text-base-span font-regular text-base leading-160 line-clamp-4 ">
            Programming languages all have built-in data structures, but these often
            differ from one language to another. This article attempts to list the
            built-in data structures available in each programming language.
          </p>
        </div>
        <div className=" flex flex-col justify-center gap-5 p-8 rounded-[10px] bg-base-post ">
          <div className=" flex justify-between items-center ">
            <h2 className=" text-base-title font-bold text-xl leading-160 ">
              Nome do post
            </h2>
            <span className=" text-base-span font-regular text-sm leading-160 ">
              há X dias
            </span>
          </div>
          <p className=" text-base-span font-regular text-base leading-160 line-clamp-4 ">
            Programming languages all have built-in data structures, but these often
            differ from one language to another. This article attempts to list the
            built-in data structures available in each programming language.
          </p>
        </div>
        <div className=" flex flex-col justify-center gap-5 p-8 rounded-[10px] bg-base-post ">
          <div className=" flex justify-between items-center ">
            <h2 className=" text-base-title font-bold text-xl leading-160 ">
              Nome do post
            </h2>
            <span className=" text-base-span font-regular text-sm leading-160 ">
              há X dias
            </span>
          </div>
          <p className=" text-base-span font-regular text-base leading-160 line-clamp-4 ">
            Programming languages all have built-in data structures, but these often
            differ from one language to another. This article attempts to list the
            built-in data structures available in each programming language.
          </p>
        </div>
      </section>
    </main>
  );
};
