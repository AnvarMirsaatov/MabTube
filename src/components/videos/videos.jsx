import { Box } from '@mui/material'
import { VideoCard, Loader } from '../'

const Videos = ({ videosData }) => {
  if (!videosData?.length) return <Loader />

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)'
        },
        gap: '5px',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}
    >
      {videosData.map(item => (
        <Box key={item?.id?.videoId} mx={'1px'}>
          {item?.id?.videoId && <VideoCard video={item} />}
        </Box>
      ))}
    </Box>
  )
}

export default Videos
