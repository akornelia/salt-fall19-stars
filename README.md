# &lt;/salt&gt;
## Day 7

### Data Aggregation
Many businesses and applications of today are build upon aggregation of data from a variety of sources.
It can be anything from enhancing the core business data with some third party service, e.g. currency conversions or weather forecasts, to pure aggregation services such as news aggregators.

#### Biography
You will now add biography to each player. To do that you will fetch data for each player from __Wikipedia__ which you will _aggregate_ with the existing data from SWAPI.

#### Wikipedia
Fetching data from Wikipedia is fairly easy. As an example, you may use this url, `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&titles=Nirvana_(band)`, to fetch data about the rock band Nirvana.
_Keep in mind that data from Wikipedia may be dirty or it may not even exist at all for the resource you are requesting._

Play around with Wikipedia from your browser, Postman or curl to get a feel for how you can fetch the data you need from Wikipedia.

- What should happen if you don't get any result from Wikipedia?
- Can you implement different query strings?

### Configuration
Remember to only use the mocked version when you are developing the service. The real requests against wikipedia should _only_ be used when running the server in production mode.
