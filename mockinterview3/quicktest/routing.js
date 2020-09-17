//Goal: input and show in another component;

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
  
  //https://facebook.github.io/react/docs/forms.html

