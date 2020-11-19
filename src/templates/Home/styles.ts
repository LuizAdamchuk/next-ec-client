import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as GameCardSliderStyles from 'components/GameCardSlider/styles'
import * as HighlightStyles from 'components/Highlight/styles'

const Sections = styled.section`
  ${({ theme }) => css`
    //Coloca espacamento da pagina Home
    ${HeadingStyles.Wrapper},
    ${HighlightStyles.Wrapper},
    ${GameCardSliderStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
    // Verifica o tamnaho da tela e coloca margin, removendo a margin
    // das sections com imagens highlight para ficar fullscreen
    ${HighlightStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }
    // é a mesma coisa do de cima mas só do lado da direito pra deixar
    // aparecendo o card pra pessoa puxar pro lado
    ${GameCardSliderStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    // espacamento maior entre sections
    margin-bottom: calc(${theme.spacings.large} * 2);
  `}
`

export const SectionBanner = styled.section`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    // da efeito de ficar na frente do banner, de estar acima do site
    ${media.greaterThan('medium')`
      margin:${theme.spacings.large};
      position:relative;
      z-index:${theme.layers.base};
    `}
  `}
`
export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top:-13rem;
    `}

    ${media.greaterThan('medium')`
      margin-bottom:0;
      padding-top:14rem;
      padding-bottom:10rem;
      background-color:${theme.colors.lightBg};
      // aqui que se faz a curvatura o risco torto na tela
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);

      ${HeadingStyles.Wrapper}{
        color:${theme.colors.black}
      }
    `}
  `}
`
export const SectionMostPopular = styled(Sections)``

export const SectionUpcoming = styled(Sections)`
  ${({ theme }) => css`
    ${HighlightStyles.Wrapper} {
      margin-top: calc(${theme.spacings.xlarge} * 2);
    }
  `}
`

export const SectionFreeGames = styled(Sections)``

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xxsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      padding-top:calc(${theme.spacings.xxlarge} * 2);
      // aqui que se faz a curvatura o risco torto na tela
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%)
    `}
  `}
`
