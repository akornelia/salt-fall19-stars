# </salt>
## Day 3

This is the day when you will add user authentication to the app. (Note that this authentication mechanism is _not safe for use in production!_)

### Cookies

The authentication mechanism you will add is cookie based. 
This is not how we do it today, but its a good exercise to learn the basics about both authentication and cookies.

### Auth Form

You will add a new form to this app. 
If the user has not authenticated (there is no auth cookie in the browser), he/she will be redirected to the form.

### API

When the user submits the form, there will be a `POST` request against the `/api/authenticate` endpoint on the backend.
It's enough to provide the password `secret` to authenticate.

### Test
Code until the unit tests pass. Verify the app works by running the e2e test suite. Finally verify it works manually in the browser.
Try to add and remove the cookie using the dev tools in your browser - make sure you know how to do this in both Chrome and Firefox.
