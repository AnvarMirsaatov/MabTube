'use client'

import { Box, Stack } from '@mui/material'
import { Category, ContentWrapper } from '../'
import { useEffect, useState } from 'react'
import { ApiService } from '../../service/Api.Service'

export default function Main () {
  const [activeCategory, setActiveCategory] = useState('New')

  const [videosData, setVideosData] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching('search', {
          q: activeCategory
        })
        setVideosData(data.items)
      } catch (error) {
        console.log('error', error)
      }
    }
    getData()
  }, [activeCategory])

  console.log('Main', videosData)

  const selectedCategoryHandler = name => setActiveCategory(name)
  return (
    <Stack>
      <Box>
        <Category
          selectedCategoryHandler={selectedCategoryHandler}
          activeCategory={activeCategory}
        />
      </Box>
      <ContentWrapper videosData={videosData} activeCategory={activeCategory} />
    </Stack>
  )
}
