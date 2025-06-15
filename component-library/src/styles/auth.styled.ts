import styled from 'styled-components'
import { spacing, colors, borderRadius } from '../tokensDesign/design'

export const AuthWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e0f2fe, #f0f9ff);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: ${borderRadius.lg};
  width: 100%;
  max-width: 400px;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
  font-size: 1.8rem;
  margin-bottom: ${spacing.md};
  color: #3b82f6;
  text-align: center;
`


export const ContainerButtons = styled.div`
  display: flex;
  gap: ${spacing.sm};
  justify-content: space-around;

`