describe('Demo UI integration', () => {
  it('shows the prison demo heading', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello from the DPR demo UI')
  })

  it('responds on /ping', () => {
    cy.request('/ping').its('body').should('eq', 'ok')
  })
})
