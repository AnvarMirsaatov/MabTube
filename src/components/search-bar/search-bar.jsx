import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const handleChange = e => {
    e.preventDefault()
    console.log(value)
    if (value) {
      navigate(`/search/${value}`)
    }
  }

  return (
    <Paper
      component={'form'}
      onSubmit={handleChange}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        maxWidth: 400,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        className='search-bar'
        type='text'
        placeholder='Search...'
        sx={{
          outline: 'none',
          border: 'none'
        }}
      />
      <IconButton type='submit'>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
