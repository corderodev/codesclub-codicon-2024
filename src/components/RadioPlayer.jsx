import { useState, useRef, useEffect } from 'react'
import { CardMusic } from '@components/CardMusic'
import { ListResultSearch } from '@components/ListResultSearch'
import { BtnSearch } from '@components/BtnSearch'
import { BtnViewList } from '@components/BtnViewList'
import { ListSongs } from '@components/ListSongs'
import { SoundRange } from '@components/SoundRange'

export const RadioPlayer = () => {
  const [playlist, setPlaylist] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [volume, setVolume] = useState(0.5)

  const audioRef = useRef(null)

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.preview
      audioRef.current.volume = volume
      audioRef.current.play()
    }
  }, [currentSong])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isListVisible, setIsListVisible] = useState(true)

  const handleSearch = async () => {
    const api = 'https://deezerdevs-deezer.p.rapidapi.com/search?q='

    setLoading(true)
    const url = `${api}${searchTerm}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1f70449315mshb27865ba07f85edp16bb3fjsnec6a6b717ee3',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    }

    try {
      setLoading(true)
      const response = await fetch(url, options)
      const data = await response.json()
      const songs = data.data || []

      setSongs(songs)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleToggleListVisibility = () => {
    setIsListVisible(!isListVisible)
  }

  const handleAddSongToPlaylist = song => {
    handleAddToPlaylist(song)
  }

  const handleAddToPlaylist = song => {
    setPlaylist([...playlist, song])
    if (!currentSong) {
      setCurrentSong(song)
    }
  }

  const handleEnded = () => {
    const currentIndex = playlist.findIndex(song => song === currentSong)

    if (currentIndex !== -1) {
      if (currentIndex < playlist.length - 1) {
        setCurrentSong(playlist[currentIndex + 1])
      } else {
        setCurrentSong(null)
      }

      setPlaylist(prevPlaylist =>
        prevPlaylist.filter(song => song !== currentSong)
      )
    }
  }

  const handleVolumeChange = event => {
    const newVolume = event.target.value
    setVolume(newVolume)
  }

  return (
    <>
      <CardMusic
        song={currentSong ? currentSong.title : ''}
        artist={currentSong ? currentSong.artist : ''}
        image={currentSong ? currentSong.album : ''}
      />

      <audio
        ref={audioRef}
        autoPlay
        className='w-full max-w-[260px] max-h-[600px] my-10 mx-auto rounded-3xl shadow-lg'
        onEnded={handleEnded}
      />

      <SoundRange volume={volume} handleVolumeChange={handleVolumeChange} />

      <section className='py-10'>
        <header className='flex flex-col gap-2'>
          <input
            type='text'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder='Ingresa el nombre de la canción o artista...'
            className='w-full p-2 text-zinc-900 rounded-md border-2 border-gray-300 focus:outline-none focus:border-blue-500 transition duration-200'
          />
          <div className='mt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-between'>
            <BtnSearch handleSearch={handleSearch} />
            <BtnViewList
              handleToggleListVisibility={handleToggleListVisibility}
              isListVisible={isListVisible}
            />
          </div>
        </header>
        <ListResultSearch
          loading={loading}
          isListVisible={isListVisible}
          songs={songs}
          handleAddSongToPlaylist={handleAddSongToPlaylist}
        />
      </section>

      <ListSongs songs={playlist} user='Daniel' />
    </>
  )
}
