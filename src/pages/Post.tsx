import {
  ArrowSquareOut,
  Building,
  CaretLeft,
  GithubLogo,
  UsersThree,
} from '@phosphor-icons/react';

import { Link } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Post = () => {
  return (
    <main className=" max-w-[864px] m-auto mt-[-74px]">
      <section className=" flex flex-col w-full rounded-[10px] bg-base-profile shadow-custom opacity-100 p-8">
        <header className=" flex items-center justify-between w-full mb-5 ">
          <div className=" flex items-center justify-center gap-1 ">
            <CaretLeft
              size={12}
              color="#3294F8"
              weight="bold"
            />
            <Link
              to="/"
              className=" text-base-blue font-bold text-xs leading-160 ">
              Voltar
            </Link>
          </div>

          <div className=" flex items-center justify-center gap-1 ">
            <p className=" text-base-blue font-bold text-xs leading-160 uppercase">
              ver no github
            </p>
            <ArrowSquareOut
              size={12}
              color="#3294F8"
              weight="bold"
            />
          </div>
        </header>

        <div className=" mb-2 ">
          <h2 className=" font-bold text-2xl leading-{130} text-base-title ">
            JavaScript data types and data structures
          </h2>
        </div>

        <footer className=" flex gap-8 ">
          <div className=" flex justify-center items-center gap-1">
            <GithubLogo
              size={18}
              color="#3A536B"
              weight="fill"
            />
            <p className=" font-regular text-base leading-160 text-base-span">
              Usuário do Git
            </p>
          </div>
          <div className=" flex justify-center items-center gap-1">
            <Building
              size={18}
              color="#3A536B"
              weight="fill"
            />
            <p className=" font-regular text-base leading-160 text-base-span">Empresa</p>
          </div>
          <div className=" flex justify-center items-center gap-1">
            <UsersThree
              size={18}
              color="#3A536B"
              weight="fill"
            />
            <p className=" font-regular text-base leading-160 text-base-span">
              <span>XX</span> seguidores
            </p>
          </div>
        </footer>
      </section>

      <section className=" px-8 py-10 ">
        <p className=" text-base-text font-regular leading-160 text-base ">
          Programming languages all have built-in data structures, but these often differ
          from one language to another. This article attempts to list the built-in data
          structures available in JavaScript and what properties they have. These can be
          used to build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>

        <p className=" flex flex-col gap-1 mt-3  text-base-text font-regular leading-160 text-base ">
          <span className=" underline text-base-blue ">Dynamic typing</span>
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are
          not directly associated with any particular value type, and any variable can be
          assigned (and re-assigned) values of all types:
        </p>

        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{
            backgroundColor: '#112131',
            boxSizing: 'border-box',
            borderRadius: '2px',
            width: '100%',
            marginTop: '1.5rem',
          }}>
          {`
            function soma(a, b) {
                if (a && b) {
                    return a + b;
                } else {
                    return 0;
                }
            }
          `.replace(/^[\t ]{9}/gm, '')}{' '}
        </SyntaxHighlighter>
      </section>
    </main>
  );
};
