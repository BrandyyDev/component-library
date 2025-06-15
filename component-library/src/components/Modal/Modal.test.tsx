import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './Modal'

describe('Modal', () => {
  it('renders content and handles close', () => {
    const onClose = vi.fn()
    render(
      <Modal open header="Título" body={<div>Contenido</div>} onClose={onClose} />
    )
    expect(screen.getByText('Contenido')).toBeInTheDocument()
    fireEvent.click(screen.getByText('×'))
    expect(onClose).toHaveBeenCalled()
  })
})
