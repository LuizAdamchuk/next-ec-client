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
      'border-left': '0.7rem solid #F231A5'
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
  it('should render a small size header', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>)
    //todos os h1, h2, etc são heading
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    })
  })
  it('should render a small colored line at bottom', () => {
    renderWithTheme(
      <Heading size="small" lineBottom>
        Won Games
      </Heading>
    )
    //todos os h1, h2, etc são heading
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })
  it('should reder a Heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
  it('should reder a Heading with a seconday line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Lorem Ipsum
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
