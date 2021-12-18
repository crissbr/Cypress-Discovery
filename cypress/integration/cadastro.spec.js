
describe('Cadstro', ()=>{
    it('Seja um entregador', ()=>{
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Cristiane Cordeiro',
            cpf: '27788976000',
            email: 'criss.br@hotmail.com',
            whatsapp: '11992693136'
        }

        cy.get('input[name= "name"]').type(entregador.nome)
        cy.get('input[name= "cpf"]').type(entregador.cpf)
        cy.get('input[name= "email"]').type(entregador.email)
        cy.get('input[name= "whatsapp"]').type(entregador.whatsapp)

    })
})