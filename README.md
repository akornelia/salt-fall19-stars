# </salt>
## Day 1 
Today we are going to explore our environment. Today's task is to 

- check out this branch
- create a new branch based on this branch named `day-1-NAME_OF_YOUR_MOB`
- run the server and verify you can see the index page
- run unit tests and verify that they are failing
- run e2e tests and verify that they are failing
- open Visual Studio Code and edit code until the failing unit test works
- run both the unit test and the e2e test suites to verify the app is working
- manually verify the app is working in a browser

### Check out this branch
`git clone git@github.com:saltsthlm/salt-stars.git && git checkout day-1`

### Create a new branch
When `day-1` is the active branch, do `git checkout -b day-1-NAME_OF_YOUR_MOB`

### Install any project dependencies
`npm install`

### Run the server
`npm run start` or `npm run restart`

### Verify it is running
Point your browser to <http://localhost:3000> 

### Run the unit test suite
`npm run test` or `npm t`

Watch the test suite fail.

### Run the end to end test suite
In your terminal, run `npm run start` to start the server.

Open another terminal window and run `npm run selenium-setup`. (You only have to do this step once)
Then start the Selenium server `npm run selenium`.

Open yet another termianl window and run `npm run e2e`.

Watch the test suite fail.

### Edit code
Your task is to make the unit test pass by editing the production code. That means that you shall not touch the test files! That's the files with a `.spec.js` suffix.

Open the project in Visual Studio Code like so `code .`. (Notice the dot)

Open another terminal window and run the unit test suite in watch mode `npm run watch`. This will trigger the suite to run automatically every time you save a JavaScript file!

Edit code until all unit tests pass. It doesn't matter if it looks good or not. Just make them pass!

### Refactor
When all unit tests are passing, it's time to refactor your solution. Refactor the code until you are satisfied with the result, constantly making sure all the unit tests are passing.

### Run the e2e suite again and make sure the app works

### Verify the app works in the browser. 
Open <http://localhost:3000> in your browser. The page should look just like before.
Now, add a parameter `name` to the URL, like so `http://localhost:3000?name=YOUR_NAME`. Verify that your name pops up on the page.

Concratulations!!! You have just completed the first exercise :)

### Retrospective
Collect your team members and reflect over what you just did. What did you learn today?
