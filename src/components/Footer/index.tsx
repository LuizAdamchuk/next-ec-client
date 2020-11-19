import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="https://github.com/LuizAdamchuk"
            target="_blank"
            rel="noopernner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://github.com/LuizAdamchuk"
            target="_blank"
            rel="noopernner, noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/LuizAdamchuk"
            target="_blank"
            rel="noopernner, noreferrer"
          >
            Twitter
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Shrefre</a>
          </Link>{' '}
          <Link href="/search">
            <a>Search</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor</span>
        <span>Lorem ipsum, dolor sit.</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 - All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
