import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LandingPage from '../app/landing/page'
import React from 'react';
 
describe('Page', () => {
  it('renders a heading', () => {
    const {container} = render(<LandingPage />)
 
    const heading = container.querySelector('div');
 
    expect(heading).toBeInTheDocument()
  })
})