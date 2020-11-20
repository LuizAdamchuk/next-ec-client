import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

export const Wrapper = styled.div<
  Pick<TextFieldProps, 'disabled'> & { error?: boolean }
>`
  ${({ theme, error }) => css`
    ${!!error && wrapperModifiers.error(theme)}
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: calc(${theme.border.radius} / 2);
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    // ele vai dar foto em toda a caixa, qualquer coisa que tiver dentro dele
    // e for focada vai gerar foco em toda a caixa
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
      svg {
        color: ${theme.colors.primary};
      }
    }
  `}
`

export const Input = styled.input<Pick<TextFieldProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    ${!!disabled && wrapperModifiers.disabled(theme)}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.xxsmall};
    & > svg {
      width: 100%;
    }
  `}
`

export const Label = styled.label<Pick<TextFieldProps, 'disabled'>>`
  ${({ theme, disabled }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
    ${!!disabled && wrapperModifiers.disabled(theme)};
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    cursor: not-allowed;
    &::placeholder {
      color: ${theme.colors.gray};
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},${Label} {
      color: ${theme.colors.red};
    }
    ${InputWrapper} {
      &:focus-within {
        box-shadow: 0 0 0.5rem ${theme.colors.red};
        svg {
          color: ${theme.colors.red};
        }
      }
    }
  `
}
