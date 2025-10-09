import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiService } from '../../service/Api.Service'
import { Box, Stack } from '@mui/material'
import { Videos } from '../'

const Search = () => {
  const { id } = useParams()
  const [videosData, setVideosData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search`, {
          q: id
        })
        console.log(data)

        setVideosData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  return (
    <Stack>
      <Box>
        <Videos videosData={videosData?.items} />
      </Box>
    </Stack>
  )
}

export default Search
