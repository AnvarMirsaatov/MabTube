import moment from 'moment'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
  Avatar,
  Box
} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const VideoCard = ({ video }) => {
  return (
    <>
      <Card
        sx={{
          width: '100%',
          boxShadow: 'none',
          borderRadius: 0
        }}
      >
        <CardActionArea>
          <Link to={`/video/${video.id.videoId}`}>
            <CardMedia
              image={video?.snippet?.thumbnails?.high?.url}
              alt={video?.snipped?.title}
              sx={{
                width: '100%',
                borderRadius: '10px',
                height: `clamp(180px, calc(114.126px + 11.211vw), 400px)`
              }}
            />
          </Link>
          <CardContent>
            <Stack
              direction={'row'}
              alignItems={'start  '}
              gap={'10px'}
              justifyContent={'start'}
            >
              <Avatar
                image={video?.snippet?.thumbnails?.high?.url}
                sizes='15px'
              />
              <Box>
                <Link to={`/video/${video.id.videoId}`}>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {video?.snippet?.title.slice(0, 50)}
                  </Typography>
                </Link>

                <Box display={'flex'} gap={'5px'} alignItems={'center'}>
                  <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <Typography
                      variant='subtitle2'
                      sx={{
                        opacity: '0.2px',
                        color: 'text.secondary',
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'black'
                        }
                      }}
                    >
                      {video?.snippet?.channelTitle.toUpperCase()}
                    </Typography>
                  </Link>
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Box>
                <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
              </Box>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
export default VideoCard
