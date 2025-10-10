import { Stack } from '@mui/material'
import SimilarVideoCard from '../similar-video-card/similar-video-card'

const SimilarVideoWrap = ({ reletedVideo }) => {
  return (
    <Stack direction={'column'} width={'100%'} gap={'2px'}>
      {reletedVideo?.map((item, idx) => (
        <SimilarVideoCard key={idx} item={item} />
      ))}
    </Stack>
  )
}

export default SimilarVideoWrap
