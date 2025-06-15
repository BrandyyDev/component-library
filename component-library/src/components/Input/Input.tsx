import { InputHTMLAttributes } from 'react'
import { useTracking } from '../../hooks/useTracking'
import { ContainerInput, StyledInput } from './input.styled';

type Variant = 'default' | 'error' | 'success'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: Variant
}

export const Input = ({
  label,
  variant = 'default',
  disabled,
  ...rest
}: InputProps) => {
  const { track } = useTracking()

  const handleFocus = () => {
    track('Input', variant, 'focus')
  }

  return (
    <ContainerInput>
      {label && <label>{label}</label>}
      <StyledInput variant={variant} disabled={disabled} onFocus={handleFocus} {...rest} />
    </ContainerInput>
  )
}

