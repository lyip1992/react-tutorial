var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">Hello World, I am a Comment Box.</div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">Hello World, I am a Comment List.</div>
    );
  }
});
React.render(<CommentBox />, document.getElementById('content'));
