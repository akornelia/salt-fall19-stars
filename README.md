# &lt;/salt&gt;
## Day 5

### SWAPI

Play around with [SWAPI](https://swapi.co/api/) using

- Your browser
- Postman
- curl

When you all feel comfortable with using all three tools to execute `GET` requests and you have a good idea of how SWAPI works, you will use SWAPI to implement the production code of the players endpoint.

### Production Mode
Implement the players production code!

Use SWAPI to list all players.

A `GET` request against `/api/players/` should result in a list with players and their id
```json
{
  "count":87,
  "next":"2",
  "results":[
    {
      "name":"Luke Skywalker",
      "eid":"1"
    }, {
      "name":"C-3PO",
      "eid":"2"
    }, {
      "name":"Obi-Wan Kenobi",
      "eid":"10"
    }
  ]
}
```

A `GET` request against `/api/players/5` should result in a player object
```json
{
  "name":"Leia Organa",
  "gender":"female"
}
```

You must
1. implement the production http client code.
2. make sure the production http client is used when running in production. Otherwise, the mocked version should be used.

#### Bonus Exercise
If you finish the exercise above and don't have anything to do, you may try to implement pagination on the roster page.
Pagination is a bonus feature, so implement it in a separate branch based on your working branch.

Do it in such way that you can cherry pick the pagination functionality into tomorrows exercise which do not contain any pagination functionality.
This is also a good strategy if you begin to implement paging, but don't have the time to finish.
You may get more slack time before this app is finished where you can continue with this bonus exercise.
