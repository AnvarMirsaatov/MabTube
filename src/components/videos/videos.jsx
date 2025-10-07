import { Box, Stack } from '@mui/material'
import VideoCard from '../video-card/video-card'

const Videos = ({ videosData }) => {
  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'stretch'}
      gap={'2px'}
    >
      {videosData?.map(item => {
        return (
          <Box key={item?.id?.videoId}>
            {item?.id?.videoId && <VideoCard video={item} />}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos
