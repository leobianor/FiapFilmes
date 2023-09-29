

import Titulo from "@/components/Titulo";
import CardFilme from "@/components/cardFilme";
import NavBar from "@/components/navbar";


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
      <NavBar />
      <Titulo>Em Alta</Titulo>

      <section className="flex gap-2 flex-wrap">
        {filmes.map(filme => <CardFilme filme={filme} />)}
      </section>


      <Titulo>Lançamentos</Titulo>
    </>
  )
}
