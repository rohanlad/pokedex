# Testing Approach

Personally, I would use the testing library Jest. This would involve having a jest config file in which I can setup any configurations I wish, 
such as a targeted coverage threshold. For each component file, I would create another test file
(e.g. List.test.tsx, which would contain the tests which I will write). Jest will allow me to mock the response of the Pokemon API calls,
so that I can test my code under a range of scenarios depending on what the API may return. I can also mock a user, thus allowing me to mock
actions on the page that a user might do - for example, clicking a certain pokemon, or entering a certain search term. I can therefore write a range
of tests which will cover a wide range of scenarios with respect to what a user may do on the page. These actions can be chained in sequence too.
Ultimately, this will allow me to have all bases covered with regards to unit tests, integration tests, and end to end tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
