/// <reference types="Cypress"/>

beforeEach(() => {
   cy.visit('https://inespre.gob.do/')
})

    

describe ('Validation home page elements', function(){

    it('Validation header elements', function(){
        cy.get('.kad-standard-logo').should('be.visible')
        cy.get('.search-query').should('be.visible')
        cy.get('a > p').should('be.visible')
        cy.get('.zoom-social_icons-listan').should('be.visible')
        cy.get('.menu-item-22137 > a > .fab').should('be.visible')
        cy.get('.menu-item-22138 > a > .fab').should('be.visible')
        cy.get('.menu-item-22139 > a > .fab').should('be.visible')
    })

    it('Validation menu elements', function(){
        cy.get('.icon-home').should('be.visible')
        cy.get('.menu-sobre-nosotros > .sf-with-ul').should('be.visible')
        cy.get('.menu-servicios > .sf-with-ul').should('be.visible')
        cy.get('.menu-programas > .sf-with-ul').should('be.visible')
        cy.get('.menu-transparencia > a').should('be.visible')
        cy.get('.menu-noticias > .sf-with-ul').should('be.visible')
        cy.get('.menu-descargas > a').should('be.visible')
        cy.get('#menu-main-menu > .menu-contacto > a').should('be.visible')
        cy.get('.menu-foros > a').should('be.visible')
    })

    it('Validation body elements', function(){   
        cy.get('#panel-2-1-0-0 > .so-widget-sow-headline > .sow-headline-container > .sow-headline').should('be.visible')
        cy.get('#panel-2-1-0-0 > .so-widget-sow-headline > .sow-headline-container > .sow-sub-headline').should('be.visible')
        cy.get('.textwidget > :nth-child(1) > :nth-child(2) > a').should('be.visible')
        cy.get('#panel-2-1-0-1 > .textwidget > :nth-child(1) > :nth-child(3) > a').should('be.visible')
        cy.get('.textwidget > :nth-child(1) > :nth-child(4) > a').should('be.visible')
        cy.get('.textwidget > :nth-child(1) > :nth-child(5) > a').should('be.visible')
        cy.get('.textwidget > :nth-child(2) > :nth-child(1) > a').should('be.visible')
        cy.get('.textwidget > :nth-child(2) > :nth-child(2) > a').should('be.visible')
        cy.get('.textwidget > :nth-child(2) > :nth-child(3) > a').should('be.visible')
        cy.get('.textwidget > :nth-child(2) > :nth-child(4) > a').should('be.visible')
        cy.get('#panel-2-2-0-0 > .so-widget-sow-headline > .sow-headline-container > .sow-headline').should('be.visible')
        cy.get('#panel-2-2-0-0 > .so-widget-sow-headline > .sow-headline-container > .sow-sub-headline').should('be.visible')
        cy.get('.especial-headline > .so-widget-sow-headline > .sow-headline-container > .sow-headline').should('be.visible')
        cy.get('.icon-1-1 > .aps-icon-link > img').should('be.visible')
        cy.get('.icon-1-2 > .aps-icon-link > img').should('be.visible')
        cy.get('.icon-1-3 > .aps-icon-link > img').should('be.visible')
        cy.get('.icon-1-4 > .aps-icon-link > img').should('be.visible')
        cy.get('#panel-2-5-1-0 > .so-widget-sow-editor > .siteorigin-widget-tinymce > div > .aps-icon-link > .alignnone').should('be.visible')
        cy.get('#panel-2-5-2-0 > .so-widget-sow-editor > .siteorigin-widget-tinymce > div > .aps-icon-link > .alignnone').should('be.visible')
        cy.get('#panel-2-6-0-0 > .so-widget-sow-editor > .siteorigin-widget-tinymce > div > .aps-icon-link > .alignnone').should('be.visible')
        cy.get('#pgc-2-7-1 > .boletin-row').should('be.visible')
        cy.get('#panel-2-10-0-0 > .so-widget-sow-headline > .sow-headline-container > .sow-headline').should('be.visible')
        cy.get('#pgc-2-10-0').should('be.visible')
    })

    it('Validation footer elements', function(){
        cy.get('.aligncenter')
        cy.get('.a2 > a > img')
        cy.get('.a3 > a > img')
        cy.get('.e1 > a > img')
        cy.get(':nth-child(3) > .footerescudo > .p1')
        cy.get(':nth-child(3) > .footerescudo > :nth-child(3)')
        cy.get(':nth-child(3) > .footerescudo > :nth-child(4)')
        cy.get(':nth-child(3) > .footerescudo > :nth-child(5)').should('contain.text', 'Tel: (809) 621-0020 | informacion@inespre.gob.do')
        cy.get(':nth-child(3) > .footerescudo > :nth-child(6)')
        cy.get('.footerescudo > :nth-child(8)')
    })

})

describe('Validation contact page element', function(){

    it('Validation body elements', function(){
        cy.get('#menu-main-menu > .menu-contacto > a').click()
        cy.get('.theme-color-hover > .item-info-content').should('be.visible')
        cy.get('#panel-33-1-1-0 > .textwidget > .item-info-content').should('be.visible')
        cy.get('#panel-33-1-3-0 > .textwidget > .item-info-content').should('be.visible')
        cy.get('#panel-33-2-0-0 > .textwidget > .item-info-content').should('be.visible')
        cy.get('#panel-33-2-1-0 > .textwidget > .item-info-content').should('be.visible')
        cy.get('#panel-33-2-2-0 > .textwidget > .item-info-content').should('be.visible')
        cy.get('.form-contact').should('be.visible')
        cy.get('#pgc-33-7-0').should('be.visible')
        cy.get('#panel-33-6-1-0 > .so-widget-sow-editor > .siteorigin-widget-tinymce > :nth-child(1)').should('be.visible')
        cy.get('.siteorigin-widget-tinymce > :nth-child(2) > iframe').should('be.visible')
        
    })

})



