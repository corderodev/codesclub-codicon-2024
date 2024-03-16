import { Add } from "@icons/Add.jsx"

export const BtnAddSong = ({ handleAddSongToPlaylist, song }) => {
  return (
    <button
      onClick={() => handleAddSongToPlaylist(song)}
      className='px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition duration-100'
    >
      <Add className='w-6 h-6' />
    </button>
  )
}