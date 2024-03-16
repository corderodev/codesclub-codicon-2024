import { Radio } from '@icons/Radio'

export const CardMusic = ({ song, artist, image }) => {
  return (
    <section className='w-fit mx-auto mt-20 grid place-content-center'>
      <header className='relative'>
        {image ? (
          <img
            src={image.cover_big}
            alt={`${song} - ${artist.name}`}
            className='w-full max-w-[260px] max-h-[600px] rounded-3xl aspect-square object-cover'
          />
        ) : (
          <div className='flex flex-col items-center gap-10'>
            <div className='relative'>
              <span className='absolute top-0 left-0 -z-10 w-20 h-20 bg-green-400 rounded-full animate-ping'></span>
              <Radio className='w-20 h-20 text-green-400 drop-shadow-md' />
            </div>
            <h2 className='text-3xl'>Busca una canción para reproducir</h2>
          </div>
        )}
      </header>
      <footer className='mt-6 text-center'>
        <h3 className='text-lg font-semibold'>{song}</h3>
        <p className='text-sm text-gray-500'>{artist.name}</p>
      </footer>
    </section>
  )
}
