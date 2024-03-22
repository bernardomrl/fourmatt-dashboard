import NextLink from 'next/link';

export default function Page() {
  return (
    <div className="fixed left-0 top-0 z-10 flex h-screen w-full flex-col items-center justify-center space-y-8 bg-base-100">
      <h1 className="font-sans text-5xl font-bold">Página não encontrada</h1>
      <h3 className="font-sans text-xl font-light text-neutral-500">
        Desculpe, mas a página que você procurou, não foi encontrada.
      </h3>
      <NextLink
        href="/"
        className="btn btn-ghost btn-sm rounded-2xl bg-primary/50 font-sans text-neutral-700 hover:bg-primary/75"
      >
        Voltar para o início
      </NextLink>
    </div>
  );
}
