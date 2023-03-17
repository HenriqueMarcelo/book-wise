import { styled } from '@/src/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  gap: '$5',
  flexWrap: 'wrap',

  '& > *': {
    flex: '1 0 350px',
  },
})

export const SearchForm = styled('form', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const TagsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '$3',

  margin: '$6 0 $12',
})
