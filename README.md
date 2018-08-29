# &lt;/salt&gt;
## Day 5

### SWAPI

Play around with [SWAPI](https://swapi.co/api/) using 

- Your browser
- Postman
- curl

When you all feel comfortable with using all three tools to execute `GET` requests and you have a good idea of how SWAPI works, 
you will use SWAPI to implement the production code of the players endpoint.

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
    },
    {
      "name":"C-3PO",
      "eid":"2"
    },
    ...
    {
      "name":"Obi-Wan Kenobi",
      "eid":"10"
    }
  ]
}
```

A `GET` request against `/api/players/6` should result in a player object
```json
{
  "name":"Owen Lars",
  "gender":"male"
}
```

#### Bonus Exercise
If you finish the exercise above and don't have anything to do, you may try to implement paging on the roster page.
Paging is a bonus feature, so implement it in a separate branch based on your working branch.

Do it in such way that you can cherry pick the paging functionality into tomorrows exercise which do not contain any paging functionality. 
This is also a good strategy if you begin to implement paging, but don't have the time to finish. 
You may get more slack time before this app is finished where you can continue with this bonus exercise.
