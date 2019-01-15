# &lt;/salt&gt;
## Day 2
Today you will be implementing a qoutes engine on the page. Fortunately, you don't have to write it by yourselves ;)
Instead you will use a third party API that you will find here <https://quotesondesign.com/api-v4-0/>.

### Quotes On Design
#### Config
The API is free to use for our purposes. However, we don't want to hammer the API while we're developing against it. __Therefore we will mock the API calls in development environment and only use the real stuff when we are in "production".__

If you inspect `package.json` you will see that we are setting an environment variable there which is called `NODE_ENV`. This is the standard way to switch the app between running in different modes. Make sure you understand how the configuration works!

However, the client side code is not running on the node server and will thus not know about `NODE_ENV`. Therefore, we use a bundler (in this case webpack) to bundle all our assets that the client app needs. We create different bundles depending on weather `NODE_ENV` is set to `development` or `production`.

#### XHR
You will be using `XMLHTTPRequest` (XHR) for the http requests against the API. XHR is a low level http client that has been around for a long time. However, it is not very easy to use and in the past, it used to behave different between browsers. That problem jQuery solved in the past. But today, XHR works quite well across all modern browsers. It's still cumbersome to use though. Nowdays (depending on browser support requirements), we often use `fetch` instead, but stick with XHR for this exercise! (You will be using fetch soon!!!)

Both [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) and [W3C](https://www.w3schools.com/xml/xml_http.asp) has good XHR tutorials.

## Test
Code until the unit tests pass. Verify the app works by running the e2e test suite. Finally verify it works manually in the browser. _Make sure it works in both Chrome and Firefox._

## Creating a bundle
### Development release
`npm run dev-release`

### Production release
`npm run prod-release`
