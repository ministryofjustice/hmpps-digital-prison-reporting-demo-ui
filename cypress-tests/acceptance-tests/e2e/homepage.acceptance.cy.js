describe('Demo UI acceptance (DEV)', () => {
  it('serves /ping', () => {
    cy.request('/ping').its('body').should('eq', 'ok')
  })

  it('shows the prison demo heading', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello from the DPR demo UI')
  })
})
