'use client'

import { Box, Typography, Stack, Container } from '@mui/material'
import { COLORS } from '../../constants/colors'
import { Category } from '../'
import { useEffect, useState } from 'react'
import { ApiService } from '../../service/Api.Service'
import Videos from '../videos/videos'

export default function Main () {
  const [activeCategory, setActiveCategory] = useState('Games')

  const [videosData, setVideosData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${activeCategory}`
        )
        setVideosData(data.items)
      } catch (error) {
        console.log('error', error)
      }
    }
    getData()
  }, [activeCategory])

  const selectedCategoryHandler = name => setActiveCategory(name)
  return (
    <Stack justifyContent={'center'}>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        activeCategory={activeCategory}
      />
      <Box p={2} sx={{ width: '90%', margin: '0 auto' }}>
        <Container sx={{ width: '90%' }}>
          <Typography variant='h4' fontWeight='bold' mb={2}>
            <span style={{ color: COLORS.error.youtube }}>
              {' '}
              {activeCategory}
            </span>
            <span> Videos</span>
          </Typography>
        </Container>
        <Videos videosData={videosData} />
      </Box>
    </Stack>
  )
}
