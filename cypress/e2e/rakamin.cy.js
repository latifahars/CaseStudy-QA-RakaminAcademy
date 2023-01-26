/// <reference types="cypress" />

describe('VIX Payment Feature', () =>{

    beforeEach(() => {
		cy.viewport(1280,720)
		cy.visit('https://web-staging.rakamin.com/virtual-internship-experience/explore')
	})

    it('Authenticated user checkout program (user already logged in)',() => {
        cy.get('[data-cy="login-page-button"]').eq(0).click()
        cy.get('[data-cy="login-email-text-field"]').type("latifaharum19@gmail.com")
        cy.get('[data-cy="login-password-text-field"]').type("rumarum123")
        cy.get('[data-cy="login-submit-button"]').click()
        cy.get('[data-cy="vix-card-1"]').click()
        cy.get('[data-cy="register-vix-button"]').click()
        cy.get('[data-cy="phone-number-text-field"]').type("081328731337")
        cy.get('[data-cy="linkedin-url-text-field"]').type("linkedin.com/in/latifaharum")
        cy.get('input[type=file]').selectFile('CV - Latifah Arum Sari.pdf', { action: 'drag-drop' })
        cy.get('[data-cy="vix-info-source-option-1"]').click()
        cy.get('[data-cy="agreement-checkbox"]').click()
        cy.get('[data-cy="vix-form-submit-button"]').click()
        cy.get('[data-cy="button-confirm"]').click()
        
	})

    it.only('Unauthenticated user checkout program',() => {
		cy.scrollTo(0, 500)
        cy.get('[data-cy="vix-card-1"]').click()
        cy.get('[data-cy="register-vix-button"]').click()
        cy.get('[data-cy="login-first-button"]').click()
        cy.get('[data-cy="login-email-text-field"]').type("latifaharum19@gmail.com")
        cy.get('[data-cy="login-password-text-field"]').type("rumarum123")
        cy.get('[data-cy="login-submit-button"]').click()
        cy.get('[data-cy="register-vix-button"]').click()
        cy.get('[data-cy="phone-number-text-field"]').type("081328731337")
        cy.get('[data-cy="linkedin-url-text-field"]').type("linkedin.com/in/latifaharum")
        cy.get('input[type=file]').selectFile('CV - Latifah Arum Sari.pdf', { action: 'drag-drop' })
        cy.get('[data-cy="vix-info-source-option-1"]').click()
        cy.get('[data-cy="agreement-checkbox"]').click()
        cy.get('[data-cy="vix-form-submit-button"]').click()
        cy.get('[data-cy="button-confirm"]').click()
        
	})

})