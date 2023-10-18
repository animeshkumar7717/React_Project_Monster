# Most important thing in React:

You have to know, when the component is rendering and re-rendering.
class, is easier to understand, when component is rendering and re-rendering.

whenever JSX, sees the curly braces {}, it know you want to access JS code. This is so powerful becuse
it can directly use JS code inside html.

    Inside JSX, REACT allows you to bind and event handlers..
    /**
     *  React only update the value, when I know the component is different. --->>> 
     * ------->>>>>>>   we dont need to copy the reference, instead of that we need to copy the value.
     * setState: It shallow merge the current object.
     */

Important Note: Always work on the functionality before going to the styling part.

React re-render in two conditions: 1
1. When setState is called 
2. When props is changed

## Life Cycle   (class component)

The main life cycle is 
1. mounting
2. updating
3. unmounting


mounting -> constructor  -> render -> React update DOM -> componentDidMount

updating -> setState()  -> render -> React update DOM -> componentDidUpdate
updating -> props  -> render -> React update DOM -> componentDidUpdate
updating -> forceUpdate()  -> render -> React update DOM -> componentDidUpdate

Unmounting -> componentWillUnmount

--- Functional Component doesn't have the above life-cycle methods, but it does follow the same life-cycle (same structure). ---


## Functional Component

They differ in how react utilize. 
-> The main thing is why React is funcitonal component as well as class component.
-> Some compony use functional component, some of them use class component but most of the company is mix.

-> It typically takes an arrow function, it is a norm of writing function.
-> There is no life-cycle in functional Component.
-> we totally think different wen we work with the functional component.
    we have to learn some thing as well.
        1. pure function
        2. im-pure function 
        3. side-effect

pure function: 
    const add = (a,b) => { return a+b }

Im-pure function:
    const c = 6
    const add = (a,b) => { return a+b }

    It will also return the same value, but what happen when c is changes: c = 5
    It is im-pure function.

This creats a side effect.
c = 3
const func = (a,b) => {
    c = a*b;

    return a*b;
}    


In React, we are writing im-pure function, hooks creates a side effect.

you really have strong foundation of javascript before doing the react work.



### `Example of React infinte Loop in functional Component`

 /** 
   * It will create infinite loop of re-render, because it comes from the browser which is different in memory... it will re-render again and again
   * It will goes to the circular loop.
   * It re-render over and over again.
   * 
   * so, we have to create a side effect in this loop using useEffect hook.
   * Side Effect: Some behaviour which is affects in the function by something which is out of the scope of that function.
  */


  fetch('https://jsonplaceholder.typicode.com/users') 
    .then((res)=> res.json()) 
    .then((users) => setMonster(users))

### `changes in React 17 and React 18`

index.js:   It doesn't export render directly. This is the major change

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Strict Mode Changes: It will re-render twice.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
