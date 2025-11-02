import './App.css'
import { songs as initialSongs } from "../data"
import { useState } from 'react'

// {"id": 1, "title":"Ed Sheeran"}
// {"id": 2, "title":"Justin Bieber"}
// {"id": 3, "title":"Jason Derulo"}
// {"id": 4, "title":"Bruno Mars"}
// songs.filter((song) => song.id !== 3)
// 

function App() {
  const [search, setSearch] = useState("")
  const [songs, setSongs] = useState(initialSongs.slice(0, 6))
  const filteredSongs = songs.filter((song) => (song.title.toLowerCase().includes(search.toLowerCase())))

  function handleRemoveSong(songId: string) {
    const keptSongs = songs.filter((song) => (songId !== song.id))
    setSongs(keptSongs)
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
        {filteredSongs.map((song) => (<li className='rounded-sm bg-slate-100 px-1 py-2'>

          <img src={song.cover} className='w-full h-auto max-w-16 rounded-sm' />
          <span>{song.title}</span>
          <div className='items-end'>

            <button onClick={() => handleRemoveSong(song.id)}>X</button>
          </div>
        </li>))}
      </ul>
    </div>
  )
}

export default App
