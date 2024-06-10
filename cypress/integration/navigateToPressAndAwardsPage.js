// navigateToPressAndAwardsPage.js
export function navigateToPressAndAwardsPage(url) {
  // Hover over Resources tab
  cy.contains('Resources').trigger('mouseover');

  // Click on Press & Awards
  cy.contains('Press & Awards').click({ force: true });

  // Verify URL to match Press and Awards
  cy.url().should('eq', `${url}resources?type=Press+%26+Awards`);

  // Extract and write top headline posts to a CSV file
  cy.get('.resources-card_category:contains("Press & Awards")')
    .siblings('.resources-card_headline')
    .then(($posts) => {
      const headlines = $posts.map((index, el) => Cypress.$(el).text().trim()).get();
      cy.writeFile('top_headline_posts.csv', headlines.join('\n'));
    });
}