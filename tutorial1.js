var CommentBox = React.createClass({
  render: function() {
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList />
          // <CommentForm />
        </div>
    )
  }
});

var CommentList = React.createClass({
  render: function() {
    return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML={this.rawMarkup()}></span>
        </div>
    )
  }
});

// ReactDOM.render(<CommentBox />, document.getElementById('content'));

// ReactDOM.render(
//     <element />,
//     document.getElementById('content')
// );
//

function tick() {
  const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
  );
  ReactDOM.render(element, document.getElementById('content'));
}

// setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="harhogefoo" />
        <Welcome name="Test" />
      </div>
  )
}
// ReactDOM.render(<App />, document.getElementById('content'));
//
function Avatar(props) {
  return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  )
};

function UserInfo(props) {
  return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
  );
}

function Comment(props) {
  return (
      <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
          {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
  );
}

