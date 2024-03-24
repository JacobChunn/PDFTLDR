/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

//@ts-ignore
Cypress.Commands.add("arrayBufferToString", (buffer) => {
  const decoder = new TextDecoder("utf-8");
  //@ts-ignore
  return decoder.decode(buffer);
});

// lets cypress log in so that we can access the parser
declare namespace Cypress {
  interface Chainable<Subject> {
    loginAPI(username: string, password: string): Chainable<Subject>;
  }
}

Cypress.Commands.add('loginAPI', (username, password) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/api/auth/signin',
    body: {
      username,
      password,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    window.localStorage.setItem('authToken', response.body.authToken);
  });
});
