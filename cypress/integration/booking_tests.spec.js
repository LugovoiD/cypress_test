describe('Check places', () => {
  it('visit a site', () => {
    cy.visit('https://www.booking.com/')
    // Check that url include booking
    cy.url().should('include', 'booking')
  })

  it('Enter destination and dates', () => {
    // Get an sear bar, type into it and verify that the value has been updated
    const NY = 'New York, New York State, United States'
    cy.get('#ss')
      .type(NY)
      .should('have.value', NY)

    // Choose a dates and verify that the value has been updated
    cy.contains('Check-in').click({force: true})
    cy.get('.bui-calendar')
      .get('[aria-label="18 November 2020"]').click()
      .get('[aria-label="25 November 2020"]').click()
  })

  it('Click submit button', ()=>{
    cy.get('.sb-searchbox__button').click()
    // Check redirect url
    cy.url().should('include', '/searchresults')
  })

  it('Have sum search results', ()=>{
    // Grab search results and check that it have any results
    cy.get('#hotellist_inner').children().should('have.length.at.least', 3)
  })
})