# Tristan Rais-Sherman/Big Human Fantasy Football App Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

Please run: 

### `npm i`

Followed by: 

### `npm start`


## Description

This is the result of my live coding test with Big Human. 
The goal was to achieve the following:
    * Implement a simple applcation that allows the user to view NFL player data
    * Consume the Sleeper API with the following link: [Sleeper API](https://api.sleeper.app/v1/players/nfl) 
    * Display a table using Material-UI of Player name, Position, and Status
    * Implement sort by name functionality

The bulk of the logic was written in the [MainPage component](https://github.com/thecodingconductor/bigHumanTest/blob/main/src/component/MainPage.js)

Using the useState hook, I created local state in the MainPage component to store an array of players, and some other fields which I did not have time to implement.

One of the most interesting curveballs in this test came from the API itself. When queried, it returns an **Object** of Objects, and not an **Array** of Objects (Which I was expecting.)

This led me to doing some quick research on Object methods, and discovered `Object.entries()` which seemed to be able to solve my problem.

Once I was able to get an array of objects, I was able to display some data to the UI. I borrowed some code from the Material-UI Documentation to build a simple table, which you can see when you run the application.

The next step was to implement search functionality, which I did not finish. You can see the logic behind it in the `setFilter()` function [here](https://github.com/thecodingconductor/bigHumanTest/blob/aeab9584d3a9199adaeacaaedee636fef69e5389/src/component/MainPage.js#L35).



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

