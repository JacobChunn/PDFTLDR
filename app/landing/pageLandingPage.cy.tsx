import React from 'react'
import LandingPage from './page'

describe('<LandingPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LandingPage />)
  })
})