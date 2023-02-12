import React from 'react';
import {connect} from "react-redux";
import {decrementLikes, incrementLikes} from "./redux/actions";

const Likes = (props) => {
    return (
        <div className='button-controls'>
            <button onClick={props.onIncrementLikes}>❤{props.likes}</button>
            <button onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    const {likeReducer} = state
    return {
        likes: likeReducer.likes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      onIncrementLikes: () => dispatch(incrementLikes()),
      onDecrementLikes: () => dispatch(decrementLikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
