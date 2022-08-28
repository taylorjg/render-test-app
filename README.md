# Description

Heroku [recently announced](https://blog.heroku.com/next-chapter) that they are going to deprecate free resources (free plan for Heroku Dynos, free plan for Heroku Postgres, etc.). That's a pisser. So, I am hunting round for alternatives. The first one I am looking at is [Render](https://render.com/). I thought I would create a little React / Node.js app to try out Render.

# Spin-up Time

The deployed [web app](https://render-test-app-iz7h.onrender.com) takes 30 seconds or so to spin up.

# TODO

* ~~Use [Create React App](https://create-react-app.dev/) to spin up a project~~
* ~~Add a basic form to allow an input string to be entered which we reverse after clicking a button~~
* ~~Add a basic Express app to serve out the single page application~~
* ~~Deploy the web app to Render~~
* ~~Add tests~~
* ~~Add server-side logging~~
* ~~Add Google Analytics~~
* ~~Move the reversing of the string from client-side to server-side~~
* ~~Use GitHub Actions to run tests and deploy to Render~~
* ~~Add a PostgreSQL database to record each request to reverse a string~~

# Links

* [Cloud Application Hosting for Developers | Render](https://render.com/)
  * [Render vs Heroku](https://render.com/render-vs-heroku-comparison)
  * [Migrate from Heroku to Render](https://render.com/docs/migrate-from-heroku)
  * [Render Deploy action](https://github.com/marketplace/actions/render-deploy-action)
* [Cloud Application Platform | Heroku](https://www.heroku.com/)
  * [Heroku’s Next Chapter](https://blog.heroku.com/next-chapter)
  * [Deprecation of Heroku Free Resources](https://devcenter.heroku.com/changelog-items/2461)
