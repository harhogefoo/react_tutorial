class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
    );
  }
}

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimantal* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
        <button onClick={(e) => this.handleClick(e)}>
          Click me
        </button>
    )
  }
}

ReactDOM.render(
    <LoggingButton />, document.getElementById('content')
);
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
      <a href="#" onClick={handleClick}>
        Click me
      </a>
  );
}
