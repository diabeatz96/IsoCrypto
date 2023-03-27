/* eslint-disable no-undef */
import { describe, expect, vi } from 'vitest'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './components/Modal'
import React from 'react'

describe('Modal', () => {
  const mockClose = vi.fn()

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('renders with correct props', () => {
    const { getByText } = render(
        <Modal open={true} close={mockClose} />
    )

    expect(getByText('Info Box')).toBeInTheDocument()
    expect(getByText('Hi! This website was created by Adam Kostandy, Enjoy your crypto! Created with React, NES.CSS, IsometricReact')).toBeInTheDocument()
    expect(getByText('Close Box')).toBeInTheDocument()
  })

  it('calls close function when button is clicked', () => {
    const { getByText } = render(
        <Modal open={true} close={mockClose} />
    )

    const closeButton = getByText('Close Box')
    fireEvent.click(closeButton)

    expect(mockClose).toHaveBeenCalledTimes(1)
  })

  it('does not render when open prop is false', () => {
    const { queryByText } = render(
        <Modal open={false} close={mockClose} />
    )

    expect(queryByText('Info Box')).not.toBeInTheDocument()
  })
})
