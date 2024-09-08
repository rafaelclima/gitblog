import { Link, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <div className=" text-base-title font-nunito font-bold mt-12 ">
      <h1>Oops!</h1>
      <p>Desculpa, ocorreu um erro inesperado!</p>
      <p className="mb-6">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="underline">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
