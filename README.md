# Automated UI Test

This project automates UI tests for a website.

## Setup Homepage URL

### Super Important: To run this script, create a `homepage.txt` file in the root directory with the website URL.

**homepage.txt**'s content:
```plaintext
https://www.{company_name}.com
```

## Overview

Tests navigate a website specified in `homepage.txt`, performing actions and verifying behaviors.

## Test Structure

- **homepage.txt**: Contains the site URL.
- **cypress/integration/test.spec.js**: Main test scenario.
- **cypress/integration/navigateToCareersPage.js**: Functions to navigate to Careers page.
- **cypress/integration/navigateToPressAndAwardsPage.js**: Functions for Press & Awards page.

## Dependencies

- [Cypress](https://www.cypress.io/): For end-to-end testing.

## Test Scenario

1. **Navigates to Homepage**
   - Visits the website.

2. **Navigates to Careers Page**
   - Hovers over 'About' tab.
   - Clicks 'Careers'.
   - Verifies URL matches Careers page.
   - Extracts and verifies job information.

3. **Navigates to Press & Awards Page**
   - Hovers over 'Resources' tab.
   - Clicks 'Press & Awards'.
   - Verifies URL matches page.
   - Extracts top posts to `top_headline_posts.csv`.

## Running the Tests

1. Clone this repository. `git clone https://github.com/dannythedev/cypress_automation` in terminal.
2. Make sure you are in the root directory of the repository. This is super important. You may need to write `cd .\cypress_automation\`.
3. Install Cypress using `npm install cypress` in terminal.
4. Create `homepage.txt` in root directory with homepage URL.
5. Run `test.spec.js` using `npx cypress run --spec "cypress/integration/test.spec.js"` in terminal.
