import { Link } from 'react-router-dom';

export function ErrorPage() {
  return (
    <div className=" flex items-center justify-center flex-col gap-1 text-base-title font-nunito font-bold mt-12 ">
      <h1>Oops!</h1>
      <p>Desculpa, ocorreu um erro inesperado!</p>
      <p>Página não encontrada!</p>
      <Link
        to="/"
        className="underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
