import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'
import { vi, describe, it, expect, afterEach } from 'vitest'

// 🔁 mock global de fetch y del hook
vi.mock('../../hooks/useTracking', () => ({
  useTracking: () => ({
    track: vi.fn(() =>
      global.fetch?.('/track', {
        method: 'POST',
      })
    ),
  }),
}))

afterEach(() => {
  vi.restoreAllMocks()
})

describe('Input', () => {
  it('renders with label and placeholder', () => {
    render(<Input label="Correo" placeholder="Ingresa tu email" />)
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/ingresa/i)).toBeInTheDocument()
  })

  it('tracks on focus', () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    )

    render(<Input label="Nombre" />)
    const input = screen.getByLabelText(/nombre/i)
    fireEvent.focus(input)

    expect(global.fetch).toHaveBeenCalled()
  })

  it('applies error style', () => {
    render(<Input label="Email" variant="error" />)
    const input = screen.getByLabelText(/email/i)
    expect(input).toHaveStyle('border-color: #dc3545')
  })
})
