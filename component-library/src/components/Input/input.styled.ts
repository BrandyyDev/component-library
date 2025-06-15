import styled from 'styled-components'
import { colors, spacing, borderRadius } from '../../tokensDesign/design'
type Variant = 'default' | 'error' | 'success'

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`

export const StyledInput = styled.input<{ variant: Variant }>`
  padding: ${spacing.sm};
  border: 1px solid ${({ variant }) =>
    variant === 'error' ? colors.danger : variant === 'success' ? colors.success : colors.border};
  border-radius: ${borderRadius.sm};
  outline: none;

  &:disabled {
    background-color: ${colors.disabled};
  }
`
