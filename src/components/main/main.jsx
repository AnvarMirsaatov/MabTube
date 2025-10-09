'use client'

import { Box, Typography, Stack, Container } from '@mui/material'
import { COLORS } from '../../constants/colors'
import { Category } from '../'
import { useEffect, useState } from 'react'
import { ApiService } from '../../service/Api.Service'
import Videos from '../videos/videos'

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

  const selectedCategoryHandler = name => setActiveCategory(name)
  return (
    <Stack
      display={'flex'}
      direction={'row'}
      justifyContent={'start'}
      gap={'10px'}
      sx={{ display: 'flex' }}
    >
      <Box
        sx={{
          width: '300px',
          background: '#000'
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam quasi
          architecto ratione dolores iusto accusantium incidunt expedita labore
          suscipit, aliquam vitae, amet eum nemo neque molestiae, excepturi
          natus quas? Nisi excepturi nemo perspiciatis debitis provident, odio,
          perferendis saepe, explicabo nulla aliquid autem inventore laudantium
          eos ullam maiores modi magnam praesentium cupiditate? Maiores quod
          incidunt ratione doloremque vero temporibus excepturi fugiat libero?
          Fugiat accusantium itaque labore molestias error cumque minus a soluta
          laborum quas illo, eveniet ipsum esse fuga ut explicabo magni
          reprehenderit facere dolor iure neque quaerat non atque eaque? Maiores
          aspernatur vitae est hic amet corrupti qui, dolores veritatis
          cupiditate culpa architecto, dolore aliquam nostrum quae quam
          praesentium quos illo sunt, eos molestiae inventore adipisci
          distinctio tenetur ea? Ipsam, blanditiis maiores ut corrupti quaerat
          consectetur perspiciatis? Fuga minus atque praesentium accusantium
          maxime laboriosam consequatur dolore pariatur eligendi? Dolor repellat
          amet deserunt, accusantium facere id enim sequi aspernatur consequatur
          nemo? Esse molestias vitae ad nostrum nesciunt magnam ipsam eius
          adipisci eum provident totam rerum, nulla accusamus distinctio! Fugit
          ducimus assumenda libero alias aliquid odit aliquam voluptatum rem
          voluptatem, quia repellat iste similique officiis, accusamus fugiat
          illum. Numquam ducimus necessitatibus corrupti tempora voluptates cum
          omnis dicta. Ipsam ea non aliquam aliquid.
        </p>
      </Box>

      <Box maxWidth={'1820px'}>
        <Category
          selectedCategoryHandler={selectedCategoryHandler}
          activeCategory={activeCategory}
        />
        <Box sx={{ width: '100%' }}>
          <Container>
            <Typography variant='h4' fontWeight='bold' mb={2}>
              <span style={{ color: COLORS.error.youtube }}>
                {activeCategory}
              </span>
              <span> Videos</span>
            </Typography>
          </Container>
        </Box>
        <Box>
          <Videos videosData={videosData} />
        </Box>{' '}
      </Box>
    </Stack>
  )
}
