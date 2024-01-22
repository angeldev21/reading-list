import { useStoreUi } from "../store/store";
import Button from "./Button";
import Container from "./Container";
import { Books, SearchIcon } from "./Icons";

export function Header() {
  const toggleSidebar = useStoreUi((state) => state.toggleSidebar)
  const toggleOpenSidebar = () => {
    toggleSidebar(true)
  }

  return (
    <Container>
      <header className="py-3 flex justify-between items-center">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-3">
            <img src="/avatar.webp" alt="" className="rounded-full size-14" />
            <div>
              <span className="text-xl font-semibold">Hola, Angel! 👋🏼</span>
              <p>Listo para leer hoy?</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-[1px] border-zinc-600 py-2 px-4 rounded-full w-[350px]">
            <SearchIcon />
            <input type="text" className="bg-transparent outline-none" placeholder="Buscar..." />
          </div>
        </div>
        <Button onClick={toggleOpenSidebar}>
          Lista de Lectura <Books />
        </Button>
      </header>
    </Container>
  )
}