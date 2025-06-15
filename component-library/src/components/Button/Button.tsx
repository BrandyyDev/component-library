import { ReactNode, ButtonHTMLAttributes } from 'react'
import { useTracking } from '../../hooks/useTracking'
import { StyledButton } from './button.styled';

type Variant = 'primary' | 'secondary' | 'danger'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  loading?: boolean
  icon?: ReactNode
}

export const Button = ({
  children,
  variant = 'primary',
  loading = false,
  disabled,
  icon,
  ...rest
}: ButtonProps) => {
  const { track } = useTracking()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading) {
      track('Button', variant, 'click')
      rest.onClick?.(e)
    }
  }

  return (
    <StyledButton variant={variant} disabled={disabled} onClick={handleClick} {...rest}>
      {loading ? 'Cargando…' : (
        <>
          {icon && <span>{icon}</span>}
          {children}
        </>
      )}
    </StyledButton>
  )
}

