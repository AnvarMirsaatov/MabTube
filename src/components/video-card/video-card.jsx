import moment from 'moment'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
  Avatar
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({ video }) => {
  return (
    <>
      <Card
        sx={{
          width: '320px',
          boxShadow: 'none',
          borderRadius: 0
        }}
      >
        <CardActionArea>
          <CardMedia
            image={video?.snippet?.thumbnails?.high?.url}
            alt={video?.snipped?.title}
            sx={{ width: '320px', height: '180px' }}
          />
          <CardContent>
            <Typography variant='subtitle1'>
              {video?.snippet?.title.slice(0, 50)}
            </Typography>
            <Stack
              direction={'row'}
              alignItems={'center'}
              gap={'2.5px'}
              justifyContent={'start'}
            >
              <Avatar
                image={video?.snippet?.thumbnails?.high?.url}
                sizes='15px'
              />
              <Typography
                variant='subtitle2'
                sx={{ opacity: '0.2px', color: 'text.secondary' }}
              >
                {video?.snippet?.channelTitle.toUpperCase()}
              </Typography>
              <CheckCircle
                sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
              />
            </Stack>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              {moment(video?.snippet?.publishedAt).fromNow()}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
export default VideoCard
