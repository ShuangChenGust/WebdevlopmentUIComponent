// function addDash(str){
//     let result = str.split("").join("-");
//     return result;
// }
// let str = "abc";

// console.log(addDash(str));


// let array = [1,2,3,4];
// console.log(array.splice(2,1));
// console.log(array.length);
// array.push(0);
// console.log(array);

console.log("false" == false);
//If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
Bollean"false" cannot be conveted to a Number, which gives NaN;



Concepts:{
    currying modulize
    Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).
    E.g.:
    function curry(f) { // curry(f) does the currying transform
        return function(a) {
          return function(b) {
            return f(a, b);
          };
        };
      }
      
      // usage
      function sum(a, b) {
        return a + b;
      }
      
      let curriedSum = curry(sum);
      
      alert( curriedSum(1)(2) ); // 3

    arrow function
    0.An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
    1.Does not have its own bindings to this or super, and should not be used as methods.
    2.Does not have arguments, or new.target keywords.
    3.Not suitable for call, apply and bind methods, which generally rely on establishing a scope.  
    Can not be used as constructors.
    Can not use yield, within its body.

    e.g.:
    console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]

    prototype and function:
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
          return this.firstName + " " + this.lastName;
        }
      };
      var myFather = new Person("John", "Doe", 50, "blue");
    
    add a new function:
    function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eyecolor;
      }
      
      Person.prototype.name = function() {
        return this.firstName + " " + this.lastName;
      };

    Object in Js object methods

    *function expression:A function expression is very similar to and has almost the same syntax as a function declaration (see function statement for details). 
    The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
    
    promise;
    !important: important property in CSS is used to provide more weight (importance) than normal property. In CSS, the ! important means that “this is important”, ignore all the subsequent rules, and apply !
    "strict mode" :JavaScript's strict mode, introduced in ECMAScript 5, is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: it intentionally has different semantics from normal code. Browsers not supporting strict mode will run strict mode code with different behavior from browsers that do, so don't rely on strict mode without feature-testing for support for the relevant aspects of strict mode. Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode incrementally.
    Eliminates some JavaScript silent errors by changing them to throw errors.
Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.
Prohibits some syntax likely to be defined in future versions of ECMAScript.

    HTML API: 
    Geolocation API can return the coordinates of where the browser is located.

    em and rem;
    While em is relative to the font-size of its direct or nearest parent, rem is only relative to the html (root) font-size. 

    update phase lifecycle

    mouting updating and unmounting;

    Mouting:
    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()

    Updating:
    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()

    Unmouting:
    componentWillUnmount()

    Error handling:
    A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info):
    https://codepen.io/gaearon/pen/wqvxGa?editors=0010


    static getDerivedStateFromError()
    getDerivedStateFromProps is invoked right before calling the render method, both on the initial mount and on subsequent updates. 
    It should return an object to update the state, or null to update nothing.


    componentDidCatch()

    Using the Effect Hook:https://reactjs.org/docs/hooks-effect.html

    1.By using this Hook, you tell React that your component needs to do something after render. 
    React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
    2. Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. 
    3.Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.
    
    e.g.:

    function Example() {
        const [count, setCount] = useState(0);
      
        useEffect(() => {
          document.title = `You clicked ${count} times`;
        });
      }


    Accepts a function that contains imperative, possibly effectful code.

Mutations, subscriptions, timers, logging, and other side effects are not allowed inside the main body of a function component (referred to as React’s render phase). Doing so will lead to confusing bugs and inconsistencies in the UI.

Instead, use useEffect. The function passed to useEffect will run after the render is committed to the screen. Think of effects as an escape hatch from React’s purely functional world into the imperative world.

By default, effects run after every completed render, but you can choose to fire them only when certain values have changed.

    Hooks:
    Sometimes, we want to run some additional code after React has updated the DOM.
     Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup. 


    Redux: one store logical process in reducers
    The whole state of your app is stored in an object tree inside a single store. The only way to change the state tree is to emit an action, an object describing what happened. 
    To specify how the actions transform the state tree, you write pure reducers.
    Instead of mutating the state directly, you specify the mutations you want to happen with plain objects called actions.
    Then you write a special function called a reducer to decide how every action transforms the entire application's state.
    In a typical Redux app, there is just a single store with a single root reducing function. 
    As your app grows, you split the root reducer into smaller reducers independently operating on the different parts of the state tree.

    reducer:
    The reducer is a pure function that takes the previous state and an action, and returns the next state.(previousState, action) => nextState
    It's very important that the reducer stays pure. Things you should never do inside a reducer:
    
    X:
    Mutate its arguments;
    Perform side effects like API calls and routing transitions;
    Call non-pure functions, e.g. Date.now() or Math.random().
    
    e.g.:
    function todoApp(state = initialState, action) {
      switch (action.type) {
        case SET_VISIBILITY_FILTER:
          return Object.assign({}, state, {
            visibilityFilter: action.filter
          })
        default:
          return state
      }

    dispatch:
    Actions are payloads of information that send data from your application to your store. 
    They are the only source of information for the store. You send them to the store using store.dispatch().
    
    action creators:
    In Redux, action creators simply return an action:

    function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
    }

    Redux store:
    The Store is the object that brings them together. The store has the following responsibilities:

    Holds application state;
    Allows access to state via getState();
    Allows state to be updated via dispatch(action);
    Registers listeners via subscribe(listener);
    Handles unregistering of listeners via the function returned by subscribe(listener).

    e.g."// Dispatch some actions
    store.dispatch(addTodo('Learn about actions'))
    store.dispatch(addTodo('Learn about reducers'))
    store.dispatch(addTodo('Learn about store'))
    "

    The data lifecycle in any Redux app follows these 4 steps:
    1 You call store.dispatch(action). An action is a plain object describing what happened. 
    2 The Redux store calls the reducer function you gave it. The store will pass two arguments to the reducer: the current state tree and the action.
    3 The root reducer may combine the output of multiple reducers into a single state tree.
    4 The Redux store saves the complete state tree returned by the root reducer. This new tree is now the next state of your app! Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.

    combine reducers
    Redux ships with a combineReducers() helper function, useful for “splitting” the root reducer 
    into separate functions that each manage one branch of the state tree.
    https://redux.js.org/basics/data-flow

    how to make http calls in react?
    small applications: XMLHttp​Request
    xhr.open('POST', 'https://example.com')

    Large applications:
    axios:The Url
    Post body data (optional)
    A config object (optional)


    Redux-Thunk?
    Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
    The thunk can be used to delay the dispatch of an action,or to dispatch only if a certain condition is met.
    The inner function receives the store methods dispatch and getState as parameters. A thunk is a function that wraps an expression to delay its evaluation.
    
    e.g.:
    function incrementIfOdd() {
        return (dispatch, getState) => {
          const { counter } = getState();
       
          if (counter % 2 === 0) {
            return;
          }
       
          dispatch(increment());
        };
      }

     Ref in React
     Managing focus, text selection, or media playback.
     Triggering imperative animations.
     Integrating with third-party DOM libraries.

     class CustomTextInput extends React.Component {
        constructor(props) {
          super(props);
          // create a ref to store the textInput DOM element
          this.textInput = React.createRef();
          this.focusTextInput = this.focusTextInput.bind(this);
        }
      
        focusTextInput() {
          // Explicitly focus the text input using the raw DOM API
          // Note: we're accessing "current" to get the DOM node
          this.textInput.current.focus();
        }
      
        render() {
          // tell React that we want to associate the <input> ref
          // with the `textInput` that we created in the constructor
          return (
            <div>
              <input
                type="text"
                ref={this.textInput} />
              <input
                type="button"
                value="Focus the text input"
                onClick={this.focusTextInput}
              />
            </div>
          );
        }
      }
      super(props);
      this.textInput = React.createRef();
    }
  
    componentDidMount() {
      this.textInput.current.focusTextInput();
    }
  
    render() {
      return (
        <CustomTextInput ref={this.textInput} />
      );
    }


    class component and function component:
    
    hook + function component;
    
    more function

    constructor, super:
    super(): don't inherit from parents. 
    super(props):props from parents

    forupdate

    purecomponent
    When props or state changes, PureComponent will do a shallow comparison on both props and state. 
    Component on the other hand won’t compare current props and state to next out of the box. 
    Thus, the component will re-render by default whenever shouldComponentUpdate is called.
    当组件更新时，如果组件的 props 和 state 都没发生改变，render 方法就不会触发
    ，省去 Virtual DOM 的生成和比对过程，达到提升性能的目的。具体就是 React 自动帮我们做了一层浅比较：
    Generally we use state or props value to decide the update cycle. 
    React has now provided us a PureComponent which does the comparison of state and props to decide the update cycle. 
    We don’t need to override shouldComponentUpdate if we extend class with PureComponent.

    class Test extends React.PureComponent {
        constructor(props) {
           super(props);
           this.state = {
              taskList: [
                 { title: 'excercise'},
                 { title: 'cooking'},
                 { title: 'Reacting'},
              ]
           };
        }
        componentDidMount() {
           setInterval(() => {
              this.setState((oldState) => {
                 return { taskList: [...oldState.taskList] }
              });
           }, 1000);
        }
        render() {
           console.log(“taskList render called”);
           return (<div>
              {this.state.taskList.map((task, i) => {
                 return (<Task
                    key={i}
                    title={task.title}
                 />);
              })}
           </div>);
        }
     }

    memo :memo is a higher order component If your component renders the same result given the same props, 
    you can wrap it in a call to React. memo for a performance boost in some cases by memoizing the result. 
    This means that React will skip rendering the component, and reuse the last rendered result.

    refs 

    portal 
    Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
    ReactDOM.createPortal(child, container)
    The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

    error bundary;
    Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, 
    log those errors, and display a fallback UI instead of the component tree that crashed.
    A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). 

    Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown.

    React is MVC? View part?
    Model–view–controller is a software design pattern commonly used for developing user interfaces that divides the related program logic into 
    three interconnected elements

    Model-View-ViewModel (MVVM) is a structural design pattern that separates objects into three distinct groups: 
    Models hold application data. They're usually structs or simple classes. Views display visual elements and controls on the screen. 
    They're typically subclasses of UIView .

     React:
     React is what is known as data-driven. Basically, there is only data, a function that takes that data, and the result. In the case of React, the data is the application state, the function is your React components, and the result is the UI. There is no separate view, and there is a model on the sense that the data exists.

    As such, React Native could potentially be called MC because React itself could be called that. As for React Native specifically, it is mainly an abstraction layer between native APIs and your React code. 
    It has no pattern in and of itself. It has no view, model, or controller.
    React is a library for building composable user interfaces.
    It encourages the creation of reusable UI components which present data that changes over time.

     HOC:
    Whereas a component transforms props into UI, a higher-order component transforms a component into another component.
    . Higher-Order Components are not part of the React API. They are the pattern that emerges from React’s compositional nature. 
    The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux’s connect and Relay’s createContainer.

    https://github.com/sudheerj/reactjs-interview-questions 

    lazy loading
    The loading attribute gives us the option to delay off-screen images and iframes until users scroll to their location on the page. loading can take any of these three values:

    lazy: works great for lazy loading
    eager: instructs the browser to load the specified content right away
    auto: leaves the option to lazy load or not to lazy load up to the browser.

    pass props from child components to parents components

    超级简单：通过属性将parent-setState-Function传递给子组件：<MyChildComponent setState = {p => {this.setState（p）}} />在子组件中，通过this.props对其进行调用。 setState（{myObj，...}）;

    Redux-Thunk


    how to .create


    props and state: immutable;
    oneway Binding;
    we just create a new String, not change the state; when we use setState, physical address is changed or not.
    state is changed by create new one in differ function.

    custom dom?

    eventloops

    rest


    A pure component, on the other hand, will not rerender if its parent rerenders, unless the pure component's props (or state) have changed. 
    https://stackoverflow.com/questions/41340697/react-component-vs-react-purecomponent

    The major difference between React.PureComponent and React.Component is PureComponent does a shallow comparison on state change. 
    It means that when comparing scalar values it compares their values, 
    but when comparing objects it compares only references. It helps to improve the performance of the app.

    a component rerenders every time its parent rerenders, regardless of whether the component's props and state have changed.

    A pure component, on the other hand, will not rerender if its parent rerenders, 
    unless the pure component's props (or state) have changed.

    Redux and Context
    According to me, the main advantage of Context API over Redux is that instead of importing actions and using them we get to manipulate the state directly on the component we are currently on. 
    Context API is also easy to set up and is as effective as Redux. 
    Moreover, Context API is the in-built solution, so you don't need to worry about third parties implementing new changes. 

    
    What is context in react?
    Context is designed to share data that can be considered “global” for a tree of React components, 
    such as the current authenticated user, theme, or preferred language. For example, 
    in the code below we manually thread through a “theme” prop in order to style the Button component: class App extends React.

    setState() does not always immediately update the component. It may batch or defer the update until later. 
    This makes reading this.state right after calling setState() a potential pitfall. Instead, use componentDidUpdate or a setState callback (setState(updater, callback)),
     either of which are guaranteed to fire after the update has been applied.
     If you need to set the state based on the previous state, read about the updater argument below.

     Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments
      (for function calls) or elements (for array literals) are expected, 
      or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

}
