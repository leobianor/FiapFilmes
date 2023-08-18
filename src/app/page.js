import Titulo from "@/components/Titulo";

export default function Home() {
  return ( 
    <>
    <nav className="bg-neutral-950 p-2 flex gap-3 items-end">
      <h1 className='text-4xl text-zinc-100 font-bold uppercase mx-8'>
        Fiap Filmes
      </h1>

      <ul>
        <li>
          <a className='mx-8' href="#">Favoritos</a>
          <a className='mx-8' href="#">Lançamentos</a>
        </li>
      </ul>
    </nav>
    <Titulo texto = "Em Alta" />
    <Titulo texto = "Lançamentos" />

    </>
  )
}
