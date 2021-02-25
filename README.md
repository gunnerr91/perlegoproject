using node command `npm start` from `<root>\spa_app` should start the application in the default port of 3000: http://localhost:3000

in order to run all the test use node command `npm test` from `<root>\spa_app`

To run the server browse to `<root>\api` and run `npm run dev`. The api should then be served in port 8001 and should be able to fetch all book details using this url in the browser: http://localhost:8001/api/books

Should you wish to change the port the spa application is running on, you would have to update the cors origin which can be found configured in `<root>\api\server.js`

To run the api test navigate to the api directory and run `npm test`
