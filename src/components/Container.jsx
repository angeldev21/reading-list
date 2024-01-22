/* eslint-disable react/prop-types */
export default function Container({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      {children}
    </div>
  )
}
