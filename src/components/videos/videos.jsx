import { Grid } from '@mui/material'
import { VideoCard, Loader } from '../'

const Videos = ({ videosData }) => {
  if (!videosData.length) return <Loader />

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {videosData?.map(item => {
        return (
          <Grid size={{ xs: 1, sm: 2, md: 3 }} key={item?.id?.videoId}>
            {item?.id?.videoId && <VideoCard video={item} />}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default Videos
