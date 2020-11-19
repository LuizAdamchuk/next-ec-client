import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { GameCardSliderProps } from '.'

type WrapperProps = Pick<GameCardSliderProps, 'color'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ theme, color }) => css`
    ${media.lessThan('huge')`
    overflow-x: hidden;
  `}
    // toda essa parte é para tirar o espaçamento criado nas lateris dos cards
    .slick-track,
  .slick-list {
      // serve para todos os cards acompanhem o tamanho do card com maior altura(mais texto)
      display: flex;
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }
    ${media.greaterThan('large')`
      .slick-slide > div{
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
        margin: 0 -${theme.spacings.xsmall};
      }
    `}
    .slick-prev,
  .slick-next {
      display: block;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      //centraliza ao meio do card
      top: 50%;
      transform: translate(0, -50%);
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }

    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
  `}
`
