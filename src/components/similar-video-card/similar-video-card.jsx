import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import moment from 'moment'
import { Link } from 'react-router-dom'

const SimilarVideoCard = ({ item }) => {
  return (
    <Card
      gap={'5px'}
      sx={{
        display: 'flex',
        alignItems: 'start',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      <Box width={'180px'} height={'100px'} p={0}>
        <Link to={`/video/${item?.id?.videoId}`}>
          <CardMedia
            image={item?.snippet?.thumbnails?.high?.url}
            sx={{ height: '100%', width: '168px' }}
          />
        </Link>
      </Box>
      <CardContent sx={{ padding: '0', maxWidth: '300px' }}>
        <Link to={`/video/${item?.id?.videoId}`}>
          <Typography
            p={0}
            variant='subtitle1'
            sx={{
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {item?.snippet?.title.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={`/video/${item.id.videoId}`}>
          <Typography
            variant='subtitle1'
            sx={{
              opacity: '0.7',
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {item?.snippet?.channelTitle.slice(0, 50)}
          </Typography>
        </Link>
        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {moment(item?.snippet?.publishedAt).fromNow()}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SimilarVideoCard
