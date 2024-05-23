# OVERVIEW

With time being valuable, it is often that we must try and absorb information as quickly and efficiently as possible

PDFTLDR serves to summarize wordy or lengthy documents into one of three formats:

- Bullet points
- Paragraph
- Sentence

![pdftdlr-summarize-screen](https://github.com/JacobChunn/PDFTLDR/assets/123501656/fcf0a85e-bea0-4d6c-8c00-73b48930b691)



## MAIN FUNCTIONALITIES

### Signing up and Logging in

- Before a user can summarize documents, they must create an account

- They do this by selecting sign up in the upper right corner or by attempting to access "Text Bot" or "Profile" in the center navbar and clicking sign up when at the login screen

- They are then prompted with a sign up menu for the user to fill out. Upon signing up, the user is automatically signed in

- The user can also login if they already have an account

- They can log out at any time through the "Log Out" option at the top right

### Summarizing a document

- After a user has signed in, they can navigate to the "Text Bot" tab to summarize a document

- They can then upload a document via the first blue button and provide a name for the document under the "Save As" field (The summarized document is automatically saved upon summarizing)

- They can also select the summary type with the radio buttons under "Save As" which are "Paragraph", "Bullet Points" or "Sentence"

- After clicking "Summarize," the document will summarize the text within the document and output it in a container to the left

### Viewing saved summaries

- A user can view their past summaries by navigating to the "Profile" tab

- This will display a list of all the past summarizations that the user has performed

- The user can select a summary from the list or they can search for a specific summary

- They can then select the view button to open a modal with information about the summary

---

### TECH STACK

- React with Tailwind CSS
- Next.js with Typescript
- Vercel for deployment
- Postgres for database





## TO RUN THE PROJECT

Install the following dependencies:

- Node JS
- Git (to clone)

Then:

- Navigate to the root of the project folder
- Create a ".env" file and place in there environment variables that should be provided to you (for the database and OpenAI API)
- Type "npm install" in a powershell terminal to install dependencies
- Type "npm run dev" in a powershell terminal

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

