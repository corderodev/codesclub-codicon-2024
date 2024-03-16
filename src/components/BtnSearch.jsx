export const BtnSearch = ({ handleSearch }) => {
  return (
    <button
      onClick={handleSearch}
      className='px-4 py-1 rounded-md bg-green-600 hover:opacity-80 transition duration-200 col-span-1 sm:col-span-2'
    >
      Buscar
    </button>
  )
}
