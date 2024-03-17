import { Radio } from '@icons/Radio'
import { Sleep } from '@icons/Sleep'

export const CardMusic = ({ song }) => {
  return (
    <section className='w-fit mx-auto mt-20 grid place-content-center'>
      <header className='relative'>
        {song ? (
          <img
            src={song.album.cover_big}
            alt={`${song.title} - ${song.artist.name}`}
            className='w-full max-w-[260px] max-h-[600px] rounded-3xl aspect-square object-cover'
          />
        ) : (
          <div className='flex flex-col items-center gap-10'>
            <div className='relative'>
              <span className='absolute top-0 left-0 -z-10 w-20 h-20 bg-green-400 rounded-full animate-ping'></span>
              <Radio className='w-20 h-20 text-green-400 drop-shadow-md' />
            </div>
            <h2 className='text-3xl'>SoundHead Radio</h2>
            <p className='flex gap-2 text-center text-gray-300'>
              <Sleep className='size-5' />
              Lo siento, no hay más canciones por hoy
            </p>
          </div>
        )}
      </header>
      {song && (
        <footer className='mt-6 text-center'>
          <h3 className='text-lg font-semibold'>{song.title}</h3>
          <p className='text-sm text-gray-500'>{song.artist.name}</p>
        </footer>
      )}
    </section>
  )
}
