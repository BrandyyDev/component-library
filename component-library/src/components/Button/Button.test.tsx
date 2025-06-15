import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import { FiSend } from 'react-icons/fi'
import { vi, describe, it, expect, afterEach } from 'vitest'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Button', () => {
  it('renders with text and icon', () => {
    render(<Button icon={<FiSend />}>Enviar</Button>)
    expect(screen.getByText(/enviar/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toContainHTML('svg')
  })

  it('handles click and sends tracking', async () => {
    global.fetch = vi.fn(() =>  Promise.resolve({ json: () => Promise.resolve({}) }))
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))

    expect(handleClick).toHaveBeenCalled()
  })

it('shows loading state and disables interactions', () => {
  const onClick = vi.fn()
  render(<Button loading onClick={onClick}>Enviar</Button>)
  const btn = screen.getByRole('button')

  expect(btn).toHaveTextContent(/cargando/i)
  expect(btn).toBeDisabled()
  fireEvent.click(btn)
  expect(onClick).not.toHaveBeenCalled()
})
})
