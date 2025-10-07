import { Stack } from '@mui/material'
import { CategoryData } from '../../context'
import { COLORS } from '../../constants/colors'

const Category = ({ selectedCategoryHandler, activeCategory }) => {


  return (
    <Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
      {CategoryData.map(category => (
        <button
          onClick={() => selectedCategoryHandler(category.name)}
          key={category.name}
          className='category-btn'
          style={{
            borderRadius: 0,
            background: category.name === activeCategory && COLORS.error.youtube,
            color: category.name === activeCategory && COLORS.error.contrastText
          }}
        >
          <span
            style={{
              color: COLORS.secondary,
              marginRight: '15px'
            }}
          >
            {<category.icon />}
          </span>{' '}
          <span
            style={{
              fontWeight: 'bold'
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  )
}
export default Category
