/// <reference types="cypress" />


import 'cypress-file-upload';
import AuthService from "../../../src/Services/AuthService";

describe('FrontTest' , () =>{

    const username = "tester";
    const password = "test";

    before(()=> {
        cy.visit('http://localhost:3000')
    })

    it('has a title ', function () {
        cy.contains('The best free stock photos');
        expect(1);
    });

    it('Login', function () {
        cy.get('.login').click();
        cy.url().should('include','login');
        cy.get('input[name=username]').type(username);
        cy.get('input[name=password]').type(password);
        cy.get('button[type=submit]').click();

    });

    it('Upload/Delete then Logout', function () {
        cy.get('.upload').click();
        cy.wait(2000)
        cy.url().should('include','upload');
        cy.get('.ReactTags__tagInputField').type("happy dog{enter}");
        const yourFixturePath = 'dogimg.jpeg';
        cy.get('input[type="file"]').attachFile(yourFixturePath);
        cy.wait(2000)
        cy.get('.img-wrap').first().click();
        cy.wait(1000)
        cy.get('button[name=delete]').click();
        cy.get('.logout').click();
    });






});