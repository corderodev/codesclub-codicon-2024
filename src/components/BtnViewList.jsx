export const BtnViewList = ({ handleToggleListVisibility, isListVisible }) => {
  return (
    <button
      onClick={handleToggleListVisibility}
      className='px-4 py-1 rounded-md bg-red-300 hover:opacity-80 transition duration-200 col-span-1'
    >
      {isListVisible ? 'Ocultar resultados' : 'Mostrar resultados'}
    </button>
  )
}
