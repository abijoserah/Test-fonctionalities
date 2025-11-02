import { useState } from 'react'
import './App.css'
import { CatGrid } from './CatGrid'
import { catsList } from './cats/cats'
import { Footer } from './Footer'


function App() {

  return (
    <div className='w-full'>
      <CatGrid
        cats={catsList}
      />
      <Footer catsList={catsList} />
    </div>)
}

export default App
