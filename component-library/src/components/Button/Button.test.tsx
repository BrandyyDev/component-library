import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import { FiSend } from 'react-icons/fi'

describe('Button', () => {
  it('renders with text and icon', () => {
    render(<Button icon={<FiSend />}>Enviar</Button>)
    expect(screen.getByText(/enviar/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toContainHTML('svg')
  })

  it('handles click and sends tracking', () => {
    global.fetch = vi.fn()
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
    expect(global.fetch).toHaveBeenCalled()
  })

  it('shows loading state and disables interactions', () => {
    const onClick = vi.fn()
    render(<Button loading onClick={onClick}>Enviar</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveTextContent(/cargando/i)
    fireEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })
})
