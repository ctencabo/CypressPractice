describe('Navigation to home page', () => {
    it('Test Case 1 - Happy Flow', () => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')

        // Locators
        cy.get('a[href="index.php"]').within('tr:first').as('homeSideBar')

        //
        cy.get('@homeSideBar').click()
    })
})