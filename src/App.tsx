import './App.css'
import { songs as initialSongs, type Song } from "../data"
import { useState } from 'react'
import { SongCard } from './SongCard'

// {"id": 1, "title":"Ed Sheeran"}
// {"id": 2, "title":"Justin Bieber"}
// {"id": 3, "title":"Jason Derulo"} // songId === 3, return delete: true
// {"id": 4, "title":"Bruno Mars"}
// songs.filter((song) => song.id !== 3)
// 

function App() {
  const [search, setSearch] = useState("")
  const [songs, setSongs] = useState(initialSongs.slice(0, 6))
  const filteredSongs = songs.filter((song) => (song.title.toLowerCase().includes(search.toLowerCase())))

  function handleDeleteSong(songId: string) {
    const rebuiltSongs = songs.map((song): Song =>
    ({
      id: song.id,
      title: song.title,
      category: song.category,
      cover: song.cover,
      link: song.link,
      year: song.year,
      deleted: songId === song.id ? !song.deleted : song.deleted
    }
    ))

    setSongs(rebuiltSongs)
  }



  return (
    <div className='flex flex-col gap-4'>
      <h1>Mood Player</h1>
      <div className='flex gap-2'>
        <label htmlFor='search'>Search</label>
        <input className='border'
          type="text"
          id="search"
          name="search"
          value={search}

          onChange={(event) => setSearch(event.target.value)} />
        {search ? <button onClick={() => (setSearch(""))}>Reset</button> : null}
      </div>
      <ul className='text-start flex flex-col gap-1 text-xs'>
        {filteredSongs.map((song) => (<SongCard song={song} handleDeleteSong={handleDeleteSong} />))}
      </ul>
    </div>
  )
}

export default App
