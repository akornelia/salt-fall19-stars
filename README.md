# &lt;/salt&gt;
## Day 4 

### Roster
You are going to implement a new page, `players.html`, in the app with a roster listing all the players.

### API
You will create a backend service with an API that lists all players. 
Today, you will create a mocked version that will be used during development. (You will create the real implementation tomorrow)

1. Inspect the mock `remote-players-client.mock.js`. This file contains a fake implementation with the same interface as the real implementation that you will develop tomorrow. It has two public functions: One that fetch _all_ players and one that fetch _one_ player by id.
2. Implement the business logic in `players-service.js`. The test suite for that class has some failing tests. Fix them.
3. The API to our service is located in `players.js` in the `players` module of our server. It also has some failng test that has to be fixed.

### Client
The new html file in the project is meant to show all the players. But the client side JavaScript that is used to fetch data from our backend API is not yet implemented.

4. To fetch the data, we execute the code client side `players-client.js`. However it is not yet implemented. Remember that this kind of code is not testable. You have to do this without any test suite!
5. To make the data show up on the web page, you also need some glue code. This code is testable! The tests are located in `players.spec.js` in the client side code base and the implementation is supposed to go in `players.js`.

Remember that you have to pack the client side JavaScript (create release) before running the app. 

#### Bonus Exercise
If you finish the exercise above and don't have anything to do, you may try to implement pagination on the roster page.
Pagination is a bonus feature, so implement it in a separate branch based on your working branch.

Do it in such way that you can cherry pick the pagination functionality into tomorrows exercise which do not contain any pagination functionality. 
This is also a good strategy if you begin to implement paging, but don't have the time to finish. 
You may get more slack time before this app is finished where you can continue with this bonus exercise.
