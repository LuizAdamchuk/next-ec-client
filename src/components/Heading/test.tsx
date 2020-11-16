import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>)
    //todos os h1, h2, etc são heading
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa'
    })
  })
  it('should render a black heading if color passed', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    //todos os h1, h2, etc são heading
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a colored line in left side', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    //todos os h1, h2, etc são heading
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #3CD3C1'
    })
  })
  it('should render a colored line at bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    //todos os h1, h2, etc são heading
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })
})
