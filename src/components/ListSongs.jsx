export const ListSongs = ({ songs, user }) => {
  function formatDuration (durationInSeconds) {
    const minutes = Math.floor(durationInSeconds / 60)
    const seconds = durationInSeconds % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <section>
      <h2 className='text-3xl font-bold mb-4'>Lista de reproducción</h2>
      <ul>
        {songs.length === 0 ? (
          <li className='text-gray-500'>No hay canciones en la lista</li>
        ) : (
          songs.map((song, index) => (
            <li
              key={index}
              className='my-10 pb-4 flex flex-wrap items-center justify-between gap-10 border-b border-zinc-800/80 overflow-hidden'
            >
              <div className='flex flex-wrap gap-6'>
                <p className='truncate'>
                  {song.title} - {song.artist.name}
                </p>
                <time>{formatDuration(song.duration)}</time>
              </div>
              <p>{user}</p>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}
