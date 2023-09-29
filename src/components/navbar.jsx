"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const { push } = useRouter()

    function logout() {
        serverLogout()
        push("/login")

    }
    return (
        <nav className="bg-neutral-950 p-2 flex gap-3 items-end">
            <Link href="/">
                <h1 className='text-4xl text-zinc-100 font-bold uppercase mx-8'>
                    Fiap Filmes
                </h1>
            </Link>



            <ul>
                <li>
                    <a className='mx-8' href="/favoritos">Favoritos</a>
                    <a className='mx-8' href="#">Lançamentos</a>
                    <button onClick={logout}>logout</button>
                </li>
            </ul>
        </nav>
    )
}