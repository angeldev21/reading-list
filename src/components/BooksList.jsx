import Container from '../components/Container'
import { Books } from "../components/Icons"

import Button from "./Button"
import { useStoreBooks } from "../store/store"
export function BooksList() {
  const books = useStoreBooks((state) => state.books)

  return (
    <main className="py-10">
      <Container>
        <section className="flex justify-between items-start pb-5">
          <p className="text-5xl"><span className="font-bold text-lime-300">{books.length}</span> Libros disponibles</p>
          <div>
            <p>Filtrar por:</p>
          </div>
        </section>
        <ul className="grid grid-cols-4 gap-10">
          {books.map(({ book }) => (
            <li key={book.title} className="w-full rounded-xl hover:scale-105 transition-transform duration-200 cursor-pointer relative">
              <Button className="absolute right-1 top-2">
                <Books />
                <span className="text-xl">+</span>
              </Button>
              <img src={book.cover} alt="" className="object-cover w-full h-full rounded-xl" />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
