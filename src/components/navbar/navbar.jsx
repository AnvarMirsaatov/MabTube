import { Box, Stack } from '@mui/material'
import { logo } from '../../context'
import { Link } from 'react-router-dom'
import { SearchBar, Sidebar } from '../'
const Navbar = () => {
  return (
    <Stack
      variant={'form'}
      direction={'row'}
      p={2}
      alignItems='center'
      justifyContent={'space-between'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Sidebar />
        <Link to={'/'}>
          <img src={logo} alt='logo' height={30} />
        </Link>{' '}
      </Box>
      <SearchBar /> <Box />
    </Stack>
  )
}

export default Navbar
