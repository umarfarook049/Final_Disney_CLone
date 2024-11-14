import React from 'react'
import Signin from './components/Signin'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom'
import SearchMovie from './components/SearchMovie'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/' element={ <Main/>}/>
        <Route path='/search' element={<SearchMovie/>}/>
      </Routes>
    </div>
  )
}

export default App
