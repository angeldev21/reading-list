import { create } from "zustand";
import { library } from "../data/books.json"

export const useStoreUi = create((set) => ({
  sidebarIsOpen: false,
  toggleSidebar: (sidebarIsOpen) => set(() => ({ sidebarIsOpen }))
}))

export const useStoreBooks = create((set) => ({
  books: [...library],
  readingList: [],
  addBookToReadingList: (book) => set((state) => ({
    readingList: [...state.readingList, book]
  })),
}))