# &lt;/salt&gt;

## Ratings
A user should have the possiblity to rate the players.

### Ratings should be persisted
The ratings should be persisted.
This means that if the server is shut down and then started again, the user should still see the same ratings.
In a real application we would use a database. 
But the operating system on your computer has a really great database called the file system. Make use of that!

#### Sidenote
_It's often better to abstract away the database and use the file system in the beginning of a project. 
Using a database from the beginning puts more demands on infrastructure and it may be more difficult to back out of such decision.
It will probaly also take longer to get the first version of your app up and ready for demo. 
And guess what? - Storing on the file system may even be sufficient for production in some scenarios!_

### Ratings are personal.
Two different users should only see their own ratings.
If Joe is logged in and rates R2/D2 with two stars he should always see the two stars associated with R2/D2. (Unless he changes his ratings for R2/D2)
But if Jane is logged in and rates R2/D2 with four stars, she should always see her ratings of R2/D2 - no matter what Joe does!

### Ratings API
Create an API for your ratings. One should not be authorized to rate any players without proper authentication.

### Ratings Widget
Use [this widget](https://codepen.io/jaklec/pen/OZrVWb) to let users rate the players.

#### If you finish
1. Make sure __everybody in your mob understands how the app works__. Make sure every body can run the app on their computer!
2. Add images to the players. You may use some external API - or just download and save on disk.
3. Take a mentors role and help the other mobs.
4. Work with the regular expressions lab.
5. Do the bonus exercise to handle pagination in your API.
6. Try to make your players/:id endpoint faster by running external requests in parallel. You may use this gatekeeper function.
```javascript
function inParallel(done) {
  let result = [];
  let pending = 0;

  setTimeout(gatekeeper(null, 'one'), 200);
  setTimeout(gatekeeper(null, 'two'), 100);

  function gatekeeper(err, data) {
    let order = pending;
    pending++;
    return () => {
      pending--;

      if (err) return done(err);

      result[order] = data;

      if (!pending) return done(null, result);
    }
  }
}

inParallel((err, result) => {
  if (err) return console.log(err);

  console.log(result);
  // the results array will equal ['one','two'] even though
  // the second function had a shorter timeout.
});
```

Or you may use the `async` library to achieve the same thing. (It's _not_ a standard module!) 
```javascript
const async = require('async');
async.parallel([
  function(callback) {
    setTimeout(function() {
      callback(null, 'one');
    }, 200);
  },
  function(callback) {
      setTimeout(function() {
      callback(null, 'two');
    }, 100);
  }
],
// optional callback
function(err, results) {
  if (err) return console.log(err);

  console.log(result);
  // the results array will equal ['one','two'] even though
  // the second function had a shorter timeout.
});
```
