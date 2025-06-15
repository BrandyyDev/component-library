import styled from 'styled-components'
import { spacing, colors, borderRadius } from '../tokensDesign/design'

export const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: ${spacing.lg} ${spacing.md};
  font-family: 'Inter', sans-serif;
`

export const DemoContainer = styled.div`
  background: ${colors.background};
  border-radius: ${borderRadius.lg};
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 640px;
  border: 1px solid #e0e7ff;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.1);
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #6366f1;
  letter-spacing: -1px;
  margin-bottom: ${spacing.lg};
  text-align: center;
`

export const Section = styled.section`
  margin-bottom: ${spacing.lg};
`

export const SectionTitle = styled.h2`
  color: #334155;
  font-size: 1.3rem;
  margin-bottom: ${spacing.xs};
`

export const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.sm};
`

export const StyledSelect = styled.select`
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
`

export const StyledCheckbox = styled.input`
  accent-color: #6366f1;
`
