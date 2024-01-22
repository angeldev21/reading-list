export default function Button({ children, onClick, className }) {
  return (
    <button
      type="button"
      className={`${className} flex items-center gap-2 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 transition-all duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
