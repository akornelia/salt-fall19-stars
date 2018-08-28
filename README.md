# &lt;/salt&gt;
## Day 5

### SWAPI

Play around with SWAPI using 

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

