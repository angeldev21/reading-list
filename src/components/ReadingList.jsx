import { useStoreBooks, useStoreUi } from "../store/store"

import { Close } from "./Icons"

export function ReadingList() {
  const sidebarIsOpen = useStoreUi((state) => state.sidebarIsOpen)
  const uiStoreFn = useStoreUi((state) => state.toggleSidebar)

  const readingList = useStoreBooks(state => state.readingList)

  console.log(readingList)

  const closeSidebar = () => {
    uiStoreFn(false)
  }

  return (
    <aside className={`${sidebarIsOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-200 fixed top-0 right-0 w-[400px] h-[100vh] bg-zinc-800 text-white p-4`}>
      <header className="flex justify-between items-center border-b pb-1 border-zinc-600">
        <h2 className="text-2xl font-semibold">Lista de lectura</h2>
        <button className="text-red-400" onClick={closeSidebar}>
          <Close />
        </button>
      </header>
      <section>
        zd
      </section>
    </aside>
  )
}
