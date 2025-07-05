import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Heading from './components/Heading'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/heading' element={<Heading/>}/>
      </Routes>
    </div>
  )
}

export default App
