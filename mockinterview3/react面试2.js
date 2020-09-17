import { element } from "prop-types"

1.Setstate:
Why should we not update state directly?
setState() is the only legitimate way to update state after the initial state setup. 
/Setstate, thunk is asynchronous;
require sys;/

The rule of thumb is to never mutate state directly.
Always use setState() to change state. Modifying state directly, will not cause the component to re-render.

reconciliation:
The reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state. 

2.What does connect function do in react
The connect() function connects a React component to a Redux store.
It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

3.How Redux works?
react element

Action creators

Store

Reducers

4Portals:
provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

5Pure component mainly for class component
If your component renders the same result given the same props.

6Fragments:
A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

7HOC:
    Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
    . Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. 
    The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux’s connect and Relay’s createContainer.

    when to use HOC?
    re use, e.g. a form just with different props.

8    lazy loading
The loading attribute gives us the option to delay off-screen images and iframes until users scroll to their location on the page. loading can take any of these three values:


9How to optimize a react application
Use React. PureComponents.
Implement immutable data structures.
Take out unnecessary source code.
Use constant and inline elements.
Get chunky.
Use Gzip or Brotli compression.
Use ESLint-plugin-React.
Invoke high order components.

10.ReactJS - Best Practices
In this chapter, we will list React best practices, methods, and techniques that will help us stay consistent during the app development.

State − The state should be avoided as much as possible. It is a good practice to centralize the state and pass it down the component tree as props. Whenever we have a group of components that need the same data, we should set a container element around them that will hold the state. Flux pattern is a nice way of handling the state in React apps.

PropTypes − The PropTypes should always be defined. This will help is track all props in the app and it will also be useful for any developer working on the same project.

Render − Most of the app's logic should be moved inside the render method. We should try to minimize logic in component lifecycle methods and move that logic in the render method. The less state and props we use, the cleaner the code will be. We should always make the state as simple as possible. If we need to calculate something from the state or props, we can do it inside the render method.

Composition − React team suggests to use a single responsibility principle. This means that one component should only be responsible for one functionality. If some of the components have more than one functionality, we should refactor and create a new component for every functionality.

Higher Order Components (HOC) − Former React versions offered mixins for handling reusable functionalities. Since mixins are now deprecated, one of the solutions is to use HOC.

11.module name of a React App;

12.render props
The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
 A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

13.refs
provide a way to access DOM nodes or React elements created in the render method.
There are a few good use cases for refs:
Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.


14.Memo
React.memo is a HOC. for function component
If your component renders the same result given the same props, you can wrap it in a call to React.
memo for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

15.HTTP calls in React
Fetch axios 

16Use Effecthook:
1.By using this Hook, you tell React that your component needs to do something after render. 
React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
2. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. 
3.Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.


17Error boundaries 
are React components that catch JavaScript errors anywhere in their child component tree, 
log those errors, and display a fallback UI instead of the component tree that crashed. 
Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.

18What  does
mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
It is called every time the store state changes.
It receives the entire store state, and should return an object of data this component needs.

19.
In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.
The state can be initialized by props.

20event binding
With React, typically you only need to bind the methods you pass to other components. 
For example, <button onClick={this.handleClick}> passes this.handleClick so you want to bind it.

21import VS require in JS (N)
CommonJS??
import
Can select the method you want
asynchronous(without waiting for previous import)
require
can't selectively load
synchronous(step by step) 

22useparams Hooks:
useParams
This hook gives us access to the params of that particular route. 
params are parameters whose values are set dynamically in a URL
import { useLocation} from "react-router";

const Settings = () => {
    let location = useLocation();
    console.log(location);
    return <div>settings component</div>;
};

function App() {
    return (
        <div className="App">
            <Router>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link
                            to={{
                                pathname: "/settings",
                                state: {
                                    fromNavBar: true
                                }
                            }}
                        >
                            Settings
                        </Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                                       //
                    <Route path="/settings" component={Settings} />
                </Switch>
            </Router>
        </div>
    );
}
The useHistory gives us access to the history object which helps us programmatically navigate or change routes.

The useHistory gives us access to the history object which helps us programmatically navigate or change routes.

The useHistory gives us access to the history object which helps us programmatically navigate or change routes.

23mapdispatchto props
As the second argument passed in to connect, mapDispatchToProps is used for dispatching actions to the store.

dispatch is a function of the Redux store. You call store.dispatch to dispatch an action. This is the only way to trigger a state change.