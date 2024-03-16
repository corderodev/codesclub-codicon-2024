import { BtnAddSong } from './BtnAddSong'
import { SkeletonLoader } from './SkeletonLoader'

export const ListResultSearch = ({
  songs,
  handleAddSongToPlaylist,
  loading,
  isListVisible
}) => {
  return loading ? (
    <SkeletonLoader loading={loading} />
  ) : isListVisible ? (
    <ul>
      {songs.map(song => (
        <li
          key={song.id}
          className='my-10 pb-4 flex items-center justify-between gap-10 border-b border-zinc-800/80'
        >
          <div className='inline-flex items-center gap-10'>
            <img
              src={song.album.cover_medium}
              alt={song.title}
              className='aspect-square w-12'
            />
            <a
              href={song.link}
              target='_blank'
              rel='noopener noreferrer'
              className='truncate max-w-[150px] min-[455]:max-w-[280px] sm:max-w-[400px] lg:max-w-[500px] hover:underline cursor-pointer'
            >
              {song.title} - {song.artist.name}
            </a>
          </div>
          <BtnAddSong
            song={song}
            handleAddSongToPlaylist={handleAddSongToPlaylist}
          />
        </li>
      ))}
    </ul>
  ) : null
}
