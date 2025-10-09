import { Box, Stack } from '@mui/material'
import { logo } from '../../context'
import { Link } from 'react-router-dom'
import { SearchBar } from '../'
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
      <SearchBar /> <Box />
    </Stack>
  )
}

export default Navbar
