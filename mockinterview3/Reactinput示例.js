var InputComponent = React.createClass({

    getInitialState: function() {
      return {
        value: ''
      };
    },
  
    handleChange: function(event) {
      this.setState({
        value: event.target.value
      });
    },
  
    render: function() {
  
      return (
        <form>
      <input type='text' className='form-control' placeholder='Write Here' onChange={this.handleChange}/>
        <h1>{this.state.value != '' ? "Right now your input is: " + this.state.value : ''}</h1>
        </form>
      )
    }
  });
  
  ReactDOM.render(
    <InputComponent />,
    document.getElementById('main')
  );
  

  example2: 将输入内容弹出
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );

  example3:设置dropdown然后打印：
  class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'coconut'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  Example4:设计react router：
  var { Router, Route, IndexRoute, Link, browserHistory } = ReactRouter

var MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/widgets">Widgets</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
      )
  }
})

var Home = React.createClass({
  render: function() {
    return (<h1>Home Page</h1>)
  }
})

var SearchLayout = React.createClass({
  render: function() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
      )
  }
})

var UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li>Dan</li>
        <li>Ryan</li>
        <li>Michael</li>
      </ul>
      )
  }
})

var WidgetList = React.createClass({
  render: function() {
    return (
      <ul className="widget-list">
        <li>Widget 1</li>
        <li>Widget 2</li>
        <li>Widget 3</li>
      </ul>
      )
  }
})

// Note that with how CodePen works, I wasn't able to get the browserHistory to work
// as the article suggests. The demo works without it, but you'll want to be sure to 
// use it in a real application
ReactDOM.render((
  <Router>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route component={SearchLayout}>
        <Route path="users" component={UserList} />
        <Route path="widgets" component={WidgetList} />
      </Route> 
    </Route>
  </Router>
), document.getElementById('root'))

Example4 利用props 传递参数：
class App extends React.Component { 
  constructor(){ 
   super(); 
   this.state = { sayings: ""}; 
   } 
  update(e){ 
   this.setState({ sayings: e.target.value}); 
  } 
  render(){ 
   return ( 
    <div> 
     Mukul Says <input type="text" onChange = {this.update.bind(this)}/> 
    <br/> 
    <em>{this.state.sayings}</em> 
   </div> 
  ); 
 } 
} 
ReactDOM.render(< App />, document.getElementById('root')); 
// using refs 
class App extends React.Component { 
  constructor(){ 
   super(); 
   this.state = { sayings: ""}; 
  } 
  update(e){ 
   this.setState({ sayings: this.refs.anything.value}); 
  } 
  render(){ 
   return ( 
    <div> 
     Mukul Says <input type="text" ref="anything"
       onChange = {this.update.bind(this)}/> 
    <br/> 
    <em>{this.state.sayings}</em> 
   </div> 
   ); 
  } 
 } 
  ReactDOM.render(< App />, document.getElementById('root')); 

//  useRef to realize the input and show:
class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.textInput = React.createRef();
    this.state = {
      value: ''
    }
  }

handleSubmit = e => {
  e.preventDefault();
  this.setState({ value: this.textInput.current.value})
};

render() {
  return (
    <div>
      <h1>React Ref - createRef</h1>
      <h3>Value: {this.state.value}</h3>
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.textInput} />
        <button>Submit</button>
      </form>
    </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById("root"));