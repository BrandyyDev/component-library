import styled from 'styled-components'
import { spacing, colors, borderRadius } from '../../tokensDesign/design'

type Variant = 'primary' | 'secondary' | 'danger'

export const StyledButton = styled.button<{ variant: Variant }>`
  padding: ${spacing.sm} ${spacing.md};
  border: none;
  border-radius: ${borderRadius.md};
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
  background-color: ${({ variant }) => colors[variant]};

  &:disabled {
    background-color: ${colors.disabled};
    cursor: not-allowed;
  }
`
