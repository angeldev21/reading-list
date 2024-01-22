import { Header } from "./components/Header"

import '@fontsource-variable/onest';
import { BooksList } from "./components/BooksList";
import { ReadingList } from "./components/ReadingList";

function App() {
  return (
    <>
      <Header />
      <BooksList />
      <ReadingList />
    </>
  )
}

export default App