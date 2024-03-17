export const ListSongs = ({ songs }) => {
  function formatDuration (durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <section className='mt-20'>
      <h2 className='text-center text-3xl font-bold mb-4'>
        Lista de reproducción
      </h2>
      <ul>
        {songs.length === 0 ? (
          <li className='text-gray-500 text-center'>
            No hay canciones en la lista
          </li>
        ) : (
          songs.map((song, index) => (
            <li
              key={index}
              className='w-full max-w-[600px] mx-auto my-10 pb-4 flex flex-wrap gap-10 border-b border-zinc-800/80 overflow-hidden'
            >
              <div className='w-full flex flex-wrap items-center justify-between gap-6'>
                <div className="flex gap-10 items-center">
                  <img
                    src={song.album.cover_medium}
                    alt={song.title}
                    className='aspect-square w-12'
                  />
                  <a
                    href={song.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full truncate hover:underline'
                  >
                    {song.title} - {song.artist.name}
                  </a>
                </div>
                <time className="hidden sm:block">{formatDuration(song.duration)}</time>
              </div>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}
