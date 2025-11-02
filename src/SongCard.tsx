import type { Song } from "../data";

interface SongCardProps {
    song: Song
    handleDeleteSong: (songId: string) => void
}

export function SongCard({ song, handleDeleteSong }: SongCardProps) {
    return (<li className={`rounded-sm ${song.deleted ? "bg-red-300" : "bg-slate-100"} px-1 py-2`}>

        <img src={song.cover} className='w-full h-auto max-w-16 rounded-sm' />
        <span>{song.title}</span>
        <div className='items-end'>

            <button onClick={() => handleDeleteSong(song.id)}>X</button>
        </div>
    </li>)
}