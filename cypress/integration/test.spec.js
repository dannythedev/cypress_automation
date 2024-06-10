// test.spec.js
import { navigateToCareersPage } from './navigateToCareersPage';
import { navigateToPressAndAwardsPage } from './navigateToPressAndAwardsPage';

describe('Automated UI Test', () => {
  it('should navigate to the website homepage, locate Career page, locate top job posting, verify URL and career page title, go to Press & Awards, and then extract top headline posts to a .csv', () => {
    // Read the website URL from site.txt
    cy.readFile('homepage.txt').then((url) => {
      cy.log(`URL read from site.txt: ${url}`);
      // Visit the website
      cy.visit(url);

      // Perform actions related to the Careers page
      navigateToCareersPage(url);

      // Perform actions related to the Press & Awards page
      navigateToPressAndAwardsPage(url);

      cy.log(`Successfully completed task and exported .csv`);
    });
  });
});
