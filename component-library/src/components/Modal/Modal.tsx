import { ReactNode } from 'react'
import { useTracking } from '../../hooks/useTracking'
import { BodyModal, CloseModalBtn, DialogModal, FooterModal, HeaderModal, OverlayModal } from './modal.styled';

interface ModalProps {
  open: boolean
  onClose: () => void
  size?: 'small' | 'medium' | 'large'
  header?: ReactNode
  body: ReactNode
  footer?: ReactNode
}

export const Modal = ({ open, onClose, size = 'medium', header, body, footer }: ModalProps) => {
  const { track } = useTracking()

  if (!open) return null

  const handleClose = () => {
    track('Modal', size, 'close')
    onClose()
  }

  return (
    <OverlayModal onClick={handleClose}>
      <DialogModal size={size} onClick={(e) => e.stopPropagation()}>
        <HeaderModal>
          {header}
          <CloseModalBtn onClick={handleClose}>×</CloseModalBtn>
        </HeaderModal>
        <BodyModal>{body}</BodyModal>
        {footer && <FooterModal>{footer}</FooterModal>}
      </DialogModal>
    </OverlayModal>
  )
}

