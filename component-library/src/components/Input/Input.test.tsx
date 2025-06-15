import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders with label and placeholder', () => {
    render(<Input label="Correo" placeholder="Ingresa tu email" />)
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/ingresa/i)).toBeInTheDocument()
  })

  it('tracks on focus', () => {
    global.fetch = vi.fn()
    render(<Input label="Nombre" />)
    const input = screen.getByLabelText(/nombre/i)
    fireEvent.focus(input)
    expect(global.fetch).toHaveBeenCalled()
  })

  it('applies error style', () => {
    render(<Input label="Email" variant="error" />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveStyle('border-color: #dc3545') // danger
  })
})