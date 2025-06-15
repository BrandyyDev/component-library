import styled from "styled-components"
import { colors, spacing, borderRadius } from "../../tokensDesign/design"

export const WrapperCard = styled.div<{ bordered: boolean }>`
  border: ${({ bordered }) => (bordered ? `1px solid ${colors.border}` : 'none')};
  padding: ${spacing.md};
  border-radius: ${borderRadius.md};
  background: ${colors.background};
`

export const HeaderCard = styled.div`
  font-weight: bold;
  margin-bottom: ${spacing.sm};
`

export const BodyCard = styled.div`
  margin-bottom: ${spacing.sm};
`

export const FooterCard = styled.div`
  border-top: 1px solid ${colors.border};
  padding-top: ${spacing.sm};
`
