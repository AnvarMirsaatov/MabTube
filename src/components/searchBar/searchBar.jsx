import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
      component={'form'}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        maxWidth: 450,
        width: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <input
      className='search-bar'
        type='text'
        placeholder='Search...'
        sx={{
          outline: 'none',
          border: 'none'
        }}
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
