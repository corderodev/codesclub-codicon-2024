import { useState, useRef, useEffect } from 'react'
import { CardMusic } from '@components/CardMusic'
import { ListSongs } from '@components/ListSongs'
import { SoundRange } from '@components/SoundRange'
import { SkeletonLoader } from '@components/SkeletonLoader'

export const RadioPlayer = () => {
  const [playlist, setPlaylist] = useState([])
  const [currentSong, setCurrentSong] = useState(null)
  const [volume, setVolume] = useState(0)
  const [loading, setLoading] = useState(false)
  const audioRef = useRef(null)
  const [userInteracted, setUserInteracted] = useState(false)

  const getFirstSong = async () => {
    const api = 'https://deezerdevs-deezer.p.rapidapi.com/playlist/'
    const idPlaylist = '3338949242'

    setLoading(true)
    const url = `${api}${idPlaylist}`
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1f70449315mshb27865ba07f85edp16bb3fjsnec6a6b717ee3',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      }
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      const songs = data.tracks.data || []

      if (songs.length > 0) {
        setCurrentSong(songs[0])
        setPlaylist(songs)
        audioRef.current.src = songs[0].preview
        audioRef.current.load()
      }

      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const handleEnded = () => {
    const currentIndex = playlist.findIndex(song => song === currentSong)

    if (currentIndex !== -1) {
      if (currentIndex < playlist.length - 1) {
        setCurrentSong(playlist[currentIndex + 1])
        audioRef.current.src = playlist[currentIndex + 1].preview
        audioRef.current.play().catch(error => console.error(error))
      } else {
        setCurrentSong(null)
      }

      setPlaylist(prevPlaylist =>
        prevPlaylist.filter(song => song !== currentSong)
      )
    }
  }

  const handleVolumeChange = event => {
    const newVolume = parseFloat(event.target.value)
    if (
      !isNaN(newVolume) &&
      isFinite(newVolume) &&
      newVolume >= 0 &&
      newVolume <= 1
    ) {
      setVolume(newVolume)
      setUserInteracted(true)
    }
  }

  useEffect(() => {
    getFirstSong()
  }, [])

  useEffect(() => {
    if (userInteracted && currentSong) {
      audioRef.current.play().catch(error => console.error(error))
    }
  }, [userInteracted, currentSong])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  return (
    <>
      <CardMusic song={currentSong} />

      <audio
        ref={audioRef}
        autoPlay
        className='w-full max-w-[260px] max-h-[600px] my-10 mx-auto rounded-3xl shadow-lg'
        onEnded={handleEnded}
        onLoadStart={() => setLoading(true)}
        onLoadedData={() => setLoading(false)}
        onVolumeChange={handleVolumeChange}
      />

      <SoundRange volume={volume} handleVolumeChange={handleVolumeChange} />

      {loading ? (
        <SkeletonLoader loading={loading} />
      ) : (
        <ListSongs songs={playlist} />
      )}
    </>
  )
}
