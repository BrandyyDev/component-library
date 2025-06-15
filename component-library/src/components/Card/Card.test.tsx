import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders header, body and footer', () => {
    render(<Card header="Header" body="Body" footer="Footer" />)
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})