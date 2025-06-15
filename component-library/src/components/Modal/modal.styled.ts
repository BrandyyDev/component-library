import styled from "styled-components"
import { colors, spacing, borderRadius } from '../../tokensDesign/design'

export const OverlayModal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DialogModal = styled.div<{ size: string }>`
  background: ${colors.background};
  border-radius: ${borderRadius.md};
  padding: ${spacing.md};
  width: ${({ size }) =>
    size === 'small' ? '300px' : size === 'large' ? '700px' : '500px'};
`

export const HeaderModal = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BodyModal = styled.div`
  margin-top: ${spacing.sm};
`

export const FooterModal = styled.div`
  margin-top: ${spacing.md};
`

export const CloseModalBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.25rem;
  cursor: pointer;
`
