import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ApiService } from '../../service/Api.Service'
import Loader from '../loader/loader'
import { CheckCircle, Comment, Tag, Visibility } from '@mui/icons-material'
import renderHTML from 'react-render-html'
import SimilarVideoWrap from '../similar-video-wrap/similar-video-wrap'

const VideoDetail = () => {
  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [reletedVideo, setReletedVideo] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=contentDetails,snippet,statistics&id=${id}`
        )
        setVideoDetail(data.items[0])

        const relateData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        )
        console.log('reletedVideo', relateData)
        setReletedVideo(relateData.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])
  if (!videoDetail) return <Loader />

  console.log('reletedVideo=>>>', videoDetail)

  return (
    <Box height={'90vh'} mb={10}>
      <Box className={'videoDetailPlayer'}>
        <Box className={'videoPlayerWrap'}>
          <Box className={'videoPlayer'}>
            <iframe
              width='100%'
              height='100%'
              src={`https://www.youtube.com/embed/${id}`}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
            {videoDetail?.snippet?.tags.map((item, idx) => (
              <Chip
                label={item}
                key={idx}
                deleteIcon={<Tag />}
                variant='outlined'
                sx={{ marginTop: '10px', cursor: 'pointer', ml: '10px' }}
                onDelete={() => {}}
              />
            ))}
            <Typography variant='h5' fontWeight={'bold'} px={2}>
              {videoDetail.snippet.title}
            </Typography>
            <Typography variant='subtitle2' p={2} sx={{ opacity: 0.7 }}>
              {renderHTML(videoDetail.snippet.description)}
            </Typography>
            <Stack
              direction={'row'}
              gap={'20px'}
              alignItems={'center'}
              py={1}
              px={2}
            >
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'3px'}
                sx={{ opacity: 0.7 }}
              >
                <Visibility />
                {parseInt(
                  videoDetail.statistics.viewCount
                ).toLocaleString()}{' '}
                views
              </Stack>

              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'3px'}
                sx={{ opacity: 0.7 }}
              >
                <Visibility />
                {parseInt(
                  videoDetail.statistics.likeCount
                ).toLocaleString()}{' '}
                likes
              </Stack>

              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'3px'}
                sx={{ opacity: 0.7 }}
              >
                <Comment />
                {parseInt(videoDetail.statistics.commentCount).toLocaleString()}
                comment
              </Stack>
            </Stack>
            <Stack direction={'row'} py={1} px={2} sx={{ cursor: 'pointer' }}>
              <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'5px'}
                marginTop={'5px'}
              >
                <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                  <Avatar
                    alt={videoDetail?.snippet?.channelTitle}
                    src={videoDetail?.snippet?.thumbnails?.default?.url}
                  />
                </Link>
                <Box sx={{ display: 'flex' }} gap={'5px'}>
                  {' '}
                  <Box>
                    {' '}
                    <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                      <Typography
                        variant='subtitle2'
                        color='gray'
                        sx={{
                          cursor: 'pointer',
                          '&:hover': {
                            color: 'black'
                          }
                        }}
                      >
                        {videoDetail?.snippet?.channelTitle}{' '}
                        <CheckCircle sx={{ fontSize: '12px' }} />
                      </Typography>
                    </Link>
                    <Typography
                      variant='subtitle5'
                      color='gray'
                      fontSize={'12px'}
                    >
                      {parseInt(
                        videoDetail.statistics.favoriteCount
                      ).toLocaleString()}
                      {' subscribers'}
                    </Typography>
                  </Box>
                  <Chip
                    label={'Subscibe'}
                    variant='outlined'
                    sx={{ cursor: 'pointer' }}
                  />
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box width={{ xs: '100%', md: '25%' }} direction={'column'}>
          <SimilarVideoWrap reletedVideo={reletedVideo} />
        </Box>
      </Box>
    </Box>
  )
}

export default VideoDetail
