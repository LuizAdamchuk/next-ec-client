import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  //dessa maneira deixa mais permissivo ainda
  icon?: JSX.Element
  iconPosition?: 'left' | 'right'
  initialValue?: string
  disabled?: boolean
  error?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  icon,
  disabled = false,
  error,
  iconPosition = 'left',
  onInput,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }
  return (
    <S.Wrapper error={!!error}>
      {!!label && (
        <S.Label disabled={disabled} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}

      <S.InputWrapper>
        {!!icon && iconPosition === 'left' && <S.Icon>{icon}</S.Icon>}
        <S.Input
          type="text"
          disabled={disabled}
          onChange={onChange}
          value={value}
          {...props}
        />
        {!!icon && iconPosition === 'right' && <S.Icon>{icon}</S.Icon>}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
