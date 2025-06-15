import { InputHTMLAttributes, useId } from 'react'
import { useTracking } from '../../hooks/useTracking'
import { ContainerInput, StyledInput } from './input.styled'

type Variant = 'default' | 'error' | 'success'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: Variant
}

export const Input = ({
  label,
  variant = 'default',
  disabled,
  id,
  ...rest
}: InputProps) => {
  const { track } = useTracking()
  const inputId = id || useId()

  const handleFocus = () => {
    track('Input', variant, 'focus')
  }

  return (
    <ContainerInput>
      {label && <label htmlFor={inputId}>{label}</label>}
      <StyledInput
        id={inputId}
        aria-label={label}
        variant={variant}
        disabled={disabled}
        onFocus={handleFocus}
        {...rest}
      />
    </ContainerInput>
  )
}
