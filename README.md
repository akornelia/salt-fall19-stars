# &lt;/salt&gt;
## Project description 

### Motivation
This is the first project you will work with in this course. 
The purpose of this excersize is to take a deep breath and dive in - doing full stack development right from scratch!
However, as this is your first encounter with the Javascript Node.js stack, it will pretty much be a _fill the gaps_ project.

You will be using the latest Node.js stack teqniques to build a full stack application. 
But(!) in this first project, we will use a minimal set of frameworks so that you will learn the fundamentals first.
The upside of that is that you will
  - become better programmers
  - not depend on only one set of frameworks
  - it will be easier and more fun to code as the course proceeds

### Domain 
This porject is entirely created to be a start off this course and does not reflect any realistic product. The domain is rather scattered.

Anyway, a finished app will have
  - simple login and authentication
  - a quotes generator
  - a list of "players" (think sports team)
  - a way to rate these players by giving them "stars"

## Getting started
### Initialize
Run `npm install` in root folder.

### Eslint
Javascript is a dynamic language. 
This will give us a very productive environment with fast feedback cycles. 
The downside of that is that we loose the compiler checks that would otherwise catch bugs for us.
To work around that in Javascript, we use linters that check our code - both for style and erroneous code constructs.

Run `npm run lint` to lint the code.

### Unit Tests
We practice test driven development (TDD). 
This means that we first write a failing test (red light), which acts as a specification for the feature we're about to implement.
_Then_ we write the most basic implementation (nothing more!) that we can think of to make the test pass (green light).

When the code passes our test, we know that we've solved the problem. But we are not done! 
Now it's time to refactor the code with the passing test as our guide. 
We remove any code duplications, and make the code better and more robust so that we can confidently say we've solved the problem with our best efforts.

We often say that we go through a feedback cycle called `red - green - refactor`:
  - Red: Write a failing test
  - Green: Write the most basic solution to the test you can think of
  - Refactor: Make the code production ready

This way of working serves several purposes
  - When done right, it's a way easier to work this way as we're solving many trivial micro problems instead of a few complex problems
  - We'll build up a test suite along with any new features that acts as a safety net as we develop our application
  - We will enforce loose coupling and good design practices.

Run `npm run test` to lint and run all tests once.

Run `npm run watch` to continuously lint and run all tests as soon as we change the code.

### Start the Server
The development server is started by running `npm run start`. You can also run `npm run restart` if you want to hot reload the server on any file change.

Point your browser to <http://localhost:3000> and go!

### End to End Tests
End to end (e2e) test serves a different purpose than unit tests. 
While unit tests focus on details and system design, e2e tests focus on the overall picture.

Typically there is a lot more ceremony around running e2e tests and the feedback loop is slower by magnitudes.
They are also more brittle to change. But that doesn't mean we shouldn't do e2e tests - we're just not doing so many of them or running them at the same frequency.

The e2e test suite is using _Selenium_, which is a browser simulation environment. 
Typically, it will load a web page info your browser and programmatically let you verify the content of that page.

Before you run Selenium the first time, you must run the install script like so `npm run selenium-setup`.

After that you start the Selenium server `npm run selenium`.

Next step is to start your web server from another terminal. 
Open a new terminal, navigate to this projects root directory and run `npm run start`.

Now you are finally ready to run the test suite! 
Open yet another terminal, navigate to this projects root directory and run `npm run e2e-test`.

## Exercise
Head over to the branch [day-1](https://github.com/saltsthlm/salt-stars/tree/day-1) for further instructions.
