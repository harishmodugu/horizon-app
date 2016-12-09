# Sample app using Horizon, Angular 1.4, Webpack
A sample horizon rethinkdb app with angular 1.x

#Setup
* Install NodeJs
* Install horizon -> npm install -g horizon
* Install RethinkDb
* Run `npm install`
* Horizon needs a token secret to start the server. To generate a token:
  * Create a `secrets.toml` file under `.hz` directory
  * Add `token_secret='any text'` and save file
  * Run `hz make-token admin`
* Run `hz serve --dev` to start horizon server
* Run `npm start` and visit `http://localhost:8181`
