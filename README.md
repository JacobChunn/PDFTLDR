Install the following dependencies:

- Node JS
- Git (to clone)

## TO RUN THE PROJECT

- Navigate to the root of the project folder
- Create a ".env" file and place in there environment variables that should be provided to you (for the database and OpenAI API)
- Type "npm install" to install dependencies
- Type "npm run dev" in a terminal

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### TO RUN THE CYPRESS TESTS

**Ensure that the project is running before continuing**

- Navigate to the root of the project folder in powershell terminal
- Type "npm install" to install dependencies if you haven't done this yet
- Type "npx cypress open" to open cypress
- Select "E2E Testing"
- Select "Chrome" and click "Start E2E Testing in Chrome"
- This will open a new window. Then select the "spec.cy.ts" file
- This will run the tests and display the results on the left, refresh the page to test again

### TO RUN THE JEST TESTS

- Navigate to the root of the project folder in powershell terminal
- Type "npm install" to install dependencies if you haven't done this yet
- Type "npm test" and this while run the tests and display the results on the terminal
