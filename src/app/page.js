import Titulo from "@/components/Titulo";
import CardFilme from "@/components/cardFilme";

async function carregarDados() {
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const response = await fetch(url)
  const json = await response.json()
  return json.results
}


export default async function Home() {
  //mock

  const filmes = await carregarDados()


  return (
    <>
      <nav className="bg-neutral-950 p-2 flex gap-3 items-end">
        <h1 className='text-4xl text-zinc-100 font-bold uppercase mx-8'>
          Fiap Filmes
        </h1>

        <ul>
          <li>
            <a className='mx-8' href="/favoritos">Favoritos</a>
            <a className='mx-8' href="#">Lançamentos</a>
          </li>
        </ul>
      </nav>
      <Titulo>Em Alta</Titulo>

      <section className="flex gap-2 flex-wrap">
        {filmes.map(filme => <CardFilme filme={filme} />)}
      </section>


      <Titulo>Lançamentos</Titulo>
    </>
  )
}
