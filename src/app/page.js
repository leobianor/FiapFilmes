import Titulo from "@/components/Titulo";
import CardFilme from "@/components/cardFilme";


export default function Home() {
  //mock
  const filmes = [
    {
      titulo: "Star Wars: Episódio II - Ataque dos Clones",
      nota: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9m1nJ2MfTG5QEmjOCg0b4YCo4W8.jpg"
    },
    {
      titulo: "Toy Story: Um Mundo de Aventuras ",
      nota: 10,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6AafgfifXkFS4g2xGJZIwsPQK6P.jpg"
    }

  ]


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
      <Titulo>Em Alta</Titulo>

      <section className="flex gap-2 flex-wrap">
        {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>


      <Titulo>Lançamentos</Titulo>


    </>
  )
}
