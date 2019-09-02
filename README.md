# &lt;/salt&gt;
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
`git clone git@github.com:saltsthlm/salt-stars-fall19.git && git checkout day-1`

### Create a new branch
When `day-1` is the active branch, do `git checkout -b day-1-NAME_OF_YOUR_MOB`

### Install any project dependencies
`npm install`

### Run the linter
`npm run lint`

Notice the linting errors.

### Run the unit test suite
`npm run test`

Watch the unit test suite fail.

### Run the server
`npm run start`

### Verify it is running
Point your browser to <http://localhost:3000>

### Run the end to end test suite
In a new terminal window, start the Selenium server `npm run selenium`.

Open a third terminal window and run `npm run e2e`.

Watch the e2e test suite fail.

### Edit code (make it work)
Your task is to make the tests pass by editing the production code. That means that you should NOT touch the test files (i.e the files with a `.spec.js` suffix)!

Open the project in Visual Studio Code like so `code .`. (Notice the dot).

Since you're already running `npm run start`, the server will automagically restart every time you save a Javascript file. If you edit a client JavaScript file the changes will be visible on page refresh.
The linter will trigger on every save aswell.

Edit code until all linting errors are gone, and all unit and e2e tests pass. It doesn't matter if it looks good or not. Just make it green!

### Refactor (make it right)
When all unit tests are passing, it's time to refactor your solution. Refactor the code until you are satisfied with the result, constantly making sure all the unit tests are passing.

### Verify the app works in the browser.
Open <http://localhost:3000> in your browser. The page should look just like before.
Now, add a parameter `name` to the URL, like so `http://localhost:3000?name=YOUR_NAME`. Verify that your name pops up on the page.

Concratulations!!! You have just completed the first exercise :)

### Retrospective
Collect your team members and reflect over what you just did. What did you learn today?
