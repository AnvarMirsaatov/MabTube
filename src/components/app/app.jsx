import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import { Channel, Main, Navbar, SearchBar, VideoDetail } from '../'

export default function App () {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/video-detail/:id' element={<VideoDetail />} />
        <Route path='/search/:id' element={<SearchBar />} />
      </Routes>
    </Box>
  )
}
