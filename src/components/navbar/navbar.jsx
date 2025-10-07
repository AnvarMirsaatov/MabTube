import { Box, Stack } from '@mui/material'
import { logo } from '../../context'
import Search from '../searchBar/searchBar'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Stack
      variant={'form'}
      direction={'row'}
      p={2}
      alignItems='center'
      justifyContent={'space-between'}
    >
      <Link to={'/'}>
        <img src={logo} alt='logo' height={30} />
      </Link>{' '}
      <Search /> <Box />
    </Stack>
  )
}

export default Navbar
