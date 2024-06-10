
// navigateToCareersPage.js
export function navigateToCareersPage(url) {
  // Hover over the 'About' tab
  cy.contains('About').trigger('mouseover');

  // Click on 'Careers' using {force: true} option
  cy.contains('Careers').click({ force: true });

  // Verify the URL to match the Careers page
  cy.url().should('eq', `${url}careers`);

  // Extract and verify job information
  cy.get('.jobs_container .jobs_block:not(.hide)').each(($jobsBlock) => {
    cy.wrap($jobsBlock)
      .find('.job_cell').first()
      .then(($jobCell) => {
        const jobHeadline = $jobCell.find('.job-cell_headline').text().trim();
        cy.log(`Job Title: ${jobHeadline}`);

        // Visit the job details page
        cy.contains(jobHeadline).click({ force: true });

        // Verify the job title on the new page
        cy.contains('h2', jobHeadline).invoke('text').then((title) => {
          cy.log(`Verified title career in new career page: ${title}`);
          expect(title).to.eq(jobHeadline); // Ensure the job title matches
        });

        // Go back to the Careers page
        cy.go(-1);
      });
  });
}