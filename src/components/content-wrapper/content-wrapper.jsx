import { Box, Typography } from '@mui/material'
import { COLORS } from '../../constants/colors'
import { Videos } from '..'

const ContentWrapper = ({ videosData, activeCategory }) => {
  return (
    <>
      <Box>
        <Typography variant='h4' fontWeight='bold' my={1}>
          <span style={{ color: COLORS.error.youtube }}>{activeCategory}</span>
          <span> Videos</span>
        </Typography>
      </Box>
      <Box>
        <Videos videosData={videosData} />
      </Box>
    </>
  )
}

export default ContentWrapper
