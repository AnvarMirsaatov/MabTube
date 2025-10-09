import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const ChannelCard = ({ video }) => {
  return (
    <Box
      sx={{
        boxShadow: 0,
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: { xs: '360px', md: '320px' },
        height: '326px',
        margin: 'auto'
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <CardMedia
          image={video?.thumbnails?.default?.url}
          alt={video?.snippet?.title}
          sx={{
            borderRadius: '50%',
            width: '180px',
            height: '180px',
            mb: '2px',
            border: '1px solid #e3e3e3'
          }}
        />
        <Typography variant='h6'>
          {video?.snippet?.title}{' '}
          <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {video?.snippet?.subscriberCount && (
          <Typography
            sx={{ fontSize: '15px ', color: 'gray', fontWeight: '500' }}
          >
            {parseInt(video?.snippet?.subscriberCount).toLocaleString('en-US')}{' '}
            Subscriber
          </Typography>
        )}
      </CardContent>
    </Box>
  )
}

export default ChannelCard
