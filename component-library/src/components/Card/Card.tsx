import { ReactNode } from 'react'
import { useTracking } from '../../hooks/useTracking'
import { BodyCard, FooterCard, HeaderCard, WrapperCard } from './card.styled';

interface CardProps {
  header?: ReactNode
  body: ReactNode
  footer?: ReactNode
  image?: string
  bordered?: boolean
}

export const Card = ({ header, body, footer, image, bordered = false }: CardProps) => {
  const { track } = useTracking()

  return (
    <WrapperCard bordered={bordered} onClick={() => track('Card', bordered ? 'bordered' : 'plain', 'click')}>
      {image && <img src={image} alt="card visual" />}
      {header && <HeaderCard>{header}</HeaderCard>}
      <BodyCard>{body}</BodyCard>
      {footer && <FooterCard>{footer}</FooterCard>}
    </WrapperCard>
  )
}

