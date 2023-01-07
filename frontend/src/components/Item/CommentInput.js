import React, { useState } from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { ADD_COMMENT } from "../../constants/actionTypes";

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ADD_COMMENT, payload }),
});

function CommentInput(props) {
  const { currentUser } = props;
  const [body, setBody] = useState("");

  const createComment = async ev => {
    ev.preventDefault();
    agent.Comments.create(props.slug, {
      body: body,
    }).then((payload) => {
      props.onSubmit(payload);
    });
    setBody("");
  };

  const handleOnChange = ev => {
    setBody(ev.target.value);
  };

  return (
    <form className="card comment-form m-2" onSubmit={createComment}>
        <div className="card-block">
          <textarea
            className="form-control"
            placeholder="Write a comment..."
            value={body}
            onChange={handleOnChange}
            rows="3"
          ></textarea>
        </div>
        <div className="card-footer">
          <img
            src={currentUser.image}
            className="user-pic mr-2"
            alt={currentUser.username}
          />
          <button className="btn btn-sm btn-primary" type="submit">
            Post Comment
          </button>
        </div>
      </form>
  );
}

export default connect(() => ({}), mapDispatchToProps)(CommentInput);
